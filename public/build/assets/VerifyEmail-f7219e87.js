import{m as u,x as f,p,w as s,o as a,b as o,u as e,H as _,c as g,j as h,d as i,k as r,n as y,L as v,e as b}from"./app-d43ace84.js";import{B as k}from"./Button-59a3957d.js";import{_ as x}from"./Guest-6c9437de.js";/* empty css            */import"./_plugin-vue_export-helper-c27b6911.js";import"./ApplicationLogo-85a4f4bf.js";const w=i("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),B={key:0,class:"mb-4 font-medium text-sm text-green-600"},V=["onSubmit"],E={class:"mt-4 flex items-center justify-between"},T={__name:"VerifyEmail",props:{status:String},setup(n){const c=n,t=u(),d=()=>{t.post(route("verification.send"))},l=f(()=>c.status==="verification-link-sent");return(m,L)=>(a(),p(x,null,{default:s(()=>[o(e(_),{title:"Email Verification"}),w,l.value?(a(),g("div",B," A new verification link has been sent to the email address you provided during registration. ")):h("",!0),i("form",{onSubmit:b(d,["prevent"])},[i("div",E,[o(k,{class:y({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:s(()=>[r(" Resend Verification Email ")]),_:1},8,["class","disabled"]),o(e(v),{href:m.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:s(()=>[r("Log Out")]),_:1},8,["href"])])],40,V)]),_:1}))}};export{T as default};
