# Phase G — Repository implementation and production handoff

Implemented 2026-11-18 after SEO release `4f1529aa8fc789f4153e258b7e14381370d59c67`. **Repository-side work is complete. Production activation and real dashboard/field-data verification remain the teammate’s tasks.** The Vercel project is on Hobby and managed by the teammate; no team invitation or paid upgrade is required for this handoff.

## Implemented

- Installed exact versions `@vercel/analytics` 2.0.1 and `@vercel/speed-insights` 2.1.0. The lockfile adds only those two package entries; no existing packages were upgraded.
- Added `src/monitoring/monitoring.ts`, called once outside React StrictMode effects. Each SDK is dynamically imported only when its independent build switch is exactly `true`, in a production build served from exactly `https://docketeer.io`. Unset/false switches compile the monitoring startup out of the default build. Local and preview origins never initialize it, even if switches are enabled.
- Respects initial Do Not Track and Global Privacy Control preferences. Each beforeSend callback admits only the homepage on the canonical origin; removes query/fragment details; normalizes any reported route; rejects malformed, credential-bearing, foreign-origin or unknown-path URLs. Custom analytics events are rejected. No user IDs, session replay, click tracking or fingerprinting were added.
- Speed Insights uses `sampleRate: 0.1` (10%) and disables soft-navigation tracking for this single-page, fragment-navigation site. This conserves the shared Hobby allocation but produces fewer samples; it is not a guarantee that the quota cannot be reached. Detailed free CWV access is not promised.
- Optional SDK import/initialization failures do not prevent rendering; a generic warning avoids logging sensitive error details. Browser/provider network failures remain visible and are not hidden. No retry loop or bypass of content blockers is added.
- Applied global `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin`, and `Permissions-Policy: camera=(), microphone=(), geolocation=()` in `vercel.json`. Origin-only referrers protect paths/queries even on same-origin SDK requests. Native video fullscreen remains allowed.
- Added a local preview adapter that applies those global headers for browser tests. It deliberately fails if future conditional/path-specific rules appear rather than silently pretending to implement Vercel routing. This is local browser validation, not evidence of actual CDN header delivery.
- Extended the manual deployment verifier to check configured headers as well as release artifacts and metadata. Existing PR workflow now watches `scripts/ops/**` and `vercel.json`; no additional jobs, schedules or automatic browser/Lighthouse runs were added.

Read [.env.example](../../../.env.example) and [the teammate handoff](teammate-handoff.md). No environment switches were activated in Vercel. No deployment, account upgrade, trial, domain modification or public analytics event injection occurred.

## What the monitoring checks establish

Unit tests exercise privacy filtering, independent switches, preview/development exclusion, DNT/GPC, duplicate-start protection and SDK failure isolation. Browser checks exercise the actual installed SDK loaders and their registered hooks using **local script-contract fixtures**. They cover disabled/enabled builds, preview origin, DNT, GPC and blocked-provider behavior. All browser requests are fulfilled locally; they do not contact production or Vercel collectors.

This proves our loader integration and callback behavior, not the server-delivered Vercel script’s entire payload, dashboard ingestion or remote script transfer/CPU cost. In particular, beforeSend controls the documented event URL; it is not proof that every internal SDK field or incoming document referrer has been scrubbed. The teammate must inspect actual payloads and the current product privacy/retention settings before relying on the integration. No broad legal-compliance claim is made.

Reproduce locally:

```sh
npm ci
npm run check
npm run audit:ci
npm run test:browser
node docs/modernization/phase-g/verify-monitoring.mjs reports/monitoring-check.json
npm run test:performance
```

The monitoring checker writes a new result file and refuses to replace one; ensure the parent directory exists. It builds an enabled variant in a temporary directory and keeps default dist intact. Full browser/performance reports remain ignored; compact evidence is stored in this directory. Default local Lighthouse runs have monitoring disabled; their scores must not be presented as measured performance of live analytics-enabled production.

## Security and operational decisions

The three low-risk headers are implemented and tested; the older headers-proposal.json remains historical. HSTS already comes from Vercel and is not broadened to unknown subdomains. Existing HTML/asset cache behavior remains unchanged: immutable caching needs verification of platform precedence and versioned asset paths before changing it. Public stable-name icons must not receive year-long immutable caching.

