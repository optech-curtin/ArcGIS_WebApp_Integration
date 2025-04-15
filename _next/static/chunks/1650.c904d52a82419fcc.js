"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1650],{21650:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var n=i(20538),a={};a.defaultNoDataValue=(0,n.$8)(-1/0),a.decode=function(e,t){var i=(t=t||{}).encodedMaskData||null===t.encodedMaskData,f=o(e,t.inputOffset||0,i),u=null!=t.noDataValue?(0,n.$8)(t.noDataValue):a.defaultNoDataValue,m=l(f,t.pixelType||Float32Array,t.encodedMaskData,u,t.returnMask),d={width:f.width,height:f.height,pixelData:m.resultPixels,minValue:f.pixels.minValue,maxValue:f.pixels.maxValue,noDataValue:u};return m.resultMask&&(d.maskData=m.resultMask),t.returnEncodedMask&&f.mask&&(d.encodedMaskData=f.mask.bitset?f.mask.bitset:null),t.returnFileInfo&&(d.fileInfo=s(f,u),t.computeUsedBitDepths&&(d.fileInfo.bitDepths=r(f))),d};var l=function(e,t,i,n,a){var l,s,r=0,o=e.pixels.numBlocksX,u=e.pixels.numBlocksY,m=Math.floor(e.width/o),d=Math.floor(e.height/u),c=2*e.maxZError;i=i||(e.mask?e.mask.bitset:null),l=new t(e.width*e.height),a&&i&&(s=new Uint8Array(e.width*e.height));for(var h,g,k=new Float32Array(m*d),x=0;x<=u;x++){var p=x!==u?d:e.height%u;if(0!==p)for(var w=0;w<=o;w++){var y=w!==o?m:e.width%o;if(0!==y){var V,B,v,U,D=x*e.width*d+w*m,b=e.width-y,M=e.pixels.blocks[r];if(M.encoding<2?(0===M.encoding?V=M.rawData:(f(M.stuffedData,M.bitsPerPixel,M.numValidPixels,M.offset,c,k,e.pixels.maxValue),V=k),B=0):v=2===M.encoding?0:M.offset,i)for(g=0;g<p;g++){for(7&D&&(U=i[D>>3]<<(7&D)),h=0;h<y;h++)7&D||(U=i[D>>3]),128&U?(s&&(s[D]=1),l[D++]=M.encoding<2?V[B++]:v):(s&&(s[D]=0),l[D++]=n),U<<=1;D+=b}else if(M.encoding<2)for(g=0;g<p;g++){for(h=0;h<y;h++)l[D++]=V[B++];D+=b}else for(g=0;g<p;g++)if(l.fill)l.fill(v,D,D+y),D+=y+b;else{for(h=0;h<y;h++)l[D++]=v;D+=b}if(1===M.encoding&&B!==M.numValidPixels)throw"Block and Mask do not match";r++}}}return{resultPixels:l,resultMask:s}},s=function(e,t){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,minValue:e.pixels.minValue,noDataValue:t}}},r=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,i={},n=0;n<t;n++){var a=e.pixels.blocks[n];0===a.encoding?i.float32=!0:1===a.encoding?i[a.bitsPerPixel]=!0:i[0]=!0}return Object.keys(i)},o=function(e,t,i){var n={},a=new Uint8Array(e,t,10);if(n.fileIdentifierString=String.fromCharCode.apply(null,a),"CntZImage"!=n.fileIdentifierString.trim())throw"Unexpected file identifier string: "+n.fileIdentifierString;var l=new DataView(e,t+=10,24);if(n.fileVersion=l.getInt32(0,!0),n.imageType=l.getInt32(4,!0),n.height=l.getUint32(8,!0),n.width=l.getUint32(12,!0),n.maxZError=l.getFloat64(16,!0),t+=24,!i)if(l=new DataView(e,t,16),n.mask={},n.mask.numBlocksY=l.getUint32(0,!0),n.mask.numBlocksX=l.getUint32(4,!0),n.mask.numBytes=l.getUint32(8,!0),n.mask.maxValue=l.getFloat32(12,!0),t+=16,n.mask.numBytes>0){var s=new Uint8Array(Math.ceil(n.width*n.height/8)),r=(l=new DataView(e,t,n.mask.numBytes)).getInt16(0,!0),o=2,f=0;do{if(r>0)for(;r--;)s[f++]=l.getUint8(o++);else{var u=l.getUint8(o++);for(r=-r;r--;)s[f++]=u}r=l.getInt16(o,!0),o+=2}while(o<n.mask.numBytes);if(-32768!==r||f<s.length)throw"Unexpected end of mask RLE encoding";n.mask.bitset=s,t+=n.mask.numBytes}else n.mask.numBytes|n.mask.numBlocksY|n.mask.maxValue||(s=new Uint8Array(Math.ceil(n.width*n.height/8)),n.mask.bitset=s);l=new DataView(e,t,16),n.pixels={},n.pixels.numBlocksY=l.getUint32(0,!0),n.pixels.numBlocksX=l.getUint32(4,!0),n.pixels.numBytes=l.getUint32(8,!0),n.pixels.maxValue=l.getFloat32(12,!0),t+=16;var m=n.pixels.numBlocksX,d=n.pixels.numBlocksY,c=m+ +(n.width%m>0),h=d+ +(n.height%d>0);n.pixels.blocks=Array(c*h);for(var g=1e9,k=0,x=0;x<h;x++)for(var p=0;p<c;p++){var w=0,y=e.byteLength-t;l=new DataView(e,t,Math.min(10,y));var V={};n.pixels.blocks[k++]=V;var B=l.getUint8(0);if(w++,V.encoding=63&B,V.encoding>3)throw"Invalid block encoding ("+V.encoding+")";if(2!==V.encoding){if(0!==B&&2!==B){if(V.offsetType=B>>=6,2===B)V.offset=l.getInt8(1),w++;else if(1===B)V.offset=l.getInt16(1,!0),w+=2;else{if(0!==B)throw"Invalid block offset type";V.offset=l.getFloat32(1,!0),w+=4}if(g=Math.min(V.offset,g),1===V.encoding)if(B=l.getUint8(w),w++,V.bitsPerPixel=63&B,V.numValidPixelsType=B>>=6,2===B)V.numValidPixels=l.getUint8(w),w++;else if(1===B)V.numValidPixels=l.getUint16(w,!0),w+=2;else{if(0!==B)throw"Invalid valid pixel count type";V.numValidPixels=l.getUint32(w,!0),w+=4}}if(t+=w,3!=V.encoding){if(0===V.encoding){var v,U=(n.pixels.numBytes-1)/4;if(U!==Math.floor(U))throw"uncompressed block has invalid length";new Uint8Array(v=new ArrayBuffer(4*U)).set(new Uint8Array(e,t,4*U));for(var D=new Float32Array(v),b=0;b<D.length;b++)g=Math.min(g,D[b]);V.rawData=D,t+=4*U}else if(1===V.encoding){var M=Math.ceil(V.numValidPixels*V.bitsPerPixel/8);new Uint8Array(v=new ArrayBuffer(4*Math.ceil(M/4))).set(new Uint8Array(e,t,M)),V.stuffedData=new Uint32Array(v),t+=M}}}else t++,g=Math.min(g,0)}return n.pixels.minValue=g,n.eofOffset=t,n},f=function(e,t,i,n,a,l,s){var r,o,f,u=(1<<t)-1,m=0,d=0,c=Math.ceil((s-n)/a),h=4*e.length-Math.ceil(t*i/8);for(e[e.length-1]<<=8*h,r=0;r<i;r++){if(0===d&&(f=e[m++],d=32),d>=t)o=f>>>d-t&u,d-=t;else{var g=t-d;o=((f&u)<<g&u)+((f=e[m++])>>>(d=32-g))}l[r]=o<c?n+o*a:s}return l};let u=a.decode;class m{_decode(e){let t=u(e.buffer,e.options);return Promise.resolve({result:t,transferList:[t.pixelData.buffer]})}}function d(){return new m}}}]);