import {chromium} from '@playwright/test';
import {mkdir,mkdtemp,writeFile} from 'node:fs/promises';import {resolve,join} from 'node:path';
const out='docs/modernization/phase-h/final-review';const dir=await mkdtemp(resolve('reports/zoom-review/calibration-'));const ext=join(dir,'extension');await mkdir(ext);
await writeFile(join(ext,'manifest.json'),JSON.stringify({manifest_version:3,name:'Zoom calibration',version:'1.0',permissions:['tabs'],background:{service_worker:'worker.js'}}));await writeFile(join(ext,'worker.js'),'chrome.runtime.onInstalled.addListener(()=>{});');
const c=await chromium.launchPersistentContext(join(dir,'profile'),{channel:'chromium',headless:true,viewport:{width:1440,height:900},args:[`--disable-extensions-except=${ext}`,`--load-extension=${ext}`]});
try{
 const w=c.serviceWorkers()[0]||await c.waitForEvent('serviceworker');const p=await c.newPage();
 await p.route('http://zoom-calibration.invalid/',route=>route.fulfill({contentType:'text/html',body:'<!doctype html><html><head><style>body{margin:0;background:white;color:black}header{position:fixed;top:0;background:blue;color:white;width:100%;z-index:10;padding:10px}button{font-size:20px}</style></head><body><header>Fixed calibration header</header><div style="height:6000px">Top of page</div><button>Visible calibration button</button></body></html>'}));
 await p.goto('http://zoom-calibration.invalid/');const id=await w.evaluate(async()=> (await chrome.tabs.query({url:'http://zoom-calibration.invalid/'}))[0].id);
 const results=[];
 for(const zoom of [1,4]){await w.evaluate(async({id,zoom})=>chrome.tabs.setZoom(id,zoom),{id,zoom});await p.locator('button').scrollIntoViewIfNeeded();await p.locator('button').click();await p.screenshot({path:`${out}/screenshots/calibration-${zoom*100}.png`});results.push({zoom:await w.evaluate(id=>chrome.tabs.getZoom(id),id),geometry:await p.locator('button').boundingBox(),viewport:await p.evaluate(()=>({innerWidth,innerHeight,scrollY}))});}
 await writeFile(`${out}/capture-calibration.json`,JSON.stringify({method:'Minimal HTML served entirely by route fulfillment; no external DNS/network request; actual browser zoom and normal button click before capture.',results},null,2)+'\n');
}finally{await c.close();}
