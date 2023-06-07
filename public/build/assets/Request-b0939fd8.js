import l from"./Layout-1e4d1c03.js";import{c as d,a as m,w as n,F as _,o as r,b as s,t as e,h as p,j as g}from"./app-5e7199e3.js";import"./Authenticated-54e21821.js";import"./ApplicationLogo-66f57c9a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Button-2142c334.js";import"./default.css_vue_type_style_index_0_src_true_lang-280a1abf.js";import"./transition-eb56e017.js";import"./use-resolve-button-type-1b24fab3.js";import"./PencilIcon-607d942c.js";import"./SearchIcon-ec79690f.js";/* empty css            */const h={class:"flex-col w-full pt-4 px-4"},y={key:0,class:"pb-3 px-2 space-y-2"},f={class:"bg-white rounded-lg shadow-xl p-4"},x=s("div",{class:"mx-6 mt-2"},[s("h3",{class:"text-lg leading-6 font-medium text-gray-900"},"Class Information"),s("p",{class:"mt-1 max-w-2xl text-sm text-gray-500"},"Class details and related information.")],-1),u={class:"mt-5 border-t border-gray-200 mx-6"},v={class:"sm:divide-y sm:divide-gray-200"},b={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},C=s("dt",{class:"text-sm font-medium text-gray-500"},"Centre",-1),w={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},j={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},k=s("dt",{class:"text-sm font-medium text-gray-500"},"Programme",-1),q={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},N={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},S=s("dt",{class:"text-sm font-medium text-gray-500"},"Class Type",-1),B={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},O={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},V=s("dt",{class:"text-sm font-medium text-gray-500"},"Class Level",-1),$={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},D={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},F=s("dt",{class:"text-sm font-medium text-gray-500"},"Class Day",-1),H={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},L={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},P=s("dt",{class:"text-sm font-medium text-gray-500"},"Class Method",-1),R={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},A={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},E=s("dt",{class:"text-sm font-medium text-gray-500"},"Class Capacity",-1),I={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},M={class:"bg-white rounded-lg shadow-xl p-4"},T={class:"flex space-x-5"},z={props:{request_data:Object,created_by:String,notification_data:Object},data(){return{show:!1,class_info:[],form:{notification_id:this.notification_data.id,class_id:this.request_data?this.request_data.class_id:"",created_by:this.created_by?this.created_by:""}}},mounted(){axios.get(route("get_class_info",this.form.class_id)).then(i=>{this.class_info=i.data}).finally(()=>{this.show=!0})},methods:{approve(){this.$inertia.post(route("approve_class_delete"),this.form,{preserveState:!0})},reject(){this.$inertia.post(route("reject_class_delete"),this.form,{preserveState:!0})}}},os=Object.assign(z,{__name:"Request",setup(i){return(t,o)=>{const c=g("Head");return r(),d(_,null,[m(c,{title:"Notifications"}),m(l,null,{default:n(()=>[s("div",h,[t.show?(r(),d("div",y,[s("div",f,[x,s("div",u,[s("dl",v,[s("div",b,[C,s("dd",w,e(t.class_info.centre_name),1)]),s("div",j,[k,s("dd",q,e(t.class_info.programme_name),1)]),s("div",N,[S,s("dd",B,e(t.class_info.class_type),1)]),s("div",O,[V,s("dd",$,"Level "+e(t.class_info.class_level),1)]),s("div",D,[F,s("dd",H,e(t.class_info.class_day),1)]),s("div",L,[P,s("dd",R,e(t.class_info.class_method),1)]),s("div",A,[E,s("dd",I,e(t.class_info.class_capacity)+" Person",1)])])])]),s("div",M,[s("div",T,[s("button",{class:"flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md",onClick:o[0]||(o[0]=(...a)=>t.reject&&t.reject(...a))}," Reject "),s("button",{class:"flex-1 px-4 py-2 ml-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md",onClick:o[1]||(o[1]=(...a)=>t.approve&&t.approve(...a))}," Approve ")])])])):p("",!0)])]),_:1})],64)}}});export{os as default};
