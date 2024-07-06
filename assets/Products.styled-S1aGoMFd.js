import{p as e,t as i}from"./index-tRzqldtO.js";const t=e.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (width > 767px) {
    align-items: end;
    justify-content: space-between;
  }
`,s=e.div`
  margin-block-start: 18px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  span {
    font-size: 14px;
    line-height: 1.285;
  }
`,n=e.button`
  display: flex;
  align-items: center;
  justify-content: center;

  inline-size: 42px;
  block-size: 42px;
  border-radius: 50%;
  background-color: ${i.colors.primary};
  transition: background-color ${i.transition};

  &:is(:hover, :focus) {
    background-color: ${i.colors.primaryHover};
  }

  svg {
    inline-size: 30px;
    block-size: 30px;
    fill: ${i.colors.light};
  }
`,r=e.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button:first-child {
    border: 1px solid #59b17a7f;
  }
  button:last-child {
    border: 1px solid #e850507f;
  }
`,a=e.button`
  inline-size: 32px;
  block-size: 32px;
  border-radius: 50%;
  transition: background-color ${i.transition};
  &:is(:hover, :focus) {
    background-color: #e9eb9fe1;
  }

  svg {
    inline-size: 16px;
    block-size: 16px;
  }
`;export{a as B,t as P,r as T,s as a,n as b};
