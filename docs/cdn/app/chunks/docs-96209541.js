import {
  C as ue,
  S as x,
  i as ee,
  s as te,
  a0 as me,
  J as Z,
  ac as fe,
  ad as se,
  e as D,
  t as X,
  k as A,
  j as P,
  c as I,
  a as M,
  g as Y,
  d as b,
  n as z,
  m as H,
  b as v,
  $,
  f as C,
  H as F,
  o as L,
  V as T,
  h as ae,
  x as S,
  u as q,
  v as G,
  a6 as pe,
  R as ne,
  aa as de,
  Y as le,
  U as he,
  r as ve,
  w as _e,
  L as ge,
  A as ke,
  z as be,
  ae as we,
  af as Fe,
  M as Ee,
  I as We,
} from './vendor-85b063f6.js';
import { D as je } from './index-ccd418f9.js';
import './@component-docs_components-0f238320.js';
import './paths-6758d194.js';
const O = ue(660);
function ye(e) {
  let t,
    s,
    a,
    o = (e[7] || e[3]) + '',
    i,
    u,
    k,
    d,
    _,
    m,
    f,
    c,
    l,
    r,
    g,
    w,
    h,
    V,
    n,
    p,
    y,
    j,
    B;
  return (
    me(e[21]),
    (m = new Z({ props: { icon: fe, fw: !0 } })),
    (n = new Z({ props: { icon: se, fw: !0 } })),
    {
      c() {
        (t = D('div')),
          (s = D('div')),
          (a = D('div')),
          (i = X(o)),
          (u = X('px')),
          (d = A()),
          (_ = D('button')),
          P(m.$$.fragment),
          (c = A()),
          (l = D('div')),
          (r = D('div')),
          (g = A()),
          (w = D('div')),
          (h = A()),
          (V = D('button')),
          P(n.$$.fragment),
          this.h();
      },
      l(W) {
        t = I(W, 'DIV', { id: !0, class: !0 });
        var N = M(t);
        s = I(N, 'DIV', { class: !0 });
        var R = M(s);
        a = I(R, 'DIV', { class: !0, style: !0 });
        var J = M(a);
        (i = Y(J, o)),
          (u = Y(J, 'px')),
          J.forEach(b),
          (d = z(R)),
          (_ = I(R, 'BUTTON', { class: !0 }));
        var E = M(_);
        H(m.$$.fragment, E),
          E.forEach(b),
          (c = z(R)),
          (l = I(R, 'DIV', { class: !0 }));
        var U = M(l);
        (r = I(U, 'DIV', { class: !0 })),
          M(r).forEach(b),
          (g = z(U)),
          (w = I(U, 'DIV', { class: !0, tabindex: !0, style: !0 })),
          M(w).forEach(b),
          U.forEach(b),
          (h = z(R)),
          (V = I(R, 'BUTTON', { class: !0 }));
        var K = M(V);
        H(n.$$.fragment, K), K.forEach(b), R.forEach(b), N.forEach(b), this.h();
      },
      h() {
        v(a, 'class', 'label svelte-1o1jkdv'),
          v(a, 'style', (k = `opacity: ${e[5] || e[6] ? 1 : 0};`)),
          v(_, 'class', 'icon left svelte-1o1jkdv'),
          (_.disabled = f = e[3] === e[1]),
          v(r, 'class', 'track svelte-1o1jkdv'),
          v(w, 'class', 'handle svelte-1o1jkdv'),
          v(w, 'tabindex', '0'),
          $(w, 'left', 'calc(' + e[8] * 100 + '% - 5px)'),
          v(l, 'class', 'slider-container svelte-1o1jkdv'),
          v(V, 'class', 'icon right svelte-1o1jkdv'),
          (V.disabled = p = e[3] === e[2]),
          v(s, 'class', 'slider svelte-1o1jkdv'),
          v(t, 'id', 'resizer'),
          v(t, 'class', 'svelte-1o1jkdv');
      },
      m(W, N) {
        C(W, t, N),
          F(t, s),
          F(s, a),
          F(a, i),
          F(a, u),
          F(s, d),
          F(s, _),
          L(m, _, null),
          F(s, c),
          F(s, l),
          F(l, r),
          F(l, g),
          F(l, w),
          e[22](l),
          F(s, h),
          F(s, V),
          L(n, V, null),
          (y = !0),
          j ||
            ((B = [
              T(window, 'mousemove', e[9]),
              T(window, 'mouseup', e[12]),
              T(window, 'keydown', e[10]),
              T(window, 'resize', e[21]),
              T(_, 'click', e[16]),
              T(_, 'focus', e[13]),
              T(_, 'mouseover', e[13]),
              T(_, 'mouseleave', e[14]),
              T(w, 'mousedown', e[11]),
              T(w, 'focus', e[13]),
              T(w, 'blur', e[14]),
              T(V, 'click', e[15]),
              T(V, 'focus', e[13]),
              T(V, 'mouseover', e[13]),
              T(V, 'mouseleave', e[14]),
            ]),
            (j = !0));
      },
      p(W, [N]) {
        (!y || N & 136) && o !== (o = (W[7] || W[3]) + '') && ae(i, o),
          (!y || (N & 96 && k !== (k = `opacity: ${W[5] || W[6] ? 1 : 0};`))) &&
            v(a, 'style', k),
          (!y || (N & 10 && f !== (f = W[3] === W[1]))) && (_.disabled = f),
          (!y || N & 256) && $(w, 'left', 'calc(' + W[8] * 100 + '% - 5px)'),
          (!y || (N & 12 && p !== (p = W[3] === W[2]))) && (V.disabled = p);
      },
      i(W) {
        y || (S(m.$$.fragment, W), S(n.$$.fragment, W), (y = !0));
      },
      o(W) {
        q(m.$$.fragment, W), q(n.$$.fragment, W), (y = !1);
      },
      d(W) {
        W && b(t), G(m), e[22](null), G(n), (j = !1), pe(B);
      },
    }
  );
}
const Q = 90;
function De(e, t, s) {
  let a, o, i, u, k;
  ne(e, O, (E) => s(3, (k = E)));
  let { breakpoints: d = [330, 510, 660, 930, 1200] } = t,
    { maxFrameWidth: _ = 1200 } = t,
    { minFrameWidth: m = 320 } = t,
    f,
    c = 1200,
    l = !1,
    r = !1;
  const g = (E) => Math.ceil(E / 5) * 5,
    w = () => Math.round(i * u + a);
  let h = null;
  const V = (E) => {
      if (!l || !f) return;
      const { left: U } = f.getBoundingClientRect();
      s(8, (u = Math.min(Math.max(0, E.pageX - U), Q) / Q)), s(7, (h = g(w())));
    },
    n = (E) => {
      if (!r) return;
      const { keyCode: U } = E,
        K = Q / i;
      U === 39
        ? s(8, (u = Math.min(1, u + K / Q)))
        : U === 37 && s(8, (u = Math.max(0, u - K / Q))),
        O.set(w());
    },
    p = (E) => {
      s(5, (l = !0)), V(E);
    },
    y = () => {
      s(5, (l = !1)), s(7, (h = null)), O.set(g(w()));
    },
    j = () => {
      s(6, (r = !0));
    },
    B = () => {
      s(6, (r = !1));
    },
    W = () => {
      const E = d.filter((U) => U <= o).filter((U) => U > k);
      E.length === 0 ? O.set(o) : O.set(E[0]);
    },
    N = () => {
      const E = d.filter((U) => U < k);
      E.length === 0 ? O.set(a) : O.set(E.slice(-1)[0]);
    };
  function R() {
    s(0, (c = window.innerWidth));
  }
  function J(E) {
    de[E ? 'unshift' : 'push'](() => {
      (f = E), s(4, f);
    });
  }
  return (
    (e.$$set = (E) => {
      'breakpoints' in E && s(17, (d = E.breakpoints)),
        'maxFrameWidth' in E && s(18, (_ = E.maxFrameWidth)),
        'minFrameWidth' in E && s(19, (m = E.minFrameWidth));
    }),
    (e.$$.update = () => {
      e.$$.dirty & 524288 && s(1, (a = m)),
        e.$$.dirty & 262145 && s(2, (o = Math.min(c - 70, _))),
        e.$$.dirty & 6 && s(20, (i = o - a)),
        e.$$.dirty & 12 && k > o && O.set(o),
        e.$$.dirty & 1048586 && s(8, (u = (k - a) / i));
    }),
    [c, a, o, k, f, l, r, h, u, V, n, p, y, j, B, W, N, d, _, m, i, R, J]
  );
}
class Ie extends x {
  constructor(t) {
    super();
    ee(this, t, De, ye, te, {
      breakpoints: 17,
      maxFrameWidth: 18,
      minFrameWidth: 19,
    });
  }
}
var Me = (e) => {
  const t = e
    .map((o) => o.replace(/index\.html$/, ''))
    .map((o) => o.replace(/^http[s]*:\/\/[\w.]+\.com/, ''));
  if (t.length === 1)
    return [
      t[0]
        .split('/')
        .filter((o) => o)
        .slice(-1)[0],
    ];
  const s = t[0];
  let a = 0;
  for (const o in s.split('/')) {
    const i = s.split('/')[o];
    if (t.every((k) => k.split('/')[o] === i)) a += 1;
    else break;
  }
  return a === s.split('/').length
    ? t
    : t.map((o) => o.split('/').slice(a).join('/'));
};
function re(e, t, s) {
  const a = e.slice();
  return (a[10] = t[s]), (a[12] = s), a;
}
function oe(e) {
  let t,
    s = e[5][e[12]] + '',
    a,
    o,
    i,
    u,
    k,
    d,
    _,
    m,
    f,
    c;
  u = new Z({ props: { icon: we } });
  function l() {
    return e[7](e[10]);
  }
  return {
    c() {
      (t = D('button')),
        (a = X(s)),
        (o = A()),
        (i = D('a')),
        P(u.$$.fragment),
        (_ = A()),
        this.h();
    },
    l(r) {
      t = I(r, 'BUTTON', { class: !0 });
      var g = M(t);
      (a = Y(g, s)),
        (o = z(g)),
        (i = I(g, 'A', {
          rel: !0,
          target: !0,
          href: !0,
          title: !0,
          class: !0,
        }));
      var w = M(i);
      H(u.$$.fragment, w), w.forEach(b), (_ = z(g)), g.forEach(b), this.h();
    },
    h() {
      v(i, 'rel', 'external'),
        v(i, 'target', '_blank'),
        v(i, 'href', (k = e[10])),
        v(i, 'title', (d = e[10])),
        v(i, 'class', 'svelte-l2mcmd'),
        v(t, 'class', 'svelte-l2mcmd'),
        le(t, 'active', e[4] === e[10]);
    },
    m(r, g) {
      C(r, t, g),
        F(t, a),
        F(t, o),
        F(t, i),
        L(u, i, null),
        F(t, _),
        (m = !0),
        f || ((c = T(t, 'click', l)), (f = !0));
    },
    p(r, g) {
      (e = r),
        (!m || g & 32) && s !== (s = e[5][e[12]] + '') && ae(a, s),
        (!m || (g & 1 && k !== (k = e[10]))) && v(i, 'href', k),
        (!m || (g & 1 && d !== (d = e[10]))) && v(i, 'title', d),
        g & 17 && le(t, 'active', e[4] === e[10]);
    },
    i(r) {
      m || (S(u.$$.fragment, r), (m = !0));
    },
    o(r) {
      q(u.$$.fragment, r), (m = !1);
    },
    d(r) {
      r && b(t), G(u), (f = !1), c();
    },
  };
}
function Ve(e) {
  let t,
    s,
    a,
    o,
    i,
    u,
    k,
    d,
    _,
    m,
    f,
    c,
    l,
    r,
    g,
    w = e[0],
    h = [];
  for (let n = 0; n < w.length; n += 1) h[n] = oe(re(e, w, n));
  const V = (n) =>
    q(h[n], 1, 1, () => {
      h[n] = null;
    });
  return (
    (c = new Z({ props: { icon: se } })),
    (r = new Ie({
      props: { breakpoints: e[1], minFrameWidth: e[2], maxFrameWidth: e[3] },
    })),
    {
      c() {
        (t = D('div')),
          (s = D('header')),
          (a = D('img')),
          (i = A()),
          (u = D('nav'));
        for (let n = 0; n < h.length; n += 1) h[n].c();
        (k = A()),
          (d = D('div')),
          (_ = A()),
          (m = D('div')),
          (f = D('a')),
          P(c.$$.fragment),
          (l = A()),
          P(r.$$.fragment),
          this.h();
      },
      l(n) {
        t = I(n, 'DIV', { class: !0 });
        var p = M(t);
        s = I(p, 'HEADER', { class: !0 });
        var y = M(s);
        (a = I(y, 'IMG', { src: !0, alt: !0 })),
          y.forEach(b),
          (i = z(p)),
          (u = I(p, 'NAV', { class: !0 }));
        var j = M(u);
        for (let N = 0; N < h.length; N += 1) h[N].l(j);
        j.forEach(b),
          (k = z(p)),
          (d = I(p, 'DIV', { id: !0, style: !0, class: !0 })),
          M(d).forEach(b),
          p.forEach(b),
          (_ = z(n)),
          (m = I(n, 'DIV', { id: !0, class: !0 }));
        var B = M(m);
        f = I(B, 'A', { rel: !0, href: !0, class: !0 });
        var W = M(f);
        H(c.$$.fragment, W),
          W.forEach(b),
          B.forEach(b),
          (l = z(n)),
          H(r.$$.fragment, n),
          this.h();
      },
      h() {
        he(
          a.src,
          (o =
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-dark.svg')
        ) || v(a, 'src', o),
          v(a, 'alt', ''),
          v(s, 'class', 'svelte-l2mcmd'),
          v(u, 'class', 'svelte-l2mcmd'),
          v(d, 'id', 'frame-parent'),
          $(d, 'width', e[6] + 'px'),
          v(d, 'class', 'svelte-l2mcmd'),
          v(t, 'class', 'container'),
          v(f, 'rel', 'external'),
          v(f, 'href', '/'),
          v(f, 'class', 'svelte-l2mcmd'),
          v(m, 'id', 'home-link'),
          v(m, 'class', 'svelte-l2mcmd');
      },
      m(n, p) {
        C(n, t, p), F(t, s), F(s, a), F(t, i), F(t, u);
        for (let y = 0; y < h.length; y += 1) h[y].m(u, null);
        F(t, k),
          F(t, d),
          C(n, _, p),
          C(n, m, p),
          F(m, f),
          L(c, f, null),
          C(n, l, p),
          L(r, n, p),
          (g = !0);
      },
      p(n, [p]) {
        if (p & 49) {
          w = n[0];
          let j;
          for (j = 0; j < w.length; j += 1) {
            const B = re(n, w, j);
            h[j]
              ? (h[j].p(B, p), S(h[j], 1))
              : ((h[j] = oe(B)), h[j].c(), S(h[j], 1), h[j].m(u, null));
          }
          for (ve(), j = w.length; j < h.length; j += 1) V(j);
          _e();
        }
        (!g || p & 64) && $(d, 'width', n[6] + 'px');
        const y = {};
        p & 2 && (y.breakpoints = n[1]),
          p & 4 && (y.minFrameWidth = n[2]),
          p & 8 && (y.maxFrameWidth = n[3]),
          r.$set(y);
      },
      i(n) {
        if (!g) {
          for (let p = 0; p < w.length; p += 1) S(h[p]);
          S(c.$$.fragment, n), S(r.$$.fragment, n), (g = !0);
        }
      },
      o(n) {
        h = h.filter(Boolean);
        for (let p = 0; p < h.length; p += 1) q(h[p]);
        q(c.$$.fragment, n), q(r.$$.fragment, n), (g = !1);
      },
      d(n) {
        n && b(t), ge(h, n), n && b(_), n && b(m), G(c), n && b(l), G(r, n);
      },
    }
  );
}
function Ne(e, t, s) {
  let a, o;
  ne(e, O, (c) => s(6, (o = c)));
  let { embeds: i } = t,
    { breakpoints: u = [330, 510, 660, 930, 1200] } = t,
    { minFrameWidth: k = 320 } = t,
    { maxFrameWidth: d = 1200 } = t,
    _ = i[0];
  const m = (c) => {
    new Fe.Parent(
      'frame-parent',
      /^http/.test(c) ? c : Ee(window.location.origin, c)
    );
  };
  ke(() => {
    m(_);
  }),
    be(() => {
      m(_);
    });
  const f = (c) => {
    s(4, (_ = c));
  };
  return (
    (e.$$set = (c) => {
      'embeds' in c && s(0, (i = c.embeds)),
        'breakpoints' in c && s(1, (u = c.breakpoints)),
        'minFrameWidth' in c && s(2, (k = c.minFrameWidth)),
        'maxFrameWidth' in c && s(3, (d = c.maxFrameWidth));
    }),
    (e.$$.update = () => {
      e.$$.dirty & 1 && s(5, (a = Me(i)));
    }),
    [i, u, k, d, _, a, o, f]
  );
}
class Te extends x {
  constructor(t) {
    super();
    ee(this, t, Ne, Ve, te, {
      embeds: 0,
      breakpoints: 1,
      minFrameWidth: 2,
      maxFrameWidth: 3,
    });
  }
}
function Ue(e) {
  let t, s;
  return (
    (t = new Te({ props: { embeds: e[0] } })),
    {
      c() {
        P(t.$$.fragment);
      },
      l(a) {
        H(t.$$.fragment, a);
      },
      m(a, o) {
        L(t, a, o), (s = !0);
      },
      p: We,
      i(a) {
        s || (S(t.$$.fragment, a), (s = !0));
      },
      o(a) {
        q(t.$$.fragment, a), (s = !1);
      },
      d(a) {
        G(t, a);
      },
    }
  );
}
function Ae(e) {
  let t,
    s,
    a,
    o,
    i,
    u,
    k,
    d,
    _ = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Framer <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> embeds <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'/embeds/my-chart/index.html'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Framer</span> <span class="token attr-name">embeds=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>embeds<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,
    m,
    f,
    c;
  return (
    (f = new je({
      props: { fluid: !0, $$slots: { default: [Ue] }, $$scope: { ctx: e } },
    })),
    {
      c() {
        (t = D('section')),
          (s = D('h2')),
          (a = X(ie)),
          (o = A()),
          (i = D('p')),
          (u = X(ce)),
          (k = A()),
          (d = D('pre')),
          (m = A()),
          P(f.$$.fragment),
          this.h();
      },
      l(l) {
        t = I(l, 'SECTION', {});
        var r = M(t);
        s = I(r, 'H2', {});
        var g = M(s);
        (a = Y(g, ie)), g.forEach(b), (o = z(r)), (i = I(r, 'P', {}));
        var w = M(i);
        (u = Y(w, ce)),
          w.forEach(b),
          r.forEach(b),
          (k = z(l)),
          (d = I(l, 'PRE', { class: !0 }));
        var h = M(d);
        h.forEach(b), (m = z(l)), H(f.$$.fragment, l), this.h();
      },
      h() {
        v(d, 'class', 'language-svelte');
      },
      m(l, r) {
        C(l, t, r),
          F(t, s),
          F(s, a),
          F(t, o),
          F(t, i),
          F(i, u),
          C(l, k, r),
          C(l, d, r),
          (d.innerHTML = _),
          C(l, m, r),
          L(f, l, r),
          (c = !0);
      },
      p(l, [r]) {
        const g = {};
        r & 2 && (g.$$scope = { dirty: r, ctx: l }), f.$set(g);
      },
      i(l) {
        c || (S(f.$$.fragment, l), (c = !0));
      },
      o(l) {
        q(f.$$.fragment, l), (c = !1);
      },
      d(l) {
        l && b(t), l && b(k), l && b(d), l && b(m), G(f, l);
      },
    }
  );
}
const ze = {
    title: 'Framer',
    description: 'An embed tool for development in the graphics kit.',
    slug: 'framer',
  },
  { title: ie, description: ce, slug: Oe } = ze;
function Be(e) {
  return [
    [
      'https://graphics.reuters.com/USA-CONGRESS/FUNDRAISING/zjvqkawjlvx/embeds/en/embed/',
    ],
  ];
}
class Pe extends x {
  constructor(t) {
    super();
    ee(this, t, Be, Ae, te, {});
  }
}
export { Pe as default, ze as metadata };
