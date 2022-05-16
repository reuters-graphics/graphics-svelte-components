import {
  S,
  i as H,
  s as T,
  e as i,
  t as v,
  k as y,
  c as r,
  a as u,
  h as E,
  d as e,
  m as P,
  b as q,
  g as h,
  J as l,
  K as g,
} from './vendor-f398e5e0.js';
function A(b) {
  let a,
    p,
    k,
    m,
    c,
    d,
    o,
    t,
    j = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> PymChild <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PymChild</span> <span class="token attr-name">polling="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">500</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>`;
  return {
    c() {
      (a = i('section')),
        (p = i('h2')),
        (k = v(x)),
        (m = y()),
        (c = i('p')),
        (d = v(C)),
        (o = y()),
        (t = i('pre')),
        this.h();
    },
    l(s) {
      a = r(s, 'SECTION', {});
      var n = u(a);
      p = r(n, 'H2', {});
      var f = u(p);
      (k = E(f, x)), f.forEach(e), (m = P(n)), (c = r(n, 'P', {}));
      var _ = u(c);
      (d = E(_, C)),
        _.forEach(e),
        n.forEach(e),
        (o = P(s)),
        (t = r(s, 'PRE', { class: !0 }));
      var w = u(t);
      w.forEach(e), this.h();
    },
    h() {
      q(t, 'class', 'language-svelte');
    },
    m(s, n) {
      h(s, a, n),
        l(a, p),
        l(p, k),
        l(a, m),
        l(a, c),
        l(c, d),
        h(s, o, n),
        h(s, t, n),
        (t.innerHTML = j);
    },
    p: g,
    i: g,
    o: g,
    d(s) {
      s && e(a), s && e(o), s && e(t);
    },
  };
}
const D = {
    title: 'PymChild',
    description: 'A Pym.js child instance for embeddables.',
    slug: 'pym-child',
  },
  { title: x, description: C, slug: J } = D;
class K extends S {
  constructor(a) {
    super();
    H(this, a, null, A, T, {});
  }
}
export { K as default, D as metadata };
