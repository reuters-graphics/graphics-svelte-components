import {
  S as nt,
  i as tt,
  s as et,
  e as f,
  k as A,
  l as Ds,
  c as k,
  a as g,
  m as S,
  d as o,
  Y as Rs,
  b as u,
  f as oa,
  g as b,
  J as r,
  V as x,
  a3 as Ln,
  q as j,
  T as bt,
  a0 as _t,
  G as dn,
  H as vn,
  I as hn,
  o as R,
  n as Ts,
  p as Bs,
  M as Wn,
  a4 as pt,
  $ as yt,
  W as $t,
  F as bn,
  a5 as zn,
  X as Fn,
  t as v,
  w as F,
  h,
  x as X,
  y as U,
  B as G,
  E as Da,
} from './index-10187abb.js';
import { D as ya } from './index-d1261ce6.js';
import { i as wt, a as Ps, r as Et } from './main-e5803f15.js';
import { a as q } from './paths-396f020f.js';
var Ot = /\s/;
function At(e) {
  for (var a = e.length; a-- && Ot.test(e.charAt(a)); );
  return a;
}
var St = /^\s+/;
function jt(e) {
  return e && e.slice(0, At(e) + 1).replace(St, '');
}
var Xn = 0 / 0,
  It = /^[-+]0x[0-9a-f]+$/i,
  Mt = /^0b[01]+$/i,
  Ct = /^0o[0-7]+$/i,
  Rt = parseInt;
function Un(e) {
  if (typeof e == 'number') return e;
  if (wt(e)) return Xn;
  if (Ps(e)) {
    var a = typeof e.valueOf == 'function' ? e.valueOf() : e;
    e = Ps(a) ? a + '' : a;
  }
  if (typeof e != 'string') return e === 0 ? e : +e;
  e = jt(e);
  var s = Mt.test(e);
  return s || Ct.test(e) ? Rt(e.slice(2), s ? 2 : 8) : It.test(e) ? Xn : +e;
}
var Tt = function () {
    return Et.Date.now();
  },
  mn = Tt,
  Bt = 'Expected a function',
  Dt = Math.max,
  Pt = Math.min;
function Jt(e, a, s) {
  var n,
    l,
    p,
    c,
    i,
    $,
    M = 0,
    T = !1,
    B = !1,
    J = !0;
  if (typeof e != 'function') throw new TypeError(Bt);
  (a = Un(a) || 0),
    Ps(s) &&
      ((T = !!s.leading),
      (B = 'maxWait' in s),
      (p = B ? Dt(Un(s.maxWait) || 0, a) : p),
      (J = 'trailing' in s ? !!s.trailing : J));
  function P(y) {
    var V = n,
      L = l;
    return (n = l = void 0), (M = y), (c = e.apply(L, V)), c;
  }
  function w(y) {
    return (M = y), (i = setTimeout(H, a)), T ? P(y) : c;
  }
  function Y(y) {
    var V = y - $,
      L = y - M,
      E = a - V;
    return B ? Pt(E, p - L) : E;
  }
  function W(y) {
    var V = y - $,
      L = y - M;
    return $ === void 0 || V >= a || V < 0 || (B && L >= p);
  }
  function H() {
    var y = mn();
    if (W(y)) return Z(y);
    i = setTimeout(H, Y(y));
  }
  function Z(y) {
    return (i = void 0), J && n ? P(y) : ((n = l = void 0), c);
  }
  function N() {
    i !== void 0 && clearTimeout(i), (M = 0), (n = $ = l = i = void 0);
  }
  function K() {
    return i === void 0 ? c : Z(mn());
  }
  function D() {
    var y = mn(),
      V = W(y);
    if (((n = arguments), (l = this), ($ = y), V)) {
      if (i === void 0) return w($);
      if (B) return clearTimeout(i), (i = setTimeout(H, a)), P($);
    }
    return i === void 0 && (i = setTimeout(H, a)), c;
  }
  return (D.cancel = N), (D.flush = K), D;
}
var Nt = 'Expected a function';
function Vt(e, a, s) {
  var n = !0,
    l = !0;
  if (typeof e != 'function') throw new TypeError(Nt);
  return (
    Ps(s) &&
      ((n = 'leading' in s ? !!s.leading : n),
      (l = 'trailing' in s ? !!s.trailing : l)),
    Jt(e, a, { leading: n, maxWait: a, trailing: l })
  );
}
const { window: Fa } = $t,
  Ht = (e) => ({}),
  Gn = (e) => ({}),
  Lt = (e) => ({}),
  qn = (e) => ({ description: `${e[16]}-after-description` }),
  Wt = (e) => ({}),
  Yn = (e) => ({ description: `${e[16]}-before-description` });
