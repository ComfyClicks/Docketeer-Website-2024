import { test, expect } from './fixtures';

test('feature cards reveal once and remain visible with reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  const card = page.getByTestId('feature-card').first();
  await card.scrollIntoViewIfNeeded();
  await expect.poll(() => card.evaluate(element => element.getAnimations().length)).toBeGreaterThan(0);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect.poll(() => card.evaluate(element => element.getAnimations().length)).toBe(0);
  await expect(card).toHaveCSS('opacity', '1');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.evaluate(() => window.scrollTo(0, 0));
  await card.scrollIntoViewIfNeeded();
  await expect(card).toHaveCSS('opacity', '1');
  expect(await card.evaluate(element => element.getAnimations().length)).toBe(0);
});
