var Ip = Object.defineProperty,
  Dp = Object.defineProperties;
var Tp = Object.getOwnPropertyDescriptors;
var Jr = Object.getOwnPropertySymbols;
var Lp = Object.prototype.hasOwnProperty,
  Op = Object.prototype.propertyIsEnumerable;
var Kr = (p, e, s) =>
    e in p
      ? Ip(p, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (p[e] = s),
  Xr = (p, e) => {
    for (var s in e || (e = {})) Lp.call(e, s) && Kr(p, s, e[s]);
    if (Jr) for (var s of Jr(e)) Op.call(e, s) && Kr(p, s, e[s]);
    return p;
  },
  Zr = (p, e) => Dp(p, Tp(e));
import { _ as $l } from './preload-helper-438f94a3.js';
import {
  S as se,
  i as te,
  s as ae,
  l as B,
  f as w,
  x as P,
  e as f,
  k as y,
  c as d,
  a as k,
  n as E,
  d as r,
  b as $,
  Y as Ie,
  H as a,
  p as Et,
  q as $t,
  r as H,
  u as C,
  v as L,
  w as F,
  j as O,
  o as j,
  L as Sl,
  B as St,
  m as z,
  I,
  ab as Pt,
  O as jp,
  Q as zp,
  ah as Bp,
  aa as Pl,
  ai as Cl,
  aj as Il,
  t as g,
  g as h,
  V as Gp,
  h as Np,
  a2 as xr,
  a3 as ep,
} from './vendor-362b926b.js';
import { D as nn } from './index-b98e0497.js';
import './@component-docs_components-a126c5f0.js';
import './paths-6758d194.js';
function np(p, e, s) {
  const n = p.slice();
  return (n[4] = e[s]), (n[6] = s), n;
}
function sp(p) {
  let e, s, n, t;
  const c = [p[4].backgroundProps || {}];
  var o = p[4].background;
  function u(l) {
    let m = {};
    for (let b = 0; b < c.length; b += 1) m = St(m, c[b]);
    return { props: m };
  }
  return (
    o && (s = new o(u())),
    {
      c() {
        (e = f('div')), s && O(s.$$.fragment), (n = y()), this.h();
      },
      l(l) {
        e = d(l, 'DIV', { class: !0 });
        var m = k(e);
        s && z(s.$$.fragment, m), (n = E(m)), m.forEach(r), this.h();
      },
      h() {
        $(e, 'class', 'step-background step-' + (p[6] + 1) + ' svelte-va4hxg'),
          Ie(e, 'visible', p[3] ? p[6] <= p[0] : p[6] === p[0]),
          Ie(e, 'hidden', p[3] ? p[6] > p[0] : p[6] !== p[0]);
      },
      m(l, m) {
        w(l, e, m), s && j(s, e, null), a(e, n), (t = !0);
      },
      p(l, m) {
        const b = m & 2 ? Et(c, [$t(l[4].backgroundProps || {})]) : {};
        if (o !== (o = l[4].background)) {
          if (s) {
            H();
            const v = s;
            C(v.$$.fragment, 1, 0, () => {
              L(v, 1);
            }),
              F();
          }
          o
            ? ((s = new o(u())),
              O(s.$$.fragment),
              P(s.$$.fragment, 1),
              j(s, e, n))
            : (s = null);
        } else o && s.$set(b);
        m & 9 && Ie(e, 'visible', l[3] ? l[6] <= l[0] : l[6] === l[0]),
          m & 9 && Ie(e, 'hidden', l[3] ? l[6] > l[0] : l[6] !== l[0]);
      },
      i(l) {
        t || (s && P(s.$$.fragment, l), (t = !0));
      },
      o(l) {
        s && C(s.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && r(e), s && L(s);
      },
    }
  );
}
function tp(p) {
  let e,
    s,
    n = (p[2] === 0 || (p[6] >= p[0] - p[2] && p[6] <= p[0] + p[2])) && sp(p);
  return {
    c() {
      n && n.c(), (e = B());
    },
    l(t) {
      n && n.l(t), (e = B());
    },
    m(t, c) {
      n && n.m(t, c), w(t, e, c), (s = !0);
    },
    p(t, c) {
      t[2] === 0 || (t[6] >= t[0] - t[2] && t[6] <= t[0] + t[2])
        ? n
          ? (n.p(t, c), c & 5 && P(n, 1))
          : ((n = sp(t)), n.c(), P(n, 1), n.m(e.parentNode, e))
        : n &&
          (H(),
          C(n, 1, 1, () => {
            n = null;
          }),
          F());
    },
    i(t) {
      s || (P(n), (s = !0));
    },
    o(t) {
      C(n), (s = !1);
    },
    d(t) {
      n && n.d(t), t && r(e);
    },
  };
}
function Mp(p) {
  let e,
    s,
    n = p[1],
    t = [];
  for (let o = 0; o < n.length; o += 1) t[o] = tp(np(p, n, o));
  const c = (o) =>
    C(t[o], 1, 1, () => {
      t[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < t.length; o += 1) t[o].c();
      e = B();
    },
    l(o) {
      for (let u = 0; u < t.length; u += 1) t[u].l(o);
      e = B();
    },
    m(o, u) {
      for (let l = 0; l < t.length; l += 1) t[l].m(o, u);
      w(o, e, u), (s = !0);
    },
    p(o, [u]) {
      if (u & 15) {
        n = o[1];
        let l;
        for (l = 0; l < n.length; l += 1) {
          const m = np(o, n, l);
          t[l]
            ? (t[l].p(m, u), P(t[l], 1))
            : ((t[l] = tp(m)), t[l].c(), P(t[l], 1), t[l].m(e.parentNode, e));
        }
        for (H(), l = n.length; l < t.length; l += 1) c(l);
        F();
      }
    },
    i(o) {
      if (!s) {
        for (let u = 0; u < n.length; u += 1) P(t[u]);
        s = !0;
      }
    },
    o(o) {
      t = t.filter(Boolean);
      for (let u = 0; u < t.length; u += 1) C(t[u]);
      s = !1;
    },
    d(o) {
      Sl(t, o), o && r(e);
    },
  };
}
function Rp(p, e, s) {
  let { index: n } = e,
    { steps: t = [] } = e,
    { preload: c = 1 } = e,
    { stackBackground: o = !0 } = e;
  return (
    (p.$$set = (u) => {
      'index' in u && s(0, (n = u.index)),
        'steps' in u && s(1, (t = u.steps)),
        'preload' in u && s(2, (c = u.preload)),
        'stackBackground' in u && s(3, (o = u.stackBackground));
    }),
    [n, t, c, o]
  );
}
class Ap extends se {
  constructor(e) {
    super();
    te(this, e, Rp, Mp, ae, {
      index: 0,
      steps: 1,
      preload: 2,
      stackBackground: 3,
    });
  }
}
function ap(p, e, s) {
  const n = p.slice();
  return (n[1] = e[s]), (n[3] = s), n;
}
function Up(p) {
  let e, s, n, t;
  const c = [Fp, Hp],
    o = [];
  function u(l, m) {
    return typeof l[1].foreground == 'string' ? 0 : 1;
  }
  return (
    (s = u(p)),
    (n = o[s] = c[s](p)),
    {
      c() {
        (e = f('div')), n.c(), this.h();
      },
      l(l) {
        e = d(l, 'DIV', { class: !0 });
        var m = k(e);
        n.l(m), m.forEach(r), this.h();
      },
      h() {
        $(e, 'class', 'step-foreground svelte-20kuyz');
      },
      m(l, m) {
        w(l, e, m), o[s].m(e, null), (t = !0);
      },
      p(l, m) {
        let b = s;
        (s = u(l)),
          s === b
            ? o[s].p(l, m)
            : (H(),
              C(o[b], 1, 1, () => {
                o[b] = null;
              }),
              F(),
              (n = o[s]),
              n ? n.p(l, m) : ((n = o[s] = c[s](l)), n.c()),
              P(n, 1),
              n.m(e, null));
      },
      i(l) {
        t || (P(n), (t = !0));
      },
      o(l) {
        C(n), (t = !1);
      },
      d(l) {
        l && r(e), o[s].d();
      },
    }
  );
}
function Vp(p) {
  let e;
  return {
    c() {
      (e = f('div')), this.h();
    },
    l(s) {
      (e = d(s, 'DIV', { class: !0 })), k(e).forEach(r), this.h();
    },
    h() {
      $(e, 'class', 'empty-step-foreground');
    },
    m(s, n) {
      w(s, e, n);
    },
    p: I,
    i: I,
    o: I,
    d(s) {
      s && r(e);
    },
  };
}
function Hp(p) {
  let e, s, n;
  const t = [p[1].foregroundProps || {}];
  var c = p[1].foreground;
  function o(u) {
    let l = {};
    for (let m = 0; m < t.length; m += 1) l = St(l, t[m]);
    return { props: l };
  }
  return (
    c && (e = new c(o())),
    {
      c() {
        e && O(e.$$.fragment), (s = B());
      },
      l(u) {
        e && z(e.$$.fragment, u), (s = B());
      },
      m(u, l) {
        e && j(e, u, l), w(u, s, l), (n = !0);
      },
      p(u, l) {
        const m = l & 1 ? Et(t, [$t(u[1].foregroundProps || {})]) : {};
        if (c !== (c = u[1].foreground)) {
          if (e) {
            H();
            const b = e;
            C(b.$$.fragment, 1, 0, () => {
              L(b, 1);
            }),
              F();
          }
          c
            ? ((e = new c(o())),
              O(e.$$.fragment),
              P(e.$$.fragment, 1),
              j(e, s.parentNode, s))
            : (e = null);
        } else c && e.$set(m);
      },
      i(u) {
        n || (e && P(e.$$.fragment, u), (n = !0));
      },
      o(u) {
        e && C(e.$$.fragment, u), (n = !1);
      },
      d(u) {
        u && r(s), e && L(e, u);
      },
    }
  );
}
function Fp(p) {
  let e,
    s = Pt.parse(p[1].foreground) + '',
    n;
  return {
    c() {
      (e = new jp()), (n = B()), this.h();
    },
    l(t) {
      (e = zp(t)), (n = B()), this.h();
    },
    h() {
      e.a = n;
    },
    m(t, c) {
      e.m(s, t, c), w(t, n, c);
    },
    p(t, c) {
      c & 1 && s !== (s = Pt.parse(t[1].foreground) + '') && e.p(s);
    },
    i: I,
    o: I,
    d(t) {
      t && r(n), t && e.d();
    },
  };
}
function op(p) {
  let e, s, n, t, c, o;
  const u = [Vp, Up],
    l = [];
  function m(b, v) {
    return b[1].foreground === '' || !b[1].foreground ? 0 : 1;
  }
  return (
    (s = m(p)),
    (n = l[s] = u[s](p)),
    {
      c() {
        (e = f('section')), n.c(), (t = y()), this.h();
      },
      l(b) {
        e = d(b, 'SECTION', { class: !0 });
        var v = k(e);
        n.l(v), (t = E(v)), v.forEach(r), this.h();
      },
      h() {
        $(
          e,
          'class',
          (c =
            'step-foreground-container step-' + (p[3] + 1) + ' svelte-20kuyz')
        );
      },
      m(b, v) {
        w(b, e, v), l[s].m(e, null), a(e, t), (o = !0);
      },
      p(b, v) {
        let S = s;
        (s = m(b)),
          s === S
            ? l[s].p(b, v)
            : (H(),
              C(l[S], 1, 1, () => {
                l[S] = null;
              }),
              F(),
              (n = l[s]),
              n ? n.p(b, v) : ((n = l[s] = u[s](b)), n.c()),
              P(n, 1),
              n.m(e, t));
      },
      i(b) {
        o || (P(n), (o = !0));
      },
      o(b) {
        C(n), (o = !1);
      },
      d(b) {
        b && r(e), l[s].d();
      },
    }
  );
}
function qp(p) {
  let e,
    s,
    n = p[0],
    t = [];
  for (let o = 0; o < n.length; o += 1) t[o] = op(ap(p, n, o));
  const c = (o) =>
    C(t[o], 1, 1, () => {
      t[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < t.length; o += 1) t[o].c();
      e = B();
    },
    l(o) {
      for (let u = 0; u < t.length; u += 1) t[u].l(o);
      e = B();
    },
    m(o, u) {
      for (let l = 0; l < t.length; l += 1) t[l].m(o, u);
      w(o, e, u), (s = !0);
    },
    p(o, [u]) {
      if (u & 1) {
        n = o[0];
        let l;
        for (l = 0; l < n.length; l += 1) {
          const m = ap(o, n, l);
          t[l]
            ? (t[l].p(m, u), P(t[l], 1))
            : ((t[l] = op(m)), t[l].c(), P(t[l], 1), t[l].m(e.parentNode, e));
        }
        for (H(), l = n.length; l < t.length; l += 1) c(l);
        F();
      }
    },
    i(o) {
      if (!s) {
        for (let u = 0; u < n.length; u += 1) P(t[u]);
        s = !0;
      }
    },
    o(o) {
      t = t.filter(Boolean);
      for (let u = 0; u < t.length; u += 1) C(t[u]);
      s = !1;
    },
    d(o) {
      Sl(t, o), o && r(e);
    },
  };
}
function Qp(p, e, s) {
  let { steps: n = [] } = e;
  return (
    (p.$$set = (t) => {
      'steps' in t && s(0, (n = t.steps));
    }),
    [n]
  );
}
class Yp extends se {
  constructor(e) {
    super();
    te(this, e, Qp, qp, ae, { steps: 0 });
  }
}
function Wp(p) {
  let e, s, n, t, c, o, u;
  const l = [p[0].backgroundProps || {}];
  var m = p[0].background;
  function b(v) {
    let S = {};
    for (let D = 0; D < l.length; D += 1) S = St(S, l[D]);
    return { props: S };
  }
  return (
    m && (n = new m(b())),
    {
      c() {
        (e = f('section')), (s = f('div')), n && O(n.$$.fragment), this.h();
      },
      l(v) {
        e = d(v, 'SECTION', { class: !0, step: !0 });
        var S = k(e);
        s = d(S, 'DIV', { class: !0 });
        var D = k(s);
        n && z(n.$$.fragment, D), D.forEach(r), S.forEach(r), this.h();
      },
      h() {
        $(s, 'class', (t = 'embedded-background step-' + (p[2] + 1))),
          $(e, 'class', (c = 'background-container graphic ' + p[1])),
          $(e, 'step', (o = p[2] + 1));
      },
      m(v, S) {
        w(v, e, S), a(e, s), n && j(n, s, null), (u = !0);
      },
      p(v, [S]) {
        const D = S & 1 ? Et(l, [$t(v[0].backgroundProps || {})]) : {};
        if (m !== (m = v[0].background)) {
          if (n) {
            H();
            const U = n;
            C(U.$$.fragment, 1, 0, () => {
              L(U, 1);
            }),
              F();
          }
          m
            ? ((n = new m(b())),
              O(n.$$.fragment),
              P(n.$$.fragment, 1),
              j(n, s, null))
            : (n = null);
        } else m && n.$set(D);
        (!u ||
          (S & 4 && t !== (t = 'embedded-background step-' + (v[2] + 1)))) &&
          $(s, 'class', t),
          (!u ||
            (S & 2 && c !== (c = 'background-container graphic ' + v[1]))) &&
            $(e, 'class', c),
          (!u || (S & 4 && o !== (o = v[2] + 1))) && $(e, 'step', o);
      },
      i(v) {
        u || (n && P(n.$$.fragment, v), (u = !0));
      },
      o(v) {
        n && C(n.$$.fragment, v), (u = !1);
      },
      d(v) {
        v && r(e), n && L(n);
      },
    }
  );
}
function Jp(p, e, s) {
  let { step: n } = e,
    { backgroundSize: t } = e,
    { index: c } = e;
  return (
    (p.$$set = (o) => {
      'step' in o && s(0, (n = o.step)),
        'backgroundSize' in o && s(1, (t = o.backgroundSize)),
        'index' in o && s(2, (c = o.index));
    }),
    [n, t, c]
  );
}
class lp extends se {
  constructor(e) {
    super();
    te(this, e, Jp, Wp, ae, { step: 0, backgroundSize: 1, index: 2 });
  }
}
function Kp(p) {
  let e, s, n, t;
  const c = [p[0].foregroundProps || {}];
  var o = p[0].foreground;
  function u(l) {
    let m = {};
    for (let b = 0; b < c.length; b += 1) m = St(m, c[b]);
    return { props: m };
  }
  return (
    o && (s = new o(u())),
    {
      c() {
        (e = f('div')), s && O(s.$$.fragment), this.h();
      },
      l(l) {
        e = d(l, 'DIV', { class: !0 });
        var m = k(e);
        s && z(s.$$.fragment, m), m.forEach(r), this.h();
      },
      h() {
        $(
          e,
          'class',
          (n = 'embedded-foreground step-' + (p[1] + 1) + ' svelte-kywsd6')
        );
      },
      m(l, m) {
        w(l, e, m), s && j(s, e, null), (t = !0);
      },
      p(l, m) {
        const b = m & 1 ? Et(c, [$t(l[0].foregroundProps || {})]) : {};
        if (o !== (o = l[0].foreground)) {
          if (s) {
            H();
            const v = s;
            C(v.$$.fragment, 1, 0, () => {
              L(v, 1);
            }),
              F();
          }
          o
            ? ((s = new o(u())),
              O(s.$$.fragment),
              P(s.$$.fragment, 1),
              j(s, e, null))
            : (s = null);
        } else o && s.$set(b);
        (!t ||
          (m & 2 &&
            n !==
              (n =
                'embedded-foreground step-' +
                (l[1] + 1) +
                ' svelte-kywsd6'))) &&
          $(e, 'class', n);
      },
      i(l) {
        t || (s && P(s.$$.fragment, l), (t = !0));
      },
      o(l) {
        s && C(s.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && r(e), s && L(s);
      },
    }
  );
}
function Xp(p) {
  let e,
    s,
    n = Pt.parse(p[0].foreground) + '',
    t,
    c;
  return {
    c() {
      (e = f('section')), (s = f('div')), this.h();
    },
    l(o) {
      e = d(o, 'SECTION', { class: !0, step: !0 });
      var u = k(e);
      s = d(u, 'DIV', { class: !0 });
      var l = k(s);
      l.forEach(r), u.forEach(r), this.h();
    },
    h() {
      $(
        s,
        'class',
        (t = 'embedded-foreground step-' + (p[1] + 1) + ' svelte-kywsd6')
      ),
        $(e, 'class', 'body-text'),
        $(e, 'step', (c = p[1] + 1));
    },
    m(o, u) {
      w(o, e, u), a(e, s), (s.innerHTML = n);
    },
    p(o, u) {
      u & 1 && n !== (n = Pt.parse(o[0].foreground) + '') && (s.innerHTML = n),
        u & 2 &&
          t !==
            (t = 'embedded-foreground step-' + (o[1] + 1) + ' svelte-kywsd6') &&
          $(s, 'class', t),
        u & 2 && c !== (c = o[1] + 1) && $(e, 'step', c);
    },
    i: I,
    o: I,
    d(o) {
      o && r(e);
    },
  };
}
function Zp(p) {
  let e, s;
  return {
    c() {
      (e = f('div')), this.h();
    },
    l(n) {
      (e = d(n, 'DIV', { class: !0 })), k(e).forEach(r), this.h();
    },
    h() {
      $(
        e,
        'class',
        (s = 'empty-step-foreground step-' + (p[1] + 1) + ' svelte-kywsd6')
      );
    },
    m(n, t) {
      w(n, e, t);
    },
    p(n, t) {
      t & 2 &&
        s !==
          (s = 'empty-step-foreground step-' + (n[1] + 1) + ' svelte-kywsd6') &&
        $(e, 'class', s);
    },
    i: I,
    o: I,
    d(n) {
      n && r(e);
    },
  };
}
function xp(p) {
  let e, s, n, t;
  const c = [Zp, Xp, Kp],
    o = [];
  function u(l, m) {
    return l[0].foreground === '' || !l[0].foreground
      ? 0
      : typeof l[0].foreground == 'string'
      ? 1
      : 2;
  }
  return (
    (e = u(p)),
    (s = o[e] = c[e](p)),
    {
      c() {
        s.c(), (n = B());
      },
      l(l) {
        s.l(l), (n = B());
      },
      m(l, m) {
        o[e].m(l, m), w(l, n, m), (t = !0);
      },
      p(l, [m]) {
        let b = e;
        (e = u(l)),
          e === b
            ? o[e].p(l, m)
            : (H(),
              C(o[b], 1, 1, () => {
                o[b] = null;
              }),
              F(),
              (s = o[e]),
              s ? s.p(l, m) : ((s = o[e] = c[e](l)), s.c()),
              P(s, 1),
              s.m(n.parentNode, n));
      },
      i(l) {
        t || (P(s), (t = !0));
      },
      o(l) {
        C(s), (t = !1);
      },
      d(l) {
        o[e].d(l), l && r(n);
      },
    }
  );
}
function ec(p, e, s) {
  let { step: n } = e,
    { index: t } = e;
  return (
    (p.$$set = (c) => {
      'step' in c && s(0, (n = c.step)), 'index' in c && s(1, (t = c.index));
    }),
    [n, t]
  );
}
class rp extends se {
  constructor(e) {
    super();
    te(this, e, ec, xp, ae, { step: 0, index: 1 });
  }
}
function pp(p, e, s) {
  const n = p.slice();
  return (n[3] = e[s]), (n[5] = s), n;
}
function nc(p) {
  let e, s, n, t;
  return (
    (e = new rp({ props: { step: p[3], index: p[5] } })),
    (n = new lp({ props: { step: p[3], index: p[5], backgroundSize: p[2] } })),
    {
      c() {
        O(e.$$.fragment), (s = y()), O(n.$$.fragment);
      },
      l(c) {
        z(e.$$.fragment, c), (s = E(c)), z(n.$$.fragment, c);
      },
      m(c, o) {
        j(e, c, o), w(c, s, o), j(n, c, o), (t = !0);
      },
      p(c, o) {
        const u = {};
        o & 1 && (u.step = c[3]), e.$set(u);
        const l = {};
        o & 1 && (l.step = c[3]), o & 4 && (l.backgroundSize = c[2]), n.$set(l);
      },
      i(c) {
        t || (P(e.$$.fragment, c), P(n.$$.fragment, c), (t = !0));
      },
      o(c) {
        C(e.$$.fragment, c), C(n.$$.fragment, c), (t = !1);
      },
      d(c) {
        L(e, c), c && r(s), L(n, c);
      },
    }
  );
}
function sc(p) {
  let e, s, n, t, c;
  return (
    (e = new lp({ props: { step: p[3], index: p[5], backgroundSize: p[2] } })),
    (n = new rp({ props: { step: p[3], index: p[5] } })),
    {
      c() {
        O(e.$$.fragment), (s = y()), O(n.$$.fragment), (t = y());
      },
      l(o) {
        z(e.$$.fragment, o), (s = E(o)), z(n.$$.fragment, o), (t = E(o));
      },
      m(o, u) {
        j(e, o, u), w(o, s, u), j(n, o, u), w(o, t, u), (c = !0);
      },
      p(o, u) {
        const l = {};
        u & 1 && (l.step = o[3]), u & 4 && (l.backgroundSize = o[2]), e.$set(l);
        const m = {};
        u & 1 && (m.step = o[3]), n.$set(m);
      },
      i(o) {
        c || (P(e.$$.fragment, o), P(n.$$.fragment, o), (c = !0));
      },
      o(o) {
        C(e.$$.fragment, o), C(n.$$.fragment, o), (c = !1);
      },
      d(o) {
        L(e, o), o && r(s), L(n, o), o && r(t);
      },
    }
  );
}
function cp(p) {
  let e, s, n, t;
  const c = [sc, nc],
    o = [];
  function u(l, m) {
    return l[1] === 'bf' ? 0 : 1;
  }
  return (
    (e = u(p)),
    (s = o[e] = c[e](p)),
    {
      c() {
        s.c(), (n = B());
      },
      l(l) {
        s.l(l), (n = B());
      },
      m(l, m) {
        o[e].m(l, m), w(l, n, m), (t = !0);
      },
      p(l, m) {
        let b = e;
        (e = u(l)),
          e === b
            ? o[e].p(l, m)
            : (H(),
              C(o[b], 1, 1, () => {
                o[b] = null;
              }),
              F(),
              (s = o[e]),
              s ? s.p(l, m) : ((s = o[e] = c[e](l)), s.c()),
              P(s, 1),
              s.m(n.parentNode, n));
      },
      i(l) {
        t || (P(s), (t = !0));
      },
      o(l) {
        C(s), (t = !1);
      },
      d(l) {
        o[e].d(l), l && r(n);
      },
    }
  );
}
function tc(p) {
  let e,
    s,
    n = p[0],
    t = [];
  for (let o = 0; o < n.length; o += 1) t[o] = cp(pp(p, n, o));
  const c = (o) =>
    C(t[o], 1, 1, () => {
      t[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < t.length; o += 1) t[o].c();
      e = B();
    },
    l(o) {
      for (let u = 0; u < t.length; u += 1) t[u].l(o);
      e = B();
    },
    m(o, u) {
      for (let l = 0; l < t.length; l += 1) t[l].m(o, u);
      w(o, e, u), (s = !0);
    },
    p(o, [u]) {
      if (u & 7) {
        n = o[0];
        let l;
        for (l = 0; l < n.length; l += 1) {
          const m = pp(o, n, l);
          t[l]
            ? (t[l].p(m, u), P(t[l], 1))
            : ((t[l] = cp(m)), t[l].c(), P(t[l], 1), t[l].m(e.parentNode, e));
        }
        for (H(), l = n.length; l < t.length; l += 1) c(l);
        F();
      }
    },
    i(o) {
      if (!s) {
        for (let u = 0; u < n.length; u += 1) P(t[u]);
        s = !0;
      }
    },
    o(o) {
      t = t.filter(Boolean);
      for (let u = 0; u < t.length; u += 1) C(t[u]);
      s = !1;
    },
    d(o) {
      Sl(t, o), o && r(e);
    },
  };
}
function ac(p, e, s) {
  let { steps: n } = e,
    { embeddedLayout: t = 'fb' } = e,
    { backgroundSize: c } = e;
  return (
    (p.$$set = (o) => {
      'steps' in o && s(0, (n = o.steps)),
        'embeddedLayout' in o && s(1, (t = o.embeddedLayout)),
        'backgroundSize' in o && s(2, (c = o.backgroundSize));
    }),
    [n, t, c]
  );
}
class oc extends se {
  constructor(e) {
    super();
    te(this, e, ac, tc, ae, { steps: 0, embeddedLayout: 1, backgroundSize: 2 });
  }
}
function lc(p) {
  let e, s, n;
  return (
    (s = new oc({
      props: { steps: p[1], embeddedLayout: p[7], backgroundSize: p[2] },
    })),
    {
      c() {
        (e = f('section')), O(s.$$.fragment), this.h();
      },
      l(t) {
        e = d(t, 'SECTION', { class: !0, id: !0 });
        var c = k(e);
        z(s.$$.fragment, c), c.forEach(r), this.h();
      },
      h() {
        $(e, 'class', 'scroller-container embedded svelte-5wwrxt'),
          $(e, 'id', p[0]);
      },
      m(t, c) {
        w(t, e, c), j(s, e, null), (n = !0);
      },
      p(t, c) {
        const o = {};
        c & 2 && (o.steps = t[1]),
          c & 128 && (o.embeddedLayout = t[7]),
          c & 4 && (o.backgroundSize = t[2]),
          s.$set(o),
          (!n || c & 1) && $(e, 'id', t[0]);
      },
      i(t) {
        n || (P(s.$$.fragment, t), (n = !0));
      },
      o(t) {
        C(s.$$.fragment, t), (n = !1);
      },
      d(t) {
        t && r(e), L(s);
      },
    }
  );
}
function rc(p) {
  let e, s, n, t, c, o;
  function u(v) {
    p[15](v);
  }
  function l(v) {
    p[16](v);
  }
  function m(v) {
    p[17](v);
  }
  let b = {
    threshold: p[8],
    top: p[9],
    bottom: p[10],
    parallax: p[11],
    query: 'section.step-foreground-container',
    $$slots: { foreground: [cc], background: [pc] },
    $$scope: { ctx: p },
  };
  return (
    p[12] !== void 0 && (b.index = p[12]),
    p[13] !== void 0 && (b.offset = p[13]),
    p[14] !== void 0 && (b.progress = p[14]),
    (s = new Bp({ props: b })),
    Pl.push(() => Cl(s, 'index', u)),
    Pl.push(() => Cl(s, 'offset', l)),
    Pl.push(() => Cl(s, 'progress', m)),
    {
      c() {
        (e = f('section')), O(s.$$.fragment), this.h();
      },
      l(v) {
        e = d(v, 'SECTION', { class: !0, id: !0 });
        var S = k(e);
        z(s.$$.fragment, S), S.forEach(r), this.h();
      },
      h() {
        $(e, 'class', 'scroller-container svelte-5wwrxt'), $(e, 'id', p[0]);
      },
      m(v, S) {
        w(v, e, S), j(s, e, null), (o = !0);
      },
      p(v, S) {
        const D = {};
        S & 256 && (D.threshold = v[8]),
          S & 512 && (D.top = v[9]),
          S & 1024 && (D.bottom = v[10]),
          S & 2048 && (D.parallax = v[11]),
          S & 266302 && (D.$$scope = { dirty: S, ctx: v }),
          !n && S & 4096 && ((n = !0), (D.index = v[12]), Il(() => (n = !1))),
          !t && S & 8192 && ((t = !0), (D.offset = v[13]), Il(() => (t = !1))),
          !c &&
            S & 16384 &&
            ((c = !0), (D.progress = v[14]), Il(() => (c = !1))),
          s.$set(D),
          (!o || S & 1) && $(e, 'id', v[0]);
      },
      i(v) {
        o || (P(s.$$.fragment, v), (o = !0));
      },
      o(v) {
        C(s.$$.fragment, v), (o = !1);
      },
      d(v) {
        v && r(e), L(s);
      },
    }
  );
}
function pc(p) {
  let e, s, n, t, c, o, u;
  return (
    (t = new Ap({
      props: {
        index: p[12],
        steps: p[1],
        preload: p[5],
        stackBackground: p[4],
      },
    })),
    {
      c() {
        (e = f('div')),
          (s = f('div')),
          (n = f('section')),
          O(t.$$.fragment),
          this.h();
      },
      l(l) {
        e = d(l, 'DIV', { slot: !0, class: !0 });
        var m = k(e);
        s = d(m, 'DIV', { class: !0 });
        var b = k(s);
        n = d(b, 'SECTION', { class: !0, step: !0 });
        var v = k(n);
        z(t.$$.fragment, v), v.forEach(r), b.forEach(r), m.forEach(r), this.h();
      },
      h() {
        $(
          n,
          'class',
          (c = 'background-container graphic ' + p[2] + ' svelte-5wwrxt')
        ),
          $(n, 'step', (o = p[12] + 1)),
          $(s, 'class', 'scroller-graphic-well svelte-5wwrxt'),
          $(e, 'slot', 'background'),
          $(e, 'class', 'background svelte-5wwrxt'),
          Ie(e, 'right', p[3] === 'left opposite'),
          Ie(e, 'left', p[3] === 'right opposite');
      },
      m(l, m) {
        w(l, e, m), a(e, s), a(s, n), j(t, n, null), (u = !0);
      },
      p(l, m) {
        const b = {};
        m & 4096 && (b.index = l[12]),
          m & 2 && (b.steps = l[1]),
          m & 32 && (b.preload = l[5]),
          m & 16 && (b.stackBackground = l[4]),
          t.$set(b),
          (!u ||
            (m & 4 &&
              c !==
                (c =
                  'background-container graphic ' +
                  l[2] +
                  ' svelte-5wwrxt'))) &&
            $(n, 'class', c),
          (!u || (m & 4096 && o !== (o = l[12] + 1))) && $(n, 'step', o),
          m & 8 && Ie(e, 'right', l[3] === 'left opposite'),
          m & 8 && Ie(e, 'left', l[3] === 'right opposite');
      },
      i(l) {
        u || (P(t.$$.fragment, l), (u = !0));
      },
      o(l) {
        C(t.$$.fragment, l), (u = !1);
      },
      d(l) {
        l && r(e), L(t);
      },
    }
  );
}
function cc(p) {
  let e, s, n, t;
  return (
    (s = new Yp({ props: { steps: p[1] } })),
    {
      c() {
        (e = f('div')), O(s.$$.fragment), this.h();
      },
      l(c) {
        e = d(c, 'DIV', { slot: !0, class: !0 });
        var o = k(e);
        z(s.$$.fragment, o), o.forEach(r), this.h();
      },
      h() {
        $(e, 'slot', 'foreground'),
          $(e, 'class', (n = 'foreground ' + p[3] + ' svelte-5wwrxt'));
      },
      m(c, o) {
        w(c, e, o), j(s, e, null), (t = !0);
      },
      p(c, o) {
        const u = {};
        o & 2 && (u.steps = c[1]),
          s.$set(u),
          (!t ||
            (o & 8 && n !== (n = 'foreground ' + c[3] + ' svelte-5wwrxt'))) &&
            $(e, 'class', n);
      },
      i(c) {
        t || (P(s.$$.fragment, c), (t = !0));
      },
      o(c) {
        C(s.$$.fragment, c), (t = !1);
      },
      d(c) {
        c && r(e), L(s);
      },
    }
  );
}
function ic(p) {
  let e, s, n, t;
  const c = [rc, lc],
    o = [];
  function u(l, m) {
    return l[6] ? 1 : 0;
  }
  return (
    (e = u(p)),
    (s = o[e] = c[e](p)),
    {
      c() {
        s.c(), (n = B());
      },
      l(l) {
        s.l(l), (n = B());
      },
      m(l, m) {
        o[e].m(l, m), w(l, n, m), (t = !0);
      },
      p(l, [m]) {
        let b = e;
        (e = u(l)),
          e === b
            ? o[e].p(l, m)
            : (H(),
              C(o[b], 1, 1, () => {
                o[b] = null;
              }),
              F(),
              (s = o[e]),
              s ? s.p(l, m) : ((s = o[e] = c[e](l)), s.c()),
              P(s, 1),
              s.m(n.parentNode, n));
      },
      i(l) {
        t || (P(s), (t = !0));
      },
      o(l) {
        C(s), (t = !1);
      },
      d(l) {
        o[e].d(l), l && r(n);
      },
    }
  );
}
function uc(p, e, s) {
  let { id: n = '' } = e,
    { steps: t = [] } = e,
    { backgroundSize: c = 'fluid' } = e,
    { foregroundPosition: o = 'middle' } = e,
    { stackBackground: u = !0 } = e,
    { preload: l = 1 } = e,
    { embedded: m = !1 } = e,
    { embeddedLayout: b = 'fb' } = e,
    { threshold: v = 0.5 } = e,
    { top: S = 0 } = e,
    { bottom: D = 1 } = e,
    { parallax: U = !1 } = e,
    M = 0,
    oe,
    De;
  function wn(T) {
    (M = T), s(12, M);
  }
  function Te(T) {
    (oe = T), s(13, oe);
  }
  function yn(T) {
    (De = T), s(14, De);
  }
  return (
    (p.$$set = (T) => {
      'id' in T && s(0, (n = T.id)),
        'steps' in T && s(1, (t = T.steps)),
        'backgroundSize' in T && s(2, (c = T.backgroundSize)),
        'foregroundPosition' in T && s(3, (o = T.foregroundPosition)),
        'stackBackground' in T && s(4, (u = T.stackBackground)),
        'preload' in T && s(5, (l = T.preload)),
        'embedded' in T && s(6, (m = T.embedded)),
        'embeddedLayout' in T && s(7, (b = T.embeddedLayout)),
        'threshold' in T && s(8, (v = T.threshold)),
        'top' in T && s(9, (S = T.top)),
        'bottom' in T && s(10, (D = T.bottom)),
        'parallax' in T && s(11, (U = T.parallax));
    }),
    [n, t, c, o, u, l, m, b, v, S, D, U, M, oe, De, wn, Te, yn]
  );
}
class sn extends se {
  constructor(e) {
    super();
    te(this, e, uc, ic, ae, {
      id: 0,
      steps: 1,
      backgroundSize: 2,
      foregroundPosition: 3,
      stackBackground: 4,
      preload: 5,
      embedded: 6,
      embeddedLayout: 7,
      threshold: 8,
      top: 9,
      bottom: 10,
      parallax: 11,
    });
  }
}
function fc(p) {
  let e, s, n, t, c, o, u, l, m, b, v;
  return {
    c() {
      (e = f('h4')),
        (s = g('Interactive step')),
        (n = y()),
        (t = f('p')),
        (c = g('The count is ')),
        (o = g(p[0])),
        (u = y()),
        (l = f('button')),
        (m = g('Click Me'));
    },
    l(S) {
      e = d(S, 'H4', {});
      var D = k(e);
      (s = h(D, 'Interactive step')),
        D.forEach(r),
        (n = E(S)),
        (t = d(S, 'P', {}));
      var U = k(t);
      (c = h(U, 'The count is ')),
        (o = h(U, p[0])),
        U.forEach(r),
        (u = E(S)),
        (l = d(S, 'BUTTON', {}));
      var M = k(l);
      (m = h(M, 'Click Me')), M.forEach(r);
    },
    m(S, D) {
      w(S, e, D),
        a(e, s),
        w(S, n, D),
        w(S, t, D),
        a(t, c),
        a(t, o),
        w(S, u, D),
        w(S, l, D),
        a(l, m),
        b || ((v = Gp(l, 'click', p[1])), (b = !0));
    },
    p(S, [D]) {
      D & 1 && Np(o, S[0]);
    },
    i: I,
    o: I,
    d(S) {
      S && r(e), S && r(n), S && r(t), S && r(u), S && r(l), (b = !1), v();
    },
  };
}
function dc(p, e, s) {
  let { count: n = 0 } = e;
  const t = () => {
    s(0, (n += 1));
  };
  return (
    (p.$$set = (c) => {
      'count' in c && s(0, (n = c.count));
    }),
    [n, t]
  );
}
class ip extends se {
  constructor(e) {
    super();
    te(this, e, dc, fc, ae, { count: 0 });
  }
}
function kc(p) {
  let e, s, n;
  return {
    c() {
      (e = f('div')), (s = f('div')), this.h();
    },
    l(t) {
      e = d(t, 'DIV', { class: !0 });
      var c = k(e);
      (s = d(c, 'DIV', { class: !0, style: !0 })),
        k(s).forEach(r),
        c.forEach(r),
        this.h();
    },
    h() {
      $(s, 'class', 'step svelte-1e3wp2r'),
        $(
          s,
          'style',
          (n = `
      background: ${p[0]};
      height: ${400 / p[2]}px;
      top: ${p[1] * (400 / p[2])}px;
  `)
        ),
        $(e, 'class', 'step-cont svelte-1e3wp2r');
    },
    m(t, c) {
      w(t, e, c), a(e, s);
    },
    p(t, [c]) {
      c & 7 &&
        n !==
          (n = `
      background: ${t[0]};
      height: ${400 / t[2]}px;
      top: ${t[1] * (400 / t[2])}px;
  `) &&
        $(s, 'style', n);
    },
    i: I,
    o: I,
    d(t) {
      t && r(e);
    },
  };
}
function gc(p, e, s) {
  let { colour: n = 'lightblue' } = e,
    { i: t = 0 } = e,
    { steps: c = 3 } = e;
  return (
    (p.$$set = (o) => {
      'colour' in o && s(0, (n = o.colour)),
        'i' in o && s(1, (t = o.i)),
        'steps' in o && s(2, (c = o.steps));
    }),
    [n, t, c]
  );
}
class Dl extends se {
  constructor(e) {
    super();
    te(this, e, gc, kc, ae, { colour: 0, i: 1, steps: 2 });
  }
}
function hc(p) {
  let e, s;
  return {
    c() {
      (e = f('div')), this.h();
    },
    l(n) {
      (e = d(n, 'DIV', { class: !0, style: !0 })), k(e).forEach(r), this.h();
    },
    h() {
      $(e, 'class', 'step svelte-13llgxe'),
        $(e, 'style', (s = `background: ${p[0]};`));
    },
    m(n, t) {
      w(n, e, t);
    },
    p(n, [t]) {
      t & 1 && s !== (s = `background: ${n[0]};`) && $(e, 'style', s);
    },
    i: I,
    o: I,
    d(n) {
      n && r(e);
    },
  };
}
function mc(p, e, s) {
  let { colour: n = 'lightblue' } = e;
  return (
    (p.$$set = (t) => {
      'colour' in t && s(0, (n = t.colour));
    }),
    [n]
  );
}
class vn extends se {
  constructor(e) {
    super();
    te(this, e, mc, hc, ae, { colour: 0 });
  }
}
function _c(p) {
  switch (p) {
    case './demos/ai2html/ai-scroller-1.exclude.svelte':
      return $l(
        () => import('./ai-scroller-1.exclude-9dd352df.js'),
        [
          'chunks/ai-scroller-1.exclude-9dd352df.js',
          'assets/ai-scroller-1.exclude-74bdcb73.css',
          'chunks/vendor-362b926b.js',
          'assets/vendor-c9bf64b2.css',
          'chunks/paths-6758d194.js',
        ]
      );
    case './demos/ai2html/ai-scroller-2.exclude.svelte':
      return $l(
        () => import('./ai-scroller-2.exclude-96cd9432.js'),
        [
          'chunks/ai-scroller-2.exclude-96cd9432.js',
          'assets/ai-scroller-2.exclude-7d0e85bf.css',
          'chunks/vendor-362b926b.js',
          'assets/vendor-c9bf64b2.css',
          'chunks/paths-6758d194.js',
        ]
      );
    case './demos/ai2html/ai-scroller-3.exclude.svelte':
      return $l(
        () => import('./ai-scroller-3.exclude-7b5323fe.js'),
        [
          'chunks/ai-scroller-3.exclude-7b5323fe.js',
          'assets/ai-scroller-3.exclude-e5d75c9d.css',
          'chunks/vendor-362b926b.js',
          'assets/vendor-c9bf64b2.css',
          'chunks/paths-6758d194.js',
        ]
      );
    default:
      return new Promise(function (e, s) {
        (typeof queueMicrotask == 'function'
          ? queueMicrotask
          : setTimeout)(s.bind(null, new Error('Unknown variable dynamic import: ' + p)));
      });
  }
}
function bc(p) {
  let e, s;
  return (
    (e = new sn({
      props: { steps: p[0], backgroundSize: 'wide', id: 'example1' },
    })),
    {
      c() {
        O(e.$$.fragment);
      },
      l(n) {
        z(e.$$.fragment, n);
      },
      m(n, t) {
        j(e, n, t), (s = !0);
      },
      p: I,
      i(n) {
        s || (P(e.$$.fragment, n), (s = !0));
      },
      o(n) {
        C(e.$$.fragment, n), (s = !1);
      },
      d(n) {
        L(e, n);
      },
    }
  );
}
function vc(p) {
  let e, s;
  return (
    (e = new sn({
      props: {
        steps: p[0],
        foregroundPosition: 'right opposite',
        backgroundSize: 'normal',
        id: 'example2',
      },
    })),
    {
      c() {
        O(e.$$.fragment);
      },
      l(n) {
        z(e.$$.fragment, n);
      },
      m(n, t) {
        j(e, n, t), (s = !0);
      },
      p: I,
      i(n) {
        s || (P(e.$$.fragment, n), (s = !0));
      },
      o(n) {
        C(e.$$.fragment, n), (s = !1);
      },
      d(n) {
        L(e, n);
      },
    }
  );
}
function wc(p) {
  let e, s;
  return (
    (e = new sn({
      props: {
        steps: p[1],
        foregroundPosition: 'middle',
        backgroundSize: 'normal',
        preload: 0,
        id: 'example-stack',
      },
    })),
    {
      c() {
        O(e.$$.fragment);
      },
      l(n) {
        z(e.$$.fragment, n);
      },
      m(n, t) {
        j(e, n, t), (s = !0);
      },
      p: I,
      i(n) {
        s || (P(e.$$.fragment, n), (s = !0));
      },
      o(n) {
        C(e.$$.fragment, n), (s = !1);
      },
      d(n) {
        L(e, n);
      },
    }
  );
}
function yc(p) {
  let e, s;
  return (
    (e = new sn({
      props: { steps: p[2], backgroundSize: 'widest', id: 'example3' },
    })),
    {
      c() {
        O(e.$$.fragment);
      },
      l(n) {
        z(e.$$.fragment, n);
      },
      m(n, t) {
        j(e, n, t), (s = !0);
      },
      p: I,
      i(n) {
        s || (P(e.$$.fragment, n), (s = !0));
      },
      o(n) {
        C(e.$$.fragment, n), (s = !1);
      },
      d(n) {
        L(e, n);
      },
    }
  );
}
function Ec(p) {
  let e, s;
  return (
    (e = new sn({
      props: {
        steps: p[0],
        backgroundSize: 'widest',
        id: 'scroller-example-4',
      },
    })),
    {
      c() {
        O(e.$$.fragment);
      },
      l(n) {
        z(e.$$.fragment, n);
      },
      m(n, t) {
        j(e, n, t), (s = !0);
      },
      p: I,
      i(n) {
        s || (P(e.$$.fragment, n), (s = !0));
      },
      o(n) {
        C(e.$$.fragment, n), (s = !1);
      },
      d(n) {
        L(e, n);
      },
    }
  );
}
function $c(p) {
  return { c: I, l: I, m: I, p: I, i: I, o: I, d: I };
}
function Sc(p) {
  let e, s;
  return (
    (e = new sn({
      props: { steps: p[6], backgroundSize: 'fluid', id: 'example-5' },
    })),
    {
      c() {
        O(e.$$.fragment);
      },
      l(n) {
        z(e.$$.fragment, n);
      },
      m(n, t) {
        j(e, n, t), (s = !0);
      },
      p: I,
      i(n) {
        s || (P(e.$$.fragment, n), (s = !0));
      },
      o(n) {
        C(e.$$.fragment, n), (s = !1);
      },
      d(n) {
        L(e, n);
      },
    }
  );
}
function Pc(p) {
  return { c: I, l: I, m: I, p: I, i: I, o: I, d: I };
}
function Cc(p) {
  let e,
    s,
    n = {
      ctx: p,
      current: null,
      token: null,
      hasCatch: !1,
      pending: Pc,
      then: Sc,
      catch: $c,
      value: 6,
      blocks: [, , ,],
    };
  return (
    xr(p[4](p[3]), n),
    {
      c() {
        (e = B()), n.block.c();
      },
      l(t) {
        (e = B()), n.block.l(t);
      },
      m(t, c) {
        w(t, e, c),
          n.block.m(t, (n.anchor = c)),
          (n.mount = () => e.parentNode),
          (n.anchor = e),
          (s = !0);
      },
      p(t, c) {
        (p = t), ep(n, p, c);
      },
      i(t) {
        s || (P(n.block), (s = !0));
      },
      o(t) {
        for (let c = 0; c < 3; c += 1) {
          const o = n.blocks[c];
          C(o);
        }
        s = !1;
      },
      d(t) {
        t && r(e), n.block.d(t), (n.token = null), (n = null);
      },
    }
  );
}
function Ic(p) {
  return { c: I, l: I, m: I, p: I, i: I, o: I, d: I };
}
function Dc(p) {
  let e, s;
  return (
    (e = new sn({
      props: {
        steps: p[6],
        backgroundSize: 'fluid',
        id: 'example6',
        embedded: 'true',
      },
    })),
    {
      c() {
        O(e.$$.fragment);
      },
      l(n) {
        z(e.$$.fragment, n);
      },
      m(n, t) {
        j(e, n, t), (s = !0);
      },
      p: I,
      i(n) {
        s || (P(e.$$.fragment, n), (s = !0));
      },
      o(n) {
        C(e.$$.fragment, n), (s = !1);
      },
      d(n) {
        L(e, n);
      },
    }
  );
}
function Tc(p) {
  return { c: I, l: I, m: I, p: I, i: I, o: I, d: I };
}
function Lc(p) {
  let e,
    s,
    n = {
      ctx: p,
      current: null,
      token: null,
      hasCatch: !1,
      pending: Tc,
      then: Dc,
      catch: Ic,
      value: 6,
      blocks: [, , ,],
    };
  return (
    xr(p[4](p[3]), n),
    {
      c() {
        (e = B()), n.block.c();
      },
      l(t) {
        (e = B()), n.block.l(t);
      },
      m(t, c) {
        w(t, e, c),
          n.block.m(t, (n.anchor = c)),
          (n.mount = () => e.parentNode),
          (n.anchor = e),
          (s = !0);
      },
      p(t, c) {
        (p = t), ep(n, p, c);
      },
      i(t) {
        s || (P(n.block), (s = !0));
      },
      o(t) {
        for (let c = 0; c < 3; c += 1) {
          const o = n.blocks[c];
          C(o);
        }
        s = !1;
      },
      d(t) {
        t && r(e), n.block.d(t), (n.token = null), (n = null);
      },
    }
  );
}
function Oc(p) {
  let e,
    s,
    n,
    t,
    c,
    o,
    u,
    l,
    m,
    b,
    v,
    S,
    D,
    U,
    M,
    oe,
    De,
    wn,
    Te,
    yn,
    T,
    J,
    Le,
    En,
    Ct,
    It,
    $n,
    Dt,
    Tt,
    tn,
    Sn,
    Lt,
    Ot,
    jt,
    Oe,
    Pn,
    zt,
    Bt,
    Cn,
    Gt,
    Nt,
    an,
    In,
    Mt,
    Rt,
    At,
    Dn,
    Tn,
    Ut,
    Vt,
    Ln,
    G,
    Ht,
    On,
    Ft,
    qt,
    jn,
    Qt,
    Yt,
    zn,
    Wt,
    Jt,
    Bn,
    Kt,
    Xt,
    Gn,
    Zt,
    xt,
    As,
    je,
    fp = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Scroller <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> RedGraphic <span class="token keyword">from</span> <span class="token string">'./RedGraphic.svelte'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> BlueGraphic <span class="token keyword">from</span> <span class="token string">'./BlueGraphic.svelte'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> GreenGraphic <span class="token keyword">from</span> <span class="token string">'./GreenGraphic.svelte'</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> steps <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> RedGraphic<span class="token punctuation">,</span>
      <span class="token literal-property property">foreground</span><span class="token operator">:</span> <span class="token string">'#### Step 1&#92;n&#92;nLorem ipsum red'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> BlueGraphic<span class="token punctuation">,</span>
      <span class="token literal-property property">foreground</span><span class="token operator">:</span> <span class="token string">'#### Step 2&#92;n&#92;nLorem ipsum blue'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> GreenGraphic<span class="token punctuation">,</span>
      <span class="token literal-property property">foreground</span><span class="token operator">:</span> <span class="token string">'#### Step 3&#92;n&#92;nLorem ipsum green'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> backgroundSize <span class="token operator">=</span> <span class="token string">'wide'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span> <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">backgroundSize="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>backgroundSize<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>`,
    Us,
    fe,
    Vs,
    R,
    ze,
    ea,
    Nn,
    na,
    sa,
    ta,
    Mn,
    Rn,
    aa,
    oa,
    V,
    Be,
    An,
    la,
    ra,
    Un,
    pa,
    ca,
    on,
    Vn,
    ia,
    ua,
    fa,
    ln,
    Hn,
    da,
    ka,
    ga,
    rn,
    Fn,
    ha,
    ma,
    _a,
    pn,
    qn,
    ba,
    va,
    wa,
    Qn,
    ya,
    Ea,
    q,
    Yn,
    $a,
    Sa,
    Wn,
    Pa,
    Ca,
    Jn,
    Ia,
    Da,
    Kn,
    Ta,
    La,
    Hs,
    Ge,
    dp = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Scroller <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> RedGraphic <span class="token keyword">from</span> <span class="token string">'./RedGraphic.svelte'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> BlueGraphic <span class="token keyword">from</span> <span class="token string">'./BlueGraphic.svelte'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> GreenGraphic <span class="token keyword">from</span> <span class="token string">'./GreenGraphic.svelte'</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> steps <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> RedGraphic<span class="token punctuation">,</span>
      <span class="token literal-property property">foreground</span><span class="token operator">:</span> <span class="token string">'#### Step 1&#92;n&#92;nLorem ipsum'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> BlueGraphic<span class="token punctuation">,</span>
      <span class="token literal-property property">foreground</span><span class="token operator">:</span> <span class="token string">'#### Step 2&#92;n&#92;nLorem ipsum'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> GreenGraphic<span class="token punctuation">,</span>
      <span class="token literal-property property">foreground</span><span class="token operator">:</span> <span class="token string">'#### Step 3&#92;n&#92;nLorem ipsum'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span>
  <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">foregroundPosition</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>right opposite<span class="token punctuation">"</span></span>
  <span class="token attr-name">backgroundSize</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>normal<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span></code>`,
    Fs,
    de,
    qs,
    Q,
    Xn,
    Zn,
    Oa,
    ja,
    le,
    xn,
    za,
    Ba,
    ke,
    es,
    Ga,
    Na,
    ns,
    Ma,
    Ra,
    Aa,
    cn,
    ss,
    Ua,
    Va,
    Ha,
    ts,
    as,
    Fa,
    qa,
    re,
    os,
    Qa,
    Ya,
    Ne,
    Wa,
    ls,
    Ja,
    Ka,
    Xa,
    un,
    rs,
    Za,
    xa,
    Qs,
    Me,
    kp =
      '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span> <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">stackBackground="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">preload="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">0</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>',
    Ys,
    ge,
    Ws,
    fn,
    K,
    eo,
    ps,
    no,
    so,
    cs,
    to,
    ao,
    is,
    oo,
    lo,
    Js,
    Re,
    gp = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Scroller <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> MultiColourGraphic <span class="token keyword">from</span> <span class="token string">'./MultiColourGraphic.svelte'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> InteractiveText <span class="token keyword">from</span> <span class="token string">'./InteractiveText.svelte'</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> steps <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> MultiColourGraphic<span class="token punctuation">,</span>
      <span class="token literal-property property">backgroundProps</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">colour</span><span class="token operator">:</span> <span class="token string">'red'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token comment">// \u{1F448}</span>
      <span class="token literal-property property">foreground</span><span class="token operator">:</span> InteractiveText<span class="token punctuation">,</span> <span class="token comment">// \u{1F448}</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> MultiColourGraphic<span class="token punctuation">,</span>
      <span class="token literal-property property">backgroundProps</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">colour</span><span class="token operator">:</span> <span class="token string">'blue'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">foreground</span><span class="token operator">:</span> <span class="token string">'#### Step 2&#92;n&#92;nLorem ipsum blue'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> MultiColourGraphic<span class="token punctuation">,</span>
      <span class="token literal-property property">backgroundProps</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">colour</span><span class="token operator">:</span> <span class="token string">'green'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">foreground</span><span class="token operator">:</span> InteractiveText<span class="token punctuation">,</span>
      <span class="token literal-property property">foregroundProps</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token comment">// \u{1F448}</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span> <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">backgroundSize</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>widest<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code>`,
    Ks,
    he,
    Xs,
    me,
    Ae,
    ro,
    us,
    po,
    co,
    io,
    _e,
    fs,
    uo,
    fo,
    Ue,
    ko,
    Ve,
    go,
    ho,
    Zs,
    He,
    hp = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span> <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">backgroundSize</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>widest<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-scroller<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token comment">&lt;!-- svelte-ignore css-unused-selector --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">// \u{1F447} Go global!
  :global</span> <span class="token punctuation">&#123;</span>
    <span class="token selector">#my-scroller</span> <span class="token punctuation">&#123;</span>
      <span class="token selector">.step-foreground</span> <span class="token punctuation">&#123;</span>
        <span class="token property">max-width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
        <span class="token selector">h4,
        p</span> <span class="token punctuation">&#123;</span>
          <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,
    xs,
    be,
    et,
    ve,
    pe,
    mo,
    Fe,
    _o,
    bo,
    qe,
    vo,
    wo,
    yo,
    dn,
    Qe,
    Eo,
    Ye,
    $o,
    So,
    nt,
    We,
    mp = `<code class="language-bash"><span class="token comment"># In your Google doc...</span>
<span class="token punctuation">[</span>blocks<span class="token punctuation">]</span>

<span class="token comment"># ...</span>
Type: ai-scroller
ID: my-scroller
BackgroundSize: fluid
ForegroundPosition: middle

<span class="token punctuation">[</span>.steps<span class="token punctuation">]</span>
Background: ai-scroller-1
Foreground: <span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span># Step <span class="token number">1</span>

Lorem ipsum<span class="token punctuation">..</span>.
:end

Background: ai-scroller-2
Foreground: <span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span># Step <span class="token number">2</span>

Lorem ipsum<span class="token punctuation">..</span>.
:end

Background: ai-scroller-3
Foreground: <span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span># Step <span class="token number">3</span>

Lorem ipsum<span class="token punctuation">..</span>.
:end

<span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token punctuation">[</span><span class="token punctuation">]</span></code>`,
    st,
    Je,
    _p = `<code class="language-svelte"><span class="token comment">&lt;!-- src/lib/Page.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/paths'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> content <span class="token keyword">from</span> <span class="token string">'$locales/en/content.json'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Scroller <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> fetchComponent<span class="token punctuation">,</span> makeScrollerSteps <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$utils/dynamicComponents'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> truthyString <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$utils/truthyString'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript">content<span class="token punctuation">.</span>blocks </span><span class="token keyword">as</span> <span class="token language-javascript">block<span class="token punctuation">&#125;</span></span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> block<span class="token punctuation">.</span>Type <span class="token operator">===</span> <span class="token string">'ai-scroller'</span><span class="token punctuation">&#125;</span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">await</span> <span class="token function">makeScrollerSteps</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span>steps<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>then steps<span class="token punctuation">&#125;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span>
          <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
          <span class="token attr-name">backgroundSize="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>block<span class="token punctuation">.</span>BackgroundSize<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
          <span class="token attr-name">foregroundPosition="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>block<span class="token punctuation">.</span>ForegroundPosition<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
          <span class="token attr-name">id="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>block<span class="token punctuation">.</span><span class="token constant">ID</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
          <span class="token attr-name">embedded="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>embedded<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
          <span class="token attr-name">stackBackground="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token function">truthyString</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span>StackBackground<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
      <span class="token punctuation">/></span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>catch error<span class="token punctuation">&#125;</span></span>
      <span class="token language-javascript"><span class="token punctuation">&#123;</span>console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error making steps for scroller'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">await</span><span class="token punctuation">&#125;</span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>
<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span></code>`,
    tt,
    we,
    ce,
    Po,
    ds,
    Co,
    Io,
    Ke,
    Do,
    To,
    Lo,
    Y,
    ks,
    Oo,
    jo,
    gs,
    zo,
    Bo,
    hs,
    Go,
    No,
    ms,
    Mo,
    Ro,
    at,
    N,
    _s,
    Ao,
    Uo,
    bs,
    Vo,
    Ho,
    vs,
    Fo,
    qo,
    ws,
    Qo,
    Yo,
    ys,
    Wo,
    ot,
    ye,
    lt,
    A,
    Es,
    Jo,
    Ko,
    $s,
    Ss,
    Xo,
    Zo,
    Ps,
    X,
    xo,
    Cs,
    el,
    nl,
    Is,
    sl,
    tl,
    Ds,
    al,
    ol,
    ll,
    Ts,
    Ls,
    rl,
    pl,
    Xe,
    kn,
    Os,
    cl,
    il,
    ul,
    gn,
    js,
    fl,
    dl,
    rt,
    Ze,
    bp = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span>
  <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">backgroundSize</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fluid<span class="token punctuation">"</span></span>
  <span class="token attr-name">embedded="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">embeddedLayout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fb<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span></code>`,
    pt,
    Ee,
    ct;
  return (
    (fe = new nn({
      props: { fluid: !0, $$slots: { default: [bc] }, $$scope: { ctx: p } },
    })),
    (de = new nn({
      props: { fluid: !0, $$slots: { default: [vc] }, $$scope: { ctx: p } },
    })),
    (ge = new nn({
      props: { fluid: !0, $$slots: { default: [wc] }, $$scope: { ctx: p } },
    })),
    (he = new nn({
      props: { fluid: !0, $$slots: { default: [yc] }, $$scope: { ctx: p } },
    })),
    (be = new nn({
      props: { fluid: !0, $$slots: { default: [Ec] }, $$scope: { ctx: p } },
    })),
    (ye = new nn({
      props: { fluid: !0, $$slots: { default: [Cc] }, $$scope: { ctx: p } },
    })),
    (Ee = new nn({
      props: { fluid: !0, $$slots: { default: [Lc] }, $$scope: { ctx: p } },
    })),
    {
      c() {
        (e = f('section')),
          (s = f('h2')),
          (n = g(up)),
          (t = y()),
          (c = f('p')),
          (o = g('Easy scrollytelling.')),
          (u = y()),
          (l = f('section')),
          (m = f('p')),
          (b = g(
            'This component is designed to handle most common layouts for scrollytelling. If you need something more complex, though, you should use '
          )),
          (v = f('a')),
          (S = g('svelte-scroller')),
          (D = g(
            ', which is a lower level component you can more easily customize.'
          )),
          (U = y()),
          (M = f('p')),
          (oe = f('code')),
          (De = g('steps')),
          (wn = y()),
          (Te = f('em')),
          (yn = g('an array of objects')),
          (T = y()),
          (J = f('ul')),
          (Le = f('li')),
          (En = f('code')),
          (Ct = g('background')),
          (It = g(' A background component ')),
          ($n = f('strong')),
          (Dt = g('REQUIRED')),
          (Tt = y()),
          (tn = f('li')),
          (Sn = f('code')),
          (Lt = g('backgroundProps')),
          (Ot = g(' An object of props given to background component')),
          (jt = y()),
          (Oe = f('li')),
          (Pn = f('code')),
          (zt = g('foreground')),
          (Bt = g(' Either a markdown string or a foreground component ')),
          (Cn = f('strong')),
          (Gt = g('REQUIRED')),
          (Nt = y()),
          (an = f('li')),
          (In = f('code')),
          (Mt = g('foregroundProps')),
          (Rt = g(' An object of props given to foreground component')),
          (At = y()),
          (Dn = f('p')),
          (Tn = f('code')),
          (Ut = g('backgroundSize')),
          (Vt = y()),
          (Ln = f('ul')),
          (G = f('li')),
          (Ht = g(
            'Adjusts the size of the background graphic by passing a class name corresponding to one of our well widths: '
          )),
          (On = f('code')),
          (Ft = g('normal')),
          (qt = g(', ')),
          (jn = f('code')),
          (Qt = g('wide')),
          (Yt = g(', ')),
          (zn = f('code')),
          (Wt = g('wider')),
          (Jt = g(', ')),
          (Bn = f('code')),
          (Kt = g('widest')),
          (Xt = g(' or ')),
          (Gn = f('code')),
          (Zt = g('fluid')),
          (xt = g('.')),
          (As = y()),
          (je = f('pre')),
          (Us = y()),
          O(fe.$$.fragment),
          (Vs = y()),
          (R = f('section')),
          (ze = f('p')),
          (ea = g('Control the layout of your component with the ')),
          (Nn = f('code')),
          (na = g('foregroundPosition')),
          (sa = g(' prop.')),
          (ta = y()),
          (Mn = f('p')),
          (Rn = f('code')),
          (aa = g('foregroundPosition')),
          (oa = y()),
          (V = f('ul')),
          (Be = f('li')),
          (An = f('code')),
          (la = g('middle')),
          (ra = g(' Text and graphic middle ')),
          (Un = f('em')),
          (pa = g('default')),
          (ca = y()),
          (on = f('li')),
          (Vn = f('code')),
          (ia = g('left')),
          (ua = g(' Text to left, graphic stays middle')),
          (fa = y()),
          (ln = f('li')),
          (Hn = f('code')),
          (da = g('right')),
          (ka = g(' Text to right, graphic stays middle')),
          (ga = y()),
          (rn = f('li')),
          (Fn = f('code')),
          (ha = g('left opposite')),
          (ma = g(' Text to left, graphic to right')),
          (_a = y()),
          (pn = f('li')),
          (qn = f('code')),
          (ba = g('right opposite')),
          (va = g(' Text to right, graphic to left')),
          (wa = y()),
          (Qn = f('p')),
          (ya = g(
            'Both text and graphic will revert to the middle when the window drops below 1200px.'
          )),
          (Ea = y()),
          (q = f('p')),
          (Yn = f('strong')),
          ($a = g('Note:')),
          (Sa = g(' Make sure your ')),
          (Wn = f('code')),
          (Pa = g('backgroundSize')),
          (Ca = g(' prop is ')),
          (Jn = f('em')),
          (Ia = g('not')),
          (Da = g(' set to ')),
          (Kn = f('code')),
          (Ta = g('fluid')),
          (La = g(' if using either left or right opposite option.')),
          (Hs = y()),
          (Ge = f('pre')),
          (Fs = y()),
          O(de.$$.fragment),
          (qs = y()),
          (Q = f('section')),
          (Xn = f('p')),
          (Zn = f('code')),
          (Oa = g('stackBackground')),
          (ja = y()),
          (le = f('ul')),
          (xn = f('li')),
          (za = g(
            'Determines whether previous background step graphics will stack below current one.'
          )),
          (Ba = y()),
          (ke = f('li')),
          (es = f('code')),
          (Ga = g('true')),
          (Na = y()),
          (ns = f('em')),
          (Ma = g('default')),
          (Ra = g(
            ' Background graphics from previous steps will remain visible below active one, allowing you to stack graphics with transparent backgrounds.'
          )),
          (Aa = y()),
          (cn = f('li')),
          (ss = f('code')),
          (Ua = g('false')),
          (Va = g(
            ' Only the background graphic from the current step will show and backgrounds from previous steps are hidden.'
          )),
          (Ha = y()),
          (ts = f('p')),
          (as = f('code')),
          (Fa = g('preload')),
          (qa = y()),
          (re = f('ul')),
          (os = f('li')),
          (Qa = g(
            'Determines how many background steps to load before and after the currently active one. This prop basically lazyloads backgrounds, which is useful for making sure you\u2019re not loading too many images at once for long scrolls.'
          )),
          (Ya = y()),
          (Ne = f('li')),
          (Wa = g('Default is ')),
          (ls = f('code')),
          (Ja = g('1')),
          (Ka = g(
            ', which loads one background before and one after the currently active one.'
          )),
          (Xa = y()),
          (un = f('li')),
          (rs = f('code')),
          (Za = g('0')),
          (xa = g(' disables lazyloading and loads all backgrounds at once.')),
          (Qs = y()),
          (Me = f('pre')),
          (Ys = y()),
          O(ge.$$.fragment),
          (Ws = y()),
          (fn = f('section')),
          (K = f('p')),
          (eo = g('Pass a component to ')),
          (ps = f('code')),
          (no = g('foreground')),
          (so = g(' and use ')),
          (cs = f('code')),
          (to = g('backgroundProps')),
          (ao = g(' and ')),
          (is = f('code')),
          (oo = g('foregroundProps')),
          (lo = g(' to pass data to your components.')),
          (Js = y()),
          (Re = f('pre')),
          (Ks = y()),
          O(he.$$.fragment),
          (Xs = y()),
          (me = f('section')),
          (Ae = f('p')),
          (ro = g('Add an ID to your scroller and use SCSS ')),
          (us = f('code')),
          (po = g(':global')),
          (co = g(' rules to override any styles.')),
          (io = y()),
          (_e = f('section')),
          (fs = f('p')),
          (uo = g(
            'This is the main way you should customise this component for any layouts not covered by the props we\u2019ve already mentioned. Most small layout shifts can be handled with simple SCSS. Check out the component in your browser\u2019s inspector to find which elements you want to target with custom styles.'
          )),
          (fo = y()),
          (Ue = f('p')),
          (ko = g(
            'If you\u2019re still struggling to make this component work for your design, it may be a good sign you should reach for '
          )),
          (Ve = f('a')),
          (go = g('svelte-scroller')),
          (ho = g(' instead.')),
          (Zs = y()),
          (He = f('pre')),
          (xs = y()),
          O(be.$$.fragment),
          (et = y()),
          (ve = f('section')),
          (pe = f('p')),
          (mo = g(
            'You can also use this component to layout an AI-based graphics scroller via an '
          )),
          (Fe = f('a')),
          (_o = g('ArchieML')),
          (bo = g(
            '-formatted Google doc by using the following pattern to dynamically import '
          )),
          (qe = f('a')),
          (vo = g('ai2svelte')),
          (wo = g(' components for the background:')),
          (yo = y()),
          (dn = f('section')),
          (Qe = f('p')),
          (Eo = g('If you\u2019re using the ')),
          (Ye = f('a')),
          ($o = g('graphics kit')),
          (So = g(
            ', this pattern is already wired up in the boilerplate included in the Page.svelte component. Free money!'
          )),
          (nt = y()),
          (We = f('pre')),
          (st = y()),
          (Je = f('pre')),
          (tt = y()),
          (we = f('section')),
          (ce = f('p')),
          (Po = g(
            'This pattern comes with some restrictions, though. Be sure your '
          )),
          (ds = f('code')),
          (Co = g('fetchComponent')),
          (Io = g(' function follows ')),
          (Ke = f('a')),
          (Do = g('the limits on dynamic imports')),
          (To = g('.')),
          (Lo = y()),
          (Y = f('p')),
          (ks = f('strong')),
          (Oo = g('NOTE')),
          (jo = g(': Make sure you wrap the function ')),
          (gs = f('code')),
          (zo = g('truthyString()')),
          (Bo = g(' around ')),
          (hs = f('code')),
          (Go = g('block.StackBackground')),
          (No = g('. ')),
          (ms = f('code')),
          (Mo = g('truthyString()')),
          (Ro =
            g(` converts the string pulled from Google docs (\u2018true\u2019, \u2018false\u2019, etc.)
into a Boolean.`)),
          (at = y()),
          (N = f('section')),
          (_s = f('h5')),
          (Ao = g('Tips')),
          (Uo = y()),
          (bs = f('p')),
          (Vo = g(
            'Each step needs its own .ai file unless you want to show the same graphic twice. The .ai file can be named anything \u2014 just make sure you add the correct file name, without the .ai extension, to the google doc.'
          )),
          (Ho = y()),
          (vs = f('p')),
          (Fo = g(
            'Tip: First, make one master .ai file that contains graphics for all steps. Put graphics for each step into its own layer, which you might name step-1, step-2, etc. When you are ready to export, create separate .ai files for each step by hiding all but one layer and choosing save as. This makes it easier to manage multiple files and make sure graphics in different steps are aligned.'
          )),
          (qo = y()),
          (ws = f('p')),
          (Qo = g('Example workflow:')),
          (Yo = y()),
          (ys = f('p')),
          (Wo = g(`Make maps-scroll-master.ai
Make graphics for each step and put them in separate layers: step-1, step-2, etc.
Once all graphics are ready, show just the step-1 layer and hide all others. Save the file as maps-scroll-1.ai, then run the ai2svelte script. In the google doc, set Background: maps-scroll-1 for step 1.
Do the same for all other layers`)),
          (ot = y()),
          O(ye.$$.fragment),
          (lt = y()),
          (A = f('section')),
          (Es = f('p')),
          (Jo = g(
            'This component can also unravel the scrolling experience into a flat, linear layout. Use this when the graphic will be embedded in an iframe.'
          )),
          (Ko = y()),
          ($s = f('p')),
          (Ss = f('code')),
          (Xo = g('embedded')),
          (Zo = y()),
          (Ps = f('ul')),
          (X = f('li')),
          (xo = g('Setting to ')),
          (Cs = f('code')),
          (el = g('true')),
          (nl = g(' will unroll the scroll experience into a flat layout. ')),
          (Is = f('code')),
          (sl = g('true')),
          (tl = g(' will also cause the ')),
          (Ds = f('code')),
          (al = g('foregroundPosition')),
          (ol = g(
            ' prop to be ignored. (Use global SCSS to adjust the style of foreground text.)'
          )),
          (ll = y()),
          (Ts = f('p')),
          (Ls = f('code')),
          (rl = g('embeddedLayout')),
          (pl = y()),
          (Xe = f('ul')),
          (kn = f('li')),
          (Os = f('code')),
          (cl = g('fb')),
          (il = g(
            ' (default) will layout the foreground before the background in each step.'
          )),
          (ul = y()),
          (gn = f('li')),
          (js = f('code')),
          (fl = g('bf')),
          (dl = g(' will lead with the background in each step.')),
          (rt = y()),
          (Ze = f('pre')),
          (pt = y()),
          O(Ee.$$.fragment),
          this.h();
      },
      l(i) {
        e = d(i, 'SECTION', {});
        var _ = k(e);
        s = d(_, 'H2', {});
        var zs = k(s);
        (n = h(zs, up)), zs.forEach(r), (t = E(_)), (c = d(_, 'P', {}));
        var Bs = k(c);
        (o = h(Bs, 'Easy scrollytelling.')),
          Bs.forEach(r),
          (u = E(_)),
          (l = d(_, 'SECTION', { class: !0 }));
        var Gs = k(l);
        m = d(Gs, 'P', {});
        var xe = k(m);
        (b = h(
          xe,
          'This component is designed to handle most common layouts for scrollytelling. If you need something more complex, though, you should use '
        )),
          (v = d(xe, 'A', { href: !0, rel: !0 }));
        var Ns = k(v);
        (S = h(Ns, 'svelte-scroller')),
          Ns.forEach(r),
          (D = h(
            xe,
            ', which is a lower level component you can more easily customize.'
          )),
          xe.forEach(r),
          Gs.forEach(r),
          (U = E(_)),
          (M = d(_, 'P', {}));
        var en = k(M);
        oe = d(en, 'CODE', {});
        var Ms = k(oe);
        (De = h(Ms, 'steps')),
          Ms.forEach(r),
          (wn = E(en)),
          (Te = d(en, 'EM', {}));
        var Tl = k(Te);
        (yn = h(Tl, 'an array of objects')),
          Tl.forEach(r),
          en.forEach(r),
          (T = E(_)),
          (J = d(_, 'UL', {}));
        var $e = k(J);
        Le = d($e, 'LI', {});
        var it = k(Le);
        En = d(it, 'CODE', {});
        var Ll = k(En);
        (Ct = h(Ll, 'background')),
          Ll.forEach(r),
          (It = h(it, ' A background component ')),
          ($n = d(it, 'STRONG', {}));
        var Ol = k($n);
        (Dt = h(Ol, 'REQUIRED')),
          Ol.forEach(r),
          it.forEach(r),
          (Tt = E($e)),
          (tn = d($e, 'LI', {}));
        var kl = k(tn);
        Sn = d(kl, 'CODE', {});
        var jl = k(Sn);
        (Lt = h(jl, 'backgroundProps')),
          jl.forEach(r),
          (Ot = h(kl, ' An object of props given to background component')),
          kl.forEach(r),
          (jt = E($e)),
          (Oe = d($e, 'LI', {}));
        var ut = k(Oe);
        Pn = d(ut, 'CODE', {});
        var zl = k(Pn);
        (zt = h(zl, 'foreground')),
          zl.forEach(r),
          (Bt = h(ut, ' Either a markdown string or a foreground component ')),
          (Cn = d(ut, 'STRONG', {}));
        var Bl = k(Cn);
        (Gt = h(Bl, 'REQUIRED')),
          Bl.forEach(r),
          ut.forEach(r),
          (Nt = E($e)),
          (an = d($e, 'LI', {}));
        var gl = k(an);
        In = d(gl, 'CODE', {});
        var Gl = k(In);
        (Mt = h(Gl, 'foregroundProps')),
          Gl.forEach(r),
          (Rt = h(gl, ' An object of props given to foreground component')),
          gl.forEach(r),
          $e.forEach(r),
          (At = E(_)),
          (Dn = d(_, 'P', {}));
        var Nl = k(Dn);
        Tn = d(Nl, 'CODE', {});
        var Ml = k(Tn);
        (Ut = h(Ml, 'backgroundSize')),
          Ml.forEach(r),
          Nl.forEach(r),
          (Vt = E(_)),
          (Ln = d(_, 'UL', {}));
        var Rl = k(Ln);
        G = d(Rl, 'LI', {});
        var W = k(G);
        (Ht = h(
          W,
          'Adjusts the size of the background graphic by passing a class name corresponding to one of our well widths: '
        )),
          (On = d(W, 'CODE', {}));
        var Al = k(On);
        (Ft = h(Al, 'normal')),
          Al.forEach(r),
          (qt = h(W, ', ')),
          (jn = d(W, 'CODE', {}));
        var Ul = k(jn);
        (Qt = h(Ul, 'wide')),
          Ul.forEach(r),
          (Yt = h(W, ', ')),
          (zn = d(W, 'CODE', {}));
        var Vl = k(zn);
        (Wt = h(Vl, 'wider')),
          Vl.forEach(r),
          (Jt = h(W, ', ')),
          (Bn = d(W, 'CODE', {}));
        var Hl = k(Bn);
        (Kt = h(Hl, 'widest')),
          Hl.forEach(r),
          (Xt = h(W, ' or ')),
          (Gn = d(W, 'CODE', {}));
        var Fl = k(Gn);
        (Zt = h(Fl, 'fluid')),
          Fl.forEach(r),
          (xt = h(W, '.')),
          W.forEach(r),
          Rl.forEach(r),
          _.forEach(r),
          (As = E(i)),
          (je = d(i, 'PRE', { class: !0 }));
        var vp = k(je);
        vp.forEach(r),
          (Us = E(i)),
          z(fe.$$.fragment, i),
          (Vs = E(i)),
          (R = d(i, 'SECTION', {}));
        var Z = k(R);
        ze = d(Z, 'P', {});
        var ft = k(ze);
        (ea = h(ft, 'Control the layout of your component with the ')),
          (Nn = d(ft, 'CODE', {}));
        var ql = k(Nn);
        (na = h(ql, 'foregroundPosition')),
          ql.forEach(r),
          (sa = h(ft, ' prop.')),
          ft.forEach(r),
          (ta = E(Z)),
          (Mn = d(Z, 'P', {}));
        var Ql = k(Mn);
        Rn = d(Ql, 'CODE', {});
        var Yl = k(Rn);
        (aa = h(Yl, 'foregroundPosition')),
          Yl.forEach(r),
          Ql.forEach(r),
          (oa = E(Z)),
          (V = d(Z, 'UL', {}));
        var x = k(V);
        Be = d(x, 'LI', {});
        var dt = k(Be);
        An = d(dt, 'CODE', {});
        var Wl = k(An);
        (la = h(Wl, 'middle')),
          Wl.forEach(r),
          (ra = h(dt, ' Text and graphic middle ')),
          (Un = d(dt, 'EM', {}));
        var Jl = k(Un);
        (pa = h(Jl, 'default')),
          Jl.forEach(r),
          dt.forEach(r),
          (ca = E(x)),
          (on = d(x, 'LI', {}));
        var hl = k(on);
        Vn = d(hl, 'CODE', {});
        var Kl = k(Vn);
        (ia = h(Kl, 'left')),
          Kl.forEach(r),
          (ua = h(hl, ' Text to left, graphic stays middle')),
          hl.forEach(r),
          (fa = E(x)),
          (ln = d(x, 'LI', {}));
        var ml = k(ln);
        Hn = d(ml, 'CODE', {});
        var Xl = k(Hn);
        (da = h(Xl, 'right')),
          Xl.forEach(r),
          (ka = h(ml, ' Text to right, graphic stays middle')),
          ml.forEach(r),
          (ga = E(x)),
          (rn = d(x, 'LI', {}));
        var _l = k(rn);
        Fn = d(_l, 'CODE', {});
        var Zl = k(Fn);
        (ha = h(Zl, 'left opposite')),
          Zl.forEach(r),
          (ma = h(_l, ' Text to left, graphic to right')),
          _l.forEach(r),
          (_a = E(x)),
          (pn = d(x, 'LI', {}));
        var bl = k(pn);
        qn = d(bl, 'CODE', {});
        var xl = k(qn);
        (ba = h(xl, 'right opposite')),
          xl.forEach(r),
          (va = h(bl, ' Text to right, graphic to left')),
          bl.forEach(r),
          x.forEach(r),
          (wa = E(Z)),
          (Qn = d(Z, 'P', {}));
        var er = k(Qn);
        (ya = h(
          er,
          'Both text and graphic will revert to the middle when the window drops below 1200px.'
        )),
          er.forEach(r),
          (Ea = E(Z)),
          (q = d(Z, 'P', {}));
        var ie = k(q);
        Yn = d(ie, 'STRONG', {});
        var nr = k(Yn);
        ($a = h(nr, 'Note:')),
          nr.forEach(r),
          (Sa = h(ie, ' Make sure your ')),
          (Wn = d(ie, 'CODE', {}));
        var sr = k(Wn);
        (Pa = h(sr, 'backgroundSize')),
          sr.forEach(r),
          (Ca = h(ie, ' prop is ')),
          (Jn = d(ie, 'EM', {}));
        var tr = k(Jn);
        (Ia = h(tr, 'not')),
          tr.forEach(r),
          (Da = h(ie, ' set to ')),
          (Kn = d(ie, 'CODE', {}));
        var ar = k(Kn);
        (Ta = h(ar, 'fluid')),
          ar.forEach(r),
          (La = h(ie, ' if using either left or right opposite option.')),
          ie.forEach(r),
          Z.forEach(r),
          (Hs = E(i)),
          (Ge = d(i, 'PRE', { class: !0 }));
        var wp = k(Ge);
        wp.forEach(r),
          (Fs = E(i)),
          z(de.$$.fragment, i),
          (qs = E(i)),
          (Q = d(i, 'SECTION', {}));
        var Se = k(Q);
        Xn = d(Se, 'P', {});
        var or = k(Xn);
        Zn = d(or, 'CODE', {});
        var lr = k(Zn);
        (Oa = h(lr, 'stackBackground')),
          lr.forEach(r),
          or.forEach(r),
          (ja = E(Se)),
          (le = d(Se, 'UL', {}));
        var hn = k(le);
        xn = d(hn, 'LI', {});
        var rr = k(xn);
        (za = h(
          rr,
          'Determines whether previous background step graphics will stack below current one.'
        )),
          rr.forEach(r),
          (Ba = E(hn)),
          (ke = d(hn, 'LI', {}));
        var Rs = k(ke);
        es = d(Rs, 'CODE', {});
        var pr = k(es);
        (Ga = h(pr, 'true')),
          pr.forEach(r),
          (Na = E(Rs)),
          (ns = d(Rs, 'EM', {}));
        var cr = k(ns);
        (Ma = h(cr, 'default')),
          cr.forEach(r),
          (Ra = h(
            Rs,
            ' Background graphics from previous steps will remain visible below active one, allowing you to stack graphics with transparent backgrounds.'
          )),
          Rs.forEach(r),
          (Aa = E(hn)),
          (cn = d(hn, 'LI', {}));
        var vl = k(cn);
        ss = d(vl, 'CODE', {});
        var ir = k(ss);
        (Ua = h(ir, 'false')),
          ir.forEach(r),
          (Va = h(
            vl,
            ' Only the background graphic from the current step will show and backgrounds from previous steps are hidden.'
          )),
          vl.forEach(r),
          hn.forEach(r),
          (Ha = E(Se)),
          (ts = d(Se, 'P', {}));
        var ur = k(ts);
        as = d(ur, 'CODE', {});
        var fr = k(as);
        (Fa = h(fr, 'preload')),
          fr.forEach(r),
          ur.forEach(r),
          (qa = E(Se)),
          (re = d(Se, 'UL', {}));
        var mn = k(re);
        os = d(mn, 'LI', {});
        var dr = k(os);
        (Qa = h(
          dr,
          'Determines how many background steps to load before and after the currently active one. This prop basically lazyloads backgrounds, which is useful for making sure you\u2019re not loading too many images at once for long scrolls.'
        )),
          dr.forEach(r),
          (Ya = E(mn)),
          (Ne = d(mn, 'LI', {}));
        var kt = k(Ne);
        (Wa = h(kt, 'Default is ')), (ls = d(kt, 'CODE', {}));
        var kr = k(ls);
        (Ja = h(kr, '1')),
          kr.forEach(r),
          (Ka = h(
            kt,
            ', which loads one background before and one after the currently active one.'
          )),
          kt.forEach(r),
          (Xa = E(mn)),
          (un = d(mn, 'LI', {}));
        var wl = k(un);
        rs = d(wl, 'CODE', {});
        var gr = k(rs);
        (Za = h(gr, '0')),
          gr.forEach(r),
          (xa = h(
            wl,
            ' disables lazyloading and loads all backgrounds at once.'
          )),
          wl.forEach(r),
          mn.forEach(r),
          Se.forEach(r),
          (Qs = E(i)),
          (Me = d(i, 'PRE', { class: !0 }));
        var yp = k(Me);
        yp.forEach(r),
          (Ys = E(i)),
          z(ge.$$.fragment, i),
          (Ws = E(i)),
          (fn = d(i, 'SECTION', {}));
        var hr = k(fn);
        K = d(hr, 'P', {});
        var Pe = k(K);
        (eo = h(Pe, 'Pass a component to ')), (ps = d(Pe, 'CODE', {}));
        var mr = k(ps);
        (no = h(mr, 'foreground')),
          mr.forEach(r),
          (so = h(Pe, ' and use ')),
          (cs = d(Pe, 'CODE', {}));
        var _r = k(cs);
        (to = h(_r, 'backgroundProps')),
          _r.forEach(r),
          (ao = h(Pe, ' and ')),
          (is = d(Pe, 'CODE', {}));
        var br = k(is);
        (oo = h(br, 'foregroundProps')),
          br.forEach(r),
          (lo = h(Pe, ' to pass data to your components.')),
          Pe.forEach(r),
          hr.forEach(r),
          (Js = E(i)),
          (Re = d(i, 'PRE', { class: !0 }));
        var Ep = k(Re);
        Ep.forEach(r),
          (Ks = E(i)),
          z(he.$$.fragment, i),
          (Xs = E(i)),
          (me = d(i, 'SECTION', {}));
        var gt = k(me);
        Ae = d(gt, 'P', {});
        var ht = k(Ae);
        (ro = h(ht, 'Add an ID to your scroller and use SCSS ')),
          (us = d(ht, 'CODE', {}));
        var vr = k(us);
        (po = h(vr, ':global')),
          vr.forEach(r),
          (co = h(ht, ' rules to override any styles.')),
          ht.forEach(r),
          (io = E(gt)),
          (_e = d(gt, 'SECTION', { class: !0 }));
        var mt = k(_e);
        fs = d(mt, 'P', {});
        var wr = k(fs);
        (uo = h(
          wr,
          'This is the main way you should customise this component for any layouts not covered by the props we\u2019ve already mentioned. Most small layout shifts can be handled with simple SCSS. Check out the component in your browser\u2019s inspector to find which elements you want to target with custom styles.'
        )),
          wr.forEach(r),
          (fo = E(mt)),
          (Ue = d(mt, 'P', {}));
        var _t = k(Ue);
        (ko = h(
          _t,
          'If you\u2019re still struggling to make this component work for your design, it may be a good sign you should reach for '
        )),
          (Ve = d(_t, 'A', { href: !0, rel: !0 }));
        var yr = k(Ve);
        (go = h(yr, 'svelte-scroller')),
          yr.forEach(r),
          (ho = h(_t, ' instead.')),
          _t.forEach(r),
          mt.forEach(r),
          gt.forEach(r),
          (Zs = E(i)),
          (He = d(i, 'PRE', { class: !0 }));
        var $p = k(He);
        $p.forEach(r),
          (xs = E(i)),
          z(be.$$.fragment, i),
          (et = E(i)),
          (ve = d(i, 'SECTION', {}));
        var bt = k(ve);
        pe = d(bt, 'P', {});
        var _n = k(pe);
        (mo = h(
          _n,
          'You can also use this component to layout an AI-based graphics scroller via an '
        )),
          (Fe = d(_n, 'A', { href: !0, rel: !0 }));
        var Er = k(Fe);
        (_o = h(Er, 'ArchieML')),
          Er.forEach(r),
          (bo = h(
            _n,
            '-formatted Google doc by using the following pattern to dynamically import '
          )),
          (qe = d(_n, 'A', { href: !0, rel: !0 }));
        var $r = k(qe);
        (vo = h($r, 'ai2svelte')),
          $r.forEach(r),
          (wo = h(_n, ' components for the background:')),
          _n.forEach(r),
          (yo = E(bt)),
          (dn = d(bt, 'SECTION', { class: !0 }));
        var Sr = k(dn);
        Qe = d(Sr, 'P', {});
        var vt = k(Qe);
        (Eo = h(vt, 'If you\u2019re using the ')),
          (Ye = d(vt, 'A', { href: !0, rel: !0 }));
        var Pr = k(Ye);
        ($o = h(Pr, 'graphics kit')),
          Pr.forEach(r),
          (So = h(
            vt,
            ', this pattern is already wired up in the boilerplate included in the Page.svelte component. Free money!'
          )),
          vt.forEach(r),
          Sr.forEach(r),
          bt.forEach(r),
          (nt = E(i)),
          (We = d(i, 'PRE', { class: !0 }));
        var Sp = k(We);
        Sp.forEach(r), (st = E(i)), (Je = d(i, 'PRE', { class: !0 }));
        var Pp = k(Je);
        Pp.forEach(r), (tt = E(i)), (we = d(i, 'SECTION', {}));
        var wt = k(we);
        ce = d(wt, 'P', {});
        var bn = k(ce);
        (Po = h(
          bn,
          'This pattern comes with some restrictions, though. Be sure your '
        )),
          (ds = d(bn, 'CODE', {}));
        var Cr = k(ds);
        (Co = h(Cr, 'fetchComponent')),
          Cr.forEach(r),
          (Io = h(bn, ' function follows ')),
          (Ke = d(bn, 'A', { href: !0, rel: !0 }));
        var Ir = k(Ke);
        (Do = h(Ir, 'the limits on dynamic imports')),
          Ir.forEach(r),
          (To = h(bn, '.')),
          bn.forEach(r),
          (Lo = E(wt)),
          (Y = d(wt, 'P', {}));
        var ue = k(Y);
        ks = d(ue, 'STRONG', {});
        var Dr = k(ks);
        (Oo = h(Dr, 'NOTE')),
          Dr.forEach(r),
          (jo = h(ue, ': Make sure you wrap the function ')),
          (gs = d(ue, 'CODE', {}));
        var Tr = k(gs);
        (zo = h(Tr, 'truthyString()')),
          Tr.forEach(r),
          (Bo = h(ue, ' around ')),
          (hs = d(ue, 'CODE', {}));
        var Lr = k(hs);
        (Go = h(Lr, 'block.StackBackground')),
          Lr.forEach(r),
          (No = h(ue, '. ')),
          (ms = d(ue, 'CODE', {}));
        var Or = k(ms);
        (Mo = h(Or, 'truthyString()')),
          Or.forEach(r),
          (Ro = h(
            ue,
            ` converts the string pulled from Google docs (\u2018true\u2019, \u2018false\u2019, etc.)
into a Boolean.`
          )),
          ue.forEach(r),
          wt.forEach(r),
          (at = E(i)),
          (N = d(i, 'SECTION', { class: !0 }));
        var ee = k(N);
        _s = d(ee, 'H5', {});
        var jr = k(_s);
        (Ao = h(jr, 'Tips')),
          jr.forEach(r),
          (Uo = E(ee)),
          (bs = d(ee, 'P', {}));
        var zr = k(bs);
        (Vo = h(
          zr,
          'Each step needs its own .ai file unless you want to show the same graphic twice. The .ai file can be named anything \u2014 just make sure you add the correct file name, without the .ai extension, to the google doc.'
        )),
          zr.forEach(r),
          (Ho = E(ee)),
          (vs = d(ee, 'P', {}));
        var Br = k(vs);
        (Fo = h(
          Br,
          'Tip: First, make one master .ai file that contains graphics for all steps. Put graphics for each step into its own layer, which you might name step-1, step-2, etc. When you are ready to export, create separate .ai files for each step by hiding all but one layer and choosing save as. This makes it easier to manage multiple files and make sure graphics in different steps are aligned.'
        )),
          Br.forEach(r),
          (qo = E(ee)),
          (ws = d(ee, 'P', {}));
        var Gr = k(ws);
        (Qo = h(Gr, 'Example workflow:')),
          Gr.forEach(r),
          (Yo = E(ee)),
          (ys = d(ee, 'P', {}));
        var Nr = k(ys);
        (Wo = h(
          Nr,
          `Make maps-scroll-master.ai
Make graphics for each step and put them in separate layers: step-1, step-2, etc.
Once all graphics are ready, show just the step-1 layer and hide all others. Save the file as maps-scroll-1.ai, then run the ai2svelte script. In the google doc, set Background: maps-scroll-1 for step 1.
Do the same for all other layers`
        )),
          Nr.forEach(r),
          ee.forEach(r),
          (ot = E(i)),
          z(ye.$$.fragment, i),
          (lt = E(i)),
          (A = d(i, 'SECTION', {}));
        var ne = k(A);
        Es = d(ne, 'P', {});
        var Mr = k(Es);
        (Jo = h(
          Mr,
          'This component can also unravel the scrolling experience into a flat, linear layout. Use this when the graphic will be embedded in an iframe.'
        )),
          Mr.forEach(r),
          (Ko = E(ne)),
          ($s = d(ne, 'P', {}));
        var Rr = k($s);
        Ss = d(Rr, 'CODE', {});
        var Ar = k(Ss);
        (Xo = h(Ar, 'embedded')),
          Ar.forEach(r),
          Rr.forEach(r),
          (Zo = E(ne)),
          (Ps = d(ne, 'UL', {}));
        var Ur = k(Ps);
        X = d(Ur, 'LI', {});
        var Ce = k(X);
        (xo = h(Ce, 'Setting to ')), (Cs = d(Ce, 'CODE', {}));
        var Vr = k(Cs);
        (el = h(Vr, 'true')),
          Vr.forEach(r),
          (nl = h(
            Ce,
            ' will unroll the scroll experience into a flat layout. '
          )),
          (Is = d(Ce, 'CODE', {}));
        var Hr = k(Is);
        (sl = h(Hr, 'true')),
          Hr.forEach(r),
          (tl = h(Ce, ' will also cause the ')),
          (Ds = d(Ce, 'CODE', {}));
        var Fr = k(Ds);
        (al = h(Fr, 'foregroundPosition')),
          Fr.forEach(r),
          (ol = h(
            Ce,
            ' prop to be ignored. (Use global SCSS to adjust the style of foreground text.)'
          )),
          Ce.forEach(r),
          Ur.forEach(r),
          (ll = E(ne)),
          (Ts = d(ne, 'P', {}));
        var qr = k(Ts);
        Ls = d(qr, 'CODE', {});
        var Qr = k(Ls);
        (rl = h(Qr, 'embeddedLayout')),
          Qr.forEach(r),
          qr.forEach(r),
          (pl = E(ne)),
          (Xe = d(ne, 'UL', {}));
        var yt = k(Xe);
        kn = d(yt, 'LI', {});
        var yl = k(kn);
        Os = d(yl, 'CODE', {});
        var Yr = k(Os);
        (cl = h(Yr, 'fb')),
          Yr.forEach(r),
          (il = h(
            yl,
            ' (default) will layout the foreground before the background in each step.'
          )),
          yl.forEach(r),
          (ul = E(yt)),
          (gn = d(yt, 'LI', {}));
        var El = k(gn);
        js = d(El, 'CODE', {});
        var Wr = k(js);
        (fl = h(Wr, 'bf')),
          Wr.forEach(r),
          (dl = h(El, ' will lead with the background in each step.')),
          El.forEach(r),
          yt.forEach(r),
          ne.forEach(r),
          (rt = E(i)),
          (Ze = d(i, 'PRE', { class: !0 }));
        var Cp = k(Ze);
        Cp.forEach(r), (pt = E(i)), z(Ee.$$.fragment, i), this.h();
      },
      h() {
        $(v, 'href', 'https://github.com/sveltejs/svelte-scroller'),
          $(v, 'rel', 'nofollow'),
          $(l, 'class', 'note'),
          $(je, 'class', 'language-svelte'),
          $(Ge, 'class', 'language-svelte'),
          $(Me, 'class', 'language-svelte'),
          $(Re, 'class', 'language-svelte'),
          $(Ve, 'href', 'https://github.com/sveltejs/svelte-scroller'),
          $(Ve, 'rel', 'nofollow'),
          $(_e, 'class', 'note'),
          $(He, 'class', 'language-svelte'),
          $(Fe, 'href', 'http://archieml.org/'),
          $(Fe, 'rel', 'nofollow'),
          $(qe, 'href', 'https://github.com/reuters-graphics/ai2svelte'),
          $(qe, 'rel', 'nofollow'),
          $(
            Ye,
            'href',
            'https://github.com/reuters-graphics/bluprint_graphics-kit'
          ),
          $(Ye, 'rel', 'nofollow'),
          $(dn, 'class', 'note'),
          $(We, 'class', 'language-bash'),
          $(Je, 'class', 'language-svelte'),
          $(
            Ke,
            'href',
            'https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations'
          ),
          $(Ke, 'rel', 'nofollow'),
          $(N, 'class', 'note'),
          $(Ze, 'class', 'language-svelte');
      },
      m(i, _) {
        w(i, e, _),
          a(e, s),
          a(s, n),
          a(e, t),
          a(e, c),
          a(c, o),
          a(e, u),
          a(e, l),
          a(l, m),
          a(m, b),
          a(m, v),
          a(v, S),
          a(m, D),
          a(e, U),
          a(e, M),
          a(M, oe),
          a(oe, De),
          a(M, wn),
          a(M, Te),
          a(Te, yn),
          a(e, T),
          a(e, J),
          a(J, Le),
          a(Le, En),
          a(En, Ct),
          a(Le, It),
          a(Le, $n),
          a($n, Dt),
          a(J, Tt),
          a(J, tn),
          a(tn, Sn),
          a(Sn, Lt),
          a(tn, Ot),
          a(J, jt),
          a(J, Oe),
          a(Oe, Pn),
          a(Pn, zt),
          a(Oe, Bt),
          a(Oe, Cn),
          a(Cn, Gt),
          a(J, Nt),
          a(J, an),
          a(an, In),
          a(In, Mt),
          a(an, Rt),
          a(e, At),
          a(e, Dn),
          a(Dn, Tn),
          a(Tn, Ut),
          a(e, Vt),
          a(e, Ln),
          a(Ln, G),
          a(G, Ht),
          a(G, On),
          a(On, Ft),
          a(G, qt),
          a(G, jn),
          a(jn, Qt),
          a(G, Yt),
          a(G, zn),
          a(zn, Wt),
          a(G, Jt),
          a(G, Bn),
          a(Bn, Kt),
          a(G, Xt),
          a(G, Gn),
          a(Gn, Zt),
          a(G, xt),
          w(i, As, _),
          w(i, je, _),
          (je.innerHTML = fp),
          w(i, Us, _),
          j(fe, i, _),
          w(i, Vs, _),
          w(i, R, _),
          a(R, ze),
          a(ze, ea),
          a(ze, Nn),
          a(Nn, na),
          a(ze, sa),
          a(R, ta),
          a(R, Mn),
          a(Mn, Rn),
          a(Rn, aa),
          a(R, oa),
          a(R, V),
          a(V, Be),
          a(Be, An),
          a(An, la),
          a(Be, ra),
          a(Be, Un),
          a(Un, pa),
          a(V, ca),
          a(V, on),
          a(on, Vn),
          a(Vn, ia),
          a(on, ua),
          a(V, fa),
          a(V, ln),
          a(ln, Hn),
          a(Hn, da),
          a(ln, ka),
          a(V, ga),
          a(V, rn),
          a(rn, Fn),
          a(Fn, ha),
          a(rn, ma),
          a(V, _a),
          a(V, pn),
          a(pn, qn),
          a(qn, ba),
          a(pn, va),
          a(R, wa),
          a(R, Qn),
          a(Qn, ya),
          a(R, Ea),
          a(R, q),
          a(q, Yn),
          a(Yn, $a),
          a(q, Sa),
          a(q, Wn),
          a(Wn, Pa),
          a(q, Ca),
          a(q, Jn),
          a(Jn, Ia),
          a(q, Da),
          a(q, Kn),
          a(Kn, Ta),
          a(q, La),
          w(i, Hs, _),
          w(i, Ge, _),
          (Ge.innerHTML = dp),
          w(i, Fs, _),
          j(de, i, _),
          w(i, qs, _),
          w(i, Q, _),
          a(Q, Xn),
          a(Xn, Zn),
          a(Zn, Oa),
          a(Q, ja),
          a(Q, le),
          a(le, xn),
          a(xn, za),
          a(le, Ba),
          a(le, ke),
          a(ke, es),
          a(es, Ga),
          a(ke, Na),
          a(ke, ns),
          a(ns, Ma),
          a(ke, Ra),
          a(le, Aa),
          a(le, cn),
          a(cn, ss),
          a(ss, Ua),
          a(cn, Va),
          a(Q, Ha),
          a(Q, ts),
          a(ts, as),
          a(as, Fa),
          a(Q, qa),
          a(Q, re),
          a(re, os),
          a(os, Qa),
          a(re, Ya),
          a(re, Ne),
          a(Ne, Wa),
          a(Ne, ls),
          a(ls, Ja),
          a(Ne, Ka),
          a(re, Xa),
          a(re, un),
          a(un, rs),
          a(rs, Za),
          a(un, xa),
          w(i, Qs, _),
          w(i, Me, _),
          (Me.innerHTML = kp),
          w(i, Ys, _),
          j(ge, i, _),
          w(i, Ws, _),
          w(i, fn, _),
          a(fn, K),
          a(K, eo),
          a(K, ps),
          a(ps, no),
          a(K, so),
          a(K, cs),
          a(cs, to),
          a(K, ao),
          a(K, is),
          a(is, oo),
          a(K, lo),
          w(i, Js, _),
          w(i, Re, _),
          (Re.innerHTML = gp),
          w(i, Ks, _),
          j(he, i, _),
          w(i, Xs, _),
          w(i, me, _),
          a(me, Ae),
          a(Ae, ro),
          a(Ae, us),
          a(us, po),
          a(Ae, co),
          a(me, io),
          a(me, _e),
          a(_e, fs),
          a(fs, uo),
          a(_e, fo),
          a(_e, Ue),
          a(Ue, ko),
          a(Ue, Ve),
          a(Ve, go),
          a(Ue, ho),
          w(i, Zs, _),
          w(i, He, _),
          (He.innerHTML = hp),
          w(i, xs, _),
          j(be, i, _),
          w(i, et, _),
          w(i, ve, _),
          a(ve, pe),
          a(pe, mo),
          a(pe, Fe),
          a(Fe, _o),
          a(pe, bo),
          a(pe, qe),
          a(qe, vo),
          a(pe, wo),
          a(ve, yo),
          a(ve, dn),
          a(dn, Qe),
          a(Qe, Eo),
          a(Qe, Ye),
          a(Ye, $o),
          a(Qe, So),
          w(i, nt, _),
          w(i, We, _),
          (We.innerHTML = mp),
          w(i, st, _),
          w(i, Je, _),
          (Je.innerHTML = _p),
          w(i, tt, _),
          w(i, we, _),
          a(we, ce),
          a(ce, Po),
          a(ce, ds),
          a(ds, Co),
          a(ce, Io),
          a(ce, Ke),
          a(Ke, Do),
          a(ce, To),
          a(we, Lo),
          a(we, Y),
          a(Y, ks),
          a(ks, Oo),
          a(Y, jo),
          a(Y, gs),
          a(gs, zo),
          a(Y, Bo),
          a(Y, hs),
          a(hs, Go),
          a(Y, No),
          a(Y, ms),
          a(ms, Mo),
          a(Y, Ro),
          w(i, at, _),
          w(i, N, _),
          a(N, _s),
          a(_s, Ao),
          a(N, Uo),
          a(N, bs),
          a(bs, Vo),
          a(N, Ho),
          a(N, vs),
          a(vs, Fo),
          a(N, qo),
          a(N, ws),
          a(ws, Qo),
          a(N, Yo),
          a(N, ys),
          a(ys, Wo),
          w(i, ot, _),
          j(ye, i, _),
          w(i, lt, _),
          w(i, A, _),
          a(A, Es),
          a(Es, Jo),
          a(A, Ko),
          a(A, $s),
          a($s, Ss),
          a(Ss, Xo),
          a(A, Zo),
          a(A, Ps),
          a(Ps, X),
          a(X, xo),
          a(X, Cs),
          a(Cs, el),
          a(X, nl),
          a(X, Is),
          a(Is, sl),
          a(X, tl),
          a(X, Ds),
          a(Ds, al),
          a(X, ol),
          a(A, ll),
          a(A, Ts),
          a(Ts, Ls),
          a(Ls, rl),
          a(A, pl),
          a(A, Xe),
          a(Xe, kn),
          a(kn, Os),
          a(Os, cl),
          a(kn, il),
          a(Xe, ul),
          a(Xe, gn),
          a(gn, js),
          a(js, fl),
          a(gn, dl),
          w(i, rt, _),
          w(i, Ze, _),
          (Ze.innerHTML = bp),
          w(i, pt, _),
          j(Ee, i, _),
          (ct = !0);
      },
      p(i, [_]) {
        const zs = {};
        _ & 128 && (zs.$$scope = { dirty: _, ctx: i }), fe.$set(zs);
        const Bs = {};
        _ & 128 && (Bs.$$scope = { dirty: _, ctx: i }), de.$set(Bs);
        const Gs = {};
        _ & 128 && (Gs.$$scope = { dirty: _, ctx: i }), ge.$set(Gs);
        const xe = {};
        _ & 128 && (xe.$$scope = { dirty: _, ctx: i }), he.$set(xe);
        const Ns = {};
        _ & 128 && (Ns.$$scope = { dirty: _, ctx: i }), be.$set(Ns);
        const en = {};
        _ & 128 && (en.$$scope = { dirty: _, ctx: i }), ye.$set(en);
        const Ms = {};
        _ & 128 && (Ms.$$scope = { dirty: _, ctx: i }), Ee.$set(Ms);
      },
      i(i) {
        ct ||
          (P(fe.$$.fragment, i),
          P(de.$$.fragment, i),
          P(ge.$$.fragment, i),
          P(he.$$.fragment, i),
          P(be.$$.fragment, i),
          P(ye.$$.fragment, i),
          P(Ee.$$.fragment, i),
          (ct = !0));
      },
      o(i) {
        C(fe.$$.fragment, i),
          C(de.$$.fragment, i),
          C(ge.$$.fragment, i),
          C(he.$$.fragment, i),
          C(be.$$.fragment, i),
          C(ye.$$.fragment, i),
          C(Ee.$$.fragment, i),
          (ct = !1);
      },
      d(i) {
        i && r(e),
          i && r(As),
          i && r(je),
          i && r(Us),
          L(fe, i),
          i && r(Vs),
          i && r(R),
          i && r(Hs),
          i && r(Ge),
          i && r(Fs),
          L(de, i),
          i && r(qs),
          i && r(Q),
          i && r(Qs),
          i && r(Me),
          i && r(Ys),
          L(ge, i),
          i && r(Ws),
          i && r(fn),
          i && r(Js),
          i && r(Re),
          i && r(Ks),
          L(he, i),
          i && r(Xs),
          i && r(me),
          i && r(Zs),
          i && r(He),
          i && r(xs),
          L(be, i),
          i && r(et),
          i && r(ve),
          i && r(nt),
          i && r(We),
          i && r(st),
          i && r(Je),
          i && r(tt),
          i && r(we),
          i && r(at),
          i && r(N),
          i && r(ot),
          L(ye, i),
          i && r(lt),
          i && r(A),
          i && r(rt),
          i && r(Ze),
          i && r(pt),
          L(Ee, i);
      },
    }
  );
}
const jc = {
    title: 'Scroller',
    description: 'Easy scrollytelling with layout options.',
    slug: 'scroller',
  },
  { title: up, description: Uc, slug: Vc } = jc;
function zc(p) {
  const e = [
      {
        background: vn,
        backgroundProps: { colour: 'red' },
        foreground: `#### Step 1

Lorem ipsum red`,
      },
      {
        background: vn,
        backgroundProps: { colour: 'blue' },
        foreground: `#### Step 2

Lorem ipsum blue`,
      },
      {
        background: vn,
        backgroundProps: { colour: 'green' },
        foreground: `#### Step 3

Lorem ipsum green`,
      },
    ],
    s = [
      {
        background: Dl,
        backgroundProps: { colour: 'red', i: 0 },
        foreground: `#### Step 1

Lorem ipsum red`,
      },
      {
        background: Dl,
        backgroundProps: { colour: 'blue', i: 1 },
        foreground: `#### Step 2

Lorem ipsum blue`,
      },
      {
        background: Dl,
        backgroundProps: { colour: 'green', i: 2 },
        foreground: `#### Step 3

Lorem ipsum green`,
      },
    ],
    n = [
      { background: vn, backgroundProps: { colour: 'red' }, foreground: ip },
      {
        background: vn,
        backgroundProps: { colour: 'blue' },
        foreground: `#### Step 2

Lorem ipsum blue`,
      },
      {
        background: vn,
        backgroundProps: { colour: 'green' },
        foreground: ip,
        foregroundProps: { count: 100 },
      },
    ],
    t = [
      {
        background: 'ai-scroller-1',
        foreground: `#### Step 1

Lorem ipsum`,
      },
      {
        background: 'ai-scroller-2',
        foreground: `#### Step 2

Lorem ipsum`,
      },
      {
        background: 'ai-scroller-3',
        foreground: `#### Step 3

Lorem ipsum`,
      },
    ],
    c = async (u) => (await _c(`./demos/ai2html/${u}.exclude.svelte`)).default;
  return [
    e,
    s,
    n,
    t,
    async (u) => {
      const l = [];
      for (const m of u) {
        const b = await c(m.background);
        l.push(Zr(Xr({}, m), { background: b }));
      }
      return l;
    },
  ];
}
class Hc extends se {
  constructor(e) {
    super();
    te(this, e, zc, Oc, ae, {});
  }
}
export { Hc as default, jc as metadata };
