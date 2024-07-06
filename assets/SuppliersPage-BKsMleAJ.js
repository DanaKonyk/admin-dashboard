import{p as u,t as n,r as h,u as j,c as f,m,j as s,s as b,S}from"./index-tRzqldtO.js";import{c as y,T as k,a as r,F as v,u as B,W as F}from"./DashboardPage-DMsxFYKp.js";import{u as T}from"./index.esm-BZ4uEyPB.js";import{P as $}from"./Products.styled-S1aGoMFd.js";import{T as w,a as P,S as z,B as W,P as p,F as A,I as C,b as E}from"./Orders.styled-DMSVJ8qj.js";import{g as I}from"./getDate-DzpTH6Cq.js";const D=u.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 60px;
  font-size: 14px;
  line-height: 1.285;

  color: ${n.colors.light};
  background-color: ${n.colors.primary};

  transition: background-color ${n.transition};

  @media screen and (max-width: 767px) {
    margin-block-start: 16px;
    font-size: 12px;
    line-height: 1.5;
  }
  padding: 13px 30px;
  border: 1px solid #59b17a7f;
  background-color: transparent;
  color: ${n.colors.main};
  &:hover {
    border: 1px solid ${n.colors.primaryHover};
    background-color: ${n.colors.primaryHover};
  }
`,M=u.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  inline-size: 82px;
  block-size: 34px;
  border-radius: 30px;
  border: 1px solid #59b17a7f;
  transition: background-color 350ms ease;

  &:is(:hover, :focus) {
    background-color: #59b17a7f;
  }

  svg {
    inline-size: 14px;
    block-size: 14px;
  }

  span {
    color: #59b17a;
    line-height: 1.125;
    font-size: 12px;
  }
`,H=()=>{const[t,a]=h.useState(1),c=j(),d=f(y),o=d.result,i=Math.ceil(d.total/5),l=()=>t===i?void 0:a(t+1),x=()=>t===1?void 0:a(t-1);return h.useEffect(()=>{c(m({page:t}))},[c,t]),s.jsxs(s.Fragment,{children:[s.jsx(w,{children:s.jsxs(P,{children:[s.jsx("thead",{children:s.jsx("tr",{children:s.jsx(k,{colSpan:"7",children:"All Suppliers"})})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx(r,{children:"Suppliers Info"}),s.jsx(r,{children:"Address"}),s.jsx(r,{children:"Company"}),s.jsx(r,{children:"Deliver date"}),s.jsx(r,{children:"Amount"}),s.jsx(r,{children:"Status"}),s.jsx(r,{children:"Action"})]}),o==null?void 0:o.map(e=>s.jsxs("tr",{children:[s.jsxs(v,{children:[s.jsx("img",{src:e.photo?e.photo:B,alt:"customer"}),s.jsx("span",{children:e.name})]}),s.jsx("td",{children:e.address}),s.jsx("td",{children:e.suppliers}),s.jsx("td",{children:I(e.date)}),s.jsx("td",{children:e.amount}),s.jsx("td",{children:s.jsx(z,{$variant:e.status,children:e.status})}),s.jsx("td",{children:s.jsxs(M,{type:"button",children:[s.jsx("svg",{children:s.jsx("use",{href:`${b}#icon-edit`})}),s.jsx("span",{children:"Edit"})]})})]},e._id))]})]})}),s.jsxs(W,{children:[s.jsx(p,{onClick:x,type:"button",disabled:t===1,children:"Back"}),s.jsxs("p",{children:[s.jsx("span",{children:t})," / ",i]}),s.jsx(p,{onClick:l,type:"button",disabled:t===i,children:"Next"})]})]})},G=()=>{const[t,a]=h.useState(!1),c=window.innerWidth,d=j(),{reset:o,register:i,handleSubmit:l}=T({mode:"onBlur"}),x=g=>{d(m(g)),o()},e=()=>{a(!0),document.body.style.overflow="hidden"};return s.jsxs(F,{children:[c>1439&&s.jsx(S,{}),s.jsxs($,{children:[s.jsxs(A,{onSubmit:l(x),children:[s.jsx(C,{...i("name",{autoComplete:"off"}),placeholder:"User Name"}),s.jsxs(E,{type:"submit",children:[s.jsx("span",{children:"Filter"}),s.jsx("svg",{width:"14",height:"14",children:s.jsx("use",{href:`${b}#icon-filter`})})]})]}),s.jsx(D,{type:"button",onClick:e,children:s.jsx("span",{children:"Add a new product"})})]}),s.jsx(H,{})]})};export{G as default};
