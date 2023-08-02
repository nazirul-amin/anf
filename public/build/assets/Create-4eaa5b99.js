import{m as k,c as i,b as m,u as r,w as g,F as _,o as a,H as S,d as e,e as B,t as u,f as p,g as b,h as f,l as U,k as n}from"./app-3c18cd7f.js";import{B as V}from"./Authenticated-84dcb892.js";import{B as h}from"./Button-5c896a52.js";import{_ as O}from"./ValidationErrors-13212abb.js";/* empty css            */import"./ApplicationLogo-4a0d6756.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-b5deb7de.js";import"./default.css_vue_type_style_index_0_src_true_lang-e87de5d5.js";import"./moment-fbc5633a.js";const j={class:"md:grid md:grid-cols-2"},P={class:"md:mt-0 md:col-span-2"},N=["onSubmit"],C={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},M={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},T={class:"sm:row-span-3"},F={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},z={class:"mb-5"},D={class:"font-bold text-indigo-800"},H=e("div",{class:"border-b border-dashed border-indigo-900 mt-1"},null,-1),L={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},A={class:"grid grid-cols-2 sm:grid-cols-0 gap-0 sm:gap-4"},E={class:"mb-4"},$=e("label",{for:"product_category",class:"block text-sm text-gray-700 font-bold mb-2"},[n(" Customer "),e("span",{class:"text-red-500"},"*")],-1),q={class:"mt-1 flex rounded-md shadow-sm"},G=e("option",{value:""},"Please Select",-1),I=["value"],J={class:"mb-4"},K=e("label",{for:"product_category",class:"block text-sm text-gray-700 font-bold mb-2"},[n(" Product "),e("span",{class:"text-red-500"},"*")],-1),Q={class:"mt-1 flex rounded-md shadow-sm"},R=e("option",{value:""},"Please Select",-1),W=["value"],X={class:"mb-4"},Y=e("label",{for:"product_category",class:"block text-sm text-gray-700 font-bold mb-2"},[n(" Status "),e("span",{class:"text-red-500"},"*")],-1),Z={class:"mt-1 flex rounded-md shadow-sm"},ee=e("option",{value:""},"Please Select",-1),oe=["value"],te={class:"mb-4"},se=e("label",{for:"order_name",class:"block text-sm text-gray-700 font-bold mb-2"},[n(" Tracking No "),e("span",{class:"text-red-500"},"*")],-1),re={class:"mt-1 flex rounded-md shadow-sm"},de={class:"mb-4"},ie=e("label",{for:"product_category",class:"block text-sm text-gray-700 font-bold mb-2"},[n(" Shipping Provider "),e("span",{class:"text-red-500"},"*")],-1),ae={class:"mt-1 flex rounded-md shadow-sm"},le=e("option",{value:""},"Please Select",-1),ce=["value"],ne={class:"flex items-center justify-between space-x-2"},ye={__name:"Create",props:{order:{type:Object},statuses:{type:Object},providers:{type:Object},users:{type:Object},products:{type:Object}},setup(l){const t=l,s=k({order_customer:t.order?t.order.customer_id:"",order_product:t.order?t.order.product_id:"",order_status:t.order?t.order.status:"",order_shipping_no:t.order?t.order.tracking_no:"",order_shipping_provider:t.order?t.order.shipping_provider:""}),v=t.order?route("orders.update",t.order.id):route("orders.store"),x=t.order?"put":"post",y=()=>{s[x](v,{onSuccess:()=>s.reset()})};return(w,d)=>(a(),i(_,null,[m(r(S),{title:"Order"}),m(V,null,{header:g(()=>[]),default:g(()=>[e("div",j,[e("div",P,[e("form",{onSubmit:B(y,["prevent"])},[e("div",C,[e("div",M,[e("div",T,[e("div",F,[e("div",z,[e("h1",D,u(l.order?"Update":"New")+" Order ",1),H]),e("div",L,[m(O,{class:"mb-4"})]),e("div",A,[e("div",E,[$,e("div",q,[p(e("select",{name:"product_category",id:"product_category",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm","onUpdate:modelValue":d[0]||(d[0]=o=>r(s).order_customer=o)},[G,(a(!0),i(_,null,f(l.users,(o,c)=>(a(),i("option",{key:c,value:o.id},u(o.display_name),9,I))),128))],512),[[b,r(s).order_customer]])])]),e("div",J,[K,e("div",Q,[p(e("select",{name:"product_category",id:"product_category",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm","onUpdate:modelValue":d[1]||(d[1]=o=>r(s).order_product=o)},[R,(a(!0),i(_,null,f(l.products,(o,c)=>(a(),i("option",{key:c,value:o.id},u(o.name),9,W))),128))],512),[[b,r(s).order_product]])])]),e("div",X,[Y,e("div",Z,[p(e("select",{name:"product_category",id:"product_category",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm","onUpdate:modelValue":d[2]||(d[2]=o=>r(s).order_status=o)},[ee,(a(!0),i(_,null,f(l.statuses,(o,c)=>(a(),i("option",{key:c,value:o},u(o),9,oe))),128))],512),[[b,r(s).order_status]])])]),e("div",te,[se,e("div",re,[p(e("input",{type:"text",name:"order_name",id:"order_name",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm","onUpdate:modelValue":d[3]||(d[3]=o=>r(s).order_shipping_no=o),autocomplete:"off"},null,512),[[U,r(s).order_shipping_no]])])]),e("div",de,[ie,e("div",ae,[p(e("select",{name:"product_category",id:"product_category",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm","onUpdate:modelValue":d[4]||(d[4]=o=>r(s).order_shipping_provider=o)},[le,(a(!0),i(_,null,f(l.providers,(o,c)=>(a(),i("option",{key:c,value:o.id},u(o.name),9,ce))),128))],512),[[b,r(s).order_shipping_provider]])])])]),e("div",ne,[m(h,{route:w.route("orders"),buttonType:"gray"},{default:g(()=>[n("Back")]),_:1},8,["route"]),m(h,{type:"submit"},{default:g(()=>[n(u(l.order?"Update":"Create"),1)]),_:1})])])])])])],40,N)])])]),_:1})],64))}};export{ye as default};
