# Phase D — measured local performance comparison

The approved change preserves Docketeer's space identity with a lightweight Canvas star field, optimizes images/fonts, and makes demonstrations explicitly user-controlled. This report compares **local builds**, not deployed production or real-user field data. The original production baseline and its After columns remain unchanged.

## Provenance and reproducibility

Before: `47326ca61dd588b3735dedb115488c5d66ce6099`, exported with `git archive` into an isolated directory and built with the existing dependency installation; its preserved dist was served at http://127.0.0.1:4174/. See before-provenance.json and before-build.log. After: **uncommitted working tree based on that commit**, served at http://127.0.0.1:4173/. after-provenance.json records SHA-256 hashes of source, public assets, dist and package/config files; HEAD does not contain the after implementation. No commit, push or deployment was performed by this validation task.

Both builds use Vite preview with the same compression behavior. Node 24.22.1, Chrome 157.0.8103.79 and Lighthouse 13.4.1 are held constant. Existing tool paths are embedded in the scripts; no benchmark packages were installed. Six serial cold navigations per accepted dataset: three mobile, then three desktop. No concurrent compilation, conversion, builds or other browser jobs during accepted runs. Every value below is the median of that metric independently, not a selected best run.

Mobile Lighthouse: 412×823 CSS px, DPR 1.75, simulated RTT 150 ms, throughput 1638.4 Kbit/s, CPU multiplier 4. Desktop: 1350×940, DPR 1, RTT 40 ms, throughput 10240 Kbit/s, CPU multiplier 1. Embedded report config and UTC fetch timestamps are authoritative. Run dates: 2026-11-17. These are laboratory measurements; LCP/CLS are not field Core Web Vitals.

## Lighthouse medians

|Metric|Before mobile|After mobile|Before desktop|After desktop|
|---|---:|---:|---:|---:|
|performance|76.0|99.0|90.0|100|
|accessibility|100|100|100|100|
|best-practices|96.0|100|96.0|100|
|seo|83.0|83.0|83.0|83.0|
|first-contentful-paint (ms)|3639.1358|1505.0722|731.5766|369.9618|
|largest-contentful-paint (ms)|4142.5207|1848.0722|946.3179|522.9618|
|cumulative-layout-shift (unitless)|0|0.00086|0.181763|0.00038|
|total-blocking-time (ms)|130.0279|60|30.1032|0|
|speed-index (ms)|4534.558007|1505.0722|731.5766|369.9618|

Accessibility and Best Practices scores are automated results, not compliance/security certification. SEO remains 83 because the page lacks a meta description and robots.txt returns the SPA HTML fallback. Those are documented follow-up work, not hidden by this comparison. All accepted Lighthouse runs report zero console audit entries.

### Measurement-driven correction

The first Phase D after run exposed mobile CLS 0.20781 and retained desktop CLS 0.18136. The largest shifted element was the static footer: it appeared above an empty React root, then moved after React mounted. Lighthouse also heuristically attributed the shift to the hero despite explicit image dimensions; that attribution was not accepted as a proven root cause. Reserving one viewport for `#root` (`min-block-size: 100svh`) prevents the footer flash without hiding it or hardcoding the eventual content height. A targeted actual-CDP network/CPU-throttled check then observed shift sums 0.000860 and 0.000372; the complete six-run Lighthouse sequence was repeated and is reported above. Small remaining font-related shifts are recorded honestly.

The complete initial after sequence is preserved in superseded-footer-cls.tar.gz. The first before attempt overlapped an unexpected Swift compiler process and was entirely repeated; excluded-concurrent-cpu.tar.gz preserves it. superseded-all-mp4-validation.tar.gz preserves intermediate checks before visual review rejected lossy legacy video conversion. No excluded scores are used in the accepted comparison.

## Initial network transfer

Independent Playwright captures use fresh contexts, disabled cache, unthrottled 1440×900 desktop / 390×844 touch mobile, DPR 1. Initial totals are recorded after network idle plus 2.5 seconds **before scrolling or full-page screenshots**. These differ from Lighthouse's viewport, DPR, loading window and resource accounting, so their totals are not interchangeable.

CDP encodedDataLength includes transfer overhead. Bytes below are observed local transfers, not artifact gzip estimates. Data URLs can produce zero-transfer request events; HTTP-only counts are separately identified.

