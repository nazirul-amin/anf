import l from"./Layout-54a779d1.js";import{r as n,c as s,b as a,w as p,F as d,o,j as _,d as t,k as r}from"./app-3c18cd7f.js";import"./Authenticated-84dcb892.js";import"./ApplicationLogo-4a0d6756.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Button-5c896a52.js";import"./XIcon-b5deb7de.js";import"./default.css_vue_type_style_index_0_src_true_lang-e87de5d5.js";import"./moment-fbc5633a.js";import"./PencilIcon-b906401d.js";import"./SearchIcon-a95b6406.js";import"./menu-e8a110ab.js";import"./transition-a1bc4453.js";import"./use-resolve-button-type-cf850664.js";/* empty css            */const m={key:0,class:"flex-col w-full pt-4 px-4 space-y-2"},h=t("div",{class:"bg-white rounded-lg shadow-xl px-4 py-10"},[t("div",{class:"flex flex-col items-center space-y-2"},[t("div",{class:"flex space-x-4 items-center"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"text-green-600 w-10 h-10",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},[t("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),t("path",{d:"M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"})]),t("p",{class:"text-lg font-bold"},[r(" Your request to delete class has been "),t("span",{class:"font-bold text-green-500"},"approved"),r(".")])])])],-1),f=[h],u={props:{request_data:Object},data(){return{show:!1,class_info:[],form:{class_id:this.request_data?this.request_data.class_id:"",created_by:this.created_by?this.created_by:""}}},mounted(){axios.get(route("get_class_info",this.form.class_id)).then(e=>{this.class_info=e.data}).finally(()=>{this.show=!0})}},F=Object.assign(u,{__name:"Approve",setup(e){return(i,x)=>{const c=n("Head");return o(),s(d,null,[a(c,{title:"Notifications"}),a(l,null,{default:p(()=>[i.show?(o(),s("div",m,f)):_("",!0)]),_:1})],64)}}});export{F as default};
