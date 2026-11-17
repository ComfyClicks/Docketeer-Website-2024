# Phase A — stabilization implementation

Implemented locally on `feat/website-modernization`, based on `22d612c66d2ad3d7107b7ed1dff5cb52a4e1865a`, following owner approval. No commits, pushes, deployment or Vercel changes. Original 2024 checkout preserved. This report is separate from the unchanged pre-modernization baseline and its empty final After column.

## Changes

- Native section links and matching focusable fragment destinations preserve #home, #features, #demo, #getstarted, #team and direct-link navigation. Start Exploring is now a real link. CSS preserves smooth scrolling when reduced motion is not requested; other pre-existing animations remain for later work.
- One navigation list, with an explicitly controlled mobile disclosure, native Menu button, expanded/controls state, Escape/focus-return handling, closure when focus leaves or a section is chosen, and focus-safe breakpoint transitions. It collapses at 1000 px in both orientations to accommodate the existing brand and links. No application-menu roles, focus trap or keyboard activation shims. Existing desktop links and social destinations retained; social links now have accessible names.
- Desktop demo selectors and mobile Previous/Next use native buttons. Desktop selection exposes aria-pressed; mobile title changes announce politely. Wrapping uses the actual eight-item length and a functional state update; all entries reachable forward/backward. Added demo alternatives and stable mapped keys.
- Published the existing manifest and referenced icons through Vite's public directory, with Docketeer name/short_name. Original source icons retained for Phase C asset cleanup. No PWA/service-worker feature added.
- Pinned local Node 24.22.1 in .nvmrc and npm 11.20.0 in packageManager/CI. Added setup-node v6 pinned to verified tag commit. Existing checkout action and broader CI overhaul remain Phase E. Added npm run typecheck and local setup instructions.
- Replaced stale assertions with five behavior-focused tests covering current content/destinations, menu state/focus, close-on-selection, all eight mobile entries both directions, and all desktop selections. Existing Jest/testing-library versions retained. Fixed quote lint errors and unused import.

## Validation

|Check|Result|Evidence|
|---|---|---|
|Regression tests before fixes|5 failed / 5, expected|tests-before.txt|
|Tests after fixes|5 passed / 5|tests-after.txt|
|Locked npm ci on Node 24.22.1|Pass; legacy peer/deprecation/fsevents policy notices remain|install.txt|
|Production build|Pass; existing >500 kB chunk warning remains|build.txt|
|Lint|Pass, no warnings/errors|lint.txt|
|No-emit typecheck|Pass|typecheck.txt|
|Real Chrome keyboard/browser checks|Pass at 320×800, 390×844, 844×390, 1440×900|browser-results.json, browser-check.mjs|
|Resize and focus transitions|Pass|resize-results.json, resize-check.mjs|
|Manifest and both icons|HTTP 200, valid manifest JSON and PNG content types on local production preview|browser-check.mjs|
|Baseline checksums|Preserved and verified against original evidence-sha256.txt|No baseline files rewritten|
|Lockfile|Unchanged SHA-256 bcff0b9dede20046e26334220f4e96a1c6ba74ce0e69d7ed4d5052fa8771d8ff|No package version upgrades|

Browser tests used Chrome 157.0.8103.79 and existing Playwright against `http://127.0.0.1:4173/`, **not production**. Tested Enter/Space button activation, Tab into navigation, Escape restoration, all five hashes, direct initial #team loads, demo selection and console exceptions/errors (zero observed). Narrow screenshots show the menu; desktop screenshot shows inline navigation. The supplemental resize check recaptured final screenshots after removing the now-redundant line break in the CTA.

## Remaining scope and limitations

The document still overflows narrow viewports outside navigation (388 px at 320 viewport and 395 px at 390 in sampled checks). The navigation itself fits. Large GIF/image transfers, continuous star motion, remaining image/link names, heading hierarchy, runtime dependency advisories and broader responsive refinement remain in the approved roadmap's later phases. No new Lighthouse performance claim or final After score is made. No physical-device, screen-reader or Firefox/Safari validation completed; GitHub Actions was edited but not run remotely. Publishing remains a separate authorized action.

Modern-web-guidance consulted: navbar and accessibility. Applied the single navigation tree and ordinary link Tab order ("links stay in the `Tab` order"), and native controls ("Prefer HTML elements and attributes to ARIA"). Phase A uses a simple controlled disclosure consistent with the approved scope, rather than introducing a popover/polyfill/ResizeObserver architecture or new package. Native Enter/Space behavior and visible focus remain intact.

## Reproduction

Use the root README's pinned runtime instructions, then run npm ci, npm run build, npm run lint, npm run typecheck, npm test -- --runInBand. Serve with `npm run preview -- --host 127.0.0.1 --port 4173`. The browser scripts use the existing absolute Playwright/Chrome paths recorded in the baseline README; adjust paths for another host. Run the scripts from the repository root. They are local verification artifacts, not an installed browser-test dependency or production code.