|Metric (bytes unless noted)|Before mobile|After mobile|Before desktop|After desktop|
|---|---:|---:|---:|---:|
|Total transfer|16829115|169457|8325462|169457|
|CDP completed request events|37|19|35|23|
|Script transfer|210859|97686|210859|97686|
|Stylesheet transfer|5319|2532|5319|2532|
|Image transfer|16485809|41480|8051984|41480|
|Font transfer|124013|24644|54185|24644|
|Media transfer|0|0|0|0|
|JS encoded body|210335|97247|210335|97247|
|JS decoded body|788980|283976|788980|283976|
|HTTP completed requests|28|8|26|8|

No GIF or MP4 is requested initially. GIF image requests are not classified as Media by CDP, so this was additionally verified from request URLs and Play interaction tests. Five modern recordings use MP4 with native controls, preload none and posters; eight legacy recordings retain their original GIF bytes behind explicit Play/Stop. Their initial download is deferred, **not claimed reduced**. Stop restores the static poster; selection changes reset the UI. No exact frame-zero restart or resume guarantee is made. The desktop configuration image remains static. See media/README.md for the fidelity decision and original/media byte counts.

Image optimization plus native lazy loading means below-fold portraits are not part of initial transfer. All 13 portraits were scrolled into view and decoded successfully at both widths (26 loads), with loaded screenshots saved separately. The historical raw network field `page.brokenImages` means `!complete || !naturalWidth` and includes intentionally unloaded lazy images; **it is not a confirmed broken-image count**. Zero image failures were confirmed after explicit loading. Cross-origin before-font Resource Timing body sizes report 0 where timing access is unavailable; that does not mean zero bytes. Local fonts have observable encoded/decoded bodies. Small inlined assets are counted inside JavaScript bytes and must not be added again as independent wire transfer.

## Build, interaction and accessibility checks

Final production build, Oxlint, test TypeScript check and all 10 Vitest tests pass; raw logs and checks.json preserve commands/durations. The former >500 kB chunk warning is absent. Final artifacts are 283.97 kB JavaScript / 98.07 kB reported gzip and 7.22 kB CSS / 2.17 kB gzip (before 788.98 / 212.09 kB JS and 6.55 / 1.96 kB CSS). Exact final artifact sizes are in build.txt; build gzip is distinct from compressed network transfer, and decoded JS bytes are distinct from execution/parse durations.

Browser checks cover keyboard navigation/hash focus, mobile disclosure and focus across breakpoints, all 16 desktop/mobile demo mappings, poster retrieval, MP4 decoding/play/pause and keyboard GIF Play/Stop with deferred requests and selection reset. Native MP4 playback APIs verify decodability; native controls presence is checked, but assistive-technology/native-control usability is not claimed manually verified.

Canvas starts static, plays on explicit request, pauses, stops for live reduced-motion changes and handles resize. A missing Canvas 2D context leaves the CSS background and hides the unavailable control. Visibility behavior is tested with a mocked document.hidden plus visibilitychange; that is a handler-level browser check, not a real background-tab/device test.

Axe 4.14.0 records zero automated violations at 320×800, 390×844, 640×450, 1280×900 and 1440×900. Normal and text-spacing document widths fit. Real Tab/Enter activates Skip to content and focuses H1. Incomplete checks remain for contrast (7 narrow / 9 desktop nodes), arrow label names (2 narrow nodes), and video captions on desktop. Silent demonstrations still need complete text alternatives/transcripts. No WCAG conformance claim is made.

Desktop/mobile screenshots show preserved branding, readable navigation/hero and no obvious clipping; loaded portrait captures confirm crops/images. Full-page initial and axe screenshots may show lazy placeholders. No screen-reader, actual 200%/400% browser zoom, forced colors, Safari/Firefox or physical-device acceptance was performed. Width-based reflow is a proxy. The site remains a client-rendered React SPA; no-JavaScript rendering is not implemented. The bounded CDP slow-connection check verifies loading/layout under one emulation profile, not unreliable real networks, offline recovery or field performance.

## Animation runtime observation

See animation-runtime.json: three five-second samples per paused/playing state, same 1440×900 viewport, DPR 1, no throttling. CDP TaskDuration/ScriptDuration deltas and RAF counts measure whole-page main-thread work. They do not establish GPU time, OS process CPU%, energy use or battery lifetime. The before page's GIFs and different assets mean this is not a perfectly isolated star-renderer microbenchmark. Runtime results are intentionally separate from navigation Lighthouse scores.

