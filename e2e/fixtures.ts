import { test as base, expect } from '@playwright/test';

export const test = base.extend<{ runtimeGuard: void }>({
  runtimeGuard: [async ({ page }, use, testInfo) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(`Exception: ${error.message}`));
    page.on('console', message => {
      if (message.type() === 'error') errors.push(`Console: ${message.text()}`);
    });
    page.on('response', response => {
      if (response.url().startsWith('http://127.0.0.1:4173/') && response.status() >= 400) {
        errors.push(`HTTP ${response.status()}: ${response.url()}`);
      }
    });
    page.on('requestfailed', request => {
      const reason = request.failure()?.errorText ?? 'unknown';
      // Switching demos legitimately cancels an in-flight media request.
      const expectedMediaCancellation = reason.includes('ERR_ABORTED') && ['image', 'media'].includes(request.resourceType());
      if (!expectedMediaCancellation) errors.push(`Request failed: ${request.url()} (${reason})`);
    });
    await use();
    if (errors.length) await testInfo.attach('runtime-errors', { body: errors.join('\n'), contentType: 'text/plain' });
    expect(errors, 'Application console, exception and network errors').toEqual([]);
  }, { auto: true }],
});

export { expect };
