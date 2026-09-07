import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {randomBytes} from 'node:crypto';
import {gzipSync} from 'node:zlib';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import config from './site.config.mjs';
import {createToken,createLeadHandler} from './src/leads.mjs';
import {ui} from './src/ui.mjs';
const root=path.dirname(fileURLToPath(import.meta.url));
const mime={'.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.png':'image/png','.woff2':'font/woff2','.txt':'text/plain','.xml':'application/xml','.webmanifest':'application/manifest+json'};
export async function createApp(options={}){
 const routes=JSON.parse(await readFile(path.join(root,'routes-manifest.json'),'utf8'));
 const port=options.port??Number(process.env.PORT||4173),origin=options.origin||process.env.PUBLIC_ORIGIN||`http://127.0.0.1:${port}`;
 const secret=process.env.CSRF_SECRET||randomBytes(32).toString('hex');let sendMail=options.sendMail;
 const smtpReady=Boolean(process.env.SMTP_HOST&&process.env.SMTP_USER&&process.env.SMTP_PASS&&process.env.SMTP_FROM);
 if(smtpReady&&!sendMail){const {default:nodemailer}=await import('nodemailer');const transport=nodemailer.createTransport({host:process.env.SMTP_HOST,port:Number(process.env.SMTP_PORT||465),secure:process.env.SMTP_SECURE!=='false',auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS},connectionTimeout:7000,greetingTimeout:7000,socketTimeout:12000,disableFileAccess:true,disableUrlAccess:true});sendMail=async d=>{const t=ui[d.lang];const result=await transport.sendMail({from:process.env.SMTP_FROM,to:process.env.LEAD_RECIPIENT||config.email,replyTo:d.email,subject:'webandapp enquiry: '+d.service,text:[`${t.name}: ${d.name}`,`${t.phone}: ${d.phone}`,`${t.mail}: ${d.email}`,`${t.service}: ${d.service}`,`${t.budget}: ${t.budgets[Number(d.budget)]&&d.budget!==''?t.budgets[Number(d.budget)]:t.undecided}`,`${t.deadline}: ${t.deadlines[Number(d.deadline)]&&d.deadline!==''?t.deadlines[Number(d.deadline)]:t.undecided}`,'Consent: yes',`Language: ${d.lang}`,'',d.message].join('\n')});if(!result.accepted?.length)throw Error('not accepted');};}
 const ready=Boolean(sendMail);const leadHandler=createLeadHandler({origin,secret,ready,sendMail});
 return http.createServer(async(req,res)=>{
  const nonce=randomBytes(16).toString('base64');
  res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','strict-origin-when-cross-origin');res.setHeader('X-Frame-Options','DENY');res.setHeader('Permissions-Policy','camera=(), microphone=(), geolocation=()');
  res.setHeader('Content-Security-Policy',`default-src 'self'; script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com https://www.clarity.ms https://scripts.clarity.ms; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data: https://*.google-analytics.com https://*.clarity.ms; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.clarity.ms; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self' mailto:`);
  if(config.published)res.setHeader('Strict-Transport-Security','max-age=31536000');else res.setHeader('X-Robots-Tag','noindex, nofollow');
  const json=(code,obj)=>{res.writeHead(code,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify(obj));};
  let url;try{url=new URL(req.url,origin);}catch{json(400,{error:'url'});return;}
  if(req.method==='GET'&&url.pathname==='/api/form-config'){const token=createToken(secret);res.setHeader('Set-Cookie',`wa_csrf=${token}; HttpOnly; SameSite=Strict; Path=/api; Max-Age=1200${origin.startsWith('https:')?'; Secure':''}`);json(200,{ready,token});return;}
  if(url.pathname==='/api/leads'){
   if(req.method!=='POST'){json(405,{error:'method'});return;}if(!(req.headers['content-type']||'').startsWith('application/json')){json(415,{error:'content_type'});return;}
   const chunks=[];let bytes=0;try{for await(const chunk of req){bytes+=chunk.length;if(bytes>24000){json(413,{error:'too_large'});return;}chunks.push(chunk);}const data=JSON.parse(Buffer.concat(chunks).toString('utf8'));await leadHandler(req,res,data);}catch{if(!res.headersSent)json(400,{error:'invalid_json'});}return;
  }
  if(!['GET','HEAD'].includes(req.method)){json(405,{error:'method'});return;}
  const redirect=target=>{res.writeHead(301,{Location:target,'Cache-Control':'public,max-age=300'});res.end();};
  if(config.published&&req.headers.host==='www.webandapp.ge'){redirect(config.origin+url.pathname+url.search);return;}
  let pathname;try{pathname=decodeURIComponent(url.pathname);}catch{json(400,{error:'encoding'});return;}
  if(pathname.includes('..')||pathname.includes('\\')||pathname.includes('\0')){json(400,{error:'path'});return;}
  if(pathname.endsWith('/index.html')){redirect(pathname.replace(/index\.html$/,'').replace(/\/$/,'')||'/');return;}
  if(pathname==='/index.html'){redirect('/');return;}
  if(/^\/(en|ru)$/.test(pathname)){redirect(pathname+'/');return;}
  if(pathname.endsWith('/')&&!['/','/en/','/ru/'].includes(pathname)){redirect(pathname.slice(0,-1)+url.search);return;}
  const merged=pathname.match(/^(\/(?:en|ru))?\/(ios|android)-app-development$/);if(merged){redirect((merged[1]||'')+'/mobile-app-development#'+merged[2]);return;}
  let page=routes.find(p=>p.route===pathname),status=200,buffer,contentType;
  try{
   if(page){buffer=await readFile(path.join(root,page.file));contentType='text/html';}
   else if(/^\/assets\/[^/]+$/u.test(pathname)&&!pathname.endsWith('.txt')){buffer=await readFile(path.join(root,pathname.slice(1)));contentType=mime[path.extname(pathname)]||'application/octet-stream';}
   else if(['/robots.txt','/sitemap.xml'].includes(pathname)){buffer=await readFile(path.join(root,pathname.slice(1)));contentType=mime[path.extname(pathname)];}
   else throw Error('not found');
  }catch{status=404;page=routes.find(p=>p.slug==='404'&&p.lang===(pathname.startsWith('/en/')?'en':pathname.startsWith('/ru/')?'ru':'ka'));buffer=await readFile(path.join(root,page.file));contentType='text/html';res.setHeader('X-Robots-Tag','noindex');}
  if(contentType==='text/html'){let html=buffer.toString().replace(/href="[^"]*" data-route="([^"]*)"/g,'href="$1" data-route="$1"').replace(/<script(\s)/g,`<script nonce="${nonce}"$1`);if(status===404)html=html.replace(/(?:\.\.\/)+assets\//g,'/assets/');buffer=Buffer.from(html);if(page?.noindex)res.setHeader('X-Robots-Tag','noindex, follow');}
  res.setHeader('Content-Type',contentType+(contentType.startsWith('text/')?'; charset=utf-8':''));res.setHeader('Cache-Control',contentType==='text/html'?'no-cache':pathname.startsWith('/assets/')?'public, max-age=86400':'public, max-age=300');res.setHeader('Vary','Accept-Encoding');
  if(/gzip/.test(req.headers['accept-encoding']||'')&&buffer.length>1024){buffer=gzipSync(buffer);res.setHeader('Content-Encoding','gzip');}res.setHeader('Content-Length',buffer.length);res.writeHead(status);res.end(req.method==='HEAD'?undefined:buffer);
 });
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){const server=await createApp();const port=Number(process.env.PORT||4173);server.listen(port,process.env.HOST||'127.0.0.1',()=>console.log(`Local: http://${process.env.HOST||'127.0.0.1'}:${port}`));}
