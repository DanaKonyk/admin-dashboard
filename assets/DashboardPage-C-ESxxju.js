import{p as s,t as e,j as i,s as n,S as d}from"./index-D88bKpn6.js";const t=s.ul`
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
    border: 1px solid ${e.colors.alfablue};
    border-radius: 15px;
    background-color: ${e.colors.light};
    transition: border-color ${e.transition};

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
      border-color: ${e.colors.primary};
    }
  }

  li svg {
    inline-size: 18px;
    block-size: 18px;
    stroke: ${e.colors.main};
    fill: none;
    @media (width > 767px) {
      inline-size: 20px;
      block-size: 20px;
    }
  }
`,r=s.div`
  display: flex;
  max-width: 107px;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 28px;
  column-gap: 8px;
`,l=s.h2`
  color: ${e.colors.alfadarkblue};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.166;
`,o=s.p`
  font-weight: 600;
  line-height: 1.25;
  @media (width > 767px) {
    font-size: 24px;
    line-height: 1.333;
  }
`,p=()=>i.jsxs(t,{children:[i.jsx("li",{children:i.jsxs(r,{children:[i.jsx("svg",{children:i.jsx("use",{href:`${n}#icon-db`})}),i.jsx(l,{children:"All Products"}),i.jsx(o,{children:"000"})]})}),i.jsx("li",{children:i.jsxs(r,{children:[i.jsx("svg",{children:i.jsx("use",{href:`${n}#icon-users`})}),i.jsx(l,{children:"All Suppliers"}),i.jsx(o,{children:"000"})]})}),i.jsx("li",{children:i.jsxs(r,{children:[i.jsx("svg",{children:i.jsx("use",{href:`${n}#icon-users`})}),i.jsx(l,{children:"All Customers"}),i.jsx(o,{children:"000"})]})})]}),a=()=>i.jsx("div",{children:"DashboardTable"}),j=()=>{const x=window.innerWidth;return i.jsxs(c,{children:[x>1439&&i.jsx(d,{}),i.jsx(p,{}),i.jsx(a,{})]})},c=s.div`
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
`;export{c as Wrap,j as default};
