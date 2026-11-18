# Phase E dependency and Actions triage

Verified 2026-11-17 using the npm registry and GitHub's official advisory/repository APIs. This investigation did not install packages, change the lockfile, grant permissions or alter GitHub settings.

## Picomatch advisory

[GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf) describes regular-expression denial of service through attacker-controlled repeated extglob patterns. The advisory was updated at `2026-11-17T15:56:44Z`; its affected range is `<= 4.0.7` and `first_patched_version` is null. The npm registry reports latest `4.0.7`, with no later published version. **No compatible published patched candidate was identified.**

The Phase D audit's seven high-severity affected package entries derive from this one advisory; they are not seven independent vulnerabilities. Production-only audit returned zero. Picomatch is in the development toolchain, not the website's production React dependencies. This classification does not establish zero developer/CI exposure or prove an attack path. No adversarial input or exploit test was performed.

| Consumer | Installed version | Picomatch constraint |
| --- | --- | --- |
| `@parcel/watcher` (via Sass) | 2.6.0 | `^4.0.4` |
| `tinyglobby` | 0.2.17 | `^4.0.4` |
| `vite` | 8.3.8 | `^4.0.7` |
| `vitest` | 5.1.0 | `^4.0.7` |
| `fdir` | 6.5.0 | peer `^3 || ^4` |

All currently resolve to picomatch 4.0.7. An eventual compatible 4.x patched version may satisfy these constraints, but neither its existence nor its sufficiency is assumed. npm's audit suggestions to downgrade Vite to 6.2.7, Vitest to 3.1.4 or plugin-react to 5.2.0 are not an approved remediation; `npm audit fix --force` must not be used to force a green report.

Implemented in `scripts/ci/audit.mjs`: fail all production findings and high/critical development findings; report low/moderate development findings without blocking. Only this explicitly identified high-severity development advisory is permitted through a narrow exception until 2026-12-17T00:00:00Z. Every traversed dependency entry must be one of the seven known affected packages, remain development-only in the lockfile, and lead exclusively to this advisory. New high/critical advisories, production reachability, critical escalation, malformed registry responses, graph cycles and expiry fail closed. Clean reports need no exception; remove the obsolete exception after a compatible fix is verified. Recheck the official advisory and registry before any update. A future fix needs a fresh install/build/test/browser verification. Never suppress the complete audit or use a generic high-severity allowance.

Reproduce:

```sh
npm view picomatch version versions --json
gh api /advisories/GHSA-fc5q-39xc-vjpf
npm ls picomatch --all
npm audit --json
npm audit --omit=dev --json
```

## Official Action pins

The latest release tags below were resolved through `/repos/actions/<name>/releases/latest` and `/git/ref/tags/<tag>`. Each tag points directly to a commit, and its `action.yml` declares `runs.using: node24`.

| Action | Verified release | Full commit SHA |
| --- | --- | --- |
| [checkout](https://github.com/actions/checkout/releases/tag/v7.0.1) | v7.0.1 | `3d3c42e5aac5ba805825da76410c181273ba90b1` |
| [setup-node](https://github.com/actions/setup-node/releases/tag/v7.1.0) | v7.1.0 | `949feb2413d6458794dcd2491c4babbbce0c15c1` |
| [upload-artifact](https://github.com/actions/upload-artifact/releases/tag/v7.0.2) | v7.0.2 | `cf430e030ddbb5b0abf93d22962f4752f3646cd9` |

Use read-only contents permissions, checkout with `persist-credentials: false`, standard Linux runners and bounded job timeouts. `setup-node` now enables automatic caching for this repository's `packageManager` field; explicitly set `package-manager-cache: false` when avoiding extra cache storage. Artifact retention supports a one-day minimum. Upload only bounded failure diagnostics by default; do not upload historical baseline reports or entire builds.

The approved plan is one automatic lightweight job, with browser and Lighthouse workflows manually dispatched. No schedules, matrix expansion, larger runners, account changes or automatic dependency PR service are required. A workflow is not a required merge check until the owner separately configures repository rules.

## Gate verification

Run `node --test scripts/ci/audit.test.mjs` for four focused policy tests and `node scripts/ci/audit.mjs` for a live audit. The tests deliberately exercise new-advisory, expired-exception, production, critical-severity, malformed-response and cyclic-chain failures; all four passed locally. Live results are written under ignored `reports/security/` rather than replacing Phase D evidence. Registry unavailability fails the check visibly instead of being interpreted as zero vulnerabilities.
