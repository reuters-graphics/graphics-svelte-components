import {
  S as N,
  i as R,
  s as B,
  e as w,
  t as S,
  c as b,
  a as E,
  h as C,
  d as f,
  g as v,
  J as I,
  j as W,
  k as z,
  m as D,
  b as k,
  M as A,
  E as O,
  v as Z,
  X as x,
  Y as G,
  w as J,
  x as L,
  y as U,
  q as V,
  o as X,
  B as Y,
} from './index-83a5d9f9.js';
import { D as $ } from './index-16ec1060.js';
import { b as P } from './main-92ce8c3f.js';
import { a as tt } from './paths-396f020f.js';
function nt(o) {
  let t, n;
  return {
    c() {
      (t = w('div')), this.h();
    },
    l(s) {
      (t = b(s, 'DIV', { class: !0, height: !0 })), E(t).forEach(f), this.h();
    },
    h() {
      k(t, 'class', 'placeholder svelte-1g1o650'),
        k(t, 'height', (n = `${o[3]}px`));
    },
    m(s, l) {
      v(s, t, l);
    },
    p(s, l) {
      l & 8 && n !== (n = `${s[3]}px`) && k(t, 'height', n);
    },
    d(s) {
      s && f(t);
    },
  };
}
function st(o) {
  let t, n;
  return {
    c() {
      (t = w('img')), this.h();
    },
    l(s) {
      (t = b(s, 'IMG', { src: !0, alt: !0 })), this.h();
    },
    h() {
      G(t.src, (n = o[0])) || k(t, 'src', n), k(t, 'alt', o[1]);
    },
    m(s, l) {
      v(s, t, l);
    },
    p(s, l) {
      l & 1 && !G(t.src, (n = s[0])) && k(t, 'src', n),
        l & 2 && k(t, 'alt', s[1]);
    },
    d(s) {
      s && f(t);
    },
  };
}
function T(o) {
  let t, n;
  return {
    c() {
      (t = w('figcaption')), (n = S(o[2]));
    },
    l(s) {
      t = b(s, 'FIGCAPTION', {});
      var l = E(t);
      (n = C(l, o[2])), l.forEach(f);
    },
    m(s, l) {
      v(s, t, l), I(t, n);
    },
    p(s, l) {
      l & 4 && W(n, s[2]);
    },
    d(s) {
      s && f(t);
    },
  };
}
function at(o) {
  let t, n, s;
  function l(a, u) {
    return !a[8] || (a[11] && a[9]) ? st : nt;
  }
  let m = l(o),
    p = m(o),
    c = o[2] && T(o);
  return {
    c() {
      (t = w('figure')), p.c(), (n = z()), c && c.c(), this.h();
    },
    l(a) {
      t = b(a, 'FIGURE', { class: !0 });
      var u = E(t);
      p.l(u), (n = D(u)), c && c.l(u), u.forEach(f), this.h();
    },
    h() {
      k(
        t,
        'class',
        (s =
          A(
            P('photo', { wide: o[4], wider: o[5], widest: o[6], fluid: o[7] })
          ) + ' svelte-1g1o650')
      );
    },
    m(a, u) {
      v(a, t, u), p.m(t, null), I(t, n), c && c.m(t, null), o[16](t);
    },
    p(a, [u]) {
      m === (m = l(a)) && p
        ? p.p(a, u)
        : (p.d(1), (p = m(a)), p && (p.c(), p.m(t, n))),
        a[2]
          ? c
            ? c.p(a, u)
            : ((c = T(a)), c.c(), c.m(t, null))
          : c && (c.d(1), (c = null)),
        u & 240 &&
          s !==
            (s =
              A(
                P('photo', {
                  wide: a[4],
                  wider: a[5],
                  widest: a[6],
                  fluid: a[7],
                })
              ) + ' svelte-1g1o650') &&
          k(t, 'class', s);
    },
    i: O,
    o: O,
    d(a) {
      a && f(t), p.d(), c && c.d(), o[16](null);
    },
  };
}
function et(o, t, n) {
  let { src: s } = t,
    { alt: l } = t,
    { caption: m } = t,
    { height: p = 100 } = t,
    { wide: c = !1 } = t,
    { wider: a = !1 } = t,
    { widest: u = !1 } = t,
    { fluid: y = !1 } = t,
    { lazy: g = !1 } = t,
    { top: d = 0 } = t,
    { bottom: i = 0 } = t,
    { left: r = 0 } = t,
    { right: h = 0 } = t,
    j = !1,
    _;
  const q = typeof IntersectionObserver != 'undefined';
  Z(() => {
    if (!!g && q) {
      const e = `${i}px ${r}px ${d}px ${h}px`,
        M = new IntersectionObserver(
          (Q) => {
            n(9, (j = Q[0].isIntersecting)), j && M.unobserve(_);
          },
          { rootMargin: e }
        );
      return M.observe(_), () => M.unobserve(_);
    }
  });
  function K(e) {
    x[e ? 'unshift' : 'push'](() => {
      (_ = e), n(10, _);
    });
  }
  return (
    (o.$$set = (e) => {
      'src' in e && n(0, (s = e.src)),
        'alt' in e && n(1, (l = e.alt)),
        'caption' in e && n(2, (m = e.caption)),
        'height' in e && n(3, (p = e.height)),
        'wide' in e && n(4, (c = e.wide)),
        'wider' in e && n(5, (a = e.wider)),
        'widest' in e && n(6, (u = e.widest)),
        'fluid' in e && n(7, (y = e.fluid)),
        'lazy' in e && n(8, (g = e.lazy)),
        'top' in e && n(12, (d = e.top)),
        'bottom' in e && n(13, (i = e.bottom)),
        'left' in e && n(14, (r = e.left)),
        'right' in e && n(15, (h = e.right));
    }),
    [s, l, m, p, c, a, u, y, g, j, _, q, d, i, r, h, K]
  );
}
class lt extends N {
  constructor(t) {
    super(),
      R(this, t, et, at, B, {
        src: 0,
        alt: 1,
        caption: 2,
        height: 3,
        wide: 4,
        wider: 5,
        widest: 6,
        fluid: 7,
        lazy: 8,
        top: 12,
        bottom: 13,
        left: 14,
        right: 15,
      });
  }
}
function it(o) {
  let t, n;
  return (
    (t = new lt({
      props: {
        src: tt + '/images/shark.jpg',
        alt: 'Some alt text',
        caption: 'Duh dum.',
        lazy: !0,
        wide: !0,
      },
    })),
    {
      c() {
        J(t.$$.fragment);
      },
      l(s) {
        L(t.$$.fragment, s);
      },
      m(s, l) {
        U(t, s, l), (n = !0);
      },
      p: O,
      i(s) {
        n || (V(t.$$.fragment, s), (n = !0));
      },
      o(s) {
        X(t.$$.fragment, s), (n = !1);
      },
      d(s) {
        Y(t, s);
      },
    }
  );
}
function ot(o) {
  let t,
    n,
    s,
    l,
    m,
    p,
    c,
    a,
    u = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Image <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/paths'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Image</span>
  <span class="token attr-name">src="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/myImage.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">alt="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'Some alt text'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">caption="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'A caption'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">lazy="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">wide</span>
<span class="token punctuation">/></span></span></code>`,
    y,
    g,
    d;
  return (
    (g = new $({ props: { $$slots: { default: [it] }, $$scope: { ctx: o } } })),
    {
      c() {
        (t = w('section')),
          (n = w('h2')),
          (s = S(F)),
          (l = z()),
          (m = w('p')),
          (p = S(H)),
          (c = z()),
          (a = w('pre')),
          (y = z()),
          J(g.$$.fragment),
          this.h();
      },
      l(i) {
        t = b(i, 'SECTION', {});
        var r = E(t);
        n = b(r, 'H2', {});
        var h = E(n);
        (s = C(h, F)), h.forEach(f), (l = D(r)), (m = b(r, 'P', {}));
        var j = E(m);
        (p = C(j, H)),
          j.forEach(f),
          r.forEach(f),
          (c = D(i)),
          (a = b(i, 'PRE', { class: !0 }));
        var _ = E(a);
        _.forEach(f), (y = D(i)), L(g.$$.fragment, i), this.h();
      },
      h() {
        k(a, 'class', 'language-svelte');
      },
      m(i, r) {
        v(i, t, r),
          I(t, n),
          I(n, s),
          I(t, l),
          I(t, m),
          I(m, p),
          v(i, c, r),
          v(i, a, r),
          (a.innerHTML = u),
          v(i, y, r),
          U(g, i, r),
          (d = !0);
      },
      p(i, [r]) {
        const h = {};
        r & 1 && (h.$$scope = { dirty: r, ctx: i }), g.$set(h);
      },
      i(i) {
        d || (V(g.$$.fragment, i), (d = !0));
      },
      o(i) {
        X(g.$$.fragment, i), (d = !1);
      },
      d(i) {
        i && f(t), i && f(c), i && f(a), i && f(y), Y(g, i);
      },
    }
  );
}
const ct = {
    title: 'Image',
    description: 'A full-width image inside the text well.',
    slug: 'image',
  },
  { title: F, description: H, slug: mt } = ct;
class gt extends N {
  constructor(t) {
    super(), R(this, t, null, ot, B, {});
  }
}
export { gt as default, ct as metadata };
