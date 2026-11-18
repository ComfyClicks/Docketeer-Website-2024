# Local acceptance review — Phase H

**Latest disposition:** [Final local review](final-review/README.md) records Firefox 10/10 passing, actual 200%/400% zoom checks, contrast review, native-tooling limits, and the owner's decision to defer demo text alternatives. The sections below preserve the initial review snapshot and must be read with that update.

**Follow-up:** [Browser diagnosis and link correction](follow-up/README.md) supersedes H-01/H-03 below. The pointer failure reproduces on a minimal non-Docketeer page in WebKit revision 2388; the keyboard test now uses the macOS link-navigation shortcut. The contributor mapping is corrected. Original run results below remain historical evidence.

**Disposition: conditional; not a release sign-off.** Reviewed 2026-11-18 against commit `5aac1d23beabb4d4d6fcd041630e4b48ff736360`, branch `feat/website-modernization`, repository https://github.com/ComfyClicks/Docketeer-Website-2024 (default `master`). Application source, dependencies, lockfile and deployment configuration were unchanged during this review. Only documentation, review harnesses and evidence were added. No commit, push, merge, deployment or account action was performed.

The local Chromium checks are healthy. Additional WebKit checks exposed unresolved interaction failures; Firefox could not start with the required installed-tool revision. Complete demo text alternatives and a contributor-link correction also remain. These findings prevent an unqualified cross-browser/accessibility acceptance claim. See [case-study draft](../02-case-study.md) for publishable claims and explicit exclusions.

## Environment and provenance

Node 24.22.3; npm 11.20.0; project Playwright 1.65.1; Chromium 159.0.8154.6; installed WebKit reports 27.2; macOS workstation. `npm run check` uses existing locked dependencies; this task did not reinstall them. No fresh clean-install reproducibility claim is made. Monitoring build flags were off.

[Source hashes](source-provenance.json) identify the reviewed source. [Phase G hash comparison](phase-g-integrity.json) verifies all 12 recorded final implementation/configuration inputs unchanged. [Original baseline integrity](baseline-integrity.json) verifies all 91 original files unchanged. The original production scorecard's After column remains empty.

## Acceptance matrix

| Area | Result | Evidence and limit |
| --- | --- | --- |
| Build, lint, application and test type checks | Pass | `check.txt`; production build succeeded; no source edits to make it pass |
| Unit/component and policy checks | 24 Vitest + 9 Node policy tests pass | `check.txt`; no coverage-percentage claim |
| Chromium browser suite | 10/10 pass, 35.4 seconds | `browser-chromium.txt`; desktop 1440×900 and mobile 390×844, reflow test 320×800 |
| Runtime and assets | Zero captured console errors/warnings, exceptions, failed requests; zero broken visible images after loading | `network/`; bounded desktop/mobile sessions, not every possible session |
| axe automated accessibility | Zero violations in two tested states | `accessibility.json`; desktop video-caption review item; two mobile arrow contrast review items |
| CSS text enlargement | 320×800 and 768×450 remain within viewport at 200% root font | `browser-inspection.json`; menu bottoms 799/449 px, headings below navigation. This is not actual browser zoom |
| Visual review | Homepage desktop/mobile, open mobile navigation and full content screenshots preserved | `screenshots/`; typography, mascot, section hierarchy and cards remain recognizable. Owner taste/real-device review pending |
| WebKit | 1 pass, 2 fail, 1 interrupted, 6 not run | Stopped after repeated blocked interactions, exit 130; not a successful Safari or iOS acceptance run |
| Firefox | Blocked before website testing | Playwright requires firefox-1572; only firefox-1555 installed. Ten launch failures are tooling errors, not ten app defects. No browser downloaded |
| Production dependency audit | 0 findings | `security-production.json` |
| Complete dependency audit | 7 high entries, one advisory, temporary exception | `security-exception.md`; advisory withdrawn upstream while npm still reports it |
| Headers and default telemetry-off | Pass locally | Browser suite uses local header adapter; not proof of actual Vercel edge headers |
| Production deployment, ingestion and field CWV | Not verified | Owner handoff required; do not infer production configuration from source |

