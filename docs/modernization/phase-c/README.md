# Phase C — Shared content, semantics and responsive accessibility

Measured 2026-11-17 against the local production build at `http://127.0.0.1:4173/`. Base: `4c1cddf3b74de99977cf5f1d1a4bc740059eedfb` on `feat/website-modernization`. No production deployment or new production measurements occurred. Changes remain uncommitted pending review.

## Changes and review

The implementation centralizes eight demos in one typed dataset while preserving original desktop/mobile media variants, titles and descriptions. Shared selection survives the 700 px breakpoint; wrapping derives from dataset length. Features and contributor records/props are typed. All 13 current contributors and 75 historical contributors retain the original names and profile URLs in order (integrity.json).

The document now has header/main/footer landmarks, one primary heading and section/card heading levels, a keyboard skip link targeting the focusable hero heading, named social links, and appropriate decorative image alternatives. Contributor and feature collections use list semantics. Heading/global element styles are scoped; fixed narrow media/card widths and fixed-height sections are replaced with content-driven sizing. Global overflow hiding was removed, exposing actual reflow defects instead of concealing them. The existing dark palette, mascot, blue accents and attribution remain.

Visibility-gated reveal animations were removed: content no longer depends on IntersectionObserver callbacks. Unused react-spring and react-intersection-observer packages and the now-unused test observer mock were removed. Decorative stars default to a static scene; a native footer button enables/pauses animation. Reduced-motion preference stops playback, including a change while the page is open. WebGL-unavailable cases retain the deterministic dark CSS background and hide the unavailable animation control. Animated GIF demos remain unchanged and can still move with reduced motion; this is an explicit remaining accessibility/media limitation for Phase D.

Read-only review found no need for a router, state framework, new component framework or test runner change. The existing native navigation and Vitest/Oxlint gates are retained. An initially incorrect Testing Library `exact` option in a new regression test was removed after TypeScript correctly rejected it; the final gate passes without type suppression.

## Final verification

Node 24.22.1, npm 11.20.0, Chrome 157.0.8103.79 and the existing Playwright installation; axe-core 4.14.0. The browser scripts use the same installed Chrome/axe versions as the original baseline, but measure the **local changed build**, not production.

|Check|Result|Evidence|
|---|---|---|
|Application typecheck and production build|Pass; existing >500 kB chunk warning remains|build.txt, checks.json|
|Source/test lint|Pass|lint.txt|
|Test/config TypeScript check|Pass|test-types.txt|
|Behavior regression tests|8 pass, including landmark/naming and demo breakpoint persistence|tests.txt|
|Keyboard navigation/menu/demo behavior|Pass at 320×800, 390×844, 844×390, 1440×900|browser-results.json|
|Navigation resize focus and blur closing|Pass|resize-results.json|
|Document width|Matches viewport at 320, 390, 640, 844, 1280 and 1440 px in sampled checks|browser-results.json, accessibility-results.json|
|Text-spacing probe|Document width still matches viewport at all five accessibility viewports|accessibility-results.json|
|Skip link|First Tab target; Enter focuses H1 #main-content|accessibility-results.json|
|Axe automated violations|0 at all five tested accessibility viewports|axe-*.json.gz|
|Observed console errors/exceptions|0 in recorded route/viewport checks|browser-results.json, accessibility-results.json|
|Background playback / live reduced motion|Static default; frame callbacks advance on Play, stop on reduce; preference reversal stays paused|motion-results.json|
|WebGL2 unavailable|Hero visible, dark background retained, motion control hidden; no uncaught exceptions|motion-results.json|
|Original baseline integrity|All 91 SHA-256 entries verified unchanged|integrity.json|

Accessibility viewports were 320×800, 390×844, 640×450, 1280×900 and 1440×900. The 320/640 widths are **reflow proxies**, not actual 400%/200% browser zoom. The text-spacing probe applies line-height 1.5, letter-spacing .12em, word-spacing .16em and paragraph margin-bottom 2em. It checks horizontal extent; it is not a complete manual assessment of every overlap or clipped element.

