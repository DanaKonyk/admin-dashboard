import{p as n,t as i,E as e}from"./index-UHUkiOjR.js";const t=n.form`
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
  border: 1px solid ${i.colors.alfablue};
  border-radius: 60px;
  background: ${i.colors.light};
  outline: none;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  @media (width > 767px) {
    max-inline-size: 224px;
  }

  &::placeholder {
    color: ${i.colors.alfadarkblue};
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
  color: ${i.colors.light};
  background-color: ${i.colors.primary};
  transition: background-color ${i.transition}, color ${i.transition};

  &:hover {
    background-color: ${i.colors.primaryHover};
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
    line-height: 1.5;
  }

  flex-direction: row-reverse;
  gap: 10px;
`,s=n.div`
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
`,c=n.table`
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
    background-color: ${i.colors.light};
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
`,p=n.div`
  inline-size: 92px;
  block-size: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
  font-size: 12px;
  line-height: 1.25;

  ${({$variant:o})=>o==="Completed"&&e`
      color: ${i.colors.primary};
      background: #59b17a19;
    `};
  ${({$variant:o})=>o==="Confirmed"&&e`
      color: ${i.colors.confirmed};
      background: #8059e419;
    `};
  ${({$variant:o})=>o==="Pending"&&e`
      color: ${i.colors.pending};
      background: #f7904219;
    `};
  ${({$variant:o})=>o==="Cancelled"&&e`
      color: ${i.colors.accent};
      background: #e8505019;
    `};
  ${({$variant:o})=>o==="Processing"&&e`
      color: ${i.colors.processing};
      background: #70a6e819;
    `};
  ${({$variant:o})=>o==="Shipped"&&e`
      color: #00ffff;
      background: #70e8e218;
    `};
  ${({$variant:o})=>o==="Delivered"&&e`
      color: #ffff00;
      background: #e8d27017;
    `};
  ${({$variant:o})=>o==="active"||o==="Active"&&e`
        inline-size: 89px;
        color: ${i.colors.primary};
        background: #59b17a19;
      `};
  ${({$variant:o})=>o==="deactive"||o==="Deactive"&&e`
        inline-size: 89px;
        color: ${i.colors.accent};
        background: #e8505019;
      `};
`,d=n.div`
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
    color: ${i.colors.primary};
  }
  @media (width > 1439px) {
    margin-inline-start: 80px;
    gap: 8px;
  }
`,x=n.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 55px;
  border: 1px solid ${i.colors.primary};
  font-size: 14px;
  line-height: 1.285;
  color: ${i.colors.primary};
  background-color: ${i.colors.light};
  transition: background-color ${i.transition}, color ${i.transition};

  &:hover {
    background-color: ${i.colors.primaryHover};
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
    line-height: 1.5;
    padding: 5px 10px;
  }
`;export{d as B,t as F,a as I,x as P,p as S,s as T,c as a,l as b};
