"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1882,4287],{1882:(e,t,n)=>{n.r(t),n.d(t,{executeScript:()=>em,extend:()=>eg,functionHelper:()=>ey});var r=n(5615),a=n(18330),i=n(28029),o=n(23554),l=n(12894),u=n(30626),c=n(9868),s=n(52373),f=n(45891),d=n(30712),w=n(32805),p=n(63452),h=n(43422),y=n(54287),g=n(37380),m=n(58407),S=n(4631),D=n(41298),v=n(88070),b=n(91463),A=n(48271);async function X(e,t){let n=[];for(let r=0;r<t.arguments.length;r++)n.push(await I(e,t.arguments[r]));return n}async function T(e,t,n){return!0===t.preparsed?n(e,null,t.arguments):n(e,t,await X(e,t))}class $ extends s.fF{constructor(e,t){super(),this.definition=null,this.context=null,this.definition=e,this.context=t}createFunction(e){return(...t)=>{let n={spatialReference:this.context.spatialReference,console:this.context.console,lrucache:this.context.lrucache,timeZone:this.context.timeZone??null,exports:this.context.exports,libraryResolver:this.context.libraryResolver,interceptor:this.context.interceptor,localScope:{},depthCounter:{depth:e.depthCounter+1},globalScope:this.context.globalScope};if(n.depthCounter.depth>64)throw new u.D$(e,u.TX.MaximumCallDepth,null);return ef(this.definition,n,t,null)}}call(e,t){return O(e,t,(n,r,a)=>{let i={spatialReference:e.spatialReference,services:e.services,console:e.console,libraryResolver:e.libraryResolver,exports:e.exports,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:{depth:e.depthCounter.depth+1}};if(i.depthCounter.depth>64)throw new u.D$(e,u.TX.MaximumCallDepth,t);return ef(this.definition,i,a,t)})}marshalledCall(e,t,n,r){return r(e,t,async(a,i,o)=>{let l={spatialReference:e.spatialReference,globalScope:n.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,abortSignal:e.abortSignal,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{}};return o=o.map(t=>!(0,f.i)(t)||t instanceof s.CU?t:(0,s.o6)(t,e,r)),(0,s.o6)(await ef(this.definition,l,o,t),n,r)})}}class N extends a.x{constructor(e){super(),this.source=e}global(e){let t=this.executingContext.globalScope[(0,r.X)(e)];if((0,f.i)(t.value)&&!(t.value instanceof s.CU)){let e=new s.CU;e.fn=t.value,e.parameterEvaluator=O,e.context=this.executingContext,t.value=e}return t.value}setGlobal(e,t){if((0,f.i)(t))throw new u.D$(null,u.TX.AssignModuleFunction,null);this.executingContext.globalScope[(0,r.X)(e)]={value:t}}hasGlobal(e){return void 0===this.executingContext.exports[e]&&(e=(0,r.X)(e)),void 0!==this.executingContext.exports[e]}async loadModule(e){let t=e.spatialReference;null==t&&(t=new b.A({wkid:102100})),this.moduleScope=ep({},e.customfunctions,e.timeZone),this.executingContext={spatialReference:t,services:e.services,libraryResolver:new i.a(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:void 0===e.abortSignal||null===e.abortSignal?{aborted:!1}:e.abortSignal,globalScope:this.moduleScope,console:e.console??eh,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},await G(this.executingContext,this.source.syntax)}}async function O(e,t,n){return!0===t.preparsed?n(e,null,t.arguments):n(e,t,await X(e,t))}async function I(e,t){t.breakpoint&&await t.breakpoint();try{switch(t.type){case"UpdateExpression":return await B(e,t);case"AssignmentExpression":return await Z(e,t);case"TemplateLiteral":return await el(e,t);case"Identifier":return ei(e,t);case"MemberExpression":return await ee(e,t);case"Literal":return t.value;case"CallExpression":return await eo(e,t);case"UnaryExpression":return await et(e,t);case"BinaryExpression":return await er(e,t);case"LogicalExpression":return await ea(e,t);case"ArrayExpression":return await en(e,t);case"ObjectExpression":return await F(e,t);default:throw new u.D$(e,u.TX.Unrecognized,t)}}catch(n){throw(0,u.Nh)(e,t,n)}}async function x(e,t){t.breakpoint&&await t.breakpoint();try{switch(t.type){case"ImportDeclaration":return await V(e,t);case"ExportNamedDeclaration":return await W(e,t);case"VariableDeclaration":return await H(e,t,0);case"BlockStatement":return await G(e,t);case"FunctionDeclaration":return await z(e,t);case"ReturnStatement":return await _(e,t);case"IfStatement":return await j(e,t);case"ExpressionStatement":return await q(e,t);case"ForStatement":return await E(e,t);case"WhileStatement":return await C(e,t);case"ForInStatement":return await L(e,t);case"ForOfStatement":return await K(e,t);case"BreakStatement":return f.x;case"EmptyStatement":return f.w;case"ContinueStatement":return f.y;default:throw new u.D$(e,u.TX.Unrecognized,t)}}catch(n){throw(0,u.Nh)(e,t,n)}}async function F(e,t){let n=[];for(let r=0;r<t.properties.length;r++){let a=t.properties[r],i=await I(e,a.value),o="Identifier"===a.key.type?a.key.name:await I(e,a.key);n[r]={key:o,value:i}}let r={},a=new Map;for(let i=0;i<n.length;i++){let o=n[i];if((0,f.i)(o.value))throw new u.D$(e,u.TX.NoFunctionInDictionary,t);if(!1===(0,A.Kg)(o.key))throw new u.D$(e,u.TX.KeyMustBeString,t);let l=o.key.toString(),c=l.toLowerCase();a.has(c)?l=a.get(c):a.set(c,l),o.value===f.w?r[l]=null:r[l]=o.value}let i=new l.A(r);return i.immutable=!1,i}async function C(e,t){let n=await I(e,t.test);if(!1===n)return f.w;if(!0!==n)throw new u.D$(e,u.TX.BooleanConditionRequired,t);for(;!0===n;){let r=await x(e,t.body);if(r===f.x)break;if(r instanceof f.R)return r;if(!0!==(n=await I(e,t.test))&&!1!==n)throw new u.D$(e,u.TX.BooleanConditionRequired,t)}return f.w}async function E(e,t){try{for(null!==t.init&&("VariableDeclaration"===t.init.type?await x(e,t.init):await I(e,t.init));;){if(null!==t.test){let n=await I(e,t.test);if(!0===e.abortSignal?.aborted)throw new u.D$(e,u.TX.Cancelled,t);if(!1===n)break;if(!0!==n)throw new u.D$(e,u.TX.BooleanConditionRequired,t)}let n=await x(e,t.body);if(n===f.x)break;if(n instanceof f.R)return n;null!==t.update&&await I(e,t.update)}return f.w}catch(e){throw e}}async function R(e,t,n,r,a="i"){let i=n.length;for(let o=0;o<i;o++){if("k"===a){if(o>=n.length)throw new u.D$(e,u.TX.OutOfBounds,t);r.value=n[o]}else r.value=o;let i=await x(e,t.body);if(i===f.x)break;if(i instanceof f.R)return i}return f.w}async function J(e,t,n,r,a="i"){let i=n.length();for(let o=0;o<i;o++){r.value="k"===a?n.get(o):o;let i=await x(e,t.body);if(i===f.x)break;if(i instanceof f.R)return i}return f.w}async function P(e,t,n,r){let a,i=n.iterator(e.abortSignal);for(;null!=(a=await i.next());){let i=c.A.createFromGraphicLikeObject(a.geometry,a.attributes,n,e.timeZone);i._underlyingGraphic=a,r.value=i;let o=await x(e,t.body);if(o===f.x)break;if(o instanceof f.R)return o}return f.w}async function k(e,t,n,r){for(let a of n.keys()){let i=n.field(a);r.value=new l.A({key:a,value:i});let o=await x(e,t.body);if(o===f.x)break;if(o instanceof f.R)return o}return f.w}async function M(e,t,n,r){for(let a of(0,o.T)(n)){let i=(0,o.Bl)(n,a,e,t,1);r.value=new l.A({key:a,value:i});let u=await x(e,t.body);if(u===f.x)break;if(u instanceof f.R)return u}return f.w}async function L(e,t){let n=await I(e,t.right);"VariableDeclaration"===t.left.type&&await x(e,t.left);let a=(0,r.X)("VariableDeclaration"===t.left.type?t.left.declarations[0].id:t.left),i=null;if(null!=e.localScope&&void 0!==e.localScope[a]&&(i=e.localScope[a]),null===i&&void 0!==e.globalScope[a]&&(i=e.globalScope[a]),null===i)throw new u.D$(e,u.TX.InvalidIdentifier,t);return(0,A.cy)(n)||(0,A.Kg)(n)?await R(e,t,n,i):(0,f.m)(n)?await J(e,t,n,i):n instanceof l.A||(0,f.z)(n)?await R(e,t,n.keys(),i,"k"):(0,f.p)(n)?await P(e,t,n,i):(0,f.l)(n)?await R(e,t,(0,o.T)(n),i,"k"):f.w}async function K(e,t){let n=await I(e,t.right);"VariableDeclaration"===t.left.type&&await x(e,t.left);let a=(0,r.X)("VariableDeclaration"===t.left.type?t.left.declarations[0].id:t.left),i=null;if(null!=e.localScope&&void 0!==e.localScope[a]&&(i=e.localScope[a]),null===i&&void 0!==e.globalScope[a]&&(i=e.globalScope[a]),null===i)throw new u.D$(e,u.TX.InvalidIdentifier,t);return(0,A.cy)(n)||(0,A.Kg)(n)?await R(e,t,n,i,"k"):(0,f.m)(n)?await J(e,t,n,i,"k"):n instanceof l.A||(0,f.z)(n)?await k(e,t,n,i):(0,f.p)(n)?await P(e,t,n,i):(0,f.l)(n)?await M(e,t,n,i):f.w}async function B(e,t){let n,a=t.argument;if("CallExpression"===a.type)throw new u.D$(e,u.TX.NeverReach,t);if("MemberExpression"===a.type){let n,r,i=await I(e,a.object);if(!0===a.computed)n=await I(e,a.property);else{if("Identifier"!==a.property.type)throw new u.D$(e,u.TX.Unrecognized,t);n=a.property.name}if((0,A.cy)(i)){if(!(0,A.Et)(n))throw new u.D$(e,u.TX.ArrayAccessorMustBeNumber,t);if(n<0&&(n=i.length+n),n<0||n>=i.length)throw new u.D$(e,u.TX.OutOfBounds,t);r=(0,f.t)(i[n]),i[n]="++"===t.operator?r+1:r-1}else if(i instanceof l.A){if(!1===(0,A.Kg)(n))throw new u.D$(e,u.TX.KeyAccessorMustBeString,t);if(!0!==i.hasField(n))throw new u.D$(e,u.TX.FieldNotFound,t,{key:n});r=(0,f.t)(i.field(n)),i.setField(n,"++"===t.operator?r+1:r-1)}else if(i instanceof N){if(!1===(0,A.Kg)(n))throw new u.D$(e,u.TX.ModuleAccessorMustBeString,t);if(!0!==i.hasGlobal(n))throw new u.D$(e,u.TX.ModuleExportNotFound,t);r=(0,f.t)(i.global(n)),i.setGlobal(n,"++"===t.operator?r+1:r-1)}else{if(!(0,f.n)(i))throw(0,f.m)(i)?new u.D$(e,u.TX.Immutable,t):new u.D$(e,u.TX.InvalidParameter,t);if(!1===(0,A.Kg)(n))throw new u.D$(e,u.TX.KeyAccessorMustBeString,t);if(!0!==i.hasField(n))throw new u.D$(e,u.TX.FieldNotFound,t,{key:n});r=(0,f.t)(i.field(n)),i.setField(n,"++"===t.operator?r+1:r-1)}return!1===t.prefix?r:"++"===t.operator?r+1:r-1}let i=(0,r.X)(a);if(null!=e.localScope&&void 0!==e.localScope[i])return n=(0,f.t)(e.localScope[i].value),e.localScope[i]={value:"++"===t.operator?n+1:n-1},!1===t.prefix?n:"++"===t.operator?n+1:n-1;if(void 0!==e.globalScope[i])return n=(0,f.t)(e.globalScope[i].value),e.globalScope[i]={value:"++"===t.operator?n+1:n-1},!1===t.prefix?n:"++"===t.operator?n+1:n-1;throw new u.D$(e,u.TX.InvalidIdentifier,t)}function U(e,t,n,r,a){switch(t){case"=":return e===f.w?null:e;case"/=":return(0,f.t)(n)/(0,f.t)(e);case"*=":return(0,f.t)(n)*(0,f.t)(e);case"-=":return(0,f.t)(n)-(0,f.t)(e);case"+=":return(0,A.Kg)(n)||(0,A.Kg)(e)?(0,f.f)(n)+(0,f.f)(e):(0,f.t)(n)+(0,f.t)(e);case"%=":return(0,f.t)(n)%(0,f.t)(e);default:throw new u.D$(a,u.TX.UnsupportedOperator,r)}}async function Z(e,t){let n=t.left;if("MemberExpression"===n.type){let r,a=await I(e,n.object);if(!0===n.computed)r=await I(e,n.property);else{if("Identifier"!==n.property.type)throw new u.D$(e,u.TX.InvalidIdentifier,t);r=n.property.name}let i=await I(e,t.right);if((0,A.cy)(a)){if(!(0,A.Et)(r))throw new u.D$(e,u.TX.ArrayAccessorMustBeNumber,t);if(r<0&&(r=a.length+r),r<0||r>a.length)throw new u.D$(e,u.TX.OutOfBounds,t);if(r===a.length){if("="!==t.operator)throw new u.D$(e,u.TX.OutOfBounds,t);a[r]=U(i,t.operator,a[r],t,e)}else a[r]=U(i,t.operator,a[r],t,e)}else if(a instanceof l.A){if(!1===(0,A.Kg)(r))throw new u.D$(e,u.TX.KeyAccessorMustBeString,t);if(!0===a.hasField(r))a.setField(r,U(i,t.operator,a.field(r),t,e));else{if("="!==t.operator)throw new u.D$(e,u.TX.FieldNotFound,t,{key:r});a.setField(r,U(i,t.operator,null,t,e))}}else if(a instanceof N){if(!1===(0,A.Kg)(r))throw new u.D$(e,u.TX.KeyAccessorMustBeString,t);if(!0!==a.hasGlobal(r))throw new u.D$(e,u.TX.ModuleExportNotFound,t);a.setGlobal(r,U(i,t.operator,a.global(r),t,e))}else{if(!(0,f.n)(a))throw(0,f.m)(a)?new u.D$(e,u.TX.Immutable,t):new u.D$(e,u.TX.InvalidParameter,t);if(!1===(0,A.Kg)(r))throw new u.D$(e,u.TX.KeyAccessorMustBeString,t);if(!0===a.hasField(r))a.setField(r,U(i,t.operator,a.field(r),t,e));else{if("="!==t.operator)throw new u.D$(e,u.TX.FieldNotFound,t,{key:r});a.setField(r,U(i,t.operator,null,t,e))}}return f.w}let a=(0,r.X)(n);if(null!=e.localScope&&void 0!==e.localScope[a]){let n=await I(e,t.right);return e.localScope[a]={value:U(n,t.operator,e.localScope[a].value,t,e)},f.w}if(void 0!==e.globalScope[a]){let n=await I(e,t.right);return e.globalScope[a]={value:U(n,t.operator,e.globalScope[a].value,t,e)},f.w}throw new u.D$(e,u.TX.InvalidIdentifier,t)}async function q(e,t){let n=await I(e,t.expression);return n===f.w?f.w:new f.I(n)}async function j(e,t){let n=await I(e,t.test);if(!0===n)return x(e,t.consequent);if(!1===n)return null!==t.alternate?x(e,t.alternate):f.w;throw new u.D$(e,u.TX.BooleanConditionRequired,t)}async function G(e,t){return Y(e,t,0)}async function Y(e,t,n){if(n>=t.body.length)return f.w;let r=await x(e,t.body[n]);return r instanceof f.R||r===f.x||r===f.y||n===t.body.length-1?r:Y(e,t,n+1)}async function _(e,t){if(null===t.argument)return new f.R(f.w);let n=await I(e,t.argument);return new f.R(n)}async function z(e,t){let n=(0,r.X)(t.id);return e.globalScope[n]={value:new $(t,e)},f.w}async function V(e,t){let n,a=(0,r.X)(t.specifiers[0].local),i=e.libraryResolver.loadLibrary(a);return e.libraryResolver._moduleSingletons?.has(i.uri)?n=e.libraryResolver._moduleSingletons.get(i.uri):(n=new N(i),await n.loadModule(e),e.libraryResolver._moduleSingletons?.set(i.uri,n)),e.globalScope[a]={value:n},f.w}async function W(e,t){if(await x(e,t.declaration),"FunctionDeclaration"===t.declaration.type)e.exports[(0,r.X)(t.declaration.id)]="function";else if("VariableDeclaration"===t.declaration.type)for(let n of t.declaration.declarations)e.exports[(0,r.X)(n.id)]="variable";return f.w}async function H(e,t,n){return n>=t.declarations.length||(await Q(e,t.declarations[n]),n===t.declarations.length-1||await H(e,t,n+1)),f.w}async function Q(e,t){let n=null;if(n=null===t.init?null:await I(e,t.init),null!==e.localScope){if(n===f.w&&(n=null),"Identifier"!==t.id.type)throw new u.D$(e,u.TX.InvalidIdentifier,t);let a=(0,r.X)(t.id);return void(null!=e.localScope&&(e.localScope[a]={value:n}))}if("Identifier"!==t.id.type)throw new u.D$(e,u.TX.InvalidIdentifier,t);let a=(0,r.X)(t.id);n===f.w&&(n=null),e.globalScope[a]={value:n}}async function ee(e,t){let n=await I(e,t.object);if(null===n)throw new u.D$(e,u.TX.MemberOfNull,t);if(!1===t.computed){if("Identifier"===t.property.type){if(n instanceof l.A||(0,f.z)(n))return n.field(t.property.name);if(n instanceof v.A)return(0,o.Bl)(n,t.property.name,e,t);if(n instanceof N){if(!n.hasGlobal(t.property.name))throw new u.D$(e,u.TX.InvalidIdentifier,t);return n.global(t.property.name)}}throw new u.D$(e,u.TX.InvalidMemberAccessKey,t)}let r=await I(e,t.property);if(n instanceof l.A||(0,f.z)(n)){if((0,A.Kg)(r))return n.field(r);throw new u.D$(e,u.TX.InvalidMemberAccessKey,t)}if(n instanceof N){if((0,A.Kg)(r))return n.global(r);throw new u.D$(e,u.TX.InvalidMemberAccessKey,t)}if(n instanceof v.A){if((0,A.Kg)(r))return(0,o.Bl)(n,r,e,t);throw new u.D$(e,u.TX.InvalidMemberAccessKey,t)}if((0,A.cy)(n)){if((0,A.Et)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length+r),r>=n.length||r<0)throw new u.D$(e,u.TX.OutOfBounds,t);return n[r]}throw new u.D$(e,u.TX.InvalidMemberAccessKey,t)}if((0,f.m)(n)){if((0,A.Et)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length()+r),r>=n.length()||r<0)throw new u.D$(e,u.TX.OutOfBounds,t);return n.get(r)}throw new u.D$(e,u.TX.InvalidMemberAccessKey,t)}if((0,A.Kg)(n)&&(0,A.Et)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length+r),r>=n.length||r<0)throw new u.D$(e,u.TX.OutOfBounds,t);return n[r]}throw new u.D$(e,u.TX.InvalidMemberAccessKey,t)}async function et(e,t){let n=await I(e,t.argument);if((0,A.Lm)(n)){if("!"===t.operator)return!n;if("-"===t.operator)return -1*(0,f.t)(n);if("+"===t.operator)return+(0,f.t)(n);if("~"===t.operator)return~(0,f.t)(n);throw new u.D$(e,u.TX.UnsupportedUnaryOperator,t)}if("-"===t.operator)return -1*(0,f.t)(n);if("+"===t.operator)return+(0,f.t)(n);if("~"===t.operator)return~(0,f.t)(n);throw new u.D$(e,u.TX.UnsupportedUnaryOperator,t)}async function en(e,t){let n=[];for(let r=0;r<t.elements.length;r++)n.push(await I(e,t.elements[r]));for(let r=0;r<n.length;r++){if((0,f.i)(n[r]))throw new u.D$(e,u.TX.NoFunctionInArray,t);n[r]===f.w&&(n[r]=null)}return n}async function er(e,t){let n=await I(e,t.left),r=await I(e,t.right);switch(t.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return(0,f.C)((0,f.t)(n),(0,f.t)(r),t.operator);case"==":return(0,f.B)(n,r);case"!=":return!(0,f.B)(n,r);case"<":case">":case"<=":case">=":return(0,f.A)(n,r,t.operator);case"+":return(0,A.Kg)(n)||(0,A.Kg)(r)?(0,f.f)(n)+(0,f.f)(r):(0,f.t)(n)+(0,f.t)(r);case"-":return(0,f.t)(n)-(0,f.t)(r);case"*":return(0,f.t)(n)*(0,f.t)(r);case"/":return(0,f.t)(n)/(0,f.t)(r);case"%":return(0,f.t)(n)%(0,f.t)(r);default:throw new u.D$(e,u.TX.UnsupportedOperator,t)}}async function ea(e,t){let n=await I(e,t.left);if(!(0,A.Lm)(n))throw new u.D$(e,u.TX.LogicalExpressionOnlyBoolean,t);switch(t.operator){case"||":{if(!0===n)return n;let r=await I(e,t.right);if((0,A.Lm)(r))return r;throw new u.D$(e,u.TX.LogicExpressionOrAnd,t)}case"&&":{if(!1===n)return n;let r=await I(e,t.right);if((0,A.Lm)(r))return r;throw new u.D$(e,u.TX.LogicExpressionOrAnd,t)}default:throw new u.D$(e,u.TX.LogicExpressionOrAnd,t)}}function ei(e,t){let n=(0,r.X)(t);if(null!=e.localScope&&void 0!==e.localScope[n])return e.localScope[n].value;if(void 0!==e.globalScope[n])return e.globalScope[n].value;throw new u.D$(e,u.TX.InvalidIdentifier,t)}async function eo(e,t){if("MemberExpression"===t.callee.type){let n=await I(e,t.callee.object);if(!(n instanceof N))throw new u.D$(e,u.TX.FunctionNotFound,t);let r=!1===t.callee.computed?t.callee.property.name:await I(e,t.callee.property);if(!n.hasGlobal(r))throw new u.D$(e,u.TX.FunctionNotFound,t);let a=n.global(r);if(!(0,f.i)(a))throw new u.D$(e,u.TX.CallNonFunction,t);return a.call(e,t)}if("Identifier"!==t.callee.type)throw new u.D$(e,u.TX.FunctionNotFound,t);let n=(0,r.X)(t.callee);if(null!=e.localScope&&void 0!==e.localScope[n]){let r=e.localScope[n];if((0,f.i)(r.value))return r.value.call(e,t);throw new u.D$(e,u.TX.CallNonFunction,t)}if(void 0!==e.globalScope[n]){let r=e.globalScope[n];if((0,f.i)(r.value))return r.value.call(e,t);throw new u.D$(e,u.TX.CallNonFunction,t)}throw new u.D$(e,u.TX.FunctionNotFound,t)}async function el(e,t){let n="",r=0;for(let a of t.quasis)if(n+=a.value?a.value.cooked:"",!1===a.tail){if(t.expressions[r]){let a=await I(e,t.expressions[r]);if((0,f.i)(a))throw new u.D$(e,u.TX.NoFunctionInTemplateLiteral,t);n+=(0,f.f)(a)}r++}return n}let eu={};async function ec(e,t,n,r){let a=await I(e,t.arguments[n]);if((0,f.B)(a,r))return I(e,t.arguments[n+1]);let i=t.arguments.length-n;return 1===i?I(e,t.arguments[n]):2===i?null:3===i?I(e,t.arguments[n+2]):ec(e,t,n+2,r)}async function es(e,t,n,r){if(!0===r)return I(e,t.arguments[n+1]);if(3==t.arguments.length-n)return I(e,t.arguments[n+2]);let a=await I(e,t.arguments[n+2]);if(!1===(0,A.Lm)(a))throw new u.D$(e,u.TX.ModuleExportNotFound,t.arguments[n+2]);return es(e,t,n+2,a)}async function ef(e,t,n,a){let i=e.body;if(n.length!==e.params.length)throw new u.D$(t,u.TX.WrongNumberOfParameters,null);for(let a=0;a<n.length;a++){let i=e.params[a];"Identifier"===i.type&&null!=t.localScope&&(t.localScope[(0,r.X)(i)]={value:n[a]})}let o=await x(t,i);if(o instanceof f.R)return o.value;if(o===f.x||o===f.y)throw new u.D$(t,u.TX.UnexpectedToken,a);return o instanceof f.I?o.value:o}(0,p.d)(eu,T),(0,D.d)(eu,T),(0,h.d)(eu,T,ei),(0,m.d)(eu,T),(0,g.d)(eu,T),(0,S.d)(eu,T),(0,y.registerFunctions)({functions:eu,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:T,standardFunctionAsync:O}),eu.iif=async function(e,t){(0,f.D)(null===t.arguments?[]:t.arguments,3,3,e,t);let n=await I(e,t.arguments[0]);if(!1===(0,A.Lm)(n))throw new u.D$(e,u.TX.BooleanConditionRequired,t);return I(e,n?t.arguments[1]:t.arguments[2])},eu.defaultvalue=async function(e,t){(0,f.D)(null===t.arguments?[]:t.arguments,2,3,e,t);let n=await I(e,t.arguments[0]);if(3===t.arguments.length){let r=await I(e,t.arguments[1]),a=(0,o.jd)(n,r);return null!=a&&""!==a?a:I(e,t.arguments[2])}return null==n||""===n?I(e,t.arguments[1]):n},eu.decode=async function(e,t){if(t.arguments.length<2)throw new u.D$(e,u.TX.WrongNumberOfParameters,t);if(2===t.arguments.length)return I(e,t.arguments[1]);if((t.arguments.length-1)%2==0)throw new u.D$(e,u.TX.WrongNumberOfParameters,t);return ec(e,t,1,await I(e,t.arguments[0]))},eu.when=async function(e,t){if(t.arguments.length<3||t.arguments.length%2==0)throw new u.D$(e,u.TX.WrongNumberOfParameters,t);let n=await I(e,t.arguments[0]);if(!1===(0,A.Lm)(n))throw new u.D$(e,u.TX.BooleanConditionRequired,t.arguments[0]);return es(e,t,0,n)};let ed={fixSpatialReference:f.u,parseArguments:X,standardFunction:T,standardFunctionAsync:O,evaluateIdentifier:ei};for(let e in eu)eu[e]={value:new s.UQ(eu[e])};let ew=function(){};function ep(e,t,n){let r=new ew;null==e&&(e={}),null==t&&(t={});let a=new l.A({newline:"\n",tab:"	",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});for(let e in a.immutable=!1,r.textformatting={value:a},t)r[e]={value:new s.UQ(t[e])};for(let t in e)r[t]={value:(0,A.DU)(e[t])?c.A.createFromGraphic(e[t],n):e[t]};return r}function eh(e){console.log(e)}ew.prototype=eu,ew.prototype.infinity={value:Number.POSITIVE_INFINITY},ew.prototype.pi={value:Math.PI};let ey=ed;function eg(e){let t={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:T,standardFunctionAsync:O,evaluateIdentifier:ei};for(let n=0;n<e.length;n++)e[n].registerFunctions(t);for(let e in t.functions)eu[e]={value:new s.UQ(t.functions[e])},ew.prototype[e]=eu[e];for(let e=0;e<t.signatures.length;e++)(0,d.WC)(t.signatures[e],"async")}async function em(e,t){let n=t.spatialReference;null==n&&(n=new b.A({wkid:102100}));let r=null;e.usesModules&&(r=new i.a(new Map,e.loadedModules));let a=ep(t.vars,t.customfunctions,t.timeZone),o={spatialReference:n,services:t.services,exports:{},libraryResolver:r,abortSignal:void 0===t.abortSignal||null===t.abortSignal?{aborted:!1}:t.abortSignal,globalScope:a,console:t.console??eh,timeZone:t.timeZone??null,lrucache:t.lrucache,interceptor:t.interceptor,localScope:null,depthCounter:{depth:1}},l=await G(o,e);if(l instanceof f.R||l instanceof f.I){let e=l.value;if(e===f.w)return null;if((0,f.i)(e))throw new u.D$(o,u.TX.IllegalResult,null);return e}if(l===f.w)return null;if(l===f.x||l===f.y)throw new u.D$(o,u.TX.IllegalResult,null);throw new u.D$(o,u.TX.NeverReach,null)}eg([w.A])},32421:(e,t,n)=>{n.d(t,{R:()=>a});var r=n(14307);function a(e,t){return null===e?t:new r.A({url:e.field("url")})}},54287:(e,t,n)=>{n.r(t),n.d(t,{registerFunctions:()=>X});var r=n(36924),a=n(12894),i=n(30626),o=n(43595),l=n(45891),u=n(32421),c=n(49047),s=n(85438),f=n(61414),d=n(88070),w=n(147),p=n(39960),h=n(87960),y=n(65442),g=n(31789),m=n(14307),S=n(57664),D=n(39166);async function v(e,t,n){if(!S.id?.findCredential(e.restUrl))return null;if("loaded"===e.loadStatus&&""===t&&e.user?.sourceJSON&&!1===n)return e.user.sourceJSON;let r={responseType:"json",query:{f:"json"}};if(n&&(r.query.returnUserLicenseTypeExtensions=!0),""===t){let t=await (0,D.A)(e.restUrl+"/community/self",r);if(t.data){let e=t.data;if(e?.username)return e}return null}let a=await (0,D.A)(e.restUrl+"/community/users/"+t,r);if(a.data){let e=a.data;return e.error?null:e}return null}var b=n(48271);function A(e){if(null==e)return e;switch(typeof e){case"string":case"number":return e;default:throw new i.D$(null,i.TX.InvalidParameter,null)}}function X(e){"async"===e.mode&&(e.functions.disjoint=function(t,n){return e.standardFunctionAsync(t,n,(e,r,a)=>(a=(0,l.E)(a),(0,c.ZL)(a,t,n),null===a[0]||null===a[1]||(0,s.C)("disjoint",[a[0].toJSON(),a[1].toJSON()])))},e.functions.intersects=function(t,n){return e.standardFunctionAsync(t,n,(e,r,a)=>(a=(0,l.E)(a),(0,c.ZL)(a,t,n),null!==a[0]&&null!==a[1]&&(0,s.C)("intersects",[a[0].toJSON(),a[1].toJSON()])))},e.functions.touches=function(t,n){return e.standardFunctionAsync(t,n,(e,r,a)=>(a=(0,l.E)(a),(0,c.ZL)(a,t,n),null!==a[0]&&null!==a[1]&&(0,s.C)("touches",[a[0].toJSON(),a[1].toJSON()])))},e.functions.crosses=function(t,n){return e.standardFunctionAsync(t,n,(e,r,a)=>(a=(0,l.E)(a),(0,c.ZL)(a,t,n),null!==a[0]&&null!==a[1]&&(0,s.C)("crosses",[a[0].toJSON(),a[1].toJSON()])))},e.functions.within=function(t,n){return e.standardFunctionAsync(t,n,(e,r,a)=>(a=(0,l.E)(a),(0,c.ZL)(a,t,n),null!==a[0]&&null!==a[1]&&(0,s.C)("within",[a[0].toJSON(),a[1].toJSON()])))},e.functions.contains=function(t,n){return e.standardFunctionAsync(t,n,(e,r,a)=>(a=(0,l.E)(a),(0,c.ZL)(a,t,n),null!==a[0]&&null!==a[1]&&(0,s.C)("contains",[a[0].toJSON(),a[1].toJSON()])))},e.functions.overlaps=function(t,n){return e.standardFunctionAsync(t,n,(e,r,a)=>(a=(0,l.E)(a),(0,c.ZL)(a,t,n),null!==a[0]&&null!==a[1]&&(0,s.C)("overlaps",[a[0].toJSON(),a[1].toJSON()])))},e.functions.equals=function(t,n){return e.standardFunctionAsync(t,n,(e,r,a)=>((0,l.D)(a,2,2,t,n),a[0]===a[1]||(a[0]instanceof d.A&&a[1]instanceof d.A?(0,s.C)("equals",[a[0].toJSON(),a[1].toJSON()]):((0,l.g)(a[0])&&(0,l.g)(a[1])||!!((0,l.k)(a[0])&&(0,l.k)(a[1])||(0,l.j)(a[0])&&(0,l.j)(a[1])))&&a[0].equals(a[1]))))},e.functions.relate=function(t,n){return e.standardFunctionAsync(t,n,(e,r,a)=>{if(a=(0,l.E)(a),(0,l.D)(a,3,3,t,n),a[0]instanceof d.A&&a[1]instanceof d.A)return(0,s.C)("relate",[a[0].toJSON(),a[1].toJSON(),(0,l.f)(a[2])]);if(a[0]instanceof d.A&&null===a[1]||a[1]instanceof d.A&&null===a[0]||null===a[0]&&null===a[1])return!1;throw new i.D$(t,i.TX.InvalidParameter,n)})},e.functions.intersection=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,a)=>(a=(0,l.E)(a),(0,c.ZL)(a,t,n),null===a[0]||null===a[1]?null:(0,g.rS)(await (0,s.C)("intersection",[a[0].toJSON(),a[1].toJSON()]))))},e.functions.union=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,a)=>{if(0===(a=(0,l.E)(a)).length)throw new i.D$(t,i.TX.WrongNumberOfParameters,n);let u=[];if(1===a.length)if((0,b.cy)(a[0])){for(let e of(0,l.E)(a[0]))if(null!==e){if(!(e instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,n);u.push(e.toJSON())}}else{if(!(0,l.m)(a[0])){if(a[0]instanceof d.A)return(0,l.u)((0,o.Yq)(a[0]),t.spatialReference);if(null===a[0])return null;throw new i.D$(t,i.TX.InvalidParameter,n)}for(let e of(0,l.E)(a[0].toArray()))if(null!==e){if(!(e instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,n);u.push(e.toJSON())}}else for(let e of a)if(null!==e){if(!(e instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,n);u.push(e.toJSON())}return 0===u.length?null:(0,g.rS)(await (0,s.C)("union",[u]))})},e.functions.difference=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,a)=>(a=(0,l.E)(a),(0,c.ZL)(a,t,n),null===a[0]?null:null===a[1]?(0,o.Yq)(a[0]):(0,g.rS)(await (0,s.C)("difference",[a[0].toJSON(),a[1].toJSON()]))))},e.functions.symmetricdifference=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,a)=>(a=(0,l.E)(a),(0,c.ZL)(a,t,n),null===a[0]&&null===a[1]?null:null===a[0]?(0,o.Yq)(a[1]):null===a[1]?(0,o.Yq)(a[0]):(0,g.rS)(await (0,s.C)("symmetricDifference",[a[0].toJSON(),a[1].toJSON()]))))},e.functions.clip=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,a)=>{if(a=(0,l.E)(a),(0,l.D)(a,2,2,t,n),!(a[1]instanceof f.A)&&null!==a[1])throw new i.D$(t,i.TX.InvalidParameter,n);if(null===a[0])return null;if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,n);return null===a[1]?null:(0,g.rS)(await (0,s.C)("clip",[a[0].toJSON(),a[1].toJSON()]))})},e.functions.cut=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,a)=>{if(a=(0,l.E)(a),(0,l.D)(a,2,2,t,n),!(a[1]instanceof y.A)&&null!==a[1])throw new i.D$(t,i.TX.InvalidParameter,n);if(null===a[0])return[];if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,n);return null===a[1]?[(0,o.Yq)(a[0])]:(await (0,s.C)("cut",[a[0].toJSON(),a[1].toJSON()])).map(e=>(0,g.rS)(e))})},e.functions.area=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,a)=>{if((0,l.D)(a,1,2,t,n),a=(0,l.E)(a),(0,l.p)(a[0])){let e=await a[0].sumArea(A(a[1]),!1,t.abortSignal);if(t.abortSignal.aborted)throw new i.D$(t,i.TX.Cancelled,n);return e}let o=a[0];if(((0,b.cy)(o)||(0,l.m)(o))&&(o=(0,l.F)(a[0],t.spatialReference)),null===o)return 0;if(!(o instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,n);return(0,s.C)("area",[o.toJSON(),A(a[1])])})},e.functions.areageodetic=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,a)=>{if((0,l.D)(a,1,2,t,n),a=(0,l.E)(a),(0,l.p)(a[0])){let e=await a[0].sumArea(A(a[1]),!0,t.abortSignal);if(t.abortSignal.aborted)throw new i.D$(t,i.TX.Cancelled,n);return e}let o=a[0];if(((0,b.cy)(a[0])||(0,l.m)(a[0]))&&(o=(0,l.F)(a[0],t.spatialReference)),null===o)return 0;if(!(o instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,n);return(0,s.C)("geodeticArea",[o.toJSON(),A(a[1])])})},e.functions.length=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,a)=>{if((0,l.D)(a,1,2,t,n),a=(0,l.E)(a),(0,l.p)(a[0])){let e=await a[0].sumLength(A(a[1]),!1,t.abortSignal);if(t.abortSignal.aborted)throw new i.D$(t,i.TX.Cancelled,n);return e}let o=a[0];if(((0,b.cy)(a[0])||(0,l.m)(a[0]))&&(o=(0,l.G)(a[0],t.spatialReference)),null===o)return 0;if(!(o instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,n);return(0,s.C)("length",[o.toJSON(),A(a[1])])})},e.functions.length3d=function(t,r){return e.standardFunctionAsync(t,r,async(e,a,o)=>{if((0,l.D)(o,1,2,t,r),null===(o=(0,l.E)(o))[0])return 0;let u=o[0];if(((0,b.cy)(o[0])||(0,l.m)(o[0]))&&(u=(0,l.G)(o[0],t.spatialReference)),null===u)return 0;if(!(u instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,r);if(!0===u.hasZ){let{convertFromSpatialReferenceUnit:e,toLengthUnit:t}=await Promise.resolve().then(n.bind(n,96819)),r=(0,c.UI)(u);return e(u.spatialReference,t(o[1]),r)}return(0,s.C)("length",[u.toJSON(),A(o[1])])})},e.functions.lengthgeodetic=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,a)=>{if((0,l.D)(a,1,2,t,n),a=(0,l.E)(a),(0,l.p)(a[0])){let e=await a[0].sumLength(A(a[1]),!0,t.abortSignal);if(t.abortSignal.aborted)throw new i.D$(t,i.TX.Cancelled,n);return e}let o=a[0];if(((0,b.cy)(a[0])||(0,l.m)(a[0]))&&(o=(0,l.G)(a[0],t.spatialReference)),null===o)return 0;if(!(o instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,n);return(0,s.C)("geodeticLength",[o.toJSON(),A(a[1])])})},e.functions.distance=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,a)=>{a=(0,l.E)(a),(0,l.D)(a,2,3,t,n);let o=a[0];if(((0,b.cy)(a[0])||(0,l.m)(a[0]))&&(o=(0,l.H)(a[0],t.spatialReference)),!(o instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,n);let u=a[1];if(((0,b.cy)(a[1])||(0,l.m)(a[1]))&&(u=(0,l.H)(a[1],t.spatialReference)),!(u instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,n);return(0,s.C)("distance",[o.toJSON(),u.toJSON(),A(a[2])])})},e.functions.distancegeodetic=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,a)=>{a=(0,l.E)(a),(0,l.D)(a,2,3,t,n);let o=a[0];if(!(o instanceof p.A))throw new i.D$(t,i.TX.InvalidParameter,n);let u=a[1];if(!(u instanceof p.A))throw new i.D$(t,i.TX.InvalidParameter,n);let c=new y.A({paths:[],spatialReference:o.spatialReference});return c.addPath([o,u]),(0,s.C)("geodeticLength",[c.toJSON(),A(a[2])])})},e.functions.densify=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,a)=>{if(a=(0,l.E)(a),(0,l.D)(a,2,3,t,n),null===a[0])return null;if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,n);let o=(0,l.t)(a[1]);if(isNaN(o)||o<=0)throw new i.D$(t,i.TX.InvalidParameter,n);switch(a[0].type){case"polygon":case"polyline":case"extent":return(0,g.rS)(await (0,s.C)("densify",[a[0].toJSON(),o,A(a[2])]));default:return a[0]}})},e.functions.densifygeodetic=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,a)=>{if(a=(0,l.E)(a),(0,l.D)(a,2,3,t,n),null===a[0])return null;if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,n);let o=(0,l.t)(a[1]);if(isNaN(o)||o<=0)throw new i.D$(t,i.TX.InvalidParameter,n);switch(a[0].type){case"polygon":case"polyline":case"extent":return(0,g.rS)(await (0,s.C)("geodeticDensify",[a[0].toJSON(),o,A(a[2])]));default:return a[0]}})},e.functions.generalize=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,a)=>{if(a=(0,l.E)(a),(0,l.D)(a,2,4,t,n),null===a[0])return null;if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,n);let o=(0,l.t)(a[1]);if(isNaN(o))throw new i.D$(t,i.TX.InvalidParameter,n);let u=(0,l.e)((0,l.J)(a[2],!0));return(0,g.rS)(await (0,s.C)("generalize",[a[0].toJSON(),o,A(a[3]),{removeDegenerateParts:u}]))})},e.functions.buffer=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,a)=>{if(a=(0,l.E)(a),(0,l.D)(a,2,3,t,n),null===a[0])return null;if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,n);let u=(0,l.t)(a[1]);if(isNaN(u))throw new i.D$(t,i.TX.InvalidParameter,n);return 0===u?(0,o.Yq)(a[0]):(0,g.rS)(await (0,s.C)("buffer",[a[0].toJSON(),u,A(a[2])]))})},e.functions.buffergeodetic=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,a)=>{if(a=(0,l.E)(a),(0,l.D)(a,2,3,t,n),null===a[0])return null;if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,n);let u=(0,l.t)(a[1]);if(isNaN(u))throw new i.D$(t,i.TX.InvalidParameter,n);return 0===u?(0,o.Yq)(a[0]):(0,g.rS)(await (0,s.C)("geodesicBuffer",[a[0].toJSON(),u,A(a[2])]))})},e.functions.offset=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,a)=>{let o;if(a=(0,l.E)(a),(0,l.D)(a,2,6,t,n),null===a[0])return null;if(!(a[0]instanceof h.A||a[0]instanceof y.A))throw new i.D$(t,i.TX.InvalidParameter,n);let u=(0,l.t)(a[1]);if(isNaN(u))throw new i.D$(t,i.TX.InvalidParameter,n);let c=(0,l.f)(a[3]??"round").toLowerCase();switch(c){case"round":case"bevel":case"miter":case"square":o=c;break;default:o="round"}let f=(0,l.t)((0,l.J)(a[4],10));if(isNaN(f))throw new i.D$(t,i.TX.InvalidParameter,n);let d=(0,l.t)((0,l.J)(a[5],0));if(isNaN(d))throw new i.D$(t,i.TX.InvalidParameter,n);return(0,g.rS)(await (0,s.C)("offset",[a[0].toJSON(),u,A(a[2]),{joins:o,miterLimit:f,flattenError:d}]))})},e.functions.rotate=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,a)=>{if(a=(0,l.E)(a),(0,l.D)(a,2,3,t,n),null===a[0])return null;if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,n);let o=a[0]instanceof f.A?h.A.fromExtent(a[0]):a[0],u=(0,l.t)(a[1]);if(isNaN(u))throw new i.D$(t,i.TX.InvalidParameter,n);let c=(0,l.J)(a[2],null);if(null===c){let e="point"===o.type?o:o.extent?.center;return(0,g.rS)(await (0,s.C)("rotate",[o.toJSON(),u,e?.x,e?.y]))}if(c instanceof p.A)return(0,g.rS)(await (0,s.C)("rotate",[o.toJSON(),u,c.x,c.y]));throw new i.D$(t,i.TX.InvalidParameter,n)})},e.functions.centroid=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,a)=>{if(a=(0,l.E)(a),(0,l.D)(a,1,2,t,n),null===a[0])return null;let o=(0,l.f)(a[1]??"geometric").toLowerCase();if("geometric"!==o&&"labelpoint"!==o)throw new i.D$(t,i.TX.InvalidParameter,n);let u=a[0];if(((0,b.cy)(a[0])||(0,l.m)(a[0]))&&null===(u="geometric"===o?(0,l.H)(a[0],t.spatialReference):(0,l.F)(a[0],t.spatialReference)))return null;if(!(u instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,n);return(0,g.rS)("geometric"===o?await (0,s.C)("centroid",[u.toJSON()]):await (0,s.C)("labelPoint",[u.toJSON()]))})},e.functions.measuretocoordinate=function(t,n){return e.standardFunctionAsync(t,n,c.Cd)},e.functions.pointtocoordinate=function(t,n){return e.standardFunctionAsync(t,n,c.kr)},e.functions.distancetocoordinate=function(t,n){return e.standardFunctionAsync(t,n,c.Bn)},e.functions.multiparttosinglepart=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,a)=>{if(a=(0,l.E)(a),(0,l.D)(a,1,1,t,n),null===a[0])return null;if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,n);if(a[0]instanceof p.A||a[0]instanceof f.A)return[(0,l.u)((0,o.Yq)(a[0]),t.spatialReference)];let u=(0,g.rS)(await (0,s.C)("simplify",[a[0].toJSON()]));if(u instanceof h.A){let e=[],t=[];for(let n=0;n<u.rings.length;n++)if(u.isClockwise(u.rings[n])){let t=(0,g.rS)({rings:[u.rings[n]],hasZ:!0===u.hasZ,hasM:!0===u.hasM,spatialReference:u.spatialReference.toJSON()});e.push(t)}else t.push({ring:u.rings[n],pt:u.getPoint(n,0)});for(let n=0;n<t.length;n++)for(let r=0;r<e.length;r++)if(e[r].contains(t[n].pt)){e[r].addRing(t[n].ring);break}return e}if(u instanceof y.A){let e=[];for(let t=0;t<u.paths.length;t++){let n=(0,g.rS)({paths:[u.paths[t]],hasZ:!0===u.hasZ,hasM:!0===u.hasM,spatialReference:u.spatialReference.toJSON()});e.push(n)}return e}if(a[0]instanceof w.A){let e=[],n=(0,l.u)((0,o.Yq)(a[0]),t.spatialReference);for(let t=0;t<n.points.length;t++)e.push(n.getPoint(t));return e}return null})},e.functions.issimple=function(t,n){return e.standardFunctionAsync(t,n,(e,r,a)=>{if(a=(0,l.E)(a),(0,l.D)(a,1,1,t,n),null===a[0])return!0;if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,n);return(0,s.C)("isSimple",[a[0].toJSON()])})},e.functions.simplify=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,a)=>{if(a=(0,l.E)(a),(0,l.D)(a,1,1,t,n),null===a[0])return null;if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,n);return(0,g.rS)(await (0,s.C)("simplify",[a[0].toJSON()]))})},e.functions.convexhull=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,a)=>{if(a=(0,l.E)(a),(0,l.D)(a,1,1,t,n),null===a[0])return null;if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,n);return(0,g.rS)(await (0,s.C)("convexHull",[a[0].toJSON()]))})},e.functions.getuser=function(t,n){return e.standardFunctionAsync(t,n,async(e,o,c)=>{(0,l.D)(c,0,2,t,n);let s=(0,l.J)(c[1],""),f=!0===s;if(s=!0===s||!1===s?"":(0,l.f)(s),0===c.length||c[0]instanceof r.A){let e;e=t.services?.portal?t.services.portal:m.A.getDefault(),c.length>0&&(e=(0,u.R)(c[0],e));let n=await v(e,s,f);if(n){let e=JSON.parse(JSON.stringify(n));for(let t of["lastLogin","created","modified"])void 0!==e[t]&&null!==e[t]&&(e[t]=new Date(e[t]));return a.A.convertObjectToArcadeDictionary(e,(0,l.K)(t))}return null}let d=null;if((0,l.p)(c[0])&&(d=c[0]),d){let e;if(f=!1,s)return null;await d.load();let n=await d.getOwningSystemUrl();if(!n){if(!s){let e=await d.getIdentityUser();return e?a.A.convertObjectToArcadeDictionary({username:e},(0,l.K)(t)):null}return null}e=t.services?.portal?t.services.portal:m.A.getDefault(),e=(0,u.R)(new r.A(n),e);let i=await v(e,s,f);if(i){let e=JSON.parse(JSON.stringify(i));for(let t of["lastLogin","created","modified"])void 0!==e[t]&&null!==e[t]&&(e[t]=new Date(e[t]));return a.A.convertObjectToArcadeDictionary(e,(0,l.K)(t))}return null}throw new i.D$(t,i.TX.InvalidParameter,n)})},e.functions.nearestcoordinate=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,o)=>{if(o=(0,l.E)(o),(0,l.D)(o,2,2,t,n),!(o[0]instanceof d.A||null===o[0])||!(o[1]instanceof p.A||null===o[1]))throw new i.D$(t,i.TX.InvalidParameter,n);if(null===o[0]||null===o[1])return null;let u=o[0]instanceof f.A?h.A.fromExtent(o[0]):o[0],c=await (0,s.C)("getNearestCoordinate",[u.toJSON(),o[1].toJSON(),{calculateLeftRightSide:!0}]);return null===c?null:a.A.convertObjectToArcadeDictionary({coordinate:(0,g.rS)(c.coordinate),distance:c.distance,sideOfLine:0===c.distance?"straddle":c.rightSide?"right":"left"},(0,l.K)(t),!1,!0)})},e.functions.nearestvertex=function(t,n){return e.standardFunctionAsync(t,n,async(e,r,o)=>{if(o=(0,l.E)(o),(0,l.D)(o,2,2,t,n),!(o[0]instanceof d.A||null===o[0])||!(o[1]instanceof p.A||null===o[1]))throw new i.D$(t,i.TX.InvalidParameter,n);if(null===o[0]||null===o[1])return null;let u=o[0]instanceof f.A?h.A.fromExtent(o[0]):o[0],c=await (0,s.C)("getNearestVertex",[u.toJSON(),o[1].toJSON()]);return null===c?null:a.A.convertObjectToArcadeDictionary({coordinate:(0,g.rS)(c.coordinate),distance:c.distance,sideOfLine:0===c.distance?"straddle":c.rightSide?"right":"left"},(0,l.K)(t),!1,!0)})})}},85438:(e,t,n)=>{n.d(t,{C:()=>l});var r=n(6675);let a,i,o=!1;async function l(e,t){return o?i.apply("invokeGeometryOp",[e,t]):(await (a??=(0,r.ho)("arcadeGeometryOperatorsWorker").then(e=>{i=e,o=!0,a=void 0})),l(e,t))}}}]);