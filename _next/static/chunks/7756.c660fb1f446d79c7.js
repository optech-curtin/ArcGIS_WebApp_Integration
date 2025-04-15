"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7756,8623],{13506:(e,t,r)=>{r.d(t,{default:()=>n});var i=r(32391),l=r(61939),a=r(99572);function n(e,t,r,n,h){if(null==e)return null;let o=e.references("geometry")&&h?function(e,t,r){let{transform:n,hasZ:h,hasM:o}=r;s.has(t)||s.set(t,function(e){let t={};switch(e){case"esriGeometryPoint":return(e,r,i,l)=>(0,a.Tr)(r,t,e,i,l);case"esriGeometryPolygon":return(e,r,i,l)=>(0,a.$X)(r,t,e,i,l);case"esriGeometryPolyline":return(e,r,i,l)=>(0,a.P5)(r,t,e,i,l);case"esriGeometryMultipoint":return(e,r,i,l)=>(0,a.SW)(r,t,e,i,l);default:return l.A.getLogger("esri.views.2d.support.arcadeOnDemand").error(new i.A("mapview-arcade",`Unable to handle geometryType: ${e}`)),e=>e}}(t));let u=s.get(t)(e.geometry,n,h,o);return{...e,geometry:u}}(t,n,h):t,u=e.repurposeFeature(o);try{return e.evaluate({...r,$feature:u},e.services)}catch(e){return l.A.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",e),null}}let s=new Map},35237:(e,t,r)=>{r.d(t,{A:()=>a});var i=r(47507),l=r(56121);class a{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(e){return this._resourceMap.get(e)??null}async fetchResource(e,t){let r=this._resourceMap.get(e);if(r)return{width:r.width,height:r.height};let i=this._inFlightResourceMap.get(e);return i?i.then(e=>({width:e.width,height:e.height})):(i=(0,l.M5)(e,t),this._inFlightResourceMap.set(e,i),i.then(t=>(this._inFlightResourceMap.delete(e),this._resourceMap.set(e,t),{width:t.width,height:t.height}),()=>({width:0,height:0})))}deleteResource(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}loadFont(e){return(0,i.Al)(e)}}},48623:(e,t,r)=>{r.r(t),r.d(t,{CIMSymbolRasterizer:()=>u});var i=r(35237),l=r(75061),a=r(5886),n=r(89063),s=r(66544),h=r(95832);let o=96/72;class u{constructor(e){this._spatialReference=e,this._imageDataCanvas=null,this._cimResourceManager=new i.A}get _canvas(){return this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas")),this._imageDataCanvas}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(e,t,r,i,l,o,u,f,p,m){if(!e)return null;let{data:y}=e;if(!y||"CIMSymbolReference"!==y.type||!y.symbol)return null;let{symbol:g}=y;o||(o=(0,h.n5)(g));let d=await n.OverrideHelper.resolveSymbolOverrides(y,t,this._spatialReference,l,o,u,f),w=this._cimResourceManager,M=[];a.wp.fetchResources(d,w,M),a.wp.fetchFonts(d,w,M),M.length>0&&await Promise.all(M);let{width:v,height:x}=r,b=c(o,v,x,i,m),C=a.wp.getEnvelope(d,b,w);if(!C)return null;C.x===1/0&&(C.x=v+2),C.y===1/0&&(C.y=-x/2),C.width===-1/0&&(C.width=v),C.height===-1/0&&(C.height=x);let I=1,P=0,S=0;switch(g.type){case"CIMPointSymbol":case"CIMTextSymbol":{let e=1;C.width>v&&(e=v/C.width);let t=1;C.height>x&&(t=x/C.height),"preview"===i&&(C.width<v&&(e=v/C.width),C.height<x&&(t=x/C.height)),I=Math.min(e,t),P=C.x+C.width/2,S=C.y+C.height/2}break;case"CIMLineSymbol":if(m){S=C.y+C.height/2,P=C.x+C.width/2;let e=C.width-v,t=C.height-x;b={paths:(0,s.hs)(b.paths,{xmin:-1*C.width/2+e,xmax:C.width/2-e,ymin:-1*C.height/2+t,ymax:C.height/2-t,width:C.width-2*e,height:C.height-2*t})}}else{(p||C.height>x)&&(I=x/C.height),S=C.y+C.height/2;let e=C.x*I+v/2,t=(C.x+C.width)*I+v/2,{paths:r}=b;r[0][0][0]-=e/I,r[0][2][0]-=(t-v)/I}break;case"CIMPolygonSymbol":if(m){S=C.y+C.height/2,P=C.x+C.width/2;let e=C.width-v,t=C.height-x;b={paths:(0,s.hs)(b.rings,{xmin:-1*C.width/2+e,xmax:C.width/2-e,ymin:-1*C.height/2+t,ymax:C.height/2-t,width:C.width-2*e,height:C.height-2*t})}}else{P=C.x+C.width/2,S=C.y+C.height/2;let e=C.x*I+v/2,t=(C.x+C.width)*I+v/2,r=C.y*I+x/2,i=(C.y+C.height)*I+x/2,{rings:l}=b;e<0&&(l[0][0][0]-=e,l[0][3][0]-=e,l[0][4][0]-=e),r<0&&(l[0][0][1]+=r,l[0][1][1]+=r,l[0][4][1]+=r),t>v&&(l[0][1][0]-=t-v,l[0][2][0]-=t-v),i>x&&(l[0][2][1]+=i-x,l[0][3][1]+=i-x)}}return this.rasterize({type:"cim",data:{type:"CIMSymbolReference",symbol:d}},v,x,P,S,I,o,1,b)}rasterize(e,t,r,i,a,n,s,u=0,f=null,p=window.devicePixelRatio||1){let{data:m}=e;if(!m||"CIMSymbolReference"!==m.type||!m.symbol)return null;let{symbol:y}=m,g=this._canvas,d=p*o;g.width=t*d,g.height=r*d,s||(s=(0,h.n5)(y)),f||(f=c(s,t,r,"legend")),g.width+=2*u,g.height+=2*u;let w=g.getContext("2d",{willReadFrequently:!0}),M=l.IT.createIdentity();return M.translate(-i,-a),M.scale(n*d,-n*d),M.translate(t*d/2+u,r*d/2+u),w.clearRect(0,0,g.width,g.height),new l.Rj(w,this._cimResourceManager,M,!0).drawSymbol(y,f),w.getImageData(0,0,g.width,g.height)}}function c(e,t,r,i,l){let a=-t/2+1,n=t/2-1,h=r/2-1,o=-r/2+1;if(l&&("esriGeometryPolygon"===e||"esriGeometryPolyline"===e)){let i="esriGeometryPolygon"===e?{rings:(0,s.Tl)((0,s.hs)(l.rings,{xmin:0,ymin:0,xmax:t,ymax:r,width:t,height:r}),-1*t/2,-1*r/2)}:"esriGeometryPolyline"===e?{paths:(0,s.Tl)((0,s.hs)(l.paths,{xmin:0,ymin:0,xmax:t,ymax:r,width:t,height:r}),-1*t/2,-1*r/2)}:null;if(i)return i}switch(e){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[a,0],[0,0],[n,0]]]};default:return"legend"===i?{rings:[[[a,h],[n,0],[n,o],[a,o],[a,h]]]}:{rings:[[[a,h],[n,h],[n,o],[a,o],[a,h]]]}}}},89063:(e,t,r)=>{r.d(t,{OverrideHelper:()=>u});var i=r(70152),l=r(64763),a=r(33715),n=r(20703),s=r(95832),h=r(13506);let o=e=>{if(!e)return[0,0,0,0];let{r:t,g:r,b:i,a:l}=e;return[t,r,i,255*l]};class u{static findApplicableOverrides(e,t,r){if(e&&t){if(e.primitiveName){let i=!1;for(let t of r)if(t.primitiveName===e.primitiveName){i=!0;break}if(!i)for(let i of t)i.primitiveName===e.primitiveName&&r.push(i)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(let i of e.effects)u.findApplicableOverrides(i,t,r);if(e.symbolLayers)for(let i of e.symbolLayers)u.findApplicableOverrides(i,t,r);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(let i of e.effects)u.findApplicableOverrides(i,t,r);if(e.markerPlacement&&u.findApplicableOverrides(e.markerPlacement,t,r),"CIMVectorMarker"===e.type){if(e.markerGraphics)for(let i of e.markerGraphics)u.findApplicableOverrides(i,t,r),u.findApplicableOverrides(i.symbol,t,r)}else"CIMCharacterMarker"===e.type?u.findApplicableOverrides(e.symbol,t,r):"CIMHatchFill"===e.type?u.findApplicableOverrides(e.lineSymbol,t,r):"CIMPictureMarker"===e.type&&u.findApplicableOverrides(e.animatedSymbolProperties,t,r)}}}static findEffectOverrides(e,t){if(!e)return null;if("CIMGeometricEffectDashes"===e.type&&(0,s.FH)(e),!t||!e.primitiveName)return{type:"cim-effect-param",effect:e,overrides:[]};let r=(0,s.rB)(e),i=e.primitiveName,l=[];for(let e of t)e.primitiveName===i&&l.push((0,s.rB)(e));return{type:"cim-effect-param",effect:r,overrides:(0,s.pk)(l)}}static async resolveSymbolOverrides(e,t,r,i,l,n,h){if(!e?.symbol)return null;let{symbol:o,primitiveOverrides:c}=e,f=!!c;if(!f&&!i)return o;o=(0,a.o8)(o),c=(0,a.o8)(c);let p=!0;if(t||(t={attributes:{}},p=!1),f){if(p||(c=c.filter(e=>!e.valueExpressionInfo?.expression.includes("$feature"))),h||(c=c.filter(e=>!e.valueExpressionInfo?.expression.includes("$view"))),c.length>0){let e={spatialReference:r,fields:(0,s.O2)(t.attributes),geometryType:l};await u.createRenderExpressions(c,e),u.evaluateOverrides(c,t,l??"esriGeometryPoint",n,h)}u.applyOverrides(o,c)}return i&&u.applyDictionaryTextOverrides(o,t,i,null),o}static async createRenderExpressions(e,t){let r=[];for(let i of e){let e=i.valueExpressionInfo;if(!e||u._expressionToRenderExpression.has(e.expression))continue;let l=(0,n.Ad)(e.expression,t.spatialReference,t.fields);r.push(l),l.then(t=>u._expressionToRenderExpression.set(e.expression,t))}r.length>0&&await Promise.all(r)}static evaluateOverrides(e,t,r,i,a){let n={$view:{scale:a?.scale}};for(let a of e){a.value&&"object"==typeof a.value&&(0,l.IB)(a.value)&&("Color"===a.propertyName||"StrokeColor"===a.propertyName)&&(a.value=o(a.value));let e=a.valueExpressionInfo;if(!e)continue;let s=u._expressionToRenderExpression.get(e.expression);s&&(a.value=(0,h.default)(s,t,n,r,i))}}static applyDictionaryTextOverrides(e,t,r,i,l="Normal"){if(e?.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{let a=e.symbolLayers;if(!a)return;for(let n of a)n&&"CIMVectorMarker"===n.type&&u.applyDictionaryTextOverrides(n,t,r,i,"CIMTextSymbol"===e.type?e.textCase:l)}break;case"CIMVectorMarker":{let l=e.markerGraphics;if(!l)return;for(let e of l)e&&u.applyDictionaryTextOverrides(e,t,r,i)}break;case"CIMMarkerGraphic":{let a=e.textString;if(a&&a.includes("[")){let n=(0,s.gQ)(a,r);e.textString=(0,s.FM)(t,n,i,l)}}}}static applyOverrides(e,t,r,i){if(e.primitiveName){for(let l of t)if(l.primitiveName===e.primitiveName){let t=(0,s.YF)(l.propertyName);if(i&&i.push({cim:e,nocapPropertyName:t,value:e[t]}),r){let t=!1;for(let i of r)i.primitiveName===e.primitiveName&&(t=!0);t||r.push(l)}null!=l.value&&(e[t]=l.value)}}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(let l of e.effects)u.applyOverrides(l,t,r,i);if(e.symbolLayers)for(let l of e.symbolLayers)u.applyOverrides(l,t,r,i);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(let l of e.effects)u.applyOverrides(l,t,r,i);if("CIMVectorMarker"===e.type&&e.markerGraphics)for(let l of e.markerGraphics)u.applyOverrides(l,t,r,i),u.applyOverrides(l.symbol,t,r,i)}}static restoreOverrides(e){for(let t of e)t.cim[t.nocapPropertyName]=t.value}static buildOverrideKey(e){let t="";for(let r of e)void 0!==r.value&&(t+=`${r.primitiveName}${r.propertyName}${JSON.stringify(r.value)}`);return t}static toValue(e,t){if("DashTemplate"===e)return t.split(" ").map(e=>Number(e));if("Color"===e){let e=new i.A(t).toRgba();return e[3]*=255,e}return t}}u._expressionToRenderExpression=new Map},89540:(e,t,r)=>{r.d(t,{previewCIMSymbol:()=>g});var i=r(55048),l=r(5886),a=r(48623),n=r(89063),s=r(95832),h=r(78866),o=r(24764);let u=new a.CIMSymbolRasterizer(null),c=(0,i.PN)(h.CB.size),f=(0,i.PN)(h.CB.maxSize),p=(0,i.PN)(h.CB.lineWidth);async function m(e,t,r){let i=t?.size,l=null!=i&&"object"==typeof i&&"width"in i?i.width:i,a=null!=i&&"object"==typeof i&&"height"in i?i.height:i;if(null==l||null==a)if("esriGeometryPolygon"===r)l=a=t.maxSize?Math.min(t.maxSize,c):c;else{let i=await y(e,t,r);i&&(l=i.width,a=i.height),"esriGeometryPolyline"===r&&(l=t.maxSize?Math.min(t.maxSize,p):p),l=null!=l&&isFinite(l)?Math.min(l,f):c,a=null!=a&&isFinite(a)?Math.max(Math.min(a,f),1):c}return"legend"===t.style&&"esriGeometryPolyline"===r&&(l=p),{width:l,height:a}}async function y(e,t,r){let{feature:i,fieldMap:a,viewParams:s}=t.cimOptions||t,h=await n.OverrideHelper.resolveSymbolOverrides(e.data,i,null,a,r,null,s);if(!h)return null;(e=e.clone()).data={type:"CIMSymbolReference",symbol:h},e.data.primitiveOverrides=void 0;let o=[];return l.wp.fetchResources(h,u.resourceManager,o),l.wp.fetchFonts(h,u.resourceManager,o),o.length>0&&await Promise.all(o),l.wp.getEnvelope(h,null,u.resourceManager)}async function g(e,t={}){let{node:r,opacity:l,symbolConfig:a}=t,n=null!=a&&"object"==typeof a&&"isSquareFill"in a&&a.isSquareFill,h=t.cimOptions||t,c=h.geometryType||(0,s.n5)(e?.data?.symbol),f=await m(e,t,c),{feature:p,fieldMap:y}=h,d=t?.geometry||n||"esriGeometryPolygon"!==c?"preview":"legend",w=f;if(t?.geometry&&("esriGeometryPolygon"===c||"esriGeometryPolyline"===c)&&(200>(0,i.Lz)(f.width)||200>(0,i.Lz)(f.height))){let e=f.width>f.height?(0,i.PN)(200)*f.height/f.width:(0,i.PN)(200);w={width:f.width>f.height?(0,i.PN)(200):(0,i.PN)(200)*f.width/f.height,height:e}}let M=await u.rasterizeCIMSymbolAsync(e,p,w,d,y,c,null,h.viewParams,h.allowScalingUp,t?.geometry?.toJSON());if(!M)return null;let{width:v,height:x}=M,b=document.createElement("canvas");b.width=v,b.height=x,b.getContext("2d").putImageData(M,0,0);let C=(0,i.Lz)(f.width),I=(0,i.Lz)(f.height),P=new Image(C,I);P.src=b.toDataURL(),P.ariaLabel=t.ariaLabel??null,P.alt=t.ariaLabel??"",null!=l&&(P.style.opacity=`${l}`);let S=P;if(null!=t.effectView){let e={shape:{type:"image",x:0,y:0,width:C,height:I,src:P.src},fill:null,stroke:null,offset:[0,0]};S=(0,o.fz)([[e]],[C,I],{effectView:t.effectView,ariaLabel:t.ariaLabel})}return r&&S&&r.appendChild(S),S}},94993:(e,t,r)=>{r.d(t,{A:()=>l});var i=r(25561);class l{constructor(e,t,r,l){this.transformedX=0,this.transformedY=0,this.center=(0,i.fA)(e,t),this.centerT=(0,i.vt)(),this.halfWidth=r/2,this.halfHeight=l/2,this.width=r,this.height=l}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(e){this.center[0]=e}set y(e){this.center[1]=e}clone(){return new l(this.x,this.y,this.width,this.height)}serialize(e){return e.writeF32(this.center[0]),e.writeF32(this.center[1]),e.push(this.width),e.push(this.height),e}findCollisionDelta(e,t=4){let r=Math.abs(e.centerT[0]-this.centerT[0]),i=Math.abs(e.centerT[1]-this.centerT[1]);return Math.log2(Math.min((e.halfWidth+this.halfWidth+t)/r,(e.halfHeight+this.halfHeight+t)/i))}extend(e){let t=Math.min(this.xmin,e.xmin),r=Math.min(this.ymin,e.ymin),i=Math.max(this.xmax,e.xmax)-t,l=Math.max(this.ymax,e.ymax)-r;this.width=i,this.height=l,this.halfWidth=i/2,this.halfHeight=l/2,this.x=t+i/2,this.y=r+l/2}static deserialize(e){let t=e.readF32(),r=e.readF32();return new l(t,r,e.readInt32(),e.readInt32())}}},99572:(e,t,r)=>{function i(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance,1,1]:[1,1,1,1],translate:null!=e.extent?[e.extent.xmin,e.extent.ymax,e.extent.zmin??0,e.extent.mmin??0]:[0,0,0,0]}:null}function l(e){if("lowerLeft"===e.originPosition&&4===e.scale.length&&4===e.translate.length)return e;let{originPosition:t,scale:r,translate:i}=e,l=r[0]??1,a=r[1]??1;return{originPosition:"lowerLeft",scale:[l,"lowerLeft"===t?a:-a,r[2]??1,r[3]??1],translate:[i[0]??0,i[1]??0,i[2]??0,i[3]??0]}}function a({scale:e,translate:t},r){return Math.round((r-t[0])/e[0])}function n({scale:e,translate:t},r){return Math.round((r-t[1])/e[1])}function s({scale:e,translate:t},r){return Math.round(((r??0)-t[2])/e[2])}function h({scale:e,translate:t},r){return r?Math.round((r-t[3])/e[3]):0}function o(e,t){return e&&t?p:e&&!t?c:!e&&t?f:u}r.d(t,{$X:()=>R,B2:()=>n,Gy:()=>I,IE:()=>a,P5:()=>N,Q1:()=>l,QE:()=>S,SW:()=>O,Tr:()=>k,VV:()=>i,wp:()=>P}),r(31789);let u=(e,t)=>{let r=[];if(!t.length)return null;let i=t[0],l=a(e,i[0]),s=n(e,i[1]);r.push([l,s]);for(let i=1;i<t.length;i++){let[h,o]=t[i],u=a(e,h),c=n(e,o);u===l&&c===s||r.push([u-l,c-s]),l=u,s=c}return r},c=(e,t)=>{let r=[];if(!t.length)return null;let i=t[0],l=a(e,i[0]),h=n(e,i[1]),o=s(e,i[2]);r.push([l,h,o]);for(let i=1;i<t.length;i++){let[u,c,f]=t[i],p=a(e,u),m=n(e,c),y=s(e,f);p===l&&m===h&&y===o||r.push([p-l,m-h,y]),l=p,h=m,o=y}return r},f=(e,t)=>{let r=[];if(!t.length)return null;let i=t[0],l=a(e,i[0]),s=n(e,i[1]),o=h(e,i[2]);r.push([l,s,o]);for(let i=1;i<t.length;i++){let[u,c,f]=t[i],p=a(e,u),m=n(e,c),y=h(e,f);p===l&&m===s&&y===o||r.push([p-l,m-s,y]),l=p,s=m,o=y}return r},p=(e,t)=>{let r=[];if(!t.length)return null;let i=t[0],l=a(e,i[0]),o=n(e,i[1]),u=s(e,i[2]),c=h(e,i[3]);r.push([l,o,u,c]);for(let i=1;i<t.length;i++){let[f,p,m,y]=t[i],g=a(e,f),d=n(e,p),w=s(e,m),M=h(e,y);g===l&&d===o&&w===u&&M===c||r.push([g-l,d-o,w,M]),l=g,o=d,u=w,c=M}return r};function m({scale:e,translate:t},r){return r*e[0]+t[0]}function y({scale:e,translate:t},r){return r*e[1]+t[1]}function g({scale:e,translate:t},r){return(r??0)*e[2]+t[2]}function d({scale:e,translate:t},r){return r?r*e[3]+t[3]:0}function w(e,t){return e&&t?b:e&&!t?v:!e&&t?x:M}let M=(e,t)=>{let r=Array(t.length);if(!t.length)return r;let i=t[0],l=m(e,i[0]),a=y(e,i[1]);r[0]=[l,a];let{scale:n,originPosition:s}=e,h=n[0],o="lowerLeft"===s?n[1]:-n[1];for(let e=1;e<t.length;e++){let[i,n]=t[e];l+=h*i,a+=o*n,r[e]=[l,a]}return r},v=(e,t)=>{let r=Array(t.length);if(!t.length)return r;let i=t[0],l=m(e,i[0]),a=y(e,i[1]);r[0]=[l,a,g(e,i[2])];let{scale:n,originPosition:s}=e,h=n[0],o="lowerLeft"===s?n[1]:-n[1];for(let i=1;i<t.length;i++){let[n,s,u]=t[i];l+=h*n,a+=o*s,r[i]=[l,a,g(e,u)]}return r},x=(e,t)=>{let r=Array(t.length);if(!t.length)return r;let i=t[0],l=m(e,i[0]),a=y(e,i[1]);r[0]=[l,a,d(e,i[2])];let{scale:n,originPosition:s}=e,h=n[0],o="lowerLeft"===s?n[1]:-n[1];for(let i=1;i<t.length;i++){let[n,s,u]=t[i];l+=h*n,a+=o*s,r[i]=[l,a,d(e,u)]}return r},b=(e,t)=>{let r=Array(t.length);if(!t.length)return r;let i=t[0],l=m(e,i[0]),a=y(e,i[1]);r[0]=[l,a,g(e,i[2]),d(e,i[3])];let{scale:n,originPosition:s}=e,h=n[0],o="lowerLeft"===s?n[1]:-n[1];for(let i=1;i<t.length;i++){let[n,s,u,c]=t[i];l+=h*n,a+=o*s,r[i]=[l,a,g(e,u),d(e,c)]}return r};function C(e,t,r){let i=Array(r.length);for(let l=0;l<r.length;l++)i[l]=t(e,r[l]);return i}function I(e,t,r){let i=l(e);return t.x=a(i,r.x),t.y=n(i,r.y),null!=r.z&&(t.z=s(i,r.z)),null!=r.m&&(t.m=h(i,r.m)),t}function P(e,t,r){let i=function(e,t,r,i){let l=[],a=o(r,i);for(let r=0;r<t.length;r++){let i=a(e,t[r]);i&&i.length>=3&&l.push(i)}return l.length?l:null}(l(e),r.rings,r.hasZ,r.hasM);return i?(t.rings=i,t.hasZ=r.hasZ??!1,t.hasM=r.hasM??!1,t):null}function S(e,t,r){let i=function(e,t,r,i){let l=[],a=o(r,i);for(let r=0;r<t.length;r++){let i=a(e,t[r]);i&&i.length>=2&&l.push(i)}return l.length?l:null}(l(e),r.paths,r.hasZ,r.hasM);return i?(t.paths=i,t.hasZ=r.hasZ??!1,t.hasM=r.hasM??!1,t):null}function O(e,t,r,i=r?.hasZ??!1,a=r?.hasM??!1){if(null!=r){let n=l(e);t.points=w(i,a)(n,r.points),t.hasZ=i,t.hasM=a}return t}function k(e,t,r,i=null!=r?.z,a=null!=r?.m){if(null==r)return t;let n=l(e);return t.x=m(n,r.x),t.y=y(n,r.y),i&&(t.z=g(n,r.z)),a&&(t.m=d(n,r.m)),t}function R(e,t,r,i=r?.hasZ??!1,a=r?.hasM??!1){return null!=r&&(t.rings=C(l(e),w(i,a),r.rings),t.hasZ=i,t.hasM=a),t}function N(e,t,r,i=r?.hasZ??!1,a=r?.hasM??!1){return null!=r&&(t.paths=C(l(e),w(i,a),r.paths),t.hasZ=i,t.hasM=a),t}}}]);