import {deflateSync} from 'node:zlib';
import {writeFile} from 'node:fs/promises';
import path from 'node:path';
const table=new Uint32Array(256).map((_,n)=>{let c=n;for(let k=0;k<8;k++)c=(c&1)?0xedb88320^(c>>>1):c>>>1;return c>>>0;});
function crc(data){let c=0xffffffff;for(const b of data)c=table[(c^b)&255]^(c>>>8);return(c^0xffffffff)>>>0;}
function chunk(type,data){const t=Buffer.from(type),len=Buffer.alloc(4),sum=Buffer.alloc(4);len.writeUInt32BE(data.length);sum.writeUInt32BE(crc(Buffer.concat([t,data])));return Buffer.concat([len,t,data,sum]);}
const ink=[23,27,25],lime=[199,243,106];
function mark(x,y,s){
 const stroke=(x1,y1,x2,y2,w)=>{const vx=x2-x1,vy=y2-y1,wx=x-x1,wy=y-y1,t=Math.max(0,Math.min(1,(wx*vx+wy*vy)/(vx*vx+vy*vy))),dx=x-(x1+t*vx),dy=y-(y1+t*vy);return dx*dx+dy*dy<(w*w);};
 return stroke(11*s,20*s,18*s,45*s,2.8*s)||stroke(18*s,45*s,27*s,27*s,2.8*s)||stroke(27*s,27*s,36*s,45*s,2.8*s)||stroke(36*s,45*s,44*s,20*s,2.8*s)||(x>47*s&&x<55*s&&y>38*s&&y<46*s);}
// Supersampled so the mark stays readable at the 16px favicon size.
function icon(size,samples=4){const rows=[],s=size/64;
 for(let y=0;y<size;y++){const row=Buffer.alloc(1+size*4);for(let x=0;x<size;x++){let hits=0;
   for(let sy=0;sy<samples;sy++)for(let sx=0;sx<samples;sx++)if(mark(x+(sx+.5)/samples,y+(sy+.5)/samples,s))hits++;
   const a=hits/(samples*samples),o=1+x*4;
   for(let c=0;c<3;c++)row[o+c]=Math.round(ink[c]+(lime[c]-ink[c])*a);
   row[o+3]=255;}rows.push(row);}
 const ihdr=Buffer.alloc(13);ihdr.writeUInt32BE(size,0);ihdr.writeUInt32BE(size,4);ihdr[8]=8;ihdr[9]=6;
 return Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),chunk('IHDR',ihdr),chunk('IDAT',deflateSync(Buffer.concat(rows),{level:9})),chunk('IEND',Buffer.alloc(0))]);}
// Multi-size ICO holding PNG frames: the format Google's favicon crawler looks for.
function ico(sizes){const images=sizes.map(size=>icon(size));
 const header=Buffer.alloc(6);header.writeUInt16LE(1,2);header.writeUInt16LE(sizes.length,4);
 let offset=6+16*sizes.length;
 const entries=sizes.map((size,i)=>{const e=Buffer.alloc(16);e[0]=size%256;e[1]=size%256;e.writeUInt16LE(1,4);e.writeUInt16LE(32,6);e.writeUInt32LE(images[i].length,8);e.writeUInt32LE(offset,12);offset+=images[i].length;return e;});
 return Buffer.concat([header,...entries,...images]);}
const root=path.resolve(import.meta.dirname,'..');
const favicon=ico([16,32,48]);
await Promise.all([
 writeFile(path.join(root,'assets/icon-192.png'),icon(192)),
 writeFile(path.join(root,'assets/icon-512.png'),icon(512)),
 writeFile(path.join(root,'assets/favicon.ico'),favicon),
 writeFile(path.join(root,'favicon.ico'),favicon)]);
console.log('Generated web app icons and a 16/32/48 favicon.ico.');
