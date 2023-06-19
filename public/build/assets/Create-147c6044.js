import{c as a,b as u,u as T,w as p,F as c,A as I,o as i,H as k,d as e,f as d,g,n,h as f,t as h,j as l,l as v,k as m,p as b,L as M}from"./app-7e1131d8.js";import{B as R}from"./Authenticated-62579bd6.js";import{B as y}from"./Button-f7adcb6c.js";import{r as U}from"./TrashIcon-0111cd83.js";import{V as $}from"./vue-draggable-next.esm-bundler-0f04dbdf.js";import{C as D}from"./ConfirmationModal-47156ee1.js";import x from"./SingleChoice-ef0a2c59.js";import q from"./MultipleChoices-953bc692.js";import C from"./MatrixSorting-01c77c16.js";import{x as L,I as V,y as B,S,g as A}from"./tabs-23b6dc31.js";/* empty css            */import"./ApplicationLogo-610d86ec.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./default.css_vue_type_style_index_0_src_true_lang-428857db.js";import"./transition-804fb40a.js";import"./use-resolve-button-type-2c84f7b6.js";const F={class:"md:grid md:grid-cols-2"},P={class:"md:mt-0 md:col-span-2"},j={class:"px-4 py-5 bg-indigo-100 space-y-6 sm:p-6 h-full"},E={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},N={class:"sm:row-span-3 space-y-2"},z={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},H=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),G={class:"mb-3"},O=e("label",{for:"category_id",class:"block text-sm text-gray-700 font-bold"},[m("Category"),e("span",{class:"text-red-500"},"*")],-1),Q={class:"mt-1 flex rounded-md shadow-sm"},Y=e("option",{value:"",selected:""},"Please select question's category",-1),J=["value"],W={class:"mb-3"},X=e("label",{for:"name",class:"block text-sm text-gray-700 font-bold"},"Redirection (Correct)",-1),K={class:"mt-1 flex rounded-md shadow-sm space-x-2"},Z=e("option",{value:""},"No redirection",-1),ee=["value"],oe={class:"mb-3"},se=e("label",{for:"name",class:"block text-sm text-gray-700 font-bold"},"Redirection (Wrong)",-1),te={class:"mt-1 flex rounded-md shadow-sm space-x-2"},re=e("option",{value:""},"No redirection",-1),ie=["value"],ae={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},de=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Questions"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),ne={class:"mb-5"},le={key:0,class:"bg-indigo-100 border-t-4 border-indigo-500 rounded-b text-indigo-900 px-4 py-3 shadow-md",role:"alert"},me=e("div",{class:"flex"},[e("div",{class:"py-1"},[e("svg",{class:"fill-current h-6 w-6 text-indigo-500 mr-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"})])]),e("div",null,[e("p",{class:"font-bold"},"In the question's input field, please wrap the answer keyword with [ ] for system to automatically replace the answer to blank spaces. "),e("p",{class:"text-indigo-600 font-semibold"},"ALFA like to [play] football."),e("br"),e("p",{class:"font-bold"},"Use | to set multiple correct answers."),e("p",{class:"text-indigo-600 font-semibold"},"ALFA like to [eat|drink|sleep].")])],-1),ce=[me],ue={class:"mb-3"},pe=e("label",{for:"question_type",class:"block text-sm text-gray-700 font-bold"},[m("Question Type"),e("span",{class:"text-red-500"},"*")],-1),ge={class:"mt-1 flex rounded-md shadow-sm"},fe=e("option",{value:"",selected:""},"Please select question's type",-1),he=["value"],_e={class:"mb-3"},be=e("label",{for:"question",class:"block text-sm text-gray-700 font-bold"},[m("Question"),e("span",{class:"text-red-500"},"*")],-1),ve={class:"mt-1 flex rounded-md shadow-sm"},ye={class:"mb-3"},we=e("label",{for:"remarks",class:"block text-sm text-gray-700 font-bold"},"Remarks / Additional notes",-1),ke={class:"mt-1 flex rounded-md shadow-sm"},xe={class:"mb-3"},qe=e("label",{for:"name",class:"block text-sm text-gray-700 font-bold"},"Question Image",-1),Ce={class:"space-y-1 text-center"},Te=e("svg",{class:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true"},[e("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Ie={class:"flex text-sm text-gray-600"},Me={class:"browse text-indigo-400 hover:text-indigo-800 cursor-pointer font-bold"},Re={ref:"inside_image",id:"file",class:"sr-only",type:"file",accept:"image/*"},Ue=e("p",{class:"pl-1"},"or drag and drop an image",-1),$e=e("p",{class:"text-xs text-gray-500"},"Image Format : PNG, JPG",-1),De={key:1,class:"w-1/4 relative group mt-2"},Le={class:"absolute w-full h-full hover:bg-black hover:opacity-75 hidden group-hover:block"},Ve=e("div",{class:"pl-[0.65rem]"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})])],-1),Be=e("span",{class:"text-white"},"Remove",-1),Se=[Ve,Be],Ae=["src"],Fe={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},Pe={class:"flex items-end justify-end space-x-2"},w=window.URL||window.webkitURL,je=/^image\/\w+$/,Ee=I({components:{Head:k,Link:M,TabGroup:L,TabList:V,Tab:B,TabPanels:S,TabPanel:A,ConfirmationModal:D,TrashIcon:U,draggable:$,SingleChoice:x,MultipleChoices:q,MatrixSorting:C},props:{redirect_url:String,diagnostic_test_id:String},data(){return{data:{type:Object,default:()=>({})},enabled:!0,isOpen:!1,showUpload:!0,showImage:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",dragging:!0,dtList:this.$page.props.diagnostic_test_list?this.$page.props.diagnostic_test_list:[],question_types:[{id:1,name:"Single Choice"},{id:2,name:"Multiple Choices"},{id:3,name:"Matrix Sorting"},{id:4,name:"Fill in the Blank"}],form:{dt_id:this.diagnostic_test_id?this.diagnostic_test_id:"",redirect_url:this.redirect_url?this.redirect_url:"",category_id:"",redirect_yes:"",redirect_no:"",question_type:"",question:"",remarks:"",image_url:"",image_file:"",question_answer_data:[]}}},methods:{submit(){this.$inertia.post(route("dt.settings.details.store"),this.form,{preserveState:!0})},read(r,o){return new Promise((t,s)=>{if(!r){t();return}je.test(r.type)?w?t({loaded:!0,name:r.name,type:r.type,url:w.createObjectURL(r)}):s(new Error("Your browser is not supported.")):s(new Error("Please select a valid image file."))})},change({target:r}){const{files:o}=r;o&&o.length>0&&this.read(o[0],r).then(t=>{this.form.image_url=t.url,this.form.image_file=o,this.showUpload=!1,this.showImage=!0,this.update(t)}).catch(this.alert)},dragover(r){r.preventDefault()},drop(r){const{files:o}=r.dataTransfer;r.preventDefault(),o&&o.length>0&&this.read(o[0],r).then(t=>{this.form.image_url=t.url,this.form.image_file=o,this.showUpload=!1,this.showImage=!0,this.update(t)}).catch(this.alert)},alert(r){window.alert(r&&r.message?r.message:r)},update(r){Object.assign(this.data,r)},removeImage(){this.form.image_url="",this.showImage=!1,this.showUpload=!0},appendToForm(r){this.form.question_answer_data=r}}}),ro=Object.assign(Ee,{__name:"Create",setup(r){return(o,t)=>(i(),a(c,null,[u(T(k),{title:"Diagnostic Test"}),u(R,null,{header:p(()=>[]),default:p(()=>[e("div",F,[e("div",P,[e("div",j,[e("div",E,[e("div",N,[e("div",z,[H,e("div",G,[O,e("div",Q,[d(e("select",{name:"category_id",id:"category_id",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.category_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[0]||(t[0]=s=>o.form.category_id=s),autocomplete:"off"},[Y,(i(!0),a(c,null,f(o.$page.props.diagnostic_test_categories,(s,_)=>(i(),a("option",{value:s.id,key:_},h(s.name),9,J))),128))],2),[[g,o.form.category_id]])])]),e("div",W,[X,e("div",K,[d(e("select",{class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.redirect_yes?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[1]||(t[1]=s=>o.form.redirect_yes=s),name:"",id:""},[Z,(i(!0),a(c,null,f(o.$page.props.diagnostic_test_list,s=>(i(),a("option",{value:s.id,key:s.id},h(s.question),9,ee))),128))],2),[[g,o.form.redirect_yes]])])]),e("div",oe,[se,e("div",te,[d(e("select",{class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.redirect_no?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[2]||(t[2]=s=>o.form.redirect_no=s),name:"",id:""},[re,(i(!0),a(c,null,f(o.$page.props.diagnostic_test_list,s=>(i(),a("option",{value:s.id,key:s.id},h(s.question),9,ie))),128))],2),[[g,o.form.redirect_no]])])])]),e("div",ae,[de,e("div",ne,[o.form.question_type==4?(i(),a("div",le,ce)):l("",!0)]),e("div",ue,[pe,e("div",ge,[d(e("select",{name:"question_type",id:"question_type",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.question_type?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[3]||(t[3]=s=>o.form.question_type=s),autocomplete:"off"},[fe,(i(!0),a(c,null,f(o.question_types,(s,_)=>(i(),a("option",{value:s.id,key:_},h(s.name),9,he))),128))],2),[[g,o.form.question_type]])])]),e("div",_e,[be,e("div",ve,[d(e("textarea",{id:"question",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.question?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[4]||(t[4]=s=>o.form.question=s),autocomplete:"off"},null,2),[[v,o.form.question]])])]),e("div",ye,[we,e("div",ke,[d(e("input",{type:"text",name:"remarks",id:"remarks",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.remarks?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[5]||(t[5]=s=>o.form.remarks=s),autocomplete:"off"},null,2),[[v,o.form.remarks]])])]),e("div",xe,[qe,o.showUpload?(i(),a("div",{key:0,class:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",onChange:t[6]||(t[6]=(...s)=>o.change&&o.change(...s)),onDragover:t[7]||(t[7]=(...s)=>o.dragover&&o.dragover(...s)),onDrop:t[8]||(t[8]=(...s)=>o.drop&&o.drop(...s))},[e("div",Ce,[Te,e("div",Ie,[e("label",Me,[m("Click here "),e("input",Re,null,512)]),Ue]),$e])],32)):l("",!0),o.showImage?(i(),a("div",De,[e("div",Le,[e("div",{class:"absolute cursor-pointer top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 h-16 w-16 hover:text-red-500 text-red-600 transition ease-in-out hover:-translate-1 hover:scale-110 duration-100",alt:"Remove Image",onClick:t[9]||(t[9]=(...s)=>o.removeImage&&o.removeImage(...s))},Se)]),e("img",{class:"rounded w-full",src:o.form.image_url,alt:""},null,8,Ae)])):l("",!0)])]),o.form.question_type==1?(i(),b(x,{key:0,onReceivedData:o.appendToForm,prop_answers:[],action:"create"},null,8,["onReceivedData"])):l("",!0),o.form.question_type==2?(i(),b(q,{key:1,onReceivedData:o.appendToForm,prop_answers:[],action:"create"},null,8,["onReceivedData"])):l("",!0),o.form.question_type==3?(i(),b(C,{key:2,onReceivedData:o.appendToForm,prop_answers:[],action:"create"},null,8,["onReceivedData"])):l("",!0),e("div",Fe,[e("div",Pe,[u(y,{buttonType:"gray",route:o.redirect_url},{default:p(()=>[m("Cancel")]),_:1},8,["route"]),u(y,{onClick:o.submit},{default:p(()=>[m("Save ")]),_:1},8,["onClick"])])])])])])])])]),_:1})],64))}});export{ro as default};
