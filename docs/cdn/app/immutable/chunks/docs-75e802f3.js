var ft = Object.defineProperty,
  ht = Object.defineProperties;
var pt = Object.getOwnPropertyDescriptors;
var He = Object.getOwnPropertySymbols;
var dt = Object.prototype.hasOwnProperty,
  mt = Object.prototype.propertyIsEnumerable;
var Ze = (r, e, s) =>
    e in r
      ? ft(r, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (r[e] = s),
  Ce = (r, e) => {
    for (var s in e || (e = {})) dt.call(e, s) && Ze(r, s, e[s]);
    if (He) for (var s of He(e)) mt.call(e, s) && Ze(r, s, e[s]);
    return r;
  },
  De = (r, e) => ht(r, pt(e));
import {
  S as ue,
  i as fe,
  s as he,
  K as te,
  t as N,
  L as se,
  a as h,
  h as O,
  d as c,
  b as i,
  g as R,
  J as u,
  E as z,
  T as _t,
  e as k,
  k as M,
  c as g,
  m as V,
  n as ve,
  o as P,
  p as ke,
  q,
  j as me,
  B as oe,
  w as ie,
  y as ce,
  _ as _e,
  l as we,
  V as vt,
  x as pe,
  f as ge,
} from './index-83a5d9f9.js';
import { n as K } from './index-c889ff85.js';
import './main-d0cec6fc.js';
import { D as xe } from './index-16ec1060.js';
import './paths-396f020f.js';
function kt(r) {
  let e, s, t, l, a;
  return {
    c() {
      (e = te('svg')),
        (s = te('title')),
        (t = N('Gallery')),
        (l = te('path')),
        (a = te('path')),
        this.h();
    },
    l(f) {
      e = se(f, 'svg', {
        xmlns: !0,
        viewBox: !0,
        role: !0,
        'aria-hidden': !0,
        focusable: !0,
        class: !0,
      });
      var o = h(e);
      s = se(o, 'title', {});
      var n = h(s);
      (t = O(n, 'Gallery')),
        n.forEach(c),
        (l = se(o, 'path', { d: !0 })),
        h(l).forEach(c),
        (a = se(o, 'path', { d: !0 })),
        h(a).forEach(c),
        o.forEach(c),
        this.h();
    },
    h() {
      i(
        l,
        'd',
        'M13.3331429,0.38114286 L2.66628571,0.38114286 C1.37085714,0.38114286 0.38057143,1.37142857 0.38057143,2.66685714 L0.38057143,13.3337143 C0.38057143,14.6291429 1.37085714,15.6194286 2.66628571,15.6194286 L13.3331429,15.6194286 C14.6285714,15.6194286 15.6188571,14.6291429 15.6188571,13.3337143 L15.6188571,2.66685714 C15.6188571,1.37142857 14.6285714,0.38114286 13.3331429,0.38114286 Z M1.90457143,2.66685714 C1.90457143,2.20971429 2.20914286,1.90514286 2.66628571,1.90514286 L13.3331429,1.90514286 C13.7902857,1.90514286 14.0948571,2.20971429 14.0948571,2.66685714 L14.0948571,8.4571429 L11.5805714,5.94285714 C11.276,5.63828571 10.8188571,5.63828571 10.5137143,5.94285714 L2.43771429,14.0188571 C2.13314286,13.9428571 1.90457143,13.6377143 1.90457143,13.3331429 L1.90457143,2.66628571 L1.90457143,2.66685714 Z M13.3331429,14.0954286 L4.49485714,14.0954286 L11.0474286,7.5428571 L14.0948571,10.5902857 L14.0948571,13.3331429 C14.0948571,13.7902857 13.7902857,14.0948571 13.3331429,14.0948571 L13.3331429,14.0954286 Z'
      ),
        i(
          a,
          'd',
          'M5.33314286,7.2382857 C6.4,7.2382857 7.2377143,6.4 7.2377143,5.33371429 C7.2377143,4.26742857 6.3994286,3.42914286 5.33314286,3.42914286 C4.26685714,3.42914286 3.42857143,4.26742857 3.42857143,5.33371429 C3.42857143,6.4 4.26685714,7.2382857 5.33314286,7.2382857 Z M5.33314286,4.95257143 C5.56171429,4.95257143 5.71428571,5.10514286 5.71428571,5.33371429 C5.71428571,5.56228571 5.56171429,5.71485714 5.33314286,5.71485714 C5.10457143,5.71485714 4.952,5.56228571 4.952,5.33371429 C4.952,5.10514286 5.10457143,4.95257143 5.33314286,4.95257143 Z'
        ),
        i(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        i(e, 'viewBox', '0 0 16 16'),
        i(e, 'role', 'img'),
        i(e, 'aria-hidden', 'true'),
        i(e, 'focusable', 'false'),
        i(e, 'class', 'svelte-17648ki');
    },
    m(f, o) {
      R(f, e, o), u(e, s), u(s, t), u(e, l), u(e, a);
    },
    p: z,
    i: z,
    o: z,
    d(f) {
      f && c(e);
    },
  };
}
class gt extends ue {
  constructor(e) {
    super(), fe(this, e, null, kt, he, {});
  }
}
function wt(r) {
  let e, s, t, l;
  return {
    c() {
      (e = te('svg')),
        (s = te('title')),
        (t = N('Pictures')),
        (l = te('path')),
        this.h();
    },
    l(a) {
      e = se(a, 'svg', {
        xmlns: !0,
        viewBox: !0,
        role: !0,
        'aria-hidden': !0,
        focusable: !0,
        class: !0,
      });
      var f = h(e);
      s = se(f, 'title', {});
      var o = h(s);
      (t = O(o, 'Pictures')),
        o.forEach(c),
        (l = se(f, 'path', { d: !0 })),
        h(l).forEach(c),
        f.forEach(c),
        this.h();
    },
    h() {
      i(
        l,
        'd',
        'M13.1256562,0 C13.3881562,0 13.6506562,0.17954776 13.825875,0.3597705 L15.3135937,2.69996625 L18.375,2.69996625 C19.8627187,2.69996625 21,3.8697266 21,5.3999325 L21,15.3000337 C21,16.8302396 19.8627187,18 18.375,18 L2.625,18 C1.13728125,18 0,16.8302396 0,15.3000337 L0,5.3999325 C0,3.8697266 1.13728125,2.69996625 2.625,2.69996625 L5.6877187,2.69996625 L7.1754375,0.3597705 C7.3506562,0.18022275 7.6131562,0 7.8756562,0 L13.1256562,0 Z M12.6013125,1.79952751 L8.3140312,1.79952751 L6.8263125,4.1397233 C6.6510937,4.319271 6.3885937,4.4994938 6.1260937,4.4994938 L2.6263125,4.4994938 C2.1013125,4.4994938 1.75153125,4.8592643 1.75153125,5.3992575 L1.75153125,15.2993588 C1.75153125,15.839352 2.1013125,16.1991225 2.6263125,16.1991225 L18.3763125,16.1991225 C18.9013125,16.1991225 19.2510937,15.839352 19.2510937,15.2993588 L19.2510937,5.3992575 C19.2510937,4.8592643 18.9013125,4.4994938 18.3763125,4.4994938 L14.8765312,4.4994938 C14.6140312,4.4994938 14.3515312,4.319946 14.0890312,4.1397233 L12.6013125,1.79952751 Z M10.5013125,5.3999325 C12.95175,5.3999325 14.8765312,7.3796828 14.8765312,9.9001012 C14.8765312,12.4205197 12.95175,14.40027 10.5013125,14.40027 C8.050875,14.40027 6.1260937,12.4205197 6.1260937,9.9001012 C6.1260937,7.3796828 8.0515312,5.3999325 10.5013125,5.3999325 Z M10.5013125,7.19946 C9.0135937,7.19946 7.8763125,8.3692204 7.8763125,9.8994263 C7.8763125,11.4296321 9.0135937,12.5993925 10.5013125,12.5993925 C11.9890312,12.5993925 13.1263125,11.4296321 13.1263125,9.8994263 C13.1263125,8.3692204 11.9890312,7.19946 10.5013125,7.19946 Z'
      ),
        i(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        i(e, 'viewBox', '0 0 21 18'),
        i(e, 'role', 'img'),
        i(e, 'aria-hidden', 'true'),
        i(e, 'focusable', 'false'),
        i(e, 'class', 'svelte-17648ki');
    },
    m(a, f) {
      R(a, e, f), u(e, s), u(s, t), u(e, l);
    },
    p: z,
    i: z,
    o: z,
    d(a) {
      a && c(e);
    },
  };
}
class $t extends ue {
  constructor(e) {
    super(), fe(this, e, null, wt, he, {});
  }
}
function bt(r) {
  let e, s, t, l;
  return {
    c() {
      (e = te('svg')),
        (s = te('title')),
        (t = N('Videos')),
        (l = te('path')),
        this.h();
    },
    l(a) {
      e = se(a, 'svg', {
        xmlns: !0,
        viewBox: !0,
        role: !0,
        'aria-hidden': !0,
        focusable: !0,
        class: !0,
      });
      var f = h(e);
      s = se(f, 'title', {});
      var o = h(s);
      (t = O(o, 'Videos')),
        o.forEach(c),
        (l = se(f, 'path', { d: !0 })),
        h(l).forEach(c),
        f.forEach(c),
        this.h();
    },
    h() {
      i(
        l,
        'd',
        'M15.6665,1.5665 C15.4665,1.433 15.2,1.5 15,1.633 L11.3335,4.233 L11.3335,2.1665 C11.3335,1.033 10.467,0.1665 9.3335,0.1665 L2,0.1665 C0.8665,0.1665 0,1.033 0,2.1665 L0,8.833 C0,9.9665 0.8665,10.833 2,10.833 L9.3335,10.833 C10.467,10.833 11.3335,9.9665 11.3335,8.833 L11.3335,6.7665 L14.9335,9.3665 C15.067,9.433 15.2,9.5 15.3335,9.5 C15.467,9.5 15.5335,9.5 15.667,9.4335 C15.867,9.3 16.0005,9.1 16.0005,8.8335 L16.0005,2.167 C16.0005,1.9005 15.867,1.7005 15.667,1.567 L15.6665,1.5665 Z M10,8.8335 C10,9.2335 9.7335,9.5 9.3335,9.5 L2,9.5 C1.6,9.5 1.3335,9.2335 1.3335,8.8335 L1.3335,2.167 C1.3335,1.767 1.6,1.5005 2,1.5005 L9.3335,1.5005 C9.7335,1.5005 10,1.767 10,2.167 L10,8.8335 Z M14.6665,7.5665 L11.8,5.5 L14.6665,3.4335 L14.6665,7.567 L14.6665,7.5665 Z'
      ),
        i(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        i(e, 'viewBox', '0 0 16 11'),
        i(e, 'role', 'img'),
        i(e, 'aria-hidden', 'true'),
        i(e, 'focusable', 'false'),
        i(e, 'class', 'svelte-17648ki');
    },
    m(a, f) {
      R(a, e, f), u(e, s), u(s, t), u(e, l);
    },
    p: z,
    i: z,
    o: z,
    d(a) {
      a && c(e);
    },
  };
}
class Et extends ue {
  constructor(e) {
    super(), fe(this, e, null, bt, he, {});
  }
}
function Ne(r, e, s) {
  const t = r.slice();
  return (t[4] = e[s]), t;
}
function Oe(r, e, s) {
  const t = r.slice();
  return (t[4] = e[s]), t;
}
function qe(r, e, s) {
  const t = r.slice();
  return (t[4] = e[s]), t;
}
function Fe(r, e, s) {
  const t = r.slice();
  return (t[4] = e[s]), t;
}
function Ue(r, e, s) {
  const t = r.slice();
  return (t[4] = e[s]), t;
}
function Pe(r, e, s) {
  const t = r.slice();
  return (t[4] = e[s]), t;
}
function je(r, e, s) {
  const t = r.slice();
  return (t[4] = e[s]), t;
}
function Ge(r) {
  let e,
    s,
    t,
    l,
    a,
    f,
    o,
    n,
    d,
    m,
    v,
    b,
    $,
    y,
    C,
    S,
    A,
    j,
    w,
    D,
    _,
    Z,
    x,
    U,
    F,
    Q,
    B,
    T;
  const G = [Lt, yt],
    L = [];
  function le(E, X) {
    return E[1] < Ie ? 0 : 1;
  }
  (f = le(r)), (o = L[f] = G[f](r));
  let ne = r[0].browse_links,
    W = [];
  for (let E = 0; E < ne.length; E += 1) W[E] = Je(Fe(r, ne, E));
  let p = r[1] >= Ie && Ke(r),
    H = r[0].about_links,
    Y = [];
  for (let E = 0; E < H.length; E += 1) Y[E] = Xe(Oe(r, H, E));
  let ae = r[0].stay_informed_links,
    J = [];
  for (let E = 0; E < ae.length; E += 1) J[E] = et(Ne(r, ae, E));
  return {
    c() {
      (e = k('section')),
        (s = k('h2')),
        (t = N('Site Index')),
        (l = M()),
        (a = k('div')),
        o.c(),
        (n = M()),
        (d = k('section')),
        (m = k('h3')),
        (v = N('Browse')),
        (b = M()),
        ($ = k('ul'));
      for (let E = 0; E < W.length; E += 1) W[E].c();
      (y = M()),
        p && p.c(),
        (C = M()),
        (S = k('div')),
        (A = k('section')),
        (j = k('h3')),
        (w = N('About Reuters')),
        (D = M()),
        (_ = k('ul'));
      for (let E = 0; E < Y.length; E += 1) Y[E].c();
      (Z = M()),
        (x = k('section')),
        (U = k('h3')),
        (F = N('Stay Informed')),
        (Q = M()),
        (B = k('ul'));
      for (let E = 0; E < J.length; E += 1) J[E].c();
      this.h();
    },
    l(E) {
      e = g(E, 'SECTION', { class: !0 });
      var X = h(e);
      s = g(X, 'H2', { class: !0 });
      var ee = h(s);
      (t = O(ee, 'Site Index')),
        ee.forEach(c),
        (l = V(X)),
        (a = g(X, 'DIV', { class: !0 }));
      var I = h(a);
      o.l(I), (n = V(I)), (d = g(I, 'SECTION', { class: !0 }));
      var re = h(d);
      m = g(re, 'H3', { class: !0 });
      var $e = h(m);
      (v = O($e, 'Browse')),
        $e.forEach(c),
        (b = V(re)),
        ($ = g(re, 'UL', { class: !0 }));
      var be = h($);
      for (let de = 0; de < W.length; de += 1) W[de].l(be);
      be.forEach(c),
        re.forEach(c),
        (y = V(I)),
        p && p.l(I),
        (C = V(I)),
        (S = g(I, 'DIV', { class: !0 }));
      var Ee = h(S);
      A = g(Ee, 'SECTION', { class: !0 });
      var ye = h(A);
      j = g(ye, 'H3', { class: !0 });
      var Re = h(j);
      (w = O(Re, 'About Reuters')),
        Re.forEach(c),
        (D = V(ye)),
        (_ = g(ye, 'UL', { class: !0 }));
      var Me = h(_);
      for (let de = 0; de < Y.length; de += 1) Y[de].l(Me);
      Me.forEach(c),
        ye.forEach(c),
        (Z = V(Ee)),
        (x = g(Ee, 'SECTION', { class: !0 }));
      var Le = h(x);
      U = g(Le, 'H3', { class: !0 });
      var Ve = h(U);
      (F = O(Ve, 'Stay Informed')),
        Ve.forEach(c),
        (Q = V(Le)),
        (B = g(Le, 'UL', { class: !0 }));
      var Be = h(B);
      for (let de = 0; de < J.length; de += 1) J[de].l(Be);
      Be.forEach(c),
        Le.forEach(c),
        Ee.forEach(c),
        I.forEach(c),
        X.forEach(c),
        this.h();
    },
    h() {
      i(s, 'class', 'visually-hidden svelte-fhk6t1'),
        i(m, 'class', 'svelte-fhk6t1'),
        i($, 'class', 'svelte-fhk6t1'),
        i(d, 'class', 'link-group svelte-fhk6t1'),
        i(j, 'class', 'svelte-fhk6t1'),
        i(_, 'class', 'svelte-fhk6t1'),
        i(A, 'class', 'about'),
        i(U, 'class', 'svelte-fhk6t1'),
        i(B, 'class', 'svelte-fhk6t1'),
        i(x, 'class', 'stay-informed svelte-fhk6t1'),
        i(S, 'class', 'about-and-stay-informed svelte-fhk6t1'),
        i(a, 'class', 'content-container svelte-fhk6t1'),
        i(e, 'class', 'quick-links svelte-fhk6t1');
    },
    m(E, X) {
      R(E, e, X),
        u(e, s),
        u(s, t),
        u(e, l),
        u(e, a),
        L[f].m(a, null),
        u(a, n),
        u(a, d),
        u(d, m),
        u(m, v),
        u(d, b),
        u(d, $);
      for (let ee = 0; ee < W.length; ee += 1) W[ee].m($, null);
      u(a, y),
        p && p.m(a, null),
        u(a, C),
        u(a, S),
        u(S, A),
        u(A, j),
        u(j, w),
        u(A, D),
        u(A, _);
      for (let ee = 0; ee < Y.length; ee += 1) Y[ee].m(_, null);
      u(S, Z), u(S, x), u(x, U), u(U, F), u(x, Q), u(x, B);
      for (let ee = 0; ee < J.length; ee += 1) J[ee].m(B, null);
      T = !0;
    },
    p(E, X) {
      let ee = f;
      if (
        ((f = le(E)),
        f === ee
          ? L[f].p(E, X)
          : (ve(),
            P(L[ee], 1, 1, () => {
              L[ee] = null;
            }),
            ke(),
            (o = L[f]),
            o ? o.p(E, X) : ((o = L[f] = G[f](E)), o.c()),
            q(o, 1),
            o.m(a, n)),
        X & 1)
      ) {
        ne = E[0].browse_links;
        let I;
        for (I = 0; I < ne.length; I += 1) {
          const re = Fe(E, ne, I);
          W[I] ? W[I].p(re, X) : ((W[I] = Je(re)), W[I].c(), W[I].m($, null));
        }
        for (; I < W.length; I += 1) W[I].d(1);
        W.length = ne.length;
      }
      if (
        (E[1] >= Ie
          ? p
            ? (p.p(E, X), X & 2 && q(p, 1))
            : ((p = Ke(E)), p.c(), q(p, 1), p.m(a, C))
          : p &&
            (ve(),
            P(p, 1, 1, () => {
              p = null;
            }),
            ke()),
        X & 1)
      ) {
        H = E[0].about_links;
        let I;
        for (I = 0; I < H.length; I += 1) {
          const re = Oe(E, H, I);
          Y[I] ? Y[I].p(re, X) : ((Y[I] = Xe(re)), Y[I].c(), Y[I].m(_, null));
        }
        for (; I < Y.length; I += 1) Y[I].d(1);
        Y.length = H.length;
      }
      if (X & 1) {
        ae = E[0].stay_informed_links;
        let I;
        for (I = 0; I < ae.length; I += 1) {
          const re = Ne(E, ae, I);
          J[I] ? J[I].p(re, X) : ((J[I] = et(re)), J[I].c(), J[I].m(B, null));
        }
        for (; I < J.length; I += 1) J[I].d(1);
        J.length = ae.length;
      }
    },
    i(E) {
      T || (q(o), q(p), (T = !0));
    },
    o(E) {
      P(o), P(p), (T = !1);
    },
    d(E) {
      E && c(e), L[f].d(), _e(W, E), p && p.d(), _e(Y, E), _e(J, E);
    },
  };
}
function yt(r) {
  let e,
    s,
    t,
    l,
    a,
    f = r[0].latest_links,
    o = [];
  for (let n = 0; n < f.length; n += 1) o[n] = We(Ue(r, f, n));
  return {
    c() {
      (e = k('section')),
        (s = k('h3')),
        (t = N('Latest')),
        (l = M()),
        (a = k('ul'));
      for (let n = 0; n < o.length; n += 1) o[n].c();
      this.h();
    },
    l(n) {
      e = g(n, 'SECTION', { class: !0 });
      var d = h(e);
      s = g(d, 'H3', { class: !0 });
      var m = h(s);
      (t = O(m, 'Latest')),
        m.forEach(c),
        (l = V(d)),
        (a = g(d, 'UL', { class: !0 }));
      var v = h(a);
      for (let b = 0; b < o.length; b += 1) o[b].l(v);
      v.forEach(c), d.forEach(c), this.h();
    },
    h() {
      i(s, 'class', 'svelte-fhk6t1'),
        i(a, 'class', 'svelte-fhk6t1'),
        i(e, 'class', 'link-group svelte-fhk6t1');
    },
    m(n, d) {
      R(n, e, d), u(e, s), u(s, t), u(e, l), u(e, a);
      for (let m = 0; m < o.length; m += 1) o[m].m(a, null);
    },
    p(n, d) {
      if (d & 1) {
        f = n[0].latest_links;
        let m;
        for (m = 0; m < f.length; m += 1) {
          const v = Ue(n, f, m);
          o[m] ? o[m].p(v, d) : ((o[m] = We(v)), o[m].c(), o[m].m(a, null));
        }
        for (; m < o.length; m += 1) o[m].d(1);
        o.length = f.length;
      }
    },
    i: z,
    o: z,
    d(n) {
      n && c(e), _e(o, n);
    },
  };
}
function Lt(r) {
  let e,
    s,
    t,
    l,
    a,
    f,
    o,
    n,
    d,
    m,
    v,
    b,
    $,
    y = r[0].latest_links,
    C = [];
  for (let w = 0; w < y.length; w += 1) C[w] = ze(je(r, y, w));
  let S = r[0].media_links,
    A = [];
  for (let w = 0; w < S.length; w += 1) A[w] = Ye(Pe(r, S, w));
  const j = (w) =>
    P(A[w], 1, 1, () => {
      A[w] = null;
    });
  return {
    c() {
      (e = k('div')),
        (s = k('section')),
        (t = k('h3')),
        (l = N('Latest')),
        (a = M()),
        (f = k('ul'));
      for (let w = 0; w < C.length; w += 1) C[w].c();
      (o = M()),
        (n = k('section')),
        (d = k('h3')),
        (m = N('Media')),
        (v = M()),
        (b = k('ul'));
      for (let w = 0; w < A.length; w += 1) A[w].c();
      this.h();
    },
    l(w) {
      e = g(w, 'DIV', { class: !0 });
      var D = h(e);
      s = g(D, 'SECTION', { class: !0 });
      var _ = h(s);
      t = g(_, 'H3', { class: !0 });
      var Z = h(t);
      (l = O(Z, 'Latest')),
        Z.forEach(c),
        (a = V(_)),
        (f = g(_, 'UL', { class: !0 }));
      var x = h(f);
      for (let B = 0; B < C.length; B += 1) C[B].l(x);
      x.forEach(c),
        _.forEach(c),
        (o = V(D)),
        (n = g(D, 'SECTION', { class: !0 }));
      var U = h(n);
      d = g(U, 'H3', { class: !0 });
      var F = h(d);
      (m = O(F, 'Media')),
        F.forEach(c),
        (v = V(U)),
        (b = g(U, 'UL', { class: !0 }));
      var Q = h(b);
      for (let B = 0; B < A.length; B += 1) A[B].l(Q);
      Q.forEach(c), U.forEach(c), D.forEach(c), this.h();
    },
    h() {
      i(t, 'class', 'svelte-fhk6t1'),
        i(f, 'class', 'svelte-fhk6t1'),
        i(s, 'class', 'link-group svelte-fhk6t1'),
        i(d, 'class', 'svelte-fhk6t1'),
        i(b, 'class', 'svelte-fhk6t1'),
        i(n, 'class', 'link-group media svelte-fhk6t1'),
        i(e, 'class', 'latest-and-media svelte-fhk6t1');
    },
    m(w, D) {
      R(w, e, D), u(e, s), u(s, t), u(t, l), u(s, a), u(s, f);
      for (let _ = 0; _ < C.length; _ += 1) C[_].m(f, null);
      u(e, o), u(e, n), u(n, d), u(d, m), u(n, v), u(n, b);
      for (let _ = 0; _ < A.length; _ += 1) A[_].m(b, null);
      $ = !0;
    },
    p(w, D) {
      if (D & 1) {
        y = w[0].latest_links;
        let _;
        for (_ = 0; _ < y.length; _ += 1) {
          const Z = je(w, y, _);
          C[_] ? C[_].p(Z, D) : ((C[_] = ze(Z)), C[_].c(), C[_].m(f, null));
        }
        for (; _ < C.length; _ += 1) C[_].d(1);
        C.length = y.length;
      }
      if (D & 5) {
        S = w[0].media_links;
        let _;
        for (_ = 0; _ < S.length; _ += 1) {
          const Z = Pe(w, S, _);
          A[_]
            ? (A[_].p(Z, D), q(A[_], 1))
            : ((A[_] = Ye(Z)), A[_].c(), q(A[_], 1), A[_].m(b, null));
        }
        for (ve(), _ = S.length; _ < A.length; _ += 1) j(_);
        ke();
      }
    },
    i(w) {
      if (!$) {
        for (let D = 0; D < S.length; D += 1) q(A[D]);
        $ = !0;
      }
    },
    o(w) {
      A = A.filter(Boolean);
      for (let D = 0; D < A.length; D += 1) P(A[D]);
      $ = !1;
    },
    d(w) {
      w && c(e), _e(C, w), _e(A, w);
    },
  };
}
function We(r) {
  let e,
    s,
    t = r[4].text + '',
    l,
    a,
    f;
  return {
    c() {
      (e = k('li')), (s = k('a')), (l = N(t)), (f = M()), this.h();
    },
    l(o) {
      e = g(o, 'LI', { class: !0 });
      var n = h(e);
      s = g(n, 'A', { href: !0, class: !0 });
      var d = h(s);
      (l = O(d, t)), d.forEach(c), (f = V(n)), n.forEach(c), this.h();
    },
    h() {
      i(s, 'href', (a = K(r[4].url))),
        i(s, 'class', 'svelte-fhk6t1'),
        i(e, 'class', 'svelte-fhk6t1');
    },
    m(o, n) {
      R(o, e, n), u(e, s), u(s, l), u(e, f);
    },
    p(o, n) {
      n & 1 && t !== (t = o[4].text + '') && me(l, t),
        n & 1 && a !== (a = K(o[4].url)) && i(s, 'href', a);
    },
    d(o) {
      o && c(e);
    },
  };
}
function ze(r) {
  let e,
    s,
    t = r[4].text + '',
    l,
    a,
    f;
  return {
    c() {
      (e = k('li')), (s = k('a')), (l = N(t)), (f = M()), this.h();
    },
    l(o) {
      e = g(o, 'LI', { class: !0 });
      var n = h(e);
      s = g(n, 'A', { href: !0, class: !0 });
      var d = h(s);
      (l = O(d, t)), d.forEach(c), (f = V(n)), n.forEach(c), this.h();
    },
    h() {
      i(s, 'href', (a = K(r[4].url))),
        i(s, 'class', 'svelte-fhk6t1'),
        i(e, 'class', 'svelte-fhk6t1');
    },
    m(o, n) {
      R(o, e, n), u(e, s), u(s, l), u(e, f);
    },
    p(o, n) {
      n & 1 && t !== (t = o[4].text + '') && me(l, t),
        n & 1 && a !== (a = K(o[4].url)) && i(s, 'href', a);
    },
    d(o) {
      o && c(e);
    },
  };
}
function Ye(r) {
  let e,
    s,
    t,
    l,
    a,
    f = r[4].text + '',
    o,
    n,
    d,
    m;
  var v = r[2][r[4].symbol];
  function b($) {
    return {};
  }
  return (
    v && (t = new v(b())),
    {
      c() {
        (e = k('li')),
          (s = k('div')),
          t && ie(t.$$.fragment),
          (l = M()),
          (a = k('a')),
          (o = N(f)),
          (d = M()),
          this.h();
      },
      l($) {
        e = g($, 'LI', { class: !0 });
        var y = h(e);
        s = g(y, 'DIV', { class: !0 });
        var C = h(s);
        t && pe(t.$$.fragment, C),
          C.forEach(c),
          (l = V(y)),
          (a = g(y, 'A', { href: !0, class: !0 }));
        var S = h(a);
        (o = O(S, f)), S.forEach(c), (d = V(y)), y.forEach(c), this.h();
      },
      h() {
        i(s, 'class', 'symbol svelte-fhk6t1'),
          i(a, 'href', (n = K(r[4].url))),
          i(a, 'class', 'svelte-fhk6t1'),
          i(e, 'class', 'svelte-fhk6t1');
      },
      m($, y) {
        R($, e, y),
          u(e, s),
          t && ce(t, s, null),
          u(e, l),
          u(e, a),
          u(a, o),
          u(e, d),
          (m = !0);
      },
      p($, y) {
        if (v !== (v = $[2][$[4].symbol])) {
          if (t) {
            ve();
            const C = t;
            P(C.$$.fragment, 1, 0, () => {
              oe(C, 1);
            }),
              ke();
          }
          v
            ? ((t = new v(b())),
              ie(t.$$.fragment),
              q(t.$$.fragment, 1),
              ce(t, s, null))
            : (t = null);
        }
        (!m || y & 1) && f !== (f = $[4].text + '') && me(o, f),
          (!m || (y & 1 && n !== (n = K($[4].url)))) && i(a, 'href', n);
      },
      i($) {
        m || (t && q(t.$$.fragment, $), (m = !0));
      },
      o($) {
        t && P(t.$$.fragment, $), (m = !1);
      },
      d($) {
        $ && c(e), t && oe(t);
      },
    }
  );
}
function Je(r) {
  let e,
    s,
    t = r[4].text + '',
    l,
    a,
    f;
  return {
    c() {
      (e = k('li')), (s = k('a')), (l = N(t)), (f = M()), this.h();
    },
    l(o) {
      e = g(o, 'LI', { class: !0 });
      var n = h(e);
      s = g(n, 'A', { href: !0, class: !0 });
      var d = h(s);
      (l = O(d, t)), d.forEach(c), (f = V(n)), n.forEach(c), this.h();
    },
    h() {
      i(s, 'href', (a = K(r[4].url))),
        i(s, 'class', 'svelte-fhk6t1'),
        i(e, 'class', 'svelte-fhk6t1');
    },
    m(o, n) {
      R(o, e, n), u(e, s), u(s, l), u(e, f);
    },
    p(o, n) {
      n & 1 && t !== (t = o[4].text + '') && me(l, t),
        n & 1 && a !== (a = K(o[4].url)) && i(s, 'href', a);
    },
    d(o) {
      o && c(e);
    },
  };
}
function Ke(r) {
  let e,
    s,
    t,
    l,
    a,
    f,
    o = r[0].media_links,
    n = [];
  for (let m = 0; m < o.length; m += 1) n[m] = Qe(qe(r, o, m));
  const d = (m) =>
    P(n[m], 1, 1, () => {
      n[m] = null;
    });
  return {
    c() {
      (e = k('section')),
        (s = k('h3')),
        (t = N('Media')),
        (l = M()),
        (a = k('ul'));
      for (let m = 0; m < n.length; m += 1) n[m].c();
      this.h();
    },
    l(m) {
      e = g(m, 'SECTION', { class: !0 });
      var v = h(e);
      s = g(v, 'H3', { class: !0 });
      var b = h(s);
      (t = O(b, 'Media')),
        b.forEach(c),
        (l = V(v)),
        (a = g(v, 'UL', { class: !0 }));
      var $ = h(a);
      for (let y = 0; y < n.length; y += 1) n[y].l($);
      $.forEach(c), v.forEach(c), this.h();
    },
    h() {
      i(s, 'class', 'svelte-fhk6t1'),
        i(a, 'class', 'svelte-fhk6t1'),
        i(e, 'class', 'link-group media svelte-fhk6t1');
    },
    m(m, v) {
      R(m, e, v), u(e, s), u(s, t), u(e, l), u(e, a);
      for (let b = 0; b < n.length; b += 1) n[b].m(a, null);
      f = !0;
    },
    p(m, v) {
      if (v & 5) {
        o = m[0].media_links;
        let b;
        for (b = 0; b < o.length; b += 1) {
          const $ = qe(m, o, b);
          n[b]
            ? (n[b].p($, v), q(n[b], 1))
            : ((n[b] = Qe($)), n[b].c(), q(n[b], 1), n[b].m(a, null));
        }
        for (ve(), b = o.length; b < n.length; b += 1) d(b);
        ke();
      }
    },
    i(m) {
      if (!f) {
        for (let v = 0; v < o.length; v += 1) q(n[v]);
        f = !0;
      }
    },
    o(m) {
      n = n.filter(Boolean);
      for (let v = 0; v < n.length; v += 1) P(n[v]);
      f = !1;
    },
    d(m) {
      m && c(e), _e(n, m);
    },
  };
}
function Qe(r) {
  let e,
    s,
    t,
    l,
    a,
    f = r[4].text + '',
    o,
    n,
    d,
    m;
  var v = r[2][r[4].symbol];
  function b($) {
    return {};
  }
  return (
    v && (t = new v(b())),
    {
      c() {
        (e = k('li')),
          (s = k('div')),
          t && ie(t.$$.fragment),
          (l = M()),
          (a = k('a')),
          (o = N(f)),
          (d = M()),
          this.h();
      },
      l($) {
        e = g($, 'LI', { class: !0 });
        var y = h(e);
        s = g(y, 'DIV', { class: !0 });
        var C = h(s);
        t && pe(t.$$.fragment, C),
          C.forEach(c),
          (l = V(y)),
          (a = g(y, 'A', { href: !0, class: !0 }));
        var S = h(a);
        (o = O(S, f)), S.forEach(c), (d = V(y)), y.forEach(c), this.h();
      },
      h() {
        i(s, 'class', 'symbol svelte-fhk6t1'),
          i(a, 'href', (n = K(r[4].url))),
          i(a, 'class', 'svelte-fhk6t1'),
          i(e, 'class', 'svelte-fhk6t1');
      },
      m($, y) {
        R($, e, y),
          u(e, s),
          t && ce(t, s, null),
          u(e, l),
          u(e, a),
          u(a, o),
          u(e, d),
          (m = !0);
      },
      p($, y) {
        if (v !== (v = $[2][$[4].symbol])) {
          if (t) {
            ve();
            const C = t;
            P(C.$$.fragment, 1, 0, () => {
              oe(C, 1);
            }),
              ke();
          }
          v
            ? ((t = new v(b())),
              ie(t.$$.fragment),
              q(t.$$.fragment, 1),
              ce(t, s, null))
            : (t = null);
        }
        (!m || y & 1) && f !== (f = $[4].text + '') && me(o, f),
          (!m || (y & 1 && n !== (n = K($[4].url)))) && i(a, 'href', n);
      },
      i($) {
        m || (t && q(t.$$.fragment, $), (m = !0));
      },
      o($) {
        t && P(t.$$.fragment, $), (m = !1);
      },
      d($) {
        $ && c(e), t && oe(t);
      },
    }
  );
}
function Xe(r) {
  let e,
    s,
    t = r[4].text + '',
    l,
    a,
    f;
  return {
    c() {
      (e = k('li')), (s = k('a')), (l = N(t)), (f = M()), this.h();
    },
    l(o) {
      e = g(o, 'LI', { class: !0 });
      var n = h(e);
      s = g(n, 'A', { href: !0, class: !0 });
      var d = h(s);
      (l = O(d, t)), d.forEach(c), (f = V(n)), n.forEach(c), this.h();
    },
    h() {
      i(s, 'href', (a = K(r[4].url))),
        i(s, 'class', 'svelte-fhk6t1'),
        i(e, 'class', 'svelte-fhk6t1');
    },
    m(o, n) {
      R(o, e, n), u(e, s), u(s, l), u(e, f);
    },
    p(o, n) {
      n & 1 && t !== (t = o[4].text + '') && me(l, t),
        n & 1 && a !== (a = K(o[4].url)) && i(s, 'href', a);
    },
    d(o) {
      o && c(e);
    },
  };
}
function et(r) {
  let e,
    s,
    t = r[4].text + '',
    l,
    a,
    f;
  return {
    c() {
      (e = k('li')), (s = k('a')), (l = N(t)), (f = M()), this.h();
    },
    l(o) {
      e = g(o, 'LI', { class: !0 });
      var n = h(e);
      s = g(n, 'A', { href: !0, class: !0 });
      var d = h(s);
      (l = O(d, t)), d.forEach(c), (f = V(n)), n.forEach(c), this.h();
    },
    h() {
      i(s, 'href', (a = K(r[4].url))),
        i(s, 'class', 'svelte-fhk6t1'),
        i(e, 'class', 'svelte-fhk6t1');
    },
    m(o, n) {
      R(o, e, n), u(e, s), u(s, l), u(e, f);
    },
    p(o, n) {
      n & 1 && t !== (t = o[4].text + '') && me(l, t),
        n & 1 && a !== (a = K(o[4].url)) && i(s, 'href', a);
    },
    d(o) {
      o && c(e);
    },
  };
}
function Ct(r) {
  let e, s, t, l;
  _t(r[3]);
  let a = r[0].latest_links && Ge(r);
  return {
    c() {
      a && a.c(), (e = we());
    },
    l(f) {
      a && a.l(f), (e = we());
    },
    m(f, o) {
      a && a.m(f, o),
        R(f, e, o),
        (s = !0),
        t || ((l = vt(window, 'resize', r[3])), (t = !0));
    },
    p(f, [o]) {
      f[0].latest_links
        ? a
          ? (a.p(f, o), o & 1 && q(a, 1))
          : ((a = Ge(f)), a.c(), q(a, 1), a.m(e.parentNode, e))
        : a &&
          (ve(),
          P(a, 1, 1, () => {
            a = null;
          }),
          ke());
    },
    i(f) {
      s || (q(a), (s = !0));
    },
    o(f) {
      P(a), (s = !1);
    },
    d(f) {
      a && a.d(f), f && c(e), (t = !1), l();
    },
  };
}
const Ie = 745;
function xt(r, e, s) {
  const t = { graphics: gt, pictures: $t, videos: Et };
  let { links: l = {} } = e,
    a = 1200;
  function f() {
    s(1, (a = window.innerWidth));
  }
  return (
    (r.$$set = (o) => {
      'links' in o && s(0, (l = o.links));
    }),
    [l, a, t, f]
  );
}
class It extends ue {
  constructor(e) {
    super(), fe(this, e, xt, Ct, he, { links: 0 });
  }
}
function At(r) {
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
      var l = h(e);
      (s = se(l, 'path', { d: !0 })), h(s).forEach(c), l.forEach(c), this.h();
    },
    h() {
      i(
        s,
        'd',
        'M16 1.537a6.469 6.469 0 0 1-1.884.516A3.3 3.3 0 0 0 15.559.237a6.603 6.603 0 0 1-2.084.797A3.282 3.282 0 0 0 11.078 0a3.28 3.28 0 0 0-3.196 4.028A9.315 9.315 0 0 1 1.118.598a3.28 3.28 0 0 0-.444 1.65c0 1.137.578 2.143 1.46 2.73A3.281 3.281 0 0 1 .646 4.57v.04A3.282 3.282 0 0 0 3.28 7.83a3.286 3.286 0 0 1-1.483.055 3.294 3.294 0 0 0 3.065 2.282A6.583 6.583 0 0 1 0 11.526 9.281 9.281 0 0 0 5.034 13c6.036 0 9.338-5.003 9.338-9.34 0-.144-.003-.285-.01-.425A6.607 6.607 0 0 0 16 1.538Z'
      ),
        i(e, 'aria-hidden', 'true'),
        i(e, 'focusable', 'false'),
        i(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        i(e, 'viewBox', '0 0 16 13'),
        ge(e, 'width', r[0] + 'px'),
        i(e, 'class', 'svelte-17648ki');
    },
    m(t, l) {
      R(t, e, l), u(e, s);
    },
    p(t, [l]) {
      l & 1 && ge(e, 'width', t[0] + 'px');
    },
    i: z,
    o: z,
    d(t) {
      t && c(e);
    },
  };
}
function St(r, e, s) {
  let { width: t = 20 } = e;
  return (
    (r.$$set = (l) => {
      'width' in l && s(0, (t = l.width));
    }),
    [t]
  );
}
class Tt extends ue {
  constructor(e) {
    super(), fe(this, e, St, At, he, { width: 0 });
  }
}
function Rt(r) {
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
      var l = h(e);
      (s = se(l, 'path', { d: !0 })), h(s).forEach(c), l.forEach(c), this.h();
    },
    h() {
      i(
        s,
        'd',
        'M18.375 0H2.625A2.617 2.617 0 0 0 0 2.609V14.39A2.617 2.617 0 0 0 2.625 17h15.75A2.617 2.617 0 0 0 21 14.391V2.61A2.617 2.617 0 0 0 18.375 0Zm-10.5 13.044V4.348l7 4.348-7 4.348Z'
      ),
        i(e, 'aria-hidden', 'true'),
        i(e, 'focusable', 'false'),
        i(e, 'viewBox', '0 0 21 17'),
        i(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        ge(e, 'width', r[0] + 'px'),
        i(e, 'class', 'svelte-17648ki');
    },
    m(t, l) {
      R(t, e, l), u(e, s);
    },
    p(t, [l]) {
      l & 1 && ge(e, 'width', t[0] + 'px');
    },
    i: z,
    o: z,
    d(t) {
      t && c(e);
    },
  };
}
function Mt(r, e, s) {
  let { width: t = 20 } = e;
  return (
    (r.$$set = (l) => {
      'width' in l && s(0, (t = l.width));
    }),
    [t]
  );
}
class Vt extends ue {
  constructor(e) {
    super(), fe(this, e, Mt, Rt, he, { width: 0 });
  }
}
function Bt(r) {
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
      var l = h(e);
      (s = se(l, 'path', { d: !0 })), h(s).forEach(c), l.forEach(c), this.h();
    },
    h() {
      i(
        s,
        'd',
        'M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5H8V9H6V7h2V6c0-1.653 1.347-3 3-3h2v2h-2c-.55 0-1 .45-1 1v1h3l-.5 2H10v7h4.5c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5Z'
      ),
        i(e, 'aria-hidden', 'true'),
        i(e, 'focusable', 'false'),
        i(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        i(e, 'viewBox', '0 0 16 16'),
        ge(e, 'width', r[0] + 'px'),
        i(e, 'class', 'svelte-17648ki');
    },
    m(t, l) {
      R(t, e, l), u(e, s);
    },
    p(t, [l]) {
      l & 1 && ge(e, 'width', t[0] + 'px');
    },
    i: z,
    o: z,
    d(t) {
      t && c(e);
    },
  };
}
function Ht(r, e, s) {
  let { width: t = 20 } = e;
  return (
    (r.$$set = (l) => {
      'width' in l && s(0, (t = l.width));
    }),
    [t]
  );
}
class Zt extends ue {
  constructor(e) {
    super(), fe(this, e, Ht, Bt, he, { width: 0 });
  }
}
function Dt(r) {
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
      var a = h(e);
      (s = se(a, 'path', { d: !0 })),
        h(s).forEach(c),
        (t = se(a, 'path', { d: !0 })),
        h(t).forEach(c),
        a.forEach(c),
        this.h();
    },
    h() {
      i(
        s,
        'd',
        'M8 1.44c2.137 0 2.39.01 3.231.048.781.034 1.203.165 1.485.274.372.145.64.32.918.598.281.281.453.546.6.919.11.281.24.706.275 1.484.037.844.047 1.097.047 3.232 0 2.134-.01 2.39-.047 3.231-.034.781-.165 1.203-.275 1.484a2.47 2.47 0 0 1-.597.919 2.51 2.51 0 0 1-.918.6c-.282.11-.707.24-1.485.275-.844.037-1.097.047-3.232.047-2.134 0-2.39-.01-3.231-.047-.781-.034-1.203-.165-1.484-.275a2.476 2.476 0 0 1-.92-.597 2.51 2.51 0 0 1-.6-.918c-.109-.282-.24-.707-.274-1.485-.038-.844-.048-1.097-.048-3.231 0-2.135.01-2.391.047-3.232.035-.781.166-1.203.276-1.485.143-.372.319-.64.597-.919.281-.281.546-.453.918-.6.282-.109.707-.24 1.485-.274C5.608 1.45 5.862 1.44 8 1.44ZM8 0C5.828 0 5.556.01 4.703.047c-.85.038-1.435.175-1.94.372a3.898 3.898 0 0 0-1.419.925c-.447.444-.719.89-.925 1.415C.222 3.27.085 3.85.047 4.7.01 5.556 0 5.828 0 8c0 2.172.01 2.444.047 3.297.038.85.175 1.434.372 1.94.206.528.478.976.925 1.419.444.444.89.719 1.415.922.51.197 1.091.335 1.941.372.853.038 1.125.047 3.297.047s2.444-.01 3.297-.047c.85-.037 1.434-.175 1.94-.372a3.903 3.903 0 0 0 1.416-.922c.444-.444.719-.89.922-1.415.197-.51.335-1.091.372-1.941.037-.853.047-1.125.047-3.297s-.01-2.444-.047-3.297c-.038-.85-.175-1.435-.372-1.94a3.753 3.753 0 0 0-.915-1.423A3.91 3.91 0 0 0 13.24.422c-.51-.197-1.09-.335-1.94-.372C10.444.008 10.171 0 8 0H8Z'
      ),
        i(
          t,
          'd',
          'M8 3.89a4.11 4.11 0 0 0 0 8.22 4.11 4.11 0 0 0 0-8.22Zm0 6.776a2.666 2.666 0 1 1 0-5.332 2.666 2.666 0 0 1 0 5.332Zm5.231-6.938a.96.96 0 1 1-1.919 0 .96.96 0 0 1 1.919 0Z'
        ),
        i(e, 'aria-hidden', 'true'),
        i(e, 'focusable', 'false'),
        i(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        i(e, 'viewBox', '0 0 16 16'),
        ge(e, 'width', r[0] + 'px'),
        i(e, 'class', 'svelte-17648ki');
    },
    m(l, a) {
      R(l, e, a), u(e, s), u(e, t);
    },
    p(l, [a]) {
      a & 1 && ge(e, 'width', l[0] + 'px');
    },
    i: z,
    o: z,
    d(l) {
      l && c(e);
    },
  };
}
function Nt(r, e, s) {
  let { width: t = 20 } = e;
  return (
    (r.$$set = (l) => {
      'width' in l && s(0, (t = l.width));
    }),
    [t]
  );
}
class Ot extends ue {
  constructor(e) {
    super(), fe(this, e, Nt, Dt, he, { width: 0 });
  }
}
function qt(r) {
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
      var l = h(e);
      (s = se(l, 'path', { d: !0 })), h(s).forEach(c), l.forEach(c), this.h();
    },
    h() {
      i(
        s,
        'd',
        'M19.031 0c1.034 0 1.888.807 1.964 1.822L21 1.97V19.03a1.975 1.975 0 0 1-1.822 1.964L19.03 21H1.97a1.975 1.975 0 0 1-1.964-1.822L0 19.03V1.97C0 .935.807.08 1.822.005L1.97 0H19.03ZM6.3 7.875H3.15v10.063H6.3V7.874Zm7.875-.175c-1.575 0-2.538.788-2.975 1.575v-1.4H8.225v10.063h3.15V12.95c0-1.313.175-2.537 1.838-2.537 1.575 0 1.575 1.487 1.575 2.624v4.9h3.15v-5.425c0-2.712-.613-4.812-3.763-4.812ZM4.637 2.8c-1.05 0-1.837.875-1.837 1.838 0 1.05.875 1.837 1.838 1.837 1.05 0 1.837-.787 1.837-1.837 0-1.05-.875-1.838-1.837-1.838Z'
      ),
        i(e, 'aria-hidden', 'true'),
        i(e, 'focusable', 'false'),
        i(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        i(e, 'viewBox', '0 0 21 21'),
        ge(e, 'width', r[0] + 'px'),
        i(e, 'class', 'svelte-17648ki');
    },
    m(t, l) {
      R(t, e, l), u(e, s);
    },
    p(t, [l]) {
      l & 1 && ge(e, 'width', t[0] + 'px');
    },
    i: z,
    o: z,
    d(t) {
      t && c(e);
    },
  };
}
function Ft(r, e, s) {
  let { width: t = 20 } = e;
  return (
    (r.$$set = (l) => {
      'width' in l && s(0, (t = l.width));
    }),
    [t]
  );
}
class Ut extends ue {
  constructor(e) {
    super(), fe(this, e, Ft, qt, he, { width: 0 });
  }
}
function tt(r, e, s) {
  const t = r.slice();
  return (t[2] = e[s]), t;
}
function st(r) {
  let e,
    s,
    t,
    l,
    a,
    f,
    o,
    n = r[0].company_description + '',
    d,
    m,
    v,
    b,
    $,
    y,
    C,
    S,
    A,
    j = r[0].social_links,
    w = [];
  for (let _ = 0; _ < j.length; _ += 1) w[_] = lt(tt(r, j, _));
  const D = (_) =>
    P(w[_], 1, 1, () => {
      w[_] = null;
    });
  return {
    c() {
      (e = k('section')),
        (s = k('div')),
        (t = k('article')),
        (l = k('h2')),
        (a = N('Information you can trust')),
        (f = M()),
        (o = k('p')),
        (d = N(n)),
        (m = M()),
        (v = k('div')),
        (b = k('h2')),
        ($ = N('Follow Us')),
        (y = M()),
        (C = k('div')),
        (S = k('ul'));
      for (let _ = 0; _ < w.length; _ += 1) w[_].c();
      this.h();
    },
    l(_) {
      e = g(_, 'SECTION', { class: !0 });
      var Z = h(e);
      s = g(Z, 'DIV', { class: !0 });
      var x = h(s);
      t = g(x, 'ARTICLE', { class: !0 });
      var U = h(t);
      l = g(U, 'H2', { class: !0 });
      var F = h(l);
      (a = O(F, 'Information you can trust')),
        F.forEach(c),
        (f = V(U)),
        (o = g(U, 'P', { class: !0 }));
      var Q = h(o);
      (d = O(Q, n)),
        Q.forEach(c),
        U.forEach(c),
        (m = V(x)),
        (v = g(x, 'DIV', { class: !0 }));
      var B = h(v);
      b = g(B, 'H2', { class: !0 });
      var T = h(b);
      ($ = O(T, 'Follow Us')), T.forEach(c), (y = V(B)), (C = g(B, 'DIV', {}));
      var G = h(C);
      S = g(G, 'UL', { class: !0 });
      var L = h(S);
      for (let le = 0; le < w.length; le += 1) w[le].l(L);
      L.forEach(c),
        G.forEach(c),
        B.forEach(c),
        x.forEach(c),
        Z.forEach(c),
        this.h();
    },
    h() {
      i(l, 'class', 'svelte-eccq59'),
        i(o, 'class', 'svelte-eccq59'),
        i(t, 'class', 'company-info svelte-eccq59'),
        i(b, 'class', 'svelte-eccq59'),
        i(S, 'class', 'links svelte-eccq59'),
        i(v, 'class', 'social svelte-eccq59'),
        i(s, 'class', 'content-container svelte-eccq59'),
        i(e, 'class', 'company svelte-eccq59');
    },
    m(_, Z) {
      R(_, e, Z),
        u(e, s),
        u(s, t),
        u(t, l),
        u(l, a),
        u(t, f),
        u(t, o),
        u(o, d),
        u(s, m),
        u(s, v),
        u(v, b),
        u(b, $),
        u(v, y),
        u(v, C),
        u(C, S);
      for (let x = 0; x < w.length; x += 1) w[x].m(S, null);
      A = !0;
    },
    p(_, Z) {
      if (
        ((!A || Z & 1) && n !== (n = _[0].company_description + '') && me(d, n),
        Z & 3)
      ) {
        j = _[0].social_links;
        let x;
        for (x = 0; x < j.length; x += 1) {
          const U = tt(_, j, x);
          w[x]
            ? (w[x].p(U, Z), q(w[x], 1))
            : ((w[x] = lt(U)), w[x].c(), q(w[x], 1), w[x].m(S, null));
        }
        for (ve(), x = j.length; x < w.length; x += 1) D(x);
        ke();
      }
    },
    i(_) {
      if (!A) {
        for (let Z = 0; Z < j.length; Z += 1) q(w[Z]);
        A = !0;
      }
    },
    o(_) {
      w = w.filter(Boolean);
      for (let Z = 0; Z < w.length; Z += 1) P(w[Z]);
      A = !1;
    },
    d(_) {
      _ && c(e), _e(w, _);
    },
  };
}
function lt(r) {
  let e, s, t, l, a, f, o, n;
  var d = r[1][r[2].type];
  function m(v) {
    return {};
  }
  return (
    d && (a = new d(m())),
    {
      c() {
        (e = k('li')),
          (s = k('a')),
          (t = k('div')),
          (l = k('div')),
          a && ie(a.$$.fragment),
          (o = M()),
          this.h();
      },
      l(v) {
        e = g(v, 'LI', { class: !0 });
        var b = h(e);
        s = g(b, 'A', { href: !0 });
        var $ = h(s);
        t = g($, 'DIV', { class: !0 });
        var y = h(t);
        l = g(y, 'DIV', { class: !0 });
        var C = h(l);
        a && pe(a.$$.fragment, C),
          C.forEach(c),
          y.forEach(c),
          $.forEach(c),
          (o = V(b)),
          b.forEach(c),
          this.h();
      },
      h() {
        i(l, 'class', 'social svelte-eccq59'),
          i(t, 'class', 'button svelte-eccq59'),
          i(s, 'href', (f = K(r[2].url))),
          i(e, 'class', 'social-links symbol svelte-eccq59');
      },
      m(v, b) {
        R(v, e, b),
          u(e, s),
          u(s, t),
          u(t, l),
          a && ce(a, l, null),
          u(e, o),
          (n = !0);
      },
      p(v, b) {
        if (d !== (d = v[1][v[2].type])) {
          if (a) {
            ve();
            const $ = a;
            P($.$$.fragment, 1, 0, () => {
              oe($, 1);
            }),
              ke();
          }
          d
            ? ((a = new d(m())),
              ie(a.$$.fragment),
              q(a.$$.fragment, 1),
              ce(a, l, null))
            : (a = null);
        }
        (!n || (b & 1 && f !== (f = K(v[2].url)))) && i(s, 'href', f);
      },
      i(v) {
        n || (a && q(a.$$.fragment, v), (n = !0));
      },
      o(v) {
        a && P(a.$$.fragment, v), (n = !1);
      },
      d(v) {
        v && c(e), a && oe(a);
      },
    }
  );
}
function Pt(r) {
  let e,
    s,
    t = r[0].social_links && st(r);
  return {
    c() {
      t && t.c(), (e = we());
    },
    l(l) {
      t && t.l(l), (e = we());
    },
    m(l, a) {
      t && t.m(l, a), R(l, e, a), (s = !0);
    },
    p(l, [a]) {
      l[0].social_links
        ? t
          ? (t.p(l, a), a & 1 && q(t, 1))
          : ((t = st(l)), t.c(), q(t, 1), t.m(e.parentNode, e))
        : t &&
          (ve(),
          P(t, 1, 1, () => {
            t = null;
          }),
          ke());
    },
    i(l) {
      s || (q(t), (s = !0));
    },
    o(l) {
      P(t), (s = !1);
    },
    d(l) {
      t && t.d(l), l && c(e);
    },
  };
}
function jt(r, e, s) {
  const t = {
    twitter: Tt,
    facebook: Zt,
    instagram: Ot,
    youtube: Vt,
    linkedin: Ut,
  };
  let { links: l = {} } = e;
  return (
    (r.$$set = (a) => {
      'links' in a && s(0, (l = a.links));
    }),
    [l, t]
  );
}
class Gt extends ue {
  constructor(e) {
    super(), fe(this, e, jt, Pt, he, { links: 0 });
  }
}
function at(r, e, s) {
  const t = r.slice();
  return (t[1] = e[s]), t;
}
function nt(r, e, s) {
  const t = r.slice();
  return (t[1] = e[s]), t;
}
function rt(r) {
  let e,
    s,
    t,
    l,
    a,
    f,
    o,
    n,
    d,
    m,
    v,
    b,
    $,
    y,
    C,
    S,
    A,
    j = r[0].copyright_year + '',
    w,
    D,
    _,
    Z,
    x,
    U = r[0].ad_links,
    F = [];
  for (let T = 0; T < U.length; T += 1) F[T] = ot(nt(r, U, T));
  let Q = r[0].misc_links.filter(ct),
    B = [];
  for (let T = 0; T < Q.length; T += 1) B[T] = it(at(r, Q, T));
  return {
    c() {
      (e = k('section')), (s = k('div')), (t = k('section')), (l = k('ul'));
      for (let T = 0; T < F.length; T += 1) F[T].c();
      (a = M()),
        (f = k('p')),
        (o = N('All quotes delayed a minimum of 15 minutes. ')),
        (n = k('a')),
        (d = N('See here for a complete list of exchanges and delays')),
        (v = N('.')),
        (b = M()),
        ($ = k('section')),
        (y = k('ul'));
      for (let T = 0; T < B.length; T += 1) B[T].c();
      (C = M()),
        (S = k('p')),
        (A = N('\xA9 ')),
        (w = N(j)),
        (D = N(` Reuters.
        `)),
        (_ = k('a')),
        (Z = N('All rights reserved')),
        this.h();
    },
    l(T) {
      e = g(T, 'SECTION', { class: !0 });
      var G = h(e);
      s = g(G, 'DIV', { class: !0 });
      var L = h(s);
      t = g(L, 'SECTION', { class: !0 });
      var le = h(t);
      l = g(le, 'UL', { class: !0 });
      var ne = h(l);
      for (let E = 0; E < F.length; E += 1) F[E].l(ne);
      ne.forEach(c), le.forEach(c), (a = V(L)), (f = g(L, 'P', { class: !0 }));
      var W = h(f);
      (o = O(W, 'All quotes delayed a minimum of 15 minutes. ')),
        (n = g(W, 'A', { href: !0, class: !0 }));
      var p = h(n);
      (d = O(p, 'See here for a complete list of exchanges and delays')),
        p.forEach(c),
        (v = O(W, '.')),
        W.forEach(c),
        (b = V(L)),
        ($ = g(L, 'SECTION', { class: !0 }));
      var H = h($);
      y = g(H, 'UL', { class: !0 });
      var Y = h(y);
      for (let E = 0; E < B.length; E += 1) B[E].l(Y);
      Y.forEach(c), H.forEach(c), (C = V(L)), (S = g(L, 'P', { class: !0 }));
      var ae = h(S);
      (A = O(ae, '\xA9 ')),
        (w = O(ae, j)),
        (D = O(
          ae,
          ` Reuters.
        `
        )),
        (_ = g(ae, 'A', { href: !0, class: !0 }));
      var J = h(_);
      (Z = O(J, 'All rights reserved')),
        J.forEach(c),
        ae.forEach(c),
        L.forEach(c),
        G.forEach(c),
        this.h();
    },
    h() {
      i(l, 'class', 'link-group svelte-1wk8lrk'),
        i(t, 'class', 'ad-links svelte-1wk8lrk'),
        i(n, 'href', (m = K(r[0].disclaimer_link))),
        i(n, 'class', 'svelte-1wk8lrk'),
        i(f, 'class', 'disclaimer svelte-1wk8lrk'),
        i(y, 'class', 'link-group svelte-1wk8lrk'),
        i($, 'class', 'misc-links svelte-1wk8lrk'),
        i(_, 'href', (x = K(r[0].copyright_link))),
        i(_, 'class', 'svelte-1wk8lrk'),
        i(S, 'class', 'copyright svelte-1wk8lrk'),
        i(s, 'class', 'content-container svelte-1wk8lrk'),
        i(e, 'class', 'legal svelte-1wk8lrk');
    },
    m(T, G) {
      R(T, e, G), u(e, s), u(s, t), u(t, l);
      for (let L = 0; L < F.length; L += 1) F[L].m(l, null);
      u(s, a),
        u(s, f),
        u(f, o),
        u(f, n),
        u(n, d),
        u(f, v),
        u(s, b),
        u(s, $),
        u($, y);
      for (let L = 0; L < B.length; L += 1) B[L].m(y, null);
      u(s, C), u(s, S), u(S, A), u(S, w), u(S, D), u(S, _), u(_, Z);
    },
    p(T, G) {
      if (G & 1) {
        U = T[0].ad_links;
        let L;
        for (L = 0; L < U.length; L += 1) {
          const le = nt(T, U, L);
          F[L] ? F[L].p(le, G) : ((F[L] = ot(le)), F[L].c(), F[L].m(l, null));
        }
        for (; L < F.length; L += 1) F[L].d(1);
        F.length = U.length;
      }
      if (
        (G & 1 && m !== (m = K(T[0].disclaimer_link)) && i(n, 'href', m), G & 1)
      ) {
        Q = T[0].misc_links.filter(ct);
        let L;
        for (L = 0; L < Q.length; L += 1) {
          const le = at(T, Q, L);
          B[L] ? B[L].p(le, G) : ((B[L] = it(le)), B[L].c(), B[L].m(y, null));
        }
        for (; L < B.length; L += 1) B[L].d(1);
        B.length = Q.length;
      }
      G & 1 && j !== (j = T[0].copyright_year + '') && me(w, j),
        G & 1 && x !== (x = K(T[0].copyright_link)) && i(_, 'href', x);
    },
    d(T) {
      T && c(e), _e(F, T), _e(B, T);
    },
  };
}
function ot(r) {
  let e,
    s,
    t = r[1].text + '',
    l,
    a,
    f;
  return {
    c() {
      (e = k('li')), (s = k('a')), (l = N(t)), (f = M()), this.h();
    },
    l(o) {
      e = g(o, 'LI', { class: !0 });
      var n = h(e);
      s = g(n, 'A', { href: !0, class: !0 });
      var d = h(s);
      (l = O(d, t)), d.forEach(c), (f = V(n)), n.forEach(c), this.h();
    },
    h() {
      i(s, 'href', (a = K(r[1].url))),
        i(s, 'class', 'svelte-1wk8lrk'),
        i(e, 'class', 'svelte-1wk8lrk');
    },
    m(o, n) {
      R(o, e, n), u(e, s), u(s, l), u(e, f);
    },
    p(o, n) {
      n & 1 && t !== (t = o[1].text + '') && me(l, t),
        n & 1 && a !== (a = K(o[1].url)) && i(s, 'href', a);
    },
    d(o) {
      o && c(e);
    },
  };
}
function it(r) {
  let e,
    s,
    t = r[1].text + '',
    l,
    a,
    f;
  return {
    c() {
      (e = k('li')), (s = k('a')), (l = N(t)), (f = M()), this.h();
    },
    l(o) {
      e = g(o, 'LI', { class: !0 });
      var n = h(e);
      s = g(n, 'A', { href: !0, class: !0 });
      var d = h(s);
      (l = O(d, t)), d.forEach(c), (f = V(n)), n.forEach(c), this.h();
    },
    h() {
      i(s, 'href', (a = K(r[1].url))),
        i(s, 'class', 'svelte-1wk8lrk'),
        i(e, 'class', 'svelte-1wk8lrk');
    },
    m(o, n) {
      R(o, e, n), u(e, s), u(s, l), u(e, f);
    },
    p(o, n) {
      n & 1 && t !== (t = o[1].text + '') && me(l, t),
        n & 1 && a !== (a = K(o[1].url)) && i(s, 'href', a);
    },
    d(o) {
      o && c(e);
    },
  };
}
function Wt(r) {
  let e,
    s = r[0].ad_links && rt(r);
  return {
    c() {
      s && s.c(), (e = we());
    },
    l(t) {
      s && s.l(t), (e = we());
    },
    m(t, l) {
      s && s.m(t, l), R(t, e, l);
    },
    p(t, [l]) {
      t[0].ad_links
        ? s
          ? s.p(t, l)
          : ((s = rt(t)), s.c(), s.m(e.parentNode, e))
        : s && (s.d(1), (s = null));
    },
    i: z,
    o: z,
    d(t) {
      s && s.d(t), t && c(e);
    },
  };
}
const ct = (r) => !r.self;
function zt(r, e, s) {
  let { links: t = {} } = e;
  return (
    (r.$$set = (l) => {
      'links' in l && s(0, (t = l.links));
    }),
    [t]
  );
}
class Yt extends ue {
  constructor(e) {
    super(), fe(this, e, zt, Wt, he, { links: 0 });
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
function Jt(r) {
  let e, s, t, l, a, f, o;
  return (
    (s = new It({ props: { links: Ae[0] } })),
    (l = new Gt({ props: { links: Ae[0] } })),
    (f = new Yt({ props: { links: Ae[0] } })),
    {
      c() {
        (e = k('footer')),
          ie(s.$$.fragment),
          (t = M()),
          ie(l.$$.fragment),
          (a = M()),
          ie(f.$$.fragment),
          this.h();
      },
      l(n) {
        e = g(n, 'FOOTER', { style: !0, class: !0 });
        var d = h(e);
        pe(s.$$.fragment, d),
          (t = V(d)),
          pe(l.$$.fragment, d),
          (a = V(d)),
          pe(f.$$.fragment, d),
          d.forEach(c),
          this.h();
      },
      h() {
        i(
          e,
          'style',
          `
    --nav-background: ${r[0].background};
    --nav-primary: ${r[0].primary};
    --nav-rules: ${r[0].rules};
  `
        ),
          i(e, 'class', 'svelte-1g1nlaw');
      },
      m(n, d) {
        R(n, e, d),
          ce(s, e, null),
          u(e, t),
          ce(l, e, null),
          u(e, a),
          ce(f, e, null),
          (o = !0);
      },
      p: z,
      i(n) {
        o ||
          (q(s.$$.fragment, n),
          q(l.$$.fragment, n),
          q(f.$$.fragment, n),
          (o = !0));
      },
      o(n) {
        P(s.$$.fragment, n), P(l.$$.fragment, n), P(f.$$.fragment, n), (o = !1);
      },
      d(n) {
        n && c(e), oe(s), oe(l), oe(f);
      },
    }
  );
}
const Se = {
  default: { background: '#fff', primary: '#404040', rules: '#d0d0d0' },
  dark: { background: '#333', primary: '#eee', rules: '#999' },
};
function Kt(r, e, s) {
  let { theme: t = {} } = e;
  const l = Ce(Ce({}, Se.default), t);
  return (
    (r.$$set = (a) => {
      'theme' in a && s(1, (t = a.theme));
    }),
    [l, t]
  );
}
class Te extends ue {
  constructor(e) {
    super(), fe(this, e, Kt, Jt, he, { theme: 1 });
  }
}
function Qt(r) {
  let e, s;
  return (
    (e = new Te({})),
    {
      c() {
        ie(e.$$.fragment);
      },
      l(t) {
        pe(e.$$.fragment, t);
      },
      m(t, l) {
        ce(e, t, l), (s = !0);
      },
      i(t) {
        s || (q(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        P(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        oe(e, t);
      },
    }
  );
}
function Xt(r) {
  let e, s;
  return (
    (e = new Te({ props: { theme: Se.dark } })),
    {
      c() {
        ie(e.$$.fragment);
      },
      l(t) {
        pe(e.$$.fragment, t);
      },
      m(t, l) {
        ce(e, t, l), (s = !0);
      },
      p: z,
      i(t) {
        s || (q(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        P(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        oe(e, t);
      },
    }
  );
}
function es(r) {
  let e, s;
  return (
    (e = new Te({
      props: {
        theme: De(Ce({}, Se.default), { background: '#e0d3b8', rules: '#aaa' }),
      },
    })),
    {
      c() {
        ie(e.$$.fragment);
      },
      l(t) {
        pe(e.$$.fragment, t);
      },
      m(t, l) {
        ce(e, t, l), (s = !0);
      },
      p: z,
      i(t) {
        s || (q(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        P(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        oe(e, t);
      },
    }
  );
}
function ts(r) {
  let e,
    s,
    t,
    l,
    a,
    f,
    o,
    n,
    d,
    m,
    v,
    b = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteFooter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteFooter</span> <span class="token punctuation">/></span></span></code>`,
    $,
    y,
    C,
    S,
    A,
    j,
    w,
    D,
    _ = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteFooter<span class="token punctuation">,</span> SiteFooterThemes <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteFooter</span> <span class="token attr-name">theme=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>SiteFooterThemes<span class="token punctuation">.</span>dark<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,
    Z,
    x,
    U,
    F,
    Q,
    B,
    T,
    G,
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
    ne,
    W;
  return (
    (y = new xe({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [Qt] },
        $$scope: { ctx: r },
      },
    })),
    (x = new xe({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [Xt] },
        $$scope: { ctx: r },
      },
    })),
    (ne = new xe({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [es] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        (e = k('section')),
          (s = k('h2')),
          (t = N(ut)),
          (l = M()),
          (a = k('p')),
          (f = N('Reuters dotcom site footer, ported from ')),
          (o = k('a')),
          (n = N('Raptor UI components')),
          (d = N('.')),
          (m = M()),
          (v = k('pre')),
          ($ = M()),
          ie(y.$$.fragment),
          (C = M()),
          (S = k('section')),
          (A = k('p')),
          (j = N('Change colours with exported themes.')),
          (w = M()),
          (D = k('pre')),
          (Z = M()),
          ie(x.$$.fragment),
          (U = M()),
          (F = k('section')),
          (Q = k('p')),
          (B = N('You can customise a colour theme.')),
          (T = M()),
          (G = k('pre')),
          (le = M()),
          ie(ne.$$.fragment),
          this.h();
      },
      l(p) {
        e = g(p, 'SECTION', {});
        var H = h(e);
        s = g(H, 'H2', {});
        var Y = h(s);
        (t = O(Y, ut)), Y.forEach(c), (l = V(H)), (a = g(H, 'P', {}));
        var ae = h(a);
        (f = O(ae, 'Reuters dotcom site footer, ported from ')),
          (o = g(ae, 'A', { href: !0, rel: !0 }));
        var J = h(o);
        (n = O(J, 'Raptor UI components')),
          J.forEach(c),
          (d = O(ae, '.')),
          ae.forEach(c),
          H.forEach(c),
          (m = V(p)),
          (v = g(p, 'PRE', { class: !0 }));
        var E = h(v);
        E.forEach(c),
          ($ = V(p)),
          pe(y.$$.fragment, p),
          (C = V(p)),
          (S = g(p, 'SECTION', {}));
        var X = h(S);
        A = g(X, 'P', {});
        var ee = h(A);
        (j = O(ee, 'Change colours with exported themes.')),
          ee.forEach(c),
          X.forEach(c),
          (w = V(p)),
          (D = g(p, 'PRE', { class: !0 }));
        var I = h(D);
        I.forEach(c),
          (Z = V(p)),
          pe(x.$$.fragment, p),
          (U = V(p)),
          (F = g(p, 'SECTION', {}));
        var re = h(F);
        Q = g(re, 'P', {});
        var $e = h(Q);
        (B = O($e, 'You can customise a colour theme.')),
          $e.forEach(c),
          re.forEach(c),
          (T = V(p)),
          (G = g(p, 'PRE', { class: !0 }));
        var be = h(G);
        be.forEach(c), (le = V(p)), pe(ne.$$.fragment, p), this.h();
      },
      h() {
        i(
          o,
          'href',
          'https://github.com/tr/rcom-arc_raptor-ui/tree/develop/packages/rcom-raptor-ui_common/src/components/site-footer'
        ),
          i(o, 'rel', 'nofollow'),
          i(v, 'class', 'language-svelte'),
          i(D, 'class', 'language-svelte'),
          i(G, 'class', 'language-svelte');
      },
      m(p, H) {
        R(p, e, H),
          u(e, s),
          u(s, t),
          u(e, l),
          u(e, a),
          u(a, f),
          u(a, o),
          u(o, n),
          u(a, d),
          R(p, m, H),
          R(p, v, H),
          (v.innerHTML = b),
          R(p, $, H),
          ce(y, p, H),
          R(p, C, H),
          R(p, S, H),
          u(S, A),
          u(A, j),
          R(p, w, H),
          R(p, D, H),
          (D.innerHTML = _),
          R(p, Z, H),
          ce(x, p, H),
          R(p, U, H),
          R(p, F, H),
          u(F, Q),
          u(Q, B),
          R(p, T, H),
          R(p, G, H),
          (G.innerHTML = L),
          R(p, le, H),
          ce(ne, p, H),
          (W = !0);
      },
      p(p, [H]) {
        const Y = {};
        H & 1 && (Y.$$scope = { dirty: H, ctx: p }), y.$set(Y);
        const ae = {};
        H & 1 && (ae.$$scope = { dirty: H, ctx: p }), x.$set(ae);
        const J = {};
        H & 1 && (J.$$scope = { dirty: H, ctx: p }), ne.$set(J);
      },
      i(p) {
        W ||
          (q(y.$$.fragment, p),
          q(x.$$.fragment, p),
          q(ne.$$.fragment, p),
          (W = !0));
      },
      o(p) {
        P(y.$$.fragment, p),
          P(x.$$.fragment, p),
          P(ne.$$.fragment, p),
          (W = !1);
      },
      d(p) {
        p && c(e),
          p && c(m),
          p && c(v),
          p && c($),
          oe(y, p),
          p && c(C),
          p && c(S),
          p && c(w),
          p && c(D),
          p && c(Z),
          oe(x, p),
          p && c(U),
          p && c(F),
          p && c(T),
          p && c(G),
          p && c(le),
          oe(ne, p);
      },
    }
  );
}
const ss = {
    title: 'SiteFooter',
    description: 'Reuters dotcom site footer shadow component.',
    slug: 'site-footer',
  },
  { title: ut, description: cs, slug: us } = ss;
class fs extends ue {
  constructor(e) {
    super(), fe(this, e, null, ts, he, {});
  }
}
export { fs as default, ss as metadata };
