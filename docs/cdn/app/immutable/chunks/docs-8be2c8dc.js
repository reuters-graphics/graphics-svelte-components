import {
  S as st,
  i as tt,
  s as et,
  e as f,
  k as A,
  l as Pn,
  c as k,
  a as g,
  m as S,
  d as o,
  Y as Tn,
  b as u,
  f as oa,
  g as b,
  J as r,
  V as x,
  a3 as Ls,
  q as j,
  T as bt,
  a0 as _t,
  G as vs,
  H as ds,
  I as hs,
  o as R,
  n as Bn,
  p as Dn,
  M as Ws,
  a4 as pt,
  $ as yt,
  W as $t,
  F as bs,
  a5 as zs,
  X as Fs,
  t as d,
  w as F,
  h,
  x as X,
  y as U,
  B as G,
  E as Da,
} from './index-044d379f.js';
import { D as ya } from './index-42cc7f4d.js';
import { i as Et, a as Jn, r as wt } from './main-fdca696c.js';
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
var Xs = 0 / 0,
  It = /^[-+]0x[0-9a-f]+$/i,
  Mt = /^0b[01]+$/i,
  Ct = /^0o[0-7]+$/i,
  Rt = parseInt;
function Us(e) {
  if (typeof e == 'number') return e;
  if (Et(e)) return Xs;
  if (Jn(e)) {
    var a = typeof e.valueOf == 'function' ? e.valueOf() : e;
    e = Jn(a) ? a + '' : a;
  }
  if (typeof e != 'string') return e === 0 ? e : +e;
  e = jt(e);
  var n = Mt.test(e);
  return n || Ct.test(e) ? Rt(e.slice(2), n ? 2 : 8) : It.test(e) ? Xs : +e;
}
var Tt = function () {
    return wt.Date.now();
  },
  ms = Tt,
  Bt = 'Expected a function',
  Dt = Math.max,
  Pt = Math.min;
function Jt(e, a, n) {
  var s,
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
  (a = Us(a) || 0),
    Jn(n) &&
      ((T = !!n.leading),
      (B = 'maxWait' in n),
      (p = B ? Dt(Us(n.maxWait) || 0, a) : p),
      (J = 'trailing' in n ? !!n.trailing : J));
  function P(y) {
    var V = s,
      L = l;
    return (s = l = void 0), (M = y), (c = e.apply(L, V)), c;
  }
  function E(y) {
    return (M = y), (i = setTimeout(H, a)), T ? P(y) : c;
  }
  function Y(y) {
    var V = y - $,
      L = y - M,
      w = a - V;
    return B ? Pt(w, p - L) : w;
  }
  function W(y) {
    var V = y - $,
      L = y - M;
    return $ === void 0 || V >= a || V < 0 || (B && L >= p);
  }
  function H() {
    var y = ms();
    if (W(y)) return Z(y);
    i = setTimeout(H, Y(y));
  }
  function Z(y) {
    return (i = void 0), J && s ? P(y) : ((s = l = void 0), c);
  }
  function N() {
    i !== void 0 && clearTimeout(i), (M = 0), (s = $ = l = i = void 0);
  }
  function K() {
    return i === void 0 ? c : Z(ms());
  }
  function D() {
    var y = ms(),
      V = W(y);
    if (((s = arguments), (l = this), ($ = y), V)) {
      if (i === void 0) return E($);
      if (B) return clearTimeout(i), (i = setTimeout(H, a)), P($);
    }
    return i === void 0 && (i = setTimeout(H, a)), c;
  }
  return (D.cancel = N), (D.flush = K), D;
}
var Nt = 'Expected a function';
function Vt(e, a, n) {
  var s = !0,
    l = !0;
  if (typeof e != 'function') throw new TypeError(Nt);
  return (
    Jn(n) &&
      ((s = 'leading' in n ? !!n.leading : s),
      (l = 'trailing' in n ? !!n.trailing : l)),
    Jt(e, a, { leading: s, maxWait: a, trailing: l })
  );
}
const { window: Fa } = $t,
  Ht = (e) => ({}),
  Gs = (e) => ({}),
  Lt = (e) => ({}),
  qs = (e) => ({ description: `${e[16]}-after-description` }),
  Wt = (e) => ({}),
  Ys = (e) => ({ description: `${e[16]}-before-description` });
