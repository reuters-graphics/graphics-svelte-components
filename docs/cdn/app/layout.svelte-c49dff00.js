import {
  S as s,
  i as t,
  s as e,
  D as n,
  E as c,
  F as l,
  G as o,
  x as u,
  u as a,
} from './chunks/vendor-927c0fc0.js';
function r(s) {
  let t;
  const e = s[1].default,
    r = n(e, s, s[0], null);
  return {
    c() {
      r && r.c();
    },
    l(s) {
      r && r.l(s);
    },
    m(s, e) {
      r && r.m(s, e), (t = !0);
    },
    p(s, [n]) {
      r &&
        r.p &&
        (!t || 1 & n) &&
        c(r, e, s, s[0], t ? o(e, s[0], n, null) : l(s[0]), null);
    },
    i(s) {
      t || (u(r, s), (t = !0));
    },
    o(s) {
      a(r, s), (t = !1);
    },
    d(s) {
      r && r.d(s);
    },
  };
}
function $(s, t, e) {
  let { $$slots: n = {}, $$scope: c } = t;
  return (
    (s.$$set = (s) => {
      '$$scope' in s && e(0, (c = s.$$scope));
    }),
    [c, n]
  );
}
export default class extends s {
  constructor(s) {
    super(), t(this, s, $, r, e, {});
  }
}
