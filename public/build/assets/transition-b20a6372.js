import{W as ot,X as S,F as ke,Q as A,Y as x,O as He,Z as D,q as g,x as m,A as C,s as F,_ as N,G as te,N as it,B as ut,$ as st,n as dt}from"./app-698f1bce.js";function M(e,t,...n){if(e in t){let l=t[e];return typeof l=="function"?l(...n):l}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,M),r}var se=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(se||{}),B=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(B||{});function j({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...l}){var a;let o=Be(r,n),i=Object.assign(l,{props:o});if(e||t&2&&o.static)return ye(i);if(t&1){let s=(a=o.unmount)==null||a?0:1;return M(s,{0(){return null},1(){return ye({...l,props:{...o,hidden:!0,style:{display:"none"}}})}})}return ye(i)}function ye({props:e,attrs:t,slots:n,slot:r,name:l}){var a,o;let{as:i,...s}=Ie(e,["unmount","static"]),u=(a=n.default)==null?void 0:a.call(n,r),d={};if(r){let p=!1,c=[];for(let[f,v]of Object.entries(r))typeof v=="boolean"&&(p=!0),v===!0&&c.push(f);p&&(d["data-headlessui-state"]=c.join(" "))}if(i==="template"){if(u=Re(u??[]),Object.keys(s).length>0||Object.keys(t).length>0){let[p,...c]=u??[];if(!ct(p)||c.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${l} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(s).concat(Object.keys(t)).map(h=>h.trim()).filter((h,E,U)=>U.indexOf(h)===E).sort((h,E)=>h.localeCompare(E)).map(h=>`  - ${h}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(h=>`  - ${h}`).join(`
`)].join(`
`));let f=Be((o=p.props)!=null?o:{},s),v=ot(p,f);for(let h in f)h.startsWith("on")&&(v.props||(v.props={}),v.props[h]=f[h]);return v}return Array.isArray(u)&&u.length===1?u[0]:u}return S(i,Object.assign({},s,d),{default:()=>u})}function Re(e){return e.flatMap(t=>t.type===ke?Re(t.children):[t])}function Be(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let l in r)l.startsWith("on")&&typeof r[l]=="function"?(n[l]!=null||(n[l]=[]),n[l].push(r[l])):t[l]=r[l];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](l,...a){let o=n[r];for(let i of o){if(l instanceof Event&&l.defaultPrevented)return;i(l,...a)}}});return t}function on(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function Ie(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function ct(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let ft=0;function vt(){return++ft}function ce(){return vt()}var Ue=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Ue||{});function b(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let We=Symbol("Context");var L=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(L||{});function pt(){return $e()!==null}function $e(){return A(We,null)}function mt(e){x(We,e)}var ht=Object.defineProperty,gt=(e,t,n)=>t in e?ht(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ce=(e,t,n)=>(gt(e,typeof t!="symbol"?t+"":t,n),n);class yt{constructor(){Ce(this,"current",this.detect()),Ce(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let ne=new yt;function G(e){if(ne.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=b(e);if(t)return t.ownerDocument}return document}let Ee=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var R=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(R||{}),Ve=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Ve||{}),bt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(bt||{});function _e(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Ee)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var qe=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(qe||{});function Ge(e,t=0){var n;return e===((n=G(e))==null?void 0:n.body)?!1:M(t,{0(){return e.matches(Ee)},1(){let r=e;for(;r!==null;){if(r.matches(Ee))return!0;r=r.parentElement}return!1}})}function un(e){let t=G(e);He(()=>{t&&!Ge(t.activeElement,0)&&I(e)})}var wt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(wt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function I(e){e==null||e.focus({preventScroll:!0})}let Et=["textarea","input"].join(",");function St(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Et))!=null?n:!1}function Tt(e,t=n=>n){return e.slice().sort((n,r)=>{let l=t(n),a=t(r);if(l===null||a===null)return 0;let o=l.compareDocumentPosition(a);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function sn(e,t){return ee(_e(),t,{relativeTo:e})}function ee(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){var a;let o=(a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?a:document,i=Array.isArray(e)?n?Tt(e):e:_e(e);l.length>0&&i.length>1&&(i=i.filter(v=>!l.includes(v))),r=r??o.activeElement;let s=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(r))-1;if(t&4)return Math.max(0,i.indexOf(r))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},p=0,c=i.length,f;do{if(p>=c||p+c<=0)return 0;let v=u+p;if(t&16)v=(v+c)%c;else{if(v<0)return 3;if(v>=c)return 1}f=i[v],f==null||f.focus(d),p+=s}while(f!==o.activeElement);return t&6&&St(f)&&f.select(),2}function xe(e,t,n){ne.isServer||D(r=>{document.addEventListener(e,t,n),r(()=>document.removeEventListener(e,t,n))})}function Ye(e,t,n){ne.isServer||D(r=>{window.addEventListener(e,t,n),r(()=>window.removeEventListener(e,t,n))})}function Lt(e,t,n=m(()=>!0)){function r(a,o){if(!n.value||a.defaultPrevented)return;let i=o(a);if(i===null||!i.getRootNode().contains(i))return;let s=function u(d){return typeof d=="function"?u(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let u of s){if(u===null)continue;let d=u instanceof HTMLElement?u:b(u);if(d!=null&&d.contains(i)||a.composed&&a.composedPath().includes(d))return}return!Ge(i,qe.Loose)&&i.tabIndex!==-1&&a.preventDefault(),t(a,i)}let l=g(null);xe("mousedown",a=>{var o,i;n.value&&(l.value=((i=(o=a.composedPath)==null?void 0:o.call(a))==null?void 0:i[0])||a.target)},!0),xe("click",a=>{l.value&&(r(a,()=>l.value),l.value=null)},!0),Ye("blur",a=>r(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var de=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(de||{});let Se=C({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:r,...l}=e,a={"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return j({ourProps:a,theirProps:l,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function Ft(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function fe(){let e=[],t={addEventListener(n,r,l,a){return n.addEventListener(r,l,a),t.add(()=>n.removeEventListener(r,l,a))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let r=setTimeout(...n);t.add(()=>clearTimeout(r))},style(n,r,l){let a=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:l}),this.add(()=>{Object.assign(n.style,{[r]:a})})},group(n){let r=fe();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let l of e.splice(r,1))l()}},dispose(){for(let n of e.splice(0))n()}};return t}var J=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(J||{});function Ot(){let e=g(0);return Ye("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Ke(e,t,n,r){ne.isServer||D(l=>{e=e??window,e.addEventListener(t,n,r),l(()=>e.removeEventListener(t,n,r))})}function Xe(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function $t(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Qe(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let r=b(n);r instanceof HTMLElement&&t.add(r)}return t}var ze=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(ze||{});let z=Object.assign(C({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:g(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:r}){let l=g(null);r({el:l,$el:l});let a=m(()=>G(l)),o=g(!1);F(()=>o.value=!0),N(()=>o.value=!1),At({ownerDocument:a},m(()=>o.value&&!!(e.features&16)));let i=Dt({ownerDocument:a,container:l,initialFocus:m(()=>e.initialFocus)},m(()=>o.value&&!!(e.features&2)));Ct({ownerDocument:a,container:l,containers:e.containers,previousActiveElement:i},m(()=>o.value&&!!(e.features&8)));let s=Ot();function u(f){let v=b(l);v&&(h=>h())(()=>{M(s.value,{[J.Forwards]:()=>{ee(v,R.First,{skipElements:[f.relatedTarget]})},[J.Backwards]:()=>{ee(v,R.Last,{skipElements:[f.relatedTarget]})}})})}let d=g(!1);function p(f){f.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function c(f){if(!o.value)return;let v=Qe(e.containers);b(l)instanceof HTMLElement&&v.add(b(l));let h=f.relatedTarget;h instanceof HTMLElement&&h.dataset.headlessuiFocusGuard!=="true"&&(Ze(v,h)||(d.value?ee(b(l),M(s.value,{[J.Forwards]:()=>R.Next,[J.Backwards]:()=>R.Previous})|R.WrapAround,{relativeTo:f.target}):f.target instanceof HTMLElement&&I(f.target)))}return()=>{let f={},v={ref:l,onKeydown:p,onFocusout:c},{features:h,initialFocus:E,containers:U,...O}=e;return S(ke,[!!(h&4)&&S(Se,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:de.Focusable}),j({ourProps:v,theirProps:{...t,...O},slot:f,attrs:t,slots:n,name:"FocusTrap"}),!!(h&4)&&S(Se,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:de.Focusable})])}}}),{features:ze}),_=[];$t(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&_[0]!==t.target&&(_.unshift(t.target),_=_.filter(n=>n!=null&&n.isConnected),_.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Pt(e){let t=g(_.slice());return te([e],([n],[r])=>{r===!0&&n===!1?Xe(()=>{t.value.splice(0)}):r===!1&&n===!0&&(t.value=_.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(r=>r!=null&&r.isConnected))!=null?n:null}}function At({ownerDocument:e},t){let n=Pt(t);F(()=>{D(()=>{var r,l;t.value||((r=e.value)==null?void 0:r.activeElement)===((l=e.value)==null?void 0:l.body)&&I(n())},{flush:"post"})}),N(()=>{t.value&&I(n())})}function Dt({ownerDocument:e,container:t,initialFocus:n},r){let l=g(null),a=g(!1);return F(()=>a.value=!0),N(()=>a.value=!1),F(()=>{te([t,n,r],(o,i)=>{if(o.every((u,d)=>(i==null?void 0:i[d])===u)||!r.value)return;let s=b(t);s&&Xe(()=>{var u,d;if(!a.value)return;let p=b(n),c=(u=e.value)==null?void 0:u.activeElement;if(p){if(p===c){l.value=c;return}}else if(s.contains(c)){l.value=c;return}p?I(p):ee(s,R.First|R.NoScroll)===Ve.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),l}function Ct({ownerDocument:e,container:t,containers:n,previousActiveElement:r},l){var a;Ke((a=e.value)==null?void 0:a.defaultView,"focus",o=>{if(!l.value)return;let i=Qe(n);b(t)instanceof HTMLElement&&i.add(b(t));let s=r.value;if(!s)return;let u=o.target;u&&u instanceof HTMLElement?Ze(i,u)?(r.value=u,I(u)):(o.preventDefault(),o.stopPropagation(),I(s)):I(r.value)},!0)}function Ze(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let be=new Map,Z=new Map;function Ne(e,t=g(!0)){D(n=>{var r;if(!t.value)return;let l=b(e);if(!l)return;n(function(){var o;if(!l)return;let i=(o=Z.get(l))!=null?o:1;if(i===1?Z.delete(l):Z.set(l,i-1),i!==1)return;let s=be.get(l);s&&(s["aria-hidden"]===null?l.removeAttribute("aria-hidden"):l.setAttribute("aria-hidden",s["aria-hidden"]),l.inert=s.inert,be.delete(l))});let a=(r=Z.get(l))!=null?r:0;Z.set(l,a+1),a===0&&(be.set(l,{"aria-hidden":l.getAttribute("aria-hidden"),inert:l.inert}),l.setAttribute("aria-hidden","true"),l.inert=!0)})}let Je=Symbol("ForcePortalRootContext");function xt(){return A(Je,!1)}let Me=C({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return x(Je,e.force),()=>{let{force:r,...l}=e;return j({theirProps:l,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}});function Nt(e){let t=G(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let r=t.createElement("div");return r.setAttribute("id","headlessui-portal-root"),t.body.appendChild(r)}let Mt=C({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let r=g(null),l=m(()=>G(r)),a=xt(),o=A(et,null),i=g(a===!0||o==null?Nt(r.value):o.resolveTarget());D(()=>{a||o!=null&&(i.value=o.resolveTarget())});let s=A(Te,null);return F(()=>{let u=b(r);u&&s&&N(s.register(u))}),N(()=>{var u,d;let p=(u=l.value)==null?void 0:u.getElementById("headlessui-portal-root");p&&i.value===p&&i.value.children.length<=0&&((d=i.value.parentElement)==null||d.removeChild(i.value))}),()=>{if(i.value===null)return null;let u={ref:r,"data-headlessui-portal":""};return S(it,{to:i.value},j({ourProps:u,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),Te=Symbol("PortalParentContext");function jt(){let e=A(Te,null),t=g([]);function n(a){return t.value.push(a),e&&e.register(a),()=>r(a)}function r(a){let o=t.value.indexOf(a);o!==-1&&t.value.splice(o,1),e&&e.unregister(a)}let l={register:n,unregister:r,portals:t};return[t,C({name:"PortalWrapper",setup(a,{slots:o}){return x(Te,l),()=>{var i;return(i=o.default)==null?void 0:i.call(o)}}})]}let et=Symbol("PortalGroupContext"),kt=C({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let r=ut({resolveTarget(){return e.target}});return x(et,r),()=>{let{target:l,...a}=e;return j({theirProps:a,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}}),tt=Symbol("StackContext");var Le=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Le||{});function Ht(){return A(tt,()=>{})}function Rt({type:e,enabled:t,element:n,onUpdate:r}){let l=Ht();function a(...o){r==null||r(...o),l(...o)}F(()=>{te(t,(o,i)=>{o?a(0,e,n):i===!0&&a(1,e,n)},{immediate:!0,flush:"sync"})}),N(()=>{t.value&&a(1,e,n)}),x(tt,a)}let Bt=Symbol("DescriptionContext");function It({slot:e=g({}),name:t="Description",props:n={}}={}){let r=g([]);function l(a){return r.value.push(a),()=>{let o=r.value.indexOf(a);o!==-1&&r.value.splice(o,1)}}return x(Bt,{register:l,slot:e,name:t,props:n}),m(()=>r.value.length>0?r.value.join(" "):void 0)}function Ut(e){let t=st(e.getSnapshot());return N(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Wt(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(l){return r.add(l),()=>r.delete(l)},dispatch(l,...a){let o=t[l].call(n,...a);o&&(n=o,r.forEach(i=>i()))}}}function Vt(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,l=r.clientWidth-r.offsetWidth,a=e-l;n.style(r,"paddingRight",`${a}px`)}}}function _t(){if(!Ft())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function l(o){return r.containers.flatMap(i=>i()).some(i=>i.contains(o))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let a=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let i=o.target.closest("a");if(!i)return;let{hash:s}=new URL(i.href),u=t.querySelector(s);u&&!l(u)&&(a=u)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!l(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)})}}}function qt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Gt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let q=Wt(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:fe(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Gt(n)},l=[_t(),Vt(),qt()];l.forEach(({before:a})=>a==null?void 0:a(r)),l.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});q.subscribe(()=>{let e=q.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!r||!l&&r)&&q.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&q.dispatch("TEARDOWN",n)}});function Yt(e,t,n){let r=Ut(q),l=m(()=>{let a=e.value?r.value.get(e.value):void 0;return a?a.count>0:!1});return te([e,t],([a,o],[i],s)=>{if(!a||!o)return;q.dispatch("PUSH",a,n);let u=!1;s(()=>{u||(q.dispatch("POP",i??a,n),u=!0)})},{immediate:!0}),l}function Kt({defaultContainers:e=[],portals:t}={}){let n=g(null),r=G(n);function l(){var a;let o=[];for(let i of e)i!==null&&(i instanceof HTMLElement?o.push(i):"value"in i&&i.value instanceof HTMLElement&&o.push(i.value));if(t!=null&&t.value)for(let i of t.value)o.push(i);for(let i of(a=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?a:[])i!==document.body&&i!==document.head&&i instanceof HTMLElement&&i.id!=="headlessui-portal-root"&&(i.contains(b(n))||o.some(s=>i.contains(s))||o.push(i));return o}return{resolveContainers:l,contains(a){return l().some(o=>o.contains(a))},mainTreeNodeRef:n,MainTreeNode(){return S(Se,{features:de.Hidden,ref:n})}}}var Xt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Xt||{});let Fe=Symbol("DialogContext");function Pe(e){let t=A(Fe,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Pe),n}return t}let ie="DC8F892D-2EBD-447C-A4C8-A03058436FF4",dn=C({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ie},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${ce()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:r,expose:l}){var a;let o=g(!1);F(()=>{o.value=!0});let i=g(0),s=$e(),u=m(()=>e.open===ie&&s!==null?(s.value&L.Open)===L.Open:e.open),d=g(null),p=m(()=>G(d));if(l({el:d,$el:d}),!(e.open!==ie||s!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof u.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value===ie?void 0:e.open}`);let c=m(()=>o.value&&u.value?0:1),f=m(()=>c.value===0),v=m(()=>i.value>1),h=A(Fe,null)!==null,[E,U]=jt(),{resolveContainers:O,mainTreeNodeRef:W,MainTreeNode:re}=Kt({portals:E,defaultContainers:[m(()=>{var y;return(y=T.panelRef.value)!=null?y:d.value})]}),le=m(()=>v.value?"parent":"leaf"),X=m(()=>s!==null?(s.value&L.Closing)===L.Closing:!1),pe=m(()=>h||X.value?!1:f.value),ae=m(()=>{var y,w,$;return($=Array.from((w=(y=p.value)==null?void 0:y.querySelectorAll("body > *"))!=null?w:[]).find(P=>P.id==="headlessui-portal-root"?!1:P.contains(b(W))&&P instanceof HTMLElement))!=null?$:null});Ne(ae,pe);let me=m(()=>v.value?!0:f.value),he=m(()=>{var y,w,$;return($=Array.from((w=(y=p.value)==null?void 0:y.querySelectorAll("[data-headlessui-portal]"))!=null?w:[]).find(P=>P.contains(b(W))&&P instanceof HTMLElement))!=null?$:null});Ne(he,me),Rt({type:"Dialog",enabled:m(()=>c.value===0),element:d,onUpdate:(y,w)=>{if(w==="Dialog")return M(y,{[Le.Add]:()=>i.value+=1,[Le.Remove]:()=>i.value-=1})}});let ge=It({name:"DialogDescription",slot:m(()=>({open:u.value}))}),Y=g(null),T={titleId:Y,panelRef:g(null),dialogState:c,setTitleId(y){Y.value!==y&&(Y.value=y)},close(){t("close",!1)}};x(Fe,T);let Q=m(()=>!(!f.value||v.value));Lt(O,(y,w)=>{T.close(),He(()=>w==null?void 0:w.focus())},Q);let k=m(()=>!(v.value||c.value!==0));Ke((a=p.value)==null?void 0:a.defaultView,"keydown",y=>{k.value&&(y.defaultPrevented||y.key===Ue.Escape&&(y.preventDefault(),y.stopPropagation(),T.close()))});let K=m(()=>!(X.value||c.value!==0||h));return Yt(p,K,y=>{var w;return{containers:[...(w=y.containers)!=null?w:[],O]}}),D(y=>{if(c.value!==0)return;let w=b(d);if(!w)return;let $=new ResizeObserver(P=>{for(let oe of P){let H=oe.target.getBoundingClientRect();H.x===0&&H.y===0&&H.width===0&&H.height===0&&T.close()}});$.observe(w),y(()=>$.disconnect())}),()=>{let{id:y,open:w,initialFocus:$,...P}=e,oe={...n,ref:d,id:y,role:"dialog","aria-modal":c.value===0?!0:void 0,"aria-labelledby":Y.value,"aria-describedby":ge.value},H={open:c.value===0};return S(Me,{force:!0},()=>[S(Mt,()=>S(kt,{target:d.value},()=>S(Me,{force:!1},()=>S(z,{initialFocus:$,containers:O,features:f.value?M(le.value,{parent:z.features.RestoreFocus,leaf:z.features.All&~z.features.FocusLock}):z.features.None},()=>S(U,{},()=>j({ourProps:oe,theirProps:{...P,...n},slot:H,attrs:n,slots:r,visible:c.value===0,features:se.RenderStrategy|se.Static,name:"Dialog"})))))),S(re)])}}}),cn=C({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-overlay-${ce()}`}},setup(e,{attrs:t,slots:n}){let r=Pe("DialogOverlay");function l(a){a.target===a.currentTarget&&(a.preventDefault(),a.stopPropagation(),r.close())}return()=>{let{id:a,...o}=e;return j({ourProps:{id:a,"aria-hidden":!0,onClick:l},theirProps:o,slot:{open:r.dialogState.value===0},attrs:t,slots:n,name:"DialogOverlay"})}}}),fn=C({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:()=>`headlessui-dialog-title-${ce()}`}},setup(e,{attrs:t,slots:n}){let r=Pe("DialogTitle");return F(()=>{r.setTitleId(e.id),N(()=>r.setTitleId(null))}),()=>{let{id:l,...a}=e;return j({ourProps:{id:l},theirProps:a,slot:{open:r.dialogState.value===0},attrs:t,slots:n,name:"DialogTitle"})}}});function Qt(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function we(e,...t){e&&t.length>0&&e.classList.add(...t)}function ue(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Oe=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Oe||{});function zt(e,t){let n=fe();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:l}=getComputedStyle(e),[a,o]=[r,l].map(i=>{let[s=0]=i.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,d)=>d-u);return s});return a!==0?n.setTimeout(()=>t("finished"),a+o):t("finished"),n.add(()=>t("cancelled")),n.dispose}function je(e,t,n,r,l,a){let o=fe(),i=a!==void 0?Qt(a):()=>{};return ue(e,...l),we(e,...t,...n),o.nextFrame(()=>{ue(e,...n),we(e,...r),o.add(zt(e,s=>(ue(e,...r,...t),we(e,...l),i(s))))}),o.add(()=>ue(e,...t,...n,...r,...l)),o.add(()=>i("cancelled")),o.dispose}function V(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let Ae=Symbol("TransitionContext");var Zt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Zt||{});function Jt(){return A(Ae,null)!==null}function en(){let e=A(Ae,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function tn(){let e=A(De,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let De=Symbol("NestingContext");function ve(e){return"children"in e?ve(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function nt(e){let t=g([]),n=g(!1);F(()=>n.value=!0),N(()=>n.value=!1);function r(a,o=B.Hidden){let i=t.value.findIndex(({id:s})=>s===a);i!==-1&&(M(o,{[B.Unmount](){t.value.splice(i,1)},[B.Hidden](){t.value[i].state="hidden"}}),!ve(t)&&n.value&&(e==null||e()))}function l(a){let o=t.value.find(({id:i})=>i===a);return o?o.state!=="visible"&&(o.state="visible"):t.value.push({id:a,state:"visible"}),()=>r(a,B.Unmount)}return{children:t,register:l,unregister:r}}let rt=se.RenderStrategy,nn=C({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r,expose:l}){let a=g(0);function o(){a.value|=L.Opening,t("beforeEnter")}function i(){a.value&=~L.Opening,t("afterEnter")}function s(){a.value|=L.Closing,t("beforeLeave")}function u(){a.value&=~L.Closing,t("afterLeave")}if(!Jt()&&pt())return()=>S(ln,{...e,onBeforeEnter:o,onAfterEnter:i,onBeforeLeave:s,onAfterLeave:u},r);let d=g(null),p=m(()=>e.unmount?B.Unmount:B.Hidden);l({el:d,$el:d});let{show:c,appear:f}=en(),{register:v,unregister:h}=tn(),E=g(c.value?"visible":"hidden"),U={value:!0},O=ce(),W={value:!1},re=nt(()=>{!W.value&&E.value!=="hidden"&&(E.value="hidden",h(O),u())});F(()=>{let T=v(O);N(T)}),D(()=>{if(p.value===B.Hidden&&O){if(c.value&&E.value!=="visible"){E.value="visible";return}M(E.value,{hidden:()=>h(O),visible:()=>v(O)})}});let le=V(e.enter),X=V(e.enterFrom),pe=V(e.enterTo),ae=V(e.entered),me=V(e.leave),he=V(e.leaveFrom),ge=V(e.leaveTo);F(()=>{D(()=>{if(E.value==="visible"){let T=b(d);if(T instanceof Comment&&T.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function Y(T){let Q=U.value&&!f.value,k=b(d);!k||!(k instanceof HTMLElement)||Q||(W.value=!0,c.value&&o(),c.value||s(),T(c.value?je(k,le,X,pe,ae,K=>{W.value=!1,K===Oe.Finished&&i()}):je(k,me,he,ge,ae,K=>{W.value=!1,K===Oe.Finished&&(ve(re)||(E.value="hidden",h(O),u()))})))}return F(()=>{te([c],(T,Q,k)=>{Y(k),U.value=!1},{immediate:!0})}),x(De,re),mt(m(()=>M(E.value,{visible:L.Open,hidden:L.Closed})|a.value)),()=>{let{appear:T,show:Q,enter:k,enterFrom:K,enterTo:y,entered:w,leave:$,leaveFrom:P,leaveTo:oe,...H}=e,lt={ref:d},at={...H,...f.value&&c.value&&ne.isServer?{class:dt([n.class,H.class,...le,...X])}:{}};return j({theirProps:at,ourProps:lt,slot:{},slots:r,attrs:n,features:rt,visible:E.value==="visible",name:"TransitionChild"})}}}),rn=nn,ln=C({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r}){let l=$e(),a=m(()=>e.show===null&&l!==null?(l.value&L.Open)===L.Open:e.show);D(()=>{if(![!0,!1].includes(a.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=g(a.value?"visible":"hidden"),i=nt(()=>{o.value="hidden"}),s=g(!0),u={show:a,appear:m(()=>e.appear||!s.value)};return F(()=>{D(()=>{s.value=!1,a.value?o.value="visible":ve(i)||(o.value="hidden")})}),x(De,i),x(Ae,u),()=>{let d=Ie(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),p={unmount:e.unmount};return j({ourProps:{...p,as:"template"},theirProps:{},slot:{},slots:{...r,default:()=>[S(rn,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...p,...d},r.default)]},attrs:{},features:rt,visible:o.value==="visible",name:"Transition"})}}});export{Lt as F,j as H,on as K,se as N,Tt as O,ee as P,ln as S,Ie as T,dn as U,fn as V,cn as Y,un as _,de as a,Ue as b,Ve as c,Xe as d,R as e,Se as f,qe as g,nn as h,mt as i,L as l,G as m,b as o,$e as p,ce as t,M as u,sn as v,Ge as w};
