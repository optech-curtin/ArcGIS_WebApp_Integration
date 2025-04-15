"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9149],{2370:(e,t,i)=>{i.d(t,{E:()=>I,w:()=>o});var n=i(31461),r=i(28255);i(57845);var a=i(87196),s=i(70115);class o{constructor(e=9,t){this._compareMinX=c,this._compareMinY=f,this._toBBox=e=>e,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this._toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),b.prune(),x.prune(),M.prune(),w.prune()}all(e){l(this._data,e)}search(e,t){let i=this._data,n=this._toBBox;if(g(e,i))for(b.clear();i;){for(let r=0,a=i.children.length;r<a;r++){let a=i.children[r],s=i.leaf?n(a):a;g(e,s)&&(i.leaf?t(a):y(e,s)?l(a,t):b.push(a))}i=b.pop()}}collides(e){let t=this._data,i=this._toBBox;if(!g(e,t))return!1;for(b.clear();t;){for(let n=0,r=t.children.length;n<r;n++){let r=t.children[n],a=t.leaf?i(r):r;if(g(e,a)){if(t.leaf||y(e,a))return!0;b.push(r)}}t=b.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,i=e.length;t<i;t++)this.insert(e[t]);return this}let t=this._build(e.slice(),0,e.length-1,0);if(this._data.children.length)if(this._data.height===t.height)this._splitRoot(this._data,t);else{if(this._data.height<t.height){let e=this._data;this._data=t,t=e}this._insert(t,this._data.height-t.height-1,!0)}else this._data=t;return this}insert(e){return e&&this._insert(e,this._data.height-1),this}clear(){return this._data=new C([]),this}remove(e){if(!e)return this;let t,i=this._data,a=null,s=0,o=!1,l=this._toBBox(e);for(M.clear(),w.clear();i||M.length>0;){if(i||(i=M.pop(),a=M.data[M.length-1],s=w.pop()??0,o=!0),i.leaf&&-1!==(t=(0,n.qh)(i.children,(0,r.zI)(e),i.children.length,i.indexHint)))return i.children.splice(t,1),M.push(i),this._condense(M),this;o||i.leaf||!y(i,l)?a?(s++,i=a.children[s],o=!1):i=null:(M.push(i),w.push(s),s=0,a=i,i=i.children[0])}return this}toJSON(){return this._data}fromJSON(e){return this._data=e,this}_build(e,t,i,n){let r=i-t+1,a=this._maxEntries;if(r<=a){let n=new C(e.slice(t,i+1));return h(n,this._toBBox),n}n||(n=Math.ceil(Math.log(r)/Math.log(a)),a=Math.ceil(r/a**(n-1)));let s=new S([]);s.height=n;let o=Math.ceil(r/a),l=o*Math.ceil(Math.sqrt(a));_(e,t,i,l,this._compareMinX);for(let r=t;r<=i;r+=l){let t=Math.min(r+l-1,i);_(e,r,t,o,this._compareMinY);for(let i=r;i<=t;i+=o){let r=Math.min(i+o-1,t);s.children.push(this._build(e,i,r,n-1))}}return h(s,this._toBBox),s}_insert(e,t,i){let n=this._toBBox,r=i?e:n(e);M.clear();let a=function(e,t,i,n){for(;n.push(t),!0!==t.leaf&&n.length-1!==i;){let i,n=1/0,s=1/0;for(let o=0,l=t.children.length;o<l;o++){var r,a;let l=t.children[o],h=p(l),u=(r=e,(Math.max((a=l).maxX,r.maxX)-Math.min(a.minX,r.minX))*(Math.max(a.maxY,r.maxY)-Math.min(a.minY,r.minY))-h);u<s?(s=u,n=h<n?h:n,i=l):u===s&&h<n&&(n=h,i=l)}t=i||t.children[0]}return t}(r,this._data,t,M);for(a.children.push(e),d(a,r);t>=0&&M.data[t].children.length>this._maxEntries;)this._split(M,t),t--;var s=r,o=M,l=t;for(let e=l;e>=0;e--)d(o.data[e],s)}_split(e,t){let i=e.data[t],n=i.children.length,r=this._minEntries;this._chooseSplitAxis(i,r,n);let a=this._chooseSplitIndex(i,r,n);if(!a)return;let s=i.children.splice(a,i.children.length-a),o=i.leaf?new C(s):new S(s);o.height=i.height,h(i,this._toBBox),h(o,this._toBBox),t?e.data[t-1].children.push(o):this._splitRoot(i,o)}_splitRoot(e,t){this._data=new S([e,t]),this._data.height=e.height+1,h(this._data,this._toBBox)}_chooseSplitIndex(e,t,i){let n,r,a;n=r=1/0;for(let s=t;s<=i-t;s++){let t=u(e,0,s,this._toBBox),o=u(e,s,i,this._toBBox),l=function(e,t){let i=Math.max(e.minX,t.minX),n=Math.max(e.minY,t.minY);return Math.max(0,Math.min(e.maxX,t.maxX)-i)*Math.max(0,Math.min(e.maxY,t.maxY)-n)}(t,o),h=p(t)+p(o);l<n?(n=l,a=s,r=h<r?h:r):l===n&&h<r&&(r=h,a=s)}return a}_chooseSplitAxis(e,t,i){let n=e.leaf?this._compareMinX:c,r=e.leaf?this._compareMinY:f;this._allDistMargin(e,t,i,n)<this._allDistMargin(e,t,i,r)&&e.children.sort(n)}_allDistMargin(e,t,i,n){e.children.sort(n);let r=this._toBBox,a=u(e,0,t,r),s=u(e,i-t,i,r),o=m(a)+m(s);for(let n=t;n<i-t;n++){let t=e.children[n];d(a,e.leaf?r(t):t),o+=m(a)}for(let n=i-t-1;n>=t;n--){let t=e.children[n];d(s,e.leaf?r(t):t),o+=m(s)}return o}_condense(e){for(let t=e.length-1;t>=0;t--){let i=e.data[t];if(0===i.children.length)if(t>0){let r=e.data[t-1],a=r.children;a.splice((0,n.qh)(a,i,a.length,r.indexHint),1)}else this.clear();else h(i,this._toBBox)}}_initFormat(e){let t=["return a"," - b",";"];this._compareMinX=Function("a","b",t.join(e[0])),this._compareMinY=Function("a","b",t.join(e[1])),this._toBBox=Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function l(e,t){let i=e;for(x.clear();i;){if(!0===i.leaf)for(let e of i.children)t((0,r.zI)(e));else x.pushArray(i.children);i=x.pop()??null}}function h(e,t){u(e,0,e.children.length,t,e)}function u(e,t,i,n,r){r||(r=new C([])),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(let a,s=t;s<i;s++)a=e.children[s],d(r,e.leaf?n(a):a);return r}function d(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function c(e,t){return e.minX-t.minX}function f(e,t){return e.minY-t.minY}function p(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function m(e){return e.maxX-e.minX+(e.maxY-e.minY)}function y(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function g(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function _(e,t,i,n,r){let a=[t,i];for(;a.length;){let t=a.pop(),i=a.pop();if(t-i<=n)continue;let o=i+Math.ceil((t-i)/n/2)*n;(0,s.q)(e,o,i,t,r),a.push(i,o,o,t)}}let b=new a.A,x=new a.A,M=new a.A,w=new a.A({deallocator:void 0});class I{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class v extends I{constructor(){super(...arguments),this.height=1,this.indexHint=new n.vW}}class C extends v{constructor(e){super(),this.children=e,this.leaf=!0}}class S extends v{constructor(e){super(),this.children=e,this.leaf=!1}}},5895:(e,t,i)=>{i.d(t,{T:()=>r});var n=i(82795);let r={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new n.Om(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>e.ensureCentroid(t)}},11064:(e,t,i)=>{i.d(t,{A:()=>p});var n=i(31461),r=i(32391),a=i(74652),s=i(61939),o=i(42845),l=i(84766),h=i(60729),u=i(29499),d=i(33332),c=i(5895);let f=(0,o.vt)();class p{constructor(e){this.geometryInfo=e,this._boundsStore=new u.F,this._featuresById=new Map,this._usedMemory=0,this.events=new a.A,this.featureAdapter=c.T}get usedMemory(){return this._usedMemory}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach(t=>{null!=t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if(null==this.fullBounds)return null;let[t,i,n,r]=this.fullBounds;return{xmin:t,ymin:i,xmax:n,ymax:r,spatialReference:(0,d.ag)(e)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(let t of e)this._add(t);this._emitChanged()}upsertMany(e){let t=e.map(e=>this._upsert(e));return this._emitChanged(),t.filter(n.Ru)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged(),this._usedMemory=0}removeById(e){let t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){for(let t of(this._boundsStore.invalidateIndex(),e)){let e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t){for(let i of e){let e=this._boundsStore.get(i.objectId);e&&t((0,o.Jt)(f,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach(t=>e(t))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,e=>{t(this._featuresById.get(e))})}_emitChanged(){this.events.emit("changed",void 0)}_add(e){let t;if(!e)return;let i=e.objectId;if(null==i)return void s.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new r.A("featurestore:invalid-feature","feature id is missing",{feature:e}));let n=this._featuresById.get(i);if(n?(e.displayId=n.displayId,t=this._boundsStore.get(i),this._boundsStore.delete(i),this._usedMemory-=this.estimateFeatureUsedMemory?.(n)??0):null!=this.onFeatureAdd&&this.onFeatureAdd(e),!e.geometry?.coords?.length)return this._boundsStore.set(i,null),void this._featuresById.set(i,e);null!=(t=(0,h.jQ)(null!=t?t:(0,l.vt)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM))&&this._boundsStore.set(i,t),this._featuresById.set(i,e),this._usedMemory+=this.estimateFeatureUsedMemory?.(e)??0}_upsert(e){let t=e?.objectId;if(null==t)return s.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new r.A("featurestore:invalid-feature","feature id is missing",{feature:e})),null;let i=this._featuresById.get(t);if(!i)return this._add(e),e;this._usedMemory-=this.estimateFeatureUsedMemory?.(i)??0;let{geometry:n,attributes:a}=e;for(let e in a)i.attributes[e]=a[e];return n&&(i.geometry=n,this._boundsStore.set(t,(0,h.jQ)((0,l.vt)(),n,this.geometryInfo.hasZ,this.geometryInfo.hasM)??null)),this._usedMemory+=this.estimateFeatureUsedMemory?.(i)??0,i}_remove(e){null!=this.onFeatureRemove&&this.onFeatureRemove(e);let t=e.objectId;return this._boundsStore.delete(t),this._featuresById.delete(t),this._usedMemory-=this.estimateFeatureUsedMemory?.(e)??0,e}}},19696:(e,t,i)=>{i.d(t,{H:()=>o}),i(57845);var n=i(33715),r=i(16082),a=i(92753),s=i(45714);function o(e=!1,t){return e?new h(t):new l}class l{async fetch(){return[]}notifySymbologyChange(){}}class h{constructor(e){this._getSymbologyCandidates=e,this._candidatesCache=new r.q(1024),this._cacheVersion=0}async fetch(e,t){if(0===e.length)return[];let i=[],r=[],s=this._candidatesCache;for(let t of e){let e=u(t),a=s.get(e);if(a)for(let e of a)r.push((0,n.o8)(e));else i.push(t),s.put(e,[],1)}if(0===i.length)return r;let o=this._cacheVersion,{candidates:l,sourceCandidateIndices:h}=await this._getSymbologyCandidates(i,t);if((0,a.Te)(t),o!==this._cacheVersion)return this.fetch(e,t);let d=[],{length:c}=l;for(let e=0;e<c;++e){let t=l[e],r=u(i[h[e]]),a=s.get(r);a.push(t),s.put(r,a,a.length),d.push((0,n.o8)(t))}return r.concat(d)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++}}function u(e){switch(e.type){case"vertex":{let{objectId:t,target:i}=e,n=`${t}-vertex-${i.x}-${i.y}-${i.z??0}`;return(0,s.Wm)(n).toString()}case"edge":{let{objectId:t,start:i,end:n}=e,r=`${t}-edge-${i.x}-${i.y}-${i.z??0}-to-${n.x}-${n.y}-${n.z??0}`;return(0,s.Wm)(r).toString()}default:return""}}},20131:(e,t,i)=>{i.d(t,{Fe:()=>l,Km:()=>function e(t,i,n,s){if(t)if("CIMTextSymbol"!==t.type){if(n&&t.effects)for(let e of t.effects)a(e,i);if(t.symbolLayers)for(let n of t.symbolLayers){switch(n.type){case"CIMPictureMarker":case"CIMVectorMarker":var o=n,l=i,h=s;if(o&&(o.markerPlacement&&function(e,t){switch((0,r.zr)(e)&&e.offset&&(e.offset*=t),e.type){case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineSameSize":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.placementTemplate&&e.placementTemplate.length){let i=e.placementTemplate.map(e=>e*t);e.placementTemplate=i}break;case"CIMMarkerPlacementAlongLineVariableSize":if(e.maxRandomOffset&&(e.maxRandomOffset*=t),e.placementTemplate&&e.placementTemplate.length){let i=e.placementTemplate.map(e=>e*t);e.placementTemplate=i}break;case"CIMMarkerPlacementOnLine":e.startPointOffset&&(e.startPointOffset*=t);break;case"CIMMarkerPlacementAtExtremities":e.offsetAlongLine&&(e.offsetAlongLine*=t);break;case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementOnVertices":break;case"CIMMarkerPlacementAtRatioPositions":e.beginPosition&&(e.beginPosition*=t),e.endPosition&&(e.endPosition*=t);break;case"CIMMarkerPlacementPolygonCenter":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t);break;case"CIMMarkerPlacementInsidePolygon":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.stepX&&(e.stepX*=t),e.stepY&&(e.stepY*=t)}}(o.markerPlacement,l),o.offsetX&&(o.offsetX*=l),o.offsetY&&(o.offsetY*=l),o.anchorPoint&&"Absolute"===o.anchorPointUnits&&(o.anchorPoint={x:o.anchorPoint.x*l,y:o.anchorPoint.y*l}),o.size=null!=o.size?o.size*l:0,"CIMVectorMarker"===o.type&&o.markerGraphics))for(let t of o.markerGraphics)o.scaleSymbolsProportionally||e(t.symbol,l,!0,h);break;case"CIMPictureStroke":case"CIMSolidStroke":case"CIMGradientStroke":!s?.preserveOutlineWidth&&n.width&&(n.width*=i);break;case"CIMPictureFill":n.height&&(n.height*=i),n.offsetX&&(n.offsetX*=i),n.offsetY&&(n.offsetY*=i);break;case"CIMHatchFill":e(n.lineSymbol,i,!0,{...s,preserveOutlineWidth:!1}),n.offsetX&&(n.offsetX*=i),n.offsetY&&(n.offsetY*=i),n.separation&&(n.separation*=i)}if(n.effects)for(let e of n.effects)a(e,i)}}else null!=t.height&&(t.height*=i)},Nk:()=>s});var n=i(70152),r=i(95832);function a(e,t){switch(e.type){case"CIMGeometricEffectArrow":case"CIMGeometricEffectDonut":e.width&&(e.width*=t);break;case"CIMGeometricEffectBuffer":e.size&&(e.size*=t);break;case"CIMGeometricEffectCut":e.beginCut&&(e.beginCut*=t),e.endCut&&(e.endCut*=t),e.middleCut&&(e.middleCut*=t);break;case"CIMGeometricEffectDashes":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.dashTemplate&&e.dashTemplate.length){let i=e.dashTemplate.map(e=>e*t);e.dashTemplate=i}break;case"CIMGeometricEffectExtension":case"CIMGeometricEffectJog":case"CIMGeometricEffectRadial":e.length&&(e.length*=t);break;case"CIMGeometricEffectMove":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t);break;case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":e.offset&&(e.offset*=t);break;case"CIMGeometricEffectRegularPolygon":e.radius&&(e.radius*=t);break;case"CIMGeometricEffectTaperedPolygon":e.fromWidth&&(e.fromWidth*=t),e.length&&(e.length*=t),e.toWidth&&(e.toWidth*=t);break;case"CIMGeometricEffectWave":e.amplitude&&(e.amplitude*=t),e.period&&(e.period*=t)}}function s(e){let t=[];return function e(t,i){let n;if(!t)return;n="CIMTextSymbol"===t.type?t.symbol:t;let a="CIMPolygonSymbol"===t.type;if(n?.symbolLayers){for(let t of n.symbolLayers)if(!(t.colorLocked||a&&((0,r.mA)(t)||(0,r.MM)(t)&&t.markerPlacement&&(0,r.zr)(t.markerPlacement))))switch(t.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":t.tintColor&&o(i,t.tintColor);break;case"CIMVectorMarker":t.markerGraphics?.forEach(t=>{e(t.symbol,i)});break;case"CIMSolidStroke":case"CIMSolidFill":o(i,t.color);break;case"CIMHatchFill":e(t.lineSymbol,i)}}}((0,r.lW)(e),t),t.length?new n.A((0,r.e6)(t[0])):null}function o(e,t){for(let i of e)if(i.join(".")===t.join("."))return;e.push(t)}function l(e,t,i){t instanceof n.A||(t=new n.A(t));let a=(0,r.lW)(e);a&&function e(t,i,n){let a;if(!t)return;a="CIMTextSymbol"===t.type?t.symbol:t;let s="CIMPolygonSymbol"===a?.type;if(a?.symbolLayers)for(let t of a.symbolLayers){if(t.colorLocked)continue;if(s){if(n){let{layersToColor:e}=n;if(((0,r.mA)(t)||(0,r.MM)(t)&&t.markerPlacement&&(0,r.zr)(t.markerPlacement))&&"fill"===e||(0,r.jn)(t)&&"outline"===e)continue}else if((0,r.mA)(t)||(0,r.MM)(t)&&t.markerPlacement&&(0,r.zr)(t.markerPlacement))continue}let a=i.toArray();switch(t.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":t.tintColor=a;break;case"CIMVectorMarker":t.markerGraphics?.forEach(t=>{e(t.symbol,i,n)});break;case"CIMSolidStroke":case"CIMSolidFill":t.color=a;break;case"CIMHatchFill":e(t.lineSymbol,i,n)}}}(a,t,i)}},24862:(e,t,i)=>{i.d(t,{$:()=>l,p:()=>h});var n=i(73541),r=i(10433),a=i(87255),s=i(50082);function o({x:e,y:t,z:i}){return(0,n.fA)(e,t,i??0)}function l(e,t){switch(e.type){case"edge":return e.draped?new r.X({edgeStart:o(e.start),edgeEnd:o(e.end),targetPoint:(0,n.de)(o(e.target)),objectId:e.objectId,getGroundElevation:t}):new a.z({edgeStart:o(e.start),edgeEnd:o(e.end),targetPoint:(0,n.de)(o(e.target)),objectId:e.objectId,isDraped:!1});case"vertex":return new s.C({targetPoint:(0,n.de)(o(e.target)),objectId:e.objectId,isDraped:!1})}}function h(e,t){return null!=e&&"3d"===e.type?(i,n)=>e.elevationProvider.getElevation(i,n,0,t,"ground"):()=>null}},29149:(e,t,i)=>{i.r(t),i.d(t,{GraphicsSnappingSource:()=>P});var n=i(81856),r=i(28690),a=i(31461),s=i(83610),o=i(49861),l=i(92753),h=i(45257),u=i(91838);i(57845),i(61939);var d=i(12709),c=i(18524),f=i(87960),p=i(65111),m=i(25893),y=i(59879),g=i(60729),_=i(82795),b=i(86925),x=i(11064),M=i(41359),w=i(47823),I=i(26585),v=i(89700),C=i(3489),S=i(24862),k=i(66974),B=i(69659),E=i(19696),A=i(25451);let z="graphics-collections",P=class extends r.A{get updating(){return this._updatingHandles.updating}get _hasZ(){let e=this.view;return null!=e&&"3d"===e.type&&"map-notes"!==this.layerSource.layer.type}get _snappingElevationAligner(){let{view:e}=this,{layer:t}=this.layerSource,i=null!=e&&"3d"===e.type;if(!i||"map-notes"===t.type)return(0,k.n)();let n=async(i,n)=>(await (0,l.qr)(e.whenLayerView(t),n)).elevationAlignPointsInFeatures(i,n);return(0,k.n)(i,{elevationInfo:t.elevationInfo,alignPointsInFeatures:n})}get _snappingElevationFilter(){let{view:e}=this,t=null!=e&&"3d"===e.type&&"map-notes"!==this.layerSource.layer.type;return(0,B.z)(t)}get _symbologySnappingFetcher(){let{view:e}=this,{layer:t}=this.layerSource,i=null!=e&&"3d"===e.type,n=this._extrudedPolygonSymbolsCount>0;return i&&"map-notes"!==t.type&&n?(0,E.H)(n,async(i,n)=>{let r=await e.whenLayerView(t);return(0,l.Te)(n),r.queryForSymbologySnapping({candidates:i,spatialReference:e.spatialReference},n)}):(0,E.H)()}constructor(e){super(e),this.availability=1,this._sources={multipoint:null,point:null,polygon:null,polyline:null},this._loadedWkids=new Set,this._loadedWkts=new Set,this._pendingAdds=[],this._extrudedPolygonSymbolsCount=0,this._updatingHandles=new c.U,this._memoizedMakeGetGroundElevation=(0,o.B)(S.p)}destroy(){for(let e of this._pendingAdds)e.task.abort();this._pendingAdds.length=0,this._mapSources(e=>this._destroySource(e)),this._updatingHandles.destroy()}initialize(){this._updatingHandles.add(()=>this.getGraphicsLayers(),e=>{for(let t of(this._updatingHandles.removeHandles(z),e))this._addMany(t.graphics.toArray()),this.addHandles([t.on("graphic-update",e=>this._onGraphicUpdate(e)),this._updatingHandles.addOnCollectionChange(()=>t.graphics,e=>this._onGraphicsChanged(e))],z)},h.Vh);let{view:e}=this,{layer:t}=this.layerSource;null!=e&&"3d"===e.type&&"map-notes"!==t.type&&e.elevationProvider&&this.addHandles([e.elevationProvider.on("elevation-change",({context:e})=>{(0,I.Up)(e,t.elevationInfo)&&this._snappingElevationAligner.notifyElevationSourceChange()}),(0,h.wB)(()=>t.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),h.Vh),(0,h.on)(()=>t,["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())])}async fetchCandidates(e,t){let{point:i,coordinateHelper:{spatialReference:n}}=e,r=await (0,l.nA)(this._mapSources(i=>this._fetchCandidatesForSource(i,e,t)));(0,l.Te)(t);let a=this._memoizedMakeGetGroundElevation(this.view,n),s=r.flat().map(e=>(0,S.$)(e,a));return(0,C.xX)(i,s),s}async _fetchCandidatesForSource(e,t,i){let n=(0,C.nf)(t,this.view?.type??"2d"),r=await (0,b.J)(e.queryEngine,n,i);(0,l.Te)(i);let a=await this._snappingElevationAligner.alignCandidates(r.candidates,t.coordinateHelper.spatialReference,i);(0,l.Te)(i);let s=await this._symbologySnappingFetcher.fetch(a,i);(0,l.Te)(i);let o=0===s.length?a:[...a,...s];return this._snappingElevationFilter.filter(n,o)}refresh(){}_onGraphicUpdate(e){if(this.getGraphicsLayers().some(t=>t.graphics.includes(e.graphic)))switch(e.property){case"geometry":case"visible":this._remove(e.graphic),this._addMany([e.graphic])}}_onGraphicsChanged(e){for(let t of e.removed)this._remove(t);this._addMany(e.added)}_addMany(e){let t=[],i=new Map;for(let n of e)null!=n.geometry&&(this._needsInitializeProjection(n.geometry.spatialReference)?(t.push(n.geometry.spatialReference),i.set(n.uid,n)):this._add(n));this._createPendingAdd(t,i)}_createPendingAdd(e,t){if(!e.length)return;let i=(0,s.UT)(async i=>{for(let n of(await (0,p.initializeProjection)(e.map(e=>({source:e,dest:this.spatialReference})),{signal:i}),this._markLoadedSpatialReferences(e),t.values()))this._add(n)});this._updatingHandles.addPromise(i.promise);let n={task:i,graphics:t},r=()=>(0,a.Xy)(this._pendingAdds,n);i.promise.then(r,r),this._pendingAdds.push(n)}_markLoadedSpatialReferences(e){for(let t of e){null!=t.wkid&&this._loadedWkids.add(t.wkid);let e=t.wkt2||t.wkt;e&&this._loadedWkts.add(e)}}_add(e){if(null==e.geometry||!e.visible)return;let t=e.geometry;if("mesh"===t.type)return;"extent"===t.type&&(t=f.A.fromExtent(t));let i=this._ensureSource(t.type);if(null==i)return;let n=this._createOptimizedFeature(e.uid,t);null!=n&&(i.featureStore.add(n),(0,v.f3)(e.symbol)&&this._extrudedPolygonSymbolsCount++)}_needsInitializeProjection(e){if(null!=e.wkid&&this._loadedWkids.has(e.wkid))return!1;let t=e.wkt2||e.wkt;return(!t||!this._loadedWkts.has(t))&&!(0,p.canProjectWithoutEngine)(e,this.spatialReference)}_createOptimizedFeature(e,t){let i=(0,p.project)((0,m.b3)(t),this.spatialReference);if(!i)return null;let n=this._ensureGeometryHasZ(i),r=(0,g.Ux)(n,this._hasZ,!1);return new _.Om(r,{[X]:e},null,e)}_ensureGeometryHasZ(e){if(!this._hasZ)return e;let t=e=>{for(;e.length<3;)e.push(0)},i=e.clone();switch(i.hasZ=!0,i.type){case"point":i.z=i.z??0;break;case"multipoint":i.points.forEach(t);break;case"polyline":i.paths.forEach(e=>e.forEach(t));break;case"polygon":i.rings.forEach(e=>e.forEach(t))}return i}_ensureSource(e){let t=this._sources[e];if(null!=t)return t;let i=this._createSource(e);return this._sources[e]=i,i}_createSource(e){let t=y.gy.toJSON(e),i=this._hasZ,n=new x.A({geometryType:t,hasZ:i,hasM:!1});return{featureStore:n,queryEngine:new M.do({featureStore:n,fieldsIndex:w.A.fromLayerJSON({fields:[{name:X,type:"esriFieldTypeOID",alias:X}]}),geometryType:t,hasM:!1,hasZ:i,objectIdField:X,spatialReference:this.spatialReference,priority:A.W6.SNAPPING,scheduler:null!=this.view&&"3d"===this.view.type?this.view.resourceController.scheduler:null}),type:e}}_remove(e){for(let t of(this._mapSources(t=>this._removeFromSource(t,e)),this._pendingAdds))t.graphics.delete(e.uid),0===t.graphics.size&&t.task.abort()}_removeFromSource(e,t){let i=t.uid;e.featureStore.has(i)&&(e.featureStore.removeById(t.uid),(0,v.f3)(t.symbol)&&this._extrudedPolygonSymbolsCount--)}_destroySource(e){e.queryEngine.destroy(),this._sources[e.type]=null}_mapSources(e){let{point:t,polygon:i,polyline:n,multipoint:r}=this._sources,a=[];return null!=t&&a.push(e(t)),null!=i&&a.push(e(i)),null!=n&&a.push(e(n)),null!=r&&a.push(e(r)),a}};(0,n._)([(0,u.MZ)()],P.prototype,"getGraphicsLayers",void 0),(0,n._)([(0,u.MZ)({constructOnly:!0})],P.prototype,"layerSource",void 0),(0,n._)([(0,u.MZ)({constructOnly:!0})],P.prototype,"spatialReference",void 0),(0,n._)([(0,u.MZ)({constructOnly:!0})],P.prototype,"view",void 0),(0,n._)([(0,u.MZ)({readOnly:!0})],P.prototype,"updating",null),(0,n._)([(0,u.MZ)({readOnly:!0})],P.prototype,"availability",void 0),(0,n._)([(0,u.MZ)()],P.prototype,"_hasZ",null),(0,n._)([(0,u.MZ)()],P.prototype,"_snappingElevationAligner",null),(0,n._)([(0,u.MZ)()],P.prototype,"_snappingElevationFilter",null),(0,n._)([(0,u.MZ)()],P.prototype,"_symbologySnappingFetcher",null),(0,n._)([(0,u.MZ)()],P.prototype,"_extrudedPolygonSymbolsCount",void 0),P=(0,n._)([(0,d.$)("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],P);let X="OBJECTID"},29499:(e,t,i)=>{i.d(t,{F:()=>o});var n=i(57845),r=i(2370),a=i(84766);let s={minX:0,minY:0,maxX:0,maxY:0};class o{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new r.w(9,(0,n.A)("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){let e=Array(this._idByBounds.size),t=0;this._idByBounds.forEach((i,n)=>{e[t++]=n}),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter(e=>this._idByBounds.has(e))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;let e=(0,a.Ie)();for(let t of this._boundsById.values())t&&(e[0]=Math.min(t[0],e[0]),e[1]=Math.min(t[1],e[1]),e[2]=Math.max(t[2],e[2]),e[3]=Math.max(t[3],e[3]));return e}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){let t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){var i;this._loadIndex(),i=this._index,s.minX=e[0],s.minY=e[1],s.maxX=e[2],s.maxY=e[3],i.search(s,e=>t(this._idByBounds.get(e)))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){let t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},34635:(e,t,i)=>{i.d(t,{$4:()=>function e(t){if(!t)return null;let i=null;switch(t.type){case u:case h:case d:i=e(t.outline);break;case"simple-line":{let e=(0,o.Lz)(t.width);null!=t.style&&"none"!==t.style&&0!==e&&((i={color:t.color,style:g(t.style),width:e,cap:t.cap,join:"miter"===t.join?(0,o.Lz)(t.miterLimit):t.join}).dashArray=y(i).join(",")||"none");break}default:i=null}return i},O0:()=>y,O1:()=>g,Sw:()=>_,eH:()=>p,rc:()=>m});var n=i(81048),r=i(70152),a=i(39166),s=i(16082),o=i(55048),l=i(20131);let h="picture-fill",u="simple-fill",d="simple-marker",c=new Map([["dash",[4,3]],["dashdot",[4,3,1,3]],["dot",[1,3]],["longdash",[8,3]],["longdashdot",[8,3,1,3]],["longdashdotdot",[8,3,1,3,1,3]],["shortdash",[4,1]],["shortdashdot",[4,1,1,1]],["shortdashdotdot",[4,1,1,1,1,1]],["shortdot",[1,1]],["solid",[]]]),f=new s.q(1e3);function p(e){let t=e.style,i=null;if(e)switch(e.type){case d:"cross"!==t&&"x"!==t&&(i=e.color);break;case u:t&&"solid"!==t?"none"!==t&&(i={type:"pattern",x:0,y:0,src:(0,n.s)(`esri/symbols/patterns/${t}.png`),width:5,height:5}):i=e.color;break;case h:i={type:"pattern",src:e.url,width:(0,o.Lz)(e.width)*e.xscale,height:(0,o.Lz)(e.height)*e.yscale,x:(0,o.Lz)(e.xoffset),y:(0,o.Lz)(e.yoffset)};break;case"text":i=e.color;break;case"cim":i=(0,l.Nk)(e)}return i}function m(e,t){let i=e+"-"+t;return void 0!==f.get(i)?Promise.resolve(f.get(i)):(0,a.A)(e,{responseType:"image"}).then(e=>{let n=e.data,r=n.naturalWidth,a=n.naturalHeight,s=document.createElement("canvas");s.width=r,s.height=a;let o=s.getContext("2d");o.fillStyle=t,o.fillRect(0,0,r,a),o.globalCompositeOperation="destination-in",o.drawImage(n,0,0);let l=s.toDataURL();return f.put(i,l),l})}function y(e){if(!e?.style)return[];let{dashArray:t,style:i,width:n}=e;if("string"==typeof t&&"none"!==t)return t.split(",").map(e=>Number(e));let r=n??0,a=c.has(i)?c.get(i).map(e=>e*r):[];if("butt"!==e.cap)for(let[e,t]of a.entries())a[e]=e%2==1?t+r:Math.max(t-r,1);return a}let g=(()=>{let e={};return t=>{if(e[t])return e[t];let i=t.replaceAll("-","");return e[t]=i,i}})(),_=new r.A([128,128,128])},49861:(e,t,i)=>{function n(e){let t,i,n=[],r=!1;return function(...a){return r&&t===this&&function(e,t){if(e.length!==t.length)return!1;for(let i=0;i<e.length;++i)if(e[i]!==t[i])return!1;return!0}(a,n)||(i=e.apply(this,a),t=this,n=a,r=!0),i}}i.d(t,{B:()=>n})},50082:(e,t,i)=>{i.d(t,{C:()=>s});var n=i(64088),r=i(99392),a=i(55186);class s extends r.w{constructor(e){super({...e,constraint:new n.i7(e.targetPoint)})}get hints(){return[new a._(this.targetPoint,this.isDraped,this.domain)]}}},55186:(e,t,i)=>{i.d(t,{_:()=>a});var n=i(63599),r=i(62358);class a extends r.m{constructor(e,t,i){super(t,i),this.point=e}equals(e){return e instanceof a&&(0,n.p)(this.point,e.point)}}},66974:(e,t,i)=>{i.d(t,{n:()=>l}),i(57845);var n=i(16082),r=i(90304),a=i(92753),s=i(8922),o=i(23106);function l(e=!1,t){if(e){let{elevationInfo:e,alignPointsInFeatures:i}=t;return new u(e,i)}return new h}class h{async alignCandidates(e,t,i){return e}notifyElevationSourceChange(){}}class u{constructor(e,t){this._elevationInfo=e,this._alignPointsInFeatures=t,this._alignmentsCache=new n.q(1024),this._cacheVersion=0}async alignCandidates(e,t,i){let n=this._elevationInfo;return null==n||"absolute-height"!==n.mode||n.featureExpressionInfo?this._alignComputedElevationCandidates(e,t,i):(function(e,t,i){let{offset:n,unit:r}=i;if(null==n)return;let a=(0,s.G9)(t),l=n*((0,o.Ao)(r??"meters")/a);for(let t of e)switch(t.type){case"edge":t.start.z+=l,t.end.z+=l;continue;case"vertex":t.target.z+=l;continue}}(e,t,n),e)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++}async _alignComputedElevationCandidates(e,t,i){let n=new Map;for(let t of e)(0,r.tE)(n,t.objectId,f).push(t);let[s,o,l]=this._prepareQuery(n,t),h=await this._alignPointsInFeatures(s,i);if((0,a.Te)(i),l!==this._cacheVersion)return this._alignComputedElevationCandidates(e,t,i);this._applyCacheAndResponse(s,h,o);let{drapedObjectIds:u,failedObjectIds:d}=h,c=[];for(let t of e){let{objectId:e}=t;u.has(e)&&"edge"===t.type&&(t.draped=!0),d.has(e)||c.push(t)}return c}_prepareQuery(e,t){let i=[],n=[];for(let[t,r]of e){let e=[];for(let i of r)this._addToQueriesOrCachedResult(t,i.target,e,n),"edge"===i.type&&(this._addToQueriesOrCachedResult(t,i.start,e,n),this._addToQueriesOrCachedResult(t,i.end,e,n));0!==e.length&&i.push({objectId:t,points:e})}return[{spatialReference:t.toJSON(),pointsInFeatures:i},n,this._cacheVersion]}_addToQueriesOrCachedResult(e,t,i,n){let r=c(e,t),a=this._alignmentsCache.get(r);null==a?i.push(t):n.push(new d(t,a))}_applyCacheAndResponse(e,{elevations:t,drapedObjectIds:i,failedObjectIds:n},r){for(let e of r)e.apply();let a=0,s=this._alignmentsCache;for(let{objectId:r,points:o}of e.pointsInFeatures){if(n.has(r)){a+=o.length;continue}let e=!i.has(r);for(let i of o){let n=c(r,i),o=t[a++];i.z=o,e&&s.put(n,o,1)}}}}class d{constructor(e,t){this.point=e,this.z=t}apply(){this.point.z=this.z}}function c(e,{x:t,y:i,z:n,spatialReference:r}){return`${e}-${t}-${i}-${n??0}}-wkid:${r?.wkid}`}function f(){return[]}},69659:(e,t,i)=>{i.d(t,{z:()=>s}),i(57845);class n{filter(e,t){return t}notifyElevationSourceChange(){}}class r{filter(e,t){var i;let{point:n,distance:r}=e,{z:s}=n;if(null==s||0===t.length)return t;let l="number"==typeof(i=r)?{x:i,y:i,z:i}:i,h=this._updateCandidatesTo3D(t,n,l).filter(a);return h.sort(o),h}_updateCandidatesTo3D(e,t,i){for(let n of e)switch(n.type){case"edge":!function(e,t,{x:i,y:n,z:r}){let{start:a,end:s,target:o}=e;e.draped||function(e,t,i,n){let r=n.x-i.x,a=n.y-i.y,s=n.z-i.z,o=Math.min(1,Math.max(0,((t.x-i.x)*r+(t.y-i.y)*a+s*(t.z-i.z))/(r*r+a*a+s*s))),l=i.x+r*o,h=i.y+a*o,u=i.z+s*o;e.x=l,e.y=h,e.z=u}(o,t,a,s);let l=(t.x-o.x)/i,h=(t.y-o.y)/n,u=(t.z-o.z)/r;e.distance=Math.sqrt(l*l+h*h+u*u)}(n,t,i);continue;case"vertex":!function(e,t,{x:i,y:n,z:r}){let{target:a}=e,s=(t.x-a.x)/i,o=(t.y-a.y)/n,l=(t.z-a.z)/r;e.distance=Math.sqrt(s*s+o*o+l*l)}(n,t,i);continue}return e}}function a(e){return e.distance<=1}function s(e=!1){return e?new r:new n}function o(e,t){return e.distance-t.distance}},86925:(e,t,i)=>{i.d(t,{J:()=>p});var n=i(33715),r=i(92753),a=i(31789),s=i(25606),o=i(71760),l=i(76461),h=i(41359),u=i(90804),d=i(91738),c=i(6515),f=i(40513);async function p(e,t,i){let f=(0,r.Mq)(i),{point:p,distance:y,returnEdge:g,vertexMode:_}=t;if(!g&&"none"===_)return{candidates:[]};let b=(0,n.o8)(t.query);b=await e.schedule(()=>(0,d.T2)(b,e.definitionExpression,e.spatialReference),f),b=await e.reschedule(()=>(0,c.B4)(b,{availableFields:e.availableFields,fieldsIndex:e.fieldsIndex,geometryType:e.geometryType,spatialReference:e.spatialReference}),f);let x=!(0,o.aI)(p.spatialReference,e.spatialReference);x&&await (0,l.Nk)(p.spatialReference,e.spatialReference);let M="number"==typeof y?y:y.x,w="number"==typeof y?y:y.y,I={xmin:p.x-M,xmax:p.x+M,ymin:p.y-w,ymax:p.y+w,spatialReference:p.spatialReference},v=x?(0,l.Cv)(I,e.spatialReference):I;if(!v)return{candidates:[]};let C=(await (0,s.el)((0,a.rS)(p),null,{signal:f}))[0],S=(await (0,s.el)((0,a.rS)(v),null,{signal:f}))[0];if(null==C||null==S)return{candidates:[]};let k=new u.G(await e.reschedule(()=>e.searchFeatures((0,h.ux)(S.toJSON())),f),b,e);await e.reschedule(()=>e.executeObjectIdsQuery(k),f),await e.reschedule(()=>e.executeTimeQuery(k),f),await e.reschedule(()=>e.executeAttributesQuery(k),f),await e.reschedule(()=>m(e,k,f),f);let B=C.toJSON(),E=x?(0,l.Cv)(B,e.spatialReference):B,A=x?Math.max(v.xmax-v.xmin,v.ymax-v.ymin)/2:y;return k.createSnappingResponse({...t,point:E,distance:A},p.spatialReference)}async function m(e,t,i){let{query:n}=t,{spatialRel:r}=n;if(!t?.items?.length||!n.geometry||!r)return;let a=await (0,f.xt)(r,n.geometry,e.geometryType,e.hasZ,e.hasM),s=await e.runSpatialFilter(t.items,e=>a(e.geometry),i);t.items=s}},89700:(e,t,i)=>{i.d(t,{$d:()=>p,GG:()=>k,N7:()=>m,Sx:()=>y,UQ:()=>S,di:()=>B,dt:()=>_,f3:()=>E,k_:()=>f});var n=i(70152),r=i(83610);i(57845);var a=i(55048),s=i(56911),o=i(27318),l=i(20131),h=i(34635),u=i(93165),d=i(76558);let c=new n.A("white");function f(e){if(!e)return 0;if((0,d.wk)(e)){let t=function(e){let t=e.symbolLayers?.at(-1);if(t&&"outline"in t)return t?.outline?.size}(e);return null!=t?t:0}return(0,a.PN)((0,h.$4)(e)?.width)}function p(e){if(null==e||!("symbolLayers"in e)||null==e.symbolLayers)return!1;switch(e.type){case"point-3d":return e.symbolLayers.some(e=>"object"===e.type);case"line-3d":return e.symbolLayers.some(e=>"path"===e.type);case"polygon-3d":return e.symbolLayers.some(e=>"object"===e.type||"extrude"===e.type);default:return!1}}function m(e){return e.resource?.href??""}function y(e,t){if(!e)return null;let i=null;return(0,d.wk)(e)?i=function(e){let t=e.symbolLayers;if(!t)return null;let i=null;return t.forEach(e=>{"object"===e.type&&e.resource?.href||(i="water"===e.type?e.color:e.material?e.material.color:null)}),i?new n.A(i):null}(e):(0,d.$y)(e)&&(i="cim"===e.type?(0,l.Nk)(e):e.color?new n.A(e.color):null),i?g(i,t):null}function g(e,t){if(null==t||null==e)return e;let i=e.toRgba();return i[3]=i[3]*t,new n.A(i)}function _(e,t,i){var r;e&&(t||null!=i)&&(t&&(t=new n.A(t)),(0,d.wk)(e)?function(e,t,i){let n=e.symbolLayers;if(!n)return;let r=e=>g(t=t??e??(null!=i?c:null),i);n.forEach(e=>{if("object"!==e.type||!e.resource?.href||t)if("water"===e.type)e.color=r(e.color);else{let t=r(null!=e.material?e.material.color:null);null==e.material?e.material=new u.N({color:t}):e.material.color=t,null!=i&&"outline"in e&&null!=e.outline?.color&&(e.outline.color=g(e.outline.color,i))}})}(e,t,i):(0,d.$y)(e)&&((r=(r=t)??e.color)&&(e.color=g(r,i)),null!=i&&"outline"in e&&e.outline?.color&&(e.outline.color=g(e.outline.color,i))))}async function b(e,t){let i=e.symbolLayers;i&&await (0,r.jJ)(i,async e=>x(e,t))}async function x(e,t){switch(e.type){case"extrude":var i;e.size="number"==typeof(i=t)[2]?i[2]:0;break;case"icon":case"line":case"text":var n=e,r=t;let a=M(r);null!=a&&(n.size=a);break;case"path":var o=e,l=t;let h=I(l,s.Un,[o.width,void 0,o.height]);o.width=C(l[0],o.width,1,h),o.height=C(l[2],o.height,1,h);break;case"object":await w(e,t)}}function M(e){for(let t of e)if("number"==typeof t)return t;return null}async function w(e,t){let{resourceSize:i,symbolSize:n}=await v(e),r=I(t,i,n);e.width=C(t[0],n[0],i[0],r),e.depth=C(t[1],n[1],i[1],r),e.height=C(t[2],n[2],i[2],r)}function I(e,t,i){for(let n=0;n<3;n++){let r=e[n];switch(r){case"symbol-value":{let e=i[n];return null!=e?e/t[n]:1}case"proportional":break;default:if(r&&t[n])return r/t[n]}}return 1}async function v(e){let{computeObjectLayerResourceSize:t}=await i.e(7713).then(i.bind(i,37713)),n=await t(e,10),{width:r,height:a,depth:s}=e,o=[r,s,a],l=1;for(let e=0;e<3;e++){let t=o[e];if(null!=t){l=t/n[e];break}}for(let e=0;e<3;e++)null==o[e]&&(o[e]=n[e]*l);return{resourceSize:n,symbolSize:o}}function C(e,t,i,n){switch(e){case"proportional":return i*n;case"symbol-value":return null!=t?t:i;default:return e}}async function S(e,t){if(e&&t)return(0,d.wk)(e)?b(e,t):void((0,d.$y)(e)&&function(e,t){let i=M(t);if(null!=i)switch(e.type){case"simple-marker":e.size=i;break;case"picture-marker":{let t=e.width/e.height;t>1?(e.width=i,e.height=i*t):(e.width=i*t,e.height=i);break}case"simple-line":e.width=i;break;case"text":e.font.size=i}}(e,t))}function k(e,t,i){if(e&&null!=t)if((0,d.wk)(e)){let n=e.symbolLayers;n&&n.forEach(e=>{if("object"===e.type)switch(i){case"tilt":e.tilt=(e.tilt??0)+t;break;case"roll":e.roll=(e.roll??0)+t;break;default:e.heading=(e.heading??0)+t}"icon"===e.type&&(e.angle+=t)})}else(0,d.$y)(e)&&("simple-marker"!==e.type&&"picture-marker"!==e.type&&"text"!==e.type||(e.angle+=t))}function B(e){if(!e)return null;let t=e.effects.filter(e=>"bloom"!==e.type).map(e=>e.toJSON());return(0,o.zu)(t)}function E(e){return null!=e&&"polygon-3d"===e.type&&e.symbolLayers.some(e=>"extrude"===e.type)}}}]);