The production baseline recorded 7 desktop/6 mobile failing axe rules and 332/329 rule-node occurrences. The local Phase C captures record zero automated violations. Those counts describe the recorded tool runs, not WCAG conformance or a production improvement already delivered. Original baseline files and scorecard After values have not been overwritten.

### Automated review items and manual limits

Axe still marks **color contrast as incomplete**: 7 nodes at narrow widths and 9 at desktop, including navigation, hero text and CTA over the canvas/background. Narrow runs also have two incomplete label-content-name checks for the Previous/Next arrow buttons. Source/visual review confirms directional arrow glyphs with descriptive accessible names, but no speech-input or screen-reader validation was performed. Incomplete items are not counted as passing checks.

Screenshot inspection of desktop and the full 320 px page shows intact branding, readable single-column features/contributors, an uncropped mascot, and no obvious content overlap. Background contrast remains subject to the recorded automated review limitations; no manually measured contrast ratio is claimed. Full-page screenshots are unaltered and can be large/tall due to preserved contributor history.

**Manual acceptance remains incomplete:** no screen-reader traversal, physical-device testing, Safari/Firefox testing, forced-colors testing or actual browser zoom was performed. Consequently the roadmap's full assistive-technology/zoom definition of done is not fully satisfied, even though implementation and the available automated/browser checks pass. Do not claim WCAG compliance or universal accessibility from zero axe violations.

## Build artifacts and remaining performance work

Final Vite output: JavaScript **788.98 kB minified / 212.09 kB reported gzip**; CSS **6.55 kB / 1.96 kB gzip**. Phase B recorded 834.17 kB / 230.37 kB JS and 10.17 kB / 2.52 kB CSS. These are build-artifact measurements, not network transfers or executed/parsed JavaScript. No Lighthouse or field Core Web Vitals remeasurement was performed in this phase.

Large GIFs, legacy mobile media, texture/geometry costs and the >500 kB JS chunk remain Phase D concerns. A static default prevents unsolicited background movement; it does not eliminate Three.js download/initialization cost. GIF motion needs a deliberate pause/static-poster strategy. The static content is visible without observer callbacks but this React SPA still requires JavaScript; no no-JavaScript rendering claim is made.

## Reproduction and artifacts

From the repository root, select `.nvmrc` and npm 11.20.0. Run `python3 docs/modernization/phase-c/run-checks.py`, then start `npm run preview -- --host 127.0.0.1 --port 4173`. In another terminal run each of:

```sh
node docs/modernization/phase-c/browser-check.mjs
node docs/modernization/phase-c/resize-check.mjs
node docs/modernization/phase-c/accessibility-check.mjs
node docs/modernization/phase-c/motion-check.mjs
```

Scripts reference the already-installed absolute Playwright, Chrome and axe paths; adjust for another host. Axe uses WCAG 2 A/AA, WCAG 2.1 A/AA and best-practice tags after network idle plus 2.5 seconds. Raw axe JSON is gzip-compressed losslessly: `gzip -dc docs/modernization/phase-c/axe-320.json.gz` restores it. Summary JSON remains uncompressed. RAF instrumentation counts browser callbacks, not GPU work.

Artifacts include command logs/checks.json, browser/resize/accessibility/motion summaries and scripts, five compressed raw axe reports, five full-page screenshots, four navigation screenshots, and content/baseline integrity verification. Repeating scripts overwrites only this phase's derived evidence; preserve a reviewed snapshot before later changes.

## Skill guidance

Modern-web-guidance accessibility, navbar, CSS, responsive and motion guidance informed the implementing agents' work. The validation review applied “Don't rely purely on scores” and “Validate Sequential Navigations using keyboards alone”: checks retain actual Tab/Enter/Escape/focus verification and explicitly distinguish automated success from unperformed assistive-technology acceptance. No scope expansion to a full redesign or Phase D media conversion was made.
