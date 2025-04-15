"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1170],{1485:(e,t,r)=>{r.d(t,{z:()=>function e(t){let r={};for(let s in t){if("declaredClass"===s)continue;let a=t[s];if(null!=a&&"function"!=typeof a)if(Array.isArray(a)){r[s]=[];for(let t=0;t<a.length;t++)r[s][t]=e(a[t])}else"object"==typeof a?a.toJSON&&(r[s]=JSON.stringify(a)):r[s]=a}return r}})},21170:(e,t,r)=>{r.d(t,{e:()=>l,s:()=>o});var s=r(86277),a=r(79136),i=r(49570),n=r(86099);async function o(e,t,r){let s=await l(e,t,r);return i.A.fromJSON(s)}async function l(e,t,r){let i=(0,s.Dl)(e),o={...r},l=n.A.from(t),{data:u}=await (0,a.eW)(i,l,l.sourceSpatialReference,o);return u}},21893:(e,t,r)=>{r.d(t,{m:()=>a});var s=r(65642);function a(e,t){let r=(0,s.SH)(e,t),a=r.queryResult.featureResult,i=r.queryResult.queryGeometry,n=r.queryResult.queryGeometryType;if(a&&a.features&&a.features.length&&a.objectIdFieldName){let e=a.objectIdFieldName;for(let t of a.features)t.attributes&&(t.objectId=t.attributes[e])}return a&&(a.queryGeometry=i,a.queryGeometryType=n),a}},27151:(e,t,r)=>{r.d(t,{S:()=>u,z:()=>l});var s=r(8922),a=r(71760),i=r(82795),n=r(54805),o=r(56599);let l=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class u{constructor(e){this._options=e,this.geometryTypes=l,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new n.A}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(e){if(!e?.features||!e.hasZ||!this._options.sourceSpatialReference||!e.spatialReference||(0,a.aI)(e.spatialReference,this._options.sourceSpatialReference)||e.spatialReference.vcsWkid)return;let t=(0,s.G9)(this._options.sourceSpatialReference)/(0,s.G9)(e.spatialReference);if(1!==t)for(let r of e.features){if(!(0,i.N3)(r))continue;let e=r.geometry.coords;for(let r=2;r<e.length;r+=3)e[r]*=t}}addFeature(e,t){e.features.push(t)}createFeature(){return new i.Om(null,{},null,0)}createSpatialReference(){return{wkid:0}}createGeometry(){return new o.A}addField(e,t){e.fields.push(t)}allocateCoordinates(e){e.coords.length=e.lengths.reduce((e,t)=>e+t,0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,t){e.coords[this._coordinatePtr++]=t}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new o.A}}},36365:(e,t,r)=>{r.d(t,{A:()=>u});var s,a=r(57845),i=r(94264),n=r(98570);!function(e){e[e.varint=0]="varint",e[e.fixed64=1]="fixed64",e[e.delimited=2]="delimited",e[e.fixed32=5]="fixed32",e[e.unknown=99]="unknown"}(s||(s={}));let o=new TextDecoder("utf-8"),l=(0,a.A)("safari")||(0,a.A)("ios")?6:(0,a.A)("ff")?12:32;class u{constructor(e,t,r=0,a=e?e.byteLength:0){this._tag=0,this._dataType=s.unknown,this._init(e,t,r,a)}_init(e,t,r,s){this._data=e,this._dataView=t,this._pos=r,this._end=s}get usedMemory(){return 64+(0,i.Qf)(this._data)}asUnsafe(){return this}clone(){return new u(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(e){this._pos=e}nextTag(e){for(;;){if(this._pos===this._end)return!1;let t=this._decodeVarint();if(this._tag=t>>3,this._dataType=7&t,!e||e===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;let e=this._decodeVarint();return this._tag=e>>3,this._dataType=7&e,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let e=0xffffffff;if(e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128||(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128)||(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128)||(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128)||(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128))return e;throw Error("Varint overflow")}getUInt64(){return this._decodeVarint()}getSInt32(){let e=this.getUInt32();return e>>>1^-(1&e)}getSInt64(){return this._decodeSVarint()}getBool(){let e=0!==this._data[this._pos];return this._skip(1),e}getEnum(){return this._decodeVarint()}getFixed64(){let e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+0x100000000*e.getUint32(t+4,!0);return this._skip(8),r}getSFixed64(){let e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+0x100000000*e.getInt32(t+4,!0);return this._skip(8),r}getDouble(){let e=this._dataView.getFloat64(this._pos,!0);return this._skip(8),e}getFixed32(){let e=this._dataView.getUint32(this._pos,!0);return this._skip(4),e}getSFixed32(){let e=this._dataView.getInt32(this._pos,!0);return this._skip(4),e}getFloat(){let e=this._dataView.getFloat32(this._pos,!0);return this._skip(4),e}getString(){let e=this._getLength(),t=this._pos,r=this._toString(this._data,t,t+e);return this._skip(e),r}getBytes(){let e=this._getLength(),t=this._pos,r=this._toBytes(this._data,t,t+e);return this._skip(e),r}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(e,t,r,s){let a=this.getMessage(),i=e(a,t,r,s);return a.release(),i}processMessage(e){let t=this.getMessage(),r=e(t);return t.release(),r}getMessage(){let e=this._getLength(),t=u.pool.acquire();return t._init(this._data,this._dataView,this._pos,this._pos+e),this._skip(e),t}release(){u.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case s.varint:this._decodeVarint();break;case s.fixed64:this._skip(8);break;case s.delimited:this._skip(this._getLength());break;case s.fixed32:this._skip(4);break;default:throw Error("Invalid data type!")}}skipLen(e){this._skip(e)}_skip(e){if(this._pos+e>this._end)throw Error("Attempt to skip past the end of buffer!");this._pos+=e}_decodeVarint(){let e=this._data,t=this._pos,r=0,s=0;if(this._end-t>=10)do{if(r|=127&(s=e[t++]),!(128&s)||(r|=(127&(s=e[t++]))<<7,!(128&s))||(r|=(127&(s=e[t++]))<<14,!(128&s))||(r|=(127&(s=e[t++]))<<21,!(128&s))||(r+=0x10000000*(127&(s=e[t++])),!(128&s))||(r+=0x800000000*(127&(s=e[t++])),!(128&s))||(r+=0x40000000000*(127&(s=e[t++])),!(128&s))||(r+=0x2000000000000*(127&(s=e[t++])),!(128&s))||(r+=0x100000000000000*(127&(s=e[t++])),!(128&s))||(r+=0x8000000000000000*(127&(s=e[t++])),!(128&s)))break;throw Error("Varint too long!")}while(0);else{let a=1;for(;t!==this._end&&128&(s=e[t]);)++t,r+=(127&s)*a,a*=128;if(t===this._end)throw Error("Varint overrun!");++t,r+=s*a}return this._pos=t,r}_decodeSVarint(){let e=this._data,t,r=0,s=0,a=1&e[this._pos];if(r|=127&(s=e[this._pos++]),!(128&s)||(r|=(127&(s=e[this._pos++]))<<7,!(128&s))||(r|=(127&(s=e[this._pos++]))<<14,!(128&s))||(r|=(127&(s=e[this._pos++]))<<21,!(128&s))||(r+=0x10000000*(127&(s=e[this._pos++])),!(128&s))||(r+=0x800000000*(127&(s=e[this._pos++])),!(128&s))||(r+=0x40000000000*(127&(s=e[this._pos++])),!(128&s)))return a?-(r+1)/2:r/2;if(t=BigInt(r)+562949953421312n*BigInt(127&(s=e[this._pos++])),!(128&s)||(t+=0x100000000000000n*BigInt(127&(s=e[this._pos++])),!(128&s))||(t+=0x8000000000000000n*BigInt(127&(s=e[this._pos++])),!(128&s)))return Number(a?-(t+1n)/2n:t/2n);throw Error("Varint too long!")}_getLength(){if(this._dataType!==s.delimited)throw Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(e,t,r){if((r=Math.min(this._end,r))-t>l){let s=e.subarray(t,r);return o.decode(s)}let s="",a="";for(let i=t;i<r;++i){let t=e[i];128&t?a+="%"+t.toString(16):(s+=decodeURIComponent(a)+String.fromCharCode(t),a="")}return a.length&&(s+=decodeURIComponent(a)),s}_toBytes(e,t,r){return r=Math.min(this._end,r),new Uint8Array(e.buffer,t,r-t)}}u.pool=new n.A(u,void 0,e=>{e._data=null,e._dataView=null})},65642:(e,t,r)=>{r.d(t,{SH:()=>q,ae:()=>x,cn:()=>_});var s=r(32391),a=r(36365),i=r(56599),n=r(27151);let o=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML","esriFieldTypeBigInteger","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"],l=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],u=["upperLeft","lowerLeft"];function d(e){return e>=o.length?null:o[e]}function p(e){return e>=u.length?null:u[e]}function c(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function h(e,t,r){let s=e.asUnsafe(),a=t.createPointGeometry(r);for(;s.next();)if(3===s.tag()){let e=s.getUInt32(),r=s.pos()+e,i=0;for(;s.pos()<r;)t.addCoordinatePoint(a,s.getSInt64(),i++)}else s.skip();return a}function g(e,t,r){let s=e.asUnsafe(),a=t.createGeometry(r),i=2+ +!!r.hasZ+ +!!r.hasM;for(;s.next();)switch(s.tag()){case 2:{let e=s.getUInt32(),r=s.pos()+e,i=0;for(;s.pos()<r;)t.addLength(a,s.getUInt32(),i++);break}case 3:{let e=s.getUInt32(),r=s.pos()+e,n=0;for(t.allocateCoordinates(a);s.pos()<r;)t.addCoordinate(a,s.getSInt64(),n),++n===i&&(n=0);break}default:s.skip()}return a}function f(e){let t=e.asUnsafe(),r=new i.A,s="esriGeometryPoint";for(;t.next();)switch(t.tag()){case 2:{let e=t.getUInt32(),s=t.pos()+e;for(;t.pos()<s;)r.lengths.push(t.getUInt32());break}case 3:{let e=t.getUInt32(),s=t.pos()+e;for(;t.pos()<s;)r.coords.push(t.getSInt64());break}case 1:s=n.z[t.getEnum()];break;default:t.skip()}return{queryGeometry:r,queryGeometryType:s}}function y(e){let t=e.asUnsafe();for(;t.next();)switch(t.tag()){case 1:return t.getString();case 2:return t.getFloat();case 3:return t.getDouble();case 4:return t.getSInt32();case 5:return t.getUInt32();case 6:return t.getInt64();case 7:return t.getUInt64();case 8:return t.getSInt64();case 9:return t.getBool();default:return t.skip(),null}return null}function _(e){let t=e.asUnsafe(),r={type:d(0)};for(;t.next();)switch(t.tag()){case 1:r.name=t.getString();break;case 2:r.type=d(t.getEnum());break;case 3:r.alias=t.getString();break;case 4:var s;r.sqlType=(s=t.getEnum())>=l.length?null:l[s];break;case 5:default:t.skip();break;case 6:r.defaultValue=t.getString()}return r}function m(e){let t={},r=e.asUnsafe();for(;r.next();)switch(r.tag()){case 1:t.name=r.getString();break;case 2:t.isSystemMaintained=r.getBool();break;default:r.skip()}return t}function k(e,t,r,s){let a=t.createFeature(r),i=0;for(;e.next();)switch(e.tag()){case 1:{let t=s[i++].name;a.attributes[t]=e.processMessage(y);break}case 2:a.geometry=e.processMessageWithArgs(g,t,r);break;case 4:a.centroid=e.processMessageWithArgs(h,t,r);break;default:e.skip()}return a}function b(e){let t=[1,1,1,1],r=e.asUnsafe();for(;r.next();)switch(r.tag()){case 1:t[0]=r.getDouble();break;case 2:t[1]=r.getDouble();break;case 4:t[2]=r.getDouble();break;case 3:t[3]=r.getDouble();break;default:r.skip()}return t}function S(e){let t=[0,0,0,0],r=e.asUnsafe();for(;r.next();)switch(r.tag()){case 1:t[0]=r.getDouble();break;case 2:t[1]=r.getDouble();break;case 4:t[2]=r.getDouble();break;case 3:t[3]=r.getDouble();break;default:r.skip()}return t}function x(e){let t={originPosition:p(0)},r=e.asUnsafe();for(;r.next();)switch(r.tag()){case 1:t.originPosition=p(r.getEnum());break;case 2:t.scale=r.processMessage(b);break;case 3:t.translate=r.processMessage(S);break;default:r.skip()}return t}function T(e){let t={},r=e.asUnsafe();for(;r.next();)switch(r.tag()){case 1:t.shapeAreaFieldName=r.getString();break;case 2:t.shapeLengthFieldName=r.getString();break;case 3:t.units=r.getString();break;default:r.skip()}return t}function w(e,t){let r=t.createSpatialReference();for(;e.next();)switch(e.tag()){case 1:r.wkid=e.getUInt32();break;case 5:r.wkt=e.getString();break;case 2:r.latestWkid=e.getUInt32();break;case 3:r.vcsWkid=e.getUInt32();break;case 4:r.latestVcsWkid=e.getUInt32();break;default:e.skip()}return r}function F(e,t){let r=t.createFeatureResult(),s=e.asUnsafe();r.geometryType=c(t,0);let a=!1;for(;s.next();)switch(s.tag()){case 1:r.objectIdFieldName=s.getString();break;case 3:r.globalIdFieldName=s.getString();break;case 4:r.geohashFieldName=s.getString();break;case 5:r.geometryProperties=s.processMessage(T);break;case 7:r.geometryType=c(t,s.getEnum());break;case 8:r.spatialReference=s.processMessageWithArgs(w,t);break;case 10:r.hasZ=s.getBool();break;case 11:r.hasM=s.getBool();break;case 12:r.transform=s.processMessage(x);break;case 9:r.exceededTransferLimit=s.getBool();break;case 13:t.addField(r,s.processMessage(_));break;case 15:a||(t.prepareFeatures(r),a=!0),t.addFeature(r,s.processMessageWithArgs(k,t,r,r.fields));break;case 2:r.uniqueIdField=s.processMessage(m);break;default:s.skip()}return t.finishFeatureResult(r),r}function I(e,t){let r={},s=null;for(;e.next();)switch(e.tag()){case 4:s=e.processMessageWithArgs(f);break;case 1:r.featureResult=e.processMessageWithArgs(F,t);break;default:e.skip()}return null!=s&&r.featureResult&&t.addQueryGeometry(r,s),r}function q(e,t){try{let r=new a.A(new Uint8Array(e),new DataView(e)),s={};for(;r.next();)2===r.tag()?s.queryResult=r.processMessageWithArgs(I,t):r.skip();return s}catch(e){throw new s.A("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e})}}},79136:(e,t,r)=>{r.d(t,{IJ:()=>c,Jf:()=>y,Pk:()=>g,eW:()=>p,gW:()=>f,kS:()=>h});var s=r(39166),a=r(90525),i=r(31789),n=r(25606),o=r(71760),l=r(1485),u=r(21893),d=r(9723);async function p(e,t,r,s){let a=null!=t.timeExtent&&t.timeExtent.isEmpty?{data:{features:[]}}:await _(e,t,"json",s);return(0,d.q)(t,r,a.data),a}async function c(e,t,r,s){if(null!=t.timeExtent&&t.timeExtent.isEmpty)return{data:r.createFeatureResult()};let a=await h(e,t,s);return a.data=(0,u.m)(a.data,r),a}function h(e,t,r){return _(e,t,"pbf",r)}function g(e,t,r){return null!=t.timeExtent&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):_(e,t,"json",r,{returnIdsOnly:!0})}function f(e,t,r){return null!=t.timeExtent&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):_(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}async function y(e,t,r){if(null!=t.timeExtent&&t.timeExtent.isEmpty)return{data:{count:0,extent:null}};let s=await _(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}),a=s.data;if(a.hasOwnProperty("extent"))return s;if(a.features||a.hasOwnProperty("count"))throw Error("Layer does not support extent calculation.");return s}async function _(e,t,r,u={},d={}){var p,c;let h="string"==typeof e?(0,a.An)(e):e,g=t.geometry?[t.geometry]:[],f=await (0,n.el)(g,null,{signal:u.signal}),y=f?.[0];null!=y&&((t=t.clone()).geometry=y);let m=(0,l.z)({...h.query,f:r,...d,...function(e,t){let r,s,a,n=e.geometry,l=e.toJSON();if(delete l.compactGeometryEnabled,delete l.defaultSpatialReferenceEnabled,null!=n&&(s=n.spatialReference,a=(0,o.YX)(s),l.geometryType=(0,i.$B)(n),l.geometry=function(e,t){if(t&&"extent"===e.type)return`${e.xmin},${e.ymin},${e.xmax},${e.ymax}`;if(t&&"point"===e.type)return`${e.x},${e.y}`;let r=e.toJSON();return delete r.spatialReference,JSON.stringify(r)}(n,e.compactGeometryEnabled),l.inSR=a),l.groupByFieldsForStatistics&&(l.groupByFieldsForStatistics=l.groupByFieldsForStatistics.join(",")),l.objectIds&&(l.objectIds=l.objectIds.join(",")),l.orderByFields&&(l.orderByFields=l.orderByFields.join(",")),!l.outFields||!l.returnDistinctValues&&(t?.returnCountOnly||t?.returnExtentOnly||t?.returnIdsOnly)?delete l.outFields:l.outFields.includes("*")?l.outFields="*":l.outFields=l.outFields.join(","),l.outSR?(l.outSR=(0,o.YX)(l.outSR),r=e.outSpatialReference):n&&(l.returnGeometry||l.returnCentroid)&&(l.outSR=l.inSR,r=s),l.returnGeometry&&delete l.returnGeometry,l.outStatistics&&(l.outStatistics=JSON.stringify(l.outStatistics)),l.fullText&&(l.fullText=JSON.stringify(l.fullText)),l.pixelSize&&(l.pixelSize=JSON.stringify(l.pixelSize)),l.quantizationParameters&&(e.defaultSpatialReferenceEnabled&&null!=s&&null!=e.quantizationParameters?.extent&&s.equals(e.quantizationParameters.extent.spatialReference)&&delete l.quantizationParameters.extent.spatialReference,l.quantizationParameters=JSON.stringify(l.quantizationParameters)),l.parameterValues&&(l.parameterValues=JSON.stringify(l.parameterValues)),l.rangeValues&&(l.rangeValues=JSON.stringify(l.rangeValues)),l.dynamicDataSource&&(l.layer=JSON.stringify({source:l.dynamicDataSource}),delete l.dynamicDataSource),l.timeExtent){let{start:e,end:t}=l.timeExtent;null==e&&null==t||(l.time=e===t?e:`${e??"null"},${t??"null"}`),delete l.timeExtent}return e.defaultSpatialReferenceEnabled&&null!=s&&null!=r&&s.equals(r)&&(l.defaultSR=l.inSR,delete l.inSR,delete l.outSR),l}(t,d)});return(0,s.A)((0,a.fj)(h.path,(p=t,c=d,null==p.formatOf3DObjects||c.returnCountOnly||c.returnExtentOnly||c.returnIdsOnly)?"query":"query3d"),{...u,responseType:"pbf"===r?"array-buffer":"json",query:{...m,...u.query}})}}}]);