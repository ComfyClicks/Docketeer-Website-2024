# Phase E — Conservative CI safeguards

Implemented locally on 2026-11-17, after Phase D. No commit, push, workflow dispatch, deployment, branch protection, billing or other repository/account setting change is part of this work. GitHub-hosted execution is not yet verified; local validation is recorded below.

## Automatic checks and cost controls

One job on the standard `ubuntu-24.04` runner runs only on relevant pull requests into `master`. It performs locked installation, Oxlint, application typechecking/production build, test/config typechecking, Vitest, and a reviewed dependency audit policy. There are no push triggers, scheduled runs, dependency-update bots, OS matrices or automated browser jobs. Documentation-only changes outside executable paths do not trigger it. If branch protection is later enabled, account for skipped path-filtered workflows rather than requiring a check that will remain pending.

Read-only contents permission and checkout without persisted credentials limit workflow access. Actions are pinned to official full commit SHAs. Node follows `.nvmrc`; npm is explicitly pinned. No dependency or browser cache is uploaded. A repository-specific concurrency group permits one run at a time and cancels older runs when a new run starts, including manual runs. Other repositories' concurrency groups are unchanged. Jobs time out after 20 minutes; browser tests have their own shorter timeout. Cancellation cannot guarantee priority across other repositories, but this project requests only one runner.

## Manual browser and performance suites

The workflow dispatch input selects `quick` (default), `browser`, or `performance`. Every selection includes quick checks. Browser and performance suites are separate manual choices and run Chromium only. Manual dispatch normally requires the workflow to exist on the default branch; branch execution and hosted results remain follow-ups after authorized publishing. Local commands work now:

```sh
npm ci --no-audit --no-fund
npm run check
npm run audit:ci
npx --no-install playwright install chromium
npm run test:browser
npm run test:performance
```

Run these with Node/npm versions from the repository. `npm run check` creates the production build used by both browser suites. Linux CI additionally installs Chromium system dependencies with Playwright's `--with-deps` option. No Vercel credentials or production access are needed.

Playwright uses built Vite preview on loopback with one worker, no retries and no reused server, avoiding accidental testing of stale development content. Tests cover keyboard navigation/focus, mobile disclosure, all eight demo selections on desktop/mobile, user-triggered GIF requests and Stop/reset behavior, native video playback, image loading, 320px reflow, axe, Canvas motion and reduced-motion/fallback behavior. Failure traces/screenshots preserve diagnostics. Automated checks do not replace screen-reader, physical-device, real zoom or cross-browser acceptance. Existing incomplete contrast/media reviews and missing demo transcripts remain documented in Phase D.

Performance runs use separate preview, Chromium and Lighthouse versions from the lockfile, with three mobile and three desktop runs executed serially. Scores and timings are advisory: GitHub runner timing has no established baseline yet. Hard safeguards check initial GIF/MP4 requests and decoded initial JavaScript <=350,000 bytes (Phase D reference 283,976 bytes). This is decoded resource size, not gzip transfer or executed bytes. Timing tolerances should be proposed only after repeated hosted runs. This phase does not replace Phase D measurements or claim newer-tool scores are directly comparable.

## Evidence and storage

Local reports go into ignored `test-results/`, `playwright-report/` and `reports/`. Historical audit evidence remains under `docs/modernization/` unchanged. Successful manual runs retain ordinary job logs/step summaries, not uploaded report bundles. Failed manual runs upload only test/performance diagnostics with three-day retention. The workflow never uploads original recordings, build output or historical baseline archives.

New test tools are development dependencies: `@playwright/test`, `@axe-core/playwright`, and `lighthouse`. They are not imported into production. The manifest/lockfile remain authoritative; pinned tools need deliberate periodic review rather than unbounded automatic update runs. Removing the obsolete lockfile ignore rule makes intended lockfile changes visible; the unrelated `package-lock 2.json` is preserved untouched.

## Security policy

See [dependency triage](dependency-triage.md). The known picomatch advisory has no published patched release at investigation time. An exact, time-limited development-only exception permits its affected chain until 2026-12-17 at 00:00 UTC; new high/critical development advisories and any reported production vulnerability must fail. Audit transport/parser failures must fail rather than appear clean. No forced downgrade or global suppression is accepted. Revisit the exception before expiry and whenever a compatible patch is published.

## Validation

- Isolated `npm ci --no-audit --no-fund`: passed in 6.05 seconds, lockfile unchanged; see clean-install.json. This is local installation time, not a hosted-run estimate.
- `npm run check`: production build, Oxlint, application/test/config types, 10 Vitest tests passed. Final Node policy tests total nine, including negative budget/audit cases.
- Actionlint 1.7.12 and YAML parsing: passed for the workflow. Actionlint was run as an external Go tool, not added as a project dependency.
- `npm run audit:ci`: passed with zero production findings and exactly seven high development entries covered by the single documented advisory exception. The exception is not a vulnerability fix.
- Browser suite: eight passed, zero retries/skips, 38.4 seconds locally; see browser-results.txt. Deliberate console-error and missing-image probes failed as expected (browser-negative-proof.txt), then the temporary probe test was removed.
- The new axe check caught a genuine label-content-name-mismatch: visible “Play demonstration” differed from “Play Containers demonstration.” The final button derives its accessible name directly from visible text, now including the demo title, with redundant aria-label removed. See detected-accessibility-regression.json. Modern Web Guidance `accessibility`: “Do include a control's visible text in its accessible name.” The full browser suite passed after this fix. Phase D reports remain historical evidence of the previous implementation/tool configuration, not a claim that this issue never existed.
- All 91 original baseline hashes verified; the unrelated package-lock duplicate remains untouched.
- Full manual performance execution: passed, six serial Lighthouse runs plus two resource captures. Initial decoded JavaScript was 283,929 bytes in each profile, within the 350,000-byte budget, with zero initial GIF/MP4 requests. See performance-validation.json. Chromium 159.0.8154.6 and Lighthouse 13.6.0 differ from Phase D; these results validate the new command and are not a directly comparable improvement claim. The resource safeguard also rejects unmeasurable cross-origin scripts rather than silently excluding them; final policy tests cover that case.

No hosted execution or actual GitHub runner duration/cost is claimed from local tests. No workflow was triggered remotely. The first authorized hosted run must confirm Linux dependencies and dispatch behavior.
