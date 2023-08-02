import{B as V}from"./Authenticated-84dcb892.js";import{B as q}from"./Button-5c896a52.js";import{A as P,$ as T,X as L,ad as M,q as E,s as H,a2 as K,G as U,ae as B,af as $,c as x,b as y,u as j,w as O,F as G,o as v,H as A,d as n,t as D,k as Q,j as X,L as Z}from"./app-3c18cd7f.js";import{C as S,B as J,p as W,a as Y,b as tt,c as et,d as st,L as it}from"./chart-df6387c1.js";import"./ApplicationLogo-4a0d6756.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-b5deb7de.js";import"./default.css_vue_type_style_index_0_src_true_lang-e87de5d5.js";import"./moment-fbc5633a.js";/* empty css            */const I={data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},datasetIdKey:{type:String,default:"label"},updateMode:{type:String,default:void 0}},at={type:{type:String,required:!0},...I},nt=M[0]==="2"?(e,t)=>Object.assign(e,{attrs:t}):(e,t)=>Object.assign(e,t);function d(e){return $(e)?B(e):e}function ot(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e;return $(t)?new Proxy(e,{}):e}function rt(e,t){const s=e.options;s&&t&&Object.assign(s,t)}function z(e,t){e.labels=t}function F(e,t,s){const a=[];e.datasets=t.map(i=>{const o=e.datasets.find(u=>u[s]===i[s]);return!o||!i.data||a.includes(o)?{...i}:(a.push(o),Object.assign(o,i),o)})}function lt(e,t){const s={labels:[],datasets:[]};return z(s,e.labels),F(s,e.datasets,t),s}const ct=P({props:at,setup(e,t){let{expose:s}=t;const a=E(null),i=T(null);s({chart:i});const o=()=>{if(!a.value)return;const{type:r,data:g,options:f,plugins:_,datasetIdKey:w}=e,b=lt(g,w),l=ot(b,g);i.value=new S(a.value,{type:r,data:l,options:{...f},plugins:_})},u=()=>{const r=B(i.value);r&&(r.destroy(),i.value=null)},h=r=>{r.update(e.updateMode)};return H(o),K(u),U([()=>e.options,()=>e.data],(r,g)=>{let[f,_]=r,[w,b]=g;const l=B(i.value);if(!l)return;let m=!1;if(f){const c=d(f),k=d(w);c&&c!==k&&(rt(l,c),m=!0)}if(_){const c=d(_.labels),k=d(b.labels),C=d(_.datasets),R=d(b.datasets);c!==k&&(z(l.config.data,c),m=!0),C&&C!==R&&(F(l.config.data,C,e.datasetIdKey),m=!0)}m&&h(l)},{deep:!0}),()=>L("canvas",{ref:a})}});function dt(e,t){return S.register(t),P({props:I,setup(s,a){let{expose:i}=a;const o=T(null),u=h=>{o.value=h==null?void 0:h.chart};return i({chart:o}),()=>L(ct,nt({ref:u},{type:e,...s}))}})}const N=dt("bar",J),ut={class:"py-6 px-6"},ht={class:"overflow-x-auto"},_t={key:0,class:"inline-block min-w-full py-12 px-36 shadow-md bg-white rounded text-center"},pt={class:"text-2xl font-bold capitalize leading-loose"},gt={class:"py-4"},ft={class:"pt-6"},bt={key:1,class:"inline-block min-w-full p-12 shadow-md bg-white rounded text-center"},mt={class:"px-6 pb-8"},xt={class:"text-3xl font-bold uppercase"},yt={key:0,class:"px-6 pb-8"},vt={class:"font-bold uppercase italic text-red-500"},wt={class:"flex flex-col place-items-center"},kt=["src"],Ct={class:"flex flex-row justify-between pt-4 w-1/2 space-x-2"};S.register(W,Y,tt,et,st,it);var p=[];const Ot=P({components:{Head:A,Link:Z,Bar:N},props:{diagnostic_test_list:Object,diagnostic_test_categories_label:Object,diagnostic_test_categories:Object,result:Object,result_score:String},data(){return{count:1,index:0,score:0,final_score:"",chartData:{labels:this.diagnostic_test_categories_label?this.diagnostic_test_categories_label:[],datasets:[{label:"Score",backgroundColor:"#f87979",data:this.final_data?this.final_data:[],barThickness:100,yAxisID:"y"}]},chartOptions:{responsive:!0,maintainAspectRatio:!1,scales:{y:{min:0,max:10,stepSize:1,ticks:{beginAtZero:!0}}}}}},watch:{final_score:{handler(){this.$inertia.get(route("diagnostic_test.run"),{final_score:this.final_score,dt_id:this.$page.props.dt_id})}}},methods:{nextTrue(){var e=this.diagnostic_test_list[this.index].category_id;if(this.diagnostic_test_categories[e]){var t=this.diagnostic_test_categories[e];this.diagnostic_test_categories_label.filter(function(a,i){a==t?p[i]+=1:p[i]||(p[i]=0)})}if(this.diagnostic_test_list[this.index].redirect_yes_id!=null){var s=0;const a=this.diagnostic_test_list[this.index].redirect_yes_id;this.diagnostic_test_list.filter(function(i,o){i.id==a&&(s=o)}),this.index=s,this.score+=1,this.count+=1}else this.diagnostic_test_list[this.index+1]?(this.index++,this.score+=1,this.count+=1):this.diagnostic_test_list[this.index]&&(this.count+1,this.final_score=this.final_score==null?0:this.score+1)},nextFalse(){if(this.diagnostic_test_list[this.index].redirect_no_id!=null){var e=0;const t=this.diagnostic_test_list[this.index].redirect_no_id;this.diagnostic_test_list.filter(function(s,a){s.id==t&&(e=a)}),this.index=e,this.count+=1}else this.diagnostic_test_list[this.index+1]?(this.index++,this.count+=1):this.diagnostic_test_list[this.index]&&(this.count+1,this.final_score=this.final_score==null?0:this.score+0)},restartDT(){p=[],this.$inertia.get(route("diagnostic_test"))},chartInit(){this.diagnostic_test_categories_label.filter(function(e,t){p[t]=0})}},mounted(){this.result_score==""&&this.chartInit()}}),zt=Object.assign(Ot,{__name:"Start-backup",setup(e){return(t,s)=>(v(),x(G,null,[y(j(A),{title:"Diagnostic Test"}),y(V,null,{header:O(()=>[]),default:O(()=>[n("div",ut,[n("div",ht,[t.result_score!=""?(v(),x("div",_t,[n("span",pt,D(t.result.message),1),n("div",gt,[y(j(N),{"chart-options":t.chartOptions,"chart-data":t.chartData,width:100,height:500},null,8,["chart-options","chart-data"])]),n("div",ft,[y(q,{class:"px-6 py-2 bg-indigo-500 hover:bg-indigo-600 rounded text-white shadow-md",onClick:t.restartDT},{default:O(()=>[Q("Re-run Diagnostic Test")]),_:1},8,["onClick"])])])):(v(),x("div",bt,[n("div",mt,[n("span",xt,"Question "+D(t.count),1)]),t.diagnostic_test_list[t.index].remarks?(v(),x("div",yt,[n("span",vt,"* "+D(t.diagnostic_test_list[t.index].remarks)+" *",1)])):X("",!0),n("div",wt,[n("img",{src:"/storage/"+t.diagnostic_test_list[t.index].image_location,class:"select-none w-1/2 h-1/3 bg-green-200 rounded-lg",alt:""},null,8,kt),n("div",Ct,[n("button",{class:"grow uppercase px-32 py-6 bg-blue-500 hover:bg-blue-600 rounded text-white text-lg font-extrabold shadow-md",onClick:s[0]||(s[0]=a=>t.nextTrue(t.diagnostic_test_list[t.index].id))},"1"),n("button",{class:"grow uppercase px-32 py-6 bg-red-500 hover:bg-red-600 rounded text-white text-lg font-extrabold shadow-md",onClick:s[1]||(s[1]=a=>t.nextFalse(t.diagnostic_test_list[t.index].id))},"0")])])]))])])]),_:1})],64))}});export{zt as default};
