"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7713],{37713:(e,r,i)=>{i.d(r,{computeObjectLayerResourceSize:()=>a}),i(39166);var t=i(32391),o=i(16082),n=i(56911),s=i(42845),u=i(89834);let l=function(){return new o.q(50)}();async function a(e,r=null){if(!e.isPrimitive){let r=e.resource?.href;if(!r)throw new t.A("symbol:invalid-resource","The symbol does not have a valid resource");let o=l.get(r);if(void 0!==o)return o;let{fetch:u}=await Promise.all([i.e(3081),i.e(420),i.e(7208),i.e(2243),i.e(6058),i.e(5966)]).then(i.bind(i,96058)),a=await u(r,{disableTextures:!0,spherical:!0,doublePrecisionRequiresObfuscation:!0}),c=(0,s.Ej)(a.referenceBoundingBox,(0,n.vt)());return l.put(r,c),c}if(!e.resource?.primitive)throw new t.A("symbol:invalid-resource","The symbol does not have a valid resource");let o=(0,s.vt)((0,u.Fq)(e.resource.primitive));if(null!=r)for(let e=0;e<o.length;e++)o[e]*=r;return(0,s.Ej)(o,(0,n.vt)())}}}]);