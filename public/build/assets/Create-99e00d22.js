import{c as i,a as r,u as l,w as d,F as n,L as b,o as a,H as f,b as e,d as _,e as m,l as h,n as u,f as v,r as y,t as w,i as c}from"./app-1ddf5d3d.js";import{B as x}from"./Authenticated-67bb5d5b.js";import{B as g}from"./Button-5dcf5bee.js";import{b as p}from"./toggle-e7f0e356.js";/* empty css            */import"./ApplicationLogo-4104d605.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./default.css_vue_type_style_index_0_src_true_lang-b3e86f46.js";const k={class:"md:grid md:grid-cols-2"},B={class:"md:mt-0 md:col-span-2"},V={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},S={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},j={class:"sm:row-span-3"},C={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},L=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Role Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),N={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},T={class:"mb-4"},$=e("label",{for:"display_name",class:"block text-sm font-bold text-gray-700"},"Name",-1),z={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},M={class:"mb-4"},O=e("label",{for:"display_name",class:"block text-sm font-bold text-gray-700"},"Group",-1),U=["value"],D=e("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1),F={class:"flex justify-between mt-4 items-center"},H={class:""},R=e("label",{for:"",class:"font-sm pr-3"},"Status",-1),A={class:"flex flex-row-reverse items-center"},E={class:"flex space-x-2"},G={components:{Link:b,Toggle:p},data(){return{form:{display_name:"",role_group:1,status:!0}}},methods:{submit(){this.$inertia.post(route("roles.store"),this.form)}}},ee=Object.assign(G,{__name:"Create",setup(I){return(s,t)=>(a(),i(n,null,[r(l(f),{title:"Roles"}),r(x,null,{header:d(()=>[]),default:d(()=>[e("div",k,[e("div",B,[e("form",{onSubmit:t[3]||(t[3]=_((...o)=>s.submit&&s.submit(...o),["prevent"]))},[e("div",V,[e("div",S,[e("div",j,[e("div",C,[L,e("div",N,[e("div",T,[$,m(e("input",{type:"text",class:u(["mt-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.display_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[0]||(t[0]=o=>s.form.display_name=o)},null,2),[[h,s.form.display_name]])])]),e("div",z,[e("div",M,[O,m(e("select",{name:"",id:"",class:u(["mt-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.role_group?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[1]||(t[1]=o=>s.form.role_group=o)},[(a(!0),i(n,null,y(s.$page.props.role_groups,(o,q)=>(a(),i("option",{value:o.id,key:o.id},w(o.name),9,U))),128))],2),[[v,s.form.role_group]])])]),D,e("div",F,[e("div",H,[R,r(l(p),{modelValue:s.form.status,"onUpdate:modelValue":t[2]||(t[2]=o=>s.form.status=o),classes:{container:"inline-block",toggle:"flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",toggleOn:"bg-green-500 border-green-500 justify-start text-white",toggleOff:"bg-gray-400 border-gray-400 justify-end text-gray-700"}},null,8,["modelValue"])]),e("div",A,[e("div",E,[r(g,{buttonType:"gray",route:s.route("roles")},{default:d(()=>[c(" Cancel ")]),_:1},8,["route"]),r(g,{type:"submit",disabled:s.form.processing},{default:d(()=>[c(" Save ")]),_:1},8,["disabled"])])])])])])])])],32)])])]),_:1})],64))}});export{ee as default};
