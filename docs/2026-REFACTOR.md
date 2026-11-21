# Docketeer Website — 2026 Refactor

## Problem and scope

The public marketing website had accumulated outdated tooling, broken mobile and keyboard navigation, failing tests and lint, duplicated demo data, large eagerly loaded media, layout shifts, and incomplete SEO metadata. This work modernizes the website, not the Docketeer Docker/Kubernetes application.

Repository and deployment history established the original source baseline at `22d612c66d2ad3d7107b7ed1dff5cb52a4e1865a`. The original checkout was preserved and work isolated on `feat/website-modernization`. Changes were incremental; a framework rewrite was unnecessary.

## Changes

- Modernized React, Vite and TypeScript; replaced legacy Jest/Babel test setup with Vitest and added Oxlint, application/test type checks and behavioral browser tests.
- Restored mobile navigation, section links, keyboard focus, responsive layouts and usable demonstration playback controls.
- Centralized demo data and shared components, removing redundant dependencies and obsolete patterns.
- Replaced the Three.js background with a lightweight Canvas star field. The current local design autoplays, includes a footer pause/play control, respects reduced motion, and suspends animation in hidden tabs. Drawing is capped at 30 fps, with lower backing resolution on narrow screens, batched stars and a cached gradient.
- Deferred demonstration downloads until the selected player comes into view or the visitor requests playback. Reduced motion keeps playback manual. The player reserves space, uses a shared Play/Stop button, and serves five AV1 demos with H.264 fallbacks plus three 540p H.264 videos. Static posters, optimized portraits and logos, and self-hosted fonts support the initial view.
- Restored feature-card entry effects with native IntersectionObserver and Web Animations APIs. Each card animates once; content remains visible without animation support, and reduced motion cancels the effect.
- Refined team-card corners, updated Andy White’s portrait, repaired Arthur Jin’s image edge, and refreshed the whale mascot. Matched the dark space gradient and transparent header at the page top; the header becomes opaque on scroll, with an opaque fallback when scroll-driven CSS is unavailable. The expanded mobile menu remains opaque.
- Added canonical/social metadata, robots and sitemap resources, security headers and a deployment-artifact verifier.
- Added optional Vercel Web Analytics and Speed Insights integrations with production-origin and privacy controls. Both remain disabled until explicitly configured and verified.
- Added conservative GitHub Actions checks. Browser and performance jobs remain manual to limit recurring compute.

## Measured results

### Current local comparison — November 21, 2026

Compared production builds of original source `22d612c66d2ad3d7107b7ed1dff5cb52a4e1865a` and refactor commit `c46160f` from isolated source archives. Uncommitted media experiments were excluded. Both builds used Node 26.12.1 and npm 11.20.0, with the baseline's locked dependencies installed separately and monitoring disabled in the refactor. Tests used Chromium 159.0.8154.6, Lighthouse 13.6.0 and Playwright 1.65.1 on macOS 26.7.1 with an Intel i7-1068NG7. Both builds used the same Vite preview implementation on loopback ports 4213 and 4214. Background load and thermal conditions were not isolated.

#### Lighthouse medians

Three cold navigations per build and profile ran serially with interleaved build order and simulated throttling. Mobile used 412×823 at DPR 1.75, 150 ms RTT, 1,638.4 Kbps and 4× CPU slowdown. Desktop used 1350×940 at DPR 1, 40 ms RTT, 10,240 Kbps and 1× CPU. Each median is computed independently.

| Median | Baseline mobile | Refactor mobile | Baseline desktop | Refactor desktop |
| --- | ---: | ---: | ---: | ---: |
| Performance | 34 | 97 | 73 | 100 |
| Accessibility / Best Practices / SEO | 52 / 92 / 67 | 100 / 100 / 100 | 55 / 92 / 67 | 100 / 100 / 100 |
| FCP | 2,213 ms | 759 ms | 773 ms | 218 ms |
| LCP | 5,108 ms | 1,999 ms | 906 ms | 433 ms |
| Total blocking time | 1,833 ms | 185 ms | 22 ms | 0 ms |
| CLS | 0.482 | 0.00086 | 1.411 | 0.00038 |
| Speed Index | 3,176 ms | 978 ms | 1,020 ms | 338 ms |

