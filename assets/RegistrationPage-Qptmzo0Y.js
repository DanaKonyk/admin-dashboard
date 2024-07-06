import{r as f,u as w,j as s,l as y,s as n,b,n as S,p as E}from"./index-tRzqldtO.js";import{o as P,I as _,M as v,T as B,F as C,a as l,b as d,E as W,B as z,S as F,c as I,d as R}from"./AuthForms.styled-CM9Hek1D.js";import{u as k}from"./index.esm-BZ4uEyPB.js";const T="/admin-dashboard/assets/white-pill-BfxvZzuT.png",M=()=>{var o,t;const[a,c]=f.useState(!1),h=w(),{reset:x,register:r,handleSubmit:m,formState:{errors:e}}=k({resolver:P(R),mode:"onBlur"}),g=async i=>{try{await h(b(i)).unwrap(),x()}catch(j){j&&S.Notify.failure("Something went wrong. Please try again")}},u=()=>{c(i=>!i)};return s.jsxs(s.Fragment,{children:[s.jsxs(_,{children:[s.jsx("img",{src:y,alt:"logo"}),s.jsx("span",{children:"E-Pharmacy"})]}),s.jsxs(v,{children:[s.jsxs(B,{children:[s.jsxs("h1",{children:["Your medication, delivered Say goodbye to all"," ",s.jsx("span",{children:"your healthcare"})," worries with us"]}),s.jsx("img",{src:T,alt:"pill"})]}),s.jsxs(C,{onSubmit:m(g),children:[s.jsxs(l,{children:[s.jsx(d,{...r("email",{autoComplete:"off"}),placeholder:"Email address",style:{borderColor:e.email?"#E85050":"#59b17a"}}),s.jsx("p",{children:(o=e.email)==null?void 0:o.message})]}),s.jsxs(l,{children:[s.jsx(d,{...r("password",{autoComplete:"off"}),type:a?"text":"password",placeholder:"Password",style:{borderColor:e.password?"#E85050":"#59b17a"}}),s.jsx("p",{children:(t=e.password)==null?void 0:t.message}),s.jsx(W,{onClick:()=>u(),type:"button",children:s.jsx("svg",{width:"18",height:"18",stroke:"#1D1E21",fill:"none",children:s.jsx("use",{href:a?`${n}#icon-eye`:`${n}#icon-eye-off`})})})]}),s.jsx(z,{type:"submit",children:"Sign in"}),s.jsx(F,{to:"/login",children:"Already has an account? Click here in order to log in"})]}),s.jsx(I,{})]})]})},$=()=>s.jsx(p,{children:s.jsx(M,{})}),p=E.div`
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
`,L=Object.freeze(Object.defineProperty({__proto__:null,Wrap:p,default:$},Symbol.toStringTag,{value:"Module"}));export{L as R,p as W,T as p};
