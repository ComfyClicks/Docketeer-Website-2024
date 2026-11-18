import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require('/Users/andywhite/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const results=[];
try{
 for(const width of [390,1440]){
  const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'});const gifRequests=[];page.on('request',r=>{if(/\.gif(?:$|\?)/.test(r.url()))gifRequests.push(r.url())});const errors=[];page.on('pageerror',e=>errors.push(String(e)));
  await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle'});
  assert.equal(gifRequests.length,0,'No initial GIF download');
  const names=width<700?['Containers','Images','Data Visualization','Time-Series','Metrics','Cluster Metrics','Configuration','Others']:['Containers','Images','Data Visualization','Time-Series','Metrics','Cluster Metrics','Configurations','Others'];
  for(let i=0;i<names.length;i++){
   const beforeRequests=gifRequests.length;const name=names[i];if(width<700){if(i)await page.getByRole('button',{name:'Next demo'}).click()}else await page.getByRole('button',{name,exact:true}).click();
   const figure=page.locator('#demo figure');assert.equal(await figure.getAttribute('aria-label'),name+' demo');
   const video=figure.locator('video');let media;
   if(await video.count()){
    await video.scrollIntoViewIfNeeded();
    media=await video.evaluate(v=>({src:v.querySelector('source').src,poster:v.poster,controls:v.controls,preload:v.preload,paused:v.paused,autoplay:v.autoplay,width:v.width,height:v.height}));
    assert(media.controls);assert.equal(media.preload,'none');assert(media.paused);assert(!media.autoplay);
    const poster=await page.request.get(media.poster);assert.equal(poster.status(),200);
    await video.evaluate(async v=>{await v.play()});await page.waitForTimeout(250);
    const playing=await video.evaluate(v=>({paused:v.paused,error:v.error?.message||null,duration:v.duration,width:v.videoWidth,height:v.videoHeight,currentTime:v.currentTime}));
    assert(!playing.paused);assert.equal(playing.error,null);assert(playing.duration>0);assert(playing.width>0);assert(playing.currentTime>0);
    await video.evaluate(v=>v.pause());assert(await video.evaluate(v=>v.paused));
    media={...media,playing,pausedAfter:true};
   }else{
    const img=figure.locator('img');await img.scrollIntoViewIfNeeded();await img.evaluate(i=>i.decode());media=await img.evaluate(i=>({src:i.currentSrc,width:i.naturalWidth,height:i.naturalHeight}));assert(media.width>0);
    const play=figure.getByRole('button',{name:`Play ${name} demonstration`,exact:true});
    if(await play.count()){
     const poster=media.src;assert(!/\.gif(?:$|\?)/.test(poster));assert.equal(gifRequests.length,beforeRequests,'Selection/poster must not request GIF');
     await play.focus();await page.keyboard.press('Enter');await img.evaluate(i=>i.decode());
     const animated=await img.getAttribute('src');assert(/\.gif(?:$|\?)/.test(animated));assert(gifRequests.length>beforeRequests);
     const stop=figure.getByRole('button',{name:`Stop ${name} demonstration`,exact:true});await stop.focus();await page.keyboard.press('Space');await img.evaluate(i=>i.decode());assert.equal(await img.evaluate(i=>i.currentSrc),poster);
     await play.click();await img.evaluate(i=>i.decode());
     if(width<700){await page.getByRole('button',{name:'Next demo'}).click();await page.getByRole('button',{name:'Previous demo'}).click();}else{await page.getByRole('button',{name:names[(i+1)%names.length],exact:true}).click();await page.getByRole('button',{name,exact:true}).click();}
     assert(await play.isVisible());assert(!/\.gif(?:$|\?)/.test(await img.getAttribute('src')));
     media={...media,kind:'opt-in-original-gif',animated,keyboardPlayStop:true,posterRestored:true,selectionReset:true};
    }else media={...media,kind:'static-image'};
   }
   results.push({width,name,passed:true,media});
  }
  assert.equal(errors.length,0,JSON.stringify(errors));await page.close();
 }
 fs.writeFileSync('docs/modernization/phase-d/media-results.json',JSON.stringify({date:new Date().toISOString(),browser:browser.version(),results,limitations:['Playback/pause invoked through browser media APIs; native controls presence is checked but assistive technology and physical-device controls are not manually verified.']},null,2));console.log(`${results.length} desktop/mobile demo variants passed`);
}finally{await browser.close()}
