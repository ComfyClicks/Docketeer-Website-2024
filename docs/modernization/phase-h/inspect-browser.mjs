import { chromium, webkit } from '@playwright/test';
import { preview } from 'vite';
import { writeFile } from 'node:fs/promises';
const output='docs/modernization/phase-h';
const server=await preview({preview:{host:'127.0.0.1',port:4182,strictPort:true,open:false}});
const results=[];
try {
 for(const [name,engine,width,height] of [['chromium',chromium,320,800],['chromium',chromium,768,450],['webkit',webkit,1440,900]]) {
  const browser=await engine.launch();
  try {
   const page=await browser.newPage({viewport:{width,height},reducedMotion:'reduce'});
   page.setDefaultTimeout(5000);
   const errors=[];page.on('pageerror',e=>errors.push(String(e)));
   await page.goto('http://127.0.0.1:4182/',{waitUntil:'networkidle'});
   await page.evaluate(()=>document.fonts.ready);
   const result={engine:name,version:browser.version(),width,height,errors};results.push(result);
   await page.keyboard.press('Tab');
   result.tabFocus=await page.evaluate(()=>({tag:document.activeElement.tagName,text:document.activeElement.textContent?.slice(0,80)}));
   if(name==='webkit'){
    await page.keyboard.press('Alt+Tab');
    result.altTabFocus=await page.evaluate(()=>({tag:document.activeElement.tagName,text:document.activeElement.textContent?.slice(0,80)}));
    await page.getByRole('link',{name:'Skip to content'}).focus();await page.keyboard.press('Enter');
    result.skipActivation=await page.locator('h1').evaluate(el=>el===document.activeElement);
    await page.emulateMedia({reducedMotion:'no-preference'});
    const button=page.locator('#background-motion');await button.scrollIntoViewIfNeeded();
    result.hitTest=await button.evaluate(el=>{const r=el.getBoundingClientRect();const target=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2);return {rect:r.toJSON(),hitTag:target?.tagName,hitId:target?.id,buttonIsHit:target===el||el.contains(target)};});
    try{await button.click();result.pointerPlay=await button.textContent();}catch(e){result.pointerError=e.message.split('\n')[0];}
    await button.focus();await page.keyboard.press('Enter');result.keyboardPlay=await button.textContent();
   }else {
    result.width=await page.evaluate(()=>document.documentElement.scrollWidth);
    await page.addStyleTag({content:'html {font-size:200% !important}'});
    const menu=page.getByRole('button',{name:'Menu',exact:true});await menu.click();
    result.enlarged=await page.evaluate(()=>({viewport:innerWidth,document:document.documentElement.scrollWidth,menuBottom:document.querySelector('#primary-links').getBoundingClientRect().bottom,viewportHeight:innerHeight}));
    await page.screenshot({path:`${output}/screenshots/enlarged-${width}.png`});
    await page.keyboard.press('Escape');await page.getByRole('link',{name:'Skip to content'}).focus();await page.keyboard.press('Enter');
    result.heading=await page.evaluate(()=>({top:document.querySelector('h1').getBoundingClientRect().top,navBottom:document.querySelector('nav').getBoundingClientRect().bottom}));
   }
   await page.screenshot({path:`${output}/screenshots/inspection-${name}-${width}.png`});
  }catch(e){results.push({engine:name,width,error:String(e)});}
  finally{await browser.close();}
 }
} finally {await new Promise(r=>server.httpServer.close(r));await writeFile(`${output}/browser-inspection.json`,JSON.stringify({date:new Date().toISOString(),method:'Local production preview. CSS 200% root-font is text enlargement, not actual browser zoom. WebKit Alt+Tab is a diagnostic, not a change to site keyboard requirements.',results},null,2)+'\n');}
console.log(JSON.stringify(results,null,2));