The initial review harness tried a relative web-server command from its nested config directory and failed to start for all engines. `browser-*-harness-startup.txt` preserves that setup error. The harness was corrected with an explicit repository-root working directory before the browser results above. No application failure is attributed to that setup attempt.

## Unresolved acceptance findings

### H-01 — WebKit pointer/focus behavior: high-priority investigation

Reproduce `ACCEPTANCE_BROWSER=webkit npx playwright test --config docs/modernization/phase-h/acceptance.config.ts --max-failures=2`. The motion test times out clicking the footer animation control: trace records repeated “html intercepts pointer events.” The keyboard test's first Tab does not focus the skip link. The demo playback test was interrupted when stopping the broader run; its behavior is not accepted or classified as a completed failure.

A focused fresh-context diagnostic (`inspect-browser.mjs`) confirms ordinary Tab reaches VIDEO, explicit skip-link focus + Enter correctly focuses the H1, and the animation button's center initially hit-tests to the button. A normal locator click still times out; explicit focus + Enter starts the animation. No uncaught exceptions were captured. These facts suggest separating platform keyboard-navigation preferences and WebKit pointer/scroll behavior from the working activation handlers; they do **not** establish a root cause or justify forcing clicks in the acceptance suite.

Next: reproduce on calibrated native Safari with full keyboard navigation enabled; inspect hit testing/scroll geometry and browser automation behavior with a minimal case, then fix a confirmed application cause or explicitly document a browser-harness limitation. Preserve keyboard activation and normal pointer tests; don't weaken assertions just to pass. Installed Playwright WebKit is not equivalent to testing real Safari/iOS. [Failure details](webkit-motion-failure.md), [keyboard failure](webkit-keyboard-failure.md), [targeted diagnostic](browser-inspection.json). Large traces remain ignored at the paths/hashes in `trace-inventory.json`.

### H-02 — Complete demonstration alternatives: accessibility completion

`src/components/Demo/demoData.ts` supplies short feature summaries, while `DemoMedia.tsx` provides generic image/video labels. These do not establish an equivalent explanation of every action/information in the silent recordings. Provide visible, accurate text alternatives based on reviewing each distinct recording, with product-owner review where needed. Silence does not remove the need for alternatives; do not invent captions for nonexistent audio. Native control usability with assistive technology remains unverified. The current desktop axe `video-caption` incomplete item is a review prompt, not a confirmed missing-audio-caption violation.

### H-03 — Swapped contributor link destinations: confirmed low-effort content defect

`src/components/Team/others.ts:205–206` assigns Cedar Cooper's GitHub URL to `linkedin` and LinkedIn URL to `github`. Correct the mapping and verify the rendered accessible names/platform destinations; no change to the person's URLs is needed. This review preserves the release input rather than mixing a content fix into its measurement record. No exhaustive external profile-link crawl was done.

### H-04 — Remaining manual review

Screen-reader review with calibrated native browsers, physical-device interaction, actual browser zoom at 200%/400%, and a complete contrast/media review remain open. Mobile axe's two contrast-incomplete nodes are the decorative Previous/Next arrow spans; the visible text names are present, but automated incomplete is not treated as verified contrast compliance. A 100 Lighthouse Accessibility score is not WCAG conformance.

### H-05 — Production acceptance

Use the [teammate handoff](../phase-g/teammate-handoff.md): review release/branch and preview, deploy only with owner authorization, verify artifact correspondence and actual headers, inspect social previews, enable approved telemetry deliberately and confirm ingestion. Record field-performance window/sample size; insufficient traffic stays “not measured.” No Vercel access is required to address H-01 through H-04.

## Quantitative local record

Reuse the six serial Phase G Lighthouse runs from **2026-11-18T15:40:12Z** because the release source/configuration is unchanged. This review did **not** rerun Lighthouse. Chromium 159.0.8154.6 / Lighthouse 13.6.0 / Node 24.22.3, Vite production preview on 4175, monitoring off, fresh navigations and default simulated mobile/desktop throttling. Per-metric median of three runs per device; all individual configurations in [saved summary](../phase-g/implementation-performance.json). Original production used different tool versions and origin/network conditions.

