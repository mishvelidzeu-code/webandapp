import {createHmac,randomBytes,timingSafeEqual,createHash} from 'node:crypto';
import {services} from './services.mjs';
const equal=(a,b)=>{const x=Buffer.from(a||''),y=Buffer.from(b||'');return x.length===y.length&&timingSafeEqual(x,y);};
export function createToken(secret,now=Date.now()){const value=now+'.'+randomBytes(18).toString('hex');return value+'.'+createHmac('sha256',secret).update(value).digest('hex');}
export function validToken(token,secret,now=Date.now()){if(typeof token!=='string'||token.length>200)return false;const parts=token.split('.');if(parts.length!==3)return false;const age=now-Number(parts[0]);return age>=1500&&age<20*60e3&&equal(parts[2],createHmac('sha256',secret).update(parts.slice(0,2).join('.')).digest('hex'));}
const clean=(value,max)=>typeof value==='string'?value.normalize('NFC').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g,'').trim().slice(0,max+1):'';
export function validateLead(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'invalid'};
 if(input.company_website)return {error:'spam'};
 const fields={name:80,phone:30,email:160,service:60,message:4000,budget:1,deadline:1,lang:2};const data={};
 for(const [field,max] of Object.entries(fields)){data[field]=clean(input[field],max);if(data[field].length>max)return {error:'length'};}
 if(data.name.length<2||/[\r\n]/.test(data.name)||!/^\+?[0-9 () .-]{7,30}$/.test(data.phone)||data.phone.replace(/\D/g,'').length<7||data.phone.replace(/\D/g,'').length>15)return {error:'contact'};
 if(!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email)||/[\r\n]/.test(data.email))return {error:'email'};
 if(![...services.map(s=>s.slug),'consultation'].includes(data.service)||data.message.length<15||input.consent!=='yes')return {error:'required'};
 if(!['','0','1','2','3'].includes(data.budget)||!['','0','1','2'].includes(data.deadline)||!['ka','en','ru'].includes(data.lang))return {error:'enum'};
 return {data};
}
export function createLeadHandler({origin,secret,sendMail,ready}){
 const allowedOrigins=new Set((Array.isArray(origin)?origin:[origin]).filter(Boolean));
 const limits=new Map(),ids=new Map();
 const timer=setInterval(()=>{const now=Date.now();for(const [k,v]of limits)if(v.expiry<now)limits.delete(k);for(const [k,v]of ids)if(v.expiry<now)ids.delete(k);},60000);timer.unref();
 return async function handle(req,res,body){
  const answer=(code,value)=>{res.writeHead(code,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify(value));};
  if(!allowedOrigins.has(req.headers.origin)){answer(403,{error:'origin'});return;}
  const forwarded=String(req.headers['x-forwarded-for']||'').split(',')[0].trim();
  const ip=forwarded||req.socket?.remoteAddress||'unknown',now=Date.now();let limit=limits.get(ip);if(!limit||limit.expiry<now)limit={count:0,expiry:now+600000};limit.count++;limits.set(ip,limit);if(limit.count>5){res.setHeader('Retry-After','600');answer(429,{error:'rate_limit'});return;}
  const token=req.headers['x-csrf-token'];const cookie=(req.headers.cookie||'').split(';').map(x=>x.trim()).find(x=>x.startsWith('wa_csrf='))?.slice(8);
  if(!validToken(token,secret)||!equal(token,cookie)){answer(403,{error:'csrf'});return;}
  if(!ready){answer(503,{error:'not_configured'});return;}
  const result=validateLead(body);if(result.error){answer(422,{error:result.error});return;}
  const key=req.headers['idempotency-key'];if(typeof key!=='string'||!/^[A-Za-z0-9-]{16,80}$/.test(key)){answer(400,{error:'idempotency'});return;}
  const digest=createHash('sha256').update(JSON.stringify(result.data)).digest('hex');const prior=ids.get(key);
  if(prior){if(prior.digest!==digest){answer(409,{error:'changed_request'});return;}try{await prior.promise;answer(200,{ok:true});}catch{answer(502,{error:'delivery'});}return;}
  const promise=Promise.resolve().then(()=>sendMail(result.data));ids.set(key,{digest,promise,expiry:now+600000});
  try{await promise;answer(200,{ok:true});}catch{ids.delete(key);answer(502,{error:'delivery'});}
 };
}
