var $t = Object.defineProperty,
  wt = Object.defineProperties;
var yt = Object.getOwnPropertyDescriptors;
var Te = Object.getOwnPropertySymbols;
var Et = Object.prototype.hasOwnProperty,
  It = Object.prototype.propertyIsEnumerable;
var Ve = (a, e, s) =>
    e in a
      ? $t(a, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (a[e] = s),
  $e = (a, e) => {
    for (var s in e || (e = {})) Et.call(e, s) && Ve(a, s, e[s]);
    if (Te) for (var s of Te(e)) It.call(e, s) && Ve(a, s, e[s]);
    return a;
  },
  Le = (a, e) => wt(a, yt(e));
var je = (a, e, s) =>
  new Promise((t, n) => {
    var l = (o) => {
        try {
          i(s.next(o));
        } catch (c) {
          n(c);
        }
      },
      r = (o) => {
        try {
          i(s.throw(o));
        } catch (c) {
          n(c);
        }
      },
      i = (o) => (o.done ? t(o.value) : Promise.resolve(o.value).then(l, r));
    i((s = s.apply(a, e)).next());
  });
import {
  S as X,
  i as x,
  s as ee,
  K as ve,
  L as _e,
  a as v,
  d as u,
  b as f,
  Z as ae,
  g as D,
  J as h,
  E as z,
  e as g,
  t as O,
  c as k,
  h as U,
  j as Y,
  Y as Ae,
  k as V,
  m as L,
  F as Mt,
  G as St,
  H as Dt,
  I as Ct,
  n as he,
  o as A,
  p as me,
  q as T,
  N as ft,
  R as pt,
  u as Tt,
  w as B,
  x as P,
  y as F,
  B as G,
  _ as oe,
  T as Vt,
  l as we,
  V as K,
  a4 as dt,
  f as Ne,
  a8 as Lt,
  r as He,
} from './index-83a5d9f9.js';
import { g as Re } from './main-be93c94c.js';
import { w as qe } from './index-5b18af3d.js';
import { R as ht } from './index-83a1f0ce.js';
import { n as R } from './index-c889ff85.js';
import { D as ye } from './index-16ec1060.js';
import './paths-396f020f.js';
function jt(a) {
  let e, s;
  return {
    c() {
      (e = ve('svg')), (s = ve('path')), this.h();
    },
    l(t) {
      e = _e(t, 'svg', {
        class: !0,
        focusable: !0,
        'aria-hidden': !0,
        xmlns: !0,
        viewBox: !0,
      });
      var n = v(e);
      (s = _e(n, 'path', { d: !0 })), v(s).forEach(u), n.forEach(u), this.h();
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
      D(t, e, n), h(e, s);
    },
    p(t, [n]) {
      n & 1 && ae(e, 'rotated', t[0]);
    },
    i: z,
    o: z,
    d(t) {
      t && u(e);
    },
  };
}
function At(a, e, s) {
  let { rotate: t = !1 } = e;
  return (
    (a.$$set = (n) => {
      'rotate' in n && s(0, (t = n.rotate));
    }),
    [t]
  );
}
class mt extends X {
  constructor(e) {
    super(), x(this, e, At, jt, ee, { rotate: 0 });
  }
}
function Oe(a) {
  let e,
    s,
    t = a[0].primary_section.name + '',
    n,
    l;
  return {
    c() {
      (e = g('a')), (s = g('span')), (n = O(t)), this.h();
    },
    l(r) {
      e = k(r, 'A', { href: !0, class: !0 });
      var i = v(e);
      s = k(i, 'SPAN', { class: !0 });
      var o = v(s);
      (n = U(o, t)), o.forEach(u), i.forEach(u), this.h();
    },
    h() {
      f(s, 'class', 'label svelte-1nyc2e8'),
        f(e, 'href', (l = R(a[0].primary_section.id))),
        f(e, 'class', 'svelte-1nyc2e8');
    },
    m(r, i) {
      D(r, e, i), h(e, s), h(s, n);
    },
    p(r, i) {
      i & 1 && t !== (t = r[0].primary_section.name + '') && Y(n, t),
        i & 1 && l !== (l = R(r[0].primary_section.id)) && f(e, 'href', l);
    },
    d(r) {
      r && u(e);
    },
  };
}
function Ue(a) {
  let e,
    s = Re(a[0].display_time) + '',
    t,
    n;
  return {
    c() {
      (e = g('time')), (t = O(s)), this.h();
    },
    l(l) {
      e = k(l, 'TIME', { datetime: !0, class: !0 });
      var r = v(e);
      (t = U(r, s)), r.forEach(u), this.h();
    },
    h() {
      f(e, 'datetime', (n = a[0].display_time)),
        f(e, 'class', 'svelte-1nyc2e8');
    },
    m(l, r) {
      D(l, e, r), h(e, t);
    },
    p(l, r) {
      r & 1 && s !== (s = Re(l[0].display_time) + '') && Y(t, s),
        r & 1 && n !== (n = l[0].display_time) && f(e, 'datetime', n);
    },
    d(l) {
      l && u(e);
    },
  };
}
function Be(a) {
  let e, s, t, n;
  return {
    c() {
      (e = g('div')), (s = g('img')), this.h();
    },
    l(l) {
      e = k(l, 'DIV', { class: !0 });
      var r = v(e);
      (s = k(r, 'IMG', { src: !0, alt: !0, class: !0 })),
        r.forEach(u),
        this.h();
    },
    h() {
      Ae(s.src, (t = a[2].renditions.square['120w'])) || f(s, 'src', t),
        f(s, 'alt', (n = a[2].alt_text)),
        f(s, 'class', 'svelte-1nyc2e8'),
        f(e, 'class', 'thumbnail svelte-1nyc2e8');
    },
    m(l, r) {
      D(l, e, r), h(e, s);
    },
    p(l, r) {
      r & 4 &&
        !Ae(s.src, (t = l[2].renditions.square['120w'])) &&
        f(s, 'src', t),
        r & 4 && n !== (n = l[2].alt_text) && f(s, 'alt', n);
    },
    d(l) {
      l && u(e);
    },
  };
}
function Nt(a) {
  let e,
    s,
    t,
    n,
    l,
    r = a[0].title + '',
    i,
    o,
    c,
    p,
    d = a[1] && Oe(a),
    S = !a[1] && Ue(a),
    y = a[2] && Be(a);
  return {
    c() {
      (e = g('div')),
        (s = g('a')),
        (t = g('div')),
        d && d.c(),
        (n = V()),
        (l = g('span')),
        (i = O(r)),
        (o = V()),
        S && S.c(),
        (c = V()),
        y && y.c(),
        this.h();
    },
    l(m) {
      e = k(m, 'DIV', { class: !0 });
      var E = v(e);
      s = k(E, 'A', { href: !0, class: !0 });
      var _ = v(s);
      t = k(_, 'DIV', { class: !0 });
      var I = v(t);
      d && d.l(I), (n = L(I)), (l = k(I, 'SPAN', { class: !0 }));
      var $ = v(l);
      (i = U($, r)),
        $.forEach(u),
        (o = L(I)),
        S && S.l(I),
        I.forEach(u),
        (c = L(_)),
        y && y.l(_),
        _.forEach(u),
        E.forEach(u),
        this.h();
    },
    h() {
      f(l, 'class', 'svelte-1nyc2e8'),
        f(t, 'class', 'story-text svelte-1nyc2e8'),
        ae(t, 'has-thumbnail', a[2]),
        f(s, 'href', (p = R(a[0].canonical_url))),
        f(s, 'class', 'svelte-1nyc2e8'),
        f(e, 'class', 'story-card svelte-1nyc2e8');
    },
    m(m, E) {
      D(m, e, E),
        h(e, s),
        h(s, t),
        d && d.m(t, null),
        h(t, n),
        h(t, l),
        h(l, i),
        h(t, o),
        S && S.m(t, null),
        h(s, c),
        y && y.m(s, null);
    },
    p(m, [E]) {
      m[1]
        ? d
          ? d.p(m, E)
          : ((d = Oe(m)), d.c(), d.m(t, n))
        : d && (d.d(1), (d = null)),
        E & 1 && r !== (r = m[0].title + '') && Y(i, r),
        m[1]
          ? S && (S.d(1), (S = null))
          : S
          ? S.p(m, E)
          : ((S = Ue(m)), S.c(), S.m(t, null)),
        E & 4 && ae(t, 'has-thumbnail', m[2]),
        m[2]
          ? y
            ? y.p(m, E)
            : ((y = Be(m)), y.c(), y.m(s, null))
          : y && (y.d(1), (y = null)),
        E & 1 && p !== (p = R(m[0].canonical_url)) && f(s, 'href', p);
    },
    i: z,
    o: z,
    d(m) {
      m && u(e), d && d.d(), S && S.d(), y && y.d();
    },
  };
}
function Ht(a, e, s) {
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
class Rt extends X {
  constructor(e) {
    super(), x(this, e, Ht, Nt, ee, { story: 0, withSection: 1 });
  }
}
function qt(a) {
  let e, s, t;
  return {
    c() {
      (e = g('div')), (s = g('div')), (t = g('div')), this.h();
    },
    l(n) {
      e = k(n, 'DIV', {});
      var l = v(e);
      s = k(l, 'DIV', { class: !0 });
      var r = v(s);
      (t = k(r, 'DIV', { class: !0 })),
        v(t).forEach(u),
        r.forEach(u),
        l.forEach(u),
        this.h();
    },
    h() {
      f(t, 'class', 'spinner svelte-hunvtd'),
        f(s, 'class', 'spinner-container svelte-hunvtd');
    },
    m(n, l) {
      D(n, e, l), h(e, s), h(s, t);
    },
    p: z,
    i: z,
    o: z,
    d(n) {
      n && u(e);
    },
  };
}
class Ot extends X {
  constructor(e) {
    super(), x(this, e, null, qt, ee, {});
  }
}
function Pe(a, e, s) {
  const t = a.slice();
  return (t[7] = e[s]), t;
}
function Ut(a) {
  let e, s, t;
  return (
    (s = new Ot({})),
    {
      c() {
        (e = g('div')), B(s.$$.fragment), this.h();
      },
      l(n) {
        e = k(n, 'DIV', { class: !0 });
        var l = v(e);
        P(s.$$.fragment, l), l.forEach(u), this.h();
      },
      h() {
        f(e, 'class', 'spinner svelte-1v8d80j');
      },
      m(n, l) {
        D(n, e, l), F(s, e, null), (t = !0);
      },
      p: z,
      i(n) {
        t || (T(s.$$.fragment, n), (t = !0));
      },
      o(n) {
        A(s.$$.fragment, n), (t = !1);
      },
      d(n) {
        n && u(e), G(s);
      },
    }
  );
}
function Bt(a) {
  let e,
    s,
    t,
    n,
    l,
    r = a[1],
    i = [];
  for (let c = 0; c < r.length; c += 1) i[c] = Fe(Pe(a, r, c));
  const o = (c) =>
    A(i[c], 1, 1, () => {
      i[c] = null;
    });
  return {
    c() {
      (e = g('span')), (s = O(a[0])), (t = V()), (n = g('ul'));
      for (let c = 0; c < i.length; c += 1) i[c].c();
      this.h();
    },
    l(c) {
      e = k(c, 'SPAN', { class: !0 });
      var p = v(e);
      (s = U(p, a[0])),
        p.forEach(u),
        (t = L(c)),
        (n = k(c, 'UL', { class: !0 }));
      var d = v(n);
      for (let S = 0; S < i.length; S += 1) i[S].l(d);
      d.forEach(u), this.h();
    },
    h() {
      f(e, 'class', 'latest svelte-1v8d80j'),
        f(n, 'class', 'story-list svelte-1v8d80j');
    },
    m(c, p) {
      D(c, e, p), h(e, s), D(c, t, p), D(c, n, p);
      for (let d = 0; d < i.length; d += 1) i[d].m(n, null);
      l = !0;
    },
    p(c, p) {
      if (((!l || p & 1) && Y(s, c[0]), p & 6)) {
        r = c[1];
        let d;
        for (d = 0; d < r.length; d += 1) {
          const S = Pe(c, r, d);
          i[d]
            ? (i[d].p(S, p), T(i[d], 1))
            : ((i[d] = Fe(S)), i[d].c(), T(i[d], 1), i[d].m(n, null));
        }
        for (he(), d = r.length; d < i.length; d += 1) o(d);
        me();
      }
    },
    i(c) {
      if (!l) {
        for (let p = 0; p < r.length; p += 1) T(i[p]);
        l = !0;
      }
    },
    o(c) {
      i = i.filter(Boolean);
      for (let p = 0; p < i.length; p += 1) A(i[p]);
      l = !1;
    },
    d(c) {
      c && u(e), c && u(t), c && u(n), oe(i, c);
    },
  };
}
function Fe(a) {
  let e, s, t, n;
  return (
    (s = new Rt({ props: { story: a[7], withSection: a[2] === 'more' } })),
    {
      c() {
        (e = g('li')), B(s.$$.fragment), (t = V()), this.h();
      },
      l(l) {
        e = k(l, 'LI', { class: !0 });
        var r = v(e);
        P(s.$$.fragment, r), (t = L(r)), r.forEach(u), this.h();
      },
      h() {
        f(e, 'class', 'story-item svelte-1v8d80j');
      },
      m(l, r) {
        D(l, e, r), F(s, e, null), h(e, t), (n = !0);
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
        A(s.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && u(e), G(s);
      },
    }
  );
}
function Pt(a) {
  let e, s, t, n, l, r, i, o, c, p, d;
  const S = a[5].default,
    y = Mt(S, a, a[4], null),
    m = [Bt, Ut],
    E = [];
  function _(I, $) {
    return I[1].length > 0 ? 0 : 1;
  }
  return (
    (c = _(a)),
    (p = E[c] = m[c](a)),
    {
      c() {
        (e = g('div')),
          (s = g('div')),
          (t = g('div')),
          (n = g('div')),
          (l = g('div')),
          y && y.c(),
          (r = V()),
          (i = g('div')),
          (o = g('div')),
          p.c(),
          this.h();
      },
      l(I) {
        e = k(I, 'DIV', { class: !0 });
        var $ = v(e);
        s = k($, 'DIV', { class: !0 });
        var b = v(s);
        t = k(b, 'DIV', { class: !0 });
        var C = v(t);
        n = k(C, 'DIV', { class: !0 });
        var H = v(n);
        l = k(H, 'DIV', { class: !0 });
        var M = v(l);
        y && y.l(M),
          M.forEach(u),
          H.forEach(u),
          (r = L(C)),
          (i = k(C, 'DIV', { class: !0 }));
        var Z = v(i);
        o = k(Z, 'DIV', { class: !0 });
        var W = v(o);
        p.l(W),
          W.forEach(u),
          Z.forEach(u),
          C.forEach(u),
          b.forEach(u),
          $.forEach(u),
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
      m(I, $) {
        D(I, e, $),
          h(e, s),
          h(s, t),
          h(t, n),
          h(n, l),
          y && y.m(l, null),
          h(t, r),
          h(t, i),
          h(i, o),
          E[c].m(o, null),
          (d = !0);
      },
      p(I, [$]) {
        y &&
          y.p &&
          (!d || $ & 16) &&
          St(y, S, I, I[4], d ? Ct(S, I[4], $, null) : Dt(I[4]), null);
        let b = c;
        (c = _(I)),
          c === b
            ? E[c].p(I, $)
            : (he(),
              A(E[b], 1, 1, () => {
                E[b] = null;
              }),
              me(),
              (p = E[c]),
              p ? p.p(I, $) : ((p = E[c] = m[c](I)), p.c()),
              T(p, 1),
              p.m(o, null));
      },
      i(I) {
        d || (T(y, I), T(p), (d = !0));
      },
      o(I) {
        A(y, I), A(p), (d = !1);
      },
      d(I) {
        I && u(e), y && y.d(I), E[c].d();
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
    c = null;
  return (
    Tt(() =>
      je(this, null, function* () {
        c !== t &&
          (t === 'more'
            ? yield fetch(
                'https://www.reuters.com/pf/api/v3/content/fetch/articles-by-trends-v1?' +
                  new URLSearchParams({
                    query: JSON.stringify({ size: 4, website: 'reuters' }),
                  })
              )
                .then((p) => p.json())
                .then((p) => {
                  s(1, (o = p.result.articles)), (c = t);
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
                  s(1, (o = p.result.articles)), (c = t);
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
class vt extends X {
  constructor(e) {
    super(), x(this, e, Ft, Pt, ee, { headingText: 0 });
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
      e = g('ul');
      for (let n = 0; n < t.length; n += 1) t[n].c();
      this.h();
    },
    l(n) {
      e = k(n, 'UL', { class: !0 });
      var l = v(e);
      for (let r = 0; r < t.length; r += 1) t[r].l(l);
      l.forEach(u), this.h();
    },
    h() {
      f(e, 'class', 'sections-group svelte-ksl3iw');
    },
    m(n, l) {
      D(n, e, l);
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
      n && u(e), oe(t, n);
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
      (e = g('li')), (s = g('a')), (n = O(t)), (r = V()), this.h();
    },
    l(i) {
      e = k(i, 'LI', { class: !0 });
      var o = v(e);
      s = k(o, 'A', { class: !0, href: !0 });
      var c = v(s);
      (n = U(c, t)), c.forEach(u), (r = L(o)), o.forEach(u), this.h();
    },
    h() {
      f(s, 'class', 'subsection-link svelte-ksl3iw'),
        f(s, 'href', (l = R(a[3].url))),
        f(e, 'class', 'svelte-ksl3iw');
    },
    m(i, o) {
      D(i, e, o), h(e, s), h(s, n), h(e, r);
    },
    p(i, o) {
      o & 5 && t !== (t = i[3].name + '') && Y(n, t),
        o & 5 && l !== (l = R(i[3].url)) && f(s, 'href', l);
    },
    d(i) {
      i && u(e);
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
      (e = g('li')), (s = g('a')), (n = O(t)), (r = V()), this.h();
    },
    l(i) {
      e = k(i, 'LI', { class: !0 });
      var o = v(e);
      s = k(o, 'A', { class: !0, href: !0 });
      var c = v(s);
      (n = U(c, t)), c.forEach(u), (r = L(o)), o.forEach(u), this.h();
    },
    h() {
      f(s, 'class', 'subsection-link svelte-ksl3iw'),
        f(s, 'href', (l = R(a[3].url))),
        f(e, 'class', 'svelte-ksl3iw');
    },
    m(i, o) {
      D(i, e, o), h(e, s), h(s, n), h(e, r);
    },
    p(i, o) {
      o & 5 && t !== (t = i[3].name + '') && Y(n, t),
        o & 5 && l !== (l = R(i[3].url)) && f(s, 'href', l);
    },
    d(i) {
      i && u(e);
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
    c,
    p,
    d = a[2] > 0 && ze(a),
    S = a[0].children.slice(a[2]),
    y = [];
  for (let m = 0; m < S.length; m += 1) y[m] = Je(Ge(a, S, m));
  return {
    c() {
      (e = g('a')),
        (s = g('span')),
        (t = O('Browse ')),
        (l = O(n)),
        (i = V()),
        (o = g('div')),
        d && d.c(),
        (c = V()),
        (p = g('ul'));
      for (let m = 0; m < y.length; m += 1) y[m].c();
      this.h();
    },
    l(m) {
      e = k(m, 'A', { href: !0 });
      var E = v(e);
      s = k(E, 'SPAN', { class: !0 });
      var _ = v(s);
      (t = U(_, 'Browse ')),
        (l = U(_, n)),
        _.forEach(u),
        E.forEach(u),
        (i = L(m)),
        (o = k(m, 'DIV', { class: !0 }));
      var I = v(o);
      d && d.l(I), (c = L(I)), (p = k(I, 'UL', { class: !0 }));
      var $ = v(p);
      for (let b = 0; b < y.length; b += 1) y[b].l($);
      $.forEach(u), I.forEach(u), this.h();
    },
    h() {
      f(s, 'class', 'heading svelte-ksl3iw'),
        f(e, 'href', (r = R(a[0].url))),
        f(p, 'class', 'sections-group svelte-ksl3iw'),
        f(o, 'class', 'sections svelte-ksl3iw');
    },
    m(m, E) {
      D(m, e, E),
        h(e, s),
        h(s, t),
        h(s, l),
        D(m, i, E),
        D(m, o, E),
        d && d.m(o, null),
        h(o, c),
        h(o, p);
      for (let _ = 0; _ < y.length; _ += 1) y[_].m(p, null);
    },
    p(m, E) {
      if (
        (E & 1 && n !== (n = m[0].name + '') && Y(l, n),
        E & 1 && r !== (r = R(m[0].url)) && f(e, 'href', r),
        m[2] > 0
          ? d
            ? d.p(m, E)
            : ((d = ze(m)), d.c(), d.m(o, c))
          : d && (d.d(1), (d = null)),
        E & 5)
      ) {
        S = m[0].children.slice(m[2]);
        let _;
        for (_ = 0; _ < S.length; _ += 1) {
          const I = Ge(m, S, _);
          y[_] ? y[_].p(I, E) : ((y[_] = Je(I)), y[_].c(), y[_].m(p, null));
        }
        for (; _ < y.length; _ += 1) y[_].d(1);
        y.length = S.length;
      }
    },
    d(m) {
      m && u(e), m && u(i), m && u(o), d && d.d(), oe(y, m);
    },
  };
}
function Zt(a) {
  let e, s;
  return (
    (e = new vt({
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
        F(e, t, n), (s = !0);
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
        A(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        G(e, t);
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
class Wt extends X {
  constructor(e) {
    super(), x(this, e, zt, Zt, ee, { section: 0, headingText: 1 });
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
      e = g('ul');
      for (let n = 0; n < t.length; n += 1) t[n].c();
      this.h();
    },
    l(n) {
      e = k(n, 'UL', { class: !0 });
      var l = v(e);
      for (let r = 0; r < t.length; r += 1) t[r].l(l);
      l.forEach(u), this.h();
    },
    h() {
      f(e, 'class', 'subsections svelte-b74xfp');
    },
    m(n, l) {
      D(n, e, l);
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
      n && u(e), oe(t, n);
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
      (e = g('li')), (s = g('a')), (n = O(t)), (r = V()), this.h();
    },
    l(i) {
      e = k(i, 'LI', {});
      var o = v(e);
      s = k(o, 'A', { class: !0, href: !0 });
      var c = v(s);
      (n = U(c, t)), c.forEach(u), (r = L(o)), o.forEach(u), this.h();
    },
    h() {
      f(s, 'class', 'subsection-link svelte-b74xfp'),
        f(s, 'href', (l = R(a[4].url)));
    },
    m(i, o) {
      D(i, e, o), h(e, s), h(s, n), h(e, r);
    },
    p(i, o) {
      o & 1 && t !== (t = i[4].name + '') && Y(n, t),
        o & 1 && l !== (l = R(i[4].url)) && f(s, 'href', l);
    },
    d(i) {
      i && u(e);
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
      (e = g('section')),
        (s = g('a')),
        (n = O(t)),
        (r = V()),
        o && o.c(),
        (i = V()),
        this.h();
    },
    l(c) {
      e = k(c, 'SECTION', { class: !0 });
      var p = v(e);
      s = k(p, 'A', { href: !0, class: !0 });
      var d = v(s);
      (n = U(d, t)),
        d.forEach(u),
        (r = L(p)),
        o && o.l(p),
        (i = L(p)),
        p.forEach(u),
        this.h();
    },
    h() {
      f(s, 'href', (l = R(a[1].url))),
        f(s, 'class', 'section-link svelte-b74xfp'),
        f(e, 'class', 'more-section-group svelte-b74xfp'),
        ae(e, 'has-children', a[1].children);
    },
    m(c, p) {
      D(c, e, p), h(e, s), h(s, n), h(e, r), o && o.m(e, null), h(e, i);
    },
    p(c, p) {
      p & 1 && t !== (t = c[1].name + '') && Y(n, t),
        p & 1 && l !== (l = R(c[1].url)) && f(s, 'href', l),
        c[1].children
          ? o
            ? o.p(c, p)
            : ((o = Qe(c)), o.c(), o.m(e, i))
          : o && (o.d(1), (o = null)),
        p & 1 && ae(e, 'has-children', c[1].children);
    },
    d(c) {
      c && u(e), o && o.d();
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
      (e = g('div')), (s = g('div'));
      for (let l = 0; l < n.length; l += 1) n[l].c();
      this.h();
    },
    l(l) {
      e = k(l, 'DIV', { class: !0 });
      var r = v(e);
      s = k(r, 'DIV', { class: !0 });
      var i = v(s);
      for (let o = 0; o < n.length; o += 1) n[o].l(i);
      i.forEach(u), r.forEach(u), this.h();
    },
    h() {
      f(s, 'class', 'groupContainer'),
        f(e, 'class', 'more-sections svelte-b74xfp');
    },
    m(l, r) {
      D(l, e, r), h(e, s);
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
      l && u(e), oe(n, l);
    },
  };
}
function Kt(a) {
  let e, s;
  return (
    (e = new vt({
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
        F(e, t, n), (s = !0);
      },
      p(t, [n]) {
        const l = {};
        n & 129 && (l.$$scope = { dirty: n, ctx: t }), e.$set(l);
      },
      i(t) {
        s || (T(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        A(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        G(e, t);
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
class Qt extends X {
  constructor(e) {
    super(), x(this, e, Yt, Kt, ee, { sections: 0 });
  }
}
function et(a, e, s) {
  const t = a.slice();
  return (t[19] = e[s]), t;
}
function Xt(a) {
  let e,
    s,
    t,
    n = a[19].name + '',
    l,
    r;
  return {
    c() {
      (e = g('li')), (s = g('div')), (t = g('a')), (l = O(n)), this.h();
    },
    l(i) {
      e = k(i, 'LI', { class: !0 });
      var o = v(e);
      s = k(o, 'DIV', { class: !0 });
      var c = v(s);
      t = k(c, 'A', { href: !0, class: !0 });
      var p = v(t);
      (l = U(p, n)), p.forEach(u), c.forEach(u), o.forEach(u), this.h();
    },
    h() {
      f(t, 'href', (r = R(a[19].url))),
        f(t, 'class', 'svelte-1q11xjy'),
        f(s, 'class', 'nav-button link svelte-1q11xjy'),
        f(e, 'class', 'nav-item category link svelte-1q11xjy');
    },
    m(i, o) {
      D(i, e, o), h(e, s), h(s, t), h(t, l);
    },
    p(i, o) {
      o & 4 && n !== (n = i[19].name + '') && Y(l, n),
        o & 4 && r !== (r = R(i[19].url)) && f(t, 'href', r);
    },
    i: z,
    o: z,
    d(i) {
      i && u(e);
    },
  };
}
function xt(a) {
  let e,
    s,
    t,
    n = a[19].name + '',
    l,
    r,
    i,
    o,
    c,
    p,
    d,
    S,
    y;
  c = new mt({ props: { rotate: a[19].id === a[3] } });
  let m = a[3] === a[19].id && tt(a);
  function E() {
    return a[9](a[19]);
  }
  function _() {
    return a[10](a[19]);
  }
  function I() {
    return a[13](a[19]);
  }
  return {
    c() {
      (e = g('li')),
        (s = g('div')),
        (t = g('a')),
        (l = O(n)),
        (i = V()),
        (o = g('button')),
        B(c.$$.fragment),
        (p = V()),
        m && m.c(),
        this.h();
    },
    l($) {
      e = k($, 'LI', { class: !0 });
      var b = v(e);
      s = k(b, 'DIV', { class: !0 });
      var C = v(s);
      t = k(C, 'A', { href: !0, class: !0 });
      var H = v(t);
      (l = U(H, n)),
        H.forEach(u),
        (i = L(C)),
        (o = k(C, 'BUTTON', { class: !0 }));
      var M = v(o);
      P(c.$$.fragment, M),
        M.forEach(u),
        C.forEach(u),
        (p = L(b)),
        m && m.l(b),
        b.forEach(u),
        this.h();
    },
    h() {
      f(t, 'href', (r = R(a[19].url))),
        f(t, 'class', 'svelte-1q11xjy'),
        f(o, 'class', 'button svelte-1q11xjy'),
        f(s, 'class', 'nav-button link svelte-1q11xjy'),
        ae(s, 'open', a[19].id === a[3]),
        f(e, 'class', 'nav-item category link svelte-1q11xjy');
    },
    m($, b) {
      D($, e, b),
        h(e, s),
        h(s, t),
        h(t, l),
        h(s, i),
        h(s, o),
        F(c, o, null),
        h(e, p),
        m && m.m(e, null),
        (d = !0),
        S ||
          ((y = [
            K(e, 'mouseenter', E),
            K(e, 'focus', _),
            K(e, 'mouseleave', a[11]),
            K(e, 'blur', a[12]),
            K(e, 'click', I),
          ]),
          (S = !0));
    },
    p($, b) {
      (a = $),
        (!d || b & 4) && n !== (n = a[19].name + '') && Y(l, n),
        (!d || (b & 4 && r !== (r = R(a[19].url)))) && f(t, 'href', r);
      const C = {};
      b & 12 && (C.rotate = a[19].id === a[3]),
        c.$set(C),
        b & 12 && ae(s, 'open', a[19].id === a[3]),
        a[3] === a[19].id
          ? m
            ? (m.p(a, b), b & 12 && T(m, 1))
            : ((m = tt(a)), m.c(), T(m, 1), m.m(e, null))
          : m &&
            (he(),
            A(m, 1, 1, () => {
              m = null;
            }),
            me());
    },
    i($) {
      d || (T(c.$$.fragment, $), T(m), (d = !0));
    },
    o($) {
      A(c.$$.fragment, $), A(m), (d = !1);
    },
    d($) {
      $ && u(e), G(c), m && m.d(), (S = !1), dt(y);
    },
  };
}
function tt(a) {
  let e, s;
  return (
    (e = new Wt({
      props: { section: a[19], headingText: `Latest in ${a[19].name}` },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(t) {
        P(e.$$.fragment, t);
      },
      m(t, n) {
        F(e, t, n), (s = !0);
      },
      p(t, n) {
        const l = {};
        n & 4 && (l.section = t[19]),
          n & 4 && (l.headingText = `Latest in ${t[19].name}`),
          e.$set(l);
      },
      i(t) {
        s || (T(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        A(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        G(e, t);
      },
    }
  );
}
function st(a) {
  let e, s, t, n;
  const l = [xt, Xt],
    r = [];
  function i(o, c) {
    return o[19].children ? 0 : 1;
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
      m(o, c) {
        r[e].m(o, c), D(o, t, c), (n = !0);
      },
      p(o, c) {
        let p = e;
        (e = i(o)),
          e === p
            ? r[e].p(o, c)
            : (he(),
              A(r[p], 1, 1, () => {
                r[p] = null;
              }),
              me(),
              (s = r[e]),
              s ? s.p(o, c) : ((s = r[e] = l[e](o)), s.c()),
              T(s, 1),
              s.m(t.parentNode, t));
      },
      i(o) {
        n || (T(s), (n = !0));
      },
      o(o) {
        A(s), (n = !1);
      },
      d(o) {
        r[e].d(o), o && u(t);
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
        F(e, t, n), (s = !0);
      },
      p(t, n) {
        const l = {};
        n & 2 && (l.sections = t[1]), e.$set(l);
      },
      i(t) {
        s || (T(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        A(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        G(e, t);
      },
    }
  );
}
function es(a) {
  let e, s, t, n, l, r, i, o, c, p, d, S, y, m;
  Vt(a[8]);
  let E = a[2],
    _ = [];
  for (let b = 0; b < E.length; b += 1) _[b] = st(et(a, E, b));
  const I = (b) =>
    A(_[b], 1, 1, () => {
      _[b] = null;
    });
  p = new mt({ props: { rotate: a[3] === 'more' } });
  let $ = a[3] === 'more' && nt(a);
  return {
    c() {
      (e = g('div')), (s = g('nav')), (t = g('ul'));
      for (let b = 0; b < _.length; b += 1) _[b].c();
      (n = V()),
        (l = g('li')),
        (r = g('div')),
        (i = g('button')),
        (o = g('span')),
        (c = O('More ')),
        B(p.$$.fragment),
        (d = V()),
        $ && $.c(),
        this.h();
    },
    l(b) {
      e = k(b, 'DIV', { class: !0 });
      var C = v(e);
      s = k(C, 'NAV', { 'aria-label': !0 });
      var H = v(s);
      t = k(H, 'UL', { class: !0 });
      var M = v(t);
      for (let q = 0; q < _.length; q += 1) _[q].l(M);
      (n = L(M)), (l = k(M, 'LI', { class: !0 }));
      var Z = v(l);
      r = k(Z, 'DIV', { class: !0 });
      var W = v(r);
      i = k(W, 'BUTTON', { class: !0 });
      var J = v(i);
      o = k(J, 'SPAN', { class: !0 });
      var N = v(o);
      (c = U(N, 'More ')),
        P(p.$$.fragment, N),
        N.forEach(u),
        J.forEach(u),
        W.forEach(u),
        (d = L(Z)),
        $ && $.l(Z),
        Z.forEach(u),
        M.forEach(u),
        H.forEach(u),
        C.forEach(u),
        this.h();
    },
    h() {
      f(o, 'class', 'svelte-1q11xjy'),
        f(i, 'class', 'button svelte-1q11xjy'),
        f(r, 'class', 'nav-button more link svelte-1q11xjy'),
        ae(r, 'open', a[3] === 'more'),
        f(l, 'class', 'nav-item svelte-1q11xjy'),
        f(t, 'class', 'nav-list svelte-1q11xjy'),
        f(s, 'aria-label', 'Main navigation'),
        f(e, 'class', 'nav-bar svelte-1q11xjy');
    },
    m(b, C) {
      D(b, e, C), h(e, s), h(s, t);
      for (let H = 0; H < _.length; H += 1) _[H].m(t, null);
      h(t, n),
        h(t, l),
        h(l, r),
        h(r, i),
        h(i, o),
        h(o, c),
        F(p, o, null),
        h(l, d),
        $ && $.m(l, null),
        (S = !0),
        y ||
          ((m = [
            K(window, 'resize', a[8]),
            K(l, 'mouseenter', a[14]),
            K(l, 'focus', a[15]),
            K(l, 'mouseleave', a[16]),
            K(l, 'blur', a[17]),
            K(l, 'click', a[18]),
          ]),
          (y = !0));
    },
    p(b, [C]) {
      if (C & 28) {
        E = b[2];
        let M;
        for (M = 0; M < E.length; M += 1) {
          const Z = et(b, E, M);
          _[M]
            ? (_[M].p(Z, C), T(_[M], 1))
            : ((_[M] = st(Z)), _[M].c(), T(_[M], 1), _[M].m(t, n));
        }
        for (he(), M = E.length; M < _.length; M += 1) I(M);
        me();
      }
      const H = {};
      C & 8 && (H.rotate = b[3] === 'more'),
        p.$set(H),
        C & 8 && ae(r, 'open', b[3] === 'more'),
        b[3] === 'more'
          ? $
            ? ($.p(b, C), C & 8 && T($, 1))
            : (($ = nt(b)), $.c(), T($, 1), $.m(l, null))
          : $ &&
            (he(),
            A($, 1, 1, () => {
              $ = null;
            }),
            me());
    },
    i(b) {
      if (!S) {
        for (let C = 0; C < E.length; C += 1) T(_[C]);
        T(p.$$.fragment, b), T($), (S = !0);
      }
    },
    o(b) {
      _ = _.filter(Boolean);
      for (let C = 0; C < _.length; C += 1) A(_[C]);
      A(p.$$.fragment, b), A($), (S = !1);
    },
    d(b) {
      b && u(e), oe(_, b), G(p), $ && $.d(), (y = !1), dt(m);
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
  const c = ft('nav-active-section');
  pt(a, c, (M) => s(3, (i = M)));
  let p = 1200;
  function d() {
    s(0, (p = window.innerWidth));
  }
  const S = (M) => c.set(M.id),
    y = (M) => c.set(M.id),
    m = () => c.set(null),
    E = () => c.set(null),
    _ = (M) => {
      i === M.id && c.set(null);
    },
    I = () => c.set('more'),
    $ = () => c.set('more'),
    b = () => c.set(null),
    C = () => c.set(null),
    H = () => {
      i === 'more' && c.set(null);
    };
  return (
    (a.$$set = (M) => {
      'sections' in M && s(5, (o = M.sections));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 1 && s(7, (t = () => (p >= 1300 ? 7 : 5))),
        a.$$.dirty & 128 && s(6, (n = t())),
        a.$$.dirty & 96 && s(2, (l = o.slice(0, n))),
        a.$$.dirty & 96 && s(1, (r = o.slice(n)));
    }),
    [p, r, l, i, c, o, n, t, d, S, y, m, E, _, I, $, b, C, H]
  );
}
class ss extends X {
  constructor(e) {
    super(), x(this, e, ts, es, ee, { sections: 5 });
  }
}
var _t = [
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
      (e = ve('svg')), (s = ve('path')), this.h();
    },
    l(t) {
      e = _e(t, 'svg', {
        xmlns: !0,
        viewBox: !0,
        'aria-hidden': !0,
        focusable: !0,
        style: !0,
        class: !0,
      });
      var n = v(e);
      (s = _e(n, 'path', { d: !0 })), v(s).forEach(u), n.forEach(u), this.h();
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
        Ne(e, 'width', a[0] + 'px'),
        f(e, 'class', 'svelte-17648ki');
    },
    m(t, n) {
      D(t, e, n), h(e, s);
    },
    p(t, [n]) {
      n & 1 && Ne(e, 'width', t[0] + 'px');
    },
    i: z,
    o: z,
    d(t) {
      t && u(e);
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
class ls extends X {
  constructor(e) {
    super(), x(this, e, as, ns, ee, { width: 0 });
  }
}
function rs(a) {
  let e, s;
  return {
    c() {
      (e = ve('svg')), (s = ve('path')), this.h();
    },
    l(t) {
      e = _e(t, 'svg', {
        'aria-hidden': !0,
        focusable: !0,
        width: !0,
        height: !0,
        xmlns: !0,
        class: !0,
      });
      var n = v(e);
      (s = _e(n, 'path', { d: !0, 'fill-rule': !0 })),
        v(s).forEach(u),
        n.forEach(u),
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
      D(t, e, n), h(e, s);
    },
    p: z,
    i: z,
    o: z,
    d(t) {
      t && u(e);
    },
  };
}
class is extends X {
  constructor(e) {
    super(), x(this, e, null, rs, ee, {});
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
  let e, s, t, n, l, r, i, o, c, p, d, S, y;
  (n = new ht({
    props: { logoColour: a[1].accent, textColour: a[1].primary },
  })),
    (o = new is({}));
  let m = a[0].sections,
    E = [];
  for (let _ = 0; _ < m.length; _ += 1) E[_] = ct(at(a, m, _));
  return {
    c() {
      (e = g('div')),
        (s = g('header')),
        (t = g('div')),
        B(n.$$.fragment),
        (l = V()),
        (r = g('button')),
        (i = g('div')),
        B(o.$$.fragment),
        (c = V());
      for (let _ = 0; _ < E.length; _ += 1) E[_].c();
      this.h();
    },
    l(_) {
      e = k(_, 'DIV', { class: !0, 'aria-modal': !0, style: !0 });
      var I = v(e);
      s = k(I, 'HEADER', { class: !0 });
      var $ = v(s);
      t = k($, 'DIV', { class: !0 });
      var b = v(t);
      P(n.$$.fragment, b),
        b.forEach(u),
        (l = L($)),
        (r = k($, 'BUTTON', { class: !0 }));
      var C = v(r);
      i = k(C, 'DIV', { class: !0 });
      var H = v(i);
      P(o.$$.fragment, H), H.forEach(u), C.forEach(u), $.forEach(u), (c = L(I));
      for (let M = 0; M < E.length; M += 1) E[M].l(I);
      I.forEach(u), this.h();
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
    m(_, I) {
      D(_, e, I),
        h(e, s),
        h(s, t),
        F(n, t, null),
        h(s, l),
        h(s, r),
        h(r, i),
        F(o, i, null),
        h(e, c);
      for (let $ = 0; $ < E.length; $ += 1) E[$].m(e, null);
      (d = !0),
        S ||
          ((y = K(r, 'click', function () {
            Lt(a[3]) && a[3].apply(this, arguments);
          })),
          (S = !0));
    },
    p(_, I) {
      a = _;
      const $ = {};
      if (
        (I & 2 && ($.logoColour = a[1].accent),
        I & 2 && ($.textColour = a[1].primary),
        n.$set($),
        I & 1)
      ) {
        m = a[0].sections;
        let b;
        for (b = 0; b < m.length; b += 1) {
          const C = at(a, m, b);
          E[b] ? E[b].p(C, I) : ((E[b] = ct(C)), E[b].c(), E[b].m(e, null));
        }
        for (; b < E.length; b += 1) E[b].d(1);
        E.length = m.length;
      }
      (!d ||
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
    i(_) {
      d || (T(n.$$.fragment, _), T(o.$$.fragment, _), (d = !0));
    },
    o(_) {
      A(n.$$.fragment, _), A(o.$$.fragment, _), (d = !1);
    },
    d(_) {
      _ && u(e), G(n), G(o), oe(E, _), (S = !1), y();
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
      e = g('ul');
      for (let n = 0; n < t.length; n += 1) t[n].c();
      this.h();
    },
    l(n) {
      e = k(n, 'UL', { class: !0 });
      var l = v(e);
      for (let r = 0; r < t.length; r += 1) t[r].l(l);
      l.forEach(u), this.h();
    },
    h() {
      f(e, 'class', 'subsections svelte-1tpcugt');
    },
    m(n, l) {
      D(n, e, l);
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
      n && u(e), oe(t, n);
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
      (e = g('li')), (s = g('a')), (n = O(t)), (r = V()), this.h();
    },
    l(i) {
      e = k(i, 'LI', {});
      var o = v(e);
      s = k(o, 'A', { class: !0, href: !0 });
      var c = v(s);
      (n = U(c, t)), c.forEach(u), (r = L(o)), o.forEach(u), this.h();
    },
    h() {
      f(s, 'class', 'subsection-link svelte-1tpcugt'),
        f(s, 'href', (l = R(a[7].url)));
    },
    m(i, o) {
      D(i, e, o), h(e, s), h(s, n), h(e, r);
    },
    p(i, o) {
      o & 1 && t !== (t = i[7].name + '') && Y(n, t),
        o & 1 && l !== (l = R(i[7].url)) && f(s, 'href', l);
    },
    d(i) {
      i && u(e);
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
      (e = g('section')),
        (s = g('a')),
        (n = O(t)),
        (r = V()),
        o && o.c(),
        (i = V()),
        this.h();
    },
    l(c) {
      e = k(c, 'SECTION', { class: !0 });
      var p = v(e);
      s = k(p, 'A', { class: !0, href: !0 });
      var d = v(s);
      (n = U(d, t)),
        d.forEach(u),
        (r = L(p)),
        o && o.l(p),
        (i = L(p)),
        p.forEach(u),
        this.h();
    },
    h() {
      f(s, 'class', 'section-link svelte-1tpcugt'),
        f(s, 'href', (l = R(a[4].url))),
        f(e, 'class', 'section svelte-1tpcugt');
    },
    m(c, p) {
      D(c, e, p), h(e, s), h(s, n), h(e, r), o && o.m(e, null), h(e, i);
    },
    p(c, p) {
      p & 1 && t !== (t = c[4].name + '') && Y(n, t),
        p & 1 && l !== (l = R(c[4].url)) && f(s, 'href', l),
        c[4].children
          ? o
            ? o.p(c, p)
            : ((o = it(c)), o.c(), o.m(e, i))
          : o && (o.d(1), (o = null));
    },
    d(c) {
      c && u(e), o && o.d();
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
      t && t.m(n, l), D(n, e, l), (s = !0);
    },
    p(n, [l]) {
      n[2]
        ? t
          ? (t.p(n, l), l & 4 && T(t, 1))
          : ((t = rt(n)), t.c(), T(t, 1), t.m(e.parentNode, e))
        : t &&
          (he(),
          A(t, 1, 1, () => {
            t = null;
          }),
          me());
    },
    i(n) {
      s || (T(t), (s = !0));
    },
    o(n) {
      A(t), (s = !1);
    },
    d(n) {
      t && t.d(n), n && u(e);
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
class us extends X {
  constructor(e) {
    super(),
      x(this, e, cs, os, ee, {
        data: 0,
        theme: 1,
        isMobileMenuOpen: 2,
        releaseMobileMenu: 3,
      });
  }
}
function fs(a) {
  let e, s, t, n, l, r, i, o, c, p, d, S, y, m, E, _, I, $, b, C, H, M, Z, W, J;
  return (
    (c = new ht({
      props: { logoColour: a[1].accent, textColour: a[1].primary },
    })),
    (d = new ss({ props: { sections: a[2] } })),
    (C = new ls({})),
    (M = new us({
      props: {
        theme: a[1],
        isMobileMenuOpen: a[0],
        releaseMobileMenu: a[5],
        data: _t[0],
      },
    })),
    {
      c() {
        (e = g('header')),
          (s = g('div')),
          (t = g('div')),
          (n = g('div')),
          (l = g('div')),
          (r = g('div')),
          (i = g('div')),
          (o = g('a')),
          B(c.$$.fragment),
          (p = V()),
          B(d.$$.fragment),
          (S = V()),
          (y = g('div')),
          (m = g('div')),
          (E = V()),
          (_ = g('div')),
          (I = g('div')),
          ($ = g('button')),
          (b = g('div')),
          B(C.$$.fragment),
          (H = V()),
          B(M.$$.fragment),
          this.h();
      },
      l(N) {
        e = k(N, 'HEADER', { style: !0 });
        var q = v(e);
        s = k(q, 'DIV', { class: !0 });
        var te = v(s);
        t = k(te, 'DIV', { class: !0 });
        var le = v(t);
        n = k(le, 'DIV', { class: !0 });
        var ie = v(n);
        l = k(ie, 'DIV', { class: !0 });
        var Q = v(l);
        r = k(Q, 'DIV', { class: !0 });
        var ce = v(r);
        i = k(ce, 'DIV', { class: !0 });
        var ne = v(i);
        o = k(ne, 'A', { href: !0 });
        var be = v(o);
        P(c.$$.fragment, be),
          be.forEach(u),
          ne.forEach(u),
          ce.forEach(u),
          (p = L(Q)),
          P(d.$$.fragment, Q),
          (S = L(Q)),
          (y = k(Q, 'DIV', { class: !0 }));
        var ue = v(y);
        (m = k(ue, 'DIV', { class: !0 })),
          v(m).forEach(u),
          ue.forEach(u),
          (E = L(Q)),
          (_ = k(Q, 'DIV', { class: !0 }));
        var se = v(_);
        I = k(se, 'DIV', { class: !0 });
        var fe = v(I);
        $ = k(fe, 'BUTTON', {
          class: !0,
          'aria-label': !0,
          'aria-haspopup': !0,
          'aria-expanded': !0,
        });
        var re = v($);
        b = k(re, 'DIV', { class: !0 });
        var pe = v(b);
        P(C.$$.fragment, pe),
          pe.forEach(u),
          re.forEach(u),
          fe.forEach(u),
          se.forEach(u),
          Q.forEach(u),
          ie.forEach(u),
          le.forEach(u),
          te.forEach(u),
          q.forEach(u),
          (H = L(N)),
          P(M.$$.fragment, N),
          this.h();
      },
      h() {
        f(o, 'href', 'https://www.reuters.com'),
          f(i, 'class', 'logo svelte-1h3e93v'),
          f(r, 'class', 'logo-container svelte-1h3e93v'),
          f(m, 'class', 'spacer svelte-1h3e93v'),
          f(y, 'class', 'spacer-container svelte-1h3e93v'),
          f(b, 'class', 'button-container svelte-1h3e93v'),
          f($, 'class', 'menu-button svelte-1h3e93v'),
          f($, 'aria-label', 'Menu'),
          f($, 'aria-haspopup', 'true'),
          f($, 'aria-expanded', a[0]),
          f(I, 'class', 'mobile-menu svelte-1h3e93v'),
          f(_, 'class', 'mobile-button-group svelte-1h3e93v'),
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
      m(N, q) {
        D(N, e, q),
          h(e, s),
          h(s, t),
          h(t, n),
          h(n, l),
          h(l, r),
          h(r, i),
          h(i, o),
          F(c, o, null),
          h(l, p),
          F(d, l, null),
          h(l, S),
          h(l, y),
          h(y, m),
          h(l, E),
          h(l, _),
          h(_, I),
          h(I, $),
          h($, b),
          F(C, b, null),
          D(N, H, q),
          F(M, N, q),
          (Z = !0),
          W || ((J = K($, 'click', a[4])), (W = !0));
      },
      p(N, [q]) {
        (!Z || q & 1) && f($, 'aria-expanded', N[0]);
        const te = {};
        q & 1 && (te.isMobileMenuOpen = N[0]),
          q & 1 && (te.releaseMobileMenu = N[5]),
          M.$set(te);
      },
      i(N) {
        Z ||
          (T(c.$$.fragment, N),
          T(d.$$.fragment, N),
          T(C.$$.fragment, N),
          T(M.$$.fragment, N),
          (Z = !0));
      },
      o(N) {
        A(c.$$.fragment, N),
          A(d.$$.fragment, N),
          A(C.$$.fragment, N),
          A(M.$$.fragment, N),
          (Z = !1);
      },
      d(N) {
        N && u(e), G(c), G(d), G(C), N && u(H), G(M, N), (W = !1), J();
      },
    }
  );
}
const Ee = {
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
  const n = $e($e({}, Ee.default), t);
  He('nav-theme', qe(n)), He('nav-active-section', qe(null));
  const { sections: l } = _t[0];
  let r = !1;
  const i = () => {
      s(0, (r = !r));
    },
    o = () => {
      s(0, (r = !1));
    };
  return (
    (a.$$set = (c) => {
      'theme' in c && s(3, (t = c.theme));
    }),
    [r, n, l, t, i, o]
  );
}
class Ie extends X {
  constructor(e) {
    super(), x(this, e, ps, fs, ee, { theme: 3 });
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
        F(e, t, n), (s = !0);
      },
      i(t) {
        s || (T(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        A(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        G(e, t);
      },
    }
  );
}
function hs(a) {
  let e, s;
  return (
    (e = new Ie({ props: { theme: Ee.dark } })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(t) {
        P(e.$$.fragment, t);
      },
      m(t, n) {
        F(e, t, n), (s = !0);
      },
      p: z,
      i(t) {
        s || (T(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        A(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        G(e, t);
      },
    }
  );
}
function ms(a) {
  let e, s;
  return (
    (e = new Ie({
      props: {
        theme: Le($e({}, Ee.default), { background: '#e0d3b8', rules: '#aaa' }),
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
        F(e, t, n), (s = !0);
      },
      p: z,
      i(t) {
        s || (T(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        A(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        G(e, t);
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
    c,
    p,
    d,
    S = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteHeader <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteHeader</span> <span class="token punctuation">/></span></span></code>`,
    y,
    m,
    E,
    _,
    I,
    $,
    b,
    C,
    H,
    M,
    Z = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteHeader<span class="token punctuation">,</span> SiteHeaderThemes <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteHeader</span> <span class="token attr-name">theme=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>SiteHeaderThemes<span class="token punctuation">.</span>dark<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,
    W,
    J,
    N,
    q,
    te,
    le,
    ie,
    Q,
    ce,
    ne,
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
    ue,
    se,
    fe,
    re,
    pe;
  return (
    (m = new ye({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [ds] },
        $$scope: { ctx: a },
      },
    })),
    (J = new ye({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [hs] },
        $$scope: { ctx: a },
      },
    })),
    (se = new ye({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [ms] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        (e = g('section')),
          (s = g('h2')),
          (t = O(ut)),
          (n = V()),
          (l = g('p')),
          (r = O('Reuters dotcom site header, ported from ')),
          (i = g('a')),
          (o = O('Raptor UI components')),
          (c = O('.')),
          (p = V()),
          (d = g('pre')),
          (y = V()),
          B(m.$$.fragment),
          (E = V()),
          (_ = g('div')),
          (I = V()),
          ($ = g('section')),
          (b = g('p')),
          (C = O('Change colours with exported themes.')),
          (H = V()),
          (M = g('pre')),
          (W = V()),
          B(J.$$.fragment),
          (N = V()),
          (q = g('div')),
          (te = V()),
          (le = g('section')),
          (ie = g('p')),
          (Q = O('Customise a colour theme.')),
          (ce = V()),
          (ne = g('pre')),
          (ue = V()),
          B(se.$$.fragment),
          (fe = V()),
          (re = g('div')),
          this.h();
      },
      l(w) {
        e = k(w, 'SECTION', {});
        var j = v(e);
        s = k(j, 'H2', {});
        var ge = v(s);
        (t = U(ge, ut)), ge.forEach(u), (n = L(j)), (l = k(j, 'P', {}));
        var de = v(l);
        (r = U(de, 'Reuters dotcom site header, ported from ')),
          (i = k(de, 'A', { href: !0, rel: !0 }));
        var ke = v(i);
        (o = U(ke, 'Raptor UI components')),
          ke.forEach(u),
          (c = U(de, '.')),
          de.forEach(u),
          j.forEach(u),
          (p = L(w)),
          (d = k(w, 'PRE', { class: !0 }));
        var gt = v(d);
        gt.forEach(u),
          (y = L(w)),
          P(m.$$.fragment, w),
          (E = L(w)),
          (_ = k(w, 'DIV', { class: !0 })),
          v(_).forEach(u),
          (I = L(w)),
          ($ = k(w, 'SECTION', {}));
        var Me = v($);
        b = k(Me, 'P', {});
        var Se = v(b);
        (C = U(Se, 'Change colours with exported themes.')),
          Se.forEach(u),
          Me.forEach(u),
          (H = L(w)),
          (M = k(w, 'PRE', { class: !0 }));
        var kt = v(M);
        kt.forEach(u),
          (W = L(w)),
          P(J.$$.fragment, w),
          (N = L(w)),
          (q = k(w, 'DIV', { class: !0 })),
          v(q).forEach(u),
          (te = L(w)),
          (le = k(w, 'SECTION', {}));
        var De = v(le);
        ie = k(De, 'P', {});
        var Ce = v(ie);
        (Q = U(Ce, 'Customise a colour theme.')),
          Ce.forEach(u),
          De.forEach(u),
          (ce = L(w)),
          (ne = k(w, 'PRE', { class: !0 }));
        var bt = v(ne);
        bt.forEach(u),
          (ue = L(w)),
          P(se.$$.fragment, w),
          (fe = L(w)),
          (re = k(w, 'DIV', { class: !0 })),
          v(re).forEach(u),
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
          f(_, 'class', 'spacer svelte-1ess2x0'),
          f(M, 'class', 'language-svelte'),
          f(q, 'class', 'spacer svelte-1ess2x0'),
          f(ne, 'class', 'language-svelte'),
          f(re, 'class', 'spacer svelte-1ess2x0');
      },
      m(w, j) {
        D(w, e, j),
          h(e, s),
          h(s, t),
          h(e, n),
          h(e, l),
          h(l, r),
          h(l, i),
          h(i, o),
          h(l, c),
          D(w, p, j),
          D(w, d, j),
          (d.innerHTML = S),
          D(w, y, j),
          F(m, w, j),
          D(w, E, j),
          D(w, _, j),
          D(w, I, j),
          D(w, $, j),
          h($, b),
          h(b, C),
          D(w, H, j),
          D(w, M, j),
          (M.innerHTML = Z),
          D(w, W, j),
          F(J, w, j),
          D(w, N, j),
          D(w, q, j),
          D(w, te, j),
          D(w, le, j),
          h(le, ie),
          h(ie, Q),
          D(w, ce, j),
          D(w, ne, j),
          (ne.innerHTML = be),
          D(w, ue, j),
          F(se, w, j),
          D(w, fe, j),
          D(w, re, j),
          (pe = !0);
      },
      p(w, [j]) {
        const ge = {};
        j & 1 && (ge.$$scope = { dirty: j, ctx: w }), m.$set(ge);
        const de = {};
        j & 1 && (de.$$scope = { dirty: j, ctx: w }), J.$set(de);
        const ke = {};
        j & 1 && (ke.$$scope = { dirty: j, ctx: w }), se.$set(ke);
      },
      i(w) {
        pe ||
          (T(m.$$.fragment, w),
          T(J.$$.fragment, w),
          T(se.$$.fragment, w),
          (pe = !0));
      },
      o(w) {
        A(m.$$.fragment, w),
          A(J.$$.fragment, w),
          A(se.$$.fragment, w),
          (pe = !1);
      },
      d(w) {
        w && u(e),
          w && u(p),
          w && u(d),
          w && u(y),
          G(m, w),
          w && u(E),
          w && u(_),
          w && u(I),
          w && u($),
          w && u(H),
          w && u(M),
          w && u(W),
          G(J, w),
          w && u(N),
          w && u(q),
          w && u(te),
          w && u(le),
          w && u(ce),
          w && u(ne),
          w && u(ue),
          G(se, w),
          w && u(fe),
          w && u(re);
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
class Ds extends X {
  constructor(e) {
    super(), x(this, e, null, vs, ee, {});
  }
}
export { Ds as default, _s as metadata };
