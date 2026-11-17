# Vitest and lint-tool investigation before Phase C

Date: 2026-11-17. Investigated commit: `f3975205159c2662fbac57f4eacb6c223569d298`, pushed to `origin/feat/website-modernization` before this investigation. **This is an isolated prototype and recommendation, not an applied migration.** Application files, package.json, lockfile and CI in the working branch remain at that pushed commit. Only this evidence directory is new locally. Phase C has not started.

## Recommendation

**Migrate the test runner and its configuration to Vitest; preserve the six useful behavior tests. Do not rewrite the tests wholesale.** Replace Oxlint with Biome only as an explicit linting migration with reviewed rule coverage. Vitest cannot replace a linter: tests check selected behavior, the TypeScript compiler checks types, and lint rules catch patterns such as conditional Hooks or omitted effect dependencies even when test assertions pass.

The original failing/stale tests were already replaced during Phase A. The current suite verifies real requirements and regression fixes:

|Current test|Disposition|
|---|---|
|Current content, feature count and native hash destinations|Port; later split content smoke checks from navigation behavior if it improves diagnosis. Avoid turning every text string into a brittle snapshot.|
|Menu expanded state, Escape and focus restoration|Keep. Native keyboard behavior also needs the real-browser checks.|
|Selecting a section closes the menu|Keep.|
|All eight mobile demos and wrap in both directions|Keep: directly guards the historical six-of-eight defect.|
|All desktop selections, rendered alternative text and pressed state|Keep.|
|Breakpoint focus recovery after a focused control becomes hidden|Keep: caught a genuine Phase B regression.|

None relies on Jest snapshots, module automocking, timers, CommonJS require mocking or Jest-only custom runners. The suite needs only simple function spies, assertions, hooks, React Testing Library and DOM matchers. That makes a runner port small and reviewable. Preserve the browser scripts: JSDOM does not verify layout, CSS rendering, actual Tab order, responsive breakpoints, real intersection geometry or WebGL rendering. The observer mock is deliberately synthetic.

## Isolated experiment

The prototype was exported from the committed source into the temporary directory recorded in `prototype-location.txt`, with no application source changes. Node 24.22.1/npm 11.20.0 were used. Tested versions: Vitest 5.1.0, JSDOM 31.0.1, Biome 2.6.8, TypeScript 7.0.2 and Vite 8.3.8. Registry metadata confirms compatible Node/Vite ranges. No force, legacy-peer-deps or dependency overrides were used.

Changes tested:

1. Remove direct Jest, babel-jest, Babel core/presets, Jest JSDOM wrapper, Oxlint and their configuration. Add Vitest, direct JSDOM and Biome. Keep Testing Library.
2. Rename the JSX-containing test file to `tests.test.tsx`; use explicit Vitest imports and `vi.fn`; explicitly register Testing Library cleanup so tests remain isolated without globally injecting test APIs.
3. Merge the existing Vite configuration into a small Vitest config, use `environment: 'jsdom'`, and restrict test discovery to the intended tests. Vite handles JSX, TypeScript, styles and asset imports; Jest's file/style mocks are unnecessary. No Babel transform is configured.
4. Type-check tests and test configuration with a separate no-emit TypeScript config. Use full MediaQueryList-shaped test doubles instead of assigning incomplete objects. Retain the application compiler check as a separate gate.
5. Proposed CI removes Jest's `--runInBand`, uses `vitest run` for a non-watch execution, and checks test types. The proposed workflow has not run remotely.

### A compatibility issue found by checking test types

Importing `@testing-library/jest-dom/vitest` passes runtime tests but fails TypeScript 7 checking with TS2428: its `Assertion<T>` augmentation conflicts with Vitest 5's new assertion type parameters. The prototype does **not** suppress this with `skipLibCheck` or casts. It imports the standalone DOM matchers, calls `expect.extend`, and augments Vitest's documented `Matchers<R, T>` interface using `TestingLibraryMatchers<T, R>`. This preserves the existing readable assertions and passes test type checking. For implementation, centralize this small adapter and cleanup in a test setup file; remove the adapter once jest-dom ships compatible Vitest 5 declarations. No node_modules patch is needed.

