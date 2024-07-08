import{p as w,t as j,j as e,r as v,u as C,c as I,i as F,s as $,k as T,S as q}from"./index-DKUF4puw.js";import{c as z,T as R,a as u,F as Y,u as N,W as O}from"./DashboardPage-CisNHyX1.js";import{u as D,C as B}from"./index.esm-dP-1mFgG.js";import{M as E,C as H,F as U,D as _,e as G,S as J,B as K,A as L,a as Q,P as V}from"./react-select.esm-CPDFg2Lv.js";import{T as X,a as Z,S as ee,B as se,P as M,F as re,I as te,b as oe}from"./Orders.styled-Czp8CsKb.js";import{g as ne}from"./getDate-DzpTH6Cq.js";import{o as ae,a as m,b as S,g as le}from"./AuthForms.styled-CBtgl584.js";const ie=w.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 60px;
  font-size: 14px;
  line-height: 1.285;

  color: ${j.colors.light};
  background-color: ${j.colors.primary};

  transition: background-color ${j.transition};

  @media screen and (max-width: 767px) {
    margin-block-start: 16px;
    font-size: 12px;
    line-height: 1.5;
  }
  padding: 13px 30px;
  border: 1px solid #59b17a7f;
  background-color: transparent;
  color: ${j.colors.main};
  &:hover {
    border: 1px solid ${j.colors.primaryHover};
    background-color: ${j.colors.primaryHover};
  }
`,de=w.button`
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
`,ce=()=>e.jsx("div",{children:"EditSupplier"}),ue=()=>{const[a,l]=v.useState(!1),[r,n]=v.useState(1),p=C(),i=I(z),s=i.result,d=Math.ceil(i.total/5),h=()=>r===d?void 0:n(r+1),c=()=>r===1?void 0:n(r-1);v.useEffect(()=>{p(F({page:r}))},[p,r]);const x=()=>{l(!0),document.body.style.overflow="hidden"},b=()=>{l(!1),document.body.style.overflow=""};return e.jsxs(e.Fragment,{children:[e.jsx(X,{children:e.jsxs(Z,{children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx(R,{colSpan:"7",children:"All Suppliers"})})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx(u,{children:"Suppliers Info"}),e.jsx(u,{children:"Address"}),e.jsx(u,{children:"Company"}),e.jsx(u,{children:"Deliver date"}),e.jsx(u,{children:"Amount"}),e.jsx(u,{children:"Status"}),e.jsx(u,{children:"Action"})]}),s==null?void 0:s.map(t=>e.jsxs("tr",{children:[e.jsxs(Y,{children:[e.jsx("img",{src:t.photo?t.photo:N,alt:"customer"}),e.jsx("span",{children:t.name})]}),e.jsx("td",{children:t.address}),e.jsx("td",{children:t.suppliers}),e.jsx("td",{children:ne(t.date)}),e.jsx("td",{children:t.amount}),e.jsx("td",{children:e.jsx(ee,{$variant:t.status,children:t.status})}),e.jsx("td",{children:e.jsxs(de,{type:"button",onClick:()=>x(),children:[e.jsx("svg",{children:e.jsx("use",{href:`${$}#icon-edit`})}),e.jsx("span",{children:"Edit"})]})})]},t._id))]})]})}),e.jsxs(se,{children:[e.jsx(M,{onClick:c,type:"button",disabled:r===1,children:"Back"}),e.jsxs("p",{children:[e.jsx("span",{children:r})," / ",d]}),e.jsx(M,{onClick:h,type:"button",disabled:r===d,children:"Next"})]}),a&&e.jsx(E,{isOpen:a,onRequestClose:b,children:e.jsx(ce,{onRequestClose:b})})]})},A=[{value:"Active",label:"Active"},{value:"Deactive",label:"Deactive"}],pe="MMMM D, YYYY",he=({onRequestClose:a})=>{var h,c,x,b,t,k;const l=C(),{reset:r,register:n,handleSubmit:p,control:i,formState:{errors:s}}=D({resolver:ae(le)}),d=o=>{l(T(o)),r(),a()};return e.jsxs(H,{children:[e.jsx("h2",{children:"Add a new supplier"}),e.jsxs(U,{onSubmit:p(d),children:[e.jsxs(m,{children:[e.jsx(S,{...n("name",{autoComplete:"off"}),placeholder:"Suppliers Info",style:{borderColor:s.name&&"#E85050"}}),e.jsx("p",{children:(h=s.name)==null?void 0:h.message})]}),e.jsxs(m,{children:[e.jsx(S,{...n("address",{autoComplete:"off"}),placeholder:"Address",style:{borderColor:s.address&&"#E85050"}}),e.jsx("p",{children:(c=s.address)==null?void 0:c.message})]}),e.jsxs(m,{children:[e.jsx(S,{...n("suppliers",{autoComplete:"off"}),placeholder:"Company",style:{borderColor:s.suppliers&&"#E85050"}}),e.jsx("p",{children:(x=s.suppliers)==null?void 0:x.message})]}),e.jsxs(m,{children:[e.jsx(B,{control:i,name:"date",rules:{required:"Delivery is required field"},render:({field:o,fieldState:y})=>e.jsx(_,{status:y.error?"error":void 0,ref:o.ref,name:o.name,onBlur:o.onBlur,placeholder:"Delivery date",value:o.value?G(o.value):null,format:pe,onChange:g=>{o.onChange(g?g.valueOf():null)}})}),e.jsx("p",{children:(b=s.date)==null?void 0:b.message})]}),e.jsxs(m,{children:[e.jsx(S,{...n("amount",{autoComplete:"off"}),placeholder:"Amount",style:{borderColor:s.amount&&"#E85050"}}),e.jsx("p",{children:(t=s.amount)==null?void 0:t.message})]}),e.jsxs(m,{children:[e.jsx(B,{control:i,name:"status",rules:{required:"Status is required field"},render:({fieldState:o,field:{onChange:y,name:g,ref:P,value:W}})=>e.jsx(J,{classNamePrefix:"custom-select",status:o.error?"error":void 0,name:g,ref:P,options:A,placeholder:"Status",value:A.find(f=>f.value===W),onChange:f=>y(f==null?void 0:f.value)})}),e.jsx("p",{children:(k=s.status)==null?void 0:k.message})]}),e.jsxs(K,{children:[e.jsx(L,{type:"submit",children:"Add"}),e.jsx(Q,{type:"button",onClick:()=>r(),children:"Cancel"})]})]})]})},ve=()=>{const[a,l]=v.useState(!1),r=window.innerWidth,n=C(),{reset:p,register:i,handleSubmit:s}=D({mode:"onBlur"}),d=x=>{n(F(x)),p()},h=()=>{l(!0),document.body.style.overflow="hidden"},c=()=>{l(!1),document.body.style.overflow=""};return e.jsxs(O,{children:[r>1439&&e.jsx(q,{}),e.jsxs(V,{children:[e.jsxs(re,{onSubmit:s(d),children:[e.jsx(te,{...i("name",{autoComplete:"off"}),placeholder:"User Name"}),e.jsxs(oe,{type:"submit",children:[e.jsx("span",{children:"Filter"}),e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${$}#icon-filter`})})]})]}),e.jsx(ie,{type:"button",onClick:h,children:e.jsx("span",{children:"Add a new supplier"})})]}),e.jsx(ue,{}),a&&e.jsx(E,{isOpen:a,onRequestClose:c,children:e.jsx(he,{onRequestClose:c})})]})};export{ve as default};
