# Payload, rendering and performance opportunities

Production measures are Lighthouse 13.4.1 median of three runs/profile on 2026-11-17. Local sizes are from the locked build. No optional bundle analyzer was installed. Units below are bytes unless stated otherwise.

## Measured resource footprint

|Resource|Mobile transfer|Desktop transfer|Scope|
|---|---:|---:|---|
|All resources|16,828,763|8,320,516|38 / 36 initial Lighthouse requests|
|JS|192,873|192,873|One entry bundle|
|CSS|5,750|5,728|App stylesheet + two Google Fonts stylesheets|
|Images|16,502,554|8,064,158|27 requests including icons|
|Fonts|124,013|54,184|4 / 2 requests; UA/profile font responses differ|

The mobile/desktop difference is principally the initial demo asset: mobile loads `containerTab-new-781fd8ff.gif` (**10,597,935 decoded bytes**) while desktop uses `ContainersFilters_v20-94349884.gif` (**2,164,112 decoded bytes**). CSS hiding/opacity does not defer image downloads. Imported strings for alternate GIF URLs appear in JS; their full binary contents are emitted as separate assets, **not embedded in the 671 kB JS bundle**. Most other demos are fetched only on selection.

Largest initial desktop image transfers include the first GIF (~2.165 MB including transfer overhead), Nick photo (~1.541 MB), Alex photo (~966 kB), Joseph photo (~857 kB), Ellis photo (~663 kB). These portraits are below the fold but eager. The source has no `loading="lazy"`, responsive srcset/sizes, or general explicit image dimension strategy.

## Metrics that must remain distinct

|Measure|Value / definition|
|---|---|
|Built JS artifact|`dist/assets/index-435f0cbe.js`, 671,306 B on disk, also identical production decoded body|
|Built CSS artifact|10,778 B on disk, identical production decoded body|
|Built site total|94,638,848 B across 44 files, including all alternate demos; **not initial transfer**|
|Build gzip estimate|Vite reports JS 187.67 decimal kB and CSS 2.44 kB; Python gzip at its default level gives JS 186,831 B and CSS 2,451 B. Different compressor settings yield different estimates.|
|Observed JS compressed network transfer|192,873 B Lighthouse `resource-summary` / `network-requests`; Brotli (`content-encoding: br`, confirmed in CDP headers) plus accounting overhead. Do not substitute build gzip size.|
|Observed decoded JS resource|671,306 B `network-requests.resourceSize`; not JS executed|
|Unused JS estimate|70,914 B mobile / 71,009 B desktop estimated transfer savings (~36.8% of LH estimated script transfer). Coverage is initial navigation only; interaction code may legitimately be unused then.|
|JS evaluation time|Entry bundle median 2,517.112 ms mobile / 574.219 ms desktop in Lighthouse bootup-time; profile-dependent CPU audit data, not transferred bytes|
|JS parse/compile time|Entry bundle median 3.732 ms / 1.045 ms; not total script CPU and not executed byte count|
|Executed JS bytes|Not measured; no statement that 671 kB is all executed|
|Unused CSS|Lighthouse reported 0 B actionable savings. This thresholded audit does not prove every rule is used.|

Raw [Lighthouse summary](raw/lighthouse-summary.json), [build inventory](raw/build-artifacts.json), downloaded production assets and [CDP/ResourceTiming captures](raw/browser-desktop.json) preserve separate quantities. ResourceTiming may zero restricted cross-origin sizes; Lighthouse/CDP is the scorecard transfer source. No source map/module treemap was available, so exact per-library bundle shares are **not measured**. Three.js is visibly included/used, but its precise fraction is not invented.

## Evidence-based opportunities

|ID / priority|Evidence and likely cause|Files/resources|Proposed remediation|Expected benefit|Effort / regression risk|
|---|---|---|---|---|---|
|P1 / high|16.50 MB mobile images; older first GIF is 10.60 MB; offscreen demo eagerly mounts|Demo/Mobile.tsx, DemoImage.tsx, asset GIFs|Unify data; defer below-fold demo payload; use poster + user-controlled compressed video where motion is useful; responsive static fallback; retain instructions and pause behavior|Large bandwidth/data savings, faster constrained-network rendering; no promised score delta|Medium / medium: demo fidelity, autoplay and accessibility|
|P2 / high|Multiple ~0.3–1.54 MB portraits initially fetched far below fold|TeamCard.tsx, currDocketeerTeam.js, assets/XVIII–XX|Resize to display needs; WebP/AVIF with suitable fallback; native lazy loading; dimensions/aspect ratio|Reduce transfer and contention; low functional risk|Small–medium / low|
|P3 / high|CLS 1.485 desktop, 0.250 mobile; LH identifies body/hero and unsized image/font contributors|Home.tsx/Home.module.scss, global.module.scss|Reserve hero dimensions before reveal; stable section geometry; valid width/height; background independent of canvas; inspect font fallback metrics|Eliminate disruptive movement and improve reliability of interactions|Medium / medium: responsive spacing and animation|
|P4 / high|One 671,306 B decoded JS entry; stars.js creates 667 sphere geometries/materials and perpetual RAF; ~69 KiB LH unused JS estimate|stars.js, index.html, package.json|Measure effect on CPU; preserve brand using simpler static/CSS/2D background or batched points; pause offscreen/hidden/reduced motion; remove unused packages|Less JS/CPU/GPU work and battery demand; budget improvement to verify|Medium / medium: visual identity, WebGL fallback|
|P5 / medium|Google Fonts CSS @imports create request chain; app CSS and two remote CSS responses render-blocking; LH mobile estimated saving varies (run 2 reports 1,050 ms)|global.module.scss|Choose needed weights/glyphs; self-host if appropriate; use direct stylesheet links/preconnect or limited critical preload; retain font swap/fallback behavior|Earlier text, lower connection/font cost|Small–medium / low–medium: typography/licensing/CLS|
|P6 / medium|Both Home and Demo start hidden until IntersectionObserver; content rendered only after JS|Home.tsx, Demo.tsx, index.tsx|Visible content by default; progressively enhance animation. Consider static/prerendered marketing shell only if JS-dependent discovery remains a measured problem|Resilience without JS/observer/WebGL; earlier content discovery|Medium / medium; prerender requires removing direct window access|
|P7 / medium|Hashed JS/CSS response cache-control `public, max-age=0, must-revalidate`; CDN HIT visible|Production response headers, Vercel configuration|With deployment access verify long-lived immutable policy for hashed assets; retain HTML revalidation|Fewer repeat-visit validation requests|Small / medium if cache invalidation misconfigured|
|P8 / lower|6.31 MB tracked Vite cache, 148.91 MB source assets; 42 filename-unreferenced asset candidates totaling 54.95 MB|.vite/deps, assets/oldDemos and other files|Remove generated cache from tracking in a later change; validate reachability before deleting unused assets|Repository/install/deploy maintainability; source deletion alone does not prove network savings|Small / low–medium: content provenance|

Do not optimize CSS size first: it is small and no actionable unused CSS was reported. Do not raise Vite chunk thresholds, delay essential content, remove functionality, suppress errors or block assets only during Lighthouse. Avoid adding a service worker, elaborate preload system, router or state framework to solve this one-page site's existing problems.

The LH image-delivery opportunities are estimates, not guaranteed savings; run 1 estimates ~15,959 KiB mobile and ~7,740 KiB desktop. Validate actual transfers and visual quality after each change. Lab TBT is already within the provisional target; it is not INP and does not characterize long-running star-animation battery cost. Field Core Web Vitals require separate real-user instrumentation/data.
