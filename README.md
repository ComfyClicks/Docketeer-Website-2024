# Docketeer Website

The public website for [Docketeer](https://docketeer.io/), an open-source Docker and Kubernetes management application. This repository contains the marketing website, not the application itself.

See [2026 Refactor](docs/2026-REFACTOR.md) for the modernization summary and measured results.

## Local development

Use Node.js **26.x** and npm **11.20.0**, as specified in `package.json`. After installing Node.js:

```sh
npm install --global npm@11.20.0
npm ci
npm run dev -- --host 127.0.0.1
```

Open the URL printed by Vite. Preview a production build with `npm run build`, then `npm run preview -- --host 127.0.0.1`. Keep local servers on loopback.

## Project structure

- `src/components/`: page sections, shared components and content data.
- `src/assets/`: source images and media, plus optimized variants.
- `public/`: static files, including crawl resources and social-sharing artwork.
- `tests/unit/`: unit and component tests.
- `tests/e2e/`: Playwright browser and accessibility checks.
- `scripts/`: CI policies, media processing and deployment verification.
- `docs/2026-REFACTOR.md`: refactor rationale and results.

## Validation and CI

Before submitting changes, run:

```sh
npm run check
npm run audit:ci
```

`check` runs Oxlint, the TypeScript checks and production build, Vitest, and CI-policy tests. Use `npm run test:watch` during development. Vitest uses the Vite pipeline without a separate Babel test transform.

For browser/accessibility checks and performance measurements, install Chromium once, then build before testing:

```sh
npx --no-install playwright install chromium
npm run build
npm run test:browser
npm run test:performance
```

Automatic GitHub Actions checks run for relevant pull requests targeting `master`. Additional browser or performance checks are available through **Actions → Website checks → Run workflow**. These heavier checks run manually; there are no scheduled runs. Generated reports remain in ignored `reports/`, `playwright-report/` and `test-results/` directories.

Dependency audit rules are in `scripts/ci/audit.mjs`, with regression tests alongside it. The policy rejects production vulnerabilities and unexpected development advisories. Its narrow historical Picomatch exception expires December 17, 2026; review the advisory and dependency paths before changing or extending it. Do not run `npm audit fix` as part of setup.

## Updating media

Update source assets and regenerate their optimized variants rather than editing generated files alone. From the repository root:

```sh
python3 scripts/media/optimize-static.py
```

This regenerates portraits and logos using ImageMagick (`magick`) and `cwebp` on PATH. Inspect the resulting crops and review the asset diff.

Demo conversion is a separate macOS workflow requiring Python 3, Swift command-line tools, ImageMagick and `cwebp`:

```sh
python3 scripts/media/convert-demos.py
python3 scripts/media/verify-demos.py
```

The verification script requires ImageMagick (`magick`) on PATH. Conversion regenerates demo outputs and `reports/media/conversion.json`, which verification consumes. Review posters and playback before accepting regenerated media; some legacy GIFs are intentionally preserved for visual fidelity.

Time-Series and Configurations use 960 × 540 H.264 encodes of their original GIFs. To regenerate the two clips, use FFmpeg with libx264:

```sh
ffmpeg -min_delay 1 -ignore_loop 1 -i src/assets/demos/imageTab3-new.gif -an \
  -vf 'pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=0x0c1020,scale=960:540:flags=lanczos:out_color_matrix=bt709,format=yuv420p,fps=30' \
  -filter_threads 2 -c:v libx264 -preset slow -crf 23 -g 60 -threads 2 \
  -colorspace bt709 -color_primaries bt709 -color_trc bt709 -color_range tv \
  -movflags +faststart src/assets/demos/optimized/recordings/time-series-540p-h264.mp4

ffmpeg -nostdin -v error -min_delay 1 -ignore_loop 1 -i src/assets/demos/configuration.gif -an \
  -vf 'scale=960:540:force_original_aspect_ratio=decrease:force_divisible_by=2:flags=lanczos:out_color_matrix=bt709,format=yuv420p,pad=960:540:(ow-iw)/2:(oh-ih)/2:color=0x0c1020,fps=30' \
  -filter_threads 2 -c:v libx264 -preset slow -crf 23 -g 60 -threads 2 -colorspace bt709 -color_primaries bt709 -color_trc bt709 -color_range tv -movflags +faststart src/assets/demos/optimized/recordings/configurations-tight-540p-h264.mp4
```

## Deployment

The existing Vercel Hobby project is `docketeer-2026/docketeer-website-2024`, connected to this repository with production branch `master`. Build settings are Vite, repository root, `npm run build`, and output directory `dist`. The Node.js version for new builds comes from `engines.node` in `package.json`. A feature-branch push does not update production.

1. Run validation and create a preview deployment for the intended branch or commit in the existing Vercel project.
2. Confirm its commit and build logs. Check mobile navigation, keyboard focus, feature cards, demo playback, images and browser console errors.
3. Record the current production deployment as a rollback target before releasing. Merge the reviewed changes into `master` through the normal review process, then verify that the resulting production deployment serves `docketeer.io`.
4. Compare the served release with a local build of the same source and environment settings:

   ```sh
   mkdir -p reports/release
   node scripts/ops/verify-deployment.mjs https://docketeer.io/ reports/release/check.json
   ```

The verifier reads public responses and checks metadata, entry assets, crawl files and security headers; it does not deploy. Use a fresh output filename for each run. If verification fails or important behavior regresses, restore the recorded known-good deployment through Vercel’s rollback controls and verify the public site again.

### Optional monitoring

Monitoring defaults to off. After verifying the corresponding free-tier services in the existing Vercel project, set the chosen `VITE_ENABLE_WEB_ANALYTICS` and `VITE_ENABLE_SPEED_INSIGHTS` switches to `true` in **Production**, then rebuild/deploy. See `.env.example` for the supported switches.

Monitoring does not initialize on local or preview origins and respects supported privacy preferences. Verify actual script delivery, payloads and dashboard ingestion after activation. To disable an integration, set its switch to `false` and redeploy. Enabling source integrations alone does not prove production monitoring is working.
