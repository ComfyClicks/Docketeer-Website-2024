> Historical pre-implementation audit. For current implementation and activation steps see README.md and teammate-handoff.md.

# Phase G — Production ownership and observability readiness

Date: 2026-11-17 America/New_York / 2026-11-18 UTC. Source release: `4f1529aa8fc789f4153e258b7e14381370d59c67` (`feat/website-modernization`). SEO changes were committed and pushed before this phase.

**Status: repository/public verification and handoff preparation completed; production activation remains incomplete pending authorized Vercel project access.** No Vercel account session, project settings, billing, deployment or monitoring dashboard was accessed. The latest available user context says a former teammate manages Vercel; a request for current access status is pending. Missing DNS/registrar access is separate and does not block normal deployment to an already configured Vercel project.

## Confirmed public findings

- `https://docketeer.io/` returns 200 from Vercel. HTML, JS and CSS SHA-256 hashes exactly match the original baseline artifacts associated with source `22d612c66d2ad3d7107b7ed1dff5cb52a4e1865a`. This confirms the modernization artifacts are not live. It does **not** establish the exact currently assigned Git SHA: equivalent builds can originate from different commits.
- Latest five public GitHub deployment records were inspected. The newest is successful historical Production deployment `2464225013`, created 2025-05-02, referencing that same SHA. Public status URLs do not prove today's custom-domain alias assignment. See github-deployments.json and github-production-statuses.json.
- Production `/robots.txt` and `/sitemap.xml` return 404. This differs from the local Vite fallback that generated HTML and failed the earlier robots audit. The SEO release supplies both files, but is not deployed.
- One fresh Chromium 159.0.8154.6 desktop navigation, reduced motion and five seconds observation recorded 34 requests, no failed requests or page exceptions. Origins: docketeer.io, fonts.googleapis.com and fonts.gstatic.com. Only the existing first-party script appeared. This is finite initial-load evidence, not a full runtime/interaction audit or proof that no delayed monitoring exists.
- Homepage has HSTS `max-age=63072000`. CSP/report-only, Reporting-Endpoints, nosniff, Referrer-Policy, Permissions-Policy, framing and cross-origin isolation headers were absent in the sampled response. No `X-Robots-Tag` was observed. Missing defensive headers are not proof of an exploitable vulnerability.
- HTML and hashed JS/CSS use `public, max-age=0, must-revalidate`. HTML revalidation is appropriate; hashed asset caching deserves a controlled follow-up.

Evidence: public-before/public-inspection.json. Reproduce into a **new** directory:

```sh
node docs/modernization/phase-g/inspect-public.mjs docs/modernization/phase-g/public-follow-up
```

The collector makes passive public GET requests and one ordinary browser navigation. It does not probe hidden administrative endpoints, inject events or inspect credentials. It records selected headers, hashes and URLs without query strings/fragments; a normal navigation could be counted by any existing monitoring.

## Monitoring inventory

| Capability | Repository evidence | Sampled production evidence | Still unknown |
|---|---|---|---|
| Vercel Web Analytics | Confirmed absent from dependencies/imports/scripts | No matching script/request observed | Dashboard enablement, prior data, plan and quotas |
| Vercel Speed Insights | Confirmed absent from dependencies/imports/scripts | No matching script/request observed | Dashboard tier, existing usage and data |
| Client error monitoring | No application integration found | No error-monitoring request observed | External platform/organization setup and owners |
| Sentry packages | Present only transitively through development-only Lighthouse | Not an application integration | Nothing inferred from package presence alone |
| Uptime monitoring | No repository integration/schedule found | Not ascertainable from public requests | External monitor, check frequency and alert recipients |
| Production logging | No client telemetry integration found | Public static responses and historical deployment metadata only | Build/access logs, retention, access and incident ownership |

`sentry-dependency-path.txt` proves the Lighthouse → @sentry/node development chain. Do not describe it as installed production error monitoring. Public absence of a client SDK cannot establish absence of account-level or external monitoring.

## Working deployment verifier

Added `scripts/ops/verify-deployment.mjs`. Build the intended release using its lockfile/runtime, then run manually:

```sh
npm run build
node scripts/ops/verify-deployment.mjs https://docketeer.io/ release-check.json
```

