# Acceptance follow-up — browser failure diagnosis and link correction

2026-11-18; uncommitted changes based on `5aac1d23beabb4d4d6fcd041630e4b48ff736360`. The initial acceptance results are retained in the parent directory. No dependency upgrade, global macOS preference change, deployment, commit or push was made.

## Corrected diagnosis

The reported WebKit pointer failure is reproducible **without Docketeer**. A minimal page containing an anchor, tall empty div and native button fails ordinary Playwright clicks with the installed WebKit revision **2388**. The browser receives pointer coordinates outside the requested viewport: a requested click near (29, 891) produced pointerdown near (-1222, 2101), targeting HTML. On the actual site the analogous requested button-center click also lands on HTML outside the viewport. Both headless and headed runs reproduce the problem, with different offsets.

Removing the site's Canvas and disabling smooth scrolling did not fix it. No CSS, Canvas or click-handler workaround was added. Do not force clicks, dispatch synthetic click events, or rewrite native controls to hide this environment failure.

The already-installed WebKit revision **2370** delivers clicks to the expected native button on both the minimal page and the site. Both browser revisions report version 27.2, so the revision identifier matters. This is supplemental verification with an explicitly selected older browser executable, not a package downgrade or a claim that revision 2388 now passes. Nothing automatically falls back to the older browser in CI.

The keyboard failure was a separate test assumption: macOS WebKit uses Option-Tab to include links under its default navigation behavior. `e2e/website.spec.ts` now uses `Alt+Tab` only for WebKit on macOS, retaining ordinary Tab elsewhere and every focus/activation assertion. The minimal-page and site probes verify that this reaches the skip link; no extra tabindex or JavaScript focus simulation was added to the website. See the [Playwright maintainer explanation](https://github.com/microsoft/playwright/issues/5609) and [macOS keyboard-setting discussion](https://github.com/microsoft/playwright/issues/41808). Diagnostic process-only preference arguments were explored but are not part of the final suite or configuration; no persistent preference was written.

## Actual website fix

Corrected Cedar Cooper's swapped GitHub/LinkedIn values in `src/components/Team/others.ts`. Accessible link names now correspond to their destination platforms. The URLs themselves and contributor content are preserved. This is the only application-source change; the remaining edits are test portability and acceptance documentation.

## Verification

| Check | Result |
| --- | --- |
| Build, lint and application/test type checks | Pass |
| Vitest / CI policy tests | 24 / 9 pass |
| Chromium browser suite | 10/10 pass, 41.3 seconds |
| Supplemental WebKit revision 2370 suite | 10/10 pass, 59.6 seconds |
| Current WebKit revision 2388 | Option-Tab reaches skip link; native pointer input still fails minimal-page calibration |
| Corrected rendered contributor links | Both platform destinations verified |
| Original baseline integrity | All 91 hashes unchanged |

See `check.txt` for build, lint, application/test type checks, 24 Vitest tests and nine policy tests. Browser run logs are saved separately by engine/revision. `rendered-links.json` records the actual rendered contributor destinations. `source-changes.patch` and `provenance.json` identify the working-tree inputs.

The current WebKit revision's pointer calibration remains blocked on this host; latest-revision Safari-equivalent acceptance is **not** claimed. Firefox still needs its matching installed executable. Demo text alternatives, calibrated native screen-reader/zoom/real-device review and production verification remain separate follow-ups. No Lighthouse rerun was necessary for swapping two URLs and changing test navigation; prior benchmark values refer to the previously recorded release, not a newly measured post-fix build.

## Reproduce

The normal Chromium configuration and manual-only workflow cadence are unchanged:

```sh
npm run check
npm run test:browser
```

For the documented supplemental run, explicitly select the installed executable; do not copy the machine-specific path into production/CI defaults:

```sh
ACCEPTANCE_BROWSER=webkit ACCEPTANCE_EXECUTABLE="$HOME/Library/Caches/ms-playwright/webkit-2370/pw_run.sh" \
  npx playwright test --config docs/modernization/phase-h/acceptance.config.ts --max-failures=2
```

Without `ACCEPTANCE_EXECUTABLE`, the config still uses the browser installed for the current Playwright package. Follow-up output goes to `reports/acceptance-followup/`, preserving the historical acceptance reports.

`reproduce-input.mjs` starts a local preview on 4183, probes a minimal page and the built site, and records actual pointer events, coordinates, focus and the result of normal locator clicks. It accepts `ACCEPTANCE_EXECUTABLE` and `DIAGNOSTIC_OUTPUT`; build first and use a new output path when preserving evidence. Its JSON/log records intentionally capture failures; inspect `result` and events rather than treating process exit alone as a test pass.

Raw diagnostic evidence: `probe.json` (Canvas/scroll hypotheses), `minimal.json` (current headless), `minimal-headed.json`, `minimal-older.json`, and `minimal-older-alt.json`. `minimal-older.json` includes an exploratory single-string keyboard preference argument that did not affect focus; the final supplemental suite has no launch arguments. Neither coordinate compensation nor forced clicks are used in the verification suite.
