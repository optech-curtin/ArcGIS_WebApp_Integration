"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3575],{18343:(e,t,r)=>{r.d(t,{UR:()=>g,p5:()=>A,xK:()=>M});var f,n=r(61939),s=r(20538),i=r(8922),u=r(6815),l=r(3391),y=r(40998),o=r(38715),c=r(63599),p=r(56911),a=r(99345),d=r(26270),h=r(86835),T=r(19474),B=r(71760),E=r(78863),b=r(92160);let m=()=>n.A.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function A(e,t,{vertexSpace:r,spatialReference:f}){if("georeferenced"===r.type){if(!(0,h.g)(t,e,f))return!1;let{origin:n}=r;return(0,c.d)(e,e,n),!0}let n=(0,a.lO)(f);if(!(0,h.g)(t,e,n))return!1;let{origin:s}=r;if(!(0,d.l)(f,s,v,n))return!1;let i=(0,y.B8)(v,v);return null!=i&&((0,c.t)(e,e,i),!0)}function g(e,t,r){let{vertexSpace:n,transform:s,vertexAttributes:i}=e,l=(0,T.Hq)(n)?s:null,p=_(e.spatialReference,r,f.SOURCE_AND_TARGET);if((0,T.yJ)(n,t)&&(!l||(0,y.t2)(l.localMatrix,o.zK))&&L(p)){let{position:e,normal:t,tangent:f}=i,n=r?.allowBufferReuse;return{position:n?e:e.slice(),normal:n?t:t?.slice(),tangent:n?f:f?.slice()}}switch(e.vertexSpace.type){case"local":return"local"===t.type?function({vertexAttributes:e,spatialReference:t,transform:r},{origin:n},s,i){let u=O(t,i);if(!(0,d.l)(t,n,R,u))return(0,b.CN)(m(),t,u),null;if(r&&(0,y.lw)(R,R,r.localMatrix),!(0,d.l)(t,s,x,u))return(0,b.CN)(m(),u,t),null;(0,y.B8)(x,x);let l=(0,y.lw)(R,x,R);return w(l,t,i,f.SOURCE_AND_TARGET),S(e,l)}(e,e.vertexSpace,t.origin,r):function({spatialReference:e,vertexAttributes:t,transform:r},{origin:n},s,i){let u=O(e,i);if(!(0,d.l)(e,n,R,u))return(0,b.CN)(m(),e,u),null;r&&(0,y.lw)(R,R,r.localMatrix),w(R,e,i,f.SOURCE);let l=new Float64Array(t.position.length),o=function(e,t,r,f,n){(0,E.t)(f,e,t);let s=new Float64Array(e.length);return(0,b.$5)(f,n,s,r)?s:((0,b.CN)(m(),n,r),null)}(t.position,R,e,l,u);if(!o)return null;let p=function(e,t,r,f,n,s){if(null==n)return null;let i=new Float32Array(n.length);return(0,b.qs)(n,i,s),(0,b.si)(i,e,t,r,f,i)?i:((0,b.CN)(m(),f,t),null)}(o,e,l,u,t.normal,R);if(t.normal&&!p)return null;let a=function(e,t,r,f,n,s){if(null==n)return null;let i=new Float32Array(n.length);return(0,b.KM)(n,i,s),(0,b.Mv)(i,e,t,r,f,i)?i:((0,b.CN)(m(),f,t),null)}(o,e,l,u,t.tangent,R);if(t.tangent&&!a)return null;if(s){let e=(0,c.v)(C,s);(0,E.a)(o,o,e)}return{position:o,normal:p,tangent:a}}(e,e.vertexSpace,t.origin,r);case"georeferenced":return"local"===t.type?function({vertexAttributes:e,spatialReference:t,transform:r},{origin:n},s,i){let l=O(t,i);if(!(0,d.l)(t,s,R,l))return(0,b.CN)(m(),t,l),null;let o=1/_(t,i,f.TARGET);(0,y.hs)(R,R,[o,o,o]);let c=(0,y.B8)(x,R),{position:p,normal:a,tangent:h}=function(e,t,r){if(!t)return e;if(!r){let{position:r,normal:f,tangent:n}=e;return{position:(0,E.a)(new Float64Array(r.length),r,t),tangent:n,normal:f}}let f=S(e,r.localMatrix);return(0,E.a)(f.position,f.position,t),f}(e,n,r),T=new Float64Array(p.length),B=function(e,t,r,f,n){let s=(0,b.gr)(e,t,f,n);if(!s)return(0,b.CN)(m(),t,n),null;let i=new Float64Array(s.length);return(0,E.t)(i,s,r),i}(p,t,c,T,l);if(!B)return null;let A=(0,u.Ge)(N,c),g=function(e,t,r,f,n,s,i){if(null==e)return null;let u=i??new Float32Array(e.length);return(0,b.X4)(e,t,r,f,n,u)?((0,E.b)(u,u,s),u):((0,b.CN)(m(),r,n),null)}(a,p,t,T,l,A,a!==e.normal?a:void 0);if(!g&&a)return null;let w=function(e,t,r,f,n,s,i){if(null==e)return null;let u=i??new Float32Array(e.length);return(0,b.xA)(e,t,r,f,n,u)?((0,E.b)(u,u,s,4),u):((0,b.CN)(m(),r,n),null)}(h,p,t,T,l,A,h!==e.tangent?h:void 0);return!w&&h?null:{position:B,normal:g,tangent:w}}(e,e.vertexSpace,t.origin,r):function({vertexAttributes:e,transform:t,spatialReference:r},{origin:n},s,i){let u=_(r,i,f.SOURCE_AND_TARGET),l=n||!L(u)?(0,y.C)(R,t?.localMatrix??o.zK):null;l&&w(l,r,i,f.SOURCE_AND_TARGET);let{position:p,normal:a,tangent:d}=l?S(e,l):e,h=i?.allowBufferReuse,T=h?p:new Float64Array(p.length),B=p;if(n&&(B=(0,E.a)(T,B,n)),s){let e=(0,c.v)(C,s);B=(0,E.a)(T,B,e)}return{position:B!==e.position||h?B:B.slice(),normal:a!==e.normal||h?a:a?.slice(),tangent:d!==e.tangent||h?d:d?.slice()}}(e,e.vertexSpace,t.origin,r)}}function O(e,t){return t?.useEllipsoid&&(0,B.B3)(e)?a.Y0:(0,a.lO)(e)}function S(e,t){let r=new Float64Array(e.position.length);(0,E.t)(r,e.position,t);let f=e.normal?new Float32Array(e.normal.length):null,n=e.tangent?new Float32Array(e.tangent.length):null;return f&&e.normal&&(0,b.qs)(e.normal,f,t),n&&e.tangent&&(0,b.KM)(e.tangent,n,t),{position:r,normal:f,tangent:n}}function w(e,t,r,f){let n=_(t,r,f);L(n)||(0,y.hs)(e,e,[n,n,n])}function _(e,t,r){let n=!!(r&f.SOURCE),s=!!(r&f.TARGET),i=t?.sourceUnit,u=t?.targetUnit;if(!i&&!u)return 1;let l=M(i,e);n||!i||L(l)||(m().warn("source unit conversion not supported"),l=1);let y=1/M(u,e);return s||!u||L(y)||(m().warn("target unit conversion not supported"),y=1),l*y}function L(e){return(0,s.Io)(e,1)}function M(e,t){if(null==e)return 1;let r=(0,i.KX)(t);return 1/(0,i.oU)(r,"meters",e)}let R=(0,o.vt)(),x=(0,o.vt)(),N=(0,l.vt)(),C=(0,p.vt)(),v=(0,o.vt)();!function(e){e[e.NONE=0]="NONE",e[e.SOURCE=1]="SOURCE",e[e.TARGET=2]="TARGET",e[e.SOURCE_AND_TARGET=3]="SOURCE_AND_TARGET"}(f||(f={}))},19474:(e,t,r)=>{r.d(t,{CK:()=>y,E9:()=>u,Hq:()=>l,MW:()=>o,TE:()=>c,yJ:()=>p});var f=r(63599),n=r(39960),s=r(76277),i=r(61102);function u(e){return null==e.origin}function l(e){return null!=e.origin}function y(e){return l(e.vertexSpace)}function o(e,t){if(!l(e))return null;let[r,f,s]=e.origin;return new n.A({x:r,y:f,z:s,spatialReference:t})}function c(e,t){var r;let{x:f,y:n,z:u,spatialReference:l}=e,y=[f,n,u??0];return"local"===(t?.vertexSpace??((r=l).isGeographic||r.isWebMercator?"local":"georeferenced"))?new i.A({origin:y}):new s.A({origin:y})}function p(e,t){return e.type===t.type&&(e.origin===t.origin||null!=e.origin&&null!=t.origin&&(0,f.p)(e.origin,t.origin))}},75550:(e,t,r)=>{r.d(t,{a:()=>i,b:()=>c,l:()=>o,n:()=>l,t:()=>u});var f=r(50737);r(57845);var n=r(61939);let s=()=>n.A.getLogger("esri.views.3d.support.buffer.math");function i(e,t,r){u(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function u(e,t,r,f=4,n=f){if(e.length/f!=t.length/n)return;let s=e.length/f,i=r[0],l=r[1],y=r[2],o=r[3],c=r[4],p=r[5],a=r[6],d=r[7],h=r[8],T=0,B=0;for(let r=0;r<s;r++){let r=t[T],s=t[T+1],u=t[T+2],E=t[T+3];e[B]=i*r+o*s+a*u,e[B+1]=l*r+c*s+d*u,e[B+2]=y*r+p*s+h*u,e[B+3]=E,T+=n,B+=f}}function l(e,t){let r=Math.min(e.count,t.count),f=e.typedBuffer,n=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride;for(let e=0;e<r;e++){let t=e*n,r=e*i,u=s[r],l=s[r+1],y=s[r+2],o=u*u+l*l+y*y;if(o>0){let e=1/Math.sqrt(o);f[t]=e*u,f[t+1]=e*l,f[t+2]=e*y}}}function y(e,t,r,f=4){let n=Math.min(e.length/f,t.count),s=t.typedBuffer,i=t.typedBufferStride,u=0,l=0;for(let t=0;t<n;t++)e[l]=r*s[u],e[l+1]=r*s[u+1],e[l+2]=r*s[u+2],e[l+3]=r*s[u+3],u+=i,l+=f}function o(e,t,r,f){c(e.typedBuffer,t,r,f,e.typedBufferStride)}function c(e,t,r,n,s=4){let i=Math.min(e.length/s,t.count),u=t.typedBuffer,l=t.typedBufferStride,y=0,o=0,p=1/f.Tf;for(let t=0;t<i;t++)e[o]=n*(r*u[y])**p,e[o+1]=n*(r*u[y+1])**p,e[o+2]=n*(r*u[y+2])**p,e[o+3]=n*r*u[y+3],y+=l,o+=s}Object.freeze(Object.defineProperty({__proto__:null,linearToSRGB:c,linearToSRGBView:o,normalize:l,scale:y,scaleView:function(e,t,r){y(e.typedBuffer,t,r,e.typedBufferStride)},transformMat3:u,transformMat3View:i,transformMat4:function(e,t,r,f=4,n=f){if(e.length/f!=t.length/n)return void s().error("source and destination buffers need to have the same number of elements");let i=e.length/f,u=r[0],l=r[1],y=r[2],o=r[3],c=r[4],p=r[5],a=r[6],d=r[7],h=r[8],T=r[9],B=r[10],E=r[11],b=r[12],m=r[13],A=r[14],g=r[15],O=0,S=0;for(let r=0;r<i;r++){let r=t[O],s=t[O+1],i=t[O+2],w=t[O+3];e[S]=u*r+c*s+h*i+b*w,e[S+1]=l*r+p*s+T*i+m*w,e[S+2]=y*r+a*s+B*i+A*w,e[S+3]=o*r+d*s+E*i+g*w,O+=n,S+=f}},transformMat4View:function(e,t,r){if(e.count!==t.count)return;let f=e.count,n=r[0],s=r[1],i=r[2],u=r[3],l=r[4],y=r[5],o=r[6],c=r[7],p=r[8],a=r[9],d=r[10],h=r[11],T=r[12],B=r[13],E=r[14],b=r[15],m=e.typedBuffer,A=e.typedBufferStride,g=t.typedBuffer,O=t.typedBufferStride;for(let e=0;e<f;e++){let t=e*A,r=e*O,f=g[r],S=g[r+1],w=g[r+2],_=g[r+3];m[t]=n*f+l*S+p*w+T*_,m[t+1]=s*f+y*S+a*w+B*_,m[t+2]=i*f+o*S+d*w+E*_,m[t+3]=u*f+c*S+h*w+b*_}}},Symbol.toStringTag,{value:"Module"}))},92160:(e,t,r)=>{r.d(t,{$5:()=>w,CN:()=>A,GN:()=>R,JP:()=>m,KM:()=>L,Mv:()=>C,OD:()=>f,X4:()=>g,gZ:()=>M,gr:()=>S,qs:()=>_,si:()=>O,xA:()=>N});var f,n,s=r(20538),i=r(6815),u=r(3391),l=r(40998),y=r(38715),o=r(63599),c=r(56911),p=r(26270),a=r(70983),d=r(54015),h=r(71760),T=r(6322),B=r(96772),E=r(78863),b=r(75550);let m="Projection may be possible after calling projection.load().";function A(e,t,r,f){e.error(`Failed to project from (wkid:${t.wkid}) to (wkid:${r.wkid}).${f?" ":""}${f}`)}function g(e,t,r,s,i,u){return P(n.TO_PCPF,B.xs.fromTypedArray(e),f.NORMAL,B.Xm.fromTypedArray(t),r,B.Xm.fromTypedArray(s),i,B.xs.fromTypedArray(u))?u:null}function O(e,t,r,s,i,u){return P(n.FROM_PCPF,B.xs.fromTypedArray(e),f.NORMAL,B.Xm.fromTypedArray(t),r,B.Xm.fromTypedArray(s),i,B.xs.fromTypedArray(u))?u:null}function S(e,t,r,f){return(0,a.projectBuffer)(e,t,0,r,f,0)?r:null}function w(e,t,r,f){return(0,a.projectBuffer)(e,t,0,r,f,0)?r:null}function _(e,t,r){return(0,i.Ge)(G,r),(0,E.b)(t,e,G),(0,s.or)(G)&&(0,E.n)(t,t),t}function L(e,t,r){return(0,i.z0)(G,r),(0,b.t)(t,e,G),(0,s.or)(G)&&(0,E.n)(t,t,4),t}function M(e,t,r,n){let i=t===f.NORMAL;return x(e,t,r,(e,t)=>{let r=Math.cos((0,s.kU)(e));t[0]=i?r:1/r,t[1]=1},n)}function R(e,t,r,n){let s=t===f.NORMAL;return x(e,t,r,(e,t)=>{let r=Math.cosh(-e/d.$O.radius);t[0]=1,t[1]=s?r:1/r},n)}function x(e,t,r,n,s){let i=t===f.NORMAL?3:4,u=[0,0];for(let t=0,f=1;t<e.length;t+=i,f+=3){n(r[f],u);let l=e[t]*u[0],y=e[t+1]*u[1],o=e[t+2],c=1/Math.sqrt(l*l+y*y+o*o);s[t]=l*c,s[t+1]=y*c,s[t+2]=o*c,4===i&&(s[t+3]=e[t+3])}return s}function N(e,t,r,s,i,u){if(!P(n.TO_PCPF,B.xs.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),f.TANGENT,B.Xm.fromTypedArray(t),r,B.Xm.fromTypedArray(s),i,B.xs.fromTypedArray(u,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let t=3;t<e.length;t+=4)u[t]=e[t];return u}function C(e,t,r,s,i,u){if(!P(n.FROM_PCPF,B.xs.fromTypedArray(e,16),f.TANGENT,B.Xm.fromTypedArray(t),r,B.Xm.fromTypedArray(s),i,B.xs.fromTypedArray(u,16)))return null;for(let t=3;t<e.length;t+=4)u[t]=e[t];return u}function v(e,t,r,s,u){switch((0,p.l)(s,r,Y,s),e===n.FROM_PCPF&&(0,l.B8)(Y,Y),t){case f.NORMAL:return(0,i.Ge)(u,Y);case f.TANGENT:return(0,i.z0)(u,Y)}}function P(e,t,r,s,i,u,l,y){var c;if(!t)return;let p=s.count;if((c=i).isWGS84||(0,h.x1)(c)||(0,h.q8)(c)||(0,h.KQ)(c))for(let f=0;f<p;f++)u.getVec(f,F),t.getVec(f,U),(0,o.q)(U,U,v(e,r,F,l,G)),y.setVec(f,U);else for(let i=0;i<p;i++){u.getVec(i,F),t.getVec(i,U);let c=Math.cos((0,T.jg)(s.get(i,1)));r===f.TANGENT!=(e===n.TO_PCPF)&&(c=1/c),v(e,r,F,l,G),e===n.TO_PCPF?(G[0]*=c,G[1]*=c,G[2]*=c,G[3]*=c,G[4]*=c,G[5]*=c):(G[0]*=c,G[3]*=c,G[6]*=c,G[1]*=c,G[4]*=c,G[7]*=c),(0,o.q)(U,U,G),(0,o.n)(U,U),y.setVec(i,U)}return y}!function(e){e[e.NORMAL=0]="NORMAL",e[e.TANGENT=1]="TANGENT"}(f||(f={})),function(e){e[e.TO_PCPF=0]="TO_PCPF",e[e.FROM_PCPF=1]="FROM_PCPF"}(n||(n={}));let F=(0,c.vt)(),U=(0,c.vt)(),Y=(0,y.vt)(),G=(0,u.vt)()},93575:(e,t,r)=>{r.d(t,{projectMeshVertexPositions:()=>u});var f=r(70983),n=r(76277),s=r(71760),i=r(18343);function u(e,t){let r=(0,i.UR)(e,n.A.absolute);if(!r)return null;let u=r.position;return(0,s.aI)(e.spatialReference,t)||(u=new Float64Array(r.position.length),(0,f.projectBuffer)(r.position,e.spatialReference,0,u,t,0))?u:null}},96772:(e,t,r)=>{r.d(t,{Y$:()=>p,qB:()=>m,Qt:()=>I,My:()=>z,bf:()=>U,jZ:()=>T,j0:()=>B,Sx:()=>E,E$:()=>b,h:()=>M,P:()=>C,SL:()=>S,gH:()=>a,si:()=>A,mJ:()=>X,UL:()=>$,D6:()=>Y,Yi:()=>R,An:()=>v,LC:()=>w,xs:()=>d,Xm:()=>g,Vp:()=>j,zD:()=>k,m8:()=>G,nS:()=>x,H$:()=>P,eI:()=>_,Eq:()=>h,Aj:()=>O,E7:()=>q,Y4:()=>D,TX:()=>V,Uz:()=>N,ml:()=>F,XP:()=>L});class f{constructor(e,t,r=0,f,n){this.TypedArrayConstructor=e,this.elementCount=9;let s=this.TypedArrayConstructor;void 0===f&&(f=9*s.BYTES_PER_ELEMENT);let i=0===t.byteLength?0:r;this.typedBuffer=null==n?new s(t,i):new s(t,i,(n-r)/s.BYTES_PER_ELEMENT),this.typedBufferStride=f/s.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){let f=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,f,this.stride,f+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){let f=this.typedBuffer,n=t.typedBuffer,s=e*this.typedBufferStride,i=r*t.typedBufferStride;for(let e=0;e<9;++e)f[s++]=n[i++]}get buffer(){return this.typedBuffer.buffer}}f.ElementCount=9;class n{constructor(e,t,r=0,f,n){this.TypedArrayConstructor=e,this.elementCount=16;let s=this.TypedArrayConstructor;void 0===f&&(f=16*s.BYTES_PER_ELEMENT);let i=0===t.byteLength?0:r;this.typedBuffer=null==n?new s(t,i):new s(t,i,(n-r)/s.BYTES_PER_ELEMENT),this.typedBufferStride=f/s.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){let f=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,f,this.stride,f+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){this.copyFromTypedBuffer(e,t.typedBuffer,r*t.typedBufferStride)}copyFromTypedBuffer(e,t,r){let f=this.typedBuffer,n=e*this.typedBufferStride;for(let e=0;e<16;++e)f[n++]=t[r++]}get buffer(){return this.typedBuffer.buffer}}n.ElementCount=16;class s{constructor(e,t,r=0,f,n){this.TypedArrayConstructor=e,this.elementCount=1;let s=this.TypedArrayConstructor;void 0===f&&(f=s.BYTES_PER_ELEMENT);let i=0===t.byteLength?0:r;this.typedBuffer=null==n?new s(t,i):new s(t,i,(n-r)/s.BYTES_PER_ELEMENT),this.stride=f,this.typedBufferStride=f/s.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(e,t,r=this.count-t){let f=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,f,this.stride,f+r*this.stride)}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}s.ElementCount=1;var i=r(54036);class u{constructor(e,t,r=0,f,n){this.TypedArrayConstructor=e,this.elementCount=2;let s=this.TypedArrayConstructor;void 0===f&&(f=2*s.BYTES_PER_ELEMENT);let i=0===t.byteLength?0:r;this.typedBuffer=null==n?new s(t,i):new s(t,i,(n-r)/s.BYTES_PER_ELEMENT),this.typedBufferStride=f/s.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){let f=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,i.hZ)(t,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=r}copyFrom(e,t,r){let f=this.typedBuffer,n=t.typedBuffer,s=e*this.typedBufferStride,i=r*t.typedBufferStride;f[s++]=n[i++],f[s]=n[i]}get buffer(){return this.typedBuffer.buffer}}u.ElementCount=2;var l=r(63599);class y{constructor(e,t,r=0,f,n){this.TypedArrayConstructor=e,this.elementCount=3;let s=this.TypedArrayConstructor;void 0===f&&(f=3*s.BYTES_PER_ELEMENT);let i=0===t.byteLength?0:r;this.typedBuffer=null==n?new s(t,i):new s(t,i,(n-r)/s.BYTES_PER_ELEMENT),this.typedBufferStride=f/s.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){let f=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,l.i)(t,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,f){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e]=f}copyFrom(e,t,r){let f=this.typedBuffer,n=t.typedBuffer,s=e*this.typedBufferStride,i=r*t.typedBufferStride;f[s++]=n[i++],f[s++]=n[i++],f[s]=n[i]}get buffer(){return this.typedBuffer.buffer}}y.ElementCount=3;var o=r(13784);class c{constructor(e,t,r=0,f,n){this.TypedArrayConstructor=e,this.start=r,this.elementCount=4;let s=this.TypedArrayConstructor;void 0===f&&(f=4*s.BYTES_PER_ELEMENT);let i=0===t.byteLength?0:r;this.typedBuffer=null==n?new s(t,i):new s(t,i,(n-r)/s.BYTES_PER_ELEMENT),this.typedBufferStride=f/s.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){let f=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,o.s)(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,f,n){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e++]=f,this.typedBuffer[e]=n}copyFrom(e,t,r){let f=this.typedBuffer,n=t.typedBuffer,s=e*this.typedBufferStride,i=r*t.typedBufferStride;f[s++]=n[i++],f[s++]=n[i++],f[s++]=n[i++],f[s]=n[i]}get buffer(){return this.typedBuffer.buffer}}c.ElementCount=4;class p extends s{constructor(e,t=0,r,f){super(Float32Array,e,t,r,f),this.elementType="f32"}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class a extends u{constructor(e,t=0,r,f){super(Float32Array,e,t,r,f),this.elementType="f32"}slice(e,t){return this.sliceBuffer(a,e,t)}static fromTypedArray(e,t){return new a(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}a.ElementType="f32";class d extends y{constructor(e,t=0,r,f){super(Float32Array,e,t,r,f),this.elementType="f32"}slice(e,t){return this.sliceBuffer(d,e,t)}static fromTypedArray(e,t){return new d(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}d.ElementType="f32";class h extends c{constructor(e,t=0,r,f){super(Float32Array,e,t,r,f),this.elementType="f32"}slice(e,t){return this.sliceBuffer(h,e,t)}static fromTypedArray(e,t){return new h(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}h.ElementType="f32";class T extends f{constructor(e,t=0,r,f){super(Float32Array,e,t,r,f),this.elementType="f32"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f32";class B extends f{constructor(e,t=0,r,f){super(Float64Array,e,t,r,f),this.elementType="f64"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="f64";class E extends n{constructor(e,t=0,r,f){super(Float32Array,e,t,r,f),this.elementType="f32"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="f32";class b extends n{constructor(e,t=0,r,f){super(Float64Array,e,t,r,f),this.elementType="f64"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f64";class m extends s{constructor(e,t=0,r,f){super(Float64Array,e,t,r,f),this.elementType="f64"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class A extends u{constructor(e,t=0,r,f){super(Float64Array,e,t,r,f),this.elementType="f64"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="f64";class g extends y{constructor(e,t=0,r,f){super(Float64Array,e,t,r,f),this.elementType="f64"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="f64";class O extends c{constructor(e,t=0,r,f){super(Float64Array,e,t,r,f),this.elementType="f64"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="f64";class S extends s{constructor(e,t=0,r,f){super(Uint8Array,e,t,r,f),this.elementType="u8"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="u8";class w extends u{constructor(e,t=0,r,f){super(Uint8Array,e,t,r,f),this.elementType="u8"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u8";class _ extends y{constructor(e,t=0,r,f){super(Uint8Array,e,t,r,f),this.elementType="u8"}slice(e,t){return this.sliceBuffer(_,e,t)}static fromTypedArray(e,t){return new _(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}_.ElementType="u8";class L extends c{constructor(e,t=0,r,f){super(Uint8Array,e,t,r,f),this.elementType="u8"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u8";class M extends s{constructor(e,t=0,r,f){super(Uint16Array,e,t,r,f),this.elementType="u16"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="u16";class R extends u{constructor(e,t=0,r,f){super(Uint16Array,e,t,r,f),this.elementType="u16"}slice(e,t){return this.sliceBuffer(R,e,t)}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="u16";class x extends y{constructor(e,t=0,r,f){super(Uint16Array,e,t,r,f),this.elementType="u16"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u16";class N extends c{constructor(e,t=0,r,f){super(Uint16Array,e,t,r,f),this.elementType="u16"}slice(e,t){return this.sliceBuffer(N,e,t)}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="u16";class C extends s{constructor(e,t=0,r,f){super(Uint32Array,e,t,r,f),this.elementType="u32"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="u32";class v extends u{constructor(e,t=0,r,f){super(Uint32Array,e,t,r,f),this.elementType="u32"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="u32";class P extends y{constructor(e,t=0,r,f){super(Uint32Array,e,t,r,f),this.elementType="u32"}slice(e,t){return this.sliceBuffer(P,e,t)}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="u32";class F extends c{constructor(e,t=0,r,f){super(Uint32Array,e,t,r,f),this.elementType="u32"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u32";class U extends s{constructor(e,t=0,r,f){super(Int8Array,e,t,r,f),this.elementType="i8"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="i8";class Y extends u{constructor(e,t=0,r,f){super(Int8Array,e,t,r,f),this.elementType="i8"}slice(e,t){return this.sliceBuffer(Y,e,t)}static fromTypedArray(e,t){return new Y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Y.ElementType="i8";class G extends y{constructor(e,t=0,r,f){super(Int8Array,e,t,r,f),this.elementType="i8"}slice(e,t){return this.sliceBuffer(G,e,t)}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="i8";class V extends c{constructor(e,t=0,r,f){super(Int8Array,e,t,r,f),this.elementType="i8"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i8";class I extends s{constructor(e,t=0,r,f){super(Int16Array,e,t,r,f),this.elementType="i16"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="i16";class X extends u{constructor(e,t=0,r,f){super(Int16Array,e,t,r,f),this.elementType="i16"}slice(e,t){return this.sliceBuffer(X,e,t)}static fromTypedArray(e,t){return new X(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}X.ElementType="i16";class j extends y{constructor(e,t=0,r,f){super(Int16Array,e,t,r,f),this.elementType="i16"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="i16";class q extends c{constructor(e,t=0,r,f){super(Int16Array,e,t,r,f),this.elementType="i16"}slice(e,t){return this.sliceBuffer(q,e,t)}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i16";class z extends s{constructor(e,t=0,r,f){super(Int32Array,e,t,r,f),this.elementType="i32"}slice(e,t){return this.sliceBuffer(z,e,t)}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i32";class $ extends u{constructor(e,t=0,r,f){super(Int32Array,e,t,r,f),this.elementType="i32"}slice(e,t){return this.sliceBuffer($,e,t)}static fromTypedArray(e,t){return new $(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}$.ElementType="i32";class k extends y{constructor(e,t=0,r,f){super(Int32Array,e,t,r,f),this.elementType="i32"}slice(e,t){return this.sliceBuffer(k,e,t)}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i32";class D extends c{constructor(e,t=0,r,f){super(Int32Array,e,t,r,f),this.elementType="i32"}slice(e,t){return this.sliceBuffer(D,e,t)}static fromTypedArray(e,t){return new D(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}D.ElementType="i32"}}]);