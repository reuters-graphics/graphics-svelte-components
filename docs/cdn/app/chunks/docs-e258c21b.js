import {
  S as T,
  i as b,
  s as j,
  e as r,
  t as v,
  k as E,
  c as i,
  a as u,
  h as S,
  d as e,
  m as x,
  b as q,
  g,
  J as c,
  K as m,
} from './vendor-5176a1fc.js';
function A(C) {
  let a,
    p,
    k,
    h,
    o,
    d,
    l,
    n,
    H = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
        (n = r('pre')),
        this.h();
    },
    l(s) {
      a = i(s, 'SECTION', {});
      var t = u(a);
      p = i(t, 'H2', {});
      var f = u(p);
      (k = S(f, y)), f.forEach(e), (h = x(t)), (o = i(t, 'P', {}));
      var _ = u(o);
      (d = S(_, w)),
        _.forEach(e),
        t.forEach(e),
        (l = x(s)),
        (n = i(s, 'PRE', { class: !0 }));
      var P = u(n);
      P.forEach(e), this.h();
    },
    h() {
      q(n, 'class', 'language-svelte');
    },
    m(s, t) {
      g(s, a, t),
        c(a, p),
        c(p, k),
        c(a, h),
        c(a, o),
        c(o, d),
        g(s, l, t),
        g(s, n, t),
        (n.innerHTML = H);
    },
    p: m,
    i: m,
    o: m,
    d(s) {
      s && e(a), s && e(l), s && e(n);
    },
  };
}
const D = {
    title: 'Sharer',
    description: 'Add share tools to a page.',
    slug: 'sharer',
  },
  { title: y, description: w, slug: J } = D;
class K extends T {
  constructor(a) {
    super();
    b(this, a, null, A, j, {});
  }
}
export { K as default, D as metadata };
