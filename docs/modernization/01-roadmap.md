# Docketeer website modernization roadmap

Prepared 2026-11-17 from [measured baseline](00-baseline.md), audited commit `22d612c66d2ad3d7107b7ed1dff5cb52a4e1865a`. **Planning only: none of these changes has been implemented.** Implementation begins after owner review. No commit, push, PR, merge, deployment or settings change is authorized by this document itself.

## Engineering decision

Keep the existing React/Vite foundation and section boundaries. The locked site builds, reproduces production core assets exactly, and has small components. Fix observed behavior and regain reliable checks before broad upgrades. Centralize only data/behavior that is already drifting. Optimize images and layout stability before pursuing speculative fine-grained CSS or bundle micro-optimizations. A full redesign, backend, router, global state manager or rewrite is not justified.

## Prioritization

P0 = active outage, confirmed exploit/secret exposure, or inability to establish trustworthy source; **none confirmed**. P1 = material user exclusion, major measured performance defect, or upgrade/regression/security blocker. P2 = meaningful quality/maintainability/operational improvement. P3 = optional or evidence/approval-dependent enhancement. Effort S/M/L estimates relative scope, not promised deadlines. Risk concerns regressions during the proposed change. H/M/L/— describe expected impact, not numeric benefit estimates.

|Finding|Priority / severity|User|Performance|Accessibility|Security|Maintainability|Effort / risk|Dependencies and rationale|
|---|---|---|---|---|---|---|---|---|
|Missing mobile menu; keyboard-inaccessible nav/demos|P1 high|H|—|H|—|M|S–M / M|Phase A. Core functionality excludes mobile/keyboard users; first implementation priority.|
|Mobile demo wraps six of eight items|P1 high|H|M|M|—|H|S / L|A then shared data B. Source and click sequence agree; fixes actual missing content.|
|104 missing image alternatives, 176–177 unnamed links, invalid structure|P1 high|H|—|H|—|M|M / L|A/C; remove systemic template defects, not hundreds of one-off patches.|
|CLS 1.485 desktop / 0.250 mobile|P1 high|H|H|M|—|M|M / M|D after core interaction checks; stable geometry and font/image investigation.|
|16.83 MB mobile / 8.32 MB desktop initial transfer|P1 high|H|H|M|—|M|M / M|D; oversized eager media dominates. Preserve accessible demos and image fidelity.|
|Unsupported Vite; 53 audit entries incl. 4 critical|P1 high dependency risk; production exploit unproven|M|M|—|H|H|M / M–H|B with early supply-chain triage; remove unnecessary paths and migrate supported toolchain.|
|5/7 tests fail; lint fails; CI lacks build/runtime pin|P1 high engineering risk|M|—|M|M|H|S–M / L|A begins safeguards; E expands. Upgrade confidence depends on this.|
|Global continuous Three.js animation / broad react-spring dependency|P1 performance, P2 architecture|M|H|M|M|H|M / M|B/D; profile and preserve brand. Do not assign invented bundle shares.|
|Manifest 404; metadata/crawlable anchors absent|P2 moderate|M|L|M|—|M|S / L|A/C; small changes remove errors and improve discovery.|
|Duplicate demo data, global CSS leakage, weak typing, tracked cache|P2 moderate|M|M|M|M|H|M / M|B/C, focused cleanup tied to demonstrated defects.|
|Mobile clipping, small content, inconsistent spacing|P1 reflow / P2 refinement|H|L|H|—|M|M / M|C/D/F; technical defects first, subjective design separate.|
|Missing source observability / unknown production monitoring|P2 operational|M|M|—|M|M|S–M / L–M|G; Vercel access only for account-dependent work, not earlier phases.|
|Prerender/static-content migration|P3 conditional|M|Potential H|M|—|Potential M|M–L / H|Only after remeasurement shows need; compare a bounded prototype.|
|Historical asset purge / cosmetic restructuring|P3 low|L|L unless delivered|—|—|M|S / L–M|Validate references/content ownership; no cosmetic module splitting.|

## Phase A — Restore usable behavior and trustworthy checks

