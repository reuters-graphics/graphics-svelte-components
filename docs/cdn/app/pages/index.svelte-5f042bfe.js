import {
  S as B,
  i as Q,
  s as V,
  J as Z,
  K as ee,
  j as z,
  m as j,
  o as x,
  x as I,
  u as L,
  v as R,
  l as W,
  f as k,
  d as i,
  k as T,
  e as _,
  t as M,
  n as D,
  c as $,
  a as g,
  g as q,
  b as S,
  H as p,
  L as te,
  I as se,
} from '../chunks/vendor-b82e5b83.js';
import {
  S as re,
  N as ae,
  M as ne,
  c as F,
} from '../chunks/@component-docs-989e6ca0.js';
import { b as le } from '../chunks/paths-6758d194.js';
function oe(l) {
  let s, r;
  return (
    (s = new Z({
      props: { fw: !0, size: l[0], icon: ee.faCog, primaryColor: '#ccc' },
    })),
    {
      c() {
        z(s.$$.fragment);
      },
      l(t) {
        j(s.$$.fragment, t);
      },
      m(t, n) {
        x(s, t, n), (r = !0);
      },
      p(t, [n]) {
        const f = {};
        n & 1 && (f.size = t[0]), s.$set(f);
      },
      i(t) {
        r || (I(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        L(s.$$.fragment, t), (r = !1);
      },
      d(t) {
        R(s, t);
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
    f;
  return {
    c() {
      (s = _('li')), (r = _('a')), (n = M(t)), this.h();
    },
    l(h) {
      s = $(h, 'LI', { class: !0 });
      var u = g(s);
      r = $(u, 'A', { href: !0, class: !0 });
      var m = g(r);
      (n = q(m, t)), m.forEach(i), u.forEach(i), this.h();
    },
    h() {
      S(r, 'href', (f = `${le}/components/${l[0].slug}/`)),
        S(r, 'class', 'svelte-10iyprh'),
        S(s, 'class', 'svelte-10iyprh');
    },
    m(h, u) {
      k(h, s, u), p(s, r), p(r, n);
    },
    p: se,
    d(h) {
      h && i(s);
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
      r && r.d(t), t && i(s);
    },
  };
}
function me(l) {
  let s, r, t, n, f, h, u, m, v, d, O, P, b, w, A, G, y, N;
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
    (f = new ne({ props: { components: F } })),
    (d = new ce({}));
  let E = F,
    o = [];
  for (let e = 0; e < E.length; e += 1) o[e] = Y(X(l, E, e));
  return {
    c() {
      z(s.$$.fragment),
        (r = T()),
        z(t.$$.fragment),
        (n = T()),
        z(f.$$.fragment),
        (h = T()),
        (u = _('article')),
        (m = _('section')),
        (v = _('h1')),
        z(d.$$.fragment),
        (O = M(' Components')),
        (P = T()),
        (b = _('pre')),
        (w = _('code')),
        (A = M('yarn add @reuters-graphics/graphics-svelte-components')),
        (G = T()),
        (y = _('ul'));
      for (let e = 0; e < o.length; e += 1) o[e].c();
      this.h();
    },
    l(e) {
      j(s.$$.fragment, e),
        (r = D(e)),
        j(t.$$.fragment, e),
        (n = D(e)),
        j(f.$$.fragment, e),
        (h = D(e)),
        (u = $(e, 'ARTICLE', {}));
      var c = g(u);
      m = $(c, 'SECTION', {});
      var a = g(m);
      v = $(a, 'H1', { class: !0 });
      var C = g(v);
      j(d.$$.fragment, C),
        (O = q(C, ' Components')),
        C.forEach(i),
        (P = D(a)),
        (b = $(a, 'PRE', { class: !0 }));
      var J = g(b);
      w = $(J, 'CODE', {});
      var K = g(w);
      (A = q(K, 'yarn add @reuters-graphics/graphics-svelte-components')),
        K.forEach(i),
        J.forEach(i),
        (G = D(a)),
        (y = $(a, 'UL', { class: !0 }));
      var U = g(y);
      for (let H = 0; H < o.length; H += 1) o[H].l(U);
      U.forEach(i), a.forEach(i), c.forEach(i), this.h();
    },
    h() {
      S(v, 'class', 'svelte-10iyprh'),
        S(b, 'class', 'svelte-10iyprh'),
        S(y, 'class', 'svelte-10iyprh');
    },
    m(e, c) {
      x(s, e, c),
        k(e, r, c),
        x(t, e, c),
        k(e, n, c),
        x(f, e, c),
        k(e, h, c),
        k(e, u, c),
        p(u, m),
        p(m, v),
        x(d, v, null),
        p(v, O),
        p(m, P),
        p(m, b),
        p(b, w),
        p(w, A),
        p(m, G),
        p(m, y);
      for (let a = 0; a < o.length; a += 1) o[a].m(y, null);
      N = !0;
    },
    p(e, [c]) {
      if (c & 0) {
        E = F;
        let a;
        for (a = 0; a < E.length; a += 1) {
          const C = X(e, E, a);
          o[a] ? o[a].p(C, c) : ((o[a] = Y(C)), o[a].c(), o[a].m(y, null));
        }
        for (; a < o.length; a += 1) o[a].d(1);
        o.length = E.length;
      }
    },
    i(e) {
      N ||
        (I(s.$$.fragment, e),
        I(t.$$.fragment, e),
        I(f.$$.fragment, e),
        I(d.$$.fragment, e),
        (N = !0));
    },
    o(e) {
      L(s.$$.fragment, e),
        L(t.$$.fragment, e),
        L(f.$$.fragment, e),
        L(d.$$.fragment, e),
        (N = !1);
    },
    d(e) {
      R(s, e),
        e && i(r),
        R(t, e),
        e && i(n),
        R(f, e),
        e && i(h),
        e && i(u),
        R(d),
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
