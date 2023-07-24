import{c as p,b as n,u as i,w as a,F as f,H as m,L as k,o as c,d as e,f as g,l as x,j as S,h as L,t as s,n as C,k as d,y as T}from"./app-82397477.js";import{B as D}from"./Authenticated-39a8c086.js";import{B as u}from"./Button-2c9457b3.js";import{r as O}from"./PencilIcon-f5e6b650.js";import{r as h}from"./SearchIcon-50253c55.js";import{r as P}from"./TrashIcon-80f01b03.js";import{C as $}from"./ConfirmationModal-a14fe0bf.js";import{P as y}from"./Pagination-99dd55d2.js";import{h as V}from"./default.css_vue_type_style_index_0_src_true_lang-c6956a47.js";import{s as b}from"./multiselect-9864d953.js";import{M as w}from"./Modal-f469ccf6.js";/* empty css            */import"./ApplicationLogo-1a2b81d2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-4a37969e.js";import"./VueFinalModal.esm-52ef7043.js";const j={class:"py-4 px-4"},z={class:"overflow-x-auto"},N={class:"mx-auto"},B={class:"align-middle inline-block min-w-full px-2"},I={class:"flex justify-between mb-4"},M={class:"flex space-x-2"},A={class:"flex relative text-gray-400 focus-within:text-gray-600"},H={class:"flex"},U={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},F={class:"min-w-full divide-y divide-gray-200"},R=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/14"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Age"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Centre"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Admitted"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Notes"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),E={class:"bg-white divide-y divide-gray-200"},Y={key:0},q=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),G=[q],J={class:"px-6 py-4 whitespace-nowrap"},K={class:"text-sm font-medium text-gray-700"},Q={class:"px-6 py-4 whitespace-nowrap"},W={class:"text-sm font-medium text-gray-900"},X={class:"px-6 py-4 whitespace-nowrap"},Z={class:"text-sm font-medium text-gray-900"},ee={class:"px-6 py-4 whitespace-nowrap"},te={class:"text-sm font-medium text-gray-900"},oe={class:"px-6 py-4 whitespace-nowrap"},re={class:"px-6 py-4 whitespace-nowrap"},ne={class:"text-sm font-medium text-gray-900"},ae={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},se={class:"flex justify-center space-x-2"},le=e("h3",{class:"text-gray-900 text-xl font-semibold"}," Latest Status ",-1),ie={class:"p-4 space-y-4"},de={class:"rounded bg-indigo-100 hover:bg-indigo-200 drop-shadow-sm hover:drop-shadow-md p-2 w-full inline-block text-gray-800 select-none"},pe={class:"flex justify-end space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},ce={components:{SearchIcon:h,TrashIcon:P,PencilIcon:O,ConfirmationModal:$,Head:m,Link:k,Multiselect:b,Modal:w,Pagination:y},props:{filter:Object},data(){return{open_modal:!1,params:{search:this.filter.search?this.filter.search:"",centre_id:this.filter.centre_id?this.filter.centre_id:""},form:{result_id:"",admitted:!1,centre_id:!1,notes:""}}},watch:{params:{handler(){this.params&&this.$inertia.get(this.route("diagnostic_test.saved_result"),this.params,{replace:!0,preserveState:!0})},deep:!0}},methods:{viewDetails(l){this.$inertia.get(this.route("diagnostic_test.saved_result.details"),{result_id:l})},updateStatus(l,o,r,t){this.form.result_id=l,this.form.admitted=o==!0,this.form.centre_id=r||"",this.form.notes=t,this.open_modal=!0},saveStatus(){this.$inertia.post(this.route("diagnostic_test.saved_result.save_status"),this.form,{onSuccess:l=>{this.open_modal=!1}})}}},De=Object.assign(ce,{__name:"Index",setup(l){return(o,r)=>(c(),p(f,null,[n(i(m),{title:"Diagnostic Test"}),n(D,null,{header:a(()=>[]),default:a(()=>[e("div",j,[e("div",z,[e("div",N,[e("div",B,[e("div",I,[e("div",M,[e("div",A,[n(i(h),{class:"text-gray-600 h-4 w-4 fill-current pointer-events-none absolute top-1/4 left-3",style:"top:30%"}),g(e("input",{class:"border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg focus:ring-0 focus:border-gray-300 appearance-none block pl-10",type:"text","onUpdate:modelValue":r[0]||(r[0]=t=>o.params.search=t),placeholder:"Search"},null,512),[[x,o.params.search]])]),e("div",H,[n(i(b),{modelValue:o.params.centre_id,"onUpdate:modelValue":r[1]||(r[1]=t=>o.params.centre_id=t),valueProp:"ID",appendNewOption:!1,searchable:!0,options:o.$page.props.allowed_centres,clearOnSelect:!1,canClear:!1,canDeselect:!0,trackBy:"label",label:"label",placeholder:"Centre",classes:{container:"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border-gray-300 rounded-lg bg-white text-base leading-snug outline-none h-10 px-40 pr-16 ",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none border-2 border-gray-300 focus:border-white text-base font-sans bg-white rounded-lg pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",caret:"bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none",caretOpen:"rotate-180 pointer-events-auto",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options"])])])]),e("div",U,[e("table",F,[R,e("tbody",E,[o.$page.props.saved_results.data.length?S("",!0):(c(),p("tr",Y,G)),(c(!0),p(f,null,L(o.$page.props.saved_results.data,(t,v)=>(c(),p("tr",{class:"hover:bg-gray-200",key:t.id},[e("td",J,[e("div",K,s(++v),1)]),e("td",Q,[e("div",W,s(t.child_id?t.student_name:t.child_name),1)]),e("td",X,[e("div",Z,s(t.child_id?i(V)().diff(t.student_dob,"years"):t.child_age),1)]),e("td",ee,[e("div",te,s(t.centre_name),1)]),e("td",oe,[e("span",{class:C(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",t.admitted?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},s(t.admitted?"Yes":"No"),3)]),e("td",re,[e("div",ne,s(t.notes),1)]),e("td",ae,[e("div",se,[n(u,{buttonType:"info",class:"py-1 px-2",onClick:_=>o.updateStatus(t.id,t.admitted,t.centre_id,t.notes)},{default:a(()=>[d("Status")]),_:2},1032,["onClick"]),n(u,{buttonType:"blue",onClick:_=>o.viewDetails(t.id)},{default:a(()=>[d("View Details")]),_:2},1032,["onClick"])])])]))),128))])]),n(y,{page_data:o.$page.props.saved_results},null,8,["page_data"]),n(w,{showModal:o.open_modal,modalType:"sm",onHideModal:r[6]||(r[6]=t=>o.open_modal=!1)},{header:a(()=>[le]),content:a(()=>[e("div",ie,[e("div",null,[e("label",de,[g(e("input",{class:"form-check-input h-5 w-5 border border-gray-300 rounded-sm bg-white hover:bg-white focus:ring-transparent text-indigo-500 transition duration-200 mt-0.5 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",type:"checkbox","onUpdate:modelValue":r[2]||(r[2]=t=>o.form.admitted=t)},null,512),[[T,o.form.admitted]]),d(" Admitted")])]),n(i(b),{modelValue:o.form.centre_id,"onUpdate:modelValue":r[3]||(r[3]=t=>o.form.centre_id=t),valueProp:"ID",appendNewOption:!1,searchable:!0,options:o.$page.props.allowed_centres,clearOnSelect:!1,canClear:!1,canDeselect:!1,trackBy:"label",label:"label",placeholder:"Centre",classes:{container:o.$page.props.errors.centre_id?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white text-base leading-snug outline-none h-10 px-40 pr-16 ":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white text-base leading-snug outline-none h-10 px-40 pr-16 ",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",caret:"bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none",caretOpen:"rotate-180 pointer-events-auto",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options","classes"]),g(e("textarea",{class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300",rows:"3",placeholder:"Notes...","onUpdate:modelValue":r[4]||(r[4]=t=>o.form.notes=t)},null,512),[[x,o.form.notes]])])]),footer:a(()=>[e("div",pe,[n(u,{buttonType:"info",onClick:o.saveStatus},{default:a(()=>[d("Save")]),_:1},8,["onClick"]),n(u,{buttonType:"gray",onClick:r[5]||(r[5]=t=>o.open_modal=!1)},{default:a(()=>[d("Cancel")]),_:1})])]),_:1},8,["showModal"])])])])])])]),_:1})],64))}});export{De as default};
