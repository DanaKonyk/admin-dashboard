import{p as n,t as e,D as o}from"./index-5YW4Fc5m.js";const t=n.form`
  margin-block-start: 40px;
  display: flex;
  gap: 8px;
  @media (width > 1439px) {
    margin-inline-start: 80px;
  }
`,a=n.input`
  position: relative;
  padding: 13px 18px;
  inline-size: 100%;
  border: 1px solid ${e.colors.alfablue};
  border-radius: 60px;
  background: ${e.colors.light};
  outline: none;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  @media (width > 767px) {
    max-inline-size: 224px;
  }

  &::placeholder {
    color: ${e.colors.alfadarkblue};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
  }
`,l=n.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 30px;
  border-radius: 60px;
  font-size: 14px;
  line-height: 1.285;
  color: ${e.colors.light};
  background-color: ${e.colors.primary};
  transition: background-color ${e.transition}, color ${e.transition};

  &:hover {
    background-color: ${e.colors.primaryHover};
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
    line-height: 1.5;
  }

  flex-direction: row-reverse;
  gap: 10px;
`,c=n.div`
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
`,s=n.table`
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
    background-color: ${e.colors.light};
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
`,d=n.div`
  inline-size: 92px;
  block-size: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
  font-size: 12px;
  line-height: 1.25;

  ${({$variant:i})=>i==="Completed"&&o`
      color: ${e.colors.primary};
      background: #59b17a19;
    `};
  ${({$variant:i})=>i==="Confirmed"&&o`
      color: ${e.colors.confirmed};
      background: #8059e419;
    `};
  ${({$variant:i})=>i==="Pending"&&o`
      color: ${e.colors.pending};
      background: #f7904219;
    `};
  ${({$variant:i})=>i==="Cancelled"&&o`
      color: ${e.colors.accent};
      background: #e8505019;
    `};
  ${({$variant:i})=>i==="Processing"&&o`
      color: ${e.colors.processing};
      background: #70a6e819;
    `};
  ${({$variant:i})=>i==="Shipped"&&o`
      color: #00ffff;
      background: #70e8e218;
    `};
  ${({$variant:i})=>i==="Delivered"&&o`
      color: #ffff00;
      background: #e8d27017;
    `};
  ${({$variant:i})=>i==="active"||i==="Active"&&o`
        inline-size: 89px;
        color: ${e.colors.primary};
        background: #59b17a19;
      `};
  ${({$variant:i})=>i==="deactive"||i==="Deactive"&&o`
        inline-size: 89px;
        color: ${e.colors.accent};
        background: #e8505019;
      `};
`,p=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`,x=n.button`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  border: none;
  background-color: ${i=>i.active?e.colors.primary:e.colors.icon};
  cursor: pointer;

  &:hover {
    background-color: green;
  }
`;export{p as B,t as F,a as I,x as P,d as S,c as T,s as a,l as b};