The output filename must not already exist. No scheduled Actions job, external service or new dependency is needed. The checker compares delivered title/metadata, JS/CSS entry URLs and bytes, robots/sitemap bytes and image bytes/MIME with local `dist`. It rejects non-200 responses and production noindex declarations. Comparison uses artifact identity, not an invented Git-SHA endpoint. HTML serialization differences alone do not fail; metadata and assets are compared instead. It is not a whole-site crawler or a monitor for future lazy-loaded assets.

Validation: local production preview passed **16/16** checks; the real old production correctly failed **13 of 15** checks (entry asset mismatch skips their byte fetches; production also checks noindex). These are expected release mismatches, not a broken checker. See local-release-check.json and production-release-check.json. Node syntax and Oxlint validation passed. Existing application tests were not rerun solely for documentation and this independent read-only script; the release's complete checks and six Lighthouse runs are preserved in ../seo/.

## Activation sequence and decisions

1. **Establish ownership.** Obtain an invitation to the existing Vercel project/team (or have its current maintainer perform the checks). Record the current canonical domain → deployment ID → repository/branch/SHA, root directory, framework, install/build commands, output directory and Node version. README names historical team/project `Docketeer-Website` / `docketeer-website-2024`; verify rather than creating a duplicate project. Do not share credentials. Confirm whether pushes to this fork/branch actually create previews; no current GitHub deployment record proves that.
2. **Validate the release configuration.** Repository intent: Node 24.x, npm 11.20.0, locked `npm ci`, `npm run build`, output `dist`, Vite. Vercel's exact available Node patch is platform-managed; check the actual build log rather than assuming the local patch. Current default branch is `master`; do not change it, production branch, framework preset or domains blindly.
3. **Inventory and select monitoring before installing.** Inspect existing dashboards/integrations, team-wide quotas, retention, ownership and costs. Prefer existing approved tools over duplicates. The project's account plan is unknown; do not infer it from the repository being open source or the user's GitHub Free tier.
4. **Add reviewed integrations in a separate small change.** For plain React/Vite, use each SDK's React entry point once at the application root. Web Analytics requires dashboard enablement followed by deployment; current Speed Insights docs describe package-driven collection and automatically supplied deployment routes. Confirm the intended tier/account before sending traffic. No SDKs were installed while account setup/cost/privacy could not be verified.
5. **Keep collection minimal.** Start with page views and the selected performance metrics, not custom event tracking, replay, fingerprints or contributor identity tracking. Strip URL queries/fragments from telemetry with documented SDK hooks where supported; test filtering with a harmless local fixture. Keep development/preview traffic out of production measurement. Record the actual fields, retention, sampling and responsible owner; review the project's appropriate privacy notice. Cookie-free claims do not by themselves establish legal compliance.
6. **Verify before promotion.** On the authorized deployment, verify SDK routes return executable JavaScript (not SPA HTML), events are accepted, dashboard data appears in the intended project, and there is only one copy of each script. Inspect outgoing payloads for unwanted data. Run existing browser/Lighthouse checks and compare added transfer/CPU cost against the pre-integration baseline. Do not label a package import a working integration.
7. **Operate and measure.** Record release/deployment/date markers; monitor p75 LCP/CLS/INP by device only if the selected data source actually exposes them and enough samples exist. Use a stated observation window and sample counts; report insufficient traffic or unavailable paid metrics as not measured. Neither Lighthouse nor an aggregate experience score substitutes for field p75 values.

## Conservative cost decision

Current public docs reviewed 2026-11-18 UTC; recheck the actual account before activation:

| Product | Public plan information | Recommendation |
|---|---|---|
| Web Analytics | Hobby includes 50,000 events/month; Pro is usage-priced ($0.03/1,000 events, subject to plan credits) | Confirm team plan/combined usage; no paid upgrade or Plus add-on by default |
| Speed Insights | Free tier across plans: 10,000 events over a rolling 30 days shared across the team; aggregate RES only | Suitable only if aggregate reporting meets the immediate need; review sampling and other projects' allocation |
| Speed Insights Plus | Pro: $10/project/month plus $0.65/10,000 events; exposes detailed CWV | Do not enable without an explicit budget decision; may be unnecessary if an existing approved RUM tool provides the metrics |

