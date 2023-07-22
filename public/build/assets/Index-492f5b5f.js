import{X as f,x as c,c as m,b as i,u as a,w as d,F as v,H as N,L as q,o as x,d as e,k as S,j as M,h as C,t as p,n as h,f as j,i as I}from"./app-875b5ae4.js";import{B as T,r as A}from"./Authenticated-4b3c419f.js";import{B as _}from"./Button-dc28f95e.js";import{r as b}from"./PencilIcon-9842cd6f.js";import{r as U}from"./SearchIcon-e774b677.js";import{r as g}from"./TrashIcon-43c6a414.js";import{C as B}from"./ConfirmationModal-4578b7f2.js";/* empty css            */import"./ApplicationLogo-c9ef20ed.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-a84dd0b4.js";import"./default.css_vue_type_style_index_0_src_true_lang-090a1dfe.js";import"./transition-bcf256d9.js";var F={prefix:"far",iconName:"square-caret-down",icon:[448,512,["caret-square-down"],"f150","M384 432c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0zm64-16c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"]},y=F,V={prefix:"far",iconName:"square-caret-up",icon:[448,512,["caret-square-up"],"f151","M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm224 64c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9s-12.5 14.4-22 14.4l-208 0c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7z"]},k=V;const E={transform:"rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1))"},$={fill:"currentColor"},z={mdi:{size:24,viewbox:"0 0 24 24"},"simple-icons":{size:24,viewbox:"0 0 24 24"},default:{size:0,viewbox:"0 0 0 0"}},w={name:"icon",props:{type:{type:String,default:"mdi"},faIcon:{type:Object,default:null},path:{type:[String,Object,Array]},size:{type:[Number,String],default:24},viewbox:String,flip:{type:String,validator:t=>["horizontal","vertical","both"].includes(t)},rotate:{type:[Number,String],default:0}},setup(t){if(!t.path&&!t.faIcon)return console.warn("vue3-icon requires either a 'path' or an 'fa-icon' property"),()=>f("div");const o=c(()=>{var l;return((l=t.faIcon)==null?void 0:l.prefix)||t.type}),u=c(()=>parseInt(t.rotate,10)),s=c(()=>z[o.value]||z.default),n=c(()=>parseInt(t.size,10)||s.value.size),r=c(()=>t.faIcon?`0 0 ${t.faIcon.icon[0]} ${t.faIcon.icon[1]}`:!1),R=c(()=>r.value||t.viewbox||s.value.viewbox),D=c(()=>({...E,"--sx":["both","horizontal"].includes(t.flip)?"-1":"1","--sy":["both","vertical"].includes(t.flip)?"-1":"1","--r":isNaN(u.value)?u.value:u.value+"deg"})),L=c(()=>{var l;return t.faIcon?(l=t.faIcon)==null?void 0:l.icon[4]:t.type==="simple-icons"&&typeof t.path=="object"?t.path.path:t.path}),O=c(()=>o.value==="fad"?(console.warn("vue3-icon does not currently support Duotone FontAwesome icons"),f("path")):Array.isArray(t.path)?f("g",{style:{...$}},t.path.map(l=>typeof l=="string"?f("path",{d:l}):f("path",{...l}))):f("path",{d:L.value,style:{...$}}));return()=>f("svg",{style:D.value,class:["vue3-icon"],width:n.value,height:n.value,viewBox:R.value},[O.value])}},H={class:"py-4 px-4"},P={class:"overflow-x-auto"},X={class:"mx-auto"},G={class:"align-top inline-block w-full lg:w-1/2 px-2 mb-3"},J={class:"flex pb-4 relative text-gray-400 focus-within:text-gray-600"},K={class:"shadow overflow-hidden overflow-x-auto hover:no-scrollbar border-b border-gray-200 sm:rounded-lg"},Q={class:"min-w-full divide-y divide-gray-200 w-full"},W=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"Order"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/6"},"Menu Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/6"},"Route Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/6"},"Action")])],-1),Y={class:"bg-white divide-y divide-gray-200 overflow-y-scroll"},Z={key:0},ee=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),te=[ee],oe={class:"px-6 py-2 whitespace-nowrap text-sm"},se={class:"px-2 py-2 whitespace-nowrap"},ie={class:"flex justify-center"},ne={class:"px-2 py-2 whitespace-nowrap"},ae={class:"flex items-center"},re={class:"ml-4"},le={class:"text-sm font-medium text-gray-900"},ce={class:"px-2 py-2 whitespace-nowrap"},de={class:"flex items-center"},ue={class:"ml-4"},pe={class:"px-6 py-2 whitespace-nowrap"},he={class:"px-6 py-2 whitespace-nowrap text-center text-sm font-medium"},fe={class:"flex"},me={class:"pr-1"},xe={class:"pr-1"},_e={class:"pr-1"},we={class:"align-top inline-block w-full lg:w-1/2 px-2"},ve={class:"flex pb-4 relative text-gray-400 focus-within:text-gray-600 lg:justify-end"},be={class:"shadow overflow-hidden overflow-x-auto hover:no-scrollbar border-b border-gray-200 sm:rounded-lg"},ge={class:"min-w-full divide-y divide-gray-200 w-full"},ye=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/8"},"Order"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/6"},"Sub Menu Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/6"},"Route Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/6"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6"},"Action")])],-1),ke={class:"bg-white divide-y divide-gray-200 overflow-y-scroll"},Se={key:0},Me=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),Ce=[Me],$e={class:"px-6 py-2 whitespace-nowrap text-sm"},ze={class:"px-2 py-2 whitespace-nowrap"},Ne={class:"flex justify-center"},Ae={class:"px-2 py-2 whitespace-nowrap"},Be={class:"flex items-center"},Re={class:"ml-4"},De={class:"text-sm font-medium text-gray-900"},Le={class:"px-2 py-2 whitespace-nowrap"},Oe={class:"flex items-center"},qe={class:"ml-4"},je={class:"px-6 py-2 whitespace-nowrap"},Ie={class:"px-6 py-2 whitespace-nowrap text-center text-sm font-medium"},Te={class:"flex"},Ue={class:"pr-1"},Fe={class:"pr-1"},Ve={components:{SearchIcon:U,TrashIcon:g,PencilIcon:b,ChevronRightIcon:A,ConfirmationModal:B,Head:N,Link:q,SvgIcon:w,faCaretSquareUp:k,faCaretSquareDown:y},props:{show_sub_menu:Boolean,menu_id:String},data(){return{isOpen:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationRoute:"",confirmationData:""}},methods:{showSubMenu(t){this.$inertia.get(route("menus"),{menu_id:t})},addSubMenu(t){this.$inertia.get(route("menus.add_sub_menu"),{menu_id:t})},editMenu(t){this.$inertia.get(route("menus.edit_menu"),{menu_id:t})},editSubMenu(t){this.$inertia.get(route("menus.edit_sub_menu"),{menu_id:t})},deleteMenu(t){this.confirmationRoute="menus.destroy_menu",this.confirmationData=t,this.isOpen=!0},deleteSubMenu(t){this.confirmationRoute="menus.destroy_sub_menu",this.confirmationData=t,this.isOpen=!0},swapMenuUp(t){this.$inertia.post(route("menus.swap_menu_up"),{menu_id:t})},swapMenuDown(t){this.$inertia.post(route("menus.swap_menu_down"),{menu_id:t})},swapSubMenuUp(t,o){this.$inertia.post(route("menus.swap_sub_menu_up"),{menu_id:t,sub_menu_id:o})},swapSubMenuDown(t,o){this.$inertia.post(route("menus.swap_sub_menu_down"),{menu_id:t,sub_menu_id:o})}}},ot=Object.assign(Ve,{__name:"Index",setup(t){return(o,u)=>(x(),m(v,null,[i(a(N),{title:"Menus"}),i(T,null,{header:d(()=>[]),default:d(()=>[e("div",H,[e("div",P,[e("div",X,[e("div",G,[e("div",J,[i(_,{route:o.route("menus.add_menu")},{default:d(()=>[S(" Add Menu ")]),_:1},8,["route"])]),e("div",K,[e("table",Q,[W,e("tbody",Y,[o.$page.props.menus.length==0?(x(),m("tr",Z,te)):M("",!0),(x(!0),m(v,null,C(o.$page.props.menus,(s,n)=>(x(),m("tr",{class:"hover:bg-gray-200",key:n},[e("td",oe,p(++n),1),e("td",se,[e("div",ie,[e("div",{class:h(["px-0.5",n>1?"text-blue-600 hover:text-blue-800 cursor-pointer":"text-blue-200 cursor-not-allowed"]),title:"Sort"},[i(a(w),{"fa-icon":a(k),size:25,flip:"horizontal",onClick:r=>n>1?o.swapMenuUp(s.id):""},null,8,["fa-icon","onClick"])],2),e("div",{class:h(["px-0.5≈",n<o.$page.props.menus.length?"text-blue-600 hover:text-blue-800 cursor-pointer":"text-blue-200 cursor-not-allowed"]),title:"Sort"},[i(a(w),{"fa-icon":a(y),size:25,flip:"horizontal",onClick:r=>n<o.$page.props.menus.length?o.swapMenuDown(s.id):""},null,8,["fa-icon","onClick"])],2)])]),e("td",ne,[e("div",ae,[e("div",re,[e("div",le,p(s.menu_label),1)])])]),e("td",ce,[e("div",de,[e("div",ue,[e("div",{class:h(["text-sm font-medium text-gray-900",s.menu_route?"":"font-black"])},p(s.menu_route?s.menu_route:""),3)])])]),e("td",pe,[e("span",{class:h(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",s.menu_status==1?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},p(s.menu_status==1?"Active":"Not Active"),3)]),e("td",he,[e("div",fe,[e("div",me,[i(_,{class:"bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-1 border border-yellow-700 rounded",onClick:r=>o.editMenu(s.id),title:"Edit"},{default:d(()=>[i(a(b),{class:"text-white-600 h-4 w-4 fill-current"})]),_:2},1032,["onClick"])]),e("div",xe,[i(_,{class:"bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-1 border border-red-700 rounded",onClick:r=>o.deleteMenu(s.id),title:"Delete"},{default:d(()=>[i(a(g),{class:"text-white-600 h-4 w-4 fill-current"})]),_:2},1032,["onClick"])]),e("div",_e,[i(_,{class:"bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-1 border border-blue-700 rounded",onClick:r=>o.showSubMenu(s.id),title:"View Sub Menu"},{default:d(()=>[i(a(A),{class:"text-white-600 h-4 w-4 fill-current"})]),_:2},1032,["onClick"])])])])]))),128))])])])]),j(e("div",we,[e("div",ve,[i(_,{onClick:u[0]||(u[0]=s=>o.addSubMenu(t.menu_id))},{default:d(()=>[S(" Add Sub Menu ")]),_:1})]),e("div",be,[e("table",ge,[ye,e("tbody",ke,[o.$page.props.sub_menus.length==0?(x(),m("tr",Se,Ce)):M("",!0),(x(!0),m(v,null,C(o.$page.props.sub_menus,(s,n)=>(x(),m("tr",{class:"hover:bg-gray-200",key:n},[e("td",$e,p(++n),1),e("td",ze,[e("div",Ne,[e("div",{class:h(["px-0.5",n>1?"text-blue-600 hover:text-blue-800 cursor-pointer":"text-blue-200 cursor-not-allowed"]),title:"Sort"},[i(a(w),{"fa-icon":a(k),size:25,flip:"horizontal",onClick:r=>n>1?o.swapSubMenuUp(t.menu_id,s.id):""},null,8,["fa-icon","onClick"])],2),e("div",{class:h(["px-0.5≈",n<o.$page.props.sub_menus.length?"text-blue-600 hover:text-blue-800 cursor-pointer":"text-blue-200 cursor-not-allowed"]),title:"Sort"},[i(a(w),{"fa-icon":a(y),size:25,flip:"horizontal",onClick:r=>n<o.$page.props.sub_menus.length?o.swapSubMenuDown(t.menu_id,s.id):""},null,8,["fa-icon","onClick"])],2)])]),e("td",Ae,[e("div",Be,[e("div",Re,[e("div",De,p(s.menu_sub_label),1)])])]),e("td",Le,[e("div",Oe,[e("div",qe,[e("div",{class:h(["text-sm font-medium text-gray-900",s.menu_sub_route?"":"font-extrabold"])},p(s.menu_sub_route?s.menu_sub_route:"None"),3)])])]),e("td",je,[e("span",{class:h(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",s.menu_sub_status==1?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},p(s.menu_sub_status==1?"Active":"Not Active"),3)]),e("td",Ie,[e("div",Te,[e("div",Ue,[i(_,{class:"bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-1 border border-yellow-700 rounded",onClick:r=>o.editSubMenu(s.id),title:"Delete"},{default:d(()=>[i(a(b),{class:"text-white-600 h-4 w-4 fill-current"})]),_:2},1032,["onClick"])]),e("div",Fe,[i(_,{class:"bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-1 border border-red-700 rounded",onClick:r=>o.deleteSubMenu(s.id),title:"Delete"},{default:d(()=>[i(a(g),{class:"text-white-600 h-4 w-4 fill-current"})]),_:2},1032,["onClick"])])])])]))),128))])])])],512),[[I,t.show_sub_menu]])])]),i(B,{show:o.isOpen,onClose:u[1]||(u[1]=s=>o.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Menu",confirmationText:"Are you sure want to delete this menu?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:o.confirmationRoute,confirmationData:o.confirmationData},null,8,["show","confirmationRoute","confirmationData"])])]),_:1})],64))}});export{ot as default};
