import {
  S as m,
  i as h,
  s as v,
  F as g,
  e as _,
  c as d,
  a as c,
  d as r,
  b as o,
  Z as y,
  g as S,
  J as D,
  G as I,
  H as b,
  I as q,
  q as C,
  o as E,
} from './index-83a5d9f9.js';
function V(f) {
  let t, l, i;
  const u = f[4].default,
    s = g(u, f, f[3], null);
  return {
    c() {
      (t = _('div')), (l = _('div')), s && s.c(), this.h();
    },
    l(e) {
      t = d(e, 'DIV', { id: !0, style: !0, class: !0 });
      var a = c(t);
      l = d(a, 'DIV', { style: !0, class: !0 });
      var n = c(l);
      s && s.l(n), n.forEach(r), a.forEach(r), this.h();
    },
    h() {
      o(l, 'style', f[2]),
        o(l, 'class', 'svelte-1x6pex2'),
        o(t, 'id', 'demo-container'),
        o(t, 'style', f[1]),
        o(t, 'class', 'svelte-1x6pex2'),
        y(t, 'fluid', f[0]);
    },
    m(e, a) {
      S(e, t, a), D(t, l), s && s.m(l, null), (i = !0);
    },
    p(e, [a]) {
      s &&
        s.p &&
        (!i || a & 8) &&
        I(s, u, e, e[3], i ? q(u, e[3], a, null) : b(e[3]), null),
        (!i || a & 4) && o(l, 'style', e[2]),
        (!i || a & 2) && o(t, 'style', e[1]),
        a & 1 && y(t, 'fluid', e[0]);
    },
    i(e) {
      i || (C(s, e), (i = !0));
    },
    o(e) {
      E(s, e), (i = !1);
    },
    d(e) {
      e && r(t), s && s.d(e);
    },
  };
}
function F(f, t, l) {
  let { $$slots: i = {}, $$scope: u } = t,
    { fluid: s = !1 } = t,
    { style: e = '' } = t,
    { containerStyle: a = '' } = t;
  return (
    (f.$$set = (n) => {
      'fluid' in n && l(0, (s = n.fluid)),
        'style' in n && l(1, (e = n.style)),
        'containerStyle' in n && l(2, (a = n.containerStyle)),
        '$$scope' in n && l(3, (u = n.$$scope));
    }),
    [s, e, a, u, i]
  );
}
class H extends m {
  constructor(t) {
    super(), h(this, t, F, V, v, { fluid: 0, style: 1, containerStyle: 2 });
  }
}
export { H as D };
