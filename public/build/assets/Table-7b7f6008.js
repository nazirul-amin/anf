import{B as r}from"./Button-5dcf5bee.js";import{c as a,b as t,a as i,w as c,h as u,F as l,r as y,H as f,L as g,o as n,i as d,t as p}from"./app-1ddf5d3d.js";import{C as x}from"./ConfirmationModal-ca95f637.js";import{P as m}from"./Pagination-8483cca8.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css            */import"./transition-1a4b8a0a.js";const w={class:"flex pb-2 justify-end"},v={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},b={class:"min-w-full divide-y divide-gray-200"},T=t("thead",{class:"bg-gray-300"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",width:"3"},"#"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Class Type"),t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Action")])],-1),k={class:"bg-white divide-y divide-gray-200"},C={key:0},B=t("td",{class:"text-center",colspan:"10"},[t("div",{class:"p-3"}," No Record Found! ")],-1),D=[B],F={class:"px-6 py-4 whitespace-nowrap"},N={class:"text-sm text-gray-700"},$={class:"px-6 py-4 whitespace-nowrap"},V={class:"text-sm font-medium text-gray-900"},j={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},A={class:"flex justify-center"},L={class:"flex pr-1"},M={class:"flex"},O={components:{Head:f,Link:g,ConfirmationModal:x,Pagination:m},data(){return{isOpen:!1,current_tab:1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:""}},methods:{editFeeType(s){this.$inertia.get(route("settings.class_types.edit"),{class_type_id:s})},deleteFeeType(s){this.confirmationTitle="Delete Class Type",this.confirmationText="Are you sure want to delete this class type?",this.confirmationButton="Delete",this.confirmationMethod="delete",this.confirmationRoute="settings.class_types.destroy",this.confirmationData=s,this.isOpen=!0}}},G=Object.assign(O,{__name:"Table",setup(s){return(e,R)=>(n(),a(l,null,[t("div",w,[i(r,{class:"py-3",route:e.route("settings.class_types.create")},{default:c(()=>[d("New Class Type")]),_:1},8,["route"])]),t("div",v,[t("table",b,[T,t("tbody",k,[e.$page.props.class_types.data.length?u("",!0):(n(),a("tr",C,D)),(n(!0),a(l,null,y(e.$page.props.class_types.data,(o,_)=>(n(),a("tr",{class:"hover:bg-gray-200",key:o.ID},[t("td",F,[t("div",N,p(++_),1)]),t("td",$,[t("div",V,p(o.name),1)]),t("td",j,[t("div",A,[t("div",L,[i(r,{buttonType:"warning",onClick:h=>e.editFeeType(o.id)},{default:c(()=>[d(" Edit ")]),_:2},1032,["onClick"])]),t("div",M,[i(r,{buttonType:"danger",onClick:h=>e.deleteFeeType(o.id)},{default:c(()=>[d(" Delete ")]),_:2},1032,["onClick"])])])])]))),128))])]),i(m,{page_data:e.$page.props.class_types},null,8,["page_data"])])],64))}});export{G as default};
