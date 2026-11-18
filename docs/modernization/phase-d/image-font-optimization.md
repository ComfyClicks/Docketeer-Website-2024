# Portraits, branding assets and fonts

## Scope and reproduction

Original source assets are retained. New assets are generated from them with `scripts/media/optimize-static.py` (Python 3, ImageMagick, cwebp; no npm package additions):

```sh
PATH=/opt/local/bin:/usr/local/bin:$PATH python3 scripts/media/optimize-static.py
```

Run from the repository root. The script writes `static-assets.json` with exact input/output byte counts and dimensions. Reproduction can vary slightly across encoder versions; retain generated files for comparisons.

Portraits preserve the existing centered square `object-fit: cover` crop, at 200 and 400 pixels for the 200 CSS-pixel cards. Dylan's source is only 330 pixels wide, so its second candidate is 330 pixels to avoid upscaling. WebP quality is 82; logos use lossless WebP after resizing. Responsive source candidates let the browser choose the appropriate resource. Below-fold portraits use native lazy loading and asynchronous decoding. Hero remains eager and has explicit intrinsic dimensions to reserve its aspect ratio. Navigation and Docker Hub logos also reserve their actual ratios.

Hero remains 350 CSS pixels wide, shrinking with the viewport. Its 517-pixel source caps the largest candidate; inventing higher-resolution detail would not improve fidelity. No speculative high fetch priority is assigned until LCP measurement identifies a need. Lazy loading is not applied to the hero.

## Fonts

Replaced Google Fonts CSS `@import` with two local WOFF2 files: Open Sans normal 400 (body) and Prompt normal 500 (headings and brand). This preserves the existing browser-synthesized bold headings; it does not introduce additional font weights or a new typeface. Latin subsets match the present English content and retain the provider's Unicode ranges. Future text outside those ranges uses system fallbacks unless an appropriate licensed subset is added.

Exact URLs, SHA-256 checksums, download date and sizes are in `src/assets/fonts/sources.json`. Both font families are licensed under SIL Open Font License 1.1; full original licenses are alongside the fonts. The files came from Google's font delivery service and licenses from the official `google/fonts` repository. `font-display: swap` is preserved. No guessed fallback font metrics or speculative preloads are introduced.

## Guidance applied

Modern Web Guidance `optimize-image-priority`: “Never use `loading="lazy"` on the LCP image.” Hero remains eager. The same guide advises against adding low fetch priority to ordinary native-lazy images; portraits use browser defaults.

Modern Web Guidance `performance`: “DON'T use `@import` in CSS” and “DO apply explicit `width` and `height` attributes”. Local font faces remove the external stylesheet discovery chain; image dimensions reserve space before decode.

## Measurement limits

Asset byte counts are file sizes, not network transfer or executed JavaScript. The sum of all responsive candidates is not a page payload: browsers normally select one candidate per image, and lazy images load as they approach the viewport. Use the independent before/after browser network traces and Lighthouse medians for actual load behavior. Font appearance, responsive crop fidelity, layout shift and missing assets require browser validation in addition to build checks.

## Generated asset results (2026-11-17)

Encoder versions: cwebp 1.6.0 (libsharpyuv 0.4.2); ImageMagick 7.1.2-34 Q16-HDRI x86_64.

| Resource group | Original file bytes | Generated candidates, bytes |
| --- | ---: | ---: |
| 13 portraits | 5,638,690 | 97,812 total at 200px; 274,890 total at larger candidate |
| Hero | 130,492 | 36,110 at 350px; 63,230 at 517px |
| Navigation logo | 104,516 | 1,184 / 2,290 / 3,414 at 45 / 90 / 135px |
| Docker Hub icon | 4,494 | 186 / 360 / 530 at 14 / 28 / 42px |
| Self-hosted fonts | External baseline measured separately | 24,004 combined WOFF2 bytes |

Contact-sheet inspection confirmed all 13 generated portraits retain centered crops and recognizable detail. Originals remain available for future crops or larger presentation. Lint passed after edits. Initial concurrent typecheck was blocked only by another agent's incomplete DemoMedia edits (missing exported type and video loading attribute); final combined validation supersedes this intermediate result.
