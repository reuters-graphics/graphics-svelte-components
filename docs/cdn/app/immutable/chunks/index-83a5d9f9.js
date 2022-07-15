function E() {}
function V(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function X(t) {
  return t && typeof t == 'object' && typeof t.then == 'function';
}
function O(t) {
  return t();
}
function z() {
  return Object.create(null);
}
function g(t) {
  t.forEach(O);
}
function Y(t) {
  return typeof t == 'function';
}
function kt(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
let x;
function vt(t, e) {
  return x || (x = document.createElement('a')), (x.href = e), t === x.href;
}
function Z(t) {
  return Object.keys(t).length === 0;
}
function tt(t, ...e) {
  if (t == null) return E;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Et(t, e, n) {
  t.$$.on_destroy.push(tt(e, n));
}
function At(t, e, n, i) {
  if (t) {
    const r = F(t, e, n, i);
    return t[0](r);
  }
}
function F(t, e, n, i) {
  return t[1] && i ? V(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function Tt(t, e, n, i) {
  if (t[2] && i) {
    const r = t[2](i(n));
    if (e.dirty === void 0) return r;
    if (typeof r == 'object') {
      const l = [],
        c = Math.max(e.dirty.length, r.length);
      for (let o = 0; o < c; o += 1) l[o] = e.dirty[o] | r[o];
      return l;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function Nt(t, e, n, i, r, l) {
  if (r) {
    const c = F(e, n, i, l);
    t.p(c, r);
  }
}
function Ct(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let i = 0; i < n; i++) e[i] = -1;
    return e;
  }
  return -1;
}
function St(t) {
  const e = {};
  for (const n in t) e[n] = !0;
  return e;
}
function jt(t) {
  return t == null ? '' : t;
}
const et = typeof window != 'undefined';
let Mt = et ? (t) => requestAnimationFrame(t) : E,
  A = !1;
function nt() {
  A = !0;
}
function it() {
  A = !1;
}
function rt(t, e, n, i) {
  for (; t < e; ) {
    const r = t + ((e - t) >> 1);
    n(r) <= i ? (t = r + 1) : (e = r);
  }
  return t;
}
function ct(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === 'HEAD') {
    const s = [];
    for (let u = 0; u < e.length; u++) {
      const f = e[u];
      f.claim_order !== void 0 && s.push(f);
    }
    e = s;
  }
  const n = new Int32Array(e.length + 1),
    i = new Int32Array(e.length);
  n[0] = -1;
  let r = 0;
  for (let s = 0; s < e.length; s++) {
    const u = e[s].claim_order,
      f =
        (r > 0 && e[n[r]].claim_order <= u
          ? r + 1
          : rt(1, r, (_) => e[n[_]].claim_order, u)) - 1;
    i[s] = n[f] + 1;
    const a = f + 1;
    (n[a] = s), (r = Math.max(a, r));
  }
  const l = [],
    c = [];
  let o = e.length - 1;
  for (let s = n[r] + 1; s != 0; s = i[s - 1]) {
    for (l.push(e[s - 1]); o >= s; o--) c.push(e[o]);
    o--;
  }
  for (; o >= 0; o--) c.push(e[o]);
  l.reverse(), c.sort((s, u) => s.claim_order - u.claim_order);
  for (let s = 0, u = 0; s < c.length; s++) {
    for (; u < l.length && c[s].claim_order >= l[u].claim_order; ) u++;
    const f = u < l.length ? l[u] : null;
    t.insertBefore(c[s], f);
  }
}
function st(t, e) {
  t.appendChild(e);
}
function lt(t, e) {
  if (A) {
    for (
      ct(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentElement !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child
      ? (e.claim_order !== void 0 || e.parentNode !== t) &&
        t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling);
  } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function ot(t, e, n) {
  t.insertBefore(e, n || null);
}
function ut(t, e, n) {
  A && !n
    ? lt(t, e)
    : (e.parentNode !== t || e.nextSibling != n) &&
      t.insertBefore(e, n || null);
}
function y(t) {
  t.parentNode.removeChild(t);
}
function Ht(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function j(t) {
  return document.createElement(t);
}
function G(t) {
  return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function M(t) {
  return document.createTextNode(t);
}
function Lt() {
  return M(' ');
}
function qt() {
  return M('');
}
function B(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function zt(t) {
  return function (e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function at(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Bt(t, e, n) {
  e in t ? (t[e] = typeof t[e] == 'boolean' && n === '' ? !0 : n) : at(t, e, n);
}
function ft(t) {
  return Array.from(t.childNodes);
}
function I(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function R(t, e, n, i, r = !1) {
  I(t);
  const l = (() => {
    for (let c = t.claim_info.last_index; c < t.length; c++) {
      const o = t[c];
      if (e(o)) {
        const s = n(o);
        return (
          s === void 0 ? t.splice(c, 1) : (t[c] = s),
          r || (t.claim_info.last_index = c),
          o
        );
      }
    }
    for (let c = t.claim_info.last_index - 1; c >= 0; c--) {
      const o = t[c];
      if (e(o)) {
        const s = n(o);
        return (
          s === void 0 ? t.splice(c, 1) : (t[c] = s),
          r
            ? s === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = c),
          o
        );
      }
    }
    return i();
  })();
  return (
    (l.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    l
  );
}
function J(t, e, n, i) {
  return R(
    t,
    (r) => r.nodeName === e,
    (r) => {
      const l = [];
      for (let c = 0; c < r.attributes.length; c++) {
        const o = r.attributes[c];
        n[o.name] || l.push(o.name);
      }
      l.forEach((c) => r.removeAttribute(c));
    },
    () => i(e)
  );
}
function Dt(t, e, n) {
  return J(t, e, n, j);
}
function Pt(t, e, n) {
  return J(t, e, n, G);
}
function dt(t, e) {
  return R(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const i = '' + e;
      if (n.data.startsWith(i)) {
        if (n.data.length !== i.length) return n.splitText(i.length);
      } else n.data = i;
    },
    () => M(e),
    !0
  );
}
function Wt(t) {
  return dt(t, ' ');
}
function D(t, e, n) {
  for (let i = n; i < t.length; i += 1) {
    const r = t[i];
    if (r.nodeType === 8 && r.textContent.trim() === e) return i;
  }
  return t.length;
}
function Ot(t, e) {
  const n = D(t, 'HTML_TAG_START', 0),
    i = D(t, 'HTML_TAG_END', n);
  if (n === i) return new P(void 0, e);
  I(t);
  const r = t.splice(n, i - n + 1);
  y(r[0]), y(r[r.length - 1]);
  const l = r.slice(1, r.length - 1);
  for (const c of l)
    (c.claim_order = t.claim_info.total_claimed),
      (t.claim_info.total_claimed += 1);
  return new P(l, e);
}
function Ft(t, e) {
  (e = '' + e), t.wholeText !== e && (t.data = e);
}
function Gt(t, e, n, i) {
  n === null
    ? t.style.removeProperty(e)
    : t.style.setProperty(e, n, i ? 'important' : '');
}
let w;
function _t() {
  if (w === void 0) {
    w = !1;
    try {
      typeof window != 'undefined' && window.parent && window.parent.document;
    } catch (t) {
      w = !0;
    }
  }
  return w;
}
function It(t, e) {
  getComputedStyle(t).position === 'static' && (t.style.position = 'relative');
  const i = j('iframe');
  i.setAttribute(
    'style',
    'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;'
  ),
    i.setAttribute('aria-hidden', 'true'),
    (i.tabIndex = -1);
  const r = _t();
  let l;
  return (
    r
      ? ((i.src =
          "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>"),
        (l = B(window, 'message', (c) => {
          c.source === i.contentWindow && e();
        })))
      : ((i.src = 'about:blank'),
        (i.onload = () => {
          l = B(i.contentWindow, 'resize', e);
        })),
    st(t, i),
    () => {
      (r || (l && i.contentWindow)) && l(), y(i);
    }
  );
}
function Rt(t, e, n) {
  t.classList[n ? 'add' : 'remove'](e);
}
function ht(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  const r = document.createEvent('CustomEvent');
  return r.initCustomEvent(t, n, i, e), r;
}
function Jt(t, e = document.body) {
  return Array.from(e.querySelectorAll(t));
}
class mt {
  constructor(e = !1) {
    (this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null);
  }
  c(e) {
    this.h(e);
  }
  m(e, n, i = null) {
    this.e ||
      (this.is_svg ? (this.e = G(n.nodeName)) : (this.e = j(n.nodeName)),
      (this.t = n),
      this.c(e)),
      this.i(i);
  }
  h(e) {
    (this.e.innerHTML = e), (this.n = Array.from(this.e.childNodes));
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1) ot(this.t, this.n[n], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(y);
  }
}
class P extends mt {
  constructor(e, n = !1) {
    super(n), (this.e = this.n = null), (this.l = e);
  }
  c(e) {
    this.l ? (this.n = this.l) : super.c(e);
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1) ut(this.t, this.n[n], e);
  }
}
let b;
function d(t) {
  b = t;
}
function m() {
  if (!b) throw new Error('Function called outside component initialization');
  return b;
}
function Kt(t) {
  m().$$.on_mount.push(t);
}
function Qt(t) {
  m().$$.after_update.push(t);
}
function Ut() {
  const t = m();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const l = ht(e, n, { cancelable: i });
      return (
        r.slice().forEach((c) => {
          c.call(t, l);
        }),
        !l.defaultPrevented
      );
    }
    return !0;
  };
}
function Vt(t, e) {
  return m().$$.context.set(t, e), e;
}
function Xt(t) {
  return m().$$.context.get(t);
}
function Yt(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const p = [],
  W = [],
  k = [],
  N = [],
  K = Promise.resolve();
let C = !1;
function Q() {
  C || ((C = !0), K.then(H));
}
function Zt() {
  return Q(), K;
}
function S(t) {
  k.push(t);
}
function te(t) {
  N.push(t);
}
const T = new Set();
let $ = 0;
function H() {
  const t = b;
  do {
    for (; $ < p.length; ) {
      const e = p[$];
      $++, d(e), pt(e.$$);
    }
    for (d(null), p.length = 0, $ = 0; W.length; ) W.pop()();
    for (let e = 0; e < k.length; e += 1) {
      const n = k[e];
      T.has(n) || (T.add(n), n());
    }
    k.length = 0;
  } while (p.length);
  for (; N.length; ) N.pop()();
  (C = !1), T.clear(), d(t);
}
function pt(t) {
  if (t.fragment !== null) {
    t.update(), g(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(S);
  }
}
const v = new Set();
let h;
function yt() {
  h = { r: 0, c: [], p: h };
}
function bt() {
  h.r || g(h.c), (h = h.p);
}
function U(t, e) {
  t && t.i && (v.delete(t), t.i(e));
}
function gt(t, e, n, i) {
  if (t && t.o) {
    if (v.has(t)) return;
    v.add(t),
      h.c.push(() => {
        v.delete(t), i && (n && t.d(1), i());
      }),
      t.o(e);
  }
}
function ee(t, e) {
  const n = (e.token = {});
  function i(r, l, c, o) {
    if (e.token !== n) return;
    e.resolved = o;
    let s = e.ctx;
    c !== void 0 && ((s = s.slice()), (s[c] = o));
    const u = r && (e.current = r)(s);
    let f = !1;
    e.block &&
      (e.blocks
        ? e.blocks.forEach((a, _) => {
            _ !== l &&
              a &&
              (yt(),
              gt(a, 1, 1, () => {
                e.blocks[_] === a && (e.blocks[_] = null);
              }),
              bt());
          })
        : e.block.d(1),
      u.c(),
      U(u, 1),
      u.m(e.mount(), e.anchor),
      (f = !0)),
      (e.block = u),
      e.blocks && (e.blocks[l] = u),
      f && H();
  }
  if (X(t)) {
    const r = m();
    if (
      (t.then(
        (l) => {
          d(r), i(e.then, 1, e.value, l), d(null);
        },
        (l) => {
          if ((d(r), i(e.catch, 2, e.error, l), d(null), !e.hasCatch)) throw l;
        }
      ),
      e.current !== e.pending)
    )
      return i(e.pending, 0), !0;
  } else {
    if (e.current !== e.then) return i(e.then, 1, e.value, t), !0;
    e.resolved = t;
  }
}
function ne(t, e, n) {
  const i = e.slice(),
    { resolved: r } = t;
  t.current === t.then && (i[t.value] = r),
    t.current === t.catch && (i[t.error] = r),
    t.block.p(i, n);
}
const ie =
  typeof window != 'undefined'
    ? window
    : typeof globalThis != 'undefined'
    ? globalThis
    : global;
function re(t, e) {
  const n = {},
    i = {},
    r = { $$scope: 1 };
  let l = t.length;
  for (; l--; ) {
    const c = t[l],
      o = e[l];
    if (o) {
      for (const s in c) s in o || (i[s] = 1);
      for (const s in o) r[s] || ((n[s] = o[s]), (r[s] = 1));
      t[l] = o;
    } else for (const s in c) r[s] = 1;
  }
  for (const c in i) c in n || (n[c] = void 0);
  return n;
}
function ce(t) {
  return typeof t == 'object' && t !== null ? t : {};
}
function se(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && ((t.$$.bound[i] = n), n(t.$$.ctx[i]));
}
function le(t) {
  t && t.c();
}
function oe(t, e) {
  t && t.l(e);
}
function xt(t, e, n, i) {
  const { fragment: r, on_mount: l, on_destroy: c, after_update: o } = t.$$;
  r && r.m(e, n),
    i ||
      S(() => {
        const s = l.map(O).filter(Y);
        c ? c.push(...s) : g(s), (t.$$.on_mount = []);
      }),
    o.forEach(S);
}
function wt(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (g(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function $t(t, e) {
  t.$$.dirty[0] === -1 && (p.push(t), Q(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function ue(t, e, n, i, r, l, c, o = [-1]) {
  const s = b;
  d(t);
  const u = (t.$$ = {
    fragment: null,
    ctx: null,
    props: l,
    update: E,
    not_equal: r,
    bound: z(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (s ? s.$$.context : [])),
    callbacks: z(),
    dirty: o,
    skip_bound: !1,
    root: e.target || s.$$.root,
  });
  c && c(u.root);
  let f = !1;
  if (
    ((u.ctx = n
      ? n(t, e.props || {}, (a, _, ...L) => {
          const q = L.length ? L[0] : _;
          return (
            u.ctx &&
              r(u.ctx[a], (u.ctx[a] = q)) &&
              (!u.skip_bound && u.bound[a] && u.bound[a](q), f && $t(t, a)),
            _
          );
        })
      : []),
    u.update(),
    (f = !0),
    g(u.before_update),
    (u.fragment = i ? i(u.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      nt();
      const a = ft(e.target);
      u.fragment && u.fragment.l(a), a.forEach(y);
    } else u.fragment && u.fragment.c();
    e.intro && U(t.$$.fragment),
      xt(t, e.target, e.anchor, e.customElement),
      it(),
      H();
  }
  d(s);
}
class ae {
  $destroy() {
    wt(this, 1), (this.$destroy = E);
  }
  $on(e, n) {
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      i.push(n),
      () => {
        const r = i.indexOf(n);
        r !== -1 && i.splice(r, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !Z(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
export {
  St as $,
  ce as A,
  wt as B,
  V as C,
  Zt as D,
  E,
  At as F,
  Nt as G,
  Ct as H,
  Tt as I,
  lt as J,
  G as K,
  Pt as L,
  jt as M,
  Xt as N,
  P as O,
  Jt as P,
  Ot as Q,
  Et as R,
  ae as S,
  S as T,
  Bt as U,
  B as V,
  ie as W,
  W as X,
  vt as Y,
  Rt as Z,
  Ht as _,
  ft as a,
  It as a0,
  ee as a1,
  ne as a2,
  zt as a3,
  g as a4,
  Yt as a5,
  se as a6,
  te as a7,
  Y as a8,
  Ut as a9,
  Mt as aa,
  at as b,
  Dt as c,
  y as d,
  j as e,
  Gt as f,
  ut as g,
  dt as h,
  ue as i,
  Ft as j,
  Lt as k,
  qt as l,
  Wt as m,
  yt as n,
  gt as o,
  bt as p,
  U as q,
  Vt as r,
  kt as s,
  M as t,
  Qt as u,
  Kt as v,
  le as w,
  oe as x,
  xt as y,
  re as z,
};
