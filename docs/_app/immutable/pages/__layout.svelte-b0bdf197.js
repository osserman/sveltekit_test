import{S as C,i as B,s as K,e as b,t as I,c as y,a as E,h as S,d as c,b as _,f as J,F as Q,g as D,G as p,H as L,k as V,m as F,E as O,I as fe,J as P,K as de,L as W,M as pe,w as se,x as ne,y as le,q as H,o as T,B as ie,N as ue,l as X,O as me,P as ve,Q as ge,R as he,p as _e,n as be}from"../chunks/index-fb2ad01a.js";import{p as ye}from"../chunks/stores-e2986485.js";import{b as ce}from"../chunks/paths-396f020f.js";import{s as Y}from"../chunks/index-b2bec037.js";import{a as R,h as xe,f as Z}from"../chunks/store-614d05d9.js";import"../chunks/index-97b513d5.js";function ee(a,e,o){const t=a.slice();return t[4]=e[o],t}function te(a){let e,o=a[4][0].toUpperCase()+a[4].slice(1)+"",t,f,d,h;function i(...s){return a[3](a[4],...s)}return{c(){e=b("a"),t=I(o),this.h()},l(s){e=y(s,"A",{href:!0,style:!0,class:!0});var l=E(e);t=S(l,o),l.forEach(c),this.h()},h(){_(e,"href",f=ce+"/"),J(e,"background-image",re(a[1][a[4]])),_(e,"class","svelte-15g58no"),Q(e,"active",a[0]==a[4])},m(s,l){D(s,e,l),p(e,t),d||(h=L(e,"click",i),d=!0)},p(s,l){a=s,l&2&&J(e,"background-image",re(a[1][a[4]])),l&1&&Q(e,"active",a[0]==a[4])},d(s){s&&c(e),d=!1,h()}}}function ke(a){let e,o,t,f,d,h,i,s=["analytics","infoViz","mapping"],l=[];for(let u=0;u<3;u+=1)l[u]=te(ee(a,s,u));return{c(){e=b("header"),o=b("div"),t=b("h1"),f=b("a"),d=I("Stephen Osserman"),h=V(),i=b("div");for(let u=0;u<3;u+=1)l[u].c();this.h()},l(u){e=y(u,"HEADER",{class:!0});var x=E(e);o=y(x,"DIV",{class:!0});var n=E(o);t=y(n,"H1",{class:!0});var w=E(t);f=y(w,"A",{href:!0,class:!0});var $=E(f);d=S($,"Stephen Osserman"),$.forEach(c),w.forEach(c),h=F(n),i=y(n,"DIV",{class:!0});var z=E(i);for(let v=0;v<3;v+=1)l[v].l(z);z.forEach(c),n.forEach(c),x.forEach(c),this.h()},h(){_(f,"href",ce+"/"),_(f,"class","svelte-15g58no"),_(t,"class","svelte-15g58no"),_(i,"class","btn-group svelte-15g58no"),_(o,"class","center svelte-15g58no"),_(e,"class","svelte-15g58no")},m(u,x){D(u,e,x),p(e,o),p(o,t),p(t,f),p(f,d),p(o,h),p(o,i);for(let n=0;n<3;n+=1)l[n].m(i,null)},p(u,[x]){if(x&7){s=["analytics","infoViz","mapping"];let n;for(n=0;n<3;n+=1){const w=ee(u,s,n);l[n]?l[n].p(w,x):(l[n]=te(w),l[n].c(),l[n].m(i,null))}for(;n<3;n+=1)l[n].d(1)}},i:O,o:O,d(u){u&&c(e),fe(l,u)}}}const oe="rgb(255, 80, 39)";function re(a){let e=Math.min(98,100-a*20),o=Math.min(98,e+30);return"linear-gradient( rgba(0,0,0,0), rgba(0,0,0,0) "+e+"%, "+oe+" "+o+"%, "+oe+" 100%)"}function we(a,e,o){let t,f,d;return P(a,R,i=>o(0,t=i)),P(a,xe,i=>o(1,f=i)),P(a,ye,i=>o(2,d=i)),[t,f,d,(i,s)=>{d.url.pathname=="/"&&(console.log("preventing default"),s.preventDefault()),t==i?(R.set(null),Z.set("all")):(R.set(i),Z.set(i))}]}class Ee extends C{constructor(e){super(),B(this,e,we,ke,K,{})}}function $e(a){let e,o,t,f,d,h,i,s,l,u,x,n,w,$,z,v,M,k,g;return{c(){e=b("footer"),o=b("div"),t=b("p"),f=I("Hi, I'm Stephen. I'm a Visualization Developer and Data Scientist with over a decade of experience working with political and civic data. My academic background includes degrees in "),d=b("em"),h=I("Ethnicity, Race, and Migration"),i=I("; in "),s=b("em"),l=I("Music"),u=I("; and in "),x=b("em"),n=I("Spatial Analysis for Public Health"),w=I(`. The past few years I've been doing more Data Storytelling work and this page contains a sample of projects I've worked on along this journey.
        `),$=b("button"),z=I("Close"),this.h()},l(r){e=y(r,"FOOTER",{class:!0});var m=E(e);o=y(m,"DIV",{});var A=E(o);t=y(A,"P",{class:!0});var j=E(t);f=S(j,"Hi, I'm Stephen. I'm a Visualization Developer and Data Scientist with over a decade of experience working with political and civic data. My academic background includes degrees in "),d=y(j,"EM",{});var N=E(d);h=S(N,"Ethnicity, Race, and Migration"),N.forEach(c),i=S(j,"; in "),s=y(j,"EM",{});var q=E(s);l=S(q,"Music"),q.forEach(c),u=S(j,"; and in "),x=y(j,"EM",{});var U=E(x);n=S(U,"Spatial Analysis for Public Health"),U.forEach(c),w=S(j,`. The past few years I've been doing more Data Storytelling work and this page contains a sample of projects I've worked on along this journey.
        `),$=y(j,"BUTTON",{class:!0});var G=E($);z=S(G,"Close"),G.forEach(c),j.forEach(c),A.forEach(c),m.forEach(c),this.h()},h(){_($,"class","close svelte-1xysj1e"),_(t,"class","svelte-1xysj1e"),_(e,"class","svelte-1xysj1e")},m(r,m){D(r,e,m),p(e,o),p(o,t),p(t,f),p(t,d),p(d,h),p(t,i),p(t,s),p(s,l),p(t,u),p(t,x),p(x,n),p(t,w),p(t,$),p($,z),M=!0,k||(g=L($,"click",a[1]),k=!0)},p:O,i(r){M||(de(()=>{v||(v=W(o,Y,{},!0)),v.run(1)}),M=!0)},o(r){v||(v=W(o,Y,{},!1)),v.run(0),M=!1},d(r){r&&c(e),r&&v&&v.end(),k=!1,g()}}}function je(a){const e=pe();return[e,()=>{e("togglefooter")}]}class Ie extends C{constructor(e){super(),B(this,e,je,$e,K,{})}}function Se(a){let e,o;return e=new Ee({}),{c(){se(e.$$.fragment)},l(t){ne(e.$$.fragment,t)},m(t,f){le(e,t,f),o=!0},i(t){o||(H(e.$$.fragment,t),o=!0)},o(t){T(e.$$.fragment,t),o=!1},d(t){ie(e,t)}}}function ae(a){let e,o;return e=new Ie({}),e.$on("togglefooter",a[4]),{c(){se(e.$$.fragment)},l(t){ne(e.$$.fragment,t)},m(t,f){le(e,t,f),o=!0},p:O,i(t){o||(H(e.$$.fragment,t),o=!0)},o(t){T(e.$$.fragment,t),o=!1},d(t){ie(e,t)}}}function De(a){let e,o,t,f,d,h,i,s,l,u,x,n,w,$,z,v=Se();const M=a[2].default,k=ue(M,a,a[1],null);let g=a[0]&&ae(a);return{c(){e=b("link"),o=b("link"),t=b("link"),f=V(),v&&v.c(),d=V(),h=b("main"),k&&k.c(),i=V(),s=b("div"),l=b("button"),u=I("About Stephen"),x=V(),g&&g.c(),n=X(),this.h()},l(r){const m=me('[data-svelte="svelte-j5yzar"]',document.head);e=y(m,"LINK",{rel:!0,href:!0}),o=y(m,"LINK",{rel:!0,href:!0,crossorigin:!0}),t=y(m,"LINK",{href:!0,rel:!0}),m.forEach(c),f=F(r),v&&v.l(r),d=F(r),h=y(r,"MAIN",{class:!0});var A=E(h);k&&k.l(A),A.forEach(c),i=F(r),s=y(r,"DIV",{class:!0});var j=E(s);l=y(j,"BUTTON",{class:!0});var N=E(l);u=S(N,"About Stephen"),N.forEach(c),j.forEach(c),x=F(r),g&&g.l(r),n=X(),this.h()},h(){_(e,"rel","preconnect"),_(e,"href","https://fonts.googleapis.com"),_(o,"rel","preconnect"),_(o,"href","https://fonts.gstatic.com"),_(o,"crossorigin",""),_(t,"href","https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@100..700&display=swap"),_(t,"rel","stylesheet"),_(h,"class","svelte-19eo7vr"),_(l,"class","svelte-19eo7vr"),_(s,"class","footer-toggle svelte-19eo7vr")},m(r,m){p(document.head,e),p(document.head,o),p(document.head,t),D(r,f,m),v&&v.m(r,m),D(r,d,m),D(r,h,m),k&&k.m(h,null),D(r,i,m),D(r,s,m),p(s,l),p(l,u),D(r,x,m),g&&g.m(r,m),D(r,n,m),w=!0,$||(z=L(l,"click",a[3]),$=!0)},p(r,[m]){k&&k.p&&(!w||m&2)&&ve(k,M,r,r[1],w?he(M,r[1],m,null):ge(r[1]),null),r[0]?g?(g.p(r,m),m&1&&H(g,1)):(g=ae(r),g.c(),H(g,1),g.m(n.parentNode,n)):g&&(be(),T(g,1,1,()=>{g=null}),_e())},i(r){w||(H(v),H(k,r),H(g),w=!0)},o(r){T(v),T(k,r),T(g),w=!1},d(r){c(e),c(o),c(t),r&&c(f),v&&v.d(r),r&&c(d),r&&c(h),k&&k.d(r),r&&c(i),r&&c(s),r&&c(x),g&&g.d(r),r&&c(n),$=!1,z()}}}function ze(a,e,o){let{$$slots:t={},$$scope:f}=e,d=!1;const h=()=>{o(0,d=!d)},i=()=>{o(0,d=!d)};return a.$$set=s=>{"$$scope"in s&&o(1,f=s.$$scope)},[d,f,t,h,i]}class Fe extends C{constructor(e){super(),B(this,e,ze,De,K,{})}}export{Fe as default};