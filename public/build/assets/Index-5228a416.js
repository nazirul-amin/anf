import{a as v,o as s,c as a,b as r,u as b,w as i,F as u,H as f,L as k,d as e,f as C,l as B,k as p,j as d,h as D,t as l,n as P,m as h}from"./app-8d1aeb1f.js";import{B as $}from"./Authenticated-e8c14333.js";import{B as m}from"./Button-24cd5b3c.js";import{r as T}from"./SearchIcon-2a0b0a61.js";import{C as g}from"./ConfirmationModal-07b8b5bc.js";import{P as _}from"./Pagination-91d000e1.js";import"./ApplicationLogo-01615cb9.js";import"./XIcon-6927bd4a.js";import"./toggle-962d0e67.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-16589d50.js";const A={class:"py-4 px-4"},N={class:"overflow-x-auto"},M={class:"mx-auto"},j={class:"align-middle inline-block min-w-full"},O={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},R={class:"relative"},L=e("span",{class:"absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"w-4 h-4 text-gray-400",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),S={key:0,class:"flex"},V={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},z={class:"min-w-full divide-y divide-gray-200"},F=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",width:"2"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Programme Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Country"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Action")])],-1),E={class:"bg-white divide-y divide-gray-200"},H={key:0},I=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),U=[I],Z={class:"px-6 py-4 whitespace-nowrap"},q={class:"text-sm text-gray-700"},G={class:"px-6 py-4 whitespace-nowrap"},J={class:"text-sm font-medium text-gray-900"},K={class:"px-6 py-4 whitespace-nowrap"},Q={class:"text-sm font-medium text-gray-900"},W={class:"px-6 py-4 whitespace-nowrap"},X={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},Y={class:"flex justify-center space-x-2"},ee={components:{Head:f,Link:k,ConfirmationModal:g,SearchIcon:T,Pagination:_},props:{filter:Object},data(){return{isOpen:!1,current_tab:1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",params:{search:this.filter.search?this.filter.search:""}}},methods:{editProgramme(n){this.$inertia.get(this.route("programmes.edit"),{programme_id:n})},deleteProgramme(n){this.confirmationTitle="Delete Programme",this.confirmationText="Are you sure want to delete this programme?",this.confirmationButton="Delete",this.confirmationMethod="delete",this.confirmationRoute="programmes.destroy",this.confirmationData=n,this.isOpen=!0},search(){this.$inertia.get(this.route("programmes"),this.params,{replace:!0,preserveState:!0})}}},ue=Object.assign(ee,{__name:"Index",setup(n){return(t,c)=>{const y=v("debounce");return s(),a(u,null,[r(b(f),{title:"Programmes"}),r($,null,{header:i(()=>[]),default:i(()=>[e("div",A,[e("div",N,[e("div",M,[e("div",j,[e("div",O,[e("div",R,[L,C(e("input",{type:"text",class:"h-10 border-2 border-gray-300 w-full appearance-none focus:ring-0 focus:border-gray-300 py-1 pl-10 pr-4 text-gray-700 bg-white rounded-md",placeholder:"Search","onUpdate:modelValue":c[0]||(c[0]=o=>t.params.search=o)},null,512),[[y,t.search,"800ms"],[B,t.params.search]])]),t.$page.props.can.create_programmes?(s(),a("div",S,[r(m,{route:t.route("programmes.create")},{default:i(()=>[p("New Programme")]),_:1},8,["route"])])):d("",!0)]),e("div",V,[e("table",z,[F,e("tbody",E,[t.$page.props.programme_list.data.length?d("",!0):(s(),a("tr",H,U)),(s(!0),a(u,null,D(t.$page.props.programme_list.data,(o,x)=>(s(),a("tr",{class:"hover:bg-gray-200",key:o.id},[e("td",Z,[e("div",q,l(++x),1)]),e("td",G,[e("div",J,l(o.programme_name),1)]),e("td",K,[e("div",Q,l(o.country),1)]),e("td",W,[e("span",{class:P(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",o.status==1?" bg-green-100 text-green-800":" bg-red-100 text-red-800"])},l(o.status==1?"Active":"Not Active"),3)]),e("td",X,[e("div",Y,[t.$page.props.can.edit_programmes?(s(),h(m,{key:0,buttonType:"warning",onClick:w=>t.editProgramme(o.id)},{default:i(()=>[p(" Edit ")]),_:2},1032,["onClick"])):d("",!0),t.$page.props.can.delete_programmes?(s(),h(m,{key:1,buttonType:"danger",onClick:w=>t.deleteProgramme(o.id)},{default:i(()=>[p(" Delete ")]),_:2},1032,["onClick"])):d("",!0)])])]))),128))])]),r(_,{page_data:t.$page.props.programme_list,params:t.params},null,8,["page_data","params"])])])])])]),r(g,{show:t.isOpen,onClose:c[1]||(c[1]=o=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Programme",confirmationText:"Are you sure want to delete this programme?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64)}}});export{ue as default};
