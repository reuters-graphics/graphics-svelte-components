import {
  C as ue,
  S as x,
  i as $,
  s as ee,
  a0 as me,
  J as te,
  ac as fe,
  ad as se,
  e as y,
  t as X,
  k as T,
  j as U,
  c as j,
  a as D,
  g as Y,
  d,
  n as z,
  m as O,
  b as w,
  $ as Z,
  f as B,
  H as k,
  o as H,
  V as M,
  h as ae,
  x as P,
  u as G,
  v as L,
  a6 as de,
  R as ne,
  aa as pe,
  Y as re,
  U as he,
  L as ve,
  A as _e,
  z as ge,
  ae as ke,
  M as be,
  I as we,
} from './vendor-ea6fad36.js';
import { D as Fe } from './index-3fe6324c.js';
import './@component-docs_components-c6052726.js';
import './paths-6758d194.js';
const C = ue(650);
function We(t) {
  let e,
    s,
    n,
    u = (t[7] || t[3]) + '',
    h,
    m,
    F,
    o,
    i,
    v,
    r,
    E,
    l,
    c,
    q,
    W,
    b,
    a,
    f,
    I,
    _,
    A,
    S;
  return (
    me(t[21]),
    (v = new te({ props: { icon: fe, fw: !0 } })),
    (f = new te({ props: { icon: se, fw: !0 } })),
    {
      c() {
        (e = y('div')),
          (s = y('div')),
          (n = y('div')),
          (h = X(u)),
          (m = X('px')),
          (o = T()),
          (i = y('button')),
          U(v.$$.fragment),
          (E = T()),
          (l = y('div')),
          (c = y('div')),
          (q = T()),
          (W = y('div')),
          (b = T()),
          (a = y('button')),
          U(f.$$.fragment),
          this.h();
      },
      l(g) {
        e = j(g, 'DIV', { id: !0, class: !0 });
        var N = D(e);
        s = j(N, 'DIV', { class: !0 });
        var R = D(s);
        n = j(R, 'DIV', { class: !0, style: !0 });
        var J = D(n);
        (h = Y(J, u)),
          (m = Y(J, 'px')),
          J.forEach(d),
          (o = z(R)),
          (i = j(R, 'BUTTON', { class: !0 }));
        var p = D(i);
        O(v.$$.fragment, p),
          p.forEach(d),
          (E = z(R)),
          (l = j(R, 'DIV', { class: !0 }));
        var V = D(l);
        (c = j(V, 'DIV', { class: !0 })),
          D(c).forEach(d),
          (q = z(V)),
          (W = j(V, 'DIV', { class: !0, tabindex: !0, style: !0 })),
          D(W).forEach(d),
          V.forEach(d),
          (b = z(R)),
          (a = j(R, 'BUTTON', { class: !0 }));
        var K = D(a);
        O(f.$$.fragment, K), K.forEach(d), R.forEach(d), N.forEach(d), this.h();
      },
      h() {
        w(n, 'class', 'label svelte-1o1jkdv'),
          w(n, 'style', (F = `opacity: ${t[5] || t[6] ? 1 : 0};`)),
          w(i, 'class', 'icon left svelte-1o1jkdv'),
          (i.disabled = r = t[3] === t[1]),
          w(c, 'class', 'track svelte-1o1jkdv'),
          w(W, 'class', 'handle svelte-1o1jkdv'),
          w(W, 'tabindex', '0'),
          Z(W, 'left', 'calc(' + t[8] * 100 + '% - 5px)'),
          w(l, 'class', 'slider-container svelte-1o1jkdv'),
          w(a, 'class', 'icon right svelte-1o1jkdv'),
          (a.disabled = I = t[3] === t[2]),
          w(s, 'class', 'slider svelte-1o1jkdv'),
          w(e, 'id', 'resizer'),
          w(e, 'class', 'svelte-1o1jkdv');
      },
      m(g, N) {
        B(g, e, N),
          k(e, s),
          k(s, n),
          k(n, h),
          k(n, m),
          k(s, o),
          k(s, i),
          H(v, i, null),
          k(s, E),
          k(s, l),
          k(l, c),
          k(l, q),
          k(l, W),
          t[22](l),
          k(s, b),
          k(s, a),
          H(f, a, null),
          (_ = !0),
          A ||
            ((S = [
              M(window, 'mousemove', t[9]),
              M(window, 'mouseup', t[12]),
              M(window, 'keydown', t[10]),
              M(window, 'resize', t[21]),
              M(i, 'click', t[16]),
              M(i, 'focus', t[13]),
              M(i, 'mouseover', t[13]),
              M(i, 'mouseleave', t[14]),
              M(W, 'mousedown', t[11]),
              M(W, 'focus', t[13]),
              M(W, 'blur', t[14]),
              M(a, 'click', t[15]),
              M(a, 'focus', t[13]),
              M(a, 'mouseover', t[13]),
              M(a, 'mouseleave', t[14]),
            ]),
            (A = !0));
      },
      p(g, [N]) {
        (!_ || N & 136) && u !== (u = (g[7] || g[3]) + '') && ae(h, u),
          (!_ || (N & 96 && F !== (F = `opacity: ${g[5] || g[6] ? 1 : 0};`))) &&
            w(n, 'style', F),
          (!_ || (N & 10 && r !== (r = g[3] === g[1]))) && (i.disabled = r),
          (!_ || N & 256) && Z(W, 'left', 'calc(' + g[8] * 100 + '% - 5px)'),
          (!_ || (N & 12 && I !== (I = g[3] === g[2]))) && (a.disabled = I);
      },
      i(g) {
        _ || (P(v.$$.fragment, g), P(f.$$.fragment, g), (_ = !0));
      },
      o(g) {
        G(v.$$.fragment, g), G(f.$$.fragment, g), (_ = !1);
      },
      d(g) {
        g && d(e), L(v), t[22](null), L(f), (A = !1), de(S);
      },
    }
  );
}
const Q = 90;
function Ee(t, e, s) {
  let n, u, h, m, F;
  ne(t, C, (p) => s(3, (F = p)));
  let { breakpoints: o = [330, 510, 660, 930, 1200] } = e,
    { maxFrameWidth: i = 1200 } = e,
    { minFrameWidth: v = 320 } = e,
    r,
    E = 1200,
    l = !1,
    c = !1;
  const q = (p) => Math.ceil(p / 5) * 5,
    W = () => Math.round(h * m + n);
  let b = null;
  const a = (p) => {
      if (!l || !r) return;
      const { left: V } = r.getBoundingClientRect();
      s(8, (m = Math.min(Math.max(0, p.pageX - V), Q) / Q)), s(7, (b = q(W())));
    },
    f = (p) => {
      if (!c) return;
      const { keyCode: V } = p,
        K = Q / h;
      V === 39
        ? s(8, (m = Math.min(1, m + K / Q)))
        : V === 37 && s(8, (m = Math.max(0, m - K / Q))),
        C.set(W());
    },
    I = (p) => {
      s(5, (l = !0)), a(p);
    },
    _ = () => {
      s(5, (l = !1)), s(7, (b = null)), C.set(q(W()));
    },
    A = () => {
      s(6, (c = !0));
    },
    S = () => {
      s(6, (c = !1));
    },
    g = () => {
      const p = o.filter((V) => V <= u).filter((V) => V > F);
      p.length === 0 ? C.set(u) : C.set(p[0]);
    },
    N = () => {
      const p = o.filter((V) => V < F);
      p.length === 0 ? C.set(n) : C.set(p.slice(-1)[0]);
    };
  function R() {
    s(0, (E = window.innerWidth));
  }
  function J(p) {
    pe[p ? 'unshift' : 'push'](() => {
      (r = p), s(4, r);
    });
  }
  return (
    (t.$$set = (p) => {
      'breakpoints' in p && s(17, (o = p.breakpoints)),
        'maxFrameWidth' in p && s(18, (i = p.maxFrameWidth)),
        'minFrameWidth' in p && s(19, (v = p.minFrameWidth));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 524288 && s(1, (n = v)),
        t.$$.dirty & 262145 && s(2, (u = Math.min(E - 70, i))),
        t.$$.dirty & 6 && s(20, (h = u - n)),
        t.$$.dirty & 12 && F > u && C.set(u),
        t.$$.dirty & 1048586 && s(8, (m = (F - n) / h));
    }),
    [E, n, u, F, r, l, c, b, m, a, f, I, _, A, S, g, N, o, i, v, h, R, J]
  );
}
class ye extends x {
  constructor(e) {
    super();
    $(this, e, Ee, We, ee, {
      breakpoints: 17,
      maxFrameWidth: 18,
      minFrameWidth: 19,
    });
  }
}
function le(t, e, s) {
  const n = t.slice();
  return (n[9] = e[s]), n;
}
function oe(t) {
  let e,
    s =
      t[9]
        .replace('/embeds/', '')
        .replace(/https:\/\/graphics\.reuters\.com/, '') + '',
    n,
    u,
    h,
    m;
  function F() {
    return t[6](t[9]);
  }
  return {
    c() {
      (e = y('button')), (n = X(s)), (u = T()), this.h();
    },
    l(o) {
      e = j(o, 'BUTTON', { class: !0 });
      var i = D(e);
      (n = Y(i, s)), (u = z(i)), i.forEach(d), this.h();
    },
    h() {
      w(e, 'class', 'svelte-1oq98q'), re(e, 'active', t[4] === t[9]);
    },
    m(o, i) {
      B(o, e, i), k(e, n), k(e, u), h || ((m = M(e, 'click', F)), (h = !0));
    },
    p(o, i) {
      (t = o),
        i & 1 &&
          s !==
            (s =
              t[9]
                .replace('/embeds/', '')
                .replace(/https:\/\/graphics\.reuters\.com/, '') + '') &&
          ae(n, s),
        i & 17 && re(e, 'active', t[4] === t[9]);
    },
    d(o) {
      o && d(e), (h = !1), m();
    },
  };
}
function je(t) {
  let e,
    s,
    n,
    u,
    h,
    m,
    F,
    o,
    i,
    v,
    r,
    E,
    l,
    c,
    q,
    W = t[0],
    b = [];
  for (let a = 0; a < W.length; a += 1) b[a] = oe(le(t, W, a));
  return (
    (E = new te({ props: { icon: se } })),
    (c = new ye({
      props: { breakpoints: t[1], minFrameWidth: t[2], maxFrameWidth: t[3] },
    })),
    {
      c() {
        (e = y('div')),
          (s = y('header')),
          (n = y('img')),
          (h = T()),
          (m = y('nav'));
        for (let a = 0; a < b.length; a += 1) b[a].c();
        (F = T()),
          (o = y('div')),
          (i = T()),
          (v = y('div')),
          (r = y('a')),
          U(E.$$.fragment),
          (l = T()),
          U(c.$$.fragment),
          this.h();
      },
      l(a) {
        e = j(a, 'DIV', { class: !0 });
        var f = D(e);
        s = j(f, 'HEADER', { class: !0 });
        var I = D(s);
        (n = j(I, 'IMG', { src: !0, alt: !0 })),
          I.forEach(d),
          (h = z(f)),
          (m = j(f, 'NAV', { class: !0 }));
        var _ = D(m);
        for (let g = 0; g < b.length; g += 1) b[g].l(_);
        _.forEach(d),
          (F = z(f)),
          (o = j(f, 'DIV', { id: !0, style: !0, class: !0 })),
          D(o).forEach(d),
          f.forEach(d),
          (i = z(a)),
          (v = j(a, 'DIV', { id: !0, class: !0 }));
        var A = D(v);
        r = j(A, 'A', { rel: !0, href: !0, class: !0 });
        var S = D(r);
        O(E.$$.fragment, S),
          S.forEach(d),
          A.forEach(d),
          (l = z(a)),
          O(c.$$.fragment, a),
          this.h();
      },
      h() {
        he(
          n.src,
          (u =
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-dark.svg')
        ) || w(n, 'src', u),
          w(n, 'alt', ''),
          w(s, 'class', 'svelte-1oq98q'),
          w(m, 'class', 'svelte-1oq98q'),
          w(o, 'id', 'frame-parent'),
          Z(o, 'width', t[5] + 'px'),
          w(o, 'class', 'svelte-1oq98q'),
          w(e, 'class', 'container'),
          w(r, 'rel', 'external'),
          w(r, 'href', '/'),
          w(r, 'class', 'svelte-1oq98q'),
          w(v, 'id', 'home-link'),
          w(v, 'class', 'svelte-1oq98q');
      },
      m(a, f) {
        B(a, e, f), k(e, s), k(s, n), k(e, h), k(e, m);
        for (let I = 0; I < b.length; I += 1) b[I].m(m, null);
        k(e, F),
          k(e, o),
          B(a, i, f),
          B(a, v, f),
          k(v, r),
          H(E, r, null),
          B(a, l, f),
          H(c, a, f),
          (q = !0);
      },
      p(a, [f]) {
        if (f & 17) {
          W = a[0];
          let _;
          for (_ = 0; _ < W.length; _ += 1) {
            const A = le(a, W, _);
            b[_] ? b[_].p(A, f) : ((b[_] = oe(A)), b[_].c(), b[_].m(m, null));
          }
          for (; _ < b.length; _ += 1) b[_].d(1);
          b.length = W.length;
        }
        (!q || f & 32) && Z(o, 'width', a[5] + 'px');
        const I = {};
        f & 2 && (I.breakpoints = a[1]),
          f & 4 && (I.minFrameWidth = a[2]),
          f & 8 && (I.maxFrameWidth = a[3]),
          c.$set(I);
      },
      i(a) {
        q || (P(E.$$.fragment, a), P(c.$$.fragment, a), (q = !0));
      },
      o(a) {
        G(E.$$.fragment, a), G(c.$$.fragment, a), (q = !1);
      },
      d(a) {
        a && d(e), ve(b, a), a && d(i), a && d(v), L(E), a && d(l), L(c, a);
      },
    }
  );
}
function De(t, e, s) {
  let n;
  ne(t, C, (r) => s(5, (n = r)));
  let { embeds: u } = e,
    { breakpoints: h = [330, 510, 660, 930, 1200] } = e,
    { minFrameWidth: m = 320 } = e,
    { maxFrameWidth: F = 1200 } = e,
    o = u[0];
  const i = (r) => {
    new ke.Parent(
      'frame-parent',
      /^http/.test(r) ? r : be(window.location.origin, r)
    );
  };
  _e(() => {
    i(o);
  }),
    ge(() => {
      i(o);
    });
  const v = (r) => {
    s(4, (o = r));
  };
  return (
    (t.$$set = (r) => {
      'embeds' in r && s(0, (u = r.embeds)),
        'breakpoints' in r && s(1, (h = r.breakpoints)),
        'minFrameWidth' in r && s(2, (m = r.minFrameWidth)),
        'maxFrameWidth' in r && s(3, (F = r.maxFrameWidth));
    }),
    [u, h, m, F, o, n, v]
  );
}
class qe extends x {
  constructor(e) {
    super();
    $(this, e, De, je, ee, {
      embeds: 0,
      breakpoints: 1,
      minFrameWidth: 2,
      maxFrameWidth: 3,
    });
  }
}
function Ie(t) {
  let e, s;
  return (
    (e = new qe({ props: { embeds: t[0] } })),
    {
      c() {
        U(e.$$.fragment);
      },
      l(n) {
        O(e.$$.fragment, n);
      },
      m(n, u) {
        H(e, n, u), (s = !0);
      },
      p: we,
      i(n) {
        s || (P(e.$$.fragment, n), (s = !0));
      },
      o(n) {
        G(e.$$.fragment, n), (s = !1);
      },
      d(n) {
        L(e, n);
      },
    }
  );
}
function Me(t) {
  let e,
    s,
    n,
    u,
    h,
    m,
    F,
    o,
    i = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Framer <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> embeds <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'/embeds/my-chart/index.html'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Framer</span> <span class="token attr-name">embeds=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>embeds<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,
    v,
    r,
    E;
  return (
    (r = new Fe({
      props: { fluid: !0, $$slots: { default: [Ie] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        (e = y('section')),
          (s = y('h2')),
          (n = X(ie)),
          (u = T()),
          (h = y('p')),
          (m = X(ce)),
          (F = T()),
          (o = y('pre')),
          (v = T()),
          U(r.$$.fragment),
          this.h();
      },
      l(l) {
        e = j(l, 'SECTION', {});
        var c = D(e);
        s = j(c, 'H2', {});
        var q = D(s);
        (n = Y(q, ie)), q.forEach(d), (u = z(c)), (h = j(c, 'P', {}));
        var W = D(h);
        (m = Y(W, ce)),
          W.forEach(d),
          c.forEach(d),
          (F = z(l)),
          (o = j(l, 'PRE', { class: !0 }));
        var b = D(o);
        b.forEach(d), (v = z(l)), O(r.$$.fragment, l), this.h();
      },
      h() {
        w(o, 'class', 'language-svelte');
      },
      m(l, c) {
        B(l, e, c),
          k(e, s),
          k(s, n),
          k(e, u),
          k(e, h),
          k(h, m),
          B(l, F, c),
          B(l, o, c),
          (o.innerHTML = i),
          B(l, v, c),
          H(r, l, c),
          (E = !0);
      },
      p(l, [c]) {
        const q = {};
        c & 2 && (q.$$scope = { dirty: c, ctx: l }), r.$set(q);
      },
      i(l) {
        E || (P(r.$$.fragment, l), (E = !0));
      },
      o(l) {
        G(r.$$.fragment, l), (E = !1);
      },
      d(l) {
        l && d(e), l && d(F), l && d(o), l && d(v), L(r, l);
      },
    }
  );
}
const Ve = {
    title: 'Framer',
    description: 'An embed tool for development in the graphics kit.',
    slug: 'framer',
  },
  { title: ie, description: ce, slug: Be } = Ve;
function Ne(t) {
  return [
    [
      'https://graphics.reuters.com/USA-CONGRESS/FUNDRAISING/zjvqkawjlvx/embeds/en/embed/',
    ],
  ];
}
class Ce extends x {
  constructor(e) {
    super();
    $(this, e, Ne, Me, ee, {});
  }
}
export { Ce as default, Ve as metadata };
