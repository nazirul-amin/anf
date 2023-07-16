import{c as m,b as s,u as l,w as a,F as c,A as g,o as p,H as n,d as e,e as f,f as _,l as u,n as b,k as i,L as h}from"./app-d43ace84.js";import{B as y}from"./Authenticated-86ad341a.js";import{B as d}from"./Button-59a3957d.js";import{r as v}from"./TrashIcon-23355d26.js";import{V as w}from"./vue-draggable-next.esm-bundler-c5c8847a.js";import{C as x}from"./ConfirmationModal-7b6f1177.js";import{x as T,I as B,y as C,S as k,g as V}from"./tabs-cdac1534.js";/* empty css            */import"./ApplicationLogo-85a4f4bf.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./default.css_vue_type_style_index_0_src_true_lang-dbfe2aa6.js";import"./transition-bd56ad90.js";import"./use-resolve-button-type-d5bcc0a0.js";const L={class:"md:grid md:grid-cols-2"},S={class:"md:mt-0 md:col-span-2"},$={class:"px-4 py-5 bg-indigo-100 space-y-6 sm:p-6 h-full"},j={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},D={class:"sm:row-span-3 space-y-2"},I={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},M=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Categories"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),N={class:"mb-3"},O=e("label",{for:"category_name",class:"block text-sm text-gray-700 font-bold"},[i("Category name"),e("span",{class:"text-red-500"},"*")],-1),z={class:"mt-1 flex rounded-md shadow-sm"},A={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},E={class:"flex items-end justify-end space-x-2"},F=g({components:{Head:n,Link:h,TabGroup:T,TabList:B,Tab:C,TabPanels:k,TabPanel:V,ConfirmationModal:x,TrashIcon:v,draggable:w},props:{category_info:Object},data(){return{data:{type:Object,default:()=>({})},enabled:!0,isOpen:!1,showUpload:!0,showImage:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",dragging:!0,dtList:this.$page.props.diagnostic_test_list?this.$page.props.diagnostic_test_list:[],form:{category_id:this.category_info?this.category_info.id:"",dt_id:this.category_info?this.category_info.dt_id:"",category_name:this.category_info?this.category_info.name:""}}},methods:{submit(){this.$inertia.post(route("dt.settings.categories.update"),this.form,{preserveState:!0})}}}),te=Object.assign(F,{__name:"Edit",setup(H){return(t,o)=>(p(),m(c,null,[s(l(n),{title:"Diagnostic Test"}),s(y,null,{header:a(()=>[]),default:a(()=>[e("div",L,[e("div",S,[e("div",$,[e("div",j,[e("form",{onSubmit:o[1]||(o[1]=f((...r)=>t.submit&&t.submit(...r),["prevent"]))},[e("div",D,[e("div",I,[M,e("div",N,[O,e("div",z,[_(e("input",{type:"text",name:"category_name",id:"category_name",class:b(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.category_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[0]||(o[0]=r=>t.form.category_name=r),autocomplete:"off"},null,2),[[u,t.form.category_name]])])])]),e("div",A,[e("div",E,[s(d,{buttonType:"gray",route:t.route("dt.settings.details",{dt_id:t.$page.props.category_info.dt_id})},{default:a(()=>[i("Cancel")]),_:1},8,["route"]),s(d,{type:"submit"},{default:a(()=>[i("Save ")]),_:1})])])])],32)])])])])]),_:1})],64))}});export{te as default};
