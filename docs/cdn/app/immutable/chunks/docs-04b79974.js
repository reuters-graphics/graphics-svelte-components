var Xt = Object.defineProperty,
  Yt = Object.defineProperties;
var es = Object.getOwnPropertyDescriptors;
var ut = Object.getOwnPropertySymbols;
var ts = Object.prototype.hasOwnProperty,
  ss = Object.prototype.propertyIsEnumerable;
var pt = (l, e, s) =>
    e in l
      ? Xt(l, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (l[e] = s),
  Ke = (l, e) => {
    for (var s in e || (e = {})) ts.call(e, s) && pt(l, s, e[s]);
    if (ut) for (var s of ut(e)) ss.call(e, s) && pt(l, s, e[s]);
    return l;
  },
  ft = (l, e) => Yt(l, es(e));
import {
  S as ue,
  i as pe,
  s as fe,
  K as le,
  t as M,
  L as re,
  a as h,
  h as D,
  d as c,
  b as u,
  g as L,
  J as p,
  E as z,
  T as ns,
  e as _,
  k as A,
  c as g,
  m as T,
  n as _e,
  o as O,
  p as ge,
  q as x,
  j as we,
  B as Q,
  w as X,
  y as Y,
  _ as $e,
  l as ve,
  V as as,
  x as ae,
  f as Ce,
  F as ls,
  G as rs,
  H as os,
  I as is,
  v as qt,
  X as cs,
  z as us,
  A as ps,
  C as fs,
} from './index-83a5d9f9.js';
import { n as ee } from './index-c889ff85.js';
import './main-4dbffdad.js';
import { D as Fe } from './index-16ec1060.js';
import './paths-396f020f.js';
function hs(l) {
  let e, s, t, n, a;
  return {
    c() {
      (e = le('svg')),
        (s = le('title')),
        (t = M('Gallery')),
        (n = le('path')),
        (a = le('path')),
        this.h();
    },
    l(i) {
      e = re(i, 'svg', {
        xmlns: !0,
        viewBox: !0,
        role: !0,
        'aria-hidden': !0,
        focusable: !0,
        class: !0,
      });
      var r = h(e);
      s = re(r, 'title', {});
      var o = h(s);
      (t = D(o, 'Gallery')),
        o.forEach(c),
        (n = re(r, 'path', { d: !0 })),
        h(n).forEach(c),
        (a = re(r, 'path', { d: !0 })),
        h(a).forEach(c),
        r.forEach(c),
        this.h();
    },
    h() {
      u(
        n,
        'd',
        'M13.3331429,0.38114286 L2.66628571,0.38114286 C1.37085714,0.38114286 0.38057143,1.37142857 0.38057143,2.66685714 L0.38057143,13.3337143 C0.38057143,14.6291429 1.37085714,15.6194286 2.66628571,15.6194286 L13.3331429,15.6194286 C14.6285714,15.6194286 15.6188571,14.6291429 15.6188571,13.3337143 L15.6188571,2.66685714 C15.6188571,1.37142857 14.6285714,0.38114286 13.3331429,0.38114286 Z M1.90457143,2.66685714 C1.90457143,2.20971429 2.20914286,1.90514286 2.66628571,1.90514286 L13.3331429,1.90514286 C13.7902857,1.90514286 14.0948571,2.20971429 14.0948571,2.66685714 L14.0948571,8.4571429 L11.5805714,5.94285714 C11.276,5.63828571 10.8188571,5.63828571 10.5137143,5.94285714 L2.43771429,14.0188571 C2.13314286,13.9428571 1.90457143,13.6377143 1.90457143,13.3331429 L1.90457143,2.66628571 L1.90457143,2.66685714 Z M13.3331429,14.0954286 L4.49485714,14.0954286 L11.0474286,7.5428571 L14.0948571,10.5902857 L14.0948571,13.3331429 C14.0948571,13.7902857 13.7902857,14.0948571 13.3331429,14.0948571 L13.3331429,14.0954286 Z'
      ),
        u(
          a,
          'd',
          'M5.33314286,7.2382857 C6.4,7.2382857 7.2377143,6.4 7.2377143,5.33371429 C7.2377143,4.26742857 6.3994286,3.42914286 5.33314286,3.42914286 C4.26685714,3.42914286 3.42857143,4.26742857 3.42857143,5.33371429 C3.42857143,6.4 4.26685714,7.2382857 5.33314286,7.2382857 Z M5.33314286,4.95257143 C5.56171429,4.95257143 5.71428571,5.10514286 5.71428571,5.33371429 C5.71428571,5.56228571 5.56171429,5.71485714 5.33314286,5.71485714 C5.10457143,5.71485714 4.952,5.56228571 4.952,5.33371429 C4.952,5.10514286 5.10457143,4.95257143 5.33314286,4.95257143 Z'
        ),
        u(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        u(e, 'viewBox', '0 0 16 16'),
        u(e, 'role', 'img'),
        u(e, 'aria-hidden', 'true'),
        u(e, 'focusable', 'false'),
        u(e, 'class', 'svelte-17648ki');
    },
    m(i, r) {
      L(i, e, r), p(e, s), p(s, t), p(e, n), p(e, a);
    },
    p: z,
    i: z,
    o: z,
    d(i) {
      i && c(e);
    },
  };
}
class ds extends ue {
  constructor(e) {
    super(), pe(this, e, null, hs, fe, {});
  }
}
function ms(l) {
  let e, s, t, n;
  return {
    c() {
      (e = le('svg')),
        (s = le('title')),
        (t = M('Pictures')),
        (n = le('path')),
        this.h();
    },
    l(a) {
      e = re(a, 'svg', {
        xmlns: !0,
        viewBox: !0,
        role: !0,
        'aria-hidden': !0,
        focusable: !0,
        class: !0,
      });
      var i = h(e);
      s = re(i, 'title', {});
      var r = h(s);
      (t = D(r, 'Pictures')),
        r.forEach(c),
        (n = re(i, 'path', { d: !0 })),
        h(n).forEach(c),
        i.forEach(c),
        this.h();
    },
    h() {
      u(
        n,
        'd',
        'M13.1256562,0 C13.3881562,0 13.6506562,0.17954776 13.825875,0.3597705 L15.3135937,2.69996625 L18.375,2.69996625 C19.8627187,2.69996625 21,3.8697266 21,5.3999325 L21,15.3000337 C21,16.8302396 19.8627187,18 18.375,18 L2.625,18 C1.13728125,18 0,16.8302396 0,15.3000337 L0,5.3999325 C0,3.8697266 1.13728125,2.69996625 2.625,2.69996625 L5.6877187,2.69996625 L7.1754375,0.3597705 C7.3506562,0.18022275 7.6131562,0 7.8756562,0 L13.1256562,0 Z M12.6013125,1.79952751 L8.3140312,1.79952751 L6.8263125,4.1397233 C6.6510937,4.319271 6.3885937,4.4994938 6.1260937,4.4994938 L2.6263125,4.4994938 C2.1013125,4.4994938 1.75153125,4.8592643 1.75153125,5.3992575 L1.75153125,15.2993588 C1.75153125,15.839352 2.1013125,16.1991225 2.6263125,16.1991225 L18.3763125,16.1991225 C18.9013125,16.1991225 19.2510937,15.839352 19.2510937,15.2993588 L19.2510937,5.3992575 C19.2510937,4.8592643 18.9013125,4.4994938 18.3763125,4.4994938 L14.8765312,4.4994938 C14.6140312,4.4994938 14.3515312,4.319946 14.0890312,4.1397233 L12.6013125,1.79952751 Z M10.5013125,5.3999325 C12.95175,5.3999325 14.8765312,7.3796828 14.8765312,9.9001012 C14.8765312,12.4205197 12.95175,14.40027 10.5013125,14.40027 C8.050875,14.40027 6.1260937,12.4205197 6.1260937,9.9001012 C6.1260937,7.3796828 8.0515312,5.3999325 10.5013125,5.3999325 Z M10.5013125,7.19946 C9.0135937,7.19946 7.8763125,8.3692204 7.8763125,9.8994263 C7.8763125,11.4296321 9.0135937,12.5993925 10.5013125,12.5993925 C11.9890312,12.5993925 13.1263125,11.4296321 13.1263125,9.8994263 C13.1263125,8.3692204 11.9890312,7.19946 10.5013125,7.19946 Z'
      ),
        u(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        u(e, 'viewBox', '0 0 21 18'),
        u(e, 'role', 'img'),
        u(e, 'aria-hidden', 'true'),
        u(e, 'focusable', 'false'),
        u(e, 'class', 'svelte-17648ki');
    },
    m(a, i) {
      L(a, e, i), p(e, s), p(s, t), p(e, n);
    },
    p: z,
    i: z,
    o: z,
    d(a) {
      a && c(e);
    },
  };
}
class ks extends ue {
  constructor(e) {
    super(), pe(this, e, null, ms, fe, {});
  }
}
function _s(l) {
  let e, s, t, n;
  return {
    c() {
      (e = le('svg')),
        (s = le('title')),
        (t = M('Videos')),
        (n = le('path')),
        this.h();
    },
    l(a) {
      e = re(a, 'svg', {
        xmlns: !0,
        viewBox: !0,
        role: !0,
        'aria-hidden': !0,
        focusable: !0,
        class: !0,
      });
      var i = h(e);
      s = re(i, 'title', {});
      var r = h(s);
      (t = D(r, 'Videos')),
        r.forEach(c),
        (n = re(i, 'path', { d: !0 })),
        h(n).forEach(c),
        i.forEach(c),
        this.h();
    },
    h() {
      u(
        n,
        'd',
        'M15.6665,1.5665 C15.4665,1.433 15.2,1.5 15,1.633 L11.3335,4.233 L11.3335,2.1665 C11.3335,1.033 10.467,0.1665 9.3335,0.1665 L2,0.1665 C0.8665,0.1665 0,1.033 0,2.1665 L0,8.833 C0,9.9665 0.8665,10.833 2,10.833 L9.3335,10.833 C10.467,10.833 11.3335,9.9665 11.3335,8.833 L11.3335,6.7665 L14.9335,9.3665 C15.067,9.433 15.2,9.5 15.3335,9.5 C15.467,9.5 15.5335,9.5 15.667,9.4335 C15.867,9.3 16.0005,9.1 16.0005,8.8335 L16.0005,2.167 C16.0005,1.9005 15.867,1.7005 15.667,1.567 L15.6665,1.5665 Z M10,8.8335 C10,9.2335 9.7335,9.5 9.3335,9.5 L2,9.5 C1.6,9.5 1.3335,9.2335 1.3335,8.8335 L1.3335,2.167 C1.3335,1.767 1.6,1.5005 2,1.5005 L9.3335,1.5005 C9.7335,1.5005 10,1.767 10,2.167 L10,8.8335 Z M14.6665,7.5665 L11.8,5.5 L14.6665,3.4335 L14.6665,7.567 L14.6665,7.5665 Z'
      ),
        u(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        u(e, 'viewBox', '0 0 16 11'),
        u(e, 'role', 'img'),
        u(e, 'aria-hidden', 'true'),
        u(e, 'focusable', 'false'),
        u(e, 'class', 'svelte-17648ki');
    },
    m(a, i) {
      L(a, e, i), p(e, s), p(s, t), p(e, n);
    },
    p: z,
    i: z,
    o: z,
    d(a) {
      a && c(e);
    },
  };
}
class gs extends ue {
  constructor(e) {
    super(), pe(this, e, null, _s, fe, {});
  }
}
function ht(l, e, s) {
  const t = l.slice();
  return (t[4] = e[s]), t;
}
function dt(l, e, s) {
  const t = l.slice();
  return (t[4] = e[s]), t;
}
function mt(l, e, s) {
  const t = l.slice();
  return (t[4] = e[s]), t;
}
function kt(l, e, s) {
  const t = l.slice();
  return (t[4] = e[s]), t;
}
function _t(l, e, s) {
  const t = l.slice();
  return (t[4] = e[s]), t;
}
function gt(l, e, s) {
  const t = l.slice();
  return (t[4] = e[s]), t;
}
function vt(l, e, s) {
  const t = l.slice();
  return (t[4] = e[s]), t;
}
function wt(l) {
  let e,
    s,
    t,
    n,
    a,
    i,
    r,
    o,
    f,
    m,
    d,
    $,
    v,
    y,
    S,
    B,
    R,
    W,
    b,
    j,
    w,
    F,
    H,
    P,
    q,
    te,
    Z,
    N;
  const se = [ws, vs],
    C = [];
  function ce(E, oe) {
    return E[1] < Qe ? 0 : 1;
  }
  (i = ce(l)), (r = C[i] = se[i](l));
  let ke = l[0].browse_links,
    U = [];
  for (let E = 0; E < ke.length; E += 1) U[E] = yt(kt(l, ke, E));
  let G = l[1] >= Qe && Ct(l),
    he = l[0].about_links,
    K = [];
  for (let E = 0; E < he.length; E += 1) K[E] = It(dt(l, he, E));
  let de = l[0].stay_informed_links,
    J = [];
  for (let E = 0; E < de.length; E += 1) J[E] = xt(ht(l, de, E));
  return {
    c() {
      (e = _('section')),
        (s = _('h2')),
        (t = M('Site Index')),
        (n = A()),
        (a = _('div')),
        r.c(),
        (o = A()),
        (f = _('section')),
        (m = _('h3')),
        (d = M('Browse')),
        ($ = A()),
        (v = _('ul'));
      for (let E = 0; E < U.length; E += 1) U[E].c();
      (y = A()),
        G && G.c(),
        (S = A()),
        (B = _('div')),
        (R = _('section')),
        (W = _('h3')),
        (b = M('About Reuters')),
        (j = A()),
        (w = _('ul'));
      for (let E = 0; E < K.length; E += 1) K[E].c();
      (F = A()),
        (H = _('section')),
        (P = _('h3')),
        (q = M('Stay Informed')),
        (te = A()),
        (Z = _('ul'));
      for (let E = 0; E < J.length; E += 1) J[E].c();
      this.h();
    },
    l(E) {
      e = g(E, 'SECTION', { class: !0 });
      var oe = h(e);
      s = g(oe, 'H2', { class: !0 });
      var ne = h(s);
      (t = D(ne, 'Site Index')),
        ne.forEach(c),
        (n = T(oe)),
        (a = g(oe, 'DIV', { class: !0 }));
      var I = h(a);
      r.l(I), (o = T(I)), (f = g(I, 'SECTION', { class: !0 }));
      var ie = h(f);
      m = g(ie, 'H3', { class: !0 });
      var Le = h(m);
      (d = D(Le, 'Browse')),
        Le.forEach(c),
        ($ = T(ie)),
        (v = g(ie, 'UL', { class: !0 }));
      var be = h(v);
      for (let me = 0; me < U.length; me += 1) U[me].l(be);
      be.forEach(c),
        ie.forEach(c),
        (y = T(I)),
        G && G.l(I),
        (S = T(I)),
        (B = g(I, 'DIV', { class: !0 }));
      var Se = h(B);
      R = g(Se, 'SECTION', { class: !0 });
      var Ee = h(R);
      W = g(Ee, 'H3', { class: !0 });
      var Me = h(W);
      (b = D(Me, 'About Reuters')),
        Me.forEach(c),
        (j = T(Ee)),
        (w = g(Ee, 'UL', { class: !0 }));
      var De = h(w);
      for (let me = 0; me < K.length; me += 1) K[me].l(De);
      De.forEach(c),
        Ee.forEach(c),
        (F = T(Se)),
        (H = g(Se, 'SECTION', { class: !0 }));
      var Ie = h(H);
      P = g(Ie, 'H3', { class: !0 });
      var ye = h(P);
      (q = D(ye, 'Stay Informed')),
        ye.forEach(c),
        (te = T(Ie)),
        (Z = g(Ie, 'UL', { class: !0 }));
      var je = h(Z);
      for (let me = 0; me < J.length; me += 1) J[me].l(je);
      je.forEach(c),
        Ie.forEach(c),
        Se.forEach(c),
        I.forEach(c),
        oe.forEach(c),
        this.h();
    },
    h() {
      u(s, 'class', 'visually-hidden svelte-fhk6t1'),
        u(m, 'class', 'svelte-fhk6t1'),
        u(v, 'class', 'svelte-fhk6t1'),
        u(f, 'class', 'link-group svelte-fhk6t1'),
        u(W, 'class', 'svelte-fhk6t1'),
        u(w, 'class', 'svelte-fhk6t1'),
        u(R, 'class', 'about'),
        u(P, 'class', 'svelte-fhk6t1'),
        u(Z, 'class', 'svelte-fhk6t1'),
        u(H, 'class', 'stay-informed svelte-fhk6t1'),
        u(B, 'class', 'about-and-stay-informed svelte-fhk6t1'),
        u(a, 'class', 'content-container svelte-fhk6t1'),
        u(e, 'class', 'quick-links svelte-fhk6t1');
    },
    m(E, oe) {
      L(E, e, oe),
        p(e, s),
        p(s, t),
        p(e, n),
        p(e, a),
        C[i].m(a, null),
        p(a, o),
        p(a, f),
        p(f, m),
        p(m, d),
        p(f, $),
        p(f, v);
      for (let ne = 0; ne < U.length; ne += 1) U[ne].m(v, null);
      p(a, y),
        G && G.m(a, null),
        p(a, S),
        p(a, B),
        p(B, R),
        p(R, W),
        p(W, b),
        p(R, j),
        p(R, w);
      for (let ne = 0; ne < K.length; ne += 1) K[ne].m(w, null);
      p(B, F), p(B, H), p(H, P), p(P, q), p(H, te), p(H, Z);
      for (let ne = 0; ne < J.length; ne += 1) J[ne].m(Z, null);
      N = !0;
    },
    p(E, oe) {
      let ne = i;
      if (
        ((i = ce(E)),
        i === ne
          ? C[i].p(E, oe)
          : (_e(),
            O(C[ne], 1, 1, () => {
              C[ne] = null;
            }),
            ge(),
            (r = C[i]),
            r ? r.p(E, oe) : ((r = C[i] = se[i](E)), r.c()),
            x(r, 1),
            r.m(a, o)),
        oe & 1)
      ) {
        ke = E[0].browse_links;
        let I;
        for (I = 0; I < ke.length; I += 1) {
          const ie = kt(E, ke, I);
          U[I] ? U[I].p(ie, oe) : ((U[I] = yt(ie)), U[I].c(), U[I].m(v, null));
        }
        for (; I < U.length; I += 1) U[I].d(1);
        U.length = ke.length;
      }
      if (
        (E[1] >= Qe
          ? G
            ? (G.p(E, oe), oe & 2 && x(G, 1))
            : ((G = Ct(E)), G.c(), x(G, 1), G.m(a, S))
          : G &&
            (_e(),
            O(G, 1, 1, () => {
              G = null;
            }),
            ge()),
        oe & 1)
      ) {
        he = E[0].about_links;
        let I;
        for (I = 0; I < he.length; I += 1) {
          const ie = dt(E, he, I);
          K[I] ? K[I].p(ie, oe) : ((K[I] = It(ie)), K[I].c(), K[I].m(w, null));
        }
        for (; I < K.length; I += 1) K[I].d(1);
        K.length = he.length;
      }
      if (oe & 1) {
        de = E[0].stay_informed_links;
        let I;
        for (I = 0; I < de.length; I += 1) {
          const ie = ht(E, de, I);
          J[I] ? J[I].p(ie, oe) : ((J[I] = xt(ie)), J[I].c(), J[I].m(Z, null));
        }
        for (; I < J.length; I += 1) J[I].d(1);
        J.length = de.length;
      }
    },
    i(E) {
      N || (x(r), x(G), (N = !0));
    },
    o(E) {
      O(r), O(G), (N = !1);
    },
    d(E) {
      E && c(e), C[i].d(), $e(U, E), G && G.d(), $e(K, E), $e(J, E);
    },
  };
}
function vs(l) {
  let e,
    s,
    t,
    n,
    a,
    i = l[0].latest_links,
    r = [];
  for (let o = 0; o < i.length; o += 1) r[o] = $t(_t(l, i, o));
  return {
    c() {
      (e = _('section')),
        (s = _('h3')),
        (t = M('Latest')),
        (n = A()),
        (a = _('ul'));
      for (let o = 0; o < r.length; o += 1) r[o].c();
      this.h();
    },
    l(o) {
      e = g(o, 'SECTION', { class: !0 });
      var f = h(e);
      s = g(f, 'H3', { class: !0 });
      var m = h(s);
      (t = D(m, 'Latest')),
        m.forEach(c),
        (n = T(f)),
        (a = g(f, 'UL', { class: !0 }));
      var d = h(a);
      for (let $ = 0; $ < r.length; $ += 1) r[$].l(d);
      d.forEach(c), f.forEach(c), this.h();
    },
    h() {
      u(s, 'class', 'svelte-fhk6t1'),
        u(a, 'class', 'svelte-fhk6t1'),
        u(e, 'class', 'link-group svelte-fhk6t1');
    },
    m(o, f) {
      L(o, e, f), p(e, s), p(s, t), p(e, n), p(e, a);
      for (let m = 0; m < r.length; m += 1) r[m].m(a, null);
    },
    p(o, f) {
      if (f & 1) {
        i = o[0].latest_links;
        let m;
        for (m = 0; m < i.length; m += 1) {
          const d = _t(o, i, m);
          r[m] ? r[m].p(d, f) : ((r[m] = $t(d)), r[m].c(), r[m].m(a, null));
        }
        for (; m < r.length; m += 1) r[m].d(1);
        r.length = i.length;
      }
    },
    i: z,
    o: z,
    d(o) {
      o && c(e), $e(r, o);
    },
  };
}
function ws(l) {
  let e,
    s,
    t,
    n,
    a,
    i,
    r,
    o,
    f,
    m,
    d,
    $,
    v,
    y = l[0].latest_links,
    S = [];
  for (let b = 0; b < y.length; b += 1) S[b] = bt(vt(l, y, b));
  let B = l[0].media_links,
    R = [];
  for (let b = 0; b < B.length; b += 1) R[b] = Et(gt(l, B, b));
  const W = (b) =>
    O(R[b], 1, 1, () => {
      R[b] = null;
    });
  return {
    c() {
      (e = _('div')),
        (s = _('section')),
        (t = _('h3')),
        (n = M('Latest')),
        (a = A()),
        (i = _('ul'));
      for (let b = 0; b < S.length; b += 1) S[b].c();
      (r = A()),
        (o = _('section')),
        (f = _('h3')),
        (m = M('Media')),
        (d = A()),
        ($ = _('ul'));
      for (let b = 0; b < R.length; b += 1) R[b].c();
      this.h();
    },
    l(b) {
      e = g(b, 'DIV', { class: !0 });
      var j = h(e);
      s = g(j, 'SECTION', { class: !0 });
      var w = h(s);
      t = g(w, 'H3', { class: !0 });
      var F = h(t);
      (n = D(F, 'Latest')),
        F.forEach(c),
        (a = T(w)),
        (i = g(w, 'UL', { class: !0 }));
      var H = h(i);
      for (let Z = 0; Z < S.length; Z += 1) S[Z].l(H);
      H.forEach(c),
        w.forEach(c),
        (r = T(j)),
        (o = g(j, 'SECTION', { class: !0 }));
      var P = h(o);
      f = g(P, 'H3', { class: !0 });
      var q = h(f);
      (m = D(q, 'Media')),
        q.forEach(c),
        (d = T(P)),
        ($ = g(P, 'UL', { class: !0 }));
      var te = h($);
      for (let Z = 0; Z < R.length; Z += 1) R[Z].l(te);
      te.forEach(c), P.forEach(c), j.forEach(c), this.h();
    },
    h() {
      u(t, 'class', 'svelte-fhk6t1'),
        u(i, 'class', 'svelte-fhk6t1'),
        u(s, 'class', 'link-group svelte-fhk6t1'),
        u(f, 'class', 'svelte-fhk6t1'),
        u($, 'class', 'svelte-fhk6t1'),
        u(o, 'class', 'link-group media svelte-fhk6t1'),
        u(e, 'class', 'latest-and-media svelte-fhk6t1');
    },
    m(b, j) {
      L(b, e, j), p(e, s), p(s, t), p(t, n), p(s, a), p(s, i);
      for (let w = 0; w < S.length; w += 1) S[w].m(i, null);
      p(e, r), p(e, o), p(o, f), p(f, m), p(o, d), p(o, $);
      for (let w = 0; w < R.length; w += 1) R[w].m($, null);
      v = !0;
    },
    p(b, j) {
      if (j & 1) {
        y = b[0].latest_links;
        let w;
        for (w = 0; w < y.length; w += 1) {
          const F = vt(b, y, w);
          S[w] ? S[w].p(F, j) : ((S[w] = bt(F)), S[w].c(), S[w].m(i, null));
        }
        for (; w < S.length; w += 1) S[w].d(1);
        S.length = y.length;
      }
      if (j & 5) {
        B = b[0].media_links;
        let w;
        for (w = 0; w < B.length; w += 1) {
          const F = gt(b, B, w);
          R[w]
            ? (R[w].p(F, j), x(R[w], 1))
            : ((R[w] = Et(F)), R[w].c(), x(R[w], 1), R[w].m($, null));
        }
        for (_e(), w = B.length; w < R.length; w += 1) W(w);
        ge();
      }
    },
    i(b) {
      if (!v) {
        for (let j = 0; j < B.length; j += 1) x(R[j]);
        v = !0;
      }
    },
    o(b) {
      R = R.filter(Boolean);
      for (let j = 0; j < R.length; j += 1) O(R[j]);
      v = !1;
    },
    d(b) {
      b && c(e), $e(S, b), $e(R, b);
    },
  };
}
function $t(l) {
  let e,
    s,
    t = l[4].text + '',
    n,
    a,
    i;
  return {
    c() {
      (e = _('li')), (s = _('a')), (n = M(t)), (i = A()), this.h();
    },
    l(r) {
      e = g(r, 'LI', { class: !0 });
      var o = h(e);
      s = g(o, 'A', { href: !0, class: !0 });
      var f = h(s);
      (n = D(f, t)), f.forEach(c), (i = T(o)), o.forEach(c), this.h();
    },
    h() {
      u(s, 'href', (a = ee(l[4].url))),
        u(s, 'class', 'svelte-fhk6t1'),
        u(e, 'class', 'svelte-fhk6t1');
    },
    m(r, o) {
      L(r, e, o), p(e, s), p(s, n), p(e, i);
    },
    p(r, o) {
      o & 1 && t !== (t = r[4].text + '') && we(n, t),
        o & 1 && a !== (a = ee(r[4].url)) && u(s, 'href', a);
    },
    d(r) {
      r && c(e);
    },
  };
}
function bt(l) {
  let e,
    s,
    t = l[4].text + '',
    n,
    a,
    i;
  return {
    c() {
      (e = _('li')), (s = _('a')), (n = M(t)), (i = A()), this.h();
    },
    l(r) {
      e = g(r, 'LI', { class: !0 });
      var o = h(e);
      s = g(o, 'A', { href: !0, class: !0 });
      var f = h(s);
      (n = D(f, t)), f.forEach(c), (i = T(o)), o.forEach(c), this.h();
    },
    h() {
      u(s, 'href', (a = ee(l[4].url))),
        u(s, 'class', 'svelte-fhk6t1'),
        u(e, 'class', 'svelte-fhk6t1');
    },
    m(r, o) {
      L(r, e, o), p(e, s), p(s, n), p(e, i);
    },
    p(r, o) {
      o & 1 && t !== (t = r[4].text + '') && we(n, t),
        o & 1 && a !== (a = ee(r[4].url)) && u(s, 'href', a);
    },
    d(r) {
      r && c(e);
    },
  };
}
function Et(l) {
  let e,
    s,
    t,
    n,
    a,
    i = l[4].text + '',
    r,
    o,
    f,
    m;
  var d = l[2][l[4].symbol];
  function $(v) {
    return {};
  }
  return (
    d && (t = new d($())),
    {
      c() {
        (e = _('li')),
          (s = _('div')),
          t && X(t.$$.fragment),
          (n = A()),
          (a = _('a')),
          (r = M(i)),
          (f = A()),
          this.h();
      },
      l(v) {
        e = g(v, 'LI', { class: !0 });
        var y = h(e);
        s = g(y, 'DIV', { class: !0 });
        var S = h(s);
        t && ae(t.$$.fragment, S),
          S.forEach(c),
          (n = T(y)),
          (a = g(y, 'A', { href: !0, class: !0 }));
        var B = h(a);
        (r = D(B, i)), B.forEach(c), (f = T(y)), y.forEach(c), this.h();
      },
      h() {
        u(s, 'class', 'symbol svelte-fhk6t1'),
          u(a, 'href', (o = ee(l[4].url))),
          u(a, 'class', 'svelte-fhk6t1'),
          u(e, 'class', 'svelte-fhk6t1');
      },
      m(v, y) {
        L(v, e, y),
          p(e, s),
          t && Y(t, s, null),
          p(e, n),
          p(e, a),
          p(a, r),
          p(e, f),
          (m = !0);
      },
      p(v, y) {
        if (d !== (d = v[2][v[4].symbol])) {
          if (t) {
            _e();
            const S = t;
            O(S.$$.fragment, 1, 0, () => {
              Q(S, 1);
            }),
              ge();
          }
          d
            ? ((t = new d($())),
              X(t.$$.fragment),
              x(t.$$.fragment, 1),
              Y(t, s, null))
            : (t = null);
        }
        (!m || y & 1) && i !== (i = v[4].text + '') && we(r, i),
          (!m || (y & 1 && o !== (o = ee(v[4].url)))) && u(a, 'href', o);
      },
      i(v) {
        m || (t && x(t.$$.fragment, v), (m = !0));
      },
      o(v) {
        t && O(t.$$.fragment, v), (m = !1);
      },
      d(v) {
        v && c(e), t && Q(t);
      },
    }
  );
}
function yt(l) {
  let e,
    s,
    t = l[4].text + '',
    n,
    a,
    i;
  return {
    c() {
      (e = _('li')), (s = _('a')), (n = M(t)), (i = A()), this.h();
    },
    l(r) {
      e = g(r, 'LI', { class: !0 });
      var o = h(e);
      s = g(o, 'A', { href: !0, class: !0 });
      var f = h(s);
      (n = D(f, t)), f.forEach(c), (i = T(o)), o.forEach(c), this.h();
    },
    h() {
      u(s, 'href', (a = ee(l[4].url))),
        u(s, 'class', 'svelte-fhk6t1'),
        u(e, 'class', 'svelte-fhk6t1');
    },
    m(r, o) {
      L(r, e, o), p(e, s), p(s, n), p(e, i);
    },
    p(r, o) {
      o & 1 && t !== (t = r[4].text + '') && we(n, t),
        o & 1 && a !== (a = ee(r[4].url)) && u(s, 'href', a);
    },
    d(r) {
      r && c(e);
    },
  };
}
function Ct(l) {
  let e,
    s,
    t,
    n,
    a,
    i,
    r = l[0].media_links,
    o = [];
  for (let m = 0; m < r.length; m += 1) o[m] = Lt(mt(l, r, m));
  const f = (m) =>
    O(o[m], 1, 1, () => {
      o[m] = null;
    });
  return {
    c() {
      (e = _('section')),
        (s = _('h3')),
        (t = M('Media')),
        (n = A()),
        (a = _('ul'));
      for (let m = 0; m < o.length; m += 1) o[m].c();
      this.h();
    },
    l(m) {
      e = g(m, 'SECTION', { class: !0 });
      var d = h(e);
      s = g(d, 'H3', { class: !0 });
      var $ = h(s);
      (t = D($, 'Media')),
        $.forEach(c),
        (n = T(d)),
        (a = g(d, 'UL', { class: !0 }));
      var v = h(a);
      for (let y = 0; y < o.length; y += 1) o[y].l(v);
      v.forEach(c), d.forEach(c), this.h();
    },
    h() {
      u(s, 'class', 'svelte-fhk6t1'),
        u(a, 'class', 'svelte-fhk6t1'),
        u(e, 'class', 'link-group media svelte-fhk6t1');
    },
    m(m, d) {
      L(m, e, d), p(e, s), p(s, t), p(e, n), p(e, a);
      for (let $ = 0; $ < o.length; $ += 1) o[$].m(a, null);
      i = !0;
    },
    p(m, d) {
      if (d & 5) {
        r = m[0].media_links;
        let $;
        for ($ = 0; $ < r.length; $ += 1) {
          const v = mt(m, r, $);
          o[$]
            ? (o[$].p(v, d), x(o[$], 1))
            : ((o[$] = Lt(v)), o[$].c(), x(o[$], 1), o[$].m(a, null));
        }
        for (_e(), $ = r.length; $ < o.length; $ += 1) f($);
        ge();
      }
    },
    i(m) {
      if (!i) {
        for (let d = 0; d < r.length; d += 1) x(o[d]);
        i = !0;
      }
    },
    o(m) {
      o = o.filter(Boolean);
      for (let d = 0; d < o.length; d += 1) O(o[d]);
      i = !1;
    },
    d(m) {
      m && c(e), $e(o, m);
    },
  };
}
function Lt(l) {
  let e,
    s,
    t,
    n,
    a,
    i = l[4].text + '',
    r,
    o,
    f,
    m;
  var d = l[2][l[4].symbol];
  function $(v) {
    return {};
  }
  return (
    d && (t = new d($())),
    {
      c() {
        (e = _('li')),
          (s = _('div')),
          t && X(t.$$.fragment),
          (n = A()),
          (a = _('a')),
          (r = M(i)),
          (f = A()),
          this.h();
      },
      l(v) {
        e = g(v, 'LI', { class: !0 });
        var y = h(e);
        s = g(y, 'DIV', { class: !0 });
        var S = h(s);
        t && ae(t.$$.fragment, S),
          S.forEach(c),
          (n = T(y)),
          (a = g(y, 'A', { href: !0, class: !0 }));
        var B = h(a);
        (r = D(B, i)), B.forEach(c), (f = T(y)), y.forEach(c), this.h();
      },
      h() {
        u(s, 'class', 'symbol svelte-fhk6t1'),
          u(a, 'href', (o = ee(l[4].url))),
          u(a, 'class', 'svelte-fhk6t1'),
          u(e, 'class', 'svelte-fhk6t1');
      },
      m(v, y) {
        L(v, e, y),
          p(e, s),
          t && Y(t, s, null),
          p(e, n),
          p(e, a),
          p(a, r),
          p(e, f),
          (m = !0);
      },
      p(v, y) {
        if (d !== (d = v[2][v[4].symbol])) {
          if (t) {
            _e();
            const S = t;
            O(S.$$.fragment, 1, 0, () => {
              Q(S, 1);
            }),
              ge();
          }
          d
            ? ((t = new d($())),
              X(t.$$.fragment),
              x(t.$$.fragment, 1),
              Y(t, s, null))
            : (t = null);
        }
        (!m || y & 1) && i !== (i = v[4].text + '') && we(r, i),
          (!m || (y & 1 && o !== (o = ee(v[4].url)))) && u(a, 'href', o);
      },
      i(v) {
        m || (t && x(t.$$.fragment, v), (m = !0));
      },
      o(v) {
        t && O(t.$$.fragment, v), (m = !1);
      },
      d(v) {
        v && c(e), t && Q(t);
      },
    }
  );
}
function It(l) {
  let e,
    s,
    t = l[4].text + '',
    n,
    a,
    i;
  return {
    c() {
      (e = _('li')), (s = _('a')), (n = M(t)), (i = A()), this.h();
    },
    l(r) {
      e = g(r, 'LI', { class: !0 });
      var o = h(e);
      s = g(o, 'A', { href: !0, class: !0 });
      var f = h(s);
      (n = D(f, t)), f.forEach(c), (i = T(o)), o.forEach(c), this.h();
    },
    h() {
      u(s, 'href', (a = ee(l[4].url))),
        u(s, 'class', 'svelte-fhk6t1'),
        u(e, 'class', 'svelte-fhk6t1');
    },
    m(r, o) {
      L(r, e, o), p(e, s), p(s, n), p(e, i);
    },
    p(r, o) {
      o & 1 && t !== (t = r[4].text + '') && we(n, t),
        o & 1 && a !== (a = ee(r[4].url)) && u(s, 'href', a);
    },
    d(r) {
      r && c(e);
    },
  };
}
function xt(l) {
  let e,
    s,
    t = l[4].text + '',
    n,
    a,
    i;
  return {
    c() {
      (e = _('li')), (s = _('a')), (n = M(t)), (i = A()), this.h();
    },
    l(r) {
      e = g(r, 'LI', { class: !0 });
      var o = h(e);
      s = g(o, 'A', { href: !0, class: !0 });
      var f = h(s);
      (n = D(f, t)), f.forEach(c), (i = T(o)), o.forEach(c), this.h();
    },
    h() {
      u(s, 'href', (a = ee(l[4].url))),
        u(s, 'class', 'svelte-fhk6t1'),
        u(e, 'class', 'svelte-fhk6t1');
    },
    m(r, o) {
      L(r, e, o), p(e, s), p(s, n), p(e, i);
    },
    p(r, o) {
      o & 1 && t !== (t = r[4].text + '') && we(n, t),
        o & 1 && a !== (a = ee(r[4].url)) && u(s, 'href', a);
    },
    d(r) {
      r && c(e);
    },
  };
}
function $s(l) {
  let e, s, t, n;
  ns(l[3]);
  let a = l[0].latest_links && wt(l);
  return {
    c() {
      a && a.c(), (e = ve());
    },
    l(i) {
      a && a.l(i), (e = ve());
    },
    m(i, r) {
      a && a.m(i, r),
        L(i, e, r),
        (s = !0),
        t || ((n = as(window, 'resize', l[3])), (t = !0));
    },
    p(i, [r]) {
      i[0].latest_links
        ? a
          ? (a.p(i, r), r & 1 && x(a, 1))
          : ((a = wt(i)), a.c(), x(a, 1), a.m(e.parentNode, e))
        : a &&
          (_e(),
          O(a, 1, 1, () => {
            a = null;
          }),
          ge());
    },
    i(i) {
      s || (x(a), (s = !0));
    },
    o(i) {
      O(a), (s = !1);
    },
    d(i) {
      a && a.d(i), i && c(e), (t = !1), n();
    },
  };
}
const Qe = 745;
function bs(l, e, s) {
  const t = { graphics: ds, pictures: ks, videos: gs };
  let { links: n = {} } = e,
    a = 1200;
  function i() {
    s(1, (a = window.innerWidth));
  }
  return (
    (l.$$set = (r) => {
      'links' in r && s(0, (n = r.links));
    }),
    [n, a, t, i]
  );
}
class Es extends ue {
  constructor(e) {
    super(), pe(this, e, bs, $s, fe, { links: 0 });
  }
}
function ys(l) {
  let e, s;
  return {
    c() {
      (e = le('svg')), (s = le('path')), this.h();
    },
    l(t) {
      e = re(t, 'svg', {
        'aria-hidden': !0,
        focusable: !0,
        xmlns: !0,
        viewBox: !0,
        style: !0,
        class: !0,
      });
      var n = h(e);
      (s = re(n, 'path', { d: !0 })), h(s).forEach(c), n.forEach(c), this.h();
    },
    h() {
      u(
        s,
        'd',
        'M16 1.537a6.469 6.469 0 0 1-1.884.516A3.3 3.3 0 0 0 15.559.237a6.603 6.603 0 0 1-2.084.797A3.282 3.282 0 0 0 11.078 0a3.28 3.28 0 0 0-3.196 4.028A9.315 9.315 0 0 1 1.118.598a3.28 3.28 0 0 0-.444 1.65c0 1.137.578 2.143 1.46 2.73A3.281 3.281 0 0 1 .646 4.57v.04A3.282 3.282 0 0 0 3.28 7.83a3.286 3.286 0 0 1-1.483.055 3.294 3.294 0 0 0 3.065 2.282A6.583 6.583 0 0 1 0 11.526 9.281 9.281 0 0 0 5.034 13c6.036 0 9.338-5.003 9.338-9.34 0-.144-.003-.285-.01-.425A6.607 6.607 0 0 0 16 1.538Z'
      ),
        u(e, 'aria-hidden', 'true'),
        u(e, 'focusable', 'false'),
        u(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        u(e, 'viewBox', '0 0 16 13'),
        Ce(e, 'width', l[0] + 'px'),
        u(e, 'class', 'svelte-17648ki');
    },
    m(t, n) {
      L(t, e, n), p(e, s);
    },
    p(t, [n]) {
      n & 1 && Ce(e, 'width', t[0] + 'px');
    },
    i: z,
    o: z,
    d(t) {
      t && c(e);
    },
  };
}
function Cs(l, e, s) {
  let { width: t = 20 } = e;
  return (
    (l.$$set = (n) => {
      'width' in n && s(0, (t = n.width));
    }),
    [t]
  );
}
class Ls extends ue {
  constructor(e) {
    super(), pe(this, e, Cs, ys, fe, { width: 0 });
  }
}
function Is(l) {
  let e, s;
  return {
    c() {
      (e = le('svg')), (s = le('path')), this.h();
    },
    l(t) {
      e = re(t, 'svg', {
        'aria-hidden': !0,
        focusable: !0,
        viewBox: !0,
        xmlns: !0,
        style: !0,
        class: !0,
      });
      var n = h(e);
      (s = re(n, 'path', { d: !0 })), h(s).forEach(c), n.forEach(c), this.h();
    },
    h() {
      u(
        s,
        'd',
        'M18.375 0H2.625A2.617 2.617 0 0 0 0 2.609V14.39A2.617 2.617 0 0 0 2.625 17h15.75A2.617 2.617 0 0 0 21 14.391V2.61A2.617 2.617 0 0 0 18.375 0Zm-10.5 13.044V4.348l7 4.348-7 4.348Z'
      ),
        u(e, 'aria-hidden', 'true'),
        u(e, 'focusable', 'false'),
        u(e, 'viewBox', '0 0 21 17'),
        u(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        Ce(e, 'width', l[0] + 'px'),
        u(e, 'class', 'svelte-17648ki');
    },
    m(t, n) {
      L(t, e, n), p(e, s);
    },
    p(t, [n]) {
      n & 1 && Ce(e, 'width', t[0] + 'px');
    },
    i: z,
    o: z,
    d(t) {
      t && c(e);
    },
  };
}
function xs(l, e, s) {
  let { width: t = 20 } = e;
  return (
    (l.$$set = (n) => {
      'width' in n && s(0, (t = n.width));
    }),
    [t]
  );
}
class Ss extends ue {
  constructor(e) {
    super(), pe(this, e, xs, Is, fe, { width: 0 });
  }
}
function As(l) {
  let e, s;
  return {
    c() {
      (e = le('svg')), (s = le('path')), this.h();
    },
    l(t) {
      e = re(t, 'svg', {
        'aria-hidden': !0,
        focusable: !0,
        xmlns: !0,
        viewBox: !0,
        style: !0,
        class: !0,
      });
      var n = h(e);
      (s = re(n, 'path', { d: !0 })), h(s).forEach(c), n.forEach(c), this.h();
    },
    h() {
      u(
        s,
        'd',
        'M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5H8V9H6V7h2V6c0-1.653 1.347-3 3-3h2v2h-2c-.55 0-1 .45-1 1v1h3l-.5 2H10v7h4.5c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5Z'
      ),
        u(e, 'aria-hidden', 'true'),
        u(e, 'focusable', 'false'),
        u(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        u(e, 'viewBox', '0 0 16 16'),
        Ce(e, 'width', l[0] + 'px'),
        u(e, 'class', 'svelte-17648ki');
    },
    m(t, n) {
      L(t, e, n), p(e, s);
    },
    p(t, [n]) {
      n & 1 && Ce(e, 'width', t[0] + 'px');
    },
    i: z,
    o: z,
    d(t) {
      t && c(e);
    },
  };
}
function Ts(l, e, s) {
  let { width: t = 20 } = e;
  return (
    (l.$$set = (n) => {
      'width' in n && s(0, (t = n.width));
    }),
    [t]
  );
}
class Rs extends ue {
  constructor(e) {
    super(), pe(this, e, Ts, As, fe, { width: 0 });
  }
}
function Vs(l) {
  let e, s, t;
  return {
    c() {
      (e = le('svg')), (s = le('path')), (t = le('path')), this.h();
    },
    l(n) {
      e = re(n, 'svg', {
        'aria-hidden': !0,
        focusable: !0,
        xmlns: !0,
        viewBox: !0,
        style: !0,
        class: !0,
      });
      var a = h(e);
      (s = re(a, 'path', { d: !0 })),
        h(s).forEach(c),
        (t = re(a, 'path', { d: !0 })),
        h(t).forEach(c),
        a.forEach(c),
        this.h();
    },
    h() {
      u(
        s,
        'd',
        'M8 1.44c2.137 0 2.39.01 3.231.048.781.034 1.203.165 1.485.274.372.145.64.32.918.598.281.281.453.546.6.919.11.281.24.706.275 1.484.037.844.047 1.097.047 3.232 0 2.134-.01 2.39-.047 3.231-.034.781-.165 1.203-.275 1.484a2.47 2.47 0 0 1-.597.919 2.51 2.51 0 0 1-.918.6c-.282.11-.707.24-1.485.275-.844.037-1.097.047-3.232.047-2.134 0-2.39-.01-3.231-.047-.781-.034-1.203-.165-1.484-.275a2.476 2.476 0 0 1-.92-.597 2.51 2.51 0 0 1-.6-.918c-.109-.282-.24-.707-.274-1.485-.038-.844-.048-1.097-.048-3.231 0-2.135.01-2.391.047-3.232.035-.781.166-1.203.276-1.485.143-.372.319-.64.597-.919.281-.281.546-.453.918-.6.282-.109.707-.24 1.485-.274C5.608 1.45 5.862 1.44 8 1.44ZM8 0C5.828 0 5.556.01 4.703.047c-.85.038-1.435.175-1.94.372a3.898 3.898 0 0 0-1.419.925c-.447.444-.719.89-.925 1.415C.222 3.27.085 3.85.047 4.7.01 5.556 0 5.828 0 8c0 2.172.01 2.444.047 3.297.038.85.175 1.434.372 1.94.206.528.478.976.925 1.419.444.444.89.719 1.415.922.51.197 1.091.335 1.941.372.853.038 1.125.047 3.297.047s2.444-.01 3.297-.047c.85-.037 1.434-.175 1.94-.372a3.903 3.903 0 0 0 1.416-.922c.444-.444.719-.89.922-1.415.197-.51.335-1.091.372-1.941.037-.853.047-1.125.047-3.297s-.01-2.444-.047-3.297c-.038-.85-.175-1.435-.372-1.94a3.753 3.753 0 0 0-.915-1.423A3.91 3.91 0 0 0 13.24.422c-.51-.197-1.09-.335-1.94-.372C10.444.008 10.171 0 8 0H8Z'
      ),
        u(
          t,
          'd',
          'M8 3.89a4.11 4.11 0 0 0 0 8.22 4.11 4.11 0 0 0 0-8.22Zm0 6.776a2.666 2.666 0 1 1 0-5.332 2.666 2.666 0 0 1 0 5.332Zm5.231-6.938a.96.96 0 1 1-1.919 0 .96.96 0 0 1 1.919 0Z'
        ),
        u(e, 'aria-hidden', 'true'),
        u(e, 'focusable', 'false'),
        u(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        u(e, 'viewBox', '0 0 16 16'),
        Ce(e, 'width', l[0] + 'px'),
        u(e, 'class', 'svelte-17648ki');
    },
    m(n, a) {
      L(n, e, a), p(e, s), p(e, t);
    },
    p(n, [a]) {
      a & 1 && Ce(e, 'width', n[0] + 'px');
    },
    i: z,
    o: z,
    d(n) {
      n && c(e);
    },
  };
}
function Ms(l, e, s) {
  let { width: t = 20 } = e;
  return (
    (l.$$set = (n) => {
      'width' in n && s(0, (t = n.width));
    }),
    [t]
  );
}
class Ds extends ue {
  constructor(e) {
    super(), pe(this, e, Ms, Vs, fe, { width: 0 });
  }
}
function Bs(l) {
  let e, s;
  return {
    c() {
      (e = le('svg')), (s = le('path')), this.h();
    },
    l(t) {
      e = re(t, 'svg', {
        'aria-hidden': !0,
        focusable: !0,
        xmlns: !0,
        viewBox: !0,
        style: !0,
        class: !0,
      });
      var n = h(e);
      (s = re(n, 'path', { d: !0 })), h(s).forEach(c), n.forEach(c), this.h();
    },
    h() {
      u(
        s,
        'd',
        'M19.031 0c1.034 0 1.888.807 1.964 1.822L21 1.97V19.03a1.975 1.975 0 0 1-1.822 1.964L19.03 21H1.97a1.975 1.975 0 0 1-1.964-1.822L0 19.03V1.97C0 .935.807.08 1.822.005L1.97 0H19.03ZM6.3 7.875H3.15v10.063H6.3V7.874Zm7.875-.175c-1.575 0-2.538.788-2.975 1.575v-1.4H8.225v10.063h3.15V12.95c0-1.313.175-2.537 1.838-2.537 1.575 0 1.575 1.487 1.575 2.624v4.9h3.15v-5.425c0-2.712-.613-4.812-3.763-4.812ZM4.637 2.8c-1.05 0-1.837.875-1.837 1.838 0 1.05.875 1.837 1.838 1.837 1.05 0 1.837-.787 1.837-1.837 0-1.05-.875-1.838-1.837-1.838Z'
      ),
        u(e, 'aria-hidden', 'true'),
        u(e, 'focusable', 'false'),
        u(e, 'xmlns', 'http://www.w3.org/2000/svg'),
        u(e, 'viewBox', '0 0 21 21'),
        Ce(e, 'width', l[0] + 'px'),
        u(e, 'class', 'svelte-17648ki');
    },
    m(t, n) {
      L(t, e, n), p(e, s);
    },
    p(t, [n]) {
      n & 1 && Ce(e, 'width', t[0] + 'px');
    },
    i: z,
    o: z,
    d(t) {
      t && c(e);
    },
  };
}
function Hs(l, e, s) {
  let { width: t = 20 } = e;
  return (
    (l.$$set = (n) => {
      'width' in n && s(0, (t = n.width));
    }),
    [t]
  );
}
class Os extends ue {
  constructor(e) {
    super(), pe(this, e, Hs, Bs, fe, { width: 0 });
  }
}
function St(l, e, s) {
  const t = l.slice();
  return (t[2] = e[s]), t;
}
function At(l) {
  let e,
    s,
    t,
    n,
    a,
    i,
    r,
    o = l[0].company_description + '',
    f,
    m,
    d,
    $,
    v,
    y,
    S,
    B,
    R,
    W = l[0].social_links,
    b = [];
  for (let w = 0; w < W.length; w += 1) b[w] = Tt(St(l, W, w));
  const j = (w) =>
    O(b[w], 1, 1, () => {
      b[w] = null;
    });
  return {
    c() {
      (e = _('section')),
        (s = _('div')),
        (t = _('article')),
        (n = _('h2')),
        (a = M('Information you can trust')),
        (i = A()),
        (r = _('p')),
        (f = M(o)),
        (m = A()),
        (d = _('div')),
        ($ = _('h2')),
        (v = M('Follow Us')),
        (y = A()),
        (S = _('div')),
        (B = _('ul'));
      for (let w = 0; w < b.length; w += 1) b[w].c();
      this.h();
    },
    l(w) {
      e = g(w, 'SECTION', { class: !0 });
      var F = h(e);
      s = g(F, 'DIV', { class: !0 });
      var H = h(s);
      t = g(H, 'ARTICLE', { class: !0 });
      var P = h(t);
      n = g(P, 'H2', { class: !0 });
      var q = h(n);
      (a = D(q, 'Information you can trust')),
        q.forEach(c),
        (i = T(P)),
        (r = g(P, 'P', { class: !0 }));
      var te = h(r);
      (f = D(te, o)),
        te.forEach(c),
        P.forEach(c),
        (m = T(H)),
        (d = g(H, 'DIV', { class: !0 }));
      var Z = h(d);
      $ = g(Z, 'H2', { class: !0 });
      var N = h($);
      (v = D(N, 'Follow Us')), N.forEach(c), (y = T(Z)), (S = g(Z, 'DIV', {}));
      var se = h(S);
      B = g(se, 'UL', { class: !0 });
      var C = h(B);
      for (let ce = 0; ce < b.length; ce += 1) b[ce].l(C);
      C.forEach(c),
        se.forEach(c),
        Z.forEach(c),
        H.forEach(c),
        F.forEach(c),
        this.h();
    },
    h() {
      u(n, 'class', 'svelte-eccq59'),
        u(r, 'class', 'svelte-eccq59'),
        u(t, 'class', 'company-info svelte-eccq59'),
        u($, 'class', 'svelte-eccq59'),
        u(B, 'class', 'links svelte-eccq59'),
        u(d, 'class', 'social svelte-eccq59'),
        u(s, 'class', 'content-container svelte-eccq59'),
        u(e, 'class', 'company svelte-eccq59');
    },
    m(w, F) {
      L(w, e, F),
        p(e, s),
        p(s, t),
        p(t, n),
        p(n, a),
        p(t, i),
        p(t, r),
        p(r, f),
        p(s, m),
        p(s, d),
        p(d, $),
        p($, v),
        p(d, y),
        p(d, S),
        p(S, B);
      for (let H = 0; H < b.length; H += 1) b[H].m(B, null);
      R = !0;
    },
    p(w, F) {
      if (
        ((!R || F & 1) && o !== (o = w[0].company_description + '') && we(f, o),
        F & 3)
      ) {
        W = w[0].social_links;
        let H;
        for (H = 0; H < W.length; H += 1) {
          const P = St(w, W, H);
          b[H]
            ? (b[H].p(P, F), x(b[H], 1))
            : ((b[H] = Tt(P)), b[H].c(), x(b[H], 1), b[H].m(B, null));
        }
        for (_e(), H = W.length; H < b.length; H += 1) j(H);
        ge();
      }
    },
    i(w) {
      if (!R) {
        for (let F = 0; F < W.length; F += 1) x(b[F]);
        R = !0;
      }
    },
    o(w) {
      b = b.filter(Boolean);
      for (let F = 0; F < b.length; F += 1) O(b[F]);
      R = !1;
    },
    d(w) {
      w && c(e), $e(b, w);
    },
  };
}
function Tt(l) {
  let e, s, t, n, a, i, r, o;
  var f = l[1][l[2].type];
  function m(d) {
    return {};
  }
  return (
    f && (a = new f(m())),
    {
      c() {
        (e = _('li')),
          (s = _('a')),
          (t = _('div')),
          (n = _('div')),
          a && X(a.$$.fragment),
          (r = A()),
          this.h();
      },
      l(d) {
        e = g(d, 'LI', { class: !0 });
        var $ = h(e);
        s = g($, 'A', { href: !0 });
        var v = h(s);
        t = g(v, 'DIV', { class: !0 });
        var y = h(t);
        n = g(y, 'DIV', { class: !0 });
        var S = h(n);
        a && ae(a.$$.fragment, S),
          S.forEach(c),
          y.forEach(c),
          v.forEach(c),
          (r = T($)),
          $.forEach(c),
          this.h();
      },
      h() {
        u(n, 'class', 'social svelte-eccq59'),
          u(t, 'class', 'button svelte-eccq59'),
          u(s, 'href', (i = ee(l[2].url))),
          u(e, 'class', 'social-links symbol svelte-eccq59');
      },
      m(d, $) {
        L(d, e, $),
          p(e, s),
          p(s, t),
          p(t, n),
          a && Y(a, n, null),
          p(e, r),
          (o = !0);
      },
      p(d, $) {
        if (f !== (f = d[1][d[2].type])) {
          if (a) {
            _e();
            const v = a;
            O(v.$$.fragment, 1, 0, () => {
              Q(v, 1);
            }),
              ge();
          }
          f
            ? ((a = new f(m())),
              X(a.$$.fragment),
              x(a.$$.fragment, 1),
              Y(a, n, null))
            : (a = null);
        }
        (!o || ($ & 1 && i !== (i = ee(d[2].url)))) && u(s, 'href', i);
      },
      i(d) {
        o || (a && x(a.$$.fragment, d), (o = !0));
      },
      o(d) {
        a && O(a.$$.fragment, d), (o = !1);
      },
      d(d) {
        d && c(e), a && Q(a);
      },
    }
  );
}
function Ns(l) {
  let e,
    s,
    t = l[0].social_links && At(l);
  return {
    c() {
      t && t.c(), (e = ve());
    },
    l(n) {
      t && t.l(n), (e = ve());
    },
    m(n, a) {
      t && t.m(n, a), L(n, e, a), (s = !0);
    },
    p(n, [a]) {
      n[0].social_links
        ? t
          ? (t.p(n, a), a & 1 && x(t, 1))
          : ((t = At(n)), t.c(), x(t, 1), t.m(e.parentNode, e))
        : t &&
          (_e(),
          O(t, 1, 1, () => {
            t = null;
          }),
          ge());
    },
    i(n) {
      s || (x(t), (s = !0));
    },
    o(n) {
      O(t), (s = !1);
    },
    d(n) {
      t && t.d(n), n && c(e);
    },
  };
}
function Zs(l, e, s) {
  const t = {
    twitter: Ls,
    facebook: Rs,
    instagram: Ds,
    youtube: Ss,
    linkedin: Os,
  };
  let { links: n = {} } = e;
  return (
    (l.$$set = (a) => {
      'links' in a && s(0, (n = a.links));
    }),
    [n, t]
  );
}
class Fs extends ue {
  constructor(e) {
    super(), pe(this, e, Zs, Ns, fe, { links: 0 });
  }
}
function Rt(l, e, s) {
  const t = l.slice();
  return (t[1] = e[s]), t;
}
function Vt(l, e, s) {
  const t = l.slice();
  return (t[1] = e[s]), t;
}
function Mt(l) {
  let e,
    s,
    t,
    n,
    a,
    i,
    r,
    o,
    f,
    m,
    d,
    $,
    v,
    y,
    S,
    B,
    R,
    W = l[0].copyright_year + '',
    b,
    j,
    w,
    F,
    H,
    P = l[0].ad_links,
    q = [];
  for (let N = 0; N < P.length; N += 1) q[N] = Dt(Vt(l, P, N));
  let te = l[0].misc_links.filter(Ht),
    Z = [];
  for (let N = 0; N < te.length; N += 1) Z[N] = Bt(Rt(l, te, N));
  return {
    c() {
      (e = _('section')), (s = _('div')), (t = _('section')), (n = _('ul'));
      for (let N = 0; N < q.length; N += 1) q[N].c();
      (a = A()),
        (i = _('p')),
        (r = M('All quotes delayed a minimum of 15 minutes. ')),
        (o = _('a')),
        (f = M('See here for a complete list of exchanges and delays')),
        (d = M('.')),
        ($ = A()),
        (v = _('section')),
        (y = _('ul'));
      for (let N = 0; N < Z.length; N += 1) Z[N].c();
      (S = A()),
        (B = _('p')),
        (R = M('\xA9 ')),
        (b = M(W)),
        (j = M(` Reuters.
        `)),
        (w = _('a')),
        (F = M('All rights reserved')),
        this.h();
    },
    l(N) {
      e = g(N, 'SECTION', { class: !0 });
      var se = h(e);
      s = g(se, 'DIV', { class: !0 });
      var C = h(s);
      t = g(C, 'SECTION', { class: !0 });
      var ce = h(t);
      n = g(ce, 'UL', { class: !0 });
      var ke = h(n);
      for (let E = 0; E < q.length; E += 1) q[E].l(ke);
      ke.forEach(c), ce.forEach(c), (a = T(C)), (i = g(C, 'P', { class: !0 }));
      var U = h(i);
      (r = D(U, 'All quotes delayed a minimum of 15 minutes. ')),
        (o = g(U, 'A', { href: !0, class: !0 }));
      var G = h(o);
      (f = D(G, 'See here for a complete list of exchanges and delays')),
        G.forEach(c),
        (d = D(U, '.')),
        U.forEach(c),
        ($ = T(C)),
        (v = g(C, 'SECTION', { class: !0 }));
      var he = h(v);
      y = g(he, 'UL', { class: !0 });
      var K = h(y);
      for (let E = 0; E < Z.length; E += 1) Z[E].l(K);
      K.forEach(c), he.forEach(c), (S = T(C)), (B = g(C, 'P', { class: !0 }));
      var de = h(B);
      (R = D(de, '\xA9 ')),
        (b = D(de, W)),
        (j = D(
          de,
          ` Reuters.
        `
        )),
        (w = g(de, 'A', { href: !0, class: !0 }));
      var J = h(w);
      (F = D(J, 'All rights reserved')),
        J.forEach(c),
        de.forEach(c),
        C.forEach(c),
        se.forEach(c),
        this.h();
    },
    h() {
      u(n, 'class', 'link-group svelte-1wk8lrk'),
        u(t, 'class', 'ad-links svelte-1wk8lrk'),
        u(o, 'href', (m = ee(l[0].disclaimer_link))),
        u(o, 'class', 'svelte-1wk8lrk'),
        u(i, 'class', 'disclaimer svelte-1wk8lrk'),
        u(y, 'class', 'link-group svelte-1wk8lrk'),
        u(v, 'class', 'misc-links svelte-1wk8lrk'),
        u(w, 'href', (H = ee(l[0].copyright_link))),
        u(w, 'class', 'svelte-1wk8lrk'),
        u(B, 'class', 'copyright svelte-1wk8lrk'),
        u(s, 'class', 'content-container svelte-1wk8lrk'),
        u(e, 'class', 'legal svelte-1wk8lrk');
    },
    m(N, se) {
      L(N, e, se), p(e, s), p(s, t), p(t, n);
      for (let C = 0; C < q.length; C += 1) q[C].m(n, null);
      p(s, a),
        p(s, i),
        p(i, r),
        p(i, o),
        p(o, f),
        p(i, d),
        p(s, $),
        p(s, v),
        p(v, y);
      for (let C = 0; C < Z.length; C += 1) Z[C].m(y, null);
      p(s, S), p(s, B), p(B, R), p(B, b), p(B, j), p(B, w), p(w, F);
    },
    p(N, se) {
      if (se & 1) {
        P = N[0].ad_links;
        let C;
        for (C = 0; C < P.length; C += 1) {
          const ce = Vt(N, P, C);
          q[C] ? q[C].p(ce, se) : ((q[C] = Dt(ce)), q[C].c(), q[C].m(n, null));
        }
        for (; C < q.length; C += 1) q[C].d(1);
        q.length = P.length;
      }
      if (
        (se & 1 && m !== (m = ee(N[0].disclaimer_link)) && u(o, 'href', m),
        se & 1)
      ) {
        te = N[0].misc_links.filter(Ht);
        let C;
        for (C = 0; C < te.length; C += 1) {
          const ce = Rt(N, te, C);
          Z[C] ? Z[C].p(ce, se) : ((Z[C] = Bt(ce)), Z[C].c(), Z[C].m(y, null));
        }
        for (; C < Z.length; C += 1) Z[C].d(1);
        Z.length = te.length;
      }
      se & 1 && W !== (W = N[0].copyright_year + '') && we(b, W),
        se & 1 && H !== (H = ee(N[0].copyright_link)) && u(w, 'href', H);
    },
    d(N) {
      N && c(e), $e(q, N), $e(Z, N);
    },
  };
}
function Dt(l) {
  let e,
    s,
    t = l[1].text + '',
    n,
    a,
    i;
  return {
    c() {
      (e = _('li')), (s = _('a')), (n = M(t)), (i = A()), this.h();
    },
    l(r) {
      e = g(r, 'LI', { class: !0 });
      var o = h(e);
      s = g(o, 'A', { href: !0, class: !0 });
      var f = h(s);
      (n = D(f, t)), f.forEach(c), (i = T(o)), o.forEach(c), this.h();
    },
    h() {
      u(s, 'href', (a = ee(l[1].url))),
        u(s, 'class', 'svelte-1wk8lrk'),
        u(e, 'class', 'svelte-1wk8lrk');
    },
    m(r, o) {
      L(r, e, o), p(e, s), p(s, n), p(e, i);
    },
    p(r, o) {
      o & 1 && t !== (t = r[1].text + '') && we(n, t),
        o & 1 && a !== (a = ee(r[1].url)) && u(s, 'href', a);
    },
    d(r) {
      r && c(e);
    },
  };
}
function Bt(l) {
  let e,
    s,
    t = l[1].text + '',
    n,
    a,
    i;
  return {
    c() {
      (e = _('li')), (s = _('a')), (n = M(t)), (i = A()), this.h();
    },
    l(r) {
      e = g(r, 'LI', { class: !0 });
      var o = h(e);
      s = g(o, 'A', { href: !0, class: !0 });
      var f = h(s);
      (n = D(f, t)), f.forEach(c), (i = T(o)), o.forEach(c), this.h();
    },
    h() {
      u(s, 'href', (a = ee(l[1].url))),
        u(s, 'class', 'svelte-1wk8lrk'),
        u(e, 'class', 'svelte-1wk8lrk');
    },
    m(r, o) {
      L(r, e, o), p(e, s), p(s, n), p(e, i);
    },
    p(r, o) {
      o & 1 && t !== (t = r[1].text + '') && we(n, t),
        o & 1 && a !== (a = ee(r[1].url)) && u(s, 'href', a);
    },
    d(r) {
      r && c(e);
    },
  };
}
function Ps(l) {
  let e,
    s = l[0].ad_links && Mt(l);
  return {
    c() {
      s && s.c(), (e = ve());
    },
    l(t) {
      s && s.l(t), (e = ve());
    },
    m(t, n) {
      s && s.m(t, n), L(t, e, n);
    },
    p(t, [n]) {
      t[0].ad_links
        ? s
          ? s.p(t, n)
          : ((s = Mt(t)), s.c(), s.m(e.parentNode, e))
        : s && (s.d(1), (s = null));
    },
    i: z,
    o: z,
    d(t) {
      s && s.d(t), t && c(e);
    },
  };
}
const Ht = (l) => !l.self;
function js(l, e, s) {
  let { links: t = {} } = e;
  return (
    (l.$$set = (n) => {
      'links' in n && s(0, (t = n.links));
    }),
    [t]
  );
}
class qs extends ue {
  constructor(e) {
    super(), pe(this, e, js, Ps, fe, { links: 0 });
  }
}
const Us = (l) => ({ intersecting: l & 1 }),
  Ot = (l) => ({ intersecting: l[0] });
function Gs(l) {
  let e, s;
  const t = l[8].default,
    n = ls(t, l, l[7], Ot);
  return {
    c() {
      (e = _('div')), n && n.c();
    },
    l(a) {
      e = g(a, 'DIV', {});
      var i = h(e);
      n && n.l(i), i.forEach(c);
    },
    m(a, i) {
      L(a, e, i), n && n.m(e, null), l[9](e), (s = !0);
    },
    p(a, [i]) {
      n &&
        n.p &&
        (!s || i & 129) &&
        rs(n, t, a, a[7], s ? is(t, a[7], i, Us) : os(a[7]), Ot);
    },
    i(a) {
      s || (x(n, a), (s = !0));
    },
    o(a) {
      O(n, a), (s = !1);
    },
    d(a) {
      a && c(e), n && n.d(a), l[9](null);
    },
  };
}
function zs(l, e, s) {
  let { $$slots: t = {}, $$scope: n } = e,
    { once: a = !1 } = e,
    { top: i = 0 } = e,
    { bottom: r = 0 } = e,
    { left: o = 0 } = e,
    { right: f = 0 } = e,
    m = !1,
    d;
  qt(() => {
    if (typeof IntersectionObserver != 'undefined') {
      const y = `${r}px ${o}px ${i}px ${f}px`,
        S = new IntersectionObserver(
          (B) => {
            s(0, (m = B[0].isIntersecting)), m && a && S.unobserve(d);
          },
          { rootMargin: y }
        );
      return S.observe(d), () => S.unobserve(d);
    }
    function v() {
      const y = d.getBoundingClientRect();
      s(
        0,
        (m =
          y.bottom + r > 0 &&
          y.right + f > 0 &&
          y.top - i < window.innerHeight &&
          y.left - o < window.innerWidth)
      ),
        m && a && window.removeEventListener('scroll', v);
    }
    return (
      window.addEventListener('scroll', v),
      () => window.removeEventListener('scroll', v)
    );
  });
  function $(v) {
    cs[v ? 'unshift' : 'push'](() => {
      (d = v), s(1, d);
    });
  }
  return (
    (l.$$set = (v) => {
      'once' in v && s(2, (a = v.once)),
        'top' in v && s(3, (i = v.top)),
        'bottom' in v && s(4, (r = v.bottom)),
        'left' in v && s(5, (o = v.left)),
        'right' in v && s(6, (f = v.right)),
        '$$scope' in v && s(7, (n = v.$$scope));
    }),
    [m, d, a, i, r, o, f, n, t, $]
  );
}
class Ut extends ue {
  constructor(e) {
    super(),
      pe(this, e, zs, Gs, fe, {
        once: 2,
        top: 3,
        bottom: 4,
        left: 5,
        right: 6,
      });
  }
}
function Ws(l) {
  let e;
  return {
    c() {
      (e = _('div')), this.h();
    },
    l(s) {
      (e = g(s, 'DIV', { class: !0 })), h(e).forEach(c), this.h();
    },
    h() {
      u(e, 'class', 'image svelte-1sz614n');
    },
    m(s, t) {
      L(s, e, t);
    },
    p: z,
    d(s) {
      s && c(e);
    },
  };
}
function Ks(l) {
  let e, s;
  return {
    c() {
      (e = _('div')), this.h();
    },
    l(t) {
      (e = g(t, 'DIV', { class: !0, style: !0 })), h(e).forEach(c), this.h();
    },
    h() {
      u(e, 'class', 'image svelte-1sz614n'),
        u(e, 'style', (s = `background-image: url(${l[1]});`));
    },
    m(t, n) {
      L(t, e, n);
    },
    p(t, n) {
      n & 2 &&
        s !== (s = `background-image: url(${t[1]});`) &&
        u(e, 'style', s);
    },
    d(t) {
      t && c(e);
    },
  };
}
function Js(l) {
  let e;
  function s(a, i) {
    return a[4] ? Ks : Ws;
  }
  let t = s(l),
    n = t(l);
  return {
    c() {
      n.c(), (e = ve());
    },
    l(a) {
      n.l(a), (e = ve());
    },
    m(a, i) {
      n.m(a, i), L(a, e, i);
    },
    p(a, i) {
      t === (t = s(a)) && n
        ? n.p(a, i)
        : (n.d(1), (n = t(a)), n && (n.c(), n.m(e.parentNode, e)));
    },
    d(a) {
      n.d(a), a && c(e);
    },
  };
}
function Qs(l) {
  let e, s, t, n, a, i, r, o;
  return (
    (t = new Ut({
      props: {
        top: 600,
        once: !0,
        $$slots: {
          default: [
            Js,
            ({ intersecting: f }) => ({ 4: f }),
            ({ intersecting: f }) => (f ? 16 : 0),
          ],
        },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        (e = _('div')),
          (s = _('a')),
          X(t.$$.fragment),
          (n = A()),
          (a = _('p')),
          (i = M(l[2])),
          this.h();
      },
      l(f) {
        e = g(f, 'DIV', { class: !0, title: !0 });
        var m = h(e);
        s = g(m, 'A', { href: !0, class: !0 });
        var d = h(s);
        ae(t.$$.fragment, d), (n = T(d)), (a = g(d, 'P', { class: !0 }));
        var $ = h(a);
        (i = D($, l[2])), $.forEach(c), d.forEach(c), m.forEach(c), this.h();
      },
      h() {
        u(a, 'class', 'svelte-1sz614n'),
          u(s, 'href', (r = l[0].replace('index.html', ''))),
          u(s, 'class', 'svelte-1sz614n'),
          u(e, 'class', 'referral svelte-1sz614n'),
          u(e, 'title', l[3]);
      },
      m(f, m) {
        L(f, e, m), p(e, s), Y(t, s, null), p(s, n), p(s, a), p(a, i), (o = !0);
      },
      p(f, [m]) {
        const d = {};
        m & 50 && (d.$$scope = { dirty: m, ctx: f }),
          t.$set(d),
          (!o || m & 4) && we(i, f[2]),
          (!o || (m & 1 && r !== (r = f[0].replace('index.html', '')))) &&
            u(s, 'href', r),
          (!o || m & 8) && u(e, 'title', f[3]);
      },
      i(f) {
        o || (x(t.$$.fragment, f), (o = !0));
      },
      o(f) {
        O(t.$$.fragment, f), (o = !1);
      },
      d(f) {
        f && c(e), Q(t);
      },
    }
  );
}
function Xs(l, e, s) {
  let { url: t } = e,
    { image: n } = e,
    { title: a } = e,
    { description: i } = e;
  return (
    (l.$$set = (r) => {
      'url' in r && s(0, (t = r.url)),
        'image' in r && s(1, (n = r.image)),
        'title' in r && s(2, (a = r.title)),
        'description' in r && s(3, (i = r.description));
    }),
    [t, n, a, i]
  );
}
class Ys extends ue {
  constructor(e) {
    super(),
      pe(this, e, Xs, Qs, fe, { url: 0, image: 1, title: 2, description: 3 });
  }
}
function Nt(l, e, s) {
  const t = l.slice();
  return (t[3] = e[s]), t;
}
function Zt(l) {
  let e,
    s,
    t = l[0],
    n = [];
  for (let i = 0; i < t.length; i += 1) n[i] = Ft(Nt(l, t, i));
  const a = (i) =>
    O(n[i], 1, 1, () => {
      n[i] = null;
    });
  return {
    c() {
      e = _('nav');
      for (let i = 0; i < n.length; i += 1) n[i].c();
      this.h();
    },
    l(i) {
      e = g(i, 'NAV', { class: !0 });
      var r = h(e);
      for (let o = 0; o < n.length; o += 1) n[o].l(r);
      r.forEach(c), this.h();
    },
    h() {
      u(e, 'class', 'referral-rail row svelte-5ls690');
    },
    m(i, r) {
      L(i, e, r);
      for (let o = 0; o < n.length; o += 1) n[o].m(e, null);
      s = !0;
    },
    p(i, r) {
      if (r & 1) {
        t = i[0];
        let o;
        for (o = 0; o < t.length; o += 1) {
          const f = Nt(i, t, o);
          n[o]
            ? (n[o].p(f, r), x(n[o], 1))
            : ((n[o] = Ft(f)), n[o].c(), x(n[o], 1), n[o].m(e, null));
        }
        for (_e(), o = t.length; o < n.length; o += 1) a(o);
        ge();
      }
    },
    i(i) {
      if (!s) {
        for (let r = 0; r < t.length; r += 1) x(n[r]);
        s = !0;
      }
    },
    o(i) {
      n = n.filter(Boolean);
      for (let r = 0; r < n.length; r += 1) O(n[r]);
      s = !1;
    },
    d(i) {
      i && c(e), $e(n, i);
    },
  };
}
function Ft(l) {
  let e, s;
  const t = [l[3]];
  let n = {};
  for (let a = 0; a < t.length; a += 1) n = fs(n, t[a]);
  return (
    (e = new Ys({ props: n })),
    {
      c() {
        X(e.$$.fragment);
      },
      l(a) {
        ae(e.$$.fragment, a);
      },
      m(a, i) {
        Y(e, a, i), (s = !0);
      },
      p(a, i) {
        const r = i & 1 ? us(t, [ps(a[3])]) : {};
        e.$set(r);
      },
      i(a) {
        s || (x(e.$$.fragment, a), (s = !0));
      },
      o(a) {
        O(e.$$.fragment, a), (s = !1);
      },
      d(a) {
        Q(e, a);
      },
    }
  );
}
function en(l) {
  let e,
    s,
    t = l[0] && Zt(l);
  return {
    c() {
      t && t.c(), (e = ve());
    },
    l(n) {
      t && t.l(n), (e = ve());
    },
    m(n, a) {
      t && t.m(n, a), L(n, e, a), (s = !0);
    },
    p(n, [a]) {
      n[0]
        ? t
          ? (t.p(n, a), a & 1 && x(t, 1))
          : ((t = Zt(n)), t.c(), x(t, 1), t.m(e.parentNode, e))
        : t &&
          (_e(),
          O(t, 1, 1, () => {
            t = null;
          }),
          ge());
    },
    i(n) {
      s || (x(t), (s = !0));
    },
    o(n) {
      O(t), (s = !1);
    },
    d(n) {
      t && t.d(n), n && c(e);
    },
  };
}
function tn(l, e, s) {
  let t,
    { referrals: n = [] } = e,
    a;
  return (
    qt(() => {
      if (t.length === 4) {
        s(0, (a = t));
        return;
      }
      fetch(
        'https://graphics.thomsonreuters.com/data/reuters-graphics/homepage/graphics.json'
      )
        .then((i) => i.json())
        .then((i) => {
          const r = i
            .filter(({ canonical: o }) => {
              const f = window.location.pathname
                .replace(/\/index\.html$/, '')
                .replace(/\/$/, '');
              return f ? !o.includes(f) : !0;
            })
            .slice(0, 4)
            .map(({ url: o, image: f, title: m, description: d }) => ({
              url: o,
              image: f,
              title: m,
              description: d,
            }));
          s(0, (a = [...t, ...r].slice(0, 4)));
        });
    }),
    (l.$$set = (i) => {
      'referrals' in i && s(1, (n = i.referrals));
    }),
    (l.$$.update = () => {
      l.$$.dirty & 2 &&
        (t = n.filter((i) => i.url && i.title && i.image).slice(0, 4));
    }),
    [a, n]
  );
}
class sn extends ue {
  constructor(e) {
    super(), pe(this, e, tn, en, fe, { referrals: 1 });
  }
}
function Pt(l) {
  let e,
    s,
    t,
    n,
    a,
    i,
    r = nn(l);
  return {
    c() {
      (e = _('section')),
        (s = _('h2')),
        (t = _('a')),
        (n = M('More from Reuters Graphics')),
        (a = A()),
        r && r.c(),
        this.h();
    },
    l(o) {
      e = g(o, 'SECTION', { class: !0 });
      var f = h(e);
      s = g(f, 'H2', { class: !0 });
      var m = h(s);
      t = g(m, 'A', { href: !0, class: !0 });
      var d = h(t);
      (n = D(d, 'More from Reuters Graphics')),
        d.forEach(c),
        m.forEach(c),
        (a = T(f)),
        r && r.l(f),
        f.forEach(c),
        this.h();
    },
    h() {
      u(t, 'href', 'https://graphics.reuters.com/'),
        u(t, 'class', 'svelte-h53uyh'),
        u(s, 'class', 'svelte-h53uyh'),
        u(e, 'class', 'referrals svelte-h53uyh');
    },
    m(o, f) {
      L(o, e, f),
        p(e, s),
        p(s, t),
        p(t, n),
        p(e, a),
        r && r.m(e, null),
        (i = !0);
    },
    p(o, f) {
      r.p(o, f);
    },
    i(o) {
      i || (x(r), (i = !0));
    },
    o(o) {
      O(r), (i = !1);
    },
    d(o) {
      o && c(e), r && r.d();
    },
  };
}
function nn(l) {
  let e, s;
  return (
    (e = new sn({ props: { referrals: l[0] } })),
    {
      c() {
        X(e.$$.fragment);
      },
      l(t) {
        ae(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (s = !0);
      },
      p(t, n) {
        const a = {};
        n & 1 && (a.referrals = t[0]), e.$set(a);
      },
      i(t) {
        s || (x(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        O(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        Q(e, t);
      },
    }
  );
}
function an(l) {
  let e,
    s,
    t = l[1] && Pt(l);
  return {
    c() {
      t && t.c(), (e = ve());
    },
    l(n) {
      t && t.l(n), (e = ve());
    },
    m(n, a) {
      t && t.m(n, a), L(n, e, a), (s = !0);
    },
    p(n, a) {
      n[1]
        ? t
          ? (t.p(n, a), a & 2 && x(t, 1))
          : ((t = Pt(n)), t.c(), x(t, 1), t.m(e.parentNode, e))
        : t &&
          (_e(),
          O(t, 1, 1, () => {
            t = null;
          }),
          ge());
    },
    i(n) {
      s || (x(t), (s = !0));
    },
    o(n) {
      O(t), (s = !1);
    },
    d(n) {
      t && t.d(n), n && c(e);
    },
  };
}
function ln(l) {
  let e, s;
  return (
    (e = new Ut({
      props: {
        top: 2400,
        once: !0,
        $$slots: {
          default: [
            an,
            ({ intersecting: t }) => ({ 1: t }),
            ({ intersecting: t }) => (t ? 2 : 0),
          ],
        },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        X(e.$$.fragment);
      },
      l(t) {
        ae(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (s = !0);
      },
      p(t, [n]) {
        const a = {};
        n & 7 && (a.$$scope = { dirty: n, ctx: t }), e.$set(a);
      },
      i(t) {
        s || (x(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        O(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        Q(e, t);
      },
    }
  );
}
function rn(l, e, s) {
  let { referrals: t = [] } = e;
  return (
    (l.$$set = (n) => {
      'referrals' in n && s(0, (t = n.referrals));
    }),
    [t]
  );
}
class on extends ue {
  constructor(e) {
    super(), pe(this, e, rn, ln, fe, { referrals: 0 });
  }
}
var Xe = [
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
function cn(l) {
  let e, s, t, n, a, i, r, o, f, m;
  return (
    (t = new on({ props: { referrals: l[0] } })),
    (a = new Es({ props: { links: Xe[0] } })),
    (r = new Fs({ props: { links: Xe[0] } })),
    (f = new qs({ props: { links: Xe[0] } })),
    {
      c() {
        (e = _('footer')),
          (s = _('div')),
          X(t.$$.fragment),
          (n = A()),
          X(a.$$.fragment),
          (i = A()),
          X(r.$$.fragment),
          (o = A()),
          X(f.$$.fragment),
          this.h();
      },
      l(d) {
        e = g(d, 'FOOTER', { style: !0, class: !0 });
        var $ = h(e);
        s = g($, 'DIV', { class: !0 });
        var v = h(s);
        ae(t.$$.fragment, v),
          (n = T(v)),
          ae(a.$$.fragment, v),
          (i = T(v)),
          ae(r.$$.fragment, v),
          (o = T(v)),
          ae(f.$$.fragment, v),
          v.forEach(c),
          $.forEach(c),
          this.h();
      },
      h() {
        u(s, 'class', 'svelte-1w89kaj'),
          u(
            e,
            'style',
            `
    --nav-background: ${l[1].background};
    --nav-primary: ${l[1].primary};
    --nav-rules: ${l[1].rules};
  `
          ),
          u(e, 'class', 'svelte-1w89kaj');
      },
      m(d, $) {
        L(d, e, $),
          p(e, s),
          Y(t, s, null),
          p(s, n),
          Y(a, s, null),
          p(s, i),
          Y(r, s, null),
          p(s, o),
          Y(f, s, null),
          (m = !0);
      },
      p(d, [$]) {
        const v = {};
        $ & 1 && (v.referrals = d[0]), t.$set(v);
      },
      i(d) {
        m ||
          (x(t.$$.fragment, d),
          x(a.$$.fragment, d),
          x(r.$$.fragment, d),
          x(f.$$.fragment, d),
          (m = !0));
      },
      o(d) {
        O(t.$$.fragment, d),
          O(a.$$.fragment, d),
          O(r.$$.fragment, d),
          O(f.$$.fragment, d),
          (m = !1);
      },
      d(d) {
        d && c(e), Q(t), Q(a), Q(r), Q(f);
      },
    }
  );
}
const Ye = {
  default: { background: '#fff', primary: '#404040', rules: '#d0d0d0' },
  dark: { background: '#333', primary: '#eee', rules: '#999' },
};
function un(l, e, s) {
  let { theme: t = {} } = e,
    { referrals: n = [] } = e;
  const a = Ke(Ke({}, Ye.default), t);
  return (
    (l.$$set = (i) => {
      'theme' in i && s(2, (t = i.theme)),
        'referrals' in i && s(0, (n = i.referrals));
    }),
    [n, a, t]
  );
}
class Pe extends ue {
  constructor(e) {
    super(), pe(this, e, un, cn, fe, { theme: 2, referrals: 0 });
  }
}
function pn(l) {
  let e, s;
  return (
    (e = new Pe({})),
    {
      c() {
        X(e.$$.fragment);
      },
      l(t) {
        ae(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (s = !0);
      },
      i(t) {
        s || (x(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        O(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        Q(e, t);
      },
    }
  );
}
function fn(l) {
  let e, s;
  return (
    (e = new Pe({ props: { theme: Ye.dark } })),
    {
      c() {
        X(e.$$.fragment);
      },
      l(t) {
        ae(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (s = !0);
      },
      p: z,
      i(t) {
        s || (x(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        O(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        Q(e, t);
      },
    }
  );
}
function hn(l) {
  let e, s;
  return (
    (e = new Pe({
      props: {
        theme: ft(Ke({}, Ye.default), { background: '#e0d3b8', rules: '#aaa' }),
      },
    })),
    {
      c() {
        X(e.$$.fragment);
      },
      l(t) {
        ae(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (s = !0);
      },
      p: z,
      i(t) {
        s || (x(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        O(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        Q(e, t);
      },
    }
  );
}
function dn(l) {
  let e, s;
  return (
    (e = new Pe({ props: { referrals: l[0] } })),
    {
      c() {
        X(e.$$.fragment);
      },
      l(t) {
        ae(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (s = !0);
      },
      p: z,
      i(t) {
        s || (x(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        O(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        Q(e, t);
      },
    }
  );
}
function mn(l) {
  let e, s, t;
  return (
    (s = new Pe({})),
    {
      c() {
        (e = _('div')), X(s.$$.fragment), this.h();
      },
      l(n) {
        e = g(n, 'DIV', { id: !0 });
        var a = h(e);
        ae(s.$$.fragment, a), a.forEach(c), this.h();
      },
      h() {
        u(e, 'id', 'custom-image');
      },
      m(n, a) {
        L(n, e, a), Y(s, e, null), (t = !0);
      },
      p: z,
      i(n) {
        t || (x(s.$$.fragment, n), (t = !0));
      },
      o(n) {
        O(s.$$.fragment, n), (t = !1);
      },
      d(n) {
        n && c(e), Q(s);
      },
    }
  );
}
function kn(l) {
  let e,
    s,
    t,
    n,
    a,
    i,
    r,
    o,
    f,
    m,
    d,
    $,
    v,
    y,
    S,
    B,
    R,
    W,
    b,
    j,
    w,
    F = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteFooter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteFooter</span> <span class="token punctuation">/></span></span></code>`,
    H,
    P,
    q,
    te,
    Z,
    N,
    se,
    C,
    ce = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteFooter<span class="token punctuation">,</span> SiteFooterThemes <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteFooter</span> <span class="token attr-name">theme=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>SiteFooterThemes<span class="token punctuation">.</span>dark<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,
    ke,
    U,
    G,
    he,
    K,
    de,
    J,
    E,
    oe = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteFooter<span class="token punctuation">,</span> SiteFooterThemes <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteFooter</span> <span class="token attr-name">theme=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> <span class="token operator">...</span>SiteFooterThemes<span class="token punctuation">.</span>default<span class="token punctuation">,</span> <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#e0d3b8'</span><span class="token punctuation">,</span> <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token string">'#aaa'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>

// Customisable props
<span class="token language-javascript"><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token string">'#404040'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token string">'#d0d0d0'</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></span></code>`,
    ne,
    I,
    ie,
    Le,
    be,
    Se,
    Ee,
    Me,
    De,
    Ie,
    ye,
    je = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteFooter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  
  <span class="token keyword">const</span> customReferrals <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://graphics.reuters.com/world-coronavirus-tracker-and-maps/'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'COVID-19: the latest global statistics, charts and maps'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'Tracking the global coronavirus outbreak, updated daily'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">image</span><span class="token operator">:</span>
        <span class="token string">'https://graphics.thomsonreuters.com/cdn/2020/covid-global-tracker/share-cards/global/en/share.png'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://graphics.reuters.com/world-coronavirus-tracker-and-maps/regions/europe'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Coronavirus in Europe: the latest counts, charts and maps'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'Tracking the global coronavirus outbreak, updated daily'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">image</span><span class="token operator">:</span>
        <span class="token string">'https://graphics.thomsonreuters.com/cdn/2020/covid-global-tracker/share-cards/regions/en/europe.png'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteFooter</span> <span class="token attr-name">referrals="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>customReferrals<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>`,
    me,
    Ae,
    qe,
    Be,
    He,
    Je,
    Ue,
    Re,
    Gt = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteFooter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteFooter</span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">:global</span> <span class="token punctuation">&#123;</span>
    <span class="token selector">section.referrals</span> <span class="token punctuation">&#123;</span>
      <span class="token selector">div.image</span> <span class="token punctuation">&#123;</span>
        <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>80%<span class="token punctuation">)</span> <span class="token function">brightness</span><span class="token punctuation">(</span>70%<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,
    Ge,
    Te,
    ze;
  return (
    (P = new Fe({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [pn] },
        $$scope: { ctx: l },
      },
    })),
    (U = new Fe({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [fn] },
        $$scope: { ctx: l },
      },
    })),
    (I = new Fe({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [hn] },
        $$scope: { ctx: l },
      },
    })),
    (Ae = new Fe({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [dn] },
        $$scope: { ctx: l },
      },
    })),
    (Te = new Fe({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [mn] },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        (e = _('section')),
          (s = _('h2')),
          (t = M(jt)),
          (n = A()),
          (a = _('p')),
          (i = M(
            'Reuters dotcom site footer with graphics referrals, ported from '
          )),
          (r = _('a')),
          (o = M('Raptor UI components')),
          (f = M('.')),
          (m = A()),
          (d = _('section')),
          ($ = _('p')),
          (v = M('In the ')),
          (y = _('a')),
          (S = M('Graphics Kit')),
          (B = M(', you can find this component in ')),
          (R = _('code')),
          (W = M('pages/index.svelte')),
          (b = M(' in order to customise it for the default page.')),
          (j = A()),
          (w = _('pre')),
          (H = A()),
          X(P.$$.fragment),
          (q = A()),
          (te = _('section')),
          (Z = _('p')),
          (N = M('Change colours with exported themes.')),
          (se = A()),
          (C = _('pre')),
          (ke = A()),
          X(U.$$.fragment),
          (G = A()),
          (he = _('section')),
          (K = _('p')),
          (de = M('Customise a colour theme.')),
          (J = A()),
          (E = _('pre')),
          (ne = A()),
          X(I.$$.fragment),
          (ie = A()),
          (Le = _('section')),
          (be = _('p')),
          (Se = M('Pass up to four custom referrals to the ')),
          (Ee = _('code')),
          (Me = M('referrals')),
          (De = M(' prop.')),
          (Ie = A()),
          (ye = _('pre')),
          (me = A()),
          X(Ae.$$.fragment),
          (qe = A()),
          (Be = _('section')),
          (He = _('p')),
          (Je = M('Customise graphics referral image style.')),
          (Ue = A()),
          (Re = _('pre')),
          (Ge = A()),
          X(Te.$$.fragment),
          this.h();
      },
      l(k) {
        e = g(k, 'SECTION', {});
        var V = h(e);
        s = g(V, 'H2', {});
        var Oe = h(s);
        (t = D(Oe, jt)), Oe.forEach(c), (n = T(V)), (a = g(V, 'P', {}));
        var Ve = h(a);
        (i = D(
          Ve,
          'Reuters dotcom site footer with graphics referrals, ported from '
        )),
          (r = g(Ve, 'A', { href: !0, rel: !0 }));
        var Ne = h(r);
        (o = D(Ne, 'Raptor UI components')),
          Ne.forEach(c),
          (f = D(Ve, '.')),
          Ve.forEach(c),
          (m = T(V)),
          (d = g(V, 'SECTION', { class: !0 }));
        var Ze = h(d);
        $ = g(Ze, 'P', {});
        var xe = h($);
        (v = D(xe, 'In the ')), (y = g(xe, 'A', { href: !0, rel: !0 }));
        var et = h(y);
        (S = D(et, 'Graphics Kit')),
          et.forEach(c),
          (B = D(xe, ', you can find this component in ')),
          (R = g(xe, 'CODE', {}));
        var tt = h(R);
        (W = D(tt, 'pages/index.svelte')),
          tt.forEach(c),
          (b = D(xe, ' in order to customise it for the default page.')),
          xe.forEach(c),
          Ze.forEach(c),
          V.forEach(c),
          (j = T(k)),
          (w = g(k, 'PRE', { class: !0 }));
        var zt = h(w);
        zt.forEach(c),
          (H = T(k)),
          ae(P.$$.fragment, k),
          (q = T(k)),
          (te = g(k, 'SECTION', {}));
        var st = h(te);
        Z = g(st, 'P', {});
        var nt = h(Z);
        (N = D(nt, 'Change colours with exported themes.')),
          nt.forEach(c),
          st.forEach(c),
          (se = T(k)),
          (C = g(k, 'PRE', { class: !0 }));
        var Wt = h(C);
        Wt.forEach(c),
          (ke = T(k)),
          ae(U.$$.fragment, k),
          (G = T(k)),
          (he = g(k, 'SECTION', {}));
        var at = h(he);
        K = g(at, 'P', {});
        var lt = h(K);
        (de = D(lt, 'Customise a colour theme.')),
          lt.forEach(c),
          at.forEach(c),
          (J = T(k)),
          (E = g(k, 'PRE', { class: !0 }));
        var Kt = h(E);
        Kt.forEach(c),
          (ne = T(k)),
          ae(I.$$.fragment, k),
          (ie = T(k)),
          (Le = g(k, 'SECTION', {}));
        var rt = h(Le);
        be = g(rt, 'P', {});
        var We = h(be);
        (Se = D(We, 'Pass up to four custom referrals to the ')),
          (Ee = g(We, 'CODE', {}));
        var ot = h(Ee);
        (Me = D(ot, 'referrals')),
          ot.forEach(c),
          (De = D(We, ' prop.')),
          We.forEach(c),
          rt.forEach(c),
          (Ie = T(k)),
          (ye = g(k, 'PRE', { class: !0 }));
        var Jt = h(ye);
        Jt.forEach(c),
          (me = T(k)),
          ae(Ae.$$.fragment, k),
          (qe = T(k)),
          (Be = g(k, 'SECTION', {}));
        var it = h(Be);
        He = g(it, 'P', {});
        var ct = h(He);
        (Je = D(ct, 'Customise graphics referral image style.')),
          ct.forEach(c),
          it.forEach(c),
          (Ue = T(k)),
          (Re = g(k, 'PRE', { class: !0 }));
        var Qt = h(Re);
        Qt.forEach(c), (Ge = T(k)), ae(Te.$$.fragment, k), this.h();
      },
      h() {
        u(
          r,
          'href',
          'https://github.com/tr/rcom-arc_raptor-ui/tree/develop/packages/rcom-raptor-ui_common/src/components/site-footer'
        ),
          u(r, 'rel', 'nofollow'),
          u(
            y,
            'href',
            'https://github.com/reuters-graphics/bluprint_graphics-kit/blob/master/pages/index.svelte'
          ),
          u(y, 'rel', 'nofollow'),
          u(d, 'class', 'note'),
          u(w, 'class', 'language-svelte'),
          u(C, 'class', 'language-svelte'),
          u(E, 'class', 'language-svelte'),
          u(ye, 'class', 'language-svelte'),
          u(Re, 'class', 'language-svelte');
      },
      m(k, V) {
        L(k, e, V),
          p(e, s),
          p(s, t),
          p(e, n),
          p(e, a),
          p(a, i),
          p(a, r),
          p(r, o),
          p(a, f),
          p(e, m),
          p(e, d),
          p(d, $),
          p($, v),
          p($, y),
          p(y, S),
          p($, B),
          p($, R),
          p(R, W),
          p($, b),
          L(k, j, V),
          L(k, w, V),
          (w.innerHTML = F),
          L(k, H, V),
          Y(P, k, V),
          L(k, q, V),
          L(k, te, V),
          p(te, Z),
          p(Z, N),
          L(k, se, V),
          L(k, C, V),
          (C.innerHTML = ce),
          L(k, ke, V),
          Y(U, k, V),
          L(k, G, V),
          L(k, he, V),
          p(he, K),
          p(K, de),
          L(k, J, V),
          L(k, E, V),
          (E.innerHTML = oe),
          L(k, ne, V),
          Y(I, k, V),
          L(k, ie, V),
          L(k, Le, V),
          p(Le, be),
          p(be, Se),
          p(be, Ee),
          p(Ee, Me),
          p(be, De),
          L(k, Ie, V),
          L(k, ye, V),
          (ye.innerHTML = je),
          L(k, me, V),
          Y(Ae, k, V),
          L(k, qe, V),
          L(k, Be, V),
          p(Be, He),
          p(He, Je),
          L(k, Ue, V),
          L(k, Re, V),
          (Re.innerHTML = Gt),
          L(k, Ge, V),
          Y(Te, k, V),
          (ze = !0);
      },
      p(k, [V]) {
        const Oe = {};
        V & 2 && (Oe.$$scope = { dirty: V, ctx: k }), P.$set(Oe);
        const Ve = {};
        V & 2 && (Ve.$$scope = { dirty: V, ctx: k }), U.$set(Ve);
        const Ne = {};
        V & 2 && (Ne.$$scope = { dirty: V, ctx: k }), I.$set(Ne);
        const Ze = {};
        V & 2 && (Ze.$$scope = { dirty: V, ctx: k }), Ae.$set(Ze);
        const xe = {};
        V & 2 && (xe.$$scope = { dirty: V, ctx: k }), Te.$set(xe);
      },
      i(k) {
        ze ||
          (x(P.$$.fragment, k),
          x(U.$$.fragment, k),
          x(I.$$.fragment, k),
          x(Ae.$$.fragment, k),
          x(Te.$$.fragment, k),
          (ze = !0));
      },
      o(k) {
        O(P.$$.fragment, k),
          O(U.$$.fragment, k),
          O(I.$$.fragment, k),
          O(Ae.$$.fragment, k),
          O(Te.$$.fragment, k),
          (ze = !1);
      },
      d(k) {
        k && c(e),
          k && c(j),
          k && c(w),
          k && c(H),
          Q(P, k),
          k && c(q),
          k && c(te),
          k && c(se),
          k && c(C),
          k && c(ke),
          Q(U, k),
          k && c(G),
          k && c(he),
          k && c(J),
          k && c(E),
          k && c(ne),
          Q(I, k),
          k && c(ie),
          k && c(Le),
          k && c(Ie),
          k && c(ye),
          k && c(me),
          Q(Ae, k),
          k && c(qe),
          k && c(Be),
          k && c(Ue),
          k && c(Re),
          k && c(Ge),
          Q(Te, k);
      },
    }
  );
}
const _n = {
    title: 'SiteFooter',
    description: 'Reuters dotcom site footer component.',
    slug: 'site-footer',
  },
  { title: jt, description: Cn, slug: Ln } = _n;
function gn(l) {
  return [
    [
      {
        url: 'https://graphics.reuters.com/world-coronavirus-tracker-and-maps/',
        title: 'COVID-19: the latest global statistics, charts and maps',
        description: 'Tracking the global coronavirus outbreak, updated daily',
        image:
          'https://graphics.thomsonreuters.com/cdn/2020/covid-global-tracker/share-cards/global/en/share.png',
      },
      {
        url: 'https://graphics.reuters.com/world-coronavirus-tracker-and-maps/regions/europe',
        title: 'Coronavirus in Europe: the latest counts, charts and maps',
        description: 'Tracking the global coronavirus outbreak, updated daily',
        image:
          'https://graphics.thomsonreuters.com/cdn/2020/covid-global-tracker/share-cards/regions/en/europe.png',
      },
    ],
  ];
}
class In extends ue {
  constructor(e) {
    super(), pe(this, e, gn, kn, fe, {});
  }
}
export { In as default, _n as metadata };
