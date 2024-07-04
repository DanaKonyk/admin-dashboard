import{p as n,t as i,f as o}from"./index-CSC4Jl1N.js";const l=n.form`
  margin-block-start: 40px;
  display: flex;
  gap: 8px;
  @media (width > 1439px) {
    margin-inline-start: 80px;
  }
`,s=n.input`
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
`,c=n.button`
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
`,p=n.div`
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
`,d=n.table`
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
`,x=n.div`
  inline-size: 92px;
  block-size: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
  font-size: 12px;
  line-height: 1.25;

  ${({$variant:e})=>e==="Completed"&&o`
      color: ${i.colors.primary};
      background: #59b17a19;
    `};
  ${({$variant:e})=>e==="Confirmed"&&o`
      color: ${i.colors.confirmed};
      background: #8059e419;
    `};
  ${({$variant:e})=>e==="Pending"&&o`
      color: ${i.colors.pending};
      background: #f7904219;
    `};
  ${({$variant:e})=>e==="Cancelled"&&o`
      color: ${i.colors.accent};
      background: #e8505019;
    `};
  ${({$variant:e})=>e==="Processing"&&o`
      color: ${i.colors.processing};
      background: #70a6e819;
    `};
  ${({$variant:e})=>e==="Shipped"&&o`
      color: #00ffff;
      background: #70e8e218;
    `};
  ${({$variant:e})=>e==="Delivered"&&o`
      color: #ffff00;
      background: #e8d27017;
    `};
  ${({$variant:e})=>e==="active"||e==="Active"&&o`
        inline-size: 89px;
        color: ${i.colors.primary};
        background: #59b17a19;
      `};
  ${({$variant:e})=>e==="deactive"||e==="Deactive"&&o`
        inline-size: 89px;
        color: ${i.colors.accent};
        background: #e8505019;
      `};
`,g=n.div`
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
`,m=n.button`
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
`,h=e=>{const r=new Date(e),t={year:"numeric",month:"long",day:"numeric"};return r.toLocaleDateString("en-US",t)};export{g as B,l as F,s as I,m as P,x as S,p as T,d as a,c as b,h as g};
