// Exercise real installed SDK loaders against local script-contract fixtures.
// All browser traffic is fulfilled locally: never contacts Vercel or production.
import { build, preview } from 'vite';
import { chromium } from '@playwright/test';
import { mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import assert from 'node:assert/strict';
const output = process.argv[2];
if (!output) throw new Error('Provide a new result filename');
const temporary = await mkdtemp(join(tmpdir(), 'docketeer-monitoring-'));
const config = JSON.parse(await readFile('vercel.json','utf8'));
const headers = Object.fromEntries(config.headers.flatMap(rule=>rule.headers.map(({key,value})=>[key,value])));
await build({ define: { 'import.meta.env.VITE_ENABLE_WEB_ANALYTICS':'"true"','import.meta.env.VITE_ENABLE_SPEED_INSIGHTS':'"true"' }, build:{outDir:temporary,emptyOutDir:true},logLevel:'warn' });
const enabled = await preview({build:{outDir:temporary},preview:{host:'127.0.0.1',port:4178,strictPort:true,open:false,headers}});
const disabled = await preview({preview:{host:'127.0.0.1',port:4179,strictPort:true,open:false,headers}});
const browser = await chromium.launch();
const results=[];
try {
 for(const scenario of ['disabled','enabled','preview','dnt','gpc','blocked-provider']) {
  const context=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'});
  if(scenario==='dnt') await context.addInitScript(()=>Object.defineProperty(navigator,'doNotTrack',{value:'1'}));
  if(scenario==='gpc') await context.addInitScript(()=>Object.defineProperty(navigator,'globalPrivacyControl',{value:true}));
  const origin=scenario==='preview'?'https://preview.example':'https://docketeer.io';
  const local=scenario==='disabled'?'http://127.0.0.1:4179':'http://127.0.0.1:4178';
  const page=await context.newPage();
  const requests=[], errors=[], scripts=[];
  let decodedScriptBytes=0;
  page.on('pageerror',error=>errors.push(error.message));
  await page.route('**/*',async route=>{
    const request=route.request();
    const url=new URL(request.url());
    assert.equal(url.origin,origin,'Unexpected outbound origin');
    requests.push(url.pathname);
    if(url.pathname.startsWith('/_vercel/')) {
      scripts.push(url.pathname);
      if(scenario==='blocked-provider') { await route.abort('blockedbyclient');return; }
      const analytics=url.pathname.includes('/insights/');
      const queue=analytics?'vaq':'siq';
      const type=analytics?'pageview':'vital';
      await route.fulfill({contentType:'text/javascript',body:`
        (() => {
        const hook = window.${queue}.find(entry => entry[0] === 'beforeSend')[1];
        window.__monitoringProof ??= [];
        window.__monitoringProof.push({ integration: '${type}',
          clean: hook({ type: '${type}', url: location.href }),
          rejected: hook({ type: '${type}', url: location.origin + '/private?fixture=private' }) });
        })();
      `});
      return;
    }
    const response=await fetch(`${local}${url.pathname}${url.search}`);
    const body=Buffer.from(await response.arrayBuffer());
    if(request.resourceType()==='script') decodedScriptBytes+=body.length;
    const responseHeaders=Object.fromEntries(response.headers);
    delete responseHeaders['content-encoding'];delete responseHeaders['content-length'];delete responseHeaders['transfer-encoding'];
    await route.fulfill({status:response.status,headers:responseHeaders,body});
  });
  await page.goto(`${origin}/?fixture=private#secret`,{waitUntil:'networkidle'});
  await page.waitForTimeout(300);
  assert.equal(await page.locator('h1').textContent(),'Introducing Docketeer XX');
  assert.deepEqual(errors,[]);
  const proof=await page.evaluate(()=>window.__monitoringProof ?? []);
  if(scenario==='enabled') {
    assert.equal(scripts.length,2);assert.equal(new Set(scripts).size,2);
    assert.equal(proof.length,2);
    for(const item of proof) { assert.equal(item.clean.url,'https://docketeer.io/');assert.equal(item.rejected,null); }
    const sample=await page.locator('script[src*="speed-insights"]').getAttribute('data-sample-rate');
    assert.equal(sample,'0.1');
  } else if(scenario==='blocked-provider') { assert.equal(scripts.length,2); }
  else assert.deepEqual(scripts,[]);
  // Navigation remains usable even when provider scripts cannot load.
  await page.getByRole('link',{name:'Features',exact:true}).click();
  assert.equal(new URL(page.url()).hash,'#features');
  results.push({scenario,scripts,proof,uncaughtExceptions:errors,decodedLocalScriptBytes:decodedScriptBytes});
  await context.close();
 }
} finally {
 await browser.close();
 for(const server of [enabled,disabled]) await new Promise(resolve=>server.httpServer.close(resolve));
}
await writeFile(output,JSON.stringify({date:new Date().toISOString(),browser:browser.version(),method:'Actual SDK loaders and local generated-script contract fixtures, no external traffic. Does not test live Vercel collector scripts, payloads, dashboard ingestion or remote script cost.',results},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify(results));
