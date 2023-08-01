import{r as w,o as i,c as n,d as e,F as x,h as T,t as g,p as C,j as y,b as m,u as M,w as u,H as k,L as $,e as B,f,l as A,n as j,i as b,k as p}from"./app-5b70941e.js";import{B as F}from"./Authenticated-3d558274.js";import{B as _}from"./Button-7003fb3f.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                                         *//* empty css            */import"./ApplicationLogo-9bc665dc.js";import"./XIcon-6a638028.js";import"./default.css_vue_type_style_index_0_src_true_lang-5057ee22.js";import"./moment-fbc5633a.js";const L={name:"FolderTree",props:{folders:{type:Array,required:!0}}},z={class:"menu-items"},E={key:0,class:"flex items-center space-x-4"},V=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"h-5 w-5 text-blue-600",viewBox:"0 0 16 16"},[e("path",{d:"M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"})],-1),R={key:1,class:"flex items-center space-x-4"},P=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"h-4 w-4",viewBox:"0 0 16 16"},[e("path",{d:"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"})],-1);function S(o,t,s,a,l,h){const d=w("folder-tree",!0);return i(),n("div",null,[e("ul",z,[(i(!0),n(x,null,T(s.folders,(r,c)=>(i(),n("li",{key:r.id},[r[0]?(i(),n("span",R,[P,e("span",null,g(c),1)])):(i(),n("span",E,[V,e("span",null,g(c),1)])),r[0]?y("",!0):(i(),C(d,{key:2,folders:r},null,8,["folders"]))]))),128))])])}const D=H(L,[["render",S]]);const U={class:"md:grid md:grid-cols-2"},G={class:"md:mt-0 md:col-span-2"},I={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},N={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},O={class:"sm:row-span-3"},q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},Y=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Upload Math Manipulative"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),J={class:"mb-4"},X=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"},[p(" Title "),e("span",{class:"text-red-500"},"*")],-1),K={class:"mt-1 flex rounded-md.shadow-sm"},Q={class:"mb-4 space-y-2"},W=e("label",{class:"block text-sm text-gray-700 font-bold"}," Thumbnail ",-1),Z={key:0,class:"rounded-md bg-red-100 p-4"},ee={class:"flex"},te={class:"flex-shrink-0"},se=e("div",{class:"ml-3"},[e("h3",{class:"text-sm font-medium text-red-500"},"File is required!")],-1),oe={class:"space-y-1 text-center"},le=e("svg",{class:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true"},[e("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),re={class:"flex text-sm text-gray-600"},ie={class:"browse text-indigo-400 hover:text-indigo-800 cursor-pointer font-bold"},ae={ref:"thumbnail",id:"file",class:"sr-only",type:"file",accept:"image/*"},ne=e("p",{class:"pl-1"},"or drag and drop an image",-1),de=e("p",{class:"text-xs text-gray-500"},"Image Format : PNG, JPG",-1),ce={class:"mb-4"},me=e("label",{class:"block text-sm text-gray-700 font-bold mb-2"}," Artwork File ",-1),he={class:"flex flex-row justify-start space-x-2"},ue={class:"flex-column text-center"},pe=["src"],fe={class:"flex-column"},_e={class:"flex flex-col space-y-1"},ge=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1),be={class:"mb-4 space-y-2"},ve=e("label",{class:"block text-sm text-gray-700 font-bold"}," Math Manipulative Folder ",-1),we={key:0,class:"flex items-center justify-center bg-grey-lighter"},xe={class:"w-full flex flex-col items-center px-4 py-6 bg-white text-indigo-400 rounded-lg shadow-lg tracking-wide uppercase border border-indigo cursor-pointer hover:bg-indigo-400 hover:text-white"},ye=e("svg",{class:"w-8 h-8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"})],-1),ke=e("span",{class:"mt-2 text-base leading-normal"},"Select folder",-1),Te={key:1,class:"flex flex-col space-y-4 p-4 border rounded shadow"},Ce=e("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1),Me={class:"flex items-center justify-end"},$e={class:"flex space-x-2"},v=window.URL||window.webkitURL,Be=/^image\/\w+$/,Ae={components:{Head:k,Link:$},data(){return{data:{type:Object,default:()=>({})},list:{students:[],levels:this.$page.props.levels,themes:[],lessons:[],activities:[]},form:{title:"",folder:[],thumbnail:{image_url:"",file:""}}}},methods:{submit(){this.$inertia.post(route("math_manipulatives.configuration.store"),this.form,{preserveState:!0})},read(o,t){return new Promise((s,a)=>{if(!o){s();return}Be.test(o.type)?v?s({loaded:!0,name:o.name,type:o.type,url:v.createObjectURL(o)}):a(new Error("Your browser is not supported.")):a(new Error("Please select a valid image file."))})},changeThumbnail({target:o}){const{files:t}=o;t&&t.length>0&&this.read(t[0],o).then(s=>{this.form.thumbnail.image_url=s.url,this.form.thumbnail.file=t[0]}).catch(this.alert)},dragoverThumbnail(o){o.preventDefault()},dropThumbnail(o){const{files:t}=o.dataTransfer;o.preventDefault(),t&&t.length>0&&this.read(t[0],o).then(s=>{this.form.thumbnail.image_url=s.url,this.form.thumbnail.file=t[0]}).catch(this.alert)},reselect_thumbnail(){this.$refs.thumbnail.value="",this.form.thumbnail.image_url="",this.form.thumbnail.file=""},change(o){const t=o.target.files,s={};for(let a=0;a<t.length;a++){const l=t[a],h=l.webkitRelativePath.split("/");let d=s;for(let r=0;r<h.length;r++){const c=h[r];d[c]?r===h.length-1&&d[c].push(l):r===h.length-1?d[c]=[l]:d[c]={},d=d[c]}}this.form.folder=s},removeFolder(){this.form.folder=[]}}},De=Object.assign(Ae,{__name:"Create",setup(o){return(t,s)=>{const a=w("ExclamationIcon");return i(),n(x,null,[m(M(k),{title:"Art Gallery"}),m(F,null,{header:u(()=>[]),default:u(()=>[e("div",U,[e("div",G,[e("form",{onSubmit:s[7]||(s[7]=B((...l)=>t.submit&&t.submit(...l),["prevent"]))},[e("div",I,[e("div",N,[e("div",O,[e("div",q,[Y,e("div",J,[X,e("div",K,[f(e("input",{type:"text",name:"title",id:"title",class:j(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.title?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[0]||(s[0]=l=>t.form.title=l),autocomplete:"off"},null,2),[[A,t.form.title]])])]),f(e("div",Q,[W,t.$page.props.errors["artwork.file"]?(i(),n("div",Z,[e("div",ee,[e("div",te,[m(a,{class:"h-5 w-5 text-red-500","aria-hidden":"true"})]),se])])):y("",!0),e("div",{class:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",onChange:s[1]||(s[1]=(...l)=>t.changeThumbnail&&t.changeThumbnail(...l)),onDragover:s[2]||(s[2]=(...l)=>t.dragoverThumbnail&&t.dragoverThumbnail(...l)),onDrop:s[3]||(s[3]=(...l)=>t.dropThumbnail&&t.dropThumbnail(...l))},[e("div",oe,[le,e("div",re,[e("label",ie,[p("Click here "),e("input",ae,null,512)]),ne]),de])],32)],512),[[b,t.form.thumbnail.image_url==""]]),f(e("div",ce,[me,e("div",he,[e("div",ue,[e("img",{class:"object-scale-down h-40 w-40",src:t.form.thumbnail.image_url,alt:""},null,8,pe)]),e("div",fe,[e("div",_e,[m(_,{class:"py-1 px-2 bg-blue-500 hover:bg-blue-600 rounded text-white shadow",onClick:s[4]||(s[4]=l=>t.reselect_thumbnail()),title:"Reselect an image"},{default:u(()=>[ge]),_:1})])])])],512),[[b,t.form.thumbnail.image_url!=""]]),e("div",be,[ve,Object.keys(t.form.folder).length===0?(i(),n("div",we,[e("label",xe,[ye,ke,e("input",{type:"file",id:"filepicker",class:"hidden",onChange:s[5]||(s[5]=l=>t.change(l)),webkitdirectory:"",multiple:""},null,32)])])):(i(),n("div",Te,[m(D,{folders:t.form.folder},null,8,["folders"]),e("button",{class:"py-2 px-4 bg-red-600 hover:bg-red-500 rounded text-white",onClick:s[6]||(s[6]=l=>t.removeFolder())},"Remove Folder")]))]),Ce,e("div",Me,[e("div",$e,[m(_,{buttonType:"gray",route:t.route("math_manipulatives.configuration")},{default:u(()=>[p("Cancel")]),_:1},8,["route"]),m(_,{type:"submit"},{default:u(()=>[p("Save")]),_:1})])])])])])])],32)])])]),_:1})],64)}}});export{De as default};
