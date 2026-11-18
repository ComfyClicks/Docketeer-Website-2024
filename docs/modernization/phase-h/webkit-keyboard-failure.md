# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: website.spec.ts >> keyboard navigation, mobile menu and direct section links work
- Location: e2e/website.spec.ts:4:1

# Error details

```
Error: expect(locator).toBeFocused() failed

Locator:  getByRole('link', { name: 'Skip to content' })
Expected: focused
Received: inactive
Timeout:  10000ms

Call log:
  - Expect "toBeFocused" getByRole('link', { name: 'Skip to content' }) with timeout 10000ms
  - waiting for getByRole('link', { name: 'Skip to content' })
    23 × locator resolved to <a class="skipLink" href="#main-content">Skip to content</a>
       - unexpected value "inactive"

```

```yaml
- link "Skip to content":
  - /url: "#main-content"
```

# Test source

```ts
  1   | import AxeBuilder from '@axe-core/playwright';
  2   | import { test, expect } from './fixtures';
  3   | 
  4   | test('keyboard navigation, mobile menu and direct section links work', async ({ page }, testInfo) => {
  5   |   await page.goto('/');
  6   |   await page.keyboard.press('Tab');
> 7   |   await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
      |                                                                     ^ Error: expect(locator).toBeFocused() failed
  8   |   await page.keyboard.press('Enter');
  9   |   await expect(page.getByRole('heading', { level: 1 })).toBeFocused();
  10  | 
  11  |   const menu = page.getByRole('button', { name: 'Menu', exact: true });
  12  |   if (testInfo.project.name === 'mobile') {
  13  |     await menu.focus();
  14  |     await page.keyboard.press('Enter');
  15  |     await expect(menu).toHaveAttribute('aria-expanded', 'true');
  16  |     await page.keyboard.press('Tab');
  17  |     await expect(page.getByRole('navigation').getByRole('link', { name: 'Home', exact: true })).toBeFocused();
  18  |     await page.keyboard.press('Escape');
  19  |     await expect(menu).toHaveAttribute('aria-expanded', 'false');
  20  |     await expect(menu).toBeFocused();
  21  |   }
  22  |   for (const [name, id] of [['Features', 'features'], ['Demo', 'demo'], ['Get Started', 'getstarted'], ['Team', 'team'], ['Home', 'home']]) {
  23  |     if (testInfo.project.name === 'mobile') await menu.click();
  24  |     await page.getByRole('navigation').getByRole('link', { name, exact: true }).focus();
  25  |     await page.keyboard.press('Enter');
  26  |     await expect(page).toHaveURL(new RegExp(`#${id}$`));
  27  |     await expect(page.locator(`#${id}`)).toBeFocused();
  28  |     if (testInfo.project.name === 'mobile') await expect(menu).toHaveAttribute('aria-expanded', 'false');
  29  |   }
  30  |   await page.goto('/#team');
  31  |   await expect(page.locator('#team')).toBeInViewport();
  32  | });
  33  | 
  34  | test('every demo preserves media and explicit playback controls', async ({ page }, testInfo) => {
  35  |   const gifRequests: string[] = [];
  36  |   const mediaRequests: string[] = [];
  37  |   page.on('request', request => {
  38  |     if (/\.gif(?:$|\?)/.test(request.url())) gifRequests.push(request.url());
  39  |     if (/\.(?:gif|mp4)(?:$|\?)/.test(request.url())) mediaRequests.push(request.url());
  40  |   });
  41  |   await page.goto('/');
  42  |   await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  43  |   expect(mediaRequests, 'No animations should download on initial navigation').toEqual([]);
  44  |   const mobile = testInfo.project.name === 'mobile';
  45  |   const names = ['Containers', 'Images', 'Data Visualization', 'Time-Series', 'Metrics', 'Cluster Metrics', mobile ? 'Configuration' : 'Configurations', 'Others'];
  46  |   for (const [index, name] of names.entries()) {
  47  |     await test.step(name, async () => {
  48  |       const initialGifCount = gifRequests.length;
  49  |       if (mobile) {
  50  |         if (index) await page.getByRole('button', { name: 'Next demo' }).click();
  51  |       } else await page.getByRole('button', { name, exact: true }).click();
  52  |       const figure = page.getByRole('figure', { name: `${name} demo`, exact: true });
  53  |       await expect(figure).toBeVisible();
  54  |       const video = figure.locator('video');
  55  |       if (await video.count()) {
  56  |         await expect(video).toHaveAttribute('preload', 'none');
  57  |         expect(await video.evaluate((element: HTMLVideoElement) => element.controls && !element.autoplay && element.paused)).toBe(true);
  58  |         const poster = await page.request.get(await video.evaluate((element: HTMLVideoElement) => element.poster));
  59  |         expect(poster.ok()).toBe(true);
  60  |         await video.evaluate((element: HTMLVideoElement) => element.play());
  61  |         await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.currentTime)).toBeGreaterThan(0);
  62  |         expect(await video.evaluate((element: HTMLVideoElement) => !element.error && element.duration > 0 && element.videoWidth > 0 && element.videoHeight > 0)).toBe(true);
  63  |         await video.evaluate((element: HTMLVideoElement) => element.pause());
  64  |         expect(await video.evaluate((element: HTMLVideoElement) => element.paused)).toBe(true);
  65  |       } else {
  66  |         const image = figure.locator('img');
  67  |         await image.scrollIntoViewIfNeeded();
  68  |         await image.evaluate((element: HTMLImageElement) => element.decode());
  69  |         const poster = await image.getAttribute('src');
  70  |         expect(poster).not.toMatch(/\.gif(?:$|\?)/);
  71  |         expect(gifRequests.length, 'Selection must not start a GIF').toBe(initialGifCount);
  72  |         const play = figure.getByRole('button', { name: `Play ${name} demonstration`, exact: true });
  73  |         if (await play.count()) {
  74  |           await play.focus();
  75  |           await page.keyboard.press('Enter');
  76  |           await expect(image).toHaveAttribute('src', /\.gif(?:$|\?)/);
  77  |           await image.evaluate((element: HTMLImageElement) => element.decode());
  78  |           expect(gifRequests.length).toBeGreaterThan(initialGifCount);
  79  |           const stop = figure.getByRole('button', { name: `Stop ${name} demonstration`, exact: true });
  80  |           await expect(stop).toBeFocused();
  81  |           await page.keyboard.press('Space');
  82  |           await expect(image).toHaveAttribute('src', poster!);
  83  |           await image.evaluate((element: HTMLImageElement) => element.decode());
  84  |           await play.click();
  85  |           if (mobile) {
  86  |             await page.getByRole('button', { name: 'Next demo' }).click();
  87  |             await page.getByRole('button', { name: 'Previous demo' }).click();
  88  |           } else {
  89  |             await page.getByRole('button', { name: names[(index + 1) % names.length], exact: true }).click();
  90  |             await page.getByRole('button', { name, exact: true }).click();
  91  |           }
  92  |           await expect(play).toBeVisible();
  93  |           await expect(image).toHaveAttribute('src', poster!);
  94  |         }
  95  |       }
  96  |     });
  97  |   }
  98  |   if (mobile) {
  99  |     await page.getByRole('button', { name: 'Next demo' }).click();
  100 |     await expect(page.getByRole('figure', { name: 'Containers demo' })).toBeVisible();
  101 |     await page.getByRole('button', { name: 'Previous demo' }).click();
  102 |     await expect(page.getByRole('figure', { name: 'Others demo' })).toBeVisible();
  103 |     await page.setViewportSize({ width: 320, height: 800 });
  104 |     for (let step = 0; step < 3; step++) await page.getByRole('button', { name: 'Next demo' }).click();
  105 |     await expect(page.getByRole('button', { name: 'Play Data Visualization demonstration' })).toBeVisible();
  106 |     expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
  107 |   }
```