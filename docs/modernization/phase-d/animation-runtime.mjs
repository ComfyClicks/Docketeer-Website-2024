// Bounded main-thread lab observation; not GPU, energy, or battery measurement.
import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require('/Users/andywhite/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const records=[];const seconds=5;
try{
 for(const [version,url] of [['before','http://127.0.0.1:4174/'],['after','http://127.0.0.1:4173/']]){
  const page=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1,reducedMotion:'no-preference'});
  await page.addInitScript(()=>{window.__frameCount=0;const raf=requestAnimationFrame.bind(window);window.requestAnimationFrame=cb=>raf(t=>{window.__frameCount++;cb(t)})});
  const cdp=await page.context().newCDPSession(page);await cdp.send('Performance.enable');
  await page.goto(url,{waitUntil:'networkidle'});await page.waitForTimeout(2500);
  for(const state of ['paused','playing']){
   if(state==='playing')await page.locator('#background-motion').evaluate(b=>b.click());
   await page.waitForTimeout(1000);
   for(let run=1;run<=3;run++){
    const start=Object.fromEntries((await cdp.send('Performance.getMetrics')).metrics.map(x=>[x.name,x.value]));const frames=await page.evaluate(()=>window.__frameCount);
    await page.waitForTimeout(seconds*1000);
    const end=Object.fromEntries((await cdp.send('Performance.getMetrics')).metrics.map(x=>[x.name,x.value]));
    records.push({version,url,state,run,seconds,rafCallbacks:(await page.evaluate(()=>window.__frameCount))-frames,taskDurationSeconds:end.TaskDuration-start.TaskDuration,scriptDurationSeconds:end.ScriptDuration-start.ScriptDuration,layoutDurationSeconds:end.LayoutDuration-start.LayoutDuration,recalcStyleDurationSeconds:end.RecalcStyleDuration-start.RecalcStyleDuration,jsHeapUsedSize:end.JSHeapUsedSize});
   }
  }
  await page.close();
 }
 const median=xs=>[...xs].sort((a,b)=>a-b)[Math.floor(xs.length/2)];const summary={};
 for(const version of ['before','after']){summary[version]={};for(const state of ['paused','playing']){const rows=records.filter(r=>r.version===version&&r.state===state);summary[version][state]={};for(const key of ['rafCallbacks','taskDurationSeconds','scriptDurationSeconds','layoutDurationSeconds','recalcStyleDurationSeconds','jsHeapUsedSize'])summary[version][state][key]=median(rows.map(r=>r[key]));}}
 const result={date:new Date().toISOString(),browser:browser.version(),viewport:{width:1440,height:900},deviceScaleFactor:1,secondsPerSample:seconds,records,summary,limitations:['CDP TaskDuration/ScriptDuration are cumulative renderer main-thread time deltas, not OS process CPU%, GPU time, energy use, or battery lifetime.','Whole page is observed; before GIFs and differing assets mean this does not isolate the star renderer perfectly.','No throttling; three bounded five-second samples per state, not a sustained thermal/device benchmark.','RAF callbacks include all page callbacks; viewport remains at hero even when background control is toggled programmatically.']};
 fs.writeFileSync('docs/modernization/phase-d/animation-runtime.json',JSON.stringify(result,null,2));console.log(JSON.stringify(summary,null,2));
}finally{await browser.close()}
