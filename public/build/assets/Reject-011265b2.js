import l from"./Layout-203c6a45.js";import{r as n,c as s,b as a,w as d,F as p,o,j as m,d as t,k as r}from"./app-875b5ae4.js";import"./Authenticated-4b3c419f.js";import"./ApplicationLogo-c9ef20ed.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Button-dc28f95e.js";import"./XIcon-a84dd0b4.js";import"./default.css_vue_type_style_index_0_src_true_lang-090a1dfe.js";import"./PencilIcon-9842cd6f.js";import"./SearchIcon-e774b677.js";import"./menu-cd8e9a49.js";import"./transition-bcf256d9.js";import"./use-resolve-button-type-31cd41ef.js";/* empty css            */const _={key:0,class:"flex-col w-full pt-4 px-4 space-y-2"},h=t("div",{class:"bg-white rounded-lg shadow-xl px-4 py-10"},[t("div",{class:"flex flex-col items-center space-y-2"},[t("div",{class:"flex space-x-4 items-center"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"text-red-600 w-10 h-10",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},[t("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),t("path",{d:"M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"})]),t("p",{class:"text-lg font-bold"},[r(" Sorry, your request to delete class has been "),t("span",{class:"font-bold text-red-500"},"rejected"),r(".")])]),t("small",{class:"text-[11px]"}," Please contact person in charge for more information.")])],-1),f=[h],u={props:{request_data:Object},data(){return{show:!1,class_info:[],form:{class_id:this.request_data?this.request_data.class_id:"",created_by:this.created_by?this.created_by:""}}},mounted(){axios.get(route("get_class_info",this.form.class_id)).then(e=>{this.class_info=e.data}).finally(()=>{this.show=!0})}},M=Object.assign(u,{__name:"Reject",setup(e){return(c,x)=>{const i=n("Head");return o(),s(p,null,[a(i,{title:"Notifications"}),a(l,null,{default:d(()=>[c.show?(o(),s("div",_,f)):m("",!0)]),_:1})],64)}}});export{M as default};