| Metric | Mobile | Desktop |
| --- | ---: | ---: |
| Performance / Accessibility / Best Practices / SEO | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| FCP | 754 ms | 208 ms |
| LCP, lab | 1,872 ms | 477 ms |
| CLS, lab | 0.000860 | 0.000380 |
| TBT, lab | 35 ms | 0 ms |
| Speed Index | 754 ms | 246 ms |

Fresh network capture on 4181 uses installed Chromium, fresh contexts, cache disabled, no throttling, DPR 1, 390×844 mobile and 1440×900 desktop. Record before scrolling after network idle plus 2.5 seconds; subsequently scroll/decode lazy images to distinguish unloaded from broken assets. No other timing benchmark was running. WebKit investigation overlapped part of this non-timing byte capture; do not use its timing fields as a controlled speed experiment.

| Initial-load quantity | Mobile | Desktop |
| --- | ---: | ---: |
| CDP total transferred bytes including overhead | 167,815 | 215,505 |
| JavaScript transfer / compressed body / decoded body | 97,901 / 97,462 / 284,587 B | 97,901 / 97,462 / 284,587 B |
| CSS transfer / decoded body | 2,723 / 8,123 B | 2,723 / 8,123 B |
| Image transfer | 41,480 B | 89,170 B |
| Font transfer | 24,644 B | 24,644 B |
| HTTP completed requests | 7 | 11 |
| CDP completed events including data URLs | 18 | 29 |
| Initial GIF/MP4 requests | 0 | 0 |

Source: `network/summary.json` and full records. Native lazy-loading thresholds and viewport affect image requests; desktop now includes more images within the capture window. Do not equate these totals to earlier tool/viewport captures or promise identical CDN transfer. Raw `page.brokenImages` is inherited unloaded-image accounting; **only `loadedBrokenImages` is the post-decode check**, empty for both profiles. Initial bodies are not parsed/executed-code volume. Build gzip estimates in `check.txt` are distinct from observed wire bytes. No new real-user data was collected.

Full-page screenshots were taken after scrolling to decode lazy images, so fixed navigation/skip UI can be captured at the current scroll offset within the tall image. Treat homepage/menu viewport captures as the evidence for fixed navigation placement, not a stitched full-page position. Screenshots remain unaltered.

## Reproduction and artifact inventory

From repository root with Node 24/npm 11 and locked dependencies installed:

```sh
npm run check
npm run audit:ci
ACCEPTANCE_BROWSER=chromium npx playwright test --config docs/modernization/phase-h/acceptance.config.ts
ACCEPTANCE_BROWSER=webkit npx playwright test --config docs/modernization/phase-h/acceptance.config.ts --max-failures=2
# Firefox requires the matching browser executable before this can run:
ACCEPTANCE_BROWSER=firefox npx playwright test --config docs/modernization/phase-h/acceptance.config.ts --max-failures=1
```

`inspect-browser.mjs` starts its own local preview on 4182 and writes targeted diagnostic results/screenshots. `capture-network.mjs` expects a production preview and `AUDIT_URL`/`AUDIT_OUTPUT`; for a new dataset choose a new directory (it rejects existing network records):

```sh
npm run preview -- --host 127.0.0.1 --port 4181 --strictPort
# Separate terminal:
AUDIT_URL=http://127.0.0.1:4181/ AUDIT_OUTPUT=reports/acceptance-new node docs/modernization/phase-h/capture-network.mjs
```

Review harness logs/results overwrite their paths; preserve this accepted snapshot before rerunning. To collect new repeated Lighthouse evidence use `npm run test:performance`; it creates a new ignored timestamped directory. No CI workflow or schedule was added for this review.

This directory contains check/browser/security logs; structured browser, axe, network and provenance reports; unchanged source and original-baseline hash checks; advisory snapshots; focused WebKit failure descriptions; unaltered screenshots; three reproducible review scripts/config files; and an inventory of ignored large traces. Original Phase G Lighthouse reports remain under its recorded `reports/performance/2026-11-18T15-40-12.278Z-lq6wJp/` directory, with tracked summaries. [Evidence manifest](evidence-sha256.txt) covers this review's tracked artifacts (excluding itself and ignored generated reports).

**Next action:** resolve H-01 with a focused cross-browser investigation before release acceptance, then complete media alternatives and the contributor mapping correction. Continue to treat production rollout and field verification as separate owner-assisted work.