Individual performance scores were **25, 42, 34 → 97, 94, 98** on mobile and **73, 74, 46 → 100, 100, 100** on desktop. This comparison measures the combined refactor in the local lab. Earlier local runs and original production observations are separate datasets. Automated accessibility scores do not establish WCAG compliance.

#### Initial resources and build size

Fresh unthrottled browser contexts used 390×844 mobile and 1440×900 desktop viewports at DPR 1. Cache was disabled. Captures ended 2.5 seconds after network idle, without scrolling. Request counts and totals cover HTTP traffic including the document. Category cells give HTTP-encoded / decoded response body sizes in decimal kB. Total transfer uses Chromium's CDP byte count, which includes response overhead. Build size sums uncompressed files in `dist`, including media fallbacks.

| Resource | Baseline mobile | Refactor mobile | Baseline desktop | Refactor desktop |
| --- | ---: | ---: | ---: | ---: |
| JavaScript | 186.8 / 671.3 kB | 98.2 / 285.7 kB | 186.8 / 671.3 kB | 98.2 / 285.7 kB |
| CSS | 2.5 / 10.8 kB | 2.7 / 8.8 kB | 2.5 / 10.8 kB | 2.7 / 8.8 kB |
| Images | 16,489.5 / 16,493.5 kB | 47.7 / 47.7 kB | 8,055.7 / 8,059.7 kB | 87.6 / 87.6 kB |
| Fonts | 0 kB | 24.0 / 24.0 kB | 0 kB | 24.0 / 24.0 kB |
| Total transferred | 16.690 MB | 0.176 MB | 8.256 MB | 0.217 MB |
| HTTP requests | 30 | 7 | 30 | 11 |

The uncompressed build fell from **94.64 MB to 24.78 MB**. The baseline fetched one GIF demo on initial navigation in each profile. The refactor fetched no animated demo in this window. After scrolling, the 6.14 MB Time-Series and 5.85 MB Configurations WebPs load when their players are selected and in view, or on manual playback. These initial-navigation figures do not measure a full session.

After this benchmark, the approved 540p H.264 encodes replaced the two WebPs. Time-Series is **1.03 MB** and Configurations is **2.53 MB**. Data Visualization also switched from 1080p AV1 and H.264 to a single **2.31 MB** 540p H.264 encode. Those are file sizes. The navigation and build figures above still describe the measured commit.

#### Ongoing background rendering

In separate unthrottled Chromium samples at 1440×900 and DPR 1, the browser remained at the top of the page. Each state used three fresh contexts with a one-second settling period after network idle, followed by a 10-second capture. Median CDP renderer `TaskDuration` was **9.872 s** for the original Three.js background, **0.753 s** for the running Canvas background, and **0.0019 s** with Canvas paused. The builds use different renderers, and headless graphics behavior can affect the comparison. These renderer-thread timings do not measure system CPU, GPU or battery use.

Raw evidence is in `/Users/andywhite/Documents/Docketeer-Website-Archive/2026-11-21-before-after`, including 12 Lighthouse JSON and HTML reports, traces, network captures, build manifests and scripts. An initial Lighthouse attempt was stopped because the benchmark launcher blocked its local server. All reported Lighthouse runs came from the corrected serial launcher.

### Historical local results — November 20, 2026 (optimized animation)

The star field retains all 240 stars, time-based movement, autoplay, pause/resume and live reduced-motion handling. It now draws at up to 30 fps, caps backing scale at 1 on widths up to 768 CSS pixels (2 elsewhere), batches star paths, and caches the gradient in a one-pixel-wide strip using an opaque Canvas context. Narrow high-density displays have slightly softer decorative stars; text and media resolution are unchanged. The fixed header gains an opaque surface within the first 24 pixels of scrolling. Native scroll-driven opacity has an opaque fallback; root scroll padding protects keyboard-focused controls.

Measured source is the existing dirty `feat/website-modernization` tree at `0507f13703a38b5d7238615e7739857be14b262c` plus these Canvas/header/focus changes and browser tests. No dependencies changed. Source/build hashes, before-build copy and exact patches are archived at `/Users/andywhite/Documents/Docketeer-Website-Archive/2026-11-20-animation-optimization`.

