# Matched-frame quality review

Follow-up review investigated fine vertical patterns in two legacy H.264 outputs. These patterns must not be described as identical to the GIF source texture.

| Recording | GIF frame (zero-based) | Source frame start | Actual decoded MP4 time |
|---|---:|---:|---:|
| imageTab3-new | 679 | 13.58 s | 13.58 s |
| configuration | 681 | 13.62 s | 13.62 s |

The original frames contain dense colored checker/dither patterns. The encoded frames retain aligned text, content and layout, but transform some fine texture into vertical/banded patterns. This is visible in the saved full-resolution source/encoded pairs and remains visible to a lesser degree at representative display sizes. It is therefore a lossy conversion difference, not proof that all output patterns already existed unchanged in the original. Exact underlying codec filtering behavior has not been established.

For the Configuration flat-background crop at x=800, y=500, width=200, height=100, average source RGB was approximately (17,17,16), compared with encoded (21,17,20). This helps quantify the hue shift but does not establish perceptual equivalence or negate the visible texture difference.

A bounded experimental conversion explicitly averaged 2×2 chroma into NV12 while preserving full-resolution luma. Its single-frame diagnostic did not improve the visible texture enough to justify adding bespoke conversion code. The prototype is not part of the production converter and did not replace any delivered media. It is not directly equivalent to a full temporal encode; the contact sheet labels it as a single-frame trial.

Artifacts:
- `imageTab3-midpoint-source.png` and `imageTab3-midpoint-encoded.png`
- `configuration-midpoint-source.png` and `configuration-midpoint-encoded.png`
- `imageTab3-800-comparison.jpg`
- `configuration-800-comparison.jpg` (source, current output, NV12 diagnostic)
- `configuration-400-comparison.jpg` (source and current output)

Reproduce matched pairs with `scripts/media/compare-frames.swift`, providing source GIF, MP4, output prefix and midpoint seconds. The helper accumulates original GIF delays, selects the containing frame, and requests the MP4 at that exact frame boundary, printing the actual decoded timestamp.

A fidelity-preserving fallback is an opt-in original GIF or lossless animated WebP, with explicit Play/Stop behavior. That preserves source texture but trades native video timeline controls for a simpler animation toggle and may increase bytes transferred after playback is requested. This review does not itself authorize or implement that fallback.

## Final resolution

The visible legacy texture changes were rejected. All eight legacy variants now use their **unchanged original GIF files**, loaded only after Play and replaced by the poster on Stop. Five modern v20 MP4s remain. A lossless animated-WebP Configuration trial preserved frame count/timing but grew from 6,135,810 to 34,221,756 bytes, so it was rejected in favor of the smaller original GIF. The eight superseded MP4s and trial WebP were removed from generated delivery assets. Paired images above remain diagnostic evidence of rejected candidates, not final media fidelity.
