"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[2282],{8971:(k,P,t)=>{t.r(P),t.d(P,{ProvidersPage:()=>ye,default:()=>Ie});var e=t(67294),c=t(97132),a=t(68547),u=t(18721),s=t.n(u),E=t(11700),M=t.n(E),h=t(17034),x=t(67838),B=t(49066),i=t(185),A=t(14087),f=t(11057),n=t(63985),g=t(47144),o=t(18374),d=t(550),m=t(75515),U=t(63237),z=t(12028),H=t(4585),D=t(23724),l=t(53209),y=t(89031);const V={id:(0,y.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},v={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},j={id:(0,y.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},Z={id:(0,y.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},Y={id:(0,y.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},T={id:(0,y.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},R={id:(0,y.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},w={id:(0,y.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},G={email:{form:[[{intlLabel:Z,name:"enabled",type:"bool",description:j,size:6}]],schema:l.Ry().shape({enabled:l.Xg().required(a.translatedErrors.required)})},providers:{form:[[{intlLabel:Z,name:"enabled",type:"bool",description:j,size:6,validations:{required:!0}}],[{intlLabel:Y,name:"key",type:"text",placeholder:R,size:12,validations:{required:!0}}],[{intlLabel:w,name:"secret",type:"text",placeholder:R,size:12,validations:{required:!0}}],[{intlLabel:V,placeholder:v,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:T,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:l.Ry().shape({enabled:l.Xg().required(a.translatedErrors.required),key:l.Z_().when("enabled",{is:!0,then:l.Z_().required(a.translatedErrors.required),otherwise:l.Z_()}),secret:l.Z_().when("enabled",{is:!0,then:l.Z_().required(a.translatedErrors.required),otherwise:l.Z_()}),callback:l.Z_().when("enabled",{is:!0,then:l.Z_().required(a.translatedErrors.required),otherwise:l.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:Z,name:"enabled",type:"bool",description:j,size:6,validations:{required:!0}}],[{intlLabel:Y,name:"key",type:"text",placeholder:R,size:12,validations:{required:!0}}],[{intlLabel:w,name:"secret",type:"text",placeholder:R,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,y.OB)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:R,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,y.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,y.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:V,placeholder:v,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:T,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:l.Ry().shape({enabled:l.Xg().required(a.translatedErrors.required),key:l.Z_().when("enabled",{is:!0,then:l.Z_().required(a.translatedErrors.required),otherwise:l.Z_()}),secret:l.Z_().when("enabled",{is:!0,then:l.Z_().required(a.translatedErrors.required),otherwise:l.Z_()}),subdomain:l.Z_().when("enabled",{is:!0,then:l.Z_().required(a.translatedErrors.required),otherwise:l.Z_()}),callback:l.Z_().when("enabled",{is:!0,then:l.Z_().required(a.translatedErrors.required),otherwise:l.Z_()})})}},q=async p=>{try{const{get:O}=(0,a.getFetchClient)(),{data:I}=await O((0,y.Gc)("providers"));return I}catch{throw p({type:"warning",message:{id:"notification.error"}}),new Error("error")}},_=p=>{const{put:O}=(0,a.getFetchClient)();return O((0,y.Gc)("providers"),p)};var X=t(96486);const ee=p=>(0,X.sortBy)(Object.keys(p).reduce((O,I)=>{const{icon:S,enabled:C,subdomain:K}=p[I],F=S==="envelope"?["fas","envelope"]:["fab",S];return K!==void 0?O.push({name:I,icon:F,enabled:C,subdomain:K}):O.push({name:I,icon:F,enabled:C}),O},[]),"name");var ae=t(81912),ie=t(29728),me=t(7681),de=t(2407),ne=t(11276),re=t(74571),Me=t(42866),xe=t(24969),Re=t(59946),Te=t(36856),Oe=t(45697),r=t.n(Oe),Le=t(80831),Ce=t(20707),Be=t(16364);const pe=({description:p,disabled:O,intlLabel:I,error:S,name:C,onChange:K,placeholder:F,providerToEditName:J,type:N,value:b})=>{const{formatMessage:W}=(0,c.useIntl)(),Q=C==="noName"?`${strapi.backendURL}/api/connect/${J}/callback`:b,te=W({id:I.id,defaultMessage:I.defaultMessage},{provider:J,...I.values}),$=p?W({id:p.id,defaultMessage:p.defaultMessage},{provider:J,...p.values}):"";if(N==="bool")return e.createElement(Ce.s,{"aria-label":C,checked:b,disabled:O,hint:$,label:te,name:C,offLabel:W({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:W({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:le=>{K({target:{name:C,value:le.target.checked}})}});const ve=F?W({id:F.id,defaultMessage:F.defaultMessage},{...F.values}):"",he=S?W({id:S,defaultMessage:S}):"";return e.createElement(Be.o,{"aria-label":C,disabled:O,error:he,label:te,name:C,onChange:K,placeholder:ve,type:N,value:Q})};pe.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},pe.propTypes={description:r().shape({id:r().string.isRequired,defaultMessage:r().string.isRequired,values:r().object}),disabled:r().bool,error:r().string,intlLabel:r().shape({id:r().string.isRequired,defaultMessage:r().string.isRequired,values:r().object}).isRequired,name:r().string.isRequired,onChange:r().func.isRequired,placeholder:r().shape({id:r().string.isRequired,defaultMessage:r().string.isRequired,values:r().object}),providerToEditName:r().string.isRequired,type:r().string.isRequired,value:r().oneOfType([r().bool,r().string])};const Ae=pe,ge=({headerBreadcrumbs:p,initialData:O,isSubmiting:I,layout:S,isOpen:C,onSubmit:K,onToggle:F,providerToEditName:J})=>{const{formatMessage:N}=(0,c.useIntl)();return C?e.createElement(Me.P,{onClose:F,labelledBy:"title"},e.createElement(xe.x,null,e.createElement(de.O,{label:p.join(", ")},p.map(b=>e.createElement(de.$,{key:b},b)))),e.createElement(Le.Formik,{onSubmit:b=>K(b),initialValues:O,validationSchema:S.schema,validateOnChange:!1},({errors:b,handleChange:W,values:Q})=>e.createElement(a.Form,null,e.createElement(Re.f,null,e.createElement(me.K,{spacing:1},e.createElement(ne.r,{gap:5},S.form.map(te=>te.map($=>e.createElement(re.P,{key:$.name,col:$.size,xs:12},e.createElement(Ae,{...$,error:b[$.name],onChange:W,value:Q[$.name],providerToEditName:J}))))))),e.createElement(Te.m,{startActions:e.createElement(ie.z,{variant:"tertiary",onClick:F,type:"button"},N({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(ie.z,{type:"submit",loading:I},N({id:"global.save",defaultMessage:"Save"}))})))):null};ge.defaultProps={initialData:null,providerToEditName:null},ge.propTypes={headerBreadcrumbs:r().arrayOf(r().string).isRequired,initialData:r().object,layout:r().shape({form:r().arrayOf(r().array),schema:r().object}).isRequired,isOpen:r().bool.isRequired,isSubmiting:r().bool.isRequired,onSubmit:r().func.isRequired,onToggle:r().func.isRequired,providerToEditName:r().string};const De=ge,ye=()=>{const{formatMessage:p}=(0,c.useIntl)();(0,a.useFocusWhenNavigate)();const{notifyStatus:O}=(0,A.G)(),I=(0,D.useQueryClient)(),{trackUsage:S}=(0,a.useTracking)(),C=(0,e.useRef)(S),[K,F]=(0,e.useState)(!1),[J,N]=(0,e.useState)(!1),[b,W]=(0,e.useState)(null),Q=(0,a.useNotification)(),{lockApp:te,unlockApp:$}=(0,a.useOverlayBlocker)(),ve=(0,e.useMemo)(()=>({update:ae.Z.updateProviders}),[]),{isLoading:he,allowedActions:{canUpdate:le}}=(0,a.useRBAC)(ve),{isLoading:Ue,data:ce,isFetching:je}=(0,D.useQuery)("get-providers",()=>q(Q),{onSuccess(){O(p({id:(0,y.OB)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),Ze=Ue||je,Fe=(0,D.useMutation)(_,{async onSuccess(){await I.invalidateQueries("get-providers"),Q({type:"info",message:{id:(0,y.OB)("notification.success.submit")}}),C.current("didEditAuthenticationProvider"),N(!1),fe(),$()},onError(){Q({type:"warning",message:{id:"notification.error"}}),$(),N(!1)},refetchActive:!1}),ue=(0,e.useMemo)(()=>ee(ce),[ce]),ze=ue.length,be=(0,e.useMemo)(()=>{if(!b)return!1;const L=ue.find(Ee=>Ee.name===b);return s()(L,"subdomain")},[ue,b]),Se=p({id:(0,y.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"}),We=(0,e.useMemo)(()=>b==="email"?G.email:be?G.providersWithSubdomain:G.providers,[b,be]),fe=()=>{F(L=>!L)},Pe=L=>{le&&(W(L.name),fe())},$e=async L=>{N(!0),te(),C.current("willEditAuthenticationProvider");const Ee={...ce,[b]:L};Fe.mutate({providers:Ee})};return e.createElement(h.A,null,e.createElement(a.SettingsPageTitle,{name:Se}),e.createElement(i.o,null,e.createElement(x.T,{title:p({id:(0,y.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Ze||he?e.createElement(a.LoadingIndicatorPage,null):e.createElement(B.D,null,e.createElement(f.i,{colCount:3,rowCount:ze+1},e.createElement(n.h,null,e.createElement(g.Tr,null,e.createElement(o.Th,null,e.createElement(m.Z,{variant:"sigma",textColor:"neutral600"},p({id:"global.name",defaultMessage:"Name"}))),e.createElement(o.Th,null,e.createElement(m.Z,{variant:"sigma",textColor:"neutral600"},p({id:(0,y.OB)("Providers.status"),defaultMessage:"Status"}))),e.createElement(o.Th,null,e.createElement(m.Z,{variant:"sigma"},e.createElement(U.T,null,p({id:"global.settings",defaultMessage:"Settings"})))))),e.createElement(d.p,null,ue.map(L=>e.createElement(g.Tr,{key:L.name,...(0,a.onRowClick)({fn:()=>Pe(L),condition:le})},e.createElement(o.Td,{width:"45%"},e.createElement(m.Z,{fontWeight:"semiBold",textColor:"neutral800"},L.name)),e.createElement(o.Td,{width:"65%"},e.createElement(m.Z,{textColor:L.enabled?"success600":"danger600","data-testid":`enable-${L.name}`},L.enabled?p({id:"global.enabled",defaultMessage:"Enabled"}):p({id:"global.disabled",defaultMessage:"Disabled"}))),e.createElement(o.Td,{...a.stopPropagation},le&&e.createElement(z.h,{onClick:()=>Pe(L),noBorder:!0,icon:e.createElement(H.Z,null),label:"Edit"})))))))),e.createElement(De,{initialData:ce[b],isOpen:K,isSubmiting:J,layout:We,headerBreadcrumbs:[p({id:(0,y.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),M()(b)],onToggle:fe,onSubmit:$e,providerToEditName:b}))},Ie=()=>e.createElement(a.CheckPagePermissions,{permissions:ae.Z.readProviders},e.createElement(ye,null))},89031:(k,P,t)=>{t.d(P,{YX:()=>a,Gc:()=>E,OB:()=>M.Z});var e=t(96486);const a=h=>Object.keys(h).reduce((x,B)=>{const i=h[B].controllers,A=Object.keys(i).reduce((f,n)=>((0,e.isEmpty)(i[n])||(f[n]=i[n]),f),{});return(0,e.isEmpty)(A)||(x[B]={controllers:A}),x},{});var u=t(31498);const E=h=>`/${u.Z}/${h}`;var M=t(84757)},2407:(k,P,t)=>{t.d(P,{$:()=>x,O:()=>B});var e=t(85893),c=t(71893),a=t(41363),u=t(75515),s=t(41580),E=t(11047),M=t(63237);const h=(0,c.default)(E.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:i})=>i.colors.neutral500};
    }
  }
  :last-of-type ${s.x} {
    display: none;
  }
  :last-of-type ${u.Z} {
    color: ${({theme:i})=>i.colors.neutral800};
    font-weight: ${({theme:i})=>i.fontWeights.bold};
  }
`,x=({children:i})=>(0,e.jsxs)(h,{inline:!0,as:"li",children:[(0,e.jsx)(u.Z,{variant:"pi",textColor:"neutral600",children:i}),(0,e.jsx)(s.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,e.jsx)(a.ChevronRight,{})})]});x.displayName="Crumb";const B=({children:i,label:A,...f})=>(0,e.jsxs)(E.k,{...f,children:[(0,e.jsx)(M.T,{children:A}),(0,e.jsx)("ol",{"aria-hidden":!0,children:i})]});B.displayName="Breadcrumbs"},49066:(k,P,t)=>{t.d(P,{D:()=>u});var e=t(67294),c=t(45697),a=t(41580);const u=({children:s})=>e.createElement(a.x,{paddingLeft:10,paddingRight:10},s);u.propTypes={children:c.node.isRequired}},67838:(k,P,t)=>{t.d(P,{T:()=>i});var e=t(67294),c=t(71893),a=t(45697),u=t(75515),s=t(41580),E=t(11047);const M=n=>{const g=(0,e.useRef)(null),[o,d]=(0,e.useState)(!0),m=([U])=>{d(U.isIntersecting)};return(0,e.useEffect)(()=>{const U=g.current,z=new IntersectionObserver(m,n);return U&&z.observe(g.current),()=>{U&&z.disconnect()}},[g,n]),[g,o]};var h=t(98402);const x=(n,g)=>{const o=(0,h.useCallbackRef)(g);(0,e.useLayoutEffect)(()=>{const d=new ResizeObserver(o);return Array.isArray(n)?n.forEach(m=>{m.current&&d.observe(m.current)}):n.current&&d.observe(n.current),()=>{d.disconnect()}},[n,o])},B=()=>{const n=(0,e.useRef)(null),[g,o]=(0,e.useState)(null),[d,m]=M({root:null,rootMargin:"0px",threshold:0});return x(d,()=>{d.current&&o(d.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{n.current&&o(n.current.getBoundingClientRect())},[n]),{containerRef:d,isVisible:m,baseHeaderLayoutRef:n,headerSize:g}},i=n=>{const{containerRef:g,isVisible:o,baseHeaderLayoutRef:d,headerSize:m}=B();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:m?.height},ref:g},o&&e.createElement(f,{ref:d,...n})),!o&&e.createElement(f,{...n,sticky:!0,width:m?.width}))};i.displayName="HeaderLayout";const A=(0,c.default)(s.x)`
  width: ${n=>n.width}px;
`,f=e.forwardRef(({navigationAction:n,primaryAction:g,secondaryAction:o,subtitle:d,title:m,sticky:U,width:z,...H},D)=>{const l=typeof d=="string";return U?e.createElement(A,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:z,zIndex:4,"data-strapi-header-sticky":!0},e.createElement(E.k,{justifyContent:"space-between"},e.createElement(E.k,null,n&&e.createElement(s.x,{paddingRight:3},n),e.createElement(s.x,null,e.createElement(u.Z,{variant:"beta",as:"h1",...H},m),l?e.createElement(u.Z,{variant:"pi",textColor:"neutral600"},d):d),o?e.createElement(s.x,{paddingLeft:4},o):null),e.createElement(E.k,null,g?e.createElement(s.x,{paddingLeft:2},g):void 0))):e.createElement(s.x,{ref:D,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0},n?e.createElement(s.x,{paddingBottom:2},n):null,e.createElement(E.k,{justifyContent:"space-between"},e.createElement(E.k,null,e.createElement(u.Z,{as:"h1",variant:"alpha",...H},m),o?e.createElement(s.x,{paddingLeft:4},o):null),g),l?e.createElement(u.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},d):d)});f.displayName="BaseHeaderLayout",f.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},f.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,sticky:a.bool,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired,width:a.number},i.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},i.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired}},17034:(k,P,t)=>{t.d(P,{A:()=>M});var e=t(67294),c=t(45697),a=t(71893),u=t(41580);const s=(0,a.default)(u.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:h})=>h?"auto 1fr":"1fr"};
`,E=(0,a.default)(u.x)`
  overflow-x: hidden;
`,M=({sideNav:h,children:x})=>e.createElement(s,{hasSideNav:Boolean(h)},h,e.createElement(E,{paddingBottom:10},x));M.defaultProps={sideNav:void 0},M.propTypes={children:c.node.isRequired,sideNav:c.node}},185:(k,P,t)=>{t.d(P,{o:()=>s});var e=t(67294),c=t(45697),a=t(71893);const u=a.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,s=({labelledBy:E,...M})=>{const h=E||"main-content-title";return e.createElement(u,{"aria-labelledby":h,id:"main-content",tabIndex:-1,...M})};s.defaultProps={labelledBy:void 0},s.propTypes={labelledBy:c.string}},39785:(k,P,t)=>{t.d(P,{A:()=>A});var e=t(85893),c=t(67294),a=t(71893),u=t(41363),s=t(41580),E=t(75515),M=t(11047),h=t(15585);const x=a.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,B=a.default.div`
  animation: ${x} 2s infinite linear;
  will-change: transform;
`,i=(0,a.default)(M.k)`
  background: transparent;
  border: none;

  &[aria-disabled='true'] {
    pointer-events: none;
    svg path {
      fill: ${({theme:f})=>f.colors.neutral600};
    }
  }

  svg {
    display: flex;
    font-size: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:f})=>f.colors.primary600};
  }

  ${h.BF}
`,A=c.forwardRef(({children:f,startIcon:n,endIcon:g,onClick:o,disabled:d=!1,loading:m=!1,...U},z)=>{const H=o&&!d?o:void 0,D=d||m;return(0,e.jsxs)(i,{ref:z,"aria-disabled":D,onClick:H,as:"button",type:"button",...U,children:[(n||m)&&(0,e.jsx)(s.x,{as:"span",paddingRight:2,"aria-hidden":!0,children:m?(0,e.jsx)(B,{children:(0,e.jsx)(u.Loader,{})}):n}),(0,e.jsx)(E.Z,{variant:"pi",textColor:D?"neutral600":"primary600",children:f}),g&&(0,e.jsx)(s.x,{as:"span",paddingLeft:2,"aria-hidden":!0,children:g})]})});A.displayName="TextButton"},20707:(k,P,t)=>{t.d(P,{s:()=>V});var e=t(67294),c=t(71893),a=t(45697),u=t(75228),s=t(14085),E=t(54574),M=t(64777),h=t(63428),x=t(96404),B=t(7681),i=t(11047),A=t(39785),f=t(15585),n=t(75515),g=t(63237),o=t(41580),d=t(88262);const m=c.default.label`
  position: relative;
  display: inline-block;
  z-index: 0;
  width: 100%;
`,U=(0,c.default)(o.x)`
  cursor: ${({disabled:v})=>v?"not-allowed":void 0};
  // Masks the background of each value
  overflow: hidden;
  flex-wrap: wrap;

  ${(0,f.k3)()}
`,z=(0,c.default)(i.k).attrs({hasRadius:!0})`
  background-color: ${({theme:v,checked:j,disabled:Z})=>j?Z?v.colors.neutral200:v.colors.neutral0:"transparent"};
  border: 1px solid
    ${({theme:v,checked:j,disabled:Z})=>j&&j!==null?Z?v.colors.neutral300:v.colors.neutral200:Z?v.colors.neutral150:v.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
  flex: 1 1 50%;
  /**
    We declare the defined value because we want the height of the input when 
    the values are in a row to be 40px. But defining a height on the label
    would break the input when it wraps.
  */
  padding-top: ${({size:v})=>`${v==="S"?"2px":"6px"}`};
  padding-bottom: ${({size:v})=>`${v==="S"?"2px":"6px"}`};
`,H=c.default.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`,D=e.forwardRef(({size:v,onLabel:j,offLabel:Z,children:Y,checked:T,disabled:R,onChange:w,...se},G)=>{const{error:q,hint:_,id:X,name:oe,required:ee}=(0,d.U)(),ae="neutral600";let ie=!T&&T!==null?"danger700":ae,me=T?"primary600":ae;const de=re=>{R||w(re)};let ne;return q?ne=`${X}-error`:_&&(ne=`${X}-hint`),e.createElement(m,null,e.createElement(g.T,null,Y),e.createElement(U,{hasRadius:!0,disabled:R,padding:1,display:"flex",background:R?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200"},e.createElement(z,{size:v,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:T===null?!1:!T,disabled:R},e.createElement(n.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:R?"neutral700":ie},Z)),e.createElement(z,{size:v,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:T===null?!1:T,disabled:R},e.createElement(n.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:R?"neutral700":me},j)),e.createElement(H,{type:"checkbox","aria-disabled":R,"aria-describedby":ne,onChange:re=>de(re),name:oe,ref:G,"aria-required":ee,...se,checked:!(T===null||!T)})))});D.displayName="ToggleCheckbox",D.defaultProps={disabled:!1,checked:!1,onChange:void 0,size:"M"},D.propTypes={checked:a.bool,children:a.string.isRequired,disabled:a.bool,offLabel:a.string.isRequired,onChange:a.func,onLabel:a.string.isRequired,size:a.oneOf(Object.keys(u.J.input))};const l=(0,c.default)(E.g)`
  max-width: 320px;
`,y=(0,c.default)(A.A)`
  align-self: flex-end;
  margin-left: auto;
`,V=({disabled:v,size:j,error:Z,hint:Y,label:T,name:R,labelAction:w,required:se,id:G,onClear:q,clearLabel:_,checked:X,...oe})=>{const ee=(0,s.M)(G);return e.createElement(l,{name:R,hint:Y,error:Z,id:ee,required:se},e.createElement(B.K,{spacing:1},e.createElement(i.k,null,e.createElement(M.Q,{action:w},T),_&&q&&X!==null&&!v&&e.createElement(y,{onClick:q},_)),e.createElement(D,{id:ee,size:j,checked:X,disabled:v,...oe},T),e.createElement(h.J,null),e.createElement(x.c,null)))};V.displayName="ToggleInput",V.defaultProps={checked:!1,clearLabel:void 0,disabled:!1,error:void 0,hint:void 0,id:void 0,label:"",labelAction:void 0,name:"",onClear:void 0,required:!1,size:"M"},V.propTypes={checked:a.bool,clearLabel:a.string,disabled:a.bool,error:a.string,hint:a.oneOfType([a.string,a.node,a.arrayOf(a.node)]),id:a.string,label:a.string,labelAction:a.node,name:a.string,onClear:a.func,required:a.bool,size:a.oneOf(Object.keys(u.J.input))}}}]);
