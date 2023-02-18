"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[8056],{8421:(me,b,t)=>{t.r(b),t.d(b,{default:()=>le});var e=t(67294),n=t(68547),S=t(87751),k=t(97132),A=t(23724),v=t(49656),V=t(80129),x=t.n(V),$=t(67838),F=t(49066),H=t(185),Z=t(29728),P=t(96315);const O=[{name:"name",key:"name",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}];var Q=t(45697),a=t.n(Q),y=t(75515),W=t(550),j=t(47144),f=t(18374),z=t(11047),G=t(20022),Y=t(12028),J=t(41580);const B=({tokenName:l,onClickDelete:s})=>{const{formatMessage:d}=(0,k.useIntl)(),{trackUsage:c}=(0,n.useTracking)();return e.createElement(J.x,{paddingLeft:1,...n.stopPropagation},e.createElement(Y.h,{onClick:()=>{c("willDeleteToken"),s()},label:d({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${l}`}),name:"delete",noBorder:!0,icon:e.createElement(G.default,null)}))};B.propTypes={tokenName:a().string.isRequired,onClickDelete:a().func.isRequired};const K=B;var X=t(4585),q=t(71893);const _={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},ee=(0,q.default)(n.Link)`
  svg {
    path {
      fill: ${({theme:l})=>l.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:l})=>l.colors.neutral800};
      }
    }
  }
