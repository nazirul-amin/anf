import{B as m}from"./Authenticated-2913fd23.js";import{B as p}from"./Button-9bb99ef6.js";import{c as s,b as i,u,w as n,F as r,H as c,L as _,o,d as t,k as h,h as g,t as v}from"./app-7fa9d0bc.js";import"./ApplicationLogo-f91fd4fa.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-bdcdbbe9.js";import"./default.css_vue_type_style_index_0_src_true_lang-5871727b.js";import"./moment-fbc5633a.js";const f={class:"py-4 px-4"},x={class:"overflow-x-auto"},w={class:"mx-auto"},y={class:"align-middle inline-block min-w-full p-2 space-y-6"},b={class:"flex lg:grow sm:justify-end"},k={key:0,class:"bg-gray-50 rounded shadow p-6"},B={class:"p-4"},C={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-10"},N=["onClick"],T={class:"flex items-center h-60 w-60"},$=["src"],L={class:"w-full p-4 text-center bg-indigo-200"},j={class:"font-medium text-gray-900"},V={key:1,class:"bg-white shadow-md rounded border"},z=t("div",{class:"max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-24"},[t("div",{class:"max-w-3xl mx-auto text-center"},[t("h2",{class:"text-3xl font-extrabold text-gray-900 sm:text-3xl"},"It seems no math manipulatives have been added."),t("p",{class:"mt-3 text-xl font-sans text-gray-500 sm:mt-4"},"To start adding one, click on the configuration button.")])],-1),F=[z],H={components:{Head:c,Link:_},methods:{openNewTab(l){window.open(route("math_manipulatives.play",{name:l}),"_blank")}}},J=Object.assign(H,{__name:"Index",setup(l){return(e,d)=>(o(),s(r,null,[i(u(c),{title:"Math Manipulatives"}),i(m,null,{header:n(()=>[]),default:n(()=>[t("div",f,[t("div",x,[t("div",w,[t("div",y,[t("div",b,[i(p,{buttonType:"info",class:"px-4 py-3",onClick:d[0]||(d[0]=a=>e.$inertia.get(e.route("math_manipulatives.configuration")))},{default:n(()=>[h("Configuration")]),_:1})]),e.$page.props.math_manipulatives.length?(o(),s("div",k,[t("div",B,[t("div",C,[(o(!0),s(r,null,g(e.$page.props.math_manipulatives,a=>(o(),s("div",{class:"flex flex-col divide-y items-center justify-center bg-white rounded-lg overflow-hidden shadow-lg transform transition hover:scale-[0.99] hover:cursor-pointer",onClick:I=>e.openNewTab(a.folder_name)},[t("div",T,[t("img",{src:"storage/math_manipulatives/thumbnails/"+a.thumbnail},null,8,$)]),t("div",L,[t("h3",j,v(a.name),1)])],8,N))),256))])])])):(o(),s("div",V,F))])])])])]),_:1})],64))}});export{J as default};
