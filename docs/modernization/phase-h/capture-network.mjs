// Fresh contexts, cache disabled, no throttling; run only outside Lighthouse window.
import fs from 'node:fs';
import {chromium} from '@playwright/test';
const root=process.env.AUDIT_OUTPUT; if(!root)throw Error('AUDIT_OUTPUT required');
const url=process.env.AUDIT_URL||'http://127.0.0.1:4173/';
fs.mkdirSync(`${root}/network`,{recursive:true}); fs.mkdirSync(`${root}/screenshots`,{recursive:true});
const browser=await chromium.launch();
const summary={};
for(const [profile,width,height] of [['desktop',1440,900],['mobile',390,844]]){
 const file=`${root}/network/${profile}.json`;if(fs.existsSync(file))throw Error('Refusing overwrite');
 const context=await browser.newContext({viewport:{width,height},deviceScaleFactor:1,isMobile:profile==='mobile',hasTouch:profile==='mobile'});
 const page=await context.newPage(),cdp=await context.newCDPSession(page);
 await cdp.send('Network.enable');await cdp.send('Network.setCacheDisabled',{cacheDisabled:true});
 const raw={url,profile,viewport:{width,height},browser:browser.version(),date:new Date().toISOString(),requests:[],console:[],exceptions:[],failed:[]}; const pending=new Map();
 cdp.on('Network.responseReceived',({requestId,response,type})=>pending.set(requestId,{url:response.url,status:response.status,type,mimeType:response.mimeType,headers:response.headers}));
 cdp.on('Network.loadingFinished',({requestId,encodedDataLength})=>{if(pending.has(requestId))raw.requests.push({...pending.get(requestId),encodedDataLength})});
 page.on('console',m=>{if(['error','warning'].includes(m.type()))raw.console.push({type:m.type(),text:m.text()})});page.on('pageerror',e=>raw.exceptions.push(String(e)));page.on('requestfailed',r=>raw.failed.push({url:r.url(),error:r.failure()}));
 await page.goto(url,{waitUntil:'networkidle'});await page.waitForTimeout(2500);
 raw.initialRequests=[...raw.requests];raw.resources=await page.evaluate(()=>[...performance.getEntriesByType('navigation'),...performance.getEntriesByType('resource')].map(e=>e.toJSON()));
 raw.page=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,brokenImages:[...document.images].filter(x=>!x.complete||!x.naturalWidth).map(x=>x.src)}));
 await page.screenshot({path:`${root}/screenshots/home-${profile}-${width}x${height}.png`});
 const totals={};for(const type of ['Script','Stylesheet','Image','Font','Document','Media']){const entries=raw.initialRequests.filter(r=>r.type===type);const urls=new Set(entries.map(r=>r.url));totals[type]={requests:entries.length,cdpEncodedDataLength:entries.reduce((n,r)=>n+r.encodedDataLength,0),decodedBodySize:raw.resources.filter(r=>urls.has(r.name)).reduce((n,r)=>n+r.decodedBodySize,0),encodedBodySize:raw.resources.filter(r=>urls.has(r.name)).reduce((n,r)=>n+r.encodedBodySize,0)}}
 summary[profile]={url,browser:raw.browser,date:raw.date,viewport:raw.viewport,totals,initialRequests:raw.initialRequests.length,totalCdpEncodedDataLength:raw.initialRequests.reduce((n,r)=>n+r.encodedDataLength,0),console:raw.console,exceptions:raw.exceptions,failed:raw.failed,page:raw.page};
 // Explicitly decode lazy images before recording failures or taking the loaded page screenshot.
 for(const image of await page.locator('img:visible').all()){await image.scrollIntoViewIfNeeded();await image.evaluate(el=>el.decode());}
 raw.loadedBrokenImages=await page.evaluate(()=>[...document.images].filter(x=>x.getClientRects().length && !x.naturalWidth).map(x=>x.src));
 await page.screenshot({path:`${root}/screenshots/full-${profile}-${width}x${height}.png`,fullPage:true});
 if(profile==='mobile'){await page.evaluate(()=>scrollTo(0,0));await page.getByRole('button',{name:'Menu',exact:true}).click();await page.screenshot({path:`${root}/screenshots/menu-mobile.png`});}
 summary[profile].loadedBrokenImages=raw.loadedBrokenImages;
 fs.writeFileSync(file,JSON.stringify(raw,null,2));await context.close();
}
fs.writeFileSync(`${root}/network/summary.json`,JSON.stringify(summary,null,2));console.log(JSON.stringify(summary,null,2));await browser.close();
