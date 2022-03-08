import {
  C as ue,
  S as x,
  i as ee,
  s as te,
  a0 as fe,
  J as Z,
  ac as me,
  ad as se,
  e as D,
  t as X,
  k as A,
  j as O,
  c as I,
  a as M,
  g as Y,
  d as b,
  n as B,
  m as H,
  b as h,
  $,
  f as R,
  H as F,
  o as L,
  V as N,
  h as ae,
  x as C,
  u as S,
  v as G,
  a6 as pe,
  R as ne,
  aa as de,
  Y as re,
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
import { D as ye } from './index-ccd418f9.js';
import './@component-docs_components-432303bb.js';
import './paths-6758d194.js';
const P = ue(660);
function je(t) {
  let e,
    s,
    a,
    v = (t[7] || t[3]) + '',
    r,
    c,
    k,
    u,
    _,
    f,
    m,
    o,
    l,
    i,
    g,
    w,
    d,
    U,
    n,
    p,
    j,
    y,
    q;
  return (
    fe(t[21]),
    (f = new Z({ props: { icon: me, fw: !0 } })),
    (n = new Z({ props: { icon: se, fw: !0 } })),
    {
      c() {
        (e = D('div')),
          (s = D('div')),
          (a = D('div')),
          (r = X(v)),
          (c = X('px')),
          (u = A()),
          (_ = D('button')),
          O(f.$$.fragment),
          (o = A()),
          (l = D('div')),
          (i = D('div')),
          (g = A()),
          (w = D('div')),
          (d = A()),
          (U = D('button')),
          O(n.$$.fragment),
          this.h();
      },
      l(W) {
        e = I(W, 'DIV', { id: !0, class: !0 });
        var V = M(e);
        s = I(V, 'DIV', { class: !0 });
        var z = M(s);
        a = I(z, 'DIV', { class: !0, style: !0 });
        var J = M(a);
        (r = Y(J, v)),
          (c = Y(J, 'px')),
          J.forEach(b),
          (u = B(z)),
          (_ = I(z, 'BUTTON', { class: !0 }));
        var E = M(_);
        H(f.$$.fragment, E),
          E.forEach(b),
          (o = B(z)),
          (l = I(z, 'DIV', { class: !0 }));
        var T = M(l);
        (i = I(T, 'DIV', { class: !0 })),
          M(i).forEach(b),
          (g = B(T)),
          (w = I(T, 'DIV', { class: !0, tabindex: !0, style: !0 })),
          M(w).forEach(b),
          T.forEach(b),
          (d = B(z)),
          (U = I(z, 'BUTTON', { class: !0 }));
        var K = M(U);
        H(n.$$.fragment, K), K.forEach(b), z.forEach(b), V.forEach(b), this.h();
      },
      h() {
        h(a, 'class', 'label svelte-1o1jkdv'),
          h(a, 'style', (k = `opacity: ${t[5] || t[6] ? 1 : 0};`)),
          h(_, 'class', 'icon left svelte-1o1jkdv'),
          (_.disabled = m = t[3] === t[1]),
          h(i, 'class', 'track svelte-1o1jkdv'),
          h(w, 'class', 'handle svelte-1o1jkdv'),
          h(w, 'tabindex', '0'),
          $(w, 'left', 'calc(' + t[8] * 100 + '% - 5px)'),
          h(l, 'class', 'slider-container svelte-1o1jkdv'),
          h(U, 'class', 'icon right svelte-1o1jkdv'),
          (U.disabled = p = t[3] === t[2]),
          h(s, 'class', 'slider svelte-1o1jkdv'),
          h(e, 'id', 'resizer'),
          h(e, 'class', 'svelte-1o1jkdv');
      },
      m(W, V) {
        R(W, e, V),
          F(e, s),
          F(s, a),
          F(a, r),
          F(a, c),
          F(s, u),
          F(s, _),
          L(f, _, null),
          F(s, o),
          F(s, l),
          F(l, i),
          F(l, g),
          F(l, w),
          t[22](l),
          F(s, d),
          F(s, U),
          L(n, U, null),
          (j = !0),
          y ||
            ((q = [
              N(window, 'mousemove', t[9]),
              N(window, 'mouseup', t[12]),
              N(window, 'keydown', t[10]),
              N(window, 'resize', t[21]),
              N(_, 'click', t[16]),
              N(_, 'focus', t[13]),
              N(_, 'mouseover', t[13]),
              N(_, 'mouseleave', t[14]),
              N(w, 'mousedown', t[11]),
              N(w, 'focus', t[13]),
              N(w, 'blur', t[14]),
              N(U, 'click', t[15]),
              N(U, 'focus', t[13]),
              N(U, 'mouseover', t[13]),
              N(U, 'mouseleave', t[14]),
            ]),
            (y = !0));
      },
      p(W, [V]) {
        (!j || V & 136) && v !== (v = (W[7] || W[3]) + '') && ae(r, v),
          (!j || (V & 96 && k !== (k = `opacity: ${W[5] || W[6] ? 1 : 0};`))) &&
            h(a, 'style', k),
          (!j || (V & 10 && m !== (m = W[3] === W[1]))) && (_.disabled = m),
          (!j || V & 256) && $(w, 'left', 'calc(' + W[8] * 100 + '% - 5px)'),
          (!j || (V & 12 && p !== (p = W[3] === W[2]))) && (U.disabled = p);
      },
      i(W) {
        j || (C(f.$$.fragment, W), C(n.$$.fragment, W), (j = !0));
      },
      o(W) {
        S(f.$$.fragment, W), S(n.$$.fragment, W), (j = !1);
      },
      d(W) {
        W && b(e), G(f), t[22](null), G(n), (y = !1), pe(q);
      },
    }
  );
}
const Q = 90;
function De(t, e, s) {
  let a, v, r, c, k;
  ne(t, P, (E) => s(3, (k = E)));
  let { breakpoints: u = [330, 510, 660, 930, 1200] } = e,
    { maxFrameWidth: _ = 1200 } = e,
    { minFrameWidth: f = 320 } = e,
    m,
    o = 1200,
    l = !1,
    i = !1;
  const g = (E) => Math.ceil(E / 5) * 5,
    w = () => Math.round(r * c + a);
  let d = null;
  const U = (E) => {
      if (!l || !m) return;
      const { left: T } = m.getBoundingClientRect();
      s(8, (c = Math.min(Math.max(0, E.pageX - T), Q) / Q)), s(7, (d = g(w())));
    },
    n = (E) => {
      if (!i) return;
      const { keyCode: T } = E,
        K = Q / r;
      T === 39
        ? s(8, (c = Math.min(1, c + K / Q)))
        : T === 37 && s(8, (c = Math.max(0, c - K / Q))),
        P.set(w());
    },
    p = (E) => {
      s(5, (l = !0)), U(E);
    },
    j = () => {
      s(5, (l = !1)), s(7, (d = null)), P.set(g(w()));
    },
    y = () => {
      s(6, (i = !0));
    },
    q = () => {
      s(6, (i = !1));
    },
    W = () => {
      const E = u.filter((T) => T <= v).filter((T) => T > k);
      E.length === 0 ? P.set(v) : P.set(E[0]);
    },
    V = () => {
      const E = u.filter((T) => T < k);
      E.length === 0 ? P.set(a) : P.set(E.slice(-1)[0]);
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
        'maxFrameWidth' in E && s(18, (_ = E.maxFrameWidth)),
        'minFrameWidth' in E && s(19, (f = E.minFrameWidth));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 524288 && s(1, (a = f)),
        t.$$.dirty & 262145 && s(2, (v = Math.min(o - 70, _))),
        t.$$.dirty & 6 && s(20, (r = v - a)),
        t.$$.dirty & 12 && k > v && P.set(v),
        t.$$.dirty & 1048586 && s(8, (c = (k - a) / r));
    }),
    [o, a, v, k, m, l, i, d, c, U, n, p, j, y, q, W, V, u, _, f, r, z, J]
  );
}
class Ie extends x {
  constructor(e) {
    super();
    ee(this, e, De, je, te, {
      breakpoints: 17,
      maxFrameWidth: 18,
      minFrameWidth: 19,
    });
  }
}
var Me = (t) => {
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
function le(t, e, s) {
  const a = t.slice();
  return (a[10] = e[s]), (a[12] = s), a;
}
function ie(t) {
  let e,
    s = t[5][t[12]] + '',
    a,
    v,
    r,
    c,
    k,
    u,
    _,
    f,
    m,
    o;
  c = new Z({ props: { icon: we } });
  function l() {
    return t[7](t[10]);
  }
  return {
    c() {
      (e = D('button')),
        (a = X(s)),
        (v = A()),
        (r = D('a')),
        O(c.$$.fragment),
        (_ = A()),
        this.h();
    },
    l(i) {
      e = I(i, 'BUTTON', { class: !0 });
      var g = M(e);
      (a = Y(g, s)),
        (v = B(g)),
        (r = I(g, 'A', {
          rel: !0,
          target: !0,
          href: !0,
          title: !0,
          class: !0,
        }));
      var w = M(r);
      H(c.$$.fragment, w), w.forEach(b), (_ = B(g)), g.forEach(b), this.h();
    },
    h() {
      h(r, 'rel', 'external'),
        h(r, 'target', '_blank'),
        h(r, 'href', (k = t[10])),
        h(r, 'title', (u = t[10])),
        h(r, 'class', 'svelte-97ib6o'),
        h(e, 'class', 'svelte-97ib6o'),
        re(e, 'active', t[4] === t[10]);
    },
    m(i, g) {
      R(i, e, g),
        F(e, a),
        F(e, v),
        F(e, r),
        L(c, r, null),
        F(e, _),
        (f = !0),
        m || ((o = N(e, 'click', l)), (m = !0));
    },
    p(i, g) {
      (t = i),
        (!f || g & 32) && s !== (s = t[5][t[12]] + '') && ae(a, s),
        (!f || (g & 1 && k !== (k = t[10]))) && h(r, 'href', k),
        (!f || (g & 1 && u !== (u = t[10]))) && h(r, 'title', u),
        g & 17 && re(e, 'active', t[4] === t[10]);
    },
    i(i) {
      f || (C(c.$$.fragment, i), (f = !0));
    },
    o(i) {
      S(c.$$.fragment, i), (f = !1);
    },
    d(i) {
      i && b(e), G(c), (m = !1), o();
    },
  };
}
function Ue(t) {
  let e,
    s,
    a,
    v,
    r,
    c,
    k,
    u,
    _,
    f,
    m,
    o,
    l,
    i,
    g,
    w = t[0],
    d = [];
  for (let n = 0; n < w.length; n += 1) d[n] = ie(le(t, w, n));
  const U = (n) =>
    S(d[n], 1, 1, () => {
      d[n] = null;
    });
  return (
    (o = new Z({ props: { icon: se } })),
    (i = new Ie({
      props: { breakpoints: t[1], minFrameWidth: t[2], maxFrameWidth: t[3] },
    })),
    {
      c() {
        (e = D('div')),
          (s = D('header')),
          (a = D('img')),
          (r = A()),
          (c = D('nav'));
        for (let n = 0; n < d.length; n += 1) d[n].c();
        (k = A()),
          (u = D('div')),
          (_ = A()),
          (f = D('div')),
          (m = D('a')),
          O(o.$$.fragment),
          (l = A()),
          O(i.$$.fragment),
          this.h();
      },
      l(n) {
        e = I(n, 'DIV', { class: !0 });
        var p = M(e);
        s = I(p, 'HEADER', { class: !0 });
        var j = M(s);
        (a = I(j, 'IMG', { src: !0, alt: !0 })),
          j.forEach(b),
          (r = B(p)),
          (c = I(p, 'NAV', { class: !0 }));
        var y = M(c);
        for (let V = 0; V < d.length; V += 1) d[V].l(y);
        y.forEach(b),
          (k = B(p)),
          (u = I(p, 'DIV', { id: !0, style: !0, class: !0 })),
          M(u).forEach(b),
          p.forEach(b),
          (_ = B(n)),
          (f = I(n, 'DIV', { id: !0, class: !0 }));
        var q = M(f);
        m = I(q, 'A', { rel: !0, href: !0, class: !0 });
        var W = M(m);
        H(o.$$.fragment, W),
          W.forEach(b),
          q.forEach(b),
          (l = B(n)),
          H(i.$$.fragment, n),
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
          h(m, 'href', '/'),
          h(m, 'class', 'svelte-97ib6o'),
          h(f, 'id', 'home-link'),
          h(f, 'class', 'svelte-97ib6o');
      },
      m(n, p) {
        R(n, e, p), F(e, s), F(s, a), F(e, r), F(e, c);
        for (let j = 0; j < d.length; j += 1) d[j].m(c, null);
        F(e, k),
          F(e, u),
          R(n, _, p),
          R(n, f, p),
          F(f, m),
          L(o, m, null),
          R(n, l, p),
          L(i, n, p),
          (g = !0);
      },
      p(n, [p]) {
        if (p & 49) {
          w = n[0];
          let y;
          for (y = 0; y < w.length; y += 1) {
            const q = le(n, w, y);
            d[y]
              ? (d[y].p(q, p), C(d[y], 1))
              : ((d[y] = ie(q)), d[y].c(), C(d[y], 1), d[y].m(c, null));
          }
          for (ve(), y = w.length; y < d.length; y += 1) U(y);
          _e();
        }
        (!g || p & 64) && $(u, 'width', n[6] + 'px');
        const j = {};
        p & 2 && (j.breakpoints = n[1]),
          p & 4 && (j.minFrameWidth = n[2]),
          p & 8 && (j.maxFrameWidth = n[3]),
          i.$set(j);
      },
      i(n) {
        if (!g) {
          for (let p = 0; p < w.length; p += 1) C(d[p]);
          C(o.$$.fragment, n), C(i.$$.fragment, n), (g = !0);
        }
      },
      o(n) {
        d = d.filter(Boolean);
        for (let p = 0; p < d.length; p += 1) S(d[p]);
        S(o.$$.fragment, n), S(i.$$.fragment, n), (g = !1);
      },
      d(n) {
        n && b(e), ge(d, n), n && b(_), n && b(f), G(o), n && b(l), G(i, n);
      },
    }
  );
}
function Ve(t, e, s) {
  let a, v;
  ne(t, P, (o) => s(6, (v = o)));
  let { embeds: r } = e,
    { breakpoints: c = [330, 510, 660, 930, 1200] } = e,
    { minFrameWidth: k = 320 } = e,
    { maxFrameWidth: u = 1200 } = e,
    _ = r[0];
  const f = (o) => {
    new Fe.Parent(
      'frame-parent',
      /^http/.test(o) ? o : Ee(window.location.origin, o)
    );
  };
  ke(() => {
    f(_);
  }),
    be(() => {
      f(_);
    });
  const m = (o) => {
    s(4, (_ = o));
  };
  return (
    (t.$$set = (o) => {
      'embeds' in o && s(0, (r = o.embeds)),
        'breakpoints' in o && s(1, (c = o.breakpoints)),
        'minFrameWidth' in o && s(2, (k = o.minFrameWidth)),
        'maxFrameWidth' in o && s(3, (u = o.maxFrameWidth));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 1 && s(5, (a = Me(r)));
    }),
    [r, c, k, u, _, a, v, m]
  );
}
class Ne extends x {
  constructor(e) {
    super();
    ee(this, e, Ve, Ue, te, {
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
    (e = new Ne({ props: { embeds: t[0] } })),
    {
      c() {
        O(e.$$.fragment);
      },
      l(a) {
        H(e.$$.fragment, a);
      },
      m(a, v) {
        L(e, a, v), (s = !0);
      },
      p: We,
      i(a) {
        s || (C(e.$$.fragment, a), (s = !0));
      },
      o(a) {
        S(e.$$.fragment, a), (s = !1);
      },
      d(a) {
        G(e, a);
      },
    }
  );
}
function Ae(t) {
  let e,
    s,
    a,
    v,
    r,
    c,
    k,
    u,
    _ = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
        (e = D('section')),
          (s = D('h2')),
          (a = X(oe)),
          (v = A()),
          (r = D('p')),
          (c = X(ce)),
          (k = A()),
          (u = D('pre')),
          (f = A()),
          O(m.$$.fragment),
          this.h();
      },
      l(l) {
        e = I(l, 'SECTION', {});
        var i = M(e);
        s = I(i, 'H2', {});
        var g = M(s);
        (a = Y(g, oe)), g.forEach(b), (v = B(i)), (r = I(i, 'P', {}));
        var w = M(r);
        (c = Y(w, ce)),
          w.forEach(b),
          i.forEach(b),
          (k = B(l)),
          (u = I(l, 'PRE', { class: !0 }));
        var d = M(u);
        d.forEach(b), (f = B(l)), H(m.$$.fragment, l), this.h();
      },
      h() {
        h(u, 'class', 'language-svelte');
      },
      m(l, i) {
        R(l, e, i),
          F(e, s),
          F(s, a),
          F(e, v),
          F(e, r),
          F(r, c),
          R(l, k, i),
          R(l, u, i),
          (u.innerHTML = _),
          R(l, f, i),
          L(m, l, i),
          (o = !0);
      },
      p(l, [i]) {
        const g = {};
        i & 2 && (g.$$scope = { dirty: i, ctx: l }), m.$set(g);
      },
      i(l) {
        o || (C(m.$$.fragment, l), (o = !0));
      },
      o(l) {
        S(m.$$.fragment, l), (o = !1);
      },
      d(l) {
        l && b(e), l && b(k), l && b(u), l && b(f), G(m, l);
      },
    }
  );
}
const Be = {
    title: 'Framer',
    description: 'An embed tool for development in the graphics kit.',
    slug: 'framer',
  },
  { title: oe, description: ce, slug: Pe } = Be;
function qe(t) {
  return [
    [
      'https://graphics.reuters.com/USA-CONGRESS/FUNDRAISING/zjvqkawjlvx/embeds/en/embed/',
    ],
  ];
}
class Oe extends x {
  constructor(e) {
    super();
    ee(this, e, qe, Ae, te, {});
  }
}
export { Oe as default, Be as metadata };
