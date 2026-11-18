import { chromium, expect } from '@playwright/test';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
const output = 'docs/modernization/phase-f';
await mkdir(`${output}/validation`, { recursive: true });
const browser = await chromium.launch();
const results = [];
const baseline = await browser.newPage();
await baseline.goto('http://127.0.0.1:4174/');
const originalContributors = await baseline.locator('#team ul').evaluateAll(lists => lists.map(list => [...list.children].map(item => ({ name:item.querySelector('p')?.childNodes[0]?.textContent?.trim(), links:[...item.querySelectorAll('a')].map(link=>link.href) }))));
await baseline.close();
async function overflow(page) {
  return page.evaluate(() => ({ viewport: innerWidth, document: document.documentElement.scrollWidth,
    overflowing: [...document.querySelectorAll('body *')].filter(element => {
      const box = element.getBoundingClientRect(); return box.width && (box.right > innerWidth + 1 || box.left < -1) && getComputedStyle(element).position !== 'fixed';
    }).slice(0, 12).map(element => ({ tag: element.tagName, text: element.textContent?.trim().slice(0, 70), class: element.className })) }));
}
try {
  for (const width of [320,390,700,701,768,1024,1100,1440]) {
    const page = await browser.newPage({ viewport:{width,height:width===768?450:900}, reducedMotion:'reduce' });
    const errors=[];page.on('pageerror',e=>errors.push(String(e)));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
    await page.goto('http://127.0.0.1:4173/');
    await page.evaluate(()=>document.fonts.ready);
    await page.keyboard.press('Tab'); await expect(page.getByRole('link',{name:'Skip to content'})).toBeFocused();
    await page.keyboard.press('Enter');await expect(page.getByRole('heading',{level:1})).toBeFocused();
    const menu=page.getByRole('button',{name:'Menu',exact:true});
    if(width<=1000){await menu.focus();await page.keyboard.press('Enter');await expect(menu).toHaveAttribute('aria-expanded','true');await page.keyboard.press('Escape');await expect(menu).toBeFocused();await expect(menu).toHaveAttribute('aria-expanded','false');}
    const entries=['Containers','Images','Data Visualization','Time-Series','Metrics','Cluster Metrics',width<=700?'Configuration':'Configurations','Others'];
    const demos=[];
    for(const [index,name] of entries.entries()) {
      if(width<=700){if(index)await page.getByRole('button',{name:'Next demo',exact:true}).click();await expect(page.locator('#demo [aria-live="polite"]')).toContainText(`${index+1} of 8`);}
      else await page.getByRole('button',{name,exact:true}).click();
      const figure=page.getByRole('figure',{name:`${name} demo`,exact:true});await expect(figure).toBeVisible();
      const state=await overflow(page);demos.push({name,...state});
      const play=figure.getByRole('button');if(await play.count()){const text=(await play.innerText()).trim();await expect(play).toHaveAccessibleName(text);}
    }
    if(width<=700){await page.getByRole('button',{name:'Next demo',exact:true}).click();await expect(page.locator('#demo [aria-live="polite"]')).toContainText('1 of 8');await page.getByRole('button',{name:'Previous demo',exact:true}).click();await expect(page.locator('#demo [aria-live="polite"]')).toContainText('8 of 8');}
    const contributors=await page.locator('#team ul').evaluateAll(lists=>lists.map(list=>({count:list.children.length,people:[...list.children].map(item=>({name:item.querySelector('p')?.childNodes[0]?.textContent?.trim(),links:[...item.querySelectorAll('a')].map(link=>link.href)}))})));
    assert.deepEqual(contributors.map(list=>list.count),[13,75]);
    assert.deepEqual(contributors.map(list=>list.people),originalContributors);
    results.push({width,height:width===768?450:900,mode:'normal',demos,contributorCounts:contributors.map(list=>list.count),contributorNamesAndUrlsMatchBefore:true,errors});
    await page.close();
  }
  for(const width of [320,390,768,1440]) {
    const height=width===768?450:900;
    const page=await browser.newPage({viewport:{width,height},reducedMotion:'reduce'});
    await page.goto('http://127.0.0.1:4173/');await page.evaluate(()=>document.fonts.ready);
    await page.addStyleTag({content:'html { font-size: 200% !important; }'});
    const enlarged=await overflow(page);
    await page.screenshot({path:`${output}/validation/text-enlarged-${width}.png`});
    const menu=page.getByRole('button',{name:'Menu',exact:true});
    let menuError; let menuBounds;
    if(width<=1000){try{await menu.click({timeout:3000});await expect(menu).toHaveAttribute('aria-expanded','true');menuBounds=await page.locator('#primary-links').evaluate(el=>({bottom:el.getBoundingClientRect().bottom,viewportHeight:innerHeight}));await page.keyboard.press('Escape');}catch(error){menuError=error.message.split('\n')[0];}}
    await page.getByRole('link',{name:'Skip to content'}).focus();await page.keyboard.press('Enter');
    const headingVisibility=await page.evaluate(()=>({headingTop:document.querySelector('h1').getBoundingClientRect().top,navBottom:document.querySelector('nav').getBoundingClientRect().bottom}));
    results.push({width,mode:'200% root-font text enlargement; not actual browser zoom',...enlarged,menuError,menuBounds,headingVisibility});await page.close();
  }
  for(const width of [390,1440]) {
    const page=await browser.newPage({viewport:{width,height:900},forcedColors:'active',reducedMotion:'reduce'});
    await page.goto('http://127.0.0.1:4173/');
    if(width<=700){await page.getByRole('button',{name:'Next demo'}).click();await page.getByRole('button',{name:'Next demo'}).click();}
    else await page.getByRole('button',{name:'Data Visualization',exact:true}).click();
    const play=page.getByRole('button',{name:'Play Data Visualization demonstration',exact:true});await play.focus();await page.keyboard.press('Tab');await page.keyboard.press('Shift+Tab');await expect(play).toBeFocused();
    await page.screenshot({path:`${output}/validation/forced-colors-${width}.png`});
    results.push({width,mode:'forced colors emulation',...await overflow(page),focus:await play.evaluate(el=>({outline:getComputedStyle(el).outlineStyle,outlineWidth:getComputedStyle(el).outlineWidth}))});await page.close();
  }
} finally {
  await browser.close();
  await writeFile(`${output}/responsive-results.json`,JSON.stringify({date:new Date().toISOString(),method:'Installed Playwright Chromium, local production build. Text enlargement is CSS html font-size:200%, not actual browser zoom. Forced colors is browser emulation. No timings or field claims.',results},null,2)+'\n');
}
console.log(JSON.stringify(results.map(({width,mode,document,demos,errors})=>({width,mode,document,demoOverflow:demos?.filter(d=>d.document>d.viewport).map(d=>d.name),errors})),null,2));

if(results.some(result=>result.menuError || (result.menuBounds && result.menuBounds.bottom>result.menuBounds.viewportHeight+1) || result.overflowing?.length || (result.headingVisibility && result.headingVisibility.headingTop < result.headingVisibility.navBottom-1) || result.document>result.viewport || result.demos?.some(demo=>demo.document>demo.viewport) || result.errors?.length)) process.exitCode=1;
