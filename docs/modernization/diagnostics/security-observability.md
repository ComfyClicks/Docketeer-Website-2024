# Security and production observability baseline

2026-11-17. Passive public HTTP inspection, dependency advisories and tracked source review only. No attacks, fuzzing, authenticated production access, private resources, deployment changes or security fixes.

## Security findings and limits

|Area|Confirmed observation|Interpretation / follow-up|
|---|---|---|
|Dependency vulnerabilities|53 package entries: 4 critical, 31 high, 13 moderate, 5 low; omit-dev 43|See dependency audit and raw advisory URLs. Triage execution path; do not label every entry an exploitable production flaw. Prioritize supported tooling and removing irrelevant native/test dependency paths.|
|Unsupported tooling|Vite 4.3.9 outside supported branches|Contributor/development-server exposure deserves prompt upgrade; current production response is static assets, not evidence of an exposed Vite dev server.|
|Runtime|No pinned Node/npm in repo or CI; local diagnostic used Node 24.22.1|Actual Vercel build runtime and project settings unknown. Old allowed engine minimums are not recommended runtimes.|
|Secret pattern scan|No matches in tracked source/config/docs at audited commit|Scanned private-key markers, GitHub token prefixes, AWS key IDs and long credential assignments; values never emitted. Excluded generated .vite and lockfile. No entropy/history scan or proof of universal secret absence.|
|Client-side sinks|No dangerouslySetInnerHTML, innerHTML, eval, credential storage, API fetches or env reads found in authored source|Static content limits obvious injection paths. This is not a penetration test and does not establish formal safety.|
|HTTPS/HSTS|HTTPS 200; `strict-transport-security: max-age=63072000`|Positive observation. No includeSubDomains/preload was observed; not required solely to improve a score.|
|CSP|No Content-Security-Policy header in homepage response|Defense-in-depth opportunity. Inventory fonts/styles/canvas before report-only policy; do not deploy an untested restrictive policy.|
|Other headers|No X-Content-Type-Options, Referrer-Policy, Permissions-Policy or X-Frame-Options observed on sampled homepage|Review minimal appropriate policy; lack of header is not itself a confirmed exploit. Prefer CSP frame-ancestors if framing restriction is intended.|
|CORS|`access-control-allow-origin: *` on public static responses|Not inherently a vulnerability for public non-credentialed content; do not change reflexively.|
|External resources|Google Fonts CSS/font requests; no third-party executable scripts observed in initial captures|Review availability/privacy and font hosting tradeoffs; no runtime analytics script observed.|
|External links|Some target="_blank" without explicit rel; several target="blank"|Modern _blank generally implies noopener, so do not claim proven tabnabbing. Named target `blank` has different behavior; standardize intentional external-link behavior and explicit relationship attributes.|
|Cache policy|Hashed assets revalidate (`max-age=0, must-revalidate`); CDN HIT|Performance/operational follow-up, not evidence of data disclosure.|
|Source maps|Lighthouse flags missing maps for first-party JS|Observability tradeoff: private error-monitoring uploads if needed. Do not publish source maps just to maximize a score.|
|License/content provenance|Footer says MIT; no license file found in website tracked tree|Confirm intended licensing and third-party media/font attribution with maintainer; no legal conclusion inferred.|

Critical advisory applicability: Babel traversal requires crafted compilation input; XML/form/shell packages are in test/native tooling paths. Vite DOM clobbering involves injection preconditions not found in authored source. No backend accepts untrusted content here. Upgrading/removing vulnerable dependencies remains worthwhile, but **actionable production exploit count is not established**. Record package, path, advisory, exploit precondition and disposition during remediation instead of aiming for a misleading dashboard zero through suppressions.

Headers: [homepage](raw/production-headers.txt), [JS](raw/production-index-435f0cbe.js-headers.txt), [CSS](raw/production-index-59b59a66.css-headers.txt). Dependency analysis: [audit](raw/npm-audit.json), [path evidence](raw/vulnerability-paths.txt.gz). Scan scope/results: [inventory](raw/source-inventory.json).

## Observability status

|Capability|Source status|Public production observation|What remains unknown|
|---|---|---|---|
|Vercel Web Analytics|Confirmed absent: no @vercel/analytics dependency/component/script|No corresponding request in captured initial loads|Dashboard enablement, historical data, account configuration|
|Vercel Speed Insights|Confirmed absent: no @vercel/speed-insights dependency/component/script|No corresponding request in captured initial loads|Dashboard settings/plan and any historical collection|
|Client error monitoring|No Sentry/Datadog/LogRocket/New Relic/PostHog or other integration found|No monitoring endpoint observed|External/manual monitoring or unobserved injection|
|Real-user performance|No source integration found|No field dataset collected|CrUX availability, traffic volume, historic RUM|
|Uptime monitoring|Not represented in source|Cannot infer from page traffic|External probes, owners and alerts|
|Production logging|No client logging integration|Public deployment history shows successful historical deployment|Vercel logs, retention, build runtime, incident process|

No capability is claimed completely absent from the organization merely because it is absent in this repository. No Vercel account access was attempted. The public GitHub deployment metadata was sufficient to strengthen provenance and did not require private deployment inspection.

## Vercel-dependent follow-up

After authorized project access: verify current domain alias → deployment → Git SHA; confirm build/install commands, Node version, root directory and output directory; inventory analytics/Speed Insights, error/uptime tools, retention and alert owners; evaluate Web Analytics and Speed Insights against traffic, privacy and plan limits; configure approved integrations and measure their added overhead in a separate change. Collect a sufficient field-data window and report p75 device-segmented LCP/CLS/INP. Absence of enough samples must be reported, not filled with lab values. Deployment/settings changes are outside this audit and await implementation authorization.
