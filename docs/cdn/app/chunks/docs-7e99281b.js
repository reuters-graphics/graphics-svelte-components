import {
  S as P,
  i as G,
  s as H,
  e as w,
  t as A,
  c as b,
  a as j,
  g as C,
  d as f,
  f as v,
  H as y,
  h as Z,
  k as z,
  n as D,
  b as h,
  a5 as T,
  ag as q,
  I as M,
  A as x,
  aa as $,
  U as F,
  j as N,
  m as R,
  o as U,
  x as L,
  u as V,
  v as B,
} from './vendor-85b063f6.js';
import { D as tt } from './index-ccd418f9.js';
import { g as J } from './@component-docs_components-48c10090.js';
import './paths-6758d194.js';
function nt(c) {
  let t, n;
  return {
    c() {
      (t = w('div')), this.h();
    },
    l(e) {
      (t = b(e, 'DIV', { class: !0, height: !0 })), j(t).forEach(f), this.h();
    },
    h() {
      h(t, 'class', 'placeholder svelte-1g1o650'),
        h(t, 'height', (n = `${c[3]}px`));
    },
    m(e, l) {
      v(e, t, l);
    },
    p(e, l) {
      l & 8 && n !== (n = `${e[3]}px`) && h(t, 'height', n);
    },
    d(e) {
      e && f(t);
    },
  };
}
function et(c) {
  let t, n;
  return {
    c() {
      (t = w('img')), this.h();
    },
    l(e) {
      (t = b(e, 'IMG', { src: !0, alt: !0 })), this.h();
    },
    h() {
      F(t.src, (n = J(c[0]))) || h(t, 'src', n), h(t, 'alt', c[1]);
    },
    m(e, l) {
      v(e, t, l);
    },
    p(e, l) {
      l & 1 && !F(t.src, (n = J(e[0]))) && h(t, 'src', n),
        l & 2 && h(t, 'alt', e[1]);
    },
    d(e) {
      e && f(t);
    },
  };
}
function K(c) {
  let t, n;
  return {
    c() {
      (t = w('figcaption')), (n = A(c[2]));
    },
    l(e) {
      t = b(e, 'FIGCAPTION', {});
      var l = j(t);
      (n = C(l, c[2])), l.forEach(f);
    },
    m(e, l) {
      v(e, t, l), y(t, n);
    },
    p(e, l) {
      l & 4 && Z(n, e[2]);
    },
    d(e) {
      e && f(t);
    },
  };
}
function st(c) {
  let t, n, e;
  function l(s, p) {
    return !s[8] || (s[11] && s[9]) ? et : nt;
  }
  let m = l(c),
    r = m(c),
    o = c[2] && K(c);
  return {
    c() {
      (t = w('figure')), r.c(), (n = z()), o && o.c(), this.h();
    },
    l(s) {
      t = b(s, 'FIGURE', { class: !0 });
      var p = j(t);
      r.l(p), (n = D(p)), o && o.l(p), p.forEach(f), this.h();
    },
    h() {
      h(
        t,
        'class',
        (e =
          '' +
          (T(
            q('photo', { wide: c[4], wider: c[5], widest: c[6], fluid: c[7] })
          ) +
            ' svelte-1g1o650'))
      );
    },
    m(s, p) {
      v(s, t, p), r.m(t, null), y(t, n), o && o.m(t, null), c[16](t);
    },
    p(s, [p]) {
      m === (m = l(s)) && r
        ? r.p(s, p)
        : (r.d(1), (r = m(s)), r && (r.c(), r.m(t, n))),
        s[2]
          ? o
            ? o.p(s, p)
            : ((o = K(s)), o.c(), o.m(t, null))
          : o && (o.d(1), (o = null)),
        p & 240 &&
          e !==
            (e =
              '' +
              (T(
                q('photo', {
                  wide: s[4],
                  wider: s[5],
                  widest: s[6],
                  fluid: s[7],
                })
              ) +
                ' svelte-1g1o650')) &&
          h(t, 'class', e);
    },
    i: M,
    o: M,
    d(s) {
      s && f(t), r.d(), o && o.d(), c[16](null);
    },
  };
}
function at(c, t, n) {
  let { src: e } = t,
    { alt: l } = t,
    { caption: m } = t,
    { height: r = 100 } = t,
    { wide: o = !1 } = t,
    { wider: s = !1 } = t,
    { widest: p = !1 } = t,
    { fluid: I = !1 } = t,
    { lazy: g = !1 } = t,
    { top: d = 0 } = t,
    { bottom: i = 0 } = t,
    { left: u = 0 } = t,
    { right: k = 0 } = t,
    E = !1,
    _;
  const O = typeof IntersectionObserver != 'undefined';
  x(() => {
    if (!!g && O) {
      const a = `${i}px ${u}px ${d}px ${k}px`,
        S = new IntersectionObserver(
          (Y) => {
            n(9, (E = Y[0].isIntersecting)), E && S.unobserve(_);
          },
          { rootMargin: a }
        );
      return S.observe(_), () => S.unobserve(_);
    }
  });
  function X(a) {
    $[a ? 'unshift' : 'push'](() => {
      (_ = a), n(10, _);
    });
  }
  return (
    (c.$$set = (a) => {
      'src' in a && n(0, (e = a.src)),
        'alt' in a && n(1, (l = a.alt)),
        'caption' in a && n(2, (m = a.caption)),
        'height' in a && n(3, (r = a.height)),
        'wide' in a && n(4, (o = a.wide)),
        'wider' in a && n(5, (s = a.wider)),
        'widest' in a && n(6, (p = a.widest)),
        'fluid' in a && n(7, (I = a.fluid)),
        'lazy' in a && n(8, (g = a.lazy)),
        'top' in a && n(12, (d = a.top)),
        'bottom' in a && n(13, (i = a.bottom)),
        'left' in a && n(14, (u = a.left)),
        'right' in a && n(15, (k = a.right));
    }),
    [e, l, m, r, o, s, p, I, g, E, _, O, d, i, u, k, X]
  );
}
class lt extends P {
  constructor(t) {
    super();
    G(this, t, at, st, H, {
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
function it(c) {
  let t, n;
  return (
    (t = new lt({
      props: {
        src: 'images/shark.jpg',
        alt: 'Some alt text',
        caption: 'Duh dum.',
        lazy: !0,
        wide: !0,
      },
    })),
    {
      c() {
        N(t.$$.fragment);
      },
      l(e) {
        R(t.$$.fragment, e);
      },
      m(e, l) {
        U(t, e, l), (n = !0);
      },
      p: M,
      i(e) {
        n || (L(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        V(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        B(t, e);
      },
    }
  );
}
function ct(c) {
  let t,
    n,
    e,
    l,
    m,
    r,
    o,
    s,
    p = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Image <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Image</span>
  <span class="token attr-name">src="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'path/to/image.jpg'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">alt="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'Some alt text'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">caption="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'A caption'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">lazy="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">wide</span>
<span class="token punctuation">/></span></span></code>`,
    I,
    g,
    d;
  return (
    (g = new tt({
      props: { $$slots: { default: [it] }, $$scope: { ctx: c } },
    })),
    {
      c() {
        (t = w('section')),
          (n = w('h2')),
          (e = A(Q)),
          (l = z()),
          (m = w('p')),
          (r = A(W)),
          (o = z()),
          (s = w('pre')),
          (I = z()),
          N(g.$$.fragment),
          this.h();
      },
      l(i) {
        t = b(i, 'SECTION', {});
        var u = j(t);
        n = b(u, 'H2', {});
        var k = j(n);
        (e = C(k, Q)), k.forEach(f), (l = D(u)), (m = b(u, 'P', {}));
        var E = j(m);
        (r = C(E, W)),
          E.forEach(f),
          u.forEach(f),
          (o = D(i)),
          (s = b(i, 'PRE', { class: !0 }));
        var _ = j(s);
        _.forEach(f), (I = D(i)), R(g.$$.fragment, i), this.h();
      },
      h() {
        h(s, 'class', 'language-svelte');
      },
      m(i, u) {
        v(i, t, u),
          y(t, n),
          y(n, e),
          y(t, l),
          y(t, m),
          y(m, r),
          v(i, o, u),
          v(i, s, u),
          (s.innerHTML = p),
          v(i, I, u),
          U(g, i, u),
          (d = !0);
      },
      p(i, [u]) {
        const k = {};
        u & 1 && (k.$$scope = { dirty: u, ctx: i }), g.$set(k);
      },
      i(i) {
        d || (L(g.$$.fragment, i), (d = !0));
      },
      o(i) {
        V(g.$$.fragment, i), (d = !1);
      },
      d(i) {
        i && f(t), i && f(o), i && f(s), i && f(I), B(g, i);
      },
    }
  );
}
const ot = {
    title: 'Image',
    description: 'A full-width image inside the text well.',
    slug: 'image',
  },
  { title: Q, description: W, slug: mt } = ot;
class gt extends P {
  constructor(t) {
    super();
    G(this, t, null, ct, H, {});
  }
}
export { gt as default, ot as metadata };
