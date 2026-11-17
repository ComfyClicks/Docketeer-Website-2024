# Dependency baseline and migration constraints

Measured 2026-11-17 against the audited lockfile; no upgrades or fixes applied. `npm ci` completed with unchanged manifest/lock hashes. Outdated does not mean vulnerable. Registry versions below are observations on this date, not an instruction to upgrade every package to latest.

## Inventory

- 14 direct production dependencies; 17 direct development dependencies; lockfileVersion 2; 1,428 locked package locations (platform/peer/optional entries included), 1,407 installed by npm on this host.
- React/React DOM 18.2.0; Vite 4.3.9; React plugin locked to stable 4.0.0 despite manifest range `^4.0.0-beta.0`; TypeScript 5.0.4; Sass 1.62.0; Three.js 0.152.0.
- No root `engines`, `packageManager`, `.nvmrc`, or `.node-version`. No CI setup-node step. Vite 4 permits Node `^14.18.0 || >=16.0.0`, but those old minimums do not imply current security support.
- Intended package manager: npm, evidenced by package-lock and CI `npm ci`. Measured runtime: installed Node 24.22.1 LTS with npm 11.20.0. System Node 26.12.1 was used only for standalone browser capture and the initial lock-only audit.
- 30 of 31 direct packages are behind registry latest. `intersection-observer` is current at 0.12.2 but deprecated. Five other deprecated entries are recorded in the lockfile: resolve-url 0.2.1, source-map-resolve 0.5.3, source-map-url 0.4.1, uglify-es 3.3.9, urix 0.1.0. This is a confirmed minimum, not an exhaustive registry scan of all transitive package deprecations.

## Direct version table

|Package|Class|Locked/installed|Wanted within range|Registry latest|
|---|---|---|---|---|
|`@jest/globals`|prod|29.5.0|29.7.0|30.5.2|
|`@react-three/fiber`|prod|8.13.0|8.18.0|9.8.2|
|`@testing-library/jest-dom`|prod|5.16.5|5.17.0|7.0.1|
|`@testing-library/react`|prod|14.0.0|14.3.1|16.3.3|
|`intersection-observer`|prod|0.12.2|0.12.2|0.12.2|
|`jest-environment-jsdom`|prod|29.5.0|29.7.0|30.5.2|
|`react`|prod|18.2.0|18.3.1|19.3.1|
|`react-dom`|prod|18.2.0|18.3.1|19.3.1|
|`react-intersection-observer`|prod|9.4.3|9.16.0|11.0.1|
|`react-router-dom`|prod|6.11.0|6.30.6|7.18.5|
|`react-scroll`|prod|1.8.9|1.9.3|1.9.3|
|`react-spring`|prod|9.7.1|9.7.5|10.0.4|
|`three`|prod|0.152.0|0.152.2|0.187.0|
|`ts-jest`|prod|29.1.0|29.4.15|29.4.15|
|`@babel/preset-env`|dev|7.21.5|7.29.14|8.0.7|
|`@babel/preset-react`|dev|7.18.6|7.29.7|8.0.1|
|`@types/react`|dev|18.0.38|18.3.31|19.3.0|
|`@types/react-dom`|dev|18.0.11|18.3.7|19.3.0|
|`@types/react-scroll`|dev|1.8.6|1.8.10|1.8.10|
|`@types/three`|dev|0.150.2|0.150.2|0.187.0|
|`@typescript-eslint/eslint-plugin`|dev|5.59.0|5.62.0|8.73.0|
|`@typescript-eslint/parser`|dev|5.59.0|5.62.0|8.73.0|
|`@vitejs/plugin-react`|dev|4.0.0|4.7.0|6.3.0|
|`babel-jest`|dev|29.5.0|29.7.0|30.5.2|
|`eslint`|dev|8.39.0|8.57.1|10.15.0|
|`eslint-plugin-react-hooks`|dev|4.6.0|4.6.2|7.1.1|
|`eslint-plugin-react-refresh`|dev|0.3.4|0.3.5|0.5.8|
|`jest`|dev|29.5.0|29.7.0|30.5.2|
|`sass`|dev|1.62.0|1.108.2|1.108.2|
|`typescript`|dev|5.0.4|5.9.3|7.0.2|
|`vite`|dev|4.3.9|4.5.14|8.3.8|

## Security counts and interpretation

|Scope|Critical|High|Moderate|Low|Total vulnerable package entries|
|---|---:|---:|---:|---:|---:|
|Full lockfile|4|31|13|5|53|
|`npm audit --omit=dev`|4|24|10|5|43|

The count is npm vulnerability entries (including meta-vulnerabilities), not unique CVEs and not a count of exploitable browser flaws. The package classification is misleading here: testing packages are under dependencies, and the umbrella react-spring package resolves native/Three/Konva/Zdog paths. A static asset deployment does not execute Node-only tooling on visitors’ requests. These still matter to contributors, builds and supply-chain exposure.

