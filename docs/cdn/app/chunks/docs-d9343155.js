import {
  S as C,
  i as I,
  s as P,
  e as r,
  t as v,
  k as E,
  c as i,
  a as u,
  g as S,
  d as e,
  n as x,
  b as T,
  f as g,
  H as c,
  I as f,
} from './vendor-a3a8e12b.js';
function q(H) {
  let a,
    p,
    k,
    h,
    o,
    d,
    l,
    t,
    b = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Sharer <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Sharer</span> <span class="token punctuation">/></span></span></code>`;
  return {
    c() {
      (a = r('section')),
        (p = r('h2')),
        (k = v(y)),
        (h = E()),
        (o = r('p')),
        (d = v(w)),
        (l = E()),
        (t = r('pre')),
        this.h();
    },
    l(s) {
      a = i(s, 'SECTION', {});
      var n = u(a);
      p = i(n, 'H2', {});
      var m = u(p);
      (k = S(m, y)), m.forEach(e), (h = x(n)), (o = i(n, 'P', {}));
      var _ = u(o);
      (d = S(_, w)),
        _.forEach(e),
        n.forEach(e),
        (l = x(s)),
        (t = i(s, 'PRE', { class: !0 }));
      var j = u(t);
      j.forEach(e), this.h();
    },
    h() {
      T(t, 'class', 'language-svelte');
    },
    m(s, n) {
      g(s, a, n),
        c(a, p),
        c(p, k),
        c(a, h),
        c(a, o),
        c(o, d),
        g(s, l, n),
        g(s, t, n),
        (t.innerHTML = b);
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
class M extends C {
  constructor(a) {
    super();
    I(this, a, null, q, P, {});
  }
}
export { M as default, A as metadata };