function Kn(e) {
  let a,
    s,
    n,
    l,
    p,
    c,
    i,
    $,
    M,
    T,
    B,
    J,
    P,
    w,
    Y,
    W,
    H,
    Z,
    N,
    K,
    D,
    y,
    V,
    L,
    E = e[24].beforeOverlay && Qn(e),
    C = e[24].afterOverlay && Zn(e),
    I = e[24].caption && xn(e);
  return {
    c() {
      (a = f('section')),
        (s = f('figure')),
        (n = f('img')),
        (c = A()),
        (i = f('img')),
        (B = A()),
        E && E.c(),
        (J = A()),
        C && C.c(),
        (P = A()),
        (w = f('div')),
        (Y = f('div')),
        (W = A()),
        (H = f('div')),
        (K = A()),
        I && I.c(),
        (D = Ds()),
        this.h();
    },
    l(d) {
      a = k(d, 'SECTION', { class: !0, style: !0 });
      var O = g(a);
      s = k(O, 'FIGURE', { style: !0, class: !0, 'aria-labelledby': !0 });
      var z = g(s);
      (n = k(z, 'IMG', {
        src: !0,
        alt: !0,
        style: !0,
        class: !0,
        'aria-describedby': !0,
      })),
        (c = S(z)),
        (i = k(z, 'IMG', {
          src: !0,
          alt: !0,
          style: !0,
          class: !0,
          'aria-describedby': !0,
        })),
        (B = S(z)),
        E && E.l(z),
        (J = S(z)),
        C && C.l(z),
        (P = S(z)),
        (w = k(z, 'DIV', { tabindex: !0, class: !0, style: !0 }));
      var na = g(w);
      (Y = k(na, 'DIV', { class: !0 })),
        g(Y).forEach(o),
        (W = S(na)),
        (H = k(na, 'DIV', { class: !0 })),
        g(H).forEach(o),
        na.forEach(o),
        z.forEach(o),
        O.forEach(o),
        (K = S(d)),
        I && I.l(d),
        (D = Ds()),
        this.h();
    },
    h() {
      Rs(n.src, (l = e[5])) || u(n, 'src', l),
        u(n, 'alt', e[6]),
        u(n, 'style', e[14]),
        u(n, 'class', 'after svelte-1fkuva'),
        u(
          n,
          'aria-describedby',
          (p = e[24].beforeOverlay && `${e[16]}-before`)
        ),
        Rs(i.src, ($ = e[3])) || u(i, 'src', $),
        u(i, 'alt', e[4]),
        u(
          i,
          'style',
          (M = 'clip: rect(0 ' + e[10] + 'px ' + e[2] + 'px 0);' + e[14])
        ),
        u(i, 'class', 'before svelte-1fkuva'),
        u(i, 'aria-describedby', (T = e[24].afterOverlay && `${e[16]}-after`)),
        u(Y, 'class', 'arrow-left svelte-1fkuva'),
        u(H, 'class', 'arrow-right svelte-1fkuva'),
        u(w, 'tabindex', '0'),
        u(w, 'class', 'handle svelte-1fkuva'),
        oa(w, 'left', 'calc(' + e[0] * 100 + '% - 20px)'),
        oa(w, '--before-after-handle-colour', e[7]),
        oa(w, '--before-after-handle-inactive-opacity', e[8]),
        u(s, 'style', e[15]),
        u(s, 'class', 'before-after-container svelte-1fkuva'),
        u(s, 'aria-labelledby', (Z = e[24].caption && `${e[16]}-caption`)),
        u(a, 'class', (N = 'photo before-after ' + e[1] + ' svelte-1fkuva')),
        oa(a, 'height', e[2] + 'px');
    },
    m(d, O) {
      b(d, a, O),
        r(a, s),
        r(s, n),
        e[33](n),
        r(s, c),
        r(s, i),
        r(s, B),
        E && E.m(s, null),
        r(s, J),
        C && C.m(s, null),
        r(s, P),
        r(s, w),
        r(w, Y),
        r(w, W),
        r(w, H),
        e[35](s),
        b(d, K, O),
        I && I.m(d, O),
        b(d, D, O),
        (y = !0),
        V ||
          ((L = [
            x(n, 'mousedown', Ln(e[32])),
            x(n, 'load', e[20]),
            x(i, 'mousedown', Ln(e[31])),
            x(w, 'focus', e[17]),
            x(w, 'blur', e[18]),
            x(s, 'touchstart', e[22]),
            x(s, 'mousedown', e[22]),
          ]),
          (V = !0));
    },
    p(d, O) {
      (!y || (O[0] & 32 && !Rs(n.src, (l = d[5])))) && u(n, 'src', l),
        (!y || O[0] & 64) && u(n, 'alt', d[6]),
        (!y || O[0] & 16384) && u(n, 'style', d[14]),
        (!y ||
          (O[0] & 16777216 &&
            p !== (p = d[24].beforeOverlay && `${d[16]}-before`))) &&
          u(n, 'aria-describedby', p),
        (!y || (O[0] & 8 && !Rs(i.src, ($ = d[3])))) && u(i, 'src', $),
        (!y || O[0] & 16) && u(i, 'alt', d[4]),
        (!y ||
          (O[0] & 17412 &&
            M !==
              (M =
                'clip: rect(0 ' + d[10] + 'px ' + d[2] + 'px 0);' + d[14]))) &&
          u(i, 'style', M),
        (!y ||
          (O[0] & 16777216 &&
            T !== (T = d[24].afterOverlay && `${d[16]}-after`))) &&
          u(i, 'aria-describedby', T),
        d[24].beforeOverlay
          ? E
            ? (E.p(d, O), O[0] & 16777216 && j(E, 1))
            : ((E = Qn(d)), E.c(), j(E, 1), E.m(s, J))
          : E &&
            (Ts(),
            R(E, 1, 1, () => {
              E = null;
            }),
            Bs()),
        d[24].afterOverlay
          ? C
            ? (C.p(d, O), O[0] & 16777216 && j(C, 1))
            : ((C = Zn(d)), C.c(), j(C, 1), C.m(s, P))
          : C &&
            (Ts(),
            R(C, 1, 1, () => {
              C = null;
            }),
            Bs()),
        (!y || O[0] & 1) && oa(w, 'left', 'calc(' + d[0] * 100 + '% - 20px)'),
        (!y || O[0] & 128) && oa(w, '--before-after-handle-colour', d[7]),
        (!y || O[0] & 256) &&
          oa(w, '--before-after-handle-inactive-opacity', d[8]),
        (!y || O[0] & 32768) && u(s, 'style', d[15]),
        (!y ||
          (O[0] & 16777216 &&
            Z !== (Z = d[24].caption && `${d[16]}-caption`))) &&
          u(s, 'aria-labelledby', Z),
        (!y ||
          (O[0] & 2 &&
            N !== (N = 'photo before-after ' + d[1] + ' svelte-1fkuva'))) &&
          u(a, 'class', N),
        (!y || O[0] & 4) && oa(a, 'height', d[2] + 'px'),
        d[24].caption
          ? I
            ? (I.p(d, O), O[0] & 16777216 && j(I, 1))
            : ((I = xn(d)), I.c(), j(I, 1), I.m(D.parentNode, D))
          : I &&
            (Ts(),
            R(I, 1, 1, () => {
              I = null;
            }),
            Bs());
    },
    i(d) {
      y || (j(E), j(C), j(I), (y = !0));
    },
    o(d) {
      R(E), R(C), R(I), (y = !1);
    },
    d(d) {
      d && o(a),
        e[33](null),
        E && E.d(),
        C && C.d(),
        e[35](null),
        d && o(K),
        I && I.d(d),
        d && o(D),
        (V = !1),
        pt(L);
    },
  };
}
function Qn(e) {
  let a, s, n;
  const l = e[30].beforeOverlay,
    p = bn(l, e, e[29], Yn);
  return {
    c() {
      (a = f('div')), p && p.c(), this.h();
    },
    l(c) {
      a = k(c, 'DIV', { id: !0, class: !0, style: !0 });
      var i = g(a);
      p && p.l(i), i.forEach(o), this.h();
    },
    h() {
      u(a, 'id', 'image-before-label'),
        u(a, 'class', 'overlay-container before svelte-1fkuva'),
        oa(a, 'clip-path', 'inset(0 ' + e[13] + 'px 0 0)'),
        bt(() => e[34].call(a));
    },
    m(c, i) {
      b(c, a, i), p && p.m(a, null), (s = _t(a, e[34].bind(a))), (n = !0);
    },
    p(c, i) {
      p &&
        p.p &&
        (!n || i[0] & 536870912) &&
        dn(p, l, c, c[29], n ? hn(l, c[29], i, Wt) : vn(c[29]), Yn),
        (!n || i[0] & 8192) &&
          oa(a, 'clip-path', 'inset(0 ' + c[13] + 'px 0 0)');
    },
    i(c) {
      n || (j(p, c), (n = !0));
    },
    o(c) {
      R(p, c), (n = !1);
    },
    d(c) {
      c && o(a), p && p.d(c), s();
    },
  };
}
function Zn(e) {
  let a, s;
  const n = e[30].afterOverlay,
    l = bn(n, e, e[29], qn);
  return {
    c() {
      (a = f('div')), l && l.c(), this.h();
    },
    l(p) {
      a = k(p, 'DIV', { id: !0, class: !0 });
      var c = g(a);
      l && l.l(c), c.forEach(o), this.h();
    },
    h() {
      u(a, 'id', 'image-after-label'),
        u(a, 'class', 'overlay-container after svelte-1fkuva');
    },
    m(p, c) {
      b(p, a, c), l && l.m(a, null), (s = !0);
    },
    p(p, c) {
      l &&
        l.p &&
        (!s || c[0] & 536870912) &&
        dn(l, n, p, p[29], s ? hn(n, p[29], c, Lt) : vn(p[29]), qn);
    },
    i(p) {
      s || (j(l, p), (s = !0));
    },
    o(p) {
      R(l, p), (s = !1);
    },
    d(p) {
      p && o(a), l && l.d(p);
    },
  };
}
function xn(e) {
  let a, s, n;
  const l = e[30].caption,
    p = bn(l, e, e[29], Gn);
  return {
    c() {
      (a = f('section')), p && p.c(), this.h();
    },
    l(c) {
      a = k(c, 'SECTION', { class: !0, id: !0 });
      var i = g(a);
      p && p.l(i), i.forEach(o), this.h();
    },
    h() {
      u(a, 'class', (s = Wn(e[1]) + ' svelte-1fkuva')),
        u(a, 'id', `${e[16]}-caption`);
    },
    m(c, i) {
      b(c, a, i), p && p.m(a, null), (n = !0);
    },
    p(c, i) {
      p &&
        p.p &&
        (!n || i[0] & 536870912) &&
        dn(p, l, c, c[29], n ? hn(l, c[29], i, Ht) : vn(c[29]), Gn),
        (!n || (i[0] & 2 && s !== (s = Wn(c[1]) + ' svelte-1fkuva'))) &&
          u(a, 'class', s);
    },
    i(c) {
      n || (j(p, c), (n = !0));
    },
    o(c) {
      R(p, c), (n = !1);
    },
    d(c) {
      c && o(a), p && p.d(c);
    },
  };
}
function zt(e) {
  let a,
    s,
    n,
    l,
    p = e[3] && e[4] && e[5] && e[6] && Kn(e);
  return {
    c() {
      p && p.c(), (a = Ds());
    },
    l(c) {
      p && p.l(c), (a = Ds());
    },
    m(c, i) {
      p && p.m(c, i),
        b(c, a, i),
        (s = !0),
        n ||
          ((l = [
            x(Fa, 'touchmove', e[21]),
            x(Fa, 'touchend', e[23]),
            x(Fa, 'mousemove', e[21]),
            x(Fa, 'mouseup', e[23]),
            x(Fa, 'resize', Vt(e[20], 100)),
            x(Fa, 'keydown', e[19]),
          ]),
          (n = !0));
    },
    p(c, i) {
      c[3] && c[4] && c[5] && c[6]
        ? p
          ? (p.p(c, i), i[0] & 120 && j(p, 1))
          : ((p = Kn(c)), p.c(), j(p, 1), p.m(a.parentNode, a))
        : p &&
          (Ts(),
          R(p, 1, 1, () => {
            p = null;
          }),
          Bs());
    },
    i(c) {
      s || (j(p), (s = !0));
    },
    o(c) {
      R(p), (s = !1);
    },
    d(c) {
      p && p.d(c), c && o(a), (n = !1), pt(l);
    },
  };
}
function Ft(e, a, s) {
  let n,
    l,
    p,
    c,
    i,
    { $$slots: $ = {}, $$scope: M } = a;
  const T = yt($);
  let { width: B = '' } = a,
    { height: J = 600 } = a,
    { beforeSrc: P = null } = a,
    { beforeAlt: w = null } = a,
    { afterSrc: Y = null } = a,
    { afterAlt: W = null } = a,
    { handleColour: H = 'white' } = a,
    { handleInactiveOpacity: Z = 0.4 } = a,
    { handleMargin: N = 20 } = a,
    { keyPressStep: K = 0.05 } = a,
    { offset: D = 0.5 } = a;
  const y = () =>
      Math.floor((1 + Math.random()) * 65536)
        .toString(16)
        .substring(1),
    V = 'before-after-' + y() + y();
  let L,
    E = null,
    C = !1,
    I,
    d = 0,
    O = !1;
  const z = () => (O = !0),
    na = () => (O = !1),
    la = (_) => {
      if (!O) return;
      const { keyCode: aa } = _,
        ea = N / n;
      aa === 39
        ? s(0, (D = Math.min(1 - ea, D + K)))
        : aa === 37 && s(0, (D = Math.max(0 + ea, D - K)));
    },
    Xa = (_) => {
      _.type === 'load'
        ? s(27, (E = _.target.getBoundingClientRect()))
        : s(27, (E = L.getBoundingClientRect()));
    },
    fa = (_) => {
      const aa = _.touches ? _.touches[0] : _;
      if (C && E) {
        const ea = I
          ? parseInt(window.getComputedStyle(I).marginLeft.slice(0, -2))
          : 0;
        let ra = aa.pageX - ea - E.left;
        (ra = ra < N ? N : ra > n - N ? n - N : ra), s(0, (D = ra / n));
      }
    },
    Ua = (_) => {
      (C = !0), fa(_);
    },
    Ga = () => {
      C = !1;
    };
  (P && w && Y && W) ||
    console.warn('Missing required src or alt props for BeforeAfter component');
  function Pa(_) {
    zn.call(this, e, _);
  }
  function ca(_) {
    zn.call(this, e, _);
  }
  function Js(_) {
    Fn[_ ? 'unshift' : 'push'](() => {
      (L = _), s(11, L);
    });
  }
  function Ja() {
    (d = this.clientWidth), s(9, d);
  }
  function ta(_) {
    Fn[_ ? 'unshift' : 'push'](() => {
      (I = _), s(12, I);
    });
  }
  return (
    (e.$$set = (_) => {
      'width' in _ && s(1, (B = _.width)),
        'height' in _ && s(2, (J = _.height)),
        'beforeSrc' in _ && s(3, (P = _.beforeSrc)),
        'beforeAlt' in _ && s(4, (w = _.beforeAlt)),
        'afterSrc' in _ && s(5, (Y = _.afterSrc)),
        'afterAlt' in _ && s(6, (W = _.afterAlt)),
        'handleColour' in _ && s(7, (H = _.handleColour)),
        'handleInactiveOpacity' in _ && s(8, (Z = _.handleInactiveOpacity)),
        'handleMargin' in _ && s(25, (N = _.handleMargin)),
        'keyPressStep' in _ && s(26, (K = _.keyPressStep)),
        'offset' in _ && s(0, (D = _.offset)),
        '$$scope' in _ && s(29, (M = _.$$scope));
    }),
    (e.$$.update = () => {
      e.$$.dirty[0] & 134217728 && s(28, (n = (E && E.width) || 0)),
        e.$$.dirty[0] & 268435457 && s(10, (l = n * D)),
        e.$$.dirty[0] & 4 && s(15, (p = `width:100%;height:${J}px;`)),
        e.$$.dirty[0] & 1536 && s(13, (i = l < d ? Math.abs(l - d) : 0));
    }),
    s(14, (c = 'width:100%;height:100%;')),
    [
      D,
      B,
      J,
      P,
      w,
      Y,
      W,
      H,
      Z,
      d,
      l,
      L,
      I,
      i,
      c,
      p,
      V,
      z,
      na,
      la,
      Xa,
      fa,
      Ua,
      Ga,
      T,
      N,
      K,
      E,
      n,
      M,
      $,
      Pa,
      ca,
      Js,
      Ja,
      ta,
    ]
  );
}
class $a extends nt {
  constructor(a) {
    super(),
      tt(
        this,
        a,
        Ft,
        zt,
        et,
        {
          width: 1,
          height: 2,
          beforeSrc: 3,
          beforeAlt: 4,
          afterSrc: 5,
          afterAlt: 6,
          handleColour: 7,
          handleInactiveOpacity: 8,
          handleMargin: 25,
          keyPressStep: 26,
          offset: 0,
        },
        null,
        [-1, -1]
      );
  }
}
function Xt(e) {
  let a, s;
  return (
    (a = new $a({
      props: {
        beforeSrc: `${q}/images/before-after/myrne-before.jpg`,
        beforeAlt: 'Before the thing',
        afterSrc: `${q}/images/before-after/myrne-after.jpg`,
        afterAlt: 'After the thing',
      },
    })),
    {
      c() {
        F(a.$$.fragment);
      },
      l(n) {
        X(a.$$.fragment, n);
      },
      m(n, l) {
        U(a, n, l), (s = !0);
      },
      p: Da,
      i(n) {
        s || (j(a.$$.fragment, n), (s = !0));
      },
      o(n) {
        R(a.$$.fragment, n), (s = !1);
      },
      d(n) {
        G(a, n);
      },
    }
  );
}
function Ut(e) {
  let a, s;
  return (
    (a = new $a({
      props: {
        beforeSrc: `${q}/images/before-after/myrne-before.jpg`,
        beforeAlt: 'Before the thing',
        afterSrc: `${q}/images/before-after/myrne-after.jpg`,
        afterAlt: 'After the thing',
        width: 'wide',
        height: 400,
      },
    })),
    {
      c() {
        F(a.$$.fragment);
      },
      l(n) {
        X(a.$$.fragment, n);
      },
      m(n, l) {
        U(a, n, l), (s = !0);
      },
      p: Da,
      i(n) {
        s || (j(a.$$.fragment, n), (s = !0));
      },
      o(n) {
        R(a.$$.fragment, n), (s = !1);
      },
      d(n) {
        G(a, n);
      },
    }
  );
}
function Gt(e) {
  let a, s;
  return (
    (a = new $a({
      props: {
        beforeSrc: `${q}/images/before-after/myrne-before.jpg`,
        beforeAlt: 'Before the thing',
        afterSrc: `${q}/images/before-after/myrne-after.jpg`,
        afterAlt: 'After the thing',
        handleColour: '#fb8c71',
        handleInactiveOpacity: 0.6,
        handleMargin: 0,
      },
    })),
    {
      c() {
        F(a.$$.fragment);
      },
      l(n) {
        X(a.$$.fragment, n);
      },
      m(n, l) {
        U(a, n, l), (s = !0);
      },
      p: Da,
      i(n) {
        s || (j(a.$$.fragment, n), (s = !0));
      },
      o(n) {
        R(a.$$.fragment, n), (s = !1);
      },
      d(n) {
        G(a, n);
      },
    }
  );
}
function qt(e) {
  let a, s;
  return (
    (a = new $a({
      props: {
        beforeSrc: `${q}/images/before-after/myrne-before.jpg`,
        beforeAlt: 'Before the thing',
        afterSrc: `${q}/images/before-after/myrne-after.jpg`,
        afterAlt: 'After the thing',
        offset: 0.1,
      },
    })),
    {
      c() {
        F(a.$$.fragment);
      },
      l(n) {
        X(a.$$.fragment, n);
      },
      m(n, l) {
        U(a, n, l), (s = !0);
      },
      p: Da,
      i(n) {
        s || (j(a.$$.fragment, n), (s = !0));
      },
      o(n) {
        R(a.$$.fragment, n), (s = !1);
      },
      d(n) {
        G(a, n);
      },
    }
  );
}
function Yt(e) {
  let a, s;
  return {
    c() {
      (a = f('p')), (s = v('Photos by MAXAR Technologies, 2021.')), this.h();
    },
    l(n) {
      a = k(n, 'P', { slot: !0, class: !0 });
      var l = g(a);
      (s = h(l, 'Photos by MAXAR Technologies, 2021.')), l.forEach(o), this.h();
    },
    h() {
      u(a, 'slot', 'caption'), u(a, 'class', 'caption svelte-10cpbvu');
    },
    m(n, l) {
      b(n, a, l), r(a, s);
    },
    p: Da,
    d(n) {
      n && o(a);
    },
  };
}
function Kt(e) {
  let a, s;
  return (
    (a = new $a({
      props: {
        beforeSrc: `${q}/images/before-after/myrne-before.jpg`,
        beforeAlt:
          'Satellite image of Russian base at Myrne taken on July 7, 2020.',
        afterSrc: `${q}/images/before-after/myrne-after.jpg`,
        afterAlt:
          'Satellite image of Russian base at Myrne taken on Oct. 20, 2020.',
        $$slots: { caption: [Yt] },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        F(a.$$.fragment);
      },
      l(n) {
        X(a.$$.fragment, n);
      },
      m(n, l) {
        U(a, n, l), (s = !0);
      },
      p(n, l) {
        const p = {};
        l & 2 && (p.$$scope = { dirty: l, ctx: n }), a.$set(p);
      },
      i(n) {
        s || (j(a.$$.fragment, n), (s = !0));
      },
      o(n) {
        R(a.$$.fragment, n), (s = !1);
      },
      d(n) {
        G(a, n);
      },
    }
  );
}
function Qt(e) {
  let a, s, n, l, p, c;
  return {
    c() {
      (a = f('div')),
        (s = f('h6')),
        (n = v('July 7, 2020')),
        (l = A()),
        (p = f('p')),
        (c = v('Initially, this site was far smaller.')),
        this.h();
    },
    l(i) {
      a = k(i, 'DIV', { slot: !0, class: !0 });
      var $ = g(a);
      s = k($, 'H6', { class: !0 });
      var M = g(s);
      (n = h(M, 'July 7, 2020')),
        M.forEach(o),
        (l = S($)),
        (p = k($, 'P', { class: !0 }));
      var T = g(p);
      (c = h(T, 'Initially, this site was far smaller.')),
        T.forEach(o),
        $.forEach(o),
        this.h();
    },
    h() {
      u(s, 'class', 'svelte-10cpbvu'),
        u(p, 'class', 'svelte-10cpbvu'),
        u(a, 'slot', 'beforeOverlay'),
        u(a, 'class', 'overlay before svelte-10cpbvu');
    },
    m(i, $) {
      b(i, a, $), r(a, s), r(s, n), r(a, l), r(a, p), r(p, c);
    },
    p: Da,
    d(i) {
      i && o(a);
    },
  };
}
function Zt(e) {
  let a, s, n, l, p, c;
  return {
    c() {
      (a = f('div')),
        (s = f('h6')),
        (n = v('Oct. 20, 2020')),
        (l = A()),
        (p = f('p')),
        (c = v('But then forces built up.')),
        this.h();
    },
    l(i) {
      a = k(i, 'DIV', { slot: !0, class: !0 });
      var $ = g(a);
      s = k($, 'H6', { class: !0 });
      var M = g(s);
      (n = h(M, 'Oct. 20, 2020')),
        M.forEach(o),
        (l = S($)),
        (p = k($, 'P', { class: !0 }));
      var T = g(p);
      (c = h(T, 'But then forces built up.')),
        T.forEach(o),
        $.forEach(o),
        this.h();
    },
    h() {
      u(s, 'class', 'svelte-10cpbvu'),
        u(p, 'class', 'svelte-10cpbvu'),
        u(a, 'slot', 'afterOverlay'),
        u(a, 'class', 'overlay after svelte-10cpbvu');
    },
    m(i, $) {
      b(i, a, $), r(a, s), r(s, n), r(a, l), r(a, p), r(p, c);
    },
    p: Da,
    d(i) {
      i && o(a);
    },
  };
}
function xt(e) {
  let a, s;
  return (
    (a = new $a({
      props: {
        beforeSrc: `${q}/images/before-after/myrne-before.jpg`,
        beforeAlt: 'Before the thing',
        afterSrc: `${q}/images/before-after/myrne-after.jpg`,
        afterAlt: 'After the thing',
        $$slots: { afterOverlay: [Zt], beforeOverlay: [Qt] },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        F(a.$$.fragment);
      },
      l(n) {
        X(a.$$.fragment, n);
      },
      m(n, l) {
        U(a, n, l), (s = !0);
      },
      p(n, l) {
        const p = {};
        l & 2 && (p.$$scope = { dirty: l, ctx: n }), a.$set(p);
      },
      i(n) {
        s || (j(a.$$.fragment, n), (s = !0));
      },
      o(n) {
        R(a.$$.fragment, n), (s = !1);
      },
      d(n) {
        G(a, n);
      },
    }
  );
}
function ae(e) {
  let a, s, n, l;
  return {
    c() {
      (a = f('div')), (s = f('p')), (n = v('July 7, 2020')), this.h();
    },
    l(p) {
      a = k(p, 'DIV', { slot: !0, class: !0 });
      var c = g(a);
      s = k(c, 'P', { id: !0, class: !0 });
      var i = g(s);
      (n = h(i, 'July 7, 2020')), i.forEach(o), c.forEach(o), this.h();
    },
    h() {
      u(s, 'id', (l = e[0])),
        u(s, 'class', 'svelte-10cpbvu'),
        u(a, 'slot', 'beforeOverlay'),
        u(a, 'class', 'overlay before svelte-10cpbvu');
    },
    m(p, c) {
      b(p, a, c), r(a, s), r(s, n);
    },
    p(p, c) {
      c & 1 && l !== (l = p[0]) && u(s, 'id', l);
    },
    d(p) {
      p && o(a);
    },
  };
}
function se(e) {
  let a, s, n, l;
  return {
    c() {
      (a = f('div')), (s = f('p')), (n = v('Oct. 20, 2020')), this.h();
    },
    l(p) {
      a = k(p, 'DIV', { slot: !0, class: !0 });
      var c = g(a);
      s = k(c, 'P', { id: !0, class: !0 });
      var i = g(s);
      (n = h(i, 'Oct. 20, 2020')), i.forEach(o), c.forEach(o), this.h();
    },
    h() {
      u(s, 'id', (l = e[0])),
        u(s, 'class', 'svelte-10cpbvu'),
        u(a, 'slot', 'afterOverlay'),
        u(a, 'class', 'overlay after svelte-10cpbvu');
    },
    m(p, c) {
      b(p, a, c), r(a, s), r(s, n);
    },
    p(p, c) {
      c & 1 && l !== (l = p[0]) && u(s, 'id', l);
    },
    d(p) {
      p && o(a);
    },
  };
}
function ne(e) {
  let a, s, n;
  return (
    (s = new $a({
      props: {
        beforeSrc: `${q}/images/before-after/myrne-before.jpg`,
        beforeAlt: 'Before the thing',
        afterSrc: `${q}/images/before-after/myrne-after.jpg`,
        afterAlt: 'After the thing',
        $$slots: {
          afterOverlay: [
            se,
            ({ description: l }) => ({ 0: l }),
            ({ description: l }) => (l ? 1 : 0),
          ],
          beforeOverlay: [
            ae,
            ({ description: l }) => ({ 0: l }),
            ({ description: l }) => (l ? 1 : 0),
          ],
        },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        (a = f('div')), F(s.$$.fragment), this.h();
      },
      l(l) {
        a = k(l, 'DIV', { class: !0 });
        var p = g(a);
        X(s.$$.fragment, p), p.forEach(o), this.h();
      },
      h() {
        u(a, 'class', 'custom-position');
      },
      m(l, p) {
        b(l, a, p), U(s, a, null), (n = !0);
      },
      p(l, p) {
        const c = {};
        p & 3 && (c.$$scope = { dirty: p, ctx: l }), s.$set(c);
      },
      i(l) {
        n || (j(s.$$.fragment, l), (n = !0));
      },
      o(l) {
        R(s.$$.fragment, l), (n = !1);
      },
      d(l) {
        l && o(a), G(s);
      },
    }
  );
}
function te(e) {
  let a, s, n, l;
  return {
    c() {
      (a = f('div')),
        (s = f('p')),
        (n = v(
          'On July 7, 2020, the base contained only a few transport vehicles.'
        )),
        this.h();
    },
    l(p) {
      a = k(p, 'DIV', { slot: !0, class: !0 });
      var c = g(a);
      s = k(c, 'P', { id: !0, class: !0 });
      var i = g(s);
      (n = h(
        i,
        'On July 7, 2020, the base contained only a few transport vehicles.'
      )),
        i.forEach(o),
        c.forEach(o),
        this.h();
    },
    h() {
      u(s, 'id', (l = e[0])),
        u(s, 'class', 'svelte-10cpbvu'),
        u(a, 'slot', 'beforeOverlay'),
        u(a, 'class', 'overlay short before svelte-10cpbvu');
    },
    m(p, c) {
      b(p, a, c), r(a, s), r(s, n);
    },
    p(p, c) {
      c & 1 && l !== (l = p[0]) && u(s, 'id', l);
    },
    d(p) {
      p && o(a);
    },
  };
}
function ee(e) {
  let a, s, n, l, p, c, i;
  return {
    c() {
      (a = f('div')),
        (s = f('div')),
        (n = f('p')),
        (l = v('But by October, tanks and artillery could be seen.')),
        (p = f('p')),
        (c = v(
          'In total, over 50 pieces of heavy machinery and 200 personnel are now based here.'
        )),
        this.h();
    },
    l($) {
      a = k($, 'DIV', { slot: !0, class: !0 });
      var M = g(a);
      s = k(M, 'DIV', { id: !0 });
      var T = g(s);
      n = k(T, 'P', { class: !0 });
      var B = g(n);
      (l = h(B, 'But by October, tanks and artillery could be seen.')),
        B.forEach(o),
        (p = k(T, 'P', { class: !0 }));
      var J = g(p);
      (c = h(
        J,
        'In total, over 50 pieces of heavy machinery and 200 personnel are now based here.'
      )),
        J.forEach(o),
        T.forEach(o),
        M.forEach(o),
        this.h();
    },
    h() {
      u(n, 'class', 'svelte-10cpbvu'),
        u(p, 'class', 'svelte-10cpbvu'),
        u(s, 'id', (i = e[0])),
        u(a, 'slot', 'afterOverlay'),
        u(a, 'class', 'overlay short after svelte-10cpbvu');
    },
    m($, M) {
      b($, a, M), r(a, s), r(s, n), r(n, l), r(s, p), r(p, c);
    },
    p($, M) {
      M & 1 && i !== (i = $[0]) && u(s, 'id', i);
    },
    d($) {
      $ && o(a);
    },
  };
}
function pe(e) {
  let a, s;
  return (
    (a = new $a({
      props: {
        beforeSrc: `${q}/images/before-after/myrne-before.jpg`,
        beforeAlt:
          'Satellite image of Russian base at Myrne taken on July 7, 2020.',
        afterSrc: `${q}/images/before-after/myrne-after.jpg`,
        afterAlt:
          'Satellite image of Russian base at Myrne taken on Oct. 20, 2020.',
        $$slots: {
          afterOverlay: [
            ee,
            ({ description: n }) => ({ 0: n }),
            ({ description: n }) => (n ? 1 : 0),
          ],
          beforeOverlay: [
            te,
            ({ description: n }) => ({ 0: n }),
            ({ description: n }) => (n ? 1 : 0),
          ],
        },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        F(a.$$.fragment);
      },
      l(n) {
        X(a.$$.fragment, n);
      },
      m(n, l) {
        U(a, n, l), (s = !0);
      },
      p(n, l) {
        const p = {};
        l & 3 && (p.$$scope = { dirty: l, ctx: n }), a.$set(p);
      },
      i(n) {
        s || (j(a.$$.fragment, n), (s = !0));
      },
      o(n) {
        R(a.$$.fragment, n), (s = !1);
      },
      d(n) {
        G(a, n);
      },
    }
  );
}
function oe(e) {
  let a,
    s,
    n,
    l,
    p,
    c,
    i,
    $,
    M = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/paths'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BeforeAfter</span>
  <span class="token attr-name">beforeSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-before.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">beforeAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on July 7, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">afterSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-after.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">afterAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on Oct. 20, 2020.<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span></code>`,
    T,
    B,
    J,
    P,
    w,
    Y,
    W,
    H,
    Z,
    N,
    K,
    D,
    y,
    V,
    L,
    E,
    C,
    I,
    d,
    O,
    z,
    na,
    la,
    Xa,
    fa,
    Ua,
    Ga,
    Pa,
    ca,
    Js = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/paths'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BeforeAfter</span>
  <span class="token attr-name">beforeSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-before.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">beforeAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on July 7, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">afterSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-after.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">afterAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on Oct. 20, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>wide<span class="token punctuation">"</span></span>
  <span class="token attr-name">height="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">400</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
<span class="token punctuation">/></span></span></code>`,
    Ja,
    ta,
    _,
    aa,
    ea,
    ra,
    rs,
    wa,
    ot = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/paths'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BeforeAfter</span>
  <span class="token attr-name">beforeSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-before.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">beforeAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on July 7, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">afterSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-after.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">afterAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on Oct. 20, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">handleColour</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#ff613b<span class="token punctuation">"</span></span>
  <span class="token attr-name">handleInactiveOpacity="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">0.6</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">handleMargin="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">0</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
<span class="token punctuation">/></span></span></code>`,
    is,
    ka,
    us,
    Na,
    Ea,
    Ns,
    qa,
    Vs,
    Hs,
    fs,
    Oa,
    lt = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/paths'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BeforeAfter</span>
  <span class="token attr-name">beforeSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-before.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">beforeAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on July 7, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">afterSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-after.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">afterAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on Oct. 20, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">offset="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">0.1</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
<span class="token punctuation">/></span></span></code>`,
    ks,
    ga,
    gs,
    Va,
    Aa,
    Ls,
    Ya,
    Ws,
    zs,
    ms,
    Sa,
    ct = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/paths'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BeforeAfter</span>
  <span class="token attr-name">beforeSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-before.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">beforeAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on July 7, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">afterSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-after.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">afterAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on Oct. 20, 2020.<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>caption<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>caption<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Photos by MAXAR Technologies, 2021.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BeforeAfter</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.caption</span> <span class="token punctuation">&#123;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 5px 0<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0.8rem<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,
    ds,
    ma,
    vs,
    Ha,
    ia,
    Fs,
    Ka,
    Xs,
    Us,
    Qa,
    Gs,
    qs,
    hs,
    ja,
    rt = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/paths'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BeforeAfter</span>
  <span class="token attr-name">beforeSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-before.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">beforeAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on July 7, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">afterSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-after.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">afterAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on Oct. 20, 2020.<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>beforeOverlay<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>overlay before<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>July 7, 2020<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Initially, this site was far smaller.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>afterOverlay<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>overlay after<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>Oct. 20, 2020<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>But then forces built up.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BeforeAfter</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.overlay</span> <span class="token punctuation">&#123;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token selector">h6,
    p</span> <span class="token punctuation">&#123;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    <span class="token selector">&amp;.after</span> <span class="token punctuation">&#123;</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    <span class="token property">max-width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,
    bs,
    da,
    _s,
    La,
    ua,
    Ys,
    Za,
    Ks,
    Qs,
    xa,
    Zs,
    xs,
    ys,
    Ia,
    it = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/paths'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BeforeAfter</span>
  <span class="token attr-name">beforeSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-before.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">beforeAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on July 7, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">afterSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-after.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">afterAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on Oct. 20, 2020.<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>beforeOverlay<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>July 7, 2020<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>afterOverlay<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Oct. 20, 2020<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BeforeAfter</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">:global</span> <span class="token punctuation">&#123;</span>
    <span class="token selector">section.photo.before-after .overlay-container</span> <span class="token punctuation">&#123;</span>
      <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,
    $s,
    va,
    ws,
    ha,
    sa,
    an,
    Ma,
    sn,
    nn,
    as,
    tn,
    en,
    Ca,
    pn,
    on,
    ln,
    pa,
    ss,
    cn,
    rn,
    ns,
    un,
    fn,
    ts,
    kn,
    gn,
    Es,
    Ra,
    ut = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/paths'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BeforeAfter</span>
  <span class="token attr-name">beforeSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-before.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">beforeAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on July 7, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">afterSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-after.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">afterAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on Oct. 20, 2020.<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- \u{1F447} Define the prop on each slot... --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">let:</span>description="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>id<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>beforeOverlay<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>id<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span><span class="token punctuation">></span></span>
      On July 7, 2020, the base contained only a few transport vehicles.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">let:</span>description="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>id<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>afterOverlay<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- \u{1F447} id can also be used on an element containing multiple text elements --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>id<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>But by October, tanks and artillery could be seen.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
        In total, over 50 pieces of heavy machinery and 200 personnel are now
        based here.
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BeforeAfter</span><span class="token punctuation">></span></span></code>`,
    Os,
    ba,
    As;
  return (
    (B = new ya({
      props: { $$slots: { default: [Xt] }, $$scope: { ctx: e } },
    })),
    (ta = new ya({
      props: { $$slots: { default: [Ut] }, $$scope: { ctx: e } },
    })),
    (ka = new ya({
      props: { $$slots: { default: [Gt] }, $$scope: { ctx: e } },
    })),
    (ga = new ya({
      props: { $$slots: { default: [qt] }, $$scope: { ctx: e } },
    })),
    (ma = new ya({
      props: { $$slots: { default: [Kt] }, $$scope: { ctx: e } },
    })),
    (da = new ya({
      props: { $$slots: { default: [xt] }, $$scope: { ctx: e } },
    })),
    (va = new ya({
      props: { $$slots: { default: [ne] }, $$scope: { ctx: e } },
    })),
    (ba = new ya({
      props: { $$slots: { default: [pe] }, $$scope: { ctx: e } },
    })),
    {
      c() {
        (a = f('section')),
          (s = f('h2')),
          (n = v(at)),
          (l = A()),
          (p = f('p')),
          (c = v(st)),
          (i = A()),
          ($ = f('pre')),
          (T = A()),
          F(B.$$.fragment),
          (J = A()),
          (P = f('section')),
          (w = f('p')),
          (Y = v('Adjust the size of the image by passing the ')),
          (W = f('code')),
          (H = v('width')),
          (Z = v(
            ' prop a class name corresponding to one of our well widths: '
          )),
          (N = f('code')),
          (K = v('wide')),
          (D = v(', ')),
          (y = f('code')),
          (V = v('wider')),
          (L = v(', ')),
          (E = f('code')),
          (C = v('widest')),
          (I = v(' or ')),
          (d = f('code')),
          (O = v('fluid')),
          (z = v('.')),
          (na = A()),
          (la = f('p')),
          (Xa = v('Adjust the height by passing a number of pixels to the ')),
          (fa = f('code')),
          (Ua = v('height')),
          (Ga = v(' prop.')),
          (Pa = A()),
          (ca = f('pre')),
          (Ja = A()),
          F(ta.$$.fragment),
          (_ = A()),
          (aa = f('section')),
          (ea = f('p')),
          (ra = v('Change the styling of the swipe handle.')),
          (rs = A()),
          (wa = f('pre')),
          (is = A()),
          F(ka.$$.fragment),
          (us = A()),
          (Na = f('section')),
          (Ea = f('p')),
          (Ns = v('Change the starting position of the swipe with the ')),
          (qa = f('code')),
          (Vs = v('offset')),
          (Hs = v(' prop.')),
          (fs = A()),
          (Oa = f('pre')),
          (ks = A()),
          F(ga.$$.fragment),
          (gs = A()),
          (Va = f('section')),
          (Aa = f('p')),
          (Ls = v('Add and style a caption with the ')),
          (Ya = f('code')),
          (Ws = v('caption')),
          (zs = v(' slot.')),
          (ms = A()),
          (Sa = f('pre')),
          (ds = A()),
          F(ma.$$.fragment),
          (vs = A()),
          (Ha = f('section')),
          (ia = f('p')),
          (Fs = v('Add overlays with the ')),
          (Ka = f('code')),
          (Xs = v('beforeOverlay')),
          (Us = v(' and ')),
          (Qa = f('code')),
          (Gs = v('afterOverlay')),
          (qs = v(' slots.')),
          (hs = A()),
          (ja = f('pre')),
          (bs = A()),
          F(da.$$.fragment),
          (_s = A()),
          (La = f('section')),
          (ua = f('p')),
          (Ys = v('Target the ')),
          (Za = f('code')),
          (Ks = v('.overlay-container')),
          (Qs = v(' with ')),
          (xa = f('code')),
          (Zs = v(':global')),
          (xs = v(' SCSS rules to change the overlay positioning.')),
          (ys = A()),
          (Ia = f('pre')),
          ($s = A()),
          F(va.$$.fragment),
          (ws = A()),
          (ha = f('section')),
          (sa = f('p')),
          (an = v('Use text elements in your overlays as ')),
          (Ma = f('a')),
          (sn = v('ARIA descriptions')),
          (nn = v(
            ' for your images by setting an ID on text elements within each overly with the '
          )),
          (as = f('code')),
          (tn = v('description')),
          (en = A()),
          (Ca = f('a')),
          (pn = v('slot prop')),
          (on = v('.')),
          (ln = A()),
          (pa = f('p')),
          (ss = f('strong')),
          (cn = v('\u{1F4A1} TIP:')),
          (rn = v(' You must always use the ')),
          (ns = f('code')),
          (un = v('beforeAlt')),
          (fn = v(' / ')),
          (ts = f('code')),
          (kn = v('afterAlt')),
          (gn = v(
            ' props to label your image for visually impaired readers, but you can use these descriptions to provide more information or context that the reader might also need.'
          )),
          (Es = A()),
          (Ra = f('pre')),
          (Os = A()),
          F(ba.$$.fragment),
          this.h();
      },
      l(t) {
        a = k(t, 'SECTION', {});
        var m = g(a);
        s = k(m, 'H2', {});
        var es = g(s);
        (n = h(es, at)), es.forEach(o), (l = S(m)), (p = k(m, 'P', {}));
        var ps = g(p);
        (c = h(ps, st)),
          ps.forEach(o),
          m.forEach(o),
          (i = S(t)),
          ($ = k(t, 'PRE', { class: !0 }));
        var Ss = g($);
        Ss.forEach(o),
          (T = S(t)),
          X(B.$$.fragment, t),
          (J = S(t)),
          (P = k(t, 'SECTION', {}));
        var Ta = g(P);
        w = k(Ta, 'P', {});
        var Q = g(w);
        (Y = h(Q, 'Adjust the size of the image by passing the ')),
          (W = k(Q, 'CODE', {}));
        var os = g(W);
        (H = h(os, 'width')),
          os.forEach(o),
          (Z = h(
            Q,
            ' prop a class name corresponding to one of our well widths: '
          )),
          (N = k(Q, 'CODE', {}));
        var ls = g(N);
        (K = h(ls, 'wide')),
          ls.forEach(o),
          (D = h(Q, ', ')),
          (y = k(Q, 'CODE', {}));
        var cs = g(y);
        (V = h(cs, 'wider')),
          cs.forEach(o),
          (L = h(Q, ', ')),
          (E = k(Q, 'CODE', {}));
        var _n = g(E);
        (C = h(_n, 'widest')),
          _n.forEach(o),
          (I = h(Q, ' or ')),
          (d = k(Q, 'CODE', {}));
        var yn = g(d);
        (O = h(yn, 'fluid')),
          yn.forEach(o),
          (z = h(Q, '.')),
          Q.forEach(o),
          (na = S(Ta)),
          (la = k(Ta, 'P', {}));
        var js = g(la);
        (Xa = h(js, 'Adjust the height by passing a number of pixels to the ')),
          (fa = k(js, 'CODE', {}));
        var $n = g(fa);
        (Ua = h($n, 'height')),
          $n.forEach(o),
          (Ga = h(js, ' prop.')),
          js.forEach(o),
          Ta.forEach(o),
          (Pa = S(t)),
          (ca = k(t, 'PRE', { class: !0 }));
        var ft = g(ca);
        ft.forEach(o),
          (Ja = S(t)),
          X(ta.$$.fragment, t),
          (_ = S(t)),
          (aa = k(t, 'SECTION', {}));
        var wn = g(aa);
        ea = k(wn, 'P', {});
        var En = g(ea);
        (ra = h(En, 'Change the styling of the swipe handle.')),
          En.forEach(o),
          wn.forEach(o),
          (rs = S(t)),
          (wa = k(t, 'PRE', { class: !0 }));
        var kt = g(wa);
        kt.forEach(o),
          (is = S(t)),
          X(ka.$$.fragment, t),
          (us = S(t)),
          (Na = k(t, 'SECTION', {}));
        var On = g(Na);
        Ea = k(On, 'P', {});
        var Is = g(Ea);
        (Ns = h(Is, 'Change the starting position of the swipe with the ')),
          (qa = k(Is, 'CODE', {}));
        var An = g(qa);
        (Vs = h(An, 'offset')),
          An.forEach(o),
          (Hs = h(Is, ' prop.')),
          Is.forEach(o),
          On.forEach(o),
          (fs = S(t)),
          (Oa = k(t, 'PRE', { class: !0 }));
        var gt = g(Oa);
        gt.forEach(o),
          (ks = S(t)),
          X(ga.$$.fragment, t),
          (gs = S(t)),
          (Va = k(t, 'SECTION', {}));
        var Sn = g(Va);
        Aa = k(Sn, 'P', {});
        var Ms = g(Aa);
        (Ls = h(Ms, 'Add and style a caption with the ')),
          (Ya = k(Ms, 'CODE', {}));
        var jn = g(Ya);
        (Ws = h(jn, 'caption')),
          jn.forEach(o),
          (zs = h(Ms, ' slot.')),
          Ms.forEach(o),
          Sn.forEach(o),
          (ms = S(t)),
          (Sa = k(t, 'PRE', { class: !0 }));
        var mt = g(Sa);
        mt.forEach(o),
          (ds = S(t)),
          X(ma.$$.fragment, t),
          (vs = S(t)),
          (Ha = k(t, 'SECTION', {}));
        var In = g(Ha);
        ia = k(In, 'P', {});
        var Wa = g(ia);
        (Fs = h(Wa, 'Add overlays with the ')), (Ka = k(Wa, 'CODE', {}));
        var Mn = g(Ka);
        (Xs = h(Mn, 'beforeOverlay')),
          Mn.forEach(o),
          (Us = h(Wa, ' and ')),
          (Qa = k(Wa, 'CODE', {}));
        var Cn = g(Qa);
        (Gs = h(Cn, 'afterOverlay')),
          Cn.forEach(o),
          (qs = h(Wa, ' slots.')),
          Wa.forEach(o),
          In.forEach(o),
          (hs = S(t)),
          (ja = k(t, 'PRE', { class: !0 }));
        var dt = g(ja);
        dt.forEach(o),
          (bs = S(t)),
          X(da.$$.fragment, t),
          (_s = S(t)),
          (La = k(t, 'SECTION', {}));
        var Rn = g(La);
        ua = k(Rn, 'P', {});
        var za = g(ua);
        (Ys = h(za, 'Target the ')), (Za = k(za, 'CODE', {}));
        var Tn = g(Za);
        (Ks = h(Tn, '.overlay-container')),
          Tn.forEach(o),
          (Qs = h(za, ' with ')),
          (xa = k(za, 'CODE', {}));
        var Bn = g(xa);
        (Zs = h(Bn, ':global')),
          Bn.forEach(o),
          (xs = h(za, ' SCSS rules to change the overlay positioning.')),
          za.forEach(o),
          Rn.forEach(o),
          (ys = S(t)),
          (Ia = k(t, 'PRE', { class: !0 }));
        var vt = g(Ia);
        vt.forEach(o),
          ($s = S(t)),
          X(va.$$.fragment, t),
          (ws = S(t)),
          (ha = k(t, 'SECTION', {}));
        var Cs = g(ha);
        sa = k(Cs, 'P', {});
        var _a = g(sa);
        (an = h(_a, 'Use text elements in your overlays as ')),
          (Ma = k(_a, 'A', { href: !0, rel: !0 }));
        var Dn = g(Ma);
        (sn = h(Dn, 'ARIA descriptions')),
          Dn.forEach(o),
          (nn = h(
            _a,
            ' for your images by setting an ID on text elements within each overly with the '
          )),
          (as = k(_a, 'CODE', {}));
        var Pn = g(as);
        (tn = h(Pn, 'description')),
          Pn.forEach(o),
          (en = S(_a)),
          (Ca = k(_a, 'A', { href: !0, rel: !0 }));
        var Jn = g(Ca);
        (pn = h(Jn, 'slot prop')),
          Jn.forEach(o),
          (on = h(_a, '.')),
          _a.forEach(o),
          (ln = S(Cs)),
          (pa = k(Cs, 'P', {}));
        var Ba = g(pa);
        ss = k(Ba, 'STRONG', {});
        var Nn = g(ss);
        (cn = h(Nn, '\u{1F4A1} TIP:')),
          Nn.forEach(o),
          (rn = h(Ba, ' You must always use the ')),
          (ns = k(Ba, 'CODE', {}));
        var Vn = g(ns);
        (un = h(Vn, 'beforeAlt')),
          Vn.forEach(o),
          (fn = h(Ba, ' / ')),
          (ts = k(Ba, 'CODE', {}));
        var Hn = g(ts);
        (kn = h(Hn, 'afterAlt')),
          Hn.forEach(o),
          (gn = h(
            Ba,
            ' props to label your image for visually impaired readers, but you can use these descriptions to provide more information or context that the reader might also need.'
          )),
          Ba.forEach(o),
          Cs.forEach(o),
          (Es = S(t)),
          (Ra = k(t, 'PRE', { class: !0 }));
        var ht = g(Ra);
        ht.forEach(o), (Os = S(t)), X(ba.$$.fragment, t), this.h();
      },
      h() {
        u($, 'class', 'language-svelte'),
          u(ca, 'class', 'language-svelte'),
          u(wa, 'class', 'language-svelte'),
          u(Oa, 'class', 'language-svelte'),
          u(Sa, 'class', 'language-svelte'),
          u(ja, 'class', 'language-svelte'),
          u(Ia, 'class', 'language-svelte'),
          u(
            Ma,
            'href',
            'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby'
          ),
          u(Ma, 'rel', 'nofollow'),
          u(Ca, 'href', 'https://svelte.dev/tutorial/slot-props'),
          u(Ca, 'rel', 'nofollow'),
          u(Ra, 'class', 'language-svelte');
      },
      m(t, m) {
        b(t, a, m),
          r(a, s),
          r(s, n),
          r(a, l),
          r(a, p),
          r(p, c),
          b(t, i, m),
          b(t, $, m),
          ($.innerHTML = M),
          b(t, T, m),
          U(B, t, m),
          b(t, J, m),
          b(t, P, m),
          r(P, w),
          r(w, Y),
          r(w, W),
          r(W, H),
          r(w, Z),
          r(w, N),
          r(N, K),
          r(w, D),
          r(w, y),
          r(y, V),
          r(w, L),
          r(w, E),
          r(E, C),
          r(w, I),
          r(w, d),
          r(d, O),
          r(w, z),
          r(P, na),
          r(P, la),
          r(la, Xa),
          r(la, fa),
          r(fa, Ua),
          r(la, Ga),
          b(t, Pa, m),
          b(t, ca, m),
          (ca.innerHTML = Js),
          b(t, Ja, m),
          U(ta, t, m),
          b(t, _, m),
          b(t, aa, m),
          r(aa, ea),
          r(ea, ra),
          b(t, rs, m),
          b(t, wa, m),
          (wa.innerHTML = ot),
          b(t, is, m),
          U(ka, t, m),
          b(t, us, m),
          b(t, Na, m),
          r(Na, Ea),
          r(Ea, Ns),
          r(Ea, qa),
          r(qa, Vs),
          r(Ea, Hs),
          b(t, fs, m),
          b(t, Oa, m),
          (Oa.innerHTML = lt),
          b(t, ks, m),
          U(ga, t, m),
          b(t, gs, m),
          b(t, Va, m),
          r(Va, Aa),
          r(Aa, Ls),
          r(Aa, Ya),
          r(Ya, Ws),
          r(Aa, zs),
          b(t, ms, m),
          b(t, Sa, m),
          (Sa.innerHTML = ct),
          b(t, ds, m),
          U(ma, t, m),
          b(t, vs, m),
          b(t, Ha, m),
          r(Ha, ia),
          r(ia, Fs),
          r(ia, Ka),
          r(Ka, Xs),
          r(ia, Us),
          r(ia, Qa),
          r(Qa, Gs),
          r(ia, qs),
          b(t, hs, m),
          b(t, ja, m),
          (ja.innerHTML = rt),
          b(t, bs, m),
          U(da, t, m),
          b(t, _s, m),
          b(t, La, m),
          r(La, ua),
          r(ua, Ys),
          r(ua, Za),
          r(Za, Ks),
          r(ua, Qs),
          r(ua, xa),
          r(xa, Zs),
          r(ua, xs),
          b(t, ys, m),
          b(t, Ia, m),
          (Ia.innerHTML = it),
          b(t, $s, m),
          U(va, t, m),
          b(t, ws, m),
          b(t, ha, m),
          r(ha, sa),
          r(sa, an),
          r(sa, Ma),
          r(Ma, sn),
          r(sa, nn),
          r(sa, as),
          r(as, tn),
          r(sa, en),
          r(sa, Ca),
          r(Ca, pn),
          r(sa, on),
          r(ha, ln),
          r(ha, pa),
          r(pa, ss),
          r(ss, cn),
          r(pa, rn),
          r(pa, ns),
          r(ns, un),
          r(pa, fn),
          r(pa, ts),
          r(ts, kn),
          r(pa, gn),
          b(t, Es, m),
          b(t, Ra, m),
          (Ra.innerHTML = ut),
          b(t, Os, m),
          U(ba, t, m),
          (As = !0);
      },
      p(t, [m]) {
        const es = {};
        m & 2 && (es.$$scope = { dirty: m, ctx: t }), B.$set(es);
        const ps = {};
        m & 2 && (ps.$$scope = { dirty: m, ctx: t }), ta.$set(ps);
        const Ss = {};
        m & 2 && (Ss.$$scope = { dirty: m, ctx: t }), ka.$set(Ss);
        const Ta = {};
        m & 2 && (Ta.$$scope = { dirty: m, ctx: t }), ga.$set(Ta);
        const Q = {};
        m & 2 && (Q.$$scope = { dirty: m, ctx: t }), ma.$set(Q);
        const os = {};
        m & 2 && (os.$$scope = { dirty: m, ctx: t }), da.$set(os);
        const ls = {};
        m & 2 && (ls.$$scope = { dirty: m, ctx: t }), va.$set(ls);
        const cs = {};
        m & 2 && (cs.$$scope = { dirty: m, ctx: t }), ba.$set(cs);
      },
      i(t) {
        As ||
          (j(B.$$.fragment, t),
          j(ta.$$.fragment, t),
          j(ka.$$.fragment, t),
          j(ga.$$.fragment, t),
          j(ma.$$.fragment, t),
          j(da.$$.fragment, t),
          j(va.$$.fragment, t),
          j(ba.$$.fragment, t),
          (As = !0));
      },
      o(t) {
        R(B.$$.fragment, t),
          R(ta.$$.fragment, t),
          R(ka.$$.fragment, t),
          R(ga.$$.fragment, t),
          R(ma.$$.fragment, t),
          R(da.$$.fragment, t),
          R(va.$$.fragment, t),
          R(ba.$$.fragment, t),
          (As = !1);
      },
      d(t) {
        t && o(a),
          t && o(i),
          t && o($),
          t && o(T),
          G(B, t),
          t && o(J),
          t && o(P),
          t && o(Pa),
          t && o(ca),
          t && o(Ja),
          G(ta, t),
          t && o(_),
          t && o(aa),
          t && o(rs),
          t && o(wa),
          t && o(is),
          G(ka, t),
          t && o(us),
          t && o(Na),
          t && o(fs),
          t && o(Oa),
          t && o(ks),
          G(ga, t),
          t && o(gs),
          t && o(Va),
          t && o(ms),
          t && o(Sa),
          t && o(ds),
          G(ma, t),
          t && o(vs),
          t && o(Ha),
          t && o(hs),
          t && o(ja),
          t && o(bs),
          G(da, t),
          t && o(_s),
          t && o(La),
          t && o(ys),
          t && o(Ia),
          t && o($s),
          G(va, t),
          t && o(ws),
          t && o(ha),
          t && o(Es),
          t && o(Ra),
          t && o(Os),
          G(ba, t);
      },
    }
  );
}
const le = {
    title: 'BeforeAfter',
    description: 'A before and after image comparison component.',
    slug: 'before-after',
  },
  { title: at, description: st, slug: fe } = le;
class ke extends nt {
  constructor(a) {
    super(), tt(this, a, null, oe, et, {});
  }
}
export { ke as default, le as metadata };
