# Development dependency security exception

Verified 2026-11-18. An exception is a documented, temporary acceptance of a specific audit finding so a known tooling issue does not block unrelated work. It is not remediation and does not establish that development tools are harmless.

## Exact repository policy

`scripts/ci/audit.mjs` fails every production finding and high/critical development finding. It permits only the high-severity development chain for GHSA-fc5q-39xc-vjpf until **2026-12-17T00:00:00Z**. The seven named package entries are picomatch, @parcel/watcher, @vitejs/plugin-react, fdir, tinyglobby, vite and vitest. They refer to **one advisory**, not seven independent flaws. Each reachable entry must remain development-only in the lockfile and lead exclusively to that advisory. A new advisory, critical escalation, production reachability, malformed response, graph cycle or expiry fails the gate. Low/moderate development findings are reported without blocking.

The original reported issue is excessive regular-expression processing with attacker-controlled glob patterns. Public website exploitation was not established. Development/CI tools are a separate execution environment; classifying a dependency as development-only is not proof of no risk.

## New evidence and registry disagreement

The fresh npm audit at **2026-11-18T15:52:27.641Z** still reports seven high development entries and **zero production entries**. The unchanged exception is exercised and the policy passes; this is not a clean full audit.

GitHub withdrew the advisory at **2026-11-18T15:38:56Z**. Its linked maintainer comment disputes treating user-supplied regular-expression-like glob complexity as this vulnerability and advises against accepting untrusted patterns. The advisory's withdrawal sentence itself appears inconsistent (it says “because it is a security issue”); this report does not silently repair that wording or interpret withdrawal as a code patch. The raw GitHub response and comment are preserved alongside the npm response.

The registry's latest picomatch remains **4.0.7**; GitHub lists no patched version. No dependency changed during acceptance. Retain the narrow policy while npm continues returning the entry; recheck propagation and remove the obsolete exception with its focused tests when the complete audit no longer needs it. Do not extend the deadline automatically, broadly suppress audit findings, run force-fix, or claim seven vulnerabilities were fixed by our code. If npm still reports it near expiry, review the authoritative record and explicitly revise policy with dated rationale before the gate fails.

## Evidence and reproduction

- [Current npm summary](security-summary.json), [complete report](security-all.json), [production-only report](security-production.json), [execution log](security.txt).
- [GitHub advisory snapshot](advisory-status.json), [maintainer response](advisory-maintainer.json).
- [Official advisory](https://github.com/advisories/GHSA-fc5q-39xc-vjpf); [linked maintainer comment](https://github.com/micromatch/picomatch/pull/235#issuecomment-6315749381).

From repository root: `npm run audit:ci`; `npm view picomatch version --json`; `gh api /advisories/GHSA-fc5q-39xc-vjpf`. These checks are time-sensitive. The original Phase D/E evidence remains an accurate historical snapshot and has not been rewritten.
