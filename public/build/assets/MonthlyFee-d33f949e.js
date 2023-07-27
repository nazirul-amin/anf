import{c as a,d as t,t as e,u as l,F as d,h as r,ah as _,o as n,j as c}from"./app-698f1bce.js";import{h as i}from"./default.css_vue_type_style_index_0_src_true_lang-57be4c75.js";import"./_plugin-vue_export-helper-c27b6911.js";const m={class:"overflow-y-auto no-scrollbar modal-main",id:"invoice",ref:"invoice"},x={class:"flex flex-col justify-between divide-y p-8 min-h-screen"},h={class:"flex flex-col flex-grow"},p=_('<div class="flex flex-row justify-between"><div class="flex self-center"><img src="/images/invoice_logo_alt.jpg" class="w-48 h-28 block select-none" alt=""></div><div class="text-right"><span class="mt-4 not-italic text-gray-800 text-md"><span class="font-bold text-lg">ALFA and Friends Sdn Bhd</span><br> 36, Jalan BP 7/8, Bandar Bukit Puchong,<br> 47120 Puchong, Selangor Darul Ehsan,<br> Malaysia<br></span></div></div><div class="flex flex-row justify-between items-start"><h3 class="mt-8 text-md font-semibold text-gray-800">To:</h3></div>',2),g={class:"flex flex-row justify-between items-start space-y-0"},f={class:"not-italic text-gray-700 text-md"},u={class:"font-bold"},y=t("br",null,null,-1),v={class:"w-64"},b={class:"space-y-2"},w={class:"grid grid-cols-1 gap-2"},D={class:"grid grid-cols-5"},k=t("dt",{class:"col-span-3 font-semibold text-gray-800"},"Invoice Number:",-1),M={class:"col-span-2 text-gray-500"},j={class:"grid grid-cols-5 gap-x-3"},T=t("dt",{class:"col-span-3 font-semibold text-gray-800"},"Invoice Date:",-1),B={class:"col-span-2 text-gray-500"},F={class:"grid grid-cols-5 gap-x-3"},S=t("dt",{class:"col-span-3 font-semibold text-gray-800"},"Due Date:",-1),N={class:"col-span-2 text-gray-500"},A={class:"mt-8 grid sm:grid-cols-2 gap-3"},I={class:"text-md font-semibold text-gray-800"},L={class:"mt-6"},P={class:"w-full"},V=t("thead",{class:"bg-gray-800"},[t("tr",null,[t("th",{class:"text-left py-2 px-4 text-xs font-medium text-gray-100 uppercase w-4/6"},"Item"),t("th",{class:"py-2 px-4 text-xs font-medium text-gray-100 uppercase w-1/6"},"Discount"),t("th",{class:"py-2 px-4 text-xs font-medium text-gray-100 uppercase w-1/6"},"Amount")])],-1),C={class:"border"},E={class:"py-2 px-4"},J={class:"font-bold text-md text-gray-800 mb-1"},O={key:0,class:"font-normal text-md text-gray-800"},Y={class:"font-normal text-md text-gray-800"},$={class:"text-center align-bottom py-2 px-4"},q={key:0,class:"font-normal text-md text-gray-800"},z={class:"font-normal text-md text-gray-800"},G={class:"text-center align-bottom py-2 px-4"},H={key:0,class:"font-normal text-md text-gray-800"},K={class:"font-normal text-md text-gray-800"},Q=t("td",{class:"pt-5 py-2 px-4"},null,-1),R=t("td",{class:"pt-5 py-2 px-4 text-center"},[t("p",{class:"font-medium text-lg text-gray-800"},"Total :")],-1),U={class:"pt-5 py-2 px-4 text-center"},W={class:"font-medium text-lg text-gray-800"},X=t("div",{class:"pt-8"},[t("h4",{class:"text-md text-center font-semibold text-xl text-gray-800"},"Thank you!")],-1),Z={props:{invoice_data:Object},updated(){this.scrollToTop()},methods:{scrollToTop(){const s=this.$refs.invoice;s&&(s.scrollTop=0)}}},nt=Object.assign(Z,{__name:"MonthlyFee",setup(s){return(tt,et)=>(n(),a("div",m,[t("div",x,[t("div",h,[p,t("div",g,[t("span",f,[t("span",u,e(s.invoice_data.parent_name),1),y,t("div",v,[t("span",null,e(s.invoice_data.parent_address),1)])]),t("div",b,[t("div",w,[t("dl",D,[k,t("dd",M,e(s.invoice_data.invoice_number),1)]),t("dl",j,[T,t("dd",B,e(l(i)(s.invoice_data.date_issued).format("DD MMM Y")),1)]),t("dl",F,[S,t("dd",N,e(l(i)(s.invoice_data.due_date).format("DD MMM Y")),1)])])])]),t("div",A,[t("h4",I,"Student: "+e(s.invoice_data.student_name),1)]),t("div",L,[t("table",P,[V,t("tbody",null,[(n(!0),a(d,null,r(s.invoice_data.invoice_items,o=>(n(),a("tr",C,[t("td",E,[t("p",J,e(o.programme_name)+" ( Level "+e(o.programme_level)+" ) - June 2023",1),o.include_material_fee?(n(),a("p",O,"- Material Fee")):c("",!0),t("p",Y,"- "+e(o.programme_type),1)]),t("td",$,[o.include_material_fee?(n(),a("p",q,e(o.material_fee_discount),1)):c("",!0),t("p",z,e(o.programme_fee_discount),1)]),t("td",G,[o.include_material_fee?(n(),a("p",H,e(o.material_fee),1)):c("",!0),t("p",K,e(o.programme_fee),1)])]))),256))]),t("tfoot",null,[t("tr",null,[Q,R,t("td",U,[t("p",W,e(this.invoice_data.total_amount),1)])])])])])]),X])],512))}});export{nt as default};
