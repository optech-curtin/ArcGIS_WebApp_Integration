"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[526],{10526:(e,t,n)=>{n.r(t),n.d(t,{hydratedAdapter:()=>c});var a=n(61414),i=n(147),r=n(39960),o=n(87960),s=n(65442);let c={convertToGEGeometry:function(e,t){if(null==t)return null;let n="cache"in t?t.cache._geVersion:void 0;return null==n&&(n=e.convertJSONToGeometry(t),"cache"in t&&(t.cache._geVersion=n)),n},exportPoint:function(e,t,n){let a=e.hasZ(t),i=e.hasM(t),o=new r.A({x:e.getPointX(t),y:e.getPointY(t),spatialReference:n});return a&&(o.z=e.getPointZ(t)),i&&(o.m=e.getPointM(t)),o.cache._geVersion=t,o},exportPolygon:function(e,t,n){let a=new o.A({rings:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return a.cache._geVersion=t,a},exportPolyline:function(e,t,n){let a=new s.A({paths:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return a.cache._geVersion=t,a},exportMultipoint:function(e,t,n){let a=new i.A({hasZ:e.hasZ(t),hasM:e.hasM(t),points:e.exportPoints(t),spatialReference:n});return a.cache._geVersion=t,a},exportExtent:function(e,t,n){let i=e.hasZ(t),r=e.hasM(t),o=new a.A({xmin:e.getXMin(t),ymin:e.getYMin(t),xmax:e.getXMax(t),ymax:e.getYMax(t),spatialReference:n});if(i){let n=e.getZExtent(t);o.zmin=n.vmin,o.zmax=n.vmax}if(r){let n=e.getMExtent(t);o.mmin=n.vmin,o.mmax=n.vmax}return o.cache._geVersion=t,o}}}}]);