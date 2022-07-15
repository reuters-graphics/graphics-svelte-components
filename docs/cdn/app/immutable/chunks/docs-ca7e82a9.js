var Dp = Object.defineProperty,
  Tp = Object.defineProperties;
var Lp = Object.getOwnPropertyDescriptors;
var Xr = Object.getOwnPropertySymbols;
var Op = Object.prototype.hasOwnProperty,
  zp = Object.prototype.propertyIsEnumerable;
var Zr = (p, e, n) =>
    e in p
      ? Dp(p, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (p[e] = n),
  Kr = (p, e) => {
    for (var n in e || (e = {})) Op.call(e, n) && Zr(p, n, e[n]);
    if (Xr) for (var n of Xr(e)) zp.call(e, n) && Zr(p, n, e[n]);
    return p;
  },
  xr = (p, e) => Tp(p, Lp(e));
var $l = (p, e, n) =>
  new Promise((s, t) => {
    var c = (l) => {
        try {
          u(n.next(l));
        } catch (m) {
          t(m);
        }
      },
      o = (l) => {
        try {
          u(n.throw(l));
        } catch (m) {
          t(m);
        }
      },
      u = (l) => (l.done ? s(l.value) : Promise.resolve(l.value).then(c, o));
    u((n = n.apply(p, e)).next());
  });
import { _ as Sl } from './preload-helper-ade19073.js';
import {
  S as se,
  i as te,
  s as ae,
  l as B,
  g as y,
  q as P,
  e as f,
  k as w,
  c as d,
  a as k,
  m as E,
  d as r,
  b as $,
  Z as Ie,
  J as a,
  z as $t,
  A as St,
  n as H,
  o as C,
  B as L,
  p as F,
  w as O,
  y as z,
  _ as Tl,
  C as Pt,
  x as j,
  E as I,
  O as jp,
  Q as Bp,
  X as Pl,
  a6 as Cl,
  a7 as Il,
  t as g,
  h,
  V as Gp,
  j as Np,
  a1 as cp,
  a2 as ip,
} from './index-83a5d9f9.js';
import { D as nn } from './index-16ec1060.js';
import { m as Et, d as Mp } from './main-2237b44e.js';
import './paths-396f020f.js';
function ep(p, e, n) {
  const s = p.slice();
  return (s[4] = e[n]), (s[6] = n), s;
}
function np(p) {
  let e, n, s, t;
  const c = [p[4].backgroundProps || {}];
  var o = p[4].background;
  function u(l) {
    let m = {};
    for (let v = 0; v < c.length; v += 1) m = Pt(m, c[v]);
    return { props: m };
  }
  return (
    o && (n = new o(u())),
    {
      c() {
        (e = f('div')), n && O(n.$$.fragment), (s = w()), this.h();
      },
      l(l) {
        e = d(l, 'DIV', { class: !0 });
        var m = k(e);
        n && j(n.$$.fragment, m), (s = E(m)), m.forEach(r), this.h();
      },
      h() {
        $(e, 'class', 'step-background step-' + (p[6] + 1) + ' svelte-va4hxg'),
          Ie(e, 'visible', p[3] ? p[6] <= p[0] : p[6] === p[0]),
          Ie(e, 'hidden', p[3] ? p[6] > p[0] : p[6] !== p[0]);
      },
      m(l, m) {
        y(l, e, m), n && z(n, e, null), a(e, s), (t = !0);
      },
      p(l, m) {
        const v = m & 2 ? $t(c, [St(l[4].backgroundProps || {})]) : {};
        if (o !== (o = l[4].background)) {
          if (n) {
            H();
            const b = n;
            C(b.$$.fragment, 1, 0, () => {
              L(b, 1);
            }),
              F();
          }
          o
            ? ((n = new o(u())),
              O(n.$$.fragment),
              P(n.$$.fragment, 1),
              z(n, e, s))
            : (n = null);
        } else o && n.$set(v);
        m & 9 && Ie(e, 'visible', l[3] ? l[6] <= l[0] : l[6] === l[0]),
          m & 9 && Ie(e, 'hidden', l[3] ? l[6] > l[0] : l[6] !== l[0]);
      },
      i(l) {
        t || (n && P(n.$$.fragment, l), (t = !0));
      },
      o(l) {
        n && C(n.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && r(e), n && L(n);
      },
    }
  );
}
function sp(p) {
  let e,
    n,
    s = (p[2] === 0 || (p[6] >= p[0] - p[2] && p[6] <= p[0] + p[2])) && np(p);
  return {
    c() {
      s && s.c(), (e = B());
    },
    l(t) {
      s && s.l(t), (e = B());
    },
    m(t, c) {
      s && s.m(t, c), y(t, e, c), (n = !0);
    },
    p(t, c) {
      t[2] === 0 || (t[6] >= t[0] - t[2] && t[6] <= t[0] + t[2])
        ? s
          ? (s.p(t, c), c & 5 && P(s, 1))
          : ((s = np(t)), s.c(), P(s, 1), s.m(e.parentNode, e))
        : s &&
          (H(),
          C(s, 1, 1, () => {
            s = null;
          }),
          F());
    },
    i(t) {
      n || (P(s), (n = !0));
    },
    o(t) {
      C(s), (n = !1);
    },
    d(t) {
      s && s.d(t), t && r(e);
    },
  };
}
function Rp(p) {
  let e,
    n,
    s = p[1],
    t = [];
  for (let o = 0; o < s.length; o += 1) t[o] = sp(ep(p, s, o));
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
      y(o, e, u), (n = !0);
    },
    p(o, [u]) {
      if (u & 15) {
        s = o[1];
        let l;
        for (l = 0; l < s.length; l += 1) {
          const m = ep(o, s, l);
          t[l]
            ? (t[l].p(m, u), P(t[l], 1))
            : ((t[l] = sp(m)), t[l].c(), P(t[l], 1), t[l].m(e.parentNode, e));
        }
        for (H(), l = s.length; l < t.length; l += 1) c(l);
        F();
      }
    },
    i(o) {
      if (!n) {
        for (let u = 0; u < s.length; u += 1) P(t[u]);
        n = !0;
      }
    },
    o(o) {
      t = t.filter(Boolean);
      for (let u = 0; u < t.length; u += 1) C(t[u]);
      n = !1;
    },
    d(o) {
      Tl(t, o), o && r(e);
    },
  };
}
function Ap(p, e, n) {
  let { index: s } = e,
    { steps: t = [] } = e,
    { preload: c = 1 } = e,
    { stackBackground: o = !0 } = e;
  return (
    (p.$$set = (u) => {
      'index' in u && n(0, (s = u.index)),
        'steps' in u && n(1, (t = u.steps)),
        'preload' in u && n(2, (c = u.preload)),
        'stackBackground' in u && n(3, (o = u.stackBackground));
    }),
    [s, t, c, o]
  );
}
class Up extends se {
  constructor(e) {
    super(),
      te(this, e, Ap, Rp, ae, {
        index: 0,
        steps: 1,
        preload: 2,
        stackBackground: 3,
      });
  }
}
function tp(p, e, n) {
  const s = p.slice();
  return (s[1] = e[n]), (s[3] = n), s;
}
function Vp(p) {
  let e, n, s, t;
  const c = [qp, Fp],
    o = [];
  function u(l, m) {
    return typeof l[1].foreground == 'string' ? 0 : 1;
  }
  return (
    (n = u(p)),
    (s = o[n] = c[n](p)),
    {
      c() {
        (e = f('div')), s.c(), this.h();
      },
      l(l) {
        e = d(l, 'DIV', { class: !0 });
        var m = k(e);
        s.l(m), m.forEach(r), this.h();
      },
      h() {
        $(e, 'class', 'step-foreground svelte-20kuyz');
      },
      m(l, m) {
        y(l, e, m), o[n].m(e, null), (t = !0);
      },
      p(l, m) {
        let v = n;
        (n = u(l)),
          n === v
            ? o[n].p(l, m)
            : (H(),
              C(o[v], 1, 1, () => {
                o[v] = null;
              }),
              F(),
              (s = o[n]),
              s ? s.p(l, m) : ((s = o[n] = c[n](l)), s.c()),
              P(s, 1),
              s.m(e, null));
      },
      i(l) {
        t || (P(s), (t = !0));
      },
      o(l) {
        C(s), (t = !1);
      },
      d(l) {
        l && r(e), o[n].d();
      },
    }
  );
}
function Hp(p) {
  let e;
  return {
    c() {
      (e = f('div')), this.h();
    },
    l(n) {
      (e = d(n, 'DIV', { class: !0 })), k(e).forEach(r), this.h();
    },
    h() {
      $(e, 'class', 'empty-step-foreground');
    },
    m(n, s) {
      y(n, e, s);
    },
    p: I,
    i: I,
    o: I,
    d(n) {
      n && r(e);
    },
  };
}
function Fp(p) {
  let e, n, s;
  const t = [p[1].foregroundProps || {}];
  var c = p[1].foreground;
  function o(u) {
    let l = {};
    for (let m = 0; m < t.length; m += 1) l = Pt(l, t[m]);
    return { props: l };
  }
  return (
    c && (e = new c(o())),
    {
      c() {
        e && O(e.$$.fragment), (n = B());
      },
      l(u) {
        e && j(e.$$.fragment, u), (n = B());
      },
      m(u, l) {
        e && z(e, u, l), y(u, n, l), (s = !0);
      },
      p(u, l) {
        const m = l & 1 ? $t(t, [St(u[1].foregroundProps || {})]) : {};
        if (c !== (c = u[1].foreground)) {
          if (e) {
            H();
            const v = e;
            C(v.$$.fragment, 1, 0, () => {
              L(v, 1);
            }),
              F();
          }
          c
            ? ((e = new c(o())),
              O(e.$$.fragment),
              P(e.$$.fragment, 1),
              z(e, n.parentNode, n))
            : (e = null);
        } else c && e.$set(m);
      },
      i(u) {
        s || (e && P(e.$$.fragment, u), (s = !0));
      },
      o(u) {
        e && C(e.$$.fragment, u), (s = !1);
      },
      d(u) {
        u && r(n), e && L(e, u);
      },
    }
  );
}
function qp(p) {
  let e,
    n = Et.parse(p[1].foreground) + '',
    s;
  return {
    c() {
      (e = new jp(!1)), (s = B()), this.h();
    },
    l(t) {
      (e = Bp(t, !1)), (s = B()), this.h();
    },
    h() {
      e.a = s;
    },
    m(t, c) {
      e.m(n, t, c), y(t, s, c);
    },
    p(t, c) {
      c & 1 && n !== (n = Et.parse(t[1].foreground) + '') && e.p(n);
    },
    i: I,
    o: I,
    d(t) {
      t && r(s), t && e.d();
    },
  };
}
function ap(p) {
  let e, n, s, t, c, o;
  const u = [Hp, Vp],
    l = [];
  function m(v, b) {
    return v[1].foreground === '' || !v[1].foreground ? 0 : 1;
  }
  return (
    (n = m(p)),
    (s = l[n] = u[n](p)),
    {
      c() {
        (e = f('section')), s.c(), (t = w()), this.h();
      },
      l(v) {
        e = d(v, 'SECTION', { class: !0 });
        var b = k(e);
        s.l(b), (t = E(b)), b.forEach(r), this.h();
      },
      h() {
        $(
          e,
          'class',
          (c =
            'step-foreground-container step-' + (p[3] + 1) + ' svelte-20kuyz')
        );
      },
      m(v, b) {
        y(v, e, b), l[n].m(e, null), a(e, t), (o = !0);
      },
      p(v, b) {
        let S = n;
        (n = m(v)),
          n === S
            ? l[n].p(v, b)
            : (H(),
              C(l[S], 1, 1, () => {
                l[S] = null;
              }),
              F(),
              (s = l[n]),
              s ? s.p(v, b) : ((s = l[n] = u[n](v)), s.c()),
              P(s, 1),
              s.m(e, t));
      },
      i(v) {
        o || (P(s), (o = !0));
      },
      o(v) {
        C(s), (o = !1);
      },
      d(v) {
        v && r(e), l[n].d();
      },
    }
  );
}
function Qp(p) {
  let e,
    n,
    s = p[0],
    t = [];
  for (let o = 0; o < s.length; o += 1) t[o] = ap(tp(p, s, o));
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
      y(o, e, u), (n = !0);
    },
    p(o, [u]) {
      if (u & 1) {
        s = o[0];
        let l;
        for (l = 0; l < s.length; l += 1) {
          const m = tp(o, s, l);
          t[l]
            ? (t[l].p(m, u), P(t[l], 1))
            : ((t[l] = ap(m)), t[l].c(), P(t[l], 1), t[l].m(e.parentNode, e));
        }
        for (H(), l = s.length; l < t.length; l += 1) c(l);
        F();
      }
    },
    i(o) {
      if (!n) {
        for (let u = 0; u < s.length; u += 1) P(t[u]);
        n = !0;
      }
    },
    o(o) {
      t = t.filter(Boolean);
      for (let u = 0; u < t.length; u += 1) C(t[u]);
      n = !1;
    },
    d(o) {
      Tl(t, o), o && r(e);
    },
  };
}
function Wp(p, e, n) {
  let { steps: s = [] } = e;
  return (
    (p.$$set = (t) => {
      'steps' in t && n(0, (s = t.steps));
    }),
    [s]
  );
}
class Yp extends se {
  constructor(e) {
    super(), te(this, e, Wp, Qp, ae, { steps: 0 });
  }
}
function Jp(p) {
  let e, n, s, t, c, o, u;
  const l = [p[0].backgroundProps || {}];
  var m = p[0].background;
  function v(b) {
    let S = {};
    for (let D = 0; D < l.length; D += 1) S = Pt(S, l[D]);
    return { props: S };
  }
  return (
    m && (s = new m(v())),
    {
      c() {
        (e = f('section')), (n = f('div')), s && O(s.$$.fragment), this.h();
      },
      l(b) {
        e = d(b, 'SECTION', { class: !0, step: !0 });
        var S = k(e);
        n = d(S, 'DIV', { class: !0 });
        var D = k(n);
        s && j(s.$$.fragment, D), D.forEach(r), S.forEach(r), this.h();
      },
      h() {
        $(n, 'class', (t = 'embedded-background step-' + (p[2] + 1))),
          $(e, 'class', (c = 'background-container graphic ' + p[1])),
          $(e, 'step', (o = p[2] + 1));
      },
      m(b, S) {
        y(b, e, S), a(e, n), s && z(s, n, null), (u = !0);
      },
      p(b, [S]) {
        const D = S & 1 ? $t(l, [St(b[0].backgroundProps || {})]) : {};
        if (m !== (m = b[0].background)) {
          if (s) {
            H();
            const U = s;
            C(U.$$.fragment, 1, 0, () => {
              L(U, 1);
            }),
              F();
          }
          m
            ? ((s = new m(v())),
              O(s.$$.fragment),
              P(s.$$.fragment, 1),
              z(s, n, null))
            : (s = null);
        } else m && s.$set(D);
        (!u ||
          (S & 4 && t !== (t = 'embedded-background step-' + (b[2] + 1)))) &&
          $(n, 'class', t),
          (!u ||
            (S & 2 && c !== (c = 'background-container graphic ' + b[1]))) &&
            $(e, 'class', c),
          (!u || (S & 4 && o !== (o = b[2] + 1))) && $(e, 'step', o);
      },
      i(b) {
        u || (s && P(s.$$.fragment, b), (u = !0));
      },
      o(b) {
        s && C(s.$$.fragment, b), (u = !1);
      },
      d(b) {
        b && r(e), s && L(s);
      },
    }
  );
}
function Xp(p, e, n) {
  let { step: s } = e,
    { backgroundSize: t } = e,
    { index: c } = e;
  return (
    (p.$$set = (o) => {
      'step' in o && n(0, (s = o.step)),
        'backgroundSize' in o && n(1, (t = o.backgroundSize)),
        'index' in o && n(2, (c = o.index));
    }),
    [s, t, c]
  );
}
class up extends se {
  constructor(e) {
    super(), te(this, e, Xp, Jp, ae, { step: 0, backgroundSize: 1, index: 2 });
  }
}
function Zp(p) {
  let e, n, s, t;
  const c = [p[0].foregroundProps || {}];
  var o = p[0].foreground;
  function u(l) {
    let m = {};
    for (let v = 0; v < c.length; v += 1) m = Pt(m, c[v]);
    return { props: m };
  }
  return (
    o && (n = new o(u())),
    {
      c() {
        (e = f('div')), n && O(n.$$.fragment), this.h();
      },
      l(l) {
        e = d(l, 'DIV', { class: !0 });
        var m = k(e);
        n && j(n.$$.fragment, m), m.forEach(r), this.h();
      },
      h() {
        $(
          e,
          'class',
          (s = 'embedded-foreground step-' + (p[1] + 1) + ' svelte-kywsd6')
        );
      },
      m(l, m) {
        y(l, e, m), n && z(n, e, null), (t = !0);
      },
      p(l, m) {
        const v = m & 1 ? $t(c, [St(l[0].foregroundProps || {})]) : {};
        if (o !== (o = l[0].foreground)) {
          if (n) {
            H();
            const b = n;
            C(b.$$.fragment, 1, 0, () => {
              L(b, 1);
            }),
              F();
          }
          o
            ? ((n = new o(u())),
              O(n.$$.fragment),
              P(n.$$.fragment, 1),
              z(n, e, null))
            : (n = null);
        } else o && n.$set(v);
        (!t ||
          (m & 2 &&
            s !==
              (s =
                'embedded-foreground step-' +
                (l[1] + 1) +
                ' svelte-kywsd6'))) &&
          $(e, 'class', s);
      },
      i(l) {
        t || (n && P(n.$$.fragment, l), (t = !0));
      },
      o(l) {
        n && C(n.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && r(e), n && L(n);
      },
    }
  );
}
function Kp(p) {
  let e,
    n,
    s = Et.parse(p[0].foreground) + '',
    t,
    c;
  return {
    c() {
      (e = f('section')), (n = f('div')), this.h();
    },
    l(o) {
      e = d(o, 'SECTION', { class: !0, step: !0 });
      var u = k(e);
      n = d(u, 'DIV', { class: !0 });
      var l = k(n);
      l.forEach(r), u.forEach(r), this.h();
    },
    h() {
      $(
        n,
        'class',
        (t = 'embedded-foreground step-' + (p[1] + 1) + ' svelte-kywsd6')
      ),
        $(e, 'class', 'body-text'),
        $(e, 'step', (c = p[1] + 1));
    },
    m(o, u) {
      y(o, e, u), a(e, n), (n.innerHTML = s);
    },
    p(o, u) {
      u & 1 && s !== (s = Et.parse(o[0].foreground) + '') && (n.innerHTML = s),
        u & 2 &&
          t !==
            (t = 'embedded-foreground step-' + (o[1] + 1) + ' svelte-kywsd6') &&
          $(n, 'class', t),
        u & 2 && c !== (c = o[1] + 1) && $(e, 'step', c);
    },
    i: I,
    o: I,
    d(o) {
      o && r(e);
    },
  };
}
function xp(p) {
  let e, n;
  return {
    c() {
      (e = f('div')), this.h();
    },
    l(s) {
      (e = d(s, 'DIV', { class: !0 })), k(e).forEach(r), this.h();
    },
    h() {
      $(
        e,
        'class',
        (n = 'empty-step-foreground step-' + (p[1] + 1) + ' svelte-kywsd6')
      );
    },
    m(s, t) {
      y(s, e, t);
    },
    p(s, t) {
      t & 2 &&
        n !==
          (n = 'empty-step-foreground step-' + (s[1] + 1) + ' svelte-kywsd6') &&
        $(e, 'class', n);
    },
    i: I,
    o: I,
    d(s) {
      s && r(e);
    },
  };
}
function ec(p) {
  let e, n, s, t;
  const c = [xp, Kp, Zp],
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
    (n = o[e] = c[e](p)),
    {
      c() {
        n.c(), (s = B());
      },
      l(l) {
        n.l(l), (s = B());
      },
      m(l, m) {
        o[e].m(l, m), y(l, s, m), (t = !0);
      },
      p(l, [m]) {
        let v = e;
        (e = u(l)),
          e === v
            ? o[e].p(l, m)
            : (H(),
              C(o[v], 1, 1, () => {
                o[v] = null;
              }),
              F(),
              (n = o[e]),
              n ? n.p(l, m) : ((n = o[e] = c[e](l)), n.c()),
              P(n, 1),
              n.m(s.parentNode, s));
      },
      i(l) {
        t || (P(n), (t = !0));
      },
      o(l) {
        C(n), (t = !1);
      },
      d(l) {
        o[e].d(l), l && r(s);
      },
    }
  );
}
function nc(p, e, n) {
  let { step: s } = e,
    { index: t } = e;
  return (
    (p.$$set = (c) => {
      'step' in c && n(0, (s = c.step)), 'index' in c && n(1, (t = c.index));
    }),
    [s, t]
  );
}
class fp extends se {
  constructor(e) {
    super(), te(this, e, nc, ec, ae, { step: 0, index: 1 });
  }
}
function op(p, e, n) {
  const s = p.slice();
  return (s[3] = e[n]), (s[5] = n), s;
}
function sc(p) {
  let e, n, s, t;
  return (
    (e = new fp({ props: { step: p[3], index: p[5] } })),
    (s = new up({ props: { step: p[3], index: p[5], backgroundSize: p[2] } })),
    {
      c() {
        O(e.$$.fragment), (n = w()), O(s.$$.fragment);
      },
      l(c) {
        j(e.$$.fragment, c), (n = E(c)), j(s.$$.fragment, c);
      },
      m(c, o) {
        z(e, c, o), y(c, n, o), z(s, c, o), (t = !0);
      },
      p(c, o) {
        const u = {};
        o & 1 && (u.step = c[3]), e.$set(u);
        const l = {};
        o & 1 && (l.step = c[3]), o & 4 && (l.backgroundSize = c[2]), s.$set(l);
      },
      i(c) {
        t || (P(e.$$.fragment, c), P(s.$$.fragment, c), (t = !0));
      },
      o(c) {
        C(e.$$.fragment, c), C(s.$$.fragment, c), (t = !1);
      },
      d(c) {
        L(e, c), c && r(n), L(s, c);
      },
    }
  );
}
function tc(p) {
  let e, n, s, t, c;
  return (
    (e = new up({ props: { step: p[3], index: p[5], backgroundSize: p[2] } })),
    (s = new fp({ props: { step: p[3], index: p[5] } })),
    {
      c() {
        O(e.$$.fragment), (n = w()), O(s.$$.fragment), (t = w());
      },
      l(o) {
        j(e.$$.fragment, o), (n = E(o)), j(s.$$.fragment, o), (t = E(o));
      },
      m(o, u) {
        z(e, o, u), y(o, n, u), z(s, o, u), y(o, t, u), (c = !0);
      },
      p(o, u) {
        const l = {};
        u & 1 && (l.step = o[3]), u & 4 && (l.backgroundSize = o[2]), e.$set(l);
        const m = {};
        u & 1 && (m.step = o[3]), s.$set(m);
      },
      i(o) {
        c || (P(e.$$.fragment, o), P(s.$$.fragment, o), (c = !0));
      },
      o(o) {
        C(e.$$.fragment, o), C(s.$$.fragment, o), (c = !1);
      },
      d(o) {
        L(e, o), o && r(n), L(s, o), o && r(t);
      },
    }
  );
}
function lp(p) {
  let e, n, s, t;
  const c = [tc, sc],
    o = [];
  function u(l, m) {
    return l[1] === 'bf' ? 0 : 1;
  }
  return (
    (e = u(p)),
    (n = o[e] = c[e](p)),
    {
      c() {
        n.c(), (s = B());
      },
      l(l) {
        n.l(l), (s = B());
      },
      m(l, m) {
        o[e].m(l, m), y(l, s, m), (t = !0);
      },
      p(l, m) {
        let v = e;
        (e = u(l)),
          e === v
            ? o[e].p(l, m)
            : (H(),
              C(o[v], 1, 1, () => {
                o[v] = null;
              }),
              F(),
              (n = o[e]),
              n ? n.p(l, m) : ((n = o[e] = c[e](l)), n.c()),
              P(n, 1),
              n.m(s.parentNode, s));
      },
      i(l) {
        t || (P(n), (t = !0));
      },
      o(l) {
        C(n), (t = !1);
      },
      d(l) {
        o[e].d(l), l && r(s);
      },
    }
  );
}
function ac(p) {
  let e,
    n,
    s = p[0],
    t = [];
  for (let o = 0; o < s.length; o += 1) t[o] = lp(op(p, s, o));
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
      y(o, e, u), (n = !0);
    },
    p(o, [u]) {
      if (u & 7) {
        s = o[0];
        let l;
        for (l = 0; l < s.length; l += 1) {
          const m = op(o, s, l);
          t[l]
            ? (t[l].p(m, u), P(t[l], 1))
            : ((t[l] = lp(m)), t[l].c(), P(t[l], 1), t[l].m(e.parentNode, e));
        }
        for (H(), l = s.length; l < t.length; l += 1) c(l);
        F();
      }
    },
    i(o) {
      if (!n) {
        for (let u = 0; u < s.length; u += 1) P(t[u]);
        n = !0;
      }
    },
    o(o) {
      t = t.filter(Boolean);
      for (let u = 0; u < t.length; u += 1) C(t[u]);
      n = !1;
    },
    d(o) {
      Tl(t, o), o && r(e);
    },
  };
}
function oc(p, e, n) {
  let { steps: s } = e,
    { embeddedLayout: t = 'fb' } = e,
    { backgroundSize: c } = e;
  return (
    (p.$$set = (o) => {
      'steps' in o && n(0, (s = o.steps)),
        'embeddedLayout' in o && n(1, (t = o.embeddedLayout)),
        'backgroundSize' in o && n(2, (c = o.backgroundSize));
    }),
    [s, t, c]
  );
}
class lc extends se {
  constructor(e) {
    super(),
      te(this, e, oc, ac, ae, {
        steps: 0,
        embeddedLayout: 1,
        backgroundSize: 2,
      });
  }
}
function rc(p) {
  let e, n, s;
  return (
    (n = new lc({
      props: { steps: p[1], embeddedLayout: p[7], backgroundSize: p[2] },
    })),
    {
      c() {
        (e = f('section')), O(n.$$.fragment), this.h();
      },
      l(t) {
        e = d(t, 'SECTION', { class: !0, id: !0 });
        var c = k(e);
        j(n.$$.fragment, c), c.forEach(r), this.h();
      },
      h() {
        $(e, 'class', 'scroller-container embedded svelte-5wwrxt'),
          $(e, 'id', p[0]);
      },
      m(t, c) {
        y(t, e, c), z(n, e, null), (s = !0);
      },
      p(t, c) {
        const o = {};
        c & 2 && (o.steps = t[1]),
          c & 128 && (o.embeddedLayout = t[7]),
          c & 4 && (o.backgroundSize = t[2]),
          n.$set(o),
          (!s || c & 1) && $(e, 'id', t[0]);
      },
      i(t) {
        s || (P(n.$$.fragment, t), (s = !0));
      },
      o(t) {
        C(n.$$.fragment, t), (s = !1);
      },
      d(t) {
        t && r(e), L(n);
      },
    }
  );
}
function pc(p) {
  let e, n, s, t, c, o;
  function u(b) {
    p[15](b);
  }
  function l(b) {
    p[16](b);
  }
  function m(b) {
    p[17](b);
  }
  let v = {
    threshold: p[8],
    top: p[9],
    bottom: p[10],
    parallax: p[11],
    query: 'section.step-foreground-container',
    $$slots: { foreground: [ic], background: [cc] },
    $$scope: { ctx: p },
  };
  return (
    p[12] !== void 0 && (v.index = p[12]),
    p[13] !== void 0 && (v.offset = p[13]),
    p[14] !== void 0 && (v.progress = p[14]),
    (n = new Mp({ props: v })),
    Pl.push(() => Cl(n, 'index', u)),
    Pl.push(() => Cl(n, 'offset', l)),
    Pl.push(() => Cl(n, 'progress', m)),
    {
      c() {
        (e = f('section')), O(n.$$.fragment), this.h();
      },
      l(b) {
        e = d(b, 'SECTION', { class: !0, id: !0 });
        var S = k(e);
        j(n.$$.fragment, S), S.forEach(r), this.h();
      },
      h() {
        $(e, 'class', 'scroller-container svelte-5wwrxt'), $(e, 'id', p[0]);
      },
      m(b, S) {
        y(b, e, S), z(n, e, null), (o = !0);
      },
      p(b, S) {
        const D = {};
        S & 256 && (D.threshold = b[8]),
          S & 512 && (D.top = b[9]),
          S & 1024 && (D.bottom = b[10]),
          S & 2048 && (D.parallax = b[11]),
          S & 266302 && (D.$$scope = { dirty: S, ctx: b }),
          !s && S & 4096 && ((s = !0), (D.index = b[12]), Il(() => (s = !1))),
          !t && S & 8192 && ((t = !0), (D.offset = b[13]), Il(() => (t = !1))),
          !c &&
            S & 16384 &&
            ((c = !0), (D.progress = b[14]), Il(() => (c = !1))),
          n.$set(D),
          (!o || S & 1) && $(e, 'id', b[0]);
      },
      i(b) {
        o || (P(n.$$.fragment, b), (o = !0));
      },
      o(b) {
        C(n.$$.fragment, b), (o = !1);
      },
      d(b) {
        b && r(e), L(n);
      },
    }
  );
}
function cc(p) {
  let e, n, s, t, c, o, u;
  return (
    (t = new Up({
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
          (n = f('div')),
          (s = f('section')),
          O(t.$$.fragment),
          this.h();
      },
      l(l) {
        e = d(l, 'DIV', { slot: !0, class: !0 });
        var m = k(e);
        n = d(m, 'DIV', { class: !0 });
        var v = k(n);
        s = d(v, 'SECTION', { class: !0, step: !0 });
        var b = k(s);
        j(t.$$.fragment, b), b.forEach(r), v.forEach(r), m.forEach(r), this.h();
      },
      h() {
        $(
          s,
          'class',
          (c = 'background-container graphic ' + p[2] + ' svelte-5wwrxt')
        ),
          $(s, 'step', (o = p[12] + 1)),
          $(n, 'class', 'scroller-graphic-well svelte-5wwrxt'),
          $(e, 'slot', 'background'),
          $(e, 'class', 'background svelte-5wwrxt'),
          Ie(e, 'right', p[3] === 'left opposite'),
          Ie(e, 'left', p[3] === 'right opposite');
      },
      m(l, m) {
        y(l, e, m), a(e, n), a(n, s), z(t, s, null), (u = !0);
      },
      p(l, m) {
        const v = {};
        m & 4096 && (v.index = l[12]),
          m & 2 && (v.steps = l[1]),
          m & 32 && (v.preload = l[5]),
          m & 16 && (v.stackBackground = l[4]),
          t.$set(v),
          (!u ||
            (m & 4 &&
              c !==
                (c =
                  'background-container graphic ' +
                  l[2] +
                  ' svelte-5wwrxt'))) &&
            $(s, 'class', c),
          (!u || (m & 4096 && o !== (o = l[12] + 1))) && $(s, 'step', o),
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
function ic(p) {
  let e, n, s, t;
  return (
    (n = new Yp({ props: { steps: p[1] } })),
    {
      c() {
        (e = f('div')), O(n.$$.fragment), this.h();
      },
      l(c) {
        e = d(c, 'DIV', { slot: !0, class: !0 });
        var o = k(e);
        j(n.$$.fragment, o), o.forEach(r), this.h();
      },
      h() {
        $(e, 'slot', 'foreground'),
          $(e, 'class', (s = 'foreground ' + p[3] + ' svelte-5wwrxt'));
      },
      m(c, o) {
        y(c, e, o), z(n, e, null), (t = !0);
      },
      p(c, o) {
        const u = {};
        o & 2 && (u.steps = c[1]),
          n.$set(u),
          (!t ||
            (o & 8 && s !== (s = 'foreground ' + c[3] + ' svelte-5wwrxt'))) &&
            $(e, 'class', s);
      },
      i(c) {
        t || (P(n.$$.fragment, c), (t = !0));
      },
      o(c) {
        C(n.$$.fragment, c), (t = !1);
      },
      d(c) {
        c && r(e), L(n);
      },
    }
  );
}
function uc(p) {
  let e, n, s, t;
  const c = [pc, rc],
    o = [];
  function u(l, m) {
    return l[6] ? 1 : 0;
  }
  return (
    (e = u(p)),
    (n = o[e] = c[e](p)),
    {
      c() {
        n.c(), (s = B());
      },
      l(l) {
        n.l(l), (s = B());
      },
      m(l, m) {
        o[e].m(l, m), y(l, s, m), (t = !0);
      },
      p(l, [m]) {
        let v = e;
        (e = u(l)),
          e === v
            ? o[e].p(l, m)
            : (H(),
              C(o[v], 1, 1, () => {
                o[v] = null;
              }),
              F(),
              (n = o[e]),
              n ? n.p(l, m) : ((n = o[e] = c[e](l)), n.c()),
              P(n, 1),
              n.m(s.parentNode, s));
      },
      i(l) {
        t || (P(n), (t = !0));
      },
      o(l) {
        C(n), (t = !1);
      },
      d(l) {
        o[e].d(l), l && r(s);
      },
    }
  );
}
function fc(p, e, n) {
  let { id: s = '' } = e,
    { steps: t = [] } = e,
    { backgroundSize: c = 'fluid' } = e,
    { foregroundPosition: o = 'middle' } = e,
    { stackBackground: u = !0 } = e,
    { preload: l = 1 } = e,
    { embedded: m = !1 } = e,
    { embeddedLayout: v = 'fb' } = e,
    { threshold: b = 0.5 } = e,
    { top: S = 0 } = e,
    { bottom: D = 1 } = e,
    { parallax: U = !1 } = e,
    M = 0,
    oe,
    De;
  function yn(T) {
    (M = T), n(12, M);
  }
  function Te(T) {
    (oe = T), n(13, oe);
  }
  function wn(T) {
    (De = T), n(14, De);
  }
  return (
    (p.$$set = (T) => {
      'id' in T && n(0, (s = T.id)),
        'steps' in T && n(1, (t = T.steps)),
        'backgroundSize' in T && n(2, (c = T.backgroundSize)),
        'foregroundPosition' in T && n(3, (o = T.foregroundPosition)),
        'stackBackground' in T && n(4, (u = T.stackBackground)),
        'preload' in T && n(5, (l = T.preload)),
        'embedded' in T && n(6, (m = T.embedded)),
        'embeddedLayout' in T && n(7, (v = T.embeddedLayout)),
        'threshold' in T && n(8, (b = T.threshold)),
        'top' in T && n(9, (S = T.top)),
        'bottom' in T && n(10, (D = T.bottom)),
        'parallax' in T && n(11, (U = T.parallax));
    }),
    [s, t, c, o, u, l, m, v, b, S, D, U, M, oe, De, yn, Te, wn]
  );
}
class sn extends se {
  constructor(e) {
    super(),
      te(this, e, fc, uc, ae, {
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
function dc(p) {
  let e, n, s, t, c, o, u, l, m, v, b;
  return {
    c() {
      (e = f('h4')),
        (n = g('Interactive step')),
        (s = w()),
        (t = f('p')),
        (c = g('The count is ')),
        (o = g(p[0])),
        (u = w()),
        (l = f('button')),
        (m = g('Click Me'));
    },
    l(S) {
      e = d(S, 'H4', {});
      var D = k(e);
      (n = h(D, 'Interactive step')),
        D.forEach(r),
        (s = E(S)),
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
      y(S, e, D),
        a(e, n),
        y(S, s, D),
        y(S, t, D),
        a(t, c),
        a(t, o),
        y(S, u, D),
        y(S, l, D),
        a(l, m),
        v || ((b = Gp(l, 'click', p[1])), (v = !0));
    },
    p(S, [D]) {
      D & 1 && Np(o, S[0]);
    },
    i: I,
    o: I,
    d(S) {
      S && r(e), S && r(s), S && r(t), S && r(u), S && r(l), (v = !1), b();
    },
  };
}
function kc(p, e, n) {
  let { count: s = 0 } = e;
  const t = () => {
    n(0, (s += 1));
  };
  return (
    (p.$$set = (c) => {
      'count' in c && n(0, (s = c.count));
    }),
    [s, t]
  );
}
class rp extends se {
  constructor(e) {
    super(), te(this, e, kc, dc, ae, { count: 0 });
  }
}
function gc(p) {
  let e, n, s;
  return {
    c() {
      (e = f('div')), (n = f('div')), this.h();
    },
    l(t) {
      e = d(t, 'DIV', { class: !0 });
      var c = k(e);
      (n = d(c, 'DIV', { class: !0, style: !0 })),
        k(n).forEach(r),
        c.forEach(r),
        this.h();
    },
    h() {
      $(n, 'class', 'step svelte-1e3wp2r'),
        $(
          n,
          'style',
          (s = `
      background: ${p[0]};
      height: ${400 / p[2]}px;
      top: ${p[1] * (400 / p[2])}px;
  `)
        ),
        $(e, 'class', 'step-cont svelte-1e3wp2r');
    },
    m(t, c) {
      y(t, e, c), a(e, n);
    },
    p(t, [c]) {
      c & 7 &&
        s !==
          (s = `
      background: ${t[0]};
      height: ${400 / t[2]}px;
      top: ${t[1] * (400 / t[2])}px;
  `) &&
        $(n, 'style', s);
    },
    i: I,
    o: I,
    d(t) {
      t && r(e);
    },
  };
}
function hc(p, e, n) {
  let { colour: s = 'lightblue' } = e,
    { i: t = 0 } = e,
    { steps: c = 3 } = e;
  return (
    (p.$$set = (o) => {
      'colour' in o && n(0, (s = o.colour)),
        'i' in o && n(1, (t = o.i)),
        'steps' in o && n(2, (c = o.steps));
    }),
    [s, t, c]
  );
}
class Dl extends se {
  constructor(e) {
    super(), te(this, e, hc, gc, ae, { colour: 0, i: 1, steps: 2 });
  }
}
function mc(p) {
  let e, n;
  return {
    c() {
      (e = f('div')), this.h();
    },
    l(s) {
      (e = d(s, 'DIV', { class: !0, style: !0 })), k(e).forEach(r), this.h();
    },
    h() {
      $(e, 'class', 'step svelte-13llgxe'),
        $(e, 'style', (n = `background: ${p[0]};`));
    },
    m(s, t) {
      y(s, e, t);
    },
    p(s, [t]) {
      t & 1 && n !== (n = `background: ${s[0]};`) && $(e, 'style', n);
    },
    i: I,
    o: I,
    d(s) {
      s && r(e);
    },
  };
}
function _c(p, e, n) {
  let { colour: s = 'lightblue' } = e;
  return (
    (p.$$set = (t) => {
      'colour' in t && n(0, (s = t.colour));
    }),
    [s]
  );
}
class bn extends se {
  constructor(e) {
    super(), te(this, e, _c, mc, ae, { colour: 0 });
  }
}
function vc(p) {
  switch (p) {
    case './demos/ai2html/ai-scroller-1.exclude.svelte':
      return Sl(
        () => import('./ai-scroller-1.exclude-5614aa57.js'),
        [
          'chunks/ai-scroller-1.exclude-5614aa57.js',
          'assets/ai-scroller-1.exclude-74bdcb73.css',
          'chunks/index-83a5d9f9.js',
          'chunks/paths-396f020f.js',
        ]
      );
    case './demos/ai2html/ai-scroller-2.exclude.svelte':
      return Sl(
        () => import('./ai-scroller-2.exclude-97dfb983.js'),
        [
          'chunks/ai-scroller-2.exclude-97dfb983.js',
          'assets/ai-scroller-2.exclude-155f9842.css',
          'chunks/index-83a5d9f9.js',
          'chunks/paths-396f020f.js',
        ]
      );
    case './demos/ai2html/ai-scroller-3.exclude.svelte':
      return Sl(
        () => import('./ai-scroller-3.exclude-7d125d30.js'),
        [
          'chunks/ai-scroller-3.exclude-7d125d30.js',
          'assets/ai-scroller-3.exclude-7af48916.css',
          'chunks/index-83a5d9f9.js',
          'chunks/paths-396f020f.js',
        ]
      );
    default:
      return new Promise(function (e, n) {
        (typeof queueMicrotask == 'function'
          ? queueMicrotask
          : setTimeout)(n.bind(null, new Error('Unknown variable dynamic import: ' + p)));
      });
  }
}
function bc(p) {
  let e, n;
  return (
    (e = new sn({
      props: { steps: p[0], backgroundSize: 'wide', id: 'example1' },
    })),
    {
      c() {
        O(e.$$.fragment);
      },
      l(s) {
        j(e.$$.fragment, s);
      },
      m(s, t) {
        z(e, s, t), (n = !0);
      },
      p: I,
      i(s) {
        n || (P(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        C(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        L(e, s);
      },
    }
  );
}
function yc(p) {
  let e, n;
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
      l(s) {
        j(e.$$.fragment, s);
      },
      m(s, t) {
        z(e, s, t), (n = !0);
      },
      p: I,
      i(s) {
        n || (P(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        C(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        L(e, s);
      },
    }
  );
}
function wc(p) {
  let e, n;
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
      l(s) {
        j(e.$$.fragment, s);
      },
      m(s, t) {
        z(e, s, t), (n = !0);
      },
      p: I,
      i(s) {
        n || (P(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        C(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        L(e, s);
      },
    }
  );
}
function Ec(p) {
  let e, n;
  return (
    (e = new sn({
      props: { steps: p[2], backgroundSize: 'widest', id: 'example3' },
    })),
    {
      c() {
        O(e.$$.fragment);
      },
      l(s) {
        j(e.$$.fragment, s);
      },
      m(s, t) {
        z(e, s, t), (n = !0);
      },
      p: I,
      i(s) {
        n || (P(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        C(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        L(e, s);
      },
    }
  );
}
function $c(p) {
  let e, n;
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
      l(s) {
        j(e.$$.fragment, s);
      },
      m(s, t) {
        z(e, s, t), (n = !0);
      },
      p: I,
      i(s) {
        n || (P(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        C(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        L(e, s);
      },
    }
  );
}
function Sc(p) {
  return { c: I, l: I, m: I, p: I, i: I, o: I, d: I };
}
function Pc(p) {
  let e, n;
  return (
    (e = new sn({
      props: { steps: p[6], backgroundSize: 'fluid', id: 'example-5' },
    })),
    {
      c() {
        O(e.$$.fragment);
      },
      l(s) {
        j(e.$$.fragment, s);
      },
      m(s, t) {
        z(e, s, t), (n = !0);
      },
      p: I,
      i(s) {
        n || (P(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        C(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        L(e, s);
      },
    }
  );
}
function Cc(p) {
  return { c: I, l: I, m: I, p: I, i: I, o: I, d: I };
}
function Ic(p) {
  let e,
    n,
    s = {
      ctx: p,
      current: null,
      token: null,
      hasCatch: !1,
      pending: Cc,
      then: Pc,
      catch: Sc,
      value: 6,
      blocks: [, , ,],
    };
  return (
    cp(p[4](p[3]), s),
    {
      c() {
        (e = B()), s.block.c();
      },
      l(t) {
        (e = B()), s.block.l(t);
      },
      m(t, c) {
        y(t, e, c),
          s.block.m(t, (s.anchor = c)),
          (s.mount = () => e.parentNode),
          (s.anchor = e),
          (n = !0);
      },
      p(t, c) {
        (p = t), ip(s, p, c);
      },
      i(t) {
        n || (P(s.block), (n = !0));
      },
      o(t) {
        for (let c = 0; c < 3; c += 1) {
          const o = s.blocks[c];
          C(o);
        }
        n = !1;
      },
      d(t) {
        t && r(e), s.block.d(t), (s.token = null), (s = null);
      },
    }
  );
}
function Dc(p) {
  return { c: I, l: I, m: I, p: I, i: I, o: I, d: I };
}
function Tc(p) {
  let e, n;
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
      l(s) {
        j(e.$$.fragment, s);
      },
      m(s, t) {
        z(e, s, t), (n = !0);
      },
      p: I,
      i(s) {
        n || (P(e.$$.fragment, s), (n = !0));
      },
      o(s) {
        C(e.$$.fragment, s), (n = !1);
      },
      d(s) {
        L(e, s);
      },
    }
  );
}
function Lc(p) {
  return { c: I, l: I, m: I, p: I, i: I, o: I, d: I };
}
function Oc(p) {
  let e,
    n,
    s = {
      ctx: p,
      current: null,
      token: null,
      hasCatch: !1,
      pending: Lc,
      then: Tc,
      catch: Dc,
      value: 6,
      blocks: [, , ,],
    };
  return (
    cp(p[4](p[3]), s),
    {
      c() {
        (e = B()), s.block.c();
      },
      l(t) {
        (e = B()), s.block.l(t);
      },
      m(t, c) {
        y(t, e, c),
          s.block.m(t, (s.anchor = c)),
          (s.mount = () => e.parentNode),
          (s.anchor = e),
          (n = !0);
      },
      p(t, c) {
        (p = t), ip(s, p, c);
      },
      i(t) {
        n || (P(s.block), (n = !0));
      },
      o(t) {
        for (let c = 0; c < 3; c += 1) {
          const o = s.blocks[c];
          C(o);
        }
        n = !1;
      },
      d(t) {
        t && r(e), s.block.d(t), (s.token = null), (s = null);
      },
    }
  );
}
function zc(p) {
  let e,
    n,
    s,
    t,
    c,
    o,
    u,
    l,
    m,
    v,
    b,
    S,
    D,
    U,
    M,
    oe,
    De,
    yn,
    Te,
    wn,
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
    zt,
    Oe,
    Pn,
    jt,
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
    zn,
    Qt,
    Wt,
    jn,
    Yt,
    Jt,
    Bn,
    Xt,
    Zt,
    Gn,
    Kt,
    xt,
    As,
    ze,
    dp = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
    je,
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
    va,
    ba,
    ya,
    Qn,
    wa,
    Ea,
    q,
    Wn,
    $a,
    Sa,
    Yn,
    Pa,
    Ca,
    Jn,
    Ia,
    Da,
    Xn,
    Ta,
    La,
    Hs,
    Ge,
    kp = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
    Zn,
    Kn,
    Oa,
    za,
    le,
    xn,
    ja,
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
    Wa,
    Ne,
    Ya,
    ls,
    Ja,
    Xa,
    Za,
    un,
    rs,
    Ka,
    xa,
    Qs,
    Me,
    gp =
      '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span> <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">stackBackground="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">preload="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">0</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>',
    Ws,
    ge,
    Ys,
    fn,
    X,
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
    hp = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
    Xs,
    he,
    Zs,
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
    Ks,
    He,
    mp = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span> <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">backgroundSize</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>widest<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-scroller<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

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
    ve,
    et,
    be,
    pe,
    mo,
    Fe,
    _o,
    vo,
    qe,
    bo,
    yo,
    wo,
    dn,
    Qe,
    Eo,
    We,
    $o,
    So,
    nt,
    Ye,
    _p = `<code class="language-bash"><span class="token comment"># In your Google doc...</span>
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
    vp = `<code class="language-svelte"><span class="token comment">&lt;!-- src/lib/Page.svelte --></span>
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
    ye,
    ce,
    Po,
    ds,
    Co,
    Io,
    Xe,
    Do,
    To,
    Lo,
    W,
    ks,
    Oo,
    zo,
    gs,
    jo,
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
    vs,
    Vo,
    Ho,
    bs,
    Fo,
    qo,
    ys,
    Qo,
    Wo,
    ws,
    Yo,
    ot,
    we,
    lt,
    A,
    Es,
    Jo,
    Xo,
    $s,
    Ss,
    Zo,
    Ko,
    Ps,
    Z,
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
    Ze,
    kn,
    Os,
    cl,
    il,
    ul,
    gn,
    zs,
    fl,
    dl,
    rt,
    Ke,
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
      props: { fluid: !0, $$slots: { default: [yc] }, $$scope: { ctx: p } },
    })),
    (ge = new nn({
      props: { fluid: !0, $$slots: { default: [wc] }, $$scope: { ctx: p } },
    })),
    (he = new nn({
      props: { fluid: !0, $$slots: { default: [Ec] }, $$scope: { ctx: p } },
    })),
    (ve = new nn({
      props: { fluid: !0, $$slots: { default: [$c] }, $$scope: { ctx: p } },
    })),
    (we = new nn({
      props: { fluid: !0, $$slots: { default: [Ic] }, $$scope: { ctx: p } },
    })),
    (Ee = new nn({
      props: { fluid: !0, $$slots: { default: [Oc] }, $$scope: { ctx: p } },
    })),
    {
      c() {
        (e = f('section')),
          (n = f('h2')),
          (s = g(pp)),
          (t = w()),
          (c = f('p')),
          (o = g('Easy scrollytelling.')),
          (u = w()),
          (l = f('section')),
          (m = f('p')),
          (v = g(
            'This component is designed to handle most common layouts for scrollytelling. If you need something more complex, though, you should use '
          )),
          (b = f('a')),
          (S = g('svelte-scroller')),
          (D = g(
            ', which is a lower level component you can more easily customize.'
          )),
          (U = w()),
          (M = f('p')),
          (oe = f('code')),
          (De = g('steps')),
          (yn = w()),
          (Te = f('em')),
          (wn = g('an array of objects')),
          (T = w()),
          (J = f('ul')),
          (Le = f('li')),
          (En = f('code')),
          (Ct = g('background')),
          (It = g(' A background component ')),
          ($n = f('strong')),
          (Dt = g('REQUIRED')),
          (Tt = w()),
          (tn = f('li')),
          (Sn = f('code')),
          (Lt = g('backgroundProps')),
          (Ot = g(' An object of props given to background component')),
          (zt = w()),
          (Oe = f('li')),
          (Pn = f('code')),
          (jt = g('foreground')),
          (Bt = g(' Either a markdown string or a foreground component ')),
          (Cn = f('strong')),
          (Gt = g('REQUIRED')),
          (Nt = w()),
          (an = f('li')),
          (In = f('code')),
          (Mt = g('foregroundProps')),
          (Rt = g(' An object of props given to foreground component')),
          (At = w()),
          (Dn = f('p')),
          (Tn = f('code')),
          (Ut = g('backgroundSize')),
          (Vt = w()),
          (Ln = f('ul')),
          (G = f('li')),
          (Ht = g(
            'Adjusts the size of the background graphic by passing a class name corresponding to one of our well widths: '
          )),
          (On = f('code')),
          (Ft = g('normal')),
          (qt = g(', ')),
          (zn = f('code')),
          (Qt = g('wide')),
          (Wt = g(', ')),
          (jn = f('code')),
          (Yt = g('wider')),
          (Jt = g(', ')),
          (Bn = f('code')),
          (Xt = g('widest')),
          (Zt = g(' or ')),
          (Gn = f('code')),
          (Kt = g('fluid')),
          (xt = g('.')),
          (As = w()),
          (ze = f('pre')),
          (Us = w()),
          O(fe.$$.fragment),
          (Vs = w()),
          (R = f('section')),
          (je = f('p')),
          (ea = g('Control the layout of your component with the ')),
          (Nn = f('code')),
          (na = g('foregroundPosition')),
          (sa = g(' prop.')),
          (ta = w()),
          (Mn = f('p')),
          (Rn = f('code')),
          (aa = g('foregroundPosition')),
          (oa = w()),
          (V = f('ul')),
          (Be = f('li')),
          (An = f('code')),
          (la = g('middle')),
          (ra = g(' Text and graphic middle ')),
          (Un = f('em')),
          (pa = g('default')),
          (ca = w()),
          (on = f('li')),
          (Vn = f('code')),
          (ia = g('left')),
          (ua = g(' Text to left, graphic stays middle')),
          (fa = w()),
          (ln = f('li')),
          (Hn = f('code')),
          (da = g('right')),
          (ka = g(' Text to right, graphic stays middle')),
          (ga = w()),
          (rn = f('li')),
          (Fn = f('code')),
          (ha = g('left opposite')),
          (ma = g(' Text to left, graphic to right')),
          (_a = w()),
          (pn = f('li')),
          (qn = f('code')),
          (va = g('right opposite')),
          (ba = g(' Text to right, graphic to left')),
          (ya = w()),
          (Qn = f('p')),
          (wa = g(
            'Both text and graphic will revert to the middle when the window drops below 1200px.'
          )),
          (Ea = w()),
          (q = f('p')),
          (Wn = f('strong')),
          ($a = g('Note:')),
          (Sa = g(' Make sure your ')),
          (Yn = f('code')),
          (Pa = g('backgroundSize')),
          (Ca = g(' prop is ')),
          (Jn = f('em')),
          (Ia = g('not')),
          (Da = g(' set to ')),
          (Xn = f('code')),
          (Ta = g('fluid')),
          (La = g(' if using either left or right opposite option.')),
          (Hs = w()),
          (Ge = f('pre')),
          (Fs = w()),
          O(de.$$.fragment),
          (qs = w()),
          (Q = f('section')),
          (Zn = f('p')),
          (Kn = f('code')),
          (Oa = g('stackBackground')),
          (za = w()),
          (le = f('ul')),
          (xn = f('li')),
          (ja = g(
            'Determines whether previous background step graphics will stack below current one.'
          )),
          (Ba = w()),
          (ke = f('li')),
          (es = f('code')),
          (Ga = g('true')),
          (Na = w()),
          (ns = f('em')),
          (Ma = g('default')),
          (Ra = g(
            ' Background graphics from previous steps will remain visible below active one, allowing you to stack graphics with transparent backgrounds.'
          )),
          (Aa = w()),
          (cn = f('li')),
          (ss = f('code')),
          (Ua = g('false')),
          (Va = g(
            ' Only the background graphic from the current step will show and backgrounds from previous steps are hidden.'
          )),
          (Ha = w()),
          (ts = f('p')),
          (as = f('code')),
          (Fa = g('preload')),
          (qa = w()),
          (re = f('ul')),
          (os = f('li')),
          (Qa = g(
            'Determines how many background steps to load before and after the currently active one. This prop basically lazyloads backgrounds, which is useful for making sure you\u2019re not loading too many images at once for long scrolls.'
          )),
          (Wa = w()),
          (Ne = f('li')),
          (Ya = g('Default is ')),
          (ls = f('code')),
          (Ja = g('1')),
          (Xa = g(
            ', which loads one background before and one after the currently active one.'
          )),
          (Za = w()),
          (un = f('li')),
          (rs = f('code')),
          (Ka = g('0')),
          (xa = g(' disables lazyloading and loads all backgrounds at once.')),
          (Qs = w()),
          (Me = f('pre')),
          (Ws = w()),
          O(ge.$$.fragment),
          (Ys = w()),
          (fn = f('section')),
          (X = f('p')),
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
          (Js = w()),
          (Re = f('pre')),
          (Xs = w()),
          O(he.$$.fragment),
          (Zs = w()),
          (me = f('section')),
          (Ae = f('p')),
          (ro = g('Add an ID to your scroller and use SCSS ')),
          (us = f('code')),
          (po = g(':global')),
          (co = g(' rules to override any styles.')),
          (io = w()),
          (_e = f('section')),
          (fs = f('p')),
          (uo = g(
            'This is the main way you should customise this component for any layouts not covered by the props we\u2019ve already mentioned. Most small layout shifts can be handled with simple SCSS. Check out the component in your browser\u2019s inspector to find which elements you want to target with custom styles.'
          )),
          (fo = w()),
          (Ue = f('p')),
          (ko = g(
            'If you\u2019re still struggling to make this component work for your design, it may be a good sign you should reach for '
          )),
          (Ve = f('a')),
          (go = g('svelte-scroller')),
          (ho = g(' instead.')),
          (Ks = w()),
          (He = f('pre')),
          (xs = w()),
          O(ve.$$.fragment),
          (et = w()),
          (be = f('section')),
          (pe = f('p')),
          (mo = g(
            'You can also use this component to layout an AI-based graphics scroller via an '
          )),
          (Fe = f('a')),
          (_o = g('ArchieML')),
          (vo = g(
            '-formatted Google doc by using the following pattern to dynamically import '
          )),
          (qe = f('a')),
          (bo = g('ai2svelte')),
          (yo = g(' components for the background:')),
          (wo = w()),
          (dn = f('section')),
          (Qe = f('p')),
          (Eo = g('If you\u2019re using the ')),
          (We = f('a')),
          ($o = g('graphics kit')),
          (So = g(
            ', this pattern is already wired up in the boilerplate included in the Page.svelte component. Free money!'
          )),
          (nt = w()),
          (Ye = f('pre')),
          (st = w()),
          (Je = f('pre')),
          (tt = w()),
          (ye = f('section')),
          (ce = f('p')),
          (Po = g(
            'This pattern comes with some restrictions, though. Be sure your '
          )),
          (ds = f('code')),
          (Co = g('fetchComponent')),
          (Io = g(' function follows ')),
          (Xe = f('a')),
          (Do = g('the limits on dynamic imports')),
          (To = g('.')),
          (Lo = w()),
          (W = f('p')),
          (ks = f('strong')),
          (Oo = g('NOTE')),
          (zo = g(': Make sure you wrap the function ')),
          (gs = f('code')),
          (jo = g('truthyString()')),
          (Bo = g(' around ')),
          (hs = f('code')),
          (Go = g('block.StackBackground')),
          (No = g('. ')),
          (ms = f('code')),
          (Mo = g('truthyString()')),
          (Ro =
            g(` converts the string pulled from Google docs (\u2018true\u2019, \u2018false\u2019, etc.)
into a Boolean.`)),
          (at = w()),
          (N = f('section')),
          (_s = f('h5')),
          (Ao = g('Tips')),
          (Uo = w()),
          (vs = f('p')),
          (Vo = g(
            'Each step needs its own .ai file unless you want to show the same graphic twice. The .ai file can be named anything \u2014 just make sure you add the correct file name, without the .ai extension, to the google doc.'
          )),
          (Ho = w()),
          (bs = f('p')),
          (Fo = g(
            'Tip: First, make one master .ai file that contains graphics for all steps. Put graphics for each step into its own layer, which you might name step-1, step-2, etc. When you are ready to export, create separate .ai files for each step by hiding all but one layer and choosing save as. This makes it easier to manage multiple files and make sure graphics in different steps are aligned.'
          )),
          (qo = w()),
          (ys = f('p')),
          (Qo = g('Example workflow:')),
          (Wo = w()),
          (ws = f('p')),
          (Yo = g(`Make maps-scroll-master.ai
Make graphics for each step and put them in separate layers: step-1, step-2, etc.
Once all graphics are ready, show just the step-1 layer and hide all others. Save the file as maps-scroll-1.ai, then run the ai2svelte script. In the google doc, set Background: maps-scroll-1 for step 1.
Do the same for all other layers`)),
          (ot = w()),
          O(we.$$.fragment),
          (lt = w()),
          (A = f('section')),
          (Es = f('p')),
          (Jo = g(
            'This component can also unravel the scrolling experience into a flat, linear layout. Use this when the graphic will be embedded in an iframe.'
          )),
          (Xo = w()),
          ($s = f('p')),
          (Ss = f('code')),
          (Zo = g('embedded')),
          (Ko = w()),
          (Ps = f('ul')),
          (Z = f('li')),
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
          (ll = w()),
          (Ts = f('p')),
          (Ls = f('code')),
          (rl = g('embeddedLayout')),
          (pl = w()),
          (Ze = f('ul')),
          (kn = f('li')),
          (Os = f('code')),
          (cl = g('fb')),
          (il = g(
            ' (default) will layout the foreground before the background in each step.'
          )),
          (ul = w()),
          (gn = f('li')),
          (zs = f('code')),
          (fl = g('bf')),
          (dl = g(' will lead with the background in each step.')),
          (rt = w()),
          (Ke = f('pre')),
          (pt = w()),
          O(Ee.$$.fragment),
          this.h();
      },
      l(i) {
        e = d(i, 'SECTION', {});
        var _ = k(e);
        n = d(_, 'H2', {});
        var js = k(n);
        (s = h(js, pp)), js.forEach(r), (t = E(_)), (c = d(_, 'P', {}));
        var Bs = k(c);
        (o = h(Bs, 'Easy scrollytelling.')),
          Bs.forEach(r),
          (u = E(_)),
          (l = d(_, 'SECTION', { class: !0 }));
        var Gs = k(l);
        m = d(Gs, 'P', {});
        var xe = k(m);
        (v = h(
          xe,
          'This component is designed to handle most common layouts for scrollytelling. If you need something more complex, though, you should use '
        )),
          (b = d(xe, 'A', { href: !0, rel: !0 }));
        var Ns = k(b);
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
          (yn = E(en)),
          (Te = d(en, 'EM', {}));
        var Ll = k(Te);
        (wn = h(Ll, 'an array of objects')),
          Ll.forEach(r),
          en.forEach(r),
          (T = E(_)),
          (J = d(_, 'UL', {}));
        var $e = k(J);
        Le = d($e, 'LI', {});
        var it = k(Le);
        En = d(it, 'CODE', {});
        var Ol = k(En);
        (Ct = h(Ol, 'background')),
          Ol.forEach(r),
          (It = h(it, ' A background component ')),
          ($n = d(it, 'STRONG', {}));
        var zl = k($n);
        (Dt = h(zl, 'REQUIRED')),
          zl.forEach(r),
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
          (zt = E($e)),
          (Oe = d($e, 'LI', {}));
        var ut = k(Oe);
        Pn = d(ut, 'CODE', {});
        var Bl = k(Pn);
        (jt = h(Bl, 'foreground')),
          Bl.forEach(r),
          (Bt = h(ut, ' Either a markdown string or a foreground component ')),
          (Cn = d(ut, 'STRONG', {}));
        var Gl = k(Cn);
        (Gt = h(Gl, 'REQUIRED')),
          Gl.forEach(r),
          ut.forEach(r),
          (Nt = E($e)),
          (an = d($e, 'LI', {}));
        var gl = k(an);
        In = d(gl, 'CODE', {});
        var Nl = k(In);
        (Mt = h(Nl, 'foregroundProps')),
          Nl.forEach(r),
          (Rt = h(gl, ' An object of props given to foreground component')),
          gl.forEach(r),
          $e.forEach(r),
          (At = E(_)),
          (Dn = d(_, 'P', {}));
        var Ml = k(Dn);
        Tn = d(Ml, 'CODE', {});
        var Rl = k(Tn);
        (Ut = h(Rl, 'backgroundSize')),
          Rl.forEach(r),
          Ml.forEach(r),
          (Vt = E(_)),
          (Ln = d(_, 'UL', {}));
        var Al = k(Ln);
        G = d(Al, 'LI', {});
        var Y = k(G);
        (Ht = h(
          Y,
          'Adjusts the size of the background graphic by passing a class name corresponding to one of our well widths: '
        )),
          (On = d(Y, 'CODE', {}));
        var Ul = k(On);
        (Ft = h(Ul, 'normal')),
          Ul.forEach(r),
          (qt = h(Y, ', ')),
          (zn = d(Y, 'CODE', {}));
        var Vl = k(zn);
        (Qt = h(Vl, 'wide')),
          Vl.forEach(r),
          (Wt = h(Y, ', ')),
          (jn = d(Y, 'CODE', {}));
        var Hl = k(jn);
        (Yt = h(Hl, 'wider')),
          Hl.forEach(r),
          (Jt = h(Y, ', ')),
          (Bn = d(Y, 'CODE', {}));
        var Fl = k(Bn);
        (Xt = h(Fl, 'widest')),
          Fl.forEach(r),
          (Zt = h(Y, ' or ')),
          (Gn = d(Y, 'CODE', {}));
        var ql = k(Gn);
        (Kt = h(ql, 'fluid')),
          ql.forEach(r),
          (xt = h(Y, '.')),
          Y.forEach(r),
          Al.forEach(r),
          _.forEach(r),
          (As = E(i)),
          (ze = d(i, 'PRE', { class: !0 }));
        var yp = k(ze);
        yp.forEach(r),
          (Us = E(i)),
          j(fe.$$.fragment, i),
          (Vs = E(i)),
          (R = d(i, 'SECTION', {}));
        var K = k(R);
        je = d(K, 'P', {});
        var ft = k(je);
        (ea = h(ft, 'Control the layout of your component with the ')),
          (Nn = d(ft, 'CODE', {}));
        var Ql = k(Nn);
        (na = h(Ql, 'foregroundPosition')),
          Ql.forEach(r),
          (sa = h(ft, ' prop.')),
          ft.forEach(r),
          (ta = E(K)),
          (Mn = d(K, 'P', {}));
        var Wl = k(Mn);
        Rn = d(Wl, 'CODE', {});
        var Yl = k(Rn);
        (aa = h(Yl, 'foregroundPosition')),
          Yl.forEach(r),
          Wl.forEach(r),
          (oa = E(K)),
          (V = d(K, 'UL', {}));
        var x = k(V);
        Be = d(x, 'LI', {});
        var dt = k(Be);
        An = d(dt, 'CODE', {});
        var Jl = k(An);
        (la = h(Jl, 'middle')),
          Jl.forEach(r),
          (ra = h(dt, ' Text and graphic middle ')),
          (Un = d(dt, 'EM', {}));
        var Xl = k(Un);
        (pa = h(Xl, 'default')),
          Xl.forEach(r),
          dt.forEach(r),
          (ca = E(x)),
          (on = d(x, 'LI', {}));
        var hl = k(on);
        Vn = d(hl, 'CODE', {});
        var Zl = k(Vn);
        (ia = h(Zl, 'left')),
          Zl.forEach(r),
          (ua = h(hl, ' Text to left, graphic stays middle')),
          hl.forEach(r),
          (fa = E(x)),
          (ln = d(x, 'LI', {}));
        var ml = k(ln);
        Hn = d(ml, 'CODE', {});
        var Kl = k(Hn);
        (da = h(Kl, 'right')),
          Kl.forEach(r),
          (ka = h(ml, ' Text to right, graphic stays middle')),
          ml.forEach(r),
          (ga = E(x)),
          (rn = d(x, 'LI', {}));
        var _l = k(rn);
        Fn = d(_l, 'CODE', {});
        var xl = k(Fn);
        (ha = h(xl, 'left opposite')),
          xl.forEach(r),
          (ma = h(_l, ' Text to left, graphic to right')),
          _l.forEach(r),
          (_a = E(x)),
          (pn = d(x, 'LI', {}));
        var vl = k(pn);
        qn = d(vl, 'CODE', {});
        var er = k(qn);
        (va = h(er, 'right opposite')),
          er.forEach(r),
          (ba = h(vl, ' Text to right, graphic to left')),
          vl.forEach(r),
          x.forEach(r),
          (ya = E(K)),
          (Qn = d(K, 'P', {}));
        var nr = k(Qn);
        (wa = h(
          nr,
          'Both text and graphic will revert to the middle when the window drops below 1200px.'
        )),
          nr.forEach(r),
          (Ea = E(K)),
          (q = d(K, 'P', {}));
        var ie = k(q);
        Wn = d(ie, 'STRONG', {});
        var sr = k(Wn);
        ($a = h(sr, 'Note:')),
          sr.forEach(r),
          (Sa = h(ie, ' Make sure your ')),
          (Yn = d(ie, 'CODE', {}));
        var tr = k(Yn);
        (Pa = h(tr, 'backgroundSize')),
          tr.forEach(r),
          (Ca = h(ie, ' prop is ')),
          (Jn = d(ie, 'EM', {}));
        var ar = k(Jn);
        (Ia = h(ar, 'not')),
          ar.forEach(r),
          (Da = h(ie, ' set to ')),
          (Xn = d(ie, 'CODE', {}));
        var or = k(Xn);
        (Ta = h(or, 'fluid')),
          or.forEach(r),
          (La = h(ie, ' if using either left or right opposite option.')),
          ie.forEach(r),
          K.forEach(r),
          (Hs = E(i)),
          (Ge = d(i, 'PRE', { class: !0 }));
        var wp = k(Ge);
        wp.forEach(r),
          (Fs = E(i)),
          j(de.$$.fragment, i),
          (qs = E(i)),
          (Q = d(i, 'SECTION', {}));
        var Se = k(Q);
        Zn = d(Se, 'P', {});
        var lr = k(Zn);
        Kn = d(lr, 'CODE', {});
        var rr = k(Kn);
        (Oa = h(rr, 'stackBackground')),
          rr.forEach(r),
          lr.forEach(r),
          (za = E(Se)),
          (le = d(Se, 'UL', {}));
        var hn = k(le);
        xn = d(hn, 'LI', {});
        var pr = k(xn);
        (ja = h(
          pr,
          'Determines whether previous background step graphics will stack below current one.'
        )),
          pr.forEach(r),
          (Ba = E(hn)),
          (ke = d(hn, 'LI', {}));
        var Rs = k(ke);
        es = d(Rs, 'CODE', {});
        var cr = k(es);
        (Ga = h(cr, 'true')),
          cr.forEach(r),
          (Na = E(Rs)),
          (ns = d(Rs, 'EM', {}));
        var ir = k(ns);
        (Ma = h(ir, 'default')),
          ir.forEach(r),
          (Ra = h(
            Rs,
            ' Background graphics from previous steps will remain visible below active one, allowing you to stack graphics with transparent backgrounds.'
          )),
          Rs.forEach(r),
          (Aa = E(hn)),
          (cn = d(hn, 'LI', {}));
        var bl = k(cn);
        ss = d(bl, 'CODE', {});
        var ur = k(ss);
        (Ua = h(ur, 'false')),
          ur.forEach(r),
          (Va = h(
            bl,
            ' Only the background graphic from the current step will show and backgrounds from previous steps are hidden.'
          )),
          bl.forEach(r),
          hn.forEach(r),
          (Ha = E(Se)),
          (ts = d(Se, 'P', {}));
        var fr = k(ts);
        as = d(fr, 'CODE', {});
        var dr = k(as);
        (Fa = h(dr, 'preload')),
          dr.forEach(r),
          fr.forEach(r),
          (qa = E(Se)),
          (re = d(Se, 'UL', {}));
        var mn = k(re);
        os = d(mn, 'LI', {});
        var kr = k(os);
        (Qa = h(
          kr,
          'Determines how many background steps to load before and after the currently active one. This prop basically lazyloads backgrounds, which is useful for making sure you\u2019re not loading too many images at once for long scrolls.'
        )),
          kr.forEach(r),
          (Wa = E(mn)),
          (Ne = d(mn, 'LI', {}));
        var kt = k(Ne);
        (Ya = h(kt, 'Default is ')), (ls = d(kt, 'CODE', {}));
        var gr = k(ls);
        (Ja = h(gr, '1')),
          gr.forEach(r),
          (Xa = h(
            kt,
            ', which loads one background before and one after the currently active one.'
          )),
          kt.forEach(r),
          (Za = E(mn)),
          (un = d(mn, 'LI', {}));
        var yl = k(un);
        rs = d(yl, 'CODE', {});
        var hr = k(rs);
        (Ka = h(hr, '0')),
          hr.forEach(r),
          (xa = h(
            yl,
            ' disables lazyloading and loads all backgrounds at once.'
          )),
          yl.forEach(r),
          mn.forEach(r),
          Se.forEach(r),
          (Qs = E(i)),
          (Me = d(i, 'PRE', { class: !0 }));
        var Ep = k(Me);
        Ep.forEach(r),
          (Ws = E(i)),
          j(ge.$$.fragment, i),
          (Ys = E(i)),
          (fn = d(i, 'SECTION', {}));
        var mr = k(fn);
        X = d(mr, 'P', {});
        var Pe = k(X);
        (eo = h(Pe, 'Pass a component to ')), (ps = d(Pe, 'CODE', {}));
        var _r = k(ps);
        (no = h(_r, 'foreground')),
          _r.forEach(r),
          (so = h(Pe, ' and use ')),
          (cs = d(Pe, 'CODE', {}));
        var vr = k(cs);
        (to = h(vr, 'backgroundProps')),
          vr.forEach(r),
          (ao = h(Pe, ' and ')),
          (is = d(Pe, 'CODE', {}));
        var br = k(is);
        (oo = h(br, 'foregroundProps')),
          br.forEach(r),
          (lo = h(Pe, ' to pass data to your components.')),
          Pe.forEach(r),
          mr.forEach(r),
          (Js = E(i)),
          (Re = d(i, 'PRE', { class: !0 }));
        var $p = k(Re);
        $p.forEach(r),
          (Xs = E(i)),
          j(he.$$.fragment, i),
          (Zs = E(i)),
          (me = d(i, 'SECTION', {}));
        var gt = k(me);
        Ae = d(gt, 'P', {});
        var ht = k(Ae);
        (ro = h(ht, 'Add an ID to your scroller and use SCSS ')),
          (us = d(ht, 'CODE', {}));
        var yr = k(us);
        (po = h(yr, ':global')),
          yr.forEach(r),
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
        var Er = k(Ve);
        (go = h(Er, 'svelte-scroller')),
          Er.forEach(r),
          (ho = h(_t, ' instead.')),
          _t.forEach(r),
          mt.forEach(r),
          gt.forEach(r),
          (Ks = E(i)),
          (He = d(i, 'PRE', { class: !0 }));
        var Sp = k(He);
        Sp.forEach(r),
          (xs = E(i)),
          j(ve.$$.fragment, i),
          (et = E(i)),
          (be = d(i, 'SECTION', {}));
        var vt = k(be);
        pe = d(vt, 'P', {});
        var _n = k(pe);
        (mo = h(
          _n,
          'You can also use this component to layout an AI-based graphics scroller via an '
        )),
          (Fe = d(_n, 'A', { href: !0, rel: !0 }));
        var $r = k(Fe);
        (_o = h($r, 'ArchieML')),
          $r.forEach(r),
          (vo = h(
            _n,
            '-formatted Google doc by using the following pattern to dynamically import '
          )),
          (qe = d(_n, 'A', { href: !0, rel: !0 }));
        var Sr = k(qe);
        (bo = h(Sr, 'ai2svelte')),
          Sr.forEach(r),
          (yo = h(_n, ' components for the background:')),
          _n.forEach(r),
          (wo = E(vt)),
          (dn = d(vt, 'SECTION', { class: !0 }));
        var Pr = k(dn);
        Qe = d(Pr, 'P', {});
        var bt = k(Qe);
        (Eo = h(bt, 'If you\u2019re using the ')),
          (We = d(bt, 'A', { href: !0, rel: !0 }));
        var Cr = k(We);
        ($o = h(Cr, 'graphics kit')),
          Cr.forEach(r),
          (So = h(
            bt,
            ', this pattern is already wired up in the boilerplate included in the Page.svelte component. Free money!'
          )),
          bt.forEach(r),
          Pr.forEach(r),
          vt.forEach(r),
          (nt = E(i)),
          (Ye = d(i, 'PRE', { class: !0 }));
        var Pp = k(Ye);
        Pp.forEach(r), (st = E(i)), (Je = d(i, 'PRE', { class: !0 }));
        var Cp = k(Je);
        Cp.forEach(r), (tt = E(i)), (ye = d(i, 'SECTION', {}));
        var yt = k(ye);
        ce = d(yt, 'P', {});
        var vn = k(ce);
        (Po = h(
          vn,
          'This pattern comes with some restrictions, though. Be sure your '
        )),
          (ds = d(vn, 'CODE', {}));
        var Ir = k(ds);
        (Co = h(Ir, 'fetchComponent')),
          Ir.forEach(r),
          (Io = h(vn, ' function follows ')),
          (Xe = d(vn, 'A', { href: !0, rel: !0 }));
        var Dr = k(Xe);
        (Do = h(Dr, 'the limits on dynamic imports')),
          Dr.forEach(r),
          (To = h(vn, '.')),
          vn.forEach(r),
          (Lo = E(yt)),
          (W = d(yt, 'P', {}));
        var ue = k(W);
        ks = d(ue, 'STRONG', {});
        var Tr = k(ks);
        (Oo = h(Tr, 'NOTE')),
          Tr.forEach(r),
          (zo = h(ue, ': Make sure you wrap the function ')),
          (gs = d(ue, 'CODE', {}));
        var Lr = k(gs);
        (jo = h(Lr, 'truthyString()')),
          Lr.forEach(r),
          (Bo = h(ue, ' around ')),
          (hs = d(ue, 'CODE', {}));
        var Or = k(hs);
        (Go = h(Or, 'block.StackBackground')),
          Or.forEach(r),
          (No = h(ue, '. ')),
          (ms = d(ue, 'CODE', {}));
        var zr = k(ms);
        (Mo = h(zr, 'truthyString()')),
          zr.forEach(r),
          (Ro = h(
            ue,
            ` converts the string pulled from Google docs (\u2018true\u2019, \u2018false\u2019, etc.)
into a Boolean.`
          )),
          ue.forEach(r),
          yt.forEach(r),
          (at = E(i)),
          (N = d(i, 'SECTION', { class: !0 }));
        var ee = k(N);
        _s = d(ee, 'H5', {});
        var jr = k(_s);
        (Ao = h(jr, 'Tips')),
          jr.forEach(r),
          (Uo = E(ee)),
          (vs = d(ee, 'P', {}));
        var Br = k(vs);
        (Vo = h(
          Br,
          'Each step needs its own .ai file unless you want to show the same graphic twice. The .ai file can be named anything \u2014 just make sure you add the correct file name, without the .ai extension, to the google doc.'
        )),
          Br.forEach(r),
          (Ho = E(ee)),
          (bs = d(ee, 'P', {}));
        var Gr = k(bs);
        (Fo = h(
          Gr,
          'Tip: First, make one master .ai file that contains graphics for all steps. Put graphics for each step into its own layer, which you might name step-1, step-2, etc. When you are ready to export, create separate .ai files for each step by hiding all but one layer and choosing save as. This makes it easier to manage multiple files and make sure graphics in different steps are aligned.'
        )),
          Gr.forEach(r),
          (qo = E(ee)),
          (ys = d(ee, 'P', {}));
        var Nr = k(ys);
        (Qo = h(Nr, 'Example workflow:')),
          Nr.forEach(r),
          (Wo = E(ee)),
          (ws = d(ee, 'P', {}));
        var Mr = k(ws);
        (Yo = h(
          Mr,
          `Make maps-scroll-master.ai
Make graphics for each step and put them in separate layers: step-1, step-2, etc.
Once all graphics are ready, show just the step-1 layer and hide all others. Save the file as maps-scroll-1.ai, then run the ai2svelte script. In the google doc, set Background: maps-scroll-1 for step 1.
Do the same for all other layers`
        )),
          Mr.forEach(r),
          ee.forEach(r),
          (ot = E(i)),
          j(we.$$.fragment, i),
          (lt = E(i)),
          (A = d(i, 'SECTION', {}));
        var ne = k(A);
        Es = d(ne, 'P', {});
        var Rr = k(Es);
        (Jo = h(
          Rr,
          'This component can also unravel the scrolling experience into a flat, linear layout. Use this when the graphic will be embedded in an iframe.'
        )),
          Rr.forEach(r),
          (Xo = E(ne)),
          ($s = d(ne, 'P', {}));
        var Ar = k($s);
        Ss = d(Ar, 'CODE', {});
        var Ur = k(Ss);
        (Zo = h(Ur, 'embedded')),
          Ur.forEach(r),
          Ar.forEach(r),
          (Ko = E(ne)),
          (Ps = d(ne, 'UL', {}));
        var Vr = k(Ps);
        Z = d(Vr, 'LI', {});
        var Ce = k(Z);
        (xo = h(Ce, 'Setting to ')), (Cs = d(Ce, 'CODE', {}));
        var Hr = k(Cs);
        (el = h(Hr, 'true')),
          Hr.forEach(r),
          (nl = h(
            Ce,
            ' will unroll the scroll experience into a flat layout. '
          )),
          (Is = d(Ce, 'CODE', {}));
        var Fr = k(Is);
        (sl = h(Fr, 'true')),
          Fr.forEach(r),
          (tl = h(Ce, ' will also cause the ')),
          (Ds = d(Ce, 'CODE', {}));
        var qr = k(Ds);
        (al = h(qr, 'foregroundPosition')),
          qr.forEach(r),
          (ol = h(
            Ce,
            ' prop to be ignored. (Use global SCSS to adjust the style of foreground text.)'
          )),
          Ce.forEach(r),
          Vr.forEach(r),
          (ll = E(ne)),
          (Ts = d(ne, 'P', {}));
        var Qr = k(Ts);
        Ls = d(Qr, 'CODE', {});
        var Wr = k(Ls);
        (rl = h(Wr, 'embeddedLayout')),
          Wr.forEach(r),
          Qr.forEach(r),
          (pl = E(ne)),
          (Ze = d(ne, 'UL', {}));
        var wt = k(Ze);
        kn = d(wt, 'LI', {});
        var wl = k(kn);
        Os = d(wl, 'CODE', {});
        var Yr = k(Os);
        (cl = h(Yr, 'fb')),
          Yr.forEach(r),
          (il = h(
            wl,
            ' (default) will layout the foreground before the background in each step.'
          )),
          wl.forEach(r),
          (ul = E(wt)),
          (gn = d(wt, 'LI', {}));
        var El = k(gn);
        zs = d(El, 'CODE', {});
        var Jr = k(zs);
        (fl = h(Jr, 'bf')),
          Jr.forEach(r),
          (dl = h(El, ' will lead with the background in each step.')),
          El.forEach(r),
          wt.forEach(r),
          ne.forEach(r),
          (rt = E(i)),
          (Ke = d(i, 'PRE', { class: !0 }));
        var Ip = k(Ke);
        Ip.forEach(r), (pt = E(i)), j(Ee.$$.fragment, i), this.h();
      },
      h() {
        $(b, 'href', 'https://github.com/sveltejs/svelte-scroller'),
          $(b, 'rel', 'nofollow'),
          $(l, 'class', 'note'),
          $(ze, 'class', 'language-svelte'),
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
            We,
            'href',
            'https://github.com/reuters-graphics/bluprint_graphics-kit'
          ),
          $(We, 'rel', 'nofollow'),
          $(dn, 'class', 'note'),
          $(Ye, 'class', 'language-bash'),
          $(Je, 'class', 'language-svelte'),
          $(
            Xe,
            'href',
            'https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations'
          ),
          $(Xe, 'rel', 'nofollow'),
          $(N, 'class', 'note'),
          $(Ke, 'class', 'language-svelte');
      },
      m(i, _) {
        y(i, e, _),
          a(e, n),
          a(n, s),
          a(e, t),
          a(e, c),
          a(c, o),
          a(e, u),
          a(e, l),
          a(l, m),
          a(m, v),
          a(m, b),
          a(b, S),
          a(m, D),
          a(e, U),
          a(e, M),
          a(M, oe),
          a(oe, De),
          a(M, yn),
          a(M, Te),
          a(Te, wn),
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
          a(J, zt),
          a(J, Oe),
          a(Oe, Pn),
          a(Pn, jt),
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
          a(G, zn),
          a(zn, Qt),
          a(G, Wt),
          a(G, jn),
          a(jn, Yt),
          a(G, Jt),
          a(G, Bn),
          a(Bn, Xt),
          a(G, Zt),
          a(G, Gn),
          a(Gn, Kt),
          a(G, xt),
          y(i, As, _),
          y(i, ze, _),
          (ze.innerHTML = dp),
          y(i, Us, _),
          z(fe, i, _),
          y(i, Vs, _),
          y(i, R, _),
          a(R, je),
          a(je, ea),
          a(je, Nn),
          a(Nn, na),
          a(je, sa),
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
          a(qn, va),
          a(pn, ba),
          a(R, ya),
          a(R, Qn),
          a(Qn, wa),
          a(R, Ea),
          a(R, q),
          a(q, Wn),
          a(Wn, $a),
          a(q, Sa),
          a(q, Yn),
          a(Yn, Pa),
          a(q, Ca),
          a(q, Jn),
          a(Jn, Ia),
          a(q, Da),
          a(q, Xn),
          a(Xn, Ta),
          a(q, La),
          y(i, Hs, _),
          y(i, Ge, _),
          (Ge.innerHTML = kp),
          y(i, Fs, _),
          z(de, i, _),
          y(i, qs, _),
          y(i, Q, _),
          a(Q, Zn),
          a(Zn, Kn),
          a(Kn, Oa),
          a(Q, za),
          a(Q, le),
          a(le, xn),
          a(xn, ja),
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
          a(re, Wa),
          a(re, Ne),
          a(Ne, Ya),
          a(Ne, ls),
          a(ls, Ja),
          a(Ne, Xa),
          a(re, Za),
          a(re, un),
          a(un, rs),
          a(rs, Ka),
          a(un, xa),
          y(i, Qs, _),
          y(i, Me, _),
          (Me.innerHTML = gp),
          y(i, Ws, _),
          z(ge, i, _),
          y(i, Ys, _),
          y(i, fn, _),
          a(fn, X),
          a(X, eo),
          a(X, ps),
          a(ps, no),
          a(X, so),
          a(X, cs),
          a(cs, to),
          a(X, ao),
          a(X, is),
          a(is, oo),
          a(X, lo),
          y(i, Js, _),
          y(i, Re, _),
          (Re.innerHTML = hp),
          y(i, Xs, _),
          z(he, i, _),
          y(i, Zs, _),
          y(i, me, _),
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
          y(i, Ks, _),
          y(i, He, _),
          (He.innerHTML = mp),
          y(i, xs, _),
          z(ve, i, _),
          y(i, et, _),
          y(i, be, _),
          a(be, pe),
          a(pe, mo),
          a(pe, Fe),
          a(Fe, _o),
          a(pe, vo),
          a(pe, qe),
          a(qe, bo),
          a(pe, yo),
          a(be, wo),
          a(be, dn),
          a(dn, Qe),
          a(Qe, Eo),
          a(Qe, We),
          a(We, $o),
          a(Qe, So),
          y(i, nt, _),
          y(i, Ye, _),
          (Ye.innerHTML = _p),
          y(i, st, _),
          y(i, Je, _),
          (Je.innerHTML = vp),
          y(i, tt, _),
          y(i, ye, _),
          a(ye, ce),
          a(ce, Po),
          a(ce, ds),
          a(ds, Co),
          a(ce, Io),
          a(ce, Xe),
          a(Xe, Do),
          a(ce, To),
          a(ye, Lo),
          a(ye, W),
          a(W, ks),
          a(ks, Oo),
          a(W, zo),
          a(W, gs),
          a(gs, jo),
          a(W, Bo),
          a(W, hs),
          a(hs, Go),
          a(W, No),
          a(W, ms),
          a(ms, Mo),
          a(W, Ro),
          y(i, at, _),
          y(i, N, _),
          a(N, _s),
          a(_s, Ao),
          a(N, Uo),
          a(N, vs),
          a(vs, Vo),
          a(N, Ho),
          a(N, bs),
          a(bs, Fo),
          a(N, qo),
          a(N, ys),
          a(ys, Qo),
          a(N, Wo),
          a(N, ws),
          a(ws, Yo),
          y(i, ot, _),
          z(we, i, _),
          y(i, lt, _),
          y(i, A, _),
          a(A, Es),
          a(Es, Jo),
          a(A, Xo),
          a(A, $s),
          a($s, Ss),
          a(Ss, Zo),
          a(A, Ko),
          a(A, Ps),
          a(Ps, Z),
          a(Z, xo),
          a(Z, Cs),
          a(Cs, el),
          a(Z, nl),
          a(Z, Is),
          a(Is, sl),
          a(Z, tl),
          a(Z, Ds),
          a(Ds, al),
          a(Z, ol),
          a(A, ll),
          a(A, Ts),
          a(Ts, Ls),
          a(Ls, rl),
          a(A, pl),
          a(A, Ze),
          a(Ze, kn),
          a(kn, Os),
          a(Os, cl),
          a(kn, il),
          a(Ze, ul),
          a(Ze, gn),
          a(gn, zs),
          a(zs, fl),
          a(gn, dl),
          y(i, rt, _),
          y(i, Ke, _),
          (Ke.innerHTML = bp),
          y(i, pt, _),
          z(Ee, i, _),
          (ct = !0);
      },
      p(i, [_]) {
        const js = {};
        _ & 128 && (js.$$scope = { dirty: _, ctx: i }), fe.$set(js);
        const Bs = {};
        _ & 128 && (Bs.$$scope = { dirty: _, ctx: i }), de.$set(Bs);
        const Gs = {};
        _ & 128 && (Gs.$$scope = { dirty: _, ctx: i }), ge.$set(Gs);
        const xe = {};
        _ & 128 && (xe.$$scope = { dirty: _, ctx: i }), he.$set(xe);
        const Ns = {};
        _ & 128 && (Ns.$$scope = { dirty: _, ctx: i }), ve.$set(Ns);
        const en = {};
        _ & 128 && (en.$$scope = { dirty: _, ctx: i }), we.$set(en);
        const Ms = {};
        _ & 128 && (Ms.$$scope = { dirty: _, ctx: i }), Ee.$set(Ms);
      },
      i(i) {
        ct ||
          (P(fe.$$.fragment, i),
          P(de.$$.fragment, i),
          P(ge.$$.fragment, i),
          P(he.$$.fragment, i),
          P(ve.$$.fragment, i),
          P(we.$$.fragment, i),
          P(Ee.$$.fragment, i),
          (ct = !0));
      },
      o(i) {
        C(fe.$$.fragment, i),
          C(de.$$.fragment, i),
          C(ge.$$.fragment, i),
          C(he.$$.fragment, i),
          C(ve.$$.fragment, i),
          C(we.$$.fragment, i),
          C(Ee.$$.fragment, i),
          (ct = !1);
      },
      d(i) {
        i && r(e),
          i && r(As),
          i && r(ze),
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
          i && r(Ws),
          L(ge, i),
          i && r(Ys),
          i && r(fn),
          i && r(Js),
          i && r(Re),
          i && r(Xs),
          L(he, i),
          i && r(Zs),
          i && r(me),
          i && r(Ks),
          i && r(He),
          i && r(xs),
          L(ve, i),
          i && r(et),
          i && r(be),
          i && r(nt),
          i && r(Ye),
          i && r(st),
          i && r(Je),
          i && r(tt),
          i && r(ye),
          i && r(at),
          i && r(N),
          i && r(ot),
          L(we, i),
          i && r(lt),
          i && r(A),
          i && r(rt),
          i && r(Ke),
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
  { title: pp, description: Vc, slug: Hc } = jc;
function Bc(p) {
  const e = [
      {
        background: bn,
        backgroundProps: { colour: 'red' },
        foreground: `#### Step 1

Lorem ipsum red`,
      },
      {
        background: bn,
        backgroundProps: { colour: 'blue' },
        foreground: `#### Step 2

Lorem ipsum blue`,
      },
      {
        background: bn,
        backgroundProps: { colour: 'green' },
        foreground: `#### Step 3

Lorem ipsum green`,
      },
    ],
    n = [
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
    s = [
      { background: bn, backgroundProps: { colour: 'red' }, foreground: rp },
      {
        background: bn,
        backgroundProps: { colour: 'blue' },
        foreground: `#### Step 2

Lorem ipsum blue`,
      },
      {
        background: bn,
        backgroundProps: { colour: 'green' },
        foreground: rp,
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
    c = (u) =>
      $l(this, null, function* () {
        return (yield vc(`./demos/ai2html/${u}.exclude.svelte`)).default;
      });
  return [
    e,
    n,
    s,
    t,
    (u) =>
      $l(this, null, function* () {
        const l = [];
        for (const m of u) {
          const v = yield c(m.background);
          l.push(xr(Kr({}, m), { background: v }));
        }
        return l;
      }),
  ];
}
class Fc extends se {
  constructor(e) {
    super(), te(this, e, Bc, zc, ae, {});
  }
}
export { Fc as default, jc as metadata };
