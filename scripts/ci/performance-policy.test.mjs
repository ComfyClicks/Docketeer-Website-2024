import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkInitialResources, javascriptBudgetBytes } from './performance-policy.mjs';

const resources = bytes => [{ name: 'http://127.0.0.1/assets/index.js', decodedBodySize: bytes }];

test('Phase D decoded JavaScript baseline fits the resource budget', () => {
  assert.deepEqual(checkInitialResources(resources(283_976), []).errors, []);
});

test('an oversized JavaScript payload fails even if other measurements are healthy', () => {
  const result = checkInitialResources(resources(javascriptBudgetBytes + 1), []);
  assert.equal(result.errors.length, 1);
  assert.match(result.errors[0], /exceeds/);
});

test('initial GIF and MP4 requests fail before playback, including query strings', () => {
  for (const file of ['demo.GIF?version=1', 'demo.mp4']) {
    const result = checkInitialResources(resources(283_976), [`http://127.0.0.1/assets/${file}`]);
    assert.equal(result.errors.length, 1);
    assert.match(result.errors[0], /before user interaction/);
  }
  assert.deepEqual(checkInitialResources(resources(283_976), ['http://127.0.0.1/assets/poster.webp']).errors, []);
});

test('absent or inaccessible resource measurements cannot silently pass', () => {
  for (const missing of [[], resources(0), resources(NaN)]) {
    assert.match(checkInitialResources(missing, []).errors.join('\n'), /Missing/);
  }
});


test('cross-origin scripts without observable decoded sizes fail instead of escaping the budget', () => {
  const scripts = [...resources(283_976), { name: 'https://cdn.example/script.js', decodedBodySize: 0 }];
  assert.match(checkInitialResources(scripts, []).errors.join('\n'), /Missing/);
});
