import{S as s,i as a,s as n,e as t,t as e,k as o,c,a as r,g as p,d as l,n as i,b as u,f,F as h,G as g,j as k,m,o as d,x as $,u as v,v as w}from"./vendor-27ff504e.js";import{D as E}from"./index-d49def30.js";function y(s){let a,n,k,m,d,$,v,w,E,y;return{c(){a=t("footer"),n=t("nav"),k=t("a"),m=e("Reuters.com"),d=o(),$=t("a"),v=e("Privacy Policy"),w=o(),E=t("a"),y=e("Terms of Use"),this.h()},l(s){a=c(s,"FOOTER",{});var t=r(a);n=c(t,"NAV",{class:!0});var e=r(n);k=c(e,"A",{class:!0,href:!0});var o=r(k);m=p(o,"Reuters.com"),o.forEach(l),d=i(e),$=c(e,"A",{class:!0,href:!0});var u=r($);v=p(u,"Privacy Policy"),u.forEach(l),w=i(e),E=c(e,"A",{class:!0,href:!0});var f=r(E);y=p(f,"Terms of Use"),f.forEach(l),e.forEach(l),t.forEach(l),this.h()},h(){u(k,"class","nav-link"),u(k,"href","https://www.reuters.com/"),u($,"class","nav-link"),u($,"href","https://www.reuters.com/privacy-policy"),u(E,"class","nav-link"),u(E,"href","https://www.reuters.com/terms-of-use"),u(n,"class","footer nav background-dark justify-content-center")},m(s,t){f(s,a,t),h(a,n),h(n,k),h(k,m),h(n,d),h(n,$),h($,v),h(n,w),h(n,E),h(E,y)},p:g,i:g,o:g,d(s){s&&l(a)}}}class x extends s{constructor(s){super(),a(this,s,null,y,n,{})}}function P(s){let a,n;return a=new x({}),{c(){k(a.$$.fragment)},l(s){m(a.$$.fragment,s)},m(s,t){d(a,s,t),n=!0},i(s){n||($(a.$$.fragment,s),n=!0)},o(s){v(a.$$.fragment,s),n=!1},d(s){w(a,s)}}}function j(s){let a,n,g,y,x,j,A,b,R,O,H;return O=new E({props:{$$slots:{default:[P]},$$scope:{ctx:s}}}),{c(){a=t("section"),n=t("h2"),g=e(F),y=o(),x=t("p"),j=e(T),A=o(),b=t("pre"),R=o(),k(O.$$.fragment),this.h()},l(s){a=c(s,"SECTION",{});var t=r(a);n=c(t,"H2",{});var e=r(n);g=p(e,F),e.forEach(l),y=i(t),x=c(t,"P",{});var o=r(x);j=p(o,T),o.forEach(l),t.forEach(l),A=i(s),b=c(s,"PRE",{class:!0}),r(b).forEach(l),R=i(s),m(O.$$.fragment,s),this.h()},h(){u(b,"class","language-svelte")},m(s,t){f(s,a,t),h(a,n),h(n,g),h(a,y),h(a,x),h(x,j),f(s,A,t),f(s,b,t),b.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Footer <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span> <span class="token punctuation">/></span></span></code>',f(s,R,t),d(O,s,t),H=!0},p(s,[a]){const n={};1&a&&(n.$$scope={dirty:a,ctx:s}),O.$set(n)},i(s){H||($(O.$$.fragment,s),H=!0)},o(s){v(O.$$.fragment,s),H=!1},d(s){s&&l(a),s&&l(A),s&&l(b),s&&l(R),w(O,s)}}}const A={title:"Footer",description:"Add a bottom footer bar to the page.",slug:"footer"},{title:F,description:T,slug:b}=A;export default class extends s{constructor(s){super(),a(this,s,null,j,n,{})}}export{A as metadata};
