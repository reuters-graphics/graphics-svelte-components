import {
  S as s,
  i as a,
  s as n,
  D as t,
  e as p,
  c as e,
  a as o,
  d as c,
  b as l,
  Y as i,
  f as r,
  t as u,
  g as k,
  H as g,
  h,
  k as m,
  n as d,
  E as $,
  F as f,
  G as v,
  r as w,
  u as b,
  w as x,
  x as E,
  Z as y,
  I as C,
  j,
  m as H,
  o as T,
  v as I,
  U as P,
} from './vendor-927c0fc0.js';
import { D as A } from './index-38e47fc4.js';
import { a as G } from './paths-6758d194.js';
const M = (s) => ({}),
  R = (s) => ({}),
  D = (s) => ({}),
  L = (s) => ({}),
  O = (s) => ({}),
  S = (s) => ({});
function F(s) {
  let a;
  return {
    c() {
      (a = p('div')), this.h();
    },
    l(s) {
      (a = e(s, 'DIV', { class: !0 })), o(a).forEach(c), this.h();
    },
    h() {
      l(a, 'class', 'overlay'),
        i(a, 'lightest', 'lightest' === s[5]),
        i(a, 'lighter', 'lighter' === s[5]),
        i(a, 'light', 'light' === s[5]),
        i(a, 'dark', 'dark' === s[5]),
        i(a, 'darker', 'darker' === s[5]),
        i(a, 'darkest', 'darkest' === s[5]);
    },
    m(s, n) {
      r(s, a, n);
    },
    p(s, n) {
      32 & n && i(a, 'lightest', 'lightest' === s[5]),
        32 & n && i(a, 'lighter', 'lighter' === s[5]),
        32 & n && i(a, 'light', 'light' === s[5]),
        32 & n && i(a, 'dark', 'dark' === s[5]),
        32 & n && i(a, 'darker', 'darker' === s[5]),
        32 & n && i(a, 'darkest', 'darkest' === s[5]);
    },
    d(s) {
      s && c(a);
    },
  };
}
function N(s) {
  let a, n, t;
  return {
    c() {
      (a = p('p')), (n = u(s[3])), this.h();
    },
    l(t) {
      a = e(t, 'P', { class: !0 });
      var p = o(a);
      (n = k(p, s[3])), p.forEach(c), this.h();
    },
    h() {
      l(a, 'class', (t = `section-title color-${s[4]} text-shadow`));
    },
    m(s, t) {
      r(s, a, t), g(a, n);
    },
    p(s, p) {
      8 & p && h(n, s[3]),
        16 & p &&
          t !== (t = `section-title color-${s[4]} text-shadow`) &&
          l(a, 'class', t);
    },
    d(s) {
      s && c(a);
    },
  };
}
function U(s) {
  let a, n, t;
  return {
    c() {
      (a = p('h2')), (n = u(s[0])), this.h();
    },
    l(t) {
      a = e(t, 'H2', { class: !0 });
      var p = o(a);
      (n = k(p, s[0])), p.forEach(c), this.h();
    },
    h() {
      l(a, 'class', (t = `text-shadow-darker color-${s[1]} important`));
    },
    m(s, t) {
      r(s, a, t), g(a, n);
    },
    p(s, p) {
      1 & p && h(n, s[0]),
        2 & p &&
          t !== (t = `text-shadow-darker color-${s[1]} important`) &&
          l(a, 'class', t);
    },
    i: C,
    o: C,
    d(s) {
      s && c(a);
    },
  };
}
function V(s) {
  let a;
  const n = s[12].hed,
    p = t(n, s, s[11], L);
  return {
    c() {
      p && p.c();
    },
    l(s) {
      p && p.l(s);
    },
    m(s, n) {
      p && p.m(s, n), (a = !0);
    },
    p(s, t) {
      p &&
        p.p &&
        (!a || 2048 & t) &&
        $(p, n, s, s[11], a ? v(n, s[11], t, D) : f(s[11]), L);
    },
    i(s) {
      a || (E(p, s), (a = !0));
    },
    o(s) {
      b(p, s), (a = !1);
    },
    d(s) {
      p && p.d(s);
    },
  };
}
function Y(s) {
  let a, n;
  return {
    c() {
      (a = p('p')), (n = u(s[2])), this.h();
    },
    l(t) {
      a = e(t, 'P', { class: !0 });
      var p = o(a);
      (n = k(p, s[2])), p.forEach(c), this.h();
    },
    h() {
      l(a, 'class', 'text-shadow-darkest');
    },
    m(s, t) {
      r(s, a, t), g(a, n);
    },
    p(s, a) {
      4 & a && h(n, s[2]);
    },
    i: C,
    o: C,
    d(s) {
      s && c(a);
    },
  };
}
function Z(s) {
  let a;
  const n = s[12].dek,
    p = t(n, s, s[11], R);
  return {
    c() {
      p && p.c();
    },
    l(s) {
      p && p.l(s);
    },
    m(s, n) {
      p && p.m(s, n), (a = !0);
    },
    p(s, t) {
      p &&
        p.p &&
        (!a || 2048 & t) &&
        $(p, n, s, s[11], a ? v(n, s[11], t, M) : f(s[11]), R);
    },
    i(s) {
      a || (E(p, s), (a = !0));
    },
    o(s) {
      b(p, s), (a = !1);
    },
    d(s) {
      p && p.d(s);
    },
  };
}
function q(s) {
  let a, n, u, k, h, y, C, j, H, T, I, P;
  const A = s[12].image,
    G = t(A, s, s[11], S);
  let M = s[5] && F(s),
    R = s[3] && N(s);
  const D = [V, U],
    L = [];
  function q(s, a) {
    return s[10].hed ? 0 : 1;
  }
  (C = q(s)), (j = L[C] = D[C](s));
  const z = [Z, Y],
    B = [];
  function J(s, a) {
    return s[10].dek ? 0 : s[2] ? 1 : -1;
  }
  return (
    ~(T = J(s)) && (I = B[T] = z[T](s)),
    {
      c() {
        (a = p('section')),
          (n = p('figure')),
          G && G.c(),
          (u = m()),
          M && M.c(),
          (k = m()),
          (h = p('div')),
          R && R.c(),
          (y = m()),
          j.c(),
          (H = m()),
          I && I.c(),
          this.h();
      },
      l(s) {
        a = e(s, 'SECTION', { class: !0 });
        var t = o(a);
        n = e(t, 'FIGURE', {});
        var p = o(n);
        G && G.l(p),
          (u = d(p)),
          M && M.l(p),
          p.forEach(c),
          (k = d(t)),
          (h = e(t, 'DIV', { class: !0 }));
        var l = o(h);
        R && R.l(l),
          (y = d(l)),
          j.l(l),
          (H = d(l)),
          I && I.l(l),
          l.forEach(c),
          t.forEach(c),
          this.h();
      },
      h() {
        l(h, 'class', 'title color-white'),
          i(h, 'top', s[6]),
          i(h, 'bottom', s[7]),
          i(h, 'left', s[8]),
          i(h, 'right', s[9]),
          l(a, 'class', 'hero-title');
      },
      m(s, t) {
        r(s, a, t),
          g(a, n),
          G && G.m(n, null),
          g(n, u),
          M && M.m(n, null),
          g(a, k),
          g(a, h),
          R && R.m(h, null),
          g(h, y),
          L[C].m(h, null),
          g(h, H),
          ~T && B[T].m(h, null),
          (P = !0);
      },
      p(s, [a]) {
        G &&
          G.p &&
          (!P || 2048 & a) &&
          $(G, A, s, s[11], P ? v(A, s[11], a, O) : f(s[11]), S),
          s[5]
            ? M
              ? M.p(s, a)
              : ((M = F(s)), M.c(), M.m(n, null))
            : M && (M.d(1), (M = null)),
          s[3]
            ? R
              ? R.p(s, a)
              : ((R = N(s)), R.c(), R.m(h, y))
            : R && (R.d(1), (R = null));
        let t = C;
        (C = q(s)),
          C === t
            ? L[C].p(s, a)
            : (w(),
              b(L[t], 1, 1, () => {
                L[t] = null;
              }),
              x(),
              (j = L[C]),
              j ? j.p(s, a) : ((j = L[C] = D[C](s)), j.c()),
              E(j, 1),
              j.m(h, H));
        let p = T;
        (T = J(s)),
          T === p
            ? ~T && B[T].p(s, a)
            : (I &&
                (w(),
                b(B[p], 1, 1, () => {
                  B[p] = null;
                }),
                x()),
              ~T
                ? ((I = B[T]),
                  I ? I.p(s, a) : ((I = B[T] = z[T](s)), I.c()),
                  E(I, 1),
                  I.m(h, null))
                : (I = null)),
          64 & a && i(h, 'top', s[6]),
          128 & a && i(h, 'bottom', s[7]),
          256 & a && i(h, 'left', s[8]),
          512 & a && i(h, 'right', s[9]);
      },
      i(s) {
        P || (E(G, s), E(j), E(I), (P = !0));
      },
      o(s) {
        b(G, s), b(j), b(I), (P = !1);
      },
      d(s) {
        s && c(a),
          G && G.d(s),
          M && M.d(),
          R && R.d(),
          L[C].d(),
          ~T && B[T].d();
      },
    }
  );
}
function z(s, a, n) {
  let { $$slots: t = {}, $$scope: p } = a;
  const e = y(t);
  let { hed: o = 'Reuters Graphics Interactive' } = a,
    { hedColour: c = 'white' } = a,
    { dek: l } = a,
    { section: i } = a,
    { sectionColour: r = 'red' } = a,
    { overlay: u = !0 } = a,
    { top: k = !1 } = a,
    { bottom: g = !1 } = a,
    { left: h = !1 } = a,
    { right: m = !1 } = a;
  return (
    (s.$$set = (s) => {
      'hed' in s && n(0, (o = s.hed)),
        'hedColour' in s && n(1, (c = s.hedColour)),
        'dek' in s && n(2, (l = s.dek)),
        'section' in s && n(3, (i = s.section)),
        'sectionColour' in s && n(4, (r = s.sectionColour)),
        'overlay' in s && n(5, (u = s.overlay)),
        'top' in s && n(6, (k = s.top)),
        'bottom' in s && n(7, (g = s.bottom)),
        'left' in s && n(8, (h = s.left)),
        'right' in s && n(9, (m = s.right)),
        '$$scope' in s && n(11, (p = s.$$scope));
    }),
    [o, c, l, i, r, u, k, g, h, m, e, p, t]
  );
}
class B extends s {
  constructor(s) {
    super(),
      a(this, s, z, q, n, {
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
function J(s) {
  let a, n;
  return {
    c() {
      (a = p('img')), this.h();
    },
    l(s) {
      (a = e(s, 'IMG', { slot: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      l(a, 'slot', 'image'),
        P(a.src, (n = `${G}/images/polar.jpg`)) || l(a, 'src', n),
        l(a, 'alt', 'A polar bear');
    },
    m(s, n) {
      r(s, a, n);
    },
    p: C,
    d(s) {
      s && c(a);
    },
  };
}
function K(s) {
  let a, n;
  return (
    (a = new B({
      props: {
        hed: 'Eisbär',
        section: 'Climate Change',
        dek: 'The last of the white bears',
        $$slots: { image: [J] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        j(a.$$.fragment);
      },
      l(s) {
        H(a.$$.fragment, s);
      },
      m(s, t) {
        T(a, s, t), (n = !0);
      },
      p(s, n) {
        const t = {};
        1 & n && (t.$$scope = { dirty: n, ctx: s }), a.$set(t);
      },
      i(s) {
        n || (E(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        b(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        I(a, s);
      },
    }
  );
}
function Q(s) {
  let a, n;
  return {
    c() {
      (a = p('img')), this.h();
    },
    l(s) {
      (a = e(s, 'IMG', { slot: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      l(a, 'slot', 'image'),
        P(a.src, (n = `${G}/images/polar.jpg`)) || l(a, 'src', n),
        l(a, 'alt', 'A polar bear');
    },
    m(s, n) {
      r(s, a, n);
    },
    p: C,
    d(s) {
      s && c(a);
    },
  };
}
function W(s) {
  let a, n;
  return (
    (a = new B({
      props: {
        hed: 'Eisbär',
        section: 'Climate Change',
        dek: 'The last of the white bears',
        overlay: 'darker',
        bottom: !0,
        left: !0,
        $$slots: { image: [Q] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        j(a.$$.fragment);
      },
      l(s) {
        H(a.$$.fragment, s);
      },
      m(s, t) {
        T(a, s, t), (n = !0);
      },
      p(s, n) {
        const t = {};
        1 & n && (t.$$scope = { dirty: n, ctx: s }), a.$set(t);
      },
      i(s) {
        n || (E(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        b(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        I(a, s);
      },
    }
  );
}
function X(s) {
  let a, n;
  return {
    c() {
      (a = p('img')), this.h();
    },
    l(s) {
      (a = e(s, 'IMG', { slot: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      l(a, 'slot', 'image'),
        P(a.src, (n = `${G}/images/polar.jpg`)) || l(a, 'src', n),
        l(a, 'alt', 'A polar bear');
    },
    m(s, n) {
      r(s, a, n);
    },
    p: C,
    d(s) {
      s && c(a);
    },
  };
}
function _(s) {
  let a, n;
  return {
    c() {
      (a = p('h2')), (n = u('Eisbaer')), this.h();
    },
    l(s) {
      a = e(s, 'H2', { slot: !0, class: !0 });
      var t = o(a);
      (n = k(t, 'Eisbaer')), t.forEach(c), this.h();
    },
    h() {
      l(a, 'slot', 'hed'),
        l(a, 'class', 'uppercase spaced-more color-blue text-shadow-lighter');
    },
    m(s, t) {
      r(s, a, t), g(a, n);
    },
    d(s) {
      s && c(a);
    },
  };
}
function ss(s) {
  let a, n;
  return {
    c() {
      (a = p('p')), (n = u('The last of the white bears')), this.h();
    },
    l(s) {
      a = e(s, 'P', { slot: !0, class: !0 });
      var t = o(a);
      (n = k(t, 'The last of the white bears')), t.forEach(c), this.h();
    },
    h() {
      l(a, 'slot', 'dek'), l(a, 'class', 'color-blue text-shadow-lighter');
    },
    m(s, t) {
      r(s, a, t), g(a, n);
    },
    d(s) {
      s && c(a);
    },
  };
}
function as(s) {
  let a, n;
  return (
    (a = new B({
      props: {
        section: 'Climate Change',
        overlay: !1,
        $$slots: { dek: [ss], hed: [_], image: [X] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        j(a.$$.fragment);
      },
      l(s) {
        H(a.$$.fragment, s);
      },
      m(s, t) {
        T(a, s, t), (n = !0);
      },
      p(s, n) {
        const t = {};
        1 & n && (t.$$scope = { dirty: n, ctx: s }), a.$set(t);
      },
      i(s) {
        n || (E(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        b(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        I(a, s);
      },
    }
  );
}
function ns(s) {
  let a, n, t, i, h, $, f, v, w, x, y, C, P, G, M, R, D, L, O;
  return (
    (x = new A({ props: { $$slots: { default: [K] }, $$scope: { ctx: s } } })),
    (G = new A({ props: { $$slots: { default: [W] }, $$scope: { ctx: s } } })),
    (L = new A({ props: { $$slots: { default: [as] }, $$scope: { ctx: s } } })),
    {
      c() {
        (a = p('section')),
          (n = p('h2')),
          (t = u(ps)),
          (i = m()),
          (h = p('p')),
          ($ = u(es)),
          (f = m()),
          (v = p('pre')),
          (w = m()),
          j(x.$$.fragment),
          (y = m()),
          (C = p('pre')),
          (P = m()),
          j(G.$$.fragment),
          (M = m()),
          (R = p('pre')),
          (D = m()),
          j(L.$$.fragment),
          this.h();
      },
      l(s) {
        a = e(s, 'SECTION', {});
        var p = o(a);
        n = e(p, 'H2', {});
        var l = o(n);
        (t = k(l, ps)), l.forEach(c), (i = d(p)), (h = e(p, 'P', {}));
        var r = o(h);
        ($ = k(r, es)),
          r.forEach(c),
          p.forEach(c),
          (f = d(s)),
          (v = e(s, 'PRE', { class: !0 })),
          o(v).forEach(c),
          (w = d(s)),
          H(x.$$.fragment, s),
          (y = d(s)),
          (C = e(s, 'PRE', { class: !0 })),
          o(C).forEach(c),
          (P = d(s)),
          H(G.$$.fragment, s),
          (M = d(s)),
          (R = e(s, 'PRE', { class: !0 })),
          o(R).forEach(c),
          (D = d(s)),
          H(L.$$.fragment, s),
          this.h();
      },
      h() {
        l(v, 'class', 'language-svelte'),
          l(C, 'class', 'language-svelte'),
          l(R, 'class', 'language-svelte');
      },
      m(s, p) {
        r(s, a, p),
          g(a, n),
          g(n, t),
          g(a, i),
          g(a, h),
          g(h, $),
          r(s, f, p),
          r(s, v, p),
          (v.innerHTML =
            '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Headline <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'$app/paths\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Hero</span> <span class="token attr-name">hed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Eisbär<span class="token punctuation">"</span></span> <span class="token attr-name">section</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Climate Change<span class="token punctuation">"</span></span> <span class="token attr-name">dek</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>The last of the white bears<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>image<span class="token punctuation">"</span></span> <span class="token attr-name">src="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/polar.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A polar bear<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Hero</span><span class="token punctuation">></span></span></code>'),
          r(s, w, p),
          T(x, s, p),
          r(s, y, p),
          r(s, C, p),
          (C.innerHTML =
            '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Headline <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'$app/paths\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- Place the title with top, bottom, left &amp; right props--\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Hero</span>\n  <span class="token attr-name">hed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Eisbär<span class="token punctuation">"</span></span>\n  <span class="token attr-name">section</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Climate Change<span class="token punctuation">"</span></span>\n  <span class="token attr-name">dek</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>The last of the white bears<span class="token punctuation">"</span></span>\n  <span class="token attr-name">overlay="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'darker\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">bottom</span>\n  <span class="token attr-name">left</span>\n<span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>image<span class="token punctuation">"</span></span> <span class="token attr-name">src="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/polar.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A polar bear<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Hero</span><span class="token punctuation">></span></span></code>'),
          r(s, P, p),
          T(G, s, p),
          r(s, M, p),
          r(s, R, p),
          (R.innerHTML =
            '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Headline <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'$app/paths\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Hero</span> <span class="token attr-name">section</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Climate Change<span class="token punctuation">"</span></span> <span class="token attr-name">overlay="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>image<span class="token punctuation">"</span></span> <span class="token attr-name">src="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/polar.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A polar bear<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token comment">&lt;!-- Override the hed and/or dek with named slots --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hed<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>uppercase spaced-more color-blue text-shadow-lighter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Eisbaer\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dek<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>color-blue text-shadow-lighter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    The last of the white bears\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Hero</span><span class="token punctuation">></span></span></code>'),
          r(s, D, p),
          T(L, s, p),
          (O = !0);
      },
      p(s, [a]) {
        const n = {};
        1 & a && (n.$$scope = { dirty: a, ctx: s }), x.$set(n);
        const t = {};
        1 & a && (t.$$scope = { dirty: a, ctx: s }), G.$set(t);
        const p = {};
        1 & a && (p.$$scope = { dirty: a, ctx: s }), L.$set(p);
      },
      i(s) {
        O ||
          (E(x.$$.fragment, s),
          E(G.$$.fragment, s),
          E(L.$$.fragment, s),
          (O = !0));
      },
      o(s) {
        b(x.$$.fragment, s), b(G.$$.fragment, s), b(L.$$.fragment, s), (O = !1);
      },
      d(s) {
        s && c(a),
          s && c(f),
          s && c(v),
          s && c(w),
          I(x, s),
          s && c(y),
          s && c(C),
          s && c(P),
          I(G, s),
          s && c(M),
          s && c(R),
          s && c(D),
          I(L, s);
      },
    }
  );
}
const ts = {
    title: 'Hero',
    description: 'A headline over a hero image',
    slug: 'hero',
  },
  { title: ps, description: es, slug: os } = ts;
export default class extends s {
  constructor(s) {
    super(), a(this, s, null, ns, n, {});
  }
}
export { ts as metadata };
