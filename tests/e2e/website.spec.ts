import AxeBuilder from '@axe-core/playwright';
import { test, expect } from './fixtures';

test('navigation gains a readable surface over scrolled content', async ({ page }) => {
  await page.goto('/');
  const navigation = page.getByRole('navigation', { name: 'Primary' });
  const scrollSurfaceSupported = await page.evaluate(() => CSS.supports('(animation-timeline: scroll()) and (animation-range: 0% 100%)'));
  if (scrollSurfaceSupported) {
    await expect.poll(() => navigation.evaluate(element => getComputedStyle(element, '::before').opacity)).toBe('0');
  }
  await page.locator('#team').scrollIntoViewIfNeeded();
  if (scrollSurfaceSupported) {
    await expect.poll(() => navigation.evaluate(element => getComputedStyle(element, '::before').opacity)).toBe('1');
    expect(await navigation.evaluate(element => getComputedStyle(element, '::before').backgroundColor)).toBe('rgb(0, 0, 5)');
  } else await expect(navigation).toHaveCSS('background-color', 'rgb(0, 0, 5)');
  // Root scroll padding also protects ordinary keyboard targets, not just anchors.
  const link = page.getByRole('link', { name: 'Arthur Jin on GitHub', exact: true });
  await link.focus();
  const navBox = await navigation.boundingBox();
  const linkBox = await link.boundingBox();
  expect(linkBox!.y).toBeGreaterThanOrEqual(navBox!.y + navBox!.height);
  await page.evaluate(() => window.scrollTo(0, 0));
  if (scrollSurfaceSupported) {
    await expect.poll(() => navigation.evaluate(element => getComputedStyle(element, '::before').opacity)).toBe('0');
  }
});

