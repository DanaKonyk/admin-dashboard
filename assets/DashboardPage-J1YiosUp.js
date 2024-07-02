import{p as l,t as n,d as o,u as m,e as u,r as f,f as w,j as i,s as t,S as $}from"./index-U5U_I-aY.js";const k=l.ul`
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
`,x=l.div`
  display: flex;
  max-width: 107px;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 28px;
  column-gap: 8px;
`,p=l.h2`
  color: ${n.colors.alfadarkblue};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.166;
`,c=l.p`
  font-weight: 600;
  line-height: 1.25;
  @media (width > 767px) {
    font-size: 24px;
    line-height: 1.333;
  }
`,y=l.div`
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
`,h=l.div`
  border-radius: 8px;
  overflow: auto;
  @media (width > 767px) {
    max-block-size: 435px;
  }
  @media (width > 1439px) {
    max-inline-size: 630px;
  }
`,g=l.table`
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
    block-size: 24px;
    @media (width > 767px) {
      block-size: 36px;
    }
  }
`,j=l.th`
  padding: 14px;
  border-radius: 8px 8px 0 0;
  background-color: ${n.colors.tablehead};
  text-align: left;
  font-size: 20px;
  @media (width > 767px) {
    padding: 20px;
  }
`,a=l.td`
  color: ${n.colors.alfadarkblue};
  padding: 10px 14px;
  @media (width > 767px) {
    padding: 20px 29px;
  }
`,b=l.td`
  padding-inline: 14px 10px;
  @media (width > 767px) {
    padding-inline: 20px 15px;
    padding-block: 14px;
    display: flex;
    align-items: center;
  }
`,v=l.td`
  @media (width < 768px) {
    max-inline-size: 118px;
  }
  padding: 10px;
  white-space: normal;
`,S=l.div`
  inline-size: 80px;
  block-size: 23px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
  font-size: 12px;
  line-height: 1.25;

  ${({$variant:s})=>s==="Expense"&&o`
      color: ${n.colors.accent};
      background-color: #e8505019;
    `};
  ${({$variant:s})=>s==="Income"&&o`
      color: ${n.colors.primary};
      background-color: #59b17a19;
    `};
  ${({$variant:s})=>s==="Error"&&o`
      color: ${n.colors.main};
      background-color: ${n.colors.alfablue};
    `};
`,z=s=>s.admin.dashboard,T=()=>{const s=m(),{allSCustomers:r,allSProducts:d,allSuppliers:e}=u(z);return f.useEffect(()=>{s(w())},[s]),i.jsxs(k,{children:[i.jsx("li",{children:i.jsxs(x,{children:[i.jsx("svg",{children:i.jsx("use",{href:`${t}#icon-db`})}),i.jsx(p,{children:"All Products"}),i.jsx(c,{children:d})]})}),i.jsx("li",{children:i.jsxs(x,{children:[i.jsx("svg",{children:i.jsx("use",{href:`${t}#icon-users`})}),i.jsx(p,{children:"All Suppliers"}),i.jsx(c,{children:e})]})}),i.jsx("li",{children:i.jsxs(x,{children:[i.jsx("svg",{children:i.jsx("use",{href:`${t}#icon-users`})}),i.jsx(p,{children:"All Customers"}),i.jsx(c,{children:r})]})})]})},E="/admin-dashboard/assets/user-img-DLvI3f3O.webp",D=()=>{const s=m(),{recentCustomers:r,incomeExpences:d}=u(z);return f.useEffect(()=>{s(w())},[s]),i.jsxs(y,{children:[i.jsx(h,{children:i.jsxs(g,{className:"firstTable",children:[i.jsx("thead",{children:i.jsx("tr",{children:i.jsx(j,{colSpan:"6",children:"Recent Customers"})})}),i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx(a,{children:"Name"}),i.jsx(a,{children:"Email"}),i.jsx(a,{children:"Spent"})]}),r==null?void 0:r.map(e=>i.jsxs("tr",{children:[i.jsxs(b,{children:[i.jsx("img",{src:e.photo?e.photo:E,alt:"customer"}),i.jsx("span",{children:e.name})]}),i.jsx("td",{children:e.email}),i.jsx("td",{children:e.spent})]},e._id))]})]})}),i.jsx(h,{children:i.jsxs(g,{children:[i.jsx("thead",{children:i.jsx("tr",{children:i.jsx(j,{colSpan:"3",children:"Income/Expenses"})})}),i.jsxs("tbody",{children:[i.jsx("tr",{children:i.jsx(a,{colSpan:"3",children:"Today"})}),d==null?void 0:d.map(e=>i.jsxs("tr",{children:[i.jsx(b,{children:i.jsx(S,{$variant:e.type,children:e.type})}),i.jsx(v,{children:e.name}),i.jsx("td",{style:{color:`${e.type}`=="Expence"?"#85050":`${e.type}`=="Income"?"#59B17A":"#1D1E21",textDecoration:`${e.type}`=="Error"&&"line-through"},children:e.amount})]},e._id))]})]})})]})},I=()=>{const s=window.innerWidth;return i.jsxs(W,{children:[s>1439&&i.jsx($,{}),i.jsx(T,{}),i.jsx(D,{})]})},W=l.div`
  inline-size: 375px;
  padding-inline: 20px;

  @media (width > 767px) {
    inline-size: 768px;
    padding-inline: 32px;
  }

  @media (width > 1439px) {
    inline-size: 1440px;
    padding-inline: 40px;
  }
`;export{W as Wrap,I as default};
