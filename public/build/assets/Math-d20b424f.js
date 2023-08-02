import{c as s,b as _,d as t,F as c,h as d,o as e,t as o,u as i,j as h}from"./app-3c18cd7f.js";import"./default.css_vue_type_style_index_0_src_true_lang-e87de5d5.js";import{h as m}from"./moment-fbc5633a.js";import p from"./Header-7ea169eb.js";/* empty css            */import"./_plugin-vue_export-helper-c27b6911.js";const x={id:"progress_report",class:"p-5 h-[297mm] w-[210mm]"},u=t("div",{class:"flex justify-center mb-5 h-[200px]"},[t("img",{src:"/images/progress_report/math.png",class:"w-full h-[200px]",alt:""})],-1),g={class:"flex justify-center mb-5"},f={class:"w-full"},y=t("thead",null,[t("tr",{class:"border"},[t("th",{class:"border-2 border-gray-600 py-2 px-4 text-sm w-1/12"},"Date"),t("th",{class:"border-2 border-gray-600 py-2 px-4 text-sm w-7/12"},"Term / Book / Unit / Lesson"),t("th",{class:"border-2 border-gray-600 py-2 px-4 text-sm w-4/12"},"Assessments through Observations")])],-1),b={key:0},w=t("td",{colspan:"10",class:"text-center"},"No record",-1),v=[w],k={class:"border-2 text-center border-gray-600 py-2 px-4 text-sm",colspan:"3"},M={class:"border-2 border-gray-600 py-2 px-4 align-middle"},z={class:"flex flex-col"},B={class:"border-2 border-gray-600 py-2 px-4 align-top divide-y"},N={class:"flex flex-col py-3 items-start"},j={class:"underline text-left font-semibold"},O={class:"text-left italic"},D={class:"mt-3 space-y-0.5 text-gray-800"},L={class:"flex"},A={class:"flex"},S={key:0,xmlns:"http://www.w3.org/2000/svg",class:"mt-0.5 w-4 h-4 mr-2 flex-shrink-0",viewBox:"0 0 512 512"},V=t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"},null,-1),F=[V],J={key:1,xmlns:"http://www.w3.org/2000/svg",class:"mt-0.5 w-4 h-4 mr-2 flex-shrink-0",viewBox:"0 0 512 512"},U=t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"},null,-1),C=[U],E={class:"text-left"},H={class:"border-2 border-gray-600 py-2 px-4 text-sm align-top text-left"},T={props:{data:Object}},Z=Object.assign(T,{__name:"Math",setup(n){return(Y,q)=>(e(),s("div",x,[u,_(p,{report_data:n.data},null,8,["report_data"]),t("div",g,[t("table",f,[y,t("tbody",null,[n.data.report_data.length?(e(!0),s(c,{key:1},d(n.data.report_data,(a,G)=>(e(),s("tr",k,[t("td",M,[t("div",z,o(i(m)(a.date).format("DD/MM/Y"))+" "+o(a.attendance_status_name),1)]),t("td",B,[JSON.parse(a.report_data).length?(e(!0),s(c,{key:0},d(JSON.parse(a.report_data),(r,I)=>(e(),s("div",N,[t("span",j,o(r.term_book_name)+"   (Unit "+o(r.unit_name)+")",1),t("span",O,"Lesson "+o(r.lesson_name),1),t("ul",D,[(e(!0),s(c,null,d(r.objectives,l=>(e(),s("li",L,[t("div",A,[l.achieved?(e(),s("svg",S,F)):(e(),s("svg",J,C)),t("span",E,o(l.name),1)])]))),256))])]))),256)):h("",!0)]),t("td",H,o(a.comments),1)]))),256)):(e(),s("tr",b,v))])])])]))}});export{Z as default};
