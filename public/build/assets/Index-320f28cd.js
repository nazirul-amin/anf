import{c as l,a,u as n,w as i,F as g,H as m,L as _,o as p,b as e,e as v,l as k,n as P,D,h as $,r as L,t as d,i as u}from"./app-6beabd0a.js";import{B as S}from"./Authenticated-908377e3.js";import{B as f}from"./Button-1f1cdf63.js";import{C as b}from"./ConfirmationModal-2f6aee3c.js";import{P as O}from"./Pagination-d0a8bcda.js";import"./default.css_vue_type_style_index_0_src_true_lang-0824d796.js";import{s as c}from"./multiselect-483946ae.js";import{Z as x}from"./main-01e64fe1.js";import{r as h}from"./SearchIcon-aeb0f347.js";import{r as V}from"./TrashIcon-6837a0a2.js";import{r as C}from"./PencilIcon-fec01568.js";/* empty css            */import"./ApplicationLogo-6ff80a66.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-d6c3dce9.js";const T={class:"py-4 px-4"},z={class:"mx-auto"},R={class:"align-middle min-w-full px-2"},B={class:"flex justify-between gap-4 flex-col md:flex-row mb-4"},I={class:"flex flex-wrap gap-4 flex-col md:flex-row"},j={class:"flex"},A={class:"flex w-full relative text-gray-400"},N={class:"flex"},M={class:"flex"},F={class:"flex"},H={class:"overflow-x-auto"},U={class:"table-auto min-w-full divide-y divide-gray-200"},Z=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/12"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Total Present"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Total Absent"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Action")])],-1),E={class:"bg-white divide-y divide-gray-200"},Y={key:0},q=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),G=[q],J={class:"px-6 py-4 whitespace-nowrap"},K={class:"text-sm font-medium text-gray-700"},Q={class:"px-6 py-4 whitespace-nowrap"},W={class:"text-sm font-medium text-gray-900"},X={class:"px-6 py-4 whitespace-nowrap"},ee={class:"text-sm font-medium text-gray-900"},te={class:"px-6 py-4 whitespace-nowrap"},oe={class:"text-sm font-medium text-gray-900"},re={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},ae={class:"flex justify-center space-x-2"},ne={components:{SearchIcon:h,TrashIcon:V,PencilIcon:C,Head:m,Link:_,ConfirmationModal:b,Multiselect:c,Datepicker:x},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",open_modal:!1,params:{search:this.$page.props.filter.search?this.$page.props.filter.search:"",centre_id:this.$page.props.filter.centre_id?this.$page.props.filter.centre_id:"",programme_id:this.$page.props.filter.programme_id?this.$page.props.filter.programme_id:"",date:this.$page.props.filter.date?this.$page.props.filter.date:"",day:""}}},watch:{params:{handler(){this.params&&this.$inertia.get(this.route("progress_report"),this.params,{replace:!0,preserveState:!0})},deep:!0}},methods:{viewProgressReport(s){this.$inertia.get(this.route("progress_report.details"),{progress_report_id:s},{})},deleteFolder(s){this.confirmationRoute="progress_reports.configuration.delete",this.confirmationData=s,this.isOpen=!0}}},_e=Object.assign(ne,{__name:"Index",setup(s){return(t,r)=>(p(),l(g,null,[a(n(m),{title:"Progress Report"}),a(S,null,{header:i(()=>[]),default:i(()=>[e("div",T,[e("div",z,[e("div",R,[e("div",B,[e("div",I,[e("div",j,[e("div",A,[a(n(h),{class:"text-gray-600 h-4 w-4 fill-current pointer-events-none absolute top-1/4 left-3",style:"top:30%"}),v(e("input",{class:"w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg focus:ring-0 focus:border-gray-300 appearance-none text-gray-800 font-sans leading-snug text-gray-400 block pl-10",type:"text","onUpdate:modelValue":r[0]||(r[0]=o=>t.params.search=o),placeholder:"Search"},null,512),[[k,t.params.search]])])]),e("div",N,[a(n(c),{modelValue:t.params.centre_id,"onUpdate:modelValue":r[1]||(r[1]=o=>t.params.centre_id=o),valueProp:"ID",appendNewOption:!1,searchable:!0,options:t.$page.props.allowed_centres,clearOnSelect:!1,canClear:!1,canDeselect:!0,trackBy:"label",label:"label",placeholder:"Centre",classes:{container:"relative mx-auto w-64 flex items-center justify-end box-border cursor-pointer border-2 border-gray-300 rounded-lg bg-white text-base leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerActive:"border-2 border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",search:"w-full mt-1 h-8 absolute inset-0 focus:border-none outline-none focus:ring-0 appearance-none border-2 border-transparent focus:border-gray-300 text-base font-sans bg-white rounded-lg",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",caret:"bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none",caretOpen:"rotate-180 pointer-events-auto",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent"}},null,8,["modelValue","options","classes"])]),e("div",M,[a(n(c),{modelValue:t.params.programme_id,"onUpdate:modelValue":r[2]||(r[2]=o=>t.params.programme_id=o),valueProp:"id",appendNewOption:!1,searchable:!0,options:t.$page.props.programmes,clearOnSelect:!1,canClear:!1,canDeselect:!0,trackBy:"name",label:"name",placeholder:"Programme",classes:{container:"relative mx-auto w-64 flex items-center justify-end box-border cursor-pointer border-2 border-gray-300 rounded-lg bg-white text-base leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerActive:"border-2 border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",search:"w-full mt-1 h-8 absolute inset-0 focus:border-none outline-none focus:ring-0 appearance-none border-2 border-transparent focus:border-gray-300 text-base font-sans bg-white rounded-lg",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",caret:"bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none",caretOpen:"rotate-180 pointer-events-auto",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent"}},null,8,["modelValue","options","classes"])]),e("div",F,[a(n(x),{class:P("w-full rounded-lg shadow-sm"),style:D(t.$page.props.errors.end_time?"--dp-border-color: #fa9e9e":""),"input-class-name":"date-picker",modelValue:t.params.date,"onUpdate:modelValue":r[3]||(r[3]=o=>t.params.date=o),"month-picker":!0,"auto-apply":!0,placeholder:"Month / Year"},null,8,["style","modelValue"])])])]),e("div",H,[e("table",U,[Z,e("tbody",E,[t.$page.props.progress_reports.data.length?$("",!0):(p(),l("tr",Y,G)),(p(!0),l(g,null,L(t.$page.props.progress_reports.data,(o,y)=>(p(),l("tr",{class:"hover:bg-gray-200",key:o.report_id},[e("td",J,[e("div",K,d(++y),1)]),e("td",Q,[e("div",W,d(o.student_name),1)]),e("td",X,[e("div",ee,d(o.total_present+"/"+o.total_class),1)]),e("td",te,[e("div",oe,d(o.total_absent+"/"+o.total_class),1)]),e("td",re,[e("div",ae,[a(f,{buttonType:"blue",onClick:w=>t.viewProgressReport(o.progress_report_id)},{default:i(()=>[u("View Details")]),_:2},1032,["onClick"]),a(f,{buttonType:"info",class:"py-1 px-2",onClick:w=>t.viewProgressReport(o.progress_report_id)},{default:i(()=>[u("Show / Print")]),_:2},1032,["onClick"])])])]))),128))])]),a(O,{page_data:t.$page.props.progress_reports},null,8,["page_data"])])])]),a(b,{show:t.isOpen,onClose:r[4]||(r[4]=o=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Artwork",confirmationText:"Are you sure want to delete this artwork?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])])]),_:1})],64))}});export{_e as default};
