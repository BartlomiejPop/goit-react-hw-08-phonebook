"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[300],{3935:function(n,t,e){e.d(t,{x:function(){return f}});var a=e(1087),s=e(6009),r="Navigation_link__13qe6",i="Navigation_activeLink__M+D4I",c=e(184),l=function(){var n=(0,s.a)().isLoggedIn;return(0,c.jsxs)("nav",{children:[(0,c.jsx)(a.OL,{className:r,to:"/",children:"Home"}),n&&(0,c.jsx)(a.OL,{to:"/contacts",className:i,children:"Contacts"})]})},o=e(9434),u=e(9273),d="UserMenu_button__310Zp",_=function(){var n=(0,o.I0)();return(0,c.jsx)("div",{children:(0,c.jsx)("button",{className:d,type:"button",onClick:function(){return n((0,u.ni)())},children:"Logout"})})},h="AuthNav_authNav__CvOzd",m="AuthNav_link__1DYPd",x=function(){return(0,c.jsxs)("div",{className:h,children:[(0,c.jsx)(a.OL,{className:m,to:"/register",children:"Register"}),(0,c.jsx)(a.OL,{className:m,to:"/login",children:"Log In"})]})},v="AppBar_header__6MZ3-",f=function(){var n=(0,s.a)().isLoggedIn;return(0,c.jsxs)("header",{className:v,children:[(0,c.jsx)(l,{}),n?(0,c.jsx)(_,{}):(0,c.jsx)(x,{})]})}},9300:function(n,t,e){e.r(t),e.d(t,{default:function(){return L}});var a=e(2791),s=e(9434),r=e(4270),i="ContactForm_form__dhl+T",c=e(3634),l=e(8075),o=e(3736),u=e(184),d=function(){var n=(0,s.I0)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("form",{className:i,onSubmit:function(t){t.preventDefault();var e=t.currentTarget;console.log(e.elements.name.value);var a=e.elements.name.value,s=e.elements.number.value;n((0,c.uK)(a,s)),e.reset()},children:[(0,u.jsx)(l.Z,{id:"standard-basic",type:"text",name:"name",pattern:"^[A-Za-z.'\\- ]+$",label:"Name",variant:"standard",style:{width:"60%",alignSelf:"center"}}),(0,u.jsx)(l.Z,{id:"standard-basic",type:"text",name:"number",pattern:"^\\+?\\d{1,4}?\\s?\\(?\\d{1,4}?\\)?\\s?\\d{1,4}\\s?\\d{1,4}\\s?\\d{1,9}$",label:"Number",variant:"standard",style:{width:"60%",alignSelf:"center"}}),(0,u.jsx)(o.Z,{type:"submit",variant:"outlined",style:{marginTop:"20px",width:"250px",alignSelf:"center"},children:"Add contact"})]})})},_="ContactList_contact__0STHS",h="ContactList_contacts__jDmyV",m="ContactList_button__7kL4l",x=function(n){return n.contacts.isLoading},v=function(n){return n.contacts.names},f=function(n){var t=n.deleteContact,e=(0,s.v9)(v),a=(0,s.I0)();return(0,u.jsx)("ul",{className:h,children:e.map((function(n){return(0,u.jsxs)("li",{className:_,children:[n.name," ",n.number,(0,u.jsx)("button",{className:m,type:"button",onClick:function(){n.id,a(t())},children:"Delete"})]},n.id)}))})},j="Filter_filterBox__A-UPt",g=e(1538),p=function(){var n=(0,s.I0)();return(0,u.jsx)("div",{className:j,children:(0,u.jsx)(l.Z,{id:"standard-basic",type:"text",label:"Find contacts by name",onChange:function(t){return function(t){n((0,g.T)(t.target.value))}(t)},variant:"standard",style:{width:"40%"}})})},b=e(3935),N="styles_wrapper__L4XUh";function L(){var n=(0,s.I0)(),t=(0,s.v9)(x);return(0,a.useEffect)((function(){n((0,c.yF)())}),[n]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.q,{children:(0,u.jsx)("title",{children:"Your tasks"})}),(0,u.jsx)(b.x,{}),(0,u.jsxs)("div",{className:N,children:[(0,u.jsx)(d,{}),(0,u.jsx)(p,{}),(0,u.jsx)("div",{children:t&&"Request in progress..."}),(0,u.jsx)(f,{})]})]})}}}]);
//# sourceMappingURL=300.19045aa2.chunk.js.map