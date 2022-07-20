import {
  S as W,
  i as X,
  s as Y,
  w as I,
  x as R,
  y as T,
  q as D,
  o as L,
  B as N,
  l as K,
  g as k,
  d as c,
  k as w,
  e as $,
  t as j,
  m as S,
  c as g,
  a as v,
  h as B,
  b as z,
  J as p,
  _ as Z,
  E as ee,
} from '../chunks/index-83a5d9f9.js';
import {
  F as te,
  f as se,
  S as ae,
  N as re,
  M as le,
  c as M,
} from '../chunks/main-a9593015.js';
import { b as ne } from '../chunks/paths-396f020f.js';
function oe(n) {
  let s, a;
  return (
    (s = new te({
      props: { fw: !0, size: n[0], icon: se.faCog, primaryColor: '#ccc' },
    })),
    {
      c() {
        I(s.$$.fragment);
      },
      l(t) {
        R(s.$$.fragment, t);
      },
      m(t, l) {
        T(s, t, l), (a = !0);
      },
      p(t, [l]) {
        const m = {};
        l & 1 && (m.size = t[0]), s.$set(m);
      },
      i(t) {
        a || (D(s.$$.fragment, t), (a = !0));
      },
      o(t) {
        L(s.$$.fragment, t), (a = !1);
      },
      d(t) {
        N(s, t);
      },
    }
  );
}
function ie(n, s, a) {
  let { size: t = 'sm' } = s;
  return (
    (n.$$set = (l) => {
      'size' in l && a(0, (t = l.size));
    }),
    [t]
  );
}
class ce extends W {
  constructor(s) {
    super(), X(this, s, ie, oe, Y, { size: 0 });
  }
}
function Q(n, s, a) {
  const t = n.slice();
  return (t[0] = s[a]), t;
}
function fe(n) {
  let s,
    a,
    t = n[0].title + '',
    l,
    m,
    _;
  return {
    c() {
      (s = $('li')), (a = $('a')), (l = j(t)), (_ = w()), this.h();
    },
    l(u) {
      s = g(u, 'LI', { class: !0 });
      var i = v(s);
      a = g(i, 'A', { href: !0, class: !0 });
      var h = v(a);
      (l = B(h, t)), h.forEach(c), (_ = S(i)), i.forEach(c), this.h();
    },
    h() {
      z(a, 'href', (m = `${ne}/components/${n[0].slug}/`)),
        z(a, 'class', 'svelte-6haov5'),
        z(s, 'class', 'svelte-6haov5');
    },
    m(u, i) {
      k(u, s, i), p(s, a), p(a, l), p(s, _);
    },
    p: ee,
    d(u) {
      u && c(s);
    },
  };
}
function V(n) {
  let s,
    a = n[0].title && n[0].slug && fe(n);
  return {
    c() {
      a && a.c(), (s = K());
    },
    l(t) {
      a && a.l(t), (s = K());
    },
    m(t, l) {
      a && a.m(t, l), k(t, s, l);
    },
    p(t, l) {
      t[0].title && t[0].slug && a.p(t, l);
    },
    d(t) {
      a && a.d(t), t && c(s);
    },
  };
}
function me(n) {
  let s, a, t, l, m, _, u, i, h, d, P, q, b, x, A, F, E, O;
  (s = new ae({
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
    (t = new re({})),
    (m = new le({ props: { components: M } })),
    (d = new ce({}));
  let y = M,
    o = [];
  for (let e = 0; e < y.length; e += 1) o[e] = V(Q(n, y, e));
  return {
    c() {
      I(s.$$.fragment),
        (a = w()),
        I(t.$$.fragment),
        (l = w()),
        I(m.$$.fragment),
        (_ = w()),
        (u = $('article')),
        (i = $('section')),
        (h = $('h1')),
        I(d.$$.fragment),
        (P = j(' Components')),
        (q = w()),
        (b = $('pre')),
        (x = $('code')),
        (A = j('yarn add @reuters-graphics/graphics-svelte-components')),
        (F = w()),
        (E = $('ul'));
      for (let e = 0; e < o.length; e += 1) o[e].c();
      this.h();
    },
    l(e) {
      R(s.$$.fragment, e),
        (a = S(e)),
        R(t.$$.fragment, e),
        (l = S(e)),
        R(m.$$.fragment, e),
        (_ = S(e)),
        (u = g(e, 'ARTICLE', {}));
      var f = v(u);
      i = g(f, 'SECTION', {});
      var r = v(i);
      h = g(r, 'H1', { class: !0 });
      var C = v(h);
      R(d.$$.fragment, C),
        (P = B(C, ' Components')),
        C.forEach(c),
        (q = S(r)),
        (b = g(r, 'PRE', { class: !0 }));
      var H = v(b);
      x = g(H, 'CODE', {});
      var J = v(x);
      (A = B(J, 'yarn add @reuters-graphics/graphics-svelte-components')),
        J.forEach(c),
        H.forEach(c),
        (F = S(r)),
        (E = g(r, 'UL', { class: !0 }));
      var U = v(E);
      for (let G = 0; G < o.length; G += 1) o[G].l(U);
      U.forEach(c), r.forEach(c), f.forEach(c), this.h();
    },
    h() {
      z(h, 'class', 'svelte-6haov5'),
        z(b, 'class', 'svelte-6haov5'),
        z(E, 'class', 'svelte-6haov5');
    },
    m(e, f) {
      T(s, e, f),
        k(e, a, f),
        T(t, e, f),
        k(e, l, f),
        T(m, e, f),
        k(e, _, f),
        k(e, u, f),
        p(u, i),
        p(i, h),
        T(d, h, null),
        p(h, P),
        p(i, q),
        p(i, b),
        p(b, x),
        p(x, A),
        p(i, F),
        p(i, E);
      for (let r = 0; r < o.length; r += 1) o[r].m(E, null);
      O = !0;
    },
    p(e, [f]) {
      if (f & 0) {
        y = M;
        let r;
        for (r = 0; r < y.length; r += 1) {
          const C = Q(e, y, r);
          o[r] ? o[r].p(C, f) : ((o[r] = V(C)), o[r].c(), o[r].m(E, null));
        }
        for (; r < o.length; r += 1) o[r].d(1);
        o.length = y.length;
      }
    },
    i(e) {
      O ||
        (D(s.$$.fragment, e),
        D(t.$$.fragment, e),
        D(m.$$.fragment, e),
        D(d.$$.fragment, e),
        (O = !0));
    },
    o(e) {
      L(s.$$.fragment, e),
        L(t.$$.fragment, e),
        L(m.$$.fragment, e),
        L(d.$$.fragment, e),
        (O = !1);
    },
    d(e) {
      N(s, e),
        e && c(a),
        N(t, e),
        e && c(l),
        N(m, e),
        e && c(_),
        e && c(u),
        N(d),
        Z(o, e);
    },
  };
}
class _e extends W {
  constructor(s) {
    super(), X(this, s, null, me, Y, {});
  }
}
export { _e as default };
