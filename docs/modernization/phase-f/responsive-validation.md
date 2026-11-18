# Phase F responsive validation

Measured: 2026-11-18T01:10:46.190Z

Run from the repository with the installed Node runtime: `node docs/modernization/phase-f/responsive-check.mjs`. Requires the current production build served at `http://127.0.0.1:4173/` and immutable Phase F baseline commit `7544599c82efcc4cf69d3573c83d77596327b074` served at `http://127.0.0.1:4174/`. Uses installed Playwright Chromium; no additional dependencies. Raw results: `responsive-results.json`.

Final result: exit 0. Eight viewports (320, 390, 700, 701, 768, 1024, 1100 and 1440 CSS pixels wide), with height 900 except 768 × 450, passed all eight demo selections without document horizontal overflow or captured console/page errors. Mobile carousel position and both wrap directions, accessible demonstration button names, keyboard skip link and mobile-menu Enter/Escape behavior passed. All 13 current and 75 additional contributors retained the baseline names and URLs.

Four additional contexts enlarged the root font to 200% at widths 320, 390, 768 and 1440. This is a text-enlargement stress test, **not actual browser zoom**. All fit the viewport; mobile menus remained usable and their lower edges stayed inside the viewport. Skip-link destination headings cleared the dynamically measured header. These checks exposed and drove fixes for wrapping navigation, header-dependent anchor offsets, and menu padding exceeding its viewport height allowance. Earlier compact regression records and screenshots are preserved separately.

Forced-colors emulation at 390 and 1440 retained a visible solid 3px focus outline after actual Tab/Shift+Tab navigation to the long Data Visualization play button, with no horizontal overflow. Representative unaltered screenshots are in `validation/`.

A navigation screenshot anomaly remains unresolved. Some inspections of the home captures show a blank header band, while other tool renderings of the same validation PNGs show the wordmark, logo, and Menu. `validation/navbar-exact-capture.json` records child bounds inside the viewport, computed visibility, opacity 1, and document scroll position 0. DOM geometry and computed styles do not establish painted visibility. The companion PNGs are retained as evidence, but are not accepted as proof that the header consistently renders correctly. Further isolated browser and pixel inspection is required to distinguish an application rendering issue from screenshot capture or image-viewing behavior.

Limits: these are local Chromium functional/layout checks, not performance benchmarks, real-user data, a full assistive-technology audit, native operating-system high-contrast validation, or actual browser-zoom testing. No claim of WCAG compliance follows from these results.
