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
  E as Z,
  e as k,
  t as H,
  c as b,
  h as O,
  j as Y,
  Y as Ne,
  k as C,
  m as T,
  F as It,
  G as Mt,
  H as St,
  I as Dt,
  n as de,
  o as A,
  p as he,
  q as D,
  N as ft,
  R as pt,
  u as Ct,
  w as U,
  x as B,
  y as P,
  B as q,
  _ as ie,
  T as Tt,
  l as we,
  V as ke,
  a4 as Vt,
  f as Re,
  a8 as Lt,
  r as je,
} from './index-83a5d9f9.js';
import { g as He } from './main-7d66ab6d.js';
import { w as Oe } from './index-5b18af3d.js';
import { R as dt } from './index-83a1f0ce.js';
import { n as F } from './index-c889ff85.js';
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
    i: Z,
    o: Z,
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
      (e = k('a')), (s = k('span')), (n = H(t)), this.h();
    },
    l(r) {
      e = b(r, 'A', { href: !0, class: !0 });
      var i = v(e);
      s = b(i, 'SPAN', { class: !0 });
      var o = v(s);
      (n = O(o, t)), o.forEach(c), i.forEach(c), this.h();
    },
    h() {
      f(s, 'class', 'label svelte-1nyc2e8'),
        f(e, 'href', (l = F(a[0].primary_section.id))),
        f(e, 'class', 'svelte-1nyc2e8');
    },
    m(r, i) {
      M(r, e, i), h(e, s), h(s, n);
    },
    p(r, i) {
      i & 1 && t !== (t = r[0].primary_section.name + '') && Y(n, t),
        i & 1 && l !== (l = F(r[0].primary_section.id)) && f(e, 'href', l);
    },
    d(r) {
      r && c(e);
    },
  };
}
function Be(a) {
  let e,
    s = He(a[0].display_time) + '',
    t,
    n;
  return {
    c() {
      (e = k('time')), (t = H(s)), this.h();
    },
    l(l) {
      e = b(l, 'TIME', { datetime: !0, class: !0 });
      var r = v(e);
      (t = O(r, s)), r.forEach(c), this.h();
    },
    h() {
      f(e, 'datetime', (n = a[0].display_time)),
        f(e, 'class', 'svelte-1nyc2e8');
    },
    m(l, r) {
      M(l, e, r), h(e, t);
    },
    p(l, r) {
      r & 1 && s !== (s = He(l[0].display_time) + '') && Y(t, s),
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
      (e = k('div')), (s = k('img')), this.h();
    },
    l(l) {
      e = b(l, 'DIV', { class: !0 });
      var r = v(e);
      (s = b(r, 'IMG', { src: !0, alt: !0, class: !0 })),
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
function Rt(a) {
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
    d = a[1] && Ue(a),
    S = !a[1] && Be(a),
    $ = a[2] && Pe(a);
  return {
    c() {
      (e = k('div')),
        (s = k('a')),
        (t = k('div')),
        d && d.c(),
        (n = C()),
        (l = k('span')),
        (i = H(r)),
        (o = C()),
        S && S.c(),
        (u = C()),
        $ && $.c(),
        this.h();
    },
    l(_) {
      e = b(_, 'DIV', { class: !0 });
      var m = v(e);
      s = b(m, 'A', { href: !0, class: !0 });
      var y = v(s);
      t = b(y, 'DIV', { class: !0 });
      var g = v(t);
      d && d.l(g), (n = T(g)), (l = b(g, 'SPAN', { class: !0 }));
      var E = v(l);
      (i = O(E, r)),
        E.forEach(c),
        (o = T(g)),
        S && S.l(g),
        g.forEach(c),
        (u = T(y)),
        $ && $.l(y),
        y.forEach(c),
        m.forEach(c),
        this.h();
    },
    h() {
      f(l, 'class', 'svelte-1nyc2e8'),
        f(t, 'class', 'story-text svelte-1nyc2e8'),
        ne(t, 'has-thumbnail', a[2]),
        f(s, 'href', (p = F(a[0].canonical_url))),
        f(s, 'class', 'svelte-1nyc2e8'),
        f(e, 'class', 'story-card svelte-1nyc2e8');
    },
    m(_, m) {
      M(_, e, m),
        h(e, s),
        h(s, t),
        d && d.m(t, null),
        h(t, n),
        h(t, l),
        h(l, i),
        h(t, o),
        S && S.m(t, null),
        h(s, u),
        $ && $.m(s, null);
    },
    p(_, [m]) {
      _[1]
        ? d
          ? d.p(_, m)
          : ((d = Ue(_)), d.c(), d.m(t, n))
        : d && (d.d(1), (d = null)),
        m & 1 && r !== (r = _[0].title + '') && Y(i, r),
        _[1]
          ? S && (S.d(1), (S = null))
          : S
          ? S.p(_, m)
          : ((S = Be(_)), S.c(), S.m(t, null)),
        m & 4 && ne(t, 'has-thumbnail', _[2]),
        _[2]
          ? $
            ? $.p(_, m)
            : (($ = Pe(_)), $.c(), $.m(s, null))
          : $ && ($.d(1), ($ = null)),
        m & 1 && p !== (p = F(_[0].canonical_url)) && f(s, 'href', p);
    },
    i: Z,
    o: Z,
    d(_) {
      _ && c(e), d && d.d(), S && S.d(), $ && $.d();
    },
  };
}
function jt(a, e, s) {
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
class Ht extends Q {
  constructor(e) {
    super(), X(this, e, jt, Rt, x, { story: 0, withSection: 1 });
  }
}
function Ot(a) {
  let e, s, t;
  return {
    c() {
      (e = k('div')), (s = k('div')), (t = k('div')), this.h();
    },
    l(n) {
      e = b(n, 'DIV', {});
      var l = v(e);
      s = b(l, 'DIV', { class: !0 });
      var r = v(s);
      (t = b(r, 'DIV', { class: !0 })),
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
    p: Z,
    i: Z,
    o: Z,
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
        (e = k('div')), U(s.$$.fragment), this.h();
      },
      l(n) {
        e = b(n, 'DIV', { class: !0 });
        var l = v(e);
        B(s.$$.fragment, l), l.forEach(c), this.h();
      },
      h() {
        f(e, 'class', 'spinner svelte-1v8d80j');
      },
      m(n, l) {
        M(n, e, l), P(s, e, null), (t = !0);
      },
      p: Z,
      i(n) {
        t || (D(s.$$.fragment, n), (t = !0));
      },
      o(n) {
        A(s.$$.fragment, n), (t = !1);
      },
      d(n) {
        n && c(e), q(s);
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
    A(i[u], 1, 1, () => {
      i[u] = null;
    });
  return {
    c() {
      (e = k('span')), (s = H(a[0])), (t = C()), (n = k('ul'));
      for (let u = 0; u < i.length; u += 1) i[u].c();
      this.h();
    },
    l(u) {
      e = b(u, 'SPAN', { class: !0 });
      var p = v(e);
      (s = O(p, a[0])),
        p.forEach(c),
        (t = T(u)),
        (n = b(u, 'UL', { class: !0 }));
      var d = v(n);
      for (let S = 0; S < i.length; S += 1) i[S].l(d);
      d.forEach(c), this.h();
    },
    h() {
      f(e, 'class', 'latest svelte-1v8d80j'),
        f(n, 'class', 'story-list svelte-1v8d80j');
    },
    m(u, p) {
      M(u, e, p), h(e, s), M(u, t, p), M(u, n, p);
      for (let d = 0; d < i.length; d += 1) i[d].m(n, null);
      l = !0;
    },
    p(u, p) {
      if (((!l || p & 1) && Y(s, u[0]), p & 6)) {
        r = u[1];
        let d;
        for (d = 0; d < r.length; d += 1) {
          const S = qe(u, r, d);
          i[d]
            ? (i[d].p(S, p), D(i[d], 1))
            : ((i[d] = Fe(S)), i[d].c(), D(i[d], 1), i[d].m(n, null));
        }
        for (de(), d = r.length; d < i.length; d += 1) o(d);
        he();
      }
    },
    i(u) {
      if (!l) {
        for (let p = 0; p < r.length; p += 1) D(i[p]);
        l = !0;
      }
    },
    o(u) {
      i = i.filter(Boolean);
      for (let p = 0; p < i.length; p += 1) A(i[p]);
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
    (s = new Ht({ props: { story: a[7], withSection: a[2] === 'more' } })),
    {
      c() {
        (e = k('li')), U(s.$$.fragment), (t = C()), this.h();
      },
      l(l) {
        e = b(l, 'LI', { class: !0 });
        var r = v(e);
        B(s.$$.fragment, r), (t = T(r)), r.forEach(c), this.h();
      },
      h() {
        f(e, 'class', 'story-item svelte-1v8d80j');
      },
      m(l, r) {
        M(l, e, r), P(s, e, null), h(e, t), (n = !0);
      },
      p(l, r) {
        const i = {};
        r & 2 && (i.story = l[7]),
          r & 4 && (i.withSection = l[2] === 'more'),
          s.$set(i);
      },
      i(l) {
        n || (D(s.$$.fragment, l), (n = !0));
      },
      o(l) {
        A(s.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && c(e), q(s);
      },
    }
  );
}
function qt(a) {
  let e, s, t, n, l, r, i, o, u, p, d;
  const S = a[5].default,
    $ = It(S, a, a[4], null),
    _ = [Pt, Bt],
    m = [];
  function y(g, E) {
    return g[1].length > 0 ? 0 : 1;
  }
  return (
    (u = y(a)),
    (p = m[u] = _[u](a)),
    {
      c() {
        (e = k('div')),
          (s = k('div')),
          (t = k('div')),
          (n = k('div')),
          (l = k('div')),
          $ && $.c(),
          (r = C()),
          (i = k('div')),
          (o = k('div')),
          p.c(),
          this.h();
      },
      l(g) {
        e = b(g, 'DIV', { class: !0 });
        var E = v(e);
        s = b(E, 'DIV', { class: !0 });
        var I = v(s);
        t = b(I, 'DIV', { class: !0 });
        var N = v(t);
        n = b(N, 'DIV', { class: !0 });
        var V = v(n);
        l = b(V, 'DIV', { class: !0 });
        var R = v(l);
        $ && $.l(R),
          R.forEach(c),
          V.forEach(c),
          (r = T(N)),
          (i = b(N, 'DIV', { class: !0 }));
        var J = v(i);
        o = b(J, 'DIV', { class: !0 });
        var z = v(o);
        p.l(z),
          z.forEach(c),
          J.forEach(c),
          N.forEach(c),
          I.forEach(c),
          E.forEach(c),
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
      m(g, E) {
        M(g, e, E),
          h(e, s),
          h(s, t),
          h(t, n),
          h(n, l),
          $ && $.m(l, null),
          h(t, r),
          h(t, i),
          h(i, o),
          m[u].m(o, null),
          (d = !0);
      },
      p(g, [E]) {
        $ &&
          $.p &&
          (!d || E & 16) &&
          Mt($, S, g, g[4], d ? Dt(S, g[4], E, null) : St(g[4]), null);
        let I = u;
        (u = y(g)),
          u === I
            ? m[u].p(g, E)
            : (de(),
              A(m[I], 1, 1, () => {
                m[I] = null;
              }),
              he(),
              (p = m[u]),
              p ? p.p(g, E) : ((p = m[u] = _[u](g)), p.c()),
              D(p, 1),
              p.m(o, null));
      },
      i(g) {
        d || (D($, g), D(p), (d = !0));
      },
      o(g) {
        A($, g), A(p), (d = !1);
      },
      d(g) {
        g && c(e), $ && $.d(g), m[u].d();
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
      e = k('ul');
      for (let n = 0; n < t.length; n += 1) t[n].c();
      this.h();
    },
    l(n) {
      e = b(n, 'UL', { class: !0 });
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
      (e = k('li')), (s = k('a')), (n = H(t)), (r = C()), this.h();
    },
    l(i) {
      e = b(i, 'LI', { class: !0 });
      var o = v(e);
      s = b(o, 'A', { class: !0, href: !0 });
      var u = v(s);
      (n = O(u, t)), u.forEach(c), (r = T(o)), o.forEach(c), this.h();
    },
    h() {
      f(s, 'class', 'subsection-link svelte-ksl3iw'),
        f(s, 'href', (l = F(a[3].url))),
        f(e, 'class', 'svelte-ksl3iw');
    },
    m(i, o) {
      M(i, e, o), h(e, s), h(s, n), h(e, r);
    },
    p(i, o) {
      o & 5 && t !== (t = i[3].name + '') && Y(n, t),
        o & 5 && l !== (l = F(i[3].url)) && f(s, 'href', l);
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
      (e = k('li')), (s = k('a')), (n = H(t)), (r = C()), this.h();
    },
    l(i) {
      e = b(i, 'LI', { class: !0 });
      var o = v(e);
      s = b(o, 'A', { class: !0, href: !0 });
      var u = v(s);
      (n = O(u, t)), u.forEach(c), (r = T(o)), o.forEach(c), this.h();
    },
    h() {
      f(s, 'class', 'subsection-link svelte-ksl3iw'),
        f(s, 'href', (l = F(a[3].url))),
        f(e, 'class', 'svelte-ksl3iw');
    },
    m(i, o) {
      M(i, e, o), h(e, s), h(s, n), h(e, r);
    },
    p(i, o) {
      o & 5 && t !== (t = i[3].name + '') && Y(n, t),
        o & 5 && l !== (l = F(i[3].url)) && f(s, 'href', l);
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
    d = a[2] > 0 && ze(a),
    S = a[0].children.slice(a[2]),
    $ = [];
  for (let _ = 0; _ < S.length; _ += 1) $[_] = Je(Ge(a, S, _));
  return {
    c() {
      (e = k('a')),
        (s = k('span')),
        (t = H('Browse ')),
        (l = H(n)),
        (i = C()),
        (o = k('div')),
        d && d.c(),
        (u = C()),
        (p = k('ul'));
      for (let _ = 0; _ < $.length; _ += 1) $[_].c();
      this.h();
    },
    l(_) {
      e = b(_, 'A', { href: !0 });
      var m = v(e);
      s = b(m, 'SPAN', { class: !0 });
      var y = v(s);
      (t = O(y, 'Browse ')),
        (l = O(y, n)),
        y.forEach(c),
        m.forEach(c),
        (i = T(_)),
        (o = b(_, 'DIV', { class: !0 }));
      var g = v(o);
      d && d.l(g), (u = T(g)), (p = b(g, 'UL', { class: !0 }));
      var E = v(p);
      for (let I = 0; I < $.length; I += 1) $[I].l(E);
      E.forEach(c), g.forEach(c), this.h();
    },
    h() {
      f(s, 'class', 'heading svelte-ksl3iw'),
        f(e, 'href', (r = F(a[0].url))),
        f(p, 'class', 'sections-group svelte-ksl3iw'),
        f(o, 'class', 'sections svelte-ksl3iw');
    },
    m(_, m) {
      M(_, e, m),
        h(e, s),
        h(s, t),
        h(s, l),
        M(_, i, m),
        M(_, o, m),
        d && d.m(o, null),
        h(o, u),
        h(o, p);
      for (let y = 0; y < $.length; y += 1) $[y].m(p, null);
    },
    p(_, m) {
      if (
        (m & 1 && n !== (n = _[0].name + '') && Y(l, n),
        m & 1 && r !== (r = F(_[0].url)) && f(e, 'href', r),
        _[2] > 0
          ? d
            ? d.p(_, m)
            : ((d = ze(_)), d.c(), d.m(o, u))
          : d && (d.d(1), (d = null)),
        m & 5)
      ) {
        S = _[0].children.slice(_[2]);
        let y;
        for (y = 0; y < S.length; y += 1) {
          const g = Ge(_, S, y);
          $[y] ? $[y].p(g, m) : (($[y] = Je(g)), $[y].c(), $[y].m(p, null));
        }
        for (; y < $.length; y += 1) $[y].d(1);
        $.length = S.length;
      }
    },
    d(_) {
      _ && c(e), _ && c(i), _ && c(o), d && d.d(), ie($, _);
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
        U(e.$$.fragment);
      },
      l(t) {
        B(e.$$.fragment, t);
      },
      m(t, n) {
        P(e, t, n), (s = !0);
      },
      p(t, [n]) {
        const l = {};
        n & 2 && (l.headingText = t[1]),
          n & 261 && (l.$$scope = { dirty: n, ctx: t }),
          e.$set(l);
      },
      i(t) {
        s || (D(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        A(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        q(e, t);
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
function Ye(a, e, s) {
  const t = a.slice();
  return (t[1] = e[s]), t;
}
function Ke(a, e, s) {
  const t = a.slice();
  return (t[4] = e[s]), t;
}
function Qe(a) {
  let e,
    s = a[1].children,
    t = [];
  for (let n = 0; n < s.length; n += 1) t[n] = Xe(Ke(a, s, n));
  return {
    c() {
      e = k('ul');
      for (let n = 0; n < t.length; n += 1) t[n].c();
      this.h();
    },
    l(n) {
      e = b(n, 'UL', { class: !0 });
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
          const i = Ke(n, s, r);
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
      (e = k('li')), (s = k('a')), (n = H(t)), (r = C()), this.h();
    },
    l(i) {
      e = b(i, 'LI', {});
      var o = v(e);
      s = b(o, 'A', { class: !0, href: !0 });
      var u = v(s);
      (n = O(u, t)), u.forEach(c), (r = T(o)), o.forEach(c), this.h();
    },
    h() {
      f(s, 'class', 'subsection-link svelte-b74xfp'),
        f(s, 'href', (l = F(a[4].url)));
    },
    m(i, o) {
      M(i, e, o), h(e, s), h(s, n), h(e, r);
    },
    p(i, o) {
      o & 1 && t !== (t = i[4].name + '') && Y(n, t),
        o & 1 && l !== (l = F(i[4].url)) && f(s, 'href', l);
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
      (e = k('section')),
        (s = k('a')),
        (n = H(t)),
        (r = C()),
        o && o.c(),
        (i = C()),
        this.h();
    },
    l(u) {
      e = b(u, 'SECTION', { class: !0 });
      var p = v(e);
      s = b(p, 'A', { href: !0, class: !0 });
      var d = v(s);
      (n = O(d, t)),
        d.forEach(c),
        (r = T(p)),
        o && o.l(p),
        (i = T(p)),
        p.forEach(c),
        this.h();
    },
    h() {
      f(s, 'href', (l = F(a[1].url))),
        f(s, 'class', 'section-link svelte-b74xfp'),
        f(e, 'class', 'more-section-group svelte-b74xfp'),
        ne(e, 'has-children', a[1].children);
    },
    m(u, p) {
      M(u, e, p), h(e, s), h(s, n), h(e, r), o && o.m(e, null), h(e, i);
    },
    p(u, p) {
      p & 1 && t !== (t = u[1].name + '') && Y(n, t),
        p & 1 && l !== (l = F(u[1].url)) && f(s, 'href', l),
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
  for (let l = 0; l < t.length; l += 1) n[l] = xe(Ye(a, t, l));
  return {
    c() {
      (e = k('div')), (s = k('div'));
      for (let l = 0; l < n.length; l += 1) n[l].c();
      this.h();
    },
    l(l) {
      e = b(l, 'DIV', { class: !0 });
      var r = v(e);
      s = b(r, 'DIV', { class: !0 });
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
          const o = Ye(l, t, i);
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
function Yt(a) {
  let e, s;
  return (
    (e = new mt({
      props: { $$slots: { default: [Jt] }, $$scope: { ctx: a } },
    })),
    {
      c() {
        U(e.$$.fragment);
      },
      l(t) {
        B(e.$$.fragment, t);
      },
      m(t, n) {
        P(e, t, n), (s = !0);
      },
      p(t, [n]) {
        const l = {};
        n & 129 && (l.$$scope = { dirty: n, ctx: t }), e.$set(l);
      },
      i(t) {
        s || (D(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        A(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        q(e, t);
      },
    }
  );
}
function Kt(a, e, s) {
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
    super(), X(this, e, Kt, Yt, x, { sections: 0 });
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
      (e = k('li')), (s = k('div')), (t = k('a')), (l = H(n)), this.h();
    },
    l(i) {
      e = b(i, 'LI', { class: !0 });
      var o = v(e);
      s = b(o, 'DIV', { class: !0 });
      var u = v(s);
      t = b(u, 'A', { href: !0, class: !0 });
      var p = v(t);
      (l = O(p, n)), p.forEach(c), u.forEach(c), o.forEach(c), this.h();
    },
    h() {
      f(t, 'href', (r = F(a[11].url))),
        f(t, 'class', 'svelte-edcdsd'),
        f(s, 'class', 'nav-button link svelte-edcdsd'),
        f(e, 'class', 'nav-item category link svelte-edcdsd');
    },
    m(i, o) {
      M(i, e, o), h(e, s), h(s, t), h(t, l);
    },
    p(i, o) {
      o & 4 && n !== (n = i[11].name + '') && Y(l, n),
        o & 4 && r !== (r = F(i[11].url)) && f(t, 'href', r);
    },
    i: Z,
    o: Z,
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
    d,
    S;
  o = new ht({ props: { rotate: a[11].id === a[3] } });
  let $ = a[3] === a[11].id && tt(a);
  function _() {
    return a[9](a[11]);
  }
  return {
    c() {
      (e = k('li')),
        (s = k('div')),
        (t = k('span')),
        (l = H(n)),
        (r = C()),
        (i = k('button')),
        U(o.$$.fragment),
        (u = C()),
        $ && $.c(),
        this.h();
    },
    l(m) {
      e = b(m, 'LI', { class: !0 });
      var y = v(e);
      s = b(y, 'DIV', { class: !0 });
      var g = v(s);
      t = b(g, 'SPAN', { class: !0 });
      var E = v(t);
      (l = O(E, n)),
        E.forEach(c),
        (r = T(g)),
        (i = b(g, 'BUTTON', { class: !0 }));
      var I = v(i);
      B(o.$$.fragment, I),
        I.forEach(c),
        g.forEach(c),
        (u = T(y)),
        $ && $.l(y),
        y.forEach(c),
        this.h();
    },
    h() {
      f(t, 'class', 'svelte-edcdsd'),
        f(i, 'class', 'button svelte-edcdsd'),
        f(s, 'class', 'nav-button link svelte-edcdsd'),
        ne(s, 'open', a[11].id === a[3]),
        f(e, 'class', 'nav-item category link svelte-edcdsd');
    },
    m(m, y) {
      M(m, e, y),
        h(e, s),
        h(s, t),
        h(t, l),
        h(s, r),
        h(s, i),
        P(o, i, null),
        h(e, u),
        $ && $.m(e, null),
        (p = !0),
        d || ((S = ke(e, 'click', _)), (d = !0));
    },
    p(m, y) {
      (a = m), (!p || y & 4) && n !== (n = a[11].name + '') && Y(l, n);
      const g = {};
      y & 12 && (g.rotate = a[11].id === a[3]),
        o.$set(g),
        y & 12 && ne(s, 'open', a[11].id === a[3]),
        a[3] === a[11].id
          ? $
            ? ($.p(a, y), y & 12 && D($, 1))
            : (($ = tt(a)), $.c(), D($, 1), $.m(e, null))
          : $ &&
            (de(),
            A($, 1, 1, () => {
              $ = null;
            }),
            he());
    },
    i(m) {
      p || (D(o.$$.fragment, m), D($), (p = !0));
    },
    o(m) {
      A(o.$$.fragment, m), A($), (p = !1);
    },
    d(m) {
      m && c(e), q(o), $ && $.d(), (d = !1), S();
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
        U(e.$$.fragment);
      },
      l(t) {
        B(e.$$.fragment, t);
      },
      m(t, n) {
        P(e, t, n), (s = !0);
      },
      p(t, n) {
        const l = {};
        n & 4 && (l.section = t[11]),
          n & 4 && (l.headingText = `Latest in ${t[11].name}`),
          e.$set(l);
      },
      i(t) {
        s || (D(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        A(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        q(e, t);
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
              A(r[p], 1, 1, () => {
                r[p] = null;
              }),
              he(),
              (s = r[e]),
              s ? s.p(o, u) : ((s = r[e] = l[e](o)), s.c()),
              D(s, 1),
              s.m(t.parentNode, t));
      },
      i(o) {
        n || (D(s), (n = !0));
      },
      o(o) {
        A(s), (n = !1);
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
        U(e.$$.fragment);
      },
      l(t) {
        B(e.$$.fragment, t);
      },
      m(t, n) {
        P(e, t, n), (s = !0);
      },
      p(t, n) {
        const l = {};
        n & 2 && (l.sections = t[1]), e.$set(l);
      },
      i(t) {
        s || (D(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        A(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        q(e, t);
      },
    }
  );
}
function es(a) {
  let e, s, t, n, l, r, i, o, u, p, d, S, $;
  Tt(a[8]);
  let _ = a[2],
    m = [];
  for (let E = 0; E < _.length; E += 1) m[E] = st(et(a, _, E));
  const y = (E) =>
    A(m[E], 1, 1, () => {
      m[E] = null;
    });
  u = new ht({ props: { rotate: a[3] === 'more' } });
  let g = a[3] === 'more' && nt(a);
  return {
    c() {
      (e = k('div')), (s = k('nav')), (t = k('ul'));
      for (let E = 0; E < m.length; E += 1) m[E].c();
      (n = C()),
        (l = k('li')),
        (r = k('div')),
        (i = k('button')),
        (o = H('More ')),
        U(u.$$.fragment),
        (p = C()),
        g && g.c(),
        this.h();
    },
    l(E) {
      e = b(E, 'DIV', { class: !0 });
      var I = v(e);
      s = b(I, 'NAV', { 'aria-label': !0 });
      var N = v(s);
      t = b(N, 'UL', { class: !0 });
      var V = v(t);
      for (let W = 0; W < m.length; W += 1) m[W].l(V);
      (n = T(V)), (l = b(V, 'LI', { class: !0 }));
      var R = v(l);
      r = b(R, 'DIV', { class: !0 });
      var J = v(r);
      i = b(J, 'BUTTON', { class: !0 });
      var z = v(i);
      (o = O(z, 'More ')),
        B(u.$$.fragment, z),
        z.forEach(c),
        J.forEach(c),
        (p = T(R)),
        g && g.l(R),
        R.forEach(c),
        V.forEach(c),
        N.forEach(c),
        I.forEach(c),
        this.h();
    },
    h() {
      f(i, 'class', 'button svelte-edcdsd'),
        f(r, 'class', 'nav-button more svelte-edcdsd'),
        ne(r, 'open', a[3] === 'more'),
        f(l, 'class', 'nav-item svelte-edcdsd'),
        f(t, 'class', 'nav-list svelte-edcdsd'),
        f(s, 'aria-label', 'Main navigation'),
        f(e, 'class', 'nav-bar svelte-edcdsd');
    },
    m(E, I) {
      M(E, e, I), h(e, s), h(s, t);
      for (let N = 0; N < m.length; N += 1) m[N].m(t, null);
      h(t, n),
        h(t, l),
        h(l, r),
        h(r, i),
        h(i, o),
        P(u, i, null),
        h(l, p),
        g && g.m(l, null),
        (d = !0),
        S ||
          (($ = [ke(window, 'resize', a[8]), ke(l, 'click', a[10])]), (S = !0));
    },
    p(E, [I]) {
      if (I & 28) {
        _ = E[2];
        let V;
        for (V = 0; V < _.length; V += 1) {
          const R = et(E, _, V);
          m[V]
            ? (m[V].p(R, I), D(m[V], 1))
            : ((m[V] = st(R)), m[V].c(), D(m[V], 1), m[V].m(t, n));
        }
        for (de(), V = _.length; V < m.length; V += 1) y(V);
        he();
      }
      const N = {};
      I & 8 && (N.rotate = E[3] === 'more'),
        u.$set(N),
        I & 8 && ne(r, 'open', E[3] === 'more'),
        E[3] === 'more'
          ? g
            ? (g.p(E, I), I & 8 && D(g, 1))
            : ((g = nt(E)), g.c(), D(g, 1), g.m(l, null))
          : g &&
            (de(),
            A(g, 1, 1, () => {
              g = null;
            }),
            he());
    },
    i(E) {
      if (!d) {
        for (let I = 0; I < _.length; I += 1) D(m[I]);
        D(u.$$.fragment, E), D(g), (d = !0);
      }
    },
    o(E) {
      m = m.filter(Boolean);
      for (let I = 0; I < m.length; I += 1) A(m[I]);
      A(u.$$.fragment, E), A(g), (d = !1);
    },
    d(E) {
      E && c(e), ie(m, E), q(u), g && g.d(), (S = !1), Vt($);
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
  pt(a, u, (_) => s(3, (i = _)));
  let p = 1200;
  function d() {
    s(0, (p = window.innerWidth));
  }
  const S = (_) => {
      i === _.id ? u.set(null) : u.set(_.id);
    },
    $ = () => {
      i === 'more' ? u.set(null) : u.set('more');
    };
  return (
    (a.$$set = (_) => {
      'sections' in _ && s(5, (o = _.sections));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 1 && s(7, (t = () => (p >= 1300 ? 7 : 5))),
        a.$$.dirty & 128 && s(6, (n = t())),
        a.$$.dirty & 96 && s(2, (l = o.slice(0, n))),
        a.$$.dirty & 96 && s(1, (r = o.slice(n)));
    }),
    [p, r, l, i, u, o, n, t, d, S, $]
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
        Re(e, 'width', a[0] + 'px'),
        f(e, 'class', 'svelte-17648ki');
    },
    m(t, n) {
      M(t, e, n), h(e, s);
    },
    p(t, [n]) {
      n & 1 && Re(e, 'width', t[0] + 'px');
    },
    i: Z,
    o: Z,
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
    p: Z,
    i: Z,
    o: Z,
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
  let e, s, t, n, l, r, i, o, u, p, d, S, $;
  (n = new dt({
    props: { logoColour: a[1].accent, textColour: a[1].primary },
  })),
    (o = new is({}));
  let _ = a[0].sections,
    m = [];
  for (let y = 0; y < _.length; y += 1) m[y] = ct(at(a, _, y));
  return {
    c() {
      (e = k('div')),
        (s = k('header')),
        (t = k('div')),
        U(n.$$.fragment),
        (l = C()),
        (r = k('button')),
        (i = k('div')),
        U(o.$$.fragment),
        (u = C());
      for (let y = 0; y < m.length; y += 1) m[y].c();
      this.h();
    },
    l(y) {
      e = b(y, 'DIV', { class: !0, 'aria-modal': !0, style: !0 });
      var g = v(e);
      s = b(g, 'HEADER', { class: !0 });
      var E = v(s);
      t = b(E, 'DIV', { class: !0 });
      var I = v(t);
      B(n.$$.fragment, I),
        I.forEach(c),
        (l = T(E)),
        (r = b(E, 'BUTTON', { class: !0 }));
      var N = v(r);
      i = b(N, 'DIV', { class: !0 });
      var V = v(i);
      B(o.$$.fragment, V), V.forEach(c), N.forEach(c), E.forEach(c), (u = T(g));
      for (let R = 0; R < m.length; R += 1) m[R].l(g);
      g.forEach(c), this.h();
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
    m(y, g) {
      M(y, e, g),
        h(e, s),
        h(s, t),
        P(n, t, null),
        h(s, l),
        h(s, r),
        h(r, i),
        P(o, i, null),
        h(e, u);
      for (let E = 0; E < m.length; E += 1) m[E].m(e, null);
      (d = !0),
        S ||
          (($ = ke(r, 'click', function () {
            Lt(a[3]) && a[3].apply(this, arguments);
          })),
          (S = !0));
    },
    p(y, g) {
      a = y;
      const E = {};
      if (
        (g & 2 && (E.logoColour = a[1].accent),
        g & 2 && (E.textColour = a[1].primary),
        n.$set(E),
        g & 1)
      ) {
        _ = a[0].sections;
        let I;
        for (I = 0; I < _.length; I += 1) {
          const N = at(a, _, I);
          m[I] ? m[I].p(N, g) : ((m[I] = ct(N)), m[I].c(), m[I].m(e, null));
        }
        for (; I < m.length; I += 1) m[I].d(1);
        m.length = _.length;
      }
      (!d ||
        (g & 2 &&
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
    i(y) {
      d || (D(n.$$.fragment, y), D(o.$$.fragment, y), (d = !0));
    },
    o(y) {
      A(n.$$.fragment, y), A(o.$$.fragment, y), (d = !1);
    },
    d(y) {
      y && c(e), q(n), q(o), ie(m, y), (S = !1), $();
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
      e = k('ul');
      for (let n = 0; n < t.length; n += 1) t[n].c();
      this.h();
    },
    l(n) {
      e = b(n, 'UL', { class: !0 });
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
      (e = k('li')), (s = k('a')), (n = H(t)), (r = C()), this.h();
    },
    l(i) {
      e = b(i, 'LI', {});
      var o = v(e);
      s = b(o, 'A', { class: !0, href: !0 });
      var u = v(s);
      (n = O(u, t)), u.forEach(c), (r = T(o)), o.forEach(c), this.h();
    },
    h() {
      f(s, 'class', 'subsection-link svelte-1tpcugt'),
        f(s, 'href', (l = F(a[7].url)));
    },
    m(i, o) {
      M(i, e, o), h(e, s), h(s, n), h(e, r);
    },
    p(i, o) {
      o & 1 && t !== (t = i[7].name + '') && Y(n, t),
        o & 1 && l !== (l = F(i[7].url)) && f(s, 'href', l);
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
      (e = k('section')),
        (s = k('a')),
        (n = H(t)),
        (r = C()),
        o && o.c(),
        (i = C()),
        this.h();
    },
    l(u) {
      e = b(u, 'SECTION', { class: !0 });
      var p = v(e);
      s = b(p, 'A', { class: !0, href: !0 });
      var d = v(s);
      (n = O(d, t)),
        d.forEach(c),
        (r = T(p)),
        o && o.l(p),
        (i = T(p)),
        p.forEach(c),
        this.h();
    },
    h() {
      f(s, 'class', 'section-link svelte-1tpcugt'),
        f(s, 'href', (l = F(a[4].url))),
        f(e, 'class', 'section svelte-1tpcugt');
    },
    m(u, p) {
      M(u, e, p), h(e, s), h(s, n), h(e, r), o && o.m(e, null), h(e, i);
    },
    p(u, p) {
      p & 1 && t !== (t = u[4].name + '') && Y(n, t),
        p & 1 && l !== (l = F(u[4].url)) && f(s, 'href', l),
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
          ? (t.p(n, l), l & 4 && D(t, 1))
          : ((t = rt(n)), t.c(), D(t, 1), t.m(e.parentNode, e))
        : t &&
          (de(),
          A(t, 1, 1, () => {
            t = null;
          }),
          he());
    },
    i(n) {
      s || (D(t), (s = !0));
    },
    o(n) {
      A(t), (s = !1);
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
  let e, s, t, n, l, r, i, o, u, p, d, S, $, _, m, y, g, E, I, N, V, R, J, z, W;
  return (
    (u = new dt({
      props: { logoColour: a[1].accent, textColour: a[1].primary },
    })),
    (d = new ss({ props: { sections: a[2] } })),
    (N = new ls({})),
    (R = new us({
      props: {
        theme: a[1],
        isMobileMenuOpen: a[0],
        releaseMobileMenu: a[5],
        data: vt,
      },
    })),
    {
      c() {
        (e = k('header')),
          (s = k('div')),
          (t = k('div')),
          (n = k('div')),
          (l = k('div')),
          (r = k('div')),
          (i = k('div')),
          (o = k('a')),
          U(u.$$.fragment),
          (p = C()),
          U(d.$$.fragment),
          (S = C()),
          ($ = k('div')),
          (_ = k('div')),
          (m = C()),
          (y = k('div')),
          (g = k('div')),
          (E = k('button')),
          (I = k('div')),
          U(N.$$.fragment),
          (V = C()),
          U(R.$$.fragment),
          this.h();
      },
      l(j) {
        e = b(j, 'HEADER', { style: !0 });
        var G = v(e);
        s = b(G, 'DIV', { class: !0 });
        var ee = v(s);
        t = b(ee, 'DIV', { class: !0 });
        var ae = v(t);
        n = b(ae, 'DIV', { class: !0 });
        var re = v(n);
        l = b(re, 'DIV', { class: !0 });
        var K = v(l);
        r = b(K, 'DIV', { class: !0 });
        var oe = v(r);
        i = b(oe, 'DIV', { class: !0 });
        var se = v(i);
        o = b(se, 'A', { href: !0 });
        var be = v(o);
        B(u.$$.fragment, be),
          be.forEach(c),
          se.forEach(c),
          oe.forEach(c),
          (p = T(K)),
          B(d.$$.fragment, K),
          (S = T(K)),
          ($ = b(K, 'DIV', { class: !0 }));
        var ce = v($);
        (_ = b(ce, 'DIV', { class: !0 })),
          v(_).forEach(c),
          ce.forEach(c),
          (m = T(K)),
          (y = b(K, 'DIV', { class: !0 }));
        var te = v(y);
        g = b(te, 'DIV', { class: !0 });
        var ue = v(g);
        E = b(ue, 'BUTTON', {
          class: !0,
          'aria-label': !0,
          'aria-haspopup': !0,
          'aria-expanded': !0,
        });
        var le = v(E);
        I = b(le, 'DIV', { class: !0 });
        var fe = v(I);
        B(N.$$.fragment, fe),
          fe.forEach(c),
          le.forEach(c),
          ue.forEach(c),
          te.forEach(c),
          K.forEach(c),
          re.forEach(c),
          ae.forEach(c),
          ee.forEach(c),
          G.forEach(c),
          (V = T(j)),
          B(R.$$.fragment, j),
          this.h();
      },
      h() {
        f(o, 'href', 'https://www.reuters.com'),
          f(i, 'class', 'logo svelte-1h3e93v'),
          f(r, 'class', 'logo-container svelte-1h3e93v'),
          f(_, 'class', 'spacer svelte-1h3e93v'),
          f($, 'class', 'spacer-container svelte-1h3e93v'),
          f(I, 'class', 'button-container svelte-1h3e93v'),
          f(E, 'class', 'menu-button svelte-1h3e93v'),
          f(E, 'aria-label', 'Menu'),
          f(E, 'aria-haspopup', 'true'),
          f(E, 'aria-expanded', a[0]),
          f(g, 'class', 'mobile-menu svelte-1h3e93v'),
          f(y, 'class', 'mobile-button-group svelte-1h3e93v'),
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
      m(j, G) {
        M(j, e, G),
          h(e, s),
          h(s, t),
          h(t, n),
          h(n, l),
          h(l, r),
          h(r, i),
          h(i, o),
          P(u, o, null),
          h(l, p),
          P(d, l, null),
          h(l, S),
          h(l, $),
          h($, _),
          h(l, m),
          h(l, y),
          h(y, g),
          h(g, E),
          h(E, I),
          P(N, I, null),
          M(j, V, G),
          P(R, j, G),
          (J = !0),
          z || ((W = ke(E, 'click', a[4])), (z = !0));
      },
      p(j, [G]) {
        (!J || G & 1) && f(E, 'aria-expanded', j[0]);
        const ee = {};
        G & 1 && (ee.isMobileMenuOpen = j[0]),
          G & 1 && (ee.releaseMobileMenu = j[5]),
          R.$set(ee);
      },
      i(j) {
        J ||
          (D(u.$$.fragment, j),
          D(d.$$.fragment, j),
          D(N.$$.fragment, j),
          D(R.$$.fragment, j),
          (J = !0));
      },
      o(j) {
        A(u.$$.fragment, j),
          A(d.$$.fragment, j),
          A(N.$$.fragment, j),
          A(R.$$.fragment, j),
          (J = !1);
      },
      d(j) {
        j && c(e), q(u), q(d), q(N), j && c(V), q(R, j), (z = !1), W();
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
  je('nav-theme', Oe(n)), je('nav-active-section', Oe(null));
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
        U(e.$$.fragment);
      },
      l(t) {
        B(e.$$.fragment, t);
      },
      m(t, n) {
        P(e, t, n), (s = !0);
      },
      i(t) {
        s || (D(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        A(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        q(e, t);
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
        U(e.$$.fragment);
      },
      l(t) {
        B(e.$$.fragment, t);
      },
      m(t, n) {
        P(e, t, n), (s = !0);
      },
      p: Z,
      i(t) {
        s || (D(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        A(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        q(e, t);
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
        U(e.$$.fragment);
      },
      l(t) {
        B(e.$$.fragment, t);
      },
      m(t, n) {
        P(e, t, n), (s = !0);
      },
      p: Z,
      i(t) {
        s || (D(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        A(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        q(e, t);
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
    d,
    S = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteHeader <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteHeader</span> <span class="token punctuation">/></span></span></code>`,
    $,
    _,
    m,
    y,
    g,
    E,
    I,
    N,
    V,
    R,
    J = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteHeader<span class="token punctuation">,</span> SiteHeaderThemes <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteHeader</span> <span class="token attr-name">theme=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>SiteHeaderThemes<span class="token punctuation">.</span>dark<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,
    z,
    W,
    j,
    G,
    ee,
    ae,
    re,
    K,
    oe,
    se,
    be = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteHeader<span class="token punctuation">,</span> SiteHeaderThemes <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteHeader</span> <span class="token attr-name">theme=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> <span class="token operator">...</span>themes<span class="token punctuation">.</span>default<span class="token punctuation">,</span> <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#e0d3b8'</span><span class="token punctuation">,</span> <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token string">'#aaa'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>

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
    (_ = new Ee({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [ds] },
        $$scope: { ctx: a },
      },
    })),
    (W = new Ee({
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
        (e = k('section')),
          (s = k('h2')),
          (t = H(ut)),
          (n = C()),
          (l = k('p')),
          (r = H('Reuters dotcom site header, ported from ')),
          (i = k('a')),
          (o = H('Raptor UI components')),
          (u = H('.')),
          (p = C()),
          (d = k('pre')),
          ($ = C()),
          U(_.$$.fragment),
          (m = C()),
          (y = k('div')),
          (g = C()),
          (E = k('section')),
          (I = k('p')),
          (N = H('Change colours with exported themes.')),
          (V = C()),
          (R = k('pre')),
          (z = C()),
          U(W.$$.fragment),
          (j = C()),
          (G = k('div')),
          (ee = C()),
          (ae = k('section')),
          (re = k('p')),
          (K = H('You can customise a colour theme.')),
          (oe = C()),
          (se = k('pre')),
          (ce = C()),
          U(te.$$.fragment),
          (ue = C()),
          (le = k('div')),
          this.h();
      },
      l(w) {
        e = b(w, 'SECTION', {});
        var L = v(e);
        s = b(L, 'H2', {});
        var _e = v(s);
        (t = O(_e, ut)), _e.forEach(c), (n = T(L)), (l = b(L, 'P', {}));
        var pe = v(l);
        (r = O(pe, 'Reuters dotcom site header, ported from ')),
          (i = b(pe, 'A', { href: !0, rel: !0 }));
        var ge = v(i);
        (o = O(ge, 'Raptor UI components')),
          ge.forEach(c),
          (u = O(pe, '.')),
          pe.forEach(c),
          L.forEach(c),
          (p = T(w)),
          (d = b(w, 'PRE', { class: !0 }));
        var _t = v(d);
        _t.forEach(c),
          ($ = T(w)),
          B(_.$$.fragment, w),
          (m = T(w)),
          (y = b(w, 'DIV', { class: !0 })),
          v(y).forEach(c),
          (g = T(w)),
          (E = b(w, 'SECTION', {}));
        var Me = v(E);
        I = b(Me, 'P', {});
        var Se = v(I);
        (N = O(Se, 'Change colours with exported themes.')),
          Se.forEach(c),
          Me.forEach(c),
          (V = T(w)),
          (R = b(w, 'PRE', { class: !0 }));
        var gt = v(R);
        gt.forEach(c),
          (z = T(w)),
          B(W.$$.fragment, w),
          (j = T(w)),
          (G = b(w, 'DIV', { class: !0 })),
          v(G).forEach(c),
          (ee = T(w)),
          (ae = b(w, 'SECTION', {}));
        var De = v(ae);
        re = b(De, 'P', {});
        var Ce = v(re);
        (K = O(Ce, 'You can customise a colour theme.')),
          Ce.forEach(c),
          De.forEach(c),
          (oe = T(w)),
          (se = b(w, 'PRE', { class: !0 }));
        var kt = v(se);
        kt.forEach(c),
          (ce = T(w)),
          B(te.$$.fragment, w),
          (ue = T(w)),
          (le = b(w, 'DIV', { class: !0 })),
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
          f(d, 'class', 'language-svelte'),
          f(y, 'class', 'spacer svelte-1ess2x0'),
          f(R, 'class', 'language-svelte'),
          f(G, 'class', 'spacer svelte-1ess2x0'),
          f(se, 'class', 'language-svelte'),
          f(le, 'class', 'spacer svelte-1ess2x0');
      },
      m(w, L) {
        M(w, e, L),
          h(e, s),
          h(s, t),
          h(e, n),
          h(e, l),
          h(l, r),
          h(l, i),
          h(i, o),
          h(l, u),
          M(w, p, L),
          M(w, d, L),
          (d.innerHTML = S),
          M(w, $, L),
          P(_, w, L),
          M(w, m, L),
          M(w, y, L),
          M(w, g, L),
          M(w, E, L),
          h(E, I),
          h(I, N),
          M(w, V, L),
          M(w, R, L),
          (R.innerHTML = J),
          M(w, z, L),
          P(W, w, L),
          M(w, j, L),
          M(w, G, L),
          M(w, ee, L),
          M(w, ae, L),
          h(ae, re),
          h(re, K),
          M(w, oe, L),
          M(w, se, L),
          (se.innerHTML = be),
          M(w, ce, L),
          P(te, w, L),
          M(w, ue, L),
          M(w, le, L),
          (fe = !0);
      },
      p(w, [L]) {
        const _e = {};
        L & 1 && (_e.$$scope = { dirty: L, ctx: w }), _.$set(_e);
        const pe = {};
        L & 1 && (pe.$$scope = { dirty: L, ctx: w }), W.$set(pe);
        const ge = {};
        L & 1 && (ge.$$scope = { dirty: L, ctx: w }), te.$set(ge);
      },
      i(w) {
        fe ||
          (D(_.$$.fragment, w),
          D(W.$$.fragment, w),
          D(te.$$.fragment, w),
          (fe = !0));
      },
      o(w) {
        A(_.$$.fragment, w),
          A(W.$$.fragment, w),
          A(te.$$.fragment, w),
          (fe = !1);
      },
      d(w) {
        w && c(e),
          w && c(p),
          w && c(d),
          w && c($),
          q(_, w),
          w && c(m),
          w && c(y),
          w && c(g),
          w && c(E),
          w && c(V),
          w && c(R),
          w && c(z),
          q(W, w),
          w && c(j),
          w && c(G),
          w && c(ee),
          w && c(ae),
          w && c(oe),
          w && c(se),
          w && c(ce),
          q(te, w),
          w && c(ue),
          w && c(le);
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
