// Post-deploy check against the live site: `npm run verify:live` (or VERIFY_ORIGIN=https://... to
// check a preview). Exits non-zero if production is de-indexed, a key page is not 200, canonical
// tags are wrong, the sitemap is unreachable or redirects chain.
import config from '../site.config.mjs';

const origin = (process.env.VERIFY_ORIGIN || config.origin).replace(/\/$/, '');
const problems = [];
const check = (condition, message) => { if (!condition) problems.push(message); };
const get = (url, options = {}) => fetch(url, {redirect: 'manual', headers: {'user-agent': 'webandapp-verify/1.0'}, signal: AbortSignal.timeout(20000), ...options});

const robots = await get(`${origin}/robots.txt`);
const robotsText = await robots.text();
check(robots.status === 200, `robots.txt returned ${robots.status}`);
check(!/^Disallow:\s*\/\s*$/m.test(robotsText), 'LIVE robots.txt blocks the whole site (Disallow: /)');
check(robotsText.includes('Sitemap:'), 'robots.txt has no Sitemap line');

const sitemap = await get(`${origin}/sitemap.xml`);
const sitemapText = await sitemap.text();
check(sitemap.status === 200, `sitemap.xml returned ${sitemap.status}`);
const locs = [...sitemapText.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
check(locs.length > 30, `sitemap has only ${locs.length} URLs`);

const keyPages = ['/', '/website-development', '/ecommerce-development', '/mobile-app-development', '/prices', '/about', '/faq', '/blog', '/contact', '/en', '/ru', '/en/website-development', '/ru/prices', '/blog/saitis-damzadebis-fasi'];
for (const route of keyPages) {
  const url = origin + route;
  const res = await get(url);
  check(res.status === 200, `${route} returned ${res.status}`);
  if (res.status !== 200) continue;
  const html = await res.text();
  check(!/<meta name="robots" content="noindex/.test(html), `${route} is noindex`);
  check(html.includes(`<link rel="canonical" href="${url}">`), `${route} canonical is not ${url}`);
  check((html.match(/<h1[\s>]/g) || []).length === 1, `${route} does not have exactly one H1`);
  check(/x-robots-tag/i.test([...res.headers.keys()].join(',')) ? !/noindex/i.test(res.headers.get('x-robots-tag')) : true, `${route} has an X-Robots-Tag noindex header`);
}

// Redirects must be single hops to the canonical form.
for (const [from, to] of [['/prices/', '/prices'], ['/en/', '/en'], ['/index.html', '/'], ['/prices.html', '/prices'], ['/ios-app-development', '/mobile-app-development#ios']]) {
  const res = await get(origin + from);
  const location = res.headers.get('location') || '';
  check([301, 308].includes(res.status), `${from} returned ${res.status} instead of a permanent redirect`);
  check(location === to || location === origin + to, `${from} redirects to ${location || '(nothing)'} instead of ${to}`);
  if (location) {
    const hop = await get(location.startsWith('http') ? location : origin + location);
    check(hop.status === 200 || (to.includes('#') && hop.status === 200), `${from} → ${location} is a redirect chain (${hop.status})`);
  }
}
const www = await get(`https://www.${origin.replace(/^https?:\/\//, '')}/prices`);
check([301, 308].includes(www.status), `www host returned ${www.status} instead of a redirect`);

const missing = await get(`${origin}/this-page-does-not-exist-${Date.now()}`);
check(missing.status === 404, `unknown page returned ${missing.status} instead of 404`);

if (problems.length) {
  console.error(`LIVE verification FAILED for ${origin} (${problems.length}):\n- ` + problems.join('\n- '));
  process.exit(1);
}
console.log(`Live verification passed for ${origin}: robots, sitemap (${locs.length} URLs), ${keyPages.length} key pages, redirects and 404.`);
