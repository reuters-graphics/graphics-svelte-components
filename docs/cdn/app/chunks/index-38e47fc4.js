import {
  S as s,
  i as a,
  s as l,
  D as e,
  e as c,
  c as i,
  a as t,
  d as n,
  b as o,
  Y as u,
  f as d,
  H as r,
  E as f,
  F as p,
  G as $,
  x as h,
  u as v,
} from './vendor-927c0fc0.js';
function x(s) {
  let a, l, x;
  const m = s[2].default,
    D = e(m, s, s[1], null);
  return {
    c() {
      (a = c('div')), (l = c('div')), D && D.c(), this.h();
    },
    l(s) {
      a = i(s, 'DIV', { id: !0, class: !0 });
      var e = t(a);
      l = i(e, 'DIV', { class: !0 });
      var c = t(l);
      D && D.l(c), c.forEach(n), e.forEach(n), this.h();
    },
    h() {
      o(l, 'class', 'svelte-1x6pex2'),
        o(a, 'id', 'demo-container'),
        o(a, 'class', 'svelte-1x6pex2'),
        u(a, 'fluid', s[0]);
    },
    m(s, e) {
      d(s, a, e), r(a, l), D && D.m(l, null), (x = !0);
    },
    p(s, [l]) {
      D &&
        D.p &&
        (!x || 2 & l) &&
        f(D, m, s, s[1], x ? $(m, s[1], l, null) : p(s[1]), null),
        1 & l && u(a, 'fluid', s[0]);
    },
    i(s) {
      x || (h(D, s), (x = !0));
    },
    o(s) {
      v(D, s), (x = !1);
    },
    d(s) {
      s && n(a), D && D.d(s);
    },
  };
}
function m(s, a, l) {
  let { $$slots: e = {}, $$scope: c } = a,
    { fluid: i = !1 } = a;
  return (
    (s.$$set = (s) => {
      'fluid' in s && l(0, (i = s.fluid)),
        '$$scope' in s && l(1, (c = s.$$scope));
    }),
    [i, c, e]
  );
}
class D extends s {
  constructor(s) {
    super(), a(this, s, m, x, l, { fluid: 0 });
  }
}
export { D };