**Objective:** make essential interactions available and establish a small dependable regression gate without mixing in framework migrations.

**Scope / recommended changes:**

- Pin a supported local/CI Node and npm combination using the successful Node 24 baseline as a starting point; clarify install/build commands. Inspect existing peer warnings and advisory reachability before running old dev tooling beyond loopback.
- Repair stale tests to assert current intended content and behavior; retain useful existing Jest/Testing Library setup. Add focused failing tests for mobile eight-item wrap and accessible navigation/menu behavior before fixes. Clear the five lint errors/unused import so the existing gate becomes usable.
- Restore mobile menu using a native button and explicit local state; real section anchors/IDs; native demo buttons with accessible labels and visible focus. Avoid the document-wide li visibility mutation. Preserve desktop navigation and existing hash destinations.
- Correct carousel wrapping from actual dataset length. Publish/correct the manifest path or remove the manifest reference only if PWA metadata is intentionally not needed. Fix missing map keys.

**Benefits:** restores core mobile/keyboard behavior, removes a repeatable first-party error and enables reliable subsequent work. **Dependencies:** owner approval of implementation scope; no Vercel access required. **Risks:** hash-scroll offsets, resize/open state, focus order and current tests' stale assumptions.

**Suggested commit boundaries:** (1) runtime documentation/pinning and meaningful test baseline; (2) semantic navigation/menu plus regression checks; (3) demo wrap/control semantics plus checks; (4) manifest/key/lint cleanup. Keep behavioral fixes reviewable; do not combine dependency-major upgrades.

**Verification / definition of done:** install/build/typecheck/lint/tests pass; all five desktop anchors work; mobile menu works with pointer and keyboard, correct expanded state and focus; eight demos reachable both directions; no manifest failure; no new console exceptions. Review 320/390/844/1440 widths and route/hash persistence. Test real rendered behavior, not only mocked callbacks. Production remains unchanged until separately authorized deployment.

## Phase B — Reduce dependency exposure, then modernize the toolchain

**Objective:** a supported, compatible stack with fewer irrelevant dependency paths.

**Scope:** move Jest/testing-library/ts-jest/jsdom packages to development; remove React Router wrapper/runtime dependency if no retained route requires it; remove unused direct fiber and test-only deprecated observer polyfill with a deterministic JSDOM observer mock. Replace umbrella react-spring with its web-only package if preserving springs. Re-audit to understand which advisories disappear and which remain actionable.

Use the [dependency matrix](diagnostics/dependency-audit.md): compatible patch/minor updates first; React 18.3 bridge then React 19/types; migrate Vite majors in reviewable steps to a supported current release with corresponding plugin; update Sass for current Vite peer requirements; ESLint flat config with matching parser/plugins; keep TypeScript in a supported compatible range rather than forcing TS 7 past ts-jest/parser peer bounds. Re-check registry metadata at implementation date.

**Benefits:** reduces contributor/build supply-chain exposure and native peer conflicts; creates supportable upgrade path. **Dependencies:** A's checks; optional dependency reduction may precede React 19 to remove peer constraints. **Risks:** Vite 8 Rolldown/Oxc output/browser targets, React JSX/types, Sass output, Jest/ESM/transform changes and lock graph churn.

**Commits:** (1) dependency classification/removal; (2) web-only animation package; (3) compatible patch/security refresh; (4+) each Vite migration pair; separate React/types change; separate lint/config migration. Do not force audit fixes or peer overrides. Intermediate unsupported versions are migration checkpoints, not final deployed destinations.

**Verification / done:** clean lock-preserving install, build, lint, typecheck and tests on pinned LTS; screenshot/interaction parity; no unexplained peer conflicts; retained direct packages on supported versions; advisory disposition table records path, exposure and fix/justification. Target zero actionable advisories without suppressing real risk. Save updated artifact/transfer measurements, retaining before evidence.

## Phase C — Centralize content and finish semantic accessibility

**Objective:** remove actual data drift and recurring accessibility defects with minimal architecture changes.

