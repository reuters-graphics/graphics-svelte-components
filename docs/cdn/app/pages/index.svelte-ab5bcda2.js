import{S as s,i as e,s as t,H as a,I as r,j as n,m as o,o as l,x as c,u as i,v as h,l as f,f as g,d as m,k as p,e as $,t as u,n as d,c as v,a as b,g as E,b as z,F as C,J as j,G as w}from"../chunks/vendor-b4655b06.js";import{S as I,N as S,c as k}from"../chunks/@component-docs-6ee0b1bf.js";import{b as x}from"../chunks/paths-2c73d5fe.js";function T(s){let e,t;return e=new a({props:{fw:!0,size:s[0],icon:r.faCog,primaryColor:"#ccc"}}),{c(){n(e.$$.fragment)},l(s){o(e.$$.fragment,s)},m(s,a){l(e,s,a),t=!0},p(s,[t]){const a={};1&t&&(a.size=s[0]),e.$set(a)},i(s){t||(c(e.$$.fragment,s),t=!0)},o(s){i(e.$$.fragment,s),t=!1},d(s){h(e,s)}}}function G(s,e,t){let{size:a="sm"}=e;return s.$$set=s=>{"size"in s&&t(0,a=s.size)},[a]}class L extends s{constructor(s){super(),e(this,s,G,T,t,{size:0})}}function R(s,e,t){const a=s.slice();return a[0]=e[t],a}function A(s){let e,t=s[0].title&&s[0].slug&&function(s){let e,t,a,r,n=s[0].title+"";return{c(){e=$("li"),t=$("a"),a=u(n),this.h()},l(s){e=v(s,"LI",{class:!0});var r=b(e);t=v(r,"A",{href:!0,class:!0});var o=b(t);a=E(o,n),o.forEach(m),r.forEach(m),this.h()},h(){z(t,"href",r=`${x}/components/${s[0].slug}/`),z(t,"class","svelte-1s3goph"),z(e,"class","svelte-1s3goph")},m(s,r){g(s,e,r),C(e,t),C(t,a)},p:w,d(s){s&&m(e)}}}(s);return{c(){t&&t.c(),e=f()},l(s){t&&t.l(s),e=f()},m(s,a){t&&t.m(s,a),g(s,e,a)},p(s,e){s[0].title&&s[0].slug&&t.p(s,e)},d(s){t&&t.d(s),s&&m(e)}}}function D(s){let e,t,a,r,f,w,x,T,G,D,H,N;e=new I({props:{seoTitle:"Reuters Graphics components",seoDescription:"Svelte tools to build graphics pages",shareTitle:"Reuters Graphics components",shareDescription:"Svelte tools to build graphics pages",shareImgPath:"images/reuters-graphics.jpg",lang:"en",hostname:"reuters-graphics.github.io"}}),a=new S({}),T=new L({});let y=k,F=[];for(let n=0;n<y.length;n+=1)F[n]=A(R(s,y,n));return{c(){n(e.$$.fragment),t=p(),n(a.$$.fragment),r=p(),f=$("article"),w=$("section"),x=$("h1"),n(T.$$.fragment),G=u(" Components"),D=p(),H=$("ul");for(let s=0;s<F.length;s+=1)F[s].c();this.h()},l(s){o(e.$$.fragment,s),t=d(s),o(a.$$.fragment,s),r=d(s),f=v(s,"ARTICLE",{});var n=b(f);w=v(n,"SECTION",{});var l=b(w);x=v(l,"H1",{class:!0});var c=b(x);o(T.$$.fragment,c),G=E(c," Components"),c.forEach(m),D=d(l),H=v(l,"UL",{class:!0});var i=b(H);for(let e=0;e<F.length;e+=1)F[e].l(i);i.forEach(m),l.forEach(m),n.forEach(m),this.h()},h(){z(x,"class","svelte-1s3goph"),z(H,"class","svelte-1s3goph")},m(s,n){l(e,s,n),g(s,t,n),l(a,s,n),g(s,r,n),g(s,f,n),C(f,w),C(w,x),l(T,x,null),C(x,G),C(w,D),C(w,H);for(let e=0;e<F.length;e+=1)F[e].m(H,null);N=!0},p(s,[e]){if(0&e){let t;for(y=k,t=0;t<y.length;t+=1){const a=R(s,y,t);F[t]?F[t].p(a,e):(F[t]=A(a),F[t].c(),F[t].m(H,null))}for(;t<F.length;t+=1)F[t].d(1);F.length=y.length}},i(s){N||(c(e.$$.fragment,s),c(a.$$.fragment,s),c(T.$$.fragment,s),N=!0)},o(s){i(e.$$.fragment,s),i(a.$$.fragment,s),i(T.$$.fragment,s),N=!1},d(s){h(e,s),s&&m(t),h(a,s),s&&m(r),s&&m(f),h(T),j(F,s)}}}export default class extends s{constructor(s){super(),e(this,s,null,D,t,{})}}
