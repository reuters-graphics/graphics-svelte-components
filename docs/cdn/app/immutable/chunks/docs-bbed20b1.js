import {
  S as P,
  i as T,
  s as V,
  F as B,
  e as _,
  k as y,
  c as v,
  a as L,
  d as u,
  m as C,
  b as r,
  g as d,
  J as b,
  G as J,
  H as O,
  I as U,
  q as w,
  o as I,
  Y as M,
  t as A,
  w as R,
  h as H,
  x as j,
  y as G,
  B as D,
  E as Y,
} from './index-10187abb.js';
import { D as z } from './index-d1261ce6.js';
function K(i) {
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
        M(
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
        M(
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
        M(
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
        M(
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
  let s, e, n, o, c, m, t;
  function p(a, l) {
    return a[2] && a[3] ? X : a[2] ? W : a[3] ? Q : K;
  }
  let k = p(i),
    f = k(i);
  const h = i[5].default,
    g = B(h, i, i[4], null);
  return {
    c() {
      (s = _('nav')),
        (e = _('div')),
        (n = _('a')),
        (o = _('figure')),
        f.c(),
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
      f.l(N),
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
        r(s, 'style', (m = `background: ${i[1]};`));
    },
    m(a, l) {
      d(a, s, l),
        b(s, e),
        b(e, n),
        b(n, o),
        f.m(o, null),
        b(s, c),
        g && g.m(s, null),
        (t = !0);
    },
    p(a, [l]) {
      k !== (k = p(a)) && (f.d(1), (f = k(a)), f && (f.c(), f.m(o, null))),
        (!t || l & 1) && r(n, 'href', a[0]),
        g &&
          g.p &&
          (!t || l & 16) &&
          J(g, h, a, a[4], t ? U(h, a[4], l, null) : O(a[4]), null),
        (!t || (l & 2 && m !== (m = `background: ${a[1]};`))) &&
          r(s, 'style', m);
    },
    i(a) {
      t || (w(g, a), (t = !0));
    },
    o(a) {
      I(g, a), (t = !1);
    },
    d(a) {
      a && u(s), f.d(), g && g.d(a);
    },
  };
}
function x(i, s, e) {
  let { $$slots: n = {}, $$scope: o } = s,
    { link: c = 'https://graphics.reuters.com' } = s,
    { backgroundColour: m = '#333333' } = s,
    { monocolourLogo: t = !1 } = s,
    { lightLogo: p = !0 } = s;
  return (
    (i.$$set = (k) => {
      'link' in k && e(0, (c = k.link)),
        'backgroundColour' in k && e(1, (m = k.backgroundColour)),
        'monocolourLogo' in k && e(2, (t = k.monocolourLogo)),
        'lightLogo' in k && e(3, (p = k.lightLogo)),
        '$$scope' in k && e(4, (o = k.$$scope));
    }),
    [c, m, t, p, o, n]
  );
}
class q extends P {
  constructor(s) {
    super(),
      T(this, s, x, Z, V, {
        link: 0,
        backgroundColour: 1,
        monocolourLogo: 2,
        lightLogo: 3,
      });
  }
}
function ss(i) {
  let s, e, n, o, c, m;
  return (
    (s = new q({})),
    (n = new q({ props: { lightLogo: !1, backgroundColour: '#fff' } })),
    (c = new q({
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
        j(s.$$.fragment, t),
          (e = C(t)),
          j(n.$$.fragment, t),
          (o = C(t)),
          j(c.$$.fragment, t);
      },
      m(t, p) {
        G(s, t, p), d(t, e, p), G(n, t, p), d(t, o, p), G(c, t, p), (m = !0);
      },
      p: Y,
      i(t) {
        m ||
          (w(s.$$.fragment, t),
          w(n.$$.fragment, t),
          w(c.$$.fragment, t),
          (m = !0));
      },
      o(t) {
        I(s.$$.fragment, t), I(n.$$.fragment, t), I(c.$$.fragment, t), (m = !1);
      },
      d(t) {
        D(s, t), t && u(e), D(n, t), t && u(o), D(c, t);
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
    m,
    t,
    p,
    k = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
    f,
    h,
    g;
  return (
    (h = new z({ props: { $$slots: { default: [ss] }, $$scope: { ctx: i } } })),
    {
      c() {
        (s = _('section')),
          (e = _('h2')),
          (n = A(S)),
          (o = y()),
          (c = _('p')),
          (m = A(F)),
          (t = y()),
          (p = _('pre')),
          (f = y()),
          R(h.$$.fragment),
          this.h();
      },
      l(a) {
        s = v(a, 'SECTION', {});
        var l = L(s);
        e = v(l, 'H2', {});
        var $ = L(e);
        (n = H($, S)), $.forEach(u), (o = C(l)), (c = v(l, 'P', {}));
        var E = L(c);
        (m = H(E, F)),
          E.forEach(u),
          l.forEach(u),
          (t = C(a)),
          (p = v(a, 'PRE', { class: !0 }));
        var N = L(p);
        N.forEach(u), (f = C(a)), j(h.$$.fragment, a), this.h();
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
          b(c, m),
          d(a, t, l),
          d(a, p, l),
          (p.innerHTML = k),
          d(a, f, l),
          G(h, a, l),
          (g = !0);
      },
      p(a, [l]) {
        const $ = {};
        l & 1 && ($.$$scope = { dirty: l, ctx: a }), h.$set($);
      },
      i(a) {
        g || (w(h.$$.fragment, a), (g = !0));
      },
      o(a) {
        I(h.$$.fragment, a), (g = !1);
      },
      d(a) {
        a && u(s), a && u(t), a && u(p), a && u(f), D(h, a);
      },
    }
  );
}
const ns = {
    title: 'Nav',
    description: 'Add a top-level nav bar to the page.',
    slug: 'nav',
  },
  { title: S, description: F, slug: os } = ns;
class ls extends P {
  constructor(s) {
    super(), T(this, s, null, as, V, {});
  }
}
export { ls as default, ns as metadata };
