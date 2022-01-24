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
  p as se,
  q as ne,
  r as G,
  w as P,
  L as re,
  B as le,
} from './vendor-b82e5b83.js';
import { D as ae } from './index-75ffd758.js';
import './@component-docs-989e6ca0.js';
import './paths-6758d194.js';
const oe = (a) => ({ intersecting: a & 1 }),
  T = (a) => ({ intersecting: a[0] });
function ie(a) {
  let e, s;
  const t = a[8].default,
    n = K(t, a, a[7], T);
  return {
    c() {
      (e = d('div')), n && n.c();
    },
    l(r) {
      e = v(r, 'DIV', {});
      var o = b(e);
      n && n.l(o), o.forEach(_);
    },
    m(r, o) {
      I(r, e, o), n && n.m(e, null), a[9](e), (s = !0);
    },
    p(r, [o]) {
      n &&
        n.p &&
        (!s || o & 129) &&
        Q(n, t, r, r[7], s ? Y(t, r[7], o, oe) : X(r[7]), T);
    },
    i(r) {
      s || (w(n, r), (s = !0));
    },
    o(r) {
      $(n, r), (s = !1);
    },
    d(r) {
      r && _(e), n && n.d(r), a[9](null);
    },
  };
}
function ce(a, e, s) {
  let { $$slots: t = {}, $$scope: n } = e,
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
            s(0, (g = A[0].isIntersecting)), g && r && k.unobserve(i);
          },
          { rootMargin: p }
        );
      return k.observe(i), () => k.unobserve(i);
    }
    function l() {
      const p = i.getBoundingClientRect();
      s(
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
      (i = l), s(1, i);
    });
  }
  return (
    (a.$$set = (l) => {
      'once' in l && s(2, (r = l.once)),
        'top' in l && s(3, (o = l.top)),
        'bottom' in l && s(4, (u = l.bottom)),
        'left' in l && s(5, (c = l.left)),
        'right' in l && s(6, (f = l.right)),
        '$$scope' in l && s(7, (n = l.$$scope));
    }),
    [g, i, r, o, u, c, f, n, t, m]
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
    l(s) {
      (e = v(s, 'DIV', { class: !0 })), b(e).forEach(_), this.h();
    },
    h() {
      h(e, 'class', 'image svelte-13n58v0');
    },
    m(s, t) {
      I(s, e, t);
    },
    p: B,
    d(s) {
      s && _(e);
    },
  };
}
function pe(a) {
  let e, s;
  return {
    c() {
      (e = d('div')), this.h();
    },
    l(t) {
      (e = v(t, 'DIV', { class: !0, style: !0 })), b(e).forEach(_), this.h();
    },
    h() {
      h(e, 'class', 'image svelte-13n58v0'),
        h(e, 'style', (s = `background-image: url(${a[1]});`));
    },
    m(t, n) {
      I(t, e, n);
    },
    p(t, n) {
      n & 2 &&
        s !== (s = `background-image: url(${t[1]});`) &&
        h(e, 'style', s);
    },
    d(t) {
      t && _(e);
    },
  };
}
function _e(a) {
  let e;
  function s(r, o) {
    return r[4] ? pe : ue;
  }
  let t = s(a),
    n = t(a);
  return {
    c() {
      n.c(), (e = j());
    },
    l(r) {
      n.l(r), (e = j());
    },
    m(r, o) {
      n.m(r, o), I(r, e, o);
    },
    p(r, o) {
      t === (t = s(r)) && n
        ? n.p(r, o)
        : (n.d(1), (n = t(r)), n && (n.c(), n.m(e.parentNode, e)));
    },
    d(r) {
      n.d(r), r && _(e);
    },
  };
}
function me(a) {
  let e, s, t, n, r, o, u;
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
          (s = d('a')),
          L(t.$$.fragment),
          (n = C()),
          (r = d('p')),
          (o = H(a[2])),
          this.h();
      },
      l(c) {
        e = v(c, 'DIV', { class: !0, title: !0 });
        var f = b(e);
        s = v(f, 'A', { href: !0 });
        var g = b(s);
        N(t.$$.fragment, g), (n = O(g)), (r = v(g, 'P', {}));
        var i = b(r);
        (o = M(i, a[2])), i.forEach(_), g.forEach(_), f.forEach(_), this.h();
      },
      h() {
        h(s, 'href', a[0]), h(e, 'class', 'referral'), h(e, 'title', a[3]);
      },
      m(c, f) {
        I(c, e, f), E(e, s), V(t, s, null), E(s, n), E(s, r), E(r, o), (u = !0);
      },
      p(c, [f]) {
        const g = {};
        f & 50 && (g.$$scope = { dirty: f, ctx: c }),
          t.$set(g),
          (!u || f & 4) && ee(o, c[2]),
          (!u || f & 1) && h(s, 'href', c[0]),
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
function ge(a, e, s) {
  let { url: t } = e,
    { image: n } = e,
    { title: r } = e,
    { description: o } = e;
  return (
    (a.$$set = (u) => {
      'url' in u && s(0, (t = u.url)),
        'image' in u && s(1, (n = u.image)),
        'title' in u && s(2, (r = u.title)),
        'description' in u && s(3, (o = u.description));
    }),
    [t, n, r, o]
  );
}
class he extends y {
  constructor(e) {
    super();
    D(this, e, ge, me, R, { url: 0, image: 1, title: 2, description: 3 });
  }
}
function F(a, e, s) {
  const t = a.slice();
  return (t[1] = e[s]), t;
}
function U(a) {
  let e,
    s,
    t,
    n,
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
        (s = d('figure')),
        (t = d('img')),
        (r = C()),
        (o = d('nav'));
      for (let i = 0; i < f.length; i += 1) f[i].c();
      this.h();
    },
    l(i) {
      e = v(i, 'SECTION', { class: !0 });
      var m = b(e);
      s = v(m, 'FIGURE', { class: !0 });
      var l = b(s);
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
        (n =
          'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-logo/svg/logo-color.svg')
      ) || h(t, 'src', n),
        h(t, 'alt', ''),
        h(s, 'class', 'svelte-1dfql50'),
        h(o, 'class', 'referral-rail row'),
        h(e, 'class', 'referral-container');
    },
    m(i, m) {
      I(i, e, m), E(e, s), E(s, t), E(e, r), E(e, o);
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
  let e, s;
  const t = [a[1]];
  let n = {};
  for (let r = 0; r < t.length; r += 1) n = le(n, t[r]);
  return (
    (e = new he({ props: n })),
    {
      c() {
        L(e.$$.fragment);
      },
      l(r) {
        N(e.$$.fragment, r);
      },
      m(r, o) {
        V(e, r, o), (s = !0);
      },
      p(r, o) {
        const u = o & 1 ? se(t, [ne(r[1])]) : {};
        e.$set(u);
      },
      i(r) {
        s || (w(e.$$.fragment, r), (s = !0));
      },
      o(r) {
        $(e.$$.fragment, r), (s = !1);
      },
      d(r) {
        q(e, r);
      },
    }
  );
}
function de(a) {
  let e,
    s,
    t = a[0] && U(a);
  return {
    c() {
      t && t.c(), (e = j());
    },
    l(n) {
      t && t.l(n), (e = j());
    },
    m(n, r) {
      t && t.m(n, r), I(n, e, r), (s = !0);
    },
    p(n, [r]) {
      n[0]
        ? t
          ? (t.p(n, r), r & 1 && w(t, 1))
          : ((t = U(n)), t.c(), w(t, 1), t.m(e.parentNode, e))
        : t &&
          (G(),
          $(t, 1, 1, () => {
            t = null;
          }),
          P());
    },
    i(n) {
      s || (w(t), (s = !0));
    },
    o(n) {
      $(t), (s = !1);
    },
    d(n) {
      t && t.d(n), n && _(e);
    },
  };
}
function ve(a, e, s) {
  let t;
  return (
    S(() => {
      fetch(
        'https://graphics.thomsonreuters.com/data/reuters-graphics/homepage/latest.json'
      )
        .then((n) => n.json())
        .then((n) => {
          s(
            0,
            (t = n
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
  let e, s;
  return (
    (e = new ke({})),
    {
      c() {
        L(e.$$.fragment);
      },
      l(t) {
        N(e.$$.fragment, t);
      },
      m(t, n) {
        V(e, t, n), (s = !0);
      },
      i(t) {
        s || (w(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        q(e, t);
      },
    }
  );
}
function we(a) {
  let e,
    s,
    t = be();
  return {
    c() {
      t && t.c(), (e = j());
    },
    l(n) {
      t && t.l(n), (e = j());
    },
    m(n, r) {
      t && t.m(n, r), I(n, e, r), (s = !0);
    },
    p: B,
    i(n) {
      s || (w(t), (s = !0));
    },
    o(n) {
      $(t), (s = !1);
    },
    d(n) {
      t && t.d(n), n && _(e);
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
  let e, s;
  return (
    (e = new Ee({})),
    {
      c() {
        L(e.$$.fragment);
      },
      l(t) {
        N(e.$$.fragment, t);
      },
      m(t, n) {
        V(e, t, n), (s = !0);
      },
      i(t) {
        s || (w(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        q(e, t);
      },
    }
  );
}
function $e(a) {
  let e,
    s,
    t,
    n,
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
          (s = d('h2')),
          (t = H(x)),
          (n = C()),
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
        s = v(p, 'H2', {});
        var k = b(s);
        (t = M(k, x)), k.forEach(_), (n = O(p)), (r = v(p, 'P', {}));
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
          E(e, s),
          E(s, t),
          E(e, n),
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
