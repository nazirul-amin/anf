import{c as d,b as a,u as l,w as n,F as m,H as x,L as k,ac as P,aj as $,o as i,d as e,f as D,l as C,n as L,C as O,j as b,h as T,t as p,k as c,p as S,a3 as R}from"./app-698f1bce.js";import{B as V}from"./Authenticated-e085fb96.js";import{B as g}from"./Button-9c885bf2.js";import{r as M}from"./PencilIcon-fcfbf704.js";import{r as h}from"./SearchIcon-0a674774.js";import{r as j}from"./TrashIcon-ee92f72a.js";import{C as y}from"./ConfirmationModal-f0b85eb3.js";import{P as z}from"./Pagination-4aa7cb27.js";import"./default.css_vue_type_style_index_0_src_true_lang-57be4c75.js";import{s as f}from"./multiselect-6e6a95ce.js";import{Z as w}from"./main-a9ba26ac.js";import{M as _}from"./Modal-e0aee869.js";import B from"./Math-c9f44ae4.js";import"./ApplicationLogo-1ffedc06.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-718b998e.js";import"./transition-b20a6372.js";import"./VueFinalModal.esm-a92f0e1a.js";const I=(s,t)=>{const o=s[t];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((r,u)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(u.bind(null,new Error("Unknown variable dynamic import: "+t)))})};const A={class:"py-4 px-4"},N={class:"mx-auto"},H={class:"align-middle min-w-full px-2"},U={class:"flex justify-between gap-4 flex-col md:flex-row mb-4"},E={class:"flex flex-wrap gap-4 flex-col md:flex-row"},F={class:"flex"},q={class:"flex w-full relative text-gray-400"},Z={class:"flex"},G={class:"flex"},Y={class:"flex"},J={class:"overflow-x-auto"},K={class:"table-auto min-w-full divide-y divide-gray-200"},Q=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/12"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Total Present"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Total Absent"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Action")])],-1),W={class:"bg-white divide-y divide-gray-200"},X={key:0},ee=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),te=[ee],oe={class:"px-6 py-4 whitespace-nowrap"},re={class:"text-sm font-medium text-gray-700"},ae={class:"px-6 py-4 whitespace-nowrap"},ne={class:"text-sm font-medium text-gray-900"},se={class:"px-6 py-4 whitespace-nowrap"},le={class:"text-sm font-medium text-gray-900"},ie={class:"px-6 py-4 whitespace-nowrap"},pe={class:"text-sm font-medium text-gray-900"},de={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},ce={class:"flex justify-center space-x-2"},ge={class:"p-6 overflow-y-auto no-scrollbar"},ue={class:"grid grid-rows-1"},fe={class:"flex justify-between space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},me={name:"_blank",specs:["fullscreen=yes","titlebar=yes","scrollbars=yes"],styles:["http://127.0.0.1:8000/css/app.css"],timeout:1e3,autoClose:!0,windowTitle:window.document.title},be={components:{SearchIcon:h,TrashIcon:j,PencilIcon:M,Head:x,Link:k,ConfirmationModal:y,Multiselect:f,Datepicker:w,Modal:_,MathReport:B},data(){return{component:{file:null,data:""},generate:{id:"",running:!1},printing:!1,show_progress_report:!1,isOpen:!1,confirmationData:"",confirmationRoute:"",open_modal:!1,params:{search:this.$page.props.filter.search?this.$page.props.filter.search:"",centre_id:this.$page.props.filter.centre_id?this.$page.props.filter.centre_id:"",programme_id:this.$page.props.filter.programme_id?this.$page.props.filter.programme_id:"",date:this.$page.props.filter.date?this.$page.props.filter.date:"",day:""}}},watch:{params:{handler(){this.params&&this.$inertia.get(this.route("progress_report"),this.params,{replace:!0,preserveState:!0})},deep:!0}},methods:{viewProgressReport(s){this.$inertia.get(this.route("progress_report.details"),{progress_report_id:s},{})},showProgressReport(s){this.generate.running||(this.generate.id=s,this.generate.running=!0,P.get(route("progress_report.full_reports",s)).then(t=>{I(Object.assign({"./Reports/Math.vue":()=>$(()=>import("./Math-c9f44ae4.js"),["assets/Math-c9f44ae4.js","assets/app-698f1bce.js","assets/app-fe4dc76f.css","assets/default.css_vue_type_style_index_0_src_true_lang-57be4c75.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/default-76e9d1d5.css"])}),`./Reports/${t.data.report_template}.vue`).then(o=>{this.component.file=o.default}),this.component.data=t.data.report_data,this.generate.id="",this.generate.running=!1,this.show_progress_report=!0}))},print(){this.printing=!0,this.$htmlToPaper("progress_report",me,()=>{this.printing=!1})}}},je=Object.assign(be,{__name:"Index",setup(s){return(t,o)=>(i(),d(m,null,[a(l(x),{title:"Progress Report"}),a(V,null,{header:n(()=>[]),default:n(()=>[e("div",A,[e("div",N,[e("div",H,[e("div",U,[e("div",E,[e("div",F,[e("div",q,[a(l(h),{class:"text-gray-600 h-4 w-4 fill-current pointer-events-none absolute top-1/4 left-3",style:"top:30%"}),D(e("input",{class:"w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg focus:ring-0 focus:border-gray-300 appearance-none text-gray-800 font-sans leading-snug text-gray-400 block pl-10",type:"text","onUpdate:modelValue":o[0]||(o[0]=r=>t.params.search=r),placeholder:"Search"},null,512),[[C,t.params.search]])])]),e("div",Z,[a(l(f),{modelValue:t.params.centre_id,"onUpdate:modelValue":o[1]||(o[1]=r=>t.params.centre_id=r),valueProp:"ID",appendNewOption:!1,searchable:!0,options:t.$page.props.allowed_centres,clearOnSelect:!1,canClear:!1,canDeselect:!0,trackBy:"label",label:"label",placeholder:"Centre",classes:{container:"relative mx-auto w-full md:w-64 lg:w-64 flex items-center justify-end box-border cursor-pointer border-2 border-gray-300 rounded-lg bg-white text-base leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerActive:"border-2 border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",search:"w-full mt-1 h-8 absolute inset-0 focus:border-none outline-none focus:ring-0 appearance-none border-2 border-transparent focus:border-gray-300 text-base font-sans bg-white rounded-lg",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",caret:"bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none",caretOpen:"rotate-180 pointer-events-auto",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent"}},null,8,["modelValue","options"])]),e("div",G,[a(l(f),{modelValue:t.params.programme_id,"onUpdate:modelValue":o[2]||(o[2]=r=>t.params.programme_id=r),valueProp:"id",appendNewOption:!1,searchable:!0,options:t.$page.props.programmes,clearOnSelect:!1,canClear:!1,canDeselect:!0,trackBy:"name",label:"name",placeholder:"Programme",classes:{container:"relative mx-auto w-full md:w-64 lg:w-64 flex items-center justify-end box-border cursor-pointer border-2 border-gray-300 rounded-lg bg-white text-base leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerActive:"border-2 border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",search:"w-full mt-1 h-8 absolute inset-0 focus:border-none outline-none focus:ring-0 appearance-none border-2 border-transparent focus:border-gray-300 text-base font-sans bg-white rounded-lg",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",caret:"bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none",caretOpen:"rotate-180 pointer-events-auto",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent"}},null,8,["modelValue","options"])]),e("div",Y,[a(l(w),{class:L("w-full rounded-lg shadow-sm"),style:O(t.$page.props.errors.end_time?"--dp-border-color: #fa9e9e":""),"input-class-name":"date-picker",modelValue:t.params.date,"onUpdate:modelValue":o[3]||(o[3]=r=>t.params.date=r),"month-picker":!0,"auto-apply":!0,placeholder:"Month / Year"},null,8,["style","modelValue"])])])]),e("div",J,[e("table",K,[Q,e("tbody",W,[t.$page.props.progress_reports.data.length?b("",!0):(i(),d("tr",X,te)),(i(!0),d(m,null,T(t.$page.props.progress_reports.data,(r,u)=>(i(),d("tr",{class:"hover:bg-gray-200",key:r.report_id},[e("td",oe,[e("div",re,p(++u),1)]),e("td",ae,[e("div",ne,p(r.student_name),1)]),e("td",se,[e("div",le,p(r.total_present+"/"+r.total_class),1)]),e("td",ie,[e("div",pe,p(r.total_absent+"/"+r.total_class),1)]),e("td",de,[e("div",ce,[a(g,{buttonType:"blue",onClick:v=>t.viewProgressReport(r.progress_report_id)},{default:n(()=>[c("View Details")]),_:2},1032,["onClick"]),a(g,{class:"py-1 px-2",onClick:v=>t.showProgressReport(r.progress_report_id)},{default:n(()=>[c(p(t.generate.id==r.progress_report_id&&t.generate.running?"Generating...":"Show / Print"),1)]),_:2},1032,["onClick"])])])]))),128))])]),a(z,{page_data:t.$page.props.progress_reports},null,8,["page_data"])])])]),a(y,{show:t.isOpen,onClose:o[4]||(o[4]=r=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Artwork",confirmationText:"Are you sure want to delete this artwork?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),a(_,{modalType:"md",showModal:t.show_progress_report,onHideModal:o[6]||(o[6]=r=>t.show_progress_report=!1)},{content:n(()=>[e("div",ge,[e("div",ue,[t.component.file?(i(),S(R(t.component.file),{key:0,data:t.component.data},null,8,["data"])):b("",!0)])])]),footer:n(()=>[e("div",fe,[a(g,{buttonType:"info",onClick:t.print},{default:n(()=>[c("Print")]),_:1},8,["onClick"]),a(g,{buttonType:"gray",onClick:o[5]||(o[5]=r=>t.show_progress_report=!1)},{default:n(()=>[c("Close")]),_:1})])]),_:1},8,["showModal"])]),_:1})],64))}});export{je as default};
