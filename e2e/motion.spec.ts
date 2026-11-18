import { test, expect } from './fixtures';

// Lifecycle is tested once; this test also resizes to a mobile viewport.
test('background motion is opt-in, pausable and respects live reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.addInitScript(() => {
    const state = { frames: 0 };
    Object.defineProperty(window, '__motionTest', { value: state });
    const requestFrame = window.requestAnimationFrame.bind(window);
    window.requestAnimationFrame = callback => requestFrame(time => { state.frames++; callback(time); });
  });
  const frames = () => page.evaluate(() => (window as unknown as { __motionTest: { frames: number } }).__motionTest.frames);
  // A bounded observation window is intentional when asserting no scheduled work.
  const expectStopped = async () => {
    const before = await frames();
    await page.waitForTimeout(200);
    expect(await frames()).toBe(before);
  };
  await page.goto('/');
  const button = page.locator('#background-motion');
  await expect(button).toHaveText('Play background animation');
  await expectStopped();
  await button.click();
  await expect(button).toHaveText('Pause background animation');
  await expect.poll(frames).toBeGreaterThan(0);
  await button.click();
  await expect(button).toHaveText('Play background animation');
  await expectStopped();
  await button.click();
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(button).toBeDisabled();
  await expectStopped();
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await expect(button).toBeEnabled();
  await expect(button).toHaveText('Play background animation');
  await expectStopped();
  await page.setViewportSize({ width: 390, height: 844 });
  const canvas = page.locator('body > canvas');
  await expect(canvas).toHaveAttribute('aria-hidden', 'true');
  await expect.poll(() => canvas.evaluate(element => Math.round(element.getBoundingClientRect().width))).toBe(390);
  await expectStopped();
});

test('a missing Canvas context leaves content and a static background available', async ({ page }) => {
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
      value(this: HTMLCanvasElement, type: string, ...args: unknown[]) {
        return type === '2d' ? null : Reflect.apply(original, this, [type, ...args]);
      },
    });
  });
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.locator('#background-motion')).toBeHidden();
  await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(0, 0, 5)');
});
