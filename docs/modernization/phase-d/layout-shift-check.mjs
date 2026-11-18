import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);const {chromium}=require('/Users/andywhite/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});const results=[];
try{for(const [width,height] of [[412,823],[1350,940]]){
 const page=await browser.newPage({viewport:{width,height}});const cdp=await page.context().newCDPSession(page);await cdp.send('Network.enable');await cdp.send('Network.setCacheDisabled',{cacheDisabled:true});await cdp.send('Network.emulateNetworkConditions',{offline:false,latency:150,downloadThroughput:1638.4*1024/8,uploadThroughput:750*1024/8});await cdp.send('Emulation.setCPUThrottlingRate',{rate:4});
 await page.addInitScript(()=>{window.__shifts=[];new PerformanceObserver(list=>{for(const e of list.getEntries())if(!e.hadRecentInput)window.__shifts.push({value:e.value,time:e.startTime,sources:e.sources.map(x=>({node:x.node?.tagName,id:x.node?.id,previous:x.previousRect,current:x.currentRect}))})}).observe({type:'layout-shift',buffered:true})});
 await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle'});await page.waitForTimeout(2500);
 const result=await page.evaluate(()=>({width:innerWidth,rootMinBlockSize:getComputedStyle(document.getElementById('root')).minBlockSize,shifts:window.__shifts,headingVisible:!!document.querySelector('h1'),footerTop:document.querySelector('footer').getBoundingClientRect().top}));
 result.shiftSum=result.shifts.reduce((n,x)=>n+x.value,0);assert(result.shiftSum<0.1,JSON.stringify(result));results.push(result);await page.close();
}fs.writeFileSync('docs/modernization/phase-d/layout-shift-results.json',JSON.stringify({date:new Date().toISOString(),settings:'Actual CDP network emulation latency150ms/down1638.4Kbit/s/up750Kbit/s, CPU4x; both viewports, unthrottled GPU',results,limitations:'ShiftSum is sum of unexpected observed shifts during this bounded navigation, not independently computed session-window CLS or field data.'},null,2));console.log(results.map(x=>({width:x.width,shiftSum:x.shiftSum})));}finally{await browser.close()}
