var Up = Object.defineProperty,
  Vp = Object.defineProperties;
var Hp = Object.getOwnPropertyDescriptors;
var rp = Object.getOwnPropertySymbols;
var Fp = Object.prototype.hasOwnProperty,
  qp = Object.prototype.propertyIsEnumerable;
var cp = (p, n, e) =>
    n in p
      ? Up(p, n, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (p[n] = e),
  ip = (p, n) => {
    for (var e in n || (n = {})) Fp.call(n, e) && cp(p, e, n[e]);
    if (rp) for (var e of rp(n)) qp.call(n, e) && cp(p, e, n[e]);
    return p;
  },
  up = (p, n) => Vp(p, Hp(n));
import { _ as qo } from './preload-helper-438f94a3.js';
import {
  S as x,
  i as nn,
  s as sn,
  l as B,
  f as b,
  x as P,
  e as f,
  k as E,
  c as d,
  a as k,
  n as $,
  d as r,
  b as y,
  Y as $n,
  H as a,
  p as rt,
  q as ct,
  r as V,
  u as C,
  v as O,
  w as H,
  j as T,
  o as j,
  L as Qo,
  B as it,
  m as z,
  I,
  aa as ut,
  O as Qp,
  Q as Yp,
  ac as Jp,
  a9 as Yo,
  ad as Jo,
  ae as Ko,
  t as m,
  g as h,
  V as Kp,
  h as Wp,
  a1 as fp,
  a2 as dp,
} from './vendor-a3a8e12b.js';
import { D as Xn } from './index-95908c5c.js';
import './@component-docs_components-86850067.js';
import './paths-6758d194.js';
function kp(p, n, e) {
  const s = p.slice();
  return (s[4] = n[e]), (s[6] = e), s;
}
function gp(p) {
  let n, e, s, t;
  const c = [p[4].backgroundProps || {}];
  var o = p[4].background;
  function i(l) {
    let g = {};
    for (let v = 0; v < c.length; v += 1) g = it(g, c[v]);
    return { props: g };
  }
  return (
    o && (e = new o(i())),
    {
      c() {
        (n = f('div')), e && T(e.$$.fragment), (s = E()), this.h();
      },
      l(l) {
        n = d(l, 'DIV', { class: !0 });
        var g = k(n);
        e && z(e.$$.fragment, g), (s = $(g)), g.forEach(r), this.h();
      },
      h() {
        y(n, 'class', 'step-background step-' + (p[6] + 1) + ' svelte-va4hxg'),
          $n(n, 'visible', p[3] ? p[6] <= p[0] : p[6] === p[0]),
          $n(n, 'hidden', p[3] ? p[6] > p[0] : p[6] !== p[0]);
      },
      m(l, g) {
        b(l, n, g), e && j(e, n, null), a(n, s), (t = !0);
      },
      p(l, g) {
        const v = g & 2 ? rt(c, [ct(l[4].backgroundProps || {})]) : {};
        if (o !== (o = l[4].background)) {
          if (e) {
            V();
            const w = e;
            C(w.$$.fragment, 1, 0, () => {
              O(w, 1);
            }),
              H();
          }
          o
            ? ((e = new o(i())),
              T(e.$$.fragment),
              P(e.$$.fragment, 1),
              j(e, n, s))
            : (e = null);
        } else o && e.$set(v);
        g & 9 && $n(n, 'visible', l[3] ? l[6] <= l[0] : l[6] === l[0]),
          g & 9 && $n(n, 'hidden', l[3] ? l[6] > l[0] : l[6] !== l[0]);
      },
      i(l) {
        t || (e && P(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        e && C(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && r(n), e && O(e);
      },
    }
  );
}
function mp(p) {
  let n,
    e,
    s = (p[2] === 0 || (p[6] >= p[0] - p[2] && p[6] <= p[0] + p[2])) && gp(p);
  return {
    c() {
      s && s.c(), (n = B());
    },
    l(t) {
      s && s.l(t), (n = B());
    },
    m(t, c) {
      s && s.m(t, c), b(t, n, c), (e = !0);
    },
    p(t, c) {
      t[2] === 0 || (t[6] >= t[0] - t[2] && t[6] <= t[0] + t[2])
        ? s
          ? (s.p(t, c), c & 5 && P(s, 1))
          : ((s = gp(t)), s.c(), P(s, 1), s.m(n.parentNode, n))
        : s &&
          (V(),
          C(s, 1, 1, () => {
            s = null;
          }),
          H());
    },
    i(t) {
      e || (P(s), (e = !0));
    },
    o(t) {
      C(s), (e = !1);
    },
    d(t) {
      s && s.d(t), t && r(n);
    },
  };
}
function Xp(p) {
  let n,
    e,
    s = p[1],
    t = [];
  for (let o = 0; o < s.length; o += 1) t[o] = mp(kp(p, s, o));
  const c = (o) =>
    C(t[o], 1, 1, () => {
      t[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < t.length; o += 1) t[o].c();
      n = B();
    },
    l(o) {
      for (let i = 0; i < t.length; i += 1) t[i].l(o);
      n = B();
    },
    m(o, i) {
      for (let l = 0; l < t.length; l += 1) t[l].m(o, i);
      b(o, n, i), (e = !0);
    },
    p(o, [i]) {
      if (i & 15) {
        s = o[1];
        let l;
        for (l = 0; l < s.length; l += 1) {
          const g = kp(o, s, l);
          t[l]
            ? (t[l].p(g, i), P(t[l], 1))
            : ((t[l] = mp(g)), t[l].c(), P(t[l], 1), t[l].m(n.parentNode, n));
        }
        for (V(), l = s.length; l < t.length; l += 1) c(l);
        H();
      }
    },
    i(o) {
      if (!e) {
        for (let i = 0; i < s.length; i += 1) P(t[i]);
        e = !0;
      }
    },
    o(o) {
      t = t.filter(Boolean);
      for (let i = 0; i < t.length; i += 1) C(t[i]);
      e = !1;
    },
    d(o) {
      Qo(t, o), o && r(n);
    },
  };
}
function Zp(p, n, e) {
  let { index: s } = n,
    { steps: t = [] } = n,
    { preload: c = 1 } = n,
    { stackBackground: o = !0 } = n;
  return (
    (p.$$set = (i) => {
      'index' in i && e(0, (s = i.index)),
        'steps' in i && e(1, (t = i.steps)),
        'preload' in i && e(2, (c = i.preload)),
        'stackBackground' in i && e(3, (o = i.stackBackground));
    }),
    [s, t, c, o]
  );
}
class xp extends x {
  constructor(n) {
    super();
    nn(this, n, Zp, Xp, sn, {
      index: 0,
      steps: 1,
      preload: 2,
      stackBackground: 3,
    });
  }
}
function hp(p, n, e) {
  const s = p.slice();
  return (s[1] = n[e]), (s[3] = e), s;
}
function nr(p) {
  let n, e, s, t;
  const c = [tr, er],
    o = [];
  function i(l, g) {
    return typeof l[1].foreground == 'string' ? 0 : 1;
  }
  return (
    (e = i(p)),
    (s = o[e] = c[e](p)),
    {
      c() {
        (n = f('div')), s.c(), this.h();
      },
      l(l) {
        n = d(l, 'DIV', { class: !0 });
        var g = k(n);
        s.l(g), g.forEach(r), this.h();
      },
      h() {
        y(n, 'class', 'step-foreground step-' + (p[3] + 1) + ' svelte-20kuyz');
      },
      m(l, g) {
        b(l, n, g), o[e].m(n, null), (t = !0);
      },
      p(l, g) {
        let v = e;
        (e = i(l)),
          e === v
            ? o[e].p(l, g)
            : (V(),
              C(o[v], 1, 1, () => {
                o[v] = null;
              }),
              H(),
              (s = o[e]),
              s ? s.p(l, g) : ((s = o[e] = c[e](l)), s.c()),
              P(s, 1),
              s.m(n, null));
      },
      i(l) {
        t || (P(s), (t = !0));
      },
      o(l) {
        C(s), (t = !1);
      },
      d(l) {
        l && r(n), o[e].d();
      },
    }
  );
}
function sr(p) {
  let n;
  return {
    c() {
      (n = f('div')), this.h();
    },
    l(e) {
      (n = d(e, 'DIV', { class: !0 })), k(n).forEach(r), this.h();
    },
    h() {
      y(
        n,
        'class',
        'empty-step-foreground step-' + (p[3] + 1) + ' svelte-20kuyz'
      );
    },
    m(e, s) {
      b(e, n, s);
    },
    p: I,
    i: I,
    o: I,
    d(e) {
      e && r(n);
    },
  };
}
function er(p) {
  let n, e, s;
  const t = [p[1].foregroundProps || {}];
  var c = p[1].foreground;
  function o(i) {
    let l = {};
    for (let g = 0; g < t.length; g += 1) l = it(l, t[g]);
    return { props: l };
  }
  return (
    c && (n = new c(o())),
    {
      c() {
        n && T(n.$$.fragment), (e = B());
      },
      l(i) {
        n && z(n.$$.fragment, i), (e = B());
      },
      m(i, l) {
        n && j(n, i, l), b(i, e, l), (s = !0);
      },
      p(i, l) {
        const g = l & 1 ? rt(t, [ct(i[1].foregroundProps || {})]) : {};
        if (c !== (c = i[1].foreground)) {
          if (n) {
            V();
            const v = n;
            C(v.$$.fragment, 1, 0, () => {
              O(v, 1);
            }),
              H();
          }
          c
            ? ((n = new c(o())),
              T(n.$$.fragment),
              P(n.$$.fragment, 1),
              j(n, e.parentNode, e))
            : (n = null);
        } else c && n.$set(g);
      },
      i(i) {
        s || (n && P(n.$$.fragment, i), (s = !0));
      },
      o(i) {
        n && C(n.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && r(e), n && O(n, i);
      },
    }
  );
}
function tr(p) {
  let n,
    e = ut.parse(p[1].foreground) + '',
    s;
  return {
    c() {
      (n = new Qp()), (s = B()), this.h();
    },
    l(t) {
      (n = Yp(t)), (s = B()), this.h();
    },
    h() {
      n.a = s;
    },
    m(t, c) {
      n.m(e, t, c), b(t, s, c);
    },
    p(t, c) {
      c & 1 && e !== (e = ut.parse(t[1].foreground) + '') && n.p(e);
    },
    i: I,
    o: I,
    d(t) {
      t && r(s), t && n.d();
    },
  };
}
function _p(p) {
  let n, e, s, t, c;
  const o = [sr, nr],
    i = [];
  function l(g, v) {
    return g[1].foreground === '' || !g[1].foreground ? 0 : 1;
  }
  return (
    (e = l(p)),
    (s = i[e] = o[e](p)),
    {
      c() {
        (n = f('section')), s.c(), (t = E()), this.h();
      },
      l(g) {
        n = d(g, 'SECTION', { class: !0 });
        var v = k(n);
        s.l(v), (t = $(v)), v.forEach(r), this.h();
      },
      h() {
        y(n, 'class', 'step-foreground-container svelte-20kuyz');
      },
      m(g, v) {
        b(g, n, v), i[e].m(n, null), a(n, t), (c = !0);
      },
      p(g, v) {
        let w = e;
        (e = l(g)),
          e === w
            ? i[e].p(g, v)
            : (V(),
              C(i[w], 1, 1, () => {
                i[w] = null;
              }),
              H(),
              (s = i[e]),
              s ? s.p(g, v) : ((s = i[e] = o[e](g)), s.c()),
              P(s, 1),
              s.m(n, t));
      },
      i(g) {
        c || (P(s), (c = !0));
      },
      o(g) {
        C(s), (c = !1);
      },
      d(g) {
        g && r(n), i[e].d();
      },
    }
  );
}
function ar(p) {
  let n,
    e,
    s = p[0],
    t = [];
  for (let o = 0; o < s.length; o += 1) t[o] = _p(hp(p, s, o));
  const c = (o) =>
    C(t[o], 1, 1, () => {
      t[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < t.length; o += 1) t[o].c();
      n = B();
    },
    l(o) {
      for (let i = 0; i < t.length; i += 1) t[i].l(o);
      n = B();
    },
    m(o, i) {
      for (let l = 0; l < t.length; l += 1) t[l].m(o, i);
      b(o, n, i), (e = !0);
    },
    p(o, [i]) {
      if (i & 1) {
        s = o[0];
        let l;
        for (l = 0; l < s.length; l += 1) {
          const g = hp(o, s, l);
          t[l]
            ? (t[l].p(g, i), P(t[l], 1))
            : ((t[l] = _p(g)), t[l].c(), P(t[l], 1), t[l].m(n.parentNode, n));
        }
        for (V(), l = s.length; l < t.length; l += 1) c(l);
        H();
      }
    },
    i(o) {
      if (!e) {
        for (let i = 0; i < s.length; i += 1) P(t[i]);
        e = !0;
      }
    },
    o(o) {
      t = t.filter(Boolean);
      for (let i = 0; i < t.length; i += 1) C(t[i]);
      e = !1;
    },
    d(o) {
      Qo(t, o), o && r(n);
    },
  };
}
function or(p, n, e) {
  let { steps: s = [] } = n;
  return (
    (p.$$set = (t) => {
      'steps' in t && e(0, (s = t.steps));
    }),
    [s]
  );
}
class lr extends x {
  constructor(n) {
    super();
    nn(this, n, or, ar, sn, { steps: 0 });
  }
}
function pr(p) {
  let n, e, s, t, c, o, i;
  const l = [p[0].backgroundProps || {}];
  var g = p[0].background;
  function v(w) {
    let S = {};
    for (let L = 0; L < l.length; L += 1) S = it(S, l[L]);
    return { props: S };
  }
  return (
    g && (s = new g(v())),
    {
      c() {
        (n = f('section')), (e = f('div')), s && T(s.$$.fragment), this.h();
      },
      l(w) {
        n = d(w, 'SECTION', { class: !0, step: !0 });
        var S = k(n);
        e = d(S, 'DIV', { class: !0 });
        var L = k(e);
        s && z(s.$$.fragment, L), L.forEach(r), S.forEach(r), this.h();
      },
      h() {
        y(e, 'class', (t = 'embedded-background step-' + (p[2] + 1))),
          y(n, 'class', (c = 'background-container graphic ' + p[1])),
          y(n, 'step', (o = p[2] + 1));
      },
      m(w, S) {
        b(w, n, S), a(n, e), s && j(s, e, null), (i = !0);
      },
      p(w, [S]) {
        const L = S & 1 ? rt(l, [ct(w[0].backgroundProps || {})]) : {};
        if (g !== (g = w[0].background)) {
          if (s) {
            V();
            const A = s;
            C(A.$$.fragment, 1, 0, () => {
              O(A, 1);
            }),
              H();
          }
          g
            ? ((s = new g(v())),
              T(s.$$.fragment),
              P(s.$$.fragment, 1),
              j(s, e, null))
            : (s = null);
        } else g && s.$set(L);
        (!i ||
          (S & 4 && t !== (t = 'embedded-background step-' + (w[2] + 1)))) &&
          y(e, 'class', t),
          (!i ||
            (S & 2 && c !== (c = 'background-container graphic ' + w[1]))) &&
            y(n, 'class', c),
          (!i || (S & 4 && o !== (o = w[2] + 1))) && y(n, 'step', o);
      },
      i(w) {
        i || (s && P(s.$$.fragment, w), (i = !0));
      },
      o(w) {
        s && C(s.$$.fragment, w), (i = !1);
      },
      d(w) {
        w && r(n), s && O(s);
      },
    }
  );
}
function rr(p, n, e) {
  let { step: s } = n,
    { backgroundSize: t } = n,
    { index: c } = n;
  return (
    (p.$$set = (o) => {
      'step' in o && e(0, (s = o.step)),
        'backgroundSize' in o && e(1, (t = o.backgroundSize)),
        'index' in o && e(2, (c = o.index));
    }),
    [s, t, c]
  );
}
class bp extends x {
  constructor(n) {
    super();
    nn(this, n, rr, pr, sn, { step: 0, backgroundSize: 1, index: 2 });
  }
}
function cr(p) {
  let n, e, s, t;
  const c = [p[0].foregroundProps || {}];
  var o = p[0].foreground;
  function i(l) {
    let g = {};
    for (let v = 0; v < c.length; v += 1) g = it(g, c[v]);
    return { props: g };
  }
  return (
    o && (e = new o(i())),
    {
      c() {
        (n = f('div')), e && T(e.$$.fragment), this.h();
      },
      l(l) {
        n = d(l, 'DIV', { class: !0 });
        var g = k(n);
        e && z(e.$$.fragment, g), g.forEach(r), this.h();
      },
      h() {
        y(
          n,
          'class',
          (s = 'embedded-foreground step-' + (p[1] + 1) + ' svelte-kywsd6')
        );
      },
      m(l, g) {
        b(l, n, g), e && j(e, n, null), (t = !0);
      },
      p(l, g) {
        const v = g & 1 ? rt(c, [ct(l[0].foregroundProps || {})]) : {};
        if (o !== (o = l[0].foreground)) {
          if (e) {
            V();
            const w = e;
            C(w.$$.fragment, 1, 0, () => {
              O(w, 1);
            }),
              H();
          }
          o
            ? ((e = new o(i())),
              T(e.$$.fragment),
              P(e.$$.fragment, 1),
              j(e, n, null))
            : (e = null);
        } else o && e.$set(v);
        (!t ||
          (g & 2 &&
            s !==
              (s =
                'embedded-foreground step-' +
                (l[1] + 1) +
                ' svelte-kywsd6'))) &&
          y(n, 'class', s);
      },
      i(l) {
        t || (e && P(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        e && C(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && r(n), e && O(e);
      },
    }
  );
}
function ir(p) {
  let n,
    e,
    s = ut.parse(p[0].foreground) + '',
    t,
    c;
  return {
    c() {
      (n = f('section')), (e = f('div')), this.h();
    },
    l(o) {
      n = d(o, 'SECTION', { class: !0, step: !0 });
      var i = k(n);
      e = d(i, 'DIV', { class: !0 });
      var l = k(e);
      l.forEach(r), i.forEach(r), this.h();
    },
    h() {
      y(
        e,
        'class',
        (t = 'embedded-foreground step-' + (p[1] + 1) + ' svelte-kywsd6')
      ),
        y(n, 'class', 'body-text'),
        y(n, 'step', (c = p[1] + 1));
    },
    m(o, i) {
      b(o, n, i), a(n, e), (e.innerHTML = s);
    },
    p(o, i) {
      i & 1 && s !== (s = ut.parse(o[0].foreground) + '') && (e.innerHTML = s),
        i & 2 &&
          t !==
            (t = 'embedded-foreground step-' + (o[1] + 1) + ' svelte-kywsd6') &&
          y(e, 'class', t),
        i & 2 && c !== (c = o[1] + 1) && y(n, 'step', c);
    },
    i: I,
    o: I,
    d(o) {
      o && r(n);
    },
  };
}
function ur(p) {
  let n, e;
  return {
    c() {
      (n = f('div')), this.h();
    },
    l(s) {
      (n = d(s, 'DIV', { class: !0 })), k(n).forEach(r), this.h();
    },
    h() {
      y(
        n,
        'class',
        (e = 'empty-step-foreground step-' + (p[1] + 1) + ' svelte-kywsd6')
      );
    },
    m(s, t) {
      b(s, n, t);
    },
    p(s, t) {
      t & 2 &&
        e !==
          (e = 'empty-step-foreground step-' + (s[1] + 1) + ' svelte-kywsd6') &&
        y(n, 'class', e);
    },
    i: I,
    o: I,
    d(s) {
      s && r(n);
    },
  };
}
function fr(p) {
  let n, e, s, t;
  const c = [ur, ir, cr],
    o = [];
  function i(l, g) {
    return l[0].foreground === '' || !l[0].foreground
      ? 0
      : typeof l[0].foreground == 'string'
      ? 1
      : 2;
  }
  return (
    (n = i(p)),
    (e = o[n] = c[n](p)),
    {
      c() {
        e.c(), (s = B());
      },
      l(l) {
        e.l(l), (s = B());
      },
      m(l, g) {
        o[n].m(l, g), b(l, s, g), (t = !0);
      },
      p(l, [g]) {
        let v = n;
        (n = i(l)),
          n === v
            ? o[n].p(l, g)
            : (V(),
              C(o[v], 1, 1, () => {
                o[v] = null;
              }),
              H(),
              (e = o[n]),
              e ? e.p(l, g) : ((e = o[n] = c[n](l)), e.c()),
              P(e, 1),
              e.m(s.parentNode, s));
      },
      i(l) {
        t || (P(e), (t = !0));
      },
      o(l) {
        C(e), (t = !1);
      },
      d(l) {
        o[n].d(l), l && r(s);
      },
    }
  );
}
function dr(p, n, e) {
  let { step: s } = n,
    { index: t } = n;
  return (
    (p.$$set = (c) => {
      'step' in c && e(0, (s = c.step)), 'index' in c && e(1, (t = c.index));
    }),
    [s, t]
  );
}
class vp extends x {
  constructor(n) {
    super();
    nn(this, n, dr, fr, sn, { step: 0, index: 1 });
  }
}
function wp(p, n, e) {
  const s = p.slice();
  return (s[3] = n[e]), (s[5] = e), s;
}
function kr(p) {
  let n, e, s, t;
  return (
    (n = new vp({ props: { step: p[3], index: p[5] } })),
    (s = new bp({ props: { step: p[3], index: p[5], backgroundSize: p[2] } })),
    {
      c() {
        T(n.$$.fragment), (e = E()), T(s.$$.fragment);
      },
      l(c) {
        z(n.$$.fragment, c), (e = $(c)), z(s.$$.fragment, c);
      },
      m(c, o) {
        j(n, c, o), b(c, e, o), j(s, c, o), (t = !0);
      },
      p(c, o) {
        const i = {};
        o & 1 && (i.step = c[3]), n.$set(i);
        const l = {};
        o & 1 && (l.step = c[3]), o & 4 && (l.backgroundSize = c[2]), s.$set(l);
      },
      i(c) {
        t || (P(n.$$.fragment, c), P(s.$$.fragment, c), (t = !0));
      },
      o(c) {
        C(n.$$.fragment, c), C(s.$$.fragment, c), (t = !1);
      },
      d(c) {
        O(n, c), c && r(e), O(s, c);
      },
    }
  );
}
function gr(p) {
  let n, e, s, t, c;
  return (
    (n = new bp({ props: { step: p[3], index: p[5], backgroundSize: p[2] } })),
    (s = new vp({ props: { step: p[3], index: p[5] } })),
    {
      c() {
        T(n.$$.fragment), (e = E()), T(s.$$.fragment), (t = E());
      },
      l(o) {
        z(n.$$.fragment, o), (e = $(o)), z(s.$$.fragment, o), (t = $(o));
      },
      m(o, i) {
        j(n, o, i), b(o, e, i), j(s, o, i), b(o, t, i), (c = !0);
      },
      p(o, i) {
        const l = {};
        i & 1 && (l.step = o[3]), i & 4 && (l.backgroundSize = o[2]), n.$set(l);
        const g = {};
        i & 1 && (g.step = o[3]), s.$set(g);
      },
      i(o) {
        c || (P(n.$$.fragment, o), P(s.$$.fragment, o), (c = !0));
      },
      o(o) {
        C(n.$$.fragment, o), C(s.$$.fragment, o), (c = !1);
      },
      d(o) {
        O(n, o), o && r(e), O(s, o), o && r(t);
      },
    }
  );
}
function yp(p) {
  let n, e, s, t;
  const c = [gr, kr],
    o = [];
  function i(l, g) {
    return l[1] === 'bf' ? 0 : 1;
  }
  return (
    (n = i(p)),
    (e = o[n] = c[n](p)),
    {
      c() {
        e.c(), (s = B());
      },
      l(l) {
        e.l(l), (s = B());
      },
      m(l, g) {
        o[n].m(l, g), b(l, s, g), (t = !0);
      },
      p(l, g) {
        let v = n;
        (n = i(l)),
          n === v
            ? o[n].p(l, g)
            : (V(),
              C(o[v], 1, 1, () => {
                o[v] = null;
              }),
              H(),
              (e = o[n]),
              e ? e.p(l, g) : ((e = o[n] = c[n](l)), e.c()),
              P(e, 1),
              e.m(s.parentNode, s));
      },
      i(l) {
        t || (P(e), (t = !0));
      },
      o(l) {
        C(e), (t = !1);
      },
      d(l) {
        o[n].d(l), l && r(s);
      },
    }
  );
}
function mr(p) {
  let n,
    e,
    s = p[0],
    t = [];
  for (let o = 0; o < s.length; o += 1) t[o] = yp(wp(p, s, o));
  const c = (o) =>
    C(t[o], 1, 1, () => {
      t[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < t.length; o += 1) t[o].c();
      n = B();
    },
    l(o) {
      for (let i = 0; i < t.length; i += 1) t[i].l(o);
      n = B();
    },
    m(o, i) {
      for (let l = 0; l < t.length; l += 1) t[l].m(o, i);
      b(o, n, i), (e = !0);
    },
    p(o, [i]) {
      if (i & 7) {
        s = o[0];
        let l;
        for (l = 0; l < s.length; l += 1) {
          const g = wp(o, s, l);
          t[l]
            ? (t[l].p(g, i), P(t[l], 1))
            : ((t[l] = yp(g)), t[l].c(), P(t[l], 1), t[l].m(n.parentNode, n));
        }
        for (V(), l = s.length; l < t.length; l += 1) c(l);
        H();
      }
    },
    i(o) {
      if (!e) {
        for (let i = 0; i < s.length; i += 1) P(t[i]);
        e = !0;
      }
    },
    o(o) {
      t = t.filter(Boolean);
      for (let i = 0; i < t.length; i += 1) C(t[i]);
      e = !1;
    },
    d(o) {
      Qo(t, o), o && r(n);
    },
  };
}
function hr(p, n, e) {
  let { steps: s } = n,
    { embeddedLayout: t = 'fb' } = n,
    { backgroundSize: c } = n;
  return (
    (p.$$set = (o) => {
      'steps' in o && e(0, (s = o.steps)),
        'embeddedLayout' in o && e(1, (t = o.embeddedLayout)),
        'backgroundSize' in o && e(2, (c = o.backgroundSize));
    }),
    [s, t, c]
  );
}
class _r extends x {
  constructor(n) {
    super();
    nn(this, n, hr, mr, sn, { steps: 0, embeddedLayout: 1, backgroundSize: 2 });
  }
}
function br(p) {
  let n, e, s;
  return (
    (e = new _r({
      props: { steps: p[1], embeddedLayout: p[7], backgroundSize: p[2] },
    })),
    {
      c() {
        (n = f('section')), T(e.$$.fragment), this.h();
      },
      l(t) {
        n = d(t, 'SECTION', { class: !0, id: !0 });
        var c = k(n);
        z(e.$$.fragment, c), c.forEach(r), this.h();
      },
      h() {
        y(n, 'class', 'scroller-container embedded svelte-5wwrxt'),
          y(n, 'id', p[0]);
      },
      m(t, c) {
        b(t, n, c), j(e, n, null), (s = !0);
      },
      p(t, c) {
        const o = {};
        c & 2 && (o.steps = t[1]),
          c & 128 && (o.embeddedLayout = t[7]),
          c & 4 && (o.backgroundSize = t[2]),
          e.$set(o),
          (!s || c & 1) && y(n, 'id', t[0]);
      },
      i(t) {
        s || (P(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        C(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        t && r(n), O(e);
      },
    }
  );
}
function vr(p) {
  let n, e, s, t, c, o;
  function i(w) {
    p[15](w);
  }
  function l(w) {
    p[16](w);
  }
  function g(w) {
    p[17](w);
  }
  let v = {
    threshold: p[8],
    top: p[9],
    bottom: p[10],
    parallax: p[11],
    query: 'section.step-foreground-container',
    $$slots: { foreground: [yr], background: [wr] },
    $$scope: { ctx: p },
  };
  return (
    p[12] !== void 0 && (v.index = p[12]),
    p[13] !== void 0 && (v.offset = p[13]),
    p[14] !== void 0 && (v.progress = p[14]),
    (e = new Jp({ props: v })),
    Yo.push(() => Jo(e, 'index', i)),
    Yo.push(() => Jo(e, 'offset', l)),
    Yo.push(() => Jo(e, 'progress', g)),
    {
      c() {
        (n = f('section')), T(e.$$.fragment), this.h();
      },
      l(w) {
        n = d(w, 'SECTION', { class: !0, id: !0 });
        var S = k(n);
        z(e.$$.fragment, S), S.forEach(r), this.h();
      },
      h() {
        y(n, 'class', 'scroller-container svelte-5wwrxt'), y(n, 'id', p[0]);
      },
      m(w, S) {
        b(w, n, S), j(e, n, null), (o = !0);
      },
      p(w, S) {
        const L = {};
        S & 256 && (L.threshold = w[8]),
          S & 512 && (L.top = w[9]),
          S & 1024 && (L.bottom = w[10]),
          S & 2048 && (L.parallax = w[11]),
          S & 266302 && (L.$$scope = { dirty: S, ctx: w }),
          !s && S & 4096 && ((s = !0), (L.index = w[12]), Ko(() => (s = !1))),
          !t && S & 8192 && ((t = !0), (L.offset = w[13]), Ko(() => (t = !1))),
          !c &&
            S & 16384 &&
            ((c = !0), (L.progress = w[14]), Ko(() => (c = !1))),
          e.$set(L),
          (!o || S & 1) && y(n, 'id', w[0]);
      },
      i(w) {
        o || (P(e.$$.fragment, w), (o = !0));
      },
      o(w) {
        C(e.$$.fragment, w), (o = !1);
      },
      d(w) {
        w && r(n), O(e);
      },
    }
  );
}
function wr(p) {
  let n, e, s, t, c, o, i;
  return (
    (t = new xp({
      props: {
        index: p[12],
        steps: p[1],
        preload: p[5],
        stackBackground: p[4],
      },
    })),
    {
      c() {
        (n = f('div')),
          (e = f('div')),
          (s = f('section')),
          T(t.$$.fragment),
          this.h();
      },
      l(l) {
        n = d(l, 'DIV', { slot: !0, class: !0 });
        var g = k(n);
        e = d(g, 'DIV', { class: !0 });
        var v = k(e);
        s = d(v, 'SECTION', { class: !0, step: !0 });
        var w = k(s);
        z(t.$$.fragment, w), w.forEach(r), v.forEach(r), g.forEach(r), this.h();
      },
      h() {
        y(
          s,
          'class',
          (c = 'background-container graphic ' + p[2] + ' svelte-5wwrxt')
        ),
          y(s, 'step', (o = p[12] + 1)),
          y(e, 'class', 'scroller-graphic-well svelte-5wwrxt'),
          y(n, 'slot', 'background'),
          y(n, 'class', 'background svelte-5wwrxt'),
          $n(n, 'right', p[3] === 'left opposite'),
          $n(n, 'left', p[3] === 'right opposite');
      },
      m(l, g) {
        b(l, n, g), a(n, e), a(e, s), j(t, s, null), (i = !0);
      },
      p(l, g) {
        const v = {};
        g & 4096 && (v.index = l[12]),
          g & 2 && (v.steps = l[1]),
          g & 32 && (v.preload = l[5]),
          g & 16 && (v.stackBackground = l[4]),
          t.$set(v),
          (!i ||
            (g & 4 &&
              c !==
                (c =
                  'background-container graphic ' +
                  l[2] +
                  ' svelte-5wwrxt'))) &&
            y(s, 'class', c),
          (!i || (g & 4096 && o !== (o = l[12] + 1))) && y(s, 'step', o),
          g & 8 && $n(n, 'right', l[3] === 'left opposite'),
          g & 8 && $n(n, 'left', l[3] === 'right opposite');
      },
      i(l) {
        i || (P(t.$$.fragment, l), (i = !0));
      },
      o(l) {
        C(t.$$.fragment, l), (i = !1);
      },
      d(l) {
        l && r(n), O(t);
      },
    }
  );
}
function yr(p) {
  let n, e, s, t;
  return (
    (e = new lr({ props: { steps: p[1] } })),
    {
      c() {
        (n = f('div')), T(e.$$.fragment), this.h();
      },
      l(c) {
        n = d(c, 'DIV', { slot: !0, class: !0 });
        var o = k(n);
        z(e.$$.fragment, o), o.forEach(r), this.h();
      },
      h() {
        y(n, 'slot', 'foreground'),
          y(n, 'class', (s = 'foreground ' + p[3] + ' svelte-5wwrxt'));
      },
      m(c, o) {
        b(c, n, o), j(e, n, null), (t = !0);
      },
      p(c, o) {
        const i = {};
        o & 2 && (i.steps = c[1]),
          e.$set(i),
          (!t ||
            (o & 8 && s !== (s = 'foreground ' + c[3] + ' svelte-5wwrxt'))) &&
            y(n, 'class', s);
      },
      i(c) {
        t || (P(e.$$.fragment, c), (t = !0));
      },
      o(c) {
        C(e.$$.fragment, c), (t = !1);
      },
      d(c) {
        c && r(n), O(e);
      },
    }
  );
}
function Er(p) {
  let n, e, s, t;
  const c = [vr, br],
    o = [];
  function i(l, g) {
    return l[6] ? 1 : 0;
  }
  return (
    (n = i(p)),
    (e = o[n] = c[n](p)),
    {
      c() {
        e.c(), (s = B());
      },
      l(l) {
        e.l(l), (s = B());
      },
      m(l, g) {
        o[n].m(l, g), b(l, s, g), (t = !0);
      },
      p(l, [g]) {
        let v = n;
        (n = i(l)),
          n === v
            ? o[n].p(l, g)
            : (V(),
              C(o[v], 1, 1, () => {
                o[v] = null;
              }),
              H(),
              (e = o[n]),
              e ? e.p(l, g) : ((e = o[n] = c[n](l)), e.c()),
              P(e, 1),
              e.m(s.parentNode, s));
      },
      i(l) {
        t || (P(e), (t = !0));
      },
      o(l) {
        C(e), (t = !1);
      },
      d(l) {
        o[n].d(l), l && r(s);
      },
    }
  );
}
function $r(p, n, e) {
  let { id: s = '' } = n,
    { steps: t = [] } = n,
    { backgroundSize: c = 'fluid' } = n,
    { foregroundPosition: o = 'middle' } = n,
    { stackBackground: i = !0 } = n,
    { preload: l = 1 } = n,
    { embedded: g = !1 } = n,
    { embeddedLayout: v = 'fb' } = n,
    { threshold: w = 0.5 } = n,
    { top: S = 0 } = n,
    { bottom: L = 1 } = n,
    { parallax: A = !1 } = n,
    N = 0,
    en,
    Sn;
  function hs(D) {
    (N = D), e(12, N);
  }
  function Pn(D) {
    (en = D), e(13, en);
  }
  function _s(D) {
    (Sn = D), e(14, Sn);
  }
  return (
    (p.$$set = (D) => {
      'id' in D && e(0, (s = D.id)),
        'steps' in D && e(1, (t = D.steps)),
        'backgroundSize' in D && e(2, (c = D.backgroundSize)),
        'foregroundPosition' in D && e(3, (o = D.foregroundPosition)),
        'stackBackground' in D && e(4, (i = D.stackBackground)),
        'preload' in D && e(5, (l = D.preload)),
        'embedded' in D && e(6, (g = D.embedded)),
        'embeddedLayout' in D && e(7, (v = D.embeddedLayout)),
        'threshold' in D && e(8, (w = D.threshold)),
        'top' in D && e(9, (S = D.top)),
        'bottom' in D && e(10, (L = D.bottom)),
        'parallax' in D && e(11, (A = D.parallax));
    }),
    [s, t, c, o, i, l, g, v, w, S, L, A, N, en, Sn, hs, Pn, _s]
  );
}
class Zn extends x {
  constructor(n) {
    super();
    nn(this, n, $r, Er, sn, {
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
function Sr(p) {
  let n, e, s, t, c, o, i, l, g, v, w;
  return {
    c() {
      (n = f('h4')),
        (e = m('Interactive step')),
        (s = E()),
        (t = f('p')),
        (c = m('The count is ')),
        (o = m(p[0])),
        (i = E()),
        (l = f('button')),
        (g = m('Click Me'));
    },
    l(S) {
      n = d(S, 'H4', {});
      var L = k(n);
      (e = h(L, 'Interactive step')),
        L.forEach(r),
        (s = $(S)),
        (t = d(S, 'P', {}));
      var A = k(t);
      (c = h(A, 'The count is ')),
        (o = h(A, p[0])),
        A.forEach(r),
        (i = $(S)),
        (l = d(S, 'BUTTON', {}));
      var N = k(l);
      (g = h(N, 'Click Me')), N.forEach(r);
    },
    m(S, L) {
      b(S, n, L),
        a(n, e),
        b(S, s, L),
        b(S, t, L),
        a(t, c),
        a(t, o),
        b(S, i, L),
        b(S, l, L),
        a(l, g),
        v || ((w = Kp(l, 'click', p[1])), (v = !0));
    },
    p(S, [L]) {
      L & 1 && Wp(o, S[0]);
    },
    i: I,
    o: I,
    d(S) {
      S && r(n), S && r(s), S && r(t), S && r(i), S && r(l), (v = !1), w();
    },
  };
}
function Pr(p, n, e) {
  let { count: s = 0 } = n;
  const t = () => {
    e(0, (s += 1));
  };
  return (
    (p.$$set = (c) => {
      'count' in c && e(0, (s = c.count));
    }),
    [s, t]
  );
}
class Ep extends x {
  constructor(n) {
    super();
    nn(this, n, Pr, Sr, sn, { count: 0 });
  }
}
function Cr(p) {
  let n, e, s;
  return {
    c() {
      (n = f('div')), (e = f('div')), this.h();
    },
    l(t) {
      n = d(t, 'DIV', { class: !0 });
      var c = k(n);
      (e = d(c, 'DIV', { class: !0, style: !0 })),
        k(e).forEach(r),
        c.forEach(r),
        this.h();
    },
    h() {
      y(e, 'class', 'step svelte-1e3wp2r'),
        y(
          e,
          'style',
          (s = `
      background: ${p[0]};
      height: ${400 / p[2]}px;
      top: ${p[1] * (400 / p[2])}px;
  `)
        ),
        y(n, 'class', 'step-cont svelte-1e3wp2r');
    },
    m(t, c) {
      b(t, n, c), a(n, e);
    },
    p(t, [c]) {
      c & 7 &&
        s !==
          (s = `
      background: ${t[0]};
      height: ${400 / t[2]}px;
      top: ${t[1] * (400 / t[2])}px;
  `) &&
        y(e, 'style', s);
    },
    i: I,
    o: I,
    d(t) {
      t && r(n);
    },
  };
}
function Ir(p, n, e) {
  let { colour: s = 'lightblue' } = n,
    { i: t = 0 } = n,
    { steps: c = 3 } = n;
  return (
    (p.$$set = (o) => {
      'colour' in o && e(0, (s = o.colour)),
        'i' in o && e(1, (t = o.i)),
        'steps' in o && e(2, (c = o.steps));
    }),
    [s, t, c]
  );
}
class Wo extends x {
  constructor(n) {
    super();
    nn(this, n, Ir, Cr, sn, { colour: 0, i: 1, steps: 2 });
  }
}
function Lr(p) {
  let n, e;
  return {
    c() {
      (n = f('div')), this.h();
    },
    l(s) {
      (n = d(s, 'DIV', { class: !0, style: !0 })), k(n).forEach(r), this.h();
    },
    h() {
      y(n, 'class', 'step svelte-13llgxe'),
        y(n, 'style', (e = `background: ${p[0]};`));
    },
    m(s, t) {
      b(s, n, t);
    },
    p(s, [t]) {
      t & 1 && e !== (e = `background: ${s[0]};`) && y(n, 'style', e);
    },
    i: I,
    o: I,
    d(s) {
      s && r(n);
    },
  };
}
function Dr(p, n, e) {
  let { colour: s = 'lightblue' } = n;
  return (
    (p.$$set = (t) => {
      'colour' in t && e(0, (s = t.colour));
    }),
    [s]
  );
}
class ms extends x {
  constructor(n) {
    super();
    nn(this, n, Dr, Lr, sn, { colour: 0 });
  }
}
function Or(p) {
  switch (p) {
    case './demos/ai2html/ai-scroller-1.exclude.svelte':
      return qo(
        () => import('./ai-scroller-1.exclude-ca79c8f7.js'),
        [
          'chunks/ai-scroller-1.exclude-ca79c8f7.js',
          'assets/ai-scroller-1.exclude-74bdcb73.css',
          'chunks/vendor-a3a8e12b.js',
          'assets/vendor-c9bf64b2.css',
          'chunks/paths-6758d194.js',
        ]
      );
    case './demos/ai2html/ai-scroller-2.exclude.svelte':
      return qo(
        () => import('./ai-scroller-2.exclude-cbbf7fec.js'),
        [
          'chunks/ai-scroller-2.exclude-cbbf7fec.js',
          'assets/ai-scroller-2.exclude-7d0e85bf.css',
          'chunks/vendor-a3a8e12b.js',
          'assets/vendor-c9bf64b2.css',
          'chunks/paths-6758d194.js',
        ]
      );
    case './demos/ai2html/ai-scroller-3.exclude.svelte':
      return qo(
        () => import('./ai-scroller-3.exclude-7adbae8e.js'),
        [
          'chunks/ai-scroller-3.exclude-7adbae8e.js',
          'assets/ai-scroller-3.exclude-e5d75c9d.css',
          'chunks/vendor-a3a8e12b.js',
          'assets/vendor-c9bf64b2.css',
          'chunks/paths-6758d194.js',
        ]
      );
    default:
      return new Promise(function (n, e) {
        (typeof queueMicrotask == 'function'
          ? queueMicrotask
          : setTimeout)(e.bind(null, new Error('Unknown variable dynamic import: ' + p)));
      });
  }
}
function Tr(p) {
  let n, e;
  return (
    (n = new Zn({
      props: { steps: p[0], backgroundSize: 'wide', id: 'example1' },
    })),
    {
      c() {
        T(n.$$.fragment);
      },
      l(s) {
        z(n.$$.fragment, s);
      },
      m(s, t) {
        j(n, s, t), (e = !0);
      },
      p: I,
      i(s) {
        e || (P(n.$$.fragment, s), (e = !0));
      },
      o(s) {
        C(n.$$.fragment, s), (e = !1);
      },
      d(s) {
        O(n, s);
      },
    }
  );
}
function jr(p) {
  let n, e;
  return (
    (n = new Zn({
      props: {
        steps: p[0],
        foregroundPosition: 'right opposite',
        backgroundSize: 'normal',
        id: 'example2',
      },
    })),
    {
      c() {
        T(n.$$.fragment);
      },
      l(s) {
        z(n.$$.fragment, s);
      },
      m(s, t) {
        j(n, s, t), (e = !0);
      },
      p: I,
      i(s) {
        e || (P(n.$$.fragment, s), (e = !0));
      },
      o(s) {
        C(n.$$.fragment, s), (e = !1);
      },
      d(s) {
        O(n, s);
      },
    }
  );
}
function zr(p) {
  let n, e;
  return (
    (n = new Zn({
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
        T(n.$$.fragment);
      },
      l(s) {
        z(n.$$.fragment, s);
      },
      m(s, t) {
        j(n, s, t), (e = !0);
      },
      p: I,
      i(s) {
        e || (P(n.$$.fragment, s), (e = !0));
      },
      o(s) {
        C(n.$$.fragment, s), (e = !1);
      },
      d(s) {
        O(n, s);
      },
    }
  );
}
function Br(p) {
  let n, e;
  return (
    (n = new Zn({
      props: { steps: p[2], backgroundSize: 'widest', id: 'example3' },
    })),
    {
      c() {
        T(n.$$.fragment);
      },
      l(s) {
        z(n.$$.fragment, s);
      },
      m(s, t) {
        j(n, s, t), (e = !0);
      },
      p: I,
      i(s) {
        e || (P(n.$$.fragment, s), (e = !0));
      },
      o(s) {
        C(n.$$.fragment, s), (e = !1);
      },
      d(s) {
        O(n, s);
      },
    }
  );
}
function Gr(p) {
  let n, e;
  return (
    (n = new Zn({
      props: {
        steps: p[0],
        backgroundSize: 'widest',
        id: 'scroller-example-4',
      },
    })),
    {
      c() {
        T(n.$$.fragment);
      },
      l(s) {
        z(n.$$.fragment, s);
      },
      m(s, t) {
        j(n, s, t), (e = !0);
      },
      p: I,
      i(s) {
        e || (P(n.$$.fragment, s), (e = !0));
      },
      o(s) {
        C(n.$$.fragment, s), (e = !1);
      },
      d(s) {
        O(n, s);
      },
    }
  );
}
function Nr(p) {
  return { c: I, l: I, m: I, p: I, i: I, o: I, d: I };
}
function Mr(p) {
  let n, e;
  return (
    (n = new Zn({
      props: { steps: p[6], backgroundSize: 'fluid', id: 'example-5' },
    })),
    {
      c() {
        T(n.$$.fragment);
      },
      l(s) {
        z(n.$$.fragment, s);
      },
      m(s, t) {
        j(n, s, t), (e = !0);
      },
      p: I,
      i(s) {
        e || (P(n.$$.fragment, s), (e = !0));
      },
      o(s) {
        C(n.$$.fragment, s), (e = !1);
      },
      d(s) {
        O(n, s);
      },
    }
  );
}
function Rr(p) {
  return { c: I, l: I, m: I, p: I, i: I, o: I, d: I };
}
function Ar(p) {
  let n,
    e,
    s = {
      ctx: p,
      current: null,
      token: null,
      hasCatch: !1,
      pending: Rr,
      then: Mr,
      catch: Nr,
      value: 6,
      blocks: [, , ,],
    };
  return (
    fp(p[4](p[3]), s),
    {
      c() {
        (n = B()), s.block.c();
      },
      l(t) {
        (n = B()), s.block.l(t);
      },
      m(t, c) {
        b(t, n, c),
          s.block.m(t, (s.anchor = c)),
          (s.mount = () => n.parentNode),
          (s.anchor = n),
          (e = !0);
      },
      p(t, c) {
        (p = t), dp(s, p, c);
      },
      i(t) {
        e || (P(s.block), (e = !0));
      },
      o(t) {
        for (let c = 0; c < 3; c += 1) {
          const o = s.blocks[c];
          C(o);
        }
        e = !1;
      },
      d(t) {
        t && r(n), s.block.d(t), (s.token = null), (s = null);
      },
    }
  );
}
function Ur(p) {
  return { c: I, l: I, m: I, p: I, i: I, o: I, d: I };
}
function Vr(p) {
  let n, e;
  return (
    (n = new Zn({
      props: {
        steps: p[6],
        backgroundSize: 'fluid',
        id: 'example6',
        embedded: 'true',
      },
    })),
    {
      c() {
        T(n.$$.fragment);
      },
      l(s) {
        z(n.$$.fragment, s);
      },
      m(s, t) {
        j(n, s, t), (e = !0);
      },
      p: I,
      i(s) {
        e || (P(n.$$.fragment, s), (e = !0));
      },
      o(s) {
        C(n.$$.fragment, s), (e = !1);
      },
      d(s) {
        O(n, s);
      },
    }
  );
}
function Hr(p) {
  return { c: I, l: I, m: I, p: I, i: I, o: I, d: I };
}
function Fr(p) {
  let n,
    e,
    s = {
      ctx: p,
      current: null,
      token: null,
      hasCatch: !1,
      pending: Hr,
      then: Vr,
      catch: Ur,
      value: 6,
      blocks: [, , ,],
    };
  return (
    fp(p[4](p[3]), s),
    {
      c() {
        (n = B()), s.block.c();
      },
      l(t) {
        (n = B()), s.block.l(t);
      },
      m(t, c) {
        b(t, n, c),
          s.block.m(t, (s.anchor = c)),
          (s.mount = () => n.parentNode),
          (s.anchor = n),
          (e = !0);
      },
      p(t, c) {
        (p = t), dp(s, p, c);
      },
      i(t) {
        e || (P(s.block), (e = !0));
      },
      o(t) {
        for (let c = 0; c < 3; c += 1) {
          const o = s.blocks[c];
          C(o);
        }
        e = !1;
      },
      d(t) {
        t && r(n), s.block.d(t), (s.token = null), (s = null);
      },
    }
  );
}
function qr(p) {
  let n,
    e,
    s,
    t,
    c,
    o,
    i,
    l,
    g,
    v,
    w,
    S,
    L,
    A,
    N,
    en,
    Sn,
    hs,
    Pn,
    _s,
    D,
    Y,
    Cn,
    bs,
    ft,
    dt,
    vs,
    kt,
    gt,
    xn,
    ws,
    mt,
    ht,
    _t,
    In,
    ys,
    bt,
    vt,
    Es,
    wt,
    yt,
    ns,
    $s,
    Et,
    $t,
    St,
    Ss,
    Ps,
    Pt,
    Ct,
    Cs,
    G,
    It,
    Is,
    Lt,
    Dt,
    Ls,
    Ot,
    Tt,
    Ds,
    jt,
    zt,
    Os,
    Bt,
    Gt,
    Ts,
    Nt,
    Mt,
    Ce,
    Ln,
    Sp = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
    Ie,
    rn,
    Le,
    M,
    Dn,
    Rt,
    js,
    At,
    Ut,
    Vt,
    zs,
    Bs,
    Ht,
    Ft,
    U,
    On,
    Gs,
    qt,
    Qt,
    Ns,
    Yt,
    Jt,
    ss,
    Ms,
    Kt,
    Wt,
    Xt,
    es,
    Rs,
    Zt,
    xt,
    na,
    ts,
    As,
    sa,
    ea,
    ta,
    as,
    Us,
    aa,
    oa,
    la,
    Vs,
    pa,
    ra,
    F,
    Hs,
    ca,
    ia,
    Fs,
    ua,
    fa,
    qs,
    da,
    ka,
    Qs,
    ga,
    ma,
    De,
    Tn,
    Pp = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
    Oe,
    cn,
    Te,
    q,
    Ys,
    Js,
    ha,
    _a,
    tn,
    Ks,
    ba,
    va,
    un,
    Ws,
    wa,
    ya,
    Xs,
    Ea,
    $a,
    Sa,
    os,
    Zs,
    Pa,
    Ca,
    Ia,
    xs,
    ne,
    La,
    Da,
    an,
    se,
    Oa,
    Ta,
    jn,
    ja,
    ee,
    za,
    Ba,
    Ga,
    ls,
    te,
    Na,
    Ma,
    je,
    zn,
    Cp =
      '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span> <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">stackBackground="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">preload="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">0</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>',
    ze,
    fn,
    Be,
    ps,
    J,
    Ra,
    ae,
    Aa,
    Ua,
    oe,
    Va,
    Ha,
    le,
    Fa,
    qa,
    Ge,
    Bn,
    Ip = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
    Ne,
    dn,
    Me,
    kn,
    Gn,
    Qa,
    pe,
    Ya,
    Ja,
    Ka,
    gn,
    re,
    Wa,
    Xa,
    Nn,
    Za,
    Mn,
    xa,
    no,
    Re,
    Rn,
    Lp = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span> <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">backgroundSize</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>widest<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-scroller<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

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
    Ae,
    mn,
    Ue,
    hn,
    on,
    so,
    An,
    eo,
    to,
    Un,
    ao,
    oo,
    lo,
    rs,
    Vn,
    po,
    Hn,
    ro,
    co,
    Ve,
    Fn,
    Dp = `<code class="language-bash"><span class="token comment"># In your Google doc...</span>
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
    He,
    qn,
    Op = `<code class="language-svelte"><span class="token comment">&lt;!-- src/lib/Page.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/paths'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> content <span class="token keyword">from</span> <span class="token string">'$locales/en/content.json'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Scroller <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">fetchComponent</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">componentName</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">./ai2svelte/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>componentName<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.svelte</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">makeSteps</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">steps</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> scrollerSteps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> step <span class="token keyword">of</span> steps<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">const</span> background <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchComponent</span><span class="token punctuation">(</span>step<span class="token punctuation">.</span>Background<span class="token punctuation">)</span><span class="token punctuation">;</span>
      scrollerSteps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
        background<span class="token punctuation">,</span>
        <span class="token literal-property property">backgroundProps</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">foreground</span><span class="token operator">:</span> step<span class="token punctuation">.</span>Foreground<span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">return</span> scrollerSteps<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript">content<span class="token punctuation">.</span>blocks </span><span class="token keyword">as</span> <span class="token language-javascript">block<span class="token punctuation">&#125;</span></span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> block<span class="token punctuation">.</span>Type <span class="token operator">===</span> <span class="token string">'ai-scroller'</span><span class="token punctuation">&#125;</span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">await</span> <span class="token function">makeSteps</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span>steps<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>then steps<span class="token punctuation">&#125;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span>
        <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
        <span class="token attr-name">backgroundSize="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>block<span class="token punctuation">.</span>BackgroundSize<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
        <span class="token attr-name">foregroundPosition="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>block<span class="token punctuation">.</span>ForegroundPosition<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
        <span class="token attr-name">id="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>block<span class="token punctuation">.</span><span class="token constant">ID</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
      <span class="token punctuation">/></span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>catch error<span class="token punctuation">&#125;</span></span>
      <span class="token language-javascript"><span class="token punctuation">&#123;</span>console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error making steps for scroller'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">await</span><span class="token punctuation">&#125;</span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>
<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span></code>`,
    Fe,
    cs,
    ln,
    io,
    ce,
    uo,
    fo,
    Qn,
    ko,
    go,
    qe,
    _n,
    Qe,
    R,
    ie,
    mo,
    ho,
    ue,
    fe,
    _o,
    bo,
    de,
    K,
    vo,
    ke,
    wo,
    yo,
    ge,
    Eo,
    $o,
    me,
    So,
    Po,
    Co,
    he,
    _e,
    Io,
    Lo,
    Yn,
    is,
    be,
    Do,
    Oo,
    To,
    us,
    ve,
    jo,
    zo,
    Ye,
    Jn,
    Tp = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span>
  <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">backgroundSize</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fluid<span class="token punctuation">"</span></span>
  <span class="token attr-name">embedded="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">embeddedLayout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fb<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span></code>`,
    Je,
    bn,
    Ke;
  return (
    (rn = new Xn({
      props: { fluid: !0, $$slots: { default: [Tr] }, $$scope: { ctx: p } },
    })),
    (cn = new Xn({
      props: { fluid: !0, $$slots: { default: [jr] }, $$scope: { ctx: p } },
    })),
    (fn = new Xn({
      props: { fluid: !0, $$slots: { default: [zr] }, $$scope: { ctx: p } },
    })),
    (dn = new Xn({
      props: { fluid: !0, $$slots: { default: [Br] }, $$scope: { ctx: p } },
    })),
    (mn = new Xn({
      props: { fluid: !0, $$slots: { default: [Gr] }, $$scope: { ctx: p } },
    })),
    (_n = new Xn({
      props: { fluid: !0, $$slots: { default: [Ar] }, $$scope: { ctx: p } },
    })),
    (bn = new Xn({
      props: { fluid: !0, $$slots: { default: [Fr] }, $$scope: { ctx: p } },
    })),
    {
      c() {
        (n = f('section')),
          (e = f('h2')),
          (s = m($p)),
          (t = E()),
          (c = f('p')),
          (o = m('Easy scrollytelling.')),
          (i = E()),
          (l = f('section')),
          (g = f('p')),
          (v = m(
            'This component is designed to handle most common layouts for scrollytelling. If you need something more complex, though, you should use '
          )),
          (w = f('a')),
          (S = m('svelte-scroller')),
          (L = m(
            ', which is a lower level component you can more easily customize.'
          )),
          (A = E()),
          (N = f('p')),
          (en = f('code')),
          (Sn = m('steps')),
          (hs = E()),
          (Pn = f('em')),
          (_s = m('an array of objects')),
          (D = E()),
          (Y = f('ul')),
          (Cn = f('li')),
          (bs = f('code')),
          (ft = m('background')),
          (dt = m(' A background component ')),
          (vs = f('strong')),
          (kt = m('REQUIRED')),
          (gt = E()),
          (xn = f('li')),
          (ws = f('code')),
          (mt = m('backgroundProps')),
          (ht = m(' An object of props given to background component')),
          (_t = E()),
          (In = f('li')),
          (ys = f('code')),
          (bt = m('foreground')),
          (vt = m(' Either a markdown string or a foreground component ')),
          (Es = f('strong')),
          (wt = m('REQUIRED')),
          (yt = E()),
          (ns = f('li')),
          ($s = f('code')),
          (Et = m('foregroundProps')),
          ($t = m(' An object of props given to foreground component')),
          (St = E()),
          (Ss = f('p')),
          (Ps = f('code')),
          (Pt = m('backgroundSize')),
          (Ct = E()),
          (Cs = f('ul')),
          (G = f('li')),
          (It = m(
            'Adjusts the size of the background graphic by passing a class name corresponding to one of our well widths: '
          )),
          (Is = f('code')),
          (Lt = m('normal')),
          (Dt = m(', ')),
          (Ls = f('code')),
          (Ot = m('wide')),
          (Tt = m(', ')),
          (Ds = f('code')),
          (jt = m('wider')),
          (zt = m(', ')),
          (Os = f('code')),
          (Bt = m('widest')),
          (Gt = m(' or ')),
          (Ts = f('code')),
          (Nt = m('fluid')),
          (Mt = m('.')),
          (Ce = E()),
          (Ln = f('pre')),
          (Ie = E()),
          T(rn.$$.fragment),
          (Le = E()),
          (M = f('section')),
          (Dn = f('p')),
          (Rt = m('Control the layout of your component with the ')),
          (js = f('code')),
          (At = m('foregroundPosition')),
          (Ut = m(' prop.')),
          (Vt = E()),
          (zs = f('p')),
          (Bs = f('code')),
          (Ht = m('foregroundPosition')),
          (Ft = E()),
          (U = f('ul')),
          (On = f('li')),
          (Gs = f('code')),
          (qt = m('middle')),
          (Qt = m(' Text and graphic middle ')),
          (Ns = f('em')),
          (Yt = m('default')),
          (Jt = E()),
          (ss = f('li')),
          (Ms = f('code')),
          (Kt = m('left')),
          (Wt = m(' Text to left, graphic stays middle')),
          (Xt = E()),
          (es = f('li')),
          (Rs = f('code')),
          (Zt = m('right')),
          (xt = m(' Text to right, graphic stays middle')),
          (na = E()),
          (ts = f('li')),
          (As = f('code')),
          (sa = m('left opposite')),
          (ea = m(' Text to left, graphic to right')),
          (ta = E()),
          (as = f('li')),
          (Us = f('code')),
          (aa = m('right opposite')),
          (oa = m(' Text to right, graphic to left')),
          (la = E()),
          (Vs = f('p')),
          (pa = m(
            'Both text and graphic will revert to the middle when the window drops below 1200px.'
          )),
          (ra = E()),
          (F = f('p')),
          (Hs = f('strong')),
          (ca = m('Note:')),
          (ia = m(' Make sure your ')),
          (Fs = f('code')),
          (ua = m('backgroundSize')),
          (fa = m(' prop is ')),
          (qs = f('em')),
          (da = m('not')),
          (ka = m(' set to ')),
          (Qs = f('code')),
          (ga = m('fluid')),
          (ma = m(' if using either left or right opposite option.')),
          (De = E()),
          (Tn = f('pre')),
          (Oe = E()),
          T(cn.$$.fragment),
          (Te = E()),
          (q = f('section')),
          (Ys = f('p')),
          (Js = f('code')),
          (ha = m('stackBackground')),
          (_a = E()),
          (tn = f('ul')),
          (Ks = f('li')),
          (ba = m(
            'Determines whether previous background step graphics will stack below current one.'
          )),
          (va = E()),
          (un = f('li')),
          (Ws = f('code')),
          (wa = m('true')),
          (ya = E()),
          (Xs = f('em')),
          (Ea = m('default')),
          ($a = m(
            ' Background graphics from previous steps will remain visible below active one, allowing you to stack graphics with transparent backgrounds.'
          )),
          (Sa = E()),
          (os = f('li')),
          (Zs = f('code')),
          (Pa = m('false')),
          (Ca = m(
            ' Only the background graphic from the current step will show and backgrounds from previous steps are hidden.'
          )),
          (Ia = E()),
          (xs = f('p')),
          (ne = f('code')),
          (La = m('preload')),
          (Da = E()),
          (an = f('ul')),
          (se = f('li')),
          (Oa = m(
            'Determines how many background steps to load before and after the currently active one. This prop basically lazyloads backgrounds, which is useful for making sure you\u2019re not loading too many images at once for long scrolls.'
          )),
          (Ta = E()),
          (jn = f('li')),
          (ja = m('Default is ')),
          (ee = f('code')),
          (za = m('1')),
          (Ba = m(
            ', which loads one background before and one after the currently active one.'
          )),
          (Ga = E()),
          (ls = f('li')),
          (te = f('code')),
          (Na = m('0')),
          (Ma = m(' disables lazyloading and loads all backgrounds at once.')),
          (je = E()),
          (zn = f('pre')),
          (ze = E()),
          T(fn.$$.fragment),
          (Be = E()),
          (ps = f('section')),
          (J = f('p')),
          (Ra = m('Pass a component to ')),
          (ae = f('code')),
          (Aa = m('foreground')),
          (Ua = m(' and use ')),
          (oe = f('code')),
          (Va = m('backgroundProps')),
          (Ha = m(' and ')),
          (le = f('code')),
          (Fa = m('foregroundProps')),
          (qa = m(' to pass data to your components.')),
          (Ge = E()),
          (Bn = f('pre')),
          (Ne = E()),
          T(dn.$$.fragment),
          (Me = E()),
          (kn = f('section')),
          (Gn = f('p')),
          (Qa = m('Add an ID to your scroller and use SCSS ')),
          (pe = f('code')),
          (Ya = m(':global')),
          (Ja = m(' rules to override any styles.')),
          (Ka = E()),
          (gn = f('section')),
          (re = f('p')),
          (Wa = m(
            'This is the main way you should customise this component for any layouts not covered by the props we\u2019ve already mentioned. Most small layout shifts can be handled with simple SCSS. Check out the component in your browser\u2019s inspector to find which elements you want to target with custom styles.'
          )),
          (Xa = E()),
          (Nn = f('p')),
          (Za = m(
            'If you\u2019re still struggling to make this component work for your design, it may be a good sign you should reach for '
          )),
          (Mn = f('a')),
          (xa = m('svelte-scroller')),
          (no = m(' instead.')),
          (Re = E()),
          (Rn = f('pre')),
          (Ae = E()),
          T(mn.$$.fragment),
          (Ue = E()),
          (hn = f('section')),
          (on = f('p')),
          (so = m(
            'You can also use this component to layout an AI-based graphics scroller via an '
          )),
          (An = f('a')),
          (eo = m('ArchieML')),
          (to = m(
            '-formatted Google doc by using the following pattern to dynamically import '
          )),
          (Un = f('a')),
          (ao = m('ai2svelte')),
          (oo = m(' components for the background:')),
          (lo = E()),
          (rs = f('section')),
          (Vn = f('p')),
          (po = m('If you\u2019re using the ')),
          (Hn = f('a')),
          (ro = m('graphics kit')),
          (co = m(
            ', this pattern is already wired up in the boilerplate included in the Page.svelte component. Free money!'
          )),
          (Ve = E()),
          (Fn = f('pre')),
          (He = E()),
          (qn = f('pre')),
          (Fe = E()),
          (cs = f('section')),
          (ln = f('p')),
          (io = m(
            'This pattern comes with some restrictions, though. Be sure your '
          )),
          (ce = f('code')),
          (uo = m('fetchComponent')),
          (fo = m(' function follows ')),
          (Qn = f('a')),
          (ko = m('the limits on dynamic imports')),
          (go = m('.')),
          (qe = E()),
          T(_n.$$.fragment),
          (Qe = E()),
          (R = f('section')),
          (ie = f('p')),
          (mo = m(
            'This component can also unravel the scrolling experience into a flat, linear layout. Use this when the graphic will be embedded in an iframe.'
          )),
          (ho = E()),
          (ue = f('p')),
          (fe = f('code')),
          (_o = m('embedded')),
          (bo = E()),
          (de = f('ul')),
          (K = f('li')),
          (vo = m('Setting to ')),
          (ke = f('code')),
          (wo = m('true')),
          (yo = m(' will unroll the scroll experience into a flat layout. ')),
          (ge = f('code')),
          (Eo = m('true')),
          ($o = m(' will also cause the ')),
          (me = f('code')),
          (So = m('foregroundPosition')),
          (Po = m(
            ' prop to be ignored. (Use global SCSS to adjust the style of foreground text.)'
          )),
          (Co = E()),
          (he = f('p')),
          (_e = f('code')),
          (Io = m('embeddedLayout')),
          (Lo = E()),
          (Yn = f('ul')),
          (is = f('li')),
          (be = f('code')),
          (Do = m('fb')),
          (Oo = m(
            ' (default) will layout the foreground before the background in each step.'
          )),
          (To = E()),
          (us = f('li')),
          (ve = f('code')),
          (jo = m('bf')),
          (zo = m(' will lead with the background in each step.')),
          (Ye = E()),
          (Jn = f('pre')),
          (Je = E()),
          T(bn.$$.fragment),
          this.h();
      },
      l(u) {
        n = d(u, 'SECTION', {});
        var _ = k(n);
        e = d(_, 'H2', {});
        var we = k(e);
        (s = h(we, $p)), we.forEach(r), (t = $(_)), (c = d(_, 'P', {}));
        var ye = k(c);
        (o = h(ye, 'Easy scrollytelling.')),
          ye.forEach(r),
          (i = $(_)),
          (l = d(_, 'SECTION', { class: !0 }));
        var Ee = k(l);
        g = d(Ee, 'P', {});
        var Kn = k(g);
        (v = h(
          Kn,
          'This component is designed to handle most common layouts for scrollytelling. If you need something more complex, though, you should use '
        )),
          (w = d(Kn, 'A', { href: !0, rel: !0 }));
        var $e = k(w);
        (S = h($e, 'svelte-scroller')),
          $e.forEach(r),
          (L = h(
            Kn,
            ', which is a lower level component you can more easily customize.'
          )),
          Kn.forEach(r),
          Ee.forEach(r),
          (A = $(_)),
          (N = d(_, 'P', {}));
        var Wn = k(N);
        en = d(Wn, 'CODE', {});
        var Se = k(en);
        (Sn = h(Se, 'steps')),
          Se.forEach(r),
          (hs = $(Wn)),
          (Pn = d(Wn, 'EM', {}));
        var Xo = k(Pn);
        (_s = h(Xo, 'an array of objects')),
          Xo.forEach(r),
          Wn.forEach(r),
          (D = $(_)),
          (Y = d(_, 'UL', {}));
        var vn = k(Y);
        Cn = d(vn, 'LI', {});
        var We = k(Cn);
        bs = d(We, 'CODE', {});
        var Zo = k(bs);
        (ft = h(Zo, 'background')),
          Zo.forEach(r),
          (dt = h(We, ' A background component ')),
          (vs = d(We, 'STRONG', {}));
        var xo = k(vs);
        (kt = h(xo, 'REQUIRED')),
          xo.forEach(r),
          We.forEach(r),
          (gt = $(vn)),
          (xn = d(vn, 'LI', {}));
        var Bo = k(xn);
        ws = d(Bo, 'CODE', {});
        var nl = k(ws);
        (mt = h(nl, 'backgroundProps')),
          nl.forEach(r),
          (ht = h(Bo, ' An object of props given to background component')),
          Bo.forEach(r),
          (_t = $(vn)),
          (In = d(vn, 'LI', {}));
        var Xe = k(In);
        ys = d(Xe, 'CODE', {});
        var sl = k(ys);
        (bt = h(sl, 'foreground')),
          sl.forEach(r),
          (vt = h(Xe, ' Either a markdown string or a foreground component ')),
          (Es = d(Xe, 'STRONG', {}));
        var el = k(Es);
        (wt = h(el, 'REQUIRED')),
          el.forEach(r),
          Xe.forEach(r),
          (yt = $(vn)),
          (ns = d(vn, 'LI', {}));
        var Go = k(ns);
        $s = d(Go, 'CODE', {});
        var tl = k($s);
        (Et = h(tl, 'foregroundProps')),
          tl.forEach(r),
          ($t = h(Go, ' An object of props given to foreground component')),
          Go.forEach(r),
          vn.forEach(r),
          (St = $(_)),
          (Ss = d(_, 'P', {}));
        var al = k(Ss);
        Ps = d(al, 'CODE', {});
        var ol = k(Ps);
        (Pt = h(ol, 'backgroundSize')),
          ol.forEach(r),
          al.forEach(r),
          (Ct = $(_)),
          (Cs = d(_, 'UL', {}));
        var ll = k(Cs);
        G = d(ll, 'LI', {});
        var Q = k(G);
        (It = h(
          Q,
          'Adjusts the size of the background graphic by passing a class name corresponding to one of our well widths: '
        )),
          (Is = d(Q, 'CODE', {}));
        var pl = k(Is);
        (Lt = h(pl, 'normal')),
          pl.forEach(r),
          (Dt = h(Q, ', ')),
          (Ls = d(Q, 'CODE', {}));
        var rl = k(Ls);
        (Ot = h(rl, 'wide')),
          rl.forEach(r),
          (Tt = h(Q, ', ')),
          (Ds = d(Q, 'CODE', {}));
        var cl = k(Ds);
        (jt = h(cl, 'wider')),
          cl.forEach(r),
          (zt = h(Q, ', ')),
          (Os = d(Q, 'CODE', {}));
        var il = k(Os);
        (Bt = h(il, 'widest')),
          il.forEach(r),
          (Gt = h(Q, ' or ')),
          (Ts = d(Q, 'CODE', {}));
        var ul = k(Ts);
        (Nt = h(ul, 'fluid')),
          ul.forEach(r),
          (Mt = h(Q, '.')),
          Q.forEach(r),
          ll.forEach(r),
          _.forEach(r),
          (Ce = $(u)),
          (Ln = d(u, 'PRE', { class: !0 }));
        var jp = k(Ln);
        jp.forEach(r),
          (Ie = $(u)),
          z(rn.$$.fragment, u),
          (Le = $(u)),
          (M = d(u, 'SECTION', {}));
        var W = k(M);
        Dn = d(W, 'P', {});
        var Ze = k(Dn);
        (Rt = h(Ze, 'Control the layout of your component with the ')),
          (js = d(Ze, 'CODE', {}));
        var fl = k(js);
        (At = h(fl, 'foregroundPosition')),
          fl.forEach(r),
          (Ut = h(Ze, ' prop.')),
          Ze.forEach(r),
          (Vt = $(W)),
          (zs = d(W, 'P', {}));
        var dl = k(zs);
        Bs = d(dl, 'CODE', {});
        var kl = k(Bs);
        (Ht = h(kl, 'foregroundPosition')),
          kl.forEach(r),
          dl.forEach(r),
          (Ft = $(W)),
          (U = d(W, 'UL', {}));
        var X = k(U);
        On = d(X, 'LI', {});
        var xe = k(On);
        Gs = d(xe, 'CODE', {});
        var gl = k(Gs);
        (qt = h(gl, 'middle')),
          gl.forEach(r),
          (Qt = h(xe, ' Text and graphic middle ')),
          (Ns = d(xe, 'EM', {}));
        var ml = k(Ns);
        (Yt = h(ml, 'default')),
          ml.forEach(r),
          xe.forEach(r),
          (Jt = $(X)),
          (ss = d(X, 'LI', {}));
        var No = k(ss);
        Ms = d(No, 'CODE', {});
        var hl = k(Ms);
        (Kt = h(hl, 'left')),
          hl.forEach(r),
          (Wt = h(No, ' Text to left, graphic stays middle')),
          No.forEach(r),
          (Xt = $(X)),
          (es = d(X, 'LI', {}));
        var Mo = k(es);
        Rs = d(Mo, 'CODE', {});
        var _l = k(Rs);
        (Zt = h(_l, 'right')),
          _l.forEach(r),
          (xt = h(Mo, ' Text to right, graphic stays middle')),
          Mo.forEach(r),
          (na = $(X)),
          (ts = d(X, 'LI', {}));
        var Ro = k(ts);
        As = d(Ro, 'CODE', {});
        var bl = k(As);
        (sa = h(bl, 'left opposite')),
          bl.forEach(r),
          (ea = h(Ro, ' Text to left, graphic to right')),
          Ro.forEach(r),
          (ta = $(X)),
          (as = d(X, 'LI', {}));
        var Ao = k(as);
        Us = d(Ao, 'CODE', {});
        var vl = k(Us);
        (aa = h(vl, 'right opposite')),
          vl.forEach(r),
          (oa = h(Ao, ' Text to right, graphic to left')),
          Ao.forEach(r),
          X.forEach(r),
          (la = $(W)),
          (Vs = d(W, 'P', {}));
        var wl = k(Vs);
        (pa = h(
          wl,
          'Both text and graphic will revert to the middle when the window drops below 1200px.'
        )),
          wl.forEach(r),
          (ra = $(W)),
          (F = d(W, 'P', {}));
        var pn = k(F);
        Hs = d(pn, 'STRONG', {});
        var yl = k(Hs);
        (ca = h(yl, 'Note:')),
          yl.forEach(r),
          (ia = h(pn, ' Make sure your ')),
          (Fs = d(pn, 'CODE', {}));
        var El = k(Fs);
        (ua = h(El, 'backgroundSize')),
          El.forEach(r),
          (fa = h(pn, ' prop is ')),
          (qs = d(pn, 'EM', {}));
        var $l = k(qs);
        (da = h($l, 'not')),
          $l.forEach(r),
          (ka = h(pn, ' set to ')),
          (Qs = d(pn, 'CODE', {}));
        var Sl = k(Qs);
        (ga = h(Sl, 'fluid')),
          Sl.forEach(r),
          (ma = h(pn, ' if using either left or right opposite option.')),
          pn.forEach(r),
          W.forEach(r),
          (De = $(u)),
          (Tn = d(u, 'PRE', { class: !0 }));
        var zp = k(Tn);
        zp.forEach(r),
          (Oe = $(u)),
          z(cn.$$.fragment, u),
          (Te = $(u)),
          (q = d(u, 'SECTION', {}));
        var wn = k(q);
        Ys = d(wn, 'P', {});
        var Pl = k(Ys);
        Js = d(Pl, 'CODE', {});
        var Cl = k(Js);
        (ha = h(Cl, 'stackBackground')),
          Cl.forEach(r),
          Pl.forEach(r),
          (_a = $(wn)),
          (tn = d(wn, 'UL', {}));
        var fs = k(tn);
        Ks = d(fs, 'LI', {});
        var Il = k(Ks);
        (ba = h(
          Il,
          'Determines whether previous background step graphics will stack below current one.'
        )),
          Il.forEach(r),
          (va = $(fs)),
          (un = d(fs, 'LI', {}));
        var Pe = k(un);
        Ws = d(Pe, 'CODE', {});
        var Ll = k(Ws);
        (wa = h(Ll, 'true')),
          Ll.forEach(r),
          (ya = $(Pe)),
          (Xs = d(Pe, 'EM', {}));
        var Dl = k(Xs);
        (Ea = h(Dl, 'default')),
          Dl.forEach(r),
          ($a = h(
            Pe,
            ' Background graphics from previous steps will remain visible below active one, allowing you to stack graphics with transparent backgrounds.'
          )),
          Pe.forEach(r),
          (Sa = $(fs)),
          (os = d(fs, 'LI', {}));
        var Uo = k(os);
        Zs = d(Uo, 'CODE', {});
        var Ol = k(Zs);
        (Pa = h(Ol, 'false')),
          Ol.forEach(r),
          (Ca = h(
            Uo,
            ' Only the background graphic from the current step will show and backgrounds from previous steps are hidden.'
          )),
          Uo.forEach(r),
          fs.forEach(r),
          (Ia = $(wn)),
          (xs = d(wn, 'P', {}));
        var Tl = k(xs);
        ne = d(Tl, 'CODE', {});
        var jl = k(ne);
        (La = h(jl, 'preload')),
          jl.forEach(r),
          Tl.forEach(r),
          (Da = $(wn)),
          (an = d(wn, 'UL', {}));
        var ds = k(an);
        se = d(ds, 'LI', {});
        var zl = k(se);
        (Oa = h(
          zl,
          'Determines how many background steps to load before and after the currently active one. This prop basically lazyloads backgrounds, which is useful for making sure you\u2019re not loading too many images at once for long scrolls.'
        )),
          zl.forEach(r),
          (Ta = $(ds)),
          (jn = d(ds, 'LI', {}));
        var nt = k(jn);
        (ja = h(nt, 'Default is ')), (ee = d(nt, 'CODE', {}));
        var Bl = k(ee);
        (za = h(Bl, '1')),
          Bl.forEach(r),
          (Ba = h(
            nt,
            ', which loads one background before and one after the currently active one.'
          )),
          nt.forEach(r),
          (Ga = $(ds)),
          (ls = d(ds, 'LI', {}));
        var Vo = k(ls);
        te = d(Vo, 'CODE', {});
        var Gl = k(te);
        (Na = h(Gl, '0')),
          Gl.forEach(r),
          (Ma = h(
            Vo,
            ' disables lazyloading and loads all backgrounds at once.'
          )),
          Vo.forEach(r),
          ds.forEach(r),
          wn.forEach(r),
          (je = $(u)),
          (zn = d(u, 'PRE', { class: !0 }));
        var Bp = k(zn);
        Bp.forEach(r),
          (ze = $(u)),
          z(fn.$$.fragment, u),
          (Be = $(u)),
          (ps = d(u, 'SECTION', {}));
        var Nl = k(ps);
        J = d(Nl, 'P', {});
        var yn = k(J);
        (Ra = h(yn, 'Pass a component to ')), (ae = d(yn, 'CODE', {}));
        var Ml = k(ae);
        (Aa = h(Ml, 'foreground')),
          Ml.forEach(r),
          (Ua = h(yn, ' and use ')),
          (oe = d(yn, 'CODE', {}));
        var Rl = k(oe);
        (Va = h(Rl, 'backgroundProps')),
          Rl.forEach(r),
          (Ha = h(yn, ' and ')),
          (le = d(yn, 'CODE', {}));
        var Al = k(le);
        (Fa = h(Al, 'foregroundProps')),
          Al.forEach(r),
          (qa = h(yn, ' to pass data to your components.')),
          yn.forEach(r),
          Nl.forEach(r),
          (Ge = $(u)),
          (Bn = d(u, 'PRE', { class: !0 }));
        var Gp = k(Bn);
        Gp.forEach(r),
          (Ne = $(u)),
          z(dn.$$.fragment, u),
          (Me = $(u)),
          (kn = d(u, 'SECTION', {}));
        var st = k(kn);
        Gn = d(st, 'P', {});
        var et = k(Gn);
        (Qa = h(et, 'Add an ID to your scroller and use SCSS ')),
          (pe = d(et, 'CODE', {}));
        var Ul = k(pe);
        (Ya = h(Ul, ':global')),
          Ul.forEach(r),
          (Ja = h(et, ' rules to override any styles.')),
          et.forEach(r),
          (Ka = $(st)),
          (gn = d(st, 'SECTION', { class: !0 }));
        var tt = k(gn);
        re = d(tt, 'P', {});
        var Vl = k(re);
        (Wa = h(
          Vl,
          'This is the main way you should customise this component for any layouts not covered by the props we\u2019ve already mentioned. Most small layout shifts can be handled with simple SCSS. Check out the component in your browser\u2019s inspector to find which elements you want to target with custom styles.'
        )),
          Vl.forEach(r),
          (Xa = $(tt)),
          (Nn = d(tt, 'P', {}));
        var at = k(Nn);
        (Za = h(
          at,
          'If you\u2019re still struggling to make this component work for your design, it may be a good sign you should reach for '
        )),
          (Mn = d(at, 'A', { href: !0, rel: !0 }));
        var Hl = k(Mn);
        (xa = h(Hl, 'svelte-scroller')),
          Hl.forEach(r),
          (no = h(at, ' instead.')),
          at.forEach(r),
          tt.forEach(r),
          st.forEach(r),
          (Re = $(u)),
          (Rn = d(u, 'PRE', { class: !0 }));
        var Np = k(Rn);
        Np.forEach(r),
          (Ae = $(u)),
          z(mn.$$.fragment, u),
          (Ue = $(u)),
          (hn = d(u, 'SECTION', {}));
        var ot = k(hn);
        on = d(ot, 'P', {});
        var ks = k(on);
        (so = h(
          ks,
          'You can also use this component to layout an AI-based graphics scroller via an '
        )),
          (An = d(ks, 'A', { href: !0, rel: !0 }));
        var Fl = k(An);
        (eo = h(Fl, 'ArchieML')),
          Fl.forEach(r),
          (to = h(
            ks,
            '-formatted Google doc by using the following pattern to dynamically import '
          )),
          (Un = d(ks, 'A', { href: !0, rel: !0 }));
        var ql = k(Un);
        (ao = h(ql, 'ai2svelte')),
          ql.forEach(r),
          (oo = h(ks, ' components for the background:')),
          ks.forEach(r),
          (lo = $(ot)),
          (rs = d(ot, 'SECTION', { class: !0 }));
        var Ql = k(rs);
        Vn = d(Ql, 'P', {});
        var lt = k(Vn);
        (po = h(lt, 'If you\u2019re using the ')),
          (Hn = d(lt, 'A', { href: !0, rel: !0 }));
        var Yl = k(Hn);
        (ro = h(Yl, 'graphics kit')),
          Yl.forEach(r),
          (co = h(
            lt,
            ', this pattern is already wired up in the boilerplate included in the Page.svelte component. Free money!'
          )),
          lt.forEach(r),
          Ql.forEach(r),
          ot.forEach(r),
          (Ve = $(u)),
          (Fn = d(u, 'PRE', { class: !0 }));
        var Mp = k(Fn);
        Mp.forEach(r), (He = $(u)), (qn = d(u, 'PRE', { class: !0 }));
        var Rp = k(qn);
        Rp.forEach(r), (Fe = $(u)), (cs = d(u, 'SECTION', {}));
        var Jl = k(cs);
        ln = d(Jl, 'P', {});
        var gs = k(ln);
        (io = h(
          gs,
          'This pattern comes with some restrictions, though. Be sure your '
        )),
          (ce = d(gs, 'CODE', {}));
        var Kl = k(ce);
        (uo = h(Kl, 'fetchComponent')),
          Kl.forEach(r),
          (fo = h(gs, ' function follows ')),
          (Qn = d(gs, 'A', { href: !0, rel: !0 }));
        var Wl = k(Qn);
        (ko = h(Wl, 'the limits on dynamic imports')),
          Wl.forEach(r),
          (go = h(gs, '.')),
          gs.forEach(r),
          Jl.forEach(r),
          (qe = $(u)),
          z(_n.$$.fragment, u),
          (Qe = $(u)),
          (R = d(u, 'SECTION', {}));
        var Z = k(R);
        ie = d(Z, 'P', {});
        var Xl = k(ie);
        (mo = h(
          Xl,
          'This component can also unravel the scrolling experience into a flat, linear layout. Use this when the graphic will be embedded in an iframe.'
        )),
          Xl.forEach(r),
          (ho = $(Z)),
          (ue = d(Z, 'P', {}));
        var Zl = k(ue);
        fe = d(Zl, 'CODE', {});
        var xl = k(fe);
        (_o = h(xl, 'embedded')),
          xl.forEach(r),
          Zl.forEach(r),
          (bo = $(Z)),
          (de = d(Z, 'UL', {}));
        var np = k(de);
        K = d(np, 'LI', {});
        var En = k(K);
        (vo = h(En, 'Setting to ')), (ke = d(En, 'CODE', {}));
        var sp = k(ke);
        (wo = h(sp, 'true')),
          sp.forEach(r),
          (yo = h(
            En,
            ' will unroll the scroll experience into a flat layout. '
          )),
          (ge = d(En, 'CODE', {}));
        var ep = k(ge);
        (Eo = h(ep, 'true')),
          ep.forEach(r),
          ($o = h(En, ' will also cause the ')),
          (me = d(En, 'CODE', {}));
        var tp = k(me);
        (So = h(tp, 'foregroundPosition')),
          tp.forEach(r),
          (Po = h(
            En,
            ' prop to be ignored. (Use global SCSS to adjust the style of foreground text.)'
          )),
          En.forEach(r),
          np.forEach(r),
          (Co = $(Z)),
          (he = d(Z, 'P', {}));
        var ap = k(he);
        _e = d(ap, 'CODE', {});
        var op = k(_e);
        (Io = h(op, 'embeddedLayout')),
          op.forEach(r),
          ap.forEach(r),
          (Lo = $(Z)),
          (Yn = d(Z, 'UL', {}));
        var pt = k(Yn);
        is = d(pt, 'LI', {});
        var Ho = k(is);
        be = d(Ho, 'CODE', {});
        var lp = k(be);
        (Do = h(lp, 'fb')),
          lp.forEach(r),
          (Oo = h(
            Ho,
            ' (default) will layout the foreground before the background in each step.'
          )),
          Ho.forEach(r),
          (To = $(pt)),
          (us = d(pt, 'LI', {}));
        var Fo = k(us);
        ve = d(Fo, 'CODE', {});
        var pp = k(ve);
        (jo = h(pp, 'bf')),
          pp.forEach(r),
          (zo = h(Fo, ' will lead with the background in each step.')),
          Fo.forEach(r),
          pt.forEach(r),
          Z.forEach(r),
          (Ye = $(u)),
          (Jn = d(u, 'PRE', { class: !0 }));
        var Ap = k(Jn);
        Ap.forEach(r), (Je = $(u)), z(bn.$$.fragment, u), this.h();
      },
      h() {
        y(w, 'href', 'https://github.com/sveltejs/svelte-scroller'),
          y(w, 'rel', 'nofollow'),
          y(l, 'class', 'note'),
          y(Ln, 'class', 'language-svelte'),
          y(Tn, 'class', 'language-svelte'),
          y(zn, 'class', 'language-svelte'),
          y(Bn, 'class', 'language-svelte'),
          y(Mn, 'href', 'https://github.com/sveltejs/svelte-scroller'),
          y(Mn, 'rel', 'nofollow'),
          y(gn, 'class', 'note'),
          y(Rn, 'class', 'language-svelte'),
          y(An, 'href', 'http://archieml.org/'),
          y(An, 'rel', 'nofollow'),
          y(Un, 'href', 'https://github.com/reuters-graphics/ai2svelte'),
          y(Un, 'rel', 'nofollow'),
          y(
            Hn,
            'href',
            'https://github.com/reuters-graphics/bluprint_graphics-kit'
          ),
          y(Hn, 'rel', 'nofollow'),
          y(rs, 'class', 'note'),
          y(Fn, 'class', 'language-bash'),
          y(qn, 'class', 'language-svelte'),
          y(
            Qn,
            'href',
            'https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations'
          ),
          y(Qn, 'rel', 'nofollow'),
          y(Jn, 'class', 'language-svelte');
      },
      m(u, _) {
        b(u, n, _),
          a(n, e),
          a(e, s),
          a(n, t),
          a(n, c),
          a(c, o),
          a(n, i),
          a(n, l),
          a(l, g),
          a(g, v),
          a(g, w),
          a(w, S),
          a(g, L),
          a(n, A),
          a(n, N),
          a(N, en),
          a(en, Sn),
          a(N, hs),
          a(N, Pn),
          a(Pn, _s),
          a(n, D),
          a(n, Y),
          a(Y, Cn),
          a(Cn, bs),
          a(bs, ft),
          a(Cn, dt),
          a(Cn, vs),
          a(vs, kt),
          a(Y, gt),
          a(Y, xn),
          a(xn, ws),
          a(ws, mt),
          a(xn, ht),
          a(Y, _t),
          a(Y, In),
          a(In, ys),
          a(ys, bt),
          a(In, vt),
          a(In, Es),
          a(Es, wt),
          a(Y, yt),
          a(Y, ns),
          a(ns, $s),
          a($s, Et),
          a(ns, $t),
          a(n, St),
          a(n, Ss),
          a(Ss, Ps),
          a(Ps, Pt),
          a(n, Ct),
          a(n, Cs),
          a(Cs, G),
          a(G, It),
          a(G, Is),
          a(Is, Lt),
          a(G, Dt),
          a(G, Ls),
          a(Ls, Ot),
          a(G, Tt),
          a(G, Ds),
          a(Ds, jt),
          a(G, zt),
          a(G, Os),
          a(Os, Bt),
          a(G, Gt),
          a(G, Ts),
          a(Ts, Nt),
          a(G, Mt),
          b(u, Ce, _),
          b(u, Ln, _),
          (Ln.innerHTML = Sp),
          b(u, Ie, _),
          j(rn, u, _),
          b(u, Le, _),
          b(u, M, _),
          a(M, Dn),
          a(Dn, Rt),
          a(Dn, js),
          a(js, At),
          a(Dn, Ut),
          a(M, Vt),
          a(M, zs),
          a(zs, Bs),
          a(Bs, Ht),
          a(M, Ft),
          a(M, U),
          a(U, On),
          a(On, Gs),
          a(Gs, qt),
          a(On, Qt),
          a(On, Ns),
          a(Ns, Yt),
          a(U, Jt),
          a(U, ss),
          a(ss, Ms),
          a(Ms, Kt),
          a(ss, Wt),
          a(U, Xt),
          a(U, es),
          a(es, Rs),
          a(Rs, Zt),
          a(es, xt),
          a(U, na),
          a(U, ts),
          a(ts, As),
          a(As, sa),
          a(ts, ea),
          a(U, ta),
          a(U, as),
          a(as, Us),
          a(Us, aa),
          a(as, oa),
          a(M, la),
          a(M, Vs),
          a(Vs, pa),
          a(M, ra),
          a(M, F),
          a(F, Hs),
          a(Hs, ca),
          a(F, ia),
          a(F, Fs),
          a(Fs, ua),
          a(F, fa),
          a(F, qs),
          a(qs, da),
          a(F, ka),
          a(F, Qs),
          a(Qs, ga),
          a(F, ma),
          b(u, De, _),
          b(u, Tn, _),
          (Tn.innerHTML = Pp),
          b(u, Oe, _),
          j(cn, u, _),
          b(u, Te, _),
          b(u, q, _),
          a(q, Ys),
          a(Ys, Js),
          a(Js, ha),
          a(q, _a),
          a(q, tn),
          a(tn, Ks),
          a(Ks, ba),
          a(tn, va),
          a(tn, un),
          a(un, Ws),
          a(Ws, wa),
          a(un, ya),
          a(un, Xs),
          a(Xs, Ea),
          a(un, $a),
          a(tn, Sa),
          a(tn, os),
          a(os, Zs),
          a(Zs, Pa),
          a(os, Ca),
          a(q, Ia),
          a(q, xs),
          a(xs, ne),
          a(ne, La),
          a(q, Da),
          a(q, an),
          a(an, se),
          a(se, Oa),
          a(an, Ta),
          a(an, jn),
          a(jn, ja),
          a(jn, ee),
          a(ee, za),
          a(jn, Ba),
          a(an, Ga),
          a(an, ls),
          a(ls, te),
          a(te, Na),
          a(ls, Ma),
          b(u, je, _),
          b(u, zn, _),
          (zn.innerHTML = Cp),
          b(u, ze, _),
          j(fn, u, _),
          b(u, Be, _),
          b(u, ps, _),
          a(ps, J),
          a(J, Ra),
          a(J, ae),
          a(ae, Aa),
          a(J, Ua),
          a(J, oe),
          a(oe, Va),
          a(J, Ha),
          a(J, le),
          a(le, Fa),
          a(J, qa),
          b(u, Ge, _),
          b(u, Bn, _),
          (Bn.innerHTML = Ip),
          b(u, Ne, _),
          j(dn, u, _),
          b(u, Me, _),
          b(u, kn, _),
          a(kn, Gn),
          a(Gn, Qa),
          a(Gn, pe),
          a(pe, Ya),
          a(Gn, Ja),
          a(kn, Ka),
          a(kn, gn),
          a(gn, re),
          a(re, Wa),
          a(gn, Xa),
          a(gn, Nn),
          a(Nn, Za),
          a(Nn, Mn),
          a(Mn, xa),
          a(Nn, no),
          b(u, Re, _),
          b(u, Rn, _),
          (Rn.innerHTML = Lp),
          b(u, Ae, _),
          j(mn, u, _),
          b(u, Ue, _),
          b(u, hn, _),
          a(hn, on),
          a(on, so),
          a(on, An),
          a(An, eo),
          a(on, to),
          a(on, Un),
          a(Un, ao),
          a(on, oo),
          a(hn, lo),
          a(hn, rs),
          a(rs, Vn),
          a(Vn, po),
          a(Vn, Hn),
          a(Hn, ro),
          a(Vn, co),
          b(u, Ve, _),
          b(u, Fn, _),
          (Fn.innerHTML = Dp),
          b(u, He, _),
          b(u, qn, _),
          (qn.innerHTML = Op),
          b(u, Fe, _),
          b(u, cs, _),
          a(cs, ln),
          a(ln, io),
          a(ln, ce),
          a(ce, uo),
          a(ln, fo),
          a(ln, Qn),
          a(Qn, ko),
          a(ln, go),
          b(u, qe, _),
          j(_n, u, _),
          b(u, Qe, _),
          b(u, R, _),
          a(R, ie),
          a(ie, mo),
          a(R, ho),
          a(R, ue),
          a(ue, fe),
          a(fe, _o),
          a(R, bo),
          a(R, de),
          a(de, K),
          a(K, vo),
          a(K, ke),
          a(ke, wo),
          a(K, yo),
          a(K, ge),
          a(ge, Eo),
          a(K, $o),
          a(K, me),
          a(me, So),
          a(K, Po),
          a(R, Co),
          a(R, he),
          a(he, _e),
          a(_e, Io),
          a(R, Lo),
          a(R, Yn),
          a(Yn, is),
          a(is, be),
          a(be, Do),
          a(is, Oo),
          a(Yn, To),
          a(Yn, us),
          a(us, ve),
          a(ve, jo),
          a(us, zo),
          b(u, Ye, _),
          b(u, Jn, _),
          (Jn.innerHTML = Tp),
          b(u, Je, _),
          j(bn, u, _),
          (Ke = !0);
      },
      p(u, [_]) {
        const we = {};
        _ & 128 && (we.$$scope = { dirty: _, ctx: u }), rn.$set(we);
        const ye = {};
        _ & 128 && (ye.$$scope = { dirty: _, ctx: u }), cn.$set(ye);
        const Ee = {};
        _ & 128 && (Ee.$$scope = { dirty: _, ctx: u }), fn.$set(Ee);
        const Kn = {};
        _ & 128 && (Kn.$$scope = { dirty: _, ctx: u }), dn.$set(Kn);
        const $e = {};
        _ & 128 && ($e.$$scope = { dirty: _, ctx: u }), mn.$set($e);
        const Wn = {};
        _ & 128 && (Wn.$$scope = { dirty: _, ctx: u }), _n.$set(Wn);
        const Se = {};
        _ & 128 && (Se.$$scope = { dirty: _, ctx: u }), bn.$set(Se);
      },
      i(u) {
        Ke ||
          (P(rn.$$.fragment, u),
          P(cn.$$.fragment, u),
          P(fn.$$.fragment, u),
          P(dn.$$.fragment, u),
          P(mn.$$.fragment, u),
          P(_n.$$.fragment, u),
          P(bn.$$.fragment, u),
          (Ke = !0));
      },
      o(u) {
        C(rn.$$.fragment, u),
          C(cn.$$.fragment, u),
          C(fn.$$.fragment, u),
          C(dn.$$.fragment, u),
          C(mn.$$.fragment, u),
          C(_n.$$.fragment, u),
          C(bn.$$.fragment, u),
          (Ke = !1);
      },
      d(u) {
        u && r(n),
          u && r(Ce),
          u && r(Ln),
          u && r(Ie),
          O(rn, u),
          u && r(Le),
          u && r(M),
          u && r(De),
          u && r(Tn),
          u && r(Oe),
          O(cn, u),
          u && r(Te),
          u && r(q),
          u && r(je),
          u && r(zn),
          u && r(ze),
          O(fn, u),
          u && r(Be),
          u && r(ps),
          u && r(Ge),
          u && r(Bn),
          u && r(Ne),
          O(dn, u),
          u && r(Me),
          u && r(kn),
          u && r(Re),
          u && r(Rn),
          u && r(Ae),
          O(mn, u),
          u && r(Ue),
          u && r(hn),
          u && r(Ve),
          u && r(Fn),
          u && r(He),
          u && r(qn),
          u && r(Fe),
          u && r(cs),
          u && r(qe),
          O(_n, u),
          u && r(Qe),
          u && r(R),
          u && r(Ye),
          u && r(Jn),
          u && r(Je),
          O(bn, u);
      },
    }
  );
}
const Qr = {
    title: 'Scroller',
    description: 'Easy scrollytelling with layout options.',
    slug: 'scroller',
  },
  { title: $p, description: nc, slug: sc } = Qr;
function Yr(p) {
  const n = [
      {
        background: ms,
        backgroundProps: { colour: 'red' },
        foreground: `#### Step 1

Lorem ipsum red`,
      },
      {
        background: ms,
        backgroundProps: { colour: 'blue' },
        foreground: `#### Step 2

Lorem ipsum blue`,
      },
      {
        background: ms,
        backgroundProps: { colour: 'green' },
        foreground: `#### Step 3

Lorem ipsum green`,
      },
    ],
    e = [
      {
        background: Wo,
        backgroundProps: { colour: 'red', i: 0 },
        foreground: `#### Step 1

Lorem ipsum red`,
      },
      {
        background: Wo,
        backgroundProps: { colour: 'blue', i: 1 },
        foreground: `#### Step 2

Lorem ipsum blue`,
      },
      {
        background: Wo,
        backgroundProps: { colour: 'green', i: 2 },
        foreground: `#### Step 3

Lorem ipsum green`,
      },
    ],
    s = [
      { background: ms, backgroundProps: { colour: 'red' }, foreground: Ep },
      {
        background: ms,
        backgroundProps: { colour: 'blue' },
        foreground: `#### Step 2

Lorem ipsum blue`,
      },
      {
        background: ms,
        backgroundProps: { colour: 'green' },
        foreground: Ep,
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
    c = async (i) => (await Or(`./demos/ai2html/${i}.exclude.svelte`)).default;
  return [
    n,
    e,
    s,
    t,
    async (i) => {
      const l = [];
      for (const g of i) {
        const v = await c(g.background);
        l.push(up(ip({}, g), { background: v }));
      }
      return l;
    },
  ];
}
class ec extends x {
  constructor(n) {
    super();
    nn(this, n, Yr, qr, sn, {});
  }
}
export { ec as default, Qr as metadata };
