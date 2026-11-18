# Manual performance report

2026-11-18T01:45:46.093Z; Node v24.22.1; Chromium 159.0.8154.6; Lighthouse 13.6.0.

Local Vite production preview. Three cold Lighthouse navigations per device, serial; default simulated throttling. Independent per-metric medians. Scores/timing are advisory until a CI-runner baseline exists. Separate unthrottled network capture: fresh context, cache disabled, DPR 1, networkidle + 2.5 seconds, no scrolling. Bytes are decoded resource bodies, not transfer or executed bytes.

| Profile | Performance | Accessibility | Best Practices | SEO | FCP ms | LCP ms | CLS | TBT ms | Speed Index ms |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| mobile | 100 | 100 | 100 | 100 | 755 | 1878 | 0.0008597091502312617 | 46 | 755 |
| desktop | 100 | 100 | 100 | 100 | 209 | 465 | 0.0003802190544153062 | 0 | 233 |

| Profile | Initial decoded JS bytes | JS budget bytes | Initial GIF/MP4 requests |
|---|---:|---:|---:|
| mobile | 284587 | 350000 | 0 |
| desktop | 284587 | 350000 | 0 |

Deterministic failures: 0


See summary.json and individual reports for configurations and detailed resource accounting.
