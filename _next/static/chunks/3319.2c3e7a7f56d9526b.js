"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3319],{24827:(e,t,r)=>{let n;r.d(t,{Hh:()=>l,fz:()=>a,g7:()=>s,s1:()=>o});var i=r(54143);function o(){return!!n&&(0,i.i)()}async function l(){if(!o()){let[e,t]=await Promise.all([Promise.all([r.e(4188),r.e(9910),r.e(6251),r.e(1318),r.e(4242)]).then(r.bind(r,94242)),Promise.all([r.e(4188),r.e(9910),r.e(6251),r.e(1318),r.e(8288)]).then(r.bind(r,40224)).then(e=>e.aG).then(({injectPe:e})=>e),(0,i.l)()]);n=new e.OperatorGeodeticArea,t(i.p)}}function s(e,t,r){return n.execute(e,t,r,null)}function a(){return n.supportsCurves()}},40533:(e,t,r)=>{r.d(t,{O:()=>n});let n={geodesic:0,loxodrome:1,"great-elliptic":2,"normal-section":3,"shape-preserving":4}},53319:(e,t,r)=>{r.r(t),r.d(t,{execute:()=>n.e,isLoaded:()=>n.i,load:()=>n.l,supportsCurves:()=>n.s}),r(8922),r(24827),r(40533);var n=r(59355)},59355:(e,t,r)=>{let n,i,o,l;r.d(t,{e:()=>f,g:()=>p,i:()=>c,l:()=>d,s:()=>l});var s=r(8922),a=r(24827),u=r(40533);function c(){return!!n&&(0,a.s1)()}async function d(){if(!c()){let[e]=await Promise.all([Promise.all([r.e(4188),r.e(9910),r.e(6251),r.e(1318),r.e(2966),r.e(303)]).then(r.bind(r,39984)),(0,a.Hh)()]);n=e.fromGeometry,i=e.fromSpatialReference,o=e.getSpatialReference,l=(0,a.fz)()}}function f(e,t={}){let{curveType:r="geodesic",unit:l}=t,c=o(e),d=(0,a.g7)(n(e),i(c),u.O[r]);return d&&l&&(d=(0,s.oU)(d,"square-meters",l)),d}let p=Object.freeze(Object.defineProperty({__proto__:null,execute:f,isLoaded:c,load:d,get supportsCurves(){return l}},Symbol.toStringTag,{value:"Module"}))}}]);