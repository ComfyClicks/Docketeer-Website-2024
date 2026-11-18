import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);const {chromium}=require('/Users/andywhite/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const results=[];
try{for(const width of [390,1440]){
 const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'});await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle'});
 const imgs=page.locator('#team img[loading="lazy"]');assert.equal(await imgs.count(),13);
 for(const img of await imgs.all()){await img.scrollIntoViewIfNeeded();await img.evaluate(i=>i.decode())}
 const portraits=await imgs.evaluateAll(es=>es.map(i=>({src:i.currentSrc,width:i.naturalWidth,height:i.naturalHeight,renderedWidth:i.width})));assert(portraits.every(x=>x.width>0));
 await page.locator('#team').scrollIntoViewIfNeeded();await page.screenshot({path:`docs/modernization/phase-d/team-loaded-${width}.png`});
 await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:`docs/modernization/phase-d/full-loaded-${width}.png`,fullPage:true});
 results.push({width,portraits});await page.close();
}fs.writeFileSync('docs/modernization/phase-d/lazy-images-results.json',JSON.stringify({date:new Date().toISOString(),results},null,2));console.log('26 portrait loads passed');}finally{await browser.close()}
