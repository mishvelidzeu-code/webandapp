// Packages the generated tree into dist/ for Vercel: absolute asset paths, clean-URL file names
// (Vercel serves prices.html at /prices, en.html at /en), versioned font URL inside the CSS.
import {cp, mkdir, readFile, rm, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {versionCss} from '../src/assets.mjs';

const root = path.resolve(import.meta.dirname, '..');
const output = path.resolve(root, 'dist');

if (path.dirname(output) !== root || path.basename(output) !== 'dist') {
  throw new Error('Refusing to replace an unexpected output directory.');
}

const manifest = JSON.parse(await readFile(path.join(root, 'routes-manifest.json'), 'utf8'));
const publicHtml = html => html
  .replace(/href="[^"]*" data-route="([^"]*)"/g, (_match, route) => `href="${route}" data-route="${route}"`)
  .replace(/(?:\.\.\/)+assets\//g, '/assets/')
  .replace(/(["'>]|,\s)assets\//g, '$1/assets/');

const outputFileFor = route => (route === '/' ? 'index.html' : `${route.slice(1)}.html`);

await rm(output, {recursive: true, force: true});
await mkdir(output, {recursive: true});
await cp(path.join(root, 'assets'), path.join(output, 'assets'), {recursive: true, filter: source => !source.endsWith('.txt')});
await writeFile(path.join(output, 'assets/styles.css'), versionCss(await readFile(path.join(root, 'assets/styles.css'), 'utf8')));

for (const page of manifest) {
  const source = path.join(root, page.file);
  const destination = path.join(output, outputFileFor(page.route));
  await mkdir(path.dirname(destination), {recursive: true});
  await writeFile(destination, publicHtml(await readFile(source, 'utf8')));
}

for (const file of ['robots.txt', 'sitemap.xml', 'favicon.ico']) {
  await cp(path.join(root, file), path.join(output, file));
}

console.log(`Packaged ${manifest.length} static pages in ${output}.`);
