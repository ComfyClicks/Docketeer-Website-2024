# Docketeer website — pre-modernization baseline

Audit date: **2026-11-17**, America/New_York (raw evidence uses UTC). Scope: public marketing website only. No application changes, dependency upgrades, commits, pushes, deployments, or GitHub settings changes were made.

## Executive assessment

The website builds reproducibly, and its core production assets can be reproduced exactly from the selected commit. It is a small React/Vite site with recoverable engineering debt, not a codebase that warrants an automatic rewrite. The most consequential problems are inaccessible/broken navigation and demo controls, large eagerly loaded images, severe layout instability, unsupported build tooling, and failing regression checks. Initial JavaScript is significant but **images dominate transfer**, especially on mobile. No uncaught production JavaScript exceptions were observed; a broken manifest causes repeatable first-party console errors.

## Repository and deployment provenance

|Item|Verified value|
|---|---|
|Authoritative website repository for this audit|https://github.com/ComfyClicks/Docketeer-Website-2024|
|Historical remote URL|https://github.com/ZinWR/Docketeer-Website-2024.git — redirects to the repository above|
|Default branch|`master`|
|Audited base|`22d612c66d2ad3d7107b7ed1dff5cb52a4e1865a` (2025-05-02 UTC, “Update CNAME”)|
|Isolated branch|`feat/website-modernization`, created from fetched `origin/master`|
|Audit directory|`/Users/andywhite/Documents/Codex/2026-11-17-docketeer-website-repository-discovery-quantitative-baseline/docketeer-website-modernization`|
|Original checkout|`/Users/andywhite/Codesmith/Docketeer-Website-2024`, clean `master` at `e6a81c2a2fbaac701403bb0a066f1916a46dc5ae`, 0 commits ahead / 16 behind current remote|
|Original remotes/branches|Only `origin`; local `master`, `whatsnew`; remote `master`, `team19`, `team20`|
|Production URL|https://docketeer.io/ — HTTP 200, served by Vercel|
|Working tree|Initially clean; delivery contains only uncommitted `docs/modernization/` additions; install/build outputs ignored|

Evidence supporting this choice:

