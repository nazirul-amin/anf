import{o as n,c as l,d as e,D as B,E as C,q as b,F as u,h as m,j as U,t as v,k as V,f as _,l as f,b as y,w as P,e as D}from"./app-61478c17.js";import{B as E}from"./Button-456501f9.js";import N from"./VariationOption-23655aa4.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const F=p=>(B("data-v-ce9c3a7c"),p=p(),C(),p),T={class:"relative"},M={key:0,class:"relative w-24 h-24"},R=["src"],q={key:1,class:"w-24 h-24 border-2 border-dashed border-gray-400 flex items-center justify-center"},z=F(()=>e("p",{class:"text-gray-400"},"+",-1)),L=[z],K={__name:"UploadPreview",props:{previewUrl:{required:!0}},emits:["update:value"],setup(p,{emit:d}){return(o,x)=>(n(),l("div",null,[e("div",T,[e("input",{type:"file",class:"absolute inset-0 w-full h-full opacity-0 cursor-pointer",onInput:x[0]||(x[0]=g=>d("update:value",g.target.files[0]))},null,32),p.previewUrl?(n(),l("div",M,[e("img",{src:p.previewUrl,alt:"Preview",class:"object-cover w-full h-full"},null,8,R)])):(n(),l("div",q,L))])]))}},$=A(K,[["__scopeId","data-v-ce9c3a7c"]]),G={class:"w-full"},H={class:"flex"},J={class:"w-full bg-white shadow-md rounded-md overflow-hidden"},Q={class:"mb-4"},W=["for"],X=e("span",{class:"text-red-500"},"*",-1),Y={class:"mt-1 flex rounded-md shadow-sm"},Z=["name","id","onUpdate:modelValue"],ee={class:"mb-4"},te=e("hr",{class:"bg-gray-500 mx-auto my-4"},null,-1),oe={class:"flex items-center justify-end py-2"},se={class:"flex items-center justify-center my-10"},ae=e("span",{class:"text-center"},"Add variation",-1),ne=[ae],le={class:"min-w-full divide-y divide-gray-200"},ie={class:"bg-gray-300"},re={scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-3/12"},ce={key:0,scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-3/12"},de=e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Price",-1),pe=e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Stock",-1),ue=e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"SKU",-1),me={class:"bg-white divide-y divide-gray-200"},_e={class:"px-6 py-4 whitespace-nowrap"},fe={class:"flex flex-col items-center p-2 m-2"},he=["for"],ve={class:"px-6 py-4 whitespace-nowrap"},xe={class:"text-sm font-medium text-gray-900"},ye=["name","id","onUpdate:modelValue"],ge={class:"px-6 py-4 whitespace-nowrap"},we={class:"text-sm font-medium text-gray-900"},ke=["name","id","onUpdate:modelValue"],be={class:"px-6 py-4 whitespace-nowrap"},Ue={class:"text-sm font-medium text-gray-900"},Ve=["name","id","onUpdate:modelValue"],$e={class:"px-6 py-4 whitespace-nowrap"},Ie={class:"flex flex-col items-center p-2 m-2"},Se=["for"],je={class:"px-6 py-4 whitespace-nowrap"},Oe=["for"],Be={class:"px-6 py-4 whitespace-nowrap"},Ce=["name","id","onUpdate:modelValue"],Pe={class:"px-6 py-4 whitespace-nowrap"},De=["name","id","onUpdate:modelValue"],Ee={class:"px-6 py-4 whitespace-nowrap"},Ne=["name","id","onUpdate:modelValue"],Ae={__name:"Variation",emits:["update:variation","delete:variation"],setup(p,{emit:d}){const o=b([{name:"variation 1",options:[{name:"",image:"",url:"",row:[{name:"",price:"",stock:"",sku:""}]}]}]);b(o.value);const x=()=>{o.value.push({name:"variation 2",options:[{name:""}]}),d("update:variation",o.value)},g=i=>{o.value.splice(i,1),d("update:variation",o.value),o.value.length==0&&d("delete:variation")},I=i=>{o.value.length==1?o.value[0].options.push({name:"",image:"",url:"",row:[{name:"",price:"",stock:"",sku:""}]}):(o.value[0].options.forEach(r=>{r.row.push({name:"",price:"",stock:"",sku:""})}),o.value[i].options.push({name:""})),d("update:variation",o.value)},S=i=>{o.value.length!=1&&o.value[0].options.forEach(r=>{r.row[i.index].name=i.variationOptions[i.index].name}),d("update:variation",o.value)},j=(i,r)=>{o.value[i].options.splice(r,1),d("update:variation",o.value)},O=(i,r)=>{o.value[i].options.splice(r,1,{name:"",options:[{name:"",price:"",stock:"",sku:""}]}),d("update:variation",o.value)},w=(i,r,s)=>{if(i){const a=new FileReader;a.onload=()=>{k(r,a.result,s,i)},a.readAsDataURL(i)}else k(r,null,s,"")},k=(i,r,s,a)=>{o.value[s].options.forEach(t=>{t.name===i&&(t.url=r,t.image=a)})};return(i,r)=>(n(),l("div",G,[e("div",H,[e("div",J,[(n(!0),l(u,null,m(o.value,(s,a)=>(n(),l("div",{key:a,class:"border-b border-gray-200 px-4 py-6"},[e("div",Q,[e("label",{for:"variation_"+a,class:"block text-sm text-gray-700 font-bold"},[V(" Name "),X],8,W),e("div",Y,[_(e("input",{onInput:r[0]||(r[0]=t=>d("update:variation",o.value)),type:"text",name:"variation_"+a,id:"variation_"+a,class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm","onUpdate:modelValue":t=>s.name=t,autocomplete:"off"},null,40,Z),[[f,s.name]])])]),e("div",ee,[y(N,{options:s.options,variationIndex:a,"onAdd:option":I,"onRemove:option":j,"onAdd:variation":O,"onUpdate:variation":r[1]||(r[1]=t=>S(t))},null,8,["options","variationIndex"])]),te,e("div",oe,[y(E,{onClick:D(t=>g(a),["stop"]),buttonType:"danger"},{default:P(()=>[V("Delete")]),_:2},1032,["onClick"])])]))),128))])]),e("div",se,[o.value.length<2?(n(),l("div",{key:0,onClick:x,class:"w-full text-center border border-solid border-black hover:bg-gray-100 cursor-pointer px-6 py-4"},ne)):U("",!0)]),e("table",le,[e("thead",ie,[e("tr",null,[e("th",re,v(o.value[0].name),1),o.value[1]?(n(),l("th",ce,v(o.value[1].name),1)):U("",!0),de,pe,ue])]),e("tbody",me,[o.value.length==1?(n(!0),l(u,{key:0},m(o.value[0].options,(s,a)=>(n(),l("tr",{class:"hover:bg-gray-200",key:a},[e("td",_e,[e("div",fe,[y($,{previewUrl:s.url,"onUpdate:value":t=>w(t,s.name,a)},null,8,["previewUrl","onUpdate:value"]),e("label",{for:s.name,class:"text-sm text-gray-500 text-center"},v(s.name),9,he)])]),e("td",ve,[e("div",xe,[_(e("input",{type:"text",placeholder:"input",name:"variation_option_price"+a,id:"variation_option_price"+a,class:"focus:ring-0 focus:border-indigo-300 flex-1 block sm:text-sm","onUpdate:modelValue":t=>s.price=t,autocomplete:"off"},null,8,ye),[[f,s.price]])])]),e("td",ge,[e("div",we,[_(e("input",{type:"text",placeholder:"0",name:"variation_option_stock"+a,id:"variation_option_stock"+a,class:"focus:ring-0 focus:border-indigo-300 flex-1 block sm:text-sm","onUpdate:modelValue":t=>s.stock=t,autocomplete:"off"},null,8,ke),[[f,s.stock]])])]),e("td",be,[e("div",Ue,[_(e("input",{type:"text",placeholder:"input",name:"variation_option_sku"+a,id:"variation_option_sku"+a,class:"focus:ring-0 focus:border-indigo-300 flex-1 block sm:text-sm","onUpdate:modelValue":t=>s.sku=t,autocomplete:"off"},null,8,Ve),[[f,s.sku]])])])]))),128)):(n(!0),l(u,{key:1},m(o.value[0].options,(s,a)=>(n(),l("tr",{class:"hover:bg-gray-200",key:a},[e("td",$e,[e("div",Ie,[y($,{previewUrl:s.url,"onUpdate:value":t=>w(t,s.name,a)},null,8,["previewUrl","onUpdate:value"]),e("label",{for:s.name,class:"text-sm text-gray-500 text-center"},v(s.name),9,Se)])]),e("td",je,[(n(!0),l(u,null,m(o.value[1].options,(t,c)=>(n(),l("div",{class:"flex flex-col items-center p-2 m-2",key:c},[e("label",{for:t.name,class:"text-sm text-gray-500 text-center"},v(t.name),9,Oe)]))),128))]),e("td",Be,[(n(!0),l(u,null,m(s.row,(t,c)=>(n(),l("div",{key:c,class:"text-sm font-medium text-gray-900 mb-2"},[_(e("input",{type:"text",placeholder:"input",name:"variation_option_price"+c,id:"variation_option_price"+c,class:"focus:ring-0 focus:border-indigo-300 flex-1 block sm:text-sm","onUpdate:modelValue":h=>t.price=h,autocomplete:"off"},null,8,Ce),[[f,t.price]])]))),128))]),e("td",Pe,[(n(!0),l(u,null,m(s.row,(t,c)=>(n(),l("div",{key:c,class:"text-sm font-medium text-gray-900 mb-2"},[_(e("input",{type:"text",placeholder:"0",name:"variation_option_stock"+c,id:"variation_option_stock"+c,class:"focus:ring-0 focus:border-indigo-300 flex-1 block sm:text-sm","onUpdate:modelValue":h=>t.stock=h,autocomplete:"off"},null,8,De),[[f,t.stock]])]))),128))]),e("td",Ee,[(n(!0),l(u,null,m(s.row,(t,c)=>(n(),l("div",{key:c,class:"text-sm font-medium text-gray-900 mb-2"},[_(e("input",{type:"text",placeholder:"input",name:"variation_option_sku"+c,id:"variation_option_sku"+c,class:"focus:ring-0 focus:border-indigo-300 flex-1 block sm:text-sm","onUpdate:modelValue":h=>t.sku=h,autocomplete:"off"},null,8,Ne),[[f,t.sku]])]))),128))])]))),128))])])]))}},qe=Object.freeze(Object.defineProperty({__proto__:null,default:Ae},Symbol.toStringTag,{value:"Module"}));export{$ as U,qe as V,Ae as _};
