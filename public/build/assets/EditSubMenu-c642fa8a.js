import{c,b as r,u as a,w as n,F as p,L as g,o as f,H as h,d as e,e as v,f as i,l as u,n as l,k as d}from"./app-3c18cd7f.js";import{B as x}from"./Authenticated-84dcb892.js";import{B as m}from"./Button-5c896a52.js";import{b as _}from"./toggle-58461f0f.js";/* empty css            */import"./ApplicationLogo-4a0d6756.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-b5deb7de.js";import"./default.css_vue_type_style_index_0_src_true_lang-e87de5d5.js";import"./moment-fbc5633a.js";const y={class:"md:grid md:grid-cols-2"},w={class:"md:mt-0 md:col-span-2"},k={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},V={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},B={class:"sm:row-span-3"},M={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},S=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Sub Menu Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),j={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},U={class:"mb-4"},O=e("label",{for:"menu_sub_label",class:"block text-sm font-bold text-gray-700"},[d(" Sub Menu label "),e("span",{class:"text-red-500"},"*")],-1),T={class:"mt-1 flex rounded-md shadow-sm"},$={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},z={class:"mb-4"},C=e("label",{for:"menu_sub_route",class:"block text-sm font-bold text-gray-700"},[d(" Route "),e("span",{class:"text-red-500"},"*")],-1),L={class:"mt-1 flex rounded-md shadow-sm"},N={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},A={class:"mb-4"},E=e("label",{for:"menu_sub_permission_name",class:"block text-sm font-bold text-gray-700"},[d(" Permission "),e("span",{class:"text-red-500"},"*")],-1),F={class:"mt-1 flex rounded-md shadow-sm"},H=e("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1),D={class:"flex items-center justify-between"},I={class:"flex space-x-2"},P=e("label",{for:"",class:"block font-bold text-gray-700"},"Active",-1),R={class:"flex space-x-2"},q={components:{Toggle:_,Link:g},props:{sub_menus:Object,url_redirect:String},data(){return{form:{url_redirect:this.url_redirect,menu_id:this.sub_menus.id,menu_sub_label:this.sub_menus.menu_sub_label,menu_sub_route:this.sub_menus.menu_sub_route,menu_sub_status:this.sub_menus.menu_sub_status,menu_sub_permission_name:this.sub_menus.permission_name}}},methods:{submit(){this.$inertia.post(route("menus.update_sub_menu"),this.form)}}},oe=Object.assign(q,{__name:"EditSubMenu",setup(b){return(s,o)=>(f(),c(p,null,[r(a(h),{title:"Menus"}),r(x,null,{header:n(()=>[]),default:n(()=>[e("div",y,[e("div",w,[e("form",{onSubmit:o[5]||(o[5]=v((...t)=>s.submit&&s.submit(...t),["prevent"]))},[i(e("input",{type:"hidden","onUpdate:modelValue":o[0]||(o[0]=t=>s.menu_id=t)},null,512),[[u,s.menu_id]]),e("div",k,[e("div",V,[e("div",B,[e("div",M,[S,e("div",j,[e("div",U,[O,e("div",T,[i(e("input",{type:"text",name:"menu_sub_label",id:"menu_sub_label",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.menu_sub_label?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[1]||(o[1]=t=>s.form.menu_sub_label=t),autocomplete:"off"},null,2),[[u,s.form.menu_sub_label]])])])]),e("div",$,[e("div",z,[C,e("div",L,[i(e("input",{type:"text",name:"menu_sub_route",id:"menu_sub_route",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.menu_sub_route?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[2]||(o[2]=t=>s.form.menu_sub_route=t),autocomplete:"off"},null,2),[[u,s.form.menu_sub_route]])])])]),e("div",N,[e("div",A,[E,e("div",F,[i(e("input",{type:"text",name:"menu_sub_permission_name",id:"menu_sub_permission_name",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.menu_sub_permission_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[3]||(o[3]=t=>s.form.menu_sub_permission_name=t),autocomplete:"off"},null,2),[[u,s.form.menu_sub_permission_name]])])])]),H,e("div",D,[e("div",I,[P,r(a(_),{modelValue:s.form.menu_sub_status,"onUpdate:modelValue":o[4]||(o[4]=t=>s.form.menu_sub_status=t),classes:{container:"inline-block",toggle:"flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",toggleOn:"bg-green-500 border-green-500 justify-start text-white",toggleOff:"bg-gray-400 border-gray-400 justify-end text-gray-700"}},null,8,["modelValue"])]),e("div",R,[r(m,{buttonType:"gray",route:b.url_redirect},{default:n(()=>[d("Cancel")]),_:1},8,["route"]),r(m,{type:"submit",disabled:s.form.processing},{default:n(()=>[d("Save")]),_:1},8,["disabled"])])])])])])])],32)])])]),_:1})],64))}});export{oe as default};
