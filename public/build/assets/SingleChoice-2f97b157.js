import{c as l,b as t,a as h,w as c,F as p,r as w,o,i as d,e as _,ac as f,l as u,p as v,h as g,t as y}from"./app-1ddf5d3d.js";import{B as m}from"./Button-5dcf5bee.js";/* empty css            */import"./_plugin-vue_export-helper-c27b6911.js";const b={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},k={class:"flex justify-between mb-2"},D=t("h1",{class:"text-indigo-800 font-bold"},"Answers",-1),C=t("div",{class:"border-b border-dashed border-indigo-900 mt-1"},null,-1),T={class:"py-5 space-y-6 divide-y divide-gray-500"},A={class:"flex items-start space-x-6 pt-6"},B={class:"flex space-x-2 items-center mt-5"},I=["id","value"],F=["for"],M={class:"flex flex-col space-y-1"},V=["onUpdate:modelValue","onInput"],$={class:"flex"},P=["onChange"],j={key:0,class:"flex"},x={class:"flex items-center px-3 py-1 rounded-md border border-gray-200 bg-indigo-100 drop-shadow-md"},S={class:"flex flex-1 items-center"},N=t("svg",{class:"h-5 w-5 flex-shrink-0 text-gray-700",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z","clip-rule":"evenodd"})],-1),O={class:"ml-2 flex-1 text-gray-700 text-md"},U={class:"flex ml-4 flex-shrink-0 items-center"},q=["onClick"],z={props:{action:String,prop_answers:Object},mounted(){this.init()},data(){return{images_to_delete:[],answers:[],correct_answer:this.prop_answers?this.prop_answers.correct_answer:""}},watch:{correct_answer(e){this.sendDataToParent()},immediate:!0},methods:{init(){this.action==="edit"?this.reconstructAnswers(this.prop_answers.answers):this.answers.push({answer:"",image_name:"",image_file:""})},addAnswer(){this.answers.push({answer:"",image_name:"",image_file:""})},deleteAnswer(e){this.pushImageToDelete(e),this.answers.splice(e,1),this.correct_answer="",this.sendDataToParent(e)},sendDataToParent(e){this.$emit("receivedData",{question_type:1,answers:this.answers,correct_answer:this.correct_answer,images_to_delete:this.images_to_delete})},openFileModal(e){this.$refs[e][0].click()},handleFile(e,s){if(e.target.files[0]&&e.target.files[0].type.match(/^image\/(jpeg|png)$/)){const n=e.target.files[0].name.split(".").pop(),a=Date.now().toString()+Math.floor(Math.random()*1e5).toString()+"."+n;this.answers[s].image_file=new File([e.target.files[0]],a,{type:e.target.files[0].type}),this.answers[s].image_name=this.answers[s].image_file.name,this.answers[s].answer='<img src="/storage/diagnostic_test_photo/'+this.answers[s].image_file.name+'">'}else alert("Only images are allowed!");this.sendDataToParent(s)},removeImage(e){this.correct_answer="",this.pushImageToDelete(e),this.clearAnswerData(e),this.sendDataToParent(e)},clearAnswerData(e){this.answers[e].image_file="",this.answers[e].image_name="",this.answers[e].answer=""},pushImageToDelete(e){this.answers[e]&&this.answers[e].image_name&&this.answers[e].image_name!=""&&!this.answers[e].image_file&&this.images_to_delete.push(this.answers[e].image_name)},reconstructAnswers(e){Object.keys(e).forEach(s=>{this.answers.push(e[s])})}}},H=Object.assign(z,{__name:"SingleChoice",setup(e){return(s,n)=>(o(),l("div",b,[t("div",k,[D,h(m,{onClick:s.addAnswer},{default:c(()=>[d(" Add Answer ")]),_:1},8,["onClick"])]),C,t("div",T,[(o(!0),l(p,null,w(s.answers,(i,a)=>(o(),l("div",A,[t("div",B,[_(t("input",{id:a,name:"single-choice",type:"radio",class:"focus:ring-0 focus:border-white h-4 w-4 text-indigo-600 border-indigo-300 active:ring-0",value:a,"onUpdate:modelValue":n[0]||(n[0]=r=>s.correct_answer=r)},null,8,I),[[f,s.correct_answer]]),t("label",{for:a,class:"select-none block text-sm font-medium text-gray-700 cursor-pointer"}," Correct ",8,F)]),t("div",M,[_(t("textarea",{cols:"1000",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300","onUpdate:modelValue":r=>s.answers[a].answer=r,onInput:r=>s.sendDataToParent(a)},null,40,V),[[u,s.answers[a].answer]]),t("div",$,[t("input",{type:"file",ref_for:!0,ref:"file_"+a,class:"hidden",onChange:r=>s.handleFile(r,a)},null,40,P),!i.image_file&&!i.image_name?(o(),v(m,{key:0,buttonType:"info",onClick:r=>s.openFileModal("file_"+a),class:"py-1.5 px-2"},{default:c(()=>[d("Upload Image")]),_:2},1032,["onClick"])):g("",!0)]),i.image_file||i.image_name?(o(),l("div",j,[t("div",x,[t("div",S,[N,t("span",O,y(i.image_name),1)]),t("div",U,[t("button",{class:"text-sm font-medium text-red-500 hover:text-red-600",onClick:r=>s.removeImage(a)}," Remove ",8,q)])])])):g("",!0)]),h(m,{buttonType:"danger",onClick:r=>s.deleteAnswer(a),class:"mt-4 py-1 px-2"},{default:c(()=>[d("Delete")]),_:2},1032,["onClick"])]))),256))])]))}});export{H as default};
