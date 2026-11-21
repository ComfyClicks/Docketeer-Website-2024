// Manual, local production-build checks. No production site or historical reports are touched.
import { mkdir, mkdtemp, writeFile, appendFile, readFile, access } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { chromium } from '@playwright/test';
import { preview } from 'vite';
import { checkInitialResources, javascriptBudgetBytes as jsBudget } from './performance-policy.mjs';

const require = createRequire(import.meta.url);
const cli = join(dirname(require.resolve('lighthouse/package.json')), 'cli/index.js');
await mkdir('reports/performance', { recursive: true });
const output = await mkdtemp(join('reports/performance', new Date().toISOString().replaceAll(':', '-') + '-'));
const metrics = ['first-contentful-paint', 'largest-contentful-paint', 'cumulative-layout-shift', 'total-blocking-time', 'speed-index'];
const median = values => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];
const summary = { date: new Date().toISOString(), node: process.version, output,
  method: 'Local Vite production preview. Three cold Lighthouse navigations per device, serial; default simulated throttling. Independent per-metric medians. Scores/timing are advisory until a CI-runner baseline exists. Separate unthrottled network capture: fresh context, cache disabled, DPR 1, networkidle + 2.5 seconds, no scrolling. Bytes are decoded resource bodies, not transfer or executed bytes.',
  javascriptBudgetBytes: jsBudget, network: {}, lighthouse: {}, failures: [] };
let server;
let browser;

async function captureNetwork(url, profile, width, height) {
  const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1,
    isMobile: profile === 'mobile', hasTouch: profile === 'mobile' });
  try {
    const page = await context.newPage();
    const cdp = await context.newCDPSession(page);
    await cdp.send('Network.enable');
    await cdp.send('Network.setCacheDisabled', { cacheDisabled: true });
    const requested = [];
    const scripts = new Set();
    const errors = [];
    page.on('request', request => requested.push(request.url()));
    page.on('pageerror', error => errors.push(String(error)));
    page.on('requestfailed', request => errors.push(`${request.url()}: ${request.failure()?.errorText}`));
    page.on('response', response => {
      if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
    });
    cdp.on('Network.responseReceived', ({ type, response }) => {
      if (type === 'Script') scripts.add(response.url);
    });
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30_000 });
    // This fixed observation window is measurement methodology, not an interaction-test wait.
    await page.waitForTimeout(2500);
    const resources = await page.evaluate(() => performance.getEntriesByType('resource').map(entry => entry.toJSON()));
    const scriptResources = resources.filter(resource => scripts.has(resource.name));
    for (const name of scripts) {
      if (!scriptResources.some(resource => resource.name === name)) scriptResources.push({ name, decodedBodySize: 0 });
    }
    const policy = checkInitialResources(scriptResources, requested);
    const { decodedJavascriptBytes, initialAnimations } = policy;
    errors.push(...policy.errors);
    const record = { viewport: { width, height }, browser: browser.version(), decodedJavascriptBytes,
      scriptResources, initialAnimations, errors, requested, resources };
    await writeFile(join(output, `network-${profile}.json`), JSON.stringify(record, null, 2));
    summary.network[profile] = { decodedJavascriptBytes, initialAnimationRequests: initialAnimations.length, errors };
    summary.failures.push(...errors.map(error => `${profile}: ${error}`));
  } finally {
    await context.close();
  }
}

function runLighthouse(url, profile, run) {
  const prefix = join(output, `${profile}-${run}`);
  const args = [cli, url, '--output=json', '--output=html', `--output-path=${prefix}`,
    '--chrome-flags=--headless=new', '--only-categories=performance,accessibility,best-practices,seo', '--quiet'];
  if (profile === 'desktop') args.push('--preset=desktop');
  return new Promise((resolve, reject) => {
    const log = createWriteStream(`${prefix}.log`);
    const child = spawn(process.execPath, args, { env: { ...process.env, CHROME_PATH: chromium.executablePath() }, timeout: 240_000 });
    child.stdout.pipe(log, { end: false });
    child.stderr.pipe(log, { end: false });
    child.on('error', error => { log.end(); reject(error); });
    child.on('close', (code, signal) => {
      log.end();
      if (code !== 0) reject(new Error(`Lighthouse ${profile}-${run} failed (${code ?? signal}); see ${prefix}.log`));
      else resolve(`${prefix}.report.json`);
    });
  });
}

