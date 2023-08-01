import{c as s,b as _,d as t,F as l,h as d,o as e,t as o,u as i,j as h}from"./app-5b70941e.js";import"./default.css_vue_type_style_index_0_src_true_lang-5057ee22.js";import{h as m}from"./moment-fbc5633a.js";import p from"./Header-e4880189.js";/* empty css            */import"./_plugin-vue_export-helper-c27b6911.js";const x={id:"progress_report",class:"p-5 h-[297mm] w-[210mm]"},g=t("div",{class:"flex justify-center mb-5 h-[200px]"},[t("img",{src:"/images/progress_report/digital_art.png",class:"w-full h-[200px]",alt:""})],-1),u={class:"flex justify-center mb-5"},y={class:"w-full"},f=t("thead",null,[t("tr",{class:"border"},[t("th",{class:"border-2 border-gray-600 py-2 px-4 text-sm w-1/12"},"Date"),t("th",{class:"border-2 border-gray-600 py-2 px-4 text-sm w-7/12"},"Theme / Lesson / Activity / Outcome"),t("th",{class:"border-2 border-gray-600 py-2 px-4 text-sm w-4/12"},"Assessments through Observations")])],-1),b={key:0},w=t("td",{colspan:"10",class:"text-center"},"No record",-1),v=[w],k={class:"border-2 text-center border-gray-600 py-2 px-4 text-sm",colspan:"3"},z={class:"border-2 border-gray-600 py-2 px-4 align-middle"},M={class:"flex flex-col"},N={class:"border-2 border-gray-600 py-2 px-4 align-top divide-y"},O={class:"flex flex-col py-3 items-start"},j={class:"underline text-left font-semibold"},A={class:"text-left italic mb-3"},B={class:"text-left text-gray-700 font-bold"},D={class:"mt-3 space-y-0.5 text-gray-800"},L={class:"flex"},S={class:"flex"},V={key:0,xmlns:"http://www.w3.org/2000/svg",class:"mt-0.5 w-4 h-4 mr-2 flex-shrink-0",viewBox:"0 0 512 512"},F=t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"},null,-1),J=[F],C={key:1,xmlns:"http://www.w3.org/2000/svg",class:"mt-0.5 w-4 h-4 mr-2 flex-shrink-0",viewBox:"0 0 512 512"},E=t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"},null,-1),H=[E],T={class:"text-left"},Y={class:"border-2 border-gray-600 py-2 px-4 text-sm align-top text-left"},q={props:{data:Object}},$=Object.assign(q,{__name:"DigitalArt",setup(c){return(G,I)=>(e(),s("div",x,[g,_(p,{report_data:c.data},null,8,["report_data"]),t("div",u,[t("table",y,[f,t("tbody",null,[c.data.report_data.length?(e(!0),s(l,{key:1},d(c.data.report_data,(a,K)=>(e(),s("tr",k,[t("td",z,[t("div",M,o(i(m)(a.date).format("DD/MM/Y"))+" "+o(a.attendance_status_name),1)]),t("td",N,[JSON.parse(a.report_data).length?(e(!0),s(l,{key:0},d(JSON.parse(a.report_data),(r,P)=>(e(),s("div",O,[t("span",j,o(r.theme_name),1),t("span",A,o(r.lesson_name)+": "+o(r.activity_name),1),t("span",B,o(r.outcome_name),1),t("ul",D,[(e(!0),s(l,null,d(r.objectives,n=>(e(),s("li",L,[t("div",S,[n.achieved?(e(),s("svg",V,J)):(e(),s("svg",C,H)),t("span",T,o(n.name),1)])]))),256))])]))),256)):h("",!0)]),t("td",Y,o(a.comments),1)]))),256)):(e(),s("tr",b,v))])])])]))}});export{$ as default};
