"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[6],{3935:function(e,t,r){r.d(t,{x:function(){return g}});var a=r(1087),n=r(3982),o="Navigation_link__13qe6",i="Navigation_activeLink__M+D4I",s=r(184),c=function(){var e=(0,n.a)().isLoggedIn;return(0,s.jsxs)("nav",{children:[(0,s.jsx)(a.OL,{className:o,to:"/",children:"Home"}),e&&(0,s.jsx)(a.OL,{to:"/contacts",className:i,children:"Contacts"})]})},u=r(9434),l=r(9273),d="UserMenu_button__310Zp",v=function(){var e=(0,u.I0)();return(0,s.jsx)("div",{children:(0,s.jsx)("button",{className:d,type:"button",onClick:function(){return e((0,l.ni)())},children:"Logout"})})},f="AuthNav_authNav__CvOzd",m="AuthNav_link__1DYPd",h=function(){return(0,s.jsxs)("div",{className:f,children:[(0,s.jsx)(a.OL,{className:m,to:"/register",children:"Register"}),(0,s.jsx)(a.OL,{className:m,to:"/login",children:"Log In"})]})},p="AppBar_header__6MZ3-",g=function(){var e=(0,n.a)().isLoggedIn;return(0,s.jsxs)("header",{className:p,children:[(0,s.jsx)(c,{}),e?(0,s.jsx)(v,{}):(0,s.jsx)(h,{})]})}},3044:function(e,t,r){r.d(t,{Z:function(){return k}});var a=r(9439),n=r(3366),o=r(7462),i=r(2791),s=r(8182),c=r(4419),u=r(6934),l=r(1402),d=r(9201),v=r(184),f=(0,d.Z)((0,v.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),m=r(5878),h=r(1217);function p(e){return(0,h.Z)("MuiAvatar",e)}(0,m.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],x=(0,u.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,r=e.ownerState;return(0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:(t.vars||t).shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&(0,o.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]}))})),b=(0,u.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Z=(0,u.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var k=i.forwardRef((function(e,t){var r=(0,l.Z)({props:e,name:"MuiAvatar"}),u=r.alt,d=r.children,f=r.className,m=r.component,h=void 0===m?"div":m,k=r.imgProps,S=r.sizes,_=r.src,w=r.srcSet,N=r.variant,j=void 0===N?"circular":N,R=(0,n.Z)(r,g),y=null,W=function(e){var t=e.crossOrigin,r=e.referrerPolicy,n=e.src,o=e.srcSet,s=i.useState(!1),c=(0,a.Z)(s,2),u=c[0],l=c[1];return i.useEffect((function(){if(n||o){l(!1);var e=!0,a=new Image;return a.onload=function(){e&&l("loaded")},a.onerror=function(){e&&l("error")},a.crossOrigin=t,a.referrerPolicy=r,a.src=n,o&&(a.srcset=o),function(){e=!1}}}),[t,r,n,o]),u}((0,o.Z)({},k,{src:_,srcSet:w})),M=_||w,C=M&&"error"!==W,P=(0,o.Z)({},r,{colorDefault:!C,component:h,variant:j}),L=function(e){var t=e.classes,r={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,c.Z)(r,p,t)}(P);return y=C?(0,v.jsx)(b,(0,o.Z)({alt:u,src:_,srcSet:w,sizes:S,ownerState:P,className:L.img},k)):null!=d?d:M&&u?u[0]:(0,v.jsx)(Z,{ownerState:P,className:L.fallback}),(0,v.jsx)(x,(0,o.Z)({as:h,ownerState:P,className:(0,s.Z)(L.root,f),ref:t},R,{children:y}))}))},1614:function(e,t,r){r.d(t,{Z:function(){return w}});var a=r(4942),n=r(3366),o=r(7462),i=r(2791),s=r(8182),c=r(1122),u=r(1217),l=r(4419),d=r(7078),v=(0,r(4046).ZP)(),f=r(5080),m=r(184),h=["className","component","disableGutters","fixed","maxWidth","classes"],p=(0,f.Z)(),g=v("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["maxWidth".concat((0,c.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),x=function(e){return(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:p})},b=function(e,t){var r=e.classes,a=e.fixed,n=e.disableGutters,o=e.maxWidth,i={root:["root",o&&"maxWidth".concat((0,c.Z)(String(o))),a&&"fixed",n&&"disableGutters"]};return(0,l.Z)(i,(function(e){return(0,u.Z)(t,e)}),r)};var Z=r(4036),k=r(6934),S=r(1402),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,r=void 0===t?g:t,c=e.useThemeProps,u=void 0===c?x:c,l=e.componentName,d=void 0===l?"MuiContainer":l,v=r((function(e){var t=e.theme,r=e.ownerState;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!r.disableGutters&&(0,a.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,r){var a=r,n=t.breakpoints.values[a];return 0!==n&&(e[t.breakpoints.up(a)]={maxWidth:"".concat(n).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,r=e.ownerState;return(0,o.Z)({},"xs"===r.maxWidth&&(0,a.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),r.maxWidth&&"xs"!==r.maxWidth&&(0,a.Z)({},t.breakpoints.up(r.maxWidth),{maxWidth:"".concat(t.breakpoints.values[r.maxWidth]).concat(t.breakpoints.unit)}))})),f=i.forwardRef((function(e,t){var r=u(e),a=r.className,i=r.component,c=void 0===i?"div":i,l=r.disableGutters,f=void 0!==l&&l,p=r.fixed,g=void 0!==p&&p,x=r.maxWidth,Z=void 0===x?"lg":x,k=(0,n.Z)(r,h),S=(0,o.Z)({},r,{component:c,disableGutters:f,fixed:g,maxWidth:Z}),_=b(S,d);return(0,m.jsx)(v,(0,o.Z)({as:c,ownerState:S,className:(0,s.Z)(_.root,a),ref:t},k))}));return f}({createStyledComponent:(0,k.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["maxWidth".concat((0,Z.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,S.Z)({props:e,name:"MuiContainer"})}}),w=_}}]);
//# sourceMappingURL=6.a1fe7098.chunk.js.map