import{r as j,u as w,j as s,l as f,s as n,a as y,n as b,p as E}from"./index-5YW4Fc5m.js";import{u as S}from"./index.esm-diavR8b8.js";import{o as P,I as B,M as I,T as W,F as v,a as l,b as d,E as C,B as F,c as z,d as L}from"./AuthForms.styled-BD9bV73q.js";const T="/admin-dashboard/assets/white-pill-BfxvZzuT.png",_=()=>{var o,t;const[r,p]=j.useState(!1),c=w(),{reset:h,register:i,handleSubmit:x,formState:{errors:e}}=S({resolver:P(L),mode:"onBlur"}),m=async a=>{try{await c(y(a)).unwrap(),h()}catch(g){g&&b.Notify.failure("Wrong email or password. Please try again")}},u=()=>{p(a=>!a)};return s.jsxs(s.Fragment,{children:[s.jsxs(B,{children:[s.jsx("img",{src:f,alt:"logo"}),s.jsx("span",{children:"E-Pharmacy"})]}),s.jsxs(I,{children:[s.jsxs(W,{children:[s.jsxs("h1",{children:["Your medication, delivered Say goodbye to all"," ",s.jsx("span",{children:"your healthcare"})," worries with us"]}),s.jsx("img",{src:T,alt:"pill"})]}),s.jsxs(v,{onSubmit:x(m),children:[s.jsxs(l,{children:[s.jsx(d,{...i("email",{autoComplete:"off"}),placeholder:"Email address",style:{borderColor:e.email?"#E85050":"#59b17a"}}),s.jsx("p",{children:(o=e.email)==null?void 0:o.message})]}),s.jsxs(l,{children:[s.jsx(d,{...i("password",{autoComplete:"off"}),type:r?"text":"password",placeholder:"Password",style:{borderColor:e.password?"#E85050":"#59b17a"}}),s.jsx("p",{children:(t=e.password)==null?void 0:t.message}),s.jsx(C,{type:"button",onClick:()=>u(),children:s.jsx("svg",{width:"18",height:"18",stroke:"#1D1E21",fill:"none",children:s.jsx("use",{href:r?`${n}#icon-eye`:`${n}#icon-eye-off`})})})]}),s.jsx(F,{type:"submit",children:"Log in"})]}),s.jsx(z,{})]})]})},A=()=>s.jsx(k,{children:s.jsx(_,{})}),k=E.div`
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
`;export{k as Wrap,A as default};
