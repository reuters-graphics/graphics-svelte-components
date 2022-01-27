import {
  S as j,
  i as C,
  s as I,
  e as r,
  t as v,
  k as E,
  c as i,
  a as u,
  g as x,
  d as e,
  n as y,
  b as P,
  f as h,
  H as c,
  I as f,
} from './vendor-d23a7629.js';
function T(H) {
  let a,
    p,
    k,
    d,
    o,
    m,
    l,
    t,
    S = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Framer <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Framer</span> <span class="token punctuation">/></span></span></code>`;
  return {
    c() {
      (a = r('section')),
        (p = r('h2')),
        (k = v(w)),
        (d = E()),
        (o = r('p')),
        (m = v(F)),
        (l = E()),
        (t = r('pre')),
        this.h();
    },
    l(s) {
      a = i(s, 'SECTION', {});
      var n = u(a);
      p = i(n, 'H2', {});
      var g = u(p);
      (k = x(g, w)), g.forEach(e), (d = y(n)), (o = i(n, 'P', {}));
      var _ = u(o);
      (m = x(_, F)),
        _.forEach(e),
        n.forEach(e),
        (l = y(s)),
        (t = i(s, 'PRE', { class: !0 }));
      var b = u(t);
      b.forEach(e), this.h();
    },
    h() {
      P(t, 'class', 'language-svelte');
    },
    m(s, n) {
      h(s, a, n),
        c(a, p),
        c(p, k),
        c(a, d),
        c(a, o),
        c(o, m),
        h(s, l, n),
        h(s, t, n),
        (t.innerHTML = S);
    },
    p: f,
    i: f,
    o: f,
    d(s) {
      s && e(a), s && e(l), s && e(t);
    },
  };
}
const q = {
    title: 'Framer',
    description: 'An embed tool for development in the graphics kit.',
    slug: 'framer',
  },
  { title: w, description: F, slug: D } = q;
class L extends j {
  constructor(a) {
    super();
    C(this, a, null, T, I, {});
  }
}
export { L as default, q as metadata };
