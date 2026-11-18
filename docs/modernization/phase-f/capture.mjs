import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
const phase = process.argv[2];
if (!['before', 'after'].includes(phase)) throw new Error('Choose before or after');
const output = `docs/modernization/phase-f/${phase}`;
await mkdir(output); // Refuse to overwrite a captured dataset.
const browser = await chromium.launch();
const results = [];
try {
  for (const width of [320, 390, 768, 1024, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
    await page.goto(process.env.AUDIT_URL || 'http://127.0.0.1:4173/');
    await page.evaluate(() => document.fonts.ready);
    for (const section of ['home', 'features', 'demo', 'getstarted', 'team']) {
      await page.locator(`#${section}`).evaluate(element => element.scrollIntoView({ block: 'start' }));
      for (const image of await page.locator(`#${section} img:visible`).all()) {
        await image.scrollIntoViewIfNeeded();
        await image.evaluate(image => image.decode());
      }
      await page.locator(`#${section}`).evaluate(element => element.scrollIntoView({ block: 'start' }));
      await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
      if ([390, 1024, 1440].includes(width)) await page.screenshot({ path: `${output}/${section}-${width}.png` });
    }
    results.push(await page.evaluate(width => ({ width, scrollWidth: document.documentElement.scrollWidth,
      media: [...document.querySelectorAll('#demo img, #demo video')].map(e => ({width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height})),
      headings: [...document.querySelectorAll('h1,h2,h3')].map(e => ({ text:e.textContent, fontSize:getComputedStyle(e).fontSize })) }), width));
    await page.close();
  }
} finally { await browser.close(); }
await writeFile(`${output}/layout.json`, JSON.stringify({browser:browser.version(), results},null,2));
