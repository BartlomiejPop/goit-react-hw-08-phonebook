"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[907],{3935:function(n,e,t){t.d(e,{x:function(){return v}});var s=t(1087),a=t(3982),r="Navigation_link__13qe6",i="Navigation_activeLink__M+D4I",c=t(184),l=function(){var n=(0,a.a)().isLoggedIn;return(0,c.jsxs)("nav",{children:[(0,c.jsx)(s.OL,{className:r,to:"/",children:"Home"}),n&&(0,c.jsx)(s.OL,{to:"/contacts",className:i,children:"Contacts"})]})},o=t(9434),d=t(9273),u="UserMenu_button__310Zp",_=function(){var n=(0,o.I0)();return(0,c.jsx)("div",{children:(0,c.jsx)("button",{className:u,type:"button",onClick:function(){return n((0,d.ni)())},children:"Logout"})})},m="AuthNav_authNav__CvOzd",h="AuthNav_link__1DYPd",x=function(){return(0,c.jsxs)("div",{className:m,children:[(0,c.jsx)(s.OL,{className:h,to:"/register",children:"Register"}),(0,c.jsx)(s.OL,{className:h,to:"/login",children:"Log In"})]})},f="AppBar_header__6MZ3-",v=function(){var n=(0,a.a)().isLoggedIn;return(0,c.jsxs)("header",{className:f,children:[(0,c.jsx)(l,{}),n?(0,c.jsx)(_,{}):(0,c.jsx)(x,{})]})}},9907:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var s=t(2791),a=t(9434),r=t(4270),i="ContactForm_form__dhl+T",c=t(3634),l=t(8075),o=t(3736),d=t(184),u=function(){var n=(0,a.I0)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("form",{className:i,onSubmit:function(e){e.preventDefault();var t=e.currentTarget,s=t.elements.name.value,a=t.elements.number.value;n((0,c.uK)({name:s,number:a})),t.reset()},children:[(0,d.jsx)(l.Z,{id:"standard-basic",type:"text",name:"name",pattern:"^[A-Za-z.'\\- ]+$",label:"Name",variant:"standard",style:{width:"60%",alignSelf:"center"}}),(0,d.jsx)(l.Z,{id:"standard-basic",type:"text",name:"number",pattern:"^\\+?\\d{1,4}?\\s?\\(?\\d{1,4}?\\)?\\s?\\d{1,4}\\s?\\d{1,4}\\s?\\d{1,9}$",label:"Number",variant:"standard",style:{width:"60%",alignSelf:"center"}}),(0,d.jsx)(o.Z,{type:"submit",variant:"outlined",style:{marginTop:"20px",width:"250px",alignSelf:"center"},children:"Add contact"})]})})},_="ContactList_contact__0STHS",m="ContactList_contacts__jDmyV",h="ContactList_number__2af8f",x="ContactList_name__UCkFW",f=function(n){return n.contacts.isLoading},v=function(n){return n.contacts.names},j=function(n){return n.contacts.filter},g=function(){var n,e=(0,a.v9)(v),t=(0,a.v9)(j),s=(0,a.I0)();n=""===t||t===[]?e:t;return(0,d.jsx)("ul",{className:m,children:n.map((function(n){return(0,d.jsxs)("li",{className:_,children:[(0,d.jsx)("div",{className:x,children:n.name}),(0,d.jsxs)("div",{className:h,children:[" ",n.number]}),(0,d.jsx)(o.Z,{type:"button",variant:"outlined",onClick:function(){var e;e=n.id,s((0,c.GK)(e))},style:{width:"70px",fontSize:"12px"},children:"Delete"})]},n.id)}))})},p="Filter_filterBox__A-UPt",b=t(1538),N=function(){var n=(0,a.I0)();return(0,d.jsx)("div",{className:p,children:(0,d.jsx)(l.Z,{id:"standard-basic",type:"text",label:"Find contacts by name",onChange:function(e){return function(e){n((0,b.T)(e.target.value))}(e)},variant:"standard",style:{width:"40%"}})})},y=t(3935),L=t(8971),k=t(4217);function C(){var n=(0,a.I0)(),e=(0,a.v9)(f),t=(0,a.v9)(k.dy);return(0,s.useEffect)((function(){n((0,c.yF)())}),[n]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.q,{children:(0,d.jsx)("title",{children:"Your tasks"})}),(0,d.jsx)(y.x,{}),(0,d.jsxs)("div",{className:L.Z.wrapper,children:[(0,d.jsxs)("span",{className:L.Z.greetings,children:["Hello ",t.name]}),(0,d.jsxs)("div",{className:L.Z.container,children:[(0,d.jsx)(u,{}),(0,d.jsx)(N,{}),(0,d.jsx)("div",{className:L.Z.isLoading,children:e&&"Request in progress..."}),(0,d.jsx)(g,{})]})]})]})}},8971:function(n,e){e.Z={wrapper:"styles_wrapper__L4XUh",isLoading:"styles_isLoading__1ihOs",greetings:"styles_greetings__feWqP",container:"styles_container__yttH9",button:"styles_button__6oMs0"}}}]);
//# sourceMappingURL=907.d157ecfe.chunk.js.map