import{m as B,o as b,F as j,w as K,g as _,i as U,u as q,l as R,H as D,t as F,p as H,N as w,b as m,v as Q,e as k,_ as O,O as V}from"./transition-bcf256d9.js";import{Z as $,q as x,A as P,x as S,Y as W,s as Y,_ as Z,O as M,Q as J}from"./app-875b5ae4.js";import{b as X}from"./use-resolve-button-type-31cd41ef.js";function z(t){throw new Error("Unexpected object: "+t)}var h=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(h||{});function G(t,a){let r=a.resolveItems();if(r.length<=0)return null;let i=a.resolveActiveIndex(),e=i??-1,o=(()=>{switch(t.focus){case 0:return r.findIndex(l=>!a.resolveDisabled(l));case 1:{let l=r.slice().reverse().findIndex((c,v,d)=>e!==-1&&d.length-v-1>=e?!1:!a.resolveDisabled(c));return l===-1?l:r.length-1-l}case 2:return r.findIndex((l,c)=>c<=e?!1:!a.resolveDisabled(l));case 3:{let l=r.slice().reverse().findIndex(c=>!a.resolveDisabled(c));return l===-1?l:r.length-1-l}case 4:return r.findIndex(l=>a.resolveId(l)===t.id);case 5:return null;default:z(t)}})();return o===-1?i:o}function ee({container:t,accept:a,walk:r,enabled:i}){$(()=>{let e=t.value;if(!e||i!==void 0&&!i.value)return;let o=B(t);if(!o)return;let l=Object.assign(v=>a(v),{acceptNode:a}),c=o.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,l,!1);for(;c.nextNode();)r(c.currentNode)})}function E(t){return[t.screenX,t.screenY]}function te(){let t=x([-1,-1]);return{wasMoved(a){let r=E(a);return t.value[0]===r[0]&&t.value[1]===r[1]?!1:(t.value=r,!0)},update(a){t.value=E(a)}}}let A=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function N(t){var a,r;let i=(a=t.innerText)!=null?a:"",e=t.cloneNode(!0);if(!(e instanceof HTMLElement))return i;let o=!1;for(let c of e.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))c.remove(),o=!0;let l=o?(r=e.innerText)!=null?r:"":i;return A.test(l)&&(l=l.replace(A,"")),l}function ne(t){let a=t.getAttribute("aria-label");if(typeof a=="string")return a.trim();let r=t.getAttribute("aria-labelledby");if(r){let i=r.split(" ").map(e=>{let o=document.getElementById(e);if(o){let l=o.getAttribute("aria-label");return typeof l=="string"?l.trim():N(o).trim()}return null}).filter(Boolean);if(i.length>0)return i.join(", ")}return N(t).trim()}function le(t){let a=x(""),r=x("");return()=>{let i=b(t);if(!i)return"";let e=i.innerText;if(a.value===e)return r.value;let o=ne(i).trim().toLowerCase();return a.value=e,r.value=o,o}}var ae=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(ae||{}),re=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(re||{});function ue(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let C=Symbol("MenuContext");function T(t){let a=J(C,null);if(a===null){let r=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,T),r}return a}let de=P({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:a,attrs:r}){let i=x(1),e=x(null),o=x(null),l=x([]),c=x(""),v=x(null),d=x(1);function n(s=p=>p){let p=v.value!==null?l.value[v.value]:null,f=V(s(l.value.slice()),I=>b(I.dataRef.domRef)),u=p?f.indexOf(p):null;return u===-1&&(u=null),{items:f,activeItemIndex:u}}let g={menuState:i,buttonRef:e,itemsRef:o,items:l,searchQuery:c,activeItemIndex:v,activationTrigger:d,closeMenu:()=>{i.value=1,v.value=null},openMenu:()=>i.value=0,goToItem(s,p,f){let u=n(),I=G(s===h.Specific?{focus:h.Specific,id:p}:{focus:s},{resolveItems:()=>u.items,resolveActiveIndex:()=>u.activeItemIndex,resolveId:y=>y.id,resolveDisabled:y=>y.dataRef.disabled});c.value="",v.value=I,d.value=f??1,l.value=u.items},search(s){let p=c.value!==""?0:1;c.value+=s.toLowerCase();let f=(v.value!==null?l.value.slice(v.value+p).concat(l.value.slice(0,v.value+p)):l.value).find(I=>I.dataRef.textValue.startsWith(c.value)&&!I.dataRef.disabled),u=f?l.value.indexOf(f):-1;u===-1||u===v.value||(v.value=u,d.value=1)},clearSearch(){c.value=""},registerItem(s,p){let f=n(u=>[...u,{id:s,dataRef:p}]);l.value=f.items,v.value=f.activeItemIndex,d.value=1},unregisterItem(s){let p=n(f=>{let u=f.findIndex(I=>I.id===s);return u!==-1&&f.splice(u,1),f});l.value=p.items,v.value=p.activeItemIndex,d.value=1}};return j([e,o],(s,p)=>{var f;g.closeMenu(),K(p,_.Loose)||(s.preventDefault(),(f=b(e))==null||f.focus())},S(()=>i.value===0)),W(C,g),U(S(()=>q(i.value,{0:R.Open,1:R.Closed}))),()=>{let s={open:i.value===0,close:g.closeMenu};return D({ourProps:{},theirProps:t,slot:s,slots:a,attrs:r,name:"Menu"})}}}),ce=P({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${F()}`}},setup(t,{attrs:a,slots:r,expose:i}){let e=T("MenuButton");i({el:e.buttonRef,$el:e.buttonRef});function o(d){switch(d.key){case m.Space:case m.Enter:case m.ArrowDown:d.preventDefault(),d.stopPropagation(),e.openMenu(),M(()=>{var n;(n=b(e.itemsRef))==null||n.focus({preventScroll:!0}),e.goToItem(h.First)});break;case m.ArrowUp:d.preventDefault(),d.stopPropagation(),e.openMenu(),M(()=>{var n;(n=b(e.itemsRef))==null||n.focus({preventScroll:!0}),e.goToItem(h.Last)});break}}function l(d){switch(d.key){case m.Space:d.preventDefault();break}}function c(d){t.disabled||(e.menuState.value===0?(e.closeMenu(),M(()=>{var n;return(n=b(e.buttonRef))==null?void 0:n.focus({preventScroll:!0})})):(d.preventDefault(),e.openMenu(),ue(()=>{var n;return(n=b(e.itemsRef))==null?void 0:n.focus({preventScroll:!0})})))}let v=X(S(()=>({as:t.as,type:a.type})),e.buttonRef);return()=>{var d;let n={open:e.menuState.value===0},{id:g,...s}=t,p={ref:e.buttonRef,id:g,type:v.value,"aria-haspopup":"menu","aria-controls":(d=b(e.itemsRef))==null?void 0:d.id,"aria-expanded":t.disabled?void 0:e.menuState.value===0,onKeydown:o,onKeyup:l,onClick:c};return D({ourProps:p,theirProps:s,slot:n,attrs:a,slots:r,name:"MenuButton"})}}}),ve=P({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${F()}`}},setup(t,{attrs:a,slots:r,expose:i}){let e=T("MenuItems"),o=x(null);i({el:e.itemsRef,$el:e.itemsRef}),ee({container:S(()=>b(e.itemsRef)),enabled:S(()=>e.menuState.value===0),accept(n){return n.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:n.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(n){n.setAttribute("role","none")}});function l(n){var g;switch(o.value&&clearTimeout(o.value),n.key){case m.Space:if(e.searchQuery.value!=="")return n.preventDefault(),n.stopPropagation(),e.search(n.key);case m.Enter:if(n.preventDefault(),n.stopPropagation(),e.activeItemIndex.value!==null){let s=e.items.value[e.activeItemIndex.value];(g=b(s.dataRef.domRef))==null||g.click()}e.closeMenu(),O(b(e.buttonRef));break;case m.ArrowDown:return n.preventDefault(),n.stopPropagation(),e.goToItem(h.Next);case m.ArrowUp:return n.preventDefault(),n.stopPropagation(),e.goToItem(h.Previous);case m.Home:case m.PageUp:return n.preventDefault(),n.stopPropagation(),e.goToItem(h.First);case m.End:case m.PageDown:return n.preventDefault(),n.stopPropagation(),e.goToItem(h.Last);case m.Escape:n.preventDefault(),n.stopPropagation(),e.closeMenu(),M(()=>{var s;return(s=b(e.buttonRef))==null?void 0:s.focus({preventScroll:!0})});break;case m.Tab:n.preventDefault(),n.stopPropagation(),e.closeMenu(),M(()=>Q(b(e.buttonRef),n.shiftKey?k.Previous:k.Next));break;default:n.key.length===1&&(e.search(n.key),o.value=setTimeout(()=>e.clearSearch(),350));break}}function c(n){switch(n.key){case m.Space:n.preventDefault();break}}let v=H(),d=S(()=>v!==null?(v.value&R.Open)===R.Open:e.menuState.value===0);return()=>{var n,g;let s={open:e.menuState.value===0},{id:p,...f}=t,u={"aria-activedescendant":e.activeItemIndex.value===null||(n=e.items.value[e.activeItemIndex.value])==null?void 0:n.id,"aria-labelledby":(g=b(e.buttonRef))==null?void 0:g.id,id:p,onKeydown:l,onKeyup:c,role:"menu",tabIndex:0,ref:e.itemsRef};return D({ourProps:u,theirProps:f,slot:s,attrs:a,slots:r,features:w.RenderStrategy|w.Static,visible:d.value,name:"MenuItems"})}}}),pe=P({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${F()}`}},setup(t,{slots:a,attrs:r,expose:i}){let e=T("MenuItem"),o=x(null);i({el:o,$el:o});let l=S(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===t.id:!1),c=le(o),v=S(()=>({disabled:t.disabled,get textValue(){return c()},domRef:o}));Y(()=>e.registerItem(t.id,v)),Z(()=>e.unregisterItem(t.id)),$(()=>{e.menuState.value===0&&l.value&&e.activationTrigger.value!==0&&M(()=>{var u,I;return(I=(u=b(o))==null?void 0:u.scrollIntoView)==null?void 0:I.call(u,{block:"nearest"})})});function d(u){if(t.disabled)return u.preventDefault();e.closeMenu(),O(b(e.buttonRef))}function n(){if(t.disabled)return e.goToItem(h.Nothing);e.goToItem(h.Specific,t.id)}let g=te();function s(u){g.update(u)}function p(u){g.wasMoved(u)&&(t.disabled||l.value||e.goToItem(h.Specific,t.id,0))}function f(u){g.wasMoved(u)&&(t.disabled||l.value&&e.goToItem(h.Nothing))}return()=>{let{disabled:u}=t,I={active:l.value,disabled:u,close:e.closeMenu},{id:y,...L}=t;return D({ourProps:{id:y,ref:o,role:"menuitem",tabIndex:u===!0?void 0:-1,"aria-disabled":u===!0?!0:void 0,disabled:void 0,onClick:d,onFocus:n,onPointerenter:s,onMouseenter:s,onPointermove:p,onMousemove:p,onPointerleave:f,onMouseleave:f},theirProps:{...r,...L},slot:I,attrs:r,slots:a,name:"MenuItem"})}}});export{de as M,ce as R,ve as h,pe as y};
