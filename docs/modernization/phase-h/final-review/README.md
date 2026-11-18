# Final local review and owner scope decision

Reviewed 2026-11-18. The owner explicitly deferred complete demo text alternatives and requested the remaining local checks plus commit/push. That work remains a documented accessibility limitation, not an implemented fix or a blocker imposed by this review. No production deployment, account setting or CI cadence was changed.

## Results

| Check | Result | Evidence |
| --- | --- | --- |
| Firefox 159.0 / Playwright revision 1572 | 10/10 browser tests pass | `firefox.txt`, `firefox-summary.json` |
| Chromium 159.0.8154.6 | Previous unchanged-source follow-up: 10/10 pass | `../follow-up/chromium.txt` |
| Supplemental WebKit revision 2370 (reports 27.2) | Previous unchanged-source follow-up: 10/10 pass | `../follow-up/webkit-2370.txt` |
| Current WebKit revision 2388 | Native pointer-input calibration still blocked on this host | `../follow-up/current-input.json`; no forced clicks or production workaround |
| Actual browser zoom at 200% / 400% | Reflow, menu, skip-link focus and demo interaction checks pass | `zoom-results.json`, `zoom.txt` |
| Automated axe in Firefox desktop/narrow states | Zero violations; same review prompts as Chromium | `firefox-summary.json`: one video-caption review item, two decorative-arrow contrast review items |
| Targeted arrow/control contrast review | White on opaque hover background: 12.29:1 | `contrast-review.json`; bounded computed-color check, not a whole-site certification |
| Build, lint, types, unit and policy checks | Previously verified unchanged inputs: 24 Vitest + 9 policy tests pass | `../follow-up/check.txt` |
| Screen-reader spoken output | Not verified | Native browser selection failed with `cgWindowNotFound`; `native-access-limitations.json` |
| Physical phone/tablet | Not verified | No physical device accessed; browser touch/narrow emulation is not a substitute |

Firefox was installed through the existing Playwright CLI into its normal browser cache. No npm package, manifest or lockfile changed. Installation evidence is in `firefox-install.txt`. The existing manual acceptance config uses narrow viewport/touch for Firefox without unsupported `isMobile` emulation.

## Actual zoom methodology and observations

`zoom-review.mjs` creates a disposable Chromium profile and a local Manifest V3 extension under ignored `reports/zoom-review/`. The extension uses `chrome.tabs.setZoom` and reads `getZoom` back. It is not installed in the user's normal browser. The website CSS, root font size and layout are not modified. No CDP pinch scaling is substituted for browser zoom.

The 1440×900 outer viewport becomes 720×450 CSS px at 200%, and 360×225 at 400%; reported DPR becomes 2 and 4 respectively. Document width equals viewport width at each sampled section. The open menu remains within the viewport; at 400% it has 134 CSS px of visible height and 324 px of scrollable content. Skip-link activation focuses H1 below the fixed navigation. Demo next/previous and selection controls operate normally. Captured runtime errors are empty. Visible demo controls are 44 CSS px tall.

The first harness assertion compared floating-point zoom with exact equality; Chrome returned 3.9999999999999996 for 4. That harness-only failure is preserved in `zoom-harness-precision.txt`; the final check uses six-decimal precision. All geometry and interaction assertions remain strict. The earlier CSS root-font enlargement proxy remains historical evidence, separate from these actual zoom checks.

Primary references: [Chrome tabs zoom API](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-setZoom) and [Playwright isolated extension testing](https://playwright.dev/docs/chrome-extensions).

## Visual capture limitation

Homepage and open-menu captures at 200%/400% were inspected. Some later scrolled-page captures at 400% contain only the background, despite successful normal clicks, visible DOM geometry and correct control states. This is **not accepted as a visual pass**.

`capture-calibration.mjs` reproduces the same problem on minimal HTML with a fixed blue header, tall empty div and ordinary button, entirely fulfilled locally without a network request. At 100% its screenshot contains 328 colors; at 400% it is uniformly white after a successful normal button click. Docketeer's analogous capture is uniformly its body background color. The pixel inventory and unaltered screenshots are preserved in `capture-pixel-summary.json` and `screenshots/`. This isolates a capture/environment limitation independent of Docketeer code; it does not prove every highly zoomed site pixel is visually correct.

Two-frame rendering waits and headed Chromium did not restore these captures. An alternate native-viewport CDP capture returned “Unable to capture screenshot” in both modes. Logs are preserved in `viewport-capture.txt` and `headed-zoom.txt`; duplicate intermediate screenshot runs remain ignored under `reports/zoom-review/verified-captures`, `viewport-capture` and `headed-final`. A native-browser visual pass remains desirable once native UI access is available. No website styling was changed merely to make automated captures look successful.

## Contrast and accessibility boundaries

The two incomplete contrast nodes are decorative arrow spans (`aria-hidden=true`) next to visible Previous/Next text. Both arrows and text use white. Their observed opaque hover background is rgb(39,53,79), yielding 12.29:1 using relative luminance. The nominal default white/body-background pair is 20.95:1; the dynamic star-field pixels were not exhaustively sampled, so the nominal pair is not a guarantee for every background pixel. These checks reveal no new confirmed contrast defect in the sampled controls.

Axe's video-caption prompt is not automatically a confirmed missing-audio-caption violation for silent media. Complete equivalent demo descriptions were deferred by the owner. No WCAG conformance, comprehensive manual screen-reader approval, physical-device approval or production field-performance claim is made.

## Reproduce and handoff

From repository root with the installed locked dependencies:

```sh
ACCEPTANCE_BROWSER=firefox npx playwright test --config docs/modernization/phase-h/acceptance.config.ts
REVIEW_OUTPUT=reports/zoom-review/new-review node docs/modernization/phase-h/final-review/zoom-review.mjs
node docs/modernization/phase-h/final-review/capture-calibration.mjs
```

The calibration command overwrites its own dated evidence paths; preserve this snapshot first. The zoom command's optional `REVIEW_HEADED=1` requests headed mode; unsupported native capture is recorded separately from interaction results. The browser suites remain manually invoked; no scheduled or additional automatic Actions job was introduced.

The repository fixes and case-study preparation are ready to commit/push under the owner's instruction. Production remains separate: teammate review/deployment, actual edge headers and social previews, approved telemetry activation/ingestion, then production remeasurement. The Picomatch exception remains time-limited and unresolved in npm reporting; it has not been presented as remediated.

Raw terminal logs and exported failure-context excerpts retain their original trailing spaces/blank lines. Whitespace validation excludes those generated evidence files and the saved patch; application source, review scripts/configuration and authored Markdown pass. This preserves diagnostic output rather than editing historical evidence for formatting.
