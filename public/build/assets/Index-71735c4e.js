import{B as h}from"./Authenticated-a708b2f1.js";import{B as c}from"./Button-adbdcb5d.js";import{c as i,a as s,u as g,w as o,F as u,o as d,H as x,b as e,i as n,h as y,r as f,t as _,V as w}from"./app-000073dc.js";import{P as v}from"./Pagination-fe8c34c0.js";import"./ApplicationLogo-c467815e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./default.css_vue_type_style_index_0_src_true_lang-5cc9651b.js";/* empty css            */const b={class:"py-4 px-4"},k={class:"overflow-x-auto"},C={class:"mx-auto"},B={class:"align-middle inline-block min-w-full px-2"},N={class:"flex justify-between mb-4"},V=e("div",{class:"flex space-x-2"},null,-1),D={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},P={class:"min-w-full divide-y divide-gray-200"},j=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/14"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),A={class:"bg-white divide-y divide-gray-200"},E={key:0},F=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),T=[F],z={class:"px-6 py-4 whitespace-nowrap"},H={class:"text-sm text-gray-700"},I={class:"px-6 py-4 whitespace-nowrap"},L={class:"text-sm font-medium text-gray-900"},$={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},O={class:"flex justify-center"},R={class:"flex pr-1"},S={class:"flex"},Y={__name:"Index",props:{categories:{type:Object}},setup(r){const m=t=>{w.Inertia.visit(route("product-categories.destroy",t),{method:"delete"})};return(t,l)=>(d(),i(u,null,[s(g(x),{title:"Product Category"}),s(h,null,{header:o(()=>[]),default:o(()=>[e("div",b,[e("div",k,[e("div",C,[e("div",B,[e("div",N,[V,s(c,{route:t.route("product-categories.create"),onClick:l[0]||(l[0]=a=>t.newAdmission(t.params.centre_id))},{default:o(()=>[n("New Product Category")]),_:1},8,["route"])]),e("div",D,[e("table",P,[j,e("tbody",A,[r.categories.data.length?y("",!0):(d(),i("tr",E,T)),(d(!0),i(u,null,f(r.categories.data,(a,p)=>(d(),i("tr",{class:"hover:bg-gray-200",key:p},[e("td",z,[e("div",H,_(++p),1)]),e("td",I,[e("div",L,_(a.name),1)]),e("td",$,[e("div",O,[e("div",R,[s(c,{route:t.route("product-categories.edit",a.id),buttonType:"warning",title:"Edit Category"},{default:o(()=>[n(" Edit ")]),_:2},1032,["route"])]),e("div",S,[s(c,{onClick:q=>m(a.id),buttonType:"danger",title:"Delete Category"},{default:o(()=>[n(" Delete ")]),_:2},1032,["onClick"])])])])]))),128))])]),s(v,{page_data:r.categories},null,8,["page_data"])])])])])])]),_:1})],64))}};export{Y as default};
