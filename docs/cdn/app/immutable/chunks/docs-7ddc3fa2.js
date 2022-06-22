import {
  S as C,
  i as D,
  s as O,
  e as h,
  t as x,
  k as P,
  c as d,
  a as k,
  h as A,
  d as c,
  m as F,
  b as g,
  g as y,
  J as r,
  E as T,
  w as S,
  x as j,
  y as q,
  q as H,
  o as N,
  B as U,
} from './index-10187abb.js';
import { D as I } from './index-d1261ce6.js';
function J(w) {
  let s, a, e, i, u, l, _, p, f, v;
  return {
    c() {
      (s = h('footer')),
        (a = h('nav')),
        (e = h('a')),
        (i = x('Reuters.com')),
        (u = P()),
        (l = h('a')),
        (_ = x('Privacy Policy')),
        (p = P()),
        (f = h('a')),
        (v = x('Terms of Use')),
        this.h();
    },
    l(o) {
      s = d(o, 'FOOTER', {});
      var m = k(s);
      a = d(m, 'NAV', { class: !0 });
      var t = k(a);
      e = d(t, 'A', { class: !0, href: !0 });
      var n = k(e);
      (i = A(n, 'Reuters.com')),
        n.forEach(c),
        (u = F(t)),
        (l = d(t, 'A', { class: !0, href: !0 }));
      var $ = k(l);
      (_ = A($, 'Privacy Policy')),
        $.forEach(c),
        (p = F(t)),
        (f = d(t, 'A', { class: !0, href: !0 }));
      var E = k(f);
      (v = A(E, 'Terms of Use')),
        E.forEach(c),
        t.forEach(c),
        m.forEach(c),
        this.h();
    },
    h() {
      g(e, 'class', 'nav-link'),
        g(e, 'href', 'https://www.reuters.com/'),
        g(l, 'class', 'nav-link'),
        g(l, 'href', 'https://www.reuters.com/privacy-policy'),
        g(f, 'class', 'nav-link'),
        g(f, 'href', 'https://www.reuters.com/terms-of-use'),
        g(a, 'class', 'footer nav background-dark justify-content-center');
    },
    m(o, m) {
      y(o, s, m),
        r(s, a),
        r(a, e),
        r(e, i),
        r(a, u),
        r(a, l),
        r(l, _),
        r(a, p),
        r(a, f),
        r(f, v);
    },
    p: T,
    i: T,
    o: T,
    d(o) {
      o && c(s);
    },
  };
}
class L extends C {
  constructor(s) {
    super(), D(this, s, null, J, O, {});
  }
}
function M(w) {
  let s, a;
  return (
    (s = new L({})),
    {
      c() {
        S(s.$$.fragment);
      },
      l(e) {
        j(s.$$.fragment, e);
      },
      m(e, i) {
        q(s, e, i), (a = !0);
      },
      i(e) {
        a || (H(s.$$.fragment, e), (a = !0));
      },
      o(e) {
        N(s.$$.fragment, e), (a = !1);
      },
      d(e) {
        U(s, e);
      },
    }
  );
}
function V(w) {
  let s,
    a,
    e,
    i,
    u,
    l,
    _,
    p,
    f = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Footer <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span> <span class="token punctuation">/></span></span></code>`,
    v,
    o,
    m;
  return (
    (o = new I({ props: { $$slots: { default: [M] }, $$scope: { ctx: w } } })),
    {
      c() {
        (s = h('section')),
          (a = h('h2')),
          (e = x(b)),
          (i = P()),
          (u = h('p')),
          (l = x(R)),
          (_ = P()),
          (p = h('pre')),
          (v = P()),
          S(o.$$.fragment),
          this.h();
      },
      l(t) {
        s = d(t, 'SECTION', {});
        var n = k(s);
        a = d(n, 'H2', {});
        var $ = k(a);
        (e = A($, b)), $.forEach(c), (i = F(n)), (u = d(n, 'P', {}));
        var E = k(u);
        (l = A(E, R)),
          E.forEach(c),
          n.forEach(c),
          (_ = F(t)),
          (p = d(t, 'PRE', { class: !0 }));
        var B = k(p);
        B.forEach(c), (v = F(t)), j(o.$$.fragment, t), this.h();
      },
      h() {
        g(p, 'class', 'language-svelte');
      },
      m(t, n) {
        y(t, s, n),
          r(s, a),
          r(a, e),
          r(s, i),
          r(s, u),
          r(u, l),
          y(t, _, n),
          y(t, p, n),
          (p.innerHTML = f),
          y(t, v, n),
          q(o, t, n),
          (m = !0);
      },
      p(t, [n]) {
        const $ = {};
        n & 1 && ($.$$scope = { dirty: n, ctx: t }), o.$set($);
      },
      i(t) {
        m || (H(o.$$.fragment, t), (m = !0));
      },
      o(t) {
        N(o.$$.fragment, t), (m = !1);
      },
      d(t) {
        t && c(s), t && c(_), t && c(p), t && c(v), U(o, t);
      },
    }
  );
}
const z = {
    title: 'Footer',
    description: 'Add a bottom footer bar to the page.',
    slug: 'footer',
  },
  { title: b, description: R, slug: Q } = z;
class W extends C {
  constructor(s) {
    super(), D(this, s, null, V, O, {});
  }
}
export { W as default, z as metadata };
