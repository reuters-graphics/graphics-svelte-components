import {
  S as G,
  i as F,
  s as U,
  D as _e,
  e as k,
  c as _,
  a as b,
  d as u,
  f as $,
  E as ve,
  F as be,
  G as $e,
  x as v,
  u as E,
  A as ae,
  aa as we,
  j as C,
  k as D,
  t as O,
  m as T,
  n as A,
  g as L,
  b as w,
  H as d,
  o as N,
  h as Ee,
  v as P,
  l as S,
  I as re,
  p as ye,
  q as Re,
  r as x,
  w as ee,
  L as Ie,
  B as je,
  U as Ce,
} from './vendor-85b063f6.js';
import { D as oe } from './index-ccd418f9.js';
import './@component-docs_components-e77fd343.js';
import './paths-6758d194.js';
const De = (l) => ({ intersecting: l & 1 }),
  le = (l) => ({ intersecting: l[0] });
function Oe(l) {
  let t, n;
  const e = l[8].default,
    s = _e(e, l, l[7], le);
  return {
    c() {
      (t = k('div')), s && s.c();
    },
    l(a) {
      t = _(a, 'DIV', {});
      var r = b(t);
      s && s.l(r), r.forEach(u);
    },
    m(a, r) {
      $(a, t, r), s && s.m(t, null), l[9](t), (n = !0);
    },
    p(a, [r]) {
      s &&
        s.p &&
        (!n || r & 129) &&
        ve(s, e, a, a[7], n ? $e(e, a[7], r, De) : be(a[7]), le);
    },
    i(a) {
      n || (v(s, a), (n = !0));
    },
    o(a) {
      E(s, a), (n = !1);
    },
    d(a) {
      a && u(t), s && s.d(a), l[9](null);
    },
  };
}
function Te(l, t, n) {
  let { $$slots: e = {}, $$scope: s } = t,
    { once: a = !1 } = t,
    { top: r = 0 } = t,
    { bottom: c = 0 } = t,
    { left: o = 0 } = t,
    { right: p = 0 } = t,
    g = !1,
    h;
  ae(() => {
    if (typeof IntersectionObserver != 'undefined') {
      const y = `${c}px ${o}px ${r}px ${p}px`,
        R = new IntersectionObserver(
          (I) => {
            n(0, (g = I[0].isIntersecting)), g && a && R.unobserve(h);
          },
          { rootMargin: y }
        );
      return R.observe(h), () => R.unobserve(h);
    }
    function f() {
      const y = h.getBoundingClientRect();
      n(
        0,
        (g =
          y.bottom + c > 0 &&
          y.right + p > 0 &&
          y.top - r < window.innerHeight &&
          y.left - o < window.innerWidth)
      ),
        g && a && window.removeEventListener('scroll', f);
    }
    return (
      window.addEventListener('scroll', f),
      () => window.removeEventListener('scroll', f)
    );
  });
  function Q(f) {
    we[f ? 'unshift' : 'push'](() => {
      (h = f), n(1, h);
    });
  }
  return (
    (l.$$set = (f) => {
      'once' in f && n(2, (a = f.once)),
        'top' in f && n(3, (r = f.top)),
        'bottom' in f && n(4, (c = f.bottom)),
        'left' in f && n(5, (o = f.left)),
        'right' in f && n(6, (p = f.right)),
        '$$scope' in f && n(7, (s = f.$$scope));
    }),
    [g, h, a, r, c, o, p, s, e, Q]
  );
}
class ce extends G {
  constructor(t) {
    super();
    F(this, t, Te, Oe, U, { once: 2, top: 3, bottom: 4, left: 5, right: 6 });
  }
}
function Ae(l) {
  let t;
  return {
    c() {
      (t = k('div')), this.h();
    },
    l(n) {
      (t = _(n, 'DIV', { class: !0 })), b(t).forEach(u), this.h();
    },
    h() {
      w(t, 'class', 'image svelte-1xxrkf0');
    },
    m(n, e) {
      $(n, t, e);
    },
    p: re,
    d(n) {
      n && u(t);
    },
  };
}
function Le(l) {
  let t, n;
  return {
    c() {
      (t = k('div')), this.h();
    },
    l(e) {
      (t = _(e, 'DIV', { class: !0, style: !0 })), b(t).forEach(u), this.h();
    },
    h() {
      w(t, 'class', 'image svelte-1xxrkf0'),
        w(t, 'style', (n = `background-image: url(${l[1]});`));
    },
    m(e, s) {
      $(e, t, s);
    },
    p(e, s) {
      s & 2 &&
        n !== (n = `background-image: url(${e[1]});`) &&
        w(t, 'style', n);
    },
    d(e) {
      e && u(t);
    },
  };
}
function Ne(l) {
  let t;
  function n(a, r) {
    return a[4] ? Le : Ae;
  }
  let e = n(l),
    s = e(l);
  return {
    c() {
      s.c(), (t = S());
    },
    l(a) {
      s.l(a), (t = S());
    },
    m(a, r) {
      s.m(a, r), $(a, t, r);
    },
    p(a, r) {
      e === (e = n(a)) && s
        ? s.p(a, r)
        : (s.d(1), (s = e(a)), s && (s.c(), s.m(t.parentNode, t)));
    },
    d(a) {
      s.d(a), a && u(t);
    },
  };
}
function Pe(l) {
  let t, n, e, s, a, r, c;
  return (
    (e = new ce({
      props: {
        top: 600,
        once: !0,
        $$slots: {
          default: [
            Ne,
            ({ intersecting: o }) => ({ 4: o }),
            ({ intersecting: o }) => (o ? 16 : 0),
          ],
        },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        (t = k('div')),
          (n = k('a')),
          C(e.$$.fragment),
          (s = D()),
          (a = k('p')),
          (r = O(l[2])),
          this.h();
      },
      l(o) {
        t = _(o, 'DIV', { class: !0, title: !0 });
        var p = b(t);
        n = _(p, 'A', { href: !0 });
        var g = b(n);
        T(e.$$.fragment, g), (s = A(g)), (a = _(g, 'P', {}));
        var h = b(a);
        (r = L(h, l[2])), h.forEach(u), g.forEach(u), p.forEach(u), this.h();
      },
      h() {
        w(n, 'href', l[0]), w(t, 'class', 'referral'), w(t, 'title', l[3]);
      },
      m(o, p) {
        $(o, t, p), d(t, n), N(e, n, null), d(n, s), d(n, a), d(a, r), (c = !0);
      },
      p(o, [p]) {
        const g = {};
        p & 50 && (g.$$scope = { dirty: p, ctx: o }),
          e.$set(g),
          (!c || p & 4) && Ee(r, o[2]),
          (!c || p & 1) && w(n, 'href', o[0]),
          (!c || p & 8) && w(t, 'title', o[3]);
      },
      i(o) {
        c || (v(e.$$.fragment, o), (c = !0));
      },
      o(o) {
        E(e.$$.fragment, o), (c = !1);
      },
      d(o) {
        o && u(t), P(e);
      },
    }
  );
}
function Ve(l, t, n) {
  let { url: e } = t,
    { image: s } = t,
    { title: a } = t,
    { description: r } = t;
  return (
    (l.$$set = (c) => {
      'url' in c && n(0, (e = c.url)),
        'image' in c && n(1, (s = c.image)),
        'title' in c && n(2, (a = c.title)),
        'description' in c && n(3, (r = c.description));
    }),
    [e, s, a, r]
  );
}
class He extends G {
  constructor(t) {
    super();
    F(this, t, Ve, Pe, U, { url: 0, image: 1, title: 2, description: 3 });
  }
}
function ie(l, t, n) {
  const e = l.slice();
  return (e[3] = t[n]), e;
}
function pe(l) {
  let t,
    n,
    e = l[0],
    s = [];
  for (let r = 0; r < e.length; r += 1) s[r] = ue(ie(l, e, r));
  const a = (r) =>
    E(s[r], 1, 1, () => {
      s[r] = null;
    });
  return {
    c() {
      t = k('nav');
      for (let r = 0; r < s.length; r += 1) s[r].c();
      this.h();
    },
    l(r) {
      t = _(r, 'NAV', { class: !0 });
      var c = b(t);
      for (let o = 0; o < s.length; o += 1) s[o].l(c);
      c.forEach(u), this.h();
    },
    h() {
      w(t, 'class', 'referral-rail row');
    },
    m(r, c) {
      $(r, t, c);
      for (let o = 0; o < s.length; o += 1) s[o].m(t, null);
      n = !0;
    },
    p(r, c) {
      if (c & 1) {
        e = r[0];
        let o;
        for (o = 0; o < e.length; o += 1) {
          const p = ie(r, e, o);
          s[o]
            ? (s[o].p(p, c), v(s[o], 1))
            : ((s[o] = ue(p)), s[o].c(), v(s[o], 1), s[o].m(t, null));
        }
        for (x(), o = e.length; o < s.length; o += 1) a(o);
        ee();
      }
    },
    i(r) {
      if (!n) {
        for (let c = 0; c < e.length; c += 1) v(s[c]);
        n = !0;
      }
    },
    o(r) {
      s = s.filter(Boolean);
      for (let c = 0; c < s.length; c += 1) E(s[c]);
      n = !1;
    },
    d(r) {
      r && u(t), Ie(s, r);
    },
  };
}
function ue(l) {
  let t, n;
  const e = [l[3]];
  let s = {};
  for (let a = 0; a < e.length; a += 1) s = je(s, e[a]);
  return (
    (t = new He({ props: s })),
    {
      c() {
        C(t.$$.fragment);
      },
      l(a) {
        T(t.$$.fragment, a);
      },
      m(a, r) {
        N(t, a, r), (n = !0);
      },
      p(a, r) {
        const c = r & 1 ? ye(e, [Re(a[3])]) : {};
        t.$set(c);
      },
      i(a) {
        n || (v(t.$$.fragment, a), (n = !0));
      },
      o(a) {
        E(t.$$.fragment, a), (n = !1);
      },
      d(a) {
        P(t, a);
      },
    }
  );
}
function Me(l) {
  let t,
    n,
    e = l[0] && pe(l);
  return {
    c() {
      e && e.c(), (t = S());
    },
    l(s) {
      e && e.l(s), (t = S());
    },
    m(s, a) {
      e && e.m(s, a), $(s, t, a), (n = !0);
    },
    p(s, [a]) {
      s[0]
        ? e
          ? (e.p(s, a), a & 1 && v(e, 1))
          : ((e = pe(s)), e.c(), v(e, 1), e.m(t.parentNode, t))
        : e &&
          (x(),
          E(e, 1, 1, () => {
            e = null;
          }),
          ee());
    },
    i(s) {
      n || (v(e), (n = !0));
    },
    o(s) {
      E(e), (n = !1);
    },
    d(s) {
      e && e.d(s), s && u(t);
    },
  };
}
function Se(l, t, n) {
  let e,
    { referrals: s = [] } = t,
    a;
  return (
    ae(() => {
      if (e.length === 4) {
        n(0, (a = e));
        return;
      }
      fetch(
        'https://graphics.thomsonreuters.com/data/reuters-graphics/homepage/graphics.json'
      )
        .then((r) => r.json())
        .then((r) => {
          const c = r
            .filter(({ canonical: o }) => {
              const p = window.location.pathname
                .replace(/\/index\.html$/, '')
                .replace(/\/$/, '');
              return p ? !o.includes(p) : !0;
            })
            .slice(0, 4)
            .map(({ url: o, image: p, title: g, description: h }) => ({
              url: o,
              image: p,
              title: g,
              description: h,
            }));
          n(0, (a = [...e, ...c].slice(0, 4)));
        });
    }),
    (l.$$set = (r) => {
      'referrals' in r && n(1, (s = r.referrals));
    }),
    (l.$$.update = () => {
      l.$$.dirty & 2 &&
        (e = s.filter((r) => r.url && r.title && r.image).slice(0, 4));
    }),
    [a, s]
  );
}
class qe extends G {
  constructor(t) {
    super();
    F(this, t, Se, Me, U, { referrals: 1 });
  }
}
function Be(l) {
  let t, n;
  return (
    (t = new ce({
      props: {
        top: 2400,
        once: !0,
        $$slots: {
          default: [
            Ge,
            ({ intersecting: e }) => ({ 1: e }),
            ({ intersecting: e }) => (e ? 2 : 0),
          ],
        },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        C(t.$$.fragment);
      },
      l(e) {
        T(t.$$.fragment, e);
      },
      m(e, s) {
        N(t, e, s), (n = !0);
      },
      p(e, s) {
        const a = {};
        s & 7 && (a.$$scope = { dirty: s, ctx: e }), t.$set(a);
      },
      i(e) {
        n || (v(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        E(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        P(t, e);
      },
    }
  );
}
function fe(l) {
  let t, n;
  return (
    (t = new qe({ props: { referrals: l[0] } })),
    {
      c() {
        C(t.$$.fragment);
      },
      l(e) {
        T(t.$$.fragment, e);
      },
      m(e, s) {
        N(t, e, s), (n = !0);
      },
      p(e, s) {
        const a = {};
        s & 1 && (a.referrals = e[0]), t.$set(a);
      },
      i(e) {
        n || (v(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        E(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        P(t, e);
      },
    }
  );
}
function Ge(l) {
  let t,
    n,
    e = l[1] && fe(l);
  return {
    c() {
      e && e.c(), (t = S());
    },
    l(s) {
      e && e.l(s), (t = S());
    },
    m(s, a) {
      e && e.m(s, a), $(s, t, a), (n = !0);
    },
    p(s, a) {
      s[1]
        ? e
          ? (e.p(s, a), a & 2 && v(e, 1))
          : ((e = fe(s)), e.c(), v(e, 1), e.m(t.parentNode, t))
        : e &&
          (x(),
          E(e, 1, 1, () => {
            e = null;
          }),
          ee());
    },
    i(s) {
      n || (v(e), (n = !0));
    },
    o(s) {
      E(e), (n = !1);
    },
    d(s) {
      e && e.d(s), s && u(t);
    },
  };
}
function Fe(l) {
  let t,
    n,
    e,
    s,
    a,
    r,
    c = Be(l);
  return {
    c() {
      (t = k('section')),
        (n = k('figure')),
        (e = k('img')),
        (a = D()),
        c && c.c(),
        this.h();
    },
    l(o) {
      t = _(o, 'SECTION', { class: !0 });
      var p = b(t);
      n = _(p, 'FIGURE', { class: !0 });
      var g = b(n);
      (e = _(g, 'IMG', { src: !0, alt: !0 })),
        g.forEach(u),
        (a = A(p)),
        c && c.l(p),
        p.forEach(u),
        this.h();
    },
    h() {
      Ce(
        e.src,
        (s =
          'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-logo/svg/logo-color.svg')
      ) || w(e, 'src', s),
        w(e, 'alt', 'Reuters logo'),
        w(n, 'class', 'svelte-1dfql50'),
        w(t, 'class', 'referral-container');
    },
    m(o, p) {
      $(o, t, p), d(t, n), d(n, e), d(t, a), c && c.m(t, null), (r = !0);
    },
    p(o, [p]) {
      c.p(o, p);
    },
    i(o) {
      r || (v(c), (r = !0));
    },
    o(o) {
      E(c), (r = !1);
    },
    d(o) {
      o && u(t), c && c.d();
    },
  };
}
function Ue(l, t, n) {
  let { referrals: e = [] } = t;
  return (
    (l.$$set = (s) => {
      'referrals' in s && n(0, (e = s.referrals));
    }),
    [e]
  );
}
class ge extends G {
  constructor(t) {
    super();
    F(this, t, Ue, Fe, U, { referrals: 0 });
  }
}
function We(l) {
  let t, n;
  return (
    (t = new ge({})),
    {
      c() {
        C(t.$$.fragment);
      },
      l(e) {
        T(t.$$.fragment, e);
      },
      m(e, s) {
        N(t, e, s), (n = !0);
      },
      i(e) {
        n || (v(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        E(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        P(t, e);
      },
    }
  );
}
function ze(l) {
  let t, n;
  return (
    (t = new ge({ props: { referrals: l[0] } })),
    {
      c() {
        C(t.$$.fragment);
      },
      l(e) {
        T(t.$$.fragment, e);
      },
      m(e, s) {
        N(t, e, s), (n = !0);
      },
      p: re,
      i(e) {
        n || (v(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        E(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        P(t, e);
      },
    }
  );
}
function Je(l) {
  let t,
    n,
    e,
    s,
    a,
    r,
    c,
    o,
    p,
    g,
    h,
    Q = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Referrals <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Referrals</span> <span class="token punctuation">/></span></span></code>`,
    f,
    y,
    R,
    I,
    V,
    X,
    q,
    Y,
    Z,
    W,
    H,
    he = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Referrals <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> customReferrals <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://graphics.reuters.com/world-coronavirus-tracker-and-maps/'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'COVID-19: the latest global statistics, charts and maps'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'Tracking the global coronavirus outbreak, updated daily'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">image</span><span class="token operator">:</span>
        <span class="token string">'https://graphics.thomsonreuters.com/cdn/2020/covid-global-tracker/share-cards/global/en/share.png'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://graphics.reuters.com/world-coronavirus-tracker-and-maps/regions/europe'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Coronavirus in Europe: the latest counts, charts and maps'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'Tracking the global coronavirus outbreak, updated daily'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">image</span><span class="token operator">:</span>
        <span class="token string">'https://graphics.thomsonreuters.com/cdn/2020/covid-global-tracker/share-cards/regions/en/europe.png'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Referrals</span> <span class="token attr-name">referrals="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>customReferrals<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>`,
    z,
    j,
    J;
  return (
    (y = new oe({
      props: { $$slots: { default: [We] }, $$scope: { ctx: l } },
    })),
    (j = new oe({
      props: { $$slots: { default: [ze] }, $$scope: { ctx: l } },
    })),
    {
      c() {
        (t = k('section')),
          (n = k('h2')),
          (e = O(me)),
          (s = D()),
          (a = k('p')),
          (r = O('Add a referrals bar with recent graphics from the ')),
          (c = k('a')),
          (o = O('graphics homepage')),
          (p = O('.')),
          (g = D()),
          (h = k('pre')),
          (f = D()),
          C(y.$$.fragment),
          (R = D()),
          (I = k('section')),
          (V = k('p')),
          (X = O('Pass up to four custom referrals to the ')),
          (q = k('code')),
          (Y = O('referrals')),
          (Z = O(' prop.')),
          (W = D()),
          (H = k('pre')),
          (z = D()),
          C(j.$$.fragment),
          this.h();
      },
      l(i) {
        t = _(i, 'SECTION', {});
        var m = b(t);
        n = _(m, 'H2', {});
        var B = b(n);
        (e = L(B, me)), B.forEach(u), (s = A(m)), (a = _(m, 'P', {}));
        var M = b(a);
        (r = L(M, 'Add a referrals bar with recent graphics from the ')),
          (c = _(M, 'A', { href: !0, rel: !0 }));
        var te = b(c);
        (o = L(te, 'graphics homepage')),
          te.forEach(u),
          (p = L(M, '.')),
          M.forEach(u),
          m.forEach(u),
          (g = A(i)),
          (h = _(i, 'PRE', { class: !0 }));
        var de = b(h);
        de.forEach(u),
          (f = A(i)),
          T(y.$$.fragment, i),
          (R = A(i)),
          (I = _(i, 'SECTION', {}));
        var se = b(I);
        V = _(se, 'P', {});
        var K = b(V);
        (X = L(K, 'Pass up to four custom referrals to the ')),
          (q = _(K, 'CODE', {}));
        var ne = b(q);
        (Y = L(ne, 'referrals')),
          ne.forEach(u),
          (Z = L(K, ' prop.')),
          K.forEach(u),
          se.forEach(u),
          (W = A(i)),
          (H = _(i, 'PRE', { class: !0 }));
        var ke = b(H);
        ke.forEach(u), (z = A(i)), T(j.$$.fragment, i), this.h();
      },
      h() {
        w(
          c,
          'href',
          'https://graphics.thomsonreuters.com/data/reuters-graphics/homepage/graphics.json'
        ),
          w(c, 'rel', 'nofollow'),
          w(h, 'class', 'language-svelte'),
          w(H, 'class', 'language-svelte');
      },
      m(i, m) {
        $(i, t, m),
          d(t, n),
          d(n, e),
          d(t, s),
          d(t, a),
          d(a, r),
          d(a, c),
          d(c, o),
          d(a, p),
          $(i, g, m),
          $(i, h, m),
          (h.innerHTML = Q),
          $(i, f, m),
          N(y, i, m),
          $(i, R, m),
          $(i, I, m),
          d(I, V),
          d(V, X),
          d(V, q),
          d(q, Y),
          d(V, Z),
          $(i, W, m),
          $(i, H, m),
          (H.innerHTML = he),
          $(i, z, m),
          N(j, i, m),
          (J = !0);
      },
      p(i, [m]) {
        const B = {};
        m & 2 && (B.$$scope = { dirty: m, ctx: i }), y.$set(B);
        const M = {};
        m & 2 && (M.$$scope = { dirty: m, ctx: i }), j.$set(M);
      },
      i(i) {
        J || (v(y.$$.fragment, i), v(j.$$.fragment, i), (J = !0));
      },
      o(i) {
        E(y.$$.fragment, i), E(j.$$.fragment, i), (J = !1);
      },
      d(i) {
        i && u(t),
          i && u(g),
          i && u(h),
          i && u(f),
          P(y, i),
          i && u(R),
          i && u(I),
          i && u(W),
          i && u(H),
          i && u(z),
          P(j, i);
      },
    }
  );
}
const Ke = {
    title: 'Referrals',
    description: 'Add a referrals bar with recent graphics stories.',
    slug: 'referrals',
  },
  { title: me, description: et, slug: tt } = Ke;
function Qe(l) {
  return [
    [
      {
        url: 'https://graphics.reuters.com/world-coronavirus-tracker-and-maps/',
        title: 'COVID-19: the latest global statistics, charts and maps',
        description: 'Tracking the global coronavirus outbreak, updated daily',
        image:
          'https://graphics.thomsonreuters.com/cdn/2020/covid-global-tracker/share-cards/global/en/share.png',
      },
      {
        url: 'https://graphics.reuters.com/world-coronavirus-tracker-and-maps/regions/europe',
        title: 'Coronavirus in Europe: the latest counts, charts and maps',
        description: 'Tracking the global coronavirus outbreak, updated daily',
        image:
          'https://graphics.thomsonreuters.com/cdn/2020/covid-global-tracker/share-cards/regions/en/europe.png',
      },
    ],
  ];
}
class st extends G {
  constructor(t) {
    super();
    F(this, t, Qe, Je, U, {});
  }
}
export { st as default, Ke as metadata };
