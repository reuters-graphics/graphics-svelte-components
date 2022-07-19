var bt = Object.defineProperty,
  $t = Object.defineProperties;
var wt = Object.getOwnPropertyDescriptors;
var Te = Object.getOwnPropertySymbols;
var Et = Object.prototype.hasOwnProperty,
  yt = Object.prototype.propertyIsEnumerable;
var Ve = (a, e, s) =>
    e in a
      ? bt(a, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (a[e] = s),
  $e = (a, e) => {
    for (var s in e || (e = {})) Et.call(e, s) && Ve(a, s, e[s]);
    if (Te) for (var s of Te(e)) yt.call(e, s) && Ve(a, s, e[s]);
    return a;
  },
  Le = (a, e) => $t(a, wt(e));
var Ae = (a, e, s) =>
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
  S as Q,
  i as X,
  s as x,
  K as me,
  L as ve,
  a as v,
  d as c,
  b as f,
  Z as ne,
  g as M,
  J as h,
  E as z,
  e as _,
  t as O,
  c as g,
  h as U,
  j as K,
  Y as Ne,
  k as V,
  m as L,
  F as It,
  G as Mt,
  H as St,
  I as Dt,
  n as de,
  o as N,
  p as he,
  q as T,
  N as ft,
  R as pt,
  u as Ct,
  w as B,
  x as P,
  y as q,
  B as F,
  _ as ie,
  T as Tt,
  l as we,
  V as ke,
  a4 as Vt,
  f as He,
  a8 as Lt,
  r as Re,
} from './index-83a5d9f9.js';
import { g as je } from './main-e467f153.js';
import { w as Oe } from './index-5b18af3d.js';
import { R as dt } from './index-83a1f0ce.js';
import { n as G } from './index-c889ff85.js';
import { D as Ee } from './index-16ec1060.js';
import './paths-396f020f.js';
function At(a) {
  let e, s;
  return {
    c() {
      (e = me('svg')), (s = me('path')), this.h();
    },
    l(t) {
      e = ve(t, 'svg', {
        class: !0,
        focusable: !0,
        'aria-hidden': !0,
        xmlns: !0,
        viewBox: !0,
      });
      var n = v(e);
      (s = ve(n, 'path', { d: !0 })), v(s).forEach(c), n.forEach(c), this.h();
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
        ne(e, 'rotated', a[0]);
    },
    m(t, n) {
      M(t, e, n), h(e, s);
    },
    p(t, [n]) {
      n & 1 && ne(e, 'rotated', t[0]);
    },
    i: z,
    o: z,
    d(t) {
      t && c(e);
    },
  };
}
function Nt(a, e, s) {
  let { rotate: t = !1 } = e;
  return (
    (a.$$set = (n) => {
      'rotate' in n && s(0, (t = n.rotate));
    }),
    [t]
  );
}
class ht extends Q {
  constructor(e) {
    super(), X(this, e, Nt, At, x, { rotate: 0 });
  }
}
function Ue(a) {
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
      var i = v(e);
      s = g(i, 'SPAN', { class: !0 });
      var o = v(s);
      (n = U(o, t)), o.forEach(c), i.forEach(c), this.h();
    },
    h() {
      f(s, 'class', 'label svelte-1nyc2e8'),
        f(e, 'href', (l = G(a[0].primary_section.id))),
        f(e, 'class', 'svelte-1nyc2e8');
    },
    m(r, i) {
      M(r, e, i), h(e, s), h(s, n);
    },
    p(r, i) {
      i & 1 && t !== (t = r[0].primary_section.name + '') && K(n, t),
        i & 1 && l !== (l = G(r[0].primary_section.id)) && f(e, 'href', l);
    },
    d(r) {
      r && c(e);
    },
  };
}
function Be(a) {
  let e,
    s = je(a[0].display_time) + '',
    t,
    n;
  return {
    c() {
      (e = _('time')), (t = O(s)), this.h();
    },
    l(l) {
      e = g(l, 'TIME', { datetime: !0, class: !0 });
      var r = v(e);
      (t = U(r, s)), r.forEach(c), this.h();
    },
    h() {
      f(e, 'datetime', (n = a[0].display_time)),
        f(e, 'class', 'svelte-1nyc2e8');
    },
    m(l, r) {
      M(l, e, r), h(e, t);
    },
    p(l, r) {
      r & 1 && s !== (s = je(l[0].display_time) + '') && K(t, s),
        r & 1 && n !== (n = l[0].display_time) && f(e, 'datetime', n);
    },
    d(l) {
      l && c(e);
    },
  };
}
function Pe(a) {
  let e, s, t, n;
  return {
    c() {
      (e = _('div')), (s = _('img')), this.h();
    },
    l(l) {
      e = g(l, 'DIV', { class: !0 });
      var r = v(e);
      (s = g(r, 'IMG', { src: !0, alt: !0, class: !0 })),
        r.forEach(c),
        this.h();
    },
    h() {
      Ne(s.src, (t = a[2].renditions.square['120w'])) || f(s, 'src', t),
        f(s, 'alt', (n = a[2].alt_text)),
        f(s, 'class', 'svelte-1nyc2e8'),
        f(e, 'class', 'thumbnail svelte-1nyc2e8');
    },
    m(l, r) {
      M(l, e, r), h(e, s);
    },
    p(l, r) {
      r & 4 &&
        !Ne(s.src, (t = l[2].renditions.square['120w'])) &&
        f(s, 'src', t),
        r & 4 && n !== (n = l[2].alt_text) && f(s, 'alt', n);
    },
    d(l) {
      l && c(e);
    },
  };
}
function Ht(a) {
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
    m = a[1] && Ue(a),
    S = !a[1] && Be(a),
    k = a[2] && Pe(a);
  return {
    c() {
      (e = _('div')),
        (s = _('a')),
        (t = _('div')),
        m && m.c(),
        (n = V()),
        (l = _('span')),
        (i = O(r)),
        (o = V()),
        S && S.c(),
        (u = V()),
        k && k.c(),
        this.h();
    },
    l(b) {
      e = g(b, 'DIV', { class: !0 });
      var w = v(e);
      s = g(w, 'A', { href: !0, class: !0 });
      var d = v(s);
      t = g(d, 'DIV', { class: !0 });
      var I = v(t);
      m && m.l(I), (n = L(I)), (l = g(I, 'SPAN', { class: !0 }));
      var y = v(l);
      (i = U(y, r)),
        y.forEach(c),
        (o = L(I)),
        S && S.l(I),
        I.forEach(c),
        (u = L(d)),
        k && k.l(d),
        d.forEach(c),
        w.forEach(c),
        this.h();
    },
    h() {
      f(l, 'class', 'svelte-1nyc2e8'),
        f(t, 'class', 'story-text svelte-1nyc2e8'),
        ne(t, 'has-thumbnail', a[2]),
        f(s, 'href', (p = G(a[0].canonical_url))),
        f(s, 'class', 'svelte-1nyc2e8'),
        f(e, 'class', 'story-card svelte-1nyc2e8');
    },
    m(b, w) {
      M(b, e, w),
        h(e, s),
        h(s, t),
        m && m.m(t, null),
        h(t, n),
        h(t, l),
        h(l, i),
        h(t, o),
        S && S.m(t, null),
        h(s, u),
        k && k.m(s, null);
    },
    p(b, [w]) {
      b[1]
        ? m
          ? m.p(b, w)
          : ((m = Ue(b)), m.c(), m.m(t, n))
        : m && (m.d(1), (m = null)),
        w & 1 && r !== (r = b[0].title + '') && K(i, r),
        b[1]
          ? S && (S.d(1), (S = null))
          : S
          ? S.p(b, w)
          : ((S = Be(b)), S.c(), S.m(t, null)),
        w & 4 && ne(t, 'has-thumbnail', b[2]),
        b[2]
          ? k
            ? k.p(b, w)
            : ((k = Pe(b)), k.c(), k.m(s, null))
          : k && (k.d(1), (k = null)),
        w & 1 && p !== (p = G(b[0].canonical_url)) && f(s, 'href', p);
    },
    i: z,
    o: z,
    d(b) {
      b && c(e), m && m.d(), S && S.d(), k && k.d();
    },
  };
}
function Rt(a, e, s) {
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
class jt extends Q {
  constructor(e) {
    super(), X(this, e, Rt, Ht, x, { story: 0, withSection: 1 });
  }
}
function Ot(a) {
  let e, s, t;
  return {
    c() {
      (e = _('div')), (s = _('div')), (t = _('div')), this.h();
    },
    l(n) {
      e = g(n, 'DIV', {});
      var l = v(e);
      s = g(l, 'DIV', { class: !0 });
      var r = v(s);
      (t = g(r, 'DIV', { class: !0 })),
        v(t).forEach(c),
        r.forEach(c),
        l.forEach(c),
        this.h();
    },
    h() {
      f(t, 'class', 'spinner svelte-hunvtd'),
        f(s, 'class', 'spinner-container svelte-hunvtd');
    },
    m(n, l) {
      M(n, e, l), h(e, s), h(s, t);
    },
    p: z,
    i: z,
    o: z,
    d(n) {
      n && c(e);
    },
  };
}
class Ut extends Q {
  constructor(e) {
    super(), X(this, e, null, Ot, x, {});
  }
}
function qe(a, e, s) {
  const t = a.slice();
  return (t[7] = e[s]), t;
}
function Bt(a) {
  let e, s, t;
  return (
    (s = new Ut({})),
    {
      c() {
        (e = _('div')), B(s.$$.fragment), this.h();
      },
      l(n) {
        e = g(n, 'DIV', { class: !0 });
        var l = v(e);
        P(s.$$.fragment, l), l.forEach(c), this.h();
      },
      h() {
        f(e, 'class', 'spinner svelte-1v8d80j');
      },
      m(n, l) {
        M(n, e, l), q(s, e, null), (t = !0);
      },
      p: z,
      i(n) {
        t || (T(s.$$.fragment, n), (t = !0));
      },
      o(n) {
        N(s.$$.fragment, n), (t = !1);
      },
      d(n) {
        n && c(e), F(s);
      },
    }
  );
}
function Pt(a) {
  let e,
    s,
    t,
    n,
    l,
    r = a[1],
    i = [];
  for (let u = 0; u < r.length; u += 1) i[u] = Fe(qe(a, r, u));
  const o = (u) =>
    N(i[u], 1, 1, () => {
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
      var p = v(e);
      (s = U(p, a[0])),
        p.forEach(c),
        (t = L(u)),
        (n = g(u, 'UL', { class: !0 }));
      var m = v(n);
      for (let S = 0; S < i.length; S += 1) i[S].l(m);
      m.forEach(c), this.h();
    },
    h() {
      f(e, 'class', 'latest svelte-1v8d80j'),
        f(n, 'class', 'story-list svelte-1v8d80j');
    },
    m(u, p) {
      M(u, e, p), h(e, s), M(u, t, p), M(u, n, p);
      for (let m = 0; m < i.length; m += 1) i[m].m(n, null);
      l = !0;
    },
    p(u, p) {
      if (((!l || p & 1) && K(s, u[0]), p & 6)) {
        r = u[1];
        let m;
        for (m = 0; m < r.length; m += 1) {
          const S = qe(u, r, m);
          i[m]
            ? (i[m].p(S, p), T(i[m], 1))
            : ((i[m] = Fe(S)), i[m].c(), T(i[m], 1), i[m].m(n, null));
        }
        for (de(), m = r.length; m < i.length; m += 1) o(m);
        he();
      }
    },
    i(u) {
      if (!l) {
        for (let p = 0; p < r.length; p += 1) T(i[p]);
        l = !0;
      }
    },
    o(u) {
      i = i.filter(Boolean);
      for (let p = 0; p < i.length; p += 1) N(i[p]);
      l = !1;
    },
    d(u) {
      u && c(e), u && c(t), u && c(n), ie(i, u);
    },
  };
}
function Fe(a) {
  let e, s, t, n;
  return (
    (s = new jt({ props: { story: a[7], withSection: a[2] === 'more' } })),
    {
      c() {
        (e = _('li')), B(s.$$.fragment), (t = V()), this.h();
      },
      l(l) {
        e = g(l, 'LI', { class: !0 });
        var r = v(e);
        P(s.$$.fragment, r), (t = L(r)), r.forEach(c), this.h();
      },
      h() {
        f(e, 'class', 'story-item svelte-1v8d80j');
      },
      m(l, r) {
        M(l, e, r), q(s, e, null), h(e, t), (n = !0);
      },
      p(l, r) {
        const i = {};
        r & 2 && (i.story = l[7]),
          r & 4 && (i.withSection = l[2] === 'more'),
          s.$set(i);
      },
      i(l) {
        n || (T(s.$$.fragment, l), (n = !0));
      },
      o(l) {
        N(s.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && c(e), F(s);
      },
    }
  );
}
function qt(a) {
  let e, s, t, n, l, r, i, o, u, p, m;
  const S = a[5].default,
    k = It(S, a, a[4], null),
    b = [Pt, Bt],
    w = [];
  function d(I, y) {
    return I[1].length > 0 ? 0 : 1;
  }
  return (
    (u = d(a)),
    (p = w[u] = b[u](a)),
    {
      c() {
        (e = _('div')),
          (s = _('div')),
          (t = _('div')),
          (n = _('div')),
          (l = _('div')),
          k && k.c(),
          (r = V()),
          (i = _('div')),
          (o = _('div')),
          p.c(),
          this.h();
      },
      l(I) {
        e = g(I, 'DIV', { class: !0 });
        var y = v(e);
        s = g(y, 'DIV', { class: !0 });
        var E = v(s);
        t = g(E, 'DIV', { class: !0 });
        var C = v(t);
        n = g(C, 'DIV', { class: !0 });
        var R = v(n);
        l = g(R, 'DIV', { class: !0 });
        var D = v(l);
        k && k.l(D),
          D.forEach(c),
          R.forEach(c),
          (r = L(C)),
          (i = g(C, 'DIV', { class: !0 }));
        var Z = v(i);
        o = g(Z, 'DIV', { class: !0 });
        var W = v(o);
        p.l(W),
          W.forEach(c),
          Z.forEach(c),
          C.forEach(c),
          E.forEach(c),
          y.forEach(c),
          this.h();
      },
      h() {
        f(l, 'class', 'inner svelte-1v8d80j'),
          f(n, 'class', 'submenu svelte-1v8d80j'),
          f(o, 'class', 'inner svelte-1v8d80j'),
          f(i, 'class', 'stories-container svelte-1v8d80j'),
          f(t, 'class', 'inner svelte-1v8d80j'),
          f(s, 'class', 'dropdown-container svelte-1v8d80j'),
          f(e, 'class', 'dropdown svelte-1v8d80j');
      },
      m(I, y) {
        M(I, e, y),
          h(e, s),
          h(s, t),
          h(t, n),
          h(n, l),
          k && k.m(l, null),
          h(t, r),
          h(t, i),
          h(i, o),
          w[u].m(o, null),
          (m = !0);
      },
      p(I, [y]) {
        k &&
          k.p &&
          (!m || y & 16) &&
          Mt(k, S, I, I[4], m ? Dt(S, I[4], y, null) : St(I[4]), null);
        let E = u;
        (u = d(I)),
          u === E
            ? w[u].p(I, y)
            : (de(),
              N(w[E], 1, 1, () => {
                w[E] = null;
              }),
              he(),
              (p = w[u]),
              p ? p.p(I, y) : ((p = w[u] = b[u](I)), p.c()),
              T(p, 1),
              p.m(o, null));
      },
      i(I) {
        m || (T(k, I), T(p), (m = !0));
      },
      o(I) {
        N(k, I), N(p), (m = !1);
      },
      d(I) {
        I && c(e), k && k.d(I), w[u].d();
      },
    }
  );
}
function Ft(a, e, s) {
  let t,
    { $$slots: n = {}, $$scope: l } = e;
  const r = ft('nav-active-section');
  pt(a, r, (p) => s(2, (t = p)));
  let { headingText: i = 'Trending Stories' } = e,
    o = [],
    u = null;
  return (
    Ct(() =>
      Ae(this, null, function* () {
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
class mt extends Q {
  constructor(e) {
    super(), X(this, e, Ft, qt, x, { headingText: 0 });
  }
}
function Ge(a, e, s) {
  const t = a.slice();
  return (t[3] = e[s]), t;
}
function Ze(a, e, s) {
  const t = a.slice();
  return (t[3] = e[s]), t;
}
function ze(a) {
  let e,
    s = a[0].children.slice(0, a[2]),
    t = [];
  for (let n = 0; n < s.length; n += 1) t[n] = We(Ze(a, s, n));
  return {
    c() {
      e = _('ul');
      for (let n = 0; n < t.length; n += 1) t[n].c();
      this.h();
    },
    l(n) {
      e = g(n, 'UL', { class: !0 });
      var l = v(e);
      for (let r = 0; r < t.length; r += 1) t[r].l(l);
      l.forEach(c), this.h();
    },
    h() {
      f(e, 'class', 'sections-group svelte-ksl3iw');
    },
    m(n, l) {
      M(n, e, l);
      for (let r = 0; r < t.length; r += 1) t[r].m(e, null);
    },
    p(n, l) {
      if (l & 5) {
        s = n[0].children.slice(0, n[2]);
        let r;
        for (r = 0; r < s.length; r += 1) {
          const i = Ze(n, s, r);
          t[r] ? t[r].p(i, l) : ((t[r] = We(i)), t[r].c(), t[r].m(e, null));
        }
        for (; r < t.length; r += 1) t[r].d(1);
        t.length = s.length;
      }
    },
    d(n) {
      n && c(e), ie(t, n);
    },
  };
}
function We(a) {
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
      var o = v(e);
      s = g(o, 'A', { class: !0, href: !0 });
      var u = v(s);
      (n = U(u, t)), u.forEach(c), (r = L(o)), o.forEach(c), this.h();
    },
    h() {
      f(s, 'class', 'subsection-link svelte-ksl3iw'),
        f(s, 'href', (l = G(a[3].url))),
        f(e, 'class', 'svelte-ksl3iw');
    },
    m(i, o) {
      M(i, e, o), h(e, s), h(s, n), h(e, r);
    },
    p(i, o) {
      o & 5 && t !== (t = i[3].name + '') && K(n, t),
        o & 5 && l !== (l = G(i[3].url)) && f(s, 'href', l);
    },
    d(i) {
      i && c(e);
    },
  };
}
function Je(a) {
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
      var o = v(e);
      s = g(o, 'A', { class: !0, href: !0 });
      var u = v(s);
      (n = U(u, t)), u.forEach(c), (r = L(o)), o.forEach(c), this.h();
    },
    h() {
      f(s, 'class', 'subsection-link svelte-ksl3iw'),
        f(s, 'href', (l = G(a[3].url))),
        f(e, 'class', 'svelte-ksl3iw');
    },
    m(i, o) {
      M(i, e, o), h(e, s), h(s, n), h(e, r);
    },
    p(i, o) {
      o & 5 && t !== (t = i[3].name + '') && K(n, t),
        o & 5 && l !== (l = G(i[3].url)) && f(s, 'href', l);
    },
    d(i) {
      i && c(e);
    },
  };
}
function Gt(a) {
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
    m = a[2] > 0 && ze(a),
    S = a[0].children.slice(a[2]),
    k = [];
  for (let b = 0; b < S.length; b += 1) k[b] = Je(Ge(a, S, b));
  return {
    c() {
      (e = _('a')),
        (s = _('span')),
        (t = O('Browse ')),
        (l = O(n)),
        (i = V()),
        (o = _('div')),
        m && m.c(),
        (u = V()),
        (p = _('ul'));
      for (let b = 0; b < k.length; b += 1) k[b].c();
      this.h();
    },
    l(b) {
      e = g(b, 'A', { href: !0 });
      var w = v(e);
      s = g(w, 'SPAN', { class: !0 });
      var d = v(s);
      (t = U(d, 'Browse ')),
        (l = U(d, n)),
        d.forEach(c),
        w.forEach(c),
        (i = L(b)),
        (o = g(b, 'DIV', { class: !0 }));
      var I = v(o);
      m && m.l(I), (u = L(I)), (p = g(I, 'UL', { class: !0 }));
      var y = v(p);
      for (let E = 0; E < k.length; E += 1) k[E].l(y);
      y.forEach(c), I.forEach(c), this.h();
    },
    h() {
      f(s, 'class', 'heading svelte-ksl3iw'),
        f(e, 'href', (r = G(a[0].url))),
        f(p, 'class', 'sections-group svelte-ksl3iw'),
        f(o, 'class', 'sections svelte-ksl3iw');
    },
    m(b, w) {
      M(b, e, w),
        h(e, s),
        h(s, t),
        h(s, l),
        M(b, i, w),
        M(b, o, w),
        m && m.m(o, null),
        h(o, u),
        h(o, p);
      for (let d = 0; d < k.length; d += 1) k[d].m(p, null);
    },
    p(b, w) {
      if (
        (w & 1 && n !== (n = b[0].name + '') && K(l, n),
        w & 1 && r !== (r = G(b[0].url)) && f(e, 'href', r),
        b[2] > 0
          ? m
            ? m.p(b, w)
            : ((m = ze(b)), m.c(), m.m(o, u))
          : m && (m.d(1), (m = null)),
        w & 5)
      ) {
        S = b[0].children.slice(b[2]);
        let d;
        for (d = 0; d < S.length; d += 1) {
          const I = Ge(b, S, d);
          k[d] ? k[d].p(I, w) : ((k[d] = Je(I)), k[d].c(), k[d].m(p, null));
        }
        for (; d < k.length; d += 1) k[d].d(1);
        k.length = S.length;
      }
    },
    d(b) {
      b && c(e), b && c(i), b && c(o), m && m.d(), ie(k, b);
    },
  };
}
function Zt(a) {
  let e, s;
  return (
    (e = new mt({
      props: {
        headingText: a[1],
        $$slots: { default: [Gt] },
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
        q(e, t, n), (s = !0);
      },
      p(t, [n]) {
        const l = {};
        n & 2 && (l.headingText = t[1]),
          n & 261 && (l.$$scope = { dirty: n, ctx: t }),
          e.$set(l);
      },
      i(t) {
        s || (T(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function zt(a, e, s) {
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
class Wt extends Q {
  constructor(e) {
    super(), X(this, e, zt, Zt, x, { section: 0, headingText: 1 });
  }
}
function Ke(a, e, s) {
  const t = a.slice();
  return (t[1] = e[s]), t;
}
function Ye(a, e, s) {
  const t = a.slice();
  return (t[4] = e[s]), t;
}
function Qe(a) {
  let e,
    s = a[1].children,
    t = [];
  for (let n = 0; n < s.length; n += 1) t[n] = Xe(Ye(a, s, n));
  return {
    c() {
      e = _('ul');
      for (let n = 0; n < t.length; n += 1) t[n].c();
      this.h();
    },
    l(n) {
      e = g(n, 'UL', { class: !0 });
      var l = v(e);
      for (let r = 0; r < t.length; r += 1) t[r].l(l);
      l.forEach(c), this.h();
    },
    h() {
      f(e, 'class', 'subsections svelte-b74xfp');
    },
    m(n, l) {
      M(n, e, l);
      for (let r = 0; r < t.length; r += 1) t[r].m(e, null);
    },
    p(n, l) {
      if (l & 1) {
        s = n[1].children;
        let r;
        for (r = 0; r < s.length; r += 1) {
          const i = Ye(n, s, r);
          t[r] ? t[r].p(i, l) : ((t[r] = Xe(i)), t[r].c(), t[r].m(e, null));
        }
        for (; r < t.length; r += 1) t[r].d(1);
        t.length = s.length;
      }
    },
    d(n) {
      n && c(e), ie(t, n);
    },
  };
}
function Xe(a) {
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
      var o = v(e);
      s = g(o, 'A', { class: !0, href: !0 });
      var u = v(s);
      (n = U(u, t)), u.forEach(c), (r = L(o)), o.forEach(c), this.h();
    },
    h() {
      f(s, 'class', 'subsection-link svelte-b74xfp'),
        f(s, 'href', (l = G(a[4].url)));
    },
    m(i, o) {
      M(i, e, o), h(e, s), h(s, n), h(e, r);
    },
    p(i, o) {
      o & 1 && t !== (t = i[4].name + '') && K(n, t),
        o & 1 && l !== (l = G(i[4].url)) && f(s, 'href', l);
    },
    d(i) {
      i && c(e);
    },
  };
}
function xe(a) {
  let e,
    s,
    t = a[1].name + '',
    n,
    l,
    r,
    i,
    o = a[1].children && Qe(a);
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
      var p = v(e);
      s = g(p, 'A', { href: !0, class: !0 });
      var m = v(s);
      (n = U(m, t)),
        m.forEach(c),
        (r = L(p)),
        o && o.l(p),
        (i = L(p)),
        p.forEach(c),
        this.h();
    },
    h() {
      f(s, 'href', (l = G(a[1].url))),
        f(s, 'class', 'section-link svelte-b74xfp'),
        f(e, 'class', 'more-section-group svelte-b74xfp'),
        ne(e, 'has-children', a[1].children);
    },
    m(u, p) {
      M(u, e, p), h(e, s), h(s, n), h(e, r), o && o.m(e, null), h(e, i);
    },
    p(u, p) {
      p & 1 && t !== (t = u[1].name + '') && K(n, t),
        p & 1 && l !== (l = G(u[1].url)) && f(s, 'href', l),
        u[1].children
          ? o
            ? o.p(u, p)
            : ((o = Qe(u)), o.c(), o.m(e, i))
          : o && (o.d(1), (o = null)),
        p & 1 && ne(e, 'has-children', u[1].children);
    },
    d(u) {
      u && c(e), o && o.d();
    },
  };
}
function Jt(a) {
  let e,
    s,
    t = a[0],
    n = [];
  for (let l = 0; l < t.length; l += 1) n[l] = xe(Ke(a, t, l));
  return {
    c() {
      (e = _('div')), (s = _('div'));
      for (let l = 0; l < n.length; l += 1) n[l].c();
      this.h();
    },
    l(l) {
      e = g(l, 'DIV', { class: !0 });
      var r = v(e);
      s = g(r, 'DIV', { class: !0 });
      var i = v(s);
      for (let o = 0; o < n.length; o += 1) n[o].l(i);
      i.forEach(c), r.forEach(c), this.h();
    },
    h() {
      f(s, 'class', 'groupContainer'),
        f(e, 'class', 'more-sections svelte-b74xfp');
    },
    m(l, r) {
      M(l, e, r), h(e, s);
      for (let i = 0; i < n.length; i += 1) n[i].m(s, null);
    },
    p(l, r) {
      if (r & 1) {
        t = l[0];
        let i;
        for (i = 0; i < t.length; i += 1) {
          const o = Ke(l, t, i);
          n[i] ? n[i].p(o, r) : ((n[i] = xe(o)), n[i].c(), n[i].m(s, null));
        }
        for (; i < n.length; i += 1) n[i].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && c(e), ie(n, l);
    },
  };
}
function Kt(a) {
  let e, s;
  return (
    (e = new mt({
      props: { $$slots: { default: [Jt] }, $$scope: { ctx: a } },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(t) {
        P(e.$$.fragment, t);
      },
      m(t, n) {
        q(e, t, n), (s = !0);
      },
      p(t, [n]) {
        const l = {};
        n & 129 && (l.$$scope = { dirty: n, ctx: t }), e.$set(l);
      },
      i(t) {
        s || (T(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function Yt(a, e, s) {
  let { sections: t = [] } = e;
  return (
    (a.$$set = (n) => {
      'sections' in n && s(0, (t = n.sections));
    }),
    [t]
  );
}
class Qt extends Q {
  constructor(e) {
    super(), X(this, e, Yt, Kt, x, { sections: 0 });
  }
}
function et(a, e, s) {
  const t = a.slice();
  return (t[11] = e[s]), t;
}
function Xt(a) {
  let e,
    s,
    t,
    n = a[11].name + '',
    l,
    r;
  return {
    c() {
      (e = _('li')), (s = _('div')), (t = _('a')), (l = O(n)), this.h();
    },
    l(i) {
      e = g(i, 'LI', { class: !0 });
      var o = v(e);
      s = g(o, 'DIV', { class: !0 });
      var u = v(s);
      t = g(u, 'A', { href: !0, class: !0 });
      var p = v(t);
      (l = U(p, n)), p.forEach(c), u.forEach(c), o.forEach(c), this.h();
    },
    h() {
      f(t, 'href', (r = G(a[11].url))),
        f(t, 'class', 'svelte-xem5o1'),
        f(s, 'class', 'nav-button link svelte-xem5o1'),
        f(e, 'class', 'nav-item category link svelte-xem5o1');
    },
    m(i, o) {
      M(i, e, o), h(e, s), h(s, t), h(t, l);
    },
    p(i, o) {
      o & 4 && n !== (n = i[11].name + '') && K(l, n),
        o & 4 && r !== (r = G(i[11].url)) && f(t, 'href', r);
    },
    i: z,
    o: z,
    d(i) {
      i && c(e);
    },
  };
}
function xt(a) {
  let e,
    s,
    t,
    n = a[11].name + '',
    l,
    r,
    i,
    o,
    u,
    p,
    m,
    S;
  o = new ht({ props: { rotate: a[11].id === a[3] } });
  let k = a[3] === a[11].id && tt(a);
  function b() {
    return a[9](a[11]);
  }
  return {
    c() {
      (e = _('li')),
        (s = _('div')),
        (t = _('span')),
        (l = O(n)),
        (r = V()),
        (i = _('button')),
        B(o.$$.fragment),
        (u = V()),
        k && k.c(),
        this.h();
    },
    l(w) {
      e = g(w, 'LI', { class: !0 });
      var d = v(e);
      s = g(d, 'DIV', { class: !0 });
      var I = v(s);
      t = g(I, 'SPAN', { class: !0 });
      var y = v(t);
      (l = U(y, n)),
        y.forEach(c),
        (r = L(I)),
        (i = g(I, 'BUTTON', { class: !0 }));
      var E = v(i);
      P(o.$$.fragment, E),
        E.forEach(c),
        I.forEach(c),
        (u = L(d)),
        k && k.l(d),
        d.forEach(c),
        this.h();
    },
    h() {
      f(t, 'class', 'svelte-xem5o1'),
        f(i, 'class', 'button svelte-xem5o1'),
        f(s, 'class', 'nav-button link svelte-xem5o1'),
        ne(s, 'open', a[11].id === a[3]),
        f(e, 'class', 'nav-item category link svelte-xem5o1');
    },
    m(w, d) {
      M(w, e, d),
        h(e, s),
        h(s, t),
        h(t, l),
        h(s, r),
        h(s, i),
        q(o, i, null),
        h(e, u),
        k && k.m(e, null),
        (p = !0),
        m || ((S = ke(e, 'click', b)), (m = !0));
    },
    p(w, d) {
      (a = w), (!p || d & 4) && n !== (n = a[11].name + '') && K(l, n);
      const I = {};
      d & 12 && (I.rotate = a[11].id === a[3]),
        o.$set(I),
        d & 12 && ne(s, 'open', a[11].id === a[3]),
        a[3] === a[11].id
          ? k
            ? (k.p(a, d), d & 12 && T(k, 1))
            : ((k = tt(a)), k.c(), T(k, 1), k.m(e, null))
          : k &&
            (de(),
            N(k, 1, 1, () => {
              k = null;
            }),
            he());
    },
    i(w) {
      p || (T(o.$$.fragment, w), T(k), (p = !0));
    },
    o(w) {
      N(o.$$.fragment, w), N(k), (p = !1);
    },
    d(w) {
      w && c(e), F(o), k && k.d(), (m = !1), S();
    },
  };
}
function tt(a) {
  let e, s;
  return (
    (e = new Wt({
      props: { section: a[11], headingText: `Latest in ${a[11].name}` },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(t) {
        P(e.$$.fragment, t);
      },
      m(t, n) {
        q(e, t, n), (s = !0);
      },
      p(t, n) {
        const l = {};
        n & 4 && (l.section = t[11]),
          n & 4 && (l.headingText = `Latest in ${t[11].name}`),
          e.$set(l);
      },
      i(t) {
        s || (T(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function st(a) {
  let e, s, t, n;
  const l = [xt, Xt],
    r = [];
  function i(o, u) {
    return o[11].children ? 0 : 1;
  }
  return (
    (e = i(a)),
    (s = r[e] = l[e](a)),
    {
      c() {
        s.c(), (t = we());
      },
      l(o) {
        s.l(o), (t = we());
      },
      m(o, u) {
        r[e].m(o, u), M(o, t, u), (n = !0);
      },
      p(o, u) {
        let p = e;
        (e = i(o)),
          e === p
            ? r[e].p(o, u)
            : (de(),
              N(r[p], 1, 1, () => {
                r[p] = null;
              }),
              he(),
              (s = r[e]),
              s ? s.p(o, u) : ((s = r[e] = l[e](o)), s.c()),
              T(s, 1),
              s.m(t.parentNode, t));
      },
      i(o) {
        n || (T(s), (n = !0));
      },
      o(o) {
        N(s), (n = !1);
      },
      d(o) {
        r[e].d(o), o && c(t);
      },
    }
  );
}
function nt(a) {
  let e, s;
  return (
    (e = new Qt({ props: { sections: a[1] } })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(t) {
        P(e.$$.fragment, t);
      },
      m(t, n) {
        q(e, t, n), (s = !0);
      },
      p(t, n) {
        const l = {};
        n & 2 && (l.sections = t[1]), e.$set(l);
      },
      i(t) {
        s || (T(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function es(a) {
  let e, s, t, n, l, r, i, o, u, p, m, S, k, b;
  Tt(a[8]);
  let w = a[2],
    d = [];
  for (let E = 0; E < w.length; E += 1) d[E] = st(et(a, w, E));
  const I = (E) =>
    N(d[E], 1, 1, () => {
      d[E] = null;
    });
  p = new ht({ props: { rotate: a[3] === 'more' } });
  let y = a[3] === 'more' && nt(a);
  return {
    c() {
      (e = _('div')), (s = _('nav')), (t = _('ul'));
      for (let E = 0; E < d.length; E += 1) d[E].c();
      (n = V()),
        (l = _('li')),
        (r = _('div')),
        (i = _('button')),
        (o = _('span')),
        (u = O('More ')),
        B(p.$$.fragment),
        (m = V()),
        y && y.c(),
        this.h();
    },
    l(E) {
      e = g(E, 'DIV', { class: !0 });
      var C = v(e);
      s = g(C, 'NAV', { 'aria-label': !0 });
      var R = v(s);
      t = g(R, 'UL', { class: !0 });
      var D = v(t);
      for (let j = 0; j < d.length; j += 1) d[j].l(D);
      (n = L(D)), (l = g(D, 'LI', { class: !0 }));
      var Z = v(l);
      r = g(Z, 'DIV', { class: !0 });
      var W = v(r);
      i = g(W, 'BUTTON', { class: !0 });
      var J = v(i);
      o = g(J, 'SPAN', { class: !0 });
      var H = v(o);
      (u = U(H, 'More ')),
        P(p.$$.fragment, H),
        H.forEach(c),
        J.forEach(c),
        W.forEach(c),
        (m = L(Z)),
        y && y.l(Z),
        Z.forEach(c),
        D.forEach(c),
        R.forEach(c),
        C.forEach(c),
        this.h();
    },
    h() {
      f(o, 'class', 'svelte-xem5o1'),
        f(i, 'class', 'button svelte-xem5o1'),
        f(r, 'class', 'nav-button more link svelte-xem5o1'),
        ne(r, 'open', a[3] === 'more'),
        f(l, 'class', 'nav-item svelte-xem5o1'),
        f(t, 'class', 'nav-list svelte-xem5o1'),
        f(s, 'aria-label', 'Main navigation'),
        f(e, 'class', 'nav-bar svelte-xem5o1');
    },
    m(E, C) {
      M(E, e, C), h(e, s), h(s, t);
      for (let R = 0; R < d.length; R += 1) d[R].m(t, null);
      h(t, n),
        h(t, l),
        h(l, r),
        h(r, i),
        h(i, o),
        h(o, u),
        q(p, o, null),
        h(l, m),
        y && y.m(l, null),
        (S = !0),
        k ||
          ((b = [ke(window, 'resize', a[8]), ke(l, 'click', a[10])]), (k = !0));
    },
    p(E, [C]) {
      if (C & 28) {
        w = E[2];
        let D;
        for (D = 0; D < w.length; D += 1) {
          const Z = et(E, w, D);
          d[D]
            ? (d[D].p(Z, C), T(d[D], 1))
            : ((d[D] = st(Z)), d[D].c(), T(d[D], 1), d[D].m(t, n));
        }
        for (de(), D = w.length; D < d.length; D += 1) I(D);
        he();
      }
      const R = {};
      C & 8 && (R.rotate = E[3] === 'more'),
        p.$set(R),
        C & 8 && ne(r, 'open', E[3] === 'more'),
        E[3] === 'more'
          ? y
            ? (y.p(E, C), C & 8 && T(y, 1))
            : ((y = nt(E)), y.c(), T(y, 1), y.m(l, null))
          : y &&
            (de(),
            N(y, 1, 1, () => {
              y = null;
            }),
            he());
    },
    i(E) {
      if (!S) {
        for (let C = 0; C < w.length; C += 1) T(d[C]);
        T(p.$$.fragment, E), T(y), (S = !0);
      }
    },
    o(E) {
      d = d.filter(Boolean);
      for (let C = 0; C < d.length; C += 1) N(d[C]);
      N(p.$$.fragment, E), N(y), (S = !1);
    },
    d(E) {
      E && c(e), ie(d, E), F(p), y && y.d(), (k = !1), Vt(b);
    },
  };
}
function ts(a, e, s) {
  let t,
    n,
    l,
    r,
    i,
    { sections: o = [] } = e;
  const u = ft('nav-active-section');
  pt(a, u, (b) => s(3, (i = b)));
  let p = 1200;
  function m() {
    s(0, (p = window.innerWidth));
  }
  const S = (b) => {
      i === b.id ? u.set(null) : u.set(b.id);
    },
    k = () => {
      i === 'more' ? u.set(null) : u.set('more');
    };
  return (
    (a.$$set = (b) => {
      'sections' in b && s(5, (o = b.sections));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 1 && s(7, (t = () => (p >= 1300 ? 7 : 5))),
        a.$$.dirty & 128 && s(6, (n = t())),
        a.$$.dirty & 96 && s(2, (l = o.slice(0, n))),
        a.$$.dirty & 96 && s(1, (r = o.slice(n)));
    }),
    [p, r, l, i, u, o, n, t, m, S, k]
  );
}
class ss extends Q {
  constructor(e) {
    super(), X(this, e, ts, es, x, { sections: 5 });
  }
}
var vt = [
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
function ns(a) {
  let e, s;
  return {
    c() {
      (e = me('svg')), (s = me('path')), this.h();
    },
    l(t) {
      e = ve(t, 'svg', {
        xmlns: !0,
        viewBox: !0,
        'aria-hidden': !0,
        focusable: !0,
        style: !0,
        class: !0,
      });
      var n = v(e);
      (s = ve(n, 'path', { d: !0 })), v(s).forEach(c), n.forEach(c), this.h();
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
        He(e, 'width', a[0] + 'px'),
        f(e, 'class', 'svelte-17648ki');
    },
    m(t, n) {
      M(t, e, n), h(e, s);
    },
    p(t, [n]) {
      n & 1 && He(e, 'width', t[0] + 'px');
    },
    i: z,
    o: z,
    d(t) {
      t && c(e);
    },
  };
}
function as(a, e, s) {
  let { width: t = 20 } = e;
  return (
    (a.$$set = (n) => {
      'width' in n && s(0, (t = n.width));
    }),
    [t]
  );
}
class ls extends Q {
  constructor(e) {
    super(), X(this, e, as, ns, x, { width: 0 });
  }
}
function rs(a) {
  let e, s;
  return {
    c() {
      (e = me('svg')), (s = me('path')), this.h();
    },
    l(t) {
      e = ve(t, 'svg', {
        'aria-hidden': !0,
        focusable: !0,
        width: !0,
        height: !0,
        xmlns: !0,
        class: !0,
      });
      var n = v(e);
      (s = ve(n, 'path', { d: !0, 'fill-rule': !0 })),
        v(s).forEach(c),
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
      M(t, e, n), h(e, s);
    },
    p: z,
    i: z,
    o: z,
    d(t) {
      t && c(e);
    },
  };
}
class is extends Q {
  constructor(e) {
    super(), X(this, e, null, rs, x, {});
  }
}
function at(a, e, s) {
  const t = a.slice();
  return (t[4] = e[s]), t;
}
function lt(a, e, s) {
  const t = a.slice();
  return (t[7] = e[s]), t;
}
function rt(a) {
  let e, s, t, n, l, r, i, o, u, p, m, S, k;
  (n = new dt({
    props: { logoColour: a[1].accent, textColour: a[1].primary },
  })),
    (o = new is({}));
  let b = a[0].sections,
    w = [];
  for (let d = 0; d < b.length; d += 1) w[d] = ct(at(a, b, d));
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
      for (let d = 0; d < w.length; d += 1) w[d].c();
      this.h();
    },
    l(d) {
      e = g(d, 'DIV', { class: !0, 'aria-modal': !0, style: !0 });
      var I = v(e);
      s = g(I, 'HEADER', { class: !0 });
      var y = v(s);
      t = g(y, 'DIV', { class: !0 });
      var E = v(t);
      P(n.$$.fragment, E),
        E.forEach(c),
        (l = L(y)),
        (r = g(y, 'BUTTON', { class: !0 }));
      var C = v(r);
      i = g(C, 'DIV', { class: !0 });
      var R = v(i);
      P(o.$$.fragment, R), R.forEach(c), C.forEach(c), y.forEach(c), (u = L(I));
      for (let D = 0; D < w.length; D += 1) w[D].l(I);
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
    m(d, I) {
      M(d, e, I),
        h(e, s),
        h(s, t),
        q(n, t, null),
        h(s, l),
        h(s, r),
        h(r, i),
        q(o, i, null),
        h(e, u);
      for (let y = 0; y < w.length; y += 1) w[y].m(e, null);
      (m = !0),
        S ||
          ((k = ke(r, 'click', function () {
            Lt(a[3]) && a[3].apply(this, arguments);
          })),
          (S = !0));
    },
    p(d, I) {
      a = d;
      const y = {};
      if (
        (I & 2 && (y.logoColour = a[1].accent),
        I & 2 && (y.textColour = a[1].primary),
        n.$set(y),
        I & 1)
      ) {
        b = a[0].sections;
        let E;
        for (E = 0; E < b.length; E += 1) {
          const C = at(a, b, E);
          w[E] ? w[E].p(C, I) : ((w[E] = ct(C)), w[E].c(), w[E].m(e, null));
        }
        for (; E < w.length; E += 1) w[E].d(1);
        w.length = b.length;
      }
      (!m ||
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
    i(d) {
      m || (T(n.$$.fragment, d), T(o.$$.fragment, d), (m = !0));
    },
    o(d) {
      N(n.$$.fragment, d), N(o.$$.fragment, d), (m = !1);
    },
    d(d) {
      d && c(e), F(n), F(o), ie(w, d), (S = !1), k();
    },
  };
}
function it(a) {
  let e,
    s = a[4].children,
    t = [];
  for (let n = 0; n < s.length; n += 1) t[n] = ot(lt(a, s, n));
  return {
    c() {
      e = _('ul');
      for (let n = 0; n < t.length; n += 1) t[n].c();
      this.h();
    },
    l(n) {
      e = g(n, 'UL', { class: !0 });
      var l = v(e);
      for (let r = 0; r < t.length; r += 1) t[r].l(l);
      l.forEach(c), this.h();
    },
    h() {
      f(e, 'class', 'subsections svelte-1tpcugt');
    },
    m(n, l) {
      M(n, e, l);
      for (let r = 0; r < t.length; r += 1) t[r].m(e, null);
    },
    p(n, l) {
      if (l & 1) {
        s = n[4].children;
        let r;
        for (r = 0; r < s.length; r += 1) {
          const i = lt(n, s, r);
          t[r] ? t[r].p(i, l) : ((t[r] = ot(i)), t[r].c(), t[r].m(e, null));
        }
        for (; r < t.length; r += 1) t[r].d(1);
        t.length = s.length;
      }
    },
    d(n) {
      n && c(e), ie(t, n);
    },
  };
}
function ot(a) {
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
      var o = v(e);
      s = g(o, 'A', { class: !0, href: !0 });
      var u = v(s);
      (n = U(u, t)), u.forEach(c), (r = L(o)), o.forEach(c), this.h();
    },
    h() {
      f(s, 'class', 'subsection-link svelte-1tpcugt'),
        f(s, 'href', (l = G(a[7].url)));
    },
    m(i, o) {
      M(i, e, o), h(e, s), h(s, n), h(e, r);
    },
    p(i, o) {
      o & 1 && t !== (t = i[7].name + '') && K(n, t),
        o & 1 && l !== (l = G(i[7].url)) && f(s, 'href', l);
    },
    d(i) {
      i && c(e);
    },
  };
}
function ct(a) {
  let e,
    s,
    t = a[4].name + '',
    n,
    l,
    r,
    i,
    o = a[4].children && it(a);
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
      var p = v(e);
      s = g(p, 'A', { class: !0, href: !0 });
      var m = v(s);
      (n = U(m, t)),
        m.forEach(c),
        (r = L(p)),
        o && o.l(p),
        (i = L(p)),
        p.forEach(c),
        this.h();
    },
    h() {
      f(s, 'class', 'section-link svelte-1tpcugt'),
        f(s, 'href', (l = G(a[4].url))),
        f(e, 'class', 'section svelte-1tpcugt');
    },
    m(u, p) {
      M(u, e, p), h(e, s), h(s, n), h(e, r), o && o.m(e, null), h(e, i);
    },
    p(u, p) {
      p & 1 && t !== (t = u[4].name + '') && K(n, t),
        p & 1 && l !== (l = G(u[4].url)) && f(s, 'href', l),
        u[4].children
          ? o
            ? o.p(u, p)
            : ((o = it(u)), o.c(), o.m(e, i))
          : o && (o.d(1), (o = null));
    },
    d(u) {
      u && c(e), o && o.d();
    },
  };
}
function os(a) {
  let e,
    s,
    t = a[2] && rt(a);
  return {
    c() {
      t && t.c(), (e = we());
    },
    l(n) {
      t && t.l(n), (e = we());
    },
    m(n, l) {
      t && t.m(n, l), M(n, e, l), (s = !0);
    },
    p(n, [l]) {
      n[2]
        ? t
          ? (t.p(n, l), l & 4 && T(t, 1))
          : ((t = rt(n)), t.c(), T(t, 1), t.m(e.parentNode, e))
        : t &&
          (de(),
          N(t, 1, 1, () => {
            t = null;
          }),
          he());
    },
    i(n) {
      s || (T(t), (s = !0));
    },
    o(n) {
      N(t), (s = !1);
    },
    d(n) {
      t && t.d(n), n && c(e);
    },
  };
}
function cs(a, e, s) {
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
class us extends Q {
  constructor(e) {
    super(),
      X(this, e, cs, os, x, {
        data: 0,
        theme: 1,
        isMobileMenuOpen: 2,
        releaseMobileMenu: 3,
      });
  }
}
function fs(a) {
  let e, s, t, n, l, r, i, o, u, p, m, S, k, b, w, d, I, y, E, C, R, D, Z, W, J;
  return (
    (u = new dt({
      props: { logoColour: a[1].accent, textColour: a[1].primary },
    })),
    (m = new ss({ props: { sections: a[2] } })),
    (C = new ls({})),
    (D = new us({
      props: {
        theme: a[1],
        isMobileMenuOpen: a[0],
        releaseMobileMenu: a[5],
        data: vt[0],
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
          B(m.$$.fragment),
          (S = V()),
          (k = _('div')),
          (b = _('div')),
          (w = V()),
          (d = _('div')),
          (I = _('div')),
          (y = _('button')),
          (E = _('div')),
          B(C.$$.fragment),
          (R = V()),
          B(D.$$.fragment),
          this.h();
      },
      l(H) {
        e = g(H, 'HEADER', { style: !0 });
        var j = v(e);
        s = g(j, 'DIV', { class: !0 });
        var ee = v(s);
        t = g(ee, 'DIV', { class: !0 });
        var ae = v(t);
        n = g(ae, 'DIV', { class: !0 });
        var re = v(n);
        l = g(re, 'DIV', { class: !0 });
        var Y = v(l);
        r = g(Y, 'DIV', { class: !0 });
        var oe = v(r);
        i = g(oe, 'DIV', { class: !0 });
        var se = v(i);
        o = g(se, 'A', { href: !0 });
        var be = v(o);
        P(u.$$.fragment, be),
          be.forEach(c),
          se.forEach(c),
          oe.forEach(c),
          (p = L(Y)),
          P(m.$$.fragment, Y),
          (S = L(Y)),
          (k = g(Y, 'DIV', { class: !0 }));
        var ce = v(k);
        (b = g(ce, 'DIV', { class: !0 })),
          v(b).forEach(c),
          ce.forEach(c),
          (w = L(Y)),
          (d = g(Y, 'DIV', { class: !0 }));
        var te = v(d);
        I = g(te, 'DIV', { class: !0 });
        var ue = v(I);
        y = g(ue, 'BUTTON', {
          class: !0,
          'aria-label': !0,
          'aria-haspopup': !0,
          'aria-expanded': !0,
        });
        var le = v(y);
        E = g(le, 'DIV', { class: !0 });
        var fe = v(E);
        P(C.$$.fragment, fe),
          fe.forEach(c),
          le.forEach(c),
          ue.forEach(c),
          te.forEach(c),
          Y.forEach(c),
          re.forEach(c),
          ae.forEach(c),
          ee.forEach(c),
          j.forEach(c),
          (R = L(H)),
          P(D.$$.fragment, H),
          this.h();
      },
      h() {
        f(o, 'href', 'https://www.reuters.com'),
          f(i, 'class', 'logo svelte-1h3e93v'),
          f(r, 'class', 'logo-container svelte-1h3e93v'),
          f(b, 'class', 'spacer svelte-1h3e93v'),
          f(k, 'class', 'spacer-container svelte-1h3e93v'),
          f(E, 'class', 'button-container svelte-1h3e93v'),
          f(y, 'class', 'menu-button svelte-1h3e93v'),
          f(y, 'aria-label', 'Menu'),
          f(y, 'aria-haspopup', 'true'),
          f(y, 'aria-expanded', a[0]),
          f(I, 'class', 'mobile-menu svelte-1h3e93v'),
          f(d, 'class', 'mobile-button-group svelte-1h3e93v'),
          f(l, 'class', 'main-bar svelte-1h3e93v'),
          f(n, 'class', 'inner svelte-1h3e93v'),
          f(t, 'class', 'scroll-container svelte-1h3e93v'),
          f(s, 'class', 'nav-container show-nav svelte-1h3e93v'),
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
      m(H, j) {
        M(H, e, j),
          h(e, s),
          h(s, t),
          h(t, n),
          h(n, l),
          h(l, r),
          h(r, i),
          h(i, o),
          q(u, o, null),
          h(l, p),
          q(m, l, null),
          h(l, S),
          h(l, k),
          h(k, b),
          h(l, w),
          h(l, d),
          h(d, I),
          h(I, y),
          h(y, E),
          q(C, E, null),
          M(H, R, j),
          q(D, H, j),
          (Z = !0),
          W || ((J = ke(y, 'click', a[4])), (W = !0));
      },
      p(H, [j]) {
        (!Z || j & 1) && f(y, 'aria-expanded', H[0]);
        const ee = {};
        j & 1 && (ee.isMobileMenuOpen = H[0]),
          j & 1 && (ee.releaseMobileMenu = H[5]),
          D.$set(ee);
      },
      i(H) {
        Z ||
          (T(u.$$.fragment, H),
          T(m.$$.fragment, H),
          T(C.$$.fragment, H),
          T(D.$$.fragment, H),
          (Z = !0));
      },
      o(H) {
        N(u.$$.fragment, H),
          N(m.$$.fragment, H),
          N(C.$$.fragment, H),
          N(D.$$.fragment, H),
          (Z = !1);
      },
      d(H) {
        H && c(e), F(u), F(m), F(C), H && c(R), F(D, H), (W = !1), J();
      },
    }
  );
}
const ye = {
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
function ps(a, e, s) {
  let { theme: t = {} } = e;
  const n = $e($e({}, ye.default), t);
  Re('nav-theme', Oe(n)), Re('nav-active-section', Oe(null));
  const { sections: l } = vt[0];
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
class Ie extends Q {
  constructor(e) {
    super(), X(this, e, ps, fs, x, { theme: 3 });
  }
}
function ds(a) {
  let e, s;
  return (
    (e = new Ie({})),
    {
      c() {
        B(e.$$.fragment);
      },
      l(t) {
        P(e.$$.fragment, t);
      },
      m(t, n) {
        q(e, t, n), (s = !0);
      },
      i(t) {
        s || (T(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function hs(a) {
  let e, s;
  return (
    (e = new Ie({ props: { theme: ye.dark } })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(t) {
        P(e.$$.fragment, t);
      },
      m(t, n) {
        q(e, t, n), (s = !0);
      },
      p: z,
      i(t) {
        s || (T(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function ms(a) {
  let e, s;
  return (
    (e = new Ie({
      props: {
        theme: Le($e({}, ye.default), { background: '#e0d3b8', rules: '#aaa' }),
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
        q(e, t, n), (s = !0);
      },
      p: z,
      i(t) {
        s || (T(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function vs(a) {
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
    m,
    S = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteHeader <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteHeader</span> <span class="token punctuation">/></span></span></code>`,
    k,
    b,
    w,
    d,
    I,
    y,
    E,
    C,
    R,
    D,
    Z = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteHeader<span class="token punctuation">,</span> SiteHeaderThemes <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteHeader</span> <span class="token attr-name">theme=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>SiteHeaderThemes<span class="token punctuation">.</span>dark<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,
    W,
    J,
    H,
    j,
    ee,
    ae,
    re,
    Y,
    oe,
    se,
    be = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
    ce,
    te,
    ue,
    le,
    fe;
  return (
    (b = new Ee({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [ds] },
        $$scope: { ctx: a },
      },
    })),
    (J = new Ee({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [hs] },
        $$scope: { ctx: a },
      },
    })),
    (te = new Ee({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [ms] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        (e = _('section')),
          (s = _('h2')),
          (t = O(ut)),
          (n = V()),
          (l = _('p')),
          (r = O('Reuters dotcom site header, ported from ')),
          (i = _('a')),
          (o = O('Raptor UI components')),
          (u = O('.')),
          (p = V()),
          (m = _('pre')),
          (k = V()),
          B(b.$$.fragment),
          (w = V()),
          (d = _('div')),
          (I = V()),
          (y = _('section')),
          (E = _('p')),
          (C = O('Change colours with exported themes.')),
          (R = V()),
          (D = _('pre')),
          (W = V()),
          B(J.$$.fragment),
          (H = V()),
          (j = _('div')),
          (ee = V()),
          (ae = _('section')),
          (re = _('p')),
          (Y = O('Customise a colour theme.')),
          (oe = V()),
          (se = _('pre')),
          (ce = V()),
          B(te.$$.fragment),
          (ue = V()),
          (le = _('div')),
          this.h();
      },
      l($) {
        e = g($, 'SECTION', {});
        var A = v(e);
        s = g(A, 'H2', {});
        var _e = v(s);
        (t = U(_e, ut)), _e.forEach(c), (n = L(A)), (l = g(A, 'P', {}));
        var pe = v(l);
        (r = U(pe, 'Reuters dotcom site header, ported from ')),
          (i = g(pe, 'A', { href: !0, rel: !0 }));
        var ge = v(i);
        (o = U(ge, 'Raptor UI components')),
          ge.forEach(c),
          (u = U(pe, '.')),
          pe.forEach(c),
          A.forEach(c),
          (p = L($)),
          (m = g($, 'PRE', { class: !0 }));
        var _t = v(m);
        _t.forEach(c),
          (k = L($)),
          P(b.$$.fragment, $),
          (w = L($)),
          (d = g($, 'DIV', { class: !0 })),
          v(d).forEach(c),
          (I = L($)),
          (y = g($, 'SECTION', {}));
        var Me = v(y);
        E = g(Me, 'P', {});
        var Se = v(E);
        (C = U(Se, 'Change colours with exported themes.')),
          Se.forEach(c),
          Me.forEach(c),
          (R = L($)),
          (D = g($, 'PRE', { class: !0 }));
        var gt = v(D);
        gt.forEach(c),
          (W = L($)),
          P(J.$$.fragment, $),
          (H = L($)),
          (j = g($, 'DIV', { class: !0 })),
          v(j).forEach(c),
          (ee = L($)),
          (ae = g($, 'SECTION', {}));
        var De = v(ae);
        re = g(De, 'P', {});
        var Ce = v(re);
        (Y = U(Ce, 'Customise a colour theme.')),
          Ce.forEach(c),
          De.forEach(c),
          (oe = L($)),
          (se = g($, 'PRE', { class: !0 }));
        var kt = v(se);
        kt.forEach(c),
          (ce = L($)),
          P(te.$$.fragment, $),
          (ue = L($)),
          (le = g($, 'DIV', { class: !0 })),
          v(le).forEach(c),
          this.h();
      },
      h() {
        f(
          i,
          'href',
          'https://github.com/tr/rcom-arc_raptor-ui/tree/develop/packages/rcom-raptor-ui_common/src/components/site-header'
        ),
          f(i, 'rel', 'nofollow'),
          f(m, 'class', 'language-svelte'),
          f(d, 'class', 'spacer svelte-1ess2x0'),
          f(D, 'class', 'language-svelte'),
          f(j, 'class', 'spacer svelte-1ess2x0'),
          f(se, 'class', 'language-svelte'),
          f(le, 'class', 'spacer svelte-1ess2x0');
      },
      m($, A) {
        M($, e, A),
          h(e, s),
          h(s, t),
          h(e, n),
          h(e, l),
          h(l, r),
          h(l, i),
          h(i, o),
          h(l, u),
          M($, p, A),
          M($, m, A),
          (m.innerHTML = S),
          M($, k, A),
          q(b, $, A),
          M($, w, A),
          M($, d, A),
          M($, I, A),
          M($, y, A),
          h(y, E),
          h(E, C),
          M($, R, A),
          M($, D, A),
          (D.innerHTML = Z),
          M($, W, A),
          q(J, $, A),
          M($, H, A),
          M($, j, A),
          M($, ee, A),
          M($, ae, A),
          h(ae, re),
          h(re, Y),
          M($, oe, A),
          M($, se, A),
          (se.innerHTML = be),
          M($, ce, A),
          q(te, $, A),
          M($, ue, A),
          M($, le, A),
          (fe = !0);
      },
      p($, [A]) {
        const _e = {};
        A & 1 && (_e.$$scope = { dirty: A, ctx: $ }), b.$set(_e);
        const pe = {};
        A & 1 && (pe.$$scope = { dirty: A, ctx: $ }), J.$set(pe);
        const ge = {};
        A & 1 && (ge.$$scope = { dirty: A, ctx: $ }), te.$set(ge);
      },
      i($) {
        fe ||
          (T(b.$$.fragment, $),
          T(J.$$.fragment, $),
          T(te.$$.fragment, $),
          (fe = !0));
      },
      o($) {
        N(b.$$.fragment, $),
          N(J.$$.fragment, $),
          N(te.$$.fragment, $),
          (fe = !1);
      },
      d($) {
        $ && c(e),
          $ && c(p),
          $ && c(m),
          $ && c(k),
          F(b, $),
          $ && c(w),
          $ && c(d),
          $ && c(I),
          $ && c(y),
          $ && c(R),
          $ && c(D),
          $ && c(W),
          F(J, $),
          $ && c(H),
          $ && c(j),
          $ && c(ee),
          $ && c(ae),
          $ && c(oe),
          $ && c(se),
          $ && c(ce),
          F(te, $),
          $ && c(ue),
          $ && c(le);
      },
    }
  );
}
const _s = {
    title: 'SiteHeader',
    description: 'Reuters dotcom site header.',
    slug: 'site-header',
  },
  { title: ut, description: Ms, slug: Ss } = _s;
class Ds extends Q {
  constructor(e) {
    super(), X(this, e, null, vs, x, {});
  }
}
export { Ds as default, _s as metadata };
