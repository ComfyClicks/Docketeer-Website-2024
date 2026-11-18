// Passive evidence collection only: public GET requests and one browser navigation.
// No account access, settings changes, event injection or deployment.
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { JSDOM } from 'jsdom';
import { chromium } from '@playwright/test';
const origin = 'https://docketeer.io';
const output = process.argv[2];
if (!output) throw new Error('Provide a new evidence directory');
await mkdir(output); // Refuse to replace an earlier capture.
const hash = value => createHash('sha256').update(value).digest('hex');
const cleanUrl = value => { const u = new URL(value); return `${u.origin}${u.pathname}`; };
const headerNames = ['content-type','cache-control','server','age','etag','last-modified','strict-transport-security','content-security-policy','content-security-policy-report-only','reporting-endpoints','x-content-type-options','referrer-policy','permissions-policy','x-frame-options','cross-origin-opener-policy','cross-origin-resource-policy','x-robots-tag','access-control-allow-origin'];
const result = { date: new Date().toISOString(), sourceCommit: execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim(), origin, node:process.version, http:[], browser:null };
async function capture(path) {
  const url = new URL(path, origin);
  if (url.origin !== origin) throw new Error('Only same-origin evidence fetches are allowed');
  const response = await fetch(url, { signal: AbortSignal.timeout(20000) });
  const bytes = Buffer.from(await response.arrayBuffer());
  const record = { url:url.href, finalUrl:cleanUrl(response.url), status:response.status, headers:Object.fromEntries(headerNames.map(key=>[key,response.headers.get(key)])), decodedBytes:bytes.length, sha256:hash(bytes) };
  result.http.push(record);
  return bytes.toString('utf8');
}
let browser;
try {
  const html = await capture('/');
  const document = new JSDOM(html,{url:origin}).window.document;
  result.html = { title:document.title, description:document.querySelector('meta[name="description"]')?.content ?? null,
    scripts:[...document.querySelectorAll('script[src]')].map(el=>cleanUrl(el.src)),
    styles:[...document.querySelectorAll('link[rel="stylesheet"]')].map(el=>cleanUrl(el.href)) };
  for (const url of [...result.html.scripts,...result.html.styles].filter(url=>new URL(url).origin===origin)) await capture(url);
  for (const path of ['/robots.txt','/sitemap.xml']) {
    const text = await capture(path);
    result.http.at(-1).returnsHtml = /<!doctype html|<html/i.test(text);
  }
  const manifest = JSON.parse(await readFile('package.json','utf8'));
  result.directDependencies = manifest.dependencies;
  browser = await chromium.launch();
  const context = await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'});
  const page = await context.newPage();
  const requests=[], failures=[], exceptions=[];
  page.on('request', r=>requests.push({url:cleanUrl(r.url()),type:r.resourceType(),method:r.method()}));
  page.on('requestfailed', r=>failures.push({url:cleanUrl(r.url()),error:r.failure()?.errorText}));
  page.on('pageerror', e=>exceptions.push(String(e).slice(0,500)));
  await page.goto(origin,{waitUntil:'domcontentloaded',timeout:30000});
  await page.waitForTimeout(5000);
  result.browser = { version:browser.version(), method:'Fresh desktop context; reduced motion; initial navigation plus 5 seconds, no interaction. URLs omit queries/fragments. A finite capture cannot prove absence of organizational monitoring.',requests,failures,exceptions,
    scriptElements:await page.locator('script[src]').evaluateAll(elements=>elements.map(e=>{const u=new URL(e.src);return `${u.origin}${u.pathname}`;})) };
} catch(error) {
  result.error=String(error);
  process.exitCode=1;
} finally {
  if(browser) await browser.close();
  await writeFile(`${output}/public-inspection.json`,JSON.stringify(result,null,2)+'\n');
}
console.log(JSON.stringify({output,httpResponses:result.http.length,browserRequests:result.browser?.requests.length,error:result.error}));
