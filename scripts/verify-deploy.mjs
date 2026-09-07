import {readdir, readFile, stat} from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const output = path.join(root, 'dist');
const files = [];

async function walk(directory) {
  for (const entry of await readdir(directory, {withFileTypes: true})) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await walk(file);
    else files.push(file);
  }
}

JSON.parse(await readFile(path.join(root, 'vercel.json'), 'utf8'));
await walk(output);
await stat(path.join(output, '404.html'));
await stat(path.join(output, 'assets', 'app.js'));

const htmlFiles = files.filter(file => file.endsWith('.html'));
const invalid = [];
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  if (/(?:\.\.\/)+assets\//.test(html) || /(?:href|src)=["']assets\//.test(html)) invalid.push(file);
}
if (invalid.length) throw new Error(`Relative asset paths remain in: ${invalid.join(', ')}`);

console.log(`Deployment package verified: ${htmlFiles.length} HTML files, custom 404 and assets present.`);
