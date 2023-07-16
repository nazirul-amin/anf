import{c as d,b as p,u as m,w as b,F as x,H as h,L as y,o as c,d as e,e as v,n as l,t as u,j as g,f as a,l as i,h as _,y as k,k as n}from"./app-d43ace84.js";import{B as L}from"./Authenticated-86ad341a.js";import{s as f}from"./multiselect-e3235bdf.js";/* empty css            */import"./ApplicationLogo-85a4f4bf.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Button-59a3957d.js";import"./default.css_vue_type_style_index_0_src_true_lang-dbfe2aa6.js";const S={class:"md:grid md:grid-cols-2"},U={class:"md:mt-0 md:col-span-2"},V={class:"px-4 py-5 bg-white space-y-6 sm:p-6"},j={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},C={class:"sm:row-span-3"},T=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"User Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),z={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},D={class:"mb-4"},O={class:"flex justify-between"},P=e("label",{for:"email",class:"block text-sm text-gray-700 font-bold"},[n(" Email "),e("span",{class:"text-red-500"},"*")],-1),E={class:"mt-1 flex rounded-md shadow-sm"},$={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},I={class:"mb-4"},N={class:"flex justify-between"},R=e("label",{for:"username",class:"block text-sm text-gray-700 font-bold"},[n(" Username "),e("span",{class:"text-red-500"},"*")],-1),B={class:"mt-1 flex rounded-md shadow-sm"},A={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},H={class:"mb-4"},M=e("label",{for:"first_name",class:"block text-sm text-gray-700 font-bold"},[n(" First Name "),e("span",{class:"text-red-500"},"*")],-1),F={class:"mt-1 flex rounded-md shadow-sm"},W={class:"mb-4"},G=e("label",{for:"last_name",class:"block text-sm text-gray-700 font-bold"},[n(" Last Name "),e("span",{class:"text-red-500"},"*")],-1),J={class:"mt-1 flex rounded-md shadow-sm"},K={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},Q={class:"mb-4"},X=e("label",{for:"country",class:"block text-sm text-gray-700 font-bold"},[n(" Country "),e("span",{class:"text-red-500"},"*")],-1),Y={class:"mt-1 flex rounded-md shadow-sm"},Z={class:"mb-4"},q=e("label",{for:"contact_number",class:"block text-sm text-gray-700 font-bold"},[n(" Contact Number "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},te={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},oe={class:"mb-4"},se=e("label",{for:"state",class:"block text-sm text-gray-700 font-bold"},[n(" State "),e("span",{class:"text-red-500"},"*")],-1),re={class:"mt-1 flex rounded-md shadow-sm"},ae={class:"grid grid-cols-1 gap-4"},ne={class:"mb-4"},le=e("label",{for:"address",class:"block text-sm text-gray-700 font-bold"},[n(" Address "),e("span",{class:"text-red-500"},"*")],-1),ie={class:"mt-1"},de={class:"sm:row-span-3"},ce=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"User Roles"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),pe={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},me={class:"mb-4"},ue={key:0,class:"flex py-1"},be={class:"text-sm text-red-500"},ge={class:"block"},fe={class:"mt-2"},xe=["for"],he=["id","value"],ye={class:"ml-2"},we={class:"flex"},ve=e("div",{class:"flex pr-1"},[e("button",{class:"py-2 px-6 bg-green-500 rounded text-white hover:bg-green-600 border"},"Save")],-1),_e={class:"flex pr-1"},ke=async r=>{if(r)return(await(await fetch("https://restcountries.com/v2/name/"+r)).json()).map(o=>({value:o.alpha2Code,label:o.name}))},Le={components:{Head:h,Link:y,Multiselect:f},props:{roles:Object},data(){return{state_list:[],email_exist:!1,checking_email:!1,username_exist:!1,checking_username:!1,form:{email:"",username:"",first_name:"",last_name:"",country:"",country_code:"",calling_code:"+60",contact_number:"",state:"",address:"",selected_roles:[]}}},watch:{"form.email":{handler(r){this.checking_email||r!=""&&setTimeout(()=>{this.checkEmailExist(this.form.email),this.checking_email=!1},2e3),r!=""&&(this.checking_email=!0)},immediate:!0},"form.username":{handler(r){this.checking_username||r!=""&&setTimeout(()=>{this.checkUsernameExist(this.form.username),this.checking_username=!1},2e3),r!=""&&(this.checking_username=!0)},immediate:!0},"form.country_code":{handler(r){this.form.state="",r&&(this.setCallingCode(r),this.setStateList(r))},immediate:!0}},methods:{checkEmailExist(r){axios.get("/api/find-email/"+r).then(t=>{t.data.length!=0?this.email_exist=!0:this.email_exist=!1}).catch(t=>{this.errored=!0})},checkUsernameExist(r){axios.get("/api/find-username/"+r).then(t=>{t.data.length!=0?this.username_exist=!0:this.username_exist=!1}).catch(t=>{this.errored=!0})},setCallingCode(r){axios.get("https://restcountries.com/v3.1/alpha/"+r).then(t=>{this.form.country=t.data[0].name.official,this.form.calling_code=t.data[0].idd.root+t.data[0].idd.suffixes[0]}).catch(t=>{this.errored=!0})},setStateList(r){var t=this.state_list;t.splice(0),axios({method:"post",url:"https://countriesnow.space/api/v0.1/countries/states",headers:{"Content-Type":"application/json"},data:{iso2:r}}).then(s=>{s.data.data.states.forEach(function(o){t.push(o.name)})})},submit(){this.$inertia.post(route("users.store"),this.form,{preserveState:!0})}}},Oe=Object.assign(Le,{__name:"Create",setup(r){return(t,s)=>(c(),d(x,null,[p(m(h),{title:"Users"}),p(L,null,{header:b(()=>[]),default:b(()=>[e("div",S,[e("div",U,[e("form",{onSubmit:s[11]||(s[11]=v((...o)=>t.submit&&t.submit(...o),["prevent"]))},[e("div",V,[e("div",j,[e("div",C,[T,e("div",z,[e("div",D,[e("div",O,[P,t.form.email?(c(),d("label",{key:0,for:"",class:l(["font-medium text-sm",t.email_exist?"text-red-700":"text-green-700"])},u(t.email_exist?"Email address has been used.":"Email address available."),3)):g("",!0)]),e("div",E,[a(e("input",{type:"email",name:"email",id:"email",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.email_exist||t.$page.props.errors.email?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[0]||(s[0]=o=>t.form.email=o),autocomplete:"off"},null,2),[[i,t.form.email]])])])]),e("div",$,[e("div",I,[e("div",N,[R,t.form.username?(c(),d("label",{key:0,for:"",class:l(["font-medium text-sm",t.username_exist?"text-red-700":"text-green-700"])},u(t.username_exist?"Username has been taken.":"Username available."),3)):g("",!0)]),e("div",B,[a(e("input",{type:"text",name:"username",id:"username",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.username_exist||t.$page.props.errors.email?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[1]||(s[1]=o=>t.form.username=o),autocomplete:"off"},null,2),[[i,t.form.username]])])])]),e("div",A,[e("div",H,[M,e("div",F,[a(e("input",{type:"text",name:"first_name",id:"first_name",class:l(["capitalize focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.first_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[2]||(s[2]=o=>t.form.first_name=o),autocomplete:"off"},null,2),[[i,t.form.first_name]])])]),e("div",W,[G,e("div",J,[a(e("input",{type:"text",name:"last_name",id:"last_name",class:l(["capitalize focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.last_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[3]||(s[3]=o=>t.form.last_name=o),autocomplete:"off"},null,2),[[i,t.form.last_name]])])])]),e("div",K,[e("div",Q,[X,e("div",Y,[p(m(f),{autocomplete:"off",placeholder:"Please select a country",modelValue:t.form.country_code,"onUpdate:modelValue":s[4]||(s[4]=o=>t.form.country_code=o),"min-chars":1,delay:1,searchable:!0,noOptionsText:"Please enter at least 1 character",options:async function(o){return await ke(o)},classes:{container:t.$page.props.errors.country?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded bg-white text-base leading-snug outline-none":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded bg-white text-base leading-snug outline-none",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded pl-3.5",tags:"flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2",tag:"bg-green-500 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap",tagDisabled:"pr-2 opacity-50",tagRemove:"flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group",tagRemoveIcon:"bg-multiselect-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60",tagsSearchWrapper:"inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full",tagsSearch:"absolute inset-0 border-0 outline-none focus:ring-0 appearance-none p-0 text-base font-sans box-border w-full",tagsSearchCopy:"invisible whitespace-pre-wrap inline-block h-px",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",caret:"bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none",caretOpen:"rotate-180 pointer-events-auto",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-1 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-gray-700",groupLabelSelected:"bg-green-600 text-white",groupLabelDisabled:"bg-gray-100 text-gray-300 cursor-not-allowed",groupLabelSelectedPointed:"bg-green-600 text-white opacity-90",groupLabelSelectedDisabled:"text-green-100 bg-green-600 bg-opacity-50 cursor-not-allowed",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options","classes"]),a(e("input",{type:"hidden","onUpdate:modelValue":s[5]||(s[5]=o=>t.form.country=o)},null,512),[[i,t.form.country]])])]),e("div",Z,[q,e("div",ee,[a(e("input",{class:"text-center inline-flex items-center px-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-500 text-sm","onUpdate:modelValue":s[6]||(s[6]=o=>t.form.calling_code=o),size:"5",disabled:""},null,512),[[i,t.form.calling_code]]),a(e("input",{type:"number",name:"contact_number",id:"contact_number",class:l(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-none rounded-r-md sm:text-sm",t.$page.props.errors.contact_number?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[7]||(s[7]=o=>t.form.contact_number=o),autocomplete:"off"},null,2),[[i,t.form.contact_number]])])])]),e("div",te,[e("div",oe,[se,e("div",re,[p(m(f),{modelValue:t.form.state,"onUpdate:modelValue":s[8]||(s[8]=o=>t.form.state=o),placeholder:"Please select a state",noOptionsText:"Please select a state",options:t.state_list,classes:{container:t.$page.props.errors.country?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded bg-white text-base leading-snug outline-none":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded bg-white text-base leading-snug outline-none",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded pl-3.5",tags:"flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2",tag:"bg-green-500 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap",tagDisabled:"pr-2 opacity-50",tagRemove:"flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group",tagRemoveIcon:"bg-multiselect-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60",tagsSearchWrapper:"inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full",tagsSearch:"absolute inset-0 border-0 outline-none focus:ring-0 appearance-none p-0 text-base font-sans box-border w-full",tagsSearchCopy:"invisible whitespace-pre-wrap inline-block h-px",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",caret:"bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none",caretOpen:"rotate-180 pointer-events-auto",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-1 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-gray-700",groupLabelSelected:"bg-green-600 text-white",groupLabelDisabled:"bg-gray-100 text-gray-300 cursor-not-allowed",groupLabelSelectedPointed:"bg-green-600 text-white opacity-90",groupLabelSelectedDisabled:"text-green-100 bg-green-600 bg-opacity-50 cursor-not-allowed",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options","classes"])])])]),e("div",ae,[e("div",ne,[le,e("div",ie,[a(e("textarea",{id:"address",name:"address",rows:"3",class:l(["capitalize shadow-sm focus:ring-0 focus:border-indigo-300 mt-1 block w-full sm:text-sm border rounded-md",t.$page.props.errors.address?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[9]||(s[9]=o=>t.form.address=o),autocomplete:"off"},null,2),[[i,t.form.address]])])])])]),e("div",de,[ce,e("div",pe,[e("div",me,[t.$page.props.errors.selected_roles?(c(),d("div",ue,[e("span",be,u(t.$page.props.errors.selected_roles),1)])):g("",!0),e("div",ge,[e("div",fe,[(c(!0),d(x,null,_(r.roles,o=>(c(),d("div",{class:"mb-2",key:o.id},[e("label",{class:"inline-flex items-center text-gray-800 select-none text-md",for:o.id},[a(e("input",{type:"checkbox",class:"h-5 w-5 border border-gray-300 rounded-sm bg-white focus:ring-offset-0 focus:ring-0 checked:bg-gray focus:bg-white transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer",id:o.id,value:o.id,"onUpdate:modelValue":s[10]||(s[10]=w=>t.form.selected_roles=w)},null,8,he),[[k,t.form.selected_roles]]),e("span",ye,u(o.display_name),1)],8,xe)]))),128))])])])])])]),e("div",we,[ve,e("div",_e,[p(m(y),{href:t.route("users"),class:"py-2 px-6 bg-gray-400 rounded text-white hover:bg-gray-500 border"},{default:b(()=>[n("Cancel")]),_:1},8,["href"])])])])],32)])])]),_:1})],64))}});export{Oe as default};
