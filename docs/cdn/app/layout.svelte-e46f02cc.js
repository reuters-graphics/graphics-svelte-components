import {
  S as s,
  i as e,
  s as t,
  D as n,
  E as l,
  F as o,
  G as u,
  x as a,
  u as c,
} from './chunks/vendor-54feeb2f.js';
function r(s) {
  let e;
  const t = s[1].default,
    r = n(t, s, s[0], null);
  return {
    c() {
      r && r.c();
    },
    l(s) {
      r && r.l(s);
    },
    m(s, t) {
      r && r.m(s, t), (e = !0);
    },
    p(s, [n]) {
      r &&
        r.p &&
        (!e || 1 & n) &&
        l(r, t, s, s[0], e ? u(t, s[0], n, null) : o(s[0]), null);
    },
    i(s) {
      e || (a(r, s), (e = !0));
    },
    o(s) {
      c(r, s), (e = !1);
    },
    d(s) {
      r && r.d(s);
    },
  };
}
function $(s, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  return (
    (s.$$set = (s) => {
      '$$scope' in s && t(0, (l = s.$$scope));
    }),
    [l, n]
  );
}
export default class extends s {
  constructor(s) {
    super(), e(this, s, $, r, t, {});
  }
}