## Integrity and reproduction

All 91 original baseline checksums remain unchanged. Names/profile URLs/order of 13 featured and 75 historical contributors match the base commit. The unrelated `package-lock 2.json` remains untouched. Original media source assets are retained. No Three.js runtime import remains; removal is validated by source/dependency inspection.

Run from repository root with the supported Node runtime and existing tools:

```sh
python3 docs/modernization/phase-d/run-checks.py
# Serve immutable before on 4174 and final build on 4173, then serially:
AUDIT_OUTPUT=docs/modernization/phase-d/new-dataset AUDIT_URL=http://127.0.0.1:4173/ node docs/modernization/phase-d/capture-network.mjs
AUDIT_OUTPUT=docs/modernization/phase-d/new-dataset AUDIT_URL=http://127.0.0.1:4173/ python3 docs/modernization/phase-d/run-lighthouse.py
AUDIT_OUTPUT=docs/modernization/phase-d/new-dataset python3 docs/modernization/phase-d/summarize-lighthouse.py
node docs/modernization/phase-d/animation-runtime.mjs
```

The inherited Lighthouse subdirectory is named lighthouse/before in both datasets; its enclosing before/after directory determines identity. Capture scripts reject overwrite; use a new output directory. Browser verification scripts overwrite their own phase-local results, so preserve reviewed snapshots first. Raw axe JSON is losslessly compressed (`gzip -dc axe-320.json.gz`). Superseded tar archives are lossless and retain every original report/screenshot.

Artifacts include accepted JSON/HTML Lighthouse reports and per-run tables; network resource logs/summaries; before/after and loaded screenshots; build/lint/test logs; browser/media/motion/reflow/axe summaries; provenance manifests; integrity/dependency checks; asset conversion evidence; and reproducible scripts. See implementation.md, image-font-optimization.md, media/README.md and star-allocation.md for decisions and limits. None of these local results replaces deployment verification or real-user monitoring after authorized release.

### Runtime medians per five-second sample

|State / metric|Before|After|
|---|---:|---:|
|paused / rafCallbacks|0.000000|0.000000|
|paused / taskDurationSeconds|0.000832|0.000877|
|paused / scriptDurationSeconds|0.000000|0.000000|
|playing / rafCallbacks|300.000000|300.000000|
|playing / taskDurationSeconds|0.346944|0.198806|
|playing / scriptDurationSeconds|0.220154|0.042136|

## Final dependency and integrity diagnostics

`npm ls --all --json` exits 0. `npm audit --omit=dev --json` reports **0 production vulnerabilities**. Full `npm audit --json` exits 1 with **7 high-severity affected package nodes**, all tracing to one picomatch ReDoS advisory, [GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf), affecting versions ≤4.0.7 in the development tooling dependency tree. Affected nodes are picomatch, fdir, tinyglobby, @parcel/watcher, Vite, Vitest and @vitejs/plugin-react. This is one underlying advisory, not seven independent flaws; production omission does not make the development exposure irrelevant. No automatic remediation or upgrade was applied. Review compatible patched tooling/transitive versions as a follow-up and reassess actual untrusted-pattern exposure. Raw audit JSON preserves the exact registry result/date context.

`git diff --check` exits 0. final-integrity-checks.json verifies all 91 original baseline hashes and every final source/config/asset/dist hash in after-provenance.json. Package/source inspection confirms Three.js and its type dependency are removed; only React/react-dom remain direct production dependencies.

The lockfile resolves picomatch 4.0.7. npm's audit suggestions are **not a vetted upgrade plan**: it proposes semver-major fallback versions Vite 6.2.7, Vitest 3.1.4 and @vitejs/plugin-react 5.2.0, while @parcel/watcher has fixAvailable true without a named version. No safe newer patch candidate is identified by this audit output. Do not execute force-fix or downgrade the selected stack from these suggestions. The next dependency review should establish a compatible patched resolution and test it. Current consumers' declared picomatch ranges are recorded below; this review did not exercise adversarial glob input or establish reachability from public website requests.

|Lockfile consumer|Declared picomatch range|
|---|---|
|node_modules/@parcel/watcher|^4.0.4|
|node_modules/tinyglobby|^4.0.4|
|node_modules/vite|^4.0.7|
|node_modules/vitest|^4.0.7|
