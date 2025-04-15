"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[526,5927,8160,8255],{10526:(e,t,n)=>{n.r(t),n.d(t,{hydratedAdapter:()=>c});var r=n(61414),a=n(147),i=n(39960),f=n(87960),o=n(65442);let c={convertToGEGeometry:function(e,t){if(null==t)return null;let n="cache"in t?t.cache._geVersion:void 0;return null==n&&(n=e.convertJSONToGeometry(t),"cache"in t&&(t.cache._geVersion=n)),n},exportPoint:function(e,t,n){let r=e.hasZ(t),a=e.hasM(t),f=new i.A({x:e.getPointX(t),y:e.getPointY(t),spatialReference:n});return r&&(f.z=e.getPointZ(t)),a&&(f.m=e.getPointM(t)),f.cache._geVersion=t,f},exportPolygon:function(e,t,n){let r=new f.A({rings:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return r.cache._geVersion=t,r},exportPolyline:function(e,t,n){let r=new o.A({paths:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return r.cache._geVersion=t,r},exportMultipoint:function(e,t,n){let r=new a.A({hasZ:e.hasZ(t),hasM:e.hasM(t),points:e.exportPoints(t),spatialReference:n});return r.cache._geVersion=t,r},exportExtent:function(e,t,n){let a=e.hasZ(t),i=e.hasM(t),f=new r.A({xmin:e.getXMin(t),ymin:e.getYMin(t),xmax:e.getXMax(t),ymax:e.getYMax(t),spatialReference:n});if(a){let n=e.getZExtent(t);f.zmin=n.vmin,f.zmax=n.vmax}if(i){let n=e.getMExtent(t);f.mmin=n.vmin,f.mmax=n.vmax}return f.cache._geVersion=t,f}}},40636:(e,t,n)=>{n.r(t),n.d(t,{buffer:()=>T,changeDefaultSpatialReferenceTolerance:()=>B,clearDefaultSpatialReferenceTolerance:()=>W,clip:()=>d,contains:()=>s,convexHull:()=>v,crosses:()=>p,cut:()=>l,densify:()=>H,difference:()=>P,disjoint:()=>x,distance:()=>h,equals:()=>y,extendedSpatialReferenceInfo:()=>u,flipHorizontal:()=>O,flipVertical:()=>k,generalize:()=>C,geodesicArea:()=>X,geodesicBuffer:()=>b,geodesicDensify:()=>J,geodesicLength:()=>Y,intersect:()=>V,intersectLinesToPoints:()=>q,intersects:()=>A,isSimple:()=>R,nearestCoordinate:()=>D,nearestVertex:()=>E,nearestVertices:()=>z,offset:()=>Z,overlaps:()=>m,planarArea:()=>j,planarLength:()=>I,relate:()=>w,rotate:()=>N,simplify:()=>M,symmetricDifference:()=>S,touches:()=>G,union:()=>_,within:()=>g});var r=n(86942),a=n(70433),i=n(71599),f=n(91463),o=n(10526);function c(e){let t=Array.isArray(e)?e[0].spatialReference:e.spatialReference;return t?(0,r.PZ)(f.A,t):f.A.WGS84}function u(e){return i.G.extendedSpatialReferenceInfo(e)}function d(e,t){return(0,a.f)(e),i.G.clip(o.hydratedAdapter,c(e),e,t)}function l(e,t){return(0,a.f)(e),i.G.cut(o.hydratedAdapter,c(e),e,t)}function s(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.contains(o.hydratedAdapter,c(e),e,t)}function p(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.crosses(o.hydratedAdapter,c(e),e,t)}function h(e,t,n){return(0,a.f)(e),(0,a.f)(t),i.G.distance(o.hydratedAdapter,c(e),e,t,n)}function y(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.equals(o.hydratedAdapter,c(e),e,t)}function A(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.intersects(o.hydratedAdapter,c(e),e,t)}function G(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.touches(o.hydratedAdapter,c(e),e,t)}function g(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.within(o.hydratedAdapter,c(e),e,t)}function x(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.disjoint(o.hydratedAdapter,c(e),e,t)}function m(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.overlaps(o.hydratedAdapter,c(e),e,t)}function w(e,t,n){return(0,a.f)(e),(0,a.f)(t),i.G.relate(o.hydratedAdapter,c(e),e,t,n)}function R(e){return(0,a.f)(e),i.G.isSimple(o.hydratedAdapter,c(e),e)}function M(e){return(0,a.f)(e),i.G.simplify(o.hydratedAdapter,c(e),e)}function v(e,t=!1){return i.G.convexHull(o.hydratedAdapter,c(e),e,t)}function P(e,t){return(0,a.f)(t),i.G.difference(o.hydratedAdapter,c(e),e,t)}function S(e,t){return(0,a.f)(t),i.G.symmetricDifference(o.hydratedAdapter,c(e),e,t)}function V(e,t){return(0,a.f)(t),i.G.intersect(o.hydratedAdapter,c(e),e,t)}function _(e){return i.G.union(o.hydratedAdapter,c(e),e)}function Z(e,t,n,r,a,f){return i.G.offset(o.hydratedAdapter,c(e),e,t,n,r,a,f)}function T(e,t,n,r=!1){return i.G.buffer(o.hydratedAdapter,c(e),e,t,n,r)}function b(e,t,n,r,a,f){return i.G.geodesicBuffer(o.hydratedAdapter,c(e),e,t,n,r,a,f)}function D(e,t,n=!0){return(0,a.f)(e),i.G.nearestCoordinate(o.hydratedAdapter,c(e),e,t,n)}function E(e,t){return(0,a.f)(e),i.G.nearestVertex(o.hydratedAdapter,c(e),e,t)}function z(e,t,n,r){return(0,a.f)(e),i.G.nearestVertices(o.hydratedAdapter,c(e),e,t,n,r)}function L(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent?.center??null:null}function N(e,t,n){if(null==e)throw new F;let r=e.spatialReference;if(null==(n=n??L(e)))throw new F;let a=e.constructor.fromJSON(i.G.rotate(e,t,n));return a.spatialReference=r,a}function O(e,t){if(null==e)throw new F;let n=e.spatialReference;if(null==(t=t??L(e)))throw new F;let r=e.constructor.fromJSON(i.G.flipHorizontal(e,t));return r.spatialReference=n,r}function k(e,t){if(null==e)throw new F;let n=e.spatialReference;if(null==(t=t??L(e)))throw new F;let r=e.constructor.fromJSON(i.G.flipVertical(e,t));return r.spatialReference=n,r}function C(e,t,n,r){return(0,a.f)(e),i.G.generalize(o.hydratedAdapter,c(e),e,t,n,r)}function H(e,t,n){return(0,a.f)(e),i.G.densify(o.hydratedAdapter,c(e),e,t,n)}function J(e,t,n,r=0){return(0,a.f)(e),i.G.geodesicDensify(o.hydratedAdapter,c(e),e,t,n,r)}function j(e,t){return(0,a.f)(e),i.G.planarArea(o.hydratedAdapter,c(e),e,t)}function I(e,t){return(0,a.f)(e),i.G.planarLength(o.hydratedAdapter,c(e),e,t)}function X(e,t,n){return(0,a.f)(e),i.G.geodesicArea(o.hydratedAdapter,c(e),e,t,n)}function Y(e,t,n){return(0,a.f)(e),i.G.geodesicLength(o.hydratedAdapter,c(e),e,t,n)}function q(e,t){return i.G.intersectLinesToPoints(o.hydratedAdapter,c(e),e,t)}function B(e,t){i.G.changeDefaultSpatialReferenceTolerance(e,t)}function W(e){i.G.clearDefaultSpatialReferenceTolerance(e)}class F extends Error{constructor(){super("Illegal Argument Exception")}}},78160:(e,t,n)=>{n.d(t,{c:()=>r,g:()=>a});var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}}}]);