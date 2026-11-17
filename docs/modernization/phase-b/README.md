# Phase B — Dependency modernization with TypeScript 7

Measured 2026-11-17 on the local, uncommitted `feat/website-modernization` working tree, based on `bbeb38ac1a3f8c3d8568408b4385d09d97f34cba`. Repository: https://github.com/ComfyClicks/Docketeer-Website-2024.git. Production has not been deployed or remeasured. The owner's request to use TypeScript 7 supersedes the original roadmap's recommendation to hold TypeScript at the old parser/test-transform compatibility boundary.

## Implemented

- Upgraded through Vite 5, 6, 7 and 8, ending at Vite 8.3.8/plugin-react 6.3.0. React 18.3.1 was used as the bridge to React/React DOM 19.3.1. Updated React types and namespaced `React.JSX.Element`, Sass, Three.js/types, intersection-observer wrapper and Jest/Testing Library.
- Removed unused React Router, react-scroll, direct react-three/fiber and the deprecated test observer polyfill. Replaced umbrella react-spring with web-only `@react-spring/web` 10.1.2. Moved testing packages to development dependencies. The test observer mock represents visibility deterministically, not real intersection geometry; browser verification covers actual rendered behavior.
- TypeScript **7.0.2** now checks the project before every production build. Uses ES modules, bundler resolution, automatic JSX and no-emit checking; added unused declaration/parameter checks. Retained existing `noImplicitAny: false` and `strictNullChecks: false`; this phase does not claim complete strict typing. Removed the obsolete App React import exposed by the compiler check.
- Replaced ts-jest with Babel 7's TypeScript preset for test transpilation. Type checking is a separate mandatory build gate. Tests still run in Jest/JSDOM. A nonempty asset mock avoids React 19's empty-image-source warnings without hiding console output.
- Replaced ESLint/typescript-eslint with Oxlint 1.94.0. Current ts-jest excludes TS 7 and typescript-eslint excludes TS >=6.1. Oxlint does not consume the old TypeScript compiler API. Correctness rules, React Hooks rules/dependencies, explicit-any and unused-variable checks are enabled. This is not exact rule parity: the old single-quote formatting rule is not enforced, and recommended rule collections differ. No typed ESLint rules were configured previously. Intentional-defect controls confirm the important checks remain effective.
- Existing CI now runs lint and compiler/build gates before tests, preventing Babel-only tests from masking type errors. GitHub Actions has not been run remotely.
- Corrected a Vite 8 stylesheet regression found by screenshot inspection: the side-effect-only `global.module.scss` disappeared from the built CSS. Renamed it `global.scss`, imported once in the entry point, and removed the duplicate HTML stylesheet reference. Removed the old module-scoped `#root` and `.demoDescriptions` rules, whose generated selectors matched no DOM elements; activating the old `width: min-content` root rule would shrink the page. Retained the intended global section scroll offset. A browser assertion checks body color, margin, font family and unchanged root layout. This is a build compatibility correction, not a redesign.

Added a resize-focus regression test and retained the last focused navigation control when Chrome hides it before the media-query event. This preserves the Phase A focus destination when changing breakpoints.

## Compatibility decisions

Final clean installation uses `npm ci --strict-peer-deps --no-audit --no-fund`; it succeeds without force, legacy-peer-deps or overrides. `npm ls --all --json` also exits 0. Node 24.22.1/npm 11.20.0 remain pinned. The lockfile is updated intentionally; original baseline evidence and the original 2024 checkout are preserved.

Babel 8 was evaluated but its combination with Jest's transitive Babel 7 syntax plugins produced invalid peers. It was not retained. Babel 7 is held intentionally until that path supports a consistent upgrade. `@types/node` remains on 24 to match the runtime. These account for the five outdated direct packages (four Babel packages and Node types), not five confirmed vulnerabilities. Installation still reports deprecated transitive `glob` and `whatwg-encoding`; it reports unapproved optional watcher install scripts, which were not manually approved. Build and tests succeed with the existing policy.

