import {createRequire} from 'node:module';
import fs from 'node:fs';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url);
const {chromium}=require('/Users/andywhite/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const results=[];
try {
 for(const [width,height] of [[320,800],[390,844],[844,390],[1440,900]]){
  const page=await browser.newPage({viewport:{width,height},reducedMotion:'reduce'});
  const errors=[];page.on('pageerror',e=>errors.push(String(e)));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
  await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle'});
  const globalStyles=await page.evaluate(() => ({color:getComputedStyle(document.body).color, margin:getComputedStyle(document.body).margin, font:getComputedStyle(document.body).fontFamily, rootPosition:getComputedStyle(document.getElementById('root')).position}));
  assert.equal(globalStyles.color, 'rgb(255, 255, 255)');assert.equal(globalStyles.margin, '0px');assert(globalStyles.font.includes('Open Sans'));assert.equal(globalStyles.rootPosition, 'static');
  const toggle=page.getByRole('button',{name:'Menu',exact:true});
  if(width<=1000){
   await toggle.focus();await page.keyboard.press('Enter');assert.equal(await toggle.getAttribute('aria-expanded'),'true');
   await page.keyboard.press('Tab');assert.equal(await page.evaluate(()=>document.activeElement.textContent),'Home');
   await page.keyboard.press('Escape');assert.equal(await toggle.getAttribute('aria-expanded'),'false');assert(await toggle.evaluate(e=>e===document.activeElement));
   await page.keyboard.press('Space');assert.equal(await toggle.getAttribute('aria-expanded'),'true');
  }
  for(const [name,id] of [['Features','features'],['Demo','demo'],['Get Started','getstarted'],['Team','team'],['Home','home']]){
   if(width<=1000 && await toggle.getAttribute('aria-expanded')==='false')await toggle.click();
   const link=page.getByRole('navigation').getByRole('link',{name,exact:true});await link.focus();await page.keyboard.press('Enter');await page.waitForTimeout(500);
   assert.equal(new URL(page.url()).hash,'#'+id);
   assert.equal(await page.evaluate(()=>document.activeElement.id),id);
  }
  if(width<=1000)await toggle.click();
  await page.getByRole('navigation').getByRole('link',{name:'Demo',exact:true}).click();await page.waitForTimeout(1200);
  if(width<=700){
   const next=page.getByRole('button',{name:'Next demo'});await next.focus();
   for(const name of ['Images','Data Visualization','Time-Series','Metrics','Cluster Metrics','Configuration','Others','Containers']){await page.keyboard.press('Enter');assert.equal(await page.locator('#demo img').getAttribute('alt'),name+' demo');}
   await page.getByRole('button',{name:'Previous demo'}).focus();await page.keyboard.press('Space');assert.equal(await page.locator('#demo img').getAttribute('alt'),'Others demo');
  }else{
   for(const name of ['Containers','Images','Data Visualization','Time-Series','Metrics','Cluster Metrics','Configurations','Others']){
    const button=page.getByRole('button',{name,exact:true});await button.focus();await page.keyboard.press('Space');assert.equal(await button.getAttribute('aria-pressed'),'true');assert.equal(await page.locator('#demo img').getAttribute('alt'),name+' demo');
   }
  }
  const manifest=await page.request.get('http://127.0.0.1:4173/site.webmanifest');assert.equal(manifest.status(),200);
  for(const icon of (await manifest.json()).icons){const res=await page.request.get('http://127.0.0.1:4173'+icon.src);assert.equal(res.status(),200);assert.match(res.headers()['content-type'],/image\/png/);}
  await page.goto('http://127.0.0.1:4173/#team',{waitUntil:'networkidle'});await page.waitForTimeout(1200);
  const deepLinkY=await page.evaluate(()=>scrollY);assert(deepLinkY>0,'Initial hash must scroll to section');
  await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle'});
  if(width<=1000)await page.getByRole('button',{name:'Menu',exact:true}).click();
  await page.screenshot({path:`docs/modernization/phase-b/navigation-${width}x${height}.png`});
  const navBounds=await page.locator('nav').evaluate(e=>({width:e.getBoundingClientRect().width,scrollWidth:e.scrollWidth}));
  assert.equal(errors.length,0,JSON.stringify(errors));
  results.push({width,height,passed:true,errors,deepLinkY,navBounds,documentWidth:await page.evaluate(()=>document.documentElement.scrollWidth)});
  await page.close();
 }
 fs.writeFileSync('docs/modernization/phase-b/browser-results.json',JSON.stringify({date:new Date().toISOString(),browser:browser.version(),url:'http://127.0.0.1:4173/',results},null,2));console.log(results);
}finally{await browser.close()}
