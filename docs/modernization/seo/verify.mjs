// Verify HTTP responses and metadata without executing application JavaScript.
import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
import { preview } from 'vite';
const server = await preview({ preview: { host: '127.0.0.1', port: 4176, strictPort: true, open: false } });
const origin = 'http://127.0.0.1:4176';
const canonical = 'https://docketeer.io/';
try {
  const response = await fetch(origin);
  assert.equal(response.status, 200);
  const html = await response.text();
  const document = new JSDOM(html).window.document;
  const value = selector => {
    const elements = document.head.querySelectorAll(selector);
    assert.equal(elements.length, 1, `Expected one ${selector} in the delivered head`);
    return elements[0].getAttribute('content');
  };
  assert.match(document.title, /Docketeer.*Docker.*Kubernetes/);
  const description = value('meta[name="description"]');
  assert.ok(description.length > 0);
  assert.equal(document.head.querySelectorAll('link[rel="canonical"]').length, 1);
  assert.equal(document.head.querySelector('link[rel="canonical"]').href, canonical);
  assert.equal(value('meta[property="og:url"]'), canonical);
  assert.equal(value('meta[property="og:type"]'), 'website');
  assert.equal(value('meta[property="og:site_name"]'), 'Docketeer');
  for (const [key, expected] of [['title', document.title], ['description', description]]) {
    assert.equal(value(`meta[property="og:${key}"]`), expected);
    assert.equal(value(`meta[name="twitter:${key}"]`), expected);
  }
  assert.equal(value('meta[name="twitter:card"]'), 'summary');
  const image = new URL(value('meta[property="og:image"]'));
  assert.equal(image.origin, new URL(canonical).origin);
  assert.equal(value('meta[name="twitter:image"]'), image.href);
  assert.equal(value('meta[property="og:image:type"]'), 'image/png');
  assert.ok(value('meta[property="og:image:alt"]').length > 0);
  assert.equal(value('meta[name="twitter:image:alt"]'), value('meta[property="og:image:alt"]'));
  const imageResponse = await fetch(`${origin}${image.pathname}`);
  assert.equal(imageResponse.status, 200);
  assert.match(imageResponse.headers.get('content-type'), /^image\/png/);
  const bytes = Buffer.from(await imageResponse.arrayBuffer());
  assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
  const dimensions = [bytes.readUInt32BE(16), bytes.readUInt32BE(20)];
  assert.deepEqual(dimensions, [512, 512]);
  assert.equal(value('meta[property="og:image:width"]'), String(dimensions[0]));
  assert.equal(value('meta[property="og:image:height"]'), String(dimensions[1]));
  const robotsResponse = await fetch(`${origin}/robots.txt`);
  assert.equal(robotsResponse.status, 200);
  assert.match(robotsResponse.headers.get('content-type'), /^text\/plain/);
  const robots = await robotsResponse.text();
  assert.match(robots, /^User-agent: \*\nAllow: \/\n/m);
  assert.match(robots, /Sitemap: https:\/\/docketeer\.io\/sitemap\.xml/);
  assert.doesNotMatch(robots, /<!doctype|<html/i);
  const sitemapResponse = await fetch(`${origin}/sitemap.xml`);
  assert.equal(sitemapResponse.status, 200);
  assert.match(sitemapResponse.headers.get('content-type'), /xml/);
  const sitemap = new JSDOM(await sitemapResponse.text(), { contentType: 'application/xml' }).window.document;
  assert.equal(sitemap.documentElement.namespaceURI, 'http://www.sitemaps.org/schemas/sitemap/0.9');
  assert.deepEqual([...sitemap.querySelectorAll('loc')].map(element => element.textContent), [canonical]);
  const results = { date: new Date().toISOString(), result: 'passed', url: origin, canonical, title: document.title,
    description, image: image.href, imageDimensions: dimensions, imageBytes: bytes.length,
    method: 'Built Vite preview; HTTP responses parsed with JSDOM, scripts not executed. Image decoded via PNG header. No live deployment or social-platform preview claim.' };
  await writeFile('docs/modernization/seo/verification.json', JSON.stringify(results, null, 2) + '\n');
  console.log(results);
} finally {
  await new Promise(resolve => server.httpServer.close(resolve));
}
