# Phase D implementation decisions

Scope: payload, media loading, layout stability and decorative motion. Changes remain local and uncommitted pending review. The original production baseline is preserved; use [the local comparison](README.md) for measured outcomes.

## Space background

The owner selected “Keep the space effect; use lightweight Canvas.” The replacement preserves a dark perspective star field with 240 points drawn through Canvas 2D. Three.js and its type package are removed. No replacement runtime dependency is introduced.

The background is static on first load. The existing native Play/Pause button opts into movement; reduced-motion preference changes immediately stop it. Pausing cancels the animation frame callback. Hidden documents stop scheduling frames; returning to a visible document resumes only a previously requested animation. Resize redraws the static scene without starting an animation. Page lifecycle and Vite hot replacement clean up scheduled work. If Canvas 2D is unavailable, the CSS dark background remains and the unavailable motion control is hidden.

The backing-store pixel ratio is capped at 2. Motion uses elapsed time, with a capped delta after interruptions, rather than assuming a 60 Hz display. The decorative canvas is excluded from the accessibility tree and does not intercept pointer events. Changing Play/Pause labels deliberately avoids redundant `aria-pressed` state.

[Static allocation analysis](star-allocation.md) documents the former geometry cost. That calculation does not establish GPU time, battery use or rendered triangle counts. Navigation Lighthouse measurements also cannot establish the cost of user-enabled continuous animation; any separate runtime samples and their limitations belong in the comparison report.

## Media and typography

- Images reserve their intrinsic geometry. Responsive portraits and logos retain original source assets and recognizable branding. Below-fold portraits lazy-load; the hero remains eager.
- The React root reserves one small viewport of minimum block size before mounting. An intermediate benchmark exposed the static footer painting above an empty root and then moving down as content arrived. This reservation keeps the footer after the page shell without hiding content; the populated page is already taller than a viewport. Intermediate reports remain available as superseded evidence.
- Five newer demonstration recordings use native controlled videos with posters, intrinsic dimensions and `preload="none"`. Eight older recordings retain their original GIFs, fetched only after Play; Stop restores the poster and selection changes reset playback. This deliberately avoids the visible banding found in trial video conversions of their dense color dithering. A lossless animated WebP trial was also rejected because it increased playback bytes substantially. Deferring the original GIFs improves initial loading without claiming their file sizes were reduced. These controls offer no timeline seeking or pause/resume semantics. The existing static desktop configuration screenshot stays static. Every desktop/mobile demo mapping is retained. See the media conversion evidence for codec, timing, quality and reproducibility details.
- Two locally hosted, licensed font subsets replace the remote CSS import chain. Existing font families and weights are retained; additional weights, speculative preloads and guessed fallback metrics are avoided.

See [image/font evidence](image-font-optimization.md) for exact file sizes, sources and regeneration commands. Build artifact sizes and network transfer are distinct measurements.

## Scope limits

Playback controls and labels do not provide a complete text equivalent for visual demonstrations. Detailed transcripts remain follow-up work. Automated accessibility results are not a WCAG conformance claim. Production metrics, field Core Web Vitals and Vercel configuration remain outside this local comparison. SEO metadata/crawler configuration and durable CI safeguards are separate follow-up work.

No application repository, deployment, analytics integration or original baseline evidence is changed. Historical source media is retained rather than deleted as part of a performance claim.
