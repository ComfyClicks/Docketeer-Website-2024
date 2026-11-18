# Docketeer-Extension Main Website 2024
This is a GitHub Repo to maintain and update Docketeer main website throughout the year. We team 18 has made it super easy for future team to deploy.

In the past, the 'tradition' is to fork the previous team repo and re-deploy your team forked repo onto Vercel and it takes too much times.

## Local development and validation

Use Node **24.22.1** (`.nvmrc`) and npm **11.20.0** (`packageManager`). With nvm installed:

```sh
nvm install
nvm use
npm install --global npm@11.20.0
npm ci
npm run dev -- --host 127.0.0.1
```

Run `npm run lint`, `npm run typecheck`, `npm run typecheck:tests`, `npm test`, and `npm run build` before review. Preview the production build with `npm run preview -- --host 127.0.0.1`. Keep development and preview servers on loopback. See the [test-tooling report](docs/modernization/vitest-migration/README.md) for the current dependency audit. Do not run `npm audit fix` as part of setup.

TypeScript **7.0.2** performs compiler checks; Vite builds the browser application. Vitest **5.1.0** uses the Vite pipeline for tests without a Babel transform or jest-dom adapter. Oxlint checks TypeScript syntax and React Hooks without depending on the legacy TypeScript compiler API. `npm run build` always runs the application compiler first; `npm run typecheck:tests` checks the test code and configuration separately. Use `npm run test:watch` for interactive testing.

Baseline evidence is preserved in [docs/modernization/00-baseline.md](docs/modernization/00-baseline.md). Phase A results are recorded separately in [docs/modernization/phase-a/README.md](docs/modernization/phase-a/README.md). Local changes do not update production until an authorized deployment.

## Conservative CI and browser checks

`npm run check` runs lint, the production build, test type checking and Vitest. See [the CI runbook](docs/modernization/phase-e/README.md) for the complete workflow, security exception and validation record.

Browser tools are development dependencies only. Install Chromium once with `npx --no-install playwright install chromium`, then run:

```sh
npm run build
npm run test:browser
npm run test:performance
```

Automatic GitHub checks run only for relevant pull requests targeting `master`. Browser/accessibility and performance suites require manual dispatch. There are no scheduled runs, push-trigger duplicates, browser matrices or dependency bots. Successful reports stay in job logs/summary; failed manual checks retain diagnostics for three days. Local diagnostics go to ignored directories rather than replacing historical baseline evidence.

## Production handoff and release verification

See the [Phase G runbook](docs/modernization/phase-g/README.md) for deployment ownership, monitoring costs, activation checks and rollback responsibilities. After building the intended release, run `node scripts/ops/verify-deployment.mjs https://docketeer.io/ release-check.json` to compare the public site with local build artifacts. A nonzero exit means the release does not match or a check could not complete; this command only reads public responses and does not deploy. Use a fresh output filename. No scheduled CI runs are added.

## Deployment ownership

The existing Docketeer website is managed by a teammate on Vercel Hobby. Follow the [teammate activation checklist](docs/modernization/phase-g/teammate-handoff.md) to verify the connected repository, deploy a reviewed release, activate optional monitoring and record rollback ownership. Do not assume a fork or feature-branch push changes production. Hobby preview sharing does not grant project-management access; the owner can perform the dashboard steps without an account upgrade or sharing credentials.

Monitoring defaults to off. Copy `.env.example` only when configuring a local environment; the owner sets the chosen `VITE_ENABLE_WEB_ANALYTICS` and `VITE_ENABLE_SPEED_INSIGHTS` switches in Vercel **Production** after verifying the corresponding service. Changes require a new build/deployment. The application never initializes monitoring on local or preview origins.