**Validation:** Node 24.22.1/npm 11.20.0; `npm run check` passed lint, application/test types, build, 24 unit tests and nine CI-policy tests. `npm run audit:ci` found zero full-tree or production vulnerabilities, with no exception. All **15** desktop/mobile Chromium browser tests passed, including new drawing-rate, DPR 3 backing-size, scrolled-header and focus-clearance checks. Native Brave 158.1.100.58 spot checks confirmed scrolled portrait/header readability, 200% menu operation, 400% playback focus clearance and footer pause/resume. Seeded before/after screenshots preserve the design comparison. Automated accessibility scores remain insufficient to establish WCAG compliance.

#### Matched local measurements

Same workstation and toolchain as the earlier review: Intel i7-1068NG7/32 GB, macOS 26.7.1, Chromium 159.0.8154.6, Lighthouse 13.6.0; monitoring disabled. Production preview at `http://127.0.0.1:4175/`, cold serial navigations, three runs per measured profile; default simulated mobile throttling (412×823/DPR 1.75, 150 ms RTT, 1,638.4 Kbps, 4× CPU) and desktop preset (1350×940/DPR 1, 40 ms RTT, 10,240 Kbps, 1× CPU). JSON, HTML, DevTools logs and traces are retained. Medians are independent per metric. Background applications, thermal and power conditions were not isolated.

| Median | Same-session before mobile | Optimized mobile | Optimized desktop |
| --- | ---: | ---: | ---: |
| Performance | 79 | 97 | 100 |
| Accessibility / Best Practices / SEO | 100 / 100 / 100 | 100 / 100 / 100 | 100 / 100 / 100 |
| FCP | 795 ms | 761 ms | 209 ms |
| LCP | 2,441 ms | 1,951 ms | 488 ms |
| Total blocking time | 762 ms | 184 ms | 0 ms |
| CLS | 0 | 0.000860 | 0.000380 |
| Speed Index | 1,479 ms | 946 ms | 337 ms |

Before mobile scores were **81, 79, 77**; optimized scores were **95, 97, 98**. Earlier 88 and running/paused results below belong to separate batches and remain historical. These observations support the combined changes locally; they do not establish production/field gains or attribute every score point to one optimization.

At desktop 1440×900/DPR 1, three alternating running/paused 10-second renderer samples per state used identical instrumentation and one-second settling periods. Median running `TaskDuration` fell from **3.574 s to 1.321 s**, about **63%**; paused medians were 0.0133/0.0118 s. These are renderer timings, not system CPU, GPU or battery measurements.

An additional **isolated Canvas harness**, excluding React/page content, compared each cumulative step at 390×844/DPR 3 with seeded stars, three five-second samples per stage and reversed ordering on the middle repetition:

| Stage | Median renderer task seconds per wall second |
| --- | ---: |
| Original | 0.253 |
| 30 fps cap | 0.141 |
| Also lower mobile backing resolution | 0.0557 |
| Also batch star paths | 0.0540 |
| Also cache gradient/use opaque context | 0.0384 |

Observed paints fell from about 60 to 30 per second. Backing dimensions fell from 780×1688 to 390×844; the mobile-resolution step accounts for most of the remaining reduction after the frame cap. The small batching difference alone is not strong evidence of a reliable improvement. These harness results are separate from whole-page measurements.

Initial production-preview captures at `http://127.0.0.1:4173/`, desktop 1440×900/mobile 390×844, DPR 1, fresh cache-disabled contexts, unthrottled network-idle plus 2.5 seconds before scrolling/playback: **11/7 HTTP requests**, no initial GIF/MP4. Decoded JS is **285,529 B** (under 350,000 B); CSS is **8,683 B**, also the raw entry artifact sizes. Compressed response bodies are 97,841 B JS / 2,541 B CSS, 91,975/47,719 B desktop/mobile images, 24,004 B fonts and 788 B HTML. Total encoded/decoded bodies are **217,149/412,850 B desktop**, **172,893/368,594 B mobile**. CDP received HTTP data, including headers, totals **221,866/176,036 B**; Resource Timing transfer estimates are 220,449/174,993 B. Decoded bodies are not bitmap memory or executed-code size.

