// Post-build gate. Runs as the last step of `npm run build`, so a Vercel production build that
// would ship a de-indexed or broken site fails before it is deployed.
import {readdir, readFile, stat} from 'node:fs/promises';
import path from 'node:path';
import config from '../site.config.mjs';

const root = path.resolve(import.meta.dirname, '..');
const output = path.join(root, 'dist');
const production = process.env.VERCEL_ENV === 'production' || config.published;
const problems = [];
const check = (condition, message) => { if (!condition) problems.push(message); };

const files = [];
async function walk(directory) {
  for (const entry of await readdir(directory, {withFileTypes: true})) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await walk(file); else files.push(file);
  }
}
JSON.parse(await readFile(path.join(root, 'vercel.json'), 'utf8'));
await walk(output);
for (const required of ['404.html', 'index.html', 'robots.txt', 'sitemap.xml', 'favicon.ico', 'assets/app.js', 'assets/styles.css']) {
  try { await stat(path.join(output, required)); } catch { problems.push(`dist/${required} is missing`); }
}

const htmlFiles = files.filter(file => file.endsWith('.html'));
const read = async file => readFile(path.join(output, file), 'utf8');
const robots = await read('robots.txt');
const sitemap = await read('sitemap.xml');
const home = await read('index.html');

if (production) {
  check(!/^Disallow:\s*\/\s*$/m.test(robots), 'robots.txt blocks the whole site (Disallow: /)');
  check(/^Allow:\s*\//m.test(robots), 'robots.txt does not allow crawling');
  check(!/<meta name="robots" content="noindex/.test(home), 'home page is noindex');
  check(/<link rel="canonical" href="https:\/\/webandapp\.ge\/">/.test(home), 'home page canonical is missing or wrong');
}
check(robots.includes(`Sitemap: ${config.origin}/sitemap.xml`), 'robots.txt does not reference the sitemap');

// Every sitemap URL must map to a packaged, indexable file with a matching self-canonical.
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
if (production) check(locs.length > 30, `sitemap has only ${locs.length} URLs`);
for (const loc of locs) {
  const route = loc.replace(config.origin, '') || '/';
  const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
  let html;
  try { html = await read(file); } catch { problems.push(`sitemap URL ${loc} has no packaged file ${file}`); continue; }
  check(!html.includes('content="noindex'), `sitemap URL ${loc} is noindex`);
  check(html.includes(`<link rel="canonical" href="${loc}">`), `sitemap URL ${loc} canonical mismatch`);
  check(!route.endsWith('/') || route === '/', `sitemap URL ${loc} has a trailing slash`);
}

// Important commercial pages must exist, be indexable and carry one H1 and hreflang alternates.
for (const route of ['/', '/website-development', '/ecommerce-development', '/mobile-app-development', '/prices', '/en', '/ru', '/en/website-development', '/ru/prices']) {
  const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
  let html;
  try { html = await read(file); } catch { problems.push(`key page ${route} is missing`); continue; }
  if (production) check(!html.includes('content="noindex'), `key page ${route} is noindex`);
  check((html.match(/<h1[\s>]/g) || []).length === 1, `key page ${route} does not have exactly one H1`);
  check(html.includes('hreflang="x-default"'), `key page ${route} lacks hreflang`);
}

// No leftover relative asset paths, no draft placeholders, no unversioned first-party assets.
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const name = path.relative(output, file);
  check(!/(?:\.\.\/)+assets\//.test(html) && !/(?:href|src)=["']assets\//.test(html) && !/,\s*assets\//.test(html), `${name}: relative asset paths remain`);
  check(!/სამუშაო ვერსია —|Working draft —|Рабочая версия —|გამოქვეყნებამდე დასამტკიცებელია|გამოქვეყნებამდე უნდა დაზუსტდეს|must be confirmed before publication|необходимо уточнить до публикации/.test(html), `${name}: draft placeholder text is visible`);
  for (const m of html.matchAll(/(?:href|src)="\/assets\/([^"?]+)"/g)) if (!/\.(txt|webmanifest)$/.test(m[1])) problems.push(`${name}: unversioned asset /assets/${m[1]}`);
}

if (problems.length) {
  console.error(`Deployment verification FAILED (${problems.length}):\n- ` + [...new Set(problems)].join('\n- '));
  process.exit(1);
}
console.log(`Deployment package verified: ${htmlFiles.length} HTML files, ${locs.length} sitemap URLs, robots/canonical/noindex checks passed (${production ? 'production' : 'draft'} mode).`);
