import {
  S as x,
  i as ee,
  s as te,
  T as ue,
  e as j,
  t as Y,
  k as B,
  w as O,
  c as I,
  a as M,
  h as Z,
  d as b,
  m as N,
  x as G,
  b as v,
  f as Q,
  g as S,
  J as F,
  y as H,
  V,
  j as ie,
  q as R,
  o as P,
  B as L,
  a4 as fe,
  R as oe,
  X as me,
  Z as se,
  Y as pe,
  n as de,
  p as he,
  _ as ve,
  v as ge,
  u as _e,
  E as ke,
} from './index-83a5d9f9.js';
import { D as be } from './index-16ec1060.js';
import { F as $, p as we, u as Fe } from './main-5a0c9f3a.js';
import { f as Ee, a as ce, b as We } from './index.es-99e9c10a.js';
import { w as ye } from './index-5b18af3d.js';
import './paths-396f020f.js';
const C = ye(660);
function De(t) {
  let e,
    s,
    n,
    d = (t[7] || t[3]) + '',
    a,
    c,
    k,
    u,
    g,
    f,
    m,
    o,
    l,
    i,
    _,
    w,
    h,
    T,
    r,
    p,
    D,
    y,
    q;
  return (
    ue(t[21]),
    (f = new $({ props: { icon: Ee, fw: !0 } })),
    (r = new $({ props: { icon: ce, fw: !0 } })),
    {
      c() {
        (e = j('div')),
          (s = j('div')),
          (n = j('div')),
          (a = Y(d)),
          (c = Y('px')),
          (u = B()),
          (g = j('button')),
          O(f.$$.fragment),
          (o = B()),
          (l = j('div')),
          (i = j('div')),
          (_ = B()),
          (w = j('div')),
          (h = B()),
          (T = j('button')),
          O(r.$$.fragment),
          this.h();
      },
      l(W) {
        e = I(W, 'DIV', { id: !0, class: !0 });
        var U = M(e);
        s = I(U, 'DIV', { class: !0 });
        var A = M(s);
        n = I(A, 'DIV', { class: !0, style: !0 });
        var J = M(n);
        (a = Z(J, d)),
          (c = Z(J, 'px')),
          J.forEach(b),
          (u = N(A)),
          (g = I(A, 'BUTTON', { class: !0 }));
        var E = M(g);
        G(f.$$.fragment, E),
          E.forEach(b),
          (o = N(A)),
          (l = I(A, 'DIV', { class: !0 }));
        var z = M(l);
        (i = I(z, 'DIV', { class: !0 })),
          M(i).forEach(b),
          (_ = N(z)),
          (w = I(z, 'DIV', { class: !0, tabindex: !0, style: !0 })),
          M(w).forEach(b),
          z.forEach(b),
          (h = N(A)),
          (T = I(A, 'BUTTON', { class: !0 }));
        var X = M(T);
        G(r.$$.fragment, X), X.forEach(b), A.forEach(b), U.forEach(b), this.h();
      },
      h() {
        v(n, 'class', 'label svelte-1o1jkdv'),
          v(n, 'style', (k = `opacity: ${t[5] || t[6] ? 1 : 0};`)),
          v(g, 'class', 'icon left svelte-1o1jkdv'),
          (g.disabled = m = t[3] === t[1]),
          v(i, 'class', 'track svelte-1o1jkdv'),
          v(w, 'class', 'handle svelte-1o1jkdv'),
          v(w, 'tabindex', '0'),
          Q(w, 'left', 'calc(' + t[8] * 100 + '% - 5px)'),
          v(l, 'class', 'slider-container svelte-1o1jkdv'),
          v(T, 'class', 'icon right svelte-1o1jkdv'),
          (T.disabled = p = t[3] === t[2]),
          v(s, 'class', 'slider svelte-1o1jkdv'),
          v(e, 'id', 'resizer'),
          v(e, 'class', 'svelte-1o1jkdv');
      },
      m(W, U) {
        S(W, e, U),
          F(e, s),
          F(s, n),
          F(n, a),
          F(n, c),
          F(s, u),
          F(s, g),
          H(f, g, null),
          F(s, o),
          F(s, l),
          F(l, i),
          F(l, _),
          F(l, w),
          t[22](l),
          F(s, h),
          F(s, T),
          H(r, T, null),
          (D = !0),
          y ||
            ((q = [
              V(window, 'mousemove', t[9]),
              V(window, 'mouseup', t[12]),
              V(window, 'keydown', t[10]),
              V(window, 'resize', t[21]),
              V(g, 'click', t[16]),
              V(g, 'focus', t[13]),
              V(g, 'mouseover', t[13]),
              V(g, 'mouseleave', t[14]),
              V(w, 'mousedown', t[11]),
              V(w, 'focus', t[13]),
              V(w, 'blur', t[14]),
              V(T, 'click', t[15]),
              V(T, 'focus', t[13]),
              V(T, 'mouseover', t[13]),
              V(T, 'mouseleave', t[14]),
            ]),
            (y = !0));
      },
      p(W, [U]) {
        (!D || U & 136) && d !== (d = (W[7] || W[3]) + '') && ie(a, d),
          (!D || (U & 96 && k !== (k = `opacity: ${W[5] || W[6] ? 1 : 0};`))) &&
            v(n, 'style', k),
          (!D || (U & 10 && m !== (m = W[3] === W[1]))) && (g.disabled = m),
          (!D || U & 256) && Q(w, 'left', 'calc(' + W[8] * 100 + '% - 5px)'),
          (!D || (U & 12 && p !== (p = W[3] === W[2]))) && (T.disabled = p);
      },
      i(W) {
        D || (R(f.$$.fragment, W), R(r.$$.fragment, W), (D = !0));
      },
      o(W) {
        P(f.$$.fragment, W), P(r.$$.fragment, W), (D = !1);
      },
      d(W) {
        W && b(e), L(f), t[22](null), L(r), (y = !1), fe(q);
      },
    }
  );
}
const K = 90;
function je(t, e, s) {
  let n, d, a, c, k;
  oe(t, C, (E) => s(3, (k = E)));
  let { breakpoints: u = [330, 510, 660, 930, 1200] } = e,
    { maxFrameWidth: g = 1200 } = e,
    { minFrameWidth: f = 320 } = e,
    m,
    o = 1200,
    l = !1,
    i = !1;
  const _ = (E) => Math.ceil(E / 5) * 5,
    w = () => Math.round(a * c + n);
  let h = null;
  const T = (E) => {
      if (!l || !m) return;
      const { left: z } = m.getBoundingClientRect();
      s(8, (c = Math.min(Math.max(0, E.pageX - z), K) / K)), s(7, (h = _(w())));
    },
    r = (E) => {
      if (!i) return;
      const { keyCode: z } = E,
        X = K / a;
      z === 39
        ? s(8, (c = Math.min(1, c + X / K)))
        : z === 37 && s(8, (c = Math.max(0, c - X / K))),
        C.set(w());
    },
    p = (E) => {
      s(5, (l = !0)), T(E);
    },
    D = () => {
      s(5, (l = !1)), s(7, (h = null)), C.set(_(w()));
    },
    y = () => {
      s(6, (i = !0));
    },
    q = () => {
      s(6, (i = !1));
    },
    W = () => {
      const E = u.filter((z) => z <= d).filter((z) => z > k);
      E.length === 0 ? C.set(d) : C.set(E[0]);
    },
    U = () => {
      const E = u.filter((z) => z < k);
      E.length === 0 ? C.set(n) : C.set(E.slice(-1)[0]);
    };
  function A() {
    s(0, (o = window.innerWidth));
  }
  function J(E) {
    me[E ? 'unshift' : 'push'](() => {
      (m = E), s(4, m);
    });
  }
  return (
    (t.$$set = (E) => {
      'breakpoints' in E && s(17, (u = E.breakpoints)),
        'maxFrameWidth' in E && s(18, (g = E.maxFrameWidth)),
        'minFrameWidth' in E && s(19, (f = E.minFrameWidth));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 524288 && s(1, (n = f)),
        t.$$.dirty & 262145 && s(2, (d = Math.min(o - 70, g))),
        t.$$.dirty & 6 && s(20, (a = d - n)),
        t.$$.dirty & 12 && k > d && C.set(d),
        t.$$.dirty & 1048586 && s(8, (c = (k - n) / a));
    }),
    [o, n, d, k, m, l, i, h, c, T, r, p, D, y, q, W, U, u, g, f, a, A, J]
  );
}
class Ie extends x {
  constructor(e) {
    super(),
      ee(this, e, je, De, te, {
        breakpoints: 17,
        maxFrameWidth: 18,
        minFrameWidth: 19,
      });
  }
}
var Me = (t) => {
  const e = t
    .map((a) => a.replace(/\?.+$/, ''))
    .map((a) => a.replace(/index\.html$/, ''))
    .map((a) => a.replace(/^http[s]*:\/\/[\w.]+\.com/, ''));
  if (e.length === 1)
    return [
      e[0]
        .split('/')
        .filter((a) => a)
        .slice(-1)[0],
    ];
  const s = e[0];
  let n = 0;
  for (const a in s.split('/')) {
    const c = s.split('/')[a];
    if (e.every((u) => u.split('/')[a] === c)) n += 1;
    else break;
  }
  if (n === s.split('/').length) return e;
  let d = 0;
  for (const a in s.split('/').reverse()) {
    const c = s.split('/').reverse()[a];
    if (e.every((u) => u.split('/').reverse()[a] === c)) d += 1;
    else break;
  }
  return e.map((a) =>
    d > 0
      ? a
          .split('/')
          .slice(n, d * -1)
          .join('/')
      : a.split('/').slice(n).join('/')
  );
};
function ae(t, e, s) {
  const n = t.slice();
  return (n[10] = e[s]), (n[12] = s), n;
}
function ne(t) {
  let e,
    s = t[5][t[12]] + '',
    n,
    d,
    a,
    c,
    k,
    u,
    g,
    f,
    m,
    o;
  c = new $({ props: { icon: We } });
  function l() {
    return t[7](t[10]);
  }
  return {
    c() {
      (e = j('button')),
        (n = Y(s)),
        (d = B()),
        (a = j('a')),
        O(c.$$.fragment),
        (g = B()),
        this.h();
    },
    l(i) {
      e = I(i, 'BUTTON', { class: !0 });
      var _ = M(e);
      (n = Z(_, s)),
        (d = N(_)),
        (a = I(_, 'A', {
          rel: !0,
          target: !0,
          href: !0,
          title: !0,
          class: !0,
        }));
      var w = M(a);
      G(c.$$.fragment, w), w.forEach(b), (g = N(_)), _.forEach(b), this.h();
    },
    h() {
      v(a, 'rel', 'external'),
        v(a, 'target', '_blank'),
        v(a, 'href', (k = t[10])),
        v(a, 'title', (u = t[10])),
        v(a, 'class', 'svelte-97ib6o'),
        v(e, 'class', 'svelte-97ib6o'),
        se(e, 'active', t[4] === t[10]);
    },
    m(i, _) {
      S(i, e, _),
        F(e, n),
        F(e, d),
        F(e, a),
        H(c, a, null),
        F(e, g),
        (f = !0),
        m || ((o = V(e, 'click', l)), (m = !0));
    },
    p(i, _) {
      (t = i),
        (!f || _ & 32) && s !== (s = t[5][t[12]] + '') && ie(n, s),
        (!f || (_ & 1 && k !== (k = t[10]))) && v(a, 'href', k),
        (!f || (_ & 1 && u !== (u = t[10]))) && v(a, 'title', u),
        _ & 17 && se(e, 'active', t[4] === t[10]);
    },
    i(i) {
      f || (R(c.$$.fragment, i), (f = !0));
    },
    o(i) {
      P(c.$$.fragment, i), (f = !1);
    },
    d(i) {
      i && b(e), L(c), (m = !1), o();
    },
  };
}
function Te(t) {
  let e,
    s,
    n,
    d,
    a,
    c,
    k,
    u,
    g,
    f,
    m,
    o,
    l,
    i,
    _,
    w = t[0],
    h = [];
  for (let r = 0; r < w.length; r += 1) h[r] = ne(ae(t, w, r));
  const T = (r) =>
    P(h[r], 1, 1, () => {
      h[r] = null;
    });
  return (
    (o = new $({ props: { icon: ce } })),
    (i = new Ie({
      props: { breakpoints: t[1], minFrameWidth: t[2], maxFrameWidth: t[3] },
    })),
    {
      c() {
        (e = j('div')),
          (s = j('header')),
          (n = j('img')),
          (a = B()),
          (c = j('nav'));
        for (let r = 0; r < h.length; r += 1) h[r].c();
        (k = B()),
          (u = j('div')),
          (g = B()),
          (f = j('div')),
          (m = j('a')),
          O(o.$$.fragment),
          (l = B()),
          O(i.$$.fragment),
          this.h();
      },
      l(r) {
        e = I(r, 'DIV', { class: !0 });
        var p = M(e);
        s = I(p, 'HEADER', { class: !0 });
        var D = M(s);
        (n = I(D, 'IMG', { src: !0, alt: !0 })),
          D.forEach(b),
          (a = N(p)),
          (c = I(p, 'NAV', { class: !0 }));
        var y = M(c);
        for (let U = 0; U < h.length; U += 1) h[U].l(y);
        y.forEach(b),
          (k = N(p)),
          (u = I(p, 'DIV', { id: !0, style: !0, class: !0 })),
          M(u).forEach(b),
          p.forEach(b),
          (g = N(r)),
          (f = I(r, 'DIV', { id: !0, class: !0 }));
        var q = M(f);
        m = I(q, 'A', { rel: !0, href: !0, class: !0 });
        var W = M(m);
        G(o.$$.fragment, W),
          W.forEach(b),
          q.forEach(b),
          (l = N(r)),
          G(i.$$.fragment, r),
          this.h();
      },
      h() {
        pe(
          n.src,
          (d =
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-dark.svg')
        ) || v(n, 'src', d),
          v(n, 'alt', ''),
          v(s, 'class', 'svelte-97ib6o'),
          v(c, 'class', 'svelte-97ib6o'),
          v(u, 'id', 'frame-parent'),
          Q(u, 'width', t[6] + 'px'),
          v(u, 'class', 'svelte-97ib6o'),
          v(e, 'class', 'container'),
          v(m, 'rel', 'external'),
          v(m, 'href', './../'),
          v(m, 'class', 'svelte-97ib6o'),
          v(f, 'id', 'home-link'),
          v(f, 'class', 'svelte-97ib6o');
      },
      m(r, p) {
        S(r, e, p), F(e, s), F(s, n), F(e, a), F(e, c);
        for (let D = 0; D < h.length; D += 1) h[D].m(c, null);
        F(e, k),
          F(e, u),
          S(r, g, p),
          S(r, f, p),
          F(f, m),
          H(o, m, null),
          S(r, l, p),
          H(i, r, p),
          (_ = !0);
      },
      p(r, [p]) {
        if (p & 49) {
          w = r[0];
          let y;
          for (y = 0; y < w.length; y += 1) {
            const q = ae(r, w, y);
            h[y]
              ? (h[y].p(q, p), R(h[y], 1))
              : ((h[y] = ne(q)), h[y].c(), R(h[y], 1), h[y].m(c, null));
          }
          for (de(), y = w.length; y < h.length; y += 1) T(y);
          he();
        }
        (!_ || p & 64) && Q(u, 'width', r[6] + 'px');
        const D = {};
        p & 2 && (D.breakpoints = r[1]),
          p & 4 && (D.minFrameWidth = r[2]),
          p & 8 && (D.maxFrameWidth = r[3]),
          i.$set(D);
      },
      i(r) {
        if (!_) {
          for (let p = 0; p < w.length; p += 1) R(h[p]);
          R(o.$$.fragment, r), R(i.$$.fragment, r), (_ = !0);
        }
      },
      o(r) {
        h = h.filter(Boolean);
        for (let p = 0; p < h.length; p += 1) P(h[p]);
        P(o.$$.fragment, r), P(i.$$.fragment, r), (_ = !1);
      },
      d(r) {
        r && b(e), ve(h, r), r && b(g), r && b(f), L(o), r && b(l), L(i, r);
      },
    }
  );
}
function Ue(t, e, s) {
  let n, d;
  oe(t, C, (o) => s(6, (d = o)));
  let { embeds: a } = e,
    { breakpoints: c = [330, 510, 660, 930, 1200] } = e,
    { minFrameWidth: k = 320 } = e,
    { maxFrameWidth: u = 1200 } = e,
    g = a[0];
  const f = (o) => {
    new we.Parent(
      'frame-parent',
      /^http/.test(o) ? o : Fe(window.location.origin, o, { trailingSlash: !0 })
    );
  };
  ge(() => {
    f(g);
  }),
    _e(() => {
      f(g);
    });
  const m = (o) => {
    s(4, (g = o));
  };
  return (
    (t.$$set = (o) => {
      'embeds' in o && s(0, (a = o.embeds)),
        'breakpoints' in o && s(1, (c = o.breakpoints)),
        'minFrameWidth' in o && s(2, (k = o.minFrameWidth)),
        'maxFrameWidth' in o && s(3, (u = o.maxFrameWidth));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 1 && s(5, (n = Me(a)));
    }),
    [a, c, k, u, g, n, d, m]
  );
}
class Ve extends x {
  constructor(e) {
    super(),
      ee(this, e, Ue, Te, te, {
        embeds: 0,
        breakpoints: 1,
        minFrameWidth: 2,
        maxFrameWidth: 3,
      });
  }
}
function ze(t) {
  let e, s;
  return (
    (e = new Ve({ props: { embeds: t[0] } })),
    {
      c() {
        O(e.$$.fragment);
      },
      l(n) {
        G(e.$$.fragment, n);
      },
      m(n, d) {
        H(e, n, d), (s = !0);
      },
      p: ke,
      i(n) {
        s || (R(e.$$.fragment, n), (s = !0));
      },
      o(n) {
        P(e.$$.fragment, n), (s = !1);
      },
      d(n) {
        L(e, n);
      },
    }
  );
}
function Be(t) {
  let e,
    s,
    n,
    d,
    a,
    c,
    k,
    u,
    g = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Framer <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> embeds <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'/embeds/my-chart/index.html'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Framer</span> <span class="token attr-name">embeds=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>embeds<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,
    f,
    m,
    o;
  return (
    (m = new be({
      props: { fluid: !0, $$slots: { default: [ze] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        (e = j('section')),
          (s = j('h2')),
          (n = Y(re)),
          (d = B()),
          (a = j('p')),
          (c = Y(le)),
          (k = B()),
          (u = j('pre')),
          (f = B()),
          O(m.$$.fragment),
          this.h();
      },
      l(l) {
        e = I(l, 'SECTION', {});
        var i = M(e);
        s = I(i, 'H2', {});
        var _ = M(s);
        (n = Z(_, re)), _.forEach(b), (d = N(i)), (a = I(i, 'P', {}));
        var w = M(a);
        (c = Z(w, le)),
          w.forEach(b),
          i.forEach(b),
          (k = N(l)),
          (u = I(l, 'PRE', { class: !0 }));
        var h = M(u);
        h.forEach(b), (f = N(l)), G(m.$$.fragment, l), this.h();
      },
      h() {
        v(u, 'class', 'language-svelte');
      },
      m(l, i) {
        S(l, e, i),
          F(e, s),
          F(s, n),
          F(e, d),
          F(e, a),
          F(a, c),
          S(l, k, i),
          S(l, u, i),
          (u.innerHTML = g),
          S(l, f, i),
          H(m, l, i),
          (o = !0);
      },
      p(l, [i]) {
        const _ = {};
        i & 2 && (_.$$scope = { dirty: i, ctx: l }), m.$set(_);
      },
      i(l) {
        o || (R(m.$$.fragment, l), (o = !0));
      },
      o(l) {
        P(m.$$.fragment, l), (o = !1);
      },
      d(l) {
        l && b(e), l && b(k), l && b(u), l && b(f), L(m, l);
      },
    }
  );
}
const Ne = {
    title: 'Framer',
    description: 'An embed tool for development in the graphics kit.',
    slug: 'framer',
  },
  { title: re, description: le, slug: Ge } = Ne;
function qe(t) {
  return [
    [
      'https://graphics.reuters.com/USA-CONGRESS/FUNDRAISING/zjvqkawjlvx/embeds/en/embed/?zzz',
    ],
  ];
}
class He extends x {
  constructor(e) {
    super(), ee(this, e, qe, Be, te, {});
  }
}
export { He as default, Ne as metadata };
