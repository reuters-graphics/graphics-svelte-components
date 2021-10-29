import {
  S as s,
  i as a,
  s as n,
  e as t,
  t as e,
  k as p,
  c,
  a as o,
  g as l,
  d as r,
  n as i,
  b as u,
  f as k,
  H as g,
  I as d,
} from './vendor-927c0fc0.js';
function h(s) {
  let a, n, h, v, E, b, w, P;
  return {
    c() {
      (a = t('section')),
        (n = t('h2')),
        (h = e(m)),
        (v = p()),
        (E = t('p')),
        (b = e(f)),
        (w = p()),
        (P = t('pre')),
        this.h();
    },
    l(s) {
      a = c(s, 'SECTION', {});
      var t = o(a);
      n = c(t, 'H2', {});
      var e = o(n);
      (h = l(e, m)), e.forEach(r), (v = i(t)), (E = c(t, 'P', {}));
      var p = o(E);
      (b = l(p, f)),
        p.forEach(r),
        t.forEach(r),
        (w = i(s)),
        (P = c(s, 'PRE', { class: !0 })),
        o(P).forEach(r),
        this.h();
    },
    h() {
      u(P, 'class', 'language-svelte');
    },
    m(s, t) {
      k(s, a, t),
        g(a, n),
        g(n, h),
        g(a, v),
        g(a, E),
        g(E, b),
        k(s, w, t),
        k(s, P, t),
        (P.innerHTML =
          '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> EmbedPreviewerLink <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EmbedPreviewerLink</span> <span class="token punctuation">/></span></span></code>');
    },
    p: d,
    i: d,
    o: d,
    d(s) {
      s && r(a), s && r(w), s && r(P);
    },
  };
}
const v = {
    title: 'EmbedPreviewerLink',
    description: 'An embed tool for development in graphics-kit.',
    slug: 'embed-previewer-link',
  },
  { title: m, description: f, slug: E } = v;
export default class extends s {
  constructor(s) {
    super(), a(this, s, null, h, n, {});
  }
}
export { v as metadata };
