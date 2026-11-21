import { test, expect } from './fixtures';

function monitorStarFieldPaints() {
  const state = { paints: 0 };
  Object.defineProperty(window, '__backgroundPaints', { value: state });
  const fill = CanvasRenderingContext2D.prototype.fill;
  Object.defineProperty(CanvasRenderingContext2D.prototype, 'fill', {
    value(this: CanvasRenderingContext2D, ...args: unknown[]) {
      if (this.canvas.matches('body > canvas[aria-hidden="true"]')) state.paints++;
      return Reflect.apply(fill, this, args);
    },
  });
}

// Lifecycle is tested once; this test also resizes to a mobile viewport.
test('background motion starts automatically and respects live reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.addInitScript(monitorStarFieldPaints);
  const paints = () => page.evaluate(() => (window as unknown as { __backgroundPaints: { paints: number } }).__backgroundPaints.paints);
  // Observe the canvas long enough to detect continued drawing.
  const expectStopped = async () => {
    const before = await paints();
    await page.waitForTimeout(200);
    expect(await paints()).toBe(before);
  };
  await page.goto('/');
  const button = page.locator('#background-motion');
  await expect(button).toHaveText('Pause background');
  await expect.poll(paints).toBeGreaterThan(1);
  await button.click();
  await expect(button).toHaveText('Play background');
  await expectStopped();
  await button.click();
  await expect(button).toHaveText('Pause background');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(button).toBeDisabled();
  await expectStopped();
  const beforeResume = await paints();
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await expect.poll(paints).toBeGreaterThan(beforeResume);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(button).toBeDisabled();
  await expectStopped();
  const beforeResize = await paints();
  await page.setViewportSize({ width: 390, height: 844 });
  const canvas = page.locator('body > canvas');
  await expect(canvas).toHaveAttribute('aria-hidden', 'true');
  await expect.poll(() => canvas.evaluate(element => Math.round(element.getBoundingClientRect().width))).toBe(390);
  await expect.poll(paints).toBeGreaterThan(beforeResize);
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
  await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(0, 0, 25)');
});

test.describe('high-density background rendering', () => {
  test.use({ deviceScaleFactor: 3 });

  test('bounds animation drawing and backing resolution without stopping motion', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await page.addInitScript(monitorStarFieldPaints);
    await page.goto('/');
    const canvas = page.locator('body > canvas');
    await expect(canvas).toHaveAttribute('width', '390');
    await expect(canvas).toHaveAttribute('height', '844');
    const paints = () => page.evaluate(() => (window as unknown as { __backgroundPaints: { paints: number } }).__backgroundPaints.paints);
    await expect.poll(paints).toBeGreaterThan(2);
    const before = await page.evaluate(() => ({
      paints: (window as unknown as { __backgroundPaints: { paints: number } }).__backgroundPaints.paints,
      time: performance.now(),
    }));
    // A bounded observation window tests actual drawing work, not rAF callbacks.
    await page.waitForTimeout(1000);
    const after = await page.evaluate(() => ({
      paints: (window as unknown as { __backgroundPaints: { paints: number } }).__backgroundPaints.paints,
      time: performance.now(),
    }));
    const rendered = after.paints - before.paints;
    expect(rendered).toBeGreaterThan(1);
    expect(rendered / ((after.time - before.time) / 1000)).toBeLessThanOrEqual(32);
    await page.locator('#background-motion').click();
    const paused = await paints();
    await page.waitForTimeout(200);
    expect(await paints()).toBe(paused);
    await page.setViewportSize({ width: 1024, height: 768 });
    await expect(canvas).toHaveAttribute('width', '2048');
    await expect(canvas).toHaveCSS('width', '1024px');
  });
});
