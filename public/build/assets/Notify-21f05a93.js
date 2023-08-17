import i from"./Layout-c6c2f3d6.js";import{r as d,c as r,b as m,w as n,F as c,o as _,d as s,t as e}from"./app-05a13f32.js";import"./Authenticated-c6ad5246.js";import"./ApplicationLogo-c397ffdd.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Button-18ee2f20.js";import"./XIcon-f2139e27.js";import"./default.css_vue_type_style_index_0_src_true_lang-1a75c667.js";import"./moment-fbc5633a.js";import"./PencilIcon-6480223a.js";import"./SearchIcon-4a725d42.js";import"./menu-24f9c043.js";import"./transition-c0edfab6.js";import"./use-resolve-button-type-e83ab285.js";/* empty css            */const l={class:"flex-col w-full pt-4 px-4 space-y-4"},p={class:"bg-white rounded-lg shadow-xl p-4"},g=s("div",{class:"mx-6 mt-2"},[s("h3",{class:"text-lg leading-6 font-medium text-gray-900"},"User Information"),s("p",{class:"mt-1 max-w-2xl text-sm text-gray-500"},"User details and related information")],-1),u={class:"mt-5 border-t border-gray-200 mx-6"},y={class:"sm:divide-y sm:divide-gray-200"},h={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},x=s("dt",{class:"text-sm font-medium text-gray-500"},"First Name",-1),f={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},v={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},b=s("dt",{class:"text-sm font-medium text-gray-500"},"Last Name",-1),N={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},w={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},B=s("dt",{class:"text-sm font-medium text-gray-500"},"Phone Number",-1),C={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},F={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},j=s("dt",{class:"text-sm font-medium text-gray-500"},"Address",-1),k={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},q={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},H=s("dt",{class:"text-sm font-medium text-gray-500"},"State",-1),O={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},S={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},U=s("dt",{class:"text-sm font-medium text-gray-500"},"Country",-1),V={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},A={props:{request_data:Object},data(){return{user_info:[]}},mounted(){axios.get(route("users.get_info",this.request_data.user_id)).then(o=>{console.log(o),this.user_info=o.data})}},Y=Object.assign(A,{__name:"Notify",setup(o){return(t,D)=>{const a=d("Head");return _(),r(c,null,[m(a,{title:"Notifications"}),m(i,null,{default:n(()=>[s("div",l,[s("div",p,[g,s("div",u,[s("dl",y,[s("div",h,[x,s("dd",f,e(t.user_info.user_first_name),1)]),s("div",v,[b,s("dd",N,e(t.user_info.user_last_name),1)]),s("div",w,[B,s("dd",C,e(t.user_info.user_calling_code)+e(t.user_info.user_contact),1)]),s("div",F,[j,s("dd",k,e(t.user_info.user_address),1)]),s("div",q,[H,s("dd",O,e(t.user_info.user_state),1)]),s("div",S,[U,s("dd",V,e(t.user_info.user_country),1)])])])])])]),_:1})],64)}}});export{Y as default};
