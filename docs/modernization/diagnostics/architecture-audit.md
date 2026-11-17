# Architecture and maintainability audit

Source baseline: `22d612c66d2ad3d7107b7ed1dff5cb52a4e1865a`. Scope is website only.

## Current design

`index.html` loads `src/index.tsx` and `src/stars.js`; Vite combines them into one JS entry. React 18 `createRoot` renders App → Page → Navbar, Home, Features, Demo, GetStarted, Team. No SSR, SSG, backend, API, global state store, authentication, CMS, or runtime data fetching was found. React StrictMode is enabled. Each marketing section is a react-scroll Element; navigation changes hash and smooth-scrolls. React Router exists only in tests.

State is local: hero/demo observer flags, desktop/mobile selection, screen-size flag. Features and Team use react-intersection-observer plus react-spring. Content is hardcoded in TSX and JS arrays. SCSS Modules are used for components, with a global stylesheet and global element selectors inside modules. Media imports are Vite assets. Vercel serves static dist; `vercel.json` contains only an empty redirects array. CNAME remains historical domain documentation rather than proof of Vercel settings.

Build: TypeScript emits to dist, then Vite builds there. Jest uses ts-jest plus Babel transform and mocked media/styles; single workflow runs tests only. Configuration is unpinned for Node/npm. No secret-backed runtime configuration or environment reads were found.

## Findings with meaningful consequences

|ID|Finding and evidence|Consequence / recommendation|Priority|
|---|---|---|---|
|A1|DemoToggle descriptions/buttons, DemoImage asset order and Mobile gifs/descriptions independently encode the same eight concepts; Mobile still uses old media and a six-entry wrap|Already causes missing mobile features and payload drift. One typed demo dataset keyed by stable ID; responsive presentation reads same data. Native buttons; keep separate layout only if necessary.|P1|
|A2|Navbar `displayNav` queries **all document li** and mutates inline visibility; menu is a div and icon never displayed|Tight coupling to unrelated lists and state outside React; brittle resize/focus behavior. Use a locally scoped native menu toggle and explicit open state.|P1|
|A3|Home/Demo reveal code swaps between materially different layout classes; starts hidden; duplicates observer setup|Layout shifts and failure modes if JS/observer/animation fails. Visible semantic sections first, stable layout, minimal shared reveal helper only if retained duplication warrants it.|P1|
|A4|stars.js executes globally outside React: 667 sphere meshes, separate geometry/material for each, no teardown/visibility/reduced-motion/failure path|Persistent CPU/GPU load; renderer failure could abort that entry's initialization. Simplify background or isolate lifecycle and batch drawing; do not build an animation framework.|P1 performance / P2 architecture|
|A5|Team calls useSprings(8, five delay entries) while current team data has 13 people; animated styles read by index|Later contributors have no corresponding animation configuration; content still renders. Derive animation count from data or simplify animation; avoid hardcoded team generation labels.|P2|
|A6|SCSS Modules include global `li`, `h1`, canvas and other element selectors; global root width:min-content, hidden x overflow; breakpoints 650/700/840/1000/1275 differ|Cross-component styling effects, clipped/narrow layout and fragile responsive transitions. Keep a small shared token/layout layer, scope component rules, use content-driven widths.|P1 reflow / P2 cleanup|
|A7|Static data is weakly typed; exported prop interfaces not applied; `animation:unknown` but destructured args untyped; TS disables implicit-any/null checks|Changes can drift without errors. Type demo/contributor records and props; tighten checks incrementally after baseline tests work.|P2|
|A8|`.vite/deps` generated artifacts committed (6,310,119 B); lockfile tracked but named in .gitignore|Repository noise and future risk of an untracked replacement lock. Remove cache tracking and revise ignores during implementation; keep a committed lockfile.|P2|
|A9|86 source asset files total 148,909,251 B; 42 lack filename references in inspected source/HTML|Candidates for removal, not definitive dead files. Inventory references and preserve contributor/history/media intentionally; validate build before deletion.|P3|
|A10|Footer outside body; no main landmark/description; semantic navigation depends on JS|HTML validity, assistive navigation and crawlability suffer. Correct shell semantics and native anchors without introducing a router.|P1 a11y / P2 SEO|
|A11|No error boundary, WebGL fallback, client monitoring or documented operational owner|Failures can leave poor user feedback and no alerting. For this static site, robust default content/fallbacks matter first; add proportionate error reporting later.|P2|

Team count is 13 records in currDocketeerTeam; history list is retained separately. Confirm intended active/prior team presentation with the maintainer before changing contributor attribution. Current “XX” hero and XIX Medium link are factual source content; whether the article should change is an editorial decision, not a proven broken link.

## Complexity judgment

No God component was found. Largest TSX: Navbar 133 lines, Features 107; largest module is `others.js` at 379 lines of contributor data. Page orchestration is 36 lines. Splitting these further solely to reduce line count would add indirection. Existing section/component boundaries are appropriate. Main problems are **duplicated data, fragile DOM/animation behavior, and unnecessary installed dependency breadth**, not a need for more abstraction.

No global state manager, custom routing layer, generic component library, new backend, or full framework rewrite is justified. Incremental React/Vite modernization is practical given the successful locked build and small source surface. Static rendering could later reduce JS dependence, but it requires addressing `window.innerWidth` during render and observer/motion assumptions; evaluate a small prototype against measured benefit before choosing a migration.

## Visual refinement scope

Preserve identity: mascot/whale imagery, blue accents, dark space theme, content and contributor links. First fix functional responsiveness and semantics. Then adjust narrow-screen feature layout, demo legibility, section spacing, consistent image proportions and focus states. Changing all typography/colors or deleting the star theme is a design decision requiring review, not a prerequisite for accessibility or performance. Keep visual refinement separate from toolchain changes for reviewability.

Evidence: [source inventory](raw/source-inventory.json), source paths named above, [browser interactions](raw/interactions.json), [build results](build-results.md), [screenshots](../screenshots/before/). Filename-only unused-asset analysis is deliberately conservative and must not be treated as automated deletion authorization.