test('keyboard navigation, mobile menu and direct section links work', async ({ page, browserName }, testInfo) => {
  await page.goto('/');
  // macOS WebKit uses Option-Tab to include links in keyboard navigation.
  const tabKey = browserName === 'webkit' && process.platform === 'darwin' ? 'Alt+Tab' : 'Tab';
  await page.keyboard.press(tabKey);
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('heading', { level: 1 })).toBeFocused();

  const menu = page.getByRole('button', { name: 'Menu', exact: true });
  if (testInfo.project.name === 'mobile') {
    await menu.focus();
    await page.keyboard.press('Enter');
    await expect(menu).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press(tabKey);
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

test('switching demos keeps navigation and the next section in place', async ({ page }, testInfo) => {
  const mobile = testInfo.project.name === 'mobile';
  if (mobile) await page.setViewportSize({ width: 320, height: 800 });
  await page.goto('/#demo');
  await page.evaluate(() => document.fonts.ready);
  const control = page.getByRole('button', { name: mobile ? 'Next demo' : 'Containers', exact: true });
  const documentTop = (locator: typeof control) => locator.evaluate(element => element.getBoundingClientRect().top + window.scrollY);
  const nextSection = page.locator('#getstarted');
  const controlTop = await documentTop(control);
  const nextTop = await documentTop(nextSection);
  const names = ['Images', 'Data Visualization', 'Time-Series', 'Metrics', 'Cluster Metrics', mobile ? 'Configuration' : 'Configurations', 'Others', 'Containers'];

  if (!mobile) {
    const height = await control.evaluate(element => element.getBoundingClientRect().height);
    for (const name of names) {
      const button = page.getByRole('button', { name, exact: true });
      expect(await button.evaluate(element => element.getBoundingClientRect().height), name).toBe(height);
    }
  }

  for (const name of names) {
    await (mobile ? control : page.getByRole('button', { name, exact: true })).click();
    const figure = page.getByRole('figure', { name: `${name} demo`, exact: true });
    await expect(figure).toBeVisible();
    const media = await figure.locator('img, video').boundingBox();
    const playback = await figure.getByRole('button', { name: `Play ${name} demonstration` }).boundingBox();
    expect(playback!.y, name).toBeGreaterThan(media!.y + media!.height);
    expect(Math.abs(playback!.width - media!.width), name).toBeLessThan(1);
    expect(playback!.height).toBeGreaterThanOrEqual(44);
    expect(Math.abs(await documentTop(control) - controlTop), name).toBeLessThan(1);
    expect(Math.abs(await documentTop(nextSection) - nextTop), name).toBeLessThan(1);
  }
});

test('every demo preserves media and explicit playback controls', async ({ page }, testInfo) => {
  const mediaRequests: string[] = [];
  page.on('request', request => {
    if (/(?:\.(?:gif|mp4)|-lossless[^/]*\.webp)(?:$|\?)/.test(request.url())) mediaRequests.push(request.url());
  });
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  expect(mediaRequests, 'No animations should download on initial navigation').toEqual([]);
  const mobile = testInfo.project.name === 'mobile';
  const names = ['Containers', 'Images', 'Data Visualization', 'Time-Series', 'Metrics', 'Cluster Metrics', mobile ? 'Configuration' : 'Configurations', 'Others'];
  for (const [index, name] of names.entries()) {
    await test.step(name, async () => {
      const initialMediaCount = mediaRequests.length;
      if (mobile) {
        if (index) await page.getByRole('button', { name: 'Next demo' }).click();
      } else await page.getByRole('button', { name, exact: true }).click();
      const figure = page.getByRole('figure', { name: `${name} demo`, exact: true });
      await expect(figure).toBeVisible();
      const video = figure.locator('video');
      await expect(video).toBeVisible();
      await video.scrollIntoViewIfNeeded();
      await expect(video).toHaveAttribute('preload', 'none');
      const av1 = video.locator('source').first();
      const fallback = video.locator('source').last();
      const h264Assets: Record<string, string> = {
        'Data Visualization': 'data-visualization-540p-h264',
        'Time-Series': 'time-series-540p-h264',
        Configuration: 'configurations-tight-540p-h264',
        Configurations: 'configurations-tight-540p-h264',
      };
      const h264Asset = h264Assets[name];
      await expect(video.locator('source')).toHaveCount(h264Asset ? 1 : 2);
      if (h264Asset) {
        await expect(fallback).toHaveAttribute('src', new RegExp(`${h264Asset}[^/]*\\.mp4$`));
      } else {
        await expect(av1).toHaveAttribute('type', 'video/mp4; codecs="av01.0.04M.08"');
      }
      await expect(fallback).toHaveAttribute('type', 'video/mp4');
      expect(await video.evaluate((element: HTMLVideoElement) => !element.autoplay && element.paused)).toBe(true);
      const poster = await page.request.get(await video.evaluate((element: HTMLVideoElement) => element.poster));
      expect(poster.ok()).toBe(true);
      expect(mediaRequests.length, 'Selection must not start video playback').toBe(initialMediaCount);
      const play = figure.getByRole('button', { name: `Play ${name} demonstration` });
      await play.focus();
      await page.keyboard.press('Enter');
      await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.currentTime)).toBeGreaterThan(0);
      expect(await video.evaluate((element: HTMLVideoElement) => ({
        error: element.error,
        width: element.videoWidth,
        height: element.videoHeight,
      }))).toEqual({ error: null, width: h264Asset ? 960 : 896, height: h264Asset ? 540 : 504 });
      const expectedSource = await video.evaluate((element: HTMLVideoElement) => {
        const [preferred, fallback] = element.querySelectorAll('source');
        return !fallback || element.canPlayType(preferred.type) ? preferred.src : fallback.src;
      });
      await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.currentSrc)).toBe(expectedSource);
      const stop = figure.getByRole('button', { name: `Stop ${name} demonstration` });
      await expect(stop).toBeFocused();
      await page.keyboard.press('Enter');
      await expect(play).toBeFocused();
      expect(await video.evaluate((element: HTMLVideoElement) => element.paused)).toBe(true);
    });
  }
  if (mobile) {
    await page.getByRole('button', { name: 'Next demo' }).click();
    await expect(page.getByRole('figure', { name: 'Containers demo' })).toBeVisible();
    await page.getByRole('button', { name: 'Previous demo' }).click();
    await expect(page.getByRole('figure', { name: 'Others demo' })).toBeVisible();
    await page.setViewportSize({ width: 320, height: 800 });
    for (let step = 0; step < 3; step++) await page.getByRole('button', { name: 'Next demo' }).click();
    await expect(page.getByRole('figure', { name: 'Data Visualization demo', exact: true }).locator('video')).toBeVisible();
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

test('all demos autoplay in view and stop on request or reduced motion', async ({ page }, testInfo) => {
  const mobile = testInfo.project.name === 'mobile';
  const names = ['Containers', 'Images', 'Data Visualization', 'Time-Series', 'Metrics', 'Cluster Metrics', mobile ? 'Configuration' : 'Configurations', 'Others'];
  const mediaRequests: string[] = [];
  page.on('request', request => {
    if (/(?:\.mp4|-lossless[^/]*\.webp)(?:$|\?)/.test(request.url())) mediaRequests.push(request.url());
  });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  await expect(page.getByRole('button', { name: 'Play Containers demonstration' })).toBeAttached();
  expect(mediaRequests).toEqual([]);

  for (const [index, name] of names.entries()) {
    if (index === 0) {
      await page.getByRole('figure', { name: 'Containers demo' }).scrollIntoViewIfNeeded();
    } else if (mobile) {
      await page.getByRole('button', { name: 'Next demo' }).click();
    } else {
      await page.getByRole('button', { name, exact: true }).click();
    }
    const figure = page.getByRole('figure', { name: `${name} demo` });
    const stop = figure.getByRole('button', { name: `Stop ${name} demonstration` });
    await expect(stop).toHaveText('Stop');
    const video = figure.locator('video');
    await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.currentTime)).toBeGreaterThan(0);
    if (name.startsWith('Configuration')) {
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.paused)).toBe(true);
      await page.emulateMedia({ reducedMotion: 'no-preference' });
    } else await stop.click();
    await expect(figure.getByRole('button', { name: `Play ${name} demonstration` })).toHaveText('Play');
  }
});
