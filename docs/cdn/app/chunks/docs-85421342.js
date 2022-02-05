import {
  S,
  i as j,
  s as C,
  e as i,
  t as _,
  k as E,
  c as r,
  a as u,
  g as w,
  d as e,
  n as b,
  b as I,
  f,
  H as c,
  I as g,
} from './vendor-ea6fad36.js';
function T(y) {
  let a,
    p,
    k,
    d,
    o,
    m,
    l,
    t,
    L = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> EmbedPreviewerLink <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EmbedPreviewerLink</span> <span class="token punctuation">/></span></span></code>`;
  return {
    c() {
      (a = i('section')),
        (p = i('h2')),
        (k = _(x)),
        (d = E()),
        (o = i('p')),
        (m = _(P)),
        (l = E()),
        (t = i('pre')),
        this.h();
    },
    l(s) {
      a = r(s, 'SECTION', {});
      var n = u(a);
      p = r(n, 'H2', {});
      var h = u(p);
      (k = w(h, x)), h.forEach(e), (d = b(n)), (o = r(n, 'P', {}));
      var v = u(o);
      (m = w(v, P)),
        v.forEach(e),
        n.forEach(e),
        (l = b(s)),
        (t = r(s, 'PRE', { class: !0 }));
      var H = u(t);
      H.forEach(e), this.h();
    },
    h() {
      I(t, 'class', 'language-svelte');
    },
    m(s, n) {
      f(s, a, n),
        c(a, p),
        c(p, k),
        c(a, d),
        c(a, o),
        c(o, m),
        f(s, l, n),
        f(s, t, n),
        (t.innerHTML = L);
    },
    p: g,
    i: g,
    o: g,
    d(s) {
      s && e(a), s && e(l), s && e(t);
    },
  };
}
const q = {
    title: 'EmbedPreviewerLink',
    description: 'An embed tool for development in graphics-kit.',
    slug: 'embed-previewer-link',
  },
  { title: x, description: P, slug: D } = q;
class M extends S {
  constructor(a) {
    super();
    j(this, a, null, T, C, {});
  }
}
export { M as default, q as metadata };
