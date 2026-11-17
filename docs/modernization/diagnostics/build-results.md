# Install, build and developer safeguards

Local audited commit, 2026-11-17. Fresh isolated clone with no pre-existing node_modules. Runtime Node **24.22.1**, npm **11.20.0**; `CI=true`. npm lock-preserving install, no fixes, no manifest/lock edits. Dependencies were installed solely to run existing project tooling. No production dependencies were added.

|Command|Result|Wall duration|Evidence|
|---|---|---:|---|
|`npm ci --no-audit --no-fund`|Exit 0, 1,407 packages installed|23.883 s|[install](raw/install.txt)|
|`npm run build`|Exit 0|11.087 s|[build](raw/build.txt)|
|`npm run lint`|Exit 1; 5 errors, 1 warning|2.152 s|[lint](raw/lint.txt)|
|`node node_modules/typescript/bin/tsc --noEmit`|Exit 0|4.944 s|[typecheck](raw/typecheck.txt)|
|`npm test -- --runInBand`|Exit 1; 2 pass, 5 fail, 1 failed suite|6.432 s|[tests](raw/tests.txt)|

Durations are one execution each, not medians. npm ci emitted legacy React peer conflicts (including React 16 expectations in react-zdog/react-reconciler), deprecation warnings, and an npm install-script policy notice for fsevents. Installation succeeded; no policy override was made. Do not generalize this to every npm/Node combination. Build transformed 157 modules; Vite stage 3.72 s; warned about JS chunk >500 kB. Do not “fix” this by raising the warning threshold.

## Build correspondence and integrity

44 dist files, **94,638,848 bytes** in aggregate, mostly alternate demo GIFs. This is deployment artifact size, not initial page transfer. One JS file: 671,306 B; one CSS file: 10,778 B; HTML: 3,973 B. HTML/JS/CSS match the downloaded production bytes exactly. SHA-256 and local gzip estimates are in [artifact inventory](raw/build-artifacts.json).

Manifest SHA-256 before and after: `0ed816c49ee75094697abd831124c8343db8a0c8dbf1fa85c5bf0cf11f6f11bc`.
Lockfile SHA-256 before and after: `bcff0b9dede20046e26334220f4e96a1c6ba74ce0e69d7ed4d5052fa8771d8ff`.

`tsc` emits CommonJS to dist, then Vite writes its own production output. This duplicate emit is unnecessary work, but the build succeeds. `tsconfig.node.json` is entirely commented and not wired into typecheck; Vite config is outside src include. `strict:true` is weakened by `noImplicitAny:false` and `strictNullChecks:false`. Passing typecheck is therefore a limited signal, not proof of strong typing.

## Existing failures

- Five quote-rule errors in `Home.tsx` imports; unused `useEffect` warning in `Navbar.tsx`. `--max-warnings 0` means the warning alone also fails lint. Do not prioritize quote cleanup over user-facing failures; clear it when restoring the gate.
- Heading/navigation test expects removed team headings.
- Feature test expects eight cards, but nine are rendered.
- Demo tests expect old labels/indexes: Container Metrics missing; Cluster Metrics expected index 3, actual 5; Process Logs missing.
- Containers and Images click tests pass. Missing React keys generate a development/test console warning. Tests test callbacks rather than actual displayed asset reachability; they did not catch the mobile wrap defect.
- Lint script explicitly covers only `.ts/.tsx`; `stars.js` and contributor JS escape its scope.

## CI assessment and proportionate future safeguards

One workflow `.github/workflows/run_tests.yml`: pull_request to master, ubuntu-latest, checkout@v3, npm ci, npm test. No explicit Node/npm setup, production build gate, lint/typecheck gate, browser tests, accessibility check, Lighthouse budget, dependency automation or observability validation found. Current remote execution/branch protection state was not audited through private settings.

Restore current useful tests first; add a small browser suite for route load, console errors, anchors, menu by keyboard/touch, all eight demos and a narrow viewport. Run build, no-emit typecheck and lint in CI. Add axe to representative states and a periodic/PR performance job with repeated runs and realistic tolerance; avoid making a noisy public-network Lighthouse score the sole merge gate. Pin runtime and use dependency update batches. No workflows or test frameworks were installed/created during this audit; diagnostic scripts only preserve measurements.
