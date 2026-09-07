import {deflateSync} from 'node:zlib';
import {writeFile} from 'node:fs/promises';
import path from 'node:path';
const table=new Uint32Array(256).map((_,n)=>{let c=n;for(let k=0;k<8;k++)c=(c&1)?0xedb88320^(c>>>1):c>>>1;return c>>>0;});
function crc(data){let c=0xffffffff;for(const b of data)c=table[(c^b)&255]^(c>>>8);return(c^0xffffffff)>>>0;}
function chunk(type,data){const t=Buffer.from(type),len=Buffer.alloc(4),sum=Buffer.alloc(4);len.writeUInt32BE(data.length);sum.writeUInt32BE(crc(Buffer.concat([t,data])));return Buffer.concat([len,t,data,sum]);}
function icon(size){const rows=[];const ink=[23,27,25,255],lime=[199,243,106,255];
 for(let y=0;y<size;y++){const row=Buffer.alloc(1+size*4);for(let x=0;x<size;x++){const o=1+x*4;let c=ink;const s=size/64;
   const stroke=(x1,y1,x2,y2,w)=>{const vx=x2-x1,vy=y2-y1,wx=x-x1,wy=y-y1,t=Math.max(0,Math.min(1,(wx*vx+wy*vy)/(vx*vx+vy*vy))),dx=x-(x1+t*vx),dy=y-(y1+t*vy);return dx*dx+dy*dy<(w*w);};
   if(stroke(11*s,20*s,18*s,45*s,2.8*s)||stroke(18*s,45*s,27*s,27*s,2.8*s)||stroke(27*s,27*s,36*s,45*s,2.8*s)||stroke(36*s,45*s,44*s,20*s,2.8*s)||(x>47*s&&x<55*s&&y>38*s&&y<46*s))c=lime;
   row[o]=c[0];row[o+1]=c[1];row[o+2]=c[2];row[o+3]=c[3];}rows.push(row);}
 const ihdr=Buffer.alloc(13);ihdr.writeUInt32BE(size,0);ihdr.writeUInt32BE(size,4);ihdr[8]=8;ihdr[9]=6;
 return Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),chunk('IHDR',ihdr),chunk('IDAT',deflateSync(Buffer.concat(rows),{level:9})),chunk('IEND',Buffer.alloc(0))]);}
const root=path.resolve(import.meta.dirname,'..','assets');
await Promise.all([192,512].map(s=>writeFile(path.join(root,`icon-${s}.png`),icon(s))));
console.log('Generated web app icons.');
