import{c as i,b as r,u as c,w as n,F as h,H as _,L as k,o as d,d as e,f as $,l as D,k as p,j as m,h as L,t as l}from"./app-05a13f32.js";import{B as R}from"./Authenticated-c6ad5246.js";import{B as u}from"./Button-18ee2f20.js";import{r as T}from"./PencilIcon-6480223a.js";import{r as x}from"./SearchIcon-4a725d42.js";import{r as C}from"./TrashIcon-fe06358a.js";import{C as y}from"./ConfirmationModal-db6d2820.js";import{P as M}from"./Pagination-cb03599e.js";import{h as f}from"./moment-fbc5633a.js";import{M as b}from"./Modal-ec2e7cc4.js";import{s as w}from"./multiselect-956e8f5e.js";/* empty css            */import"./ApplicationLogo-c397ffdd.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-f2139e27.js";import"./default.css_vue_type_style_index_0_src_true_lang-1a75c667.js";import"./transition-c0edfab6.js";import"./VueFinalModal.esm-9c20a319.js";const j={class:"py-4 px-4"},P={class:"overflow-x-auto"},B={class:"mx-auto"},O={class:"align-middle inline-block min-w-full px-2"},S={class:"flex justify-between mb-4"},V={class:"flex space-x-2"},I={class:"flex relative"},N={class:"flex"},U={class:"table-auto min-w-full divide-y divide-gray-200"},A=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/14"},"Title"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Programme"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Level"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),H={class:"bg-white divide-y divide-gray-200"},z={key:0},F=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),E=[F],Y={class:"px-6 py-4 whitespace-nowrap"},q={class:"text-sm font-medium text-gray-700"},G={class:"px-6 py-4 whitespace-nowrap"},J={class:"text-sm font-medium text-gray-900"},K={class:"px-6 py-4 whitespace-nowrap"},Q={class:"text-sm font-medium text-gray-900"},W={class:"px-6 py-4 whitespace-nowrap"},X={class:"text-sm font-medium text-gray-900"},Z={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},ee={class:"flex justify-center space-x-2"},te=e("h3",{class:"text-gray-900 text-xl font-semibold"}," Resource Information ",-1),oe={key:0,class:"flex items-center justify-center p-5 h-72"},se=e("div",{class:"flex space-x-2 animate-pulse"},[e("div",{class:"w-3 h-3 bg-gray-500 rounded-full"}),e("div",{class:"w-3 h-3 bg-gray-500 rounded-full"}),e("div",{class:"w-3 h-3 bg-gray-500 rounded-full"})],-1),re=[se],ae={key:1,class:"p-6 overflow-y-auto no-scrollbar space-y-4"},ie=["innerHTML"],ne={key:1,class:"flex justify-center"},de=["src"],le={key:2,class:"flex justify-center"},ce=["src"],pe={class:"flex justify-center"},me={class:"w-11/12 p-4"},ue={class:"mt-6 border-t border-gray-100"},ge={class:"divide-y divide-gray-100"},he={class:"px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},fe=e("dt",{class:"text-sm font-medium leading-6 text-gray-900"},"Title",-1),_e={class:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"},xe={class:"px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},ye=e("dt",{class:"text-sm font-medium leading-6 text-gray-900"},"Programme / Level",-1),be={class:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"},we={class:"px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},ve=e("dt",{class:"text-sm font-medium leading-6 text-gray-900"},"Language",-1),ke={class:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"},$e={class:"px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},De=e("dt",{class:"text-sm font-medium leading-6 text-gray-900"},"Media Type",-1),Le={class:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"},Re={class:"px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},Te=e("dt",{class:"text-sm font-medium leading-6 text-gray-900"},"Created Date",-1),Ce={class:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"},Me={class:"px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},je=e("dt",{class:"text-sm font-medium leading-6 text-gray-900"},"Last Updated",-1),Pe={class:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"},Be={class:"flex"},Oe={class:"flex justify-end space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},Se={components:{SearchIcon:x,TrashIcon:C,PencilIcon:T,Head:_,Link:k,ConfirmationModal:y,Modal:b,Multiselect:w},data(){return{loading_resource:!1,show_resource:!1,isOpen:!1,confirmationData:"",confirmationRoute:"",open_modal:!1,params:{search:this.$page.props.filter?this.$page.props.filter.search:"",programme_id:this.$page.props.filter?this.$page.props.filter.programme_id:""},resource_data:[]}},watch:{params:{handler(){this.$inertia.get(route("teacher_resources"),this.params)},deep:!0}},methods:{viewResource(a){this.resource_data=[],this.show_resource=!0,this.loading_resource=!0,axios.get(route("teacher_resources.get_resource"),{params:{resource_id:a}}).then(t=>{this.resource_data=t.data,this.loading_resource=!1})},editResource(a){this.$inertia.get(route("teacher_resources.edit"),{resource_id:a})},deleteResource(a){this.confirmationRoute="teacher_resources.destroy",this.confirmationData=a,this.isOpen=!0},baseUrl(){const{protocol:a,host:t}=window.location;return`${a}//${t}`},downloadFile(a){axios.get(route("download.teacher_resources",a),{responseType:"blob"}).then(t=>{const s=window.URL.createObjectURL(new Blob([t.data])),o=document.createElement("a");o.href=s,o.setAttribute("download",a),document.body.appendChild(o),o.click()}).catch(t=>{console.error(t)})}}},et=Object.assign(Se,{__name:"Index",setup(a){return(t,s)=>(d(),i(h,null,[r(c(_),{title:"Teacher Resources"}),r(R,null,{header:n(()=>[]),default:n(()=>[e("div",j,[e("div",P,[e("div",B,[e("div",O,[e("div",S,[e("div",V,[e("div",I,[r(c(x),{class:"text-gray-600 h-4 w-4 fill-current pointer-events-none absolute top-1/4 left-3",style:"top:30%"}),$(e("input",{class:"border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg focus:ring-0 text-base focus:border-gray-300 appearance-none block pl-10",type:"text","onUpdate:modelValue":s[0]||(s[0]=o=>t.params.search=o),placeholder:"Search"},null,512),[[D,t.params.search]])]),r(c(w),{modelValue:t.params.programme_id,"onUpdate:modelValue":s[1]||(s[1]=o=>t.params.programme_id=o),valueProp:"id",appendNewOption:!1,searchable:!0,options:t.$page.props.programmes,clearOnSelect:!1,canClear:!0,canDeselect:!0,trackBy:"name",label:"name",placeholder:"Programme",classes:{container:"relative mx-auto w-64 flex items-center justify-end box-border cursor-pointer border-2 border-gray-300 rounded-lg bg-white text-base leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerActive:"border-2 border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",search:"w-full mt-1 h-8 absolute inset-0 focus:border-none outline-none focus:ring-0 appearance-none border-2 border-transparent focus:border-gray-300 text-base font-sans bg-white rounded-lg",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-10 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 text-gray-800",clearIcon:"fa fa-heart bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent"}},null,8,["modelValue","options"])]),e("div",N,[r(u,{route:t.route("teacher_resources.create")},{default:n(()=>[p("New Resource")]),_:1},8,["route"])])]),e("table",U,[A,e("tbody",H,[t.$page.props.teacher_resources.data.length?m("",!0):(d(),i("tr",z,E)),(d(!0),i(h,null,L(t.$page.props.teacher_resources.data,(o,v)=>(d(),i("tr",{class:"hover:bg-gray-200",key:o.id},[e("td",Y,[e("div",q,l(++v),1)]),e("td",G,[e("div",J,l(o.title),1)]),e("td",K,[e("div",Q,l(o.programme),1)]),e("td",W,[e("div",X,l(o.level),1)]),e("td",Z,[e("div",ee,[r(u,{buttonType:"blue",onClick:g=>t.viewResource(o.id)},{default:n(()=>[p("View / Download")]),_:2},1032,["onClick"]),r(u,{buttonType:"warning",onClick:g=>t.editResource(o.id)},{default:n(()=>[p("Edit")]),_:2},1032,["onClick"]),r(u,{buttonType:"danger",onClick:g=>t.deleteResource(o.id)},{default:n(()=>[p("Delete")]),_:2},1032,["onClick"])])])]))),128))])]),r(M,{page_data:t.$page.props.teacher_resources},null,8,["page_data"])])])])]),r(y,{show:t.isOpen,onClose:s[2]||(s[2]=o=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Resource",confirmationText:"Are you sure want to delete this resource?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"]),r(b,{showModal:t.show_resource,onHideModal:s[5]||(s[5]=o=>t.show_resource=!1)},{header:n(()=>[te]),content:n(()=>[t.loading_resource?(d(),i("div",oe,re)):(d(),i("div",ae,[t.resource_data.media_type_id==1?(d(),i("div",{key:0,class:"flex justify-center",innerHTML:t.resource_data.content},null,8,ie)):m("",!0),t.resource_data.media_type_id==2?(d(),i("div",ne,[e("iframe",{src:"storage/teacher_resources/"+t.resource_data.content,width:"100%",height:"600px"},null,8,de)])):m("",!0),t.resource_data.media_type_id==3?(d(),i("div",le,[e("iframe",{class:"flex-1",src:"https://view.officeapps.live.com/op/view.aspx?src="+t.baseUrl()+"/storage/teacher_resources/"+t.resource_data.content+"&embedded=true",style:{width:"600px",height:"500px"},frameborder:"0"},null,8,ce)])):m("",!0),e("div",pe,[e("div",me,[e("div",ue,[e("dl",ge,[e("div",he,[fe,e("dd",_e,l(t.resource_data.title),1)]),e("div",xe,[ye,e("dd",be,l(t.resource_data.programme+` ( Level ${t.resource_data.level} )`),1)]),e("div",we,[ve,e("dd",ke,l(t.resource_data.language),1)]),e("div",$e,[De,e("dd",Le,l(t.resource_data.media_type_name),1)]),e("div",Re,[Te,e("dd",Ce,l(c(f)(t.resource_data.created_at).format("DD/MM/Y")),1)]),e("div",Me,[je,e("dd",Pe,l(c(f)(t.resource_data.updated_at).format("DD/MM/Y")),1)]),e("div",Be,[t.resource_data.media_type_id==2||t.resource_data.media_type_id==3?(d(),i("button",{key:0,class:"flex-1 mt-3 py-2 px-6 rounded bg-indigo-500 hover:bg-indigo-600 text-white",onClick:s[3]||(s[3]=o=>t.downloadFile(t.resource_data.content))},"Download")):m("",!0)])])])])])]))]),footer:n(()=>[e("div",Oe,[r(u,{buttonType:"gray",onClick:s[4]||(s[4]=o=>t.show_resource=!1)},{default:n(()=>[p("Close")]),_:1})])]),_:1},8,["showModal"])]),_:1})],64))}});export{et as default};
