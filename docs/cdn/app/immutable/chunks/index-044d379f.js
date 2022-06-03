function C() {}
function V(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function X(t) {
  return t && typeof t == 'object' && typeof t.then == 'function';
}
function P(t) {
  return t();
}
function z() {
  return Object.create(null);
}
function g(t) {
  t.forEach(P);
}
function Y(t) {
  return typeof t == 'function';
}
function wt(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
let x;
function $t(t, e) {
  return x || (x = document.createElement('a')), (x.href = e), t === x.href;
}
function Z(t) {
  return Object.keys(t).length === 0;
}
function tt(t, ...e) {
  if (t == null) return C;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function kt(t, e, n) {
  t.$$.on_destroy.push(tt(e, n));
}
function vt(t, e, n, i) {
  if (t) {
    const r = G(t, e, n, i);
    return t[0](r);
  }
}
function G(t, e, n, i) {
  return t[1] && i ? V(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function Et(t, e, n, i) {
  if (t[2] && i) {
    const r = t[2](i(n));
    if (e.dirty === void 0) return r;
    if (typeof r == 'object') {
      const l = [],
        s = Math.max(e.dirty.length, r.length);
      for (let o = 0; o < s; o += 1) l[o] = e.dirty[o] | r[o];
      return l;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function At(t, e, n, i, r, l) {
  if (r) {
    const s = G(e, n, i, l);
    t.p(s, r);
  }
}
function Tt(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let i = 0; i < n; i++) e[i] = -1;
    return e;
  }
  return -1;
}
function Nt(t) {
  const e = {};
  for (const n in t) e[n] = !0;
  return e;
}
function St(t) {
  return t == null ? '' : t;
}
let E = !1;
function et() {
  E = !0;
}
function nt() {
  E = !1;
}
function it(t, e, n, i) {
  for (; t < e; ) {
    const r = t + ((e - t) >> 1);
    n(r) <= i ? (t = r + 1) : (e = r);
  }
  return t;
}
function rt(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === 'HEAD') {
    const c = [];
    for (let u = 0; u < e.length; u++) {
      const f = e[u];
      f.claim_order !== void 0 && c.push(f);
    }
    e = c;
  }
  const n = new Int32Array(e.length + 1),
    i = new Int32Array(e.length);
  n[0] = -1;
  let r = 0;
  for (let c = 0; c < e.length; c++) {
    const u = e[c].claim_order,
      f =
        (r > 0 && e[n[r]].claim_order <= u
          ? r + 1
          : it(1, r, (_) => e[n[_]].claim_order, u)) - 1;
    i[c] = n[f] + 1;
    const a = f + 1;
    (n[a] = c), (r = Math.max(a, r));
  }
  const l = [],
    s = [];
  let o = e.length - 1;
  for (let c = n[r] + 1; c != 0; c = i[c - 1]) {
    for (l.push(e[c - 1]); o >= c; o--) s.push(e[o]);
    o--;
  }
  for (; o >= 0; o--) s.push(e[o]);
  l.reverse(), s.sort((c, u) => c.claim_order - u.claim_order);
  for (let c = 0, u = 0; c < s.length; c++) {
    for (; u < l.length && s[c].claim_order >= l[u].claim_order; ) u++;
    const f = u < l.length ? l[u] : null;
    t.insertBefore(s[c], f);
  }
}
function ct(t, e) {
  t.appendChild(e);
}
function st(t, e) {
  if (E) {
    for (
      rt(t),
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
function lt(t, e, n) {
  t.insertBefore(e, n || null);
}
function ot(t, e, n) {
  E && !n
    ? st(t, e)
    : (e.parentNode !== t || e.nextSibling != n) &&
      t.insertBefore(e, n || null);
}
function p(t) {
  t.parentNode.removeChild(t);
}
function Ct(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function j(t) {
  return document.createElement(t);
}
function I(t) {
  return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function M(t) {
  return document.createTextNode(t);
}
function jt() {
  return M(' ');
}
function Mt() {
  return M('');
}
function B(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function Ht(t) {
  return function (e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function ut(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Lt(t, e, n) {
  e in t ? (t[e] = typeof t[e] == 'boolean' && n === '' ? !0 : n) : ut(t, e, n);
}
function at(t) {
  return Array.from(t.childNodes);
}
function F(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function R(t, e, n, i, r = !1) {
  F(t);
  const l = (() => {
    for (let s = t.claim_info.last_index; s < t.length; s++) {
      const o = t[s];
      if (e(o)) {
        const c = n(o);
        return (
          c === void 0 ? t.splice(s, 1) : (t[s] = c),
          r || (t.claim_info.last_index = s),
          o
        );
      }
    }
    for (let s = t.claim_info.last_index - 1; s >= 0; s--) {
      const o = t[s];
      if (e(o)) {
        const c = n(o);
        return (
          c === void 0 ? t.splice(s, 1) : (t[s] = c),
          r
            ? c === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = s),
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
      for (let s = 0; s < r.attributes.length; s++) {
        const o = r.attributes[s];
        n[o.name] || l.push(o.name);
      }
      l.forEach((s) => r.removeAttribute(s));
    },
    () => i(e)
  );
}
function qt(t, e, n) {
  return J(t, e, n, j);
}
function zt(t, e, n) {
  return J(t, e, n, I);
}
function ft(t, e) {
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
function Bt(t) {
  return ft(t, ' ');
}
function W(t, e, n) {
  for (let i = n; i < t.length; i += 1) {
    const r = t[i];
    if (r.nodeType === 8 && r.textContent.trim() === e) return i;
  }
  return t.length;
}
function Wt(t, e) {
  const n = W(t, 'HTML_TAG_START', 0),
    i = W(t, 'HTML_TAG_END', n);
  if (n === i) return new D(void 0, e);
  F(t);
  const r = t.splice(n, i - n + 1);
  p(r[0]), p(r[r.length - 1]);
  const l = r.slice(1, r.length - 1);
  for (const s of l)
    (s.claim_order = t.claim_info.total_claimed),
      (t.claim_info.total_claimed += 1);
  return new D(l, e);
}
function Dt(t, e) {
  (e = '' + e), t.wholeText !== e && (t.data = e);
}
function Ot(t, e, n, i) {
  n === null
    ? t.style.removeProperty(e)
    : t.style.setProperty(e, n, i ? 'important' : '');
}
let w;
function dt() {
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
function Pt(t, e) {
  getComputedStyle(t).position === 'static' && (t.style.position = 'relative');
  const i = j('iframe');
  i.setAttribute(
    'style',
    'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;'
  ),
    i.setAttribute('aria-hidden', 'true'),
    (i.tabIndex = -1);
  const r = dt();
  let l;
  return (
    r
      ? ((i.src =
          "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>"),
        (l = B(window, 'message', (s) => {
          s.source === i.contentWindow && e();
        })))
      : ((i.src = 'about:blank'),
        (i.onload = () => {
          l = B(i.contentWindow, 'resize', e);
        })),
    ct(t, i),
    () => {
      (r || (l && i.contentWindow)) && l(), p(i);
    }
  );
}
function Gt(t, e, n) {
  t.classList[n ? 'add' : 'remove'](e);
}
function It(t, e = document.body) {
  return Array.from(e.querySelectorAll(t));
}
class _t {
  constructor(e = !1) {
    (this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null);
  }
  c(e) {
    this.h(e);
  }
  m(e, n, i = null) {
    this.e ||
      (this.is_svg ? (this.e = I(n.nodeName)) : (this.e = j(n.nodeName)),
      (this.t = n),
      this.c(e)),
      this.i(i);
  }
  h(e) {
    (this.e.innerHTML = e), (this.n = Array.from(this.e.childNodes));
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1) lt(this.t, this.n[n], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(p);
  }
}
class D extends _t {
  constructor(e, n = !1) {
    super(n), (this.e = this.n = null), (this.l = e);
  }
  c(e) {
    this.l ? (this.n = this.l) : super.c(e);
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1) ot(this.t, this.n[n], e);
  }
}
let y;
function d(t) {
  y = t;
}
function b() {
  if (!y) throw new Error('Function called outside component initialization');
  return y;
}
function Ft(t) {
  b().$$.on_mount.push(t);
}
function Rt(t) {
  b().$$.after_update.push(t);
}
function Jt(t, e) {
  return b().$$.context.set(t, e), e;
}
function Kt(t) {
  return b().$$.context.get(t);
}
function Qt(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const m = [],
  O = [],
  k = [],
  T = [],
  K = Promise.resolve();
let N = !1;
function Q() {
  N || ((N = !0), K.then(H));
}
function Ut() {
  return Q(), K;
}
function S(t) {
  k.push(t);
}
function Vt(t) {
  T.push(t);
}
const A = new Set();
let $ = 0;
function H() {
  const t = y;
  do {
    for (; $ < m.length; ) {
      const e = m[$];
      $++, d(e), ht(e.$$);
    }
    for (d(null), m.length = 0, $ = 0; O.length; ) O.pop()();
    for (let e = 0; e < k.length; e += 1) {
      const n = k[e];
      A.has(n) || (A.add(n), n());
    }
    k.length = 0;
  } while (m.length);
  for (; T.length; ) T.pop()();
  (N = !1), A.clear(), d(t);
}
function ht(t) {
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
function mt() {
  h = { r: 0, c: [], p: h };
}
function pt() {
  h.r || g(h.c), (h = h.p);
}
function U(t, e) {
  t && t.i && (v.delete(t), t.i(e));
}
function yt(t, e, n, i) {
  if (t && t.o) {
    if (v.has(t)) return;
    v.add(t),
      h.c.push(() => {
        v.delete(t), i && (n && t.d(1), i());
      }),
      t.o(e);
  }
}
function Xt(t, e) {
  const n = (e.token = {});
  function i(r, l, s, o) {
    if (e.token !== n) return;
    e.resolved = o;
    let c = e.ctx;
    s !== void 0 && ((c = c.slice()), (c[s] = o));
    const u = r && (e.current = r)(c);
    let f = !1;
    e.block &&
      (e.blocks
        ? e.blocks.forEach((a, _) => {
            _ !== l &&
              a &&
              (mt(),
              yt(a, 1, 1, () => {
                e.blocks[_] === a && (e.blocks[_] = null);
              }),
              pt());
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
    const r = b();
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
function Yt(t, e, n) {
  const i = e.slice(),
    { resolved: r } = t;
  t.current === t.then && (i[t.value] = r),
    t.current === t.catch && (i[t.error] = r),
    t.block.p(i, n);
}
const Zt =
  typeof window != 'undefined'
    ? window
    : typeof globalThis != 'undefined'
    ? globalThis
    : global;
function te(t, e) {
  const n = {},
    i = {},
    r = { $$scope: 1 };
  let l = t.length;
  for (; l--; ) {
    const s = t[l],
      o = e[l];
    if (o) {
      for (const c in s) c in o || (i[c] = 1);
      for (const c in o) r[c] || ((n[c] = o[c]), (r[c] = 1));
      t[l] = o;
    } else for (const c in s) r[c] = 1;
  }
  for (const s in i) s in n || (n[s] = void 0);
  return n;
}
function ee(t) {
  return typeof t == 'object' && t !== null ? t : {};
}
function ne(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && ((t.$$.bound[i] = n), n(t.$$.ctx[i]));
}
function ie(t) {
  t && t.c();
}
function re(t, e) {
  t && t.l(e);
}
function gt(t, e, n, i) {
  const { fragment: r, on_mount: l, on_destroy: s, after_update: o } = t.$$;
  r && r.m(e, n),
    i ||
      S(() => {
        const c = l.map(P).filter(Y);
        s ? s.push(...c) : g(c), (t.$$.on_mount = []);
      }),
    o.forEach(S);
}
function bt(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (g(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function xt(t, e) {
  t.$$.dirty[0] === -1 && (m.push(t), Q(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function ce(t, e, n, i, r, l, s, o = [-1]) {
  const c = y;
  d(t);
  const u = (t.$$ = {
    fragment: null,
    ctx: null,
    props: l,
    update: C,
    not_equal: r,
    bound: z(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    callbacks: z(),
    dirty: o,
    skip_bound: !1,
    root: e.target || c.$$.root,
  });
  s && s(u.root);
  let f = !1;
  if (
    ((u.ctx = n
      ? n(t, e.props || {}, (a, _, ...L) => {
          const q = L.length ? L[0] : _;
          return (
            u.ctx &&
              r(u.ctx[a], (u.ctx[a] = q)) &&
              (!u.skip_bound && u.bound[a] && u.bound[a](q), f && xt(t, a)),
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
      et();
      const a = at(e.target);
      u.fragment && u.fragment.l(a), a.forEach(p);
    } else u.fragment && u.fragment.c();
    e.intro && U(t.$$.fragment),
      gt(t, e.target, e.anchor, e.customElement),
      nt(),
      H();
  }
  d(c);
}
class se {
  $destroy() {
    bt(this, 1), (this.$destroy = C);
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
  Nt as $,
  ee as A,
  bt as B,
  V as C,
  Ut as D,
  C as E,
  vt as F,
  At as G,
  Tt as H,
  Et as I,
  st as J,
  I as K,
  zt as L,
  St as M,
  Kt as N,
  D as O,
  It as P,
  Wt as Q,
  kt as R,
  se as S,
  S as T,
  Lt as U,
  B as V,
  Zt as W,
  O as X,
  $t as Y,
  Gt as Z,
  Ct as _,
  at as a,
  Pt as a0,
  Xt as a1,
  Yt as a2,
  Ht as a3,
  g as a4,
  Qt as a5,
  ne as a6,
  Vt as a7,
  ut as b,
  qt as c,
  p as d,
  j as e,
  Ot as f,
  ot as g,
  ft as h,
  ce as i,
  Dt as j,
  jt as k,
  Mt as l,
  Bt as m,
  mt as n,
  yt as o,
  pt as p,
  U as q,
  Jt as r,
  wt as s,
  M as t,
  Rt as u,
  Ft as v,
  ie as w,
  re as x,
  gt as y,
  te as z,
};
