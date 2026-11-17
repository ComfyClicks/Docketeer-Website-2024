// Run from repository root. Uses preinstalled tooling; no project dependencies changed.
import fs from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const {chromium} = require(process.env.PLAYWRIGHT_PATH || '/Users/andywhite/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const axePath = process.env.AXE_PATH || '/Users/andywhite/.npm/_npx/5390d7d89c0de19d/node_modules/axe-core/axe.min.js';
const root=process.env.AUDIT_OUTPUT || 'docs/modernization';
fs.mkdirSync(`${root}/diagnostics/raw`,{recursive:true});
fs.mkdirSync(`${root}/screenshots/before`,{recursive:true});
for(const profile of (process.env.PROFILE==='mobile'?['mobile']:['desktop','mobile'])) if(fs.existsSync(`${root}/diagnostics/raw/browser-${profile}.json`)) throw new Error('Refusing to overwrite captured browser evidence; set AUDIT_OUTPUT to a new directory.');
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
for (const [profile,width,height] of (process.env.PROFILE==='mobile' ? [['mobile',390,844]] : [['desktop',1440,900],['mobile',390,844]])) {
 const context=await browser.newContext({viewport:{width,height},deviceScaleFactor:1,isMobile:profile==='mobile',hasTouch:profile==='mobile'});
 const page=await context.newPage();
 const cdp=await context.newCDPSession(page);await cdp.send('Network.enable');await cdp.send('Network.setCacheDisabled',{cacheDisabled:true});
 const log={date:new Date().toISOString(),url:'https://docketeer.io/',profile,viewport:{width,height},deviceScaleFactor:1,browser:browser.version(),console:[],exceptions:[],failed:[],httpErrors:[],requests:[],interactions:[]};
 const requests=new Map();
 cdp.on('Network.responseReceived',({requestId,response,type})=>requests.set(requestId,{url:response.url,status:response.status,type,mimeType:response.mimeType,protocol:response.protocol,headers:response.headers}));
 cdp.on('Network.loadingFinished',({requestId,encodedDataLength})=>{if(requests.has(requestId))log.requests.push({...requests.get(requestId),encodedDataLength});});
 page.on('console',m=>{if(['error','warning'].includes(m.type()))log.console.push({type:m.type(),text:m.text(),location:m.location()})});
 page.on('pageerror',e=>log.exceptions.push(String(e)));
 page.on('requestfailed',r=>log.failed.push({url:r.url(),failure:r.failure()}));
 page.on('response',r=>{if(r.status()>=400)log.httpErrors.push({url:r.url(),status:r.status()})});
 await page.goto(log.url,{waitUntil:'networkidle',timeout:60000});await page.waitForTimeout(2500);
 log.initial={requests:[...log.requests],resources:await page.evaluate(()=>performance.getEntriesByType('resource').map(e=>e.toJSON())),dom:await page.evaluate(()=>({title:document.title,headings:[...document.querySelectorAll('h1,h2,h3,h4')].map(x=>({tag:x.tagName,text:x.textContent})),landmarks:[...document.querySelectorAll('main,nav,header,footer')].map(x=>x.tagName),links:[...document.querySelectorAll('a')].map(x=>({text:x.textContent,href:x.getAttribute('href'),aria:x.getAttribute('aria-label')})),brokenImages:[...document.images].filter(x=>!x.complete||!x.naturalWidth).map(x=>x.src),width:innerWidth,scrollWidth:document.documentElement.scrollWidth,images:[...document.images].map(x=>({src:x.currentSrc,alt:x.getAttribute('alt'),loading:x.loading,naturalWidth:x.naturalWidth,width:x.width,height:x.height}))}))};
 await page.screenshot({path:`${root}/screenshots/before/home-${profile}-${width}x${height}.png`});
 await page.addScriptTag({path:axePath});
 log.axe=await page.evaluate(async()=>{const r=await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','best-practice']}});return {version:axe.version,violations:r.violations,incomplete:r.incomplete,passes:r.passes.map(p=>p.id)}});
 log.keyboard=[];
 await page.mouse.click(width-10,height-10);
 for(let i=0;i<12;i++){await page.keyboard.press('Tab');log.keyboard.push(await page.evaluate(()=>{const e=document.activeElement,s=getComputedStyle(e);return {tag:e.tagName,text:e.textContent?.slice(0,70),href:e.getAttribute('href'),outline:s.outline,boxShadow:s.boxShadow}}))}
 await page.evaluate(()=>scrollTo(0,0));
 if(profile==='mobile'){
  const menu=page.locator('nav ul > div').first();
  log.interactions.push({action:'Check mobile menu',visible:await menu.isVisible(),svgDisplay:await menu.locator('svg').evaluate(x=>getComputedStyle(x).display)});
  if(await menu.isVisible()) await menu.click();
  await page.waitForTimeout(300);
  await page.screenshot({path:`${root}/screenshots/before/navigation-mobile-${width}x${height}.png`});
  log.interactions.push({action:'Mobile navigation visible text (opening skipped if unavailable)',visibleText:await page.locator('nav').innerText()});
 }
 for(const name of ['features','demo','getstarted','team']){
  const section=page.locator(`[name="${name}"]`).first();
  if(await section.count()){await section.scrollIntoViewIfNeeded();await page.waitForTimeout(1100);await page.screenshot({path:`${root}/screenshots/before/${name}-${profile}-${width}x${height}.png`});}
 }
 await page.locator('[name="demo"]').scrollIntoViewIfNeeded();await page.waitForTimeout(1000);
 if(profile==='mobile'){
  for(let i=0;i<8;i++){await page.getByText('→',{exact:true}).click();await page.waitForTimeout(1200);log.interactions.push({action:'Next mobile demo',iteration:i+1,text:await page.locator('[name="demo"]').innerText(),image:await page.locator('[name="demo"] img').getAttribute('src')});}
 }else{
  for(const name of ['Images','Data Visualization','Time-Series','Metrics','Cluster Metrics','Configurations','Others']){
   await page.locator('[name="demo"]').getByText(name,{exact:true}).click();await page.waitForTimeout(1200);log.interactions.push({action:'Select desktop demo',name,image:await page.locator('[name="demo"] img').getAttribute('src')});
  }
 }
 await page.setViewportSize({width:320,height:800});await page.waitForTimeout(300);await page.evaluate(()=>scrollTo(0,0));
 log.reflow320=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth}));
 await page.screenshot({path:`${root}/screenshots/before/reflow320-${profile}.png`});
 await page.emulateMedia({reducedMotion:'reduce'});
 log.reducedMotion=await page.evaluate(()=>({matches:matchMedia('(prefers-reduced-motion: reduce)').matches,animations:document.getAnimations().map(a=>({state:a.playState,target:a.effect?.target?.tagName}))}));
 fs.writeFileSync(`${root}/diagnostics/raw/browser-${profile}.json`,JSON.stringify(log,null,2));
 console.log(JSON.stringify({profile,browser:log.browser,console:log.console,exceptions:log.exceptions,failed:log.failed,httpErrors:log.httpErrors,axe:log.axe.violations.map(x=>({id:x.id,impact:x.impact,nodes:x.nodes.length})),reflow320:log.reflow320}));
 await context.close();
}
await browser.close();
