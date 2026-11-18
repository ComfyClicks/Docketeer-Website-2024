// Run from repository root. An isolated test extension controls actual browser zoom.
// It never touches a user's browser profile or changes website CSS/font sizes.
import { chromium, expect } from '@playwright/test';
import { preview } from 'vite';
import { mkdir, mkdtemp, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
const output=process.env.REVIEW_OUTPUT || 'docs/modernization/phase-h/final-review';
await mkdir(`${output}/screenshots`,{recursive:true});await mkdir('reports/zoom-review',{recursive:true});
const temp=await mkdtemp(resolve('reports/zoom-review/run-'));
const extension=join(temp,'extension');await mkdir(extension);
await writeFile(join(extension,'manifest.json'),JSON.stringify({manifest_version:3,name:'Local acceptance zoom control',version:'1.0',host_permissions:['http://127.0.0.1/*'],background:{service_worker:'worker.js'}}));
await writeFile(join(extension,'worker.js'),'chrome.runtime.onInstalled.addListener(() => {});');
const server=await preview({preview:{host:'127.0.0.1',port:4185,strictPort:true,open:false}});
const results=[];let context;
try{
 context=await chromium.launchPersistentContext(join(temp,'profile'),{channel:'chromium',headless:process.env.REVIEW_HEADED!=='1',viewport:{width:1440,height:900},reducedMotion:'reduce',args:[`--disable-extensions-except=${extension}`,`--load-extension=${extension}`]});
 const worker=context.serviceWorkers()[0] || await context.waitForEvent('serviceworker');
 const page=await context.newPage();
 const errors=[];page.on('pageerror',e=>errors.push(String(e)));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
 const url='http://127.0.0.1:4185/';await page.goto(url,{waitUntil:'networkidle'});
 const tabId=await worker.evaluate(async url=>(await chrome.tabs.query({url}))[0].id,url);
 for(const zoom of [1,2,4]){
  await worker.evaluate(async ({tabId,zoom})=>{await chrome.tabs.setZoom(tabId,zoom);},{tabId,zoom});
  await expect.poll(()=>page.evaluate(()=>innerWidth)).toBe(Math.round(1440/zoom));
  await page.evaluate(async()=>{await document.fonts.ready;scrollTo(0,0);});
  const r={zoom:await worker.evaluate(tabId=>chrome.tabs.getZoom(tabId),tabId),expectedZoom:zoom,geometry:await page.evaluate(()=>({innerWidth,innerHeight,dpr:devicePixelRatio,documentWidth:document.documentElement.scrollWidth})),sections:[]};results.push(r);
  expect(r.zoom).toBeCloseTo(zoom, 6);expect(r.geometry.documentWidth).toBeLessThanOrEqual(r.geometry.innerWidth);
  await page.screenshot({path:`${output}/screenshots/zoom-${zoom*100}-home.png`});
  const menu=page.getByRole('button',{name:'Menu',exact:true});
  if(await menu.isVisible()){
   await menu.focus();await page.keyboard.press('Enter');await expect(menu).toHaveAttribute('aria-expanded','true');
   r.menu=await page.locator('#primary-links').evaluate(el=>({bottom:el.getBoundingClientRect().bottom,top:el.getBoundingClientRect().top,viewportHeight:innerHeight,scrollHeight:el.scrollHeight,clientHeight:el.clientHeight}));
   expect(r.menu.bottom).toBeLessThanOrEqual(r.menu.viewportHeight+1);
   await page.screenshot({path:`${output}/screenshots/zoom-${zoom*100}-menu.png`});
   await page.keyboard.press('Tab');await expect(page.getByRole('navigation').getByRole('link',{name:'Home',exact:true})).toBeFocused();
   await page.keyboard.press('Escape');await expect(menu).toBeFocused();
  }
  await page.getByRole('link',{name:'Skip to content'}).focus();await page.keyboard.press('Enter');await expect(page.locator('h1')).toBeFocused();
  r.heading=await page.evaluate(()=>({top:document.querySelector('h1').getBoundingClientRect().top,navBottom:document.querySelector('nav').getBoundingClientRect().bottom}));
  expect(r.heading.top).toBeGreaterThanOrEqual(r.heading.navBottom-1);
  for(const id of ['features','demo','getstarted','team']){
   await page.locator(`#${id}`).scrollIntoViewIfNeeded();
   const geometry=await page.evaluate(()=>({viewport:innerWidth,document:document.documentElement.scrollWidth}));expect(geometry.document).toBeLessThanOrEqual(geometry.viewport);
   r.sections.push({id,...geometry});
  }
  const mobile=r.geometry.innerWidth<=700;
  if(mobile){await page.getByRole('button',{name:'Next demo',exact:true}).click();await expect(page.getByRole('figure',{name:'Images demo',exact:true})).toBeVisible();await page.getByRole('button',{name:'Previous demo',exact:true}).click();}
  else{await page.getByRole('button',{name:'Images',exact:true}).click();await expect(page.getByRole('figure',{name:'Images demo',exact:true})).toBeVisible();await page.getByRole('button',{name:'Containers',exact:true}).click();}
  await page.locator('#demo').getByRole('heading').scrollIntoViewIfNeeded();await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));await page.screenshot({path:`${output}/screenshots/zoom-${zoom*100}-demo.png`});
  if(mobile){
   r.controls=[];
   for(const name of ['Previous demo','Next demo']){
    const button=page.getByRole('button',{name,exact:true});await button.hover();
    await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
    await page.screenshot({path:`${output}/screenshots/zoom-${zoom*100}-${name.split(' ')[0].toLowerCase()}.png`});
    r.controls.push(await button.evaluate(el=>{const c=getComputedStyle(el),a=getComputedStyle(el.querySelector('span'));return {name:el.getAttribute('aria-label'),text:el.textContent,color:c.color,background:c.backgroundColor,arrowColor:a.color,arrowHidden:el.querySelector('span').getAttribute('aria-hidden'),bounds:el.getBoundingClientRect().toJSON()};}));
   }
  }
  if(zoom===4 && process.env.REVIEW_HEADED==='1'){
   const session=await context.newCDPSession(page);
   r.captureMetrics=await session.send('Page.getLayoutMetrics');
   try {
    const capture=await session.send('Page.captureScreenshot',{format:'png',fromSurface:false});
    await writeFile(`${output}/screenshots/zoom-400-native-viewport.png`,Buffer.from(capture.data,'base64'));
   } catch(error) { r.nativeCaptureError=String(error); }
  }
 }
 expect(errors).toEqual([]);
 await writeFile(`${output}/zoom-results.json`,JSON.stringify({date:new Date().toISOString(),browser:context.browser()?.version(),method:'Actual Chromium per-tab zoom via chrome.tabs.setZoom/getZoom in isolated extension/profile. Fixed 1440x900 outer viewport; no CSS zoom, font-size override or CDP pinch scaling. Browser interaction checks (headless by default; REVIEW_HEADED=1 enables headed mode), not physical device or screen-reader testing.',errors,results},null,2)+'\n');
 console.log('Actual browser zoom at 100%, 200%, 400%: checks passed');
}finally{if(context)await context.close();await new Promise(r=>server.httpServer.close(r));}
