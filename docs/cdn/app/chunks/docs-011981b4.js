import{S as a,i as s,s as n,e as t,t as p,k as e,c,a as o,g as l,d as i,n as r,b as u,f as k,F as g,G as m}from"./vendor-edfb1eb4.js";function h(a){let s,n,h,d,j,E,w,x;return{c(){s=t("section"),n=t("h2"),h=p(v),d=e(),j=t("p"),E=p(f),w=e(),x=t("pre"),this.h()},l(a){s=c(a,"SECTION",{});var t=o(s);n=c(t,"H2",{});var p=o(n);h=l(p,v),p.forEach(i),d=r(t),j=c(t,"P",{});var e=o(j);E=l(e,f),e.forEach(i),t.forEach(i),w=r(a),x=c(a,"PRE",{class:!0}),o(x).forEach(i),this.h()},h(){u(x,"class","language-svelte")},m(a,t){k(a,s,t),g(s,n),g(n,h),g(s,d),g(s,j),g(j,E),k(a,w,t),k(a,x,t),x.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Image <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Image</span>\n  <span class="token attr-name">src="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'path/to/image.jpg\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">alt="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'Some alt text\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">caption="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'A caption\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">lazy="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">wide</span>\n<span class="token punctuation">/></span></span></code>'},p:m,i:m,o:m,d(a){a&&i(s),a&&i(w),a&&i(x)}}}const d={title:"Image",description:"A full-width image inside the text well.",slug:"image"},{title:v,description:f,slug:j}=d;export default class extends a{constructor(a){super(),s(this,a,null,h,n,{})}}export{d as metadata};