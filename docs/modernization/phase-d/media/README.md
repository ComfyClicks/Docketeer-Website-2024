# Final demo media delivery

Eight demo selections retain all 16 desktop/mobile mappings. The final implementation deliberately uses a mixture:

- **Five modern v20 recordings:** H.264 MP4, native controls, static WebP poster, `preload="none"`, progressive lazy loading, no autoplay.
- **Eight legacy recordings:** unchanged original GIF files, assigned to an image's `src` only after an explicit **Play demonstration** action. **Stop demonstration** restores the static poster. Selecting another recording resets the control state. No pause/resume or timeline seeking is offered; exact restart-frame behavior is not asserted.
- **One static desktop Configurations screenshot:** WebP image.

All 14 unique sources remain unchanged. Legacy GIFs were retained because H.264 changed their dense source dithering into visible bands. A lossless animated-WebP trial was also rejected: Configuration grew from **6,135,810** to **34,221,756 bytes**. The final GIF fallback preserves exact source media and avoids that playback-transfer regression. It improves initial loading through explicit user initiation; it does **not** compress those eight GIFs.

## Reproduction

On macOS with the already-installed Swift compiler, ImageMagick and cwebp:

```sh
python3 scripts/media/convert-demos.py
python3 scripts/media/verify-demos.py
```

`--legacy-only` on the conversion script refreshes the legacy poster/metadata entries while preserving previously generated modern-video entries. No package is installed. Conversion environment: macOS 26.7.1 (25G241), Apple Swift 6.3.3, x86_64; ImageMagick/cwebp versions are in `conversion.json`.

The five videos use ImageIO full-canvas GIF decoding with every frame and its centisecond delay, AVFoundation H.264 at requested 800 kbps, explicit Rec.709 color properties, and network-optimized MP4 layout. Odd dimensions are padded by at most one pixel. There is no resizing, crop, interpolation or audio. Zero delays, if encountered, normalize to one centisecond; this is an explicit policy, not a claim about every browser's zero-delay behavior. Posters use the actual first frame at WebP quality 90. Native encoder versions can produce different output hashes.

`conversion.json` is the authoritative **final** inventory. It records source hashes, dimensions, source bytes, final media bytes and poster bytes. Original GIF entries point to their original paths. The old all-video `conversion-log.txt` is **superseded experimental evidence**, including eight rejected MP4s; it does not describe final delivery. `rejected-legacy-videos.json` preserves their metadata, and `rejected-webp-trial.json` records the rejected WebP size experiment. The generated rejected media files were removed.

## Validation and quality decisions

Final video validation passed for **five videos / 15 decoded samples** (start, midpoint, end), matching actual container duration and decoded dimensions to source-derived metadata. `decode-validation.json` and `decoded-middle-frames.jpg` now describe those five retained videos. Four source GIF samples were also compared between ImageIO and ImageMagick coalescing, with zero differing pixels; this establishes sampled decoder compositing agreement, not lossless H.264 encoding.

Initial ARGB packing and implicit color-matrix defects were caught with a synthetic red/blue/green calibration and corrected before final delivery. The final encoder uses explicit BGRA layout, sRGB drawing space and Rec.709 video color properties. `calibration-source.png`, `calibration-superseded.png` and `calibration-corrected.png` preserve the investigation. Final decoded primary-color centers were (255,0,0), (0,0,251), and (0,128,1), against source (255,0,0), (0,0,255), and (0,128,0).

Further matched-frame review showed unacceptable changes to fine legacy dithering despite corrected packing. See `matched-frame-review.md` and its full-resolution/400px/800px comparisons. The eight affected legacy videos were rejected in favor of the unchanged GIFs. A bounded NV12 experiment did not justify adding custom conversion code; no NV12 helper is part of the repository's converter. Historical comparison images show rejected candidates, not the final animation source.

To inspect retained video metadata and a decoded frame:

```sh
swift scripts/media/check-video.swift src/assets/demos/optimized/ContainersFilters_v20.mp4 7 /tmp/demo-frame.png
```

`compare-frames.swift` selects a GIF frame by accumulated delay and decodes a candidate MP4 at that exact frame boundary. `decode-gif-frame.swift` extracts a source frame and source timing metadata. These helpers make the quality investigation reproducible.

## File sizes and loading behavior

| Library contents | Bytes |
|---|---:|
| All 14 original assets | 88,044,528 |
| Five retained MP4s | 6,271,954 |
| Eight unchanged, opt-in GIFs | 70,649,718 |
| Fourteen WebP posters/static images | 3,169,212 |
| Final complete delivered media library | 80,090,884 |

These are **file sizes for the entire media library**, not initial page transfer, compression-over-HTTP, or executed JavaScript. Only the selected demo is mounted. Video preload/lazy-loading attributes are browser hints; actual network behavior is verified separately. Legacy GIFs can still be large after the user requests playback. No generated `.sb-*` staging files, intermediate frame PNGs, rejected MP4s, or trial animated WebPs remain in the optimized asset directory.

## Accessibility and limits

Nothing animates automatically, including under reduced motion. Legacy Play/Stop uses a stable native button with a 44px minimum target and visible labels; the button remains mounted when its label changes. Native video controls provide playback/pause for the five retained videos. Every media region has a named figure and explicit dimensions.

Existing adjacent descriptions are feature summaries, **not complete verified action transcripts**. These silent recordings have no audio to caption; complete descriptive text alternatives remain follow-up work. No WCAG conformance claim is made from this change. Small text baked into source recordings remains limited by the original capture quality. Browser-specific playback, focus, request deferral and selection-reset behavior are covered by the separate browser audit.
