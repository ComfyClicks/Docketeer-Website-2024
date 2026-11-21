# Contributor agent guidance

This repository contains Docketeer’s public website, not the Docker/Kubernetes application. Read `README.md` for setup, commands and deployment instructions.

- Inspect Git status before editing. Preserve existing work; do not discard unrelated changes.
- Keep changes focused, preserve branding and content, and favor existing browser/framework capabilities over new dependencies.
- Preserve keyboard access, visible focus, responsive layouts and reduced-motion support. Content must remain usable if decorative animation fails.
- Use the Node and npm versions specified in `package.json`. Run `npm run check` and `npm run audit:ci` for implementation changes. For UI changes, also build and run the relevant browser tests. Report failures and unavailable checks honestly; do not weaken assertions to obtain passing results.
- Keep contributor instructions in `README.md` and the refactor summary in `docs/2026-REFACTOR.md`. Avoid additional audit documents, implementation-phase narratives and portfolio/resume copy.
- Store detailed audit evidence outside the repository. Generated reports belong in ignored output directories; do not track them.
- Label measurements with the source state, environment and method. Distinguish historical results, current local laboratory results and production/field data. Remeasure after relevant changes before claiming improvements.
- Do not commit, push, merge, deploy or modify hosted settings unless the user authorizes those actions.
