// Diagnostic only: records ordinary input events; does not force clicks or change the page handlers.
import {webkit} from '@playwright/test';
import {preview} from 'vite';
import {writeFile} from 'node:fs/promises';
const server=await preview({preview:{host:'127.0.0.1',port:4183,strictPort:true}});const out=[];
for(const args of [[]]){
 const b=await webkit.launch({args, ...(process.env.ACCEPTANCE_EXECUTABLE ? {executablePath:process.env.ACCEPTANCE_EXECUTABLE} : {})});
 try{for(const kind of ['minimal','site']){
 const p=await b.newPage({viewport:{width:1440,height:900},reducedMotion:'reduce'});
 if(kind==='site')await p.goto('http://127.0.0.1:4183/',{waitUntil:'networkidle'});
 else await p.setContent('<a href="#end">Skip</a><div style="height:5500px">Content</div><button id="end" onclick="this.textContent=\'Clicked\'">Click</button>');
 await p.evaluate(()=>{window.events=[];for(const type of ['pointerdown','mousedown','click'])document.addEventListener(type,e=>window.events.push({type,target:e.target.tagName,id:e.target.id,x:e.clientX,y:e.clientY,pageY:e.pageY}),true);});
 await p.keyboard.press(process.platform==='darwin'?'Alt+Tab':'Tab');const focus=await p.evaluate(()=>document.activeElement.outerHTML.slice(0,180));
 const button=p.locator(kind==='site'?'#background-motion':'button');
 if(kind==='site')await p.emulateMedia({reducedMotion:'no-preference'});
 let result;try{await button.click({timeout:1500});result='clicked';}catch(e){result=e.message.slice(0,120);}
 const box=await button.boundingBox();await p.mouse.click(box.x+box.width/2,box.y+box.height/2);
 out.push({args,kind,focus,result,box,text:await button.textContent(),events:await p.evaluate(()=>window.events),viewport:await p.evaluate(()=>({dpr:devicePixelRatio,innerWidth,innerHeight,scrollY,screenX,screenY}))});await p.close();
 }}finally{await b.close();}
}
await new Promise(r=>server.httpServer.close(r));await writeFile(process.env.DIAGNOSTIC_OUTPUT || 'reports/webkit-fix/minimal-current.json',JSON.stringify(out,null,2));console.log(JSON.stringify(out,null,2));
