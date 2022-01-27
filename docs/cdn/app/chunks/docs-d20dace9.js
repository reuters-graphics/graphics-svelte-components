import {
  S as ns,
  i as as,
  s as ts,
  D as F,
  e as _,
  t as R,
  c as d,
  a as $,
  g as S,
  d as i,
  b as y,
  f as m,
  H as h,
  h as Z,
  k as I,
  n as C,
  x as b,
  E as z,
  F as K,
  G as Q,
  u as H,
  r as W,
  w as X,
  _ as ms,
  I as Y,
  j as A,
  m as V,
  o as M,
  v as O,
  U as hs,
} from './vendor-d23a7629.js';
import { D as x } from './index-ab2656dc.js';
import { a as vs } from './paths-6758d194.js';
const $s = (l) => ({}),
  es = (l) => ({}),
  bs = (l) => ({}),
  ps = (l) => ({}),
  ws = (l) => ({}),
  ls = (l) => ({}),
  Es = (l) => ({}),
  os = (l) => ({});
function cs(l) {
  let s, e, n;
  return {
    c() {
      (s = _('p')), (e = R(l[2])), this.h();
    },
    l(a) {
      s = d(a, 'P', { class: !0 });
      var t = $(s);
      (e = S(t, l[2])), t.forEach(i), this.h();
    },
    h() {
      y(s, 'class', (n = `section-title color-${l[3]}`));
    },
    m(a, t) {
      m(a, s, t), h(s, e);
    },
    p(a, t) {
      t & 4 && Z(e, a[2]),
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
      (s = _('h2')), (e = R(l[0]));
    },
    l(n) {
      s = d(n, 'H2', {});
      var a = $(s);
      (e = S(a, l[0])), a.forEach(i);
    },
    m(n, a) {
      m(n, s, a), h(s, e);
    },
    p(n, a) {
      a & 1 && Z(e, n[0]);
    },
    i: Y,
    o: Y,
    d(n) {
      n && i(s);
    },
  };
}
function ys(l) {
  let s;
  const e = l[6].hed,
    n = F(e, l, l[5], ls);
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
        z(n, e, a, a[5], s ? Q(e, a[5], t, ws) : K(a[5]), ls);
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
function is(l) {
  let s, e;
  return {
    c() {
      (s = _('p')), (e = R(l[1]));
    },
    l(n) {
      s = d(n, 'P', {});
      var a = $(s);
      (e = S(a, l[1])), a.forEach(i);
    },
    m(n, a) {
      m(n, s, a), h(s, e);
    },
    p(n, a) {
      a & 2 && Z(e, n[1]);
    },
    d(n) {
      n && i(s);
    },
  };
}
function us(l) {
  let s,
    e,
    n,
    a = l[4].byline && rs(l),
    t = l[4].dateline && ks(l);
  return {
    c() {
      (s = _('aside')), a && a.c(), (e = I()), t && t.c(), this.h();
    },
    l(p) {
      s = d(p, 'ASIDE', { class: !0 });
      var c = $(s);
      a && a.l(c), (e = C(c)), t && t.l(c), c.forEach(i), this.h();
    },
    h() {
      y(s, 'class', 'article-metadata');
    },
    m(p, c) {
      m(p, s, c), a && a.m(s, null), h(s, e), t && t.m(s, null), (n = !0);
    },
    p(p, c) {
      p[4].byline
        ? a
          ? (a.p(p, c), c & 16 && b(a, 1))
          : ((a = rs(p)), a.c(), b(a, 1), a.m(s, e))
        : a &&
          (W(),
          H(a, 1, 1, () => {
            a = null;
          }),
          X()),
        p[4].dateline
          ? t
            ? (t.p(p, c), c & 16 && b(t, 1))
            : ((t = ks(p)), t.c(), b(t, 1), t.m(s, null))
          : t &&
            (W(),
            H(t, 1, 1, () => {
              t = null;
            }),
            X());
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
function rs(l) {
  let s, e, n;
  const a = l[6].byline,
    t = F(a, l, l[5], ps);
  return {
    c() {
      (s = _('div')), (e = _('div')), t && t.c(), this.h();
    },
    l(p) {
      s = d(p, 'DIV', { class: !0 });
      var c = $(s);
      e = d(c, 'DIV', { class: !0 });
      var w = $(e);
      t && t.l(w), w.forEach(i), c.forEach(i), this.h();
    },
    h() {
      y(e, 'class', 'byline'), y(s, 'class', 'byline-container');
    },
    m(p, c) {
      m(p, s, c), h(s, e), t && t.m(e, null), (n = !0);
    },
    p(p, c) {
      t &&
        t.p &&
        (!n || c & 32) &&
        z(t, a, p, p[5], n ? Q(a, p[5], c, bs) : K(p[5]), ps);
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
function ks(l) {
  let s, e, n;
  const a = l[6].dateline,
    t = F(a, l, l[5], es);
  return {
    c() {
      (s = _('div')), (e = _('div')), t && t.c(), this.h();
    },
    l(p) {
      s = d(p, 'DIV', { class: !0 });
      var c = $(s);
      e = d(c, 'DIV', { class: !0 });
      var w = $(e);
      t && t.l(w), w.forEach(i), c.forEach(i), this.h();
    },
    h() {
      y(e, 'class', 'published'), y(s, 'class', 'dateline-container');
    },
    m(p, c) {
      m(p, s, c), h(s, e), t && t.m(e, null), (n = !0);
    },
    p(p, c) {
      t &&
        t.p &&
        (!n || c & 32) &&
        z(t, a, p, p[5], n ? Q(a, p[5], c, $s) : K(p[5]), es);
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
    g = F(P, l, l[5], os);
  let v = l[2] && cs(l);
  const T = [ys, Ps],
    D = [];
  function N(u, E) {
    return u[4].hed ? 0 : 1;
  }
  (t = N(l)), (p = D[t] = T[t](l));
  let r = l[1] && is(l),
    k = (l[4].byline || l[4].dateline) && us(l);
  return {
    c() {
      (s = _('section')),
        g && g.c(),
        (e = I()),
        (n = _('div')),
        v && v.c(),
        (a = I()),
        p.c(),
        (c = I()),
        r && r.c(),
        (w = I()),
        k && k.c(),
        this.h();
    },
    l(u) {
      s = d(u, 'SECTION', { class: !0 });
      var E = $(s);
      g && g.l(E), (e = C(E)), (n = d(E, 'DIV', { class: !0 }));
      var j = $(n);
      v && v.l(j),
        (a = C(j)),
        p.l(j),
        (c = C(j)),
        r && r.l(j),
        j.forEach(i),
        (w = C(E)),
        k && k.l(E),
        E.forEach(i),
        this.h();
    },
    h() {
      y(n, 'class', 'title'), y(s, 'class', 'headline');
    },
    m(u, E) {
      m(u, s, E),
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
        z(g, P, u, u[5], G ? Q(P, u[5], E, Es) : K(u[5]), os),
        u[2]
          ? v
            ? v.p(u, E)
            : ((v = cs(u)), v.c(), v.m(n, a))
          : v && (v.d(1), (v = null));
      let j = t;
      (t = N(u)),
        t === j
          ? D[t].p(u, E)
          : (W(),
            H(D[j], 1, 1, () => {
              D[j] = null;
            }),
            X(),
            (p = D[t]),
            p ? p.p(u, E) : ((p = D[t] = T[t](u)), p.c()),
            b(p, 1),
            p.m(n, c)),
        u[1]
          ? r
            ? r.p(u, E)
            : ((r = is(u)), r.c(), r.m(n, null))
          : r && (r.d(1), (r = null)),
        u[4].byline || u[4].dateline
          ? k
            ? (k.p(u, E), E & 16 && b(k, 1))
            : ((k = us(u)), k.c(), b(k, 1), k.m(s, null))
          : k &&
            (W(),
            H(k, 1, 1, () => {
              k = null;
            }),
            X());
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
function js(l, s, e) {
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
class ss extends ns {
  constructor(s) {
    super();
    as(this, s, js, Hs, ts, { hed: 0, dek: 1, section: 2, sectionColour: 3 });
  }
}
function Is(l) {
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
        M(s, n, a), (e = !0);
      },
      p: Y,
      i(n) {
        e || (b(s.$$.fragment, n), (e = !0));
      },
      o(n) {
        H(s.$$.fragment, n), (e = !1);
      },
      d(n) {
        O(s, n);
      },
    }
  );
}
function Cs(l) {
  let s, e, n, a;
  return {
    c() {
      (s = _('span')),
        (e = R('By ')),
        (n = _('strong')),
        (a = R('Peppa Pig')),
        this.h();
    },
    l(t) {
      s = d(t, 'SPAN', { slot: !0 });
      var p = $(s);
      (e = S(p, 'By ')), (n = d(p, 'STRONG', {}));
      var c = $(n);
      (a = S(c, 'Peppa Pig')), c.forEach(i), p.forEach(i), this.h();
    },
    h() {
      y(s, 'slot', 'byline');
    },
    m(t, p) {
      m(t, s, p), h(s, e), h(s, n), h(n, a);
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
      (s = _('span')), (e = R('Published Jan. 1, 2020')), this.h();
    },
    l(n) {
      s = d(n, 'SPAN', { slot: !0 });
      var a = $(s);
      (e = S(a, 'Published Jan. 1, 2020')), a.forEach(i), this.h();
    },
    h() {
      y(s, 'slot', 'dateline');
    },
    m(n, a) {
      m(n, s, a), h(s, e);
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
        M(s, n, a), (e = !0);
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
        O(s, n);
      },
    }
  );
}
function Ds(l) {
  let s, e;
  return {
    c() {
      (s = _('img')), this.h();
    },
    l(n) {
      (s = d(n, 'IMG', { slot: !0, src: !0 })), this.h();
    },
    h() {
      y(s, 'slot', 'crown'),
        hs(s.src, (e = `${vs}/images/crown.png`)) || y(s, 'src', e);
    },
    m(n, a) {
      m(n, s, a);
    },
    p: Y,
    d(n) {
      n && i(s);
    },
  };
}
function Rs(l) {
  let s, e;
  return {
    c() {
      (s = _('h2')), (e = R('Europa')), this.h();
    },
    l(n) {
      s = d(n, 'H2', { slot: !0, class: !0 });
      var a = $(s);
      (e = S(a, 'Europa')), a.forEach(i), this.h();
    },
    h() {
      y(s, 'slot', 'hed'), y(s, 'class', 'spaced font-serif');
    },
    m(n, a) {
      m(n, s, a), h(s, e);
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
      (s = _('span')), (e = R('Published Jan. 1, 2020')), this.h();
    },
    l(n) {
      s = d(n, 'SPAN', { slot: !0 });
      var a = $(s);
      (e = S(a, 'Published Jan. 1, 2020')), a.forEach(i), this.h();
    },
    h() {
      y(s, 'slot', 'dateline');
    },
    m(n, a) {
      m(n, s, a), h(s, e);
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
        M(s, n, a), (e = !0);
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
        O(s, n);
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
    j,
    J,
    q;
  return (
    (g = new x({ props: { $$slots: { default: [Is] }, $$scope: { ctx: l } } })),
    (r = new x({ props: { $$slots: { default: [Ts] }, $$scope: { ctx: l } } })),
    (J = new x({ props: { $$slots: { default: [Js] }, $$scope: { ctx: l } } })),
    {
      c() {
        (s = _('section')),
          (e = _('h2')),
          (n = R(fs)),
          (a = I()),
          (t = _('p')),
          (p = R(gs)),
          (c = I()),
          (w = _('pre')),
          (P = I()),
          A(g.$$.fragment),
          (v = I()),
          (T = _('pre')),
          (N = I()),
          A(r.$$.fragment),
          (k = I()),
          (u = _('pre')),
          (j = I()),
          A(J.$$.fragment),
          this.h();
      },
      l(o) {
        s = d(o, 'SECTION', {});
        var f = $(s);
        e = d(f, 'H2', {});
        var B = $(e);
        (n = S(B, fs)), B.forEach(i), (a = C(f)), (t = d(f, 'P', {}));
        var L = $(t);
        (p = S(L, gs)),
          L.forEach(i),
          f.forEach(i),
          (c = C(o)),
          (w = d(o, 'PRE', { class: !0 }));
        var U = $(w);
        U.forEach(i),
          (P = C(o)),
          V(g.$$.fragment, o),
          (v = C(o)),
          (T = d(o, 'PRE', { class: !0 }));
        var _s = $(T);
        _s.forEach(i),
          (N = C(o)),
          V(r.$$.fragment, o),
          (k = C(o)),
          (u = d(o, 'PRE', { class: !0 }));
        var ds = $(u);
        ds.forEach(i), (j = C(o)), V(J.$$.fragment, o), this.h();
      },
      h() {
        y(w, 'class', 'language-svelte'),
          y(T, 'class', 'language-svelte'),
          y(u, 'class', 'language-svelte');
      },
      m(o, f) {
        m(o, s, f),
          h(s, e),
          h(e, n),
          h(s, a),
          h(s, t),
          h(t, p),
          m(o, c, f),
          m(o, w, f),
          (w.innerHTML = G),
          m(o, P, f),
          M(g, o, f),
          m(o, v, f),
          m(o, T, f),
          (T.innerHTML = D),
          m(o, N, f),
          M(r, o, f),
          m(o, k, f),
          m(o, u, f),
          (u.innerHTML = E),
          m(o, j, f),
          M(J, o, f),
          (q = !0);
      },
      p(o, [f]) {
        const B = {};
        f & 1 && (B.$$scope = { dirty: f, ctx: o }), g.$set(B);
        const L = {};
        f & 1 && (L.$$scope = { dirty: f, ctx: o }), r.$set(L);
        const U = {};
        f & 1 && (U.$$scope = { dirty: f, ctx: o }), J.$set(U);
      },
      i(o) {
        q ||
          (b(g.$$.fragment, o),
          b(r.$$.fragment, o),
          b(J.$$.fragment, o),
          (q = !0));
      },
      o(o) {
        H(g.$$.fragment, o), H(r.$$.fragment, o), H(J.$$.fragment, o), (q = !1);
      },
      d(o) {
        o && i(s),
          o && i(c),
          o && i(w),
          o && i(P),
          O(g, o),
          o && i(v),
          o && i(T),
          o && i(N),
          O(r, o),
          o && i(k),
          o && i(u),
          o && i(j),
          O(J, o);
      },
    }
  );
}
const As = {
    title: 'Headline',
    description: 'Titles & bylines & datelines, oh my!',
    slug: 'headline',
  },
  { title: fs, description: gs, slug: Bs } = As;
class Ls extends ns {
  constructor(s) {
    super();
    as(this, s, null, Ns, ts, {});
  }
}
export { Ls as default, As as metadata };
