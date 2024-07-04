import{p as o,t as n,d as t,r as h,u,e as f,f as m,j as e,S as j,s as $}from"./index-DCN3PcuL.js";import{u as k}from"./index.esm-vqvx4BZW.js";import{s as y,T as z,a as l,F as w,u as v,W as S}from"./DashboardPage-BG61q8pG.js";const P=o.form`
  margin-block-start: 40px;
  display: flex;
  gap: 8px;
  @media (width > 1439px) {
    margin-inline-start: 80px;
  }
`,D=o.input`
  position: relative;
  padding: 13px 18px;
  inline-size: 100%;
  border: 1px solid ${n.colors.alfablue};
  border-radius: 60px;
  background: ${n.colors.light};
  outline: none;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  @media (width > 767px) {
    max-inline-size: 224px;
  }

  &::placeholder {
    color: ${n.colors.alfadarkblue};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
  }
`,F=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 30px;
  border-radius: 60px;
  font-size: 14px;
  line-height: 1.285;
  color: ${n.colors.light};
  background-color: ${n.colors.primary};
  transition: background-color ${n.transition}, color ${n.transition};

  &:hover {
    background-color: ${n.colors.primaryHover};
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
    line-height: 1.5;
  }

  flex-direction: row-reverse;
  gap: 10px;
`,T=o.div`
  margin-block: 20px 10px;
  max-inline-size: 335px;
  overflow-y: hidden;

  @media (width > 767px) {
    max-inline-size: 704px;
  }

  @media (width > 1439px) {
    margin-inline-start: 80px;
    max-inline-size: 100%;
  }
`,B=o.table`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.166;
  white-space: nowrap;
  inline-size: 100%;

  @media (width > 767px) {
    font-size: 16px;
    line-height: 1.125;
  }

  @media (width > 1439px) {
    inline-size: 100%;
  }

  td {
    vertical-align: middle;
    padding-inline: 10px;
  }
  tbody {
    background-color: ${n.colors.light};
  }

  img {
    inline-size: 24px;
    block-size: 24px;
    border-radius: 50%;
    @media (width > 767px) {
      inline-size: 36px;
      block-size: 36px;
    }
  }
`,C=o.div`
  inline-size: 92px;
  block-size: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
  font-size: 12px;
  line-height: 1.25;

  ${({$variant:i})=>i==="Completed"&&t`
      color: ${n.colors.primary};
      background: #59b17a19;
    `};
  ${({$variant:i})=>i==="Confirmed"&&t`
      color: ${n.colors.confirmed};
      background: #8059e419;
    `};
  ${({$variant:i})=>i==="Pending"&&t`
      color: ${n.colors.pending};
      background: #f7904219;
    `};
  ${({$variant:i})=>i==="Cancelled"&&t`
      color: ${n.colors.accent};
      background: #e8505019;
    `};
  ${({$variant:i})=>i==="Processing"&&t`
      color: ${n.colors.processing};
      background: #70a6e819;
    `};
  ${({$variant:i})=>i==="Shipped"&&t`
      color: #00ffff;
      background: #70e8e218;
    `};
  ${({$variant:i})=>i==="Delivered"&&t`
      color: #ffff00;
      background: #e8d27017;
    `};
  ${({$variant:i})=>i==="active"||i==="Active"&&t`
        inline-size: 89px;
        color: ${n.colors.primary};
        background: #59b17a19;
      `};
  ${({$variant:i})=>i==="deactive"||i==="Deactive"&&t`
        inline-size: 89px;
        color: ${n.colors.accent};
        background: #e8505019;
      `};
`,O=o.div`
  padding-block: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  button {
    transition: 1s;
    &:is(:hover, :focus) {
      scale: 1.1;
    }
  }

  span {
    color: ${n.colors.primary};
  }
  @media (width > 1439px) {
    margin-inline-start: 80px;
    gap: 8px;
  }
`,g=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 55px;
  border: 1px solid ${n.colors.primary};
  font-size: 14px;
  line-height: 1.285;
  color: ${n.colors.primary};
  background-color: ${n.colors.light};
  transition: background-color ${n.transition}, color ${n.transition};

  &:hover {
    background-color: ${n.colors.primaryHover};
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
    line-height: 1.5;
    padding: 5px 10px;
  }
`,W=i=>{const r=new Date(i),a={year:"numeric",month:"long",day:"numeric"};return r.toLocaleDateString("en-US",a)},A=()=>{const[i,r]=h.useState(1),a=u(),p=f(y),c=p.result,d=Math.ceil(p.total/5),x=()=>i===d?void 0:r(i+1),b=()=>i===1?void 0:r(i-1);return h.useEffect(()=>{a(m({page:i}))},[a,i]),e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsxs(B,{children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx(z,{colSpan:"6",children:"All Orders"})})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx(l,{children:"User Info"}),e.jsx(l,{children:"Address"}),e.jsx(l,{children:"Products"}),e.jsx(l,{children:"Order Date"}),e.jsx(l,{children:"Price"}),e.jsx(l,{children:"Status"})]}),c==null?void 0:c.map(s=>e.jsxs("tr",{children:[e.jsxs(w,{children:[e.jsx("img",{src:s.photo?s.photo:v,alt:"customer"}),e.jsx("span",{children:s.name})]}),e.jsx("td",{children:s.address}),e.jsx("td",{children:s.products}),e.jsx("td",{children:W(s.order_date)}),e.jsx("td",{children:s.price}),e.jsx("td",{children:e.jsx(C,{$variant:s.status,children:s.status})})]},s._id))]})]})}),e.jsxs(O,{children:[e.jsx(g,{onClick:b,type:"button",disabled:i===1,children:"Back"}),e.jsxs("p",{children:[e.jsx("span",{children:i})," / ",d]}),e.jsx(g,{onClick:x,type:"button",disabled:i===d,children:"Next"})]})]})},H=()=>{const i=window.innerWidth,r=u(),{reset:a,register:p,handleSubmit:c}=k({mode:"onBlur"}),d=x=>{r(m(x)),console.log(x),a()};return e.jsxs(S,{children:[i>1439&&e.jsx(j,{}),e.jsxs(P,{onSubmit:c(d),children:[e.jsx(D,{...p("name",{autoComplete:"off"}),placeholder:"User Name"}),e.jsxs(F,{type:"submit",children:[e.jsx("span",{children:"Filter"}),e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${$}#icon-filter`})})]})]}),e.jsx(A,{})]})};export{H as default};