**Scope:** one typed demo dataset (stable ID, title, description, desktop/mobile media only where justified); derive wrap/counts; type contributor/feature records and component props. Use valid list/main/header/footer structure and heading order; descriptive icon links and appropriate alt text; skip link and focus-visible treatment; adequate touch targets. Derive animation counts from team data or simplify animation. Introduce reduced-motion handling and visible-by-default content. Scope leaking selectors and fix intrinsic widths.

**Benefits:** consistent content across devices, maintainability and meaningful accessibility gains. **Dependencies:** A, B where upgraded packages alter animation APIs. **Risks:** changing contribution attribution, image descriptions, scroll behavior or reveal timing. Confirm editorial choices (e.g. XIX article versus XX hero) separately.

**Commits:** shared demo data; contributor/feature typing; document semantics and names; reduced motion/focus/target sizing; scoped responsive CSS. Avoid generic component/data frameworks.

**Verification / done:** all eight entries/media match expected content; no unnamed primary links/images; axe findings resolved or specifically documented; complete keyboard and assistive-technology pass; 200%/400% zoom, 320 px reflow, text spacing and contrast verified against rendered backgrounds. Keep native focus styles until intentional replacements are verified. Do not claim WCAG compliance from a Lighthouse score alone.

## Phase D — Fix payload and layout instability

**Objective:** improve loading, layout stability and ongoing animation cost on real devices.

**Scope, in order:**

1. Reserve hero/section geometry, valid image dimensions and aspect ratios; stop changing layout sizes simply to reveal content. Provide a deterministic dark background independent of WebGL.
2. Resize/compress portraits and logos, add responsive sources and native lazy loading below fold. Never lazy-load the hero/LCP content.
3. Defer offscreen demo downloads; replace large GIFs with appropriate poster/video/static presentation after comparing quality and controls. Preserve every demo and ensure reduced motion/pause options.
4. Profile star field, then choose a simpler implementation or batched rendering with lifecycle/visibility safeguards. Preserve recognizable night/space identity; confirm an altered animation treatment before broad visual changes.
5. Reduce font weights and sequential CSS imports; evaluate self-hosting/limited preload only for critical fonts. Re-evaluate JS splitting after removing unnecessary code; do not split arbitrarily to hide Vite warnings.

**Benefits:** lower data consumption and network contention, stable content, less CPU/GPU/battery cost. **Dependencies:** semantic interaction parity and responsive data cleanup. **Risks:** media quality, browser codec support, poster timing, LCP regression from inappropriate lazy loading, visual identity changes.

**Commits:** stable geometry; portraits/logos; demo media/loading; star rendering; font delivery. Each receives its own before/after measurement.

**Verification / done:** repeat three Lighthouse runs/profile with same configuration, explain changes in medians/variance and actual transfer; target ≤2.5 s lab LCP, ≤0.1 CLS, ≥90 mobile/95 desktop Performance and ≤1.5 MB initial transfer where feasible. Targets do not authorize removing features or obscuring metrics. Check all demos, no-JS/default content, reduced motion, slow connection and real mobile appearance. Profile ongoing animation separately from navigation TBT. If residual JS dependence remains costly, propose a bounded prerender prototype with evidence rather than a rewrite.

## Phase E — Make practical safeguards durable

**Objective:** protect the improvements with a small maintainable CI workflow.

**Scope:** build, no-emit typecheck, lint and unit/component tests; browser smoke covering `/` and section anchors, mobile menu, eight demos, errors, broken assets, 320 px reflow and axe. Pin runtime; use current Actions and conservative permissions. Add grouped dependency updates and a reviewed audit policy. Run Lighthouse regression checks with repeated samples/tolerances and a documented runner environment; use stable local production builds for CI comparisons and periodic live checks for production behavior.

**Benefits:** catches actual regressions without a large testing platform. **Dependencies:** A establishes minimum gates; B–D stabilize expected behavior. **Risks:** flaky public-network metrics, animation screenshot variance, over-mocking observers, noisy dependency bots.