Critical package entries: `@babel/traverse`, `fast-xml-parser`, `form-data`, `shell-quote`. Reproducible dependency paths are preserved in [compressed npm explain output](raw/vulnerability-paths.txt.gz). Babel is reached through compilation/testing; XML parsing through installed Expo/native tooling; form-data through jsdom/native tooling; shell-quote through native/Metro tooling. No corresponding application XML upload, server shell execution, multipart endpoint, or untrusted build-input feature was found. This is reachability triage, not proof of universal non-exploitability.

Direct vulnerable entries: `vite` and `react-router-dom` (both high by npm aggregation). Vite has development-server advisories and an affected bundled-code DOM-clobbering advisory. The latter requires attacker-controlled HTML injection; no such sink was found in this source. Do not expose the old dev/preview server. React Router is imported by tests, not the production app, so removing that unused runtime dependency is preferable to a router migration for a single-document site.

Evidence: [full audit](raw/npm-audit.json), [omit-dev audit](raw/audit-omit-dev.json), [installed outdated report](raw/outdated.json). The initial pre-install `npm-outdated.json` lacks current versions and omits dev entries due to environment defaults; **it is not the scorecard source**.

## Recommended modernization decisions

|Package group|Recommended treatment|Compatibility / validation|
|---|---|---|
|React + React DOM + types|First move to 18.3 to expose deprecations, then current compatible React 19 as a separate change|Use modern JSX transform; verify animation/test peers and JSX typings. React’s official upgrade guide recommends the 18.3 bridge.|
|Vite + React plugin|Read migrations 4→5→6→7→8; validate each step. Finish on a supported branch, preferably current stable once verified.|Current Vite 8 uses Rolldown/Oxc; plugin-react 6 requires Vite 8. Pin a supported Node LTS (24 or 26), not historical minimum Node 14/16. Sass 1.62 is below current Vite peer requirement ≥1.70.|
|TypeScript|Initially move within compatible 5.x and modernize module/JSX config; consider later major independently|Registry latest TS 7.0.2 is incompatible with current ts-jest (`<7`) and typescript-eslint parser (`<6.1`). Do not force-install a latest-everything combination.|
|ESLint/parser/plugins|Migrate legacy `.eslintrc.cjs` to supported flat config, matching parser/plugin peer ranges|Current parser accepts ESLint 8.57/9/10. Keep rule changes distinct from formatter-only edits; include JS files currently omitted.|
|Jest/ts-jest/Babel/testing-library|Keep existing framework first, move test-only dependencies to dev, repair meaningful assertions, then upgrade as a compatible set|Current ts-jest 29.4.15 accepts Jest 29/30, TypeScript <7, Babel <9. No need to add a second unit test runner purely for modernization.|
|Sass, same-major library patches|Candidates for direct incremental updates after stabilization|Check emitted CSS, deprecation warnings, breakpoints and visual snapshots. Same-major does not eliminate regression risk.|
|`@react-three/fiber`|Remove if dependency tracing confirms no retained import needs it|No direct application import. Current fiber 9 requires React 19 and newer Three; upgrading an unused abstraction adds unnecessary risk.|
|`react-spring`|Prefer web-only `@react-spring/web` if retained; evaluate modest CSS transitions|Umbrella package brings native dependency graph/peer conflicts. Features and Team use web animation only. Confirm branding/motion before removing animation.|
|`react-router-dom`|Remove when tests stop wrapping a non-routed app in MemoryRouter|No source runtime routes. Replace test wrapper, not website behavior.|
|`intersection-observer`|Remove deprecated polyfill after replacing JSDOM test setup with a controlled observer mock|Imported only in tests. Native browser observer is already used.|
|Three.js + types|Profile the star field first; simplify to a static/CSS/2D background if identity is preserved, or batch existing geometry and add lifecycle/reduced-motion handling|Three is genuinely used in stars.js; do not call it unused. Current types 0.150 and runtime 0.152 are mismatched. Any large release jump is a separate migration.|

No package was labelled abandoned solely because its installed version is old. Vite 4 support status and intersection-observer deprecation are verified; other maintenance decisions require release/peer checks at implementation time.

## Authoritative references

- [Vite supported releases](https://vite.dev/releases): on audit date 8.3 regular support, 7.3/8.2 important fixes, 6.4/8.1 security; 4.x unsupported.
- [Vite migration](https://vite.dev/guide/migration): bundler and browser-target changes require validation.
- [React 19 upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide): 18.3 bridge and new JSX transform.
- [Node release schedule](https://github.com/nodejs/Release): supported LTS selection.
- [Registry peer/engine evidence](raw/registry-compatibility.json): exact metadata retrieved during this audit.
- [Vite DOM-clobbering advisory](https://github.com/advisories/GHSA-64vr-g452-qvp3): separate vulnerable version matching from exploit preconditions.
