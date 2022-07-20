var wt = Object.defineProperty,
  yt = Object.defineProperties;
var Et = Object.getOwnPropertyDescriptors;
var Ce = Object.getOwnPropertySymbols;
var It = Object.prototype.hasOwnProperty,
  Mt = Object.prototype.propertyIsEnumerable;
var Ve = (a, e, s) =>
    e in a
      ? wt(a, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (a[e] = s),
  $e = (a, e) => {
    for (var s in e || (e = {})) It.call(e, s) && Ve(a, s, e[s]);
    if (Ce) for (var s of Ce(e)) Mt.call(e, s) && Ve(a, s, e[s]);
    return a;
  },
  Le = (a, e) => yt(a, Et(e));
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
  g as S,
  J as h,
  E as z,
  e as g,
  t as U,
  c as k,
  h as B,
  j as Y,
  Y as Ae,
  k as V,
  m as L,
  F as St,
  G as Dt,
  H as Tt,
  I as Ct,
  n as he,
  o as A,
  p as me,
  q as C,
  N as pt,
  R as dt,
  u as Vt,
  w as P,
  x as F,
  y as G,
  B as Z,
  _ as oe,
  T as Lt,
  l as we,
  V as K,
  a4 as ht,
  f as Ne,
  a8 as jt,
  r as He,
} from './index-83a5d9f9.js';
import { g as Re } from './main-357f7a10.js';
import { w as qe } from './index-5b18af3d.js';
import { R as mt } from './index-83a1f0ce.js';
import { n as q } from './index-c889ff85.js';
import { D as ye } from './index-16ec1060.js';
import './paths-396f020f.js';
function At(a) {
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
      S(t, e, n), h(e, s);
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
function Nt(a, e, s) {
  let { rotate: t = !1 } = e;
  return (
    (a.$$set = (n) => {
      'rotate' in n && s(0, (t = n.rotate));
    }),
    [t]
  );
}
class vt extends X {
  constructor(e) {
    super(), x(this, e, Nt, At, ee, { rotate: 0 });
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
      (e = g('a')), (s = g('span')), (n = U(t)), this.h();
    },
    l(r) {
      e = k(r, 'A', { href: !0, class: !0 });
      var i = v(e);
      s = k(i, 'SPAN', { class: !0 });
      var o = v(s);
      (n = B(o, t)), o.forEach(u), i.forEach(u), this.h();
    },
    h() {
      f(s, 'class', 'label svelte-1nyc2e8'),
        f(e, 'href', (l = q(a[0].primary_section.id))),
        f(e, 'class', 'svelte-1nyc2e8');
    },
    m(r, i) {
      S(r, e, i), h(e, s), h(s, n);
    },
    p(r, i) {
      i & 1 && t !== (t = r[0].primary_section.name + '') && Y(n, t),
        i & 1 && l !== (l = q(r[0].primary_section.id)) && f(e, 'href', l);
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
      (e = g('time')), (t = U(s)), this.h();
    },
    l(l) {
      e = k(l, 'TIME', { datetime: !0, class: !0 });
      var r = v(e);
      (t = B(r, s)), r.forEach(u), this.h();
    },
    h() {
      f(e, 'datetime', (n = a[0].display_time)),
        f(e, 'class', 'svelte-1nyc2e8');
    },
    m(l, r) {
      S(l, e, r), h(e, t);
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
      S(l, e, r), h(e, s);
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
function Ht(a) {
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
    M = !a[1] && Ue(a),
    y = a[2] && Be(a);
  return {
    c() {
      (e = g('div')),
        (s = g('a')),
        (t = g('div')),
        d && d.c(),
        (n = V()),
        (l = g('span')),
        (i = U(r)),
        (o = V()),
        M && M.c(),
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
      (i = B($, r)),
        $.forEach(u),
        (o = L(I)),
        M && M.l(I),
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
        f(s, 'href', (p = q(a[0].canonical_url))),
        f(s, 'class', 'svelte-1nyc2e8'),
        f(e, 'class', 'story-card svelte-1nyc2e8');
    },
    m(m, E) {
      S(m, e, E),
        h(e, s),
        h(s, t),
        d && d.m(t, null),
        h(t, n),
        h(t, l),
        h(l, i),
        h(t, o),
        M && M.m(t, null),
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
          ? M && (M.d(1), (M = null))
          : M
          ? M.p(m, E)
          : ((M = Ue(m)), M.c(), M.m(t, null)),
        E & 4 && ae(t, 'has-thumbnail', m[2]),
        m[2]
          ? y
            ? y.p(m, E)
            : ((y = Be(m)), y.c(), y.m(s, null))
          : y && (y.d(1), (y = null)),
        E & 1 && p !== (p = q(m[0].canonical_url)) && f(s, 'href', p);
    },
    i: z,
    o: z,
    d(m) {
      m && u(e), d && d.d(), M && M.d(), y && y.d();
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
class qt extends X {
  constructor(e) {
    super(), x(this, e, Rt, Ht, ee, { story: 0, withSection: 1 });
  }
}
function Ot(a) {
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
      S(n, e, l), h(e, s), h(s, t);
    },
    p: z,
    i: z,
    o: z,
    d(n) {
      n && u(e);
    },
  };
}
class Ut extends X {
  constructor(e) {
    super(), x(this, e, null, Ot, ee, {});
  }
}
function Pe(a, e, s) {
  const t = a.slice();
  return (t[7] = e[s]), t;
}
function Bt(a) {
  let e, s, t;
  return (
    (s = new Ut({})),
    {
      c() {
        (e = g('div')), P(s.$$.fragment), this.h();
      },
      l(n) {
        e = k(n, 'DIV', { class: !0 });
        var l = v(e);
        F(s.$$.fragment, l), l.forEach(u), this.h();
      },
      h() {
        f(e, 'class', 'spinner svelte-1v8d80j');
      },
      m(n, l) {
        S(n, e, l), G(s, e, null), (t = !0);
      },
      p: z,
      i(n) {
        t || (C(s.$$.fragment, n), (t = !0));
      },
      o(n) {
        A(s.$$.fragment, n), (t = !1);
      },
      d(n) {
        n && u(e), Z(s);
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
  for (let c = 0; c < r.length; c += 1) i[c] = Fe(Pe(a, r, c));
  const o = (c) =>
    A(i[c], 1, 1, () => {
      i[c] = null;
    });
  return {
    c() {
      (e = g('span')), (s = U(a[0])), (t = V()), (n = g('ul'));
      for (let c = 0; c < i.length; c += 1) i[c].c();
      this.h();
    },
    l(c) {
      e = k(c, 'SPAN', { class: !0 });
      var p = v(e);
      (s = B(p, a[0])),
        p.forEach(u),
        (t = L(c)),
        (n = k(c, 'UL', { class: !0 }));
      var d = v(n);
      for (let M = 0; M < i.length; M += 1) i[M].l(d);
      d.forEach(u), this.h();
    },
    h() {
      f(e, 'class', 'latest svelte-1v8d80j'),
        f(n, 'class', 'story-list svelte-1v8d80j');
    },
    m(c, p) {
      S(c, e, p), h(e, s), S(c, t, p), S(c, n, p);
      for (let d = 0; d < i.length; d += 1) i[d].m(n, null);
      l = !0;
    },
    p(c, p) {
      if (((!l || p & 1) && Y(s, c[0]), p & 6)) {
        r = c[1];
        let d;
        for (d = 0; d < r.length; d += 1) {
          const M = Pe(c, r, d);
          i[d]
            ? (i[d].p(M, p), C(i[d], 1))
            : ((i[d] = Fe(M)), i[d].c(), C(i[d], 1), i[d].m(n, null));
        }
        for (he(), d = r.length; d < i.length; d += 1) o(d);
        me();
      }
    },
    i(c) {
      if (!l) {
        for (let p = 0; p < r.length; p += 1) C(i[p]);
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
    (s = new qt({ props: { story: a[7], withSection: a[2] === 'more' } })),
    {
      c() {
        (e = g('li')), P(s.$$.fragment), (t = V()), this.h();
      },
      l(l) {
        e = k(l, 'LI', { class: !0 });
        var r = v(e);
        F(s.$$.fragment, r), (t = L(r)), r.forEach(u), this.h();
      },
      h() {
        f(e, 'class', 'story-item svelte-1v8d80j');
      },
      m(l, r) {
        S(l, e, r), G(s, e, null), h(e, t), (n = !0);
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
        A(s.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && u(e), Z(s);
      },
    }
  );
}
function Ft(a) {
  let e, s, t, n, l, r, i, o, c, p, d;
  const M = a[5].default,
    y = St(M, a, a[4], null),
    m = [Pt, Bt],
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
        var D = v(t);
        n = k(D, 'DIV', { class: !0 });
        var H = v(n);
        l = k(H, 'DIV', { class: !0 });
        var T = v(l);
        y && y.l(T),
          T.forEach(u),
          H.forEach(u),
          (r = L(D)),
          (i = k(D, 'DIV', { class: !0 }));
        var R = v(i);
        o = k(R, 'DIV', { class: !0 });
        var W = v(o);
        p.l(W),
          W.forEach(u),
          R.forEach(u),
          D.forEach(u),
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
        S(I, e, $),
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
          Dt(y, M, I, I[4], d ? Ct(M, I[4], $, null) : Tt(I[4]), null);
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
              C(p, 1),
              p.m(o, null));
      },
      i(I) {
        d || (C(y, I), C(p), (d = !0));
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
function Gt(a, e, s) {
  let t,
    { $$slots: n = {}, $$scope: l } = e;
  const r = pt('nav-active-section');
  dt(a, r, (p) => s(2, (t = p)));
  let { headingText: i = 'Trending Stories' } = e,
    o = [],
    c = null;
  return (
    Vt(() =>
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
class _t extends X {
  constructor(e) {
    super(), x(this, e, Gt, Ft, ee, { headingText: 0 });
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
      S(n, e, l);
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
      (e = g('li')), (s = g('a')), (n = U(t)), (r = V()), this.h();
    },
    l(i) {
      e = k(i, 'LI', { class: !0 });
      var o = v(e);
      s = k(o, 'A', { class: !0, href: !0 });
      var c = v(s);
      (n = B(c, t)), c.forEach(u), (r = L(o)), o.forEach(u), this.h();
    },
    h() {
      f(s, 'class', 'subsection-link svelte-ksl3iw'),
        f(s, 'href', (l = q(a[3].url))),
        f(e, 'class', 'svelte-ksl3iw');
    },
    m(i, o) {
      S(i, e, o), h(e, s), h(s, n), h(e, r);
    },
    p(i, o) {
      o & 5 && t !== (t = i[3].name + '') && Y(n, t),
        o & 5 && l !== (l = q(i[3].url)) && f(s, 'href', l);
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
      (e = g('li')), (s = g('a')), (n = U(t)), (r = V()), this.h();
    },
    l(i) {
      e = k(i, 'LI', { class: !0 });
      var o = v(e);
      s = k(o, 'A', { class: !0, href: !0 });
      var c = v(s);
      (n = B(c, t)), c.forEach(u), (r = L(o)), o.forEach(u), this.h();
    },
    h() {
      f(s, 'class', 'subsection-link svelte-ksl3iw'),
        f(s, 'href', (l = q(a[3].url))),
        f(e, 'class', 'svelte-ksl3iw');
    },
    m(i, o) {
      S(i, e, o), h(e, s), h(s, n), h(e, r);
    },
    p(i, o) {
      o & 5 && t !== (t = i[3].name + '') && Y(n, t),
        o & 5 && l !== (l = q(i[3].url)) && f(s, 'href', l);
    },
    d(i) {
      i && u(e);
    },
  };
}
function Zt(a) {
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
    M = a[0].children.slice(a[2]),
    y = [];
  for (let m = 0; m < M.length; m += 1) y[m] = Je(Ge(a, M, m));
  return {
    c() {
      (e = g('a')),
        (s = g('span')),
        (t = U('Browse ')),
        (l = U(n)),
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
      (t = B(_, 'Browse ')),
        (l = B(_, n)),
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
        f(e, 'href', (r = q(a[0].url))),
        f(p, 'class', 'sections-group svelte-ksl3iw'),
        f(o, 'class', 'sections svelte-ksl3iw');
    },
    m(m, E) {
      S(m, e, E),
        h(e, s),
        h(s, t),
        h(s, l),
        S(m, i, E),
        S(m, o, E),
        d && d.m(o, null),
        h(o, c),
        h(o, p);
      for (let _ = 0; _ < y.length; _ += 1) y[_].m(p, null);
    },
    p(m, E) {
      if (
        (E & 1 && n !== (n = m[0].name + '') && Y(l, n),
        E & 1 && r !== (r = q(m[0].url)) && f(e, 'href', r),
        m[2] > 0
          ? d
            ? d.p(m, E)
            : ((d = ze(m)), d.c(), d.m(o, c))
          : d && (d.d(1), (d = null)),
        E & 5)
      ) {
        M = m[0].children.slice(m[2]);
        let _;
        for (_ = 0; _ < M.length; _ += 1) {
          const I = Ge(m, M, _);
          y[_] ? y[_].p(I, E) : ((y[_] = Je(I)), y[_].c(), y[_].m(p, null));
        }
        for (; _ < y.length; _ += 1) y[_].d(1);
        y.length = M.length;
      }
    },
    d(m) {
      m && u(e), m && u(i), m && u(o), d && d.d(), oe(y, m);
    },
  };
}
function zt(a) {
  let e, s;
  return (
    (e = new _t({
      props: {
        headingText: a[1],
        $$slots: { default: [Zt] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        P(e.$$.fragment);
      },
      l(t) {
        F(e.$$.fragment, t);
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
        A(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        Z(e, t);
      },
    }
  );
}
function Wt(a, e, s) {
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
class Jt extends X {
  constructor(e) {
    super(), x(this, e, Wt, zt, ee, { section: 0, headingText: 1 });
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
      S(n, e, l);
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
      (e = g('li')), (s = g('a')), (n = U(t)), (r = V()), this.h();
    },
    l(i) {
      e = k(i, 'LI', {});
      var o = v(e);
      s = k(o, 'A', { class: !0, href: !0 });
      var c = v(s);
      (n = B(c, t)), c.forEach(u), (r = L(o)), o.forEach(u), this.h();
    },
    h() {
      f(s, 'class', 'subsection-link svelte-b74xfp'),
        f(s, 'href', (l = q(a[4].url)));
    },
    m(i, o) {
      S(i, e, o), h(e, s), h(s, n), h(e, r);
    },
    p(i, o) {
      o & 1 && t !== (t = i[4].name + '') && Y(n, t),
        o & 1 && l !== (l = q(i[4].url)) && f(s, 'href', l);
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
        (n = U(t)),
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
      (n = B(d, t)),
        d.forEach(u),
        (r = L(p)),
        o && o.l(p),
        (i = L(p)),
        p.forEach(u),
        this.h();
    },
    h() {
      f(s, 'href', (l = q(a[1].url))),
        f(s, 'class', 'section-link svelte-b74xfp'),
        f(e, 'class', 'more-section-group svelte-b74xfp'),
        ae(e, 'has-children', a[1].children);
    },
    m(c, p) {
      S(c, e, p), h(e, s), h(s, n), h(e, r), o && o.m(e, null), h(e, i);
    },
    p(c, p) {
      p & 1 && t !== (t = c[1].name + '') && Y(n, t),
        p & 1 && l !== (l = q(c[1].url)) && f(s, 'href', l),
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
function Kt(a) {
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
      S(l, e, r), h(e, s);
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
function Yt(a) {
  let e, s;
  return (
    (e = new _t({
      props: { $$slots: { default: [Kt] }, $$scope: { ctx: a } },
    })),
    {
      c() {
        P(e.$$.fragment);
      },
      l(t) {
        F(e.$$.fragment, t);
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
        A(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        Z(e, t);
      },
    }
  );
}
function Qt(a, e, s) {
  let { sections: t = [] } = e;
  return (
    (a.$$set = (n) => {
      'sections' in n && s(0, (t = n.sections));
    }),
    [t]
  );
}
class Xt extends X {
  constructor(e) {
    super(), x(this, e, Qt, Yt, ee, { sections: 0 });
  }
}
function et(a, e, s) {
  const t = a.slice();
  return (t[20] = e[s]), t;
}
function xt(a) {
  let e,
    s,
    t,
    n = a[20].name + '',
    l,
    r;
  return {
    c() {
      (e = g('li')), (s = g('div')), (t = g('a')), (l = U(n)), this.h();
    },
    l(i) {
      e = k(i, 'LI', { class: !0 });
      var o = v(e);
      s = k(o, 'DIV', { class: !0 });
      var c = v(s);
      t = k(c, 'A', { href: !0, class: !0 });
      var p = v(t);
      (l = B(p, n)), p.forEach(u), c.forEach(u), o.forEach(u), this.h();
    },
    h() {
      f(t, 'href', (r = q(a[20].url))),
        f(t, 'class', 'svelte-1q11xjy'),
        f(s, 'class', 'nav-button link svelte-1q11xjy'),
        f(e, 'class', 'nav-item category link svelte-1q11xjy');
    },
    m(i, o) {
      S(i, e, o), h(e, s), h(s, t), h(t, l);
    },
    p(i, o) {
      o & 8 && n !== (n = i[20].name + '') && Y(l, n),
        o & 8 && r !== (r = q(i[20].url)) && f(t, 'href', r);
    },
    i: z,
    o: z,
    d(i) {
      i && u(e);
    },
  };
}
function es(a) {
  let e,
    s,
    t,
    n = a[20].name + '',
    l,
    r,
    i,
    o,
    c,
    p,
    d,
    M,
    y;
  c = new vt({ props: { rotate: a[20].id === a[4] } });
  let m = a[4] === a[20].id && tt(a);
  function E() {
    return a[10](a[20]);
  }
  function _() {
    return a[11](a[20]);
  }
  function I() {
    return a[14](a[20]);
  }
  return {
    c() {
      (e = g('li')),
        (s = g('div')),
        (t = g('a')),
        (l = U(n)),
        (i = V()),
        (o = g('button')),
        P(c.$$.fragment),
        (p = V()),
        m && m.c(),
        this.h();
    },
    l($) {
      e = k($, 'LI', { class: !0 });
      var b = v(e);
      s = k(b, 'DIV', { class: !0 });
      var D = v(s);
      t = k(D, 'A', { href: !0, class: !0 });
      var H = v(t);
      (l = B(H, n)),
        H.forEach(u),
        (i = L(D)),
        (o = k(D, 'BUTTON', { class: !0 }));
      var T = v(o);
      F(c.$$.fragment, T),
        T.forEach(u),
        D.forEach(u),
        (p = L(b)),
        m && m.l(b),
        b.forEach(u),
        this.h();
    },
    h() {
      f(t, 'href', (r = q(a[20].url))),
        f(t, 'class', 'svelte-1q11xjy'),
        f(o, 'class', 'button svelte-1q11xjy'),
        f(s, 'class', 'nav-button link svelte-1q11xjy'),
        ae(s, 'open', a[20].id === a[4]),
        f(e, 'class', 'nav-item category link svelte-1q11xjy');
    },
    m($, b) {
      S($, e, b),
        h(e, s),
        h(s, t),
        h(t, l),
        h(s, i),
        h(s, o),
        G(c, o, null),
        h(e, p),
        m && m.m(e, null),
        (d = !0),
        M ||
          ((y = [
            K(e, 'mouseenter', E),
            K(e, 'focus', _),
            K(e, 'mouseleave', a[12]),
            K(e, 'blur', a[13]),
            K(e, 'click', I),
          ]),
          (M = !0));
    },
    p($, b) {
      (a = $),
        (!d || b & 8) && n !== (n = a[20].name + '') && Y(l, n),
        (!d || (b & 8 && r !== (r = q(a[20].url)))) && f(t, 'href', r);
      const D = {};
      b & 24 && (D.rotate = a[20].id === a[4]),
        c.$set(D),
        b & 24 && ae(s, 'open', a[20].id === a[4]),
        a[4] === a[20].id
          ? m
            ? (m.p(a, b), b & 24 && C(m, 1))
            : ((m = tt(a)), m.c(), C(m, 1), m.m(e, null))
          : m &&
            (he(),
            A(m, 1, 1, () => {
              m = null;
            }),
            me());
    },
    i($) {
      d || (C(c.$$.fragment, $), C(m), (d = !0));
    },
    o($) {
      A(c.$$.fragment, $), A(m), (d = !1);
    },
    d($) {
      $ && u(e), Z(c), m && m.d(), (M = !1), ht(y);
    },
  };
}
function tt(a) {
  let e, s;
  return (
    (e = new Jt({
      props: { section: a[20], headingText: `Latest in ${a[20].name}` },
    })),
    {
      c() {
        P(e.$$.fragment);
      },
      l(t) {
        F(e.$$.fragment, t);
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
        A(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        Z(e, t);
      },
    }
  );
}
function st(a) {
  let e, s, t, n;
  const l = [es, xt],
    r = [];
  function i(o, c) {
    return o[20].children ? 0 : 1;
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
        r[e].m(o, c), S(o, t, c), (n = !0);
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
              C(s, 1),
              s.m(t.parentNode, t));
      },
      i(o) {
        n || (C(s), (n = !0));
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
    (e = new Xt({ props: { sections: a[2] } })),
    {
      c() {
        P(e.$$.fragment);
      },
      l(t) {
        F(e.$$.fragment, t);
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
        A(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        Z(e, t);
      },
    }
  );
}
function ts(a) {
  let e, s, t, n, l, r, i, o, c, p, d, M, y, m;
  Lt(a[9]);
  let E = a[3],
    _ = [];
  for (let b = 0; b < E.length; b += 1) _[b] = st(et(a, E, b));
  const I = (b) =>
    A(_[b], 1, 1, () => {
      _[b] = null;
    });
  p = new vt({ props: { rotate: a[4] === 'more' } });
  let $ = a[4] === 'more' && nt(a);
  return {
    c() {
      (e = g('div')), (s = g('nav')), (t = g('ul'));
      for (let b = 0; b < _.length; b += 1) _[b].c();
      (n = V()),
        (l = g('li')),
        (r = g('div')),
        (i = g('button')),
        (o = g('span')),
        (c = U('More ')),
        P(p.$$.fragment),
        (d = V()),
        $ && $.c(),
        this.h();
    },
    l(b) {
      e = k(b, 'DIV', { class: !0 });
      var D = v(e);
      s = k(D, 'NAV', { 'aria-label': !0 });
      var H = v(s);
      t = k(H, 'UL', { class: !0 });
      var T = v(t);
      for (let O = 0; O < _.length; O += 1) _[O].l(T);
      (n = L(T)), (l = k(T, 'LI', { class: !0 }));
      var R = v(l);
      r = k(R, 'DIV', { class: !0 });
      var W = v(r);
      i = k(W, 'BUTTON', { class: !0 });
      var J = v(i);
      o = k(J, 'SPAN', { class: !0 });
      var N = v(o);
      (c = B(N, 'More ')),
        F(p.$$.fragment, N),
        N.forEach(u),
        J.forEach(u),
        W.forEach(u),
        (d = L(R)),
        $ && $.l(R),
        R.forEach(u),
        T.forEach(u),
        H.forEach(u),
        D.forEach(u),
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
      S(b, e, D), h(e, s), h(s, t);
      for (let H = 0; H < _.length; H += 1) _[H].m(t, null);
      h(t, n),
        h(t, l),
        h(l, r),
        h(r, i),
        h(i, o),
        h(o, c),
        G(p, o, null),
        h(l, d),
        $ && $.m(l, null),
        (M = !0),
        y ||
          ((m = [
            K(window, 'resize', a[9]),
            K(l, 'mouseenter', a[15]),
            K(l, 'focus', a[16]),
            K(l, 'mouseleave', a[17]),
            K(l, 'blur', a[18]),
            K(l, 'click', a[19]),
          ]),
          (y = !0));
    },
    p(b, [D]) {
      if (D & 58) {
        E = b[3];
        let T;
        for (T = 0; T < E.length; T += 1) {
          const R = et(b, E, T);
          _[T]
            ? (_[T].p(R, D), C(_[T], 1))
            : ((_[T] = st(R)), _[T].c(), C(_[T], 1), _[T].m(t, n));
        }
        for (he(), T = E.length; T < _.length; T += 1) I(T);
        me();
      }
      const H = {};
      D & 16 && (H.rotate = b[4] === 'more'),
        p.$set(H),
        D & 16 && ae(r, 'open', b[4] === 'more'),
        b[4] === 'more'
          ? $
            ? ($.p(b, D), D & 16 && C($, 1))
            : (($ = nt(b)), $.c(), C($, 1), $.m(l, null))
          : $ &&
            (he(),
            A($, 1, 1, () => {
              $ = null;
            }),
            me());
    },
    i(b) {
      if (!M) {
        for (let D = 0; D < E.length; D += 1) C(_[D]);
        C(p.$$.fragment, b), C($), (M = !0);
      }
    },
    o(b) {
      _ = _.filter(Boolean);
      for (let D = 0; D < _.length; D += 1) A(_[D]);
      A(p.$$.fragment, b), A($), (M = !1);
    },
    d(b) {
      b && u(e), oe(_, b), Z(p), $ && $.d(), (y = !1), ht(m);
    },
  };
}
const at = 250;
function ss(a, e, s) {
  let t,
    n,
    l,
    r,
    i,
    { sections: o = [] } = e;
  const c = pt('nav-active-section');
  dt(a, c, (R) => s(4, (i = R)));
  let p = 1200,
    d;
  function M() {
    s(0, (p = window.innerWidth));
  }
  const y = (R) => {
      s(1, (d = setTimeout(() => c.set(R.id), at)));
    },
    m = (R) => c.set(R.id),
    E = () => {
      clearTimeout(d), c.set(null);
    },
    _ = () => {
      clearTimeout(d), c.set(null);
    },
    I = (R) => {
      i === R.id && (clearTimeout(d), c.set(null));
    },
    $ = () => {
      s(1, (d = setTimeout(() => c.set('more'), at)));
    },
    b = () => c.set('more'),
    D = () => {
      clearTimeout(d), c.set(null);
    },
    H = () => {
      clearTimeout(d), c.set(null);
    },
    T = () => {
      i === 'more' && (clearTimeout(d), c.set(null));
    };
  return (
    (a.$$set = (R) => {
      'sections' in R && s(6, (o = R.sections));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 1 && s(8, (t = () => (p >= 1300 ? 7 : 5))),
        a.$$.dirty & 256 && s(7, (n = t())),
        a.$$.dirty & 192 && s(3, (l = o.slice(0, n))),
        a.$$.dirty & 192 && s(2, (r = o.slice(n)));
    }),
    [p, d, r, l, i, c, o, n, t, M, y, m, E, _, I, $, b, D, H, T]
  );
}
class ns extends X {
  constructor(e) {
    super(), x(this, e, ss, ts, ee, { sections: 6 });
  }
}
var gt = [
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
function as(a) {
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
      S(t, e, n), h(e, s);
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
function ls(a, e, s) {
  let { width: t = 20 } = e;
  return (
    (a.$$set = (n) => {
      'width' in n && s(0, (t = n.width));
    }),
    [t]
  );
}
class rs extends X {
  constructor(e) {
    super(), x(this, e, ls, as, ee, { width: 0 });
  }
}
function is(a) {
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
      S(t, e, n), h(e, s);
    },
    p: z,
    i: z,
    o: z,
    d(t) {
      t && u(e);
    },
  };
}
class os extends X {
  constructor(e) {
    super(), x(this, e, null, is, ee, {});
  }
}
function lt(a, e, s) {
  const t = a.slice();
  return (t[4] = e[s]), t;
}
function rt(a, e, s) {
  const t = a.slice();
  return (t[7] = e[s]), t;
}
function it(a) {
  let e, s, t, n, l, r, i, o, c, p, d, M, y;
  (n = new mt({
    props: { logoColour: a[1].accent, textColour: a[1].primary },
  })),
    (o = new os({}));
  let m = a[0].sections,
    E = [];
  for (let _ = 0; _ < m.length; _ += 1) E[_] = ut(lt(a, m, _));
  return {
    c() {
      (e = g('div')),
        (s = g('header')),
        (t = g('div')),
        P(n.$$.fragment),
        (l = V()),
        (r = g('button')),
        (i = g('div')),
        P(o.$$.fragment),
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
      F(n.$$.fragment, b),
        b.forEach(u),
        (l = L($)),
        (r = k($, 'BUTTON', { class: !0 }));
      var D = v(r);
      i = k(D, 'DIV', { class: !0 });
      var H = v(i);
      F(o.$$.fragment, H), H.forEach(u), D.forEach(u), $.forEach(u), (c = L(I));
      for (let T = 0; T < E.length; T += 1) E[T].l(I);
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
      S(_, e, I),
        h(e, s),
        h(s, t),
        G(n, t, null),
        h(s, l),
        h(s, r),
        h(r, i),
        G(o, i, null),
        h(e, c);
      for (let $ = 0; $ < E.length; $ += 1) E[$].m(e, null);
      (d = !0),
        M ||
          ((y = K(r, 'click', function () {
            jt(a[3]) && a[3].apply(this, arguments);
          })),
          (M = !0));
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
          const D = lt(a, m, b);
          E[b] ? E[b].p(D, I) : ((E[b] = ut(D)), E[b].c(), E[b].m(e, null));
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
      d || (C(n.$$.fragment, _), C(o.$$.fragment, _), (d = !0));
    },
    o(_) {
      A(n.$$.fragment, _), A(o.$$.fragment, _), (d = !1);
    },
    d(_) {
      _ && u(e), Z(n), Z(o), oe(E, _), (M = !1), y();
    },
  };
}
function ot(a) {
  let e,
    s = a[4].children,
    t = [];
  for (let n = 0; n < s.length; n += 1) t[n] = ct(rt(a, s, n));
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
      S(n, e, l);
      for (let r = 0; r < t.length; r += 1) t[r].m(e, null);
    },
    p(n, l) {
      if (l & 1) {
        s = n[4].children;
        let r;
        for (r = 0; r < s.length; r += 1) {
          const i = rt(n, s, r);
          t[r] ? t[r].p(i, l) : ((t[r] = ct(i)), t[r].c(), t[r].m(e, null));
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
function ct(a) {
  let e,
    s,
    t = a[7].name + '',
    n,
    l,
    r;
  return {
    c() {
      (e = g('li')), (s = g('a')), (n = U(t)), (r = V()), this.h();
    },
    l(i) {
      e = k(i, 'LI', {});
      var o = v(e);
      s = k(o, 'A', { class: !0, href: !0 });
      var c = v(s);
      (n = B(c, t)), c.forEach(u), (r = L(o)), o.forEach(u), this.h();
    },
    h() {
      f(s, 'class', 'subsection-link svelte-1tpcugt'),
        f(s, 'href', (l = q(a[7].url)));
    },
    m(i, o) {
      S(i, e, o), h(e, s), h(s, n), h(e, r);
    },
    p(i, o) {
      o & 1 && t !== (t = i[7].name + '') && Y(n, t),
        o & 1 && l !== (l = q(i[7].url)) && f(s, 'href', l);
    },
    d(i) {
      i && u(e);
    },
  };
}
function ut(a) {
  let e,
    s,
    t = a[4].name + '',
    n,
    l,
    r,
    i,
    o = a[4].children && ot(a);
  return {
    c() {
      (e = g('section')),
        (s = g('a')),
        (n = U(t)),
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
      (n = B(d, t)),
        d.forEach(u),
        (r = L(p)),
        o && o.l(p),
        (i = L(p)),
        p.forEach(u),
        this.h();
    },
    h() {
      f(s, 'class', 'section-link svelte-1tpcugt'),
        f(s, 'href', (l = q(a[4].url))),
        f(e, 'class', 'section svelte-1tpcugt');
    },
    m(c, p) {
      S(c, e, p), h(e, s), h(s, n), h(e, r), o && o.m(e, null), h(e, i);
    },
    p(c, p) {
      p & 1 && t !== (t = c[4].name + '') && Y(n, t),
        p & 1 && l !== (l = q(c[4].url)) && f(s, 'href', l),
        c[4].children
          ? o
            ? o.p(c, p)
            : ((o = ot(c)), o.c(), o.m(e, i))
          : o && (o.d(1), (o = null));
    },
    d(c) {
      c && u(e), o && o.d();
    },
  };
}
function cs(a) {
  let e,
    s,
    t = a[2] && it(a);
  return {
    c() {
      t && t.c(), (e = we());
    },
    l(n) {
      t && t.l(n), (e = we());
    },
    m(n, l) {
      t && t.m(n, l), S(n, e, l), (s = !0);
    },
    p(n, [l]) {
      n[2]
        ? t
          ? (t.p(n, l), l & 4 && C(t, 1))
          : ((t = it(n)), t.c(), C(t, 1), t.m(e.parentNode, e))
        : t &&
          (he(),
          A(t, 1, 1, () => {
            t = null;
          }),
          me());
    },
    i(n) {
      s || (C(t), (s = !0));
    },
    o(n) {
      A(t), (s = !1);
    },
    d(n) {
      t && t.d(n), n && u(e);
    },
  };
}
function us(a, e, s) {
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
class fs extends X {
  constructor(e) {
    super(),
      x(this, e, us, cs, ee, {
        data: 0,
        theme: 1,
        isMobileMenuOpen: 2,
        releaseMobileMenu: 3,
      });
  }
}
function ps(a) {
  let e, s, t, n, l, r, i, o, c, p, d, M, y, m, E, _, I, $, b, D, H, T, R, W, J;
  return (
    (c = new mt({
      props: { logoColour: a[1].accent, textColour: a[1].primary },
    })),
    (d = new ns({ props: { sections: a[2] } })),
    (D = new rs({})),
    (T = new fs({
      props: {
        theme: a[1],
        isMobileMenuOpen: a[0],
        releaseMobileMenu: a[5],
        data: gt[0],
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
          P(c.$$.fragment),
          (p = V()),
          P(d.$$.fragment),
          (M = V()),
          (y = g('div')),
          (m = g('div')),
          (E = V()),
          (_ = g('div')),
          (I = g('div')),
          ($ = g('button')),
          (b = g('div')),
          P(D.$$.fragment),
          (H = V()),
          P(T.$$.fragment),
          this.h();
      },
      l(N) {
        e = k(N, 'HEADER', { style: !0 });
        var O = v(e);
        s = k(O, 'DIV', { class: !0 });
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
        F(c.$$.fragment, be),
          be.forEach(u),
          ne.forEach(u),
          ce.forEach(u),
          (p = L(Q)),
          F(d.$$.fragment, Q),
          (M = L(Q)),
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
        F(D.$$.fragment, pe),
          pe.forEach(u),
          re.forEach(u),
          fe.forEach(u),
          se.forEach(u),
          Q.forEach(u),
          ie.forEach(u),
          le.forEach(u),
          te.forEach(u),
          O.forEach(u),
          (H = L(N)),
          F(T.$$.fragment, N),
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
      m(N, O) {
        S(N, e, O),
          h(e, s),
          h(s, t),
          h(t, n),
          h(n, l),
          h(l, r),
          h(r, i),
          h(i, o),
          G(c, o, null),
          h(l, p),
          G(d, l, null),
          h(l, M),
          h(l, y),
          h(y, m),
          h(l, E),
          h(l, _),
          h(_, I),
          h(I, $),
          h($, b),
          G(D, b, null),
          S(N, H, O),
          G(T, N, O),
          (R = !0),
          W || ((J = K($, 'click', a[4])), (W = !0));
      },
      p(N, [O]) {
        (!R || O & 1) && f($, 'aria-expanded', N[0]);
        const te = {};
        O & 1 && (te.isMobileMenuOpen = N[0]),
          O & 1 && (te.releaseMobileMenu = N[5]),
          T.$set(te);
      },
      i(N) {
        R ||
          (C(c.$$.fragment, N),
          C(d.$$.fragment, N),
          C(D.$$.fragment, N),
          C(T.$$.fragment, N),
          (R = !0));
      },
      o(N) {
        A(c.$$.fragment, N),
          A(d.$$.fragment, N),
          A(D.$$.fragment, N),
          A(T.$$.fragment, N),
          (R = !1);
      },
      d(N) {
        N && u(e), Z(c), Z(d), Z(D), N && u(H), Z(T, N), (W = !1), J();
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
function ds(a, e, s) {
  let { theme: t = {} } = e;
  const n = $e($e({}, Ee.default), t);
  He('nav-theme', qe(n)), He('nav-active-section', qe(null));
  const { sections: l } = gt[0];
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
    super(), x(this, e, ds, ps, ee, { theme: 3 });
  }
}
function hs(a) {
  let e, s;
  return (
    (e = new Ie({})),
    {
      c() {
        P(e.$$.fragment);
      },
      l(t) {
        F(e.$$.fragment, t);
      },
      m(t, n) {
        G(e, t, n), (s = !0);
      },
      i(t) {
        s || (C(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        A(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        Z(e, t);
      },
    }
  );
}
function ms(a) {
  let e, s;
  return (
    (e = new Ie({ props: { theme: Ee.dark } })),
    {
      c() {
        P(e.$$.fragment);
      },
      l(t) {
        F(e.$$.fragment, t);
      },
      m(t, n) {
        G(e, t, n), (s = !0);
      },
      p: z,
      i(t) {
        s || (C(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        A(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        Z(e, t);
      },
    }
  );
}
function vs(a) {
  let e, s;
  return (
    (e = new Ie({
      props: {
        theme: Le($e({}, Ee.default), { background: '#e0d3b8', rules: '#aaa' }),
      },
    })),
    {
      c() {
        P(e.$$.fragment);
      },
      l(t) {
        F(e.$$.fragment, t);
      },
      m(t, n) {
        G(e, t, n), (s = !0);
      },
      p: z,
      i(t) {
        s || (C(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        A(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        Z(e, t);
      },
    }
  );
}
function _s(a) {
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
    M = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
    D,
    H,
    T,
    R = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteHeader<span class="token punctuation">,</span> SiteHeaderThemes <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteHeader</span> <span class="token attr-name">theme=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>SiteHeaderThemes<span class="token punctuation">.</span>dark<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,
    W,
    J,
    N,
    O,
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
        $$slots: { default: [hs] },
        $$scope: { ctx: a },
      },
    })),
    (J = new ye({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [ms] },
        $$scope: { ctx: a },
      },
    })),
    (se = new ye({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [vs] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        (e = g('section')),
          (s = g('h2')),
          (t = U(ft)),
          (n = V()),
          (l = g('p')),
          (r = U('Reuters dotcom site header, ported from ')),
          (i = g('a')),
          (o = U('Raptor UI components')),
          (c = U('.')),
          (p = V()),
          (d = g('pre')),
          (y = V()),
          P(m.$$.fragment),
          (E = V()),
          (_ = g('div')),
          (I = V()),
          ($ = g('section')),
          (b = g('p')),
          (D = U('Change colours with exported themes.')),
          (H = V()),
          (T = g('pre')),
          (W = V()),
          P(J.$$.fragment),
          (N = V()),
          (O = g('div')),
          (te = V()),
          (le = g('section')),
          (ie = g('p')),
          (Q = U('Customise a colour theme.')),
          (ce = V()),
          (ne = g('pre')),
          (ue = V()),
          P(se.$$.fragment),
          (fe = V()),
          (re = g('div')),
          this.h();
      },
      l(w) {
        e = k(w, 'SECTION', {});
        var j = v(e);
        s = k(j, 'H2', {});
        var ge = v(s);
        (t = B(ge, ft)), ge.forEach(u), (n = L(j)), (l = k(j, 'P', {}));
        var de = v(l);
        (r = B(de, 'Reuters dotcom site header, ported from ')),
          (i = k(de, 'A', { href: !0, rel: !0 }));
        var ke = v(i);
        (o = B(ke, 'Raptor UI components')),
          ke.forEach(u),
          (c = B(de, '.')),
          de.forEach(u),
          j.forEach(u),
          (p = L(w)),
          (d = k(w, 'PRE', { class: !0 }));
        var kt = v(d);
        kt.forEach(u),
          (y = L(w)),
          F(m.$$.fragment, w),
          (E = L(w)),
          (_ = k(w, 'DIV', { class: !0 })),
          v(_).forEach(u),
          (I = L(w)),
          ($ = k(w, 'SECTION', {}));
        var Me = v($);
        b = k(Me, 'P', {});
        var Se = v(b);
        (D = B(Se, 'Change colours with exported themes.')),
          Se.forEach(u),
          Me.forEach(u),
          (H = L(w)),
          (T = k(w, 'PRE', { class: !0 }));
        var bt = v(T);
        bt.forEach(u),
          (W = L(w)),
          F(J.$$.fragment, w),
          (N = L(w)),
          (O = k(w, 'DIV', { class: !0 })),
          v(O).forEach(u),
          (te = L(w)),
          (le = k(w, 'SECTION', {}));
        var De = v(le);
        ie = k(De, 'P', {});
        var Te = v(ie);
        (Q = B(Te, 'Customise a colour theme.')),
          Te.forEach(u),
          De.forEach(u),
          (ce = L(w)),
          (ne = k(w, 'PRE', { class: !0 }));
        var $t = v(ne);
        $t.forEach(u),
          (ue = L(w)),
          F(se.$$.fragment, w),
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
          f(T, 'class', 'language-svelte'),
          f(O, 'class', 'spacer svelte-1ess2x0'),
          f(ne, 'class', 'language-svelte'),
          f(re, 'class', 'spacer svelte-1ess2x0');
      },
      m(w, j) {
        S(w, e, j),
          h(e, s),
          h(s, t),
          h(e, n),
          h(e, l),
          h(l, r),
          h(l, i),
          h(i, o),
          h(l, c),
          S(w, p, j),
          S(w, d, j),
          (d.innerHTML = M),
          S(w, y, j),
          G(m, w, j),
          S(w, E, j),
          S(w, _, j),
          S(w, I, j),
          S(w, $, j),
          h($, b),
          h(b, D),
          S(w, H, j),
          S(w, T, j),
          (T.innerHTML = R),
          S(w, W, j),
          G(J, w, j),
          S(w, N, j),
          S(w, O, j),
          S(w, te, j),
          S(w, le, j),
          h(le, ie),
          h(ie, Q),
          S(w, ce, j),
          S(w, ne, j),
          (ne.innerHTML = be),
          S(w, ue, j),
          G(se, w, j),
          S(w, fe, j),
          S(w, re, j),
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
          (C(m.$$.fragment, w),
          C(J.$$.fragment, w),
          C(se.$$.fragment, w),
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
          Z(m, w),
          w && u(E),
          w && u(_),
          w && u(I),
          w && u($),
          w && u(H),
          w && u(T),
          w && u(W),
          Z(J, w),
          w && u(N),
          w && u(O),
          w && u(te),
          w && u(le),
          w && u(ce),
          w && u(ne),
          w && u(ue),
          Z(se, w),
          w && u(fe),
          w && u(re);
      },
    }
  );
}
const gs = {
    title: 'SiteHeader',
    description: 'Reuters dotcom site header.',
    slug: 'site-header',
  },
  { title: ft, description: Ss, slug: Ds } = gs;
class Ts extends X {
  constructor(e) {
    super(), x(this, e, null, _s, ee, {});
  }
}
export { Ts as default, gs as metadata };
