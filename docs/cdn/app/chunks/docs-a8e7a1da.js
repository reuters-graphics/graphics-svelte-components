import {
  S as I,
  i as P,
  s as T,
  e as r,
  t as v,
  k as E,
  c as i,
  a as u,
  g as S,
  d as e,
  n as x,
  b,
  f as g,
  H as c,
  I as f,
} from './vendor-d23a7629.js';
function q(H) {
  let a,
    p,
    k,
    d,
    o,
    h,
    l,
    t,
    j = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Sharer <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Sharer</span> <span class="token punctuation">/></span></span></code>`;
  return {
    c() {
      (a = r('section')),
        (p = r('h2')),
        (k = v(y)),
        (d = E()),
        (o = r('p')),
        (h = v(w)),
        (l = E()),
        (t = r('pre')),
        this.h();
    },
    l(s) {
      a = i(s, 'SECTION', {});
      var n = u(a);
      p = i(n, 'H2', {});
      var m = u(p);
      (k = S(m, y)), m.forEach(e), (d = x(n)), (o = i(n, 'P', {}));
      var _ = u(o);
      (h = S(_, w)),
        _.forEach(e),
        n.forEach(e),
        (l = x(s)),
        (t = i(s, 'PRE', { class: !0 }));
      var C = u(t);
      C.forEach(e), this.h();
    },
    h() {
      b(t, 'class', 'language-svelte');
    },
    m(s, n) {
      g(s, a, n),
        c(a, p),
        c(p, k),
        c(a, d),
        c(a, o),
        c(o, h),
        g(s, l, n),
        g(s, t, n),
        (t.innerHTML = j);
    },
    p: f,
    i: f,
    o: f,
    d(s) {
      s && e(a), s && e(l), s && e(t);
    },
  };
}
const A = {
    title: 'Sharer',
    description: 'Add share tools to a page.',
    slug: 'sharer',
  },
  { title: y, description: w, slug: L } = A;
class M extends I {
  constructor(a) {
    super();
    P(this, a, null, q, T, {});
  }
}
export { M as default, A as metadata };
