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
  af as q,
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
} from './vendor-ea6fad36.js';
import { D as tt } from './index-3fe6324c.js';
import { g as J } from './@component-docs_components-c6052726.js';
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
function at(c) {
  let t, e, n;
  function l(a, p) {
    return !a[8] || (a[11] && a[9]) ? nt : et;
  }
  let m = l(c),
    r = m(c),
    o = c[2] && K(c);
  return {
    c() {
      (t = w('figure')), r.c(), (e = z()), o && o.c(), this.h();
    },
    l(a) {
      t = b(a, 'FIGURE', { class: !0 });
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
    m(a, p) {
      v(a, t, p), r.m(t, null), y(t, e), o && o.m(t, null), c[16](t);
    },
    p(a, [p]) {
      m === (m = l(a)) && r
        ? r.p(a, p)
        : (r.d(1), (r = m(a)), r && (r.c(), r.m(t, e))),
        a[2]
          ? o
            ? o.p(a, p)
            : ((o = K(a)), o.c(), o.m(t, null))
          : o && (o.d(1), (o = null)),
        p & 240 &&
          n !==
            (n =
              '' +
              (T(
                q('photo', {
                  wide: a[4],
                  wider: a[5],
                  widest: a[6],
                  fluid: a[7],
                })
              ) +
                ' svelte-1g1o650')) &&
          h(t, 'class', n);
    },
    i: M,
    o: M,
    d(a) {
      a && f(t), r.d(), o && o.d(), c[16](null);
    },
  };
}
function st(c, t, e) {
  let { src: n } = t,
    { alt: l } = t,
    { caption: m } = t,
    { height: r = 100 } = t,
    { wide: o = !1 } = t,
    { wider: a = !1 } = t,
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
      const s = `${i}px ${u}px ${d}px ${k}px`,
        S = new IntersectionObserver(
          (Y) => {
            e(9, (E = Y[0].isIntersecting)), E && S.unobserve(_);
          },
          { rootMargin: s }
        );
      return S.observe(_), () => S.unobserve(_);
    }
  });
  function X(s) {
    $[s ? 'unshift' : 'push'](() => {
      (_ = s), e(10, _);
    });
  }
  return (
    (c.$$set = (s) => {
      'src' in s && e(0, (n = s.src)),
        'alt' in s && e(1, (l = s.alt)),
        'caption' in s && e(2, (m = s.caption)),
        'height' in s && e(3, (r = s.height)),
        'wide' in s && e(4, (o = s.wide)),
        'wider' in s && e(5, (a = s.wider)),
        'widest' in s && e(6, (p = s.widest)),
        'fluid' in s && e(7, (I = s.fluid)),
        'lazy' in s && e(8, (g = s.lazy)),
        'top' in s && e(12, (d = s.top)),
        'bottom' in s && e(13, (i = s.bottom)),
        'left' in s && e(14, (u = s.left)),
        'right' in s && e(15, (k = s.right));
    }),
    [n, l, m, r, o, a, p, I, g, E, _, O, d, i, u, k, X]
  );
}
class lt extends P {
  constructor(t) {
    super();
    G(this, t, st, at, H, {
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
    a,
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
          (a = w('pre')),
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
          (a = b(i, 'PRE', { class: !0 }));
        var _ = j(a);
        _.forEach(f), (I = D(i)), R(g.$$.fragment, i), this.h();
      },
      h() {
        h(a, 'class', 'language-svelte');
      },
      m(i, u) {
        v(i, t, u),
          y(t, e),
          y(e, n),
          y(t, l),
          y(t, m),
          y(m, r),
          v(i, o, u),
          v(i, a, u),
          (a.innerHTML = p),
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
        i && f(t), i && f(o), i && f(a), i && f(I), B(g, i);
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
