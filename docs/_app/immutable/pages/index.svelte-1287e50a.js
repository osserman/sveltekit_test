import{a0 as K,S as z,i as N,s as R,e as w,t as F,k as A,c as _,a as b,h as H,d as h,m as M,b as d,Z as D,g as j,G as p,H as q,j as Y,a1 as Z,a2 as L,K as Q,Y as W,E,a3 as X,_ as ee,q as J,J as te,M as se,a4 as ae,w as le,O as re,x as ie,y as ne,o as oe,B as ce}from"../chunks/index-fb2ad01a.js";import{b as P}from"../chunks/paths-396f020f.js";import{f as I,h as T,a as me}from"../chunks/store-614d05d9.js";import{c as de,f as he}from"../chunks/index-b2bec037.js";import{p as C}from"../chunks/projects-6afdfd1c.js";import"../chunks/index-97b513d5.js";function fe(m,{from:t,to:e},n={}){const l=getComputedStyle(m),c=l.transform==="none"?"":l.transform,[i,a]=l.transformOrigin.split(" ").map(parseFloat),s=t.left+t.width*i/e.width-(e.left+i),r=t.top+t.height*a/e.height-(e.top+a),{delay:o=0,duration:v=y=>Math.sqrt(y)*120,easing:k=de}=n;return{delay:o,duration:K(v)?v(Math.sqrt(s*s+r*r)):v,easing:k,css:(y,g)=>{const $=g*s,x=g*r,S=y+g*t.width/e.width,u=y+g*t.height/e.height;return`transform: ${c} translate(${$}px, ${x}px) scale(${S}, ${u});`}}}function G(m,t,e){const n=m.slice();return n[6]=t[e],n}function U(m,t){let e,n,l=t[6].description+"",c,i,a,s,r,o,v,k,y,g=E,$,x;function S(){return t[2](t[6])}return{key:m,first:null,c(){e=w("a"),n=w("p"),c=F(l),i=A(),a=w("div"),s=w("img"),this.h()},l(u){e=_(u,"A",{href:!0,class:!0});var f=b(e);n=_(f,"P",{class:!0});var O=b(n);c=H(O,l),O.forEach(h),i=M(f),a=_(f,"DIV",{class:!0});var B=b(a);s=_(B,"IMG",{src:!0,alt:!0,class:!0}),B.forEach(h),f.forEach(h),this.h()},h(){d(n,"class","svelte-1mws0w5"),D(s.src,r=P+"/imgs/"+t[6].imgUrl)||d(s,"src",r),d(s,"alt",o=t[6].imgAlt),d(s,"class","svelte-1mws0w5"),d(a,"class","img-background svelte-1mws0w5"),d(e,"href",v=`${P}/${t[6].slug}`),d(e,"class","item-wrapper svelte-1mws0w5"),this.first=e},m(u,f){j(u,e,f),p(e,n),p(n,c),p(e,i),p(e,a),p(a,s),$||(x=[q(e,"mouseenter",S),q(e,"mouseleave",t[3])],$=!0)},p(u,f){t=u,f&2&&l!==(l=t[6].description+"")&&Y(c,l),f&2&&!D(s.src,r=P+"/imgs/"+t[6].imgUrl)&&d(s,"src",r),f&2&&o!==(o=t[6].imgAlt)&&d(s,"alt",o),f&2&&v!==(v=`${P}/${t[6].slug}`)&&d(e,"href",v)},r(){y=e.getBoundingClientRect()},f(){Z(e),g()},a(){g(),g=L(e,y,fe,{duration:500})},i(u){k||Q(()=>{k=W(e,he,{duration:300}),k.start()})},o:E,d(u){u&&h(e),$=!1,X(x)}}}function V(m){let t,e,n,l,c;return{c(){t=w("div"),e=w("button"),n=F("Show All Projects"),this.h()},l(i){t=_(i,"DIV",{class:!0});var a=b(t);e=_(a,"BUTTON",{class:!0});var s=b(e);n=H(s,"Show All Projects"),s.forEach(h),a.forEach(h),this.h()},h(){d(e,"class","svelte-1mws0w5"),d(t,"class","show-all svelte-1mws0w5")},m(i,a){j(i,t,a),p(t,e),p(e,n),l||(c=q(e,"click",m[4]),l=!0)},p:E,d(i){i&&h(t),l=!1,c()}}}function ue(m){let t,e=[],n=new Map,l,c=m[1];const i=s=>s[6];for(let s=0;s<c.length;s+=1){let r=G(m,c,s),o=i(r);n.set(o,e[s]=U(o,r))}let a=m[0]!="all"&&V(m);return{c(){t=w("div");for(let s=0;s<e.length;s+=1)e[s].c();l=A(),a&&a.c(),this.h()},l(s){t=_(s,"DIV",{class:!0});var r=b(t);for(let o=0;o<e.length;o+=1)e[o].l(r);l=M(r),a&&a.l(r),r.forEach(h),this.h()},h(){d(t,"class","wrapper svelte-1mws0w5")},m(s,r){j(s,t,r);for(let o=0;o<e.length;o+=1)e[o].m(t,null);p(t,l),a&&a.m(t,null)},p(s,[r]){if(r&2){c=s[1];for(let o=0;o<e.length;o+=1)e[o].r();e=ee(e,r,i,1,s,c,n,t,ae,U,l,G);for(let o=0;o<e.length;o+=1)e[o].a()}s[0]!="all"?a?a.p(s,r):(a=V(s),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},i(s){for(let r=0;r<c.length;r+=1)J(e[r])},o:E,d(s){s&&h(t);for(let r=0;r<e.length;r+=1)e[r].d();a&&a.d()}}}function pe(m,t,e){let n,l;te(m,I,s=>e(0,l=s)),se();const c=s=>T.change(s),i=()=>T.reset(),a=()=>{me.set(null),I.set("all")};return m.$$.update=()=>{m.$$.dirty&1&&e(1,n=l=="all"?C:C.filter(s=>s[l]>1).sort((s,r)=>r[l]-s[l]))},[l,n,c,i,a]}class we extends z{constructor(t){super(),N(this,t,pe,ue,R,{})}}function _e(m){let t,e,n,l,c;return l=new we({}),{c(){t=w("meta"),e=A(),n=w("section"),le(l.$$.fragment),this.h()},l(i){const a=re('[data-svelte="svelte-ibf3mp"]',document.head);t=_(a,"META",{name:!0,content:!0}),a.forEach(h),e=M(i),n=_(i,"SECTION",{class:!0});var s=b(n);ie(l.$$.fragment,s),s.forEach(h),this.h()},h(){document.title="Stephen's Portfolio",d(t,"name","description"),d(t,"content","Stephen Osserman Portfolio"),d(n,"class","svelte-1do70bi")},m(i,a){p(document.head,t),j(i,e,a),j(i,n,a),ne(l,n,null),c=!0},p:E,i(i){c||(J(l.$$.fragment,i),c=!0)},o(i){oe(l.$$.fragment,i),c=!1},d(i){h(t),i&&h(e),i&&h(n),ce(l)}}}const je=!0;class Ee extends z{constructor(t){super(),N(this,t,null,_e,R,{})}}export{Ee as default,je as prerender};
