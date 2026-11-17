# Audit evidence and reproduction guide

Start with [00-baseline.md](00-baseline.md), then [01-roadmap.md](01-roadmap.md). Measurements are dated 2026-11-17 and tied to `22d612c66d2ad3d7107b7ed1dff5cb52a4e1865a`. No modernization implementation has begun.

## Inventory

|Location|Contents|
|---|---|
|00-baseline.md|Repository/deployment provenance, methodology, quantitative scorecard, scope/limitations|
|01-roadmap.md|Priorities, incremental phases, dependencies, risk, verification and commit boundaries|
|diagnostics/console-errors.md|Console/HTTP failures, interaction reproduction and distinction from harness cancellations|
|diagnostics/dependency-audit.md|Versions, outdated counts, advisories, dependency strategy and compatibility matrix|
|diagnostics/bundle-analysis.md|Network/build/decoded/CPU distinctions and prioritized performance opportunities|
|diagnostics/accessibility-audit.md|Automated counts, manual checks, responsive and visual findings, untested areas|
|diagnostics/build-results.md|Install/build/typecheck/lint/tests and CI assessment|
|diagnostics/architecture-audit.md|Rendering/routing/data/style/component design and targeted cleanup|
|diagnostics/security-observability.md|Passive security evidence, reachability qualifications, monitoring status and Vercel follow-up|
|lighthouse/before/mobile and desktop|Three JSON + three HTML reports per profile; stderr artifacts preserve command output|
|lighthouse/before/runs.md|Individual run scores/timings/timestamps|
|screenshots/before|14 unaltered PNGs; homepage, sections, mobile navigation, narrow reflow, landscape|
|diagnostics/raw|GitHub/public HTTP metadata, production core assets, browser/axe/network data, install/build/test/audit logs, summaries and inventories|
|scripts|Six diagnostic/reproduction scripts; no production feature code or installed test framework|
|evidence-sha256.txt|Checksums of delivered evidence/docs/scripts, excluding the checksum file itself|

No node_modules or dist binaries are included in documentation. Original source assets stay in the repository; only small public production HTML/JS/CSS copies are retained as provenance evidence. Large repetitive npm explain output is gzip-compressed; `gzip -dc diagnostics/raw/vulnerability-paths.txt.gz` reads it. Empty successful stdout/stderr files are paired with execution exit-code records; absence of output is not treated as a skipped check.

## Environment and existing tool locations

- macOS 26.7.1 x86_64, Intel i7-1068NG7, 32 GiB RAM.
- Production build/Lighthouse Node: `/Users/andywhite/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node`, v24.22.1. npm 11.20.0 (resolved via PATH). Initial browser/lock audit used system Node 26.12.1.
- Chrome: `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`, 157.0.8103.79.
- Lighthouse: `/Users/andywhite/.npm/_npx/5390d7d89c0de19d/node_modules/lighthouse/cli/index.js`, 13.4.1.
- Playwright: `/Users/andywhite/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright`, 1.62.1.
- axe-core: `/Users/andywhite/.npm/_npx/5390d7d89c0de19d/node_modules/axe-core/axe.min.js`, 4.14.0.
- Python 3.15.0; standard library only for Python capture/analysis scripts.

These tools were already installed. No Lighthouse, browser, analyzer or testing package was added to package.json. `modern-web-guidance` was consulted from its existing npm cache (`performance` guide, skill version 2026_11_09-5bcc021b); it informed audit questions only. No guide-driven website code changes were made.

## Repeat without overwriting this baseline

Use a **fresh isolated clone** of the intended commit for install/build measurements. Record the URL, SHA, date, tool/browser versions, hardware and whether the tested URL is production or localhost. Do not reuse a warm node_modules/build directory for claims of clean installation timing. Copy the diagnostic scripts into that clone or invoke them by absolute path with the clone as working directory. Do not reset or clean the original 2024 checkout.

Set paths for already available equivalent tools on the reproduction host. Scripts default to the original host paths and accept overrides. Do not download tools silently or upgrade the website to get a measurement.

```sh
# Run from the isolated repository root. Choose a new output directory.
export AUDIT_OUTPUT=/tmp/docketeer-audit-repeat-2026-11-17
export AUDIT_NODE_BIN=/path/to/node24/bin
export AUDIT_NODE="$AUDIT_NODE_BIN/node"
export CHROME_PATH='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
export LIGHTHOUSE_CLI=/path/to/lighthouse/cli/index.js
export PLAYWRIGHT_PATH=/path/to/node_modules/playwright
export AXE_PATH=/path/to/node_modules/axe-core/axe.min.js

python3 docs/modernization/scripts/run-lighthouse.py
python3 docs/modernization/scripts/summarize-lighthouse.py
node docs/modernization/scripts/capture-browser.mjs
node docs/modernization/scripts/check-interactions.mjs
python3 docs/modernization/scripts/inventory.py
python3 docs/modernization/scripts/check-build.py
```

