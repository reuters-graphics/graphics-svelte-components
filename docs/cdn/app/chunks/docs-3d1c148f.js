import {
  D as ue,
  S as x,
  i as ee,
  s as te,
  a1 as fe,
  L as Z,
  ad as me,
  ae as ie,
  e as j,
  t as Q,
  k as V,
  w as P,
  c as I,
  a as U,
  h as Y,
  d as b,
  m as q,
  x as L,
  b as h,
  f as $,
  g as S,
  J as F,
  y as G,
  X as B,
  j as oe,
  q as R,
  o as O,
  B as H,
  a7 as pe,
  U as ce,
  ab as de,
  _ as se,
  W as he,
  n as ve,
  p as ge,
  N as _e,
  v as ke,
  u as be,
  af as we,
  ag as Fe,
  O as Ee,
  K as We,
} from './vendor-5176a1fc.js';
import { D as ye } from './index-9949a7c2.js';
import './@component-docs_components-82ace5d5.js';
import './paths-396f020f.js';
const C = ue(660);
function De(t) {
  let e,
    s,
    a,
    v = (t[7] || t[3]) + '',
    r,
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
    d,
    M,
    n,
    p,
    D,
    y,
    A;
  return (
    fe(t[21]),
    (f = new Z({ props: { icon: me, fw: !0 } })),
    (n = new Z({ props: { icon: ie, fw: !0 } })),
    {
      c() {
        (e = j('div')),
          (s = j('div')),
          (a = j('div')),
          (r = Q(v)),
          (c = Q('px')),
          (u = V()),
          (g = j('button')),
          P(f.$$.fragment),
          (o = V()),
          (l = j('div')),
          (i = j('div')),
          (_ = V()),
          (w = j('div')),
          (d = V()),
          (M = j('button')),
          P(n.$$.fragment),
          this.h();
      },
      l(W) {
        e = I(W, 'DIV', { id: !0, class: !0 });
        var N = U(e);
        s = I(N, 'DIV', { class: !0 });
        var z = U(s);
        a = I(z, 'DIV', { class: !0, style: !0 });
        var J = U(a);
        (r = Y(J, v)),
          (c = Y(J, 'px')),
          J.forEach(b),
          (u = q(z)),
          (g = I(z, 'BUTTON', { class: !0 }));
        var E = U(g);
        L(f.$$.fragment, E),
          E.forEach(b),
          (o = q(z)),
          (l = I(z, 'DIV', { class: !0 }));
        var T = U(l);
        (i = I(T, 'DIV', { class: !0 })),
          U(i).forEach(b),
          (_ = q(T)),
          (w = I(T, 'DIV', { class: !0, tabindex: !0, style: !0 })),
          U(w).forEach(b),
          T.forEach(b),
          (d = q(z)),
          (M = I(z, 'BUTTON', { class: !0 }));
        var K = U(M);
        L(n.$$.fragment, K), K.forEach(b), z.forEach(b), N.forEach(b), this.h();
      },
      h() {
        h(a, 'class', 'label svelte-1o1jkdv'),
          h(a, 'style', (k = `opacity: ${t[5] || t[6] ? 1 : 0};`)),
          h(g, 'class', 'icon left svelte-1o1jkdv'),
          (g.disabled = m = t[3] === t[1]),
          h(i, 'class', 'track svelte-1o1jkdv'),
          h(w, 'class', 'handle svelte-1o1jkdv'),
          h(w, 'tabindex', '0'),
          $(w, 'left', 'calc(' + t[8] * 100 + '% - 5px)'),
          h(l, 'class', 'slider-container svelte-1o1jkdv'),
          h(M, 'class', 'icon right svelte-1o1jkdv'),
          (M.disabled = p = t[3] === t[2]),
          h(s, 'class', 'slider svelte-1o1jkdv'),
          h(e, 'id', 'resizer'),
          h(e, 'class', 'svelte-1o1jkdv');
      },
      m(W, N) {
        S(W, e, N),
          F(e, s),
          F(s, a),
          F(a, r),
          F(a, c),
          F(s, u),
          F(s, g),
          G(f, g, null),
          F(s, o),
          F(s, l),
          F(l, i),
          F(l, _),
          F(l, w),
          t[22](l),
          F(s, d),
          F(s, M),
          G(n, M, null),
          (D = !0),
          y ||
            ((A = [
              B(window, 'mousemove', t[9]),
              B(window, 'mouseup', t[12]),
              B(window, 'keydown', t[10]),
              B(window, 'resize', t[21]),
              B(g, 'click', t[16]),
              B(g, 'focus', t[13]),
              B(g, 'mouseover', t[13]),
              B(g, 'mouseleave', t[14]),
              B(w, 'mousedown', t[11]),
              B(w, 'focus', t[13]),
              B(w, 'blur', t[14]),
              B(M, 'click', t[15]),
              B(M, 'focus', t[13]),
              B(M, 'mouseover', t[13]),
              B(M, 'mouseleave', t[14]),
            ]),
            (y = !0));
      },
      p(W, [N]) {
        (!D || N & 136) && v !== (v = (W[7] || W[3]) + '') && oe(r, v),
          (!D || (N & 96 && k !== (k = `opacity: ${W[5] || W[6] ? 1 : 0};`))) &&
            h(a, 'style', k),
          (!D || (N & 10 && m !== (m = W[3] === W[1]))) && (g.disabled = m),
          (!D || N & 256) && $(w, 'left', 'calc(' + W[8] * 100 + '% - 5px)'),
          (!D || (N & 12 && p !== (p = W[3] === W[2]))) && (M.disabled = p);
      },
      i(W) {
        D || (R(f.$$.fragment, W), R(n.$$.fragment, W), (D = !0));
      },
      o(W) {
        O(f.$$.fragment, W), O(n.$$.fragment, W), (D = !1);
      },
      d(W) {
        W && b(e), H(f), t[22](null), H(n), (y = !1), pe(A);
      },
    }
  );
}
const X = 90;
function je(t, e, s) {
  let a, v, r, c, k;
  ce(t, C, (E) => s(3, (k = E)));
  let { breakpoints: u = [330, 510, 660, 930, 1200] } = e,
    { maxFrameWidth: g = 1200 } = e,
    { minFrameWidth: f = 320 } = e,
    m,
    o = 1200,
    l = !1,
    i = !1;
  const _ = (E) => Math.ceil(E / 5) * 5,
    w = () => Math.round(r * c + a);
  let d = null;
  const M = (E) => {
      if (!l || !m) return;
      const { left: T } = m.getBoundingClientRect();
      s(8, (c = Math.min(Math.max(0, E.pageX - T), X) / X)), s(7, (d = _(w())));
    },
    n = (E) => {
      if (!i) return;
      const { keyCode: T } = E,
        K = X / r;
      T === 39
        ? s(8, (c = Math.min(1, c + K / X)))
        : T === 37 && s(8, (c = Math.max(0, c - K / X))),
        C.set(w());
    },
    p = (E) => {
      s(5, (l = !0)), M(E);
    },
    D = () => {
      s(5, (l = !1)), s(7, (d = null)), C.set(_(w()));
    },
    y = () => {
      s(6, (i = !0));
    },
    A = () => {
      s(6, (i = !1));
    },
    W = () => {
      const E = u.filter((T) => T <= v).filter((T) => T > k);
      E.length === 0 ? C.set(v) : C.set(E[0]);
    },
    N = () => {
      const E = u.filter((T) => T < k);
      E.length === 0 ? C.set(a) : C.set(E.slice(-1)[0]);
    };
  function z() {
    s(0, (o = window.innerWidth));
  }
  function J(E) {
    de[E ? 'unshift' : 'push'](() => {
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
      t.$$.dirty & 524288 && s(1, (a = f)),
        t.$$.dirty & 262145 && s(2, (v = Math.min(o - 70, g))),
        t.$$.dirty & 6 && s(20, (r = v - a)),
        t.$$.dirty & 12 && k > v && C.set(v),
        t.$$.dirty & 1048586 && s(8, (c = (k - a) / r));
    }),
    [o, a, v, k, m, l, i, d, c, M, n, p, D, y, A, W, N, u, g, f, r, z, J]
  );
}
class Ie extends x {
  constructor(e) {
    super();
    ee(this, e, je, De, te, {
      breakpoints: 17,
      maxFrameWidth: 18,
      minFrameWidth: 19,
    });
  }
}
var Ue = (t) => {
  const e = t
    .map((r) => r.replace(/index\.html$/, ''))
    .map((r) => r.replace(/^http[s]*:\/\/[\w.]+\.com/, ''));
  if (e.length === 1)
    return [
      e[0]
        .split('/')
        .filter((r) => r)
        .slice(-1)[0],
    ];
  const s = e[0];
  let a = 0;
  for (const r in s.split('/')) {
    const c = s.split('/')[r];
    if (e.every((u) => u.split('/')[r] === c)) a += 1;
    else break;
  }
  if (a === s.split('/').length) return e;
  let v = 0;
  for (const r in s.split('/').reverse()) {
    const c = s.split('/').reverse()[r];
    if (e.every((u) => u.split('/').reverse()[r] === c)) v += 1;
    else break;
  }
  return e.map((r) =>
    r
      .split('/')
      .slice(a, v * -1)
      .join('/')
  );
};
function ae(t, e, s) {
  const a = t.slice();
  return (a[10] = e[s]), (a[12] = s), a;
}
function ne(t) {
  let e,
    s = t[5][t[12]] + '',
    a,
    v,
    r,
    c,
    k,
    u,
    g,
    f,
    m,
    o;
  c = new Z({ props: { icon: we } });
  function l() {
    return t[7](t[10]);
  }
  return {
    c() {
      (e = j('button')),
        (a = Q(s)),
        (v = V()),
        (r = j('a')),
        P(c.$$.fragment),
        (g = V()),
        this.h();
    },
    l(i) {
      e = I(i, 'BUTTON', { class: !0 });
      var _ = U(e);
      (a = Y(_, s)),
        (v = q(_)),
        (r = I(_, 'A', {
          rel: !0,
          target: !0,
          href: !0,
          title: !0,
          class: !0,
        }));
      var w = U(r);
      L(c.$$.fragment, w), w.forEach(b), (g = q(_)), _.forEach(b), this.h();
    },
    h() {
      h(r, 'rel', 'external'),
        h(r, 'target', '_blank'),
        h(r, 'href', (k = t[10])),
        h(r, 'title', (u = t[10])),
        h(r, 'class', 'svelte-97ib6o'),
        h(e, 'class', 'svelte-97ib6o'),
        se(e, 'active', t[4] === t[10]);
    },
    m(i, _) {
      S(i, e, _),
        F(e, a),
        F(e, v),
        F(e, r),
        G(c, r, null),
        F(e, g),
        (f = !0),
        m || ((o = B(e, 'click', l)), (m = !0));
    },
    p(i, _) {
      (t = i),
        (!f || _ & 32) && s !== (s = t[5][t[12]] + '') && oe(a, s),
        (!f || (_ & 1 && k !== (k = t[10]))) && h(r, 'href', k),
        (!f || (_ & 1 && u !== (u = t[10]))) && h(r, 'title', u),
        _ & 17 && se(e, 'active', t[4] === t[10]);
    },
    i(i) {
      f || (R(c.$$.fragment, i), (f = !0));
    },
    o(i) {
      O(c.$$.fragment, i), (f = !1);
    },
    d(i) {
      i && b(e), H(c), (m = !1), o();
    },
  };
}
function Me(t) {
  let e,
    s,
    a,
    v,
    r,
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
    d = [];
  for (let n = 0; n < w.length; n += 1) d[n] = ne(ae(t, w, n));
  const M = (n) =>
    O(d[n], 1, 1, () => {
      d[n] = null;
    });
  return (
    (o = new Z({ props: { icon: ie } })),
    (i = new Ie({
      props: { breakpoints: t[1], minFrameWidth: t[2], maxFrameWidth: t[3] },
    })),
    {
      c() {
        (e = j('div')),
          (s = j('header')),
          (a = j('img')),
          (r = V()),
          (c = j('nav'));
        for (let n = 0; n < d.length; n += 1) d[n].c();
        (k = V()),
          (u = j('div')),
          (g = V()),
          (f = j('div')),
          (m = j('a')),
          P(o.$$.fragment),
          (l = V()),
          P(i.$$.fragment),
          this.h();
      },
      l(n) {
        e = I(n, 'DIV', { class: !0 });
        var p = U(e);
        s = I(p, 'HEADER', { class: !0 });
        var D = U(s);
        (a = I(D, 'IMG', { src: !0, alt: !0 })),
          D.forEach(b),
          (r = q(p)),
          (c = I(p, 'NAV', { class: !0 }));
        var y = U(c);
        for (let N = 0; N < d.length; N += 1) d[N].l(y);
        y.forEach(b),
          (k = q(p)),
          (u = I(p, 'DIV', { id: !0, style: !0, class: !0 })),
          U(u).forEach(b),
          p.forEach(b),
          (g = q(n)),
          (f = I(n, 'DIV', { id: !0, class: !0 }));
        var A = U(f);
        m = I(A, 'A', { rel: !0, href: !0, class: !0 });
        var W = U(m);
        L(o.$$.fragment, W),
          W.forEach(b),
          A.forEach(b),
          (l = q(n)),
          L(i.$$.fragment, n),
          this.h();
      },
      h() {
        he(
          a.src,
          (v =
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-dark.svg')
        ) || h(a, 'src', v),
          h(a, 'alt', ''),
          h(s, 'class', 'svelte-97ib6o'),
          h(c, 'class', 'svelte-97ib6o'),
          h(u, 'id', 'frame-parent'),
          $(u, 'width', t[6] + 'px'),
          h(u, 'class', 'svelte-97ib6o'),
          h(e, 'class', 'container'),
          h(m, 'rel', 'external'),
          h(m, 'href', './../'),
          h(m, 'class', 'svelte-97ib6o'),
          h(f, 'id', 'home-link'),
          h(f, 'class', 'svelte-97ib6o');
      },
      m(n, p) {
        S(n, e, p), F(e, s), F(s, a), F(e, r), F(e, c);
        for (let D = 0; D < d.length; D += 1) d[D].m(c, null);
        F(e, k),
          F(e, u),
          S(n, g, p),
          S(n, f, p),
          F(f, m),
          G(o, m, null),
          S(n, l, p),
          G(i, n, p),
          (_ = !0);
      },
      p(n, [p]) {
        if (p & 49) {
          w = n[0];
          let y;
          for (y = 0; y < w.length; y += 1) {
            const A = ae(n, w, y);
            d[y]
              ? (d[y].p(A, p), R(d[y], 1))
              : ((d[y] = ne(A)), d[y].c(), R(d[y], 1), d[y].m(c, null));
          }
          for (ve(), y = w.length; y < d.length; y += 1) M(y);
          ge();
        }
        (!_ || p & 64) && $(u, 'width', n[6] + 'px');
        const D = {};
        p & 2 && (D.breakpoints = n[1]),
          p & 4 && (D.minFrameWidth = n[2]),
          p & 8 && (D.maxFrameWidth = n[3]),
          i.$set(D);
      },
      i(n) {
        if (!_) {
          for (let p = 0; p < w.length; p += 1) R(d[p]);
          R(o.$$.fragment, n), R(i.$$.fragment, n), (_ = !0);
        }
      },
      o(n) {
        d = d.filter(Boolean);
        for (let p = 0; p < d.length; p += 1) O(d[p]);
        O(o.$$.fragment, n), O(i.$$.fragment, n), (_ = !1);
      },
      d(n) {
        n && b(e), _e(d, n), n && b(g), n && b(f), H(o), n && b(l), H(i, n);
      },
    }
  );
}
function Ne(t, e, s) {
  let a, v;
  ce(t, C, (o) => s(6, (v = o)));
  let { embeds: r } = e,
    { breakpoints: c = [330, 510, 660, 930, 1200] } = e,
    { minFrameWidth: k = 320 } = e,
    { maxFrameWidth: u = 1200 } = e,
    g = r[0];
  const f = (o) => {
    new Fe.Parent(
      'frame-parent',
      /^http/.test(o) ? o : Ee(window.location.origin, o)
    );
  };
  ke(() => {
    f(g);
  }),
    be(() => {
      f(g);
    });
  const m = (o) => {
    s(4, (g = o));
  };
  return (
    (t.$$set = (o) => {
      'embeds' in o && s(0, (r = o.embeds)),
        'breakpoints' in o && s(1, (c = o.breakpoints)),
        'minFrameWidth' in o && s(2, (k = o.minFrameWidth)),
        'maxFrameWidth' in o && s(3, (u = o.maxFrameWidth));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 1 && s(5, (a = Ue(r)));
    }),
    [r, c, k, u, g, a, v, m]
  );
}
class Be extends x {
  constructor(e) {
    super();
    ee(this, e, Ne, Me, te, {
      embeds: 0,
      breakpoints: 1,
      minFrameWidth: 2,
      maxFrameWidth: 3,
    });
  }
}
function Te(t) {
  let e, s;
  return (
    (e = new Be({ props: { embeds: t[0] } })),
    {
      c() {
        P(e.$$.fragment);
      },
      l(a) {
        L(e.$$.fragment, a);
      },
      m(a, v) {
        G(e, a, v), (s = !0);
      },
      p: We,
      i(a) {
        s || (R(e.$$.fragment, a), (s = !0));
      },
      o(a) {
        O(e.$$.fragment, a), (s = !1);
      },
      d(a) {
        H(e, a);
      },
    }
  );
}
function Ve(t) {
  let e,
    s,
    a,
    v,
    r,
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
    (m = new ye({
      props: { fluid: !0, $$slots: { default: [Te] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        (e = j('section')),
          (s = j('h2')),
          (a = Q(re)),
          (v = V()),
          (r = j('p')),
          (c = Q(le)),
          (k = V()),
          (u = j('pre')),
          (f = V()),
          P(m.$$.fragment),
          this.h();
      },
      l(l) {
        e = I(l, 'SECTION', {});
        var i = U(e);
        s = I(i, 'H2', {});
        var _ = U(s);
        (a = Y(_, re)), _.forEach(b), (v = q(i)), (r = I(i, 'P', {}));
        var w = U(r);
        (c = Y(w, le)),
          w.forEach(b),
          i.forEach(b),
          (k = q(l)),
          (u = I(l, 'PRE', { class: !0 }));
        var d = U(u);
        d.forEach(b), (f = q(l)), L(m.$$.fragment, l), this.h();
      },
      h() {
        h(u, 'class', 'language-svelte');
      },
      m(l, i) {
        S(l, e, i),
          F(e, s),
          F(s, a),
          F(e, v),
          F(e, r),
          F(r, c),
          S(l, k, i),
          S(l, u, i),
          (u.innerHTML = g),
          S(l, f, i),
          G(m, l, i),
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
        O(m.$$.fragment, l), (o = !1);
      },
      d(l) {
        l && b(e), l && b(k), l && b(u), l && b(f), H(m, l);
      },
    }
  );
}
const qe = {
    title: 'Framer',
    description: 'An embed tool for development in the graphics kit.',
    slug: 'framer',
  },
  { title: re, description: le, slug: Oe } = qe;
function Ae(t) {
  return [
    [
      'https://graphics.reuters.com/USA-CONGRESS/FUNDRAISING/zjvqkawjlvx/embeds/en/embed/',
    ],
  ];
}
class Pe extends x {
  constructor(e) {
    super();
    ee(this, e, Ae, Ve, te, {});
  }
}
export { Pe as default, qe as metadata };
