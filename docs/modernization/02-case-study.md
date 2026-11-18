# Docketeer website modernization — engineering case study draft

**Status: local engineering results verified; production acceptance pending.** Prepared 2026-11-18. This draft describes work on the public website, not the Docketeer Docker/Kubernetes application. The original contribution to vulnerability scanning in 2024 is separate from this website initiative. Review personal attribution and wording before publishing; implementation and validation used AI-assisted engineering tools.

## Problem and scope

Docketeer’s public website had accumulated technical debt across multiple student teams. The starting local checkout was 16 commits behind the authoritative website branch. Beginning with that checkout would have modernized an obsolete version. Repository history, the fork network, public deployment records, and byte-identical reproduction of the production HTML, JavaScript and CSS established a defensible source baseline at `22d612c66d2ad3d7107b7ed1dff5cb52a4e1865a`.

The original checkout was preserved and modernization isolated on `feat/website-modernization` in a separate clone. The current locally reviewed release is `5aac1d23beabb4d4d6fcd041630e4b48ff736360` in [ComfyClicks/Docketeer-Website-2024](https://github.com/ComfyClicks/Docketeer-Website-2024). No production deployment or Vercel account changes are part of these results.

The baseline showed a buildable small React/Vite site with broken mobile navigation, inaccessible demo controls, duplicated demo data, eagerly downloaded animation assets, unstable layout, outdated tooling, and failing tests/lint. Images dominated transfer; an assumption that JavaScript alone caused the poor experience would have missed the largest bottleneck. The scope justified incremental changes rather than a framework rewrite or wholesale redesign.

## Engineering approach

1. **Preserve evidence before changing behavior.** Capture three Lighthouse runs per device, network/resource accounting, screenshots, runtime errors, dependency diagnostics and build results. Keep live production observations separate from local builds. Preserve the original 91 evidence files with SHA-256 verification.
2. **Stabilize interactions before optimization.** Restore section links and mobile navigation, keyboard/focus behavior and all eight demo choices. Replace brittle legacy test tooling with Vitest and proportionate behavioral tests. Upgrade React/Vite/TypeScript and use Oxlint without a separate Babel test transform stack.
3. **Centralize actual duplication.** Share demo data and component responsibilities while preserving desktop/mobile recording differences. Avoid adding abstraction layers to a site whose components were already relatively small.
4. **Optimize the dominant costs.** Optimize portraits/logos, self-host necessary fonts, use static demo posters and explicit playback, and reserve layout geometry. Preserve the recognizable space background with a lightweight Canvas animation that starts paused and respects reduced-motion preferences.
5. **Protect the result economically.** A lightweight GitHub Actions check handles build, types, lint, unit/policy checks and audit policy. Browser and repeated Lighthouse jobs remain manual to avoid unnecessary recurring compute and duplicate runs. No paid runner or account upgrade is required by the implementation.
6. **Prepare production operations separately.** Add SEO/social metadata and crawl resources. Implement opt-in Vercel analytics integrations, privacy filtering, headers, a deployment-artifact verifier and an owner handoff. Local tests do not claim successful production ingestion.

## Evidence: original production versus current local release

These are **different environments and tool versions**, not a controlled production before/after experiment. The original production baseline used Chrome 157 / Lighthouse 13.4.1; current local Phase G measurements used Chromium 159 / Lighthouse 13.6.0 and Node 24.22.3. Each Lighthouse cell is a median of three runs per device. Monitoring is off in the current local measurements.

| Metric | Original production, mobile / desktop | Current local release, mobile / desktop |
| --- | ---: | ---: |
| Lighthouse Performance | 60 / 74 | 100 / 100 |
| Lighthouse Accessibility | 52 / 55 | 100 / 100 |
| Lighthouse Best Practices | 92 / 92 | 100 / 100 |
| Lighthouse SEO | 73 / 73 | 100 / 100 |
| LCP, laboratory | 4.779 s / 0.879 s | 1.872 s / 0.477 s |
| CLS, laboratory | 0.250 / 1.485 | 0.000860 / 0.000380 |
| TBT, laboratory | 56 ms / 0 ms | 35 ms / 0 ms |
| Initial decoded JavaScript | 671,306 B | 284,587 B |

Sources: [original production baseline](00-baseline.md), [six-run current local results](phase-g/implementation-performance-summary.md), [full summary/configurations](phase-g/implementation-performance.json), [current acceptance and source correspondence](phase-h/README.md). Do not describe this table as proof of a production Lighthouse gain caused entirely by the code. Decoded JavaScript is neither compressed transfer nor executed-code volume.

## Stronger comparison: matched local performance work

The Phase D experiment held Node 24.22.1, Chrome 157, Lighthouse 13.4.1 and Vite preview behavior constant across the before/after builds. Before was `47326ca61dd588b3735dedb115488c5d66ce6099`; the accepted after implementation is identified by its saved source/build hashes. It predates later responsive, SEO and monitoring changes.

| Metric | Before local Phase D | After local Phase D |
| --- | ---: | ---: |
| Mobile Lighthouse Performance median | 76 | 99 |
| Desktop Lighthouse Performance median | 90 | 100 |
| Mobile lab LCP median | 4.143 s | 1.848 s |
| Desktop lab CLS median | 0.181763 | 0.000380 |
| Mobile initial transfer, separate CDP capture | 16,829,115 B | 169,457 B |
| Desktop initial transfer, separate CDP capture | 8,325,462 B | 169,457 B |
| Initial JavaScript transfer, CDP | 210,859 B | 97,686 B |
| Initial JavaScript decoded body | 788,980 B | 283,976 B |

[Methods, per-run evidence and caveats](phase-d/README.md). CDP transfer includes overhead; its observation window and viewport differ from Lighthouse. These are initial-navigation savings, not total bytes after playing every demonstration. Legacy GIFs retained their original bytes and are deferred until requested. Small inlined assets are already counted in JavaScript.

## Reliability, accessibility and maintainability outcomes

The original lint command reported five errors and one warning, and five of seven Jest tests failed. Current local acceptance passes lint, production build, application/test type checks, **24 Vitest tests and nine CI-policy tests**. All **10 Chromium browser tests** pass, including navigation, eight demo choices per layout, media decoding/playback, keyboard controls, reduced motion, missing-Canvas fallback, loaded images and local header behavior. Automated axe checks report zero violations in the tested initial desktop/narrow states; incomplete results and remaining manual work are recorded separately.

Direct production dependencies went from 14 to four; direct development dependencies went from 17 to 15. This count is context, not a quality metric by itself. The initial production-classified audit reported 43 entries; current production-only npm audit reports zero. Some original packages were incorrectly classified as production. **Do not claim 43 exploitable website vulnerabilities were fixed.** The complete audit still reports seven high development entries tracing to one Picomatch advisory. GitHub withdrew that advisory during this review while npm continued reporting it; [the dated exception analysis](phase-h/security-exception.md) explains the discrepancy and expiry. This is not evidence of a code remediation.

## Decisions that required judgment

- **Keep branding, change rendering cost.** Replace the continuously running Three.js scene with opt-in Canvas animation rather than removing the space identity or leaving battery/CPU costs unbounded.
- **Prefer media fidelity over uniform conversion.** Reject H.264 conversions that introduced visible artifacts in older recordings and reject much larger lossless alternatives. Keep those GIFs behind explicit playback instead of claiming every asset was compressed successfully.
- **Follow the layout-shift evidence.** An early optimized build still shifted because the footer appeared before React mounted. Reserve the root’s initial geometry; do not hide the footer or accept a heuristic attribution as proven root cause. Preserve superseded measurements rather than deleting inconvenient results.
- **Do not chase a forced green dependency report.** Reject audit suggestions to downgrade the chosen toolchain. Keep a narrow, tested, dated exception while investigating the advisory and available versions.
- **Treat observability as an operational capability.** Source integrations and fixture-based SDK tests do not prove data reaches the intended Vercel project. Keep integrations off until the project owner approves configuration, privacy and cost implications.

## Remaining acceptance and publication gates

The release is **not presented as fully accepted or deployed**. The owner explicitly deferred complete demo text alternatives. Subsequent [final local review](phase-h/final-review/README.md) passed all 10 Firefox tests and actual browser-zoom interaction/reflow checks at 200% and 400%. Native screen-reader/physical-device checks and some high-zoom visual verification remain unavailable; the documented screenshot limitation also reproduces on minimal HTML. These limits preclude a full accessibility-conformance claim. A subsequent uncommitted follow-up corrected the swapped contributor links and isolated the reported WebKit pointer failures to the current browser build on this host; its minimal-page reproduction and supplemental browser validation are documented in the [follow-up report](phase-h/follow-up/README.md). The numerical benchmark tables above remain measurements of the original audited release, not a new post-fix benchmark. Additional-browser outcomes and tooling limitations are in the acceptance report. Have the teammate verify the production branch/SHA, review and deploy the intended release, verify edge headers/assets and social previews, and enable only approved monitoring. Repeat production measurements with stated browser/tool versions and gather sufficient field data before claiming improved real-user Core Web Vitals. No INP, conversion, adoption, uptime, revenue or business-impact improvement has been measured.

The original baseline’s After column remains empty. Production measurements should be added as a new dated dataset, not substituted with local numbers.

## Portfolio wording available now

Candidate resume bullet, subject to personal attribution review:

> Modernized Docketeer’s React/TypeScript marketing website through measured, incremental changes; reduced initial mobile transfer from 16.83 MB to 0.17 MB in a matched local experiment, restored accessible navigation/demo controls, and added budget-conscious build, browser and performance safeguards.

Short interview framing:

> I first verified which repository represented the public website and preserved a reproducible baseline. The biggest cost was eager image/animation loading, so I prioritized loading behavior and media fidelity alongside broken keyboard/mobile interactions. I kept the design identity, modernized the tooling incrementally, and used repeated local measurements and regression checks. Production rollout and field-performance claims remain separate acceptance steps.

Do not publish “production Performance increased from 60 to 100,” “WCAG compliant,” “all vulnerabilities eliminated,” or “improved real-user Core Web Vitals” from the evidence currently available.

## Reproduction and handoff

Use [local acceptance instructions](phase-h/README.md), [original methodology](README.md), [matched Phase D comparison](phase-d/README.md), and [Vercel owner handoff](phase-g/teammate-handoff.md). The repository contains the raw baseline and selected local artifacts; large generated reports remain in ignored report directories with provenance and hashes. No production access credentials are required for local review.
