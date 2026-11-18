# Phase F — Targeted visual and responsive refinement

Local implementation and validation, 2026-11-17. Base: `7544599c82efcc4cf69d3573c83d77596327b074`, branch `feat/website-modernization`. These are local production-build comparisons, not a deployment or real-user measurement. Changes remain uncommitted for review.

## Changes and rationale

- **Tablet demo readability:** the previous equal-width columns reduced the recording to 356px at a 768px viewport and 484px at 1024px. Stack controls above the media through 1100px; use a media-dominant grid on wider displays. Preserve the existing 700px recording-selection breakpoint and explicit playback behavior.
- **Mobile demo navigation:** visible Previous/Next labels and a live 1–8 position indicator clarify navigation and wraparound. Preserve all eight demonstrations.
- **Text enlargement defects:** 200% root-font enlargement exposed an off-screen Menu at 320px, partial clipping at 390px, and a long heading extending beyond the content area. Allow navigation wrapping and emergency heading wrapping. A small ResizeObserver synchronizes actual navigation height with anchor offsets, menu available height and hero clearance; it disconnects on unmount and retains a 90px CSS fallback. This fixes focus obscured by the wrapped fixed header without guessing its height. Border-box sizing also keeps the scrollable menu padding inside short landscape viewports.
- **Presentation choices:** solid dark feature/contributor cards and navigation improve separation from the space background. Balanced headings, bounded heading sizing, and paragraph wrapping improve text presentation. These are targeted design choices, not claims that the old colors violated contrast requirements.
- **Contributor organization:** introduce an Additional contributors heading and allow two columns where space permits. Automated comparison preserves all 13 featured and 75 additional names/profile URLs.

Brand colors, mascot, Canvas space effect, reduced-motion behavior, content and recordings remain. No dependency, deployment or CI workflow changes.

## Matched visual evidence

`before/` is an independently built archive of the base commit served at `http://127.0.0.1:4174/`; see before-provenance.json and before-build.txt. It shares the unchanged installed dependencies. `after/` captures the working production build at `http://127.0.0.1:4173/`.

`capture.mjs` uses installed Playwright Chromium, fresh pages, 900px viewport height, reduced motion, loaded fonts and decoded visible section images. It scrolls each section to its start and records homepage, features, demo, get-started and team screenshots at 390/1024/1440px. Layout measurements also cover 320/768px. Final captures wait two animation frames after scrolling to avoid compositor artifacts. Images are unaltered PNGs. The image-viewing tool gave conflicting impressions of the navigation band. Independent PNG decoding found 977 near-white pixels in the wordmark area in the home, exact-repeat and features captures, alongside visible DOM bounds. This supports a viewer anomaly rather than a confirmed application defect; screenshots are preserved unaltered. See validation/navbar-exact-capture.json and responsive-validation.md.

| Viewport width | Before demo width | After demo width |
|---:|---:|---:|
| 320px | 288px | 288px |
| 390px | 350px | 358px |
| 768px | 356px | 736px |
| 1024px | 484px | 800px |
| 1440px | 660px | 874.67px |

Source: before/layout.json and after/layout.json. Both datasets have document width equal to viewport width at all five measured sizes. Media retains its intrinsic proportions; increased display size does not increase source recording resolution.

Initial framing attempts and superseded after captures are retained locally under ignored `reports/phase-f-intermediate/`; they are not accepted comparison evidence. Original modernization baseline artifacts remain untouched.

## Reproduction and validation

Use the repository Node 24/npm 11 environment and unchanged lockfile:

```sh
npm run check
npm run test:browser
npm run test:performance
```

For responsive evidence, serve the base build on 4174 and current build on 4173, then run `node docs/modernization/phase-f/responsive-check.mjs`. This rewrites the responsive results and validation screenshots; archive existing results first when preserving another milestone. For matched captures use `AUDIT_URL=http://127.0.0.1:4174/ node docs/modernization/phase-f/capture.mjs before` and `node docs/modernization/phase-f/capture.mjs after`. The capture script refuses to overwrite existing datasets; use a disposable copy or archive previous datasets first.

