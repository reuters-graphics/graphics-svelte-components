import{S as s,i as e,s as t,H as a,I as r,j as n,m as l,o,x as c,u as i,v as f,l as h,f as g,d as m,k as $,e as u,t as p,n as d,c as v,a as j,g as E,b,F as z,J as C,G as w}from"../chunks/vendor-edfb1eb4.js";import{S as I,N as S,c as k}from"../chunks/@component-docs-c447793d.js";import{b as x}from"../chunks/paths-2c73d5fe.js";function T(s){let e,t;return e=new a({props:{fw:!0,size:s[0],icon:r.faCog,primaryColor:"#ccc"}}),{c(){n(e.$$.fragment)},l(s){l(e.$$.fragment,s)},m(s,a){o(e,s,a),t=!0},p(s,[t]){const a={};1&t&&(a.size=s[0]),e.$set(a)},i(s){t||(c(e.$$.fragment,s),t=!0)},o(s){i(e.$$.fragment,s),t=!1},d(s){f(e,s)}}}function G(s,e,t){let{size:a="sm"}=e;return s.$$set=s=>{"size"in s&&t(0,a=s.size)},[a]}class L extends s{constructor(s){super(),e(this,s,G,T,t,{size:0})}}function R(s,e,t){const a=s.slice();return a[0]=e[t],a}function A(s){let e,t=s[0].title&&s[0].slug&&function(s){let e,t,a,r,n=s[0].title+"";return{c(){e=u("li"),t=u("a"),a=p(n),this.h()},l(s){e=v(s,"LI",{class:!0});var r=j(e);t=v(r,"A",{href:!0,class:!0});var l=j(t);a=E(l,n),l.forEach(m),r.forEach(m),this.h()},h(){b(t,"href",r=`${x}/components/${s[0].slug}/`),b(t,"class","svelte-1c6jsrg"),b(e,"class","svelte-1c6jsrg")},m(s,r){g(s,e,r),z(e,t),z(t,a)},p:w,d(s){s&&m(e)}}}(s);return{c(){t&&t.c(),e=h()},l(s){t&&t.l(s),e=h()},m(s,a){t&&t.m(s,a),g(s,e,a)},p(s,e){s[0].title&&s[0].slug&&t.p(s,e)},d(s){t&&t.d(s),s&&m(e)}}}function D(s){let e,t,a,r,h,w,x,T,G,D,H,N;e=new I({props:{seoTitle:"Reuters Graphics components",seoDescription:"Svelte tools to build graphics pages",shareTitle:"Reuters Graphics components",shareDescription:"Svelte tools to build graphics pages",shareImgPath:"images/reuters-graphics.jpg",lang:"en",hostname:"reuters-graphics.github.io"}}),a=new S({}),T=new L({});let y=k,F=[];for(let n=0;n<y.length;n+=1)F[n]=A(R(s,y,n));return{c(){n(e.$$.fragment),t=$(),n(a.$$.fragment),r=$(),h=u("article"),w=u("section"),x=u("h1"),n(T.$$.fragment),G=p(" Components"),D=$(),H=u("ul");for(let s=0;s<F.length;s+=1)F[s].c();this.h()},l(s){l(e.$$.fragment,s),t=d(s),l(a.$$.fragment,s),r=d(s),h=v(s,"ARTICLE",{});var n=j(h);w=v(n,"SECTION",{});var o=j(w);x=v(o,"H1",{class:!0});var c=j(x);l(T.$$.fragment,c),G=E(c," Components"),c.forEach(m),D=d(o),H=v(o,"UL",{class:!0});var i=j(H);for(let e=0;e<F.length;e+=1)F[e].l(i);i.forEach(m),o.forEach(m),n.forEach(m),this.h()},h(){b(x,"class","svelte-1c6jsrg"),b(H,"class","svelte-1c6jsrg")},m(s,n){o(e,s,n),g(s,t,n),o(a,s,n),g(s,r,n),g(s,h,n),z(h,w),z(w,x),o(T,x,null),z(x,G),z(w,D),z(w,H);for(let e=0;e<F.length;e+=1)F[e].m(H,null);N=!0},p(s,[e]){if(0&e){let t;for(y=k,t=0;t<y.length;t+=1){const a=R(s,y,t);F[t]?F[t].p(a,e):(F[t]=A(a),F[t].c(),F[t].m(H,null))}for(;t<F.length;t+=1)F[t].d(1);F.length=y.length}},i(s){N||(c(e.$$.fragment,s),c(a.$$.fragment,s),c(T.$$.fragment,s),N=!0)},o(s){i(e.$$.fragment,s),i(a.$$.fragment,s),i(T.$$.fragment,s),N=!1},d(s){f(e,s),s&&m(t),f(a,s),s&&m(r),s&&m(h),f(T),C(F,s)}}}export default class extends s{constructor(s){super(),e(this,s,null,D,t,{})}}
