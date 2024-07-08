import{p as P,t as y,u as E,j as e,i as J,r as A,c as K,k as I,s as W,m as L,S as O}from"./index-DbsQrP8K.js";import{c as Q,T as X,a as v,F as Z,u as ee,W as se}from"./DashboardPage-Ch1id2bW.js";import{u as D,C as B}from"./index.esm-BVPGrh4s.js";import{C as T,F as q,D as Y,S as z,B as R,A as N,a as V,M as H,e as re,P as te}from"./react-select.esm-pwnN1zJe.js";import{T as ae,a as oe,S as ne,B as le,P as $,F as de,I as ie,b as ce}from"./Orders.styled-C4EZGEfW.js";import{g as _}from"./getDate-DzpTH6Cq.js";import{o as U,g as ue,a as d,b as j,h as pe}from"./AuthForms.styled-D1argEwX.js";const he=P.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 60px;
  font-size: 14px;
  line-height: 1.285;

  color: ${y.colors.light};
  background-color: ${y.colors.primary};

  transition: background-color ${y.transition};

  @media screen and (max-width: 767px) {
    margin-block-start: 16px;
    font-size: 12px;
    line-height: 1.5;
  }
  padding: 13px 30px;
  border: 1px solid #59b17a7f;
  background-color: transparent;
  color: ${y.colors.main};
  &:hover {
    border: 1px solid ${y.colors.primaryHover};
    background-color: ${y.colors.primaryHover};
  }
