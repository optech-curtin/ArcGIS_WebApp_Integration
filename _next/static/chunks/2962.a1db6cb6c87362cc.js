"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[303,2962,8288,9984],{2861:(e,t,n)=>{n.r(t),n.d(t,{execute:()=>r.e,supportsCurves:()=>r.s}),n(8922),n(39984);var r=n(17105)},8288:(e,t,n)=>{n.d(t,{G:()=>r,S:()=>a});class r{*[Symbol.iterator](){let e=this.next();for(;e;)yield e,e=this.next()}}class a extends r{constructor(e){super(),this.m_iGeom=-1,this.m_aGeoms=e?e.slice():[]}next(){if(this.m_iGeom<this.m_aGeoms.length-1){let e=this.m_aGeoms[++this.m_iGeom];return this.m_aGeoms[this.m_iGeom]=null,e}return null}tock(){return!1}getGeometryID(){return this.m_iGeom}getRank(){return 1}}},17105:(e,t,n)=>{n.d(t,{a:()=>u,e:()=>s,s:()=>i});var r=n(8922),a=n(39984);function s(e,t={}){let{unit:n}=t,i=(0,a.fromGeometry)(e).calculateArea2D();if(i&&n){let t=(0,a.getSpatialReference)(e);if(t.isGeographic)throw Error("Unable to convert from an angular area unit to a linear area unit.");let s=(0,r.B5)(t);s!==n&&(s?i=(0,r.oU)(i,s,n):(i=(Math.sqrt(i)*(0,r.GA)(t))**2,i=(0,r.oU)(i,"square-meters",n)))}return i}let i=!0,u=Object.freeze(Object.defineProperty({__proto__:null,execute:s,supportsCurves:!0},Symbol.toStringTag,{value:"Module"}))},39984:(e,t,n)=>{n.r(t),n.d(t,{fromExtent:()=>x,fromGeometry:()=>y,fromMultipoint:()=>G,fromPoint:()=>C,fromPolygon:()=>M,fromPolyline:()=>v,fromSpatialReference:()=>V,getSpatialReference:()=>g,toExtent:()=>P,toGeometry:()=>w,toMultipoint:()=>_,toPoint:()=>d,toPolygon:()=>Z,toPolyline:()=>R});var r=n(92656);n(73750);var a=n(16404),s=n(31632),i=n(32045),u=n(40224),o=n(61414),l=n(147),c=n(39960),m=n(87960),h=n(65442);n(14136);var f=n(12966);let p="_gxVersion";function g(e){return Array.isArray(e)?e[0].spatialReference:e.spatialReference}function y(e){switch(e.type){case"point":return C(e);case"multipoint":return G(e);case"polyline":return v(e);case"polygon":return M(e);case"extent":return x(e);default:throw Error(`Unsupported geometry type: ${e.type}`)}}function x(e){if(!e.getCacheValue(p)){let t=new s.E;t.setCoords(e.xmin,e.ymin,e.xmax,e.ymax),e.hasM&&t.setInterval(2,0,e.mmin,e.mmax),e.hasZ&&t.setInterval(1,0,e.zmin,e.zmax),e.setCacheValue(p,t)}return e.getCacheValue(p)}function G(e){if(!e.getCacheValue(p)){let t=new i.M,n=new s.P,r=e.points,a=e.hasM,u=e.hasZ,o=u?3:2;for(let e=0,s=r.length;e<s;e++){let s=r[e];n.setXYCoords(s[0],s[1]),u&&n.setZ(s[2]??0),a&&n.setM(s[o]??NaN),t.add(n)}e.setCacheValue(p,t)}return e.getCacheValue(p)}function C(e){if(!e.getCacheValue(p)){let t=new s.P;t.setXYCoords(e.x,e.y),e.hasM&&t.setM(e.m),e.hasZ&&t.setZ(e.z),e.setCacheValue(p,t)}return e.getCacheValue(p)}function M(e){if(!e.getCacheValue(p)){let{curveRings:t,hasM:n,hasZ:r,rings:a}=e,s=(0,f.fromGeometryToGXGeometry)({curveRings:t,hasM:n,hasZ:r,rings:a});e.setCacheValue(p,s)}return e.getCacheValue(p)}function v(e){if(!e.getCacheValue(p)){let{curvePaths:t,hasM:n,hasZ:r,paths:a}=e,s=(0,f.fromGeometryToGXGeometry)({curvePaths:t,hasM:n,hasZ:r,paths:a});e.setCacheValue(p,s)}return e.getCacheValue(p)}function V(e){if(e.wkid)return(0,u.c)(e.wkid);let t=e.wkt2||e.wkt;return t?(0,u.b)(t):null}function w(e,t){if(e)switch(e.getGeometryType()){case a.G.enumPoint:return d(e,t);case a.G.enumEnvelope:return P(e,t);case a.G.enumMultiPoint:return _(e,t);case a.G.enumPolyline:return R(e,t);case a.G.enumPolygon:return Z(e,t)}return null}function P(e,t){if(e.isEmpty())return null;let n=new o.A({xmin:e.getXMin(),ymin:e.getYMin(),xmax:e.getXMax(),ymax:e.getYMax(),spatialReference:t}),r=e.getDescription();if(r.hasM()){let t=e.queryInterval(2,0);n.mmin=t.vmin,n.mmax=t.vmax}if(r.hasZ()){let t=e.queryInterval(1,0);n.zmin=t.vmin,n.zmax=t.vmax}return n.setCacheValue(p,e),n}function _(e,t){if(e.isEmpty())return null;let n=e.getDescription(),r=n.hasM(),a=n.hasZ(),i=[],u=new s.P;for(let t=0,n=e.getPointCount();t<n;t++){e.getPointByVal(t,u);let n=[u.getX(),u.getY()];a&&n.push(u.getZ()),r&&n.push(u.getM()),i.push(n)}let o=new l.A({hasM:r,hasZ:a,points:i,spatialReference:t});return o.setCacheValue(p,e),o}function d(e,t){if(e instanceof r.P)return new c.A({x:e.x,y:e.y,spatialReference:t});if(e.isEmpty())return null;let n=new c.A({x:e.getX(),y:e.getY(),spatialReference:t}),a=e.getDescription();return a.hasM()&&(n.m=e.getM()),a.hasZ()&&(n.z=e.getZ()),n.setCacheValue(p,e),n}function Z(e,t){if(e.isEmpty())return null;let n=m.A.fromJSON({spatialReference:t,...(0,f.toGeometry)(e,null)});return n.setCacheValue(p,e),n}function R(e,t){if(e.isEmpty())return null;let n=h.A.fromJSON({spatialReference:t,...(0,f.toGeometry)(e,null)});return n.setCacheValue(p,e),n}}}]);