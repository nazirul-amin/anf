import{c as a,a as n,u as i,w as d,F as c,H as f,L as m,o as r,b as e,d as _,r as h,t as l,i as y,h as u,e as b,f as x,n as v}from"./app-5e7199e3.js";import{B as w}from"./Authenticated-54e21821.js";import{B as k}from"./Button-2142c334.js";import{h as g}from"./default.css_vue_type_style_index_0_src_true_lang-280a1abf.js";/* empty css            */import"./ApplicationLogo-66f57c9a.js";import"./_plugin-vue_export-helper-c27b6911.js";const S={class:"md:grid md:grid-cols-2"},M={class:"md:mt-0 md:col-span-2"},T={class:"px-4 py-5 bg-indigo-50 space-y-2 sm:p-6"},B={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},L={class:"sm:row-span-3"},C={class:"items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-md h-fit"},D={class:"flex justify-center"},Y={class:"mb-5"},$=["src"],j=e("div",{class:"mb-8 flex justify-center"},[e("h1",{class:"font-semibold font-mono text-lg sm:text-2xl"},"ALFA and Friends Diagnostic Test")],-1),N={key:0,class:"flex-col px-6 py-14 rounded-[4px] min-w-[80%] lg:min-w-[25%] space-y-4"},A={class:"w-full border-collapse bg-white text-left text-sm text-gray-500"},V=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900"},"Name"),e("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900"},"Age"),e("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900"},"Date of Birth"),e("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900 text-center"},"Action")])],-1),F={class:"divide-y divide-gray-100"},z={class:"hover:bg-gray-50"},H={class:"border px-6 py-4 text-slate-700"},O={class:"border px-6 py-4 text-slate-700"},E={class:"border px-6 py-4 text-slate-700"},P={class:"border px-6 py-4"},U={class:"flex justify-center gap-4"},W={key:1,class:"flex px-6 py-14 justify-center"},q={class:"flex flex-col w-1/2 p-6"},G={class:"flex flex-col text-sm rounded-md space-y-2"},I=e("label",{class:"block text-sm text-gray-700 font-bold",for:""},"Language",-1),J=e("option",{value:""},"Please select",-1),K=["value"],Q={class:"flex flex-col space-y-2"},R={components:{Head:f,Link:m},data(){return{showMain:!0,showSelectLanguage:!1,canStartTest:!1,dt_list:[],form:{child_id:"",child_age:"",language:""},error:{name:!1,age:!1,language:!1}}},watch:{"form.language":{handler(){this.form.language!=""?this.canStartTest=!0:this.canStartTest=!1}}},methods:{startTest(){this.$inertia.post(route("diagnostic_test.run"),{form_data:this.form})},selectChild(p,t){this.form.child_id=p,this.form.child_age=t,this.showMain=!1,this.showSelectLanguage=!0},back(){this.showMain=!0,this.showSelectLanguage=!1}}},le=Object.assign(R,{__name:"Main",setup(p){return(t,o)=>(r(),a(c,null,[n(i(f),{title:"Diagnostic Test"}),n(w,null,{header:d(()=>[]),default:d(()=>[e("div",S,[e("div",M,[e("form",{onSubmit:o[3]||(o[3]=_((...s)=>t.submit&&t.submit(...s),["prevent"]))},[e("div",T,[e("div",B,[e("div",L,[e("div",C,[e("div",D,[e("div",Y,[e("img",{class:"h-24 w-24",src:"/images/anf-logo-main-2x.png",alt:"Workflow logo"},null,8,$)])]),j,t.showMain?(r(),a("div",N,[e("table",A,[V,e("tbody",F,[t.$page.props.children.length?(r(!0),a(c,{key:0},h(t.$page.props.children,(s,X)=>(r(),a("tr",z,[e("td",H,l(s.name),1),e("td",O,l(i(g)().diff(s.date_of_birth,"years"))+" Years Old",1),e("td",E,l(i(g)(s.date_of_birth,"YYYY.MM.DD").format("DD-MM-YYYY")),1),e("td",P,[e("div",U,[n(k,{buttonType:"blue",onClick:Z=>t.selectChild(s.id,i(g)().diff(s.date_of_birth,"years"))},{default:d(()=>[y("Select Student")]),_:2},1032,["onClick"])])])]))),256)):u("",!0)])])])):u("",!0),t.showSelectLanguage?(r(),a("div",W,[e("div",q,[e("div",G,[I,b(e("select",{class:"mb-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none focus:ring-0 focus:border-gray-500","onUpdate:modelValue":o[0]||(o[0]=s=>t.form.language=s)},[J,(r(!0),a(c,null,h(t.$page.props.languages,s=>(r(),a("option",{value:s.id},l(s.name),9,K))),256))],512),[[x,t.form.language]])]),e("div",Q,[e("button",{type:"button",class:v(["mt-5 w-full border p-2 text-white rounded-[4px] bg-gray-700 hover:bg-gray-600",t.canStartTest?"opacity-100":"cursor-not-allowed opacity-50"]),onClick:o[1]||(o[1]=s=>t.canStartTest?t.startTest():"")},"Start Now",2),e("button",{type:"button",class:"rounded py-2 px-4 bg-gray-300 hover:bg-gray-200",onClick:o[2]||(o[2]=s=>t.back())},"Back")])])])):u("",!0)])])])])],32)])])]),_:1})],64))}});export{le as default};
