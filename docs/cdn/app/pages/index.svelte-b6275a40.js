import{S as s,i as e,s as t,J as a,K as r,j as n,m as o,o as l,x as c,u as i,v as m,l as f,f as h,d as $,k as g,e as p,t as u,n as d,c as v,a as k,g as E,b,H as w,L as z,I as C}from"../chunks/vendor-4a02687e.js";import{S as j,N as I,M as S,c as x}from"../chunks/@component-docs-abb719a4.js";import{b as L}from"../chunks/paths-6758d194.js";function T(s){let e,t;return e=new a({props:{fw:!0,size:s[0],icon:r.faCog,primaryColor:"#ccc"}}),{c(){n(e.$$.fragment)},l(s){o(e.$$.fragment,s)},m(s,a){l(e,s,a),t=!0},p(s,[t]){const a={};1&t&&(a.size=s[0]),e.$set(a)},i(s){t||(c(e.$$.fragment,s),t=!0)},o(s){i(e.$$.fragment,s),t=!1},d(s){m(e,s)}}}function R(s,e,t){let{size:a="sm"}=e;return s.$$set=s=>{"size"in s&&t(0,a=s.size)},[a]}class A extends s{constructor(s){super(),e(this,s,R,T,t,{size:0})}}function D(s,e,t){const a=s.slice();return a[0]=e[t],a}function G(s){let e,t=s[0].title&&s[0].slug&&function(s){let e,t,a,r,n=s[0].title+"";return{c(){e=p("li"),t=p("a"),a=u(n),this.h()},l(s){e=v(s,"LI",{class:!0});var r=k(e);t=v(r,"A",{href:!0,class:!0});var o=k(t);a=E(o,n),o.forEach($),r.forEach($),this.h()},h(){b(t,"href",r=`${L}/components/${s[0].slug}/`),b(t,"class","svelte-1e0m4ok"),b(e,"class","svelte-1e0m4ok")},m(s,r){h(s,e,r),w(e,t),w(t,a)},p:C,d(s){s&&$(e)}}}(s);return{c(){t&&t.c(),e=f()},l(s){t&&t.l(s),e=f()},m(s,a){t&&t.m(s,a),h(s,e,a)},p(s,e){s[0].title&&s[0].slug&&t.p(s,e)},d(s){t&&t.d(s),s&&$(e)}}}function H(s){let e,t,a,r,f,C,L,T,R,H,N,y,J,K;e=new j({props:{seoTitle:"Reuters Graphics components",seoDescription:"Svelte tools to build graphics pages",shareTitle:"Reuters Graphics components",shareDescription:"Svelte tools to build graphics pages",shareImgPath:"images/reuters-graphics.jpg",lang:"en",hostname:"reuters-graphics.github.io"}}),a=new I({}),f=new S({props:{components:x}}),H=new A({});let M=x,O=[];for(let n=0;n<M.length;n+=1)O[n]=G(D(s,M,n));return{c(){n(e.$$.fragment),t=g(),n(a.$$.fragment),r=g(),n(f.$$.fragment),C=g(),L=p("article"),T=p("section"),R=p("h1"),n(H.$$.fragment),N=u(" Components"),y=g(),J=p("ul");for(let s=0;s<O.length;s+=1)O[s].c();this.h()},l(s){o(e.$$.fragment,s),t=d(s),o(a.$$.fragment,s),r=d(s),o(f.$$.fragment,s),C=d(s),L=v(s,"ARTICLE",{});var n=k(L);T=v(n,"SECTION",{});var l=k(T);R=v(l,"H1",{class:!0});var c=k(R);o(H.$$.fragment,c),N=E(c," Components"),c.forEach($),y=d(l),J=v(l,"UL",{class:!0});var i=k(J);for(let e=0;e<O.length;e+=1)O[e].l(i);i.forEach($),l.forEach($),n.forEach($),this.h()},h(){b(R,"class","svelte-1e0m4ok"),b(J,"class","svelte-1e0m4ok")},m(s,n){l(e,s,n),h(s,t,n),l(a,s,n),h(s,r,n),l(f,s,n),h(s,C,n),h(s,L,n),w(L,T),w(T,R),l(H,R,null),w(R,N),w(T,y),w(T,J);for(let e=0;e<O.length;e+=1)O[e].m(J,null);K=!0},p(s,[e]){if(0&e){let t;for(M=x,t=0;t<M.length;t+=1){const a=D(s,M,t);O[t]?O[t].p(a,e):(O[t]=G(a),O[t].c(),O[t].m(J,null))}for(;t<O.length;t+=1)O[t].d(1);O.length=M.length}},i(s){K||(c(e.$$.fragment,s),c(a.$$.fragment,s),c(f.$$.fragment,s),c(H.$$.fragment,s),K=!0)},o(s){i(e.$$.fragment,s),i(a.$$.fragment,s),i(f.$$.fragment,s),i(H.$$.fragment,s),K=!1},d(s){m(e,s),s&&$(t),m(a,s),s&&$(r),m(f,s),s&&$(C),s&&$(L),m(H),z(O,s)}}}export default class extends s{constructor(s){super(),e(this,s,null,H,t,{})}}
