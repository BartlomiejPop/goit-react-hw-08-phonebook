"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[290],{5290:function(n,e,r){r.r(e),r.d(e,{default:function(){return D}});var t=r(4270),i=r(9434),a=r(9273),o=r(2791),c=r(3044),s=r(3736),u=r(4708),p=r(9176),l=r(3433),m=r(4942),d=r(3366),f=r(7462),v=r(8182),x=r(1184),g=r(8519),h=r(4419),w=r(6934),b=r(1402),Z=r(3967);var k=o.createContext(),S=r(5878),j=r(1217);function W(n){return(0,j.Z)("MuiGrid",n)}var y=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],N=(0,S.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,l.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,l.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,l.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,l.Z)(y.map((function(n){return"grid-xs-".concat(n)}))),(0,l.Z)(y.map((function(n){return"grid-sm-".concat(n)}))),(0,l.Z)(y.map((function(n){return"grid-md-".concat(n)}))),(0,l.Z)(y.map((function(n){return"grid-lg-".concat(n)}))),(0,l.Z)(y.map((function(n){return"grid-xl-".concat(n)}))))),M=r(184),z=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function C(n){var e=parseFloat(n);return"".concat(e).concat(String(n).replace(String(e),"")||"px")}function P(n){var e=n.breakpoints,r=n.values,t="";Object.keys(r).forEach((function(n){""===t&&0!==r[n]&&(t=n)}));var i=Object.keys(e).sort((function(n,r){return e[n]-e[r]}));return i.slice(0,i.indexOf(t))}var _=(0,w.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState,t=r.container,i=r.direction,a=r.item,o=r.spacing,c=r.wrap,s=r.zeroMinWidth,u=r.breakpoints,p=[];t&&(p=function(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[r["spacing-xs-".concat(String(n))]];var t=[];return e.forEach((function(e){var i=n[e];Number(i)>0&&t.push(r["spacing-".concat(e,"-").concat(String(i))])})),t}(o,u,e));var m=[];return u.forEach((function(n){var t=r[n];t&&m.push(e["grid-".concat(n,"-").concat(String(t))])})),[e.root,t&&e.container,a&&e.item,s&&e.zeroMinWidth].concat((0,l.Z)(p),["row"!==i&&e["direction-xs-".concat(String(i))],"wrap"!==c&&e["wrap-xs-".concat(String(c))]],m)}})((function(n){var e=n.ownerState;return(0,f.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})}),(function(n){var e=n.theme,r=n.ownerState,t=(0,x.P$)({values:r.direction,breakpoints:e.breakpoints.values});return(0,x.k9)({theme:e},t,(function(n){var e={flexDirection:n};return 0===n.indexOf("column")&&(e["& > .".concat(N.item)]={maxWidth:"none"}),e}))}),(function(n){var e=n.theme,r=n.ownerState,t=r.container,i=r.rowSpacing,a={};if(t&&0!==i){var o,c=(0,x.P$)({values:i,breakpoints:e.breakpoints.values});"object"===typeof c&&(o=P({breakpoints:e.breakpoints.values,values:c})),a=(0,x.k9)({theme:e},c,(function(n,r){var t,i=e.spacing(n);return"0px"!==i?(0,m.Z)({marginTop:"-".concat(C(i))},"& > .".concat(N.item),{paddingTop:C(i)}):null!=(t=o)&&t.includes(r)?{}:(0,m.Z)({marginTop:0},"& > .".concat(N.item),{paddingTop:0})}))}return a}),(function(n){var e=n.theme,r=n.ownerState,t=r.container,i=r.columnSpacing,a={};if(t&&0!==i){var o,c=(0,x.P$)({values:i,breakpoints:e.breakpoints.values});"object"===typeof c&&(o=P({breakpoints:e.breakpoints.values,values:c})),a=(0,x.k9)({theme:e},c,(function(n,r){var t,i=e.spacing(n);return"0px"!==i?(0,m.Z)({width:"calc(100% + ".concat(C(i),")"),marginLeft:"-".concat(C(i))},"& > .".concat(N.item),{paddingLeft:C(i)}):null!=(t=o)&&t.includes(r)?{}:(0,m.Z)({width:"100%",marginLeft:0},"& > .".concat(N.item),{paddingLeft:0})}))}return a}),(function(n){var e,r=n.theme,t=n.ownerState;return r.breakpoints.keys.reduce((function(n,i){var a={};if(t[i]&&(e=t[i]),!e)return n;if(!0===e)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===e)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var o=(0,x.P$)({values:t.columns,breakpoints:r.breakpoints.values}),c="object"===typeof o?o[i]:o;if(void 0===c||null===c)return n;var s="".concat(Math.round(e/c*1e8)/1e6,"%"),u={};if(t.container&&t.item&&0!==t.columnSpacing){var p=r.spacing(t.columnSpacing);if("0px"!==p){var l="calc(".concat(s," + ").concat(C(p),")");u={flexBasis:l,maxWidth:l}}}a=(0,f.Z)({flexBasis:s,flexGrow:0,maxWidth:s},u)}return 0===r.breakpoints.values[i]?Object.assign(n,a):n[r.breakpoints.up(i)]=a,n}),{})}));var E=function(n){var e=n.classes,r=n.container,t=n.direction,i=n.item,a=n.spacing,o=n.wrap,c=n.zeroMinWidth,s=n.breakpoints,u=[];r&&(u=function(n,e){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var r=[];return e.forEach((function(e){var t=n[e];if(Number(t)>0){var i="spacing-".concat(e,"-").concat(String(t));r.push(i)}})),r}(a,s));var p=[];s.forEach((function(e){var r=n[e];r&&p.push("grid-".concat(e,"-").concat(String(r)))}));var m={root:["root",r&&"container",i&&"item",c&&"zeroMinWidth"].concat((0,l.Z)(u),["row"!==t&&"direction-xs-".concat(String(t)),"wrap"!==o&&"wrap-xs-".concat(String(o))],p)};return(0,h.Z)(m,W,e)},G=o.forwardRef((function(n,e){var r=(0,b.Z)({props:n,name:"MuiGrid"}),t=(0,Z.Z)().breakpoints,i=(0,g.Z)(r),a=i.className,c=i.columns,s=i.columnSpacing,u=i.component,p=void 0===u?"div":u,l=i.container,m=void 0!==l&&l,x=i.direction,h=void 0===x?"row":x,w=i.item,S=void 0!==w&&w,j=i.rowSpacing,W=i.spacing,y=void 0===W?0:W,N=i.wrap,C=void 0===N?"wrap":N,P=i.zeroMinWidth,G=void 0!==P&&P,T=(0,d.Z)(i,z),O=j||y,q=s||y,B=o.useContext(k),L=m?c||12:B,R={},$=(0,f.Z)({},T);t.keys.forEach((function(n){null!=T[n]&&(R[n]=T[n],delete $[n])}));var D=(0,f.Z)({},i,{columns:L,container:m,direction:h,item:S,rowSpacing:O,columnSpacing:q,wrap:C,zeroMinWidth:G,spacing:y},R,{breakpoints:t.keys}),F=E(D);return(0,M.jsx)(k.Provider,{value:L,children:(0,M.jsx)(_,(0,f.Z)({ownerState:D,className:(0,v.Z)(F.root,a),as:p,ref:e},$))})})),T=G,O=r(4554),q=r(890),B=r(1614),L=r(7107),R=r(4507),$=function(){var n=(0,L.Z)(),e=(0,i.I0)();return(0,M.jsx)(R.Z,{theme:n,children:(0,M.jsxs)(B.Z,{component:"main",maxWidth:"xs",children:[(0,M.jsx)(u.ZP,{}),(0,M.jsxs)(O.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,M.jsx)(c.Z,{sx:{m:1,bgcolor:"secondary.main"}}),(0,M.jsx)(q.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,M.jsxs)(O.Z,{component:"form",noValidate:!0,onSubmit:function(n){n.preventDefault();var r=n.currentTarget;e((0,a.z2)({name:r.elements.name.value,email:r.elements.email.value,password:r.elements.password.value})),r.reset()},autoComplete:"off",sx:{mt:3},children:[(0,M.jsxs)(T,{container:!0,spacing:2,children:[(0,M.jsx)(T,{item:!0,xs:12,children:(0,M.jsx)(p.Z,{autoComplete:"given-name",name:"name",required:!0,fullWidth:!0,id:"firstName",label:"Name",autoFocus:!0})}),(0,M.jsx)(T,{item:!0,xs:12,children:(0,M.jsx)(p.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),(0,M.jsx)(T,{item:!0,xs:12,children:(0,M.jsx)(p.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})}),(0,M.jsx)(T,{item:!0,xs:12})]}),(0,M.jsx)(s.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"})]})]})]})})};function D(){return(0,M.jsxs)("div",{children:[(0,M.jsx)(t.q,{children:(0,M.jsx)("title",{children:"Registration"})}),(0,M.jsx)($,{})]})}}}]);
//# sourceMappingURL=290.0d106399.chunk.js.map