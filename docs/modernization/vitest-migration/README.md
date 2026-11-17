# Vitest migration — implementation results

2026-11-17, local changes based on pushed Phase B commit `f3975205159c2662fbac57f4eacb6c223569d298`. User approved the latest Vitest and simplification of the tests. This implementation supersedes the isolated investigation's matcher-adapter proposal. It does not begin Phase C, change application source, or deploy anything.

## Final tool choices

- Vite 8 / React 19 / TypeScript 7 are retained.
- **Vitest 5.1.0** was verified as the registry's latest release on this date. It shares the existing Vite configuration; JSDOM 31.0.1 provides the test DOM.
- **Oxlint remains the sole linter.** Biome was evaluated but is not installed. The lint command now includes test files.
- Removed Jest, babel-jest, direct Babel core/presets, jest-dom, the Babel config, the embedded Jest config and obsolete file/style/observer mocks. There is no custom matcher adapter or declaration augmentation.
- React Testing Library stays because its accessible-role queries, rendering and cleanup are useful. It transitively includes three Babel helpers (`runtime`, `code-frame`, `helper-validator-identifier`); these are not a Babel compilation pipeline.

## Tests and regression protection

The six existing behavior scenarios remain: content/native destinations; menu state/Escape/focus; close on selection; eight-item mobile wrapping both ways; desktop selection/pressed state; breakpoint focus recovery. The file is now `__tests__/website.test.tsx` with explicit Vitest APIs. Presence assertions use `document.body.contains`, attribute assertions use `getAttribute`, and focus assertions compare `document.activeElement`. All use Vitest's built-in matchers. This removes jest-dom without discarding the assertions or implementing a custom matcher library.

`__tests__/setup.ts` centralizes cleanup and browser test doubles. Globals are stubbed per test and restored after cleanup. The media-query double dispatches actual EventTarget change events, including listener removal, rather than manually exposing a captured component callback. The typed IntersectionObserver double reports visible targets synchronously because JSDOM has no layout. It includes the current DOM interface's scrollMargin property; it is not a substitute for real viewport/intersection testing.

`tsconfig.tests.json` checks the tests and both Vite/Vitest configs without emitting. The root compiler settings are retained; no skipLibCheck, any casts or forced peer ranges were added. CI now runs this test-type gate and `npm test` without Jest's `--runInBand`. `npm run test:watch` provides local watch mode. CI has not run remotely.

## Verification

Node 24.22.1/npm 11.20.0 on the same Mac as Phase B:

|Check|Result|Evidence|
|---|---|---|
|Clean strict-peer install|Pass, 118 installed packages; Phase B had 499|clean-install.txt|
|Lock package locations, excluding root|197; Phase B had 598|summary.json, package-lock.json|
|Direct dependencies|5 production / 13 development; previously 5 / 20|summary.json|
|Runtime tests|6/6 pass|tests.txt|
|Test/config type checks|Pass after completing mock DOM types|test-types-final.txt, final-checks.json|
|Source and test lint|Pass|lint-final.txt|
|Application typecheck and production build|Pass|build.txt|
|Complete peer graph|Pass|peer-tree.json|
|Full dependency audit|7 high entries, 0 moderate/critical; previously 43 entries|audit.json|
|Production dependency audit|0 findings|audit-production.json|
|Original baseline|All 91 original SHA-256 entries verified unchanged|Original evidence-sha256.txt|

The first test-type run correctly rejected an incomplete IntersectionObserver double and an overly narrow inferred boolean in the media mock. Both were corrected; the initial log remains as historical evidence and `final-checks.json` records the successful final checks. Package install scripts for optional watchers remain governed by the existing npm policy; none were manually approved.

Seven high npm entries propagate the existing picomatch advisory through build/test/watch tooling. This migration does not fix it, and zero production audit findings does not establish site security. No test speed, browser-performance or Lighthouse improvement is claimed. Application files and production dependencies are unchanged; the previous browser evidence remains historical and was not remeasured for this test-tooling change.

## Reproduce

Use the runtime in `.nvmrc` and npm 11.20.0:

```sh
npm ci --strict-peer-deps
npm run lint
npm run typecheck:tests
npm test -- --reporter=verbose
npm run build
npm ls --all
npm audit --json
npm audit --omit=dev --json
```

The full audit is expected to return nonzero until the retained upstream advisory paths are resolved. Review source changes and the lockfile before committing. The implementation is local and uncommitted; Phase C remains pending.

References: [Vitest getting started](https://vitest.dev/guide/) and [Jest migration guidance](https://vitest.dev/guide/migration/jest.html). Explicit cleanup is required when using Testing Library with Vitest globals disabled.
