// Local test adapter for the currently configured global Vercel headers.
// Does not emulate Vercel routing, CDN caching or account-level overrides.
import { readFile } from 'node:fs/promises';
import { preview } from 'vite';
const config = JSON.parse(await readFile(new URL('../../vercel.json', import.meta.url), 'utf8'));
if (config.headers.some(rule => rule.source !== '/(.*)' || rule.has || rule.missing)) {
  throw new Error('Update the local header adapter before testing conditional/path-specific rules');
}
const headers = Object.fromEntries(config.headers.flatMap(rule => rule.headers.map(({ key, value }) => [key, value])));
const server = await preview({ preview: { host: '127.0.0.1', port: 4173, strictPort: true, open: false, headers } });
console.log('Local production preview with global response headers: http://127.0.0.1:4173');
for (const signal of ['SIGINT', 'SIGTERM']) process.once(signal, () => server.httpServer.close(() => process.exit(0)));
