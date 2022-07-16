import {
  S as R,
  i as B,
  s as L,
  e as w,
  t as S,
  c as b,
  a as E,
  h as C,
  d as f,
  g as v,
  J as I,
  j as x,
  k as z,
  m as D,
  b as h,
  M as A,
  E as O,
  v as $,
  X as tt,
  Y as G,
  w as U,
  x as V,
  y as X,
  q as Y,
  o as K,
  B as Q,
} from './index-83a5d9f9.js';
import { D as et } from './index-16ec1060.js';
import { b as P, u as T } from './main-17f5a974.js';
import { a as F } from './paths-396f020f.js';
function nt(c) {
  let t, e;
  return {
    c() {
      (t = w('div')), this.h();
    },
    l(n) {
      (t = b(n, 'DIV', { class: !0, height: !0 })), E(t).forEach(f), this.h();
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
function st(c) {
  let t, e;
  return {
    c() {
      (t = w('img')), this.h();
    },
    l(n) {
      (t = b(n, 'IMG', { src: !0, alt: !0 })), this.h();
    },
    h() {
      G(t.src, (e = T(F, c[0]))) || h(t, 'src', e), h(t, 'alt', c[1]);
    },
    m(n, l) {
      v(n, t, l);
    },
    p(n, l) {
      l & 1 && !G(t.src, (e = T(F, n[0]))) && h(t, 'src', e),
        l & 2 && h(t, 'alt', n[1]);
    },
    d(n) {
      n && f(t);
    },
  };
}
function H(c) {
  let t, e;
  return {
    c() {
      (t = w('figcaption')), (e = S(c[2]));
    },
    l(n) {
      t = b(n, 'FIGCAPTION', {});
      var l = E(t);
      (e = C(l, c[2])), l.forEach(f);
    },
    m(n, l) {
      v(n, t, l), I(t, e);
    },
    p(n, l) {
      l & 4 && x(e, n[2]);
    },
    d(n) {
      n && f(t);
    },
  };
}
function at(c) {
  let t, e, n;
  function l(s, p) {
    return !s[8] || (s[11] && s[9]) ? st : nt;
  }
  let m = l(c),
    r = m(c),
    o = c[2] && H(c);
  return {
    c() {
      (t = w('figure')), r.c(), (e = z()), o && o.c(), this.h();
    },
    l(s) {
      t = b(s, 'FIGURE', { class: !0 });
      var p = E(t);
      r.l(p), (e = D(p)), o && o.l(p), p.forEach(f), this.h();
    },
    h() {
      h(
        t,
        'class',
        (n =
          A(
            P('photo', { wide: c[4], wider: c[5], widest: c[6], fluid: c[7] })
          ) + ' svelte-1g1o650')
      );
    },
    m(s, p) {
      v(s, t, p), r.m(t, null), I(t, e), o && o.m(t, null), c[16](t);
    },
    p(s, [p]) {
      m === (m = l(s)) && r
        ? r.p(s, p)
        : (r.d(1), (r = m(s)), r && (r.c(), r.m(t, e))),
        s[2]
          ? o
            ? o.p(s, p)
            : ((o = H(s)), o.c(), o.m(t, null))
          : o && (o.d(1), (o = null)),
        p & 240 &&
          n !==
            (n =
              A(
                P('photo', {
                  wide: s[4],
                  wider: s[5],
                  widest: s[6],
                  fluid: s[7],
                })
              ) + ' svelte-1g1o650') &&
          h(t, 'class', n);
    },
    i: O,
    o: O,
    d(s) {
      s && f(t), r.d(), o && o.d(), c[16](null);
    },
  };
}
function lt(c, t, e) {
  let { src: n } = t,
    { alt: l } = t,
    { caption: m } = t,
    { height: r = 100 } = t,
    { wide: o = !1 } = t,
    { wider: s = !1 } = t,
    { widest: p = !1 } = t,
    { fluid: y = !1 } = t,
    { lazy: g = !1 } = t,
    { top: _ = 0 } = t,
    { bottom: i = 0 } = t,
    { left: u = 0 } = t,
    { right: k = 0 } = t,
    j = !1,
    d;
  const q = typeof IntersectionObserver != 'undefined';
  $(() => {
    if (!!g && q) {
      const a = `${i}px ${u}px ${_}px ${k}px`,
        M = new IntersectionObserver(
          (Z) => {
            e(9, (j = Z[0].isIntersecting)), j && M.unobserve(d);
          },
          { rootMargin: a }
        );
      return M.observe(d), () => M.unobserve(d);
    }
  });
  function W(a) {
    tt[a ? 'unshift' : 'push'](() => {
      (d = a), e(10, d);
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
        'fluid' in a && e(7, (y = a.fluid)),
        'lazy' in a && e(8, (g = a.lazy)),
        'top' in a && e(12, (_ = a.top)),
        'bottom' in a && e(13, (i = a.bottom)),
        'left' in a && e(14, (u = a.left)),
        'right' in a && e(15, (k = a.right));
    }),
    [n, l, m, r, o, s, p, y, g, j, d, q, _, i, u, k, W]
  );
}
class it extends R {
  constructor(t) {
    super(),
      B(this, t, lt, at, L, {
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
function ct(c) {
  let t, e;
  return (
    (t = new it({
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
        U(t.$$.fragment);
      },
      l(n) {
        V(t.$$.fragment, n);
      },
      m(n, l) {
        X(t, n, l), (e = !0);
      },
      p: O,
      i(n) {
        e || (Y(t.$$.fragment, n), (e = !0));
      },
      o(n) {
        K(t.$$.fragment, n), (e = !1);
      },
      d(n) {
        Q(t, n);
      },
    }
  );
}
function ot(c) {
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
    y,
    g,
    _;
  return (
    (g = new et({
      props: { $$slots: { default: [ct] }, $$scope: { ctx: c } },
    })),
    {
      c() {
        (t = w('section')),
          (e = w('h2')),
          (n = S(J)),
          (l = z()),
          (m = w('p')),
          (r = S(N)),
          (o = z()),
          (s = w('pre')),
          (y = z()),
          U(g.$$.fragment),
          this.h();
      },
      l(i) {
        t = b(i, 'SECTION', {});
        var u = E(t);
        e = b(u, 'H2', {});
        var k = E(e);
        (n = C(k, J)), k.forEach(f), (l = D(u)), (m = b(u, 'P', {}));
        var j = E(m);
        (r = C(j, N)),
          j.forEach(f),
          u.forEach(f),
          (o = D(i)),
          (s = b(i, 'PRE', { class: !0 }));
        var d = E(s);
        d.forEach(f), (y = D(i)), V(g.$$.fragment, i), this.h();
      },
      h() {
        h(s, 'class', 'language-svelte');
      },
      m(i, u) {
        v(i, t, u),
          I(t, e),
          I(e, n),
          I(t, l),
          I(t, m),
          I(m, r),
          v(i, o, u),
          v(i, s, u),
          (s.innerHTML = p),
          v(i, y, u),
          X(g, i, u),
          (_ = !0);
      },
      p(i, [u]) {
        const k = {};
        u & 1 && (k.$$scope = { dirty: u, ctx: i }), g.$set(k);
      },
      i(i) {
        _ || (Y(g.$$.fragment, i), (_ = !0));
      },
      o(i) {
        K(g.$$.fragment, i), (_ = !1);
      },
      d(i) {
        i && f(t), i && f(o), i && f(s), i && f(y), Q(g, i);
      },
    }
  );
}
const rt = {
    title: 'Image',
    description: 'A full-width image inside the text well.',
    slug: 'image',
  },
  { title: J, description: N, slug: gt } = rt;
class ht extends R {
  constructor(t) {
    super(), B(this, t, null, ot, L, {});
  }
}
export { ht as default, rt as metadata };
