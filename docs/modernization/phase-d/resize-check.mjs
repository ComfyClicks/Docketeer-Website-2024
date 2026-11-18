import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const require=createRequire(import.meta.url);
const {chromium}=require('/Users/andywhite/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
try{
 const page=await browser.newPage({viewport:{width:390,height:844}});
 await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle'});
 const toggle=page.getByRole('button',{name:'Menu',exact:true});
 await toggle.focus();await page.keyboard.press('Enter');
 await page.setViewportSize({width:1440,height:900});await page.waitForTimeout(200);
 assert.equal(await page.evaluate(()=>document.activeElement.textContent),'Home');
 await page.setViewportSize({width:390,height:844});await page.waitForTimeout(200);
 assert.equal(await toggle.getAttribute('aria-expanded'),'false');assert(await toggle.evaluate(e=>e===document.activeElement));
 await toggle.click();await page.getByRole('link',{name:'Start Exploring'}).focus();
 assert.equal(await toggle.getAttribute('aria-expanded'),'false');
 for(const [width,height] of [[320,800],[390,844],[844,390],[1440,900]]){
  await page.setViewportSize({width,height});await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle'});
  if(width<=1000)await toggle.click();
  await page.waitForTimeout(1500);
  await page.screenshot({path:`docs/modernization/phase-d/navigation-${width}x${height}.png`});
 }
 fs.writeFileSync('docs/modernization/phase-d/resize-results.json',JSON.stringify({date:new Date().toISOString(),passed:true,checks:['open mobile to desktop moves focus to Home','desktop to mobile closes and returns focus to Menu','focus leaving navigation closes disclosure'],screenshots:'Phase C final build navigation captures'},null,2));
}finally{await browser.close()}
