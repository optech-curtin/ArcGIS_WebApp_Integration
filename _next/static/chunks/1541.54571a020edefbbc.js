"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1541],{13922:(e,r,a)=>{a.d(r,{save:()=>_,saveAs:()=>k});var n=a(31461);a(57845),a(32391);var i=a(90607),l=a(21371),o=a(35063),s=a(71086),u=a(39577),p=a(23226);let d="Feature Service",y="feature-layer-utils",c=`${y}-save`,f=`${y}-save-as`;function m(e){return{isValid:(0,s.W_)(e)&&(!("dynamicDataSource"in e)||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function w(e,r){let a=(0,u.m)(e,"portal-item");return r?.isTable&&(a.layerContainerType="tables"),a}function h(e){let r=[],a=[];for(let{layer:n,layerJSON:i}of e)n.isTable?a.push(i):r.push(i);return{layers:r,tables:a}}async function b(e,r){return/\/\d+\/?$/.test(e.url)?h([r[0]]):v(r,e)}async function v(e,r){if(e.reverse(),!r)return h(e);let a=await S(r,e);for(let r of e)E(r.layer,r.layerJSON,a);return function(e,r){let a=[],n=[];for(let{layer:e}of r){let{isTable:r,layerId:i}=e;r?n.push(i):a.push(i)}I(e.layers,a),I(e.tables,n)}(a,e),a}async function S(e,r){var a,n;let i=await e.fetchData("json");if((a=i)&&Array.isArray(a.layers)&&Array.isArray(a.tables))return i;n=i||={},n.layers||=[],n.tables||=[];let{layer:{url:l,customParameters:o,apiKey:s}}=r[0];return await P(i,{url:l??"",customParameters:o,apiKey:s},r.map(e=>e.layer.layerId)),i}function I(e,r){if(e.length<2)return;let a=[];for(let{id:r}of e)a.push(r);(0,n.aI)(a.sort(g),r.slice().sort(g))&&e.sort((e,a)=>{let n=r.indexOf(e.id),i=r.indexOf(a.id);return n<i?-1:+(n>i)})}function g(e,r){return e<r?-1:+(e>r)}async function P(e,r,a){let{url:n,customParameters:i,apiKey:l}=r,{serviceJSON:s,layersJSON:u}=await (0,o.Q)(n,{customParameters:i,apiKey:l}),p=A(e.layers,s.layers,a),d=A(e.tables,s.tables,a);e.layers=p.itemResources,e.tables=d.itemResources;let y=[...p.added,...d.added],c=u?[...u.layers,...u.tables]:[];await N(e,y,n,c)}function A(e,r,a){let i=(0,n.iv)(e,r,(e,r)=>e.id===r.id);e=e.filter(e=>!i.removed.some(r=>r.id===e.id));let l=i.added;return l.forEach(({id:r})=>{e.push({id:r})}),{itemResources:e,added:l.filter(({id:e})=>!a.includes(e))}}async function N(e,r,a,n){let i=await O(r),l=r.map(({id:e,type:r})=>new(i.get(r))({url:a,layerId:e,sourceJSON:n.find(({id:r})=>r===e)}));await Promise.allSettled(l.map(e=>e.load())),l.forEach(r=>{let{layerId:a,loaded:n,defaultPopupTemplate:i}=r;if(!n||null==i)return;let l={id:a,popupInfo:i.toJSON()};"ArcGISFeatureLayer"!==r.operationalLayerType&&(l.layerType=r.operationalLayerType),E(r,l,e)})}async function O(e){let r=[];e.forEach(({type:e})=>{switch((0,o.K)(e)){case"CatalogLayer":r.push(Promise.all([a.e(1170),a.e(7328),a.e(8542)]).then(a.bind(a,58542)).then(e=>e.default));break;case"FeatureLayer":r.push(Promise.resolve().then(a.bind(a,43778)).then(e=>e.default));break;case"OrientedImageryLayer":r.push(a.e(6339).then(a.bind(a,76339)).then(e=>e.default))}});let n=await Promise.all(r),i=new Map;return e.forEach(({type:e},r)=>{i.set(e,n[r])}),i}function E(e,r,a){e.isTable?T(a.tables,r):T(a.layers,r)}function T(e,r){let a=e.findIndex(({id:e})=>e===r.id);-1===a?e.push(r):e[a]=r}function L(e,r){if(!e.length)throw new t(`${r}:missing-parameters`,"'layers' array should contain at least one feature layer")}function $(e,r){let a=e.map(e=>e.layerId);if(new Set(a).size!==a.length)throw new t(`${r}:invalid-parameters`,"'layers' array should contain only one instance each of layer or table in a feature service")}function x(e,r){let a=0,n=0,i=0;for(let{layerType:e}of[...r.layers,...r.tables])switch(e){case"OrientedImageryLayer":a++;break;case"SubtypeGroupLayer":n++;break;case"SubtypeGroupTable":i++}(0,p.Sm)(e,p.mm.ORIENTED_IMAGERY_LAYER,a>0),(0,p.Sm)(e,p.mm.SUBTYPE_GROUP_LAYER,n>0),(0,p.Sm)(e,p.mm.SUBTYPE_GROUP_TABLE,i>0)}function U(e,r,a){(0,p.OM)(r,p.mm.METADATA),(0,p.Sm)(r,p.mm.MULTI_LAYER,e.length>1),(0,p.Sm)(r,p.mm.SINGLE_LAYER,1===e.length),(0,p.Sm)(r,p.mm.TABLE,a.tables.length>0&&0===a.layers.length),x(r,a)}async function R(e,r,a){x(r,a)}async function J(e,r,a){let{url:n,layerId:i,title:o,fullExtent:s,isTable:u}=e,d=(0,l.qg)(n);r.url=("FeatureServer"===d?.serverType?n:`${n}/${i}`)??null,r.title||=o,r.extent=null,u||null==s||(r.extent=await (0,p.sQ)(s)),U([e],r,a)}async function _(e,r){return(0,i.UN)({layer:e,itemType:d,validateLayer:m,createJSONContext:r=>w(r,e),createItemData:(e,r)=>b(r,[e]),errorNamePrefix:c,setItemProperties:R},r)}async function k(e,r,a){return(0,i.Uh)({layer:e,itemType:d,validateLayer:m,createJSONContext:r=>w(r,e),createItemData:(e,r)=>Promise.resolve(h([e])),errorNamePrefix:f,newItem:r,setItemProperties:J},a)}},30508:(e,r,a)=>{a.d(r,{H:()=>n});function n(e){return e&&"getAtOrigin"in e&&"originOf"in e}},83863:(e,r,a)=>{a.d(r,{v:()=>i});var n=a(30508);function i(e){e?.writtenProperties&&e.writtenProperties.forEach(({target:e,propName:r,newOrigin:a})=>{(0,n.H)(e)&&a&&e.originOf(r)!==a&&e.updateOrigin(r,a)})}},90607:(e,r,a)=>{a.d(r,{UN:()=>b,Uh:()=>v});var n=a(32391),i=a(83863),l=a(14307),o=a(28015),s=a(39577),u=a(23226),p=a(94668);async function d(e){let{layer:r,errorNamePrefix:a,validateLayer:i}=e;await r.load(),function(e,r,a){let i=a(e);if(!i.isValid)throw new n.A(`${r}:invalid-parameters`,i.errorMessage,{layer:e})}(r,a,i)}function y(e,r){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${r}`}function c(e){let{item:r,errorNamePrefix:a,layer:i,validateItem:l}=e;if(function(e){let{item:r,itemType:a,additionalItemType:i,errorNamePrefix:l,layer:o}=e,s=[a];if(i&&s.push(i),!s.includes(r.type)){let e=s.map(e=>`'${e}'`).join(", ");throw new n.A(`${l}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:r,layer:o})}}(e),l){let e=l(r);if(!e.isValid)throw new n.A(`${a}:invalid-parameters`,e.errorMessage,{layer:i})}}function f(e){return(0,s.m)(e,"portal-item")}async function m(e,r,a){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();let n=e.write({},r);return await Promise.all(r.resources?.pendingOperations??[]),(0,p.c)(r,{errorName:"layer-write:unsupported"},a),n}function w(e){(0,u.LG)(e,u.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((e,r,a)=>a.indexOf(e)===r))}async function h(e,r,a){let n=e.portal;await n.signIn(),await n.user.addItem({item:e,data:r,folder:a?.folder})}async function b(e,r){let{layer:a,createItemData:l,createJSONContext:o,setItemProperties:s,saveResources:u,supplementalUnsupportedErrors:p}=e;await d(e),function(e){let{layer:r,errorNamePrefix:a}=e,{portalItem:i}=r;if(!i)throw new n.A(`${a}:portal-item-not-set`,y(r,"requires the portalItem property to be set"));if(!i.loaded)throw new n.A(`${a}:portal-item-not-loaded`,y(r,"cannot be saved to a portal item that does not exist or is inaccessible"));c({...e,item:i})}(e);let h=a.portalItem,b=o?o(h):f(h),v=await m(a,b,{...r,supplementalUnsupportedErrors:p}),S=await l({layer:a,layerJSON:v},h);return await s?.(a,h,S),w(h),await h.update({data:S}),(0,i.v)(b),await u?.(h,b),h}async function v(e,r){let{layer:a,createItemData:n,createJSONContext:s,setItemProperties:u,saveResources:p,supplementalUnsupportedErrors:y}=e;await d(e);let b=function(e){let{newItem:r,itemType:a}=e,n=o.default.from(r);return n.id&&((n=n.clone()).id=null),n.type??=a,n.portal??=l.A.getDefault(),c({...e,item:n}),n}(e),v=s?s(b):f(b),S=await m(a,v,{...r,supplementalUnsupportedErrors:y}),I=await n({layer:a,layerJSON:S},b);return await u(a,b,I),w(b),await h(b,I,r),a.portalItem=b,(0,i.v)(v),await p?.(b,v),b}},94668:(e,r,a)=>{a.d(r,{c:()=>o,d:()=>i});var n=a(32391);async function i(e){let r=[];for(let a of e.allLayers)if("beforeSave"in a&&"function"==typeof a.beforeSave){let e=a.beforeSave();e&&r.push(e)}await Promise.allSettled(r)}let l=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function o(e,r,a){let i=(e.messages??[]).filter(({type:e})=>"error"===e).map(({name:e,message:r,details:a})=>new n.A(e,r,a));if(e.blockedRelativeUrls&&(i=i.concat(e.blockedRelativeUrls.map(e=>new n.A("url:unsupported",`Relative url '${e}' is not supported`)))),a){let{ignoreUnsupported:e,supplementalUnsupportedErrors:r=[],requiredPropertyChecksDisabled:n}=a;e&&(i=i.filter(({name:e})=>!(l.has(e)||r.includes(e)))),n&&(i=i.filter(e=>"web-document-write:property-required"!==e.name))}if(i.length>0)throw new n.A(r.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:i})}}}]);