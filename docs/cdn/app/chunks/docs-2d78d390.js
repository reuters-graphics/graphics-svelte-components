import {
  S as y,
  i as D,
  s as R,
  D as K,
  e as d,
  c as v,
  a as b,
  d as _,
  f as I,
  E as Q,
  F as X,
  G as Y,
  x as w,
  u as $,
  A as S,
  a9 as Z,
  j as L,
  k as C,
  t as H,
  m as N,
  n as O,
  g as M,
  b as h,
  H as E,
  o as V,
  h as ee,
  v as q,
  l as j,
  I as B,
  U as te,
  p as ne,
  q as se,
  r as G,
  w as P,
  L as re,
  B as le,
} from './vendor-a3a8e12b.js';
import { D as ae } from './index-95908c5c.js';
import './@component-docs_components-305da42f.js';
import './paths-6758d194.js';
const oe = (a) => ({ intersecting: a & 1 }),
  T = (a) => ({ intersecting: a[0] });
function ie(a) {
  let e, n;
  const t = a[8].default,
    s = K(t, a, a[7], T);
  return {
    c() {
      (e = d('div')), s && s.c();
    },
    l(r) {
      e = v(r, 'DIV', {});
      var o = b(e);
      s && s.l(o), o.forEach(_);
    },
    m(r, o) {
      I(r, e, o), s && s.m(e, null), a[9](e), (n = !0);
    },
    p(r, [o]) {
      s &&
        s.p &&
        (!n || o & 129) &&
        Q(s, t, r, r[7], n ? Y(t, r[7], o, oe) : X(r[7]), T);
    },
    i(r) {
      n || (w(s, r), (n = !0));
    },
    o(r) {
      $(s, r), (n = !1);
    },
    d(r) {
      r && _(e), s && s.d(r), a[9](null);
    },
  };
}
function ce(a, e, n) {
  let { $$slots: t = {}, $$scope: s } = e,
    { once: r = !1 } = e,
    { top: o = 0 } = e,
    { bottom: u = 0 } = e,
    { left: c = 0 } = e,
    { right: f = 0 } = e,
    g = !1,
    i;
  S(() => {
    if (typeof IntersectionObserver != 'undefined') {
      const p = `${u}px ${c}px ${o}px ${f}px`,
        k = new IntersectionObserver(
          (A) => {
            n(0, (g = A[0].isIntersecting)), g && r && k.unobserve(i);
          },
          { rootMargin: p }
        );
      return k.observe(i), () => k.unobserve(i);
    }
    function l() {
      const p = i.getBoundingClientRect();
      n(
        0,
        (g =
          p.bottom + u > 0 &&
          p.right + f > 0 &&
          p.top - o < window.innerHeight &&
          p.left - c < window.innerWidth)
      ),
        g && r && window.removeEventListener('scroll', l);
    }
    return (
      window.addEventListener('scroll', l),
      () => window.removeEventListener('scroll', l)
    );
  });
  function m(l) {
    Z[l ? 'unshift' : 'push'](() => {
      (i = l), n(1, i);
    });
  }
  return (
    (a.$$set = (l) => {
      'once' in l && n(2, (r = l.once)),
        'top' in l && n(3, (o = l.top)),
        'bottom' in l && n(4, (u = l.bottom)),
        'left' in l && n(5, (c = l.left)),
        'right' in l && n(6, (f = l.right)),
        '$$scope' in l && n(7, (s = l.$$scope));
    }),
    [g, i, r, o, u, c, f, s, t, m]
  );
}
class fe extends y {
  constructor(e) {
    super();
    D(this, e, ce, ie, R, { once: 2, top: 3, bottom: 4, left: 5, right: 6 });
  }
}
function ue(a) {
  let e;
  return {
    c() {
      (e = d('div')), this.h();
    },
    l(n) {
      (e = v(n, 'DIV', { class: !0 })), b(e).forEach(_), this.h();
    },
    h() {
      h(e, 'class', 'image svelte-13n58v0');
    },
    m(n, t) {
      I(n, e, t);
    },
    p: B,
    d(n) {
      n && _(e);
    },
  };
}
function pe(a) {
  let e, n;
  return {
    c() {
      (e = d('div')), this.h();
    },
    l(t) {
      (e = v(t, 'DIV', { class: !0, style: !0 })), b(e).forEach(_), this.h();
    },
    h() {
      h(e, 'class', 'image svelte-13n58v0'),
        h(e, 'style', (n = `background-image: url(${a[1]});`));
    },
    m(t, s) {
      I(t, e, s);
    },
    p(t, s) {
      s & 2 &&
        n !== (n = `background-image: url(${t[1]});`) &&
        h(e, 'style', n);
    },
    d(t) {
      t && _(e);
    },
  };
}
function _e(a) {
  let e;
  function n(r, o) {
    return r[4] ? pe : ue;
  }
  let t = n(a),
    s = t(a);
  return {
    c() {
      s.c(), (e = j());
    },
    l(r) {
      s.l(r), (e = j());
    },
    m(r, o) {
      s.m(r, o), I(r, e, o);
    },
    p(r, o) {
      t === (t = n(r)) && s
        ? s.p(r, o)
        : (s.d(1), (s = t(r)), s && (s.c(), s.m(e.parentNode, e)));
    },
    d(r) {
      s.d(r), r && _(e);
    },
  };
}
function me(a) {
  let e, n, t, s, r, o, u;
  return (
    (t = new fe({
      props: {
        top: 600,
        $$slots: {
          default: [
            _e,
            ({ intersecting: c }) => ({ 4: c }),
            ({ intersecting: c }) => (c ? 16 : 0),
          ],
        },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        (e = d('div')),
          (n = d('a')),
          L(t.$$.fragment),
          (s = C()),
          (r = d('p')),
          (o = H(a[2])),
          this.h();
      },
      l(c) {
        e = v(c, 'DIV', { class: !0, title: !0 });
        var f = b(e);
        n = v(f, 'A', { href: !0 });
        var g = b(n);
        N(t.$$.fragment, g), (s = O(g)), (r = v(g, 'P', {}));
        var i = b(r);
        (o = M(i, a[2])), i.forEach(_), g.forEach(_), f.forEach(_), this.h();
      },
      h() {
        h(n, 'href', a[0]), h(e, 'class', 'referral'), h(e, 'title', a[3]);
      },
      m(c, f) {
        I(c, e, f), E(e, n), V(t, n, null), E(n, s), E(n, r), E(r, o), (u = !0);
      },
      p(c, [f]) {
        const g = {};
        f & 50 && (g.$$scope = { dirty: f, ctx: c }),
          t.$set(g),
          (!u || f & 4) && ee(o, c[2]),
          (!u || f & 1) && h(n, 'href', c[0]),
          (!u || f & 8) && h(e, 'title', c[3]);
      },
      i(c) {
        u || (w(t.$$.fragment, c), (u = !0));
      },
      o(c) {
        $(t.$$.fragment, c), (u = !1);
      },
      d(c) {
        c && _(e), q(t);
      },
    }
  );
}
function ge(a, e, n) {
  let { url: t } = e,
    { image: s } = e,
    { title: r } = e,
    { description: o } = e;
  return (
    (a.$$set = (u) => {
      'url' in u && n(0, (t = u.url)),
        'image' in u && n(1, (s = u.image)),
        'title' in u && n(2, (r = u.title)),
        'description' in u && n(3, (o = u.description));
    }),
    [t, s, r, o]
  );
}
class he extends y {
  constructor(e) {
    super();
    D(this, e, ge, me, R, { url: 0, image: 1, title: 2, description: 3 });
  }
}
function F(a, e, n) {
  const t = a.slice();
  return (t[1] = e[n]), t;
}
function U(a) {
  let e,
    n,
    t,
    s,
    r,
    o,
    u,
    c = a[0],
    f = [];
  for (let i = 0; i < c.length; i += 1) f[i] = W(F(a, c, i));
  const g = (i) =>
    $(f[i], 1, 1, () => {
      f[i] = null;
    });
  return {
    c() {
      (e = d('section')),
        (n = d('figure')),
        (t = d('img')),
        (r = C()),
        (o = d('nav'));
      for (let i = 0; i < f.length; i += 1) f[i].c();
      this.h();
    },
    l(i) {
      e = v(i, 'SECTION', { class: !0 });
      var m = b(e);
      n = v(m, 'FIGURE', { class: !0 });
      var l = b(n);
      (t = v(l, 'IMG', { src: !0, alt: !0 })),
        l.forEach(_),
        (r = O(m)),
        (o = v(m, 'NAV', { class: !0 }));
      var p = b(o);
      for (let k = 0; k < f.length; k += 1) f[k].l(p);
      p.forEach(_), m.forEach(_), this.h();
    },
    h() {
      te(
        t.src,
        (s =
          'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-logo/svg/logo-color.svg')
      ) || h(t, 'src', s),
        h(t, 'alt', ''),
        h(n, 'class', 'svelte-1dfql50'),
        h(o, 'class', 'referral-rail row'),
        h(e, 'class', 'referral-container');
    },
    m(i, m) {
      I(i, e, m), E(e, n), E(n, t), E(e, r), E(e, o);
      for (let l = 0; l < f.length; l += 1) f[l].m(o, null);
      u = !0;
    },
    p(i, m) {
      if (m & 1) {
        c = i[0];
        let l;
        for (l = 0; l < c.length; l += 1) {
          const p = F(i, c, l);
          f[l]
            ? (f[l].p(p, m), w(f[l], 1))
            : ((f[l] = W(p)), f[l].c(), w(f[l], 1), f[l].m(o, null));
        }
        for (G(), l = c.length; l < f.length; l += 1) g(l);
        P();
      }
    },
    i(i) {
      if (!u) {
        for (let m = 0; m < c.length; m += 1) w(f[m]);
        u = !0;
      }
    },
    o(i) {
      f = f.filter(Boolean);
      for (let m = 0; m < f.length; m += 1) $(f[m]);
      u = !1;
    },
    d(i) {
      i && _(e), re(f, i);
    },
  };
}
function W(a) {
  let e, n;
  const t = [a[1]];
  let s = {};
  for (let r = 0; r < t.length; r += 1) s = le(s, t[r]);
  return (
    (e = new he({ props: s })),
    {
      c() {
        L(e.$$.fragment);
      },
      l(r) {
        N(e.$$.fragment, r);
      },
      m(r, o) {
        V(e, r, o), (n = !0);
      },
      p(r, o) {
        const u = o & 1 ? ne(t, [se(r[1])]) : {};
        e.$set(u);
      },
      i(r) {
        n || (w(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        $(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        q(e, r);
      },
    }
  );
}
function de(a) {
  let e,
    n,
    t = a[0] && U(a);
  return {
    c() {
      t && t.c(), (e = j());
    },
    l(s) {
      t && t.l(s), (e = j());
    },
    m(s, r) {
      t && t.m(s, r), I(s, e, r), (n = !0);
    },
    p(s, [r]) {
      s[0]
        ? t
          ? (t.p(s, r), r & 1 && w(t, 1))
          : ((t = U(s)), t.c(), w(t, 1), t.m(e.parentNode, e))
        : t &&
          (G(),
          $(t, 1, 1, () => {
            t = null;
          }),
          P());
    },
    i(s) {
      n || (w(t), (n = !0));
    },
    o(s) {
      $(t), (n = !1);
    },
    d(s) {
      t && t.d(s), s && _(e);
    },
  };
}
function ve(a, e, n) {
  let t;
  return (
    S(() => {
      fetch(
        'https://graphics.thomsonreuters.com/data/reuters-graphics/homepage/latest.json'
      )
        .then((s) => s.json())
        .then((s) => {
          n(
            0,
            (t = s
              .slice(0, 4)
              .map(({ url: r, image: o, title: u, description: c }) => ({
                url: r,
                image: o,
                title: u,
                description: c,
              })))
          );
        });
    }),
    [t]
  );
}
class ke extends y {
  constructor(e) {
    super();
    D(this, e, ve, de, R, {});
  }
}
function be(a) {
  let e, n;
  return (
    (e = new ke({})),
    {
      c() {
        L(e.$$.fragment);
      },
      l(t) {
        N(e.$$.fragment, t);
      },
      m(t, s) {
        V(e, t, s), (n = !0);
      },
      i(t) {
        n || (w(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        q(e, t);
      },
    }
  );
}
function we(a) {
  let e,
    n,
    t = be();
  return {
    c() {
      t && t.c(), (e = j());
    },
    l(s) {
      t && t.l(s), (e = j());
    },
    m(s, r) {
      t && t.m(s, r), I(s, e, r), (n = !0);
    },
    p: B,
    i(s) {
      n || (w(t), (n = !0));
    },
    o(s) {
      $(t), (n = !1);
    },
    d(s) {
      t && t.d(s), s && _(e);
    },
  };
}
class Ee extends y {
  constructor(e) {
    super();
    D(this, e, null, we, R, {});
  }
}
function Ie(a) {
  let e, n;
  return (
    (e = new Ee({})),
    {
      c() {
        L(e.$$.fragment);
      },
      l(t) {
        N(e.$$.fragment, t);
      },
      m(t, s) {
        V(e, t, s), (n = !0);
      },
      i(t) {
        n || (w(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        q(e, t);
      },
    }
  );
}
function $e(a) {
  let e,
    n,
    t,
    s,
    r,
    o,
    u,
    c,
    f = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Referrals <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Referrals</span> <span class="token punctuation">/></span></span></code>`,
    g,
    i,
    m;
  return (
    (i = new ae({
      props: { $$slots: { default: [Ie] }, $$scope: { ctx: a } },
    })),
    {
      c() {
        (e = d('section')),
          (n = d('h2')),
          (t = H(x)),
          (s = C()),
          (r = d('p')),
          (o = H(z)),
          (u = C()),
          (c = d('pre')),
          (g = C()),
          L(i.$$.fragment),
          this.h();
      },
      l(l) {
        e = v(l, 'SECTION', {});
        var p = b(e);
        n = v(p, 'H2', {});
        var k = b(n);
        (t = M(k, x)), k.forEach(_), (s = O(p)), (r = v(p, 'P', {}));
        var A = b(r);
        (o = M(A, z)),
          A.forEach(_),
          p.forEach(_),
          (u = O(l)),
          (c = v(l, 'PRE', { class: !0 }));
        var J = b(c);
        J.forEach(_), (g = O(l)), N(i.$$.fragment, l), this.h();
      },
      h() {
        h(c, 'class', 'language-svelte');
      },
      m(l, p) {
        I(l, e, p),
          E(e, n),
          E(n, t),
          E(e, s),
          E(e, r),
          E(r, o),
          I(l, u, p),
          I(l, c, p),
          (c.innerHTML = f),
          I(l, g, p),
          V(i, l, p),
          (m = !0);
      },
      p(l, [p]) {
        const k = {};
        p & 1 && (k.$$scope = { dirty: p, ctx: l }), i.$set(k);
      },
      i(l) {
        m || (w(i.$$.fragment, l), (m = !0));
      },
      o(l) {
        $(i.$$.fragment, l), (m = !1);
      },
      d(l) {
        l && _(e), l && _(u), l && _(c), l && _(g), q(i, l);
      },
    }
  );
}
const je = {
    title: 'Referrals',
    description: 'Add a referrals bar with recent graphics stories.',
    slug: 'referrals',
  },
  { title: x, description: z, slug: Ce } = je;
class Ne extends y {
  constructor(e) {
    super();
    D(this, e, null, $e, R, {});
  }
}
export { Ne as default, je as metadata };
