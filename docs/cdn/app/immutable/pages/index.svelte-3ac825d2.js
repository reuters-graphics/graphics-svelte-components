import {
  S as Y,
  i as Z,
  s as ee,
  w as A,
  x as I,
  y as R,
  q as T,
  o as D,
  B as L,
  l as V,
  g as S,
  d as f,
  k as C,
  e as g,
  t as H,
  m as w,
  c as v,
  a as d,
  h as J,
  b as N,
  J as u,
  _ as te,
  E as se,
} from '../chunks/index-83a5d9f9.js';
import {
  F as ae,
  f as re,
  S as ne,
  A as le,
  N as oe,
  M as ie,
  c as B,
} from '../chunks/main-0aaf454f.js';
import { b as fe } from '../chunks/paths-396f020f.js';
function ce(l) {
  let s, a;
  return (
    (s = new ae({
      props: { fw: !0, size: l[0], icon: re.faCog, primaryColor: '#ccc' },
    })),
    {
      c() {
        A(s.$$.fragment);
      },
      l(t) {
        I(s.$$.fragment, t);
      },
      m(t, n) {
        R(s, t, n), (a = !0);
      },
      p(t, [n]) {
        const m = {};
        n & 1 && (m.size = t[0]), s.$set(m);
      },
      i(t) {
        a || (T(s.$$.fragment, t), (a = !0));
      },
      o(t) {
        D(s.$$.fragment, t), (a = !1);
      },
      d(t) {
        L(s, t);
      },
    }
  );
}
function me(l, s, a) {
  let { size: t = 'sm' } = s;
  return (
    (l.$$set = (n) => {
      'size' in n && a(0, (t = n.size));
    }),
    [t]
  );
}
class ue extends Y {
  constructor(s) {
    super(), Z(this, s, me, ce, ee, { size: 0 });
  }
}
function W(l, s, a) {
  const t = l.slice();
  return (t[0] = s[a]), t;
}
function pe(l) {
  let s,
    a,
    t = l[0].title + '',
    n,
    m,
    _;
  return {
    c() {
      (s = g('li')), (a = g('a')), (n = H(t)), (_ = C()), this.h();
    },
    l(c) {
      s = v(c, 'LI', { class: !0 });
      var p = d(s);
      a = v(p, 'A', { href: !0, class: !0 });
      var $ = d(a);
      (n = J($, t)), $.forEach(f), (_ = w(p)), p.forEach(f), this.h();
    },
    h() {
      N(a, 'href', (m = `${fe}/components/${l[0].slug}/`)),
        N(a, 'class', 'svelte-6haov5'),
        N(s, 'class', 'svelte-6haov5');
    },
    m(c, p) {
      S(c, s, p), u(s, a), u(a, n), u(s, _);
    },
    p: se,
    d(c) {
      c && f(s);
    },
  };
}
function X(l) {
  let s,
    a = l[0].title && l[0].slug && pe(l);
  return {
    c() {
      a && a.c(), (s = V());
    },
    l(t) {
      a && a.l(t), (s = V());
    },
    m(t, n) {
      a && a.m(t, n), S(t, s, n);
    },
    p(t, n) {
      t[0].title && t[0].slug && a.p(t, n);
    },
    d(t) {
      a && a.d(t), t && f(s);
    },
  };
}
function $e(l) {
  let s, a, t, n, m, _, c, p, $, h, E, b, q, F, k, O, G, M, y, P;
  (s = new ne({
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
    (t = new le({})),
    (m = new oe({})),
    (c = new ie({ props: { components: B } })),
    (b = new ue({}));
  let z = B,
    o = [];
  for (let e = 0; e < z.length; e += 1) o[e] = X(W(l, z, e));
  return {
    c() {
      A(s.$$.fragment),
        (a = C()),
        A(t.$$.fragment),
        (n = C()),
        A(m.$$.fragment),
        (_ = C()),
        A(c.$$.fragment),
        (p = C()),
        ($ = g('article')),
        (h = g('section')),
        (E = g('h1')),
        A(b.$$.fragment),
        (q = H(' Components')),
        (F = C()),
        (k = g('pre')),
        (O = g('code')),
        (G = H('yarn add @reuters-graphics/graphics-svelte-components')),
        (M = C()),
        (y = g('ul'));
      for (let e = 0; e < o.length; e += 1) o[e].c();
      this.h();
    },
    l(e) {
      I(s.$$.fragment, e),
        (a = w(e)),
        I(t.$$.fragment, e),
        (n = w(e)),
        I(m.$$.fragment, e),
        (_ = w(e)),
        I(c.$$.fragment, e),
        (p = w(e)),
        ($ = v(e, 'ARTICLE', {}));
      var i = d($);
      h = v(i, 'SECTION', {});
      var r = d(h);
      E = v(r, 'H1', { class: !0 });
      var x = d(E);
      I(b.$$.fragment, x),
        (q = J(x, ' Components')),
        x.forEach(f),
        (F = w(r)),
        (k = v(r, 'PRE', { class: !0 }));
      var U = d(k);
      O = v(U, 'CODE', {});
      var K = d(O);
      (G = J(K, 'yarn add @reuters-graphics/graphics-svelte-components')),
        K.forEach(f),
        U.forEach(f),
        (M = w(r)),
        (y = v(r, 'UL', { class: !0 }));
      var Q = d(y);
      for (let j = 0; j < o.length; j += 1) o[j].l(Q);
      Q.forEach(f), r.forEach(f), i.forEach(f), this.h();
    },
    h() {
      N(E, 'class', 'svelte-6haov5'),
        N(k, 'class', 'svelte-6haov5'),
        N(y, 'class', 'svelte-6haov5');
    },
    m(e, i) {
      R(s, e, i),
        S(e, a, i),
        R(t, e, i),
        S(e, n, i),
        R(m, e, i),
        S(e, _, i),
        R(c, e, i),
        S(e, p, i),
        S(e, $, i),
        u($, h),
        u(h, E),
        R(b, E, null),
        u(E, q),
        u(h, F),
        u(h, k),
        u(k, O),
        u(O, G),
        u(h, M),
        u(h, y);
      for (let r = 0; r < o.length; r += 1) o[r].m(y, null);
      P = !0;
    },
    p(e, [i]) {
      if (i & 0) {
        z = B;
        let r;
        for (r = 0; r < z.length; r += 1) {
          const x = W(e, z, r);
          o[r] ? o[r].p(x, i) : ((o[r] = X(x)), o[r].c(), o[r].m(y, null));
        }
        for (; r < o.length; r += 1) o[r].d(1);
        o.length = z.length;
      }
    },
    i(e) {
      P ||
        (T(s.$$.fragment, e),
        T(t.$$.fragment, e),
        T(m.$$.fragment, e),
        T(c.$$.fragment, e),
        T(b.$$.fragment, e),
        (P = !0));
    },
    o(e) {
      D(s.$$.fragment, e),
        D(t.$$.fragment, e),
        D(m.$$.fragment, e),
        D(c.$$.fragment, e),
        D(b.$$.fragment, e),
        (P = !1);
    },
    d(e) {
      L(s, e),
        e && f(a),
        L(t, e),
        e && f(n),
        L(m, e),
        e && f(_),
        L(c, e),
        e && f(p),
        e && f($),
        L(b),
        te(o, e);
    },
  };
}
class ve extends Y {
  constructor(s) {
    super(), Z(this, s, null, $e, ee, {});
  }
}
export { ve as default };
