import{B as _}from"./Authenticated-84dcb892.js";import{B as n}from"./Button-5c896a52.js";import{c as r,b as s,u as y,w as a,F as f,H as u,L as w,o as d,d as t,k as c,j as v,h as T,t as l}from"./app-3c18cd7f.js";import{r as b}from"./TrashIcon-8fe354c9.js";import{C as h}from"./ConfirmationModal-e9733160.js";import{P as g}from"./Pagination-7b671af3.js";import{x as k,I as D,y as B,S as C,g as $}from"./tabs-bd056230.js";import"./ApplicationLogo-4a0d6756.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-b5deb7de.js";import"./default.css_vue_type_style_index_0_src_true_lang-e87de5d5.js";import"./moment-fbc5633a.js";/* empty css            */import"./transition-a1bc4453.js";import"./use-resolve-button-type-cf850664.js";const A={class:"py-4 px-4"},N={class:"overflow-x-auto"},L={class:"mx-auto"},M={class:"align-middle inline-block min-w-full"},O={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg px-1"},R={class:"flex py-2 justify-end"},j={class:"min-w-full divide-y divide-gray-200"},I=t("thead",{class:"bg-gray-300"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",width:"3"},"#"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Name"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Age"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Language"),t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",width:"5"},"Action")])],-1),V={class:"bg-white divide-y divide-gray-200"},P={key:0},F=t("td",{class:"text-center",colspan:"10"},[t("div",{class:"p-3"}," No Record Found! ")],-1),S=[F],z={class:"px-6 py-4 whitespace-nowrap"},E={class:"text-sm text-gray-700"},H={class:"px-6 py-4 whitespace-nowrap"},G={class:"text-sm font-medium text-gray-900"},q={class:"px-6 py-4 whitespace-nowrap"},J={class:"text-sm font-medium text-gray-900"},K={class:"px-6 py-4 whitespace-nowrap"},Q={class:"text-sm font-medium text-gray-900"},U={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},W={class:"flex justify-center"},X={class:"flex pr-1"},Y={class:"flex pr-1"},Z={class:"flex"},tt={components:{Head:u,ConfirmationModal:h,TrashIcon:b,Link:w,TabGroup:k,TabList:D,Tab:B,TabPanels:C,TabPanel:$,Pagination:g},data(){return{isOpen:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:""}},props:{diagnostic_test_list:Object},methods:{handleClick(o){console.log(o),o.preventDefault()},viewDiagnosticTest(o){this.$inertia.get(route("dt.settings.details"),{dt_id:o})},editDiagnosticTest(o){this.$inertia.get(route("dt.settings.edit"),{dt_id:o})},deleteDiagnosticTest(o){this.confirmationTitle="Are you sure want to delete this diagnostic test?",this.confirmationText="All data for this diagnostic test will be erased permanently.",this.confirmationButton="Delete",this.confirmationMethod="delete",this.confirmationRoute="dt.settings.destroy",this.confirmationData=o,this.isOpen=!0}}},gt=Object.assign(tt,{__name:"Index",setup(o){return(e,p)=>(d(),r(f,null,[s(y(u),{title:"Diagnostic Test"}),s(_,null,{header:a(()=>[]),default:a(()=>[t("div",A,[t("div",N,[t("div",L,[t("div",M,[t("div",O,[t("div",R,[s(n,{route:e.route("dt.settings.create"),class:"py-3 px-4"},{default:a(()=>[c("New Diagnostic Test")]),_:1},8,["route"])]),t("table",j,[I,t("tbody",V,[e.$page.props.diagnostic_test_list.data.length?v("",!0):(d(),r("tr",P,S)),(d(!0),r(f,null,T(e.$page.props.diagnostic_test_list.data,(i,x)=>(d(),r("tr",{class:"hover:bg-gray-200",key:i.ID},[t("td",z,[t("div",E,l(++x),1)]),t("td",H,[t("div",G,l(i.name),1)]),t("td",q,[t("div",J,l(i.age),1)]),t("td",K,[t("div",Q,l(i.language),1)]),t("td",U,[t("div",W,[t("div",X,[s(n,{buttonType:"blue",onClick:m=>e.viewDiagnosticTest(i.id)},{default:a(()=>[c(" View Details ")]),_:2},1032,["onClick"])]),t("div",Y,[s(n,{buttonType:"warning",onClick:m=>e.editDiagnosticTest(i.id)},{default:a(()=>[c(" Edit ")]),_:2},1032,["onClick"])]),t("div",Z,[s(n,{buttonType:"danger",onClick:m=>e.deleteDiagnosticTest(i.id)},{default:a(()=>[c(" Delete ")]),_:2},1032,["onClick"])])])])]))),128))])]),s(g,{page_data:o.diagnostic_test_list},null,8,["page_data"]),s(h,{show:e.isOpen,onClose:p[0]||(p[0]=i=>e.isOpen=!1),confirmationAlert:"danger",confirmationTitle:e.confirmationTitle,confirmationText:e.confirmationText,confirmationButton:e.confirmationButton,confirmationMethod:e.confirmationMethod,confirmationRoute:e.confirmationRoute,confirmationData:e.confirmationData},null,8,["show","confirmationTitle","confirmationText","confirmationButton","confirmationMethod","confirmationRoute","confirmationData"])])])])])])]),_:1})],64))}});export{gt as default};
