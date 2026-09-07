import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const manifest=JSON.parse(await readFile(path.join(root,'routes-manifest.json'),'utf8'));
const pages=new Map(manifest.map(p=>[p.route,p]));
const errors=[],warnings=[];const titles=new Map();
for(const page of manifest){
 const html=await readFile(path.join(root,page.file),'utf8');
 const count=re=>[...html.matchAll(re)].length;
 const one=(re,label)=>{const n=count(re);if(n!==1)errors.push(`${page.route}: ${label} count ${n}`);};
 one(/<title>/g,'title');one(/<h1[ >]/g,'H1');one(/rel="canonical"/g,'canonical');one(/name="description"/g,'description');one(/name="viewport"/g,'viewport');
 for(const lang of ['ka','en','ru'])if(!html.includes(`hreflang="${lang}"`))errors.push(`${page.route}: missing hreflang ${lang}`);
 if(!html.includes('hreflang="x-default"'))errors.push(`${page.route}: missing x-default`);
 const title=html.match(/<title>(.*?)<\/title>/)?.[1]||'';const key=page.lang+'|'+title;if(titles.has(key)&&page.slug!=='404')errors.push(`${page.route}: duplicate title with ${titles.get(key)}`);titles.set(key,page.route);
 const desc=html.match(/<meta name="description" content="([^"]*)"/)?.[1]||'';if(desc.length<50)warnings.push(`${page.route}: short description (${desc.length})`);
 const data=html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];try{JSON.parse(data);}catch{errors.push(`${page.route}: invalid JSON-LD`);}
 for(const m of html.matchAll(/data-route="([^"]+)"/g)){const raw=m[1],target=raw.split(/[?#]/)[0]||'/';if(!pages.has(target))errors.push(`${page.route}: missing internal target ${target}`);}
 for(const m of html.matchAll(/(?:href|src)="([^"#]+)"/g)){const ref=m[1];if(/^(https?:|mailto:|tel:|data:|\/)/.test(ref))continue;const clean=ref.split(/[?#]/)[0];try{await stat(path.resolve(path.dirname(path.join(root,page.file)),clean));}catch{errors.push(`${page.route}: missing asset ${ref}`);}}
}
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log(`SEO audit passed: ${manifest.length} pages, ${titles.size} language/title pairs, internal links and assets resolved.`);
if(warnings.length)console.log(`Warnings (${warnings.length}):\n`+warnings.join('\n'));
