import {
  S as t,
  i as s,
  s as e,
  D as n,
  e as a,
  c as r,
  a as o,
  d as c,
  f as l,
  E as i,
  F as p,
  G as u,
  x as f,
  u as g,
  A as h,
  a6 as m,
  j as $,
  k as d,
  t as v,
  m as k,
  n as w,
  g as E,
  b as x,
  H as b,
  o as I,
  h as y,
  v as j,
  l as D,
  I as R,
  U as L,
  p as N,
  q as V,
  r as A,
  w as H,
  L as O,
  B,
} from './vendor-927c0fc0.js';
import { D as C } from './index-38e47fc4.js';
import './@component-docs-73e95ca8.js';
import './paths-6758d194.js';
const G = (t) => ({ intersecting: 1 & t }),
  M = (t) => ({ intersecting: t[0] });
function P(t) {
  let s, e;
  const h = t[8].default,
    m = n(h, t, t[7], M);
  return {
    c() {
      (s = a('div')), m && m.c();
    },
    l(t) {
      s = r(t, 'DIV', {});
      var e = o(s);
      m && m.l(e), e.forEach(c);
    },
    m(n, a) {
      l(n, s, a), m && m.m(s, null), t[9](s), (e = !0);
    },
    p(t, [s]) {
      m &&
        m.p &&
        (!e || 129 & s) &&
        i(m, h, t, t[7], e ? u(h, t[7], s, G) : p(t[7]), M);
    },
    i(t) {
      e || (f(m, t), (e = !0));
    },
    o(t) {
      g(m, t), (e = !1);
    },
    d(e) {
      e && c(s), m && m.d(e), t[9](null);
    },
  };
}
function S(t, s, e) {
  let n,
    { $$slots: a = {}, $$scope: r } = s,
    { once: o = !1 } = s,
    { top: c = 0 } = s,
    { bottom: l = 0 } = s,
    { left: i = 0 } = s,
    { right: p = 0 } = s,
    u = !1;
  return (
    h(() => {
      if ('undefined' != typeof IntersectionObserver) {
        const t = new IntersectionObserver(
          (s) => {
            e(0, (u = s[0].isIntersecting)), u && o && t.unobserve(n);
          },
          { rootMargin: `${l}px ${i}px ${c}px ${p}px` }
        );
        return t.observe(n), () => t.unobserve(n);
      }
      function t() {
        const s = n.getBoundingClientRect();
        e(
          0,
          (u =
            s.bottom + l > 0 &&
            s.right + p > 0 &&
            s.top - c < window.innerHeight &&
            s.left - i < window.innerWidth)
        ),
          u && o && window.removeEventListener('scroll', t);
      }
      return (
        window.addEventListener('scroll', t),
        () => window.removeEventListener('scroll', t)
      );
    }),
    (t.$$set = (t) => {
      'once' in t && e(2, (o = t.once)),
        'top' in t && e(3, (c = t.top)),
        'bottom' in t && e(4, (l = t.bottom)),
        'left' in t && e(5, (i = t.left)),
        'right' in t && e(6, (p = t.right)),
        '$$scope' in t && e(7, (r = t.$$scope));
    }),
    [
      u,
      n,
      o,
      c,
      l,
      i,
      p,
      r,
      a,
      function (t) {
        m[t ? 'unshift' : 'push'](() => {
          (n = t), e(1, n);
        });
      },
    ]
  );
}
class T extends t {
  constructor(t) {
    super(),
      s(this, t, S, P, e, { once: 2, top: 3, bottom: 4, left: 5, right: 6 });
  }
}
function q(t) {
  let s;
  return {
    c() {
      (s = a('div')), this.h();
    },
    l(t) {
      (s = r(t, 'DIV', { class: !0 })), o(s).forEach(c), this.h();
    },
    h() {
      x(s, 'class', 'image svelte-13n58v0');
    },
    m(t, e) {
      l(t, s, e);
    },
    p: R,
    d(t) {
      t && c(s);
    },
  };
}
function F(t) {
  let s, e;
  return {
    c() {
      (s = a('div')), this.h();
    },
    l(t) {
      (s = r(t, 'DIV', { class: !0, style: !0 })), o(s).forEach(c), this.h();
    },
    h() {
      x(s, 'class', 'image svelte-13n58v0'),
        x(s, 'style', (e = `background-image: url(${t[1]});`));
    },
    m(t, e) {
      l(t, s, e);
    },
    p(t, n) {
      2 & n &&
        e !== (e = `background-image: url(${t[1]});`) &&
        x(s, 'style', e);
    },
    d(t) {
      t && c(s);
    },
  };
}
function U(t) {
  let s;
  function e(t, s) {
    return t[4] ? F : q;
  }
  let n = e(t),
    a = n(t);
  return {
    c() {
      a.c(), (s = D());
    },
    l(t) {
      a.l(t), (s = D());
    },
    m(t, e) {
      a.m(t, e), l(t, s, e);
    },
    p(t, r) {
      n === (n = e(t)) && a
        ? a.p(t, r)
        : (a.d(1), (a = n(t)), a && (a.c(), a.m(s.parentNode, s)));
    },
    d(t) {
      a.d(t), t && c(s);
    },
  };
}
function W(t) {
  let s, e, n, i, p, u, h;
  return (
    (n = new T({
      props: {
        top: 600,
        $$slots: {
          default: [
            U,
            ({ intersecting: t }) => ({ 4: t }),
            ({ intersecting: t }) => (t ? 16 : 0),
          ],
        },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        (s = a('div')),
          (e = a('a')),
          $(n.$$.fragment),
          (i = d()),
          (p = a('p')),
          (u = v(t[2])),
          this.h();
      },
      l(a) {
        s = r(a, 'DIV', { class: !0, title: !0 });
        var l = o(s);
        e = r(l, 'A', { href: !0 });
        var f = o(e);
        k(n.$$.fragment, f), (i = w(f)), (p = r(f, 'P', {}));
        var g = o(p);
        (u = E(g, t[2])), g.forEach(c), f.forEach(c), l.forEach(c), this.h();
      },
      h() {
        x(e, 'href', t[0]), x(s, 'class', 'referral'), x(s, 'title', t[3]);
      },
      m(t, a) {
        l(t, s, a), b(s, e), I(n, e, null), b(e, i), b(e, p), b(p, u), (h = !0);
      },
      p(t, [a]) {
        const r = {};
        50 & a && (r.$$scope = { dirty: a, ctx: t }),
          n.$set(r),
          (!h || 4 & a) && y(u, t[2]),
          (!h || 1 & a) && x(e, 'href', t[0]),
          (!h || 8 & a) && x(s, 'title', t[3]);
      },
      i(t) {
        h || (f(n.$$.fragment, t), (h = !0));
      },
      o(t) {
        g(n.$$.fragment, t), (h = !1);
      },
      d(t) {
        t && c(s), j(n);
      },
    }
  );
}
function z(t, s, e) {
  let { url: n } = s,
    { image: a } = s,
    { title: r } = s,
    { description: o } = s;
  return (
    (t.$$set = (t) => {
      'url' in t && e(0, (n = t.url)),
        'image' in t && e(1, (a = t.image)),
        'title' in t && e(2, (r = t.title)),
        'description' in t && e(3, (o = t.description));
    }),
    [n, a, r, o]
  );
}
class J extends t {
  constructor(t) {
    super(),
      s(this, t, z, W, e, { url: 0, image: 1, title: 2, description: 3 });
  }
}
function K(t, s, e) {
  const n = t.slice();
  return (n[1] = s[e]), n;
}
function Q(t) {
  let s,
    e,
    n,
    i,
    p,
    u,
    h,
    m = t[0],
    $ = [];
  for (let a = 0; a < m.length; a += 1) $[a] = X(K(t, m, a));
  const v = (t) =>
    g($[t], 1, 1, () => {
      $[t] = null;
    });
  return {
    c() {
      (s = a('section')),
        (e = a('figure')),
        (n = a('img')),
        (p = d()),
        (u = a('nav'));
      for (let t = 0; t < $.length; t += 1) $[t].c();
      this.h();
    },
    l(t) {
      s = r(t, 'SECTION', { class: !0 });
      var a = o(s);
      e = r(a, 'FIGURE', { class: !0 });
      var l = o(e);
      (n = r(l, 'IMG', { src: !0, alt: !0 })),
        l.forEach(c),
        (p = w(a)),
        (u = r(a, 'NAV', { class: !0 }));
      var i = o(u);
      for (let s = 0; s < $.length; s += 1) $[s].l(i);
      i.forEach(c), a.forEach(c), this.h();
    },
    h() {
      L(
        n.src,
        (i =
          'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-logo/svg/logo-color.svg')
      ) ||
        x(
          n,
          'src',
          'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-logo/svg/logo-color.svg'
        ),
        x(n, 'alt', ''),
        x(e, 'class', 'svelte-1dfql50'),
        x(u, 'class', 'referral-rail row'),
        x(s, 'class', 'referral-container');
    },
    m(t, a) {
      l(t, s, a), b(s, e), b(e, n), b(s, p), b(s, u);
      for (let s = 0; s < $.length; s += 1) $[s].m(u, null);
      h = !0;
    },
    p(t, s) {
      if (1 & s) {
        let e;
        for (m = t[0], e = 0; e < m.length; e += 1) {
          const n = K(t, m, e);
          $[e]
            ? ($[e].p(n, s), f($[e], 1))
            : (($[e] = X(n)), $[e].c(), f($[e], 1), $[e].m(u, null));
        }
        for (A(), e = m.length; e < $.length; e += 1) v(e);
        H();
      }
    },
    i(t) {
      if (!h) {
        for (let t = 0; t < m.length; t += 1) f($[t]);
        h = !0;
      }
    },
    o(t) {
      $ = $.filter(Boolean);
      for (let s = 0; s < $.length; s += 1) g($[s]);
      h = !1;
    },
    d(t) {
      t && c(s), O($, t);
    },
  };
}
function X(t) {
  let s, e;
  const n = [t[1]];
  let a = {};
  for (let r = 0; r < n.length; r += 1) a = B(a, n[r]);
  return (
    (s = new J({ props: a })),
    {
      c() {
        $(s.$$.fragment);
      },
      l(t) {
        k(s.$$.fragment, t);
      },
      m(t, n) {
        I(s, t, n), (e = !0);
      },
      p(t, e) {
        const a = 1 & e ? N(n, [V(t[1])]) : {};
        s.$set(a);
      },
      i(t) {
        e || (f(s.$$.fragment, t), (e = !0));
      },
      o(t) {
        g(s.$$.fragment, t), (e = !1);
      },
      d(t) {
        j(s, t);
      },
    }
  );
}
function Y(t) {
  let s,
    e,
    n = t[0] && Q(t);
  return {
    c() {
      n && n.c(), (s = D());
    },
    l(t) {
      n && n.l(t), (s = D());
    },
    m(t, a) {
      n && n.m(t, a), l(t, s, a), (e = !0);
    },
    p(t, [e]) {
      t[0]
        ? n
          ? (n.p(t, e), 1 & e && f(n, 1))
          : ((n = Q(t)), n.c(), f(n, 1), n.m(s.parentNode, s))
        : n &&
          (A(),
          g(n, 1, 1, () => {
            n = null;
          }),
          H());
    },
    i(t) {
      e || (f(n), (e = !0));
    },
    o(t) {
      g(n), (e = !1);
    },
    d(t) {
      n && n.d(t), t && c(s);
    },
  };
}
function Z(t, s, e) {
  let n;
  return (
    h(() => {
      fetch(
        'https://graphics.thomsonreuters.com/data/reuters-graphics/homepage/latest.json'
      )
        .then((t) => t.json())
        .then((t) => {
          e(
            0,
            (n = t
              .slice(0, 4)
              .map(({ url: t, image: s, title: e, description: n }) => ({
                url: t,
                image: s,
                title: e,
                description: n,
              })))
          );
        });
    }),
    [n]
  );
}
class _ extends t {
  constructor(t) {
    super(), s(this, t, Z, Y, e, {});
  }
}
function tt(t) {
  let s,
    e,
    n = (function (t) {
      let s, e;
      return (
        (s = new _({})),
        {
          c() {
            $(s.$$.fragment);
          },
          l(t) {
            k(s.$$.fragment, t);
          },
          m(t, n) {
            I(s, t, n), (e = !0);
          },
          i(t) {
            e || (f(s.$$.fragment, t), (e = !0));
          },
          o(t) {
            g(s.$$.fragment, t), (e = !1);
          },
          d(t) {
            j(s, t);
          },
        }
      );
    })();
  return {
    c() {
      n && n.c(), (s = D());
    },
    l(t) {
      n && n.l(t), (s = D());
    },
    m(t, a) {
      n && n.m(t, a), l(t, s, a), (e = !0);
    },
    p: R,
    i(t) {
      e || (f(n), (e = !0));
    },
    o(t) {
      g(n), (e = !1);
    },
    d(t) {
      n && n.d(t), t && c(s);
    },
  };
}
class st extends t {
  constructor(t) {
    super(), s(this, t, null, tt, e, {});
  }
}
function et(t) {
  let s, e;
  return (
    (s = new st({})),
    {
      c() {
        $(s.$$.fragment);
      },
      l(t) {
        k(s.$$.fragment, t);
      },
      m(t, n) {
        I(s, t, n), (e = !0);
      },
      i(t) {
        e || (f(s.$$.fragment, t), (e = !0));
      },
      o(t) {
        g(s.$$.fragment, t), (e = !1);
      },
      d(t) {
        j(s, t);
      },
    }
  );
}
function nt(t) {
  let s, e, n, i, p, u, h, m, y, D, R;
  return (
    (D = new C({ props: { $$slots: { default: [et] }, $$scope: { ctx: t } } })),
    {
      c() {
        (s = a('section')),
          (e = a('h2')),
          (n = v(rt)),
          (i = d()),
          (p = a('p')),
          (u = v(ot)),
          (h = d()),
          (m = a('pre')),
          (y = d()),
          $(D.$$.fragment),
          this.h();
      },
      l(t) {
        s = r(t, 'SECTION', {});
        var a = o(s);
        e = r(a, 'H2', {});
        var l = o(e);
        (n = E(l, rt)), l.forEach(c), (i = w(a)), (p = r(a, 'P', {}));
        var f = o(p);
        (u = E(f, ot)),
          f.forEach(c),
          a.forEach(c),
          (h = w(t)),
          (m = r(t, 'PRE', { class: !0 })),
          o(m).forEach(c),
          (y = w(t)),
          k(D.$$.fragment, t),
          this.h();
      },
      h() {
        x(m, 'class', 'language-svelte');
      },
      m(t, a) {
        l(t, s, a),
          b(s, e),
          b(e, n),
          b(s, i),
          b(s, p),
          b(p, u),
          l(t, h, a),
          l(t, m, a),
          (m.innerHTML =
            '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Referrals <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Referrals</span> <span class="token punctuation">/></span></span></code>'),
          l(t, y, a),
          I(D, t, a),
          (R = !0);
      },
      p(t, [s]) {
        const e = {};
        1 & s && (e.$$scope = { dirty: s, ctx: t }), D.$set(e);
      },
      i(t) {
        R || (f(D.$$.fragment, t), (R = !0));
      },
      o(t) {
        g(D.$$.fragment, t), (R = !1);
      },
      d(t) {
        t && c(s), t && c(h), t && c(m), t && c(y), j(D, t);
      },
    }
  );
}
const at = {
    title: 'Referrals',
    description: 'Add a referrals bar with recent graphics stories.',
    slug: 'referrals',
  },
  { title: rt, description: ot, slug: ct } = at;
export default class extends t {
  constructor(t) {
    super(), s(this, t, null, nt, e, {});
  }
}
export { at as metadata };
