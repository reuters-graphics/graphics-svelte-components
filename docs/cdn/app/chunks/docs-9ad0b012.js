import {
  S as ks,
  i as fs,
  s as gs,
  F as z,
  e as d,
  t as R,
  c as m,
  a as $,
  h as S,
  d as i,
  b as y,
  g as _,
  J as h,
  j as x,
  k as j,
  m as C,
  q as b,
  G as Q,
  H as X,
  I as Y,
  o as H,
  n as K,
  p as U,
  a0 as ms,
  K as W,
  w as A,
  x as V,
  y as B,
  B as M,
  W as hs,
} from './vendor-f398e5e0.js';
import { D as Z } from './index-9e15525f.js';
import { a as vs } from './paths-396f020f.js';
const $s = (l) => ({}),
  ns = (l) => ({}),
  bs = (l) => ({}),
  as = (l) => ({}),
  ws = (l) => ({}),
  ts = (l) => ({}),
  Es = (l) => ({}),
  es = (l) => ({});
function ps(l) {
  let s, e, n;
  return {
    c() {
      (s = d('p')), (e = R(l[2])), this.h();
    },
    l(a) {
      s = m(a, 'P', { class: !0 });
      var t = $(s);
      (e = S(t, l[2])), t.forEach(i), this.h();
    },
    h() {
      y(s, 'class', (n = `section-title color-${l[3]}`));
    },
    m(a, t) {
      _(a, s, t), h(s, e);
    },
    p(a, t) {
      t & 4 && x(e, a[2]),
        t & 8 && n !== (n = `section-title color-${a[3]}`) && y(s, 'class', n);
    },
    d(a) {
      a && i(s);
    },
  };
}
function Ps(l) {
  let s, e;
  return {
    c() {
      (s = d('h2')), (e = R(l[0]));
    },
    l(n) {
      s = m(n, 'H2', {});
      var a = $(s);
      (e = S(a, l[0])), a.forEach(i);
    },
    m(n, a) {
      _(n, s, a), h(s, e);
    },
    p(n, a) {
      a & 1 && x(e, n[0]);
    },
    i: W,
    o: W,
    d(n) {
      n && i(s);
    },
  };
}
function ys(l) {
  let s;
  const e = l[6].hed,
    n = z(e, l, l[5], ts);
  return {
    c() {
      n && n.c();
    },
    l(a) {
      n && n.l(a);
    },
    m(a, t) {
      n && n.m(a, t), (s = !0);
    },
    p(a, t) {
      n &&
        n.p &&
        (!s || t & 32) &&
        Q(n, e, a, a[5], s ? Y(e, a[5], t, ws) : X(a[5]), ts);
    },
    i(a) {
      s || (b(n, a), (s = !0));
    },
    o(a) {
      H(n, a), (s = !1);
    },
    d(a) {
      n && n.d(a);
    },
  };
}
function ls(l) {
  let s, e;
  return {
    c() {
      (s = d('p')), (e = R(l[1]));
    },
    l(n) {
      s = m(n, 'P', {});
      var a = $(s);
      (e = S(a, l[1])), a.forEach(i);
    },
    m(n, a) {
      _(n, s, a), h(s, e);
    },
    p(n, a) {
      a & 2 && x(e, n[1]);
    },
    d(n) {
      n && i(s);
    },
  };
}
function os(l) {
  let s,
    e,
    n,
    a = l[4].byline && cs(l),
    t = l[4].dateline && is(l);
  return {
    c() {
      (s = d('aside')), a && a.c(), (e = j()), t && t.c(), this.h();
    },
    l(p) {
      s = m(p, 'ASIDE', { class: !0 });
      var c = $(s);
      a && a.l(c), (e = C(c)), t && t.l(c), c.forEach(i), this.h();
    },
    h() {
      y(s, 'class', 'article-metadata');
    },
    m(p, c) {
      _(p, s, c), a && a.m(s, null), h(s, e), t && t.m(s, null), (n = !0);
    },
    p(p, c) {
      p[4].byline
        ? a
          ? (a.p(p, c), c & 16 && b(a, 1))
          : ((a = cs(p)), a.c(), b(a, 1), a.m(s, e))
        : a &&
          (K(),
          H(a, 1, 1, () => {
            a = null;
          }),
          U()),
        p[4].dateline
          ? t
            ? (t.p(p, c), c & 16 && b(t, 1))
            : ((t = is(p)), t.c(), b(t, 1), t.m(s, null))
          : t &&
            (K(),
            H(t, 1, 1, () => {
              t = null;
            }),
            U());
    },
    i(p) {
      n || (b(a), b(t), (n = !0));
    },
    o(p) {
      H(a), H(t), (n = !1);
    },
    d(p) {
      p && i(s), a && a.d(), t && t.d();
    },
  };
}
function cs(l) {
  let s, e, n;
  const a = l[6].byline,
    t = z(a, l, l[5], as);
  return {
    c() {
      (s = d('div')), (e = d('div')), t && t.c(), this.h();
    },
    l(p) {
      s = m(p, 'DIV', { class: !0 });
      var c = $(s);
      e = m(c, 'DIV', { class: !0 });
      var w = $(e);
      t && t.l(w), w.forEach(i), c.forEach(i), this.h();
    },
    h() {
      y(e, 'class', 'byline'), y(s, 'class', 'byline-container');
    },
    m(p, c) {
      _(p, s, c), h(s, e), t && t.m(e, null), (n = !0);
    },
    p(p, c) {
      t &&
        t.p &&
        (!n || c & 32) &&
        Q(t, a, p, p[5], n ? Y(a, p[5], c, bs) : X(p[5]), as);
    },
    i(p) {
      n || (b(t, p), (n = !0));
    },
    o(p) {
      H(t, p), (n = !1);
    },
    d(p) {
      p && i(s), t && t.d(p);
    },
  };
}
function is(l) {
  let s, e, n;
  const a = l[6].dateline,
    t = z(a, l, l[5], ns);
  return {
    c() {
      (s = d('div')), (e = d('div')), t && t.c(), this.h();
    },
    l(p) {
      s = m(p, 'DIV', { class: !0 });
      var c = $(s);
      e = m(c, 'DIV', { class: !0 });
      var w = $(e);
      t && t.l(w), w.forEach(i), c.forEach(i), this.h();
    },
    h() {
      y(e, 'class', 'published'), y(s, 'class', 'dateline-container');
    },
    m(p, c) {
      _(p, s, c), h(s, e), t && t.m(e, null), (n = !0);
    },
    p(p, c) {
      t &&
        t.p &&
        (!n || c & 32) &&
        Q(t, a, p, p[5], n ? Y(a, p[5], c, $s) : X(p[5]), ns);
    },
    i(p) {
      n || (b(t, p), (n = !0));
    },
    o(p) {
      H(t, p), (n = !1);
    },
    d(p) {
      p && i(s), t && t.d(p);
    },
  };
}
function Hs(l) {
  let s, e, n, a, t, p, c, w, G;
  const P = l[6].crown,
    g = z(P, l, l[5], es);
  let v = l[2] && ps(l);
  const T = [ys, Ps],
    D = [];
  function N(u, E) {
    return u[4].hed ? 0 : 1;
  }
  (t = N(l)), (p = D[t] = T[t](l));
  let r = l[1] && ls(l),
    k = (l[4].byline || l[4].dateline) && os(l);
  return {
    c() {
      (s = d('section')),
        g && g.c(),
        (e = j()),
        (n = d('div')),
        v && v.c(),
        (a = j()),
        p.c(),
        (c = j()),
        r && r.c(),
        (w = j()),
        k && k.c(),
        this.h();
    },
    l(u) {
      s = m(u, 'SECTION', { class: !0 });
      var E = $(s);
      g && g.l(E), (e = C(E)), (n = m(E, 'DIV', { class: !0 }));
      var I = $(n);
      v && v.l(I),
        (a = C(I)),
        p.l(I),
        (c = C(I)),
        r && r.l(I),
        I.forEach(i),
        (w = C(E)),
        k && k.l(E),
        E.forEach(i),
        this.h();
    },
    h() {
      y(n, 'class', 'title'), y(s, 'class', 'headline');
    },
    m(u, E) {
      _(u, s, E),
        g && g.m(s, null),
        h(s, e),
        h(s, n),
        v && v.m(n, null),
        h(n, a),
        D[t].m(n, null),
        h(n, c),
        r && r.m(n, null),
        h(s, w),
        k && k.m(s, null),
        (G = !0);
    },
    p(u, [E]) {
      g &&
        g.p &&
        (!G || E & 32) &&
        Q(g, P, u, u[5], G ? Y(P, u[5], E, Es) : X(u[5]), es),
        u[2]
          ? v
            ? v.p(u, E)
            : ((v = ps(u)), v.c(), v.m(n, a))
          : v && (v.d(1), (v = null));
      let I = t;
      (t = N(u)),
        t === I
          ? D[t].p(u, E)
          : (K(),
            H(D[I], 1, 1, () => {
              D[I] = null;
            }),
            U(),
            (p = D[t]),
            p ? p.p(u, E) : ((p = D[t] = T[t](u)), p.c()),
            b(p, 1),
            p.m(n, c)),
        u[1]
          ? r
            ? r.p(u, E)
            : ((r = ls(u)), r.c(), r.m(n, null))
          : r && (r.d(1), (r = null)),
        u[4].byline || u[4].dateline
          ? k
            ? (k.p(u, E), E & 16 && b(k, 1))
            : ((k = os(u)), k.c(), b(k, 1), k.m(s, null))
          : k &&
            (K(),
            H(k, 1, 1, () => {
              k = null;
            }),
            U());
    },
    i(u) {
      G || (b(g, u), b(p), b(k), (G = !0));
    },
    o(u) {
      H(g, u), H(p), H(k), (G = !1);
    },
    d(u) {
      u && i(s), g && g.d(u), v && v.d(), D[t].d(), r && r.d(), k && k.d();
    },
  };
}
function Is(l, s, e) {
  let { $$slots: n = {}, $$scope: a } = s;
  const t = ms(n);
  let { hed: p = 'Reuters Graphics Interactive' } = s,
    { dek: c } = s,
    { section: w } = s,
    { sectionColour: G = 'red' } = s;
  return (
    (l.$$set = (P) => {
      'hed' in P && e(0, (p = P.hed)),
        'dek' in P && e(1, (c = P.dek)),
        'section' in P && e(2, (w = P.section)),
        'sectionColour' in P && e(3, (G = P.sectionColour)),
        '$$scope' in P && e(5, (a = P.$$scope));
    }),
    [p, c, w, G, t, a, n]
  );
}
class ss extends ks {
  constructor(s) {
    super();
    fs(this, s, Is, Hs, gs, { hed: 0, dek: 1, section: 2, sectionColour: 3 });
  }
}
function js(l) {
  let s, e;
  return (
    (s = new ss({
      props: {
        hed: 'Reuters Graphics Interactive',
        dek: 'The beginning of a beautiful page',
        section: 'Global news',
        sectionColour: 'orange',
      },
    })),
    {
      c() {
        A(s.$$.fragment);
      },
      l(n) {
        V(s.$$.fragment, n);
      },
      m(n, a) {
        B(s, n, a), (e = !0);
      },
      p: W,
      i(n) {
        e || (b(s.$$.fragment, n), (e = !0));
      },
      o(n) {
        H(s.$$.fragment, n), (e = !1);
      },
      d(n) {
        M(s, n);
      },
    }
  );
}
function Cs(l) {
  let s, e, n, a;
  return {
    c() {
      (s = d('span')),
        (e = R('By ')),
        (n = d('strong')),
        (a = R('Peppa Pig')),
        this.h();
    },
    l(t) {
      s = m(t, 'SPAN', { slot: !0 });
      var p = $(s);
      (e = S(p, 'By ')), (n = m(p, 'STRONG', {}));
      var c = $(n);
      (a = S(c, 'Peppa Pig')), c.forEach(i), p.forEach(i), this.h();
    },
    h() {
      y(s, 'slot', 'byline');
    },
    m(t, p) {
      _(t, s, p), h(s, e), h(s, n), h(n, a);
    },
    d(t) {
      t && i(s);
    },
  };
}
function Gs(l) {
  let s, e;
  return {
    c() {
      (s = d('span')), (e = R('Published Jan. 1, 2020')), this.h();
    },
    l(n) {
      s = m(n, 'SPAN', { slot: !0 });
      var a = $(s);
      (e = S(a, 'Published Jan. 1, 2020')), a.forEach(i), this.h();
    },
    h() {
      y(s, 'slot', 'dateline');
    },
    m(n, a) {
      _(n, s, a), h(s, e);
    },
    d(n) {
      n && i(s);
    },
  };
}
function Ts(l) {
  let s, e;
  return (
    (s = new ss({
      props: {
        hed: 'Reuters Graphics Interactive',
        dek: 'The beginning of a beautiful page',
        section: 'Global news',
        sectionColour: 'orange',
        $$slots: { dateline: [Gs], byline: [Cs] },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        A(s.$$.fragment);
      },
      l(n) {
        V(s.$$.fragment, n);
      },
      m(n, a) {
        B(s, n, a), (e = !0);
      },
      p(n, a) {
        const t = {};
        a & 1 && (t.$$scope = { dirty: a, ctx: n }), s.$set(t);
      },
      i(n) {
        e || (b(s.$$.fragment, n), (e = !0));
      },
      o(n) {
        H(s.$$.fragment, n), (e = !1);
      },
      d(n) {
        M(s, n);
      },
    }
  );
}
function Ds(l) {
  let s, e;
  return {
    c() {
      (s = d('img')), this.h();
    },
    l(n) {
      (s = m(n, 'IMG', { slot: !0, src: !0 })), this.h();
    },
    h() {
      y(s, 'slot', 'crown'),
        hs(s.src, (e = `${vs}/images/crown.png`)) || y(s, 'src', e);
    },
    m(n, a) {
      _(n, s, a);
    },
    p: W,
    d(n) {
      n && i(s);
    },
  };
}
function Rs(l) {
  let s, e;
  return {
    c() {
      (s = d('h2')), (e = R('Europa')), this.h();
    },
    l(n) {
      s = m(n, 'H2', { slot: !0, class: !0 });
      var a = $(s);
      (e = S(a, 'Europa')), a.forEach(i), this.h();
    },
    h() {
      y(s, 'slot', 'hed'), y(s, 'class', 'spaced font-serif');
    },
    m(n, a) {
      _(n, s, a), h(s, e);
    },
    d(n) {
      n && i(s);
    },
  };
}
function Ss(l) {
  let s, e;
  return {
    c() {
      (s = d('span')), (e = R('Published Jan. 1, 2020')), this.h();
    },
    l(n) {
      s = m(n, 'SPAN', { slot: !0 });
      var a = $(s);
      (e = S(a, 'Published Jan. 1, 2020')), a.forEach(i), this.h();
    },
    h() {
      y(s, 'slot', 'dateline');
    },
    m(n, a) {
      _(n, s, a), h(s, e);
    },
    d(n) {
      n && i(s);
    },
  };
}
function Js(l) {
  let s, e;
  return (
    (s = new ss({
      props: {
        $$slots: { dateline: [Ss], hed: [Rs], crown: [Ds] },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        A(s.$$.fragment);
      },
      l(n) {
        V(s.$$.fragment, n);
      },
      m(n, a) {
        B(s, n, a), (e = !0);
      },
      p(n, a) {
        const t = {};
        a & 1 && (t.$$scope = { dirty: a, ctx: n }), s.$set(t);
      },
      i(n) {
        e || (b(s.$$.fragment, n), (e = !0));
      },
      o(n) {
        H(s.$$.fragment, n), (e = !1);
      },
      d(n) {
        M(s, n);
      },
    }
  );
}
function Ns(l) {
  let s,
    e,
    n,
    a,
    t,
    p,
    c,
    w,
    G = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Headline <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Headline</span>
  <span class="token attr-name">hed="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'Reuters Graphics Interactive'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">dek="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'The beginning of a beautiful page'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">section="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'Global news'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">sectionColour="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'orange'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
<span class="token punctuation">/></span></span></code>`,
    P,
    g,
    v,
    T,
    D = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Headline <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Headline</span>
  <span class="token attr-name">hed="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'Reuters Graphics Interactive'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">dek="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'The beginning of a beautiful page'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">section="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'Global news'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">sectionColour="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'orange'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
<span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- Use named slots to add a byline... --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>byline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>By <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">></span></span>Peppa Pig<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- ...and a dateline. --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dateline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Published Jan. 1, 2020<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Headline</span><span class="token punctuation">></span></span></code>`,
    N,
    r,
    k,
    u,
    E = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Headline <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/paths'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Headline</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- Add a crown --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>crown<span class="token punctuation">"</span></span> <span class="token attr-name">src="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/crown.png</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span>
  <span class="token comment">&lt;!-- Override the hed with a named slot --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hed<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>spaced font-serif<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Europa<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dateline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Published Jan. 1, 2020<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Headline</span><span class="token punctuation">></span></span></code>`,
    I,
    J,
    L;
  return (
    (g = new Z({ props: { $$slots: { default: [js] }, $$scope: { ctx: l } } })),
    (r = new Z({ props: { $$slots: { default: [Ts] }, $$scope: { ctx: l } } })),
    (J = new Z({ props: { $$slots: { default: [Js] }, $$scope: { ctx: l } } })),
    {
      c() {
        (s = d('section')),
          (e = d('h2')),
          (n = R(us)),
          (a = j()),
          (t = d('p')),
          (p = R(rs)),
          (c = j()),
          (w = d('pre')),
          (P = j()),
          A(g.$$.fragment),
          (v = j()),
          (T = d('pre')),
          (N = j()),
          A(r.$$.fragment),
          (k = j()),
          (u = d('pre')),
          (I = j()),
          A(J.$$.fragment),
          this.h();
      },
      l(o) {
        s = m(o, 'SECTION', {});
        var f = $(s);
        e = m(f, 'H2', {});
        var O = $(e);
        (n = S(O, us)), O.forEach(i), (a = C(f)), (t = m(f, 'P', {}));
        var q = $(t);
        (p = S(q, rs)),
          q.forEach(i),
          f.forEach(i),
          (c = C(o)),
          (w = m(o, 'PRE', { class: !0 }));
        var F = $(w);
        F.forEach(i),
          (P = C(o)),
          V(g.$$.fragment, o),
          (v = C(o)),
          (T = m(o, 'PRE', { class: !0 }));
        var _s = $(T);
        _s.forEach(i),
          (N = C(o)),
          V(r.$$.fragment, o),
          (k = C(o)),
          (u = m(o, 'PRE', { class: !0 }));
        var ds = $(u);
        ds.forEach(i), (I = C(o)), V(J.$$.fragment, o), this.h();
      },
      h() {
        y(w, 'class', 'language-svelte'),
          y(T, 'class', 'language-svelte'),
          y(u, 'class', 'language-svelte');
      },
      m(o, f) {
        _(o, s, f),
          h(s, e),
          h(e, n),
          h(s, a),
          h(s, t),
          h(t, p),
          _(o, c, f),
          _(o, w, f),
          (w.innerHTML = G),
          _(o, P, f),
          B(g, o, f),
          _(o, v, f),
          _(o, T, f),
          (T.innerHTML = D),
          _(o, N, f),
          B(r, o, f),
          _(o, k, f),
          _(o, u, f),
          (u.innerHTML = E),
          _(o, I, f),
          B(J, o, f),
          (L = !0);
      },
      p(o, [f]) {
        const O = {};
        f & 1 && (O.$$scope = { dirty: f, ctx: o }), g.$set(O);
        const q = {};
        f & 1 && (q.$$scope = { dirty: f, ctx: o }), r.$set(q);
        const F = {};
        f & 1 && (F.$$scope = { dirty: f, ctx: o }), J.$set(F);
      },
      i(o) {
        L ||
          (b(g.$$.fragment, o),
          b(r.$$.fragment, o),
          b(J.$$.fragment, o),
          (L = !0));
      },
      o(o) {
        H(g.$$.fragment, o), H(r.$$.fragment, o), H(J.$$.fragment, o), (L = !1);
      },
      d(o) {
        o && i(s),
          o && i(c),
          o && i(w),
          o && i(P),
          M(g, o),
          o && i(v),
          o && i(T),
          o && i(N),
          M(r, o),
          o && i(k),
          o && i(u),
          o && i(I),
          M(J, o);
      },
    }
  );
}
const As = {
    title: 'Headline',
    description: 'Titles & bylines & datelines, oh my!',
    slug: 'headline',
  },
  { title: us, description: rs, slug: Os } = As;
class qs extends ks {
  constructor(s) {
    super();
    fs(this, s, null, Ns, gs, {});
  }
}
export { qs as default, As as metadata };