A strict CSP and report collector are intentionally separate follow-up work. No collector exists and the site uses runtime styles; adding a fake report URL or enforcing an untested policy would not complete production security. The readiness audit documents a staged hash-based/report-only strategy. No CSP protection or violation collection is claimed active. Similarly, an external uptime service, error-monitoring vendor and alert recipient have not been selected or invented. The handoff provides concrete acceptance/incident steps for the existing owner and avoids adding paid tools or GitHub cron jobs.

Source maps stay unpublished. The existing time-limited development dependency advisory exception remains unchanged; it is not fixed by these integrations. The direct production dependency audit is rerun below.

## Evidence and provenance

- [Historical public/deployment audit](readiness-audit.md): original production artifacts still served, no observed client monitoring in the sampled load, missing defensive headers, account limitations.
- public-before/public-inspection.json and GitHub deployment/status JSON: public pre-activation evidence, not a current alias-to-SHA guarantee.
- local-release-check.json / production-release-check.json: historical verifier positive/negative checks before the new header assertions.
- implementation-check.txt, implementation-browser.txt, implementation-audit.txt: current checks.
- monitoring-browser.json: final isolated loader/privacy/browser scenarios and decoded local JavaScript sizes. These exclude provider script bytes; fixture sizes are not a production estimate.

Modern Web Guidance `privacy`: “collect data at the lowest granularity necessary.” The implementation restricts data collection and referrers, retains native platform functionality, and does not add speculative events.

## Final local verification

- Build, Oxlint and application/test/config types passed; **24 Vitest tests and nine CI policy tests passed**. Tests use the existing frameworks.
- **10 Playwright tests passed** in 36.4 seconds with global headers applied locally. Navigation, all demos/playback, accessibility, motion behavior and disabled telemetry remain covered.
- Six isolated monitoring scenarios passed: off, on, preview, DNT, GPC and blocked provider. SDK loaders and filters are real; provider script responses are local contract fixtures. Enabled local application/loader scripts total **290,673 decoded bytes**, versus **284,587** with switches off: **6,086 additional decoded bytes**, excluding all live provider script bytes. This is not compressed transfer or executed-byte measurement.
- Header configuration passed validation of the self-contained headers subsection of Vercel’s published schema. The full draft-04 root schema was unsupported by the installed Ajv, so no full-schema claim is made. The local release verifier passed **19 checks** with headers and rejected exactly the three missing headers in a controlled negative test. See header-validation.json, headers-present.json and headers-missing.json.
- `npm run audit:ci` passed: **zero production vulnerabilities**; seven existing high development entries remain covered by the unchanged advisory-specific exception expiring 2026-12-17. No new advisory suppression was added.
- Six serial Lighthouse runs: mobile and desktop median **100 Performance / 100 Accessibility / 100 Best Practices / 100 SEO**. Mobile LCP 1.872s, CLS 0.000860, TBT 35ms; desktop LCP 0.477s, CLS 0.000380, TBT 0ms. These are local lab metrics with monitoring off. The performance tool uses ordinary Vite preview; deployment headers were exercised separately by the browser suite. No production or enabled-provider performance claim follows.
- Initial decoded JS stays **284,587 bytes**, with no initial GIF/MP4 requests. Full performance reports are locally retained under `reports/performance/2026-11-18T15-40-12.278Z-lq6wJp/`; compact results/configurations are implementation-performance.json and implementation-performance-summary.md.
- Runtime: Node 24.22.3, Chromium 159.0.8154.6, Lighthouse 13.6.0. Earlier SEO validation used Node 24.22.1; both are compatible with the repository’s 24.x engine. Do not attribute small timing differences to this change.
- All **91 original baseline files** verified unchanged. implementation-provenance.json fingerprints the uncommitted implementation. No hosted Actions execution, account change, paid-service activation, push or production deployment was performed in this implementation step.

Remaining work is the teammate’s checklist: review/deploy, enable selected Production flags/services on Hobby, inspect real payloads and dashboard delivery, confirm edge headers and release identity, and assign alert/rollback ownership. A strict CSP collector, detailed paid field metrics and a new external error/uptime service are explicit separate decisions, not silently implemented features.
