import{o as n,c as r,n as a,z as u,j as d}from"./app-05a13f32.js";import{_ as l}from"./_plugin-vue_export-helper-c27b6911.js";const b={props:{type:{type:String,default:"button"},buttonType:{type:String,default:"info"},route:{type:String,default:""},class:{type:String,default:""}},methods:{goTo(){this.route&&this.$inertia.visit(this.route)}}},c=["type"],y=["type"],g=["type"],p=["type"],f=["type"],h=["type"];function m(i,e,t,x,w,o){return n(),r("div",null,[t.buttonType=="success"?(n(),r("button",{key:0,type:t.type,class:a(["shadow-md inline-flex items-center bg-green-600 border border-transparent rounded font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-800 focus:outline-none transition ease-in-out duration-150 cursor-pointer",this.class?this.class:"px-4 py-2"]),onClick:e[0]||(e[0]=(...s)=>o.goTo&&o.goTo(...s))},[u(i.$slots,"default")],10,c)):d("",!0),t.buttonType=="info"?(n(),r("button",{key:1,type:t.type,class:a(["shadow-md inline-flex items-center bg-indigo-600 border border-transparent rounded font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-800 focus:outline-none transition ease-in-out duration-150 cursor-pointer",this.class?this.class:"px-4 py-2"]),onClick:e[1]||(e[1]=(...s)=>o.goTo&&o.goTo(...s))},[u(i.$slots,"default")],10,y)):d("",!0),t.buttonType=="warning"?(n(),r("button",{key:2,type:t.type,class:a(["shadow-md inline-flex items-center bg-yellow-500 border border-transparent rounded font-semibold text-xs text-white uppercase tracking-widest hover:bg-yellow-700 focus:outline-none transition ease-in-out duration-150 cursor-pointer",this.class?this.class:" px-2 py-1"]),onClick:e[2]||(e[2]=(...s)=>o.goTo&&o.goTo(...s))},[u(i.$slots,"default")],10,g)):d("",!0),t.buttonType=="danger"?(n(),r("button",{key:3,type:t.type,class:a(["shadow-md inline-flex items-center bg-red-600 border border-transparent rounded font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-800 focus:outline-none transition ease-in-out duration-150 cursor-pointer",this.class?this.class:" px-2 py-1"]),onClick:e[3]||(e[3]=(...s)=>o.goTo&&o.goTo(...s))},[u(i.$slots,"default")],10,p)):d("",!0),t.buttonType=="blue"?(n(),r("button",{key:4,type:t.type,class:a(["shadow-md inline-flex items-center bg-blue-600 border border-transparent rounded font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-800 focus:outline-none transition ease-in-out duration-150 cursor-pointer",this.class?this.class:" px-2 py-1"]),onClick:e[4]||(e[4]=(...s)=>o.goTo&&o.goTo(...s))},[u(i.$slots,"default")],10,f)):d("",!0),t.buttonType=="gray"?(n(),r("button",{key:5,type:t.type,class:a(["shadow-md inline-flex items-center bg-gray-500 border border-transparent rounded font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-600 focus:outline-none transition ease-in-out duration-150 cursor-pointer",this.class?this.class:"px-4 py-2"]),onClick:e[5]||(e[5]=(...s)=>o.goTo&&o.goTo(...s))},[u(i.$slots,"default")],10,h)):d("",!0)])}const v=l(b,[["render",m]]);export{v as B};
