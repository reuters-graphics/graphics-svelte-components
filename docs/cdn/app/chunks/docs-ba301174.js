import {
  S as H,
  i as S,
  s as q,
  D as V,
  e as _,
  k as y,
  c as v,
  a as L,
  d as u,
  n as C,
  b as r,
  f as d,
  H as b,
  E as O,
  F as z,
  G as B,
  x as j,
  u as I,
  U as w,
  t as F,
  j as R,
  g as P,
  m as D,
  o as G,
  v as M,
  I as J,
} from './vendor-7ea24681.js';
import { D as K } from './index-457577f8.js';
function Q(i) {
  let s, e;
  return {
    c() {
      (s = _('img')), this.h();
    },
    l(n) {
      (s = v(n, 'IMG', { class: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      r(s, 'class', 'logo reuters-graphics'),
        w(
          s.src,
          (e =
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg')
        ) || r(s, 'src', e),
        r(s, 'alt', 'Reuters graphics logo');
    },
    m(n, o) {
      d(n, s, o);
    },
    d(n) {
      n && u(s);
    },
  };
}
function W(i) {
  let s, e;
  return {
    c() {
      (s = _('img')), this.h();
    },
    l(n) {
      (s = v(n, 'IMG', { class: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      r(s, 'class', 'logo reuters-graphics'),
        w(
          s.src,
          (e =
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-light.svg')
        ) || r(s, 'src', e),
        r(s, 'alt', 'Reuters graphics logo');
    },
    m(n, o) {
      d(n, s, o);
    },
    d(n) {
      n && u(s);
    },
  };
}
function X(i) {
  let s, e;
  return {
    c() {
      (s = _('img')), this.h();
    },
    l(n) {
      (s = v(n, 'IMG', { class: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      r(s, 'class', 'logo reuters-graphics'),
        w(
          s.src,
          (e =
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-dark.svg')
        ) || r(s, 'src', e),
        r(s, 'alt', 'Reuters graphics logo');
    },
    m(n, o) {
      d(n, s, o);
    },
    d(n) {
      n && u(s);
    },
  };
}
function Y(i) {
  let s, e;
  return {
    c() {
      (s = _('img')), this.h();
    },
    l(n) {
      (s = v(n, 'IMG', { class: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      r(s, 'class', 'logo reuters-graphics'),
        w(
          s.src,
          (e =
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-light.svg')
        ) || r(s, 'src', e),
        r(s, 'alt', 'Reuters graphics logo');
    },
    m(n, o) {
      d(n, s, o);
    },
    d(n) {
      n && u(s);
    },
  };
}
function Z(i) {
  let s, e, n, o, c, k, t;
  function p(a, l) {
    return a[2] && a[3] ? Y : a[2] ? X : a[3] ? W : Q;
  }
  let f = p(i),
    m = f(i);
  const h = i[5].default,
    g = V(h, i, i[4], null);
  return {
    c() {
      (s = _('nav')),
        (e = _('div')),
        (n = _('a')),
        (o = _('figure')),
        m.c(),
        (c = y()),
        g && g.c(),
        this.h();
    },
    l(a) {
      s = v(a, 'NAV', { class: !0, style: !0 });
      var l = L(s);
      e = v(l, 'DIV', { class: !0 });
      var $ = L(e);
      n = v($, 'A', { href: !0 });
      var E = L(n);
      o = v(E, 'FIGURE', { class: !0 });
      var N = L(o);
      m.l(N),
        N.forEach(u),
        E.forEach(u),
        $.forEach(u),
        (c = C(l)),
        g && g.l(l),
        l.forEach(u),
        this.h();
    },
    h() {
      r(o, 'class', 'navbar-brand'),
        r(n, 'href', i[0]),
        r(e, 'class', 'logo-container'),
        r(s, 'class', 'nav'),
        r(s, 'style', (k = `background: ${i[1]};`));
    },
    m(a, l) {
      d(a, s, l),
        b(s, e),
        b(e, n),
        b(n, o),
        m.m(o, null),
        b(s, c),
        g && g.m(s, null),
        (t = !0);
    },
    p(a, [l]) {
      f !== (f = p(a)) && (m.d(1), (m = f(a)), m && (m.c(), m.m(o, null))),
        (!t || l & 1) && r(n, 'href', a[0]),
        g &&
          g.p &&
          (!t || l & 16) &&
          O(g, h, a, a[4], t ? B(h, a[4], l, null) : z(a[4]), null),
        (!t || (l & 2 && k !== (k = `background: ${a[1]};`))) &&
          r(s, 'style', k);
    },
    i(a) {
      t || (j(g, a), (t = !0));
    },
    o(a) {
      I(g, a), (t = !1);
    },
    d(a) {
      a && u(s), m.d(), g && g.d(a);
    },
  };
}
function x(i, s, e) {
  let { $$slots: n = {}, $$scope: o } = s,
    { link: c = 'https://graphics.reuters.com' } = s,
    { backgroundColour: k = '#333333' } = s,
    { monocolourLogo: t = !1 } = s,
    { lightLogo: p = !0 } = s;
  return (
    (i.$$set = (f) => {
      'link' in f && e(0, (c = f.link)),
        'backgroundColour' in f && e(1, (k = f.backgroundColour)),
        'monocolourLogo' in f && e(2, (t = f.monocolourLogo)),
        'lightLogo' in f && e(3, (p = f.lightLogo)),
        '$$scope' in f && e(4, (o = f.$$scope));
    }),
    [c, k, t, p, o, n]
  );
}
class A extends H {
  constructor(s) {
    super();
    S(this, s, x, Z, q, {
      link: 0,
      backgroundColour: 1,
      monocolourLogo: 2,
      lightLogo: 3,
    });
  }
}
function ss(i) {
  let s, e, n, o, c, k;
  return (
    (s = new A({})),
    (n = new A({ props: { lightLogo: !1, backgroundColour: '#fff' } })),
    (c = new A({
      props: { lightLogo: !0, monocolourLogo: !0, backgroundColour: 'purple' },
    })),
    {
      c() {
        R(s.$$.fragment),
          (e = y()),
          R(n.$$.fragment),
          (o = y()),
          R(c.$$.fragment);
      },
      l(t) {
        D(s.$$.fragment, t),
          (e = C(t)),
          D(n.$$.fragment, t),
          (o = C(t)),
          D(c.$$.fragment, t);
      },
      m(t, p) {
        G(s, t, p), d(t, e, p), G(n, t, p), d(t, o, p), G(c, t, p), (k = !0);
      },
      p: J,
      i(t) {
        k ||
          (j(s.$$.fragment, t),
          j(n.$$.fragment, t),
          j(c.$$.fragment, t),
          (k = !0));
      },
      o(t) {
        I(s.$$.fragment, t), I(n.$$.fragment, t), I(c.$$.fragment, t), (k = !1);
      },
      d(t) {
        M(s, t), t && u(e), M(n, t), t && u(o), M(c, t);
      },
    }
  );
}
function as(i) {
  let s,
    e,
    n,
    o,
    c,
    k,
    t,
    p,
    f = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Nav <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- Default --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Nav</span>
  <span class="token attr-name">link</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://graphics.reuters.com<span class="token punctuation">"</span></span>
  <span class="token attr-name">backgroundColour</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#333<span class="token punctuation">"</span></span>
  <span class="token attr-name">lightLogo="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">monocolourLogo="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
<span class="token punctuation">/></span></span>

<span class="token comment">&lt;!-- Reversed --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Nav</span> <span class="token attr-name">lightLogo="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">backgroundColour</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#fff<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token comment">&lt;!-- Custom --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Nav</span> <span class="token attr-name">lightLogo="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">monocolourLogo="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">backgroundColour</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>purple<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code>`,
    m,
    h,
    g;
  return (
    (h = new K({ props: { $$slots: { default: [ss] }, $$scope: { ctx: i } } })),
    {
      c() {
        (s = _('section')),
          (e = _('h2')),
          (n = F(T)),
          (o = y()),
          (c = _('p')),
          (k = F(U)),
          (t = y()),
          (p = _('pre')),
          (m = y()),
          R(h.$$.fragment),
          this.h();
      },
      l(a) {
        s = v(a, 'SECTION', {});
        var l = L(s);
        e = v(l, 'H2', {});
        var $ = L(e);
        (n = P($, T)), $.forEach(u), (o = C(l)), (c = v(l, 'P', {}));
        var E = L(c);
        (k = P(E, U)),
          E.forEach(u),
          l.forEach(u),
          (t = C(a)),
          (p = v(a, 'PRE', { class: !0 }));
        var N = L(p);
        N.forEach(u), (m = C(a)), D(h.$$.fragment, a), this.h();
      },
      h() {
        r(p, 'class', 'language-svelte');
      },
      m(a, l) {
        d(a, s, l),
          b(s, e),
          b(e, n),
          b(s, o),
          b(s, c),
          b(c, k),
          d(a, t, l),
          d(a, p, l),
          (p.innerHTML = f),
          d(a, m, l),
          G(h, a, l),
          (g = !0);
      },
      p(a, [l]) {
        const $ = {};
        l & 1 && ($.$$scope = { dirty: l, ctx: a }), h.$set($);
      },
      i(a) {
        g || (j(h.$$.fragment, a), (g = !0));
      },
      o(a) {
        I(h.$$.fragment, a), (g = !1);
      },
      d(a) {
        a && u(s), a && u(t), a && u(p), a && u(m), M(h, a);
      },
    }
  );
}
const ns = {
    title: 'Nav',
    description: 'Add a top-level nav bar to the page.',
    slug: 'nav',
  },
  { title: T, description: U, slug: os } = ns;
class ls extends H {
  constructor(s) {
    super();
    S(this, s, null, as, q, {});
  }
}
export { ls as default, ns as metadata };
