import {
  S as s,
  i as a,
  s as n,
  e as t,
  t as e,
  c as p,
  a as o,
  g as c,
  d as i,
  f as l,
  H as r,
  h as u,
  k as g,
  n as h,
  b as d,
  a4 as m,
  a5 as f,
  I as k,
  A as $,
  a6 as w,
  U as v,
  j as x,
  m as b,
  o as I,
  x as j,
  u as y,
  v as E,
} from './vendor-54feeb2f.js';
import { D as z } from './index-c7a36b9c.js';
import { g as A } from './@component-docs-e19b5d4a.js';
import './paths-6758d194.js';
function O(s) {
  let a, n;
  return {
    c() {
      (a = t('div')), this.h();
    },
    l(s) {
      (a = p(s, 'DIV', { class: !0, height: !0 })), o(a).forEach(i), this.h();
    },
    h() {
      d(a, 'class', 'placeholder svelte-1g1o650'),
        d(a, 'height', (n = `${s[3]}px`));
    },
    m(s, n) {
      l(s, a, n);
    },
    p(s, t) {
      8 & t && n !== (n = `${s[3]}px`) && d(a, 'height', n);
    },
    d(s) {
      s && i(a);
    },
  };
}
function S(s) {
  let a, n;
  return {
    c() {
      (a = t('img')), this.h();
    },
    l(s) {
      (a = p(s, 'IMG', { src: !0, alt: !0 })), this.h();
    },
    h() {
      v(a.src, (n = A(s[0]))) || d(a, 'src', n), d(a, 'alt', s[1]);
    },
    m(s, n) {
      l(s, a, n);
    },
    p(s, t) {
      1 & t && !v(a.src, (n = A(s[0]))) && d(a, 'src', n),
        2 & t && d(a, 'alt', s[1]);
    },
    d(s) {
      s && i(a);
    },
  };
}
function D(s) {
  let a, n;
  return {
    c() {
      (a = t('figcaption')), (n = e(s[2]));
    },
    l(t) {
      a = p(t, 'FIGCAPTION', {});
      var e = o(a);
      (n = c(e, s[2])), e.forEach(i);
    },
    m(s, t) {
      l(s, a, t), r(a, n);
    },
    p(s, a) {
      4 & a && u(n, s[2]);
    },
    d(s) {
      s && i(a);
    },
  };
}
function G(s) {
  let a, n, e;
  function c(s, a) {
    return !s[8] || (s[11] && s[9]) ? S : O;
  }
  let u = c(s),
    $ = u(s),
    w = s[2] && D(s);
  return {
    c() {
      (a = t('figure')), $.c(), (n = g()), w && w.c(), this.h();
    },
    l(s) {
      a = p(s, 'FIGURE', { class: !0 });
      var t = o(a);
      $.l(t), (n = h(t)), w && w.l(t), t.forEach(i), this.h();
    },
    h() {
      d(
        a,
        'class',
        (e =
          m(
            f('photo', { wide: s[4], wider: s[5], widest: s[6], fluid: s[7] })
          ) + ' svelte-1g1o650')
      );
    },
    m(t, e) {
      l(t, a, e), $.m(a, null), r(a, n), w && w.m(a, null), s[16](a);
    },
    p(s, [t]) {
      u === (u = c(s)) && $
        ? $.p(s, t)
        : ($.d(1), ($ = u(s)), $ && ($.c(), $.m(a, n))),
        s[2]
          ? w
            ? w.p(s, t)
            : ((w = D(s)), w.c(), w.m(a, null))
          : w && (w.d(1), (w = null)),
        240 & t &&
          e !==
            (e =
              m(
                f('photo', {
                  wide: s[4],
                  wider: s[5],
                  widest: s[6],
                  fluid: s[7],
                })
              ) + ' svelte-1g1o650') &&
          d(a, 'class', e);
    },
    i: k,
    o: k,
    d(n) {
      n && i(a), $.d(), w && w.d(), s[16](null);
    },
  };
}
function H(s, a, n) {
  let t,
    { src: e } = a,
    { alt: p } = a,
    { caption: o } = a,
    { height: c = 100 } = a,
    { wide: i = !1 } = a,
    { wider: l = !1 } = a,
    { widest: r = !1 } = a,
    { fluid: u = !1 } = a,
    { lazy: g = !1 } = a,
    { top: h = 0 } = a,
    { bottom: d = 0 } = a,
    { left: m = 0 } = a,
    { right: f = 0 } = a,
    k = !1;
  const v = 'undefined' != typeof IntersectionObserver;
  return (
    $(() => {
      if (g && v) {
        const s = new IntersectionObserver(
          (a) => {
            n(9, (k = a[0].isIntersecting)), k && s.unobserve(t);
          },
          { rootMargin: `${d}px ${m}px ${h}px ${f}px` }
        );
        return s.observe(t), () => s.unobserve(t);
      }
    }),
    (s.$$set = (s) => {
      'src' in s && n(0, (e = s.src)),
        'alt' in s && n(1, (p = s.alt)),
        'caption' in s && n(2, (o = s.caption)),
        'height' in s && n(3, (c = s.height)),
        'wide' in s && n(4, (i = s.wide)),
        'wider' in s && n(5, (l = s.wider)),
        'widest' in s && n(6, (r = s.widest)),
        'fluid' in s && n(7, (u = s.fluid)),
        'lazy' in s && n(8, (g = s.lazy)),
        'top' in s && n(12, (h = s.top)),
        'bottom' in s && n(13, (d = s.bottom)),
        'left' in s && n(14, (m = s.left)),
        'right' in s && n(15, (f = s.right));
    }),
    [
      e,
      p,
      o,
      c,
      i,
      l,
      r,
      u,
      g,
      k,
      t,
      v,
      h,
      d,
      m,
      f,
      function (s) {
        w[s ? 'unshift' : 'push'](() => {
          (t = s), n(10, t);
        });
      },
    ]
  );
}
class M extends s {
  constructor(s) {
    super(),
      a(this, s, H, G, n, {
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
function P(s) {
  let a, n;
  return (
    (a = new M({
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
        x(a.$$.fragment);
      },
      l(s) {
        b(a.$$.fragment, s);
      },
      m(s, t) {
        I(a, s, t), (n = !0);
      },
      p: k,
      i(s) {
        n || (j(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        y(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        E(a, s);
      },
    }
  );
}
function T(s) {
  let a, n, u, m, f, k, $, w, v, A, O;
  return (
    (A = new z({ props: { $$slots: { default: [P] }, $$scope: { ctx: s } } })),
    {
      c() {
        (a = t('section')),
          (n = t('h2')),
          (u = e(F)),
          (m = g()),
          (f = t('p')),
          (k = e(N)),
          ($ = g()),
          (w = t('pre')),
          (v = g()),
          x(A.$$.fragment),
          this.h();
      },
      l(s) {
        a = p(s, 'SECTION', {});
        var t = o(a);
        n = p(t, 'H2', {});
        var e = o(n);
        (u = c(e, F)), e.forEach(i), (m = h(t)), (f = p(t, 'P', {}));
        var l = o(f);
        (k = c(l, N)),
          l.forEach(i),
          t.forEach(i),
          ($ = h(s)),
          (w = p(s, 'PRE', { class: !0 })),
          o(w).forEach(i),
          (v = h(s)),
          b(A.$$.fragment, s),
          this.h();
      },
      h() {
        d(w, 'class', 'language-svelte');
      },
      m(s, t) {
        l(s, a, t),
          r(a, n),
          r(n, u),
          r(a, m),
          r(a, f),
          r(f, k),
          l(s, $, t),
          l(s, w, t),
          (w.innerHTML =
            '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Image <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Image</span>\n  <span class="token attr-name">src="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'path/to/image.jpg\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">alt="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'Some alt text\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">caption="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">\'A caption\'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">lazy="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">wide</span>\n<span class="token punctuation">/></span></span></code>'),
          l(s, v, t),
          I(A, s, t),
          (O = !0);
      },
      p(s, [a]) {
        const n = {};
        1 & a && (n.$$scope = { dirty: a, ctx: s }), A.$set(n);
      },
      i(s) {
        O || (j(A.$$.fragment, s), (O = !0));
      },
      o(s) {
        y(A.$$.fragment, s), (O = !1);
      },
      d(s) {
        s && i(a), s && i($), s && i(w), s && i(v), E(A, s);
      },
    }
  );
}
const C = {
    title: 'Image',
    description: 'A full-width image inside the text well.',
    slug: 'image',
  },
  { title: F, description: N, slug: R } = C;
export default class extends s {
  constructor(s) {
    super(), a(this, s, null, T, n, {});
  }
}
export { C as metadata };
