# Accessibility and responsive audit

Production, 2026-11-17. Automated tools: axe-core 4.14.0 and Lighthouse 13.4.1. Browser-assisted manual checks used actual Tab keys, pointer interactions, computed DOM/styles and screenshots. No screen reader or physical mobile device was tested. This is not a WCAG conformance certification.

## Automated results

Initial DOM after network idle plus 2.5 seconds. Tags: WCAG 2 A/AA, WCAG 2.1 A/AA, best-practice. Counts include offscreen DOM and repeat common markup defects. Hidden/revealed content and profile differences can change counts.

|Rule|Axe impact|Desktop nodes|Mobile nodes|Interpretation / source|
|---|---|---:|---:|---|
|image-alt|critical|104|104|Team photos/social icons and demo images lack alternative text; `TeamCard`, `AllOthers`, `DemoImage`, `Mobile`, `GetStarted`|
|link-name|serious|177|176|Repeated GitHub/LinkedIn icon links have no accessible name; use person + destination naming|
|color-contrast|serious|1|1|Medium link reported 2.03:1 against white; see qualification below|
|list|serious|1|1|Navbar `ul` contains direct div children|
|listitem|serious|2|0|Icon li nested in div instead of direct list parent; hidden mobile nodes excluded|
|heading-order|moderate|1|1|Feature h3 follows section h1; organize document h1/h2/h3 semantically|
|region|moderate|46|46|No main landmark; content outside recognized landmarks|
|Total rule-node occurrences||332|329|7 desktop / 6 mobile failing rules; not unique elements or WCAG criteria|

Lighthouse medians: **55 desktop, 52 mobile**. Lighthouse additionally flags touch-target sizing on mobile. Its rule set, capture timing and scoring differ from standalone axe; do not equate these counts to score deductions. Raw JSON preserves violations, selectors, HTML snippets, passes and incomplete checks.

**Contrast qualification:** axe consistently evaluates the transparent Medium link background as white. The visible screenshot shows it over a dark WebGL canvas; source leaves body background transparent and relies on canvas for the backdrop. Thus 2.03:1 is a confirmed *automated finding*, not a manually verified contrast ratio over the rendered star field. White bands also appear in mobile section captures. Make the base background deterministic, then measure contrast against actual intended backgrounds and test with WebGL unavailable. Do not blindly change brand colors to satisfy a misidentified background.

## Browser/manual and source-confirmed findings

|Finding|Severity / user impact|Evidence and verification|Recommended change|
|---|---|---|---|
|Mobile navigation unavailable|High; primary sections inaccessible through menu|390×844 screenshot, menu `display:none`; source breakpoint|Native button with accessible name, expanded state, controls target; visible menu and predictable focus/close behavior|
|Section links not keyboard reachable|High; keyboard users cannot use primary navigation|First 12 Tab stops skip section links and Start Exploring; href absent|Real fragment anchors and real IDs; preserve deep links and scroll offsets|
|Demo controls not keyboard reachable|High; demo interaction excluded|Click-only divs, no tabindex/role/key handling; desktop and mobile|Native buttons; name arrows Previous/Next demo; announce selected demo appropriately without over-announcing|
|Missing image/link descriptions|High; screen-reader ambiguity|104 missing alt nodes; 176–177 unnamed links|Meaningful demo alt; decorative alt="" when appropriate; explicit person/destination names on icon links|
|Missing main / heading hierarchy|Moderate; structural navigation weak|No main; multiple section h1, h3 feature headings|One page h1, section h2, card h3; main landmark; skip link|
|Reflow failure|High; clipped content/small text on narrow screens|320 CSS px viewport has 414 px scrollWidth; screenshot clips mascot; 390 touch profile expands layout width|Responsive max-inline-size, explicit aspect ratios, content-driven widths; validate 320 px and real zoom|
|Reduced motion ignored|Moderate; avoidable motion for sensitive users|Emulated reduce preference true while hero DIV animation remains running; no prefers-reduced-motion source rule; stars RAF unconditional|Disable nonessential float/reveal/star motion for reduce; avoid hiding content while waiting for animation|
|Focus indication / order|Mixed|Native external links have default outline; primary controls never enter tab order; no positive tabindex found|Retain visible focus styles; test complete page order after semantic fixes|
|Touch targets|Moderate|Lighthouse mobile target-size flags; social icons as small as 14/18/23 px in source|Expand clickable padding and separation while retaining visual icon size|
|Forms and ARIA|Not applicable / missing controls semantics|No forms; no label validation needed. No ARIA-heavy widgets; menu lacks expanded state.|Use native semantics first; add ARIA only for state/relationships|

No focus trap observed in sampled keyboard sequence. Native external-link focus exists; do not claim all focus indicators are absent. The 320 px check is a reflow proxy only; 200%/400% browser zoom, text spacing, high contrast, full screen-reader traversal and cross-browser behavior remain untested.

## Visual quality observations

Technical defects: missing mobile menu; clipped mascot at 320 px; very small two-column mobile feature text; cropped fixed navigation in mobile section screenshots; blank/white bands at the bottom of some touch-emulated views; logo aspect-ratio distortions flagged by Lighthouse. Validate bands/cropping on a physical device before attributing every screenshot artifact to production behavior. Root overflow and canvas sizing are plausible contributors.

Subjective refinements: use more consistent section spacing instead of large viewport-height gaps; consider one-column feature cards on the narrowest screens; improve demo text legibility; normalize contributor card proportions and grid spacing. Preserve mascot, star/night theme, recognizable blue accents and contributor history. No full redesign is necessary.

Evidence: [desktop raw](raw/browser-desktop.json), [mobile raw](raw/browser-mobile.json), [interactions](raw/interactions.json), [screenshots](../screenshots/before/). Future acceptance: automated findings triaged/resolved, all primary interactions usable with keyboard and touch, complete manual checklist with assistive technology and zoom, then repeat captures with matching viewport and motion policy.
