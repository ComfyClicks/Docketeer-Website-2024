# Teammate checklist — Vercel Hobby activation

This can be performed by the current account owner. Do not share credentials or upgrade to Pro merely to invite another maintainer. Repository changes are prepared; no deployment or dashboard action below has been performed by the coding agent.

## 1. Confirm the existing project and rollback target

Open the project that currently serves **https://docketeer.io/**. Historical README names `Docketeer-Website` / `docketeer-website-2024`; confirm the actual account/project rather than creating a replacement. Record the current production deployment URL/ID, connected GitHub repository, production branch, deployed commit and a working rollback target. The modernization branch is `feat/website-modernization` in `ComfyClicks/Docketeer-Website-2024`; its current default branch is `master`. Do not assume a push to the fork automatically deploys the actual project.

Confirm Vite, the correct repository root, output directory `dist`, install `npm ci`, build `npm run build`, and Node 24.x with compatible npm 11. Project settings may override repository expectations; inspect the build log. Do not paste credentials or private environment values into the handoff record.

## 2. Review/preview the website with monitoring off

Keep both switches unset or false initially. Follow the project's normal review/merge/deploy process; this checklist does not authorize an unreviewed production merge. Preview hosting stays on Vercel and uses the normal preview URL. Monitoring is deliberately disabled on noncanonical origins.

Check homepage, menu, every demo, playback/stop, animation controls, keyboard focus, 320px reflow, missing images and console errors. Check response headers, canonical/social metadata, `/robots.txt`, `/sitemap.xml` and the social PNG. The local browser suite tests headers through an adapter; verify the actual Vercel responses before promotion.

Build the same commit with the same environment-switch values locally and compare the preview/release with:

```sh
npm ci
npm run build
node scripts/ops/verify-deployment.mjs https://docketeer.io/ release-check.json
```

Use the preview origin in place of the public URL when testing a preview. The read-only verifier needs a fresh output filename and accepts a bare origin; protected previews require owner-side inspection if the CLI cannot read them. It compares artifacts with local dist, so different build flags can correctly cause a mismatch. It does not bypass deployment protection.

## 3. Activate Web Analytics

In the existing project, open Web Analytics and enable it if not already enabled. Confirm Hobby quota usage across the account/team and whether any other integration already collects the same data. Do not start a paid trial or Plus add-on.

Under Project Settings → Environment Variables, add **only to Production**:

```text
VITE_ENABLE_WEB_ANALYTICS=true
```

This is a public build switch, not a secret. Vite reads it at build time, so redeploy after changing it. A saved variable without a new build does not activate the integration. Verify that the deployed canonical domain loads one Analytics script and sends the intended page-view data to this project. Do not manufacture custom events or repeatedly generate traffic to inflate the dashboard.

## 4. Activate free Speed Insights separately

Check the existing project's Speed Insights tier before enabling. Stay on the free tier; do not enable Plus. Add **only to Production**:

```text
VITE_ENABLE_SPEED_INSIGHTS=true
```

Redeploy. The code requests 10% sampling and disables soft-navigation metrics. Check one loader, successful collection and data in the correct dashboard. Low traffic, sampling, blocking or DNT/GPC can mean no immediate data; do not remove privacy controls or fake measurements to make a chart appear.

Public docs reviewed for this phase describe 10,000 free Speed Insights events over a rolling 30 days shared across the team and aggregate RES reporting. Detailed Core Web Vitals are a Plus feature. Web Analytics Hobby has a separate included allowance. Confirm the current account UI; do not equate a free aggregate score with available p75 LCP/CLS/INP. No paid upgrade is required by this implementation.

## 5. Validate real delivery and overhead

The installed packages default to `/_vercel/insights/script.js` and `/_vercel/speed-insights/script.js`; Vercel can provide configured intake paths. Check the actual scripts/network panel, not just a hard-coded URL. Scripts must return JavaScript rather than an HTML fallback, and requests must go to the intended project. If unavailable, turn off the corresponding switch and redeploy while resolving setup.

Inspect a normal page view's payload: only the public homepage should be represented, with no query/fragment or unknown paths. Verify the actual provider's additional fields/referrer handling and the appropriate project privacy notice/retention. The local fixture proves our beforeSend callback, not all internals of Vercel's remotely served script. Confirm requests remain absent with supported DNT/GPC preferences and on previews.

Repeat the six-run performance method on the deployed build and record added script requests, compressed transfer, decoded resources and CPU impact. Default local scores were measured with switches off; do not call them an enabled-production benchmark. Capture a dated export/screenshot of actual dashboard ingestion, available metrics and sample counts. Report unavailable detailed field metrics as **not measured**.

## 6. Assign ownership and close the handoff

Record the operational owner, backup contact, existing uptime/error tool (or explicitly none), alert destination, retention/review cadence and rollback operator. An existing external uptime check can monitor canonical HTTPS availability/content without GitHub Actions schedules. Do not create a paid monitor or error-reporting account without a deliberate owner decision.

If the release breaks navigation/media, changes the canonical alias unexpectedly or introduces application errors, stop promotion or restore the recorded known-good deployment. For a monitoring-only issue, unset/false the relevant switch and redeploy; if the site itself is broken, use the known-good deployment rollback. Confirm public headers/metadata/assets and functional smoke checks afterward.

Return a concise record containing: project/deployment ID and SHA, settings confirmation, monitoring enabled/disabled and tier, observed data date/sample counts, actual headers and release-check result, alert/rollback owner. Do not include credentials. That evidence completes **production acceptance** of Phase G; repository implementation alone cannot establish it.
