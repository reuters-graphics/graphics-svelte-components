var ps = Object.defineProperty,
  ms = Object.defineProperties;
var vs = Object.getOwnPropertyDescriptors;
var Se = Object.getOwnPropertySymbols;
var _s = Object.prototype.hasOwnProperty,
  gs = Object.prototype.propertyIsEnumerable;
var De = (a, e, t) =>
    e in a
      ? ps(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (a[e] = t),
  ge = (a, e) => {
    for (var t in e || (e = {})) _s.call(e, t) && De(a, t, e[t]);
    if (Se) for (var t of Se(e)) gs.call(e, t) && De(a, t, e[t]);
    return a;
  },
  Ce = (a, e) => ms(a, vs(e));
var Te = (a, e, t) =>
  new Promise((s, n) => {
    var l = (o) => {
        try {
          i(t.next(o));
        } catch (c) {
          n(c);
        }
      },
      r = (o) => {
        try {
          i(t.throw(o));
        } catch (c) {
          n(c);
        }
      },
      i = (o) => (o.done ? s(o.value) : Promise.resolve(o.value).then(l, r));
    i((t = t.apply(a, e)).next());
  });
import {
  S as J,
  i as K,
  s as Y,
  K as pe,
  L as me,
  a as m,
  d as u,
  b as f,
  g as S,
  J as p,
  E as q,
  e as k,
  t as z,
  c as b,
  h as H,
  j as Q,
  Y as Ve,
  k as V,
  m as L,
  Z as re,
  F as ks,
  G as bs,
  H as $s,
  I as ws,
  n as fe,
  o as N,
  p as he,
  q as C,
  N as ls,
  R as rs,
  u as ys,
  w as R,
  x as B,
  y as U,
  B as P,
  _ as de,
  T as Es,
  l as ke,
  V as ee,
  a4 as is,
  f as Le,
  a8 as Ms,
  r as Ne,
} from './index-83a5d9f9.js';
import { g as Ae } from './main-2a85cd42.js';
import { w as je } from './index-5b18af3d.js';
import { R as os } from './index-83a1f0ce.js';
import { D as be } from './index-16ec1060.js';
import './paths-396f020f.js';
function Is(a) {
  let e, t;
  return {
    c() {
      (e = pe('svg')), (t = pe('path')), this.h();
    },
    l(s) {
      e = me(s, 'svg', {
        class: !0,
        focusable: !0,
        'aria-hidden': !0,
        xmlns: !0,
        viewBox: !0,
      });
      var n = m(e);
      (t = me(n, 'path', { d: !0 })), m(t).forEach(u), n.forEach(u), this.h();
    },
    h() {
      f(
        t,
        'd',
        'M10.413.587a.71.71 0 0 0-1.027 0L5.5 4.474 1.613.587a.71.71 0 0 0-1.027 0 .709.709 0 0 0 0 1.027l4.4 4.4c.147.147.367.22.513.22a.79.79 0 0 0 .513-.22l4.4-4.4a.71.71 0 0 0 0-1.027h.001Z'
      ),
        f(e, 'class', 'arrow svelte-ggggbh'),
        f(e, 'focusable', 'false'),
        f(e, 'aria-hidden', 'true'),
        f(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        f(e, 'viewBox', '0 0 11 7');
    },
    m(s, n) {
      S(s, e, n), p(e, t);
    },
    p: q,
    i: q,
    o: q,
    d(s) {
      s && u(e);
    },
  };
}
class cs extends J {
  constructor(e) {
    super(), K(this, e, null, Is, Y, {});
  }
}
const F = (a) => (/^http/.test(a) ? a : `https://www.reuters.com${a}`);
function Oe(a) {
  let e,
    t,
    s = a[0].primary_section.name + '',
    n,
    l;
  return {
    c() {
      (e = k('a')), (t = k('span')), (n = z(s)), this.h();
    },
    l(r) {
      e = b(r, 'A', { href: !0, class: !0 });
      var i = m(e);
      t = b(i, 'SPAN', { class: !0 });
      var o = m(t);
      (n = H(o, s)), o.forEach(u), i.forEach(u), this.h();
    },
    h() {
      f(t, 'class', 'label svelte-1nyc2e8'),
        f(e, 'href', (l = F(a[0].primary_section.id))),
        f(e, 'class', 'svelte-1nyc2e8');
    },
    m(r, i) {
      S(r, e, i), p(e, t), p(t, n);
    },
    p(r, i) {
      i & 1 && s !== (s = r[0].primary_section.name + '') && Q(n, s),
        i & 1 && l !== (l = F(r[0].primary_section.id)) && f(e, 'href', l);
    },
    d(r) {
      r && u(e);
    },
  };
}
function Re(a) {
  let e,
    t = Ae(a[0].display_time) + '',
    s,
    n;
  return {
    c() {
      (e = k('time')), (s = z(t)), this.h();
    },
    l(l) {
      e = b(l, 'TIME', { datetime: !0, class: !0 });
      var r = m(e);
      (s = H(r, t)), r.forEach(u), this.h();
    },
    h() {
      f(e, 'datetime', (n = a[0].display_time)),
        f(e, 'class', 'svelte-1nyc2e8');
    },
    m(l, r) {
      S(l, e, r), p(e, s);
    },
    p(l, r) {
      r & 1 && t !== (t = Ae(l[0].display_time) + '') && Q(s, t),
        r & 1 && n !== (n = l[0].display_time) && f(e, 'datetime', n);
    },
    d(l) {
      l && u(e);
    },
  };
}
function Be(a) {
  let e, t, s, n;
  return {
    c() {
      (e = k('div')), (t = k('img')), this.h();
    },
    l(l) {
      e = b(l, 'DIV', { class: !0 });
      var r = m(e);
      (t = b(r, 'IMG', { src: !0, alt: !0, class: !0 })),
        r.forEach(u),
        this.h();
    },
    h() {
      Ve(t.src, (s = a[2].renditions.square['120w'])) || f(t, 'src', s),
        f(t, 'alt', (n = a[2].alt_text)),
        f(t, 'class', 'svelte-1nyc2e8'),
        f(e, 'class', 'thumbnail svelte-1nyc2e8');
    },
    m(l, r) {
      S(l, e, r), p(e, t);
    },
    p(l, r) {
      r & 4 &&
        !Ve(t.src, (s = l[2].renditions.square['120w'])) &&
        f(t, 'src', s),
        r & 4 && n !== (n = l[2].alt_text) && f(t, 'alt', n);
    },
    d(l) {
      l && u(e);
    },
  };
}
function Ss(a) {
  let e,
    t,
    s,
    n,
    l,
    r = a[0].title + '',
    i,
    o,
    c,
    h,
    d = a[1] && Oe(a),
    E = !a[1] && Re(a),
    M = a[2] && Be(a);
  return {
    c() {
      (e = k('div')),
        (t = k('a')),
        (s = k('div')),
        d && d.c(),
        (n = V()),
        (l = k('span')),
        (i = z(r)),
        (o = V()),
        E && E.c(),
        (c = V()),
        M && M.c(),
        this.h();
    },
    l(w) {
      e = b(w, 'DIV', { class: !0 });
      var $ = m(e);
      t = b($, 'A', { href: !0, class: !0 });
      var D = m(t);
      s = b(D, 'DIV', { class: !0 });
      var _ = m(s);
      d && d.l(_), (n = L(_)), (l = b(_, 'SPAN', { class: !0 }));
      var v = m(l);
      (i = H(v, r)),
        v.forEach(u),
        (o = L(_)),
        E && E.l(_),
        _.forEach(u),
        (c = L(D)),
        M && M.l(D),
        D.forEach(u),
        $.forEach(u),
        this.h();
    },
    h() {
      f(l, 'class', 'svelte-1nyc2e8'),
        f(s, 'class', 'story-text svelte-1nyc2e8'),
        re(s, 'has-thumbnail', a[2]),
        f(t, 'href', (h = F(a[0].canonical_url))),
        f(t, 'class', 'svelte-1nyc2e8'),
        f(e, 'class', 'story-card svelte-1nyc2e8');
    },
    m(w, $) {
      S(w, e, $),
        p(e, t),
        p(t, s),
        d && d.m(s, null),
        p(s, n),
        p(s, l),
        p(l, i),
        p(s, o),
        E && E.m(s, null),
        p(t, c),
        M && M.m(t, null);
    },
    p(w, [$]) {
      w[1]
        ? d
          ? d.p(w, $)
          : ((d = Oe(w)), d.c(), d.m(s, n))
        : d && (d.d(1), (d = null)),
        $ & 1 && r !== (r = w[0].title + '') && Q(i, r),
        w[1]
          ? E && (E.d(1), (E = null))
          : E
          ? E.p(w, $)
          : ((E = Re(w)), E.c(), E.m(s, null)),
        $ & 4 && re(s, 'has-thumbnail', w[2]),
        w[2]
          ? M
            ? M.p(w, $)
            : ((M = Be(w)), M.c(), M.m(t, null))
          : M && (M.d(1), (M = null)),
        $ & 1 && h !== (h = F(w[0].canonical_url)) && f(t, 'href', h);
    },
    i: q,
    o: q,
    d(w) {
      w && u(e), d && d.d(), E && E.d(), M && M.d();
    },
  };
}
function Ds(a, e, t) {
  let s,
    { story: n } = e,
    { withSection: l = !1 } = e;
  return (
    (a.$$set = (r) => {
      'story' in r && t(0, (n = r.story)),
        'withSection' in r && t(1, (l = r.withSection));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 1 && t(2, (s = n.thumbnail));
    }),
    [n, l, s]
  );
}
class Cs extends J {
  constructor(e) {
    super(), K(this, e, Ds, Ss, Y, { story: 0, withSection: 1 });
  }
}
function Ts(a) {
  let e, t, s;
  return {
    c() {
      (e = k('div')), (t = k('div')), (s = k('div')), this.h();
    },
    l(n) {
      e = b(n, 'DIV', {});
      var l = m(e);
      t = b(l, 'DIV', { class: !0 });
      var r = m(t);
      (s = b(r, 'DIV', { class: !0 })),
        m(s).forEach(u),
        r.forEach(u),
        l.forEach(u),
        this.h();
    },
    h() {
      f(s, 'class', 'spinner svelte-hunvtd'),
        f(t, 'class', 'spinner-container svelte-hunvtd');
    },
    m(n, l) {
      S(n, e, l), p(e, t), p(t, s);
    },
    p: q,
    i: q,
    o: q,
    d(n) {
      n && u(e);
    },
  };
}
class Vs extends J {
  constructor(e) {
    super(), K(this, e, null, Ts, Y, {});
  }
}
function Ue(a, e, t) {
  const s = a.slice();
  return (s[7] = e[t]), s;
}
function Ls(a) {
  let e, t, s;
  return (
    (t = new Vs({})),
    {
      c() {
        (e = k('div')), R(t.$$.fragment), this.h();
      },
      l(n) {
        e = b(n, 'DIV', { class: !0 });
        var l = m(e);
        B(t.$$.fragment, l), l.forEach(u), this.h();
      },
      h() {
        f(e, 'class', 'spinner svelte-1i4375s');
      },
      m(n, l) {
        S(n, e, l), U(t, e, null), (s = !0);
      },
      p: q,
      i(n) {
        s || (C(t.$$.fragment, n), (s = !0));
      },
      o(n) {
        N(t.$$.fragment, n), (s = !1);
      },
      d(n) {
        n && u(e), P(t);
      },
    }
  );
}
function Ns(a) {
  let e,
    t,
    s,
    n,
    l,
    r = a[1],
    i = [];
  for (let c = 0; c < r.length; c += 1) i[c] = Pe(Ue(a, r, c));
  const o = (c) =>
    N(i[c], 1, 1, () => {
      i[c] = null;
    });
  return {
    c() {
      (e = k('span')), (t = z(a[0])), (s = V()), (n = k('ul'));
      for (let c = 0; c < i.length; c += 1) i[c].c();
      this.h();
    },
    l(c) {
      e = b(c, 'SPAN', { class: !0 });
      var h = m(e);
      (t = H(h, a[0])),
        h.forEach(u),
        (s = L(c)),
        (n = b(c, 'UL', { class: !0 }));
      var d = m(n);
      for (let E = 0; E < i.length; E += 1) i[E].l(d);
      d.forEach(u), this.h();
    },
    h() {
      f(e, 'class', 'latest svelte-1i4375s'),
        f(n, 'class', 'story-list svelte-1i4375s');
    },
    m(c, h) {
      S(c, e, h), p(e, t), S(c, s, h), S(c, n, h);
      for (let d = 0; d < i.length; d += 1) i[d].m(n, null);
      l = !0;
    },
    p(c, h) {
      if (((!l || h & 1) && Q(t, c[0]), h & 6)) {
        r = c[1];
        let d;
        for (d = 0; d < r.length; d += 1) {
          const E = Ue(c, r, d);
          i[d]
            ? (i[d].p(E, h), C(i[d], 1))
            : ((i[d] = Pe(E)), i[d].c(), C(i[d], 1), i[d].m(n, null));
        }
        for (fe(), d = r.length; d < i.length; d += 1) o(d);
        he();
      }
    },
    i(c) {
      if (!l) {
        for (let h = 0; h < r.length; h += 1) C(i[h]);
        l = !0;
      }
    },
    o(c) {
      i = i.filter(Boolean);
      for (let h = 0; h < i.length; h += 1) N(i[h]);
      l = !1;
    },
    d(c) {
      c && u(e), c && u(s), c && u(n), de(i, c);
    },
  };
}
function Pe(a) {
  let e, t, s, n;
  return (
    (t = new Cs({ props: { story: a[7], withSection: a[2] === 'more' } })),
    {
      c() {
        (e = k('li')), R(t.$$.fragment), (s = V()), this.h();
      },
      l(l) {
        e = b(l, 'LI', { class: !0 });
        var r = m(e);
        B(t.$$.fragment, r), (s = L(r)), r.forEach(u), this.h();
      },
      h() {
        f(e, 'class', 'story-item svelte-1i4375s');
      },
      m(l, r) {
        S(l, e, r), U(t, e, null), p(e, s), (n = !0);
      },
      p(l, r) {
        const i = {};
        r & 2 && (i.story = l[7]),
          r & 4 && (i.withSection = l[2] === 'more'),
          t.$set(i);
      },
      i(l) {
        n || (C(t.$$.fragment, l), (n = !0));
      },
      o(l) {
        N(t.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && u(e), P(t);
      },
    }
  );
}
function As(a) {
  let e, t, s, n, l, r, i, o, c, h, d;
  const E = a[5].default,
    M = ks(E, a, a[4], null),
    w = [Ns, Ls],
    $ = [];
  function D(_, v) {
    return _[1].length > 0 ? 0 : 1;
  }
  return (
    (c = D(a)),
    (h = $[c] = w[c](a)),
    {
      c() {
        (e = k('div')),
          (t = k('div')),
          (s = k('div')),
          (n = k('div')),
          (l = k('div')),
          M && M.c(),
          (r = V()),
          (i = k('div')),
          (o = k('div')),
          h.c(),
          this.h();
      },
      l(_) {
        e = b(_, 'DIV', { class: !0 });
        var v = m(e);
        t = b(v, 'DIV', { class: !0 });
        var y = m(t);
        s = b(y, 'DIV', { class: !0 });
        var I = m(s);
        n = b(I, 'DIV', { class: !0 });
        var O = m(n);
        l = b(O, 'DIV', { class: !0 });
        var j = m(l);
        M && M.l(j),
          j.forEach(u),
          O.forEach(u),
          (r = L(I)),
          (i = b(I, 'DIV', { class: !0 }));
        var Z = m(i);
        o = b(Z, 'DIV', { class: !0 });
        var G = m(o);
        h.l(G),
          G.forEach(u),
          Z.forEach(u),
          I.forEach(u),
          y.forEach(u),
          v.forEach(u),
          this.h();
      },
      h() {
        f(l, 'class', 'inner svelte-1i4375s'),
          f(n, 'class', 'submenu svelte-1i4375s'),
          f(o, 'class', 'inner svelte-1i4375s'),
          f(i, 'class', 'stories-container svelte-1i4375s'),
          f(s, 'class', 'inner svelte-1i4375s'),
          f(t, 'class', 'dropdown-container svelte-1i4375s'),
          f(e, 'class', 'dropdown svelte-1i4375s');
      },
      m(_, v) {
        S(_, e, v),
          p(e, t),
          p(t, s),
          p(s, n),
          p(n, l),
          M && M.m(l, null),
          p(s, r),
          p(s, i),
          p(i, o),
          $[c].m(o, null),
          (d = !0);
      },
      p(_, [v]) {
        M &&
          M.p &&
          (!d || v & 16) &&
          bs(M, E, _, _[4], d ? ws(E, _[4], v, null) : $s(_[4]), null);
        let y = c;
        (c = D(_)),
          c === y
            ? $[c].p(_, v)
            : (fe(),
              N($[y], 1, 1, () => {
                $[y] = null;
              }),
              he(),
              (h = $[c]),
              h ? h.p(_, v) : ((h = $[c] = w[c](_)), h.c()),
              C(h, 1),
              h.m(o, null));
      },
      i(_) {
        d || (C(M, _), C(h), (d = !0));
      },
      o(_) {
        N(M, _), N(h), (d = !1);
      },
      d(_) {
        _ && u(e), M && M.d(_), $[c].d();
      },
    }
  );
}
function js(a, e, t) {
  let s,
    { $$slots: n = {}, $$scope: l } = e;
  const r = ls('nav-active-section');
  rs(a, r, (h) => t(2, (s = h)));
  let { headingText: i = 'Trending Stories' } = e,
    o = [],
    c = null;
  return (
    ys(() =>
      Te(this, null, function* () {
        c !== s &&
          (s === 'more'
            ? yield fetch(
                'https://www.reuters.com/pf/api/v3/content/fetch/articles-by-trends-v1?' +
                  new URLSearchParams({
                    query: JSON.stringify({ size: 4, website: 'reuters' }),
                  })
              )
                .then((h) => h.json())
                .then((h) => {
                  t(1, (o = h.result.articles)), (c = s);
                })
            : yield fetch(
                'https://www.reuters.com/pf/api/v3/content/fetch/recent-stories-by-sections-v1?' +
                  new URLSearchParams({
                    query: JSON.stringify({
                      section_ids: s,
                      size: 4,
                      website: 'reuters',
                    }),
                  })
              )
                .then((h) => h.json())
                .then((h) => {
                  t(1, (o = h.result.articles)), (c = s);
                }));
      })
    ),
    (a.$$set = (h) => {
      'headingText' in h && t(0, (i = h.headingText)),
        '$$scope' in h && t(4, (l = h.$$scope));
    }),
    [i, o, s, r, l, n]
  );
}
class us extends J {
  constructor(e) {
    super(), K(this, e, js, As, Y, { headingText: 0 });
  }
}
function ze(a, e, t) {
  const s = a.slice();
  return (s[2] = e[t]), s;
}
function He(a) {
  let e,
    t,
    s = a[2].name + '',
    n,
    l,
    r;
  return {
    c() {
      (e = k('li')), (t = k('a')), (n = z(s)), (r = V()), this.h();
    },
    l(i) {
      e = b(i, 'LI', { class: !0 });
      var o = m(e);
      t = b(o, 'A', { class: !0, href: !0 });
      var c = m(t);
      (n = H(c, s)), c.forEach(u), (r = L(o)), o.forEach(u), this.h();
    },
    h() {
      f(t, 'class', 'subsection-link svelte-1nppay9'),
        f(t, 'href', (l = F(a[2].url))),
        f(e, 'class', 'svelte-1nppay9');
    },
    m(i, o) {
      S(i, e, o), p(e, t), p(t, n), p(e, r);
    },
    p(i, o) {
      o & 1 && s !== (s = i[2].name + '') && Q(n, s),
        o & 1 && l !== (l = F(i[2].url)) && f(t, 'href', l);
    },
    d(i) {
      i && u(e);
    },
  };
}
function Os(a) {
  let e,
    t,
    s = a[0].name + '',
    n,
    l,
    r,
    i = a[0].children,
    o = [];
  for (let c = 0; c < i.length; c += 1) o[c] = He(ze(a, i, c));
  return {
    c() {
      (e = k('span')), (t = z('Browse ')), (n = z(s)), (l = V()), (r = k('ul'));
      for (let c = 0; c < o.length; c += 1) o[c].c();
      this.h();
    },
    l(c) {
      e = b(c, 'SPAN', { class: !0 });
      var h = m(e);
      (t = H(h, 'Browse ')),
        (n = H(h, s)),
        h.forEach(u),
        (l = L(c)),
        (r = b(c, 'UL', { class: !0 }));
      var d = m(r);
      for (let E = 0; E < o.length; E += 1) o[E].l(d);
      d.forEach(u), this.h();
    },
    h() {
      f(e, 'class', 'heading svelte-1nppay9'),
        f(r, 'class', 'sections svelte-1nppay9');
    },
    m(c, h) {
      S(c, e, h), p(e, t), p(e, n), S(c, l, h), S(c, r, h);
      for (let d = 0; d < o.length; d += 1) o[d].m(r, null);
    },
    p(c, h) {
      if ((h & 1 && s !== (s = c[0].name + '') && Q(n, s), h & 1)) {
        i = c[0].children;
        let d;
        for (d = 0; d < i.length; d += 1) {
          const E = ze(c, i, d);
          o[d] ? o[d].p(E, h) : ((o[d] = He(E)), o[d].c(), o[d].m(r, null));
        }
        for (; d < o.length; d += 1) o[d].d(1);
        o.length = i.length;
      }
    },
    d(c) {
      c && u(e), c && u(l), c && u(r), de(o, c);
    },
  };
}
function Rs(a) {
  let e, t;
  return (
    (e = new us({
      props: {
        headingText: a[1],
        $$slots: { default: [Os] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        R(e.$$.fragment);
      },
      l(s) {
        B(e.$$.fragment, s);
      },
      m(s, n) {
        U(e, s, n), (t = !0);
      },
      p(s, [n]) {
        const l = {};
        n & 2 && (l.headingText = s[1]),
          n & 33 && (l.$$scope = { dirty: n, ctx: s }),
          e.$set(l);
      },
      i(s) {
        t || (C(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        N(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        P(e, s);
      },
    }
  );
}
function Bs(a, e, t) {
  let { section: s = {} } = e,
    { headingText: n } = e;
  return (
    (a.$$set = (l) => {
      'section' in l && t(0, (s = l.section)),
        'headingText' in l && t(1, (n = l.headingText));
    }),
    [s, n]
  );
}
class Us extends J {
  constructor(e) {
    super(), K(this, e, Bs, Rs, Y, { section: 0, headingText: 1 });
  }
}
function qe(a, e, t) {
  const s = a.slice();
  return (s[1] = e[t]), s;
}
function Fe(a, e, t) {
  const s = a.slice();
  return (s[4] = e[t]), s;
}
function Ge(a) {
  let e,
    t = a[1].children,
    s = [];
  for (let n = 0; n < t.length; n += 1) s[n] = Ze(Fe(a, t, n));
  return {
    c() {
      e = k('ul');
      for (let n = 0; n < s.length; n += 1) s[n].c();
      this.h();
    },
    l(n) {
      e = b(n, 'UL', { class: !0 });
      var l = m(e);
      for (let r = 0; r < s.length; r += 1) s[r].l(l);
      l.forEach(u), this.h();
    },
    h() {
      f(e, 'class', 'subsections svelte-zp4vyr');
    },
    m(n, l) {
      S(n, e, l);
      for (let r = 0; r < s.length; r += 1) s[r].m(e, null);
    },
    p(n, l) {
      if (l & 1) {
        t = n[1].children;
        let r;
        for (r = 0; r < t.length; r += 1) {
          const i = Fe(n, t, r);
          s[r] ? s[r].p(i, l) : ((s[r] = Ze(i)), s[r].c(), s[r].m(e, null));
        }
        for (; r < s.length; r += 1) s[r].d(1);
        s.length = t.length;
      }
    },
    d(n) {
      n && u(e), de(s, n);
    },
  };
}
function Ze(a) {
  let e,
    t,
    s = a[4].name + '',
    n,
    l,
    r;
  return {
    c() {
      (e = k('li')), (t = k('a')), (n = z(s)), (r = V()), this.h();
    },
    l(i) {
      e = b(i, 'LI', {});
      var o = m(e);
      t = b(o, 'A', { class: !0, href: !0 });
      var c = m(t);
      (n = H(c, s)), c.forEach(u), (r = L(o)), o.forEach(u), this.h();
    },
    h() {
      f(t, 'class', 'subsection-link svelte-zp4vyr'),
        f(t, 'href', (l = F(a[4].url)));
    },
    m(i, o) {
      S(i, e, o), p(e, t), p(t, n), p(e, r);
    },
    p(i, o) {
      o & 1 && s !== (s = i[4].name + '') && Q(n, s),
        o & 1 && l !== (l = F(i[4].url)) && f(t, 'href', l);
    },
    d(i) {
      i && u(e);
    },
  };
}
function We(a) {
  let e,
    t,
    s = a[1].name + '',
    n,
    l,
    r,
    i,
    o = a[1].children && Ge(a);
  return {
    c() {
      (e = k('section')),
        (t = k('a')),
        (n = z(s)),
        (r = V()),
        o && o.c(),
        (i = V()),
        this.h();
    },
    l(c) {
      e = b(c, 'SECTION', { class: !0 });
      var h = m(e);
      t = b(h, 'A', { href: !0, class: !0 });
      var d = m(t);
      (n = H(d, s)),
        d.forEach(u),
        (r = L(h)),
        o && o.l(h),
        (i = L(h)),
        h.forEach(u),
        this.h();
    },
    h() {
      f(t, 'href', (l = F(a[1].url))),
        f(t, 'class', 'section-link svelte-zp4vyr'),
        f(e, 'class', 'more-section-group svelte-zp4vyr'),
        re(e, 'has-children', a[1].children);
    },
    m(c, h) {
      S(c, e, h), p(e, t), p(t, n), p(e, r), o && o.m(e, null), p(e, i);
    },
    p(c, h) {
      h & 1 && s !== (s = c[1].name + '') && Q(n, s),
        h & 1 && l !== (l = F(c[1].url)) && f(t, 'href', l),
        c[1].children
          ? o
            ? o.p(c, h)
            : ((o = Ge(c)), o.c(), o.m(e, i))
          : o && (o.d(1), (o = null)),
        h & 1 && re(e, 'has-children', c[1].children);
    },
    d(c) {
      c && u(e), o && o.d();
    },
  };
}
function Ps(a) {
  let e,
    t,
    s = a[0],
    n = [];
  for (let l = 0; l < s.length; l += 1) n[l] = We(qe(a, s, l));
  return {
    c() {
      (e = k('div')), (t = k('div'));
      for (let l = 0; l < n.length; l += 1) n[l].c();
      this.h();
    },
    l(l) {
      e = b(l, 'DIV', { class: !0 });
      var r = m(e);
      t = b(r, 'DIV', { class: !0 });
      var i = m(t);
      for (let o = 0; o < n.length; o += 1) n[o].l(i);
      i.forEach(u), r.forEach(u), this.h();
    },
    h() {
      f(t, 'class', 'groupContainer'),
        f(e, 'class', 'more-sections svelte-zp4vyr');
    },
    m(l, r) {
      S(l, e, r), p(e, t);
      for (let i = 0; i < n.length; i += 1) n[i].m(t, null);
    },
    p(l, r) {
      if (r & 1) {
        s = l[0];
        let i;
        for (i = 0; i < s.length; i += 1) {
          const o = qe(l, s, i);
          n[i] ? n[i].p(o, r) : ((n[i] = We(o)), n[i].c(), n[i].m(t, null));
        }
        for (; i < n.length; i += 1) n[i].d(1);
        n.length = s.length;
      }
    },
    d(l) {
      l && u(e), de(n, l);
    },
  };
}
function zs(a) {
  let e, t;
  return (
    (e = new us({
      props: { $$slots: { default: [Ps] }, $$scope: { ctx: a } },
    })),
    {
      c() {
        R(e.$$.fragment);
      },
      l(s) {
        B(e.$$.fragment, s);
      },
      m(s, n) {
        U(e, s, n), (t = !0);
      },
      p(s, [n]) {
        const l = {};
        n & 129 && (l.$$scope = { dirty: n, ctx: s }), e.$set(l);
      },
      i(s) {
        t || (C(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        N(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        P(e, s);
      },
    }
  );
}
function Hs(a, e, t) {
  let { sections: s = [] } = e;
  return (
    (a.$$set = (n) => {
      'sections' in n && t(0, (s = n.sections));
    }),
    [s]
  );
}
class qs extends J {
  constructor(e) {
    super(), K(this, e, Hs, zs, Y, { sections: 0 });
  }
}
function Je(a, e, t) {
  const s = a.slice();
  return (s[17] = e[t]), s;
}
function Fs(a) {
  let e,
    t,
    s,
    n = a[17].name + '',
    l,
    r;
  return {
    c() {
      (e = k('li')), (t = k('div')), (s = k('a')), (l = z(n)), this.h();
    },
    l(i) {
      e = b(i, 'LI', { class: !0 });
      var o = m(e);
      t = b(o, 'DIV', { class: !0 });
      var c = m(t);
      s = b(c, 'A', { href: !0, class: !0 });
      var h = m(s);
      (l = H(h, n)), h.forEach(u), c.forEach(u), o.forEach(u), this.h();
    },
    h() {
      f(s, 'href', (r = F(a[17].url))),
        f(s, 'class', 'svelte-ys1hdj'),
        f(t, 'class', 'nav-button link svelte-ys1hdj'),
        f(e, 'class', 'nav-item category link svelte-ys1hdj');
    },
    m(i, o) {
      S(i, e, o), p(e, t), p(t, s), p(s, l);
    },
    p(i, o) {
      o & 4 && n !== (n = i[17].name + '') && Q(l, n),
        o & 4 && r !== (r = F(i[17].url)) && f(s, 'href', r);
    },
    i: q,
    o: q,
    d(i) {
      i && u(e);
    },
  };
}
function Gs(a) {
  let e,
    t,
    s,
    n = a[17].name + '',
    l,
    r,
    i,
    o,
    c,
    h,
    d,
    E,
    M;
  c = new cs({});
  let w = a[3] === a[17].id && Ke(a);
  function $() {
    return a[9](a[17]);
  }
  function D() {
    return a[10](a[17]);
  }
  return {
    c() {
      (e = k('li')),
        (t = k('div')),
        (s = k('a')),
        (l = z(n)),
        (i = V()),
        (o = k('button')),
        R(c.$$.fragment),
        (h = V()),
        w && w.c(),
        this.h();
    },
    l(_) {
      e = b(_, 'LI', { class: !0 });
      var v = m(e);
      t = b(v, 'DIV', { class: !0 });
      var y = m(t);
      s = b(y, 'A', { href: !0, class: !0 });
      var I = m(s);
      (l = H(I, n)),
        I.forEach(u),
        (i = L(y)),
        (o = b(y, 'BUTTON', { class: !0 }));
      var O = m(o);
      B(c.$$.fragment, O),
        O.forEach(u),
        y.forEach(u),
        (h = L(v)),
        w && w.l(v),
        v.forEach(u),
        this.h();
    },
    h() {
      f(s, 'href', (r = F(a[17].url))),
        f(s, 'class', 'svelte-ys1hdj'),
        f(o, 'class', 'button svelte-ys1hdj'),
        f(t, 'class', 'nav-button link svelte-ys1hdj'),
        re(t, 'open', a[17].id === a[3]),
        f(e, 'class', 'nav-item category link svelte-ys1hdj');
    },
    m(_, v) {
      S(_, e, v),
        p(e, t),
        p(t, s),
        p(s, l),
        p(t, i),
        p(t, o),
        U(c, o, null),
        p(e, h),
        w && w.m(e, null),
        (d = !0),
        E ||
          ((M = [
            ee(e, 'mouseenter', $),
            ee(e, 'focus', D),
            ee(e, 'mouseleave', a[11]),
            ee(e, 'blur', a[12]),
          ]),
          (E = !0));
    },
    p(_, v) {
      (a = _),
        (!d || v & 4) && n !== (n = a[17].name + '') && Q(l, n),
        (!d || (v & 4 && r !== (r = F(a[17].url)))) && f(s, 'href', r),
        v & 12 && re(t, 'open', a[17].id === a[3]),
        a[3] === a[17].id
          ? w
            ? (w.p(a, v), v & 12 && C(w, 1))
            : ((w = Ke(a)), w.c(), C(w, 1), w.m(e, null))
          : w &&
            (fe(),
            N(w, 1, 1, () => {
              w = null;
            }),
            he());
    },
    i(_) {
      d || (C(c.$$.fragment, _), C(w), (d = !0));
    },
    o(_) {
      N(c.$$.fragment, _), N(w), (d = !1);
    },
    d(_) {
      _ && u(e), P(c), w && w.d(), (E = !1), is(M);
    },
  };
}
function Ke(a) {
  let e, t;
  return (
    (e = new Us({
      props: { section: a[17], headingText: `Latest in ${a[17].name}` },
    })),
    {
      c() {
        R(e.$$.fragment);
      },
      l(s) {
        B(e.$$.fragment, s);
      },
      m(s, n) {
        U(e, s, n), (t = !0);
      },
      p(s, n) {
        const l = {};
        n & 4 && (l.section = s[17]),
          n & 4 && (l.headingText = `Latest in ${s[17].name}`),
          e.$set(l);
      },
      i(s) {
        t || (C(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        N(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        P(e, s);
      },
    }
  );
}
function Ye(a) {
  let e, t, s, n;
  const l = [Gs, Fs],
    r = [];
  function i(o, c) {
    return o[17].children ? 0 : 1;
  }
  return (
    (e = i(a)),
    (t = r[e] = l[e](a)),
    {
      c() {
        t.c(), (s = ke());
      },
      l(o) {
        t.l(o), (s = ke());
      },
      m(o, c) {
        r[e].m(o, c), S(o, s, c), (n = !0);
      },
      p(o, c) {
        let h = e;
        (e = i(o)),
          e === h
            ? r[e].p(o, c)
            : (fe(),
              N(r[h], 1, 1, () => {
                r[h] = null;
              }),
              he(),
              (t = r[e]),
              t ? t.p(o, c) : ((t = r[e] = l[e](o)), t.c()),
              C(t, 1),
              t.m(s.parentNode, s));
      },
      i(o) {
        n || (C(t), (n = !0));
      },
      o(o) {
        N(t), (n = !1);
      },
      d(o) {
        r[e].d(o), o && u(s);
      },
    }
  );
}
function Qe(a) {
  let e, t;
  return (
    (e = new qs({ props: { sections: a[1] } })),
    {
      c() {
        R(e.$$.fragment);
      },
      l(s) {
        B(e.$$.fragment, s);
      },
      m(s, n) {
        U(e, s, n), (t = !0);
      },
      p(s, n) {
        const l = {};
        n & 2 && (l.sections = s[1]), e.$set(l);
      },
      i(s) {
        t || (C(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        N(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        P(e, s);
      },
    }
  );
}
function Zs(a) {
  let e, t, s, n, l, r, i, o, c, h, d, E, M;
  Es(a[8]);
  let w = a[2],
    $ = [];
  for (let v = 0; v < w.length; v += 1) $[v] = Ye(Je(a, w, v));
  const D = (v) =>
    N($[v], 1, 1, () => {
      $[v] = null;
    });
  c = new cs({});
  let _ = a[3] === 'more' && Qe(a);
  return {
    c() {
      (e = k('div')), (t = k('nav')), (s = k('ul'));
      for (let v = 0; v < $.length; v += 1) $[v].c();
      (n = V()),
        (l = k('li')),
        (r = k('div')),
        (i = k('button')),
        (o = z('More ')),
        R(c.$$.fragment),
        (h = V()),
        _ && _.c(),
        this.h();
    },
    l(v) {
      e = b(v, 'DIV', { class: !0 });
      var y = m(e);
      t = b(y, 'NAV', { 'aria-label': !0 });
      var I = m(t);
      s = b(I, 'UL', { class: !0 });
      var O = m(s);
      for (let X = 0; X < $.length; X += 1) $[X].l(O);
      (n = L(O)), (l = b(O, 'LI', { class: !0 }));
      var j = m(l);
      r = b(j, 'DIV', { class: !0 });
      var Z = m(r);
      i = b(Z, 'BUTTON', { class: !0 });
      var G = m(i);
      (o = H(G, 'More ')),
        B(c.$$.fragment, G),
        G.forEach(u),
        Z.forEach(u),
        (h = L(j)),
        _ && _.l(j),
        j.forEach(u),
        O.forEach(u),
        I.forEach(u),
        y.forEach(u),
        this.h();
    },
    h() {
      f(i, 'class', 'button svelte-ys1hdj'),
        f(r, 'class', 'nav-button more svelte-ys1hdj'),
        re(r, 'open', a[3] === 'more'),
        f(l, 'class', 'nav-item svelte-ys1hdj'),
        f(s, 'class', 'nav-list svelte-ys1hdj'),
        f(t, 'aria-label', 'Main navigation'),
        f(e, 'class', 'nav-bar svelte-ys1hdj');
    },
    m(v, y) {
      S(v, e, y), p(e, t), p(t, s);
      for (let I = 0; I < $.length; I += 1) $[I].m(s, null);
      p(s, n),
        p(s, l),
        p(l, r),
        p(r, i),
        p(i, o),
        U(c, i, null),
        p(l, h),
        _ && _.m(l, null),
        (d = !0),
        E ||
          ((M = [
            ee(window, 'resize', a[8]),
            ee(l, 'mouseenter', a[13]),
            ee(l, 'focus', a[14]),
            ee(l, 'mouseleave', a[15]),
            ee(l, 'blur', a[16]),
          ]),
          (E = !0));
    },
    p(v, [y]) {
      if (y & 28) {
        w = v[2];
        let I;
        for (I = 0; I < w.length; I += 1) {
          const O = Je(v, w, I);
          $[I]
            ? ($[I].p(O, y), C($[I], 1))
            : (($[I] = Ye(O)), $[I].c(), C($[I], 1), $[I].m(s, n));
        }
        for (fe(), I = w.length; I < $.length; I += 1) D(I);
        he();
      }
      y & 8 && re(r, 'open', v[3] === 'more'),
        v[3] === 'more'
          ? _
            ? (_.p(v, y), y & 8 && C(_, 1))
            : ((_ = Qe(v)), _.c(), C(_, 1), _.m(l, null))
          : _ &&
            (fe(),
            N(_, 1, 1, () => {
              _ = null;
            }),
            he());
    },
    i(v) {
      if (!d) {
        for (let y = 0; y < w.length; y += 1) C($[y]);
        C(c.$$.fragment, v), C(_), (d = !0);
      }
    },
    o(v) {
      $ = $.filter(Boolean);
      for (let y = 0; y < $.length; y += 1) N($[y]);
      N(c.$$.fragment, v), N(_), (d = !1);
    },
    d(v) {
      v && u(e), de($, v), P(c), _ && _.d(), (E = !1), is(M);
    },
  };
}
function Ws(a, e, t) {
  let s,
    n,
    l,
    r,
    i,
    { sections: o = [] } = e;
  const c = ls('nav-active-section');
  rs(a, c, (I) => t(3, (i = I)));
  let h = 1200;
  function d() {
    t(0, (h = window.innerWidth));
  }
  const E = (I) => c.set(I.id),
    M = (I) => c.set(I.id),
    w = () => c.set(null),
    $ = () => c.set(null),
    D = () => c.set('more'),
    _ = () => c.set('more'),
    v = () => c.set(null),
    y = () => c.set(null);
  return (
    (a.$$set = (I) => {
      'sections' in I && t(5, (o = I.sections));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 1 && t(7, (s = () => (h >= 1300 ? 7 : 5))),
        a.$$.dirty & 128 && t(6, (n = s())),
        a.$$.dirty & 96 && t(2, (l = o.slice(0, n))),
        a.$$.dirty & 96 && t(1, (r = o.slice(n)));
    }),
    [h, r, l, i, c, o, n, s, d, E, M, w, $, D, _, v, y]
  );
}
class Js extends J {
  constructor(e) {
    super(), K(this, e, Ws, Zs, Y, { sections: 5 });
  }
}
const Ks = [
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
        { id: '/business/davos/', url: '/business/davos/', name: 'Davos' },
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
        { id: '/markets/asia/', url: '/markets/asia/', name: 'Asian Markets' },
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
    { id: '/pictures/', url: '/pictures/', name: 'Pictures', type: 'section' },
    { id: '/video/', url: '/video/', name: 'Video', type: 'section' },
  ],
  Ys = '/',
  Qs = '/site-search/',
  Xs = '/signin/',
  xs = '/signup/',
  et = '',
  st = '/myaccount/',
  tt = '/myview/all',
  nt = '/myview/following-feed',
  at = '/myview/saved';
var fs = {
  sections: Ks,
  home_url: Ys,
  search_url: Qs,
  sign_in_url: Xs,
  sign_up_url: xs,
  subscribe_url: et,
  my_account_url: st,
  my_view_url: tt,
  following_url: nt,
  saved_url: at,
};
function lt(a) {
  let e, t;
  return {
    c() {
      (e = pe('svg')), (t = pe('path')), this.h();
    },
    l(s) {
      e = me(s, 'svg', {
        xmlns: !0,
        viewBox: !0,
        'aria-hidden': !0,
        focusable: !0,
        style: !0,
        class: !0,
      });
      var n = m(e);
      (t = me(n, 'path', { d: !0 })), m(t).forEach(u), n.forEach(u), this.h();
    },
    h() {
      f(
        t,
        'd',
        'M14.8571429,9.524 C15.3142857,9.524 15.6188571,9.8285714 15.6188571,10.2857143 C15.6188571,10.7428571 15.3142857,11.0474286 14.8571429,11.0474286 L1.14285714,11.0474286 C0.68571429,11.0474286 0.38114286,10.7428571 0.38114286,10.2857143 C0.38114286,9.8285714 0.68571429,9.524 1.14285714,9.524 L14.8571429,9.524 Z M14.8571429,4.9525714 C15.3142857,4.9525714 15.6188571,5.2571429 15.6188571,5.7142857 C15.6188571,6.1714286 15.3142857,6.476 14.8571429,6.476 L1.14285714,6.476 C0.68571429,6.476 0.38114286,6.1714286 0.38114286,5.7142857 C0.38114286,5.2571429 0.68571429,4.9525714 1.14285714,4.9525714 L14.8571429,4.9525714 Z M14.8571429,0.38114286 C15.3142857,0.38114286 15.6188571,0.68571429 15.6188571,1.14285714 C15.6188571,1.6 15.3142857,1.90457143 14.8571429,1.90457143 L1.14285714,1.90457143 C0.68571429,1.90457143 0.38114286,1.6 0.38114286,1.14285714 C0.38114286,0.68571429 0.68571429,0.38114286 1.14285714,0.38114286 L14.8571429,0.38114286 Z'
      ),
        f(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        f(e, 'viewBox', '0 0 16 12'),
        f(e, 'aria-hidden', 'true'),
        f(e, 'focusable', 'false'),
        Le(e, 'width', a[0] + 'px'),
        f(e, 'class', 'svelte-17648ki');
    },
    m(s, n) {
      S(s, e, n), p(e, t);
    },
    p(s, [n]) {
      n & 1 && Le(e, 'width', s[0] + 'px');
    },
    i: q,
    o: q,
    d(s) {
      s && u(e);
    },
  };
}
function rt(a, e, t) {
  let { width: s = 20 } = e;
  return (
    (a.$$set = (n) => {
      'width' in n && t(0, (s = n.width));
    }),
    [s]
  );
}
class it extends J {
  constructor(e) {
    super(), K(this, e, rt, lt, Y, { width: 0 });
  }
}
function ot(a) {
  let e, t;
  return {
    c() {
      (e = pe('svg')), (t = pe('path')), this.h();
    },
    l(s) {
      e = me(s, 'svg', {
        'aria-hidden': !0,
        focusable: !0,
        width: !0,
        height: !0,
        xmlns: !0,
        class: !0,
      });
      var n = m(e);
      (t = me(n, 'path', { d: !0, 'fill-rule': !0 })),
        m(t).forEach(u),
        n.forEach(u),
        this.h();
    },
    h() {
      f(
        t,
        'd',
        'M.322.313a1.056 1.056 0 0 1 1.5 0l5.679 5.53L13.18.313a1.056 1.056 0 0 1 1.5 0 .993.993 0 0 1-.001 1.461l-5.88 5.725 5.88 5.727c.397.388.426.956.085 1.369l-.086.092a1.056 1.056 0 0 1-1.5 0l-5.679-5.53-5.679 5.53a1.056 1.056 0 0 1-1.5 0 .993.993 0 0 1 .001-1.461L6.2 7.5.322 1.774C-.076 1.386-.105.818.236.405L.322.313Z'
      ),
        f(t, 'fill-rule', 'evenodd'),
        f(e, 'aria-hidden', 'true'),
        f(e, 'focusable', 'false'),
        f(e, 'width', '15'),
        f(e, 'height', '15'),
        f(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        f(e, 'class', 'svelte-17648ki');
    },
    m(s, n) {
      S(s, e, n), p(e, t);
    },
    p: q,
    i: q,
    o: q,
    d(s) {
      s && u(e);
    },
  };
}
class ct extends J {
  constructor(e) {
    super(), K(this, e, null, ot, Y, {});
  }
}
function Xe(a, e, t) {
  const s = a.slice();
  return (s[4] = e[t]), s;
}
function xe(a, e, t) {
  const s = a.slice();
  return (s[7] = e[t]), s;
}
function es(a) {
  let e, t, s, n, l, r, i, o, c, h, d, E, M;
  (n = new os({
    props: { logoColour: a[1].accent, textColour: a[1].primary },
  })),
    (o = new ct({}));
  let w = a[0].sections,
    $ = [];
  for (let D = 0; D < w.length; D += 1) $[D] = ns(Xe(a, w, D));
  return {
    c() {
      (e = k('div')),
        (t = k('header')),
        (s = k('div')),
        R(n.$$.fragment),
        (l = V()),
        (r = k('button')),
        (i = k('div')),
        R(o.$$.fragment),
        (c = V());
      for (let D = 0; D < $.length; D += 1) $[D].c();
      this.h();
    },
    l(D) {
      e = b(D, 'DIV', { class: !0, 'aria-modal': !0, style: !0 });
      var _ = m(e);
      t = b(_, 'HEADER', { class: !0 });
      var v = m(t);
      s = b(v, 'DIV', { class: !0 });
      var y = m(s);
      B(n.$$.fragment, y),
        y.forEach(u),
        (l = L(v)),
        (r = b(v, 'BUTTON', { class: !0 }));
      var I = m(r);
      i = b(I, 'DIV', { class: !0 });
      var O = m(i);
      B(o.$$.fragment, O), O.forEach(u), I.forEach(u), v.forEach(u), (c = L(_));
      for (let j = 0; j < $.length; j += 1) $[j].l(_);
      _.forEach(u), this.h();
    },
    h() {
      f(s, 'class', 'logo svelte-g7nhx6'),
        f(i, 'class', 'button-container svelte-g7nhx6'),
        f(r, 'class', 'button close-button svelte-g7nhx6'),
        f(t, 'class', 'header svelte-g7nhx6'),
        f(e, 'class', 'overlay svelte-g7nhx6'),
        f(e, 'aria-modal', 'true'),
        f(
          e,
          'style',
          (h = `
      --nav-background: ${a[1].background};
      --nav-primary: ${a[1].primary};
      --nav-accent: ${a[1].accent};
      --nav-rules: ${a[1].rules};
      --nav-shadow: ${a[1].shadow};
    `)
        );
    },
    m(D, _) {
      S(D, e, _),
        p(e, t),
        p(t, s),
        U(n, s, null),
        p(t, l),
        p(t, r),
        p(r, i),
        U(o, i, null),
        p(e, c);
      for (let v = 0; v < $.length; v += 1) $[v].m(e, null);
      (d = !0),
        E ||
          ((M = ee(r, 'click', function () {
            Ms(a[3]) && a[3].apply(this, arguments);
          })),
          (E = !0));
    },
    p(D, _) {
      a = D;
      const v = {};
      if (
        (_ & 2 && (v.logoColour = a[1].accent),
        _ & 2 && (v.textColour = a[1].primary),
        n.$set(v),
        _ & 1)
      ) {
        w = a[0].sections;
        let y;
        for (y = 0; y < w.length; y += 1) {
          const I = Xe(a, w, y);
          $[y] ? $[y].p(I, _) : (($[y] = ns(I)), $[y].c(), $[y].m(e, null));
        }
        for (; y < $.length; y += 1) $[y].d(1);
        $.length = w.length;
      }
      (!d ||
        (_ & 2 &&
          h !==
            (h = `
      --nav-background: ${a[1].background};
      --nav-primary: ${a[1].primary};
      --nav-accent: ${a[1].accent};
      --nav-rules: ${a[1].rules};
      --nav-shadow: ${a[1].shadow};
    `))) &&
        f(e, 'style', h);
    },
    i(D) {
      d || (C(n.$$.fragment, D), C(o.$$.fragment, D), (d = !0));
    },
    o(D) {
      N(n.$$.fragment, D), N(o.$$.fragment, D), (d = !1);
    },
    d(D) {
      D && u(e), P(n), P(o), de($, D), (E = !1), M();
    },
  };
}
function ss(a) {
  let e,
    t = a[4].children,
    s = [];
  for (let n = 0; n < t.length; n += 1) s[n] = ts(xe(a, t, n));
  return {
    c() {
      e = k('ul');
      for (let n = 0; n < s.length; n += 1) s[n].c();
      this.h();
    },
    l(n) {
      e = b(n, 'UL', { class: !0 });
      var l = m(e);
      for (let r = 0; r < s.length; r += 1) s[r].l(l);
      l.forEach(u), this.h();
    },
    h() {
      f(e, 'class', 'subsections svelte-g7nhx6');
    },
    m(n, l) {
      S(n, e, l);
      for (let r = 0; r < s.length; r += 1) s[r].m(e, null);
    },
    p(n, l) {
      if (l & 1) {
        t = n[4].children;
        let r;
        for (r = 0; r < t.length; r += 1) {
          const i = xe(n, t, r);
          s[r] ? s[r].p(i, l) : ((s[r] = ts(i)), s[r].c(), s[r].m(e, null));
        }
        for (; r < s.length; r += 1) s[r].d(1);
        s.length = t.length;
      }
    },
    d(n) {
      n && u(e), de(s, n);
    },
  };
}
function ts(a) {
  let e,
    t,
    s = a[7].name + '',
    n,
    l,
    r;
  return {
    c() {
      (e = k('li')), (t = k('a')), (n = z(s)), (r = V()), this.h();
    },
    l(i) {
      e = b(i, 'LI', {});
      var o = m(e);
      t = b(o, 'A', { class: !0, href: !0 });
      var c = m(t);
      (n = H(c, s)), c.forEach(u), (r = L(o)), o.forEach(u), this.h();
    },
    h() {
      f(t, 'class', 'subsection-link svelte-g7nhx6'),
        f(t, 'href', (l = F(a[7].url)));
    },
    m(i, o) {
      S(i, e, o), p(e, t), p(t, n), p(e, r);
    },
    p(i, o) {
      o & 1 && s !== (s = i[7].name + '') && Q(n, s),
        o & 1 && l !== (l = F(i[7].url)) && f(t, 'href', l);
    },
    d(i) {
      i && u(e);
    },
  };
}
function ns(a) {
  let e,
    t,
    s = a[4].name + '',
    n,
    l,
    r,
    i,
    o = a[4].children && ss(a);
  return {
    c() {
      (e = k('section')),
        (t = k('a')),
        (n = z(s)),
        (r = V()),
        o && o.c(),
        (i = V()),
        this.h();
    },
    l(c) {
      e = b(c, 'SECTION', { class: !0 });
      var h = m(e);
      t = b(h, 'A', { class: !0, href: !0 });
      var d = m(t);
      (n = H(d, s)),
        d.forEach(u),
        (r = L(h)),
        o && o.l(h),
        (i = L(h)),
        h.forEach(u),
        this.h();
    },
    h() {
      f(t, 'class', 'section-link svelte-g7nhx6'),
        f(t, 'href', (l = F(a[4].url))),
        f(e, 'class', 'section svelte-g7nhx6');
    },
    m(c, h) {
      S(c, e, h), p(e, t), p(t, n), p(e, r), o && o.m(e, null), p(e, i);
    },
    p(c, h) {
      h & 1 && s !== (s = c[4].name + '') && Q(n, s),
        h & 1 && l !== (l = F(c[4].url)) && f(t, 'href', l),
        c[4].children
          ? o
            ? o.p(c, h)
            : ((o = ss(c)), o.c(), o.m(e, i))
          : o && (o.d(1), (o = null));
    },
    d(c) {
      c && u(e), o && o.d();
    },
  };
}
function ut(a) {
  let e,
    t,
    s = a[2] && es(a);
  return {
    c() {
      s && s.c(), (e = ke());
    },
    l(n) {
      s && s.l(n), (e = ke());
    },
    m(n, l) {
      s && s.m(n, l), S(n, e, l), (t = !0);
    },
    p(n, [l]) {
      n[2]
        ? s
          ? (s.p(n, l), l & 4 && C(s, 1))
          : ((s = es(n)), s.c(), C(s, 1), s.m(e.parentNode, e))
        : s &&
          (fe(),
          N(s, 1, 1, () => {
            s = null;
          }),
          he());
    },
    i(n) {
      t || (C(s), (t = !0));
    },
    o(n) {
      N(s), (t = !1);
    },
    d(n) {
      s && s.d(n), n && u(e);
    },
  };
}
function ft(a, e, t) {
  let { data: s = [] } = e,
    { theme: n = {} } = e,
    { isMobileMenuOpen: l = !1 } = e,
    { releaseMobileMenu: r = () => {} } = e;
  return (
    (a.$$set = (i) => {
      'data' in i && t(0, (s = i.data)),
        'theme' in i && t(1, (n = i.theme)),
        'isMobileMenuOpen' in i && t(2, (l = i.isMobileMenuOpen)),
        'releaseMobileMenu' in i && t(3, (r = i.releaseMobileMenu));
    }),
    [s, n, l, r]
  );
}
class ht extends J {
  constructor(e) {
    super(),
      K(this, e, ft, ut, Y, {
        data: 0,
        theme: 1,
        isMobileMenuOpen: 2,
        releaseMobileMenu: 3,
      });
  }
}
function dt(a) {
  let e, t, s, n, l, r, i, o, c, h, d, E, M, w, $, D, _, v, y, I, O, j, Z, G, X;
  return (
    (c = new os({
      props: { logoColour: a[1].accent, textColour: a[1].primary },
    })),
    (d = new Js({ props: { sections: a[2] } })),
    (I = new it({})),
    (j = new ht({
      props: {
        theme: a[1],
        isMobileMenuOpen: a[0],
        releaseMobileMenu: a[5],
        data: fs,
      },
    })),
    {
      c() {
        (e = k('header')),
          (t = k('div')),
          (s = k('div')),
          (n = k('div')),
          (l = k('div')),
          (r = k('div')),
          (i = k('div')),
          (o = k('a')),
          R(c.$$.fragment),
          (h = V()),
          R(d.$$.fragment),
          (E = V()),
          (M = k('div')),
          (w = k('div')),
          ($ = V()),
          (D = k('div')),
          (_ = k('div')),
          (v = k('button')),
          (y = k('div')),
          R(I.$$.fragment),
          (O = V()),
          R(j.$$.fragment),
          this.h();
      },
      l(A) {
        e = b(A, 'HEADER', { style: !0 });
        var W = m(e);
        t = b(W, 'DIV', { class: !0 });
        var se = m(t);
        s = b(se, 'DIV', { class: !0 });
        var ie = m(s);
        n = b(ie, 'DIV', { class: !0 });
        var te = m(n);
        l = b(te, 'DIV', { class: !0 });
        var ne = m(l);
        r = b(ne, 'DIV', { class: !0 });
        var oe = m(r);
        i = b(oe, 'DIV', { class: !0 });
        var x = m(i);
        o = b(x, 'A', { href: !0 });
        var ce = m(o);
        B(c.$$.fragment, ce),
          ce.forEach(u),
          x.forEach(u),
          oe.forEach(u),
          (h = L(ne)),
          B(d.$$.fragment, ne),
          (E = L(ne)),
          (M = b(ne, 'DIV', { class: !0 }));
        var ae = m(M);
        (w = b(ae, 'DIV', { class: !0 })),
          m(w).forEach(u),
          ae.forEach(u),
          ($ = L(ne)),
          (D = b(ne, 'DIV', { class: !0 }));
        var ue = m(D);
        _ = b(ue, 'DIV', { class: !0 });
        var g = m(_);
        v = b(g, 'BUTTON', {
          class: !0,
          'aria-label': !0,
          'aria-haspopup': !0,
          'aria-expanded': !0,
        });
        var T = m(v);
        y = b(T, 'DIV', { class: !0 });
        var le = m(y);
        B(I.$$.fragment, le),
          le.forEach(u),
          T.forEach(u),
          g.forEach(u),
          ue.forEach(u),
          ne.forEach(u),
          te.forEach(u),
          ie.forEach(u),
          se.forEach(u),
          W.forEach(u),
          (O = L(A)),
          B(j.$$.fragment, A),
          this.h();
      },
      h() {
        f(o, 'href', 'https://www.reuters.com'),
          f(i, 'class', 'logo svelte-gr1hp3'),
          f(r, 'class', 'logo-container svelte-gr1hp3'),
          f(w, 'class', 'spacer svelte-gr1hp3'),
          f(M, 'class', 'spacer-container svelte-gr1hp3'),
          f(y, 'class', 'button-container svelte-gr1hp3'),
          f(v, 'class', 'menu-button svelte-gr1hp3'),
          f(v, 'aria-label', 'Menu'),
          f(v, 'aria-haspopup', 'true'),
          f(v, 'aria-expanded', a[0]),
          f(_, 'class', 'mobile-menu svelte-gr1hp3'),
          f(D, 'class', 'mobile-button-group svelte-gr1hp3'),
          f(l, 'class', 'main-bar svelte-gr1hp3'),
          f(n, 'class', 'inner svelte-gr1hp3'),
          f(s, 'class', 'scroll-container svelte-gr1hp3'),
          f(t, 'class', 'nav-container show-nav svelte-gr1hp3'),
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
      m(A, W) {
        S(A, e, W),
          p(e, t),
          p(t, s),
          p(s, n),
          p(n, l),
          p(l, r),
          p(r, i),
          p(i, o),
          U(c, o, null),
          p(l, h),
          U(d, l, null),
          p(l, E),
          p(l, M),
          p(M, w),
          p(l, $),
          p(l, D),
          p(D, _),
          p(_, v),
          p(v, y),
          U(I, y, null),
          S(A, O, W),
          U(j, A, W),
          (Z = !0),
          G || ((X = ee(v, 'click', a[4])), (G = !0));
      },
      p(A, [W]) {
        (!Z || W & 1) && f(v, 'aria-expanded', A[0]);
        const se = {};
        W & 1 && (se.isMobileMenuOpen = A[0]),
          W & 1 && (se.releaseMobileMenu = A[5]),
          j.$set(se);
      },
      i(A) {
        Z ||
          (C(c.$$.fragment, A),
          C(d.$$.fragment, A),
          C(I.$$.fragment, A),
          C(j.$$.fragment, A),
          (Z = !0));
      },
      o(A) {
        N(c.$$.fragment, A),
          N(d.$$.fragment, A),
          N(I.$$.fragment, A),
          N(j.$$.fragment, A),
          (Z = !1);
      },
      d(A) {
        A && u(e), P(c), P(d), P(I), A && u(O), P(j, A), (G = !1), X();
      },
    }
  );
}
const $e = {
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
function pt(a, e, t) {
  let { theme: s = {} } = e;
  const n = ge(ge({}, $e.default), s);
  Ne('nav-theme', je(n)), Ne('nav-active-section', je(null));
  const { sections: l } = fs;
  let r = !1;
  const i = () => {
      t(0, (r = !r));
    },
    o = () => {
      t(0, (r = !1));
    };
  return (
    (a.$$set = (c) => {
      'theme' in c && t(3, (s = c.theme));
    }),
    [r, n, l, s, i, o]
  );
}
class we extends J {
  constructor(e) {
    super(), K(this, e, pt, dt, Y, { theme: 3 });
  }
}
function mt(a) {
  let e, t;
  return (
    (e = new we({})),
    {
      c() {
        R(e.$$.fragment);
      },
      l(s) {
        B(e.$$.fragment, s);
      },
      m(s, n) {
        U(e, s, n), (t = !0);
      },
      i(s) {
        t || (C(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        N(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        P(e, s);
      },
    }
  );
}
function vt(a) {
  let e, t;
  return (
    (e = new we({ props: { theme: $e.dark } })),
    {
      c() {
        R(e.$$.fragment);
      },
      l(s) {
        B(e.$$.fragment, s);
      },
      m(s, n) {
        U(e, s, n), (t = !0);
      },
      p: q,
      i(s) {
        t || (C(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        N(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        P(e, s);
      },
    }
  );
}
function _t(a) {
  let e, t;
  return (
    (e = new we({
      props: {
        theme: Ce(ge({}, $e.default), { background: '#e0d3b8', rules: '#aaa' }),
      },
    })),
    {
      c() {
        R(e.$$.fragment);
      },
      l(s) {
        B(e.$$.fragment, s);
      },
      m(s, n) {
        U(e, s, n), (t = !0);
      },
      p: q,
      i(s) {
        t || (C(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        N(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        P(e, s);
      },
    }
  );
}
function gt(a) {
  let e,
    t,
    s,
    n,
    l,
    r,
    i,
    o,
    c = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteNav <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteNav</span> <span class="token punctuation">/></span></span></code>`,
    h,
    d,
    E,
    M,
    w,
    $,
    D,
    _,
    v,
    y,
    I = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteNav<span class="token punctuation">,</span> SiteNavThemes <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteNav</span> <span class="token attr-name">theme=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>SiteNavThemes<span class="token punctuation">.</span>dark<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,
    O,
    j,
    Z,
    G,
    X,
    A,
    W,
    se,
    ie,
    te,
    ne = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteNav<span class="token punctuation">,</span> SiteNavThemes <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteNav</span> <span class="token attr-name">theme=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> <span class="token operator">...</span>themes<span class="token punctuation">.</span>dark<span class="token punctuation">,</span> <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#e0d3b8'</span><span class="token punctuation">,</span> <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token string">'#aaa'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,
    oe,
    x,
    ce,
    ae,
    ue;
  return (
    (d = new be({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [mt] },
        $$scope: { ctx: a },
      },
    })),
    (j = new be({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [vt] },
        $$scope: { ctx: a },
      },
    })),
    (x = new be({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [_t] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        (e = k('section')),
          (t = k('h2')),
          (s = z(as)),
          (n = V()),
          (l = k('p')),
          (r = z('A component that shadows our Reuters dotcom site nav.')),
          (i = V()),
          (o = k('pre')),
          (h = V()),
          R(d.$$.fragment),
          (E = V()),
          (M = k('div')),
          (w = V()),
          ($ = k('section')),
          (D = k('p')),
          (_ = z('Change the colour theme.')),
          (v = V()),
          (y = k('pre')),
          (O = V()),
          R(j.$$.fragment),
          (Z = V()),
          (G = k('div')),
          (X = V()),
          (A = k('section')),
          (W = k('p')),
          (se = z('Customise the colour theme.')),
          (ie = V()),
          (te = k('pre')),
          (oe = V()),
          R(x.$$.fragment),
          (ce = V()),
          (ae = k('div')),
          this.h();
      },
      l(g) {
        e = b(g, 'SECTION', {});
        var T = m(e);
        t = b(T, 'H2', {});
        var le = m(t);
        (s = H(le, as)), le.forEach(u), (n = L(T)), (l = b(T, 'P', {}));
        var ve = m(l);
        (r = H(ve, 'A component that shadows our Reuters dotcom site nav.')),
          ve.forEach(u),
          T.forEach(u),
          (i = L(g)),
          (o = b(g, 'PRE', { class: !0 }));
        var _e = m(o);
        _e.forEach(u),
          (h = L(g)),
          B(d.$$.fragment, g),
          (E = L(g)),
          (M = b(g, 'DIV', { class: !0 })),
          m(M).forEach(u),
          (w = L(g)),
          ($ = b(g, 'SECTION', {}));
        var ye = m($);
        D = b(ye, 'P', {});
        var Ee = m(D);
        (_ = H(Ee, 'Change the colour theme.')),
          Ee.forEach(u),
          ye.forEach(u),
          (v = L(g)),
          (y = b(g, 'PRE', { class: !0 }));
        var hs = m(y);
        hs.forEach(u),
          (O = L(g)),
          B(j.$$.fragment, g),
          (Z = L(g)),
          (G = b(g, 'DIV', { class: !0 })),
          m(G).forEach(u),
          (X = L(g)),
          (A = b(g, 'SECTION', {}));
        var Me = m(A);
        W = b(Me, 'P', {});
        var Ie = m(W);
        (se = H(Ie, 'Customise the colour theme.')),
          Ie.forEach(u),
          Me.forEach(u),
          (ie = L(g)),
          (te = b(g, 'PRE', { class: !0 }));
        var ds = m(te);
        ds.forEach(u),
          (oe = L(g)),
          B(x.$$.fragment, g),
          (ce = L(g)),
          (ae = b(g, 'DIV', { class: !0 })),
          m(ae).forEach(u),
          this.h();
      },
      h() {
        f(o, 'class', 'language-svelte'),
          f(M, 'class', 'spacer svelte-1ess2x0'),
          f(y, 'class', 'language-svelte'),
          f(G, 'class', 'spacer svelte-1ess2x0'),
          f(te, 'class', 'language-svelte'),
          f(ae, 'class', 'spacer svelte-1ess2x0');
      },
      m(g, T) {
        S(g, e, T),
          p(e, t),
          p(t, s),
          p(e, n),
          p(e, l),
          p(l, r),
          S(g, i, T),
          S(g, o, T),
          (o.innerHTML = c),
          S(g, h, T),
          U(d, g, T),
          S(g, E, T),
          S(g, M, T),
          S(g, w, T),
          S(g, $, T),
          p($, D),
          p(D, _),
          S(g, v, T),
          S(g, y, T),
          (y.innerHTML = I),
          S(g, O, T),
          U(j, g, T),
          S(g, Z, T),
          S(g, G, T),
          S(g, X, T),
          S(g, A, T),
          p(A, W),
          p(W, se),
          S(g, ie, T),
          S(g, te, T),
          (te.innerHTML = ne),
          S(g, oe, T),
          U(x, g, T),
          S(g, ce, T),
          S(g, ae, T),
          (ue = !0);
      },
      p(g, [T]) {
        const le = {};
        T & 1 && (le.$$scope = { dirty: T, ctx: g }), d.$set(le);
        const ve = {};
        T & 1 && (ve.$$scope = { dirty: T, ctx: g }), j.$set(ve);
        const _e = {};
        T & 1 && (_e.$$scope = { dirty: T, ctx: g }), x.$set(_e);
      },
      i(g) {
        ue ||
          (C(d.$$.fragment, g),
          C(j.$$.fragment, g),
          C(x.$$.fragment, g),
          (ue = !0));
      },
      o(g) {
        N(d.$$.fragment, g),
          N(j.$$.fragment, g),
          N(x.$$.fragment, g),
          (ue = !1);
      },
      d(g) {
        g && u(e),
          g && u(i),
          g && u(o),
          g && u(h),
          P(d, g),
          g && u(E),
          g && u(M),
          g && u(w),
          g && u($),
          g && u(v),
          g && u(y),
          g && u(O),
          P(j, g),
          g && u(Z),
          g && u(G),
          g && u(X),
          g && u(A),
          g && u(ie),
          g && u(te),
          g && u(oe),
          P(x, g),
          g && u(ce),
          g && u(ae);
      },
    }
  );
}
const kt = {
    title: 'SiteNav',
    description: 'Reuters dotcom site nav shadow component.',
    slug: 'site-nav',
  },
  { title: as, description: St, slug: Dt } = kt;
class Ct extends J {
  constructor(e) {
    super(), K(this, e, null, gt, Y, {});
  }
}
export { Ct as default, kt as metadata };