References: [Vite 8 migration](https://vite.dev/guide/migration), [React 19 migration](https://react.dev/blog/2024/04/25/react-19-upgrade-guide), [TypeScript with Babel](https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html), [Oxlint built-in plugins](https://oxc.rs/docs/guide/usage/linter/plugins.html). Registry and lock versions are recorded in `environment.json`; peer bounds were queried with `npm view ts-jest@latest peerDependencies` and `npm view @typescript-eslint/parser@latest peerDependencies` on the measurement date.

## Verification and quantitative results

|Check|Local Phase B result|Evidence|
|---|---|---|
|Strict-peer clean install|Pass; 499 installed packages (baseline install: 1,407)|typescript7-install.txt, typescript7-resolution.txt|
|Lock package locations|598, excluding root; baseline 1,428|environment.json, package-lock.json|
|Direct dependencies|5 production / 20 development|package.json|
|Compiler/build|Pass, 9.668 seconds wall time for compiler + Vite|checks.json, build.txt|
|Typecheck|Pass|typecheck.txt|
|Lint|Pass, zero reported warnings/errors|lint.txt|
|Tests|6/6 pass|tests.txt|
|Toolchain negative controls|Rejects type mismatch and four lint rule families|verify-tooling.py, *negative-control.txt|
|Dependency peer graph|Pass|dependency-tree.json|
|Production dependency audit|0 findings|audit-production.json|
|Full dependency audit|43 affected package entries: 39 high, 4 moderate; 0 critical|audit.json|
|Outdated direct dependencies|5; deliberately held as explained above|outdated.json|
|Browser interactions|Pass at 320×800, 390×844, 844×390, 1440×900; 0 console errors/exceptions observed|browser-results.json, resize-results.json|
|JavaScript build artifact|834.17 kB minified / 230.37 kB Vite-reported gzip|build.txt|
|CSS build artifact|10.17 kB / 2.52 kB Vite-reported gzip|build.txt|
|Original baseline integrity|All 91 checksums verified|baseline-integrity.txt|

The JavaScript artifact grew from the original baseline's approximately 671.31 kB / 187.67 kB build gzip. Removing dependencies did **not** produce an overall bundle reduction after runtime upgrades. Continuous Three.js stars and heavy media still warrant the planned performance work. Do not claim an improvement to Lighthouse or production transfer from these results. Build gzip is not a measured network transfer; `environment.json` additionally records exact raw bytes and Python gzip level 9, a different compression method from Vite's report. Timings are single local observations, not benchmark medians.

Browser checks exercise native hash navigation/focus, keyboard menu behavior, all eight demos, manifest/icons, direct #team loading and resize/focus transitions. Console errors and uncaught exceptions are recorded per viewport. Screenshots are local build captures; animation and external font loading can vary. Existing content overflow remains outside the navbar (388 px at viewport 320; 396 px at viewport 390). No physical device, screen reader, Firefox or Safari validation is claimed.

## Security disposition — residual work, not a clean bill of health

The 43 npm entries propagate **three unique advisories**, rather than representing 43 independent flaws. All remaining entries are development tooling in this manifest. Their absence from `npm audit --omit=dev` does not certify site security or remove build-machine risk.

|Advisory|Observed dependency path / exposure|Disposition|
|---|---|---|
|[picomatch ReDoS](https://github.com/advisories/GHSA-fc5q-39xc-vjpf)|Vite/tinyglobby, Sass watcher and Jest utilities consume picomatch. Advisory requires crafted glob patterns. Site visitors do not supply build/test glob patterns in this static application.|Latest registry version 4.0.7 is affected; advisory lists no patch. Keep tools on loopback, treat repository/CI patterns as trusted reviewed inputs, monitor upstream patch. Not labeled fixed or harmless.|
|[minimatch glob amplification](https://github.com/advisories/GHSA-g3hv-75wg-m249)|Jest/glob and coverage test-exclude paths use older majors; malicious patterns can exhaust resources.|Patched 11.x lies outside parent ranges. Track parent releases; any override requires a separate compatibility review and matching/coverage checks. No forced override used.|
|[glob cancellation bypass](https://github.com/advisories/GHSA-3g3m-2fjr-6pw4)|Jest configuration/runtime/reporters and coverage exclusion traversal. Cancellation may fail to bound traversal.|Patched 14.x lies outside retained parent ranges. Track upstream dependency changes; constrain CI permissions and review untrusted test/build inputs. No claim that test success proves remediation.|

`environment.json` records direct parent ranges for these packages. The original audit reported 53 entries including 4 critical; the current audit has 0 critical but more high-severity propagated entries. Dependency counts and audit totals alone are not an exploitability assessment. Do not use `npm audit fix --force`, downgrade tooling solely to make the report green, or expose the development server publicly.

## Reproduction and evidence inventory

From the repository root with `.nvmrc` selected and npm 11.20.0:

```sh
npm ci --strict-peer-deps
npm run typecheck
npm run lint
npm test -- --runInBand
npm run build
npm ls --all
npm audit --json
npm audit --omit=dev --json
npm outdated --include=dev --json
npm run preview -- --host 127.0.0.1 --port 4173
```

In another terminal run `node docs/modernization/phase-b/browser-check.mjs` and `node docs/modernization/phase-b/resize-check.mjs`. These use the preinstalled Playwright and Chrome paths; adjust paths for another machine. `checks.py` records final commands, durations and output (and overwrites this phase's final logs if rerun). `verify-tooling.py` uses temporary files to test intentional defects. It must exit 0 even though the child lint/compiler commands intentionally fail.

Final evidence: `checks.json`, build/lint/typecheck/tests logs, audit JSONs, dependency-tree/outdated JSONs, `environment.json`, strict-peer resolution/install logs, negative-control logs, browser and resize JSON/scripts, four navigation PNGs and baseline-integrity.txt. `cleanup-*`, `vite-*`, `typescript-install.txt`, `tooling-install.txt`, `fresh-resolution.txt` and `clean-install.txt` are historical intermediate attempts, **not** final results. Intermediate Vite 7 failed with old TS/Node types, then passed after compatibility updates. Some intermediate commands used host Node 26; final results use Node 24.22.1. Historical failures are retained rather than represented as successful final installs.

## Review status and next action

Phase B implementation is ready for review with the disclosed residual tooling advisories and bundle growth. It is uncommitted/unpushed; no production or Vercel settings were changed. The original roadmap remains an immutable planning artifact; this report records the approved deviation for TypeScript 7. Next implementation phase is the roadmap's Phase C: semantic/accessibility and shared-content corrections, followed by measured media/animation performance work. Review the new tooling and risk dispositions before authorizing that next phase.

Modern-web-guidance was consulted for CSS scoping and accessibility. The narrow corrections avoid activating previously unmatched selectors ("Write selectors in a way that expresses _intent_.") and preserve breakpoint focus ("Manage focus correctly to and from updated content"). No broad CSS redesign was introduced.
