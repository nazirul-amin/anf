import{r as k,c as d,b as r,u as f,w as a,F as w,o as i,H as x,d as e,f as C,l as M,m as p,k as h,j as _,h as y,t as l,n as $}from"./app-7a9e3d8f.js";import{B as H}from"./Authenticated-693fed02.js";import{B as c}from"./Button-53503c7b.js";import{M as v}from"./Modal-5f5a23dc.js";import{C as T}from"./ConfirmationModal-9d13d15d.js";import{h as b}from"./moment-fbc5633a.js";import B from"./Invoice-a72d8ad5.js";import D from"./PackingSlip-46dae470.js";import"./ApplicationLogo-4a56f50b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-3b6549e5.js";import"./default.css_vue_type_style_index_0_src_true_lang-3cd6ffa2.js";import"./VueFinalModal.esm-46c3d022.js";/* empty css                                                              */import"./transition-37a364be.js";const z={class:"py-4 px-4"},V={class:"overflow-x-auto"},j={class:"mx-auto"},S={class:"align-middle inline-block min-w-full"},O={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},P={class:"flex space-x-2"},N={class:"relative"},A=e("span",{class:"absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"w-4 h-4 text-gray-400",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),L={class:"flex"},U={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},R={class:"min-w-full divide-y divide-gray-200"},E=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-6/14"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Date"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Attachments"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/14"},"Shipment Tracking"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"Action")])],-1),F={class:"bg-white divide-y divide-gray-200"},I={key:0},G=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),Y=[G],J={class:""},Z={class:"px-6 py-4 whitespace-nowrap"},q={class:"text-sm text-gray-700"},K={class:"px-6 py-4 whitespace-nowrap"},Q={class:"text-sm font-medium text-gray-900"},W={class:"px-6 py-4 whitespace-nowrap"},X={class:"text-sm font-medium text-gray-900"},ee={class:"px-6 py-4 whitespace-nowrap space-x-2"},te=["onClick"],se=["onClick"],oe={class:"px-6 py-4 whitespace-nowrap"},ae={key:0,class:"flex flex-col text-sm font-medium text-gray-900"},ie={class:"font-bold text-gray-600"},ne={class:"font-semibold text-indigo-700"},re={key:1,class:""},le={class:"px-6 py-4 whitespace-nowrap"},de={class:"text-sm font-medium text-gray-900"},ce=["onClick"],pe={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},he={class:"flex space-x-2 justify-center"},_e={class:"p-4 md:p-6 overflow-y-auto no-scrollbar"},ge={class:"bg-gray-50"},ue={class:"container"},me={class:"flex flex-col text-gray-50"},fe={key:0,class:"flex md:px-4"},we=e("h3",{class:"font-semibold text-md italic mb-1 text-slate-700"},"Sorry, no status has been added right now.",-1),ve=[we],ye={class:"flex space-x-2 md:space-x-4"},be=e("div",{class:"relative"},[e("div",{class:"h-full w-6 flex items-center justify-center"},[e("div",{class:"h-full w-1 bg-green-600 pointer-events-none"})]),e("div",{class:"w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-600 shadow text-center"},[e("i",{class:"fas fa-check-circle text-white"})])],-1),ke={class:"bg-green-600 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full"},xe={class:"font-semibold text-sm mb-1"},Ce={class:"leading-tight text-xs text-justify w-full"},Me={class:"flex justify-between space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},$e=e("h3",{class:"text-gray-900 text-xl font-semibold"}," Invoice ",-1),He={class:"flex justify-between space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},Te=e("svg",{class:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},[e("path",{d:"M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"}),e("path",{d:"M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"})],-1),Be=e("span",null,"Print",-1),De=e("h3",{class:"text-gray-900 text-xl font-semibold"}," Packing Slip ",-1),ze={class:"flex justify-between space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},Ve=e("svg",{class:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},[e("path",{d:"M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"}),e("path",{d:"M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"})],-1),je=e("span",null,"Print",-1),Se={data(){return{show_invoice:!1,show_packing_slip:!1,show_delete_order:!1,confirmation_data:"",show_tracking_status:!1,tracking_status:[],params:{search:this.$page.props.filter.search?this.$page.props.filter.search:""},invoice_data:[],packing_slip_data:[],generating:[]}},methods:{viewTrackingStatus(n){this.tracking_status=JSON.parse(n),this.show_tracking_status=!0},editOrder(n){this.$inertia.get(route("orders.edit"),{order_id:n})},deleteOrder(n){this.confirmation_data=n,this.show_delete_order=!0},viewInvoice(n,t){this.generating[t].invoice||(this.generating[t].invoice=!0,axios.get(route("orders.invoice.generate"),{responseType:"blob",params:{order_id:n}}).then(o=>{const g=new Blob([o.data],{type:"application/pdf"}),s=URL.createObjectURL(g);window.open(s,"_blank"),this.generating[t].invoice=!1}).catch(o=>{console.error("Error fetching PDF:",o),this.generating[t].invoice=!1}))},viewPackingSlip(n,t){this.generating[t].packing_slip||(this.generating[t].packing_slip=!0,axios.get(route("orders.packing_slip.generate"),{responseType:"blob",params:{order_id:n}}).then(o=>{const g=new Blob([o.data],{type:"application/pdf"}),s=URL.createObjectURL(g);window.open(s,"_blank"),this.generating[t].packing_slip=!1}).catch(o=>{console.error("Error fetching PDF:",o),this.generating[t].packing_slip=!1}))}},created(){this.$page.props.orders.data.forEach(n=>{this.generating.push({invoice:!1,packing_slip:!1})})}},Ke=Object.assign(Se,{__name:"Index",setup(n){return(t,o)=>{const g=k("Pagination");return i(),d(w,null,[r(f(x),{title:"Orders"}),r(H,null,{header:a(()=>[]),default:a(()=>[e("div",z,[e("div",V,[e("div",j,[e("div",S,[e("div",O,[e("div",P,[e("div",N,[A,C(e("input",{type:"text",class:"h-10 border-2 border-gray-300 w-full appearance-none focus:ring-0 focus:border-gray-300 py-1 pl-10 pr-4 text-gray-700 bg-white rounded-md",placeholder:"Search","onUpdate:modelValue":o[0]||(o[0]=s=>t.params.search=s)},null,512),[[M,t.params.search]])])]),e("div",L,[t.$page.props.can.create_orders?(i(),p(c,{key:0,route:t.route("orders.create")},{default:a(()=>[h("Add New Order")]),_:1},8,["route"])):_("",!0)])]),e("div",U,[e("table",R,[E,e("tbody",F,[!t.$page.props.orders.data||!t.$page.props.orders.data.length?(i(),d("tr",I,Y)):(i(!0),d(w,{key:1},y(t.$page.props.orders.data,(s,u)=>(i(),d("tr",J,[e("td",Z,[e("div",q,l(u+1),1)]),e("td",K,[e("div",Q,l(s.parent_full_name),1)]),e("td",W,[e("div",X,l(f(b)(s.created_at).format("DD/MM/Y")),1)]),e("td",ee,[e("span",{onClick:m=>t.viewInvoice(s.id,u),class:"font-semibold border border-blue-600 bg-blue-100 hover:bg-blue-200 text-blue-700 whitespace-nowrap rounded px-2.5 py-1 text-sm cursor-pointer"},l(t.generating[u].invoice?"Generating...":"Invoice"),9,te),e("span",{onClick:m=>t.viewPackingSlip(s.id,u),class:"font-semibold border border-blue-600 bg-blue-100 hover:bg-blue-200 text-blue-700 whitespace-nowrap rounded px-2.5 py-1 text-sm cursor-pointer"},l(t.generating[u].packing_slip?"Generating...":"Packing Slip"),9,se)]),e("td",oe,[s.shipping_provider_name?(i(),d("div",ae,[e("small",ie,l(s.shipping_provider_name),1),e("span",ne,l(s.tracking_number),1)])):(i(),d("div",re,"-"))]),e("td",le,[e("div",de,[e("span",{onClick:m=>t.viewTrackingStatus(s.tracking_status),class:$(["border whitespace-nowrap rounded px-2.5 py-1 text-sm cursor-pointer",[s.class_name]])},l(s.status_name),11,ce)])]),e("td",pe,[e("div",he,[t.$page.props.can.edit_orders?(i(),p(c,{key:0,onClick:m=>t.editOrder(s.id),buttonType:"warning"},{default:a(()=>[h("Edit")]),_:2},1032,["onClick"])):_("",!0),t.$page.props.can.delete_orders?(i(),p(c,{key:1,onClick:m=>t.deleteOrder(s.id),buttonType:"danger"},{default:a(()=>[h("Delete")]),_:2},1032,["onClick"])):_("",!0)])])]))),256))])]),t.$page.props.orders.length?(i(),p(g,{key:0,page_data:t.$page.props.orders},null,8,["page_data"])):_("",!0)])])])]),r(T,{show:t.show_delete_order,onClose:o[1]||(o[1]=s=>t.show_delete_order=!1),confirmationAlert:"danger",confirmationTitle:"Delete Order",confirmationText:"Are you sure want to delete this order?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:"orders.destroy",confirmationData:t.confirmation_data},null,8,["show","confirmationData"])]),r(v,{modalType:"sm",showModal:t.show_tracking_status,onHideModal:o[3]||(o[3]=s=>t.show_tracking_status=!1)},{content:a(()=>[e("div",_e,[e("body",ge,[e("div",ue,[e("div",me,[!t.tracking_status||!t.tracking_status.length?(i(),d("div",fe,ve)):(i(!0),d(w,{key:1},y(t.tracking_status,s=>(i(),d("div",ye,[be,e("div",ke,[e("h3",xe,l(s.name),1),e("p",Ce,l(f(b)(s.datetime).format("DD/MM/Y HH:mm A")),1)])]))),256))])])])])]),footer:a(()=>[e("div",Me,[r(c,{buttonType:"gray",onClick:o[2]||(o[2]=s=>t.show_tracking_status=!1)},{default:a(()=>[h("Close")]),_:1})])]),_:1},8,["showModal"]),t.show_invoice?(i(),p(v,{key:0,showModal:t.show_invoice,modalType:"md",onHideModal:o[5]||(o[5]=s=>t.show_invoice=!1)},{header:a(()=>[$e]),content:a(()=>[r(B,{invoice_data:t.invoice_data},null,8,["invoice_data"])]),footer:a(()=>[e("div",He,[r(c,{buttonType:"blue",class:"px-4 py-2 space-x-2",onClick:t.print},{default:a(()=>[Te,Be]),_:1},8,["onClick"]),r(c,{buttonType:"gray",onClick:o[4]||(o[4]=s=>t.show_invoice=!1)},{default:a(()=>[h("Close")]),_:1})])]),_:1},8,["showModal"])):_("",!0),t.show_packing_slip?(i(),p(v,{key:1,showModal:t.show_packing_slip,modalType:"md",onHideModal:o[7]||(o[7]=s=>t.show_packing_slip=!1)},{header:a(()=>[De]),content:a(()=>[r(D,{packing_slip_data:t.packing_slip_data},null,8,["packing_slip_data"])]),footer:a(()=>[e("div",ze,[r(c,{buttonType:"blue",class:"px-4 py-2 space-x-2",onClick:t.print},{default:a(()=>[Ve,je]),_:1},8,["onClick"]),r(c,{buttonType:"gray",onClick:o[6]||(o[6]=s=>t.show_packing_slip=!1)},{default:a(()=>[h("Close")]),_:1})])]),_:1},8,["showModal"])):_("",!0)]),_:1})],64)}}});export{Ke as default};
