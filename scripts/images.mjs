// Generates responsive image variants (AVIF + WebP at several widths) and 1200×630 social preview
// images from the master files in images-src/. Outputs are committed in assets/, so this only needs
// to run when a master image changes: `npm run images`.
import {mkdir, readdir, stat} from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(import.meta.dirname, '..');
const source = path.join(root, 'images-src');
const output = path.join(root, 'assets');
await mkdir(output, {recursive: true});

import {images as responsiveImages} from '../src/images.mjs';

const newer = async (target, sourceFile) => {
  try { return (await stat(target)).mtimeMs >= (await stat(sourceFile)).mtimeMs; } catch { return false; }
};

let written = 0;
for (const name of Object.keys(responsiveImages)) {
  const master = (await readdir(source)).find(f => path.parse(f).name === name);
  if (!master) throw new Error(`Missing master image images-src/${name}.*`);
  const file = path.join(source, master);
  const {widths, og} = responsiveImages[name];
  for (const width of widths) {
    for (const [ext, options] of [['webp', {quality: 78, effort: 5}], ['avif', {quality: 55, effort: 6}]]) {
      const target = path.join(output, `${name}-${width}.${ext}`);
      if (await newer(target, file)) continue;
      await sharp(file).resize({width, withoutEnlargement: true})[ext](options).toFile(target);
      written++;
    }
  }
  if (og) {
    const target = path.join(output, `${og}.jpg`);
    if (!(await newer(target, file))) {
      await sharp(file).resize(1200, 630, {fit: 'cover', position: 'attention'}).jpeg({quality: 82, mozjpeg: true}).toFile(target);
      written++;
    }
  }
}
console.log(`Image variants ready (${written} files written).`);
