var Nt = Object.defineProperty,
  Ht = Object.defineProperties;
var Ot = Object.getOwnPropertyDescriptors;
var Ge = Object.getOwnPropertySymbols;
var Rt = Object.prototype.hasOwnProperty,
  Ut = Object.prototype.propertyIsEnumerable;
var Fe = (a, e, s) =>
    e in a
      ? Nt(a, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (a[e] = s),
  Ce = (a, e) => {
    for (var s in e || (e = {})) Rt.call(e, s) && Fe(a, s, e[s]);
    if (Ge) for (var s of Ge(e)) Ut.call(e, s) && Fe(a, s, e[s]);
    return a;
  },
  Ze = (a, e) => Ht(a, Ot(e));
var ze = (a, e, s) =>
  new Promise((t, n) => {
    var l = (o) => {
        try {
          i(s.next(o));
        } catch (u) {
          n(u);
        }
      },
      r = (o) => {
        try {
          i(s.throw(o));
        } catch (u) {
          n(u);
        }
      },
      i = (o) => (o.done ? t(o.value) : Promise.resolve(o.value).then(l, r));
    i((s = s.apply(a, e)).next());
  });
import {
  S as X,
  i as x,
  s as ee,
  K as be,
  L as $e,
  a as m,
  d as c,
  b as f,
  Z as ae,
  g as S,
  J as d,
  E as K,
  e as _,
  t as O,
  c as g,
  h as R,
  j as Q,
  Y as Ke,
  k as V,
  m as j,
  F as Bt,
  G as Pt,
  H as Gt,
  I as Ft,
  n as me,
  o as q,
  p as ve,
  q as C,
  N as It,
  R as Mt,
  u as Zt,
  w as B,
  x as P,
  y as G,
  B as F,
  _ as ce,
  T as zt,
  l as Ve,
  V as Y,
  a4 as St,
  f as We,
  a8 as Kt,
  r as Je,
} from './index-83a5d9f9.js';
import { g as Ye } from './main-a9593015.js';
import { w as Qe } from './index-5b18af3d.js';
import { R as Dt } from './index-83a1f0ce.js';
import { n as U } from './index-c889ff85.js';
import { D as Le } from './index-16ec1060.js';
import './paths-396f020f.js';
function Wt(a) {
  let e, s;
  return {
    c() {
      (e = be('svg')), (s = be('path')), this.h();
    },
    l(t) {
      e = $e(t, 'svg', {
        class: !0,
        focusable: !0,
        'aria-hidden': !0,
        xmlns: !0,
        viewBox: !0,
      });
      var n = m(e);
      (s = $e(n, 'path', { d: !0 })), m(s).forEach(c), n.forEach(c), this.h();
    },
    h() {
      f(
        s,
        'd',
        'M10.413.587a.71.71 0 0 0-1.027 0L5.5 4.474 1.613.587a.71.71 0 0 0-1.027 0 .709.709 0 0 0 0 1.027l4.4 4.4c.147.147.367.22.513.22a.79.79 0 0 0 .513-.22l4.4-4.4a.71.71 0 0 0 0-1.027h.001Z'
      ),
        f(e, 'class', 'arrow svelte-l3oc9t'),
        f(e, 'focusable', 'false'),
        f(e, 'aria-hidden', 'true'),
        f(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        f(e, 'viewBox', '0 0 11 7'),
        ae(e, 'rotated', a[0]);
    },
    m(t, n) {
      S(t, e, n), d(e, s);
    },
    p(t, [n]) {
      n & 1 && ae(e, 'rotated', t[0]);
    },
    i: K,
    o: K,
    d(t) {
      t && c(e);
    },
  };
}
function Jt(a, e, s) {
  let { rotate: t = !1 } = e;
  return (
    (a.$$set = (n) => {
      'rotate' in n && s(0, (t = n.rotate));
    }),
    [t]
  );
}
class Tt extends X {
  constructor(e) {
    super(), x(this, e, Jt, Wt, ee, { rotate: 0 });
  }
}
function Xe(a) {
  let e,
    s,
    t = a[0].primary_section.name + '',
    n,
    l;
  return {
    c() {
      (e = _('a')), (s = _('span')), (n = O(t)), this.h();
    },
    l(r) {
      e = g(r, 'A', { href: !0, class: !0 });
      var i = m(e);
      s = g(i, 'SPAN', { class: !0 });
      var o = m(s);
      (n = R(o, t)), o.forEach(c), i.forEach(c), this.h();
    },
    h() {
      f(s, 'class', 'label svelte-1nyc2e8'),
        f(e, 'href', (l = U(a[0].primary_section.id))),
        f(e, 'class', 'svelte-1nyc2e8');
    },
    m(r, i) {
      S(r, e, i), d(e, s), d(s, n);
    },
    p(r, i) {
      i & 1 && t !== (t = r[0].primary_section.name + '') && Q(n, t),
        i & 1 && l !== (l = U(r[0].primary_section.id)) && f(e, 'href', l);
    },
    d(r) {
      r && c(e);
    },
  };
}
function xe(a) {
  let e,
    s = Ye(a[0].display_time) + '',
    t,
    n;
  return {
    c() {
      (e = _('time')), (t = O(s)), this.h();
    },
    l(l) {
      e = g(l, 'TIME', { datetime: !0, class: !0 });
      var r = m(e);
      (t = R(r, s)), r.forEach(c), this.h();
    },
    h() {
      f(e, 'datetime', (n = a[0].display_time)),
        f(e, 'class', 'svelte-1nyc2e8');
    },
    m(l, r) {
      S(l, e, r), d(e, t);
    },
    p(l, r) {
      r & 1 && s !== (s = Ye(l[0].display_time) + '') && Q(t, s),
        r & 1 && n !== (n = l[0].display_time) && f(e, 'datetime', n);
    },
    d(l) {
      l && c(e);
    },
  };
}
function et(a) {
  let e, s, t, n;
  return {
    c() {
      (e = _('div')), (s = _('img')), this.h();
    },
    l(l) {
      e = g(l, 'DIV', { class: !0 });
      var r = m(e);
      (s = g(r, 'IMG', { src: !0, alt: !0, class: !0 })),
        r.forEach(c),
        this.h();
    },
    h() {
      Ke(s.src, (t = a[2].renditions.square['120w'])) || f(s, 'src', t),
        f(s, 'alt', (n = a[2].alt_text)),
        f(s, 'class', 'svelte-1nyc2e8'),
        f(e, 'class', 'thumbnail svelte-1nyc2e8');
    },
    m(l, r) {
      S(l, e, r), d(e, s);
    },
    p(l, r) {
      r & 4 &&
        !Ke(s.src, (t = l[2].renditions.square['120w'])) &&
        f(s, 'src', t),
        r & 4 && n !== (n = l[2].alt_text) && f(s, 'alt', n);
    },
    d(l) {
      l && c(e);
    },
  };
}
function Yt(a) {
  let e,
    s,
    t,
    n,
    l,
    r = a[0].title + '',
    i,
    o,
    u,
    p,
    h = a[1] && Xe(a),
    M = !a[1] && xe(a),
    y = a[2] && et(a);
  return {
    c() {
      (e = _('div')),
        (s = _('a')),
        (t = _('div')),
        h && h.c(),
        (n = V()),
        (l = _('span')),
        (i = O(r)),
        (o = V()),
        M && M.c(),
        (u = V()),
        y && y.c(),
        this.h();
    },
    l(v) {
      e = g(v, 'DIV', { class: !0 });
      var E = m(e);
      s = g(E, 'A', { href: !0, class: !0 });
      var k = m(s);
      t = g(k, 'DIV', { class: !0 });
      var I = m(t);
      h && h.l(I), (n = j(I)), (l = g(I, 'SPAN', { class: !0 }));
      var w = m(l);
      (i = R(w, r)),
        w.forEach(c),
        (o = j(I)),
        M && M.l(I),
        I.forEach(c),
        (u = j(k)),
        y && y.l(k),
        k.forEach(c),
        E.forEach(c),
        this.h();
    },
    h() {
      f(l, 'class', 'svelte-1nyc2e8'),
        f(t, 'class', 'story-text svelte-1nyc2e8'),
        ae(t, 'has-thumbnail', a[2]),
        f(s, 'href', (p = U(a[0].canonical_url))),
        f(s, 'class', 'svelte-1nyc2e8'),
        f(e, 'class', 'story-card svelte-1nyc2e8');
    },
    m(v, E) {
      S(v, e, E),
        d(e, s),
        d(s, t),
        h && h.m(t, null),
        d(t, n),
        d(t, l),
        d(l, i),
        d(t, o),
        M && M.m(t, null),
        d(s, u),
        y && y.m(s, null);
    },
    p(v, [E]) {
      v[1]
        ? h
          ? h.p(v, E)
          : ((h = Xe(v)), h.c(), h.m(t, n))
        : h && (h.d(1), (h = null)),
        E & 1 && r !== (r = v[0].title + '') && Q(i, r),
        v[1]
          ? M && (M.d(1), (M = null))
          : M
          ? M.p(v, E)
          : ((M = xe(v)), M.c(), M.m(t, null)),
        E & 4 && ae(t, 'has-thumbnail', v[2]),
        v[2]
          ? y
            ? y.p(v, E)
            : ((y = et(v)), y.c(), y.m(s, null))
          : y && (y.d(1), (y = null)),
        E & 1 && p !== (p = U(v[0].canonical_url)) && f(s, 'href', p);
    },
    i: K,
    o: K,
    d(v) {
      v && c(e), h && h.d(), M && M.d(), y && y.d();
    },
  };
}
function Qt(a, e, s) {
  let t,
    { story: n } = e,
    { withSection: l = !1 } = e;
  return (
    (a.$$set = (r) => {
      'story' in r && s(0, (n = r.story)),
        'withSection' in r && s(1, (l = r.withSection));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 1 && s(2, (t = n.thumbnail));
    }),
    [n, l, t]
  );
}
class Xt extends X {
  constructor(e) {
    super(), x(this, e, Qt, Yt, ee, { story: 0, withSection: 1 });
  }
}
function xt(a) {
  let e, s, t;
  return {
    c() {
      (e = _('div')), (s = _('div')), (t = _('div')), this.h();
    },
    l(n) {
      e = g(n, 'DIV', {});
      var l = m(e);
      s = g(l, 'DIV', { class: !0 });
      var r = m(s);
      (t = g(r, 'DIV', { class: !0 })),
        m(t).forEach(c),
        r.forEach(c),
        l.forEach(c),
        this.h();
    },
    h() {
      f(t, 'class', 'spinner svelte-hunvtd'),
        f(s, 'class', 'spinner-container svelte-hunvtd');
    },
    m(n, l) {
      S(n, e, l), d(e, s), d(s, t);
    },
    p: K,
    i: K,
    o: K,
    d(n) {
      n && c(e);
    },
  };
}
class es extends X {
  constructor(e) {
    super(), x(this, e, null, xt, ee, {});
  }
}
function tt(a, e, s) {
  const t = a.slice();
  return (t[7] = e[s]), t;
}
function ts(a) {
  let e, s, t;
  return (
    (s = new es({})),
    {
      c() {
        (e = _('div')), B(s.$$.fragment), this.h();
      },
      l(n) {
        e = g(n, 'DIV', { class: !0 });
        var l = m(e);
        P(s.$$.fragment, l), l.forEach(c), this.h();
      },
      h() {
        f(e, 'class', 'spinner svelte-43spo9');
      },
      m(n, l) {
        S(n, e, l), G(s, e, null), (t = !0);
      },
      p: K,
      i(n) {
        t || (C(s.$$.fragment, n), (t = !0));
      },
      o(n) {
        q(s.$$.fragment, n), (t = !1);
      },
      d(n) {
        n && c(e), F(s);
      },
    }
  );
}
function ss(a) {
  let e,
    s,
    t,
    n,
    l,
    r = a[1],
    i = [];
  for (let u = 0; u < r.length; u += 1) i[u] = st(tt(a, r, u));
  const o = (u) =>
    q(i[u], 1, 1, () => {
      i[u] = null;
    });
  return {
    c() {
      (e = _('span')), (s = O(a[0])), (t = V()), (n = _('ul'));
      for (let u = 0; u < i.length; u += 1) i[u].c();
      this.h();
    },
    l(u) {
      e = g(u, 'SPAN', { class: !0 });
      var p = m(e);
      (s = R(p, a[0])),
        p.forEach(c),
        (t = j(u)),
        (n = g(u, 'UL', { class: !0 }));
      var h = m(n);
      for (let M = 0; M < i.length; M += 1) i[M].l(h);
      h.forEach(c), this.h();
    },
    h() {
      f(e, 'class', 'latest svelte-43spo9'),
        f(n, 'class', 'story-list svelte-43spo9');
    },
    m(u, p) {
      S(u, e, p), d(e, s), S(u, t, p), S(u, n, p);
      for (let h = 0; h < i.length; h += 1) i[h].m(n, null);
      l = !0;
    },
    p(u, p) {
      if (((!l || p & 1) && Q(s, u[0]), p & 6)) {
        r = u[1];
        let h;
        for (h = 0; h < r.length; h += 1) {
          const M = tt(u, r, h);
          i[h]
            ? (i[h].p(M, p), C(i[h], 1))
            : ((i[h] = st(M)), i[h].c(), C(i[h], 1), i[h].m(n, null));
        }
        for (me(), h = r.length; h < i.length; h += 1) o(h);
        ve();
      }
    },
    i(u) {
      if (!l) {
        for (let p = 0; p < r.length; p += 1) C(i[p]);
        l = !0;
      }
    },
    o(u) {
      i = i.filter(Boolean);
      for (let p = 0; p < i.length; p += 1) q(i[p]);
      l = !1;
    },
    d(u) {
      u && c(e), u && c(t), u && c(n), ce(i, u);
    },
  };
}
function st(a) {
  let e, s, t, n;
  return (
    (s = new Xt({ props: { story: a[7], withSection: a[2] === 'more' } })),
    {
      c() {
        (e = _('li')), B(s.$$.fragment), (t = V()), this.h();
      },
      l(l) {
        e = g(l, 'LI', { class: !0 });
        var r = m(e);
        P(s.$$.fragment, r), (t = j(r)), r.forEach(c), this.h();
      },
      h() {
        f(e, 'class', 'story-item svelte-43spo9');
      },
      m(l, r) {
        S(l, e, r), G(s, e, null), d(e, t), (n = !0);
      },
      p(l, r) {
        const i = {};
        r & 2 && (i.story = l[7]),
          r & 4 && (i.withSection = l[2] === 'more'),
          s.$set(i);
      },
      i(l) {
        n || (C(s.$$.fragment, l), (n = !0));
      },
      o(l) {
        q(s.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && c(e), F(s);
      },
    }
  );
}
function ns(a) {
  let e, s, t, n, l, r, i, o, u, p, h;
  const M = a[5].default,
    y = Bt(M, a, a[4], null),
    v = [ss, ts],
    E = [];
  function k(I, w) {
    return I[1].length > 0 ? 0 : 1;
  }
  return (
    (u = k(a)),
    (p = E[u] = v[u](a)),
    {
      c() {
        (e = _('div')),
          (s = _('div')),
          (t = _('div')),
          (n = _('div')),
          (l = _('div')),
          y && y.c(),
          (r = V()),
          (i = _('div')),
          (o = _('div')),
          p.c(),
          this.h();
      },
      l(I) {
        e = g(I, 'DIV', { class: !0 });
        var w = m(e);
        s = g(w, 'DIV', { class: !0 });
        var b = m(s);
        t = g(b, 'DIV', { class: !0 });
        var D = m(t);
        n = g(D, 'DIV', { class: !0 });
        var N = m(n);
        l = g(N, 'DIV', { class: !0 });
        var T = m(l);
        y && y.l(T),
          T.forEach(c),
          N.forEach(c),
          (r = j(D)),
          (i = g(D, 'DIV', { class: !0 }));
        var H = m(i);
        o = g(H, 'DIV', { class: !0 });
        var z = m(o);
        p.l(z),
          z.forEach(c),
          H.forEach(c),
          D.forEach(c),
          b.forEach(c),
          w.forEach(c),
          this.h();
      },
      h() {
        f(l, 'class', 'inner svelte-43spo9'),
          f(n, 'class', 'submenu svelte-43spo9'),
          f(o, 'class', 'inner svelte-43spo9'),
          f(i, 'class', 'stories-container svelte-43spo9'),
          f(t, 'class', 'inner svelte-43spo9'),
          f(s, 'class', 'dropdown-container svelte-43spo9'),
          f(e, 'class', 'dropdown svelte-43spo9');
      },
      m(I, w) {
        S(I, e, w),
          d(e, s),
          d(s, t),
          d(t, n),
          d(n, l),
          y && y.m(l, null),
          d(t, r),
          d(t, i),
          d(i, o),
          E[u].m(o, null),
          (h = !0);
      },
      p(I, [w]) {
        y &&
          y.p &&
          (!h || w & 16) &&
          Pt(y, M, I, I[4], h ? Ft(M, I[4], w, null) : Gt(I[4]), null);
        let b = u;
        (u = k(I)),
          u === b
            ? E[u].p(I, w)
            : (me(),
              q(E[b], 1, 1, () => {
                E[b] = null;
              }),
              ve(),
              (p = E[u]),
              p ? p.p(I, w) : ((p = E[u] = v[u](I)), p.c()),
              C(p, 1),
              p.m(o, null));
      },
      i(I) {
        h || (C(y, I), C(p), (h = !0));
      },
      o(I) {
        q(y, I), q(p), (h = !1);
      },
      d(I) {
        I && c(e), y && y.d(I), E[u].d();
      },
    }
  );
}
function as(a, e, s) {
  let t,
    { $$slots: n = {}, $$scope: l } = e;
  const r = It('nav-active-section');
  Mt(a, r, (p) => s(2, (t = p)));
  let { headingText: i = 'Trending Stories' } = e,
    o = [],
    u = null;
  return (
    Zt(() =>
      ze(this, null, function* () {
        u !== t &&
          (t === 'more'
            ? yield fetch(
                'https://www.reuters.com/pf/api/v3/content/fetch/articles-by-trends-v1?' +
                  new URLSearchParams({
                    query: JSON.stringify({ size: 4, website: 'reuters' }),
                  })
              )
                .then((p) => p.json())
                .then((p) => {
                  s(1, (o = p.result.articles)), (u = t);
                })
            : yield fetch(
                'https://www.reuters.com/pf/api/v3/content/fetch/recent-stories-by-sections-v1?' +
                  new URLSearchParams({
                    query: JSON.stringify({
                      section_ids: t,
                      size: 4,
                      website: 'reuters',
                    }),
                  })
              )
                .then((p) => p.json())
                .then((p) => {
                  s(1, (o = p.result.articles)), (u = t);
                }));
      })
    ),
    (a.$$set = (p) => {
      'headingText' in p && s(0, (i = p.headingText)),
        '$$scope' in p && s(4, (l = p.$$scope));
    }),
    [i, o, t, r, l, n]
  );
}
class Ct extends X {
  constructor(e) {
    super(), x(this, e, as, ns, ee, { headingText: 0 });
  }
}
function nt(a, e, s) {
  const t = a.slice();
  return (t[3] = e[s]), t;
}
function at(a, e, s) {
  const t = a.slice();
  return (t[3] = e[s]), t;
}
function lt(a) {
  let e,
    s = a[0].children.slice(0, a[2]),
    t = [];
  for (let n = 0; n < s.length; n += 1) t[n] = rt(at(a, s, n));
  return {
    c() {
      e = _('ul');
      for (let n = 0; n < t.length; n += 1) t[n].c();
      this.h();
    },
    l(n) {
      e = g(n, 'UL', { class: !0 });
      var l = m(e);
      for (let r = 0; r < t.length; r += 1) t[r].l(l);
      l.forEach(c), this.h();
    },
    h() {
      f(e, 'class', 'sections-group svelte-1jfjnt9');
    },
    m(n, l) {
      S(n, e, l);
      for (let r = 0; r < t.length; r += 1) t[r].m(e, null);
    },
    p(n, l) {
      if (l & 5) {
        s = n[0].children.slice(0, n[2]);
        let r;
        for (r = 0; r < s.length; r += 1) {
          const i = at(n, s, r);
          t[r] ? t[r].p(i, l) : ((t[r] = rt(i)), t[r].c(), t[r].m(e, null));
        }
        for (; r < t.length; r += 1) t[r].d(1);
        t.length = s.length;
      }
    },
    d(n) {
      n && c(e), ce(t, n);
    },
  };
}
function rt(a) {
  let e,
    s,
    t = a[3].name + '',
    n,
    l,
    r;
  return {
    c() {
      (e = _('li')), (s = _('a')), (n = O(t)), (r = V()), this.h();
    },
    l(i) {
      e = g(i, 'LI', { class: !0 });
      var o = m(e);
      s = g(o, 'A', { class: !0, href: !0 });
      var u = m(s);
      (n = R(u, t)), u.forEach(c), (r = j(o)), o.forEach(c), this.h();
    },
    h() {
      f(s, 'class', 'subsection-link svelte-1jfjnt9'),
        f(s, 'href', (l = U(a[3].url))),
        f(e, 'class', 'svelte-1jfjnt9');
    },
    m(i, o) {
      S(i, e, o), d(e, s), d(s, n), d(e, r);
    },
    p(i, o) {
      o & 5 && t !== (t = i[3].name + '') && Q(n, t),
        o & 5 && l !== (l = U(i[3].url)) && f(s, 'href', l);
    },
    d(i) {
      i && c(e);
    },
  };
}
function it(a) {
  let e,
    s,
    t = a[3].name + '',
    n,
    l,
    r;
  return {
    c() {
      (e = _('li')), (s = _('a')), (n = O(t)), (r = V()), this.h();
    },
    l(i) {
      e = g(i, 'LI', { class: !0 });
      var o = m(e);
      s = g(o, 'A', { class: !0, href: !0 });
      var u = m(s);
      (n = R(u, t)), u.forEach(c), (r = j(o)), o.forEach(c), this.h();
    },
    h() {
      f(s, 'class', 'subsection-link svelte-1jfjnt9'),
        f(s, 'href', (l = U(a[3].url))),
        f(e, 'class', 'svelte-1jfjnt9');
    },
    m(i, o) {
      S(i, e, o), d(e, s), d(s, n), d(e, r);
    },
    p(i, o) {
      o & 5 && t !== (t = i[3].name + '') && Q(n, t),
        o & 5 && l !== (l = U(i[3].url)) && f(s, 'href', l);
    },
    d(i) {
      i && c(e);
    },
  };
}
function ls(a) {
  let e,
    s,
    t,
    n = a[0].name + '',
    l,
    r,
    i,
    o,
    u,
    p,
    h = a[2] > 0 && lt(a),
    M = a[0].children.slice(a[2]),
    y = [];
  for (let v = 0; v < M.length; v += 1) y[v] = it(nt(a, M, v));
  return {
    c() {
      (e = _('a')),
        (s = _('span')),
        (t = O('Browse ')),
        (l = O(n)),
        (i = V()),
        (o = _('div')),
        h && h.c(),
        (u = V()),
        (p = _('ul'));
      for (let v = 0; v < y.length; v += 1) y[v].c();
      this.h();
    },
    l(v) {
      e = g(v, 'A', { href: !0 });
      var E = m(e);
      s = g(E, 'SPAN', { class: !0 });
      var k = m(s);
      (t = R(k, 'Browse ')),
        (l = R(k, n)),
        k.forEach(c),
        E.forEach(c),
        (i = j(v)),
        (o = g(v, 'DIV', { class: !0 }));
      var I = m(o);
      h && h.l(I), (u = j(I)), (p = g(I, 'UL', { class: !0 }));
      var w = m(p);
      for (let b = 0; b < y.length; b += 1) y[b].l(w);
      w.forEach(c), I.forEach(c), this.h();
    },
    h() {
      f(s, 'class', 'heading svelte-1jfjnt9'),
        f(e, 'href', (r = U(a[0].url))),
        f(p, 'class', 'sections-group svelte-1jfjnt9'),
        f(o, 'class', 'sections svelte-1jfjnt9');
    },
    m(v, E) {
      S(v, e, E),
        d(e, s),
        d(s, t),
        d(s, l),
        S(v, i, E),
        S(v, o, E),
        h && h.m(o, null),
        d(o, u),
        d(o, p);
      for (let k = 0; k < y.length; k += 1) y[k].m(p, null);
    },
    p(v, E) {
      if (
        (E & 1 && n !== (n = v[0].name + '') && Q(l, n),
        E & 1 && r !== (r = U(v[0].url)) && f(e, 'href', r),
        v[2] > 0
          ? h
            ? h.p(v, E)
            : ((h = lt(v)), h.c(), h.m(o, u))
          : h && (h.d(1), (h = null)),
        E & 5)
      ) {
        M = v[0].children.slice(v[2]);
        let k;
        for (k = 0; k < M.length; k += 1) {
          const I = nt(v, M, k);
          y[k] ? y[k].p(I, E) : ((y[k] = it(I)), y[k].c(), y[k].m(p, null));
        }
        for (; k < y.length; k += 1) y[k].d(1);
        y.length = M.length;
      }
    },
    d(v) {
      v && c(e), v && c(i), v && c(o), h && h.d(), ce(y, v);
    },
  };
}
function rs(a) {
  let e, s;
  return (
    (e = new Ct({
      props: {
        headingText: a[1],
        $$slots: { default: [ls] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(t) {
        P(e.$$.fragment, t);
      },
      m(t, n) {
        G(e, t, n), (s = !0);
      },
      p(t, [n]) {
        const l = {};
        n & 2 && (l.headingText = t[1]),
          n & 261 && (l.$$scope = { dirty: n, ctx: t }),
          e.$set(l);
      },
      i(t) {
        s || (C(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        q(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function is(a, e, s) {
  let t,
    { section: n = {} } = e,
    { headingText: l } = e;
  return (
    (a.$$set = (r) => {
      'section' in r && s(0, (n = r.section)),
        'headingText' in r && s(1, (l = r.headingText));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 1 &&
        s(
          2,
          (t =
            n.children && n.children.length > 7
              ? Math.ceil(n.children.length / 2)
              : 0)
        );
    }),
    [n, l, t]
  );
}
class os extends X {
  constructor(e) {
    super(), x(this, e, is, rs, ee, { section: 0, headingText: 1 });
  }
}
function ot(a, e, s) {
  const t = a.slice();
  return (t[1] = e[s]), t;
}
function ct(a, e, s) {
  const t = a.slice();
  return (t[4] = e[s]), t;
}
function ut(a) {
  let e,
    s = a[1].children,
    t = [];
  for (let n = 0; n < s.length; n += 1) t[n] = ft(ct(a, s, n));
  return {
    c() {
      e = _('ul');
      for (let n = 0; n < t.length; n += 1) t[n].c();
      this.h();
    },
    l(n) {
      e = g(n, 'UL', { class: !0 });
      var l = m(e);
      for (let r = 0; r < t.length; r += 1) t[r].l(l);
      l.forEach(c), this.h();
    },
    h() {
      f(e, 'class', 'subsections svelte-b5eq1a');
    },
    m(n, l) {
      S(n, e, l);
      for (let r = 0; r < t.length; r += 1) t[r].m(e, null);
    },
    p(n, l) {
      if (l & 1) {
        s = n[1].children;
        let r;
        for (r = 0; r < s.length; r += 1) {
          const i = ct(n, s, r);
          t[r] ? t[r].p(i, l) : ((t[r] = ft(i)), t[r].c(), t[r].m(e, null));
        }
        for (; r < t.length; r += 1) t[r].d(1);
        t.length = s.length;
      }
    },
    d(n) {
      n && c(e), ce(t, n);
    },
  };
}
function ft(a) {
  let e,
    s,
    t = a[4].name + '',
    n,
    l,
    r;
  return {
    c() {
      (e = _('li')), (s = _('a')), (n = O(t)), (r = V()), this.h();
    },
    l(i) {
      e = g(i, 'LI', {});
      var o = m(e);
      s = g(o, 'A', { class: !0, href: !0 });
      var u = m(s);
      (n = R(u, t)), u.forEach(c), (r = j(o)), o.forEach(c), this.h();
    },
    h() {
      f(s, 'class', 'subsection-link svelte-b5eq1a'),
        f(s, 'href', (l = U(a[4].url)));
    },
    m(i, o) {
      S(i, e, o), d(e, s), d(s, n), d(e, r);
    },
    p(i, o) {
      o & 1 && t !== (t = i[4].name + '') && Q(n, t),
        o & 1 && l !== (l = U(i[4].url)) && f(s, 'href', l);
    },
    d(i) {
      i && c(e);
    },
  };
}
function pt(a) {
  let e,
    s,
    t = a[1].name + '',
    n,
    l,
    r,
    i,
    o = a[1].children && ut(a);
  return {
    c() {
      (e = _('section')),
        (s = _('a')),
        (n = O(t)),
        (r = V()),
        o && o.c(),
        (i = V()),
        this.h();
    },
    l(u) {
      e = g(u, 'SECTION', { class: !0 });
      var p = m(e);
      s = g(p, 'A', { href: !0, class: !0 });
      var h = m(s);
      (n = R(h, t)),
        h.forEach(c),
        (r = j(p)),
        o && o.l(p),
        (i = j(p)),
        p.forEach(c),
        this.h();
    },
    h() {
      f(s, 'href', (l = U(a[1].url))),
        f(s, 'class', 'section-link svelte-b5eq1a'),
        f(e, 'class', 'more-section-group svelte-b5eq1a'),
        ae(e, 'has-children', a[1].children);
    },
    m(u, p) {
      S(u, e, p), d(e, s), d(s, n), d(e, r), o && o.m(e, null), d(e, i);
    },
    p(u, p) {
      p & 1 && t !== (t = u[1].name + '') && Q(n, t),
        p & 1 && l !== (l = U(u[1].url)) && f(s, 'href', l),
        u[1].children
          ? o
            ? o.p(u, p)
            : ((o = ut(u)), o.c(), o.m(e, i))
          : o && (o.d(1), (o = null)),
        p & 1 && ae(e, 'has-children', u[1].children);
    },
    d(u) {
      u && c(e), o && o.d();
    },
  };
}
function cs(a) {
  let e,
    s,
    t = a[0],
    n = [];
  for (let l = 0; l < t.length; l += 1) n[l] = pt(ot(a, t, l));
  return {
    c() {
      (e = _('div')), (s = _('div'));
      for (let l = 0; l < n.length; l += 1) n[l].c();
      this.h();
    },
    l(l) {
      e = g(l, 'DIV', { class: !0 });
      var r = m(e);
      s = g(r, 'DIV', { class: !0 });
      var i = m(s);
      for (let o = 0; o < n.length; o += 1) n[o].l(i);
      i.forEach(c), r.forEach(c), this.h();
    },
    h() {
      f(s, 'class', 'groupContainer'),
        f(e, 'class', 'more-sections svelte-b5eq1a');
    },
    m(l, r) {
      S(l, e, r), d(e, s);
      for (let i = 0; i < n.length; i += 1) n[i].m(s, null);
    },
    p(l, r) {
      if (r & 1) {
        t = l[0];
        let i;
        for (i = 0; i < t.length; i += 1) {
          const o = ot(l, t, i);
          n[i] ? n[i].p(o, r) : ((n[i] = pt(o)), n[i].c(), n[i].m(s, null));
        }
        for (; i < n.length; i += 1) n[i].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && c(e), ce(n, l);
    },
  };
}
function us(a) {
  let e, s;
  return (
    (e = new Ct({
      props: { $$slots: { default: [cs] }, $$scope: { ctx: a } },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(t) {
        P(e.$$.fragment, t);
      },
      m(t, n) {
        G(e, t, n), (s = !0);
      },
      p(t, [n]) {
        const l = {};
        n & 129 && (l.$$scope = { dirty: n, ctx: t }), e.$set(l);
      },
      i(t) {
        s || (C(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        q(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function fs(a, e, s) {
  let { sections: t = [] } = e;
  return (
    (a.$$set = (n) => {
      'sections' in n && s(0, (t = n.sections));
    }),
    [t]
  );
}
class ps extends X {
  constructor(e) {
    super(), x(this, e, fs, us, ee, { sections: 0 });
  }
}
function dt(a, e, s) {
  const t = a.slice();
  return (t[20] = e[s]), t;
}
function ds(a) {
  let e,
    s,
    t,
    n = a[20].name + '',
    l,
    r;
  return {
    c() {
      (e = _('li')), (s = _('div')), (t = _('a')), (l = O(n)), this.h();
    },
    l(i) {
      e = g(i, 'LI', { class: !0 });
      var o = m(e);
      s = g(o, 'DIV', { class: !0 });
      var u = m(s);
      t = g(u, 'A', { href: !0, class: !0 });
      var p = m(t);
      (l = R(p, n)), p.forEach(c), u.forEach(c), o.forEach(c), this.h();
    },
    h() {
      f(t, 'href', (r = U(a[20].url))),
        f(t, 'class', 'svelte-1q11xjy'),
        f(s, 'class', 'nav-button link svelte-1q11xjy'),
        f(e, 'class', 'nav-item category link svelte-1q11xjy');
    },
    m(i, o) {
      S(i, e, o), d(e, s), d(s, t), d(t, l);
    },
    p(i, o) {
      o & 8 && n !== (n = i[20].name + '') && Q(l, n),
        o & 8 && r !== (r = U(i[20].url)) && f(t, 'href', r);
    },
    i: K,
    o: K,
    d(i) {
      i && c(e);
    },
  };
}
function hs(a) {
  let e,
    s,
    t,
    n = a[20].name + '',
    l,
    r,
    i,
    o,
    u,
    p,
    h,
    M,
    y;
  u = new Tt({ props: { rotate: a[20].id === a[4] } });
  let v = a[4] === a[20].id && ht(a);
  function E() {
    return a[10](a[20]);
  }
  function k() {
    return a[11](a[20]);
  }
  function I() {
    return a[14](a[20]);
  }
  return {
    c() {
      (e = _('li')),
        (s = _('div')),
        (t = _('a')),
        (l = O(n)),
        (i = V()),
        (o = _('button')),
        B(u.$$.fragment),
        (p = V()),
        v && v.c(),
        this.h();
    },
    l(w) {
      e = g(w, 'LI', { class: !0 });
      var b = m(e);
      s = g(b, 'DIV', { class: !0 });
      var D = m(s);
      t = g(D, 'A', { href: !0, class: !0 });
      var N = m(t);
      (l = R(N, n)),
        N.forEach(c),
        (i = j(D)),
        (o = g(D, 'BUTTON', { class: !0 }));
      var T = m(o);
      P(u.$$.fragment, T),
        T.forEach(c),
        D.forEach(c),
        (p = j(b)),
        v && v.l(b),
        b.forEach(c),
        this.h();
    },
    h() {
      f(t, 'href', (r = U(a[20].url))),
        f(t, 'class', 'svelte-1q11xjy'),
        f(o, 'class', 'button svelte-1q11xjy'),
        f(s, 'class', 'nav-button link svelte-1q11xjy'),
        ae(s, 'open', a[20].id === a[4]),
        f(e, 'class', 'nav-item category link svelte-1q11xjy');
    },
    m(w, b) {
      S(w, e, b),
        d(e, s),
        d(s, t),
        d(t, l),
        d(s, i),
        d(s, o),
        G(u, o, null),
        d(e, p),
        v && v.m(e, null),
        (h = !0),
        M ||
          ((y = [
            Y(e, 'mouseenter', E),
            Y(e, 'focus', k),
            Y(e, 'mouseleave', a[12]),
            Y(e, 'blur', a[13]),
            Y(e, 'click', I),
          ]),
          (M = !0));
    },
    p(w, b) {
      (a = w),
        (!h || b & 8) && n !== (n = a[20].name + '') && Q(l, n),
        (!h || (b & 8 && r !== (r = U(a[20].url)))) && f(t, 'href', r);
      const D = {};
      b & 24 && (D.rotate = a[20].id === a[4]),
        u.$set(D),
        b & 24 && ae(s, 'open', a[20].id === a[4]),
        a[4] === a[20].id
          ? v
            ? (v.p(a, b), b & 24 && C(v, 1))
            : ((v = ht(a)), v.c(), C(v, 1), v.m(e, null))
          : v &&
            (me(),
            q(v, 1, 1, () => {
              v = null;
            }),
            ve());
    },
    i(w) {
      h || (C(u.$$.fragment, w), C(v), (h = !0));
    },
    o(w) {
      q(u.$$.fragment, w), q(v), (h = !1);
    },
    d(w) {
      w && c(e), F(u), v && v.d(), (M = !1), St(y);
    },
  };
}
function ht(a) {
  let e, s;
  return (
    (e = new os({
      props: { section: a[20], headingText: `Latest in ${a[20].name}` },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(t) {
        P(e.$$.fragment, t);
      },
      m(t, n) {
        G(e, t, n), (s = !0);
      },
      p(t, n) {
        const l = {};
        n & 8 && (l.section = t[20]),
          n & 8 && (l.headingText = `Latest in ${t[20].name}`),
          e.$set(l);
      },
      i(t) {
        s || (C(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        q(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function mt(a) {
  let e, s, t, n;
  const l = [hs, ds],
    r = [];
  function i(o, u) {
    return o[20].children ? 0 : 1;
  }
  return (
    (e = i(a)),
    (s = r[e] = l[e](a)),
    {
      c() {
        s.c(), (t = Ve());
      },
      l(o) {
        s.l(o), (t = Ve());
      },
      m(o, u) {
        r[e].m(o, u), S(o, t, u), (n = !0);
      },
      p(o, u) {
        let p = e;
        (e = i(o)),
          e === p
            ? r[e].p(o, u)
            : (me(),
              q(r[p], 1, 1, () => {
                r[p] = null;
              }),
              ve(),
              (s = r[e]),
              s ? s.p(o, u) : ((s = r[e] = l[e](o)), s.c()),
              C(s, 1),
              s.m(t.parentNode, t));
      },
      i(o) {
        n || (C(s), (n = !0));
      },
      o(o) {
        q(s), (n = !1);
      },
      d(o) {
        r[e].d(o), o && c(t);
      },
    }
  );
}
function vt(a) {
  let e, s;
  return (
    (e = new ps({ props: { sections: a[2] } })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(t) {
        P(e.$$.fragment, t);
      },
      m(t, n) {
        G(e, t, n), (s = !0);
      },
      p(t, n) {
        const l = {};
        n & 4 && (l.sections = t[2]), e.$set(l);
      },
      i(t) {
        s || (C(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        q(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function ms(a) {
  let e, s, t, n, l, r, i, o, u, p, h, M, y, v;
  zt(a[9]);
  let E = a[3],
    k = [];
  for (let b = 0; b < E.length; b += 1) k[b] = mt(dt(a, E, b));
  const I = (b) =>
    q(k[b], 1, 1, () => {
      k[b] = null;
    });
  p = new Tt({ props: { rotate: a[4] === 'more' } });
  let w = a[4] === 'more' && vt(a);
  return {
    c() {
      (e = _('div')), (s = _('nav')), (t = _('ul'));
      for (let b = 0; b < k.length; b += 1) k[b].c();
      (n = V()),
        (l = _('li')),
        (r = _('div')),
        (i = _('button')),
        (o = _('span')),
        (u = O('More ')),
        B(p.$$.fragment),
        (h = V()),
        w && w.c(),
        this.h();
    },
    l(b) {
      e = g(b, 'DIV', { class: !0 });
      var D = m(e);
      s = g(D, 'NAV', { 'aria-label': !0 });
      var N = m(s);
      t = g(N, 'UL', { class: !0 });
      var T = m(t);
      for (let Z = 0; Z < k.length; Z += 1) k[Z].l(T);
      (n = j(T)), (l = g(T, 'LI', { class: !0 }));
      var H = m(l);
      r = g(H, 'DIV', { class: !0 });
      var z = m(r);
      i = g(z, 'BUTTON', { class: !0 });
      var se = m(i);
      o = g(se, 'SPAN', { class: !0 });
      var A = m(o);
      (u = R(A, 'More ')),
        P(p.$$.fragment, A),
        A.forEach(c),
        se.forEach(c),
        z.forEach(c),
        (h = j(H)),
        w && w.l(H),
        H.forEach(c),
        T.forEach(c),
        N.forEach(c),
        D.forEach(c),
        this.h();
    },
    h() {
      f(o, 'class', 'svelte-1q11xjy'),
        f(i, 'class', 'button svelte-1q11xjy'),
        f(r, 'class', 'nav-button more link svelte-1q11xjy'),
        ae(r, 'open', a[4] === 'more'),
        f(l, 'class', 'nav-item svelte-1q11xjy'),
        f(t, 'class', 'nav-list svelte-1q11xjy'),
        f(s, 'aria-label', 'Main navigation'),
        f(e, 'class', 'nav-bar svelte-1q11xjy');
    },
    m(b, D) {
      S(b, e, D), d(e, s), d(s, t);
      for (let N = 0; N < k.length; N += 1) k[N].m(t, null);
      d(t, n),
        d(t, l),
        d(l, r),
        d(r, i),
        d(i, o),
        d(o, u),
        G(p, o, null),
        d(l, h),
        w && w.m(l, null),
        (M = !0),
        y ||
          ((v = [
            Y(window, 'resize', a[9]),
            Y(l, 'mouseenter', a[15]),
            Y(l, 'focus', a[16]),
            Y(l, 'mouseleave', a[17]),
            Y(l, 'blur', a[18]),
            Y(l, 'click', a[19]),
          ]),
          (y = !0));
    },
    p(b, [D]) {
      if (D & 58) {
        E = b[3];
        let T;
        for (T = 0; T < E.length; T += 1) {
          const H = dt(b, E, T);
          k[T]
            ? (k[T].p(H, D), C(k[T], 1))
            : ((k[T] = mt(H)), k[T].c(), C(k[T], 1), k[T].m(t, n));
        }
        for (me(), T = E.length; T < k.length; T += 1) I(T);
        ve();
      }
      const N = {};
      D & 16 && (N.rotate = b[4] === 'more'),
        p.$set(N),
        D & 16 && ae(r, 'open', b[4] === 'more'),
        b[4] === 'more'
          ? w
            ? (w.p(b, D), D & 16 && C(w, 1))
            : ((w = vt(b)), w.c(), C(w, 1), w.m(l, null))
          : w &&
            (me(),
            q(w, 1, 1, () => {
              w = null;
            }),
            ve());
    },
    i(b) {
      if (!M) {
        for (let D = 0; D < E.length; D += 1) C(k[D]);
        C(p.$$.fragment, b), C(w), (M = !0);
      }
    },
    o(b) {
      k = k.filter(Boolean);
      for (let D = 0; D < k.length; D += 1) q(k[D]);
      q(p.$$.fragment, b), q(w), (M = !1);
    },
    d(b) {
      b && c(e), ce(k, b), F(p), w && w.d(), (y = !1), St(v);
    },
  };
}
const _t = 250;
function vs(a, e, s) {
  let t,
    n,
    l,
    r,
    i,
    { sections: o = [] } = e;
  const u = It('nav-active-section');
  Mt(a, u, (H) => s(4, (i = H)));
  let p = 1200,
    h;
  function M() {
    s(0, (p = window.innerWidth));
  }
  const y = (H) => {
      s(1, (h = setTimeout(() => u.set(H.id), _t)));
    },
    v = (H) => u.set(H.id),
    E = () => {
      clearTimeout(h), u.set(null);
    },
    k = () => {
      clearTimeout(h), u.set(null);
    },
    I = (H) => {
      i === H.id && (clearTimeout(h), u.set(null));
    },
    w = () => {
      s(1, (h = setTimeout(() => u.set('more'), _t)));
    },
    b = () => u.set('more'),
    D = () => {
      clearTimeout(h), u.set(null);
    },
    N = () => {
      clearTimeout(h), u.set(null);
    },
    T = () => {
      i === 'more' && (clearTimeout(h), u.set(null));
    };
  return (
    (a.$$set = (H) => {
      'sections' in H && s(6, (o = H.sections));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 1 && s(8, (t = () => (p >= 1300 ? 7 : 5))),
        a.$$.dirty & 256 && s(7, (n = t())),
        a.$$.dirty & 192 && s(3, (l = o.slice(0, n))),
        a.$$.dirty & 192 && s(2, (r = o.slice(n)));
    }),
    [p, h, r, l, i, u, o, n, t, M, y, v, E, k, I, w, b, D, N, T]
  );
}
class _s extends X {
  constructor(e) {
    super(), x(this, e, vs, ms, ee, { sections: 6 });
  }
}
var Vt = [
  {
    sections: [
      {
        id: '/world/',
        url: '/world/',
        name: 'World',
        type: 'section',
        children: [
          { id: '/world/africa/', url: '/world/africa/', name: 'Africa' },
          { id: '/world/americas/', url: '/world/americas/', name: 'Americas' },
          {
            id: '/world/asia-pacific/',
            url: '/world/asia-pacific/',
            name: 'Asia Pacific',
          },
          { id: '/world/china/', url: '/world/china/', name: 'China' },
          { id: '/world/europe/', url: '/world/europe/', name: 'Europe' },
          { id: '/world/india/', url: '/world/india/', name: 'India' },
          {
            id: '/world/middle-east/',
            url: '/world/middle-east/',
            name: 'Middle East',
          },
          { id: '/world/uk/', url: '/world/uk/', name: 'United Kingdom' },
          { id: '/world/us/', url: '/world/us/', name: 'United States' },
          {
            id: '/world/the-great-reboot/',
            url: '/world/the-great-reboot/',
            name: 'The Great Reboot',
          },
          {
            id: '/world/reuters-next/',
            url: '/world/reuters-next/',
            name: 'Reuters Next',
          },
        ],
      },
      {
        id: '/business/',
        url: '/business/',
        name: 'Business',
        type: 'section',
        children: [
          {
            id: '/business/aerospace-defense/',
            url: '/business/aerospace-defense/',
            name: 'Aerospace & Defense',
          },
          {
            id: '/business/autos-transportation/',
            url: '/business/autos-transportation/',
            name: 'Autos & Transportation',
          },
          { id: '/business/energy/', url: '/business/energy/', name: 'Energy' },
          {
            id: '/business/environment/',
            url: '/business/environment/',
            name: 'Environment',
          },
          {
            id: '/business/finance/',
            url: '/business/finance/',
            name: 'Finance',
          },
          {
            id: '/business/healthcare-pharmaceuticals/',
            url: '/business/healthcare-pharmaceuticals/',
            name: 'Healthcare & Pharmaceuticals',
          },
          {
            id: '/business/media-telecom/',
            url: '/business/media-telecom/',
            name: 'Media & Telecom',
          },
          {
            id: '/business/retail-consumer/',
            url: '/business/retail-consumer/',
            name: 'Retail & Consumer',
          },
          {
            id: '/business/sustainable-business/',
            url: '/business/sustainable-business/',
            name: 'Sustainable Business',
          },
          {
            id: '/business/charged/',
            url: '/business/charged/',
            name: 'Charged',
          },
          {
            id: '/business/future-of-health/',
            url: '/business/future-of-health/',
            name: 'Future of Health',
          },
          {
            id: '/business/future-of-money/',
            url: '/business/future-of-money/',
            name: 'Future of Money',
          },
          {
            id: '/business/take-five/',
            url: '/business/take-five/',
            name: 'Take Five',
          },
          {
            id: '/business/reuters-impact/',
            url: '/business/reuters-impact/',
            name: 'Reuters Impact',
          },
          { id: '/business/davos/', url: '/business/davos/', name: 'Davos' },
        ],
      },
      {
        id: '/legal/',
        url: '/legal/',
        name: 'Legal',
        type: 'section',
        children: [
          {
            id: '/legal/government/',
            url: '/legal/government/',
            name: 'Government',
          },
          {
            id: '/legal/legalindustry/',
            url: '/legal/legalindustry/',
            name: 'Legal Industry',
          },
          {
            id: '/legal/litigation/',
            url: '/legal/litigation/',
            name: 'Litigation',
          },
          {
            id: '/legal/transactional/',
            url: '/legal/transactional/',
            name: 'Transactional',
          },
        ],
      },
      {
        id: '/markets/',
        url: '/markets/',
        name: 'Markets',
        type: 'section',
        children: [
          {
            id: '/markets/asia/',
            url: '/markets/asia/',
            name: 'Asian Markets',
          },
          {
            id: '/markets/carbon/',
            url: '/markets/carbon/',
            name: 'Carbon Markets',
          },
          {
            id: '/markets/commodities/',
            url: '/markets/commodities/',
            name: 'Commodities',
          },
          {
            id: '/markets/currencies/',
            url: '/markets/currencies/',
            name: 'Currencies',
          },
          { id: '/markets/deals/', url: '/markets/deals/', name: 'Deals' },
          {
            id: '/markets/emerging/',
            url: '/markets/emerging/',
            name: 'Emerging Markets',
          },
          {
            id: '/markets/europe/',
            url: '/markets/europe/',
            name: 'European Markets',
          },
          { id: '/markets/funds/', url: '/markets/funds/', name: 'Funds' },
          {
            id: '/markets/global-market-data/',
            url: '/markets/global-market-data/',
            name: 'Global Market Data',
          },
          {
            id: '/markets/rates-bonds/',
            url: '/markets/rates-bonds/',
            name: 'Rates & Bonds',
          },
          { id: '/markets/stocks/', url: '/markets/stocks/', name: 'Stocks' },
          { id: '/markets/us/', url: '/markets/us/', name: 'U.S. Markets' },
          { id: '/markets/wealth/', url: '/markets/wealth/', name: 'Wealth' },
          {
            id: '/markets/macromatters/',
            url: '/markets/macromatters/',
            name: 'Macro Matters',
          },
        ],
      },
      {
        id: '/breakingviews/',
        url: '/breakingviews/',
        name: 'Breakingviews',
        type: 'section',
      },
      {
        id: '/technology/',
        url: '/technology/',
        name: 'Technology',
        type: 'section',
        children: [
          {
            id: '/technology/disrupted/',
            url: '/technology/disrupted/',
            name: 'Disrupted',
          },
          {
            id: '/technology/reuters-momentum/',
            url: '/technology/reuters-momentum/',
            name: 'Reuters Momentum',
          },
        ],
      },
      {
        id: '/investigates/',
        url: 'https://www.reuters.com/investigates/',
        name: 'Investigations',
        type: 'link',
      },
      {
        id: '/lifestyle/sports/',
        url: '/lifestyle/sports/',
        name: 'Sports',
        type: 'section',
        children: [
          {
            id: '/lifestyle/sports/athletics/',
            url: '/lifestyle/sports/athletics/',
            name: 'Athletics',
          },
          {
            id: '/lifestyle/sports/cricket/',
            url: '/lifestyle/sports/cricket/',
            name: 'Cricket',
          },
          {
            id: '/lifestyle/sports/cycling/',
            url: '/lifestyle/sports/cycling/',
            name: 'Cycling',
          },
          {
            id: '/lifestyle/sports/golf/',
            url: '/lifestyle/sports/golf/',
            name: 'Golf',
          },
          {
            id: '/lifestyle/sports/motor-sports/',
            url: '/lifestyle/sports/motor-sports/',
            name: 'Motor Sports',
          },
          {
            id: '/lifestyle/sports/soccer/',
            url: '/lifestyle/sports/soccer/',
            name: 'Soccer',
          },
          {
            id: '/lifestyle/sports/tennis/',
            url: '/lifestyle/sports/tennis/',
            name: 'Tennis',
          },
        ],
      },
      {
        id: '/lifestyle/',
        url: '/lifestyle/',
        name: 'Lifestyle',
        type: 'section',
        children: [
          {
            id: '/lifestyle/oddly-enough/',
            url: '/lifestyle/oddly-enough/',
            name: 'Oddly Enough',
          },
          {
            id: '/lifestyle/science/',
            url: '/lifestyle/science/',
            name: 'Science',
          },
        ],
      },
      {
        id: '/graphics/',
        url: 'https://graphics.reuters.com/',
        name: 'Graphics',
        type: 'link',
      },
      {
        id: '/pictures/',
        url: '/pictures/',
        name: 'Pictures',
        type: 'section',
      },
      { id: '/video/', url: '/video/', name: 'Video', type: 'section' },
    ],
    home_url: '/',
    search_url: '/site-search/',
    sign_in_url: '/signin/',
    sign_up_url: '/signup/',
    subscribe_url: '',
    my_account_url: '/myaccount/',
    my_view_url: '/myview/all',
    following_url: '/myview/following-feed',
    saved_url: '/myview/saved',
  },
];
function gs(a) {
  let e, s;
  return {
    c() {
      (e = be('svg')), (s = be('path')), this.h();
    },
    l(t) {
      e = $e(t, 'svg', {
        xmlns: !0,
        viewBox: !0,
        'aria-hidden': !0,
        focusable: !0,
        style: !0,
        class: !0,
      });
      var n = m(e);
      (s = $e(n, 'path', { d: !0 })), m(s).forEach(c), n.forEach(c), this.h();
    },
    h() {
      f(
        s,
        'd',
        'M14.8571429,9.524 C15.3142857,9.524 15.6188571,9.8285714 15.6188571,10.2857143 C15.6188571,10.7428571 15.3142857,11.0474286 14.8571429,11.0474286 L1.14285714,11.0474286 C0.68571429,11.0474286 0.38114286,10.7428571 0.38114286,10.2857143 C0.38114286,9.8285714 0.68571429,9.524 1.14285714,9.524 L14.8571429,9.524 Z M14.8571429,4.9525714 C15.3142857,4.9525714 15.6188571,5.2571429 15.6188571,5.7142857 C15.6188571,6.1714286 15.3142857,6.476 14.8571429,6.476 L1.14285714,6.476 C0.68571429,6.476 0.38114286,6.1714286 0.38114286,5.7142857 C0.38114286,5.2571429 0.68571429,4.9525714 1.14285714,4.9525714 L14.8571429,4.9525714 Z M14.8571429,0.38114286 C15.3142857,0.38114286 15.6188571,0.68571429 15.6188571,1.14285714 C15.6188571,1.6 15.3142857,1.90457143 14.8571429,1.90457143 L1.14285714,1.90457143 C0.68571429,1.90457143 0.38114286,1.6 0.38114286,1.14285714 C0.38114286,0.68571429 0.68571429,0.38114286 1.14285714,0.38114286 L14.8571429,0.38114286 Z'
      ),
        f(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        f(e, 'viewBox', '0 0 16 12'),
        f(e, 'aria-hidden', 'true'),
        f(e, 'focusable', 'false'),
        We(e, 'width', a[0] + 'px'),
        f(e, 'class', 'svelte-17648ki');
    },
    m(t, n) {
      S(t, e, n), d(e, s);
    },
    p(t, [n]) {
      n & 1 && We(e, 'width', t[0] + 'px');
    },
    i: K,
    o: K,
    d(t) {
      t && c(e);
    },
  };
}
function ks(a, e, s) {
  let { width: t = 20 } = e;
  return (
    (a.$$set = (n) => {
      'width' in n && s(0, (t = n.width));
    }),
    [t]
  );
}
class bs extends X {
  constructor(e) {
    super(), x(this, e, ks, gs, ee, { width: 0 });
  }
}
function $s(a) {
  let e, s;
  return {
    c() {
      (e = be('svg')), (s = be('path')), this.h();
    },
    l(t) {
      e = $e(t, 'svg', {
        'aria-hidden': !0,
        focusable: !0,
        width: !0,
        height: !0,
        xmlns: !0,
        class: !0,
      });
      var n = m(e);
      (s = $e(n, 'path', { d: !0, 'fill-rule': !0 })),
        m(s).forEach(c),
        n.forEach(c),
        this.h();
    },
    h() {
      f(
        s,
        'd',
        'M.322.313a1.056 1.056 0 0 1 1.5 0l5.679 5.53L13.18.313a1.056 1.056 0 0 1 1.5 0 .993.993 0 0 1-.001 1.461l-5.88 5.725 5.88 5.727c.397.388.426.956.085 1.369l-.086.092a1.056 1.056 0 0 1-1.5 0l-5.679-5.53-5.679 5.53a1.056 1.056 0 0 1-1.5 0 .993.993 0 0 1 .001-1.461L6.2 7.5.322 1.774C-.076 1.386-.105.818.236.405L.322.313Z'
      ),
        f(s, 'fill-rule', 'evenodd'),
        f(e, 'aria-hidden', 'true'),
        f(e, 'focusable', 'false'),
        f(e, 'width', '15'),
        f(e, 'height', '15'),
        f(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        f(e, 'class', 'svelte-17648ki');
    },
    m(t, n) {
      S(t, e, n), d(e, s);
    },
    p: K,
    i: K,
    o: K,
    d(t) {
      t && c(e);
    },
  };
}
class ws extends X {
  constructor(e) {
    super(), x(this, e, null, $s, ee, {});
  }
}
function gt(a, e, s) {
  const t = a.slice();
  return (t[4] = e[s]), t;
}
function kt(a, e, s) {
  const t = a.slice();
  return (t[7] = e[s]), t;
}
function bt(a) {
  let e, s, t, n, l, r, i, o, u, p, h, M, y;
  (n = new Dt({
    props: { logoColour: a[1].accent, textColour: a[1].primary },
  })),
    (o = new ws({}));
  let v = a[0].sections,
    E = [];
  for (let k = 0; k < v.length; k += 1) E[k] = yt(gt(a, v, k));
  return {
    c() {
      (e = _('div')),
        (s = _('header')),
        (t = _('div')),
        B(n.$$.fragment),
        (l = V()),
        (r = _('button')),
        (i = _('div')),
        B(o.$$.fragment),
        (u = V());
      for (let k = 0; k < E.length; k += 1) E[k].c();
      this.h();
    },
    l(k) {
      e = g(k, 'DIV', { class: !0, 'aria-modal': !0, style: !0 });
      var I = m(e);
      s = g(I, 'HEADER', { class: !0 });
      var w = m(s);
      t = g(w, 'DIV', { class: !0 });
      var b = m(t);
      P(n.$$.fragment, b),
        b.forEach(c),
        (l = j(w)),
        (r = g(w, 'BUTTON', { class: !0 }));
      var D = m(r);
      i = g(D, 'DIV', { class: !0 });
      var N = m(i);
      P(o.$$.fragment, N), N.forEach(c), D.forEach(c), w.forEach(c), (u = j(I));
      for (let T = 0; T < E.length; T += 1) E[T].l(I);
      I.forEach(c), this.h();
    },
    h() {
      f(t, 'class', 'logo svelte-1tpcugt'),
        f(i, 'class', 'button-container svelte-1tpcugt'),
        f(r, 'class', 'button close-button svelte-1tpcugt'),
        f(s, 'class', 'header svelte-1tpcugt'),
        f(e, 'class', 'overlay svelte-1tpcugt'),
        f(e, 'aria-modal', 'true'),
        f(
          e,
          'style',
          (p = `
      --nav-background: ${a[1].background};
      --nav-primary: ${a[1].primary};
      --nav-accent: ${a[1].accent};
      --nav-rules: ${a[1].rules};
      --nav-shadow: ${a[1].shadow};
    `)
        );
    },
    m(k, I) {
      S(k, e, I),
        d(e, s),
        d(s, t),
        G(n, t, null),
        d(s, l),
        d(s, r),
        d(r, i),
        G(o, i, null),
        d(e, u);
      for (let w = 0; w < E.length; w += 1) E[w].m(e, null);
      (h = !0),
        M ||
          ((y = Y(r, 'click', function () {
            Kt(a[3]) && a[3].apply(this, arguments);
          })),
          (M = !0));
    },
    p(k, I) {
      a = k;
      const w = {};
      if (
        (I & 2 && (w.logoColour = a[1].accent),
        I & 2 && (w.textColour = a[1].primary),
        n.$set(w),
        I & 1)
      ) {
        v = a[0].sections;
        let b;
        for (b = 0; b < v.length; b += 1) {
          const D = gt(a, v, b);
          E[b] ? E[b].p(D, I) : ((E[b] = yt(D)), E[b].c(), E[b].m(e, null));
        }
        for (; b < E.length; b += 1) E[b].d(1);
        E.length = v.length;
      }
      (!h ||
        (I & 2 &&
          p !==
            (p = `
      --nav-background: ${a[1].background};
      --nav-primary: ${a[1].primary};
      --nav-accent: ${a[1].accent};
      --nav-rules: ${a[1].rules};
      --nav-shadow: ${a[1].shadow};
    `))) &&
        f(e, 'style', p);
    },
    i(k) {
      h || (C(n.$$.fragment, k), C(o.$$.fragment, k), (h = !0));
    },
    o(k) {
      q(n.$$.fragment, k), q(o.$$.fragment, k), (h = !1);
    },
    d(k) {
      k && c(e), F(n), F(o), ce(E, k), (M = !1), y();
    },
  };
}
function $t(a) {
  let e,
    s = a[4].children,
    t = [];
  for (let n = 0; n < s.length; n += 1) t[n] = wt(kt(a, s, n));
  return {
    c() {
      e = _('ul');
      for (let n = 0; n < t.length; n += 1) t[n].c();
      this.h();
    },
    l(n) {
      e = g(n, 'UL', { class: !0 });
      var l = m(e);
      for (let r = 0; r < t.length; r += 1) t[r].l(l);
      l.forEach(c), this.h();
    },
    h() {
      f(e, 'class', 'subsections svelte-1tpcugt');
    },
    m(n, l) {
      S(n, e, l);
      for (let r = 0; r < t.length; r += 1) t[r].m(e, null);
    },
    p(n, l) {
      if (l & 1) {
        s = n[4].children;
        let r;
        for (r = 0; r < s.length; r += 1) {
          const i = kt(n, s, r);
          t[r] ? t[r].p(i, l) : ((t[r] = wt(i)), t[r].c(), t[r].m(e, null));
        }
        for (; r < t.length; r += 1) t[r].d(1);
        t.length = s.length;
      }
    },
    d(n) {
      n && c(e), ce(t, n);
    },
  };
}
function wt(a) {
  let e,
    s,
    t = a[7].name + '',
    n,
    l,
    r;
  return {
    c() {
      (e = _('li')), (s = _('a')), (n = O(t)), (r = V()), this.h();
    },
    l(i) {
      e = g(i, 'LI', {});
      var o = m(e);
      s = g(o, 'A', { class: !0, href: !0 });
      var u = m(s);
      (n = R(u, t)), u.forEach(c), (r = j(o)), o.forEach(c), this.h();
    },
    h() {
      f(s, 'class', 'subsection-link svelte-1tpcugt'),
        f(s, 'href', (l = U(a[7].url)));
    },
    m(i, o) {
      S(i, e, o), d(e, s), d(s, n), d(e, r);
    },
    p(i, o) {
      o & 1 && t !== (t = i[7].name + '') && Q(n, t),
        o & 1 && l !== (l = U(i[7].url)) && f(s, 'href', l);
    },
    d(i) {
      i && c(e);
    },
  };
}
function yt(a) {
  let e,
    s,
    t = a[4].name + '',
    n,
    l,
    r,
    i,
    o = a[4].children && $t(a);
  return {
    c() {
      (e = _('section')),
        (s = _('a')),
        (n = O(t)),
        (r = V()),
        o && o.c(),
        (i = V()),
        this.h();
    },
    l(u) {
      e = g(u, 'SECTION', { class: !0 });
      var p = m(e);
      s = g(p, 'A', { class: !0, href: !0 });
      var h = m(s);
      (n = R(h, t)),
        h.forEach(c),
        (r = j(p)),
        o && o.l(p),
        (i = j(p)),
        p.forEach(c),
        this.h();
    },
    h() {
      f(s, 'class', 'section-link svelte-1tpcugt'),
        f(s, 'href', (l = U(a[4].url))),
        f(e, 'class', 'section svelte-1tpcugt');
    },
    m(u, p) {
      S(u, e, p), d(e, s), d(s, n), d(e, r), o && o.m(e, null), d(e, i);
    },
    p(u, p) {
      p & 1 && t !== (t = u[4].name + '') && Q(n, t),
        p & 1 && l !== (l = U(u[4].url)) && f(s, 'href', l),
        u[4].children
          ? o
            ? o.p(u, p)
            : ((o = $t(u)), o.c(), o.m(e, i))
          : o && (o.d(1), (o = null));
    },
    d(u) {
      u && c(e), o && o.d();
    },
  };
}
function ys(a) {
  let e,
    s,
    t = a[2] && bt(a);
  return {
    c() {
      t && t.c(), (e = Ve());
    },
    l(n) {
      t && t.l(n), (e = Ve());
    },
    m(n, l) {
      t && t.m(n, l), S(n, e, l), (s = !0);
    },
    p(n, [l]) {
      n[2]
        ? t
          ? (t.p(n, l), l & 4 && C(t, 1))
          : ((t = bt(n)), t.c(), C(t, 1), t.m(e.parentNode, e))
        : t &&
          (me(),
          q(t, 1, 1, () => {
            t = null;
          }),
          ve());
    },
    i(n) {
      s || (C(t), (s = !0));
    },
    o(n) {
      q(t), (s = !1);
    },
    d(n) {
      t && t.d(n), n && c(e);
    },
  };
}
function Es(a, e, s) {
  let { data: t = [] } = e,
    { theme: n = {} } = e,
    { isMobileMenuOpen: l = !1 } = e,
    { releaseMobileMenu: r = () => {} } = e;
  return (
    (a.$$set = (i) => {
      'data' in i && s(0, (t = i.data)),
        'theme' in i && s(1, (n = i.theme)),
        'isMobileMenuOpen' in i && s(2, (l = i.isMobileMenuOpen)),
        'releaseMobileMenu' in i && s(3, (r = i.releaseMobileMenu));
    }),
    [t, n, l, r]
  );
}
class Is extends X {
  constructor(e) {
    super(),
      x(this, e, Es, ys, ee, {
        data: 0,
        theme: 1,
        isMobileMenuOpen: 2,
        releaseMobileMenu: 3,
      });
  }
}
function Ms(a) {
  let e,
    s,
    t,
    n,
    l,
    r,
    i,
    o,
    u,
    p,
    h,
    M,
    y,
    v,
    E,
    k,
    I,
    w,
    b,
    D,
    N,
    T,
    H,
    z,
    se;
  return (
    (u = new Dt({
      props: { logoColour: a[1].accent, textColour: a[1].primary },
    })),
    (h = new _s({ props: { sections: a[2] } })),
    (D = new bs({})),
    (T = new Is({
      props: {
        theme: a[1],
        isMobileMenuOpen: a[0],
        releaseMobileMenu: a[5],
        data: Vt[0],
      },
    })),
    {
      c() {
        (e = _('header')),
          (s = _('div')),
          (t = _('div')),
          (n = _('div')),
          (l = _('div')),
          (r = _('div')),
          (i = _('div')),
          (o = _('a')),
          B(u.$$.fragment),
          (p = V()),
          B(h.$$.fragment),
          (M = V()),
          (y = _('div')),
          (v = _('div')),
          (E = V()),
          (k = _('div')),
          (I = _('div')),
          (w = _('button')),
          (b = _('div')),
          B(D.$$.fragment),
          (N = V()),
          B(T.$$.fragment),
          this.h();
      },
      l(A) {
        e = g(A, 'HEADER', { style: !0 });
        var Z = m(e);
        s = g(Z, 'DIV', { class: !0 });
        var W = m(s);
        t = g(W, 'DIV', { class: !0 });
        var ie = m(t);
        n = g(ie, 'DIV', { class: !0 });
        var _e = m(n);
        l = g(_e, 'DIV', { class: !0 });
        var J = m(l);
        r = g(J, 'DIV', { class: !0 });
        var ne = m(r);
        i = g(ne, 'DIV', { class: !0 });
        var Ie = m(i);
        o = g(Ie, 'A', { href: !0 });
        var ue = m(o);
        P(u.$$.fragment, ue),
          ue.forEach(c),
          Ie.forEach(c),
          ne.forEach(c),
          (p = j(J)),
          P(h.$$.fragment, J),
          (M = j(J)),
          (y = g(J, 'DIV', { class: !0 }));
        var te = m(y);
        (v = g(te, 'DIV', { class: !0 })),
          m(v).forEach(c),
          te.forEach(c),
          (E = j(J)),
          (k = g(J, 'DIV', { class: !0 }));
        var fe = m(k);
        I = g(fe, 'DIV', { class: !0 });
        var le = m(I);
        w = g(le, 'BUTTON', {
          class: !0,
          'aria-label': !0,
          'aria-haspopup': !0,
          'aria-expanded': !0,
        });
        var pe = m(w);
        b = g(pe, 'DIV', { class: !0 });
        var re = m(b);
        P(D.$$.fragment, re),
          re.forEach(c),
          pe.forEach(c),
          le.forEach(c),
          fe.forEach(c),
          J.forEach(c),
          _e.forEach(c),
          ie.forEach(c),
          W.forEach(c),
          Z.forEach(c),
          (N = j(A)),
          P(T.$$.fragment, A),
          this.h();
      },
      h() {
        f(o, 'href', 'https://www.reuters.com'),
          f(i, 'class', 'logo svelte-15kpgb1'),
          f(r, 'class', 'logo-container svelte-15kpgb1'),
          f(v, 'class', 'spacer svelte-15kpgb1'),
          f(y, 'class', 'spacer-container svelte-15kpgb1'),
          f(b, 'class', 'button-container svelte-15kpgb1'),
          f(w, 'class', 'menu-button svelte-15kpgb1'),
          f(w, 'aria-label', 'Menu'),
          f(w, 'aria-haspopup', 'true'),
          f(w, 'aria-expanded', a[0]),
          f(I, 'class', 'mobile-menu svelte-15kpgb1'),
          f(k, 'class', 'mobile-button-group svelte-15kpgb1'),
          f(l, 'class', 'main-bar svelte-15kpgb1'),
          f(n, 'class', 'inner svelte-15kpgb1'),
          f(t, 'class', 'scroll-container svelte-15kpgb1'),
          f(s, 'class', 'nav-container show-nav svelte-15kpgb1'),
          f(
            e,
            'style',
            `
    --nav-background: ${a[1].background};
    --nav-primary: ${a[1].primary};
    --nav-accent: ${a[1].accent};
    --nav-rules: ${a[1].rules};
    --nav-shadow: ${a[1].shadow};
  `
          );
      },
      m(A, Z) {
        S(A, e, Z),
          d(e, s),
          d(s, t),
          d(t, n),
          d(n, l),
          d(l, r),
          d(r, i),
          d(i, o),
          G(u, o, null),
          d(l, p),
          G(h, l, null),
          d(l, M),
          d(l, y),
          d(y, v),
          d(l, E),
          d(l, k),
          d(k, I),
          d(I, w),
          d(w, b),
          G(D, b, null),
          S(A, N, Z),
          G(T, A, Z),
          (H = !0),
          z || ((se = Y(w, 'click', a[4])), (z = !0));
      },
      p(A, [Z]) {
        (!H || Z & 1) && f(w, 'aria-expanded', A[0]);
        const W = {};
        Z & 1 && (W.isMobileMenuOpen = A[0]),
          Z & 1 && (W.releaseMobileMenu = A[5]),
          T.$set(W);
      },
      i(A) {
        H ||
          (C(u.$$.fragment, A),
          C(h.$$.fragment, A),
          C(D.$$.fragment, A),
          C(T.$$.fragment, A),
          (H = !0));
      },
      o(A) {
        q(u.$$.fragment, A),
          q(h.$$.fragment, A),
          q(D.$$.fragment, A),
          q(T.$$.fragment, A),
          (H = !1);
      },
      d(A) {
        A && c(e), F(u), F(h), F(D), A && c(N), F(T, A), (z = !1), se();
      },
    }
  );
}
const Ae = {
  default: {
    background: '#fff',
    primary: '#404040',
    accent: '#fa6400',
    rules: '#d0d0d0',
    shadow: '0 1px 4px 2px rgb(64 64 64 / 8%)',
  },
  dark: {
    background: '#333',
    primary: '#eee',
    accent: '#fa6400',
    rules: '#999',
    shadow: '0 1px 4px 2px rgb(255 255 255 / 10%)',
  },
};
function Ss(a, e, s) {
  let { theme: t = {} } = e;
  const n = Ce(Ce({}, Ae.default), t);
  Je('nav-theme', Qe(n)), Je('nav-active-section', Qe(null));
  const { sections: l } = Vt[0];
  let r = !1;
  const i = () => {
      s(0, (r = !r));
    },
    o = () => {
      s(0, (r = !1));
    };
  return (
    (a.$$set = (u) => {
      'theme' in u && s(3, (t = u.theme));
    }),
    [r, n, l, t, i, o]
  );
}
class qe extends X {
  constructor(e) {
    super(), x(this, e, Ss, Ms, ee, { theme: 3 });
  }
}
function Ds(a) {
  let e, s;
  return (
    (e = new qe({})),
    {
      c() {
        B(e.$$.fragment);
      },
      l(t) {
        P(e.$$.fragment, t);
      },
      m(t, n) {
        G(e, t, n), (s = !0);
      },
      i(t) {
        s || (C(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        q(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function Ts(a) {
  let e, s;
  return (
    (e = new qe({ props: { theme: Ae.dark } })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(t) {
        P(e.$$.fragment, t);
      },
      m(t, n) {
        G(e, t, n), (s = !0);
      },
      p: K,
      i(t) {
        s || (C(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        q(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function Cs(a) {
  let e, s;
  return (
    (e = new qe({
      props: {
        theme: Ze(Ce({}, Ae.default), { background: '#e0d3b8', rules: '#aaa' }),
      },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(t) {
        P(e.$$.fragment, t);
      },
      m(t, n) {
        G(e, t, n), (s = !0);
      },
      p: K,
      i(t) {
        s || (C(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        q(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function Vs(a) {
  let e,
    s,
    t,
    n,
    l,
    r,
    i,
    o,
    u,
    p,
    h,
    M,
    y,
    v,
    E,
    k,
    I,
    w,
    b,
    D,
    N,
    T = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteHeader <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteHeader</span> <span class="token punctuation">/></span></span></code>`,
    H,
    z,
    se,
    A,
    Z,
    W,
    ie,
    _e,
    J,
    ne,
    Ie = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteHeader<span class="token punctuation">,</span> SiteHeaderThemes <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteHeader</span> <span class="token attr-name">theme=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>SiteHeaderThemes<span class="token punctuation">.</span>dark<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,
    ue,
    te,
    fe,
    le,
    pe,
    re,
    we,
    je,
    Me,
    de,
    jt = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteHeader<span class="token punctuation">,</span> SiteHeaderThemes <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteHeader</span> <span class="token attr-name">theme=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> <span class="token operator">...</span>SiteHeaderThemes<span class="token punctuation">.</span>default<span class="token punctuation">,</span> <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#e0d3b8'</span><span class="token punctuation">,</span> <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token string">'#aaa'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>

// Customisable props
<span class="token language-javascript"><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token string">'#404040'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">accent</span><span class="token operator">:</span> <span class="token string">'#fa6400'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token string">'#d0d0d0'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">shadow</span><span class="token operator">:</span> <span class="token string">'0 1px 4px 2px rgb(64 64 64 / 8%)'</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></span></code>`,
    Se,
    oe,
    De,
    ge,
    Te;
  return (
    (z = new Le({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [Ds] },
        $$scope: { ctx: a },
      },
    })),
    (te = new Le({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [Ts] },
        $$scope: { ctx: a },
      },
    })),
    (oe = new Le({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [Cs] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        (e = _('section')),
          (s = _('h2')),
          (t = O(Et)),
          (n = V()),
          (l = _('p')),
          (r = O('Reuters dotcom site header, ported from ')),
          (i = _('a')),
          (o = O('Raptor UI components')),
          (u = O('.')),
          (p = V()),
          (h = _('section')),
          (M = _('p')),
          (y = O('In the ')),
          (v = _('a')),
          (E = O('Graphics Kit')),
          (k = O(', you can find this component in ')),
          (I = _('code')),
          (w = O('pages/index.svelte')),
          (b = O(' in order to customise it for the default page.')),
          (D = V()),
          (N = _('pre')),
          (H = V()),
          B(z.$$.fragment),
          (se = V()),
          (A = _('div')),
          (Z = V()),
          (W = _('section')),
          (ie = _('p')),
          (_e = O('Change colours with exported themes.')),
          (J = V()),
          (ne = _('pre')),
          (ue = V()),
          B(te.$$.fragment),
          (fe = V()),
          (le = _('div')),
          (pe = V()),
          (re = _('section')),
          (we = _('p')),
          (je = O('Customise a colour theme.')),
          (Me = V()),
          (de = _('pre')),
          (Se = V()),
          B(oe.$$.fragment),
          (De = V()),
          (ge = _('div')),
          this.h();
      },
      l($) {
        e = g($, 'SECTION', {});
        var L = m(e);
        s = g(L, 'H2', {});
        var ye = m(s);
        (t = R(ye, Et)), ye.forEach(c), (n = j(L)), (l = g(L, 'P', {}));
        var he = m(l);
        (r = R(he, 'Reuters dotcom site header, ported from ')),
          (i = g(he, 'A', { href: !0, rel: !0 }));
        var Ee = m(i);
        (o = R(Ee, 'Raptor UI components')),
          Ee.forEach(c),
          (u = R(he, '.')),
          he.forEach(c),
          (p = j(L)),
          (h = g(L, 'SECTION', { class: !0 }));
        var Ne = m(h);
        M = g(Ne, 'P', {});
        var ke = m(M);
        (y = R(ke, 'In the ')), (v = g(ke, 'A', { href: !0, rel: !0 }));
        var He = m(v);
        (E = R(He, 'Graphics Kit')),
          He.forEach(c),
          (k = R(ke, ', you can find this component in ')),
          (I = g(ke, 'CODE', {}));
        var Oe = m(I);
        (w = R(Oe, 'pages/index.svelte')),
          Oe.forEach(c),
          (b = R(ke, ' in order to customise it for the default page.')),
          ke.forEach(c),
          Ne.forEach(c),
          L.forEach(c),
          (D = j($)),
          (N = g($, 'PRE', { class: !0 }));
        var Lt = m(N);
        Lt.forEach(c),
          (H = j($)),
          P(z.$$.fragment, $),
          (se = j($)),
          (A = g($, 'DIV', { class: !0 })),
          m(A).forEach(c),
          (Z = j($)),
          (W = g($, 'SECTION', {}));
        var Re = m(W);
        ie = g(Re, 'P', {});
        var Ue = m(ie);
        (_e = R(Ue, 'Change colours with exported themes.')),
          Ue.forEach(c),
          Re.forEach(c),
          (J = j($)),
          (ne = g($, 'PRE', { class: !0 }));
        var At = m(ne);
        At.forEach(c),
          (ue = j($)),
          P(te.$$.fragment, $),
          (fe = j($)),
          (le = g($, 'DIV', { class: !0 })),
          m(le).forEach(c),
          (pe = j($)),
          (re = g($, 'SECTION', {}));
        var Be = m(re);
        we = g(Be, 'P', {});
        var Pe = m(we);
        (je = R(Pe, 'Customise a colour theme.')),
          Pe.forEach(c),
          Be.forEach(c),
          (Me = j($)),
          (de = g($, 'PRE', { class: !0 }));
        var qt = m(de);
        qt.forEach(c),
          (Se = j($)),
          P(oe.$$.fragment, $),
          (De = j($)),
          (ge = g($, 'DIV', { class: !0 })),
          m(ge).forEach(c),
          this.h();
      },
      h() {
        f(
          i,
          'href',
          'https://github.com/tr/rcom-arc_raptor-ui/tree/develop/packages/rcom-raptor-ui_common/src/components/site-header'
        ),
          f(i, 'rel', 'nofollow'),
          f(
            v,
            'href',
            'https://github.com/reuters-graphics/bluprint_graphics-kit/blob/master/pages/index.svelte'
          ),
          f(v, 'rel', 'nofollow'),
          f(h, 'class', 'note'),
          f(N, 'class', 'language-svelte'),
          f(A, 'class', 'spacer svelte-1ess2x0'),
          f(ne, 'class', 'language-svelte'),
          f(le, 'class', 'spacer svelte-1ess2x0'),
          f(de, 'class', 'language-svelte'),
          f(ge, 'class', 'spacer svelte-1ess2x0');
      },
      m($, L) {
        S($, e, L),
          d(e, s),
          d(s, t),
          d(e, n),
          d(e, l),
          d(l, r),
          d(l, i),
          d(i, o),
          d(l, u),
          d(e, p),
          d(e, h),
          d(h, M),
          d(M, y),
          d(M, v),
          d(v, E),
          d(M, k),
          d(M, I),
          d(I, w),
          d(M, b),
          S($, D, L),
          S($, N, L),
          (N.innerHTML = T),
          S($, H, L),
          G(z, $, L),
          S($, se, L),
          S($, A, L),
          S($, Z, L),
          S($, W, L),
          d(W, ie),
          d(ie, _e),
          S($, J, L),
          S($, ne, L),
          (ne.innerHTML = Ie),
          S($, ue, L),
          G(te, $, L),
          S($, fe, L),
          S($, le, L),
          S($, pe, L),
          S($, re, L),
          d(re, we),
          d(we, je),
          S($, Me, L),
          S($, de, L),
          (de.innerHTML = jt),
          S($, Se, L),
          G(oe, $, L),
          S($, De, L),
          S($, ge, L),
          (Te = !0);
      },
      p($, [L]) {
        const ye = {};
        L & 1 && (ye.$$scope = { dirty: L, ctx: $ }), z.$set(ye);
        const he = {};
        L & 1 && (he.$$scope = { dirty: L, ctx: $ }), te.$set(he);
        const Ee = {};
        L & 1 && (Ee.$$scope = { dirty: L, ctx: $ }), oe.$set(Ee);
      },
      i($) {
        Te ||
          (C(z.$$.fragment, $),
          C(te.$$.fragment, $),
          C(oe.$$.fragment, $),
          (Te = !0));
      },
      o($) {
        q(z.$$.fragment, $),
          q(te.$$.fragment, $),
          q(oe.$$.fragment, $),
          (Te = !1);
      },
      d($) {
        $ && c(e),
          $ && c(D),
          $ && c(N),
          $ && c(H),
          F(z, $),
          $ && c(se),
          $ && c(A),
          $ && c(Z),
          $ && c(W),
          $ && c(J),
          $ && c(ne),
          $ && c(ue),
          F(te, $),
          $ && c(fe),
          $ && c(le),
          $ && c(pe),
          $ && c(re),
          $ && c(Me),
          $ && c(de),
          $ && c(Se),
          F(oe, $),
          $ && c(De),
          $ && c(ge);
      },
    }
  );
}
const js = {
    title: 'SiteHeader',
    description: 'Reuters dotcom site header.',
    slug: 'site-header',
  },
  { title: Et, description: Bs, slug: Ps } = js;
class Gs extends X {
  constructor(e) {
    super(), x(this, e, null, Vs, ee, {});
  }
}
export { Gs as default, js as metadata };
