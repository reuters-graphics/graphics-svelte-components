import {
  S as W,
  i as X,
  s as Y,
  L as Z,
  M as ee,
  w as I,
  x as L,
  y as N,
  q as R,
  o as T,
  B as D,
  l as U,
  g as k,
  d as c,
  k as w,
  e as $,
  t as B,
  m as S,
  c as g,
  a as v,
  h as F,
  b as z,
  J as u,
  N as te,
  K as se,
} from '../chunks/vendor-f398e5e0.js';
import {
  S as re,
  N as ae,
  M as le,
  c as j,
} from '../chunks/@component-docs_components-890b5864.js';
import { b as ne } from '../chunks/paths-396f020f.js';
function ie(n) {
  let s, r;
  return (
    (s = new Z({
      props: { fw: !0, size: n[0], icon: ee.faCog, primaryColor: '#ccc' },
    })),
    {
      c() {
        I(s.$$.fragment);
      },
      l(t) {
        L(s.$$.fragment, t);
      },
      m(t, l) {
        N(s, t, l), (r = !0);
      },
      p(t, [l]) {
        const m = {};
        l & 1 && (m.size = t[0]), s.$set(m);
      },
      i(t) {
        r || (R(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        T(s.$$.fragment, t), (r = !1);
      },
      d(t) {
        D(s, t);
      },
    }
  );
}
function oe(n, s, r) {
  let { size: t = 'sm' } = s;
  return (
    (n.$$set = (l) => {
      'size' in l && r(0, (t = l.size));
    }),
    [t]
  );
}
class ce extends W {
  constructor(s) {
    super();
    X(this, s, oe, ie, Y, { size: 0 });
  }
}
function Q(n, s, r) {
  const t = n.slice();
  return (t[0] = s[r]), t;
}
function fe(n) {
  let s,
    r,
    t = n[0].title + '',
    l,
    m,
    _;
  return {
    c() {
      (s = $('li')), (r = $('a')), (l = B(t)), (_ = w()), this.h();
    },
    l(p) {
      s = g(p, 'LI', { class: !0 });
      var o = v(s);
      r = g(o, 'A', { href: !0, class: !0 });
      var h = v(r);
      (l = F(h, t)), h.forEach(c), (_ = S(o)), o.forEach(c), this.h();
    },
    h() {
      z(r, 'href', (m = `${ne}/components/${n[0].slug}/`)),
        z(r, 'class', 'svelte-10iyprh'),
        z(s, 'class', 'svelte-10iyprh');
    },
    m(p, o) {
      k(p, s, o), u(s, r), u(r, l), u(s, _);
    },
    p: se,
    d(p) {
      p && c(s);
    },
  };
}
function V(n) {
  let s,
    r = n[0].title && n[0].slug && fe(n);
  return {
    c() {
      r && r.c(), (s = U());
    },
    l(t) {
      r && r.l(t), (s = U());
    },
    m(t, l) {
      r && r.m(t, l), k(t, s, l);
    },
    p(t, l) {
      t[0].title && t[0].slug && r.p(t, l);
    },
    d(t) {
      r && r.d(t), t && c(s);
    },
  };
}
function me(n) {
  let s, r, t, l, m, _, p, o, h, d, O, P, E, x, q, A, y, M;
  (s = new re({
    props: {
      seoTitle: 'Reuters Graphics components',
      seoDescription: 'Svelte tools to build graphics pages',
      shareTitle: 'Reuters Graphics components',
      shareDescription: 'Svelte tools to build graphics pages',
      shareImgPath: 'images/reuters-graphics.jpg',
      lang: 'en',
      hostname: 'reuters-graphics.github.io',
    },
  })),
    (t = new ae({})),
    (m = new le({ props: { components: j } })),
    (d = new ce({}));
  let b = j,
    i = [];
  for (let e = 0; e < b.length; e += 1) i[e] = V(Q(n, b, e));
  return {
    c() {
      I(s.$$.fragment),
        (r = w()),
        I(t.$$.fragment),
        (l = w()),
        I(m.$$.fragment),
        (_ = w()),
        (p = $('article')),
        (o = $('section')),
        (h = $('h1')),
        I(d.$$.fragment),
        (O = B(' Components')),
        (P = w()),
        (E = $('pre')),
        (x = $('code')),
        (q = B('yarn add @reuters-graphics/graphics-svelte-components')),
        (A = w()),
        (y = $('ul'));
      for (let e = 0; e < i.length; e += 1) i[e].c();
      this.h();
    },
    l(e) {
      L(s.$$.fragment, e),
        (r = S(e)),
        L(t.$$.fragment, e),
        (l = S(e)),
        L(m.$$.fragment, e),
        (_ = S(e)),
        (p = g(e, 'ARTICLE', {}));
      var f = v(p);
      o = g(f, 'SECTION', {});
      var a = v(o);
      h = g(a, 'H1', { class: !0 });
      var C = v(h);
      L(d.$$.fragment, C),
        (O = F(C, ' Components')),
        C.forEach(c),
        (P = S(a)),
        (E = g(a, 'PRE', { class: !0 }));
      var H = v(E);
      x = g(H, 'CODE', {});
      var J = v(x);
      (q = F(J, 'yarn add @reuters-graphics/graphics-svelte-components')),
        J.forEach(c),
        H.forEach(c),
        (A = S(a)),
        (y = g(a, 'UL', { class: !0 }));
      var K = v(y);
      for (let G = 0; G < i.length; G += 1) i[G].l(K);
      K.forEach(c), a.forEach(c), f.forEach(c), this.h();
    },
    h() {
      z(h, 'class', 'svelte-10iyprh'),
        z(E, 'class', 'svelte-10iyprh'),
        z(y, 'class', 'svelte-10iyprh');
    },
    m(e, f) {
      N(s, e, f),
        k(e, r, f),
        N(t, e, f),
        k(e, l, f),
        N(m, e, f),
        k(e, _, f),
        k(e, p, f),
        u(p, o),
        u(o, h),
        N(d, h, null),
        u(h, O),
        u(o, P),
        u(o, E),
        u(E, x),
        u(x, q),
        u(o, A),
        u(o, y);
      for (let a = 0; a < i.length; a += 1) i[a].m(y, null);
      M = !0;
    },
    p(e, [f]) {
      if (f & 0) {
        b = j;
        let a;
        for (a = 0; a < b.length; a += 1) {
          const C = Q(e, b, a);
          i[a] ? i[a].p(C, f) : ((i[a] = V(C)), i[a].c(), i[a].m(y, null));
        }
        for (; a < i.length; a += 1) i[a].d(1);
        i.length = b.length;
      }
    },
    i(e) {
      M ||
        (R(s.$$.fragment, e),
        R(t.$$.fragment, e),
        R(m.$$.fragment, e),
        R(d.$$.fragment, e),
        (M = !0));
    },
    o(e) {
      T(s.$$.fragment, e),
        T(t.$$.fragment, e),
        T(m.$$.fragment, e),
        T(d.$$.fragment, e),
        (M = !1);
    },
    d(e) {
      D(s, e),
        e && c(r),
        D(t, e),
        e && c(l),
        D(m, e),
        e && c(_),
        e && c(p),
        D(d),
        te(i, e);
    },
  };
}
class _e extends W {
  constructor(s) {
    super();
    X(this, s, null, me, Y, {});
  }
}
export { _e as default };
