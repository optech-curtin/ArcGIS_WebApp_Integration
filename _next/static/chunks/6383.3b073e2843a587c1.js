"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6383],{6383:(e,t,r)=>{r.r(t),r.d(t,{default:()=>G});var l,s=r(81856),i=r(54335),o=r(59988),n=r(21892),a=r(92753),u=r(45257),y=r(90525),p=r(91838);r(57845),r(61939),r(33638);var f=r(53480),h=r(12709),d=r(7780),b=r(61414),v=r(91463),c=r(64171),m=r(24743),g=r(2043),_=r(54882),S=r(6255),w=r(23281),M=r(76572),k=r(74652),x=r(92713),O=r(31551),E=r(45714),Z=r(86942),A=r(67869);let L=l=class extends k.A.EventedMixin(x.A.JSONSupportMixin(O.A)){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([(0,u.on)(()=>this.sublayers,"after-add",({item:e})=>{e.parent=this,e.layer=this.layer},u.OH),(0,u.on)(()=>this.sublayers,"after-remove",({item:e})=>{e.layer=e.parent=null},u.OH),(0,u.wB)(()=>this.sublayers,(e,t)=>{if(t)for(let e of t)e.layer=e.parent=null;if(e)for(let t of e)t.parent=this,t.layer=this.layer},u.OH),(0,u.wB)(()=>this.layer,e=>{if(this.sublayers)for(let t of this.sublayers)t.layer=e},u.OH)])}initialize(){(0,u.C_)(()=>this.networkLink).then(()=>(0,u.C_)(()=>!0===this.visible)).then(()=>this.load())}load(e){if(!this.networkLink||this.networkLink.viewFormat)return;let t=null!=e?e.signal:null,r=this._fetchService(this._get("networkLink")?.href??"",t).then(e=>{let t=(0,A.Qm)(e.sublayers);this.fullExtent=b.A.fromJSON(t),this.sourceJSON=e;let r=(0,Z.dp)(i.A.ofType(l),(0,A.Jy)(l,e));this.sublayers?this.sublayers.addMany(r):this.sublayers=r,this.layer?.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(r),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}_fetchService(e,t){return(0,A.Ox)(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then(e=>(0,A._4)(e.data))}};(0,s._)([(0,p.MZ)()],L.prototype,"description",void 0),(0,s._)([(0,p.MZ)({type:b.A})],L.prototype,"fullExtent",void 0),(0,s._)([(0,p.MZ)()],L.prototype,"id",void 0),(0,s._)([(0,p.MZ)({readOnly:!0,value:null})],L.prototype,"networkLink",void 0),(0,s._)([(0,p.MZ)({json:{write:{allowNull:!0}}})],L.prototype,"parent",void 0),(0,s._)([(0,p.MZ)({type:i.A.ofType(L),json:{write:{allowNull:!0}}})],L.prototype,"sublayers",void 0),(0,s._)([(0,p.MZ)({value:null,json:{read:{source:"name",reader:e=>(0,E._e)(e)}}})],L.prototype,"title",void 0),(0,s._)([(0,p.MZ)({value:!0})],L.prototype,"visible",null),(0,s._)([(0,f.w)("visible",["visibility"])],L.prototype,"readVisible",null),(0,s._)([(0,p.MZ)()],L.prototype,"sourceJSON",void 0),(0,s._)([(0,p.MZ)()],L.prototype,"layer",void 0);let P=L=l=(0,s._)([(0,h.$)("esri.layers.support.KMLSublayer")],L),F=["kml","xml"],I=class extends(0,m.dM)((0,S.J)((0,w.j)((0,g.q)((0,_.A)((0,n.P)(c.A)))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new o.A({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=v.A.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([(0,u.wB)(()=>this.sublayers,(e,t)=>{t&&t.forEach(e=>{e.parent=null,e.layer=null}),e&&e.forEach(e=>{e.parent=this,e.layer=this})},u.OH),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return(0,A.Jy)(P,t,r,this._visibleFolders)}writeSublayers(e,t){let r=[],l=e.toArray();for(;l.length;){let e=l[0];e.networkLink||(e.visible&&r.push(e.id),e.sublayers&&l.push(...e.sublayers.toArray())),l.shift()}t.visibleFolders=r}get title(){let e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,y.e7)(this.url,F)||"KML":e}set title(e){this._set("title",e)}get visibleSublayers(){let e=this.sublayers,t=[],r=e=>{e.visible&&(t.push(e),e.sublayers&&e.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){let t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(a.QP).then(()=>this._fetchService(t))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){let t=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:(0,A.Ox)(this.url??"",this.outSpatialReference,this.refreshInterval,e)),r=(0,A._4)(t.data);this.read(r,{origin:"service"})}_recomputeFullExtent(){let e=null;null!=this.extent&&(e=this.extent.clone());let t=r=>{if(r.sublayers)for(let l of r.sublayers.items)t(l),l.visible&&l.fullExtent&&(null!=e?e.union(l.fullExtent):e=l.fullExtent.clone())};return t(this),e}};(0,s._)([(0,p.MZ)({readOnly:!0})],I.prototype,"allSublayers",void 0),(0,s._)([(0,p.MZ)({type:v.A})],I.prototype,"outSpatialReference",void 0),(0,s._)([(0,p.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],I.prototype,"path",void 0),(0,s._)([(0,p.MZ)({readOnly:!0,json:{read:!1,write:!1}})],I.prototype,"legendEnabled",void 0),(0,s._)([(0,p.MZ)({type:["show","hide","hide-children"]})],I.prototype,"listMode",void 0),(0,s._)([(0,p.MZ)({type:["KML"]})],I.prototype,"operationalLayerType",void 0),(0,s._)([(0,p.MZ)({})],I.prototype,"resourceInfo",void 0),(0,s._)([(0,p.MZ)({type:i.A.ofType(P),json:{write:{ignoreOrigin:!0}}})],I.prototype,"sublayers",void 0),(0,s._)([(0,f.w)(["web-map","portal-item"],"sublayers",["visibleFolders"])],I.prototype,"readSublayersFromItemOrWebMap",null),(0,s._)([(0,f.w)("service","sublayers",["sublayers"])],I.prototype,"readSublayers",null),(0,s._)([(0,d.K)("sublayers")],I.prototype,"writeSublayers",null),(0,s._)([(0,p.MZ)({readOnly:!0,json:{read:!1}})],I.prototype,"type",void 0),(0,s._)([(0,p.MZ)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],I.prototype,"title",null),(0,s._)([(0,p.MZ)(M.OZ)],I.prototype,"url",void 0),(0,s._)([(0,p.MZ)({readOnly:!0})],I.prototype,"visibleSublayers",null),(0,s._)([(0,p.MZ)({type:b.A})],I.prototype,"extent",void 0),(0,s._)([(0,p.MZ)()],I.prototype,"fullExtent",null);let G=I=(0,s._)([(0,h.$)("esri.layers.KMLLayer")],I)},67869:(e,t,r)=>{r.d(t,{Jy:()=>c,Ox:()=>v,Qm:()=>_,Sp:()=>g,_4:()=>b});var l=r(48767),s=r(57664),i=r(39267),o=r(39166),n=r(33715),a=r(90525),u=r(91463),y=r(42845),p=r(3708),f=r(73723),h=r(49570);let d={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function b(e){let t=e.folders||[],r=t.slice(),l=new Map,s=new Map,i=new Map,o=new Map,a=new Map,u={esriGeometryPoint:s,esriGeometryPolyline:i,esriGeometryPolygon:o};(e.featureCollection?.layers||[]).forEach(e=>{let t=(0,n.o8)(e);t.featureSet.features=[];let r=e.featureSet.geometryType;l.set(r,t);let a=e.layerDefinition.objectIdField;"esriGeometryPoint"===r?m(s,a,e.featureSet.features):"esriGeometryPolyline"===r?m(i,a,e.featureSet.features):"esriGeometryPolygon"===r&&m(o,a,e.featureSet.features)}),e.groundOverlays&&e.groundOverlays.forEach(e=>{a.set(e.id,e)}),t.forEach(t=>{t.networkLinkIds.forEach(l=>{let s=function(e,t,r){let l,s=(r.some(t=>t.id===e&&(l=t,!0)),l);return s&&(s.parentFolderId=t,s.networkLink=s),s}(l,t.id,e.networkLinks);s&&r.push(s)})}),r.forEach(e=>{if(e.featureInfos){for(let t of(e.points=(0,n.o8)(l.get("esriGeometryPoint")),e.polylines=(0,n.o8)(l.get("esriGeometryPolyline")),e.polygons=(0,n.o8)(l.get("esriGeometryPolygon")),e.mapImages=[],e.featureInfos))switch(t.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{let r=u[t.type].get(t.id);r&&e[d[t.type]]?.featureSet.features.push(r);break}case"GroundOverlay":{let r=a.get(t.id);r&&e.mapImages.push(r)}}e.fullExtent=_([e])}});let y=_(r);return{folders:t,sublayers:r,extent:y}}function v(e,t,r,i){let n=s.id?.findCredential(e);e=(0,a.a6)(e,{token:n?.token});let u=l.A.kmlServiceUrl;return(0,o.A)(u,{query:{url:e,model:"simple",folders:"",refresh:0!==r||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:i})}function c(e,t,r=null,l=[]){let s=[],i={},o=t.sublayers,n=new Set(t.folders.map(e=>e.id));return o.forEach(t=>{let o=new e;if(r?o.read(t,r):o.read(t),l.length&&n.has(o.id)&&(o.visible=l.includes(o.id)),i[t.id]=o,null!=t.parentFolderId&&-1!==t.parentFolderId){let e=i[t.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers?.unshift(o)}else s.unshift(o)}),s}function m(e,t,r){r.forEach(r=>{e.set(r.attributes[t],r)})}async function g(e){let t=h.A.fromJSON(e.featureSet).features,r=e.layerDefinition,l=(0,f.r)(r.drawingInfo.renderer),s=i.A.fromJSON(e.popupInfo),o=[];for(let e of t){let t=await l.getSymbolAsync(e);e.symbol=t,e.popupTemplate=s,e.visible=!0,o.push(e)}return o}function _(e){let t=(0,y.vt)(y.qv),r=(0,y.vt)(y.qv);for(let l of e){if(l.polygons?.featureSet?.features)for(let e of l.polygons.featureSet.features)(0,p.LJ)(t,e.geometry),(0,y.RF)(r,t);if(l.polylines?.featureSet?.features)for(let e of l.polylines.featureSet.features)(0,p.LJ)(t,e.geometry),(0,y.RF)(r,t);if(l.points?.featureSet?.features)for(let e of l.points.featureSet.features)(0,p.LJ)(t,e.geometry),(0,y.RF)(r,t);if(l.mapImages)for(let e of l.mapImages)(0,p.LJ)(t,e.extent),(0,y.RF)(r,t)}return(0,y.aI)(r,y.qv)?void 0:{xmin:r[0],ymin:r[1],zmin:r[2],xmax:r[3],ymax:r[4],zmax:r[5],spatialReference:u.A.WGS84}}}}]);