The free Speed Insights tier is **not** a promise of detailed free p75 Core Web Vitals. Public CrUX/PageSpeed field data may be an alternative when traffic is sufficient; absence of a dataset is not zero or a passing metric. No paid account changes, automatic trials or monitoring purchase occurred.

Sources: [Web Analytics setup](https://vercel.com/docs/analytics/quickstart), [Web Analytics pricing](https://vercel.com/docs/analytics/limits-and-pricing), [Speed Insights setup](https://vercel.com/docs/speed-insights/quickstart), [Speed Insights pricing](https://vercel.com/docs/speed-insights/limits-and-pricing). Documentation gives inconsistent Hobby pause/restart wording in different Analytics sections; confirm actual dashboard behavior instead of promising an exact reset time.

## Headers, caching and CSP

`headers-proposal.json` is a **reviewable proposal only**, not the live `vercel.json`. It proposes nosniff, strict-origin-when-cross-origin referrers, and disabling unused camera/microphone/geolocation features. Keep fullscreen available for the native demo videos. Validate MIME types and actual edge responses before applying it; local Vite preview does not prove Vercel applies a header rule.

A separate cache change should apply long-lived immutable caching only to verified content-hashed build assets. Preserve revalidation for HTML, robots, sitemap and stable-name icons; otherwise a future replacement can remain stale. Confirm CDN/platform precedence and release rollback behavior. Do not change wildcard CORS on public non-credentialed assets merely because it is broad.

For CSP, first map the modernized build's resource graph and monitoring routes. Current source uses local scripts/styles/fonts/media, Canvas styling, a React inline figure style and a navigation CSS custom property. Test inline-style compatibility; do not paste a strict policy that breaks layout. Keep unknown framing/embedding requirements explicit. Use a staged report-only policy with a real approved collector, capped/scrubbed reports and an owner; the repository has no reporting endpoint today. Do not use a fake collector URL or claim console-only report-only mode is production observability.

A static-build hash-based script policy with appropriate integrity metadata is preferable to introducing SSR solely for per-request nonces. Account for dynamic monitoring loaders, then assess strict-dynamic and Trusted Types through actual browser tests before enforcement. Do not invent a fixed nonce or use broad domains as the final XSS defense. Sampled reports can contain URLs or inline text: scrub sensitive values and avoid collecting unnecessary code samples. Promote only after representative traffic and all demos/navigation pass. Leave HSTS scope/preload, COOP/COEP/CORP and framing enforcement unchanged until their operational impact is understood; no SharedArrayBuffer requirement justifies cross-origin isolation here.

Source: [Vercel header configuration](https://vercel.com/docs/project-configuration/vercel-json#headers). Modern Web Guidance `security`: “Use report-only headers to dry-run policies without enforcement.” `privacy`: “collect data at the lowest granularity necessary.” These inform the proposal and activation plan; no security/analytics headers are claimed deployed.

## Error, uptime and incident handoff

First ask which tools already exist. For this static public site, begin with one owner-controlled availability check of the canonical HTTPS URL, expected page content and certificate health; avoid GitHub Actions cron jobs and duplicate monitors. Select cadence, alert destination and escalation owner with the maintainer. The verifier above is an on-demand release check, not continuous uptime monitoring.

If production errors warrant an SDK, choose one approved error tool with sampling/rate limits, URL scrubbing and no session replay by default. Upload private source maps only to that tool if useful; do not publish maps or add a backend solely for a dashboard. Build/access logs do not automatically capture client-side JavaScript exceptions.

Before deployment, record the known-good **current** Vercel deployment ID and rollback operator. A failure in release verification, broken navigation/media or new application errors should stop promotion or trigger the maintainer's approved rollback. Confirm the alias and smoke checks after rollback. Do not assume the old public GitHub deployment ID is still a usable rollback target.

## Completion criteria still outstanding

- Authorized owner/project/alias and deployment SHA confirmed.
- Actual runtime/build settings and monitoring plan/quotas verified.
- Approved SDKs deployed and observed sending minimal data to the correct dashboard.
- Header/cache/CSP changes tested through the real host and any collector.
- Alert recipient, retention, review cadence and rollback responsibility assigned.
- Real-user data collected over a stated adequate window, or honestly marked unavailable.

Until these are satisfied, Phase G is **prepared, not complete**. The single next external step is access to the existing Vercel project or participation by its current maintainer, not registrar access.
