import {createRequire} from 'node:module';
import fs from 'node:fs';
import {gzipSync} from 'node:zlib';
const require=createRequire(import.meta.url);
const {chromium}=require('/Users/andywhite/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const results=[];
try {
 for(const [width,height] of [[320,800],[390,844],[640,450],[1280,900],[1440,900]]){
  const page=await browser.newPage({viewport:{width,height},reducedMotion:'reduce'});
  const errors=[];page.on('pageerror',e=>errors.push(String(e)));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
  await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle'});await page.waitForTimeout(2500);
  await page.addScriptTag({path:'/Users/andywhite/.npm/_npx/5390d7d89c0de19d/node_modules/axe-core/axe.min.js'});
  const axe=await page.evaluate(()=>window.axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','best-practice']}}));
  fs.writeFileSync(`docs/modernization/phase-c/axe-${width}.json.gz`,gzipSync(JSON.stringify(axe,null,2)));
  await page.keyboard.press('Tab');const firstFocus=await page.evaluate(()=>document.activeElement.textContent);await page.keyboard.press('Enter');const skipFocus=await page.evaluate(()=>({id:document.activeElement.id,tag:document.activeElement.tagName}));
  await page.screenshot({path:`docs/modernization/phase-c/home-${width}.png`,fullPage:true});
  const normal=await page.evaluate(()=>({width:document.documentElement.scrollWidth,headings:[...document.querySelectorAll('h1,h2,h3')].map(x=>[x.tagName,x.textContent]),animations:document.getAnimations().filter(a=>a.playState==='running').length}));
  await page.addStyleTag({content:'* {line-height:1.5 !important;letter-spacing:.12em !important;word-spacing:.16em !important;} p {margin-bottom:2em !important;}'});
  const spaced=await page.evaluate(()=>document.documentElement.scrollWidth);
  results.push({width,height,errors,firstFocus,skipFocus,normal,textSpacingWidth:spaced,violations:axe.violations.map(x=>({id:x.id,impact:x.impact,nodes:x.nodes.length})),incomplete:axe.incomplete.map(x=>({id:x.id,nodes:x.nodes.length}))});await page.close();
 }
 fs.writeFileSync('docs/modernization/phase-c/accessibility-results.json',JSON.stringify({date:new Date().toISOString(),browser:browser.version(),url:'http://127.0.0.1:4173/',results},null,2));console.log(JSON.stringify(results,null,2));
}finally{await browser.close()}
