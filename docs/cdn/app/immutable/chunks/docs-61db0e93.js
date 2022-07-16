var gt = Object.defineProperty,
  kt = Object.defineProperties;
var wt = Object.getOwnPropertyDescriptors;
var He = Object.getOwnPropertySymbols;
var $t = Object.prototype.hasOwnProperty,
  bt = Object.prototype.propertyIsEnumerable;
var De = (a, e, s) =>
    e in a
      ? gt(a, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (a[e] = s),
  Ce = (a, e) => {
    for (var s in e || (e = {})) $t.call(e, s) && De(a, s, e[s]);
    if (He) for (var s of He(e)) bt.call(e, s) && De(a, s, e[s]);
    return a;
  },
  Ne = (a, e) => kt(a, wt(e));
import {
  S as ue,
  i as fe,
  s as he,
  K as te,
  t as O,
  L as se,
  a as d,
  h as q,
  d as u,
  b as c,
  g as I,
  J as f,
  E as W,
  T as Et,
  e as v,
  k as M,
  c as g,
  m as B,
  n as de,
  o as H,
  p as _e,
  q as x,
  j as ve,
  B as re,
  w as ae,
  y as oe,
  _ as ke,
  l as me,
  V as yt,
  x as ce,
  f as we,
  F as Lt,
  G as Ct,
  H as It,
  I as xt,
  v as mt,
  X as At,
  z as St,
  A as Rt,
  C as Tt,
} from './index-83a5d9f9.js';
import { n as K } from './index-c889ff85.js';
import './main-17f5a974.js';
import { D as Ie } from './index-16ec1060.js';
import './paths-396f020f.js';
function Vt(a) {
  let e, s, t, l, n;
  return {
    c() {
      (e = te('svg')),
        (s = te('title')),
        (t = O('Gallery')),
        (l = te('path')),
        (n = te('path')),
        this.h();
    },
    l(i) {
      e = se(i, 'svg', {
        xmlns: !0,
        viewBox: !0,
        role: !0,
        'aria-hidden': !0,
        focusable: !0,
        class: !0,
      });
      var o = d(e);
      s = se(o, 'title', {});
      var r = d(s);
      (t = q(r, 'Gallery')),
        r.forEach(u),
        (l = se(o, 'path', { d: !0 })),
        d(l).forEach(u),
        (n = se(o, 'path', { d: !0 })),
        d(n).forEach(u),
        o.forEach(u),
        this.h();
    },
    h() {
      c(
        l,
        'd',
        'M13.3331429,0.38114286 L2.66628571,0.38114286 C1.37085714,0.38114286 0.38057143,1.37142857 0.38057143,2.66685714 L0.38057143,13.3337143 C0.38057143,14.6291429 1.37085714,15.6194286 2.66628571,15.6194286 L13.3331429,15.6194286 C14.6285714,15.6194286 15.6188571,14.6291429 15.6188571,13.3337143 L15.6188571,2.66685714 C15.6188571,1.37142857 14.6285714,0.38114286 13.3331429,0.38114286 Z M1.90457143,2.66685714 C1.90457143,2.20971429 2.20914286,1.90514286 2.66628571,1.90514286 L13.3331429,1.90514286 C13.7902857,1.90514286 14.0948571,2.20971429 14.0948571,2.66685714 L14.0948571,8.4571429 L11.5805714,5.94285714 C11.276,5.63828571 10.8188571,5.63828571 10.5137143,5.94285714 L2.43771429,14.0188571 C2.13314286,13.9428571 1.90457143,13.6377143 1.90457143,13.3331429 L1.90457143,2.66628571 L1.90457143,2.66685714 Z M13.3331429,14.0954286 L4.49485714,14.0954286 L11.0474286,7.5428571 L14.0948571,10.5902857 L14.0948571,13.3331429 C14.0948571,13.7902857 13.7902857,14.0948571 13.3331429,14.0948571 L13.3331429,14.0954286 Z'
      ),
        c(
          n,
          'd',
          'M5.33314286,7.2382857 C6.4,7.2382857 7.2377143,6.4 7.2377143,5.33371429 C7.2377143,4.26742857 6.3994286,3.42914286 5.33314286,3.42914286 C4.26685714,3.42914286 3.42857143,4.26742857 3.42857143,5.33371429 C3.42857143,6.4 4.26685714,7.2382857 5.33314286,7.2382857 Z M5.33314286,4.95257143 C5.56171429,4.95257143 5.71428571,5.10514286 5.71428571,5.33371429 C5.71428571,5.56228571 5.56171429,5.71485714 5.33314286,5.71485714 C5.10457143,5.71485714 4.952,5.56228571 4.952,5.33371429 C4.952,5.10514286 5.10457143,4.95257143 5.33314286,4.95257143 Z'
        ),
        c(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        c(e, 'viewBox', '0 0 16 16'),
        c(e, 'role', 'img'),
        c(e, 'aria-hidden', 'true'),
        c(e, 'focusable', 'false'),
        c(e, 'class', 'svelte-17648ki');
    },
    m(i, o) {
      I(i, e, o), f(e, s), f(s, t), f(e, l), f(e, n);
    },
    p: W,
    i: W,
    o: W,
    d(i) {
      i && u(e);
    },
  };
}
class Mt extends ue {
  constructor(e) {
    super(), fe(this, e, null, Vt, he, {});
  }
}
function Bt(a) {
  let e, s, t, l;
  return {
    c() {
      (e = te('svg')),
        (s = te('title')),
        (t = O('Pictures')),
        (l = te('path')),
        this.h();
    },
    l(n) {
      e = se(n, 'svg', {
        xmlns: !0,
        viewBox: !0,
        role: !0,
        'aria-hidden': !0,
        focusable: !0,
        class: !0,
      });
      var i = d(e);
      s = se(i, 'title', {});
      var o = d(s);
      (t = q(o, 'Pictures')),
        o.forEach(u),
        (l = se(i, 'path', { d: !0 })),
        d(l).forEach(u),
        i.forEach(u),
        this.h();
    },
    h() {
      c(
        l,
        'd',
        'M13.1256562,0 C13.3881562,0 13.6506562,0.17954776 13.825875,0.3597705 L15.3135937,2.69996625 L18.375,2.69996625 C19.8627187,2.69996625 21,3.8697266 21,5.3999325 L21,15.3000337 C21,16.8302396 19.8627187,18 18.375,18 L2.625,18 C1.13728125,18 0,16.8302396 0,15.3000337 L0,5.3999325 C0,3.8697266 1.13728125,2.69996625 2.625,2.69996625 L5.6877187,2.69996625 L7.1754375,0.3597705 C7.3506562,0.18022275 7.6131562,0 7.8756562,0 L13.1256562,0 Z M12.6013125,1.79952751 L8.3140312,1.79952751 L6.8263125,4.1397233 C6.6510937,4.319271 6.3885937,4.4994938 6.1260937,4.4994938 L2.6263125,4.4994938 C2.1013125,4.4994938 1.75153125,4.8592643 1.75153125,5.3992575 L1.75153125,15.2993588 C1.75153125,15.839352 2.1013125,16.1991225 2.6263125,16.1991225 L18.3763125,16.1991225 C18.9013125,16.1991225 19.2510937,15.839352 19.2510937,15.2993588 L19.2510937,5.3992575 C19.2510937,4.8592643 18.9013125,4.4994938 18.3763125,4.4994938 L14.8765312,4.4994938 C14.6140312,4.4994938 14.3515312,4.319946 14.0890312,4.1397233 L12.6013125,1.79952751 Z M10.5013125,5.3999325 C12.95175,5.3999325 14.8765312,7.3796828 14.8765312,9.9001012 C14.8765312,12.4205197 12.95175,14.40027 10.5013125,14.40027 C8.050875,14.40027 6.1260937,12.4205197 6.1260937,9.9001012 C6.1260937,7.3796828 8.0515312,5.3999325 10.5013125,5.3999325 Z M10.5013125,7.19946 C9.0135937,7.19946 7.8763125,8.3692204 7.8763125,9.8994263 C7.8763125,11.4296321 9.0135937,12.5993925 10.5013125,12.5993925 C11.9890312,12.5993925 13.1263125,11.4296321 13.1263125,9.8994263 C13.1263125,8.3692204 11.9890312,7.19946 10.5013125,7.19946 Z'
      ),
        c(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        c(e, 'viewBox', '0 0 21 18'),
        c(e, 'role', 'img'),
        c(e, 'aria-hidden', 'true'),
        c(e, 'focusable', 'false'),
        c(e, 'class', 'svelte-17648ki');
    },
    m(n, i) {
      I(n, e, i), f(e, s), f(s, t), f(e, l);
    },
    p: W,
    i: W,
    o: W,
    d(n) {
      n && u(e);
    },
  };
}
class Ht extends ue {
  constructor(e) {
    super(), fe(this, e, null, Bt, he, {});
  }
}
function Dt(a) {
  let e, s, t, l;
  return {
    c() {
      (e = te('svg')),
        (s = te('title')),
        (t = O('Videos')),
        (l = te('path')),
        this.h();
    },
    l(n) {
      e = se(n, 'svg', {
        xmlns: !0,
        viewBox: !0,
        role: !0,
        'aria-hidden': !0,
        focusable: !0,
        class: !0,
      });
      var i = d(e);
      s = se(i, 'title', {});
      var o = d(s);
      (t = q(o, 'Videos')),
        o.forEach(u),
        (l = se(i, 'path', { d: !0 })),
        d(l).forEach(u),
        i.forEach(u),
        this.h();
    },
    h() {
      c(
        l,
        'd',
        'M15.6665,1.5665 C15.4665,1.433 15.2,1.5 15,1.633 L11.3335,4.233 L11.3335,2.1665 C11.3335,1.033 10.467,0.1665 9.3335,0.1665 L2,0.1665 C0.8665,0.1665 0,1.033 0,2.1665 L0,8.833 C0,9.9665 0.8665,10.833 2,10.833 L9.3335,10.833 C10.467,10.833 11.3335,9.9665 11.3335,8.833 L11.3335,6.7665 L14.9335,9.3665 C15.067,9.433 15.2,9.5 15.3335,9.5 C15.467,9.5 15.5335,9.5 15.667,9.4335 C15.867,9.3 16.0005,9.1 16.0005,8.8335 L16.0005,2.167 C16.0005,1.9005 15.867,1.7005 15.667,1.567 L15.6665,1.5665 Z M10,8.8335 C10,9.2335 9.7335,9.5 9.3335,9.5 L2,9.5 C1.6,9.5 1.3335,9.2335 1.3335,8.8335 L1.3335,2.167 C1.3335,1.767 1.6,1.5005 2,1.5005 L9.3335,1.5005 C9.7335,1.5005 10,1.767 10,2.167 L10,8.8335 Z M14.6665,7.5665 L11.8,5.5 L14.6665,3.4335 L14.6665,7.567 L14.6665,7.5665 Z'
      ),
        c(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        c(e, 'viewBox', '0 0 16 11'),
        c(e, 'role', 'img'),
        c(e, 'aria-hidden', 'true'),
        c(e, 'focusable', 'false'),
        c(e, 'class', 'svelte-17648ki');
    },
    m(n, i) {
      I(n, e, i), f(e, s), f(s, t), f(e, l);
    },
    p: W,
    i: W,
    o: W,
    d(n) {
      n && u(e);
    },
  };
}
class Nt extends ue {
  constructor(e) {
    super(), fe(this, e, null, Dt, he, {});
  }
}
function Ze(a, e, s) {
  const t = a.slice();
  return (t[4] = e[s]), t;
}
function Oe(a, e, s) {
  const t = a.slice();
  return (t[4] = e[s]), t;
}
function qe(a, e, s) {
  const t = a.slice();
  return (t[4] = e[s]), t;
}
function Fe(a, e, s) {
  const t = a.slice();
  return (t[4] = e[s]), t;
}
function Ue(a, e, s) {
  const t = a.slice();
  return (t[4] = e[s]), t;
}
function je(a, e, s) {
  const t = a.slice();
  return (t[4] = e[s]), t;
}
function Pe(a, e, s) {
  const t = a.slice();
  return (t[4] = e[s]), t;
}
function ze(a) {
  let e,
    s,
    t,
    l,
    n,
    i,
    o,
    r,
    h,
    _,
    p,
    $,
    m,
    E,
    C,
    S,
    T,
    P,
    b,
    F,
    w,
    Z,
    A,
    j,
    U,
    Q,
    D,
    V;
  const z = [Ot, Zt],
    L = [];
  function le(y, X) {
    return y[1] < xe ? 0 : 1;
  }
  (i = le(a)), (o = L[i] = z[i](a));
  let ie = a[0].browse_links,
    G = [];
  for (let y = 0; y < ie.length; y += 1) G[y] = Je(Fe(a, ie, y));
  let k = a[1] >= xe && Ke(a),
    N = a[0].about_links,
    Y = [];
  for (let y = 0; y < N.length; y += 1) Y[y] = Xe(Oe(a, N, y));
  let ne = a[0].stay_informed_links,
    J = [];
  for (let y = 0; y < ne.length; y += 1) J[y] = et(Ze(a, ne, y));
  return {
    c() {
      (e = v('section')),
        (s = v('h2')),
        (t = O('Site Index')),
        (l = M()),
        (n = v('div')),
        o.c(),
        (r = M()),
        (h = v('section')),
        (_ = v('h3')),
        (p = O('Browse')),
        ($ = M()),
        (m = v('ul'));
      for (let y = 0; y < G.length; y += 1) G[y].c();
      (E = M()),
        k && k.c(),
        (C = M()),
        (S = v('div')),
        (T = v('section')),
        (P = v('h3')),
        (b = O('About Reuters')),
        (F = M()),
        (w = v('ul'));
      for (let y = 0; y < Y.length; y += 1) Y[y].c();
      (Z = M()),
        (A = v('section')),
        (j = v('h3')),
        (U = O('Stay Informed')),
        (Q = M()),
        (D = v('ul'));
      for (let y = 0; y < J.length; y += 1) J[y].c();
      this.h();
    },
    l(y) {
      e = g(y, 'SECTION', { class: !0 });
      var X = d(e);
      s = g(X, 'H2', { class: !0 });
      var ee = d(s);
      (t = q(ee, 'Site Index')),
        ee.forEach(u),
        (l = B(X)),
        (n = g(X, 'DIV', { class: !0 }));
      var R = d(n);
      o.l(R), (r = B(R)), (h = g(R, 'SECTION', { class: !0 }));
      var pe = d(h);
      _ = g(pe, 'H3', { class: !0 });
      var $e = d(_);
      (p = q($e, 'Browse')),
        $e.forEach(u),
        ($ = B(pe)),
        (m = g(pe, 'UL', { class: !0 }));
      var be = d(m);
      for (let ge = 0; ge < G.length; ge += 1) G[ge].l(be);
      be.forEach(u),
        pe.forEach(u),
        (E = B(R)),
        k && k.l(R),
        (C = B(R)),
        (S = g(R, 'DIV', { class: !0 }));
      var Ee = d(S);
      T = g(Ee, 'SECTION', { class: !0 });
      var ye = d(T);
      P = g(ye, 'H3', { class: !0 });
      var Te = d(P);
      (b = q(Te, 'About Reuters')),
        Te.forEach(u),
        (F = B(ye)),
        (w = g(ye, 'UL', { class: !0 }));
      var Ve = d(w);
      for (let ge = 0; ge < Y.length; ge += 1) Y[ge].l(Ve);
      Ve.forEach(u),
        ye.forEach(u),
        (Z = B(Ee)),
        (A = g(Ee, 'SECTION', { class: !0 }));
      var Le = d(A);
      j = g(Le, 'H3', { class: !0 });
      var Me = d(j);
      (U = q(Me, 'Stay Informed')),
        Me.forEach(u),
        (Q = B(Le)),
        (D = g(Le, 'UL', { class: !0 }));
      var Be = d(D);
      for (let ge = 0; ge < J.length; ge += 1) J[ge].l(Be);
      Be.forEach(u),
        Le.forEach(u),
        Ee.forEach(u),
        R.forEach(u),
        X.forEach(u),
        this.h();
    },
    h() {
      c(s, 'class', 'visually-hidden svelte-fhk6t1'),
        c(_, 'class', 'svelte-fhk6t1'),
        c(m, 'class', 'svelte-fhk6t1'),
        c(h, 'class', 'link-group svelte-fhk6t1'),
        c(P, 'class', 'svelte-fhk6t1'),
        c(w, 'class', 'svelte-fhk6t1'),
        c(T, 'class', 'about'),
        c(j, 'class', 'svelte-fhk6t1'),
        c(D, 'class', 'svelte-fhk6t1'),
        c(A, 'class', 'stay-informed svelte-fhk6t1'),
        c(S, 'class', 'about-and-stay-informed svelte-fhk6t1'),
        c(n, 'class', 'content-container svelte-fhk6t1'),
        c(e, 'class', 'quick-links svelte-fhk6t1');
    },
    m(y, X) {
      I(y, e, X),
        f(e, s),
        f(s, t),
        f(e, l),
        f(e, n),
        L[i].m(n, null),
        f(n, r),
        f(n, h),
        f(h, _),
        f(_, p),
        f(h, $),
        f(h, m);
      for (let ee = 0; ee < G.length; ee += 1) G[ee].m(m, null);
      f(n, E),
        k && k.m(n, null),
        f(n, C),
        f(n, S),
        f(S, T),
        f(T, P),
        f(P, b),
        f(T, F),
        f(T, w);
      for (let ee = 0; ee < Y.length; ee += 1) Y[ee].m(w, null);
      f(S, Z), f(S, A), f(A, j), f(j, U), f(A, Q), f(A, D);
      for (let ee = 0; ee < J.length; ee += 1) J[ee].m(D, null);
      V = !0;
    },
    p(y, X) {
      let ee = i;
      if (
        ((i = le(y)),
        i === ee
          ? L[i].p(y, X)
          : (de(),
            H(L[ee], 1, 1, () => {
              L[ee] = null;
            }),
            _e(),
            (o = L[i]),
            o ? o.p(y, X) : ((o = L[i] = z[i](y)), o.c()),
            x(o, 1),
            o.m(n, r)),
        X & 1)
      ) {
        ie = y[0].browse_links;
        let R;
        for (R = 0; R < ie.length; R += 1) {
          const pe = Fe(y, ie, R);
          G[R] ? G[R].p(pe, X) : ((G[R] = Je(pe)), G[R].c(), G[R].m(m, null));
        }
        for (; R < G.length; R += 1) G[R].d(1);
        G.length = ie.length;
      }
      if (
        (y[1] >= xe
          ? k
            ? (k.p(y, X), X & 2 && x(k, 1))
            : ((k = Ke(y)), k.c(), x(k, 1), k.m(n, C))
          : k &&
            (de(),
            H(k, 1, 1, () => {
              k = null;
            }),
            _e()),
        X & 1)
      ) {
        N = y[0].about_links;
        let R;
        for (R = 0; R < N.length; R += 1) {
          const pe = Oe(y, N, R);
          Y[R] ? Y[R].p(pe, X) : ((Y[R] = Xe(pe)), Y[R].c(), Y[R].m(w, null));
        }
        for (; R < Y.length; R += 1) Y[R].d(1);
        Y.length = N.length;
      }
      if (X & 1) {
        ne = y[0].stay_informed_links;
        let R;
        for (R = 0; R < ne.length; R += 1) {
          const pe = Ze(y, ne, R);
          J[R] ? J[R].p(pe, X) : ((J[R] = et(pe)), J[R].c(), J[R].m(D, null));
        }
        for (; R < J.length; R += 1) J[R].d(1);
        J.length = ne.length;
      }
    },
    i(y) {
      V || (x(o), x(k), (V = !0));
    },
    o(y) {
      H(o), H(k), (V = !1);
    },
    d(y) {
      y && u(e), L[i].d(), ke(G, y), k && k.d(), ke(Y, y), ke(J, y);
    },
  };
}
function Zt(a) {
  let e,
    s,
    t,
    l,
    n,
    i = a[0].latest_links,
    o = [];
  for (let r = 0; r < i.length; r += 1) o[r] = Ge(Ue(a, i, r));
  return {
    c() {
      (e = v('section')),
        (s = v('h3')),
        (t = O('Latest')),
        (l = M()),
        (n = v('ul'));
      for (let r = 0; r < o.length; r += 1) o[r].c();
      this.h();
    },
    l(r) {
      e = g(r, 'SECTION', { class: !0 });
      var h = d(e);
      s = g(h, 'H3', { class: !0 });
      var _ = d(s);
      (t = q(_, 'Latest')),
        _.forEach(u),
        (l = B(h)),
        (n = g(h, 'UL', { class: !0 }));
      var p = d(n);
      for (let $ = 0; $ < o.length; $ += 1) o[$].l(p);
      p.forEach(u), h.forEach(u), this.h();
    },
    h() {
      c(s, 'class', 'svelte-fhk6t1'),
        c(n, 'class', 'svelte-fhk6t1'),
        c(e, 'class', 'link-group svelte-fhk6t1');
    },
    m(r, h) {
      I(r, e, h), f(e, s), f(s, t), f(e, l), f(e, n);
      for (let _ = 0; _ < o.length; _ += 1) o[_].m(n, null);
    },
    p(r, h) {
      if (h & 1) {
        i = r[0].latest_links;
        let _;
        for (_ = 0; _ < i.length; _ += 1) {
          const p = Ue(r, i, _);
          o[_] ? o[_].p(p, h) : ((o[_] = Ge(p)), o[_].c(), o[_].m(n, null));
        }
        for (; _ < o.length; _ += 1) o[_].d(1);
        o.length = i.length;
      }
    },
    i: W,
    o: W,
    d(r) {
      r && u(e), ke(o, r);
    },
  };
}
function Ot(a) {
  let e,
    s,
    t,
    l,
    n,
    i,
    o,
    r,
    h,
    _,
    p,
    $,
    m,
    E = a[0].latest_links,
    C = [];
  for (let b = 0; b < E.length; b += 1) C[b] = We(Pe(a, E, b));
  let S = a[0].media_links,
    T = [];
  for (let b = 0; b < S.length; b += 1) T[b] = Ye(je(a, S, b));
  const P = (b) =>
    H(T[b], 1, 1, () => {
      T[b] = null;
    });
  return {
    c() {
      (e = v('div')),
        (s = v('section')),
        (t = v('h3')),
        (l = O('Latest')),
        (n = M()),
        (i = v('ul'));
      for (let b = 0; b < C.length; b += 1) C[b].c();
      (o = M()),
        (r = v('section')),
        (h = v('h3')),
        (_ = O('Media')),
        (p = M()),
        ($ = v('ul'));
      for (let b = 0; b < T.length; b += 1) T[b].c();
      this.h();
    },
    l(b) {
      e = g(b, 'DIV', { class: !0 });
      var F = d(e);
      s = g(F, 'SECTION', { class: !0 });
      var w = d(s);
      t = g(w, 'H3', { class: !0 });
      var Z = d(t);
      (l = q(Z, 'Latest')),
        Z.forEach(u),
        (n = B(w)),
        (i = g(w, 'UL', { class: !0 }));
      var A = d(i);
      for (let D = 0; D < C.length; D += 1) C[D].l(A);
      A.forEach(u),
        w.forEach(u),
        (o = B(F)),
        (r = g(F, 'SECTION', { class: !0 }));
      var j = d(r);
      h = g(j, 'H3', { class: !0 });
      var U = d(h);
      (_ = q(U, 'Media')),
        U.forEach(u),
        (p = B(j)),
        ($ = g(j, 'UL', { class: !0 }));
      var Q = d($);
      for (let D = 0; D < T.length; D += 1) T[D].l(Q);
      Q.forEach(u), j.forEach(u), F.forEach(u), this.h();
    },
    h() {
      c(t, 'class', 'svelte-fhk6t1'),
        c(i, 'class', 'svelte-fhk6t1'),
        c(s, 'class', 'link-group svelte-fhk6t1'),
        c(h, 'class', 'svelte-fhk6t1'),
        c($, 'class', 'svelte-fhk6t1'),
        c(r, 'class', 'link-group media svelte-fhk6t1'),
        c(e, 'class', 'latest-and-media svelte-fhk6t1');
    },
    m(b, F) {
      I(b, e, F), f(e, s), f(s, t), f(t, l), f(s, n), f(s, i);
      for (let w = 0; w < C.length; w += 1) C[w].m(i, null);
      f(e, o), f(e, r), f(r, h), f(h, _), f(r, p), f(r, $);
      for (let w = 0; w < T.length; w += 1) T[w].m($, null);
      m = !0;
    },
    p(b, F) {
      if (F & 1) {
        E = b[0].latest_links;
        let w;
        for (w = 0; w < E.length; w += 1) {
          const Z = Pe(b, E, w);
          C[w] ? C[w].p(Z, F) : ((C[w] = We(Z)), C[w].c(), C[w].m(i, null));
        }
        for (; w < C.length; w += 1) C[w].d(1);
        C.length = E.length;
      }
      if (F & 5) {
        S = b[0].media_links;
        let w;
        for (w = 0; w < S.length; w += 1) {
          const Z = je(b, S, w);
          T[w]
            ? (T[w].p(Z, F), x(T[w], 1))
            : ((T[w] = Ye(Z)), T[w].c(), x(T[w], 1), T[w].m($, null));
        }
        for (de(), w = S.length; w < T.length; w += 1) P(w);
        _e();
      }
    },
    i(b) {
      if (!m) {
        for (let F = 0; F < S.length; F += 1) x(T[F]);
        m = !0;
      }
    },
    o(b) {
      T = T.filter(Boolean);
      for (let F = 0; F < T.length; F += 1) H(T[F]);
      m = !1;
    },
    d(b) {
      b && u(e), ke(C, b), ke(T, b);
    },
  };
}
function Ge(a) {
  let e,
    s,
    t = a[4].text + '',
    l,
    n,
    i;
  return {
    c() {
      (e = v('li')), (s = v('a')), (l = O(t)), (i = M()), this.h();
    },
    l(o) {
      e = g(o, 'LI', { class: !0 });
      var r = d(e);
      s = g(r, 'A', { href: !0, class: !0 });
      var h = d(s);
      (l = q(h, t)), h.forEach(u), (i = B(r)), r.forEach(u), this.h();
    },
    h() {
      c(s, 'href', (n = K(a[4].url))),
        c(s, 'class', 'svelte-fhk6t1'),
        c(e, 'class', 'svelte-fhk6t1');
    },
    m(o, r) {
      I(o, e, r), f(e, s), f(s, l), f(e, i);
    },
    p(o, r) {
      r & 1 && t !== (t = o[4].text + '') && ve(l, t),
        r & 1 && n !== (n = K(o[4].url)) && c(s, 'href', n);
    },
    d(o) {
      o && u(e);
    },
  };
}
function We(a) {
  let e,
    s,
    t = a[4].text + '',
    l,
    n,
    i;
  return {
    c() {
      (e = v('li')), (s = v('a')), (l = O(t)), (i = M()), this.h();
    },
    l(o) {
      e = g(o, 'LI', { class: !0 });
      var r = d(e);
      s = g(r, 'A', { href: !0, class: !0 });
      var h = d(s);
      (l = q(h, t)), h.forEach(u), (i = B(r)), r.forEach(u), this.h();
    },
    h() {
      c(s, 'href', (n = K(a[4].url))),
        c(s, 'class', 'svelte-fhk6t1'),
        c(e, 'class', 'svelte-fhk6t1');
    },
    m(o, r) {
      I(o, e, r), f(e, s), f(s, l), f(e, i);
    },
    p(o, r) {
      r & 1 && t !== (t = o[4].text + '') && ve(l, t),
        r & 1 && n !== (n = K(o[4].url)) && c(s, 'href', n);
    },
    d(o) {
      o && u(e);
    },
  };
}
function Ye(a) {
  let e,
    s,
    t,
    l,
    n,
    i = a[4].text + '',
    o,
    r,
    h,
    _;
  var p = a[2][a[4].symbol];
  function $(m) {
    return {};
  }
  return (
    p && (t = new p($())),
    {
      c() {
        (e = v('li')),
          (s = v('div')),
          t && ae(t.$$.fragment),
          (l = M()),
          (n = v('a')),
          (o = O(i)),
          (h = M()),
          this.h();
      },
      l(m) {
        e = g(m, 'LI', { class: !0 });
        var E = d(e);
        s = g(E, 'DIV', { class: !0 });
        var C = d(s);
        t && ce(t.$$.fragment, C),
          C.forEach(u),
          (l = B(E)),
          (n = g(E, 'A', { href: !0, class: !0 }));
        var S = d(n);
        (o = q(S, i)), S.forEach(u), (h = B(E)), E.forEach(u), this.h();
      },
      h() {
        c(s, 'class', 'symbol svelte-fhk6t1'),
          c(n, 'href', (r = K(a[4].url))),
          c(n, 'class', 'svelte-fhk6t1'),
          c(e, 'class', 'svelte-fhk6t1');
      },
      m(m, E) {
        I(m, e, E),
          f(e, s),
          t && oe(t, s, null),
          f(e, l),
          f(e, n),
          f(n, o),
          f(e, h),
          (_ = !0);
      },
      p(m, E) {
        if (p !== (p = m[2][m[4].symbol])) {
          if (t) {
            de();
            const C = t;
            H(C.$$.fragment, 1, 0, () => {
              re(C, 1);
            }),
              _e();
          }
          p
            ? ((t = new p($())),
              ae(t.$$.fragment),
              x(t.$$.fragment, 1),
              oe(t, s, null))
            : (t = null);
        }
        (!_ || E & 1) && i !== (i = m[4].text + '') && ve(o, i),
          (!_ || (E & 1 && r !== (r = K(m[4].url)))) && c(n, 'href', r);
      },
      i(m) {
        _ || (t && x(t.$$.fragment, m), (_ = !0));
      },
      o(m) {
        t && H(t.$$.fragment, m), (_ = !1);
      },
      d(m) {
        m && u(e), t && re(t);
      },
    }
  );
}
function Je(a) {
  let e,
    s,
    t = a[4].text + '',
    l,
    n,
    i;
  return {
    c() {
      (e = v('li')), (s = v('a')), (l = O(t)), (i = M()), this.h();
    },
    l(o) {
      e = g(o, 'LI', { class: !0 });
      var r = d(e);
      s = g(r, 'A', { href: !0, class: !0 });
      var h = d(s);
      (l = q(h, t)), h.forEach(u), (i = B(r)), r.forEach(u), this.h();
    },
    h() {
      c(s, 'href', (n = K(a[4].url))),
        c(s, 'class', 'svelte-fhk6t1'),
        c(e, 'class', 'svelte-fhk6t1');
    },
    m(o, r) {
      I(o, e, r), f(e, s), f(s, l), f(e, i);
    },
    p(o, r) {
      r & 1 && t !== (t = o[4].text + '') && ve(l, t),
        r & 1 && n !== (n = K(o[4].url)) && c(s, 'href', n);
    },
    d(o) {
      o && u(e);
    },
  };
}
function Ke(a) {
  let e,
    s,
    t,
    l,
    n,
    i,
    o = a[0].media_links,
    r = [];
  for (let _ = 0; _ < o.length; _ += 1) r[_] = Qe(qe(a, o, _));
  const h = (_) =>
    H(r[_], 1, 1, () => {
      r[_] = null;
    });
  return {
    c() {
      (e = v('section')),
        (s = v('h3')),
        (t = O('Media')),
        (l = M()),
        (n = v('ul'));
      for (let _ = 0; _ < r.length; _ += 1) r[_].c();
      this.h();
    },
    l(_) {
      e = g(_, 'SECTION', { class: !0 });
      var p = d(e);
      s = g(p, 'H3', { class: !0 });
      var $ = d(s);
      (t = q($, 'Media')),
        $.forEach(u),
        (l = B(p)),
        (n = g(p, 'UL', { class: !0 }));
      var m = d(n);
      for (let E = 0; E < r.length; E += 1) r[E].l(m);
      m.forEach(u), p.forEach(u), this.h();
    },
    h() {
      c(s, 'class', 'svelte-fhk6t1'),
        c(n, 'class', 'svelte-fhk6t1'),
        c(e, 'class', 'link-group media svelte-fhk6t1');
    },
    m(_, p) {
      I(_, e, p), f(e, s), f(s, t), f(e, l), f(e, n);
      for (let $ = 0; $ < r.length; $ += 1) r[$].m(n, null);
      i = !0;
    },
    p(_, p) {
      if (p & 5) {
        o = _[0].media_links;
        let $;
        for ($ = 0; $ < o.length; $ += 1) {
          const m = qe(_, o, $);
          r[$]
            ? (r[$].p(m, p), x(r[$], 1))
            : ((r[$] = Qe(m)), r[$].c(), x(r[$], 1), r[$].m(n, null));
        }
        for (de(), $ = o.length; $ < r.length; $ += 1) h($);
        _e();
      }
    },
    i(_) {
      if (!i) {
        for (let p = 0; p < o.length; p += 1) x(r[p]);
        i = !0;
      }
    },
    o(_) {
      r = r.filter(Boolean);
      for (let p = 0; p < r.length; p += 1) H(r[p]);
      i = !1;
    },
    d(_) {
      _ && u(e), ke(r, _);
    },
  };
}
function Qe(a) {
  let e,
    s,
    t,
    l,
    n,
    i = a[4].text + '',
    o,
    r,
    h,
    _;
  var p = a[2][a[4].symbol];
  function $(m) {
    return {};
  }
  return (
    p && (t = new p($())),
    {
      c() {
        (e = v('li')),
          (s = v('div')),
          t && ae(t.$$.fragment),
          (l = M()),
          (n = v('a')),
          (o = O(i)),
          (h = M()),
          this.h();
      },
      l(m) {
        e = g(m, 'LI', { class: !0 });
        var E = d(e);
        s = g(E, 'DIV', { class: !0 });
        var C = d(s);
        t && ce(t.$$.fragment, C),
          C.forEach(u),
          (l = B(E)),
          (n = g(E, 'A', { href: !0, class: !0 }));
        var S = d(n);
        (o = q(S, i)), S.forEach(u), (h = B(E)), E.forEach(u), this.h();
      },
      h() {
        c(s, 'class', 'symbol svelte-fhk6t1'),
          c(n, 'href', (r = K(a[4].url))),
          c(n, 'class', 'svelte-fhk6t1'),
          c(e, 'class', 'svelte-fhk6t1');
      },
      m(m, E) {
        I(m, e, E),
          f(e, s),
          t && oe(t, s, null),
          f(e, l),
          f(e, n),
          f(n, o),
          f(e, h),
          (_ = !0);
      },
      p(m, E) {
        if (p !== (p = m[2][m[4].symbol])) {
          if (t) {
            de();
            const C = t;
            H(C.$$.fragment, 1, 0, () => {
              re(C, 1);
            }),
              _e();
          }
          p
            ? ((t = new p($())),
              ae(t.$$.fragment),
              x(t.$$.fragment, 1),
              oe(t, s, null))
            : (t = null);
        }
        (!_ || E & 1) && i !== (i = m[4].text + '') && ve(o, i),
          (!_ || (E & 1 && r !== (r = K(m[4].url)))) && c(n, 'href', r);
      },
      i(m) {
        _ || (t && x(t.$$.fragment, m), (_ = !0));
      },
      o(m) {
        t && H(t.$$.fragment, m), (_ = !1);
      },
      d(m) {
        m && u(e), t && re(t);
      },
    }
  );
}
function Xe(a) {
  let e,
    s,
    t = a[4].text + '',
    l,
    n,
    i;
  return {
    c() {
      (e = v('li')), (s = v('a')), (l = O(t)), (i = M()), this.h();
    },
    l(o) {
      e = g(o, 'LI', { class: !0 });
      var r = d(e);
      s = g(r, 'A', { href: !0, class: !0 });
      var h = d(s);
      (l = q(h, t)), h.forEach(u), (i = B(r)), r.forEach(u), this.h();
    },
    h() {
      c(s, 'href', (n = K(a[4].url))),
        c(s, 'class', 'svelte-fhk6t1'),
        c(e, 'class', 'svelte-fhk6t1');
    },
    m(o, r) {
      I(o, e, r), f(e, s), f(s, l), f(e, i);
    },
    p(o, r) {
      r & 1 && t !== (t = o[4].text + '') && ve(l, t),
        r & 1 && n !== (n = K(o[4].url)) && c(s, 'href', n);
    },
    d(o) {
      o && u(e);
    },
  };
}
function et(a) {
  let e,
    s,
    t = a[4].text + '',
    l,
    n,
    i;
  return {
    c() {
      (e = v('li')), (s = v('a')), (l = O(t)), (i = M()), this.h();
    },
    l(o) {
      e = g(o, 'LI', { class: !0 });
      var r = d(e);
      s = g(r, 'A', { href: !0, class: !0 });
      var h = d(s);
      (l = q(h, t)), h.forEach(u), (i = B(r)), r.forEach(u), this.h();
    },
    h() {
      c(s, 'href', (n = K(a[4].url))),
        c(s, 'class', 'svelte-fhk6t1'),
        c(e, 'class', 'svelte-fhk6t1');
    },
    m(o, r) {
      I(o, e, r), f(e, s), f(s, l), f(e, i);
    },
    p(o, r) {
      r & 1 && t !== (t = o[4].text + '') && ve(l, t),
        r & 1 && n !== (n = K(o[4].url)) && c(s, 'href', n);
    },
    d(o) {
      o && u(e);
    },
  };
}
function qt(a) {
  let e, s, t, l;
  Et(a[3]);
  let n = a[0].latest_links && ze(a);
  return {
    c() {
      n && n.c(), (e = me());
    },
    l(i) {
      n && n.l(i), (e = me());
    },
    m(i, o) {
      n && n.m(i, o),
        I(i, e, o),
        (s = !0),
        t || ((l = yt(window, 'resize', a[3])), (t = !0));
    },
    p(i, [o]) {
      i[0].latest_links
        ? n
          ? (n.p(i, o), o & 1 && x(n, 1))
          : ((n = ze(i)), n.c(), x(n, 1), n.m(e.parentNode, e))
        : n &&
          (de(),
          H(n, 1, 1, () => {
            n = null;
          }),
          _e());
    },
    i(i) {
      s || (x(n), (s = !0));
    },
    o(i) {
      H(n), (s = !1);
    },
    d(i) {
      n && n.d(i), i && u(e), (t = !1), l();
    },
  };
}
const xe = 745;
function Ft(a, e, s) {
  const t = { graphics: Mt, pictures: Ht, videos: Nt };
  let { links: l = {} } = e,
    n = 1200;
  function i() {
    s(1, (n = window.innerWidth));
  }
  return (
    (a.$$set = (o) => {
      'links' in o && s(0, (l = o.links));
    }),
    [l, n, t, i]
  );
}
class Ut extends ue {
  constructor(e) {
    super(), fe(this, e, Ft, qt, he, { links: 0 });
  }
}
function jt(a) {
  let e, s;
  return {
    c() {
      (e = te('svg')), (s = te('path')), this.h();
    },
    l(t) {
      e = se(t, 'svg', {
        'aria-hidden': !0,
        focusable: !0,
        xmlns: !0,
        viewBox: !0,
        style: !0,
        class: !0,
      });
      var l = d(e);
      (s = se(l, 'path', { d: !0 })), d(s).forEach(u), l.forEach(u), this.h();
    },
    h() {
      c(
        s,
        'd',
        'M16 1.537a6.469 6.469 0 0 1-1.884.516A3.3 3.3 0 0 0 15.559.237a6.603 6.603 0 0 1-2.084.797A3.282 3.282 0 0 0 11.078 0a3.28 3.28 0 0 0-3.196 4.028A9.315 9.315 0 0 1 1.118.598a3.28 3.28 0 0 0-.444 1.65c0 1.137.578 2.143 1.46 2.73A3.281 3.281 0 0 1 .646 4.57v.04A3.282 3.282 0 0 0 3.28 7.83a3.286 3.286 0 0 1-1.483.055 3.294 3.294 0 0 0 3.065 2.282A6.583 6.583 0 0 1 0 11.526 9.281 9.281 0 0 0 5.034 13c6.036 0 9.338-5.003 9.338-9.34 0-.144-.003-.285-.01-.425A6.607 6.607 0 0 0 16 1.538Z'
      ),
        c(e, 'aria-hidden', 'true'),
        c(e, 'focusable', 'false'),
        c(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        c(e, 'viewBox', '0 0 16 13'),
        we(e, 'width', a[0] + 'px'),
        c(e, 'class', 'svelte-17648ki');
    },
    m(t, l) {
      I(t, e, l), f(e, s);
    },
    p(t, [l]) {
      l & 1 && we(e, 'width', t[0] + 'px');
    },
    i: W,
    o: W,
    d(t) {
      t && u(e);
    },
  };
}
function Pt(a, e, s) {
  let { width: t = 20 } = e;
  return (
    (a.$$set = (l) => {
      'width' in l && s(0, (t = l.width));
    }),
    [t]
  );
}
class zt extends ue {
  constructor(e) {
    super(), fe(this, e, Pt, jt, he, { width: 0 });
  }
}
function Gt(a) {
  let e, s;
  return {
    c() {
      (e = te('svg')), (s = te('path')), this.h();
    },
    l(t) {
      e = se(t, 'svg', {
        'aria-hidden': !0,
        focusable: !0,
        viewBox: !0,
        xmlns: !0,
        style: !0,
        class: !0,
      });
      var l = d(e);
      (s = se(l, 'path', { d: !0 })), d(s).forEach(u), l.forEach(u), this.h();
    },
    h() {
      c(
        s,
        'd',
        'M18.375 0H2.625A2.617 2.617 0 0 0 0 2.609V14.39A2.617 2.617 0 0 0 2.625 17h15.75A2.617 2.617 0 0 0 21 14.391V2.61A2.617 2.617 0 0 0 18.375 0Zm-10.5 13.044V4.348l7 4.348-7 4.348Z'
      ),
        c(e, 'aria-hidden', 'true'),
        c(e, 'focusable', 'false'),
        c(e, 'viewBox', '0 0 21 17'),
        c(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        we(e, 'width', a[0] + 'px'),
        c(e, 'class', 'svelte-17648ki');
    },
    m(t, l) {
      I(t, e, l), f(e, s);
    },
    p(t, [l]) {
      l & 1 && we(e, 'width', t[0] + 'px');
    },
    i: W,
    o: W,
    d(t) {
      t && u(e);
    },
  };
}
function Wt(a, e, s) {
  let { width: t = 20 } = e;
  return (
    (a.$$set = (l) => {
      'width' in l && s(0, (t = l.width));
    }),
    [t]
  );
}
class Yt extends ue {
  constructor(e) {
    super(), fe(this, e, Wt, Gt, he, { width: 0 });
  }
}
function Jt(a) {
  let e, s;
  return {
    c() {
      (e = te('svg')), (s = te('path')), this.h();
    },
    l(t) {
      e = se(t, 'svg', {
        'aria-hidden': !0,
        focusable: !0,
        xmlns: !0,
        viewBox: !0,
        style: !0,
        class: !0,
      });
      var l = d(e);
      (s = se(l, 'path', { d: !0 })), d(s).forEach(u), l.forEach(u), this.h();
    },
    h() {
      c(
        s,
        'd',
        'M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5H8V9H6V7h2V6c0-1.653 1.347-3 3-3h2v2h-2c-.55 0-1 .45-1 1v1h3l-.5 2H10v7h4.5c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5Z'
      ),
        c(e, 'aria-hidden', 'true'),
        c(e, 'focusable', 'false'),
        c(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        c(e, 'viewBox', '0 0 16 16'),
        we(e, 'width', a[0] + 'px'),
        c(e, 'class', 'svelte-17648ki');
    },
    m(t, l) {
      I(t, e, l), f(e, s);
    },
    p(t, [l]) {
      l & 1 && we(e, 'width', t[0] + 'px');
    },
    i: W,
    o: W,
    d(t) {
      t && u(e);
    },
  };
}
function Kt(a, e, s) {
  let { width: t = 20 } = e;
  return (
    (a.$$set = (l) => {
      'width' in l && s(0, (t = l.width));
    }),
    [t]
  );
}
class Qt extends ue {
  constructor(e) {
    super(), fe(this, e, Kt, Jt, he, { width: 0 });
  }
}
function Xt(a) {
  let e, s, t;
  return {
    c() {
      (e = te('svg')), (s = te('path')), (t = te('path')), this.h();
    },
    l(l) {
      e = se(l, 'svg', {
        'aria-hidden': !0,
        focusable: !0,
        xmlns: !0,
        viewBox: !0,
        style: !0,
        class: !0,
      });
      var n = d(e);
      (s = se(n, 'path', { d: !0 })),
        d(s).forEach(u),
        (t = se(n, 'path', { d: !0 })),
        d(t).forEach(u),
        n.forEach(u),
        this.h();
    },
    h() {
      c(
        s,
        'd',
        'M8 1.44c2.137 0 2.39.01 3.231.048.781.034 1.203.165 1.485.274.372.145.64.32.918.598.281.281.453.546.6.919.11.281.24.706.275 1.484.037.844.047 1.097.047 3.232 0 2.134-.01 2.39-.047 3.231-.034.781-.165 1.203-.275 1.484a2.47 2.47 0 0 1-.597.919 2.51 2.51 0 0 1-.918.6c-.282.11-.707.24-1.485.275-.844.037-1.097.047-3.232.047-2.134 0-2.39-.01-3.231-.047-.781-.034-1.203-.165-1.484-.275a2.476 2.476 0 0 1-.92-.597 2.51 2.51 0 0 1-.6-.918c-.109-.282-.24-.707-.274-1.485-.038-.844-.048-1.097-.048-3.231 0-2.135.01-2.391.047-3.232.035-.781.166-1.203.276-1.485.143-.372.319-.64.597-.919.281-.281.546-.453.918-.6.282-.109.707-.24 1.485-.274C5.608 1.45 5.862 1.44 8 1.44ZM8 0C5.828 0 5.556.01 4.703.047c-.85.038-1.435.175-1.94.372a3.898 3.898 0 0 0-1.419.925c-.447.444-.719.89-.925 1.415C.222 3.27.085 3.85.047 4.7.01 5.556 0 5.828 0 8c0 2.172.01 2.444.047 3.297.038.85.175 1.434.372 1.94.206.528.478.976.925 1.419.444.444.89.719 1.415.922.51.197 1.091.335 1.941.372.853.038 1.125.047 3.297.047s2.444-.01 3.297-.047c.85-.037 1.434-.175 1.94-.372a3.903 3.903 0 0 0 1.416-.922c.444-.444.719-.89.922-1.415.197-.51.335-1.091.372-1.941.037-.853.047-1.125.047-3.297s-.01-2.444-.047-3.297c-.038-.85-.175-1.435-.372-1.94a3.753 3.753 0 0 0-.915-1.423A3.91 3.91 0 0 0 13.24.422c-.51-.197-1.09-.335-1.94-.372C10.444.008 10.171 0 8 0H8Z'
      ),
        c(
          t,
          'd',
          'M8 3.89a4.11 4.11 0 0 0 0 8.22 4.11 4.11 0 0 0 0-8.22Zm0 6.776a2.666 2.666 0 1 1 0-5.332 2.666 2.666 0 0 1 0 5.332Zm5.231-6.938a.96.96 0 1 1-1.919 0 .96.96 0 0 1 1.919 0Z'
        ),
        c(e, 'aria-hidden', 'true'),
        c(e, 'focusable', 'false'),
        c(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        c(e, 'viewBox', '0 0 16 16'),
        we(e, 'width', a[0] + 'px'),
        c(e, 'class', 'svelte-17648ki');
    },
    m(l, n) {
      I(l, e, n), f(e, s), f(e, t);
    },
    p(l, [n]) {
      n & 1 && we(e, 'width', l[0] + 'px');
    },
    i: W,
    o: W,
    d(l) {
      l && u(e);
    },
  };
}
function es(a, e, s) {
  let { width: t = 20 } = e;
  return (
    (a.$$set = (l) => {
      'width' in l && s(0, (t = l.width));
    }),
    [t]
  );
}
class ts extends ue {
  constructor(e) {
    super(), fe(this, e, es, Xt, he, { width: 0 });
  }
}
function ss(a) {
  let e, s;
  return {
    c() {
      (e = te('svg')), (s = te('path')), this.h();
    },
    l(t) {
      e = se(t, 'svg', {
        'aria-hidden': !0,
        focusable: !0,
        xmlns: !0,
        viewBox: !0,
        style: !0,
        class: !0,
      });
      var l = d(e);
      (s = se(l, 'path', { d: !0 })), d(s).forEach(u), l.forEach(u), this.h();
    },
    h() {
      c(
        s,
        'd',
        'M19.031 0c1.034 0 1.888.807 1.964 1.822L21 1.97V19.03a1.975 1.975 0 0 1-1.822 1.964L19.03 21H1.97a1.975 1.975 0 0 1-1.964-1.822L0 19.03V1.97C0 .935.807.08 1.822.005L1.97 0H19.03ZM6.3 7.875H3.15v10.063H6.3V7.874Zm7.875-.175c-1.575 0-2.538.788-2.975 1.575v-1.4H8.225v10.063h3.15V12.95c0-1.313.175-2.537 1.838-2.537 1.575 0 1.575 1.487 1.575 2.624v4.9h3.15v-5.425c0-2.712-.613-4.812-3.763-4.812ZM4.637 2.8c-1.05 0-1.837.875-1.837 1.838 0 1.05.875 1.837 1.838 1.837 1.05 0 1.837-.787 1.837-1.837 0-1.05-.875-1.838-1.837-1.838Z'
      ),
        c(e, 'aria-hidden', 'true'),
        c(e, 'focusable', 'false'),
        c(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        c(e, 'viewBox', '0 0 21 21'),
        we(e, 'width', a[0] + 'px'),
        c(e, 'class', 'svelte-17648ki');
    },
    m(t, l) {
      I(t, e, l), f(e, s);
    },
    p(t, [l]) {
      l & 1 && we(e, 'width', t[0] + 'px');
    },
    i: W,
    o: W,
    d(t) {
      t && u(e);
    },
  };
}
function ls(a, e, s) {
  let { width: t = 20 } = e;
  return (
    (a.$$set = (l) => {
      'width' in l && s(0, (t = l.width));
    }),
    [t]
  );
}
class ns extends ue {
  constructor(e) {
    super(), fe(this, e, ls, ss, he, { width: 0 });
  }
}
function tt(a, e, s) {
  const t = a.slice();
  return (t[2] = e[s]), t;
}
function st(a) {
  let e,
    s,
    t,
    l,
    n,
    i,
    o,
    r = a[0].company_description + '',
    h,
    _,
    p,
    $,
    m,
    E,
    C,
    S,
    T,
    P = a[0].social_links,
    b = [];
  for (let w = 0; w < P.length; w += 1) b[w] = lt(tt(a, P, w));
  const F = (w) =>
    H(b[w], 1, 1, () => {
      b[w] = null;
    });
  return {
    c() {
      (e = v('section')),
        (s = v('div')),
        (t = v('article')),
        (l = v('h2')),
        (n = O('Information you can trust')),
        (i = M()),
        (o = v('p')),
        (h = O(r)),
        (_ = M()),
        (p = v('div')),
        ($ = v('h2')),
        (m = O('Follow Us')),
        (E = M()),
        (C = v('div')),
        (S = v('ul'));
      for (let w = 0; w < b.length; w += 1) b[w].c();
      this.h();
    },
    l(w) {
      e = g(w, 'SECTION', { class: !0 });
      var Z = d(e);
      s = g(Z, 'DIV', { class: !0 });
      var A = d(s);
      t = g(A, 'ARTICLE', { class: !0 });
      var j = d(t);
      l = g(j, 'H2', { class: !0 });
      var U = d(l);
      (n = q(U, 'Information you can trust')),
        U.forEach(u),
        (i = B(j)),
        (o = g(j, 'P', { class: !0 }));
      var Q = d(o);
      (h = q(Q, r)),
        Q.forEach(u),
        j.forEach(u),
        (_ = B(A)),
        (p = g(A, 'DIV', { class: !0 }));
      var D = d(p);
      $ = g(D, 'H2', { class: !0 });
      var V = d($);
      (m = q(V, 'Follow Us')), V.forEach(u), (E = B(D)), (C = g(D, 'DIV', {}));
      var z = d(C);
      S = g(z, 'UL', { class: !0 });
      var L = d(S);
      for (let le = 0; le < b.length; le += 1) b[le].l(L);
      L.forEach(u),
        z.forEach(u),
        D.forEach(u),
        A.forEach(u),
        Z.forEach(u),
        this.h();
    },
    h() {
      c(l, 'class', 'svelte-eccq59'),
        c(o, 'class', 'svelte-eccq59'),
        c(t, 'class', 'company-info svelte-eccq59'),
        c($, 'class', 'svelte-eccq59'),
        c(S, 'class', 'links svelte-eccq59'),
        c(p, 'class', 'social svelte-eccq59'),
        c(s, 'class', 'content-container svelte-eccq59'),
        c(e, 'class', 'company svelte-eccq59');
    },
    m(w, Z) {
      I(w, e, Z),
        f(e, s),
        f(s, t),
        f(t, l),
        f(l, n),
        f(t, i),
        f(t, o),
        f(o, h),
        f(s, _),
        f(s, p),
        f(p, $),
        f($, m),
        f(p, E),
        f(p, C),
        f(C, S);
      for (let A = 0; A < b.length; A += 1) b[A].m(S, null);
      T = !0;
    },
    p(w, Z) {
      if (
        ((!T || Z & 1) && r !== (r = w[0].company_description + '') && ve(h, r),
        Z & 3)
      ) {
        P = w[0].social_links;
        let A;
        for (A = 0; A < P.length; A += 1) {
          const j = tt(w, P, A);
          b[A]
            ? (b[A].p(j, Z), x(b[A], 1))
            : ((b[A] = lt(j)), b[A].c(), x(b[A], 1), b[A].m(S, null));
        }
        for (de(), A = P.length; A < b.length; A += 1) F(A);
        _e();
      }
    },
    i(w) {
      if (!T) {
        for (let Z = 0; Z < P.length; Z += 1) x(b[Z]);
        T = !0;
      }
    },
    o(w) {
      b = b.filter(Boolean);
      for (let Z = 0; Z < b.length; Z += 1) H(b[Z]);
      T = !1;
    },
    d(w) {
      w && u(e), ke(b, w);
    },
  };
}
function lt(a) {
  let e, s, t, l, n, i, o, r;
  var h = a[1][a[2].type];
  function _(p) {
    return {};
  }
  return (
    h && (n = new h(_())),
    {
      c() {
        (e = v('li')),
          (s = v('a')),
          (t = v('div')),
          (l = v('div')),
          n && ae(n.$$.fragment),
          (o = M()),
          this.h();
      },
      l(p) {
        e = g(p, 'LI', { class: !0 });
        var $ = d(e);
        s = g($, 'A', { href: !0 });
        var m = d(s);
        t = g(m, 'DIV', { class: !0 });
        var E = d(t);
        l = g(E, 'DIV', { class: !0 });
        var C = d(l);
        n && ce(n.$$.fragment, C),
          C.forEach(u),
          E.forEach(u),
          m.forEach(u),
          (o = B($)),
          $.forEach(u),
          this.h();
      },
      h() {
        c(l, 'class', 'social svelte-eccq59'),
          c(t, 'class', 'button svelte-eccq59'),
          c(s, 'href', (i = K(a[2].url))),
          c(e, 'class', 'social-links symbol svelte-eccq59');
      },
      m(p, $) {
        I(p, e, $),
          f(e, s),
          f(s, t),
          f(t, l),
          n && oe(n, l, null),
          f(e, o),
          (r = !0);
      },
      p(p, $) {
        if (h !== (h = p[1][p[2].type])) {
          if (n) {
            de();
            const m = n;
            H(m.$$.fragment, 1, 0, () => {
              re(m, 1);
            }),
              _e();
          }
          h
            ? ((n = new h(_())),
              ae(n.$$.fragment),
              x(n.$$.fragment, 1),
              oe(n, l, null))
            : (n = null);
        }
        (!r || ($ & 1 && i !== (i = K(p[2].url)))) && c(s, 'href', i);
      },
      i(p) {
        r || (n && x(n.$$.fragment, p), (r = !0));
      },
      o(p) {
        n && H(n.$$.fragment, p), (r = !1);
      },
      d(p) {
        p && u(e), n && re(n);
      },
    }
  );
}
function rs(a) {
  let e,
    s,
    t = a[0].social_links && st(a);
  return {
    c() {
      t && t.c(), (e = me());
    },
    l(l) {
      t && t.l(l), (e = me());
    },
    m(l, n) {
      t && t.m(l, n), I(l, e, n), (s = !0);
    },
    p(l, [n]) {
      l[0].social_links
        ? t
          ? (t.p(l, n), n & 1 && x(t, 1))
          : ((t = st(l)), t.c(), x(t, 1), t.m(e.parentNode, e))
        : t &&
          (de(),
          H(t, 1, 1, () => {
            t = null;
          }),
          _e());
    },
    i(l) {
      s || (x(t), (s = !0));
    },
    o(l) {
      H(t), (s = !1);
    },
    d(l) {
      t && t.d(l), l && u(e);
    },
  };
}
function as(a, e, s) {
  const t = {
    twitter: zt,
    facebook: Qt,
    instagram: ts,
    youtube: Yt,
    linkedin: ns,
  };
  let { links: l = {} } = e;
  return (
    (a.$$set = (n) => {
      'links' in n && s(0, (l = n.links));
    }),
    [l, t]
  );
}
class os extends ue {
  constructor(e) {
    super(), fe(this, e, as, rs, he, { links: 0 });
  }
}
function nt(a, e, s) {
  const t = a.slice();
  return (t[1] = e[s]), t;
}
function rt(a, e, s) {
  const t = a.slice();
  return (t[1] = e[s]), t;
}
function at(a) {
  let e,
    s,
    t,
    l,
    n,
    i,
    o,
    r,
    h,
    _,
    p,
    $,
    m,
    E,
    C,
    S,
    T,
    P = a[0].copyright_year + '',
    b,
    F,
    w,
    Z,
    A,
    j = a[0].ad_links,
    U = [];
  for (let V = 0; V < j.length; V += 1) U[V] = ot(rt(a, j, V));
  let Q = a[0].misc_links.filter(ct),
    D = [];
  for (let V = 0; V < Q.length; V += 1) D[V] = it(nt(a, Q, V));
  return {
    c() {
      (e = v('section')), (s = v('div')), (t = v('section')), (l = v('ul'));
      for (let V = 0; V < U.length; V += 1) U[V].c();
      (n = M()),
        (i = v('p')),
        (o = O('All quotes delayed a minimum of 15 minutes. ')),
        (r = v('a')),
        (h = O('See here for a complete list of exchanges and delays')),
        (p = O('.')),
        ($ = M()),
        (m = v('section')),
        (E = v('ul'));
      for (let V = 0; V < D.length; V += 1) D[V].c();
      (C = M()),
        (S = v('p')),
        (T = O('\xA9 ')),
        (b = O(P)),
        (F = O(` Reuters.
        `)),
        (w = v('a')),
        (Z = O('All rights reserved')),
        this.h();
    },
    l(V) {
      e = g(V, 'SECTION', { class: !0 });
      var z = d(e);
      s = g(z, 'DIV', { class: !0 });
      var L = d(s);
      t = g(L, 'SECTION', { class: !0 });
      var le = d(t);
      l = g(le, 'UL', { class: !0 });
      var ie = d(l);
      for (let y = 0; y < U.length; y += 1) U[y].l(ie);
      ie.forEach(u), le.forEach(u), (n = B(L)), (i = g(L, 'P', { class: !0 }));
      var G = d(i);
      (o = q(G, 'All quotes delayed a minimum of 15 minutes. ')),
        (r = g(G, 'A', { href: !0, class: !0 }));
      var k = d(r);
      (h = q(k, 'See here for a complete list of exchanges and delays')),
        k.forEach(u),
        (p = q(G, '.')),
        G.forEach(u),
        ($ = B(L)),
        (m = g(L, 'SECTION', { class: !0 }));
      var N = d(m);
      E = g(N, 'UL', { class: !0 });
      var Y = d(E);
      for (let y = 0; y < D.length; y += 1) D[y].l(Y);
      Y.forEach(u), N.forEach(u), (C = B(L)), (S = g(L, 'P', { class: !0 }));
      var ne = d(S);
      (T = q(ne, '\xA9 ')),
        (b = q(ne, P)),
        (F = q(
          ne,
          ` Reuters.
        `
        )),
        (w = g(ne, 'A', { href: !0, class: !0 }));
      var J = d(w);
      (Z = q(J, 'All rights reserved')),
        J.forEach(u),
        ne.forEach(u),
        L.forEach(u),
        z.forEach(u),
        this.h();
    },
    h() {
      c(l, 'class', 'link-group svelte-1wk8lrk'),
        c(t, 'class', 'ad-links svelte-1wk8lrk'),
        c(r, 'href', (_ = K(a[0].disclaimer_link))),
        c(r, 'class', 'svelte-1wk8lrk'),
        c(i, 'class', 'disclaimer svelte-1wk8lrk'),
        c(E, 'class', 'link-group svelte-1wk8lrk'),
        c(m, 'class', 'misc-links svelte-1wk8lrk'),
        c(w, 'href', (A = K(a[0].copyright_link))),
        c(w, 'class', 'svelte-1wk8lrk'),
        c(S, 'class', 'copyright svelte-1wk8lrk'),
        c(s, 'class', 'content-container svelte-1wk8lrk'),
        c(e, 'class', 'legal svelte-1wk8lrk');
    },
    m(V, z) {
      I(V, e, z), f(e, s), f(s, t), f(t, l);
      for (let L = 0; L < U.length; L += 1) U[L].m(l, null);
      f(s, n),
        f(s, i),
        f(i, o),
        f(i, r),
        f(r, h),
        f(i, p),
        f(s, $),
        f(s, m),
        f(m, E);
      for (let L = 0; L < D.length; L += 1) D[L].m(E, null);
      f(s, C), f(s, S), f(S, T), f(S, b), f(S, F), f(S, w), f(w, Z);
    },
    p(V, z) {
      if (z & 1) {
        j = V[0].ad_links;
        let L;
        for (L = 0; L < j.length; L += 1) {
          const le = rt(V, j, L);
          U[L] ? U[L].p(le, z) : ((U[L] = ot(le)), U[L].c(), U[L].m(l, null));
        }
        for (; L < U.length; L += 1) U[L].d(1);
        U.length = j.length;
      }
      if (
        (z & 1 && _ !== (_ = K(V[0].disclaimer_link)) && c(r, 'href', _), z & 1)
      ) {
        Q = V[0].misc_links.filter(ct);
        let L;
        for (L = 0; L < Q.length; L += 1) {
          const le = nt(V, Q, L);
          D[L] ? D[L].p(le, z) : ((D[L] = it(le)), D[L].c(), D[L].m(E, null));
        }
        for (; L < D.length; L += 1) D[L].d(1);
        D.length = Q.length;
      }
      z & 1 && P !== (P = V[0].copyright_year + '') && ve(b, P),
        z & 1 && A !== (A = K(V[0].copyright_link)) && c(w, 'href', A);
    },
    d(V) {
      V && u(e), ke(U, V), ke(D, V);
    },
  };
}
function ot(a) {
  let e,
    s,
    t = a[1].text + '',
    l,
    n,
    i;
  return {
    c() {
      (e = v('li')), (s = v('a')), (l = O(t)), (i = M()), this.h();
    },
    l(o) {
      e = g(o, 'LI', { class: !0 });
      var r = d(e);
      s = g(r, 'A', { href: !0, class: !0 });
      var h = d(s);
      (l = q(h, t)), h.forEach(u), (i = B(r)), r.forEach(u), this.h();
    },
    h() {
      c(s, 'href', (n = K(a[1].url))),
        c(s, 'class', 'svelte-1wk8lrk'),
        c(e, 'class', 'svelte-1wk8lrk');
    },
    m(o, r) {
      I(o, e, r), f(e, s), f(s, l), f(e, i);
    },
    p(o, r) {
      r & 1 && t !== (t = o[1].text + '') && ve(l, t),
        r & 1 && n !== (n = K(o[1].url)) && c(s, 'href', n);
    },
    d(o) {
      o && u(e);
    },
  };
}
function it(a) {
  let e,
    s,
    t = a[1].text + '',
    l,
    n,
    i;
  return {
    c() {
      (e = v('li')), (s = v('a')), (l = O(t)), (i = M()), this.h();
    },
    l(o) {
      e = g(o, 'LI', { class: !0 });
      var r = d(e);
      s = g(r, 'A', { href: !0, class: !0 });
      var h = d(s);
      (l = q(h, t)), h.forEach(u), (i = B(r)), r.forEach(u), this.h();
    },
    h() {
      c(s, 'href', (n = K(a[1].url))),
        c(s, 'class', 'svelte-1wk8lrk'),
        c(e, 'class', 'svelte-1wk8lrk');
    },
    m(o, r) {
      I(o, e, r), f(e, s), f(s, l), f(e, i);
    },
    p(o, r) {
      r & 1 && t !== (t = o[1].text + '') && ve(l, t),
        r & 1 && n !== (n = K(o[1].url)) && c(s, 'href', n);
    },
    d(o) {
      o && u(e);
    },
  };
}
function is(a) {
  let e,
    s = a[0].ad_links && at(a);
  return {
    c() {
      s && s.c(), (e = me());
    },
    l(t) {
      s && s.l(t), (e = me());
    },
    m(t, l) {
      s && s.m(t, l), I(t, e, l);
    },
    p(t, [l]) {
      t[0].ad_links
        ? s
          ? s.p(t, l)
          : ((s = at(t)), s.c(), s.m(e.parentNode, e))
        : s && (s.d(1), (s = null));
    },
    i: W,
    o: W,
    d(t) {
      s && s.d(t), t && u(e);
    },
  };
}
const ct = (a) => !a.self;
function cs(a, e, s) {
  let { links: t = {} } = e;
  return (
    (a.$$set = (l) => {
      'links' in l && s(0, (t = l.links));
    }),
    [t]
  );
}
class us extends ue {
  constructor(e) {
    super(), fe(this, e, cs, is, he, { links: 0 });
  }
}
const fs = (a) => ({ intersecting: a & 1 }),
  ut = (a) => ({ intersecting: a[0] });
function hs(a) {
  let e, s;
  const t = a[8].default,
    l = Lt(t, a, a[7], ut);
  return {
    c() {
      (e = v('div')), l && l.c();
    },
    l(n) {
      e = g(n, 'DIV', {});
      var i = d(e);
      l && l.l(i), i.forEach(u);
    },
    m(n, i) {
      I(n, e, i), l && l.m(e, null), a[9](e), (s = !0);
    },
    p(n, [i]) {
      l &&
        l.p &&
        (!s || i & 129) &&
        Ct(l, t, n, n[7], s ? xt(t, n[7], i, fs) : It(n[7]), ut);
    },
    i(n) {
      s || (x(l, n), (s = !0));
    },
    o(n) {
      H(l, n), (s = !1);
    },
    d(n) {
      n && u(e), l && l.d(n), a[9](null);
    },
  };
}
function ps(a, e, s) {
  let { $$slots: t = {}, $$scope: l } = e,
    { once: n = !1 } = e,
    { top: i = 0 } = e,
    { bottom: o = 0 } = e,
    { left: r = 0 } = e,
    { right: h = 0 } = e,
    _ = !1,
    p;
  mt(() => {
    if (typeof IntersectionObserver != 'undefined') {
      const E = `${o}px ${r}px ${i}px ${h}px`,
        C = new IntersectionObserver(
          (S) => {
            s(0, (_ = S[0].isIntersecting)), _ && n && C.unobserve(p);
          },
          { rootMargin: E }
        );
      return C.observe(p), () => C.unobserve(p);
    }
    function m() {
      const E = p.getBoundingClientRect();
      s(
        0,
        (_ =
          E.bottom + o > 0 &&
          E.right + h > 0 &&
          E.top - i < window.innerHeight &&
          E.left - r < window.innerWidth)
      ),
        _ && n && window.removeEventListener('scroll', m);
    }
    return (
      window.addEventListener('scroll', m),
      () => window.removeEventListener('scroll', m)
    );
  });
  function $(m) {
    At[m ? 'unshift' : 'push'](() => {
      (p = m), s(1, p);
    });
  }
  return (
    (a.$$set = (m) => {
      'once' in m && s(2, (n = m.once)),
        'top' in m && s(3, (i = m.top)),
        'bottom' in m && s(4, (o = m.bottom)),
        'left' in m && s(5, (r = m.left)),
        'right' in m && s(6, (h = m.right)),
        '$$scope' in m && s(7, (l = m.$$scope));
    }),
    [_, p, n, i, o, r, h, l, t, $]
  );
}
class vt extends ue {
  constructor(e) {
    super(),
      fe(this, e, ps, hs, he, {
        once: 2,
        top: 3,
        bottom: 4,
        left: 5,
        right: 6,
      });
  }
}
function ds(a) {
  let e;
  return {
    c() {
      (e = v('div')), this.h();
    },
    l(s) {
      (e = g(s, 'DIV', { class: !0 })), d(e).forEach(u), this.h();
    },
    h() {
      c(e, 'class', 'image svelte-1sz614n');
    },
    m(s, t) {
      I(s, e, t);
    },
    p: W,
    d(s) {
      s && u(e);
    },
  };
}
function _s(a) {
  let e, s;
  return {
    c() {
      (e = v('div')), this.h();
    },
    l(t) {
      (e = g(t, 'DIV', { class: !0, style: !0 })), d(e).forEach(u), this.h();
    },
    h() {
      c(e, 'class', 'image svelte-1sz614n'),
        c(e, 'style', (s = `background-image: url(${a[1]});`));
    },
    m(t, l) {
      I(t, e, l);
    },
    p(t, l) {
      l & 2 &&
        s !== (s = `background-image: url(${t[1]});`) &&
        c(e, 'style', s);
    },
    d(t) {
      t && u(e);
    },
  };
}
function ms(a) {
  let e;
  function s(n, i) {
    return n[4] ? _s : ds;
  }
  let t = s(a),
    l = t(a);
  return {
    c() {
      l.c(), (e = me());
    },
    l(n) {
      l.l(n), (e = me());
    },
    m(n, i) {
      l.m(n, i), I(n, e, i);
    },
    p(n, i) {
      t === (t = s(n)) && l
        ? l.p(n, i)
        : (l.d(1), (l = t(n)), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(n) {
      l.d(n), n && u(e);
    },
  };
}
function vs(a) {
  let e, s, t, l, n, i, o;
  return (
    (t = new vt({
      props: {
        top: 600,
        once: !0,
        $$slots: {
          default: [
            ms,
            ({ intersecting: r }) => ({ 4: r }),
            ({ intersecting: r }) => (r ? 16 : 0),
          ],
        },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        (e = v('div')),
          (s = v('a')),
          ae(t.$$.fragment),
          (l = M()),
          (n = v('p')),
          (i = O(a[2])),
          this.h();
      },
      l(r) {
        e = g(r, 'DIV', { class: !0, title: !0 });
        var h = d(e);
        s = g(h, 'A', { href: !0, class: !0 });
        var _ = d(s);
        ce(t.$$.fragment, _), (l = B(_)), (n = g(_, 'P', { class: !0 }));
        var p = d(n);
        (i = q(p, a[2])), p.forEach(u), _.forEach(u), h.forEach(u), this.h();
      },
      h() {
        c(n, 'class', 'svelte-1sz614n'),
          c(s, 'href', a[0]),
          c(s, 'class', 'svelte-1sz614n'),
          c(e, 'class', 'referral svelte-1sz614n'),
          c(e, 'title', a[3]);
      },
      m(r, h) {
        I(r, e, h),
          f(e, s),
          oe(t, s, null),
          f(s, l),
          f(s, n),
          f(n, i),
          (o = !0);
      },
      p(r, [h]) {
        const _ = {};
        h & 50 && (_.$$scope = { dirty: h, ctx: r }),
          t.$set(_),
          (!o || h & 4) && ve(i, r[2]),
          (!o || h & 1) && c(s, 'href', r[0]),
          (!o || h & 8) && c(e, 'title', r[3]);
      },
      i(r) {
        o || (x(t.$$.fragment, r), (o = !0));
      },
      o(r) {
        H(t.$$.fragment, r), (o = !1);
      },
      d(r) {
        r && u(e), re(t);
      },
    }
  );
}
function gs(a, e, s) {
  let { url: t } = e,
    { image: l } = e,
    { title: n } = e,
    { description: i } = e;
  return (
    (a.$$set = (o) => {
      'url' in o && s(0, (t = o.url)),
        'image' in o && s(1, (l = o.image)),
        'title' in o && s(2, (n = o.title)),
        'description' in o && s(3, (i = o.description));
    }),
    [t, l, n, i]
  );
}
class ks extends ue {
  constructor(e) {
    super(),
      fe(this, e, gs, vs, he, { url: 0, image: 1, title: 2, description: 3 });
  }
}
function ft(a, e, s) {
  const t = a.slice();
  return (t[3] = e[s]), t;
}
function ht(a) {
  let e,
    s,
    t = a[0],
    l = [];
  for (let i = 0; i < t.length; i += 1) l[i] = pt(ft(a, t, i));
  const n = (i) =>
    H(l[i], 1, 1, () => {
      l[i] = null;
    });
  return {
    c() {
      e = v('nav');
      for (let i = 0; i < l.length; i += 1) l[i].c();
      this.h();
    },
    l(i) {
      e = g(i, 'NAV', { class: !0 });
      var o = d(e);
      for (let r = 0; r < l.length; r += 1) l[r].l(o);
      o.forEach(u), this.h();
    },
    h() {
      c(e, 'class', 'referral-rail row svelte-5ls690');
    },
    m(i, o) {
      I(i, e, o);
      for (let r = 0; r < l.length; r += 1) l[r].m(e, null);
      s = !0;
    },
    p(i, o) {
      if (o & 1) {
        t = i[0];
        let r;
        for (r = 0; r < t.length; r += 1) {
          const h = ft(i, t, r);
          l[r]
            ? (l[r].p(h, o), x(l[r], 1))
            : ((l[r] = pt(h)), l[r].c(), x(l[r], 1), l[r].m(e, null));
        }
        for (de(), r = t.length; r < l.length; r += 1) n(r);
        _e();
      }
    },
    i(i) {
      if (!s) {
        for (let o = 0; o < t.length; o += 1) x(l[o]);
        s = !0;
      }
    },
    o(i) {
      l = l.filter(Boolean);
      for (let o = 0; o < l.length; o += 1) H(l[o]);
      s = !1;
    },
    d(i) {
      i && u(e), ke(l, i);
    },
  };
}
function pt(a) {
  let e, s;
  const t = [a[3]];
  let l = {};
  for (let n = 0; n < t.length; n += 1) l = Tt(l, t[n]);
  return (
    (e = new ks({ props: l })),
    {
      c() {
        ae(e.$$.fragment);
      },
      l(n) {
        ce(e.$$.fragment, n);
      },
      m(n, i) {
        oe(e, n, i), (s = !0);
      },
      p(n, i) {
        const o = i & 1 ? St(t, [Rt(n[3])]) : {};
        e.$set(o);
      },
      i(n) {
        s || (x(e.$$.fragment, n), (s = !0));
      },
      o(n) {
        H(e.$$.fragment, n), (s = !1);
      },
      d(n) {
        re(e, n);
      },
    }
  );
}
function ws(a) {
  let e,
    s,
    t = a[0] && ht(a);
  return {
    c() {
      t && t.c(), (e = me());
    },
    l(l) {
      t && t.l(l), (e = me());
    },
    m(l, n) {
      t && t.m(l, n), I(l, e, n), (s = !0);
    },
    p(l, [n]) {
      l[0]
        ? t
          ? (t.p(l, n), n & 1 && x(t, 1))
          : ((t = ht(l)), t.c(), x(t, 1), t.m(e.parentNode, e))
        : t &&
          (de(),
          H(t, 1, 1, () => {
            t = null;
          }),
          _e());
    },
    i(l) {
      s || (x(t), (s = !0));
    },
    o(l) {
      H(t), (s = !1);
    },
    d(l) {
      t && t.d(l), l && u(e);
    },
  };
}
function $s(a, e, s) {
  let t,
    { referrals: l = [] } = e,
    n;
  return (
    mt(() => {
      if (t.length === 4) {
        s(0, (n = t));
        return;
      }
      fetch(
        'https://graphics.thomsonreuters.com/data/reuters-graphics/homepage/graphics.json'
      )
        .then((i) => i.json())
        .then((i) => {
          const o = i
            .filter(({ canonical: r }) => {
              const h = window.location.pathname
                .replace(/\/index\.html$/, '')
                .replace(/\/$/, '');
              return h ? !r.includes(h) : !0;
            })
            .slice(0, 4)
            .map(({ url: r, image: h, title: _, description: p }) => ({
              url: r,
              image: h,
              title: _,
              description: p,
            }));
          s(0, (n = [...t, ...o].slice(0, 4)));
        });
    }),
    (a.$$set = (i) => {
      'referrals' in i && s(1, (l = i.referrals));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 2 &&
        (t = l.filter((i) => i.url && i.title && i.image).slice(0, 4));
    }),
    [n, l]
  );
}
class bs extends ue {
  constructor(e) {
    super(), fe(this, e, $s, ws, he, { referrals: 1 });
  }
}
function Es(a) {
  let e, s;
  return (
    (e = new vt({
      props: {
        top: 2400,
        once: !0,
        $$slots: {
          default: [
            ys,
            ({ intersecting: t }) => ({ 1: t }),
            ({ intersecting: t }) => (t ? 2 : 0),
          ],
        },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        ae(e.$$.fragment);
      },
      l(t) {
        ce(e.$$.fragment, t);
      },
      m(t, l) {
        oe(e, t, l), (s = !0);
      },
      p(t, l) {
        const n = {};
        l & 7 && (n.$$scope = { dirty: l, ctx: t }), e.$set(n);
      },
      i(t) {
        s || (x(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        H(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        re(e, t);
      },
    }
  );
}
function dt(a) {
  let e, s;
  return (
    (e = new bs({ props: { referrals: a[0] } })),
    {
      c() {
        ae(e.$$.fragment);
      },
      l(t) {
        ce(e.$$.fragment, t);
      },
      m(t, l) {
        oe(e, t, l), (s = !0);
      },
      p(t, l) {
        const n = {};
        l & 1 && (n.referrals = t[0]), e.$set(n);
      },
      i(t) {
        s || (x(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        H(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        re(e, t);
      },
    }
  );
}
function ys(a) {
  let e,
    s,
    t = a[1] && dt(a);
  return {
    c() {
      t && t.c(), (e = me());
    },
    l(l) {
      t && t.l(l), (e = me());
    },
    m(l, n) {
      t && t.m(l, n), I(l, e, n), (s = !0);
    },
    p(l, n) {
      l[1]
        ? t
          ? (t.p(l, n), n & 2 && x(t, 1))
          : ((t = dt(l)), t.c(), x(t, 1), t.m(e.parentNode, e))
        : t &&
          (de(),
          H(t, 1, 1, () => {
            t = null;
          }),
          _e());
    },
    i(l) {
      s || (x(t), (s = !0));
    },
    o(l) {
      H(t), (s = !1);
    },
    d(l) {
      t && t.d(l), l && u(e);
    },
  };
}
function Ls(a) {
  let e,
    s,
    t,
    l,
    n,
    i,
    o = Es(a);
  return {
    c() {
      (e = v('section')),
        (s = v('h2')),
        (t = v('a')),
        (l = O('More from Reuters Graphics')),
        (n = M()),
        o && o.c(),
        this.h();
    },
    l(r) {
      e = g(r, 'SECTION', { class: !0 });
      var h = d(e);
      s = g(h, 'H2', { class: !0 });
      var _ = d(s);
      t = g(_, 'A', { href: !0, class: !0 });
      var p = d(t);
      (l = q(p, 'More from Reuters Graphics')),
        p.forEach(u),
        _.forEach(u),
        (n = B(h)),
        o && o.l(h),
        h.forEach(u),
        this.h();
    },
    h() {
      c(t, 'href', 'https://graphics.reuters.com/'),
        c(t, 'class', 'svelte-1pp4aaj'),
        c(s, 'class', 'svelte-1pp4aaj'),
        c(e, 'class', 'referrals svelte-1pp4aaj');
    },
    m(r, h) {
      I(r, e, h),
        f(e, s),
        f(s, t),
        f(t, l),
        f(e, n),
        o && o.m(e, null),
        (i = !0);
    },
    p(r, [h]) {
      o.p(r, h);
    },
    i(r) {
      i || (x(o), (i = !0));
    },
    o(r) {
      H(o), (i = !1);
    },
    d(r) {
      r && u(e), o && o.d();
    },
  };
}
function Cs(a, e, s) {
  let { referrals: t = [] } = e;
  return (
    (a.$$set = (l) => {
      'referrals' in l && s(0, (t = l.referrals));
    }),
    [t]
  );
}
class Is extends ue {
  constructor(e) {
    super(), fe(this, e, Cs, Ls, he, { referrals: 0 });
  }
}
var Ae = [
  {
    company_description:
      "Reuters, the news and media division of Thomson Reuters, is the world\u2019s largest multimedia news provider, reaching billions of people worldwide every day. Reuters provides business, financial, national and international news to professionals via desktop terminals, the world's media organizations, industry events and directly to consumers.",
    disclaimer_link: 'https://www.reuters.com/info-pages/disclaimer/',
    copyright_link: 'https://www.thomsonreuters.com/en/policies/copyright.html',
    copyright_year: '2022',
    latest_links: [{ text: 'Home', url: '/', self: !0 }],
    browse_links: [
      { text: 'World', url: '/world/', self: !0 },
      { text: 'Business', url: '/business/', self: !0 },
      { text: 'Legal', url: '/legal/', self: !0 },
      { text: 'Markets', url: '/markets/', self: !0 },
      { text: 'Breakingviews', url: '/breakingviews/', self: !0 },
      { text: 'Technology', url: '/technology/', self: !0 },
      { text: 'Investigations', url: '/investigates/' },
      { text: 'Lifestyle', url: '/lifestyle/', self: !0 },
    ],
    media_links: [
      {
        text: 'Videos',
        url: 'https://www.reuters.com/video/',
        symbol: 'videos',
      },
      {
        text: 'Pictures',
        url: 'https://www.reuters.com/news/pictures',
        symbol: 'pictures',
      },
      {
        text: 'Graphics',
        url: 'https://graphics.reuters.com/',
        symbol: 'graphics',
      },
    ],
    about_links: [
      {
        text: 'About Reuters',
        url: 'https://www.reutersagency.com/en/about/about-us/',
      },
      {
        text: 'Careers',
        url: 'https://www.thomsonreuters.com/en/careers.html',
      },
      {
        text: 'Reuters News Agency',
        url: 'https://www.reutersagency.com/en/?utm_source=website&utm_medium=reuters&utm_campaign=site-referral&utm_content=us&utm_term=0',
      },
      {
        text: 'Brand Attribution Guidelines',
        url: 'https://www.reutersagency.com/en/about/about-us/brand-attribution-guidelines/',
      },
      {
        text: 'Reuters Leadership',
        url: 'https://www.reutersagency.com/en/about/leadership-team/',
      },
      {
        text: 'Reuters Fact Check',
        url: 'https://www.reuters.com/fact-check/',
      },
      {
        text: 'Reuters Diversity Report',
        url: 'https://www.reuters.com/DiversityReportApril2022',
      },
    ],
    stay_informed_links: [
      {
        text: 'Download the App',
        url: 'https://www.reuters.com/tools/mobile/us',
      },
      {
        text: 'Newsletters',
        url: 'https://newslink.reuters.com/join/subscribe',
      },
    ],
    social_links: [
      { type: 'twitter', url: 'https://www.twitter.com/Reuters' },
      { type: 'facebook', url: 'https://www.facebook.com/Reuters' },
      { type: 'instagram', url: 'https://www.instagram.com/Reuters' },
      { type: 'youtube', url: 'https://www.youtube.com/user/ReutersVideo' },
      { type: 'linkedin', url: 'https://www.linkedin.com/company/10256858/' },
    ],
    tr_products: [
      {
        name: 'Westlaw',
        description:
          'Build the strongest argument relying on authoritative content, attorney-editor expertise, and industry defining technology.',
        url: 'https://legal.thomsonreuters.com/en/products/westlaw',
      },
      {
        name: 'Onesource',
        description:
          'The most comprehensive solution to manage all your complex and ever-expanding tax and compliance needs.',
        url: 'https://tax.thomsonreuters.com/en/onesource',
      },
      {
        name: 'Checkpoint',
        description:
          'The industry leader for online information for tax, accounting and finance professionals.',
        url: 'https://tax.thomsonreuters.com/en/checkpoint',
      },
    ],
    refinitiv_products: [
      {
        name: 'Refinitiv Workspace',
        description:
          ' Access unmatched financial data, news and content in a highly-customised workflow experience on desktop, web and mobile.',
        url: ' https://www.refinitiv.com/en/products/refinitiv-workspace',
      },
      {
        name: 'Refinitiv Data Catalogue',
        description:
          ' Browse an unrivalled portfolio of real-time and historical market data and insights from worldwide sources and experts.',
        url: ' https://www.refinitiv.com/en/financial-data',
      },
      {
        name: 'Refinitiv World-Check',
        description:
          'Screen for heightened risk individual and entities globally to help uncover hidden risks in business relationships and human networks.',
        url: 'https://www.refinitiv.com/en/products/world-check-kyc-screening',
      },
    ],
    ad_links: [
      {
        text: 'Advertise With Us',
        url: 'https://www.reutersagency.com/en/services/advertising-solutions/',
      },
      {
        text: 'Advertising Guidelines',
        url: '/info-pages/advertising-guidelines/',
      },
    ],
    misc_links: [
      {
        text: 'Cookies',
        url: 'https://www.thomsonreuters.com/en/privacy-statement.html#cookies',
      },
      { text: 'Terms of Use', url: '/info-pages/terms-of-use/' },
      {
        text: 'Privacy',
        url: 'https://www.thomsonreuters.com/en/privacy-statement.html',
      },
      {
        text: 'Digital Accessibility',
        url: 'https://www.thomsonreuters.com/en/policies/digital-accessibility-policy.html',
      },
      { text: 'Corrections', url: '/info-pages/contact-us/' },
      {
        text: 'Site Feedback',
        url: 'https://trdigital.iad1.qualtrics.com/jfe/form/SV_8kte8gArGyCGVhz',
      },
      {
        text: 'Do Not Sell My Personal Information',
        url: 'javascript:window.OneTrust.ToggleInfoDisplay();',
        self: 'true',
      },
    ],
  },
];
function xs(a) {
  let e, s, t, l, n, i, o, r, h, _;
  return (
    (t = new Is({ props: { referrals: a[0] } })),
    (n = new Ut({ props: { links: Ae[0] } })),
    (o = new os({ props: { links: Ae[0] } })),
    (h = new us({ props: { links: Ae[0] } })),
    {
      c() {
        (e = v('footer')),
          (s = v('div')),
          ae(t.$$.fragment),
          (l = M()),
          ae(n.$$.fragment),
          (i = M()),
          ae(o.$$.fragment),
          (r = M()),
          ae(h.$$.fragment),
          this.h();
      },
      l(p) {
        e = g(p, 'FOOTER', { style: !0, class: !0 });
        var $ = d(e);
        s = g($, 'DIV', { class: !0 });
        var m = d(s);
        ce(t.$$.fragment, m),
          (l = B(m)),
          ce(n.$$.fragment, m),
          (i = B(m)),
          ce(o.$$.fragment, m),
          (r = B(m)),
          ce(h.$$.fragment, m),
          m.forEach(u),
          $.forEach(u),
          this.h();
      },
      h() {
        c(s, 'class', 'svelte-1qd1kdn'),
          c(
            e,
            'style',
            `
    --nav-background: ${a[1].background};
    --nav-primary: ${a[1].primary};
    --nav-rules: ${a[1].rules};
  `
          ),
          c(e, 'class', 'svelte-1qd1kdn');
      },
      m(p, $) {
        I(p, e, $),
          f(e, s),
          oe(t, s, null),
          f(s, l),
          oe(n, s, null),
          f(s, i),
          oe(o, s, null),
          f(s, r),
          oe(h, s, null),
          (_ = !0);
      },
      p(p, [$]) {
        const m = {};
        $ & 1 && (m.referrals = p[0]), t.$set(m);
      },
      i(p) {
        _ ||
          (x(t.$$.fragment, p),
          x(n.$$.fragment, p),
          x(o.$$.fragment, p),
          x(h.$$.fragment, p),
          (_ = !0));
      },
      o(p) {
        H(t.$$.fragment, p),
          H(n.$$.fragment, p),
          H(o.$$.fragment, p),
          H(h.$$.fragment, p),
          (_ = !1);
      },
      d(p) {
        p && u(e), re(t), re(n), re(o), re(h);
      },
    }
  );
}
const Se = {
  default: { background: '#fff', primary: '#404040', rules: '#d0d0d0' },
  dark: { background: '#333', primary: '#eee', rules: '#999' },
};
function As(a, e, s) {
  let { theme: t = {} } = e,
    { referrals: l = [] } = e;
  const n = Ce(Ce({}, Se.default), t);
  return (
    (a.$$set = (i) => {
      'theme' in i && s(2, (t = i.theme)),
        'referrals' in i && s(0, (l = i.referrals));
    }),
    [l, n, t]
  );
}
class Re extends ue {
  constructor(e) {
    super(), fe(this, e, As, xs, he, { theme: 2, referrals: 0 });
  }
}
function Ss(a) {
  let e, s;
  return (
    (e = new Re({})),
    {
      c() {
        ae(e.$$.fragment);
      },
      l(t) {
        ce(e.$$.fragment, t);
      },
      m(t, l) {
        oe(e, t, l), (s = !0);
      },
      i(t) {
        s || (x(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        H(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        re(e, t);
      },
    }
  );
}
function Rs(a) {
  let e, s;
  return (
    (e = new Re({ props: { theme: Se.dark } })),
    {
      c() {
        ae(e.$$.fragment);
      },
      l(t) {
        ce(e.$$.fragment, t);
      },
      m(t, l) {
        oe(e, t, l), (s = !0);
      },
      p: W,
      i(t) {
        s || (x(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        H(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        re(e, t);
      },
    }
  );
}
function Ts(a) {
  let e, s;
  return (
    (e = new Re({
      props: {
        theme: Ne(Ce({}, Se.default), { background: '#e0d3b8', rules: '#aaa' }),
      },
    })),
    {
      c() {
        ae(e.$$.fragment);
      },
      l(t) {
        ce(e.$$.fragment, t);
      },
      m(t, l) {
        oe(e, t, l), (s = !0);
      },
      p: W,
      i(t) {
        s || (x(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        H(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        re(e, t);
      },
    }
  );
}
function Vs(a) {
  let e,
    s,
    t,
    l,
    n,
    i,
    o,
    r,
    h,
    _,
    p,
    $ = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteFooter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteFooter</span> <span class="token punctuation">/></span></span></code>`,
    m,
    E,
    C,
    S,
    T,
    P,
    b,
    F,
    w = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteFooter<span class="token punctuation">,</span> SiteFooterThemes <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteFooter</span> <span class="token attr-name">theme=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>SiteFooterThemes<span class="token punctuation">.</span>dark<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,
    Z,
    A,
    j,
    U,
    Q,
    D,
    V,
    z,
    L = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteFooter<span class="token punctuation">,</span> SiteFooterThemes <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteFooter</span> <span class="token attr-name">theme=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> <span class="token operator">...</span>themes<span class="token punctuation">.</span>default<span class="token punctuation">,</span> <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#e0d3b8'</span><span class="token punctuation">,</span> <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token string">'#aaa'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>

// Customisable props
<span class="token language-javascript"><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token string">'#404040'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token string">'#d0d0d0'</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></span></code>`,
    le,
    ie,
    G;
  return (
    (E = new Ie({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [Ss] },
        $$scope: { ctx: a },
      },
    })),
    (A = new Ie({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [Rs] },
        $$scope: { ctx: a },
      },
    })),
    (ie = new Ie({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [Ts] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        (e = v('section')),
          (s = v('h2')),
          (t = O(_t)),
          (l = M()),
          (n = v('p')),
          (i = O('Reuters dotcom site footer, ported from ')),
          (o = v('a')),
          (r = O('Raptor UI components')),
          (h = O('.')),
          (_ = M()),
          (p = v('pre')),
          (m = M()),
          ae(E.$$.fragment),
          (C = M()),
          (S = v('section')),
          (T = v('p')),
          (P = O('Change colours with exported themes.')),
          (b = M()),
          (F = v('pre')),
          (Z = M()),
          ae(A.$$.fragment),
          (j = M()),
          (U = v('section')),
          (Q = v('p')),
          (D = O('You can customise a colour theme.')),
          (V = M()),
          (z = v('pre')),
          (le = M()),
          ae(ie.$$.fragment),
          this.h();
      },
      l(k) {
        e = g(k, 'SECTION', {});
        var N = d(e);
        s = g(N, 'H2', {});
        var Y = d(s);
        (t = q(Y, _t)), Y.forEach(u), (l = B(N)), (n = g(N, 'P', {}));
        var ne = d(n);
        (i = q(ne, 'Reuters dotcom site footer, ported from ')),
          (o = g(ne, 'A', { href: !0, rel: !0 }));
        var J = d(o);
        (r = q(J, 'Raptor UI components')),
          J.forEach(u),
          (h = q(ne, '.')),
          ne.forEach(u),
          N.forEach(u),
          (_ = B(k)),
          (p = g(k, 'PRE', { class: !0 }));
        var y = d(p);
        y.forEach(u),
          (m = B(k)),
          ce(E.$$.fragment, k),
          (C = B(k)),
          (S = g(k, 'SECTION', {}));
        var X = d(S);
        T = g(X, 'P', {});
        var ee = d(T);
        (P = q(ee, 'Change colours with exported themes.')),
          ee.forEach(u),
          X.forEach(u),
          (b = B(k)),
          (F = g(k, 'PRE', { class: !0 }));
        var R = d(F);
        R.forEach(u),
          (Z = B(k)),
          ce(A.$$.fragment, k),
          (j = B(k)),
          (U = g(k, 'SECTION', {}));
        var pe = d(U);
        Q = g(pe, 'P', {});
        var $e = d(Q);
        (D = q($e, 'You can customise a colour theme.')),
          $e.forEach(u),
          pe.forEach(u),
          (V = B(k)),
          (z = g(k, 'PRE', { class: !0 }));
        var be = d(z);
        be.forEach(u), (le = B(k)), ce(ie.$$.fragment, k), this.h();
      },
      h() {
        c(
          o,
          'href',
          'https://github.com/tr/rcom-arc_raptor-ui/tree/develop/packages/rcom-raptor-ui_common/src/components/site-footer'
        ),
          c(o, 'rel', 'nofollow'),
          c(p, 'class', 'language-svelte'),
          c(F, 'class', 'language-svelte'),
          c(z, 'class', 'language-svelte');
      },
      m(k, N) {
        I(k, e, N),
          f(e, s),
          f(s, t),
          f(e, l),
          f(e, n),
          f(n, i),
          f(n, o),
          f(o, r),
          f(n, h),
          I(k, _, N),
          I(k, p, N),
          (p.innerHTML = $),
          I(k, m, N),
          oe(E, k, N),
          I(k, C, N),
          I(k, S, N),
          f(S, T),
          f(T, P),
          I(k, b, N),
          I(k, F, N),
          (F.innerHTML = w),
          I(k, Z, N),
          oe(A, k, N),
          I(k, j, N),
          I(k, U, N),
          f(U, Q),
          f(Q, D),
          I(k, V, N),
          I(k, z, N),
          (z.innerHTML = L),
          I(k, le, N),
          oe(ie, k, N),
          (G = !0);
      },
      p(k, [N]) {
        const Y = {};
        N & 1 && (Y.$$scope = { dirty: N, ctx: k }), E.$set(Y);
        const ne = {};
        N & 1 && (ne.$$scope = { dirty: N, ctx: k }), A.$set(ne);
        const J = {};
        N & 1 && (J.$$scope = { dirty: N, ctx: k }), ie.$set(J);
      },
      i(k) {
        G ||
          (x(E.$$.fragment, k),
          x(A.$$.fragment, k),
          x(ie.$$.fragment, k),
          (G = !0));
      },
      o(k) {
        H(E.$$.fragment, k),
          H(A.$$.fragment, k),
          H(ie.$$.fragment, k),
          (G = !1);
      },
      d(k) {
        k && u(e),
          k && u(_),
          k && u(p),
          k && u(m),
          re(E, k),
          k && u(C),
          k && u(S),
          k && u(b),
          k && u(F),
          k && u(Z),
          re(A, k),
          k && u(j),
          k && u(U),
          k && u(V),
          k && u(z),
          k && u(le),
          re(ie, k);
      },
    }
  );
}
const Ms = {
    title: 'SiteFooter',
    description: 'Reuters dotcom site footer shadow component.',
    slug: 'site-footer',
  },
  { title: _t, description: qs, slug: Fs } = Ms;
class Us extends ue {
  constructor(e) {
    super(), fe(this, e, null, Vs, he, {});
  }
}
export { Us as default, Ms as metadata };
