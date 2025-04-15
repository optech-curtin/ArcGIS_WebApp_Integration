"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1856],{51856:(e,t,r)=>{r.d(t,{FeatureSnappingEngine:()=>G});var i=r(81856),a=r(28690),n=r(31461),l=r(19158),s=r(57845),o=r(92753),u=r(45257),d=r(8922),c=r(91838),p=r(61939),h=r(12709),y=r(54036),f=r(63599),g=r(56911),S=r(19461),v=r(18524),w=r(26585),_=r(64088),m=r(73541),b=r(97409);r(33638);var F=r(32392),M=r(98569),R=r(71086),x=r(3489),E=r(31651);let I=class extends a.A{set attributeRulesEnabled(e){this._set("attributeRulesEnabled",e),e&&this.loadRules()}get layerView(){return this.view?.allLayerViews?.find(e=>e.layer===this.layer)}get valid(){let{_valid:e,snappingSource:t,layer:r}=this;return!(!t||!r)&&e}get subtypeFilter(){let{layer:e,snappingSource:t}=this;if(!(0,R.F2)(e)||!e.subtypes?.length||!t)return{mode:"not-in-use",filter:null};let r=t.layerSource.sublayerSources.filter(e=>e.enabled&&e.layer.visible&&(0,E.JU)(this.view?.scale,e.layer.effectiveScaleRange.minScale,e.layer.effectiveScaleRange.maxScale)).map(e=>e.layer.subtypeCode);if(!r.length)return{mode:"none-visible",filter:null};if(r.length===e.subtypes.length)return{mode:"all-visible",filter:null};let i=e.fieldsIndex.get(e.subtypeField)?.name??e.subtypeField;return 1===r.length?{mode:"in-use",filter:`${i} = ${r.getItemAt(0)}`}:{mode:"in-use",filter:`${i} IN (${r.join(", ")})`}}get floorFilter(){let{view:e,layer:t}=this;return e&&t?(0,M.E)({view:e,layer:t}):null}constructor(e){super(e),this.layer=null,this.snappingSource=null,this.rulesTable=null,this._valid=null}initialize(){if(!this.snappingSource||!this.layer)return void(this._valid=!1);let{layer:e,snappingSource:t}=this;"refresh"in e&&this.addHandles(e.on("refresh",()=>t.refresh())),this.loadRules(),this.addHandles([(0,u.wB)(()=>t.updating,e=>t.layerSource.updating=e,u.pc),(0,u.wB)(()=>t.availability,e=>t.layerSource.availability=e,u.pc)])}getFetchCandidatesParameters(e,t,r){if(!this.valid)return[];let{layer:i,layerView:a,floorFilter:n,rulesTable:l,subtypeFilter:o}=this,u={distance:r,mode:this.view?.type??"2d",point:e,coordinateHelper:t.coordinateHelper,...{returnEdge:!0,vertexMode:"all"},filter:a&&"filter"in a?a.filter:null};if(n&&(u.filter=L(u.filter,n)),"not-in-use"!==o.mode&&"all-visible"!==o.mode){if("none-visible"===o.mode)return[];u.filter?u.filter.where=(0,b.mA)(u.filter.where,o.mode):u.filter=new F.A({where:o.filter})}if(!this.attributeRulesEnabled)return[u];let d=t.feature,c="subtype-sublayer"===d?.sourceLayer?.type?d.sourceLayer.parent:d?.sourceLayer;if(l&&d&&(0,x.Tu)(this.view?.map)&&((0,R.yZ)(i)||(0,R.F2)(i))&&i.layerId&&((0,R.yZ)(c)||(0,R.F2)(c))&&this.view.map.utilityNetworks?.find(e=>e.isUtilityLayer(c))){if("loaded"!==l.loadStatus)return[];let e=[],t=i.layerId,r=l.getFeatureSQL(c,d)?.[t];if(!r)return[];let a=r.anyVertex,n=r.endVertex;return n&&a&&n===a&&(n=""),n&&e.push({...u,returnEdge:!1,vertexMode:"ends",filter:L(u.filter,n)}),a&&e.push({...u,returnEdge:(0,s.A)("snapping-include-edges-when-applying-any-vertex-rule")??!1,vertexMode:"all",filter:L(u.filter,a)}),e}return[u]}async loadRules(){this._valid=null;let{layer:e,view:t,attributeRulesEnabled:r}=this;if(r&&e&&t&&(0,x.Tu)(t?.map)&&((0,R.yZ)(e)||(0,R.F2)(e)))try{await Promise.allSettled(t.map.utilityNetworks?.map(e=>e.load())??[]);let r=t.map.utilityNetworks?.find(t=>t.isUtilityLayer(e));r&&(this.rulesTable=await r.getRulesTable(),await this.rulesTable?.load())}catch(t){return this._valid=!1,void p.A.getLogger("esri.views.interactive.snapping.FeatureSnappingSourceInfo").error("Failed to load rules table for snapping source",e.title)}this._valid=!0}remove(){this.destroy()}destroy(){this.snappingSource?.destroy()}};function L(e,t){return new F.A(null==e?{where:t}:e.where?{where:(0,b.mA)(e.where,t)}:{where:t})}(0,i._)([(0,c.MZ)({constructOnly:!0})],I.prototype,"layer",void 0),(0,i._)([(0,c.MZ)({constructOnly:!0})],I.prototype,"snappingSource",void 0),(0,i._)([(0,c.MZ)({constructOnly:!0})],I.prototype,"view",void 0),(0,i._)([(0,c.MZ)({value:!1})],I.prototype,"attributeRulesEnabled",null),(0,i._)([(0,c.MZ)()],I.prototype,"layerView",null),(0,i._)([(0,c.MZ)()],I.prototype,"rulesTable",void 0),(0,i._)([(0,c.MZ)()],I.prototype,"valid",null),(0,i._)([(0,c.MZ)()],I.prototype,"subtypeFilter",null),(0,i._)([(0,c.MZ)()],I.prototype,"floorFilter",null),(0,i._)([(0,c.MZ)()],I.prototype,"_valid",void 0),I=(0,i._)([(0,h.$)("esri.views.interactive.snapping.FeatureSnappingSourceInfo")],I);var C=r(18836),A=r(10433),T=r(87255),Z=r(99392),z=r(39443),H=r(94799);let G=class extends a.A{get updating(){return this._snappingSources.some(e=>null==e?.valid||!0===e.valid&&!0===e.snappingSource?.updating)||this._updatingHandles.updating}constructor(e){super(e),this.options=null,this._domain=C.n.FEATURE,this._updatingHandles=new v.U,this._sourceModules={featureService:{module:null,loader:null},featureCollection:{module:null,loader:null},graphics:{module:null,loader:null},notes:{module:null,loader:null},scene:{module:null,loader:null}}}initialize(){let e=(0,u.lZ)(()=>this.options?._effectiveFeatureSources,(e,t)=>this._createSourceInfo(e,t));this._snappingSources=e,this.addHandles([(0,l.DQ)(e),(0,u.wB)(()=>({rulesEnabled:!!this.options?.attributeRulesEnabled,sources:this._snappingSources.filter(n.Ru)}),({rulesEnabled:e,sources:t})=>{for(let r of t)r.attributeRulesEnabled=e},u.OH)])}destroy(){this._set("options",null),this._updatingHandles.destroy()}async fetchCandidates(e,t,r,i){if(!(t&this._domain&&null!=this.options&&this.options.effectiveFeatureEnabled))return[];let a=[],n=this._computeScreenSizeDistanceParameters(e,r);for(let t of this._snappingSources)if(!(!t?.valid||!t.snappingSource?.layerSource?.enabled||t.layerView?.suspended))for(let l of t.getFetchCandidatesParameters(e,r,n))a.push(t.snappingSource.fetchCandidates(l,i).then(e=>e.filter(e=>!this._candidateIsExcluded(t.snappingSource,e,r.excludeFeature))));let l=(await (0,o.nA)(a)).flat();return this._addRightAngleCandidates(l,e,n,r),(0,o.Te)(i),(0,x.xX)(e,l),l}_addRightAngleCandidates(e,t,r,i){let a=null!=i.vertexHandle?i.vertexHandle.rightEdge?.rightVertex?.pos:null!=i.editGeometryOperations&&"polygon"===i.editGeometryOperations.data.type?i.editGeometryOperations.data.components[0]?.getFirstVertex()?.pos:null,n=null!=i.vertexHandle?i.vertexHandle.leftEdge?.leftVertex?.pos:null!=i.editGeometryOperations?i.editGeometryOperations.data.components[0]?.getLastVertex()?.pos:null,{view:l}=this,s=(0,m.Lp)(a,l,i),o=(0,m.Lp)(n,l,i),u=e.length;for(let i=0;i<u;i++)this._addRightAngleCandidate(e[i],o,t,r,e),this._addRightAngleCandidate(e[i],s,t,r,e)}_addRightAngleCandidate(e,t,r,i,a){var n;if(null==t||!(((n=e)instanceof T.z||n instanceof A.X)&&!function({constraint:{start:e,end:t}}){let r=(0,f.s)(e,t),i=(0,y.hG)((0,m.Xz)(e),(0,m.Xz)(t));return r<(0,S.FD)()||i/r<j}(n)))return;let l=e.constraint.closestTo(t),s=(l[0]-r[0])/i.x,o=(l[1]-r[1])/i.y,{start:u,end:d}=e.constraint;if(s*s+o*o<=1){let r=(0,y.hG)((0,m.Xz)(l),(0,m.Xz)(u))>(0,y.hG)((0,m.Xz)(l),(0,m.Xz)(d))?u:d,i=new z.HJ({targetPoint:(0,m.de)(l),otherVertex:t,otherVertexType:z.pn.NEXT,previousVertex:r,constraint:new _.FX(t,l),objectId:e.objectId,isDraped:e.isDraped,domain:C.n.FEATURE});a.push(i)}}_computeScreenSizeDistanceParameters(e,t){let r=null!=this.options?this.options.distance*("touch"===t.pointer?this.options.touchSensitivityMultiplier:1):0;return null==this.view?{x:r,y:r,z:r,distance:r}:"2d"===this.view.type?{x:r*=this.view.resolution,y:r,z:r,distance:r}:this._computeScreenSizeDistanceParameters3D(e,r,this.view,t)}_computeScreenSizeDistanceParameters3D(e,t,r,i){let{spatialReference:a}=i;r.renderCoordsHelper.toRenderCoords(e,a,P);let n=r.state.camera.computeScreenPixelSizeAt(P),l=n*r.renderCoordsHelper.unitInMeters,s=l/(0,d.GA)(a),o=l/(0,d.G9)(a),u=t*s,c=t*o,p=(0,H.j)(e,a,w.qt,r),h=p?O(p,e,s,0,0,r,i):0,y=p?O(p,e,0,s,0,r,i):0,f=p?O(p,e,0,0,o,r,i):0;return{x:0===h?0:u/h,y:0===y?0:u/y,z:0===f?0:c/f,distance:n*t}}_candidateIsExcluded(e,t,r){if(null==r)return!1;let i=this._getCandidateObjectId(t);if(null==i)return!1;let a=e.layerSource.layer;return"graphics"===a.type?r.uid===i:r.sourceLayer===a&&!(!r.attributes||!("objectIdField"in a))&&r.attributes[a.objectIdField]===i}_getCandidateObjectId(e){return e instanceof Z.w?e.objectId:null}async _createSourceInfo(e,t){let r=e.layer;r.loaded||(await r.load(),(0,o.Te)(t));let{view:i}=this,a=await this._createFeatureSnappingSourceType(e);return(0,o.Te)(t),new I(null==a?{}:{snappingSource:a,view:i,layer:r})}async _createFeatureSnappingSourceType(e){switch(e.layer.type){case"feature":case"geojson":case"csv":case"oriented-imagery":case"subtype-group":case"wfs":return this._createFeatureSnappingSourceFeatureLayer(e);case"graphics":return this._createFeatureSnappingSourceGraphicsLayer(e);case"map-notes":return this._createFeatureSnappingSourceMapNotesLayer(e);case"scene":case"building-scene":return this._createFeatureSnappingSourceSceneLayer(e)}return null}async _createFeatureSnappingSourceSceneLayer(e){let{view:t}=this;return null==t||"3d"!==t.type?null:new(await this._getSourceModule("scene")).SceneLayerSnappingSource({layerSource:e,view:t})}async _createFeatureSnappingSourceFeatureLayer(e){switch(e.layer.source?.type){case"feature-layer":case"oriented-imagery":return new(await this._getSourceModule("featureService")).FeatureServiceSnappingSource({spatialReference:this.spatialReference,view:this.view,layerSource:e});case"memory":case"csv":case"geojson":case"wfs":if("mesh"===e.layer.geometryType)break;return new(await this._getSourceModule("featureCollection")).FeatureCollectionSnappingSource({layerSource:e,view:this.view})}return null}async _createFeatureSnappingSourceGraphicsLayer(e){return new(await this._getSourceModule("graphics")).GraphicsSnappingSource({getGraphicsLayers:()=>[e.layer],spatialReference:this.spatialReference,view:this.view,layerSource:e})}async _createFeatureSnappingSourceMapNotesLayer(e){return new(await this._getSourceModule("notes")).GraphicsSnappingSource({getGraphicsLayers:()=>e.layer.sublayers?.toArray()??[],spatialReference:this.spatialReference,view:this.view,layerSource:e})}async _getSourceModule(e){let t=this._sourceModules[e];if(null==t.loader){let t=this._loadSourceModule(e);this._sourceModules[e]={module:null,loader:t};let r=await t;return this._sourceModules[e]={module:r,loader:t},r}return null==t.module?t.loader:t.module}_loadSourceModule(e){let t=this._updatingHandles;switch(e){case"featureService":return t.addPromise(r.e(912).then(r.bind(r,20912)));case"featureCollection":return t.addPromise(r.e(9016).then(r.bind(r,49016)));case"graphics":case"notes":return t.addPromise(Promise.all([r.e(2140),r.e(9368),r.e(8560),r.e(9149)]).then(r.bind(r,29149)));case"scene":return t.addPromise(Promise.all([r.e(420),r.e(9670)]).then(r.bind(r,99670)))}}get test(){}};function O(e,t,r,i,a,n,{spatialReference:l}){let s=(0,f.c)(V,t);s[0]+=r,s[1]+=i,s[2]+=a;let o=(0,H.j)(s,l,w.qt,n);return o?(0,x.Mo)(o,e):1/0}(0,i._)([(0,c.MZ)({constructOnly:!0})],G.prototype,"spatialReference",void 0),(0,i._)([(0,c.MZ)({constructOnly:!0})],G.prototype,"view",void 0),(0,i._)([(0,c.MZ)()],G.prototype,"options",void 0),(0,i._)([(0,c.MZ)({readOnly:!0})],G.prototype,"updating",null),(0,i._)([(0,c.MZ)()],G.prototype,"_snappingSources",void 0),G=(0,i._)([(0,h.$)("esri.views.interactive.snapping.FeatureSnappingEngine")],G);let P=(0,g.vt)(),V=(0,g.vt)(),j=1e-4},98569:(e,t,r)=>{function i(e){let t=e.layer;return"floorInfo"in t&&t.floorInfo?.floorField&&"floors"in e.view?n(e.view.floors,t.floorInfo.floorField):null}function a(e,t){return"floorInfo"in t&&t.floorInfo?.floorField?n(e,t.floorInfo.floorField):null}function n(e,t){if(!e?.length)return null;let r=e.filter(e=>""!==e).map(e=>`'${e}'`);return r.push("''"),`${t} IN (${r.join(",")}) OR ${t} IS NULL`}r.d(t,{E:()=>i,f:()=>a})}}]);