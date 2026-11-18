# SEO and social-sharing metadata

Implemented after Phase F commit `9356b3f74f2abecdf75fbd028e7b1c6af769f40b`, on 2026-11-17 America/New_York (2026-11-18 UTC). This is a local implementation; nothing has been deployed or submitted to search engines/social platforms.

## Changes

- A descriptive HTML title and meta description summarize the existing Docker/Kubernetes management functionality.
- Canonical and Open Graph URL consistently use `https://docketeer.io/`, the public website identified in the repository audit and rechecked as HTTP 200. A request to `www.docketeer.io` failed DNS resolution in this environment; no registrar or DNS changes were attempted.
- Open Graph website/title/description/site name/image tags and X/Twitter summary-card metadata are present directly in the HTML head. They do not depend on React execution or a new package.
- Reuse the existing 512×512 PNG brand mark at `/android-chrome-512x512.png`, with an absolute HTTPS URL, dimensions, MIME type and descriptive image alternative text. The square image uses the summary card format rather than claiming a wide banner. No invented social account handle or owner-verification token is included.
- `public/robots.txt` serves crawler directives rather than the SPA HTML fallback. It permits crawling and references the sitemap.
- `public/sitemap.xml` lists the sole page, `/`. Fragment links such as `#features` are sections of that page, not separate sitemap entries. No fabricated modification dates are included.

The Phase F Lighthouse reports failed exactly the description and robots.txt SEO audits (score 83). Metadata and crawl files address those failures. Social-sharing tags are a separate user-facing improvement, not an additional Lighthouse score claim.

## Verification

Use the locked repository environment (Node 24/npm 11):

```sh
npm run check
node docs/modernization/seo/verify.mjs
npm run test:performance
```

`verify.mjs` owns a temporary local Vite production preview on 4176 and checks delivered HTML without executing application scripts, unique/consistent metadata, canonical URL, image HTTP status/type/PNG dimensions, plain-text robots response and parsed sitemap XML. It writes verification.json; archive this file before remeasuring a later milestone.

The existing performance command owns port 4175 and runs three cold Lighthouse navigations per mobile/desktop profile serially. Raw JSON/HTML reports go into a fresh ignored reports/performance directory. Compact run metrics and medians are preserved here after completion. Existing Phase F and original baseline evidence is unchanged. No extra hosted CI jobs or dependencies were introduced.

## Deployment and account access

DNS/registrar access is not required to edit or serve these files from the existing site. An authorized Vercel/project maintainer still needs to deploy this branch through the normal reviewed process. Canonical metadata is a hint, not an HTTP redirect; it does not fix an unavailable www hostname.

After deployment, check the actual HTML, `/robots.txt`, `/sitemap.xml` and social image URL over public HTTPS. Confirm no deployment-level `X-Robots-Tag: noindex`, authentication or crawler restrictions interfere. Ask social platforms to refresh cached previews using their inspection tools; local metadata verification cannot prove a live social platform's layout or cache state. No social posts or external verification requests were made here.

If Search Console access is desired, a URL-prefix property can use Google's supplied HTML verification tag/file after authorized deployment, without DNS access. A Domain property requires DNS verification. Do not add a guessed verification token; alternatively ask the current verified owner to grant access. Search Console verification is not required for the metadata or Lighthouse checks.

Sources: [Open Graph protocol](https://ogp.me/), [Lighthouse description audit](https://developer.chrome.com/docs/lighthouse/seo/meta-description), [Lighthouse robots audit](https://developer.chrome.com/docs/lighthouse/seo/invalid-robots-txt), [Google ownership verification](https://support.google.com/webmasters/answer/9008080).

Modern Web Guidance searches for social metadata and meta descriptions found no matching topic-specific guide; the implementation follows the actual audit failures and protocol documentation. The legacy X card-documentation URL redirects to the general developer portal; actual platform rendering remains a post-deployment check.

## Measured outcome

- `npm run check`: passed build, lint, application/test types, 10 Vitest tests and nine CI policy tests. See check.txt.
- `node docs/modernization/seo/verify.mjs`: passed. The actual built HTTP responses expose metadata without JavaScript; sharing image is 512×512 PNG, 27,851 bytes. See verification.json.
- Six Lighthouse runs (three mobile, three desktop): **SEO 100 in every run**, versus 83 in Phase F. Median Performance / Accessibility / Best Practices / SEO scores: **100 / 100 / 100 / 100** for both profiles. Node 24.22.1, Chromium 159.0.8154.6 and Lighthouse 13.6.0; same versions as Phase F.
- Initial decoded JavaScript remains 284,587 bytes in both profiles, with zero initial GIF/MP4 requests; deterministic performance safeguards passed. No claim that metadata improves performance timings.
- Compact metrics/configurations: performance-validation.json and performance-summary.md. Full JSON/HTML/log reports remain locally under `reports/performance/2026-11-18T01-45-46.092Z-Lamxvw/` (ignored).

These scores are local lab results. Actual search indexing, rankings and social preview rendering are not verified until authorized production deployment and recrawling.
