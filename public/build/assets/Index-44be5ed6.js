import{c as r,a as o,u,w as i,F as h,H as f,L as v,o as a,b as e,e as b,l as k,i as d,h as c,r as B,t as l,n as P,p as g}from"./app-76003339.js";import{B as $}from"./Authenticated-2265def5.js";import{B as p}from"./Button-25067af7.js";import{C}from"./ConfirmationModal-37417c3b.js";import{P as _}from"./Pagination-a7f37a52.js";import{r as x}from"./SearchIcon-2bfeef5e.js";import"./ApplicationLogo-1fd67e39.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./default.css_vue_type_style_index_0_src_true_lang-d960564a.js";import"./transition-e92b5099.js";const N={class:"py-4 px-4"},T={class:"overflow-x-auto"},D={class:"mx-auto"},A={class:"align-middle inline-block min-w-full"},S={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600"},V={class:"flex"},j={key:0,class:"flex"},L={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},M={class:"min-w-full divide-y divide-gray-200"},O=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",width:"2"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Programme Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Action")])],-1),z={class:"bg-white divide-y divide-gray-200"},F={key:0},R=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),E=[R],H={class:"px-6 py-4 whitespace-nowrap"},I={class:"text-sm text-gray-700"},U={class:"px-6 py-4 whitespace-nowrap"},q={class:"text-sm font-medium text-gray-900"},G={class:"px-6 py-4 whitespace-nowrap"},J={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},K={class:"flex justify-center space-x-2"},Q={components:{Head:f,Link:v,ConfirmationModal:C,SearchIcon:x,Pagination:_},props:{filter:Object},data(){return{isOpen:!1,current_tab:1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",params:{search:this.filter.search?this.filter.search:""}}},watch:{params:{handler(){this.params&&this.$inertia.get(this.route("programmes"),this.params,{replace:!0,preserveState:!0})},deep:!0}},methods:{editProgramme(n){this.$inertia.get(this.route("programmes.edit"),{programme_id:n})},deleteProgramme(n){this.confirmationTitle="Delete Programme",this.confirmationText="Are you sure want to delete this programme?",this.confirmationButton="Delete",this.confirmationMethod="delete",this.confirmationRoute="programmes.destroy",this.confirmationData=n,this.isOpen=!0}}},ie=Object.assign(Q,{__name:"Index",setup(n){return(t,m)=>(a(),r(h,null,[o(u(f),{title:"Programmes"}),o($,null,{header:i(()=>[]),default:i(()=>[e("div",N,[e("div",T,[e("div",D,[e("div",A,[e("div",S,[e("div",V,[o(u(x),{class:"text-gray-600 h-4 w-4 fill-current pointer-events-none absolute top-1/4 left-3",style:"top:21%"}),b(e("input",{class:"border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:ring-0 focus:border-gray-300 appearance-none block pl-10",type:"text","onUpdate:modelValue":m[0]||(m[0]=s=>t.params.search=s),placeholder:"Search"},null,512),[[k,t.params.search]])]),t.$page.props.can.centre_create_access?(a(),r("div",j,[o(p,{route:t.route("programmes.create"),class:"py-3"},{default:i(()=>[d("New Programme")]),_:1},8,["route"])])):c("",!0)]),e("div",L,[e("table",M,[O,e("tbody",z,[t.$page.props.programme_list.data.length?c("",!0):(a(),r("tr",F,E)),(a(!0),r(h,null,B(t.$page.props.programme_list.data,(s,y)=>(a(),r("tr",{class:"hover:bg-gray-200",key:s.id},[e("td",H,[e("div",I,l(++y),1)]),e("td",U,[e("div",q,l(s.name),1)]),e("td",G,[e("span",{class:P(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",s.status==1?" bg-green-100 text-green-800":" bg-red-100 text-red-800"])},l(s.status==1?"Active":"Not Active"),3)]),e("td",J,[e("div",K,[t.$page.props.can.setting_programme_edit_access?(a(),g(p,{key:0,buttonType:"warning",onClick:w=>t.editProgramme(s.id)},{default:i(()=>[d(" Edit ")]),_:2},1032,["onClick"])):c("",!0),t.$page.props.can.setting_programme_delete_access?(a(),g(p,{key:1,buttonType:"danger",onClick:w=>t.deleteProgramme(s.id)},{default:i(()=>[d(" Delete ")]),_:2},1032,["onClick"])):c("",!0)])])]))),128))])]),o(_,{page_data:t.$page.props.programme_list},null,8,["page_data"])])])])])])]),_:1})],64))}});export{ie as default};