function Ks(e) {
  let a,
    n,
    s,
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
    E,
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
    w = e[24].beforeOverlay && Qs(e),
    C = e[24].afterOverlay && Zs(e),
    I = e[24].caption && xs(e);
  return {
    c() {
      (a = f('section')),
        (n = f('figure')),
        (s = f('img')),
        (c = A()),
        (i = f('img')),
        (B = A()),
        w && w.c(),
        (J = A()),
        C && C.c(),
        (P = A()),
        (E = f('div')),
        (Y = f('div')),
        (W = A()),
        (H = f('div')),
        (K = A()),
        I && I.c(),
        (D = Pn()),
        this.h();
    },
    l(v) {
      a = k(v, 'SECTION', { class: !0, style: !0 });
      var O = g(a);
      n = k(O, 'FIGURE', { style: !0, class: !0, 'aria-labelledby': !0 });
      var z = g(n);
      (s = k(z, 'IMG', {
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
        w && w.l(z),
        (J = S(z)),
        C && C.l(z),
        (P = S(z)),
        (E = k(z, 'DIV', { tabindex: !0, class: !0, style: !0 }));
      var sa = g(E);
      (Y = k(sa, 'DIV', { class: !0 })),
        g(Y).forEach(o),
        (W = S(sa)),
        (H = k(sa, 'DIV', { class: !0 })),
        g(H).forEach(o),
        sa.forEach(o),
        z.forEach(o),
        O.forEach(o),
        (K = S(v)),
        I && I.l(v),
        (D = Pn()),
        this.h();
    },
    h() {
      Tn(s.src, (l = e[5])) || u(s, 'src', l),
        u(s, 'alt', e[6]),
        u(s, 'style', e[14]),
        u(s, 'class', 'after svelte-1fkuva'),
        u(
          s,
          'aria-describedby',
          (p = e[24].beforeOverlay && `${e[16]}-before`)
        ),
        Tn(i.src, ($ = e[3])) || u(i, 'src', $),
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
        u(E, 'tabindex', '0'),
        u(E, 'class', 'handle svelte-1fkuva'),
        oa(E, 'left', 'calc(' + e[0] * 100 + '% - 20px)'),
        oa(E, '--before-after-handle-colour', e[7]),
        oa(E, '--before-after-handle-inactive-opacity', e[8]),
        u(n, 'style', e[15]),
        u(n, 'class', 'before-after-container svelte-1fkuva'),
        u(n, 'aria-labelledby', (Z = e[24].caption && `${e[16]}-caption`)),
        u(a, 'class', (N = 'photo before-after ' + e[1] + ' svelte-1fkuva')),
        oa(a, 'height', e[2] + 'px');
    },
    m(v, O) {
      b(v, a, O),
        r(a, n),
        r(n, s),
        e[33](s),
        r(n, c),
        r(n, i),
        r(n, B),
        w && w.m(n, null),
        r(n, J),
        C && C.m(n, null),
        r(n, P),
        r(n, E),
        r(E, Y),
        r(E, W),
        r(E, H),
        e[35](n),
        b(v, K, O),
        I && I.m(v, O),
        b(v, D, O),
        (y = !0),
        V ||
          ((L = [
            x(s, 'mousedown', Ls(e[32])),
            x(s, 'load', e[20]),
            x(i, 'mousedown', Ls(e[31])),
            x(E, 'focus', e[17]),
            x(E, 'blur', e[18]),
            x(n, 'touchstart', e[22]),
            x(n, 'mousedown', e[22]),
          ]),
          (V = !0));
    },
    p(v, O) {
      (!y || (O[0] & 32 && !Tn(s.src, (l = v[5])))) && u(s, 'src', l),
        (!y || O[0] & 64) && u(s, 'alt', v[6]),
        (!y || O[0] & 16384) && u(s, 'style', v[14]),
        (!y ||
          (O[0] & 16777216 &&
            p !== (p = v[24].beforeOverlay && `${v[16]}-before`))) &&
          u(s, 'aria-describedby', p),
        (!y || (O[0] & 8 && !Tn(i.src, ($ = v[3])))) && u(i, 'src', $),
        (!y || O[0] & 16) && u(i, 'alt', v[4]),
        (!y ||
          (O[0] & 17412 &&
            M !==
              (M =
                'clip: rect(0 ' + v[10] + 'px ' + v[2] + 'px 0);' + v[14]))) &&
          u(i, 'style', M),
        (!y ||
          (O[0] & 16777216 &&
            T !== (T = v[24].afterOverlay && `${v[16]}-after`))) &&
          u(i, 'aria-describedby', T),
        v[24].beforeOverlay
          ? w
            ? (w.p(v, O), O[0] & 16777216 && j(w, 1))
            : ((w = Qs(v)), w.c(), j(w, 1), w.m(n, J))
          : w &&
            (Bn(),
            R(w, 1, 1, () => {
              w = null;
            }),
            Dn()),
        v[24].afterOverlay
          ? C
            ? (C.p(v, O), O[0] & 16777216 && j(C, 1))
            : ((C = Zs(v)), C.c(), j(C, 1), C.m(n, P))
          : C &&
            (Bn(),
            R(C, 1, 1, () => {
              C = null;
            }),
            Dn()),
        (!y || O[0] & 1) && oa(E, 'left', 'calc(' + v[0] * 100 + '% - 20px)'),
        (!y || O[0] & 128) && oa(E, '--before-after-handle-colour', v[7]),
        (!y || O[0] & 256) &&
          oa(E, '--before-after-handle-inactive-opacity', v[8]),
        (!y || O[0] & 32768) && u(n, 'style', v[15]),
        (!y ||
          (O[0] & 16777216 &&
            Z !== (Z = v[24].caption && `${v[16]}-caption`))) &&
          u(n, 'aria-labelledby', Z),
        (!y ||
          (O[0] & 2 &&
            N !== (N = 'photo before-after ' + v[1] + ' svelte-1fkuva'))) &&
          u(a, 'class', N),
        (!y || O[0] & 4) && oa(a, 'height', v[2] + 'px'),
        v[24].caption
          ? I
            ? (I.p(v, O), O[0] & 16777216 && j(I, 1))
            : ((I = xs(v)), I.c(), j(I, 1), I.m(D.parentNode, D))
          : I &&
            (Bn(),
            R(I, 1, 1, () => {
              I = null;
            }),
            Dn());
    },
    i(v) {
      y || (j(w), j(C), j(I), (y = !0));
    },
    o(v) {
      R(w), R(C), R(I), (y = !1);
    },
    d(v) {
      v && o(a),
        e[33](null),
        w && w.d(),
        C && C.d(),
        e[35](null),
        v && o(K),
        I && I.d(v),
        v && o(D),
        (V = !1),
        pt(L);
    },
  };
}
function Qs(e) {
  let a, n, s;
  const l = e[30].beforeOverlay,
    p = bs(l, e, e[29], Ys);
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
      b(c, a, i), p && p.m(a, null), (n = _t(a, e[34].bind(a))), (s = !0);
    },
    p(c, i) {
      p &&
        p.p &&
        (!s || i[0] & 536870912) &&
        vs(p, l, c, c[29], s ? hs(l, c[29], i, Wt) : ds(c[29]), Ys),
        (!s || i[0] & 8192) &&
          oa(a, 'clip-path', 'inset(0 ' + c[13] + 'px 0 0)');
    },
    i(c) {
      s || (j(p, c), (s = !0));
    },
    o(c) {
      R(p, c), (s = !1);
    },
    d(c) {
      c && o(a), p && p.d(c), n();
    },
  };
}
function Zs(e) {
  let a, n;
  const s = e[30].afterOverlay,
    l = bs(s, e, e[29], qs);
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
      b(p, a, c), l && l.m(a, null), (n = !0);
    },
    p(p, c) {
      l &&
        l.p &&
        (!n || c[0] & 536870912) &&
        vs(l, s, p, p[29], n ? hs(s, p[29], c, Lt) : ds(p[29]), qs);
    },
    i(p) {
      n || (j(l, p), (n = !0));
    },
    o(p) {
      R(l, p), (n = !1);
    },
    d(p) {
      p && o(a), l && l.d(p);
    },
  };
}
function xs(e) {
  let a, n, s;
  const l = e[30].caption,
    p = bs(l, e, e[29], Gs);
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
      u(a, 'class', (n = Ws(e[1]) + ' svelte-1fkuva')),
        u(a, 'id', `${e[16]}-caption`);
    },
    m(c, i) {
      b(c, a, i), p && p.m(a, null), (s = !0);
    },
    p(c, i) {
      p &&
        p.p &&
        (!s || i[0] & 536870912) &&
        vs(p, l, c, c[29], s ? hs(l, c[29], i, Ht) : ds(c[29]), Gs),
        (!s || (i[0] & 2 && n !== (n = Ws(c[1]) + ' svelte-1fkuva'))) &&
          u(a, 'class', n);
    },
    i(c) {
      s || (j(p, c), (s = !0));
    },
    o(c) {
      R(p, c), (s = !1);
    },
    d(c) {
      c && o(a), p && p.d(c);
    },
  };
}
function zt(e) {
  let a,
    n,
    s,
    l,
    p = e[3] && e[4] && e[5] && e[6] && Ks(e);
  return {
    c() {
      p && p.c(), (a = Pn());
    },
    l(c) {
      p && p.l(c), (a = Pn());
    },
    m(c, i) {
      p && p.m(c, i),
        b(c, a, i),
        (n = !0),
        s ||
          ((l = [
            x(Fa, 'touchmove', e[21]),
            x(Fa, 'touchend', e[23]),
            x(Fa, 'mousemove', e[21]),
            x(Fa, 'mouseup', e[23]),
            x(Fa, 'resize', Vt(e[20], 100)),
            x(Fa, 'keydown', e[19]),
          ]),
          (s = !0));
    },
    p(c, i) {
      c[3] && c[4] && c[5] && c[6]
        ? p
          ? (p.p(c, i), i[0] & 120 && j(p, 1))
          : ((p = Ks(c)), p.c(), j(p, 1), p.m(a.parentNode, a))
        : p &&
          (Bn(),
          R(p, 1, 1, () => {
            p = null;
          }),
          Dn());
    },
    i(c) {
      n || (j(p), (n = !0));
    },
    o(c) {
      R(p), (n = !1);
    },
    d(c) {
      p && p.d(c), c && o(a), (s = !1), pt(l);
    },
  };
}
function Ft(e, a, n) {
  let s,
    l,
    p,
    c,
    i,
    { $$slots: $ = {}, $$scope: M } = a;
  const T = yt($);
  let { width: B = '' } = a,
    { height: J = 600 } = a,
    { beforeSrc: P = null } = a,
    { beforeAlt: E = null } = a,
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
    w = null,
    C = !1,
    I,
    v = 0,
    O = !1;
  const z = () => (O = !0),
    sa = () => (O = !1),
    la = (_) => {
      if (!O) return;
      const { keyCode: aa } = _,
        ea = N / s;
      aa === 39
        ? n(0, (D = Math.min(1 - ea, D + K)))
        : aa === 37 && n(0, (D = Math.max(0 + ea, D - K)));
    },
    Xa = (_) => {
      _.type === 'load'
        ? n(27, (w = _.target.getBoundingClientRect()))
        : n(27, (w = L.getBoundingClientRect()));
    },
    fa = (_) => {
      const aa = _.touches ? _.touches[0] : _;
      if (C && w) {
        const ea = I
          ? parseInt(window.getComputedStyle(I).marginLeft.slice(0, -2))
          : 0;
        let ra = aa.pageX - ea - w.left;
        (ra = ra < N ? N : ra > s - N ? s - N : ra), n(0, (D = ra / s));
      }
    },
    Ua = (_) => {
      (C = !0), fa(_);
    },
    Ga = () => {
      C = !1;
    };
  (P && E && Y && W) ||
    console.warn('Missing required src or alt props for BeforeAfter component');
  function Pa(_) {
    zs.call(this, e, _);
  }
  function ca(_) {
    zs.call(this, e, _);
  }
  function Nn(_) {
    Fs[_ ? 'unshift' : 'push'](() => {
      (L = _), n(11, L);
    });
  }
  function Ja() {
    (v = this.clientWidth), n(9, v);
  }
  function ta(_) {
    Fs[_ ? 'unshift' : 'push'](() => {
      (I = _), n(12, I);
    });
  }
  return (
    (e.$$set = (_) => {
      'width' in _ && n(1, (B = _.width)),
        'height' in _ && n(2, (J = _.height)),
        'beforeSrc' in _ && n(3, (P = _.beforeSrc)),
        'beforeAlt' in _ && n(4, (E = _.beforeAlt)),
        'afterSrc' in _ && n(5, (Y = _.afterSrc)),
        'afterAlt' in _ && n(6, (W = _.afterAlt)),
        'handleColour' in _ && n(7, (H = _.handleColour)),
        'handleInactiveOpacity' in _ && n(8, (Z = _.handleInactiveOpacity)),
        'handleMargin' in _ && n(25, (N = _.handleMargin)),
        'keyPressStep' in _ && n(26, (K = _.keyPressStep)),
        'offset' in _ && n(0, (D = _.offset)),
        '$$scope' in _ && n(29, (M = _.$$scope));
    }),
    (e.$$.update = () => {
      e.$$.dirty[0] & 134217728 && n(28, (s = (w && w.width) || 0)),
        e.$$.dirty[0] & 268435457 && n(10, (l = s * D)),
        e.$$.dirty[0] & 4 && n(15, (p = `width:100%;height:${J}px;`)),
        e.$$.dirty[0] & 1536 && n(13, (i = l < v ? Math.abs(l - v) : 0));
    }),
    n(14, (c = 'width:100%;height:100%;')),
    [
      D,
      B,
      J,
      P,
      E,
      Y,
      W,
      H,
      Z,
      v,
      l,
      L,
      I,
      i,
      c,
      p,
      V,
      z,
      sa,
      la,
      Xa,
      fa,
      Ua,
      Ga,
      T,
      N,
      K,
      w,
      s,
      M,
      $,
      Pa,
      ca,
      Nn,
      Ja,
      ta,
    ]
  );
}
class $a extends st {
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
  let a, n;
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
      l(s) {
        X(a.$$.fragment, s);
      },
      m(s, l) {
        U(a, s, l), (n = !0);
      },
      p: Da,
      i(s) {
        n || (j(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        R(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        G(a, s);
      },
    }
  );
}
function Ut(e) {
  let a, n;
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
      l(s) {
        X(a.$$.fragment, s);
      },
      m(s, l) {
        U(a, s, l), (n = !0);
      },
      p: Da,
      i(s) {
        n || (j(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        R(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        G(a, s);
      },
    }
  );
}
function Gt(e) {
  let a, n;
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
      l(s) {
        X(a.$$.fragment, s);
      },
      m(s, l) {
        U(a, s, l), (n = !0);
      },
      p: Da,
      i(s) {
        n || (j(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        R(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        G(a, s);
      },
    }
  );
}
function qt(e) {
  let a, n;
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
      l(s) {
        X(a.$$.fragment, s);
      },
      m(s, l) {
        U(a, s, l), (n = !0);
      },
      p: Da,
      i(s) {
        n || (j(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        R(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        G(a, s);
      },
    }
  );
}
function Yt(e) {
  let a, n;
  return {
    c() {
      (a = f('p')), (n = d('Photos by MAXAR Technologies, 2021.')), this.h();
    },
    l(s) {
      a = k(s, 'P', { slot: !0, class: !0 });
      var l = g(a);
      (n = h(l, 'Photos by MAXAR Technologies, 2021.')), l.forEach(o), this.h();
    },
    h() {
      u(a, 'slot', 'caption'), u(a, 'class', 'caption svelte-10cpbvu');
    },
    m(s, l) {
      b(s, a, l), r(a, n);
    },
    p: Da,
    d(s) {
      s && o(a);
    },
  };
}
function Kt(e) {
  let a, n;
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
      l(s) {
        X(a.$$.fragment, s);
      },
      m(s, l) {
        U(a, s, l), (n = !0);
      },
      p(s, l) {
        const p = {};
        l & 2 && (p.$$scope = { dirty: l, ctx: s }), a.$set(p);
      },
      i(s) {
        n || (j(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        R(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        G(a, s);
      },
    }
  );
}
function Qt(e) {
  let a, n, s, l, p, c;
  return {
    c() {
      (a = f('div')),
        (n = f('h6')),
        (s = d('July 7, 2020')),
        (l = A()),
        (p = f('p')),
        (c = d('Initially, this site was far smaller.')),
        this.h();
    },
    l(i) {
      a = k(i, 'DIV', { slot: !0, class: !0 });
      var $ = g(a);
      n = k($, 'H6', { class: !0 });
      var M = g(n);
      (s = h(M, 'July 7, 2020')),
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
      u(n, 'class', 'svelte-10cpbvu'),
        u(p, 'class', 'svelte-10cpbvu'),
        u(a, 'slot', 'beforeOverlay'),
        u(a, 'class', 'overlay before svelte-10cpbvu');
    },
    m(i, $) {
      b(i, a, $), r(a, n), r(n, s), r(a, l), r(a, p), r(p, c);
    },
    p: Da,
    d(i) {
      i && o(a);
    },
  };
}
function Zt(e) {
  let a, n, s, l, p, c;
  return {
    c() {
      (a = f('div')),
        (n = f('h6')),
        (s = d('Oct. 20, 2020')),
        (l = A()),
        (p = f('p')),
        (c = d('But then forces built up.')),
        this.h();
    },
    l(i) {
      a = k(i, 'DIV', { slot: !0, class: !0 });
      var $ = g(a);
      n = k($, 'H6', { class: !0 });
      var M = g(n);
      (s = h(M, 'Oct. 20, 2020')),
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
      u(n, 'class', 'svelte-10cpbvu'),
        u(p, 'class', 'svelte-10cpbvu'),
        u(a, 'slot', 'afterOverlay'),
        u(a, 'class', 'overlay after svelte-10cpbvu');
    },
    m(i, $) {
      b(i, a, $), r(a, n), r(n, s), r(a, l), r(a, p), r(p, c);
    },
    p: Da,
    d(i) {
      i && o(a);
    },
  };
}
function xt(e) {
  let a, n;
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
      l(s) {
        X(a.$$.fragment, s);
      },
      m(s, l) {
        U(a, s, l), (n = !0);
      },
      p(s, l) {
        const p = {};
        l & 2 && (p.$$scope = { dirty: l, ctx: s }), a.$set(p);
      },
      i(s) {
        n || (j(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        R(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        G(a, s);
      },
    }
  );
}
function ae(e) {
  let a, n, s, l;
  return {
    c() {
      (a = f('div')), (n = f('p')), (s = d('July 7, 2020')), this.h();
    },
    l(p) {
      a = k(p, 'DIV', { slot: !0, class: !0 });
      var c = g(a);
      n = k(c, 'P', { id: !0, class: !0 });
      var i = g(n);
      (s = h(i, 'July 7, 2020')), i.forEach(o), c.forEach(o), this.h();
    },
    h() {
      u(n, 'id', (l = e[0])),
        u(n, 'class', 'svelte-10cpbvu'),
        u(a, 'slot', 'beforeOverlay'),
        u(a, 'class', 'overlay before svelte-10cpbvu');
    },
    m(p, c) {
      b(p, a, c), r(a, n), r(n, s);
    },
    p(p, c) {
      c & 1 && l !== (l = p[0]) && u(n, 'id', l);
    },
    d(p) {
      p && o(a);
    },
  };
}
function ne(e) {
  let a, n, s, l;
  return {
    c() {
      (a = f('div')), (n = f('p')), (s = d('Oct. 20, 2020')), this.h();
    },
    l(p) {
      a = k(p, 'DIV', { slot: !0, class: !0 });
      var c = g(a);
      n = k(c, 'P', { id: !0, class: !0 });
      var i = g(n);
      (s = h(i, 'Oct. 20, 2020')), i.forEach(o), c.forEach(o), this.h();
    },
    h() {
      u(n, 'id', (l = e[0])),
        u(n, 'class', 'svelte-10cpbvu'),
        u(a, 'slot', 'afterOverlay'),
        u(a, 'class', 'overlay after svelte-10cpbvu');
    },
    m(p, c) {
      b(p, a, c), r(a, n), r(n, s);
    },
    p(p, c) {
      c & 1 && l !== (l = p[0]) && u(n, 'id', l);
    },
    d(p) {
      p && o(a);
    },
  };
}
function se(e) {
  let a, n, s;
  return (
    (n = new $a({
      props: {
        beforeSrc: `${q}/images/before-after/myrne-before.jpg`,
        beforeAlt: 'Before the thing',
        afterSrc: `${q}/images/before-after/myrne-after.jpg`,
        afterAlt: 'After the thing',
        $$slots: {
          afterOverlay: [
            ne,
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
        (a = f('div')), F(n.$$.fragment), this.h();
      },
      l(l) {
        a = k(l, 'DIV', { class: !0 });
        var p = g(a);
        X(n.$$.fragment, p), p.forEach(o), this.h();
      },
      h() {
        u(a, 'class', 'custom-position');
      },
      m(l, p) {
        b(l, a, p), U(n, a, null), (s = !0);
      },
      p(l, p) {
        const c = {};
        p & 3 && (c.$$scope = { dirty: p, ctx: l }), n.$set(c);
      },
      i(l) {
        s || (j(n.$$.fragment, l), (s = !0));
      },
      o(l) {
        R(n.$$.fragment, l), (s = !1);
      },
      d(l) {
        l && o(a), G(n);
      },
    }
  );
}
function te(e) {
  let a, n, s, l;
  return {
    c() {
      (a = f('div')),
        (n = f('p')),
        (s = d(
          'On July 7, 2020, the base contained only a few transport vehicles.'
        )),
        this.h();
    },
    l(p) {
      a = k(p, 'DIV', { slot: !0, class: !0 });
      var c = g(a);
      n = k(c, 'P', { id: !0, class: !0 });
      var i = g(n);
      (s = h(
        i,
        'On July 7, 2020, the base contained only a few transport vehicles.'
      )),
        i.forEach(o),
        c.forEach(o),
        this.h();
    },
    h() {
      u(n, 'id', (l = e[0])),
        u(n, 'class', 'svelte-10cpbvu'),
        u(a, 'slot', 'beforeOverlay'),
        u(a, 'class', 'overlay short before svelte-10cpbvu');
    },
    m(p, c) {
      b(p, a, c), r(a, n), r(n, s);
    },
    p(p, c) {
      c & 1 && l !== (l = p[0]) && u(n, 'id', l);
    },
    d(p) {
      p && o(a);
    },
  };
}
function ee(e) {
  let a, n, s, l, p, c, i;
  return {
    c() {
      (a = f('div')),
        (n = f('div')),
        (s = f('p')),
        (l = d('But by October, tanks and artillery could be seen.')),
        (p = f('p')),
        (c = d(
          'In total, over 50 pieces of heavy machinery and 200 personnel are now based here.'
        )),
        this.h();
    },
    l($) {
      a = k($, 'DIV', { slot: !0, class: !0 });
      var M = g(a);
      n = k(M, 'DIV', { id: !0 });
      var T = g(n);
      s = k(T, 'P', { class: !0 });
      var B = g(s);
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
      u(s, 'class', 'svelte-10cpbvu'),
        u(p, 'class', 'svelte-10cpbvu'),
        u(n, 'id', (i = e[0])),
        u(a, 'slot', 'afterOverlay'),
        u(a, 'class', 'overlay short after svelte-10cpbvu');
    },
    m($, M) {
      b($, a, M), r(a, n), r(n, s), r(s, l), r(n, p), r(p, c);
    },
    p($, M) {
      M & 1 && i !== (i = $[0]) && u(n, 'id', i);
    },
    d($) {
      $ && o(a);
    },
  };
}
function pe(e) {
  let a, n;
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
            ({ description: s }) => ({ 0: s }),
            ({ description: s }) => (s ? 1 : 0),
          ],
          beforeOverlay: [
            te,
            ({ description: s }) => ({ 0: s }),
            ({ description: s }) => (s ? 1 : 0),
          ],
        },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        F(a.$$.fragment);
      },
      l(s) {
        X(a.$$.fragment, s);
      },
      m(s, l) {
        U(a, s, l), (n = !0);
      },
      p(s, l) {
        const p = {};
        l & 3 && (p.$$scope = { dirty: l, ctx: s }), a.$set(p);
      },
      i(s) {
        n || (j(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        R(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        G(a, s);
      },
    }
  );
}
function oe(e) {
  let a,
    n,
    s,
    l,
    p,
    c,
    i,
    $,
    M = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
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
    E,
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
    w,
    C,
    I,
    v,
    O,
    z,
    sa,
    la,
    Xa,
    fa,
    Ua,
    Ga,
    Pa,
    ca,
    Nn = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
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
    rn,
    Ea,
    ot = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
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
    un,
    ka,
    fn,
    Na,
    wa,
    Vn,
    qa,
    Hn,
    Ln,
    kn,
    Oa,
    lt = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BeforeAfter</span>
  <span class="token attr-name">beforeSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-before.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">beforeAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on July 7, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">afterSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-after.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">afterAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on Oct. 20, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">offset="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">0.1</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
<span class="token punctuation">/></span></span></code>`,
    gn,
    ga,
    mn,
    Va,
    Aa,
    Wn,
    Ya,
    zn,
    Fn,
    vn,
    Sa,
    ct = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
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
    dn,
    ma,
    hn,
    Ha,
    ia,
    Xn,
    Ka,
    Un,
    Gn,
    Qa,
    qn,
    Yn,
    bn,
    ja,
    rt = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
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
    _n,
    va,
    yn,
    La,
    ua,
    Kn,
    Za,
    Qn,
    Zn,
    xa,
    xn,
    as,
    $n,
    Ia,
    it = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
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
    En,
    da,
    wn,
    ha,
    na,
    ns,
    Ma,
    ss,
    ts,
    an,
    es,
    ps,
    Ca,
    os,
    ls,
    cs,
    pa,
    nn,
    rs,
    is,
    sn,
    us,
    fs,
    tn,
    ks,
    gs,
    On,
    Ra,
    ut = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
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
    An,
    ba,
    Sn;
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
    (va = new ya({
      props: { $$slots: { default: [xt] }, $$scope: { ctx: e } },
    })),
    (da = new ya({
      props: { $$slots: { default: [se] }, $$scope: { ctx: e } },
    })),
    (ba = new ya({
      props: { $$slots: { default: [pe] }, $$scope: { ctx: e } },
    })),
    {
      c() {
        (a = f('section')),
          (n = f('h2')),
          (s = d(at)),
          (l = A()),
          (p = f('p')),
          (c = d(nt)),
          (i = A()),
          ($ = f('pre')),
          (T = A()),
          F(B.$$.fragment),
          (J = A()),
          (P = f('section')),
          (E = f('p')),
          (Y = d('Adjust the size of the image by passing the ')),
          (W = f('code')),
          (H = d('width')),
          (Z = d(
            ' prop a class name corresponding to one of our well widths: '
          )),
          (N = f('code')),
          (K = d('wide')),
          (D = d(', ')),
          (y = f('code')),
          (V = d('wider')),
          (L = d(', ')),
          (w = f('code')),
          (C = d('widest')),
          (I = d(' or ')),
          (v = f('code')),
          (O = d('fluid')),
          (z = d('.')),
          (sa = A()),
          (la = f('p')),
          (Xa = d('Adjust the height by passing a number of pixels to the ')),
          (fa = f('code')),
          (Ua = d('height')),
          (Ga = d(' prop.')),
          (Pa = A()),
          (ca = f('pre')),
          (Ja = A()),
          F(ta.$$.fragment),
          (_ = A()),
          (aa = f('section')),
          (ea = f('p')),
          (ra = d('Change the styling of the swipe handle.')),
          (rn = A()),
          (Ea = f('pre')),
          (un = A()),
          F(ka.$$.fragment),
          (fn = A()),
          (Na = f('section')),
          (wa = f('p')),
          (Vn = d('Change the starting position of the swipe with the ')),
          (qa = f('code')),
          (Hn = d('offset')),
          (Ln = d(' prop.')),
          (kn = A()),
          (Oa = f('pre')),
          (gn = A()),
          F(ga.$$.fragment),
          (mn = A()),
          (Va = f('section')),
          (Aa = f('p')),
          (Wn = d('Add and style a caption with the ')),
          (Ya = f('code')),
          (zn = d('caption')),
          (Fn = d(' slot.')),
          (vn = A()),
          (Sa = f('pre')),
          (dn = A()),
          F(ma.$$.fragment),
          (hn = A()),
          (Ha = f('section')),
          (ia = f('p')),
          (Xn = d('Add overlays with the ')),
          (Ka = f('code')),
          (Un = d('beforeOverlay')),
          (Gn = d(' and ')),
          (Qa = f('code')),
          (qn = d('afterOverlay')),
          (Yn = d(' slots.')),
          (bn = A()),
          (ja = f('pre')),
          (_n = A()),
          F(va.$$.fragment),
          (yn = A()),
          (La = f('section')),
          (ua = f('p')),
          (Kn = d('Target the ')),
          (Za = f('code')),
          (Qn = d('.overlay-container')),
          (Zn = d(' with ')),
          (xa = f('code')),
          (xn = d(':global')),
          (as = d(' SCSS rules to change the overlay positioning.')),
          ($n = A()),
          (Ia = f('pre')),
          (En = A()),
          F(da.$$.fragment),
          (wn = A()),
          (ha = f('section')),
          (na = f('p')),
          (ns = d('Use text elements in your overlays as ')),
          (Ma = f('a')),
          (ss = d('ARIA descriptions')),
          (ts = d(
            ' for your images by setting an ID on text elements within each overly with the '
          )),
          (an = f('code')),
          (es = d('description')),
          (ps = A()),
          (Ca = f('a')),
          (os = d('slot prop')),
          (ls = d('.')),
          (cs = A()),
          (pa = f('p')),
          (nn = f('strong')),
          (rs = d('\u{1F4A1} TIP:')),
          (is = d(' You must always use the ')),
          (sn = f('code')),
          (us = d('beforeAlt')),
          (fs = d(' / ')),
          (tn = f('code')),
          (ks = d('afterAlt')),
          (gs = d(
            ' props to label your image for visually impaired readers, but you can use these descriptions to provide more information or context that the reader might also need.'
          )),
          (On = A()),
          (Ra = f('pre')),
          (An = A()),
          F(ba.$$.fragment),
          this.h();
      },
      l(t) {
        a = k(t, 'SECTION', {});
        var m = g(a);
        n = k(m, 'H2', {});
        var en = g(n);
        (s = h(en, at)), en.forEach(o), (l = S(m)), (p = k(m, 'P', {}));
        var pn = g(p);
        (c = h(pn, nt)),
          pn.forEach(o),
          m.forEach(o),
          (i = S(t)),
          ($ = k(t, 'PRE', { class: !0 }));
        var jn = g($);
        jn.forEach(o),
          (T = S(t)),
          X(B.$$.fragment, t),
          (J = S(t)),
          (P = k(t, 'SECTION', {}));
        var Ta = g(P);
        E = k(Ta, 'P', {});
        var Q = g(E);
        (Y = h(Q, 'Adjust the size of the image by passing the ')),
          (W = k(Q, 'CODE', {}));
        var on = g(W);
        (H = h(on, 'width')),
          on.forEach(o),
          (Z = h(
            Q,
            ' prop a class name corresponding to one of our well widths: '
          )),
          (N = k(Q, 'CODE', {}));
        var ln = g(N);
        (K = h(ln, 'wide')),
          ln.forEach(o),
          (D = h(Q, ', ')),
          (y = k(Q, 'CODE', {}));
        var cn = g(y);
        (V = h(cn, 'wider')),
          cn.forEach(o),
          (L = h(Q, ', ')),
          (w = k(Q, 'CODE', {}));
        var _s = g(w);
        (C = h(_s, 'widest')),
          _s.forEach(o),
          (I = h(Q, ' or ')),
          (v = k(Q, 'CODE', {}));
        var ys = g(v);
        (O = h(ys, 'fluid')),
          ys.forEach(o),
          (z = h(Q, '.')),
          Q.forEach(o),
          (sa = S(Ta)),
          (la = k(Ta, 'P', {}));
        var In = g(la);
        (Xa = h(In, 'Adjust the height by passing a number of pixels to the ')),
          (fa = k(In, 'CODE', {}));
        var $s = g(fa);
        (Ua = h($s, 'height')),
          $s.forEach(o),
          (Ga = h(In, ' prop.')),
          In.forEach(o),
          Ta.forEach(o),
          (Pa = S(t)),
          (ca = k(t, 'PRE', { class: !0 }));
        var ft = g(ca);
        ft.forEach(o),
          (Ja = S(t)),
          X(ta.$$.fragment, t),
          (_ = S(t)),
          (aa = k(t, 'SECTION', {}));
        var Es = g(aa);
        ea = k(Es, 'P', {});
        var ws = g(ea);
        (ra = h(ws, 'Change the styling of the swipe handle.')),
          ws.forEach(o),
          Es.forEach(o),
          (rn = S(t)),
          (Ea = k(t, 'PRE', { class: !0 }));
        var kt = g(Ea);
        kt.forEach(o),
          (un = S(t)),
          X(ka.$$.fragment, t),
          (fn = S(t)),
          (Na = k(t, 'SECTION', {}));
        var Os = g(Na);
        wa = k(Os, 'P', {});
        var Mn = g(wa);
        (Vn = h(Mn, 'Change the starting position of the swipe with the ')),
          (qa = k(Mn, 'CODE', {}));
        var As = g(qa);
        (Hn = h(As, 'offset')),
          As.forEach(o),
          (Ln = h(Mn, ' prop.')),
          Mn.forEach(o),
          Os.forEach(o),
          (kn = S(t)),
          (Oa = k(t, 'PRE', { class: !0 }));
        var gt = g(Oa);
        gt.forEach(o),
          (gn = S(t)),
          X(ga.$$.fragment, t),
          (mn = S(t)),
          (Va = k(t, 'SECTION', {}));
        var Ss = g(Va);
        Aa = k(Ss, 'P', {});
        var Cn = g(Aa);
        (Wn = h(Cn, 'Add and style a caption with the ')),
          (Ya = k(Cn, 'CODE', {}));
        var js = g(Ya);
        (zn = h(js, 'caption')),
          js.forEach(o),
          (Fn = h(Cn, ' slot.')),
          Cn.forEach(o),
          Ss.forEach(o),
          (vn = S(t)),
          (Sa = k(t, 'PRE', { class: !0 }));
        var mt = g(Sa);
        mt.forEach(o),
          (dn = S(t)),
          X(ma.$$.fragment, t),
          (hn = S(t)),
          (Ha = k(t, 'SECTION', {}));
        var Is = g(Ha);
        ia = k(Is, 'P', {});
        var Wa = g(ia);
        (Xn = h(Wa, 'Add overlays with the ')), (Ka = k(Wa, 'CODE', {}));
        var Ms = g(Ka);
        (Un = h(Ms, 'beforeOverlay')),
          Ms.forEach(o),
          (Gn = h(Wa, ' and ')),
          (Qa = k(Wa, 'CODE', {}));
        var Cs = g(Qa);
        (qn = h(Cs, 'afterOverlay')),
          Cs.forEach(o),
          (Yn = h(Wa, ' slots.')),
          Wa.forEach(o),
          Is.forEach(o),
          (bn = S(t)),
          (ja = k(t, 'PRE', { class: !0 }));
        var vt = g(ja);
        vt.forEach(o),
          (_n = S(t)),
          X(va.$$.fragment, t),
          (yn = S(t)),
          (La = k(t, 'SECTION', {}));
        var Rs = g(La);
        ua = k(Rs, 'P', {});
        var za = g(ua);
        (Kn = h(za, 'Target the ')), (Za = k(za, 'CODE', {}));
        var Ts = g(Za);
        (Qn = h(Ts, '.overlay-container')),
          Ts.forEach(o),
          (Zn = h(za, ' with ')),
          (xa = k(za, 'CODE', {}));
        var Bs = g(xa);
        (xn = h(Bs, ':global')),
          Bs.forEach(o),
          (as = h(za, ' SCSS rules to change the overlay positioning.')),
          za.forEach(o),
          Rs.forEach(o),
          ($n = S(t)),
          (Ia = k(t, 'PRE', { class: !0 }));
        var dt = g(Ia);
        dt.forEach(o),
          (En = S(t)),
          X(da.$$.fragment, t),
          (wn = S(t)),
          (ha = k(t, 'SECTION', {}));
        var Rn = g(ha);
        na = k(Rn, 'P', {});
        var _a = g(na);
        (ns = h(_a, 'Use text elements in your overlays as ')),
          (Ma = k(_a, 'A', { href: !0, rel: !0 }));
        var Ds = g(Ma);
        (ss = h(Ds, 'ARIA descriptions')),
          Ds.forEach(o),
          (ts = h(
            _a,
            ' for your images by setting an ID on text elements within each overly with the '
          )),
          (an = k(_a, 'CODE', {}));
        var Ps = g(an);
        (es = h(Ps, 'description')),
          Ps.forEach(o),
          (ps = S(_a)),
          (Ca = k(_a, 'A', { href: !0, rel: !0 }));
        var Js = g(Ca);
        (os = h(Js, 'slot prop')),
          Js.forEach(o),
          (ls = h(_a, '.')),
          _a.forEach(o),
          (cs = S(Rn)),
          (pa = k(Rn, 'P', {}));
        var Ba = g(pa);
        nn = k(Ba, 'STRONG', {});
        var Ns = g(nn);
        (rs = h(Ns, '\u{1F4A1} TIP:')),
          Ns.forEach(o),
          (is = h(Ba, ' You must always use the ')),
          (sn = k(Ba, 'CODE', {}));
        var Vs = g(sn);
        (us = h(Vs, 'beforeAlt')),
          Vs.forEach(o),
          (fs = h(Ba, ' / ')),
          (tn = k(Ba, 'CODE', {}));
        var Hs = g(tn);
        (ks = h(Hs, 'afterAlt')),
          Hs.forEach(o),
          (gs = h(
            Ba,
            ' props to label your image for visually impaired readers, but you can use these descriptions to provide more information or context that the reader might also need.'
          )),
          Ba.forEach(o),
          Rn.forEach(o),
          (On = S(t)),
          (Ra = k(t, 'PRE', { class: !0 }));
        var ht = g(Ra);
        ht.forEach(o), (An = S(t)), X(ba.$$.fragment, t), this.h();
      },
      h() {
        u($, 'class', 'language-svelte'),
          u(ca, 'class', 'language-svelte'),
          u(Ea, 'class', 'language-svelte'),
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
          r(a, n),
          r(n, s),
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
          r(P, E),
          r(E, Y),
          r(E, W),
          r(W, H),
          r(E, Z),
          r(E, N),
          r(N, K),
          r(E, D),
          r(E, y),
          r(y, V),
          r(E, L),
          r(E, w),
          r(w, C),
          r(E, I),
          r(E, v),
          r(v, O),
          r(E, z),
          r(P, sa),
          r(P, la),
          r(la, Xa),
          r(la, fa),
          r(fa, Ua),
          r(la, Ga),
          b(t, Pa, m),
          b(t, ca, m),
          (ca.innerHTML = Nn),
          b(t, Ja, m),
          U(ta, t, m),
          b(t, _, m),
          b(t, aa, m),
          r(aa, ea),
          r(ea, ra),
          b(t, rn, m),
          b(t, Ea, m),
          (Ea.innerHTML = ot),
          b(t, un, m),
          U(ka, t, m),
          b(t, fn, m),
          b(t, Na, m),
          r(Na, wa),
          r(wa, Vn),
          r(wa, qa),
          r(qa, Hn),
          r(wa, Ln),
          b(t, kn, m),
          b(t, Oa, m),
          (Oa.innerHTML = lt),
          b(t, gn, m),
          U(ga, t, m),
          b(t, mn, m),
          b(t, Va, m),
          r(Va, Aa),
          r(Aa, Wn),
          r(Aa, Ya),
          r(Ya, zn),
          r(Aa, Fn),
          b(t, vn, m),
          b(t, Sa, m),
          (Sa.innerHTML = ct),
          b(t, dn, m),
          U(ma, t, m),
          b(t, hn, m),
          b(t, Ha, m),
          r(Ha, ia),
          r(ia, Xn),
          r(ia, Ka),
          r(Ka, Un),
          r(ia, Gn),
          r(ia, Qa),
          r(Qa, qn),
          r(ia, Yn),
          b(t, bn, m),
          b(t, ja, m),
          (ja.innerHTML = rt),
          b(t, _n, m),
          U(va, t, m),
          b(t, yn, m),
          b(t, La, m),
          r(La, ua),
          r(ua, Kn),
          r(ua, Za),
          r(Za, Qn),
          r(ua, Zn),
          r(ua, xa),
          r(xa, xn),
          r(ua, as),
          b(t, $n, m),
          b(t, Ia, m),
          (Ia.innerHTML = it),
          b(t, En, m),
          U(da, t, m),
          b(t, wn, m),
          b(t, ha, m),
          r(ha, na),
          r(na, ns),
          r(na, Ma),
          r(Ma, ss),
          r(na, ts),
          r(na, an),
          r(an, es),
          r(na, ps),
          r(na, Ca),
          r(Ca, os),
          r(na, ls),
          r(ha, cs),
          r(ha, pa),
          r(pa, nn),
          r(nn, rs),
          r(pa, is),
          r(pa, sn),
          r(sn, us),
          r(pa, fs),
          r(pa, tn),
          r(tn, ks),
          r(pa, gs),
          b(t, On, m),
          b(t, Ra, m),
          (Ra.innerHTML = ut),
          b(t, An, m),
          U(ba, t, m),
          (Sn = !0);
      },
      p(t, [m]) {
        const en = {};
        m & 2 && (en.$$scope = { dirty: m, ctx: t }), B.$set(en);
        const pn = {};
        m & 2 && (pn.$$scope = { dirty: m, ctx: t }), ta.$set(pn);
        const jn = {};
        m & 2 && (jn.$$scope = { dirty: m, ctx: t }), ka.$set(jn);
        const Ta = {};
        m & 2 && (Ta.$$scope = { dirty: m, ctx: t }), ga.$set(Ta);
        const Q = {};
        m & 2 && (Q.$$scope = { dirty: m, ctx: t }), ma.$set(Q);
        const on = {};
        m & 2 && (on.$$scope = { dirty: m, ctx: t }), va.$set(on);
        const ln = {};
        m & 2 && (ln.$$scope = { dirty: m, ctx: t }), da.$set(ln);
        const cn = {};
        m & 2 && (cn.$$scope = { dirty: m, ctx: t }), ba.$set(cn);
      },
      i(t) {
        Sn ||
          (j(B.$$.fragment, t),
          j(ta.$$.fragment, t),
          j(ka.$$.fragment, t),
          j(ga.$$.fragment, t),
          j(ma.$$.fragment, t),
          j(va.$$.fragment, t),
          j(da.$$.fragment, t),
          j(ba.$$.fragment, t),
          (Sn = !0));
      },
      o(t) {
        R(B.$$.fragment, t),
          R(ta.$$.fragment, t),
          R(ka.$$.fragment, t),
          R(ga.$$.fragment, t),
          R(ma.$$.fragment, t),
          R(va.$$.fragment, t),
          R(da.$$.fragment, t),
          R(ba.$$.fragment, t),
          (Sn = !1);
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
          t && o(rn),
          t && o(Ea),
          t && o(un),
          G(ka, t),
          t && o(fn),
          t && o(Na),
          t && o(kn),
          t && o(Oa),
          t && o(gn),
          G(ga, t),
          t && o(mn),
          t && o(Va),
          t && o(vn),
          t && o(Sa),
          t && o(dn),
          G(ma, t),
          t && o(hn),
          t && o(Ha),
          t && o(bn),
          t && o(ja),
          t && o(_n),
          G(va, t),
          t && o(yn),
          t && o(La),
          t && o($n),
          t && o(Ia),
          t && o(En),
          G(da, t),
          t && o(wn),
          t && o(ha),
          t && o(On),
          t && o(Ra),
          t && o(An),
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
  { title: at, description: nt, slug: fe } = le;
class ke extends st {
  constructor(a) {
    super(), tt(this, a, null, oe, et, {});
  }
}
export { ke as default, le as metadata };
