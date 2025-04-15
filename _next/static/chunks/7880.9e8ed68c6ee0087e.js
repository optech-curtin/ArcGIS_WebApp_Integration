"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7880],{37880:(e,t,i)=>{i.d(t,{default:()=>N});var o,n=i(81856);i(40970);var s=i(45714),r=i(91838);i(57845),i(61939),i(33638);var l=i(12709),a=i(52438),c=i(48796),d=i(23716),u=i(46595);i(41390);var h=i(47642),p=i(13215),v=i(69358),y=i(45257),m=i(1455),g=i(73225),w=i(30799);let _="esri-utility-network-association-list",f={featureObserver:`${_}__feature-observer`,filterContainer:`${_}__filter-container`,limitNoticeContainer:`${_}__limit-notice-container`,loadingContainer:`${_}__loading-container`},b=class extends m.A{constructor(e,t){super(e,t),this._isFeatureCountNoticeOpen=!0,this._observer=new IntersectionObserver(([e])=>{e?.isIntersecting&&this._increaseFeaturePage()},{root:window.document}),this._observerNode=null,this.featuresPerPage=50,this.filterText="",this.headingLevel=5,this.maxFeatureCount=1e3,this.messagesFeature=null,this.messagesCommon=null,this.selectedLayer=null,this.tooltipReferenceMap=new v.A,this.viewModel=new p.A}initialize(){this.setUpObserver()}loadDependencies(){return(0,d.W)({icon:()=>i.e(2461).then(i.bind(i,52461)),input:()=>Promise.all([i.e(5082),i.e(3245)]).then(i.bind(i,63245)),loader:()=>i.e(6343).then(i.bind(i,16343)),notice:()=>Promise.all([i.e(5082),i.e(702)]).then(i.bind(i,90702))})}destroy(){this.tooltipReferenceMap.clear()}get associatedFeatureCount(){let e=this.viewModel.associationViewModels,t=this.selectedLayer?e.get(this.selectedLayer):null;return t?t.length:0}set currentFeaturePage(e){let{featuresPerPage:t,associatedFeatureCount:i}=this,o=Math.max(Math.min(e,Math.ceil(i/t)||1),1);this._set("currentFeaturePage",o)}get currentFeaturePage(){return this._get("currentFeaturePage")??1}get endIndex(){let{currentFeaturePage:e,featuresPerPage:t,maxFeatureCount:i}=this;return Math.min(e*t,i)}renderConnectivityIcon(e,t){let i,{tooltipReferenceMap:o}=this;switch(e){case"junction-edge-from-connectivity":i="connection-end-left";break;case"junction-edge-to-connectivity":i="connection-end-right";break;case"junction-edge-midspan-connectivity":i="connection-middle";break;default:i="connection-to-connection"}return(0,h.K)("calcite-icon",{afterCreate:e=>o.set(t,e),afterRemoved:()=>o.delete(t),icon:i,scale:"s",slot:"content-start"})}renderFeatureCountWarning(){let{associatedFeatureCount:e,maxFeatureCount:t,messagesFeature:i}=this;return e>t?(0,h.K)("calcite-notice",{class:this._isFeatureCountNoticeOpen?f.limitNoticeContainer:void 0,closable:!0,icon:"information",kind:"info",open:!0,scale:"s",width:"full",onCalciteNoticeBeforeOpen:()=>this._isFeatureCountNoticeOpen=!0,onCalciteNoticeClose:()=>this._isFeatureCountNoticeOpen=!1},(0,h.K)("div",{slot:"title"},i.associationsLimitNoticeTitle),(0,h.K)("div",{slot:"message"},(0,w.V)(i.associationsLimitNoticeMessage,{number:t}))):null}renderFeatureObserver(){return(0,h.K)("div",{afterCreate:this._onObserverCreate,bind:this,class:f.featureObserver,key:"feature-observer"})}renderFilter(){return(0,h.K)("div",{class:f.filterContainer,key:"filter"},(0,h.K)("calcite-input",{icon:"search",placeholder:this.messagesFeature.associationFilterPlaceholder,type:"search",onCalciteInputInput:e=>{this.filterText=e.currentTarget.value.trim().toLowerCase(),this.currentFeaturePage=1}}))}renderLoading(){return(0,h.K)("div",{class:f.loadingContainer,key:"loading-container"},this.renderLoadingIcon())}renderLoadingIcon(){return(0,h.K)("calcite-loader",{inline:!0,label:this.messagesCommon.loading})}getConnectivityTooltip(e){let{messagesFeature:t}=this;switch(e){case"connectivity":case"junction-junction-connectivity":return t.associationsJunctionJunction;case"junction-edge-from-connectivity":return t.associationsJunctionEdgeFrom;case"junction-edge-midspan-connectivity":return t.associationsJunctionEdgeMidspan;case"junction-edge-to-connectivity":return t.associationsJunctionEdgeTo;default:return""}}setUpObserver(){this.addHandles((0,y.wB)(()=>this._observerNode,()=>this._onObserverChange()))}_increaseFeaturePage(){this.currentFeaturePage++}async _onObserverChange(){this._observerNode&&this._observer.unobserve(this._observerNode);let{state:e,showAllEnabled:t}=this.viewModel;this._observerNode&&"ready"===e&&t&&this._observer.observe(this._observerNode)}_onObserverCreate(e){this._observerNode=e}};(0,n._)([(0,r.MZ)()],b.prototype,"_observer",void 0),(0,n._)([(0,r.MZ)()],b.prototype,"_observerNode",void 0),(0,n._)([(0,r.MZ)()],b.prototype,"associatedFeatureCount",null),(0,n._)([(0,r.MZ)()],b.prototype,"currentFeaturePage",null),(0,n._)([(0,r.MZ)()],b.prototype,"endIndex",null),(0,n._)([(0,r.MZ)()],b.prototype,"featuresPerPage",void 0),(0,n._)([(0,r.MZ)()],b.prototype,"filterText",void 0),(0,n._)([(0,r.MZ)()],b.prototype,"headingLevel",void 0),(0,n._)([(0,r.MZ)()],b.prototype,"maxFeatureCount",void 0),(0,n._)([(0,r.MZ)(),(0,g.G)("esri/widgets/Feature/t9n/Feature")],b.prototype,"messagesFeature",void 0),(0,n._)([(0,r.MZ)(),(0,g.G)("esri/t9n/common")],b.prototype,"messagesCommon",void 0),(0,n._)([(0,r.MZ)()],b.prototype,"selectedLayer",void 0),(0,n._)([(0,r.MZ)()],b.prototype,"tooltipReferenceMap",void 0),(0,n._)([(0,r.MZ)({type:p.A})],b.prototype,"viewModel",void 0);let M=b=(0,n._)([(0,l.$)("esri.widgets.support.UtilityNetworkAssociations.UtilityNetworkAssociationList")],b);var F=i(71538);function C(e){let{percentAlong:t}=e;return null==t?"":(0,F.ZV)(t,{style:"percent",maximumFractionDigits:2})}function I(e){let{associationType:t}=e;return"connectivity"===t||"junction-junction-connectivity"===t||"junction-edge-from-connectivity"===t||"junction-edge-midspan-connectivity"===t||"junction-edge-to-connectivity"===t}let A="esri-feature-utility-network-associations",P={base:A,listItemHidden:`${A}__list-item--hidden`},L=o=class extends M{constructor(e,t){super(e,t),this.description=null,this.flowItems=null,this.flowType="feature-utility-network-association-type",this.listType=null,this.parentFeatureViewModel=null,this.title=null,this.viewModel=new p.A,this.visibleElements=new c.A}initialize(){this.setUpObserver()}loadDependencies(){return(0,d.W)({chip:()=>Promise.all([i.e(5082),i.e(8940)]).then(i.bind(i,78940)),icon:()=>i.e(2461).then(i.bind(i,52461)),list:()=>Promise.all([i.e(5082),i.e(3245),i.e(4493)]).then(i.bind(i,64493)),"list-item":()=>Promise.all([i.e(5082),i.e(356),i.e(8412),i.e(3684)]).then(i.bind(i,93684)),tooltip:()=>Promise.all([i.e(356),i.e(391)]).then(i.bind(i,10391))})}destroy(){this.tooltipReferenceMap.clear()}render(){let e=this.viewModel.associationViewModels,{state:t,showAllEnabled:i}=this.viewModel,{state:o}=this.parentFeatureViewModel??{};return(0,h.K)("div",{class:this.classes(P.base,u.D.widget)},"loading"===t||"querying"===t||"loading"===o?this.renderLoading():(0,h.K)("calcite-list",{displayMode:"nested",label:this.selectedLayer?.title??this.messagesCommon.untitled},i&&this.selectedLayer?(0,h.K)(h.w,null,this.renderFilter(),this.renderFeatureCountWarning(),this._renderAssociatedFeatureListPage(),this.renderFeatureObserver()):Array.from(e.keys(),t=>this._renderTypeList(t,e.get(t)))))}_showAllAssociations(e){let{flowItems:t,viewModel:i,description:n}=this;if(!t||!e)return;i.showAllEnabled=!0;let s=new o({selectedLayer:e,title:e?.title,flowItems:t,parentFeatureViewModel:this.parentFeatureViewModel,featureVisibleElements:this.featureVisibleElements,description:n,visibleElements:new c.A({title:!1,description:!1}),viewModel:i});t.push(s)}_renderAssociatedFeatureListPage(){let e=this.viewModel.associationViewModels.get(this.selectedLayer).filter(e=>(0,a.DQ)(e.featureViewModel).toLowerCase().includes(this.filterText)).slice(0,this.endIndex);return[...this._renderTooltips(e),...this._renderAssociatedFeatureList(e)]}_renderItemTooltip(e){let{tooltipReferenceMap:t}=this;return I(e.association)?(0,h.K)("calcite-tooltip",{key:`tooltip-${e.featureViewModel.uid}`,overlayPositioning:"fixed",referenceElement:t.get(e.featureViewModel.uid)},this.getConnectivityTooltip(e.association.associationType)):null}_renderAssociatedFeature(e){let{featureViewModel:t}=e,i=(0,a.DQ)(t),o="loading"===t.state,n=this._findFlowItem(t),r=n<0&&this._isParentFeature(t),l=r||n>=0;return(0,h.K)("calcite-list-item",{class:o?P.listItemHidden:void 0,description:(0,s._e)(e.terminalName??""),key:`associated-feature-type-${t.uid}`,label:(0,s._e)(i),onCalciteListItemSelect:()=>this._handleFeatureClick(r,n,t)},I(e.association)?this.renderConnectivityIcon(e.association.associationType,e.featureViewModel.uid):null,"junction-edge-midspan-connectivity"===e.association.associationType?(0,h.K)("calcite-chip",{label:C(e.association),scale:"s",slot:"content-end"},C(e.association)):null,this._renderChevronIconNode(l))}async _selectAssociation(e){let{flowItems:t,featureVisibleElements:o}=this;if(!t)return;e.abilities={utilityNetworkAssociationsContent:!0};let{default:n}=await Promise.resolve().then(i.bind(i,36018));t.push(new n({flowItems:t,flowType:"feature-association",viewModel:e,visibleElements:o}))}_handleFeatureClick(e,t,i){if(e)this.flowItems.drain(e=>{"showAllEnabled"in e.viewModel&&(e.viewModel.showAllEnabled=!1),e.viewModel=null,e.destroy()});else if(t<0||!this.flowItems)this._selectAssociation(i);else for(;this.flowItems.length>t+1;){let e=this.flowItems.pop();e&&("showAllEnabled"in e.viewModel&&(e.viewModel.showAllEnabled=!1),e.viewModel=null,e.destroy())}}_featureViewModelMatch(e,t){let i=e.graphic,o=i?.layer,n=null;"subtype-sublayer"===o?.type&&o.parent?n=o.parent.globalIdField??null:o&&"globalIdField"in o&&(n=o.globalIdField);let s=n?i?.attributes[n]:null,r=t.graphic,l=r?.layer,a=null;"subtype-sublayer"===l?.type&&l.parent?a=l.parent.globalIdField??null:l&&"globalIdField"in l&&(a=l.globalIdField);let c=a?r?.attributes[a]:null;return s&&c&&s===c}_isParentFeature(e){let t=this.flowItems?.getItemAt(0);if(!t)return!1;let i=t.parentFeatureViewModel;return this._featureViewModelMatch(i,e)}_findFlowItem(e){return this.flowItems?.findIndex(t=>{if("feature-association"!==t.flowType)return!1;let i=t.viewModel;return this._featureViewModelMatch(i,e)})??-1}_renderTooltips(e){return e.toArray().map(e=>this._renderItemTooltip(e))}_renderAssociatedFeatureList(e){return e.toArray().map(e=>this._renderAssociatedFeature(e))}_renderChevronIconNode(e){return(0,h.K)("calcite-icon",{flipRtl:!0,icon:e?"move-up":"chevron-right",scale:"s",slot:"content-end"})}_renderTypeList(e,t){let{messagesFeature:i}=this,{displayCount:o}=this.viewModel,n=t.slice(0,o),s=n.length<t.length;return(0,h.K)("calcite-list-item",{key:"show-all",label:e.title,open:!0,value:e.id},(0,h.K)("calcite-chip",{label:String(t.length),scale:"s",slot:"content-end"},t.length),(0,h.K)("calcite-list",{group:e.id,label:e.title??""},[this._renderTooltips(n),this._renderAssociatedFeatureList(n)],s?(0,h.K)("calcite-list-item",{description:(0,w.V)(i?.numberRecords,{number:t.length.toString()}),key:"show-all-item",label:i.showAll,onCalciteListItemSelect:()=>this._showAllAssociations(e)},(0,h.K)("calcite-icon",{icon:"list",scale:"s",slot:"content-end"})):null))}};(0,n._)([(0,r.MZ)()],L.prototype,"description",void 0),(0,n._)([(0,r.MZ)()],L.prototype,"featureVisibleElements",void 0),(0,n._)([(0,r.MZ)()],L.prototype,"flowItems",void 0),(0,n._)([(0,r.MZ)()],L.prototype,"flowType",void 0),(0,n._)([(0,r.MZ)()],L.prototype,"listType",void 0),(0,n._)([(0,r.MZ)()],L.prototype,"parentFeatureViewModel",void 0),(0,n._)([(0,r.MZ)()],L.prototype,"title",void 0),(0,n._)([(0,r.MZ)({type:p.A})],L.prototype,"viewModel",void 0),(0,n._)([(0,r.MZ)({type:c.A,nonNullable:!0})],L.prototype,"visibleElements",void 0);let N=L=o=(0,n._)([(0,l.$)("esri.widgets.Feature.FeatureUtilityNetworkAssociationList")],L)}}]);