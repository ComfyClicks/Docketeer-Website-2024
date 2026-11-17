# Runtime, console and navigation baseline

Production: https://docketeer.io/, 2026-11-17; Chrome 157.0.8103.79. Evidence: [desktop browser](raw/browser-desktop.json), [mobile browser](raw/browser-mobile.json), [supplemental interactions](raw/interactions.json), all six [Lighthouse reports](../lighthouse/before/).

|ID / priority|Route / reproduction|Observed result and frequency|Cause / interpretation|
|---|---|---|---|
|R1 / P2|Load `/` in Lighthouse or GET `/site.webmanifest`|404 confirmed directly; four related console entries in every Lighthouse run (6/6)|`index.html` references `/site.webmanifest`, but file lives under `src/assets/icons/` and is not emitted at root. One defect, not four independent errors.|
|R2 / P1|Load `/` at 390×844 portrait; attempt mobile navigation|Links hidden, hamburger absent; computed SVG display `none`; reproduced by source and screenshot|Navbar SCSS hides links at portrait breakpoint but never overrides `.dropBtn { display:none }`. The first browser capture timed out attempting to click it; corrected harness records unavailable control instead of forcing a click.|
|R3 / P1|Tab from the start on `/`, then attempt section navigation/demos|Core section links/Start Exploring and demo controls skipped; real external links receive focus|react-scroll renders anchors without href; click-only divs have no native keyboard semantics. See keyboard event sequence in browser JSON.|
|R4 / P1|At mobile demo, click next eight times|Sequence Images → Data Visualization → Time-Series → Metrics → Cluster Metrics → Containers → Images → Data Visualization. Configuration and Others unreachable.|`DemoMobile/Mobile.tsx` wraps at 5 instead of data length minus one. Source also wraps previous from zero to five.|
|R5 / P1|320 CSS-pixel desktop viewport|Document scrollWidth 414, viewport/innerWidth 320; mascot clips. Mobile emulation may expand layout viewport and shrink content.|Fixed image widths and intrinsic/min-content layout interact with overflow hidden. See reflow screenshots and supplemental measurements.|
|R6 / P2|Run existing Jest suite|React unique-key warning for DemoToggle map|Missing key on mapped clickable div. Development/test warning, **not observed as a production warning**.|

## What worked and what was not observed

- All five desktop navigation items were clicked. Hash and scroll position changed as expected: features 900 px, demo 2025 px, getstarted 2950 px, team 3616 px, home 0 in this 1440×900 session. These positions are observations, not future expected constants.
- All eight desktop demos completed image loading in the supplemental pass. Initial rapid switching caused four `net::ERR_ABORTED` requests; these are navigation/selection cancellations caused by the harness, not four broken assets. The slower load-completion pass resolves that uncertainty.
- No initial broken images, HTTP failures or JS exceptions were recorded in the standalone browser pass. Lighthouse additionally fetches/validates the manifest and exposes its 404. Different probe behavior explains the console discrepancy.
- Zero standalone console warnings/errors and zero uncaught exceptions in desktop/mobile sessions. No hydration errors observed; the app uses `createRoot` client rendering, not SSR hydration.
- Main GitHub, Docker Hub and Medium links returned 200 in a bounded GET check. LinkedIn returned 403 to automation: **unverified/restricted**, not classified as a broken destination. Historical contributor links were not exhaustively crawled.
- No third-party error or browser-extension error observed. Disposable headless profiles do not include the user's browser extensions.
- No forms, account flows, API calls, or application Docker interactions are part of this website.

The mobile raw log includes an action label “Open mobile navigation by pointer” followed by only “Docketeer”; the immediately preceding `visible:false` means opening was skipped. It is **not** a successful menu test. The screenshot intentionally preserves the missing control. No synthetic forced click was used.

## Reproduction

Run `node docs/modernization/scripts/capture-browser.mjs` and `node docs/modernization/scripts/check-interactions.mjs` using existing Playwright/Chrome/axe paths described in the audit README. These are diagnostic capture scripts, not a new website test framework. Store future captures separately so the before evidence remains unchanged.
