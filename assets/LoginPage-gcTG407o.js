import{r as g,u as f,j as s,l as w,s as l,a as y,n as b}from"./index-tRzqldtO.js";import{u as S}from"./index.esm-BZ4uEyPB.js";import{p as E,W as P}from"./RegistrationPage-Qptmzo0Y.js";import{o as W,I as C,M as I,T as B,F,a as n,b as d,E as k,B as L,S as v,c as _,d as D}from"./AuthForms.styled-CM9Hek1D.js";const M=()=>{var t,i;const[o,c]=g.useState(!1),h=f(),{reset:p,register:a,handleSubmit:m,formState:{errors:e}}=S({resolver:W(D),mode:"onBlur"}),x=async r=>{try{await h(y(r)).unwrap(),p()}catch(j){j&&b.Notify.failure("Wrong email or password. Please try again")}},u=()=>{c(r=>!r)};return s.jsxs(s.Fragment,{children:[s.jsxs(C,{children:[s.jsx("img",{src:w,alt:"logo"}),s.jsx("span",{children:"E-Pharmacy"})]}),s.jsxs(I,{children:[s.jsxs(B,{children:[s.jsxs("h1",{children:["Your medication, delivered Say goodbye to all"," ",s.jsx("span",{children:"your healthcare"})," worries with us"]}),s.jsx("img",{src:E,alt:"pill"})]}),s.jsxs(F,{onSubmit:m(x),children:[s.jsxs(n,{children:[s.jsx(d,{...a("email",{autoComplete:"off"}),placeholder:"Email address",style:{borderColor:e.email?"#E85050":"#59b17a"}}),s.jsx("p",{children:(t=e.email)==null?void 0:t.message})]}),s.jsxs(n,{children:[s.jsx(d,{...a("password",{autoComplete:"off"}),type:o?"text":"password",placeholder:"Password",style:{borderColor:e.password?"#E85050":"#59b17a"}}),s.jsx("p",{children:(i=e.password)==null?void 0:i.message}),s.jsx(k,{type:"button",onClick:()=>u(),children:s.jsx("svg",{width:"18",height:"18",stroke:"#1D1E21",fill:"none",children:s.jsx("use",{href:o?`${l}#icon-eye`:`${l}#icon-eye-off`})})})]}),s.jsx(L,{type:"submit",children:"Log in"}),s.jsx(v,{to:"/register",children:"Click here in order to register"})]}),s.jsx(_,{})]})]})},R=()=>s.jsx(P,{children:s.jsx(M,{})});export{R as default};
