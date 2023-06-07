import p from"./Layout-14c38343.js";import{c as a,a as i,w as l,F as c,o as m,b as e,i as n,t as _,h,j as u}from"./app-1ddf5d3d.js";import"./Authenticated-67bb5d5b.js";import"./ApplicationLogo-4104d605.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Button-5dcf5bee.js";import"./default.css_vue_type_style_index_0_src_true_lang-b3e86f46.js";import"./transition-1a4b8a0a.js";import"./use-resolve-button-type-16d7f9cb.js";import"./PencilIcon-2d77816c.js";import"./SearchIcon-699a56a1.js";/* empty css            */const f={class:"flex-col w-full pt-4 px-4"},g={class:"pb-3 px-2 space-y-2"},v={key:0,class:"bg-white rounded-lg shadow-xl p-4"},x={class:"flex"},b=e("div",null,[e("svg",{class:"w-6 h-6 fill-current text-red-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})])],-1),w={class:"ml-3"},y={class:"font-semibold text-gray-800"},j={class:"text-bold text-indigo-600 uppercase"},k=e("p",{class:"mt-2 text-sm text-gray-600 leading-relaxed"},"Please be informed that this action is irreversible.",-1),q={class:"flex items-center mt-3"},C={props:{request_data:Object,created_by:String,notification_data:Object},data(){return{show:!1,centre_info:[],form:{notification_id:this.notification_data.id,programme_id:this.request_data?this.request_data.programme_id:"",programme_name:"",created_by:this.created_by?this.created_by:""}}},mounted(){axios.get(route("get_programme_name",this.form.programme_id)).then(s=>{this.form.programme_name=s.data}).finally(()=>{this.show=!0})},methods:{approve(){this.$inertia.post(route("approve_programme_delete"),this.form,{preserveState:!0})},reject(){this.$inertia.post(route("reject_programme_delete"),this.form,{preserveState:!0})}}},A=Object.assign(C,{__name:"Request",setup(s){return(t,o)=>{const d=u("Head");return m(),a(c,null,[i(d,{title:"Notifications"}),i(p,null,{default:l(()=>[e("div",f,[e("div",g,[t.show?(m(),a("div",v,[e("div",x,[b,e("div",w,[e("h2",y,[n("Request to remove "),e("span",j,_(t.form.programme_name),1),n(" programme.")]),k])]),e("div",q,[e("button",{class:"flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md",onClick:o[0]||(o[0]=(...r)=>t.reject&&t.reject(...r))}," Reject "),e("button",{class:"flex-1 px-4 py-2 ml-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md",onClick:o[1]||(o[1]=(...r)=>t.approve&&t.approve(...r))}," Approve ")])])):h("",!0)])])]),_:1})],64)}}});export{A as default};
