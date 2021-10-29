import {
  S as s,
  i as a,
  s as n,
  e as t,
  t as p,
  k as e,
  c as o,
  a as c,
  g as l,
  d as r,
  n as i,
  b as k,
  f as u,
  H as g,
  I as m,
} from './vendor-927c0fc0.js';
function h(s) {
  let a, n, h, d, j, E, S, T;
  return {
    c() {
      (a = t('section')),
        (n = t('h2')),
        (h = p(v)),
        (d = e()),
        (j = t('p')),
        (E = p(f)),
        (S = e()),
        (T = t('pre')),
        this.h();
    },
    l(s) {
      a = o(s, 'SECTION', {});
      var t = c(a);
      n = o(t, 'H2', {});
      var p = c(n);
      (h = l(p, v)), p.forEach(r), (d = i(t)), (j = o(t, 'P', {}));
      var e = c(j);
      (E = l(e, f)),
        e.forEach(r),
        t.forEach(r),
        (S = i(s)),
        (T = o(s, 'PRE', { class: !0 })),
        c(T).forEach(r),
        this.h();
    },
    h() {
      k(T, 'class', 'language-svelte');
    },
    m(s, t) {
      u(s, a, t),
        g(a, n),
        g(n, h),
        g(a, d),
        g(a, j),
        g(j, E),
        u(s, S, t),
        u(s, T, t),
        (T.innerHTML =
          '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> <span class="token constant">SEO</span> <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SEO</span>\n  <span class="token attr-name">seoTitle="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'A title for Google\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">seoDescription="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'A description for Google\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">shareTitle="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'A title for Twitter/Facebook\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">shareDecription="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'A description for Twitter/Facebook\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">shareImgPath="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'images/share.jpg\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">lang="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'en\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">hostname="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'graphics.reuters.com\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n<span class="token punctuation">/></span></span></code>');
    },
    p: m,
    i: m,
    o: m,
    d(s) {
      s && r(a), s && r(S), s && r(T);
    },
  };
}
const d = { title: 'SEO', description: 'Add SEO to the page.', slug: 'seo' },
  { title: v, description: f, slug: j } = d;
export default class extends s {
  constructor(s) {
    super(), a(this, s, null, h, n, {});
  }
}
export { d as metadata };
