var __defProp = Object.defineProperty,
  __getOwnPropSymbols = Object.getOwnPropertySymbols,
  __hasOwnProp = Object.prototype.hasOwnProperty,
  __propIsEnum = Object.prototype.propertyIsEnumerable,
  __defNormalProp = (t, e, r) =>
    e in t
      ? __defProp(t, e, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r,
        })
      : (t[e] = r),
  __spreadValues = (t, e) => {
    for (var r in e || (e = {}))
      __hasOwnProp.call(e, r) && __defNormalProp(t, r, e[r]);
    if (__getOwnPropSymbols)
      for (var r of __getOwnPropSymbols(e))
        __propIsEnum.call(e, r) && __defNormalProp(t, r, e[r]);
    return t;
  },
  __require =
    'undefined' != typeof require
      ? require
      : (t) => {
          throw new Error('Dynamic require of "' + t + '" is not supported');
        };
function noop() {}
function assign(t, e) {
  for (const r in e) t[r] = e[r];
  return t;
}
function is_promise(t) {
  return t && 'object' == typeof t && 'function' == typeof t.then;
}
function run(t) {
  return t();
}
function blank_object() {
  return Object.create(null);
}
function run_all(t) {
  t.forEach(run);
}
function is_function(t) {
  return 'function' == typeof t;
}
function safe_not_equal(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && 'object' == typeof t) || 'function' == typeof t;
}
let src_url_equal_anchor;
function src_url_equal(t, e) {
  return (
    src_url_equal_anchor ||
      (src_url_equal_anchor = document.createElement('a')),
    (src_url_equal_anchor.href = e),
    t === src_url_equal_anchor.href
  );
}
function is_empty(t) {
  return 0 === Object.keys(t).length;
}
function subscribe(t, ...e) {
  if (null == t) return noop;
  const r = t.subscribe(...e);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function component_subscribe(t, e, r) {
  t.$$.on_destroy.push(subscribe(e, r));
}
function create_slot(t, e, r, i) {
  if (t) {
    const s = get_slot_context(t, e, r, i);
    return t[0](s);
  }
}
function get_slot_context(t, e, r, i) {
  return t[1] && i ? assign(r.ctx.slice(), t[1](i(e))) : r.ctx;
}
function get_slot_changes(t, e, r, i) {
  if (t[2] && i) {
    const s = t[2](i(r));
    if (void 0 === e.dirty) return s;
    if ('object' == typeof s) {
      const t = [],
        r = Math.max(e.dirty.length, s.length);
      for (let i = 0; i < r; i += 1) t[i] = e.dirty[i] | s[i];
      return t;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function update_slot_base(t, e, r, i, s, a) {
  if (s) {
    const n = get_slot_context(e, r, i, a);
    t.p(n, s);
  }
}
function get_all_dirty_from_scope(t) {
  if (t.ctx.length > 32) {
    const e = [],
      r = t.ctx.length / 32;
    for (let t = 0; t < r; t++) e[t] = -1;
    return e;
  }
  return -1;
}
function compute_slots(t) {
  const e = {};
  for (const r in t) e[r] = !0;
  return e;
}
function null_to_empty(t) {
  return null == t ? '' : t;
}
let is_hydrating = !1,
  crossorigin,
  current_component;
function start_hydrating() {
  is_hydrating = !0;
}
function end_hydrating() {
  is_hydrating = !1;
}
function upper_bound(t, e, r, i) {
  for (; t < e; ) {
    const s = t + ((e - t) >> 1);
    r(s) <= i ? (t = s + 1) : (e = s);
  }
  return t;
}
function init_hydrate(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if ('HEAD' === t.nodeName) {
    const t = [];
    for (let r = 0; r < e.length; r++) {
      const i = e[r];
      void 0 !== i.claim_order && t.push(i);
    }
    e = t;
  }
  const r = new Int32Array(e.length + 1),
    i = new Int32Array(e.length);
  r[0] = -1;
  let s = 0;
  for (let l = 0; l < e.length; l++) {
    const t = e[l].claim_order,
      a =
        (s > 0 && e[r[s]].claim_order <= t
          ? s + 1
          : upper_bound(1, s, (t) => e[r[t]].claim_order, t)) - 1;
    i[l] = r[a] + 1;
    const n = a + 1;
    (r[n] = l), (s = Math.max(n, s));
  }
  const a = [],
    n = [];
  let o = e.length - 1;
  for (let l = r[s] + 1; 0 != l; l = i[l - 1]) {
    for (a.push(e[l - 1]); o >= l; o--) n.push(e[o]);
    o--;
  }
  for (; o >= 0; o--) n.push(e[o]);
  a.reverse(), n.sort((t, e) => t.claim_order - e.claim_order);
  for (let l = 0, h = 0; l < n.length; l++) {
    for (; h < a.length && n[l].claim_order >= a[h].claim_order; ) h++;
    const e = h < a.length ? a[h] : null;
    t.insertBefore(n[l], e);
  }
}
function append(t, e) {
  t.appendChild(e);
}
function append_hydration(t, e) {
  if (is_hydrating) {
    for (
      init_hydrate(t),
        (void 0 === t.actual_end_child ||
          (null !== t.actual_end_child &&
            t.actual_end_child.parentElement !== t)) &&
          (t.actual_end_child = t.firstChild);
      null !== t.actual_end_child && void 0 === t.actual_end_child.claim_order;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child
      ? (void 0 === e.claim_order && e.parentNode === t) ||
        t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling);
  } else (e.parentNode === t && null === e.nextSibling) || t.appendChild(e);
}
function insert(t, e, r) {
  t.insertBefore(e, r || null);
}
function insert_hydration(t, e, r) {
  is_hydrating && !r
    ? append_hydration(t, e)
    : (e.parentNode === t && e.nextSibling == r) ||
      t.insertBefore(e, r || null);
}
function detach(t) {
  t.parentNode.removeChild(t);
}
function destroy_each(t, e) {
  for (let r = 0; r < t.length; r += 1) t[r] && t[r].d(e);
}
function element(t) {
  return document.createElement(t);
}
function svg_element(t) {
  return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function text(t) {
  return document.createTextNode(t);
}
function space() {
  return text(' ');
}
function empty() {
  return text('');
}
function listen(t, e, r, i) {
  return t.addEventListener(e, r, i), () => t.removeEventListener(e, r, i);
}
function attr(t, e, r) {
  null == r
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== r && t.setAttribute(e, r);
}
function set_custom_element_data(t, e, r) {
  e in t ? (t[e] = ('boolean' == typeof t[e] && '' === r) || r) : attr(t, e, r);
}
function children(t) {
  return Array.from(t.childNodes);
}
function init_claim_info(t) {
  void 0 === t.claim_info &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function claim_node(t, e, r, i, s = !1) {
  init_claim_info(t);
  const a = (() => {
    for (let i = t.claim_info.last_index; i < t.length; i++) {
      const a = t[i];
      if (e(a)) {
        const e = r(a);
        return (
          void 0 === e ? t.splice(i, 1) : (t[i] = e),
          s || (t.claim_info.last_index = i),
          a
        );
      }
    }
    for (let i = t.claim_info.last_index - 1; i >= 0; i--) {
      const a = t[i];
      if (e(a)) {
        const e = r(a);
        return (
          void 0 === e ? t.splice(i, 1) : (t[i] = e),
          s
            ? void 0 === e && t.claim_info.last_index--
            : (t.claim_info.last_index = i),
          a
        );
      }
    }
    return i();
  })();
  return (
    (a.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    a
  );
}
function claim_element_base(t, e, r, i) {
  return claim_node(
    t,
    (t) => t.nodeName === e,
    (t) => {
      const e = [];
      for (let i = 0; i < t.attributes.length; i++) {
        const s = t.attributes[i];
        r[s.name] || e.push(s.name);
      }
      e.forEach((e) => t.removeAttribute(e));
    },
    () => i(e)
  );
}
function claim_element(t, e, r) {
  return claim_element_base(t, e, r, element);
}
function claim_svg_element(t, e, r) {
  return claim_element_base(t, e, r, svg_element);
}
function claim_text(t, e) {
  return claim_node(
    t,
    (t) => 3 === t.nodeType,
    (t) => {
      const r = '' + e;
      if (t.data.startsWith(r)) {
        if (t.data.length !== r.length) return t.splitText(r.length);
      } else t.data = r;
    },
    () => text(e),
    !0
  );
}
function claim_space(t) {
  return claim_text(t, ' ');
}
function find_comment(t, e, r) {
  for (let i = r; i < t.length; i += 1) {
    const r = t[i];
    if (8 === r.nodeType && r.textContent.trim() === e) return i;
  }
  return t.length;
}
function claim_html_tag(t) {
  const e = find_comment(t, 'HTML_TAG_START', 0),
    r = find_comment(t, 'HTML_TAG_END', e);
  if (e === r) return new HtmlTagHydration();
  init_claim_info(t);
  const i = t.splice(e, r + 1);
  detach(i[0]), detach(i[i.length - 1]);
  const s = i.slice(1, i.length - 1);
  for (const a of s)
    (a.claim_order = t.claim_info.total_claimed),
      (t.claim_info.total_claimed += 1);
  return new HtmlTagHydration(s);
}
function set_data(t, e) {
  (e = '' + e), t.wholeText !== e && (t.data = e);
}
function set_style(t, e, r, i) {
  t.style.setProperty(e, r, i ? 'important' : '');
}
function is_crossorigin() {
  if (void 0 === crossorigin) {
    crossorigin = !1;
    try {
      'undefined' != typeof window && window.parent && window.parent.document;
    } catch (t) {
      crossorigin = !0;
    }
  }
  return crossorigin;
}
function add_resize_listener(t, e) {
  'static' === getComputedStyle(t).position && (t.style.position = 'relative');
  const r = element('iframe');
  r.setAttribute(
    'style',
    'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;'
  ),
    r.setAttribute('aria-hidden', 'true'),
    (r.tabIndex = -1);
  const i = is_crossorigin();
  let s;
  return (
    i
      ? ((r.src =
          "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>"),
        (s = listen(window, 'message', (t) => {
          t.source === r.contentWindow && e();
        })))
      : ((r.src = 'about:blank'),
        (r.onload = () => {
          s = listen(r.contentWindow, 'resize', e);
        })),
    append(t, r),
    () => {
      (i || (s && r.contentWindow)) && s(), detach(r);
    }
  );
}
function toggle_class(t, e, r) {
  t.classList[r ? 'add' : 'remove'](e);
}
function query_selector_all(t, e = document.body) {
  return Array.from(e.querySelectorAll(t));
}
class HtmlTag {
  constructor() {
    this.e = this.n = null;
  }
  c(t) {
    this.h(t);
  }
  m(t, e, r = null) {
    this.e || ((this.e = element(e.nodeName)), (this.t = e), this.c(t)),
      this.i(r);
  }
  h(t) {
    (this.e.innerHTML = t), (this.n = Array.from(this.e.childNodes));
  }
  i(t) {
    for (let e = 0; e < this.n.length; e += 1) insert(this.t, this.n[e], t);
  }
  p(t) {
    this.d(), this.h(t), this.i(this.a);
  }
  d() {
    this.n.forEach(detach);
  }
}
class HtmlTagHydration extends HtmlTag {
  constructor(t) {
    super(), (this.e = this.n = null), (this.l = t);
  }
  c(t) {
    this.l ? (this.n = this.l) : super.c(t);
  }
  i(t) {
    for (let e = 0; e < this.n.length; e += 1)
      insert_hydration(this.t, this.n[e], t);
  }
}
function set_current_component(t) {
  current_component = t;
}
function get_current_component() {
  if (!current_component)
    throw new Error('Function called outside component initialization');
  return current_component;
}
function onMount(t) {
  get_current_component().$$.on_mount.push(t);
}
function afterUpdate(t) {
  get_current_component().$$.after_update.push(t);
}
function setContext(t, e) {
  get_current_component().$$.context.set(t, e);
}
function getContext(t) {
  return get_current_component().$$.context.get(t);
}
const dirty_components = [],
  binding_callbacks = [],
  render_callbacks = [],
  flush_callbacks = [],
  resolved_promise = Promise.resolve();
let update_scheduled = !1;
function schedule_update() {
  update_scheduled || ((update_scheduled = !0), resolved_promise.then(flush));
}
function add_render_callback(t) {
  render_callbacks.push(t);
}
function add_flush_callback(t) {
  flush_callbacks.push(t);
}
let flushing = !1;
const seen_callbacks = new Set();
function flush() {
  if (!flushing) {
    flushing = !0;
    do {
      for (let t = 0; t < dirty_components.length; t += 1) {
        const e = dirty_components[t];
        set_current_component(e), update(e.$$);
      }
      for (
        set_current_component(null), dirty_components.length = 0;
        binding_callbacks.length;

      )
        binding_callbacks.pop()();
      for (let t = 0; t < render_callbacks.length; t += 1) {
        const e = render_callbacks[t];
        seen_callbacks.has(e) || (seen_callbacks.add(e), e());
      }
      render_callbacks.length = 0;
    } while (dirty_components.length);
    for (; flush_callbacks.length; ) flush_callbacks.pop()();
    (update_scheduled = !1), (flushing = !1), seen_callbacks.clear();
  }
}
function update(t) {
  if (null !== t.fragment) {
    t.update(), run_all(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(add_render_callback);
  }
}
const outroing = new Set();
let outros;
function group_outros() {
  outros = { r: 0, c: [], p: outros };
}
function check_outros() {
  outros.r || run_all(outros.c), (outros = outros.p);
}
function transition_in(t, e) {
  t && t.i && (outroing.delete(t), t.i(e));
}
function transition_out(t, e, r, i) {
  if (t && t.o) {
    if (outroing.has(t)) return;
    outroing.add(t),
      outros.c.push(() => {
        outroing.delete(t), i && (r && t.d(1), i());
      }),
      t.o(e);
  }
}
function handle_promise(t, e) {
  const r = (e.token = {});
  function i(t, i, s, a) {
    if (e.token !== r) return;
    e.resolved = a;
    let n = e.ctx;
    void 0 !== s && ((n = n.slice()), (n[s] = a));
    const o = t && (e.current = t)(n);
    let l = !1;
    e.block &&
      (e.blocks
        ? e.blocks.forEach((t, r) => {
            r !== i &&
              t &&
              (group_outros(),
              transition_out(t, 1, 1, () => {
                e.blocks[r] === t && (e.blocks[r] = null);
              }),
              check_outros());
          })
        : e.block.d(1),
      o.c(),
      transition_in(o, 1),
      o.m(e.mount(), e.anchor),
      (l = !0)),
      (e.block = o),
      e.blocks && (e.blocks[i] = o),
      l && flush();
  }
  if (is_promise(t)) {
    const r = get_current_component();
    if (
      (t.then(
        (t) => {
          set_current_component(r),
            i(e.then, 1, e.value, t),
            set_current_component(null);
        },
        (t) => {
          if (
            (set_current_component(r),
            i(e.catch, 2, e.error, t),
            set_current_component(null),
            !e.hasCatch)
          )
            throw t;
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
function update_await_block_branch(t, e, r) {
  const i = e.slice(),
    { resolved: s } = t;
  t.current === t.then && (i[t.value] = s),
    t.current === t.catch && (i[t.error] = s),
    t.block.p(i, r);
}
const globals =
  'undefined' != typeof window
    ? window
    : 'undefined' != typeof globalThis
    ? globalThis
    : global;
function get_spread_update(t, e) {
  const r = {},
    i = {},
    s = { $$scope: 1 };
  let a = t.length;
  for (; a--; ) {
    const n = t[a],
      o = e[a];
    if (o) {
      for (const t in n) t in o || (i[t] = 1);
      for (const t in o) s[t] || ((r[t] = o[t]), (s[t] = 1));
      t[a] = o;
    } else for (const t in n) s[t] = 1;
  }
  for (const n in i) n in r || (r[n] = void 0);
  return r;
}
function get_spread_object(t) {
  return 'object' == typeof t && null !== t ? t : {};
}
function bind(t, e, r) {
  const i = t.$$.props[e];
  void 0 !== i && ((t.$$.bound[i] = r), r(t.$$.ctx[i]));
}
function create_component(t) {
  t && t.c();
}
function claim_component(t, e) {
  t && t.l(e);
}
function mount_component(t, e, r, i) {
  const { fragment: s, on_mount: a, on_destroy: n, after_update: o } = t.$$;
  s && s.m(e, r),
    i ||
      add_render_callback(() => {
        const e = a.map(run).filter(is_function);
        n ? n.push(...e) : run_all(e), (t.$$.on_mount = []);
      }),
    o.forEach(add_render_callback);
}
function destroy_component(t, e) {
  const r = t.$$;
  null !== r.fragment &&
    (run_all(r.on_destroy),
    r.fragment && r.fragment.d(e),
    (r.on_destroy = r.fragment = null),
    (r.ctx = []));
}
function make_dirty(t, e) {
  -1 === t.$$.dirty[0] &&
    (dirty_components.push(t), schedule_update(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function init(t, e, r, i, s, a, n, o = [-1]) {
  const l = current_component;
  set_current_component(t);
  const h = (t.$$ = {
    fragment: null,
    ctx: null,
    props: a,
    update: noop,
    not_equal: s,
    bound: blank_object(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(l ? l.$$.context : e.context || []),
    callbacks: blank_object(),
    dirty: o,
    skip_bound: !1,
    root: e.target || l.$$.root,
  });
  n && n(h.root);
  let p = !1;
  if (
    ((h.ctx = r
      ? r(t, e.props || {}, (e, r, ...i) => {
          const a = i.length ? i[0] : r;
          return (
            h.ctx &&
              s(h.ctx[e], (h.ctx[e] = a)) &&
              (!h.skip_bound && h.bound[e] && h.bound[e](a),
              p && make_dirty(t, e)),
            r
          );
        })
      : []),
    h.update(),
    (p = !0),
    run_all(h.before_update),
    (h.fragment = !!i && i(h.ctx)),
    e.target)
  ) {
    if (e.hydrate) {
      start_hydrating();
      const t = children(e.target);
      h.fragment && h.fragment.l(t), t.forEach(detach);
    } else h.fragment && h.fragment.c();
    e.intro && transition_in(t.$$.fragment),
      mount_component(t, e.target, e.anchor, e.customElement),
      end_hydrating(),
      flush();
  }
  set_current_component(l);
}
class SvelteComponent {
  $destroy() {
    destroy_component(this, 1), (this.$destroy = noop);
  }
  $on(t, e) {
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      r.push(e),
      () => {
        const t = r.indexOf(e);
        -1 !== t && r.splice(t, 1);
      }
    );
  }
  $set(t) {
    this.$$set &&
      !is_empty(t) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
const subscriber_queue = [];
function writable(t, e = noop) {
  let r;
  const i = new Set();
  function s(e) {
    if (safe_not_equal(t, e) && ((t = e), r)) {
      const e = !subscriber_queue.length;
      for (const r of i) r[1](), subscriber_queue.push(r, t);
      if (e) {
        for (let t = 0; t < subscriber_queue.length; t += 2)
          subscriber_queue[t][0](subscriber_queue[t + 1]);
        subscriber_queue.length = 0;
      }
    }
  }
  return {
    set: s,
    update: function (e) {
      s(e(t));
    },
    subscribe: function (a, n = noop) {
      const o = [a, n];
      return (
        i.add(o),
        1 === i.size && (r = e(s) || noop),
        a(t),
        () => {
          i.delete(o), 0 === i.size && (r(), (r = null));
        }
      );
    },
  };
}
var commonjsGlobal =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {},
  marked$1 = { exports: {} };
marked$1.exports = (function () {
  function t(t, e) {
    for (var r = 0; r < e.length; r++) {
      var i = e[r];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function e(e, r, i) {
    return r && t(e.prototype, r), i && t(e, i), e;
  }
  function r(t, e) {
    if (t) {
      if ('string' == typeof t) return i(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      return (
        'Object' === r && t.constructor && (r = t.constructor.name),
        'Map' === r || 'Set' === r
          ? Array.from(t)
          : 'Arguments' === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? i(t, e)
          : void 0
      );
    }
  }
  function i(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
    return i;
  }
  function s(t, e) {
    var i =
      ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
    if (i) return (i = i.call(t)).next.bind(i);
    if (
      Array.isArray(t) ||
      (i = r(t)) ||
      (e && t && 'number' == typeof t.length)
    ) {
      i && (t = i);
      var s = 0;
      return function () {
        return s >= t.length ? { done: !0 } : { done: !1, value: t[s++] };
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
  }
  var a = { exports: {} };
  function n() {
    return {
      baseUrl: null,
      breaks: !1,
      extensions: null,
      gfm: !0,
      headerIds: !0,
      headerPrefix: '',
      highlight: null,
      langPrefix: 'language-',
      mangle: !0,
      pedantic: !1,
      renderer: null,
      sanitize: !1,
      sanitizer: null,
      silent: !1,
      smartLists: !1,
      smartypants: !1,
      tokenizer: null,
      walkTokens: null,
      xhtml: !1,
    };
  }
  function o(t) {
    a.exports.defaults = t;
  }
  a.exports = { defaults: n(), getDefaults: n, changeDefaults: o };
  var l = /[&<>"']/,
    h = /[&<>"']/g,
    p = /[<>"']|&(?!#?\w+;)/,
    u = /[<>"']|&(?!#?\w+;)/g,
    c = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
    f = function (t) {
      return c[t];
    };
  function m(t, e) {
    if (e) {
      if (l.test(t)) return t.replace(h, f);
    } else if (p.test(t)) return t.replace(u, f);
    return t;
  }
  var d = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
  function g(t) {
    return t.replace(d, function (t, e) {
      return 'colon' === (e = e.toLowerCase())
        ? ':'
        : '#' === e.charAt(0)
        ? 'x' === e.charAt(1)
          ? String.fromCharCode(parseInt(e.substring(2), 16))
          : String.fromCharCode(+e.substring(1))
        : '';
    });
  }
  var y = /(^|[^\[])\^/g;
  function v(t, e) {
    (t = t.source || t), (e = e || '');
    var r = {
      replace: function (e, i) {
        return (
          (i = (i = i.source || i).replace(y, '$1')), (t = t.replace(e, i)), r
        );
      },
      getRegex: function () {
        return new RegExp(t, e);
      },
    };
    return r;
  }
  var b = /[^\w:]/g,
    D = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
  function x(t, e, r) {
    if (t) {
      var i;
      try {
        i = decodeURIComponent(g(r)).replace(b, '').toLowerCase();
      } catch (s) {
        return null;
      }
      if (
        0 === i.indexOf('javascript:') ||
        0 === i.indexOf('vbscript:') ||
        0 === i.indexOf('data:')
      )
        return null;
    }
    e && !D.test(r) && (r = w(e, r));
    try {
      r = encodeURI(r).replace(/%25/g, '%');
    } catch (s) {
      return null;
    }
    return r;
  }
  var E = {},
    _ = /^[^:]+:\/*[^/]*$/,
    C = /^([^:]+:)[\s\S]*$/,
    A = /^([^:]+:\/*[^/]*)[\s\S]*$/;
  function w(t, e) {
    E[' ' + t] ||
      (_.test(t) ? (E[' ' + t] = t + '/') : (E[' ' + t] = P(t, '/', !0)));
    var r = -1 === (t = E[' ' + t]).indexOf(':');
    return '//' === e.substring(0, 2)
      ? r
        ? e
        : t.replace(C, '$1') + e
      : '/' === e.charAt(0)
      ? r
        ? e
        : t.replace(A, '$1') + e
      : t + e;
  }
  function k(t) {
    for (var e, r, i = 1; i < arguments.length; i++)
      for (r in (e = arguments[i]))
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t;
  }
  function S(t, e) {
    var r = t
        .replace(/\|/g, function (t, e, r) {
          for (var i = !1, s = e; --s >= 0 && '\\' === r[s]; ) i = !i;
          return i ? '|' : ' |';
        })
        .split(/ \|/),
      i = 0;
    if (r.length > e) r.splice(e);
    else for (; r.length < e; ) r.push('');
    for (; i < r.length; i++) r[i] = r[i].trim().replace(/\\\|/g, '|');
    return r;
  }
  function P(t, e, r) {
    var i = t.length;
    if (0 === i) return '';
    for (var s = 0; s < i; ) {
      var a = t.charAt(i - s - 1);
      if (a !== e || r) {
        if (a === e || !r) break;
        s++;
      } else s++;
    }
    return t.substr(0, i - s);
  }
  function F(t, e) {
    if (-1 === t.indexOf(e[1])) return -1;
    for (var r = t.length, i = 0, s = 0; s < r; s++)
      if ('\\' === t[s]) s++;
      else if (t[s] === e[0]) i++;
      else if (t[s] === e[1] && --i < 0) return s;
    return -1;
  }
  function T(t) {
    t &&
      t.sanitize &&
      !t.silent &&
      console.warn(
        'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options'
      );
  }
  function M(t, e) {
    if (e < 1) return '';
    for (var r = ''; e > 1; ) 1 & e && (r += t), (e >>= 1), (t += t);
    return r + t;
  }
  var I = {
      escape: m,
      unescape: g,
      edit: v,
      cleanUrl: x,
      resolveUrl: w,
      noopTest: { exec: function () {} },
      merge: k,
      splitCells: S,
      rtrim: P,
      findClosingBracket: F,
      checkSanitizeDeprecation: T,
      repeatString: M,
    },
    B = a.exports.defaults,
    R = I.rtrim,
    V = I.splitCells,
    z = I.escape,
    L = I.findClosingBracket;
  function O(t, e, r) {
    var i = e.href,
      s = e.title ? z(e.title) : null,
      a = t[1].replace(/\\([\[\]])/g, '$1');
    return '!' !== t[0].charAt(0)
      ? { type: 'link', raw: r, href: i, title: s, text: a }
      : { type: 'image', raw: r, href: i, title: s, text: z(a) };
  }
  function N(t, e) {
    var r = t.match(/^(\s+)(?:```)/);
    if (null === r) return e;
    var i = r[1];
    return e
      .split('\n')
      .map(function (t) {
        var e = t.match(/^\s+/);
        return null === e ? t : e[0].length >= i.length ? t.slice(i.length) : t;
      })
      .join('\n');
  }
  var G = (function () {
      function t(t) {
        this.options = t || B;
      }
      var e = t.prototype;
      return (
        (e.space = function (t) {
          var e = this.rules.block.newline.exec(t);
          if (e)
            return e[0].length > 1
              ? { type: 'space', raw: e[0] }
              : { raw: '\n' };
        }),
        (e.code = function (t) {
          var e = this.rules.block.code.exec(t);
          if (e) {
            var r = e[0].replace(/^ {1,4}/gm, '');
            return {
              type: 'code',
              raw: e[0],
              codeBlockStyle: 'indented',
              text: this.options.pedantic ? r : R(r, '\n'),
            };
          }
        }),
        (e.fences = function (t) {
          var e = this.rules.block.fences.exec(t);
          if (e) {
            var r = e[0],
              i = N(r, e[3] || '');
            return {
              type: 'code',
              raw: r,
              lang: e[2] ? e[2].trim() : e[2],
              text: i,
            };
          }
        }),
        (e.heading = function (t) {
          var e = this.rules.block.heading.exec(t);
          if (e) {
            var r = e[2].trim();
            if (/#$/.test(r)) {
              var i = R(r, '#');
              this.options.pedantic
                ? (r = i.trim())
                : (i && !/ $/.test(i)) || (r = i.trim());
            }
            return { type: 'heading', raw: e[0], depth: e[1].length, text: r };
          }
        }),
        (e.nptable = function (t) {
          var e = this.rules.block.nptable.exec(t);
          if (e) {
            var r = {
              type: 'table',
              header: V(e[1].replace(/^ *| *\| *$/g, '')),
              align: e[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
              cells: e[3] ? e[3].replace(/\n$/, '').split('\n') : [],
              raw: e[0],
            };
            if (r.header.length === r.align.length) {
              var i,
                s = r.align.length;
              for (i = 0; i < s; i++)
                /^ *-+: *$/.test(r.align[i])
                  ? (r.align[i] = 'right')
                  : /^ *:-+: *$/.test(r.align[i])
                  ? (r.align[i] = 'center')
                  : /^ *:-+ *$/.test(r.align[i])
                  ? (r.align[i] = 'left')
                  : (r.align[i] = null);
              for (s = r.cells.length, i = 0; i < s; i++)
                r.cells[i] = V(r.cells[i], r.header.length);
              return r;
            }
          }
        }),
        (e.hr = function (t) {
          var e = this.rules.block.hr.exec(t);
          if (e) return { type: 'hr', raw: e[0] };
        }),
        (e.blockquote = function (t) {
          var e = this.rules.block.blockquote.exec(t);
          if (e) {
            var r = e[0].replace(/^ *> ?/gm, '');
            return { type: 'blockquote', raw: e[0], text: r };
          }
        }),
        (e.list = function (t) {
          var e = this.rules.block.list.exec(t);
          if (e) {
            var r,
              i,
              s,
              a,
              n,
              o,
              l,
              h,
              p,
              u = e[0],
              c = e[2],
              f = c.length > 1,
              m = {
                type: 'list',
                raw: u,
                ordered: f,
                start: f ? +c.slice(0, -1) : '',
                loose: !1,
                items: [],
              },
              d = e[0].match(this.rules.block.item),
              g = !1,
              y = d.length;
            s = this.rules.block.listItemStart.exec(d[0]);
            for (var v = 0; v < y; v++) {
              if (
                ((u = r = d[v]),
                this.options.pedantic ||
                  ((p = r.match(
                    new RegExp('\\n\\s*\\n {0,' + (s[0].length - 1) + '}\\S')
                  )) &&
                    ((n =
                      r.length - p.index + d.slice(v + 1).join('\n').length),
                    (m.raw = m.raw.substring(0, m.raw.length - n)),
                    (u = r = r.substring(0, p.index)),
                    (y = v + 1))),
                v !== y - 1)
              ) {
                if (
                  ((a = this.rules.block.listItemStart.exec(d[v + 1])),
                  this.options.pedantic
                    ? a[1].length > s[1].length
                    : a[1].length >= s[0].length || a[1].length > 3)
                ) {
                  d.splice(
                    v,
                    2,
                    d[v] +
                      (!this.options.pedantic &&
                      a[1].length < s[0].length &&
                      !d[v].match(/\n$/)
                        ? ''
                        : '\n') +
                      d[v + 1]
                  ),
                    v--,
                    y--;
                  continue;
                }
                (!this.options.pedantic || this.options.smartLists
                  ? a[2][a[2].length - 1] !== c[c.length - 1]
                  : f === (1 === a[2].length)) &&
                  ((n = d.slice(v + 1).join('\n').length),
                  (m.raw = m.raw.substring(0, m.raw.length - n)),
                  (v = y - 1)),
                  (s = a);
              }
              (i = r.length),
                ~(r = r.replace(/^ *([*+-]|\d+[.)]) ?/, '')).indexOf('\n ') &&
                  ((i -= r.length),
                  (r = this.options.pedantic
                    ? r.replace(/^ {1,4}/gm, '')
                    : r.replace(new RegExp('^ {1,' + i + '}', 'gm'), ''))),
                (r = R(r, '\n')),
                v !== y - 1 && (u += '\n'),
                (o = g || /\n\n(?!\s*$)/.test(u)),
                v !== y - 1 && ((g = '\n\n' === u.slice(-2)), o || (o = g)),
                o && (m.loose = !0),
                this.options.gfm &&
                  ((h = void 0),
                  (l = /^\[[ xX]\] /.test(r)) &&
                    ((h = ' ' !== r[1]), (r = r.replace(/^\[[ xX]\] +/, '')))),
                m.items.push({
                  type: 'list_item',
                  raw: u,
                  task: l,
                  checked: h,
                  loose: o,
                  text: r,
                });
            }
            return m;
          }
        }),
        (e.html = function (t) {
          var e = this.rules.block.html.exec(t);
          if (e)
            return {
              type: this.options.sanitize ? 'paragraph' : 'html',
              raw: e[0],
              pre:
                !this.options.sanitizer &&
                ('pre' === e[1] || 'script' === e[1] || 'style' === e[1]),
              text: this.options.sanitize
                ? this.options.sanitizer
                  ? this.options.sanitizer(e[0])
                  : z(e[0])
                : e[0],
            };
        }),
        (e.def = function (t) {
          var e = this.rules.block.def.exec(t);
          if (e)
            return (
              e[3] && (e[3] = e[3].substring(1, e[3].length - 1)),
              {
                type: 'def',
                tag: e[1].toLowerCase().replace(/\s+/g, ' '),
                raw: e[0],
                href: e[2],
                title: e[3],
              }
            );
        }),
        (e.table = function (t) {
          var e = this.rules.block.table.exec(t);
          if (e) {
            var r = {
              type: 'table',
              header: V(e[1].replace(/^ *| *\| *$/g, '')),
              align: e[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
              cells: e[3] ? e[3].replace(/\n$/, '').split('\n') : [],
            };
            if (r.header.length === r.align.length) {
              r.raw = e[0];
              var i,
                s = r.align.length;
              for (i = 0; i < s; i++)
                /^ *-+: *$/.test(r.align[i])
                  ? (r.align[i] = 'right')
                  : /^ *:-+: *$/.test(r.align[i])
                  ? (r.align[i] = 'center')
                  : /^ *:-+ *$/.test(r.align[i])
                  ? (r.align[i] = 'left')
                  : (r.align[i] = null);
              for (s = r.cells.length, i = 0; i < s; i++)
                r.cells[i] = V(
                  r.cells[i].replace(/^ *\| *| *\| *$/g, ''),
                  r.header.length
                );
              return r;
            }
          }
        }),
        (e.lheading = function (t) {
          var e = this.rules.block.lheading.exec(t);
          if (e)
            return {
              type: 'heading',
              raw: e[0],
              depth: '=' === e[2].charAt(0) ? 1 : 2,
              text: e[1],
            };
        }),
        (e.paragraph = function (t) {
          var e = this.rules.block.paragraph.exec(t);
          if (e)
            return {
              type: 'paragraph',
              raw: e[0],
              text:
                '\n' === e[1].charAt(e[1].length - 1)
                  ? e[1].slice(0, -1)
                  : e[1],
            };
        }),
        (e.text = function (t) {
          var e = this.rules.block.text.exec(t);
          if (e) return { type: 'text', raw: e[0], text: e[0] };
        }),
        (e.escape = function (t) {
          var e = this.rules.inline.escape.exec(t);
          if (e) return { type: 'escape', raw: e[0], text: z(e[1]) };
        }),
        (e.tag = function (t, e, r) {
          var i = this.rules.inline.tag.exec(t);
          if (i)
            return (
              !e && /^<a /i.test(i[0])
                ? (e = !0)
                : e && /^<\/a>/i.test(i[0]) && (e = !1),
              !r && /^<(pre|code|kbd|script)(\s|>)/i.test(i[0])
                ? (r = !0)
                : r &&
                  /^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0]) &&
                  (r = !1),
              {
                type: this.options.sanitize ? 'text' : 'html',
                raw: i[0],
                inLink: e,
                inRawBlock: r,
                text: this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(i[0])
                    : z(i[0])
                  : i[0],
              }
            );
        }),
        (e.link = function (t) {
          var e = this.rules.inline.link.exec(t);
          if (e) {
            var r = e[2].trim();
            if (!this.options.pedantic && /^</.test(r)) {
              if (!/>$/.test(r)) return;
              var i = R(r.slice(0, -1), '\\');
              if ((r.length - i.length) % 2 == 0) return;
            } else {
              var s = L(e[2], '()');
              if (s > -1) {
                var a = (0 === e[0].indexOf('!') ? 5 : 4) + e[1].length + s;
                (e[2] = e[2].substring(0, s)),
                  (e[0] = e[0].substring(0, a).trim()),
                  (e[3] = '');
              }
            }
            var n = e[2],
              o = '';
            if (this.options.pedantic) {
              var l = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
              l && ((n = l[1]), (o = l[3]));
            } else o = e[3] ? e[3].slice(1, -1) : '';
            return (
              (n = n.trim()),
              /^</.test(n) &&
                (n =
                  this.options.pedantic && !/>$/.test(r)
                    ? n.slice(1)
                    : n.slice(1, -1)),
              O(
                e,
                {
                  href: n ? n.replace(this.rules.inline._escapes, '$1') : n,
                  title: o ? o.replace(this.rules.inline._escapes, '$1') : o,
                },
                e[0]
              )
            );
          }
        }),
        (e.reflink = function (t, e) {
          var r;
          if (
            (r = this.rules.inline.reflink.exec(t)) ||
            (r = this.rules.inline.nolink.exec(t))
          ) {
            var i = (r[2] || r[1]).replace(/\s+/g, ' ');
            if (!(i = e[i.toLowerCase()]) || !i.href) {
              var s = r[0].charAt(0);
              return { type: 'text', raw: s, text: s };
            }
            return O(r, i, r[0]);
          }
        }),
        (e.emStrong = function (t, e, r) {
          void 0 === r && (r = '');
          var i = this.rules.inline.emStrong.lDelim.exec(t);
          if (
            i &&
            (!i[3] ||
              !r.match(
                /(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/
              ))
          ) {
            var s = i[1] || i[2] || '';
            if (
              !s ||
              (s && ('' === r || this.rules.inline.punctuation.exec(r)))
            ) {
              var a,
                n,
                o = i[0].length - 1,
                l = o,
                h = 0,
                p =
                  '*' === i[0][0]
                    ? this.rules.inline.emStrong.rDelimAst
                    : this.rules.inline.emStrong.rDelimUnd;
              for (
                p.lastIndex = 0, e = e.slice(-1 * t.length + o);
                null != (i = p.exec(e));

              )
                if ((a = i[1] || i[2] || i[3] || i[4] || i[5] || i[6]))
                  if (((n = a.length), i[3] || i[4])) l += n;
                  else if (!((i[5] || i[6]) && o % 3) || (o + n) % 3) {
                    if (!((l -= n) > 0))
                      return (
                        (n = Math.min(n, n + l + h)),
                        Math.min(o, n) % 2
                          ? {
                              type: 'em',
                              raw: t.slice(0, o + i.index + n + 1),
                              text: t.slice(1, o + i.index + n),
                            }
                          : {
                              type: 'strong',
                              raw: t.slice(0, o + i.index + n + 1),
                              text: t.slice(2, o + i.index + n - 1),
                            }
                      );
                  } else h += n;
            }
          }
        }),
        (e.codespan = function (t) {
          var e = this.rules.inline.code.exec(t);
          if (e) {
            var r = e[2].replace(/\n/g, ' '),
              i = /[^ ]/.test(r),
              s = /^ /.test(r) && / $/.test(r);
            return (
              i && s && (r = r.substring(1, r.length - 1)),
              (r = z(r, !0)),
              { type: 'codespan', raw: e[0], text: r }
            );
          }
        }),
        (e.br = function (t) {
          var e = this.rules.inline.br.exec(t);
          if (e) return { type: 'br', raw: e[0] };
        }),
        (e.del = function (t) {
          var e = this.rules.inline.del.exec(t);
          if (e) return { type: 'del', raw: e[0], text: e[2] };
        }),
        (e.autolink = function (t, e) {
          var r,
            i,
            s = this.rules.inline.autolink.exec(t);
          if (s)
            return (
              (i =
                '@' === s[2]
                  ? 'mailto:' + (r = z(this.options.mangle ? e(s[1]) : s[1]))
                  : (r = z(s[1]))),
              {
                type: 'link',
                raw: s[0],
                text: r,
                href: i,
                tokens: [{ type: 'text', raw: r, text: r }],
              }
            );
        }),
        (e.url = function (t, e) {
          var r;
          if ((r = this.rules.inline.url.exec(t))) {
            var i, s;
            if ('@' === r[2])
              s = 'mailto:' + (i = z(this.options.mangle ? e(r[0]) : r[0]));
            else {
              var a;
              do {
                (a = r[0]), (r[0] = this.rules.inline._backpedal.exec(r[0])[0]);
              } while (a !== r[0]);
              (i = z(r[0])), (s = 'www.' === r[1] ? 'http://' + i : i);
            }
            return {
              type: 'link',
              raw: r[0],
              text: i,
              href: s,
              tokens: [{ type: 'text', raw: i, text: i }],
            };
          }
        }),
        (e.inlineText = function (t, e, r) {
          var i,
            s = this.rules.inline.text.exec(t);
          if (s)
            return (
              (i = e
                ? this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(s[0])
                    : z(s[0])
                  : s[0]
                : z(this.options.smartypants ? r(s[0]) : s[0])),
              { type: 'text', raw: s[0], text: i }
            );
        }),
        t
      );
    })(),
    $ = I.noopTest,
    j = I.edit,
    H = I.merge,
    q = {
      newline: /^(?: *(?:\n|$))+/,
      code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
      fences:
        /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
      hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
      heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
      blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
      list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
      html: '^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))',
      def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
      nptable: $,
      table: $,
      lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
      _paragraph:
        /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
      text: /^[^\n]+/,
      _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
      _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
    };
  (q.def = j(q.def)
    .replace('label', q._label)
    .replace('title', q._title)
    .getRegex()),
    (q.bullet = /(?:[*+-]|\d{1,9}[.)])/),
    (q.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/),
    (q.item = j(q.item, 'gm').replace(/bull/g, q.bullet).getRegex()),
    (q.listItemStart = j(/^( *)(bull) */)
      .replace('bull', q.bullet)
      .getRegex()),
    (q.list = j(q.list)
      .replace(/bull/g, q.bullet)
      .replace(
        'hr',
        '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))'
      )
      .replace('def', '\\n+(?=' + q.def.source + ')')
      .getRegex()),
    (q._tag =
      'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'),
    (q._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
    (q.html = j(q.html, 'i')
      .replace('comment', q._comment)
      .replace('tag', q._tag)
      .replace(
        'attribute',
        / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
      )
      .getRegex()),
    (q.paragraph = j(q._paragraph)
      .replace('hr', q.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('|lheading', '')
      .replace('blockquote', ' {0,3}>')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace(
        'html',
        '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
      )
      .replace('tag', q._tag)
      .getRegex()),
    (q.blockquote = j(q.blockquote)
      .replace('paragraph', q.paragraph)
      .getRegex()),
    (q.normal = H({}, q)),
    (q.gfm = H({}, q.normal, {
      nptable:
        '^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
      table:
        '^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
    })),
    (q.gfm.nptable = j(q.gfm.nptable)
      .replace('hr', q.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('blockquote', ' {0,3}>')
      .replace('code', ' {4}[^\\n]')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace(
        'html',
        '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
      )
      .replace('tag', q._tag)
      .getRegex()),
    (q.gfm.table = j(q.gfm.table)
      .replace('hr', q.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('blockquote', ' {0,3}>')
      .replace('code', ' {4}[^\\n]')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace(
        'html',
        '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
      )
      .replace('tag', q._tag)
      .getRegex()),
    (q.pedantic = H({}, q.normal, {
      html: j(
        '^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))'
      )
        .replace('comment', q._comment)
        .replace(
          /tag/g,
          '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b'
        )
        .getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^(#{1,6})(.*)(?:\n+|$)/,
      fences: $,
      paragraph: j(q.normal._paragraph)
        .replace('hr', q.hr)
        .replace('heading', ' *#{1,6} *[^\n]')
        .replace('lheading', q.lheading)
        .replace('blockquote', ' {0,3}>')
        .replace('|fences', '')
        .replace('|list', '')
        .replace('|html', '')
        .getRegex(),
    }));
  var W = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: $,
    tag: '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
    reflinkSearch: 'reflink|nolink(?!\\()',
    emStrong: {
      lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
      rDelimAst:
        /\_\_[^_*]*?\*[^_*]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
      rDelimUnd:
        /\*\*[^_*]*?\_[^_*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: $,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^([\spunctuation])/,
    _punctuation: '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~',
  };
  (W.punctuation = j(W.punctuation)
    .replace(/punctuation/g, W._punctuation)
    .getRegex()),
    (W.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
    (W.escapedEmSt = /\\\*|\\_/g),
    (W._comment = j(q._comment).replace('(?:--\x3e|$)', '--\x3e').getRegex()),
    (W.emStrong.lDelim = j(W.emStrong.lDelim)
      .replace(/punct/g, W._punctuation)
      .getRegex()),
    (W.emStrong.rDelimAst = j(W.emStrong.rDelimAst, 'g')
      .replace(/punct/g, W._punctuation)
      .getRegex()),
    (W.emStrong.rDelimUnd = j(W.emStrong.rDelimUnd, 'g')
      .replace(/punct/g, W._punctuation)
      .getRegex()),
    (W._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
    (W._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
    (W._email =
      /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
    (W.autolink = j(W.autolink)
      .replace('scheme', W._scheme)
      .replace('email', W._email)
      .getRegex()),
    (W._attribute =
      /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
    (W.tag = j(W.tag)
      .replace('comment', W._comment)
      .replace('attribute', W._attribute)
      .getRegex()),
    (W._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
    (W._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
    (W._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
    (W.link = j(W.link)
      .replace('label', W._label)
      .replace('href', W._href)
      .replace('title', W._title)
      .getRegex()),
    (W.reflink = j(W.reflink).replace('label', W._label).getRegex()),
    (W.reflinkSearch = j(W.reflinkSearch, 'g')
      .replace('reflink', W.reflink)
      .replace('nolink', W.nolink)
      .getRegex()),
    (W.normal = H({}, W)),
    (W.pedantic = H({}, W.normal, {
      strong: {
        start: /^__|\*\*/,
        middle:
          /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        endAst: /\*\*(?!\*)/g,
        endUnd: /__(?!_)/g,
      },
      em: {
        start: /^_|\*/,
        middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
        endAst: /\*(?!\*)/g,
        endUnd: /_(?!_)/g,
      },
      link: j(/^!?\[(label)\]\((.*?)\)/)
        .replace('label', W._label)
        .getRegex(),
      reflink: j(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace('label', W._label)
        .getRegex(),
    })),
    (W.gfm = H({}, W.normal, {
      escape: j(W.escape).replace('])', '~|])').getRegex(),
      _extended_email:
        /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
      url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
      _backpedal:
        /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
      del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
      text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
    })),
    (W.gfm.url = j(W.gfm.url, 'i')
      .replace('email', W.gfm._extended_email)
      .getRegex()),
    (W.breaks = H({}, W.gfm, {
      br: j(W.br).replace('{2,}', '*').getRegex(),
      text: j(W.gfm.text)
        .replace('\\b_', '\\b_| {2,}\\n')
        .replace(/\{2,\}/g, '*')
        .getRegex(),
    }));
  var U = { block: q, inline: W },
    Y = G,
    Z = a.exports.defaults,
    X = U.block,
    K = U.inline,
    J = I.repeatString;
  function Q(t) {
    return t
      .replace(/---/g, '—')
      .replace(/--/g, '–')
      .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1‘')
      .replace(/'/g, '’')
      .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1“')
      .replace(/"/g, '”')
      .replace(/\.{3}/g, '…');
  }
  function tt(t) {
    var e,
      r,
      i = '',
      s = t.length;
    for (e = 0; e < s; e++)
      (r = t.charCodeAt(e)),
        Math.random() > 0.5 && (r = 'x' + r.toString(16)),
        (i += '&#' + r + ';');
    return i;
  }
  var et = (function () {
      function t(t) {
        (this.tokens = []),
          (this.tokens.links = Object.create(null)),
          (this.options = t || Z),
          (this.options.tokenizer = this.options.tokenizer || new Y()),
          (this.tokenizer = this.options.tokenizer),
          (this.tokenizer.options = this.options);
        var e = { block: X.normal, inline: K.normal };
        this.options.pedantic
          ? ((e.block = X.pedantic), (e.inline = K.pedantic))
          : this.options.gfm &&
            ((e.block = X.gfm),
            this.options.breaks ? (e.inline = K.breaks) : (e.inline = K.gfm)),
          (this.tokenizer.rules = e);
      }
      (t.lex = function (e, r) {
        return new t(r).lex(e);
      }),
        (t.lexInline = function (e, r) {
          return new t(r).inlineTokens(e);
        });
      var r = t.prototype;
      return (
        (r.lex = function (t) {
          return (
            (t = t.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ')),
            this.blockTokens(t, this.tokens, !0),
            this.inline(this.tokens),
            this.tokens
          );
        }),
        (r.blockTokens = function (t, e, r) {
          var i,
            s,
            a,
            n,
            o,
            l,
            h = this;
          for (
            void 0 === e && (e = []),
              void 0 === r && (r = !0),
              this.options.pedantic && (t = t.replace(/^ +$/gm, ''));
            t;

          )
            if (
              !(
                this.options.extensions &&
                this.options.extensions.block &&
                this.options.extensions.block.some(function (r) {
                  return (
                    !!(i = r.call(h, t, e)) &&
                    ((t = t.substring(i.raw.length)), e.push(i), !0)
                  );
                })
              )
            )
              if ((i = this.tokenizer.space(t)))
                (t = t.substring(i.raw.length)), i.type && e.push(i);
              else if ((i = this.tokenizer.code(t)))
                (t = t.substring(i.raw.length)),
                  (n = e[e.length - 1]) && 'paragraph' === n.type
                    ? ((n.raw += '\n' + i.raw), (n.text += '\n' + i.text))
                    : e.push(i);
              else if ((i = this.tokenizer.fences(t)))
                (t = t.substring(i.raw.length)), e.push(i);
              else if ((i = this.tokenizer.heading(t)))
                (t = t.substring(i.raw.length)), e.push(i);
              else if ((i = this.tokenizer.nptable(t)))
                (t = t.substring(i.raw.length)), e.push(i);
              else if ((i = this.tokenizer.hr(t)))
                (t = t.substring(i.raw.length)), e.push(i);
              else if ((i = this.tokenizer.blockquote(t)))
                (t = t.substring(i.raw.length)),
                  (i.tokens = this.blockTokens(i.text, [], r)),
                  e.push(i);
              else if ((i = this.tokenizer.list(t))) {
                for (
                  t = t.substring(i.raw.length), a = i.items.length, s = 0;
                  s < a;
                  s++
                )
                  i.items[s].tokens = this.blockTokens(i.items[s].text, [], !1);
                e.push(i);
              } else if ((i = this.tokenizer.html(t)))
                (t = t.substring(i.raw.length)), e.push(i);
              else if (r && (i = this.tokenizer.def(t)))
                (t = t.substring(i.raw.length)),
                  this.tokens.links[i.tag] ||
                    (this.tokens.links[i.tag] = {
                      href: i.href,
                      title: i.title,
                    });
              else if ((i = this.tokenizer.table(t)))
                (t = t.substring(i.raw.length)), e.push(i);
              else if ((i = this.tokenizer.lheading(t)))
                (t = t.substring(i.raw.length)), e.push(i);
              else if (
                ((o = t),
                this.options.extensions &&
                  this.options.extensions.startBlock &&
                  (function () {
                    var e = 1 / 0,
                      r = t.slice(1),
                      i = void 0;
                    h.options.extensions.startBlock.forEach(function (t) {
                      'number' == typeof (i = t.call(this, r)) &&
                        i >= 0 &&
                        (e = Math.min(e, i));
                    }),
                      e < 1 / 0 && e >= 0 && (o = t.substring(0, e + 1));
                  })(),
                r && (i = this.tokenizer.paragraph(o)))
              )
                (n = e[e.length - 1]),
                  l && 'paragraph' === n.type
                    ? ((n.raw += '\n' + i.raw), (n.text += '\n' + i.text))
                    : e.push(i),
                  (l = o.length !== t.length),
                  (t = t.substring(i.raw.length));
              else if ((i = this.tokenizer.text(t)))
                (t = t.substring(i.raw.length)),
                  (n = e[e.length - 1]) && 'text' === n.type
                    ? ((n.raw += '\n' + i.raw), (n.text += '\n' + i.text))
                    : e.push(i);
              else if (t) {
                var p = 'Infinite loop on byte: ' + t.charCodeAt(0);
                if (this.options.silent) {
                  console.error(p);
                  break;
                }
                throw new Error(p);
              }
          return e;
        }),
        (r.inline = function (t) {
          var e,
            r,
            i,
            s,
            a,
            n,
            o = t.length;
          for (e = 0; e < o; e++)
            switch ((n = t[e]).type) {
              case 'paragraph':
              case 'text':
              case 'heading':
                (n.tokens = []), this.inlineTokens(n.text, n.tokens);
                break;
              case 'table':
                for (
                  n.tokens = { header: [], cells: [] },
                    s = n.header.length,
                    r = 0;
                  r < s;
                  r++
                )
                  (n.tokens.header[r] = []),
                    this.inlineTokens(n.header[r], n.tokens.header[r]);
                for (s = n.cells.length, r = 0; r < s; r++)
                  for (
                    a = n.cells[r], n.tokens.cells[r] = [], i = 0;
                    i < a.length;
                    i++
                  )
                    (n.tokens.cells[r][i] = []),
                      this.inlineTokens(a[i], n.tokens.cells[r][i]);
                break;
              case 'blockquote':
                this.inline(n.tokens);
                break;
              case 'list':
                for (s = n.items.length, r = 0; r < s; r++)
                  this.inline(n.items[r].tokens);
            }
          return t;
        }),
        (r.inlineTokens = function (t, e, r, i) {
          var s,
            a,
            n,
            o = this;
          void 0 === e && (e = []),
            void 0 === r && (r = !1),
            void 0 === i && (i = !1);
          var l,
            h,
            p,
            u = t;
          if (this.tokens.links) {
            var c = Object.keys(this.tokens.links);
            if (c.length > 0)
              for (
                ;
                null != (l = this.tokenizer.rules.inline.reflinkSearch.exec(u));

              )
                c.includes(l[0].slice(l[0].lastIndexOf('[') + 1, -1)) &&
                  (u =
                    u.slice(0, l.index) +
                    '[' +
                    J('a', l[0].length - 2) +
                    ']' +
                    u.slice(
                      this.tokenizer.rules.inline.reflinkSearch.lastIndex
                    ));
          }
          for (; null != (l = this.tokenizer.rules.inline.blockSkip.exec(u)); )
            u =
              u.slice(0, l.index) +
              '[' +
              J('a', l[0].length - 2) +
              ']' +
              u.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
          for (
            ;
            null != (l = this.tokenizer.rules.inline.escapedEmSt.exec(u));

          )
            u =
              u.slice(0, l.index) +
              '++' +
              u.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
          for (; t; )
            if (
              (h || (p = ''),
              (h = !1),
              !(
                this.options.extensions &&
                this.options.extensions.inline &&
                this.options.extensions.inline.some(function (r) {
                  return (
                    !!(s = r.call(o, t, e)) &&
                    ((t = t.substring(s.raw.length)), e.push(s), !0)
                  );
                })
              ))
            )
              if ((s = this.tokenizer.escape(t)))
                (t = t.substring(s.raw.length)), e.push(s);
              else if ((s = this.tokenizer.tag(t, r, i)))
                (t = t.substring(s.raw.length)),
                  (r = s.inLink),
                  (i = s.inRawBlock),
                  (a = e[e.length - 1]) &&
                  'text' === s.type &&
                  'text' === a.type
                    ? ((a.raw += s.raw), (a.text += s.text))
                    : e.push(s);
              else if ((s = this.tokenizer.link(t)))
                (t = t.substring(s.raw.length)),
                  'link' === s.type &&
                    (s.tokens = this.inlineTokens(s.text, [], !0, i)),
                  e.push(s);
              else if ((s = this.tokenizer.reflink(t, this.tokens.links)))
                (t = t.substring(s.raw.length)),
                  (a = e[e.length - 1]),
                  'link' === s.type
                    ? ((s.tokens = this.inlineTokens(s.text, [], !0, i)),
                      e.push(s))
                    : a && 'text' === s.type && 'text' === a.type
                    ? ((a.raw += s.raw), (a.text += s.text))
                    : e.push(s);
              else if ((s = this.tokenizer.emStrong(t, u, p)))
                (t = t.substring(s.raw.length)),
                  (s.tokens = this.inlineTokens(s.text, [], r, i)),
                  e.push(s);
              else if ((s = this.tokenizer.codespan(t)))
                (t = t.substring(s.raw.length)), e.push(s);
              else if ((s = this.tokenizer.br(t)))
                (t = t.substring(s.raw.length)), e.push(s);
              else if ((s = this.tokenizer.del(t)))
                (t = t.substring(s.raw.length)),
                  (s.tokens = this.inlineTokens(s.text, [], r, i)),
                  e.push(s);
              else if ((s = this.tokenizer.autolink(t, tt)))
                (t = t.substring(s.raw.length)), e.push(s);
              else if (r || !(s = this.tokenizer.url(t, tt))) {
                if (
                  ((n = t),
                  this.options.extensions &&
                    this.options.extensions.startInline &&
                    (function () {
                      var e = 1 / 0,
                        r = t.slice(1),
                        i = void 0;
                      o.options.extensions.startInline.forEach(function (t) {
                        'number' == typeof (i = t.call(this, r)) &&
                          i >= 0 &&
                          (e = Math.min(e, i));
                      }),
                        e < 1 / 0 && e >= 0 && (n = t.substring(0, e + 1));
                    })(),
                  (s = this.tokenizer.inlineText(n, i, Q)))
                )
                  (t = t.substring(s.raw.length)),
                    '_' !== s.raw.slice(-1) && (p = s.raw.slice(-1)),
                    (h = !0),
                    (a = e[e.length - 1]) && 'text' === a.type
                      ? ((a.raw += s.raw), (a.text += s.text))
                      : e.push(s);
                else if (t) {
                  var f = 'Infinite loop on byte: ' + t.charCodeAt(0);
                  if (this.options.silent) {
                    console.error(f);
                    break;
                  }
                  throw new Error(f);
                }
              } else (t = t.substring(s.raw.length)), e.push(s);
          return e;
        }),
        e(t, null, [
          {
            key: 'rules',
            get: function () {
              return { block: X, inline: K };
            },
          },
        ]),
        t
      );
    })(),
    rt = a.exports.defaults,
    it = I.cleanUrl,
    st = I.escape,
    at = (function () {
      function t(t) {
        this.options = t || rt;
      }
      var e = t.prototype;
      return (
        (e.code = function (t, e, r) {
          var i = (e || '').match(/\S*/)[0];
          if (this.options.highlight) {
            var s = this.options.highlight(t, i);
            null != s && s !== t && ((r = !0), (t = s));
          }
          return (
            (t = t.replace(/\n$/, '') + '\n'),
            i
              ? '<pre><code class="' +
                this.options.langPrefix +
                st(i, !0) +
                '">' +
                (r ? t : st(t, !0)) +
                '</code></pre>\n'
              : '<pre><code>' + (r ? t : st(t, !0)) + '</code></pre>\n'
          );
        }),
        (e.blockquote = function (t) {
          return '<blockquote>\n' + t + '</blockquote>\n';
        }),
        (e.html = function (t) {
          return t;
        }),
        (e.heading = function (t, e, r, i) {
          return this.options.headerIds
            ? '<h' +
                e +
                ' id="' +
                this.options.headerPrefix +
                i.slug(r) +
                '">' +
                t +
                '</h' +
                e +
                '>\n'
            : '<h' + e + '>' + t + '</h' + e + '>\n';
        }),
        (e.hr = function () {
          return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
        }),
        (e.list = function (t, e, r) {
          var i = e ? 'ol' : 'ul';
          return (
            '<' +
            i +
            (e && 1 !== r ? ' start="' + r + '"' : '') +
            '>\n' +
            t +
            '</' +
            i +
            '>\n'
          );
        }),
        (e.listitem = function (t) {
          return '<li>' + t + '</li>\n';
        }),
        (e.checkbox = function (t) {
          return (
            '<input ' +
            (t ? 'checked="" ' : '') +
            'disabled="" type="checkbox"' +
            (this.options.xhtml ? ' /' : '') +
            '> '
          );
        }),
        (e.paragraph = function (t) {
          return '<p>' + t + '</p>\n';
        }),
        (e.table = function (t, e) {
          return (
            e && (e = '<tbody>' + e + '</tbody>'),
            '<table>\n<thead>\n' + t + '</thead>\n' + e + '</table>\n'
          );
        }),
        (e.tablerow = function (t) {
          return '<tr>\n' + t + '</tr>\n';
        }),
        (e.tablecell = function (t, e) {
          var r = e.header ? 'th' : 'td';
          return (
            (e.align ? '<' + r + ' align="' + e.align + '">' : '<' + r + '>') +
            t +
            '</' +
            r +
            '>\n'
          );
        }),
        (e.strong = function (t) {
          return '<strong>' + t + '</strong>';
        }),
        (e.em = function (t) {
          return '<em>' + t + '</em>';
        }),
        (e.codespan = function (t) {
          return '<code>' + t + '</code>';
        }),
        (e.br = function () {
          return this.options.xhtml ? '<br/>' : '<br>';
        }),
        (e.del = function (t) {
          return '<del>' + t + '</del>';
        }),
        (e.link = function (t, e, r) {
          if (null === (t = it(this.options.sanitize, this.options.baseUrl, t)))
            return r;
          var i = '<a href="' + st(t) + '"';
          return e && (i += ' title="' + e + '"'), (i += '>' + r + '</a>');
        }),
        (e.image = function (t, e, r) {
          if (null === (t = it(this.options.sanitize, this.options.baseUrl, t)))
            return r;
          var i = '<img src="' + t + '" alt="' + r + '"';
          return (
            e && (i += ' title="' + e + '"'),
            (i += this.options.xhtml ? '/>' : '>')
          );
        }),
        (e.text = function (t) {
          return t;
        }),
        t
      );
    })(),
    nt = (function () {
      function t() {}
      var e = t.prototype;
      return (
        (e.strong = function (t) {
          return t;
        }),
        (e.em = function (t) {
          return t;
        }),
        (e.codespan = function (t) {
          return t;
        }),
        (e.del = function (t) {
          return t;
        }),
        (e.html = function (t) {
          return t;
        }),
        (e.text = function (t) {
          return t;
        }),
        (e.link = function (t, e, r) {
          return '' + r;
        }),
        (e.image = function (t, e, r) {
          return '' + r;
        }),
        (e.br = function () {
          return '';
        }),
        t
      );
    })(),
    ot = (function () {
      function t() {
        this.seen = {};
      }
      var e = t.prototype;
      return (
        (e.serialize = function (t) {
          return t
            .toLowerCase()
            .trim()
            .replace(/<[!\/a-z].*?>/gi, '')
            .replace(
              /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
              ''
            )
            .replace(/\s/g, '-');
        }),
        (e.getNextSafeSlug = function (t, e) {
          var r = t,
            i = 0;
          if (this.seen.hasOwnProperty(r)) {
            i = this.seen[t];
            do {
              r = t + '-' + ++i;
            } while (this.seen.hasOwnProperty(r));
          }
          return e || ((this.seen[t] = i), (this.seen[r] = 0)), r;
        }),
        (e.slug = function (t, e) {
          void 0 === e && (e = {});
          var r = this.serialize(t);
          return this.getNextSafeSlug(r, e.dryrun);
        }),
        t
      );
    })(),
    lt = at,
    ht = nt,
    pt = ot,
    ut = a.exports.defaults,
    ct = I.unescape,
    ft = et,
    mt = (function () {
      function t(t) {
        (this.options = t || ut),
          (this.options.renderer = this.options.renderer || new lt()),
          (this.renderer = this.options.renderer),
          (this.renderer.options = this.options),
          (this.textRenderer = new ht()),
          (this.slugger = new pt());
      }
      (t.parse = function (e, r) {
        return new t(r).parse(e);
      }),
        (t.parseInline = function (e, r) {
          return new t(r).parseInline(e);
        });
      var e = t.prototype;
      return (
        (e.parse = function (t, e) {
          void 0 === e && (e = !0);
          var r,
            i,
            s,
            a,
            n,
            o,
            l,
            h,
            p,
            u,
            c,
            f,
            m,
            d,
            g,
            y,
            v,
            b,
            D,
            x = '',
            E = t.length;
          for (r = 0; r < E; r++)
            if (
              ((u = t[r]),
              !(
                this.options.extensions &&
                this.options.extensions.renderers &&
                this.options.extensions.renderers[u.type]
              ) ||
                (!1 ===
                  (D = this.options.extensions.renderers[u.type].call(
                    this,
                    u
                  )) &&
                  [
                    'space',
                    'hr',
                    'heading',
                    'code',
                    'table',
                    'blockquote',
                    'list',
                    'html',
                    'paragraph',
                    'text',
                  ].includes(u.type)))
            )
              switch (u.type) {
                case 'space':
                  continue;
                case 'hr':
                  x += this.renderer.hr();
                  continue;
                case 'heading':
                  x += this.renderer.heading(
                    this.parseInline(u.tokens),
                    u.depth,
                    ct(this.parseInline(u.tokens, this.textRenderer)),
                    this.slugger
                  );
                  continue;
                case 'code':
                  x += this.renderer.code(u.text, u.lang, u.escaped);
                  continue;
                case 'table':
                  for (h = '', l = '', a = u.header.length, i = 0; i < a; i++)
                    l += this.renderer.tablecell(
                      this.parseInline(u.tokens.header[i]),
                      { header: !0, align: u.align[i] }
                    );
                  for (
                    h += this.renderer.tablerow(l),
                      p = '',
                      a = u.cells.length,
                      i = 0;
                    i < a;
                    i++
                  ) {
                    for (
                      l = '', n = (o = u.tokens.cells[i]).length, s = 0;
                      s < n;
                      s++
                    )
                      l += this.renderer.tablecell(this.parseInline(o[s]), {
                        header: !1,
                        align: u.align[s],
                      });
                    p += this.renderer.tablerow(l);
                  }
                  x += this.renderer.table(h, p);
                  continue;
                case 'blockquote':
                  (p = this.parse(u.tokens)),
                    (x += this.renderer.blockquote(p));
                  continue;
                case 'list':
                  for (
                    c = u.ordered,
                      f = u.start,
                      m = u.loose,
                      a = u.items.length,
                      p = '',
                      i = 0;
                    i < a;
                    i++
                  )
                    (y = (g = u.items[i]).checked),
                      (v = g.task),
                      (d = ''),
                      g.task &&
                        ((b = this.renderer.checkbox(y)),
                        m
                          ? g.tokens.length > 0 && 'text' === g.tokens[0].type
                            ? ((g.tokens[0].text = b + ' ' + g.tokens[0].text),
                              g.tokens[0].tokens &&
                                g.tokens[0].tokens.length > 0 &&
                                'text' === g.tokens[0].tokens[0].type &&
                                (g.tokens[0].tokens[0].text =
                                  b + ' ' + g.tokens[0].tokens[0].text))
                            : g.tokens.unshift({ type: 'text', text: b })
                          : (d += b)),
                      (d += this.parse(g.tokens, m)),
                      (p += this.renderer.listitem(d, v, y));
                  x += this.renderer.list(p, c, f);
                  continue;
                case 'html':
                  x += this.renderer.html(u.text);
                  continue;
                case 'paragraph':
                  x += this.renderer.paragraph(this.parseInline(u.tokens));
                  continue;
                case 'text':
                  for (
                    p = u.tokens ? this.parseInline(u.tokens) : u.text;
                    r + 1 < E && 'text' === t[r + 1].type;

                  )
                    p +=
                      '\n' +
                      ((u = t[++r]).tokens
                        ? this.parseInline(u.tokens)
                        : u.text);
                  x += e ? this.renderer.paragraph(p) : p;
                  continue;
                default:
                  var _ = 'Token with "' + u.type + '" type was not found.';
                  if (this.options.silent) return void console.error(_);
                  throw new Error(_);
              }
            else x += D || '';
          return x;
        }),
        (e.parseInline = function (t, e) {
          e = e || this.renderer;
          var r,
            i,
            s,
            a = '',
            n = t.length;
          for (r = 0; r < n; r++)
            if (
              ((i = t[r]),
              !(
                this.options.extensions &&
                this.options.extensions.renderers &&
                this.options.extensions.renderers[i.type]
              ) ||
                (!1 ===
                  (s = this.options.extensions.renderers[i.type].call(
                    this,
                    i
                  )) &&
                  [
                    'escape',
                    'html',
                    'link',
                    'image',
                    'strong',
                    'em',
                    'codespan',
                    'br',
                    'del',
                    'text',
                  ].includes(i.type)))
            )
              switch (i.type) {
                case 'escape':
                  a += e.text(i.text);
                  break;
                case 'html':
                  a += e.html(i.text);
                  break;
                case 'link':
                  a += e.link(i.href, i.title, this.parseInline(i.tokens, e));
                  break;
                case 'image':
                  a += e.image(i.href, i.title, i.text);
                  break;
                case 'strong':
                  a += e.strong(this.parseInline(i.tokens, e));
                  break;
                case 'em':
                  a += e.em(this.parseInline(i.tokens, e));
                  break;
                case 'codespan':
                  a += e.codespan(i.text);
                  break;
                case 'br':
                  a += e.br();
                  break;
                case 'del':
                  a += e.del(this.parseInline(i.tokens, e));
                  break;
                case 'text':
                  a += e.text(i.text);
                  break;
                default:
                  var o = 'Token with "' + i.type + '" type was not found.';
                  if (this.options.silent) return void console.error(o);
                  throw new Error(o);
              }
            else a += s || '';
          return a;
        }),
        t
      );
    })(),
    dt = G,
    gt = at,
    yt = nt,
    vt = ot,
    bt = I.merge,
    Dt = I.checkSanitizeDeprecation,
    xt = I.escape,
    Et = a.exports.getDefaults,
    _t = a.exports.changeDefaults,
    Ct = a.exports.defaults;
  function At(t, e, r) {
    if (null == t)
      throw new Error('marked(): input parameter is undefined or null');
    if ('string' != typeof t)
      throw new Error(
        'marked(): input parameter is of type ' +
          Object.prototype.toString.call(t) +
          ', string expected'
      );
    if (
      ('function' == typeof e && ((r = e), (e = null)),
      (e = bt({}, At.defaults, e || {})),
      Dt(e),
      r)
    ) {
      var i,
        s = e.highlight;
      try {
        i = ft.lex(t, e);
      } catch (l) {
        return r(l);
      }
      var a = function (t) {
        var a;
        if (!t)
          try {
            e.walkTokens && At.walkTokens(i, e.walkTokens),
              (a = mt.parse(i, e));
          } catch (l) {
            t = l;
          }
        return (e.highlight = s), t ? r(t) : r(null, a);
      };
      if (!s || s.length < 3) return a();
      if ((delete e.highlight, !i.length)) return a();
      var n = 0;
      return (
        At.walkTokens(i, function (t) {
          'code' === t.type &&
            (n++,
            setTimeout(function () {
              s(t.text, t.lang, function (e, r) {
                if (e) return a(e);
                null != r && r !== t.text && ((t.text = r), (t.escaped = !0)),
                  0 == --n && a();
              });
            }, 0));
        }),
        void (0 === n && a())
      );
    }
    try {
      var o = ft.lex(t, e);
      return e.walkTokens && At.walkTokens(o, e.walkTokens), mt.parse(o, e);
    } catch (l) {
      if (
        ((l.message +=
          '\nPlease report this to https://github.com/markedjs/marked.'),
        e.silent)
      )
        return (
          '<p>An error occurred:</p><pre>' + xt(l.message + '', !0) + '</pre>'
        );
      throw l;
    }
  }
  return (
    (At.options = At.setOptions =
      function (t) {
        return bt(At.defaults, t), _t(At.defaults), At;
      }),
    (At.getDefaults = Et),
    (At.defaults = Ct),
    (At.use = function () {
      for (
        var t = this, e = arguments.length, r = new Array(e), i = 0;
        i < e;
        i++
      )
        r[i] = arguments[i];
      var s,
        a = bt.apply(void 0, [{}].concat(r)),
        n = At.defaults.extensions || { renderers: {}, childTokens: {} };
      r.forEach(function (e) {
        if (
          (e.extensions &&
            ((s = !0),
            e.extensions.forEach(function (t) {
              if (!t.name) throw new Error('extension name required');
              if (t.renderer) {
                var e = n.renderers ? n.renderers[t.name] : null;
                n.renderers[t.name] = e
                  ? function () {
                      for (
                        var r = arguments.length, i = new Array(r), s = 0;
                        s < r;
                        s++
                      )
                        i[s] = arguments[s];
                      var a = t.renderer.apply(this, i);
                      return !1 === a && (a = e.apply(this, i)), a;
                    }
                  : t.renderer;
              }
              if (t.tokenizer) {
                if (!t.level || ('block' !== t.level && 'inline' !== t.level))
                  throw new Error(
                    "extension level must be 'block' or 'inline'"
                  );
                n[t.level]
                  ? n[t.level].unshift(t.tokenizer)
                  : (n[t.level] = [t.tokenizer]),
                  t.start &&
                    ('block' === t.level
                      ? n.startBlock
                        ? n.startBlock.push(t.start)
                        : (n.startBlock = [t.start])
                      : 'inline' === t.level &&
                        (n.startInline
                          ? n.startInline.push(t.start)
                          : (n.startInline = [t.start])));
              }
              t.childTokens && (n.childTokens[t.name] = t.childTokens);
            })),
          e.renderer &&
            (function () {
              var t = At.defaults.renderer || new gt(),
                r = function (r) {
                  var i = t[r];
                  t[r] = function () {
                    for (
                      var s = arguments.length, a = new Array(s), n = 0;
                      n < s;
                      n++
                    )
                      a[n] = arguments[n];
                    var o = e.renderer[r].apply(t, a);
                    return !1 === o && (o = i.apply(t, a)), o;
                  };
                };
              for (var i in e.renderer) r(i);
              a.renderer = t;
            })(),
          e.tokenizer &&
            (function () {
              var t = At.defaults.tokenizer || new dt(),
                r = function (r) {
                  var i = t[r];
                  t[r] = function () {
                    for (
                      var s = arguments.length, a = new Array(s), n = 0;
                      n < s;
                      n++
                    )
                      a[n] = arguments[n];
                    var o = e.tokenizer[r].apply(t, a);
                    return !1 === o && (o = i.apply(t, a)), o;
                  };
                };
              for (var i in e.tokenizer) r(i);
              a.tokenizer = t;
            })(),
          e.walkTokens)
        ) {
          var r = At.defaults.walkTokens;
          a.walkTokens = function (i) {
            e.walkTokens.call(t, i), r && r(i);
          };
        }
        s && (a.extensions = n), At.setOptions(a);
      });
    }),
    (At.walkTokens = function (t, e) {
      for (
        var r,
          i = function () {
            var t = r.value;
            switch ((e(t), t.type)) {
              case 'table':
                for (var i, a = s(t.tokens.header); !(i = a()).done; ) {
                  var n = i.value;
                  At.walkTokens(n, e);
                }
                for (var o, l = s(t.tokens.cells); !(o = l()).done; )
                  for (var h, p = s(o.value); !(h = p()).done; ) {
                    var u = h.value;
                    At.walkTokens(u, e);
                  }
                break;
              case 'list':
                At.walkTokens(t.items, e);
                break;
              default:
                At.defaults.extensions &&
                At.defaults.extensions.childTokens &&
                At.defaults.extensions.childTokens[t.type]
                  ? At.defaults.extensions.childTokens[t.type].forEach(
                      function (r) {
                        At.walkTokens(t[r], e);
                      }
                    )
                  : t.tokens && At.walkTokens(t.tokens, e);
            }
          },
          a = s(t);
        !(r = a()).done;

      )
        i();
    }),
    (At.parseInline = function (t, e) {
      if (null == t)
        throw new Error(
          'marked.parseInline(): input parameter is undefined or null'
        );
      if ('string' != typeof t)
        throw new Error(
          'marked.parseInline(): input parameter is of type ' +
            Object.prototype.toString.call(t) +
            ', string expected'
        );
      (e = bt({}, At.defaults, e || {})), Dt(e);
      try {
        var r = ft.lexInline(t, e);
        return (
          e.walkTokens && At.walkTokens(r, e.walkTokens), mt.parseInline(r, e)
        );
      } catch (i) {
        if (
          ((i.message +=
            '\nPlease report this to https://github.com/markedjs/marked.'),
          e.silent)
        )
          return (
            '<p>An error occurred:</p><pre>' + xt(i.message + '', !0) + '</pre>'
          );
        throw i;
      }
    }),
    (At.Parser = mt),
    (At.parser = mt.parse),
    (At.Renderer = gt),
    (At.TextRenderer = yt),
    (At.Lexer = ft),
    (At.lexer = ft.lex),
    (At.Tokenizer = dt),
    (At.Slugger = vt),
    (At.parse = At),
    At
  );
})();
var marked = marked$1.exports;
function create_if_block(t) {
  let e, r, i, s;
  function a(t, e) {
    return 'string' == typeof t[8][4] ? create_if_block_1 : create_else_block;
  }
  let n = a(t),
    o = n(t);
  return {
    c() {
      (e = svg_element('svg')),
        (r = svg_element('g')),
        (i = svg_element('g')),
        o.c(),
        this.h();
    },
    l(t) {
      e = claim_svg_element(t, 'svg', {
        id: !0,
        class: !0,
        style: !0,
        viewBox: !0,
        'aria-hidden': !0,
        role: !0,
        xmlns: !0,
      });
      var s = children(e);
      r = claim_svg_element(s, 'g', { transform: !0 });
      var a = children(r);
      i = claim_svg_element(a, 'g', { transform: !0 });
      var n = children(i);
      o.l(n), n.forEach(detach), a.forEach(detach), s.forEach(detach), this.h();
    },
    h() {
      attr(i, 'transform', t[10]),
        attr(r, 'transform', 'translate(256 256)'),
        attr(e, 'id', t[1]),
        attr(e, 'class', t[0]),
        attr(e, 'style', t[9]),
        attr(e, 'viewBox', (s = `0 0 ${t[8][0]} ${t[8][1]}`)),
        attr(e, 'aria-hidden', 'true'),
        attr(e, 'role', 'img'),
        attr(e, 'xmlns', 'http://www.w3.org/2000/svg');
    },
    m(t, s) {
      insert_hydration(t, e, s),
        append_hydration(e, r),
        append_hydration(r, i),
        o.m(i, null);
    },
    p(t, r) {
      n === (n = a(t)) && o
        ? o.p(t, r)
        : (o.d(1), (o = n(t)), o && (o.c(), o.m(i, null))),
        1024 & r && attr(i, 'transform', t[10]),
        2 & r && attr(e, 'id', t[1]),
        1 & r && attr(e, 'class', t[0]),
        512 & r && attr(e, 'style', t[9]),
        256 & r &&
          s !== (s = `0 0 ${t[8][0]} ${t[8][1]}`) &&
          attr(e, 'viewBox', s);
    },
    d(t) {
      t && detach(e), o.d();
    },
  };
}
function create_else_block(t) {
  let e, r, i, s, a, n, o, l;
  return {
    c() {
      (e = svg_element('path')), (a = svg_element('path')), this.h();
    },
    l(t) {
      (e = claim_svg_element(t, 'path', {
        d: !0,
        fill: !0,
        'fill-opacity': !0,
        transform: !0,
      })),
        children(e).forEach(detach),
        (a = claim_svg_element(t, 'path', {
          d: !0,
          fill: !0,
          'fill-opacity': !0,
          transform: !0,
        })),
        children(a).forEach(detach),
        this.h();
    },
    h() {
      attr(e, 'd', (r = t[8][4][0])),
        attr(e, 'fill', (i = t[4] || t[2] || 'currentColor')),
        attr(e, 'fill-opacity', (s = 0 != t[7] ? t[5] : t[6])),
        attr(e, 'transform', 'translate(-256 -256)'),
        attr(a, 'd', (n = t[8][4][1])),
        attr(a, 'fill', (o = t[3] || t[2] || 'currentColor')),
        attr(a, 'fill-opacity', (l = 0 != t[7] ? t[6] : t[5])),
        attr(a, 'transform', 'translate(-256 -256)');
    },
    m(t, r) {
      insert_hydration(t, e, r), insert_hydration(t, a, r);
    },
    p(t, h) {
      256 & h && r !== (r = t[8][4][0]) && attr(e, 'd', r),
        20 & h &&
          i !== (i = t[4] || t[2] || 'currentColor') &&
          attr(e, 'fill', i),
        224 & h &&
          s !== (s = 0 != t[7] ? t[5] : t[6]) &&
          attr(e, 'fill-opacity', s),
        256 & h && n !== (n = t[8][4][1]) && attr(a, 'd', n),
        12 & h &&
          o !== (o = t[3] || t[2] || 'currentColor') &&
          attr(a, 'fill', o),
        224 & h &&
          l !== (l = 0 != t[7] ? t[6] : t[5]) &&
          attr(a, 'fill-opacity', l);
    },
    d(t) {
      t && detach(e), t && detach(a);
    },
  };
}
function create_if_block_1(t) {
  let e, r, i;
  return {
    c() {
      (e = svg_element('path')), this.h();
    },
    l(t) {
      (e = claim_svg_element(t, 'path', { d: !0, fill: !0, transform: !0 })),
        children(e).forEach(detach),
        this.h();
    },
    h() {
      attr(e, 'd', (r = t[8][4])),
        attr(e, 'fill', (i = t[2] || t[3] || 'currentColor')),
        attr(e, 'transform', 'translate(-256 -256)');
    },
    m(t, r) {
      insert_hydration(t, e, r);
    },
    p(t, s) {
      256 & s && r !== (r = t[8][4]) && attr(e, 'd', r),
        12 & s &&
          i !== (i = t[2] || t[3] || 'currentColor') &&
          attr(e, 'fill', i);
    },
    d(t) {
      t && detach(e);
    },
  };
}
function create_fragment$1(t) {
  let e,
    r = t[8][4] && create_if_block(t);
  return {
    c() {
      r && r.c(), (e = empty());
    },
    l(t) {
      r && r.l(t), (e = empty());
    },
    m(t, i) {
      r && r.m(t, i), insert_hydration(t, e, i);
    },
    p(t, [i]) {
      t[8][4]
        ? r
          ? r.p(t, i)
          : ((r = create_if_block(t)), r.c(), r.m(e.parentNode, e))
        : r && (r.d(1), (r = null));
    },
    i: noop,
    o: noop,
    d(t) {
      r && r.d(t), t && detach(e);
    },
  };
}
function instance$1(t, e, r) {
  let i,
    s,
    a,
    { class: n = '' } = e,
    { id: o = '' } = e,
    { style: l = '' } = e,
    { icon: h } = e,
    { fw: p = !1 } = e,
    { flip: u = !1 } = e,
    { pull: c = '' } = e,
    { rotate: f = '' } = e,
    { size: m = '' } = e,
    { color: d = '' } = e,
    { primaryColor: g = '' } = e,
    { secondaryColor: y = '' } = e,
    { primaryOpacity: v = 1 } = e,
    { secondaryOpacity: b = 0.4 } = e,
    { swapOpacity: D = !1 } = e;
  return (
    (t.$$set = (t) => {
      'class' in t && r(0, (n = t.class)),
        'id' in t && r(1, (o = t.id)),
        'style' in t && r(11, (l = t.style)),
        'icon' in t && r(12, (h = t.icon)),
        'fw' in t && r(13, (p = t.fw)),
        'flip' in t && r(14, (u = t.flip)),
        'pull' in t && r(15, (c = t.pull)),
        'rotate' in t && r(16, (f = t.rotate)),
        'size' in t && r(17, (m = t.size)),
        'color' in t && r(2, (d = t.color)),
        'primaryColor' in t && r(3, (g = t.primaryColor)),
        'secondaryColor' in t && r(4, (y = t.secondaryColor)),
        'primaryOpacity' in t && r(5, (v = t.primaryOpacity)),
        'secondaryOpacity' in t && r(6, (b = t.secondaryOpacity)),
        'swapOpacity' in t && r(7, (D = t.swapOpacity));
    }),
    (t.$$.update = () => {
      if (
        (4096 & t.$$.dirty && r(8, (i = (h && h.icon) || [0, 0, '', [], ''])),
        174080 & t.$$.dirty)
      ) {
        let t, e;
        const i = '1em';
        let a,
          n,
          o,
          h = '-.125em';
        const u = 'visible';
        p && ((o = 'center'), (e = '1.25em')),
          c && (t = c),
          m &&
            ('lg' == m
              ? ((n = '1.33333em'), (a = '.75em'), (h = '-.225em'))
              : (n =
                  'xs' == m
                    ? '.75em'
                    : 'sm' == m
                    ? '.875em'
                    : m.replace('x', 'em')));
        const f = {
          float: t,
          width: e,
          height: i,
          'line-height': a,
          'font-size': n,
          'text-align': o,
          'vertical-align': h,
          overflow: u,
        };
        let d = '';
        for (const r in f) f[r] && (d += `${r}:${f[r]};`);
        r(9, (s = d + l));
      }
      if (81920 & t.$$.dirty) {
        let t = '';
        if (u) {
          let e = 1,
            r = 1;
          'horizontal' == u
            ? (e = -1)
            : 'vertical' == u
            ? (r = -1)
            : (e = r = -1),
            (t += ` scale(${e} ${r})`);
        }
        f && (t += ` rotate(${f} 0 0)`), r(10, (a = t));
      }
    }),
    [n, o, d, g, y, v, b, D, i, s, a, l, h, p, u, c, f, m]
  );
}
class Fa extends SvelteComponent {
  constructor(t) {
    super(),
      init(this, t, instance$1, create_fragment$1, safe_not_equal, {
        class: 0,
        id: 1,
        style: 11,
        icon: 12,
        fw: 13,
        flip: 14,
        pull: 15,
        rotate: 16,
        size: 17,
        color: 2,
        primaryColor: 3,
        secondaryColor: 4,
        primaryOpacity: 5,
        secondaryOpacity: 6,
        swapOpacity: 7,
      });
  }
}
var pym_v1 = { exports: {} },
  module2;
/*! pym.js - v1.3.2 - 2018-02-13 */ (module2 = pym_v1),
  (function (t) {
    module2.exports ? (module2.exports = t()) : (window.pym = t.call(this));
  })(function () {
    var t = 'xPYMx',
      e = {},
      r = function (t) {
        var e = document.createEvent('Event');
        e.initEvent('pym:' + t, !0, !0), document.dispatchEvent(e);
      },
      i = function (t) {
        var e = new RegExp(
          '[\\?&]' +
            t.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]') +
            '=([^&#]*)'
        ).exec(location.search);
        return null === e ? '' : decodeURIComponent(e[1].replace(/\+/g, ' '));
      },
      s = function (t, e) {
        if (
          ('*' === e.xdomain || t.origin.match(new RegExp(e.xdomain + '$'))) &&
          'string' == typeof t.data
        )
          return !0;
      },
      a = function (e, r, i) {
        return ['pym', e, r, i].join(t);
      },
      n =
        Date.now ||
        function () {
          return new Date().getTime();
        },
      o = function () {
        for (var t = e.autoInitInstances.length - 1; t >= 0; t--) {
          var r = e.autoInitInstances[t];
          (r.el.getElementsByTagName('iframe').length &&
            r.el.getElementsByTagName('iframe')[0].contentWindow) ||
            e.autoInitInstances.splice(t, 1);
        }
      };
    return (
      (e.autoInitInstances = []),
      (e.autoInit = function (t) {
        var i = document.querySelectorAll(
            '[data-pym-src]:not([data-pym-auto-initialized])'
          ),
          s = i.length;
        o();
        for (var a = 0; a < s; ++a) {
          var n = i[a];
          n.setAttribute('data-pym-auto-initialized', ''),
            '' === n.id &&
              (n.id =
                'pym-' + a + '-' + Math.random().toString(36).substr(2, 5));
          var l = n.getAttribute('data-pym-src'),
            h = {
              xdomain: 'string',
              title: 'string',
              name: 'string',
              id: 'string',
              sandbox: 'string',
              allowfullscreen: 'boolean',
              parenturlparam: 'string',
              parenturlvalue: 'string',
              optionalparams: 'boolean',
              trackscroll: 'boolean',
              scrollwait: 'number',
            },
            p = {};
          for (var u in h)
            if (null !== n.getAttribute('data-pym-' + u))
              switch (h[u]) {
                case 'boolean':
                  p[u] = !('false' === n.getAttribute('data-pym-' + u));
                  break;
                case 'string':
                  p[u] = n.getAttribute('data-pym-' + u);
                  break;
                case 'number':
                  var c = Number(n.getAttribute('data-pym-' + u));
                  isNaN(c) || (p[u] = c);
                  break;
                default:
                  console.err('unrecognized attribute type');
              }
          var f = new e.Parent(n.id, l, p);
          e.autoInitInstances.push(f);
        }
        return t || r('pym-initialized'), e.autoInitInstances;
      }),
      (e.Parent = function (e, r, i) {
        for (var l in ((this.id = e),
        (this.url = r),
        (this.el = document.getElementById(e)),
        (this.iframe = null),
        (this.settings = {
          xdomain: '*',
          optionalparams: !0,
          parenturlparam: 'parentUrl',
          parenturlvalue: window.location.href,
          trackscroll: !1,
          scrollwait: 100,
        }),
        (this.messageRegex = (function (e) {
          return new RegExp('^' + ['pym', e, '(\\S+)', '(.*)'].join(t) + '$');
        })(this.id)),
        (this.messageHandlers = {}),
        (i = i || {}),
        (this._constructIframe = function () {
          var t = this.el.offsetWidth.toString();
          this.iframe = document.createElement('iframe');
          var e = '',
            r = this.url.indexOf('#');
          for (
            r > -1 &&
              ((e = this.url.substring(r, this.url.length)),
              (this.url = this.url.substring(0, r))),
              this.url.indexOf('?') < 0 ? (this.url += '?') : (this.url += '&'),
              this.iframe.src =
                this.url + 'initialWidth=' + t + '&childId=' + this.id,
              this.settings.optionalparams &&
                ((this.iframe.src +=
                  '&parentTitle=' + encodeURIComponent(document.title)),
                (this.iframe.src +=
                  '&' +
                  this.settings.parenturlparam +
                  '=' +
                  encodeURIComponent(this.settings.parenturlvalue))),
              this.iframe.src += e,
              this.iframe.setAttribute('width', '100%'),
              this.iframe.setAttribute('scrolling', 'no'),
              this.iframe.setAttribute('marginheight', '0'),
              this.iframe.setAttribute('frameborder', '0'),
              this.settings.title &&
                this.iframe.setAttribute('title', this.settings.title),
              void 0 !== this.settings.allowfullscreen &&
                !1 !== this.settings.allowfullscreen &&
                this.iframe.setAttribute('allowfullscreen', ''),
              void 0 !== this.settings.sandbox &&
                'string' == typeof this.settings.sandbox &&
                this.iframe.setAttribute('sandbox', this.settings.sandbox),
              this.settings.id &&
                (document.getElementById(this.settings.id) ||
                  this.iframe.setAttribute('id', this.settings.id)),
              this.settings.name &&
                this.iframe.setAttribute('name', this.settings.name);
            this.el.firstChild;

          )
            this.el.removeChild(this.el.firstChild);
          this.el.appendChild(this.iframe),
            window.addEventListener('resize', this._onResize),
            this.settings.trackscroll &&
              window.addEventListener('scroll', this._throttleOnScroll);
        }),
        (this._onResize = function () {
          this.sendWidth(),
            this.settings.trackscroll && this.sendViewportAndIFramePosition();
        }.bind(this)),
        (this._onScroll = function () {
          this.sendViewportAndIFramePosition();
        }.bind(this)),
        (this._fire = function (t, e) {
          if (t in this.messageHandlers)
            for (var r = 0; r < this.messageHandlers[t].length; r++)
              this.messageHandlers[t][r].call(this, e);
        }),
        (this.remove = function () {
          window.removeEventListener('message', this._processMessage),
            window.removeEventListener('resize', this._onResize),
            this.el.removeChild(this.iframe),
            o();
        }),
        (this._processMessage = function (t) {
          if (s(t, this.settings) && 'string' == typeof t.data) {
            var e = t.data.match(this.messageRegex);
            if (!e || 3 !== e.length) return !1;
            var r = e[1],
              i = e[2];
            this._fire(r, i);
          }
        }.bind(this)),
        (this._onHeightMessage = function (t) {
          var e = parseInt(t);
          this.iframe.setAttribute('height', e + 'px');
        }),
        (this._onNavigateToMessage = function (t) {
          (function (t) {
            if (t.match(/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/gi))
              return !0;
          })(t) && (document.location.href = t);
        }),
        (this._onScrollToChildPosMessage = function (t) {
          var e =
            document.getElementById(this.id).getBoundingClientRect().top +
            window.pageYOffset +
            parseInt(t);
          window.scrollTo(0, e);
        }),
        (this.onMessage = function (t, e) {
          t in this.messageHandlers || (this.messageHandlers[t] = []),
            this.messageHandlers[t].push(e);
        }),
        (this.sendMessage = function (t, e) {
          this.el.getElementsByTagName('iframe').length &&
            (this.el.getElementsByTagName('iframe')[0].contentWindow
              ? this.el
                  .getElementsByTagName('iframe')[0]
                  .contentWindow.postMessage(a(this.id, t, e), '*')
              : this.remove());
        }),
        (this.sendWidth = function () {
          var t = this.el.offsetWidth.toString();
          this.sendMessage('width', t);
        }),
        (this.sendViewportAndIFramePosition = function () {
          var t = this.iframe.getBoundingClientRect(),
            e =
              (window.innerWidth || document.documentElement.clientWidth) +
              ' ' +
              (window.innerHeight || document.documentElement.clientHeight);
          (e += ' ' + t.top + ' ' + t.left),
            (e += ' ' + t.bottom + ' ' + t.right),
            this.sendMessage('viewport-iframe-position', e);
        }),
        i))
          this.settings[l] = i[l];
        return (
          (this._throttleOnScroll = (function (t, e, r) {
            var i,
              s,
              a,
              o = null,
              l = 0;
            r || (r = {});
            var h = function () {
              (l = !1 === r.leading ? 0 : n()),
                (o = null),
                (a = t.apply(i, s)),
                o || (i = s = null);
            };
            return function () {
              var p = n();
              l || !1 !== r.leading || (l = p);
              var u = e - (p - l);
              return (
                (i = this),
                (s = arguments),
                u <= 0 || u > e
                  ? (o && (clearTimeout(o), (o = null)),
                    (l = p),
                    (a = t.apply(i, s)),
                    o || (i = s = null))
                  : o || !1 === r.trailing || (o = setTimeout(h, u)),
                a
              );
            };
          })(this._onScroll.bind(this), this.settings.scrollwait)),
          this.onMessage('height', this._onHeightMessage),
          this.onMessage('navigateTo', this._onNavigateToMessage),
          this.onMessage('scrollToChildPos', this._onScrollToChildPosMessage),
          this.onMessage(
            'parentPositionInfo',
            this.sendViewportAndIFramePosition
          ),
          window.addEventListener('message', this._processMessage, !1),
          this._constructIframe(),
          this
        );
      }),
      (e.Child = function (t) {
        for (var e in ((this.parentWidth = null),
        (this.id = null),
        (this.parentTitle = null),
        (this.parentUrl = null),
        (this.settings = {
          renderCallback: null,
          xdomain: '*',
          polling: 0,
          parenturlparam: 'parentUrl',
        }),
        (this.timerId = null),
        (this.messageRegex = null),
        (this.messageHandlers = {}),
        (t = t || {}),
        (this.onMessage = function (t, e) {
          t in this.messageHandlers || (this.messageHandlers[t] = []),
            this.messageHandlers[t].push(e);
        }),
        (this._fire = function (t, e) {
          if (t in this.messageHandlers)
            for (var r = 0; r < this.messageHandlers[t].length; r++)
              this.messageHandlers[t][r].call(this, e);
        }),
        (this._processMessage = function (t) {
          if (s(t, this.settings) && 'string' == typeof t.data) {
            var e = t.data.match(this.messageRegex);
            if (e && 3 === e.length) {
              var r = e[1],
                i = e[2];
              this._fire(r, i);
            }
          }
        }.bind(this)),
        (this._onWidthMessage = function (t) {
          var e = parseInt(t);
          e !== this.parentWidth &&
            ((this.parentWidth = e),
            this.settings.renderCallback && this.settings.renderCallback(e),
            this.sendHeight());
        }),
        (this.sendMessage = function (t, e) {
          window.parent.postMessage(a(this.id, t, e), '*');
        }),
        (this.sendHeight = function () {
          var t = document
            .getElementsByTagName('body')[0]
            .offsetHeight.toString();
          return this.sendMessage('height', t), t;
        }.bind(this)),
        (this.getParentPositionInfo = function () {
          this.sendMessage('parentPositionInfo');
        }),
        (this.scrollParentTo = function (t) {
          this.sendMessage('navigateTo', '#' + t);
        }),
        (this.navigateParentTo = function (t) {
          this.sendMessage('navigateTo', t);
        }),
        (this.scrollParentToChildEl = function (t) {
          var e =
            document.getElementById(t).getBoundingClientRect().top +
            window.pageYOffset;
          this.scrollParentToChildPos(e);
        }),
        (this.scrollParentToChildPos = function (t) {
          this.sendMessage('scrollToChildPos', t.toString());
        }),
        (this.remove = function () {
          window.removeEventListener('message', this._processMessage),
            this.timerId && clearInterval(this.timerId);
        }),
        t))
          this.settings[e] = t[e];
        (this.id = i('childId') || t.id),
          (this.messageRegex = new RegExp(
            '^pymxPYMx' + this.id + 'xPYMx(\\S+)xPYMx(.*)$'
          ));
        var n = parseInt(i('initialWidth'));
        return (
          (this.parentUrl = i(this.settings.parenturlparam)),
          (this.parentTitle = i('parentTitle')),
          this.onMessage('width', this._onWidthMessage),
          window.addEventListener('message', this._processMessage, !1),
          this.settings.renderCallback && this.settings.renderCallback(n),
          this.sendHeight(),
          this.settings.polling &&
            (this.timerId = window.setInterval(
              this.sendHeight,
              this.settings.polling
            )),
          (function (t) {
            var e,
              i = document.getElementsByTagName('html')[0],
              s = i.className;
            try {
              e = window.self !== window.top ? 'embedded' : 'not-embedded';
            } catch (a) {
              e = 'embedded';
            }
            s.indexOf(e) < 0 &&
              ((i.className = s ? s + ' ' + e : e),
              t && t(e),
              r('marked-embedded'));
          })(t.onMarkedEmbeddedStatus),
          this
        );
      }),
      'undefined' != typeof document && e.autoInit(!0),
      e
    );
  });
var queryString = {},
  strictUriEncode = (t) =>
    encodeURIComponent(t).replace(
      /[!'()*]/g,
      (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`
    ),
  token = '%[a-f0-9]{2}',
  singleMatcher = new RegExp(token, 'gi'),
  multiMatcher = new RegExp('(' + token + ')+', 'gi');
function decodeComponents(t, e) {
  try {
    return decodeURIComponent(t.join(''));
  } catch (s) {}
  if (1 === t.length) return t;
  e = e || 1;
  var r = t.slice(0, e),
    i = t.slice(e);
  return Array.prototype.concat.call(
    [],
    decodeComponents(r),
    decodeComponents(i)
  );
}
function decode(t) {
  try {
    return decodeURIComponent(t);
  } catch (i) {
    for (var e = t.match(singleMatcher), r = 1; r < e.length; r++)
      e = (t = decodeComponents(e, r).join('')).match(singleMatcher);
    return t;
  }
}
function customDecodeURIComponent(t) {
  for (
    var e = { '%FE%FF': '��', '%FF%FE': '��' }, r = multiMatcher.exec(t);
    r;

  ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch (o) {
      var i = decode(r[0]);
      i !== r[0] && (e[r[0]] = i);
    }
    r = multiMatcher.exec(t);
  }
  e['%C2'] = '�';
  for (var s = Object.keys(e), a = 0; a < s.length; a++) {
    var n = s[a];
    t = t.replace(new RegExp(n, 'g'), e[n]);
  }
  return t;
}
var decodeUriComponent = function (t) {
    if ('string' != typeof t)
      throw new TypeError(
        'Expected `encodedURI` to be of type `string`, got `' + typeof t + '`'
      );
    try {
      return (t = t.replace(/\+/g, ' ')), decodeURIComponent(t);
    } catch (e) {
      return customDecodeURIComponent(t);
    }
  },
  splitOnFirst = (t, e) => {
    if ('string' != typeof t || 'string' != typeof e)
      throw new TypeError('Expected the arguments to be of type `string`');
    if ('' === e) return [t];
    const r = t.indexOf(e);
    return -1 === r ? [t] : [t.slice(0, r), t.slice(r + e.length)];
  },
  filterObj = function (t, e) {
    for (
      var r = {}, i = Object.keys(t), s = Array.isArray(e), a = 0;
      a < i.length;
      a++
    ) {
      var n = i[a],
        o = t[n];
      (s ? -1 !== e.indexOf(n) : e(n, o, t)) && (r[n] = o);
    }
    return r;
  };
!(function (t) {
  const e = strictUriEncode,
    r = decodeUriComponent,
    i = splitOnFirst,
    s = filterObj;
  function a(t) {
    if ('string' != typeof t || 1 !== t.length)
      throw new TypeError(
        'arrayFormatSeparator must be single character string'
      );
  }
  function n(t, r) {
    return r.encode ? (r.strict ? e(t) : encodeURIComponent(t)) : t;
  }
  function o(t, e) {
    return e.decode ? r(t) : t;
  }
  function l(t) {
    return Array.isArray(t)
      ? t.sort()
      : 'object' == typeof t
      ? l(Object.keys(t))
          .sort((t, e) => Number(t) - Number(e))
          .map((e) => t[e])
      : t;
  }
  function h(t) {
    const e = t.indexOf('#');
    return -1 !== e && (t = t.slice(0, e)), t;
  }
  function p(t) {
    const e = (t = h(t)).indexOf('?');
    return -1 === e ? '' : t.slice(e + 1);
  }
  function u(t, e) {
    return (
      e.parseNumbers &&
      !Number.isNaN(Number(t)) &&
      'string' == typeof t &&
      '' !== t.trim()
        ? (t = Number(t))
        : !e.parseBooleans ||
          null === t ||
          ('true' !== t.toLowerCase() && 'false' !== t.toLowerCase()) ||
          (t = 'true' === t.toLowerCase()),
      t
    );
  }
  function c(t, e) {
    a(
      (e = Object.assign(
        {
          decode: !0,
          sort: !0,
          arrayFormat: 'none',
          arrayFormatSeparator: ',',
          parseNumbers: !1,
          parseBooleans: !1,
        },
        e
      )).arrayFormatSeparator
    );
    const r = (function (t) {
        let e;
        switch (t.arrayFormat) {
          case 'index':
            return (t, r, i) => {
              (e = /\[(\d*)\]$/.exec(t)),
                (t = t.replace(/\[\d*\]$/, '')),
                e
                  ? (void 0 === i[t] && (i[t] = {}), (i[t][e[1]] = r))
                  : (i[t] = r);
            };
          case 'bracket':
            return (t, r, i) => {
              (e = /(\[\])$/.exec(t)),
                (t = t.replace(/\[\]$/, '')),
                e
                  ? void 0 !== i[t]
                    ? (i[t] = [].concat(i[t], r))
                    : (i[t] = [r])
                  : (i[t] = r);
            };
          case 'comma':
          case 'separator':
            return (e, r, i) => {
              const s =
                  'string' == typeof r && r.includes(t.arrayFormatSeparator),
                a =
                  'string' == typeof r &&
                  !s &&
                  o(r, t).includes(t.arrayFormatSeparator);
              r = a ? o(r, t) : r;
              const n =
                s || a
                  ? r.split(t.arrayFormatSeparator).map((e) => o(e, t))
                  : null === r
                  ? r
                  : o(r, t);
              i[e] = n;
            };
          default:
            return (t, e, r) => {
              void 0 !== r[t] ? (r[t] = [].concat(r[t], e)) : (r[t] = e);
            };
        }
      })(e),
      s = Object.create(null);
    if ('string' != typeof t) return s;
    if (!(t = t.trim().replace(/^[?#&]/, ''))) return s;
    for (const a of t.split('&')) {
      if ('' === a) continue;
      let [t, n] = i(e.decode ? a.replace(/\+/g, ' ') : a, '=');
      (n =
        void 0 === n
          ? null
          : ['comma', 'separator'].includes(e.arrayFormat)
          ? n
          : o(n, e)),
        r(o(t, e), n, s);
    }
    for (const i of Object.keys(s)) {
      const t = s[i];
      if ('object' == typeof t && null !== t)
        for (const r of Object.keys(t)) t[r] = u(t[r], e);
      else s[i] = u(t, e);
    }
    return !1 === e.sort
      ? s
      : (!0 === e.sort
          ? Object.keys(s).sort()
          : Object.keys(s).sort(e.sort)
        ).reduce((t, e) => {
          const r = s[e];
          return (
            Boolean(r) && 'object' == typeof r && !Array.isArray(r)
              ? (t[e] = l(r))
              : (t[e] = r),
            t
          );
        }, Object.create(null));
  }
  (t.extract = p),
    (t.parse = c),
    (t.stringify = (t, e) => {
      if (!t) return '';
      a(
        (e = Object.assign(
          {
            encode: !0,
            strict: !0,
            arrayFormat: 'none',
            arrayFormatSeparator: ',',
          },
          e
        )).arrayFormatSeparator
      );
      const r = (r) =>
          (e.skipNull && null == t[r]) || (e.skipEmptyString && '' === t[r]),
        i = (function (t) {
          switch (t.arrayFormat) {
            case 'index':
              return (e) => (r, i) => {
                const s = r.length;
                return void 0 === i ||
                  (t.skipNull && null === i) ||
                  (t.skipEmptyString && '' === i)
                  ? r
                  : null === i
                  ? [...r, [n(e, t), '[', s, ']'].join('')]
                  : [...r, [n(e, t), '[', n(s, t), ']=', n(i, t)].join('')];
              };
            case 'bracket':
              return (e) => (r, i) =>
                void 0 === i ||
                (t.skipNull && null === i) ||
                (t.skipEmptyString && '' === i)
                  ? r
                  : null === i
                  ? [...r, [n(e, t), '[]'].join('')]
                  : [...r, [n(e, t), '[]=', n(i, t)].join('')];
            case 'comma':
            case 'separator':
              return (e) => (r, i) =>
                null == i || 0 === i.length
                  ? r
                  : 0 === r.length
                  ? [[n(e, t), '=', n(i, t)].join('')]
                  : [[r, n(i, t)].join(t.arrayFormatSeparator)];
            default:
              return (e) => (r, i) =>
                void 0 === i ||
                (t.skipNull && null === i) ||
                (t.skipEmptyString && '' === i)
                  ? r
                  : null === i
                  ? [...r, n(e, t)]
                  : [...r, [n(e, t), '=', n(i, t)].join('')];
          }
        })(e),
        s = {};
      for (const a of Object.keys(t)) r(a) || (s[a] = t[a]);
      const o = Object.keys(s);
      return (
        !1 !== e.sort && o.sort(e.sort),
        o
          .map((r) => {
            const s = t[r];
            return void 0 === s
              ? ''
              : null === s
              ? n(r, e)
              : Array.isArray(s)
              ? s.reduce(i(r), []).join('&')
              : n(r, e) + '=' + n(s, e);
          })
          .filter((t) => t.length > 0)
          .join('&')
      );
    }),
    (t.parseUrl = (t, e) => {
      e = Object.assign({ decode: !0 }, e);
      const [r, s] = i(t, '#');
      return Object.assign(
        { url: r.split('?')[0] || '', query: c(p(t), e) },
        e && e.parseFragmentIdentifier && s
          ? { fragmentIdentifier: o(s, e) }
          : {}
      );
    }),
    (t.stringifyUrl = (e, r) => {
      r = Object.assign({ encode: !0, strict: !0 }, r);
      const i = h(e.url).split('?')[0] || '',
        s = t.extract(e.url),
        a = t.parse(s, { sort: !1 }),
        o = Object.assign(a, e.query);
      let l = t.stringify(o, r);
      l && (l = `?${l}`);
      let p = (function (t) {
        let e = '';
        const r = t.indexOf('#');
        return -1 !== r && (e = t.slice(r)), e;
      })(e.url);
      return (
        e.fragmentIdentifier && (p = `#${n(e.fragmentIdentifier, r)}`),
        `${i}${l}${p}`
      );
    }),
    (t.pick = (e, r, i) => {
      i = Object.assign({ parseFragmentIdentifier: !0 }, i);
      const { url: a, query: n, fragmentIdentifier: o } = t.parseUrl(e, i);
      return t.stringifyUrl(
        { url: a, query: s(n, r), fragmentIdentifier: o },
        i
      );
    }),
    (t.exclude = (e, r, i) => {
      const s = Array.isArray(r) ? (t) => !r.includes(t) : (t, e) => !r(t, e);
      return t.pick(e, s, i);
    });
})(queryString);
const defaultUrlRegExp = /^(\w+:\/\/[^/?]+)?(.*?)(\?.+)?$/,
  protocolRelativeUrlRegExp = /^(\/\/[^/?]+)(.*?)(\?.+)?$/,
  normalizeParts = (t) =>
    t
      .filter((t) => 'string' == typeof t || 'number' == typeof t)
      .map((t) => `${t}`)
      .filter((t) => t),
  parseParts = (t, e) => {
    const { protocolRelative: r } = e,
      i = t.join('/'),
      s = r ? protocolRelativeUrlRegExp : defaultUrlRegExp,
      [, a = '', n = '', o = ''] = i.match(s) || [];
    return {
      prefix: a,
      pathname: {
        parts: n.split('/').filter((t) => '' !== t),
        hasLeading: o ? /^\/\/+/.test(n) : /^\/+/.test(n),
        hasTrailing: o ? /\/\/+$/.test(n) : /\/+$/.test(n),
      },
      suffix: o,
    };
  },
  buildUrl = (t, e) => {
    const { prefix: r, pathname: i, suffix: s } = t,
      { parts: a, hasLeading: n, hasTrailing: o } = i,
      { leadingSlash: l, trailingSlash: h } = e,
      p = !0 === l || ('keep' === l && n),
      u = !0 === h || ('keep' === h && o);
    let c = r;
    a.length > 0 && ((c || p) && (c += '/'), (c += a.join('/'))),
      u && (c += '/'),
      !c && p && (c += '/');
    const f = __spreadValues(
        __spreadValues({}, queryString.parse(s, e.queryOptions)),
        e.query
      ),
      m = queryString.stringify(f, e.queryOptions);
    return m && (c += `?${m}`), c;
  },
  urlJoin = (...t) => {
    const e = t[t.length - 1];
    let r;
    e && 'object' == typeof e && ((r = e), (t = t.slice(0, -1))),
      (r = __spreadValues(
        { leadingSlash: !0, trailingSlash: !1, protocolRelative: !1 },
        r
      )),
      (t = normalizeParts(t));
    const i = parseParts(t, r);
    return buildUrl(i, r);
  };
var classnames$1 = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function (t) {
  !(function () {
    var e = {}.hasOwnProperty;
    function r() {
      for (var t = [], i = 0; i < arguments.length; i++) {
        var s = arguments[i];
        if (s) {
          var a = typeof s;
          if ('string' === a || 'number' === a) t.push(s);
          else if (Array.isArray(s)) {
            if (s.length) {
              var n = r.apply(null, s);
              n && t.push(n);
            }
          } else if ('object' === a)
            if (s.toString === Object.prototype.toString)
              for (var o in s) e.call(s, o) && s[o] && t.push(o);
            else t.push(s.toString());
        }
      }
      return t.join(' ');
    }
    t.exports ? ((r.default = r), (t.exports = r)) : (window.classNames = r);
  })();
})(classnames$1);
var classnames = classnames$1.exports,
  freeGlobal =
    'object' == typeof global && global && global.Object === Object && global,
  freeSelf = 'object' == typeof self && self && self.Object === Object && self,
  root = freeGlobal || freeSelf || Function('return this')(),
  Symbol$1 = root.Symbol,
  objectProto$4 = Object.prototype,
  hasOwnProperty$3 = objectProto$4.hasOwnProperty,
  nativeObjectToString$1 = objectProto$4.toString,
  symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
function getRawTag(t) {
  var e = hasOwnProperty$3.call(t, symToStringTag$1),
    r = t[symToStringTag$1];
  try {
    t[symToStringTag$1] = void 0;
    var i = !0;
  } catch (a) {}
  var s = nativeObjectToString$1.call(t);
  return i && (e ? (t[symToStringTag$1] = r) : delete t[symToStringTag$1]), s;
}
var objectProto$3 = Object.prototype,
  nativeObjectToString = objectProto$3.toString;
function objectToString(t) {
  return nativeObjectToString.call(t);
}
var nullTag = '[object Null]',
  undefinedTag = '[object Undefined]',
  symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag(t) {
  return null == t
    ? void 0 === t
      ? undefinedTag
      : nullTag
    : symToStringTag && symToStringTag in Object(t)
    ? getRawTag(t)
    : objectToString(t);
}
function isObjectLike(t) {
  return null != t && 'object' == typeof t;
}
var symbolTag = '[object Symbol]';
function isSymbol(t) {
  return (
    'symbol' == typeof t || (isObjectLike(t) && baseGetTag(t) == symbolTag)
  );
}
function arrayMap(t, e) {
  for (var r = -1, i = null == t ? 0 : t.length, s = Array(i); ++r < i; )
    s[r] = e(t[r], r, t);
  return s;
}
var isArray = Array.isArray,
  INFINITY$1 = 1 / 0,
  symbolProto = Symbol$1 ? Symbol$1.prototype : void 0,
  symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(t) {
  if ('string' == typeof t) return t;
  if (isArray(t)) return arrayMap(t, baseToString) + '';
  if (isSymbol(t)) return symbolToString ? symbolToString.call(t) : '';
  var e = t + '';
  return '0' == e && 1 / t == -INFINITY$1 ? '-0' : e;
}
function isObject(t) {
  var e = typeof t;
  return null != t && ('object' == e || 'function' == e);
}
var asyncTag = '[object AsyncFunction]',
  funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]',
  proxyTag = '[object Proxy]';
function isFunction(t) {
  if (!isObject(t)) return !1;
  var e = baseGetTag(t);
  return e == funcTag || e == genTag || e == asyncTag || e == proxyTag;
}
var coreJsData = root['__core-js_shared__'],
  maskSrcKey =
    ((uid = /[^.]+$/.exec(
      (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || ''
    )),
    uid ? 'Symbol(src)_1.' + uid : ''),
  uid;
function isMasked(t) {
  return !!maskSrcKey && maskSrcKey in t;
}
var funcProto$1 = Function.prototype,
  funcToString$1 = funcProto$1.toString;
function toSource(t) {
  if (null != t) {
    try {
      return funcToString$1.call(t);
    } catch (e) {}
    try {
      return t + '';
    } catch (e) {}
  }
  return '';
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
  reIsHostCtor = /^\[object .+?Constructor\]$/,
  funcProto = Function.prototype,
  objectProto$2 = Object.prototype,
  funcToString = funcProto.toString,
  hasOwnProperty$2 = objectProto$2.hasOwnProperty,
  reIsNative = RegExp(
    '^' +
      funcToString
        .call(hasOwnProperty$2)
        .replace(reRegExpChar, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?'
        ) +
      '$'
  );
function baseIsNative(t) {
  return (
    !(!isObject(t) || isMasked(t)) &&
    (isFunction(t) ? reIsNative : reIsHostCtor).test(toSource(t))
  );
}
function getValue(t, e) {
  return null == t ? void 0 : t[e];
}
function getNative(t, e) {
  var r = getValue(t, e);
  return baseIsNative(r) ? r : void 0;
}
function eq(t, e) {
  return t === e || (t != t && e != e);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  reIsPlainProp = /^\w*$/;
function isKey(t, e) {
  if (isArray(t)) return !1;
  var r = typeof t;
  return (
    !(
      'number' != r &&
      'symbol' != r &&
      'boolean' != r &&
      null != t &&
      !isSymbol(t)
    ) ||
    reIsPlainProp.test(t) ||
    !reIsDeepProp.test(t) ||
    (null != e && t in Object(e))
  );
}
var nativeCreate = getNative(Object, 'create');
function hashClear() {
  (this.__data__ = nativeCreate ? nativeCreate(null) : {}), (this.size = 0);
}
function hashDelete(t) {
  var e = this.has(t) && delete this.__data__[t];
  return (this.size -= e ? 1 : 0), e;
}
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__',
  objectProto$1 = Object.prototype,
  hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function hashGet(t) {
  var e = this.__data__;
  if (nativeCreate) {
    var r = e[t];
    return r === HASH_UNDEFINED$1 ? void 0 : r;
  }
  return hasOwnProperty$1.call(e, t) ? e[t] : void 0;
}
var objectProto = Object.prototype,
  hasOwnProperty = objectProto.hasOwnProperty;
function hashHas(t) {
  var e = this.__data__;
  return nativeCreate ? void 0 !== e[t] : hasOwnProperty.call(e, t);
}
var HASH_UNDEFINED = '__lodash_hash_undefined__';
function hashSet(t, e) {
  var r = this.__data__;
  return (
    (this.size += this.has(t) ? 0 : 1),
    (r[t] = nativeCreate && void 0 === e ? HASH_UNDEFINED : e),
    this
  );
}
function Hash(t) {
  var e = -1,
    r = null == t ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
function listCacheClear() {
  (this.__data__ = []), (this.size = 0);
}
function assocIndexOf(t, e) {
  for (var r = t.length; r--; ) if (eq(t[r][0], e)) return r;
  return -1;
}
(Hash.prototype.clear = hashClear),
  (Hash.prototype.delete = hashDelete),
  (Hash.prototype.get = hashGet),
  (Hash.prototype.has = hashHas),
  (Hash.prototype.set = hashSet);
var arrayProto = Array.prototype,
  splice = arrayProto.splice;
function listCacheDelete(t) {
  var e = this.__data__,
    r = assocIndexOf(e, t);
  return (
    !(r < 0) &&
    (r == e.length - 1 ? e.pop() : splice.call(e, r, 1), --this.size, !0)
  );
}
function listCacheGet(t) {
  var e = this.__data__,
    r = assocIndexOf(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function listCacheHas(t) {
  return assocIndexOf(this.__data__, t) > -1;
}
function listCacheSet(t, e) {
  var r = this.__data__,
    i = assocIndexOf(r, t);
  return i < 0 ? (++this.size, r.push([t, e])) : (r[i][1] = e), this;
}
function ListCache(t) {
  var e = -1,
    r = null == t ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
(ListCache.prototype.clear = listCacheClear),
  (ListCache.prototype.delete = listCacheDelete),
  (ListCache.prototype.get = listCacheGet),
  (ListCache.prototype.has = listCacheHas),
  (ListCache.prototype.set = listCacheSet);
var Map$1 = getNative(root, 'Map');
function mapCacheClear() {
  (this.size = 0),
    (this.__data__ = {
      hash: new Hash(),
      map: new (Map$1 || ListCache)(),
      string: new Hash(),
    });
}
function isKeyable(t) {
  var e = typeof t;
  return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e
    ? '__proto__' !== t
    : null === t;
}
function getMapData(t, e) {
  var r = t.__data__;
  return isKeyable(e) ? r['string' == typeof e ? 'string' : 'hash'] : r.map;
}
function mapCacheDelete(t) {
  var e = getMapData(this, t).delete(t);
  return (this.size -= e ? 1 : 0), e;
}
function mapCacheGet(t) {
  return getMapData(this, t).get(t);
}
function mapCacheHas(t) {
  return getMapData(this, t).has(t);
}
function mapCacheSet(t, e) {
  var r = getMapData(this, t),
    i = r.size;
  return r.set(t, e), (this.size += r.size == i ? 0 : 1), this;
}
function MapCache(t) {
  var e = -1,
    r = null == t ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
(MapCache.prototype.clear = mapCacheClear),
  (MapCache.prototype.delete = mapCacheDelete),
  (MapCache.prototype.get = mapCacheGet),
  (MapCache.prototype.has = mapCacheHas),
  (MapCache.prototype.set = mapCacheSet);
var FUNC_ERROR_TEXT = 'Expected a function';
function memoize(t, e) {
  if ('function' != typeof t || (null != e && 'function' != typeof e))
    throw new TypeError(FUNC_ERROR_TEXT);
  var r = function () {
    var i = arguments,
      s = e ? e.apply(this, i) : i[0],
      a = r.cache;
    if (a.has(s)) return a.get(s);
    var n = t.apply(this, i);
    return (r.cache = a.set(s, n) || a), n;
  };
  return (r.cache = new (memoize.Cache || MapCache)()), r;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(t) {
  var e = memoize(t, function (t) {
      return r.size === MAX_MEMOIZE_SIZE && r.clear(), t;
    }),
    r = e.cache;
  return e;
}
var rePropName =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  reEscapeChar = /\\(\\)?/g,
  stringToPath = memoizeCapped(function (t) {
    var e = [];
    return (
      46 === t.charCodeAt(0) && e.push(''),
      t.replace(rePropName, function (t, r, i, s) {
        e.push(i ? s.replace(reEscapeChar, '$1') : r || t);
      }),
      e
    );
  });
function toString(t) {
  return null == t ? '' : baseToString(t);
}
function castPath(t, e) {
  return isArray(t) ? t : isKey(t, e) ? [t] : stringToPath(toString(t));
}
var INFINITY = 1 / 0;
function toKey(t) {
  if ('string' == typeof t || isSymbol(t)) return t;
  var e = t + '';
  return '0' == e && 1 / t == -INFINITY ? '-0' : e;
}
function baseGet(t, e) {
  for (var r = 0, i = (e = castPath(e, t)).length; null != t && r < i; )
    t = t[toKey(e[r++])];
  return r && r == i ? t : void 0;
}
function get(t, e, r) {
  var i = null == t ? void 0 : baseGet(t, e);
  return void 0 === i ? r : i;
}
var uaParser = { exports: {} };
/*!@license
 * UAParser.js v0.7.28
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */ !(function (t, e) {
  !(function (r, i) {
    var s = 'function',
      a = 'object',
      n = 'string',
      o = 'model',
      l = 'name',
      h = 'type',
      p = 'vendor',
      u = 'version',
      c = 'architecture',
      f = 'console',
      m = 'mobile',
      d = 'tablet',
      g = 'smarttv',
      y = 'wearable',
      v = 'embedded',
      b = {
        extend: function (t, e) {
          var r = {};
          for (var i in t)
            e[i] && e[i].length % 2 == 0
              ? (r[i] = e[i].concat(t[i]))
              : (r[i] = t[i]);
          return r;
        },
        has: function (t, e) {
          return (
            typeof t === n && -1 !== e.toLowerCase().indexOf(t.toLowerCase())
          );
        },
        lowerize: function (t) {
          return t.toLowerCase();
        },
        major: function (t) {
          return typeof t === n ? t.replace(/[^\d\.]/g, '').split('.')[0] : i;
        },
        trim: function (t, e) {
          return (
            (t = t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')),
            void 0 === e ? t : t.substring(0, 255)
          );
        },
      },
      D = {
        rgx: function (t, e) {
          for (var r, n, o, l, h, p, u = 0; u < e.length && !h; ) {
            var c = e[u],
              f = e[u + 1];
            for (r = n = 0; r < c.length && !h; )
              if ((h = c[r++].exec(t)))
                for (o = 0; o < f.length; o++)
                  (p = h[++n]),
                    typeof (l = f[o]) === a && l.length > 0
                      ? 2 == l.length
                        ? typeof l[1] == s
                          ? (this[l[0]] = l[1].call(this, p))
                          : (this[l[0]] = l[1])
                        : 3 == l.length
                        ? typeof l[1] !== s || (l[1].exec && l[1].test)
                          ? (this[l[0]] = p ? p.replace(l[1], l[2]) : i)
                          : (this[l[0]] = p ? l[1].call(this, p, l[2]) : i)
                        : 4 == l.length &&
                          (this[l[0]] = p
                            ? l[3].call(this, p.replace(l[1], l[2]))
                            : i)
                      : (this[l] = p || i);
            u += 2;
          }
        },
        str: function (t, e) {
          for (var r in e)
            if (typeof e[r] === a && e[r].length > 0) {
              for (var s = 0; s < e[r].length; s++)
                if (b.has(e[r][s], t)) return '?' === r ? i : r;
            } else if (b.has(e[r], t)) return '?' === r ? i : r;
          return t;
        },
      },
      x = {
        browser: {
          oldSafari: {
            version: {
              '1.0': '/8',
              1.2: '/1',
              1.3: '/3',
              '2.0': '/412',
              '2.0.2': '/416',
              '2.0.3': '/417',
              '2.0.4': '/419',
              '?': '/',
            },
          },
          oldEdge: {
            version: {
              0.1: '12.',
              21: '13.',
              31: '14.',
              39: '15.',
              41: '16.',
              42: '17.',
              44: '18.',
            },
          },
        },
        os: {
          windows: {
            version: {
              ME: '4.90',
              'NT 3.11': 'NT3.51',
              'NT 4.0': 'NT4.0',
              2e3: 'NT 5.0',
              XP: ['NT 5.1', 'NT 5.2'],
              Vista: 'NT 6.0',
              7: 'NT 6.1',
              8: 'NT 6.2',
              8.1: 'NT 6.3',
              10: ['NT 6.4', 'NT 10.0'],
              RT: 'ARM',
            },
          },
        },
      },
      E = {
        browser: [
          [/\b(?:crmo|crios)\/([\w\.]+)/i],
          [u, [l, 'Chrome']],
          [/edg(?:e|ios|a)?\/([\w\.]+)/i],
          [u, [l, 'Edge']],
          [
            /(opera\smini)\/([\w\.-]+)/i,
            /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,
            /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i,
          ],
          [l, u],
          [/opios[\/\s]+([\w\.]+)/i],
          [u, [l, 'Opera Mini']],
          [/\sopr\/([\w\.]+)/i],
          [u, [l, 'Opera']],
          [
            /(kindle)\/([\w\.]+)/i,
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
            /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
            /(ba?idubrowser)[\/\s]?([\w\.]+)/i,
            /(?:ms|\()(ie)\s([\w\.]+)/i,
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,
            /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,
            /(weibo)__([\d\.]+)/i,
          ],
          [l, u],
          [/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
          [u, [l, 'UCBrowser']],
          [/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],
          [u, [l, 'WeChat(Win) Desktop']],
          [/micromessenger\/([\w\.]+)/i],
          [u, [l, 'WeChat']],
          [/konqueror\/([\w\.]+)/i],
          [u, [l, 'Konqueror']],
          [/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],
          [u, [l, 'IE']],
          [/yabrowser\/([\w\.]+)/i],
          [u, [l, 'Yandex']],
          [/(avast|avg)\/([\w\.]+)/i],
          [[l, /(.+)/, '$1 Secure Browser'], u],
          [/focus\/([\w\.]+)/i],
          [u, [l, 'Firefox Focus']],
          [/opt\/([\w\.]+)/i],
          [u, [l, 'Opera Touch']],
          [/coc_coc_browser\/([\w\.]+)/i],
          [u, [l, 'Coc Coc']],
          [/dolfin\/([\w\.]+)/i],
          [u, [l, 'Dolphin']],
          [/coast\/([\w\.]+)/i],
          [u, [l, 'Opera Coast']],
          [/xiaomi\/miuibrowser\/([\w\.]+)/i],
          [u, [l, 'MIUI Browser']],
          [/fxios\/([\w\.-]+)/i],
          [u, [l, 'Firefox']],
          [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
          [[l, '360 Browser']],
          [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
          [[l, /(.+)/, '$1 Browser'], u],
          [/(comodo_dragon)\/([\w\.]+)/i],
          [[l, /_/g, ' '], u],
          [
            /\s(electron)\/([\w\.]+)\ssafari/i,
            /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,
            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i,
          ],
          [l, u],
          [/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i],
          [l],
          [/;fbav\/([\w\.]+);/i],
          [u, [l, 'Facebook']],
          [/FBAN\/FBIOS|FB_IAB\/FB4A/i],
          [[l, 'Facebook']],
          [
            /safari\s(line)\/([\w\.]+)/i,
            /\b(line)\/([\w\.]+)\/iab/i,
            /(chromium|instagram)[\/\s]([\w\.-]+)/i,
          ],
          [l, u],
          [/\bgsa\/([\w\.]+)\s.*safari\//i],
          [u, [l, 'GSA']],
          [/headlesschrome(?:\/([\w\.]+)|\s)/i],
          [u, [l, 'Chrome Headless']],
          [/\swv\).+(chrome)\/([\w\.]+)/i],
          [[l, 'Chrome WebView'], u],
          [/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],
          [u, [l, 'Android Browser']],
          [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
          [l, u],
          [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
          [u, [l, 'Mobile Safari']],
          [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
          [u, l],
          [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
          [l, [u, D.str, x.browser.oldSafari.version]],
          [/(webkit|khtml)\/([\w\.]+)/i],
          [l, u],
          [/(navigator|netscape)\/([\w\.-]+)/i],
          [[l, 'Netscape'], u],
          [/ile\svr;\srv:([\w\.]+)\).+firefox/i],
          [u, [l, 'Firefox Reality']],
          [
            /ekiohf.+(flow)\/([\w\.]+)/i,
            /(swiftfox)/i,
            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
            /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,
            /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
            /(links)\s\(([\w\.]+)/i,
            /(gobrowser)\/?([\w\.]*)/i,
            /(ice\s?browser)\/v?([\w\._]+)/i,
            /(mosaic)[\/\s]([\w\.]+)/i,
          ],
          [l, u],
        ],
        cpu: [
          [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
          [[c, 'amd64']],
          [/(ia32(?=;))/i],
          [[c, b.lowerize]],
          [/((?:i[346]|x)86)[;\)]/i],
          [[c, 'ia32']],
          [/\b(aarch64|armv?8e?l?)\b/i],
          [[c, 'arm64']],
          [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
          [[c, 'armhf']],
          [/windows\s(ce|mobile);\sppc;/i],
          [[c, 'arm']],
          [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
          [[c, /ower/, '', b.lowerize]],
          [/(sun4\w)[;\)]/i],
          [[c, 'sparc']],
          [
            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
          ],
          [[c, b.lowerize]],
        ],
        device: [
          [
            /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i,
          ],
          [o, [p, 'Samsung'], [h, d]],
          [
            /\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,
            /\ssamsung[\s-]([\w-]+)/i,
            /sec-(sgh\w+)/i,
          ],
          [o, [p, 'Samsung'], [h, m]],
          [/\((ip(?:hone|od)[\s\w]*);/i],
          [o, [p, 'Apple'], [h, m]],
          [
            /\((ipad);[\w\s\),;-]+apple/i,
            /applecoremedia\/[\w\.]+\s\((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
          ],
          [o, [p, 'Apple'], [h, d]],
          [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],
          [o, [p, 'Huawei'], [h, d]],
          [
            /d\/huawei([\w\s-]+)[;\)]/i,
            /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,
            /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i,
          ],
          [o, [p, 'Huawei'], [h, m]],
          [
            /\b(poco[\s\w]+)(?:\sbuild|\))/i,
            /\b;\s(\w+)\sbuild\/hm\1/i,
            /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,
            /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,
            /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i,
          ],
          [
            [o, /_/g, ' '],
            [p, 'Xiaomi'],
            [h, m],
          ],
          [/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],
          [
            [o, /_/g, ' '],
            [p, 'Xiaomi'],
            [h, d],
          ],
          [
            /;\s(\w+)\sbuild.+\soppo/i,
            /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i,
          ],
          [o, [p, 'OPPO'], [h, m]],
          [
            /\svivo\s(\w+)(?:\sbuild|\))/i,
            /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i,
          ],
          [o, [p, 'Vivo'], [h, m]],
          [/\s(rmx[12]\d{3})(?:\sbuild|;)/i],
          [o, [p, 'Realme'], [h, m]],
          [
            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,
            /\smot(?:orola)?[\s-](\w*)/i,
            /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i,
          ],
          [o, [p, 'Motorola'], [h, m]],
          [/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
          [o, [p, 'Motorola'], [h, d]],
          [
            /((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i,
          ],
          [o, [p, 'LG'], [h, d]],
          [
            /(lm-?f100[nv]?|nexus\s[45])/i,
            /lg[e;\s\/-]+((?!browser|netcast)\w+)/i,
            /\blg(\-?[\d\w]+)\sbuild/i,
          ],
          [o, [p, 'LG'], [h, m]],
          [
            /(ideatab[\w\-\s]+)/i,
            /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i,
          ],
          [o, [p, 'Lenovo'], [h, d]],
          [/(?:maemo|nokia).*(n900|lumia\s\d+)/i, /nokia[\s_-]?([\w\.-]*)/i],
          [
            [o, /_/g, ' '],
            [p, 'Nokia'],
            [h, m],
          ],
          [/droid.+;\s(pixel\sc)[\s)]/i],
          [o, [p, 'Google'], [h, d]],
          [/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],
          [o, [p, 'Google'], [h, m]],
          [
            /droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
          ],
          [o, [p, 'Sony'], [h, m]],
          [/sony\stablet\s[ps]\sbuild\//i, /(?:sony)?sgp\w+(?:\sbuild\/|\))/i],
          [
            [o, 'Xperia Tablet'],
            [p, 'Sony'],
            [h, d],
          ],
          [
            /\s(kb2005|in20[12]5|be20[12][59])\b/i,
            /\ba000(1)\sbuild/i,
            /\boneplus\s(a\d{4})[\s)]/i,
          ],
          [o, [p, 'OnePlus'], [h, m]],
          [
            /(alexa)webm/i,
            /(kf[a-z]{2}wi)(\sbuild\/|\))/i,
            /(kf[a-z]+)(\sbuild\/|\)).+silk\//i,
          ],
          [o, [p, 'Amazon'], [h, d]],
          [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
          [
            [o, 'Fire Phone'],
            [p, 'Amazon'],
            [h, m],
          ],
          [/\((playbook);[\w\s\),;-]+(rim)/i],
          [o, p, [h, d]],
          [/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i],
          [o, [p, 'BlackBerry'], [h, m]],
          [
            /(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i,
          ],
          [o, [p, 'ASUS'], [h, d]],
          [/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],
          [o, [p, 'ASUS'], [h, m]],
          [/(nexus\s9)/i],
          [o, [p, 'HTC'], [h, d]],
          [
            /(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,
            /(zte)-(\w*)/i,
            /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i,
          ],
          [p, [o, /_/g, ' '], [h, m]],
          [/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
          [o, [p, 'Acer'], [h, d]],
          [/droid.+;\s(m[1-5]\snote)\sbuild/i, /\bmz-([\w-]{2,})/i],
          [o, [p, 'Meizu'], [h, m]],
          [
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
            /(hp)\s([\w\s]+\w)/i,
            /(asus)-?(\w+)/i,
            /(microsoft);\s(lumia[\s\w]+)/i,
            /(lenovo)[_\s-]?([\w-]+)/i,
            /linux;.+(jolla);/i,
            /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i,
          ],
          [p, o, [h, m]],
          [
            /(archos)\s(gamepad2?)/i,
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            /(kindle)\/([\w\.]+)/i,
            /\s(nook)[\w\s]+build\/(\w+)/i,
            /(dell)\s(strea[kpr\s\d]*[\dko])/i,
            /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,
            /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,
            /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,
            /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i,
          ],
          [p, o, [h, d]],
          [/\s(surface\sduo)\s/i],
          [o, [p, 'Microsoft'], [h, d]],
          [/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],
          [o, [p, 'Fairphone'], [h, m]],
          [/\s(u304aa)\sbuild/i],
          [o, [p, 'AT&T'], [h, m]],
          [/sie-(\w*)/i],
          [o, [p, 'Siemens'], [h, m]],
          [/[;\/]\s?(rct\w+)\sbuild/i],
          [o, [p, 'RCA'], [h, d]],
          [/[;\/\s](venue[\d\s]{2,7})\sbuild/i],
          [o, [p, 'Dell'], [h, d]],
          [/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],
          [o, [p, 'Verizon'], [h, d]],
          [/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],
          [o, [p, 'Barnes & Noble'], [h, d]],
          [/[;\/]\s(tm\d{3}\w+)\sbuild/i],
          [o, [p, 'NuVision'], [h, d]],
          [/;\s(k88)\sbuild/i],
          [o, [p, 'ZTE'], [h, d]],
          [/;\s(nx\d{3}j)\sbuild/i],
          [o, [p, 'ZTE'], [h, m]],
          [/[;\/]\s?(gen\d{3})\sbuild.*49h/i],
          [o, [p, 'Swiss'], [h, m]],
          [/[;\/]\s?(zur\d{3})\sbuild/i],
          [o, [p, 'Swiss'], [h, d]],
          [/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],
          [o, [p, 'Zeki'], [h, d]],
          [
            /[;\/]\s([yr]\d{2})\sbuild/i,
            /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i,
          ],
          [[p, 'Dragon Touch'], o, [h, d]],
          [/[;\/]\s?(ns-?\w{0,9})\sbuild/i],
          [o, [p, 'Insignia'], [h, d]],
          [/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],
          [o, [p, 'NextBook'], [h, d]],
          [/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],
          [[p, 'Voice'], o, [h, m]],
          [/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],
          [[p, 'LvTel'], o, [h, m]],
          [/;\s(ph-1)\s/i],
          [o, [p, 'Essential'], [h, m]],
          [/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],
          [o, [p, 'Envizen'], [h, d]],
          [/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],
          [o, [p, 'MachSpeed'], [h, d]],
          [/[;\/]\s?tu_(1491)\sbuild/i],
          [o, [p, 'Rotor'], [h, d]],
          [/(shield[\w\s]+)\sbuild/i],
          [o, [p, 'Nvidia'], [h, d]],
          [/(sprint)\s(\w+)/i],
          [p, o, [h, m]],
          [/(kin\.[onetw]{3})/i],
          [
            [o, /\./g, ' '],
            [p, 'Microsoft'],
            [h, m],
          ],
          [/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
          [o, [p, 'Zebra'], [h, d]],
          [/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],
          [o, [p, 'Zebra'], [h, m]],
          [/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i],
          [p, o, [h, f]],
          [/droid.+;\s(shield)\sbuild/i],
          [o, [p, 'Nvidia'], [h, f]],
          [/(playstation\s[345portablevi]+)/i],
          [o, [p, 'Sony'], [h, f]],
          [/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],
          [o, [p, 'Microsoft'], [h, f]],
          [/smart-tv.+(samsung)/i],
          [p, [h, g]],
          [/hbbtv.+maple;(\d+)/i],
          [
            [o, /^/, 'SmartTV'],
            [p, 'Samsung'],
            [h, g],
          ],
          [/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],
          [
            [p, 'LG'],
            [h, g],
          ],
          [/(apple)\s?tv/i],
          [p, [o, 'Apple TV'], [h, g]],
          [/crkey/i],
          [
            [o, 'Chromecast'],
            [p, 'Google'],
            [h, g],
          ],
          [/droid.+aft([\w])(\sbuild\/|\))/i],
          [o, [p, 'Amazon'], [h, g]],
          [/\(dtv[\);].+(aquos)/i],
          [o, [p, 'Sharp'], [h, g]],
          [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
          [
            [p, b.trim],
            [o, b.trim],
            [h, g],
          ],
          [/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],
          [[h, g]],
          [/((pebble))app\/[\d\.]+\s/i],
          [p, o, [h, y]],
          [/droid.+;\s(glass)\s\d/i],
          [o, [p, 'Google'], [h, y]],
          [/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],
          [o, [p, 'Zebra'], [h, y]],
          [/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],
          [p, [h, v]],
          [/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],
          [o, [h, m]],
          [
            /droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i,
          ],
          [o, [h, d]],
          [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
          [[h, b.lowerize]],
          [/(android[\w\.\s\-]{0,9});.+build/i],
          [o, [p, 'Generic']],
          [/(phone)/i],
          [[h, m]],
        ],
        engine: [
          [/windows.+\sedge\/([\w\.]+)/i],
          [u, [l, 'EdgeHTML']],
          [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
          [u, [l, 'Blink']],
          [
            /(presto)\/([\w\.]+)/i,
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
            /ekioh(flow)\/([\w\.]+)/i,
            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
            /(icab)[\/\s]([23]\.[\d\.]+)/i,
          ],
          [l, u],
          [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
          [u, l],
        ],
        os: [
          [/microsoft\s(windows)\s(vista|xp)/i],
          [l, u],
          [
            /(windows)\snt\s6\.2;\s(arm)/i,
            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i,
          ],
          [l, [u, D.str, x.os.windows.version]],
          [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
          [
            [l, 'Windows'],
            [u, D.str, x.os.windows.version],
          ],
          [
            /ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,
            /cfnetwork\/.+darwin/i,
          ],
          [
            [u, /_/g, '.'],
            [l, 'iOS'],
          ],
          [
            /(mac\sos\sx)\s?([\w\s\.]*)/i,
            /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i,
          ],
          [
            [l, 'Mac OS'],
            [u, /_/g, '.'],
          ],
          [
            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,
            /(tizen|kaios)[\/\s]([\w\.]+)/i,
            /\((series40);/i,
          ],
          [l, u],
          [/\(bb(10);/i],
          [u, [l, 'BlackBerry']],
          [/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],
          [u, [l, 'Symbian']],
          [/mozilla.+\(mobile;.+gecko.+firefox/i],
          [[l, 'Firefox OS']],
          [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
          [u, [l, 'webOS']],
          [/crkey\/([\d\.]+)/i],
          [u, [l, 'Chromecast']],
          [/(cros)\s[\w]+\s([\w\.]+\w)/i],
          [[l, 'Chromium OS'], u],
          [
            /(nintendo|playstation)\s([wids345portablevuch]+)/i,
            /(xbox);\s+xbox\s([^\);]+)/i,
            /(mint)[\/\s\(\)]?(\w*)/i,
            /(mageia|vectorlinux)[;\s]/i,
            /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,
            /(hurd|linux)\s?([\w\.]*)/i,
            /(gnu)\s?([\w\.]*)/i,
            /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
            /(haiku)\s(\w+)/i,
          ],
          [l, u],
          [/(sunos)\s?([\w\.\d]*)/i],
          [[l, 'Solaris'], u],
          [
            /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
            /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
            /(unix)\s?([\w\.]*)/i,
          ],
          [l, u],
        ],
      },
      _ = function (t, e) {
        if (('object' == typeof t && ((e = t), (t = i)), !(this instanceof _)))
          return new _(t, e).getResult();
        var s =
            t ||
            (void 0 !== r && r.navigator && r.navigator.userAgent
              ? r.navigator.userAgent
              : ''),
          a = e ? b.extend(E, e) : E;
        return (
          (this.getBrowser = function () {
            var t = { name: i, version: i };
            return (
              D.rgx.call(t, s, a.browser), (t.major = b.major(t.version)), t
            );
          }),
          (this.getCPU = function () {
            var t = { architecture: i };
            return D.rgx.call(t, s, a.cpu), t;
          }),
          (this.getDevice = function () {
            var t = { vendor: i, model: i, type: i };
            return D.rgx.call(t, s, a.device), t;
          }),
          (this.getEngine = function () {
            var t = { name: i, version: i };
            return D.rgx.call(t, s, a.engine), t;
          }),
          (this.getOS = function () {
            var t = { name: i, version: i };
            return D.rgx.call(t, s, a.os), t;
          }),
          (this.getResult = function () {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.getEngine(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU(),
            };
          }),
          (this.getUA = function () {
            return s;
          }),
          (this.setUA = function (t) {
            return (
              (s = typeof t === n && t.length > 255 ? b.trim(t, 255) : t), this
            );
          }),
          this.setUA(s),
          this
        );
      };
    (_.VERSION = '0.7.28'),
      (_.BROWSER = { NAME: l, MAJOR: 'major', VERSION: u }),
      (_.CPU = { ARCHITECTURE: c }),
      (_.DEVICE = {
        MODEL: o,
        VENDOR: p,
        TYPE: h,
        CONSOLE: f,
        MOBILE: m,
        SMARTTV: g,
        TABLET: d,
        WEARABLE: y,
        EMBEDDED: v,
      }),
      (_.ENGINE = { NAME: l, VERSION: u }),
      (_.OS = { NAME: l, VERSION: u }),
      t.exports && (e = t.exports = _),
      (e.UAParser = _);
    var C = void 0 !== r && (r.jQuery || r.Zepto);
    if (C && !C.ua) {
      var A = new _();
      (C.ua = A.getResult()),
        (C.ua.get = function () {
          return A.getUA();
        }),
        (C.ua.set = function (t) {
          A.setUA(t);
          var e = A.getResult();
          for (var r in e) C.ua[r] = e[r];
        });
    }
  })('object' == typeof window ? window : commonjsGlobal);
})(uaParser, uaParser.exports);
var Scroller_svelte_svelte_type_style_lang =
  "svelte-scroller-outer.svelte-1yjh2jm{display:block;position:relative}svelte-scroller-background.svelte-1yjh2jm{display:block;position:relative;width:100%}svelte-scroller-foreground.svelte-1yjh2jm{display:block;position:relative;z-index:2}svelte-scroller-foreground.svelte-1yjh2jm::after{content:' ';display:block;clear:both}svelte-scroller-background-container.svelte-1yjh2jm{display:block;position:absolute;width:100%;max-width:100%;pointer-events:none;will-change:transform}";
const { window: window_1 } = globals,
  get_foreground_slot_changes = (t) => ({}),
  get_foreground_slot_context = (t) => ({}),
  get_background_slot_changes = (t) => ({}),
  get_background_slot_context = (t) => ({});
function create_fragment(t) {
  let e, r, i, s, a, n, o, l, h;
  add_render_callback(t[21]);
  const p = t[20].background,
    u = create_slot(p, t, t[19], get_background_slot_context),
    c = t[20].foreground,
    f = create_slot(c, t, t[19], get_foreground_slot_context);
  return {
    c() {
      (e = element('svelte-scroller-outer')),
        (r = element('svelte-scroller-background-container')),
        (i = element('svelte-scroller-background')),
        u && u.c(),
        (a = space()),
        (n = element('svelte-scroller-foreground')),
        f && f.c(),
        this.h();
    },
    l(t) {
      e = claim_element(t, 'SVELTE-SCROLLER-OUTER', { class: !0 });
      var s = children(e);
      r = claim_element(s, 'SVELTE-SCROLLER-BACKGROUND-CONTAINER', {
        class: !0,
        style: !0,
      });
      var o = children(r);
      i = claim_element(o, 'SVELTE-SCROLLER-BACKGROUND', { class: !0 });
      var l = children(i);
      u && u.l(l),
        l.forEach(detach),
        o.forEach(detach),
        (a = claim_space(s)),
        (n = claim_element(s, 'SVELTE-SCROLLER-FOREGROUND', { class: !0 }));
      var h = children(n);
      f && f.l(h), h.forEach(detach), s.forEach(detach), this.h();
    },
    h() {
      set_custom_element_data(i, 'class', 'svelte-1yjh2jm'),
        set_custom_element_data(
          r,
          'class',
          'background-container svelte-1yjh2jm'
        ),
        set_custom_element_data(r, 'style', (s = '' + (t[5] + t[4]))),
        set_custom_element_data(n, 'class', 'svelte-1yjh2jm'),
        set_custom_element_data(e, 'class', 'svelte-1yjh2jm');
    },
    m(s, p) {
      insert_hydration(s, e, p),
        append_hydration(e, r),
        append_hydration(r, i),
        u && u.m(i, null),
        t[22](i),
        append_hydration(e, a),
        append_hydration(e, n),
        f && f.m(n, null),
        t[23](n),
        t[24](e),
        (o = !0),
        l || ((h = listen(window_1, 'resize', t[21])), (l = !0));
    },
    p(t, e) {
      u &&
        u.p &&
        (!o || 524288 & e[0]) &&
        update_slot_base(
          u,
          p,
          t,
          t[19],
          o
            ? get_slot_changes(p, t[19], e, get_background_slot_changes)
            : get_all_dirty_from_scope(t[19]),
          get_background_slot_context
        ),
        (!o || (48 & e[0] && s !== (s = '' + (t[5] + t[4])))) &&
          set_custom_element_data(r, 'style', s),
        f &&
          f.p &&
          (!o || 524288 & e[0]) &&
          update_slot_base(
            f,
            c,
            t,
            t[19],
            o
              ? get_slot_changes(c, t[19], e, get_foreground_slot_changes)
              : get_all_dirty_from_scope(t[19]),
            get_foreground_slot_context
          );
    },
    i(t) {
      o || (transition_in(u, t), transition_in(f, t), (o = !0));
    },
    o(t) {
      transition_out(u, t), transition_out(f, t), (o = !1);
    },
    d(r) {
      r && detach(e),
        u && u.d(r),
        t[22](null),
        f && f.d(r),
        t[23](null),
        t[24](null),
        (l = !1),
        h();
    },
  };
}
const handlers = [];
let manager;
if ('undefined' != typeof window) {
  const t = () => handlers.forEach((t) => t());
  window.addEventListener('scroll', t), window.addEventListener('resize', t);
}
if ('undefined' != typeof IntersectionObserver) {
  const t = new Map(),
    e = new IntersectionObserver(
      (e, r) => {
        e.forEach((e) => {
          const r = t.get(e.target),
            i = handlers.indexOf(r);
          e.isIntersecting
            ? -1 === i && handlers.push(r)
            : (r(), -1 !== i && handlers.splice(i, 1));
        });
      },
      { rootMargin: '400px 0px' }
    );
  manager = {
    add: ({ outer: r, update: i }) => {
      const { top: s, bottom: a } = r.getBoundingClientRect();
      s < window.innerHeight && a > 0 && handlers.push(i),
        t.set(r, i),
        e.observe(r);
    },
    remove: ({ outer: r, update: i }) => {
      const s = handlers.indexOf(i);
      -1 !== s && handlers.splice(s, 1), t.delete(r), e.unobserve(r);
    },
  };
} else
  manager = {
    add: ({ update: t }) => {
      handlers.push(t);
    },
    remove: ({ update: t }) => {
      const e = handlers.indexOf(t);
      -1 !== e && handlers.splice(e, 1);
    },
  };
function instance(t, e, r) {
  let i,
    s,
    a,
    n,
    o,
    l,
    h,
    p,
    u,
    c,
    f,
    { $$slots: m = {}, $$scope: d } = e,
    { top: g = 0 } = e,
    { bottom: y = 1 } = e,
    { threshold: v = 0.5 } = e,
    { query: b = 'section' } = e,
    { parallax: D = !1 } = e,
    { index: x = 0 } = e,
    { count: E = 0 } = e,
    { offset: _ = 0 } = e,
    { progress: C = 0 } = e,
    { visible: A = !1 } = e,
    w = 0,
    k = 0,
    S = 1;
  function P() {
    if (!h) return;
    const t = l.getBoundingClientRect();
    (u = t.left), r(18, (S = t.right - u));
    const e = h.getBoundingClientRect(),
      n = p.getBoundingClientRect();
    r(10, (A = e.top < w && e.bottom > 0));
    const o = e.bottom - e.top,
      m = n.bottom - n.top,
      d = s - i;
    r(9, (C = (i - e.top) / (o - d))),
      C <= 0
        ? (r(17, (k = 0)), r(16, (f = !1)))
        : C >= 1
        ? (r(17, (k = D ? o - m : o - d)), r(16, (f = !1)))
        : (r(17, (k = D ? Math.round(i - C * (m - d)) : i)), r(16, (f = !0)));
    for (let i = 0; i < c.length; i++) {
      const t = c[i],
        { top: s } = t.getBoundingClientRect(),
        n = c[i + 1],
        o = n ? n.getBoundingClientRect().top : e.bottom;
      if ((r(8, (_ = (a - s) / (o - s))), o >= a)) {
        r(6, (x = i));
        break;
      }
    }
  }
  return (
    onMount(() => {
      (c = h.querySelectorAll(b)), r(7, (E = c.length)), P();
      const t = { outer: l, update: P };
      return manager.add(t), () => manager.remove(t);
    }),
    (t.$$set = (t) => {
      'top' in t && r(11, (g = t.top)),
        'bottom' in t && r(12, (y = t.bottom)),
        'threshold' in t && r(13, (v = t.threshold)),
        'query' in t && r(14, (b = t.query)),
        'parallax' in t && r(15, (D = t.parallax)),
        'index' in t && r(6, (x = t.index)),
        'count' in t && r(7, (E = t.count)),
        'offset' in t && r(8, (_ = t.offset)),
        'progress' in t && r(9, (C = t.progress)),
        'visible' in t && r(10, (A = t.visible)),
        '$$scope' in t && r(19, (d = t.$$scope));
    }),
    (t.$$.update = () => {
      2049 & t.$$.dirty[0] && (i = Math.round(g * w)),
        4097 & t.$$.dirty[0] && (s = Math.round(y * w)),
        8193 & t.$$.dirty[0] && (a = Math.round(v * w)),
        47104 & t.$$.dirty[0] && P(),
        196608 & t.$$.dirty[0] &&
          r(
            5,
            (n = `\n\t\tposition: ${
              f ? 'fixed' : 'absolute'
            };\n\t\ttop: 0;\n\t\ttransform: translate(0, ${k}px);\n\t\tz-index: 1;\n\t`)
          ),
        327680 & t.$$.dirty[0] && r(4, (o = f ? `width:${S}px;` : ''));
    }),
    [
      w,
      l,
      h,
      p,
      o,
      n,
      x,
      E,
      _,
      C,
      A,
      g,
      y,
      v,
      b,
      D,
      f,
      k,
      S,
      d,
      m,
      function () {
        r(0, (w = window_1.innerHeight));
      },
      function (t) {
        binding_callbacks[t ? 'unshift' : 'push'](() => {
          (p = t), r(3, p);
        });
      },
      function (t) {
        binding_callbacks[t ? 'unshift' : 'push'](() => {
          (h = t), r(2, h);
        });
      },
      function (t) {
        binding_callbacks[t ? 'unshift' : 'push'](() => {
          (l = t), r(1, l);
        });
      },
    ]
  );
}
class Scroller extends SvelteComponent {
  constructor(t) {
    super(),
      init(
        this,
        t,
        instance,
        create_fragment,
        safe_not_equal,
        {
          top: 11,
          bottom: 12,
          threshold: 13,
          query: 14,
          parallax: 15,
          index: 6,
          count: 7,
          offset: 8,
          progress: 9,
          visible: 10,
        },
        null,
        [-1, -1]
      );
  }
}
var lottie = { exports: {} };
(function (module) {
  var root2, factory;
  'undefined' != typeof navigator &&
    ((root2 = window || {}),
    (factory = function (window) {
      var svgNS = 'http://www.w3.org/2000/svg',
        locationHref = '',
        initialDefaultFrame = -999999,
        subframeEnabled = !0,
        idPrefix = '',
        expressionsPlugin,
        isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        bmPow = Math.pow,
        bmSqrt = Math.sqrt,
        bmFloor = Math.floor,
        bmMax = Math.max,
        bmMin = Math.min,
        BMMath = {};
      function ProjectInterface() {
        return {};
      }
      !(function () {
        var t,
          e = [
            'abs',
            'acos',
            'acosh',
            'asin',
            'asinh',
            'atan',
            'atanh',
            'atan2',
            'ceil',
            'cbrt',
            'expm1',
            'clz32',
            'cos',
            'cosh',
            'exp',
            'floor',
            'fround',
            'hypot',
            'imul',
            'log',
            'log1p',
            'log2',
            'log10',
            'max',
            'min',
            'pow',
            'random',
            'round',
            'sign',
            'sin',
            'sinh',
            'sqrt',
            'tan',
            'tanh',
            'trunc',
            'E',
            'LN10',
            'LN2',
            'LOG10E',
            'LOG2E',
            'PI',
            'SQRT1_2',
            'SQRT2',
          ],
          r = e.length;
        for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]];
      })(),
        (BMMath.random = Math.random),
        (BMMath.abs = function (t) {
          if ('object' == typeof t && t.length) {
            var e,
              r = createSizedArray(t.length),
              i = t.length;
            for (e = 0; e < i; e += 1) r[e] = Math.abs(t[e]);
            return r;
          }
          return Math.abs(t);
        });
      var defaultCurveSegments = 150,
        degToRads = Math.PI / 180,
        roundCorner = 0.5519;
      function styleDiv(t) {
        (t.style.position = 'absolute'),
          (t.style.top = 0),
          (t.style.left = 0),
          (t.style.display = 'block'),
          (t.style.transformOrigin = '0 0'),
          (t.style.webkitTransformOrigin = '0 0'),
          (t.style.backfaceVisibility = 'visible'),
          (t.style.webkitBackfaceVisibility = 'visible'),
          (t.style.transformStyle = 'preserve-3d'),
          (t.style.webkitTransformStyle = 'preserve-3d'),
          (t.style.mozTransformStyle = 'preserve-3d');
      }
      function BMEnterFrameEvent(t, e, r, i) {
        (this.type = t),
          (this.currentTime = e),
          (this.totalTime = r),
          (this.direction = i < 0 ? -1 : 1);
      }
      function BMCompleteEvent(t, e) {
        (this.type = t), (this.direction = e < 0 ? -1 : 1);
      }
      function BMCompleteLoopEvent(t, e, r, i) {
        (this.type = t),
          (this.currentLoop = r),
          (this.totalLoops = e),
          (this.direction = i < 0 ? -1 : 1);
      }
      function BMSegmentStartEvent(t, e, r) {
        (this.type = t), (this.firstFrame = e), (this.totalFrames = r);
      }
      function BMDestroyEvent(t, e) {
        (this.type = t), (this.target = e);
      }
      function BMRenderFrameErrorEvent(t, e) {
        (this.type = 'renderFrameError'),
          (this.nativeError = t),
          (this.currentTime = e);
      }
      function BMConfigErrorEvent(t) {
        (this.type = 'configError'), (this.nativeError = t);
      }
      var createElementID =
          ((_count = 0),
          function () {
            return idPrefix + '__lottie_element_' + (_count += 1);
          }),
        _count;
      function HSVtoRGB(t, e, r) {
        var i, s, a, n, o, l, h, p;
        switch (
          ((l = r * (1 - e)),
          (h = r * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e)),
          (p = r * (1 - (1 - o) * e)),
          n % 6)
        ) {
          case 0:
            (i = r), (s = p), (a = l);
            break;
          case 1:
            (i = h), (s = r), (a = l);
            break;
          case 2:
            (i = l), (s = r), (a = p);
            break;
          case 3:
            (i = l), (s = h), (a = r);
            break;
          case 4:
            (i = p), (s = l), (a = r);
            break;
          case 5:
            (i = r), (s = l), (a = h);
        }
        return [i, s, a];
      }
      function RGBtoHSV(t, e, r) {
        var i,
          s = Math.max(t, e, r),
          a = Math.min(t, e, r),
          n = s - a,
          o = 0 === s ? 0 : n / s,
          l = s / 255;
        switch (s) {
          case a:
            i = 0;
            break;
          case t:
            (i = e - r + n * (e < r ? 6 : 0)), (i /= 6 * n);
            break;
          case e:
            (i = r - t + 2 * n), (i /= 6 * n);
            break;
          case r:
            (i = t - e + 4 * n), (i /= 6 * n);
        }
        return [i, o, l];
      }
      function addSaturationToRGB(t, e) {
        var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return (
          (r[1] += e),
          r[1] > 1 ? (r[1] = 1) : r[1] <= 0 && (r[1] = 0),
          HSVtoRGB(r[0], r[1], r[2])
        );
      }
      function addBrightnessToRGB(t, e) {
        var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return (
          (r[2] += e),
          r[2] > 1 ? (r[2] = 1) : r[2] < 0 && (r[2] = 0),
          HSVtoRGB(r[0], r[1], r[2])
        );
      }
      function addHueToRGB(t, e) {
        var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return (
          (r[0] += e / 360),
          r[0] > 1 ? (r[0] -= 1) : r[0] < 0 && (r[0] += 1),
          HSVtoRGB(r[0], r[1], r[2])
        );
      }
      var rgbToHex = (function () {
        var t,
          e,
          r = [];
        for (t = 0; t < 256; t += 1)
          (e = t.toString(16)), (r[t] = 1 === e.length ? '0' + e : e);
        return function (t, e, i) {
          return (
            t < 0 && (t = 0),
            e < 0 && (e = 0),
            i < 0 && (i = 0),
            '#' + r[t] + r[e] + r[i]
          );
        };
      })();
      function BaseEvent() {}
      BaseEvent.prototype = {
        triggerEvent: function (t, e) {
          if (this._cbs[t])
            for (var r = this._cbs[t], i = 0; i < r.length; i += 1) r[i](e);
        },
        addEventListener: function (t, e) {
          return (
            this._cbs[t] || (this._cbs[t] = []),
            this._cbs[t].push(e),
            function () {
              this.removeEventListener(t, e);
            }.bind(this)
          );
        },
        removeEventListener: function (t, e) {
          if (e) {
            if (this._cbs[t]) {
              for (var r = 0, i = this._cbs[t].length; r < i; )
                this._cbs[t][r] === e &&
                  (this._cbs[t].splice(r, 1), (r -= 1), (i -= 1)),
                  (r += 1);
              this._cbs[t].length || (this._cbs[t] = null);
            }
          } else this._cbs[t] = null;
        },
      };
      var createTypedArray = (function () {
        function t(t, e) {
          var r,
            i = 0,
            s = [];
          switch (t) {
            case 'int16':
            case 'uint8c':
              r = 1;
              break;
            default:
              r = 1.1;
          }
          for (i = 0; i < e; i += 1) s.push(r);
          return s;
        }
        return 'function' == typeof Uint8ClampedArray &&
          'function' == typeof Float32Array
          ? function (e, r) {
              return 'float32' === e
                ? new Float32Array(r)
                : 'int16' === e
                ? new Int16Array(r)
                : 'uint8c' === e
                ? new Uint8ClampedArray(r)
                : t(e, r);
            }
          : t;
      })();
      function createSizedArray(t) {
        return Array.apply(null, { length: t });
      }
      function createNS(t) {
        return document.createElementNS(svgNS, t);
      }
      function createTag(t) {
        return document.createElement(t);
      }
      function DynamicPropertyContainer() {}
      DynamicPropertyContainer.prototype = {
        addDynamicProperty: function (t) {
          -1 === this.dynamicProperties.indexOf(t) &&
            (this.dynamicProperties.push(t),
            this.container.addDynamicProperty(this),
            (this._isAnimated = !0));
        },
        iterateDynamicProperties: function () {
          var t;
          this._mdf = !1;
          var e = this.dynamicProperties.length;
          for (t = 0; t < e; t += 1)
            this.dynamicProperties[t].getValue(),
              this.dynamicProperties[t]._mdf && (this._mdf = !0);
        },
        initDynamicPropertyContainer: function (t) {
          (this.container = t),
            (this.dynamicProperties = []),
            (this._mdf = !1),
            (this._isAnimated = !1);
        },
      };
      var getBlendMode =
          ((blendModeEnums = {
            0: 'source-over',
            1: 'multiply',
            2: 'screen',
            3: 'overlay',
            4: 'darken',
            5: 'lighten',
            6: 'color-dodge',
            7: 'color-burn',
            8: 'hard-light',
            9: 'soft-light',
            10: 'difference',
            11: 'exclusion',
            12: 'hue',
            13: 'saturation',
            14: 'color',
            15: 'luminosity',
          }),
          function (t) {
            return blendModeEnums[t] || '';
          }),
        blendModeEnums,
        lineCapEnum = { 1: 'butt', 2: 'round', 3: 'square' },
        lineJoinEnum = { 1: 'miter', 2: 'round', 3: 'bevel' },
        Matrix = (function () {
          var t = Math.cos,
            e = Math.sin,
            r = Math.tan,
            i = Math.round;
          function s() {
            return (
              (this.props[0] = 1),
              (this.props[1] = 0),
              (this.props[2] = 0),
              (this.props[3] = 0),
              (this.props[4] = 0),
              (this.props[5] = 1),
              (this.props[6] = 0),
              (this.props[7] = 0),
              (this.props[8] = 0),
              (this.props[9] = 0),
              (this.props[10] = 1),
              (this.props[11] = 0),
              (this.props[12] = 0),
              (this.props[13] = 0),
              (this.props[14] = 0),
              (this.props[15] = 1),
              this
            );
          }
          function a(r) {
            if (0 === r) return this;
            var i = t(r),
              s = e(r);
            return this._t(i, -s, 0, 0, s, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function n(r) {
            if (0 === r) return this;
            var i = t(r),
              s = e(r);
            return this._t(1, 0, 0, 0, 0, i, -s, 0, 0, s, i, 0, 0, 0, 0, 1);
          }
          function o(r) {
            if (0 === r) return this;
            var i = t(r),
              s = e(r);
            return this._t(i, 0, s, 0, 0, 1, 0, 0, -s, 0, i, 0, 0, 0, 0, 1);
          }
          function l(r) {
            if (0 === r) return this;
            var i = t(r),
              s = e(r);
            return this._t(i, -s, 0, 0, s, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function h(t, e) {
            return this._t(1, e, t, 1, 0, 0);
          }
          function p(t, e) {
            return this.shear(r(t), r(e));
          }
          function u(i, s) {
            var a = t(s),
              n = e(s);
            return this._t(a, n, 0, 0, -n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
              ._t(1, 0, 0, 0, r(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
              ._t(a, -n, 0, 0, n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function c(t, e, r) {
            return (
              r || 0 === r || (r = 1),
              1 === t && 1 === e && 1 === r
                ? this
                : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
            );
          }
          function f(t, e, r, i, s, a, n, o, l, h, p, u, c, f, m, d) {
            return (
              (this.props[0] = t),
              (this.props[1] = e),
              (this.props[2] = r),
              (this.props[3] = i),
              (this.props[4] = s),
              (this.props[5] = a),
              (this.props[6] = n),
              (this.props[7] = o),
              (this.props[8] = l),
              (this.props[9] = h),
              (this.props[10] = p),
              (this.props[11] = u),
              (this.props[12] = c),
              (this.props[13] = f),
              (this.props[14] = m),
              (this.props[15] = d),
              this
            );
          }
          function m(t, e, r) {
            return (
              (r = r || 0),
              0 !== t || 0 !== e || 0 !== r
                ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1)
                : this
            );
          }
          function d(t, e, r, i, s, a, n, o, l, h, p, u, c, f, m, d) {
            var g = this.props;
            if (
              1 === t &&
              0 === e &&
              0 === r &&
              0 === i &&
              0 === s &&
              1 === a &&
              0 === n &&
              0 === o &&
              0 === l &&
              0 === h &&
              1 === p &&
              0 === u
            )
              return (
                (g[12] = g[12] * t + g[15] * c),
                (g[13] = g[13] * a + g[15] * f),
                (g[14] = g[14] * p + g[15] * m),
                (g[15] *= d),
                (this._identityCalculated = !1),
                this
              );
            var y = g[0],
              v = g[1],
              b = g[2],
              D = g[3],
              x = g[4],
              E = g[5],
              _ = g[6],
              C = g[7],
              A = g[8],
              w = g[9],
              k = g[10],
              S = g[11],
              P = g[12],
              F = g[13],
              T = g[14],
              M = g[15];
            return (
              (g[0] = y * t + v * s + b * l + D * c),
              (g[1] = y * e + v * a + b * h + D * f),
              (g[2] = y * r + v * n + b * p + D * m),
              (g[3] = y * i + v * o + b * u + D * d),
              (g[4] = x * t + E * s + _ * l + C * c),
              (g[5] = x * e + E * a + _ * h + C * f),
              (g[6] = x * r + E * n + _ * p + C * m),
              (g[7] = x * i + E * o + _ * u + C * d),
              (g[8] = A * t + w * s + k * l + S * c),
              (g[9] = A * e + w * a + k * h + S * f),
              (g[10] = A * r + w * n + k * p + S * m),
              (g[11] = A * i + w * o + k * u + S * d),
              (g[12] = P * t + F * s + T * l + M * c),
              (g[13] = P * e + F * a + T * h + M * f),
              (g[14] = P * r + F * n + T * p + M * m),
              (g[15] = P * i + F * o + T * u + M * d),
              (this._identityCalculated = !1),
              this
            );
          }
          function g() {
            return (
              this._identityCalculated ||
                ((this._identity = !(
                  1 !== this.props[0] ||
                  0 !== this.props[1] ||
                  0 !== this.props[2] ||
                  0 !== this.props[3] ||
                  0 !== this.props[4] ||
                  1 !== this.props[5] ||
                  0 !== this.props[6] ||
                  0 !== this.props[7] ||
                  0 !== this.props[8] ||
                  0 !== this.props[9] ||
                  1 !== this.props[10] ||
                  0 !== this.props[11] ||
                  0 !== this.props[12] ||
                  0 !== this.props[13] ||
                  0 !== this.props[14] ||
                  1 !== this.props[15]
                )),
                (this._identityCalculated = !0)),
              this._identity
            );
          }
          function y(t) {
            for (var e = 0; e < 16; ) {
              if (t.props[e] !== this.props[e]) return !1;
              e += 1;
            }
            return !0;
          }
          function v(t) {
            var e;
            for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
            return t;
          }
          function b(t) {
            var e;
            for (e = 0; e < 16; e += 1) this.props[e] = t[e];
          }
          function D(t, e, r) {
            return {
              x:
                t * this.props[0] +
                e * this.props[4] +
                r * this.props[8] +
                this.props[12],
              y:
                t * this.props[1] +
                e * this.props[5] +
                r * this.props[9] +
                this.props[13],
              z:
                t * this.props[2] +
                e * this.props[6] +
                r * this.props[10] +
                this.props[14],
            };
          }
          function x(t, e, r) {
            return (
              t * this.props[0] +
              e * this.props[4] +
              r * this.props[8] +
              this.props[12]
            );
          }
          function E(t, e, r) {
            return (
              t * this.props[1] +
              e * this.props[5] +
              r * this.props[9] +
              this.props[13]
            );
          }
          function _(t, e, r) {
            return (
              t * this.props[2] +
              e * this.props[6] +
              r * this.props[10] +
              this.props[14]
            );
          }
          function C() {
            var t =
                this.props[0] * this.props[5] - this.props[1] * this.props[4],
              e = this.props[5] / t,
              r = -this.props[1] / t,
              i = -this.props[4] / t,
              s = this.props[0] / t,
              a =
                (this.props[4] * this.props[13] -
                  this.props[5] * this.props[12]) /
                t,
              n =
                -(
                  this.props[0] * this.props[13] -
                  this.props[1] * this.props[12]
                ) / t,
              o = new Matrix();
            return (
              (o.props[0] = e),
              (o.props[1] = r),
              (o.props[4] = i),
              (o.props[5] = s),
              (o.props[12] = a),
              (o.props[13] = n),
              o
            );
          }
          function A(t) {
            return this.getInverseMatrix().applyToPointArray(
              t[0],
              t[1],
              t[2] || 0
            );
          }
          function w(t) {
            var e,
              r = t.length,
              i = [];
            for (e = 0; e < r; e += 1) i[e] = A(t[e]);
            return i;
          }
          function k(t, e, r) {
            var i = createTypedArray('float32', 6);
            if (this.isIdentity())
              (i[0] = t[0]),
                (i[1] = t[1]),
                (i[2] = e[0]),
                (i[3] = e[1]),
                (i[4] = r[0]),
                (i[5] = r[1]);
            else {
              var s = this.props[0],
                a = this.props[1],
                n = this.props[4],
                o = this.props[5],
                l = this.props[12],
                h = this.props[13];
              (i[0] = t[0] * s + t[1] * n + l),
                (i[1] = t[0] * a + t[1] * o + h),
                (i[2] = e[0] * s + e[1] * n + l),
                (i[3] = e[0] * a + e[1] * o + h),
                (i[4] = r[0] * s + r[1] * n + l),
                (i[5] = r[0] * a + r[1] * o + h);
            }
            return i;
          }
          function S(t, e, r) {
            return this.isIdentity()
              ? [t, e, r]
              : [
                  t * this.props[0] +
                    e * this.props[4] +
                    r * this.props[8] +
                    this.props[12],
                  t * this.props[1] +
                    e * this.props[5] +
                    r * this.props[9] +
                    this.props[13],
                  t * this.props[2] +
                    e * this.props[6] +
                    r * this.props[10] +
                    this.props[14],
                ];
          }
          function P(t, e) {
            if (this.isIdentity()) return t + ',' + e;
            var r = this.props;
            return (
              Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 +
              ',' +
              Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
            );
          }
          function F() {
            for (var t = 0, e = this.props, r = 'matrix3d('; t < 16; )
              (r += i(1e4 * e[t]) / 1e4), (r += 15 === t ? ')' : ','), (t += 1);
            return r;
          }
          function T(t) {
            return (t < 1e-6 && t > 0) || (t > -1e-6 && t < 0)
              ? i(1e4 * t) / 1e4
              : t;
          }
          function M() {
            var t = this.props;
            return (
              'matrix(' +
              T(t[0]) +
              ',' +
              T(t[1]) +
              ',' +
              T(t[4]) +
              ',' +
              T(t[5]) +
              ',' +
              T(t[12]) +
              ',' +
              T(t[13]) +
              ')'
            );
          }
          return function () {
            (this.reset = s),
              (this.rotate = a),
              (this.rotateX = n),
              (this.rotateY = o),
              (this.rotateZ = l),
              (this.skew = p),
              (this.skewFromAxis = u),
              (this.shear = h),
              (this.scale = c),
              (this.setTransform = f),
              (this.translate = m),
              (this.transform = d),
              (this.applyToPoint = D),
              (this.applyToX = x),
              (this.applyToY = E),
              (this.applyToZ = _),
              (this.applyToPointArray = S),
              (this.applyToTriplePoints = k),
              (this.applyToPointStringified = P),
              (this.toCSS = F),
              (this.to2dCSS = M),
              (this.clone = v),
              (this.cloneFromProps = b),
              (this.equals = y),
              (this.inversePoints = w),
              (this.inversePoint = A),
              (this.getInverseMatrix = C),
              (this._t = this.transform),
              (this.isIdentity = g),
              (this._identity = !0),
              (this._identityCalculated = !1),
              (this.props = createTypedArray('float32', 16)),
              this.reset();
          };
        })();
      !(function (t, e) {
        var r = this,
          i = 256,
          s = e.pow(i, 6),
          a = e.pow(2, 52),
          n = 2 * a,
          o = 255;
        function l(t) {
          var e,
            r = t.length,
            s = this,
            a = 0,
            n = (s.i = s.j = 0),
            l = (s.S = []);
          for (r || (t = [r++]); a < i; ) l[a] = a++;
          for (a = 0; a < i; a++)
            (l[a] = l[(n = o & (n + t[a % r] + (e = l[a])))]), (l[n] = e);
          s.g = function (t) {
            for (var e, r = 0, a = s.i, n = s.j, l = s.S; t--; )
              (e = l[(a = o & (a + 1))]),
                (r =
                  r * i + l[o & ((l[a] = l[(n = o & (n + e))]) + (l[n] = e))]);
            return (s.i = a), (s.j = n), r;
          };
        }
        function h(t, e) {
          return (e.i = t.i), (e.j = t.j), (e.S = t.S.slice()), e;
        }
        function p(t, e) {
          var r,
            i = [],
            s = typeof t;
          if (e && 'object' == s)
            for (r in t)
              try {
                i.push(p(t[r], e - 1));
              } catch (a) {}
          return i.length ? i : 'string' == s ? t : t + '\0';
        }
        function u(t, e) {
          for (var r, i = t + '', s = 0; s < i.length; )
            e[o & s] = o & ((r ^= 19 * e[o & s]) + i.charCodeAt(s++));
          return c(e);
        }
        function c(t) {
          return String.fromCharCode.apply(0, t);
        }
        (e.seedrandom = function (o, f, m) {
          var d = [],
            g = u(
              p(
                (f = !0 === f ? { entropy: !0 } : f || {}).entropy
                  ? [o, c(t)]
                  : null === o
                  ? (function () {
                      try {
                        var e = new Uint8Array(i);
                        return (
                          (r.crypto || r.msCrypto).getRandomValues(e), c(e)
                        );
                      } catch (n) {
                        var s = r.navigator,
                          a = s && s.plugins;
                        return [+new Date(), r, a, r.screen, c(t)];
                      }
                    })()
                  : o,
                3
              ),
              d
            ),
            y = new l(d),
            v = function () {
              for (var t = y.g(6), e = s, r = 0; t < a; )
                (t = (t + r) * i), (e *= i), (r = y.g(1));
              for (; t >= n; ) (t /= 2), (e /= 2), (r >>>= 1);
              return (t + r) / e;
            };
          return (
            (v.int32 = function () {
              return 0 | y.g(4);
            }),
            (v.quick = function () {
              return y.g(4) / 4294967296;
            }),
            (v.double = v),
            u(c(y.S), t),
            (
              f.pass ||
              m ||
              function (t, r, i, s) {
                return (
                  s &&
                    (s.S && h(s, y),
                    (t.state = function () {
                      return h(y, {});
                    })),
                  i ? ((e.random = t), r) : t
                );
              }
            )(v, g, 'global' in f ? f.global : this == e, f.state)
          );
        }),
          u(e.random(), t);
      })([], BMMath);
      var BezierFactory = (function () {
        var t = {
            getBezierEasing: function (t, r, i, s, a) {
              var n =
                a ||
                ('bez_' + t + '_' + r + '_' + i + '_' + s).replace(/\./g, 'p');
              if (e[n]) return e[n];
              var o = new h([t, r, i, s]);
              return (e[n] = o), o;
            },
          },
          e = {},
          r = 0.1,
          i = 'function' == typeof Float32Array;
        function s(t, e) {
          return 1 - 3 * e + 3 * t;
        }
        function a(t, e) {
          return 3 * e - 6 * t;
        }
        function n(t) {
          return 3 * t;
        }
        function o(t, e, r) {
          return ((s(e, r) * t + a(e, r)) * t + n(e)) * t;
        }
        function l(t, e, r) {
          return 3 * s(e, r) * t * t + 2 * a(e, r) * t + n(e);
        }
        function h(t) {
          (this._p = t),
            (this._mSampleValues = i ? new Float32Array(11) : new Array(11)),
            (this._precomputed = !1),
            (this.get = this.get.bind(this));
        }
        return (
          (h.prototype = {
            get: function (t) {
              var e = this._p[0],
                r = this._p[1],
                i = this._p[2],
                s = this._p[3];
              return (
                this._precomputed || this._precompute(),
                e === r && i === s
                  ? t
                  : 0 === t
                  ? 0
                  : 1 === t
                  ? 1
                  : o(this._getTForX(t), r, s)
              );
            },
            _precompute: function () {
              var t = this._p[0],
                e = this._p[1],
                r = this._p[2],
                i = this._p[3];
              (this._precomputed = !0),
                (t === e && r === i) || this._calcSampleValues();
            },
            _calcSampleValues: function () {
              for (var t = this._p[0], e = this._p[2], i = 0; i < 11; ++i)
                this._mSampleValues[i] = o(i * r, t, e);
            },
            _getTForX: function (t) {
              for (
                var e = this._p[0],
                  i = this._p[2],
                  s = this._mSampleValues,
                  a = 0,
                  n = 1;
                10 !== n && s[n] <= t;
                ++n
              )
                a += r;
              var h = a + ((t - s[--n]) / (s[n + 1] - s[n])) * r,
                p = l(h, e, i);
              return p >= 0.001
                ? (function (t, e, r, i) {
                    for (var s = 0; s < 4; ++s) {
                      var a = l(e, r, i);
                      if (0 === a) return e;
                      e -= (o(e, r, i) - t) / a;
                    }
                    return e;
                  })(t, h, e, i)
                : 0 === p
                ? h
                : (function (t, e, r, i, s) {
                    var a,
                      n,
                      l = 0;
                    do {
                      (a = o((n = e + (r - e) / 2), i, s) - t) > 0
                        ? (r = n)
                        : (e = n);
                    } while (Math.abs(a) > 1e-7 && ++l < 10);
                    return n;
                  })(t, a, a + r, e, i);
            },
          }),
          t
        );
      })();
      function extendPrototype(t, e) {
        var r,
          i,
          s = t.length;
        for (r = 0; r < s; r += 1)
          for (var a in (i = t[r].prototype))
            Object.prototype.hasOwnProperty.call(i, a) &&
              (e.prototype[a] = i[a]);
      }
      function getDescriptor(t, e) {
        return Object.getOwnPropertyDescriptor(t, e);
      }
      function createProxyFunction(t) {
        function e() {}
        return (e.prototype = t), e;
      }
      function bezFunction() {
        var t = Math;
        function e(t, e, r, i, s, a) {
          var n = t * i + e * s + r * a - s * i - a * t - r * e;
          return n > -0.001 && n < 0.001;
        }
        var r = function (t, e, r, i) {
          var s,
            a,
            n,
            o,
            l,
            h,
            p = defaultCurveSegments,
            u = 0,
            c = [],
            f = [],
            m = bezierLengthPool.newElement();
          for (n = r.length, s = 0; s < p; s += 1) {
            for (l = s / (p - 1), h = 0, a = 0; a < n; a += 1)
              (o =
                bmPow(1 - l, 3) * t[a] +
                3 * bmPow(1 - l, 2) * l * r[a] +
                3 * (1 - l) * bmPow(l, 2) * i[a] +
                bmPow(l, 3) * e[a]),
                (c[a] = o),
                null !== f[a] && (h += bmPow(c[a] - f[a], 2)),
                (f[a] = c[a]);
            h && (u += h = bmSqrt(h)), (m.percents[s] = l), (m.lengths[s] = u);
          }
          return (m.addedLength = u), m;
        };
        function i(t) {
          (this.segmentLength = 0), (this.points = new Array(t));
        }
        function s(t, e) {
          (this.partialLength = t), (this.point = e);
        }
        var a,
          n =
            ((a = {}),
            function (t, r, n, o) {
              var l = (
                t[0] +
                '_' +
                t[1] +
                '_' +
                r[0] +
                '_' +
                r[1] +
                '_' +
                n[0] +
                '_' +
                n[1] +
                '_' +
                o[0] +
                '_' +
                o[1]
              ).replace(/\./g, 'p');
              if (!a[l]) {
                var h,
                  p,
                  u,
                  c,
                  f,
                  m,
                  d,
                  g = defaultCurveSegments,
                  y = 0,
                  v = null;
                2 === t.length &&
                  (t[0] !== r[0] || t[1] !== r[1]) &&
                  e(t[0], t[1], r[0], r[1], t[0] + n[0], t[1] + n[1]) &&
                  e(t[0], t[1], r[0], r[1], r[0] + o[0], r[1] + o[1]) &&
                  (g = 2);
                var b = new i(g);
                for (u = n.length, h = 0; h < g; h += 1) {
                  for (
                    d = createSizedArray(u), f = h / (g - 1), m = 0, p = 0;
                    p < u;
                    p += 1
                  )
                    (c =
                      bmPow(1 - f, 3) * t[p] +
                      3 * bmPow(1 - f, 2) * f * (t[p] + n[p]) +
                      3 * (1 - f) * bmPow(f, 2) * (r[p] + o[p]) +
                      bmPow(f, 3) * r[p]),
                      (d[p] = c),
                      null !== v && (m += bmPow(d[p] - v[p], 2));
                  (y += m = bmSqrt(m)), (b.points[h] = new s(m, d)), (v = d);
                }
                (b.segmentLength = y), (a[l] = b);
              }
              return a[l];
            });
        function o(t, e) {
          var r = e.percents,
            i = e.lengths,
            s = r.length,
            a = bmFloor((s - 1) * t),
            n = t * e.addedLength,
            o = 0;
          if (a === s - 1 || 0 === a || n === i[a]) return r[a];
          for (var l = i[a] > n ? -1 : 1, h = !0; h; )
            if (
              (i[a] <= n && i[a + 1] > n
                ? ((o = (n - i[a]) / (i[a + 1] - i[a])), (h = !1))
                : (a += l),
              a < 0 || a >= s - 1)
            ) {
              if (a === s - 1) return r[a];
              h = !1;
            }
          return r[a] + (r[a + 1] - r[a]) * o;
        }
        var l = createTypedArray('float32', 8);
        return {
          getSegmentsLength: function (t) {
            var e,
              i = segmentsLengthPool.newElement(),
              s = t.c,
              a = t.v,
              n = t.o,
              o = t.i,
              l = t._length,
              h = i.lengths,
              p = 0;
            for (e = 0; e < l - 1; e += 1)
              (h[e] = r(a[e], a[e + 1], n[e], o[e + 1])),
                (p += h[e].addedLength);
            return (
              s &&
                l &&
                ((h[e] = r(a[e], a[0], n[e], o[0])), (p += h[e].addedLength)),
              (i.totalLength = p),
              i
            );
          },
          getNewSegment: function (e, r, i, s, a, n, h) {
            a < 0 ? (a = 0) : a > 1 && (a = 1);
            var p,
              u = o(a, h),
              c = o((n = n > 1 ? 1 : n), h),
              f = e.length,
              m = 1 - u,
              d = 1 - c,
              g = m * m * m,
              y = u * m * m * 3,
              v = u * u * m * 3,
              b = u * u * u,
              D = m * m * d,
              x = u * m * d + m * u * d + m * m * c,
              E = u * u * d + m * u * c + u * m * c,
              _ = u * u * c,
              C = m * d * d,
              A = u * d * d + m * c * d + m * d * c,
              w = u * c * d + m * c * c + u * d * c,
              k = u * c * c,
              S = d * d * d,
              P = c * d * d + d * c * d + d * d * c,
              F = c * c * d + d * c * c + c * d * c,
              T = c * c * c;
            for (p = 0; p < f; p += 1)
              (l[4 * p] =
                t.round(1e3 * (g * e[p] + y * i[p] + v * s[p] + b * r[p])) /
                1e3),
                (l[4 * p + 1] =
                  t.round(1e3 * (D * e[p] + x * i[p] + E * s[p] + _ * r[p])) /
                  1e3),
                (l[4 * p + 2] =
                  t.round(1e3 * (C * e[p] + A * i[p] + w * s[p] + k * r[p])) /
                  1e3),
                (l[4 * p + 3] =
                  t.round(1e3 * (S * e[p] + P * i[p] + F * s[p] + T * r[p])) /
                  1e3);
            return l;
          },
          getPointInSegment: function (e, r, i, s, a, n) {
            var l = o(a, n),
              h = 1 - l;
            return [
              t.round(
                1e3 *
                  (h * h * h * e[0] +
                    (l * h * h + h * l * h + h * h * l) * i[0] +
                    (l * l * h + h * l * l + l * h * l) * s[0] +
                    l * l * l * r[0])
              ) / 1e3,
              t.round(
                1e3 *
                  (h * h * h * e[1] +
                    (l * h * h + h * l * h + h * h * l) * i[1] +
                    (l * l * h + h * l * l + l * h * l) * s[1] +
                    l * l * l * r[1])
              ) / 1e3,
            ];
          },
          buildBezierData: n,
          pointOnLine2D: e,
          pointOnLine3D: function (r, i, s, a, n, o, l, h, p) {
            if (0 === s && 0 === o && 0 === p) return e(r, i, a, n, l, h);
            var u,
              c = t.sqrt(t.pow(a - r, 2) + t.pow(n - i, 2) + t.pow(o - s, 2)),
              f = t.sqrt(t.pow(l - r, 2) + t.pow(h - i, 2) + t.pow(p - s, 2)),
              m = t.sqrt(t.pow(l - a, 2) + t.pow(h - n, 2) + t.pow(p - o, 2));
            return (
              (u =
                c > f
                  ? c > m
                    ? c - f - m
                    : m - f - c
                  : m > f
                  ? m - f - c
                  : f - c - m) > -1e-4 && u < 1e-4
            );
          },
        };
      }
      !(function () {
        for (
          var t = 0, e = ['ms', 'moz', 'webkit', 'o'], r = 0;
          r < e.length && !window.requestAnimationFrame;
          ++r
        )
          (window.requestAnimationFrame =
            window[e[r] + 'RequestAnimationFrame']),
            (window.cancelAnimationFrame =
              window[e[r] + 'CancelAnimationFrame'] ||
              window[e[r] + 'CancelRequestAnimationFrame']);
        window.requestAnimationFrame ||
          (window.requestAnimationFrame = function (e) {
            var r = new Date().getTime(),
              i = Math.max(0, 16 - (r - t)),
              s = setTimeout(function () {
                e(r + i);
              }, i);
            return (t = r + i), s;
          }),
          window.cancelAnimationFrame ||
            (window.cancelAnimationFrame = function (t) {
              clearTimeout(t);
            });
      })();
      var bez = bezFunction();
      function dataFunctionManager() {
        function t(s, a, n) {
          var o,
            l,
            h,
            p,
            u,
            c,
            f,
            m = s.length;
          for (l = 0; l < m; l += 1)
            if ('ks' in (o = s[l]) && !o.completed) {
              if (
                ((o.completed = !0), o.tt && (s[l - 1].td = o.tt), o.hasMask)
              ) {
                var d = o.masksProperties;
                for (p = d.length, h = 0; h < p; h += 1)
                  if (d[h].pt.k.i) i(d[h].pt.k);
                  else
                    for (c = d[h].pt.k.length, u = 0; u < c; u += 1)
                      d[h].pt.k[u].s && i(d[h].pt.k[u].s[0]),
                        d[h].pt.k[u].e && i(d[h].pt.k[u].e[0]);
              }
              0 === o.ty
                ? ((o.layers = e(o.refId, a)), t(o.layers, a))
                : 4 === o.ty
                ? r(o.shapes)
                : 5 === o.ty &&
                  (0 !== (f = o).t.a.length ||
                    'm' in f.t.p ||
                    (f.singleShape = !0));
            }
        }
        function e(t, e) {
          for (var r = 0, i = e.length; r < i; ) {
            if (e[r].id === t)
              return e[r].layers.__used
                ? JSON.parse(JSON.stringify(e[r].layers))
                : ((e[r].layers.__used = !0), e[r].layers);
            r += 1;
          }
          return null;
        }
        function r(t) {
          var e, s, a;
          for (e = t.length - 1; e >= 0; e -= 1)
            if ('sh' === t[e].ty)
              if (t[e].ks.k.i) i(t[e].ks.k);
              else
                for (a = t[e].ks.k.length, s = 0; s < a; s += 1)
                  t[e].ks.k[s].s && i(t[e].ks.k[s].s[0]),
                    t[e].ks.k[s].e && i(t[e].ks.k[s].e[0]);
            else 'gr' === t[e].ty && r(t[e].it);
        }
        function i(t) {
          var e,
            r = t.i.length;
          for (e = 0; e < r; e += 1)
            (t.i[e][0] += t.v[e][0]),
              (t.i[e][1] += t.v[e][1]),
              (t.o[e][0] += t.v[e][0]),
              (t.o[e][1] += t.v[e][1]);
        }
        function s(t, e) {
          var r = e ? e.split('.') : [100, 100, 100];
          return (
            t[0] > r[0] ||
            (!(r[0] > t[0]) &&
              (t[1] > r[1] ||
                (!(r[1] > t[1]) && (t[2] > r[2] || (!(r[2] > t[2]) && null)))))
          );
        }
        var a,
          n = (function () {
            var t = [4, 4, 14];
            function e(t) {
              var e,
                r,
                i,
                s = t.length;
              for (e = 0; e < s; e += 1)
                5 === t[e].ty &&
                  ((r = t[e]),
                  (i = void 0),
                  (i = r.t.d),
                  (r.t.d = { k: [{ s: i, t: 0 }] }));
            }
            return function (r) {
              if (s(t, r.v) && (e(r.layers), r.assets)) {
                var i,
                  a = r.assets.length;
                for (i = 0; i < a; i += 1)
                  r.assets[i].layers && e(r.assets[i].layers);
              }
            };
          })(),
          o =
            ((a = [4, 7, 99]),
            function (t) {
              if (t.chars && !s(a, t.v)) {
                var e,
                  r,
                  n,
                  o,
                  l,
                  h = t.chars.length;
                for (e = 0; e < h; e += 1)
                  if (t.chars[e].data && t.chars[e].data.shapes)
                    for (
                      n = (l = t.chars[e].data.shapes[0].it).length, r = 0;
                      r < n;
                      r += 1
                    )
                      (o = l[r].ks.k).__converted ||
                        (i(l[r].ks.k), (o.__converted = !0));
              }
            }),
          l = (function () {
            var t = [4, 1, 9];
            function e(t) {
              var r,
                i,
                s,
                a = t.length;
              for (r = 0; r < a; r += 1)
                if ('gr' === t[r].ty) e(t[r].it);
                else if ('fl' === t[r].ty || 'st' === t[r].ty)
                  if (t[r].c.k && t[r].c.k[0].i)
                    for (s = t[r].c.k.length, i = 0; i < s; i += 1)
                      t[r].c.k[i].s &&
                        ((t[r].c.k[i].s[0] /= 255),
                        (t[r].c.k[i].s[1] /= 255),
                        (t[r].c.k[i].s[2] /= 255),
                        (t[r].c.k[i].s[3] /= 255)),
                        t[r].c.k[i].e &&
                          ((t[r].c.k[i].e[0] /= 255),
                          (t[r].c.k[i].e[1] /= 255),
                          (t[r].c.k[i].e[2] /= 255),
                          (t[r].c.k[i].e[3] /= 255));
                  else
                    (t[r].c.k[0] /= 255),
                      (t[r].c.k[1] /= 255),
                      (t[r].c.k[2] /= 255),
                      (t[r].c.k[3] /= 255);
            }
            function r(t) {
              var r,
                i = t.length;
              for (r = 0; r < i; r += 1) 4 === t[r].ty && e(t[r].shapes);
            }
            return function (e) {
              if (s(t, e.v) && (r(e.layers), e.assets)) {
                var i,
                  a = e.assets.length;
                for (i = 0; i < a; i += 1)
                  e.assets[i].layers && r(e.assets[i].layers);
              }
            };
          })(),
          h = (function () {
            var t = [4, 4, 18];
            function e(t) {
              var r, i, s;
              for (r = t.length - 1; r >= 0; r -= 1)
                if ('sh' === t[r].ty)
                  if (t[r].ks.k.i) t[r].ks.k.c = t[r].closed;
                  else
                    for (s = t[r].ks.k.length, i = 0; i < s; i += 1)
                      t[r].ks.k[i].s && (t[r].ks.k[i].s[0].c = t[r].closed),
                        t[r].ks.k[i].e && (t[r].ks.k[i].e[0].c = t[r].closed);
                else 'gr' === t[r].ty && e(t[r].it);
            }
            function r(t) {
              var r,
                i,
                s,
                a,
                n,
                o,
                l = t.length;
              for (i = 0; i < l; i += 1) {
                if ((r = t[i]).hasMask) {
                  var h = r.masksProperties;
                  for (a = h.length, s = 0; s < a; s += 1)
                    if (h[s].pt.k.i) h[s].pt.k.c = h[s].cl;
                    else
                      for (o = h[s].pt.k.length, n = 0; n < o; n += 1)
                        h[s].pt.k[n].s && (h[s].pt.k[n].s[0].c = h[s].cl),
                          h[s].pt.k[n].e && (h[s].pt.k[n].e[0].c = h[s].cl);
                }
                4 === r.ty && e(r.shapes);
              }
            }
            return function (e) {
              if (s(t, e.v) && (r(e.layers), e.assets)) {
                var i,
                  a = e.assets.length;
                for (i = 0; i < a; i += 1)
                  e.assets[i].layers && r(e.assets[i].layers);
              }
            };
          })();
        var p = {
          completeData: function (e, r) {
            e.__complete ||
              (l(e),
              n(e),
              o(e),
              h(e),
              t(e.layers, e.assets),
              (e.__complete = !0));
          },
        };
        return (
          (p.checkColors = l),
          (p.checkChars = o),
          (p.checkShapes = h),
          (p.completeLayers = t),
          p
        );
      }
      var dataManager = dataFunctionManager();
      function getFontProperties(t) {
        for (
          var e = t.fStyle ? t.fStyle.split(' ') : [],
            r = 'normal',
            i = 'normal',
            s = e.length,
            a = 0;
          a < s;
          a += 1
        )
          switch (e[a].toLowerCase()) {
            case 'italic':
              i = 'italic';
              break;
            case 'bold':
              r = '700';
              break;
            case 'black':
              r = '900';
              break;
            case 'medium':
              r = '500';
              break;
            case 'regular':
            case 'normal':
              r = '400';
              break;
            case 'light':
            case 'thin':
              r = '200';
          }
        return { style: i, weight: t.fWeight || r };
      }
      var FontManager = (function () {
          var t = { w: 0, size: 0, shapes: [] },
            e = [];
          e = e.concat([
            2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368,
            2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379,
            2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403,
          ]);
          var r = ['d83cdffb', 'd83cdffc', 'd83cdffd', 'd83cdffe', 'd83cdfff'],
            i = [65039, 8205];
          function s(t, e) {
            var r = createTag('span');
            r.setAttribute('aria-hidden', !0), (r.style.fontFamily = e);
            var i = createTag('span');
            (i.innerText = 'giItT1WQy@!-/#'),
              (r.style.position = 'absolute'),
              (r.style.left = '-10000px'),
              (r.style.top = '-10000px'),
              (r.style.fontSize = '300px'),
              (r.style.fontVariant = 'normal'),
              (r.style.fontStyle = 'normal'),
              (r.style.fontWeight = 'normal'),
              (r.style.letterSpacing = '0'),
              r.appendChild(i),
              document.body.appendChild(r);
            var s = i.offsetWidth;
            return (
              (i.style.fontFamily =
                (function (t) {
                  var e,
                    r = t.split(','),
                    i = r.length,
                    s = [];
                  for (e = 0; e < i; e += 1)
                    'sans-serif' !== r[e] &&
                      'monospace' !== r[e] &&
                      s.push(r[e]);
                  return s.join(',');
                })(t) +
                ', ' +
                e),
              { node: i, w: s, parent: r }
            );
          }
          function a(t, e) {
            var r = createNS('text');
            r.style.fontSize = '100px';
            var i = getFontProperties(e);
            return (
              r.setAttribute('font-family', e.fFamily),
              r.setAttribute('font-style', i.style),
              r.setAttribute('font-weight', i.weight),
              (r.textContent = '1'),
              e.fClass
                ? ((r.style.fontFamily = 'inherit'),
                  r.setAttribute('class', e.fClass))
                : (r.style.fontFamily = e.fFamily),
              t.appendChild(r),
              (createTag('canvas').getContext('2d').font =
                e.fWeight + ' ' + e.fStyle + ' 100px ' + e.fFamily),
              r
            );
          }
          var n = function () {
            (this.fonts = []),
              (this.chars = null),
              (this.typekitLoaded = 0),
              (this.isLoaded = !1),
              (this._warned = !1),
              (this.initTime = Date.now()),
              (this.setIsLoadedBinded = this.setIsLoaded.bind(this)),
              (this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this));
          };
          return (
            (n.isModifier = function (t, e) {
              var i = t.toString(16) + e.toString(16);
              return -1 !== r.indexOf(i);
            }),
            (n.isZeroWidthJoiner = function (t, e) {
              return e ? t === i[0] && e === i[1] : t === i[1];
            }),
            (n.isCombinedCharacter = function (t) {
              return -1 !== e.indexOf(t);
            }),
            (n.prototype = {
              addChars: function (t) {
                if (t) {
                  var e;
                  this.chars || (this.chars = []);
                  var r,
                    i,
                    s = t.length,
                    a = this.chars.length;
                  for (e = 0; e < s; e += 1) {
                    for (r = 0, i = !1; r < a; )
                      this.chars[r].style === t[e].style &&
                        this.chars[r].fFamily === t[e].fFamily &&
                        this.chars[r].ch === t[e].ch &&
                        (i = !0),
                        (r += 1);
                    i || (this.chars.push(t[e]), (a += 1));
                  }
                }
              },
              addFonts: function (t, e) {
                if (t) {
                  if (this.chars)
                    return (this.isLoaded = !0), void (this.fonts = t.list);
                  var r,
                    i = t.list,
                    n = i.length,
                    o = n;
                  for (r = 0; r < n; r += 1) {
                    var l,
                      h,
                      p = !0;
                    if (
                      ((i[r].loaded = !1),
                      (i[r].monoCase = s(i[r].fFamily, 'monospace')),
                      (i[r].sansCase = s(i[r].fFamily, 'sans-serif')),
                      i[r].fPath)
                    ) {
                      if ('p' === i[r].fOrigin || 3 === i[r].origin) {
                        if (
                          ((l = document.querySelectorAll(
                            'style[f-forigin="p"][f-family="' +
                              i[r].fFamily +
                              '"], style[f-origin="3"][f-family="' +
                              i[r].fFamily +
                              '"]'
                          )).length > 0 && (p = !1),
                          p)
                        ) {
                          var u = createTag('style');
                          u.setAttribute('f-forigin', i[r].fOrigin),
                            u.setAttribute('f-origin', i[r].origin),
                            u.setAttribute('f-family', i[r].fFamily),
                            (u.type = 'text/css'),
                            (u.innerText =
                              '@font-face {font-family: ' +
                              i[r].fFamily +
                              "; font-style: normal; src: url('" +
                              i[r].fPath +
                              "');}"),
                            e.appendChild(u);
                        }
                      } else if ('g' === i[r].fOrigin || 1 === i[r].origin) {
                        for (
                          l = document.querySelectorAll(
                            'link[f-forigin="g"], link[f-origin="1"]'
                          ),
                            h = 0;
                          h < l.length;
                          h += 1
                        )
                          -1 !== l[h].href.indexOf(i[r].fPath) && (p = !1);
                        if (p) {
                          var c = createTag('link');
                          c.setAttribute('f-forigin', i[r].fOrigin),
                            c.setAttribute('f-origin', i[r].origin),
                            (c.type = 'text/css'),
                            (c.rel = 'stylesheet'),
                            (c.href = i[r].fPath),
                            document.body.appendChild(c);
                        }
                      } else if ('t' === i[r].fOrigin || 2 === i[r].origin) {
                        for (
                          l = document.querySelectorAll(
                            'script[f-forigin="t"], script[f-origin="2"]'
                          ),
                            h = 0;
                          h < l.length;
                          h += 1
                        )
                          i[r].fPath === l[h].src && (p = !1);
                        if (p) {
                          var f = createTag('link');
                          f.setAttribute('f-forigin', i[r].fOrigin),
                            f.setAttribute('f-origin', i[r].origin),
                            f.setAttribute('rel', 'stylesheet'),
                            f.setAttribute('href', i[r].fPath),
                            e.appendChild(f);
                        }
                      }
                    } else (i[r].loaded = !0), (o -= 1);
                    (i[r].helper = a(e, i[r])),
                      (i[r].cache = {}),
                      this.fonts.push(i[r]);
                  }
                  0 === o
                    ? (this.isLoaded = !0)
                    : setTimeout(this.checkLoadedFonts.bind(this), 100);
                } else this.isLoaded = !0;
              },
              getCharData: function (e, r, i) {
                for (var s = 0, a = this.chars.length; s < a; ) {
                  if (
                    this.chars[s].ch === e &&
                    this.chars[s].style === r &&
                    this.chars[s].fFamily === i
                  )
                    return this.chars[s];
                  s += 1;
                }
                return (
                  (('string' == typeof e && 13 !== e.charCodeAt(0)) || !e) &&
                    console &&
                    console.warn &&
                    !this._warned &&
                    ((this._warned = !0),
                    console.warn(
                      'Missing character from exported characters list: ',
                      e,
                      r,
                      i
                    )),
                  t
                );
              },
              getFontByName: function (t) {
                for (var e = 0, r = this.fonts.length; e < r; ) {
                  if (this.fonts[e].fName === t) return this.fonts[e];
                  e += 1;
                }
                return this.fonts[0];
              },
              measureText: function (t, e, r) {
                var i = this.getFontByName(e),
                  s = t.charCodeAt(0);
                if (!i.cache[s + 1]) {
                  var a = i.helper;
                  if (' ' === t) {
                    a.textContent = '|' + t + '|';
                    var n = a.getComputedTextLength();
                    a.textContent = '||';
                    var o = a.getComputedTextLength();
                    i.cache[s + 1] = (n - o) / 100;
                  } else
                    (a.textContent = t),
                      (i.cache[s + 1] = a.getComputedTextLength() / 100);
                }
                return i.cache[s + 1] * r;
              },
              checkLoadedFonts: function () {
                var t,
                  e,
                  r,
                  i = this.fonts.length,
                  s = i;
                for (t = 0; t < i; t += 1)
                  this.fonts[t].loaded
                    ? (s -= 1)
                    : 'n' === this.fonts[t].fOrigin ||
                      0 === this.fonts[t].origin
                    ? (this.fonts[t].loaded = !0)
                    : ((e = this.fonts[t].monoCase.node),
                      (r = this.fonts[t].monoCase.w),
                      e.offsetWidth !== r
                        ? ((s -= 1), (this.fonts[t].loaded = !0))
                        : ((e = this.fonts[t].sansCase.node),
                          (r = this.fonts[t].sansCase.w),
                          e.offsetWidth !== r &&
                            ((s -= 1), (this.fonts[t].loaded = !0))),
                      this.fonts[t].loaded &&
                        (this.fonts[t].sansCase.parent.parentNode.removeChild(
                          this.fonts[t].sansCase.parent
                        ),
                        this.fonts[t].monoCase.parent.parentNode.removeChild(
                          this.fonts[t].monoCase.parent
                        )));
                0 !== s && Date.now() - this.initTime < 5e3
                  ? setTimeout(this.checkLoadedFontsBinded, 20)
                  : setTimeout(this.setIsLoadedBinded, 10);
              },
              setIsLoaded: function () {
                this.isLoaded = !0;
              },
            }),
            n
          );
        })(),
        PropertyFactory = (function () {
          var t = initialDefaultFrame,
            e = Math.abs;
          function r(t, e) {
            var r,
              s = this.offsetTime;
            'multidimensional' === this.propType &&
              (r = createTypedArray('float32', this.pv.length));
            for (
              var a,
                n,
                o,
                l,
                h,
                p,
                u,
                c,
                f = e.lastIndex,
                m = f,
                d = this.keyframes.length - 1,
                g = !0;
              g;

            ) {
              if (
                ((a = this.keyframes[m]),
                (n = this.keyframes[m + 1]),
                m === d - 1 && t >= n.t - s)
              ) {
                a.h && (a = n), (f = 0);
                break;
              }
              if (n.t - s > t) {
                f = m;
                break;
              }
              m < d - 1 ? (m += 1) : ((f = 0), (g = !1));
            }
            var y,
              v,
              b,
              D,
              x,
              E,
              _,
              C,
              A,
              w,
              k = n.t - s,
              S = a.t - s;
            if (a.to) {
              a.bezierData ||
                (a.bezierData = bez.buildBezierData(
                  a.s,
                  n.s || a.e,
                  a.to,
                  a.ti
                ));
              var P = a.bezierData;
              if (t >= k || t < S) {
                var F = t >= k ? P.points.length - 1 : 0;
                for (l = P.points[F].point.length, o = 0; o < l; o += 1)
                  r[o] = P.points[F].point[o];
              } else {
                a.__fnct
                  ? (c = a.__fnct)
                  : ((c = BezierFactory.getBezierEasing(
                      a.o.x,
                      a.o.y,
                      a.i.x,
                      a.i.y,
                      a.n
                    ).get),
                    (a.__fnct = c)),
                  (h = c((t - S) / (k - S)));
                var T,
                  M = P.segmentLength * h,
                  I =
                    e.lastFrame < t && e._lastKeyframeIndex === m
                      ? e._lastAddedLength
                      : 0;
                for (
                  u =
                    e.lastFrame < t && e._lastKeyframeIndex === m
                      ? e._lastPoint
                      : 0,
                    g = !0,
                    p = P.points.length;
                  g;

                ) {
                  if (
                    ((I += P.points[u].partialLength),
                    0 === M || 0 === h || u === P.points.length - 1)
                  ) {
                    for (l = P.points[u].point.length, o = 0; o < l; o += 1)
                      r[o] = P.points[u].point[o];
                    break;
                  }
                  if (M >= I && M < I + P.points[u + 1].partialLength) {
                    for (
                      T = (M - I) / P.points[u + 1].partialLength,
                        l = P.points[u].point.length,
                        o = 0;
                      o < l;
                      o += 1
                    )
                      r[o] =
                        P.points[u].point[o] +
                        (P.points[u + 1].point[o] - P.points[u].point[o]) * T;
                    break;
                  }
                  u < p - 1 ? (u += 1) : (g = !1);
                }
                (e._lastPoint = u),
                  (e._lastAddedLength = I - P.points[u].partialLength),
                  (e._lastKeyframeIndex = m);
              }
            } else {
              var B, R, V, z, L;
              if (((d = a.s.length), (y = n.s || a.e), this.sh && 1 !== a.h))
                if (t >= k) (r[0] = y[0]), (r[1] = y[1]), (r[2] = y[2]);
                else if (t <= S)
                  (r[0] = a.s[0]), (r[1] = a.s[1]), (r[2] = a.s[2]);
                else {
                  var O = i(a.s),
                    N = i(y);
                  (v = r),
                    (b = (function (t, e, r) {
                      var i,
                        s,
                        a,
                        n,
                        o,
                        l = [],
                        h = t[0],
                        p = t[1],
                        u = t[2],
                        c = t[3],
                        f = e[0],
                        m = e[1],
                        d = e[2],
                        g = e[3];
                      return (
                        (s = h * f + p * m + u * d + c * g) < 0 &&
                          ((s = -s), (f = -f), (m = -m), (d = -d), (g = -g)),
                        1 - s > 1e-6
                          ? ((i = Math.acos(s)),
                            (a = Math.sin(i)),
                            (n = Math.sin((1 - r) * i) / a),
                            (o = Math.sin(r * i) / a))
                          : ((n = 1 - r), (o = r)),
                        (l[0] = n * h + o * f),
                        (l[1] = n * p + o * m),
                        (l[2] = n * u + o * d),
                        (l[3] = n * c + o * g),
                        l
                      );
                    })(O, N, (t - S) / (k - S))),
                    (D = b[0]),
                    (x = b[1]),
                    (E = b[2]),
                    (_ = b[3]),
                    (C = Math.atan2(
                      2 * x * _ - 2 * D * E,
                      1 - 2 * x * x - 2 * E * E
                    )),
                    (A = Math.asin(2 * D * x + 2 * E * _)),
                    (w = Math.atan2(
                      2 * D * _ - 2 * x * E,
                      1 - 2 * D * D - 2 * E * E
                    )),
                    (v[0] = C / degToRads),
                    (v[1] = A / degToRads),
                    (v[2] = w / degToRads);
                }
              else
                for (m = 0; m < d; m += 1)
                  1 !== a.h &&
                    (t >= k
                      ? (h = 1)
                      : t < S
                      ? (h = 0)
                      : (a.o.x.constructor === Array
                          ? (a.__fnct || (a.__fnct = []),
                            a.__fnct[m]
                              ? (c = a.__fnct[m])
                              : ((B =
                                  void 0 === a.o.x[m] ? a.o.x[0] : a.o.x[m]),
                                (R = void 0 === a.o.y[m] ? a.o.y[0] : a.o.y[m]),
                                (V = void 0 === a.i.x[m] ? a.i.x[0] : a.i.x[m]),
                                (z = void 0 === a.i.y[m] ? a.i.y[0] : a.i.y[m]),
                                (c = BezierFactory.getBezierEasing(
                                  B,
                                  R,
                                  V,
                                  z
                                ).get),
                                (a.__fnct[m] = c)))
                          : a.__fnct
                          ? (c = a.__fnct)
                          : ((B = a.o.x),
                            (R = a.o.y),
                            (V = a.i.x),
                            (z = a.i.y),
                            (c = BezierFactory.getBezierEasing(B, R, V, z).get),
                            (a.__fnct = c)),
                        (h = c((t - S) / (k - S))))),
                    (y = n.s || a.e),
                    (L = 1 === a.h ? a.s[m] : a.s[m] + (y[m] - a.s[m]) * h),
                    'multidimensional' === this.propType ? (r[m] = L) : (r = L);
            }
            return (e.lastIndex = f), r;
          }
          function i(t) {
            var e = t[0] * degToRads,
              r = t[1] * degToRads,
              i = t[2] * degToRads,
              s = Math.cos(e / 2),
              a = Math.cos(r / 2),
              n = Math.cos(i / 2),
              o = Math.sin(e / 2),
              l = Math.sin(r / 2),
              h = Math.sin(i / 2);
            return [
              o * l * n + s * a * h,
              o * a * n + s * l * h,
              s * l * n - o * a * h,
              s * a * n - o * l * h,
            ];
          }
          function s() {
            var e = this.comp.renderedFrame - this.offsetTime,
              r = this.keyframes[0].t - this.offsetTime,
              i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (
              !(
                e === this._caching.lastFrame ||
                (this._caching.lastFrame !== t &&
                  ((this._caching.lastFrame >= i && e >= i) ||
                    (this._caching.lastFrame < r && e < r)))
              )
            ) {
              this._caching.lastFrame >= e &&
                ((this._caching._lastKeyframeIndex = -1),
                (this._caching.lastIndex = 0));
              var s = this.interpolateValue(e, this._caching);
              this.pv = s;
            }
            return (this._caching.lastFrame = e), this.pv;
          }
          function a(t) {
            var r;
            if ('unidimensional' === this.propType)
              (r = t * this.mult),
                e(this.v - r) > 1e-5 && ((this.v = r), (this._mdf = !0));
            else
              for (var i = 0, s = this.v.length; i < s; )
                (r = t[i] * this.mult),
                  e(this.v[i] - r) > 1e-5 &&
                    ((this.v[i] = r), (this._mdf = !0)),
                  (i += 1);
          }
          function n() {
            if (
              this.elem.globalData.frameId !== this.frameId &&
              this.effectsSequence.length
            )
              if (this.lock) this.setVValue(this.pv);
              else {
                var t;
                (this.lock = !0), (this._mdf = this._isFirstFrame);
                var e = this.effectsSequence.length,
                  r = this.kf ? this.pv : this.data.k;
                for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
                this.setVValue(r),
                  (this._isFirstFrame = !1),
                  (this.lock = !1),
                  (this.frameId = this.elem.globalData.frameId);
              }
          }
          function o(t) {
            this.effectsSequence.push(t),
              this.container.addDynamicProperty(this);
          }
          function l(t, e, r, i) {
            (this.propType = 'unidimensional'),
              (this.mult = r || 1),
              (this.data = e),
              (this.v = r ? e.k * r : e.k),
              (this.pv = e.k),
              (this._mdf = !1),
              (this.elem = t),
              (this.container = i),
              (this.comp = t.comp),
              (this.k = !1),
              (this.kf = !1),
              (this.vel = 0),
              (this.effectsSequence = []),
              (this._isFirstFrame = !0),
              (this.getValue = n),
              (this.setVValue = a),
              (this.addEffect = o);
          }
          function h(t, e, r, i) {
            var s;
            (this.propType = 'multidimensional'),
              (this.mult = r || 1),
              (this.data = e),
              (this._mdf = !1),
              (this.elem = t),
              (this.container = i),
              (this.comp = t.comp),
              (this.k = !1),
              (this.kf = !1),
              (this.frameId = -1);
            var l = e.k.length;
            for (
              this.v = createTypedArray('float32', l),
                this.pv = createTypedArray('float32', l),
                this.vel = createTypedArray('float32', l),
                s = 0;
              s < l;
              s += 1
            )
              (this.v[s] = e.k[s] * this.mult), (this.pv[s] = e.k[s]);
            (this._isFirstFrame = !0),
              (this.effectsSequence = []),
              (this.getValue = n),
              (this.setVValue = a),
              (this.addEffect = o);
          }
          function p(e, i, l, h) {
            (this.propType = 'unidimensional'),
              (this.keyframes = i.k),
              (this.offsetTime = e.data.st),
              (this.frameId = -1),
              (this._caching = {
                lastFrame: t,
                lastIndex: 0,
                value: 0,
                _lastKeyframeIndex: -1,
              }),
              (this.k = !0),
              (this.kf = !0),
              (this.data = i),
              (this.mult = l || 1),
              (this.elem = e),
              (this.container = h),
              (this.comp = e.comp),
              (this.v = t),
              (this.pv = t),
              (this._isFirstFrame = !0),
              (this.getValue = n),
              (this.setVValue = a),
              (this.interpolateValue = r),
              (this.effectsSequence = [s.bind(this)]),
              (this.addEffect = o);
          }
          function u(e, i, l, h) {
            var p;
            this.propType = 'multidimensional';
            var u,
              c,
              f,
              m,
              d = i.k.length;
            for (p = 0; p < d - 1; p += 1)
              i.k[p].to &&
                i.k[p].s &&
                i.k[p + 1] &&
                i.k[p + 1].s &&
                ((u = i.k[p].s),
                (c = i.k[p + 1].s),
                (f = i.k[p].to),
                (m = i.k[p].ti),
                ((2 === u.length &&
                  (u[0] !== c[0] || u[1] !== c[1]) &&
                  bez.pointOnLine2D(
                    u[0],
                    u[1],
                    c[0],
                    c[1],
                    u[0] + f[0],
                    u[1] + f[1]
                  ) &&
                  bez.pointOnLine2D(
                    u[0],
                    u[1],
                    c[0],
                    c[1],
                    c[0] + m[0],
                    c[1] + m[1]
                  )) ||
                  (3 === u.length &&
                    (u[0] !== c[0] || u[1] !== c[1] || u[2] !== c[2]) &&
                    bez.pointOnLine3D(
                      u[0],
                      u[1],
                      u[2],
                      c[0],
                      c[1],
                      c[2],
                      u[0] + f[0],
                      u[1] + f[1],
                      u[2] + f[2]
                    ) &&
                    bez.pointOnLine3D(
                      u[0],
                      u[1],
                      u[2],
                      c[0],
                      c[1],
                      c[2],
                      c[0] + m[0],
                      c[1] + m[1],
                      c[2] + m[2]
                    ))) &&
                  ((i.k[p].to = null), (i.k[p].ti = null)),
                u[0] === c[0] &&
                  u[1] === c[1] &&
                  0 === f[0] &&
                  0 === f[1] &&
                  0 === m[0] &&
                  0 === m[1] &&
                  (2 === u.length ||
                    (u[2] === c[2] && 0 === f[2] && 0 === m[2])) &&
                  ((i.k[p].to = null), (i.k[p].ti = null)));
            (this.effectsSequence = [s.bind(this)]),
              (this.data = i),
              (this.keyframes = i.k),
              (this.offsetTime = e.data.st),
              (this.k = !0),
              (this.kf = !0),
              (this._isFirstFrame = !0),
              (this.mult = l || 1),
              (this.elem = e),
              (this.container = h),
              (this.comp = e.comp),
              (this.getValue = n),
              (this.setVValue = a),
              (this.interpolateValue = r),
              (this.frameId = -1);
            var g = i.k[0].s.length;
            for (
              this.v = createTypedArray('float32', g),
                this.pv = createTypedArray('float32', g),
                p = 0;
              p < g;
              p += 1
            )
              (this.v[p] = t), (this.pv[p] = t);
            (this._caching = {
              lastFrame: t,
              lastIndex: 0,
              value: createTypedArray('float32', g),
            }),
              (this.addEffect = o);
          }
          return {
            getProp: function (t, e, r, i, s) {
              var a;
              if (e.k.length)
                if ('number' == typeof e.k[0]) a = new h(t, e, i, s);
                else
                  switch (r) {
                    case 0:
                      a = new p(t, e, i, s);
                      break;
                    case 1:
                      a = new u(t, e, i, s);
                  }
              else a = new l(t, e, i, s);
              return a.effectsSequence.length && s.addDynamicProperty(a), a;
            },
          };
        })(),
        TransformPropertyFactory = (function () {
          var t = [0, 0];
          function e(t, e, r) {
            if (
              ((this.elem = t),
              (this.frameId = -1),
              (this.propType = 'transform'),
              (this.data = e),
              (this.v = new Matrix()),
              (this.pre = new Matrix()),
              (this.appliedTransformations = 0),
              this.initDynamicPropertyContainer(r || t),
              e.p && e.p.s
                ? ((this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this)),
                  (this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this)),
                  e.p.z &&
                    (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this)))
                : (this.p = PropertyFactory.getProp(
                    t,
                    e.p || { k: [0, 0, 0] },
                    1,
                    0,
                    this
                  )),
              e.rx)
            ) {
              if (
                ((this.rx = PropertyFactory.getProp(
                  t,
                  e.rx,
                  0,
                  degToRads,
                  this
                )),
                (this.ry = PropertyFactory.getProp(
                  t,
                  e.ry,
                  0,
                  degToRads,
                  this
                )),
                (this.rz = PropertyFactory.getProp(
                  t,
                  e.rz,
                  0,
                  degToRads,
                  this
                )),
                e.or.k[0].ti)
              ) {
                var i,
                  s = e.or.k.length;
                for (i = 0; i < s; i += 1)
                  (e.or.k[i].to = null), (e.or.k[i].ti = null);
              }
              (this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this)),
                (this.or.sh = !0);
            } else
              this.r = PropertyFactory.getProp(
                t,
                e.r || { k: 0 },
                0,
                degToRads,
                this
              );
            e.sk &&
              ((this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this)),
              (this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this))),
              (this.a = PropertyFactory.getProp(
                t,
                e.a || { k: [0, 0, 0] },
                1,
                0,
                this
              )),
              (this.s = PropertyFactory.getProp(
                t,
                e.s || { k: [100, 100, 100] },
                1,
                0.01,
                this
              )),
              e.o
                ? (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, t))
                : (this.o = { _mdf: !1, v: 1 }),
              (this._isDirty = !0),
              this.dynamicProperties.length || this.getValue(!0);
          }
          return (
            (e.prototype = {
              applyToMatrix: function (t) {
                var e = this._mdf;
                this.iterateDynamicProperties(),
                  (this._mdf = this._mdf || e),
                  this.a &&
                    t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                  this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                  this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
                  this.r
                    ? t.rotate(-this.r.v)
                    : t
                        .rotateZ(-this.rz.v)
                        .rotateY(this.ry.v)
                        .rotateX(this.rx.v)
                        .rotateZ(-this.or.v[2])
                        .rotateY(this.or.v[1])
                        .rotateX(this.or.v[0]),
                  this.data.p.s
                    ? this.data.p.z
                      ? t.translate(this.px.v, this.py.v, -this.pz.v)
                      : t.translate(this.px.v, this.py.v, 0)
                    : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
              },
              getValue: function (e) {
                if (this.elem.globalData.frameId !== this.frameId) {
                  if (
                    (this._isDirty &&
                      (this.precalculateMatrix(), (this._isDirty = !1)),
                    this.iterateDynamicProperties(),
                    this._mdf || e)
                  ) {
                    var r;
                    if (
                      (this.v.cloneFromProps(this.pre.props),
                      this.appliedTransformations < 1 &&
                        this.v.translate(
                          -this.a.v[0],
                          -this.a.v[1],
                          this.a.v[2]
                        ),
                      this.appliedTransformations < 2 &&
                        this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                      this.sk &&
                        this.appliedTransformations < 3 &&
                        this.v.skewFromAxis(-this.sk.v, this.sa.v),
                      this.r && this.appliedTransformations < 4
                        ? this.v.rotate(-this.r.v)
                        : !this.r &&
                          this.appliedTransformations < 4 &&
                          this.v
                            .rotateZ(-this.rz.v)
                            .rotateY(this.ry.v)
                            .rotateX(this.rx.v)
                            .rotateZ(-this.or.v[2])
                            .rotateY(this.or.v[1])
                            .rotateX(this.or.v[0]),
                      this.autoOriented)
                    ) {
                      var i, s;
                      if (
                        ((r = this.elem.globalData.frameRate),
                        this.p && this.p.keyframes && this.p.getValueAtTime)
                      )
                        this.p._caching.lastFrame + this.p.offsetTime <=
                        this.p.keyframes[0].t
                          ? ((i = this.p.getValueAtTime(
                              (this.p.keyframes[0].t + 0.01) / r,
                              0
                            )),
                            (s = this.p.getValueAtTime(
                              this.p.keyframes[0].t / r,
                              0
                            )))
                          : this.p._caching.lastFrame + this.p.offsetTime >=
                            this.p.keyframes[this.p.keyframes.length - 1].t
                          ? ((i = this.p.getValueAtTime(
                              this.p.keyframes[this.p.keyframes.length - 1].t /
                                r,
                              0
                            )),
                            (s = this.p.getValueAtTime(
                              (this.p.keyframes[this.p.keyframes.length - 1].t -
                                0.05) /
                                r,
                              0
                            )))
                          : ((i = this.p.pv),
                            (s = this.p.getValueAtTime(
                              (this.p._caching.lastFrame +
                                this.p.offsetTime -
                                0.01) /
                                r,
                              this.p.offsetTime
                            )));
                      else if (
                        this.px &&
                        this.px.keyframes &&
                        this.py.keyframes &&
                        this.px.getValueAtTime &&
                        this.py.getValueAtTime
                      ) {
                        (i = []), (s = []);
                        var a = this.px,
                          n = this.py;
                        a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t
                          ? ((i[0] = a.getValueAtTime(
                              (a.keyframes[0].t + 0.01) / r,
                              0
                            )),
                            (i[1] = n.getValueAtTime(
                              (n.keyframes[0].t + 0.01) / r,
                              0
                            )),
                            (s[0] = a.getValueAtTime(a.keyframes[0].t / r, 0)),
                            (s[1] = n.getValueAtTime(n.keyframes[0].t / r, 0)))
                          : a._caching.lastFrame + a.offsetTime >=
                            a.keyframes[a.keyframes.length - 1].t
                          ? ((i[0] = a.getValueAtTime(
                              a.keyframes[a.keyframes.length - 1].t / r,
                              0
                            )),
                            (i[1] = n.getValueAtTime(
                              n.keyframes[n.keyframes.length - 1].t / r,
                              0
                            )),
                            (s[0] = a.getValueAtTime(
                              (a.keyframes[a.keyframes.length - 1].t - 0.01) /
                                r,
                              0
                            )),
                            (s[1] = n.getValueAtTime(
                              (n.keyframes[n.keyframes.length - 1].t - 0.01) /
                                r,
                              0
                            )))
                          : ((i = [a.pv, n.pv]),
                            (s[0] = a.getValueAtTime(
                              (a._caching.lastFrame + a.offsetTime - 0.01) / r,
                              a.offsetTime
                            )),
                            (s[1] = n.getValueAtTime(
                              (n._caching.lastFrame + n.offsetTime - 0.01) / r,
                              n.offsetTime
                            )));
                      } else i = s = t;
                      this.v.rotate(-Math.atan2(i[1] - s[1], i[0] - s[0]));
                    }
                    this.data.p && this.data.p.s
                      ? this.data.p.z
                        ? this.v.translate(this.px.v, this.py.v, -this.pz.v)
                        : this.v.translate(this.px.v, this.py.v, 0)
                      : this.v.translate(
                          this.p.v[0],
                          this.p.v[1],
                          -this.p.v[2]
                        );
                  }
                  this.frameId = this.elem.globalData.frameId;
                }
              },
              precalculateMatrix: function () {
                if (
                  !this.a.k &&
                  (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                  (this.appliedTransformations = 1),
                  !this.s.effectsSequence.length)
                ) {
                  if (
                    (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                    (this.appliedTransformations = 2),
                    this.sk)
                  ) {
                    if (
                      this.sk.effectsSequence.length ||
                      this.sa.effectsSequence.length
                    )
                      return;
                    this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                      (this.appliedTransformations = 3);
                  }
                  this.r
                    ? this.r.effectsSequence.length ||
                      (this.pre.rotate(-this.r.v),
                      (this.appliedTransformations = 4))
                    : this.rz.effectsSequence.length ||
                      this.ry.effectsSequence.length ||
                      this.rx.effectsSequence.length ||
                      this.or.effectsSequence.length ||
                      (this.pre
                        .rotateZ(-this.rz.v)
                        .rotateY(this.ry.v)
                        .rotateX(this.rx.v)
                        .rotateZ(-this.or.v[2])
                        .rotateY(this.or.v[1])
                        .rotateX(this.or.v[0]),
                      (this.appliedTransformations = 4));
                }
              },
              autoOrient: function () {},
            }),
            extendPrototype([DynamicPropertyContainer], e),
            (e.prototype.addDynamicProperty = function (t) {
              this._addDynamicProperty(t),
                this.elem.addDynamicProperty(t),
                (this._isDirty = !0);
            }),
            (e.prototype._addDynamicProperty =
              DynamicPropertyContainer.prototype.addDynamicProperty),
            {
              getTransformProperty: function (t, r, i) {
                return new e(t, r, i);
              },
            }
          );
        })();
      function ShapePath() {
        (this.c = !1),
          (this._length = 0),
          (this._maxLength = 8),
          (this.v = createSizedArray(this._maxLength)),
          (this.o = createSizedArray(this._maxLength)),
          (this.i = createSizedArray(this._maxLength));
      }
      (ShapePath.prototype.setPathData = function (t, e) {
        (this.c = t), this.setLength(e);
        for (var r = 0; r < e; )
          (this.v[r] = pointPool.newElement()),
            (this.o[r] = pointPool.newElement()),
            (this.i[r] = pointPool.newElement()),
            (r += 1);
      }),
        (ShapePath.prototype.setLength = function (t) {
          for (; this._maxLength < t; ) this.doubleArrayLength();
          this._length = t;
        }),
        (ShapePath.prototype.doubleArrayLength = function () {
          (this.v = this.v.concat(createSizedArray(this._maxLength))),
            (this.i = this.i.concat(createSizedArray(this._maxLength))),
            (this.o = this.o.concat(createSizedArray(this._maxLength))),
            (this._maxLength *= 2);
        }),
        (ShapePath.prototype.setXYAt = function (t, e, r, i, s) {
          var a;
          switch (
            ((this._length = Math.max(this._length, i + 1)),
            this._length >= this._maxLength && this.doubleArrayLength(),
            r)
          ) {
            case 'v':
              a = this.v;
              break;
            case 'i':
              a = this.i;
              break;
            case 'o':
              a = this.o;
              break;
            default:
              a = [];
          }
          (!a[i] || (a[i] && !s)) && (a[i] = pointPool.newElement()),
            (a[i][0] = t),
            (a[i][1] = e);
        }),
        (ShapePath.prototype.setTripleAt = function (t, e, r, i, s, a, n, o) {
          this.setXYAt(t, e, 'v', n, o),
            this.setXYAt(r, i, 'o', n, o),
            this.setXYAt(s, a, 'i', n, o);
        }),
        (ShapePath.prototype.reverse = function () {
          var t = new ShapePath();
          t.setPathData(this.c, this._length);
          var e = this.v,
            r = this.o,
            i = this.i,
            s = 0;
          this.c &&
            (t.setTripleAt(
              e[0][0],
              e[0][1],
              i[0][0],
              i[0][1],
              r[0][0],
              r[0][1],
              0,
              !1
            ),
            (s = 1));
          var a,
            n = this._length - 1,
            o = this._length;
          for (a = s; a < o; a += 1)
            t.setTripleAt(
              e[n][0],
              e[n][1],
              i[n][0],
              i[n][1],
              r[n][0],
              r[n][1],
              a,
              !1
            ),
              (n -= 1);
          return t;
        });
      var ShapePropertyFactory = (function () {
          var t = -999999;
          function e(t, e, r) {
            var i,
              s,
              a,
              n,
              o,
              l,
              h,
              p,
              u,
              c = r.lastIndex,
              f = this.keyframes;
            if (t < f[0].t - this.offsetTime)
              (i = f[0].s[0]), (a = !0), (c = 0);
            else if (t >= f[f.length - 1].t - this.offsetTime)
              (i = f[f.length - 1].s
                ? f[f.length - 1].s[0]
                : f[f.length - 2].e[0]),
                (a = !0);
            else {
              for (
                var m, d, g = c, y = f.length - 1, v = !0;
                v && ((m = f[g]), !((d = f[g + 1]).t - this.offsetTime > t));

              )
                g < y - 1 ? (g += 1) : (v = !1);
              if (((c = g), !(a = 1 === m.h))) {
                if (t >= d.t - this.offsetTime) p = 1;
                else if (t < m.t - this.offsetTime) p = 0;
                else {
                  var b;
                  m.__fnct
                    ? (b = m.__fnct)
                    : ((b = BezierFactory.getBezierEasing(
                        m.o.x,
                        m.o.y,
                        m.i.x,
                        m.i.y
                      ).get),
                      (m.__fnct = b)),
                    (p = b(
                      (t - (m.t - this.offsetTime)) /
                        (d.t - this.offsetTime - (m.t - this.offsetTime))
                    ));
                }
                s = d.s ? d.s[0] : m.e[0];
              }
              i = m.s[0];
            }
            for (
              l = e._length, h = i.i[0].length, r.lastIndex = c, n = 0;
              n < l;
              n += 1
            )
              for (o = 0; o < h; o += 1)
                (u = a ? i.i[n][o] : i.i[n][o] + (s.i[n][o] - i.i[n][o]) * p),
                  (e.i[n][o] = u),
                  (u = a ? i.o[n][o] : i.o[n][o] + (s.o[n][o] - i.o[n][o]) * p),
                  (e.o[n][o] = u),
                  (u = a ? i.v[n][o] : i.v[n][o] + (s.v[n][o] - i.v[n][o]) * p),
                  (e.v[n][o] = u);
          }
          function r() {
            var e = this.comp.renderedFrame - this.offsetTime,
              r = this.keyframes[0].t - this.offsetTime,
              i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
              s = this._caching.lastFrame;
            return (
              (s !== t && ((s < r && e < r) || (s > i && e > i))) ||
                ((this._caching.lastIndex =
                  s < e ? this._caching.lastIndex : 0),
                this.interpolateShape(e, this.pv, this._caching)),
              (this._caching.lastFrame = e),
              this.pv
            );
          }
          function i() {
            this.paths = this.localShapeCollection;
          }
          function s(t) {
            (function (t, e) {
              if (t._length !== e._length || t.c !== e.c) return !1;
              var r,
                i = t._length;
              for (r = 0; r < i; r += 1)
                if (
                  t.v[r][0] !== e.v[r][0] ||
                  t.v[r][1] !== e.v[r][1] ||
                  t.o[r][0] !== e.o[r][0] ||
                  t.o[r][1] !== e.o[r][1] ||
                  t.i[r][0] !== e.i[r][0] ||
                  t.i[r][1] !== e.i[r][1]
                )
                  return !1;
              return !0;
            })(this.v, t) ||
              ((this.v = shapePool.clone(t)),
              this.localShapeCollection.releaseShapes(),
              this.localShapeCollection.addShape(this.v),
              (this._mdf = !0),
              (this.paths = this.localShapeCollection));
          }
          function a() {
            if (this.elem.globalData.frameId !== this.frameId)
              if (this.effectsSequence.length)
                if (this.lock) this.setVValue(this.pv);
                else {
                  var t, e;
                  (this.lock = !0),
                    (this._mdf = !1),
                    (t = this.kf
                      ? this.pv
                      : this.data.ks
                      ? this.data.ks.k
                      : this.data.pt.k);
                  var r = this.effectsSequence.length;
                  for (e = 0; e < r; e += 1) t = this.effectsSequence[e](t);
                  this.setVValue(t),
                    (this.lock = !1),
                    (this.frameId = this.elem.globalData.frameId);
                }
              else this._mdf = !1;
          }
          function n(t, e, r) {
            (this.propType = 'shape'),
              (this.comp = t.comp),
              (this.container = t),
              (this.elem = t),
              (this.data = e),
              (this.k = !1),
              (this.kf = !1),
              (this._mdf = !1);
            var s = 3 === r ? e.pt.k : e.ks.k;
            (this.v = shapePool.clone(s)),
              (this.pv = shapePool.clone(this.v)),
              (this.localShapeCollection =
                shapeCollectionPool.newShapeCollection()),
              (this.paths = this.localShapeCollection),
              this.paths.addShape(this.v),
              (this.reset = i),
              (this.effectsSequence = []);
          }
          function o(t) {
            this.effectsSequence.push(t),
              this.container.addDynamicProperty(this);
          }
          function l(e, s, a) {
            (this.propType = 'shape'),
              (this.comp = e.comp),
              (this.elem = e),
              (this.container = e),
              (this.offsetTime = e.data.st),
              (this.keyframes = 3 === a ? s.pt.k : s.ks.k),
              (this.k = !0),
              (this.kf = !0);
            var n = this.keyframes[0].s[0].i.length;
            (this.v = shapePool.newElement()),
              this.v.setPathData(this.keyframes[0].s[0].c, n),
              (this.pv = shapePool.clone(this.v)),
              (this.localShapeCollection =
                shapeCollectionPool.newShapeCollection()),
              (this.paths = this.localShapeCollection),
              this.paths.addShape(this.v),
              (this.lastFrame = t),
              (this.reset = i),
              (this._caching = { lastFrame: t, lastIndex: 0 }),
              (this.effectsSequence = [r.bind(this)]);
          }
          (n.prototype.interpolateShape = e),
            (n.prototype.getValue = a),
            (n.prototype.setVValue = s),
            (n.prototype.addEffect = o),
            (l.prototype.getValue = a),
            (l.prototype.interpolateShape = e),
            (l.prototype.setVValue = s),
            (l.prototype.addEffect = o);
          var h = (function () {
              var t = roundCorner;
              function e(t, e) {
                (this.v = shapePool.newElement()),
                  this.v.setPathData(!0, 4),
                  (this.localShapeCollection =
                    shapeCollectionPool.newShapeCollection()),
                  (this.paths = this.localShapeCollection),
                  this.localShapeCollection.addShape(this.v),
                  (this.d = e.d),
                  (this.elem = t),
                  (this.comp = t.comp),
                  (this.frameId = -1),
                  this.initDynamicPropertyContainer(t),
                  (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                  (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
                  this.dynamicProperties.length
                    ? (this.k = !0)
                    : ((this.k = !1), this.convertEllToPath());
              }
              return (
                (e.prototype = {
                  reset: i,
                  getValue: function () {
                    this.elem.globalData.frameId !== this.frameId &&
                      ((this.frameId = this.elem.globalData.frameId),
                      this.iterateDynamicProperties(),
                      this._mdf && this.convertEllToPath());
                  },
                  convertEllToPath: function () {
                    var e = this.p.v[0],
                      r = this.p.v[1],
                      i = this.s.v[0] / 2,
                      s = this.s.v[1] / 2,
                      a = 3 !== this.d,
                      n = this.v;
                    (n.v[0][0] = e),
                      (n.v[0][1] = r - s),
                      (n.v[1][0] = a ? e + i : e - i),
                      (n.v[1][1] = r),
                      (n.v[2][0] = e),
                      (n.v[2][1] = r + s),
                      (n.v[3][0] = a ? e - i : e + i),
                      (n.v[3][1] = r),
                      (n.i[0][0] = a ? e - i * t : e + i * t),
                      (n.i[0][1] = r - s),
                      (n.i[1][0] = a ? e + i : e - i),
                      (n.i[1][1] = r - s * t),
                      (n.i[2][0] = a ? e + i * t : e - i * t),
                      (n.i[2][1] = r + s),
                      (n.i[3][0] = a ? e - i : e + i),
                      (n.i[3][1] = r + s * t),
                      (n.o[0][0] = a ? e + i * t : e - i * t),
                      (n.o[0][1] = r - s),
                      (n.o[1][0] = a ? e + i : e - i),
                      (n.o[1][1] = r + s * t),
                      (n.o[2][0] = a ? e - i * t : e + i * t),
                      (n.o[2][1] = r + s),
                      (n.o[3][0] = a ? e - i : e + i),
                      (n.o[3][1] = r - s * t);
                  },
                }),
                extendPrototype([DynamicPropertyContainer], e),
                e
              );
            })(),
            p = (function () {
              function t(t, e) {
                (this.v = shapePool.newElement()),
                  this.v.setPathData(!0, 0),
                  (this.elem = t),
                  (this.comp = t.comp),
                  (this.data = e),
                  (this.frameId = -1),
                  (this.d = e.d),
                  this.initDynamicPropertyContainer(t),
                  1 === e.sy
                    ? ((this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this)),
                      (this.is = PropertyFactory.getProp(
                        t,
                        e.is,
                        0,
                        0.01,
                        this
                      )),
                      (this.convertToPath = this.convertStarToPath))
                    : (this.convertToPath = this.convertPolygonToPath),
                  (this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this)),
                  (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                  (this.r = PropertyFactory.getProp(
                    t,
                    e.r,
                    0,
                    degToRads,
                    this
                  )),
                  (this.or = PropertyFactory.getProp(t, e.or, 0, 0, this)),
                  (this.os = PropertyFactory.getProp(t, e.os, 0, 0.01, this)),
                  (this.localShapeCollection =
                    shapeCollectionPool.newShapeCollection()),
                  this.localShapeCollection.addShape(this.v),
                  (this.paths = this.localShapeCollection),
                  this.dynamicProperties.length
                    ? (this.k = !0)
                    : ((this.k = !1), this.convertToPath());
              }
              return (
                (t.prototype = {
                  reset: i,
                  getValue: function () {
                    this.elem.globalData.frameId !== this.frameId &&
                      ((this.frameId = this.elem.globalData.frameId),
                      this.iterateDynamicProperties(),
                      this._mdf && this.convertToPath());
                  },
                  convertStarToPath: function () {
                    var t,
                      e,
                      r,
                      i,
                      s = 2 * Math.floor(this.pt.v),
                      a = (2 * Math.PI) / s,
                      n = !0,
                      o = this.or.v,
                      l = this.ir.v,
                      h = this.os.v,
                      p = this.is.v,
                      u = (2 * Math.PI * o) / (2 * s),
                      c = (2 * Math.PI * l) / (2 * s),
                      f = -Math.PI / 2;
                    f += this.r.v;
                    var m = 3 === this.data.d ? -1 : 1;
                    for (this.v._length = 0, t = 0; t < s; t += 1) {
                      (r = n ? h : p), (i = n ? u : c);
                      var d = (e = n ? o : l) * Math.cos(f),
                        g = e * Math.sin(f),
                        y =
                          0 === d && 0 === g ? 0 : g / Math.sqrt(d * d + g * g),
                        v =
                          0 === d && 0 === g
                            ? 0
                            : -d / Math.sqrt(d * d + g * g);
                      (d += +this.p.v[0]),
                        (g += +this.p.v[1]),
                        this.v.setTripleAt(
                          d,
                          g,
                          d - y * i * r * m,
                          g - v * i * r * m,
                          d + y * i * r * m,
                          g + v * i * r * m,
                          t,
                          !0
                        ),
                        (n = !n),
                        (f += a * m);
                    }
                  },
                  convertPolygonToPath: function () {
                    var t,
                      e = Math.floor(this.pt.v),
                      r = (2 * Math.PI) / e,
                      i = this.or.v,
                      s = this.os.v,
                      a = (2 * Math.PI * i) / (4 * e),
                      n = 0.5 * -Math.PI,
                      o = 3 === this.data.d ? -1 : 1;
                    for (
                      n += this.r.v, this.v._length = 0, t = 0;
                      t < e;
                      t += 1
                    ) {
                      var l = i * Math.cos(n),
                        h = i * Math.sin(n),
                        p =
                          0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                        u =
                          0 === l && 0 === h
                            ? 0
                            : -l / Math.sqrt(l * l + h * h);
                      (l += +this.p.v[0]),
                        (h += +this.p.v[1]),
                        this.v.setTripleAt(
                          l,
                          h,
                          l - p * a * s * o,
                          h - u * a * s * o,
                          l + p * a * s * o,
                          h + u * a * s * o,
                          t,
                          !0
                        ),
                        (n += r * o);
                    }
                    (this.paths.length = 0), (this.paths[0] = this.v);
                  },
                }),
                extendPrototype([DynamicPropertyContainer], t),
                t
              );
            })(),
            u = (function () {
              function t(t, e) {
                (this.v = shapePool.newElement()),
                  (this.v.c = !0),
                  (this.localShapeCollection =
                    shapeCollectionPool.newShapeCollection()),
                  this.localShapeCollection.addShape(this.v),
                  (this.paths = this.localShapeCollection),
                  (this.elem = t),
                  (this.comp = t.comp),
                  (this.frameId = -1),
                  (this.d = e.d),
                  this.initDynamicPropertyContainer(t),
                  (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                  (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
                  (this.r = PropertyFactory.getProp(t, e.r, 0, 0, this)),
                  this.dynamicProperties.length
                    ? (this.k = !0)
                    : ((this.k = !1), this.convertRectToPath());
              }
              return (
                (t.prototype = {
                  convertRectToPath: function () {
                    var t = this.p.v[0],
                      e = this.p.v[1],
                      r = this.s.v[0] / 2,
                      i = this.s.v[1] / 2,
                      s = bmMin(r, i, this.r.v),
                      a = s * (1 - roundCorner);
                    (this.v._length = 0),
                      2 === this.d || 1 === this.d
                        ? (this.v.setTripleAt(
                            t + r,
                            e - i + s,
                            t + r,
                            e - i + s,
                            t + r,
                            e - i + a,
                            0,
                            !0
                          ),
                          this.v.setTripleAt(
                            t + r,
                            e + i - s,
                            t + r,
                            e + i - a,
                            t + r,
                            e + i - s,
                            1,
                            !0
                          ),
                          0 !== s
                            ? (this.v.setTripleAt(
                                t + r - s,
                                e + i,
                                t + r - s,
                                e + i,
                                t + r - a,
                                e + i,
                                2,
                                !0
                              ),
                              this.v.setTripleAt(
                                t - r + s,
                                e + i,
                                t - r + a,
                                e + i,
                                t - r + s,
                                e + i,
                                3,
                                !0
                              ),
                              this.v.setTripleAt(
                                t - r,
                                e + i - s,
                                t - r,
                                e + i - s,
                                t - r,
                                e + i - a,
                                4,
                                !0
                              ),
                              this.v.setTripleAt(
                                t - r,
                                e - i + s,
                                t - r,
                                e - i + a,
                                t - r,
                                e - i + s,
                                5,
                                !0
                              ),
                              this.v.setTripleAt(
                                t - r + s,
                                e - i,
                                t - r + s,
                                e - i,
                                t - r + a,
                                e - i,
                                6,
                                !0
                              ),
                              this.v.setTripleAt(
                                t + r - s,
                                e - i,
                                t + r - a,
                                e - i,
                                t + r - s,
                                e - i,
                                7,
                                !0
                              ))
                            : (this.v.setTripleAt(
                                t - r,
                                e + i,
                                t - r + a,
                                e + i,
                                t - r,
                                e + i,
                                2
                              ),
                              this.v.setTripleAt(
                                t - r,
                                e - i,
                                t - r,
                                e - i + a,
                                t - r,
                                e - i,
                                3
                              )))
                        : (this.v.setTripleAt(
                            t + r,
                            e - i + s,
                            t + r,
                            e - i + a,
                            t + r,
                            e - i + s,
                            0,
                            !0
                          ),
                          0 !== s
                            ? (this.v.setTripleAt(
                                t + r - s,
                                e - i,
                                t + r - s,
                                e - i,
                                t + r - a,
                                e - i,
                                1,
                                !0
                              ),
                              this.v.setTripleAt(
                                t - r + s,
                                e - i,
                                t - r + a,
                                e - i,
                                t - r + s,
                                e - i,
                                2,
                                !0
                              ),
                              this.v.setTripleAt(
                                t - r,
                                e - i + s,
                                t - r,
                                e - i + s,
                                t - r,
                                e - i + a,
                                3,
                                !0
                              ),
                              this.v.setTripleAt(
                                t - r,
                                e + i - s,
                                t - r,
                                e + i - a,
                                t - r,
                                e + i - s,
                                4,
                                !0
                              ),
                              this.v.setTripleAt(
                                t - r + s,
                                e + i,
                                t - r + s,
                                e + i,
                                t - r + a,
                                e + i,
                                5,
                                !0
                              ),
                              this.v.setTripleAt(
                                t + r - s,
                                e + i,
                                t + r - a,
                                e + i,
                                t + r - s,
                                e + i,
                                6,
                                !0
                              ),
                              this.v.setTripleAt(
                                t + r,
                                e + i - s,
                                t + r,
                                e + i - s,
                                t + r,
                                e + i - a,
                                7,
                                !0
                              ))
                            : (this.v.setTripleAt(
                                t - r,
                                e - i,
                                t - r + a,
                                e - i,
                                t - r,
                                e - i,
                                1,
                                !0
                              ),
                              this.v.setTripleAt(
                                t - r,
                                e + i,
                                t - r,
                                e + i - a,
                                t - r,
                                e + i,
                                2,
                                !0
                              ),
                              this.v.setTripleAt(
                                t + r,
                                e + i,
                                t + r - a,
                                e + i,
                                t + r,
                                e + i,
                                3,
                                !0
                              )));
                  },
                  getValue: function () {
                    this.elem.globalData.frameId !== this.frameId &&
                      ((this.frameId = this.elem.globalData.frameId),
                      this.iterateDynamicProperties(),
                      this._mdf && this.convertRectToPath());
                  },
                  reset: i,
                }),
                extendPrototype([DynamicPropertyContainer], t),
                t
              );
            })(),
            c = {
              getShapeProp: function (t, e, r) {
                var i;
                return (
                  3 === r || 4 === r
                    ? (i = (3 === r ? e.pt : e.ks).k.length
                        ? new l(t, e, r)
                        : new n(t, e, r))
                    : 5 === r
                    ? (i = new u(t, e))
                    : 6 === r
                    ? (i = new h(t, e))
                    : 7 === r && (i = new p(t, e)),
                  i.k && t.addDynamicProperty(i),
                  i
                );
              },
              getConstructorFunction: function () {
                return n;
              },
              getKeyframedConstructorFunction: function () {
                return l;
              },
            };
          return c;
        })(),
        ShapeModifiers =
          ((ob2 = {}),
          (modifiers = {}),
          (ob2.registerModifier = function (t, e) {
            modifiers[t] || (modifiers[t] = e);
          }),
          (ob2.getModifier = function (t, e, r) {
            return new modifiers[t](e, r);
          }),
          ob2),
        ob2,
        modifiers;
      function ShapeModifier() {}
      function TrimModifier() {}
      function RoundCornersModifier() {}
      function PuckerAndBloatModifier() {}
      function RepeaterModifier() {}
      function ShapeCollection() {
        (this._length = 0),
          (this._maxLength = 4),
          (this.shapes = createSizedArray(this._maxLength));
      }
      function DashProperty(t, e, r, i) {
        var s;
        (this.elem = t),
          (this.frameId = -1),
          (this.dataProps = createSizedArray(e.length)),
          (this.renderer = r),
          (this.k = !1),
          (this.dashStr = ''),
          (this.dashArray = createTypedArray(
            'float32',
            e.length ? e.length - 1 : 0
          )),
          (this.dashoffset = createTypedArray('float32', 1)),
          this.initDynamicPropertyContainer(i);
        var a,
          n = e.length || 0;
        for (s = 0; s < n; s += 1)
          (a = PropertyFactory.getProp(t, e[s].v, 0, 0, this)),
            (this.k = a.k || this.k),
            (this.dataProps[s] = { n: e[s].n, p: a });
        this.k || this.getValue(!0), (this._isAnimated = this.k);
      }
      function GradientProperty(t, e, r) {
        (this.data = e), (this.c = createTypedArray('uint8c', 4 * e.p));
        var i = e.k.k[0].s
          ? e.k.k[0].s.length - 4 * e.p
          : e.k.k.length - 4 * e.p;
        (this.o = createTypedArray('float32', i)),
          (this._cmdf = !1),
          (this._omdf = !1),
          (this._collapsable = this.checkCollapsable()),
          (this._hasOpacity = i),
          this.initDynamicPropertyContainer(r),
          (this.prop = PropertyFactory.getProp(t, e.k, 1, null, this)),
          (this.k = this.prop.k),
          this.getValue(!0);
      }
      (ShapeModifier.prototype.initModifierProperties = function () {}),
        (ShapeModifier.prototype.addShapeToModifier = function () {}),
        (ShapeModifier.prototype.addShape = function (t) {
          if (!this.closed) {
            t.sh.container.addDynamicProperty(t.sh);
            var e = {
              shape: t.sh,
              data: t,
              localShapeCollection: shapeCollectionPool.newShapeCollection(),
            };
            this.shapes.push(e),
              this.addShapeToModifier(e),
              this._isAnimated && t.setAsAnimated();
          }
        }),
        (ShapeModifier.prototype.init = function (t, e) {
          (this.shapes = []),
            (this.elem = t),
            this.initDynamicPropertyContainer(t),
            this.initModifierProperties(t, e),
            (this.frameId = initialDefaultFrame),
            (this.closed = !1),
            (this.k = !1),
            this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
        }),
        (ShapeModifier.prototype.processKeys = function () {
          this.elem.globalData.frameId !== this.frameId &&
            ((this.frameId = this.elem.globalData.frameId),
            this.iterateDynamicProperties());
        }),
        extendPrototype([DynamicPropertyContainer], ShapeModifier),
        extendPrototype([ShapeModifier], TrimModifier),
        (TrimModifier.prototype.initModifierProperties = function (t, e) {
          (this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this)),
            (this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this)),
            (this.o = PropertyFactory.getProp(t, e.o, 0, 0, this)),
            (this.sValue = 0),
            (this.eValue = 0),
            (this.getValue = this.processKeys),
            (this.m = e.m),
            (this._isAnimated =
              !!this.s.effectsSequence.length ||
              !!this.e.effectsSequence.length ||
              !!this.o.effectsSequence.length);
        }),
        (TrimModifier.prototype.addShapeToModifier = function (t) {
          t.pathsData = [];
        }),
        (TrimModifier.prototype.calculateShapeEdges = function (t, e, r, i, s) {
          var a = [];
          e <= 1
            ? a.push({ s: t, e: e })
            : t >= 1
            ? a.push({ s: t - 1, e: e - 1 })
            : (a.push({ s: t, e: 1 }), a.push({ s: 0, e: e - 1 }));
          var n,
            o,
            l = [],
            h = a.length;
          for (n = 0; n < h; n += 1) {
            var p, u;
            (o = a[n]).e * s < i ||
              o.s * s > i + r ||
              ((p = o.s * s <= i ? 0 : (o.s * s - i) / r),
              (u = o.e * s >= i + r ? 1 : (o.e * s - i) / r),
              l.push([p, u]));
          }
          return l.length || l.push([0, 0]), l;
        }),
        (TrimModifier.prototype.releasePathsData = function (t) {
          var e,
            r = t.length;
          for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]);
          return (t.length = 0), t;
        }),
        (TrimModifier.prototype.processShapes = function (t) {
          var e, r, i, s;
          if (this._mdf || t) {
            var a = (this.o.v % 360) / 360;
            if (
              (a < 0 && (a += 1),
              (e = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) >
                (r =
                  this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a))
            ) {
              var n = e;
              (e = r), (r = n);
            }
            (e = 1e-4 * Math.round(1e4 * e)),
              (r = 1e-4 * Math.round(1e4 * r)),
              (this.sValue = e),
              (this.eValue = r);
          } else (e = this.sValue), (r = this.eValue);
          var o,
            l,
            h,
            p,
            u,
            c = this.shapes.length,
            f = 0;
          if (r === e)
            for (s = 0; s < c; s += 1)
              this.shapes[s].localShapeCollection.releaseShapes(),
                (this.shapes[s].shape._mdf = !0),
                (this.shapes[s].shape.paths =
                  this.shapes[s].localShapeCollection),
                this._mdf && (this.shapes[s].pathsData.length = 0);
          else if ((1 === r && 0 === e) || (0 === r && 1 === e)) {
            if (this._mdf)
              for (s = 0; s < c; s += 1)
                (this.shapes[s].pathsData.length = 0),
                  (this.shapes[s].shape._mdf = !0);
          } else {
            var m,
              d,
              g = [];
            for (s = 0; s < c; s += 1)
              if (
                (m = this.shapes[s]).shape._mdf ||
                this._mdf ||
                t ||
                2 === this.m
              ) {
                if (
                  ((l = (i = m.shape.paths)._length),
                  (u = 0),
                  !m.shape._mdf && m.pathsData.length)
                )
                  u = m.totalShapeLength;
                else {
                  for (
                    h = this.releasePathsData(m.pathsData), o = 0;
                    o < l;
                    o += 1
                  )
                    (p = bez.getSegmentsLength(i.shapes[o])),
                      h.push(p),
                      (u += p.totalLength);
                  (m.totalShapeLength = u), (m.pathsData = h);
                }
                (f += u), (m.shape._mdf = !0);
              } else m.shape.paths = m.localShapeCollection;
            var y,
              v = e,
              b = r,
              D = 0;
            for (s = c - 1; s >= 0; s -= 1)
              if ((m = this.shapes[s]).shape._mdf) {
                for (
                  (d = m.localShapeCollection).releaseShapes(),
                    2 === this.m && c > 1
                      ? ((y = this.calculateShapeEdges(
                          e,
                          r,
                          m.totalShapeLength,
                          D,
                          f
                        )),
                        (D += m.totalShapeLength))
                      : (y = [[v, b]]),
                    l = y.length,
                    o = 0;
                  o < l;
                  o += 1
                ) {
                  (v = y[o][0]),
                    (b = y[o][1]),
                    (g.length = 0),
                    b <= 1
                      ? g.push({
                          s: m.totalShapeLength * v,
                          e: m.totalShapeLength * b,
                        })
                      : v >= 1
                      ? g.push({
                          s: m.totalShapeLength * (v - 1),
                          e: m.totalShapeLength * (b - 1),
                        })
                      : (g.push({
                          s: m.totalShapeLength * v,
                          e: m.totalShapeLength,
                        }),
                        g.push({ s: 0, e: m.totalShapeLength * (b - 1) }));
                  var x = this.addShapes(m, g[0]);
                  if (g[0].s !== g[0].e) {
                    if (g.length > 1)
                      if (m.shape.paths.shapes[m.shape.paths._length - 1].c) {
                        var E = x.pop();
                        this.addPaths(x, d), (x = this.addShapes(m, g[1], E));
                      } else this.addPaths(x, d), (x = this.addShapes(m, g[1]));
                    this.addPaths(x, d);
                  }
                }
                m.shape.paths = d;
              }
          }
        }),
        (TrimModifier.prototype.addPaths = function (t, e) {
          var r,
            i = t.length;
          for (r = 0; r < i; r += 1) e.addShape(t[r]);
        }),
        (TrimModifier.prototype.addSegment = function (t, e, r, i, s, a, n) {
          s.setXYAt(e[0], e[1], 'o', a),
            s.setXYAt(r[0], r[1], 'i', a + 1),
            n && s.setXYAt(t[0], t[1], 'v', a),
            s.setXYAt(i[0], i[1], 'v', a + 1);
        }),
        (TrimModifier.prototype.addSegmentFromArray = function (t, e, r, i) {
          e.setXYAt(t[1], t[5], 'o', r),
            e.setXYAt(t[2], t[6], 'i', r + 1),
            i && e.setXYAt(t[0], t[4], 'v', r),
            e.setXYAt(t[3], t[7], 'v', r + 1);
        }),
        (TrimModifier.prototype.addShapes = function (t, e, r) {
          var i,
            s,
            a,
            n,
            o,
            l,
            h,
            p,
            u = t.pathsData,
            c = t.shape.paths.shapes,
            f = t.shape.paths._length,
            m = 0,
            d = [],
            g = !0;
          for (
            r
              ? ((o = r._length), (p = r._length))
              : ((r = shapePool.newElement()), (o = 0), (p = 0)),
              d.push(r),
              i = 0;
            i < f;
            i += 1
          ) {
            for (
              l = u[i].lengths,
                r.c = c[i].c,
                a = c[i].c ? l.length : l.length + 1,
                s = 1;
              s < a;
              s += 1
            )
              if (m + (n = l[s - 1]).addedLength < e.s)
                (m += n.addedLength), (r.c = !1);
              else {
                if (m > e.e) {
                  r.c = !1;
                  break;
                }
                e.s <= m && e.e >= m + n.addedLength
                  ? (this.addSegment(
                      c[i].v[s - 1],
                      c[i].o[s - 1],
                      c[i].i[s],
                      c[i].v[s],
                      r,
                      o,
                      g
                    ),
                    (g = !1))
                  : ((h = bez.getNewSegment(
                      c[i].v[s - 1],
                      c[i].v[s],
                      c[i].o[s - 1],
                      c[i].i[s],
                      (e.s - m) / n.addedLength,
                      (e.e - m) / n.addedLength,
                      l[s - 1]
                    )),
                    this.addSegmentFromArray(h, r, o, g),
                    (g = !1),
                    (r.c = !1)),
                  (m += n.addedLength),
                  (o += 1);
              }
            if (c[i].c && l.length) {
              if (((n = l[s - 1]), m <= e.e)) {
                var y = l[s - 1].addedLength;
                e.s <= m && e.e >= m + y
                  ? (this.addSegment(
                      c[i].v[s - 1],
                      c[i].o[s - 1],
                      c[i].i[0],
                      c[i].v[0],
                      r,
                      o,
                      g
                    ),
                    (g = !1))
                  : ((h = bez.getNewSegment(
                      c[i].v[s - 1],
                      c[i].v[0],
                      c[i].o[s - 1],
                      c[i].i[0],
                      (e.s - m) / y,
                      (e.e - m) / y,
                      l[s - 1]
                    )),
                    this.addSegmentFromArray(h, r, o, g),
                    (g = !1),
                    (r.c = !1));
              } else r.c = !1;
              (m += n.addedLength), (o += 1);
            }
            if (
              (r._length &&
                (r.setXYAt(r.v[p][0], r.v[p][1], 'i', p),
                r.setXYAt(
                  r.v[r._length - 1][0],
                  r.v[r._length - 1][1],
                  'o',
                  r._length - 1
                )),
              m > e.e)
            )
              break;
            i < f - 1 &&
              ((r = shapePool.newElement()), (g = !0), d.push(r), (o = 0));
          }
          return d;
        }),
        ShapeModifiers.registerModifier('tm', TrimModifier),
        extendPrototype([ShapeModifier], RoundCornersModifier),
        (RoundCornersModifier.prototype.initModifierProperties = function (
          t,
          e
        ) {
          (this.getValue = this.processKeys),
            (this.rd = PropertyFactory.getProp(t, e.r, 0, null, this)),
            (this._isAnimated = !!this.rd.effectsSequence.length);
        }),
        (RoundCornersModifier.prototype.processPath = function (t, e) {
          var r,
            i = shapePool.newElement();
          i.c = t.c;
          var s,
            a,
            n,
            o,
            l,
            h,
            p,
            u,
            c,
            f,
            m,
            d,
            g = t._length,
            y = 0;
          for (r = 0; r < g; r += 1)
            (s = t.v[r]),
              (n = t.o[r]),
              (a = t.i[r]),
              s[0] === n[0] && s[1] === n[1] && s[0] === a[0] && s[1] === a[1]
                ? (0 !== r && r !== g - 1) || t.c
                  ? ((o = 0 === r ? t.v[g - 1] : t.v[r - 1]),
                    (h = (l = Math.sqrt(
                      Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2)
                    ))
                      ? Math.min(l / 2, e) / l
                      : 0),
                    (p = m = s[0] + (o[0] - s[0]) * h),
                    (u = d = s[1] - (s[1] - o[1]) * h),
                    (c = p - (p - s[0]) * roundCorner),
                    (f = u - (u - s[1]) * roundCorner),
                    i.setTripleAt(p, u, c, f, m, d, y),
                    (y += 1),
                    (o = r === g - 1 ? t.v[0] : t.v[r + 1]),
                    (h = (l = Math.sqrt(
                      Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2)
                    ))
                      ? Math.min(l / 2, e) / l
                      : 0),
                    (p = c = s[0] + (o[0] - s[0]) * h),
                    (u = f = s[1] + (o[1] - s[1]) * h),
                    (m = p - (p - s[0]) * roundCorner),
                    (d = u - (u - s[1]) * roundCorner),
                    i.setTripleAt(p, u, c, f, m, d, y),
                    (y += 1))
                  : (i.setTripleAt(s[0], s[1], n[0], n[1], a[0], a[1], y),
                    (y += 1))
                : (i.setTripleAt(
                    t.v[r][0],
                    t.v[r][1],
                    t.o[r][0],
                    t.o[r][1],
                    t.i[r][0],
                    t.i[r][1],
                    y
                  ),
                  (y += 1));
          return i;
        }),
        (RoundCornersModifier.prototype.processShapes = function (t) {
          var e,
            r,
            i,
            s,
            a,
            n,
            o = this.shapes.length,
            l = this.rd.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (
                ((n = (a = this.shapes[r]).localShapeCollection),
                a.shape._mdf || this._mdf || t)
              )
                for (
                  n.releaseShapes(),
                    a.shape._mdf = !0,
                    e = a.shape.paths.shapes,
                    s = a.shape.paths._length,
                    i = 0;
                  i < s;
                  i += 1
                )
                  n.addShape(this.processPath(e[i], l));
              a.shape.paths = a.localShapeCollection;
            }
          this.dynamicProperties.length || (this._mdf = !1);
        }),
        ShapeModifiers.registerModifier('rd', RoundCornersModifier),
        extendPrototype([ShapeModifier], PuckerAndBloatModifier),
        (PuckerAndBloatModifier.prototype.initModifierProperties = function (
          t,
          e
        ) {
          (this.getValue = this.processKeys),
            (this.amount = PropertyFactory.getProp(t, e.a, 0, null, this)),
            (this._isAnimated = !!this.amount.effectsSequence.length);
        }),
        (PuckerAndBloatModifier.prototype.processPath = function (t, e) {
          var r = e / 100,
            i = [0, 0],
            s = t._length,
            a = 0;
          for (a = 0; a < s; a += 1) (i[0] += t.v[a][0]), (i[1] += t.v[a][1]);
          (i[0] /= s), (i[1] /= s);
          var n,
            o,
            l,
            h,
            p,
            u,
            c = shapePool.newElement();
          for (c.c = t.c, a = 0; a < s; a += 1)
            (n = t.v[a][0] + (i[0] - t.v[a][0]) * r),
              (o = t.v[a][1] + (i[1] - t.v[a][1]) * r),
              (l = t.o[a][0] + (i[0] - t.o[a][0]) * -r),
              (h = t.o[a][1] + (i[1] - t.o[a][1]) * -r),
              (p = t.i[a][0] + (i[0] - t.i[a][0]) * -r),
              (u = t.i[a][1] + (i[1] - t.i[a][1]) * -r),
              c.setTripleAt(n, o, l, h, p, u, a);
          return c;
        }),
        (PuckerAndBloatModifier.prototype.processShapes = function (t) {
          var e,
            r,
            i,
            s,
            a,
            n,
            o = this.shapes.length,
            l = this.amount.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (
                ((n = (a = this.shapes[r]).localShapeCollection),
                a.shape._mdf || this._mdf || t)
              )
                for (
                  n.releaseShapes(),
                    a.shape._mdf = !0,
                    e = a.shape.paths.shapes,
                    s = a.shape.paths._length,
                    i = 0;
                  i < s;
                  i += 1
                )
                  n.addShape(this.processPath(e[i], l));
              a.shape.paths = a.localShapeCollection;
            }
          this.dynamicProperties.length || (this._mdf = !1);
        }),
        ShapeModifiers.registerModifier('pb', PuckerAndBloatModifier),
        extendPrototype([ShapeModifier], RepeaterModifier),
        (RepeaterModifier.prototype.initModifierProperties = function (t, e) {
          (this.getValue = this.processKeys),
            (this.c = PropertyFactory.getProp(t, e.c, 0, null, this)),
            (this.o = PropertyFactory.getProp(t, e.o, 0, null, this)),
            (this.tr = TransformPropertyFactory.getTransformProperty(
              t,
              e.tr,
              this
            )),
            (this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this)),
            (this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this)),
            (this.data = e),
            this.dynamicProperties.length || this.getValue(!0),
            (this._isAnimated = !!this.dynamicProperties.length),
            (this.pMatrix = new Matrix()),
            (this.rMatrix = new Matrix()),
            (this.sMatrix = new Matrix()),
            (this.tMatrix = new Matrix()),
            (this.matrix = new Matrix());
        }),
        (RepeaterModifier.prototype.applyTransforms = function (
          t,
          e,
          r,
          i,
          s,
          a
        ) {
          var n = a ? -1 : 1,
            o = i.s.v[0] + (1 - i.s.v[0]) * (1 - s),
            l = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
          t.translate(i.p.v[0] * n * s, i.p.v[1] * n * s, i.p.v[2]),
            e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
            e.rotate(-i.r.v * n * s),
            e.translate(i.a.v[0], i.a.v[1], i.a.v[2]),
            r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
            r.scale(a ? 1 / o : o, a ? 1 / l : l),
            r.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
        }),
        (RepeaterModifier.prototype.init = function (t, e, r, i) {
          for (
            this.elem = t,
              this.arr = e,
              this.pos = r,
              this.elemsData = i,
              this._currentCopies = 0,
              this._elements = [],
              this._groups = [],
              this.frameId = -1,
              this.initDynamicPropertyContainer(t),
              this.initModifierProperties(t, e[r]);
            r > 0;

          )
            (r -= 1), this._elements.unshift(e[r]);
          this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
        }),
        (RepeaterModifier.prototype.resetElements = function (t) {
          var e,
            r = t.length;
          for (e = 0; e < r; e += 1)
            (t[e]._processed = !1),
              'gr' === t[e].ty && this.resetElements(t[e].it);
        }),
        (RepeaterModifier.prototype.cloneElements = function (t) {
          var e = JSON.parse(JSON.stringify(t));
          return this.resetElements(e), e;
        }),
        (RepeaterModifier.prototype.changeGroupRender = function (t, e) {
          var r,
            i = t.length;
          for (r = 0; r < i; r += 1)
            (t[r]._render = e),
              'gr' === t[r].ty && this.changeGroupRender(t[r].it, e);
        }),
        (RepeaterModifier.prototype.processShapes = function (t) {
          var e,
            r,
            i,
            s,
            a,
            n = !1;
          if (this._mdf || t) {
            var o,
              l = Math.ceil(this.c.v);
            if (this._groups.length < l) {
              for (; this._groups.length < l; ) {
                var h = { it: this.cloneElements(this._elements), ty: 'gr' };
                h.it.push({
                  a: { a: 0, ix: 1, k: [0, 0] },
                  nm: 'Transform',
                  o: { a: 0, ix: 7, k: 100 },
                  p: { a: 0, ix: 2, k: [0, 0] },
                  r: {
                    a: 1,
                    ix: 6,
                    k: [
                      { s: 0, e: 0, t: 0 },
                      { s: 0, e: 0, t: 1 },
                    ],
                  },
                  s: { a: 0, ix: 3, k: [100, 100] },
                  sa: { a: 0, ix: 5, k: 0 },
                  sk: { a: 0, ix: 4, k: 0 },
                  ty: 'tr',
                }),
                  this.arr.splice(0, 0, h),
                  this._groups.splice(0, 0, h),
                  (this._currentCopies += 1);
              }
              this.elem.reloadShapes(), (n = !0);
            }
            for (a = 0, i = 0; i <= this._groups.length - 1; i += 1) {
              if (
                ((o = a < l),
                (this._groups[i]._render = o),
                this.changeGroupRender(this._groups[i].it, o),
                !o)
              ) {
                var p = this.elemsData[i].it,
                  u = p[p.length - 1];
                0 !== u.transform.op.v
                  ? ((u.transform.op._mdf = !0), (u.transform.op.v = 0))
                  : (u.transform.op._mdf = !1);
              }
              a += 1;
            }
            this._currentCopies = l;
            var c = this.o.v,
              f = c % 1,
              m = c > 0 ? Math.floor(c) : Math.ceil(c),
              d = this.pMatrix.props,
              g = this.rMatrix.props,
              y = this.sMatrix.props;
            this.pMatrix.reset(),
              this.rMatrix.reset(),
              this.sMatrix.reset(),
              this.tMatrix.reset(),
              this.matrix.reset();
            var v,
              b,
              D = 0;
            if (c > 0) {
              for (; D < m; )
                this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  1,
                  !1
                ),
                  (D += 1);
              f &&
                (this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  f,
                  !1
                ),
                (D += f));
            } else if (c < 0) {
              for (; D > m; )
                this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  1,
                  !0
                ),
                  (D -= 1);
              f &&
                (this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  -f,
                  !0
                ),
                (D -= f));
            }
            for (
              i = 1 === this.data.m ? 0 : this._currentCopies - 1,
                s = 1 === this.data.m ? 1 : -1,
                a = this._currentCopies;
              a;

            ) {
              if (
                ((b = (r = (e = this.elemsData[i].it)[e.length - 1].transform
                  .mProps.v.props).length),
                (e[e.length - 1].transform.mProps._mdf = !0),
                (e[e.length - 1].transform.op._mdf = !0),
                (e[e.length - 1].transform.op.v =
                  1 === this._currentCopies
                    ? this.so.v
                    : this.so.v +
                      (this.eo.v - this.so.v) *
                        (i / (this._currentCopies - 1))),
                0 !== D)
              ) {
                for (
                  ((0 !== i && 1 === s) ||
                    (i !== this._currentCopies - 1 && -1 === s)) &&
                    this.applyTransforms(
                      this.pMatrix,
                      this.rMatrix,
                      this.sMatrix,
                      this.tr,
                      1,
                      !1
                    ),
                    this.matrix.transform(
                      g[0],
                      g[1],
                      g[2],
                      g[3],
                      g[4],
                      g[5],
                      g[6],
                      g[7],
                      g[8],
                      g[9],
                      g[10],
                      g[11],
                      g[12],
                      g[13],
                      g[14],
                      g[15]
                    ),
                    this.matrix.transform(
                      y[0],
                      y[1],
                      y[2],
                      y[3],
                      y[4],
                      y[5],
                      y[6],
                      y[7],
                      y[8],
                      y[9],
                      y[10],
                      y[11],
                      y[12],
                      y[13],
                      y[14],
                      y[15]
                    ),
                    this.matrix.transform(
                      d[0],
                      d[1],
                      d[2],
                      d[3],
                      d[4],
                      d[5],
                      d[6],
                      d[7],
                      d[8],
                      d[9],
                      d[10],
                      d[11],
                      d[12],
                      d[13],
                      d[14],
                      d[15]
                    ),
                    v = 0;
                  v < b;
                  v += 1
                )
                  r[v] = this.matrix.props[v];
                this.matrix.reset();
              } else
                for (this.matrix.reset(), v = 0; v < b; v += 1)
                  r[v] = this.matrix.props[v];
              (D += 1), (a -= 1), (i += s);
            }
          } else
            for (a = this._currentCopies, i = 0, s = 1; a; )
              (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v
                .props),
                (e[e.length - 1].transform.mProps._mdf = !1),
                (e[e.length - 1].transform.op._mdf = !1),
                (a -= 1),
                (i += s);
          return n;
        }),
        (RepeaterModifier.prototype.addShape = function () {}),
        ShapeModifiers.registerModifier('rp', RepeaterModifier),
        (ShapeCollection.prototype.addShape = function (t) {
          this._length === this._maxLength &&
            ((this.shapes = this.shapes.concat(
              createSizedArray(this._maxLength)
            )),
            (this._maxLength *= 2)),
            (this.shapes[this._length] = t),
            (this._length += 1);
        }),
        (ShapeCollection.prototype.releaseShapes = function () {
          var t;
          for (t = 0; t < this._length; t += 1)
            shapePool.release(this.shapes[t]);
          this._length = 0;
        }),
        (DashProperty.prototype.getValue = function (t) {
          if (
            (this.elem.globalData.frameId !== this.frameId || t) &&
            ((this.frameId = this.elem.globalData.frameId),
            this.iterateDynamicProperties(),
            (this._mdf = this._mdf || t),
            this._mdf)
          ) {
            var e = 0,
              r = this.dataProps.length;
            for (
              'svg' === this.renderer && (this.dashStr = ''), e = 0;
              e < r;
              e += 1
            )
              'o' !== this.dataProps[e].n
                ? 'svg' === this.renderer
                  ? (this.dashStr += ' ' + this.dataProps[e].p.v)
                  : (this.dashArray[e] = this.dataProps[e].p.v)
                : (this.dashoffset[0] = this.dataProps[e].p.v);
          }
        }),
        extendPrototype([DynamicPropertyContainer], DashProperty),
        (GradientProperty.prototype.comparePoints = function (t, e) {
          for (var r = 0, i = this.o.length / 2; r < i; ) {
            if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > 0.01) return !1;
            r += 1;
          }
          return !0;
        }),
        (GradientProperty.prototype.checkCollapsable = function () {
          if (this.o.length / 2 != this.c.length / 4) return !1;
          if (this.data.k.k[0].s)
            for (var t = 0, e = this.data.k.k.length; t < e; ) {
              if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                return !1;
              t += 1;
            }
          else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
          return !0;
        }),
        (GradientProperty.prototype.getValue = function (t) {
          if (
            (this.prop.getValue(),
            (this._mdf = !1),
            (this._cmdf = !1),
            (this._omdf = !1),
            this.prop._mdf || t)
          ) {
            var e,
              r,
              i,
              s = 4 * this.data.p;
            for (e = 0; e < s; e += 1)
              (r = e % 4 == 0 ? 100 : 255),
                (i = Math.round(this.prop.v[e] * r)),
                this.c[e] !== i && ((this.c[e] = i), (this._cmdf = !t));
            if (this.o.length)
              for (s = this.prop.v.length, e = 4 * this.data.p; e < s; e += 1)
                (r = e % 2 == 0 ? 100 : 1),
                  (i =
                    e % 2 == 0
                      ? Math.round(100 * this.prop.v[e])
                      : this.prop.v[e]),
                  this.o[e - 4 * this.data.p] !== i &&
                    ((this.o[e - 4 * this.data.p] = i), (this._omdf = !t));
            this._mdf = !t;
          }
        }),
        extendPrototype([DynamicPropertyContainer], GradientProperty);
      var buildShapeString = function (t, e, r, i) {
          if (0 === e) return '';
          var s,
            a = t.o,
            n = t.i,
            o = t.v,
            l = ' M' + i.applyToPointStringified(o[0][0], o[0][1]);
          for (s = 1; s < e; s += 1)
            l +=
              ' C' +
              i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) +
              ' ' +
              i.applyToPointStringified(n[s][0], n[s][1]) +
              ' ' +
              i.applyToPointStringified(o[s][0], o[s][1]);
          return (
            r &&
              e &&
              ((l +=
                ' C' +
                i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) +
                ' ' +
                i.applyToPointStringified(n[0][0], n[0][1]) +
                ' ' +
                i.applyToPointStringified(o[0][0], o[0][1])),
              (l += 'z')),
            l
          );
        },
        audioControllerFactory = (function () {
          function t(t) {
            (this.audios = []),
              (this.audioFactory = t),
              (this._volume = 1),
              (this._isMuted = !1);
          }
          return (
            (t.prototype = {
              addAudio: function (t) {
                this.audios.push(t);
              },
              pause: function () {
                var t,
                  e = this.audios.length;
                for (t = 0; t < e; t += 1) this.audios[t].pause();
              },
              resume: function () {
                var t,
                  e = this.audios.length;
                for (t = 0; t < e; t += 1) this.audios[t].resume();
              },
              setRate: function (t) {
                var e,
                  r = this.audios.length;
                for (e = 0; e < r; e += 1) this.audios[e].setRate(t);
              },
              createAudio: function (t) {
                return this.audioFactory
                  ? this.audioFactory(t)
                  : Howl
                  ? new Howl({ src: [t] })
                  : {
                      isPlaying: !1,
                      play: function () {
                        this.isPlaying = !0;
                      },
                      seek: function () {
                        this.isPlaying = !1;
                      },
                      playing: function () {},
                      rate: function () {},
                      setVolume: function () {},
                    };
              },
              setAudioFactory: function (t) {
                this.audioFactory = t;
              },
              setVolume: function (t) {
                (this._volume = t), this._updateVolume();
              },
              mute: function () {
                (this._isMuted = !0), this._updateVolume();
              },
              unmute: function () {
                (this._isMuted = !1), this._updateVolume();
              },
              getVolume: function () {
                return this._volume;
              },
              _updateVolume: function () {
                var t,
                  e = this.audios.length;
                for (t = 0; t < e; t += 1)
                  this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1));
              },
            }),
            function () {
              return new t();
            }
          );
        })(),
        ImagePreloader = (function () {
          var t = (function () {
            var t = createTag('canvas');
            (t.width = 1), (t.height = 1);
            var e = t.getContext('2d');
            return (e.fillStyle = 'rgba(0,0,0,0)'), e.fillRect(0, 0, 1, 1), t;
          })();
          function e() {
            (this.loadedAssets += 1),
              this.loadedAssets === this.totalImages &&
                this.loadedFootagesCount === this.totalFootages &&
                this.imagesLoadedCb &&
                this.imagesLoadedCb(null);
          }
          function r() {
            (this.loadedFootagesCount += 1),
              this.loadedAssets === this.totalImages &&
                this.loadedFootagesCount === this.totalFootages &&
                this.imagesLoadedCb &&
                this.imagesLoadedCb(null);
          }
          function i(t, e, r) {
            var i = '';
            if (t.e) i = t.p;
            else if (e) {
              var s = t.p;
              -1 !== s.indexOf('images/') && (s = s.split('/')[1]), (i = e + s);
            } else (i = r), (i += t.u ? t.u : ''), (i += t.p);
            return i;
          }
          function s(t) {
            var e = 0,
              r = setInterval(
                function () {
                  (t.getBBox().width || e > 500) &&
                    (this._imageLoaded(), clearInterval(r)),
                    (e += 1);
                }.bind(this),
                50
              );
          }
          function a(t) {
            var e = { assetData: t },
              r = i(t, this.assetsPath, this.path);
            return (
              assetLoader.load(
                r,
                function (t) {
                  (e.img = t), this._footageLoaded();
                }.bind(this),
                function () {
                  (e.img = {}), this._footageLoaded();
                }.bind(this)
              ),
              e
            );
          }
          function n() {
            (this._imageLoaded = e.bind(this)),
              (this._footageLoaded = r.bind(this)),
              (this.testImageLoaded = s.bind(this)),
              (this.createFootageData = a.bind(this)),
              (this.assetsPath = ''),
              (this.path = ''),
              (this.totalImages = 0),
              (this.totalFootages = 0),
              (this.loadedAssets = 0),
              (this.loadedFootagesCount = 0),
              (this.imagesLoadedCb = null),
              (this.images = []);
          }
          return (
            (n.prototype = {
              loadAssets: function (t, e) {
                var r;
                this.imagesLoadedCb = e;
                var i = t.length;
                for (r = 0; r < i; r += 1)
                  t[r].layers ||
                    (t[r].t && 'seq' !== t[r].t
                      ? 3 === t[r].t &&
                        ((this.totalFootages += 1),
                        this.images.push(this.createFootageData(t[r])))
                      : ((this.totalImages += 1),
                        this.images.push(this._createImageData(t[r]))));
              },
              setAssetsPath: function (t) {
                this.assetsPath = t || '';
              },
              setPath: function (t) {
                this.path = t || '';
              },
              loadedImages: function () {
                return this.totalImages === this.loadedAssets;
              },
              loadedFootages: function () {
                return this.totalFootages === this.loadedFootagesCount;
              },
              destroy: function () {
                (this.imagesLoadedCb = null), (this.images.length = 0);
              },
              getAsset: function (t) {
                for (var e = 0, r = this.images.length; e < r; ) {
                  if (this.images[e].assetData === t) return this.images[e].img;
                  e += 1;
                }
                return null;
              },
              createImgData: function (e) {
                var r = i(e, this.assetsPath, this.path),
                  s = createTag('img');
                (s.crossOrigin = 'anonymous'),
                  s.addEventListener('load', this._imageLoaded, !1),
                  s.addEventListener(
                    'error',
                    function () {
                      (a.img = t), this._imageLoaded();
                    }.bind(this),
                    !1
                  ),
                  (s.src = r);
                var a = { img: s, assetData: e };
                return a;
              },
              createImageData: function (e) {
                var r = i(e, this.assetsPath, this.path),
                  s = createNS('image');
                isSafari
                  ? this.testImageLoaded(s)
                  : s.addEventListener('load', this._imageLoaded, !1),
                  s.addEventListener(
                    'error',
                    function () {
                      (a.img = t), this._imageLoaded();
                    }.bind(this),
                    !1
                  ),
                  s.setAttributeNS('http://www.w3.org/1999/xlink', 'href', r),
                  this._elementHelper.append
                    ? this._elementHelper.append(s)
                    : this._elementHelper.appendChild(s);
                var a = { img: s, assetData: e };
                return a;
              },
              imageLoaded: e,
              footageLoaded: r,
              setCacheType: function (t, e) {
                'svg' === t
                  ? ((this._elementHelper = e),
                    (this._createImageData = this.createImageData.bind(this)))
                  : (this._createImageData = this.createImgData.bind(this));
              },
            }),
            n
          );
        })(),
        featureSupport = (function () {
          var t = { maskType: !0 };
          return (
            (/MSIE 10/i.test(navigator.userAgent) ||
              /MSIE 9/i.test(navigator.userAgent) ||
              /rv:11.0/i.test(navigator.userAgent) ||
              /Edge\/\d./i.test(navigator.userAgent)) &&
              (t.maskType = !1),
            t
          );
        })(),
        filtersFactory = (function () {
          var t = {
            createFilter: function (t, e) {
              var r = createNS('filter');
              return (
                r.setAttribute('id', t),
                !0 !== e &&
                  (r.setAttribute('filterUnits', 'objectBoundingBox'),
                  r.setAttribute('x', '0%'),
                  r.setAttribute('y', '0%'),
                  r.setAttribute('width', '100%'),
                  r.setAttribute('height', '100%')),
                r
              );
            },
            createAlphaToLuminanceFilter: function () {
              var t = createNS('feColorMatrix');
              return (
                t.setAttribute('type', 'matrix'),
                t.setAttribute('color-interpolation-filters', 'sRGB'),
                t.setAttribute(
                  'values',
                  '0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1'
                ),
                t
              );
            },
          };
          return t;
        })(),
        assetLoader = (function () {
          function t(t) {
            return t.response && 'object' == typeof t.response
              ? t.response
              : t.response && 'string' == typeof t.response
              ? JSON.parse(t.response)
              : t.responseText
              ? JSON.parse(t.responseText)
              : null;
          }
          return {
            load: function (e, r, i) {
              var s,
                a = new XMLHttpRequest();
              try {
                a.responseType = 'json';
              } catch (n) {}
              (a.onreadystatechange = function () {
                if (4 === a.readyState)
                  if (200 === a.status) (s = t(a)), r(s);
                  else
                    try {
                      (s = t(a)), r(s);
                    } catch (n) {
                      i && i(n);
                    }
              }),
                a.open('GET', e, !0),
                a.send();
            },
          };
        })();
      function TextAnimatorProperty(t, e, r) {
        (this._isFirstFrame = !0),
          (this._hasMaskedPath = !1),
          (this._frameId = -1),
          (this._textData = t),
          (this._renderType = e),
          (this._elem = r),
          (this._animatorsData = createSizedArray(this._textData.a.length)),
          (this._pathData = {}),
          (this._moreOptions = { alignment: {} }),
          (this.renderedLetters = []),
          (this.lettersChangedFlag = !1),
          this.initDynamicPropertyContainer(r);
      }
      function TextAnimatorDataProperty(t, e, r) {
        var i = { propType: !1 },
          s = PropertyFactory.getProp,
          a = e.a;
        (this.a = {
          r: a.r ? s(t, a.r, 0, degToRads, r) : i,
          rx: a.rx ? s(t, a.rx, 0, degToRads, r) : i,
          ry: a.ry ? s(t, a.ry, 0, degToRads, r) : i,
          sk: a.sk ? s(t, a.sk, 0, degToRads, r) : i,
          sa: a.sa ? s(t, a.sa, 0, degToRads, r) : i,
          s: a.s ? s(t, a.s, 1, 0.01, r) : i,
          a: a.a ? s(t, a.a, 1, 0, r) : i,
          o: a.o ? s(t, a.o, 0, 0.01, r) : i,
          p: a.p ? s(t, a.p, 1, 0, r) : i,
          sw: a.sw ? s(t, a.sw, 0, 0, r) : i,
          sc: a.sc ? s(t, a.sc, 1, 0, r) : i,
          fc: a.fc ? s(t, a.fc, 1, 0, r) : i,
          fh: a.fh ? s(t, a.fh, 0, 0, r) : i,
          fs: a.fs ? s(t, a.fs, 0, 0.01, r) : i,
          fb: a.fb ? s(t, a.fb, 0, 0.01, r) : i,
          t: a.t ? s(t, a.t, 0, 0, r) : i,
        }),
          (this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r)),
          (this.s.t = e.s.t);
      }
      function LetterProps(t, e, r, i, s, a) {
        (this.o = t),
          (this.sw = e),
          (this.sc = r),
          (this.fc = i),
          (this.m = s),
          (this.p = a),
          (this._mdf = { o: !0, sw: !!e, sc: !!r, fc: !!i, m: !0, p: !0 });
      }
      function TextProperty(t, e) {
        (this._frameId = initialDefaultFrame),
          (this.pv = ''),
          (this.v = ''),
          (this.kf = !1),
          (this._isFirstFrame = !0),
          (this._mdf = !1),
          (this.data = e),
          (this.elem = t),
          (this.comp = this.elem.comp),
          (this.keysIndex = 0),
          (this.canResize = !1),
          (this.minimumFontSize = 1),
          (this.effectsSequence = []),
          (this.currentData = {
            ascent: 0,
            boxWidth: this.defaultBoxWidth,
            f: '',
            fStyle: '',
            fWeight: '',
            fc: '',
            j: '',
            justifyOffset: '',
            l: [],
            lh: 0,
            lineWidths: [],
            ls: '',
            of: '',
            s: '',
            sc: '',
            sw: 0,
            t: 0,
            tr: 0,
            sz: 0,
            ps: null,
            fillColorAnim: !1,
            strokeColorAnim: !1,
            strokeWidthAnim: !1,
            yOffset: 0,
            finalSize: 0,
            finalText: [],
            finalLineHeight: 0,
            __complete: !1,
          }),
          this.copyData(this.currentData, this.data.d.k[0].s),
          this.searchProperty() || this.completeTextData(this.currentData);
      }
      (TextAnimatorProperty.prototype.searchProperties = function () {
        var t,
          e,
          r = this._textData.a.length,
          i = PropertyFactory.getProp;
        for (t = 0; t < r; t += 1)
          (e = this._textData.a[t]),
            (this._animatorsData[t] = new TextAnimatorDataProperty(
              this._elem,
              e,
              this
            ));
        this._textData.p && 'm' in this._textData.p
          ? ((this._pathData = {
              f: i(this._elem, this._textData.p.f, 0, 0, this),
              l: i(this._elem, this._textData.p.l, 0, 0, this),
              r: this._textData.p.r,
              m: this._elem.maskManager.getMaskProperty(this._textData.p.m),
            }),
            (this._hasMaskedPath = !0))
          : (this._hasMaskedPath = !1),
          (this._moreOptions.alignment = i(
            this._elem,
            this._textData.m.a,
            1,
            0,
            this
          ));
      }),
        (TextAnimatorProperty.prototype.getMeasures = function (t, e) {
          if (
            ((this.lettersChangedFlag = e),
            this._mdf ||
              this._isFirstFrame ||
              e ||
              (this._hasMaskedPath && this._pathData.m._mdf))
          ) {
            this._isFirstFrame = !1;
            var r,
              i,
              s,
              a,
              n,
              o,
              l,
              h,
              p,
              u,
              c,
              f,
              m,
              d,
              g,
              y,
              v,
              b,
              D,
              x = this._moreOptions.alignment.v,
              E = this._animatorsData,
              _ = this._textData,
              C = this.mHelper,
              A = this._renderType,
              w = this.renderedLetters.length,
              k = t.l;
            if (this._hasMaskedPath) {
              if (
                ((D = this._pathData.m),
                !this._pathData.n || this._pathData._mdf)
              ) {
                var S,
                  P = D.v;
                for (
                  this._pathData.r && (P = P.reverse()),
                    n = { tLength: 0, segments: [] },
                    a = P._length - 1,
                    y = 0,
                    s = 0;
                  s < a;
                  s += 1
                )
                  (S = bez.buildBezierData(
                    P.v[s],
                    P.v[s + 1],
                    [P.o[s][0] - P.v[s][0], P.o[s][1] - P.v[s][1]],
                    [
                      P.i[s + 1][0] - P.v[s + 1][0],
                      P.i[s + 1][1] - P.v[s + 1][1],
                    ]
                  )),
                    (n.tLength += S.segmentLength),
                    n.segments.push(S),
                    (y += S.segmentLength);
                (s = a),
                  D.v.c &&
                    ((S = bez.buildBezierData(
                      P.v[s],
                      P.v[0],
                      [P.o[s][0] - P.v[s][0], P.o[s][1] - P.v[s][1]],
                      [P.i[0][0] - P.v[0][0], P.i[0][1] - P.v[0][1]]
                    )),
                    (n.tLength += S.segmentLength),
                    n.segments.push(S),
                    (y += S.segmentLength)),
                  (this._pathData.pi = n);
              }
              if (
                ((n = this._pathData.pi),
                (o = this._pathData.f.v),
                (c = 0),
                (u = 1),
                (h = 0),
                (p = !0),
                (d = n.segments),
                o < 0 && D.v.c)
              )
                for (
                  n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength),
                    u = (m = d[(c = d.length - 1)].points).length - 1;
                  o < 0;

                )
                  (o += m[u].partialLength),
                    (u -= 1) < 0 && (u = (m = d[(c -= 1)].points).length - 1);
              (f = (m = d[c].points)[u - 1]), (g = (l = m[u]).partialLength);
            }
            (a = k.length), (r = 0), (i = 0);
            var F,
              T,
              M,
              I,
              B,
              R = 1.2 * t.finalSize * 0.714,
              V = !0;
            M = E.length;
            var z,
              L,
              O,
              N,
              G,
              $,
              j,
              H,
              q,
              W,
              U,
              Y,
              Z = -1,
              X = o,
              K = c,
              J = u,
              Q = -1,
              tt = '',
              et = this.defaultPropsArray;
            if (2 === t.j || 1 === t.j) {
              var rt = 0,
                it = 0,
                st = 2 === t.j ? -0.5 : -1,
                at = 0,
                nt = !0;
              for (s = 0; s < a; s += 1)
                if (k[s].n) {
                  for (rt && (rt += it); at < s; )
                    (k[at].animatorJustifyOffset = rt), (at += 1);
                  (rt = 0), (nt = !0);
                } else {
                  for (T = 0; T < M; T += 1)
                    (F = E[T].a).t.propType &&
                      (nt && 2 === t.j && (it += F.t.v * st),
                      (B = E[T].s.getMult(
                        k[s].anIndexes[T],
                        _.a[T].s.totalChars
                      )).length
                        ? (rt += F.t.v * B[0] * st)
                        : (rt += F.t.v * B * st));
                  nt = !1;
                }
              for (rt && (rt += it); at < s; )
                (k[at].animatorJustifyOffset = rt), (at += 1);
            }
            for (s = 0; s < a; s += 1) {
              if ((C.reset(), (N = 1), k[s].n))
                (r = 0),
                  (i += t.yOffset),
                  (i += V ? 1 : 0),
                  (o = X),
                  (V = !1),
                  this._hasMaskedPath &&
                    ((u = J),
                    (f = (m = d[(c = K)].points)[u - 1]),
                    (g = (l = m[u]).partialLength),
                    (h = 0)),
                  (tt = ''),
                  (U = ''),
                  (q = ''),
                  (Y = ''),
                  (et = this.defaultPropsArray);
              else {
                if (this._hasMaskedPath) {
                  if (Q !== k[s].line) {
                    switch (t.j) {
                      case 1:
                        o += y - t.lineWidths[k[s].line];
                        break;
                      case 2:
                        o += (y - t.lineWidths[k[s].line]) / 2;
                    }
                    Q = k[s].line;
                  }
                  Z !== k[s].ind &&
                    (k[Z] && (o += k[Z].extra),
                    (o += k[s].an / 2),
                    (Z = k[s].ind)),
                    (o += x[0] * k[s].an * 0.005);
                  var ot = 0;
                  for (T = 0; T < M; T += 1)
                    (F = E[T].a).p.propType &&
                      ((B = E[T].s.getMult(
                        k[s].anIndexes[T],
                        _.a[T].s.totalChars
                      )).length
                        ? (ot += F.p.v[0] * B[0])
                        : (ot += F.p.v[0] * B)),
                      F.a.propType &&
                        ((B = E[T].s.getMult(
                          k[s].anIndexes[T],
                          _.a[T].s.totalChars
                        )).length
                          ? (ot += F.a.v[0] * B[0])
                          : (ot += F.a.v[0] * B));
                  for (p = !0; p; )
                    h + g >= o + ot || !m
                      ? ((v = (o + ot - h) / l.partialLength),
                        (L = f.point[0] + (l.point[0] - f.point[0]) * v),
                        (O = f.point[1] + (l.point[1] - f.point[1]) * v),
                        C.translate(-x[0] * k[s].an * 0.005, -x[1] * R * 0.01),
                        (p = !1))
                      : m &&
                        ((h += l.partialLength),
                        (u += 1) >= m.length &&
                          ((u = 0),
                          d[(c += 1)]
                            ? (m = d[c].points)
                            : D.v.c
                            ? ((u = 0), (m = d[(c = 0)].points))
                            : ((h -= l.partialLength), (m = null))),
                        m && ((f = l), (g = (l = m[u]).partialLength)));
                  (z = k[s].an / 2 - k[s].add), C.translate(-z, 0, 0);
                } else
                  (z = k[s].an / 2 - k[s].add),
                    C.translate(-z, 0, 0),
                    C.translate(-x[0] * k[s].an * 0.005, -x[1] * R * 0.01, 0);
                for (T = 0; T < M; T += 1)
                  (F = E[T].a).t.propType &&
                    ((B = E[T].s.getMult(
                      k[s].anIndexes[T],
                      _.a[T].s.totalChars
                    )),
                    (0 === r && 0 === t.j) ||
                      (this._hasMaskedPath
                        ? B.length
                          ? (o += F.t.v * B[0])
                          : (o += F.t.v * B)
                        : B.length
                        ? (r += F.t.v * B[0])
                        : (r += F.t.v * B)));
                for (
                  t.strokeWidthAnim && ($ = t.sw || 0),
                    t.strokeColorAnim &&
                      (G = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]),
                    t.fillColorAnim &&
                      t.fc &&
                      (j = [t.fc[0], t.fc[1], t.fc[2]]),
                    T = 0;
                  T < M;
                  T += 1
                )
                  (F = E[T].a).a.propType &&
                    ((B = E[T].s.getMult(
                      k[s].anIndexes[T],
                      _.a[T].s.totalChars
                    )).length
                      ? C.translate(
                          -F.a.v[0] * B[0],
                          -F.a.v[1] * B[1],
                          F.a.v[2] * B[2]
                        )
                      : C.translate(
                          -F.a.v[0] * B,
                          -F.a.v[1] * B,
                          F.a.v[2] * B
                        ));
                for (T = 0; T < M; T += 1)
                  (F = E[T].a).s.propType &&
                    ((B = E[T].s.getMult(
                      k[s].anIndexes[T],
                      _.a[T].s.totalChars
                    )).length
                      ? C.scale(
                          1 + (F.s.v[0] - 1) * B[0],
                          1 + (F.s.v[1] - 1) * B[1],
                          1
                        )
                      : C.scale(
                          1 + (F.s.v[0] - 1) * B,
                          1 + (F.s.v[1] - 1) * B,
                          1
                        ));
                for (T = 0; T < M; T += 1) {
                  if (
                    ((F = E[T].a),
                    (B = E[T].s.getMult(
                      k[s].anIndexes[T],
                      _.a[T].s.totalChars
                    )),
                    F.sk.propType &&
                      (B.length
                        ? C.skewFromAxis(-F.sk.v * B[0], F.sa.v * B[1])
                        : C.skewFromAxis(-F.sk.v * B, F.sa.v * B)),
                    F.r.propType &&
                      (B.length
                        ? C.rotateZ(-F.r.v * B[2])
                        : C.rotateZ(-F.r.v * B)),
                    F.ry.propType &&
                      (B.length
                        ? C.rotateY(F.ry.v * B[1])
                        : C.rotateY(F.ry.v * B)),
                    F.rx.propType &&
                      (B.length
                        ? C.rotateX(F.rx.v * B[0])
                        : C.rotateX(F.rx.v * B)),
                    F.o.propType &&
                      (B.length
                        ? (N += (F.o.v * B[0] - N) * B[0])
                        : (N += (F.o.v * B - N) * B)),
                    t.strokeWidthAnim &&
                      F.sw.propType &&
                      (B.length ? ($ += F.sw.v * B[0]) : ($ += F.sw.v * B)),
                    t.strokeColorAnim && F.sc.propType)
                  )
                    for (H = 0; H < 3; H += 1)
                      B.length
                        ? (G[H] += (F.sc.v[H] - G[H]) * B[0])
                        : (G[H] += (F.sc.v[H] - G[H]) * B);
                  if (t.fillColorAnim && t.fc) {
                    if (F.fc.propType)
                      for (H = 0; H < 3; H += 1)
                        B.length
                          ? (j[H] += (F.fc.v[H] - j[H]) * B[0])
                          : (j[H] += (F.fc.v[H] - j[H]) * B);
                    F.fh.propType &&
                      (j = B.length
                        ? addHueToRGB(j, F.fh.v * B[0])
                        : addHueToRGB(j, F.fh.v * B)),
                      F.fs.propType &&
                        (j = B.length
                          ? addSaturationToRGB(j, F.fs.v * B[0])
                          : addSaturationToRGB(j, F.fs.v * B)),
                      F.fb.propType &&
                        (j = B.length
                          ? addBrightnessToRGB(j, F.fb.v * B[0])
                          : addBrightnessToRGB(j, F.fb.v * B));
                  }
                }
                for (T = 0; T < M; T += 1)
                  (F = E[T].a).p.propType &&
                    ((B = E[T].s.getMult(
                      k[s].anIndexes[T],
                      _.a[T].s.totalChars
                    )),
                    this._hasMaskedPath
                      ? B.length
                        ? C.translate(0, F.p.v[1] * B[0], -F.p.v[2] * B[1])
                        : C.translate(0, F.p.v[1] * B, -F.p.v[2] * B)
                      : B.length
                      ? C.translate(
                          F.p.v[0] * B[0],
                          F.p.v[1] * B[1],
                          -F.p.v[2] * B[2]
                        )
                      : C.translate(F.p.v[0] * B, F.p.v[1] * B, -F.p.v[2] * B));
                if (
                  (t.strokeWidthAnim && (q = $ < 0 ? 0 : $),
                  t.strokeColorAnim &&
                    (W =
                      'rgb(' +
                      Math.round(255 * G[0]) +
                      ',' +
                      Math.round(255 * G[1]) +
                      ',' +
                      Math.round(255 * G[2]) +
                      ')'),
                  t.fillColorAnim &&
                    t.fc &&
                    (U =
                      'rgb(' +
                      Math.round(255 * j[0]) +
                      ',' +
                      Math.round(255 * j[1]) +
                      ',' +
                      Math.round(255 * j[2]) +
                      ')'),
                  this._hasMaskedPath)
                ) {
                  if (
                    (C.translate(0, -t.ls),
                    C.translate(0, x[1] * R * 0.01 + i, 0),
                    _.p.p)
                  ) {
                    b = (l.point[1] - f.point[1]) / (l.point[0] - f.point[0]);
                    var lt = (180 * Math.atan(b)) / Math.PI;
                    l.point[0] < f.point[0] && (lt += 180),
                      C.rotate((-lt * Math.PI) / 180);
                  }
                  C.translate(L, O, 0),
                    (o -= x[0] * k[s].an * 0.005),
                    k[s + 1] &&
                      Z !== k[s + 1].ind &&
                      ((o += k[s].an / 2), (o += 0.001 * t.tr * t.finalSize));
                } else {
                  switch (
                    (C.translate(r, i, 0),
                    t.ps && C.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                    t.j)
                  ) {
                    case 1:
                      C.translate(
                        k[s].animatorJustifyOffset +
                          t.justifyOffset +
                          (t.boxWidth - t.lineWidths[k[s].line]),
                        0,
                        0
                      );
                      break;
                    case 2:
                      C.translate(
                        k[s].animatorJustifyOffset +
                          t.justifyOffset +
                          (t.boxWidth - t.lineWidths[k[s].line]) / 2,
                        0,
                        0
                      );
                  }
                  C.translate(0, -t.ls),
                    C.translate(z, 0, 0),
                    C.translate(x[0] * k[s].an * 0.005, x[1] * R * 0.01, 0),
                    (r += k[s].l + 0.001 * t.tr * t.finalSize);
                }
                'html' === A
                  ? (tt = C.toCSS())
                  : 'svg' === A
                  ? (tt = C.to2dCSS())
                  : (et = [
                      C.props[0],
                      C.props[1],
                      C.props[2],
                      C.props[3],
                      C.props[4],
                      C.props[5],
                      C.props[6],
                      C.props[7],
                      C.props[8],
                      C.props[9],
                      C.props[10],
                      C.props[11],
                      C.props[12],
                      C.props[13],
                      C.props[14],
                      C.props[15],
                    ]),
                  (Y = N);
              }
              w <= s
                ? ((I = new LetterProps(Y, q, W, U, tt, et)),
                  this.renderedLetters.push(I),
                  (w += 1),
                  (this.lettersChangedFlag = !0))
                : ((I = this.renderedLetters[s]),
                  (this.lettersChangedFlag =
                    I.update(Y, q, W, U, tt, et) || this.lettersChangedFlag));
            }
          }
        }),
        (TextAnimatorProperty.prototype.getValue = function () {
          this._elem.globalData.frameId !== this._frameId &&
            ((this._frameId = this._elem.globalData.frameId),
            this.iterateDynamicProperties());
        }),
        (TextAnimatorProperty.prototype.mHelper = new Matrix()),
        (TextAnimatorProperty.prototype.defaultPropsArray = []),
        extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
        (LetterProps.prototype.update = function (t, e, r, i, s, a) {
          (this._mdf.o = !1),
            (this._mdf.sw = !1),
            (this._mdf.sc = !1),
            (this._mdf.fc = !1),
            (this._mdf.m = !1),
            (this._mdf.p = !1);
          var n = !1;
          return (
            this.o !== t && ((this.o = t), (this._mdf.o = !0), (n = !0)),
            this.sw !== e && ((this.sw = e), (this._mdf.sw = !0), (n = !0)),
            this.sc !== r && ((this.sc = r), (this._mdf.sc = !0), (n = !0)),
            this.fc !== i && ((this.fc = i), (this._mdf.fc = !0), (n = !0)),
            this.m !== s && ((this.m = s), (this._mdf.m = !0), (n = !0)),
            !a.length ||
              (this.p[0] === a[0] &&
                this.p[1] === a[1] &&
                this.p[4] === a[4] &&
                this.p[5] === a[5] &&
                this.p[12] === a[12] &&
                this.p[13] === a[13]) ||
              ((this.p = a), (this._mdf.p = !0), (n = !0)),
            n
          );
        }),
        (TextProperty.prototype.defaultBoxWidth = [0, 0]),
        (TextProperty.prototype.copyData = function (t, e) {
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return t;
        }),
        (TextProperty.prototype.setCurrentData = function (t) {
          t.__complete || this.completeTextData(t),
            (this.currentData = t),
            (this.currentData.boxWidth =
              this.currentData.boxWidth || this.defaultBoxWidth),
            (this._mdf = !0);
        }),
        (TextProperty.prototype.searchProperty = function () {
          return this.searchKeyframes();
        }),
        (TextProperty.prototype.searchKeyframes = function () {
          return (
            (this.kf = this.data.d.k.length > 1),
            this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
            this.kf
          );
        }),
        (TextProperty.prototype.addEffect = function (t) {
          this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
        }),
        (TextProperty.prototype.getValue = function (t) {
          if (
            (this.elem.globalData.frameId !== this.frameId &&
              this.effectsSequence.length) ||
            t
          ) {
            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
            var e = this.currentData,
              r = this.keysIndex;
            if (this.lock) this.setCurrentData(this.currentData);
            else {
              var i;
              (this.lock = !0), (this._mdf = !1);
              var s = this.effectsSequence.length,
                a = t || this.data.d.k[this.keysIndex].s;
              for (i = 0; i < s; i += 1)
                a =
                  r !== this.keysIndex
                    ? this.effectsSequence[i](a, a.t)
                    : this.effectsSequence[i](this.currentData, a.t);
              e !== a && this.setCurrentData(a),
                (this.v = this.currentData),
                (this.pv = this.v),
                (this.lock = !1),
                (this.frameId = this.elem.globalData.frameId);
            }
          }
        }),
        (TextProperty.prototype.getKeyframeValue = function () {
          for (
            var t = this.data.d.k,
              e = this.elem.comp.renderedFrame,
              r = 0,
              i = t.length;
            r <= i - 1 && !(r === i - 1 || t[r + 1].t > e);

          )
            r += 1;
          return (
            this.keysIndex !== r && (this.keysIndex = r),
            this.data.d.k[this.keysIndex].s
          );
        }),
        (TextProperty.prototype.buildFinalText = function (t) {
          for (var e, r, i = [], s = 0, a = t.length, n = !1; s < a; )
            (e = t.charCodeAt(s)),
              FontManager.isCombinedCharacter(e)
                ? (i[i.length - 1] += t.charAt(s))
                : e >= 55296 && e <= 56319
                ? (r = t.charCodeAt(s + 1)) >= 56320 && r <= 57343
                  ? (n || FontManager.isModifier(e, r)
                      ? ((i[i.length - 1] += t.substr(s, 2)), (n = !1))
                      : i.push(t.substr(s, 2)),
                    (s += 1))
                  : i.push(t.charAt(s))
                : e > 56319
                ? ((r = t.charCodeAt(s + 1)),
                  FontManager.isZeroWidthJoiner(e, r)
                    ? ((n = !0), (i[i.length - 1] += t.substr(s, 2)), (s += 1))
                    : i.push(t.charAt(s)))
                : FontManager.isZeroWidthJoiner(e)
                ? ((i[i.length - 1] += t.charAt(s)), (n = !0))
                : i.push(t.charAt(s)),
              (s += 1);
          return i;
        }),
        (TextProperty.prototype.completeTextData = function (t) {
          t.__complete = !0;
          var e,
            r,
            i,
            s,
            a,
            n,
            o,
            l = this.elem.globalData.fontManager,
            h = this.data,
            p = [],
            u = 0,
            c = h.m.g,
            f = 0,
            m = 0,
            d = 0,
            g = [],
            y = 0,
            v = 0,
            b = l.getFontByName(t.f),
            D = 0,
            x = getFontProperties(b);
          (t.fWeight = x.weight),
            (t.fStyle = x.style),
            (t.finalSize = t.s),
            (t.finalText = this.buildFinalText(t.t)),
            (r = t.finalText.length),
            (t.finalLineHeight = t.lh);
          var E,
            _ = (t.tr / 1e3) * t.finalSize;
          if (t.sz)
            for (var C, A, w = !0, k = t.sz[0], S = t.sz[1]; w; ) {
              (C = 0),
                (y = 0),
                (r = (A = this.buildFinalText(t.t)).length),
                (_ = (t.tr / 1e3) * t.finalSize);
              var P = -1;
              for (e = 0; e < r; e += 1)
                (E = A[e].charCodeAt(0)),
                  (i = !1),
                  ' ' === A[e]
                    ? (P = e)
                    : (13 !== E && 3 !== E) ||
                      ((y = 0),
                      (i = !0),
                      (C += t.finalLineHeight || 1.2 * t.finalSize)),
                  l.chars
                    ? ((o = l.getCharData(A[e], b.fStyle, b.fFamily)),
                      (D = i ? 0 : (o.w * t.finalSize) / 100))
                    : (D = l.measureText(A[e], t.f, t.finalSize)),
                  y + D > k && ' ' !== A[e]
                    ? (-1 === P ? (r += 1) : (e = P),
                      (C += t.finalLineHeight || 1.2 * t.finalSize),
                      A.splice(e, P === e ? 1 : 0, '\r'),
                      (P = -1),
                      (y = 0))
                    : ((y += D), (y += _));
              (C += (b.ascent * t.finalSize) / 100),
                this.canResize && t.finalSize > this.minimumFontSize && S < C
                  ? ((t.finalSize -= 1),
                    (t.finalLineHeight = (t.finalSize * t.lh) / t.s))
                  : ((t.finalText = A), (r = t.finalText.length), (w = !1));
            }
          (y = -_), (D = 0);
          var F,
            T = 0;
          for (e = 0; e < r; e += 1)
            if (
              ((i = !1),
              13 === (E = (F = t.finalText[e]).charCodeAt(0)) || 3 === E
                ? ((T = 0),
                  g.push(y),
                  (v = y > v ? y : v),
                  (y = -2 * _),
                  (s = ''),
                  (i = !0),
                  (d += 1))
                : (s = F),
              l.chars
                ? ((o = l.getCharData(
                    F,
                    b.fStyle,
                    l.getFontByName(t.f).fFamily
                  )),
                  (D = i ? 0 : (o.w * t.finalSize) / 100))
                : (D = l.measureText(s, t.f, t.finalSize)),
              ' ' === F ? (T += D + _) : ((y += D + _ + T), (T = 0)),
              p.push({
                l: D,
                an: D,
                add: f,
                n: i,
                anIndexes: [],
                val: s,
                line: d,
                animatorJustifyOffset: 0,
              }),
              2 == c)
            ) {
              if (((f += D), '' === s || ' ' === s || e === r - 1)) {
                for (('' !== s && ' ' !== s) || (f -= D); m <= e; )
                  (p[m].an = f), (p[m].ind = u), (p[m].extra = D), (m += 1);
                (u += 1), (f = 0);
              }
            } else if (3 == c) {
              if (((f += D), '' === s || e === r - 1)) {
                for ('' === s && (f -= D); m <= e; )
                  (p[m].an = f), (p[m].ind = u), (p[m].extra = D), (m += 1);
                (f = 0), (u += 1);
              }
            } else (p[u].ind = u), (p[u].extra = 0), (u += 1);
          if (((t.l = p), (v = y > v ? y : v), g.push(y), t.sz))
            (t.boxWidth = t.sz[0]), (t.justifyOffset = 0);
          else
            switch (((t.boxWidth = v), t.j)) {
              case 1:
                t.justifyOffset = -t.boxWidth;
                break;
              case 2:
                t.justifyOffset = -t.boxWidth / 2;
                break;
              default:
                t.justifyOffset = 0;
            }
          t.lineWidths = g;
          var M,
            I,
            B,
            R,
            V = h.a;
          n = V.length;
          var z = [];
          for (a = 0; a < n; a += 1) {
            for (
              (M = V[a]).a.sc && (t.strokeColorAnim = !0),
                M.a.sw && (t.strokeWidthAnim = !0),
                (M.a.fc || M.a.fh || M.a.fs || M.a.fb) &&
                  (t.fillColorAnim = !0),
                R = 0,
                B = M.s.b,
                e = 0;
              e < r;
              e += 1
            )
              ((I = p[e]).anIndexes[a] = R),
                ((1 == B && '' !== I.val) ||
                  (2 == B && '' !== I.val && ' ' !== I.val) ||
                  (3 == B && (I.n || ' ' == I.val || e == r - 1)) ||
                  (4 == B && (I.n || e == r - 1))) &&
                  (1 === M.s.rn && z.push(R), (R += 1));
            h.a[a].s.totalChars = R;
            var L,
              O = -1;
            if (1 === M.s.rn)
              for (e = 0; e < r; e += 1)
                O != (I = p[e]).anIndexes[a] &&
                  ((O = I.anIndexes[a]),
                  (L = z.splice(Math.floor(Math.random() * z.length), 1)[0])),
                  (I.anIndexes[a] = L);
          }
          (t.yOffset = t.finalLineHeight || 1.2 * t.finalSize),
            (t.ls = t.ls || 0),
            (t.ascent = (b.ascent * t.finalSize) / 100);
        }),
        (TextProperty.prototype.updateDocumentData = function (t, e) {
          e = void 0 === e ? this.keysIndex : e;
          var r = this.copyData({}, this.data.d.k[e].s);
          (r = this.copyData(r, t)),
            (this.data.d.k[e].s = r),
            this.recalculate(e),
            this.elem.addDynamicProperty(this);
        }),
        (TextProperty.prototype.recalculate = function (t) {
          var e = this.data.d.k[t].s;
          (e.__complete = !1),
            (this.keysIndex = 0),
            (this._isFirstFrame = !0),
            this.getValue(e);
        }),
        (TextProperty.prototype.canResizeFont = function (t) {
          (this.canResize = t),
            this.recalculate(this.keysIndex),
            this.elem.addDynamicProperty(this);
        }),
        (TextProperty.prototype.setMinimumFontSize = function (t) {
          (this.minimumFontSize = Math.floor(t) || 1),
            this.recalculate(this.keysIndex),
            this.elem.addDynamicProperty(this);
        });
      var TextSelectorProp = (function () {
          var t = Math.max,
            e = Math.min,
            r = Math.floor;
          function i(t, e) {
            (this._currentTextLength = -1),
              (this.k = !1),
              (this.data = e),
              (this.elem = t),
              (this.comp = t.comp),
              (this.finalS = 0),
              (this.finalE = 0),
              this.initDynamicPropertyContainer(t),
              (this.s = PropertyFactory.getProp(
                t,
                e.s || { k: 0 },
                0,
                0,
                this
              )),
              (this.e =
                'e' in e
                  ? PropertyFactory.getProp(t, e.e, 0, 0, this)
                  : { v: 100 }),
              (this.o = PropertyFactory.getProp(
                t,
                e.o || { k: 0 },
                0,
                0,
                this
              )),
              (this.xe = PropertyFactory.getProp(
                t,
                e.xe || { k: 0 },
                0,
                0,
                this
              )),
              (this.ne = PropertyFactory.getProp(
                t,
                e.ne || { k: 0 },
                0,
                0,
                this
              )),
              (this.a = PropertyFactory.getProp(t, e.a, 0, 0.01, this)),
              this.dynamicProperties.length || this.getValue();
          }
          return (
            (i.prototype = {
              getMult: function (i) {
                this._currentTextLength !==
                  this.elem.textProperty.currentData.l.length &&
                  this.getValue();
                var s = 0,
                  a = 0,
                  n = 1,
                  o = 1;
                this.ne.v > 0 ? (s = this.ne.v / 100) : (a = -this.ne.v / 100),
                  this.xe.v > 0
                    ? (n = 1 - this.xe.v / 100)
                    : (o = 1 + this.xe.v / 100);
                var l = BezierFactory.getBezierEasing(s, a, n, o).get,
                  h = 0,
                  p = this.finalS,
                  u = this.finalE,
                  c = this.data.sh;
                if (2 === c)
                  h = l(
                    (h =
                      u === p
                        ? i >= u
                          ? 1
                          : 0
                        : t(0, e(0.5 / (u - p) + (i - p) / (u - p), 1)))
                  );
                else if (3 === c)
                  h = l(
                    (h =
                      u === p
                        ? i >= u
                          ? 0
                          : 1
                        : 1 - t(0, e(0.5 / (u - p) + (i - p) / (u - p), 1)))
                  );
                else if (4 === c)
                  u === p
                    ? (h = 0)
                    : (h = t(0, e(0.5 / (u - p) + (i - p) / (u - p), 1))) < 0.5
                    ? (h *= 2)
                    : (h = 1 - 2 * (h - 0.5)),
                    (h = l(h));
                else if (5 === c) {
                  if (u === p) h = 0;
                  else {
                    var f = u - p,
                      m = -f / 2 + (i = e(t(0, i + 0.5 - p), u - p)),
                      d = f / 2;
                    h = Math.sqrt(1 - (m * m) / (d * d));
                  }
                  h = l(h);
                } else
                  6 === c
                    ? (u === p
                        ? (h = 0)
                        : ((i = e(t(0, i + 0.5 - p), u - p)),
                          (h =
                            (1 +
                              Math.cos(Math.PI + (2 * Math.PI * i) / (u - p))) /
                            2)),
                      (h = l(h)))
                    : (i >= r(p) &&
                        (h = t(0, e(i - p < 0 ? e(u, 1) - (p - i) : u - i, 1))),
                      (h = l(h)));
                return h * this.a.v;
              },
              getValue: function (t) {
                this.iterateDynamicProperties(),
                  (this._mdf = t || this._mdf),
                  (this._currentTextLength =
                    this.elem.textProperty.currentData.l.length || 0),
                  t &&
                    2 === this.data.r &&
                    (this.e.v = this._currentTextLength);
                var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                  r = this.o.v / e,
                  i = this.s.v / e + r,
                  s = this.e.v / e + r;
                if (i > s) {
                  var a = i;
                  (i = s), (s = a);
                }
                (this.finalS = i), (this.finalE = s);
              },
            }),
            extendPrototype([DynamicPropertyContainer], i),
            {
              getTextSelectorProp: function (t, e, r) {
                return new i(t, e, r);
              },
            }
          );
        })(),
        poolFactory = function (t, e, r) {
          var i = 0,
            s = t,
            a = createSizedArray(s);
          return {
            newElement: function () {
              return i ? a[(i -= 1)] : e();
            },
            release: function (t) {
              i === s && ((a = pooling.double(a)), (s *= 2)),
                r && r(t),
                (a[i] = t),
                (i += 1);
            },
          };
        },
        pooling = {
          double: function (t) {
            return t.concat(createSizedArray(t.length));
          },
        },
        pointPool = poolFactory(8, function () {
          return createTypedArray('float32', 2);
        }),
        shapePool =
          ((factory = poolFactory(
            4,
            function () {
              return new ShapePath();
            },
            function (t) {
              var e,
                r = t._length;
              for (e = 0; e < r; e += 1)
                pointPool.release(t.v[e]),
                  pointPool.release(t.i[e]),
                  pointPool.release(t.o[e]),
                  (t.v[e] = null),
                  (t.i[e] = null),
                  (t.o[e] = null);
              (t._length = 0), (t.c = !1);
            }
          )),
          (factory.clone = function (t) {
            var e,
              r = factory.newElement(),
              i = void 0 === t._length ? t.v.length : t._length;
            for (r.setLength(i), r.c = t.c, e = 0; e < i; e += 1)
              r.setTripleAt(
                t.v[e][0],
                t.v[e][1],
                t.o[e][0],
                t.o[e][1],
                t.i[e][0],
                t.i[e][1],
                e
              );
            return r;
          }),
          factory),
        factory,
        shapeCollectionPool = (function () {
          var t = {
              newShapeCollection: function () {
                return e ? i[(e -= 1)] : new ShapeCollection();
              },
              release: function (t) {
                var s,
                  a = t._length;
                for (s = 0; s < a; s += 1) shapePool.release(t.shapes[s]);
                (t._length = 0),
                  e === r && ((i = pooling.double(i)), (r *= 2)),
                  (i[e] = t),
                  (e += 1);
              },
            },
            e = 0,
            r = 4,
            i = createSizedArray(r);
          return t;
        })(),
        segmentsLengthPool = poolFactory(
          8,
          function () {
            return { lengths: [], totalLength: 0 };
          },
          function (t) {
            var e,
              r = t.lengths.length;
            for (e = 0; e < r; e += 1) bezierLengthPool.release(t.lengths[e]);
            t.lengths.length = 0;
          }
        ),
        bezierLengthPool = poolFactory(8, function () {
          return {
            addedLength: 0,
            percents: createTypedArray('float32', defaultCurveSegments),
            lengths: createTypedArray('float32', defaultCurveSegments),
          };
        }),
        markerParser = (function () {
          function t(t) {
            for (
              var e, r = t.split('\r\n'), i = {}, s = 0, a = 0;
              a < r.length;
              a += 1
            )
              2 === (e = r[a].split(':')).length &&
                ((i[e[0]] = e[1].trim()), (s += 1));
            if (0 === s) throw new Error();
            return i;
          }
          return function (e) {
            for (var r = [], i = 0; i < e.length; i += 1) {
              var s = e[i],
                a = { time: s.tm, duration: s.dr };
              try {
                a.payload = JSON.parse(e[i].cm);
              } catch (n) {
                try {
                  a.payload = t(e[i].cm);
                } catch (o) {
                  a.payload = { name: e[i] };
                }
              }
              r.push(a);
            }
            return r;
          };
        })();
      function BaseRenderer() {}
      function SVGRenderer(t, e) {
        (this.animationItem = t),
          (this.layers = null),
          (this.renderedFrame = -1),
          (this.svgElement = createNS('svg'));
        var r = '';
        if (e && e.title) {
          var i = createNS('title'),
            s = createElementID();
          i.setAttribute('id', s),
            (i.textContent = e.title),
            this.svgElement.appendChild(i),
            (r += s);
        }
        if (e && e.description) {
          var a = createNS('desc'),
            n = createElementID();
          a.setAttribute('id', n),
            (a.textContent = e.description),
            this.svgElement.appendChild(a),
            (r += ' ' + n);
        }
        r && this.svgElement.setAttribute('aria-labelledby', r);
        var o = createNS('defs');
        this.svgElement.appendChild(o);
        var l = createNS('g');
        this.svgElement.appendChild(l),
          (this.layerElement = l),
          (this.renderConfig = {
            preserveAspectRatio:
              (e && e.preserveAspectRatio) || 'xMidYMid meet',
            imagePreserveAspectRatio:
              (e && e.imagePreserveAspectRatio) || 'xMidYMid slice',
            progressiveLoad: (e && e.progressiveLoad) || !1,
            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
            viewBoxOnly: (e && e.viewBoxOnly) || !1,
            viewBoxSize: (e && e.viewBoxSize) || !1,
            className: (e && e.className) || '',
            id: (e && e.id) || '',
            focusable: e && e.focusable,
            filterSize: {
              width: (e && e.filterSize && e.filterSize.width) || '100%',
              height: (e && e.filterSize && e.filterSize.height) || '100%',
              x: (e && e.filterSize && e.filterSize.x) || '0%',
              y: (e && e.filterSize && e.filterSize.y) || '0%',
            },
          }),
          (this.globalData = {
            _mdf: !1,
            frameNum: -1,
            defs: o,
            renderConfig: this.renderConfig,
          }),
          (this.elements = []),
          (this.pendingElements = []),
          (this.destroyed = !1),
          (this.rendererType = 'svg');
      }
      function CanvasRenderer(t, e) {
        (this.animationItem = t),
          (this.renderConfig = {
            clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
            context: (e && e.context) || null,
            progressiveLoad: (e && e.progressiveLoad) || !1,
            preserveAspectRatio:
              (e && e.preserveAspectRatio) || 'xMidYMid meet',
            imagePreserveAspectRatio:
              (e && e.imagePreserveAspectRatio) || 'xMidYMid slice',
            className: (e && e.className) || '',
            id: (e && e.id) || '',
          }),
          (this.renderConfig.dpr = (e && e.dpr) || 1),
          this.animationItem.wrapper &&
            (this.renderConfig.dpr =
              (e && e.dpr) || window.devicePixelRatio || 1),
          (this.renderedFrame = -1),
          (this.globalData = {
            frameNum: -1,
            _mdf: !1,
            renderConfig: this.renderConfig,
            currentGlobalAlpha: -1,
          }),
          (this.contextData = new CVContextData()),
          (this.elements = []),
          (this.pendingElements = []),
          (this.transformMat = new Matrix()),
          (this.completeLayers = !1),
          (this.rendererType = 'canvas');
      }
      function HybridRenderer(t, e) {
        (this.animationItem = t),
          (this.layers = null),
          (this.renderedFrame = -1),
          (this.renderConfig = {
            className: (e && e.className) || '',
            imagePreserveAspectRatio:
              (e && e.imagePreserveAspectRatio) || 'xMidYMid slice',
            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
            filterSize: {
              width: (e && e.filterSize && e.filterSize.width) || '400%',
              height: (e && e.filterSize && e.filterSize.height) || '400%',
              x: (e && e.filterSize && e.filterSize.x) || '-100%',
              y: (e && e.filterSize && e.filterSize.y) || '-100%',
            },
          }),
          (this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig,
          }),
          (this.pendingElements = []),
          (this.elements = []),
          (this.threeDElements = []),
          (this.destroyed = !1),
          (this.camera = null),
          (this.supports3d = !0),
          (this.rendererType = 'html');
      }
      function MaskElement(t, e, r) {
        (this.data = t),
          (this.element = e),
          (this.globalData = r),
          (this.storedData = []),
          (this.masksProperties = this.data.masksProperties || []),
          (this.maskElement = null);
        var i,
          s,
          a = this.globalData.defs,
          n = this.masksProperties ? this.masksProperties.length : 0;
        (this.viewData = createSizedArray(n)), (this.solidPath = '');
        var o,
          l,
          h,
          p,
          u,
          c,
          f = this.masksProperties,
          m = 0,
          d = [],
          g = createElementID(),
          y = 'clipPath',
          v = 'clip-path';
        for (i = 0; i < n; i += 1)
          if (
            ((('a' !== f[i].mode && 'n' !== f[i].mode) ||
              f[i].inv ||
              100 !== f[i].o.k ||
              f[i].o.x) &&
              ((y = 'mask'), (v = 'mask')),
            ('s' !== f[i].mode && 'i' !== f[i].mode) || 0 !== m
              ? (h = null)
              : ((h = createNS('rect')).setAttribute('fill', '#ffffff'),
                h.setAttribute('width', this.element.comp.data.w || 0),
                h.setAttribute('height', this.element.comp.data.h || 0),
                d.push(h)),
            (s = createNS('path')),
            'n' === f[i].mode)
          )
            (this.viewData[i] = {
              op: PropertyFactory.getProp(
                this.element,
                f[i].o,
                0,
                0.01,
                this.element
              ),
              prop: ShapePropertyFactory.getShapeProp(this.element, f[i], 3),
              elem: s,
              lastPath: '',
            }),
              a.appendChild(s);
          else {
            var b;
            if (
              ((m += 1),
              s.setAttribute('fill', 's' === f[i].mode ? '#000000' : '#ffffff'),
              s.setAttribute('clip-rule', 'nonzero'),
              0 !== f[i].x.k
                ? ((y = 'mask'),
                  (v = 'mask'),
                  (c = PropertyFactory.getProp(
                    this.element,
                    f[i].x,
                    0,
                    null,
                    this.element
                  )),
                  (b = createElementID()),
                  (p = createNS('filter')).setAttribute('id', b),
                  (u = createNS('feMorphology')).setAttribute(
                    'operator',
                    'erode'
                  ),
                  u.setAttribute('in', 'SourceGraphic'),
                  u.setAttribute('radius', '0'),
                  p.appendChild(u),
                  a.appendChild(p),
                  s.setAttribute(
                    'stroke',
                    's' === f[i].mode ? '#000000' : '#ffffff'
                  ))
                : ((u = null), (c = null)),
              (this.storedData[i] = {
                elem: s,
                x: c,
                expan: u,
                lastPath: '',
                lastOperator: '',
                filterId: b,
                lastRadius: 0,
              }),
              'i' === f[i].mode)
            ) {
              l = d.length;
              var D = createNS('g');
              for (o = 0; o < l; o += 1) D.appendChild(d[o]);
              var x = createNS('mask');
              x.setAttribute('mask-type', 'alpha'),
                x.setAttribute('id', g + '_' + m),
                x.appendChild(s),
                a.appendChild(x),
                D.setAttribute(
                  'mask',
                  'url(' + locationHref + '#' + g + '_' + m + ')'
                ),
                (d.length = 0),
                d.push(D);
            } else d.push(s);
            f[i].inv &&
              !this.solidPath &&
              (this.solidPath = this.createLayerSolidPath()),
              (this.viewData[i] = {
                elem: s,
                lastPath: '',
                op: PropertyFactory.getProp(
                  this.element,
                  f[i].o,
                  0,
                  0.01,
                  this.element
                ),
                prop: ShapePropertyFactory.getShapeProp(this.element, f[i], 3),
                invRect: h,
              }),
              this.viewData[i].prop.k ||
                this.drawPath(f[i], this.viewData[i].prop.v, this.viewData[i]);
          }
        for (this.maskElement = createNS(y), n = d.length, i = 0; i < n; i += 1)
          this.maskElement.appendChild(d[i]);
        m > 0 &&
          (this.maskElement.setAttribute('id', g),
          this.element.maskedElement.setAttribute(
            v,
            'url(' + locationHref + '#' + g + ')'
          ),
          a.appendChild(this.maskElement)),
          this.viewData.length && this.element.addRenderableComponent(this);
      }
      function HierarchyElement() {}
      function FrameElement() {}
      function TransformElement() {}
      function RenderableElement() {}
      function RenderableDOMElement() {}
      function ProcessedElement(t, e) {
        (this.elem = t), (this.pos = e);
      }
      function SVGStyleData(t, e) {
        (this.data = t),
          (this.type = t.ty),
          (this.d = ''),
          (this.lvl = e),
          (this._mdf = !1),
          (this.closed = !0 === t.hd),
          (this.pElem = createNS('path')),
          (this.msElem = null);
      }
      function SVGShapeData(t, e, r) {
        (this.caches = []),
          (this.styles = []),
          (this.transformers = t),
          (this.lStr = ''),
          (this.sh = r),
          (this.lvl = e),
          (this._isAnimated = !!r.k);
        for (var i = 0, s = t.length; i < s; ) {
          if (t[i].mProps.dynamicProperties.length) {
            this._isAnimated = !0;
            break;
          }
          i += 1;
        }
      }
      function SVGTransformData(t, e, r) {
        (this.transform = { mProps: t, op: e, container: r }),
          (this.elements = []),
          (this._isAnimated =
            this.transform.mProps.dynamicProperties.length ||
            this.transform.op.effectsSequence.length);
      }
      function SVGStrokeStyleData(t, e, r) {
        this.initDynamicPropertyContainer(t),
          (this.getValue = this.iterateDynamicProperties),
          (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
          (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
          (this.d = new DashProperty(t, e.d || {}, 'svg', this)),
          (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
          (this.style = r),
          (this._isAnimated = !!this._isAnimated);
      }
      function SVGFillStyleData(t, e, r) {
        this.initDynamicPropertyContainer(t),
          (this.getValue = this.iterateDynamicProperties),
          (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
          (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
          (this.style = r);
      }
      function SVGGradientFillStyleData(t, e, r) {
        this.initDynamicPropertyContainer(t),
          (this.getValue = this.iterateDynamicProperties),
          this.initGradientData(t, e, r);
      }
      function SVGGradientStrokeStyleData(t, e, r) {
        this.initDynamicPropertyContainer(t),
          (this.getValue = this.iterateDynamicProperties),
          (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
          (this.d = new DashProperty(t, e.d || {}, 'svg', this)),
          this.initGradientData(t, e, r),
          (this._isAnimated = !!this._isAnimated);
      }
      function ShapeGroupData() {
        (this.it = []), (this.prevViewData = []), (this.gr = createNS('g'));
      }
      (BaseRenderer.prototype.checkLayers = function (t) {
        var e,
          r,
          i = this.layers.length;
        for (this.completeLayers = !0, e = i - 1; e >= 0; e -= 1)
          this.elements[e] ||
            ((r = this.layers[e]).ip - r.st <= t - this.layers[e].st &&
              r.op - r.st > t - this.layers[e].st &&
              this.buildItem(e)),
            (this.completeLayers = !!this.elements[e] && this.completeLayers);
        this.checkPendingElements();
      }),
        (BaseRenderer.prototype.createItem = function (t) {
          switch (t.ty) {
            case 2:
              return this.createImage(t);
            case 0:
              return this.createComp(t);
            case 1:
              return this.createSolid(t);
            case 3:
              return this.createNull(t);
            case 4:
              return this.createShape(t);
            case 5:
              return this.createText(t);
            case 6:
              return this.createAudio(t);
            case 13:
              return this.createCamera(t);
            case 15:
              return this.createFootage(t);
            default:
              return this.createNull(t);
          }
        }),
        (BaseRenderer.prototype.createCamera = function () {
          throw new Error("You're using a 3d camera. Try the html renderer.");
        }),
        (BaseRenderer.prototype.createAudio = function (t) {
          return new AudioElement(t, this.globalData, this);
        }),
        (BaseRenderer.prototype.createFootage = function (t) {
          return new FootageElement(t, this.globalData, this);
        }),
        (BaseRenderer.prototype.buildAllItems = function () {
          var t,
            e = this.layers.length;
          for (t = 0; t < e; t += 1) this.buildItem(t);
          this.checkPendingElements();
        }),
        (BaseRenderer.prototype.includeLayers = function (t) {
          var e;
          this.completeLayers = !1;
          var r,
            i = t.length,
            s = this.layers.length;
          for (e = 0; e < i; e += 1)
            for (r = 0; r < s; ) {
              if (this.layers[r].id === t[e].id) {
                this.layers[r] = t[e];
                break;
              }
              r += 1;
            }
        }),
        (BaseRenderer.prototype.setProjectInterface = function (t) {
          this.globalData.projectInterface = t;
        }),
        (BaseRenderer.prototype.initItems = function () {
          this.globalData.progressiveLoad || this.buildAllItems();
        }),
        (BaseRenderer.prototype.buildElementParenting = function (t, e, r) {
          for (
            var i = this.elements, s = this.layers, a = 0, n = s.length;
            a < n;

          )
            s[a].ind == e &&
              (i[a] && !0 !== i[a]
                ? (r.push(i[a]),
                  i[a].setAsParent(),
                  void 0 !== s[a].parent
                    ? this.buildElementParenting(t, s[a].parent, r)
                    : t.setHierarchy(r))
                : (this.buildItem(a), this.addPendingElement(t))),
              (a += 1);
        }),
        (BaseRenderer.prototype.addPendingElement = function (t) {
          this.pendingElements.push(t);
        }),
        (BaseRenderer.prototype.searchExtraCompositions = function (t) {
          var e,
            r = t.length;
          for (e = 0; e < r; e += 1)
            if (t[e].xt) {
              var i = this.createComp(t[e]);
              i.initExpressions(),
                this.globalData.projectInterface.registerComposition(i);
            }
        }),
        (BaseRenderer.prototype.setupGlobalData = function (t, e) {
          (this.globalData.fontManager = new FontManager()),
            this.globalData.fontManager.addChars(t.chars),
            this.globalData.fontManager.addFonts(t.fonts, e),
            (this.globalData.getAssetData =
              this.animationItem.getAssetData.bind(this.animationItem)),
            (this.globalData.getAssetsPath =
              this.animationItem.getAssetsPath.bind(this.animationItem)),
            (this.globalData.imageLoader = this.animationItem.imagePreloader),
            (this.globalData.audioController =
              this.animationItem.audioController),
            (this.globalData.frameId = 0),
            (this.globalData.frameRate = t.fr),
            (this.globalData.nm = t.nm),
            (this.globalData.compSize = { w: t.w, h: t.h });
        }),
        extendPrototype([BaseRenderer], SVGRenderer),
        (SVGRenderer.prototype.createNull = function (t) {
          return new NullElement(t, this.globalData, this);
        }),
        (SVGRenderer.prototype.createShape = function (t) {
          return new SVGShapeElement(t, this.globalData, this);
        }),
        (SVGRenderer.prototype.createText = function (t) {
          return new SVGTextLottieElement(t, this.globalData, this);
        }),
        (SVGRenderer.prototype.createImage = function (t) {
          return new IImageElement(t, this.globalData, this);
        }),
        (SVGRenderer.prototype.createComp = function (t) {
          return new SVGCompElement(t, this.globalData, this);
        }),
        (SVGRenderer.prototype.createSolid = function (t) {
          return new ISolidElement(t, this.globalData, this);
        }),
        (SVGRenderer.prototype.configAnimation = function (t) {
          this.svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg'),
            this.renderConfig.viewBoxSize
              ? this.svgElement.setAttribute(
                  'viewBox',
                  this.renderConfig.viewBoxSize
                )
              : this.svgElement.setAttribute(
                  'viewBox',
                  '0 0 ' + t.w + ' ' + t.h
                ),
            this.renderConfig.viewBoxOnly ||
              (this.svgElement.setAttribute('width', t.w),
              this.svgElement.setAttribute('height', t.h),
              (this.svgElement.style.width = '100%'),
              (this.svgElement.style.height = '100%'),
              (this.svgElement.style.transform = 'translate3d(0,0,0)')),
            this.renderConfig.className &&
              this.svgElement.setAttribute(
                'class',
                this.renderConfig.className
              ),
            this.renderConfig.id &&
              this.svgElement.setAttribute('id', this.renderConfig.id),
            void 0 !== this.renderConfig.focusable &&
              this.svgElement.setAttribute(
                'focusable',
                this.renderConfig.focusable
              ),
            this.svgElement.setAttribute(
              'preserveAspectRatio',
              this.renderConfig.preserveAspectRatio
            ),
            this.animationItem.wrapper.appendChild(this.svgElement);
          var e = this.globalData.defs;
          this.setupGlobalData(t, e),
            (this.globalData.progressiveLoad =
              this.renderConfig.progressiveLoad),
            (this.data = t);
          var r = createNS('clipPath'),
            i = createNS('rect');
          i.setAttribute('width', t.w),
            i.setAttribute('height', t.h),
            i.setAttribute('x', 0),
            i.setAttribute('y', 0);
          var s = createElementID();
          r.setAttribute('id', s),
            r.appendChild(i),
            this.layerElement.setAttribute(
              'clip-path',
              'url(' + locationHref + '#' + s + ')'
            ),
            e.appendChild(r),
            (this.layers = t.layers),
            (this.elements = createSizedArray(t.layers.length));
        }),
        (SVGRenderer.prototype.destroy = function () {
          var t;
          this.animationItem.wrapper &&
            (this.animationItem.wrapper.innerText = ''),
            (this.layerElement = null),
            (this.globalData.defs = null);
          var e = this.layers ? this.layers.length : 0;
          for (t = 0; t < e; t += 1)
            this.elements[t] && this.elements[t].destroy();
          (this.elements.length = 0),
            (this.destroyed = !0),
            (this.animationItem = null);
        }),
        (SVGRenderer.prototype.updateContainerSize = function () {}),
        (SVGRenderer.prototype.buildItem = function (t) {
          var e = this.elements;
          if (!e[t] && 99 !== this.layers[t].ty) {
            e[t] = !0;
            var r = this.createItem(this.layers[t]);
            (e[t] = r),
              expressionsPlugin &&
                (0 === this.layers[t].ty &&
                  this.globalData.projectInterface.registerComposition(r),
                r.initExpressions()),
              this.appendElementInPos(r, t),
              this.layers[t].tt &&
                (this.elements[t - 1] && !0 !== this.elements[t - 1]
                  ? r.setMatte(e[t - 1].layerId)
                  : (this.buildItem(t - 1), this.addPendingElement(r)));
          }
        }),
        (SVGRenderer.prototype.checkPendingElements = function () {
          for (; this.pendingElements.length; ) {
            var t = this.pendingElements.pop();
            if ((t.checkParenting(), t.data.tt))
              for (var e = 0, r = this.elements.length; e < r; ) {
                if (this.elements[e] === t) {
                  t.setMatte(this.elements[e - 1].layerId);
                  break;
                }
                e += 1;
              }
          }
        }),
        (SVGRenderer.prototype.renderFrame = function (t) {
          if (this.renderedFrame !== t && !this.destroyed) {
            var e;
            null === t ? (t = this.renderedFrame) : (this.renderedFrame = t),
              (this.globalData.frameNum = t),
              (this.globalData.frameId += 1),
              (this.globalData.projectInterface.currentFrame = t),
              (this.globalData._mdf = !1);
            var r = this.layers.length;
            for (
              this.completeLayers || this.checkLayers(t), e = r - 1;
              e >= 0;
              e -= 1
            )
              (this.completeLayers || this.elements[e]) &&
                this.elements[e].prepareFrame(t - this.layers[e].st);
            if (this.globalData._mdf)
              for (e = 0; e < r; e += 1)
                (this.completeLayers || this.elements[e]) &&
                  this.elements[e].renderFrame();
          }
        }),
        (SVGRenderer.prototype.appendElementInPos = function (t, e) {
          var r = t.getBaseElement();
          if (r) {
            for (var i, s = 0; s < e; )
              this.elements[s] &&
                !0 !== this.elements[s] &&
                this.elements[s].getBaseElement() &&
                (i = this.elements[s].getBaseElement()),
                (s += 1);
            i
              ? this.layerElement.insertBefore(r, i)
              : this.layerElement.appendChild(r);
          }
        }),
        (SVGRenderer.prototype.hide = function () {
          this.layerElement.style.display = 'none';
        }),
        (SVGRenderer.prototype.show = function () {
          this.layerElement.style.display = 'block';
        }),
        extendPrototype([BaseRenderer], CanvasRenderer),
        (CanvasRenderer.prototype.createShape = function (t) {
          return new CVShapeElement(t, this.globalData, this);
        }),
        (CanvasRenderer.prototype.createText = function (t) {
          return new CVTextElement(t, this.globalData, this);
        }),
        (CanvasRenderer.prototype.createImage = function (t) {
          return new CVImageElement(t, this.globalData, this);
        }),
        (CanvasRenderer.prototype.createComp = function (t) {
          return new CVCompElement(t, this.globalData, this);
        }),
        (CanvasRenderer.prototype.createSolid = function (t) {
          return new CVSolidElement(t, this.globalData, this);
        }),
        (CanvasRenderer.prototype.createNull =
          SVGRenderer.prototype.createNull),
        (CanvasRenderer.prototype.ctxTransform = function (t) {
          if (
            1 !== t[0] ||
            0 !== t[1] ||
            0 !== t[4] ||
            1 !== t[5] ||
            0 !== t[12] ||
            0 !== t[13]
          )
            if (this.renderConfig.clearCanvas) {
              this.transformMat.cloneFromProps(t);
              var e = this.contextData.cTr.props;
              this.transformMat.transform(
                e[0],
                e[1],
                e[2],
                e[3],
                e[4],
                e[5],
                e[6],
                e[7],
                e[8],
                e[9],
                e[10],
                e[11],
                e[12],
                e[13],
                e[14],
                e[15]
              ),
                this.contextData.cTr.cloneFromProps(this.transformMat.props);
              var r = this.contextData.cTr.props;
              this.canvasContext.setTransform(
                r[0],
                r[1],
                r[4],
                r[5],
                r[12],
                r[13]
              );
            } else
              this.canvasContext.transform(
                t[0],
                t[1],
                t[4],
                t[5],
                t[12],
                t[13]
              );
        }),
        (CanvasRenderer.prototype.ctxOpacity = function (t) {
          if (!this.renderConfig.clearCanvas)
            return (
              (this.canvasContext.globalAlpha *= t < 0 ? 0 : t),
              void (this.globalData.currentGlobalAlpha = this.contextData.cO)
            );
          (this.contextData.cO *= t < 0 ? 0 : t),
            this.globalData.currentGlobalAlpha !== this.contextData.cO &&
              ((this.canvasContext.globalAlpha = this.contextData.cO),
              (this.globalData.currentGlobalAlpha = this.contextData.cO));
        }),
        (CanvasRenderer.prototype.reset = function () {
          this.renderConfig.clearCanvas
            ? this.contextData.reset()
            : this.canvasContext.restore();
        }),
        (CanvasRenderer.prototype.save = function (t) {
          if (this.renderConfig.clearCanvas) {
            t && this.canvasContext.save();
            var e,
              r = this.contextData.cTr.props;
            this.contextData._length <= this.contextData.cArrPos &&
              this.contextData.duplicate();
            var i = this.contextData.saved[this.contextData.cArrPos];
            for (e = 0; e < 16; e += 1) i[e] = r[e];
            (this.contextData.savedOp[this.contextData.cArrPos] =
              this.contextData.cO),
              (this.contextData.cArrPos += 1);
          } else this.canvasContext.save();
        }),
        (CanvasRenderer.prototype.restore = function (t) {
          if (this.renderConfig.clearCanvas) {
            t &&
              (this.canvasContext.restore(),
              (this.globalData.blendMode = 'source-over')),
              (this.contextData.cArrPos -= 1);
            var e,
              r = this.contextData.saved[this.contextData.cArrPos],
              i = this.contextData.cTr.props;
            for (e = 0; e < 16; e += 1) i[e] = r[e];
            this.canvasContext.setTransform(
              r[0],
              r[1],
              r[4],
              r[5],
              r[12],
              r[13]
            ),
              (r = this.contextData.savedOp[this.contextData.cArrPos]),
              (this.contextData.cO = r),
              this.globalData.currentGlobalAlpha !== r &&
                ((this.canvasContext.globalAlpha = r),
                (this.globalData.currentGlobalAlpha = r));
          } else this.canvasContext.restore();
        }),
        (CanvasRenderer.prototype.configAnimation = function (t) {
          if (this.animationItem.wrapper) {
            this.animationItem.container = createTag('canvas');
            var e = this.animationItem.container.style;
            (e.width = '100%'), (e.height = '100%');
            var r = '0px 0px 0px';
            (e.transformOrigin = r),
              (e.mozTransformOrigin = r),
              (e.webkitTransformOrigin = r),
              (e['-webkit-transform'] = r),
              this.animationItem.wrapper.appendChild(
                this.animationItem.container
              ),
              (this.canvasContext =
                this.animationItem.container.getContext('2d')),
              this.renderConfig.className &&
                this.animationItem.container.setAttribute(
                  'class',
                  this.renderConfig.className
                ),
              this.renderConfig.id &&
                this.animationItem.container.setAttribute(
                  'id',
                  this.renderConfig.id
                );
          } else this.canvasContext = this.renderConfig.context;
          (this.data = t),
            (this.layers = t.layers),
            (this.transformCanvas = {
              w: t.w,
              h: t.h,
              sx: 0,
              sy: 0,
              tx: 0,
              ty: 0,
            }),
            this.setupGlobalData(t, document.body),
            (this.globalData.canvasContext = this.canvasContext),
            (this.globalData.renderer = this),
            (this.globalData.isDashed = !1),
            (this.globalData.progressiveLoad =
              this.renderConfig.progressiveLoad),
            (this.globalData.transformCanvas = this.transformCanvas),
            (this.elements = createSizedArray(t.layers.length)),
            this.updateContainerSize();
        }),
        (CanvasRenderer.prototype.updateContainerSize = function () {
          var t, e, r, i;
          if (
            (this.reset(),
            this.animationItem.wrapper && this.animationItem.container
              ? ((t = this.animationItem.wrapper.offsetWidth),
                (e = this.animationItem.wrapper.offsetHeight),
                this.animationItem.container.setAttribute(
                  'width',
                  t * this.renderConfig.dpr
                ),
                this.animationItem.container.setAttribute(
                  'height',
                  e * this.renderConfig.dpr
                ))
              : ((t = this.canvasContext.canvas.width * this.renderConfig.dpr),
                (e = this.canvasContext.canvas.height * this.renderConfig.dpr)),
            -1 !== this.renderConfig.preserveAspectRatio.indexOf('meet') ||
              -1 !== this.renderConfig.preserveAspectRatio.indexOf('slice'))
          ) {
            var s = this.renderConfig.preserveAspectRatio.split(' '),
              a = s[1] || 'meet',
              n = s[0] || 'xMidYMid',
              o = n.substr(0, 4),
              l = n.substr(4);
            (r = t / e),
              ((i = this.transformCanvas.w / this.transformCanvas.h) > r &&
                'meet' === a) ||
              (i < r && 'slice' === a)
                ? ((this.transformCanvas.sx =
                    t / (this.transformCanvas.w / this.renderConfig.dpr)),
                  (this.transformCanvas.sy =
                    t / (this.transformCanvas.w / this.renderConfig.dpr)))
                : ((this.transformCanvas.sx =
                    e / (this.transformCanvas.h / this.renderConfig.dpr)),
                  (this.transformCanvas.sy =
                    e / (this.transformCanvas.h / this.renderConfig.dpr))),
              (this.transformCanvas.tx =
                'xMid' === o &&
                ((i < r && 'meet' === a) || (i > r && 'slice' === a))
                  ? ((t -
                      this.transformCanvas.w * (e / this.transformCanvas.h)) /
                      2) *
                    this.renderConfig.dpr
                  : 'xMax' === o &&
                    ((i < r && 'meet' === a) || (i > r && 'slice' === a))
                  ? (t -
                      this.transformCanvas.w * (e / this.transformCanvas.h)) *
                    this.renderConfig.dpr
                  : 0),
              (this.transformCanvas.ty =
                'YMid' === l &&
                ((i > r && 'meet' === a) || (i < r && 'slice' === a))
                  ? ((e -
                      this.transformCanvas.h * (t / this.transformCanvas.w)) /
                      2) *
                    this.renderConfig.dpr
                  : 'YMax' === l &&
                    ((i > r && 'meet' === a) || (i < r && 'slice' === a))
                  ? (e -
                      this.transformCanvas.h * (t / this.transformCanvas.w)) *
                    this.renderConfig.dpr
                  : 0);
          } else
            'none' === this.renderConfig.preserveAspectRatio
              ? ((this.transformCanvas.sx =
                  t / (this.transformCanvas.w / this.renderConfig.dpr)),
                (this.transformCanvas.sy =
                  e / (this.transformCanvas.h / this.renderConfig.dpr)),
                (this.transformCanvas.tx = 0),
                (this.transformCanvas.ty = 0))
              : ((this.transformCanvas.sx = this.renderConfig.dpr),
                (this.transformCanvas.sy = this.renderConfig.dpr),
                (this.transformCanvas.tx = 0),
                (this.transformCanvas.ty = 0));
          (this.transformCanvas.props = [
            this.transformCanvas.sx,
            0,
            0,
            0,
            0,
            this.transformCanvas.sy,
            0,
            0,
            0,
            0,
            1,
            0,
            this.transformCanvas.tx,
            this.transformCanvas.ty,
            0,
            1,
          ]),
            this.ctxTransform(this.transformCanvas.props),
            this.canvasContext.beginPath(),
            this.canvasContext.rect(
              0,
              0,
              this.transformCanvas.w,
              this.transformCanvas.h
            ),
            this.canvasContext.closePath(),
            this.canvasContext.clip(),
            this.renderFrame(this.renderedFrame, !0);
        }),
        (CanvasRenderer.prototype.destroy = function () {
          var t;
          for (
            this.renderConfig.clearCanvas &&
              this.animationItem.wrapper &&
              (this.animationItem.wrapper.innerText = ''),
              t = (this.layers ? this.layers.length : 0) - 1;
            t >= 0;
            t -= 1
          )
            this.elements[t] && this.elements[t].destroy();
          (this.elements.length = 0),
            (this.globalData.canvasContext = null),
            (this.animationItem.container = null),
            (this.destroyed = !0);
        }),
        (CanvasRenderer.prototype.renderFrame = function (t, e) {
          if (
            (this.renderedFrame !== t ||
              !0 !== this.renderConfig.clearCanvas ||
              e) &&
            !this.destroyed &&
            -1 !== t
          ) {
            var r;
            (this.renderedFrame = t),
              (this.globalData.frameNum = t - this.animationItem._isFirstFrame),
              (this.globalData.frameId += 1),
              (this.globalData._mdf = !this.renderConfig.clearCanvas || e),
              (this.globalData.projectInterface.currentFrame = t);
            var i = this.layers.length;
            for (
              this.completeLayers || this.checkLayers(t), r = 0;
              r < i;
              r += 1
            )
              (this.completeLayers || this.elements[r]) &&
                this.elements[r].prepareFrame(t - this.layers[r].st);
            if (this.globalData._mdf) {
              for (
                !0 === this.renderConfig.clearCanvas
                  ? this.canvasContext.clearRect(
                      0,
                      0,
                      this.transformCanvas.w,
                      this.transformCanvas.h
                    )
                  : this.save(),
                  r = i - 1;
                r >= 0;
                r -= 1
              )
                (this.completeLayers || this.elements[r]) &&
                  this.elements[r].renderFrame();
              !0 !== this.renderConfig.clearCanvas && this.restore();
            }
          }
        }),
        (CanvasRenderer.prototype.buildItem = function (t) {
          var e = this.elements;
          if (!e[t] && 99 !== this.layers[t].ty) {
            var r = this.createItem(this.layers[t], this, this.globalData);
            (e[t] = r), r.initExpressions();
          }
        }),
        (CanvasRenderer.prototype.checkPendingElements = function () {
          for (; this.pendingElements.length; )
            this.pendingElements.pop().checkParenting();
        }),
        (CanvasRenderer.prototype.hide = function () {
          this.animationItem.container.style.display = 'none';
        }),
        (CanvasRenderer.prototype.show = function () {
          this.animationItem.container.style.display = 'block';
        }),
        extendPrototype([BaseRenderer], HybridRenderer),
        (HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem),
        (HybridRenderer.prototype.checkPendingElements = function () {
          for (; this.pendingElements.length; )
            this.pendingElements.pop().checkParenting();
        }),
        (HybridRenderer.prototype.appendElementInPos = function (t, e) {
          var r = t.getBaseElement();
          if (r) {
            var i = this.layers[e];
            if (i.ddd && this.supports3d) this.addTo3dContainer(r, e);
            else if (this.threeDElements) this.addTo3dContainer(r, e);
            else {
              for (var s, a, n = 0; n < e; )
                this.elements[n] &&
                  !0 !== this.elements[n] &&
                  this.elements[n].getBaseElement &&
                  ((a = this.elements[n]),
                  (s =
                    (this.layers[n].ddd
                      ? this.getThreeDContainerByPos(n)
                      : a.getBaseElement()) || s)),
                  (n += 1);
              s
                ? (i.ddd && this.supports3d) ||
                  this.layerElement.insertBefore(r, s)
                : (i.ddd && this.supports3d) ||
                  this.layerElement.appendChild(r);
            }
          }
        }),
        (HybridRenderer.prototype.createShape = function (t) {
          return this.supports3d
            ? new HShapeElement(t, this.globalData, this)
            : new SVGShapeElement(t, this.globalData, this);
        }),
        (HybridRenderer.prototype.createText = function (t) {
          return this.supports3d
            ? new HTextElement(t, this.globalData, this)
            : new SVGTextLottieElement(t, this.globalData, this);
        }),
        (HybridRenderer.prototype.createCamera = function (t) {
          return (
            (this.camera = new HCameraElement(t, this.globalData, this)),
            this.camera
          );
        }),
        (HybridRenderer.prototype.createImage = function (t) {
          return this.supports3d
            ? new HImageElement(t, this.globalData, this)
            : new IImageElement(t, this.globalData, this);
        }),
        (HybridRenderer.prototype.createComp = function (t) {
          return this.supports3d
            ? new HCompElement(t, this.globalData, this)
            : new SVGCompElement(t, this.globalData, this);
        }),
        (HybridRenderer.prototype.createSolid = function (t) {
          return this.supports3d
            ? new HSolidElement(t, this.globalData, this)
            : new ISolidElement(t, this.globalData, this);
        }),
        (HybridRenderer.prototype.createNull =
          SVGRenderer.prototype.createNull),
        (HybridRenderer.prototype.getThreeDContainerByPos = function (t) {
          for (var e = 0, r = this.threeDElements.length; e < r; ) {
            if (
              this.threeDElements[e].startPos <= t &&
              this.threeDElements[e].endPos >= t
            )
              return this.threeDElements[e].perspectiveElem;
            e += 1;
          }
          return null;
        }),
        (HybridRenderer.prototype.createThreeDContainer = function (t, e) {
          var r,
            i,
            s = createTag('div');
          styleDiv(s);
          var a = createTag('div');
          if ((styleDiv(a), '3d' === e)) {
            ((r = s.style).width = this.globalData.compSize.w + 'px'),
              (r.height = this.globalData.compSize.h + 'px');
            var n = '50% 50%';
            (r.webkitTransformOrigin = n),
              (r.mozTransformOrigin = n),
              (r.transformOrigin = n);
            var o = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
            ((i = a.style).transform = o), (i.webkitTransform = o);
          }
          s.appendChild(a);
          var l = {
            container: a,
            perspectiveElem: s,
            startPos: t,
            endPos: t,
            type: e,
          };
          return this.threeDElements.push(l), l;
        }),
        (HybridRenderer.prototype.build3dContainers = function () {
          var t,
            e,
            r = this.layers.length,
            i = '';
          for (t = 0; t < r; t += 1)
            this.layers[t].ddd && 3 !== this.layers[t].ty
              ? ('3d' !== i &&
                  ((i = '3d'), (e = this.createThreeDContainer(t, '3d'))),
                (e.endPos = Math.max(e.endPos, t)))
              : ('2d' !== i &&
                  ((i = '2d'), (e = this.createThreeDContainer(t, '2d'))),
                (e.endPos = Math.max(e.endPos, t)));
          for (t = (r = this.threeDElements.length) - 1; t >= 0; t -= 1)
            this.resizerElem.appendChild(
              this.threeDElements[t].perspectiveElem
            );
        }),
        (HybridRenderer.prototype.addTo3dContainer = function (t, e) {
          for (var r = 0, i = this.threeDElements.length; r < i; ) {
            if (e <= this.threeDElements[r].endPos) {
              for (var s, a = this.threeDElements[r].startPos; a < e; )
                this.elements[a] &&
                  this.elements[a].getBaseElement &&
                  (s = this.elements[a].getBaseElement()),
                  (a += 1);
              s
                ? this.threeDElements[r].container.insertBefore(t, s)
                : this.threeDElements[r].container.appendChild(t);
              break;
            }
            r += 1;
          }
        }),
        (HybridRenderer.prototype.configAnimation = function (t) {
          var e = createTag('div'),
            r = this.animationItem.wrapper,
            i = e.style;
          (i.width = t.w + 'px'),
            (i.height = t.h + 'px'),
            (this.resizerElem = e),
            styleDiv(e),
            (i.transformStyle = 'flat'),
            (i.mozTransformStyle = 'flat'),
            (i.webkitTransformStyle = 'flat'),
            this.renderConfig.className &&
              e.setAttribute('class', this.renderConfig.className),
            r.appendChild(e),
            (i.overflow = 'hidden');
          var s = createNS('svg');
          s.setAttribute('width', '1'),
            s.setAttribute('height', '1'),
            styleDiv(s),
            this.resizerElem.appendChild(s);
          var a = createNS('defs');
          s.appendChild(a),
            (this.data = t),
            this.setupGlobalData(t, s),
            (this.globalData.defs = a),
            (this.layers = t.layers),
            (this.layerElement = this.resizerElem),
            this.build3dContainers(),
            this.updateContainerSize();
        }),
        (HybridRenderer.prototype.destroy = function () {
          var t;
          this.animationItem.wrapper &&
            (this.animationItem.wrapper.innerText = ''),
            (this.animationItem.container = null),
            (this.globalData.defs = null);
          var e = this.layers ? this.layers.length : 0;
          for (t = 0; t < e; t += 1) this.elements[t].destroy();
          (this.elements.length = 0),
            (this.destroyed = !0),
            (this.animationItem = null);
        }),
        (HybridRenderer.prototype.updateContainerSize = function () {
          var t,
            e,
            r,
            i,
            s = this.animationItem.wrapper.offsetWidth,
            a = this.animationItem.wrapper.offsetHeight,
            n = s / a;
          this.globalData.compSize.w / this.globalData.compSize.h > n
            ? ((t = s / this.globalData.compSize.w),
              (e = s / this.globalData.compSize.w),
              (r = 0),
              (i =
                (a -
                  this.globalData.compSize.h *
                    (s / this.globalData.compSize.w)) /
                2))
            : ((t = a / this.globalData.compSize.h),
              (e = a / this.globalData.compSize.h),
              (r =
                (s -
                  this.globalData.compSize.w *
                    (a / this.globalData.compSize.h)) /
                2),
              (i = 0));
          var o = this.resizerElem.style;
          (o.webkitTransform =
            'matrix3d(' +
            t +
            ',0,0,0,0,' +
            e +
            ',0,0,0,0,1,0,' +
            r +
            ',' +
            i +
            ',0,1)'),
            (o.transform = o.webkitTransform);
        }),
        (HybridRenderer.prototype.renderFrame =
          SVGRenderer.prototype.renderFrame),
        (HybridRenderer.prototype.hide = function () {
          this.resizerElem.style.display = 'none';
        }),
        (HybridRenderer.prototype.show = function () {
          this.resizerElem.style.display = 'block';
        }),
        (HybridRenderer.prototype.initItems = function () {
          if ((this.buildAllItems(), this.camera)) this.camera.setup();
          else {
            var t,
              e = this.globalData.compSize.w,
              r = this.globalData.compSize.h,
              i = this.threeDElements.length;
            for (t = 0; t < i; t += 1) {
              var s = this.threeDElements[t].perspectiveElem.style;
              (s.webkitPerspective =
                Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + 'px'),
                (s.perspective = s.webkitPerspective);
            }
          }
        }),
        (HybridRenderer.prototype.searchExtraCompositions = function (t) {
          var e,
            r = t.length,
            i = createTag('div');
          for (e = 0; e < r; e += 1)
            if (t[e].xt) {
              var s = this.createComp(t[e], i, this.globalData.comp, null);
              s.initExpressions(),
                this.globalData.projectInterface.registerComposition(s);
            }
        }),
        (MaskElement.prototype.getMaskProperty = function (t) {
          return this.viewData[t].prop;
        }),
        (MaskElement.prototype.renderFrame = function (t) {
          var e,
            r = this.element.finalTransform.mat,
            i = this.masksProperties.length;
          for (e = 0; e < i; e += 1)
            if (
              ((this.viewData[e].prop._mdf || t) &&
                this.drawPath(
                  this.masksProperties[e],
                  this.viewData[e].prop.v,
                  this.viewData[e]
                ),
              (this.viewData[e].op._mdf || t) &&
                this.viewData[e].elem.setAttribute(
                  'fill-opacity',
                  this.viewData[e].op.v
                ),
              'n' !== this.masksProperties[e].mode &&
                (this.viewData[e].invRect &&
                  (this.element.finalTransform.mProp._mdf || t) &&
                  this.viewData[e].invRect.setAttribute(
                    'transform',
                    r.getInverseMatrix().to2dCSS()
                  ),
                this.storedData[e].x && (this.storedData[e].x._mdf || t)))
            ) {
              var s = this.storedData[e].expan;
              this.storedData[e].x.v < 0
                ? ('erode' !== this.storedData[e].lastOperator &&
                    ((this.storedData[e].lastOperator = 'erode'),
                    this.storedData[e].elem.setAttribute(
                      'filter',
                      'url(' +
                        locationHref +
                        '#' +
                        this.storedData[e].filterId +
                        ')'
                    )),
                  s.setAttribute('radius', -this.storedData[e].x.v))
                : ('dilate' !== this.storedData[e].lastOperator &&
                    ((this.storedData[e].lastOperator = 'dilate'),
                    this.storedData[e].elem.setAttribute('filter', null)),
                  this.storedData[e].elem.setAttribute(
                    'stroke-width',
                    2 * this.storedData[e].x.v
                  ));
            }
        }),
        (MaskElement.prototype.getMaskelement = function () {
          return this.maskElement;
        }),
        (MaskElement.prototype.createLayerSolidPath = function () {
          var t = 'M0,0 ';
          return (
            (t += ' h' + this.globalData.compSize.w),
            (t += ' v' + this.globalData.compSize.h),
            (t += ' h-' + this.globalData.compSize.w),
            (t += ' v-' + this.globalData.compSize.h + ' ')
          );
        }),
        (MaskElement.prototype.drawPath = function (t, e, r) {
          var i,
            s,
            a = ' M' + e.v[0][0] + ',' + e.v[0][1];
          for (s = e._length, i = 1; i < s; i += 1)
            a +=
              ' C' +
              e.o[i - 1][0] +
              ',' +
              e.o[i - 1][1] +
              ' ' +
              e.i[i][0] +
              ',' +
              e.i[i][1] +
              ' ' +
              e.v[i][0] +
              ',' +
              e.v[i][1];
          if (
            (e.c &&
              s > 1 &&
              (a +=
                ' C' +
                e.o[i - 1][0] +
                ',' +
                e.o[i - 1][1] +
                ' ' +
                e.i[0][0] +
                ',' +
                e.i[0][1] +
                ' ' +
                e.v[0][0] +
                ',' +
                e.v[0][1]),
            r.lastPath !== a)
          ) {
            var n = '';
            r.elem &&
              (e.c && (n = t.inv ? this.solidPath + a : a),
              r.elem.setAttribute('d', n)),
              (r.lastPath = a);
          }
        }),
        (MaskElement.prototype.destroy = function () {
          (this.element = null),
            (this.globalData = null),
            (this.maskElement = null),
            (this.data = null),
            (this.masksProperties = null);
        }),
        (HierarchyElement.prototype = {
          initHierarchy: function () {
            (this.hierarchy = []), (this._isParent = !1), this.checkParenting();
          },
          setHierarchy: function (t) {
            this.hierarchy = t;
          },
          setAsParent: function () {
            this._isParent = !0;
          },
          checkParenting: function () {
            void 0 !== this.data.parent &&
              this.comp.buildElementParenting(this, this.data.parent, []);
          },
        }),
        (FrameElement.prototype = {
          initFrame: function () {
            (this._isFirstFrame = !1),
              (this.dynamicProperties = []),
              (this._mdf = !1);
          },
          prepareProperties: function (t, e) {
            var r,
              i = this.dynamicProperties.length;
            for (r = 0; r < i; r += 1)
              (e ||
                (this._isParent &&
                  'transform' === this.dynamicProperties[r].propType)) &&
                (this.dynamicProperties[r].getValue(),
                this.dynamicProperties[r]._mdf &&
                  ((this.globalData._mdf = !0), (this._mdf = !0)));
          },
          addDynamicProperty: function (t) {
            -1 === this.dynamicProperties.indexOf(t) &&
              this.dynamicProperties.push(t);
          },
        }),
        (TransformElement.prototype = {
          initTransform: function () {
            (this.finalTransform = {
              mProp: this.data.ks
                ? TransformPropertyFactory.getTransformProperty(
                    this,
                    this.data.ks,
                    this
                  )
                : { o: 0 },
              _matMdf: !1,
              _opMdf: !1,
              mat: new Matrix(),
            }),
              this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
              this.data.ty;
          },
          renderTransform: function () {
            if (
              ((this.finalTransform._opMdf =
                this.finalTransform.mProp.o._mdf || this._isFirstFrame),
              (this.finalTransform._matMdf =
                this.finalTransform.mProp._mdf || this._isFirstFrame),
              this.hierarchy)
            ) {
              var t,
                e = this.finalTransform.mat,
                r = 0,
                i = this.hierarchy.length;
              if (!this.finalTransform._matMdf)
                for (; r < i; ) {
                  if (this.hierarchy[r].finalTransform.mProp._mdf) {
                    this.finalTransform._matMdf = !0;
                    break;
                  }
                  r += 1;
                }
              if (this.finalTransform._matMdf)
                for (
                  t = this.finalTransform.mProp.v.props,
                    e.cloneFromProps(t),
                    r = 0;
                  r < i;
                  r += 1
                )
                  (t = this.hierarchy[r].finalTransform.mProp.v.props),
                    e.transform(
                      t[0],
                      t[1],
                      t[2],
                      t[3],
                      t[4],
                      t[5],
                      t[6],
                      t[7],
                      t[8],
                      t[9],
                      t[10],
                      t[11],
                      t[12],
                      t[13],
                      t[14],
                      t[15]
                    );
            }
          },
          globalToLocal: function (t) {
            var e = [];
            e.push(this.finalTransform);
            for (var r, i = !0, s = this.comp; i; )
              s.finalTransform
                ? (s.data.hasMask && e.splice(0, 0, s.finalTransform),
                  (s = s.comp))
                : (i = !1);
            var a,
              n = e.length;
            for (r = 0; r < n; r += 1)
              (a = e[r].mat.applyToPointArray(0, 0, 0)),
                (t = [t[0] - a[0], t[1] - a[1], 0]);
            return t;
          },
          mHelper: new Matrix(),
        }),
        (RenderableElement.prototype = {
          initRenderable: function () {
            (this.isInRange = !1),
              (this.hidden = !1),
              (this.isTransparent = !1),
              (this.renderableComponents = []);
          },
          addRenderableComponent: function (t) {
            -1 === this.renderableComponents.indexOf(t) &&
              this.renderableComponents.push(t);
          },
          removeRenderableComponent: function (t) {
            -1 !== this.renderableComponents.indexOf(t) &&
              this.renderableComponents.splice(
                this.renderableComponents.indexOf(t),
                1
              );
          },
          prepareRenderableFrame: function (t) {
            this.checkLayerLimits(t);
          },
          checkTransparency: function () {
            this.finalTransform.mProp.o.v <= 0
              ? !this.isTransparent &&
                this.globalData.renderConfig.hideOnTransparent &&
                ((this.isTransparent = !0), this.hide())
              : this.isTransparent && ((this.isTransparent = !1), this.show());
          },
          checkLayerLimits: function (t) {
            this.data.ip - this.data.st <= t && this.data.op - this.data.st > t
              ? !0 !== this.isInRange &&
                ((this.globalData._mdf = !0),
                (this._mdf = !0),
                (this.isInRange = !0),
                this.show())
              : !1 !== this.isInRange &&
                ((this.globalData._mdf = !0),
                (this.isInRange = !1),
                this.hide());
          },
          renderRenderable: function () {
            var t,
              e = this.renderableComponents.length;
            for (t = 0; t < e; t += 1)
              this.renderableComponents[t].renderFrame(this._isFirstFrame);
          },
          sourceRectAtTime: function () {
            return { top: 0, left: 0, width: 100, height: 100 };
          },
          getLayerSize: function () {
            return 5 === this.data.ty
              ? { w: this.data.textData.width, h: this.data.textData.height }
              : { w: this.data.width, h: this.data.height };
          },
        }),
        extendPrototype(
          [
            RenderableElement,
            createProxyFunction({
              initElement: function (t, e, r) {
                this.initFrame(),
                  this.initBaseData(t, e, r),
                  this.initTransform(t, e, r),
                  this.initHierarchy(),
                  this.initRenderable(),
                  this.initRendererElement(),
                  this.createContainerElements(),
                  this.createRenderableComponents(),
                  this.createContent(),
                  this.hide();
              },
              hide: function () {
                this.hidden ||
                  (this.isInRange && !this.isTransparent) ||
                  (((this.baseElement || this.layerElement).style.display =
                    'none'),
                  (this.hidden = !0));
              },
              show: function () {
                this.isInRange &&
                  !this.isTransparent &&
                  (this.data.hd ||
                    ((this.baseElement || this.layerElement).style.display =
                      'block'),
                  (this.hidden = !1),
                  (this._isFirstFrame = !0));
              },
              renderFrame: function () {
                this.data.hd ||
                  this.hidden ||
                  (this.renderTransform(),
                  this.renderRenderable(),
                  this.renderElement(),
                  this.renderInnerContent(),
                  this._isFirstFrame && (this._isFirstFrame = !1));
              },
              renderInnerContent: function () {},
              prepareFrame: function (t) {
                (this._mdf = !1),
                  this.prepareRenderableFrame(t),
                  this.prepareProperties(t, this.isInRange),
                  this.checkTransparency();
              },
              destroy: function () {
                (this.innerElem = null), this.destroyBaseElement();
              },
            }),
          ],
          RenderableDOMElement
        ),
        (SVGStyleData.prototype.reset = function () {
          (this.d = ''), (this._mdf = !1);
        }),
        (SVGShapeData.prototype.setAsAnimated = function () {
          this._isAnimated = !0;
        }),
        extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
        extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
        (SVGGradientFillStyleData.prototype.initGradientData = function (
          t,
          e,
          r
        ) {
          (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
            (this.s = PropertyFactory.getProp(t, e.s, 1, null, this)),
            (this.e = PropertyFactory.getProp(t, e.e, 1, null, this)),
            (this.h = PropertyFactory.getProp(
              t,
              e.h || { k: 0 },
              0,
              0.01,
              this
            )),
            (this.a = PropertyFactory.getProp(
              t,
              e.a || { k: 0 },
              0,
              degToRads,
              this
            )),
            (this.g = new GradientProperty(t, e.g, this)),
            (this.style = r),
            (this.stops = []),
            this.setGradientData(r.pElem, e),
            this.setGradientOpacity(e, r),
            (this._isAnimated = !!this._isAnimated);
        }),
        (SVGGradientFillStyleData.prototype.setGradientData = function (t, e) {
          var r = createElementID(),
            i = createNS(1 === e.t ? 'linearGradient' : 'radialGradient');
          i.setAttribute('id', r),
            i.setAttribute('spreadMethod', 'pad'),
            i.setAttribute('gradientUnits', 'userSpaceOnUse');
          var s,
            a,
            n,
            o = [];
          for (n = 4 * e.g.p, a = 0; a < n; a += 4)
            (s = createNS('stop')), i.appendChild(s), o.push(s);
          t.setAttribute(
            'gf' === e.ty ? 'fill' : 'stroke',
            'url(' + locationHref + '#' + r + ')'
          ),
            (this.gf = i),
            (this.cst = o);
        }),
        (SVGGradientFillStyleData.prototype.setGradientOpacity = function (
          t,
          e
        ) {
          if (this.g._hasOpacity && !this.g._collapsable) {
            var r,
              i,
              s,
              a = createNS('mask'),
              n = createNS('path');
            a.appendChild(n);
            var o = createElementID(),
              l = createElementID();
            a.setAttribute('id', l);
            var h = createNS(1 === t.t ? 'linearGradient' : 'radialGradient');
            h.setAttribute('id', o),
              h.setAttribute('spreadMethod', 'pad'),
              h.setAttribute('gradientUnits', 'userSpaceOnUse'),
              (s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length);
            var p = this.stops;
            for (i = 4 * t.g.p; i < s; i += 2)
              (r = createNS('stop')).setAttribute(
                'stop-color',
                'rgb(255,255,255)'
              ),
                h.appendChild(r),
                p.push(r);
            n.setAttribute(
              'gf' === t.ty ? 'fill' : 'stroke',
              'url(' + locationHref + '#' + o + ')'
            ),
              'gs' === t.ty &&
                (n.setAttribute('stroke-linecap', lineCapEnum[t.lc || 2]),
                n.setAttribute('stroke-linejoin', lineJoinEnum[t.lj || 2]),
                1 === t.lj && n.setAttribute('stroke-miterlimit', t.ml)),
              (this.of = h),
              (this.ms = a),
              (this.ost = p),
              (this.maskId = l),
              (e.msElem = n);
          }
        }),
        extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData),
        extendPrototype(
          [SVGGradientFillStyleData, DynamicPropertyContainer],
          SVGGradientStrokeStyleData
        );
      var SVGElementsRenderer = (function () {
        var t = new Matrix(),
          e = new Matrix();
        function r(t, e, r) {
          (r || e.transform.op._mdf) &&
            e.transform.container.setAttribute('opacity', e.transform.op.v),
            (r || e.transform.mProps._mdf) &&
              e.transform.container.setAttribute(
                'transform',
                e.transform.mProps.v.to2dCSS()
              );
        }
        function i(r, i, s) {
          var a,
            n,
            o,
            l,
            h,
            p,
            u,
            c,
            f,
            m,
            d,
            g = i.styles.length,
            y = i.lvl;
          for (p = 0; p < g; p += 1) {
            if (((l = i.sh._mdf || s), i.styles[p].lvl < y)) {
              for (
                c = e.reset(),
                  m = y - i.styles[p].lvl,
                  d = i.transformers.length - 1;
                !l && m > 0;

              )
                (l = i.transformers[d].mProps._mdf || l), (m -= 1), (d -= 1);
              if (l)
                for (
                  m = y - i.styles[p].lvl, d = i.transformers.length - 1;
                  m > 0;

                )
                  (f = i.transformers[d].mProps.v.props),
                    c.transform(
                      f[0],
                      f[1],
                      f[2],
                      f[3],
                      f[4],
                      f[5],
                      f[6],
                      f[7],
                      f[8],
                      f[9],
                      f[10],
                      f[11],
                      f[12],
                      f[13],
                      f[14],
                      f[15]
                    ),
                    (m -= 1),
                    (d -= 1);
            } else c = t;
            if (((n = (u = i.sh.paths)._length), l)) {
              for (o = '', a = 0; a < n; a += 1)
                (h = u.shapes[a]) &&
                  h._length &&
                  (o += buildShapeString(h, h._length, h.c, c));
              i.caches[p] = o;
            } else o = i.caches[p];
            (i.styles[p].d += !0 === r.hd ? '' : o),
              (i.styles[p]._mdf = l || i.styles[p]._mdf);
          }
        }
        function s(t, e, r) {
          var i = e.style;
          (e.c._mdf || r) &&
            i.pElem.setAttribute(
              'fill',
              'rgb(' +
                bmFloor(e.c.v[0]) +
                ',' +
                bmFloor(e.c.v[1]) +
                ',' +
                bmFloor(e.c.v[2]) +
                ')'
            ),
            (e.o._mdf || r) && i.pElem.setAttribute('fill-opacity', e.o.v);
        }
        function a(t, e, r) {
          n(t, e, r), o(0, e, r);
        }
        function n(t, e, r) {
          var i,
            s,
            a,
            n,
            o,
            l = e.gf,
            h = e.g._hasOpacity,
            p = e.s.v,
            u = e.e.v;
          if (e.o._mdf || r) {
            var c = 'gf' === t.ty ? 'fill-opacity' : 'stroke-opacity';
            e.style.pElem.setAttribute(c, e.o.v);
          }
          if (e.s._mdf || r) {
            var f = 1 === t.t ? 'x1' : 'cx',
              m = 'x1' === f ? 'y1' : 'cy';
            l.setAttribute(f, p[0]),
              l.setAttribute(m, p[1]),
              h &&
                !e.g._collapsable &&
                (e.of.setAttribute(f, p[0]), e.of.setAttribute(m, p[1]));
          }
          if (e.g._cmdf || r) {
            i = e.cst;
            var d = e.g.c;
            for (a = i.length, s = 0; s < a; s += 1)
              (n = i[s]).setAttribute('offset', d[4 * s] + '%'),
                n.setAttribute(
                  'stop-color',
                  'rgb(' +
                    d[4 * s + 1] +
                    ',' +
                    d[4 * s + 2] +
                    ',' +
                    d[4 * s + 3] +
                    ')'
                );
          }
          if (h && (e.g._omdf || r)) {
            var g = e.g.o;
            for (
              a = (i = e.g._collapsable ? e.cst : e.ost).length, s = 0;
              s < a;
              s += 1
            )
              (n = i[s]),
                e.g._collapsable || n.setAttribute('offset', g[2 * s] + '%'),
                n.setAttribute('stop-opacity', g[2 * s + 1]);
          }
          if (1 === t.t)
            (e.e._mdf || r) &&
              (l.setAttribute('x2', u[0]),
              l.setAttribute('y2', u[1]),
              h &&
                !e.g._collapsable &&
                (e.of.setAttribute('x2', u[0]), e.of.setAttribute('y2', u[1])));
          else if (
            ((e.s._mdf || e.e._mdf || r) &&
              ((o = Math.sqrt(
                Math.pow(p[0] - u[0], 2) + Math.pow(p[1] - u[1], 2)
              )),
              l.setAttribute('r', o),
              h && !e.g._collapsable && e.of.setAttribute('r', o)),
            e.e._mdf || e.h._mdf || e.a._mdf || r)
          ) {
            o ||
              (o = Math.sqrt(
                Math.pow(p[0] - u[0], 2) + Math.pow(p[1] - u[1], 2)
              ));
            var y = Math.atan2(u[1] - p[1], u[0] - p[0]),
              v = e.h.v;
            v >= 1 ? (v = 0.99) : v <= -1 && (v = -0.99);
            var b = o * v,
              D = Math.cos(y + e.a.v) * b + p[0],
              x = Math.sin(y + e.a.v) * b + p[1];
            l.setAttribute('fx', D),
              l.setAttribute('fy', x),
              h &&
                !e.g._collapsable &&
                (e.of.setAttribute('fx', D), e.of.setAttribute('fy', x));
          }
        }
        function o(t, e, r) {
          var i = e.style,
            s = e.d;
          s &&
            (s._mdf || r) &&
            s.dashStr &&
            (i.pElem.setAttribute('stroke-dasharray', s.dashStr),
            i.pElem.setAttribute('stroke-dashoffset', s.dashoffset[0])),
            e.c &&
              (e.c._mdf || r) &&
              i.pElem.setAttribute(
                'stroke',
                'rgb(' +
                  bmFloor(e.c.v[0]) +
                  ',' +
                  bmFloor(e.c.v[1]) +
                  ',' +
                  bmFloor(e.c.v[2]) +
                  ')'
              ),
            (e.o._mdf || r) && i.pElem.setAttribute('stroke-opacity', e.o.v),
            (e.w._mdf || r) &&
              (i.pElem.setAttribute('stroke-width', e.w.v),
              i.msElem && i.msElem.setAttribute('stroke-width', e.w.v));
        }
        return {
          createRenderFunction: function (t) {
            switch (t.ty) {
              case 'fl':
                return s;
              case 'gf':
                return n;
              case 'gs':
                return a;
              case 'st':
                return o;
              case 'sh':
              case 'el':
              case 'rc':
              case 'sr':
                return i;
              case 'tr':
                return r;
              default:
                return null;
            }
          },
        };
      })();
      function ShapeTransformManager() {
        (this.sequences = {}),
          (this.sequenceList = []),
          (this.transform_key_count = 0);
      }
      function CVShapeData(t, e, r, i) {
        (this.styledShapes = []), (this.tr = [0, 0, 0, 0, 0, 0]);
        var s,
          a = 4;
        'rc' === e.ty
          ? (a = 5)
          : 'el' === e.ty
          ? (a = 6)
          : 'sr' === e.ty && (a = 7),
          (this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t));
        var n,
          o = r.length;
        for (s = 0; s < o; s += 1)
          r[s].closed ||
            ((n = {
              transforms: i.addTransformSequence(r[s].transforms),
              trNodes: [],
            }),
            this.styledShapes.push(n),
            r[s].elements.push(n));
      }
      function BaseElement() {}
      function NullElement(t, e, r) {
        this.initFrame(),
          this.initBaseData(t, e, r),
          this.initFrame(),
          this.initTransform(t, e, r),
          this.initHierarchy();
      }
      function SVGBaseElement() {}
      function IShapeElement() {}
      function ITextElement() {}
      function ICompElement() {}
      function IImageElement(t, e, r) {
        (this.assetData = e.getAssetData(t.refId)),
          this.initElement(t, e, r),
          (this.sourceRect = {
            top: 0,
            left: 0,
            width: this.assetData.w,
            height: this.assetData.h,
          });
      }
      function ISolidElement(t, e, r) {
        this.initElement(t, e, r);
      }
      function AudioElement(t, e, r) {
        this.initFrame(),
          this.initRenderable(),
          (this.assetData = e.getAssetData(t.refId)),
          this.initBaseData(t, e, r),
          (this._isPlaying = !1),
          (this._canPlay = !1);
        var i = this.globalData.getAssetsPath(this.assetData);
        (this.audio = this.globalData.audioController.createAudio(i)),
          (this._currentTime = 0),
          this.globalData.audioController.addAudio(this),
          (this.tm = t.tm
            ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
            : { _placeholder: !0 });
      }
      function FootageElement(t, e, r) {
        this.initFrame(),
          this.initRenderable(),
          (this.assetData = e.getAssetData(t.refId)),
          (this.footageData = e.imageLoader.getAsset(this.assetData)),
          this.initBaseData(t, e, r);
      }
      function SVGCompElement(t, e, r) {
        (this.layers = t.layers),
          (this.supports3d = !0),
          (this.completeLayers = !1),
          (this.pendingElements = []),
          (this.elements = this.layers
            ? createSizedArray(this.layers.length)
            : []),
          this.initElement(t, e, r),
          (this.tm = t.tm
            ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
            : { _placeholder: !0 });
      }
      function SVGTextLottieElement(t, e, r) {
        (this.textSpans = []),
          (this.renderType = 'svg'),
          this.initElement(t, e, r);
      }
      function SVGShapeElement(t, e, r) {
        (this.shapes = []),
          (this.shapesData = t.shapes),
          (this.stylesList = []),
          (this.shapeModifiers = []),
          (this.itemsData = []),
          (this.processedElements = []),
          (this.animatedContents = []),
          this.initElement(t, e, r),
          (this.prevViewData = []);
      }
      function SVGTintFilter(t, e) {
        this.filterManager = e;
        var r = createNS('feColorMatrix');
        if (
          (r.setAttribute('type', 'matrix'),
          r.setAttribute('color-interpolation-filters', 'linearRGB'),
          r.setAttribute(
            'values',
            '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'
          ),
          r.setAttribute('result', 'f1'),
          t.appendChild(r),
          (r = createNS('feColorMatrix')).setAttribute('type', 'matrix'),
          r.setAttribute('color-interpolation-filters', 'sRGB'),
          r.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'),
          r.setAttribute('result', 'f2'),
          t.appendChild(r),
          (this.matrixFilter = r),
          100 !== e.effectElements[2].p.v || e.effectElements[2].p.k)
        ) {
          var i,
            s = createNS('feMerge');
          t.appendChild(s),
            (i = createNS('feMergeNode')).setAttribute('in', 'SourceGraphic'),
            s.appendChild(i),
            (i = createNS('feMergeNode')).setAttribute('in', 'f2'),
            s.appendChild(i);
        }
      }
      function SVGFillFilter(t, e) {
        this.filterManager = e;
        var r = createNS('feColorMatrix');
        r.setAttribute('type', 'matrix'),
          r.setAttribute('color-interpolation-filters', 'sRGB'),
          r.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'),
          t.appendChild(r),
          (this.matrixFilter = r);
      }
      function SVGGaussianBlurEffect(t, e) {
        t.setAttribute('x', '-100%'),
          t.setAttribute('y', '-100%'),
          t.setAttribute('width', '300%'),
          t.setAttribute('height', '300%'),
          (this.filterManager = e);
        var r = createNS('feGaussianBlur');
        t.appendChild(r), (this.feGaussianBlur = r);
      }
      function SVGStrokeEffect(t, e) {
        (this.initialized = !1),
          (this.filterManager = e),
          (this.elem = t),
          (this.paths = []);
      }
      function SVGTritoneFilter(t, e) {
        this.filterManager = e;
        var r = createNS('feColorMatrix');
        r.setAttribute('type', 'matrix'),
          r.setAttribute('color-interpolation-filters', 'linearRGB'),
          r.setAttribute(
            'values',
            '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'
          ),
          r.setAttribute('result', 'f1'),
          t.appendChild(r);
        var i = createNS('feComponentTransfer');
        i.setAttribute('color-interpolation-filters', 'sRGB'),
          t.appendChild(i),
          (this.matrixFilter = i);
        var s = createNS('feFuncR');
        s.setAttribute('type', 'table'), i.appendChild(s), (this.feFuncR = s);
        var a = createNS('feFuncG');
        a.setAttribute('type', 'table'), i.appendChild(a), (this.feFuncG = a);
        var n = createNS('feFuncB');
        n.setAttribute('type', 'table'), i.appendChild(n), (this.feFuncB = n);
      }
      function SVGProLevelsFilter(t, e) {
        this.filterManager = e;
        var r = this.filterManager.effectElements,
          i = createNS('feComponentTransfer');
        (r[10].p.k ||
          0 !== r[10].p.v ||
          r[11].p.k ||
          1 !== r[11].p.v ||
          r[12].p.k ||
          1 !== r[12].p.v ||
          r[13].p.k ||
          0 !== r[13].p.v ||
          r[14].p.k ||
          1 !== r[14].p.v) &&
          (this.feFuncR = this.createFeFunc('feFuncR', i)),
          (r[17].p.k ||
            0 !== r[17].p.v ||
            r[18].p.k ||
            1 !== r[18].p.v ||
            r[19].p.k ||
            1 !== r[19].p.v ||
            r[20].p.k ||
            0 !== r[20].p.v ||
            r[21].p.k ||
            1 !== r[21].p.v) &&
            (this.feFuncG = this.createFeFunc('feFuncG', i)),
          (r[24].p.k ||
            0 !== r[24].p.v ||
            r[25].p.k ||
            1 !== r[25].p.v ||
            r[26].p.k ||
            1 !== r[26].p.v ||
            r[27].p.k ||
            0 !== r[27].p.v ||
            r[28].p.k ||
            1 !== r[28].p.v) &&
            (this.feFuncB = this.createFeFunc('feFuncB', i)),
          (r[31].p.k ||
            0 !== r[31].p.v ||
            r[32].p.k ||
            1 !== r[32].p.v ||
            r[33].p.k ||
            1 !== r[33].p.v ||
            r[34].p.k ||
            0 !== r[34].p.v ||
            r[35].p.k ||
            1 !== r[35].p.v) &&
            (this.feFuncA = this.createFeFunc('feFuncA', i)),
          (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) &&
            (i.setAttribute('color-interpolation-filters', 'sRGB'),
            t.appendChild(i),
            (i = createNS('feComponentTransfer'))),
          (r[3].p.k ||
            0 !== r[3].p.v ||
            r[4].p.k ||
            1 !== r[4].p.v ||
            r[5].p.k ||
            1 !== r[5].p.v ||
            r[6].p.k ||
            0 !== r[6].p.v ||
            r[7].p.k ||
            1 !== r[7].p.v) &&
            (i.setAttribute('color-interpolation-filters', 'sRGB'),
            t.appendChild(i),
            (this.feFuncRComposed = this.createFeFunc('feFuncR', i)),
            (this.feFuncGComposed = this.createFeFunc('feFuncG', i)),
            (this.feFuncBComposed = this.createFeFunc('feFuncB', i)));
      }
      function SVGDropShadowEffect(t, e) {
        var r = e.container.globalData.renderConfig.filterSize;
        t.setAttribute('x', r.x),
          t.setAttribute('y', r.y),
          t.setAttribute('width', r.width),
          t.setAttribute('height', r.height),
          (this.filterManager = e);
        var i = createNS('feGaussianBlur');
        i.setAttribute('in', 'SourceAlpha'),
          i.setAttribute('result', 'drop_shadow_1'),
          i.setAttribute('stdDeviation', '0'),
          (this.feGaussianBlur = i),
          t.appendChild(i);
        var s = createNS('feOffset');
        s.setAttribute('dx', '25'),
          s.setAttribute('dy', '0'),
          s.setAttribute('in', 'drop_shadow_1'),
          s.setAttribute('result', 'drop_shadow_2'),
          (this.feOffset = s),
          t.appendChild(s);
        var a = createNS('feFlood');
        a.setAttribute('flood-color', '#00ff00'),
          a.setAttribute('flood-opacity', '1'),
          a.setAttribute('result', 'drop_shadow_3'),
          (this.feFlood = a),
          t.appendChild(a);
        var n = createNS('feComposite');
        n.setAttribute('in', 'drop_shadow_3'),
          n.setAttribute('in2', 'drop_shadow_2'),
          n.setAttribute('operator', 'in'),
          n.setAttribute('result', 'drop_shadow_4'),
          t.appendChild(n);
        var o,
          l = createNS('feMerge');
        t.appendChild(l),
          (o = createNS('feMergeNode')),
          l.appendChild(o),
          (o = createNS('feMergeNode')).setAttribute('in', 'SourceGraphic'),
          (this.feMergeNode = o),
          (this.feMerge = l),
          (this.originalNodeAdded = !1),
          l.appendChild(o);
      }
      (ShapeTransformManager.prototype = {
        addTransformSequence: function (t) {
          var e,
            r = t.length,
            i = '_';
          for (e = 0; e < r; e += 1) i += t[e].transform.key + '_';
          var s = this.sequences[i];
          return (
            s ||
              ((s = {
                transforms: [].concat(t),
                finalTransform: new Matrix(),
                _mdf: !1,
              }),
              (this.sequences[i] = s),
              this.sequenceList.push(s)),
            s
          );
        },
        processSequence: function (t, e) {
          for (var r, i = 0, s = t.transforms.length, a = e; i < s && !e; ) {
            if (t.transforms[i].transform.mProps._mdf) {
              a = !0;
              break;
            }
            i += 1;
          }
          if (a)
            for (t.finalTransform.reset(), i = s - 1; i >= 0; i -= 1)
              (r = t.transforms[i].transform.mProps.v.props),
                t.finalTransform.transform(
                  r[0],
                  r[1],
                  r[2],
                  r[3],
                  r[4],
                  r[5],
                  r[6],
                  r[7],
                  r[8],
                  r[9],
                  r[10],
                  r[11],
                  r[12],
                  r[13],
                  r[14],
                  r[15]
                );
          t._mdf = a;
        },
        processSequences: function (t) {
          var e,
            r = this.sequenceList.length;
          for (e = 0; e < r; e += 1)
            this.processSequence(this.sequenceList[e], t);
        },
        getNewKey: function () {
          return (
            (this.transform_key_count += 1), '_' + this.transform_key_count
          );
        },
      }),
        (CVShapeData.prototype.setAsAnimated =
          SVGShapeData.prototype.setAsAnimated),
        (BaseElement.prototype = {
          checkMasks: function () {
            if (!this.data.hasMask) return !1;
            for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
              if (
                'n' !== this.data.masksProperties[t].mode &&
                !1 !== this.data.masksProperties[t].cl
              )
                return !0;
              t += 1;
            }
            return !1;
          },
          initExpressions: function () {
            (this.layerInterface = LayerExpressionInterface(this)),
              this.data.hasMask &&
                this.maskManager &&
                this.layerInterface.registerMaskInterface(this.maskManager);
            var t = EffectsExpressionInterface.createEffectsInterface(
              this,
              this.layerInterface
            );
            this.layerInterface.registerEffectsInterface(t),
              0 === this.data.ty || this.data.xt
                ? (this.compInterface = CompExpressionInterface(this))
                : 4 === this.data.ty
                ? ((this.layerInterface.shapeInterface =
                    ShapeExpressionInterface(
                      this.shapesData,
                      this.itemsData,
                      this.layerInterface
                    )),
                  (this.layerInterface.content =
                    this.layerInterface.shapeInterface))
                : 5 === this.data.ty &&
                  ((this.layerInterface.textInterface =
                    TextExpressionInterface(this)),
                  (this.layerInterface.text =
                    this.layerInterface.textInterface));
          },
          setBlendMode: function () {
            var t = getBlendMode(this.data.bm);
            (this.baseElement || this.layerElement).style['mix-blend-mode'] = t;
          },
          initBaseData: function (t, e, r) {
            (this.globalData = e),
              (this.comp = r),
              (this.data = t),
              (this.layerId = createElementID()),
              this.data.sr || (this.data.sr = 1),
              (this.effectsManager = new EffectsManager(
                this.data,
                this,
                this.dynamicProperties
              ));
          },
          getType: function () {
            return this.type;
          },
          sourceRectAtTime: function () {},
        }),
        (NullElement.prototype.prepareFrame = function (t) {
          this.prepareProperties(t, !0);
        }),
        (NullElement.prototype.renderFrame = function () {}),
        (NullElement.prototype.getBaseElement = function () {
          return null;
        }),
        (NullElement.prototype.destroy = function () {}),
        (NullElement.prototype.sourceRectAtTime = function () {}),
        (NullElement.prototype.hide = function () {}),
        extendPrototype(
          [BaseElement, TransformElement, HierarchyElement, FrameElement],
          NullElement
        ),
        (SVGBaseElement.prototype = {
          initRendererElement: function () {
            this.layerElement = createNS('g');
          },
          createContainerElements: function () {
            (this.matteElement = createNS('g')),
              (this.transformedElement = this.layerElement),
              (this.maskedElement = this.layerElement),
              (this._sizeChanged = !1);
            var t,
              e,
              r,
              i = null;
            if (this.data.td) {
              if (3 == this.data.td || 1 == this.data.td) {
                var s = createNS('mask');
                s.setAttribute('id', this.layerId),
                  s.setAttribute(
                    'mask-type',
                    3 == this.data.td ? 'luminance' : 'alpha'
                  ),
                  s.appendChild(this.layerElement),
                  (i = s),
                  this.globalData.defs.appendChild(s),
                  featureSupport.maskType ||
                    1 != this.data.td ||
                    (s.setAttribute('mask-type', 'luminance'),
                    (t = createElementID()),
                    (e = filtersFactory.createFilter(t)),
                    this.globalData.defs.appendChild(e),
                    e.appendChild(
                      filtersFactory.createAlphaToLuminanceFilter()
                    ),
                    (r = createNS('g')).appendChild(this.layerElement),
                    (i = r),
                    s.appendChild(r),
                    r.setAttribute(
                      'filter',
                      'url(' + locationHref + '#' + t + ')'
                    ));
              } else if (2 == this.data.td) {
                var a = createNS('mask');
                a.setAttribute('id', this.layerId),
                  a.setAttribute('mask-type', 'alpha');
                var n = createNS('g');
                a.appendChild(n),
                  (t = createElementID()),
                  (e = filtersFactory.createFilter(t));
                var o = createNS('feComponentTransfer');
                o.setAttribute('in', 'SourceGraphic'), e.appendChild(o);
                var l = createNS('feFuncA');
                l.setAttribute('type', 'table'),
                  l.setAttribute('tableValues', '1.0 0.0'),
                  o.appendChild(l),
                  this.globalData.defs.appendChild(e);
                var h = createNS('rect');
                h.setAttribute('width', this.comp.data.w),
                  h.setAttribute('height', this.comp.data.h),
                  h.setAttribute('x', '0'),
                  h.setAttribute('y', '0'),
                  h.setAttribute('fill', '#ffffff'),
                  h.setAttribute('opacity', '0'),
                  n.setAttribute(
                    'filter',
                    'url(' + locationHref + '#' + t + ')'
                  ),
                  n.appendChild(h),
                  n.appendChild(this.layerElement),
                  (i = n),
                  featureSupport.maskType ||
                    (a.setAttribute('mask-type', 'luminance'),
                    e.appendChild(
                      filtersFactory.createAlphaToLuminanceFilter()
                    ),
                    (r = createNS('g')),
                    n.appendChild(h),
                    r.appendChild(this.layerElement),
                    (i = r),
                    n.appendChild(r)),
                  this.globalData.defs.appendChild(a);
              }
            } else
              this.data.tt
                ? (this.matteElement.appendChild(this.layerElement),
                  (i = this.matteElement),
                  (this.baseElement = this.matteElement))
                : (this.baseElement = this.layerElement);
            if (
              (this.data.ln &&
                this.layerElement.setAttribute('id', this.data.ln),
              this.data.cl &&
                this.layerElement.setAttribute('class', this.data.cl),
              0 === this.data.ty && !this.data.hd)
            ) {
              var p = createNS('clipPath'),
                u = createNS('path');
              u.setAttribute(
                'd',
                'M0,0 L' +
                  this.data.w +
                  ',0 L' +
                  this.data.w +
                  ',' +
                  this.data.h +
                  ' L0,' +
                  this.data.h +
                  'z'
              );
              var c = createElementID();
              if (
                (p.setAttribute('id', c),
                p.appendChild(u),
                this.globalData.defs.appendChild(p),
                this.checkMasks())
              ) {
                var f = createNS('g');
                f.setAttribute(
                  'clip-path',
                  'url(' + locationHref + '#' + c + ')'
                ),
                  f.appendChild(this.layerElement),
                  (this.transformedElement = f),
                  i
                    ? i.appendChild(this.transformedElement)
                    : (this.baseElement = this.transformedElement);
              } else
                this.layerElement.setAttribute(
                  'clip-path',
                  'url(' + locationHref + '#' + c + ')'
                );
            }
            0 !== this.data.bm && this.setBlendMode();
          },
          renderElement: function () {
            this.finalTransform._matMdf &&
              this.transformedElement.setAttribute(
                'transform',
                this.finalTransform.mat.to2dCSS()
              ),
              this.finalTransform._opMdf &&
                this.transformedElement.setAttribute(
                  'opacity',
                  this.finalTransform.mProp.o.v
                );
          },
          destroyBaseElement: function () {
            (this.layerElement = null),
              (this.matteElement = null),
              this.maskManager.destroy();
          },
          getBaseElement: function () {
            return this.data.hd ? null : this.baseElement;
          },
          createRenderableComponents: function () {
            (this.maskManager = new MaskElement(
              this.data,
              this,
              this.globalData
            )),
              (this.renderableEffectsManager = new SVGEffects(this));
          },
          setMatte: function (t) {
            this.matteElement &&
              this.matteElement.setAttribute(
                'mask',
                'url(' + locationHref + '#' + t + ')'
              );
          },
        }),
        (IShapeElement.prototype = {
          addShapeToModifiers: function (t) {
            var e,
              r = this.shapeModifiers.length;
            for (e = 0; e < r; e += 1) this.shapeModifiers[e].addShape(t);
          },
          isShapeInAnimatedModifiers: function (t) {
            for (var e = this.shapeModifiers.length; 0 < e; )
              if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
            return !1;
          },
          renderModifiers: function () {
            if (this.shapeModifiers.length) {
              var t,
                e = this.shapes.length;
              for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
              for (
                t = (e = this.shapeModifiers.length) - 1;
                t >= 0 &&
                !this.shapeModifiers[t].processShapes(this._isFirstFrame);
                t -= 1
              );
            }
          },
          searchProcessedElement: function (t) {
            for (var e = this.processedElements, r = 0, i = e.length; r < i; ) {
              if (e[r].elem === t) return e[r].pos;
              r += 1;
            }
            return 0;
          },
          addProcessedElement: function (t, e) {
            for (var r = this.processedElements, i = r.length; i; )
              if (r[(i -= 1)].elem === t) return void (r[i].pos = e);
            r.push(new ProcessedElement(t, e));
          },
          prepareFrame: function (t) {
            this.prepareRenderableFrame(t),
              this.prepareProperties(t, this.isInRange);
          },
        }),
        (ITextElement.prototype.initElement = function (t, e, r) {
          (this.lettersChangedFlag = !0),
            this.initFrame(),
            this.initBaseData(t, e, r),
            (this.textProperty = new TextProperty(
              this,
              t.t,
              this.dynamicProperties
            )),
            (this.textAnimator = new TextAnimatorProperty(
              t.t,
              this.renderType,
              this
            )),
            this.initTransform(t, e, r),
            this.initHierarchy(),
            this.initRenderable(),
            this.initRendererElement(),
            this.createContainerElements(),
            this.createRenderableComponents(),
            this.createContent(),
            this.hide(),
            this.textAnimator.searchProperties(this.dynamicProperties);
        }),
        (ITextElement.prototype.prepareFrame = function (t) {
          (this._mdf = !1),
            this.prepareRenderableFrame(t),
            this.prepareProperties(t, this.isInRange),
            (this.textProperty._mdf || this.textProperty._isFirstFrame) &&
              (this.buildNewText(),
              (this.textProperty._isFirstFrame = !1),
              (this.textProperty._mdf = !1));
        }),
        (ITextElement.prototype.createPathShape = function (t, e) {
          var r,
            i,
            s = e.length,
            a = '';
          for (r = 0; r < s; r += 1)
            (i = e[r].ks.k), (a += buildShapeString(i, i.i.length, !0, t));
          return a;
        }),
        (ITextElement.prototype.updateDocumentData = function (t, e) {
          this.textProperty.updateDocumentData(t, e);
        }),
        (ITextElement.prototype.canResizeFont = function (t) {
          this.textProperty.canResizeFont(t);
        }),
        (ITextElement.prototype.setMinimumFontSize = function (t) {
          this.textProperty.setMinimumFontSize(t);
        }),
        (ITextElement.prototype.applyTextPropertiesToMatrix = function (
          t,
          e,
          r,
          i,
          s
        ) {
          switch (
            (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0),
            e.translate(0, -t.ls, 0),
            t.j)
          ) {
            case 1:
              e.translate(
                t.justifyOffset + (t.boxWidth - t.lineWidths[r]),
                0,
                0
              );
              break;
            case 2:
              e.translate(
                t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2,
                0,
                0
              );
          }
          e.translate(i, s, 0);
        }),
        (ITextElement.prototype.buildColor = function (t) {
          return (
            'rgb(' +
            Math.round(255 * t[0]) +
            ',' +
            Math.round(255 * t[1]) +
            ',' +
            Math.round(255 * t[2]) +
            ')'
          );
        }),
        (ITextElement.prototype.emptyProp = new LetterProps()),
        (ITextElement.prototype.destroy = function () {}),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement,
          ],
          ICompElement
        ),
        (ICompElement.prototype.initElement = function (t, e, r) {
          this.initFrame(),
            this.initBaseData(t, e, r),
            this.initTransform(t, e, r),
            this.initRenderable(),
            this.initHierarchy(),
            this.initRendererElement(),
            this.createContainerElements(),
            this.createRenderableComponents(),
            (!this.data.xt && e.progressiveLoad) || this.buildAllItems(),
            this.hide();
        }),
        (ICompElement.prototype.prepareFrame = function (t) {
          if (
            ((this._mdf = !1),
            this.prepareRenderableFrame(t),
            this.prepareProperties(t, this.isInRange),
            this.isInRange || this.data.xt)
          ) {
            if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
            else {
              var e = this.tm.v;
              e === this.data.op && (e = this.data.op - 1),
                (this.renderedFrame = e);
            }
            var r,
              i = this.elements.length;
            for (
              this.completeLayers || this.checkLayers(this.renderedFrame),
                r = i - 1;
              r >= 0;
              r -= 1
            )
              (this.completeLayers || this.elements[r]) &&
                (this.elements[r].prepareFrame(
                  this.renderedFrame - this.layers[r].st
                ),
                this.elements[r]._mdf && (this._mdf = !0));
          }
        }),
        (ICompElement.prototype.renderInnerContent = function () {
          var t,
            e = this.layers.length;
          for (t = 0; t < e; t += 1)
            (this.completeLayers || this.elements[t]) &&
              this.elements[t].renderFrame();
        }),
        (ICompElement.prototype.setElements = function (t) {
          this.elements = t;
        }),
        (ICompElement.prototype.getElements = function () {
          return this.elements;
        }),
        (ICompElement.prototype.destroyElements = function () {
          var t,
            e = this.layers.length;
          for (t = 0; t < e; t += 1)
            this.elements[t] && this.elements[t].destroy();
        }),
        (ICompElement.prototype.destroy = function () {
          this.destroyElements(), this.destroyBaseElement();
        }),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            SVGBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement,
          ],
          IImageElement
        ),
        (IImageElement.prototype.createContent = function () {
          var t = this.globalData.getAssetsPath(this.assetData);
          (this.innerElem = createNS('image')),
            this.innerElem.setAttribute('width', this.assetData.w + 'px'),
            this.innerElem.setAttribute('height', this.assetData.h + 'px'),
            this.innerElem.setAttribute(
              'preserveAspectRatio',
              this.assetData.pr ||
                this.globalData.renderConfig.imagePreserveAspectRatio
            ),
            this.innerElem.setAttributeNS(
              'http://www.w3.org/1999/xlink',
              'href',
              t
            ),
            this.layerElement.appendChild(this.innerElem);
        }),
        (IImageElement.prototype.sourceRectAtTime = function () {
          return this.sourceRect;
        }),
        extendPrototype([IImageElement], ISolidElement),
        (ISolidElement.prototype.createContent = function () {
          var t = createNS('rect');
          t.setAttribute('width', this.data.sw),
            t.setAttribute('height', this.data.sh),
            t.setAttribute('fill', this.data.sc),
            this.layerElement.appendChild(t);
        }),
        (AudioElement.prototype.prepareFrame = function (t) {
          if (
            (this.prepareRenderableFrame(t, !0),
            this.prepareProperties(t, !0),
            this.tm._placeholder)
          )
            this._currentTime = t / this.data.sr;
          else {
            var e = this.tm.v;
            this._currentTime = e;
          }
        }),
        extendPrototype(
          [RenderableElement, BaseElement, FrameElement],
          AudioElement
        ),
        (AudioElement.prototype.renderFrame = function () {
          this.isInRange &&
            this._canPlay &&
            (this._isPlaying
              ? (!this.audio.playing() ||
                  Math.abs(
                    this._currentTime / this.globalData.frameRate -
                      this.audio.seek()
                  ) > 0.1) &&
                this.audio.seek(this._currentTime / this.globalData.frameRate)
              : (this.audio.play(),
                this.audio.seek(this._currentTime / this.globalData.frameRate),
                (this._isPlaying = !0)));
        }),
        (AudioElement.prototype.show = function () {}),
        (AudioElement.prototype.hide = function () {
          this.audio.pause(), (this._isPlaying = !1);
        }),
        (AudioElement.prototype.pause = function () {
          this.audio.pause(), (this._isPlaying = !1), (this._canPlay = !1);
        }),
        (AudioElement.prototype.resume = function () {
          this._canPlay = !0;
        }),
        (AudioElement.prototype.setRate = function (t) {
          this.audio.rate(t);
        }),
        (AudioElement.prototype.volume = function (t) {
          this.audio.volume(t);
        }),
        (AudioElement.prototype.getBaseElement = function () {
          return null;
        }),
        (AudioElement.prototype.destroy = function () {}),
        (AudioElement.prototype.sourceRectAtTime = function () {}),
        (AudioElement.prototype.initExpressions = function () {}),
        (FootageElement.prototype.prepareFrame = function () {}),
        extendPrototype(
          [RenderableElement, BaseElement, FrameElement],
          FootageElement
        ),
        (FootageElement.prototype.getBaseElement = function () {
          return null;
        }),
        (FootageElement.prototype.renderFrame = function () {}),
        (FootageElement.prototype.destroy = function () {}),
        (FootageElement.prototype.initExpressions = function () {
          this.layerInterface = FootageInterface(this);
        }),
        (FootageElement.prototype.getFootageData = function () {
          return this.footageData;
        }),
        extendPrototype(
          [SVGRenderer, ICompElement, SVGBaseElement],
          SVGCompElement
        ),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            SVGBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement,
            ITextElement,
          ],
          SVGTextLottieElement
        ),
        (SVGTextLottieElement.prototype.createContent = function () {
          this.data.singleShape &&
            !this.globalData.fontManager.chars &&
            (this.textContainer = createNS('text'));
        }),
        (SVGTextLottieElement.prototype.buildTextContents = function (t) {
          for (var e = 0, r = t.length, i = [], s = ''; e < r; )
            t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3)
              ? (i.push(s), (s = ''))
              : (s += t[e]),
              (e += 1);
          return i.push(s), i;
        }),
        (SVGTextLottieElement.prototype.buildNewText = function () {
          var t,
            e,
            r = this.textProperty.currentData;
          (this.renderedLetters = createSizedArray(r ? r.l.length : 0)),
            r.fc
              ? this.layerElement.setAttribute('fill', this.buildColor(r.fc))
              : this.layerElement.setAttribute('fill', 'rgba(0,0,0,0)'),
            r.sc &&
              (this.layerElement.setAttribute('stroke', this.buildColor(r.sc)),
              this.layerElement.setAttribute('stroke-width', r.sw)),
            this.layerElement.setAttribute('font-size', r.finalSize);
          var i = this.globalData.fontManager.getFontByName(r.f);
          if (i.fClass) this.layerElement.setAttribute('class', i.fClass);
          else {
            this.layerElement.setAttribute('font-family', i.fFamily);
            var s = r.fWeight,
              a = r.fStyle;
            this.layerElement.setAttribute('font-style', a),
              this.layerElement.setAttribute('font-weight', s);
          }
          this.layerElement.setAttribute('aria-label', r.t);
          var n,
            o = r.l || [],
            l = !!this.globalData.fontManager.chars;
          e = o.length;
          var h,
            p = this.mHelper,
            u = '',
            c = this.data.singleShape,
            f = 0,
            m = 0,
            d = !0,
            g = 0.001 * r.tr * r.finalSize;
          if (!c || l || r.sz) {
            var y,
              v,
              b = this.textSpans.length;
            for (t = 0; t < e; t += 1)
              (l && c && 0 !== t) ||
                ((n =
                  b > t ? this.textSpans[t] : createNS(l ? 'path' : 'text')),
                b <= t &&
                  (n.setAttribute('stroke-linecap', 'butt'),
                  n.setAttribute('stroke-linejoin', 'round'),
                  n.setAttribute('stroke-miterlimit', '4'),
                  (this.textSpans[t] = n),
                  this.layerElement.appendChild(n)),
                (n.style.display = 'inherit')),
                p.reset(),
                p.scale(r.finalSize / 100, r.finalSize / 100),
                c &&
                  (o[t].n &&
                    ((f = -g), (m += r.yOffset), (m += d ? 1 : 0), (d = !1)),
                  this.applyTextPropertiesToMatrix(r, p, o[t].line, f, m),
                  (f += o[t].l || 0),
                  (f += g)),
                l
                  ? ((h = (y =
                      ((v = this.globalData.fontManager.getCharData(
                        r.finalText[t],
                        i.fStyle,
                        this.globalData.fontManager.getFontByName(r.f).fFamily
                      )) &&
                        v.data) ||
                      {}).shapes
                      ? y.shapes[0].it
                      : []),
                    c
                      ? (u += this.createPathShape(p, h))
                      : n.setAttribute('d', this.createPathShape(p, h)))
                  : (c &&
                      n.setAttribute(
                        'transform',
                        'translate(' + p.props[12] + ',' + p.props[13] + ')'
                      ),
                    (n.textContent = o[t].val),
                    n.setAttributeNS(
                      'http://www.w3.org/XML/1998/namespace',
                      'xml:space',
                      'preserve'
                    ));
            c && n && n.setAttribute('d', u);
          } else {
            var D = this.textContainer,
              x = 'start';
            switch (r.j) {
              case 1:
                x = 'end';
                break;
              case 2:
                x = 'middle';
                break;
              default:
                x = 'start';
            }
            D.setAttribute('text-anchor', x),
              D.setAttribute('letter-spacing', g);
            var E = this.buildTextContents(r.finalText);
            for (
              e = E.length, m = r.ps ? r.ps[1] + r.ascent : 0, t = 0;
              t < e;
              t += 1
            )
              ((n = this.textSpans[t] || createNS('tspan')).textContent = E[t]),
                n.setAttribute('x', 0),
                n.setAttribute('y', m),
                (n.style.display = 'inherit'),
                D.appendChild(n),
                (this.textSpans[t] = n),
                (m += r.finalLineHeight);
            this.layerElement.appendChild(D);
          }
          for (; t < this.textSpans.length; )
            (this.textSpans[t].style.display = 'none'), (t += 1);
          this._sizeChanged = !0;
        }),
        (SVGTextLottieElement.prototype.sourceRectAtTime = function () {
          if (
            (this.prepareFrame(this.comp.renderedFrame - this.data.st),
            this.renderInnerContent(),
            this._sizeChanged)
          ) {
            this._sizeChanged = !1;
            var t = this.layerElement.getBBox();
            this.bbox = {
              top: t.y,
              left: t.x,
              width: t.width,
              height: t.height,
            };
          }
          return this.bbox;
        }),
        (SVGTextLottieElement.prototype.renderInnerContent = function () {
          if (
            !this.data.singleShape &&
            (this.textAnimator.getMeasures(
              this.textProperty.currentData,
              this.lettersChangedFlag
            ),
            this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
          ) {
            var t, e;
            this._sizeChanged = !0;
            var r,
              i,
              s = this.textAnimator.renderedLetters,
              a = this.textProperty.currentData.l;
            for (e = a.length, t = 0; t < e; t += 1)
              a[t].n ||
                ((r = s[t]),
                (i = this.textSpans[t]),
                r._mdf.m && i.setAttribute('transform', r.m),
                r._mdf.o && i.setAttribute('opacity', r.o),
                r._mdf.sw && i.setAttribute('stroke-width', r.sw),
                r._mdf.sc && i.setAttribute('stroke', r.sc),
                r._mdf.fc && i.setAttribute('fill', r.fc));
          }
        }),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            SVGBaseElement,
            IShapeElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement,
          ],
          SVGShapeElement
        ),
        (SVGShapeElement.prototype.initSecondaryElement = function () {}),
        (SVGShapeElement.prototype.identityMatrix = new Matrix()),
        (SVGShapeElement.prototype.buildExpressionInterface = function () {}),
        (SVGShapeElement.prototype.createContent = function () {
          this.searchShapes(
            this.shapesData,
            this.itemsData,
            this.prevViewData,
            this.layerElement,
            0,
            [],
            !0
          ),
            this.filterUniqueShapes();
        }),
        (SVGShapeElement.prototype.filterUniqueShapes = function () {
          var t,
            e,
            r,
            i,
            s = this.shapes.length,
            a = this.stylesList.length,
            n = [],
            o = !1;
          for (r = 0; r < a; r += 1) {
            for (
              i = this.stylesList[r], o = !1, n.length = 0, t = 0;
              t < s;
              t += 1
            )
              -1 !== (e = this.shapes[t]).styles.indexOf(i) &&
                (n.push(e), (o = e._isAnimated || o));
            n.length > 1 && o && this.setShapesAsAnimated(n);
          }
        }),
        (SVGShapeElement.prototype.setShapesAsAnimated = function (t) {
          var e,
            r = t.length;
          for (e = 0; e < r; e += 1) t[e].setAsAnimated();
        }),
        (SVGShapeElement.prototype.createStyleElement = function (t, e) {
          var r,
            i = new SVGStyleData(t, e),
            s = i.pElem;
          return (
            'st' === t.ty
              ? (r = new SVGStrokeStyleData(this, t, i))
              : 'fl' === t.ty
              ? (r = new SVGFillStyleData(this, t, i))
              : ('gf' !== t.ty && 'gs' !== t.ty) ||
                ((r = new (
                  'gf' === t.ty
                    ? SVGGradientFillStyleData
                    : SVGGradientStrokeStyleData
                )(this, t, i)),
                this.globalData.defs.appendChild(r.gf),
                r.maskId &&
                  (this.globalData.defs.appendChild(r.ms),
                  this.globalData.defs.appendChild(r.of),
                  s.setAttribute(
                    'mask',
                    'url(' + locationHref + '#' + r.maskId + ')'
                  ))),
            ('st' !== t.ty && 'gs' !== t.ty) ||
              (s.setAttribute('stroke-linecap', lineCapEnum[t.lc || 2]),
              s.setAttribute('stroke-linejoin', lineJoinEnum[t.lj || 2]),
              s.setAttribute('fill-opacity', '0'),
              1 === t.lj && s.setAttribute('stroke-miterlimit', t.ml)),
            2 === t.r && s.setAttribute('fill-rule', 'evenodd'),
            t.ln && s.setAttribute('id', t.ln),
            t.cl && s.setAttribute('class', t.cl),
            t.bm && (s.style['mix-blend-mode'] = getBlendMode(t.bm)),
            this.stylesList.push(i),
            this.addToAnimatedContents(t, r),
            r
          );
        }),
        (SVGShapeElement.prototype.createGroupElement = function (t) {
          var e = new ShapeGroupData();
          return (
            t.ln && e.gr.setAttribute('id', t.ln),
            t.cl && e.gr.setAttribute('class', t.cl),
            t.bm && (e.gr.style['mix-blend-mode'] = getBlendMode(t.bm)),
            e
          );
        }),
        (SVGShapeElement.prototype.createTransformElement = function (t, e) {
          var r = TransformPropertyFactory.getTransformProperty(this, t, this),
            i = new SVGTransformData(r, r.o, e);
          return this.addToAnimatedContents(t, i), i;
        }),
        (SVGShapeElement.prototype.createShapeElement = function (t, e, r) {
          var i = 4;
          'rc' === t.ty
            ? (i = 5)
            : 'el' === t.ty
            ? (i = 6)
            : 'sr' === t.ty && (i = 7);
          var s = new SVGShapeData(
            e,
            r,
            ShapePropertyFactory.getShapeProp(this, t, i, this)
          );
          return (
            this.shapes.push(s),
            this.addShapeToModifiers(s),
            this.addToAnimatedContents(t, s),
            s
          );
        }),
        (SVGShapeElement.prototype.addToAnimatedContents = function (t, e) {
          for (var r = 0, i = this.animatedContents.length; r < i; ) {
            if (this.animatedContents[r].element === e) return;
            r += 1;
          }
          this.animatedContents.push({
            fn: SVGElementsRenderer.createRenderFunction(t),
            element: e,
            data: t,
          });
        }),
        (SVGShapeElement.prototype.setElementStyles = function (t) {
          var e,
            r = t.styles,
            i = this.stylesList.length;
          for (e = 0; e < i; e += 1)
            this.stylesList[e].closed || r.push(this.stylesList[e]);
        }),
        (SVGShapeElement.prototype.reloadShapes = function () {
          var t;
          this._isFirstFrame = !0;
          var e = this.itemsData.length;
          for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
          for (
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              this.layerElement,
              0,
              [],
              !0
            ),
              this.filterUniqueShapes(),
              e = this.dynamicProperties.length,
              t = 0;
            t < e;
            t += 1
          )
            this.dynamicProperties[t].getValue();
          this.renderModifiers();
        }),
        (SVGShapeElement.prototype.searchShapes = function (
          t,
          e,
          r,
          i,
          s,
          a,
          n
        ) {
          var o,
            l,
            h,
            p,
            u,
            c,
            f = [].concat(a),
            m = t.length - 1,
            d = [],
            g = [];
          for (o = m; o >= 0; o -= 1) {
            if (
              ((c = this.searchProcessedElement(t[o]))
                ? (e[o] = r[c - 1])
                : (t[o]._render = n),
              'fl' === t[o].ty ||
                'st' === t[o].ty ||
                'gf' === t[o].ty ||
                'gs' === t[o].ty)
            )
              c
                ? (e[o].style.closed = !1)
                : (e[o] = this.createStyleElement(t[o], s)),
                t[o]._render && i.appendChild(e[o].style.pElem),
                d.push(e[o].style);
            else if ('gr' === t[o].ty) {
              if (c)
                for (h = e[o].it.length, l = 0; l < h; l += 1)
                  e[o].prevViewData[l] = e[o].it[l];
              else e[o] = this.createGroupElement(t[o]);
              this.searchShapes(
                t[o].it,
                e[o].it,
                e[o].prevViewData,
                e[o].gr,
                s + 1,
                f,
                n
              ),
                t[o]._render && i.appendChild(e[o].gr);
            } else
              'tr' === t[o].ty
                ? (c || (e[o] = this.createTransformElement(t[o], i)),
                  (p = e[o].transform),
                  f.push(p))
                : 'sh' === t[o].ty ||
                  'rc' === t[o].ty ||
                  'el' === t[o].ty ||
                  'sr' === t[o].ty
                ? (c || (e[o] = this.createShapeElement(t[o], f, s)),
                  this.setElementStyles(e[o]))
                : 'tm' === t[o].ty ||
                  'rd' === t[o].ty ||
                  'ms' === t[o].ty ||
                  'pb' === t[o].ty
                ? (c
                    ? ((u = e[o]).closed = !1)
                    : ((u = ShapeModifiers.getModifier(t[o].ty)).init(
                        this,
                        t[o]
                      ),
                      (e[o] = u),
                      this.shapeModifiers.push(u)),
                  g.push(u))
                : 'rp' === t[o].ty &&
                  (c
                    ? ((u = e[o]).closed = !0)
                    : ((u = ShapeModifiers.getModifier(t[o].ty)),
                      (e[o] = u),
                      u.init(this, t, o, e),
                      this.shapeModifiers.push(u),
                      (n = !1)),
                  g.push(u));
            this.addProcessedElement(t[o], o + 1);
          }
          for (m = d.length, o = 0; o < m; o += 1) d[o].closed = !0;
          for (m = g.length, o = 0; o < m; o += 1) g[o].closed = !0;
        }),
        (SVGShapeElement.prototype.renderInnerContent = function () {
          var t;
          this.renderModifiers();
          var e = this.stylesList.length;
          for (t = 0; t < e; t += 1) this.stylesList[t].reset();
          for (this.renderShape(), t = 0; t < e; t += 1)
            (this.stylesList[t]._mdf || this._isFirstFrame) &&
              (this.stylesList[t].msElem &&
                (this.stylesList[t].msElem.setAttribute(
                  'd',
                  this.stylesList[t].d
                ),
                (this.stylesList[t].d = 'M0 0' + this.stylesList[t].d)),
              this.stylesList[t].pElem.setAttribute(
                'd',
                this.stylesList[t].d || 'M0 0'
              ));
        }),
        (SVGShapeElement.prototype.renderShape = function () {
          var t,
            e,
            r = this.animatedContents.length;
          for (t = 0; t < r; t += 1)
            (e = this.animatedContents[t]),
              (this._isFirstFrame || e.element._isAnimated) &&
                !0 !== e.data &&
                e.fn(e.data, e.element, this._isFirstFrame);
        }),
        (SVGShapeElement.prototype.destroy = function () {
          this.destroyBaseElement(),
            (this.shapesData = null),
            (this.itemsData = null);
        }),
        (SVGTintFilter.prototype.renderFrame = function (t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              i = this.filterManager.effectElements[2].p.v / 100;
            this.matrixFilter.setAttribute(
              'values',
              r[0] -
                e[0] +
                ' 0 0 0 ' +
                e[0] +
                ' ' +
                (r[1] - e[1]) +
                ' 0 0 0 ' +
                e[1] +
                ' ' +
                (r[2] - e[2]) +
                ' 0 0 0 ' +
                e[2] +
                ' 0 0 0 ' +
                i +
                ' 0'
            );
          }
        }),
        (SVGFillFilter.prototype.renderFrame = function (t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[2].p.v,
              r = this.filterManager.effectElements[6].p.v;
            this.matrixFilter.setAttribute(
              'values',
              '0 0 0 0 ' +
                e[0] +
                ' 0 0 0 0 ' +
                e[1] +
                ' 0 0 0 0 ' +
                e[2] +
                ' 0 0 0 ' +
                r +
                ' 0'
            );
          }
        }),
        (SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
          if (t || this.filterManager._mdf) {
            var e = 0.3 * this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              i = 3 == r ? 0 : e,
              s = 2 == r ? 0 : e;
            this.feGaussianBlur.setAttribute('stdDeviation', i + ' ' + s);
            var a =
              1 == this.filterManager.effectElements[2].p.v
                ? 'wrap'
                : 'duplicate';
            this.feGaussianBlur.setAttribute('edgeMode', a);
          }
        }),
        (SVGStrokeEffect.prototype.initialize = function () {
          var t,
            e,
            r,
            i,
            s =
              this.elem.layerElement.children ||
              this.elem.layerElement.childNodes;
          for (
            1 === this.filterManager.effectElements[1].p.v
              ? ((i = this.elem.maskManager.masksProperties.length), (r = 0))
              : (i = 1 + (r = this.filterManager.effectElements[0].p.v - 1)),
              (e = createNS('g')).setAttribute('fill', 'none'),
              e.setAttribute('stroke-linecap', 'round'),
              e.setAttribute('stroke-dashoffset', 1);
            r < i;
            r += 1
          )
            (t = createNS('path')),
              e.appendChild(t),
              this.paths.push({ p: t, m: r });
          if (3 === this.filterManager.effectElements[10].p.v) {
            var a = createNS('mask'),
              n = createElementID();
            a.setAttribute('id', n),
              a.setAttribute('mask-type', 'alpha'),
              a.appendChild(e),
              this.elem.globalData.defs.appendChild(a);
            var o = createNS('g');
            for (
              o.setAttribute('mask', 'url(' + locationHref + '#' + n + ')');
              s[0];

            )
              o.appendChild(s[0]);
            this.elem.layerElement.appendChild(o),
              (this.masker = a),
              e.setAttribute('stroke', '#fff');
          } else if (
            1 === this.filterManager.effectElements[10].p.v ||
            2 === this.filterManager.effectElements[10].p.v
          ) {
            if (2 === this.filterManager.effectElements[10].p.v)
              for (
                s =
                  this.elem.layerElement.children ||
                  this.elem.layerElement.childNodes;
                s.length;

              )
                this.elem.layerElement.removeChild(s[0]);
            this.elem.layerElement.appendChild(e),
              this.elem.layerElement.removeAttribute('mask'),
              e.setAttribute('stroke', '#fff');
          }
          (this.initialized = !0), (this.pathMasker = e);
        }),
        (SVGStrokeEffect.prototype.renderFrame = function (t) {
          var e;
          this.initialized || this.initialize();
          var r,
            i,
            s = this.paths.length;
          for (e = 0; e < s; e += 1)
            if (
              -1 !== this.paths[e].m &&
              ((r = this.elem.maskManager.viewData[this.paths[e].m]),
              (i = this.paths[e].p),
              (t || this.filterManager._mdf || r.prop._mdf) &&
                i.setAttribute('d', r.lastPath),
              t ||
                this.filterManager.effectElements[9].p._mdf ||
                this.filterManager.effectElements[4].p._mdf ||
                this.filterManager.effectElements[7].p._mdf ||
                this.filterManager.effectElements[8].p._mdf ||
                r.prop._mdf)
            ) {
              var a;
              if (
                0 !== this.filterManager.effectElements[7].p.v ||
                100 !== this.filterManager.effectElements[8].p.v
              ) {
                var n =
                    0.01 *
                    Math.min(
                      this.filterManager.effectElements[7].p.v,
                      this.filterManager.effectElements[8].p.v
                    ),
                  o =
                    0.01 *
                    Math.max(
                      this.filterManager.effectElements[7].p.v,
                      this.filterManager.effectElements[8].p.v
                    ),
                  l = i.getTotalLength();
                a = '0 0 0 ' + l * n + ' ';
                var h,
                  p = l * (o - n),
                  u =
                    1 +
                    2 *
                      this.filterManager.effectElements[4].p.v *
                      this.filterManager.effectElements[9].p.v *
                      0.01,
                  c = Math.floor(p / u);
                for (h = 0; h < c; h += 1)
                  a +=
                    '1 ' +
                    2 *
                      this.filterManager.effectElements[4].p.v *
                      this.filterManager.effectElements[9].p.v *
                      0.01 +
                    ' ';
                a += '0 ' + 10 * l + ' 0 0';
              } else
                a =
                  '1 ' +
                  2 *
                    this.filterManager.effectElements[4].p.v *
                    this.filterManager.effectElements[9].p.v *
                    0.01;
              i.setAttribute('stroke-dasharray', a);
            }
          if (
            ((t || this.filterManager.effectElements[4].p._mdf) &&
              this.pathMasker.setAttribute(
                'stroke-width',
                2 * this.filterManager.effectElements[4].p.v
              ),
            (t || this.filterManager.effectElements[6].p._mdf) &&
              this.pathMasker.setAttribute(
                'opacity',
                this.filterManager.effectElements[6].p.v
              ),
            (1 === this.filterManager.effectElements[10].p.v ||
              2 === this.filterManager.effectElements[10].p.v) &&
              (t || this.filterManager.effectElements[3].p._mdf))
          ) {
            var f = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute(
              'stroke',
              'rgb(' +
                bmFloor(255 * f[0]) +
                ',' +
                bmFloor(255 * f[1]) +
                ',' +
                bmFloor(255 * f[2]) +
                ')'
            );
          }
        }),
        (SVGTritoneFilter.prototype.renderFrame = function (t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              i = this.filterManager.effectElements[2].p.v,
              s = i[0] + ' ' + r[0] + ' ' + e[0],
              a = i[1] + ' ' + r[1] + ' ' + e[1],
              n = i[2] + ' ' + r[2] + ' ' + e[2];
            this.feFuncR.setAttribute('tableValues', s),
              this.feFuncG.setAttribute('tableValues', a),
              this.feFuncB.setAttribute('tableValues', n);
          }
        }),
        (SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
          var r = createNS(t);
          return r.setAttribute('type', 'table'), e.appendChild(r), r;
        }),
        (SVGProLevelsFilter.prototype.getTableValue = function (t, e, r, i, s) {
          for (
            var a,
              n,
              o = 0,
              l = Math.min(t, e),
              h = Math.max(t, e),
              p = Array.call(null, { length: 256 }),
              u = 0,
              c = s - i,
              f = e - t;
            o <= 256;

          )
            (n =
              (a = o / 256) <= l
                ? f < 0
                  ? s
                  : i
                : a >= h
                ? f < 0
                  ? i
                  : s
                : i + c * Math.pow((a - t) / f, 1 / r)),
              (p[u] = n),
              (u += 1),
              (o += 256 / 255);
          return p.join(' ');
        }),
        (SVGProLevelsFilter.prototype.renderFrame = function (t) {
          if (t || this.filterManager._mdf) {
            var e,
              r = this.filterManager.effectElements;
            this.feFuncRComposed &&
              (t ||
                r[3].p._mdf ||
                r[4].p._mdf ||
                r[5].p._mdf ||
                r[6].p._mdf ||
                r[7].p._mdf) &&
              ((e = this.getTableValue(
                r[3].p.v,
                r[4].p.v,
                r[5].p.v,
                r[6].p.v,
                r[7].p.v
              )),
              this.feFuncRComposed.setAttribute('tableValues', e),
              this.feFuncGComposed.setAttribute('tableValues', e),
              this.feFuncBComposed.setAttribute('tableValues', e)),
              this.feFuncR &&
                (t ||
                  r[10].p._mdf ||
                  r[11].p._mdf ||
                  r[12].p._mdf ||
                  r[13].p._mdf ||
                  r[14].p._mdf) &&
                ((e = this.getTableValue(
                  r[10].p.v,
                  r[11].p.v,
                  r[12].p.v,
                  r[13].p.v,
                  r[14].p.v
                )),
                this.feFuncR.setAttribute('tableValues', e)),
              this.feFuncG &&
                (t ||
                  r[17].p._mdf ||
                  r[18].p._mdf ||
                  r[19].p._mdf ||
                  r[20].p._mdf ||
                  r[21].p._mdf) &&
                ((e = this.getTableValue(
                  r[17].p.v,
                  r[18].p.v,
                  r[19].p.v,
                  r[20].p.v,
                  r[21].p.v
                )),
                this.feFuncG.setAttribute('tableValues', e)),
              this.feFuncB &&
                (t ||
                  r[24].p._mdf ||
                  r[25].p._mdf ||
                  r[26].p._mdf ||
                  r[27].p._mdf ||
                  r[28].p._mdf) &&
                ((e = this.getTableValue(
                  r[24].p.v,
                  r[25].p.v,
                  r[26].p.v,
                  r[27].p.v,
                  r[28].p.v
                )),
                this.feFuncB.setAttribute('tableValues', e)),
              this.feFuncA &&
                (t ||
                  r[31].p._mdf ||
                  r[32].p._mdf ||
                  r[33].p._mdf ||
                  r[34].p._mdf ||
                  r[35].p._mdf) &&
                ((e = this.getTableValue(
                  r[31].p.v,
                  r[32].p.v,
                  r[33].p.v,
                  r[34].p.v,
                  r[35].p.v
                )),
                this.feFuncA.setAttribute('tableValues', e));
          }
        }),
        (SVGDropShadowEffect.prototype.renderFrame = function (t) {
          if (t || this.filterManager._mdf) {
            if (
              ((t || this.filterManager.effectElements[4].p._mdf) &&
                this.feGaussianBlur.setAttribute(
                  'stdDeviation',
                  this.filterManager.effectElements[4].p.v / 4
                ),
              t || this.filterManager.effectElements[0].p._mdf)
            ) {
              var e = this.filterManager.effectElements[0].p.v;
              this.feFlood.setAttribute(
                'flood-color',
                rgbToHex(
                  Math.round(255 * e[0]),
                  Math.round(255 * e[1]),
                  Math.round(255 * e[2])
                )
              );
            }
            if (
              ((t || this.filterManager.effectElements[1].p._mdf) &&
                this.feFlood.setAttribute(
                  'flood-opacity',
                  this.filterManager.effectElements[1].p.v / 255
                ),
              t ||
                this.filterManager.effectElements[2].p._mdf ||
                this.filterManager.effectElements[3].p._mdf)
            ) {
              var r = this.filterManager.effectElements[3].p.v,
                i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                s = r * Math.cos(i),
                a = r * Math.sin(i);
              this.feOffset.setAttribute('dx', s),
                this.feOffset.setAttribute('dy', a);
            }
          }
        });
      var _svgMatteSymbols = [];
      function SVGMatte3Effect(t, e, r) {
        (this.initialized = !1),
          (this.filterManager = e),
          (this.filterElem = t),
          (this.elem = r),
          (r.matteElement = createNS('g')),
          r.matteElement.appendChild(r.layerElement),
          r.matteElement.appendChild(r.transformedElement),
          (r.baseElement = r.matteElement);
      }
      function SVGEffects(t) {
        var e,
          r,
          i = t.data.ef ? t.data.ef.length : 0,
          s = createElementID(),
          a = filtersFactory.createFilter(s, !0),
          n = 0;
        for (this.filters = [], e = 0; e < i; e += 1)
          (r = null),
            20 === t.data.ef[e].ty
              ? ((n += 1),
                (r = new SVGTintFilter(a, t.effectsManager.effectElements[e])))
              : 21 === t.data.ef[e].ty
              ? ((n += 1),
                (r = new SVGFillFilter(a, t.effectsManager.effectElements[e])))
              : 22 === t.data.ef[e].ty
              ? (r = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]))
              : 23 === t.data.ef[e].ty
              ? ((n += 1),
                (r = new SVGTritoneFilter(
                  a,
                  t.effectsManager.effectElements[e]
                )))
              : 24 === t.data.ef[e].ty
              ? ((n += 1),
                (r = new SVGProLevelsFilter(
                  a,
                  t.effectsManager.effectElements[e]
                )))
              : 25 === t.data.ef[e].ty
              ? ((n += 1),
                (r = new SVGDropShadowEffect(
                  a,
                  t.effectsManager.effectElements[e]
                )))
              : 28 === t.data.ef[e].ty
              ? (r = new SVGMatte3Effect(
                  a,
                  t.effectsManager.effectElements[e],
                  t
                ))
              : 29 === t.data.ef[e].ty &&
                ((n += 1),
                (r = new SVGGaussianBlurEffect(
                  a,
                  t.effectsManager.effectElements[e]
                ))),
            r && this.filters.push(r);
        n &&
          (t.globalData.defs.appendChild(a),
          t.layerElement.setAttribute(
            'filter',
            'url(' + locationHref + '#' + s + ')'
          )),
          this.filters.length && t.addRenderableComponent(this);
      }
      function CVContextData() {
        var t;
        for (
          this.saved = [],
            this.cArrPos = 0,
            this.cTr = new Matrix(),
            this.cO = 1,
            this.savedOp = createTypedArray('float32', 15),
            t = 0;
          t < 15;
          t += 1
        )
          this.saved[t] = createTypedArray('float32', 16);
        this._length = 15;
      }
      function CVBaseElement() {}
      function CVImageElement(t, e, r) {
        (this.assetData = e.getAssetData(t.refId)),
          (this.img = e.imageLoader.getAsset(this.assetData)),
          this.initElement(t, e, r);
      }
      function CVCompElement(t, e, r) {
        (this.completeLayers = !1),
          (this.layers = t.layers),
          (this.pendingElements = []),
          (this.elements = createSizedArray(this.layers.length)),
          this.initElement(t, e, r),
          (this.tm = t.tm
            ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
            : { _placeholder: !0 });
      }
      function CVMaskElement(t, e) {
        var r;
        (this.data = t),
          (this.element = e),
          (this.masksProperties = this.data.masksProperties || []),
          (this.viewData = createSizedArray(this.masksProperties.length));
        var i = this.masksProperties.length,
          s = !1;
        for (r = 0; r < i; r += 1)
          'n' !== this.masksProperties[r].mode && (s = !0),
            (this.viewData[r] = ShapePropertyFactory.getShapeProp(
              this.element,
              this.masksProperties[r],
              3
            ));
        (this.hasMasks = s), s && this.element.addRenderableComponent(this);
      }
      function CVShapeElement(t, e, r) {
        (this.shapes = []),
          (this.shapesData = t.shapes),
          (this.stylesList = []),
          (this.itemsData = []),
          (this.prevViewData = []),
          (this.shapeModifiers = []),
          (this.processedElements = []),
          (this.transformsManager = new ShapeTransformManager()),
          this.initElement(t, e, r);
      }
      function CVSolidElement(t, e, r) {
        this.initElement(t, e, r);
      }
      function CVTextElement(t, e, r) {
        (this.textSpans = []),
          (this.yOffset = 0),
          (this.fillColorAnim = !1),
          (this.strokeColorAnim = !1),
          (this.strokeWidthAnim = !1),
          (this.stroke = !1),
          (this.fill = !1),
          (this.justifyOffset = 0),
          (this.currentRender = null),
          (this.renderType = 'canvas'),
          (this.values = {
            fill: 'rgba(0,0,0,0)',
            stroke: 'rgba(0,0,0,0)',
            sWidth: 0,
            fValue: '',
          }),
          this.initElement(t, e, r);
      }
      function CVEffects() {}
      function HBaseElement() {}
      function HSolidElement(t, e, r) {
        this.initElement(t, e, r);
      }
      function HCompElement(t, e, r) {
        (this.layers = t.layers),
          (this.supports3d = !t.hasMask),
          (this.completeLayers = !1),
          (this.pendingElements = []),
          (this.elements = this.layers
            ? createSizedArray(this.layers.length)
            : []),
          this.initElement(t, e, r),
          (this.tm = t.tm
            ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
            : { _placeholder: !0 });
      }
      function HShapeElement(t, e, r) {
        (this.shapes = []),
          (this.shapesData = t.shapes),
          (this.stylesList = []),
          (this.shapeModifiers = []),
          (this.itemsData = []),
          (this.processedElements = []),
          (this.animatedContents = []),
          (this.shapesContainer = createNS('g')),
          this.initElement(t, e, r),
          (this.prevViewData = []),
          (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 });
      }
      function HTextElement(t, e, r) {
        (this.textSpans = []),
          (this.textPaths = []),
          (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }),
          (this.renderType = 'svg'),
          (this.isMasked = !1),
          this.initElement(t, e, r);
      }
      function HImageElement(t, e, r) {
        (this.assetData = e.getAssetData(t.refId)), this.initElement(t, e, r);
      }
      function HCameraElement(t, e, r) {
        this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
        var i = PropertyFactory.getProp;
        if (
          ((this.pe = i(this, t.pe, 0, 0, this)),
          t.ks.p.s
            ? ((this.px = i(this, t.ks.p.x, 1, 0, this)),
              (this.py = i(this, t.ks.p.y, 1, 0, this)),
              (this.pz = i(this, t.ks.p.z, 1, 0, this)))
            : (this.p = i(this, t.ks.p, 1, 0, this)),
          t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)),
          t.ks.or.k.length && t.ks.or.k[0].to)
        ) {
          var s,
            a = t.ks.or.k.length;
          for (s = 0; s < a; s += 1)
            (t.ks.or.k[s].to = null), (t.ks.or.k[s].ti = null);
        }
        (this.or = i(this, t.ks.or, 1, degToRads, this)),
          (this.or.sh = !0),
          (this.rx = i(this, t.ks.rx, 0, degToRads, this)),
          (this.ry = i(this, t.ks.ry, 0, degToRads, this)),
          (this.rz = i(this, t.ks.rz, 0, degToRads, this)),
          (this.mat = new Matrix()),
          (this._prevMat = new Matrix()),
          (this._isFirstFrame = !0),
          (this.finalTransform = { mProp: this });
      }
      (SVGMatte3Effect.prototype.findSymbol = function (t) {
        for (var e = 0, r = _svgMatteSymbols.length; e < r; ) {
          if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
          e += 1;
        }
        return null;
      }),
        (SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
          var r = t.layerElement.parentNode;
          if (r) {
            for (
              var i, s = r.children, a = 0, n = s.length;
              a < n && s[a] !== t.layerElement;

            )
              a += 1;
            a <= n - 2 && (i = s[a + 1]);
            var o = createNS('use');
            o.setAttribute('href', '#' + e),
              i ? r.insertBefore(o, i) : r.appendChild(o);
          }
        }),
        (SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
          if (!this.findSymbol(e)) {
            var r = createElementID(),
              i = createNS('mask');
            i.setAttribute('id', e.layerId),
              i.setAttribute('mask-type', 'alpha'),
              _svgMatteSymbols.push(e);
            var s = t.globalData.defs;
            s.appendChild(i);
            var a = createNS('symbol');
            a.setAttribute('id', r),
              this.replaceInParent(e, r),
              a.appendChild(e.layerElement),
              s.appendChild(a);
            var n = createNS('use');
            n.setAttribute('href', '#' + r),
              i.appendChild(n),
              (e.data.hd = !1),
              e.show();
          }
          t.setMatte(e.layerId);
        }),
        (SVGMatte3Effect.prototype.initialize = function () {
          for (
            var t = this.filterManager.effectElements[0].p.v,
              e = this.elem.comp.elements,
              r = 0,
              i = e.length;
            r < i;

          )
            e[r] &&
              e[r].data.ind === t &&
              this.setElementAsMask(this.elem, e[r]),
              (r += 1);
          this.initialized = !0;
        }),
        (SVGMatte3Effect.prototype.renderFrame = function () {
          this.initialized || this.initialize();
        }),
        (SVGEffects.prototype.renderFrame = function (t) {
          var e,
            r = this.filters.length;
          for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t);
        }),
        (CVContextData.prototype.duplicate = function () {
          var t = 2 * this._length,
            e = this.savedOp;
          (this.savedOp = createTypedArray('float32', t)), this.savedOp.set(e);
          var r = 0;
          for (r = this._length; r < t; r += 1)
            this.saved[r] = createTypedArray('float32', 16);
          this._length = t;
        }),
        (CVContextData.prototype.reset = function () {
          (this.cArrPos = 0), this.cTr.reset(), (this.cO = 1);
        }),
        (CVBaseElement.prototype = {
          createElements: function () {},
          initRendererElement: function () {},
          createContainerElements: function () {
            (this.canvasContext = this.globalData.canvasContext),
              (this.renderableEffectsManager = new CVEffects(this));
          },
          createContent: function () {},
          setBlendMode: function () {
            var t = this.globalData;
            if (t.blendMode !== this.data.bm) {
              t.blendMode = this.data.bm;
              var e = getBlendMode(this.data.bm);
              t.canvasContext.globalCompositeOperation = e;
            }
          },
          createRenderableComponents: function () {
            this.maskManager = new CVMaskElement(this.data, this);
          },
          hideElement: function () {
            this.hidden ||
              (this.isInRange && !this.isTransparent) ||
              (this.hidden = !0);
          },
          showElement: function () {
            this.isInRange &&
              !this.isTransparent &&
              ((this.hidden = !1),
              (this._isFirstFrame = !0),
              (this.maskManager._isFirstFrame = !0));
          },
          renderFrame: function () {
            if (!this.hidden && !this.data.hd) {
              this.renderTransform(),
                this.renderRenderable(),
                this.setBlendMode();
              var t = 0 === this.data.ty;
              this.globalData.renderer.save(t),
                this.globalData.renderer.ctxTransform(
                  this.finalTransform.mat.props
                ),
                this.globalData.renderer.ctxOpacity(
                  this.finalTransform.mProp.o.v
                ),
                this.renderInnerContent(),
                this.globalData.renderer.restore(t),
                this.maskManager.hasMasks &&
                  this.globalData.renderer.restore(!0),
                this._isFirstFrame && (this._isFirstFrame = !1);
            }
          },
          destroy: function () {
            (this.canvasContext = null),
              (this.data = null),
              (this.globalData = null),
              this.maskManager.destroy();
          },
          mHelper: new Matrix(),
        }),
        (CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement),
        (CVBaseElement.prototype.show = CVBaseElement.prototype.showElement),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            CVBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableElement,
          ],
          CVImageElement
        ),
        (CVImageElement.prototype.initElement =
          SVGShapeElement.prototype.initElement),
        (CVImageElement.prototype.prepareFrame =
          IImageElement.prototype.prepareFrame),
        (CVImageElement.prototype.createContent = function () {
          if (
            this.img.width &&
            (this.assetData.w !== this.img.width ||
              this.assetData.h !== this.img.height)
          ) {
            var t = createTag('canvas');
            (t.width = this.assetData.w), (t.height = this.assetData.h);
            var e,
              r,
              i = t.getContext('2d'),
              s = this.img.width,
              a = this.img.height,
              n = s / a,
              o = this.assetData.w / this.assetData.h,
              l =
                this.assetData.pr ||
                this.globalData.renderConfig.imagePreserveAspectRatio;
            (n > o && 'xMidYMid slice' === l) ||
            (n < o && 'xMidYMid slice' !== l)
              ? (e = (r = a) * o)
              : (r = (e = s) / o),
              i.drawImage(
                this.img,
                (s - e) / 2,
                (a - r) / 2,
                e,
                r,
                0,
                0,
                this.assetData.w,
                this.assetData.h
              ),
              (this.img = t);
          }
        }),
        (CVImageElement.prototype.renderInnerContent = function () {
          this.canvasContext.drawImage(this.img, 0, 0);
        }),
        (CVImageElement.prototype.destroy = function () {
          this.img = null;
        }),
        extendPrototype(
          [CanvasRenderer, ICompElement, CVBaseElement],
          CVCompElement
        ),
        (CVCompElement.prototype.renderInnerContent = function () {
          var t,
            e = this.canvasContext;
          for (
            e.beginPath(),
              e.moveTo(0, 0),
              e.lineTo(this.data.w, 0),
              e.lineTo(this.data.w, this.data.h),
              e.lineTo(0, this.data.h),
              e.lineTo(0, 0),
              e.clip(),
              t = this.layers.length - 1;
            t >= 0;
            t -= 1
          )
            (this.completeLayers || this.elements[t]) &&
              this.elements[t].renderFrame();
        }),
        (CVCompElement.prototype.destroy = function () {
          var t;
          for (t = this.layers.length - 1; t >= 0; t -= 1)
            this.elements[t] && this.elements[t].destroy();
          (this.layers = null), (this.elements = null);
        }),
        (CVMaskElement.prototype.renderFrame = function () {
          if (this.hasMasks) {
            var t,
              e,
              r,
              i,
              s = this.element.finalTransform.mat,
              a = this.element.canvasContext,
              n = this.masksProperties.length;
            for (a.beginPath(), t = 0; t < n; t += 1)
              if ('n' !== this.masksProperties[t].mode) {
                var o;
                this.masksProperties[t].inv &&
                  (a.moveTo(0, 0),
                  a.lineTo(this.element.globalData.compSize.w, 0),
                  a.lineTo(
                    this.element.globalData.compSize.w,
                    this.element.globalData.compSize.h
                  ),
                  a.lineTo(0, this.element.globalData.compSize.h),
                  a.lineTo(0, 0)),
                  (i = this.viewData[t].v),
                  (e = s.applyToPointArray(i.v[0][0], i.v[0][1], 0)),
                  a.moveTo(e[0], e[1]);
                var l = i._length;
                for (o = 1; o < l; o += 1)
                  (r = s.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o])),
                    a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                (r = s.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0])),
                  a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
              }
            this.element.globalData.renderer.save(!0), a.clip();
          }
        }),
        (CVMaskElement.prototype.getMaskProperty =
          MaskElement.prototype.getMaskProperty),
        (CVMaskElement.prototype.destroy = function () {
          this.element = null;
        }),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            CVBaseElement,
            IShapeElement,
            HierarchyElement,
            FrameElement,
            RenderableElement,
          ],
          CVShapeElement
        ),
        (CVShapeElement.prototype.initElement =
          RenderableDOMElement.prototype.initElement),
        (CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: !1 }),
        (CVShapeElement.prototype.dashResetter = []),
        (CVShapeElement.prototype.createContent = function () {
          this.searchShapes(
            this.shapesData,
            this.itemsData,
            this.prevViewData,
            !0,
            []
          );
        }),
        (CVShapeElement.prototype.createStyleElement = function (t, e) {
          var r = {
              data: t,
              type: t.ty,
              preTransforms: this.transformsManager.addTransformSequence(e),
              transforms: [],
              elements: [],
              closed: !0 === t.hd,
            },
            i = {};
          if (
            ('fl' === t.ty || 'st' === t.ty
              ? ((i.c = PropertyFactory.getProp(this, t.c, 1, 255, this)),
                i.c.k ||
                  (r.co =
                    'rgb(' +
                    bmFloor(i.c.v[0]) +
                    ',' +
                    bmFloor(i.c.v[1]) +
                    ',' +
                    bmFloor(i.c.v[2]) +
                    ')'))
              : ('gf' !== t.ty && 'gs' !== t.ty) ||
                ((i.s = PropertyFactory.getProp(this, t.s, 1, null, this)),
                (i.e = PropertyFactory.getProp(this, t.e, 1, null, this)),
                (i.h = PropertyFactory.getProp(
                  this,
                  t.h || { k: 0 },
                  0,
                  0.01,
                  this
                )),
                (i.a = PropertyFactory.getProp(
                  this,
                  t.a || { k: 0 },
                  0,
                  degToRads,
                  this
                )),
                (i.g = new GradientProperty(this, t.g, this))),
            (i.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this)),
            'st' === t.ty || 'gs' === t.ty)
          ) {
            if (
              ((r.lc = lineCapEnum[t.lc || 2]),
              (r.lj = lineJoinEnum[t.lj || 2]),
              1 == t.lj && (r.ml = t.ml),
              (i.w = PropertyFactory.getProp(this, t.w, 0, null, this)),
              i.w.k || (r.wi = i.w.v),
              t.d)
            ) {
              var s = new DashProperty(this, t.d, 'canvas', this);
              (i.d = s),
                i.d.k || ((r.da = i.d.dashArray), (r.do = i.d.dashoffset[0]));
            }
          } else r.r = 2 === t.r ? 'evenodd' : 'nonzero';
          return this.stylesList.push(r), (i.style = r), i;
        }),
        (CVShapeElement.prototype.createGroupElement = function () {
          return { it: [], prevViewData: [] };
        }),
        (CVShapeElement.prototype.createTransformElement = function (t) {
          return {
            transform: {
              opacity: 1,
              _opMdf: !1,
              key: this.transformsManager.getNewKey(),
              op: PropertyFactory.getProp(this, t.o, 0, 0.01, this),
              mProps: TransformPropertyFactory.getTransformProperty(
                this,
                t,
                this
              ),
            },
          };
        }),
        (CVShapeElement.prototype.createShapeElement = function (t) {
          var e = new CVShapeData(
            this,
            t,
            this.stylesList,
            this.transformsManager
          );
          return this.shapes.push(e), this.addShapeToModifiers(e), e;
        }),
        (CVShapeElement.prototype.reloadShapes = function () {
          var t;
          this._isFirstFrame = !0;
          var e = this.itemsData.length;
          for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
          for (
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              !0,
              []
            ),
              e = this.dynamicProperties.length,
              t = 0;
            t < e;
            t += 1
          )
            this.dynamicProperties[t].getValue();
          this.renderModifiers(),
            this.transformsManager.processSequences(this._isFirstFrame);
        }),
        (CVShapeElement.prototype.addTransformToStyleList = function (t) {
          var e,
            r = this.stylesList.length;
          for (e = 0; e < r; e += 1)
            this.stylesList[e].closed || this.stylesList[e].transforms.push(t);
        }),
        (CVShapeElement.prototype.removeTransformFromStyleList = function () {
          var t,
            e = this.stylesList.length;
          for (t = 0; t < e; t += 1)
            this.stylesList[t].closed || this.stylesList[t].transforms.pop();
        }),
        (CVShapeElement.prototype.closeStyles = function (t) {
          var e,
            r = t.length;
          for (e = 0; e < r; e += 1) t[e].closed = !0;
        }),
        (CVShapeElement.prototype.searchShapes = function (t, e, r, i, s) {
          var a,
            n,
            o,
            l,
            h,
            p,
            u = t.length - 1,
            c = [],
            f = [],
            m = [].concat(s);
          for (a = u; a >= 0; a -= 1) {
            if (
              ((l = this.searchProcessedElement(t[a]))
                ? (e[a] = r[l - 1])
                : (t[a]._shouldRender = i),
              'fl' === t[a].ty ||
                'st' === t[a].ty ||
                'gf' === t[a].ty ||
                'gs' === t[a].ty)
            )
              l
                ? (e[a].style.closed = !1)
                : (e[a] = this.createStyleElement(t[a], m)),
                c.push(e[a].style);
            else if ('gr' === t[a].ty) {
              if (l)
                for (o = e[a].it.length, n = 0; n < o; n += 1)
                  e[a].prevViewData[n] = e[a].it[n];
              else e[a] = this.createGroupElement(t[a]);
              this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, i, m);
            } else
              'tr' === t[a].ty
                ? (l || ((p = this.createTransformElement(t[a])), (e[a] = p)),
                  m.push(e[a]),
                  this.addTransformToStyleList(e[a]))
                : 'sh' === t[a].ty ||
                  'rc' === t[a].ty ||
                  'el' === t[a].ty ||
                  'sr' === t[a].ty
                ? l || (e[a] = this.createShapeElement(t[a]))
                : 'tm' === t[a].ty || 'rd' === t[a].ty || 'pb' === t[a].ty
                ? (l
                    ? ((h = e[a]).closed = !1)
                    : ((h = ShapeModifiers.getModifier(t[a].ty)).init(
                        this,
                        t[a]
                      ),
                      (e[a] = h),
                      this.shapeModifiers.push(h)),
                  f.push(h))
                : 'rp' === t[a].ty &&
                  (l
                    ? ((h = e[a]).closed = !0)
                    : ((h = ShapeModifiers.getModifier(t[a].ty)),
                      (e[a] = h),
                      h.init(this, t, a, e),
                      this.shapeModifiers.push(h),
                      (i = !1)),
                  f.push(h));
            this.addProcessedElement(t[a], a + 1);
          }
          for (
            this.removeTransformFromStyleList(),
              this.closeStyles(c),
              u = f.length,
              a = 0;
            a < u;
            a += 1
          )
            f[a].closed = !0;
        }),
        (CVShapeElement.prototype.renderInnerContent = function () {
          (this.transformHelper.opacity = 1),
            (this.transformHelper._opMdf = !1),
            this.renderModifiers(),
            this.transformsManager.processSequences(this._isFirstFrame),
            this.renderShape(
              this.transformHelper,
              this.shapesData,
              this.itemsData,
              !0
            );
        }),
        (CVShapeElement.prototype.renderShapeTransform = function (t, e) {
          (t._opMdf || e.op._mdf || this._isFirstFrame) &&
            ((e.opacity = t.opacity), (e.opacity *= e.op.v), (e._opMdf = !0));
        }),
        (CVShapeElement.prototype.drawLayer = function () {
          var t,
            e,
            r,
            i,
            s,
            a,
            n,
            o,
            l,
            h = this.stylesList.length,
            p = this.globalData.renderer,
            u = this.globalData.canvasContext;
          for (t = 0; t < h; t += 1)
            if (
              (('st' !== (o = (l = this.stylesList[t]).type) && 'gs' !== o) ||
                0 !== l.wi) &&
              l.data._shouldRender &&
              0 !== l.coOp &&
              0 !== this.globalData.currentGlobalAlpha
            ) {
              for (
                p.save(),
                  a = l.elements,
                  'st' === o || 'gs' === o
                    ? ((u.strokeStyle = 'st' === o ? l.co : l.grd),
                      (u.lineWidth = l.wi),
                      (u.lineCap = l.lc),
                      (u.lineJoin = l.lj),
                      (u.miterLimit = l.ml || 0))
                    : (u.fillStyle = 'fl' === o ? l.co : l.grd),
                  p.ctxOpacity(l.coOp),
                  'st' !== o && 'gs' !== o && u.beginPath(),
                  p.ctxTransform(l.preTransforms.finalTransform.props),
                  r = a.length,
                  e = 0;
                e < r;
                e += 1
              ) {
                for (
                  ('st' !== o && 'gs' !== o) ||
                    (u.beginPath(),
                    l.da && (u.setLineDash(l.da), (u.lineDashOffset = l.do))),
                    s = (n = a[e].trNodes).length,
                    i = 0;
                  i < s;
                  i += 1
                )
                  'm' === n[i].t
                    ? u.moveTo(n[i].p[0], n[i].p[1])
                    : 'c' === n[i].t
                    ? u.bezierCurveTo(
                        n[i].pts[0],
                        n[i].pts[1],
                        n[i].pts[2],
                        n[i].pts[3],
                        n[i].pts[4],
                        n[i].pts[5]
                      )
                    : u.closePath();
                ('st' !== o && 'gs' !== o) ||
                  (u.stroke(), l.da && u.setLineDash(this.dashResetter));
              }
              'st' !== o && 'gs' !== o && u.fill(l.r), p.restore();
            }
        }),
        (CVShapeElement.prototype.renderShape = function (t, e, r, i) {
          var s, a;
          for (a = t, s = e.length - 1; s >= 0; s -= 1)
            'tr' === e[s].ty
              ? ((a = r[s].transform), this.renderShapeTransform(t, a))
              : 'sh' === e[s].ty ||
                'el' === e[s].ty ||
                'rc' === e[s].ty ||
                'sr' === e[s].ty
              ? this.renderPath(e[s], r[s])
              : 'fl' === e[s].ty
              ? this.renderFill(e[s], r[s], a)
              : 'st' === e[s].ty
              ? this.renderStroke(e[s], r[s], a)
              : 'gf' === e[s].ty || 'gs' === e[s].ty
              ? this.renderGradientFill(e[s], r[s], a)
              : 'gr' === e[s].ty
              ? this.renderShape(a, e[s].it, r[s].it)
              : e[s].ty;
          i && this.drawLayer();
        }),
        (CVShapeElement.prototype.renderStyledShape = function (t, e) {
          if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
            var r,
              i,
              s,
              a = t.trNodes,
              n = e.paths,
              o = n._length;
            a.length = 0;
            var l = t.transforms.finalTransform;
            for (s = 0; s < o; s += 1) {
              var h = n.shapes[s];
              if (h && h.v) {
                for (i = h._length, r = 1; r < i; r += 1)
                  1 === r &&
                    a.push({
                      t: 'm',
                      p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0),
                    }),
                    a.push({
                      t: 'c',
                      pts: l.applyToTriplePoints(h.o[r - 1], h.i[r], h.v[r]),
                    });
                1 === i &&
                  a.push({
                    t: 'm',
                    p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0),
                  }),
                  h.c &&
                    i &&
                    (a.push({
                      t: 'c',
                      pts: l.applyToTriplePoints(h.o[r - 1], h.i[0], h.v[0]),
                    }),
                    a.push({ t: 'z' }));
              }
            }
            t.trNodes = a;
          }
        }),
        (CVShapeElement.prototype.renderPath = function (t, e) {
          if (!0 !== t.hd && t._shouldRender) {
            var r,
              i = e.styledShapes.length;
            for (r = 0; r < i; r += 1)
              this.renderStyledShape(e.styledShapes[r], e.sh);
          }
        }),
        (CVShapeElement.prototype.renderFill = function (t, e, r) {
          var i = e.style;
          (e.c._mdf || this._isFirstFrame) &&
            (i.co =
              'rgb(' +
              bmFloor(e.c.v[0]) +
              ',' +
              bmFloor(e.c.v[1]) +
              ',' +
              bmFloor(e.c.v[2]) +
              ')'),
            (e.o._mdf || r._opMdf || this._isFirstFrame) &&
              (i.coOp = e.o.v * r.opacity);
        }),
        (CVShapeElement.prototype.renderGradientFill = function (t, e, r) {
          var i,
            s = e.style;
          if (
            !s.grd ||
            e.g._mdf ||
            e.s._mdf ||
            e.e._mdf ||
            (1 !== t.t && (e.h._mdf || e.a._mdf))
          ) {
            var a,
              n = this.globalData.canvasContext,
              o = e.s.v,
              l = e.e.v;
            if (1 === t.t) i = n.createLinearGradient(o[0], o[1], l[0], l[1]);
            else {
              var h = Math.sqrt(
                  Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)
                ),
                p = Math.atan2(l[1] - o[1], l[0] - o[0]),
                u = e.h.v;
              u >= 1 ? (u = 0.99) : u <= -1 && (u = -0.99);
              var c = h * u,
                f = Math.cos(p + e.a.v) * c + o[0],
                m = Math.sin(p + e.a.v) * c + o[1];
              i = n.createRadialGradient(f, m, 0, o[0], o[1], h);
            }
            var d = t.g.p,
              g = e.g.c,
              y = 1;
            for (a = 0; a < d; a += 1)
              e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * a + 1]),
                i.addColorStop(
                  g[4 * a] / 100,
                  'rgba(' +
                    g[4 * a + 1] +
                    ',' +
                    g[4 * a + 2] +
                    ',' +
                    g[4 * a + 3] +
                    ',' +
                    y +
                    ')'
                );
            s.grd = i;
          }
          s.coOp = e.o.v * r.opacity;
        }),
        (CVShapeElement.prototype.renderStroke = function (t, e, r) {
          var i = e.style,
            s = e.d;
          s &&
            (s._mdf || this._isFirstFrame) &&
            ((i.da = s.dashArray), (i.do = s.dashoffset[0])),
            (e.c._mdf || this._isFirstFrame) &&
              (i.co =
                'rgb(' +
                bmFloor(e.c.v[0]) +
                ',' +
                bmFloor(e.c.v[1]) +
                ',' +
                bmFloor(e.c.v[2]) +
                ')'),
            (e.o._mdf || r._opMdf || this._isFirstFrame) &&
              (i.coOp = e.o.v * r.opacity),
            (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v);
        }),
        (CVShapeElement.prototype.destroy = function () {
          (this.shapesData = null),
            (this.globalData = null),
            (this.canvasContext = null),
            (this.stylesList.length = 0),
            (this.itemsData.length = 0);
        }),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            CVBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableElement,
          ],
          CVSolidElement
        ),
        (CVSolidElement.prototype.initElement =
          SVGShapeElement.prototype.initElement),
        (CVSolidElement.prototype.prepareFrame =
          IImageElement.prototype.prepareFrame),
        (CVSolidElement.prototype.renderInnerContent = function () {
          var t = this.canvasContext;
          (t.fillStyle = this.data.sc),
            t.fillRect(0, 0, this.data.sw, this.data.sh);
        }),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            CVBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableElement,
            ITextElement,
          ],
          CVTextElement
        ),
        (CVTextElement.prototype.tHelper =
          createTag('canvas').getContext('2d')),
        (CVTextElement.prototype.buildNewText = function () {
          var t = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
          var e = !1;
          t.fc
            ? ((e = !0), (this.values.fill = this.buildColor(t.fc)))
            : (this.values.fill = 'rgba(0,0,0,0)'),
            (this.fill = e);
          var r = !1;
          t.sc &&
            ((r = !0),
            (this.values.stroke = this.buildColor(t.sc)),
            (this.values.sWidth = t.sw));
          var i,
            s,
            a,
            n,
            o,
            l,
            h,
            p,
            u,
            c,
            f,
            m,
            d = this.globalData.fontManager.getFontByName(t.f),
            g = t.l,
            y = this.mHelper;
          (this.stroke = r),
            (this.values.fValue =
              t.finalSize +
              'px ' +
              this.globalData.fontManager.getFontByName(t.f).fFamily),
            (s = t.finalText.length);
          var v = this.data.singleShape,
            b = 0.001 * t.tr * t.finalSize,
            D = 0,
            x = 0,
            E = !0,
            _ = 0;
          for (i = 0; i < s; i += 1) {
            for (
              n =
                ((a = this.globalData.fontManager.getCharData(
                  t.finalText[i],
                  d.fStyle,
                  this.globalData.fontManager.getFontByName(t.f).fFamily
                )) &&
                  a.data) ||
                {},
                y.reset(),
                v &&
                  g[i].n &&
                  ((D = -b), (x += t.yOffset), (x += E ? 1 : 0), (E = !1)),
                u = (h = n.shapes ? n.shapes[0].it : []).length,
                y.scale(t.finalSize / 100, t.finalSize / 100),
                v && this.applyTextPropertiesToMatrix(t, y, g[i].line, D, x),
                f = createSizedArray(u),
                p = 0;
              p < u;
              p += 1
            ) {
              for (
                l = h[p].ks.k.i.length, c = h[p].ks.k, m = [], o = 1;
                o < l;
                o += 1
              )
                1 === o &&
                  m.push(
                    y.applyToX(c.v[0][0], c.v[0][1], 0),
                    y.applyToY(c.v[0][0], c.v[0][1], 0)
                  ),
                  m.push(
                    y.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0),
                    y.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0),
                    y.applyToX(c.i[o][0], c.i[o][1], 0),
                    y.applyToY(c.i[o][0], c.i[o][1], 0),
                    y.applyToX(c.v[o][0], c.v[o][1], 0),
                    y.applyToY(c.v[o][0], c.v[o][1], 0)
                  );
              m.push(
                y.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0),
                y.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0),
                y.applyToX(c.i[0][0], c.i[0][1], 0),
                y.applyToY(c.i[0][0], c.i[0][1], 0),
                y.applyToX(c.v[0][0], c.v[0][1], 0),
                y.applyToY(c.v[0][0], c.v[0][1], 0)
              ),
                (f[p] = m);
            }
            v && ((D += g[i].l), (D += b)),
              this.textSpans[_]
                ? (this.textSpans[_].elem = f)
                : (this.textSpans[_] = { elem: f }),
              (_ += 1);
          }
        }),
        (CVTextElement.prototype.renderInnerContent = function () {
          var t,
            e,
            r,
            i,
            s,
            a,
            n = this.canvasContext;
          (n.font = this.values.fValue),
            (n.lineCap = 'butt'),
            (n.lineJoin = 'miter'),
            (n.miterLimit = 4),
            this.data.singleShape ||
              this.textAnimator.getMeasures(
                this.textProperty.currentData,
                this.lettersChangedFlag
              );
          var o,
            l = this.textAnimator.renderedLetters,
            h = this.textProperty.currentData.l;
          e = h.length;
          var p,
            u,
            c = null,
            f = null,
            m = null;
          for (t = 0; t < e; t += 1)
            if (!h[t].n) {
              if (
                ((o = l[t]) &&
                  (this.globalData.renderer.save(),
                  this.globalData.renderer.ctxTransform(o.p),
                  this.globalData.renderer.ctxOpacity(o.o)),
                this.fill)
              ) {
                for (
                  o && o.fc
                    ? c !== o.fc && ((c = o.fc), (n.fillStyle = o.fc))
                    : c !== this.values.fill &&
                      ((c = this.values.fill),
                      (n.fillStyle = this.values.fill)),
                    i = (p = this.textSpans[t].elem).length,
                    this.globalData.canvasContext.beginPath(),
                    r = 0;
                  r < i;
                  r += 1
                )
                  for (
                    a = (u = p[r]).length,
                      this.globalData.canvasContext.moveTo(u[0], u[1]),
                      s = 2;
                    s < a;
                    s += 6
                  )
                    this.globalData.canvasContext.bezierCurveTo(
                      u[s],
                      u[s + 1],
                      u[s + 2],
                      u[s + 3],
                      u[s + 4],
                      u[s + 5]
                    );
                this.globalData.canvasContext.closePath(),
                  this.globalData.canvasContext.fill();
              }
              if (this.stroke) {
                for (
                  o && o.sw
                    ? m !== o.sw && ((m = o.sw), (n.lineWidth = o.sw))
                    : m !== this.values.sWidth &&
                      ((m = this.values.sWidth),
                      (n.lineWidth = this.values.sWidth)),
                    o && o.sc
                      ? f !== o.sc && ((f = o.sc), (n.strokeStyle = o.sc))
                      : f !== this.values.stroke &&
                        ((f = this.values.stroke),
                        (n.strokeStyle = this.values.stroke)),
                    i = (p = this.textSpans[t].elem).length,
                    this.globalData.canvasContext.beginPath(),
                    r = 0;
                  r < i;
                  r += 1
                )
                  for (
                    a = (u = p[r]).length,
                      this.globalData.canvasContext.moveTo(u[0], u[1]),
                      s = 2;
                    s < a;
                    s += 6
                  )
                    this.globalData.canvasContext.bezierCurveTo(
                      u[s],
                      u[s + 1],
                      u[s + 2],
                      u[s + 3],
                      u[s + 4],
                      u[s + 5]
                    );
                this.globalData.canvasContext.closePath(),
                  this.globalData.canvasContext.stroke();
              }
              o && this.globalData.renderer.restore();
            }
        }),
        (CVEffects.prototype.renderFrame = function () {}),
        (HBaseElement.prototype = {
          checkBlendMode: function () {},
          initRendererElement: function () {
            (this.baseElement = createTag(this.data.tg || 'div')),
              this.data.hasMask
                ? ((this.svgElement = createNS('svg')),
                  (this.layerElement = createNS('g')),
                  (this.maskedElement = this.layerElement),
                  this.svgElement.appendChild(this.layerElement),
                  this.baseElement.appendChild(this.svgElement))
                : (this.layerElement = this.baseElement),
              styleDiv(this.baseElement);
          },
          createContainerElements: function () {
            (this.renderableEffectsManager = new CVEffects(this)),
              (this.transformedElement = this.baseElement),
              (this.maskedElement = this.layerElement),
              this.data.ln &&
                this.layerElement.setAttribute('id', this.data.ln),
              this.data.cl &&
                this.layerElement.setAttribute('class', this.data.cl),
              0 !== this.data.bm && this.setBlendMode();
          },
          renderElement: function () {
            var t = this.transformedElement
              ? this.transformedElement.style
              : {};
            if (this.finalTransform._matMdf) {
              var e = this.finalTransform.mat.toCSS();
              (t.transform = e), (t.webkitTransform = e);
            }
            this.finalTransform._opMdf &&
              (t.opacity = this.finalTransform.mProp.o.v);
          },
          renderFrame: function () {
            this.data.hd ||
              this.hidden ||
              (this.renderTransform(),
              this.renderRenderable(),
              this.renderElement(),
              this.renderInnerContent(),
              this._isFirstFrame && (this._isFirstFrame = !1));
          },
          destroy: function () {
            (this.layerElement = null),
              (this.transformedElement = null),
              this.matteElement && (this.matteElement = null),
              this.maskManager &&
                (this.maskManager.destroy(), (this.maskManager = null));
          },
          createRenderableComponents: function () {
            this.maskManager = new MaskElement(
              this.data,
              this,
              this.globalData
            );
          },
          addEffects: function () {},
          setMatte: function () {},
        }),
        (HBaseElement.prototype.getBaseElement =
          SVGBaseElement.prototype.getBaseElement),
        (HBaseElement.prototype.destroyBaseElement =
          HBaseElement.prototype.destroy),
        (HBaseElement.prototype.buildElementParenting =
          HybridRenderer.prototype.buildElementParenting),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            HBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement,
          ],
          HSolidElement
        ),
        (HSolidElement.prototype.createContent = function () {
          var t;
          this.data.hasMask
            ? ((t = createNS('rect')).setAttribute('width', this.data.sw),
              t.setAttribute('height', this.data.sh),
              t.setAttribute('fill', this.data.sc),
              this.svgElement.setAttribute('width', this.data.sw),
              this.svgElement.setAttribute('height', this.data.sh))
            : (((t = createTag('div')).style.width = this.data.sw + 'px'),
              (t.style.height = this.data.sh + 'px'),
              (t.style.backgroundColor = this.data.sc)),
            this.layerElement.appendChild(t);
        }),
        extendPrototype(
          [HybridRenderer, ICompElement, HBaseElement],
          HCompElement
        ),
        (HCompElement.prototype._createBaseContainerElements =
          HCompElement.prototype.createContainerElements),
        (HCompElement.prototype.createContainerElements = function () {
          this._createBaseContainerElements(),
            this.data.hasMask
              ? (this.svgElement.setAttribute('width', this.data.w),
                this.svgElement.setAttribute('height', this.data.h),
                (this.transformedElement = this.baseElement))
              : (this.transformedElement = this.layerElement);
        }),
        (HCompElement.prototype.addTo3dContainer = function (t, e) {
          for (var r, i = 0; i < e; )
            this.elements[i] &&
              this.elements[i].getBaseElement &&
              (r = this.elements[i].getBaseElement()),
              (i += 1);
          r
            ? this.layerElement.insertBefore(t, r)
            : this.layerElement.appendChild(t);
        }),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            HSolidElement,
            SVGShapeElement,
            HBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableElement,
          ],
          HShapeElement
        ),
        (HShapeElement.prototype._renderShapeFrame =
          HShapeElement.prototype.renderInnerContent),
        (HShapeElement.prototype.createContent = function () {
          var t;
          if (((this.baseElement.style.fontSize = 0), this.data.hasMask))
            this.layerElement.appendChild(this.shapesContainer),
              (t = this.svgElement);
          else {
            t = createNS('svg');
            var e = this.comp.data ? this.comp.data : this.globalData.compSize;
            t.setAttribute('width', e.w),
              t.setAttribute('height', e.h),
              t.appendChild(this.shapesContainer),
              this.layerElement.appendChild(t);
          }
          this.searchShapes(
            this.shapesData,
            this.itemsData,
            this.prevViewData,
            this.shapesContainer,
            0,
            [],
            !0
          ),
            this.filterUniqueShapes(),
            (this.shapeCont = t);
        }),
        (HShapeElement.prototype.getTransformedPoint = function (t, e) {
          var r,
            i = t.length;
          for (r = 0; r < i; r += 1)
            e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
          return e;
        }),
        (HShapeElement.prototype.calculateShapeBoundingBox = function (t, e) {
          var r,
            i,
            s,
            a,
            n,
            o = t.sh.v,
            l = t.transformers,
            h = o._length;
          if (!(h <= 1)) {
            for (r = 0; r < h - 1; r += 1)
              (i = this.getTransformedPoint(l, o.v[r])),
                (s = this.getTransformedPoint(l, o.o[r])),
                (a = this.getTransformedPoint(l, o.i[r + 1])),
                (n = this.getTransformedPoint(l, o.v[r + 1])),
                this.checkBounds(i, s, a, n, e);
            o.c &&
              ((i = this.getTransformedPoint(l, o.v[r])),
              (s = this.getTransformedPoint(l, o.o[r])),
              (a = this.getTransformedPoint(l, o.i[0])),
              (n = this.getTransformedPoint(l, o.v[0])),
              this.checkBounds(i, s, a, n, e));
          }
        }),
        (HShapeElement.prototype.checkBounds = function (t, e, r, i, s) {
          this.getBoundsOfCurve(t, e, r, i);
          var a = this.shapeBoundingBox;
          (s.x = bmMin(a.left, s.x)),
            (s.xMax = bmMax(a.right, s.xMax)),
            (s.y = bmMin(a.top, s.y)),
            (s.yMax = bmMax(a.bottom, s.yMax));
        }),
        (HShapeElement.prototype.shapeBoundingBox = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }),
        (HShapeElement.prototype.tempBoundingBox = {
          x: 0,
          xMax: 0,
          y: 0,
          yMax: 0,
          width: 0,
          height: 0,
        }),
        (HShapeElement.prototype.getBoundsOfCurve = function (t, e, r, i) {
          for (
            var s,
              a,
              n,
              o,
              l,
              h,
              p,
              u = [
                [t[0], i[0]],
                [t[1], i[1]],
              ],
              c = 0;
            c < 2;
            ++c
          )
            (a = 6 * t[c] - 12 * e[c] + 6 * r[c]),
              (s = -3 * t[c] + 9 * e[c] - 9 * r[c] + 3 * i[c]),
              (n = 3 * e[c] - 3 * t[c]),
              (a |= 0),
              (n |= 0),
              (0 == (s |= 0) && 0 === a) ||
                (0 === s
                  ? (o = -n / a) > 0 &&
                    o < 1 &&
                    u[c].push(this.calculateF(o, t, e, r, i, c))
                  : (l = a * a - 4 * n * s) >= 0 &&
                    ((h = (-a + bmSqrt(l)) / (2 * s)) > 0 &&
                      h < 1 &&
                      u[c].push(this.calculateF(h, t, e, r, i, c)),
                    (p = (-a - bmSqrt(l)) / (2 * s)) > 0 &&
                      p < 1 &&
                      u[c].push(this.calculateF(p, t, e, r, i, c))));
          (this.shapeBoundingBox.left = bmMin.apply(null, u[0])),
            (this.shapeBoundingBox.top = bmMin.apply(null, u[1])),
            (this.shapeBoundingBox.right = bmMax.apply(null, u[0])),
            (this.shapeBoundingBox.bottom = bmMax.apply(null, u[1]));
        }),
        (HShapeElement.prototype.calculateF = function (t, e, r, i, s, a) {
          return (
            bmPow(1 - t, 3) * e[a] +
            3 * bmPow(1 - t, 2) * t * r[a] +
            3 * (1 - t) * bmPow(t, 2) * i[a] +
            bmPow(t, 3) * s[a]
          );
        }),
        (HShapeElement.prototype.calculateBoundingBox = function (t, e) {
          var r,
            i = t.length;
          for (r = 0; r < i; r += 1)
            t[r] && t[r].sh
              ? this.calculateShapeBoundingBox(t[r], e)
              : t[r] && t[r].it && this.calculateBoundingBox(t[r].it, e);
        }),
        (HShapeElement.prototype.currentBoxContains = function (t) {
          return (
            this.currentBBox.x <= t.x &&
            this.currentBBox.y <= t.y &&
            this.currentBBox.width + this.currentBBox.x >= t.x + t.width &&
            this.currentBBox.height + this.currentBBox.y >= t.y + t.height
          );
        }),
        (HShapeElement.prototype.renderInnerContent = function () {
          if (
            (this._renderShapeFrame(),
            !this.hidden && (this._isFirstFrame || this._mdf))
          ) {
            var t = this.tempBoundingBox,
              e = 999999;
            if (
              ((t.x = e),
              (t.xMax = -e),
              (t.y = e),
              (t.yMax = -e),
              this.calculateBoundingBox(this.itemsData, t),
              (t.width = t.xMax < t.x ? 0 : t.xMax - t.x),
              (t.height = t.yMax < t.y ? 0 : t.yMax - t.y),
              this.currentBoxContains(t))
            )
              return;
            var r = !1;
            if (
              (this.currentBBox.w !== t.width &&
                ((this.currentBBox.w = t.width),
                this.shapeCont.setAttribute('width', t.width),
                (r = !0)),
              this.currentBBox.h !== t.height &&
                ((this.currentBBox.h = t.height),
                this.shapeCont.setAttribute('height', t.height),
                (r = !0)),
              r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y)
            ) {
              (this.currentBBox.w = t.width),
                (this.currentBBox.h = t.height),
                (this.currentBBox.x = t.x),
                (this.currentBBox.y = t.y),
                this.shapeCont.setAttribute(
                  'viewBox',
                  this.currentBBox.x +
                    ' ' +
                    this.currentBBox.y +
                    ' ' +
                    this.currentBBox.w +
                    ' ' +
                    this.currentBBox.h
                );
              var i = this.shapeCont.style,
                s =
                  'translate(' +
                  this.currentBBox.x +
                  'px,' +
                  this.currentBBox.y +
                  'px)';
              (i.transform = s), (i.webkitTransform = s);
            }
          }
        }),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            HBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement,
            ITextElement,
          ],
          HTextElement
        ),
        (HTextElement.prototype.createContent = function () {
          if (((this.isMasked = this.checkMasks()), this.isMasked)) {
            (this.renderType = 'svg'),
              (this.compW = this.comp.data.w),
              (this.compH = this.comp.data.h),
              this.svgElement.setAttribute('width', this.compW),
              this.svgElement.setAttribute('height', this.compH);
            var t = createNS('g');
            this.maskedElement.appendChild(t), (this.innerElem = t);
          } else
            (this.renderType = 'html'), (this.innerElem = this.layerElement);
          this.checkParenting();
        }),
        (HTextElement.prototype.buildNewText = function () {
          var t = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
          var e = this.innerElem.style,
            r = t.fc ? this.buildColor(t.fc) : 'rgba(0,0,0,0)';
          (e.fill = r),
            (e.color = r),
            t.sc &&
              ((e.stroke = this.buildColor(t.sc)),
              (e.strokeWidth = t.sw + 'px'));
          var i,
            s,
            a = this.globalData.fontManager.getFontByName(t.f);
          if (!this.globalData.fontManager.chars)
            if (
              ((e.fontSize = t.finalSize + 'px'),
              (e.lineHeight = t.finalSize + 'px'),
              a.fClass)
            )
              this.innerElem.className = a.fClass;
            else {
              e.fontFamily = a.fFamily;
              var n = t.fWeight,
                o = t.fStyle;
              (e.fontStyle = o), (e.fontWeight = n);
            }
          var l,
            h,
            p,
            u = t.l;
          s = u.length;
          var c,
            f = this.mHelper,
            m = '',
            d = 0;
          for (i = 0; i < s; i += 1) {
            if (
              (this.globalData.fontManager.chars
                ? (this.textPaths[d]
                    ? (l = this.textPaths[d])
                    : ((l = createNS('path')).setAttribute(
                        'stroke-linecap',
                        lineCapEnum[1]
                      ),
                      l.setAttribute('stroke-linejoin', lineJoinEnum[2]),
                      l.setAttribute('stroke-miterlimit', '4')),
                  this.isMasked ||
                    (this.textSpans[d]
                      ? (p = (h = this.textSpans[d]).children[0])
                      : (((h = createTag('div')).style.lineHeight = 0),
                        (p = createNS('svg')).appendChild(l),
                        styleDiv(h))))
                : this.isMasked
                ? (l = this.textPaths[d] ? this.textPaths[d] : createNS('text'))
                : this.textSpans[d]
                ? ((h = this.textSpans[d]), (l = this.textPaths[d]))
                : (styleDiv((h = createTag('span'))),
                  styleDiv((l = createTag('span'))),
                  h.appendChild(l)),
              this.globalData.fontManager.chars)
            ) {
              var g,
                y = this.globalData.fontManager.getCharData(
                  t.finalText[i],
                  a.fStyle,
                  this.globalData.fontManager.getFontByName(t.f).fFamily
                );
              if (
                ((g = y ? y.data : null),
                f.reset(),
                g &&
                  g.shapes &&
                  ((c = g.shapes[0].it),
                  f.scale(t.finalSize / 100, t.finalSize / 100),
                  (m = this.createPathShape(f, c)),
                  l.setAttribute('d', m)),
                this.isMasked)
              )
                this.innerElem.appendChild(l);
              else {
                if ((this.innerElem.appendChild(h), g && g.shapes)) {
                  document.body.appendChild(p);
                  var v = p.getBBox();
                  p.setAttribute('width', v.width + 2),
                    p.setAttribute('height', v.height + 2),
                    p.setAttribute(
                      'viewBox',
                      v.x -
                        1 +
                        ' ' +
                        (v.y - 1) +
                        ' ' +
                        (v.width + 2) +
                        ' ' +
                        (v.height + 2)
                    );
                  var b = p.style,
                    D = 'translate(' + (v.x - 1) + 'px,' + (v.y - 1) + 'px)';
                  (b.transform = D),
                    (b.webkitTransform = D),
                    (u[i].yOffset = v.y - 1);
                } else p.setAttribute('width', 1), p.setAttribute('height', 1);
                h.appendChild(p);
              }
            } else if (
              ((l.textContent = u[i].val),
              l.setAttributeNS(
                'http://www.w3.org/XML/1998/namespace',
                'xml:space',
                'preserve'
              ),
              this.isMasked)
            )
              this.innerElem.appendChild(l);
            else {
              this.innerElem.appendChild(h);
              var x = l.style,
                E = 'translate3d(0,' + -t.finalSize / 1.2 + 'px,0)';
              (x.transform = E), (x.webkitTransform = E);
            }
            this.isMasked ? (this.textSpans[d] = l) : (this.textSpans[d] = h),
              (this.textSpans[d].style.display = 'block'),
              (this.textPaths[d] = l),
              (d += 1);
          }
          for (; d < this.textSpans.length; )
            (this.textSpans[d].style.display = 'none'), (d += 1);
        }),
        (HTextElement.prototype.renderInnerContent = function () {
          var t;
          if (this.data.singleShape) {
            if (!this._isFirstFrame && !this.lettersChangedFlag) return;
            if (this.isMasked && this.finalTransform._matMdf) {
              this.svgElement.setAttribute(
                'viewBox',
                -this.finalTransform.mProp.p.v[0] +
                  ' ' +
                  -this.finalTransform.mProp.p.v[1] +
                  ' ' +
                  this.compW +
                  ' ' +
                  this.compH
              ),
                (t = this.svgElement.style);
              var e =
                'translate(' +
                -this.finalTransform.mProp.p.v[0] +
                'px,' +
                -this.finalTransform.mProp.p.v[1] +
                'px)';
              (t.transform = e), (t.webkitTransform = e);
            }
          }
          if (
            (this.textAnimator.getMeasures(
              this.textProperty.currentData,
              this.lettersChangedFlag
            ),
            this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
          ) {
            var r,
              i,
              s,
              a,
              n,
              o = 0,
              l = this.textAnimator.renderedLetters,
              h = this.textProperty.currentData.l;
            for (i = h.length, r = 0; r < i; r += 1)
              h[r].n
                ? (o += 1)
                : ((a = this.textSpans[r]),
                  (n = this.textPaths[r]),
                  (s = l[o]),
                  (o += 1),
                  s._mdf.m &&
                    (this.isMasked
                      ? a.setAttribute('transform', s.m)
                      : ((a.style.webkitTransform = s.m),
                        (a.style.transform = s.m))),
                  (a.style.opacity = s.o),
                  s.sw && s._mdf.sw && n.setAttribute('stroke-width', s.sw),
                  s.sc && s._mdf.sc && n.setAttribute('stroke', s.sc),
                  s.fc &&
                    s._mdf.fc &&
                    (n.setAttribute('fill', s.fc), (n.style.color = s.fc)));
            if (
              this.innerElem.getBBox &&
              !this.hidden &&
              (this._isFirstFrame || this._mdf)
            ) {
              var p = this.innerElem.getBBox();
              if (
                (this.currentBBox.w !== p.width &&
                  ((this.currentBBox.w = p.width),
                  this.svgElement.setAttribute('width', p.width)),
                this.currentBBox.h !== p.height &&
                  ((this.currentBBox.h = p.height),
                  this.svgElement.setAttribute('height', p.height)),
                this.currentBBox.w !== p.width + 2 ||
                  this.currentBBox.h !== p.height + 2 ||
                  this.currentBBox.x !== p.x - 1 ||
                  this.currentBBox.y !== p.y - 1)
              ) {
                (this.currentBBox.w = p.width + 2),
                  (this.currentBBox.h = p.height + 2),
                  (this.currentBBox.x = p.x - 1),
                  (this.currentBBox.y = p.y - 1),
                  this.svgElement.setAttribute(
                    'viewBox',
                    this.currentBBox.x +
                      ' ' +
                      this.currentBBox.y +
                      ' ' +
                      this.currentBBox.w +
                      ' ' +
                      this.currentBBox.h
                  ),
                  (t = this.svgElement.style);
                var u =
                  'translate(' +
                  this.currentBBox.x +
                  'px,' +
                  this.currentBBox.y +
                  'px)';
                (t.transform = u), (t.webkitTransform = u);
              }
            }
          }
        }),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            HBaseElement,
            HSolidElement,
            HierarchyElement,
            FrameElement,
            RenderableElement,
          ],
          HImageElement
        ),
        (HImageElement.prototype.createContent = function () {
          var t = this.globalData.getAssetsPath(this.assetData),
            e = new Image();
          this.data.hasMask
            ? ((this.imageElem = createNS('image')),
              this.imageElem.setAttribute('width', this.assetData.w + 'px'),
              this.imageElem.setAttribute('height', this.assetData.h + 'px'),
              this.imageElem.setAttributeNS(
                'http://www.w3.org/1999/xlink',
                'href',
                t
              ),
              this.layerElement.appendChild(this.imageElem),
              this.baseElement.setAttribute('width', this.assetData.w),
              this.baseElement.setAttribute('height', this.assetData.h))
            : this.layerElement.appendChild(e),
            (e.crossOrigin = 'anonymous'),
            (e.src = t),
            this.data.ln && this.baseElement.setAttribute('id', this.data.ln);
        }),
        extendPrototype(
          [BaseElement, FrameElement, HierarchyElement],
          HCameraElement
        ),
        (HCameraElement.prototype.setup = function () {
          var t,
            e,
            r,
            i,
            s = this.comp.threeDElements.length;
          for (t = 0; t < s; t += 1)
            if ('3d' === (e = this.comp.threeDElements[t]).type) {
              (r = e.perspectiveElem.style), (i = e.container.style);
              var a = this.pe.v + 'px',
                n = '0px 0px 0px',
                o = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
              (r.perspective = a),
                (r.webkitPerspective = a),
                (i.transformOrigin = n),
                (i.mozTransformOrigin = n),
                (i.webkitTransformOrigin = n),
                (r.transform = o),
                (r.webkitTransform = o);
            }
        }),
        (HCameraElement.prototype.createElements = function () {}),
        (HCameraElement.prototype.hide = function () {}),
        (HCameraElement.prototype.renderFrame = function () {
          var t,
            e,
            r = this._isFirstFrame;
          if (this.hierarchy)
            for (e = this.hierarchy.length, t = 0; t < e; t += 1)
              r = this.hierarchy[t].finalTransform.mProp._mdf || r;
          if (
            r ||
            this.pe._mdf ||
            (this.p && this.p._mdf) ||
            (this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) ||
            this.rx._mdf ||
            this.ry._mdf ||
            this.rz._mdf ||
            this.or._mdf ||
            (this.a && this.a._mdf)
          ) {
            if ((this.mat.reset(), this.hierarchy))
              for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                var i = this.hierarchy[t].finalTransform.mProp;
                this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]),
                  this.mat
                    .rotateX(-i.or.v[0])
                    .rotateY(-i.or.v[1])
                    .rotateZ(i.or.v[2]),
                  this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v),
                  this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]),
                  this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
              }
            if (
              (this.p
                ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2])
                : this.mat.translate(-this.px.v, -this.py.v, this.pz.v),
              this.a)
            ) {
              var s;
              s = this.p
                ? [
                    this.p.v[0] - this.a.v[0],
                    this.p.v[1] - this.a.v[1],
                    this.p.v[2] - this.a.v[2],
                  ]
                : [
                    this.px.v - this.a.v[0],
                    this.py.v - this.a.v[1],
                    this.pz.v - this.a.v[2],
                  ];
              var a = Math.sqrt(
                  Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)
                ),
                n = [s[0] / a, s[1] / a, s[2] / a],
                o = Math.sqrt(n[2] * n[2] + n[0] * n[0]),
                l = Math.atan2(n[1], o),
                h = Math.atan2(n[0], -n[2]);
              this.mat.rotateY(h).rotateX(-l);
            }
            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),
              this.mat
                .rotateX(-this.or.v[0])
                .rotateY(-this.or.v[1])
                .rotateZ(this.or.v[2]),
              this.mat.translate(
                this.globalData.compSize.w / 2,
                this.globalData.compSize.h / 2,
                0
              ),
              this.mat.translate(0, 0, this.pe.v);
            var p = !this._prevMat.equals(this.mat);
            if ((p || this.pe._mdf) && this.comp.threeDElements) {
              var u, c, f;
              for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                if ('3d' === (u = this.comp.threeDElements[t]).type) {
                  if (p) {
                    var m = this.mat.toCSS();
                    ((f = u.container.style).transform = m),
                      (f.webkitTransform = m);
                  }
                  this.pe._mdf &&
                    (((c = u.perspectiveElem.style).perspective =
                      this.pe.v + 'px'),
                    (c.webkitPerspective = this.pe.v + 'px'));
                }
              this.mat.clone(this._prevMat);
            }
          }
          this._isFirstFrame = !1;
        }),
        (HCameraElement.prototype.prepareFrame = function (t) {
          this.prepareProperties(t, !0);
        }),
        (HCameraElement.prototype.destroy = function () {}),
        (HCameraElement.prototype.getBaseElement = function () {
          return null;
        });
      var animationManager = (function () {
          var t = {},
            e = [],
            r = 0,
            i = 0,
            s = 0,
            a = !0,
            n = !1;
          function o(t) {
            for (var r = 0, s = t.target; r < i; )
              e[r].animation === s &&
                (e.splice(r, 1), (r -= 1), (i -= 1), s.isPaused || p()),
                (r += 1);
          }
          function l(t, r) {
            if (!t) return null;
            for (var s = 0; s < i; ) {
              if (e[s].elem === t && null !== e[s].elem) return e[s].animation;
              s += 1;
            }
            var a = new AnimationItem();
            return u(a, t), a.setData(t, r), a;
          }
          function h() {
            (s += 1), m();
          }
          function p() {
            s -= 1;
          }
          function u(t, r) {
            t.addEventListener('destroy', o),
              t.addEventListener('_active', h),
              t.addEventListener('_idle', p),
              e.push({ elem: r, animation: t }),
              (i += 1);
          }
          function c(t) {
            var o,
              l = t - r;
            for (o = 0; o < i; o += 1) e[o].animation.advanceTime(l);
            (r = t), s && !n ? window.requestAnimationFrame(c) : (a = !0);
          }
          function f(t) {
            (r = t), window.requestAnimationFrame(c);
          }
          function m() {
            !n && s && a && (window.requestAnimationFrame(f), (a = !1));
          }
          return (
            (t.registerAnimation = l),
            (t.loadAnimation = function (t) {
              var e = new AnimationItem();
              return u(e, null), e.setParams(t), e;
            }),
            (t.setSpeed = function (t, r) {
              var s;
              for (s = 0; s < i; s += 1) e[s].animation.setSpeed(t, r);
            }),
            (t.setDirection = function (t, r) {
              var s;
              for (s = 0; s < i; s += 1) e[s].animation.setDirection(t, r);
            }),
            (t.play = function (t) {
              var r;
              for (r = 0; r < i; r += 1) e[r].animation.play(t);
            }),
            (t.pause = function (t) {
              var r;
              for (r = 0; r < i; r += 1) e[r].animation.pause(t);
            }),
            (t.stop = function (t) {
              var r;
              for (r = 0; r < i; r += 1) e[r].animation.stop(t);
            }),
            (t.togglePause = function (t) {
              var r;
              for (r = 0; r < i; r += 1) e[r].animation.togglePause(t);
            }),
            (t.searchAnimations = function (t, e, r) {
              var i,
                s = [].concat(
                  [].slice.call(document.getElementsByClassName('lottie')),
                  [].slice.call(document.getElementsByClassName('bodymovin'))
                ),
                a = s.length;
              for (i = 0; i < a; i += 1)
                r && s[i].setAttribute('data-bm-type', r), l(s[i], t);
              if (e && 0 === a) {
                r || (r = 'svg');
                var n = document.getElementsByTagName('body')[0];
                n.innerText = '';
                var o = createTag('div');
                (o.style.width = '100%'),
                  (o.style.height = '100%'),
                  o.setAttribute('data-bm-type', r),
                  n.appendChild(o),
                  l(o, t);
              }
            }),
            (t.resize = function () {
              var t;
              for (t = 0; t < i; t += 1) e[t].animation.resize();
            }),
            (t.goToAndStop = function (t, r, s) {
              var a;
              for (a = 0; a < i; a += 1) e[a].animation.goToAndStop(t, r, s);
            }),
            (t.destroy = function (t) {
              var r;
              for (r = i - 1; r >= 0; r -= 1) e[r].animation.destroy(t);
            }),
            (t.freeze = function () {
              n = !0;
            }),
            (t.unfreeze = function () {
              (n = !1), m();
            }),
            (t.setVolume = function (t, r) {
              var s;
              for (s = 0; s < i; s += 1) e[s].animation.setVolume(t, r);
            }),
            (t.mute = function (t) {
              var r;
              for (r = 0; r < i; r += 1) e[r].animation.mute(t);
            }),
            (t.unmute = function (t) {
              var r;
              for (r = 0; r < i; r += 1) e[r].animation.unmute(t);
            }),
            (t.getRegisteredAnimations = function () {
              var t,
                r = e.length,
                i = [];
              for (t = 0; t < r; t += 1) i.push(e[t].animation);
              return i;
            }),
            t
          );
        })(),
        AnimationItem = function () {
          (this._cbs = []),
            (this.name = ''),
            (this.path = ''),
            (this.isLoaded = !1),
            (this.currentFrame = 0),
            (this.currentRawFrame = 0),
            (this.firstFrame = 0),
            (this.totalFrames = 0),
            (this.frameRate = 0),
            (this.frameMult = 0),
            (this.playSpeed = 1),
            (this.playDirection = 1),
            (this.playCount = 0),
            (this.animationData = {}),
            (this.assets = []),
            (this.isPaused = !0),
            (this.autoplay = !1),
            (this.loop = !0),
            (this.renderer = null),
            (this.animationID = createElementID()),
            (this.assetsPath = ''),
            (this.timeCompleted = 0),
            (this.segmentPos = 0),
            (this.isSubframeEnabled = subframeEnabled),
            (this.segments = []),
            (this._idle = !0),
            (this._completedLoop = !1),
            (this.projectInterface = ProjectInterface()),
            (this.imagePreloader = new ImagePreloader()),
            (this.audioController = audioControllerFactory()),
            (this.markers = []);
        };
      extendPrototype([BaseEvent], AnimationItem),
        (AnimationItem.prototype.setParams = function (t) {
          (t.wrapper || t.container) &&
            (this.wrapper = t.wrapper || t.container);
          var e = 'svg';
          switch (
            (t.animType ? (e = t.animType) : t.renderer && (e = t.renderer), e)
          ) {
            case 'canvas':
              this.renderer = new CanvasRenderer(this, t.rendererSettings);
              break;
            case 'svg':
              this.renderer = new SVGRenderer(this, t.rendererSettings);
              break;
            default:
              this.renderer = new HybridRenderer(this, t.rendererSettings);
          }
          this.imagePreloader.setCacheType(e, this.renderer.globalData.defs),
            this.renderer.setProjectInterface(this.projectInterface),
            (this.animType = e),
            '' === t.loop ||
            null === t.loop ||
            void 0 === t.loop ||
            !0 === t.loop
              ? (this.loop = !0)
              : !1 === t.loop
              ? (this.loop = !1)
              : (this.loop = parseInt(t.loop, 10)),
            (this.autoplay = !('autoplay' in t) || t.autoplay),
            (this.name = t.name ? t.name : ''),
            (this.autoloadSegments =
              !Object.prototype.hasOwnProperty.call(t, 'autoloadSegments') ||
              t.autoloadSegments),
            (this.assetsPath = t.assetsPath),
            (this.initialSegment = t.initialSegment),
            t.audioFactory &&
              this.audioController.setAudioFactory(t.audioFactory),
            t.animationData
              ? this.configAnimation(t.animationData)
              : t.path &&
                (-1 !== t.path.lastIndexOf('\\')
                  ? (this.path = t.path.substr(0, t.path.lastIndexOf('\\') + 1))
                  : (this.path = t.path.substr(0, t.path.lastIndexOf('/') + 1)),
                (this.fileName = t.path.substr(t.path.lastIndexOf('/') + 1)),
                (this.fileName = this.fileName.substr(
                  0,
                  this.fileName.lastIndexOf('.json')
                )),
                assetLoader.load(
                  t.path,
                  this.configAnimation.bind(this),
                  function () {
                    this.trigger('data_failed');
                  }.bind(this)
                ));
        }),
        (AnimationItem.prototype.setData = function (t, e) {
          e && 'object' != typeof e && (e = JSON.parse(e));
          var r = { wrapper: t, animationData: e },
            i = t.attributes;
          (r.path = i.getNamedItem('data-animation-path')
            ? i.getNamedItem('data-animation-path').value
            : i.getNamedItem('data-bm-path')
            ? i.getNamedItem('data-bm-path').value
            : i.getNamedItem('bm-path')
            ? i.getNamedItem('bm-path').value
            : ''),
            (r.animType = i.getNamedItem('data-anim-type')
              ? i.getNamedItem('data-anim-type').value
              : i.getNamedItem('data-bm-type')
              ? i.getNamedItem('data-bm-type').value
              : i.getNamedItem('bm-type')
              ? i.getNamedItem('bm-type').value
              : i.getNamedItem('data-bm-renderer')
              ? i.getNamedItem('data-bm-renderer').value
              : i.getNamedItem('bm-renderer')
              ? i.getNamedItem('bm-renderer').value
              : 'canvas');
          var s = i.getNamedItem('data-anim-loop')
            ? i.getNamedItem('data-anim-loop').value
            : i.getNamedItem('data-bm-loop')
            ? i.getNamedItem('data-bm-loop').value
            : i.getNamedItem('bm-loop')
            ? i.getNamedItem('bm-loop').value
            : '';
          'false' === s
            ? (r.loop = !1)
            : 'true' === s
            ? (r.loop = !0)
            : '' !== s && (r.loop = parseInt(s, 10));
          var a = i.getNamedItem('data-anim-autoplay')
            ? i.getNamedItem('data-anim-autoplay').value
            : i.getNamedItem('data-bm-autoplay')
            ? i.getNamedItem('data-bm-autoplay').value
            : !i.getNamedItem('bm-autoplay') ||
              i.getNamedItem('bm-autoplay').value;
          (r.autoplay = 'false' !== a),
            (r.name = i.getNamedItem('data-name')
              ? i.getNamedItem('data-name').value
              : i.getNamedItem('data-bm-name')
              ? i.getNamedItem('data-bm-name').value
              : i.getNamedItem('bm-name')
              ? i.getNamedItem('bm-name').value
              : ''),
            'false' ===
              (i.getNamedItem('data-anim-prerender')
                ? i.getNamedItem('data-anim-prerender').value
                : i.getNamedItem('data-bm-prerender')
                ? i.getNamedItem('data-bm-prerender').value
                : i.getNamedItem('bm-prerender')
                ? i.getNamedItem('bm-prerender').value
                : '') && (r.prerender = !1),
            this.setParams(r);
        }),
        (AnimationItem.prototype.includeLayers = function (t) {
          t.op > this.animationData.op &&
            ((this.animationData.op = t.op),
            (this.totalFrames = Math.floor(t.op - this.animationData.ip)));
          var e,
            r,
            i = this.animationData.layers,
            s = i.length,
            a = t.layers,
            n = a.length;
          for (r = 0; r < n; r += 1)
            for (e = 0; e < s; ) {
              if (i[e].id === a[r].id) {
                i[e] = a[r];
                break;
              }
              e += 1;
            }
          if (
            ((t.chars || t.fonts) &&
              (this.renderer.globalData.fontManager.addChars(t.chars),
              this.renderer.globalData.fontManager.addFonts(
                t.fonts,
                this.renderer.globalData.defs
              )),
            t.assets)
          )
            for (s = t.assets.length, e = 0; e < s; e += 1)
              this.animationData.assets.push(t.assets[e]);
          (this.animationData.__complete = !1),
            dataManager.completeData(
              this.animationData,
              this.renderer.globalData.fontManager
            ),
            this.renderer.includeLayers(t.layers),
            expressionsPlugin && expressionsPlugin.initExpressions(this),
            this.loadNextSegment();
        }),
        (AnimationItem.prototype.loadNextSegment = function () {
          var t = this.animationData.segments;
          if (!t || 0 === t.length || !this.autoloadSegments)
            return (
              this.trigger('data_ready'),
              void (this.timeCompleted = this.totalFrames)
            );
          var e = t.shift();
          this.timeCompleted = e.time * this.frameRate;
          var r = this.path + this.fileName + '_' + this.segmentPos + '.json';
          (this.segmentPos += 1),
            assetLoader.load(
              r,
              this.includeLayers.bind(this),
              function () {
                this.trigger('data_failed');
              }.bind(this)
            );
        }),
        (AnimationItem.prototype.loadSegments = function () {
          this.animationData.segments ||
            (this.timeCompleted = this.totalFrames),
            this.loadNextSegment();
        }),
        (AnimationItem.prototype.imagesLoaded = function () {
          this.trigger('loaded_images'), this.checkLoaded();
        }),
        (AnimationItem.prototype.preloadImages = function () {
          this.imagePreloader.setAssetsPath(this.assetsPath),
            this.imagePreloader.setPath(this.path),
            this.imagePreloader.loadAssets(
              this.animationData.assets,
              this.imagesLoaded.bind(this)
            );
        }),
        (AnimationItem.prototype.configAnimation = function (t) {
          if (this.renderer)
            try {
              (this.animationData = t),
                this.initialSegment
                  ? ((this.totalFrames = Math.floor(
                      this.initialSegment[1] - this.initialSegment[0]
                    )),
                    (this.firstFrame = Math.round(this.initialSegment[0])))
                  : ((this.totalFrames = Math.floor(
                      this.animationData.op - this.animationData.ip
                    )),
                    (this.firstFrame = Math.round(this.animationData.ip))),
                this.renderer.configAnimation(t),
                t.assets || (t.assets = []),
                (this.assets = this.animationData.assets),
                (this.frameRate = this.animationData.fr),
                (this.frameMult = this.animationData.fr / 1e3),
                this.renderer.searchExtraCompositions(t.assets),
                (this.markers = markerParser(t.markers || [])),
                this.trigger('config_ready'),
                this.preloadImages(),
                this.loadSegments(),
                this.updaFrameModifier(),
                this.waitForFontsLoaded(),
                this.isPaused && this.audioController.pause();
            } catch (e) {
              this.triggerConfigError(e);
            }
        }),
        (AnimationItem.prototype.waitForFontsLoaded = function () {
          this.renderer &&
            (this.renderer.globalData.fontManager.isLoaded
              ? this.checkLoaded()
              : setTimeout(this.waitForFontsLoaded.bind(this), 20));
        }),
        (AnimationItem.prototype.checkLoaded = function () {
          !this.isLoaded &&
            this.renderer.globalData.fontManager.isLoaded &&
            (this.imagePreloader.loadedImages() ||
              'canvas' !== this.renderer.rendererType) &&
            this.imagePreloader.loadedFootages() &&
            ((this.isLoaded = !0),
            dataManager.completeData(
              this.animationData,
              this.renderer.globalData.fontManager
            ),
            expressionsPlugin && expressionsPlugin.initExpressions(this),
            this.renderer.initItems(),
            setTimeout(
              function () {
                this.trigger('DOMLoaded');
              }.bind(this),
              0
            ),
            this.gotoFrame(),
            this.autoplay && this.play());
        }),
        (AnimationItem.prototype.resize = function () {
          this.renderer.updateContainerSize();
        }),
        (AnimationItem.prototype.setSubframe = function (t) {
          this.isSubframeEnabled = !!t;
        }),
        (AnimationItem.prototype.gotoFrame = function () {
          (this.currentFrame = this.isSubframeEnabled
            ? this.currentRawFrame
            : ~~this.currentRawFrame),
            this.timeCompleted !== this.totalFrames &&
              this.currentFrame > this.timeCompleted &&
              (this.currentFrame = this.timeCompleted),
            this.trigger('enterFrame'),
            this.renderFrame();
        }),
        (AnimationItem.prototype.renderFrame = function () {
          if (!1 !== this.isLoaded && this.renderer)
            try {
              this.renderer.renderFrame(this.currentFrame + this.firstFrame);
            } catch (t) {
              this.triggerRenderFrameError(t);
            }
        }),
        (AnimationItem.prototype.play = function (t) {
          (t && this.name !== t) ||
            (!0 === this.isPaused &&
              ((this.isPaused = !1),
              this.audioController.resume(),
              this._idle && ((this._idle = !1), this.trigger('_active'))));
        }),
        (AnimationItem.prototype.pause = function (t) {
          (t && this.name !== t) ||
            (!1 === this.isPaused &&
              ((this.isPaused = !0),
              (this._idle = !0),
              this.trigger('_idle'),
              this.audioController.pause()));
        }),
        (AnimationItem.prototype.togglePause = function (t) {
          (t && this.name !== t) ||
            (!0 === this.isPaused ? this.play() : this.pause());
        }),
        (AnimationItem.prototype.stop = function (t) {
          (t && this.name !== t) ||
            (this.pause(),
            (this.playCount = 0),
            (this._completedLoop = !1),
            this.setCurrentRawFrameValue(0));
        }),
        (AnimationItem.prototype.getMarkerData = function (t) {
          for (var e, r = 0; r < this.markers.length; r += 1)
            if ((e = this.markers[r]).payload && e.payload.name === t) return e;
          return null;
        }),
        (AnimationItem.prototype.goToAndStop = function (t, e, r) {
          if (!r || this.name === r) {
            var i = Number(t);
            if (isNaN(i)) {
              var s = this.getMarkerData(t);
              s && this.goToAndStop(s.time, !0);
            } else
              e
                ? this.setCurrentRawFrameValue(t)
                : this.setCurrentRawFrameValue(t * this.frameModifier);
            this.pause();
          }
        }),
        (AnimationItem.prototype.goToAndPlay = function (t, e, r) {
          if (!r || this.name === r) {
            var i = Number(t);
            if (isNaN(i)) {
              var s = this.getMarkerData(t);
              s &&
                (s.duration
                  ? this.playSegments([s.time, s.time + s.duration], !0)
                  : this.goToAndStop(s.time, !0));
            } else this.goToAndStop(i, e, r);
            this.play();
          }
        }),
        (AnimationItem.prototype.advanceTime = function (t) {
          if (!0 !== this.isPaused && !1 !== this.isLoaded) {
            var e = this.currentRawFrame + t * this.frameModifier,
              r = !1;
            e >= this.totalFrames - 1 && this.frameModifier > 0
              ? this.loop && this.playCount !== this.loop
                ? e >= this.totalFrames
                  ? ((this.playCount += 1),
                    this.checkSegments(e % this.totalFrames) ||
                      (this.setCurrentRawFrameValue(e % this.totalFrames),
                      (this._completedLoop = !0),
                      this.trigger('loopComplete')))
                  : this.setCurrentRawFrameValue(e)
                : this.checkSegments(
                    e > this.totalFrames ? e % this.totalFrames : 0
                  ) || ((r = !0), (e = this.totalFrames - 1))
              : e < 0
              ? this.checkSegments(e % this.totalFrames) ||
                (!this.loop || (this.playCount-- <= 0 && !0 !== this.loop)
                  ? ((r = !0), (e = 0))
                  : (this.setCurrentRawFrameValue(
                      this.totalFrames + (e % this.totalFrames)
                    ),
                    this._completedLoop
                      ? this.trigger('loopComplete')
                      : (this._completedLoop = !0)))
              : this.setCurrentRawFrameValue(e),
              r &&
                (this.setCurrentRawFrameValue(e),
                this.pause(),
                this.trigger('complete'));
          }
        }),
        (AnimationItem.prototype.adjustSegment = function (t, e) {
          (this.playCount = 0),
            t[1] < t[0]
              ? (this.frameModifier > 0 &&
                  (this.playSpeed < 0
                    ? this.setSpeed(-this.playSpeed)
                    : this.setDirection(-1)),
                (this.totalFrames = t[0] - t[1]),
                (this.timeCompleted = this.totalFrames),
                (this.firstFrame = t[1]),
                this.setCurrentRawFrameValue(this.totalFrames - 0.001 - e))
              : t[1] > t[0] &&
                (this.frameModifier < 0 &&
                  (this.playSpeed < 0
                    ? this.setSpeed(-this.playSpeed)
                    : this.setDirection(1)),
                (this.totalFrames = t[1] - t[0]),
                (this.timeCompleted = this.totalFrames),
                (this.firstFrame = t[0]),
                this.setCurrentRawFrameValue(0.001 + e)),
            this.trigger('segmentStart');
        }),
        (AnimationItem.prototype.setSegment = function (t, e) {
          var r = -1;
          this.isPaused &&
            (this.currentRawFrame + this.firstFrame < t
              ? (r = t)
              : this.currentRawFrame + this.firstFrame > e && (r = e - t)),
            (this.firstFrame = t),
            (this.totalFrames = e - t),
            (this.timeCompleted = this.totalFrames),
            -1 !== r && this.goToAndStop(r, !0);
        }),
        (AnimationItem.prototype.playSegments = function (t, e) {
          if ((e && (this.segments.length = 0), 'object' == typeof t[0])) {
            var r,
              i = t.length;
            for (r = 0; r < i; r += 1) this.segments.push(t[r]);
          } else this.segments.push(t);
          this.segments.length &&
            e &&
            this.adjustSegment(this.segments.shift(), 0),
            this.isPaused && this.play();
        }),
        (AnimationItem.prototype.resetSegments = function (t) {
          (this.segments.length = 0),
            this.segments.push([this.animationData.ip, this.animationData.op]),
            t && this.checkSegments(0);
        }),
        (AnimationItem.prototype.checkSegments = function (t) {
          return (
            !!this.segments.length &&
            (this.adjustSegment(this.segments.shift(), t), !0)
          );
        }),
        (AnimationItem.prototype.destroy = function (t) {
          (t && this.name !== t) ||
            !this.renderer ||
            (this.renderer.destroy(),
            this.imagePreloader.destroy(),
            this.trigger('destroy'),
            (this._cbs = null),
            (this.onEnterFrame = null),
            (this.onLoopComplete = null),
            (this.onComplete = null),
            (this.onSegmentStart = null),
            (this.onDestroy = null),
            (this.renderer = null),
            (this.renderer = null),
            (this.imagePreloader = null),
            (this.projectInterface = null));
        }),
        (AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
          (this.currentRawFrame = t), this.gotoFrame();
        }),
        (AnimationItem.prototype.setSpeed = function (t) {
          (this.playSpeed = t), this.updaFrameModifier();
        }),
        (AnimationItem.prototype.setDirection = function (t) {
          (this.playDirection = t < 0 ? -1 : 1), this.updaFrameModifier();
        }),
        (AnimationItem.prototype.setVolume = function (t, e) {
          (e && this.name !== e) || this.audioController.setVolume(t);
        }),
        (AnimationItem.prototype.getVolume = function () {
          return this.audioController.getVolume();
        }),
        (AnimationItem.prototype.mute = function (t) {
          (t && this.name !== t) || this.audioController.mute();
        }),
        (AnimationItem.prototype.unmute = function (t) {
          (t && this.name !== t) || this.audioController.unmute();
        }),
        (AnimationItem.prototype.updaFrameModifier = function () {
          (this.frameModifier =
            this.frameMult * this.playSpeed * this.playDirection),
            this.audioController.setRate(this.playSpeed * this.playDirection);
        }),
        (AnimationItem.prototype.getPath = function () {
          return this.path;
        }),
        (AnimationItem.prototype.getAssetsPath = function (t) {
          var e = '';
          if (t.e) e = t.p;
          else if (this.assetsPath) {
            var r = t.p;
            -1 !== r.indexOf('images/') && (r = r.split('/')[1]),
              (e = this.assetsPath + r);
          } else (e = this.path), (e += t.u ? t.u : ''), (e += t.p);
          return e;
        }),
        (AnimationItem.prototype.getAssetData = function (t) {
          for (var e = 0, r = this.assets.length; e < r; ) {
            if (t === this.assets[e].id) return this.assets[e];
            e += 1;
          }
          return null;
        }),
        (AnimationItem.prototype.hide = function () {
          this.renderer.hide();
        }),
        (AnimationItem.prototype.show = function () {
          this.renderer.show();
        }),
        (AnimationItem.prototype.getDuration = function (t) {
          return t ? this.totalFrames : this.totalFrames / this.frameRate;
        }),
        (AnimationItem.prototype.trigger = function (t) {
          if (this._cbs && this._cbs[t])
            switch (t) {
              case 'enterFrame':
                this.triggerEvent(
                  t,
                  new BMEnterFrameEvent(
                    t,
                    this.currentFrame,
                    this.totalFrames,
                    this.frameModifier
                  )
                );
                break;
              case 'loopComplete':
                this.triggerEvent(
                  t,
                  new BMCompleteLoopEvent(
                    t,
                    this.loop,
                    this.playCount,
                    this.frameMult
                  )
                );
                break;
              case 'complete':
                this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                break;
              case 'segmentStart':
                this.triggerEvent(
                  t,
                  new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)
                );
                break;
              case 'destroy':
                this.triggerEvent(t, new BMDestroyEvent(t, this));
                break;
              default:
                this.triggerEvent(t);
            }
          'enterFrame' === t &&
            this.onEnterFrame &&
            this.onEnterFrame.call(
              this,
              new BMEnterFrameEvent(
                t,
                this.currentFrame,
                this.totalFrames,
                this.frameMult
              )
            ),
            'loopComplete' === t &&
              this.onLoopComplete &&
              this.onLoopComplete.call(
                this,
                new BMCompleteLoopEvent(
                  t,
                  this.loop,
                  this.playCount,
                  this.frameMult
                )
              ),
            'complete' === t &&
              this.onComplete &&
              this.onComplete.call(
                this,
                new BMCompleteEvent(t, this.frameMult)
              ),
            'segmentStart' === t &&
              this.onSegmentStart &&
              this.onSegmentStart.call(
                this,
                new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)
              ),
            'destroy' === t &&
              this.onDestroy &&
              this.onDestroy.call(this, new BMDestroyEvent(t, this));
        }),
        (AnimationItem.prototype.triggerRenderFrameError = function (t) {
          var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
          this.triggerEvent('error', e),
            this.onError && this.onError.call(this, e);
        }),
        (AnimationItem.prototype.triggerConfigError = function (t) {
          var e = new BMConfigErrorEvent(t, this.currentFrame);
          this.triggerEvent('error', e),
            this.onError && this.onError.call(this, e);
        });
      var Expressions = (function () {
        var t = {
          initExpressions: function (t) {
            var e = 0,
              r = [];
            (t.renderer.compInterface = CompExpressionInterface(t.renderer)),
              t.renderer.globalData.projectInterface.registerComposition(
                t.renderer
              ),
              (t.renderer.globalData.pushExpression = function () {
                e += 1;
              }),
              (t.renderer.globalData.popExpression = function () {
                0 == (e -= 1) &&
                  (function () {
                    var t,
                      e = r.length;
                    for (t = 0; t < e; t += 1) r[t].release();
                    r.length = 0;
                  })();
              }),
              (t.renderer.globalData.registerExpressionProperty = function (t) {
                -1 === r.indexOf(t) && r.push(t);
              });
          },
        };
        return t;
      })();
      expressionsPlugin = Expressions;
      var ExpressionManager = (function () {
          var ob = {},
            Math = BMMath;
          function initiateExpression(elem, data, property) {
            var val = data.x,
              needsVelocity = /velocity(?![\w\d])/.test(val),
              _needsRandom = -1 !== val.indexOf('random'),
              elemType = elem.data.ty,
              transform,
              content,
              effect,
              thisProperty = property,
              thisLayer,
              velocityAtTime,
              scoped_bm_rt;
            (thisProperty.valueAtTime = thisProperty.getValueAtTime),
              Object.defineProperty(thisProperty, 'value', {
                get: function () {
                  return thisProperty.v;
                },
              }),
              (elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate),
              (elem.comp.displayStartTime = 0),
              elem.data.ip,
              elem.comp.globalData.frameRate,
              elem.data.op,
              elem.comp.globalData.frameRate,
              elem.data.sw && elem.data.sw,
              elem.data.sh && elem.data.sh,
              elem.data.nm;
            var expression_function = eval(
                '[function _expression_function(){' +
                  val +
                  ';scoped_bm_rt=$bm_rt}]'
              )[0],
              time,
              value;
            function seedRandom(t) {
              BMMath.seedrandom(randSeed + t);
            }
            property.kf && data.k.length,
              !this.data || this.data.hd,
              function (t, e) {
                var r,
                  i,
                  s = this.pv.length ? this.pv.length : 1,
                  a = createTypedArray('float32', s),
                  n = Math.floor(5 * time);
                for (r = 0, i = 0; r < n; ) {
                  for (i = 0; i < s; i += 1)
                    a[i] += -e + 2 * e * BMMath.random();
                  r += 1;
                }
                var o = 5 * time,
                  l = o - Math.floor(o),
                  h = createTypedArray('float32', s);
                if (s > 1) {
                  for (i = 0; i < s; i += 1)
                    h[i] =
                      this.pv[i] + a[i] + (-e + 2 * e * BMMath.random()) * l;
                  return h;
                }
                return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * l;
              }.bind(this),
              thisProperty.loopIn && thisProperty.loopIn.bind(thisProperty),
              thisProperty.loopOut && thisProperty.loopOut.bind(thisProperty),
              thisProperty.smooth && thisProperty.smooth.bind(thisProperty),
              this.getValueAtTime && this.getValueAtTime.bind(this),
              this.getVelocityAtTime &&
                (velocityAtTime = this.getVelocityAtTime.bind(this)),
              elem.comp.globalData.projectInterface.bind(
                elem.comp.globalData.projectInterface
              ),
              elem.data.ind;
            var hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
              parent,
              randSeed = Math.floor(1e6 * Math.random());
            function executeExpression(t) {
              return (
                (value = t),
                _needsRandom && seedRandom(randSeed),
                this.frameExpressionId === elem.globalData.frameId &&
                'textSelector' !== this.propType
                  ? value
                  : (this.propType,
                    thisLayer ||
                      (elem.layerInterface.text,
                      (thisLayer = elem.layerInterface),
                      elem.comp.compInterface,
                      thisLayer.toWorld.bind(thisLayer),
                      thisLayer.fromWorld.bind(thisLayer),
                      thisLayer.fromComp.bind(thisLayer),
                      thisLayer.toComp.bind(thisLayer),
                      thisLayer.mask && thisLayer.mask.bind(thisLayer)),
                    transform ||
                      (transform = elem.layerInterface('ADBE Transform Group')),
                    4 !== elemType ||
                      content ||
                      (content = thisLayer('ADBE Root Vectors Group')),
                    effect || (effect = thisLayer(4)),
                    (hasParent = !(
                      !elem.hierarchy || !elem.hierarchy.length
                    )) &&
                      !parent &&
                      (parent = elem.hierarchy[0].layerInterface),
                    (time =
                      this.comp.renderedFrame / this.comp.globalData.frameRate),
                    needsVelocity && velocityAtTime(time),
                    expression_function(),
                    (this.frameExpressionId = elem.globalData.frameId),
                    scoped_bm_rt.propType,
                    scoped_bm_rt)
              );
            }
            return elem.globalData, executeExpression;
          }
          return (
            BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, 'easeIn').get,
            BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, 'easeOut')
              .get,
            BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, 'easeInOut').get,
            (ob.initiateExpression = initiateExpression),
            ob
          );
        })(),
        expressionHelpers = {
          searchExpressions: function (t, e, r) {
            e.x &&
              ((r.k = !0),
              (r.x = !0),
              (r.initiateExpression = ExpressionManager.initiateExpression),
              r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)));
          },
          getSpeedAtTime: function (t) {
            var e = this.getValueAtTime(t),
              r = this.getValueAtTime(t + -0.01),
              i = 0;
            if (e.length) {
              var s;
              for (s = 0; s < e.length; s += 1) i += Math.pow(r[s] - e[s], 2);
              i = 100 * Math.sqrt(i);
            } else i = 0;
            return i;
          },
          getVelocityAtTime: function (t) {
            if (void 0 !== this.vel) return this.vel;
            var e,
              r,
              i = -0.001,
              s = this.getValueAtTime(t),
              a = this.getValueAtTime(t + i);
            if (s.length)
              for (
                e = createTypedArray('float32', s.length), r = 0;
                r < s.length;
                r += 1
              )
                e[r] = (a[r] - s[r]) / i;
            else e = (a - s) / i;
            return e;
          },
          getValueAtTime: function (t) {
            return (
              (t *= this.elem.globalData.frameRate),
              (t -= this.offsetTime) !== this._cachingAtTime.lastFrame &&
                ((this._cachingAtTime.lastIndex =
                  this._cachingAtTime.lastFrame < t
                    ? this._cachingAtTime.lastIndex
                    : 0),
                (this._cachingAtTime.value = this.interpolateValue(
                  t,
                  this._cachingAtTime
                )),
                (this._cachingAtTime.lastFrame = t)),
              this._cachingAtTime.value
            );
          },
          getStaticValueAtTime: function () {
            return this.pv;
          },
          setGroupProperty: function (t) {
            this.propertyGroup = t;
          },
        };
      !(function () {
        function t(t, e, r) {
          if (!this.k || !this.keyframes) return this.pv;
          t = t ? t.toLowerCase() : '';
          var i,
            s,
            a,
            n,
            o,
            l = this.comp.renderedFrame,
            h = this.keyframes,
            p = h[h.length - 1].t;
          if (l <= p) return this.pv;
          if (
            (r
              ? (s =
                  p -
                  (i = e
                    ? Math.abs(p - this.elem.comp.globalData.frameRate * e)
                    : Math.max(0, p - this.elem.data.ip)))
              : ((!e || e > h.length - 1) && (e = h.length - 1),
                (i = p - (s = h[h.length - 1 - e].t))),
            'pingpong' === t)
          ) {
            if (Math.floor((l - s) / i) % 2 != 0)
              return this.getValueAtTime(
                (i - ((l - s) % i) + s) / this.comp.globalData.frameRate,
                0
              );
          } else {
            if ('offset' === t) {
              var u = this.getValueAtTime(
                  s / this.comp.globalData.frameRate,
                  0
                ),
                c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                f = this.getValueAtTime(
                  (((l - s) % i) + s) / this.comp.globalData.frameRate,
                  0
                ),
                m = Math.floor((l - s) / i);
              if (this.pv.length) {
                for (n = (o = new Array(u.length)).length, a = 0; a < n; a += 1)
                  o[a] = (c[a] - u[a]) * m + f[a];
                return o;
              }
              return (c - u) * m + f;
            }
            if ('continue' === t) {
              var d = this.getValueAtTime(
                  p / this.comp.globalData.frameRate,
                  0
                ),
                g = this.getValueAtTime(
                  (p - 0.001) / this.comp.globalData.frameRate,
                  0
                );
              if (this.pv.length) {
                for (n = (o = new Array(d.length)).length, a = 0; a < n; a += 1)
                  o[a] =
                    d[a] +
                    ((d[a] - g[a]) *
                      ((l - p) / this.comp.globalData.frameRate)) /
                      5e-4;
                return o;
              }
              return d + ((l - p) / 0.001) * (d - g);
            }
          }
          return this.getValueAtTime(
            (((l - s) % i) + s) / this.comp.globalData.frameRate,
            0
          );
        }
        function e(t, e, r) {
          if (!this.k) return this.pv;
          t = t ? t.toLowerCase() : '';
          var i,
            s,
            a,
            n,
            o,
            l = this.comp.renderedFrame,
            h = this.keyframes,
            p = h[0].t;
          if (l >= p) return this.pv;
          if (
            (r
              ? (s =
                  p +
                  (i = e
                    ? Math.abs(this.elem.comp.globalData.frameRate * e)
                    : Math.max(0, this.elem.data.op - p)))
              : ((!e || e > h.length - 1) && (e = h.length - 1),
                (i = (s = h[e].t) - p)),
            'pingpong' === t)
          ) {
            if (Math.floor((p - l) / i) % 2 == 0)
              return this.getValueAtTime(
                (((p - l) % i) + p) / this.comp.globalData.frameRate,
                0
              );
          } else {
            if ('offset' === t) {
              var u = this.getValueAtTime(
                  p / this.comp.globalData.frameRate,
                  0
                ),
                c = this.getValueAtTime(s / this.comp.globalData.frameRate, 0),
                f = this.getValueAtTime(
                  (i - ((p - l) % i) + p) / this.comp.globalData.frameRate,
                  0
                ),
                m = Math.floor((p - l) / i) + 1;
              if (this.pv.length) {
                for (n = (o = new Array(u.length)).length, a = 0; a < n; a += 1)
                  o[a] = f[a] - (c[a] - u[a]) * m;
                return o;
              }
              return f - (c - u) * m;
            }
            if ('continue' === t) {
              var d = this.getValueAtTime(
                  p / this.comp.globalData.frameRate,
                  0
                ),
                g = this.getValueAtTime(
                  (p + 0.001) / this.comp.globalData.frameRate,
                  0
                );
              if (this.pv.length) {
                for (n = (o = new Array(d.length)).length, a = 0; a < n; a += 1)
                  o[a] = d[a] + ((d[a] - g[a]) * (p - l)) / 0.001;
                return o;
              }
              return d + ((d - g) * (p - l)) / 0.001;
            }
          }
          return this.getValueAtTime(
            (i - (((p - l) % i) + p)) / this.comp.globalData.frameRate,
            0
          );
        }
        function r(t, e) {
          if (!this.k) return this.pv;
          if (((t = 0.5 * (t || 0.4)), (e = Math.floor(e || 5)) <= 1))
            return this.pv;
          var r,
            i,
            s = this.comp.renderedFrame / this.comp.globalData.frameRate,
            a = s - t,
            n = e > 1 ? (s + t - a) / (e - 1) : 1,
            o = 0,
            l = 0;
          for (
            r = this.pv.length
              ? createTypedArray('float32', this.pv.length)
              : 0;
            o < e;

          ) {
            if (((i = this.getValueAtTime(a + o * n)), this.pv.length))
              for (l = 0; l < this.pv.length; l += 1) r[l] += i[l];
            else r += i;
            o += 1;
          }
          if (this.pv.length) for (l = 0; l < this.pv.length; l += 1) r[l] /= e;
          else r /= e;
          return r;
        }
        function i(t) {
          this._transformCachingAtTime ||
            (this._transformCachingAtTime = { v: new Matrix() });
          var e = this._transformCachingAtTime.v;
          if (
            (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1)
          ) {
            var r = this.a.getValueAtTime(t);
            e.translate(
              -r[0] * this.a.mult,
              -r[1] * this.a.mult,
              r[2] * this.a.mult
            );
          }
          if (this.appliedTransformations < 2) {
            var i = this.s.getValueAtTime(t);
            e.scale(i[0] * this.s.mult, i[1] * this.s.mult, i[2] * this.s.mult);
          }
          if (this.sk && this.appliedTransformations < 3) {
            var s = this.sk.getValueAtTime(t),
              a = this.sa.getValueAtTime(t);
            e.skewFromAxis(-s * this.sk.mult, a * this.sa.mult);
          }
          if (this.r && this.appliedTransformations < 4) {
            var n = this.r.getValueAtTime(t);
            e.rotate(-n * this.r.mult);
          } else if (!this.r && this.appliedTransformations < 4) {
            var o = this.rz.getValueAtTime(t),
              l = this.ry.getValueAtTime(t),
              h = this.rx.getValueAtTime(t),
              p = this.or.getValueAtTime(t);
            e.rotateZ(-o * this.rz.mult)
              .rotateY(l * this.ry.mult)
              .rotateX(h * this.rx.mult)
              .rotateZ(-p[2] * this.or.mult)
              .rotateY(p[1] * this.or.mult)
              .rotateX(p[0] * this.or.mult);
          }
          if (this.data.p && this.data.p.s) {
            var u = this.px.getValueAtTime(t),
              c = this.py.getValueAtTime(t);
            if (this.data.p.z) {
              var f = this.pz.getValueAtTime(t);
              e.translate(
                u * this.px.mult,
                c * this.py.mult,
                -f * this.pz.mult
              );
            } else e.translate(u * this.px.mult, c * this.py.mult, 0);
          } else {
            var m = this.p.getValueAtTime(t);
            e.translate(
              m[0] * this.p.mult,
              m[1] * this.p.mult,
              -m[2] * this.p.mult
            );
          }
          return e;
        }
        function s() {
          return this.v.clone(new Matrix());
        }
        var a = TransformPropertyFactory.getTransformProperty;
        TransformPropertyFactory.getTransformProperty = function (t, e, r) {
          var n = a(t, e, r);
          return (
            n.dynamicProperties.length
              ? (n.getValueAtTime = i.bind(n))
              : (n.getValueAtTime = s.bind(n)),
            (n.setGroupProperty = expressionHelpers.setGroupProperty),
            n
          );
        };
        var n = PropertyFactory.getProp;
        PropertyFactory.getProp = function (i, s, a, o, l) {
          var h = n(i, s, a, o, l);
          h.kf
            ? (h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h))
            : (h.getValueAtTime =
                expressionHelpers.getStaticValueAtTime.bind(h)),
            (h.setGroupProperty = expressionHelpers.setGroupProperty),
            (h.loopOut = t),
            (h.loopIn = e),
            (h.smooth = r),
            (h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h)),
            (h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h)),
            (h.numKeys = 1 === s.a ? s.k.length : 0),
            (h.propertyIndex = s.ix);
          var p = 0;
          return (
            0 !== a &&
              (p = createTypedArray(
                'float32',
                1 === s.a ? s.k[0].s.length : s.k.length
              )),
            (h._cachingAtTime = {
              lastFrame: initialDefaultFrame,
              lastIndex: 0,
              value: p,
            }),
            expressionHelpers.searchExpressions(i, s, h),
            h.k && l.addDynamicProperty(h),
            h
          );
        };
        var o = ShapePropertyFactory.getConstructorFunction(),
          l = ShapePropertyFactory.getKeyframedConstructorFunction();
        function h() {}
        (h.prototype = {
          vertices: function (t, e) {
            this.k && this.getValue();
            var r,
              i = this.v;
            void 0 !== e && (i = this.getValueAtTime(e, 0));
            var s = i._length,
              a = i[t],
              n = i.v,
              o = createSizedArray(s);
            for (r = 0; r < s; r += 1)
              o[r] =
                'i' === t || 'o' === t
                  ? [a[r][0] - n[r][0], a[r][1] - n[r][1]]
                  : [a[r][0], a[r][1]];
            return o;
          },
          points: function (t) {
            return this.vertices('v', t);
          },
          inTangents: function (t) {
            return this.vertices('i', t);
          },
          outTangents: function (t) {
            return this.vertices('o', t);
          },
          isClosed: function () {
            return this.v.c;
          },
          pointOnPath: function (t, e) {
            var r = this.v;
            void 0 !== e && (r = this.getValueAtTime(e, 0)),
              this._segmentsLength ||
                (this._segmentsLength = bez.getSegmentsLength(r));
            for (
              var i,
                s = this._segmentsLength,
                a = s.lengths,
                n = s.totalLength * t,
                o = 0,
                l = a.length,
                h = 0;
              o < l;

            ) {
              if (h + a[o].addedLength > n) {
                var p = o,
                  u = r.c && o === l - 1 ? 0 : o + 1,
                  c = (n - h) / a[o].addedLength;
                i = bez.getPointInSegment(
                  r.v[p],
                  r.v[u],
                  r.o[p],
                  r.i[u],
                  c,
                  a[o]
                );
                break;
              }
              (h += a[o].addedLength), (o += 1);
            }
            return (
              i ||
                (i = r.c
                  ? [r.v[0][0], r.v[0][1]]
                  : [r.v[r._length - 1][0], r.v[r._length - 1][1]]),
              i
            );
          },
          vectorOnPath: function (t, e, r) {
            1 == t ? (t = this.v.c) : 0 == t && (t = 0.999);
            var i = this.pointOnPath(t, e),
              s = this.pointOnPath(t + 0.001, e),
              a = s[0] - i[0],
              n = s[1] - i[1],
              o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2));
            return 0 === o
              ? [0, 0]
              : 'tangent' === r
              ? [a / o, n / o]
              : [-n / o, a / o];
          },
          tangentOnPath: function (t, e) {
            return this.vectorOnPath(t, e, 'tangent');
          },
          normalOnPath: function (t, e) {
            return this.vectorOnPath(t, e, 'normal');
          },
          setGroupProperty: expressionHelpers.setGroupProperty,
          getValueAtTime: expressionHelpers.getStaticValueAtTime,
        }),
          extendPrototype([h], o),
          extendPrototype([h], l),
          (l.prototype.getValueAtTime = function (t) {
            return (
              this._cachingAtTime ||
                (this._cachingAtTime = {
                  shapeValue: shapePool.clone(this.pv),
                  lastIndex: 0,
                  lastTime: initialDefaultFrame,
                }),
              (t *= this.elem.globalData.frameRate),
              (t -= this.offsetTime) !== this._cachingAtTime.lastTime &&
                ((this._cachingAtTime.lastIndex =
                  this._cachingAtTime.lastTime < t
                    ? this._caching.lastIndex
                    : 0),
                (this._cachingAtTime.lastTime = t),
                this.interpolateShape(
                  t,
                  this._cachingAtTime.shapeValue,
                  this._cachingAtTime
                )),
              this._cachingAtTime.shapeValue
            );
          }),
          (l.prototype.initiateExpression =
            ExpressionManager.initiateExpression);
        var p = ShapePropertyFactory.getShapeProp;
        ShapePropertyFactory.getShapeProp = function (t, e, r, i, s) {
          var a = p(t, e, r, i, s);
          return (
            (a.propertyIndex = e.ix),
            (a.lock = !1),
            3 === r
              ? expressionHelpers.searchExpressions(t, e.pt, a)
              : 4 === r && expressionHelpers.searchExpressions(t, e.ks, a),
            a.k && t.addDynamicProperty(a),
            a
          );
        };
      })(),
        (TextProperty.prototype.getExpressionValue = function (t, e) {
          var r = this.calculateExpression(e);
          if (t.t !== r) {
            var i = {};
            return (
              this.copyData(i, t), (i.t = r.toString()), (i.__complete = !1), i
            );
          }
          return t;
        }),
        (TextProperty.prototype.searchProperty = function () {
          var t = this.searchKeyframes(),
            e = this.searchExpressions();
          return (this.kf = t || e), this.kf;
        }),
        (TextProperty.prototype.searchExpressions = function () {
          return this.data.d.x
            ? ((this.calculateExpression =
                ExpressionManager.initiateExpression.bind(this)(
                  this.elem,
                  this.data.d,
                  this
                )),
              this.addEffect(this.getExpressionValue.bind(this)),
              !0)
            : null;
        });
      var ShapePathInterface = function (t, e, r) {
          var i = e.sh;
          function s(t) {
            return 'Shape' === t ||
              'shape' === t ||
              'Path' === t ||
              'path' === t ||
              'ADBE Vector Shape' === t ||
              2 === t
              ? s.path
              : null;
          }
          var a = propertyGroupFactory(s, r);
          return (
            i.setGroupProperty(PropertyInterface('Path', a)),
            Object.defineProperties(s, {
              path: {
                get: function () {
                  return i.k && i.getValue(), i;
                },
              },
              shape: {
                get: function () {
                  return i.k && i.getValue(), i;
                },
              },
              _name: { value: t.nm },
              ix: { value: t.ix },
              propertyIndex: { value: t.ix },
              mn: { value: t.mn },
              propertyGroup: { value: r },
            }),
            s
          );
        },
        propertyGroupFactory = function (t, e) {
          return function (r) {
            return (r = void 0 === r ? 1 : r) <= 0 ? t : e(r - 1);
          };
        },
        PropertyInterface = function (t, e) {
          var r = { _name: t };
          return function (t) {
            return (t = void 0 === t ? 1 : t) <= 0 ? r : e(t - 1);
          };
        },
        ShapeExpressionInterface = (function () {
          function t(t, n, c) {
            var f,
              m = [],
              d = t ? t.length : 0;
            for (f = 0; f < d; f += 1)
              'gr' === t[f].ty
                ? m.push(e(t[f], n[f], c))
                : 'fl' === t[f].ty
                ? m.push(r(t[f], n[f], c))
                : 'st' === t[f].ty
                ? m.push(s(t[f], n[f], c))
                : 'tm' === t[f].ty
                ? m.push(a(t[f], n[f], c))
                : 'tr' === t[f].ty ||
                  ('el' === t[f].ty
                    ? m.push(o(t[f], n[f], c))
                    : 'sr' === t[f].ty
                    ? m.push(l(t[f], n[f], c))
                    : 'sh' === t[f].ty
                    ? m.push(ShapePathInterface(t[f], n[f], c))
                    : 'rc' === t[f].ty
                    ? m.push(h(t[f], n[f], c))
                    : 'rd' === t[f].ty
                    ? m.push(p(t[f], n[f], c))
                    : 'rp' === t[f].ty
                    ? m.push(u(t[f], n[f], c))
                    : 'gf' === t[f].ty
                    ? m.push(i(t[f], n[f], c))
                    : m.push(
                        (t[f],
                        n[f],
                        function () {
                          return null;
                        })
                      ));
            return m;
          }
          function e(e, r, i) {
            var s = function (t) {
              switch (t) {
                case 'ADBE Vectors Group':
                case 'Contents':
                case 2:
                  return s.content;
                default:
                  return s.transform;
              }
            };
            s.propertyGroup = propertyGroupFactory(s, i);
            var a = (function (e, r, i) {
                var s,
                  a = function (t) {
                    for (var e = 0, r = s.length; e < r; ) {
                      if (
                        s[e]._name === t ||
                        s[e].mn === t ||
                        s[e].propertyIndex === t ||
                        s[e].ix === t ||
                        s[e].ind === t
                      )
                        return s[e];
                      e += 1;
                    }
                    return 'number' == typeof t ? s[t - 1] : null;
                  };
                (a.propertyGroup = propertyGroupFactory(a, i)),
                  (s = t(e.it, r.it, a.propertyGroup)),
                  (a.numProperties = s.length);
                var o = n(
                  e.it[e.it.length - 1],
                  r.it[r.it.length - 1],
                  a.propertyGroup
                );
                return (
                  (a.transform = o),
                  (a.propertyIndex = e.cix),
                  (a._name = e.nm),
                  a
                );
              })(e, r, s.propertyGroup),
              o = n(
                e.it[e.it.length - 1],
                r.it[r.it.length - 1],
                s.propertyGroup
              );
            return (
              (s.content = a),
              (s.transform = o),
              Object.defineProperty(s, '_name', {
                get: function () {
                  return e.nm;
                },
              }),
              (s.numProperties = e.np),
              (s.propertyIndex = e.ix),
              (s.nm = e.nm),
              (s.mn = e.mn),
              s
            );
          }
          function r(t, e, r) {
            function i(t) {
              return 'Color' === t || 'color' === t
                ? i.color
                : 'Opacity' === t || 'opacity' === t
                ? i.opacity
                : null;
            }
            return (
              Object.defineProperties(i, {
                color: { get: ExpressionPropertyInterface(e.c) },
                opacity: { get: ExpressionPropertyInterface(e.o) },
                _name: { value: t.nm },
                mn: { value: t.mn },
              }),
              e.c.setGroupProperty(PropertyInterface('Color', r)),
              e.o.setGroupProperty(PropertyInterface('Opacity', r)),
              i
            );
          }
          function i(t, e, r) {
            function i(t) {
              return 'Start Point' === t || 'start point' === t
                ? i.startPoint
                : 'End Point' === t || 'end point' === t
                ? i.endPoint
                : 'Opacity' === t || 'opacity' === t
                ? i.opacity
                : null;
            }
            return (
              Object.defineProperties(i, {
                startPoint: { get: ExpressionPropertyInterface(e.s) },
                endPoint: { get: ExpressionPropertyInterface(e.e) },
                opacity: { get: ExpressionPropertyInterface(e.o) },
                type: {
                  get: function () {
                    return 'a';
                  },
                },
                _name: { value: t.nm },
                mn: { value: t.mn },
              }),
              e.s.setGroupProperty(PropertyInterface('Start Point', r)),
              e.e.setGroupProperty(PropertyInterface('End Point', r)),
              e.o.setGroupProperty(PropertyInterface('Opacity', r)),
              i
            );
          }
          function s(t, e, r) {
            var i,
              s,
              a = propertyGroupFactory(h, r),
              n = propertyGroupFactory(l, a),
              o = t.d ? t.d.length : 0,
              l = {};
            for (i = 0; i < o; i += 1)
              (s = i),
                Object.defineProperty(l, t.d[s].nm, {
                  get: ExpressionPropertyInterface(e.d.dataProps[s].p),
                }),
                e.d.dataProps[i].p.setGroupProperty(n);
            function h(t) {
              return 'Color' === t || 'color' === t
                ? h.color
                : 'Opacity' === t || 'opacity' === t
                ? h.opacity
                : 'Stroke Width' === t || 'stroke width' === t
                ? h.strokeWidth
                : null;
            }
            return (
              Object.defineProperties(h, {
                color: { get: ExpressionPropertyInterface(e.c) },
                opacity: { get: ExpressionPropertyInterface(e.o) },
                strokeWidth: { get: ExpressionPropertyInterface(e.w) },
                dash: {
                  get: function () {
                    return l;
                  },
                },
                _name: { value: t.nm },
                mn: { value: t.mn },
              }),
              e.c.setGroupProperty(PropertyInterface('Color', a)),
              e.o.setGroupProperty(PropertyInterface('Opacity', a)),
              e.w.setGroupProperty(PropertyInterface('Stroke Width', a)),
              h
            );
          }
          function a(t, e, r) {
            function i(e) {
              return e === t.e.ix || 'End' === e || 'end' === e
                ? i.end
                : e === t.s.ix
                ? i.start
                : e === t.o.ix
                ? i.offset
                : null;
            }
            var s = propertyGroupFactory(i, r);
            return (
              (i.propertyIndex = t.ix),
              e.s.setGroupProperty(PropertyInterface('Start', s)),
              e.e.setGroupProperty(PropertyInterface('End', s)),
              e.o.setGroupProperty(PropertyInterface('Offset', s)),
              (i.propertyIndex = t.ix),
              (i.propertyGroup = r),
              Object.defineProperties(i, {
                start: { get: ExpressionPropertyInterface(e.s) },
                end: { get: ExpressionPropertyInterface(e.e) },
                offset: { get: ExpressionPropertyInterface(e.o) },
                _name: { value: t.nm },
              }),
              (i.mn = t.mn),
              i
            );
          }
          function n(t, e, r) {
            function i(e) {
              return t.a.ix === e || 'Anchor Point' === e
                ? i.anchorPoint
                : t.o.ix === e || 'Opacity' === e
                ? i.opacity
                : t.p.ix === e || 'Position' === e
                ? i.position
                : t.r.ix === e ||
                  'Rotation' === e ||
                  'ADBE Vector Rotation' === e
                ? i.rotation
                : t.s.ix === e || 'Scale' === e
                ? i.scale
                : (t.sk && t.sk.ix === e) || 'Skew' === e
                ? i.skew
                : (t.sa && t.sa.ix === e) || 'Skew Axis' === e
                ? i.skewAxis
                : null;
            }
            var s = propertyGroupFactory(i, r);
            return (
              e.transform.mProps.o.setGroupProperty(
                PropertyInterface('Opacity', s)
              ),
              e.transform.mProps.p.setGroupProperty(
                PropertyInterface('Position', s)
              ),
              e.transform.mProps.a.setGroupProperty(
                PropertyInterface('Anchor Point', s)
              ),
              e.transform.mProps.s.setGroupProperty(
                PropertyInterface('Scale', s)
              ),
              e.transform.mProps.r.setGroupProperty(
                PropertyInterface('Rotation', s)
              ),
              e.transform.mProps.sk &&
                (e.transform.mProps.sk.setGroupProperty(
                  PropertyInterface('Skew', s)
                ),
                e.transform.mProps.sa.setGroupProperty(
                  PropertyInterface('Skew Angle', s)
                )),
              e.transform.op.setGroupProperty(PropertyInterface('Opacity', s)),
              Object.defineProperties(i, {
                opacity: {
                  get: ExpressionPropertyInterface(e.transform.mProps.o),
                },
                position: {
                  get: ExpressionPropertyInterface(e.transform.mProps.p),
                },
                anchorPoint: {
                  get: ExpressionPropertyInterface(e.transform.mProps.a),
                },
                scale: {
                  get: ExpressionPropertyInterface(e.transform.mProps.s),
                },
                rotation: {
                  get: ExpressionPropertyInterface(e.transform.mProps.r),
                },
                skew: {
                  get: ExpressionPropertyInterface(e.transform.mProps.sk),
                },
                skewAxis: {
                  get: ExpressionPropertyInterface(e.transform.mProps.sa),
                },
                _name: { value: t.nm },
              }),
              (i.ty = 'tr'),
              (i.mn = t.mn),
              (i.propertyGroup = r),
              i
            );
          }
          function o(t, e, r) {
            function i(e) {
              return t.p.ix === e ? i.position : t.s.ix === e ? i.size : null;
            }
            var s = propertyGroupFactory(i, r);
            i.propertyIndex = t.ix;
            var a = 'tm' === e.sh.ty ? e.sh.prop : e.sh;
            return (
              a.s.setGroupProperty(PropertyInterface('Size', s)),
              a.p.setGroupProperty(PropertyInterface('Position', s)),
              Object.defineProperties(i, {
                size: { get: ExpressionPropertyInterface(a.s) },
                position: { get: ExpressionPropertyInterface(a.p) },
                _name: { value: t.nm },
              }),
              (i.mn = t.mn),
              i
            );
          }
          function l(t, e, r) {
            function i(e) {
              return t.p.ix === e
                ? i.position
                : t.r.ix === e
                ? i.rotation
                : t.pt.ix === e
                ? i.points
                : t.or.ix === e || 'ADBE Vector Star Outer Radius' === e
                ? i.outerRadius
                : t.os.ix === e
                ? i.outerRoundness
                : !t.ir ||
                  (t.ir.ix !== e && 'ADBE Vector Star Inner Radius' !== e)
                ? t.is && t.is.ix === e
                  ? i.innerRoundness
                  : null
                : i.innerRadius;
            }
            var s = propertyGroupFactory(i, r),
              a = 'tm' === e.sh.ty ? e.sh.prop : e.sh;
            return (
              (i.propertyIndex = t.ix),
              a.or.setGroupProperty(PropertyInterface('Outer Radius', s)),
              a.os.setGroupProperty(PropertyInterface('Outer Roundness', s)),
              a.pt.setGroupProperty(PropertyInterface('Points', s)),
              a.p.setGroupProperty(PropertyInterface('Position', s)),
              a.r.setGroupProperty(PropertyInterface('Rotation', s)),
              t.ir &&
                (a.ir.setGroupProperty(PropertyInterface('Inner Radius', s)),
                a.is.setGroupProperty(PropertyInterface('Inner Roundness', s))),
              Object.defineProperties(i, {
                position: { get: ExpressionPropertyInterface(a.p) },
                rotation: { get: ExpressionPropertyInterface(a.r) },
                points: { get: ExpressionPropertyInterface(a.pt) },
                outerRadius: { get: ExpressionPropertyInterface(a.or) },
                outerRoundness: { get: ExpressionPropertyInterface(a.os) },
                innerRadius: { get: ExpressionPropertyInterface(a.ir) },
                innerRoundness: { get: ExpressionPropertyInterface(a.is) },
                _name: { value: t.nm },
              }),
              (i.mn = t.mn),
              i
            );
          }
          function h(t, e, r) {
            function i(e) {
              return t.p.ix === e
                ? i.position
                : t.r.ix === e
                ? i.roundness
                : t.s.ix === e || 'Size' === e || 'ADBE Vector Rect Size' === e
                ? i.size
                : null;
            }
            var s = propertyGroupFactory(i, r),
              a = 'tm' === e.sh.ty ? e.sh.prop : e.sh;
            return (
              (i.propertyIndex = t.ix),
              a.p.setGroupProperty(PropertyInterface('Position', s)),
              a.s.setGroupProperty(PropertyInterface('Size', s)),
              a.r.setGroupProperty(PropertyInterface('Rotation', s)),
              Object.defineProperties(i, {
                position: { get: ExpressionPropertyInterface(a.p) },
                roundness: { get: ExpressionPropertyInterface(a.r) },
                size: { get: ExpressionPropertyInterface(a.s) },
                _name: { value: t.nm },
              }),
              (i.mn = t.mn),
              i
            );
          }
          function p(t, e, r) {
            function i(e) {
              return t.r.ix === e || 'Round Corners 1' === e ? i.radius : null;
            }
            var s = propertyGroupFactory(i, r),
              a = e;
            return (
              (i.propertyIndex = t.ix),
              a.rd.setGroupProperty(PropertyInterface('Radius', s)),
              Object.defineProperties(i, {
                radius: { get: ExpressionPropertyInterface(a.rd) },
                _name: { value: t.nm },
              }),
              (i.mn = t.mn),
              i
            );
          }
          function u(t, e, r) {
            function i(e) {
              return t.c.ix === e || 'Copies' === e
                ? i.copies
                : t.o.ix === e || 'Offset' === e
                ? i.offset
                : null;
            }
            var s = propertyGroupFactory(i, r),
              a = e;
            return (
              (i.propertyIndex = t.ix),
              a.c.setGroupProperty(PropertyInterface('Copies', s)),
              a.o.setGroupProperty(PropertyInterface('Offset', s)),
              Object.defineProperties(i, {
                copies: { get: ExpressionPropertyInterface(a.c) },
                offset: { get: ExpressionPropertyInterface(a.o) },
                _name: { value: t.nm },
              }),
              (i.mn = t.mn),
              i
            );
          }
          return function (e, r, i) {
            var s;
            function a(t) {
              if ('number' == typeof t)
                return 0 === (t = void 0 === t ? 1 : t) ? i : s[t - 1];
              for (var e = 0, r = s.length; e < r; ) {
                if (s[e]._name === t) return s[e];
                e += 1;
              }
              return null;
            }
            return (
              (a.propertyGroup = propertyGroupFactory(a, function () {
                return i;
              })),
              (s = t(e, r, a.propertyGroup)),
              (a.numProperties = s.length),
              (a._name = 'Contents'),
              a
            );
          };
        })(),
        TextExpressionInterface = function (t) {
          var e, r;
          function i(t) {
            switch (t) {
              case 'ADBE Text Document':
                return i.sourceText;
              default:
                return null;
            }
          }
          return (
            Object.defineProperty(i, 'sourceText', {
              get: function () {
                t.textProperty.getValue();
                var i = t.textProperty.currentData.t;
                return (
                  i !== e &&
                    ((t.textProperty.currentData.t = e),
                    ((r = new String(i)).value = i || new String(i))),
                  r
                );
              },
            }),
            i
          );
        },
        LayerExpressionInterface = (function () {
          function t(t) {
            var e = new Matrix();
            return (
              void 0 !== t
                ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e)
                : this._elem.finalTransform.mProp.applyToMatrix(e),
              e
            );
          }
          function e(t, e) {
            var r = this.getMatrix(e);
            return (
              (r.props[12] = 0),
              (r.props[13] = 0),
              (r.props[14] = 0),
              this.applyPoint(r, t)
            );
          }
          function r(t, e) {
            var r = this.getMatrix(e);
            return this.applyPoint(r, t);
          }
          function i(t, e) {
            var r = this.getMatrix(e);
            return (
              (r.props[12] = 0),
              (r.props[13] = 0),
              (r.props[14] = 0),
              this.invertPoint(r, t)
            );
          }
          function s(t, e) {
            var r = this.getMatrix(e);
            return this.invertPoint(r, t);
          }
          function a(t, e) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var r,
                i = this._elem.hierarchy.length;
              for (r = 0; r < i; r += 1)
                this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t);
            }
            return t.applyToPointArray(e[0], e[1], e[2] || 0);
          }
          function n(t, e) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var r,
                i = this._elem.hierarchy.length;
              for (r = 0; r < i; r += 1)
                this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t);
            }
            return t.inversePoint(e);
          }
          function o(t) {
            var e = new Matrix();
            if (
              (e.reset(),
              this._elem.finalTransform.mProp.applyToMatrix(e),
              this._elem.hierarchy && this._elem.hierarchy.length)
            ) {
              var r,
                i = this._elem.hierarchy.length;
              for (r = 0; r < i; r += 1)
                this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
              return e.inversePoint(t);
            }
            return e.inversePoint(t);
          }
          function l() {
            return [1, 1, 1, 1];
          }
          return function (h) {
            var p;
            function u(t) {
              switch (t) {
                case 'ADBE Root Vectors Group':
                case 'Contents':
                case 2:
                  return u.shapeInterface;
                case 1:
                case 6:
                case 'Transform':
                case 'transform':
                case 'ADBE Transform Group':
                  return p;
                case 4:
                case 'ADBE Effect Parade':
                case 'effects':
                case 'Effects':
                  return u.effect;
                case 'ADBE Text Properties':
                  return u.textInterface;
                default:
                  return null;
              }
            }
            (u.getMatrix = t),
              (u.invertPoint = n),
              (u.applyPoint = a),
              (u.toWorld = r),
              (u.toWorldVec = e),
              (u.fromWorld = s),
              (u.fromWorldVec = i),
              (u.toComp = r),
              (u.fromComp = o),
              (u.sampleImage = l),
              (u.sourceRectAtTime = h.sourceRectAtTime.bind(h)),
              (u._elem = h);
            var c = getDescriptor(
              (p = TransformExpressionInterface(h.finalTransform.mProp)),
              'anchorPoint'
            );
            return (
              Object.defineProperties(u, {
                hasParent: {
                  get: function () {
                    return h.hierarchy.length;
                  },
                },
                parent: {
                  get: function () {
                    return h.hierarchy[0].layerInterface;
                  },
                },
                rotation: getDescriptor(p, 'rotation'),
                scale: getDescriptor(p, 'scale'),
                position: getDescriptor(p, 'position'),
                opacity: getDescriptor(p, 'opacity'),
                anchorPoint: c,
                anchor_point: c,
                transform: {
                  get: function () {
                    return p;
                  },
                },
                active: {
                  get: function () {
                    return h.isInRange;
                  },
                },
              }),
              (u.startTime = h.data.st),
              (u.index = h.data.ind),
              (u.source = h.data.refId),
              (u.height = 0 === h.data.ty ? h.data.h : 100),
              (u.width = 0 === h.data.ty ? h.data.w : 100),
              (u.inPoint = h.data.ip / h.comp.globalData.frameRate),
              (u.outPoint = h.data.op / h.comp.globalData.frameRate),
              (u._name = h.data.nm),
              (u.registerMaskInterface = function (t) {
                u.mask = new MaskManagerInterface(t, h);
              }),
              (u.registerEffectsInterface = function (t) {
                u.effect = t;
              }),
              u
            );
          };
        })(),
        FootageInterface =
          ((dataInterfaceFactory = function (t) {
            function e(t) {
              return 'Outline' === t ? e.outlineInterface() : null;
            }
            return (
              (e._name = 'Outline'),
              (e.outlineInterface = (function (t) {
                var e = '',
                  r = t.getFootageData();
                function i(t) {
                  if (r[t])
                    return (e = t), 'object' == typeof (r = r[t]) ? i : r;
                  var s = t.indexOf(e);
                  if (-1 !== s) {
                    var a = parseInt(t.substr(s + e.length), 10);
                    return 'object' == typeof (r = r[a]) ? i : r;
                  }
                  return '';
                }
                return function () {
                  return (e = ''), (r = t.getFootageData()), i;
                };
              })(t)),
              e
            );
          }),
          function (t) {
            function e(t) {
              return 'Data' === t ? e.dataInterface : null;
            }
            return (
              (e._name = 'Data'), (e.dataInterface = dataInterfaceFactory(t)), e
            );
          }),
        dataInterfaceFactory,
        CompExpressionInterface = function (t) {
          function e(e) {
            for (var r = 0, i = t.layers.length; r < i; ) {
              if (t.layers[r].nm === e || t.layers[r].ind === e)
                return t.elements[r].layerInterface;
              r += 1;
            }
            return null;
          }
          return (
            Object.defineProperty(e, '_name', { value: t.data.nm }),
            (e.layer = e),
            (e.pixelAspect = 1),
            (e.height = t.data.h || t.globalData.compSize.h),
            (e.width = t.data.w || t.globalData.compSize.w),
            (e.pixelAspect = 1),
            (e.frameDuration = 1 / t.globalData.frameRate),
            (e.displayStartTime = 0),
            (e.numLayers = t.layers.length),
            e
          );
        },
        TransformExpressionInterface = function (t) {
          function e(t) {
            switch (t) {
              case 'scale':
              case 'Scale':
              case 'ADBE Scale':
              case 6:
                return e.scale;
              case 'rotation':
              case 'Rotation':
              case 'ADBE Rotation':
              case 'ADBE Rotate Z':
              case 10:
                return e.rotation;
              case 'ADBE Rotate X':
                return e.xRotation;
              case 'ADBE Rotate Y':
                return e.yRotation;
              case 'position':
              case 'Position':
              case 'ADBE Position':
              case 2:
                return e.position;
              case 'ADBE Position_0':
                return e.xPosition;
              case 'ADBE Position_1':
                return e.yPosition;
              case 'ADBE Position_2':
                return e.zPosition;
              case 'anchorPoint':
              case 'AnchorPoint':
              case 'Anchor Point':
              case 'ADBE AnchorPoint':
              case 1:
                return e.anchorPoint;
              case 'opacity':
              case 'Opacity':
              case 11:
                return e.opacity;
              default:
                return null;
            }
          }
          var r, i, s, a;
          return (
            Object.defineProperty(e, 'rotation', {
              get: ExpressionPropertyInterface(t.r || t.rz),
            }),
            Object.defineProperty(e, 'zRotation', {
              get: ExpressionPropertyInterface(t.rz || t.r),
            }),
            Object.defineProperty(e, 'xRotation', {
              get: ExpressionPropertyInterface(t.rx),
            }),
            Object.defineProperty(e, 'yRotation', {
              get: ExpressionPropertyInterface(t.ry),
            }),
            Object.defineProperty(e, 'scale', {
              get: ExpressionPropertyInterface(t.s),
            }),
            t.p
              ? (a = ExpressionPropertyInterface(t.p))
              : ((r = ExpressionPropertyInterface(t.px)),
                (i = ExpressionPropertyInterface(t.py)),
                t.pz && (s = ExpressionPropertyInterface(t.pz))),
            Object.defineProperty(e, 'position', {
              get: function () {
                return t.p ? a() : [r(), i(), s ? s() : 0];
              },
            }),
            Object.defineProperty(e, 'xPosition', {
              get: ExpressionPropertyInterface(t.px),
            }),
            Object.defineProperty(e, 'yPosition', {
              get: ExpressionPropertyInterface(t.py),
            }),
            Object.defineProperty(e, 'zPosition', {
              get: ExpressionPropertyInterface(t.pz),
            }),
            Object.defineProperty(e, 'anchorPoint', {
              get: ExpressionPropertyInterface(t.a),
            }),
            Object.defineProperty(e, 'opacity', {
              get: ExpressionPropertyInterface(t.o),
            }),
            Object.defineProperty(e, 'skew', {
              get: ExpressionPropertyInterface(t.sk),
            }),
            Object.defineProperty(e, 'skewAxis', {
              get: ExpressionPropertyInterface(t.sa),
            }),
            Object.defineProperty(e, 'orientation', {
              get: ExpressionPropertyInterface(t.or),
            }),
            e
          );
        },
        ProjectInterface = (function () {
          function t(t) {
            this.compositions.push(t);
          }
          return function () {
            function e(t) {
              for (var e = 0, r = this.compositions.length; e < r; ) {
                if (
                  this.compositions[e].data &&
                  this.compositions[e].data.nm === t
                )
                  return (
                    this.compositions[e].prepareFrame &&
                      this.compositions[e].data.xt &&
                      this.compositions[e].prepareFrame(this.currentFrame),
                    this.compositions[e].compInterface
                  );
                e += 1;
              }
              return null;
            }
            return (
              (e.compositions = []),
              (e.currentFrame = 0),
              (e.registerComposition = t),
              e
            );
          };
        })(),
        EffectsExpressionInterface = (function () {
          function t(r, i, s, a) {
            function n(t) {
              for (var e = r.ef, i = 0, s = e.length; i < s; ) {
                if (t === e[i].nm || t === e[i].mn || t === e[i].ix)
                  return 5 === e[i].ty ? h[i] : h[i]();
                i += 1;
              }
              throw new Error();
            }
            var o,
              l = propertyGroupFactory(n, s),
              h = [],
              p = r.ef.length;
            for (o = 0; o < p; o += 1)
              5 === r.ef[o].ty
                ? h.push(
                    t(
                      r.ef[o],
                      i.effectElements[o],
                      i.effectElements[o].propertyGroup,
                      a
                    )
                  )
                : h.push(e(i.effectElements[o], r.ef[o].ty, a, l));
            return (
              'ADBE Color Control' === r.mn &&
                Object.defineProperty(n, 'color', {
                  get: function () {
                    return h[0]();
                  },
                }),
              Object.defineProperties(n, {
                numProperties: {
                  get: function () {
                    return r.np;
                  },
                },
                _name: { value: r.nm },
                propertyGroup: { value: l },
              }),
              (n.enabled = 0 !== r.en),
              (n.active = n.enabled),
              n
            );
          }
          function e(t, e, r, i) {
            var s = ExpressionPropertyInterface(t.p);
            return (
              t.p.setGroupProperty &&
                t.p.setGroupProperty(PropertyInterface('', i)),
              function () {
                return 10 === e ? r.comp.compInterface(t.p.v) : s();
              }
            );
          }
          return {
            createEffectsInterface: function (e, r) {
              if (e.effectsManager) {
                var i,
                  s = [],
                  a = e.data.ef,
                  n = e.effectsManager.effectElements.length;
                for (i = 0; i < n; i += 1)
                  s.push(t(a[i], e.effectsManager.effectElements[i], r, e));
                var o = e.data.ef || [],
                  l = function (t) {
                    for (i = 0, n = o.length; i < n; ) {
                      if (t === o[i].nm || t === o[i].mn || t === o[i].ix)
                        return s[i];
                      i += 1;
                    }
                    return null;
                  };
                return (
                  Object.defineProperty(l, 'numProperties', {
                    get: function () {
                      return o.length;
                    },
                  }),
                  l
                );
              }
              return null;
            },
          };
        })(),
        MaskManagerInterface = (function () {
          function t(t, e) {
            (this._mask = t), (this._data = e);
          }
          return (
            Object.defineProperty(t.prototype, 'maskPath', {
              get: function () {
                return (
                  this._mask.prop.k && this._mask.prop.getValue(),
                  this._mask.prop
                );
              },
            }),
            Object.defineProperty(t.prototype, 'maskOpacity', {
              get: function () {
                return (
                  this._mask.op.k && this._mask.op.getValue(),
                  100 * this._mask.op.v
                );
              },
            }),
            function (e) {
              var r,
                i = createSizedArray(e.viewData.length),
                s = e.viewData.length;
              for (r = 0; r < s; r += 1)
                i[r] = new t(e.viewData[r], e.masksProperties[r]);
              return function (t) {
                for (r = 0; r < s; ) {
                  if (e.masksProperties[r].nm === t) return i[r];
                  r += 1;
                }
                return null;
              };
            }
          );
        })(),
        ExpressionPropertyInterface = (function () {
          var t = { pv: 0, v: 0, mult: 1 },
            e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
          function r(t, e, r) {
            Object.defineProperty(t, 'velocity', {
              get: function () {
                return e.getVelocityAtTime(e.comp.currentFrame);
              },
            }),
              (t.numKeys = e.keyframes ? e.keyframes.length : 0),
              (t.key = function (i) {
                if (!t.numKeys) return 0;
                var s = '';
                s =
                  's' in e.keyframes[i - 1]
                    ? e.keyframes[i - 1].s
                    : 'e' in e.keyframes[i - 2]
                    ? e.keyframes[i - 2].e
                    : e.keyframes[i - 2].s;
                var a =
                  'unidimensional' === r ? new Number(s) : Object.assign({}, s);
                return (
                  (a.time =
                    e.keyframes[i - 1].t / e.elem.comp.globalData.frameRate),
                  (a.value = 'unidimensional' === r ? s[0] : s),
                  a
                );
              }),
              (t.valueAtTime = e.getValueAtTime),
              (t.speedAtTime = e.getSpeedAtTime),
              (t.velocityAtTime = e.getVelocityAtTime),
              (t.propertyGroup = e.propertyGroup);
          }
          function i() {
            return t;
          }
          return function (s) {
            return s
              ? 'unidimensional' === s.propType
                ? (function (e) {
                    (e && 'pv' in e) || (e = t);
                    var i = 1 / e.mult,
                      s = e.pv * i,
                      a = new Number(s);
                    return (
                      (a.value = s),
                      r(a, e, 'unidimensional'),
                      function () {
                        return (
                          e.k && e.getValue(),
                          (s = e.v * i),
                          a.value !== s &&
                            (((a = new Number(s)).value = s),
                            r(a, e, 'unidimensional')),
                          a
                        );
                      }
                    );
                  })(s)
                : (function (t) {
                    (t && 'pv' in t) || (t = e);
                    var i = 1 / t.mult,
                      s = (t.data && t.data.l) || t.pv.length,
                      a = createTypedArray('float32', s),
                      n = createTypedArray('float32', s);
                    return (
                      (a.value = n),
                      r(a, t, 'multidimensional'),
                      function () {
                        t.k && t.getValue();
                        for (var e = 0; e < s; e += 1)
                          (n[e] = t.v[e] * i), (a[e] = n[e]);
                        return a;
                      }
                    );
                  })(s)
              : i;
          };
        })(),
        TextExpressionSelectorPropFactory = (function () {
          function t(t, e) {
            return (
              (this.textIndex = t + 1),
              (this.textTotal = e),
              (this.v = this.getValue() * this.mult),
              this.v
            );
          }
          return function (e, r) {
            (this.pv = 1),
              (this.comp = e.comp),
              (this.elem = e),
              (this.mult = 0.01),
              (this.propType = 'textSelector'),
              (this.textTotal = r.totalChars),
              (this.selectorValue = 100),
              (this.lastValue = [1, 1, 1]),
              (this.k = !0),
              (this.x = !0),
              (this.getValue = ExpressionManager.initiateExpression.bind(this)(
                e,
                r,
                this
              )),
              (this.getMult = t),
              (this.getVelocityAtTime = expressionHelpers.getVelocityAtTime),
              this.kf
                ? (this.getValueAtTime =
                    expressionHelpers.getValueAtTime.bind(this))
                : (this.getValueAtTime =
                    expressionHelpers.getStaticValueAtTime.bind(this)),
              (this.setGroupProperty = expressionHelpers.setGroupProperty);
          };
        })(),
        propertyGetTextProp = TextSelectorProp.getTextSelectorProp;
      function SliderEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
      }
      function AngleEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
      }
      function ColorEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
      }
      function PointEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
      }
      function LayerIndexEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
      }
      function MaskIndexEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
      }
      function CheckboxEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
      }
      function NoValueEffect() {
        this.p = {};
      }
      function EffectsManager(t, e) {
        var r,
          i = t.ef || [];
        this.effectElements = [];
        var s,
          a = i.length;
        for (r = 0; r < a; r += 1)
          (s = new GroupEffect(i[r], e)), this.effectElements.push(s);
      }
      function GroupEffect(t, e) {
        this.init(t, e);
      }
      (TextSelectorProp.getTextSelectorProp = function (t, e, r) {
        return 1 === e.t
          ? new TextExpressionSelectorPropFactory(t, e, r)
          : propertyGetTextProp(t, e, r);
      }),
        extendPrototype([DynamicPropertyContainer], GroupEffect),
        (GroupEffect.prototype.getValue =
          GroupEffect.prototype.iterateDynamicProperties),
        (GroupEffect.prototype.init = function (t, e) {
          var r;
          (this.data = t),
            (this.effectElements = []),
            this.initDynamicPropertyContainer(e);
          var i,
            s = this.data.ef.length,
            a = this.data.ef;
          for (r = 0; r < s; r += 1) {
            switch (((i = null), a[r].ty)) {
              case 0:
                i = new SliderEffect(a[r], e, this);
                break;
              case 1:
                i = new AngleEffect(a[r], e, this);
                break;
              case 2:
                i = new ColorEffect(a[r], e, this);
                break;
              case 3:
                i = new PointEffect(a[r], e, this);
                break;
              case 4:
              case 7:
                i = new CheckboxEffect(a[r], e, this);
                break;
              case 10:
                i = new LayerIndexEffect(a[r], e, this);
                break;
              case 11:
                i = new MaskIndexEffect(a[r], e, this);
                break;
              case 5:
                i = new EffectsManager(a[r], e, this);
                break;
              default:
                i = new NoValueEffect(a[r], e, this);
            }
            i && this.effectElements.push(i);
          }
        });
      var lottie = {},
        queryString;
      function setLocationHref(t) {
        locationHref = t;
      }
      function searchAnimations() {
        animationManager.searchAnimations();
      }
      function setSubframeRendering(t) {
        subframeEnabled = t;
      }
      function setIDPrefix(t) {
        idPrefix = t;
      }
      function loadAnimation(t) {
        return animationManager.loadAnimation(t);
      }
      function setQuality(t) {
        if ('string' == typeof t)
          switch (t) {
            case 'high':
              defaultCurveSegments = 200;
              break;
            default:
            case 'medium':
              defaultCurveSegments = 50;
              break;
            case 'low':
              defaultCurveSegments = 10;
          }
        else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
      }
      function inBrowser() {
        return 'undefined' != typeof navigator;
      }
      function installPlugin(t, e) {
        'expressions' === t && (expressionsPlugin = e);
      }
      function getFactory(t) {
        switch (t) {
          case 'propertyFactory':
            return PropertyFactory;
          case 'shapePropertyFactory':
            return ShapePropertyFactory;
          case 'matrix':
            return Matrix;
          default:
            return null;
        }
      }
      function checkReady() {
        'complete' === document.readyState &&
          (clearInterval(readyStateCheckInterval), searchAnimations());
      }
      function getQueryVariable(t) {
        for (var e = queryString.split('&'), r = 0; r < e.length; r += 1) {
          var i = e[r].split('=');
          if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1]);
        }
        return null;
      }
      (lottie.play = animationManager.play),
        (lottie.pause = animationManager.pause),
        (lottie.setLocationHref = setLocationHref),
        (lottie.togglePause = animationManager.togglePause),
        (lottie.setSpeed = animationManager.setSpeed),
        (lottie.setDirection = animationManager.setDirection),
        (lottie.stop = animationManager.stop),
        (lottie.searchAnimations = searchAnimations),
        (lottie.registerAnimation = animationManager.registerAnimation),
        (lottie.loadAnimation = loadAnimation),
        (lottie.setSubframeRendering = setSubframeRendering),
        (lottie.resize = animationManager.resize),
        (lottie.goToAndStop = animationManager.goToAndStop),
        (lottie.destroy = animationManager.destroy),
        (lottie.setQuality = setQuality),
        (lottie.inBrowser = inBrowser),
        (lottie.installPlugin = installPlugin),
        (lottie.freeze = animationManager.freeze),
        (lottie.unfreeze = animationManager.unfreeze),
        (lottie.setVolume = animationManager.setVolume),
        (lottie.mute = animationManager.mute),
        (lottie.unmute = animationManager.unmute),
        (lottie.getRegisteredAnimations =
          animationManager.getRegisteredAnimations),
        (lottie.setIDPrefix = setIDPrefix),
        (lottie.__getFactory = getFactory),
        (lottie.version = '5.7.13');
      var scripts = document.getElementsByTagName('script'),
        index = scripts.length - 1,
        myScript = scripts[index] || { src: '' };
      (queryString = myScript.src.replace(/^[^\?]+\??/, '')),
        getQueryVariable('renderer');
      var readyStateCheckInterval = setInterval(checkReady, 100);
      return lottie;
    }),
    module.exports
      ? (module.exports = factory(root2))
      : ((root2.lottie = factory(root2)), (root2.bodymovin = root2.lottie)));
})(lottie);
var faCog = {};
!(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  var e = [],
    r = 'f013',
    i =
      'M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z';
  (t.definition = {
    prefix: 'fas',
    iconName: 'cog',
    icon: [512, 512, e, r, i],
  }),
    (t.faCog = t.definition),
    (t.prefix = 'fas'),
    (t.iconName = 'cog'),
    (t.width = 512),
    (t.height = 512),
    (t.ligatures = e),
    (t.unicode = r),
    (t.svgPathData = i);
})(faCog);
var faHome = {};
!(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  var e = 'home',
    r = [],
    i = 'f015',
    s =
      'M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z';
  (t.definition = { prefix: 'fas', iconName: e, icon: [576, 512, r, i, s] }),
    (t.faHome = t.definition),
    (t.prefix = 'fas'),
    (t.iconName = e),
    (t.width = 576),
    (t.height = 512),
    (t.ligatures = r),
    (t.unicode = i),
    (t.svgPathData = s);
})(faHome);
var faGithubAlt = {};
!(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  var e = 'github-alt',
    r = [],
    i = 'f113',
    s =
      'M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z';
  (t.definition = { prefix: 'fab', iconName: e, icon: [480, 512, r, i, s] }),
    (t.faGithubAlt = t.definition),
    (t.prefix = 'fab'),
    (t.iconName = e),
    (t.width = 480),
    (t.height = 512),
    (t.ligatures = r),
    (t.unicode = i),
    (t.svgPathData = s);
})(faGithubAlt);
export {
  add_render_callback as $,
  onMount as A,
  assign as B,
  writable as C,
  create_slot as D,
  update_slot_base as E,
  get_all_dirty_from_scope as F,
  get_slot_changes as G,
  append_hydration as H,
  noop as I,
  Fa as J,
  faCog as K,
  destroy_each as L,
  urlJoin as M,
  getContext as N,
  HtmlTagHydration as O,
  query_selector_all as P,
  claim_html_tag as Q,
  component_subscribe as R,
  SvelteComponent as S,
  get as T,
  src_url_equal as U,
  listen as V,
  faHome as W,
  faGithubAlt as X,
  toggle_class as Y,
  compute_slots as Z,
  set_style as _,
  children as a,
  add_resize_listener as a0,
  handle_promise as a1,
  update_await_block_branch as a2,
  marked as a3,
  null_to_empty as a4,
  classnames as a5,
  binding_callbacks as a6,
  lottie as a7,
  Scroller as a8,
  bind as a9,
  add_flush_callback as aa,
  attr as b,
  claim_element as c,
  detach as d,
  element as e,
  insert_hydration as f,
  claim_text as g,
  set_data as h,
  init as i,
  create_component as j,
  space as k,
  empty as l,
  claim_component as m,
  claim_space as n,
  mount_component as o,
  get_spread_update as p,
  get_spread_object as q,
  group_outros as r,
  safe_not_equal as s,
  text as t,
  transition_out as u,
  destroy_component as v,
  check_outros as w,
  transition_in as x,
  setContext as y,
  afterUpdate as z,
};