try {
  await access('dist/index.html');
  await access(chromium.executablePath());
  await mkdir(output, { recursive: true });
  server = await preview({ preview: { host: '127.0.0.1', port: 4175, strictPort: true, open: false } });
  const url = 'http://127.0.0.1:4175/';
  summary.url = url;
  browser = await chromium.launch();
  summary.browser = browser.version();
  await captureNetwork(url, 'mobile', 390, 844);
  await captureNetwork(url, 'desktop', 1440, 900);
  await browser.close();
  browser = undefined;
  if (summary.failures.length) throw new Error('Initial resource checks failed; skipping Lighthouse to conserve runtime');
  for (const profile of ['mobile', 'desktop']) {
    const runs = [];
    for (let run = 1; run <= 3; run++) {
      console.log(`Lighthouse ${profile} ${run}/3`);
      const report = JSON.parse(await readFile(await runLighthouse(url, profile, run), 'utf8'));
      if (report.runtimeError) throw new Error(`Lighthouse runtime error: ${report.runtimeError.message}`);
      const scores = Object.fromEntries(Object.entries(report.categories).map(([key, category]) => [key, typeof category.score === 'number' ? category.score * 100 : NaN]));
      const measurements = Object.fromEntries(metrics.map(key => [key, report.audits[key].numericValue]));
      if ([...Object.values(scores), ...Object.values(measurements)].some(value => !Number.isFinite(value))) throw new Error('Incomplete Lighthouse measurement');
      runs.push({ scores, metrics: measurements, fetchTime: report.fetchTime, lighthouseVersion: report.lighthouseVersion, config: report.configSettings });
    }
    summary.lighthouse[profile] = { runs, medianScores: Object.fromEntries(Object.keys(runs[0].scores).map(key => [key, median(runs.map(run => run.scores[key]))])),
      medianMetrics: Object.fromEntries(metrics.map(key => [key, median(runs.map(run => run.metrics[key]))])) };
  }
} catch (error) {
  summary.failures.push(String(error));
} finally {
  if (browser) await browser.close();
  if (server) await new Promise(resolve => server.httpServer.close(resolve));
  await mkdir(output, { recursive: true });
  await writeFile(join(output, 'summary.json'), JSON.stringify(summary, null, 2));
  const rows = Object.entries(summary.lighthouse).map(([profile, result]) => {
    const scores = result.medianScores;
    const measured = result.medianMetrics;
    return `| ${profile} | ${scores.performance} | ${scores.accessibility} | ${scores['best-practices']} | ${scores.seo} | ${Math.round(measured['first-contentful-paint'])} | ${Math.round(measured['largest-contentful-paint'])} | ${measured['cumulative-layout-shift']} | ${Math.round(measured['total-blocking-time'])} | ${Math.round(measured['speed-index'])} |`;
  });
  const networkRows = Object.entries(summary.network).map(([profile, result]) => `| ${profile} | ${result.decodedJavascriptBytes} | ${jsBudget} | ${result.initialAnimationRequests} |`);
  const markdown = `# Manual performance report\n\n${summary.date}; Node ${summary.node}; Chromium ${summary.browser ?? 'unavailable'}; Lighthouse ${summary.lighthouse.mobile?.runs[0]?.lighthouseVersion ?? 'unavailable'}.\n\n${summary.method}\n\n| Profile | Performance | Accessibility | Best Practices | SEO | FCP ms | LCP ms | CLS | TBT ms | Speed Index ms |\n|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|\n${rows.join('\n')}\n\n| Profile | Initial decoded JS bytes | JS budget bytes | Initial GIF/MP4 requests |\n|---|---:|---:|---:|\n${networkRows.join('\n')}\n\nDeterministic failures: ${summary.failures.length}\n${summary.failures.map(error => `- ${error}`).join('\n')}\n\nSee summary.json and individual reports for configurations and detailed resource accounting.\n`;
  await writeFile(join(output, 'summary.md'), markdown);
  if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY, markdown);
  console.log(markdown);
  console.log(`Reports: ${output}`);
  if (summary.failures.length) { console.error(summary.failures.join('\n')); process.exitCode = 1; }
}