**Commits:** CI runtime/build/lint; browser smoke/a11y; performance budget; update automation. **Verification / done:** intentionally introduce a temporary defect in a disposable validation branch to prove relevant checks fail, then remove it; healthy checks pass consistently; workflows/documentation show how contributors reproduce failures. No snapshot-only “coverage” or arbitrary 100% unit coverage target.

## Phase F — Targeted visual and responsive refinement

**Objective:** noticeably improve polish while preserving identity and content.

**Scope:** narrow-screen feature layout and type legibility, demo sizing, consistent spacing/grid/image proportions, clear focus/hover/active states. Resolve screenshot-observed clipping/bands on actual mobile devices; distinguish real defects from automation rendering effects. Keep mascot, colors and content unless reviewed reasons justify changes.

**Benefits:** clearer, more professional presentation and better touch use. **Dependencies:** C/D to avoid styling unstable geometry. **Risks:** scope creep, design churn and functional contrast/focus regressions.

**Commits:** narrow layouts; component spacing/proportions; final visual adjustments. **Verification / done:** side-by-side matching viewport screenshots, keyboard/touch and zoom checks, no content loss or transfer regressions, owner review of subjective changes. A full redesign remains out of scope without a new decision.

## Phase G — Production ownership, headers and observability

**Objective:** know what is deployed and monitor actual experience after authorized access.

**Scope:** obtain Vercel project access; verify alias/SHA/build configuration/runtime; inventory existing analytics/uptime/logging and owners. Evaluate/install Vercel Web Analytics and Speed Insights if appropriate; avoid duplicate monitoring. Choose minimal error reporting/uptime checks. Review immutable hashed-asset cache policy, security headers and a report-only CSP before enforcing it. Consider private source-map upload where error reporting needs it.

**Benefits:** field evidence, operational accountability and earlier regression detection. **Dependencies:** authorized Vercel access and explicit approval for settings/deployment/integrations; website changes can proceed through earlier phases without this. **Risks:** privacy/retention/cost, script overhead, CSP breakage and stale caches.

**Commits:** approved client integrations; separate deployment/header configuration changes; operational runbook. **Verification / done:** data reaches intended project, consent/privacy expectations satisfied, sampled errors are actionable, integration overhead measured, alert owner/runbook defined. Verify field p75 LCP/CLS/INP over a stated sufficient window and segment; insufficient traffic remains “not measured.” Lab metrics cannot substitute.

## Phase H — Independent validation and engineering case study

**Objective:** demonstrate authentic outcomes with reproducible evidence.

**Scope:** record final SHA/deployment/environment; repeat baseline run matrix, interactions, axe/manual checks, screenshots, dependencies, build/lint/tests, resource accounting and security triage. Keep original artifacts and checksum manifest. Populate After only with new measured results and disclose any browser/Lighthouse/host change. Re-run old commit under the new toolchain where necessary to separate measurement drift from code impact.

**Benefits:** credible portfolio and handoff narrative. **Dependencies:** prior accepted changes, deployment access for production claims. **Risks:** cherry-picking best runs, attributing network/CDN changes to code, treating source asset removal as transfer savings, comparing lab to field.

**Commits:** final validation artifacts; case-study narrative/runbook. **Verification / done:** independent reviewer can reproduce the result; every improvement claim points to metric/source/change; include unsuccessful hypotheses and residual risks; all After values are explicit production or local measurements. No invented percentage gains or Lighthouse-only claim of WCAG compliance.

## Review decisions and blockers

No discovery/build/tooling blocker prevents beginning Phase A after review. Vercel access blocks control-plane verification, deployment changes and account-dependent observability only. Exact current alias remains unconfirmed despite byte-identical production core assets. Resolve later: preferred reduced-motion/star treatment; video-versus-GIF presentation and accessibility; contributor/article editorial choices; browser support policy; analytics/privacy/cost requirements. These do not require a full redesign decision now.

**Recommended next action: approve Phase A only.** It repairs demonstrated user-facing failures and provides trustworthy checks for higher-risk upgrades. Subsequent phases should be approved/reviewed as small coherent changes; this audit has not begun them.
