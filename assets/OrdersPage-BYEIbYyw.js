import{r as o,u as h,b as x,g as j,j as s,S as u,s as m}from"./index-1KIQ4iwD.js";import{u as p}from"./index.esm-DkHAYQbU.js";import{s as g,T as b,a as t,F as f,u as S,W as T}from"./DashboardPage-D0KIKgAx.js";import{T as F,a as P,S as O,B as W,P as B,F as D,I as w,b as I}from"./Orders.styled-vgQrSWfn.js";import{g as v}from"./getDate-DzpTH6Cq.js";const y=()=>{const[r,l]=o.useState(1),n=h(),c=x(g),a=c.result,i=Math.ceil(c.total/5);return console.log(i),o.useEffect(()=>{n(j({page:r}))},[n,r]),s.jsxs(s.Fragment,{children:[s.jsx(F,{children:s.jsxs(P,{children:[s.jsx("thead",{children:s.jsx("tr",{children:s.jsx(b,{colSpan:"6",children:"All Orders"})})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx(t,{children:"User Info"}),s.jsx(t,{children:"Address"}),s.jsx(t,{children:"Products"}),s.jsx(t,{children:"Order Date"}),s.jsx(t,{children:"Price"}),s.jsx(t,{children:"Status"})]}),a==null?void 0:a.map(e=>s.jsxs("tr",{children:[s.jsxs(f,{children:[s.jsx("img",{src:S,alt:"customer"}),s.jsx("span",{children:e.name})]}),s.jsx("td",{children:e.address}),s.jsx("td",{children:e.products}),s.jsx("td",{children:v(e.order_date)}),s.jsx("td",{children:e.price}),s.jsx("td",{children:s.jsx(O,{$variant:e.status,children:e.status})})]},e._id))]})]})}),i>0&&s.jsx(W,{children:[...Array(i)].map((e,d)=>s.jsx(B,{active:r===d+1,onClick:()=>l(d+1)},d))})]})},U=()=>{const r=window.innerWidth,l=h(),{reset:n,register:c,handleSubmit:a}=p({mode:"onBlur"}),i=e=>{l(j(e)),n()};return s.jsxs(T,{children:[r>1439&&s.jsx(u,{}),s.jsxs(D,{onSubmit:a(i),children:[s.jsx(w,{...c("name",{autoComplete:"off"}),placeholder:"User Name"}),s.jsxs(I,{type:"submit",children:[s.jsx("span",{children:"Filter"}),s.jsx("svg",{width:"14",height:"14",children:s.jsx("use",{href:`${m}#icon-filter`})})]})]}),s.jsx(y,{})]})};export{U as default};