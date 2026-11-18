import AxeBuilder from '@axe-core/playwright';
import { test, expect } from './fixtures';

test('keyboard navigation, mobile menu and direct section links work', async ({ page }, testInfo) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('heading', { level: 1 })).toBeFocused();

  const menu = page.getByRole('button', { name: 'Menu', exact: true });
  if (testInfo.project.name === 'mobile') {
    await menu.focus();
    await page.keyboard.press('Enter');
    await expect(menu).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Tab');
    await expect(page.getByRole('navigation').getByRole('link', { name: 'Home', exact: true })).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
    await expect(menu).toBeFocused();
  }
  for (const [name, id] of [['Features', 'features'], ['Demo', 'demo'], ['Get Started', 'getstarted'], ['Team', 'team'], ['Home', 'home']]) {
    if (testInfo.project.name === 'mobile') await menu.click();
    await page.getByRole('navigation').getByRole('link', { name, exact: true }).focus();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    await expect(page.locator(`#${id}`)).toBeFocused();
    if (testInfo.project.name === 'mobile') await expect(menu).toHaveAttribute('aria-expanded', 'false');
  }
  await page.goto('/#team');
  await expect(page.locator('#team')).toBeInViewport();
});

test('every demo preserves media and explicit playback controls', async ({ page }, testInfo) => {
  const gifRequests: string[] = [];
  const mediaRequests: string[] = [];
  page.on('request', request => {
    if (/\.gif(?:$|\?)/.test(request.url())) gifRequests.push(request.url());
    if (/\.(?:gif|mp4)(?:$|\?)/.test(request.url())) mediaRequests.push(request.url());
  });
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  expect(mediaRequests, 'No animations should download on initial navigation').toEqual([]);
  const mobile = testInfo.project.name === 'mobile';
  const names = ['Containers', 'Images', 'Data Visualization', 'Time-Series', 'Metrics', 'Cluster Metrics', mobile ? 'Configuration' : 'Configurations', 'Others'];
  for (const [index, name] of names.entries()) {
    await test.step(name, async () => {
      const initialGifCount = gifRequests.length;
      if (mobile) {
        if (index) await page.getByRole('button', { name: 'Next demo' }).click();
      } else await page.getByRole('button', { name, exact: true }).click();
      const figure = page.getByRole('figure', { name: `${name} demo`, exact: true });
      await expect(figure).toBeVisible();
      const video = figure.locator('video');
      if (await video.count()) {
        await expect(video).toHaveAttribute('preload', 'none');
        expect(await video.evaluate((element: HTMLVideoElement) => element.controls && !element.autoplay && element.paused)).toBe(true);
        const poster = await page.request.get(await video.evaluate((element: HTMLVideoElement) => element.poster));
        expect(poster.ok()).toBe(true);
        await video.evaluate((element: HTMLVideoElement) => element.play());
        await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.currentTime)).toBeGreaterThan(0);
        expect(await video.evaluate((element: HTMLVideoElement) => !element.error && element.duration > 0 && element.videoWidth > 0 && element.videoHeight > 0)).toBe(true);
        await video.evaluate((element: HTMLVideoElement) => element.pause());
        expect(await video.evaluate((element: HTMLVideoElement) => element.paused)).toBe(true);
      } else {
        const image = figure.locator('img');
        await image.scrollIntoViewIfNeeded();
        await image.evaluate((element: HTMLImageElement) => element.decode());
        const poster = await image.getAttribute('src');
        expect(poster).not.toMatch(/\.gif(?:$|\?)/);
        expect(gifRequests.length, 'Selection must not start a GIF').toBe(initialGifCount);
        const play = figure.getByRole('button', { name: `Play ${name} demonstration`, exact: true });
        if (await play.count()) {
          await play.focus();
          await page.keyboard.press('Enter');
          await expect(image).toHaveAttribute('src', /\.gif(?:$|\?)/);
          await image.evaluate((element: HTMLImageElement) => element.decode());
          expect(gifRequests.length).toBeGreaterThan(initialGifCount);
          const stop = figure.getByRole('button', { name: `Stop ${name} demonstration`, exact: true });
          await expect(stop).toBeFocused();
          await page.keyboard.press('Space');
          await expect(image).toHaveAttribute('src', poster!);
          await image.evaluate((element: HTMLImageElement) => element.decode());
          await play.click();
          if (mobile) {
            await page.getByRole('button', { name: 'Next demo' }).click();
            await page.getByRole('button', { name: 'Previous demo' }).click();
          } else {
            await page.getByRole('button', { name: names[(index + 1) % names.length], exact: true }).click();
            await page.getByRole('button', { name, exact: true }).click();
          }
          await expect(play).toBeVisible();
          await expect(image).toHaveAttribute('src', poster!);
        }
      }
    });
  }
  if (mobile) {
    await page.getByRole('button', { name: 'Next demo' }).click();
    await expect(page.getByRole('figure', { name: 'Containers demo' })).toBeVisible();
    await page.getByRole('button', { name: 'Previous demo' }).click();
    await expect(page.getByRole('figure', { name: 'Others demo' })).toBeVisible();
    await page.setViewportSize({ width: 320, height: 800 });
    for (let step = 0; step < 3; step++) await page.getByRole('button', { name: 'Next demo' }).click();
    await expect(page.getByRole('button', { name: 'Play Data Visualization demonstration' })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
  }
});

test('images load, layout reflows and automated accessibility checks pass', async ({ page }, testInfo) => {
  if (testInfo.project.name === 'mobile') await page.setViewportSize({ width: 320, height: 800 });
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  // A lazy image is not broken merely because it has not entered the viewport.
  for (const image of await page.locator('img:visible').all()) {
    await image.scrollIntoViewIfNeeded();
    await image.evaluate((element: HTMLImageElement) => element.decode());
    expect(await image.evaluate((element: HTMLImageElement) => element.naturalWidth)).toBeGreaterThan(0);
  }
  const width = page.viewportSize()!.width;
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
  await page.evaluate(() => window.scrollTo(0, 0));
  const accessibility = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice']).analyze();
  await testInfo.attach('accessibility-review', {
    body: JSON.stringify({ violations: accessibility.violations, incomplete: accessibility.incomplete }, null, 2),
    contentType: 'application/json',
  });
  expect(accessibility.violations).toEqual([]);
  await page.addStyleTag({ content: '* { line-height:1.5 !important; letter-spacing:.12em !important; word-spacing:.16em !important; } p { margin-bottom:2em !important; }' });
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
});


test('security headers and disabled local telemetry preserve the public page', async ({ page }) => {
  const monitoringRequests: string[] = [];
  page.on('request', request => {
    if (request.url().includes('/_vercel/')) monitoringRequests.push(request.url());
  });
  const response = await page.goto('/?privacy-fixture=local#home');
  const headers = response!.headers();
  expect(headers['x-content-type-options']).toBe('nosniff');
  expect(headers['referrer-policy']).toBe('strict-origin');
  expect(headers['permissions-policy']).toBe('camera=(), microphone=(), geolocation=()');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  expect(monitoringRequests).toEqual([]);
});
