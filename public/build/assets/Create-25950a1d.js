import{c as m,b as o,u as l,w as a,F as c,A as g,o as p,H as n,d as t,e as _,f as u,l as f,n as b,k as i,L as h}from"./app-875b5ae4.js";import{B as y}from"./Authenticated-4b3c419f.js";import{B as d}from"./Button-dc28f95e.js";import{r as v}from"./TrashIcon-43c6a414.js";import{V as w}from"./vue-draggable-next.esm-bundler-8aeea8a2.js";import{C as x}from"./ConfirmationModal-4578b7f2.js";import{x as T,I as B,y as C,S as k,g as S}from"./tabs-a3439129.js";/* empty css            */import"./ApplicationLogo-c9ef20ed.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-a84dd0b4.js";import"./default.css_vue_type_style_index_0_src_true_lang-090a1dfe.js";import"./transition-bcf256d9.js";import"./use-resolve-button-type-31cd41ef.js";const V={class:"md:grid md:grid-cols-2"},L={class:"md:mt-0 md:col-span-2"},D={class:"px-4 py-5 bg-indigo-100 space-y-6 sm:p-6 h-full"},I={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},M={class:"sm:row-span-3 space-y-2"},N={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},$=t("div",{class:"mb-5"},[t("h1",{class:"text-indigo-800 font-bold"},"Categories"),t("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),j={class:"mb-3"},z=t("label",{for:"category_name",class:"block text-sm text-gray-700 font-bold"},[i("Category name"),t("span",{class:"text-red-500"},"*")],-1),A={class:"mt-1 flex rounded-md shadow-sm"},O={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},F={class:"flex items-end justify-end space-x-2"},H=g({components:{Head:n,Link:h,TabGroup:T,TabList:B,Tab:C,TabPanels:k,TabPanel:S,ConfirmationModal:x,TrashIcon:v,draggable:w},props:{diagnostic_test_id:String},data(){return{data:{type:Object,default:()=>({})},enabled:!0,isOpen:!1,showUpload:!0,showImage:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",dragging:!0,dtList:this.$page.props.diagnostic_test_list?this.$page.props.diagnostic_test_list:[],form:{dt_id:this.diagnostic_test_id?this.diagnostic_test_id:"",category_name:""}}},methods:{submit(){this.$inertia.post(route("dt.settings.categories.store"),this.form,{preserveState:!0})}}}),st=Object.assign(H,{__name:"Create",setup(P){return(e,s)=>(p(),m(c,null,[o(l(n),{title:"Diagnostic Test"}),o(y,null,{header:a(()=>[]),default:a(()=>[t("div",V,[t("div",L,[t("div",D,[t("div",I,[t("form",{onSubmit:s[1]||(s[1]=_((...r)=>e.submit&&e.submit(...r),["prevent"]))},[t("div",M,[t("div",N,[$,t("div",j,[z,t("div",A,[u(t("input",{type:"text",name:"category_name",id:"category_name",class:b(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",e.$page.props.errors.category_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[0]||(s[0]=r=>e.form.category_name=r),autocomplete:"off"},null,2),[[f,e.form.category_name]])])])]),t("div",O,[t("div",F,[o(d,{buttonType:"gray",route:e.route("dt.settings.details",{dt_id:e.diagnostic_test_id})},{default:a(()=>[i("Cancel")]),_:1},8,["route"]),o(d,{type:"submit"},{default:a(()=>[i("Save ")]),_:1})])])])],32)])])])])]),_:1})],64))}});export{st as default};
