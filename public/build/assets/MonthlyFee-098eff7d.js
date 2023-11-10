import{o as a,c as n,d as t,t as e,u as l,F as d,h as r,ag as _,j as c}from"./app-8d1aeb1f.js";import"./toggle-962d0e67.js";import{h as i}from"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";const m={class:"overflow-y-auto no-scrollbar modal-main",id:"invoice",ref:"invoice"},x={class:"flex flex-col justify-between divide-y p-8 min-h-screen"},p={class:"flex flex-col flex-grow"},h=_('<div class="flex flex-row justify-between"><div class="flex self-center"><img src="/images/invoice_logo_alt.jpg" class="w-48 h-28 block select-none" alt=""></div><div class="text-right"><span class="mt-4 not-italic text-gray-800 text-md"><span class="strong">ALFA and Friends Sdn Bhd</span><br> 36, Jalan BP 7/8, Bandar Bukit Puchong,<br> 47120 Puchong, Selangor Darul Ehsan,<br> Malaysia<br></span></div></div><div class="flex flex-row justify-between items-start"><h3 class="mt-8 text-md font-semibold text-gray-800">To:</h3></div>',2),g={class:"flex flex-row justify-between items-start space-y-0"},f={class:"not-italic text-gray-700 text-md space-y-2"},u={class:"font-bold"},y=t("br",null,null,-1),v={class:"w-64"},b={class:""},w={class:"space-y-2"},D={class:"grid grid-cols-1 gap-2"},k={class:"grid grid-cols-5"},M=t("dt",{class:"col-span-3 font-semibold text-gray-800"},"Invoice Number:",-1),j={class:"col-span-2 text-gray-500"},T={class:"grid grid-cols-5 gap-x-3"},B=t("dt",{class:"col-span-3 font-semibold text-gray-800"},"Invoice Date:",-1),F={class:"col-span-2 text-gray-500"},S={class:"grid grid-cols-5 gap-x-3"},N=t("dt",{class:"col-span-3 font-semibold text-gray-800"},"Due Date:",-1),A={class:"col-span-2 text-gray-500"},I={class:"mt-8 grid sm:grid-cols-2 gap-3"},L={class:"text-md font-semibold text-gray-800 underline"},P={class:"mt-6"},V={class:"w-full"},C=t("thead",{class:"bg-gray-800"},[t("tr",null,[t("th",{class:"text-left py-2 px-4 text-xs font-medium text-gray-100 uppercase w-4/6"},"Item"),t("th",{class:"py-2 px-4 text-xs font-medium text-gray-100 uppercase w-1/6"},"Discount"),t("th",{class:"py-2 px-4 text-xs font-medium text-gray-100 uppercase w-1/6"},"Amount")])],-1),E={class:"border"},J={class:"py-2 px-4"},O={class:"font-bold text-md text-gray-800 mb-1"},Y={key:0,class:"font-normal text-md text-gray-800"},$={class:"font-normal text-md text-gray-800"},q={class:"text-center align-bottom py-2 px-4"},z={key:0,class:"font-normal text-md text-gray-800"},G={class:"font-normal text-md text-gray-800"},H={class:"text-center align-bottom py-2 px-4"},K={key:0,class:"font-normal text-md text-gray-800"},Q={class:"font-normal text-md text-gray-800"},R=t("td",{class:"pt-5 py-2 px-4"},null,-1),U=t("td",{class:"pt-5 py-2 px-4 text-center"},[t("p",{class:"font-medium text-lg text-gray-800"},"Total :")],-1),W={class:"pt-5 py-2 px-4 text-center"},X={class:"font-medium text-lg text-gray-800"},Z=t("div",{class:"pt-8"},[t("h4",{class:"text-md text-center font-semibold text-xl text-gray-800"},"Thank you!")],-1),tt={props:{invoice_data:Object},updated(){this.scrollToTop()},methods:{scrollToTop(){const s=this.$refs.invoice;s&&(s.scrollTop=0)}}},lt=Object.assign(tt,{__name:"MonthlyFee",setup(s){return(et,st)=>(a(),n("div",m,[t("div",x,[t("div",p,[h,t("div",g,[t("span",f,[t("span",u,e(s.invoice_data.parent_name),1),y,t("div",v,[t("span",b,e(s.invoice_data.parent_address),1)])]),t("div",w,[t("div",D,[t("dl",k,[M,t("dd",j,e(s.invoice_data.invoice_number),1)]),t("dl",T,[B,t("dd",F,e(l(i)(s.invoice_data.date_issued).format("DD MMM Y")),1)]),t("dl",S,[N,t("dd",A,e(l(i)(s.invoice_data.due_date).format("DD MMM Y")),1)])])])]),t("div",I,[t("h4",L,"Student: "+e(s.invoice_data.student_name),1)]),t("div",P,[t("table",V,[C,t("tbody",null,[(a(!0),n(d,null,r(s.invoice_data.invoice_items,o=>(a(),n("tr",E,[t("td",J,[t("p",O,e(o.programme_name)+" ( Level "+e(o.programme_level)+" ) - June 2023",1),o.include_material_fee?(a(),n("p",Y,"- Material Fee")):c("",!0),t("p",$,"- "+e(o.programme_type),1)]),t("td",q,[o.include_material_fee?(a(),n("p",z,e(o.material_fee_discount),1)):c("",!0),t("p",G,e(o.programme_fee_discount),1)]),t("td",H,[o.include_material_fee?(a(),n("p",K,e(o.material_fee),1)):c("",!0),t("p",Q,e(o.programme_fee),1)])]))),256))]),t("tfoot",null,[t("tr",null,[R,U,t("td",W,[t("p",X,e(s.invoice_data.total_amount),1)])])])])])]),Z])],512))}});export{lt as default};
