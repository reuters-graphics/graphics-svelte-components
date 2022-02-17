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
import { g as J } from './@component-docs_components-f89dfe3e.js';
import './paths-6758d194.js';
function et(c) {
  let t, e;
  return {
    c() {
      (t = w('div')), this.h();
    },
    l(n) {
      (t = b(n, 'DIV', { class: !0, height: !0 })), j(t).forEach(f), this.h();
    },
    h() {
      h(t, 'class', 'placeholder svelte-1g1o650'),
        h(t, 'height', (e = `${c[3]}px`));
    },
    m(n, l) {
      v(n, t, l);
    },
    p(n, l) {
      l & 8 && e !== (e = `${n[3]}px`) && h(t, 'height', e);
    },
    d(n) {
      n && f(t);
    },
  };
}
function nt(c) {
  let t, e;
  return {
    c() {
      (t = w('img')), this.h();
    },
    l(n) {
      (t = b(n, 'IMG', { src: !0, alt: !0 })), this.h();
    },
    h() {
      F(t.src, (e = J(c[0]))) || h(t, 'src', e), h(t, 'alt', c[1]);
    },
    m(n, l) {
      v(n, t, l);
    },
    p(n, l) {
      l & 1 && !F(t.src, (e = J(n[0]))) && h(t, 'src', e),
        l & 2 && h(t, 'alt', n[1]);
    },
    d(n) {
      n && f(t);
    },
  };
}
function K(c) {
  let t, e;
  return {
    c() {
      (t = w('figcaption')), (e = A(c[2]));
    },
    l(n) {
      t = b(n, 'FIGCAPTION', {});
      var l = j(t);
      (e = C(l, c[2])), l.forEach(f);
    },
    m(n, l) {
      v(n, t, l), y(t, e);
    },
    p(n, l) {
      l & 4 && Z(e, n[2]);
    },
    d(n) {
      n && f(t);
    },
  };
}
function st(c) {
  let t, e, n;
  function l(s, p) {
    return !s[8] || (s[11] && s[9]) ? nt : et;
  }
  let m = l(c),
    r = m(c),
    o = c[2] && K(c);
  return {
    c() {
      (t = w('figure')), r.c(), (e = z()), o && o.c(), this.h();
    },
    l(s) {
      t = b(s, 'FIGURE', { class: !0 });
      var p = j(t);
      r.l(p), (e = D(p)), o && o.l(p), p.forEach(f), this.h();
    },
    h() {
      h(
        t,
        'class',
        (n =
          '' +
          (T(
            q('photo', { wide: c[4], wider: c[5], widest: c[6], fluid: c[7] })
          ) +
            ' svelte-1g1o650'))
      );
    },
    m(s, p) {
      v(s, t, p), r.m(t, null), y(t, e), o && o.m(t, null), c[16](t);
    },
    p(s, [p]) {
      m === (m = l(s)) && r
        ? r.p(s, p)
        : (r.d(1), (r = m(s)), r && (r.c(), r.m(t, e))),
        s[2]
          ? o
            ? o.p(s, p)
            : ((o = K(s)), o.c(), o.m(t, null))
          : o && (o.d(1), (o = null)),
        p & 240 &&
          n !==
            (n =
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
          h(t, 'class', n);
    },
    i: M,
    o: M,
    d(s) {
      s && f(t), r.d(), o && o.d(), c[16](null);
    },
  };
}
function at(c, t, e) {
  let { src: n } = t,
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
            e(9, (E = Y[0].isIntersecting)), E && S.unobserve(_);
          },
          { rootMargin: a }
        );
      return S.observe(_), () => S.unobserve(_);
    }
  });
  function X(a) {
    $[a ? 'unshift' : 'push'](() => {
      (_ = a), e(10, _);
    });
  }
  return (
    (c.$$set = (a) => {
      'src' in a && e(0, (n = a.src)),
        'alt' in a && e(1, (l = a.alt)),
        'caption' in a && e(2, (m = a.caption)),
        'height' in a && e(3, (r = a.height)),
        'wide' in a && e(4, (o = a.wide)),
        'wider' in a && e(5, (s = a.wider)),
        'widest' in a && e(6, (p = a.widest)),
        'fluid' in a && e(7, (I = a.fluid)),
        'lazy' in a && e(8, (g = a.lazy)),
        'top' in a && e(12, (d = a.top)),
        'bottom' in a && e(13, (i = a.bottom)),
        'left' in a && e(14, (u = a.left)),
        'right' in a && e(15, (k = a.right));
    }),
    [n, l, m, r, o, s, p, I, g, E, _, O, d, i, u, k, X]
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
  let t, e;
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
      l(n) {
        R(t.$$.fragment, n);
      },
      m(n, l) {
        U(t, n, l), (e = !0);
      },
      p: M,
      i(n) {
        e || (L(t.$$.fragment, n), (e = !0));
      },
      o(n) {
        V(t.$$.fragment, n), (e = !1);
      },
      d(n) {
        B(t, n);
      },
    }
  );
}
function ct(c) {
  let t,
    e,
    n,
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
          (e = w('h2')),
          (n = A(Q)),
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
        e = b(u, 'H2', {});
        var k = j(e);
        (n = C(k, Q)), k.forEach(f), (l = D(u)), (m = b(u, 'P', {}));
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
          y(t, e),
          y(e, n),
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