1. The original checkout's remote redirects to this repository. Fetching changed references only; original files and branch were preserved. The fresh clone used `--no-hardlinks`, then its origin was set to the canonical URL and fetched. The preferred feature branch did not exist in local or remote refs.
2. The website README explicitly names the Vercel `docketeer-website-2024` project and directs later teams to merge into `master`. `CNAME` names `www.docketeer.io`. The official [application repository](https://github.com/open-source-labs/Docketeer) points to `docketeer.io`; the website links to the separate Docketeer-Extension application. Neither application repository was modified.
3. GitHub search including forks and the fork network were inspected. Earlier XII–XVII websites are older ancestors. `nikamamaladze92/Dogketeer-V20-Website-2025` is a later-team fork whose changes are merged into this repository (PR #3, `a886c47`); its head `7421af5` precedes the selected base. Recent timestamp alone was not the selection criterion.
4. Public GitHub deployment `2464225013` records the selected SHA, environment `Production`, and a successful Vercel deployment on 2025-05-02. This does not by itself prove the current custom-domain alias assignment.
5. A fresh locked build reproduced **byte-identical HTML, JS and CSS** fetched from `docketeer.io` during this audit. SHA-256: HTML `249facc93f1bb83cc6ae82f6787178b931cf6bc7356be88b195358f949bcc611`; JS `a635a79b7c1ef41b7b26f307428f8d1d4d77f48d7bdf54936a9e5ed58b3bfbed`; CSS `59b59a6686699d8e0a8485733bb27767c1b1e93b6367daf0484c819e550eba07`.

**Production SHA qualification:** this is strong artifact and historical deployment correspondence, not access to the current Vercel control plane. The exact currently assigned deployment/commit is not independently confirmed. Identical output could also arise from another commit with unchanged site inputs. Production timings below remain production measurements; build/test results remain local measurements.

Sources: [repository metadata](diagnostics/raw/repository.json), [candidate search](diagnostics/raw/candidate-repositories.json), [forks](diagnostics/raw/forks.json), [history](diagnostics/raw/git-provenance.txt), [deployments](diagnostics/raw/deployments.json), [successful deployment status](diagnostics/raw/deployment-status.json), [artifact inventory](diagnostics/raw/build-artifacts.json).

## Measurement method

- Lighthouse **13.4.1**, installed before this task; Chrome **157.0.8103.79**, headless, fresh disposable profiles. Six serial runs: three mobile, then three desktop. No simultaneous build or other audit browser during Lighthouse. Reported values are the **median of each metric independently**, not a selected “best” run.
- Host: Intel Core i7-1068NG7 2.30 GHz, 32 GiB RAM, macOS 26.7.1 x86_64. This is a developer workstation, not a controlled performance lab. Thermal state, external traffic, CDN/Google Fonts variability and background OS load were not controlled. Mobile Performance ranged 56–64; desktop 73–74.
- Mobile: 412 × 823 CSS px, DPR 1.75, Lighthouse mobile UA; simulated throttling, RTT 150 ms, throughput 1638.4 Kbit/s, CPU multiplier 4. Desktop: 1350 × 940, DPR 1, simulated RTT 40 ms, throughput 10240 Kbit/s, CPU multiplier 1. Complete config, actual UA and timestamps are embedded in each report. Lighthouse's template emulated UA contains Chrome 136 while captured network/host UA reports Chrome 157; both are preserved, not silently substituted.
- Browser cache/storage reset is Lighthouse's default; origin/CDN caches are not purged. This measures a fresh browser navigation against the public CDN. No Lighthouse run warnings or runtime errors.
- Route inventory: one document `/`, with `#home`, `#features`, `#demo`, `#getstarted`, `#team` scroll sections. No separate website documentation or secondary route implementation exists. Sections were exercised and captured; repeating Lighthouse on fragments would not represent independent pages. Installation documentation is external on GitHub and outside this website scope.
- Additional browser checks: Playwright using installed Chrome, desktop 1440 × 900 and touch/mobile 390 × 844, DPR 1, no network/CPU throttle. These captures are distinct from Lighthouse device emulation. Full initial resource timing and CDP network metadata, console, axe results and interaction observations are saved.
- Automated accessibility: Lighthouse's embedded axe 4.14.0 plus standalone installed axe (exact version in browser JSON), followed by keyboard/DOM, responsive and interaction checks. Node counts are rule-node occurrences, not unique WCAG failures. No screen-reader certification or full WCAG conformance evaluation.
- Reproduce with [instructions](README.md) and the saved scripts. [Individual runs](lighthouse/before/runs.md), [machine-readable medians](diagnostics/raw/lighthouse-summary.json), six JSON and six HTML reports are preserved under `lighthouse/before/`.

## Quantitative scorecard

M/D means mobile/desktop. All Lighthouse values are laboratory results. The After column is deliberately empty. Targets are starting aspirations, subject to representative remeasurement and branding/functionality constraints.

|Metric|Before|Target|After|Method / source|
|---|---|---|---|---|
|Mobile Performance|60 (runs 56, 60, 64)|≥90||Lighthouse median|
|Desktop Performance|74 (73, 74, 74)|≥95||Lighthouse median|
|Accessibility|52 / 55|100 aspirational; manual defects resolved||Lighthouse M/D|
|Best Practices|92 / 92|100 aspirational||Lighthouse M/D|
|SEO|73 / 73|100 aspirational; crawlable content/links||Lighthouse M/D|
|FCP lab|3.603 s / 0.816 s|≤1.8 s on mobile; preserve desktop||Lighthouse median|
|LCP lab|4.779 s / 0.879 s|≤2.5 s both profiles||Lighthouse median; not field p75|
|CLS lab|0.250 / 1.485|≤0.1 both profiles||Lighthouse median; unitless|
|TBT lab|56 ms / 0 ms|≤200 ms mobile; no regression||Lighthouse median; not INP|
|Speed Index lab|4.891 s / 0.816 s|≤3.4 s mobile; preserve desktop||Lighthouse median|
|Field LCP / CLS / INP|Not measured|p75 LCP ≤2.5 s, CLS ≤0.1, INP ≤200 ms||No RUM/CrUX dataset collected|
|Initial JS network transfer|192,873 B / 192,873 B (one script)|Provisional ≤150 kB; validate retained animation cost||Lighthouse resource-summary; compressed transfer accounting|
|JS decoded resource|671,306 B|Reduce after profiling; no arbitrary ratio||Production download + Lighthouse network-requests|
|Total page transfer|16,828,763 B / 8,320,516 B|Provisional ≤1.5 MB cold initial load, both||Lighthouse resource-summary; excludes later demo selections|
|Image transfer|16,502,554 B / 8,064,158 B|Responsive assets and deferred demos within page budget||Lighthouse median|
|CSS transfer|5,750 B / 5,728 B|No regression; eliminate blocking font chain||Three stylesheets, Lighthouse median|
|Font transfer|124,013 B / 54,184 B|Provisional ≤60 kB initial; retain needed weights||Lighthouse median|
|Initial requests|38 / 36|Justify each request; do not optimize count alone||Lighthouse median including manifest checks|
|First-party console defects|1 unique: manifest 404; 4 related entries/run in all 6 runs|0 first-party errors||Lighthouse errors-in-console + direct HTTP GET|
|Uncaught JS exceptions|0 observed in browser sessions|0||Playwright pageerror; bounded sessions|
|Automated accessibility rule failures|7 desktop / 6 mobile (332 / 329 rule-node occurrences)|0 actionable failures plus manual verification||Standalone axe initial DOM; see accessibility audit|
|Mobile navigation availability|Menu hidden; section links unavailable|Pointer and keyboard operable||Screenshot + computed `display:none`|
|Mobile demo reachability|6 of 8 entries reachable|8 of 8, keyboard and pointer||Eight next-click sequence + source|
|Build errors|0|0||`npm run build`|
|Build duration|11.087 s total; Vite stage 3.72 s|Track; not a primary optimization goal||One local build; not a repeated timing benchmark|
|TypeScript errors|0|0 with proportionate stronger checks||`tsc --noEmit`; current strict checks partly disabled|
|Lint|5 errors, 1 warning|0||Existing lint script|
|Tests|2 passed / 5 failed / 7 total|All relevant tests pass; meaningful interaction coverage||Existing Jest suite|
|Direct dependencies|14 production + 17 development|Remove unused packages; classify tests correctly||Manifest|
|Outdated direct dependencies|30 of 31|No unsupported direct tooling; document justified version holds||Installed `npm outdated --include=dev --json`|
|Dependency vulnerability entries|53: 4 critical, 31 high, 13 moderate, 5 low|0 actionable advisories; document reachability/exceptions||Lockfile npm audit; package entries, not exploitable production count|
|Confirmed exploitable production vulnerabilities|Not established|0||No intrusive security testing; source triage only|

Resource medians are calculated independently, so component medians need not sum exactly to the total median. Decimal kB/MB are used unless explicitly marked KiB/MiB. Transfer counts include protocol/header accounting as reported by Lighthouse; they are not gzip estimates.

## Highest-impact baseline findings

1. **Navigation and keyboard access (P1):** the hamburger SVG remains `display:none` at mobile breakpoints while links are hidden. Scroll links lack `href`; demo controls are clickable `div`s. Normal Tab navigation skips core controls. Mobile carousel hardcodes wrap at index 5 although its data has eight entries.
2. **Payload and stability (P1):** mobile requests the older 10,597,935-byte first GIF; desktop uses the newer 2,164,112-byte GIF. Team images load eagerly far below the fold. Hero/reveal layout changes, missing media dimensions and font loading are associated with major shifts. Reserve layout before adding animation refinements.
3. **Accessibility (P1):** 104 images missing alt and 176–177 unnamed links in standalone axe; missing `main`, invalid lists, heading skips, contrast and touch-target findings. The baseline does not imply every repeated node is a distinct issue.
4. **Toolchain/security (P1):** Vite 4.3.9 is outside supported release ranges; old lock includes development/test/native dependency paths. `npm audit --omit=dev` still reports 43 entries because many non-browser packages are classified as production. No evidence supports calling all these public-site exploits.
5. **Regression protection (P1):** install/build/typecheck pass, lint and tests fail. CI runs only install and tests on PRs to master, with no pinned Node, build/lint/browser/accessibility gates.
6. **Reliability/SEO (P2):** root manifest 404, absent meta description, non-crawlable section anchors, no website sitemap/robots resource (404, not itself proof of crawler blocking).
7. **Maintainability (P2):** duplicated demo data has already caused desktop/mobile drift; global selectors escape SCSS component boundaries; a global Three.js animation initializes 667 separate sphere meshes and runs continuously. There are no God components: largest UI TSX is 133 lines; the 379-line contributor list is data.

See [architecture](diagnostics/architecture-audit.md), [performance/bundles](diagnostics/bundle-analysis.md), [runtime](diagnostics/console-errors.md), [accessibility](diagnostics/accessibility-audit.md), [dependencies](diagnostics/dependency-audit.md), [build](diagnostics/build-results.md), and [security/observability](diagnostics/security-observability.md).

## Visual and observability record

Unaltered PNG screenshots in [screenshots/before](screenshots/before/) cover homepage, navigation, features, demo, get started, team, narrow reflow and landscape. Filenames identify requested viewport; mobile layout viewport can expand because of overflow (raw DOM values document this). Captures freeze live animations at their capture time; screenshots are not pixel-deterministic goldens. Existing astronaut/whale mascot, dark star field, colors and typography provide a recognizable identity to preserve.

Vercel Web Analytics and Speed Insights are **confirmed absent from audited source/manifest**; neither integration is observed in captured initial production requests. Error/RUM integrations are likewise not found in source. Account-level analytics, uptime checks, deployment logs, alerting and retention are **unknown without authorized Vercel/monitoring access**. No monitoring was installed or settings changed.

## Boundaries and remaining verification

No real-user dataset, physical mobile device, Safari/Firefox run, screen-reader pass, exhaustive contributor-link crawl or actual browser 200%/400% zoom audit was completed. The 320 CSS-pixel test is a reflow proxy, not zoom. No public attack testing, historical secret scan, private deployment access or performance rewrite was attempted. Browser checks cover representative interactions, not every possible session. Local build was run once; production Lighthouse three times/profile. Exact current Vercel alias, runtime and monitoring settings remain follow-up items despite strong artifact correspondence.

Next implementation should be the small stabilization/accessibility phase in [01-roadmap.md](01-roadmap.md), with separate regression-test and behavior-fix commits only after review. This audit ends before implementation.
