import {
  S as C,
  i as H,
  s as T,
  e as i,
  t as _,
  k as E,
  c as r,
  a as u,
  h as w,
  d as e,
  m as b,
  b as j,
  g as h,
  J as c,
  E as g,
} from './index-10187abb.js';
function q(y) {
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
      var v = u(p);
      (k = w(v, x)), v.forEach(e), (d = b(n)), (o = r(n, 'P', {}));
      var f = u(o);
      (m = w(f, P)),
        f.forEach(e),
        n.forEach(e),
        (l = b(s)),
        (t = r(s, 'PRE', { class: !0 }));
      var S = u(t);
      S.forEach(e), this.h();
    },
    h() {
      j(t, 'class', 'language-svelte');
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
const A = {
    title: 'EmbedPreviewerLink',
    description: 'An embed tool for development in graphics-kit.',
    slug: 'embed-previewer-link',
  },
  { title: x, description: P, slug: I } = A;
class J extends C {
  constructor(a) {
    super(), H(this, a, null, q, T, {});
  }
}
export { J as default, A as metadata };
