import{a as L,o as r,c as i,b as _,u as m,w as u,F as p,H as C,L as T,v as j,d as e,e as V,f as b,n as g,g as x,h,t as n,k as f,j as y,m as M}from"./app-25726738.js";import{B as P}from"./Authenticated-f3f09eaa.js";import{B as v}from"./Button-7bc0ea15.js";import{Z as S}from"./vue-datepicker-78858f79.js";import{s as k}from"./multiselect-fb3c7a5a.js";import{h as w}from"./moment-fbc5633a.js";import"./ApplicationLogo-cdc43739.js";import"./XIcon-71fc841d.js";import"./TimeAgo-cb574b2f.js";import"./_plugin-vue_export-helper-c27b6911.js";const D={class:"md:grid md:grid-cols-2"},O={class:"md:mt-0 md:col-span-2"},A={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},B={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},F={class:"sm:row-span-3"},H={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},z=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Search Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),I={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},N={class:"mb-4"},$=e("label",{for:"class_name",class:"block text-sm font-bold text-gray-700"},[f(" Children Name "),e("span",{class:"text-red-500"},"*")],-1),E={class:"mt-1 flex rounded-md.shadow-sm"},U={class:"mb-4"},Z=e("label",{for:"centre",class:"block text-sm font-bold text-gray-700"},[f(" Centre "),e("span",{class:"text-red-500"},"*")],-1),R={class:"mt-1 flex rounded-md.shadow-sm"},G={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},J={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},K={class:"mb-4"},Q=e("label",{for:"programme",class:"block text-sm font-bold text-gray-700"},[f(" Start Date "),e("span",{class:"text-red-500"},"*")],-1),W={class:"mt-1 flex rounded-md shadow-sm"},X={class:"mb-4"},Y=e("label",{for:"programme",class:"block text-sm font-bold text-gray-700"},[f(" Programme "),e("span",{class:"text-red-500"},"*")],-1),q={class:"mt-1 flex rounded-md shadow-sm"},ee=e("option",{value:""},"-- Select Programme --",-1),se=["value"],te={class:"grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-4"},oe={class:"mb-4"},le=e("label",{for:"class_type",class:"block text-sm font-bold text-gray-700"},[f(" Class Type "),e("span",{class:"text-red-500"},"*")],-1),ae={class:"mt-1 flex rounded-md shadow-sm"},re=["disabled"],ie=e("option",{value:""},"-- Select Type --",-1),ne=["value"],de={class:"mb-4"},ce=e("label",{for:"class_level",class:"block text-sm font-bold text-gray-700"},[f(" Class Level "),e("span",{class:"text-red-500"},"*")],-1),fe={class:"mt-1 flex rounded-md shadow-sm"},_e=["disabled"],me=e("option",{value:""},"-- Select Level --",-1),pe=["value"],he={class:"mb-4"},ue=e("label",{for:"class_method",class:"block text-sm font-bold text-gray-700"},[f(" Class Method "),e("span",{class:"text-red-500"},"*")],-1),ge={class:"mt-1 flex rounded-md shadow-sm"},be=e("option",{value:""},"-- Select Method --",-1),ye=["value"],xe={class:"flex items-center justify-end"},ve={class:"flex space-x-2"},we={key:0,class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4",ref:"available_classes"},ke={class:"sm:row-span-3"},Ce={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},Se=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Classes Available"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),Le={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},Te={class:"mb-4"},je={class:"shadow overflow-hidden border-b border-gray-200 rounded-t-sm rounded-b-none"},Ve={class:"min-w-full divide-y divide-gray-200"},Me=e("thead",{class:"bg-gray-300"},[e("tr",{class:"px-2"},[e("th",{class:"px-2 py-1 text-left"},"#"),e("th",{class:"px-2 py-1 text-left"},"Day"),e("th",{class:"px-2 py-1 text-left"},"Time"),e("th",{class:"px-2 py-1 text-left"},"Capacity"),e("th",{class:"px-2 py-1 text-center"},"Action")])],-1),Pe={key:0},De={colspan:"10",class:"py-2 text-center"},Oe={key:0,class:"flex justify-center py-4 items-center space-x-2"},Ae=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-arrow-repeat animate-spin",viewBox:"0 0 16 16"},[e("path",{d:"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"}),e("path",{"fill-rule":"evenodd",d:"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"})],-1),Be=e("span",null,"Searching classes...",-1),Fe=[Ae,Be],He={key:1},ze={class:"hover:bg-gray-200"},Ie={class:"px-2 py-2 text-left"},Ne={class:"px-2 py-2 text-left"},$e={class:"px-2 py-2 text-left"},Ee={class:"text-sm font-medium text-gray-900 flex items-center"},Ue=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-indigo-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})],-1),Ze={class:"pl-2"},Re={class:"px-2 py-2 text-left"},Ge={class:"px-2 py-2 text-center"},Je={class:"flex justify-center"},Ke=["checked","disabled","onClick"],Qe=e("div",{class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},null,-1),We={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4",ref:"class_fee"},Xe={class:"sm:row-span-3"},Ye={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},qe=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Fee Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),es={key:0,class:"space-y-2 text-left"},ss=e("span",{class:"font-semibold text-gray-500"},"No classes added.",-1),ts=[ss],os={key:1,class:"space-y-2"},ls={class:"overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"},as={class:"flex cursor-pointer items-center justify-between gap-2 bg-indigo-100 p-4 text-gray-900 transition"},rs={class:"text-sm font-medium"},is={class:"flex items-center space-x-4 text-gray-800"},ns=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",viewBox:"0 0 640 512",fill:"currentColor"},[e("path",{d:"M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"})],-1),ds={class:"font-bold"},cs=["onClick"],fs=e("span",{class:"transition group-open:-rotate-180"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-4 w-4"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})])],-1),_s={class:"border-t border-gray-200 bg-white"},ms={class:"flex px-6 py-3"},ps={class:"flex items-center justify-center divide-x divide-gray-400"},hs={class:"flex space-x-4 font-medium text-gray-900 px-4"},us=e("span",null,"Centre: ",-1),gs={class:"text-indigo-600 sm:col-span-2"},bs={class:"flex space-x-4 font-medium text-gray-900 px-4"},ys=e("span",null,"Fee Type: ",-1),xs={class:"text-indigo-600 sm:col-span-2"},vs={class:"flex space-x-4 font-medium text-gray-900 px-4"},ws=e("span",null,"Class Method: ",-1),ks={class:"text-indigo-600 sm:col-span-2"},Cs={class:"relative overflow-x-auto px-6 pb-4 w-full"},Ss={class:"text-sm text-left text-gray-500 border w-1/2"},Ls=e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-200"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"},"Day"),e("th",{scope:"col",class:"px-6 py-3"},"Time")])],-1),Ts={class:"bg-white border-b"},js={class:"px-6 py-4 text-gray-800 font-semibold"},Vs={class:"px-6 py-4 text-gray-800 font-semibold"},Ms={class:"flex p-6 border-t justify-between"},Ps={class:"flex"},Ds=["id","onClick","checked"],Os=["for"],As={class:"ml-3 text-gray-900 select-none font-semibold"},Bs={key:2,class:"flex justify-end p-6"},Fs={class:"text-right ml-3 text-gray-900 cursor-text font-bold"},Hs={key:1,class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},zs={class:"sm:row-span-3"},Is={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},Ns={class:"flex pt-4 justify-end space-x-2"},$s={components:{Head:C,Link:T,Datepicker:S,Multiselect:k},props:{centre_id:String},data(){return{disable_check_box:!1,total_amount:0,errors:{child:!1,centre:!1,admission_date:!1,programme:!1,class_type:!1,programme:!1,level:!1,class_method:!1},disable:{class_type:!0,class_levels:!0},list:{students:[],class_types:[],class_levels:[],available_classes:[]},searching:{student:!1,class:!1,fee:!1},enable_container:{available_classes:!1,show_fee:!1},search_form:{programme_id:"",class_type:"",class_level:"",class_method:""},form:{date_admission:"",children_id:"",centre_id:"",fee:[]},selected_plus_class:{}}},watch:{"search_form.programme_id":{handler(){this.search_form.programme_id&&(this.disable.class_type=!0,this.disable.class_levels=!0,this.search_form.class_type="",this.search_form.class_level="",axios.get(route("classes.get_class_types"),{params:{programme_id:this.search_form.programme_id}}).then(l=>{this.list.class_types=l.data,this.disable.class_type=!1}))},deep:!0},"search_form.class_type":{handler(){this.search_form.programme_id&&this.search_form.class_type&&(this.disable.class_levels=!0,this.search_form.class_level="",axios.get(route("classes.get_class_levels"),{params:{programme_id:this.search_form.programme_id,class_type:this.search_form.class_type}}).then(l=>{this.list.class_levels=l.data,this.disable.class_levels=!1}))},deep:!0},"form.fee":{handler(){this.total_amount=0;for(const l of this.form.fee){const{include_material_fee:s,material_fee:o,programme_fee:d}=l.fee_info;this.total_amount+=s?d+o:d}},deep:!0}},methods:{submit(){this.$inertia.post(route("classes.store"),this.form,{preserveState:!0})},findChildren(l){j.debounce(s=>"400ms")(10),l&&(this.searching.student=!0,axios.get(route("children.find"),{params:{keyword:l}}).then(s=>{this.list.students=s.data,this.searching.student=!1}))},findClasses(){this.errors.child=!this.form.children_id,this.errors.centre=!this.form.centre_id,this.errors.admission_date=!this.form.date_admission,this.errors.programme=!this.search_form.programme_id,this.errors.class_type=!this.search_form.class_type,this.errors.level=!this.search_form.class_level,this.errors.class_method=!this.search_form.class_method,this.form.children_id&&this.form.centre_id&&this.search_form.programme_id&&this.search_form.class_level&&this.search_form.class_type&&this.search_form.class_method&&(this.searching.class=!0,this.enable_container.show_fee=!1,this.list.available_classes=[],axios.get(route("classes.find"),{params:{centre_id:this.form.centre_id,programme_id:this.search_form.programme_id,class_method:this.search_form.class_method,class_level:this.search_form.class_level,class_type:this.search_form.class_type}}).then(l=>{this.list.available_classes=l.data,this.enable_container.available_classes=!0,this.searching.class=!1,this.scrollToElement("available_classes")}))},getNormalFee(l,s,o,d){if(this.form.fee.find(a=>a.fee_info.class_type_id===1&&a.fee_info.class_type_id===s&&a.fee_info.programme_id===o)){alert("Only one class is allowed for normal class."),this.searching.fee=!1;return}if(this.form.fee.find(a=>a.fee_info.programme_id===o&&a.fee_info.class_type_id!==s)){alert("This programme already been added. Please remove the previous one first."),this.searching.fee=!1;return}axios.get(route("programmes.get_fee"),{params:{class_id:l,programme_level_id:d}}).then(a=>{this.form.fee.push(a.data),this.pushMaterialFee(o),this.scrollToElement("class_fee"),this.searching.fee=!1})},getPlusFee(l,s,o,d,t){if(this.disable_check_box)return;if(this.form.fee.find(a=>a.fee_info.programme_id===d&&a.fee_info.class_type_id!==o)){alert("This programme already been added. Please remove the previous one first."),l.target.checked&&(l.target.checked=!1),this.searching.fee=!1;return}this.disable_check_box=!0,l.target.checked?(this.selected_plus_class[d]||(this.selected_plus_class[d]=[]),this.selected_plus_class[d].push(s)):this.selected_plus_class[d]=this.selected_plus_class[d].filter(a=>a!==s),this.form.fee=this.form.fee.filter(a=>a.fee_info.programme_id!==d),this.selected_plus_class[d].length?axios.get(route("programmes.get_fee"),{params:{class_type:this.search_form.class_type,class_count:this.selected_plus_class[d].length,classes:this.selected_plus_class[d],programme_level_id:t}}).then(a=>{a.data.fee_info&&(this.form.fee.push(a.data),this.pushMaterialFee(d)),this.scrollToElement("class_fee"),this.searching.fee=!1,this.disable_check_box=!1}).catch(a=>{this.searching.fee=!1,this.disable_check_box=!1}):this.disable_check_box=!1},clearStudents(){this.list.students=[]},scrollToElement(l){const s=this.$refs[l];s&&s.scrollIntoView({behavior:"smooth"})},deleteFee(l,s){this.form.fee=this.form.fee.filter(o=>o.fee_info.programme_id!==l),s==2&&this.selected_plus_class.hasOwnProperty(l)&&delete this.selected_plus_class[l]},admitStudent(){this.$inertia.post(route("students.store"),this.form)},checkIfClassSelected(l,s){return this.selected_plus_class[s]?this.selected_plus_class[s].includes(l):!1},pushMaterialFee(l){for(const s of this.form.fee){const o=s.fee_info;if(o.programme_id===l){o.include_material_fee=!0,o.material_fee_discount=0,o.programme_fee_discount=0;break}}}},mounted(){const s=new Date().toISOString().substring(0,10);this.form.date_admission=`${s}T05:59:00.000Z`}},Ys=Object.assign($s,{__name:"Create",setup(l){return(s,o)=>{const d=L("debounce");return r(),i(p,null,[_(m(C),{title:"Students"}),_(P,null,{header:u(()=>[]),default:u(()=>[e("div",D,[e("div",O,[e("form",{onSubmit:o[7]||(o[7]=V((...t)=>s.submit&&s.submit(...t),["prevent"]))},[e("div",A,[e("div",B,[e("div",F,[e("div",H,[z,e("div",I,[e("div",N,[$,e("div",E,[b(_(m(k),{modelValue:s.form.children_id,"onUpdate:modelValue":o[0]||(o[0]=t=>s.form.children_id=t),onClose:s.clearStudents,valueProp:"id",loading:s.searching.student,placeholder:"Please enter some keywords",options:s.list.students,searchable:!0,noOptionsText:"Nothing found",noResultsText:"Nothing found",clearOnSelect:!0,canClear:!1,canDeselect:!1,"internal-search":!1,trackBy:"name",label:"name",classes:{container:s.errors.child?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white text-base leading-snug outline-none":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white text-base leading-snug outline-none",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded-md pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","onClose","loading","options","classes"]),[[d,s.findChildren]])])]),e("div",U,[Z,e("div",R,[_(m(k),{modelValue:s.form.centre_id,"onUpdate:modelValue":o[1]||(o[1]=t=>s.form.centre_id=t),valueProp:"ID",searchable:!0,options:s.$page.props.allowed_centres,clearOnSelect:!1,canClear:!1,canDeselect:!1,trackBy:"label",label:"label",classes:{container:s.errors.centre?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white text-base leading-snug outline-none":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white text-base leading-snug outline-none",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded-md pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options","classes"])])])]),e("div",G,[e("div",J,[e("div",K,[Q,e("div",W,[_(m(S),{class:g(["w-full rounded-lg shadow-sm",(s.errors.admission_date,"--dp-border-color: #ff6f60")]),"input-class-name":"date-picker",modelValue:s.form.date_admission,"onUpdate:modelValue":o[2]||(o[2]=t=>s.form.date_admission=t),"enable-time-picker":!1,"auto-apply":!0,format:"dd/MM/yyyy"},null,8,["class","modelValue"])])]),e("div",X,[Y,e("div",q,[b(e("select",{name:"programme",id:"programme",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.errors.programme?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[3]||(o[3]=t=>s.search_form.programme_id=t),autocomplete:"off"},[ee,(r(!0),i(p,null,h(s.$page.props.programme_list,(t,c)=>(r(),i("option",{value:t.id,key:c},n(t.name),9,se))),128))],2),[[x,s.search_form.programme_id]])])])]),e("div",te,[e("div",oe,[le,e("div",ae,[b(e("select",{name:"class_type",id:"class_type",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",[s.errors.class_type?"border-red-300":"border-gray-300",s.disable.class_type?"bg-gray-50":""]]),"onUpdate:modelValue":o[4]||(o[4]=t=>s.search_form.class_type=t),autocomplete:"off",disabled:s.disable.class_type},[ie,(r(!0),i(p,null,h(s.list.class_types,(t,c)=>(r(),i("option",{value:t.id,key:c},n(t.name),9,ne))),128))],10,re),[[x,s.search_form.class_type]])])]),e("div",de,[ce,e("div",fe,[b(e("select",{name:"class_level",id:"class_level",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",[s.errors.level?"border-red-300":"border-gray-300",s.disable.class_levels?"bg-gray-50":""]]),"onUpdate:modelValue":o[5]||(o[5]=t=>s.search_form.class_level=t),autocomplete:"off",disabled:s.disable.class_levels},[me,(r(!0),i(p,null,h(s.list.class_levels,(t,c)=>(r(),i("option",{value:t.level,key:t},n(t.level),9,pe))),128))],10,_e),[[x,s.search_form.class_level]])])]),e("div",he,[ue,e("div",ge,[b(e("select",{name:"class_method",id:"class_method",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.errors.class_method?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[6]||(o[6]=t=>s.search_form.class_method=t),autocomplete:"off"},[be,(r(!0),i(p,null,h(s.$page.props.method_list,(t,c)=>(r(),i("option",{value:t.id,key:c},n(t.name),9,ye))),128))],2),[[x,s.search_form.class_method]])])])])]),e("div",xe,[e("div",ve,[_(v,{onClick:s.findClasses},{default:u(()=>[f("Search Classes")]),_:1},8,["onClick"])])])])])]),s.enable_container.available_classes?(r(),i("div",we,[e("div",ke,[e("div",Ce,[Se,e("div",Le,[e("div",Te,[e("div",je,[e("table",Ve,[Me,e("tbody",null,[s.list.available_classes.length?(r(!0),i(p,{key:1},h(s.list.available_classes,(t,c)=>(r(),i("tr",ze,[e("td",Ie,n(c+1),1),e("td",Ne,n(t.class_day),1),e("td",$e,[e("div",Ee,[Ue,e("span",Ze,n(m(w)(t.start_time,"HH:mm:ss").format("h:mm A"))+" - "+n(m(w)(t.end_time,"HH:mm:ss").format("h:mm A")),1)])]),e("td",Re,n(t.capacity),1),e("td",Ge,[e("div",Je,[t.class_type==1?(r(),M(v,{key:0,buttonType:"blue",onClick:a=>s.getNormalFee(t.class_id,t.class_type,t.programme_id,t.programme_level_id)},{default:u(()=>[f("Choose")]),_:2},1032,["onClick"])):(r(),i("input",{key:1,class:g(["h-5 w-5 border border-indigo-300 rounded-sm focus:ring-offset-0 focus:ring-0 checked:bg-gray focus:bg-white transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer",s.disable_check_box?"bg-gray-100":"bg-white"]),type:"checkbox",checked:s.checkIfClassSelected(t.class_id,t.programme_id),disabled:s.disable_check_box,onClick:a=>s.getPlusFee(a,t.class_id,t.class_type,t.programme_id,t.programme_level_id)},null,10,Ke))])])]))),256)):(r(),i("tr",Pe,[e("td",De,[s.searching.class?(r(),i("div",Oe,Fe)):y("",!0),!s.searching.class&&!s.list.available_classes.length?(r(),i("span",He,"No classes available")):y("",!0)])]))])])])])]),Qe])])],512)):y("",!0),e("div",We,[e("div",Xe,[e("div",Ye,[qe,s.form.fee.length?(r(),i("div",os,[(r(!0),i(p,null,h(s.form.fee,(t,c)=>(r(),i("details",ls,[e("summary",as,[e("span",rs,[e("div",is,[ns,e("span",ds,n(t.fee_info.programme_name)+" (Level "+n(t.fee_info.programme_level)+")",1),e("span",{class:"text-red-500 hover:underline cursor-pointer font-semibold",onClick:a=>s.deleteFee(t.fee_info.programme_id,t.fee_info.class_type_id)},"Delete",8,cs)])]),fs]),e("div",_s,[e("div",ms,[e("div",ps,[e("div",hs,[us,e("dd",gs,n(t.fee_info.centre_name),1)]),e("div",bs,[ys,e("dd",xs,n(t.fee_info.programme_type),1)]),e("div",vs,[ws,e("dd",ks,n(t.fee_info.class_method),1)])])]),e("div",Cs,[e("table",Ss,[Ls,e("tbody",null,[(r(!0),i(p,null,h(t.classes,a=>(r(),i("tr",Ts,[e("td",js,n(a.class_day),1),e("td",Vs,n(m(w)(a.start_time,"HH:mm:ss").format("h:mm A"))+" - "+n(m(w)(a.end_time,"HH:mm:ss").format("h:mm A")),1)]))),256))])])]),e("div",Ms,[e("div",Ps,[e("input",{id:c,type:"checkbox",class:"bg-gray-50 border-gray-300 focus:ring-0 focus:ring-gray-400 h-5 w-5 rounded",onClick:a=>t.fee_info.include_material_fee=!t.fee_info.include_material_fee,checked:t.fee_info.include_material_fee},null,8,Ds),e("label",{for:c,class:"text-sm ml-3 font-medium leading-5 text-gray-700 select-none cursor-pointer"},"Material Fee : "+n(t.fee_info.material_fee),9,Os)]),e("span",As,"Fee: "+n(t.fee_info.include_material_fee?t.fee_info.material_fee+t.fee_info.programme_fee:t.fee_info.programme_fee),1)])])]))),256))])):(r(),i("div",es,ts)),s.form.fee.length?(r(),i("div",Bs,[e("span",Fs,"Total Amount: "+n(s.total_amount),1)])):y("",!0)])])],512),s.form.fee.length?(r(),i("div",Hs,[e("div",zs,[e("div",Is,[e("div",Ns,[_(v,{buttonType:"gray"},{default:u(()=>[f("Cancel")]),_:1}),_(v,{buttonType:"info",onClick:s.admitStudent},{default:u(()=>[f("Admit")]),_:1},8,["onClick"])])])])])):y("",!0)])],32)])])]),_:1})],64)}}});export{Ys as default};
