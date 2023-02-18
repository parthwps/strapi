(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[4593],{3108:(X,ot,m)=>{/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var w={655:(a,E,n)=>{"use strict";n.d(E,{Z:()=>C});var f=n(609),T=n.n(f)()(function(O){return O[1]});T.push([a.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}",""]);const C=T},609:a=>{"use strict";a.exports=function(E){var n=[];return n.toString=function(){return this.map(function(f){var T=E(f);return f[2]?"@media ".concat(f[2]," {").concat(T,"}"):T}).join("")},n.i=function(f,T,C){typeof f=="string"&&(f=[[null,f,""]]);var O={};if(C)for(var G=0;G<this.length;G++){var P=this[G][0];P!=null&&(O[P]=!0)}for(var x=0;x<f.length;x++){var M=[].concat(f[x]);C&&O[M[0]]||(T&&(M[2]?M[2]="".concat(T," and ").concat(M[2]):M[2]=T),n.push(M))}},n}},62:(a,E,n)=>{"use strict";var f,T=function(){return f===void 0&&(f=Boolean(window&&document&&document.all&&!window.atob)),f},C=function(){var s={};return function(b){if(s[b]===void 0){var d=document.querySelector(b);if(window.HTMLIFrameElement&&d instanceof window.HTMLIFrameElement)try{d=d.contentDocument.head}catch{d=null}s[b]=d}return s[b]}}(),O=[];function G(s){for(var b=-1,d=0;d<O.length;d++)if(O[d].identifier===s){b=d;break}return b}function P(s,b){for(var d={},S=[],A=0;A<s.length;A++){var z=s[A],R=b.base?z[0]+b.base:z[0],K=d[R]||0,N="".concat(R," ").concat(K);d[R]=K+1;var pt=G(N),dt={css:z[1],media:z[2],sourceMap:z[3]};pt!==-1?(O[pt].references++,O[pt].updater(dt)):O.push({identifier:N,updater:lt(dt,b),references:1}),S.push(N)}return S}function x(s){var b=document.createElement("style"),d=s.attributes||{};if(d.nonce===void 0){var S=n.nc;S&&(d.nonce=S)}if(Object.keys(d).forEach(function(z){b.setAttribute(z,d[z])}),typeof s.insert=="function")s.insert(b);else{var A=C(s.insert||"head");if(!A)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");A.appendChild(b)}return b}var M,gt=(M=[],function(s,b){return M[s]=b,M.filter(Boolean).join(`
`)});function ht(s,b,d,S){var A=d?"":S.media?"@media ".concat(S.media," {").concat(S.css,"}"):S.css;if(s.styleSheet)s.styleSheet.cssText=gt(b,A);else{var z=document.createTextNode(A),R=s.childNodes;R[b]&&s.removeChild(R[b]),R.length?s.insertBefore(z,R[b]):s.appendChild(z)}}function it(s,b,d){var S=d.css,A=d.media,z=d.sourceMap;if(A?s.setAttribute("media",A):s.removeAttribute("media"),z&&typeof btoa<"u"&&(S+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(z))))," */")),s.styleSheet)s.styleSheet.cssText=S;else{for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(document.createTextNode(S))}}var st=null,rt=0;function lt(s,b){var d,S,A;if(b.singleton){var z=rt++;d=st||(st=x(b)),S=ht.bind(null,d,z,!1),A=ht.bind(null,d,z,!0)}else d=x(b),S=it.bind(null,d,b),A=function(){(function(R){if(R.parentNode===null)return!1;R.parentNode.removeChild(R)})(d)};return S(s),function(R){if(R){if(R.css===s.css&&R.media===s.media&&R.sourceMap===s.sourceMap)return;S(s=R)}else A()}}a.exports=function(s,b){(b=b||{}).singleton||typeof b.singleton=="boolean"||(b.singleton=T());var d=P(s=s||[],b);return function(S){if(S=S||[],Object.prototype.toString.call(S)==="[object Array]"){for(var A=0;A<d.length;A++){var z=G(d[A]);O[z].references--}for(var R=P(S,b),K=0;K<d.length;K++){var N=G(d[K]);O[N].references===0&&(O[N].updater(),O.splice(N,1))}d=R}}}},704:(a,E,n)=>{a.exports=n(79)("./src/core.js")},492:(a,E,n)=>{a.exports=n(79)("./src/engine.js")},273:(a,E,n)=>{a.exports=n(79)("./src/ui.js")},209:(a,E,n)=>{a.exports=n(79)("./src/utils.js")},79:a=>{"use strict";a.exports=CKEditor5.dll}},yt={};function g(a){var E=yt[a];if(E!==void 0)return E.exports;var n=yt[a]={id:a,exports:{}};return w[a](n,n.exports,g),n.exports}g.n=a=>{var E=a&&a.__esModule?()=>a.default:()=>a;return g.d(E,{a:E}),E},g.d=(a,E)=>{for(var n in E)g.o(E,n)&&!g.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:E[n]})},g.o=(a,E)=>Object.prototype.hasOwnProperty.call(a,E),g.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},g.nc=void 0;var q={};(()=>{"use strict";g.r(q),g.d(q,{ClassicEditor:()=>Ut});var a=g(273),E=g(492),n=g(209);class f extends a.EditorUI{constructor(l,_){super(l),this.view=_,this._toolbarConfig=(0,a.normalizeToolbarConfig)(l.config.get("toolbar")),this._elementReplacer=new n.ElementReplacer}get element(){return this.view.element}init(l){const _=this.editor,i=this.view,u=_.editing.view,j=i.editable,v=u.document.getRoot();j.name=v.rootName,i.render();const B=j.element;this.setEditableElement(j.name,B),i.editable.bind("isFocused").to(this.focusTracker),u.attachDomRoot(B),l&&this._elementReplacer.replace(l,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const l=this.view,_=this.editor.editing.view;this._elementReplacer.restore(),_.detachDomRoot(l.editable.name),l.destroy()}_initToolbar(){const l=this.view;l.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),l.stickyPanel.limiterElement=l.element,l.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:_})=>_||0),l.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(l.toolbar)}_initPlaceholder(){const l=this.editor,_=l.editing.view,i=_.document.getRoot(),u=l.sourceElement,j=l.config.get("placeholder")||u&&u.tagName.toLowerCase()==="textarea"&&u.getAttribute("placeholder");j&&(0,E.enablePlaceholder)({view:_,element:i,text:j,isDirectHost:!1,keepOnFocus:!0})}}var T=g(62),C=g.n(T),O=g(655),G={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};C()(O.Z,G),O.Z.locals;class P extends a.BoxedEditorUIView{constructor(l,_,i={}){super(l),this.stickyPanel=new a.StickyPanelView(l),this.toolbar=new a.ToolbarView(l,{shouldGroupWhenFull:i.shouldToolbarGroupWhenFull}),this.editable=new a.InlineEditableUIView(l,_)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}var x=g(704);const M=function(y){return y!=null&&typeof y=="object"},gt=typeof m.g=="object"&&m.g&&m.g.Object===Object&&m.g;var ht=typeof self=="object"&&self&&self.Object===Object&&self;const it=(gt||ht||Function("return this")()).Symbol;var st=Object.prototype,rt=st.hasOwnProperty,lt=st.toString,s=it?it.toStringTag:void 0;const b=function(y){var l=rt.call(y,s),_=y[s];try{y[s]=void 0;var i=!0}catch{}var u=lt.call(y);return i&&(l?y[s]=_:delete y[s]),u};var d=Object.prototype.toString;const S=function(y){return d.call(y)};var A="[object Null]",z="[object Undefined]",R=it?it.toStringTag:void 0;const K=function(y){return y==null?y===void 0?z:A:R&&R in Object(y)?b(y):S(y)},N=function(y,l){return function(_){return y(l(_))}}(Object.getPrototypeOf,Object);var pt="[object Object]",dt=Function.prototype,Lt=Object.prototype,Pt=dt.toString,Mt=Lt.hasOwnProperty,St=Pt.call(Object);const Ft=function(y){if(!M(y)||K(y)!=pt)return!1;var l=N(y);if(l===null)return!0;var _=Mt.call(l,"constructor")&&l.constructor;return typeof _=="function"&&_ instanceof _&&Pt.call(_)==St},Dt=function(y){return M(y)&&y.nodeType===1&&!Ft(y)};class Ut extends(0,x.DataApiMixin)((0,x.ElementApiMixin)(x.Editor)){constructor(l,_={}){if(!kt(l)&&_.initialData!==void 0)throw new n.CKEditorError("editor-create-initial-data",null);super(_),this.config.get("initialData")===void 0&&this.config.set("initialData",function(j){return kt(j)?(0,n.getDataFromElement)(j):j}(l)),kt(l)&&(this.sourceElement=l),this.model.document.createRoot();const i=!this.config.get("toolbar.shouldNotGroupWhenFull"),u=new P(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:i});this.ui=new f(this,u),(0,x.attachToForm)(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(l,_={}){return new Promise(i=>{const u=new this(l,_);i(u.initPlugins().then(()=>u.ui.init(kt(l)?l:null)).then(()=>u.data.init(u.config.get("initialData"))).then(()=>u.fire("ready")).then(()=>u))})}}function kt(y){return Dt(y)}})(),(window.CKEditor5=window.CKEditor5||{}).editorClassic=q})()},72757:(X,ot,m)=>{X=m.nmd(X);var w=m(25108);/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(yt,g){X.exports=g(m(67294))})(self,yt=>(()=>{var g={703:(n,f,T)=>{"use strict";var C=T(414);function O(){}function G(){}G.resetWarningCache=O,n.exports=function(){function P(gt,ht,it,st,rt,lt){if(lt!==C){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function x(){return P}P.isRequired=P;var M={array:P,bigint:P,bool:P,func:P,number:P,object:P,string:P,symbol:P,any:P,arrayOf:x,element:P,elementType:P,instanceOf:x,node:P,objectOf:x,oneOf:x,oneOfType:x,shape:x,exact:x,checkPropTypes:G,resetWarningCache:O};return M.PropTypes=M,M}},697:(n,f,T)=>{n.exports=T(703)()},414:n=>{"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:n=>{"use strict";n.exports=yt}},q={};function a(n){var f=q[n];if(f!==void 0)return f.exports;var T=q[n]={exports:{}};return g[n](T,T.exports,a),T.exports}a.n=n=>{var f=n&&n.__esModule?()=>n.default:()=>n;return a.d(f,{a:f}),f},a.d=(n,f)=>{for(var T in f)a.o(f,T)&&!a.o(n,T)&&Object.defineProperty(n,T,{enumerable:!0,get:f[T]})},a.o=(n,f)=>Object.prototype.hasOwnProperty.call(n,f),a.r=n=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var E={};return(()=>{"use strict";a.r(E),a.d(E,{CKEditor:()=>Ct,CKEditorContext:()=>fe});var n=a(787),f=a.n(n),T=a(697),C=a.n(T);const O=function(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")},G=typeof m.g=="object"&&m.g&&m.g.Object===Object&&m.g;var P=typeof self=="object"&&self&&self.Object===Object&&self;const x=G||P||Function("return this")(),M=function(){return x.Date.now()};var gt=/\s/;const ht=function(t){for(var e=t.length;e--&&gt.test(t.charAt(e)););return e};var it=/^\s+/;const st=function(t){return t&&t.slice(0,ht(t)+1).replace(it,"")},rt=x.Symbol;var lt=Object.prototype,s=lt.hasOwnProperty,b=lt.toString,d=rt?rt.toStringTag:void 0;const S=function(t){var e=s.call(t,d),o=t[d];try{t[d]=void 0;var r=!0}catch{}var c=b.call(t);return r&&(e?t[d]=o:delete t[d]),c};var A=Object.prototype.toString;const z=function(t){return A.call(t)};var R=rt?rt.toStringTag:void 0;const K=function(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":R&&R in Object(t)?S(t):z(t)},N=function(t){return t!=null&&typeof t=="object"},pt=function(t){return typeof t=="symbol"||N(t)&&K(t)=="[object Symbol]"};var dt=/^[-+]0x[0-9a-f]+$/i,Lt=/^0b[01]+$/i,Pt=/^0o[0-7]+$/i,Mt=parseInt;const St=function(t){if(typeof t=="number")return t;if(pt(t))return NaN;if(O(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=O(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=st(t);var o=Lt.test(t);return o||Pt.test(t)?Mt(t.slice(2),o?2:8):dt.test(t)?NaN:+t};var Ft=Math.max,Dt=Math.min;const Ut=function(t,e,o){var r,c,h,p,k,U,D=0,qt=!1,Ot=!1,ut=!0;if(typeof t!="function")throw new TypeError("Expected a function");function zt(Q){var bt=r,Jt=c;return r=c=void 0,D=Q,p=t.apply(Jt,bt)}function Yt(Q){return D=Q,k=setTimeout(nt,e),qt?zt(Q):p}function Kt(Q){var bt=Q-U;return U===void 0||bt>=e||bt<0||Ot&&Q-D>=h}function nt(){var Q=M();if(Kt(Q))return ft(Q);k=setTimeout(nt,function(bt){var Jt=e-(bt-U);return Ot?Dt(Jt,h-(bt-D)):Jt}(Q))}function ft(Q){return k=void 0,ut&&r?zt(Q):(r=c=void 0,p)}function ge(){var Q=M(),bt=Kt(Q);if(r=arguments,c=this,U=Q,bt){if(k===void 0)return Yt(U);if(Ot)return clearTimeout(k),k=setTimeout(nt,e),zt(U)}return k===void 0&&(k=setTimeout(nt,e)),p}return e=St(e)||0,O(o)&&(qt=!!o.leading,h=(Ot="maxWait"in o)?Ft(St(o.maxWait)||0,e):h,ut="trailing"in o?!!o.trailing:ut),ge.cancel=function(){k!==void 0&&clearTimeout(k),D=0,r=U=c=k=void 0},ge.flush=function(){return k===void 0?p:ft(M())},ge},kt=function(t,e,o){var r=!0,c=!0;if(typeof t!="function")throw new TypeError("Expected a function");return O(o)&&(r="leading"in o?!!o.leading:r,c="trailing"in o?!!o.trailing:c),Ut(t,e,{leading:r,maxWait:e,trailing:c})},y=function(){this.__data__=[],this.size=0},l=function(t,e){return t===e||t!=t&&e!=e},_=function(t,e){for(var o=t.length;o--;)if(l(t[o][0],e))return o;return-1};var i=Array.prototype.splice;const u=function(t){var e=this.__data__,o=_(e,t);return!(o<0)&&(o==e.length-1?e.pop():i.call(e,o,1),--this.size,!0)},j=function(t){var e=this.__data__,o=_(e,t);return o<0?void 0:e[o][1]},v=function(t){return _(this.__data__,t)>-1},B=function(t,e){var o=this.__data__,r=_(o,t);return r<0?(++this.size,o.push([t,e])):o[r][1]=e,this};function I(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}I.prototype.clear=y,I.prototype.delete=u,I.prototype.get=j,I.prototype.has=v,I.prototype.set=B;const Y=I,ct=function(){this.__data__=new Y,this.size=0},F=function(t){var e=this.__data__,o=e.delete(t);return this.size=e.size,o},at=function(t){return this.__data__.get(t)},tt=function(t){return this.__data__.has(t)},J=function(t){if(!O(t))return!1;var e=K(t);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},V=x["__core-js_shared__"];var mt=function(){var t=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();const wt=function(t){return!!mt&&mt in t};var xt=Function.prototype.toString;const $=function(t){if(t!=null){try{return xt.call(t)}catch{}try{return t+""}catch{}}return""};var _t=/^\[object .+?Constructor\]$/,Tt=Function.prototype,H=Object.prototype,et=Tt.toString,vt=H.hasOwnProperty,Vt=RegExp("^"+et.call(vt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Nt=function(t){return!(!O(t)||wt(t))&&(J(t)?Vt:_t).test($(t))},lo=function(t,e){return t?.[e]},jt=function(t,e){var o=lo(t,e);return Nt(o)?o:void 0},Bt=jt(x,"Map"),$t=jt(Object,"create"),uo=function(){this.__data__=$t?$t(null):{},this.size=0},ho=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e};var po=Object.prototype.hasOwnProperty;const fo=function(t){var e=this.__data__;if($t){var o=e[t];return o==="__lodash_hash_undefined__"?void 0:o}return po.call(e,t)?e[t]:void 0};var bo=Object.prototype.hasOwnProperty;const go=function(t){var e=this.__data__;return $t?e[t]!==void 0:bo.call(e,t)},ko=function(t,e){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=$t&&e===void 0?"__lodash_hash_undefined__":e,this};function It(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}It.prototype.clear=uo,It.prototype.delete=ho,It.prototype.get=fo,It.prototype.has=go,It.prototype.set=ko;const ke=It,mo=function(){this.size=0,this.__data__={hash:new ke,map:new(Bt||Y),string:new ke}},vo=function(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null},Zt=function(t,e){var o=t.__data__;return vo(e)?o[typeof e=="string"?"string":"hash"]:o.map},yo=function(t){var e=Zt(this,t).delete(t);return this.size-=e?1:0,e},wo=function(t){return Zt(this,t).get(t)},xo=function(t){return Zt(this,t).has(t)},_o=function(t,e){var o=Zt(this,t),r=o.size;return o.set(t,e),this.size+=o.size==r?0:1,this};function At(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}At.prototype.clear=mo,At.prototype.delete=yo,At.prototype.get=wo,At.prototype.has=xo,At.prototype.set=_o;const jo=At,Eo=function(t,e){var o=this.__data__;if(o instanceof Y){var r=o.__data__;if(!Bt||r.length<199)return r.push([t,e]),this.size=++o.size,this;o=this.__data__=new jo(r)}return o.set(t,e),this.size=o.size,this};function Rt(t){var e=this.__data__=new Y(t);this.size=e.size}Rt.prototype.clear=ct,Rt.prototype.delete=F,Rt.prototype.get=at,Rt.prototype.has=tt,Rt.prototype.set=Eo;const Co=Rt,Oo=function(t,e){for(var o=-1,r=t==null?0:t.length;++o<r&&e(t[o],o,t)!==!1;);return t},me=function(){try{var t=jt(Object,"defineProperty");return t({},"",{}),t}catch{}}(),ve=function(t,e,o){e=="__proto__"&&me?me(t,e,{configurable:!0,enumerable:!0,value:o,writable:!0}):t[e]=o};var Po=Object.prototype.hasOwnProperty;const ye=function(t,e,o){var r=t[e];Po.call(t,e)&&l(r,o)&&(o!==void 0||e in t)||ve(t,e,o)},Qt=function(t,e,o,r){var c=!o;o||(o={});for(var h=-1,p=e.length;++h<p;){var k=e[h],U=r?r(o[k],t[k],k,o,t):void 0;U===void 0&&(U=t[k]),c?ve(o,k,U):ye(o,k,U)}return o},So=function(t,e){for(var o=-1,r=Array(t);++o<t;)r[o]=e(o);return r},we=function(t){return N(t)&&K(t)=="[object Arguments]"};var xe=Object.prototype,To=xe.hasOwnProperty,Io=xe.propertyIsEnumerable;const Ao=we(function(){return arguments}())?we:function(t){return N(t)&&To.call(t,"callee")&&!Io.call(t,"callee")},Xt=Array.isArray,Ro=function(){return!1};var _e=ot&&!ot.nodeType&&ot,je=_e&&!0&&X&&!X.nodeType&&X,Ee=je&&je.exports===_e?x.Buffer:void 0;const Ce=(Ee?Ee.isBuffer:void 0)||Ro;var Wo=/^(?:0|[1-9]\d*)$/;const zo=function(t,e){var o=typeof t;return!!(e=e??9007199254740991)&&(o=="number"||o!="symbol"&&Wo.test(t))&&t>-1&&t%1==0&&t<e},Oe=function(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=9007199254740991};var L={};L["[object Float32Array]"]=L["[object Float64Array]"]=L["[object Int8Array]"]=L["[object Int16Array]"]=L["[object Int32Array]"]=L["[object Uint8Array]"]=L["[object Uint8ClampedArray]"]=L["[object Uint16Array]"]=L["[object Uint32Array]"]=!0,L["[object Arguments]"]=L["[object Array]"]=L["[object ArrayBuffer]"]=L["[object Boolean]"]=L["[object DataView]"]=L["[object Date]"]=L["[object Error]"]=L["[object Function]"]=L["[object Map]"]=L["[object Number]"]=L["[object Object]"]=L["[object RegExp]"]=L["[object Set]"]=L["[object String]"]=L["[object WeakMap]"]=!1;const Lo=function(t){return N(t)&&Oe(t.length)&&!!L[K(t)]},te=function(t){return function(e){return t(e)}};var Pe=ot&&!ot.nodeType&&ot,Ht=Pe&&!0&&X&&!X.nodeType&&X,ee=Ht&&Ht.exports===Pe&&G.process;const Wt=function(){try{var t=Ht&&Ht.require&&Ht.require("util").types;return t||ee&&ee.binding&&ee.binding("util")}catch{}}();var Se=Wt&&Wt.isTypedArray;const Mo=Se?te(Se):Lo;var Fo=Object.prototype.hasOwnProperty;const Te=function(t,e){var o=Xt(t),r=!o&&Ao(t),c=!o&&!r&&Ce(t),h=!o&&!r&&!c&&Mo(t),p=o||r||c||h,k=p?So(t.length,String):[],U=k.length;for(var D in t)!e&&!Fo.call(t,D)||p&&(D=="length"||c&&(D=="offset"||D=="parent")||h&&(D=="buffer"||D=="byteLength"||D=="byteOffset")||zo(D,U))||k.push(D);return k};var Do=Object.prototype;const oe=function(t){var e=t&&t.constructor;return t===(typeof e=="function"&&e.prototype||Do)},Ie=function(t,e){return function(o){return t(e(o))}},Uo=Ie(Object.keys,Object);var No=Object.prototype.hasOwnProperty;const Bo=function(t){if(!oe(t))return Uo(t);var e=[];for(var o in Object(t))No.call(t,o)&&o!="constructor"&&e.push(o);return e},Ae=function(t){return t!=null&&Oe(t.length)&&!J(t)},re=function(t){return Ae(t)?Te(t):Bo(t)},$o=function(t,e){return t&&Qt(e,re(e),t)},Ho=function(t){var e=[];if(t!=null)for(var o in Object(t))e.push(o);return e};var Go=Object.prototype.hasOwnProperty;const Ko=function(t){if(!O(t))return Ho(t);var e=oe(t),o=[];for(var r in t)(r!="constructor"||!e&&Go.call(t,r))&&o.push(r);return o},ne=function(t){return Ae(t)?Te(t,!0):Ko(t)},Vo=function(t,e){return t&&Qt(e,ne(e),t)};var Re=ot&&!ot.nodeType&&ot,We=Re&&!0&&X&&!X.nodeType&&X,ze=We&&We.exports===Re?x.Buffer:void 0,Le=ze?ze.allocUnsafe:void 0;const Zo=function(t,e){if(e)return t.slice();var o=t.length,r=Le?Le(o):new t.constructor(o);return t.copy(r),r},Qo=function(t,e){var o=-1,r=t.length;for(e||(e=Array(r));++o<r;)e[o]=t[o];return e},qo=function(t,e){for(var o=-1,r=t==null?0:t.length,c=0,h=[];++o<r;){var p=t[o];e(p,o,t)&&(h[c++]=p)}return h},Me=function(){return[]};var Yo=Object.prototype.propertyIsEnumerable,Fe=Object.getOwnPropertySymbols;const ie=Fe?function(t){return t==null?[]:(t=Object(t),qo(Fe(t),function(e){return Yo.call(t,e)}))}:Me,Jo=function(t,e){return Qt(t,ie(t),e)},De=function(t,e){for(var o=-1,r=e.length,c=t.length;++o<r;)t[c+o]=e[o];return t},ce=Ie(Object.getPrototypeOf,Object),Ue=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)De(e,ie(t)),t=ce(t);return e}:Me,Xo=function(t,e){return Qt(t,Ue(t),e)},Ne=function(t,e,o){var r=e(t);return Xt(t)?r:De(r,o(t))},tr=function(t){return Ne(t,re,ie)},er=function(t){return Ne(t,ne,Ue)},ae=jt(x,"DataView"),se=jt(x,"Promise"),le=jt(x,"Set"),de=jt(x,"WeakMap");var Be="[object Map]",$e="[object Promise]",He="[object Set]",Ge="[object WeakMap]",Ke="[object DataView]",or=$(ae),rr=$(Bt),nr=$(se),ir=$(le),cr=$(de),Et=K;(ae&&Et(new ae(new ArrayBuffer(1)))!=Ke||Bt&&Et(new Bt)!=Be||se&&Et(se.resolve())!=$e||le&&Et(new le)!=He||de&&Et(new de)!=Ge)&&(Et=function(t){var e=K(t),o=e=="[object Object]"?t.constructor:void 0,r=o?$(o):"";if(r)switch(r){case or:return Ke;case rr:return Be;case nr:return $e;case ir:return He;case cr:return Ge}return e});const ue=Et;var ar=Object.prototype.hasOwnProperty;const sr=function(t){var e=t.length,o=new t.constructor(e);return e&&typeof t[0]=="string"&&ar.call(t,"index")&&(o.index=t.index,o.input=t.input),o},Ve=x.Uint8Array,he=function(t){var e=new t.constructor(t.byteLength);return new Ve(e).set(new Ve(t)),e},lr=function(t,e){var o=e?he(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.byteLength)};var dr=/\w*$/;const ur=function(t){var e=new t.constructor(t.source,dr.exec(t));return e.lastIndex=t.lastIndex,e};var Ze=rt?rt.prototype:void 0,Qe=Ze?Ze.valueOf:void 0;const hr=function(t){return Qe?Object(Qe.call(t)):{}},pr=function(t,e){var o=e?he(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.length)},fr=function(t,e,o){var r=t.constructor;switch(e){case"[object ArrayBuffer]":return he(t);case"[object Boolean]":case"[object Date]":return new r(+t);case"[object DataView]":return lr(t,o);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return pr(t,o);case"[object Map]":case"[object Set]":return new r;case"[object Number]":case"[object String]":return new r(t);case"[object RegExp]":return ur(t);case"[object Symbol]":return hr(t)}};var qe=Object.create;const br=function(){function t(){}return function(e){if(!O(e))return{};if(qe)return qe(e);t.prototype=e;var o=new t;return t.prototype=void 0,o}}(),gr=function(t){return typeof t.constructor!="function"||oe(t)?{}:br(ce(t))},kr=function(t){return N(t)&&ue(t)=="[object Map]"};var Ye=Wt&&Wt.isMap;const mr=Ye?te(Ye):kr,vr=function(t){return N(t)&&ue(t)=="[object Set]"};var Je=Wt&&Wt.isSet;const yr=Je?te(Je):vr;var Xe="[object Arguments]",to="[object Function]",eo="[object Object]",W={};W[Xe]=W["[object Array]"]=W["[object ArrayBuffer]"]=W["[object DataView]"]=W["[object Boolean]"]=W["[object Date]"]=W["[object Float32Array]"]=W["[object Float64Array]"]=W["[object Int8Array]"]=W["[object Int16Array]"]=W["[object Int32Array]"]=W["[object Map]"]=W["[object Number]"]=W[eo]=W["[object RegExp]"]=W["[object Set]"]=W["[object String]"]=W["[object Symbol]"]=W["[object Uint8Array]"]=W["[object Uint8ClampedArray]"]=W["[object Uint16Array]"]=W["[object Uint32Array]"]=!0,W["[object Error]"]=W[to]=W["[object WeakMap]"]=!1;const wr=function t(e,o,r,c,h,p){var k,U=1&o,D=2&o,qt=4&o;if(r&&(k=h?r(e,c,h,p):r(e)),k!==void 0)return k;if(!O(e))return e;var Ot=Xt(e);if(Ot){if(k=sr(e),!U)return Qo(e,k)}else{var ut=ue(e),zt=ut==to||ut=="[object GeneratorFunction]";if(Ce(e))return Zo(e,U);if(ut==eo||ut==Xe||zt&&!h){if(k=D||zt?{}:gr(e),!U)return D?Xo(e,Vo(k,e)):Jo(e,$o(k,e))}else{if(!W[ut])return h?e:{};k=fr(e,ut,U)}}p||(p=new Co);var Yt=p.get(e);if(Yt)return Yt;p.set(e,k),yr(e)?e.forEach(function(nt){k.add(t(nt,o,r,nt,e,p))}):mr(e)&&e.forEach(function(nt,ft){k.set(ft,t(nt,o,r,ft,e,p))});var Kt=Ot?void 0:(qt?D?er:tr:D?ne:re)(e);return Oo(Kt||e,function(nt,ft){Kt&&(nt=e[ft=nt]),ye(k,ft,t(nt,o,r,ft,e,p))}),k},xr=function(t,e){return wr(t,5,e=typeof e=="function"?e:void 0)};var _r=Function.prototype,jr=Object.prototype,oo=_r.toString,Er=jr.hasOwnProperty,Cr=oo.call(Object);const Or=function(t){if(!N(t)||K(t)!="[object Object]")return!1;var e=ce(t);if(e===null)return!0;var o=Er.call(e,"constructor")&&e.constructor;return typeof o=="function"&&o instanceof o&&oo.call(o)==Cr},Pr=function(t){return N(t)&&t.nodeType===1&&!Or(t)};function pe(t,e=new Set){const o=[t],r=new Set;let c=0;for(;o.length>c;){const h=o[c++];if(!(r.has(h)||Sr(h)||e.has(h)))if(r.add(h),h[Symbol.iterator])try{for(const p of h)o.push(p)}catch{}else for(const p in h)p!=="defaultValue"&&o.push(h[p])}return r}function Sr(t){const e=Object.prototype.toString.call(t),o=typeof t;return o==="number"||o==="boolean"||o==="string"||o==="symbol"||o==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||t==null||t._watchdogExcluded===!0||t instanceof EventTarget||t instanceof Event}function ro(t,e,o=new Set){if(t===e&&typeof(r=t)=="object"&&r!==null)return!0;var r;const c=pe(t,o),h=pe(e,o);for(const p of c)if(h.has(p))return!0;return!1}class no{constructor(e){if(this.crashes=[],this.state="initializing",this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._now=Date.now,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=o=>{const r=o.error||o.reason;r instanceof Error&&this._handleError(r,o)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,o){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(o)}off(e,o){this._listeners[e]=this._listeners[e].filter(r=>r!==o)}_fire(e,...o){const r=this._listeners[e]||[];for(const c of r)c.apply(this,[null,...o])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,o){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:o.filename,lineno:o.lineno,colno:o.colno,date:this._now()});const r=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:r}),r?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}class io extends no{constructor(e,o={}){super(o),this._editor=null,this._throttledSave=kt(this._save.bind(this),typeof o.saveInterval=="number"?o.saveInterval:5e3),this._creator=(r,c)=>e.create(r,c),this._destructor=r=>r.destroy()}get editor(){return this._editor}get _item(){return this._editor}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{w.error("An error happened during the editor destroying.",e)}).then(()=>{if(typeof this._elementOrData=="string")return this.create(this._data,this._config,this._config.context);{const e=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,e,e.context)}}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,o=this._config,r){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=e,this._config=this._cloneEditorConfiguration(o)||{},this._config.context=r,this._creator(e,this._config))).then(c=>{this._editor=c,c.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=c.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=e}catch(o){w.error(o,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e={};for(const o of this._editor.model.document.getRootNames())e[o]=this._editor.data.get({rootName:o});return e}_isErrorComingFromThisItem(e){return ro(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return xr(e,(o,r)=>Pr(o)||r==="context"?o:void 0)}}const Z=new Array(256).fill("").map((t,e)=>("0"+e.toString(16)).slice(-2)),Gt=Symbol("MainQueueId");class co extends no{constructor(e,o={}){super(o),this._watchdogs=new Map,this._watchdogConfig=o,this._context=null,this._contextProps=new Set,this._actionQueues=new Tr,this._creator=r=>e.create(r),this._destructor=r=>r.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}get context(){return this._context}create(e={}){return this._actionQueues.enqueue(Gt,()=>(this._contextConfig=e,this._create()))}getItem(e){return this._getWatchdog(e)._item}getItemState(e){return this._getWatchdog(e).state}add(e){const o=ao(e);return Promise.all(o.map(r=>this._actionQueues.enqueue(r.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let c;if(this._watchdogs.has(r.id))throw new Error(`Item with the given id is already added: '${r.id}'.`);if(r.type==="editor")return c=new io(this._watchdogConfig),c.setCreator(r.creator),c._setExcludedProperties(this._contextProps),r.destructor&&c.setDestructor(r.destructor),this._watchdogs.set(r.id,c),c.on("error",(h,{error:p,causesRestart:k})=>{this._fire("itemError",{itemId:r.id,error:p}),k&&this._actionQueues.enqueue(r.id,()=>new Promise(U=>{c.on("restart",function D(){c.off("restart",D),this._fire("itemRestart",{itemId:r.id}),U()}.bind(this))}))}),c.create(r.sourceElementOrData,r.config,this._context);throw new Error(`Not supported item type: '${r.type}'.`)})))}remove(e){const o=ao(e);return Promise.all(o.map(r=>this._actionQueues.enqueue(r,()=>{const c=this._getWatchdog(r);return this._watchdogs.delete(r),c.destroy()})))}destroy(){return this._actionQueues.enqueue(Gt,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Gt,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(e=>{w.error("An error happened during destroying the context or items.",e)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(e=>(this._context=e,this._contextProps=pe(this._context),Promise.all(Array.from(this._watchdogs.values()).map(o=>(o._setExcludedProperties(this._contextProps),o.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const e=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(o=>o.destroy())).then(()=>this._destructor(e))})}_getWatchdog(e){const o=this._watchdogs.get(e);if(!o)throw new Error(`Item with the given id was not registered: ${e}.`);return o}_isErrorComingFromThisItem(e){for(const o of this._watchdogs.values())if(o._isErrorComingFromThisItem(e))return!1;return ro(this._context,e.context)}}class Tr{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._actions=new WeakMap,this._lastActionId=0,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,o){const r=e===Gt;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const c=(r?Promise.all(this._queues.values()):Promise.all([this._queues.get(Gt),this._queues.get(e)])).then(o),h=c.catch(()=>{});return this._queues.set(e,h),c.finally(()=>{this._activeActions--,this._queues.get(e)===h&&this._activeActions===0&&this._onEmptyCallbacks.forEach(p=>p())})}}function ao(t){return Array.isArray(t)?t:[t]}const so=f().createContext("contextWatchdog");class fe extends f().Component{constructor(e,o){super(e,o),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}async shouldComponentUpdate(e){return e.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(e.config)),e.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(e.config),!0):this.props.children!==e.children}render(){return f().createElement(so.Provider,{value:this.contextWatchdog},this.props.children)}async componentWillUnmount(){await this._destroyContext()}async _initializeContextWatchdog(e){this.contextWatchdog=new co(this.props.context),this.contextWatchdog.on("error",(o,r)=>{this.props.onError(r.error,{phase:"runtime",willContextRestart:r.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(e).catch(o=>{this.props.onError(o,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}fe.defaultProps={isLayoutReady:!0,onError:(t,e)=>w.error(t,e)},fe.propTypes={id:C().string,isLayoutReady:C().bool,context:C().func,config:C().object,onReady:C().func,onError:C().func};const be="Lock from React integration (@ckeditor/ckeditor5-react)";class Ct extends f().Component{constructor(e){super(e),this.editorDestructionInProgress=null,this.domContainer=f().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:o}=window;if(o){const[r]=o.split(".").map(Number);r<34&&w.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else w.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(e){return!!this.editor&&(e.id!==this.props.id||(this._shouldUpdateEditor(e)&&this.editor.setData(e.data),"disabled"in e&&(e.disabled?this.editor.enableReadOnlyMode(be):this.editor.disableReadOnlyMode(be)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return f().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.watchdog||(this.context instanceof co?this.watchdog=new Ir(this.context):this.watchdog=new Ct._EditorWatchdog(this.props.editor),this.watchdog.setCreator((e,o)=>this._createEditor(e,o)),this.watchdog.on("error",(e,{error:o,causesRestart:r})=>{this.props.onError(o,{phase:"runtime",willEditorRestart:r})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(e=>this.props.onError(e,{phase:"initialization",willEditorRestart:!1})))}_createEditor(e,o){return this.props.editor.create(e,o).then(r=>{"disabled"in this.props&&this.props.disabled&&r.enableReadOnlyMode(be);const c=r.model.document,h=r.editing.view.document;return c.on("change:data",p=>{this.props.onChange&&this.props.onChange(p,r)}),h.on("focus",p=>{this.props.onFocus&&this.props.onFocus(p,r)}),h.on("blur",p=>{this.props.onBlur&&this.props.onBlur(p,r)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(r)}),r})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(e=>{setTimeout(()=>{this.watchdog?this.watchdog.destroy().then(()=>{this.watchdog=null,e()}):e()})})}_shouldUpdateEditor(e){return this.props.data!==e.data&&this.editor.getData()!==e.data}_getConfig(){return this.props.data&&this.props.config.initialData&&w.warn("Editor data should be provided either using `config.initialData` or `data` properties. The config property is over the data value and the first one will be used when specified both."),{...this.props.config,initialData:this.props.config.initialData||this.props.data||""}}}class Ir{constructor(e){this._contextWatchdog=e,this._id=function(){const o=4294967296*Math.random()>>>0,r=4294967296*Math.random()>>>0,c=4294967296*Math.random()>>>0,h=4294967296*Math.random()>>>0;return"e"+Z[o>>0&255]+Z[o>>8&255]+Z[o>>16&255]+Z[o>>24&255]+Z[r>>0&255]+Z[r>>8&255]+Z[r>>16&255]+Z[r>>24&255]+Z[c>>0&255]+Z[c>>8&255]+Z[c>>16&255]+Z[c>>24&255]+Z[h>>0&255]+Z[h>>8&255]+Z[h>>16&255]+Z[h>>24&255]}()}setCreator(e){this._creator=e}create(e,o){return this._contextWatchdog.add({sourceElementOrData:e,config:o,creator:this._creator,id:this._id,type:"editor"})}on(e,o){this._contextWatchdog.on("itemError",(r,{itemId:c,causesRestart:h,error:p})=>{c===this._id&&o(null,{error:p,causesRestart:h})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}Ct.contextType=so,Ct.propTypes={editor:C().func.isRequired,data:C().string,config:C().object,onChange:C().func,onReady:C().func,onFocus:C().func,onBlur:C().func,onError:C().func,disabled:C().bool,onInit:(t,e)=>{if(t[e])return new Error('The "onInit" property is not supported anymore by the CKEditor component. Use the "onReady" property instead.')}},Ct.defaultProps={config:{},onError:(t,e)=>w.error(t,e)},Ct._EditorWatchdog=io})(),E})())},92129:(X,ot,m)=>{"use strict";m.r(ot),m.d(ot,{default:()=>_});var w=m(67294),yt=m(45697),g=m.n(yt),q=m(71893),a=m(72757),E=m(28702),n=m(68547),f=m(50361),T=m.n(f),C=m(57040),O=m(66923),G=m.n(O);const P=async(i,u)=>{if(!u)return;const{plugins:j=[]}=i,v=[...j.map(F=>F.pluginName)],B=[{name:"DocumentList",module:"ckeditor5-list"},{name:"TextPartLanguage",module:"ckeditor5-language"},{name:"Alignment",module:"ckeditor5-alignment"},{name:"Autosave",module:"ckeditor5-autosave"},{name:"BlockQuote",module:"ckeditor5-block-quote"},{name:"CodeBlock",module:"ckeditor5-code-block"},{name:"Heading",module:"ckeditor5-heading"},{name:"HtmlEmbed",module:"ckeditor5-html-embed"},{name:"GeneralHtmlSupport",module:"ckeditor5-html-support"},{name:"HorizontalLine",module:"ckeditor5-horizontal-line"},{name:"MediaEmbed",module:"ckeditor5-media-embed"},{name:"Image",module:"ckeditor5-image"},{name:"Indent",module:"ckeditor5-indent"},{name:"Link",module:"ckeditor5-link"},{name:"RemoveFormat",module:"ckeditor5-remove-format"},{name:"Table",module:"ckeditor5-table"},{name:"WordCount",module:"ckeditor5-word-count"},{name:"FindAndReplace",module:"ckeditor5-find-and-replace"},{name:"SpecialCharacters",module:"ckeditor5-special-characters"},{name:"PageBreak",module:"ckeditor5-page-break"},{name:"SourceEditing",module:"ckeditor5-source-editing"},{name:"Highlight",module:"ckeditor5-highlight"},{name:"Style",module:"ckeditor5-style"}],I=["Bold","Code","Italic","Strikethrough","Subscript","Superscript","Underline"],Y=["FontBackgroundColor","FontColor","FontFamily","FontSize"],ct=["List","DocumentList"];await Promise.all(B.filter(({name:F})=>v.includes(F)).map(async({module:F})=>await m(74060)(`./${F}/build/translations/${u}.js`).catch(()=>null))),v.some(F=>I.includes(F))&&await m(98996)(`./${u}.js`).catch(()=>null),v.some(F=>ct.includes(F))&&await m(44042)(`./${u}.js`).catch(()=>null),v.some(F=>Y.includes(F))&&await m(42940)(`./${u}.js`).catch(()=>null)},x=async i=>{const u=new URLSearchParams(window.location.search),v=Object.fromEntries(u.entries())["plugins[i18n][locale]"],B=n.auth.getUserInfo().preferedLanguage,{ui:I=B||"en",content:Y,textPartLanguage:ct,ignorei18n:F}=i.language||{};if(v){const at=v.split("-")[0];i.language={ui:typeof i.language=="string"?i.language:I,content:F?Y:at,textPartLanguage:ct},await P(i,i.language.ui),await P(i,i.language.content)}else typeof i.language=="object"?(await P(i,i.language.ui),await P(i,i.language.content)):typeof i.language=="string"?await P(i,i.language):(i.language=B,await P(i,B))},M=i=>{const{configs:u,configsOverwrite:j}=globalThis.CKEditorConfig||{};let v;return j?v=u:(v=C.Z,u&&Object.keys(u).map(I=>{C.Z.hasOwnProperty(I)?(v[I].fields={...C.Z[I].field,...u[I].field},v[I].styles=u[I].styles||C.Z[I].styles,v[I].editorConfig={...C.Z[I].editorConfig,...u[I].editorConfig}):v[I]=u[I]})),T()(v[i])},gt=(i,{responsiveDimensions:u},j)=>{const v=i.editorConfig?.plugins?[...i.editorConfig.plugins.map(B=>B.pluginName)]:[];v.includes("StrapiMediaLib")&&(i.editorConfig.strapiMediaLib={toggle:j}),v.includes("StrapiUploadAdapter")&&(i.editorConfig.strapiUploadAdapter={uploadUrl:`${strapi.backendURL}/upload`,headers:{Authorization:"Bearer "+n.auth.getToken()},backendUrl:strapi.backendURL,responsive:u}),v.includes("WordCount")&&(i.editorConfig.WordCountPlugin=!0)},ht=i=>(0,n.request)(`/${G()}/config/${i}`,{method:"GET"}),it=async(i,u)=>{const j=M(i),v=await ht("upload");return gt(j,v,u),await x(j.editorConfig),{currentConfig:j,uploadPluginConfig:v}},st=q.css`
  .ck {
    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);
    --ck-color-mention-background: hsla(341, 100%, 30%, 0.1);
    --ck-color-mention-text: hsl(341, 100%, 30%);
    --ck-color-table-caption-background: hsl(0, 0%, 97%);
    --ck-color-table-caption-text: hsl(0, 0%, 20%);
    --ck-highlight-marker-blue: hsl(201, 97%, 72%);
    --ck-highlight-marker-green: hsl(120, 93%, 68%);
    --ck-highlight-marker-pink: hsl(345, 96%, 73%);
    --ck-highlight-marker-yellow: hsl(60, 97%, 73%);
    --ck-highlight-pen-green: hsl(112, 100%, 27%);
    --ck-highlight-pen-red: hsl(0, 85%, 49%);
    --ck-image-style-spacing: 1.5em;
    --ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
    --ck-todo-list-checkmark-size: 16px;
  }

  
  .ck.ck-sticky-panel .ck-sticky-panel__content_sticky {
    top: 64px !important;
  }
  .ck.ck-reset.ck-dropdown__panel.ck-dropdown__panel_sw.ck-dropdown__panel-visible {
    border-radius: 4px;
  }

  .ck-editor__main {
    
    --ck-font-face: "Source Sans Pro", system-ui, Roboto, "Helvetica Neue", "Helvetica", Arial, sans-serif;
    
    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

    * {
      font: revert;
      margin: revert;
    }


    h1 {
      font-size: 2.3em;
    }

    h2 {
      font-size: 1.84em;
    }

    h3 {
      font-size: 1.48em;
    }

    h4 {
      font-size: 1.22em;
    }

    h5 {
      font-size: 1.06em;
    }

    h6 {
      font-size: 1em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.2em;
      padding-top: .8em;
      margin-bottom: .4em
    }

    blockquote,
    ol,
    p,
    ul {
      font-size: 1em;
      line-height: 1.6em;
      padding-top: .2em;
      margin-bottom: var(--ck-spacing-large)
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: 0.75em;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    a {
      text-decoration: none;
      color: #1b3af2;
    }

    a:hover {
      text-decoration: underline;
    }

    .table {
      margin: 0;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul,
    ol {
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub;
    }

    sup {
      vertical-align: super;
    }

    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
      transition-property: border-color, box-shadow, max-height;
      transition-timing-function: ease-in-out;
      transition-duration: 0.5s;
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid var(--ck-color-base-border);
        /* border: var(--ck-focus-ring); */
        box-shadow: none;
        transition-property: border-color, box-shadow, max-height;
        transition-timing-function: ease-in-out;
        transition-duration: 0.5s;
      }
    }

    .ck-focused,
    .ck-blurred {
      overflow-y: auto;
      overflow-x: hidden;
      transition: max-height 0.5s ease-in-out;
      ::-webkit-scrollbar {
        width: 7px;
      }
      ::-webkit-scrollbar-track {
        background: var(--ck-scroll-track-background);
        border: none;
      }
      ::-webkit-scrollbar-thumb {
        transition: background 2s;
        background: var(--ck-scroll-thumb-background);
        border: 1px solid var(--ck-scroll-thumb-border-color);
      }
      ::-webkit-scrollbar-thumb:hover {
        transition: background 2s;
        background: var(--ck-scroll-thumb-hover-background);
      }
      ::-webkit-scrollbar-thumb:active {
        background: var(--ck-scroll-thumb-active-background);
      }
    }
  }

  .ck .ck-source-editing-area textarea{
    color: var(--ck-color-text);
    background-color: var(--ck-color-base-background);
    border: 1px solid var(--ck-color-base-border) !important;
    box-shadow: none !important;
  }

  .ck .ck-block-toolbar-button {
    min-width: 0 !important;
    min-height: 0 !important;
    width: 20px !important;
    height: 25px !important;
    margin-left: -2px !important ;
    
    & svg {
      color: var(--ck-color-text) !important;
      position: absolute;
      width: 20px;
      height: 20px;
    }
  }

  .ck-word-count {
    margin-top: 0.3rem;
    display: flex;
    justify-content: end;
    gap: 0.3rem;
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: lowercase;
    /* color: #b3b3c4; */
  }

  .ck[dir=rtl]{
    .ck-block-toolbar-button {
      margin-left: 2px !important ;
    }
    & + div{
      justify-content: flex-start;
      & > .ck-word-count {
          & > div:first-child{
            order: 2;
          }
          & > div:last-child{
            order: 1;
          }
      }
    }
  }
`,rt=q.css`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: #e4e3ff !important;
    --ck-focus-ring: 1px solid rgb(73, 69, 255) !important;
    --ck-color-button-default-hover-background: #F0F0FF !important;

    .ck .ck-color-picker-save {
      & > svg {
        stroke: #7b79ff !important;
      }
    }
  }

  .ck {
    --ck-scroll-track-background: rgb(242, 242, 242);
    --ck-scroll-thumb-background: rgb(236, 236, 236);
    --ck-scroll-thumb-border-color: #cdcdf8;
    --ck-scroll-thumb-hover-background: #f0f0ff;
    --ck-scroll-thumb-active-background: #d9d8ff;

    --ck-color-editor-base-text: #001234;
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #dcdce4;
    --ck-color-base-background: #ffffff;
    --ck-custom-background: #ffffff;
    --ck-custom-foreground: #dedede;
    --ck-custom-border: #dcdce4;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #f0f0ff;
    --ck-color-base-active-focus: #e2e2fd;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);

    --ck-color-focus-border: rgb(73, 69, 255);

    --ck-color-text: #32324d;
    --ck-color-shadow-drop: hsla(250, 31%, 80%, 0.1);
    --ck-color-shadow-inner: hsla(250, 31%, 80%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: var(--ck-custom-background);
    --ck-color-button-default-hover-background: #f0f0ff;
    --ck-color-button-default-active-background: #f6f6f9;
    --ck-color-button-default-active-shadow: #dedefb;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: rgb(73, 69, 255);
    --ck-color-button-on-background: #f0f0ff;
    --ck-color-button-on-hover-background: #e6e9fc;
    --ck-color-button-on-active-background: #f6f6f9;
    --ck-color-button-on-active-shadow: #cdcdf8;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(0, 0%, 97%);
    --ck-color-input-disabled-border: rgb(214, 214, 214);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #f4f4fb;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #271fe2;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #cfcffa;
    --ck-color-widget-hover-border: #c9c9e4;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(209, 89%, 33%);
  }
`,lt=q.css`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: rgba(106, 114, 143, 0.4) !important;
    --ck-focus-ring: 1px solid #4945ff !important;
    --ck-color-button-default-hover-background: #262630 !important;

    .ck .ck-color-picker > svg {
      color: #ffffff !important;
    }
    .ck .ck-color-picker-save {
      & > svg {
        stroke: #ffffff !important;
      }
      & > svg > #primary,
      #primary-2 {
        stroke: #7b79ff !important;
      }
    }
  }

  .ck {
    --ck-scroll-track-background: #3d3d57;
    --ck-scroll-thumb-background: #181826;
    --ck-scroll-thumb-border-color: rgb(70, 70, 70);
    --ck-scroll-thumb-hover-background: #202033;
    --ck-scroll-thumb-active-background: #2b2b45;

    --ck-color-editor-base-text: rgb(236, 236, 236);
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #4a4a6a;
    --ck-color-base-background: #212134;
    --ck-custom-background: #181826;
    --ck-custom-foreground: #26263b;
    --ck-custom-border: #4a4a6a;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-focus-outer-shadow: #212134;

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #2e2e5c;
    --ck-color-base-active-focus: #28284d;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);
    --ck-color-focus-border: #6765bd;
    --ck-color-text: hsl(0, 0%, 93%);
    --ck-color-shadow-drop: hsla(0, 0%, 0%, 0.2);
    --ck-color-shadow-inner: hsla(0, 0%, 0%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: rgb(33, 33, 52);

    --ck-color-button-default-hover-background: #262630;
    --ck-color-button-default-active-background: #3c3c47;
    --ck-color-button-default-active-shadow: #3c3c47;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: #7b79ff;
    --ck-color-button-on-background: #2b2b36;
    --ck-color-button-on-hover-background: #30303b;
    --ck-color-button-on-active-background: #3c3c47;
    --ck-color-button-on-active-shadow: #3c3c47;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(255, 4%, 21%);
    --ck-color-input-disabled-border: hsl(250, 3%, 38%);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #121221;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #ffffff;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #7c7c96;
    --ck-color-widget-hover-border: #666687;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(216, 100%, 75%);
  }

`,s=q.css`

/* --- expanding --- */

.ck.ck-editor__main .ck-blurred {
    max-height: 200px;
  }
.ck.ck-editor__main .ck-focused {
  	max-height: 700px;
  }

/* --- color-grid --- */

.ck.ck-color-ui-dropdown {
	--ck-color-grid-tile-size: 22px !important;
}
.ck.ck-color-grid__tile{
	width:auto;
}
.ck.ck-color-ui-dropdown .ck-color-grid {
	grid-gap: 2px;
}
.ck.ck-color-ui-dropdown .ck-color-grid .ck-button {
	border-radius: 2px;
}
.ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:hover:not(.ck-disabled),
.ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:focus:not(.ck-disabled) {
	z-index: 1;
	transform: scale(1.1);
	border-radius: 2px;
}

/* --- color-picker --- */

.ck[dir=rtl] .ck-color-input{
  margin: 0 8px 8px 0 !important;
  padding: 3px 5px 0 0 !important;
}

.ck .ck-color-input{
  margin: 0 0 8px 8px ;
  padding: 3px 0 0 6px;
  border-radius:2px ;
  font-size:.77rem !important;
  width: 58px !important;
}
.ck .ck-color-picker{
  margin: 0 3px 8px 3px;
  border-radius:2px !important;
  width: 27px !important;
}
.ck .ck-color-picker-save{
  margin: 0 0 8px 0;
  border-radius:2px !important;
  width:27px !important;
}


/* ---- Style feature config ------------------------------------------------------ */

:root {
	--ck-georgia-serif-font-stack: Georgia,Times,Times New Roman,serif;
}

.ck-content h1.document-title {
	font-family: var(--ck-georgia-serif-font-stack);
	font-size: 50px;
	font-weight: bold;
	border: 0;
}

.ck-content h2.document-subtitle {
	font-family: var(--ck-georgia-serif-font-stack);
	font-size: 20px;
	font-weight: bold;
	color: #d1d1d1;
	letter-spacing: 10px;
}

.ck-content p.callout {
	--border-color: #e91e1e;
	padding: 1.2em 2em;
	border: 1px solid var(--border-color);
	border-left: 10px solid var(--border-color);
	background: #fff9fb;
	border-radius: 5px;
	margin: 1.5em 2em;
	box-shadow: 5px 5px 0 #ffe6ef;
}

.ck-content blockquote.side-quote {
	font-family: var(--ck-georgia-serif-font-stack);
	font-style: normal;
	float: right;
	width: 35%;
	position: relative;
	border: 0;
	overflow: visible;
	z-index: 1;
	margin-left: 1em;
}

.ck-content blockquote.side-quote::before {
	content: "“";
	position: absolute;
	top: -37px;
	left: -10px;
	display: block;
	font-size: 200px;
	color: #e7e7e7;
	z-index: -1;
	line-height: 1;
}

.ck-content blockquote.side-quote p {
	font-size: 2em;
	line-height: 1;
}

.ck-content blockquote.side-quote p:last-child:not(:first-child) {
	font-size: 1.3em;
	text-align: right;
	color: #555;
}

.ck-content span.needs-clarification {
	outline: 1px dashed #c8a24b;
	background: #ffe19c;
	border-radius: 2px;
	position: relative;
}

.ck-content span.needs-clarification::after {
	content: "?";
	display: inline-block;
	color: #fff;
	background: #3b3b3b;
	font-size: 12px;
	vertical-align: super;
	width: 12px;
	height: 12px;
	line-height: 12px;
	border-radius: 10px;
	text-align: center;
	position: absolute;
	right: -6px;
	top: -6px;
	font-weight: bold;
	letter-spacing: initial;
}

.ck-content span.wide-spacing {
	letter-spacing: 0.3em;
}

.ck-content span.small-caps {
	font-variant: small-caps;
}

.ck-content span.spoiler {
	background: #000;
	color: #000;
}

.ck-content span.spoiler:hover {
	background: #000;
	color: #fff;
}

.ck-content pre.stylish-code {
	border-color: transparent;
	margin-left: 2em;
	margin-right: 2em;
	border-radius: 10px;
}

.ck-content pre.stylish-code::before {
	content: "";
	display: block;
	height: 13px;
	background: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCAxMyI+CiAgPGNpcmNsZSBjeD0iNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGMzZCNUMiLz4KICA8Y2lyY2xlIGN4PSIyNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGOUJFNEQiLz4KICA8Y2lyY2xlIGN4PSI0Ny41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiM1NkM0NTMiLz4KPC9zdmc+Cg==);
	margin-bottom: 8px;
	background-repeat: no-repeat;
}

.ck-content pre.stylish-code-dark,
.ck-content pre.stylish-code-bright {
	padding: 1em;
}

.ck-content pre.stylish-code-dark {
	background: #272822;
	box-shadow: 5px 5px 0 #0000001f;
	color: white;
}

.ck-content pre.stylish-code-dark code {
	color: white;
}

.ck-content pre.stylish-code-bright {
	background: #dddfe0;
	color: #000;
	box-shadow: 5px 5px 0 #b3b3b3;
}

.ck-content pre.stylish-code-bright code {
	color: #222;
}

`,d={common:st,light:rt,dark:lt,additional:s},S=()=>{const i=localStorage.getItem("STRAPI_THEME")||"light",{theme:u,themeOverwrite:j}=globalThis.CKEditorConfig||{},v=j?u:{...d,...u};return q.createGlobalStyle`
       ${v.common}
       ${v[i]}
       ${v.additional}
   `},A=({isOpen:i,onChange:u,onToggle:j,editor:v,uploadConfig:{responsiveDimensions:B}})=>{const{components:I}=(0,n.useLibrary)(),Y=I["media-library"],ct=at=>{let tt="";at.map(({name:mt,url:wt,alt:xt,formats:$,mime:_t})=>{if(_t.includes("image"))if($&&B){let Tt="",H=Object.keys($).sort((et,vt)=>$[et].width-$[vt].width);H.map(et=>Tt+=(0,n.prefixFileUrlWithBackendUrl)($[et].url)+` ${$[et].width}w,`),tt+=`<img src="${wt}" alt="${xt}" width="${$[H[H.length-1]].width}px" srcset="${Tt}" />`}else tt+=`<img src="${wt}" alt="${xt}" />`;else _t.includes("application/pdf")&&(tt=`<a href="${(0,n.prefixFileUrlWithBackendUrl)(wt)}" download="${mt}">${mt||"Download PDF"}</a>`)});const J=v.data.processor.toView(tt),V=v.data.toModel(J);v.model.insertContent(V),j()},F=at=>{const tt=at.map(J=>({name:J.name,alt:J.alternativeText||J.name,url:(0,n.prefixFileUrlWithBackendUrl)(J.url),mime:J.mime,formats:J.formats}));ct(tt)};return i?w.createElement(Y,{onClose:j,onSelectAssets:F}):null};A.defaultProps={isOpen:!1,onChange:()=>{},onToggle:()=>{}},A.propTypes={isOpen:g().bool,onChange:g().func,onToggle:g().func};const z=A;var R=m(77868),K=m(3108);const N=S(),pt=(0,q.default)("div")`${({editorStyles:i})=>i}`,dt=({onChange:i,name:u,value:j,disabled:v,preset:B,maxLength:I})=>{const[Y,ct]=(0,w.useState)(!1),[F,at]=(0,w.useState)(!1),[tt,J]=(0,w.useState)(null),[V,mt]=(0,w.useState)(null),[wt,xt]=(0,w.useState)(!1),$=(0,w.useRef)(null),_t=()=>at(H=>!H),Tt=H=>H>I?xt(!0):xt(!1);return(0,w.useEffect)(()=>{(async()=>{const{currentConfig:H,uploadPluginConfig:et}=await it(B,_t);mt(H),J(et)})()},[]),w.createElement(w.Fragment,null,V&&w.createElement(N,null),w.createElement(pt,{editorStyles:V?.styles},!V&&w.createElement(Pt,{hasRadius:!0,background:"neutral100"},w.createElement(E.Loader,null,"Loading...")),V&&w.createElement(a.CKEditor,{editor:window.CKEditor5.editorClassic.ClassicEditor,config:V?.editorConfig,disabled:v,data:j,onReady:H=>{if(V.editorConfig.WordCountPlugin){const et=H.plugins.get("WordCount");et.on("update",(Vt,Nt)=>Tt(Nt.characters)),$.current?.appendChild(et.wordCountContainer)}H.plugins.has("ImageUploadEditing")&&H.plugins.get("ImageUploadEditing").on("uploadComplete",(et,{data:vt,imageElement:Vt})=>H.model.change(Nt=>Nt.setAttribute("alt",vt.alt,Vt))),ct(H)},onChange:(H,et)=>{const vt=et.getData();i({target:{name:u,value:vt}})}}),V&&V.editorConfig.WordCountPlugin&&w.createElement(Lt,{color:wt?"danger500":"neutral400",ref:$},!Y&&w.createElement(E.Loader,{small:!0},"Loading...")),tt&&w.createElement(z,{isOpen:F,onToggle:_t,editor:Y,uploadConfig:tt})))};dt.defaultProps={value:"",disabled:!1},dt.propTypes={onChange:g().func.isRequired,name:g().string.isRequired,value:g().string,disabled:g().bool};const Lt=(0,q.default)(E.Box)`
  display:flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  `,Pt=(0,q.default)(E.Box)`
  display:flex;
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
  `,Mt=dt;var St=m(97132),Ft=m(54574),Dt=m(64777),Ut=m(63428),kt=m(96404),y=m(7681);const l=({name:i,attribute:u,onChange:j,value:v,intlLabel:B,labelAction:I,disabled:Y,error:ct,description:F,required:at})=>{const{formatMessage:tt}=(0,St.useIntl)(),{preset:J,maxLengthCharacters:V,...mt}=u.options;return w.createElement(Ft.g,{name:i,id:i,error:ct,hint:F&&tt(F)},w.createElement(y.K,{spacing:1},w.createElement(Dt.Q,{action:I,required:at},tt(B)),w.createElement(Mt,{disabled:Y,name:i,onChange:j,value:v,preset:J,maxLength:V}),w.createElement(Ut.J,null),w.createElement(kt.c,null)))};l.defaultProps={description:null,disabled:!1,error:null,labelAction:null,required:!1,value:""},l.propTypes={intlLabel:g().object.isRequired,onChange:g().func.isRequired,attribute:g().object.isRequired,name:g().string.isRequired,description:g().object,disabled:g().bool,error:g().string,labelAction:g().object,required:g().bool,value:g().string};const _=l}}]);
