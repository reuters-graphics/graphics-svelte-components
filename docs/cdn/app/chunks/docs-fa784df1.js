import {
  S as N,
  i as C,
  s as O,
  D as Q,
  e as d,
  c as k,
  a as b,
  d as u,
  f as $,
  E as X,
  F as Y,
  G as Z,
  x as g,
  u as v,
  A as B,
  a9 as ee,
  j,
  k as V,
  t as A,
  m as R,
  n as q,
  g as H,
  b as h,
  H as w,
  o as y,
  h as te,
  v as D,
  l as L,
  I as ne,
  p as se,
  q as re,
  r as M,
  w as S,
  L as le,
  B as ae,
  U as oe,
} from './vendor-a3a8e12b.js';
import { D as ie } from './index-95908c5c.js';
import './@component-docs_components-86850067.js';
import './paths-6758d194.js';
const ce = (i) => ({ intersecting: i & 1 }),
  G = (i) => ({ intersecting: i[0] });
function fe(i) {
  let e, s;
  const t = i[8].default,
    n = Q(t, i, i[7], G);
  return {
    c() {
      (e = d('div')), n && n.c();
    },
    l(r) {
      e = k(r, 'DIV', {});
      var l = b(e);
      n && n.l(l), l.forEach(u);
    },
    m(r, l) {
      $(r, e, l), n && n.m(e, null), i[9](e), (s = !0);
    },
    p(r, [l]) {
      n &&
        n.p &&
        (!s || l & 129) &&
        X(n, t, r, r[7], s ? Z(t, r[7], l, ce) : Y(r[7]), G);
    },
    i(r) {
      s || (g(n, r), (s = !0));
    },
    o(r) {
      v(n, r), (s = !1);
    },
    d(r) {
      r && u(e), n && n.d(r), i[9](null);
    },
  };
}
function ue(i, e, s) {
  let { $$slots: t = {}, $$scope: n } = e,
    { once: r = !1 } = e,
    { top: l = 0 } = e,
    { bottom: o = 0 } = e,
    { left: a = 0 } = e,
    { right: f = 0 } = e,
    p = !1,
    _;
  B(() => {
    if (typeof IntersectionObserver != 'undefined') {
      const m = `${o}px ${a}px ${l}px ${f}px`,
        E = new IntersectionObserver(
          (x) => {
            s(0, (p = x[0].isIntersecting)), p && r && E.unobserve(_);
          },
          { rootMargin: m }
        );
      return E.observe(_), () => E.unobserve(_);
    }
    function c() {
      const m = _.getBoundingClientRect();
      s(
        0,
        (p =
          m.bottom + o > 0 &&
          m.right + f > 0 &&
          m.top - l < window.innerHeight &&
          m.left - a < window.innerWidth)
      ),
        p && r && window.removeEventListener('scroll', c);
    }
    return (
      window.addEventListener('scroll', c),
      () => window.removeEventListener('scroll', c)
    );
  });
  function I(c) {
    ee[c ? 'unshift' : 'push'](() => {
      (_ = c), s(1, _);
    });
  }
  return (
    (i.$$set = (c) => {
      'once' in c && s(2, (r = c.once)),
        'top' in c && s(3, (l = c.top)),
        'bottom' in c && s(4, (o = c.bottom)),
        'left' in c && s(5, (a = c.left)),
        'right' in c && s(6, (f = c.right)),
        '$$scope' in c && s(7, (n = c.$$scope));
    }),
    [p, _, r, l, o, a, f, n, t, I]
  );
}
class P extends N {
  constructor(e) {
    super();
    C(this, e, ue, fe, O, { once: 2, top: 3, bottom: 4, left: 5, right: 6 });
  }
}
function pe(i) {
  let e;
  return {
    c() {
      (e = d('div')), this.h();
    },
    l(s) {
      (e = k(s, 'DIV', { class: !0 })), b(e).forEach(u), this.h();
    },
    h() {
      h(e, 'class', 'image svelte-1xxrkf0');
    },
    m(s, t) {
      $(s, e, t);
    },
    p: ne,
    d(s) {
      s && u(e);
    },
  };
}
function me(i) {
  let e, s;
  return {
    c() {
      (e = d('div')), this.h();
    },
    l(t) {
      (e = k(t, 'DIV', { class: !0, style: !0 })), b(e).forEach(u), this.h();
    },
    h() {
      h(e, 'class', 'image svelte-1xxrkf0'),
        h(e, 'style', (s = `background-image: url(${i[1]});`));
    },
    m(t, n) {
      $(t, e, n);
    },
    p(t, n) {
      n & 2 &&
        s !== (s = `background-image: url(${t[1]});`) &&
        h(e, 'style', s);
    },
    d(t) {
      t && u(e);
    },
  };
}
function _e(i) {
  let e;
  function s(r, l) {
    return r[4] ? me : pe;
  }
  let t = s(i),
    n = t(i);
  return {
    c() {
      n.c(), (e = L());
    },
    l(r) {
      n.l(r), (e = L());
    },
    m(r, l) {
      n.m(r, l), $(r, e, l);
    },
    p(r, l) {
      t === (t = s(r)) && n
        ? n.p(r, l)
        : (n.d(1), (n = t(r)), n && (n.c(), n.m(e.parentNode, e)));
    },
    d(r) {
      n.d(r), r && u(e);
    },
  };
}
function ge(i) {
  let e, s, t, n, r, l, o;
  return (
    (t = new P({
      props: {
        top: 600,
        $$slots: {
          default: [
            _e,
            ({ intersecting: a }) => ({ 4: a }),
            ({ intersecting: a }) => (a ? 16 : 0),
          ],
        },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        (e = d('div')),
          (s = d('a')),
          j(t.$$.fragment),
          (n = V()),
          (r = d('p')),
          (l = A(i[2])),
          this.h();
      },
      l(a) {
        e = k(a, 'DIV', { class: !0, title: !0 });
        var f = b(e);
        s = k(f, 'A', { href: !0 });
        var p = b(s);
        R(t.$$.fragment, p), (n = q(p)), (r = k(p, 'P', {}));
        var _ = b(r);
        (l = H(_, i[2])), _.forEach(u), p.forEach(u), f.forEach(u), this.h();
      },
      h() {
        h(s, 'href', i[0]), h(e, 'class', 'referral'), h(e, 'title', i[3]);
      },
      m(a, f) {
        $(a, e, f), w(e, s), y(t, s, null), w(s, n), w(s, r), w(r, l), (o = !0);
      },
      p(a, [f]) {
        const p = {};
        f & 50 && (p.$$scope = { dirty: f, ctx: a }),
          t.$set(p),
          (!o || f & 4) && te(l, a[2]),
          (!o || f & 1) && h(s, 'href', a[0]),
          (!o || f & 8) && h(e, 'title', a[3]);
      },
      i(a) {
        o || (g(t.$$.fragment, a), (o = !0));
      },
      o(a) {
        v(t.$$.fragment, a), (o = !1);
      },
      d(a) {
        a && u(e), D(t);
      },
    }
  );
}
function he(i, e, s) {
  let { url: t } = e,
    { image: n } = e,
    { title: r } = e,
    { description: l } = e;
  return (
    (i.$$set = (o) => {
      'url' in o && s(0, (t = o.url)),
        'image' in o && s(1, (n = o.image)),
        'title' in o && s(2, (r = o.title)),
        'description' in o && s(3, (l = o.description));
    }),
    [t, n, r, l]
  );
}
class de extends N {
  constructor(e) {
    super();
    C(this, e, he, ge, O, { url: 0, image: 1, title: 2, description: 3 });
  }
}
function T(i, e, s) {
  const t = i.slice();
  return (t[1] = e[s]), t;
}
function F(i) {
  let e,
    s,
    t = i[0],
    n = [];
  for (let l = 0; l < t.length; l += 1) n[l] = U(T(i, t, l));
  const r = (l) =>
    v(n[l], 1, 1, () => {
      n[l] = null;
    });
  return {
    c() {
      e = d('nav');
      for (let l = 0; l < n.length; l += 1) n[l].c();
      this.h();
    },
    l(l) {
      e = k(l, 'NAV', { class: !0 });
      var o = b(e);
      for (let a = 0; a < n.length; a += 1) n[a].l(o);
      o.forEach(u), this.h();
    },
    h() {
      h(e, 'class', 'referral-rail row');
    },
    m(l, o) {
      $(l, e, o);
      for (let a = 0; a < n.length; a += 1) n[a].m(e, null);
      s = !0;
    },
    p(l, o) {
      if (o & 1) {
        t = l[0];
        let a;
        for (a = 0; a < t.length; a += 1) {
          const f = T(l, t, a);
          n[a]
            ? (n[a].p(f, o), g(n[a], 1))
            : ((n[a] = U(f)), n[a].c(), g(n[a], 1), n[a].m(e, null));
        }
        for (M(), a = t.length; a < n.length; a += 1) r(a);
        S();
      }
    },
    i(l) {
      if (!s) {
        for (let o = 0; o < t.length; o += 1) g(n[o]);
        s = !0;
      }
    },
    o(l) {
      n = n.filter(Boolean);
      for (let o = 0; o < n.length; o += 1) v(n[o]);
      s = !1;
    },
    d(l) {
      l && u(e), le(n, l);
    },
  };
}
function U(i) {
  let e, s;
  const t = [i[1]];
  let n = {};
  for (let r = 0; r < t.length; r += 1) n = ae(n, t[r]);
  return (
    (e = new de({ props: n })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        R(e.$$.fragment, r);
      },
      m(r, l) {
        y(e, r, l), (s = !0);
      },
      p(r, l) {
        const o = l & 1 ? se(t, [re(r[1])]) : {};
        e.$set(o);
      },
      i(r) {
        s || (g(e.$$.fragment, r), (s = !0));
      },
      o(r) {
        v(e.$$.fragment, r), (s = !1);
      },
      d(r) {
        D(e, r);
      },
    }
  );
}
function ke(i) {
  let e,
    s,
    t = i[0] && F(i);
  return {
    c() {
      t && t.c(), (e = L());
    },
    l(n) {
      t && t.l(n), (e = L());
    },
    m(n, r) {
      t && t.m(n, r), $(n, e, r), (s = !0);
    },
    p(n, [r]) {
      n[0]
        ? t
          ? (t.p(n, r), r & 1 && g(t, 1))
          : ((t = F(n)), t.c(), g(t, 1), t.m(e.parentNode, e))
        : t &&
          (M(),
          v(t, 1, 1, () => {
            t = null;
          }),
          S());
    },
    i(n) {
      s || (g(t), (s = !0));
    },
    o(n) {
      v(t), (s = !1);
    },
    d(n) {
      t && t.d(n), n && u(e);
    },
  };
}
function ve(i, e, s) {
  let t;
  return (
    B(() => {
      fetch(
        'https://graphics.thomsonreuters.com/data/reuters-graphics/homepage/graphics.json'
      )
        .then((n) => n.json())
        .then((n) => {
          s(
            0,
            (t = n
              .filter(({ canonical: r }) => {
                const l = window.location.pathname
                  .replace(/\/index\.html$/, '')
                  .replace(/\/$/, '');
                return l ? !r.includes(l) : !0;
              })
              .slice(0, 4)
              .map(({ url: r, image: l, title: o, description: a }) => ({
                url: r,
                image: l,
                title: o,
                description: a,
              })))
          );
        });
    }),
    [t]
  );
}
class be extends N {
  constructor(e) {
    super();
    C(this, e, ve, ke, O, {});
  }
}
function $e(i) {
  let e, s;
  return (
    (e = new P({
      props: {
        top: 2400,
        once: !0,
        $$slots: {
          default: [
            we,
            ({ intersecting: t }) => ({ 0: t }),
            ({ intersecting: t }) => (t ? 1 : 0),
          ],
        },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(t) {
        R(e.$$.fragment, t);
      },
      m(t, n) {
        y(e, t, n), (s = !0);
      },
      p(t, n) {
        const r = {};
        n & 3 && (r.$$scope = { dirty: n, ctx: t }), e.$set(r);
      },
      i(t) {
        s || (g(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        v(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        D(e, t);
      },
    }
  );
}
function W(i) {
  let e, s;
  return (
    (e = new be({})),
    {
      c() {
        j(e.$$.fragment);
      },
      l(t) {
        R(e.$$.fragment, t);
      },
      m(t, n) {
        y(e, t, n), (s = !0);
      },
      i(t) {
        s || (g(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        v(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        D(e, t);
      },
    }
  );
}
function we(i) {
  let e,
    s,
    t = i[0] && W();
  return {
    c() {
      t && t.c(), (e = L());
    },
    l(n) {
      t && t.l(n), (e = L());
    },
    m(n, r) {
      t && t.m(n, r), $(n, e, r), (s = !0);
    },
    p(n, r) {
      n[0]
        ? t
          ? r & 1 && g(t, 1)
          : ((t = W()), t.c(), g(t, 1), t.m(e.parentNode, e))
        : t &&
          (M(),
          v(t, 1, 1, () => {
            t = null;
          }),
          S());
    },
    i(n) {
      s || (g(t), (s = !0));
    },
    o(n) {
      v(t), (s = !1);
    },
    d(n) {
      t && t.d(n), n && u(e);
    },
  };
}
function Ee(i) {
  let e,
    s,
    t,
    n,
    r,
    l,
    o = $e(i);
  return {
    c() {
      (e = d('section')),
        (s = d('figure')),
        (t = d('img')),
        (r = V()),
        o && o.c(),
        this.h();
    },
    l(a) {
      e = k(a, 'SECTION', { class: !0 });
      var f = b(e);
      s = k(f, 'FIGURE', { class: !0 });
      var p = b(s);
      (t = k(p, 'IMG', { src: !0, alt: !0 })),
        p.forEach(u),
        (r = q(f)),
        o && o.l(f),
        f.forEach(u),
        this.h();
    },
    h() {
      oe(
        t.src,
        (n =
          'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-logo/svg/logo-color.svg')
      ) || h(t, 'src', n),
        h(t, 'alt', 'Reuters logo'),
        h(s, 'class', 'svelte-1dfql50'),
        h(e, 'class', 'referral-container');
    },
    m(a, f) {
      $(a, e, f), w(e, s), w(s, t), w(e, r), o && o.m(e, null), (l = !0);
    },
    p(a, [f]) {
      o.p(a, f);
    },
    i(a) {
      l || (g(o), (l = !0));
    },
    o(a) {
      v(o), (l = !1);
    },
    d(a) {
      a && u(e), o && o.d();
    },
  };
}
class Ie extends N {
  constructor(e) {
    super();
    C(this, e, null, Ee, O, {});
  }
}
function je(i) {
  let e, s;
  return (
    (e = new Ie({})),
    {
      c() {
        j(e.$$.fragment);
      },
      l(t) {
        R(e.$$.fragment, t);
      },
      m(t, n) {
        y(e, t, n), (s = !0);
      },
      i(t) {
        s || (g(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        v(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        D(e, t);
      },
    }
  );
}
function Re(i) {
  let e,
    s,
    t,
    n,
    r,
    l,
    o,
    a,
    f = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Referrals <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Referrals</span> <span class="token punctuation">/></span></span></code>`,
    p,
    _,
    I;
  return (
    (_ = new ie({
      props: { $$slots: { default: [je] }, $$scope: { ctx: i } },
    })),
    {
      c() {
        (e = d('section')),
          (s = d('h2')),
          (t = A(z)),
          (n = V()),
          (r = d('p')),
          (l = A(J)),
          (o = V()),
          (a = d('pre')),
          (p = V()),
          j(_.$$.fragment),
          this.h();
      },
      l(c) {
        e = k(c, 'SECTION', {});
        var m = b(e);
        s = k(m, 'H2', {});
        var E = b(s);
        (t = H(E, z)), E.forEach(u), (n = q(m)), (r = k(m, 'P', {}));
        var x = b(r);
        (l = H(x, J)),
          x.forEach(u),
          m.forEach(u),
          (o = q(c)),
          (a = k(c, 'PRE', { class: !0 }));
        var K = b(a);
        K.forEach(u), (p = q(c)), R(_.$$.fragment, c), this.h();
      },
      h() {
        h(a, 'class', 'language-svelte');
      },
      m(c, m) {
        $(c, e, m),
          w(e, s),
          w(s, t),
          w(e, n),
          w(e, r),
          w(r, l),
          $(c, o, m),
          $(c, a, m),
          (a.innerHTML = f),
          $(c, p, m),
          y(_, c, m),
          (I = !0);
      },
      p(c, [m]) {
        const E = {};
        m & 1 && (E.$$scope = { dirty: m, ctx: c }), _.$set(E);
      },
      i(c) {
        I || (g(_.$$.fragment, c), (I = !0));
      },
      o(c) {
        v(_.$$.fragment, c), (I = !1);
      },
      d(c) {
        c && u(e), c && u(o), c && u(a), c && u(p), D(_, c);
      },
    }
  );
}
const ye = {
    title: 'Referrals',
    description: 'Add a referrals bar with recent graphics stories.',
    slug: 'referrals',
  },
  { title: z, description: J, slug: Oe } = ye;
class Ve extends N {
  constructor(e) {
    super();
    C(this, e, null, Re, O, {});
  }
}
export { Ve as default, ye as metadata };
