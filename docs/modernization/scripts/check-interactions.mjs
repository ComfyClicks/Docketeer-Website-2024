import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'/Users/andywhite/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root=process.env.AUDIT_OUTPUT || 'docs/modernization';
fs.mkdirSync(`${root}/diagnostics/raw`,{recursive:true});
fs.mkdirSync(`${root}/screenshots/before`,{recursive:true});
if(fs.existsSync(`${root}/diagnostics/raw/interactions.json`)) throw new Error('Refusing to overwrite evidence; set AUDIT_OUTPUT.');
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const page=await browser.newPage({viewport:{width:1440,height:900}});
const r={date:new Date().toISOString(),browser:browser.version(),url:'https://docketeer.io/',navigation:[],externalLinks:[],demo:[]};
await page.goto(r.url,{waitUntil:'networkidle'});
for(const name of ['Features','Demo','Get Started','Team','Home']){
 await page.locator('nav').getByText(name,{exact:true}).click();await page.waitForTimeout(900);
 r.navigation.push({label:name,url:page.url(),scrollY:await page.evaluate(()=>scrollY)});
}
await page.locator('nav').getByText('Demo',{exact:true}).click();await page.waitForTimeout(1000);
for(const name of ['Containers','Images','Data Visualization','Time-Series','Metrics','Cluster Metrics','Configurations','Others']){
 await page.locator('[name="demo"]').getByText(name,{exact:true}).click();
 try{await page.waitForFunction(()=>{const i=document.querySelector('[name="demo"] img');return i.complete&&i.naturalWidth>0},{},{timeout:15000});r.demo.push({name,loaded:true});}catch(e){r.demo.push({name,loaded:false,error:String(e)});}
}
for(const url of ['https://github.com/open-source-labs/Docketeer-Extension','https://hub.docker.com/extensions/docketeerxiv/docketeer-extension','https://medium.com/@ellissong/docketeer-xix-new-features-in-uncharted-seas-3baf72099488','https://www.linkedin.com/company/docketeer/']){
 try{const res=await page.request.get(url,{timeout:15000});r.externalLinks.push({url,status:res.status(),finalUrl:res.url()});}catch(e){r.externalLinks.push({url,error:String(e)})}
}
await page.setViewportSize({width:844,height:390});await page.evaluate(()=>scrollTo(0,0));await page.waitForTimeout(500);
r.landscape={viewport:{width:844,height:390},layout:await page.evaluate(()=>({innerWidth,scrollWidth:document.documentElement.scrollWidth,navWidth:document.querySelector('nav ul').getBoundingClientRect().width}))};
await page.screenshot({path:`${root}/screenshots/before/landscape-844x390.png`});
await page.setViewportSize({width:320,height:800});await page.waitForTimeout(500);
r.reflow={viewport:{width:320,height:800},layout:await page.evaluate(()=>({innerWidth,scrollWidth:document.documentElement.scrollWidth})),note:'320 CSS px reflow proxy, not a browser zoom test'};
r.contrast=await page.evaluate(()=>{const a=[...document.querySelectorAll('a')].find(a=>a.textContent.includes('Read about'));return {color:getComputedStyle(a).color,background:getComputedStyle(a).backgroundColor,ancestors:[a.parentElement,a.parentElement.parentElement,document.body].map(e=>({tag:e.tagName,background:getComputedStyle(e).backgroundColor}))}});
fs.writeFileSync(`${root}/diagnostics/raw/interactions.json`,JSON.stringify(r,null,2));
console.log(JSON.stringify(r));await browser.close();
