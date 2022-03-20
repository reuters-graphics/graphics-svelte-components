import {
  S as B,
  i as Q,
  s as V,
  J as Z,
  K as ee,
  j as x,
  m as I,
  o as L,
  x as R,
  u as T,
  v as D,
  l as W,
  f as k,
  d as c,
  k as S,
  e as $,
  t as M,
  n as w,
  c as g,
  a as v,
  g as q,
  b as z,
  H as u,
  L as te,
  I as se,
} from '../chunks/vendor-362b926b.js';
import {
  S as re,
  N as ae,
  M as ne,
  c as F,
} from '../chunks/@component-docs_components-a126c5f0.js';
import { b as le } from '../chunks/paths-6758d194.js';
function oe(l) {
  let s, r;
  return (
    (s = new Z({
      props: { fw: !0, size: l[0], icon: ee.faCog, primaryColor: '#ccc' },
    })),
    {
      c() {
        x(s.$$.fragment);
      },
      l(t) {
        I(s.$$.fragment, t);
      },
      m(t, n) {
        L(s, t, n), (r = !0);
      },
      p(t, [n]) {
        const m = {};
        n & 1 && (m.size = t[0]), s.$set(m);
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
function ie(l, s, r) {
  let { size: t = 'sm' } = s;
  return (
    (l.$$set = (n) => {
      'size' in n && r(0, (t = n.size));
    }),
    [t]
  );
}
class ce extends B {
  constructor(s) {
    super();
    Q(this, s, ie, oe, V, { size: 0 });
  }
}
function X(l, s, r) {
  const t = l.slice();
  return (t[0] = s[r]), t;
}
function fe(l) {
  let s,
    r,
    t = l[0].title + '',
    n,
    m,
    _;
  return {
    c() {
      (s = $('li')), (r = $('a')), (n = M(t)), (_ = S()), this.h();
    },
    l(p) {
      s = g(p, 'LI', { class: !0 });
      var i = v(s);
      r = g(i, 'A', { href: !0, class: !0 });
      var h = v(r);
      (n = q(h, t)), h.forEach(c), (_ = w(i)), i.forEach(c), this.h();
    },
    h() {
      z(r, 'href', (m = `${le}/components/${l[0].slug}/`)),
        z(r, 'class', 'svelte-10iyprh'),
        z(s, 'class', 'svelte-10iyprh');
    },
    m(p, i) {
      k(p, s, i), u(s, r), u(r, n), u(s, _);
    },
    p: se,
    d(p) {
      p && c(s);
    },
  };
}
function Y(l) {
  let s,
    r = l[0].title && l[0].slug && fe(l);
  return {
    c() {
      r && r.c(), (s = W());
    },
    l(t) {
      r && r.l(t), (s = W());
    },
    m(t, n) {
      r && r.m(t, n), k(t, s, n);
    },
    p(t, n) {
      t[0].title && t[0].slug && r.p(t, n);
    },
    d(t) {
      r && r.d(t), t && c(s);
    },
  };
}
function me(l) {
  let s, r, t, n, m, _, p, i, h, d, O, P, b, j, A, G, y, N;
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
    (m = new ne({ props: { components: F } })),
    (d = new ce({}));
  let E = F,
    o = [];
  for (let e = 0; e < E.length; e += 1) o[e] = Y(X(l, E, e));
  return {
    c() {
      x(s.$$.fragment),
        (r = S()),
        x(t.$$.fragment),
        (n = S()),
        x(m.$$.fragment),
        (_ = S()),
        (p = $('article')),
        (i = $('section')),
        (h = $('h1')),
        x(d.$$.fragment),
        (O = M(' Components')),
        (P = S()),
        (b = $('pre')),
        (j = $('code')),
        (A = M('yarn add @reuters-graphics/graphics-svelte-components')),
        (G = S()),
        (y = $('ul'));
      for (let e = 0; e < o.length; e += 1) o[e].c();
      this.h();
    },
    l(e) {
      I(s.$$.fragment, e),
        (r = w(e)),
        I(t.$$.fragment, e),
        (n = w(e)),
        I(m.$$.fragment, e),
        (_ = w(e)),
        (p = g(e, 'ARTICLE', {}));
      var f = v(p);
      i = g(f, 'SECTION', {});
      var a = v(i);
      h = g(a, 'H1', { class: !0 });
      var C = v(h);
      I(d.$$.fragment, C),
        (O = q(C, ' Components')),
        C.forEach(c),
        (P = w(a)),
        (b = g(a, 'PRE', { class: !0 }));
      var J = v(b);
      j = g(J, 'CODE', {});
      var K = v(j);
      (A = q(K, 'yarn add @reuters-graphics/graphics-svelte-components')),
        K.forEach(c),
        J.forEach(c),
        (G = w(a)),
        (y = g(a, 'UL', { class: !0 }));
      var U = v(y);
      for (let H = 0; H < o.length; H += 1) o[H].l(U);
      U.forEach(c), a.forEach(c), f.forEach(c), this.h();
    },
    h() {
      z(h, 'class', 'svelte-10iyprh'),
        z(b, 'class', 'svelte-10iyprh'),
        z(y, 'class', 'svelte-10iyprh');
    },
    m(e, f) {
      L(s, e, f),
        k(e, r, f),
        L(t, e, f),
        k(e, n, f),
        L(m, e, f),
        k(e, _, f),
        k(e, p, f),
        u(p, i),
        u(i, h),
        L(d, h, null),
        u(h, O),
        u(i, P),
        u(i, b),
        u(b, j),
        u(j, A),
        u(i, G),
        u(i, y);
      for (let a = 0; a < o.length; a += 1) o[a].m(y, null);
      N = !0;
    },
    p(e, [f]) {
      if (f & 0) {
        E = F;
        let a;
        for (a = 0; a < E.length; a += 1) {
          const C = X(e, E, a);
          o[a] ? o[a].p(C, f) : ((o[a] = Y(C)), o[a].c(), o[a].m(y, null));
        }
        for (; a < o.length; a += 1) o[a].d(1);
        o.length = E.length;
      }
    },
    i(e) {
      N ||
        (R(s.$$.fragment, e),
        R(t.$$.fragment, e),
        R(m.$$.fragment, e),
        R(d.$$.fragment, e),
        (N = !0));
    },
    o(e) {
      T(s.$$.fragment, e),
        T(t.$$.fragment, e),
        T(m.$$.fragment, e),
        T(d.$$.fragment, e),
        (N = !1);
    },
    d(e) {
      D(s, e),
        e && c(r),
        D(t, e),
        e && c(n),
        D(m, e),
        e && c(_),
        e && c(p),
        D(d),
        te(o, e);
    },
  };
}
class _e extends B {
  constructor(s) {
    super();
    Q(this, s, null, me, V, {});
  }
}
export { _e as default };
