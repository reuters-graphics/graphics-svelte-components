import {
  S as n,
  i as s,
  s as a,
  D as t,
  e as p,
  t as e,
  c,
  a as o,
  g as l,
  d as i,
  b as u,
  f as r,
  H as k,
  h as g,
  k as d,
  n as h,
  x as m,
  E as $,
  F as f,
  G as v,
  u as b,
  r as E,
  w as y,
  Z as w,
  I as P,
  j as x,
  m as j,
  o as H,
  v as I,
  U as G,
} from './vendor-927c0fc0.js';
import { D as T } from './index-38e47fc4.js';
import { a as C } from './paths-6758d194.js';
const R = (n) => ({}),
  D = (n) => ({}),
  S = (n) => ({}),
  J = (n) => ({}),
  N = (n) => ({}),
  A = (n) => ({}),
  V = (n) => ({}),
  M = (n) => ({});
function O(n) {
  let s, a, t;
  return {
    c() {
      (s = p('p')), (a = e(n[2])), this.h();
    },
    l(t) {
      s = c(t, 'P', { class: !0 });
      var p = o(s);
      (a = l(p, n[2])), p.forEach(i), this.h();
    },
    h() {
      u(s, 'class', (t = `section-title color-${n[3]}`));
    },
    m(n, t) {
      r(n, s, t), k(s, a);
    },
    p(n, p) {
      4 & p && g(a, n[2]),
        8 & p && t !== (t = `section-title color-${n[3]}`) && u(s, 'class', t);
    },
    d(n) {
      n && i(s);
    },
  };
}
function B(n) {
  let s, a;
  return {
    c() {
      (s = p('h2')), (a = e(n[0]));
    },
    l(t) {
      s = c(t, 'H2', {});
      var p = o(s);
      (a = l(p, n[0])), p.forEach(i);
    },
    m(n, t) {
      r(n, s, t), k(s, a);
    },
    p(n, s) {
      1 & s && g(a, n[0]);
    },
    i: P,
    o: P,
    d(n) {
      n && i(s);
    },
  };
}
function L(n) {
  let s;
  const a = n[6].hed,
    p = t(a, n, n[5], A);
  return {
    c() {
      p && p.c();
    },
    l(n) {
      p && p.l(n);
    },
    m(n, a) {
      p && p.m(n, a), (s = !0);
    },
    p(n, t) {
      p &&
        p.p &&
        (!s || 32 & t) &&
        $(p, a, n, n[5], s ? v(a, n[5], t, N) : f(n[5]), A);
    },
    i(n) {
      s || (m(p, n), (s = !0));
    },
    o(n) {
      b(p, n), (s = !1);
    },
    d(n) {
      p && p.d(n);
    },
  };
}
function U(n) {
  let s, a;
  return {
    c() {
      (s = p('p')), (a = e(n[1]));
    },
    l(t) {
      s = c(t, 'P', {});
      var p = o(s);
      (a = l(p, n[1])), p.forEach(i);
    },
    m(n, t) {
      r(n, s, t), k(s, a);
    },
    p(n, s) {
      2 & s && g(a, n[1]);
    },
    d(n) {
      n && i(s);
    },
  };
}
function F(n) {
  let s,
    a,
    t,
    e = n[4].byline && Z(n),
    l = n[4].dateline && q(n);
  return {
    c() {
      (s = p('aside')), e && e.c(), (a = d()), l && l.c(), this.h();
    },
    l(n) {
      s = c(n, 'ASIDE', { class: !0 });
      var t = o(s);
      e && e.l(t), (a = h(t)), l && l.l(t), t.forEach(i), this.h();
    },
    h() {
      u(s, 'class', 'article-metadata');
    },
    m(n, p) {
      r(n, s, p), e && e.m(s, null), k(s, a), l && l.m(s, null), (t = !0);
    },
    p(n, t) {
      n[4].byline
        ? e
          ? (e.p(n, t), 16 & t && m(e, 1))
          : ((e = Z(n)), e.c(), m(e, 1), e.m(s, a))
        : e &&
          (E(),
          b(e, 1, 1, () => {
            e = null;
          }),
          y()),
        n[4].dateline
          ? l
            ? (l.p(n, t), 16 & t && m(l, 1))
            : ((l = q(n)), l.c(), m(l, 1), l.m(s, null))
          : l &&
            (E(),
            b(l, 1, 1, () => {
              l = null;
            }),
            y());
    },
    i(n) {
      t || (m(e), m(l), (t = !0));
    },
    o(n) {
      b(e), b(l), (t = !1);
    },
    d(n) {
      n && i(s), e && e.d(), l && l.d();
    },
  };
}
function Z(n) {
  let s, a, e;
  const l = n[6].byline,
    g = t(l, n, n[5], J);
  return {
    c() {
      (s = p('div')), (a = p('div')), g && g.c(), this.h();
    },
    l(n) {
      s = c(n, 'DIV', { class: !0 });
      var t = o(s);
      a = c(t, 'DIV', { class: !0 });
      var p = o(a);
      g && g.l(p), p.forEach(i), t.forEach(i), this.h();
    },
    h() {
      u(a, 'class', 'byline'), u(s, 'class', 'byline-container');
    },
    m(n, t) {
      r(n, s, t), k(s, a), g && g.m(a, null), (e = !0);
    },
    p(n, s) {
      g &&
        g.p &&
        (!e || 32 & s) &&
        $(g, l, n, n[5], e ? v(l, n[5], s, S) : f(n[5]), J);
    },
    i(n) {
      e || (m(g, n), (e = !0));
    },
    o(n) {
      b(g, n), (e = !1);
    },
    d(n) {
      n && i(s), g && g.d(n);
    },
  };
}
function q(n) {
  let s, a, e;
  const l = n[6].dateline,
    g = t(l, n, n[5], D);
  return {
    c() {
      (s = p('div')), (a = p('div')), g && g.c(), this.h();
    },
    l(n) {
      s = c(n, 'DIV', { class: !0 });
      var t = o(s);
      a = c(t, 'DIV', { class: !0 });
      var p = o(a);
      g && g.l(p), p.forEach(i), t.forEach(i), this.h();
    },
    h() {
      u(a, 'class', 'published'), u(s, 'class', 'dateline-container');
    },
    m(n, t) {
      r(n, s, t), k(s, a), g && g.m(a, null), (e = !0);
    },
    p(n, s) {
      g &&
        g.p &&
        (!e || 32 & s) &&
        $(g, l, n, n[5], e ? v(l, n[5], s, R) : f(n[5]), D);
    },
    i(n) {
      e || (m(g, n), (e = !0));
    },
    o(n) {
      b(g, n), (e = !1);
    },
    d(n) {
      n && i(s), g && g.d(n);
    },
  };
}
function z(n) {
  let s, a, e, l, g, w, P, x, j;
  const H = n[6].crown,
    I = t(H, n, n[5], M);
  let G = n[2] && O(n);
  const T = [L, B],
    C = [];
  function R(n, s) {
    return n[4].hed ? 0 : 1;
  }
  (g = R(n)), (w = C[g] = T[g](n));
  let D = n[1] && U(n),
    S = (n[4].byline || n[4].dateline) && F(n);
  return {
    c() {
      (s = p('section')),
        I && I.c(),
        (a = d()),
        (e = p('div')),
        G && G.c(),
        (l = d()),
        w.c(),
        (P = d()),
        D && D.c(),
        (x = d()),
        S && S.c(),
        this.h();
    },
    l(n) {
      s = c(n, 'SECTION', { class: !0 });
      var t = o(s);
      I && I.l(t), (a = h(t)), (e = c(t, 'DIV', { class: !0 }));
      var p = o(e);
      G && G.l(p),
        (l = h(p)),
        w.l(p),
        (P = h(p)),
        D && D.l(p),
        p.forEach(i),
        (x = h(t)),
        S && S.l(t),
        t.forEach(i),
        this.h();
    },
    h() {
      u(e, 'class', 'title'), u(s, 'class', 'headline');
    },
    m(n, t) {
      r(n, s, t),
        I && I.m(s, null),
        k(s, a),
        k(s, e),
        G && G.m(e, null),
        k(e, l),
        C[g].m(e, null),
        k(e, P),
        D && D.m(e, null),
        k(s, x),
        S && S.m(s, null),
        (j = !0);
    },
    p(n, [a]) {
      I &&
        I.p &&
        (!j || 32 & a) &&
        $(I, H, n, n[5], j ? v(H, n[5], a, V) : f(n[5]), M),
        n[2]
          ? G
            ? G.p(n, a)
            : ((G = O(n)), G.c(), G.m(e, l))
          : G && (G.d(1), (G = null));
      let t = g;
      (g = R(n)),
        g === t
          ? C[g].p(n, a)
          : (E(),
            b(C[t], 1, 1, () => {
              C[t] = null;
            }),
            y(),
            (w = C[g]),
            w ? w.p(n, a) : ((w = C[g] = T[g](n)), w.c()),
            m(w, 1),
            w.m(e, P)),
        n[1]
          ? D
            ? D.p(n, a)
            : ((D = U(n)), D.c(), D.m(e, null))
          : D && (D.d(1), (D = null)),
        n[4].byline || n[4].dateline
          ? S
            ? (S.p(n, a), 16 & a && m(S, 1))
            : ((S = F(n)), S.c(), m(S, 1), S.m(s, null))
          : S &&
            (E(),
            b(S, 1, 1, () => {
              S = null;
            }),
            y());
    },
    i(n) {
      j || (m(I, n), m(w), m(S), (j = !0));
    },
    o(n) {
      b(I, n), b(w), b(S), (j = !1);
    },
    d(n) {
      n && i(s), I && I.d(n), G && G.d(), C[g].d(), D && D.d(), S && S.d();
    },
  };
}
function K(n, s, a) {
  let { $$slots: t = {}, $$scope: p } = s;
  const e = w(t);
  let { hed: c = 'Reuters Graphics Interactive' } = s,
    { dek: o } = s,
    { section: l } = s,
    { sectionColour: i = 'red' } = s;
  return (
    (n.$$set = (n) => {
      'hed' in n && a(0, (c = n.hed)),
        'dek' in n && a(1, (o = n.dek)),
        'section' in n && a(2, (l = n.section)),
        'sectionColour' in n && a(3, (i = n.sectionColour)),
        '$$scope' in n && a(5, (p = n.$$scope));
    }),
    [c, o, l, i, e, p, t]
  );
}
class Q extends n {
  constructor(n) {
    super(),
      s(this, n, K, z, a, { hed: 0, dek: 1, section: 2, sectionColour: 3 });
  }
}
function W(n) {
  let s, a;
  return (
    (s = new Q({
      props: {
        hed: 'Reuters Graphics Interactive',
        dek: 'The beginning of a beautiful page',
        section: 'Global news',
        sectionColour: 'orange',
      },
    })),
    {
      c() {
        x(s.$$.fragment);
      },
      l(n) {
        j(s.$$.fragment, n);
      },
      m(n, t) {
        H(s, n, t), (a = !0);
      },
      p: P,
      i(n) {
        a || (m(s.$$.fragment, n), (a = !0));
      },
      o(n) {
        b(s.$$.fragment, n), (a = !1);
      },
      d(n) {
        I(s, n);
      },
    }
  );
}
function X(n) {
  let s, a, t, g;
  return {
    c() {
      (s = p('span')),
        (a = e('By ')),
        (t = p('strong')),
        (g = e('Peppa Pig')),
        this.h();
    },
    l(n) {
      s = c(n, 'SPAN', { slot: !0 });
      var p = o(s);
      (a = l(p, 'By ')), (t = c(p, 'STRONG', {}));
      var e = o(t);
      (g = l(e, 'Peppa Pig')), e.forEach(i), p.forEach(i), this.h();
    },
    h() {
      u(s, 'slot', 'byline');
    },
    m(n, p) {
      r(n, s, p), k(s, a), k(s, t), k(t, g);
    },
    d(n) {
      n && i(s);
    },
  };
}
function Y(n) {
  let s, a;
  return {
    c() {
      (s = p('span')), (a = e('Published Jan. 1, 2020')), this.h();
    },
    l(n) {
      s = c(n, 'SPAN', { slot: !0 });
      var t = o(s);
      (a = l(t, 'Published Jan. 1, 2020')), t.forEach(i), this.h();
    },
    h() {
      u(s, 'slot', 'dateline');
    },
    m(n, t) {
      r(n, s, t), k(s, a);
    },
    d(n) {
      n && i(s);
    },
  };
}
function _(n) {
  let s, a;
  return (
    (s = new Q({
      props: {
        hed: 'Reuters Graphics Interactive',
        dek: 'The beginning of a beautiful page',
        section: 'Global news',
        sectionColour: 'orange',
        $$slots: { dateline: [Y], byline: [X] },
        $$scope: { ctx: n },
      },
    })),
    {
      c() {
        x(s.$$.fragment);
      },
      l(n) {
        j(s.$$.fragment, n);
      },
      m(n, t) {
        H(s, n, t), (a = !0);
      },
      p(n, a) {
        const t = {};
        1 & a && (t.$$scope = { dirty: a, ctx: n }), s.$set(t);
      },
      i(n) {
        a || (m(s.$$.fragment, n), (a = !0));
      },
      o(n) {
        b(s.$$.fragment, n), (a = !1);
      },
      d(n) {
        I(s, n);
      },
    }
  );
}
function nn(n) {
  let s, a;
  return {
    c() {
      (s = p('img')), this.h();
    },
    l(n) {
      (s = c(n, 'IMG', { slot: !0, src: !0 })), this.h();
    },
    h() {
      u(s, 'slot', 'crown'),
        G(s.src, (a = `${C}/images/crown.png`)) || u(s, 'src', a);
    },
    m(n, a) {
      r(n, s, a);
    },
    p: P,
    d(n) {
      n && i(s);
    },
  };
}
function sn(n) {
  let s, a;
  return {
    c() {
      (s = p('h2')), (a = e('Europa')), this.h();
    },
    l(n) {
      s = c(n, 'H2', { slot: !0, class: !0 });
      var t = o(s);
      (a = l(t, 'Europa')), t.forEach(i), this.h();
    },
    h() {
      u(s, 'slot', 'hed'), u(s, 'class', 'spaced font-serif');
    },
    m(n, t) {
      r(n, s, t), k(s, a);
    },
    d(n) {
      n && i(s);
    },
  };
}
function an(n) {
  let s, a;
  return {
    c() {
      (s = p('span')), (a = e('Published Jan. 1, 2020')), this.h();
    },
    l(n) {
      s = c(n, 'SPAN', { slot: !0 });
      var t = o(s);
      (a = l(t, 'Published Jan. 1, 2020')), t.forEach(i), this.h();
    },
    h() {
      u(s, 'slot', 'dateline');
    },
    m(n, t) {
      r(n, s, t), k(s, a);
    },
    d(n) {
      n && i(s);
    },
  };
}
function tn(n) {
  let s, a;
  return (
    (s = new Q({
      props: {
        $$slots: { dateline: [an], hed: [sn], crown: [nn] },
        $$scope: { ctx: n },
      },
    })),
    {
      c() {
        x(s.$$.fragment);
      },
      l(n) {
        j(s.$$.fragment, n);
      },
      m(n, t) {
        H(s, n, t), (a = !0);
      },
      p(n, a) {
        const t = {};
        1 & a && (t.$$scope = { dirty: a, ctx: n }), s.$set(t);
      },
      i(n) {
        a || (m(s.$$.fragment, n), (a = !0));
      },
      o(n) {
        b(s.$$.fragment, n), (a = !1);
      },
      d(n) {
        I(s, n);
      },
    }
  );
}
function pn(n) {
  let s, a, t, g, $, f, v, E, y, w, P, G, C, R, D, S, J, N, A;
  return (
    (w = new T({ props: { $$slots: { default: [W] }, $$scope: { ctx: n } } })),
    (R = new T({ props: { $$slots: { default: [_] }, $$scope: { ctx: n } } })),
    (N = new T({ props: { $$slots: { default: [tn] }, $$scope: { ctx: n } } })),
    {
      c() {
        (s = p('section')),
          (a = p('h2')),
          (t = e(cn)),
          (g = d()),
          ($ = p('p')),
          (f = e(on)),
          (v = d()),
          (E = p('pre')),
          (y = d()),
          x(w.$$.fragment),
          (P = d()),
          (G = p('pre')),
          (C = d()),
          x(R.$$.fragment),
          (D = d()),
          (S = p('pre')),
          (J = d()),
          x(N.$$.fragment),
          this.h();
      },
      l(n) {
        s = c(n, 'SECTION', {});
        var p = o(s);
        a = c(p, 'H2', {});
        var e = o(a);
        (t = l(e, cn)), e.forEach(i), (g = h(p)), ($ = c(p, 'P', {}));
        var u = o($);
        (f = l(u, on)),
          u.forEach(i),
          p.forEach(i),
          (v = h(n)),
          (E = c(n, 'PRE', { class: !0 })),
          o(E).forEach(i),
          (y = h(n)),
          j(w.$$.fragment, n),
          (P = h(n)),
          (G = c(n, 'PRE', { class: !0 })),
          o(G).forEach(i),
          (C = h(n)),
          j(R.$$.fragment, n),
          (D = h(n)),
          (S = c(n, 'PRE', { class: !0 })),
          o(S).forEach(i),
          (J = h(n)),
          j(N.$$.fragment, n),
          this.h();
      },
      h() {
        u(E, 'class', 'language-svelte'),
          u(G, 'class', 'language-svelte'),
          u(S, 'class', 'language-svelte');
      },
      m(n, p) {
        r(n, s, p),
          k(s, a),
          k(a, t),
          k(s, g),
          k(s, $),
          k($, f),
          r(n, v, p),
          r(n, E, p),
          (E.innerHTML =
            '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Headline <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Headline</span>\n  <span class="token attr-name">hed="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'Reuters Graphics Interactive\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">dek="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'The beginning of a beautiful page\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">section="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'Global news\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">sectionColour="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'orange\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n<span class="token punctuation">/></span></span></code>'),
          r(n, y, p),
          H(w, n, p),
          r(n, P, p),
          r(n, G, p),
          (G.innerHTML =
            '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Headline <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Headline</span>\n  <span class="token attr-name">hed="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'Reuters Graphics Interactive\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">dek="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'The beginning of a beautiful page\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">section="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'Global news\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">sectionColour="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'orange\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n<span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- Use named slots to add a byline... --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>byline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>By <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">></span></span>Peppa Pig<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ...and a dateline. --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dateline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Published Jan. 1, 2020<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Headline</span><span class="token punctuation">></span></span></code>'),
          r(n, C, p),
          H(R, n, p),
          r(n, D, p),
          r(n, S, p),
          (S.innerHTML =
            '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Headline <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'$app/paths\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Headline</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- Add a crown --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>crown<span class="token punctuation">"</span></span> <span class="token attr-name">src="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/crown.png</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span>\n  <span class="token comment">&lt;!-- Override the hed with a named slot --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hed<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>spaced font-serif<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Europa<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dateline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Published Jan. 1, 2020<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Headline</span><span class="token punctuation">></span></span></code>'),
          r(n, J, p),
          H(N, n, p),
          (A = !0);
      },
      p(n, [s]) {
        const a = {};
        1 & s && (a.$$scope = { dirty: s, ctx: n }), w.$set(a);
        const t = {};
        1 & s && (t.$$scope = { dirty: s, ctx: n }), R.$set(t);
        const p = {};
        1 & s && (p.$$scope = { dirty: s, ctx: n }), N.$set(p);
      },
      i(n) {
        A ||
          (m(w.$$.fragment, n),
          m(R.$$.fragment, n),
          m(N.$$.fragment, n),
          (A = !0));
      },
      o(n) {
        b(w.$$.fragment, n), b(R.$$.fragment, n), b(N.$$.fragment, n), (A = !1);
      },
      d(n) {
        n && i(s),
          n && i(v),
          n && i(E),
          n && i(y),
          I(w, n),
          n && i(P),
          n && i(G),
          n && i(C),
          I(R, n),
          n && i(D),
          n && i(S),
          n && i(J),
          I(N, n);
      },
    }
  );
}
const en = {
    title: 'Headline',
    description: 'Titles & bylines & datelines, oh my!',
    slug: 'headline',
  },
  { title: cn, description: on, slug: ln } = en;
export default class extends n {
  constructor(n) {
    super(), s(this, n, null, pn, a, {});
  }
}
export { en as metadata };
