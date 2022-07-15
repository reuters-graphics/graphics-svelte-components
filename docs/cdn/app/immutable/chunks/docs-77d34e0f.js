import {
  S as rs,
  i as ks,
  s as fs,
  F as z,
  e as v,
  c as b,
  a as H,
  d as i,
  b as f,
  Z as h,
  g as _,
  t as O,
  h as F,
  J as C,
  j as K,
  k as G,
  m as M,
  G as Q,
  H as W,
  I as X,
  n as ns,
  o as y,
  p as ts,
  q as P,
  $ as hs,
  E as R,
  w as N,
  x as V,
  y as B,
  B as J,
  Y as x,
} from './index-83a5d9f9.js';
import { D as Z } from './index-16ec1060.js';
import { a as ss } from './paths-396f020f.js';
const _s = (p) => ({}),
  es = (p) => ({}),
  ds = (p) => ({}),
  ps = (p) => ({}),
  vs = (p) => ({}),
  os = (p) => ({});
function ls(p) {
  let s;
  return {
    c() {
      (s = v('div')), this.h();
    },
    l(t) {
      (s = b(t, 'DIV', { class: !0 })), H(s).forEach(i), this.h();
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
function cs(p) {
  let s, t, a;
  return {
    c() {
      (s = v('p')), (t = O(p[3])), this.h();
    },
    l(n) {
      s = b(n, 'P', { class: !0 });
      var o = H(s);
      (t = F(o, p[3])), o.forEach(i), this.h();
    },
    h() {
      f(s, 'class', (a = `section-title color-${p[4]} text-shadow`));
    },
    m(n, o) {
      _(n, s, o), C(s, t);
    },
    p(n, o) {
      o & 8 && K(t, n[3]),
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
      var o = H(s);
      (t = F(o, p[0])), o.forEach(i), this.h();
    },
    h() {
      f(s, 'class', (a = `text-shadow-darker color-${p[1]} important`));
    },
    m(n, o) {
      _(n, s, o), C(s, t);
    },
    p(n, o) {
      o & 1 && K(t, n[0]),
        o & 2 &&
          a !== (a = `text-shadow-darker color-${n[1]} important`) &&
          f(s, 'class', a);
    },
    i: R,
    o: R,
    d(n) {
      n && i(s);
    },
  };
}
function ws(p) {
  let s;
  const t = p[12].hed,
    a = z(t, p, p[11], ps);
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
        Q(a, t, n, n[11], s ? X(t, n[11], o, ds) : W(n[11]), ps);
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
      var n = H(s);
      (t = F(n, p[2])), n.forEach(i), this.h();
    },
    h() {
      f(s, 'class', 'text-shadow-darkest');
    },
    m(a, n) {
      _(a, s, n), C(s, t);
    },
    p(a, n) {
      n & 4 && K(t, a[2]);
    },
    i: R,
    o: R,
    d(a) {
      a && i(s);
    },
  };
}
function Es(p) {
  let s;
  const t = p[12].dek,
    a = z(t, p, p[11], es);
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
        Q(a, t, n, n[11], s ? X(t, n[11], o, _s) : W(n[11]), es);
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
  let s, t, a, n, o, A, g, m, D, r, u, j;
  const T = p[12].image,
    d = z(T, p, p[11], os);
  let k = p[5] && ls(p),
    l = p[3] && cs(p);
  const S = [ws, bs],
    $ = [];
  function U(e, c) {
    return e[10].hed ? 0 : 1;
  }
  (g = U(p)), (m = $[g] = S[g](p));
  const q = [Es, $s],
    w = [];
  function L(e, c) {
    return e[10].dek ? 0 : e[2] ? 1 : -1;
  }
  return (
    ~(r = L(p)) && (u = w[r] = q[r](p)),
    {
      c() {
        (s = v('section')),
          (t = v('figure')),
          d && d.c(),
          (a = G()),
          k && k.c(),
          (n = G()),
          (o = v('div')),
          l && l.c(),
          (A = G()),
          m.c(),
          (D = G()),
          u && u.c(),
          this.h();
      },
      l(e) {
        s = b(e, 'SECTION', { class: !0 });
        var c = H(s);
        t = b(c, 'FIGURE', {});
        var I = H(t);
        d && d.l(I),
          (a = M(I)),
          k && k.l(I),
          I.forEach(i),
          (n = M(c)),
          (o = b(c, 'DIV', { class: !0 }));
        var E = H(o);
        l && l.l(E),
          (A = M(E)),
          m.l(E),
          (D = M(E)),
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
          C(o, D),
          ~r && w[r].m(o, null),
          (j = !0);
      },
      p(e, [c]) {
        d &&
          d.p &&
          (!j || c & 2048) &&
          Q(d, T, e, e[11], j ? X(T, e[11], c, vs) : W(e[11]), os),
          e[5]
            ? k
              ? k.p(e, c)
              : ((k = ls(e)), k.c(), k.m(t, null))
            : k && (k.d(1), (k = null)),
          e[3]
            ? l
              ? l.p(e, c)
              : ((l = cs(e)), l.c(), l.m(o, A))
            : l && (l.d(1), (l = null));
        let I = g;
        (g = U(e)),
          g === I
            ? $[g].p(e, c)
            : (ns(),
              y($[I], 1, 1, () => {
                $[I] = null;
              }),
              ts(),
              (m = $[g]),
              m ? m.p(e, c) : ((m = $[g] = S[g](e)), m.c()),
              P(m, 1),
              m.m(o, D));
        let E = r;
        (r = L(e)),
          r === E
            ? ~r && w[r].p(e, c)
            : (u &&
                (ns(),
                y(w[E], 1, 1, () => {
                  w[E] = null;
                }),
                ts()),
              ~r
                ? ((u = w[r]),
                  u ? u.p(e, c) : ((u = w[r] = q[r](e)), u.c()),
                  P(u, 1),
                  u.m(o, null))
                : (u = null)),
          c & 64 && h(o, 'top', e[6]),
          c & 128 && h(o, 'bottom', e[7]),
          c & 256 && h(o, 'left', e[8]),
          c & 512 && h(o, 'right', e[9]);
      },
      i(e) {
        j || (P(d, e), P(m), P(u), (j = !0));
      },
      o(e) {
        y(d, e), y(m), y(u), (j = !1);
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
function Hs(p, s, t) {
  let { $$slots: a = {}, $$scope: n } = s;
  const o = hs(a);
  let { hed: A = 'Reuters Graphics Interactive' } = s,
    { hedColour: g = 'white' } = s,
    { dek: m } = s,
    { section: D } = s,
    { sectionColour: r = 'red' } = s,
    { overlay: u = !0 } = s,
    { top: j = !1 } = s,
    { bottom: T = !1 } = s,
    { left: d = !1 } = s,
    { right: k = !1 } = s;
  return (
    (p.$$set = (l) => {
      'hed' in l && t(0, (A = l.hed)),
        'hedColour' in l && t(1, (g = l.hedColour)),
        'dek' in l && t(2, (m = l.dek)),
        'section' in l && t(3, (D = l.section)),
        'sectionColour' in l && t(4, (r = l.sectionColour)),
        'overlay' in l && t(5, (u = l.overlay)),
        'top' in l && t(6, (j = l.top)),
        'bottom' in l && t(7, (T = l.bottom)),
        'left' in l && t(8, (d = l.left)),
        'right' in l && t(9, (k = l.right)),
        '$$scope' in l && t(11, (n = l.$$scope));
    }),
    [A, g, m, D, r, u, j, T, d, k, o, n, a]
  );
}
class as extends rs {
  constructor(s) {
    super(),
      ks(this, s, Hs, Cs, fs, {
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
function js(p) {
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
        x(s.src, (t = `${ss}/images/polar.jpg`)) || f(s, 'src', t),
        f(s, 'alt', 'A polar bear');
    },
    m(a, n) {
      _(a, s, n);
    },
    p: R,
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
        $$slots: { image: [js] },
        $$scope: { ctx: p },
      },
    })),
    {
      c() {
        N(s.$$.fragment);
      },
      l(a) {
        V(s.$$.fragment, a);
      },
      m(a, n) {
        B(s, a, n), (t = !0);
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
        J(s, a);
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
        x(s.src, (t = `${ss}/images/polar.jpg`)) || f(s, 'src', t),
        f(s, 'alt', 'A polar bear');
    },
    m(a, n) {
      _(a, s, n);
    },
    p: R,
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
        V(s.$$.fragment, a);
      },
      m(a, n) {
        B(s, a, n), (t = !0);
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
        J(s, a);
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
        x(s.src, (t = `${ss}/images/polar.jpg`)) || f(s, 'src', t),
        f(s, 'alt', 'A polar bear');
    },
    m(a, n) {
      _(a, s, n);
    },
    p: R,
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
      var n = H(s);
      (t = F(n, 'Eisbaer')), n.forEach(i), this.h();
    },
    h() {
      f(s, 'slot', 'hed'),
        f(s, 'class', 'uppercase spaced-more color-blue text-shadow-lighter');
    },
    m(a, n) {
      _(a, s, n), C(s, t);
    },
    p: R,
    d(a) {
      a && i(s);
    },
  };
}
function Gs(p) {
  let s, t;
  return {
    c() {
      (s = v('p')), (t = O('The last of the white bears')), this.h();
    },
    l(a) {
      s = b(a, 'P', { slot: !0, class: !0 });
      var n = H(s);
      (t = F(n, 'The last of the white bears')), n.forEach(i), this.h();
    },
    h() {
      f(s, 'slot', 'dek'), f(s, 'class', 'color-blue text-shadow-lighter');
    },
    m(a, n) {
      _(a, s, n), C(s, t);
    },
    p: R,
    d(a) {
      a && i(s);
    },
  };
}
function Ms(p) {
  let s, t;
  return (
    (s = new as({
      props: {
        section: 'Climate Change',
        overlay: !1,
        $$slots: { dek: [Gs], hed: [As], image: [Ps] },
        $$scope: { ctx: p },
      },
    })),
    {
      c() {
        N(s.$$.fragment);
      },
      l(a) {
        V(s.$$.fragment, a);
      },
      m(a, n) {
        B(s, a, n), (t = !0);
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
        J(s, a);
      },
    }
  );
}
function Ds(p) {
  let s,
    t,
    a,
    n,
    o,
    A,
    g,
    m,
    D = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Headline <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/paths'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Hero</span> <span class="token attr-name">hed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Eisb\xE4r<span class="token punctuation">"</span></span> <span class="token attr-name">section</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Climate Change<span class="token punctuation">"</span></span> <span class="token attr-name">dek</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>The last of the white bears<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>image<span class="token punctuation">"</span></span> <span class="token attr-name">src="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/polar.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A polar bear<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Hero</span><span class="token punctuation">></span></span></code>`,
    r,
    u,
    j,
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
    S,
    $,
    U = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
    q,
    w,
    L;
  return (
    (u = new Z({ props: { $$slots: { default: [Ts] }, $$scope: { ctx: p } } })),
    (l = new Z({ props: { $$slots: { default: [ys] }, $$scope: { ctx: p } } })),
    (w = new Z({ props: { $$slots: { default: [Ms] }, $$scope: { ctx: p } } })),
    {
      c() {
        (s = v('section')),
          (t = v('h2')),
          (a = O(is)),
          (n = G()),
          (o = v('p')),
          (A = O(us)),
          (g = G()),
          (m = v('pre')),
          (r = G()),
          N(u.$$.fragment),
          (j = G()),
          (T = v('pre')),
          (k = G()),
          N(l.$$.fragment),
          (S = G()),
          ($ = v('pre')),
          (q = G()),
          N(w.$$.fragment),
          this.h();
      },
      l(e) {
        s = b(e, 'SECTION', {});
        var c = H(s);
        t = b(c, 'H2', {});
        var I = H(t);
        (a = F(I, is)), I.forEach(i), (n = M(c)), (o = b(c, 'P', {}));
        var E = H(o);
        (A = F(E, us)),
          E.forEach(i),
          c.forEach(i),
          (g = M(e)),
          (m = b(e, 'PRE', { class: !0 }));
        var Y = H(m);
        Y.forEach(i),
          (r = M(e)),
          V(u.$$.fragment, e),
          (j = M(e)),
          (T = b(e, 'PRE', { class: !0 }));
        var ms = H(T);
        ms.forEach(i),
          (k = M(e)),
          V(l.$$.fragment, e),
          (S = M(e)),
          ($ = b(e, 'PRE', { class: !0 }));
        var gs = H($);
        gs.forEach(i), (q = M(e)), V(w.$$.fragment, e), this.h();
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
          (m.innerHTML = D),
          _(e, r, c),
          B(u, e, c),
          _(e, j, c),
          _(e, T, c),
          (T.innerHTML = d),
          _(e, k, c),
          B(l, e, c),
          _(e, S, c),
          _(e, $, c),
          ($.innerHTML = U),
          _(e, q, c),
          B(w, e, c),
          (L = !0);
      },
      p(e, [c]) {
        const I = {};
        c & 1 && (I.$$scope = { dirty: c, ctx: e }), u.$set(I);
        const E = {};
        c & 1 && (E.$$scope = { dirty: c, ctx: e }), l.$set(E);
        const Y = {};
        c & 1 && (Y.$$scope = { dirty: c, ctx: e }), w.$set(Y);
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
          J(u, e),
          e && i(j),
          e && i(T),
          e && i(k),
          J(l, e),
          e && i(S),
          e && i($),
          e && i(q),
          J(w, e);
      },
    }
  );
}
const Rs = {
    title: 'Hero',
    description: 'A headline over a hero image',
    slug: 'hero',
  },
  { title: is, description: us, slug: Os } = Rs;
class Fs extends rs {
  constructor(s) {
    super(), ks(this, s, null, Ds, fs, {});
  }
}
export { Fs as default, Rs as metadata };
