import {
  S as m,
  i as h,
  s as p,
  D as g,
  e as u,
  c as _,
  a as c,
  d as r,
  b as f,
  Y as v,
  f as D,
  H as y,
  E,
  F as b,
  G as C,
  x as I,
  u as S,
} from './vendor-d23a7629.js';
function V(n) {
  let t, a, l;
  const o = n[2].default,
    s = g(o, n, n[1], null);
  return {
    c() {
      (t = u('div')), (a = u('div')), s && s.c(), this.h();
    },
    l(e) {
      t = _(e, 'DIV', { id: !0, class: !0 });
      var i = c(t);
      a = _(i, 'DIV', { class: !0 });
      var d = c(a);
      s && s.l(d), d.forEach(r), i.forEach(r), this.h();
    },
    h() {
      f(a, 'class', 'svelte-1x6pex2'),
        f(t, 'id', 'demo-container'),
        f(t, 'class', 'svelte-1x6pex2'),
        v(t, 'fluid', n[0]);
    },
    m(e, i) {
      D(e, t, i), y(t, a), s && s.m(a, null), (l = !0);
    },
    p(e, [i]) {
      s &&
        s.p &&
        (!l || i & 2) &&
        E(s, o, e, e[1], l ? C(o, e[1], i, null) : b(e[1]), null),
        i & 1 && v(t, 'fluid', e[0]);
    },
    i(e) {
      l || (I(s, e), (l = !0));
    },
    o(e) {
      S(s, e), (l = !1);
    },
    d(e) {
      e && r(t), s && s.d(e);
    },
  };
}
function j(n, t, a) {
  let { $$slots: l = {}, $$scope: o } = t,
    { fluid: s = !1 } = t;
  return (
    (n.$$set = (e) => {
      'fluid' in e && a(0, (s = e.fluid)),
        '$$scope' in e && a(1, (o = e.$$scope));
    }),
    [s, o, l]
  );
}
class x extends m {
  constructor(t) {
    super();
    h(this, t, j, V, p, { fluid: 0 });
  }
}
export { x as D };
