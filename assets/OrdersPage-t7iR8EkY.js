import{p as c,t as s,d as r,r as p,u as x,e as u,f as h,j as e,S as m,s as f}from"./index-Co8NjIC-.js";import{u as b}from"./index.esm-DJu2Co5w.js";import{s as j,T as $,a as l,F as z,u as k,W as w}from"./DashboardPage-9O88k78L.js";const y=c.form`
  margin-block-start: 40px;
  display: flex;
  gap: 8px;
  @media (width > 1439px) {
    margin-inline-start: 80px;
  }
`,S=c.input`
  position: relative;
  padding: 13px 18px;
  inline-size: 100%;
  border: 1px solid ${s.colors.alfablue};
  border-radius: 60px;
  background: ${s.colors.light};
  outline: none;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  @media (width > 767px) {
    max-inline-size: 224px;
  }

  &::placeholder {
    color: ${s.colors.alfadarkblue};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
  }
`,v=c.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 30px;
  border-radius: 60px;
  font-size: 14px;
  line-height: 1.285;
  color: ${s.colors.light};
  background-color: ${s.colors.primary};
  transition: background-color ${s.transition}, color ${s.transition};

  &:hover {
    background-color: ${s.colors.primaryHover};
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
    line-height: 1.5;
  }

  flex-direction: row-reverse;
  gap: 10px;
`,T=c.div`
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
`,D=c.table`
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
    background-color: ${s.colors.light};
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
`,F=c.div`
  inline-size: 92px;
  block-size: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
  font-size: 12px;
  line-height: 1.25;

  ${({$variant:i})=>i==="Completed"&&r`
      color: ${s.colors.primary};
      background: #59b17a19;
    `};
  ${({$variant:i})=>i==="Confirmed"&&r`
      color: ${s.colors.confirmed};
      background: #8059e419;
    `};
  ${({$variant:i})=>i==="Pending"&&r`
      color: ${s.colors.pending};
      background: #f7904219;
    `};
  ${({$variant:i})=>i==="Cancelled"&&r`
      color: ${s.colors.accent};
      background: #e8505019;
    `};
  ${({$variant:i})=>i==="Processing"&&r`
      color: ${s.colors.processing};
      background: #70a6e819;
    `};
  ${({$variant:i})=>i==="Shipped"&&r`
      color: #00ffff;
      background: #70e8e218;
    `};
  ${({$variant:i})=>i==="Delivered"&&r`
      color: #ffff00;
      background: #e8d27017;
    `};
  ${({$variant:i})=>i==="active"||i==="Active"&&r`
        inline-size: 89px;
        color: ${s.colors.primary};
        background: #59b17a19;
      `};
  ${({$variant:i})=>i==="deactive"||i==="Deactive"&&r`
        inline-size: 89px;
        color: ${s.colors.accent};
        background: #e8505019;
      `};
`,O=i=>{const a=new Date(i),o={year:"numeric",month:"long",day:"numeric"};return a.toLocaleDateString("en-US",o)},P=()=>{const[i,a]=p.useState(1),o=x(),t=u(j);return console.log(t),p.useEffect(()=>{o(h({page:i}))},[o,i]),e.jsx(e.Fragment,{children:e.jsx(T,{children:e.jsxs(D,{children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx($,{colSpan:"6",children:"All Orders"})})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx(l,{children:"User Info"}),e.jsx(l,{children:"Address"}),e.jsx(l,{children:"Products"}),e.jsx(l,{children:"Order Date"}),e.jsx(l,{children:"Price"}),e.jsx(l,{children:"Status"})]}),t==null?void 0:t.map(n=>e.jsxs("tr",{children:[e.jsxs(z,{children:[e.jsx("img",{src:n.photo?n.photo:k,alt:"customer"}),e.jsx("span",{children:n.name})]}),e.jsx("td",{children:n.address}),e.jsx("td",{children:n.products}),e.jsx("td",{children:O(n.order_date)}),e.jsx("td",{children:n.price}),e.jsx("td",{children:e.jsx(F,{$variant:n.status,children:n.status})})]},n._id))]})]})})})},B=()=>{const i=window.innerWidth,a=x(),{reset:o,register:t,handleSubmit:n}=b({mode:"onBlur"}),g=d=>{a(h(d)),console.log(d),o()};return e.jsxs(w,{children:[i>1439&&e.jsx(m,{}),e.jsxs(y,{onSubmit:n(g),children:[e.jsx(S,{...t("name",{autoComplete:"off"}),placeholder:"User Name"}),e.jsxs(v,{type:"submit",children:[e.jsx("span",{children:"Filter"}),e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${f}#icon-filter`})})]})]}),e.jsx(P,{})]})};export{B as default};
