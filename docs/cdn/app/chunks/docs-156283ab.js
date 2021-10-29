import {
  S as s,
  i as a,
  s as n,
  D as t,
  e as o,
  k as e,
  c as p,
  a as c,
  d as l,
  n as r,
  b as g,
  f as u,
  H as i,
  E as h,
  F as k,
  G as m,
  x as f,
  u as v,
  U as $,
  t as d,
  j as b,
  g as L,
  m as y,
  o as E,
  v as x,
  I as C,
} from './vendor-927c0fc0.js';
import { D as j } from './index-38e47fc4.js';
function I(s) {
  let a, n;
  return {
    c() {
      (a = o('img')), this.h();
    },
    l(s) {
      (a = p(s, 'IMG', { class: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      g(a, 'class', 'logo reuters-graphics'),
        $(
          a.src,
          (n =
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg')
        ) ||
          g(
            a,
            'src',
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg'
          ),
        g(a, 'alt', 'Reuters graphics logo');
    },
    m(s, n) {
      u(s, a, n);
    },
    d(s) {
      s && l(a);
    },
  };
}
function N(s) {
  let a, n;
  return {
    c() {
      (a = o('img')), this.h();
    },
    l(s) {
      (a = p(s, 'IMG', { class: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      g(a, 'class', 'logo reuters-graphics'),
        $(
          a.src,
          (n =
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-light.svg')
        ) ||
          g(
            a,
            'src',
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-light.svg'
          ),
        g(a, 'alt', 'Reuters graphics logo');
    },
    m(s, n) {
      u(s, a, n);
    },
    d(s) {
      s && l(a);
    },
  };
}
function R(s) {
  let a, n;
  return {
    c() {
      (a = o('img')), this.h();
    },
    l(s) {
      (a = p(s, 'IMG', { class: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      g(a, 'class', 'logo reuters-graphics'),
        $(
          a.src,
          (n =
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-dark.svg')
        ) ||
          g(
            a,
            'src',
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-dark.svg'
          ),
        g(a, 'alt', 'Reuters graphics logo');
    },
    m(s, n) {
      u(s, a, n);
    },
    d(s) {
      s && l(a);
    },
  };
}
function w(s) {
  let a, n;
  return {
    c() {
      (a = o('img')), this.h();
    },
    l(s) {
      (a = p(s, 'IMG', { class: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      g(a, 'class', 'logo reuters-graphics'),
        $(
          a.src,
          (n =
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-light.svg')
        ) ||
          g(
            a,
            'src',
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-light.svg'
          ),
        g(a, 'alt', 'Reuters graphics logo');
    },
    m(s, n) {
      u(s, a, n);
    },
    d(s) {
      s && l(a);
    },
  };
}
function G(s) {
  let a, n, $, d, b, L, y;
  function E(s, a) {
    return s[2] && s[3] ? w : s[2] ? R : s[3] ? N : I;
  }
  let x = E(s),
    C = x(s);
  const j = s[5].default,
    G = t(j, s, s[4], null);
  return {
    c() {
      (a = o('nav')),
        (n = o('div')),
        ($ = o('a')),
        (d = o('figure')),
        C.c(),
        (b = e()),
        G && G.c(),
        this.h();
    },
    l(s) {
      a = p(s, 'NAV', { class: !0, style: !0 });
      var t = c(a);
      n = p(t, 'DIV', { class: !0 });
      var o = c(n);
      $ = p(o, 'A', { href: !0 });
      var e = c($);
      d = p(e, 'FIGURE', { class: !0 });
      var g = c(d);
      C.l(g),
        g.forEach(l),
        e.forEach(l),
        o.forEach(l),
        (b = r(t)),
        G && G.l(t),
        t.forEach(l),
        this.h();
    },
    h() {
      g(d, 'class', 'navbar-brand'),
        g($, 'href', s[0]),
        g(n, 'class', 'logo-container'),
        g(a, 'class', 'nav'),
        g(a, 'style', (L = `background: ${s[1]};`));
    },
    m(s, t) {
      u(s, a, t),
        i(a, n),
        i(n, $),
        i($, d),
        C.m(d, null),
        i(a, b),
        G && G.m(a, null),
        (y = !0);
    },
    p(s, [n]) {
      x !== (x = E(s)) && (C.d(1), (C = x(s)), C && (C.c(), C.m(d, null))),
        (!y || 1 & n) && g($, 'href', s[0]),
        G &&
          G.p &&
          (!y || 16 & n) &&
          h(G, j, s, s[4], y ? m(j, s[4], n, null) : k(s[4]), null),
        (!y || (2 & n && L !== (L = `background: ${s[1]};`))) &&
          g(a, 'style', L);
    },
    i(s) {
      y || (f(G, s), (y = !0));
    },
    o(s) {
      v(G, s), (y = !1);
    },
    d(s) {
      s && l(a), C.d(), G && G.d(s);
    },
  };
}
function M(s, a, n) {
  let { $$slots: t = {}, $$scope: o } = a,
    { link: e = 'https://graphics.reuters.com' } = a,
    { backgroundColour: p = '#333333' } = a,
    { monocolourLogo: c = !1 } = a,
    { lightLogo: l = !0 } = a;
  return (
    (s.$$set = (s) => {
      'link' in s && n(0, (e = s.link)),
        'backgroundColour' in s && n(1, (p = s.backgroundColour)),
        'monocolourLogo' in s && n(2, (c = s.monocolourLogo)),
        'lightLogo' in s && n(3, (l = s.lightLogo)),
        '$$scope' in s && n(4, (o = s.$$scope));
    }),
    [e, p, c, l, o, t]
  );
}
class D extends s {
  constructor(s) {
    super(),
      a(this, s, M, G, n, {
        link: 0,
        backgroundColour: 1,
        monocolourLogo: 2,
        lightLogo: 3,
      });
  }
}
function A(s) {
  let a, n, t, o, p, c;
  return (
    (a = new D({})),
    (t = new D({ props: { lightLogo: !1, backgroundColour: '#fff' } })),
    (p = new D({
      props: { lightLogo: !0, monocolourLogo: !0, backgroundColour: 'purple' },
    })),
    {
      c() {
        b(a.$$.fragment),
          (n = e()),
          b(t.$$.fragment),
          (o = e()),
          b(p.$$.fragment);
      },
      l(s) {
        y(a.$$.fragment, s),
          (n = r(s)),
          y(t.$$.fragment, s),
          (o = r(s)),
          y(p.$$.fragment, s);
      },
      m(s, e) {
        E(a, s, e), u(s, n, e), E(t, s, e), u(s, o, e), E(p, s, e), (c = !0);
      },
      p: C,
      i(s) {
        c ||
          (f(a.$$.fragment, s),
          f(t.$$.fragment, s),
          f(p.$$.fragment, s),
          (c = !0));
      },
      o(s) {
        v(a.$$.fragment, s), v(t.$$.fragment, s), v(p.$$.fragment, s), (c = !1);
      },
      d(s) {
        x(a, s), s && l(n), x(t, s), s && l(o), x(p, s);
      },
    }
  );
}
function H(s) {
  let a, n, t, h, k, m, $, C, I, N, R;
  return (
    (N = new j({ props: { $$slots: { default: [A] }, $$scope: { ctx: s } } })),
    {
      c() {
        (a = o('section')),
          (n = o('h2')),
          (t = d(P)),
          (h = e()),
          (k = o('p')),
          (m = d(S)),
          ($ = e()),
          (C = o('pre')),
          (I = e()),
          b(N.$$.fragment),
          this.h();
      },
      l(s) {
        a = p(s, 'SECTION', {});
        var o = c(a);
        n = p(o, 'H2', {});
        var e = c(n);
        (t = L(e, P)), e.forEach(l), (h = r(o)), (k = p(o, 'P', {}));
        var g = c(k);
        (m = L(g, S)),
          g.forEach(l),
          o.forEach(l),
          ($ = r(s)),
          (C = p(s, 'PRE', { class: !0 })),
          c(C).forEach(l),
          (I = r(s)),
          y(N.$$.fragment, s),
          this.h();
      },
      h() {
        g(C, 'class', 'language-svelte');
      },
      m(s, o) {
        u(s, a, o),
          i(a, n),
          i(n, t),
          i(a, h),
          i(a, k),
          i(k, m),
          u(s, $, o),
          u(s, C, o),
          (C.innerHTML =
            '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Nav <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- Default --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Nav</span>\n  <span class="token attr-name">link</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://graphics.reuters.com<span class="token punctuation">"</span></span>\n  <span class="token attr-name">backgroundColour</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#333<span class="token punctuation">"</span></span>\n  <span class="token attr-name">lightLogo="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">monocolourLogo="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n<span class="token punctuation">/></span></span>\n\n<span class="token comment">&lt;!-- Reversed --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Nav</span> <span class="token attr-name">lightLogo="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">backgroundColour</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#fff<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token comment">&lt;!-- Custom --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Nav</span> <span class="token attr-name">lightLogo="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">monocolourLogo="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">backgroundColour</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>purple<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code>'),
          u(s, I, o),
          E(N, s, o),
          (R = !0);
      },
      p(s, [a]) {
        const n = {};
        1 & a && (n.$$scope = { dirty: a, ctx: s }), N.$set(n);
      },
      i(s) {
        R || (f(N.$$.fragment, s), (R = !0));
      },
      o(s) {
        v(N.$$.fragment, s), (R = !1);
      },
      d(s) {
        s && l(a), s && l($), s && l(C), s && l(I), x(N, s);
      },
    }
  );
}
const F = {
    title: 'Nav',
    description: 'Add a top-level nav bar to the page.',
    slug: 'nav',
  },
  { title: P, description: S, slug: T } = F;
export default class extends s {
  constructor(s) {
    super(), a(this, s, null, H, n, {});
  }
}
export { F as metadata };
