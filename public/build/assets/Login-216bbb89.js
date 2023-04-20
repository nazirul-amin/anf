import{x as y,e as g,y as x,u as s,o as d,c as b,z as w,m as k,p as m,w as u,a as r,H as v,t as V,h as c,b as o,L as B,i as p,n as C,d as $}from"./app-76003339.js";import{B as S}from"./Button-25067af7.js";import{_ as U}from"./Guest-ff7bf127.js";import{_ as L,a as f,b as _}from"./ValidationErrors-4593be54.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ApplicationLogo-1fd67e39.js";const N=["value"],R={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(n,{emit:e}){const i=n,l=y({get(){return i.checked},set(t){e("update:checked",t)}});return(t,a)=>g((d(),b("input",{type:"checkbox",value:n.value,"onUpdate:modelValue":a[0]||(a[0]=h=>w(l)?l.value=h:null),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,8,N)),[[x,s(l)]])}},q={key:0,class:"mb-4 font-medium text-sm text-green-600"},z=["onSubmit"],F={class:"mt-4"},P={class:"mt-4 flex justify-between place-items-end"},j={class:""},D=o("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),E=o("div",{class:"border-b-2 mt-4"},null,-1),H={class:"mt-4"},M={class:"flex justify-end"},O={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(n){const e=k({username:"",password:"",remember:!1}),i=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(l,t)=>(d(),m(U,null,{default:u(()=>[r(s(v),{title:"Log in"}),r(L,{class:"mb-4"}),n.status?(d(),b("div",q,V(n.status),1)):c("",!0),o("form",{onSubmit:$(i,["prevent"])},[o("div",null,[r(f,{for:"username",value:"Username or Email"}),r(_,{id:"username",type:"text",class:"mt-1 block w-full",modelValue:s(e).username,"onUpdate:modelValue":t[0]||(t[0]=a=>s(e).username=a),required:"",autofocus:"",autocomplete:"off"},null,8,["modelValue"])]),o("div",F,[r(f,{for:"password",value:"Password"}),r(_,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":t[1]||(t[1]=a=>s(e).password=a),required:"",autocomplete:"off"},null,8,["modelValue"])]),o("div",P,[o("label",j,[r(R,{name:"remember",checked:s(e).remember,"onUpdate:checked":t[2]||(t[2]=a=>s(e).remember=a)},null,8,["checked"]),D]),n.canResetPassword?(d(),m(s(B),{key:0,href:l.route("password.request"),class:"underline text-sm text-gray-500 hover:text-gray-700"},{default:u(()=>[p(" Forgot your password? ")]),_:1},8,["href"])):c("",!0)]),E,o("div",H,[o("div",M,[r(S,{type:"submit",buttonType:"info",class:C({"opacity-25 px-4 py-2":s(e).processing}),disabled:s(e).processing},{default:u(()=>[p(" Sign in ")]),_:1},8,["class","disabled"])])])],40,z)]),_:1}))}};export{O as default};
