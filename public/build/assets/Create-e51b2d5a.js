import{c as l,b as i,u as p,w as _,F as m,H as v,L as V,o as a,d as e,e as S,f as c,g as u,n,h as g,t as b,C as y,l as C,k as d}from"./app-5b70941e.js";import{B as O}from"./Authenticated-3d558274.js";import{B as x}from"./Button-7003fb3f.js";import{Z as h}from"./main-e70ee1c4.js";import{b as w}from"./toggle-879e2c1d.js";import{s as k}from"./multiselect-26668014.js";/* empty css            */import"./ApplicationLogo-9bc665dc.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-6a638028.js";import"./default.css_vue_type_style_index_0_src_true_lang-5057ee22.js";import"./moment-fbc5633a.js";const L={class:"md:grid md:grid-cols-2"},T={class:"md:mt-0 md:col-span-2"},j={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},D={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},$={class:"sm:row-span-3"},P={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},U=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Class Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),z={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},B={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},M={class:"mb-4"},I=e("label",{for:"centre",class:"block text-sm font-bold text-gray-700"},[d(" Centre "),e("span",{class:"text-red-500"},"*")],-1),A={class:"mt-1 flex rounded-md.shadow-sm"},H={class:"mb-4"},N=e("label",{for:"programme",class:"block text-sm font-bold text-gray-700"},[d(" Programme "),e("span",{class:"text-red-500"},"*")],-1),E={class:"mt-1 flex rounded-md shadow-sm"},F=e("option",{value:""},"-- Select Programme --",-1),Z=["value"],K={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},R={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},q={class:"mb-4"},G=e("label",{for:"class_type",class:"block text-sm font-bold text-gray-700"},[d(" Class Type "),e("span",{class:"text-red-500"},"*")],-1),J={class:"mt-1 flex rounded-md shadow-sm"},Q=["disabled"],W=e("option",{value:""},"-- Select Type --",-1),X=["value"],Y={class:"mb-4"},ee=e("label",{for:"programme_level_id",class:"block text-sm font-bold text-gray-700"},[d(" Class Level "),e("span",{class:"text-red-500"},"*")],-1),se={class:"mt-1 flex rounded-md shadow-sm"},te=["disabled"],oe=e("option",{value:""},"-- Select Level --",-1),re=["value"],le={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},ae={class:"mb-4"},de=e("label",{for:"class_day",class:"block text-sm font-bold text-gray-700"},[d(" Class Day "),e("span",{class:"text-red-500"},"*")],-1),ie={class:"mt-1 flex rounded-md shadow-sm"},ne=e("option",{value:""},"-- Select Day --",-1),me=["value"],ce={class:"mb-4"},pe=e("label",{for:"class_method",class:"block text-sm font-bold text-gray-700"},[d(" Class Methods "),e("span",{class:"text-red-500"},"*")],-1),ue={class:"mt-1 flex rounded-md shadow-sm"},ge=e("option",{value:""},"-- Select Method --",-1),be=["value"],fe={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},_e={class:"mb-4"},he=e("label",{for:"start_time",class:"block text-sm font-bold text-gray-700"},[d(" Start Time "),e("span",{class:"text-red-500"},"*")],-1),ye={class:"mb-4"},xe=e("label",{for:"end_time",class:"block text-sm font-bold text-gray-700"},[d(" End Time "),e("span",{class:"text-red-500"},"*")],-1),ve={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},we={class:"mb-4"},ke=e("label",{for:"class_capacity",class:"block text-sm font-bold text-gray-700"},[d(" Class Capacity "),e("span",{class:"text-red-500"},"*")],-1),Ve={class:"mt-1 flex rounded-md shadow-sm"},Se=e("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1),Ce={class:"flex items-center justify-between"},Oe={class:"flex space-x-2"},Le=e("label",{for:"",class:"block font-bold text-gray-700"},"Active",-1),Te={class:"flex space-x-2"},je={components:{Head:v,Link:V,Datepicker:h,Toggle:w,Multiselect:k},props:{programme_list:Object,day_list:Object,method_list:Object,centre_id:String},data(){return{disable_class_types:!0,disable_class_levels:!0,class_types:[],class_levels:[],form:{centre_id:this.centre_id?this.centre_id:"",programme_id:"",programme_level_id:"",class_day:"",start_time:"",end_time:"",class_capacity:"",class_type:"",class_method:"",class_status:!0}}},watch:{"form.programme_id":{handler(){this.form.programme_id&&(this.disable_class_types=!0,this.disable_class_levels=!0,this.form.class_type="",this.form.programme_level_id="",axios.get(route("classes.get_class_types"),{params:{programme_id:this.form.programme_id}}).then(r=>{this.class_types=r.data,this.disable_class_types=!1}))},deep:!0},"form.class_type":{handler(){this.form.programme_id&&this.form.class_type&&(this.disable_class_levels=!0,this.form.programme_level_id="",axios.get(route("classes.get_class_levels"),{params:{programme_id:this.form.programme_id,class_type:this.form.class_type}}).then(r=>{this.class_levels=r.data,this.disable_class_levels=!1}))},deep:!0}},methods:{submit(){this.$inertia.post(route("classes.store"),this.form,{preserveState:!0})},numberOnly(r){r=r||window.event;var s=r.which?r.which:r.keyCode;if(s>31&&(s<48||s>57)&&s!==46)r.preventDefault();else return!0}}},Fe=Object.assign(je,{__name:"Create",setup(r){return(s,o)=>(a(),l(m,null,[i(p(v),{title:"Classes"}),i(O,null,{header:_(()=>[]),default:_(()=>[e("div",L,[e("div",T,[e("form",{onSubmit:o[11]||(o[11]=S((...t)=>s.submit&&s.submit(...t),["prevent"]))},[e("div",j,[e("div",D,[e("div",$,[e("div",P,[U,e("div",z,[e("div",B,[e("div",M,[I,e("div",A,[i(p(k),{modelValue:s.form.centre_id,"onUpdate:modelValue":o[0]||(o[0]=t=>s.form.centre_id=t),valueProp:"ID",searchable:!0,options:s.$page.props.allowed_centres,clearOnSelect:!0,canClear:!1,canDeselect:!1,trackBy:"label",label:"label",classes:{container:s.$page.props.errors.centre_id?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded bg-white text-base leading-snug outline-none":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded bg-white text-base leading-snug outline-none h-[38px]",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",caret:"bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none",caretOpen:"rotate-180 pointer-events-auto",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options","classes"])])]),e("div",H,[N,e("div",E,[c(e("select",{name:"programme",id:"programme",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.programme?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[1]||(o[1]=t=>s.form.programme_id=t),autocomplete:"off"},[F,(a(!0),l(m,null,g(r.programme_list,(t,f)=>(a(),l("option",{value:t.id,key:f},b(t.name),9,Z))),128))],2),[[u,s.form.programme_id]])])])])]),e("div",K,[e("div",R,[e("div",q,[G,e("div",J,[c(e("select",{name:"class_type",id:"class_type",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.class_type?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[2]||(o[2]=t=>s.form.class_type=t),autocomplete:"off",disabled:s.disable_class_types},[W,(a(!0),l(m,null,g(s.class_types,(t,f)=>(a(),l("option",{value:t.id,key:f},b(t.name),9,X))),128))],10,Q),[[u,s.form.class_type]])])]),e("div",Y,[ee,e("div",se,[c(e("select",{name:"programme_level_id",id:"programme_level_id",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.programme_level_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[3]||(o[3]=t=>s.form.programme_level_id=t),autocomplete:"off",disabled:s.disable_class_levels},[oe,(a(!0),l(m,null,g(s.class_levels,(t,f)=>(a(),l("option",{value:t.id,key:t},b(t.level),9,re))),128))],10,te),[[u,s.form.programme_level_id]])])])]),e("div",le,[e("div",ae,[de,e("div",ie,[c(e("select",{name:"class_day",id:"class_day",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.class_day?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[4]||(o[4]=t=>s.form.class_day=t),autocomplete:"off"},[ne,(a(!0),l(m,null,g(r.day_list,t=>(a(),l("option",{value:t.id,key:t},b(t.name),9,me))),128))],2),[[u,s.form.class_day]])])]),e("div",ce,[pe,e("div",ue,[c(e("select",{name:"class_method",id:"class_method",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.class_method?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[5]||(o[5]=t=>s.form.class_method=t),autocomplete:"off"},[ge,(a(!0),l(m,null,g(r.method_list,t=>(a(),l("option",{value:t.id,key:t},b(t.name),9,be))),128))],2),[[u,s.form.class_method]])])])])]),e("div",fe,[e("div",_e,[he,i(p(h),{class:n("mt-1 rounded-md shadow-sm"),style:y(s.$page.props.errors.start_time?"--dp-border-color: #fa9e9e":""),modelValue:s.form.start_time,"onUpdate:modelValue":o[6]||(o[6]=t=>s.form.start_time=t),timePicker:!0,is24:!1},null,8,["style","modelValue"])]),e("div",ye,[xe,i(p(h),{class:n("mt-1 rounded-md shadow-sm"),style:y(s.$page.props.errors.end_time?"--dp-border-color: #fa9e9e":""),modelValue:s.form.end_time,"onUpdate:modelValue":o[7]||(o[7]=t=>s.form.end_time=t),timePicker:!0,is24:!1},null,8,["style","modelValue"])])]),e("div",ve,[e("div",we,[ke,e("div",Ve,[c(e("input",{type:"number",name:"class_capacity",id:"class_capacity",class:n(["capitalize focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.class_capacity?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[8]||(o[8]=t=>s.form.class_capacity=t),autocomplete:"off",onKeypress:o[9]||(o[9]=(...t)=>s.numberOnly&&s.numberOnly(...t))},null,34),[[C,s.form.class_capacity]])])])]),Se,e("div",Ce,[e("div",Oe,[Le,i(p(w),{modelValue:s.form.class_status,"onUpdate:modelValue":o[10]||(o[10]=t=>s.form.class_status=t),classes:{container:"inline-block",toggle:"flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",toggleOn:"bg-green-500 border-green-500 justify-start text-white",toggleOff:"bg-gray-400 border-gray-400 justify-end text-gray-700"}},null,8,["modelValue"])]),e("div",Te,[i(x,{buttonType:"gray",route:s.route("classes")},{default:_(()=>[d("Cancel")]),_:1},8,["route"]),i(x,{type:"submit"},{default:_(()=>[d("Save")]),_:1})])])])])])])],32)])])]),_:1})],64))}});export{Fe as default};
