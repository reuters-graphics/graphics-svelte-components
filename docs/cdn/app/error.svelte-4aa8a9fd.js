import {
  S as w,
  i as y,
  s as z,
  e as d,
  t as v,
  c as E,
  a as b,
  g as P,
  d as _,
  f as u,
  H as R,
  h as H,
  k as N,
  l as j,
  n as S,
  I as q,
} from './chunks/vendor-ea6fad36.js';
function C(r) {
  let f,
    a = r[1].frame + '',
    t;
  return {
    c() {
      (f = d('pre')), (t = v(a));
    },
    l(l) {
      f = E(l, 'PRE', {});
      var s = b(f);
      (t = P(s, a)), s.forEach(_);
    },
    m(l, s) {
      u(l, f, s), R(f, t);
    },
    p(l, s) {
      s & 2 && a !== (a = l[1].frame + '') && H(t, a);
    },
    d(l) {
      l && _(f);
    },
  };
}
function I(r) {
  let f,
    a = r[1].stack + '',
    t;
  return {
    c() {
      (f = d('pre')), (t = v(a));
    },
    l(l) {
      f = E(l, 'PRE', {});
      var s = b(f);
      (t = P(s, a)), s.forEach(_);
    },
    m(l, s) {
      u(l, f, s), R(f, t);
    },
    p(l, s) {
      s & 2 && a !== (a = l[1].stack + '') && H(t, a);
    },
    d(l) {
      l && _(f);
    },
  };
}
function A(r) {
  let f,
    a,
    t,
    l,
    s = r[1].message + '',
    c,
    k,
    m,
    p,
    i = r[1].frame && C(r),
    n = r[1].stack && I(r);
  return {
    c() {
      (f = d('h1')),
        (a = v(r[0])),
        (t = N()),
        (l = d('pre')),
        (c = v(s)),
        (k = N()),
        i && i.c(),
        (m = N()),
        n && n.c(),
        (p = j());
    },
    l(e) {
      f = E(e, 'H1', {});
      var o = b(f);
      (a = P(o, r[0])), o.forEach(_), (t = S(e)), (l = E(e, 'PRE', {}));
      var h = b(l);
      (c = P(h, s)),
        h.forEach(_),
        (k = S(e)),
        i && i.l(e),
        (m = S(e)),
        n && n.l(e),
        (p = j());
    },
    m(e, o) {
      u(e, f, o),
        R(f, a),
        u(e, t, o),
        u(e, l, o),
        R(l, c),
        u(e, k, o),
        i && i.m(e, o),
        u(e, m, o),
        n && n.m(e, o),
        u(e, p, o);
    },
    p(e, [o]) {
      o & 1 && H(a, e[0]),
        o & 2 && s !== (s = e[1].message + '') && H(c, s),
        e[1].frame
          ? i
            ? i.p(e, o)
            : ((i = C(e)), i.c(), i.m(m.parentNode, m))
          : i && (i.d(1), (i = null)),
        e[1].stack
          ? n
            ? n.p(e, o)
            : ((n = I(e)), n.c(), n.m(p.parentNode, p))
          : n && (n.d(1), (n = null));
    },
    i: q,
    o: q,
    d(e) {
      e && _(f),
        e && _(t),
        e && _(l),
        e && _(k),
        i && i.d(e),
        e && _(m),
        n && n.d(e),
        e && _(p);
    },
  };
}
function F({ error: r, status: f }) {
  return { props: { error: r, status: f } };
}
function B(r, f, a) {
  let { status: t } = f,
    { error: l } = f;
  return (
    (r.$$set = (s) => {
      'status' in s && a(0, (t = s.status)),
        'error' in s && a(1, (l = s.error));
    }),
    [t, l]
  );
}
class G extends w {
  constructor(f) {
    super();
    y(this, f, B, A, z, { status: 0, error: 1 });
  }
}
export { G as default, F as load };
