import{r as o,u as h,b as x,C as j,j as s,S as m,s as p}from"./index-1KIQ4iwD.js";import{d as u,T as g,a,F as b,u as f,W as S}from"./DashboardPage-D0KIKgAx.js";import{u as T}from"./index.esm-DkHAYQbU.js";import{T as C,a as F,B as P,P as D,F as W,I as B,b as w}from"./Orders.styled-vgQrSWfn.js";import{g as E}from"./getDate-DzpTH6Cq.js";const I=()=>{const[t,c]=o.useState(1),i=h(),n=x(u),r=n.result,l=Math.ceil(n.total/5);return o.useEffect(()=>{i(j({page:t}))},[i,t]),s.jsxs(s.Fragment,{children:[s.jsx(C,{children:s.jsxs(F,{children:[s.jsx("thead",{children:s.jsx("tr",{children:s.jsx(g,{colSpan:"5",children:"Customers Data"})})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx(a,{children:"User Info"}),s.jsx(a,{children:"Email"}),s.jsx(a,{children:"Address"}),s.jsx(a,{children:"Phone"}),s.jsx(a,{children:"Register Date"})]}),r==null?void 0:r.map(e=>s.jsxs("tr",{children:[s.jsxs(b,{children:[s.jsx("img",{src:f,alt:"customer"}),s.jsx("span",{children:e.name})]}),s.jsx("td",{children:e.email}),s.jsx("td",{children:e.address}),s.jsx("td",{children:e.phone}),s.jsx("td",{children:E(e.register_date)})]},e._id))]})]})}),l>0&&s.jsx(P,{children:[...Array(l)].map((e,d)=>s.jsx(D,{active:t===d+1,onClick:()=>c(d+1)},d))})]})},U=()=>{const t=window.innerWidth,c=h(),{reset:i,register:n,handleSubmit:r}=T({mode:"onBlur"}),l=e=>{c(j(e)),i()};return s.jsxs(S,{children:[t>1439&&s.jsx(m,{}),s.jsxs(W,{onSubmit:r(l),children:[s.jsx(B,{...n("name",{autoComplete:"off"}),placeholder:"User Name"}),s.jsxs(w,{type:"submit",children:[s.jsx("span",{children:"Filter"}),s.jsx("svg",{width:"14",height:"14",children:s.jsx("use",{href:`${p}#icon-filter`})})]})]}),s.jsx(I,{})]})};export{U as default};
