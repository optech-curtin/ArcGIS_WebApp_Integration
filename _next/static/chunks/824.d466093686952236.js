"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[824],{28443:(e,t,r)=>{r.d(t,{save:()=>p,saveAs:()=>u});var a=r(90607),i=r(23226);let n="Stream Service";function o(e){return{isValid:"stream"===e.type&&!!e.url&&!e.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function l(e){let t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function s(e,t){let{parsedUrl:r,title:a,fullExtent:n}=e;t.url=r.path,t.title||=a,t.extent=null,null!=n&&(t.extent=await (0,i.sQ)(n)),(0,i.OM)(t,i.mm.METADATA),(0,i.LG)(t,i.mm.SINGLE_LAYER)}async function p(e,t){return(0,a.UN)({layer:e,itemType:n,additionalItemType:"Feed",validateLayer:o,createItemData:l,errorNamePrefix:"stream-layer-save"},t)}async function u(e,t,r){return(0,a.Uh)({layer:e,itemType:n,validateLayer:o,createItemData:l,errorNamePrefix:"stream-layer-save-as",newItem:t,setItemProperties:s},r)}},30508:(e,t,r)=>{r.d(t,{H:()=>a});function a(e){return e&&"getAtOrigin"in e&&"originOf"in e}},83863:(e,t,r)=>{r.d(t,{v:()=>i});var a=r(30508);function i(e){e?.writtenProperties&&e.writtenProperties.forEach(({target:e,propName:t,newOrigin:r})=>{(0,a.H)(e)&&r&&e.originOf(t)!==r&&e.updateOrigin(t,r)})}},90607:(e,t,r)=>{r.d(t,{UN:()=>v,Uh:()=>h});var a=r(32391),i=r(83863),n=r(14307),o=r(28015),l=r(39577),s=r(23226),p=r(94668);async function u(e){let{layer:t,errorNamePrefix:r,validateLayer:i}=e;await t.load(),function(e,t,r){let i=r(e);if(!i.isValid)throw new a.A(`${t}:invalid-parameters`,i.errorMessage,{layer:e})}(t,r,i)}function d(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function m(e){let{item:t,errorNamePrefix:r,layer:i,validateItem:n}=e;if(function(e){let{item:t,itemType:r,additionalItemType:i,errorNamePrefix:n,layer:o}=e,l=[r];if(i&&l.push(i),!l.includes(t.type)){let e=l.map(e=>`'${e}'`).join(", ");throw new a.A(`${n}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:o})}}(e),n){let e=n(t);if(!e.isValid)throw new a.A(`${r}:invalid-parameters`,e.errorMessage,{layer:i})}}function f(e){return(0,l.m)(e,"portal-item")}async function c(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();let a=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,p.c)(t,{errorName:"layer-write:unsupported"},r),a}function y(e){(0,s.LG)(e,s.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((e,t,r)=>r.indexOf(e)===t))}async function w(e,t,r){let a=e.portal;await a.signIn(),await a.user.addItem({item:e,data:t,folder:r?.folder})}async function v(e,t){let{layer:r,createItemData:n,createJSONContext:o,setItemProperties:l,saveResources:s,supplementalUnsupportedErrors:p}=e;await u(e),function(e){let{layer:t,errorNamePrefix:r}=e,{portalItem:i}=t;if(!i)throw new a.A(`${r}:portal-item-not-set`,d(t,"requires the portalItem property to be set"));if(!i.loaded)throw new a.A(`${r}:portal-item-not-loaded`,d(t,"cannot be saved to a portal item that does not exist or is inaccessible"));m({...e,item:i})}(e);let w=r.portalItem,v=o?o(w):f(w),h=await c(r,v,{...t,supplementalUnsupportedErrors:p}),b=await n({layer:r,layerJSON:h},w);return await l?.(r,w,b),y(w),await w.update({data:b}),(0,i.v)(v),await s?.(w,v),w}async function h(e,t){let{layer:r,createItemData:a,createJSONContext:l,setItemProperties:s,saveResources:p,supplementalUnsupportedErrors:d}=e;await u(e);let v=function(e){let{newItem:t,itemType:r}=e,a=o.default.from(t);return a.id&&((a=a.clone()).id=null),a.type??=r,a.portal??=n.A.getDefault(),m({...e,item:a}),a}(e),h=l?l(v):f(v),b=await c(r,h,{...t,supplementalUnsupportedErrors:d}),g=await a({layer:r,layerJSON:b},v);return await s(r,v,g),y(v),await w(v,g,t),r.portalItem=v,(0,i.v)(h),await p?.(v,h),v}},94668:(e,t,r)=>{r.d(t,{c:()=>o,d:()=>i});var a=r(32391);async function i(e){let t=[];for(let r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){let e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}let n=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function o(e,t,r){let i=(e.messages??[]).filter(({type:e})=>"error"===e).map(({name:e,message:t,details:r})=>new a.A(e,t,r));if(e.blockedRelativeUrls&&(i=i.concat(e.blockedRelativeUrls.map(e=>new a.A("url:unsupported",`Relative url '${e}' is not supported`)))),r){let{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:a}=r;e&&(i=i.filter(({name:e})=>!(n.has(e)||t.includes(e)))),a&&(i=i.filter(e=>"web-document-write:property-required"!==e.name))}if(i.length>0)throw new a.A(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:i})}}}]);