Run sequentially, especially Lighthouse versus builds/browsers. Lighthouse script runs 3 mobile then 3 desktop navigations to **https://docketeer.io/** with `--only-categories=performance,accessibility,best-practices,seo`, JSON/HTML output, `--chrome-flags=--headless=new`, and `--preset=desktop` only for desktop. It uses default simulated throttling. See `raw/lighthouse-execution.json` for exact original commands; embedded report config is authoritative. The script preserves its historic `lighthouse/before` subfolder naming under the new output root; explicitly label any future dataset rather than mistaking it for this delivered baseline.

Browser scripts use fresh contexts; initial collection waits for networkidle + 2.5 seconds; screenshots and axe then capture initial state; section scrolls wait 1.1 seconds; demo checks record actions; reduced-motion and 320 px probes follow. Initial desktop script switched demos quickly and cancelled four in-flight GIFs; supplemental script waits for decoded images and confirmed all eight load. Do not compare full-session cumulative network requests against initial transfer. Browser captures are unthrottled and have different viewports from Lighthouse.

Capture scripts refuse to overwrite existing browser/Lighthouse/build execution records; choose a new AUDIT_OUTPUT each time. Summary/inventory scripts derive files and can be rerun in the new output directory. For post-modernization comparison keep before/after versions/tools identical where possible; if Chrome/Lighthouse changes, remeasure the old commit too and disclose the limitation. Timings depend on machine/network; exact score equality is not expected.

### Dependency/build commands

The build harness records command, exit, elapsed wall time and logs. It executes `npm ci --no-audit --no-fund`, build, lint, no-emit typecheck, Jest `--runInBand`, outdated including dev, and omit-dev audit with CI=true and Node path override. It stops if the locked install fails; it does not fix source, lockfiles or peers. Confirm manifest/lock hashes before and after.

The initial full security snapshot was collected with:

```sh
npm audit --package-lock-only --ignore-scripts --json
npm outdated --include=dev --json
npm audit --omit=dev --ignore-scripts --json
npm explain @babel/traverse fast-xml-parser form-data shell-quote
```

Run outdated after installation; pre-install output lacks current versions and may omit dev dependencies. npm audit/outdated exit 1 for findings is expected; distinguish that from malformed/error responses. Registry advisory/version data is time-sensitive. Preserve fresh raw JSON and date; do not expect 2026-11-17 advisory counts forever. `npm audit fix`, `npm update`, manifest edits and lockfile regeneration are **not** part of baseline reproduction.

### Source and production correspondence

Original clone creation used a local Git clone with `--no-hardlinks` for speed, then replaced only the new clone's origin URL with the canonical public URL, fetched it and created `feat/website-modernization` from `origin/master`. Current repository source was selected before creating documentation.

Public endpoints used: GitHub repository/search/forks/deployments/deployment-status APIs; https://docketeer.io/ and its linked JS/CSS; `/site.webmanifest`, `/robots.txt`, `/sitemap.xml`; four principal external links. GitHub connector repository lookup succeeded; its search timed out twice, so public unauthenticated REST search was used. No private Vercel URL was accessed. Deployment status metadata was public. Google Fonts loaded normally in browser tests.

Reproduce artifact correspondence by downloading the HTML and its referenced JS/CSS, then comparing SHA-256 to `dist/index.html` and matching assets from a clean lockfile build. Public Last-Modified/cache dates are **not commit timestamps**. Matching artifacts plus public historical deployment supports provenance but does not reveal the current Vercel domain alias assignment.

### Evidence handling

Reports preserve public content, URLs and diagnostic paths; no credentials were requested or saved. Secret inspection recorded match locations only and found none in its limited source scope. Browser snapshots are unaltered; their requested viewport is in the filename/JSON, while layout viewport expansion is separately recorded. The screenshot manifest gives timestamp, pixel dimensions, viewport and tested URL. Images include live animation state and should be compared with that caveat.

No baseline claim derives from optional module treemaps, real-user metrics, production account settings, physical device tests, screen readers or exhaustive historical link crawling; those were not measured. Read each diagnostic's scope before using a statistic in portfolio/resume claims.
