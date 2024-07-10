import{p as r,t as n,D as t,u,b as j,r as m,E as w,j as e,s as d,S as z}from"./index-5YW4Fc5m.js";const y=r.ul`
  margin-block-start: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (width > 1439px) {
    margin-inline-start: 80px;
  }
  li {
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    inline-size: 157px;
    block-size: 98px;

    cursor: pointer;
    border: 1px solid ${n.colors.alfablue};
    border-radius: 15px;
    background-color: ${n.colors.light};
    transition: border-color ${n.transition};

    @media (width > 767px) {
      padding: 14px 18px;
      inline-size: 221px;
      block-size: 108px;
    }
    @media (width > 1439px) {
      inline-size: 240px;
      block-size: 108px;
    }

    &:is(:hover, :focus, .active) {
      border-color: ${n.colors.primary};
    }
  }

  li svg {
    inline-size: 18px;
    block-size: 18px;
    stroke: ${n.colors.main};
    fill: none;
    @media (width > 767px) {
      inline-size: 20px;
      block-size: 20px;
    }
  }
`,x=r.div`
  display: flex;
  max-width: 107px;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 28px;
  column-gap: 8px;
`,c=r.h2`
  color: ${n.colors.alfadarkblue};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.166;
`,p=r.p`
  font-weight: 600;
  line-height: 1.25;
  @media (width > 767px) {
    font-size: 24px;
    line-height: 1.333;
  }
`,I=r.div`
  margin-block: 20px 80px;
  max-inline-size: 335px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 68px;
  @media (width > 767px) {
    max-inline-size: 704px;
  }
  @media (width > 1439px) {
    align-items: start;
    margin-inline-start: 80px;
    max-inline-size: 1280px;
    flex-direction: row;
    gap: 20px;
  }
`,A=r.div`
  border-radius: 8px;
  overflow: auto;
  @media (width > 767px) {
    max-block-size: 435px;
  }
  @media (width > 1439px) {
    max-inline-size: 630px;
  }
`,h=r.table`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.166;
  white-space: nowrap;
  inline-size: 100%;

  @media (width > 767px) {
    font-size: 16px;
    line-height: 1.125;
  }
  td {
    padding-inline: 20px;
  }
  &.firstTable td {
    vertical-align: middle;
    padding-inline: 15px;
  }
  tbody {
    background-color: ${n.colors.light};
  }

  img {
    inline-size: auto;
    border-radius: 100%;
    block-size: 24px;
    @media (width > 767px) {
      inline-size: 36px;
      block-size: 36px;
    }
  }
`,g=r.th`
  padding: 14px;
  border-radius: 8px 8px 0 0;
  background-color: ${n.colors.tablehead};
  text-align: left;
  font-size: 20px;
  @media (width > 767px) {
    padding: 20px;
  }
`,a=r.td`
  color: ${n.colors.alfadarkblue};
  padding: 10px 14px;
  @media (width > 767px) {
    padding: 20px 29px;
  }
`,b=r.td`
  padding-inline: 14px 10px;
  @media (width > 767px) {
    padding-inline: 20px 15px;
    padding-block: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`,k=r.td`
  @media (width < 768px) {
    max-inline-size: 118px;
  }
  padding: 10px;
  white-space: normal;
`,D=r.div`
  inline-size: 80px;
  block-size: 23px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
  font-size: 12px;
  line-height: 1.25;

  ${({$variant:i})=>i==="Expense"&&t`
      color: ${n.colors.accent};
      background-color: #e8505019;
    `};
  ${({$variant:i})=>i==="Income"&&t`
      color: ${n.colors.primary};
      background-color: #59b17a19;
    `};
  ${({$variant:i})=>i==="Error"&&t`
      color: ${n.colors.main};
      background-color: ${n.colors.alfablue};
    `};
`,f=i=>i.admin.dashboard,H=i=>i.admin.orders,R=i=>i.admin.products,S=i=>i.admin.suppliers,F=i=>i.admin.customers,E=()=>{const i=u(),{allCustomers:l,allProducts:o,allSuppliers:s}=j(f);return m.useEffect(()=>{i(w())},[i]),e.jsxs(y,{children:[e.jsx("li",{children:e.jsxs(x,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${d}#icon-db`})}),e.jsx(c,{children:"All Products"}),e.jsx(p,{children:o})]})}),e.jsx("li",{children:e.jsxs(x,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${d}#icon-users`})}),e.jsx(c,{children:"All Suppliers"}),e.jsx(p,{children:s})]})}),e.jsx("li",{children:e.jsxs(x,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${d}#icon-users`})}),e.jsx(c,{children:"All Customers"}),e.jsx(p,{children:l})]})})]})},Q="data:image/webp;base64,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",C=()=>{const i=u(),{recentCustomers:l,incomeExpences:o}=j(f);return m.useEffect(()=>{i(w())},[i]),e.jsxs(I,{children:[e.jsx(A,{children:e.jsxs(h,{className:"firstTable",children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx(g,{colSpan:"6",children:"Recent Customers"})})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Email"}),e.jsx(a,{children:"Spent"})]}),l==null?void 0:l.map(s=>e.jsxs("tr",{children:[e.jsxs(b,{children:[e.jsx("img",{src:Q,alt:"customer"}),e.jsx("span",{children:s.name})]}),e.jsx("td",{children:s.email}),e.jsx("td",{children:s.spent})]},s._id))]})]})}),e.jsx(A,{children:e.jsxs(h,{children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx(g,{colSpan:"3",children:"Income/Expenses"})})}),e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx(a,{colSpan:"3",children:"Today"})}),o==null?void 0:o.map(s=>e.jsxs("tr",{children:[e.jsx(b,{children:e.jsx(D,{$variant:s.type,children:s.type})}),e.jsx(k,{children:s.name}),e.jsx("td",{style:{color:`${s.type}`=="Expence"?"#85050":`${s.type}`=="Income"?"#59B17A":"#1D1E21",textDecoration:`${s.type}`=="Error"&&"line-through"},children:s.amount})]},s._id))]})]})})]})},v=()=>{const i=window.innerWidth;return e.jsxs(B,{children:[i>1439&&e.jsx(z,{}),e.jsx(E,{}),e.jsx(C,{})]})},B=r.div`
  inline-size: 375px;
  padding-inline: 20px;
  margin: 0 auto;

  @media (width > 767px) {
    inline-size: 768px;
    padding-inline: 32px;
  }

  @media (width > 1439px) {
    inline-size: 1440px;
    padding-inline: 40px;
  }
`,K=Object.freeze(Object.defineProperty({__proto__:null,Wrap:B,default:v},Symbol.toStringTag,{value:"Module"}));export{K as D,b as F,g as T,B as W,a,R as b,S as c,F as d,H as s,Q as u};
