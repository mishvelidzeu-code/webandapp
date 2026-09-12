// Content-hash versions for every file in /assets, so HTML can reference `file?v=<hash>`
// and the CDN/browser can cache assets for a year (immutable) without ever serving a stale file.
import {readdirSync, readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import path from 'node:path';

export const assetsDir = path.resolve(import.meta.dirname, '../assets');
const hash = buffer => createHash('sha1').update(buffer).digest('hex').slice(0, 10);

const versions = {};
for (const entry of readdirSync(assetsDir, {withFileTypes: true})) {
  if (entry.isFile()) versions[entry.name] = hash(readFileSync(path.join(assetsDir, entry.name)));
}
// styles.css embeds the font URL (rewritten with the font hash when packaged), so its version must follow the font too.
if (versions['styles.css'] && versions['georgian.woff2']) {
  versions['styles.css'] = hash(readFileSync(path.join(assetsDir, 'styles.css')) + versions['georgian.woff2']);
}

export const assetVersion = name => versions[name] || '';
export const versioned = name => (versions[name] ? `${name}?v=${versions[name]}` : name);
// Applied to CSS both when packaging dist and when the dev server serves it, so the preload URL matches the CSS URL.
export const versionCss = css => css.replace(/url\('\.\/georgian\.woff2'\)/g, `url('./${versioned('georgian.woff2')}')`);