**Remaining startup work:** before traces contain React scheduler callbacks and whole-document layout work; optimized mobile traces still contain nested scheduler callbacks of about 64–86 ms. Trace durations overlap and are not additive or equivalent to simulated blocking time. They do not identify a separate application hotspot warranting speculative changes. Actual hidden-tab suspension remains unverified by the harness; physical-device, screen-reader, fresh Firefox/WebKit and full GPU/power testing remain outstanding. No commit, push, merge, deployment or hosted-setting change occurred.

### Earlier local acceptance — November 20, 2026 (before animation optimization)

**Qualified acceptance:** reliability checks and resource budgets pass; transparent-header readability and continuous animation cost need review before unconditional acceptance. No application fixes were made.

Measured `feat/website-modernization` at `0507f13703a38b5d7238615e7739857be14b262c` **plus the existing uncommitted working tree**: the portrait/hero assets, team/header/gradient styles, autoplay star field, feature reveals, related tests/media scripts, metadata and documentation cleanup. The archive contains the binary Git diff, untracked inputs, initial/final status and SHA-256 source/build manifests. Rebuilding produced identical artifacts. That acceptance review changed only this report.

Environment: Intel Core i7-1068NG7, 32 GB RAM, macOS 26.7.1; Node **24.22.1**, npm **11.20.0**, Playwright **1.65.1**, Chromium **159.0.8154.6**, Lighthouse **13.6.0**. The initial shell used Node 26.12.1; an external isolated runtime supplied the required version. A preliminary run picked up bundled npm 11.19.1 internally; `check` and `audit:ci` were repeated with 11.20.0 throughout. No dependencies were upgraded. Both monitoring build switches were unset/default false; no local telemetry requests were observed.

`npm run check` passed lint, application types/production build, test types, **24 unit tests and nine CI-policy tests**. `npm run audit:ci` passed with **zero full-tree and production vulnerabilities**, using no exception. The complete existing Chromium browser suite passed **12/12** desktop/mobile tests, including demo playback, keyboard navigation, image decoding, reflow, motion and feature reveals; its mobile project intentionally excludes the two motion lifecycle tests. No guarded console, application or unexpected request errors were reported.

#### Production-build Lighthouse

`npm run test:performance` tested `http://127.0.0.1:4175/`, with three cold navigations per profile, **all six serial**, and independent per-metric medians. Headless Chromium used Lighthouse simulated throttling: mobile 412×823, DPR 1.75, 150 ms RTT/1,638.4 Kbps/4× CPU; desktop 1350×940, DPR 1, 40 ms RTT/10,240 Kbps/1× CPU. The local workstation had other applications open; thermal, power and background workloads were not isolated. Individual JSON/HTML reports retain full configurations and timestamps.

| Median metric | Mobile | Desktop |
| --- | ---: | ---: |
| Performance | 88 | 100 |
| Accessibility / Best Practices / SEO | 100 / 100 / 100 | 100 / 100 / 100 |
| FCP | 760 ms | 218 ms |
| LCP | 2,130 ms | 522 ms |
| CLS | 0 | 0.000380 |
| Total blocking time | 436 ms | 0 ms |
| Speed Index | 1,100 ms | 356 ms |

Mobile Performance runs were **88, 93, 87**; desktop runs were **100, 100, 100**. Mobile blocking times were 436, 278.5 and 475.5 ms. This is below historical mobile scores, but differing tools, source and workstation conditions prevent attributing the difference solely to recent changes. Local laboratory results establish no production or real-user improvement.

#### Initial resources and ongoing animation