The initial error and corrected results are both saved. See [Vitest matcher extension API](https://vitest.dev/guide/extending-matchers.html) and [Vitest 5 migration](https://vitest.dev/guide/migration/). The adapter is a real maintenance consideration, not a reason to discard the tests or their assertions.

## Measured results

|Metric|Committed Phase B|Isolated Vitest + Biome prototype|
|---|---|---|
|Runtime tests|6 pass|Same 6 pass|
|Application production build|Pass|Pass|
|Separate test-file TypeScript check|Not configured|Pass after typed mocks and matcher adapter|
|Installed packages on this Mac|499|126|
|Lock package locations, excluding root|598|196|
|Production/development direct dependencies|5 / 20|5 / 14|
|Peer dependency validation|Pass|Pass|
|Full npm audit package entries|43: 39 high, 4 moderate|7 high, 0 moderate|
|Production npm audit|0|0|
|Babel compiler/transform configuration|Present for Jest|Removed|
|Oxlint|Present|Absent; Biome evaluated separately|

The full prototype audit has one underlying picomatch ReDoS advisory propagated through Vite/Vitest/watch dependencies. It is not fixed by switching test runners. Remaining affected entries are `@parcel/watcher`, `@vitejs/plugin-react`, `fdir`, `picomatch`, `tinyglobby`, `vite` and `vitest`. npm's affected-package totals are not counts of independent vulnerabilities. Production omission is not a security certification.

**“Without Babel” needs a precise definition:** there is no Babel core, preset, transform pipeline or Babel configuration in the prototype. Three Babel-named support packages remain transitively: `@babel/runtime` from React/DOM Testing Library, `@babel/code-frame` from DOM Testing Library, and `@babel/helper-validator-identifier` from code-frame. They do not transpile the project. Replacing useful Testing Library utilities solely to remove those names would add churn without demonstrated benefit.

No speed claim is made: these are single local observations, not repeated benchmark medians. Vitest's warm-up/transformation and JSDOM execution vary. No Lighthouse, production transfer or browser-performance benefit should be attributed to this tooling-only migration. This investigation did not rerun production/browser tests because application code was not changed.

## Oxlint replacement: what Biome proved and what it did not

Biome provides its own parser and lint rules, so it does not require typescript-eslint's unsupported TypeScript compiler API. Registry metadata still shows typescript-eslint 8.73.0 requires TypeScript `<6.1.0`; restoring it with TypeScript 7 through forced peers is not recommended.

Four explicit checks were evaluated:

|Existing concern|Biome rule|
|---|---|
|Conditional/invalid React Hooks|`correctness/useHookAtTopLevel`|
|Missing effect dependencies|`correctness/useExhaustiveDependencies`|
|Unused variables|`correctness/noUnusedVariables`|
|Explicit any|`suspicious/noExplicitAny`|

All four pass against current JS/TS application source. An intentional-defect fixture triggers all four, verifying they are active rather than silently ignored. This is **not** full parity with Oxlint's entire correctness category; review the remaining rule mapping before replacing the committed lint gate.

Biome's recommended preset against the same JS/TS source scope reports **11 errors and 18 warnings**. Examples include missing image alternatives, empty anchor content, array-index keys, const/type-import preferences and callback style. These are retained in `biome-source.txt`; they have not all been independently adjudicated as defects. Accessibility findings align with the baseline's planned Phase C work. Do not disable the whole recommended preset or relabel all findings harmless merely to make the migration pass.

An initial unconstrained scan also parsed SVG/CSS assets and reported 36 errors/23 warnings, including nine parse errors on a legacy SVG DTD. Those are different scope, not a comparable JS/TS lint baseline. The final experiment explicitly includes JS/JSX/TS/TSX files, matching the existing linter's intended code scope. SVG cleanup belongs to the asset audit. Biome's formatter is disabled and no autofix was run: adopting it does not require reformatting the entire repository.

References: [Biome rule origins](https://biomejs.dev/linter/rules-sources/), [Hook placement](https://biomejs.dev/linter/rules/use-hook-at-top-level/), [Hook dependencies](https://biomejs.dev/linter/rules/use-exhaustive-dependencies/). Ported/inspired rules may have different edge cases; passing four negative controls does not prove complete equivalence.

## Proposed next implementation boundary

1. **Runner migration first:** approve a small Phase B follow-up for Vitest, removal of Jest/Babel transforms, the matcher adapter, typed tests/mocks and CI command changes. Preserve all six behavior assertions. Acceptance: strict clean install, valid peer graph, six tests, application/test type checks and production build pass; no console suppression or library type-check bypass.
2. **Separate lint migration:** if removing Oxlint is a firm preference, adopt Biome with a reviewed mapping of the current correctness rules. Explicitly triage the 11 errors/18 warnings. Either fix the applicable findings in small reviewed changes or establish a documented, bounded baseline for existing issues while retaining regression gates. Do not merge a proposed failing lint workflow or quietly reduce enforcement to only four rules.
3. **Then Phase C:** centralize demo/content data, complete semantics/accessibility and resolve the remaining lint-backed defects. Add focused tests when they protect a demonstrated requirement; do not rewrite the test suite for appearance or chase an arbitrary coverage percentage.

A broader switch to Vitest Browser Mode or another DOM library is not required to remove Babel. It would add migration scope; keep the existing real-Chrome checks for behavior JSDOM cannot establish. A clean test-runner migration is justified here by shared Vite transforms and a materially smaller development dependency graph, not an assumed speed gain.

## Reproduction and artifacts

`prototype.patch` contains the experimental manifest/config/test/CI changes; `prototype-package-lock.json` preserves exact dependency resolution. **The patch is exploratory, not merge-ready: its full Biome lint command intentionally exposes unresolved findings.** It must not be applied to the working branch just to try the experiment.

To reproduce, export commit `f3975205159c2662fbac57f4eacb6c223569d298` into a fresh temporary directory, apply `prototype.patch` there using `git apply`, copy `prototype-package-lock.json` to that directory as `package-lock.json`, then select Node 24.22.1/npm 11.20.0 and run:

```sh
npm ci --strict-peer-deps --no-audit --no-fund
npm test -- --reporter=verbose
npm run typecheck:tests
npm run build
npm ls --all
npm run lint -- --max-diagnostics=200
npm audit --json
npm audit --omit=dev --json
```

Expect the full recommended lint run and full dependency audit to exit nonzero for the documented findings. Keep the retained Oxlint gate in the real branch until a reviewed lint migration replaces it.

Evidence: initial/final/reproduced test logs; initial/corrected TypeScript logs; build output; strict install/reproduction records; peer tree; audit JSONs; initial/scoped/core/negative-control Biome outputs; command/exit/timing JSONs; `summary.json` (versions, dependency counts, helper provenance and lock checksum); prototype patch/lock/location. The temporary prototype is outside the repository and is not authoritative or deployed.
