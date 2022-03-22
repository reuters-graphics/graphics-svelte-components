import {
  S as R,
  i as B,
  s as J,
  e as w,
  t as C,
  c as b,
  a as E,
  h as M,
  d as f,
  g as v,
  J as I,
  j as Z,
  k as z,
  m as D,
  b as h,
  a6 as q,
  ah as A,
  K as O,
  v as x,
  ab as $,
  W as G,
  w as K,
  x as L,
  y as U,
  q as V,
  o as W,
  B as Q,
} from './vendor-f398e5e0.js';
import { D as tt } from './index-9e15525f.js';
import { g as T } from './@component-docs_components-f9fbd8a7.js';
import './paths-396f020f.js';
function et(c) {
  let t, e;
  return {
    c() {
      (t = w('div')), this.h();
    },
    l(a) {
      (t = b(a, 'DIV', { class: !0, height: !0 })), E(t).forEach(f), this.h();
    },
    h() {
      h(t, 'class', 'placeholder svelte-1g1o650'),
        h(t, 'height', (e = `${c[3]}px`));
    },
    m(a, l) {
      v(a, t, l);
    },
    p(a, l) {
      l & 8 && e !== (e = `${a[3]}px`) && h(t, 'height', e);
    },
    d(a) {
      a && f(t);
    },
  };
}
function at(c) {
  let t, e;
  return {
    c() {
      (t = w('img')), this.h();
    },
    l(a) {
      (t = b(a, 'IMG', { src: !0, alt: !0 })), this.h();
    },
    h() {
      G(t.src, (e = T(c[0]))) || h(t, 'src', e), h(t, 'alt', c[1]);
    },
    m(a, l) {
      v(a, t, l);
    },
    p(a, l) {
      l & 1 && !G(t.src, (e = T(a[0]))) && h(t, 'src', e),
        l & 2 && h(t, 'alt', a[1]);
    },
    d(a) {
      a && f(t);
    },
  };
}
function F(c) {
  let t, e;
  return {
    c() {
      (t = w('figcaption')), (e = C(c[2]));
    },
    l(a) {
      t = b(a, 'FIGCAPTION', {});
      var l = E(t);
      (e = M(l, c[2])), l.forEach(f);
    },
    m(a, l) {
      v(a, t, l), I(t, e);
    },
    p(a, l) {
      l & 4 && Z(e, a[2]);
    },
    d(a) {
      a && f(t);
    },
  };
}
function nt(c) {
  let t, e, a;
  function l(n, p) {
    return !n[8] || (n[11] && n[9]) ? at : et;
  }
  let m = l(c),
    r = m(c),
    o = c[2] && F(c);
  return {
    c() {
      (t = w('figure')), r.c(), (e = z()), o && o.c(), this.h();
    },
    l(n) {
      t = b(n, 'FIGURE', { class: !0 });
      var p = E(t);
      r.l(p), (e = D(p)), o && o.l(p), p.forEach(f), this.h();
    },
    h() {
      h(
        t,
        'class',
        (a =
          q(
            A('photo', { wide: c[4], wider: c[5], widest: c[6], fluid: c[7] })
          ) + ' svelte-1g1o650')
      );
    },
    m(n, p) {
      v(n, t, p), r.m(t, null), I(t, e), o && o.m(t, null), c[16](t);
    },
    p(n, [p]) {
      m === (m = l(n)) && r
        ? r.p(n, p)
        : (r.d(1), (r = m(n)), r && (r.c(), r.m(t, e))),
        n[2]
          ? o
            ? o.p(n, p)
            : ((o = F(n)), o.c(), o.m(t, null))
          : o && (o.d(1), (o = null)),
        p & 240 &&
          a !==
            (a =
              q(
                A('photo', {
                  wide: n[4],
                  wider: n[5],
                  widest: n[6],
                  fluid: n[7],
                })
              ) + ' svelte-1g1o650') &&
          h(t, 'class', a);
    },
    i: O,
    o: O,
    d(n) {
      n && f(t), r.d(), o && o.d(), c[16](null);
    },
  };
}
function st(c, t, e) {
  let { src: a } = t,
    { alt: l } = t,
    { caption: m } = t,
    { height: r = 100 } = t,
    { wide: o = !1 } = t,
    { wider: n = !1 } = t,
    { widest: p = !1 } = t,
    { fluid: y = !1 } = t,
    { lazy: g = !1 } = t,
    { top: _ = 0 } = t,
    { bottom: i = 0 } = t,
    { left: u = 0 } = t,
    { right: k = 0 } = t,
    j = !1,
    d;
  const P = typeof IntersectionObserver != 'undefined';
  x(() => {
    if (!!g && P) {
      const s = `${i}px ${u}px ${_}px ${k}px`,
        S = new IntersectionObserver(
          (Y) => {
            e(9, (j = Y[0].isIntersecting)), j && S.unobserve(d);
          },
          { rootMargin: s }
        );
      return S.observe(d), () => S.unobserve(d);
    }
  });
  function X(s) {
    $[s ? 'unshift' : 'push'](() => {
      (d = s), e(10, d);
    });
  }
  return (
    (c.$$set = (s) => {
      'src' in s && e(0, (a = s.src)),
        'alt' in s && e(1, (l = s.alt)),
        'caption' in s && e(2, (m = s.caption)),
        'height' in s && e(3, (r = s.height)),
        'wide' in s && e(4, (o = s.wide)),
        'wider' in s && e(5, (n = s.wider)),
        'widest' in s && e(6, (p = s.widest)),
        'fluid' in s && e(7, (y = s.fluid)),
        'lazy' in s && e(8, (g = s.lazy)),
        'top' in s && e(12, (_ = s.top)),
        'bottom' in s && e(13, (i = s.bottom)),
        'left' in s && e(14, (u = s.left)),
        'right' in s && e(15, (k = s.right));
    }),
    [a, l, m, r, o, n, p, y, g, j, d, P, _, i, u, k, X]
  );
}
class lt extends R {
  constructor(t) {
    super();
    B(this, t, st, nt, J, {
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
        K(t.$$.fragment);
      },
      l(a) {
        L(t.$$.fragment, a);
      },
      m(a, l) {
        U(t, a, l), (e = !0);
      },
      p: O,
      i(a) {
        e || (V(t.$$.fragment, a), (e = !0));
      },
      o(a) {
        W(t.$$.fragment, a), (e = !1);
      },
      d(a) {
        Q(t, a);
      },
    }
  );
}
function ct(c) {
  let t,
    e,
    a,
    l,
    m,
    r,
    o,
    n,
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
    y,
    g,
    _;
  return (
    (g = new tt({
      props: { $$slots: { default: [it] }, $$scope: { ctx: c } },
    })),
    {
      c() {
        (t = w('section')),
          (e = w('h2')),
          (a = C(H)),
          (l = z()),
          (m = w('p')),
          (r = C(N)),
          (o = z()),
          (n = w('pre')),
          (y = z()),
          K(g.$$.fragment),
          this.h();
      },
      l(i) {
        t = b(i, 'SECTION', {});
        var u = E(t);
        e = b(u, 'H2', {});
        var k = E(e);
        (a = M(k, H)), k.forEach(f), (l = D(u)), (m = b(u, 'P', {}));
        var j = E(m);
        (r = M(j, N)),
          j.forEach(f),
          u.forEach(f),
          (o = D(i)),
          (n = b(i, 'PRE', { class: !0 }));
        var d = E(n);
        d.forEach(f), (y = D(i)), L(g.$$.fragment, i), this.h();
      },
      h() {
        h(n, 'class', 'language-svelte');
      },
      m(i, u) {
        v(i, t, u),
          I(t, e),
          I(e, a),
          I(t, l),
          I(t, m),
          I(m, r),
          v(i, o, u),
          v(i, n, u),
          (n.innerHTML = p),
          v(i, y, u),
          U(g, i, u),
          (_ = !0);
      },
      p(i, [u]) {
        const k = {};
        u & 1 && (k.$$scope = { dirty: u, ctx: i }), g.$set(k);
      },
      i(i) {
        _ || (V(g.$$.fragment, i), (_ = !0));
      },
      o(i) {
        W(g.$$.fragment, i), (_ = !1);
      },
      d(i) {
        i && f(t), i && f(o), i && f(n), i && f(y), Q(g, i);
      },
    }
  );
}
const ot = {
    title: 'Image',
    description: 'A full-width image inside the text well.',
    slug: 'image',
  },
  { title: H, description: N, slug: mt } = ot;
class gt extends R {
  constructor(t) {
    super();
    B(this, t, null, ct, J, {});
  }
}
export { gt as default, ot as metadata };
