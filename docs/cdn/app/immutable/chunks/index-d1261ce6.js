import {
  S as v,
  i as h,
  s as p,
  F as g,
  e as d,
  c as _,
  a as c,
  d as r,
  b as f,
  Z as m,
  g as D,
  J as y,
  G as I,
  H as b,
  I as q,
  q as C,
  o as E,
} from './index-10187abb.js';
function S(n) {
  let t, a, l;
  const o = n[2].default,
    s = g(o, n, n[1], null);
  return {
    c() {
      (t = d('div')), (a = d('div')), s && s.c(), this.h();
    },
    l(e) {
      t = _(e, 'DIV', { id: !0, class: !0 });
      var i = c(t);
      a = _(i, 'DIV', { class: !0 });
      var u = c(a);
      s && s.l(u), u.forEach(r), i.forEach(r), this.h();
    },
    h() {
      f(a, 'class', 'svelte-1x6pex2'),
        f(t, 'id', 'demo-container'),
        f(t, 'class', 'svelte-1x6pex2'),
        m(t, 'fluid', n[0]);
    },
    m(e, i) {
      D(e, t, i), y(t, a), s && s.m(a, null), (l = !0);
    },
    p(e, [i]) {
      s &&
        s.p &&
        (!l || i & 2) &&
        I(s, o, e, e[1], l ? q(o, e[1], i, null) : b(e[1]), null),
        i & 1 && m(t, 'fluid', e[0]);
    },
    i(e) {
      l || (C(s, e), (l = !0));
    },
    o(e) {
      E(s, e), (l = !1);
    },
    d(e) {
      e && r(t), s && s.d(e);
    },
  };
}
function V(n, t, a) {
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
class G extends v {
  constructor(t) {
    super(), h(this, t, V, S, p, { fluid: 0 });
  }
}
export { G as D };
