import{S as n,i as s,s as a,D as t,e as p,t as e,c,a as o,g as l,d as i,b as u,X as r,f as k,F as g,h as d,k as h,n as m,x as $,E as f,u as v,r as y,w as b,Y as E,G as w,j,m as P,o as x,v as H}from"./vendor-f1a375b4.js";import{D as I}from"./index-2977410e.js";import"./@component-docs-59e0b162.js";import{a as G}from"./paths-2c73d5fe.js";const T=n=>({}),C=n=>({}),R=n=>({}),D=n=>({}),S=n=>({}),q=n=>({}),J=n=>({}),N=n=>({});function A(n){let s,a,t;return{c(){s=p("p"),a=e(n[2]),this.h()},l(t){s=c(t,"P",{class:!0});var p=o(s);a=l(p,n[2]),p.forEach(i),this.h()},h(){u(s,"class",t=r(`section-title color-${n[3]}`)+" svelte-64yjqo")},m(n,t){k(n,s,t),g(s,a)},p(n,p){4&p&&d(a,n[2]),8&p&&t!==(t=r(`section-title color-${n[3]}`)+" svelte-64yjqo")&&u(s,"class",t)},d(n){n&&i(s)}}}function V(n){let s,a;return{c(){s=p("h2"),a=e(n[0])},l(t){s=c(t,"H2",{});var p=o(s);a=l(p,n[0]),p.forEach(i)},m(n,t){k(n,s,t),g(s,a)},p(n,s){1&s&&d(a,n[0])},i:w,o:w,d(n){n&&i(s)}}}function M(n){let s;const a=n[6].hed,p=t(a,n,n[5],q);return{c(){p&&p.c()},l(n){p&&p.l(n)},m(n,a){p&&p.m(n,a),s=!0},p(n,t){p&&p.p&&(!s||32&t)&&f(p,a,n,n[5],s?t:-1,S,q)},i(n){s||($(p,n),s=!0)},o(n){v(p,n),s=!1},d(n){p&&p.d(n)}}}function O(n){let s,a;return{c(){s=p("p"),a=e(n[1]),this.h()},l(t){s=c(t,"P",{class:!0});var p=o(s);a=l(p,n[1]),p.forEach(i),this.h()},h(){u(s,"class","svelte-64yjqo")},m(n,t){k(n,s,t),g(s,a)},p(n,s){2&s&&d(a,n[1])},d(n){n&&i(s)}}}function B(n){let s,a,t,e=n[4].byline&&L(n),l=n[4].dateline&&F(n);return{c(){s=p("aside"),e&&e.c(),a=h(),l&&l.c(),this.h()},l(n){s=c(n,"ASIDE",{class:!0});var t=o(s);e&&e.l(t),a=m(t),l&&l.l(t),t.forEach(i),this.h()},h(){u(s,"class","article-metadata svelte-64yjqo")},m(n,p){k(n,s,p),e&&e.m(s,null),g(s,a),l&&l.m(s,null),t=!0},p(n,t){n[4].byline?e?(e.p(n,t),16&t&&$(e,1)):(e=L(n),e.c(),$(e,1),e.m(s,a)):e&&(y(),v(e,1,1,(()=>{e=null})),b()),n[4].dateline?l?(l.p(n,t),16&t&&$(l,1)):(l=F(n),l.c(),$(l,1),l.m(s,null)):l&&(y(),v(l,1,1,(()=>{l=null})),b())},i(n){t||($(e),$(l),t=!0)},o(n){v(e),v(l),t=!1},d(n){n&&i(s),e&&e.d(),l&&l.d()}}}function L(n){let s,a,e;const l=n[6].byline,r=t(l,n,n[5],D);return{c(){s=p("div"),a=p("div"),r&&r.c(),this.h()},l(n){s=c(n,"DIV",{class:!0});var t=o(s);a=c(t,"DIV",{class:!0});var p=o(a);r&&r.l(p),p.forEach(i),t.forEach(i),this.h()},h(){u(a,"class","byline"),u(s,"class","byline-container svelte-64yjqo")},m(n,t){k(n,s,t),g(s,a),r&&r.m(a,null),e=!0},p(n,s){r&&r.p&&(!e||32&s)&&f(r,l,n,n[5],e?s:-1,R,D)},i(n){e||($(r,n),e=!0)},o(n){v(r,n),e=!1},d(n){n&&i(s),r&&r.d(n)}}}function F(n){let s,a,e;const l=n[6].dateline,r=t(l,n,n[5],C);return{c(){s=p("div"),a=p("div"),r&&r.c(),this.h()},l(n){s=c(n,"DIV",{class:!0});var t=o(s);a=c(t,"DIV",{class:!0});var p=o(a);r&&r.l(p),p.forEach(i),t.forEach(i),this.h()},h(){u(a,"class","published"),u(s,"class","dateline-container svelte-64yjqo")},m(n,t){k(n,s,t),g(s,a),r&&r.m(a,null),e=!0},p(n,s){r&&r.p&&(!e||32&s)&&f(r,l,n,n[5],e?s:-1,T,C)},i(n){e||($(r,n),e=!0)},o(n){v(r,n),e=!1},d(n){n&&i(s),r&&r.d(n)}}}function U(n){let s,a,e,l,r,d,E,w,j;const P=n[6].crown,x=t(P,n,n[5],N);let H=n[2]&&A(n);const I=[M,V],G=[];function T(n,s){return n[4].hed?0:1}r=T(n),d=G[r]=I[r](n);let C=n[1]&&O(n),R=(n[4].byline||n[4].dateline)&&B(n);return{c(){s=p("section"),x&&x.c(),a=h(),e=p("div"),H&&H.c(),l=h(),d.c(),E=h(),C&&C.c(),w=h(),R&&R.c(),this.h()},l(n){s=c(n,"SECTION",{class:!0});var t=o(s);x&&x.l(t),a=m(t),e=c(t,"DIV",{class:!0});var p=o(e);H&&H.l(p),l=m(p),d.l(p),E=m(p),C&&C.l(p),p.forEach(i),w=m(t),R&&R.l(t),t.forEach(i),this.h()},h(){u(e,"class","title"),u(s,"class","headline")},m(n,t){k(n,s,t),x&&x.m(s,null),g(s,a),g(s,e),H&&H.m(e,null),g(e,l),G[r].m(e,null),g(e,E),C&&C.m(e,null),g(s,w),R&&R.m(s,null),j=!0},p(n,[a]){x&&x.p&&(!j||32&a)&&f(x,P,n,n[5],j?a:-1,J,N),n[2]?H?H.p(n,a):(H=A(n),H.c(),H.m(e,l)):H&&(H.d(1),H=null);let t=r;r=T(n),r===t?G[r].p(n,a):(y(),v(G[t],1,1,(()=>{G[t]=null})),b(),d=G[r],d?d.p(n,a):(d=G[r]=I[r](n),d.c()),$(d,1),d.m(e,E)),n[1]?C?C.p(n,a):(C=O(n),C.c(),C.m(e,null)):C&&(C.d(1),C=null),n[4].byline||n[4].dateline?R?(R.p(n,a),16&a&&$(R,1)):(R=B(n),R.c(),$(R,1),R.m(s,null)):R&&(y(),v(R,1,1,(()=>{R=null})),b())},i(n){j||($(x,n),$(d),$(R),j=!0)},o(n){v(x,n),v(d),v(R),j=!1},d(n){n&&i(s),x&&x.d(n),H&&H.d(),G[r].d(),C&&C.d(),R&&R.d()}}}function X(n,s,a){let{$$slots:t={},$$scope:p}=s;const e=E(t);let{hed:c="Reuters Graphics Interactive"}=s,{dek:o}=s,{section:l}=s,{sectionColour:i="red"}=s;return n.$$set=n=>{"hed"in n&&a(0,c=n.hed),"dek"in n&&a(1,o=n.dek),"section"in n&&a(2,l=n.section),"sectionColour"in n&&a(3,i=n.sectionColour),"$$scope"in n&&a(5,p=n.$$scope)},[c,o,l,i,e,p,t]}class Y extends n{constructor(n){super(),s(this,n,X,U,a,{hed:0,dek:1,section:2,sectionColour:3})}}function z(n){let s,a;return s=new Y({props:{hed:"Reuters Graphics Interactive",dek:"The beginning of a beautiful page",section:"Global news",sectionColour:"orange"}}),{c(){j(s.$$.fragment)},l(n){P(s.$$.fragment,n)},m(n,t){x(s,n,t),a=!0},p:w,i(n){a||($(s.$$.fragment,n),a=!0)},o(n){v(s.$$.fragment,n),a=!1},d(n){H(s,n)}}}function K(n){let s,a,t,r;return{c(){s=p("span"),a=e("By "),t=p("strong"),r=e("Peppa Pig"),this.h()},l(n){s=c(n,"SPAN",{slot:!0});var p=o(s);a=l(p,"By "),t=c(p,"STRONG",{});var e=o(t);r=l(e,"Peppa Pig"),e.forEach(i),p.forEach(i),this.h()},h(){u(s,"slot","byline")},m(n,p){k(n,s,p),g(s,a),g(s,t),g(t,r)},d(n){n&&i(s)}}}function Q(n){let s,a;return{c(){s=p("span"),a=e("Published Jan. 1, 2020"),this.h()},l(n){s=c(n,"SPAN",{slot:!0});var t=o(s);a=l(t,"Published Jan. 1, 2020"),t.forEach(i),this.h()},h(){u(s,"slot","dateline")},m(n,t){k(n,s,t),g(s,a)},d(n){n&&i(s)}}}function W(n){let s,a;return s=new Y({props:{hed:"Reuters Graphics Interactive",dek:"The beginning of a beautiful page",section:"Global news",sectionColour:"orange",$$slots:{dateline:[Q],byline:[K]},$$scope:{ctx:n}}}),{c(){j(s.$$.fragment)},l(n){P(s.$$.fragment,n)},m(n,t){x(s,n,t),a=!0},p(n,a){const t={};1&a&&(t.$$scope={dirty:a,ctx:n}),s.$set(t)},i(n){a||($(s.$$.fragment,n),a=!0)},o(n){v(s.$$.fragment,n),a=!1},d(n){H(s,n)}}}function Z(n){let s,a;return{c(){s=p("img"),this.h()},l(n){s=c(n,"IMG",{slot:!0,src:!0}),this.h()},h(){u(s,"slot","crown"),s.src!==(a=`${G}/images/crown.png`)&&u(s,"src",a)},m(n,a){k(n,s,a)},p:w,d(n){n&&i(s)}}}function _(n){let s,a;return{c(){s=p("h2"),a=e("Europa"),this.h()},l(n){s=c(n,"H2",{slot:!0,class:!0});var t=o(s);a=l(t,"Europa"),t.forEach(i),this.h()},h(){u(s,"slot","hed"),u(s,"class","spaced font-serif")},m(n,t){k(n,s,t),g(s,a)},d(n){n&&i(s)}}}function nn(n){let s,a;return{c(){s=p("span"),a=e("Published Jan. 1, 2020"),this.h()},l(n){s=c(n,"SPAN",{slot:!0});var t=o(s);a=l(t,"Published Jan. 1, 2020"),t.forEach(i),this.h()},h(){u(s,"slot","dateline")},m(n,t){k(n,s,t),g(s,a)},d(n){n&&i(s)}}}function sn(n){let s,a;return s=new Y({props:{$$slots:{dateline:[nn],hed:[_],crown:[Z]},$$scope:{ctx:n}}}),{c(){j(s.$$.fragment)},l(n){P(s.$$.fragment,n)},m(n,t){x(s,n,t),a=!0},p(n,a){const t={};1&a&&(t.$$scope={dirty:a,ctx:n}),s.$set(t)},i(n){a||($(s.$$.fragment,n),a=!0)},o(n){v(s.$$.fragment,n),a=!1},d(n){H(s,n)}}}function an(n){let s,a,t,r,d,f,y,b,E,w,G,T,C,R,D,S,q,J,N;return w=new I({props:{$$slots:{default:[z]},$$scope:{ctx:n}}}),R=new I({props:{$$slots:{default:[W]},$$scope:{ctx:n}}}),J=new I({props:{$$slots:{default:[sn]},$$scope:{ctx:n}}}),{c(){s=p("section"),a=p("h2"),t=e(pn),r=h(),d=p("p"),f=e(en),y=h(),b=p("pre"),E=h(),j(w.$$.fragment),G=h(),T=p("pre"),C=h(),j(R.$$.fragment),D=h(),S=p("pre"),q=h(),j(J.$$.fragment),this.h()},l(n){s=c(n,"SECTION",{});var p=o(s);a=c(p,"H2",{});var e=o(a);t=l(e,pn),e.forEach(i),r=m(p),d=c(p,"P",{});var u=o(d);f=l(u,en),u.forEach(i),p.forEach(i),y=m(n),b=c(n,"PRE",{class:!0}),o(b).forEach(i),E=m(n),P(w.$$.fragment,n),G=m(n),T=c(n,"PRE",{class:!0}),o(T).forEach(i),C=m(n),P(R.$$.fragment,n),D=m(n),S=c(n,"PRE",{class:!0}),o(S).forEach(i),q=m(n),P(J.$$.fragment,n),this.h()},h(){u(b,"class","language-svelte"),u(T,"class","language-svelte"),u(S,"class","language-svelte")},m(n,p){k(n,s,p),g(s,a),g(a,t),g(s,r),g(s,d),g(d,f),k(n,y,p),k(n,b,p),b.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Headline <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Headline</span>\n  <span class="token attr-name">hed="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'Reuters Graphics Interactive\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">dek="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'The beginning of a beautiful page\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">section="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'Global news\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">sectionColour="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'orange\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n<span class="token punctuation">/></span></span></code>',k(n,E,p),x(w,n,p),k(n,G,p),k(n,T,p),T.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Headline <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Headline</span>\n  <span class="token attr-name">hed="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'Reuters Graphics Interactive\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">dek="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'The beginning of a beautiful page\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">section="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'Global news\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">sectionColour="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'orange\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n<span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- Use named slots to add a byline... --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>byline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>By <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">></span></span>Peppa Pig<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ...and a dateline. --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dateline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Published Jan. 1, 2020<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Headline</span><span class="token punctuation">></span></span></code>',k(n,C,p),x(R,n,p),k(n,D,p),k(n,S,p),S.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Headline <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'$app/paths\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Headline</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- Add a crown --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>crown<span class="token punctuation">"</span></span> <span class="token attr-name">src="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/crown.png</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span>\n  <span class="token comment">&lt;!-- Override the hed with a named slot --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hed<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>spaced font-serif<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Europa<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dateline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Published Jan. 1, 2020<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Headline</span><span class="token punctuation">></span></span></code>',k(n,q,p),x(J,n,p),N=!0},p(n,[s]){const a={};1&s&&(a.$$scope={dirty:s,ctx:n}),w.$set(a);const t={};1&s&&(t.$$scope={dirty:s,ctx:n}),R.$set(t);const p={};1&s&&(p.$$scope={dirty:s,ctx:n}),J.$set(p)},i(n){N||($(w.$$.fragment,n),$(R.$$.fragment,n),$(J.$$.fragment,n),N=!0)},o(n){v(w.$$.fragment,n),v(R.$$.fragment,n),v(J.$$.fragment,n),N=!1},d(n){n&&i(s),n&&i(y),n&&i(b),n&&i(E),H(w,n),n&&i(G),n&&i(T),n&&i(C),H(R,n),n&&i(D),n&&i(S),n&&i(q),H(J,n)}}}const tn={title:"Headline",description:"Titles & bylines & datelines, oh my!",slug:"headline"},{title:pn,description:en,slug:cn}=tn;export default class extends n{constructor(n){super(),s(this,n,null,an,a,{})}}export{tn as metadata};