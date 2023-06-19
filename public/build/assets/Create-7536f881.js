import{q as C,o as l,c as i,F as P,h as j,f as y,ac as q,d as e,t as I,D as E,E as z,m as M,b as u,u as r,w as p,H as Y,e as T,n as f,j as g,l as k,g as Z,k as n,p as $}from"./app-7e1131d8.js";import{B as G}from"./Authenticated-62579bd6.js";import{B as b}from"./Button-f7adcb6c.js";import{_ as N}from"./ValidationErrors-be3953e1.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import{M as J}from"./Modal-50cd9aee.js";import{_ as K}from"./Variation-144fcb81.js";/* empty css            */import"./ApplicationLogo-610d86ec.js";import"./default.css_vue_type_style_index_0_src_true_lang-428857db.js";import"./VueFinalModal.esm-2dcf723b.js";const Q={class:"toggle-radio"},W=["id","value"],X=["for"],ee={__name:"ToggleRadio",props:{options:{type:Array,required:!0},value:{type:String,required:!0}},emits:["update:value"],setup(c,{emit:a}){const s=c,m=C(s.value),_=x=>{m.value=x,a("update:value",x)};return(x,h)=>(l(),i("div",Q,[(l(!0),i(P,null,j(s.options,(U,d)=>(l(),i("div",{key:d,class:"toggle-radio-option"},[y(e("input",{type:"radio",id:"option-"+d,value:U.value,"onUpdate:modelValue":h[0]||(h[0]=w=>m.value=w),onChange:h[1]||(h[1]=w=>_(m.value))},null,40,W),[[q,m.value]]),e("label",{for:"option-"+d},I(U.label),9,X)]))),128))]))}},F=O(ee,[["__scopeId","data-v-37dd1be2"]]);const te=c=>(E("data-v-ce9c3a7c"),c=c(),z(),c),oe={class:"relative"},se={key:0,class:"relative w-24 h-24"},de=["src"],ae={key:1,class:"w-24 h-24 border-2 border-dashed border-gray-400 flex items-center justify-center"},le=te(()=>e("p",{class:"text-gray-400"},"+",-1)),re=[le],ie={__name:"UploadPreview",props:{previewUrl:{required:!0}},emits:["update:value"],setup(c,{emit:a}){return(s,m)=>(l(),i("div",null,[e("div",oe,[e("input",{type:"file",class:"absolute inset-0 w-full h-full opacity-0 cursor-pointer",onInput:m[0]||(m[0]=_=>a("update:value",_.target.files[0]))},null,32),c.previewUrl?(l(),i("div",se,[e("img",{src:c.previewUrl,alt:"Preview",class:"object-cover w-full h-full"},null,8,de)])):(l(),i("div",ae,re))])]))}},ne=O(ie,[["__scopeId","data-v-ce9c3a7c"]]),ce={class:"md:grid md:grid-cols-2"},ue={class:"md:mt-0 md:col-span-2"},pe=["onSubmit"],me={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},_e={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},ve={class:"sm:row-span-3"},fe={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},ge=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"New Product"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),be={class:"p-10"},ye={class:"md:flex items-center justify-center border-b pb-6 border-gray-200 mb-4"},xe={class:"px-10"},he={key:0},we=e("h1",{tabindex:"0",role:"heading","aria-label":"profile information",class:"focus:outline-none text-3xl font-bold text-gray-800 mb-9"}," Choose Product Type ",-1),ke={class:"my-4"},Ce={key:1},Ue={class:"mb-4"},$e=e("label",{for:"category_name",class:"block text-sm text-gray-700 font-bold mb-2"},[n(" Product Images "),e("span",{class:"text-red-500"},"*")],-1),Pe={class:"flex flex-wrap justify-center"},Ie=["for"],Se={class:"mb-4"},Ve=e("label",{for:"product_name",class:"block text-sm text-gray-700 font-bold mb-2"},[n(" Product Name "),e("span",{class:"text-red-500"},"*")],-1),Te={class:"mt-1 flex rounded-md shadow-sm"},je={class:"mb-4"},Be=e("label",{for:"product_description",class:"block text-sm text-gray-700 font-bold mb-2"},[n(" Product Description "),e("span",{class:"text-red-500"},"*")],-1),Me={class:"mt-1 flex rounded-md shadow-sm"},Ne={class:"mb-4"},Fe=e("label",{for:"product_category",class:"block text-sm text-gray-700 font-bold mb-2"},[n(" Product Category "),e("span",{class:"text-red-500"},"*")],-1),Oe={class:"mt-1 flex rounded-md shadow-sm"},Ae=e("option",{value:""},"Please Select",-1),De=["value"],Re={key:2},He={class:"mb-6"},Le={key:0},qe={class:"mb-4"},Ee=e("label",{for:"product_price",class:"block text-sm text-gray-700 font-bold"},[n(" Price "),e("span",{class:"text-red-500"},"*")],-1),ze={class:"mt-1 flex rounded-md shadow-sm"},Ye={class:"mb-4"},Ze=e("label",{for:"product_stock",class:"block text-sm text-gray-700 font-bold"},[n(" Stock "),e("span",{class:"text-red-500"},"*")],-1),Ge={class:"mt-1 flex rounded-md shadow-sm"},Je={key:1},Ke={class:"flex items-center justify-between space-x-2"},Qe=e("svg",{class:"ml-3",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z",fill:"currentColor"})],-1),We=e("h3",{class:"text-gray-900 text-xl font-semibold"}," Add New Product Category ",-1),Xe={class:"p-6 grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},et={class:"mb-4"},tt=e("label",{for:"category_name",class:"block text-sm text-gray-700 font-bold"},[n(" Product Category Name "),e("span",{class:"text-red-500"},"*")],-1),ot={class:"mt-1 flex rounded-md shadow-sm"},st={class:"flex justify-end space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},vt={__name:"Create",props:{product:{type:Object},productImages:{type:Object},categories:{type:Object}},setup(c){const a=c,s=C(1),m=C("diy"),_=C(!1),x=C([{label:"Cover Image",name:"product_cover_image",value:null},{label:"Image 1",name:"product_image_1",value:null},{label:"Image 2",name:"product_image_2",value:null},{label:"Image 3",name:"product_image_3",value:null},{label:"Image 4",name:"product_image_4",value:null},{label:"Image 5",name:"product_image_5",value:null},{label:"Image 6",name:"product_image_6",value:null}]),h=[{label:"Enable Variation",value:"enabled"},{label:"Disable Variation",value:"disabled"}],U=[{label:"Create Your Own Product",value:"diy"},{label:"Alfa and Friends Products",value:"default"}],d=M({product_name:a.product?a.product.name:"",product_description:a.product?a.product.description:"",product_category:a.product?a.product.product_category_id:"",product_price:a.product?a.product.price:"",product_stock:a.product?a.product.stock:"",product_cover_image:"",product_image_1:"",product_image_2:"",product_image_3:"",product_image_4:"",product_image_5:"",product_image_6:"",product_variation:a.product?a.product.name:"disabled",product_variation_items:a.product?a.product.name:[]}),w=M({category_name:""}),A=a.product?route("products.update",a.product.id):route("products.store"),D=a.product?"put":"post",S=v=>{s.value=v},R=(v,o)=>{if(v){const t=new FileReader;t.onload=()=>{B(o,t.result)},t.readAsDataURL(v),d[o]=v}else B(o,null)},B=(v,o)=>{x.value.forEach(t=>{t.name===v&&(t.value=o)})},H=()=>{d[D](A,{onSuccess:()=>d.reset()})},L=()=>{w.post(route("product-categories.store"),{onSuccess:()=>{form.reset(),_.value=!1}})};return(v,o)=>(l(),i(P,null,[u(r(Y),{title:"Product"}),u(G,null,{header:p(()=>[]),default:p(()=>[e("div",ce,[e("div",ue,[e("form",{onSubmit:T(H,["prevent"])},[e("div",me,[e("div",_e,[e("div",ve,[e("div",fe,[ge,e("div",be,[u(N,{class:"mb-4"}),e("div",ye,[e("div",{class:f(["flex items-center md:mt-0 mt-4",{"cursor-pointer":s.value!=1}]),onClick:o[0]||(o[0]=t=>S(1))},[e("div",{class:f(["w-full h-full p-4 rounded flex items-center justify-center",{"bg-indigo-700":s.value===1}])},[e("p",{class:f(["text-base font-medium leading-4 text-gray-800",{"text-white":s.value===1}])}," Product Type ",2)],2)],2),e("div",{class:f(["flex items-center md:mt-0 mt-4 md:ml-12",{"cursor-pointer":s.value!=2}]),onClick:o[1]||(o[1]=t=>S(2))},[e("div",{class:f(["w-full h-full p-4 rounded flex items-center justify-center",{"bg-indigo-700":s.value===2}])},[e("p",{class:f(["text-base ml-3 font-medium leading-4 text-gray-800",{"text-white":s.value===2}])}," Basic Information ",2)],2)],2),e("div",{class:f(["flex items-center md:mt-0 mt-4 md:ml-12",{"cursor-pointer":s.value!=3}]),onClick:o[2]||(o[2]=t=>S(3))},[e("div",{class:f(["w-full h-full p-4 rounded flex items-center justify-center",{"bg-indigo-700":s.value===3}])},[e("p",{class:f(["text-base ml-3 font-medium leading-4 text-gray-800",{"text-white":s.value===3}])}," Sales Information ",2)],2)],2)]),e("div",xe,[s.value===1?(l(),i("div",he,[we,e("div",ke,[u(F,{options:U,value:m.value,"onUpdate:value":o[3]||(o[3]=t=>{m.value=t})},null,8,["value"])])])):g("",!0),s.value===2?(l(),i("div",Ce,[e("div",Ue,[$e,e("div",Pe,[(l(!0),i(P,null,j(x.value,t=>(l(),i("div",{key:t.name,class:"flex flex-col items-center p-2 m-2"},[u(ne,{previewUrl:t.value,"onUpdate:value":V=>R(V,t.name)},null,8,["previewUrl","onUpdate:value"]),e("label",{for:t.label,class:"text-sm text-gray-500 text-center"},I(t.label),9,Ie)]))),128))])]),e("div",Se,[Ve,e("div",Te,[y(e("input",{type:"text",name:"product_name",id:"product_name",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm","onUpdate:modelValue":o[4]||(o[4]=t=>r(d).product_name=t),autocomplete:"off"},null,512),[[k,r(d).product_name]])])]),e("div",je,[Be,e("div",Me,[y(e("textarea",{name:"product_description",id:"product_description",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm","onUpdate:modelValue":o[5]||(o[5]=t=>r(d).product_description=t),cols:"30",rows:"10"},null,512),[[k,r(d).product_description]])])]),e("div",Ne,[Fe,e("div",Oe,[y(e("select",{name:"product_category",id:"product_category",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm","onUpdate:modelValue":o[6]||(o[6]=t=>r(d).product_category=t)},[Ae,(l(!0),i(P,null,j(c.categories,(t,V)=>(l(),i("option",{key:V,value:t.id},I(t.name),9,De))),128))],512),[[Z,r(d).product_category]]),u(b,{onClick:o[7]||(o[7]=t=>_.value=!0),buttonType:"warning"},{default:p(()=>[n("Add New Category")]),_:1})])])])):g("",!0),s.value===3?(l(),i("div",Re,[e("div",He,[u(F,{options:h,value:r(d).product_variation,"onUpdate:value":o[8]||(o[8]=t=>{r(d).product_variation=t})},null,8,["value"])]),r(d).product_variation==="disabled"?(l(),i("div",Le,[e("div",qe,[Ee,e("div",ze,[y(e("input",{type:"text",name:"product_price",id:"product_price",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm","onUpdate:modelValue":o[9]||(o[9]=t=>r(d).product_price=t),autocomplete:"off"},null,512),[[k,r(d).product_price]])])]),e("div",Ye,[Ze,e("div",Ge,[y(e("input",{type:"number",step:"1",name:"product_stock",id:"product_stock",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm","onUpdate:modelValue":o[10]||(o[10]=t=>r(d).product_stock=t),autocomplete:"off"},null,512),[[k,r(d).product_stock]])])])])):g("",!0),r(d).product_variation==="enabled"?(l(),i("div",Je,[u(K,{"onUpdate:variation":o[11]||(o[11]=t=>r(d).product_variation_items=t)})])):g("",!0)])):g("",!0)])]),e("div",Ke,[s.value!=1?(l(),$(b,{key:0,onClick:o[12]||(o[12]=T(t=>s.value--,["stop"])),buttonType:"gray"},{default:p(()=>[n("Back")]),_:1})):g("",!0),s.value===1?(l(),$(b,{key:1,route:v.route("products"),buttonType:"gray"},{default:p(()=>[n("Back")]),_:1},8,["route"])):g("",!0),s.value!=3?(l(),$(b,{key:2,onClick:o[13]||(o[13]=T(t=>s.value++,["stop"]))},{default:p(()=>[n(" Next Step "),Qe]),_:1})):g("",!0),s.value===3?(l(),$(b,{key:3,type:"submit"},{default:p(()=>[n(I(c.product?"Update":"Create"),1)]),_:1})):g("",!0)])])])])])],40,pe)])]),u(J,{showModal:_.value,modalType:"sm",onHideModal:o[16]||(o[16]=t=>_.value=!1)},{header:p(()=>[We]),content:p(()=>[e("div",Xe,[u(N,{class:"mb-4"}),e("div",et,[tt,e("div",ot,[y(e("input",{type:"text",name:"category_name",id:"category_name",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm","onUpdate:modelValue":o[14]||(o[14]=t=>r(w).category_name=t),autocomplete:"off"},null,512),[[k,r(w).category_name]])])])])]),footer:p(()=>[e("div",st,[u(b,{buttonType:"gray",onClick:o[15]||(o[15]=t=>_.value=!1)},{default:p(()=>[n("Cancel")]),_:1}),u(b,{onClick:L},{default:p(()=>[n("Create")]),_:1})])]),_:1},8,["showModal"])]),_:1})],64))}};export{vt as default};