`,h=({tokenName:l,tokenId:s,buttonType:d,children:c})=>{const{formatMessage:m}=(0,k.useIntl)(),{location:{pathname:g}}=(0,v.useHistory)();return e.createElement(ee,{to:`${g}/${s}`,title:m(_[d],{target:l})},c)};h.propTypes={tokenName:a().string.isRequired,tokenId:a().oneOfType([a().string,a().number]).isRequired,buttonType:a().string,children:a().node.isRequired},h.defaultProps={buttonType:"edit"};const I=h,N=({tokenName:l,tokenId:s})=>e.createElement(I,{tokenName:l,tokenId:s},e.createElement(X.Z,null));N.propTypes={tokenName:a().string.isRequired,tokenId:a().oneOfType([a().string,a().number]).isRequired};const te=N;var ne=t(8934);const w=({tokenName:l,tokenId:s})=>e.createElement(I,{tokenName:l,tokenId:s,buttonType:"read"},e.createElement(ne.default,null));w.propTypes={tokenName:a().string.isRequired,tokenId:a().oneOfType([a().string,a().number]).isRequired};const ae=w,C=({canDelete:l,canUpdate:s,canRead:d,onClickDelete:c,withBulkActions:m,rows:g})=>{const[{query:r}]=(0,n.useQueryParams)(),[,T]=r.sort.split(":"),{push:p,location:{pathname:D}}=(0,v.useHistory)(),{trackUsage:E}=(0,n.useTracking)(),L=g.sort((o,M)=>{const u=o.name.localeCompare(M.name);return T==="DESC"?-u:u});return e.createElement(W.p,null,L.map(o=>e.createElement(j.Tr,{key:o.id,...(0,n.onRowClick)({fn(){E("willEditTokenFromList"),p(`${D}/${o.id}`)},condition:s})},e.createElement(f.Td,null,e.createElement(y.Z,{textColor:"neutral800",fontWeight:"bold"},o.name)),e.createElement(f.Td,{maxWidth:(0,n.pxToRem)(250)},e.createElement(y.Z,{textColor:"neutral800",ellipsis:!0},o.description)),e.createElement(f.Td,null,e.createElement(y.Z,{textColor:"neutral800"},e.createElement(n.RelativeTime,{timestamp:new Date(o.createdAt)}))),e.createElement(f.Td,null,o.lastUsedAt&&e.createElement(y.Z,{textColor:"neutral800"},e.createElement(n.RelativeTime,{timestamp:new Date(o.lastUsedAt)}))),m&&e.createElement(f.Td,null,e.createElement(z.k,{justifyContent:"end"},s&&e.createElement(te,{tokenName:o.name,tokenId:o.id}),!s&&d&&e.createElement(ae,{tokenName:o.name,tokenId:o.id}),l&&e.createElement(K,{tokenName:o.name,onClickDelete:()=>c(o.id)}))))))};C.defaultProps={canDelete:!1,canUpdate:!1,canRead:!1,onClickDelete(){},rows:[],withBulkActions:!1},C.propTypes={canDelete:a().bool,canUpdate:a().bool,canRead:a().bool,onClickDelete:a().func,rows:a().array,withBulkActions:a().bool};const se=C,oe=()=>{(0,n.useFocusWhenNavigate)();const l=(0,A.useQueryClient)(),{formatMessage:s}=(0,k.useIntl)(),d=(0,n.useNotification)(),{allowedActions:{canCreate:c,canDelete:m,canUpdate:g,canRead:r}}=(0,n.useRBAC)(S.Z.settings["api-tokens"]),{push:T}=(0,v.useHistory)(),{trackUsage:p}=(0,n.useTracking)(),{startSection:D}=(0,n.useGuidedTour)(),E=(0,e.useRef)(D),{get:L,del:o}=(0,n.useFetchClient)();(0,e.useEffect)(()=>{E.current&&E.current("apiTokens")},[]),(0,e.useEffect)(()=>{T({search:x().stringify({sort:"name:ASC"},{encode:!1})})},[T]);const M=O.map(i=>({...i,metadatas:{...i.metadatas,label:s(i.metadatas.label)}})),{data:u,status:R,isFetching:ie}=(0,A.useQuery)(["api-tokens"],async()=>{p("willAccessTokenList");const{data:{data:i}}=await L("/admin/api-tokens");return p("didAccessTokenList",{number:i.length}),i},{enabled:r,onError(){d({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),U=r&&(R!=="success"&&R!=="error"||R==="success"&&ie),re=(0,A.useMutation)(async i=>{await o(`/admin/api-tokens/${i}`)},{async onSuccess(){await l.invalidateQueries(["api-tokens"]),p("didDeleteToken")},onError(i){i?.response?.data?.data?d({type:"warning",message:i.response.data.data}):d({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),de=r&&u,ce=r&&!u&&!c,ue=r&&!u&&c;return e.createElement(H.o,{"aria-busy":U},e.createElement(n.SettingsPageTitle,{name:"API Tokens"}),e.createElement($.T,{title:s({id:"Settings.apiTokens.title",defaultMessage:"API Tokens"}),subtitle:s({id:"Settings.apiTokens.description",defaultMessage:"List of generated tokens to consume the API"}),primaryAction:c?e.createElement(n.LinkButton,{"data-testid":"create-api-token-button",startIcon:e.createElement(P.default,null),size:"S",onClick:()=>p("willAddTokenFromList"),to:"/settings/api-tokens/create"},s({id:"Settings.apiTokens.create",defaultMessage:"Create new API Token"})):void 0}),e.createElement(F.D,null,!r&&e.createElement(n.NoPermissions,null),de&&e.createElement(n.DynamicTable,{headers:M,contentType:"api-tokens",rows:u,withBulkActions:m||g||r,isLoading:U,onConfirmDelete:i=>re.mutateAsync(i)},e.createElement(se,{canRead:r,canDelete:m,canUpdate:g,rows:u,withBulkActions:m||g||r})),ue&&e.createElement(n.NoContent,{content:{id:"Settings.apiTokens.addFirstToken",defaultMessage:"Add your first API Token"},action:e.createElement(Z.z,{variant:"secondary",startIcon:e.createElement(P.default,null)},s({id:"Settings.apiTokens.addNewToken",defaultMessage:"Add new API Token"}))}),ce&&e.createElement(n.NoContent,{content:{id:"Settings.apiTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})))},le=()=>e.createElement(n.CheckPagePermissions,{permissions:S.Z.settings["api-tokens"].main},e.createElement(oe,null))}}]);
