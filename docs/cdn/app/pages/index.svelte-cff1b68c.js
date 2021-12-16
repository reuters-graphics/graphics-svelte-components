import {
  S as s,
  i as e,
  s as t,
  J as a,
  K as r,
  j as n,
  m as o,
  o as l,
  x as c,
  u as i,
  v as f,
  l as h,
  f as g,
  d as m,
  k as p,
  e as $,
  t as u,
  n as d,
  c as v,
  a as E,
  g as w,
  b,
  H as C,
  L as z,
  I as j,
} from '../chunks/vendor-54feeb2f.js';
import {
  S as I,
  N as S,
  M as k,
  c as x,
} from '../chunks/@component-docs-e19b5d4a.js';
import { b as L } from '../chunks/paths-6758d194.js';
function R(s) {
  let e, t;
  return (
    (e = new a({
      props: { fw: !0, size: s[0], icon: r.faCog, primaryColor: '#ccc' },
    })),
    {
      c() {
        n(e.$$.fragment);
      },
      l(s) {
        o(e.$$.fragment, s);
      },
      m(s, a) {
        l(e, s, a), (t = !0);
      },
      p(s, [t]) {
        const a = {};
        1 & t && (a.size = s[0]), e.$set(a);
      },
      i(s) {
        t || (c(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        i(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        f(e, s);
      },
    }
  );
}
function T(s, e, t) {
  let { size: a = 'sm' } = e;
  return (
    (s.$$set = (s) => {
      'size' in s && t(0, (a = s.size));
    }),
    [a]
  );
}
class y extends s {
  constructor(s) {
    super(), e(this, s, T, R, t, { size: 0 });
  }
}
function D(s, e, t) {
  const a = s.slice();
  return (a[0] = e[t]), a;
}
function A(s) {
  let e,
    t =
      s[0].title &&
      s[0].slug &&
      (function (s) {
        let e,
          t,
          a,
          r,
          n = s[0].title + '';
        return {
          c() {
            (e = $('li')), (t = $('a')), (a = u(n)), this.h();
          },
          l(s) {
            e = v(s, 'LI', { class: !0 });
            var r = E(e);
            t = v(r, 'A', { href: !0, class: !0 });
            var o = E(t);
            (a = w(o, n)), o.forEach(m), r.forEach(m), this.h();
          },
          h() {
            b(t, 'href', (r = `${L}/components/${s[0].slug}/`)),
              b(t, 'class', 'svelte-1iw9fdo'),
              b(e, 'class', 'svelte-1iw9fdo');
          },
          m(s, r) {
            g(s, e, r), C(e, t), C(t, a);
          },
          p: j,
          d(s) {
            s && m(e);
          },
        };
      })(s);
  return {
    c() {
      t && t.c(), (e = h());
    },
    l(s) {
      t && t.l(s), (e = h());
    },
    m(s, a) {
      t && t.m(s, a), g(s, e, a);
    },
    p(s, e) {
      s[0].title && s[0].slug && t.p(s, e);
    },
    d(s) {
      t && t.d(s), s && m(e);
    },
  };
}
function G(s) {
  let e, t, a, r, h, j, L, R, T, G, H, N, O, P, J, K, M, U;
  (e = new I({
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
    (a = new S({})),
    (h = new k({ props: { components: x } })),
    (G = new y({}));
  let q = x,
    B = [];
  for (let n = 0; n < q.length; n += 1) B[n] = A(D(s, q, n));
  return {
    c() {
      n(e.$$.fragment),
        (t = p()),
        n(a.$$.fragment),
        (r = p()),
        n(h.$$.fragment),
        (j = p()),
        (L = $('article')),
        (R = $('section')),
        (T = $('h1')),
        n(G.$$.fragment),
        (H = u(' Components')),
        (N = p()),
        (O = $('pre')),
        (P = $('code')),
        (J = u('yarn add @reuters-graphics/graphics-svelte-components')),
        (K = p()),
        (M = $('ul'));
      for (let s = 0; s < B.length; s += 1) B[s].c();
      this.h();
    },
    l(s) {
      o(e.$$.fragment, s),
        (t = d(s)),
        o(a.$$.fragment, s),
        (r = d(s)),
        o(h.$$.fragment, s),
        (j = d(s)),
        (L = v(s, 'ARTICLE', {}));
      var n = E(L);
      R = v(n, 'SECTION', {});
      var l = E(R);
      T = v(l, 'H1', { class: !0 });
      var c = E(T);
      o(G.$$.fragment, c),
        (H = w(c, ' Components')),
        c.forEach(m),
        (N = d(l)),
        (O = v(l, 'PRE', { class: !0 }));
      var i = E(O);
      P = v(i, 'CODE', {});
      var f = E(P);
      (J = w(f, 'yarn add @reuters-graphics/graphics-svelte-components')),
        f.forEach(m),
        i.forEach(m),
        (K = d(l)),
        (M = v(l, 'UL', { class: !0 }));
      var g = E(M);
      for (let e = 0; e < B.length; e += 1) B[e].l(g);
      g.forEach(m), l.forEach(m), n.forEach(m), this.h();
    },
    h() {
      b(T, 'class', 'svelte-1iw9fdo'),
        b(O, 'class', 'svelte-1iw9fdo'),
        b(M, 'class', 'svelte-1iw9fdo');
    },
    m(s, n) {
      l(e, s, n),
        g(s, t, n),
        l(a, s, n),
        g(s, r, n),
        l(h, s, n),
        g(s, j, n),
        g(s, L, n),
        C(L, R),
        C(R, T),
        l(G, T, null),
        C(T, H),
        C(R, N),
        C(R, O),
        C(O, P),
        C(P, J),
        C(R, K),
        C(R, M);
      for (let e = 0; e < B.length; e += 1) B[e].m(M, null);
      U = !0;
    },
    p(s, [e]) {
      if (0 & e) {
        let t;
        for (q = x, t = 0; t < q.length; t += 1) {
          const a = D(s, q, t);
          B[t] ? B[t].p(a, e) : ((B[t] = A(a)), B[t].c(), B[t].m(M, null));
        }
        for (; t < B.length; t += 1) B[t].d(1);
        B.length = q.length;
      }
    },
    i(s) {
      U ||
        (c(e.$$.fragment, s),
        c(a.$$.fragment, s),
        c(h.$$.fragment, s),
        c(G.$$.fragment, s),
        (U = !0));
    },
    o(s) {
      i(e.$$.fragment, s),
        i(a.$$.fragment, s),
        i(h.$$.fragment, s),
        i(G.$$.fragment, s),
        (U = !1);
    },
    d(s) {
      f(e, s),
        s && m(t),
        f(a, s),
        s && m(r),
        f(h, s),
        s && m(j),
        s && m(L),
        f(G),
        z(B, s);
    },
  };
}
export default class extends s {
  constructor(s) {
    super(), e(this, s, null, G, t, {});
  }
}
