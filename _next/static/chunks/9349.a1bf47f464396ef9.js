"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8160,9349],{26122:(e,t,n)=>{n.r(t),n.d(t,{executeGEOperation:()=>i});var r=n(47436);function i(e){return(0,r.g[e.operation])(...e.parameters)}},46493:(e,t,n)=>{n.d(t,{g:()=>r});let r={convertToGEGeometry:function(e,t){return null==t?null:e.convertJSONToGeometry(t)},exportPoint:function(e,t,n){let r=new i(e.getPointX(t),e.getPointY(t),n),o=e.hasZ(t),s=e.hasM(t);return o&&(r.z=e.getPointZ(t)),s&&(r.m=e.getPointM(t)),r},exportPolygon:function(e,t,n){return new o(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportPolyline:function(e,t,n){return new s(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportMultipoint:function(e,t,n){return new u(e.exportPoints(t),n,e.hasZ(t),e.hasM(t))},exportExtent:function(e,t,n){let r=e.hasZ(t),i=e.hasM(t),o=new a(e.getXMin(t),e.getYMin(t),e.getXMax(t),e.getYMax(t),n);if(r){let n=e.getZExtent(t);o.zmin=n.vmin,o.zmax=n.vmax}if(i){let n=e.getMExtent(t);o.mmin=n.vmin,o.mmax=n.vmax}return o}};class i{constructor(e,t,n){this.x=e,this.y=t,this.spatialReference=n,this.z=void 0,this.m=void 0}}class o{constructor(e,t,n,r){this.rings=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),r&&(this.hasM=r)}}class s{constructor(e,t,n,r){this.paths=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),r&&(this.hasM=r)}}class u{constructor(e,t,n,r){this.points=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),r&&(this.hasM=r)}}class a{constructor(e,t,n,r,i){this.xmin=e,this.ymin=t,this.xmax=n,this.ymax=r,this.spatialReference=i,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},47436:(e,t,n)=>{n.d(t,{A:()=>T,B:()=>_,C:()=>D,D:()=>A,E:()=>L,F:()=>j,G:()=>I,H:()=>O,I:()=>V,J:()=>k,K:()=>C,L:()=>H,M:()=>N,N:()=>q,a:()=>u,b:()=>a,c:()=>s,d:()=>c,e:()=>o,f:()=>l,g:()=>B,h:()=>f,i:()=>g,j:()=>d,k:()=>x,l:()=>y,m:()=>M,n:()=>w,o:()=>G,p:()=>E,q:()=>R,r:()=>m,s:()=>v,t:()=>h,u:()=>P,v:()=>b,w:()=>p,x:()=>Z,y:()=>z,z:()=>S});var r=n(71599),i=n(46493);function o(e){return r.G.extendedSpatialReferenceInfo(e)}function s(e,t,n){return r.G.clip(i.g,e,t,n)}function u(e,t,n){return r.G.cut(i.g,e,t,n)}function a(e,t,n){return r.G.contains(i.g,e,t,n)}function c(e,t,n){return r.G.crosses(i.g,e,t,n)}function l(e,t,n,o){return r.G.distance(i.g,e,t,n,o)}function f(e,t,n){return r.G.equals(i.g,e,t,n)}function g(e,t,n){return r.G.intersects(i.g,e,t,n)}function h(e,t,n){return r.G.touches(i.g,e,t,n)}function p(e,t,n){return r.G.within(i.g,e,t,n)}function d(e,t,n){return r.G.disjoint(i.g,e,t,n)}function G(e,t,n){return r.G.overlaps(i.g,e,t,n)}function m(e,t,n,o){return r.G.relate(i.g,e,t,n,o)}function x(e,t){return r.G.isSimple(i.g,e,t)}function v(e,t){return r.G.simplify(i.g,e,t)}function y(e,t,n=!1){return r.G.convexHull(i.g,e,t,n)}function M(e,t,n){return r.G.difference(i.g,e,t,n)}function w(e,t,n){return r.G.symmetricDifference(i.g,e,t,n)}function E(e,t,n){return r.G.intersect(i.g,e,t,n)}function P(e,t,n=null){return r.G.union(i.g,e,t,n)}function R(e,t,n,o,s,u,a){return r.G.offset(i.g,e,t,n,o,s,u,a)}function b(e,t,n,o,s=!1){return r.G.buffer(i.g,e,t,n,o,s)}function Z(e,t,n,o,s,u,a){return r.G.geodesicBuffer(i.g,e,t,n,o,s,u,a)}function z(e,t,n,o=!0){return r.G.nearestCoordinate(i.g,e,t,n,o)}function S(e,t,n){return r.G.nearestVertex(i.g,e,t,n)}function T(e,t,n,o,s){return r.G.nearestVertices(i.g,e,t,n,o,s)}function _(e,t,n,i){if(null==t||null==i)throw Error("Illegal Argument Exception");let o=r.G.rotate(t,n,i);return o.spatialReference=e,o}function D(e,t,n){if(null==t||null==n)throw Error("Illegal Argument Exception");let i=r.G.flipHorizontal(t,n);return i.spatialReference=e,i}function A(e,t,n){if(null==t||null==n)throw Error("Illegal Argument Exception");let i=r.G.flipVertical(t,n);return i.spatialReference=e,i}function L(e,t,n,o,s){return r.G.generalize(i.g,e,t,n,o,s)}function j(e,t,n,o){return r.G.densify(i.g,e,t,n,o)}function I(e,t,n,o,s=0){return r.G.geodesicDensify(i.g,e,t,n,o,s)}function O(e,t,n){return r.G.planarArea(i.g,e,t,n)}function V(e,t,n){return r.G.planarLength(i.g,e,t,n)}function k(e,t,n,o){return r.G.geodesicArea(i.g,e,t,n,o)}function C(e,t,n,o){return r.G.geodesicLength(i.g,e,t,n,o)}function H(e,t,n){return null==t||null==n?[]:r.G.intersectLinesToPoints(i.g,e,t,n)}function N(e,t){r.G.changeDefaultSpatialReferenceTolerance(e,t)}function q(e){r.G.clearDefaultSpatialReferenceTolerance(e)}let B=Object.freeze(Object.defineProperty({__proto__:null,buffer:b,changeDefaultSpatialReferenceTolerance:N,clearDefaultSpatialReferenceTolerance:q,clip:s,contains:a,convexHull:y,crosses:c,cut:u,densify:j,difference:M,disjoint:d,distance:l,equals:f,extendedSpatialReferenceInfo:o,flipHorizontal:D,flipVertical:A,generalize:L,geodesicArea:k,geodesicBuffer:Z,geodesicDensify:I,geodesicLength:C,intersect:E,intersectLinesToPoints:H,intersects:g,isSimple:x,nearestCoordinate:z,nearestVertex:S,nearestVertices:T,offset:R,overlaps:G,planarArea:O,planarLength:V,relate:m,rotate:_,simplify:v,symmetricDifference:w,touches:h,union:P,within:p},Symbol.toStringTag,{value:"Module"}))},78160:(e,t,n)=>{n.d(t,{c:()=>r,g:()=>i});var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}}}]);