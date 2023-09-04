import{a as F,r as ne,_ as ae}from"./XIcon-73e31157.js";import{o as i,p as H,b as o,B as A,q as b,Z as q,x as z,s as U,$ as X,_ as le,R as Q,r as c,c as r,d as e,w as u,k as w,F as k,h as j,t as g,f as ie,i as re,T as ce,j as S,n as B,u as L,L as O,E as de,G as ue,z as G}from"./app-2b133d7b.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import{u as R,o as C,i as pe,l as I,H as P,t as K,p as he,N as V,b as D,U as W,Y as J,V as Y,h as Z,S as ee}from"./transition-d432c89e.js";import{b as _e}from"./use-resolve-button-type-80245c7f.js";import{M as me,R as fe,h as ge}from"./menu-2d1539d5.js";function xe(t,s){return i(),H("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[o("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"})])}function ve(t,s){return i(),H("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[o("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z","clip-rule":"evenodd"})])}function ye(t,s){return i(),H("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[o("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})])}function we(t,s){return i(),H("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[o("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z","clip-rule":"evenodd"})])}var be=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(be||{});let te=Symbol("DisclosureContext");function N(t){let s=Q(te,null);if(s===null){let d=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(d,N),d}return s}let se=Symbol("DisclosurePanelContext");function $e(){return Q(se,null)}let Ce=A({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(t,{slots:s,attrs:d}){let a=b(t.defaultOpen?0:1),n=b(null),x=b(null),_={buttonId:b(null),panelId:b(null),disclosureState:a,panel:n,button:x,toggleDisclosure(){a.value=R(a.value,{0:1,1:0})},closeDisclosure(){a.value!==1&&(a.value=1)},close(p){_.closeDisclosure();let m=(()=>p?p instanceof HTMLElement?p:p.value instanceof HTMLElement?C(p):C(_.button):C(_.button))();m==null||m.focus()}};return q(te,_),pe(z(()=>R(a.value,{0:I.Open,1:I.Closed}))),()=>{let{defaultOpen:p,...m}=t,v={open:a.value===0,close:_.close};return P({theirProps:m,ourProps:{},slot:v,slots:s,attrs:d,name:"Disclosure"})}}}),ke=A({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-disclosure-button-${K()}`}},setup(t,{attrs:s,slots:d,expose:a}){let n=N("DisclosureButton");U(()=>{n.buttonId.value=t.id}),X(()=>{n.buttonId.value=null});let x=$e(),_=z(()=>x===null?!1:x.value===n.panelId.value),p=b(null);a({el:p,$el:p}),_.value||le(()=>{n.button.value=p.value});let m=_e(z(()=>({as:t.as,type:s.type})),p);function v(){var h;t.disabled||(_.value?(n.toggleDisclosure(),(h=C(n.button))==null||h.focus()):n.toggleDisclosure())}function y(h){var l;if(!t.disabled)if(_.value)switch(h.key){case D.Space:case D.Enter:h.preventDefault(),h.stopPropagation(),n.toggleDisclosure(),(l=C(n.button))==null||l.focus();break}else switch(h.key){case D.Space:case D.Enter:h.preventDefault(),h.stopPropagation(),n.toggleDisclosure();break}}function $(h){switch(h.key){case D.Space:h.preventDefault();break}}return()=>{let h={open:n.disclosureState.value===0},{id:l,...E}=t,f=_.value?{ref:p,type:m.value,onClick:v,onKeydown:y}:{id:l,ref:p,type:m.value,"aria-expanded":t.disabled?void 0:n.disclosureState.value===0,"aria-controls":C(n.panel)?n.panelId.value:void 0,disabled:t.disabled?!0:void 0,onClick:v,onKeydown:y,onKeyup:$};return P({ourProps:f,theirProps:E,slot:h,attrs:s,slots:d,name:"DisclosureButton"})}}}),De=A({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-disclosure-panel-${K()}`}},setup(t,{attrs:s,slots:d,expose:a}){let n=N("DisclosurePanel");U(()=>{n.panelId.value=t.id}),X(()=>{n.panelId.value=null}),a({el:n.panel,$el:n.panel}),q(se,n.panelId);let x=he(),_=z(()=>x!==null?(x.value&I.Open)===I.Open:n.disclosureState.value===0);return()=>{let p={open:n.disclosureState.value===0,close:n.close},{id:m,...v}=t,y={id:m,ref:n.panel};return P({ourProps:y,theirProps:v,slot:p,attrs:s,slots:d,features:V.RenderStrategy|V.Static,visible:_.value,name:"DisclosurePanel"})}}});const Se=[{id:1,new:!0,title:"Start the school year strong with Plus!",href:"https://www.google.com",date:"A week ago",imageSrc:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{id:2,new:!0,title:"Start the school year strong with Plus. Learn the fun and simple way!",href:"#",date:"A week ago",imageSrc:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}],Me={name:"Notification",components:{Dialog:W,DialogOverlay:J,DialogTitle:Y,TransitionChild:Z,TransitionRoot:ee,XIcon:F,BellIcon:xe},setup(){const t=b(!1);return{notifications:Se,open:t}}},Be={class:"relative"},ze=e("div",{class:"absolute w-3 h-3 bg-red-500 rounded-full top-1 right-4 animate-ping"},null,-1),je=e("div",{class:"absolute w-3 h-3 bg-red-700 rounded-full top-1 right-4"},null,-1),Ie={class:"absolute inset-0 overflow-hidden"},He={class:"fixed inset-y-0 right-0 flex max-w-full"},Te={class:"w-screen max-w-md"},Le={class:"flex flex-col h-full overflow-y-scroll bg-white shadow-md"},Oe={class:"flex-1 py-5 overflow-y-auto"},Ae={class:"flex items-start justify-between px-5"},Pe={class:"flex items-center"},Ne={class:"mt-10 md:mt-8"},Ee={class:"flow-root"},Re={role:"list",class:"-my-6 divide-y divide-gray-200"},Ve=["href"],Fe={class:"w-12 h-12 overflow-hidden rounded-full"},qe=["src"],Ue={class:"flex flex-col flex-1 ml-4"},Xe={class:"flex justify-between font-medium text-left text-gray-700"},Qe={class:"flex-shrink-0 w-3 h-3 my-auto ml-2 bg-red-700 rounded-full"},Ge={class:"mt-2 text-sm font-medium text-left text-gray-400"};function Ke(t,s,d,a,n,x){const _=c("BellIcon"),p=c("DialogOverlay"),m=c("TransitionChild"),v=c("DialogTitle"),y=c("XIcon"),$=c("Dialog"),h=c("TransitionRoot");return i(),r(k,null,[e("div",Be,[e("button",{onClick:s[0]||(s[0]=l=>a.open=!0),class:"mt-1.5 mr-5"},[o(_,{class:"w-7 h-7 md:w-6 md:h-6","aria-hidden":"true"}),ze,je])]),o(h,{as:"template",show:a.open,class:"z-50"},{default:u(()=>[o($,{as:"div",class:"fixed inset-0 overflow-hidden",onClose:s[2]||(s[2]=l=>a.open=!1)},{default:u(()=>[e("div",Ie,[o(m,{as:"template",enter:"ease-in-out duration-500","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-500","leave-from":"opacity-100","leave-to":"opacity-0"},{default:u(()=>[o(p,{class:"absolute inset-0 transition-opacity bg-black bg-opacity-50"})]),_:1}),e("div",He,[o(m,{as:"template",enter:"transform transition ease-in-out duration-500 sm:duration-700","enter-from":"translate-x-full","enter-to":"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700","leave-from":"translate-x-0","leave-to":"translate-x-full"},{default:u(()=>[e("div",Te,[e("div",Le,[e("div",Oe,[e("div",Ae,[o(v,{class:"text-lg font-bold text-gray-700"},{default:u(()=>[w("Notifications")]),_:1}),e("div",Pe,[e("button",{type:"button",class:"mt-1 text-gray-400 hover:text-gray-500",onClick:s[1]||(s[1]=l=>a.open=!1)},[o(y,{class:"w-5 h-5","aria-hidden":"true"})])])]),e("div",Ne,[e("div",Ee,[e("ul",Re,[(i(!0),r(k,null,j(a.notifications,l=>(i(),r("li",{key:l.id},[e("a",{href:l.href,class:"flex items-center h-auto p-5 cursor-pointer hover:bg-indigo-50"},[e("div",Fe,[e("img",{src:l.imageSrc},null,8,qe)]),e("div",Ue,[e("div",Xe,[e("h3",null,g(l.title),1),ie(e("p",Qe,null,512),[[re,l.new]])]),e("p",Ge,g(l.date),1)])],8,Ve)]))),128))])])])])])])]),_:1})])])]),_:1})]),_:1},8,["show"])],64)}const We=M(Me,[["render",Ke]]),Je=[{id:1,name:"Throwback Hip Bag",href:"#",color:"Salmon",price:"$90.00",quantity:1,imageSrc:"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",imageAlt:"Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."},{id:2,name:"Medium Stuff Satchel",href:"#",color:"Blue",price:"$32.00",quantity:1,imageSrc:"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",imageAlt:"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."}],Ye={Name:"Cart",components:{Dialog:W,DialogOverlay:J,DialogTitle:Y,TransitionChild:Z,TransitionRoot:ee,XIcon:F,ShoppingCartIcon:ye},setup(){const t=b(!1);return{products:Je,open:t}}},Ze={class:"relative"},et={class:"absolute inset-0 overflow-hidden"},tt={class:"fixed inset-y-0 right-0 flex max-w-full pl-10"},st={class:"w-screen max-w-md"},ot={class:"flex flex-col h-full overflow-y-scroll bg-white shadow-xl"},nt={class:"flex-1 px-4 py-6 overflow-y-auto sm:px-6"},at={class:"flex items-start justify-between"},lt={class:"flex items-center ml-3 h-7"},it=e("span",{class:"sr-only"},"Close panel",-1),rt={class:"mt-8"},ct={class:"flow-root"},dt={role:"list",class:"-my-6 divide-y divide-gray-200"},ut={class:"flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md"},pt=["src","alt"],ht={class:"flex flex-col flex-1 ml-4"},_t={class:"flex justify-between text-base font-medium text-gray-900"},mt=["href"],ft={class:"ml-4"},gt={class:"mt-1 text-sm text-gray-500"},xt={class:"flex items-end justify-between flex-1 text-sm"},vt={class:"text-gray-500"},yt=e("div",{class:"flex"},[e("button",{type:"button",class:"font-medium text-indigo-600 hover:text-indigo-500"},"Remove")],-1),wt={class:"px-4 py-6 border-t border-gray-200 sm:px-6"},bt=e("div",{class:"flex justify-between text-base font-medium text-gray-900"},[e("p",null,"Subtotal"),e("p",null,"$262.00")],-1),$t=e("p",{class:"mt-0.5 text-sm text-gray-500"},"Shipping and taxes calculated at checkout.",-1),Ct=e("div",{class:"mt-6"},[e("a",{href:"#",class:"flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"},"Checkout")],-1),kt={class:"flex justify-center mt-6 text-sm text-center text-gray-500"},Dt=e("span",{"aria-hidden":"true"}," →",-1);function St(t,s,d,a,n,x){const _=c("ShoppingCartIcon"),p=c("DialogOverlay"),m=c("TransitionChild"),v=c("DialogTitle"),y=c("XIcon"),$=c("Dialog"),h=c("TransitionRoot");return i(),r(k,null,[e("div",Ze,[e("button",{onClick:s[0]||(s[0]=l=>a.open=!0),class:"mt-1.5 mr-5"},[o(_,{class:"w-7 h-7 md:w-6 md:h-6","aria-hidden":"true"})])]),o(h,{as:"template",show:a.open,class:"z-50"},{default:u(()=>[o($,{as:"div",class:"fixed inset-0 overflow-hidden",onClose:s[3]||(s[3]=l=>a.open=!1)},{default:u(()=>[e("div",et,[o(m,{as:"template",enter:"ease-in-out duration-500","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-500","leave-from":"opacity-100","leave-to":"opacity-0"},{default:u(()=>[o(p,{class:"absolute inset-0 transition-opacity bg-black bg-opacity-50"})]),_:1}),e("div",tt,[o(m,{as:"template",enter:"transform transition ease-in-out duration-500 sm:duration-700","enter-from":"translate-x-full","enter-to":"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700","leave-from":"translate-x-0","leave-to":"translate-x-full"},{default:u(()=>[e("div",st,[e("div",ot,[e("div",nt,[e("div",at,[o(v,{class:"text-lg font-medium text-gray-900"},{default:u(()=>[w(" Shopping cart ")]),_:1}),e("div",lt,[e("button",{type:"button",class:"p-2 -m-2 text-gray-400 hover:text-gray-500",onClick:s[1]||(s[1]=l=>a.open=!1)},[it,o(y,{class:"w-6 h-6","aria-hidden":"true"})])])]),e("div",rt,[e("div",ct,[e("ul",dt,[(i(!0),r(k,null,j(a.products,l=>(i(),r("li",{key:l.id,class:"flex py-6"},[e("div",ut,[e("img",{src:l.imageSrc,alt:l.imageAlt,class:"object-cover object-center w-full h-full"},null,8,pt)]),e("div",ht,[e("div",null,[e("div",_t,[e("h3",null,[e("a",{href:l.href},g(l.name),9,mt)]),e("p",ft,g(l.price),1)]),e("p",gt,g(l.color),1)]),e("div",xt,[e("p",vt,"Qty "+g(l.quantity),1),yt])])]))),128))])])])]),e("div",wt,[bt,$t,Ct,e("div",kt,[e("p",null,[w(" or "),e("button",{type:"button",class:"font-medium text-indigo-600 hover:text-indigo-500",onClick:s[2]||(s[2]=l=>a.open=!1)},[w("Continue Shopping"),Dt])])])])])])]),_:1})])])]),_:1})]),_:1},8,["show"])],64)}const Mt=M(Ye,[["render",St]]),Bt={name:"Mohd Shazwan Abu Hanipah",imageUrl:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},zt={name:"Header",components:{Notification:We,Cart:Mt,Disclosure:Ce,DisclosureButton:ke,DisclosurePanel:De,Menu:me,MenuButton:fe,MenuItems:ge,UserCircleIcon:we,CogIcon:ne,QuestionMarkCircleIcon:ve,BreezeNavLink:ae},setup(){return{user:Bt}},data(){return{switching:!1}},methods:{switchChild(t,s,d){this.switching||t==this.$page.props.current_active_child.child_id||(this.switching=!0,axios.post(route("parent.switch_child",{child_id:t,child_name:s,student_id:d})).then(a=>{a.data&&location.reload()}))}}},jt={class:"inset-x-0 z-50 text-gray-700 bg-white md:top-0 md:sticky"},It={class:"max-w-4xl px-5 mx-auto"},Ht={class:"flex items-center justify-between h-20 md:h-16"},Tt={class:"flex items-center"},Lt=["href"],Ot=e("img",{class:"h-12 w-12",src:"/images/anf-logo-main-2x.png",alt:""},null,-1),At=[Ot],Pt={class:"flex"},Nt={class:"flex items-center"},Et={class:"hidden md:flex"},Rt={class:"truncate max-w-xs text-lg font-semibold"},Vt=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 text-white",fill:"currentColor",viewBox:"0 0 448 512"},[e("path",{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"})],-1),Ft={class:"flex md:hidden"},qt={class:"truncate max-w-[200px] text-lg font-semibold"},Ut=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-7 w-7 text-white",fill:"currentColor",viewBox:"0 0 448 512"},[e("path",{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"})],-1),Xt={class:"px-5 pt-2 pb-3 border-b"},Qt={class:"font-medium text-gray-700"},Gt={class:"font-bold"},Kt={class:"flex items-center px-5 my-1 py-2 font-medium text-gray-700 hover:bg-indigo-50 cursor-pointer"},Wt=e("hr",null,null,-1),Jt=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-gray-700",fill:"currentcolor",viewBox:"0 0 512 512"},[e("path",{d:"M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"})],-1),Yt=e("span",null,"Log Out",-1),Zt={class:"w-full p-4 rounded-lg text-gray-800"},es=e("div",{class:"px-3 pt-2 mt-2 text-sm font-bold text-left"},"Child List",-1),ts=e("hr",{class:"my-3"},null,-1),ss=["onClick"],os={class:"text-gray-500 hover:text-gray-800 text-left text-sm"},ns={key:0,class:"bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"},as={key:1,class:"bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"},ls={key:1,class:"flex justify-between items-center w-full px-3"},is=e("span",{class:"text-gray-500 font-semibold text-sm"},"No children added. ",-1),rs=e("span",{class:"text-sm text-indigo-600 cursor-pointer font-medium hover:underline"},"Add child",-1),cs=[is,rs],ds={class:"bg-white shadow-md z-50"},us={class:"flex items-center p-5 mb-2 border-b"},ps={class:"font-medium text-gray-700"},hs={class:"font-bold"},_s={class:"cursor-pointer flex items-center px-5 py-3 font-medium text-gray-700 hover:bg-indigo-50"},ms=e("div",{class:"py-2 mt-2 border-t"},[e("button",{class:"flex items-center space-x-3 ml-1 w-full px-5 py-3 font-medium text-left text-gray-700 hover:bg-indigo-50"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-gray-700",fill:"currentcolor",viewBox:"0 0 512 512"},[e("path",{d:"M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"})]),e("span",null,"Log Out")])],-1),fs={class:"flex justify-center md:hidden"},gs={class:"w-full p-4 rounded-lg text-gray-800"},xs=e("div",{class:"px-3 pt-2 mt-2 text-sm font-bold text-left"},"Child List",-1),vs=e("hr",{class:"my-3"},null,-1),ys=["onClick"],ws={class:"text-gray-500 hover:text-gray-800 text-left"},bs={key:0,class:"bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"},$s={key:1,class:"bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"},Cs={key:1,class:"flex justify-between items-center w-full px-3"},ks=e("span",{class:"text-gray-500 font-semibold text-sm"},"No children added. ",-1),Ds=e("span",{class:"text-sm text-indigo-600 cursor-pointer font-medium hover:underline"},"Add child",-1),Ss=[ks,Ds];function Ms(t,s,d,a,n,x){const _=c("MenuButton"),p=c("DisclosureButton"),m=c("UserCircleIcon"),v=c("BreezeNavLink"),y=c("MenuItems"),$=c("Menu"),h=c("DisclosurePanel"),l=c("Disclosure");return i(),r("div",jt,[o(l,{as:"nav",class:"text-white bg-indigo-600"},{default:u(({open:E})=>[e("div",It,[e("div",Ht,[e("div",Tt,[e("a",{class:"flex items-center space-x-4 font-bold select-none",href:t.route("parent.home")},At,8,Lt)]),e("div",Pt,[e("div",Nt,[o($,{as:"div",class:"relative"},{default:u(()=>[e("div",Et,[o(_,{class:"flex rounded-full pl-5 py-5 space-x-4 items-center"},{default:u(()=>[e("span",Rt,g(t.$page.props.current_active_child.child_name),1),Vt]),_:1})]),e("div",Ft,[o(p,{class:"flex space-x-2 items-center"},{default:u(()=>[e("span",qt,g(t.$page.props.current_active_child.child_name),1),Ut]),_:1})]),o(ce,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:u(()=>[o(y,{class:"absolute w-96 py-3 mt-2 origin-top-right bg-white shadow-md -right-1 rounded-xl focus:outline-none"},{default:u(()=>[e("div",Xt,[e("div",Qt,[w(" Hi, "),e("span",Gt,g(t.$page.props.auth.user.display_name),1)])]),e("div",Kt,[o(m,{class:"w-6 h-6 mr-3"}),w("Profile ")]),Wt,o(v,{href:t.route("logout"),method:"post",as:"button",class:"flex items-center space-x-3 w-full ml-1 px-5 py-2 mt-3 font-medium text-left text-gray-700 hover:text-gray-700 hover:bg-indigo-50"},{default:u(()=>[Jt,Yt]),_:1},8,["href"]),e("div",Zt,[es,ts,t.$page.props.user_has_children.length?(i(!0),r(k,{key:0},j(t.$page.props.user_has_children,f=>(i(),r("button",{href:"#",class:"flex items-center space-x-4 text-sm font-semibold md:text-base py-2 px-3",onClick:oe=>x.switchChild(f.child_id,f.child_name,f.student_id)},[e("span",os,g(f.child_name),1),!n.switching&&f.child_id==t.$page.props.current_active_child.child_id?(i(),r("span",ns,"Current")):S("",!0),n.switching&&f.child_id==t.$page.props.current_active_child.child_id?(i(),r("span",as,"Switching")):S("",!0)],8,ss))),256)):(i(),r("div",ls,cs))])]),_:1})]),_:1})]),_:1})])])])]),o(h,{class:"md:hidden lg:hidden"},{default:u(()=>[e("div",ds,[e("div",us,[e("div",ps,[w(" Hi, "),e("span",hs,g(t.$page.props.auth.user.display_name),1)])]),e("div",_s,[o(m,{class:"w-6 h-6 mr-3"}),w("Profile ")]),ms,e("div",fs,[e("div",gs,[xs,vs,t.$page.props.user_has_children.length?(i(!0),r(k,{key:0},j(t.$page.props.user_has_children,f=>(i(),r("button",{href:"#",class:"flex items-center space-x-4 text-sm font-semibold md:text-base py-2 px-3",onClick:oe=>x.switchChild(f.child_id,f.student_id)},[e("span",ws,g(f.child_name),1),!n.switching&&f.child_id==t.$page.props.current_active_child.child_id?(i(),r("span",bs,"Current")):S("",!0),n.switching&&f.child_id==t.$page.props.current_active_child.child_id?(i(),r("span",$s,"Switching")):S("",!0)],8,ys))),256)):(i(),r("div",Cs,Ss))])])])]),_:1})]),_:1})])}const Bs=M(zt,[["render",Ms]]),zs={name:"Footer"},js={class:"hidden md:block text-white bg-gray-600"},Is=e("div",{class:"max-w-4xl p-5 mx-auto text-sm tracking-wider text-center"},"Copyright © 2023 ALFA and Friends",-1),Hs=[Is];function Ts(t,s,d,a,n,x){return i(),r("footer",js,Hs)}const Ls=M(zs,[["render",Ts]]);const T=t=>(de("data-v-201dc528"),t=t(),ue(),t),Os={class:"fixed inset-x-0 bottom-0 z-10 text-gray-700 bg-white md:border-gray-200 md:border-b-2 md:top-16 md:sticky"},As={class:"flex items-center justify-center max-w-4xl px-3 mx-auto"},Ps={class:"flex space-x-0 md:space-x-4"},Ns=T(()=>e("span",{class:"text-sm font-semibold md:text-base"},"Home",-1)),Es=T(()=>e("span",{class:"text-sm font-semibold md:text-base"},"Fee Invoices",-1)),Rs=T(()=>e("span",{class:"text-sm font-semibold md:text-base"},"Art Gallery",-1)),Vs=T(()=>e("div",{class:"relative group flex px-3 py-3 text-gray-500 hover:text-gray-900 cursor-pointer"},[e("button",{class:"text-sm font-semibold md:text-base text-gray-500 hover:text-gray-900",id:"moreButton"},[w(" More "),e("svg",{class:"w-4 h-4 inline-block ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})])]),e("div",{class:"z-30 hidden flex-col absolute border border-gray-200 py-2 px-4 bg-white h-fit w-64 text-slate-600 bottom-10 md:-bottom-0 right-2 md:top-10 md:left-0 rounded-lg shadow-xl group-hover:block"},[e("a",{href:"#",class:"text-sm font-semibold md:text-base block py-2 px-3 text-gray-500 hover:text-gray-900"},"Coming Soon")])],-1)),Fs={},qs=Object.assign(Fs,{__name:"Navigation",setup(t){return(s,d)=>(i(),r("nav",Os,[e("div",As,[e("div",Ps,[o(L(O),{href:s.route("parent.home"),class:B([s.route().current("parent.home")?"text-gray-900":"","flex px-3 py-3 text-gray-500 hover:text-gray-900 cursor-pointer"])},{default:u(()=>[Ns]),_:1},8,["href","class"]),o(L(O),{href:s.route("parent.invoices"),class:B([s.route().current("parent.invoices")?"text-gray-900":"","flex px-3 py-3 text-gray-500 hover:text-gray-900 cursor-pointer"])},{default:u(()=>[Es]),_:1},8,["href","class"]),o(L(O),{href:s.route("parent.art_gallery"),class:B([s.route().current("parent.art_gallery")?"text-gray-900":"","flex px-3 py-3 text-gray-500 hover:text-gray-900 cursor-pointer"])},{default:u(()=>[Rs]),_:1},8,["href","class"]),Vs])])]))}}),Us=M(qs,[["__scopeId","data-v-201dc528"]]);const Xs={key:0,class:"modal-wrapper"},Qs={data(){return{modal_open:!1}},watch:{open:{deep:!0,handler(){this.open?document.body.style.overflow="hidden":document.body.style.overflow=""}}},created(){document.body.style.overflow="hidden"},unmounted(){document.body.style.overflow=""}},Gs=Object.assign(Qs,{__name:"SimpleModal",props:{disable_overlay:{type:Boolean},open:{type:Boolean},class:{default:"",type:String}},emits:["close:modal"],setup(t,{emit:s}){return(d,a)=>t.open?(i(),r("div",Xs,[e("div",{class:"modal-overlay",onClick:a[0]||(a[0]=n=>t.disable_overlay?"":s("close:modal"))}),e("div",{class:B(["modal-content",t.class])},[G(d.$slots,"default")],2)])):S("",!0)}}),Ks={class:"flex"},Ws={class:"min-h-screen bg-gray-100 w-full"},Js={class:"flex flex-col bg-indigo-50 relative h-full justify-between"},Ys={class:"bg-orange-50 min-h-screen"},Zs={class:"flex justify-center"},eo={class:"flex-1 max-w-4xl overflow-auto p-3"},to={class:"text-center flex flex-col items-center justify-start space-y-2 p-6"},so={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-2/12 w-2/12 text-green-500",viewBox:"0 0 512 512",fill:"currentColor"},oo=e("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"},null,-1),no=[oo],ao={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-2/12 w-2/12 text-red-500",viewBox:"0 0 512 512",fill:"currentColor"},lo=e("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"},null,-1),io=[lo],ro={class:"md:text-2xl text-base text-gray-900 font-semibold text-center"},co={class:"text-gray-600 my-2"},uo={class:"py-2 text-center"},po={data(){return{show_modal:!!this.$page.props.flash.type}}},vo=Object.assign(po,{__name:"Authenticated",setup(t){return(s,d)=>{const a=c("VueGuidedTour");return i(),r("div",Ks,[e("div",Ws,[o(a,{steps:s.steps,onAfterEnd:s.completedTour},null,8,["steps","onAfterEnd"]),e("main",Js,[o(Bs),o(Us),e("div",Ys,[e("div",Zs,[e("div",eo,[G(s.$slots,"default")])])]),o(Ls),o(Gs,{open:s.show_modal,"onClose:modal":d[1]||(d[1]=n=>s.show_modal=!1),class:"md:w-2/6"},{default:u(()=>[e("div",to,[s.$page.props.flash.type=="success"?(i(),r("svg",so,no)):(i(),r("svg",ao,io)),e("h3",ro,g(s.$page.props.flash.header),1),e("p",co,g(s.$page.props.flash.message),1),e("div",uo,[e("button",{onClick:d[0]||(d[0]=n=>s.show_modal=!1),class:"rounded px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-1.5"},"Close")])])]),_:1},8,["open"])])])])}}});export{vo as _,Gs as a};
