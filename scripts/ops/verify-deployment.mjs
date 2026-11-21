// Manual release check: compares public responses with the local dist build.
// Read-only GETs; no login, deployment, scheduling, or telemetry events.
import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve, sep } from 'node:path';
import { JSDOM } from 'jsdom';

const target = new URL(process.argv[2] || 'https://docketeer.io/');
if (!['https:', 'http:'].includes(target.protocol) || target.username || target.password || target.search || target.hash || target.pathname !== '/') {
  throw new Error('Provide an HTTP(S) site origin without credentials, query, fragment or subpath');
}
const output = process.argv[3];
const root = resolve('dist');
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const report = { date: new Date().toISOString(), target: target.origin, method: 'Compare served metadata, entry assets and crawl files with local dist. No claim of exact deployed Git SHA.', checks: [], failures: [] };
function check(name, passed, detail) {
  report.checks.push({ name, passed, detail });
  if (!passed) report.failures.push(name);
}
async function get(path) {
  const url = new URL(path, target);
  if (url.origin !== target.origin) throw new Error('Refusing a cross-origin artifact request');
  const response = await fetch(url, { signal: AbortSignal.timeout(20000) });
  const bytes = Buffer.from(await response.arrayBuffer());
  return { response, bytes };
}
async function artifact(path, mime) {
  const filename = resolve(root, `.${decodeURIComponent(path)}`);
  if (!filename.startsWith(`${root}${sep}`)) throw new Error('Artifact path escaped dist');
  const expected = await readFile(filename);
  const {response, bytes} = await get(path);
  check(path, response.status === 200 && mime.test(response.headers.get('content-type') || '') && sha(bytes) === sha(expected), {
    status:response.status, contentType:response.headers.get('content-type'), expectedSha256:sha(expected), actualSha256:sha(bytes),
    cacheControl:response.headers.get('cache-control'),
  });
}
try {
  const expectedHtml = await readFile(resolve(root,'index.html'),'utf8');
  const expected = new JSDOM(expectedHtml).window.document;
  const {response, bytes} = await get('/');
  const actual = new JSDOM(bytes.toString('utf8')).window.document;
  check('Homepage HTML response',response.status===200 && /text\/html/.test(response.headers.get('content-type') || ''),{status:response.status});
  const config = JSON.parse(await readFile('vercel.json', 'utf8'));
  for (const rule of config.headers || []) {
    if (rule.source !== '/(.*)' || rule.has || rule.missing) throw new Error('Update release verification for non-global header rules');
    for (const { key, value } of rule.headers) {
      check(`Header ${key}`, response.headers.get(key) === value, { expected: value, actual: response.headers.get(key) });
    }
  }
  check('Page title',actual.title===expected.title,{expected:expected.title,actual:actual.title});
  for (const selector of ['meta[name="description"]','link[rel="canonical"]','meta[property="og:url"]','meta[property="og:title"]','meta[property="og:description"]','meta[property="og:image"]','meta[name="twitter:card"]','meta[name="twitter:image"]']) {
    const attribute = selector.startsWith('link') ? 'href' : 'content';
    const wanted = expected.head.querySelector(selector)?.getAttribute(attribute);
    const found = actual.head.querySelectorAll(selector);
    check(selector,Boolean(wanted) && found.length===1 && found[0].getAttribute(attribute)===wanted,{expected:wanted ?? null,actual:found[0]?.getAttribute(attribute) ?? null});
  }
  const assets = document => [...document.querySelectorAll('script[src],link[rel="stylesheet"]')].map(el=>el.getAttribute('src') || el.getAttribute('href')).sort();
  const expectedAssets = assets(expected);
  const actualAssets = assets(actual);
  const entriesMatch = JSON.stringify(expectedAssets) === JSON.stringify(actualAssets);
  check('Entry asset URLs match local build',entriesMatch,{expected:expectedAssets,actual:actualAssets});
  if(entriesMatch) for(const path of expectedAssets) await artifact(path,path.endsWith('.css')?/text\/css/:/(?:java|ecma)script/);
  await artifact('/robots.txt',/text\/plain/);
  await artifact('/sitemap.xml',/xml/);
  const image = new URL(expected.querySelector('meta[property="og:image"]').content);
  await artifact(image.pathname,/image\/png/);
  if(target.hostname==='docketeer.io') {
    const directives = [response.headers.get('x-robots-tag') || '',...actual.querySelectorAll('meta[name="robots"],meta[name="googlebot"]')].map(item=>typeof item==='string'?item:item.content).join(',');
    check('Production does not declare noindex',!/(?:noindex|\bnone\b)/i.test(directives),{directives});
  }
} catch(error) {
  report.failures.push(String(error));
}
if(output) await writeFile(output,JSON.stringify(report,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify(report,null,2));
if(report.failures.length) process.exitCode=1;
