import {
  S as s,
  i as a,
  s as n,
  e as t,
  t as e,
  k as p,
  c,
  a as o,
  g as r,
  d as l,
  n as i,
  b as u,
  f as k,
  F as g,
  G as f,
} from './vendor-edfb1eb4.js';
function h(s) {
  let a, n, h, d, E, b, R, w;
  return {
    c() {
      (a = t('section')),
        (n = t('h2')),
        (h = e(v)),
        (d = p()),
        (E = t('p')),
        (b = e(m)),
        (R = p()),
        (w = t('pre')),
        this.h();
    },
    l(s) {
      a = c(s, 'SECTION', {});
      var t = o(a);
      n = c(t, 'H2', {});
      var e = o(n);
      (h = r(e, v)), e.forEach(l), (d = i(t)), (E = c(t, 'P', {}));
      var p = o(E);
      (b = r(p, m)),
        p.forEach(l),
        t.forEach(l),
        (R = i(s)),
        (w = c(s, 'PRE', { class: !0 })),
        o(w).forEach(l),
        this.h();
    },
    h() {
      u(w, 'class', 'language-svelte');
    },
    m(s, t) {
      k(s, a, t),
        g(a, n),
        g(n, h),
        g(a, d),
        g(a, E),
        g(E, b),
        k(s, R, t),
        k(s, w, t),
        (w.innerHTML =
          '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Referrals <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Referrals</span> <span class="token punctuation">/></span></span></code>');
    },
    p: f,
    i: f,
    o: f,
    d(s) {
      s && l(a), s && l(R), s && l(w);
    },
  };
}
const d = {
    title: 'Referrals',
    description: 'Add a referrals bar with recent graphics stories.',
    slug: 'referrals',
  },
  { title: v, description: m, slug: E } = d;
export default class extends s {
  constructor(s) {
    super(), a(this, s, null, h, n, {});
  }
}
export { d as metadata };
