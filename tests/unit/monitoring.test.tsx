import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { filterTelemetry } from '../../src/monitoring/monitoring';

const sdk = vi.hoisted(() => ({ analytics: vi.fn(), speed: vi.fn() }));
vi.mock('@vercel/analytics', () => ({ inject: sdk.analytics }));
vi.mock('@vercel/speed-insights', () => ({ injectSpeedInsights: sdk.speed }));
beforeEach(() => {
  vi.resetModules();
  vi.clearAllMocks();
  vi.stubEnv('PROD', true);
  vi.stubEnv('VITE_ENABLE_WEB_ANALYTICS', 'true');
  vi.stubEnv('VITE_ENABLE_SPEED_INSIGHTS', 'true');
  vi.stubGlobal('window', { location: { origin: 'https://docketeer.io' } });
  vi.stubGlobal('navigator', { doNotTrack: '0', globalPrivacyControl: false });
});
afterEach(() => { vi.unstubAllEnvs(); });

test('removes query, fragment and route details without mutating the input', () => {
  const event = { type: 'vital', url: 'https://docketeer.io/?email=private#secret', route: '/?secret' };
  expect(filterTelemetry(event)).toEqual({ type: 'vital', url: 'https://docketeer.io/', route: '/' });
  expect(event.url).toContain('email=private');
});
test.each(['not a url', 'https://other.example/', 'https://docketeer.io/private', 'https://user:secret@docketeer.io/'])('drops unsupported event URL %s', url => {
  expect(filterTelemetry({ type: 'pageview', url })).toBeNull();
});
test('drops custom analytics events', () => {
  expect(filterTelemetry({ type: 'event', url: 'https://docketeer.io/' })).toBeNull();
});
test('initializes both selected SDKs once and passes filtering/sampling options', async () => {
  const { startMonitoring } = await import('../../src/monitoring/monitoring');
  await Promise.all([startMonitoring(), startMonitoring()]);
  expect(sdk.analytics).toHaveBeenCalledTimes(1);
  expect(sdk.speed).toHaveBeenCalledTimes(1);
  expect(sdk.analytics).toHaveBeenCalledWith(expect.objectContaining({ mode: 'production', beforeSend: expect.any(Function) }));
  expect(sdk.speed).toHaveBeenCalledWith(expect.objectContaining({ sampleRate: 0.1, softNavs: false, route: '/', beforeSend: expect.any(Function) }));
});
test.each(['development', 'preview', 'disabled', 'dnt', 'gpc'])('does not initialize monitoring for %s', async condition => {
  if (condition === 'development') vi.stubEnv('PROD', false);
  if (condition === 'preview') vi.stubGlobal('window', { location: { origin: 'https://docketeer-preview.vercel.app' } });
  if (condition === 'disabled') {
    vi.stubEnv('VITE_ENABLE_WEB_ANALYTICS', 'false');
    vi.stubEnv('VITE_ENABLE_SPEED_INSIGHTS', 'false');
  }
  if (condition === 'dnt') vi.stubGlobal('navigator', { doNotTrack: '1' });
  if (condition === 'gpc') vi.stubGlobal('navigator', { globalPrivacyControl: true });
  await (await import('../../src/monitoring/monitoring')).startMonitoring();
  expect(sdk.analytics).not.toHaveBeenCalled();
  expect(sdk.speed).not.toHaveBeenCalled();
});
test('each integration can be enabled independently', async () => {
  vi.stubEnv('VITE_ENABLE_SPEED_INSIGHTS', 'false');
  await (await import('../../src/monitoring/monitoring')).startMonitoring();
  expect(sdk.analytics).toHaveBeenCalledTimes(1);
  expect(sdk.speed).not.toHaveBeenCalled();
});
test('optional SDK initialization failure does not reject site startup', async () => {
  sdk.analytics.mockImplementationOnce(() => { throw new Error('SDK failure'); });
  const warning = vi.spyOn(console, 'warn').mockImplementation(() => {});
  try {
    await expect((await import('../../src/monitoring/monitoring')).startMonitoring()).resolves.toBeUndefined();
    expect(sdk.speed).toHaveBeenCalledTimes(1);
    expect(warning).toHaveBeenCalledWith('[Docketeer] Optional monitoring could not initialize.');
  } finally { warning.mockRestore(); }
});
