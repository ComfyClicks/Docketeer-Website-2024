import { spawnSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const advisory = 'https://github.com/advisories/GHSA-fc5q-39xc-vjpf';
const expires = '2026-12-17T00:00:00Z';
const affected = new Set(['picomatch', '@parcel/watcher', '@vitejs/plugin-react', 'fdir', 'tinyglobby', 'vite', 'vitest']);

function validateReport(report) {
  if (report?.error || report?.auditReportVersion !== 2 || !report.vulnerabilities ||
      typeof report.vulnerabilities !== 'object' || Array.isArray(report.vulnerabilities) ||
      Object.getPrototypeOf(report.vulnerabilities) !== Object.prototype ||
      !report.metadata?.vulnerabilities || !Number.isInteger(report.metadata.vulnerabilities.total)) {
    throw new Error('Missing or unsupported npm audit response; refusing to treat it as clean.');
  }
  if (report.metadata.vulnerabilities.total !== Object.keys(report.vulnerabilities).length) {
    throw new Error('Audit total disagrees with its vulnerability graph; refusing to treat it as clean.');
  }
  for (const entry of Object.values(report.vulnerabilities)) {
    if (!entry || !['info', 'low', 'moderate', 'high', 'critical'].includes(entry.severity) ||
        !Array.isArray(entry.nodes) || !Array.isArray(entry.via)) {
      throw new Error('Malformed vulnerability entry; refusing to treat it as clean.');
    }
  }
}

export function evaluateAudit(all, production, packages, now = new Date()) {
  validateReport(all);
  validateReport(production);
  const failures = [];
  const exceptions = [];
  if (production.metadata.vulnerabilities.total > 0 || Object.keys(production.vulnerabilities).length) {
    failures.push('Production audit contains vulnerabilities.');
  }
  function onlyKnownDevelopmentAdvisory(name, visited = new Set()) {
    if (visited.has(name) || !affected.has(name)) return false;
    const entry = all.vulnerabilities[name];
    if (!entry || entry.severity !== 'high' || !entry.nodes?.length || !entry.via?.length) return false;
    if (!entry.nodes.every(node => packages[node]?.dev === true)) return false;
    const next = new Set([...visited, name]);
    return entry.via.every(via => typeof via === 'string'
      ? onlyKnownDevelopmentAdvisory(via, next)
      : name === 'picomatch' && via.name === 'picomatch' && via.url === advisory && via.severity === 'high');
  }
  for (const [name, entry] of Object.entries(all.vulnerabilities)) {
    // Low/moderate development findings remain visible in the complete report.
    if (!['high', 'critical'].includes(entry.severity)) continue;
    if (now < new Date(expires) && onlyKnownDevelopmentAdvisory(name)) exceptions.push(name);
    else failures.push(`${name}: ${entry.severity} finding is not covered by the unexpired development exception.`);
  }
  return { checkedAt: now.toISOString(), exceptionAdvisory: advisory, exceptionExpires: expires,
    totals: all.metadata.vulnerabilities, productionTotals: production.metadata.vulnerabilities, exceptions, failures };
}

function runAudit(args, output) {
  const result = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['audit', '--json', ...args],
    { encoding: 'utf8', timeout: 120_000, maxBuffer: 8 * 1024 * 1024 });
  if (result.stdout) writeFileSync(output, result.stdout);
  if (result.error || ![0, 1].includes(result.status)) throw new Error(`npm audit could not complete: ${result.error?.message || result.stderr || result.status}`);
  const report = JSON.parse(result.stdout);
  validateReport(report);
  return report;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const output = path.resolve('reports/security');
  mkdirSync(output, { recursive: true });
  try {
    const all = runAudit([], path.join(output, 'all.json'));
    const production = runAudit(['--omit=dev'], path.join(output, 'production.json'));
    const lock = JSON.parse(readFileSync('package-lock.json', 'utf8'));
    const result = evaluateAudit(all, production, lock.packages);
    writeFileSync(path.join(output, 'summary.json'), JSON.stringify(result, null, 2) + '\n');
    console.log(JSON.stringify(result, null, 2));
    if (result.failures.length) process.exitCode = 1;
  } catch (error) {
    console.error(`Dependency audit failed: ${error.message}`);
    process.exitCode = 1;
  }
}
