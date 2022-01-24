import {
  S as F,
  i as T,
  s as R,
  e as h,
  t as y,
  k as x,
  c as d,
  a as k,
  g as b,
  d as r,
  n as P,
  b as g,
  f as j,
  H as c,
  I as A,
  j as C,
  m as D,
  o as H,
  x as O,
  u as S,
  v as I,
} from './vendor-b82e5b83.js';
import { D as L } from './index-75ffd758.js';
function M(w) {
  let s, e, a, i, u, l, _, p, f, v;
  return {
    c() {
      (s = h('footer')),
        (e = h('nav')),
        (a = h('a')),
        (i = y('Reuters.com')),
        (u = x()),
        (l = h('a')),
        (_ = y('Privacy Policy')),
        (p = x()),
        (f = h('a')),
        (v = y('Terms of Use')),
        this.h();
    },
    l(o) {
      s = d(o, 'FOOTER', {});
      var m = k(s);
      e = d(m, 'NAV', { class: !0 });
      var t = k(e);
      a = d(t, 'A', { class: !0, href: !0 });
      var n = k(a);
      (i = b(n, 'Reuters.com')),
        n.forEach(r),
        (u = P(t)),
        (l = d(t, 'A', { class: !0, href: !0 }));
      var $ = k(l);
      (_ = b($, 'Privacy Policy')),
        $.forEach(r),
        (p = P(t)),
        (f = d(t, 'A', { class: !0, href: !0 }));
      var E = k(f);
      (v = b(E, 'Terms of Use')),
        E.forEach(r),
        t.forEach(r),
        m.forEach(r),
        this.h();
    },
    h() {
      g(a, 'class', 'nav-link'),
        g(a, 'href', 'https://www.reuters.com/'),
        g(l, 'class', 'nav-link'),
        g(l, 'href', 'https://www.reuters.com/privacy-policy'),
        g(f, 'class', 'nav-link'),
        g(f, 'href', 'https://www.reuters.com/terms-of-use'),
        g(e, 'class', 'footer nav background-dark justify-content-center');
    },
    m(o, m) {
      j(o, s, m),
        c(s, e),
        c(e, a),
        c(a, i),
        c(e, u),
        c(e, l),
        c(l, _),
        c(e, p),
        c(e, f),
        c(f, v);
    },
    p: A,
    i: A,
    o: A,
    d(o) {
      o && r(s);
    },
  };
}
class V extends F {
  constructor(s) {
    super();
    T(this, s, null, M, R, {});
  }
}
function z(w) {
  let s, e;
  return (
    (s = new V({})),
    {
      c() {
        C(s.$$.fragment);
      },
      l(a) {
        D(s.$$.fragment, a);
      },
      m(a, i) {
        H(s, a, i), (e = !0);
      },
      i(a) {
        e || (O(s.$$.fragment, a), (e = !0));
      },
      o(a) {
        S(s.$$.fragment, a), (e = !1);
      },
      d(a) {
        I(s, a);
      },
    }
  );
}
function B(w) {
  let s,
    e,
    a,
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
    (o = new L({ props: { $$slots: { default: [z] }, $$scope: { ctx: w } } })),
    {
      c() {
        (s = h('section')),
          (e = h('h2')),
          (a = y(N)),
          (i = x()),
          (u = h('p')),
          (l = y(U)),
          (_ = x()),
          (p = h('pre')),
          (v = x()),
          C(o.$$.fragment),
          this.h();
      },
      l(t) {
        s = d(t, 'SECTION', {});
        var n = k(s);
        e = d(n, 'H2', {});
        var $ = k(e);
        (a = b($, N)), $.forEach(r), (i = P(n)), (u = d(n, 'P', {}));
        var E = k(u);
        (l = b(E, U)),
          E.forEach(r),
          n.forEach(r),
          (_ = P(t)),
          (p = d(t, 'PRE', { class: !0 }));
        var q = k(p);
        q.forEach(r), (v = P(t)), D(o.$$.fragment, t), this.h();
      },
      h() {
        g(p, 'class', 'language-svelte');
      },
      m(t, n) {
        j(t, s, n),
          c(s, e),
          c(e, a),
          c(s, i),
          c(s, u),
          c(u, l),
          j(t, _, n),
          j(t, p, n),
          (p.innerHTML = f),
          j(t, v, n),
          H(o, t, n),
          (m = !0);
      },
      p(t, [n]) {
        const $ = {};
        n & 1 && ($.$$scope = { dirty: n, ctx: t }), o.$set($);
      },
      i(t) {
        m || (O(o.$$.fragment, t), (m = !0));
      },
      o(t) {
        S(o.$$.fragment, t), (m = !1);
      },
      d(t) {
        t && r(s), t && r(_), t && r(p), t && r(v), I(o, t);
      },
    }
  );
}
const G = {
    title: 'Footer',
    description: 'Add a bottom footer bar to the page.',
    slug: 'footer',
  },
  { title: N, description: U, slug: Q } = G;
class W extends F {
  constructor(s) {
    super();
    T(this, s, null, B, R, {});
  }
}
export { W as default, G as metadata };
