"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4331],{33031:(e,t,i)=>{i.d(t,{C:()=>n});let n={container:"container",containerNone:"container--none-selection",icon:"dropdown-item-icon",iconEnd:"dropdown-item-icon--end",iconStart:"dropdown-item-icon--start",itemContent:"dropdown-item-content",link:"dropdown-link"}},93334:(e,t,i)=>{i.d(t,{I:()=>p,u:()=>d});var n=i(77508),o=i(8781);function c(){let{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function l(e){e.target.disabled&&e.preventDefault()}let a=["mousedown","mouseup","click"];function s(e){e.target.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}let r={capture:!0};function d(e){var t,i,n,o;if(e.disabled){e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),(t=e).el.click=c,(i=t.el).addEventListener("pointerdown",l,r),a.forEach(e=>i.addEventListener(e,s,r));return}n=e,delete n.el.click,(o=n.el).removeEventListener("pointerdown",l,r),a.forEach(e=>o.removeEventListener(e,s,r)),e.el.removeAttribute("aria-disabled")}let h={container:"interaction-container"},p=({children:e,disabled:t})=>(0,n.qy)`<div class=${(0,o.CP)(h.container)} .inert=${t}>${e}</div>`},94331:(e,t,i)=>{i.r(t),i.d(t,{DropdownItem:()=>u}),i(52461);var n=i(61830),o=i(77508),c=i(18753),l=i(8781),a=i(61790),s=i(16430),r=i(77145),d=i(93334),h=i(33031),p=i(41270);let m=(0,p.AH)`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;flex-grow:1;align-items:center;outline-color:transparent}.container{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;text-align:start;outline-color:transparent}.container a{outline:none;position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none}.dropdown-item-content{flex:1 1 auto;padding-block:.125rem}.dropdown-item-icon{position:relative;opacity:0;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);transform:scale(.9)}:host([scale=s]) .container{padding-block:.25rem;padding-inline:.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .dropdown-item-icon,:host([scale=s]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-sm)}:host([scale=s]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-sm)}:host([scale=m]) .container{padding-block:.5rem;padding-inline:.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .dropdown-item-icon,:host([scale=m]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-md)}:host([scale=m]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-md)}:host([scale=l]) .container{padding-block:.625rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .dropdown-item-icon,:host([scale=l]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-lg)}:host([scale=l]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-lg)}:host(:focus) .container{color:var(--calcite-color-text-1);text-decoration-line:none;outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host(:hover:not([disabled])) .container,:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1);text-decoration-line:none}:host(:hover:not([disabled])) .dropdown-link,:host(:active:not([disabled])) .dropdown-link{color:var(--calcite-color-text-1)}:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-3)}:host([selected]) .container:not(.container--none-selection),:host([selected]) .dropdown-link{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}:host([selected]) .container:not(.container--none-selection) calcite-icon,:host([selected]) .dropdown-link calcite-icon{color:var(--calcite-color-brand)}:host(:hover:not([disabled])) .dropdown-item-icon{color:var(--calcite-color-border-1);opacity:1}:host([selected]) .dropdown-item-icon{color:var(--calcite-color-brand);opacity:1}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`;class u extends l.WF{constructor(){super(),this.childLink=(0,c._)(),this.disabled=!1,this.scale="m",this.selected=!1,this.selectionMode="single",this.calciteDropdownItemSelect=(0,l.lh)({cancelable:!1}),this.calciteInternalDropdownCloseRequest=(0,l.lh)({cancelable:!1}),this.calciteInternalDropdownItemKeyEvent=(0,l.lh)({cancelable:!1}),this.calciteInternalDropdownItemSelect=(0,l.lh)({cancelable:!1}),this.listen("click",this.onClick),this.listen("keydown",this.keyDownHandler),this.listenOn(document.body,"calciteInternalDropdownItemChange",this.updateActiveItemOnChange)}static{this.properties={disabled:7,href:3,iconEnd:3,iconFlipRtl:3,iconStart:3,label:1,rel:3,scale:3,selected:7,selectionMode:1,target:3}}static{this.styles=m}async setFocus(){await (0,s.c)(this),this.el?.focus()}connectedCallback(){super.connectedCallback(),this.initialize()}load(){this.initialize()}updated(){(0,d.u)(this)}loaded(){}onClick(){this.emitRequestedItem()}keyDownHandler(e){switch(e.key){case" ":case"Enter":this.emitRequestedItem(),this.href&&this.childLink.value.click(),e.preventDefault();break;case"Escape":this.calciteInternalDropdownCloseRequest.emit(),e.preventDefault();break;case"Tab":this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:e});break;case"ArrowUp":case"ArrowDown":case"Home":case"End":e.preventDefault(),this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:e})}}updateActiveItemOnChange(e){e.composedPath().includes(this.parentDropdownGroupEl)&&(this.requestedDropdownGroup=e.detail.requestedDropdownGroup,this.requestedDropdownItem=e.detail.requestedDropdownItem,this.determineActiveItem()),e.stopPropagation()}initialize(){this.parentDropdownGroupEl=this.el.closest("calcite-dropdown-group"),"none"===this.selectionMode&&(this.selected=!1)}determineActiveItem(){switch(this.selectionMode){case"multiple":this.el===this.requestedDropdownItem&&(this.selected=!this.selected);break;case"single":this.el===this.requestedDropdownItem?this.selected=!0:this.requestedDropdownGroup===this.parentDropdownGroupEl&&(this.selected=!1);break;case"none":this.selected=!1}}emitRequestedItem(){this.calciteDropdownItemSelect.emit(),this.calciteInternalDropdownItemSelect.emit({requestedDropdownItem:this.el,requestedDropdownGroup:this.parentDropdownGroupEl})}render(){let{href:e,selectionMode:t,label:i,iconFlipRtl:n}=this,s=(0,o.qy)`<calcite-icon class=${(0,l.CP)(h.C.iconStart)} .flipRtl=${"start"===n||"both"===n} .icon=${this.iconStart} .scale=${(0,r.g)(this.scale)}></calcite-icon>`,p=(0,o.qy)`<span class=${(0,l.CP)(h.C.itemContent)}><slot></slot></span>`,m=(0,o.qy)`<calcite-icon class=${(0,l.CP)(h.C.iconEnd)} .flipRtl=${"end"===n||"both"===n} .icon=${this.iconEnd} .scale=${(0,r.g)(this.scale)}></calcite-icon>`,u=this.iconStart&&this.iconEnd?[s,p,m]:this.iconStart?[s,p]:this.iconEnd?[p,m]:p,v=e?(0,o.qy)`<a .ariaLabel=${i} class=${(0,l.CP)(h.C.link)} href=${e??l.s6} rel=${this.rel??l.s6} tabindex=-1 target=${this.target??l.s6} ${(0,c.K)(this.childLink)}>${u}</a>`:u,b="none"!==t?(0,a.t)(this.selected):null,{disabled:w}=this;return this.el.ariaChecked=b,this.el.ariaLabel=e?"":i,this.el.role=e?null:"single"===t?"menuitemradio":"multiple"===t?"menuitemcheckbox":"menuitem",(0,l.Bq)(this.el,"tabIndex",w?-1:0),(0,d.I)({disabled:w,children:(0,o.qy)`<div class=${(0,l.CP)({[h.C.container]:!0,[h.C.containerNone]:"none"===t})}>${"none"!==t?(0,o.qy)`<calcite-icon class=${(0,l.CP)(h.C.icon)} .icon=${"multiple"===t?"check":"bullet-point"} .scale=${(0,r.g)(this.scale)}></calcite-icon>`:null}${v}</div>`})}}(0,n.c)("calcite-dropdown-item",u)}}]);