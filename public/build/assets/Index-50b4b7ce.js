import{_ as w}from"./Authenticated-7948d6f3.js";import{r as x,c as r,b as i,u as _,w as l,F as h,H as f,L as v,ac as k,o as p,d as e,h as M,t as c,n as D,k as C}from"./app-7a9e3d8f.js";import{B as u}from"./Button-53503c7b.js";import{M as y}from"./Modal-5f5a23dc.js";import{h as g}from"./moment-fbc5633a.js";import"./XIcon-3b6549e5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-37a364be.js";import"./use-resolve-button-type-9e88e1b3.js";import"./menu-e0d3f5d6.js";import"./VueFinalModal.esm-46c3d022.js";/* empty css                                                              */const F={class:"overflow-x-auto no-scrollbar"},z={class:"bg-white shadow rounded-lg border"},H={class:"w-full text-sm text-left text-gray-500"},B=e("thead",{class:"text-gray-700 capitalize bg-gray-200"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"}," Invoice Number "),e("th",{scope:"col",class:"px-6 py-3"}," Date Issued "),e("th",{scope:"col",class:"px-6 py-3"}," Due Date "),e("th",{scope:"col",class:"px-6 py-3 text-center"}," Amount "),e("th",{scope:"col",class:"px-6 py-3 text-center"}," Status "),e("th",{scope:"col",class:"px-6 py-3 text-center"}," Action ")])],-1),N={key:0,class:"bg-white border-b"},V=e("td",{class:"text-center py-4",colspan:"10"}," No record found. ",-1),I=[V],$={class:"bg-white border-b hover:bg-gray-50"},L={class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap"},S={class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap"},T={class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap"},j={class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"},A={class:"px-6 py-4 text-center"},E={class:"px-6 py-4 text-center"},O=["onClick"],P=["onClick"],U=e("h3",{class:"text-gray-900 text-xl font-semibold"}," Invoice ",-1),J={class:"flex justify-between space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},R=e("svg",{class:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},[e("path",{d:"M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"}),e("path",{d:"M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"})],-1),Y=e("span",null,"Print",-1),G={components:{Head:f,Link:v,Modal:y},data(){return{open_modal:!1,generating:!1,invoice_data:{parent_name:"",parent_address:"No 27, Jalan Kap Empat, 17/17D, Seksyen 17, Shah Alam",invoice_number:"",invoice_items:[],date_issued:"",due_date:"",total_amount:""}}},methods:{viewInvoice(n){this.generating||(this.generating=!0,k.get(route("fee.invoices.generate"),{responseType:"blob",params:{invoice_id:n}}).then(t=>{const s=new Blob([t.data],{type:"application/pdf"}),a=URL.createObjectURL(s);window.open(a,"_blank"),this.generating=!1}).catch(t=>{console.error("Error fetching PDF:",t),this.generating=!1}))},totalFee(n){let t=0;const s=JSON.parse(n);for(const a of s){const o=parseFloat(a.programme_fee),m=parseFloat(a.programme_fee_discount),d=parseFloat(a.material_fee),b=parseFloat(a.material_fee_discount);t+=o-m,a.include_material_fee&&(t+=d-b)}return t},pay(n){window.location.href="https://www.billplz-sandbox.com/bills/"+n}}},re=Object.assign(G,{__name:"Index",setup(n){return(t,s)=>{const a=x("MonthlyFee");return p(),r(h,null,[i(_(f),{title:"Invoices"}),i(w,null,{default:l(()=>[e("div",F,[e("div",z,[e("table",H,[B,e("tbody",null,[t.$page.props.invoices.length?(p(!0),r(h,{key:1},M(t.$page.props.invoices,(o,m)=>(p(),r("tr",$,[e("td",L,c(o.invoice_number),1),e("td",S,c(_(g)(o.date_issued).format("DD MMM Y")),1),e("td",T,c(_(g)(o.due_date).format("DD MMM Y")),1),e("td",j,c(o.amount),1),e("td",A,[e("span",{class:D(["text-xs font-medium px-2 py-1 rounded",[o.status_bg_color,o.status_text_color]])},c(o.status),3)]),e("td",E,[o.status_id==1?(p(),r("a",{key:0,onClick:d=>t.pay(o.bill_id),class:"cursor-pointer font-medium px-3 py-1 text-indigo-600 hover:bg-indigo-200 hover:rounded whitespace-nowrap"},"Pay Now",8,O)):(p(),r("a",{key:1,class:"cursor-pointer font-medium px-3 py-1 text-blue-600 bg-blue-100 hover:bg-blue-200 rounded whitespace-nowrap",onClick:d=>t.generating?"":t.viewInvoice(o.id)},c(t.generating?"Generating...":"View / Download"),9,P))])]))),256)):(p(),r("tr",N,I))])])])]),i(y,{showModal:t.open_modal,modalType:"md",onHideModal:s[1]||(s[1]=o=>t.open_modal=!1)},{header:l(()=>[U]),content:l(()=>[i(a,{invoice_data:t.invoice_data},null,8,["invoice_data"])]),footer:l(()=>[e("div",J,[i(u,{buttonType:"blue",class:"px-4 py-2 space-x-2",onClick:t.print},{default:l(()=>[R,Y]),_:1},8,["onClick"]),i(u,{buttonType:"gray",onClick:s[0]||(s[0]=o=>t.open_modal=!1)},{default:l(()=>[C("Close")]),_:1})])]),_:1},8,["showModal"])]),_:1})],64)}}});export{re as default};
