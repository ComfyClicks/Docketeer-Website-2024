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

Run `npm run lint`, `npm run typecheck`, `npm test -- --runInBand`, and `npm run build` before review. Preview the production build with `npm run preview -- --host 127.0.0.1`. Keep development and preview servers on loopback. See the [Phase B report](docs/modernization/phase-b/README.md) for the updated dependency audit. Do not run `npm audit fix` as part of setup.

TypeScript **7.0.2** performs compiler checks; Vite builds the browser application. Jest uses Babel for test transpilation, and Oxlint checks TypeScript syntax and React Hooks without depending on the legacy TypeScript compiler API. `npm run build` always runs the compiler first.

Baseline evidence is preserved in [docs/modernization/00-baseline.md](docs/modernization/00-baseline.md). Phase A results are recorded separately in [docs/modernization/phase-a/README.md](docs/modernization/phase-a/README.md). Local changes do not update production until an authorized deployment.

## Deployment Notes for Future Teams
Before you start, double check to see if `the domain is expiring`.

We renewed the domain on Google Domain Registrar for 1 year (use your stipend).

1. Log in with `Docketeer-website` GitHub account from credentials sheet.
2. Create your Team Feature Branch (`git checkout -b team19`)
3. Commit your Changes. (`git commit -m '<commit message>'`)
4. Push to that Branch. (`git push origin team18`)
5. Open a Pull Request to master branch. --> Follow common GitFlow Practice!
6. Check on Vercel:  
```
Dashboard > Docketeer-Website team > docketeer-website-2024 project
```
Inspect the links to see if it's updated (should be automatically if not wait a few minutes)

If you have questions, contact `Quan & Andy or any of team 18` through our LinkedIn! (Info in credentials sheet)