`,xe=P.button`
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
`,F=[{value:"Active",label:"Active"},{value:"Deactive",label:"Deactive"}],me="MMMM D, YYYY",je=({onRequestClose:u,supplier:o})=>{var h,f,b,m,s,S;const x=E(),c=o._id,{reset:a,register:l,handleSubmit:t,control:p,formState:{errors:r}}=D({resolver:U(ue)}),i=n=>{x(J({id:c,value:n})),a(),u()};return e.jsxs(T,{children:[e.jsx("h2",{children:"Edit supplier"}),e.jsxs(q,{onSubmit:t(i),children:[e.jsxs(d,{children:[e.jsx(j,{...l("name",{autoComplete:"off"}),placeholder:"Suppliers Info",style:{borderColor:r.name&&"#E85050"},defaultValue:o.name}),e.jsx("p",{children:(h=r.name)==null?void 0:h.message})]}),e.jsxs(d,{children:[e.jsx(j,{...l("address",{autoComplete:"off"}),placeholder:"Address",style:{borderColor:r.address&&"#E85050"},defaultValue:o.address}),e.jsx("p",{children:(f=r.address)==null?void 0:f.message})]}),e.jsxs(d,{children:[e.jsx(j,{...l("suppliers",{autoComplete:"off"}),placeholder:"Company",style:{borderColor:r.suppliers&&"#E85050"},defaultValue:o.suppliers}),e.jsx("p",{children:(b=r.suppliers)==null?void 0:b.message})]}),e.jsxs(d,{children:[e.jsx(B,{control:p,name:"date",render:({field:n,fieldState:M})=>e.jsx(Y,{status:M.error?"error":void 0,ref:n.ref,name:n.name,onBlur:n.onBlur,placeholder:_(o.date),value:n.value?n.value:null,format:me,onChange:C=>{n.onChange(C?C.valueOf():null)}})}),e.jsx("p",{children:(m=r.date)==null?void 0:m.message})]}),e.jsxs(d,{children:[e.jsx(j,{...l("amount",{autoComplete:"off"}),placeholder:"Amount",style:{borderColor:r.amount&&"#E85050"},defaultValue:o.amount}),e.jsx("p",{children:(s=r.amount)==null?void 0:s.message})]}),e.jsxs(d,{children:[e.jsx(B,{control:p,name:"status",render:({fieldState:n,field:{onChange:M,name:C,ref:g,value:G}})=>e.jsx(z,{classNamePrefix:"custom-select",status:n.error?"error":void 0,name:C,ref:g,options:F,placeholder:o.status,value:F.find(k=>k.value===G),onChange:k=>M(k==null?void 0:k.value)})}),e.jsx("p",{children:(S=r.status)==null?void 0:S.message})]}),e.jsxs(R,{children:[e.jsx(N,{type:"submit",children:"Save"}),e.jsx(V,{type:"button",onClick:()=>a(),children:"Cancel"})]})]})]})},fe=()=>{const[u,o]=A.useState(!1),[x,c]=A.useState(null),[a,l]=A.useState(1),t=E(),p=K(Q),r=p.result,i=Math.ceil(p.total/5),h=()=>a===i?void 0:l(a+1),f=()=>a===1?void 0:l(a-1);A.useEffect(()=>{t(I({page:a}))},[t,a]);const b=s=>{o(!0),c(s),document.body.style.overflow="hidden"},m=()=>{o(!1),document.body.style.overflow=""};return e.jsxs(e.Fragment,{children:[e.jsx(ae,{children:e.jsxs(oe,{children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx(X,{colSpan:"7",children:"All Suppliers"})})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx(v,{children:"Suppliers Info"}),e.jsx(v,{children:"Address"}),e.jsx(v,{children:"Company"}),e.jsx(v,{children:"Deliver date"}),e.jsx(v,{children:"Amount"}),e.jsx(v,{children:"Status"}),e.jsx(v,{children:"Action"})]}),r==null?void 0:r.map(s=>e.jsxs("tr",{children:[e.jsxs(Z,{children:[e.jsx("img",{src:s.photo?s.photo:ee,alt:"customer"}),e.jsx("span",{children:s.name})]}),e.jsx("td",{children:s.address}),e.jsx("td",{children:s.suppliers}),e.jsx("td",{children:_(s.date)}),e.jsx("td",{children:s.amount}),e.jsx("td",{children:e.jsx(ne,{$variant:s.status,children:s.status})}),e.jsx("td",{children:e.jsxs(xe,{type:"button",onClick:()=>b(s),children:[e.jsx("svg",{children:e.jsx("use",{href:`${W}#icon-edit`})}),e.jsx("span",{children:"Edit"})]})})]},s._id))]})]})}),e.jsxs(le,{children:[e.jsx($,{onClick:f,type:"button",disabled:a===1,children:"Back"}),e.jsxs("p",{children:[e.jsx("span",{children:a})," / ",i]}),e.jsx($,{onClick:h,type:"button",disabled:a===i,children:"Next"})]}),u&&e.jsx(H,{isOpen:u,onRequestClose:m,children:e.jsx(je,{onRequestClose:m,supplier:x})})]})},w=[{value:"Active",label:"Active"},{value:"Deactive",label:"Deactive"}],be="MMMM D, YYYY",ge=({onRequestClose:u})=>{var r,i,h,f,b,m;const o=E(),{reset:x,register:c,handleSubmit:a,control:l,formState:{errors:t}}=D({resolver:U(pe)}),p=s=>{o(L(s)),x(),u()};return e.jsxs(T,{children:[e.jsx("h2",{children:"Add a new supplier"}),e.jsxs(q,{onSubmit:a(p),children:[e.jsxs(d,{children:[e.jsx(j,{...c("name",{autoComplete:"off"}),placeholder:"Suppliers Info",style:{borderColor:t.name&&"#E85050"}}),e.jsx("p",{children:(r=t.name)==null?void 0:r.message})]}),e.jsxs(d,{children:[e.jsx(j,{...c("address",{autoComplete:"off"}),placeholder:"Address",style:{borderColor:t.address&&"#E85050"}}),e.jsx("p",{children:(i=t.address)==null?void 0:i.message})]}),e.jsxs(d,{children:[e.jsx(j,{...c("suppliers",{autoComplete:"off"}),placeholder:"Company",style:{borderColor:t.suppliers&&"#E85050"}}),e.jsx("p",{children:(h=t.suppliers)==null?void 0:h.message})]}),e.jsxs(d,{children:[e.jsx(B,{control:l,name:"date",rules:{required:"Delivery is required field"},render:({field:s,fieldState:S})=>e.jsx(Y,{status:S.error?"error":void 0,ref:s.ref,name:s.name,onBlur:s.onBlur,placeholder:"Delivery date",value:s.value?re(s.value):null,format:be,onChange:n=>{s.onChange(n?n.valueOf():null)}})}),e.jsx("p",{children:(f=t.date)==null?void 0:f.message})]}),e.jsxs(d,{children:[e.jsx(j,{...c("amount",{autoComplete:"off"}),placeholder:"Amount",style:{borderColor:t.amount&&"#E85050"}}),e.jsx("p",{children:(b=t.amount)==null?void 0:b.message})]}),e.jsxs(d,{children:[e.jsx(B,{control:l,name:"status",rules:{required:"Status is required field"},render:({fieldState:s,field:{onChange:S,name:n,ref:M,value:C}})=>e.jsx(z,{classNamePrefix:"custom-select",status:s.error?"error":void 0,name:n,ref:M,options:w,placeholder:"Status",value:w.find(g=>g.value===C),onChange:g=>S(g==null?void 0:g.value)})}),e.jsx("p",{children:(m=t.status)==null?void 0:m.message})]}),e.jsxs(R,{children:[e.jsx(N,{type:"submit",children:"Add"}),e.jsx(V,{type:"button",onClick:()=>x(),children:"Cancel"})]})]})]})},Be=()=>{const[u,o]=A.useState(!1),x=window.innerWidth,c=E(),{reset:a,register:l,handleSubmit:t}=D({mode:"onBlur"}),p=h=>{c(I(h)),a()},r=()=>{o(!0),document.body.style.overflow="hidden"},i=()=>{o(!1),document.body.style.overflow=""};return e.jsxs(se,{children:[x>1439&&e.jsx(O,{}),e.jsxs(te,{children:[e.jsxs(de,{onSubmit:t(p),children:[e.jsx(ie,{...l("name",{autoComplete:"off"}),placeholder:"User Name"}),e.jsxs(ce,{type:"submit",children:[e.jsx("span",{children:"Filter"}),e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${W}#icon-filter`})})]})]}),e.jsx(he,{type:"button",onClick:r,children:e.jsx("span",{children:"Add a new supplier"})})]}),e.jsx(fe,{}),u&&e.jsx(H,{isOpen:u,onRequestClose:i,children:e.jsx(ge,{onRequestClose:i})})]})};export{Be as default};
