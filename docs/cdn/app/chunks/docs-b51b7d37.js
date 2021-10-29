import {
  S as s,
  i as a,
  s as n,
  e as t,
  t as p,
  k as c,
  c as e,
  a as o,
  g as l,
  d as i,
  n as r,
  b as u,
  f as k,
  H as g,
  I as d,
} from './vendor-927c0fc0.js';
function h(s) {
  let a, n, h, m, y, E, P, b;
  return {
    c() {
      (a = t('section')),
        (n = t('h2')),
        (h = p(f)),
        (m = c()),
        (y = t('p')),
        (E = p(v)),
        (P = c()),
        (b = t('pre')),
        this.h();
    },
    l(s) {
      a = e(s, 'SECTION', {});
      var t = o(a);
      n = e(t, 'H2', {});
      var p = o(n);
      (h = l(p, f)), p.forEach(i), (m = r(t)), (y = e(t, 'P', {}));
      var c = o(y);
      (E = l(c, v)),
        c.forEach(i),
        t.forEach(i),
        (P = r(s)),
        (b = e(s, 'PRE', { class: !0 })),
        o(b).forEach(i),
        this.h();
    },
    h() {
      u(b, 'class', 'language-svelte');
    },
    m(s, t) {
      k(s, a, t),
        g(a, n),
        g(n, h),
        g(a, m),
        g(a, y),
        g(y, E),
        k(s, P, t),
        k(s, b, t),
        (b.innerHTML =
          '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> PymChild <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PymChild</span> <span class="token attr-name">polling="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">500</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>');
    },
    p: d,
    i: d,
    o: d,
    d(s) {
      s && i(a), s && i(P), s && i(b);
    },
  };
}
const m = {
    title: 'PymChild',
    description: 'A Pym.js child instance for embeddables.',
    slug: 'pym-child',
  },
  { title: f, description: v, slug: y } = m;
export default class extends s {
  constructor(s) {
    super(), a(this, s, null, h, n, {});
  }
}
export { m as metadata };
