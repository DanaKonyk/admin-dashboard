import{p as w,t as y,u as D,j as e,h as G,r as k,b as J,i as P,s as I,k as K,S as L}from"./index-5YW4Fc5m.js";import{c as O,T as Q,a as v,F as X,u as Z,W as ee}from"./DashboardPage-R09zhwOI.js";import{u as E,C as B}from"./index.esm-diavR8b8.js";import{C as W,F as T,D as q,S as Y,B as z,A as R,a as V,M as N,e as se,P as re}from"./react-select.esm-B-9KoY6Y.js";import{T as te,a as ae,S as oe,B as le,P as ne,F as de,I as ie,b as ce}from"./Orders.styled-DNCE5pvg.js";import{g as _}from"./getDate-DzpTH6Cq.js";import{o as H,g as ue,a as n,b,h as pe}from"./AuthForms.styled-BD9bV73q.js";const he=w.button`
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
`,xe=w.button`
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
`,$=[{value:"Active",label:"Active"},{value:"Deactive",label:"Deactive"}],me="MMMM D, YYYY",je=({onRequestClose:p,supplier:a})=>{var x,f,s,m,l,S;const j=D(),i=a._id,{reset:c,register:d,handleSubmit:t,control:h,formState:{errors:r}}=E({resolver:H(ue)}),u=o=>{j(G({id:i,value:o})),c(),p()};return e.jsxs(W,{children:[e.jsx("h2",{children:"Edit supplier"}),e.jsxs(T,{onSubmit:t(u),children:[e.jsxs(n,{children:[e.jsx(b,{...d("name",{autoComplete:"off"}),placeholder:"Suppliers Info",style:{borderColor:r.name&&"#E85050"},defaultValue:a.name}),e.jsx("p",{children:(x=r.name)==null?void 0:x.message})]}),e.jsxs(n,{children:[e.jsx(b,{...d("address",{autoComplete:"off"}),placeholder:"Address",style:{borderColor:r.address&&"#E85050"},defaultValue:a.address}),e.jsx("p",{children:(f=r.address)==null?void 0:f.message})]}),e.jsxs(n,{children:[e.jsx(b,{...d("suppliers",{autoComplete:"off"}),placeholder:"Company",style:{borderColor:r.suppliers&&"#E85050"},defaultValue:a.suppliers}),e.jsx("p",{children:(s=r.suppliers)==null?void 0:s.message})]}),e.jsxs(n,{children:[e.jsx(B,{control:h,name:"date",render:({field:o,fieldState:A})=>e.jsx(q,{status:A.error?"error":void 0,ref:o.ref,name:o.name,onBlur:o.onBlur,placeholder:_(a.date),value:o.value?o.value:null,format:me,onChange:C=>{o.onChange(C?C.valueOf():null)}})}),e.jsx("p",{children:(m=r.date)==null?void 0:m.message})]}),e.jsxs(n,{children:[e.jsx(b,{...d("amount",{autoComplete:"off"}),placeholder:"Amount",style:{borderColor:r.amount&&"#E85050"},defaultValue:a.amount}),e.jsx("p",{children:(l=r.amount)==null?void 0:l.message})]}),e.jsxs(n,{children:[e.jsx(B,{control:h,name:"status",render:({fieldState:o,field:{onChange:A,name:C,ref:g,value:U}})=>e.jsx(Y,{classNamePrefix:"custom-select",status:o.error?"error":void 0,name:C,ref:g,options:$,placeholder:a.status,value:$.find(M=>M.value===U),onChange:M=>A(M==null?void 0:M.value)})}),e.jsx("p",{children:(S=r.status)==null?void 0:S.message})]}),e.jsxs(z,{children:[e.jsx(R,{type:"submit",children:"Save"}),e.jsx(V,{type:"button",onClick:()=>c(),children:"Cancel"})]})]})]})},fe=()=>{const[p,a]=k.useState(!1),[j,i]=k.useState(null),[c,d]=k.useState(1),t=D(),h=J(O),r=h.result,u=Math.ceil(h.total/5);k.useEffect(()=>{t(P({page:c}))},[t,c]);const x=s=>{a(!0),i(s),document.body.style.overflow="hidden"},f=()=>{a(!1),document.body.style.overflow=""};return e.jsxs(e.Fragment,{children:[e.jsx(te,{children:e.jsxs(ae,{children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx(Q,{colSpan:"7",children:"All Suppliers"})})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx(v,{children:"Suppliers Info"}),e.jsx(v,{children:"Address"}),e.jsx(v,{children:"Company"}),e.jsx(v,{children:"Deliver date"}),e.jsx(v,{children:"Amount"}),e.jsx(v,{children:"Status"}),e.jsx(v,{children:"Action"})]}),r==null?void 0:r.map(s=>e.jsxs("tr",{children:[e.jsxs(X,{children:[e.jsx("img",{src:s.photo?s.photo:Z,alt:"customer"}),e.jsx("span",{children:s.name})]}),e.jsx("td",{children:s.address}),e.jsx("td",{children:s.suppliers}),e.jsx("td",{children:_(s.date)}),e.jsx("td",{children:s.amount}),e.jsx("td",{children:e.jsx(oe,{$variant:s.status,children:s.status})}),e.jsx("td",{children:e.jsxs(xe,{type:"button",onClick:()=>x(s),children:[e.jsx("svg",{children:e.jsx("use",{href:`${I}#icon-edit`})}),e.jsx("span",{children:"Edit"})]})})]},s._id))]})]})}),u>0&&e.jsx(le,{children:[...Array(u)].map((s,m)=>e.jsx(ne,{active:c===m+1,onClick:()=>d(m+1)},m))}),p&&e.jsx(N,{isOpen:p,onRequestClose:f,children:e.jsx(je,{onRequestClose:f,supplier:j})})]})},F=[{value:"Active",label:"Active"},{value:"Deactive",label:"Deactive"}],be="MMMM D, YYYY",ge=({onRequestClose:p})=>{var r,u,x,f,s,m;const a=D(),{reset:j,register:i,handleSubmit:c,control:d,formState:{errors:t}}=E({resolver:H(pe)}),h=l=>{a(K(l)),j(),p()};return e.jsxs(W,{children:[e.jsx("h2",{children:"Add a new supplier"}),e.jsxs(T,{onSubmit:c(h),children:[e.jsxs(n,{children:[e.jsx(b,{...i("name",{autoComplete:"off"}),placeholder:"Suppliers Info",style:{borderColor:t.name&&"#E85050"}}),e.jsx("p",{children:(r=t.name)==null?void 0:r.message})]}),e.jsxs(n,{children:[e.jsx(b,{...i("address",{autoComplete:"off"}),placeholder:"Address",style:{borderColor:t.address&&"#E85050"}}),e.jsx("p",{children:(u=t.address)==null?void 0:u.message})]}),e.jsxs(n,{children:[e.jsx(b,{...i("suppliers",{autoComplete:"off"}),placeholder:"Company",style:{borderColor:t.suppliers&&"#E85050"}}),e.jsx("p",{children:(x=t.suppliers)==null?void 0:x.message})]}),e.jsxs(n,{children:[e.jsx(B,{control:d,name:"date",rules:{required:"Delivery is required field"},render:({field:l,fieldState:S})=>e.jsx(q,{status:S.error?"error":void 0,ref:l.ref,name:l.name,onBlur:l.onBlur,placeholder:"Delivery date",value:l.value?se(l.value):null,format:be,onChange:o=>{l.onChange(o?o.valueOf():null)}})}),e.jsx("p",{children:(f=t.date)==null?void 0:f.message})]}),e.jsxs(n,{children:[e.jsx(b,{...i("amount",{autoComplete:"off"}),placeholder:"Amount",style:{borderColor:t.amount&&"#E85050"}}),e.jsx("p",{children:(s=t.amount)==null?void 0:s.message})]}),e.jsxs(n,{children:[e.jsx(B,{control:d,name:"status",rules:{required:"Status is required field"},render:({fieldState:l,field:{onChange:S,name:o,ref:A,value:C}})=>e.jsx(Y,{classNamePrefix:"custom-select",status:l.error?"error":void 0,name:o,ref:A,options:F,placeholder:"Status",value:F.find(g=>g.value===C),onChange:g=>S(g==null?void 0:g.value)})}),e.jsx("p",{children:(m=t.status)==null?void 0:m.message})]}),e.jsxs(z,{children:[e.jsx(R,{type:"submit",children:"Add"}),e.jsx(V,{type:"button",onClick:()=>j(),children:"Cancel"})]})]})]})},Be=()=>{const[p,a]=k.useState(!1),j=window.innerWidth,i=D(),{reset:c,register:d,handleSubmit:t}=E({mode:"onBlur"}),h=x=>{i(P(x)),c()},r=()=>{a(!0),document.body.style.overflow="hidden"},u=()=>{a(!1),document.body.style.overflow=""};return e.jsxs(ee,{children:[j>1439&&e.jsx(L,{}),e.jsxs(re,{children:[e.jsxs(de,{onSubmit:t(h),children:[e.jsx(ie,{...d("name",{autoComplete:"off"}),placeholder:"User Name"}),e.jsxs(ce,{type:"submit",children:[e.jsx("span",{children:"Filter"}),e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${I}#icon-filter`})})]})]}),e.jsx(he,{type:"button",onClick:r,children:e.jsx("span",{children:"Add a new supplier"})})]}),e.jsx(fe,{}),p&&e.jsx(N,{isOpen:p,onRequestClose:u,children:e.jsx(ge,{onRequestClose:u})})]})};export{Be as default};