Separate unthrottled captures used `http://127.0.0.1:4173/` (production preview with the repository's global header adapter), fresh contexts, cache disabled, DPR 1, desktop 1440×900/mobile 390×844, network idle plus 2.5 seconds, **before scrolling or playback**. Data URLs are embedded resources, excluded from HTTP request counts.

| Resource | HTTP requests desktop/mobile | Encoded body B desktop/mobile | Decoded body B desktop/mobile |
| --- | ---: | ---: | ---: |
| JavaScript | 1 / 1 | 97,688 / 97,688 | 285,112 / 285,112 |
| CSS | 1 / 1 | 2,412 / 2,412 | 8,315 / 8,315 |
| Images | 6 / 2 | 91,975 / 47,719 | 91,975 / 47,719 |
| Fonts | 2 / 2 | 24,004 / 24,004 | 24,004 / 24,004 |
| HTML | 1 / 1 | 788 / 788 | 2,659 / 2,659 |
| Total | 11 / 7 | 216,867 / 172,611 | 412,065 / 367,809 |

CDP `encodedDataLength` totals, including received HTTP headers, were **221,584 B desktop / 175,754 B mobile**; Resource Timing `transferSize` estimates were 220,167 / 174,711 B. Encoded bodies reflect response compression, whereas decoded bodies are resource bytes, not executed-code size or bitmap memory. The raw build entry artifacts were **285,112 B JS / 8,315 B CSS**; all `dist` files totaled 80,950,323 B, chiefly deferred demo media. These artifact sizes are not initial download costs. The 350,000 B decoded-JavaScript budget passed; no initial GIF/MP4 requests occurred.

At desktop 1440×900/DPR 1, unthrottled and stationary at the hero, six alternating **10-second** CDP sampling-profiler captures compared three running and three paused samples after one-second settling periods. Median renderer `TaskDuration` deltas were **2.963 s running / 0.0189 s paused**; `ScriptDuration` was **0.0849 s / 0 s**. Raw CPU profiles are archived. Autoplay adds measurable ongoing renderer work that a navigation score alone misses. These are instrumented renderer-thread timings, not whole-machine CPU, GPU, battery or physical-mobile measurements; they do not prove the cause of Lighthouse blocking time. This finding motivated the drawing optimizations above; autoplay is retained at the maintainer’s request.

A same-day follow-up isolated the background state using six further cold mobile Lighthouse navigations, alternating running/paused three times on the unchanged build at `http://127.0.0.1:4175/`. Lighthouse's programmatic Puppeteer API used the same mobile defaults, browser and tool versions. Both states received the same initialization observer; paused runs activated the existing pause button immediately after initialization, keeping reduced motion off and all assets unchanged. Each final button state was verified. Running scores were **80, 94, 93 (median 93)**; paused scores were **96, 88, 96 (median 96)**. Median blocking time was **284.5 / 213 ms**, and LCP **2,151 / 1,939 ms**, running/paused respectively. This suggests a contribution from animation, but overlapping scores and substantial residual blocking time do not establish it as the main cause of the earlier 88. These supplementary results do not replace the original acceptance medians. Raw reports and the test script are in the archive's `animation-lighthouse-ab` directory and adjacent script/log.

#### Accessibility and visual review

Browser tests verified skip-link/section focus, mobile menu/Escape, all eight demos and their controls, loaded images and text-spacing reflow. Additional captures found no horizontal overflow at 320 or 768 CSS pixels. Native Brave **158.1.100.58** spot checks verified visible skip-link focus, 200%/400% browser zoom, opaque expanded navigation, demo reflow and footer pause/resume. Andy's portrait, Arthur's repaired edge, rounded corners and the hero illustration rendered intact. Live **emulated** reduced-motion changes stopped background/reveal work; all nine feature cards stayed visible when IntersectionObserver or Web Animations was separately unavailable.

**Confirmed defect:** at desktop 1440×900, scrolling team portraits beneath the transparent fixed navigation puts white Home/Features/Demo text over light image areas. Native high-zoom scrolling also showed branding overlapping page content and part of a focused playback button's border. The subsequent changes above add that header surface and root scroll padding; no fix was applied during the earlier acceptance review itself. Fresh scrolled axe runs reported no violations but left **103 color-contrast nodes and one video-caption check incomplete** per state. Image-backed contrast needs human review; automated 100 scores do not establish WCAG compliance.

Actual hidden-tab suspension remains **unverified**: headless and headed Playwright tab switches, including attempts to disable focus emulation, continued reporting `document.hidden === false`. They cannot exercise the real hidden-tab branch; this is a harness limitation, not evidence of an application failure. Fresh Firefox/WebKit runs, native screen-reader and physical-device testing, exhaustive zoom/contrast coverage, total GPU/power costs and complete silent-demo text alternatives remain outstanding.

### Historical measurements

The following measurements belong to earlier source states and remain historical. They are not fresh results for the current design.

### Matched local performance experiment

The controlled performance experiment held Node 24.22.1, Chrome 157, Lighthouse 13.4.1 and preview behavior constant. Before source: `47326ca61dd588b3735dedb115488c5d66ce6099`. Lighthouse results are medians of three runs per device. Transfer measurements came from separate CDP captures and cover initial navigation, not all media after playback.

| Metric | Before | After optimization |
| --- | ---: | ---: |
| Mobile Lighthouse Performance | 76 | 99 |
| Desktop Lighthouse Performance | 90 | 100 |
| Mobile laboratory LCP | 4.143 s | 1.848 s |
| Desktop laboratory CLS | 0.181763 | 0.000380 |
| Mobile initial transfer | 16,829,115 B | 169,457 B |
| Desktop initial transfer | 8,325,462 B | 169,457 B |
| Initial JavaScript transfer | 210,859 B | 97,686 B |
| Decoded JavaScript body | 788,980 B | 283,976 B |

### Original production and later local checks

Original production mobile/desktop Lighthouse scores were Performance **60/74**, Accessibility **52/55**, Best Practices **92/92**, and SEO **73/73**. Later local medians were **100/100 in each category**, across three runs per device. These environments used different browser/Lighthouse versions, so this comparison does not isolate the effect of code changes or establish a production improvement.

The original lint command reported five errors and one warning; five of seven Jest tests failed. Local modernization validation passed build, lint, application/test type checks, 24 Vitest tests, nine CI-policy tests and 10 desktop/mobile browser tests. Subsequent targeted tests verified animation pause/reduced-motion behavior and feature-card reveals. Automated accessibility checks found no violations in tested states; that does not establish full accessibility compliance.

On November 20, 2026, `npm run audit:ci` reported **zero dependency vulnerabilities**, including production dependencies, without using an exception. A historical development advisory exception remains configured with an expiry; it was unnecessary for that registry response. Audit results are time-dependent and do not prove absence of all security risks.

## Deployment status and limitations

At the November 20 dashboard review, `docketeer-2026/docketeer-website-2024` still served the original baseline from `master`. Production deployment reference: `EhHGvQZQJxHmuqrzvGeG8uAuPUwn`. The project’s discontinued Node 20 build selection was changed to Node 24. Preview creation was blocked by a GitHub API rate-limit error. No later deployment was verified. This local acceptance review did not query or change hosted state and does not establish a subsequent deployment.

Before promotion, verify the intended commit and Node 24 build logs, hosted navigation/media, security headers, metadata, crawl resources and rollback availability. If enabling monitoring, verify free-tier settings, real payloads and dashboard ingestion. Repeat production benchmarks afterward; real-user performance requires sufficient field data.

Complete text alternatives for silent demos were deferred by the maintainer. Current acceptance limitations and the confirmed transparent-header defect are recorded above. No business-impact, uptime or field-performance gains have been measured.

## Maintenance and evidence

Use the repository README for installation, checks and deployment verification. Generated reports belong in ignored local output directories. Detailed historical reports, screenshots, raw measurements and case-study drafts were archived outside the repository on the maintainer’s computer; they remain available to investigate or reproduce the historical findings. They are intentionally excluded from the maintained source tree. Existing Git history is preserved.

Historical archive: `/Users/andywhite/Documents/Docketeer-Website-Archive/2026-11-20-012301`.

Fresh acceptance evidence: `/Users/andywhite/Documents/Docketeer-Website-Archive/2026-11-20-local-acceptance`. It includes check/audit logs, copied browser reports and traces, six Lighthouse JSON/HTML reports, network captures, screenshots, CPU profiles, native-browser observations and provenance manifests. Initial supplemental axe setup failed because it used an implicit browser context; the corrected explicit-context run passed and both logs are retained. Generated outputs remain ignored. That acceptance review made no application fixes, commits, pushes, merges, deployments or production-setting changes.
