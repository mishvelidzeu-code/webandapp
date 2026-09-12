import {mkdir, writeFile, readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';
import config from '../site.config.mjs';
import {renderPage, pageSlugs, pageExists, LANGS} from '../src/render.mjs';
import {versioned} from '../src/assets.mjs';

const root = path.resolve(import.meta.dirname, '..');
const today = config.date;

// Real lastmod per page: a content hash of <main> + title + description is compared with the
// committed docs/page-lastmod.json; the date only moves when the page content actually changed.
const lastmodFile = path.join(root, 'docs/page-lastmod.json');
let lastmod = {};
try { lastmod = JSON.parse(await readFile(lastmodFile, 'utf8')); } catch {}
const contentHash = html => createHash('sha1').update(html.match(/<title>.*?<\/title>/)[0] + html.match(/<meta name="description"[^>]*>/)[0] + html.match(/<main[^>]*>[\s\S]*<\/main>/)[0]).digest('hex').slice(0, 12);

export const pages = [];
for (const lang of LANGS) {
  for (const slug of pageSlugs()) {
    if (!pageExists(slug, lang)) continue;
    const page = renderPage(slug, lang);
    const hash = contentHash(page.html);
    const entry = lastmod[page.route];
    const date = entry && entry.hash === hash ? entry.lastmod : today;
    lastmod[page.route] = {hash, lastmod: date};
    page.lastmod = date;
    page.html = page.html.replace('__LASTMOD__', date);
    await mkdir(path.dirname(path.join(root, page.file)), {recursive: true});
    await writeFile(path.join(root, page.file), page.html);
    pages.push(page);
  }
}
for (const route of Object.keys(lastmod)) if (!pages.some(p => p.route === route)) delete lastmod[route];
await mkdir(path.join(root, 'docs'), {recursive: true});
await writeFile(lastmodFile, JSON.stringify(lastmod, null, 2) + '\n');

// Root 404.html for hosts that serve it directly from the site root (relative asset paths fixed up).
await writeFile(path.join(root, '404.html'), pages.find(p => p.slug === '404' && p.lang === 'ka').html.replaceAll('../assets/', 'assets/').replaceAll('../index.html', 'index.html'));
await writeFile(path.join(root, 'assets/public-config.js'), 'window.WEBANDAPP_CONFIG=' + JSON.stringify({analytics: config.analytics, published: config.published, phone: config.phone, phoneDisplay: config.phoneDisplay}) + ';');
await writeFile(path.join(root, 'assets/site.webmanifest'), JSON.stringify({name: 'webandapp', short_name: 'webandapp', start_url: '../', display: 'browser', background_color: '#f7f8f5', theme_color: '#171b19', icons: [{src: versioned('icon-192.png'), sizes: '192x192', type: 'image/png'}, {src: versioned('icon-512.png'), sizes: '512x512', type: 'image/png'}]}));

// Sitemap: only indexable pages, with real lastmod and hreflang alternates.
const indexable = pages.filter(p => !p.noindex);
const xml = indexable.map(p => {
  const alternates = pages.filter(q => q.slug === p.slug && !q.noindex);
  const links = alternates.map(q => `<xhtml:link rel="alternate" hreflang="${q.lang}" href="${config.origin + q.route}"/>`).join('') + `<xhtml:link rel="alternate" hreflang="x-default" href="${config.origin + (alternates.find(q => q.lang === 'ka') || p).route}"/>`;
  return `<url><loc>${config.origin + p.route}</loc><lastmod>${p.lastmod}</lastmod>${links}</url>`;
}).join('\n');
await writeFile(path.join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${xml}\n</urlset>\n`);
await writeFile(path.join(root, 'robots.txt'), `User-agent: *\n${config.published ? 'Allow: /\nDisallow: /api/\nDisallow: /docs/\nDisallow: /reports/' : 'Disallow: /'}\nSitemap: ${config.origin}/sitemap.xml\n`);

// Editorial reports.
const csv = rows => '﻿' + rows.map(row => row.map(v => '"' + String(v).replaceAll('"', '""') + '"').join(',')).join('\r\n');
await writeFile(path.join(root, 'docs/page-seo.csv'), csv([['URL', 'Language', 'Title', 'Meta description', 'H1', 'Indexing', 'Last modified', 'Schema'], ...pages.map(p => [p.route, p.lang, p.title, p.description, p.h1, p.noindex ? 'noindex' : 'index', p.lastmod, p.schemas.join('; ')])]));
await writeFile(path.join(root, 'docs/headings-and-links.md'), '# გვერდების სათაურები და შიდა ბმულები\n\n' + pages.map(p => `## ${p.route}\n\n${[...p.html.matchAll(/<(h[123])[^>]*>([\s\S]*?)<\/\1>/g)].map(m => `- ${m[1].toUpperCase()}: ${m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()}`).join('\n')}\n\nბმულები: ${[...new Set([...p.html.matchAll(/data-route="([^"]+)"/g)].map(m => m[1]))].join(', ')}`).join('\n\n'));
await writeFile(path.join(root, 'docs/georgian-copy.md'), '# სრული ქართული ტექსტები\n\n' + pages.filter(p => p.lang === 'ka').map(p => '## ' + p.route + '\n\n' + p.html.match(/<main[^>]*>([\s\S]*?)<\/main>/)[1].replace(/<\/(h[1-6]|p|section|li|summary|details|tr)>/g, '\n\n').replace(/<[^>]+>/g, ' ').replace(/ +/g, ' ').trim()).join('\n\n'));
await writeFile(path.join(root, 'routes-manifest.json'), JSON.stringify(pages.map(({html, ...p}) => p), null, 2));
console.log(`Built ${pages.length} pages (${LANGS.map(l => `${pages.filter(p => p.lang === l).length} ${l}`).join(', ')}). Published: ${config.published}.`);
