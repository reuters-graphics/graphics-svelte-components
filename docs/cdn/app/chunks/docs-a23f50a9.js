import {
  S as U,
  i as Q,
  s as X,
  F as Ms,
  e as h,
  c as _,
  a as b,
  d as i,
  g as k,
  G as Ns,
  H as Ps,
  I as Vs,
  q as y,
  o as w,
  v as Is,
  ab as As,
  w as L,
  k as R,
  t as T,
  x as C,
  m as I,
  h as O,
  b as g,
  J as $,
  y as j,
  j as Gs,
  B as D,
  l as F,
  K as us,
  z as Hs,
  A as Ss,
  n as fs,
  p as gs,
  N as qs,
  C as Bs,
  W as as,
} from './vendor-f398e5e0.js';
import { D as is } from './index-9e15525f.js';
import './@component-docs_components-890b5864.js';
import './paths-396f020f.js';
const Fs = (o) => ({ intersecting: o & 1 }),
  bs = (o) => ({ intersecting: o[0] });
function Ws(o) {
  let s, n;
  const e = o[8].default,
    t = Ms(e, o, o[7], bs);
  return {
    c() {
      (s = h('div')), t && t.c();
    },
    l(a) {
      s = _(a, 'DIV', {});
      var r = b(s);
      t && t.l(r), r.forEach(i);
    },
    m(a, r) {
      k(a, s, r), t && t.m(s, null), o[9](s), (n = !0);
    },
    p(a, [r]) {
      t &&
        t.p &&
        (!n || r & 129) &&
        Ns(t, e, a, a[7], n ? Vs(e, a[7], r, Fs) : Ps(a[7]), bs);
    },
    i(a) {
      n || (y(t, a), (n = !0));
    },
    o(a) {
      w(t, a), (n = !1);
    },
    d(a) {
      a && i(s), t && t.d(a), o[9](null);
    },
  };
}
function zs(o, s, n) {
  let { $$slots: e = {}, $$scope: t } = s,
    { once: a = !1 } = s,
    { top: r = 0 } = s,
    { bottom: p = 0 } = s,
    { left: l = 0 } = s,
    { right: u = 0 } = s,
    f = !1,
    v;
  Is(() => {
    if (typeof IntersectionObserver != 'undefined') {
      const E = `${p}px ${l}px ${r}px ${u}px`,
        M = new IntersectionObserver(
          (N) => {
            n(0, (f = N[0].isIntersecting)), f && a && M.unobserve(v);
          },
          { rootMargin: E }
        );
      return M.observe(v), () => M.unobserve(v);
    }
    function d() {
      const E = v.getBoundingClientRect();
      n(
        0,
        (f =
          E.bottom + p > 0 &&
          E.right + u > 0 &&
          E.top - r < window.innerHeight &&
          E.left - l < window.innerWidth)
      ),
        f && a && window.removeEventListener('scroll', d);
    }
    return (
      window.addEventListener('scroll', d),
      () => window.removeEventListener('scroll', d)
    );
  });
  function rs(d) {
    As[d ? 'unshift' : 'push'](() => {
      (v = d), n(1, v);
    });
  }
  return (
    (o.$$set = (d) => {
      'once' in d && n(2, (a = d.once)),
        'top' in d && n(3, (r = d.top)),
        'bottom' in d && n(4, (p = d.bottom)),
        'left' in d && n(5, (l = d.left)),
        'right' in d && n(6, (u = d.right)),
        '$$scope' in d && n(7, (t = d.$$scope));
    }),
    [f, v, a, r, p, l, u, t, e, rs]
  );
}
class Ls extends U {
  constructor(s) {
    super();
    Q(this, s, zs, Ws, X, { once: 2, top: 3, bottom: 4, left: 5, right: 6 });
  }
}
function Js(o) {
  let s;
  return {
    c() {
      (s = h('div')), this.h();
    },
    l(n) {
      (s = _(n, 'DIV', { class: !0 })), b(s).forEach(i), this.h();
    },
    h() {
      g(s, 'class', 'image svelte-1xxrkf0');
    },
    m(n, e) {
      k(n, s, e);
    },
    p: us,
    d(n) {
      n && i(s);
    },
  };
}
function Ks(o) {
  let s, n;
  return {
    c() {
      (s = h('div')), this.h();
    },
    l(e) {
      (s = _(e, 'DIV', { class: !0, style: !0 })), b(s).forEach(i), this.h();
    },
    h() {
      g(s, 'class', 'image svelte-1xxrkf0'),
        g(s, 'style', (n = `background-image: url(${o[1]});`));
    },
    m(e, t) {
      k(e, s, t);
    },
    p(e, t) {
      t & 2 &&
        n !== (n = `background-image: url(${e[1]});`) &&
        g(s, 'style', n);
    },
    d(e) {
      e && i(s);
    },
  };
}
function Us(o) {
  let s;
  function n(a, r) {
    return a[4] ? Ks : Js;
  }
  let e = n(o),
    t = e(o);
  return {
    c() {
      t.c(), (s = F());
    },
    l(a) {
      t.l(a), (s = F());
    },
    m(a, r) {
      t.m(a, r), k(a, s, r);
    },
    p(a, r) {
      e === (e = n(a)) && t
        ? t.p(a, r)
        : (t.d(1), (t = e(a)), t && (t.c(), t.m(s.parentNode, s)));
    },
    d(a) {
      t.d(a), a && i(s);
    },
  };
}
function Qs(o) {
  let s, n, e, t, a, r, p;
  return (
    (e = new Ls({
      props: {
        top: 600,
        once: !0,
        $$slots: {
          default: [
            Us,
            ({ intersecting: l }) => ({ 4: l }),
            ({ intersecting: l }) => (l ? 16 : 0),
          ],
        },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (s = h('div')),
          (n = h('a')),
          L(e.$$.fragment),
          (t = R()),
          (a = h('p')),
          (r = T(o[2])),
          this.h();
      },
      l(l) {
        s = _(l, 'DIV', { class: !0, title: !0 });
        var u = b(s);
        n = _(u, 'A', { href: !0 });
        var f = b(n);
        C(e.$$.fragment, f), (t = I(f)), (a = _(f, 'P', {}));
        var v = b(a);
        (r = O(v, o[2])), v.forEach(i), f.forEach(i), u.forEach(i), this.h();
      },
      h() {
        g(n, 'href', o[0]), g(s, 'class', 'referral'), g(s, 'title', o[3]);
      },
      m(l, u) {
        k(l, s, u), $(s, n), j(e, n, null), $(n, t), $(n, a), $(a, r), (p = !0);
      },
      p(l, [u]) {
        const f = {};
        u & 50 && (f.$$scope = { dirty: u, ctx: l }),
          e.$set(f),
          (!p || u & 4) && Gs(r, l[2]),
          (!p || u & 1) && g(n, 'href', l[0]),
          (!p || u & 8) && g(s, 'title', l[3]);
      },
      i(l) {
        p || (y(e.$$.fragment, l), (p = !0));
      },
      o(l) {
        w(e.$$.fragment, l), (p = !1);
      },
      d(l) {
        l && i(s), D(e);
      },
    }
  );
}
function Xs(o, s, n) {
  let { url: e } = s,
    { image: t } = s,
    { title: a } = s,
    { description: r } = s;
  return (
    (o.$$set = (p) => {
      'url' in p && n(0, (e = p.url)),
        'image' in p && n(1, (t = p.image)),
        'title' in p && n(2, (a = p.title)),
        'description' in p && n(3, (r = p.description));
    }),
    [e, t, a, r]
  );
}
class Ys extends U {
  constructor(s) {
    super();
    Q(this, s, Xs, Qs, X, { url: 0, image: 1, title: 2, description: 3 });
  }
}
function $s(o, s, n) {
  const e = o.slice();
  return (e[3] = s[n]), e;
}
function ys(o) {
  let s,
    n,
    e = o[0],
    t = [];
  for (let r = 0; r < e.length; r += 1) t[r] = ws($s(o, e, r));
  const a = (r) =>
    w(t[r], 1, 1, () => {
      t[r] = null;
    });
  return {
    c() {
      s = h('nav');
      for (let r = 0; r < t.length; r += 1) t[r].c();
      this.h();
    },
    l(r) {
      s = _(r, 'NAV', { class: !0 });
      var p = b(s);
      for (let l = 0; l < t.length; l += 1) t[l].l(p);
      p.forEach(i), this.h();
    },
    h() {
      g(s, 'class', 'referral-rail row');
    },
    m(r, p) {
      k(r, s, p);
      for (let l = 0; l < t.length; l += 1) t[l].m(s, null);
      n = !0;
    },
    p(r, p) {
      if (p & 1) {
        e = r[0];
        let l;
        for (l = 0; l < e.length; l += 1) {
          const u = $s(r, e, l);
          t[l]
            ? (t[l].p(u, p), y(t[l], 1))
            : ((t[l] = ws(u)), t[l].c(), y(t[l], 1), t[l].m(s, null));
        }
        for (fs(), l = e.length; l < t.length; l += 1) a(l);
        gs();
      }
    },
    i(r) {
      if (!n) {
        for (let p = 0; p < e.length; p += 1) y(t[p]);
        n = !0;
      }
    },
    o(r) {
      t = t.filter(Boolean);
      for (let p = 0; p < t.length; p += 1) w(t[p]);
      n = !1;
    },
    d(r) {
      r && i(s), qs(t, r);
    },
  };
}
function ws(o) {
  let s, n;
  const e = [o[3]];
  let t = {};
  for (let a = 0; a < e.length; a += 1) t = Bs(t, e[a]);
  return (
    (s = new Ys({ props: t })),
    {
      c() {
        L(s.$$.fragment);
      },
      l(a) {
        C(s.$$.fragment, a);
      },
      m(a, r) {
        j(s, a, r), (n = !0);
      },
      p(a, r) {
        const p = r & 1 ? Hs(e, [Ss(a[3])]) : {};
        s.$set(p);
      },
      i(a) {
        n || (y(s.$$.fragment, a), (n = !0));
      },
      o(a) {
        w(s.$$.fragment, a), (n = !1);
      },
      d(a) {
        D(s, a);
      },
    }
  );
}
function Zs(o) {
  let s,
    n,
    e = o[0] && ys(o);
  return {
    c() {
      e && e.c(), (s = F());
    },
    l(t) {
      e && e.l(t), (s = F());
    },
    m(t, a) {
      e && e.m(t, a), k(t, s, a), (n = !0);
    },
    p(t, [a]) {
      t[0]
        ? e
          ? (e.p(t, a), a & 1 && y(e, 1))
          : ((e = ys(t)), e.c(), y(e, 1), e.m(s.parentNode, s))
        : e &&
          (fs(),
          w(e, 1, 1, () => {
            e = null;
          }),
          gs());
    },
    i(t) {
      n || (y(e), (n = !0));
    },
    o(t) {
      w(e), (n = !1);
    },
    d(t) {
      e && e.d(t), t && i(s);
    },
  };
}
function xs(o, s, n) {
  let e,
    { referrals: t = [] } = s,
    a;
  return (
    Is(() => {
      if (e.length === 4) {
        n(0, (a = e));
        return;
      }
      fetch(
        'https://graphics.thomsonreuters.com/data/reuters-graphics/homepage/graphics.json'
      )
        .then((r) => r.json())
        .then((r) => {
          const p = r
            .filter(({ canonical: l }) => {
              const u = window.location.pathname
                .replace(/\/index\.html$/, '')
                .replace(/\/$/, '');
              return u ? !l.includes(u) : !0;
            })
            .slice(0, 4)
            .map(({ url: l, image: u, title: f, description: v }) => ({
              url: l,
              image: u,
              title: f,
              description: v,
            }));
          n(0, (a = [...e, ...p].slice(0, 4)));
        });
    }),
    (o.$$set = (r) => {
      'referrals' in r && n(1, (t = r.referrals));
    }),
    (o.$$.update = () => {
      o.$$.dirty & 2 &&
        (e = t.filter((r) => r.url && r.title && r.image).slice(0, 4));
    }),
    [a, t]
  );
}
class se extends U {
  constructor(s) {
    super();
    Q(this, s, xs, Zs, X, { referrals: 1 });
  }
}
function ee(o) {
  let s, n;
  return {
    c() {
      (s = h('img')), this.h();
    },
    l(e) {
      (s = _(e, 'IMG', { class: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      g(s, 'class', 'logo reuters-graphics'),
        as(
          s.src,
          (n =
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-logo/svg/reuters-logo-color-dark.svg')
        ) || g(s, 'src', n),
        g(s, 'alt', 'Reuters logo');
    },
    m(e, t) {
      k(e, s, t);
    },
    d(e) {
      e && i(s);
    },
  };
}
function te(o) {
  let s, n;
  return {
    c() {
      (s = h('img')), this.h();
    },
    l(e) {
      (s = _(e, 'IMG', { class: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      g(s, 'class', 'logo reuters-graphics'),
        as(
          s.src,
          (n =
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-logo/svg/reuters-logo-color-light.svg')
        ) || g(s, 'src', n),
        g(s, 'alt', 'Reuters logo');
    },
    m(e, t) {
      k(e, s, t);
    },
    d(e) {
      e && i(s);
    },
  };
}
function ne(o) {
  let s, n;
  return {
    c() {
      (s = h('img')), this.h();
    },
    l(e) {
      (s = _(e, 'IMG', { class: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      g(s, 'class', 'logo reuters-graphics'),
        as(
          s.src,
          (n =
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-logo/svg/reuters-logo-dark.svg')
        ) || g(s, 'src', n),
        g(s, 'alt', 'Reuters logo');
    },
    m(e, t) {
      k(e, s, t);
    },
    d(e) {
      e && i(s);
    },
  };
}
function ae(o) {
  let s, n;
  return {
    c() {
      (s = h('img')), this.h();
    },
    l(e) {
      (s = _(e, 'IMG', { class: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      g(s, 'class', 'logo reuters-graphics'),
        as(
          s.src,
          (n =
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-logo/svg/reuters-logo-light.svg')
        ) || g(s, 'src', n),
        g(s, 'alt', 'Reuters logo');
    },
    m(e, t) {
      k(e, s, t);
    },
    d(e) {
      e && i(s);
    },
  };
}
function re(o) {
  let s, n;
  return (
    (s = new Ls({
      props: {
        top: 2400,
        once: !0,
        $$slots: {
          default: [
            oe,
            ({ intersecting: e }) => ({ 3: e }),
            ({ intersecting: e }) => (e ? 8 : 0),
          ],
        },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        L(s.$$.fragment);
      },
      l(e) {
        C(s.$$.fragment, e);
      },
      m(e, t) {
        j(s, e, t), (n = !0);
      },
      p(e, t) {
        const a = {};
        t & 25 && (a.$$scope = { dirty: t, ctx: e }), s.$set(a);
      },
      i(e) {
        n || (y(s.$$.fragment, e), (n = !0));
      },
      o(e) {
        w(s.$$.fragment, e), (n = !1);
      },
      d(e) {
        D(s, e);
      },
    }
  );
}
function Es(o) {
  let s, n;
  return (
    (s = new se({ props: { referrals: o[0] } })),
    {
      c() {
        L(s.$$.fragment);
      },
      l(e) {
        C(s.$$.fragment, e);
      },
      m(e, t) {
        j(s, e, t), (n = !0);
      },
      p(e, t) {
        const a = {};
        t & 1 && (a.referrals = e[0]), s.$set(a);
      },
      i(e) {
        n || (y(s.$$.fragment, e), (n = !0));
      },
      o(e) {
        w(s.$$.fragment, e), (n = !1);
      },
      d(e) {
        D(s, e);
      },
    }
  );
}
function oe(o) {
  let s,
    n,
    e = o[3] && Es(o);
  return {
    c() {
      e && e.c(), (s = F());
    },
    l(t) {
      e && e.l(t), (s = F());
    },
    m(t, a) {
      e && e.m(t, a), k(t, s, a), (n = !0);
    },
    p(t, a) {
      t[3]
        ? e
          ? (e.p(t, a), a & 8 && y(e, 1))
          : ((e = Es(t)), e.c(), y(e, 1), e.m(s.parentNode, s))
        : e &&
          (fs(),
          w(e, 1, 1, () => {
            e = null;
          }),
          gs());
    },
    i(t) {
      n || (y(e), (n = !0));
    },
    o(t) {
      w(e), (n = !1);
    },
    d(t) {
      e && e.d(t), t && i(s);
    },
  };
}
function le(o) {
  let s, n, e, t;
  function a(u, f) {
    return u[1] && u[2] ? ae : u[1] ? ne : u[2] ? te : ee;
  }
  let r = a(o),
    p = r(o),
    l = re(o);
  return {
    c() {
      (s = h('section')),
        (n = h('figure')),
        p.c(),
        (e = R()),
        l && l.c(),
        this.h();
    },
    l(u) {
      s = _(u, 'SECTION', { class: !0 });
      var f = b(s);
      n = _(f, 'FIGURE', { class: !0 });
      var v = b(n);
      p.l(v), v.forEach(i), (e = I(f)), l && l.l(f), f.forEach(i), this.h();
    },
    h() {
      g(n, 'class', 'svelte-1dfql50'), g(s, 'class', 'referral-container');
    },
    m(u, f) {
      k(u, s, f), $(s, n), p.m(n, null), $(s, e), l && l.m(s, null), (t = !0);
    },
    p(u, [f]) {
      r !== (r = a(u)) && (p.d(1), (p = r(u)), p && (p.c(), p.m(n, null))),
        l.p(u, f);
    },
    i(u) {
      t || (y(l), (t = !0));
    },
    o(u) {
      w(l), (t = !1);
    },
    d(u) {
      u && i(s), p.d(), l && l.d();
    },
  };
}
function ce(o, s, n) {
  let { referrals: e = [] } = s,
    { monocolourLogo: t = !1 } = s,
    { lightLogo: a = !1 } = s;
  return (
    (o.$$set = (r) => {
      'referrals' in r && n(0, (e = r.referrals)),
        'monocolourLogo' in r && n(1, (t = r.monocolourLogo)),
        'lightLogo' in r && n(2, (a = r.lightLogo));
    }),
    [e, t, a]
  );
}
class ms extends U {
  constructor(s) {
    super();
    Q(this, s, ce, le, X, { referrals: 0, monocolourLogo: 1, lightLogo: 2 });
  }
}
function pe(o) {
  let s, n;
  return (
    (s = new ms({})),
    {
      c() {
        L(s.$$.fragment);
      },
      l(e) {
        C(s.$$.fragment, e);
      },
      m(e, t) {
        j(s, e, t), (n = !0);
      },
      i(e) {
        n || (y(s.$$.fragment, e), (n = !0));
      },
      o(e) {
        w(s.$$.fragment, e), (n = !1);
      },
      d(e) {
        D(s, e);
      },
    }
  );
}
function ie(o) {
  let s, n;
  return (
    (s = new ms({ props: { monocolourLogo: !0, lightLogo: !1 } })),
    {
      c() {
        L(s.$$.fragment);
      },
      l(e) {
        C(s.$$.fragment, e);
      },
      m(e, t) {
        j(s, e, t), (n = !0);
      },
      p: us,
      i(e) {
        n || (y(s.$$.fragment, e), (n = !0));
      },
      o(e) {
        w(s.$$.fragment, e), (n = !1);
      },
      d(e) {
        D(s, e);
      },
    }
  );
}
function ue(o) {
  let s, n;
  return (
    (s = new ms({ props: { referrals: o[0] } })),
    {
      c() {
        L(s.$$.fragment);
      },
      l(e) {
        C(s.$$.fragment, e);
      },
      m(e, t) {
        j(s, e, t), (n = !0);
      },
      p: us,
      i(e) {
        n || (y(s.$$.fragment, e), (n = !0));
      },
      o(e) {
        w(s.$$.fragment, e), (n = !1);
      },
      d(e) {
        D(s, e);
      },
    }
  );
}
function fe(o) {
  let s,
    n,
    e,
    t,
    a,
    r,
    p,
    l,
    u,
    f,
    v,
    rs = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Referrals <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Referrals</span> <span class="token punctuation">/></span></span></code>`,
    d,
    E,
    M,
    N,
    W,
    os,
    Y,
    A,
    Cs = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Referrals <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Referrals</span> <span class="token attr-name">monocolourLogo=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">lightLogo=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">:global</span> <span class="token punctuation">&#123;</span>
    <span class="token selector">section.referral-container</span> <span class="token punctuation">&#123;</span>
      <span class="token selector">div.image</span> <span class="token punctuation">&#123;</span>
        <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>75%<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,
    Z,
    G,
    P,
    x,
    B,
    H,
    ls,
    z,
    cs,
    ps,
    ss,
    S,
    js = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
    es,
    V,
    ts;
  return (
    (E = new is({
      props: { $$slots: { default: [pe] }, $$scope: { ctx: o } },
    })),
    (P = new is({
      props: { $$slots: { default: [ie] }, $$scope: { ctx: o } },
    })),
    (V = new is({
      props: { $$slots: { default: [ue] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        (s = h('section')),
          (n = h('h2')),
          (e = T(Rs)),
          (t = R()),
          (a = h('p')),
          (r = T('Add a referrals bar with recent graphics from the ')),
          (p = h('a')),
          (l = T('graphics homepage')),
          (u = T('.')),
          (f = R()),
          (v = h('pre')),
          (d = R()),
          L(E.$$.fragment),
          (M = R()),
          (N = h('section')),
          (W = h('p')),
          (os = T('Customise the Reuters logo and image style.')),
          (Y = R()),
          (A = h('pre')),
          (Z = R()),
          (G = h('div')),
          L(P.$$.fragment),
          (x = R()),
          (B = h('section')),
          (H = h('p')),
          (ls = T('Pass up to four custom referrals to the ')),
          (z = h('code')),
          (cs = T('referrals')),
          (ps = T(' prop.')),
          (ss = R()),
          (S = h('pre')),
          (es = R()),
          L(V.$$.fragment),
          this.h();
      },
      l(c) {
        s = _(c, 'SECTION', {});
        var m = b(s);
        n = _(m, 'H2', {});
        var J = b(n);
        (e = O(J, Rs)), J.forEach(i), (t = I(m)), (a = _(m, 'P', {}));
        var q = b(a);
        (r = O(q, 'Add a referrals bar with recent graphics from the ')),
          (p = _(q, 'A', { href: !0, rel: !0 }));
        var K = b(p);
        (l = O(K, 'graphics homepage')),
          K.forEach(i),
          (u = O(q, '.')),
          q.forEach(i),
          m.forEach(i),
          (f = I(c)),
          (v = _(c, 'PRE', { class: !0 }));
        var Ds = b(v);
        Ds.forEach(i),
          (d = I(c)),
          C(E.$$.fragment, c),
          (M = I(c)),
          (N = _(c, 'SECTION', {}));
        var ks = b(N);
        W = _(ks, 'P', {});
        var hs = b(W);
        (os = O(hs, 'Customise the Reuters logo and image style.')),
          hs.forEach(i),
          ks.forEach(i),
          (Y = I(c)),
          (A = _(c, 'PRE', { class: !0 }));
        var Ts = b(A);
        Ts.forEach(i), (Z = I(c)), (G = _(c, 'DIV', { class: !0 }));
        var _s = b(G);
        C(P.$$.fragment, _s),
          _s.forEach(i),
          (x = I(c)),
          (B = _(c, 'SECTION', {}));
        var ds = b(B);
        H = _(ds, 'P', {});
        var ns = b(H);
        (ls = O(ns, 'Pass up to four custom referrals to the ')),
          (z = _(ns, 'CODE', {}));
        var vs = b(z);
        (cs = O(vs, 'referrals')),
          vs.forEach(i),
          (ps = O(ns, ' prop.')),
          ns.forEach(i),
          ds.forEach(i),
          (ss = I(c)),
          (S = _(c, 'PRE', { class: !0 }));
        var Os = b(S);
        Os.forEach(i), (es = I(c)), C(V.$$.fragment, c), this.h();
      },
      h() {
        g(
          p,
          'href',
          'https://graphics.thomsonreuters.com/data/reuters-graphics/homepage/graphics.json'
        ),
          g(p, 'rel', 'nofollow'),
          g(v, 'class', 'language-svelte'),
          g(A, 'class', 'language-svelte'),
          g(G, 'class', 'grey-images svelte-1mwrbxk'),
          g(S, 'class', 'language-svelte');
      },
      m(c, m) {
        k(c, s, m),
          $(s, n),
          $(n, e),
          $(s, t),
          $(s, a),
          $(a, r),
          $(a, p),
          $(p, l),
          $(a, u),
          k(c, f, m),
          k(c, v, m),
          (v.innerHTML = rs),
          k(c, d, m),
          j(E, c, m),
          k(c, M, m),
          k(c, N, m),
          $(N, W),
          $(W, os),
          k(c, Y, m),
          k(c, A, m),
          (A.innerHTML = Cs),
          k(c, Z, m),
          k(c, G, m),
          j(P, G, null),
          k(c, x, m),
          k(c, B, m),
          $(B, H),
          $(H, ls),
          $(H, z),
          $(z, cs),
          $(H, ps),
          k(c, ss, m),
          k(c, S, m),
          (S.innerHTML = js),
          k(c, es, m),
          j(V, c, m),
          (ts = !0);
      },
      p(c, [m]) {
        const J = {};
        m & 2 && (J.$$scope = { dirty: m, ctx: c }), E.$set(J);
        const q = {};
        m & 2 && (q.$$scope = { dirty: m, ctx: c }), P.$set(q);
        const K = {};
        m & 2 && (K.$$scope = { dirty: m, ctx: c }), V.$set(K);
      },
      i(c) {
        ts ||
          (y(E.$$.fragment, c),
          y(P.$$.fragment, c),
          y(V.$$.fragment, c),
          (ts = !0));
      },
      o(c) {
        w(E.$$.fragment, c),
          w(P.$$.fragment, c),
          w(V.$$.fragment, c),
          (ts = !1);
      },
      d(c) {
        c && i(s),
          c && i(f),
          c && i(v),
          c && i(d),
          D(E, c),
          c && i(M),
          c && i(N),
          c && i(Y),
          c && i(A),
          c && i(Z),
          c && i(G),
          D(P),
          c && i(x),
          c && i(B),
          c && i(ss),
          c && i(S),
          c && i(es),
          D(V, c);
      },
    }
  );
}
const ge = {
    title: 'Referrals',
    description: 'Add a referrals bar with recent graphics stories.',
    slug: 'referrals',
  },
  { title: Rs, description: ve, slug: be } = ge;
function me(o) {
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
class $e extends U {
  constructor(s) {
    super();
    Q(this, s, me, fe, X, {});
  }
}
export { $e as default, ge as metadata };