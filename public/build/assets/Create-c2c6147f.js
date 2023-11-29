import{a as V,o as a,c as i,b as d,u as g,w as c,F as u,H as T,L as O,d as e,e as j,f as m,l as v,n as f,g as x,h as _,t as n,k as l,j as y}from"./app-ae712e69.js";import{B as C}from"./Authenticated-c91975e1.js";import{B as h}from"./Button-61798ae4.js";import{b as L}from"./toggle-5eaae3c3.js";import{M as D}from"./Modal-93adda5d.js";import{s as w}from"./multiselect-a9aedead.js";import"./ApplicationLogo-59859b29.js";import"./XIcon-ca4bffb1.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./moment-fbc5633a.js";import"./VueFinalModal.esm-20951f36.js";/* empty css                                                              */const F={class:"md:grid md:grid-cols-2"},$={class:"md:mt-0 md:col-span-2"},N={class:"px-4 py-5 space-y-6 sm:p-6"},q={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},M={class:"sm:row-span-3"},A={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},B=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Programme Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),U={class:"grid grid-cols-2 sm:grid-cols-0 gap-0 sm:gap-4"},z={class:"mb-4"},E=e("label",{for:"programme_name",class:"block text-sm text-gray-700 font-bold"},[l(" Programme Name "),e("span",{class:"text-red-500"},"*")],-1),I={class:"mt-1 flex rounded-md shadow-sm"},H={class:"mb-4"},R=e("label",{for:"programme_country",class:"block text-sm text-gray-700 font-bold"},[l(" Programme Country "),e("span",{class:"text-red-500"},"*")],-1),G={class:"mt-1 flex rounded-md shadow-sm"},J=e("option",{value:""},"Select a country",-1),K=["value"],Q={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},W={class:"sm:row-span-3"},X={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},Y={class:"mb-5"},Z={class:"flex justify-between items-end"},ee=e("h1",{class:"text-indigo-800 font-bold"},"Programme Levels and Fees",-1),te=e("div",{class:"border-b border-dashed border-indigo-900 mt-3"},null,-1),oe={class:"overflow-hidden border border-gray-800 rounded-t-sm rounded-b-none mt-3"},re={class:"shadow shadow-gray-500 min-w-full divide-y divide-gray-800"},se=e("thead",{class:"bg-slate-700 text-white"},[e("tr",null,[e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Level"),e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Class Type"),e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Material Fee"),e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Fee"),e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Material"),e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Action")])],-1),ae={key:0},ie=e("td",{colspan:"8",class:"py-4 text-center font-semibold text-sm italic"},"No Fees added.",-1),le=[ie],de={else:"",class:"hover:bg-gray-200"},ne={class:"px-4 py-2 text-center border border-gray-400 text-sm text-gray-700"},ce={class:"px-4 py-2 text-center border border-gray-400 text-sm text-gray-700"},pe={class:"px-4 py-2 text-center border border-gray-400 text-sm text-gray-700"},ue={class:"px-4 py-2 text-center border border-gray-400 text-sm text-gray-700"},me={class:"flex"},fe={class:"text-sm text-gray-700"},_e={class:"font-semibold"},be={class:"px-4 py-2 text-left border border-gray-400"},ge={class:"flex flex-col"},he={class:"text-sm text-gray-700 font-normal underline"},ve={class:"font-semibold"},xe={class:"text-sm text-gray-700 italic"},ye={class:"font-semibold"},we={class:"text-sm text-gray-700 italic"},ke={class:"font-semibold"},Te={class:"px-4 py-2 text-center border border-gray-400"},Le={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},Se={class:"flex justify-between items-center"},Pe={class:"flex space-x-2"},Ve=e("label",{for:"programme_status",class:"block font-bold text-gray-700"},"Active",-1),Oe={class:"flex space-x-2"},je=e("h3",{class:"text-gray-900 text-xl font-semibold"}," Add New Fee ",-1),Ce={class:"overflow-y-auto p-6",ref:"scrollableDiv"},De={class:"flex flex-col space-y-4"},Fe={class:""},$e=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Fee Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),Ne={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4 items-end mb-3"},qe={class:"grow"},Me=e("label",{for:"programme_level",class:"block text-sm text-gray-700 font-bold"},[l(" Level "),e("span",{class:"text-red-500"},"*")],-1),Ae={class:"mt-1 flex rounded-md shadow-sm"},Be=e("option",{value:""},"Please select a level",-1),Ue=["value"],ze={class:"grow"},Ee=e("label",{for:"programme_material_fee",class:"block text-sm text-gray-700 font-bold"},[l(" Material Fee "),e("span",{class:"text-red-500"},"*")],-1),Ie={class:"mt-1 flex rounded-md shadow-sm"},He={class:"grow"},Re=e("label",{for:"class_type",class:"block text-sm text-gray-700 font-bold"},[l(" Class Type "),e("span",{class:"text-red-500"},"*")],-1),Ge={class:"mt-1 flex rounded-md shadow-sm"},Je=e("option",{value:""},"-- Select Type --",-1),Ke=["value"],Qe={class:"grow"},We={for:"class_type_detail",class:"block text-sm text-gray-700 font-bold"},Xe=e("span",{class:"text-red-500"},"*",-1),Ye={class:"mt-1 flex rounded-md shadow-sm"},Ze=["onUpdate:modelValue"],et={class:""},tt=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Material Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),ot={class:"grid grid-cols-1"},rt={class:"mb-4"},st=e("label",{for:"product_category",class:"block text-sm text-gray-700 font-bold mb-2"}," Product Name ",-1),at={class:"mt-1 flex rounded-md shadow-sm"},it={key:0,class:"mb-4"},lt=e("label",{for:"product_category",class:"block text-sm text-gray-700 font-bold mb-2"}," Variation ",-1),dt={class:"mt-1 flex rounded-md shadow-sm"},nt={key:1,class:"mb-4"},ct=e("label",{for:"product_category",class:"block text-sm text-gray-700 font-bold mb-2"}," Sub Variation ",-1),pt={class:"mt-1 flex rounded-md shadow-sm z-50"},ut={class:"flex justify-end space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},mt={components:{Head:T,Link:O,Toggle:L},data(){return{form:{programme_name:"",programme_country:"",programme_info:[],programme_active:!0},fee_form:{level:"",material_fee:0,class_type:"",fees:[]},show:{add_fee:!1,product_variations:!1,product_sub_variations:!1,add_tracking_status:!1},list:{products:[],product_variations:[],product_sub_variations:[],class_types_detail:[]},loading:{products:!1,product_variations:!1,product_sub_variations:!1},selected:{product:[],product_variation:[],product_sub_variation:[]},search_product_form:{product_id:"",product_variation_id:"",product_sub_variation_id:""},validation:{level:{required:!0,error:!1},material_fee:{required:!0,error:!1},class_type:{required:!0,error:!1},product:{required:!1,error:!1},product_variation:{required:!1,error:!1},product_sub_variation:{required:!1,error:!1}}}},watch:{"fee_form.class_type":{handler(){this.list.class_types_detail=[],this.fee_form.fees=[],this.$page.props.class_types_detail.forEach(r=>{r.class_type_id==this.fee_form.class_type&&(this.list.class_types_detail.push(r),this.fee_form.fees.push({class_type_detail_id:r.id,value:1}))})},deep:!0},"search_product_form.product_id":{handler(){this.search_product_form.product_id&&(this.selected.product=this.list.products.find(r=>r.id===this.search_product_form.product_id),this.show.product_variations=this.selected.product.has_variation==1,this.show.product_sub_variations=this.selected.product.has_sub_variation==1,this.search_product_form.product_variation_id="",this.search_product_form.product_sub_variation_id="",this.selected.product_variation=[],this.selected.product_sub_variation=[])}},"search_product_form.product_variation_id":{handler(){this.search_product_form.product_variation_id&&(this.selected.product_variation=this.list.product_variations.find(r=>r.id===this.search_product_form.product_variation_id),this.search_product_form.product_sub_variation_id="",this.selected.product_sub_variation=[])}},"search_product_form.product_sub_variation_id":{handler(){this.search_product_form.product_sub_variation_id&&(this.selected.product_sub_variation=this.list.product_sub_variations.find(r=>r.id===this.search_product_form.product_sub_variation_id))}}},methods:{submit(){this.$inertia.post(route("programmes.store"),this.form)},showAddFee(){this.search_product_form.product_id="",this.search_product_form.product_variation_id="",this.search_product_form.product_sub_variation_id="",this.list.products=[],this.list.product_variations=[],this.list.product_sub_variations=[],this.selected.product=[],this.selected.product_variation=[],this.selected.product_sub_variation=[],this.show.product_variations=!1,this.show.product_sub_variations=!1,this.validation.product.error=!1,this.validation.product_variation.required=!1,this.validation.product_variation.error=!1,this.validation.product_sub_variation.required=!1,this.validation.product_sub_variation.error=!1,this.show.add_fee=!0},addFee(){if(this.validation.level.error=this.fee_form.level=="",this.validation.material_fee.error=this.fee_form.material_fee==="",this.validation.class_type.error=this.fee_form.class_type=="",this.validation.product.error=!!(this.validation.product.required&&!Object.keys(this.selected.product).length),this.validation.product_variation.required=this.selected.product.has_variation==1,this.validation.product_variation.error=this.selected.product.has_variation==1&&!Object.keys(this.selected.product_variation).length,this.validation.product_sub_variation.required=this.selected.product.has_sub_variation==1,this.validation.product_sub_variation.error=this.selected.product.has_sub_variation==1&&!Object.keys(this.selected.product_sub_variation).length,this.validation.product.required&&!Object.keys(this.selected.product).length||this.validation.product_variation.required&&!Object.keys(this.selected.product_variation).length||this.validation.product_sub_variation.required&&!Object.keys(this.selected.product_sub_variation).length||this.fee_form.level==""||this.fee_form.material_fee==""||this.fee_form.class_type==""||this.fee_form.fees.length<1)return;const r=this.fee_form.fees;this.form.programme_info.push({level:this.fee_form.level,material_fee:this.fee_form.material_fee,class_type:this.fee_form.class_type,fees:r,product:this.selected.product,product_variation:this.selected.product_variation,product_sub_variation:this.selected.product_sub_variation}),this.form.programme_info.sort((t,s)=>t.level-s.level),this.clearForm(),this.show.add_fee=!1},deleteLevel(r){this.form.programme_info.splice(r,1)},numbersOnly(r){r=r||window.event;var t=r.which?r.which:r.keyCode;if(t>31&&(t<48||t>57)&&t!==46)r.preventDefault();else return!0},clearForm(){this.fee_form.level="",this.fee_form.material_fee="",this.fee_form.class_type="",this.fee_form.fees=[]},findProducts(r){r&&(this.loading.products=!0,axios.get(route("products.find_products"),{params:{keyword:r}}).then(t=>{this.list.products=t.data,this.loading.products=!1}).finally(()=>{this.scrollToEnd()}))},findProductVariations(){this.loading.product_variations=!0,axios.get(route("products.find_product_variations"),{params:{product_id:this.search_product_form.product_id}}).then(r=>{this.list.product_variations=r.data,this.loading.product_variations=!1}).finally(()=>{this.scrollToEnd()})},findProductSubVariations(){this.loading.product_sub_variations=!0,axios.get(route("products.find_product_sub_variations"),{params:{product_variation_id:this.search_product_form.product_variation_id}}).then(r=>{this.list.product_sub_variations=r.data,this.loading.product_sub_variations=!1}).finally(()=>{this.scrollToEnd()})},scrollToEnd(){setTimeout(()=>{const r=this.$refs.scrollableDiv;r.scrollTop=r.scrollHeight},10)}}},St=Object.assign(mt,{__name:"Create",setup(r){return(t,s)=>{const S=V("debounce");return a(),i(u,null,[d(g(T),{title:"Programmes"}),d(C,null,{header:c(()=>[]),default:c(()=>[e("div",F,[e("div",$,[e("form",{onSubmit:s[4]||(s[4]=j((...o)=>t.submit&&t.submit(...o),["prevent"]))},[e("div",N,[e("div",q,[e("div",M,[e("div",A,[B,e("div",U,[e("div",z,[E,e("div",I,[m(e("input",{type:"text",name:"programme_name",id:"programme_name",class:f(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.programme_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[0]||(s[0]=o=>t.form.programme_name=o),autocomplete:"off"},null,2),[[v,t.form.programme_name]])])]),e("div",H,[R,e("div",G,[m(e("select",{type:"text",name:"programme_country",id:"programme_country",class:f(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.programme_country?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[1]||(s[1]=o=>t.form.programme_country=o),autocomplete:"none"},[J,(a(!0),i(u,null,_(t.$page.props.countries,o=>(a(),i("option",{value:o.id},n(o.name),9,K))),256))],2),[[x,t.form.programme_country]])])])])])])]),e("div",Q,[e("div",W,[e("div",X,[e("div",Y,[e("div",Z,[ee,d(h,{buttonType:"info",onClick:t.showAddFee},{default:c(()=>[l("Add Fee")]),_:1},8,["onClick"])]),te]),e("div",oe,[e("table",re,[se,e("tbody",null,[t.form.programme_info.length?y("",!0):(a(),i("tr",ae,le)),(a(!0),i(u,null,_(t.form.programme_info,(o,p)=>(a(),i("tr",de,[e("td",ne,n(o.level),1),e("td",ce,n(t.$page.props.class_types[t.form.programme_info[p].class_type].name),1),e("td",pe,n(o.material_fee),1),e("td",ue,[(a(!0),i(u,null,_(o.fees,b=>{var k;return a(),i("div",me,[e("p",fe,[l(n((k=t.$page.props.class_types_detail.find(P=>P.id===b.class_type_detail_id))==null?void 0:k.label)+" : ",1),e("span",_e,n(b.value),1)])])}),256))]),e("td",be,[e("div",ge,[e("p",he,[e("span",ve,n(o.product.name),1)]),e("p",xe,[l("Variation : "),e("span",ye,n(o.product_variation.option_name?o.product_variation.option_name:"-"),1)]),e("p",we,[l("Sub Variation : "),e("span",ke,n(o.product_sub_variation.option_name?o.product_sub_variation.option_name:"-"),1)])])]),e("td",Te,[d(h,{buttonType:"danger",onClick:b=>t.deleteLevel(p)},{default:c(()=>[l("Delete")]),_:2},1032,["onClick"])])]))),256))])])])])])]),e("div",Le,[e("div",Se,[e("div",Pe,[Ve,d(g(L),{modelValue:t.form.programme_active,"onUpdate:modelValue":s[2]||(s[2]=o=>t.form.programme_active=o),id:"programme_status",classes:{container:"inline-block",toggle:"flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",toggleOn:"bg-green-500 border-green-500 justify-start text-white",toggleOff:"bg-gray-400 border-gray-400 justify-end text-gray-700"}},null,8,["modelValue"])]),e("div",Oe,[d(h,{buttonType:"gray",route:t.route("programmes")},{default:c(()=>[l("Cancel")]),_:1},8,["route"]),d(h,{onClick:s[3]||(s[3]=o=>t.submit())},{default:c(()=>[l("Save")]),_:1})])])])])],32)])]),d(D,{showModal:t.show.add_fee,modalType:"sm",onHideModal:s[14]||(s[14]=o=>t.show.add_fee=!1)},{header:c(()=>[je]),content:c(()=>[e("div",Ce,[e("div",De,[e("div",Fe,[$e,e("div",Ne,[e("div",qe,[Me,e("div",Ae,[m(e("select",{name:"programme_level",id:"programme_level",class:f(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.validation.level.error?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[5]||(s[5]=o=>t.fee_form.level=o),autocomplete:"off"},[Be,(a(),i(u,null,_(10,o=>e("option",{value:o},"Level "+n(o),9,Ue)),64))],2),[[x,t.fee_form.level]])])]),e("div",ze,[Ee,e("div",Ie,[m(e("input",{type:"number",min:"0",name:"programme_material_fee",id:"programme_material_fee",class:f(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.validation.material_fee.error?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[6]||(s[6]=o=>t.fee_form.material_fee=o),autocomplete:"off"},null,2),[[v,t.fee_form.material_fee]])])]),e("div",He,[Re,e("div",Ge,[m(e("select",{name:"class_type",id:"class_type",class:f(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.validation.class_type.error?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[7]||(s[7]=o=>t.fee_form.class_type=o),autocomplete:"off"},[Je,(a(!0),i(u,null,_(t.$page.props.class_types,(o,p)=>(a(),i("option",{value:o.id,key:p},n(o.name),9,Ke))),128))],2),[[x,t.fee_form.class_type]])])]),(a(!0),i(u,null,_(t.list.class_types_detail,(o,p)=>(a(),i("div",Qe,[e("label",We,[l(n(o.label)+" ",1),Xe]),e("div",Ye,[m(e("input",{type:"number",min:"1",name:"class_type_detail",id:"class_type_detail",class:f(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.class_type_detail?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":b=>t.fee_form.fees[p].value=b,autocomplete:"off"},null,10,Ze),[[v,t.fee_form.fees[p].value]])])]))),256))])]),e("div",et,[tt,e("div",ot,[e("div",rt,[st,e("div",at,[m(d(g(w),{ref:"multiselect",modelValue:t.search_product_form.product_id,"onUpdate:modelValue":s[8]||(s[8]=o=>t.search_product_form.product_id=o),onSelect:t.findProductVariations,onOpen:s[9]||(s[9]=o=>this.scrollToEnd()),valueProp:"id",loading:t.loading.products,placeholder:"Please enter some keywords",options:t.list.products,searchable:!0,noOptionsText:"Nothing found",noResultsText:"Nothing found",clearOnSelect:!0,canClear:!1,canDeselect:!1,"internal-search":!1,trackBy:"name",label:"name",classes:{container:t.validation.product.error?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white sm:text-sm leading-snug outline-none h-10":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white sm:text-sm leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full inset-0 outline-none focus:ring-0 appearance-none box-border border-0 sm:text-sm font-sans bg-white rounded-md pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","onSelect","loading","options","classes"]),[[S,t.findProducts,"1s"]])])]),t.show.product_variations?(a(),i("div",it,[lt,e("div",dt,[d(g(w),{modelValue:t.search_product_form.product_variation_id,"onUpdate:modelValue":s[10]||(s[10]=o=>t.search_product_form.product_variation_id=o),onSelect:t.findProductSubVariations,onOpen:s[11]||(s[11]=o=>this.scrollToEnd()),valueProp:"id",loading:t.loading.product_variations,placeholder:"Select a variation",options:t.list.product_variations,searchable:!0,noOptionsText:"Nothing found",noResultsText:"Nothing found",clearOnSelect:!0,canClear:!1,canDeselect:!1,"internal-search":!1,trackBy:"option_name",label:"option_name",classes:{container:t.validation.product_variation.error?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white sm:text-sm leading-snug outline-none h-10":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white sm:text-sm leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full inset-0 outline-none focus:ring-0 appearance-none box-border border-0 sm:text-sm font-sans bg-white rounded-md pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","onSelect","loading","options","classes"])])])):y("",!0),t.show.product_sub_variations?(a(),i("div",nt,[ct,e("div",pt,[d(g(w),{modelValue:t.search_product_form.product_sub_variation_id,"onUpdate:modelValue":s[12]||(s[12]=o=>t.search_product_form.product_sub_variation_id=o),onOpen:s[13]||(s[13]=o=>this.scrollToEnd()),valueProp:"id",loading:t.loading.product_sub_variations,placeholder:"Select a sub variation",options:t.list.product_sub_variations,searchable:!0,noOptionsText:"Nothing found",noResultsText:"Nothing found",clearOnSelect:!0,canClear:!1,canDeselect:!1,"internal-search":!1,trackBy:"option_name",label:"option_name",classes:{container:t.validation.product_sub_variation.error?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white sm:text-sm leading-snug outline-none h-10":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white sm:text-sm leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full inset-0 outline-none focus:ring-0 appearance-none box-border border-0 sm:text-sm font-sans bg-white rounded-md pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","loading","options","classes"])])])):y("",!0)])])])],512)]),footer:c(()=>[e("div",ut,[d(h,{buttonType:"info",onClick:t.addFee},{default:c(()=>[l("Add Fee")]),_:1},8,["onClick"])])]),_:1},8,["showModal"])]),_:1})],64)}}});export{St as default};
