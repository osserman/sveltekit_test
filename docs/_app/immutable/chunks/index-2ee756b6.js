function $(){}const st=t=>t;function G(t,n){for(const e in n)t[e]=n[e];return t}function z(t){return t()}function M(){return Object.create(null)}function y(t){t.forEach(z)}function J(t){return typeof t=="function"}function ft(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function K(t){return Object.keys(t).length===0}function Q(t,...n){if(t==null)return $;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function at(t,n,e){t.$$.on_destroy.push(Q(n,e))}function dt(t,n,e,i){if(t){const c=B(t,n,e,i);return t[0](c)}}function B(t,n,e,i){return t[1]&&i?G(e.ctx.slice(),t[1](i(n))):e.ctx}function _t(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],o=Math.max(n.dirty.length,c.length);for(let l=0;l<o;l+=1)s[l]=n.dirty[l]|c[l];return s}return n.dirty|c}return n.dirty}function ht(t,n,e,i,c,s){if(c){const o=B(n,e,i,s);t.p(o,c)}}function mt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}const L=typeof window!="undefined";let pt=L?()=>window.performance.now():()=>Date.now(),O=L?t=>requestAnimationFrame(t):$;const _=new Set;function T(t){_.forEach(n=>{n.c(t)||(_.delete(n),n.f())}),_.size!==0&&O(T)}function yt(t){let n;return _.size===0&&O(T),{promise:new Promise(e=>{_.add(n={c:t,f:e})}),abort(){_.delete(n)}}}let E=!1;function W(){E=!0}function R(){E=!1}function U(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function V(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=u?c+1:U(1,c,g=>n[e[g]].claim_order,u))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const s=[],o=[];let l=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);l>=r;l--)o.push(n[l]);l--}for(;l>=0;l--)o.push(n[l]);s.reverse(),o.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<o.length;r++){for(;u<s.length&&o[r].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(o[r],a)}}function X(t,n){if(E){for(V(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function gt(t,n,e){E&&!e?X(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Y(t){t.parentNode.removeChild(t)}function Z(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function xt(){return v(" ")}function bt(){return v("")}function wt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function $t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function tt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function D(t,n,e,i,c=!1){nt(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(n(l)){const r=e(l);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(n(l)){const r=e(l);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function et(t,n,e,i){return D(t,c=>c.nodeName===n,c=>{const s=[];for(let o=0;o<c.attributes.length;o++){const l=c.attributes[o];e[l.name]||s.push(l.name)}s.forEach(o=>c.removeAttribute(o))},()=>i(n))}function Et(t,n,e){return et(t,n,e,Z)}function it(t,n){return D(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>v(n),!0)}function kt(t){return it(t," ")}function At(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function St(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function jt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let p;function m(t){p=t}function k(){if(!p)throw new Error("Function called outside component initialization");return p}function vt(t){k().$$.on_mount.push(t)}function Nt(t){k().$$.after_update.push(t)}function Ct(t,n){return k().$$.context.set(t,n),n}function Mt(t){return k().$$.context.get(t)}const h=[],q=[],b=[],P=[],F=Promise.resolve();let S=!1;function H(){S||(S=!0,F.then(I))}function qt(){return H(),F}function j(t){b.push(t)}const A=new Set;let x=0;function I(){const t=p;do{for(;x<h.length;){const n=h[x];x++,m(n),rt(n.$$)}for(m(null),h.length=0,x=0;q.length;)q.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];A.has(e)||(A.add(e),e())}b.length=0}while(h.length);for(;P.length;)P.pop()();S=!1,A.clear(),m(t)}function rt(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const w=new Set;let d;function Pt(){d={r:0,c:[],p:d}}function zt(){d.r||y(d.c),d=d.p}function ct(t,n){t&&t.i&&(w.delete(t),t.i(n))}function Bt(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),d.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Lt(t,n){const e={},i={},c={$$scope:1};let s=t.length;for(;s--;){const o=t[s],l=n[s];if(l){for(const r in o)r in l||(i[r]=1);for(const r in l)c[r]||(e[r]=l[r],c[r]=1);t[s]=l}else for(const r in o)c[r]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Ot(t){return typeof t=="object"&&t!==null?t:{}}function Tt(t){t&&t.c()}function Dt(t,n){t&&t.l(n)}function ot(t,n,e,i){const{fragment:c,on_mount:s,on_destroy:o,after_update:l}=t.$$;c&&c.m(n,e),i||j(()=>{const r=s.map(z).filter(J);o?o.push(...r):y(r),t.$$.on_mount=[]}),l.forEach(j)}function lt(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(h.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ft(t,n,e,i,c,s,o,l=[-1]){const r=p;m(t);const u=t.$$={fragment:null,ctx:null,props:s,update:$,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:M(),dirty:l,skip_bound:!1,root:n.target||r.$$.root};o&&o(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,g,...N)=>{const C=N.length?N[0]:g;return u.ctx&&c(u.ctx[f],u.ctx[f]=C)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](C),a&&ut(t,f)),g}):[],u.update(),a=!0,y(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){W();const f=tt(n.target);u.fragment&&u.fragment.l(f),f.forEach(Y)}else u.fragment&&u.fragment.c();n.intro&&ct(t.$$.fragment),ot(t,n.target,n.anchor,n.customElement),R(),I()}m(r)}class Ht{$destroy(){lt(this,1),this.$destroy=$}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!K(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Ot as A,lt as B,G as C,qt as D,$ as E,Mt as F,pt as G,yt as H,st as I,X as J,at as K,dt as L,jt as M,wt as N,ht as O,mt as P,_t as Q,Ht as S,tt as a,$t as b,Et as c,Y as d,Z as e,St as f,gt as g,it as h,Ft as i,At as j,xt as k,bt as l,kt as m,Pt as n,Bt as o,zt as p,ct as q,Ct as r,ft as s,v as t,Nt as u,vt as v,Tt as w,Dt as x,ot as y,Lt as z};