- `npm run check`: passed production build, Oxlint, application/test/config type checks, 10 Vitest tests and nine CI policy tests. See check.txt.
- `npm run test:browser`: all eight tests passed in 38.3s, no retries. Automated axe checks reported zero violations in tested states; see browser-results.txt. Runtime console/page errors and broken-image checks passed.
- Responsive validation: 320/390/700/701/768/1024/1100/1440px, all eight demos at each width, no horizontal overflow or recorded console/page errors. 768px also uses a 450px landscape viewport. Verified mobile counter wraparound, menu/keyboard behavior and exact preservation of contributor names/profile URLs. See responsive-results.json.
- 200% root-font enlargement at 320/390/768/1440px: no overflow, usable menus, focused heading below actual header; landscape menu stays within the viewport. Forced-color emulation at 390/1440px preserves a keyboard-visible solid 3px focus outline. See validation/ screenshots. responsive-regression.json and text-enlarged-320-regression.png preserve the discovered failure before fixes.
- Baseline-integrity.txt verifies all 91 original checksums. source-provenance.json fingerprints the uncommitted source and unchanged manifests.
- No hosted Actions execution or GitHub allowance was consumed.

## Local performance regression check

Six serial cold navigations, three per profile, Lighthouse 13.6.0 / Chromium 159.0.8154.6 / Node 24.22.1. Same installed tools as Phase E; independent metric medians, default simulated throttling, local Vite production preview on 4175. These are lab results, not field data or production claims.

| Profile | Performance | Accessibility | Best Practices | SEO | LCP | CLS | TBT |
|---|---:|---:|---:|---:|---:|---:|---:|
| Mobile | 100 | 100 | 100 | 83 | 1.877s | 0.000860 | 41ms |
| Desktop | 100 | 100 | 100 | 83 | 0.466s | 0.000380 | 0ms |

Initial decoded JavaScript: **284,587 bytes** in both profiles, 658 bytes above Phase E’s 283,929 bytes, below the existing 350,000-byte budget. No initial GIF/MP4 requests. This is decoded resource size, not compressed network transfer or executed bytes. No deterministic performance safeguards failed. Scores remain the same as Phase E; timing differences are not attributed to this visual change.

SEO remains 83, matching Phase E: the existing missing meta description and invalid/missing robots.txt response are still flagged. A local SPA fallback can return HTML for robots.txt; verify the deployed response and address metadata/crawl files before final production validation. No SEO improvement is claimed here.

See performance-validation.json for individual run metrics/configurations and network entries; performance-summary.md for all median metrics. Full JSON/HTML/log reports are retained locally under `reports/performance/2026-11-18T01-11-00.739Z-TNhVMC/` (ignored to avoid large generated commits). The script creates a new timestamped directory on each run.

## Limitations and follow-up

CSS 200% root-font enlargement and narrow viewports are not actual browser zoom. Native zoom verification was unavailable because the browser automation surface could not expose a native browser window (`cgWindowNotFound`). Forced colors is emulation. Physical-device, cross-browser, screen-reader and actual zoom acceptance remain outstanding; automated checks do not establish WCAG compliance. Subjective presentation needs owner review.

A pre-existing contributor data issue remains: Cedar Cooper’s GitHub and LinkedIn values appear swapped by hostname in `src/components/Team/others.ts`. Preserve the data comparison for this phase; verify and correct this separately. Existing media transcript/contrast follow-ups and the time-limited development dependency security exception remain recorded in Phases D/E.

Next roadmap phase is **G: production ownership and observability**, contingent on authorized Vercel access. First establish deployment SHA/build ownership and inventory existing monitoring before adding any integration. Do not deploy or change settings as part of this phase.

## Modern Web Guidance applied

- `responsive-design`: “Use `aspect-ratio` for media elements (like `<img>` and `<video>`) to reserve space during loading and prevent Cumulative Layout Shift (CLS).” Existing intrinsic media reservations are preserved while containers change size; bounded font sizing combines rem and viewport units.
- `improve-text-layout-and-legibility`: “For short text blocks like headings, use `text-wrap: balance`.” Apply balance only to headings and pretty to selected paragraphs; unsupported wrapping properties fall back to ordinary text wrapping without JavaScript.
