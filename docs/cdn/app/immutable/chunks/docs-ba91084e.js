var Nt = Object.defineProperty,
  Ot = Object.defineProperties;
var Zt = Object.getOwnPropertyDescriptors;
var Xe = Object.getOwnPropertySymbols;
var Ft = Object.prototype.hasOwnProperty,
  Pt = Object.prototype.propertyIsEnumerable;
var Ye = (l, e, s) =>
    e in l
      ? Nt(l, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (l[e] = s),
  Fe = (l, e) => {
    for (var s in e || (e = {})) Ft.call(e, s) && Ye(l, s, e[s]);
    if (Xe) for (var s of Xe(e)) Pt.call(e, s) && Ye(l, s, e[s]);
    return l;
  },
  et = (l, e) => Ot(l, Zt(e));
import {
  S as de,
  i as me,
  s as ke,
  K as re,
  t as N,
  L as oe,
  a as h,
  h as O,
  d as c,
  b as u,
  g as C,
  J as p,
  E as z,
  T as jt,
  e as g,
  k as S,
  c as v,
  m as A,
  n as _e,
  o as D,
  p as ge,
  q as x,
  j as $e,
  B as Q,
  w as X,
  y as Y,
  _ as ye,
  l as we,
  V as qt,
  x as le,
  f as Le,
  F as Ut,
  G as zt,
  H as Gt,
  I as Wt,
  v as Rt,
  X as Jt,
  z as Kt,
  A as Qt,
  C as Xt,
} from './index-83a5d9f9.js';
import { n as ee } from './index-c889ff85.js';
import './main-e467f153.js';
import { D as Be } from './index-16ec1060.js';
import './paths-396f020f.js';
function Yt(l) {
  let e, s, t, n, a;
  return {
    c() {
      (e = re('svg')),
        (s = re('title')),
        (t = N('Gallery')),
        (n = re('path')),
        (a = re('path')),
        this.h();
    },
    l(i) {
      e = oe(i, 'svg', {
        xmlns: !0,
        viewBox: !0,
        role: !0,
        'aria-hidden': !0,
        focusable: !0,
        class: !0,
      });
      var r = h(e);
      s = oe(r, 'title', {});
      var o = h(s);
      (t = O(o, 'Gallery')),
        o.forEach(c),
        (n = oe(r, 'path', { d: !0 })),
        h(n).forEach(c),
        (a = oe(r, 'path', { d: !0 })),
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
      C(i, e, r), p(e, s), p(s, t), p(e, n), p(e, a);
    },
    p: z,
    i: z,
    o: z,
    d(i) {
      i && c(e);
    },
  };
}
class es extends de {
  constructor(e) {
    super(), me(this, e, null, Yt, ke, {});
  }
}
function ts(l) {
  let e, s, t, n;
  return {
    c() {
      (e = re('svg')),
        (s = re('title')),
        (t = N('Pictures')),
        (n = re('path')),
        this.h();
    },
    l(a) {
      e = oe(a, 'svg', {
        xmlns: !0,
        viewBox: !0,
        role: !0,
        'aria-hidden': !0,
        focusable: !0,
        class: !0,
      });
      var i = h(e);
      s = oe(i, 'title', {});
      var r = h(s);
      (t = O(r, 'Pictures')),
        r.forEach(c),
        (n = oe(i, 'path', { d: !0 })),
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
      C(a, e, i), p(e, s), p(s, t), p(e, n);
    },
    p: z,
    i: z,
    o: z,
    d(a) {
      a && c(e);
    },
  };
}
class ss extends de {
  constructor(e) {
    super(), me(this, e, null, ts, ke, {});
  }
}
function ns(l) {
  let e, s, t, n;
  return {
    c() {
      (e = re('svg')),
        (s = re('title')),
        (t = N('Videos')),
        (n = re('path')),
        this.h();
    },
    l(a) {
      e = oe(a, 'svg', {
        xmlns: !0,
        viewBox: !0,
        role: !0,
        'aria-hidden': !0,
        focusable: !0,
        class: !0,
      });
      var i = h(e);
      s = oe(i, 'title', {});
      var r = h(s);
      (t = O(r, 'Videos')),
        r.forEach(c),
        (n = oe(i, 'path', { d: !0 })),
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
      C(a, e, i), p(e, s), p(s, t), p(e, n);
    },
    p: z,
    i: z,
    o: z,
    d(a) {
      a && c(e);
    },
  };
}
class as extends de {
  constructor(e) {
    super(), me(this, e, null, ns, ke, {});
  }
}
function tt(l, e, s) {
  const t = l.slice();
  return (t[4] = e[s]), t;
}
function st(l, e, s) {
  const t = l.slice();
  return (t[4] = e[s]), t;
}
function nt(l, e, s) {
  const t = l.slice();
  return (t[4] = e[s]), t;
}
function at(l, e, s) {
  const t = l.slice();
  return (t[4] = e[s]), t;
}
function lt(l, e, s) {
  const t = l.slice();
  return (t[4] = e[s]), t;
}
function rt(l, e, s) {
  const t = l.slice();
  return (t[4] = e[s]), t;
}
function ot(l, e, s) {
  const t = l.slice();
  return (t[4] = e[s]), t;
}
function it(l) {
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
    _,
    E,
    I,
    R,
    M,
    G,
    b,
    P,
    w,
    F,
    T,
    q,
    j,
    ae,
    Z,
    B;
  const W = [rs, ls],
    L = [];
  function ie(y, ne) {
    return y[1] < Pe ? 0 : 1;
  }
  (i = ie(l)), (r = L[i] = W[i](l));
  let ue = l[0].browse_links,
    J = [];
  for (let y = 0; y < ue.length; y += 1) J[y] = ft(at(l, ue, y));
  let U = l[1] >= Pe && ht(l),
    he = l[0].about_links,
    te = [];
  for (let y = 0; y < he.length; y += 1) te[y] = mt(st(l, he, y));
  let pe = l[0].stay_informed_links,
    se = [];
  for (let y = 0; y < pe.length; y += 1) se[y] = kt(tt(l, pe, y));
  return {
    c() {
      (e = g('section')),
        (s = g('h2')),
        (t = N('Site Index')),
        (n = S()),
        (a = g('div')),
        r.c(),
        (o = S()),
        (f = g('section')),
        (m = g('h3')),
        (d = N('Browse')),
        ($ = S()),
        (_ = g('ul'));
      for (let y = 0; y < J.length; y += 1) J[y].c();
      (E = S()),
        U && U.c(),
        (I = S()),
        (R = g('div')),
        (M = g('section')),
        (G = g('h3')),
        (b = N('About Reuters')),
        (P = S()),
        (w = g('ul'));
      for (let y = 0; y < te.length; y += 1) te[y].c();
      (F = S()),
        (T = g('section')),
        (q = g('h3')),
        (j = N('Stay Informed')),
        (ae = S()),
        (Z = g('ul'));
      for (let y = 0; y < se.length; y += 1) se[y].c();
      this.h();
    },
    l(y) {
      e = v(y, 'SECTION', { class: !0 });
      var ne = h(e);
      s = v(ne, 'H2', { class: !0 });
      var K = h(s);
      (t = O(K, 'Site Index')),
        K.forEach(c),
        (n = A(ne)),
        (a = v(ne, 'DIV', { class: !0 }));
      var V = h(a);
      r.l(V), (o = A(V)), (f = v(V, 'SECTION', { class: !0 }));
      var fe = h(f);
      m = v(fe, 'H3', { class: !0 });
      var be = h(m);
      (d = O(be, 'Browse')),
        be.forEach(c),
        ($ = A(fe)),
        (_ = v(fe, 'UL', { class: !0 }));
      var Ie = h(_);
      for (let ce = 0; ce < J.length; ce += 1) J[ce].l(Ie);
      Ie.forEach(c),
        fe.forEach(c),
        (E = A(V)),
        U && U.l(V),
        (I = A(V)),
        (R = v(V, 'DIV', { class: !0 }));
      var Ee = h(R);
      M = v(Ee, 'SECTION', { class: !0 });
      var Ce = h(M);
      G = v(Ce, 'H3', { class: !0 });
      var Te = h(G);
      (b = O(Te, 'About Reuters')),
        Te.forEach(c),
        (P = A(Ce)),
        (w = v(Ce, 'UL', { class: !0 }));
      var xe = h(w);
      for (let ce = 0; ce < te.length; ce += 1) te[ce].l(xe);
      xe.forEach(c),
        Ce.forEach(c),
        (F = A(Ee)),
        (T = v(Ee, 'SECTION', { class: !0 }));
      var ve = h(T);
      q = v(ve, 'H3', { class: !0 });
      var He = h(q);
      (j = O(He, 'Stay Informed')),
        He.forEach(c),
        (ae = A(ve)),
        (Z = v(ve, 'UL', { class: !0 }));
      var Se = h(Z);
      for (let ce = 0; ce < se.length; ce += 1) se[ce].l(Se);
      Se.forEach(c),
        ve.forEach(c),
        Ee.forEach(c),
        V.forEach(c),
        ne.forEach(c),
        this.h();
    },
    h() {
      u(s, 'class', 'visually-hidden svelte-fhk6t1'),
        u(m, 'class', 'svelte-fhk6t1'),
        u(_, 'class', 'svelte-fhk6t1'),
        u(f, 'class', 'link-group svelte-fhk6t1'),
        u(G, 'class', 'svelte-fhk6t1'),
        u(w, 'class', 'svelte-fhk6t1'),
        u(M, 'class', 'about'),
        u(q, 'class', 'svelte-fhk6t1'),
        u(Z, 'class', 'svelte-fhk6t1'),
        u(T, 'class', 'stay-informed svelte-fhk6t1'),
        u(R, 'class', 'about-and-stay-informed svelte-fhk6t1'),
        u(a, 'class', 'content-container svelte-fhk6t1'),
        u(e, 'class', 'quick-links svelte-fhk6t1');
    },
    m(y, ne) {
      C(y, e, ne),
        p(e, s),
        p(s, t),
        p(e, n),
        p(e, a),
        L[i].m(a, null),
        p(a, o),
        p(a, f),
        p(f, m),
        p(m, d),
        p(f, $),
        p(f, _);
      for (let K = 0; K < J.length; K += 1) J[K].m(_, null);
      p(a, E),
        U && U.m(a, null),
        p(a, I),
        p(a, R),
        p(R, M),
        p(M, G),
        p(G, b),
        p(M, P),
        p(M, w);
      for (let K = 0; K < te.length; K += 1) te[K].m(w, null);
      p(R, F), p(R, T), p(T, q), p(q, j), p(T, ae), p(T, Z);
      for (let K = 0; K < se.length; K += 1) se[K].m(Z, null);
      B = !0;
    },
    p(y, ne) {
      let K = i;
      if (
        ((i = ie(y)),
        i === K
          ? L[i].p(y, ne)
          : (_e(),
            D(L[K], 1, 1, () => {
              L[K] = null;
            }),
            ge(),
            (r = L[i]),
            r ? r.p(y, ne) : ((r = L[i] = W[i](y)), r.c()),
            x(r, 1),
            r.m(a, o)),
        ne & 1)
      ) {
        ue = y[0].browse_links;
        let V;
        for (V = 0; V < ue.length; V += 1) {
          const fe = at(y, ue, V);
          J[V] ? J[V].p(fe, ne) : ((J[V] = ft(fe)), J[V].c(), J[V].m(_, null));
        }
        for (; V < J.length; V += 1) J[V].d(1);
        J.length = ue.length;
      }
      if (
        (y[1] >= Pe
          ? U
            ? (U.p(y, ne), ne & 2 && x(U, 1))
            : ((U = ht(y)), U.c(), x(U, 1), U.m(a, I))
          : U &&
            (_e(),
            D(U, 1, 1, () => {
              U = null;
            }),
            ge()),
        ne & 1)
      ) {
        he = y[0].about_links;
        let V;
        for (V = 0; V < he.length; V += 1) {
          const fe = st(y, he, V);
          te[V]
            ? te[V].p(fe, ne)
            : ((te[V] = mt(fe)), te[V].c(), te[V].m(w, null));
        }
        for (; V < te.length; V += 1) te[V].d(1);
        te.length = he.length;
      }
      if (ne & 1) {
        pe = y[0].stay_informed_links;
        let V;
        for (V = 0; V < pe.length; V += 1) {
          const fe = tt(y, pe, V);
          se[V]
            ? se[V].p(fe, ne)
            : ((se[V] = kt(fe)), se[V].c(), se[V].m(Z, null));
        }
        for (; V < se.length; V += 1) se[V].d(1);
        se.length = pe.length;
      }
    },
    i(y) {
      B || (x(r), x(U), (B = !0));
    },
    o(y) {
      D(r), D(U), (B = !1);
    },
    d(y) {
      y && c(e), L[i].d(), ye(J, y), U && U.d(), ye(te, y), ye(se, y);
    },
  };
}
function ls(l) {
  let e,
    s,
    t,
    n,
    a,
    i = l[0].latest_links,
    r = [];
  for (let o = 0; o < i.length; o += 1) r[o] = ct(lt(l, i, o));
  return {
    c() {
      (e = g('section')),
        (s = g('h3')),
        (t = N('Latest')),
        (n = S()),
        (a = g('ul'));
      for (let o = 0; o < r.length; o += 1) r[o].c();
      this.h();
    },
    l(o) {
      e = v(o, 'SECTION', { class: !0 });
      var f = h(e);
      s = v(f, 'H3', { class: !0 });
      var m = h(s);
      (t = O(m, 'Latest')),
        m.forEach(c),
        (n = A(f)),
        (a = v(f, 'UL', { class: !0 }));
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
      C(o, e, f), p(e, s), p(s, t), p(e, n), p(e, a);
      for (let m = 0; m < r.length; m += 1) r[m].m(a, null);
    },
    p(o, f) {
      if (f & 1) {
        i = o[0].latest_links;
        let m;
        for (m = 0; m < i.length; m += 1) {
          const d = lt(o, i, m);
          r[m] ? r[m].p(d, f) : ((r[m] = ct(d)), r[m].c(), r[m].m(a, null));
        }
        for (; m < r.length; m += 1) r[m].d(1);
        r.length = i.length;
      }
    },
    i: z,
    o: z,
    d(o) {
      o && c(e), ye(r, o);
    },
  };
}
function rs(l) {
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
    _,
    E = l[0].latest_links,
    I = [];
  for (let b = 0; b < E.length; b += 1) I[b] = ut(ot(l, E, b));
  let R = l[0].media_links,
    M = [];
  for (let b = 0; b < R.length; b += 1) M[b] = pt(rt(l, R, b));
  const G = (b) =>
    D(M[b], 1, 1, () => {
      M[b] = null;
    });
  return {
    c() {
      (e = g('div')),
        (s = g('section')),
        (t = g('h3')),
        (n = N('Latest')),
        (a = S()),
        (i = g('ul'));
      for (let b = 0; b < I.length; b += 1) I[b].c();
      (r = S()),
        (o = g('section')),
        (f = g('h3')),
        (m = N('Media')),
        (d = S()),
        ($ = g('ul'));
      for (let b = 0; b < M.length; b += 1) M[b].c();
      this.h();
    },
    l(b) {
      e = v(b, 'DIV', { class: !0 });
      var P = h(e);
      s = v(P, 'SECTION', { class: !0 });
      var w = h(s);
      t = v(w, 'H3', { class: !0 });
      var F = h(t);
      (n = O(F, 'Latest')),
        F.forEach(c),
        (a = A(w)),
        (i = v(w, 'UL', { class: !0 }));
      var T = h(i);
      for (let Z = 0; Z < I.length; Z += 1) I[Z].l(T);
      T.forEach(c),
        w.forEach(c),
        (r = A(P)),
        (o = v(P, 'SECTION', { class: !0 }));
      var q = h(o);
      f = v(q, 'H3', { class: !0 });
      var j = h(f);
      (m = O(j, 'Media')),
        j.forEach(c),
        (d = A(q)),
        ($ = v(q, 'UL', { class: !0 }));
      var ae = h($);
      for (let Z = 0; Z < M.length; Z += 1) M[Z].l(ae);
      ae.forEach(c), q.forEach(c), P.forEach(c), this.h();
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
    m(b, P) {
      C(b, e, P), p(e, s), p(s, t), p(t, n), p(s, a), p(s, i);
      for (let w = 0; w < I.length; w += 1) I[w].m(i, null);
      p(e, r), p(e, o), p(o, f), p(f, m), p(o, d), p(o, $);
      for (let w = 0; w < M.length; w += 1) M[w].m($, null);
      _ = !0;
    },
    p(b, P) {
      if (P & 1) {
        E = b[0].latest_links;
        let w;
        for (w = 0; w < E.length; w += 1) {
          const F = ot(b, E, w);
          I[w] ? I[w].p(F, P) : ((I[w] = ut(F)), I[w].c(), I[w].m(i, null));
        }
        for (; w < I.length; w += 1) I[w].d(1);
        I.length = E.length;
      }
      if (P & 5) {
        R = b[0].media_links;
        let w;
        for (w = 0; w < R.length; w += 1) {
          const F = rt(b, R, w);
          M[w]
            ? (M[w].p(F, P), x(M[w], 1))
            : ((M[w] = pt(F)), M[w].c(), x(M[w], 1), M[w].m($, null));
        }
        for (_e(), w = R.length; w < M.length; w += 1) G(w);
        ge();
      }
    },
    i(b) {
      if (!_) {
        for (let P = 0; P < R.length; P += 1) x(M[P]);
        _ = !0;
      }
    },
    o(b) {
      M = M.filter(Boolean);
      for (let P = 0; P < M.length; P += 1) D(M[P]);
      _ = !1;
    },
    d(b) {
      b && c(e), ye(I, b), ye(M, b);
    },
  };
}
function ct(l) {
  let e,
    s,
    t = l[4].text + '',
    n,
    a,
    i;
  return {
    c() {
      (e = g('li')), (s = g('a')), (n = N(t)), (i = S()), this.h();
    },
    l(r) {
      e = v(r, 'LI', { class: !0 });
      var o = h(e);
      s = v(o, 'A', { href: !0, class: !0 });
      var f = h(s);
      (n = O(f, t)), f.forEach(c), (i = A(o)), o.forEach(c), this.h();
    },
    h() {
      u(s, 'href', (a = ee(l[4].url))),
        u(s, 'class', 'svelte-fhk6t1'),
        u(e, 'class', 'svelte-fhk6t1');
    },
    m(r, o) {
      C(r, e, o), p(e, s), p(s, n), p(e, i);
    },
    p(r, o) {
      o & 1 && t !== (t = r[4].text + '') && $e(n, t),
        o & 1 && a !== (a = ee(r[4].url)) && u(s, 'href', a);
    },
    d(r) {
      r && c(e);
    },
  };
}
function ut(l) {
  let e,
    s,
    t = l[4].text + '',
    n,
    a,
    i;
  return {
    c() {
      (e = g('li')), (s = g('a')), (n = N(t)), (i = S()), this.h();
    },
    l(r) {
      e = v(r, 'LI', { class: !0 });
      var o = h(e);
      s = v(o, 'A', { href: !0, class: !0 });
      var f = h(s);
      (n = O(f, t)), f.forEach(c), (i = A(o)), o.forEach(c), this.h();
    },
    h() {
      u(s, 'href', (a = ee(l[4].url))),
        u(s, 'class', 'svelte-fhk6t1'),
        u(e, 'class', 'svelte-fhk6t1');
    },
    m(r, o) {
      C(r, e, o), p(e, s), p(s, n), p(e, i);
    },
    p(r, o) {
      o & 1 && t !== (t = r[4].text + '') && $e(n, t),
        o & 1 && a !== (a = ee(r[4].url)) && u(s, 'href', a);
    },
    d(r) {
      r && c(e);
    },
  };
}
function pt(l) {
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
  function $(_) {
    return {};
  }
  return (
    d && (t = new d($())),
    {
      c() {
        (e = g('li')),
          (s = g('div')),
          t && X(t.$$.fragment),
          (n = S()),
          (a = g('a')),
          (r = N(i)),
          (f = S()),
          this.h();
      },
      l(_) {
        e = v(_, 'LI', { class: !0 });
        var E = h(e);
        s = v(E, 'DIV', { class: !0 });
        var I = h(s);
        t && le(t.$$.fragment, I),
          I.forEach(c),
          (n = A(E)),
          (a = v(E, 'A', { href: !0, class: !0 }));
        var R = h(a);
        (r = O(R, i)), R.forEach(c), (f = A(E)), E.forEach(c), this.h();
      },
      h() {
        u(s, 'class', 'symbol svelte-fhk6t1'),
          u(a, 'href', (o = ee(l[4].url))),
          u(a, 'class', 'svelte-fhk6t1'),
          u(e, 'class', 'svelte-fhk6t1');
      },
      m(_, E) {
        C(_, e, E),
          p(e, s),
          t && Y(t, s, null),
          p(e, n),
          p(e, a),
          p(a, r),
          p(e, f),
          (m = !0);
      },
      p(_, E) {
        if (d !== (d = _[2][_[4].symbol])) {
          if (t) {
            _e();
            const I = t;
            D(I.$$.fragment, 1, 0, () => {
              Q(I, 1);
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
        (!m || E & 1) && i !== (i = _[4].text + '') && $e(r, i),
          (!m || (E & 1 && o !== (o = ee(_[4].url)))) && u(a, 'href', o);
      },
      i(_) {
        m || (t && x(t.$$.fragment, _), (m = !0));
      },
      o(_) {
        t && D(t.$$.fragment, _), (m = !1);
      },
      d(_) {
        _ && c(e), t && Q(t);
      },
    }
  );
}
function ft(l) {
  let e,
    s,
    t = l[4].text + '',
    n,
    a,
    i;
  return {
    c() {
      (e = g('li')), (s = g('a')), (n = N(t)), (i = S()), this.h();
    },
    l(r) {
      e = v(r, 'LI', { class: !0 });
      var o = h(e);
      s = v(o, 'A', { href: !0, class: !0 });
      var f = h(s);
      (n = O(f, t)), f.forEach(c), (i = A(o)), o.forEach(c), this.h();
    },
    h() {
      u(s, 'href', (a = ee(l[4].url))),
        u(s, 'class', 'svelte-fhk6t1'),
        u(e, 'class', 'svelte-fhk6t1');
    },
    m(r, o) {
      C(r, e, o), p(e, s), p(s, n), p(e, i);
    },
    p(r, o) {
      o & 1 && t !== (t = r[4].text + '') && $e(n, t),
        o & 1 && a !== (a = ee(r[4].url)) && u(s, 'href', a);
    },
    d(r) {
      r && c(e);
    },
  };
}
function ht(l) {
  let e,
    s,
    t,
    n,
    a,
    i,
    r = l[0].media_links,
    o = [];
  for (let m = 0; m < r.length; m += 1) o[m] = dt(nt(l, r, m));
  const f = (m) =>
    D(o[m], 1, 1, () => {
      o[m] = null;
    });
  return {
    c() {
      (e = g('section')),
        (s = g('h3')),
        (t = N('Media')),
        (n = S()),
        (a = g('ul'));
      for (let m = 0; m < o.length; m += 1) o[m].c();
      this.h();
    },
    l(m) {
      e = v(m, 'SECTION', { class: !0 });
      var d = h(e);
      s = v(d, 'H3', { class: !0 });
      var $ = h(s);
      (t = O($, 'Media')),
        $.forEach(c),
        (n = A(d)),
        (a = v(d, 'UL', { class: !0 }));
      var _ = h(a);
      for (let E = 0; E < o.length; E += 1) o[E].l(_);
      _.forEach(c), d.forEach(c), this.h();
    },
    h() {
      u(s, 'class', 'svelte-fhk6t1'),
        u(a, 'class', 'svelte-fhk6t1'),
        u(e, 'class', 'link-group media svelte-fhk6t1');
    },
    m(m, d) {
      C(m, e, d), p(e, s), p(s, t), p(e, n), p(e, a);
      for (let $ = 0; $ < o.length; $ += 1) o[$].m(a, null);
      i = !0;
    },
    p(m, d) {
      if (d & 5) {
        r = m[0].media_links;
        let $;
        for ($ = 0; $ < r.length; $ += 1) {
          const _ = nt(m, r, $);
          o[$]
            ? (o[$].p(_, d), x(o[$], 1))
            : ((o[$] = dt(_)), o[$].c(), x(o[$], 1), o[$].m(a, null));
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
      for (let d = 0; d < o.length; d += 1) D(o[d]);
      i = !1;
    },
    d(m) {
      m && c(e), ye(o, m);
    },
  };
}
function dt(l) {
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
  function $(_) {
    return {};
  }
  return (
    d && (t = new d($())),
    {
      c() {
        (e = g('li')),
          (s = g('div')),
          t && X(t.$$.fragment),
          (n = S()),
          (a = g('a')),
          (r = N(i)),
          (f = S()),
          this.h();
      },
      l(_) {
        e = v(_, 'LI', { class: !0 });
        var E = h(e);
        s = v(E, 'DIV', { class: !0 });
        var I = h(s);
        t && le(t.$$.fragment, I),
          I.forEach(c),
          (n = A(E)),
          (a = v(E, 'A', { href: !0, class: !0 }));
        var R = h(a);
        (r = O(R, i)), R.forEach(c), (f = A(E)), E.forEach(c), this.h();
      },
      h() {
        u(s, 'class', 'symbol svelte-fhk6t1'),
          u(a, 'href', (o = ee(l[4].url))),
          u(a, 'class', 'svelte-fhk6t1'),
          u(e, 'class', 'svelte-fhk6t1');
      },
      m(_, E) {
        C(_, e, E),
          p(e, s),
          t && Y(t, s, null),
          p(e, n),
          p(e, a),
          p(a, r),
          p(e, f),
          (m = !0);
      },
      p(_, E) {
        if (d !== (d = _[2][_[4].symbol])) {
          if (t) {
            _e();
            const I = t;
            D(I.$$.fragment, 1, 0, () => {
              Q(I, 1);
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
        (!m || E & 1) && i !== (i = _[4].text + '') && $e(r, i),
          (!m || (E & 1 && o !== (o = ee(_[4].url)))) && u(a, 'href', o);
      },
      i(_) {
        m || (t && x(t.$$.fragment, _), (m = !0));
      },
      o(_) {
        t && D(t.$$.fragment, _), (m = !1);
      },
      d(_) {
        _ && c(e), t && Q(t);
      },
    }
  );
}
function mt(l) {
  let e,
    s,
    t = l[4].text + '',
    n,
    a,
    i;
  return {
    c() {
      (e = g('li')), (s = g('a')), (n = N(t)), (i = S()), this.h();
    },
    l(r) {
      e = v(r, 'LI', { class: !0 });
      var o = h(e);
      s = v(o, 'A', { href: !0, class: !0 });
      var f = h(s);
      (n = O(f, t)), f.forEach(c), (i = A(o)), o.forEach(c), this.h();
    },
    h() {
      u(s, 'href', (a = ee(l[4].url))),
        u(s, 'class', 'svelte-fhk6t1'),
        u(e, 'class', 'svelte-fhk6t1');
    },
    m(r, o) {
      C(r, e, o), p(e, s), p(s, n), p(e, i);
    },
    p(r, o) {
      o & 1 && t !== (t = r[4].text + '') && $e(n, t),
        o & 1 && a !== (a = ee(r[4].url)) && u(s, 'href', a);
    },
    d(r) {
      r && c(e);
    },
  };
}
function kt(l) {
  let e,
    s,
    t = l[4].text + '',
    n,
    a,
    i;
  return {
    c() {
      (e = g('li')), (s = g('a')), (n = N(t)), (i = S()), this.h();
    },
    l(r) {
      e = v(r, 'LI', { class: !0 });
      var o = h(e);
      s = v(o, 'A', { href: !0, class: !0 });
      var f = h(s);
      (n = O(f, t)), f.forEach(c), (i = A(o)), o.forEach(c), this.h();
    },
    h() {
      u(s, 'href', (a = ee(l[4].url))),
        u(s, 'class', 'svelte-fhk6t1'),
        u(e, 'class', 'svelte-fhk6t1');
    },
    m(r, o) {
      C(r, e, o), p(e, s), p(s, n), p(e, i);
    },
    p(r, o) {
      o & 1 && t !== (t = r[4].text + '') && $e(n, t),
        o & 1 && a !== (a = ee(r[4].url)) && u(s, 'href', a);
    },
    d(r) {
      r && c(e);
    },
  };
}
function os(l) {
  let e, s, t, n;
  jt(l[3]);
  let a = l[0].latest_links && it(l);
  return {
    c() {
      a && a.c(), (e = we());
    },
    l(i) {
      a && a.l(i), (e = we());
    },
    m(i, r) {
      a && a.m(i, r),
        C(i, e, r),
        (s = !0),
        t || ((n = qt(window, 'resize', l[3])), (t = !0));
    },
    p(i, [r]) {
      i[0].latest_links
        ? a
          ? (a.p(i, r), r & 1 && x(a, 1))
          : ((a = it(i)), a.c(), x(a, 1), a.m(e.parentNode, e))
        : a &&
          (_e(),
          D(a, 1, 1, () => {
            a = null;
          }),
          ge());
    },
    i(i) {
      s || (x(a), (s = !0));
    },
    o(i) {
      D(a), (s = !1);
    },
    d(i) {
      a && a.d(i), i && c(e), (t = !1), n();
    },
  };
}
const Pe = 745;
function is(l, e, s) {
  const t = { graphics: es, pictures: ss, videos: as };
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
class cs extends de {
  constructor(e) {
    super(), me(this, e, is, os, ke, { links: 0 });
  }
}
function us(l) {
  let e, s;
  return {
    c() {
      (e = re('svg')), (s = re('path')), this.h();
    },
    l(t) {
      e = oe(t, 'svg', {
        'aria-hidden': !0,
        focusable: !0,
        xmlns: !0,
        viewBox: !0,
        style: !0,
        class: !0,
      });
      var n = h(e);
      (s = oe(n, 'path', { d: !0 })), h(s).forEach(c), n.forEach(c), this.h();
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
        Le(e, 'width', l[0] + 'px'),
        u(e, 'class', 'svelte-17648ki');
    },
    m(t, n) {
      C(t, e, n), p(e, s);
    },
    p(t, [n]) {
      n & 1 && Le(e, 'width', t[0] + 'px');
    },
    i: z,
    o: z,
    d(t) {
      t && c(e);
    },
  };
}
function ps(l, e, s) {
  let { width: t = 20 } = e;
  return (
    (l.$$set = (n) => {
      'width' in n && s(0, (t = n.width));
    }),
    [t]
  );
}
class fs extends de {
  constructor(e) {
    super(), me(this, e, ps, us, ke, { width: 0 });
  }
}
function hs(l) {
  let e, s;
  return {
    c() {
      (e = re('svg')), (s = re('path')), this.h();
    },
    l(t) {
      e = oe(t, 'svg', {
        'aria-hidden': !0,
        focusable: !0,
        viewBox: !0,
        xmlns: !0,
        style: !0,
        class: !0,
      });
      var n = h(e);
      (s = oe(n, 'path', { d: !0 })), h(s).forEach(c), n.forEach(c), this.h();
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
        Le(e, 'width', l[0] + 'px'),
        u(e, 'class', 'svelte-17648ki');
    },
    m(t, n) {
      C(t, e, n), p(e, s);
    },
    p(t, [n]) {
      n & 1 && Le(e, 'width', t[0] + 'px');
    },
    i: z,
    o: z,
    d(t) {
      t && c(e);
    },
  };
}
function ds(l, e, s) {
  let { width: t = 20 } = e;
  return (
    (l.$$set = (n) => {
      'width' in n && s(0, (t = n.width));
    }),
    [t]
  );
}
class ms extends de {
  constructor(e) {
    super(), me(this, e, ds, hs, ke, { width: 0 });
  }
}
function ks(l) {
  let e, s;
  return {
    c() {
      (e = re('svg')), (s = re('path')), this.h();
    },
    l(t) {
      e = oe(t, 'svg', {
        'aria-hidden': !0,
        focusable: !0,
        xmlns: !0,
        viewBox: !0,
        style: !0,
        class: !0,
      });
      var n = h(e);
      (s = oe(n, 'path', { d: !0 })), h(s).forEach(c), n.forEach(c), this.h();
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
        Le(e, 'width', l[0] + 'px'),
        u(e, 'class', 'svelte-17648ki');
    },
    m(t, n) {
      C(t, e, n), p(e, s);
    },
    p(t, [n]) {
      n & 1 && Le(e, 'width', t[0] + 'px');
    },
    i: z,
    o: z,
    d(t) {
      t && c(e);
    },
  };
}
function _s(l, e, s) {
  let { width: t = 20 } = e;
  return (
    (l.$$set = (n) => {
      'width' in n && s(0, (t = n.width));
    }),
    [t]
  );
}
class gs extends de {
  constructor(e) {
    super(), me(this, e, _s, ks, ke, { width: 0 });
  }
}
function vs(l) {
  let e, s, t;
  return {
    c() {
      (e = re('svg')), (s = re('path')), (t = re('path')), this.h();
    },
    l(n) {
      e = oe(n, 'svg', {
        'aria-hidden': !0,
        focusable: !0,
        xmlns: !0,
        viewBox: !0,
        style: !0,
        class: !0,
      });
      var a = h(e);
      (s = oe(a, 'path', { d: !0 })),
        h(s).forEach(c),
        (t = oe(a, 'path', { d: !0 })),
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
        Le(e, 'width', l[0] + 'px'),
        u(e, 'class', 'svelte-17648ki');
    },
    m(n, a) {
      C(n, e, a), p(e, s), p(e, t);
    },
    p(n, [a]) {
      a & 1 && Le(e, 'width', n[0] + 'px');
    },
    i: z,
    o: z,
    d(n) {
      n && c(e);
    },
  };
}
function ws(l, e, s) {
  let { width: t = 20 } = e;
  return (
    (l.$$set = (n) => {
      'width' in n && s(0, (t = n.width));
    }),
    [t]
  );
}
class $s extends de {
  constructor(e) {
    super(), me(this, e, ws, vs, ke, { width: 0 });
  }
}
function bs(l) {
  let e, s;
  return {
    c() {
      (e = re('svg')), (s = re('path')), this.h();
    },
    l(t) {
      e = oe(t, 'svg', {
        'aria-hidden': !0,
        focusable: !0,
        xmlns: !0,
        viewBox: !0,
        style: !0,
        class: !0,
      });
      var n = h(e);
      (s = oe(n, 'path', { d: !0 })), h(s).forEach(c), n.forEach(c), this.h();
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
        Le(e, 'width', l[0] + 'px'),
        u(e, 'class', 'svelte-17648ki');
    },
    m(t, n) {
      C(t, e, n), p(e, s);
    },
    p(t, [n]) {
      n & 1 && Le(e, 'width', t[0] + 'px');
    },
    i: z,
    o: z,
    d(t) {
      t && c(e);
    },
  };
}
function Es(l, e, s) {
  let { width: t = 20 } = e;
  return (
    (l.$$set = (n) => {
      'width' in n && s(0, (t = n.width));
    }),
    [t]
  );
}
class ys extends de {
  constructor(e) {
    super(), me(this, e, Es, bs, ke, { width: 0 });
  }
}
function _t(l, e, s) {
  const t = l.slice();
  return (t[2] = e[s]), t;
}
function gt(l) {
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
    _,
    E,
    I,
    R,
    M,
    G = l[0].social_links,
    b = [];
  for (let w = 0; w < G.length; w += 1) b[w] = vt(_t(l, G, w));
  const P = (w) =>
    D(b[w], 1, 1, () => {
      b[w] = null;
    });
  return {
    c() {
      (e = g('section')),
        (s = g('div')),
        (t = g('article')),
        (n = g('h2')),
        (a = N('Information you can trust')),
        (i = S()),
        (r = g('p')),
        (f = N(o)),
        (m = S()),
        (d = g('div')),
        ($ = g('h2')),
        (_ = N('Follow Us')),
        (E = S()),
        (I = g('div')),
        (R = g('ul'));
      for (let w = 0; w < b.length; w += 1) b[w].c();
      this.h();
    },
    l(w) {
      e = v(w, 'SECTION', { class: !0 });
      var F = h(e);
      s = v(F, 'DIV', { class: !0 });
      var T = h(s);
      t = v(T, 'ARTICLE', { class: !0 });
      var q = h(t);
      n = v(q, 'H2', { class: !0 });
      var j = h(n);
      (a = O(j, 'Information you can trust')),
        j.forEach(c),
        (i = A(q)),
        (r = v(q, 'P', { class: !0 }));
      var ae = h(r);
      (f = O(ae, o)),
        ae.forEach(c),
        q.forEach(c),
        (m = A(T)),
        (d = v(T, 'DIV', { class: !0 }));
      var Z = h(d);
      $ = v(Z, 'H2', { class: !0 });
      var B = h($);
      (_ = O(B, 'Follow Us')), B.forEach(c), (E = A(Z)), (I = v(Z, 'DIV', {}));
      var W = h(I);
      R = v(W, 'UL', { class: !0 });
      var L = h(R);
      for (let ie = 0; ie < b.length; ie += 1) b[ie].l(L);
      L.forEach(c),
        W.forEach(c),
        Z.forEach(c),
        T.forEach(c),
        F.forEach(c),
        this.h();
    },
    h() {
      u(n, 'class', 'svelte-eccq59'),
        u(r, 'class', 'svelte-eccq59'),
        u(t, 'class', 'company-info svelte-eccq59'),
        u($, 'class', 'svelte-eccq59'),
        u(R, 'class', 'links svelte-eccq59'),
        u(d, 'class', 'social svelte-eccq59'),
        u(s, 'class', 'content-container svelte-eccq59'),
        u(e, 'class', 'company svelte-eccq59');
    },
    m(w, F) {
      C(w, e, F),
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
        p($, _),
        p(d, E),
        p(d, I),
        p(I, R);
      for (let T = 0; T < b.length; T += 1) b[T].m(R, null);
      M = !0;
    },
    p(w, F) {
      if (
        ((!M || F & 1) && o !== (o = w[0].company_description + '') && $e(f, o),
        F & 3)
      ) {
        G = w[0].social_links;
        let T;
        for (T = 0; T < G.length; T += 1) {
          const q = _t(w, G, T);
          b[T]
            ? (b[T].p(q, F), x(b[T], 1))
            : ((b[T] = vt(q)), b[T].c(), x(b[T], 1), b[T].m(R, null));
        }
        for (_e(), T = G.length; T < b.length; T += 1) P(T);
        ge();
      }
    },
    i(w) {
      if (!M) {
        for (let F = 0; F < G.length; F += 1) x(b[F]);
        M = !0;
      }
    },
    o(w) {
      b = b.filter(Boolean);
      for (let F = 0; F < b.length; F += 1) D(b[F]);
      M = !1;
    },
    d(w) {
      w && c(e), ye(b, w);
    },
  };
}
function vt(l) {
  let e, s, t, n, a, i, r, o;
  var f = l[1][l[2].type];
  function m(d) {
    return {};
  }
  return (
    f && (a = new f(m())),
    {
      c() {
        (e = g('li')),
          (s = g('a')),
          (t = g('div')),
          (n = g('div')),
          a && X(a.$$.fragment),
          (r = S()),
          this.h();
      },
      l(d) {
        e = v(d, 'LI', { class: !0 });
        var $ = h(e);
        s = v($, 'A', { href: !0 });
        var _ = h(s);
        t = v(_, 'DIV', { class: !0 });
        var E = h(t);
        n = v(E, 'DIV', { class: !0 });
        var I = h(n);
        a && le(a.$$.fragment, I),
          I.forEach(c),
          E.forEach(c),
          _.forEach(c),
          (r = A($)),
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
        C(d, e, $),
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
            const _ = a;
            D(_.$$.fragment, 1, 0, () => {
              Q(_, 1);
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
        a && D(a.$$.fragment, d), (o = !1);
      },
      d(d) {
        d && c(e), a && Q(a);
      },
    }
  );
}
function Cs(l) {
  let e,
    s,
    t = l[0].social_links && gt(l);
  return {
    c() {
      t && t.c(), (e = we());
    },
    l(n) {
      t && t.l(n), (e = we());
    },
    m(n, a) {
      t && t.m(n, a), C(n, e, a), (s = !0);
    },
    p(n, [a]) {
      n[0].social_links
        ? t
          ? (t.p(n, a), a & 1 && x(t, 1))
          : ((t = gt(n)), t.c(), x(t, 1), t.m(e.parentNode, e))
        : t &&
          (_e(),
          D(t, 1, 1, () => {
            t = null;
          }),
          ge());
    },
    i(n) {
      s || (x(t), (s = !0));
    },
    o(n) {
      D(t), (s = !1);
    },
    d(n) {
      t && t.d(n), n && c(e);
    },
  };
}
function Ls(l, e, s) {
  const t = {
    twitter: fs,
    facebook: gs,
    instagram: $s,
    youtube: ms,
    linkedin: ys,
  };
  let { links: n = {} } = e;
  return (
    (l.$$set = (a) => {
      'links' in a && s(0, (n = a.links));
    }),
    [n, t]
  );
}
class Is extends de {
  constructor(e) {
    super(), me(this, e, Ls, Cs, ke, { links: 0 });
  }
}
function wt(l, e, s) {
  const t = l.slice();
  return (t[1] = e[s]), t;
}
function $t(l, e, s) {
  const t = l.slice();
  return (t[1] = e[s]), t;
}
function bt(l) {
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
    _,
    E,
    I,
    R,
    M,
    G = l[0].copyright_year + '',
    b,
    P,
    w,
    F,
    T,
    q = l[0].ad_links,
    j = [];
  for (let B = 0; B < q.length; B += 1) j[B] = Et($t(l, q, B));
  let ae = l[0].misc_links.filter(Ct),
    Z = [];
  for (let B = 0; B < ae.length; B += 1) Z[B] = yt(wt(l, ae, B));
  return {
    c() {
      (e = g('section')), (s = g('div')), (t = g('section')), (n = g('ul'));
      for (let B = 0; B < j.length; B += 1) j[B].c();
      (a = S()),
        (i = g('p')),
        (r = N('All quotes delayed a minimum of 15 minutes. ')),
        (o = g('a')),
        (f = N('See here for a complete list of exchanges and delays')),
        (d = N('.')),
        ($ = S()),
        (_ = g('section')),
        (E = g('ul'));
      for (let B = 0; B < Z.length; B += 1) Z[B].c();
      (I = S()),
        (R = g('p')),
        (M = N('\xA9 ')),
        (b = N(G)),
        (P = N(` Reuters.
        `)),
        (w = g('a')),
        (F = N('All rights reserved')),
        this.h();
    },
    l(B) {
      e = v(B, 'SECTION', { class: !0 });
      var W = h(e);
      s = v(W, 'DIV', { class: !0 });
      var L = h(s);
      t = v(L, 'SECTION', { class: !0 });
      var ie = h(t);
      n = v(ie, 'UL', { class: !0 });
      var ue = h(n);
      for (let y = 0; y < j.length; y += 1) j[y].l(ue);
      ue.forEach(c), ie.forEach(c), (a = A(L)), (i = v(L, 'P', { class: !0 }));
      var J = h(i);
      (r = O(J, 'All quotes delayed a minimum of 15 minutes. ')),
        (o = v(J, 'A', { href: !0, class: !0 }));
      var U = h(o);
      (f = O(U, 'See here for a complete list of exchanges and delays')),
        U.forEach(c),
        (d = O(J, '.')),
        J.forEach(c),
        ($ = A(L)),
        (_ = v(L, 'SECTION', { class: !0 }));
      var he = h(_);
      E = v(he, 'UL', { class: !0 });
      var te = h(E);
      for (let y = 0; y < Z.length; y += 1) Z[y].l(te);
      te.forEach(c), he.forEach(c), (I = A(L)), (R = v(L, 'P', { class: !0 }));
      var pe = h(R);
      (M = O(pe, '\xA9 ')),
        (b = O(pe, G)),
        (P = O(
          pe,
          ` Reuters.
        `
        )),
        (w = v(pe, 'A', { href: !0, class: !0 }));
      var se = h(w);
      (F = O(se, 'All rights reserved')),
        se.forEach(c),
        pe.forEach(c),
        L.forEach(c),
        W.forEach(c),
        this.h();
    },
    h() {
      u(n, 'class', 'link-group svelte-1wk8lrk'),
        u(t, 'class', 'ad-links svelte-1wk8lrk'),
        u(o, 'href', (m = ee(l[0].disclaimer_link))),
        u(o, 'class', 'svelte-1wk8lrk'),
        u(i, 'class', 'disclaimer svelte-1wk8lrk'),
        u(E, 'class', 'link-group svelte-1wk8lrk'),
        u(_, 'class', 'misc-links svelte-1wk8lrk'),
        u(w, 'href', (T = ee(l[0].copyright_link))),
        u(w, 'class', 'svelte-1wk8lrk'),
        u(R, 'class', 'copyright svelte-1wk8lrk'),
        u(s, 'class', 'content-container svelte-1wk8lrk'),
        u(e, 'class', 'legal svelte-1wk8lrk');
    },
    m(B, W) {
      C(B, e, W), p(e, s), p(s, t), p(t, n);
      for (let L = 0; L < j.length; L += 1) j[L].m(n, null);
      p(s, a),
        p(s, i),
        p(i, r),
        p(i, o),
        p(o, f),
        p(i, d),
        p(s, $),
        p(s, _),
        p(_, E);
      for (let L = 0; L < Z.length; L += 1) Z[L].m(E, null);
      p(s, I), p(s, R), p(R, M), p(R, b), p(R, P), p(R, w), p(w, F);
    },
    p(B, W) {
      if (W & 1) {
        q = B[0].ad_links;
        let L;
        for (L = 0; L < q.length; L += 1) {
          const ie = $t(B, q, L);
          j[L] ? j[L].p(ie, W) : ((j[L] = Et(ie)), j[L].c(), j[L].m(n, null));
        }
        for (; L < j.length; L += 1) j[L].d(1);
        j.length = q.length;
      }
      if (
        (W & 1 && m !== (m = ee(B[0].disclaimer_link)) && u(o, 'href', m),
        W & 1)
      ) {
        ae = B[0].misc_links.filter(Ct);
        let L;
        for (L = 0; L < ae.length; L += 1) {
          const ie = wt(B, ae, L);
          Z[L] ? Z[L].p(ie, W) : ((Z[L] = yt(ie)), Z[L].c(), Z[L].m(E, null));
        }
        for (; L < Z.length; L += 1) Z[L].d(1);
        Z.length = ae.length;
      }
      W & 1 && G !== (G = B[0].copyright_year + '') && $e(b, G),
        W & 1 && T !== (T = ee(B[0].copyright_link)) && u(w, 'href', T);
    },
    d(B) {
      B && c(e), ye(j, B), ye(Z, B);
    },
  };
}
function Et(l) {
  let e,
    s,
    t = l[1].text + '',
    n,
    a,
    i;
  return {
    c() {
      (e = g('li')), (s = g('a')), (n = N(t)), (i = S()), this.h();
    },
    l(r) {
      e = v(r, 'LI', { class: !0 });
      var o = h(e);
      s = v(o, 'A', { href: !0, class: !0 });
      var f = h(s);
      (n = O(f, t)), f.forEach(c), (i = A(o)), o.forEach(c), this.h();
    },
    h() {
      u(s, 'href', (a = ee(l[1].url))),
        u(s, 'class', 'svelte-1wk8lrk'),
        u(e, 'class', 'svelte-1wk8lrk');
    },
    m(r, o) {
      C(r, e, o), p(e, s), p(s, n), p(e, i);
    },
    p(r, o) {
      o & 1 && t !== (t = r[1].text + '') && $e(n, t),
        o & 1 && a !== (a = ee(r[1].url)) && u(s, 'href', a);
    },
    d(r) {
      r && c(e);
    },
  };
}
function yt(l) {
  let e,
    s,
    t = l[1].text + '',
    n,
    a,
    i;
  return {
    c() {
      (e = g('li')), (s = g('a')), (n = N(t)), (i = S()), this.h();
    },
    l(r) {
      e = v(r, 'LI', { class: !0 });
      var o = h(e);
      s = v(o, 'A', { href: !0, class: !0 });
      var f = h(s);
      (n = O(f, t)), f.forEach(c), (i = A(o)), o.forEach(c), this.h();
    },
    h() {
      u(s, 'href', (a = ee(l[1].url))),
        u(s, 'class', 'svelte-1wk8lrk'),
        u(e, 'class', 'svelte-1wk8lrk');
    },
    m(r, o) {
      C(r, e, o), p(e, s), p(s, n), p(e, i);
    },
    p(r, o) {
      o & 1 && t !== (t = r[1].text + '') && $e(n, t),
        o & 1 && a !== (a = ee(r[1].url)) && u(s, 'href', a);
    },
    d(r) {
      r && c(e);
    },
  };
}
function xs(l) {
  let e,
    s = l[0].ad_links && bt(l);
  return {
    c() {
      s && s.c(), (e = we());
    },
    l(t) {
      s && s.l(t), (e = we());
    },
    m(t, n) {
      s && s.m(t, n), C(t, e, n);
    },
    p(t, [n]) {
      t[0].ad_links
        ? s
          ? s.p(t, n)
          : ((s = bt(t)), s.c(), s.m(e.parentNode, e))
        : s && (s.d(1), (s = null));
    },
    i: z,
    o: z,
    d(t) {
      s && s.d(t), t && c(e);
    },
  };
}
const Ct = (l) => !l.self;
function Ss(l, e, s) {
  let { links: t = {} } = e;
  return (
    (l.$$set = (n) => {
      'links' in n && s(0, (t = n.links));
    }),
    [t]
  );
}
class As extends de {
  constructor(e) {
    super(), me(this, e, Ss, xs, ke, { links: 0 });
  }
}
const Ts = (l) => ({ intersecting: l & 1 }),
  Lt = (l) => ({ intersecting: l[0] });
function Rs(l) {
  let e, s;
  const t = l[8].default,
    n = Ut(t, l, l[7], Lt);
  return {
    c() {
      (e = g('div')), n && n.c();
    },
    l(a) {
      e = v(a, 'DIV', {});
      var i = h(e);
      n && n.l(i), i.forEach(c);
    },
    m(a, i) {
      C(a, e, i), n && n.m(e, null), l[9](e), (s = !0);
    },
    p(a, [i]) {
      n &&
        n.p &&
        (!s || i & 129) &&
        zt(n, t, a, a[7], s ? Wt(t, a[7], i, Ts) : Gt(a[7]), Lt);
    },
    i(a) {
      s || (x(n, a), (s = !0));
    },
    o(a) {
      D(n, a), (s = !1);
    },
    d(a) {
      a && c(e), n && n.d(a), l[9](null);
    },
  };
}
function Vs(l, e, s) {
  let { $$slots: t = {}, $$scope: n } = e,
    { once: a = !1 } = e,
    { top: i = 0 } = e,
    { bottom: r = 0 } = e,
    { left: o = 0 } = e,
    { right: f = 0 } = e,
    m = !1,
    d;
  Rt(() => {
    if (typeof IntersectionObserver != 'undefined') {
      const E = `${r}px ${o}px ${i}px ${f}px`,
        I = new IntersectionObserver(
          (R) => {
            s(0, (m = R[0].isIntersecting)), m && a && I.unobserve(d);
          },
          { rootMargin: E }
        );
      return I.observe(d), () => I.unobserve(d);
    }
    function _() {
      const E = d.getBoundingClientRect();
      s(
        0,
        (m =
          E.bottom + r > 0 &&
          E.right + f > 0 &&
          E.top - i < window.innerHeight &&
          E.left - o < window.innerWidth)
      ),
        m && a && window.removeEventListener('scroll', _);
    }
    return (
      window.addEventListener('scroll', _),
      () => window.removeEventListener('scroll', _)
    );
  });
  function $(_) {
    Jt[_ ? 'unshift' : 'push'](() => {
      (d = _), s(1, d);
    });
  }
  return (
    (l.$$set = (_) => {
      'once' in _ && s(2, (a = _.once)),
        'top' in _ && s(3, (i = _.top)),
        'bottom' in _ && s(4, (r = _.bottom)),
        'left' in _ && s(5, (o = _.left)),
        'right' in _ && s(6, (f = _.right)),
        '$$scope' in _ && s(7, (n = _.$$scope));
    }),
    [m, d, a, i, r, o, f, n, t, $]
  );
}
class Vt extends de {
  constructor(e) {
    super(),
      me(this, e, Vs, Rs, ke, {
        once: 2,
        top: 3,
        bottom: 4,
        left: 5,
        right: 6,
      });
  }
}
function Ms(l) {
  let e;
  return {
    c() {
      (e = g('div')), this.h();
    },
    l(s) {
      (e = v(s, 'DIV', { class: !0 })), h(e).forEach(c), this.h();
    },
    h() {
      u(e, 'class', 'image svelte-1sz614n');
    },
    m(s, t) {
      C(s, e, t);
    },
    p: z,
    d(s) {
      s && c(e);
    },
  };
}
function Bs(l) {
  let e, s;
  return {
    c() {
      (e = g('div')), this.h();
    },
    l(t) {
      (e = v(t, 'DIV', { class: !0, style: !0 })), h(e).forEach(c), this.h();
    },
    h() {
      u(e, 'class', 'image svelte-1sz614n'),
        u(e, 'style', (s = `background-image: url(${l[1]});`));
    },
    m(t, n) {
      C(t, e, n);
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
function Ds(l) {
  let e;
  function s(a, i) {
    return a[4] ? Bs : Ms;
  }
  let t = s(l),
    n = t(l);
  return {
    c() {
      n.c(), (e = we());
    },
    l(a) {
      n.l(a), (e = we());
    },
    m(a, i) {
      n.m(a, i), C(a, e, i);
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
function Hs(l) {
  let e, s, t, n, a, i, r, o;
  return (
    (t = new Vt({
      props: {
        top: 600,
        once: !0,
        $$slots: {
          default: [
            Ds,
            ({ intersecting: f }) => ({ 4: f }),
            ({ intersecting: f }) => (f ? 16 : 0),
          ],
        },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        (e = g('div')),
          (s = g('a')),
          X(t.$$.fragment),
          (n = S()),
          (a = g('p')),
          (i = N(l[2])),
          this.h();
      },
      l(f) {
        e = v(f, 'DIV', { class: !0, title: !0 });
        var m = h(e);
        s = v(m, 'A', { href: !0, class: !0 });
        var d = h(s);
        le(t.$$.fragment, d), (n = A(d)), (a = v(d, 'P', { class: !0 }));
        var $ = h(a);
        (i = O($, l[2])), $.forEach(c), d.forEach(c), m.forEach(c), this.h();
      },
      h() {
        u(a, 'class', 'svelte-1sz614n'),
          u(s, 'href', (r = l[0].replace('index.html', ''))),
          u(s, 'class', 'svelte-1sz614n'),
          u(e, 'class', 'referral svelte-1sz614n'),
          u(e, 'title', l[3]);
      },
      m(f, m) {
        C(f, e, m), p(e, s), Y(t, s, null), p(s, n), p(s, a), p(a, i), (o = !0);
      },
      p(f, [m]) {
        const d = {};
        m & 50 && (d.$$scope = { dirty: m, ctx: f }),
          t.$set(d),
          (!o || m & 4) && $e(i, f[2]),
          (!o || (m & 1 && r !== (r = f[0].replace('index.html', '')))) &&
            u(s, 'href', r),
          (!o || m & 8) && u(e, 'title', f[3]);
      },
      i(f) {
        o || (x(t.$$.fragment, f), (o = !0));
      },
      o(f) {
        D(t.$$.fragment, f), (o = !1);
      },
      d(f) {
        f && c(e), Q(t);
      },
    }
  );
}
function Ns(l, e, s) {
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
class Os extends de {
  constructor(e) {
    super(),
      me(this, e, Ns, Hs, ke, { url: 0, image: 1, title: 2, description: 3 });
  }
}
function It(l, e, s) {
  const t = l.slice();
  return (t[3] = e[s]), t;
}
function xt(l) {
  let e,
    s,
    t = l[0],
    n = [];
  for (let i = 0; i < t.length; i += 1) n[i] = St(It(l, t, i));
  const a = (i) =>
    D(n[i], 1, 1, () => {
      n[i] = null;
    });
  return {
    c() {
      e = g('nav');
      for (let i = 0; i < n.length; i += 1) n[i].c();
      this.h();
    },
    l(i) {
      e = v(i, 'NAV', { class: !0 });
      var r = h(e);
      for (let o = 0; o < n.length; o += 1) n[o].l(r);
      r.forEach(c), this.h();
    },
    h() {
      u(e, 'class', 'referral-rail row svelte-5ls690');
    },
    m(i, r) {
      C(i, e, r);
      for (let o = 0; o < n.length; o += 1) n[o].m(e, null);
      s = !0;
    },
    p(i, r) {
      if (r & 1) {
        t = i[0];
        let o;
        for (o = 0; o < t.length; o += 1) {
          const f = It(i, t, o);
          n[o]
            ? (n[o].p(f, r), x(n[o], 1))
            : ((n[o] = St(f)), n[o].c(), x(n[o], 1), n[o].m(e, null));
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
      for (let r = 0; r < n.length; r += 1) D(n[r]);
      s = !1;
    },
    d(i) {
      i && c(e), ye(n, i);
    },
  };
}
function St(l) {
  let e, s;
  const t = [l[3]];
  let n = {};
  for (let a = 0; a < t.length; a += 1) n = Xt(n, t[a]);
  return (
    (e = new Os({ props: n })),
    {
      c() {
        X(e.$$.fragment);
      },
      l(a) {
        le(e.$$.fragment, a);
      },
      m(a, i) {
        Y(e, a, i), (s = !0);
      },
      p(a, i) {
        const r = i & 1 ? Kt(t, [Qt(a[3])]) : {};
        e.$set(r);
      },
      i(a) {
        s || (x(e.$$.fragment, a), (s = !0));
      },
      o(a) {
        D(e.$$.fragment, a), (s = !1);
      },
      d(a) {
        Q(e, a);
      },
    }
  );
}
function Zs(l) {
  let e,
    s,
    t = l[0] && xt(l);
  return {
    c() {
      t && t.c(), (e = we());
    },
    l(n) {
      t && t.l(n), (e = we());
    },
    m(n, a) {
      t && t.m(n, a), C(n, e, a), (s = !0);
    },
    p(n, [a]) {
      n[0]
        ? t
          ? (t.p(n, a), a & 1 && x(t, 1))
          : ((t = xt(n)), t.c(), x(t, 1), t.m(e.parentNode, e))
        : t &&
          (_e(),
          D(t, 1, 1, () => {
            t = null;
          }),
          ge());
    },
    i(n) {
      s || (x(t), (s = !0));
    },
    o(n) {
      D(t), (s = !1);
    },
    d(n) {
      t && t.d(n), n && c(e);
    },
  };
}
function Fs(l, e, s) {
  let t,
    { referrals: n = [] } = e,
    a;
  return (
    Rt(() => {
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
class Ps extends de {
  constructor(e) {
    super(), me(this, e, Fs, Zs, ke, { referrals: 1 });
  }
}
function At(l) {
  let e,
    s,
    t,
    n,
    a,
    i,
    r = js(l);
  return {
    c() {
      (e = g('section')),
        (s = g('h2')),
        (t = g('a')),
        (n = N('More from Reuters Graphics')),
        (a = S()),
        r && r.c(),
        this.h();
    },
    l(o) {
      e = v(o, 'SECTION', { class: !0 });
      var f = h(e);
      s = v(f, 'H2', { class: !0 });
      var m = h(s);
      t = v(m, 'A', { href: !0, class: !0 });
      var d = h(t);
      (n = O(d, 'More from Reuters Graphics')),
        d.forEach(c),
        m.forEach(c),
        (a = A(f)),
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
      C(o, e, f),
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
      D(r), (i = !1);
    },
    d(o) {
      o && c(e), r && r.d();
    },
  };
}
function js(l) {
  let e, s;
  return (
    (e = new Ps({ props: { referrals: l[0] } })),
    {
      c() {
        X(e.$$.fragment);
      },
      l(t) {
        le(e.$$.fragment, t);
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
        D(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        Q(e, t);
      },
    }
  );
}
function qs(l) {
  let e,
    s,
    t = l[1] && At(l);
  return {
    c() {
      t && t.c(), (e = we());
    },
    l(n) {
      t && t.l(n), (e = we());
    },
    m(n, a) {
      t && t.m(n, a), C(n, e, a), (s = !0);
    },
    p(n, a) {
      n[1]
        ? t
          ? (t.p(n, a), a & 2 && x(t, 1))
          : ((t = At(n)), t.c(), x(t, 1), t.m(e.parentNode, e))
        : t &&
          (_e(),
          D(t, 1, 1, () => {
            t = null;
          }),
          ge());
    },
    i(n) {
      s || (x(t), (s = !0));
    },
    o(n) {
      D(t), (s = !1);
    },
    d(n) {
      t && t.d(n), n && c(e);
    },
  };
}
function Us(l) {
  let e, s;
  return (
    (e = new Vt({
      props: {
        top: 2400,
        once: !0,
        $$slots: {
          default: [
            qs,
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
        le(e.$$.fragment, t);
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
        D(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        Q(e, t);
      },
    }
  );
}
function zs(l, e, s) {
  let { referrals: t = [] } = e;
  return (
    (l.$$set = (n) => {
      'referrals' in n && s(0, (t = n.referrals));
    }),
    [t]
  );
}
class Gs extends de {
  constructor(e) {
    super(), me(this, e, zs, Us, ke, { referrals: 0 });
  }
}
var je = [
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
function Ws(l) {
  let e, s, t, n, a, i, r, o, f, m;
  return (
    (t = new Gs({ props: { referrals: l[0] } })),
    (a = new cs({ props: { links: je[0] } })),
    (r = new Is({ props: { links: je[0] } })),
    (f = new As({ props: { links: je[0] } })),
    {
      c() {
        (e = g('footer')),
          (s = g('div')),
          X(t.$$.fragment),
          (n = S()),
          X(a.$$.fragment),
          (i = S()),
          X(r.$$.fragment),
          (o = S()),
          X(f.$$.fragment),
          this.h();
      },
      l(d) {
        e = v(d, 'FOOTER', { style: !0, class: !0 });
        var $ = h(e);
        s = v($, 'DIV', { class: !0 });
        var _ = h(s);
        le(t.$$.fragment, _),
          (n = A(_)),
          le(a.$$.fragment, _),
          (i = A(_)),
          le(r.$$.fragment, _),
          (o = A(_)),
          le(f.$$.fragment, _),
          _.forEach(c),
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
        C(d, e, $),
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
        const _ = {};
        $ & 1 && (_.referrals = d[0]), t.$set(_);
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
        D(t.$$.fragment, d),
          D(a.$$.fragment, d),
          D(r.$$.fragment, d),
          D(f.$$.fragment, d),
          (m = !1);
      },
      d(d) {
        d && c(e), Q(t), Q(a), Q(r), Q(f);
      },
    }
  );
}
const qe = {
  default: { background: '#fff', primary: '#404040', rules: '#d0d0d0' },
  dark: { background: '#333', primary: '#eee', rules: '#999' },
};
function Js(l, e, s) {
  let { theme: t = {} } = e,
    { referrals: n = [] } = e;
  const a = Fe(Fe({}, qe.default), t);
  return (
    (l.$$set = (i) => {
      'theme' in i && s(2, (t = i.theme)),
        'referrals' in i && s(0, (n = i.referrals));
    }),
    [n, a, t]
  );
}
class De extends de {
  constructor(e) {
    super(), me(this, e, Js, Ws, ke, { theme: 2, referrals: 0 });
  }
}
function Ks(l) {
  let e, s;
  return (
    (e = new De({})),
    {
      c() {
        X(e.$$.fragment);
      },
      l(t) {
        le(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (s = !0);
      },
      i(t) {
        s || (x(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        D(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        Q(e, t);
      },
    }
  );
}
function Qs(l) {
  let e, s;
  return (
    (e = new De({ props: { theme: qe.dark } })),
    {
      c() {
        X(e.$$.fragment);
      },
      l(t) {
        le(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (s = !0);
      },
      p: z,
      i(t) {
        s || (x(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        D(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        Q(e, t);
      },
    }
  );
}
function Xs(l) {
  let e, s;
  return (
    (e = new De({
      props: {
        theme: et(Fe({}, qe.default), { background: '#e0d3b8', rules: '#aaa' }),
      },
    })),
    {
      c() {
        X(e.$$.fragment);
      },
      l(t) {
        le(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (s = !0);
      },
      p: z,
      i(t) {
        s || (x(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        D(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        Q(e, t);
      },
    }
  );
}
function Ys(l) {
  let e, s;
  return (
    (e = new De({ props: { referrals: l[0] } })),
    {
      c() {
        X(e.$$.fragment);
      },
      l(t) {
        le(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (s = !0);
      },
      p: z,
      i(t) {
        s || (x(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        D(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        Q(e, t);
      },
    }
  );
}
function en(l) {
  let e, s, t;
  return (
    (s = new De({})),
    {
      c() {
        (e = g('div')), X(s.$$.fragment), this.h();
      },
      l(n) {
        e = v(n, 'DIV', { id: !0 });
        var a = h(e);
        le(s.$$.fragment, a), a.forEach(c), this.h();
      },
      h() {
        u(e, 'id', 'custom-image');
      },
      m(n, a) {
        C(n, e, a), Y(s, e, null), (t = !0);
      },
      p: z,
      i(n) {
        t || (x(s.$$.fragment, n), (t = !0));
      },
      o(n) {
        D(s.$$.fragment, n), (t = !1);
      },
      d(n) {
        n && c(e), Q(s);
      },
    }
  );
}
function tn(l) {
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
    $ = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteFooter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteFooter</span> <span class="token punctuation">/></span></span></code>`,
    _,
    E,
    I,
    R,
    M,
    G,
    b,
    P,
    w = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteFooter<span class="token punctuation">,</span> SiteFooterThemes <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteFooter</span> <span class="token attr-name">theme=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>SiteFooterThemes<span class="token punctuation">.</span>dark<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,
    F,
    T,
    q,
    j,
    ae,
    Z,
    B,
    W,
    L = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SiteFooter<span class="token punctuation">,</span> SiteFooterThemes <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SiteFooter</span> <span class="token attr-name">theme=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> <span class="token operator">...</span>SiteFooterThemes<span class="token punctuation">.</span>default<span class="token punctuation">,</span> <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#e0d3b8'</span><span class="token punctuation">,</span> <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token string">'#aaa'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>

// Customisable props
<span class="token language-javascript"><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token string">'#404040'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token string">'#d0d0d0'</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></span></code>`,
    ie,
    ue,
    J,
    U,
    he,
    te,
    pe,
    se,
    y,
    ne,
    K,
    V = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
    fe,
    be,
    Ie,
    Ee,
    Ce,
    Te,
    xe,
    ve,
    He = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
    Se,
    ce,
    Ne;
  return (
    (E = new Be({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [Ks] },
        $$scope: { ctx: l },
      },
    })),
    (T = new Be({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [Qs] },
        $$scope: { ctx: l },
      },
    })),
    (ue = new Be({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [Xs] },
        $$scope: { ctx: l },
      },
    })),
    (be = new Be({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [Ys] },
        $$scope: { ctx: l },
      },
    })),
    (ce = new Be({
      props: {
        fluid: !0,
        containerStyle: 'padding: 0;',
        $$slots: { default: [en] },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        (e = g('section')),
          (s = g('h2')),
          (t = N(Tt)),
          (n = S()),
          (a = g('p')),
          (i = N(
            'Reuters dotcom site footer with graphics referrals, ported from '
          )),
          (r = g('a')),
          (o = N('Raptor UI components')),
          (f = N('.')),
          (m = S()),
          (d = g('pre')),
          (_ = S()),
          X(E.$$.fragment),
          (I = S()),
          (R = g('section')),
          (M = g('p')),
          (G = N('Change colours with exported themes.')),
          (b = S()),
          (P = g('pre')),
          (F = S()),
          X(T.$$.fragment),
          (q = S()),
          (j = g('section')),
          (ae = g('p')),
          (Z = N('Customise a colour theme.')),
          (B = S()),
          (W = g('pre')),
          (ie = S()),
          X(ue.$$.fragment),
          (J = S()),
          (U = g('section')),
          (he = g('p')),
          (te = N('Pass up to four custom referrals to the ')),
          (pe = g('code')),
          (se = N('referrals')),
          (y = N(' prop.')),
          (ne = S()),
          (K = g('pre')),
          (fe = S()),
          X(be.$$.fragment),
          (Ie = S()),
          (Ee = g('section')),
          (Ce = g('p')),
          (Te = N('Customise graphics referral image style.')),
          (xe = S()),
          (ve = g('pre')),
          (Se = S()),
          X(ce.$$.fragment),
          this.h();
      },
      l(k) {
        e = v(k, 'SECTION', {});
        var H = h(e);
        s = v(H, 'H2', {});
        var Re = h(s);
        (t = O(Re, Tt)), Re.forEach(c), (n = A(H)), (a = v(H, 'P', {}));
        var Ae = h(a);
        (i = O(
          Ae,
          'Reuters dotcom site footer with graphics referrals, ported from '
        )),
          (r = v(Ae, 'A', { href: !0, rel: !0 }));
        var Ve = h(r);
        (o = O(Ve, 'Raptor UI components')),
          Ve.forEach(c),
          (f = O(Ae, '.')),
          Ae.forEach(c),
          H.forEach(c),
          (m = A(k)),
          (d = v(k, 'PRE', { class: !0 }));
        var Oe = h(d);
        Oe.forEach(c),
          (_ = A(k)),
          le(E.$$.fragment, k),
          (I = A(k)),
          (R = v(k, 'SECTION', {}));
        var Me = h(R);
        M = v(Me, 'P', {});
        var Ue = h(M);
        (G = O(Ue, 'Change colours with exported themes.')),
          Ue.forEach(c),
          Me.forEach(c),
          (b = A(k)),
          (P = v(k, 'PRE', { class: !0 }));
        var Mt = h(P);
        Mt.forEach(c),
          (F = A(k)),
          le(T.$$.fragment, k),
          (q = A(k)),
          (j = v(k, 'SECTION', {}));
        var ze = h(j);
        ae = v(ze, 'P', {});
        var Ge = h(ae);
        (Z = O(Ge, 'Customise a colour theme.')),
          Ge.forEach(c),
          ze.forEach(c),
          (B = A(k)),
          (W = v(k, 'PRE', { class: !0 }));
        var Bt = h(W);
        Bt.forEach(c),
          (ie = A(k)),
          le(ue.$$.fragment, k),
          (J = A(k)),
          (U = v(k, 'SECTION', {}));
        var We = h(U);
        he = v(We, 'P', {});
        var Ze = h(he);
        (te = O(Ze, 'Pass up to four custom referrals to the ')),
          (pe = v(Ze, 'CODE', {}));
        var Je = h(pe);
        (se = O(Je, 'referrals')),
          Je.forEach(c),
          (y = O(Ze, ' prop.')),
          Ze.forEach(c),
          We.forEach(c),
          (ne = A(k)),
          (K = v(k, 'PRE', { class: !0 }));
        var Dt = h(K);
        Dt.forEach(c),
          (fe = A(k)),
          le(be.$$.fragment, k),
          (Ie = A(k)),
          (Ee = v(k, 'SECTION', {}));
        var Ke = h(Ee);
        Ce = v(Ke, 'P', {});
        var Qe = h(Ce);
        (Te = O(Qe, 'Customise graphics referral image style.')),
          Qe.forEach(c),
          Ke.forEach(c),
          (xe = A(k)),
          (ve = v(k, 'PRE', { class: !0 }));
        var Ht = h(ve);
        Ht.forEach(c), (Se = A(k)), le(ce.$$.fragment, k), this.h();
      },
      h() {
        u(
          r,
          'href',
          'https://github.com/tr/rcom-arc_raptor-ui/tree/develop/packages/rcom-raptor-ui_common/src/components/site-footer'
        ),
          u(r, 'rel', 'nofollow'),
          u(d, 'class', 'language-svelte'),
          u(P, 'class', 'language-svelte'),
          u(W, 'class', 'language-svelte'),
          u(K, 'class', 'language-svelte'),
          u(ve, 'class', 'language-svelte');
      },
      m(k, H) {
        C(k, e, H),
          p(e, s),
          p(s, t),
          p(e, n),
          p(e, a),
          p(a, i),
          p(a, r),
          p(r, o),
          p(a, f),
          C(k, m, H),
          C(k, d, H),
          (d.innerHTML = $),
          C(k, _, H),
          Y(E, k, H),
          C(k, I, H),
          C(k, R, H),
          p(R, M),
          p(M, G),
          C(k, b, H),
          C(k, P, H),
          (P.innerHTML = w),
          C(k, F, H),
          Y(T, k, H),
          C(k, q, H),
          C(k, j, H),
          p(j, ae),
          p(ae, Z),
          C(k, B, H),
          C(k, W, H),
          (W.innerHTML = L),
          C(k, ie, H),
          Y(ue, k, H),
          C(k, J, H),
          C(k, U, H),
          p(U, he),
          p(he, te),
          p(he, pe),
          p(pe, se),
          p(he, y),
          C(k, ne, H),
          C(k, K, H),
          (K.innerHTML = V),
          C(k, fe, H),
          Y(be, k, H),
          C(k, Ie, H),
          C(k, Ee, H),
          p(Ee, Ce),
          p(Ce, Te),
          C(k, xe, H),
          C(k, ve, H),
          (ve.innerHTML = He),
          C(k, Se, H),
          Y(ce, k, H),
          (Ne = !0);
      },
      p(k, [H]) {
        const Re = {};
        H & 2 && (Re.$$scope = { dirty: H, ctx: k }), E.$set(Re);
        const Ae = {};
        H & 2 && (Ae.$$scope = { dirty: H, ctx: k }), T.$set(Ae);
        const Ve = {};
        H & 2 && (Ve.$$scope = { dirty: H, ctx: k }), ue.$set(Ve);
        const Oe = {};
        H & 2 && (Oe.$$scope = { dirty: H, ctx: k }), be.$set(Oe);
        const Me = {};
        H & 2 && (Me.$$scope = { dirty: H, ctx: k }), ce.$set(Me);
      },
      i(k) {
        Ne ||
          (x(E.$$.fragment, k),
          x(T.$$.fragment, k),
          x(ue.$$.fragment, k),
          x(be.$$.fragment, k),
          x(ce.$$.fragment, k),
          (Ne = !0));
      },
      o(k) {
        D(E.$$.fragment, k),
          D(T.$$.fragment, k),
          D(ue.$$.fragment, k),
          D(be.$$.fragment, k),
          D(ce.$$.fragment, k),
          (Ne = !1);
      },
      d(k) {
        k && c(e),
          k && c(m),
          k && c(d),
          k && c(_),
          Q(E, k),
          k && c(I),
          k && c(R),
          k && c(b),
          k && c(P),
          k && c(F),
          Q(T, k),
          k && c(q),
          k && c(j),
          k && c(B),
          k && c(W),
          k && c(ie),
          Q(ue, k),
          k && c(J),
          k && c(U),
          k && c(ne),
          k && c(K),
          k && c(fe),
          Q(be, k),
          k && c(Ie),
          k && c(Ee),
          k && c(xe),
          k && c(ve),
          k && c(Se),
          Q(ce, k);
      },
    }
  );
}
const sn = {
    title: 'SiteFooter',
    description: 'Reuters dotcom site footer component.',
    slug: 'site-footer',
  },
  { title: Tt, description: pn, slug: fn } = sn;
function nn(l) {
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
class hn extends de {
  constructor(e) {
    super(), me(this, e, nn, tn, ke, {});
  }
}
export { hn as default, sn as metadata };
