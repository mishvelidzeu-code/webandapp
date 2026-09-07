import {cp, mkdir, readFile, rm, writeFile} from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const output = path.resolve(root, 'dist');

if (path.dirname(output) !== root || path.basename(output) !== 'dist') {
  throw new Error('Refusing to replace an unexpected output directory.');
}

const manifest = JSON.parse(await readFile(path.join(root, 'routes-manifest.json'), 'utf8'));
const publicHtml = html => html
  .replace(/href="[^"]*" data-route="([^"]*)"/g, (_match, route) => `href="${route}" data-route="${route}"`)
  .replace(/(?:\.\.\/)+assets\//g, '/assets/')
  .replace(/(["'])assets\//g, '$1/assets/');

const outputFileFor = route => {
  if (route === '/') return 'index.html';
  if (route.endsWith('/')) return path.join(route.slice(1), 'index.html');
  return `${route.slice(1)}.html`;
};

await rm(output, {recursive: true, force: true});
await mkdir(output, {recursive: true});
await cp(path.join(root, 'assets'), path.join(output, 'assets'), {recursive: true});

for (const page of manifest) {
  const source = path.join(root, page.file);
  const destination = path.join(output, outputFileFor(page.route));
  await mkdir(path.dirname(destination), {recursive: true});
  await writeFile(destination, publicHtml(await readFile(source, 'utf8')));
}

for (const file of ['robots.txt', 'sitemap.xml']) {
  await cp(path.join(root, file), path.join(output, file));
}

console.log(`Packaged ${manifest.length} static pages in ${output}.`);
