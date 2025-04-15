"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3323,8348],{23323:(e,t,r)=>{r.r(t),r.d(t,{default:()=>R});var i,o,s=r(81856),n=r(30781),l=r(92713),u=r(33715),p=r(91838),a=r(86942),d=r(12709),y=r(7780),c=r(91463),h=r(31789),m=r(59879);r(57845),r(61939),r(33638);let F=i=class extends l.A{constructor(e){super(e),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new i({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};(0,s._)([(0,p.MZ)({type:[String],json:{write:!0}})],F.prototype,"groupByFields",void 0),(0,s._)([(0,p.MZ)({type:Number,json:{write:!0}})],F.prototype,"topCount",void 0),(0,s._)([(0,p.MZ)({type:[String],json:{write:!0}})],F.prototype,"orderByFields",void 0);let v=F=i=(0,s._)([(0,d.$)("esri.rest.support.TopFilter")],F);var w=r(47840);let S=new n.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),j=new n.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),f=o=class extends l.A{constructor(e){super(e),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10}clone(){return new o((0,u.o8)({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};(0,s._)([(0,p.MZ)({type:Boolean,json:{write:!0}})],f.prototype,"cacheHint",void 0),(0,s._)([(0,p.MZ)({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],f.prototype,"distance",void 0),(0,s._)([(0,p.MZ)({types:m.yR,json:{read:h.rS,write:!0}})],f.prototype,"geometry",void 0),(0,s._)([(0,p.MZ)({type:Number,json:{write:!0}})],f.prototype,"geometryPrecision",void 0),(0,s._)([(0,p.MZ)({type:Number,json:{write:!0}})],f.prototype,"maxAllowableOffset",void 0),(0,s._)([(0,p.MZ)({type:Number,json:{read:{source:"resultRecordCount"}}})],f.prototype,"num",void 0),(0,s._)([(0,p.MZ)({json:{write:!0}})],f.prototype,"objectIds",void 0),(0,s._)([(0,p.MZ)({type:[String],json:{write:!0}})],f.prototype,"orderByFields",void 0),(0,s._)([(0,p.MZ)({type:[String],json:{write:!0}})],f.prototype,"outFields",void 0),(0,s._)([(0,p.MZ)({type:c.A,json:{read:{source:"outSR"},write:{target:"outSR"}}})],f.prototype,"outSpatialReference",void 0),(0,s._)([(0,p.MZ)({type:String,json:{write:!0}})],f.prototype,"resultType",void 0),(0,s._)([(0,p.MZ)({json:{write:!0}})],f.prototype,"returnGeometry",void 0),(0,s._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],f.prototype,"returnM",void 0),(0,s._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],f.prototype,"returnZ",void 0),(0,s._)([(0,p.MZ)({type:Number,json:{read:{source:"resultOffset"}}})],f.prototype,"start",void 0),(0,s._)([(0,y.K)("start"),(0,y.K)("num")],f.prototype,"writeStart",null),(0,s._)([(0,p.MZ)({type:String,json:{read:{source:"spatialRel",reader:S.read},write:{target:"spatialRel",writer:S.write}}})],f.prototype,"spatialRelationship",void 0),(0,s._)([(0,p.MZ)({type:w.A,json:{write:!0}})],f.prototype,"timeExtent",void 0),(0,s._)([(0,p.MZ)({type:v,json:{write:!0}})],f.prototype,"topFilter",void 0),(0,s._)([(0,p.MZ)({type:String,json:{read:j.read,write:{writer:j.write,overridePolicy(e){return{enabled:null!=e&&null!=this.distance}}}}})],f.prototype,"units",void 0),(0,s._)([(0,p.MZ)({type:String,json:{write:!0}})],f.prototype,"where",void 0),(f=o=(0,s._)([(0,d.$)("esri.rest.support.TopFeaturesQuery")],f)).from=(0,a.dp)(f);let R=f},25096:(e,t,r)=>{r.d(t,{$K:()=>y,KW:()=>d,Yb:()=>a,xs:()=>c});var i=r(39166),o=r(90525),s=r(31789),n=r(25606),l=r(71760),u=r(1485),p=r(9723);async function a(e,t,r,i){let o=await h(e,t,"json",i);return(0,p.q)(t,r,o.data),o}async function d(e,t,r){return null!=t.timeExtent&&t.timeExtent.isEmpty?{data:{objectIds:[]}}:h(e,t,"json",r,{returnIdsOnly:!0})}async function y(e,t,r){return null!=t.timeExtent&&t.timeExtent.isEmpty?{data:{count:0,extent:null}}:h(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(e=>{let t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features||t.hasOwnProperty("count"))throw Error("Layer does not support extent calculation.");return e})}function c(e,t,r){return null!=t.timeExtent&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):h(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function h(e,t,r,p={},a={}){let d="string"==typeof e?(0,o.An)(e):e,y=t.geometry?[t.geometry]:[];return p.responseType="json",(0,n.el)(y,null,p).then(e=>{let n=e?.[0];null!=n&&((t=t.clone()).geometry=n);let y=(0,u.z)({...d.query,f:r,...a,...function(e,t){let r=e.geometry,i=e.toJSON();if(null!=r&&(i.geometry=JSON.stringify(r),i.geometryType=(0,s.$B)(r),i.inSR=(0,l.YX)(r.spatialReference)),i.topFilter?.groupByFields&&(i.topFilter.groupByFields=i.topFilter.groupByFields.join(",")),i.topFilter?.orderByFields&&(i.topFilter.orderByFields=i.topFilter.orderByFields.join(",")),i.topFilter&&(i.topFilter=JSON.stringify(i.topFilter)),i.objectIds&&(i.objectIds=i.objectIds.join(",")),i.orderByFields&&(i.orderByFields=i.orderByFields.join(",")),i.outFields&&!(t?.returnCountOnly||t?.returnExtentOnly||t?.returnIdsOnly)?i.outFields.includes("*")?i.outFields="*":i.outFields=i.outFields.join(","):delete i.outFields,i.outSR?i.outSR=(0,l.YX)(i.outSR):r&&i.returnGeometry&&(i.outSR=i.inSR),i.returnGeometry&&delete i.returnGeometry,i.timeExtent){let{start:e,end:t}=i.timeExtent;null==e&&null==t||(i.time=e===t?e:`${e??"null"},${t??"null"}`),delete i.timeExtent}return i}(t,a)});return(0,i.A)((0,o.fj)(d.path,"queryTopFeatures"),{...p,query:{...y,...p.query}})})}},98348:(e,t,r)=>{r.r(t),r.d(t,{executeTopFeaturesQuery:()=>l});var i=r(86277),o=r(25096),s=r(49570),n=r(23323);async function l(e,t,r,l){let u=(0,i.Dl)(e),p={...l},{data:a}=await (0,o.Yb)(u,n.default.from(t),r,p);return s.A.fromJSON(a)}}}]);