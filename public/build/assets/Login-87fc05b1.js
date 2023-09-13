import{m as b,p as i,w as l,o as n,b as o,u as s,H as w,c as y,t as x,j as d,d as t,L as g,k as u,n as h,e as k}from"./app-7fa9d0bc.js";import{B as v}from"./Button-9bb99ef6.js";import{_ as V}from"./Checkbox-ac47dc1e.js";import{_ as B}from"./Guest-de389d1b.js";import{_ as c,a as f}from"./Label-1767d4b4.js";import{_ as S}from"./ValidationErrors-aee5481e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ApplicationLogo-f91fd4fa.js";const $={key:0,class:"mb-4 font-medium text-sm text-green-600"},L=["onSubmit"],N={class:"mt-4"},U={class:"mt-4 flex justify-between place-items-end"},j={class:""},q=t("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),C=t("div",{class:"border-b-2 mt-4"},null,-1),F={class:"mt-4"},P={class:"flex justify-end"},G={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(m){const e=b({username:"",password:"",remember:!1}),p=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(_,a)=>(n(),i(B,null,{default:l(()=>[o(s(w),{title:"Log in"}),o(S,{class:"mb-4"}),m.status?(n(),y("div",$,x(m.status),1)):d("",!0),t("form",{onSubmit:k(p,["prevent"])},[t("div",null,[o(c,{for:"username",value:"Username or Email"}),o(f,{id:"username",type:"text",class:"mt-1 block w-full",modelValue:s(e).username,"onUpdate:modelValue":a[0]||(a[0]=r=>s(e).username=r),required:"",autofocus:"",autocomplete:"off"},null,8,["modelValue"])]),t("div",N,[o(c,{for:"password",value:"Password"}),o(f,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":a[1]||(a[1]=r=>s(e).password=r),required:"",autocomplete:"off"},null,8,["modelValue"])]),t("div",U,[t("label",j,[o(V,{name:"remember",checked:s(e).remember,"onUpdate:checked":a[2]||(a[2]=r=>s(e).remember=r)},null,8,["checked"]),q]),m.canResetPassword?(n(),i(s(g),{key:0,href:_.route("password.request"),class:"underline text-sm text-gray-500 hover:text-gray-700"},{default:l(()=>[u(" Forgot your password? ")]),_:1},8,["href"])):d("",!0)]),C,t("div",F,[t("div",P,[o(v,{type:"submit",buttonType:"info",class:h({"opacity-25 px-4 py-2":s(e).processing}),disabled:s(e).processing},{default:l(()=>[u(" Sign in ")]),_:1},8,["class","disabled"])])])],40,L)]),_:1}))}};export{G as default};
