import{m as _,c as f,b as o,u as a,w as r,F as y,o as b,H as h,d as t,e as v,f as x,l as w,k as d,t as B}from"./app-7e1131d8.js";import{B as k}from"./Authenticated-62579bd6.js";import{B as n}from"./Button-f7adcb6c.js";import{_ as C}from"./ValidationErrors-be3953e1.js";/* empty css            */import"./ApplicationLogo-610d86ec.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./default.css_vue_type_style_index_0_src_true_lang-428857db.js";const N={class:"md:grid md:grid-cols-2"},F={class:"md:mt-0 md:col-span-2"},V=["onSubmit"],M={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},P={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},S={class:"sm:row-span-3"},T={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},U=t("div",{class:"mb-5"},[t("h1",{class:"font-bold text-indigo-800"},"New Product Category"),t("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),j={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},z={class:"mb-4"},D=t("label",{for:"category_name",class:"block text-sm text-gray-700 font-bold"},[d(" Product Category Name "),t("span",{class:"text-red-500"},"*")],-1),H={class:"mt-1 flex rounded-md shadow-sm"},A={class:"flex items-center justify-between space-x-2"},K={__name:"Create",props:{category:{type:Object}},setup(c){const e=c,s=_({category_name:e.category?e.category.name:""}),m=e.category?route("product-categories.update",e.category.id):route("product-categories.store"),l=e.category?"put":"post",g=()=>{s[l](m,{onFinish:()=>s.reset()})};return(u,i)=>(b(),f(y,null,[o(a(h),{title:"Product Category"}),o(k,null,{header:r(()=>[]),default:r(()=>[t("div",N,[t("div",F,[t("form",{onSubmit:v(g,["prevent"])},[t("div",M,[t("div",P,[t("div",S,[t("div",T,[U,t("div",j,[o(C,{class:"mb-4"}),t("div",z,[D,t("div",H,[x(t("input",{type:"text",name:"category_name",id:"category_name",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm","onUpdate:modelValue":i[0]||(i[0]=p=>a(s).category_name=p),autocomplete:"off"},null,512),[[w,a(s).category_name]])])])]),t("div",A,[o(n,{route:u.route("product-categories"),buttonType:"gray"},{default:r(()=>[d("Back")]),_:1},8,["route"]),o(n,{type:"submit"},{default:r(()=>[d(B(c.category?"Update":"Create"),1)]),_:1})])])])])])],40,V)])])]),_:1})],64))}};export{K as default};
