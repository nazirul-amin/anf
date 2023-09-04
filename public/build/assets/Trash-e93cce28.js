import{q as i,I as g,c,b as s,u as h,w as u,F as f,ai as w,o as n,H as v,d as t,f as b,l as k,j as B,h as C,t as o,k as P}from"./app-2b133d7b.js";import{B as R}from"./Authenticated-90cb91c3.js";import{B as N}from"./Button-17cde4f9.js";import{C as T}from"./ConfirmationModal-23a13a92.js";import{P as D}from"./Pagination-ba9194fe.js";import{r as V}from"./SearchIcon-20ac26ca.js";import"./ApplicationLogo-43dea6bb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-73e31157.js";import"./default.css_vue_type_style_index_0_src_true_lang-b3de7b5e.js";import"./moment-fbc5633a.js";import"./transition-d432c89e.js";const j={class:"py-4 px-4"},A={class:"overflow-x-auto"},S={class:"mx-auto"},F={class:"align-middle inline-block min-w-full"},I={class:"flex justify-between mb-4"},M={class:"flex space-x-2"},z={class:"flex relative text-gray-400 focus-within:text-gray-600"},H={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},L={class:"min-w-full divide-y divide-gray-200"},$=t("thead",{class:"bg-gray-300"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/14"},"Product Name"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Price"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Stock"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Sales"),t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),q={class:"bg-white divide-y divide-gray-200"},E={key:0},O=t("td",{class:"text-center",colspan:"10"},[t("div",{class:"p-3"}," No Record Found! ")],-1),U=[O],G={class:"px-6 py-4 whitespace-nowrap"},J={class:"text-sm text-gray-700"},K={class:"flex items-center px-6 py-4 whitespace-nowrap"},Q=["src"],W={class:"text-sm font-medium text-gray-900"},X={class:"px-6 py-4 whitespace-nowrap"},Y={class:"text-sm font-medium text-gray-900"},Z={class:"px-6 py-4 whitespace-nowrap"},tt={class:"text-sm font-medium text-gray-900"},et={class:"px-6 py-4 whitespace-nowrap"},st={class:"text-sm font-medium text-gray-900"},ot={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},at={class:"flex justify-center"},rt={class:"flex"},gt={__name:"Trash",props:{products:{type:Object}},setup(l){const d=i(!1),m=i(),p=i(),_=i(),y=a=>{d.value=!0,m.value=a};return g(()=>p.value,a=>{w.Inertia.visit(route("products.trash",{search:a}),{method:"get"})},()=>_.value),(a,r)=>(n(),c(f,null,[s(h(v),{title:"Product"}),s(R,null,{header:u(()=>[]),default:u(()=>[t("div",j,[t("div",A,[t("div",S,[t("div",F,[t("div",I,[t("div",M,[t("div",z,[s(h(V),{class:"text-gray-600 h-4 w-4 fill-current pointer-events-none absolute top-1/4 left-3",style:"top:30%"}),b(t("input",{class:"border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg focus:ring-0 focus:border-gray-300 appearance-none block pl-10",type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>p.value=e),placeholder:"Search"},null,512),[[k,p.value]])])])]),t("div",H,[t("table",L,[$,t("tbody",q,[l.products.data.length?B("",!0):(n(),c("tr",E,U)),(n(!0),c(f,null,C(l.products.data,(e,x)=>(n(),c("tr",{class:"hover:bg-gray-200",key:x},[t("td",G,[t("div",J,o(x+1),1)]),t("td",K,[t("img",{class:"w-24 h-24 mr-4",src:"storage/"+e.images[0].path,alt:""},null,8,Q),t("div",W,o(e.name),1)]),t("td",X,[t("div",Y,o(e.variations[0].price),1)]),t("td",Z,[t("div",tt,o(e.variations[0].stock),1)]),t("td",et,[t("div",st,o(e.variations[0].sales),1)]),t("td",ot,[t("div",at,[t("div",rt,[s(N,{onClick:it=>y(e.id),buttonType:"warning",title:"Delete Product"},{default:u(()=>[P(" Restore ")]),_:2},1032,["onClick"])])])])]))),128))])]),s(D,{page_data:l.products},null,8,["page_data"])])])])]),s(T,{show:d.value,onClose:r[1]||(r[1]=e=>d.value=!1),confirmationAlert:"warning",confirmationTitle:"Restore Product",confirmationText:"Are you sure want to restore this product?",confirmationButton:"Restore",confirmationMethod:"patch",confirmationRoute:"products.restore",confirmationData:m.value},null,8,["show","confirmationData"])])]),_:1})],64))}};export{gt as default};
