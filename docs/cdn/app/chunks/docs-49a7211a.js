import {
  S as ns,
  i as ts,
  s as es,
  D as B,
  e as v,
  c as b,
  a as j,
  d as i,
  b as f,
  Y as h,
  f as _,
  t as O,
  g as q,
  H as C,
  h as J,
  k as D,
  n as G,
  E as K,
  F as Q,
  G as W,
  r as ps,
  u as y,
  w as os,
  x as P,
  Z as hs,
  I as F,
  j as N,
  m as U,
  o as V,
  v as Y,
  U as X,
} from './vendor-b82e5b83.js';
import { D as x } from './index-75ffd758.js';
import { a as ss } from './paths-6758d194.js';
const _s = (p) => ({}),
  ls = (p) => ({}),
  ds = (p) => ({}),
  cs = (p) => ({}),
  vs = (p) => ({}),
  is = (p) => ({});
function us(p) {
  let s;
  return {
    c() {
      (s = v('div')), this.h();
    },
    l(t) {
      (s = b(t, 'DIV', { class: !0 })), j(s).forEach(i), this.h();
    },
    h() {
      f(s, 'class', 'overlay'),
        h(s, 'lightest', p[5] === 'lightest'),
        h(s, 'lighter', p[5] === 'lighter'),
        h(s, 'light', p[5] === 'light'),
        h(s, 'dark', p[5] === 'dark'),
        h(s, 'darker', p[5] === 'darker'),
        h(s, 'darkest', p[5] === 'darkest');
    },
    m(t, a) {
      _(t, s, a);
    },
    p(t, a) {
      a & 32 && h(s, 'lightest', t[5] === 'lightest'),
        a & 32 && h(s, 'lighter', t[5] === 'lighter'),
        a & 32 && h(s, 'light', t[5] === 'light'),
        a & 32 && h(s, 'dark', t[5] === 'dark'),
        a & 32 && h(s, 'darker', t[5] === 'darker'),
        a & 32 && h(s, 'darkest', t[5] === 'darkest');
    },
    d(t) {
      t && i(s);
    },
  };
}
function rs(p) {
  let s, t, a;
  return {
    c() {
      (s = v('p')), (t = O(p[3])), this.h();
    },
    l(n) {
      s = b(n, 'P', { class: !0 });
      var o = j(s);
      (t = q(o, p[3])), o.forEach(i), this.h();
    },
    h() {
      f(s, 'class', (a = `section-title color-${p[4]} text-shadow`));
    },
    m(n, o) {
      _(n, s, o), C(s, t);
    },
    p(n, o) {
      o & 8 && J(t, n[3]),
        o & 16 &&
          a !== (a = `section-title color-${n[4]} text-shadow`) &&
          f(s, 'class', a);
    },
    d(n) {
      n && i(s);
    },
  };
}
function bs(p) {
  let s, t, a;
  return {
    c() {
      (s = v('h2')), (t = O(p[0])), this.h();
    },
    l(n) {
      s = b(n, 'H2', { class: !0 });
      var o = j(s);
      (t = q(o, p[0])), o.forEach(i), this.h();
    },
    h() {
      f(s, 'class', (a = `text-shadow-darker color-${p[1]} important`));
    },
    m(n, o) {
      _(n, s, o), C(s, t);
    },
    p(n, o) {
      o & 1 && J(t, n[0]),
        o & 2 &&
          a !== (a = `text-shadow-darker color-${n[1]} important`) &&
          f(s, 'class', a);
    },
    i: F,
    o: F,
    d(n) {
      n && i(s);
    },
  };
}
function ws(p) {
  let s;
  const t = p[12].hed,
    a = B(t, p, p[11], cs);
  return {
    c() {
      a && a.c();
    },
    l(n) {
      a && a.l(n);
    },
    m(n, o) {
      a && a.m(n, o), (s = !0);
    },
    p(n, o) {
      a &&
        a.p &&
        (!s || o & 2048) &&
        K(a, t, n, n[11], s ? W(t, n[11], o, ds) : Q(n[11]), cs);
    },
    i(n) {
      s || (P(a, n), (s = !0));
    },
    o(n) {
      y(a, n), (s = !1);
    },
    d(n) {
      a && a.d(n);
    },
  };
}
function $s(p) {
  let s, t;
  return {
    c() {
      (s = v('p')), (t = O(p[2])), this.h();
    },
    l(a) {
      s = b(a, 'P', { class: !0 });
      var n = j(s);
      (t = q(n, p[2])), n.forEach(i), this.h();
    },
    h() {
      f(s, 'class', 'text-shadow-darkest');
    },
    m(a, n) {
      _(a, s, n), C(s, t);
    },
    p(a, n) {
      n & 4 && J(t, a[2]);
    },
    i: F,
    o: F,
    d(a) {
      a && i(s);
    },
  };
}
function Es(p) {
  let s;
  const t = p[12].dek,
    a = B(t, p, p[11], ls);
  return {
    c() {
      a && a.c();
    },
    l(n) {
      a && a.l(n);
    },
    m(n, o) {
      a && a.m(n, o), (s = !0);
    },
    p(n, o) {
      a &&
        a.p &&
        (!s || o & 2048) &&
        K(a, t, n, n[11], s ? W(t, n[11], o, _s) : Q(n[11]), ls);
    },
    i(n) {
      s || (P(a, n), (s = !0));
    },
    o(n) {
      y(a, n), (s = !1);
    },
    d(n) {
      a && a.d(n);
    },
  };
}
function Cs(p) {
  let s, t, a, n, o, A, g, m, M, r, u, H;
  const T = p[12].image,
    d = B(T, p, p[11], is);
  let k = p[5] && us(p),
    l = p[3] && rs(p);
  const R = [ws, bs],
    $ = [];
  function Z(e, c) {
    return e[10].hed ? 0 : 1;
  }
  (g = Z(p)), (m = $[g] = R[g](p));
  const S = [Es, $s],
    w = [];
  function L(e, c) {
    return e[10].dek ? 0 : e[2] ? 1 : -1;
  }
  return (
    ~(r = L(p)) && (u = w[r] = S[r](p)),
    {
      c() {
        (s = v('section')),
          (t = v('figure')),
          d && d.c(),
          (a = D()),
          k && k.c(),
          (n = D()),
          (o = v('div')),
          l && l.c(),
          (A = D()),
          m.c(),
          (M = D()),
          u && u.c(),
          this.h();
      },
      l(e) {
        s = b(e, 'SECTION', { class: !0 });
        var c = j(s);
        t = b(c, 'FIGURE', {});
        var I = j(t);
        d && d.l(I),
          (a = G(I)),
          k && k.l(I),
          I.forEach(i),
          (n = G(c)),
          (o = b(c, 'DIV', { class: !0 }));
        var E = j(o);
        l && l.l(E),
          (A = G(E)),
          m.l(E),
          (M = G(E)),
          u && u.l(E),
          E.forEach(i),
          c.forEach(i),
          this.h();
      },
      h() {
        f(o, 'class', 'title color-white'),
          h(o, 'top', p[6]),
          h(o, 'bottom', p[7]),
          h(o, 'left', p[8]),
          h(o, 'right', p[9]),
          f(s, 'class', 'hero-title');
      },
      m(e, c) {
        _(e, s, c),
          C(s, t),
          d && d.m(t, null),
          C(t, a),
          k && k.m(t, null),
          C(s, n),
          C(s, o),
          l && l.m(o, null),
          C(o, A),
          $[g].m(o, null),
          C(o, M),
          ~r && w[r].m(o, null),
          (H = !0);
      },
      p(e, [c]) {
        d &&
          d.p &&
          (!H || c & 2048) &&
          K(d, T, e, e[11], H ? W(T, e[11], c, vs) : Q(e[11]), is),
          e[5]
            ? k
              ? k.p(e, c)
              : ((k = us(e)), k.c(), k.m(t, null))
            : k && (k.d(1), (k = null)),
          e[3]
            ? l
              ? l.p(e, c)
              : ((l = rs(e)), l.c(), l.m(o, A))
            : l && (l.d(1), (l = null));
        let I = g;
        (g = Z(e)),
          g === I
            ? $[g].p(e, c)
            : (ps(),
              y($[I], 1, 1, () => {
                $[I] = null;
              }),
              os(),
              (m = $[g]),
              m ? m.p(e, c) : ((m = $[g] = R[g](e)), m.c()),
              P(m, 1),
              m.m(o, M));
        let E = r;
        (r = L(e)),
          r === E
            ? ~r && w[r].p(e, c)
            : (u &&
                (ps(),
                y(w[E], 1, 1, () => {
                  w[E] = null;
                }),
                os()),
              ~r
                ? ((u = w[r]),
                  u ? u.p(e, c) : ((u = w[r] = S[r](e)), u.c()),
                  P(u, 1),
                  u.m(o, null))
                : (u = null)),
          c & 64 && h(o, 'top', e[6]),
          c & 128 && h(o, 'bottom', e[7]),
          c & 256 && h(o, 'left', e[8]),
          c & 512 && h(o, 'right', e[9]);
      },
      i(e) {
        H || (P(d, e), P(m), P(u), (H = !0));
      },
      o(e) {
        y(d, e), y(m), y(u), (H = !1);
      },
      d(e) {
        e && i(s),
          d && d.d(e),
          k && k.d(),
          l && l.d(),
          $[g].d(),
          ~r && w[r].d();
      },
    }
  );
}
function js(p, s, t) {
  let { $$slots: a = {}, $$scope: n } = s;
  const o = hs(a);
  let { hed: A = 'Reuters Graphics Interactive' } = s,
    { hedColour: g = 'white' } = s,
    { dek: m } = s,
    { section: M } = s,
    { sectionColour: r = 'red' } = s,
    { overlay: u = !0 } = s,
    { top: H = !1 } = s,
    { bottom: T = !1 } = s,
    { left: d = !1 } = s,
    { right: k = !1 } = s;
  return (
    (p.$$set = (l) => {
      'hed' in l && t(0, (A = l.hed)),
        'hedColour' in l && t(1, (g = l.hedColour)),
        'dek' in l && t(2, (m = l.dek)),
        'section' in l && t(3, (M = l.section)),
        'sectionColour' in l && t(4, (r = l.sectionColour)),
        'overlay' in l && t(5, (u = l.overlay)),
        'top' in l && t(6, (H = l.top)),
        'bottom' in l && t(7, (T = l.bottom)),
        'left' in l && t(8, (d = l.left)),
        'right' in l && t(9, (k = l.right)),
        '$$scope' in l && t(11, (n = l.$$scope));
    }),
    [A, g, m, M, r, u, H, T, d, k, o, n, a]
  );
}
class as extends ns {
  constructor(s) {
    super();
    ts(this, s, js, Cs, es, {
      hed: 0,
      hedColour: 1,
      dek: 2,
      section: 3,
      sectionColour: 4,
      overlay: 5,
      top: 6,
      bottom: 7,
      left: 8,
      right: 9,
    });
  }
}
function Hs(p) {
  let s, t;
  return {
    c() {
      (s = v('img')), this.h();
    },
    l(a) {
      (s = b(a, 'IMG', { slot: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      f(s, 'slot', 'image'),
        X(s.src, (t = `${ss}/images/polar.jpg`)) || f(s, 'src', t),
        f(s, 'alt', 'A polar bear');
    },
    m(a, n) {
      _(a, s, n);
    },
    p: F,
    d(a) {
      a && i(s);
    },
  };
}
function Ts(p) {
  let s, t;
  return (
    (s = new as({
      props: {
        hed: 'Eisb\xE4r',
        section: 'Climate Change',
        dek: 'The last of the white bears',
        $$slots: { image: [Hs] },
        $$scope: { ctx: p },
      },
    })),
    {
      c() {
        N(s.$$.fragment);
      },
      l(a) {
        U(s.$$.fragment, a);
      },
      m(a, n) {
        V(s, a, n), (t = !0);
      },
      p(a, n) {
        const o = {};
        n & 1 && (o.$$scope = { dirty: n, ctx: a }), s.$set(o);
      },
      i(a) {
        t || (P(s.$$.fragment, a), (t = !0));
      },
      o(a) {
        y(s.$$.fragment, a), (t = !1);
      },
      d(a) {
        Y(s, a);
      },
    }
  );
}
function Is(p) {
  let s, t;
  return {
    c() {
      (s = v('img')), this.h();
    },
    l(a) {
      (s = b(a, 'IMG', { slot: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      f(s, 'slot', 'image'),
        X(s.src, (t = `${ss}/images/polar.jpg`)) || f(s, 'src', t),
        f(s, 'alt', 'A polar bear');
    },
    m(a, n) {
      _(a, s, n);
    },
    p: F,
    d(a) {
      a && i(s);
    },
  };
}
function ys(p) {
  let s, t;
  return (
    (s = new as({
      props: {
        hed: 'Eisb\xE4r',
        section: 'Climate Change',
        dek: 'The last of the white bears',
        overlay: 'darker',
        bottom: !0,
        left: !0,
        $$slots: { image: [Is] },
        $$scope: { ctx: p },
      },
    })),
    {
      c() {
        N(s.$$.fragment);
      },
      l(a) {
        U(s.$$.fragment, a);
      },
      m(a, n) {
        V(s, a, n), (t = !0);
      },
      p(a, n) {
        const o = {};
        n & 1 && (o.$$scope = { dirty: n, ctx: a }), s.$set(o);
      },
      i(a) {
        t || (P(s.$$.fragment, a), (t = !0));
      },
      o(a) {
        y(s.$$.fragment, a), (t = !1);
      },
      d(a) {
        Y(s, a);
      },
    }
  );
}
function Ps(p) {
  let s, t;
  return {
    c() {
      (s = v('img')), this.h();
    },
    l(a) {
      (s = b(a, 'IMG', { slot: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      f(s, 'slot', 'image'),
        X(s.src, (t = `${ss}/images/polar.jpg`)) || f(s, 'src', t),
        f(s, 'alt', 'A polar bear');
    },
    m(a, n) {
      _(a, s, n);
    },
    p: F,
    d(a) {
      a && i(s);
    },
  };
}
function As(p) {
  let s, t;
  return {
    c() {
      (s = v('h2')), (t = O('Eisbaer')), this.h();
    },
    l(a) {
      s = b(a, 'H2', { slot: !0, class: !0 });
      var n = j(s);
      (t = q(n, 'Eisbaer')), n.forEach(i), this.h();
    },
    h() {
      f(s, 'slot', 'hed'),
        f(s, 'class', 'uppercase spaced-more color-blue text-shadow-lighter');
    },
    m(a, n) {
      _(a, s, n), C(s, t);
    },
    d(a) {
      a && i(s);
    },
  };
}
function Ds(p) {
  let s, t;
  return {
    c() {
      (s = v('p')), (t = O('The last of the white bears')), this.h();
    },
    l(a) {
      s = b(a, 'P', { slot: !0, class: !0 });
      var n = j(s);
      (t = q(n, 'The last of the white bears')), n.forEach(i), this.h();
    },
    h() {
      f(s, 'slot', 'dek'), f(s, 'class', 'color-blue text-shadow-lighter');
    },
    m(a, n) {
      _(a, s, n), C(s, t);
    },
    d(a) {
      a && i(s);
    },
  };
}
function Gs(p) {
  let s, t;
  return (
    (s = new as({
      props: {
        section: 'Climate Change',
        overlay: !1,
        $$slots: { dek: [Ds], hed: [As], image: [Ps] },
        $$scope: { ctx: p },
      },
    })),
    {
      c() {
        N(s.$$.fragment);
      },
      l(a) {
        U(s.$$.fragment, a);
      },
      m(a, n) {
        V(s, a, n), (t = !0);
      },
      p(a, n) {
        const o = {};
        n & 1 && (o.$$scope = { dirty: n, ctx: a }), s.$set(o);
      },
      i(a) {
        t || (P(s.$$.fragment, a), (t = !0));
      },
      o(a) {
        y(s.$$.fragment, a), (t = !1);
      },
      d(a) {
        Y(s, a);
      },
    }
  );
}
function Ms(p) {
  let s,
    t,
    a,
    n,
    o,
    A,
    g,
    m,
    M = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Headline <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/paths'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Hero</span> <span class="token attr-name">hed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Eisb\xE4r<span class="token punctuation">"</span></span> <span class="token attr-name">section</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Climate Change<span class="token punctuation">"</span></span> <span class="token attr-name">dek</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>The last of the white bears<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>image<span class="token punctuation">"</span></span> <span class="token attr-name">src="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/polar.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A polar bear<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Hero</span><span class="token punctuation">></span></span></code>`,
    r,
    u,
    H,
    T,
    d = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Headline <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/paths'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- Place the title with top, bottom, left &amp; right props--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Hero</span>
  <span class="token attr-name">hed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Eisb\xE4r<span class="token punctuation">"</span></span>
  <span class="token attr-name">section</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Climate Change<span class="token punctuation">"</span></span>
  <span class="token attr-name">dek</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>The last of the white bears<span class="token punctuation">"</span></span>
  <span class="token attr-name">overlay="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'darker'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">bottom</span>
  <span class="token attr-name">left</span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>image<span class="token punctuation">"</span></span> <span class="token attr-name">src="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/polar.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A polar bear<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Hero</span><span class="token punctuation">></span></span></code>`,
    k,
    l,
    R,
    $,
    Z = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Headline <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/paths'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Hero</span> <span class="token attr-name">section</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Climate Change<span class="token punctuation">"</span></span> <span class="token attr-name">overlay="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>image<span class="token punctuation">"</span></span> <span class="token attr-name">src="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/polar.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A polar bear<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token comment">&lt;!-- Override the hed and/or dek with named slots --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hed<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>uppercase spaced-more color-blue text-shadow-lighter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Eisbaer
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dek<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>color-blue text-shadow-lighter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    The last of the white bears
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Hero</span><span class="token punctuation">></span></span></code>`,
    S,
    w,
    L;
  return (
    (u = new x({ props: { $$slots: { default: [Ts] }, $$scope: { ctx: p } } })),
    (l = new x({ props: { $$slots: { default: [ys] }, $$scope: { ctx: p } } })),
    (w = new x({ props: { $$slots: { default: [Gs] }, $$scope: { ctx: p } } })),
    {
      c() {
        (s = v('section')),
          (t = v('h2')),
          (a = O(ks)),
          (n = D()),
          (o = v('p')),
          (A = O(fs)),
          (g = D()),
          (m = v('pre')),
          (r = D()),
          N(u.$$.fragment),
          (H = D()),
          (T = v('pre')),
          (k = D()),
          N(l.$$.fragment),
          (R = D()),
          ($ = v('pre')),
          (S = D()),
          N(w.$$.fragment),
          this.h();
      },
      l(e) {
        s = b(e, 'SECTION', {});
        var c = j(s);
        t = b(c, 'H2', {});
        var I = j(t);
        (a = q(I, ks)), I.forEach(i), (n = G(c)), (o = b(c, 'P', {}));
        var E = j(o);
        (A = q(E, fs)),
          E.forEach(i),
          c.forEach(i),
          (g = G(e)),
          (m = b(e, 'PRE', { class: !0 }));
        var z = j(m);
        z.forEach(i),
          (r = G(e)),
          U(u.$$.fragment, e),
          (H = G(e)),
          (T = b(e, 'PRE', { class: !0 }));
        var ms = j(T);
        ms.forEach(i),
          (k = G(e)),
          U(l.$$.fragment, e),
          (R = G(e)),
          ($ = b(e, 'PRE', { class: !0 }));
        var gs = j($);
        gs.forEach(i), (S = G(e)), U(w.$$.fragment, e), this.h();
      },
      h() {
        f(m, 'class', 'language-svelte'),
          f(T, 'class', 'language-svelte'),
          f($, 'class', 'language-svelte');
      },
      m(e, c) {
        _(e, s, c),
          C(s, t),
          C(t, a),
          C(s, n),
          C(s, o),
          C(o, A),
          _(e, g, c),
          _(e, m, c),
          (m.innerHTML = M),
          _(e, r, c),
          V(u, e, c),
          _(e, H, c),
          _(e, T, c),
          (T.innerHTML = d),
          _(e, k, c),
          V(l, e, c),
          _(e, R, c),
          _(e, $, c),
          ($.innerHTML = Z),
          _(e, S, c),
          V(w, e, c),
          (L = !0);
      },
      p(e, [c]) {
        const I = {};
        c & 1 && (I.$$scope = { dirty: c, ctx: e }), u.$set(I);
        const E = {};
        c & 1 && (E.$$scope = { dirty: c, ctx: e }), l.$set(E);
        const z = {};
        c & 1 && (z.$$scope = { dirty: c, ctx: e }), w.$set(z);
      },
      i(e) {
        L ||
          (P(u.$$.fragment, e),
          P(l.$$.fragment, e),
          P(w.$$.fragment, e),
          (L = !0));
      },
      o(e) {
        y(u.$$.fragment, e), y(l.$$.fragment, e), y(w.$$.fragment, e), (L = !1);
      },
      d(e) {
        e && i(s),
          e && i(g),
          e && i(m),
          e && i(r),
          Y(u, e),
          e && i(H),
          e && i(T),
          e && i(k),
          Y(l, e),
          e && i(R),
          e && i($),
          e && i(S),
          Y(w, e);
      },
    }
  );
}
const Rs = {
    title: 'Hero',
    description: 'A headline over a hero image',
    slug: 'hero',
  },
  { title: ks, description: fs, slug: qs } = Rs;
class Fs extends ns {
  constructor(s) {
    super();
    ts(this, s, null, Ms, es, {});
  }
}
export { Fs as default, Rs as metadata };
