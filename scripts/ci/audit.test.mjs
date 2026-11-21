import { test } from 'node:test';
import assert from 'node:assert/strict';
import { evaluateAudit } from './audit.mjs';

const clean = () => ({ auditReportVersion: 2, vulnerabilities: {}, metadata: { vulnerabilities: { total: 0 } } });
function fixture() {
  const all = clean();
  all.metadata.vulnerabilities.total = 2;
  all.vulnerabilities.picomatch = { severity: 'high', nodes: ['node_modules/picomatch'], via: [{ name: 'picomatch', severity: 'high', url: 'https://github.com/advisories/GHSA-fc5q-39xc-vjpf' }] };
  all.vulnerabilities.vite = { severity: 'high', nodes: ['node_modules/vite'], via: ['picomatch'] };
  return { all, packages: { 'node_modules/picomatch': { dev: true }, 'node_modules/vite': { dev: true } } };
}
const now = new Date('2026-11-17T00:00:00Z');
test('permits only the identified development advisory through its dependency chain', () => {
  const { all, packages } = fixture();
  const result = evaluateAudit(all, clean(), packages, now);
  assert.deepEqual(result.failures, []);
  assert.deepEqual(result.exceptions, ['picomatch', 'vite']);
});
test('rejects new advisories hidden in an otherwise allowed chain', () => {
  const { all, packages } = fixture();
  all.vulnerabilities.picomatch.via.push({ name: 'picomatch', severity: 'high', url: 'https://github.com/advisories/GHSA-other' });
  assert.equal(evaluateAudit(all, clean(), packages, now).failures.length, 2);
});
test('rejects expiry, production reachability and severity escalation', () => {
  const { all, packages } = fixture();
  assert.equal(evaluateAudit(all, clean(), packages, new Date('2026-12-17T00:00:00Z')).failures.length, 2);
  packages['node_modules/picomatch'].dev = false;
  assert.equal(evaluateAudit(all, clean(), packages, now).failures.length, 2);
  packages['node_modules/picomatch'].dev = true;
  all.vulnerabilities.picomatch.severity = 'critical';
  assert.equal(evaluateAudit(all, clean(), packages, now).failures.length, 2);
  assert(evaluateAudit(all, all, packages, now).failures.includes('Production audit contains vulnerabilities.'));
});
test('rejects malformed/network responses and cycles; clean reports need no exception', () => {
  const { all, packages } = fixture();
  assert.throws(() => evaluateAudit({ error: 'registry unavailable' }, clean(), packages, now));
  const incomplete = clean();
  incomplete.metadata.vulnerabilities.total = 7;
  assert.throws(() => evaluateAudit(incomplete, clean(), packages, now), /total disagrees/);
  assert.throws(() => evaluateAudit({ ...clean(), vulnerabilities: [] }, clean(), packages, now), /unsupported/);
  all.vulnerabilities.picomatch.via = ['vite'];
  assert.equal(evaluateAudit(all, clean(), packages, now).failures.length, 2);
  assert.deepEqual(evaluateAudit(clean(), clean(), packages, now).exceptions, []);
});
