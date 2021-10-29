import {
  S as s,
  i as a,
  s as n,
  e as t,
  t as p,
  k as e,
  c,
  a as o,
  g as l,
  d as r,
  n as i,
  b as u,
  f as k,
  H as g,
  I as h,
} from './vendor-927c0fc0.js';
function d(s) {
  let a, n, d, f, E, x, F, H;
  return {
    c() {
      (a = t('section')),
        (n = t('h2')),
        (d = p(m)),
        (f = e()),
        (E = t('p')),
        (x = p(v)),
        (F = e()),
        (H = t('pre')),
        this.h();
    },
    l(s) {
      a = c(s, 'SECTION', {});
      var t = o(a);
      n = c(t, 'H2', {});
      var p = o(n);
      (d = l(p, m)), p.forEach(r), (f = i(t)), (E = c(t, 'P', {}));
      var e = o(E);
      (x = l(e, v)),
        e.forEach(r),
        t.forEach(r),
        (F = i(s)),
        (H = c(s, 'PRE', { class: !0 })),
        o(H).forEach(r),
        this.h();
    },
    h() {
      u(H, 'class', 'language-svelte');
    },
    m(s, t) {
      k(s, a, t),
        g(a, n),
        g(n, d),
        g(a, f),
        g(a, E),
        g(E, x),
        k(s, F, t),
        k(s, H, t),
        (H.innerHTML =
          '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Framer <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Framer</span> <span class="token punctuation">/></span></span></code>');
    },
    p: h,
    i: h,
    o: h,
    d(s) {
      s && r(a), s && r(F), s && r(H);
    },
  };
}
const f = {
    title: 'Framer',
    description: 'An embed tool for development in the graphics kit.',
    slug: 'framer',
  },
  { title: m, description: v, slug: E } = f;
export default class extends s {
  constructor(s) {
    super(), a(this, s, null, d, n, {});
  }
}
export { f as metadata };
