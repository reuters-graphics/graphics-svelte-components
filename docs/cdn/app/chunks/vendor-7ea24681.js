var ye = Object.defineProperty;
var ge = Object.getOwnPropertySymbols;
var be = Object.prototype.hasOwnProperty,
  _e = Object.prototype.propertyIsEnumerable;
var ve = (e, t, r) =>
    t in e
      ? ye(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  ue = (e, t) => {
    for (var r in t || (t = {})) be.call(t, r) && ve(e, r, t[r]);
    if (ge) for (var r of ge(t)) _e.call(t, r) && ve(e, r, t[r]);
    return e;
  };
function noop() {}
function assign(e, t) {
  for (const r in t) e[r] = t[r];
  return e;
}
function is_promise(e) {
  return e && typeof e == 'object' && typeof e.then == 'function';
}
function run(e) {
  return e();
}
function blank_object() {
  return Object.create(null);
}
function run_all(e) {
  e.forEach(run);
}
function is_function(e) {
  return typeof e == 'function';
}
function safe_not_equal(e, t) {
  return e != e
    ? t == t
    : e !== t || (e && typeof e == 'object') || typeof e == 'function';
}
let src_url_equal_anchor;
function src_url_equal(e, t) {
  return (
    src_url_equal_anchor ||
      (src_url_equal_anchor = document.createElement('a')),
    (src_url_equal_anchor.href = t),
    e === src_url_equal_anchor.href
  );
}
function is_empty(e) {
  return Object.keys(e).length === 0;
}
function subscribe(e, ...t) {
  if (e == null) return noop;
  const r = e.subscribe(...t);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function component_subscribe(e, t, r) {
  e.$$.on_destroy.push(subscribe(t, r));
}
function create_slot(e, t, r, i) {
  if (e) {
    const s = get_slot_context(e, t, r, i);
    return e[0](s);
  }
}
function get_slot_context(e, t, r, i) {
  return e[1] && i ? assign(r.ctx.slice(), e[1](i(t))) : r.ctx;
}
function get_slot_changes(e, t, r, i) {
  if (e[2] && i) {
    const s = e[2](i(r));
    if (t.dirty === void 0) return s;
    if (typeof s == 'object') {
      const n = [],
        o = Math.max(t.dirty.length, s.length);
      for (let c = 0; c < o; c += 1) n[c] = t.dirty[c] | s[c];
      return n;
    }
    return t.dirty | s;
  }
  return t.dirty;
}
function update_slot_base(e, t, r, i, s, n) {
  if (s) {
    const o = get_slot_context(t, r, i, n);
    e.p(o, s);
  }
}
function get_all_dirty_from_scope(e) {
  if (e.ctx.length > 32) {
    const t = [],
      r = e.ctx.length / 32;
    for (let i = 0; i < r; i++) t[i] = -1;
    return t;
  }
  return -1;
}
function compute_slots(e) {
  const t = {};
  for (const r in e) t[r] = !0;
  return t;
}
function null_to_empty(e) {
  return e == null ? '' : e;
}
let is_hydrating = !1;
function start_hydrating() {
  is_hydrating = !0;
}
function end_hydrating() {
  is_hydrating = !1;
}
function upper_bound(e, t, r, i) {
  for (; e < t; ) {
    const s = e + ((t - e) >> 1);
    r(s) <= i ? (e = s + 1) : (t = s);
  }
  return e;
}
function init_hydrate(e) {
  if (e.hydrate_init) return;
  e.hydrate_init = !0;
  let t = e.childNodes;
  if (e.nodeName === 'HEAD') {
    const u = [];
    for (let d = 0; d < t.length; d++) {
      const x = t[d];
      x.claim_order !== void 0 && u.push(x);
    }
    t = u;
  }
  const r = new Int32Array(t.length + 1),
    i = new Int32Array(t.length);
  r[0] = -1;
  let s = 0;
  for (let u = 0; u < t.length; u++) {
    const d = t[u].claim_order,
      x =
        (s > 0 && t[r[s]].claim_order <= d
          ? s + 1
          : upper_bound(1, s, (m) => t[r[m]].claim_order, d)) - 1;
    i[u] = r[x] + 1;
    const _ = x + 1;
    (r[_] = u), (s = Math.max(_, s));
  }
  const n = [],
    o = [];
  let c = t.length - 1;
  for (let u = r[s] + 1; u != 0; u = i[u - 1]) {
    for (n.push(t[u - 1]); c >= u; c--) o.push(t[c]);
    c--;
  }
  for (; c >= 0; c--) o.push(t[c]);
  n.reverse(), o.sort((u, d) => u.claim_order - d.claim_order);
  for (let u = 0, d = 0; u < o.length; u++) {
    for (; d < n.length && o[u].claim_order >= n[d].claim_order; ) d++;
    const x = d < n.length ? n[d] : null;
    e.insertBefore(o[u], x);
  }
}
function append(e, t) {
  e.appendChild(t);
}
function append_hydration(e, t) {
  if (is_hydrating) {
    for (
      init_hydrate(e),
        (e.actual_end_child === void 0 ||
          (e.actual_end_child !== null &&
            e.actual_end_child.parentElement !== e)) &&
          (e.actual_end_child = e.firstChild);
      e.actual_end_child !== null && e.actual_end_child.claim_order === void 0;

    )
      e.actual_end_child = e.actual_end_child.nextSibling;
    t !== e.actual_end_child
      ? (t.claim_order !== void 0 || t.parentNode !== e) &&
        e.insertBefore(t, e.actual_end_child)
      : (e.actual_end_child = t.nextSibling);
  } else (t.parentNode !== e || t.nextSibling !== null) && e.appendChild(t);
}
function insert(e, t, r) {
  e.insertBefore(t, r || null);
}
function insert_hydration(e, t, r) {
  is_hydrating && !r
    ? append_hydration(e, t)
    : (t.parentNode !== e || t.nextSibling != r) &&
      e.insertBefore(t, r || null);
}
function detach(e) {
  e.parentNode.removeChild(e);
}
function destroy_each(e, t) {
  for (let r = 0; r < e.length; r += 1) e[r] && e[r].d(t);
}
function element(e) {
  return document.createElement(e);
}
function svg_element(e) {
  return document.createElementNS('http://www.w3.org/2000/svg', e);
}
function text(e) {
  return document.createTextNode(e);
}
function space() {
  return text(' ');
}
function empty() {
  return text('');
}
function listen(e, t, r, i) {
  return e.addEventListener(t, r, i), () => e.removeEventListener(t, r, i);
}
function attr(e, t, r) {
  r == null
    ? e.removeAttribute(t)
    : e.getAttribute(t) !== r && e.setAttribute(t, r);
}
function set_custom_element_data(e, t, r) {
  t in e
    ? (e[t] = typeof e[t] == 'boolean' && r === '' ? !0 : r)
    : attr(e, t, r);
}
function children(e) {
  return Array.from(e.childNodes);
}
function init_claim_info(e) {
  e.claim_info === void 0 &&
    (e.claim_info = { last_index: 0, total_claimed: 0 });
}
function claim_node(e, t, r, i, s = !1) {
  init_claim_info(e);
  const n = (() => {
    for (let o = e.claim_info.last_index; o < e.length; o++) {
      const c = e[o];
      if (t(c)) {
        const u = r(c);
        return (
          u === void 0 ? e.splice(o, 1) : (e[o] = u),
          s || (e.claim_info.last_index = o),
          c
        );
      }
    }
    for (let o = e.claim_info.last_index - 1; o >= 0; o--) {
      const c = e[o];
      if (t(c)) {
        const u = r(c);
        return (
          u === void 0 ? e.splice(o, 1) : (e[o] = u),
          s
            ? u === void 0 && e.claim_info.last_index--
            : (e.claim_info.last_index = o),
          c
        );
      }
    }
    return i();
  })();
  return (
    (n.claim_order = e.claim_info.total_claimed),
    (e.claim_info.total_claimed += 1),
    n
  );
}
function claim_element_base(e, t, r, i) {
  return claim_node(
    e,
    (s) => s.nodeName === t,
    (s) => {
      const n = [];
      for (let o = 0; o < s.attributes.length; o++) {
        const c = s.attributes[o];
        r[c.name] || n.push(c.name);
      }
      n.forEach((o) => s.removeAttribute(o));
    },
    () => i(t)
  );
}
function claim_element(e, t, r) {
  return claim_element_base(e, t, r, element);
}
function claim_svg_element(e, t, r) {
  return claim_element_base(e, t, r, svg_element);
}
function claim_text(e, t) {
  return claim_node(
    e,
    (r) => r.nodeType === 3,
    (r) => {
      const i = '' + t;
      if (r.data.startsWith(i)) {
        if (r.data.length !== i.length) return r.splitText(i.length);
      } else r.data = i;
    },
    () => text(t),
    !0
  );
}
function claim_space(e) {
  return claim_text(e, ' ');
}
function find_comment(e, t, r) {
  for (let i = r; i < e.length; i += 1) {
    const s = e[i];
    if (s.nodeType === 8 && s.textContent.trim() === t) return i;
  }
  return e.length;
}
function claim_html_tag(e) {
  const t = find_comment(e, 'HTML_TAG_START', 0),
    r = find_comment(e, 'HTML_TAG_END', t);
  if (t === r) return new HtmlTagHydration();
  init_claim_info(e);
  const i = e.splice(t, r + 1);
  detach(i[0]), detach(i[i.length - 1]);
  const s = i.slice(1, i.length - 1);
  for (const n of s)
    (n.claim_order = e.claim_info.total_claimed),
      (e.claim_info.total_claimed += 1);
  return new HtmlTagHydration(s);
}
function set_data(e, t) {
  (t = '' + t), e.wholeText !== t && (e.data = t);
}
function set_style(e, t, r, i) {
  e.style.setProperty(t, r, i ? 'important' : '');
}
let crossorigin;
function is_crossorigin() {
  if (crossorigin === void 0) {
    crossorigin = !1;
    try {
      typeof window != 'undefined' && window.parent && window.parent.document;
    } catch {
      crossorigin = !0;
    }
  }
  return crossorigin;
}
function add_resize_listener(e, t) {
  getComputedStyle(e).position === 'static' && (e.style.position = 'relative');
  const i = element('iframe');
  i.setAttribute(
    'style',
    'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;'
  ),
    i.setAttribute('aria-hidden', 'true'),
    (i.tabIndex = -1);
  const s = is_crossorigin();
  let n;
  return (
    s
      ? ((i.src =
          "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>"),
        (n = listen(window, 'message', (o) => {
          o.source === i.contentWindow && t();
        })))
      : ((i.src = 'about:blank'),
        (i.onload = () => {
          n = listen(i.contentWindow, 'resize', t);
        })),
    append(e, i),
    () => {
      (s || (n && i.contentWindow)) && n(), detach(i);
    }
  );
}
function toggle_class(e, t, r) {
  e.classList[r ? 'add' : 'remove'](t);
}
function query_selector_all(e, t = document.body) {
  return Array.from(t.querySelectorAll(e));
}
class HtmlTag {
  constructor() {
    this.e = this.n = null;
  }
  c(t) {
    this.h(t);
  }
  m(t, r, i = null) {
    this.e || ((this.e = element(r.nodeName)), (this.t = r), this.c(t)),
      this.i(i);
  }
  h(t) {
    (this.e.innerHTML = t), (this.n = Array.from(this.e.childNodes));
  }
  i(t) {
    for (let r = 0; r < this.n.length; r += 1) insert(this.t, this.n[r], t);
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
    super();
    (this.e = this.n = null), (this.l = t);
  }
  c(t) {
    this.l ? (this.n = this.l) : super.c(t);
  }
  i(t) {
    for (let r = 0; r < this.n.length; r += 1)
      insert_hydration(this.t, this.n[r], t);
  }
}
let current_component;
function set_current_component(e) {
  current_component = e;
}
function get_current_component() {
  if (!current_component)
    throw new Error('Function called outside component initialization');
  return current_component;
}
function onMount(e) {
  get_current_component().$$.on_mount.push(e);
}
function afterUpdate(e) {
  get_current_component().$$.after_update.push(e);
}
function setContext(e, t) {
  get_current_component().$$.context.set(e, t);
}
function getContext(e) {
  return get_current_component().$$.context.get(e);
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
function add_render_callback(e) {
  render_callbacks.push(e);
}
function add_flush_callback(e) {
  flush_callbacks.push(e);
}
const seen_callbacks = new Set();
let flushidx = 0;
function flush() {
  const e = current_component;
  do {
    for (; flushidx < dirty_components.length; ) {
      const t = dirty_components[flushidx];
      flushidx++, set_current_component(t), update(t.$$);
    }
    for (
      set_current_component(null), dirty_components.length = 0, flushidx = 0;
      binding_callbacks.length;

    )
      binding_callbacks.pop()();
    for (let t = 0; t < render_callbacks.length; t += 1) {
      const r = render_callbacks[t];
      seen_callbacks.has(r) || (seen_callbacks.add(r), r());
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  for (; flush_callbacks.length; ) flush_callbacks.pop()();
  (update_scheduled = !1), seen_callbacks.clear(), set_current_component(e);
}
function update(e) {
  if (e.fragment !== null) {
    e.update(), run_all(e.before_update);
    const t = e.dirty;
    (e.dirty = [-1]),
      e.fragment && e.fragment.p(e.ctx, t),
      e.after_update.forEach(add_render_callback);
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
function transition_in(e, t) {
  e && e.i && (outroing.delete(e), e.i(t));
}
function transition_out(e, t, r, i) {
  if (e && e.o) {
    if (outroing.has(e)) return;
    outroing.add(e),
      outros.c.push(() => {
        outroing.delete(e), i && (r && e.d(1), i());
      }),
      e.o(t);
  }
}
function handle_promise(e, t) {
  const r = (t.token = {});
  function i(s, n, o, c) {
    if (t.token !== r) return;
    t.resolved = c;
    let u = t.ctx;
    o !== void 0 && ((u = u.slice()), (u[o] = c));
    const d = s && (t.current = s)(u);
    let x = !1;
    t.block &&
      (t.blocks
        ? t.blocks.forEach((_, m) => {
            m !== n &&
              _ &&
              (group_outros(),
              transition_out(_, 1, 1, () => {
                t.blocks[m] === _ && (t.blocks[m] = null);
              }),
              check_outros());
          })
        : t.block.d(1),
      d.c(),
      transition_in(d, 1),
      d.m(t.mount(), t.anchor),
      (x = !0)),
      (t.block = d),
      t.blocks && (t.blocks[n] = d),
      x && flush();
  }
  if (is_promise(e)) {
    const s = get_current_component();
    if (
      (e.then(
        (n) => {
          set_current_component(s),
            i(t.then, 1, t.value, n),
            set_current_component(null);
        },
        (n) => {
          if (
            (set_current_component(s),
            i(t.catch, 2, t.error, n),
            set_current_component(null),
            !t.hasCatch)
          )
            throw n;
        }
      ),
      t.current !== t.pending)
    )
      return i(t.pending, 0), !0;
  } else {
    if (t.current !== t.then) return i(t.then, 1, t.value, e), !0;
    t.resolved = e;
  }
}
function update_await_block_branch(e, t, r) {
  const i = t.slice(),
    { resolved: s } = e;
  e.current === e.then && (i[e.value] = s),
    e.current === e.catch && (i[e.error] = s),
    e.block.p(i, r);
}
const globals =
  typeof window != 'undefined'
    ? window
    : typeof globalThis != 'undefined'
    ? globalThis
    : global;
function get_spread_update(e, t) {
  const r = {},
    i = {},
    s = { $$scope: 1 };
  let n = e.length;
  for (; n--; ) {
    const o = e[n],
      c = t[n];
    if (c) {
      for (const u in o) u in c || (i[u] = 1);
      for (const u in c) s[u] || ((r[u] = c[u]), (s[u] = 1));
      e[n] = c;
    } else for (const u in o) s[u] = 1;
  }
  for (const o in i) o in r || (r[o] = void 0);
  return r;
}
function get_spread_object(e) {
  return typeof e == 'object' && e !== null ? e : {};
}
function bind(e, t, r) {
  const i = e.$$.props[t];
  i !== void 0 && ((e.$$.bound[i] = r), r(e.$$.ctx[i]));
}
function create_component(e) {
  e && e.c();
}
function claim_component(e, t) {
  e && e.l(t);
}
function mount_component(e, t, r, i) {
  const { fragment: s, on_mount: n, on_destroy: o, after_update: c } = e.$$;
  s && s.m(t, r),
    i ||
      add_render_callback(() => {
        const u = n.map(run).filter(is_function);
        o ? o.push(...u) : run_all(u), (e.$$.on_mount = []);
      }),
    c.forEach(add_render_callback);
}
function destroy_component(e, t) {
  const r = e.$$;
  r.fragment !== null &&
    (run_all(r.on_destroy),
    r.fragment && r.fragment.d(t),
    (r.on_destroy = r.fragment = null),
    (r.ctx = []));
}
function make_dirty(e, t) {
  e.$$.dirty[0] === -1 &&
    (dirty_components.push(e), schedule_update(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function init(e, t, r, i, s, n, o, c = [-1]) {
  const u = current_component;
  set_current_component(e);
  const d = (e.$$ = {
    fragment: null,
    ctx: null,
    props: n,
    update: noop,
    not_equal: s,
    bound: blank_object(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    callbacks: blank_object(),
    dirty: c,
    skip_bound: !1,
    root: t.target || u.$$.root,
  });
  o && o(d.root);
  let x = !1;
  if (
    ((d.ctx = r
      ? r(e, t.props || {}, (_, m, ...v) => {
          const p = v.length ? v[0] : m;
          return (
            d.ctx &&
              s(d.ctx[_], (d.ctx[_] = p)) &&
              (!d.skip_bound && d.bound[_] && d.bound[_](p),
              x && make_dirty(e, _)),
            m
          );
        })
      : []),
    d.update(),
    (x = !0),
    run_all(d.before_update),
    (d.fragment = i ? i(d.ctx) : !1),
    t.target)
  ) {
    if (t.hydrate) {
      start_hydrating();
      const _ = children(t.target);
      d.fragment && d.fragment.l(_), _.forEach(detach);
    } else d.fragment && d.fragment.c();
    t.intro && transition_in(e.$$.fragment),
      mount_component(e, t.target, t.anchor, t.customElement),
      end_hydrating(),
      flush();
  }
  set_current_component(u);
}
class SvelteComponent {
  $destroy() {
    destroy_component(this, 1), (this.$destroy = noop);
  }
  $on(t, r) {
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      i.push(r),
      () => {
        const s = i.indexOf(r);
        s !== -1 && i.splice(s, 1);
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
function writable(e, t = noop) {
  let r;
  const i = new Set();
  function s(c) {
    if (safe_not_equal(e, c) && ((e = c), r)) {
      const u = !subscriber_queue.length;
      for (const d of i) d[1](), subscriber_queue.push(d, e);
      if (u) {
        for (let d = 0; d < subscriber_queue.length; d += 2)
          subscriber_queue[d][0](subscriber_queue[d + 1]);
        subscriber_queue.length = 0;
      }
    }
  }
  function n(c) {
    s(c(e));
  }
  function o(c, u = noop) {
    const d = [c, u];
    return (
      i.add(d),
      i.size === 1 && (r = t(s) || noop),
      c(e),
      () => {
        i.delete(d), i.size === 0 && (r(), (r = null));
      }
    );
  }
  return { set: s, update: n, subscribe: o };
}
function getDefaults() {
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
let defaults = getDefaults();
function changeDefaults(e) {
  defaults = e;
}
const escapeTest = /[&<>"']/,
  escapeReplace = /[&<>"']/g,
  escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/,
  escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g,
  escapeReplacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  },
  getEscapeReplacement = (e) => escapeReplacements[e];
function escape(e, t) {
  if (t) {
    if (escapeTest.test(e))
      return e.replace(escapeReplace, getEscapeReplacement);
  } else if (escapeTestNoEncode.test(e))
    return e.replace(escapeReplaceNoEncode, getEscapeReplacement);
  return e;
}
const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function unescape(e) {
  return e.replace(
    unescapeTest,
    (t, r) => (
      (r = r.toLowerCase()),
      r === 'colon'
        ? ':'
        : r.charAt(0) === '#'
        ? r.charAt(1) === 'x'
          ? String.fromCharCode(parseInt(r.substring(2), 16))
          : String.fromCharCode(+r.substring(1))
        : ''
    )
  );
}
const caret = /(^|[^\[])\^/g;
function edit(e, t) {
  (e = e.source || e), (t = t || '');
  const r = {
    replace: (i, s) => (
      (s = s.source || s),
      (s = s.replace(caret, '$1')),
      (e = e.replace(i, s)),
      r
    ),
    getRegex: () => new RegExp(e, t),
  };
  return r;
}
const nonWordAndColonTest = /[^\w:]/g,
  originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function cleanUrl(e, t, r) {
  if (e) {
    let i;
    try {
      i = decodeURIComponent(unescape(r))
        .replace(nonWordAndColonTest, '')
        .toLowerCase();
    } catch {
      return null;
    }
    if (
      i.indexOf('javascript:') === 0 ||
      i.indexOf('vbscript:') === 0 ||
      i.indexOf('data:') === 0
    )
      return null;
  }
  t && !originIndependentUrl.test(r) && (r = resolveUrl(t, r));
  try {
    r = encodeURI(r).replace(/%25/g, '%');
  } catch {
    return null;
  }
  return r;
}
const baseUrls = {},
  justDomain = /^[^:]+:\/*[^/]*$/,
  protocol = /^([^:]+:)[\s\S]*$/,
  domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function resolveUrl(e, t) {
  baseUrls[' ' + e] ||
    (justDomain.test(e)
      ? (baseUrls[' ' + e] = e + '/')
      : (baseUrls[' ' + e] = rtrim(e, '/', !0))),
    (e = baseUrls[' ' + e]);
  const r = e.indexOf(':') === -1;
  return t.substring(0, 2) === '//'
    ? r
      ? t
      : e.replace(protocol, '$1') + t
    : t.charAt(0) === '/'
    ? r
      ? t
      : e.replace(domain, '$1') + t
    : e + t;
}
const noopTest = { exec: function () {} };
function merge(e) {
  let t = 1,
    r,
    i;
  for (; t < arguments.length; t++) {
    r = arguments[t];
    for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
  }
  return e;
}
function splitCells(e, t) {
  const r = e.replace(/\|/g, (n, o, c) => {
      let u = !1,
        d = o;
      for (; --d >= 0 && c[d] === '\\'; ) u = !u;
      return u ? '|' : ' |';
    }),
    i = r.split(/ \|/);
  let s = 0;
  if (
    (i[0].trim() || i.shift(), i[i.length - 1].trim() || i.pop(), i.length > t)
  )
    i.splice(t);
  else for (; i.length < t; ) i.push('');
  for (; s < i.length; s++) i[s] = i[s].trim().replace(/\\\|/g, '|');
  return i;
}
function rtrim(e, t, r) {
  const i = e.length;
  if (i === 0) return '';
  let s = 0;
  for (; s < i; ) {
    const n = e.charAt(i - s - 1);
    if (n === t && !r) s++;
    else if (n !== t && r) s++;
    else break;
  }
  return e.substr(0, i - s);
}
function findClosingBracket(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  const r = e.length;
  let i = 0,
    s = 0;
  for (; s < r; s++)
    if (e[s] === '\\') s++;
    else if (e[s] === t[0]) i++;
    else if (e[s] === t[1] && (i--, i < 0)) return s;
  return -1;
}
function checkSanitizeDeprecation(e) {
  e &&
    e.sanitize &&
    !e.silent &&
    console.warn(
      'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options'
    );
}
function repeatString(e, t) {
  if (t < 1) return '';
  let r = '';
  for (; t > 1; ) t & 1 && (r += e), (t >>= 1), (e += e);
  return r + e;
}
function outputLink(e, t, r, i) {
  const s = t.href,
    n = t.title ? escape(t.title) : null,
    o = e[1].replace(/\\([\[\]])/g, '$1');
  if (e[0].charAt(0) !== '!') {
    i.state.inLink = !0;
    const c = {
      type: 'link',
      raw: r,
      href: s,
      title: n,
      text: o,
      tokens: i.inlineTokens(o, []),
    };
    return (i.state.inLink = !1), c;
  } else return { type: 'image', raw: r, href: s, title: n, text: escape(o) };
}
function indentCodeCompensation(e, t) {
  const r = e.match(/^(\s+)(?:```)/);
  if (r === null) return t;
  const i = r[1];
  return t
    .split(
      `
`
    )
    .map((s) => {
      const n = s.match(/^\s+/);
      if (n === null) return s;
      const [o] = n;
      return o.length >= i.length ? s.slice(i.length) : s;
    }).join(`
`);
}
class Tokenizer {
  constructor(t) {
    this.options = t || defaults;
  }
  space(t) {
    const r = this.rules.block.newline.exec(t);
    if (r)
      return r[0].length > 1
        ? { type: 'space', raw: r[0] }
        : {
            raw: `
`,
          };
  }
  code(t) {
    const r = this.rules.block.code.exec(t);
    if (r) {
      const i = r[0].replace(/^ {1,4}/gm, '');
      return {
        type: 'code',
        raw: r[0],
        codeBlockStyle: 'indented',
        text: this.options.pedantic
          ? i
          : rtrim(
              i,
              `
`
            ),
      };
    }
  }
  fences(t) {
    const r = this.rules.block.fences.exec(t);
    if (r) {
      const i = r[0],
        s = indentCodeCompensation(i, r[3] || '');
      return { type: 'code', raw: i, lang: r[2] ? r[2].trim() : r[2], text: s };
    }
  }
  heading(t) {
    const r = this.rules.block.heading.exec(t);
    if (r) {
      let i = r[2].trim();
      if (/#$/.test(i)) {
        const n = rtrim(i, '#');
        (this.options.pedantic || !n || / $/.test(n)) && (i = n.trim());
      }
      const s = {
        type: 'heading',
        raw: r[0],
        depth: r[1].length,
        text: i,
        tokens: [],
      };
      return this.lexer.inline(s.text, s.tokens), s;
    }
  }
  hr(t) {
    const r = this.rules.block.hr.exec(t);
    if (r) return { type: 'hr', raw: r[0] };
  }
  blockquote(t) {
    const r = this.rules.block.blockquote.exec(t);
    if (r) {
      const i = r[0].replace(/^ *> ?/gm, '');
      return {
        type: 'blockquote',
        raw: r[0],
        tokens: this.lexer.blockTokens(i, []),
        text: i,
      };
    }
  }
  list(t) {
    let r = this.rules.block.list.exec(t);
    if (r) {
      let i,
        s,
        n,
        o,
        c,
        u,
        d,
        x,
        _,
        m,
        v,
        p,
        g = r[1].trim();
      const b = g.length > 1,
        l = {
          type: 'list',
          raw: '',
          ordered: b,
          start: b ? +g.slice(0, -1) : '',
          loose: !1,
          items: [],
        };
      (g = b ? `\\d{1,9}\\${g.slice(-1)}` : `\\${g}`),
        this.options.pedantic && (g = b ? g : '[*+-]');
      const a = new RegExp(`^( {0,3}${g})((?: [^\\n]*)?(?:\\n|$))`);
      for (
        ;
        t && ((p = !1), !(!(r = a.exec(t)) || this.rules.block.hr.test(t)));

      ) {
        if (
          ((i = r[0]),
          (t = t.substring(i.length)),
          (x = r[2].split(
            `
`,
            1
          )[0]),
          (_ = t.split(
            `
`,
            1
          )[0]),
          this.options.pedantic
            ? ((o = 2), (v = x.trimLeft()))
            : ((o = r[2].search(/[^ ]/)),
              (o = o > 4 ? 1 : o),
              (v = x.slice(o)),
              (o += r[1].length)),
          (u = !1),
          !x &&
            /^ *$/.test(_) &&
            ((i +=
              _ +
              `
`),
            (t = t.substring(_.length + 1)),
            (p = !0)),
          !p)
        ) {
          const f = new RegExp(
            `^ {0,${Math.min(3, o - 1)}}(?:[*+-]|\\d{1,9}[.)])`
          );
          for (
            ;
            t &&
            ((m = t.split(
              `
`,
              1
            )[0]),
            (x = m),
            this.options.pedantic &&
              (x = x.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ')),
            !f.test(x));

          ) {
            if (x.search(/[^ ]/) >= o || !x.trim())
              v +=
                `
` + x.slice(o);
            else if (!u)
              v +=
                `
` + x;
            else break;
            !u && !x.trim() && (u = !0),
              (i +=
                m +
                `
`),
              (t = t.substring(m.length + 1));
          }
        }
        l.loose || (d ? (l.loose = !0) : /\n *\n *$/.test(i) && (d = !0)),
          this.options.gfm &&
            ((s = /^\[[ xX]\] /.exec(v)),
            s && ((n = s[0] !== '[ ] '), (v = v.replace(/^\[[ xX]\] +/, '')))),
          l.items.push({
            type: 'list_item',
            raw: i,
            task: !!s,
            checked: n,
            loose: !1,
            text: v,
          }),
          (l.raw += i);
      }
      (l.items[l.items.length - 1].raw = i.trimRight()),
        (l.items[l.items.length - 1].text = v.trimRight()),
        (l.raw = l.raw.trimRight());
      const h = l.items.length;
      for (c = 0; c < h; c++)
        (this.lexer.state.top = !1),
          (l.items[c].tokens = this.lexer.blockTokens(l.items[c].text, [])),
          !l.loose &&
            l.items[c].tokens.some((f) => f.type === 'space') &&
            ((l.loose = !0), (l.items[c].loose = !0));
      return l;
    }
  }
  html(t) {
    const r = this.rules.block.html.exec(t);
    if (r) {
      const i = {
        type: 'html',
        raw: r[0],
        pre:
          !this.options.sanitizer &&
          (r[1] === 'pre' || r[1] === 'script' || r[1] === 'style'),
        text: r[0],
      };
      return (
        this.options.sanitize &&
          ((i.type = 'paragraph'),
          (i.text = this.options.sanitizer
            ? this.options.sanitizer(r[0])
            : escape(r[0])),
          (i.tokens = []),
          this.lexer.inline(i.text, i.tokens)),
        i
      );
    }
  }
  def(t) {
    const r = this.rules.block.def.exec(t);
    if (r) {
      r[3] && (r[3] = r[3].substring(1, r[3].length - 1));
      const i = r[1].toLowerCase().replace(/\s+/g, ' ');
      return { type: 'def', tag: i, raw: r[0], href: r[2], title: r[3] };
    }
  }
  table(t) {
    const r = this.rules.block.table.exec(t);
    if (r) {
      const i = {
        type: 'table',
        header: splitCells(r[1]).map((s) => ({ text: s })),
        align: r[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        rows: r[3]
          ? r[3].replace(/\n[ \t]*$/, '').split(`
`)
          : [],
      };
      if (i.header.length === i.align.length) {
        i.raw = r[0];
        let s = i.align.length,
          n,
          o,
          c,
          u;
        for (n = 0; n < s; n++)
          /^ *-+: *$/.test(i.align[n])
            ? (i.align[n] = 'right')
            : /^ *:-+: *$/.test(i.align[n])
            ? (i.align[n] = 'center')
            : /^ *:-+ *$/.test(i.align[n])
            ? (i.align[n] = 'left')
            : (i.align[n] = null);
        for (s = i.rows.length, n = 0; n < s; n++)
          i.rows[n] = splitCells(i.rows[n], i.header.length).map((d) => ({
            text: d,
          }));
        for (s = i.header.length, o = 0; o < s; o++)
          (i.header[o].tokens = []),
            this.lexer.inlineTokens(i.header[o].text, i.header[o].tokens);
        for (s = i.rows.length, o = 0; o < s; o++)
          for (u = i.rows[o], c = 0; c < u.length; c++)
            (u[c].tokens = []), this.lexer.inlineTokens(u[c].text, u[c].tokens);
        return i;
      }
    }
  }
  lheading(t) {
    const r = this.rules.block.lheading.exec(t);
    if (r) {
      const i = {
        type: 'heading',
        raw: r[0],
        depth: r[2].charAt(0) === '=' ? 1 : 2,
        text: r[1],
        tokens: [],
      };
      return this.lexer.inline(i.text, i.tokens), i;
    }
  }
  paragraph(t) {
    const r = this.rules.block.paragraph.exec(t);
    if (r) {
      const i = {
        type: 'paragraph',
        raw: r[0],
        text:
          r[1].charAt(r[1].length - 1) ===
          `
`
            ? r[1].slice(0, -1)
            : r[1],
        tokens: [],
      };
      return this.lexer.inline(i.text, i.tokens), i;
    }
  }
  text(t) {
    const r = this.rules.block.text.exec(t);
    if (r) {
      const i = { type: 'text', raw: r[0], text: r[0], tokens: [] };
      return this.lexer.inline(i.text, i.tokens), i;
    }
  }
  escape(t) {
    const r = this.rules.inline.escape.exec(t);
    if (r) return { type: 'escape', raw: r[0], text: escape(r[1]) };
  }
  tag(t) {
    const r = this.rules.inline.tag.exec(t);
    if (r)
      return (
        !this.lexer.state.inLink && /^<a /i.test(r[0])
          ? (this.lexer.state.inLink = !0)
          : this.lexer.state.inLink &&
            /^<\/a>/i.test(r[0]) &&
            (this.lexer.state.inLink = !1),
        !this.lexer.state.inRawBlock &&
        /^<(pre|code|kbd|script)(\s|>)/i.test(r[0])
          ? (this.lexer.state.inRawBlock = !0)
          : this.lexer.state.inRawBlock &&
            /^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0]) &&
            (this.lexer.state.inRawBlock = !1),
        {
          type: this.options.sanitize ? 'text' : 'html',
          raw: r[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          text: this.options.sanitize
            ? this.options.sanitizer
              ? this.options.sanitizer(r[0])
              : escape(r[0])
            : r[0],
        }
      );
  }
  link(t) {
    const r = this.rules.inline.link.exec(t);
    if (r) {
      const i = r[2].trim();
      if (!this.options.pedantic && /^</.test(i)) {
        if (!/>$/.test(i)) return;
        const o = rtrim(i.slice(0, -1), '\\');
        if ((i.length - o.length) % 2 == 0) return;
      } else {
        const o = findClosingBracket(r[2], '()');
        if (o > -1) {
          const u = (r[0].indexOf('!') === 0 ? 5 : 4) + r[1].length + o;
          (r[2] = r[2].substring(0, o)),
            (r[0] = r[0].substring(0, u).trim()),
            (r[3] = '');
        }
      }
      let s = r[2],
        n = '';
      if (this.options.pedantic) {
        const o = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
        o && ((s = o[1]), (n = o[3]));
      } else n = r[3] ? r[3].slice(1, -1) : '';
      return (
        (s = s.trim()),
        /^</.test(s) &&
          (this.options.pedantic && !/>$/.test(i)
            ? (s = s.slice(1))
            : (s = s.slice(1, -1))),
        outputLink(
          r,
          {
            href: s && s.replace(this.rules.inline._escapes, '$1'),
            title: n && n.replace(this.rules.inline._escapes, '$1'),
          },
          r[0],
          this.lexer
        )
      );
    }
  }
  reflink(t, r) {
    let i;
    if (
      (i = this.rules.inline.reflink.exec(t)) ||
      (i = this.rules.inline.nolink.exec(t))
    ) {
      let s = (i[2] || i[1]).replace(/\s+/g, ' ');
      if (((s = r[s.toLowerCase()]), !s || !s.href)) {
        const n = i[0].charAt(0);
        return { type: 'text', raw: n, text: n };
      }
      return outputLink(i, s, i[0], this.lexer);
    }
  }
  emStrong(t, r, i = '') {
    let s = this.rules.inline.emStrong.lDelim.exec(t);
    if (!s || (s[3] && i.match(/[\p{L}\p{N}]/u))) return;
    const n = s[1] || s[2] || '';
    if (!n || (n && (i === '' || this.rules.inline.punctuation.exec(i)))) {
      const o = s[0].length - 1;
      let c,
        u,
        d = o,
        x = 0;
      const _ =
        s[0][0] === '*'
          ? this.rules.inline.emStrong.rDelimAst
          : this.rules.inline.emStrong.rDelimUnd;
      for (
        _.lastIndex = 0, r = r.slice(-1 * t.length + o);
        (s = _.exec(r)) != null;

      ) {
        if (((c = s[1] || s[2] || s[3] || s[4] || s[5] || s[6]), !c)) continue;
        if (((u = c.length), s[3] || s[4])) {
          d += u;
          continue;
        } else if ((s[5] || s[6]) && o % 3 && !((o + u) % 3)) {
          x += u;
          continue;
        }
        if (((d -= u), d > 0)) continue;
        if (((u = Math.min(u, u + d + x)), Math.min(o, u) % 2)) {
          const v = t.slice(1, o + s.index + u);
          return {
            type: 'em',
            raw: t.slice(0, o + s.index + u + 1),
            text: v,
            tokens: this.lexer.inlineTokens(v, []),
          };
        }
        const m = t.slice(2, o + s.index + u - 1);
        return {
          type: 'strong',
          raw: t.slice(0, o + s.index + u + 1),
          text: m,
          tokens: this.lexer.inlineTokens(m, []),
        };
      }
    }
  }
  codespan(t) {
    const r = this.rules.inline.code.exec(t);
    if (r) {
      let i = r[2].replace(/\n/g, ' ');
      const s = /[^ ]/.test(i),
        n = /^ /.test(i) && / $/.test(i);
      return (
        s && n && (i = i.substring(1, i.length - 1)),
        (i = escape(i, !0)),
        { type: 'codespan', raw: r[0], text: i }
      );
    }
  }
  br(t) {
    const r = this.rules.inline.br.exec(t);
    if (r) return { type: 'br', raw: r[0] };
  }
  del(t) {
    const r = this.rules.inline.del.exec(t);
    if (r)
      return {
        type: 'del',
        raw: r[0],
        text: r[2],
        tokens: this.lexer.inlineTokens(r[2], []),
      };
  }
  autolink(t, r) {
    const i = this.rules.inline.autolink.exec(t);
    if (i) {
      let s, n;
      return (
        i[2] === '@'
          ? ((s = escape(this.options.mangle ? r(i[1]) : i[1])),
            (n = 'mailto:' + s))
          : ((s = escape(i[1])), (n = s)),
        {
          type: 'link',
          raw: i[0],
          text: s,
          href: n,
          tokens: [{ type: 'text', raw: s, text: s }],
        }
      );
    }
  }
  url(t, r) {
    let i;
    if ((i = this.rules.inline.url.exec(t))) {
      let s, n;
      if (i[2] === '@')
        (s = escape(this.options.mangle ? r(i[0]) : i[0])), (n = 'mailto:' + s);
      else {
        let o;
        do (o = i[0]), (i[0] = this.rules.inline._backpedal.exec(i[0])[0]);
        while (o !== i[0]);
        (s = escape(i[0])), i[1] === 'www.' ? (n = 'http://' + s) : (n = s);
      }
      return {
        type: 'link',
        raw: i[0],
        text: s,
        href: n,
        tokens: [{ type: 'text', raw: s, text: s }],
      };
    }
  }
  inlineText(t, r) {
    const i = this.rules.inline.text.exec(t);
    if (i) {
      let s;
      return (
        this.lexer.state.inRawBlock
          ? (s = this.options.sanitize
              ? this.options.sanitizer
                ? this.options.sanitizer(i[0])
                : escape(i[0])
              : i[0])
          : (s = escape(this.options.smartypants ? r(i[0]) : i[0])),
        { type: 'text', raw: i[0], text: s }
      );
    }
  }
}
const block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences:
    /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,
  html: '^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))',
  def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph:
    /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/,
};
block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def)
  .replace('label', block._label)
  .replace('title', block._title)
  .getRegex();
block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */)
  .replace('bull', block.bullet)
  .getRegex();
block.list = edit(block.list)
  .replace(/bull/g, block.bullet)
  .replace(
    'hr',
    '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))'
  )
  .replace('def', '\\n+(?=' + block.def.source + ')')
  .getRegex();
block._tag =
  'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, 'i')
  .replace('comment', block._comment)
  .replace('tag', block._tag)
  .replace(
    'attribute',
    / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
  )
  .getRegex();
block.paragraph = edit(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '')
  .replace('|table', '')
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
  .replace(
    'html',
    '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
  )
  .replace('tag', block._tag)
  .getRegex();
block.blockquote = edit(block.blockquote)
  .replace('paragraph', block.paragraph)
  .getRegex();
block.normal = merge({}, block);
block.gfm = merge({}, block.normal, {
  table:
    '^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
});
block.gfm.table = edit(block.gfm.table)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('blockquote', ' {0,3}>')
  .replace('code', ' {4}[^\\n]')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
  .replace(
    'html',
    '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
  )
  .replace('tag', block._tag)
  .getRegex();
block.gfm.paragraph = edit(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '')
  .replace('table', block.gfm.table)
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
  .replace(
    'html',
    '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
  )
  .replace('tag', block._tag)
  .getRegex();
block.pedantic = merge({}, block.normal, {
  html: edit(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  )
    .replace('comment', block._comment)
    .replace(
      /tag/g,
      '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b'
    )
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  paragraph: edit(block.normal._paragraph)
    .replace('hr', block.hr)
    .replace(
      'heading',
      ` *#{1,6} *[^
]`
    )
    .replace('lheading', block.lheading)
    .replace('blockquote', ' {0,3}>')
    .replace('|fences', '')
    .replace('|list', '')
    .replace('|html', '')
    .getRegex(),
});
const inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
  nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
  reflinkSearch: 'reflink|nolink(?!\\()',
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    rDelimAst:
      /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd:
      /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/,
};
inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
inline.punctuation = edit(inline.punctuation)
  .replace(/punctuation/g, inline._punctuation)
  .getRegex();
inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /\\\*|\\_/g;
inline._comment = edit(block._comment).replace('(?:-->|$)', '-->').getRegex();
inline.emStrong.lDelim = edit(inline.emStrong.lDelim)
  .replace(/punct/g, inline._punctuation)
  .getRegex();
inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, 'g')
  .replace(/punct/g, inline._punctuation)
  .getRegex();
inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, 'g')
  .replace(/punct/g, inline._punctuation)
  .getRegex();
inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email =
  /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink)
  .replace('scheme', inline._scheme)
  .replace('email', inline._email)
  .getRegex();
inline._attribute =
  /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag)
  .replace('comment', inline._comment)
  .replace('attribute', inline._attribute)
  .getRegex();
inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link)
  .replace('label', inline._label)
  .replace('href', inline._href)
  .replace('title', inline._title)
  .getRegex();
inline.reflink = edit(inline.reflink)
  .replace('label', inline._label)
  .getRegex();
inline.reflinkSearch = edit(inline.reflinkSearch, 'g')
  .replace('reflink', inline.reflink)
  .replace('nolink', inline.nolink)
  .getRegex();
inline.normal = merge({}, inline);
inline.pedantic = merge({}, inline.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g,
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g,
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/)
    .replace('label', inline._label)
    .getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace('label', inline._label)
    .getRegex(),
});
inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email:
    /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal:
    /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
});
inline.gfm.url = edit(inline.gfm.url, 'i')
  .replace('email', inline.gfm._extended_email)
  .getRegex();
inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text)
    .replace('\\b_', '\\b_| {2,}\\n')
    .replace(/\{2,\}/g, '*')
    .getRegex(),
});
function smartypants(e) {
  return e
    .replace(/---/g, '\u2014')
    .replace(/--/g, '\u2013')
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    .replace(/'/g, '\u2019')
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201C')
    .replace(/"/g, '\u201D')
    .replace(/\.{3}/g, '\u2026');
}
function mangle(e) {
  let t = '',
    r,
    i;
  const s = e.length;
  for (r = 0; r < s; r++)
    (i = e.charCodeAt(r)),
      Math.random() > 0.5 && (i = 'x' + i.toString(16)),
      (t += '&#' + i + ';');
  return t;
}
class Lexer {
  constructor(t) {
    (this.tokens = []),
      (this.tokens.links = Object.create(null)),
      (this.options = t || defaults),
      (this.options.tokenizer = this.options.tokenizer || new Tokenizer()),
      (this.tokenizer = this.options.tokenizer),
      (this.tokenizer.options = this.options),
      (this.tokenizer.lexer = this),
      (this.inlineQueue = []),
      (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
    const r = { block: block.normal, inline: inline.normal };
    this.options.pedantic
      ? ((r.block = block.pedantic), (r.inline = inline.pedantic))
      : this.options.gfm &&
        ((r.block = block.gfm),
        this.options.breaks
          ? (r.inline = inline.breaks)
          : (r.inline = inline.gfm)),
      (this.tokenizer.rules = r);
  }
  static get rules() {
    return { block, inline };
  }
  static lex(t, r) {
    return new Lexer(r).lex(t);
  }
  static lexInline(t, r) {
    return new Lexer(r).inlineTokens(t);
  }
  lex(t) {
    (t = t
      .replace(
        /\r\n|\r/g,
        `
`
      )
      .replace(/\t/g, '    ')),
      this.blockTokens(t, this.tokens);
    let r;
    for (; (r = this.inlineQueue.shift()); ) this.inlineTokens(r.src, r.tokens);
    return this.tokens;
  }
  blockTokens(t, r = []) {
    this.options.pedantic && (t = t.replace(/^ +$/gm, ''));
    let i, s, n, o;
    for (; t; )
      if (
        !(
          this.options.extensions &&
          this.options.extensions.block &&
          this.options.extensions.block.some((c) =>
            (i = c.call({ lexer: this }, t, r))
              ? ((t = t.substring(i.raw.length)), r.push(i), !0)
              : !1
          )
        )
      ) {
        if ((i = this.tokenizer.space(t))) {
          (t = t.substring(i.raw.length)), i.type && r.push(i);
          continue;
        }
        if ((i = this.tokenizer.code(t))) {
          (t = t.substring(i.raw.length)),
            (s = r[r.length - 1]),
            s && (s.type === 'paragraph' || s.type === 'text')
              ? ((s.raw +=
                  `
` + i.raw),
                (s.text +=
                  `
` + i.text),
                (this.inlineQueue[this.inlineQueue.length - 1].src = s.text))
              : r.push(i);
          continue;
        }
        if ((i = this.tokenizer.fences(t))) {
          (t = t.substring(i.raw.length)), r.push(i);
          continue;
        }
        if ((i = this.tokenizer.heading(t))) {
          (t = t.substring(i.raw.length)), r.push(i);
          continue;
        }
        if ((i = this.tokenizer.hr(t))) {
          (t = t.substring(i.raw.length)), r.push(i);
          continue;
        }
        if ((i = this.tokenizer.blockquote(t))) {
          (t = t.substring(i.raw.length)), r.push(i);
          continue;
        }
        if ((i = this.tokenizer.list(t))) {
          (t = t.substring(i.raw.length)), r.push(i);
          continue;
        }
        if ((i = this.tokenizer.html(t))) {
          (t = t.substring(i.raw.length)), r.push(i);
          continue;
        }
        if ((i = this.tokenizer.def(t))) {
          (t = t.substring(i.raw.length)),
            (s = r[r.length - 1]),
            s && (s.type === 'paragraph' || s.type === 'text')
              ? ((s.raw +=
                  `
` + i.raw),
                (s.text +=
                  `
` + i.raw),
                (this.inlineQueue[this.inlineQueue.length - 1].src = s.text))
              : this.tokens.links[i.tag] ||
                (this.tokens.links[i.tag] = { href: i.href, title: i.title });
          continue;
        }
        if ((i = this.tokenizer.table(t))) {
          (t = t.substring(i.raw.length)), r.push(i);
          continue;
        }
        if ((i = this.tokenizer.lheading(t))) {
          (t = t.substring(i.raw.length)), r.push(i);
          continue;
        }
        if (
          ((n = t),
          this.options.extensions && this.options.extensions.startBlock)
        ) {
          let c = 1 / 0;
          const u = t.slice(1);
          let d;
          this.options.extensions.startBlock.forEach(function (x) {
            (d = x.call({ lexer: this }, u)),
              typeof d == 'number' && d >= 0 && (c = Math.min(c, d));
          }),
            c < 1 / 0 && c >= 0 && (n = t.substring(0, c + 1));
        }
        if (this.state.top && (i = this.tokenizer.paragraph(n))) {
          (s = r[r.length - 1]),
            o && s.type === 'paragraph'
              ? ((s.raw +=
                  `
` + i.raw),
                (s.text +=
                  `
` + i.text),
                this.inlineQueue.pop(),
                (this.inlineQueue[this.inlineQueue.length - 1].src = s.text))
              : r.push(i),
            (o = n.length !== t.length),
            (t = t.substring(i.raw.length));
          continue;
        }
        if ((i = this.tokenizer.text(t))) {
          (t = t.substring(i.raw.length)),
            (s = r[r.length - 1]),
            s && s.type === 'text'
              ? ((s.raw +=
                  `
` + i.raw),
                (s.text +=
                  `
` + i.text),
                this.inlineQueue.pop(),
                (this.inlineQueue[this.inlineQueue.length - 1].src = s.text))
              : r.push(i);
          continue;
        }
        if (t) {
          const c = 'Infinite loop on byte: ' + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(c);
            break;
          } else throw new Error(c);
        }
      }
    return (this.state.top = !0), r;
  }
  inline(t, r) {
    this.inlineQueue.push({ src: t, tokens: r });
  }
  inlineTokens(t, r = []) {
    let i,
      s,
      n,
      o = t,
      c,
      u,
      d;
    if (this.tokens.links) {
      const x = Object.keys(this.tokens.links);
      if (x.length > 0)
        for (
          ;
          (c = this.tokenizer.rules.inline.reflinkSearch.exec(o)) != null;

        )
          x.includes(c[0].slice(c[0].lastIndexOf('[') + 1, -1)) &&
            (o =
              o.slice(0, c.index) +
              '[' +
              repeatString('a', c[0].length - 2) +
              ']' +
              o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (c = this.tokenizer.rules.inline.blockSkip.exec(o)) != null; )
      o =
        o.slice(0, c.index) +
        '[' +
        repeatString('a', c[0].length - 2) +
        ']' +
        o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (c = this.tokenizer.rules.inline.escapedEmSt.exec(o)) != null; )
      o =
        o.slice(0, c.index) +
        '++' +
        o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    for (; t; )
      if (
        (u || (d = ''),
        (u = !1),
        !(
          this.options.extensions &&
          this.options.extensions.inline &&
          this.options.extensions.inline.some((x) =>
            (i = x.call({ lexer: this }, t, r))
              ? ((t = t.substring(i.raw.length)), r.push(i), !0)
              : !1
          )
        ))
      ) {
        if ((i = this.tokenizer.escape(t))) {
          (t = t.substring(i.raw.length)), r.push(i);
          continue;
        }
        if ((i = this.tokenizer.tag(t))) {
          (t = t.substring(i.raw.length)),
            (s = r[r.length - 1]),
            s && i.type === 'text' && s.type === 'text'
              ? ((s.raw += i.raw), (s.text += i.text))
              : r.push(i);
          continue;
        }
        if ((i = this.tokenizer.link(t))) {
          (t = t.substring(i.raw.length)), r.push(i);
          continue;
        }
        if ((i = this.tokenizer.reflink(t, this.tokens.links))) {
          (t = t.substring(i.raw.length)),
            (s = r[r.length - 1]),
            s && i.type === 'text' && s.type === 'text'
              ? ((s.raw += i.raw), (s.text += i.text))
              : r.push(i);
          continue;
        }
        if ((i = this.tokenizer.emStrong(t, o, d))) {
          (t = t.substring(i.raw.length)), r.push(i);
          continue;
        }
        if ((i = this.tokenizer.codespan(t))) {
          (t = t.substring(i.raw.length)), r.push(i);
          continue;
        }
        if ((i = this.tokenizer.br(t))) {
          (t = t.substring(i.raw.length)), r.push(i);
          continue;
        }
        if ((i = this.tokenizer.del(t))) {
          (t = t.substring(i.raw.length)), r.push(i);
          continue;
        }
        if ((i = this.tokenizer.autolink(t, mangle))) {
          (t = t.substring(i.raw.length)), r.push(i);
          continue;
        }
        if (!this.state.inLink && (i = this.tokenizer.url(t, mangle))) {
          (t = t.substring(i.raw.length)), r.push(i);
          continue;
        }
        if (
          ((n = t),
          this.options.extensions && this.options.extensions.startInline)
        ) {
          let x = 1 / 0;
          const _ = t.slice(1);
          let m;
          this.options.extensions.startInline.forEach(function (v) {
            (m = v.call({ lexer: this }, _)),
              typeof m == 'number' && m >= 0 && (x = Math.min(x, m));
          }),
            x < 1 / 0 && x >= 0 && (n = t.substring(0, x + 1));
        }
        if ((i = this.tokenizer.inlineText(n, smartypants))) {
          (t = t.substring(i.raw.length)),
            i.raw.slice(-1) !== '_' && (d = i.raw.slice(-1)),
            (u = !0),
            (s = r[r.length - 1]),
            s && s.type === 'text'
              ? ((s.raw += i.raw), (s.text += i.text))
              : r.push(i);
          continue;
        }
        if (t) {
          const x = 'Infinite loop on byte: ' + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(x);
            break;
          } else throw new Error(x);
        }
      }
    return r;
  }
}
class Renderer {
  constructor(t) {
    this.options = t || defaults;
  }
  code(t, r, i) {
    const s = (r || '').match(/\S*/)[0];
    if (this.options.highlight) {
      const n = this.options.highlight(t, s);
      n != null && n !== t && ((i = !0), (t = n));
    }
    return (
      (t =
        t.replace(/\n$/, '') +
        `
`),
      s
        ? '<pre><code class="' +
          this.options.langPrefix +
          escape(s, !0) +
          '">' +
          (i ? t : escape(t, !0)) +
          `</code></pre>
`
        : '<pre><code>' +
          (i ? t : escape(t, !0)) +
          `</code></pre>
`
    );
  }
  blockquote(t) {
    return (
      `<blockquote>
` +
      t +
      `</blockquote>
`
    );
  }
  html(t) {
    return t;
  }
  heading(t, r, i, s) {
    return this.options.headerIds
      ? '<h' +
          r +
          ' id="' +
          this.options.headerPrefix +
          s.slug(i) +
          '">' +
          t +
          '</h' +
          r +
          `>
`
      : '<h' +
          r +
          '>' +
          t +
          '</h' +
          r +
          `>
`;
  }
  hr() {
    return this.options.xhtml
      ? `<hr/>
`
      : `<hr>
`;
  }
  list(t, r, i) {
    const s = r ? 'ol' : 'ul',
      n = r && i !== 1 ? ' start="' + i + '"' : '';
    return (
      '<' +
      s +
      n +
      `>
` +
      t +
      '</' +
      s +
      `>
`
    );
  }
  listitem(t) {
    return (
      '<li>' +
      t +
      `</li>
`
    );
  }
  checkbox(t) {
    return (
      '<input ' +
      (t ? 'checked="" ' : '') +
      'disabled="" type="checkbox"' +
      (this.options.xhtml ? ' /' : '') +
      '> '
    );
  }
  paragraph(t) {
    return (
      '<p>' +
      t +
      `</p>
`
    );
  }
  table(t, r) {
    return (
      r && (r = '<tbody>' + r + '</tbody>'),
      `<table>
<thead>
` +
        t +
        `</thead>
` +
        r +
        `</table>
`
    );
  }
  tablerow(t) {
    return (
      `<tr>
` +
      t +
      `</tr>
`
    );
  }
  tablecell(t, r) {
    const i = r.header ? 'th' : 'td';
    return (
      (r.align ? '<' + i + ' align="' + r.align + '">' : '<' + i + '>') +
      t +
      '</' +
      i +
      `>
`
    );
  }
  strong(t) {
    return '<strong>' + t + '</strong>';
  }
  em(t) {
    return '<em>' + t + '</em>';
  }
  codespan(t) {
    return '<code>' + t + '</code>';
  }
  br() {
    return this.options.xhtml ? '<br/>' : '<br>';
  }
  del(t) {
    return '<del>' + t + '</del>';
  }
  link(t, r, i) {
    if (
      ((t = cleanUrl(this.options.sanitize, this.options.baseUrl, t)),
      t === null)
    )
      return i;
    let s = '<a href="' + escape(t) + '"';
    return r && (s += ' title="' + r + '"'), (s += '>' + i + '</a>'), s;
  }
  image(t, r, i) {
    if (
      ((t = cleanUrl(this.options.sanitize, this.options.baseUrl, t)),
      t === null)
    )
      return i;
    let s = '<img src="' + t + '" alt="' + i + '"';
    return (
      r && (s += ' title="' + r + '"'),
      (s += this.options.xhtml ? '/>' : '>'),
      s
    );
  }
  text(t) {
    return t;
  }
}
class TextRenderer {
  strong(t) {
    return t;
  }
  em(t) {
    return t;
  }
  codespan(t) {
    return t;
  }
  del(t) {
    return t;
  }
  html(t) {
    return t;
  }
  text(t) {
    return t;
  }
  link(t, r, i) {
    return '' + i;
  }
  image(t, r, i) {
    return '' + i;
  }
  br() {
    return '';
  }
}
class Slugger {
  constructor() {
    this.seen = {};
  }
  serialize(t) {
    return t
      .toLowerCase()
      .trim()
      .replace(/<[!\/a-z].*?>/gi, '')
      .replace(
        /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
        ''
      )
      .replace(/\s/g, '-');
  }
  getNextSafeSlug(t, r) {
    let i = t,
      s = 0;
    if (this.seen.hasOwnProperty(i)) {
      s = this.seen[t];
      do s++, (i = t + '-' + s);
      while (this.seen.hasOwnProperty(i));
    }
    return r || ((this.seen[t] = s), (this.seen[i] = 0)), i;
  }
  slug(t, r = {}) {
    const i = this.serialize(t);
    return this.getNextSafeSlug(i, r.dryrun);
  }
}
class Parser {
  constructor(t) {
    (this.options = t || defaults),
      (this.options.renderer = this.options.renderer || new Renderer()),
      (this.renderer = this.options.renderer),
      (this.renderer.options = this.options),
      (this.textRenderer = new TextRenderer()),
      (this.slugger = new Slugger());
  }
  static parse(t, r) {
    return new Parser(r).parse(t);
  }
  static parseInline(t, r) {
    return new Parser(r).parseInline(t);
  }
  parse(t, r = !0) {
    let i = '',
      s,
      n,
      o,
      c,
      u,
      d,
      x,
      _,
      m,
      v,
      p,
      g,
      b,
      l,
      a,
      h,
      f,
      y,
      k;
    const w = t.length;
    for (s = 0; s < w; s++) {
      if (
        ((v = t[s]),
        this.options.extensions &&
          this.options.extensions.renderers &&
          this.options.extensions.renderers[v.type] &&
          ((k = this.options.extensions.renderers[v.type].call(
            { parser: this },
            v
          )),
          k !== !1 ||
            ![
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
            ].includes(v.type)))
      ) {
        i += k || '';
        continue;
      }
      switch (v.type) {
        case 'space':
          continue;
        case 'hr': {
          i += this.renderer.hr();
          continue;
        }
        case 'heading': {
          i += this.renderer.heading(
            this.parseInline(v.tokens),
            v.depth,
            unescape(this.parseInline(v.tokens, this.textRenderer)),
            this.slugger
          );
          continue;
        }
        case 'code': {
          i += this.renderer.code(v.text, v.lang, v.escaped);
          continue;
        }
        case 'table': {
          for (_ = '', x = '', c = v.header.length, n = 0; n < c; n++)
            x += this.renderer.tablecell(this.parseInline(v.header[n].tokens), {
              header: !0,
              align: v.align[n],
            });
          for (
            _ += this.renderer.tablerow(x), m = '', c = v.rows.length, n = 0;
            n < c;
            n++
          ) {
            for (d = v.rows[n], x = '', u = d.length, o = 0; o < u; o++)
              x += this.renderer.tablecell(this.parseInline(d[o].tokens), {
                header: !1,
                align: v.align[o],
              });
            m += this.renderer.tablerow(x);
          }
          i += this.renderer.table(_, m);
          continue;
        }
        case 'blockquote': {
          (m = this.parse(v.tokens)), (i += this.renderer.blockquote(m));
          continue;
        }
        case 'list': {
          for (
            p = v.ordered,
              g = v.start,
              b = v.loose,
              c = v.items.length,
              m = '',
              n = 0;
            n < c;
            n++
          )
            (a = v.items[n]),
              (h = a.checked),
              (f = a.task),
              (l = ''),
              a.task &&
                ((y = this.renderer.checkbox(h)),
                b
                  ? a.tokens.length > 0 && a.tokens[0].type === 'paragraph'
                    ? ((a.tokens[0].text = y + ' ' + a.tokens[0].text),
                      a.tokens[0].tokens &&
                        a.tokens[0].tokens.length > 0 &&
                        a.tokens[0].tokens[0].type === 'text' &&
                        (a.tokens[0].tokens[0].text =
                          y + ' ' + a.tokens[0].tokens[0].text))
                    : a.tokens.unshift({ type: 'text', text: y })
                  : (l += y)),
              (l += this.parse(a.tokens, b)),
              (m += this.renderer.listitem(l, f, h));
          i += this.renderer.list(m, p, g);
          continue;
        }
        case 'html': {
          i += this.renderer.html(v.text);
          continue;
        }
        case 'paragraph': {
          i += this.renderer.paragraph(this.parseInline(v.tokens));
          continue;
        }
        case 'text': {
          for (
            m = v.tokens ? this.parseInline(v.tokens) : v.text;
            s + 1 < w && t[s + 1].type === 'text';

          )
            (v = t[++s]),
              (m +=
                `
` + (v.tokens ? this.parseInline(v.tokens) : v.text));
          i += r ? this.renderer.paragraph(m) : m;
          continue;
        }
        default: {
          const P = 'Token with "' + v.type + '" type was not found.';
          if (this.options.silent) {
            console.error(P);
            return;
          } else throw new Error(P);
        }
      }
    }
    return i;
  }
  parseInline(t, r) {
    r = r || this.renderer;
    let i = '',
      s,
      n,
      o;
    const c = t.length;
    for (s = 0; s < c; s++) {
      if (
        ((n = t[s]),
        this.options.extensions &&
          this.options.extensions.renderers &&
          this.options.extensions.renderers[n.type] &&
          ((o = this.options.extensions.renderers[n.type].call(
            { parser: this },
            n
          )),
          o !== !1 ||
            ![
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
            ].includes(n.type)))
      ) {
        i += o || '';
        continue;
      }
      switch (n.type) {
        case 'escape': {
          i += r.text(n.text);
          break;
        }
        case 'html': {
          i += r.html(n.text);
          break;
        }
        case 'link': {
          i += r.link(n.href, n.title, this.parseInline(n.tokens, r));
          break;
        }
        case 'image': {
          i += r.image(n.href, n.title, n.text);
          break;
        }
        case 'strong': {
          i += r.strong(this.parseInline(n.tokens, r));
          break;
        }
        case 'em': {
          i += r.em(this.parseInline(n.tokens, r));
          break;
        }
        case 'codespan': {
          i += r.codespan(n.text);
          break;
        }
        case 'br': {
          i += r.br();
          break;
        }
        case 'del': {
          i += r.del(this.parseInline(n.tokens, r));
          break;
        }
        case 'text': {
          i += r.text(n.text);
          break;
        }
        default: {
          const u = 'Token with "' + n.type + '" type was not found.';
          if (this.options.silent) {
            console.error(u);
            return;
          } else throw new Error(u);
        }
      }
    }
    return i;
  }
}
function marked(e, t, r) {
  if (typeof e == 'undefined' || e === null)
    throw new Error('marked(): input parameter is undefined or null');
  if (typeof e != 'string')
    throw new Error(
      'marked(): input parameter is of type ' +
        Object.prototype.toString.call(e) +
        ', string expected'
    );
  if (
    (typeof t == 'function' && ((r = t), (t = null)),
    (t = merge({}, marked.defaults, t || {})),
    checkSanitizeDeprecation(t),
    r)
  ) {
    const i = t.highlight;
    let s;
    try {
      s = Lexer.lex(e, t);
    } catch (c) {
      return r(c);
    }
    const n = function (c) {
      let u;
      if (!c)
        try {
          t.walkTokens && marked.walkTokens(s, t.walkTokens),
            (u = Parser.parse(s, t));
        } catch (d) {
          c = d;
        }
      return (t.highlight = i), c ? r(c) : r(null, u);
    };
    if (!i || i.length < 3 || (delete t.highlight, !s.length)) return n();
    let o = 0;
    marked.walkTokens(s, function (c) {
      c.type === 'code' &&
        (o++,
        setTimeout(() => {
          i(c.text, c.lang, function (u, d) {
            if (u) return n(u);
            d != null && d !== c.text && ((c.text = d), (c.escaped = !0)),
              o--,
              o === 0 && n();
          });
        }, 0));
    }),
      o === 0 && n();
    return;
  }
  try {
    const i = Lexer.lex(e, t);
    return (
      t.walkTokens && marked.walkTokens(i, t.walkTokens), Parser.parse(i, t)
    );
  } catch (i) {
    if (
      ((i.message += `
Please report this to https://github.com/markedjs/marked.`),
      t.silent)
    )
      return (
        '<p>An error occurred:</p><pre>' + escape(i.message + '', !0) + '</pre>'
      );
    throw i;
  }
}
marked.options = marked.setOptions = function (e) {
  return merge(marked.defaults, e), changeDefaults(marked.defaults), marked;
};
marked.getDefaults = getDefaults;
marked.defaults = defaults;
marked.use = function (...e) {
  const t = merge({}, ...e),
    r = marked.defaults.extensions || { renderers: {}, childTokens: {} };
  let i;
  e.forEach((s) => {
    if (
      (s.extensions &&
        ((i = !0),
        s.extensions.forEach((n) => {
          if (!n.name) throw new Error('extension name required');
          if (n.renderer) {
            const o = r.renderers ? r.renderers[n.name] : null;
            o
              ? (r.renderers[n.name] = function (...c) {
                  let u = n.renderer.apply(this, c);
                  return u === !1 && (u = o.apply(this, c)), u;
                })
              : (r.renderers[n.name] = n.renderer);
          }
          if (n.tokenizer) {
            if (!n.level || (n.level !== 'block' && n.level !== 'inline'))
              throw new Error("extension level must be 'block' or 'inline'");
            r[n.level]
              ? r[n.level].unshift(n.tokenizer)
              : (r[n.level] = [n.tokenizer]),
              n.start &&
                (n.level === 'block'
                  ? r.startBlock
                    ? r.startBlock.push(n.start)
                    : (r.startBlock = [n.start])
                  : n.level === 'inline' &&
                    (r.startInline
                      ? r.startInline.push(n.start)
                      : (r.startInline = [n.start])));
          }
          n.childTokens && (r.childTokens[n.name] = n.childTokens);
        })),
      s.renderer)
    ) {
      const n = marked.defaults.renderer || new Renderer();
      for (const o in s.renderer) {
        const c = n[o];
        n[o] = (...u) => {
          let d = s.renderer[o].apply(n, u);
          return d === !1 && (d = c.apply(n, u)), d;
        };
      }
      t.renderer = n;
    }
    if (s.tokenizer) {
      const n = marked.defaults.tokenizer || new Tokenizer();
      for (const o in s.tokenizer) {
        const c = n[o];
        n[o] = (...u) => {
          let d = s.tokenizer[o].apply(n, u);
          return d === !1 && (d = c.apply(n, u)), d;
        };
      }
      t.tokenizer = n;
    }
    if (s.walkTokens) {
      const n = marked.defaults.walkTokens;
      t.walkTokens = function (o) {
        s.walkTokens.call(this, o), n && n.call(this, o);
      };
    }
    i && (t.extensions = r), marked.setOptions(t);
  });
};
marked.walkTokens = function (e, t) {
  for (const r of e)
    switch ((t.call(marked, r), r.type)) {
      case 'table': {
        for (const i of r.header) marked.walkTokens(i.tokens, t);
        for (const i of r.rows)
          for (const s of i) marked.walkTokens(s.tokens, t);
        break;
      }
      case 'list': {
        marked.walkTokens(r.items, t);
        break;
      }
      default:
        marked.defaults.extensions &&
        marked.defaults.extensions.childTokens &&
        marked.defaults.extensions.childTokens[r.type]
          ? marked.defaults.extensions.childTokens[r.type].forEach(function (
              i
            ) {
              marked.walkTokens(r[i], t);
            })
          : r.tokens && marked.walkTokens(r.tokens, t);
    }
};
marked.parseInline = function (e, t) {
  if (typeof e == 'undefined' || e === null)
    throw new Error(
      'marked.parseInline(): input parameter is undefined or null'
    );
  if (typeof e != 'string')
    throw new Error(
      'marked.parseInline(): input parameter is of type ' +
        Object.prototype.toString.call(e) +
        ', string expected'
    );
  (t = merge({}, marked.defaults, t || {})), checkSanitizeDeprecation(t);
  try {
    const r = Lexer.lexInline(e, t);
    return (
      t.walkTokens && marked.walkTokens(r, t.walkTokens),
      Parser.parseInline(r, t)
    );
  } catch (r) {
    if (
      ((r.message += `
Please report this to https://github.com/markedjs/marked.`),
      t.silent)
    )
      return (
        '<p>An error occurred:</p><pre>' + escape(r.message + '', !0) + '</pre>'
      );
    throw r;
  }
};
marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.parse = marked;
Parser.parse;
Lexer.lex;
const parseNumber = parseFloat;
function joinCss(e, t = ';') {
  let r;
  if (Array.isArray(e)) r = e.filter((i) => i);
  else {
    r = [];
    for (const i in e) e[i] && r.push(`${i}:${e[i]}`);
  }
  return r.join(t);
}
function getStyles(e, t, r, i) {
  let s, n;
  const o = '1em';
  let c,
    u,
    d,
    x = '-.125em';
  const _ = 'visible';
  return (
    i && ((d = 'center'), (n = '1.25em')),
    r && (s = r),
    t &&
      (t == 'lg'
        ? ((u = '1.33333em'), (c = '.75em'), (x = '-.225em'))
        : t == 'xs'
        ? (u = '.75em')
        : t == 'sm'
        ? (u = '.875em')
        : (u = t.replace('x', 'em'))),
    joinCss([
      joinCss({
        float: s,
        width: n,
        height: o,
        'line-height': c,
        'font-size': u,
        'text-align': d,
        'vertical-align': x,
        'transform-origin': 'center',
        overflow: _,
      }),
      e,
    ])
  );
}
function getTransform(e, t, r, i, s, n = 1, o = '', c = '') {
  let u = 1,
    d = 1;
  return (
    s &&
      (s == 'horizontal'
        ? (u = -1)
        : s == 'vertical'
        ? (d = -1)
        : (u = d = -1)),
    joinCss(
      [
        `translate(${parseNumber(t) * n}${o},${parseNumber(r) * n}${o})`,
        `scale(${u * parseNumber(e)},${d * parseNumber(e)})`,
        i && `rotate(${i}${c})`,
      ],
      ' '
    )
  );
}
var fa_svelte_svelte_type_style_lang = '';
function create_if_block(e) {
  let t, r, i, s, n, o, c;
  function u(_, m) {
    return typeof _[7][4] == 'string' ? create_if_block_1 : create_else_block;
  }
  let d = u(e),
    x = d(e);
  return {
    c() {
      (t = svg_element('svg')),
        (r = svg_element('g')),
        (i = svg_element('g')),
        x.c(),
        this.h();
    },
    l(_) {
      t = claim_svg_element(_, 'svg', {
        id: !0,
        class: !0,
        style: !0,
        viewBox: !0,
        'aria-hidden': !0,
        role: !0,
        xmlns: !0,
      });
      var m = children(t);
      r = claim_svg_element(m, 'g', { transform: !0, 'transform-origin': !0 });
      var v = children(r);
      i = claim_svg_element(v, 'g', { transform: !0 });
      var p = children(i);
      x.l(p), p.forEach(detach), v.forEach(detach), m.forEach(detach), this.h();
    },
    h() {
      attr(i, 'transform', e[10]),
        attr(r, 'transform', (s = `translate(${e[7][0] / 2} ${e[7][1] / 2})`)),
        attr(r, 'transform-origin', (n = `${e[7][0] / 4} 0`)),
        attr(t, 'id', e[0]),
        attr(t, 'class', (o = '' + (null_to_empty(e[8]) + ' svelte-1w3t65e'))),
        attr(t, 'style', e[9]),
        attr(t, 'viewBox', (c = `0 0 ${e[7][0]} ${e[7][1]}`)),
        attr(t, 'aria-hidden', 'true'),
        attr(t, 'role', 'img'),
        attr(t, 'xmlns', 'http://www.w3.org/2000/svg');
    },
    m(_, m) {
      insert_hydration(_, t, m),
        append_hydration(t, r),
        append_hydration(r, i),
        x.m(i, null);
    },
    p(_, m) {
      d === (d = u(_)) && x
        ? x.p(_, m)
        : (x.d(1), (x = d(_)), x && (x.c(), x.m(i, null))),
        m & 1024 && attr(i, 'transform', _[10]),
        m & 128 &&
          s !== (s = `translate(${_[7][0] / 2} ${_[7][1] / 2})`) &&
          attr(r, 'transform', s),
        m & 128 &&
          n !== (n = `${_[7][0] / 4} 0`) &&
          attr(r, 'transform-origin', n),
        m & 1 && attr(t, 'id', _[0]),
        m & 256 &&
          o !== (o = '' + (null_to_empty(_[8]) + ' svelte-1w3t65e')) &&
          attr(t, 'class', o),
        m & 512 && attr(t, 'style', _[9]),
        m & 128 &&
          c !== (c = `0 0 ${_[7][0]} ${_[7][1]}`) &&
          attr(t, 'viewBox', c);
    },
    d(_) {
      _ && detach(t), x.d();
    },
  };
}
function create_else_block(e) {
  let t, r, i, s, n, o, c, u, d, x;
  return {
    c() {
      (t = svg_element('path')), (o = svg_element('path')), this.h();
    },
    l(_) {
      (t = claim_svg_element(_, 'path', {
        d: !0,
        fill: !0,
        'fill-opacity': !0,
        transform: !0,
      })),
        children(t).forEach(detach),
        (o = claim_svg_element(_, 'path', {
          d: !0,
          fill: !0,
          'fill-opacity': !0,
          transform: !0,
        })),
        children(o).forEach(detach),
        this.h();
    },
    h() {
      attr(t, 'd', (r = e[7][4][0])),
        attr(t, 'fill', (i = e[3] || e[1] || 'currentColor')),
        attr(t, 'fill-opacity', (s = e[6] != !1 ? e[4] : e[5])),
        attr(
          t,
          'transform',
          (n = `translate(${e[7][0] / -2} ${e[7][1] / -2})`)
        ),
        attr(o, 'd', (c = e[7][4][1])),
        attr(o, 'fill', (u = e[2] || e[1] || 'currentColor')),
        attr(o, 'fill-opacity', (d = e[6] != !1 ? e[5] : e[4])),
        attr(
          o,
          'transform',
          (x = `translate(${e[7][0] / -2} ${e[7][1] / -2})`)
        );
    },
    m(_, m) {
      insert_hydration(_, t, m), insert_hydration(_, o, m);
    },
    p(_, m) {
      m & 128 && r !== (r = _[7][4][0]) && attr(t, 'd', r),
        m & 10 &&
          i !== (i = _[3] || _[1] || 'currentColor') &&
          attr(t, 'fill', i),
        m & 112 &&
          s !== (s = _[6] != !1 ? _[4] : _[5]) &&
          attr(t, 'fill-opacity', s),
        m & 128 &&
          n !== (n = `translate(${_[7][0] / -2} ${_[7][1] / -2})`) &&
          attr(t, 'transform', n),
        m & 128 && c !== (c = _[7][4][1]) && attr(o, 'd', c),
        m & 6 &&
          u !== (u = _[2] || _[1] || 'currentColor') &&
          attr(o, 'fill', u),
        m & 112 &&
          d !== (d = _[6] != !1 ? _[5] : _[4]) &&
          attr(o, 'fill-opacity', d),
        m & 128 &&
          x !== (x = `translate(${_[7][0] / -2} ${_[7][1] / -2})`) &&
          attr(o, 'transform', x);
    },
    d(_) {
      _ && detach(t), _ && detach(o);
    },
  };
}
function create_if_block_1(e) {
  let t, r, i, s;
  return {
    c() {
      (t = svg_element('path')), this.h();
    },
    l(n) {
      (t = claim_svg_element(n, 'path', { d: !0, fill: !0, transform: !0 })),
        children(t).forEach(detach),
        this.h();
    },
    h() {
      attr(t, 'd', (r = e[7][4])),
        attr(t, 'fill', (i = e[1] || e[2] || 'currentColor')),
        attr(
          t,
          'transform',
          (s = `translate(${e[7][0] / -2} ${e[7][1] / -2})`)
        );
    },
    m(n, o) {
      insert_hydration(n, t, o);
    },
    p(n, o) {
      o & 128 && r !== (r = n[7][4]) && attr(t, 'd', r),
        o & 6 &&
          i !== (i = n[1] || n[2] || 'currentColor') &&
          attr(t, 'fill', i),
        o & 128 &&
          s !== (s = `translate(${n[7][0] / -2} ${n[7][1] / -2})`) &&
          attr(t, 'transform', s);
    },
    d(n) {
      n && detach(t);
    },
  };
}
function create_fragment$1(e) {
  let t,
    r = e[7][4] && create_if_block(e);
  return {
    c() {
      r && r.c(), (t = empty());
    },
    l(i) {
      r && r.l(i), (t = empty());
    },
    m(i, s) {
      r && r.m(i, s), insert_hydration(i, t, s);
    },
    p(i, [s]) {
      i[7][4]
        ? r
          ? r.p(i, s)
          : ((r = create_if_block(i)), r.c(), r.m(t.parentNode, t))
        : r && (r.d(1), (r = null));
    },
    i: noop,
    o: noop,
    d(i) {
      r && r.d(i), i && detach(t);
    },
  };
}
function instance$1(e, t, r) {
  let { class: i = '' } = t,
    { id: s = '' } = t,
    { style: n = '' } = t,
    { icon: o } = t,
    { size: c = '' } = t,
    { color: u = '' } = t,
    { fw: d = !1 } = t,
    { pull: x = '' } = t,
    { scale: _ = 1 } = t,
    { translateX: m = 0 } = t,
    { translateY: v = 0 } = t,
    { rotate: p = '' } = t,
    { flip: g = !1 } = t,
    { spin: b = !1 } = t,
    { pulse: l = !1 } = t,
    { primaryColor: a = '' } = t,
    { secondaryColor: h = '' } = t,
    { primaryOpacity: f = 1 } = t,
    { secondaryOpacity: y = 0.4 } = t,
    { swapOpacity: k = !1 } = t,
    w,
    P,
    F,
    D;
  return (
    (e.$$set = (T) => {
      'class' in T && r(11, (i = T.class)),
        'id' in T && r(0, (s = T.id)),
        'style' in T && r(12, (n = T.style)),
        'icon' in T && r(13, (o = T.icon)),
        'size' in T && r(14, (c = T.size)),
        'color' in T && r(1, (u = T.color)),
        'fw' in T && r(15, (d = T.fw)),
        'pull' in T && r(16, (x = T.pull)),
        'scale' in T && r(17, (_ = T.scale)),
        'translateX' in T && r(18, (m = T.translateX)),
        'translateY' in T && r(19, (v = T.translateY)),
        'rotate' in T && r(20, (p = T.rotate)),
        'flip' in T && r(21, (g = T.flip)),
        'spin' in T && r(22, (b = T.spin)),
        'pulse' in T && r(23, (l = T.pulse)),
        'primaryColor' in T && r(2, (a = T.primaryColor)),
        'secondaryColor' in T && r(3, (h = T.secondaryColor)),
        'primaryOpacity' in T && r(4, (f = T.primaryOpacity)),
        'secondaryOpacity' in T && r(5, (y = T.secondaryOpacity)),
        'swapOpacity' in T && r(6, (k = T.swapOpacity));
    }),
    (e.$$.update = () => {
      e.$$.dirty & 8192 && r(7, (w = (o && o.icon) || [0, 0, '', [], ''])),
        e.$$.dirty & 12584960 &&
          r(8, (P = joinCss([i, 'svelte-fa', b && 'spin', l && 'pulse'], ' '))),
        e.$$.dirty & 118784 && r(9, (F = getStyles(n, c, x, d))),
        e.$$.dirty & 4063232 && r(10, (D = getTransform(_, m, v, p, g, 512)));
    }),
    [s, u, a, h, f, y, k, w, P, F, D, i, n, o, c, d, x, _, m, v, p, g, b, l]
  );
}
class Fa extends SvelteComponent {
  constructor(t) {
    super();
    init(this, t, instance$1, create_fragment$1, safe_not_equal, {
      class: 11,
      id: 0,
      style: 12,
      icon: 13,
      size: 14,
      color: 1,
      fw: 15,
      pull: 16,
      scale: 17,
      translateX: 18,
      translateY: 19,
      rotate: 20,
      flip: 21,
      spin: 22,
      pulse: 23,
      primaryColor: 2,
      secondaryColor: 3,
      primaryOpacity: 4,
      secondaryOpacity: 5,
      swapOpacity: 6,
    });
  }
}
var Fa$1 = Fa,
  commonjsGlobal =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : typeof self != 'undefined'
      ? self
      : {},
  pym_v1 = { exports: {} };
/*! pym.js - v1.3.2 - 2018-02-13 */ (function (e) {
  (function (t) {
    e.exports ? (e.exports = t()) : (window.pym = t.call(this));
  })(function () {
    var t = 'xPYMx',
      r = {},
      i = function (m) {
        var v = document.createEvent('Event');
        v.initEvent('pym:' + m, !0, !0), document.dispatchEvent(v);
      },
      s = function (m) {
        var v = new RegExp(
            '[\\?&]' +
              m.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]') +
              '=([^&#]*)'
          ),
          p = v.exec(location.search);
        return p === null ? '' : decodeURIComponent(p[1].replace(/\+/g, ' '));
      },
      n = function (m, v) {
        if (
          !(
            v.xdomain !== '*' && !m.origin.match(new RegExp(v.xdomain + '$'))
          ) &&
          typeof m.data == 'string'
        )
          return !0;
      },
      o = function (m) {
        var v = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/gi;
        if (!!m.match(v)) return !0;
      },
      c = function (m, v, p) {
        var g = ['pym', m, v, p];
        return g.join(t);
      },
      u = function (m) {
        var v = ['pym', m, '(\\S+)', '(.*)'];
        return new RegExp('^' + v.join(t) + '$');
      },
      d =
        Date.now ||
        function () {
          return new Date().getTime();
        },
      x = function (m, v, p) {
        var g,
          b,
          l,
          a = null,
          h = 0;
        p || (p = {});
        var f = function () {
          (h = p.leading === !1 ? 0 : d()),
            (a = null),
            (l = m.apply(g, b)),
            a || (g = b = null);
        };
        return function () {
          var y = d();
          !h && p.leading === !1 && (h = y);
          var k = v - (y - h);
          return (
            (g = this),
            (b = arguments),
            k <= 0 || k > v
              ? (a && (clearTimeout(a), (a = null)),
                (h = y),
                (l = m.apply(g, b)),
                a || (g = b = null))
              : !a && p.trailing !== !1 && (a = setTimeout(f, k)),
            l
          );
        };
      },
      _ = function () {
        for (var m = r.autoInitInstances.length, v = m - 1; v >= 0; v--) {
          var p = r.autoInitInstances[v];
          (p.el.getElementsByTagName('iframe').length &&
            p.el.getElementsByTagName('iframe')[0].contentWindow) ||
            r.autoInitInstances.splice(v, 1);
        }
      };
    return (
      (r.autoInitInstances = []),
      (r.autoInit = function (m) {
        var v = document.querySelectorAll(
            '[data-pym-src]:not([data-pym-auto-initialized])'
          ),
          p = v.length;
        _();
        for (var g = 0; g < p; ++g) {
          var b = v[g];
          b.setAttribute('data-pym-auto-initialized', ''),
            b.id === '' &&
              (b.id =
                'pym-' + g + '-' + Math.random().toString(36).substr(2, 5));
          var l = b.getAttribute('data-pym-src'),
            a = {
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
            h = {};
          for (var f in a)
            if (b.getAttribute('data-pym-' + f) !== null)
              switch (a[f]) {
                case 'boolean':
                  h[f] = b.getAttribute('data-pym-' + f) !== 'false';
                  break;
                case 'string':
                  h[f] = b.getAttribute('data-pym-' + f);
                  break;
                case 'number':
                  var y = Number(b.getAttribute('data-pym-' + f));
                  isNaN(y) || (h[f] = y);
                  break;
                default:
                  console.err('unrecognized attribute type');
              }
          var k = new r.Parent(b.id, l, h);
          r.autoInitInstances.push(k);
        }
        return m || i('pym-initialized'), r.autoInitInstances;
      }),
      (r.Parent = function (m, v, p) {
        (this.id = m),
          (this.url = v),
          (this.el = document.getElementById(m)),
          (this.iframe = null),
          (this.settings = {
            xdomain: '*',
            optionalparams: !0,
            parenturlparam: 'parentUrl',
            parenturlvalue: window.location.href,
            trackscroll: !1,
            scrollwait: 100,
          }),
          (this.messageRegex = u(this.id)),
          (this.messageHandlers = {}),
          (p = p || {}),
          (this._constructIframe = function () {
            var b = this.el.offsetWidth.toString();
            this.iframe = document.createElement('iframe');
            var l = '',
              a = this.url.indexOf('#');
            for (
              a > -1 &&
                ((l = this.url.substring(a, this.url.length)),
                (this.url = this.url.substring(0, a))),
                this.url.indexOf('?') < 0
                  ? (this.url += '?')
                  : (this.url += '&'),
                this.iframe.src =
                  this.url + 'initialWidth=' + b + '&childId=' + this.id,
                this.settings.optionalparams &&
                  ((this.iframe.src +=
                    '&parentTitle=' + encodeURIComponent(document.title)),
                  (this.iframe.src +=
                    '&' +
                    this.settings.parenturlparam +
                    '=' +
                    encodeURIComponent(this.settings.parenturlvalue))),
                this.iframe.src += l,
                this.iframe.setAttribute('width', '100%'),
                this.iframe.setAttribute('scrolling', 'no'),
                this.iframe.setAttribute('marginheight', '0'),
                this.iframe.setAttribute('frameborder', '0'),
                this.settings.title &&
                  this.iframe.setAttribute('title', this.settings.title),
                this.settings.allowfullscreen !== void 0 &&
                  this.settings.allowfullscreen !== !1 &&
                  this.iframe.setAttribute('allowfullscreen', ''),
                this.settings.sandbox !== void 0 &&
                  typeof this.settings.sandbox == 'string' &&
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
          (this._fire = function (b, l) {
            if (b in this.messageHandlers)
              for (var a = 0; a < this.messageHandlers[b].length; a++)
                this.messageHandlers[b][a].call(this, l);
          }),
          (this.remove = function () {
            window.removeEventListener('message', this._processMessage),
              window.removeEventListener('resize', this._onResize),
              this.el.removeChild(this.iframe),
              _();
          }),
          (this._processMessage = function (b) {
            if (!!n(b, this.settings) && typeof b.data == 'string') {
              var l = b.data.match(this.messageRegex);
              if (!l || l.length !== 3) return !1;
              var a = l[1],
                h = l[2];
              this._fire(a, h);
            }
          }.bind(this)),
          (this._onHeightMessage = function (b) {
            var l = parseInt(b);
            this.iframe.setAttribute('height', l + 'px');
          }),
          (this._onNavigateToMessage = function (b) {
            !o(b) || (document.location.href = b);
          }),
          (this._onScrollToChildPosMessage = function (b) {
            var l =
                document.getElementById(this.id).getBoundingClientRect().top +
                window.pageYOffset,
              a = l + parseInt(b);
            window.scrollTo(0, a);
          }),
          (this.onMessage = function (b, l) {
            b in this.messageHandlers || (this.messageHandlers[b] = []),
              this.messageHandlers[b].push(l);
          }),
          (this.sendMessage = function (b, l) {
            this.el.getElementsByTagName('iframe').length &&
              (this.el.getElementsByTagName('iframe')[0].contentWindow
                ? this.el
                    .getElementsByTagName('iframe')[0]
                    .contentWindow.postMessage(c(this.id, b, l), '*')
                : this.remove());
          }),
          (this.sendWidth = function () {
            var b = this.el.offsetWidth.toString();
            this.sendMessage('width', b);
          }),
          (this.sendViewportAndIFramePosition = function () {
            var b = this.iframe.getBoundingClientRect(),
              l = window.innerWidth || document.documentElement.clientWidth,
              a = window.innerHeight || document.documentElement.clientHeight,
              h = l + ' ' + a;
            (h += ' ' + b.top + ' ' + b.left),
              (h += ' ' + b.bottom + ' ' + b.right),
              this.sendMessage('viewport-iframe-position', h);
          });
        for (var g in p) this.settings[g] = p[g];
        return (
          (this._throttleOnScroll = x(
            this._onScroll.bind(this),
            this.settings.scrollwait
          )),
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
      (r.Child = function (m) {
        (this.parentWidth = null),
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
          (m = m || {}),
          (this.onMessage = function (b, l) {
            b in this.messageHandlers || (this.messageHandlers[b] = []),
              this.messageHandlers[b].push(l);
          }),
          (this._fire = function (b, l) {
            if (b in this.messageHandlers)
              for (var a = 0; a < this.messageHandlers[b].length; a++)
                this.messageHandlers[b][a].call(this, l);
          }),
          (this._processMessage = function (b) {
            if (!!n(b, this.settings) && typeof b.data == 'string') {
              var l = b.data.match(this.messageRegex);
              if (!(!l || l.length !== 3)) {
                var a = l[1],
                  h = l[2];
                this._fire(a, h);
              }
            }
          }.bind(this)),
          (this._onWidthMessage = function (b) {
            var l = parseInt(b);
            l !== this.parentWidth &&
              ((this.parentWidth = l),
              this.settings.renderCallback && this.settings.renderCallback(l),
              this.sendHeight());
          }),
          (this.sendMessage = function (b, l) {
            window.parent.postMessage(c(this.id, b, l), '*');
          }),
          (this.sendHeight = function () {
            var b = document
              .getElementsByTagName('body')[0]
              .offsetHeight.toString();
            return this.sendMessage('height', b), b;
          }.bind(this)),
          (this.getParentPositionInfo = function () {
            this.sendMessage('parentPositionInfo');
          }),
          (this.scrollParentTo = function (b) {
            this.sendMessage('navigateTo', '#' + b);
          }),
          (this.navigateParentTo = function (b) {
            this.sendMessage('navigateTo', b);
          }),
          (this.scrollParentToChildEl = function (b) {
            var l =
              document.getElementById(b).getBoundingClientRect().top +
              window.pageYOffset;
            this.scrollParentToChildPos(l);
          }),
          (this.scrollParentToChildPos = function (b) {
            this.sendMessage('scrollToChildPos', b.toString());
          });
        var v = function (b) {
          var l = document.getElementsByTagName('html')[0],
            a,
            h = l.className;
          try {
            window.self !== window.top
              ? (a = 'embedded')
              : (a = 'not-embedded');
          } catch {
            a = 'embedded';
          }
          h.indexOf(a) < 0 &&
            ((l.className = h ? h + ' ' + a : a),
            b && b(a),
            i('marked-embedded'));
        };
        this.remove = function () {
          window.removeEventListener('message', this._processMessage),
            this.timerId && clearInterval(this.timerId);
        };
        for (var p in m) this.settings[p] = m[p];
        (this.id = s('childId') || m.id),
          (this.messageRegex = new RegExp(
            '^pym' + t + this.id + t + '(\\S+)' + t + '(.*)$'
          ));
        var g = parseInt(s('initialWidth'));
        return (
          (this.parentUrl = s(this.settings.parenturlparam)),
          (this.parentTitle = s('parentTitle')),
          this.onMessage('width', this._onWidthMessage),
          window.addEventListener('message', this._processMessage, !1),
          this.settings.renderCallback && this.settings.renderCallback(g),
          this.sendHeight(),
          this.settings.polling &&
            (this.timerId = window.setInterval(
              this.sendHeight,
              this.settings.polling
            )),
          v(m.onMarkedEmbeddedStatus),
          this
        );
      }),
      typeof document != 'undefined' && r.autoInit(!0),
      r
    );
  });
})(pym_v1);
var queryString = {},
  strictUriEncode = (e) =>
    encodeURIComponent(e).replace(
      /[!'()*]/g,
      (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`
    ),
  token = '%[a-f0-9]{2}',
  singleMatcher = new RegExp(token, 'gi'),
  multiMatcher = new RegExp('(' + token + ')+', 'gi');
function decodeComponents(e, t) {
  try {
    return decodeURIComponent(e.join(''));
  } catch {}
  if (e.length === 1) return e;
  t = t || 1;
  var r = e.slice(0, t),
    i = e.slice(t);
  return Array.prototype.concat.call(
    [],
    decodeComponents(r),
    decodeComponents(i)
  );
}
function decode(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var t = e.match(singleMatcher), r = 1; r < t.length; r++)
      (e = decodeComponents(t, r).join('')), (t = e.match(singleMatcher));
    return e;
  }
}
function customDecodeURIComponent(e) {
  for (
    var t = { '%FE%FF': '\uFFFD\uFFFD', '%FF%FE': '\uFFFD\uFFFD' },
      r = multiMatcher.exec(e);
    r;

  ) {
    try {
      t[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var i = decode(r[0]);
      i !== r[0] && (t[r[0]] = i);
    }
    r = multiMatcher.exec(e);
  }
  t['%C2'] = '\uFFFD';
  for (var s = Object.keys(t), n = 0; n < s.length; n++) {
    var o = s[n];
    e = e.replace(new RegExp(o, 'g'), t[o]);
  }
  return e;
}
var decodeUriComponent = function (e) {
    if (typeof e != 'string')
      throw new TypeError(
        'Expected `encodedURI` to be of type `string`, got `' + typeof e + '`'
      );
    try {
      return (e = e.replace(/\+/g, ' ')), decodeURIComponent(e);
    } catch {
      return customDecodeURIComponent(e);
    }
  },
  splitOnFirst = (e, t) => {
    if (!(typeof e == 'string' && typeof t == 'string'))
      throw new TypeError('Expected the arguments to be of type `string`');
    if (t === '') return [e];
    const r = e.indexOf(t);
    return r === -1 ? [e] : [e.slice(0, r), e.slice(r + t.length)];
  },
  filterObj = function (e, t) {
    for (
      var r = {}, i = Object.keys(e), s = Array.isArray(t), n = 0;
      n < i.length;
      n++
    ) {
      var o = i[n],
        c = e[o];
      (s ? t.indexOf(o) !== -1 : t(o, c, e)) && (r[o] = c);
    }
    return r;
  };
(function (e) {
  const t = strictUriEncode,
    r = decodeUriComponent,
    i = splitOnFirst,
    s = filterObj,
    n = (l) => l == null;
  function o(l) {
    switch (l.arrayFormat) {
      case 'index':
        return (a) => (h, f) => {
          const y = h.length;
          return f === void 0 ||
            (l.skipNull && f === null) ||
            (l.skipEmptyString && f === '')
            ? h
            : f === null
            ? [...h, [d(a, l), '[', y, ']'].join('')]
            : [...h, [d(a, l), '[', d(y, l), ']=', d(f, l)].join('')];
        };
      case 'bracket':
        return (a) => (h, f) =>
          f === void 0 ||
          (l.skipNull && f === null) ||
          (l.skipEmptyString && f === '')
            ? h
            : f === null
            ? [...h, [d(a, l), '[]'].join('')]
            : [...h, [d(a, l), '[]=', d(f, l)].join('')];
      case 'comma':
      case 'separator':
        return (a) => (h, f) =>
          f == null || f.length === 0
            ? h
            : h.length === 0
            ? [[d(a, l), '=', d(f, l)].join('')]
            : [[h, d(f, l)].join(l.arrayFormatSeparator)];
      default:
        return (a) => (h, f) =>
          f === void 0 ||
          (l.skipNull && f === null) ||
          (l.skipEmptyString && f === '')
            ? h
            : f === null
            ? [...h, d(a, l)]
            : [...h, [d(a, l), '=', d(f, l)].join('')];
    }
  }
  function c(l) {
    let a;
    switch (l.arrayFormat) {
      case 'index':
        return (h, f, y) => {
          if (
            ((a = /\[(\d*)\]$/.exec(h)), (h = h.replace(/\[\d*\]$/, '')), !a)
          ) {
            y[h] = f;
            return;
          }
          y[h] === void 0 && (y[h] = {}), (y[h][a[1]] = f);
        };
      case 'bracket':
        return (h, f, y) => {
          if (((a = /(\[\])$/.exec(h)), (h = h.replace(/\[\]$/, '')), !a)) {
            y[h] = f;
            return;
          }
          if (y[h] === void 0) {
            y[h] = [f];
            return;
          }
          y[h] = [].concat(y[h], f);
        };
      case 'comma':
      case 'separator':
        return (h, f, y) => {
          const k = typeof f == 'string' && f.includes(l.arrayFormatSeparator),
            w =
              typeof f == 'string' &&
              !k &&
              x(f, l).includes(l.arrayFormatSeparator);
          f = w ? x(f, l) : f;
          const P =
            k || w
              ? f.split(l.arrayFormatSeparator).map((F) => x(F, l))
              : f === null
              ? f
              : x(f, l);
          y[h] = P;
        };
      default:
        return (h, f, y) => {
          if (y[h] === void 0) {
            y[h] = f;
            return;
          }
          y[h] = [].concat(y[h], f);
        };
    }
  }
  function u(l) {
    if (typeof l != 'string' || l.length !== 1)
      throw new TypeError(
        'arrayFormatSeparator must be single character string'
      );
  }
  function d(l, a) {
    return a.encode ? (a.strict ? t(l) : encodeURIComponent(l)) : l;
  }
  function x(l, a) {
    return a.decode ? r(l) : l;
  }
  function _(l) {
    return Array.isArray(l)
      ? l.sort()
      : typeof l == 'object'
      ? _(Object.keys(l))
          .sort((a, h) => Number(a) - Number(h))
          .map((a) => l[a])
      : l;
  }
  function m(l) {
    const a = l.indexOf('#');
    return a !== -1 && (l = l.slice(0, a)), l;
  }
  function v(l) {
    let a = '';
    const h = l.indexOf('#');
    return h !== -1 && (a = l.slice(h)), a;
  }
  function p(l) {
    l = m(l);
    const a = l.indexOf('?');
    return a === -1 ? '' : l.slice(a + 1);
  }
  function g(l, a) {
    return (
      a.parseNumbers &&
      !Number.isNaN(Number(l)) &&
      typeof l == 'string' &&
      l.trim() !== ''
        ? (l = Number(l))
        : a.parseBooleans &&
          l !== null &&
          (l.toLowerCase() === 'true' || l.toLowerCase() === 'false') &&
          (l = l.toLowerCase() === 'true'),
      l
    );
  }
  function b(l, a) {
    (a = Object.assign(
      {
        decode: !0,
        sort: !0,
        arrayFormat: 'none',
        arrayFormatSeparator: ',',
        parseNumbers: !1,
        parseBooleans: !1,
      },
      a
    )),
      u(a.arrayFormatSeparator);
    const h = c(a),
      f = Object.create(null);
    if (typeof l != 'string' || ((l = l.trim().replace(/^[?#&]/, '')), !l))
      return f;
    for (const y of l.split('&')) {
      if (y === '') continue;
      let [k, w] = i(a.decode ? y.replace(/\+/g, ' ') : y, '=');
      (w =
        w === void 0
          ? null
          : ['comma', 'separator'].includes(a.arrayFormat)
          ? w
          : x(w, a)),
        h(x(k, a), w, f);
    }
    for (const y of Object.keys(f)) {
      const k = f[y];
      if (typeof k == 'object' && k !== null)
        for (const w of Object.keys(k)) k[w] = g(k[w], a);
      else f[y] = g(k, a);
    }
    return a.sort === !1
      ? f
      : (a.sort === !0
          ? Object.keys(f).sort()
          : Object.keys(f).sort(a.sort)
        ).reduce((y, k) => {
          const w = f[k];
          return (
            Boolean(w) && typeof w == 'object' && !Array.isArray(w)
              ? (y[k] = _(w))
              : (y[k] = w),
            y
          );
        }, Object.create(null));
  }
  (e.extract = p),
    (e.parse = b),
    (e.stringify = (l, a) => {
      if (!l) return '';
      (a = Object.assign(
        {
          encode: !0,
          strict: !0,
          arrayFormat: 'none',
          arrayFormatSeparator: ',',
        },
        a
      )),
        u(a.arrayFormatSeparator);
      const h = (w) =>
          (a.skipNull && n(l[w])) || (a.skipEmptyString && l[w] === ''),
        f = o(a),
        y = {};
      for (const w of Object.keys(l)) h(w) || (y[w] = l[w]);
      const k = Object.keys(y);
      return (
        a.sort !== !1 && k.sort(a.sort),
        k
          .map((w) => {
            const P = l[w];
            return P === void 0
              ? ''
              : P === null
              ? d(w, a)
              : Array.isArray(P)
              ? P.reduce(f(w), []).join('&')
              : d(w, a) + '=' + d(P, a);
          })
          .filter((w) => w.length > 0)
          .join('&')
      );
    }),
    (e.parseUrl = (l, a) => {
      a = Object.assign({ decode: !0 }, a);
      const [h, f] = i(l, '#');
      return Object.assign(
        { url: h.split('?')[0] || '', query: b(p(l), a) },
        a && a.parseFragmentIdentifier && f
          ? { fragmentIdentifier: x(f, a) }
          : {}
      );
    }),
    (e.stringifyUrl = (l, a) => {
      a = Object.assign({ encode: !0, strict: !0 }, a);
      const h = m(l.url).split('?')[0] || '',
        f = e.extract(l.url),
        y = e.parse(f, { sort: !1 }),
        k = Object.assign(y, l.query);
      let w = e.stringify(k, a);
      w && (w = `?${w}`);
      let P = v(l.url);
      return (
        l.fragmentIdentifier && (P = `#${d(l.fragmentIdentifier, a)}`),
        `${h}${w}${P}`
      );
    }),
    (e.pick = (l, a, h) => {
      h = Object.assign({ parseFragmentIdentifier: !0 }, h);
      const { url: f, query: y, fragmentIdentifier: k } = e.parseUrl(l, h);
      return e.stringifyUrl(
        { url: f, query: s(y, a), fragmentIdentifier: k },
        h
      );
    }),
    (e.exclude = (l, a, h) => {
      const f = Array.isArray(a) ? (y) => !a.includes(y) : (y, k) => !a(y, k);
      return e.pick(l, f, h);
    });
})(queryString);
const defaultUrlRegExp = /^(\w+:\/\/[^/?]+)?(.*?)(\?.+)?$/,
  protocolRelativeUrlRegExp = /^(\/\/[^/?]+)(.*?)(\?.+)?$/,
  normalizeParts = (e) =>
    e
      .filter((t) => typeof t == 'string' || typeof t == 'number')
      .map((t) => `${t}`)
      .filter((t) => t),
  parseParts = (e, t) => {
    const { protocolRelative: r } = t,
      i = e.join('/'),
      s = r ? protocolRelativeUrlRegExp : defaultUrlRegExp,
      [, n = '', o = '', c = ''] = i.match(s) || [];
    return {
      prefix: n,
      pathname: {
        parts: o.split('/').filter((u) => u !== ''),
        hasLeading: c ? /^\/\/+/.test(o) : /^\/+/.test(o),
        hasTrailing: c ? /\/\/+$/.test(o) : /\/+$/.test(o),
      },
      suffix: c,
    };
  },
  buildUrl = (e, t) => {
    const { prefix: r, pathname: i, suffix: s } = e,
      { parts: n, hasLeading: o, hasTrailing: c } = i,
      { leadingSlash: u, trailingSlash: d } = t,
      x = u === !0 || (u === 'keep' && o),
      _ = d === !0 || (d === 'keep' && c);
    let m = r;
    n.length > 0 && ((m || x) && (m += '/'), (m += n.join('/'))),
      _ && (m += '/'),
      !m && x && (m += '/');
    const v = ue(ue({}, queryString.parse(s, t.queryOptions)), t.query),
      p = queryString.stringify(v, t.queryOptions);
    return p && (m += `?${p}`), m;
  },
  urlJoin = (...e) => {
    const t = e[e.length - 1];
    let r;
    t && typeof t == 'object' && ((r = t), (e = e.slice(0, -1))),
      (r = ue(
        { leadingSlash: !0, trailingSlash: !1, protocolRelative: !1 },
        r
      )),
      (e = normalizeParts(e));
    const i = parseParts(e, r);
    return buildUrl(i, r);
  };
var classnames$1 = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function r() {
      for (var i = [], s = 0; s < arguments.length; s++) {
        var n = arguments[s];
        if (!!n) {
          var o = typeof n;
          if (o === 'string' || o === 'number') i.push(n);
          else if (Array.isArray(n)) {
            if (n.length) {
              var c = r.apply(null, n);
              c && i.push(c);
            }
          } else if (o === 'object')
            if (n.toString === Object.prototype.toString)
              for (var u in n) t.call(n, u) && n[u] && i.push(u);
            else i.push(n.toString());
        }
      }
      return i.join(' ');
    }
    e.exports ? ((r.default = r), (e.exports = r)) : (window.classNames = r);
  })();
})(classnames$1);
var classnames = classnames$1.exports,
  freeGlobal =
    typeof global == 'object' && global && global.Object === Object && global,
  freeGlobal$1 = freeGlobal,
  freeSelf = typeof self == 'object' && self && self.Object === Object && self,
  root = freeGlobal$1 || freeSelf || Function('return this')(),
  root$1 = root,
  Symbol$1 = root$1.Symbol,
  Symbol$2 = Symbol$1,
  objectProto$4 = Object.prototype,
  hasOwnProperty$3 = objectProto$4.hasOwnProperty,
  nativeObjectToString$1 = objectProto$4.toString,
  symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(e) {
  var t = hasOwnProperty$3.call(e, symToStringTag$1),
    r = e[symToStringTag$1];
  try {
    e[symToStringTag$1] = void 0;
    var i = !0;
  } catch {}
  var s = nativeObjectToString$1.call(e);
  return i && (t ? (e[symToStringTag$1] = r) : delete e[symToStringTag$1]), s;
}
var objectProto$3 = Object.prototype,
  nativeObjectToString = objectProto$3.toString;
function objectToString(e) {
  return nativeObjectToString.call(e);
}
var nullTag = '[object Null]',
  undefinedTag = '[object Undefined]',
  symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(e) {
  return e == null
    ? e === void 0
      ? undefinedTag
      : nullTag
    : symToStringTag && symToStringTag in Object(e)
    ? getRawTag(e)
    : objectToString(e);
}
function isObjectLike(e) {
  return e != null && typeof e == 'object';
}
var symbolTag = '[object Symbol]';
function isSymbol(e) {
  return (
    typeof e == 'symbol' || (isObjectLike(e) && baseGetTag(e) == symbolTag)
  );
}
function arrayMap(e, t) {
  for (var r = -1, i = e == null ? 0 : e.length, s = Array(i); ++r < i; )
    s[r] = t(e[r], r, e);
  return s;
}
var isArray = Array.isArray,
  isArray$1 = isArray,
  INFINITY$1 = 1 / 0,
  symbolProto = Symbol$2 ? Symbol$2.prototype : void 0,
  symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(e) {
  if (typeof e == 'string') return e;
  if (isArray$1(e)) return arrayMap(e, baseToString) + '';
  if (isSymbol(e)) return symbolToString ? symbolToString.call(e) : '';
  var t = e + '';
  return t == '0' && 1 / e == -INFINITY$1 ? '-0' : t;
}
function isObject(e) {
  var t = typeof e;
  return e != null && (t == 'object' || t == 'function');
}
var asyncTag = '[object AsyncFunction]',
  funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]',
  proxyTag = '[object Proxy]';
function isFunction(e) {
  if (!isObject(e)) return !1;
  var t = baseGetTag(e);
  return t == funcTag || t == genTag || t == asyncTag || t == proxyTag;
}
var coreJsData = root$1['__core-js_shared__'],
  coreJsData$1 = coreJsData,
  maskSrcKey = (function () {
    var e = /[^.]+$/.exec(
      (coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO) || ''
    );
    return e ? 'Symbol(src)_1.' + e : '';
  })();
function isMasked(e) {
  return !!maskSrcKey && maskSrcKey in e;
}
var funcProto$1 = Function.prototype,
  funcToString$1 = funcProto$1.toString;
function toSource(e) {
  if (e != null) {
    try {
      return funcToString$1.call(e);
    } catch {}
    try {
      return e + '';
    } catch {}
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
function baseIsNative(e) {
  if (!isObject(e) || isMasked(e)) return !1;
  var t = isFunction(e) ? reIsNative : reIsHostCtor;
  return t.test(toSource(e));
}
function getValue(e, t) {
  return e == null ? void 0 : e[t];
}
function getNative(e, t) {
  var r = getValue(e, t);
  return baseIsNative(r) ? r : void 0;
}
function eq(e, t) {
  return e === t || (e !== e && t !== t);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  reIsPlainProp = /^\w*$/;
function isKey(e, t) {
  if (isArray$1(e)) return !1;
  var r = typeof e;
  return r == 'number' ||
    r == 'symbol' ||
    r == 'boolean' ||
    e == null ||
    isSymbol(e)
    ? !0
    : reIsPlainProp.test(e) ||
        !reIsDeepProp.test(e) ||
        (t != null && e in Object(t));
}
var nativeCreate = getNative(Object, 'create'),
  nativeCreate$1 = nativeCreate;
function hashClear() {
  (this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {}), (this.size = 0);
}
function hashDelete(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__',
  objectProto$1 = Object.prototype,
  hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function hashGet(e) {
  var t = this.__data__;
  if (nativeCreate$1) {
    var r = t[e];
    return r === HASH_UNDEFINED$1 ? void 0 : r;
  }
  return hasOwnProperty$1.call(t, e) ? t[e] : void 0;
}
var objectProto = Object.prototype,
  hasOwnProperty = objectProto.hasOwnProperty;
function hashHas(e) {
  var t = this.__data__;
  return nativeCreate$1 ? t[e] !== void 0 : hasOwnProperty.call(t, e);
}
var HASH_UNDEFINED = '__lodash_hash_undefined__';
function hashSet(e, t) {
  var r = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (r[e] = nativeCreate$1 && t === void 0 ? HASH_UNDEFINED : t),
    this
  );
}
function Hash(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype.delete = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  (this.__data__ = []), (this.size = 0);
}
function assocIndexOf(e, t) {
  for (var r = e.length; r--; ) if (eq(e[r][0], t)) return r;
  return -1;
}
var arrayProto = Array.prototype,
  splice = arrayProto.splice;
function listCacheDelete(e) {
  var t = this.__data__,
    r = assocIndexOf(t, e);
  if (r < 0) return !1;
  var i = t.length - 1;
  return r == i ? t.pop() : splice.call(t, r, 1), --this.size, !0;
}
function listCacheGet(e) {
  var t = this.__data__,
    r = assocIndexOf(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function listCacheHas(e) {
  return assocIndexOf(this.__data__, e) > -1;
}
function listCacheSet(e, t) {
  var r = this.__data__,
    i = assocIndexOf(r, e);
  return i < 0 ? (++this.size, r.push([e, t])) : (r[i][1] = t), this;
}
function ListCache(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype.delete = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root$1, 'Map'),
  Map$2 = Map$1;
function mapCacheClear() {
  (this.size = 0),
    (this.__data__ = {
      hash: new Hash(),
      map: new (Map$2 || ListCache)(),
      string: new Hash(),
    });
}
function isKeyable(e) {
  var t = typeof e;
  return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
    ? e !== '__proto__'
    : e === null;
}
function getMapData(e, t) {
  var r = e.__data__;
  return isKeyable(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
}
function mapCacheDelete(e) {
  var t = getMapData(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
function mapCacheGet(e) {
  return getMapData(this, e).get(e);
}
function mapCacheHas(e) {
  return getMapData(this, e).has(e);
}
function mapCacheSet(e, t) {
  var r = getMapData(this, e),
    i = r.size;
  return r.set(e, t), (this.size += r.size == i ? 0 : 1), this;
}
function MapCache(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype.delete = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT = 'Expected a function';
function memoize(e, t) {
  if (typeof e != 'function' || (t != null && typeof t != 'function'))
    throw new TypeError(FUNC_ERROR_TEXT);
  var r = function () {
    var i = arguments,
      s = t ? t.apply(this, i) : i[0],
      n = r.cache;
    if (n.has(s)) return n.get(s);
    var o = e.apply(this, i);
    return (r.cache = n.set(s, o) || n), o;
  };
  return (r.cache = new (memoize.Cache || MapCache)()), r;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(e) {
  var t = memoize(e, function (i) {
      return r.size === MAX_MEMOIZE_SIZE && r.clear(), i;
    }),
    r = t.cache;
  return t;
}
var rePropName =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  reEscapeChar = /\\(\\)?/g,
  stringToPath = memoizeCapped(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(''),
      e.replace(rePropName, function (r, i, s, n) {
        t.push(s ? n.replace(reEscapeChar, '$1') : i || r);
      }),
      t
    );
  }),
  stringToPath$1 = stringToPath;
function toString(e) {
  return e == null ? '' : baseToString(e);
}
function castPath(e, t) {
  return isArray$1(e) ? e : isKey(e, t) ? [e] : stringToPath$1(toString(e));
}
var INFINITY = 1 / 0;
function toKey(e) {
  if (typeof e == 'string' || isSymbol(e)) return e;
  var t = e + '';
  return t == '0' && 1 / e == -INFINITY ? '-0' : t;
}
function baseGet(e, t) {
  t = castPath(t, e);
  for (var r = 0, i = t.length; e != null && r < i; ) e = e[toKey(t[r++])];
  return r && r == i ? e : void 0;
}
function get(e, t, r) {
  var i = e == null ? void 0 : baseGet(e, t);
  return i === void 0 ? r : i;
}
var uaParser = { exports: {} };
(function (e, t) {
  (function (r, i) {
    var s = '0.7.31',
      n = '',
      o = '?',
      c = 'function',
      u = 'undefined',
      d = 'object',
      x = 'string',
      _ = 'major',
      m = 'model',
      v = 'name',
      p = 'type',
      g = 'vendor',
      b = 'version',
      l = 'architecture',
      a = 'console',
      h = 'mobile',
      f = 'tablet',
      y = 'smarttv',
      k = 'wearable',
      w = 'embedded',
      P = 255,
      F = 'Amazon',
      D = 'Apple',
      T = 'ASUS',
      z = 'BlackBerry',
      M = 'Browser',
      V = 'Chrome',
      R = 'Edge',
      C = 'Firefox',
      S = 'Google',
      E = 'Huawei',
      A = 'LG',
      L = 'Microsoft',
      I = 'Motorola',
      B = 'Opera',
      H = 'Samsung',
      G = 'Sony',
      J = 'Xiaomi',
      Z = 'Zebra',
      Q = 'Facebook',
      ee = function (q, W) {
        var N = {};
        for (var U in q)
          W[U] && W[U].length % 2 == 0
            ? (N[U] = W[U].concat(q[U]))
            : (N[U] = q[U]);
        return N;
      },
      te = function (q) {
        for (var W = {}, N = 0; N < q.length; N++) W[q[N].toUpperCase()] = q[N];
        return W;
      },
      re = function (q, W) {
        return typeof q === x ? K(W).indexOf(K(q)) !== -1 : !1;
      },
      K = function (q) {
        return q.toLowerCase();
      },
      se = function (q) {
        return typeof q === x ? q.replace(/[^\d\.]/g, n).split('.')[0] : i;
      },
      O = function (q, W) {
        if (typeof q === x)
          return (
            (q = q.replace(/^\s\s*/, n).replace(/\s\s*$/, n)),
            typeof W === u ? q : q.substring(0, P)
          );
      },
      X = function (q, W) {
        for (var N = 0, U, j, he, Y, ce, pe; N < W.length && !ce; ) {
          var de = W[N],
            me = W[N + 1];
          for (U = j = 0; U < de.length && !ce; )
            if (((ce = de[U++].exec(q)), ce))
              for (he = 0; he < me.length; he++)
                (pe = ce[++j]),
                  (Y = me[he]),
                  typeof Y === d && Y.length > 0
                    ? Y.length === 2
                      ? typeof Y[1] == c
                        ? (this[Y[0]] = Y[1].call(this, pe))
                        : (this[Y[0]] = Y[1])
                      : Y.length === 3
                      ? typeof Y[1] === c && !(Y[1].exec && Y[1].test)
                        ? (this[Y[0]] = pe ? Y[1].call(this, pe, Y[2]) : i)
                        : (this[Y[0]] = pe ? pe.replace(Y[1], Y[2]) : i)
                      : Y.length === 4 &&
                        (this[Y[0]] = pe
                          ? Y[3].call(this, pe.replace(Y[1], Y[2]))
                          : i)
                    : (this[Y] = pe || i);
          N += 2;
        }
      },
      ae = function (q, W) {
        for (var N in W)
          if (typeof W[N] === d && W[N].length > 0) {
            for (var U = 0; U < W[N].length; U++)
              if (re(W[N][U], q)) return N === o ? i : N;
          } else if (re(W[N], q)) return N === o ? i : N;
        return q;
      },
      fe = {
        '1.0': '/8',
        1.2: '/1',
        1.3: '/3',
        '2.0': '/412',
        '2.0.2': '/416',
        '2.0.3': '/417',
        '2.0.4': '/419',
        '?': '/',
      },
      le = {
        ME: '4.90',
        'NT 3.11': 'NT3.51',
        'NT 4.0': 'NT4.0',
        2000: 'NT 5.0',
        XP: ['NT 5.1', 'NT 5.2'],
        Vista: 'NT 6.0',
        7: 'NT 6.1',
        8: 'NT 6.2',
        8.1: 'NT 6.3',
        10: ['NT 6.4', 'NT 10.0'],
        RT: 'ARM',
      },
      oe = {
        browser: [
          [/\b(?:crmo|crios)\/([\w\.]+)/i],
          [b, [v, 'Chrome']],
          [/edg(?:e|ios|a)?\/([\w\.]+)/i],
          [b, [v, 'Edge']],
          [
            /(opera mini)\/([-\w\.]+)/i,
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
          ],
          [v, b],
          [/opios[\/ ]+([\w\.]+)/i],
          [b, [v, B + ' Mini']],
          [/\bopr\/([\w\.]+)/i],
          [b, [v, B]],
          [
            /(kindle)\/([\w\.]+)/i,
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
            /(?:ms|\()(ie) ([\w\.]+)/i,
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
            /(weibo)__([\d\.]+)/i,
          ],
          [v, b],
          [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
          [b, [v, 'UC' + M]],
          [/\bqbcore\/([\w\.]+)/i],
          [b, [v, 'WeChat(Win) Desktop']],
          [/micromessenger\/([\w\.]+)/i],
          [b, [v, 'WeChat']],
          [/konqueror\/([\w\.]+)/i],
          [b, [v, 'Konqueror']],
          [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
          [b, [v, 'IE']],
          [/yabrowser\/([\w\.]+)/i],
          [b, [v, 'Yandex']],
          [/(avast|avg)\/([\w\.]+)/i],
          [[v, /(.+)/, '$1 Secure ' + M], b],
          [/\bfocus\/([\w\.]+)/i],
          [b, [v, C + ' Focus']],
          [/\bopt\/([\w\.]+)/i],
          [b, [v, B + ' Touch']],
          [/coc_coc\w+\/([\w\.]+)/i],
          [b, [v, 'Coc Coc']],
          [/dolfin\/([\w\.]+)/i],
          [b, [v, 'Dolphin']],
          [/coast\/([\w\.]+)/i],
          [b, [v, B + ' Coast']],
          [/miuibrowser\/([\w\.]+)/i],
          [b, [v, 'MIUI ' + M]],
          [/fxios\/([-\w\.]+)/i],
          [b, [v, C]],
          [/\bqihu|(qi?ho?o?|360)browser/i],
          [[v, '360 ' + M]],
          [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
          [[v, /(.+)/, '$1 ' + M], b],
          [/(comodo_dragon)\/([\w\.]+)/i],
          [[v, /_/g, ' '], b],
          [
            /(electron)\/([\w\.]+) safari/i,
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
          ],
          [v, b],
          [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
          [v],
          [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
          [[v, Q], b],
          [
            /safari (line)\/([\w\.]+)/i,
            /\b(line)\/([\w\.]+)\/iab/i,
            /(chromium|instagram)[\/ ]([-\w\.]+)/i,
          ],
          [v, b],
          [/\bgsa\/([\w\.]+) .*safari\//i],
          [b, [v, 'GSA']],
          [/headlesschrome(?:\/([\w\.]+)| )/i],
          [b, [v, V + ' Headless']],
          [/ wv\).+(chrome)\/([\w\.]+)/i],
          [[v, V + ' WebView'], b],
          [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
          [b, [v, 'Android ' + M]],
          [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
          [v, b],
          [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
          [b, [v, 'Mobile Safari']],
          [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
          [b, v],
          [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
          [v, [b, ae, fe]],
          [/(webkit|khtml)\/([\w\.]+)/i],
          [v, b],
          [/(navigator|netscape\d?)\/([-\w\.]+)/i],
          [[v, 'Netscape'], b],
          [/mobile vr; rv:([\w\.]+)\).+firefox/i],
          [b, [v, C + ' Reality']],
          [
            /ekiohf.+(flow)\/([\w\.]+)/i,
            /(swiftfox)/i,
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
            /(firefox)\/([\w\.]+)/i,
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
            /(links) \(([\w\.]+)/i,
          ],
          [v, b],
        ],
        cpu: [
          [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
          [[l, 'amd64']],
          [/(ia32(?=;))/i],
          [[l, K]],
          [/((?:i[346]|x)86)[;\)]/i],
          [[l, 'ia32']],
          [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
          [[l, 'arm64']],
          [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
          [[l, 'armhf']],
          [/windows (ce|mobile); ppc;/i],
          [[l, 'arm']],
          [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
          [[l, /ower/, n, K]],
          [/(sun4\w)[;\)]/i],
          [[l, 'sparc']],
          [
            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
          ],
          [[l, K]],
        ],
        device: [
          [
            /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
          ],
          [m, [g, H], [p, f]],
          [
            /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
            /samsung[- ]([-\w]+)/i,
            /sec-(sgh\w+)/i,
          ],
          [m, [g, H], [p, h]],
          [/\((ip(?:hone|od)[\w ]*);/i],
          [m, [g, D], [p, h]],
          [
            /\((ipad);[-\w\),; ]+apple/i,
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
          ],
          [m, [g, D], [p, f]],
          [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
          [m, [g, E], [p, f]],
          [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i,
          ],
          [m, [g, E], [p, h]],
          [
            /\b(poco[\w ]+)(?: bui|\))/i,
            /\b; (\w+) build\/hm\1/i,
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
          ],
          [
            [m, /_/g, ' '],
            [g, J],
            [p, h],
          ],
          [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
          [
            [m, /_/g, ' '],
            [g, J],
            [p, f],
          ],
          [
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
          ],
          [m, [g, 'OPPO'], [p, h]],
          [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
          [m, [g, 'Vivo'], [p, h]],
          [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
          [m, [g, 'Realme'], [p, h]],
          [
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
          ],
          [m, [g, I], [p, h]],
          [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
          [m, [g, I], [p, f]],
          [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
          [m, [g, A], [p, f]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i,
          ],
          [m, [g, A], [p, h]],
          [
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
          ],
          [m, [g, 'Lenovo'], [p, f]],
          [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
          [
            [m, /_/g, ' '],
            [g, 'Nokia'],
            [p, h],
          ],
          [/(pixel c)\b/i],
          [m, [g, S], [p, f]],
          [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
          [m, [g, S], [p, h]],
          [
            /droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
          ],
          [m, [g, G], [p, h]],
          [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
          [
            [m, 'Xperia Tablet'],
            [g, G],
            [p, f],
          ],
          [
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
          ],
          [m, [g, 'OnePlus'], [p, h]],
          [
            /(alexa)webm/i,
            /(kf[a-z]{2}wi)( bui|\))/i,
            /(kf[a-z]+)( bui|\)).+silk\//i,
          ],
          [m, [g, F], [p, f]],
          [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
          [
            [m, /(.+)/g, 'Fire Phone $1'],
            [g, F],
            [p, h],
          ],
          [/(playbook);[-\w\),; ]+(rim)/i],
          [m, g, [p, f]],
          [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
          [m, [g, z], [p, h]],
          [
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
          ],
          [m, [g, T], [p, f]],
          [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
          [m, [g, T], [p, h]],
          [/(nexus 9)/i],
          [m, [g, 'HTC'], [p, f]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i,
          ],
          [g, [m, /_/g, ' '], [p, h]],
          [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
          [m, [g, 'Acer'], [p, f]],
          [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
          [m, [g, 'Meizu'], [p, h]],
          [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
          [m, [g, 'Sharp'], [p, h]],
          [
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
            /(hp) ([\w ]+\w)/i,
            /(asus)-?(\w+)/i,
            /(microsoft); (lumia[\w ]+)/i,
            /(lenovo)[-_ ]?([-\w]+)/i,
            /(jolla)/i,
            /(oppo) ?([\w ]+) bui/i,
          ],
          [g, m, [p, h]],
          [
            /(archos) (gamepad2?)/i,
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            /(kindle)\/([\w\.]+)/i,
            /(nook)[\w ]+build\/(\w+)/i,
            /(dell) (strea[kpr\d ]*[\dko])/i,
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
            /(trinity)[- ]*(t\d{3}) bui/i,
            /(gigaset)[- ]+(q\w{1,9}) bui/i,
            /(vodafone) ([\w ]+)(?:\)| bui)/i,
          ],
          [g, m, [p, f]],
          [/(surface duo)/i],
          [m, [g, L], [p, f]],
          [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
          [m, [g, 'Fairphone'], [p, h]],
          [/(u304aa)/i],
          [m, [g, 'AT&T'], [p, h]],
          [/\bsie-(\w*)/i],
          [m, [g, 'Siemens'], [p, h]],
          [/\b(rct\w+) b/i],
          [m, [g, 'RCA'], [p, f]],
          [/\b(venue[\d ]{2,7}) b/i],
          [m, [g, 'Dell'], [p, f]],
          [/\b(q(?:mv|ta)\w+) b/i],
          [m, [g, 'Verizon'], [p, f]],
          [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
          [m, [g, 'Barnes & Noble'], [p, f]],
          [/\b(tm\d{3}\w+) b/i],
          [m, [g, 'NuVision'], [p, f]],
          [/\b(k88) b/i],
          [m, [g, 'ZTE'], [p, f]],
          [/\b(nx\d{3}j) b/i],
          [m, [g, 'ZTE'], [p, h]],
          [/\b(gen\d{3}) b.+49h/i],
          [m, [g, 'Swiss'], [p, h]],
          [/\b(zur\d{3}) b/i],
          [m, [g, 'Swiss'], [p, f]],
          [/\b((zeki)?tb.*\b) b/i],
          [m, [g, 'Zeki'], [p, f]],
          [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
          [[g, 'Dragon Touch'], m, [p, f]],
          [/\b(ns-?\w{0,9}) b/i],
          [m, [g, 'Insignia'], [p, f]],
          [/\b((nxa|next)-?\w{0,9}) b/i],
          [m, [g, 'NextBook'], [p, f]],
          [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
          [[g, 'Voice'], m, [p, h]],
          [/\b(lvtel\-)?(v1[12]) b/i],
          [[g, 'LvTel'], m, [p, h]],
          [/\b(ph-1) /i],
          [m, [g, 'Essential'], [p, h]],
          [/\b(v(100md|700na|7011|917g).*\b) b/i],
          [m, [g, 'Envizen'], [p, f]],
          [/\b(trio[-\w\. ]+) b/i],
          [m, [g, 'MachSpeed'], [p, f]],
          [/\btu_(1491) b/i],
          [m, [g, 'Rotor'], [p, f]],
          [/(shield[\w ]+) b/i],
          [m, [g, 'Nvidia'], [p, f]],
          [/(sprint) (\w+)/i],
          [g, m, [p, h]],
          [/(kin\.[onetw]{3})/i],
          [
            [m, /\./g, ' '],
            [g, L],
            [p, h],
          ],
          [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
          [m, [g, Z], [p, f]],
          [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
          [m, [g, Z], [p, h]],
          [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
          [g, m, [p, a]],
          [/droid.+; (shield) bui/i],
          [m, [g, 'Nvidia'], [p, a]],
          [/(playstation [345portablevi]+)/i],
          [m, [g, G], [p, a]],
          [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
          [m, [g, L], [p, a]],
          [/smart-tv.+(samsung)/i],
          [g, [p, y]],
          [/hbbtv.+maple;(\d+)/i],
          [
            [m, /^/, 'SmartTV'],
            [g, H],
            [p, y],
          ],
          [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
          [
            [g, A],
            [p, y],
          ],
          [/(apple) ?tv/i],
          [g, [m, D + ' TV'], [p, y]],
          [/crkey/i],
          [
            [m, V + 'cast'],
            [g, S],
            [p, y],
          ],
          [/droid.+aft(\w)( bui|\))/i],
          [m, [g, F], [p, y]],
          [/\(dtv[\);].+(aquos)/i],
          [m, [g, 'Sharp'], [p, y]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i,
          ],
          [
            [g, O],
            [m, O],
            [p, y],
          ],
          [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
          [[p, y]],
          [/((pebble))app/i],
          [g, m, [p, k]],
          [/droid.+; (glass) \d/i],
          [m, [g, S], [p, k]],
          [/droid.+; (wt63?0{2,3})\)/i],
          [m, [g, Z], [p, k]],
          [/(quest( 2)?)/i],
          [m, [g, Q], [p, k]],
          [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
          [g, [p, w]],
          [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
          [m, [p, h]],
          [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
          [m, [p, f]],
          [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
          [[p, f]],
          [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
          [[p, h]],
          [/(android[-\w\. ]{0,9});.+buil/i],
          [m, [g, 'Generic']],
        ],
        engine: [
          [/windows.+ edge\/([\w\.]+)/i],
          [b, [v, R + 'HTML']],
          [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
          [b, [v, 'Blink']],
          [
            /(presto)\/([\w\.]+)/i,
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
            /ekioh(flow)\/([\w\.]+)/i,
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
          ],
          [v, b],
          [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
          [b, v],
        ],
        os: [
          [/microsoft (windows) (vista|xp)/i],
          [v, b],
          [
            /(windows) nt 6\.2; (arm)/i,
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
          ],
          [v, [b, ae, le]],
          [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
          [
            [v, 'Windows'],
            [b, ae, le],
          ],
          [
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
            /cfnetwork\/.+darwin/i,
          ],
          [
            [b, /_/g, '.'],
            [v, 'iOS'],
          ],
          [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
          [
            [v, 'Mac OS'],
            [b, /_/g, '.'],
          ],
          [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
          [b, v],
          [
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,
            /(tizen|kaios)[\/ ]([\w\.]+)/i,
            /\((series40);/i,
          ],
          [v, b],
          [/\(bb(10);/i],
          [b, [v, z]],
          [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
          [b, [v, 'Symbian']],
          [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
          ],
          [b, [v, C + ' OS']],
          [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
          [b, [v, 'webOS']],
          [/crkey\/([\d\.]+)/i],
          [b, [v, V + 'cast']],
          [/(cros) [\w]+ ([\w\.]+\w)/i],
          [[v, 'Chromium OS'], b],
          [
            /(nintendo|playstation) ([wids345portablevuch]+)/i,
            /(xbox); +xbox ([^\);]+)/i,
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
            /(mint)[\/\(\) ]?(\w*)/i,
            /(mageia|vectorlinux)[; ]/i,
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
            /(hurd|linux) ?([\w\.]*)/i,
            /(gnu) ?([\w\.]*)/i,
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
            /(haiku) (\w+)/i,
          ],
          [v, b],
          [/(sunos) ?([\w\.\d]*)/i],
          [[v, 'Solaris'], b],
          [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
            /(unix) ?([\w\.]*)/i,
          ],
          [v, b],
        ],
      },
      $ = function (q, W) {
        if ((typeof q === d && ((W = q), (q = i)), !(this instanceof $)))
          return new $(q, W).getResult();
        var N =
            q ||
            (typeof r !== u && r.navigator && r.navigator.userAgent
              ? r.navigator.userAgent
              : n),
          U = W ? ee(oe, W) : oe;
        return (
          (this.getBrowser = function () {
            var j = {};
            return (
              (j[v] = i),
              (j[b] = i),
              X.call(j, N, U.browser),
              (j.major = se(j.version)),
              j
            );
          }),
          (this.getCPU = function () {
            var j = {};
            return (j[l] = i), X.call(j, N, U.cpu), j;
          }),
          (this.getDevice = function () {
            var j = {};
            return (
              (j[g] = i), (j[m] = i), (j[p] = i), X.call(j, N, U.device), j
            );
          }),
          (this.getEngine = function () {
            var j = {};
            return (j[v] = i), (j[b] = i), X.call(j, N, U.engine), j;
          }),
          (this.getOS = function () {
            var j = {};
            return (j[v] = i), (j[b] = i), X.call(j, N, U.os), j;
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
            return N;
          }),
          (this.setUA = function (j) {
            return (N = typeof j === x && j.length > P ? O(j, P) : j), this;
          }),
          this.setUA(N),
          this
        );
      };
    ($.VERSION = s),
      ($.BROWSER = te([v, b, _])),
      ($.CPU = te([l])),
      ($.DEVICE = te([m, g, p, a, h, y, f, k, w])),
      ($.ENGINE = $.OS = te([v, b])),
      e.exports && (t = e.exports = $),
      (t.UAParser = $);
    var ne = typeof r !== u && (r.jQuery || r.Zepto);
    if (ne && !ne.ua) {
      var ie = new $();
      (ne.ua = ie.getResult()),
        (ne.ua.get = function () {
          return ie.getUA();
        }),
        (ne.ua.set = function (q) {
          ie.setUA(q);
          var W = ie.getResult();
          for (var N in W) ne.ua[N] = W[N];
        });
    }
  })(typeof window == 'object' ? window : commonjsGlobal);
})(uaParser, uaParser.exports);
var Scroller_svelte_svelte_type_style_lang = '';
const { window: window_1 } = globals,
  get_foreground_slot_changes = (e) => ({}),
  get_foreground_slot_context = (e) => ({}),
  get_background_slot_changes = (e) => ({}),
  get_background_slot_context = (e) => ({});
function create_fragment(e) {
  let t, r, i, s, n, o, c, u, d;
  add_render_callback(e[21]);
  const x = e[20].background,
    _ = create_slot(x, e, e[19], get_background_slot_context),
    m = e[20].foreground,
    v = create_slot(m, e, e[19], get_foreground_slot_context);
  return {
    c() {
      (t = element('svelte-scroller-outer')),
        (r = element('svelte-scroller-background-container')),
        (i = element('svelte-scroller-background')),
        _ && _.c(),
        (n = space()),
        (o = element('svelte-scroller-foreground')),
        v && v.c(),
        this.h();
    },
    l(p) {
      t = claim_element(p, 'SVELTE-SCROLLER-OUTER', { class: !0 });
      var g = children(t);
      r = claim_element(g, 'SVELTE-SCROLLER-BACKGROUND-CONTAINER', {
        class: !0,
        style: !0,
      });
      var b = children(r);
      i = claim_element(b, 'SVELTE-SCROLLER-BACKGROUND', { class: !0 });
      var l = children(i);
      _ && _.l(l),
        l.forEach(detach),
        b.forEach(detach),
        (n = claim_space(g)),
        (o = claim_element(g, 'SVELTE-SCROLLER-FOREGROUND', { class: !0 }));
      var a = children(o);
      v && v.l(a), a.forEach(detach), g.forEach(detach), this.h();
    },
    h() {
      set_custom_element_data(i, 'class', 'svelte-1yjh2jm'),
        set_custom_element_data(
          r,
          'class',
          'background-container svelte-1yjh2jm'
        ),
        set_custom_element_data(r, 'style', (s = '' + (e[5] + e[4]))),
        set_custom_element_data(o, 'class', 'svelte-1yjh2jm'),
        set_custom_element_data(t, 'class', 'svelte-1yjh2jm');
    },
    m(p, g) {
      insert_hydration(p, t, g),
        append_hydration(t, r),
        append_hydration(r, i),
        _ && _.m(i, null),
        e[22](i),
        append_hydration(t, n),
        append_hydration(t, o),
        v && v.m(o, null),
        e[23](o),
        e[24](t),
        (c = !0),
        u || ((d = listen(window_1, 'resize', e[21])), (u = !0));
    },
    p(p, g) {
      _ &&
        _.p &&
        (!c || g[0] & 524288) &&
        update_slot_base(
          _,
          x,
          p,
          p[19],
          c
            ? get_slot_changes(x, p[19], g, get_background_slot_changes)
            : get_all_dirty_from_scope(p[19]),
          get_background_slot_context
        ),
        (!c || (g[0] & 48 && s !== (s = '' + (p[5] + p[4])))) &&
          set_custom_element_data(r, 'style', s),
        v &&
          v.p &&
          (!c || g[0] & 524288) &&
          update_slot_base(
            v,
            m,
            p,
            p[19],
            c
              ? get_slot_changes(m, p[19], g, get_foreground_slot_changes)
              : get_all_dirty_from_scope(p[19]),
            get_foreground_slot_context
          );
    },
    i(p) {
      c || (transition_in(_, p), transition_in(v, p), (c = !0));
    },
    o(p) {
      transition_out(_, p), transition_out(v, p), (c = !1);
    },
    d(p) {
      p && detach(t),
        _ && _.d(p),
        e[22](null),
        v && v.d(p),
        e[23](null),
        e[24](null),
        (u = !1),
        d();
    },
  };
}
const handlers = [];
let manager;
if (typeof window != 'undefined') {
  const e = () => handlers.forEach((t) => t());
  window.addEventListener('scroll', e), window.addEventListener('resize', e);
}
if (typeof IntersectionObserver != 'undefined') {
  const e = new Map(),
    t = new IntersectionObserver(
      (r, i) => {
        r.forEach((s) => {
          const n = e.get(s.target),
            o = handlers.indexOf(n);
          s.isIntersecting
            ? o === -1 && handlers.push(n)
            : (n(), o !== -1 && handlers.splice(o, 1));
        });
      },
      { rootMargin: '400px 0px' }
    );
  manager = {
    add: ({ outer: r, update: i }) => {
      const { top: s, bottom: n } = r.getBoundingClientRect();
      s < window.innerHeight && n > 0 && handlers.push(i),
        e.set(r, i),
        t.observe(r);
    },
    remove: ({ outer: r, update: i }) => {
      const s = handlers.indexOf(i);
      s !== -1 && handlers.splice(s, 1), e.delete(r), t.unobserve(r);
    },
  };
} else
  manager = {
    add: ({ update: e }) => {
      handlers.push(e);
    },
    remove: ({ update: e }) => {
      const t = handlers.indexOf(e);
      t !== -1 && handlers.splice(t, 1);
    },
  };
function instance(e, t, r) {
  let i,
    s,
    n,
    o,
    c,
    { $$slots: u = {}, $$scope: d } = t,
    { top: x = 0 } = t,
    { bottom: _ = 1 } = t,
    { threshold: m = 0.5 } = t,
    { query: v = 'section' } = t,
    { parallax: p = !1 } = t,
    { index: g = 0 } = t,
    { count: b = 0 } = t,
    { offset: l = 0 } = t,
    { progress: a = 0 } = t,
    { visible: h = !1 } = t,
    f,
    y,
    k,
    w,
    P,
    F = 0,
    D,
    T = 0,
    z = 1;
  onMount(() => {
    (P = y.querySelectorAll(v)), r(7, (b = P.length)), M();
    const E = { outer: f, update: M };
    return manager.add(E), () => manager.remove(E);
  });
  function M() {
    if (!y) return;
    const E = f.getBoundingClientRect();
    (w = E.left), r(18, (z = E.right - w));
    const A = y.getBoundingClientRect(),
      L = k.getBoundingClientRect();
    r(10, (h = A.top < F && A.bottom > 0));
    const I = A.bottom - A.top,
      B = L.bottom - L.top,
      H = s - i;
    r(9, (a = (i - A.top) / (I - H))),
      a <= 0
        ? (r(17, (T = 0)), r(16, (D = !1)))
        : a >= 1
        ? (r(17, (T = p ? I - B : I - H)), r(16, (D = !1)))
        : (r(17, (T = p ? Math.round(i - a * (B - H)) : i)), r(16, (D = !0)));
    for (let G = 0; G < P.length; G++) {
      const J = P[G],
        { top: Z } = J.getBoundingClientRect(),
        Q = P[G + 1],
        ee = Q ? Q.getBoundingClientRect().top : A.bottom;
      if ((r(8, (l = (n - Z) / (ee - Z))), ee >= n)) {
        r(6, (g = G));
        break;
      }
    }
  }
  function V() {
    r(0, (F = window_1.innerHeight));
  }
  function R(E) {
    binding_callbacks[E ? 'unshift' : 'push'](() => {
      (k = E), r(3, k);
    });
  }
  function C(E) {
    binding_callbacks[E ? 'unshift' : 'push'](() => {
      (y = E), r(2, y);
    });
  }
  function S(E) {
    binding_callbacks[E ? 'unshift' : 'push'](() => {
      (f = E), r(1, f);
    });
  }
  return (
    (e.$$set = (E) => {
      'top' in E && r(11, (x = E.top)),
        'bottom' in E && r(12, (_ = E.bottom)),
        'threshold' in E && r(13, (m = E.threshold)),
        'query' in E && r(14, (v = E.query)),
        'parallax' in E && r(15, (p = E.parallax)),
        'index' in E && r(6, (g = E.index)),
        'count' in E && r(7, (b = E.count)),
        'offset' in E && r(8, (l = E.offset)),
        'progress' in E && r(9, (a = E.progress)),
        'visible' in E && r(10, (h = E.visible)),
        '$$scope' in E && r(19, (d = E.$$scope));
    }),
    (e.$$.update = () => {
      e.$$.dirty[0] & 2049 && (i = Math.round(x * F)),
        e.$$.dirty[0] & 4097 && (s = Math.round(_ * F)),
        e.$$.dirty[0] & 8193 && (n = Math.round(m * F)),
        e.$$.dirty[0] & 47104 && M(),
        e.$$.dirty[0] & 196608 &&
          r(
            5,
            (o = `
		position: ${D ? 'fixed' : 'absolute'};
		top: 0;
		transform: translate(0, ${T}px);
		z-index: ${1};
	`)
          ),
        e.$$.dirty[0] & 327680 && r(4, (c = D ? `width:${z}px;` : ''));
    }),
    [F, f, y, k, c, o, g, b, l, a, h, x, _, m, v, p, D, T, z, d, u, V, R, C, S]
  );
}
class Scroller extends SvelteComponent {
  constructor(t) {
    super();
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
  typeof navigator != 'undefined' &&
    (function (e, t) {
      module.exports
        ? (module.exports = t(e))
        : ((e.lottie = t(e)), (e.bodymovin = e.lottie));
    })(window || {}, function (window) {
      var svgNS = 'http://www.w3.org/2000/svg',
        locationHref = '',
        initialDefaultFrame = -999999,
        _useWebWorker = !1,
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
      (function () {
        var e = [
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
          t,
          r = e.length;
        for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]];
      })();
      function ProjectInterface() {
        return {};
      }
      (BMMath.random = Math.random),
        (BMMath.abs = function (e) {
          var t = typeof e;
          if (t === 'object' && e.length) {
            var r = createSizedArray(e.length),
              i,
              s = e.length;
            for (i = 0; i < s; i += 1) r[i] = Math.abs(e[i]);
            return r;
          }
          return Math.abs(e);
        });
      var defaultCurveSegments = 150,
        degToRads = Math.PI / 180,
        roundCorner = 0.5519;
      function styleDiv(e) {
        (e.style.position = 'absolute'),
          (e.style.top = 0),
          (e.style.left = 0),
          (e.style.display = 'block'),
          (e.style.transformOrigin = '0 0'),
          (e.style.webkitTransformOrigin = '0 0'),
          (e.style.backfaceVisibility = 'visible'),
          (e.style.webkitBackfaceVisibility = 'visible'),
          (e.style.transformStyle = 'preserve-3d'),
          (e.style.webkitTransformStyle = 'preserve-3d'),
          (e.style.mozTransformStyle = 'preserve-3d');
      }
      function BMEnterFrameEvent(e, t, r, i) {
        (this.type = e),
          (this.currentTime = t),
          (this.totalTime = r),
          (this.direction = i < 0 ? -1 : 1);
      }
      function BMCompleteEvent(e, t) {
        (this.type = e), (this.direction = t < 0 ? -1 : 1);
      }
      function BMCompleteLoopEvent(e, t, r, i) {
        (this.type = e),
          (this.currentLoop = r),
          (this.totalLoops = t),
          (this.direction = i < 0 ? -1 : 1);
      }
      function BMSegmentStartEvent(e, t, r) {
        (this.type = e), (this.firstFrame = t), (this.totalFrames = r);
      }
      function BMDestroyEvent(e, t) {
        (this.type = e), (this.target = t);
      }
      function BMRenderFrameErrorEvent(e, t) {
        (this.type = 'renderFrameError'),
          (this.nativeError = e),
          (this.currentTime = t);
      }
      function BMConfigErrorEvent(e) {
        (this.type = 'configError'), (this.nativeError = e);
      }
      var createElementID = (function () {
        var e = 0;
        return function () {
          return (e += 1), idPrefix + '__lottie_element_' + e;
        };
      })();
      function HSVtoRGB(e, t, r) {
        var i, s, n, o, c, u, d, x;
        switch (
          ((o = Math.floor(e * 6)),
          (c = e * 6 - o),
          (u = r * (1 - t)),
          (d = r * (1 - c * t)),
          (x = r * (1 - (1 - c) * t)),
          o % 6)
        ) {
          case 0:
            (i = r), (s = x), (n = u);
            break;
          case 1:
            (i = d), (s = r), (n = u);
            break;
          case 2:
            (i = u), (s = r), (n = x);
            break;
          case 3:
            (i = u), (s = d), (n = r);
            break;
          case 4:
            (i = x), (s = u), (n = r);
            break;
          case 5:
            (i = r), (s = u), (n = d);
            break;
        }
        return [i, s, n];
      }
      function RGBtoHSV(e, t, r) {
        var i = Math.max(e, t, r),
          s = Math.min(e, t, r),
          n = i - s,
          o,
          c = i === 0 ? 0 : n / i,
          u = i / 255;
        switch (i) {
          case s:
            o = 0;
            break;
          case e:
            (o = t - r + n * (t < r ? 6 : 0)), (o /= 6 * n);
            break;
          case t:
            (o = r - e + n * 2), (o /= 6 * n);
            break;
          case r:
            (o = e - t + n * 4), (o /= 6 * n);
            break;
        }
        return [o, c, u];
      }
      function addSaturationToRGB(e, t) {
        var r = RGBtoHSV(e[0] * 255, e[1] * 255, e[2] * 255);
        return (
          (r[1] += t),
          r[1] > 1 ? (r[1] = 1) : r[1] <= 0 && (r[1] = 0),
          HSVtoRGB(r[0], r[1], r[2])
        );
      }
      function addBrightnessToRGB(e, t) {
        var r = RGBtoHSV(e[0] * 255, e[1] * 255, e[2] * 255);
        return (
          (r[2] += t),
          r[2] > 1 ? (r[2] = 1) : r[2] < 0 && (r[2] = 0),
          HSVtoRGB(r[0], r[1], r[2])
        );
      }
      function addHueToRGB(e, t) {
        var r = RGBtoHSV(e[0] * 255, e[1] * 255, e[2] * 255);
        return (
          (r[0] += t / 360),
          r[0] > 1 ? (r[0] -= 1) : r[0] < 0 && (r[0] += 1),
          HSVtoRGB(r[0], r[1], r[2])
        );
      }
      var rgbToHex = (function () {
        var e = [],
          t,
          r;
        for (t = 0; t < 256; t += 1)
          (r = t.toString(16)), (e[t] = r.length === 1 ? '0' + r : r);
        return function (i, s, n) {
          return (
            i < 0 && (i = 0),
            s < 0 && (s = 0),
            n < 0 && (n = 0),
            '#' + e[i] + e[s] + e[n]
          );
        };
      })();
      function BaseEvent() {}
      BaseEvent.prototype = {
        triggerEvent: function (e, t) {
          if (this._cbs[e])
            for (var r = this._cbs[e], i = 0; i < r.length; i += 1) r[i](t);
        },
        addEventListener: function (e, t) {
          return (
            this._cbs[e] || (this._cbs[e] = []),
            this._cbs[e].push(t),
            function () {
              this.removeEventListener(e, t);
            }.bind(this)
          );
        },
        removeEventListener: function (e, t) {
          if (!t) this._cbs[e] = null;
          else if (this._cbs[e]) {
            for (var r = 0, i = this._cbs[e].length; r < i; )
              this._cbs[e][r] === t &&
                (this._cbs[e].splice(r, 1), (r -= 1), (i -= 1)),
                (r += 1);
            this._cbs[e].length || (this._cbs[e] = null);
          }
        },
      };
      var createTypedArray = (function () {
        function e(r, i) {
          var s = 0,
            n = [],
            o;
          switch (r) {
            case 'int16':
            case 'uint8c':
              o = 1;
              break;
            default:
              o = 1.1;
              break;
          }
          for (s = 0; s < i; s += 1) n.push(o);
          return n;
        }
        function t(r, i) {
          return r === 'float32'
            ? new Float32Array(i)
            : r === 'int16'
            ? new Int16Array(i)
            : r === 'uint8c'
            ? new Uint8ClampedArray(i)
            : e(r, i);
        }
        return typeof Uint8ClampedArray == 'function' &&
          typeof Float32Array == 'function'
          ? t
          : e;
      })();
      function createSizedArray(e) {
        return Array.apply(null, { length: e });
      }
      function createNS(e) {
        return document.createElementNS(svgNS, e);
      }
      function createTag(e) {
        return document.createElement(e);
      }
      function DynamicPropertyContainer() {}
      DynamicPropertyContainer.prototype = {
        addDynamicProperty: function (e) {
          this.dynamicProperties.indexOf(e) === -1 &&
            (this.dynamicProperties.push(e),
            this.container.addDynamicProperty(this),
            (this._isAnimated = !0));
        },
        iterateDynamicProperties: function () {
          this._mdf = !1;
          var e,
            t = this.dynamicProperties.length;
          for (e = 0; e < t; e += 1)
            this.dynamicProperties[e].getValue(),
              this.dynamicProperties[e]._mdf && (this._mdf = !0);
        },
        initDynamicPropertyContainer: function (e) {
          (this.container = e),
            (this.dynamicProperties = []),
            (this._mdf = !1),
            (this._isAnimated = !1);
        },
      };
      var getBlendMode = (function () {
          var e = {
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
          };
          return function (t) {
            return e[t] || '';
          };
        })(),
        lineCapEnum = { 1: 'butt', 2: 'round', 3: 'square' },
        lineJoinEnum = { 1: 'miter', 2: 'round', 3: 'bevel' };
      /*!
 Transformation Matrix v2.0
 (c) Epistemex 2014-2015
 www.epistemex.com
 By Ken Fyrstenberg
 Contributions by leeoniya.
 License: MIT, header required.
 */ var Matrix = (function () {
        var e = Math.cos,
          t = Math.sin,
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
        function n(S) {
          if (S === 0) return this;
          var E = e(S),
            A = t(S);
          return this._t(E, -A, 0, 0, A, E, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function o(S) {
          if (S === 0) return this;
          var E = e(S),
            A = t(S);
          return this._t(1, 0, 0, 0, 0, E, -A, 0, 0, A, E, 0, 0, 0, 0, 1);
        }
        function c(S) {
          if (S === 0) return this;
          var E = e(S),
            A = t(S);
          return this._t(E, 0, A, 0, 0, 1, 0, 0, -A, 0, E, 0, 0, 0, 0, 1);
        }
        function u(S) {
          if (S === 0) return this;
          var E = e(S),
            A = t(S);
          return this._t(E, -A, 0, 0, A, E, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function d(S, E) {
          return this._t(1, E, S, 1, 0, 0);
        }
        function x(S, E) {
          return this.shear(r(S), r(E));
        }
        function _(S, E) {
          var A = e(E),
            L = t(E);
          return this._t(A, L, 0, 0, -L, A, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            ._t(1, 0, 0, 0, r(S), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            ._t(A, -L, 0, 0, L, A, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function m(S, E, A) {
          return (
            !A && A !== 0 && (A = 1),
            S === 1 && E === 1 && A === 1
              ? this
              : this._t(S, 0, 0, 0, 0, E, 0, 0, 0, 0, A, 0, 0, 0, 0, 1)
          );
        }
        function v(S, E, A, L, I, B, H, G, J, Z, Q, ee, te, re, K, se) {
          return (
            (this.props[0] = S),
            (this.props[1] = E),
            (this.props[2] = A),
            (this.props[3] = L),
            (this.props[4] = I),
            (this.props[5] = B),
            (this.props[6] = H),
            (this.props[7] = G),
            (this.props[8] = J),
            (this.props[9] = Z),
            (this.props[10] = Q),
            (this.props[11] = ee),
            (this.props[12] = te),
            (this.props[13] = re),
            (this.props[14] = K),
            (this.props[15] = se),
            this
          );
        }
        function p(S, E, A) {
          return (
            (A = A || 0),
            S !== 0 || E !== 0 || A !== 0
              ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, S, E, A, 1)
              : this
          );
        }
        function g(S, E, A, L, I, B, H, G, J, Z, Q, ee, te, re, K, se) {
          var O = this.props;
          if (
            S === 1 &&
            E === 0 &&
            A === 0 &&
            L === 0 &&
            I === 0 &&
            B === 1 &&
            H === 0 &&
            G === 0 &&
            J === 0 &&
            Z === 0 &&
            Q === 1 &&
            ee === 0
          )
            return (
              (O[12] = O[12] * S + O[15] * te),
              (O[13] = O[13] * B + O[15] * re),
              (O[14] = O[14] * Q + O[15] * K),
              (O[15] *= se),
              (this._identityCalculated = !1),
              this
            );
          var X = O[0],
            ae = O[1],
            fe = O[2],
            le = O[3],
            oe = O[4],
            $ = O[5],
            ne = O[6],
            ie = O[7],
            q = O[8],
            W = O[9],
            N = O[10],
            U = O[11],
            j = O[12],
            he = O[13],
            Y = O[14],
            ce = O[15];
          return (
            (O[0] = X * S + ae * I + fe * J + le * te),
            (O[1] = X * E + ae * B + fe * Z + le * re),
            (O[2] = X * A + ae * H + fe * Q + le * K),
            (O[3] = X * L + ae * G + fe * ee + le * se),
            (O[4] = oe * S + $ * I + ne * J + ie * te),
            (O[5] = oe * E + $ * B + ne * Z + ie * re),
            (O[6] = oe * A + $ * H + ne * Q + ie * K),
            (O[7] = oe * L + $ * G + ne * ee + ie * se),
            (O[8] = q * S + W * I + N * J + U * te),
            (O[9] = q * E + W * B + N * Z + U * re),
            (O[10] = q * A + W * H + N * Q + U * K),
            (O[11] = q * L + W * G + N * ee + U * se),
            (O[12] = j * S + he * I + Y * J + ce * te),
            (O[13] = j * E + he * B + Y * Z + ce * re),
            (O[14] = j * A + he * H + Y * Q + ce * K),
            (O[15] = j * L + he * G + Y * ee + ce * se),
            (this._identityCalculated = !1),
            this
          );
        }
        function b() {
          return (
            this._identityCalculated ||
              ((this._identity = !(
                this.props[0] !== 1 ||
                this.props[1] !== 0 ||
                this.props[2] !== 0 ||
                this.props[3] !== 0 ||
                this.props[4] !== 0 ||
                this.props[5] !== 1 ||
                this.props[6] !== 0 ||
                this.props[7] !== 0 ||
                this.props[8] !== 0 ||
                this.props[9] !== 0 ||
                this.props[10] !== 1 ||
                this.props[11] !== 0 ||
                this.props[12] !== 0 ||
                this.props[13] !== 0 ||
                this.props[14] !== 0 ||
                this.props[15] !== 1
              )),
              (this._identityCalculated = !0)),
            this._identity
          );
        }
        function l(S) {
          for (var E = 0; E < 16; ) {
            if (S.props[E] !== this.props[E]) return !1;
            E += 1;
          }
          return !0;
        }
        function a(S) {
          var E;
          for (E = 0; E < 16; E += 1) S.props[E] = this.props[E];
          return S;
        }
        function h(S) {
          var E;
          for (E = 0; E < 16; E += 1) this.props[E] = S[E];
        }
        function f(S, E, A) {
          return {
            x:
              S * this.props[0] +
              E * this.props[4] +
              A * this.props[8] +
              this.props[12],
            y:
              S * this.props[1] +
              E * this.props[5] +
              A * this.props[9] +
              this.props[13],
            z:
              S * this.props[2] +
              E * this.props[6] +
              A * this.props[10] +
              this.props[14],
          };
        }
        function y(S, E, A) {
          return (
            S * this.props[0] +
            E * this.props[4] +
            A * this.props[8] +
            this.props[12]
          );
        }
        function k(S, E, A) {
          return (
            S * this.props[1] +
            E * this.props[5] +
            A * this.props[9] +
            this.props[13]
          );
        }
        function w(S, E, A) {
          return (
            S * this.props[2] +
            E * this.props[6] +
            A * this.props[10] +
            this.props[14]
          );
        }
        function P() {
          var S = this.props[0] * this.props[5] - this.props[1] * this.props[4],
            E = this.props[5] / S,
            A = -this.props[1] / S,
            L = -this.props[4] / S,
            I = this.props[0] / S,
            B =
              (this.props[4] * this.props[13] -
                this.props[5] * this.props[12]) /
              S,
            H =
              -(
                this.props[0] * this.props[13] -
                this.props[1] * this.props[12]
              ) / S,
            G = new Matrix();
          return (
            (G.props[0] = E),
            (G.props[1] = A),
            (G.props[4] = L),
            (G.props[5] = I),
            (G.props[12] = B),
            (G.props[13] = H),
            G
          );
        }
        function F(S) {
          var E = this.getInverseMatrix();
          return E.applyToPointArray(S[0], S[1], S[2] || 0);
        }
        function D(S) {
          var E,
            A = S.length,
            L = [];
          for (E = 0; E < A; E += 1) L[E] = F(S[E]);
          return L;
        }
        function T(S, E, A) {
          var L = createTypedArray('float32', 6);
          if (this.isIdentity())
            (L[0] = S[0]),
              (L[1] = S[1]),
              (L[2] = E[0]),
              (L[3] = E[1]),
              (L[4] = A[0]),
              (L[5] = A[1]);
          else {
            var I = this.props[0],
              B = this.props[1],
              H = this.props[4],
              G = this.props[5],
              J = this.props[12],
              Z = this.props[13];
            (L[0] = S[0] * I + S[1] * H + J),
              (L[1] = S[0] * B + S[1] * G + Z),
              (L[2] = E[0] * I + E[1] * H + J),
              (L[3] = E[0] * B + E[1] * G + Z),
              (L[4] = A[0] * I + A[1] * H + J),
              (L[5] = A[0] * B + A[1] * G + Z);
          }
          return L;
        }
        function z(S, E, A) {
          var L;
          return (
            this.isIdentity()
              ? (L = [S, E, A])
              : (L = [
                  S * this.props[0] +
                    E * this.props[4] +
                    A * this.props[8] +
                    this.props[12],
                  S * this.props[1] +
                    E * this.props[5] +
                    A * this.props[9] +
                    this.props[13],
                  S * this.props[2] +
                    E * this.props[6] +
                    A * this.props[10] +
                    this.props[14],
                ]),
            L
          );
        }
        function M(S, E) {
          if (this.isIdentity()) return S + ',' + E;
          var A = this.props;
          return (
            Math.round((S * A[0] + E * A[4] + A[12]) * 100) / 100 +
            ',' +
            Math.round((S * A[1] + E * A[5] + A[13]) * 100) / 100
          );
        }
        function V() {
          for (var S = 0, E = this.props, A = 'matrix3d(', L = 1e4; S < 16; )
            (A += i(E[S] * L) / L), (A += S === 15 ? ')' : ','), (S += 1);
          return A;
        }
        function R(S) {
          var E = 1e4;
          return (S < 1e-6 && S > 0) || (S > -1e-6 && S < 0) ? i(S * E) / E : S;
        }
        function C() {
          var S = this.props,
            E = R(S[0]),
            A = R(S[1]),
            L = R(S[4]),
            I = R(S[5]),
            B = R(S[12]),
            H = R(S[13]);
          return (
            'matrix(' +
            E +
            ',' +
            A +
            ',' +
            L +
            ',' +
            I +
            ',' +
            B +
            ',' +
            H +
            ')'
          );
        }
        return function () {
          (this.reset = s),
            (this.rotate = n),
            (this.rotateX = o),
            (this.rotateY = c),
            (this.rotateZ = u),
            (this.skew = x),
            (this.skewFromAxis = _),
            (this.shear = d),
            (this.scale = m),
            (this.setTransform = v),
            (this.translate = p),
            (this.transform = g),
            (this.applyToPoint = f),
            (this.applyToX = y),
            (this.applyToY = k),
            (this.applyToZ = w),
            (this.applyToPointArray = z),
            (this.applyToTriplePoints = T),
            (this.applyToPointStringified = M),
            (this.toCSS = V),
            (this.to2dCSS = C),
            (this.clone = a),
            (this.cloneFromProps = h),
            (this.equals = l),
            (this.inversePoints = D),
            (this.inversePoint = F),
            (this.getInverseMatrix = P),
            (this._t = this.transform),
            (this.isIdentity = b),
            (this._identity = !0),
            (this._identityCalculated = !1),
            (this.props = createTypedArray('float32', 16)),
            this.reset();
        };
      })();
      (function (e, t) {
        var r = this,
          i = 256,
          s = 6,
          n = 52,
          o = 'random',
          c = t.pow(i, s),
          u = t.pow(2, n),
          d = u * 2,
          x = i - 1,
          _;
        function m(h, f, y) {
          var k = [];
          f = f === !0 ? { entropy: !0 } : f || {};
          var w = b(g(f.entropy ? [h, a(e)] : h === null ? l() : h, 3), k),
            P = new v(k),
            F = function () {
              for (var D = P.g(s), T = c, z = 0; D < u; )
                (D = (D + z) * i), (T *= i), (z = P.g(1));
              for (; D >= d; ) (D /= 2), (T /= 2), (z >>>= 1);
              return (D + z) / T;
            };
          return (
            (F.int32 = function () {
              return P.g(4) | 0;
            }),
            (F.quick = function () {
              return P.g(4) / 4294967296;
            }),
            (F.double = F),
            b(a(P.S), e),
            (
              f.pass ||
              y ||
              function (D, T, z, M) {
                return (
                  M &&
                    (M.S && p(M, P),
                    (D.state = function () {
                      return p(P, {});
                    })),
                  z ? ((t[o] = D), T) : D
                );
              }
            )(F, w, 'global' in f ? f.global : this == t, f.state)
          );
        }
        t['seed' + o] = m;
        function v(h) {
          var f,
            y = h.length,
            k = this,
            w = 0,
            P = (k.i = k.j = 0),
            F = (k.S = []);
          for (y || (h = [y++]); w < i; ) F[w] = w++;
          for (w = 0; w < i; w++)
            (F[w] = F[(P = x & (P + h[w % y] + (f = F[w])))]), (F[P] = f);
          k.g = function (D) {
            for (var T, z = 0, M = k.i, V = k.j, R = k.S; D--; )
              (T = R[(M = x & (M + 1))]),
                (z =
                  z * i + R[x & ((R[M] = R[(V = x & (V + T))]) + (R[V] = T))]);
            return (k.i = M), (k.j = V), z;
          };
        }
        function p(h, f) {
          return (f.i = h.i), (f.j = h.j), (f.S = h.S.slice()), f;
        }
        function g(h, f) {
          var y = [],
            k = typeof h,
            w;
          if (f && k == 'object')
            for (w in h)
              try {
                y.push(g(h[w], f - 1));
              } catch {}
          return y.length ? y : k == 'string' ? h : h + '\0';
        }
        function b(h, f) {
          for (var y = h + '', k, w = 0; w < y.length; )
            f[x & w] = x & ((k ^= f[x & w] * 19) + y.charCodeAt(w++));
          return a(f);
        }
        function l() {
          try {
            var h = new Uint8Array(i);
            return (r.crypto || r.msCrypto).getRandomValues(h), a(h);
          } catch {
            var f = r.navigator,
              y = f && f.plugins;
            return [+new Date(), r, y, r.screen, a(e)];
          }
        }
        function a(h) {
          return String.fromCharCode.apply(0, h);
        }
        b(t.random(), e);
      })([], BMMath);
      var BezierFactory = (function () {
        var e = {};
        e.getBezierEasing = r;
        var t = {};
        function r(a, h, f, y, k) {
          var w =
            k || ('bez_' + a + '_' + h + '_' + f + '_' + y).replace(/\./g, 'p');
          if (t[w]) return t[w];
          var P = new l([a, h, f, y]);
          return (t[w] = P), P;
        }
        var i = 4,
          s = 0.001,
          n = 1e-7,
          o = 10,
          c = 11,
          u = 1 / (c - 1),
          d = typeof Float32Array == 'function';
        function x(a, h) {
          return 1 - 3 * h + 3 * a;
        }
        function _(a, h) {
          return 3 * h - 6 * a;
        }
        function m(a) {
          return 3 * a;
        }
        function v(a, h, f) {
          return ((x(h, f) * a + _(h, f)) * a + m(h)) * a;
        }
        function p(a, h, f) {
          return 3 * x(h, f) * a * a + 2 * _(h, f) * a + m(h);
        }
        function g(a, h, f, y, k) {
          var w,
            P,
            F = 0;
          do
            (P = h + (f - h) / 2),
              (w = v(P, y, k) - a),
              w > 0 ? (f = P) : (h = P);
          while (Math.abs(w) > n && ++F < o);
          return P;
        }
        function b(a, h, f, y) {
          for (var k = 0; k < i; ++k) {
            var w = p(h, f, y);
            if (w === 0) return h;
            var P = v(h, f, y) - a;
            h -= P / w;
          }
          return h;
        }
        function l(a) {
          (this._p = a),
            (this._mSampleValues = d ? new Float32Array(c) : new Array(c)),
            (this._precomputed = !1),
            (this.get = this.get.bind(this));
        }
        return (
          (l.prototype = {
            get: function (a) {
              var h = this._p[0],
                f = this._p[1],
                y = this._p[2],
                k = this._p[3];
              return (
                this._precomputed || this._precompute(),
                h === f && y === k
                  ? a
                  : a === 0
                  ? 0
                  : a === 1
                  ? 1
                  : v(this._getTForX(a), f, k)
              );
            },
            _precompute: function () {
              var a = this._p[0],
                h = this._p[1],
                f = this._p[2],
                y = this._p[3];
              (this._precomputed = !0),
                (a !== h || f !== y) && this._calcSampleValues();
            },
            _calcSampleValues: function () {
              for (var a = this._p[0], h = this._p[2], f = 0; f < c; ++f)
                this._mSampleValues[f] = v(f * u, a, h);
            },
            _getTForX: function (a) {
              for (
                var h = this._p[0],
                  f = this._p[2],
                  y = this._mSampleValues,
                  k = 0,
                  w = 1,
                  P = c - 1;
                w !== P && y[w] <= a;
                ++w
              )
                k += u;
              --w;
              var F = (a - y[w]) / (y[w + 1] - y[w]),
                D = k + F * u,
                T = p(D, h, f);
              return T >= s
                ? b(a, D, h, f)
                : T === 0
                ? D
                : g(a, k, k + u, h, f);
            },
          }),
          e
        );
      })();
      (function () {
        for (
          var e = 0, t = ['ms', 'moz', 'webkit', 'o'], r = 0;
          r < t.length && !window.requestAnimationFrame;
          ++r
        )
          (window.requestAnimationFrame =
            window[t[r] + 'RequestAnimationFrame']),
            (window.cancelAnimationFrame =
              window[t[r] + 'CancelAnimationFrame'] ||
              window[t[r] + 'CancelRequestAnimationFrame']);
        window.requestAnimationFrame ||
          (window.requestAnimationFrame = function (i) {
            var s = new Date().getTime(),
              n = Math.max(0, 16 - (s - e)),
              o = setTimeout(function () {
                i(s + n);
              }, n);
            return (e = s + n), o;
          }),
          window.cancelAnimationFrame ||
            (window.cancelAnimationFrame = function (i) {
              clearTimeout(i);
            });
      })();
      function extendPrototype(e, t) {
        var r,
          i = e.length,
          s;
        for (r = 0; r < i; r += 1) {
          s = e[r].prototype;
          for (var n in s)
            Object.prototype.hasOwnProperty.call(s, n) &&
              (t.prototype[n] = s[n]);
        }
      }
      function getDescriptor(e, t) {
        return Object.getOwnPropertyDescriptor(e, t);
      }
      function createProxyFunction(e) {
        function t() {}
        return (t.prototype = e), t;
      }
      function bezFunction() {
        var e = Math;
        function t(m, v, p, g, b, l) {
          var a = m * g + v * b + p * l - b * g - l * m - p * v;
          return a > -0.001 && a < 0.001;
        }
        function r(m, v, p, g, b, l, a, h, f) {
          if (p === 0 && l === 0 && f === 0) return t(m, v, g, b, a, h);
          var y = e.sqrt(e.pow(g - m, 2) + e.pow(b - v, 2) + e.pow(l - p, 2)),
            k = e.sqrt(e.pow(a - m, 2) + e.pow(h - v, 2) + e.pow(f - p, 2)),
            w = e.sqrt(e.pow(a - g, 2) + e.pow(h - b, 2) + e.pow(f - l, 2)),
            P;
          return (
            y > k
              ? y > w
                ? (P = y - k - w)
                : (P = w - k - y)
              : w > k
              ? (P = w - k - y)
              : (P = k - y - w),
            P > -1e-4 && P < 1e-4
          );
        }
        var i = (function () {
          return function (m, v, p, g) {
            var b = defaultCurveSegments,
              l,
              a,
              h,
              f,
              y,
              k = 0,
              w,
              P = [],
              F = [],
              D = bezierLengthPool.newElement();
            for (h = p.length, l = 0; l < b; l += 1) {
              for (y = l / (b - 1), w = 0, a = 0; a < h; a += 1)
                (f =
                  bmPow(1 - y, 3) * m[a] +
                  3 * bmPow(1 - y, 2) * y * p[a] +
                  3 * (1 - y) * bmPow(y, 2) * g[a] +
                  bmPow(y, 3) * v[a]),
                  (P[a] = f),
                  F[a] !== null && (w += bmPow(P[a] - F[a], 2)),
                  (F[a] = P[a]);
              w && ((w = bmSqrt(w)), (k += w)),
                (D.percents[l] = y),
                (D.lengths[l] = k);
            }
            return (D.addedLength = k), D;
          };
        })();
        function s(m) {
          var v = segmentsLengthPool.newElement(),
            p = m.c,
            g = m.v,
            b = m.o,
            l = m.i,
            a,
            h = m._length,
            f = v.lengths,
            y = 0;
          for (a = 0; a < h - 1; a += 1)
            (f[a] = i(g[a], g[a + 1], b[a], l[a + 1])), (y += f[a].addedLength);
          return (
            p &&
              h &&
              ((f[a] = i(g[a], g[0], b[a], l[0])), (y += f[a].addedLength)),
            (v.totalLength = y),
            v
          );
        }
        function n(m) {
          (this.segmentLength = 0), (this.points = new Array(m));
        }
        function o(m, v) {
          (this.partialLength = m), (this.point = v);
        }
        var c = (function () {
          var m = {};
          return function (v, p, g, b) {
            var l = (
              v[0] +
              '_' +
              v[1] +
              '_' +
              p[0] +
              '_' +
              p[1] +
              '_' +
              g[0] +
              '_' +
              g[1] +
              '_' +
              b[0] +
              '_' +
              b[1]
            ).replace(/\./g, 'p');
            if (!m[l]) {
              var a = defaultCurveSegments,
                h,
                f,
                y,
                k,
                w,
                P = 0,
                F,
                D,
                T = null;
              v.length === 2 &&
                (v[0] !== p[0] || v[1] !== p[1]) &&
                t(v[0], v[1], p[0], p[1], v[0] + g[0], v[1] + g[1]) &&
                t(v[0], v[1], p[0], p[1], p[0] + b[0], p[1] + b[1]) &&
                (a = 2);
              var z = new n(a);
              for (y = g.length, h = 0; h < a; h += 1) {
                for (
                  D = createSizedArray(y), w = h / (a - 1), F = 0, f = 0;
                  f < y;
                  f += 1
                )
                  (k =
                    bmPow(1 - w, 3) * v[f] +
                    3 * bmPow(1 - w, 2) * w * (v[f] + g[f]) +
                    3 * (1 - w) * bmPow(w, 2) * (p[f] + b[f]) +
                    bmPow(w, 3) * p[f]),
                    (D[f] = k),
                    T !== null && (F += bmPow(D[f] - T[f], 2));
                (F = bmSqrt(F)), (P += F), (z.points[h] = new o(F, D)), (T = D);
              }
              (z.segmentLength = P), (m[l] = z);
            }
            return m[l];
          };
        })();
        function u(m, v) {
          var p = v.percents,
            g = v.lengths,
            b = p.length,
            l = bmFloor((b - 1) * m),
            a = m * v.addedLength,
            h = 0;
          if (l === b - 1 || l === 0 || a === g[l]) return p[l];
          for (var f = g[l] > a ? -1 : 1, y = !0; y; )
            if (
              (g[l] <= a && g[l + 1] > a
                ? ((h = (a - g[l]) / (g[l + 1] - g[l])), (y = !1))
                : (l += f),
              l < 0 || l >= b - 1)
            ) {
              if (l === b - 1) return p[l];
              y = !1;
            }
          return p[l] + (p[l + 1] - p[l]) * h;
        }
        function d(m, v, p, g, b, l) {
          var a = u(b, l),
            h = 1 - a,
            f =
              e.round(
                (h * h * h * m[0] +
                  (a * h * h + h * a * h + h * h * a) * p[0] +
                  (a * a * h + h * a * a + a * h * a) * g[0] +
                  a * a * a * v[0]) *
                  1e3
              ) / 1e3,
            y =
              e.round(
                (h * h * h * m[1] +
                  (a * h * h + h * a * h + h * h * a) * p[1] +
                  (a * a * h + h * a * a + a * h * a) * g[1] +
                  a * a * a * v[1]) *
                  1e3
              ) / 1e3;
          return [f, y];
        }
        var x = createTypedArray('float32', 8);
        function _(m, v, p, g, b, l, a) {
          b < 0 ? (b = 0) : b > 1 && (b = 1);
          var h = u(b, a);
          l = l > 1 ? 1 : l;
          var f = u(l, a),
            y,
            k = m.length,
            w = 1 - h,
            P = 1 - f,
            F = w * w * w,
            D = h * w * w * 3,
            T = h * h * w * 3,
            z = h * h * h,
            M = w * w * P,
            V = h * w * P + w * h * P + w * w * f,
            R = h * h * P + w * h * f + h * w * f,
            C = h * h * f,
            S = w * P * P,
            E = h * P * P + w * f * P + w * P * f,
            A = h * f * P + w * f * f + h * P * f,
            L = h * f * f,
            I = P * P * P,
            B = f * P * P + P * f * P + P * P * f,
            H = f * f * P + P * f * f + f * P * f,
            G = f * f * f;
          for (y = 0; y < k; y += 1)
            (x[y * 4] =
              e.round((F * m[y] + D * p[y] + T * g[y] + z * v[y]) * 1e3) / 1e3),
              (x[y * 4 + 1] =
                e.round((M * m[y] + V * p[y] + R * g[y] + C * v[y]) * 1e3) /
                1e3),
              (x[y * 4 + 2] =
                e.round((S * m[y] + E * p[y] + A * g[y] + L * v[y]) * 1e3) /
                1e3),
              (x[y * 4 + 3] =
                e.round((I * m[y] + B * p[y] + H * g[y] + G * v[y]) * 1e3) /
                1e3);
          return x;
        }
        return {
          getSegmentsLength: s,
          getNewSegment: _,
          getPointInSegment: d,
          buildBezierData: c,
          pointOnLine2D: t,
          pointOnLine3D: r,
        };
      }
      var bez = bezFunction(),
        dataManager = (function () {
          var e = 1,
            t = [],
            r,
            i,
            s = {
              onmessage: function () {},
              postMessage: function (m) {
                r({ data: m });
              },
            },
            n = {
              postMessage: function (m) {
                s.onmessage({ data: m });
              },
            };
          function o(m) {
            if (window.Worker && window.Blob && _useWebWorker) {
              var v = new Blob(
                  ['var _workerSelf = self; self.onmessage = ', m.toString()],
                  { type: 'text/javascript' }
                ),
                p = URL.createObjectURL(v);
              return new Worker(p);
            }
            return (r = m), s;
          }
          function c() {
            i ||
              ((i = o(function (v) {
                function p() {
                  function b(M, V) {
                    var R,
                      C,
                      S = M.length,
                      E,
                      A,
                      L,
                      I;
                    for (C = 0; C < S; C += 1)
                      if (((R = M[C]), 'ks' in R && !R.completed)) {
                        if (
                          ((R.completed = !0),
                          R.tt && (M[C - 1].td = R.tt),
                          R.hasMask)
                        ) {
                          var B = R.masksProperties;
                          for (A = B.length, E = 0; E < A; E += 1)
                            if (B[E].pt.k.i) h(B[E].pt.k);
                            else
                              for (I = B[E].pt.k.length, L = 0; L < I; L += 1)
                                B[E].pt.k[L].s && h(B[E].pt.k[L].s[0]),
                                  B[E].pt.k[L].e && h(B[E].pt.k[L].e[0]);
                        }
                        R.ty === 0
                          ? ((R.layers = l(R.refId, V)), b(R.layers, V))
                          : R.ty === 4
                          ? a(R.shapes)
                          : R.ty === 5 && T(R);
                      }
                  }
                  function l(M, V) {
                    for (var R = 0, C = V.length; R < C; ) {
                      if (V[R].id === M)
                        return V[R].layers.__used
                          ? JSON.parse(JSON.stringify(V[R].layers))
                          : ((V[R].layers.__used = !0), V[R].layers);
                      R += 1;
                    }
                    return null;
                  }
                  function a(M) {
                    var V,
                      R = M.length,
                      C,
                      S;
                    for (V = R - 1; V >= 0; V -= 1)
                      if (M[V].ty === 'sh')
                        if (M[V].ks.k.i) h(M[V].ks.k);
                        else
                          for (S = M[V].ks.k.length, C = 0; C < S; C += 1)
                            M[V].ks.k[C].s && h(M[V].ks.k[C].s[0]),
                              M[V].ks.k[C].e && h(M[V].ks.k[C].e[0]);
                      else M[V].ty === 'gr' && a(M[V].it);
                  }
                  function h(M) {
                    var V,
                      R = M.i.length;
                    for (V = 0; V < R; V += 1)
                      (M.i[V][0] += M.v[V][0]),
                        (M.i[V][1] += M.v[V][1]),
                        (M.o[V][0] += M.v[V][0]),
                        (M.o[V][1] += M.v[V][1]);
                  }
                  function f(M, V) {
                    var R = V ? V.split('.') : [100, 100, 100];
                    return M[0] > R[0]
                      ? !0
                      : R[0] > M[0]
                      ? !1
                      : M[1] > R[1]
                      ? !0
                      : R[1] > M[1]
                      ? !1
                      : M[2] > R[2]
                      ? !0
                      : R[2] > M[2]
                      ? !1
                      : null;
                  }
                  var y = (function () {
                      var M = [4, 4, 14];
                      function V(C) {
                        var S = C.t.d;
                        C.t.d = { k: [{ s: S, t: 0 }] };
                      }
                      function R(C) {
                        var S,
                          E = C.length;
                        for (S = 0; S < E; S += 1) C[S].ty === 5 && V(C[S]);
                      }
                      return function (C) {
                        if (f(M, C.v) && (R(C.layers), C.assets)) {
                          var S,
                            E = C.assets.length;
                          for (S = 0; S < E; S += 1)
                            C.assets[S].layers && R(C.assets[S].layers);
                        }
                      };
                    })(),
                    k = (function () {
                      var M = [4, 7, 99];
                      return function (V) {
                        if (V.chars && !f(M, V.v)) {
                          var R,
                            C = V.chars.length,
                            S,
                            E,
                            A,
                            L;
                          for (R = 0; R < C; R += 1)
                            if (V.chars[R].data && V.chars[R].data.shapes)
                              for (
                                L = V.chars[R].data.shapes[0].it,
                                  E = L.length,
                                  S = 0;
                                S < E;
                                S += 1
                              )
                                (A = L[S].ks.k),
                                  A.__converted ||
                                    (h(L[S].ks.k), (A.__converted = !0));
                        }
                      };
                    })(),
                    w = (function () {
                      var M = [5, 7, 15];
                      function V(C) {
                        var S = C.t.p;
                        typeof S.a == 'number' && (S.a = { a: 0, k: S.a }),
                          typeof S.p == 'number' && (S.p = { a: 0, k: S.p }),
                          typeof S.r == 'number' && (S.r = { a: 0, k: S.r });
                      }
                      function R(C) {
                        var S,
                          E = C.length;
                        for (S = 0; S < E; S += 1) C[S].ty === 5 && V(C[S]);
                      }
                      return function (C) {
                        if (f(M, C.v) && (R(C.layers), C.assets)) {
                          var S,
                            E = C.assets.length;
                          for (S = 0; S < E; S += 1)
                            C.assets[S].layers && R(C.assets[S].layers);
                        }
                      };
                    })(),
                    P = (function () {
                      var M = [4, 1, 9];
                      function V(C) {
                        var S,
                          E = C.length,
                          A,
                          L;
                        for (S = 0; S < E; S += 1)
                          if (C[S].ty === 'gr') V(C[S].it);
                          else if (C[S].ty === 'fl' || C[S].ty === 'st')
                            if (C[S].c.k && C[S].c.k[0].i)
                              for (L = C[S].c.k.length, A = 0; A < L; A += 1)
                                C[S].c.k[A].s &&
                                  ((C[S].c.k[A].s[0] /= 255),
                                  (C[S].c.k[A].s[1] /= 255),
                                  (C[S].c.k[A].s[2] /= 255),
                                  (C[S].c.k[A].s[3] /= 255)),
                                  C[S].c.k[A].e &&
                                    ((C[S].c.k[A].e[0] /= 255),
                                    (C[S].c.k[A].e[1] /= 255),
                                    (C[S].c.k[A].e[2] /= 255),
                                    (C[S].c.k[A].e[3] /= 255));
                            else
                              (C[S].c.k[0] /= 255),
                                (C[S].c.k[1] /= 255),
                                (C[S].c.k[2] /= 255),
                                (C[S].c.k[3] /= 255);
                      }
                      function R(C) {
                        var S,
                          E = C.length;
                        for (S = 0; S < E; S += 1)
                          C[S].ty === 4 && V(C[S].shapes);
                      }
                      return function (C) {
                        if (f(M, C.v) && (R(C.layers), C.assets)) {
                          var S,
                            E = C.assets.length;
                          for (S = 0; S < E; S += 1)
                            C.assets[S].layers && R(C.assets[S].layers);
                        }
                      };
                    })(),
                    F = (function () {
                      var M = [4, 4, 18];
                      function V(C) {
                        var S,
                          E = C.length,
                          A,
                          L;
                        for (S = E - 1; S >= 0; S -= 1)
                          if (C[S].ty === 'sh')
                            if (C[S].ks.k.i) C[S].ks.k.c = C[S].closed;
                            else
                              for (L = C[S].ks.k.length, A = 0; A < L; A += 1)
                                C[S].ks.k[A].s &&
                                  (C[S].ks.k[A].s[0].c = C[S].closed),
                                  C[S].ks.k[A].e &&
                                    (C[S].ks.k[A].e[0].c = C[S].closed);
                          else C[S].ty === 'gr' && V(C[S].it);
                      }
                      function R(C) {
                        var S,
                          E,
                          A = C.length,
                          L,
                          I,
                          B,
                          H;
                        for (E = 0; E < A; E += 1) {
                          if (((S = C[E]), S.hasMask)) {
                            var G = S.masksProperties;
                            for (I = G.length, L = 0; L < I; L += 1)
                              if (G[L].pt.k.i) G[L].pt.k.c = G[L].cl;
                              else
                                for (H = G[L].pt.k.length, B = 0; B < H; B += 1)
                                  G[L].pt.k[B].s &&
                                    (G[L].pt.k[B].s[0].c = G[L].cl),
                                    G[L].pt.k[B].e &&
                                      (G[L].pt.k[B].e[0].c = G[L].cl);
                          }
                          S.ty === 4 && V(S.shapes);
                        }
                      }
                      return function (C) {
                        if (f(M, C.v) && (R(C.layers), C.assets)) {
                          var S,
                            E = C.assets.length;
                          for (S = 0; S < E; S += 1)
                            C.assets[S].layers && R(C.assets[S].layers);
                        }
                      };
                    })();
                  function D(M) {
                    M.__complete ||
                      (P(M),
                      y(M),
                      k(M),
                      w(M),
                      F(M),
                      b(M.layers, M.assets),
                      (M.__complete = !0));
                  }
                  function T(M) {
                    M.t.a.length === 0 &&
                      !('m' in M.t.p) &&
                      (M.singleShape = !0);
                  }
                  var z = {};
                  return (
                    (z.completeData = D),
                    (z.checkColors = P),
                    (z.checkChars = k),
                    (z.checkPathProperties = w),
                    (z.checkShapes = F),
                    (z.completeLayers = b),
                    z
                  );
                }
                if (
                  (n.dataManager || (n.dataManager = p()),
                  n.assetLoader ||
                    (n.assetLoader = (function () {
                      function b(a) {
                        var h = a.getResponseHeader('content-type');
                        return (h &&
                          a.responseType === 'json' &&
                          h.indexOf('json') !== -1) ||
                          (a.response && typeof a.response == 'object')
                          ? a.response
                          : a.response && typeof a.response == 'string'
                          ? JSON.parse(a.response)
                          : a.responseText
                          ? JSON.parse(a.responseText)
                          : null;
                      }
                      function l(a, h, f, y) {
                        var k,
                          w = new XMLHttpRequest();
                        try {
                          w.responseType = 'json';
                        } catch {}
                        w.onreadystatechange = function () {
                          if (w.readyState === 4)
                            if (w.status === 200) (k = b(w)), f(k);
                            else
                              try {
                                (k = b(w)), f(k);
                              } catch (P) {
                                y && y(P);
                              }
                        };
                        try {
                          w.open('GET', a, !0);
                        } catch {
                          w.open('GET', h + '/' + a, !0);
                        }
                        w.send();
                      }
                      return { load: l };
                    })()),
                  v.data.type === 'loadAnimation')
                )
                  n.assetLoader.load(
                    v.data.path,
                    v.data.fullPath,
                    function (b) {
                      n.dataManager.completeData(b),
                        n.postMessage({
                          id: v.data.id,
                          payload: b,
                          status: 'success',
                        });
                    },
                    function () {
                      n.postMessage({ id: v.data.id, status: 'error' });
                    }
                  );
                else if (v.data.type === 'complete') {
                  var g = v.data.animation;
                  n.dataManager.completeData(g),
                    n.postMessage({
                      id: v.data.id,
                      payload: g,
                      status: 'success',
                    });
                } else
                  v.data.type === 'loadData' &&
                    n.assetLoader.load(
                      v.data.path,
                      v.data.fullPath,
                      function (b) {
                        n.postMessage({
                          id: v.data.id,
                          payload: b,
                          status: 'success',
                        });
                      },
                      function () {
                        n.postMessage({ id: v.data.id, status: 'error' });
                      }
                    );
              })),
              (i.onmessage = function (m) {
                var v = m.data,
                  p = v.id,
                  g = t[p];
                (t[p] = null),
                  v.status === 'success'
                    ? g.onComplete(v.payload)
                    : g.onError && g.onError();
              }));
          }
          function u(m, v) {
            e += 1;
            var p = 'processId_' + e;
            return (t[p] = { onComplete: m, onError: v }), p;
          }
          function d(m, v, p) {
            c();
            var g = u(v, p);
            i.postMessage({
              type: 'loadAnimation',
              path: m,
              fullPath: window.location.origin + window.location.pathname,
              id: g,
            });
          }
          function x(m, v, p) {
            c();
            var g = u(v, p);
            i.postMessage({
              type: 'loadData',
              path: m,
              fullPath: window.location.origin + window.location.pathname,
              id: g,
            });
          }
          function _(m, v, p) {
            c();
            var g = u(v, p);
            i.postMessage({ type: 'complete', animation: m, id: g });
          }
          return { loadAnimation: d, loadData: x, completeAnimation: _ };
        })();
      function getFontProperties(e) {
        for (
          var t = e.fStyle ? e.fStyle.split(' ') : [],
            r = 'normal',
            i = 'normal',
            s = t.length,
            n,
            o = 0;
          o < s;
          o += 1
        )
          switch (((n = t[o].toLowerCase()), n)) {
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
              break;
          }
        return { style: i, weight: e.fWeight || r };
      }
      var FontManager = (function () {
          var e = 5e3,
            t = { w: 0, size: 0, shapes: [] },
            r = [];
          r = r.concat([
            2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368,
            2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379,
            2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403,
          ]);
          var i = ['d83cdffb', 'd83cdffc', 'd83cdffd', 'd83cdffe', 'd83cdfff'],
            s = [65039, 8205];
          function n(f) {
            var y = f.split(','),
              k,
              w = y.length,
              P = [];
            for (k = 0; k < w; k += 1)
              y[k] !== 'sans-serif' && y[k] !== 'monospace' && P.push(y[k]);
            return P.join(',');
          }
          function o(f, y) {
            var k = createTag('span');
            k.setAttribute('aria-hidden', !0), (k.style.fontFamily = y);
            var w = createTag('span');
            (w.innerText = 'giItT1WQy@!-/#'),
              (k.style.position = 'absolute'),
              (k.style.left = '-10000px'),
              (k.style.top = '-10000px'),
              (k.style.fontSize = '300px'),
              (k.style.fontVariant = 'normal'),
              (k.style.fontStyle = 'normal'),
              (k.style.fontWeight = 'normal'),
              (k.style.letterSpacing = '0'),
              k.appendChild(w),
              document.body.appendChild(k);
            var P = w.offsetWidth;
            return (
              (w.style.fontFamily = n(f) + ', ' + y),
              { node: w, w: P, parent: k }
            );
          }
          function c() {
            var f,
              y = this.fonts.length,
              k,
              w,
              P = y;
            for (f = 0; f < y; f += 1)
              this.fonts[f].loaded
                ? (P -= 1)
                : this.fonts[f].fOrigin === 'n' || this.fonts[f].origin === 0
                ? (this.fonts[f].loaded = !0)
                : ((k = this.fonts[f].monoCase.node),
                  (w = this.fonts[f].monoCase.w),
                  k.offsetWidth !== w
                    ? ((P -= 1), (this.fonts[f].loaded = !0))
                    : ((k = this.fonts[f].sansCase.node),
                      (w = this.fonts[f].sansCase.w),
                      k.offsetWidth !== w &&
                        ((P -= 1), (this.fonts[f].loaded = !0))),
                  this.fonts[f].loaded &&
                    (this.fonts[f].sansCase.parent.parentNode.removeChild(
                      this.fonts[f].sansCase.parent
                    ),
                    this.fonts[f].monoCase.parent.parentNode.removeChild(
                      this.fonts[f].monoCase.parent
                    )));
            P !== 0 && Date.now() - this.initTime < e
              ? setTimeout(this.checkLoadedFontsBinded, 20)
              : setTimeout(this.setIsLoadedBinded, 10);
          }
          function u(f, y) {
            var k = createNS('text');
            k.style.fontSize = '100px';
            var w = getFontProperties(y);
            k.setAttribute('font-family', y.fFamily),
              k.setAttribute('font-style', w.style),
              k.setAttribute('font-weight', w.weight),
              (k.textContent = '1'),
              y.fClass
                ? ((k.style.fontFamily = 'inherit'),
                  k.setAttribute('class', y.fClass))
                : (k.style.fontFamily = y.fFamily),
              f.appendChild(k);
            var P = createTag('canvas').getContext('2d');
            return (
              (P.font = y.fWeight + ' ' + y.fStyle + ' 100px ' + y.fFamily), k
            );
          }
          function d(f, y) {
            if (!f) {
              this.isLoaded = !0;
              return;
            }
            if (this.chars) {
              (this.isLoaded = !0), (this.fonts = f.list);
              return;
            }
            var k = f.list,
              w,
              P = k.length,
              F = P;
            for (w = 0; w < P; w += 1) {
              var D = !0,
                T,
                z;
              if (
                ((k[w].loaded = !1),
                (k[w].monoCase = o(k[w].fFamily, 'monospace')),
                (k[w].sansCase = o(k[w].fFamily, 'sans-serif')),
                !k[w].fPath)
              )
                (k[w].loaded = !0), (F -= 1);
              else if (k[w].fOrigin === 'p' || k[w].origin === 3) {
                if (
                  ((T = document.querySelectorAll(
                    'style[f-forigin="p"][f-family="' +
                      k[w].fFamily +
                      '"], style[f-origin="3"][f-family="' +
                      k[w].fFamily +
                      '"]'
                  )),
                  T.length > 0 && (D = !1),
                  D)
                ) {
                  var M = createTag('style');
                  M.setAttribute('f-forigin', k[w].fOrigin),
                    M.setAttribute('f-origin', k[w].origin),
                    M.setAttribute('f-family', k[w].fFamily),
                    (M.type = 'text/css'),
                    (M.innerText =
                      '@font-face {font-family: ' +
                      k[w].fFamily +
                      "; font-style: normal; src: url('" +
                      k[w].fPath +
                      "');}"),
                    y.appendChild(M);
                }
              } else if (k[w].fOrigin === 'g' || k[w].origin === 1) {
                for (
                  T = document.querySelectorAll(
                    'link[f-forigin="g"], link[f-origin="1"]'
                  ),
                    z = 0;
                  z < T.length;
                  z += 1
                )
                  T[z].href.indexOf(k[w].fPath) !== -1 && (D = !1);
                if (D) {
                  var V = createTag('link');
                  V.setAttribute('f-forigin', k[w].fOrigin),
                    V.setAttribute('f-origin', k[w].origin),
                    (V.type = 'text/css'),
                    (V.rel = 'stylesheet'),
                    (V.href = k[w].fPath),
                    document.body.appendChild(V);
                }
              } else if (k[w].fOrigin === 't' || k[w].origin === 2) {
                for (
                  T = document.querySelectorAll(
                    'script[f-forigin="t"], script[f-origin="2"]'
                  ),
                    z = 0;
                  z < T.length;
                  z += 1
                )
                  k[w].fPath === T[z].src && (D = !1);
                if (D) {
                  var R = createTag('link');
                  R.setAttribute('f-forigin', k[w].fOrigin),
                    R.setAttribute('f-origin', k[w].origin),
                    R.setAttribute('rel', 'stylesheet'),
                    R.setAttribute('href', k[w].fPath),
                    y.appendChild(R);
                }
              }
              (k[w].helper = u(y, k[w])),
                (k[w].cache = {}),
                this.fonts.push(k[w]);
            }
            F === 0
              ? (this.isLoaded = !0)
              : setTimeout(this.checkLoadedFonts.bind(this), 100);
          }
          function x(f) {
            if (!!f) {
              this.chars || (this.chars = []);
              var y,
                k = f.length,
                w,
                P = this.chars.length,
                F;
              for (y = 0; y < k; y += 1) {
                for (w = 0, F = !1; w < P; )
                  this.chars[w].style === f[y].style &&
                    this.chars[w].fFamily === f[y].fFamily &&
                    this.chars[w].ch === f[y].ch &&
                    (F = !0),
                    (w += 1);
                F || (this.chars.push(f[y]), (P += 1));
              }
            }
          }
          function _(f, y, k) {
            for (var w = 0, P = this.chars.length; w < P; ) {
              if (
                this.chars[w].ch === f &&
                this.chars[w].style === y &&
                this.chars[w].fFamily === k
              )
                return this.chars[w];
              w += 1;
            }
            return (
              ((typeof f == 'string' && f.charCodeAt(0) !== 13) || !f) &&
                console &&
                console.warn &&
                !this._warned &&
                ((this._warned = !0),
                console.warn(
                  'Missing character from exported characters list: ',
                  f,
                  y,
                  k
                )),
              t
            );
          }
          function m(f, y, k) {
            var w = this.getFontByName(y),
              P = f.charCodeAt(0);
            if (!w.cache[P + 1]) {
              var F = w.helper;
              if (f === ' ') {
                F.textContent = '|' + f + '|';
                var D = F.getComputedTextLength();
                F.textContent = '||';
                var T = F.getComputedTextLength();
                w.cache[P + 1] = (D - T) / 100;
              } else
                (F.textContent = f),
                  (w.cache[P + 1] = F.getComputedTextLength() / 100);
            }
            return w.cache[P + 1] * k;
          }
          function v(f) {
            for (var y = 0, k = this.fonts.length; y < k; ) {
              if (this.fonts[y].fName === f) return this.fonts[y];
              y += 1;
            }
            return this.fonts[0];
          }
          function p(f, y) {
            var k = f.toString(16) + y.toString(16);
            return i.indexOf(k) !== -1;
          }
          function g(f, y) {
            return y ? f === s[0] && y === s[1] : f === s[1];
          }
          function b(f) {
            return r.indexOf(f) !== -1;
          }
          function l() {
            this.isLoaded = !0;
          }
          var a = function () {
            (this.fonts = []),
              (this.chars = null),
              (this.typekitLoaded = 0),
              (this.isLoaded = !1),
              (this._warned = !1),
              (this.initTime = Date.now()),
              (this.setIsLoadedBinded = this.setIsLoaded.bind(this)),
              (this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this));
          };
          (a.isModifier = p),
            (a.isZeroWidthJoiner = g),
            (a.isCombinedCharacter = b);
          var h = {
            addChars: x,
            addFonts: d,
            getCharData: _,
            getFontByName: v,
            measureText: m,
            checkLoadedFonts: c,
            setIsLoaded: l,
          };
          return (a.prototype = h), a;
        })(),
        PropertyFactory = (function () {
          var e = initialDefaultFrame,
            t = Math.abs;
          function r(b, l) {
            var a = this.offsetTime,
              h;
            this.propType === 'multidimensional' &&
              (h = createTypedArray('float32', this.pv.length));
            for (
              var f = l.lastIndex,
                y = f,
                k = this.keyframes.length - 1,
                w = !0,
                P,
                F,
                D;
              w;

            ) {
              if (
                ((P = this.keyframes[y]),
                (F = this.keyframes[y + 1]),
                y === k - 1 && b >= F.t - a)
              ) {
                P.h && (P = F), (f = 0);
                break;
              }
              if (F.t - a > b) {
                f = y;
                break;
              }
              y < k - 1 ? (y += 1) : ((f = 0), (w = !1));
            }
            D = this.keyframesMetadata[y] || {};
            var T,
              z,
              M,
              V,
              R,
              C,
              S = F.t - a,
              E = P.t - a,
              A;
            if (P.to) {
              D.bezierData ||
                (D.bezierData = bez.buildBezierData(
                  P.s,
                  F.s || P.e,
                  P.to,
                  P.ti
                ));
              var L = D.bezierData;
              if (b >= S || b < E) {
                var I = b >= S ? L.points.length - 1 : 0;
                for (z = L.points[I].point.length, T = 0; T < z; T += 1)
                  h[T] = L.points[I].point[T];
              } else {
                D.__fnct
                  ? (C = D.__fnct)
                  : ((C = BezierFactory.getBezierEasing(
                      P.o.x,
                      P.o.y,
                      P.i.x,
                      P.i.y,
                      P.n
                    ).get),
                    (D.__fnct = C)),
                  (M = C((b - E) / (S - E)));
                var B = L.segmentLength * M,
                  H,
                  G =
                    l.lastFrame < b && l._lastKeyframeIndex === y
                      ? l._lastAddedLength
                      : 0;
                for (
                  R =
                    l.lastFrame < b && l._lastKeyframeIndex === y
                      ? l._lastPoint
                      : 0,
                    w = !0,
                    V = L.points.length;
                  w;

                ) {
                  if (
                    ((G += L.points[R].partialLength),
                    B === 0 || M === 0 || R === L.points.length - 1)
                  ) {
                    for (z = L.points[R].point.length, T = 0; T < z; T += 1)
                      h[T] = L.points[R].point[T];
                    break;
                  } else if (B >= G && B < G + L.points[R + 1].partialLength) {
                    for (
                      H = (B - G) / L.points[R + 1].partialLength,
                        z = L.points[R].point.length,
                        T = 0;
                      T < z;
                      T += 1
                    )
                      h[T] =
                        L.points[R].point[T] +
                        (L.points[R + 1].point[T] - L.points[R].point[T]) * H;
                    break;
                  }
                  R < V - 1 ? (R += 1) : (w = !1);
                }
                (l._lastPoint = R),
                  (l._lastAddedLength = G - L.points[R].partialLength),
                  (l._lastKeyframeIndex = y);
              }
            } else {
              var J, Z, Q, ee, te;
              if (((k = P.s.length), (A = F.s || P.e), this.sh && P.h !== 1))
                if (b >= S) (h[0] = A[0]), (h[1] = A[1]), (h[2] = A[2]);
                else if (b <= E)
                  (h[0] = P.s[0]), (h[1] = P.s[1]), (h[2] = P.s[2]);
                else {
                  var re = n(P.s),
                    K = n(A),
                    se = (b - E) / (S - E);
                  s(h, i(re, K, se));
                }
              else
                for (y = 0; y < k; y += 1)
                  P.h !== 1 &&
                    (b >= S
                      ? (M = 1)
                      : b < E
                      ? (M = 0)
                      : (P.o.x.constructor === Array
                          ? (D.__fnct || (D.__fnct = []),
                            D.__fnct[y]
                              ? (C = D.__fnct[y])
                              : ((J =
                                  P.o.x[y] === void 0 ? P.o.x[0] : P.o.x[y]),
                                (Z = P.o.y[y] === void 0 ? P.o.y[0] : P.o.y[y]),
                                (Q = P.i.x[y] === void 0 ? P.i.x[0] : P.i.x[y]),
                                (ee =
                                  P.i.y[y] === void 0 ? P.i.y[0] : P.i.y[y]),
                                (C = BezierFactory.getBezierEasing(
                                  J,
                                  Z,
                                  Q,
                                  ee
                                ).get),
                                (D.__fnct[y] = C)))
                          : D.__fnct
                          ? (C = D.__fnct)
                          : ((J = P.o.x),
                            (Z = P.o.y),
                            (Q = P.i.x),
                            (ee = P.i.y),
                            (C = BezierFactory.getBezierEasing(
                              J,
                              Z,
                              Q,
                              ee
                            ).get),
                            (P.keyframeMetadata = C)),
                        (M = C((b - E) / (S - E))))),
                    (A = F.s || P.e),
                    (te = P.h === 1 ? P.s[y] : P.s[y] + (A[y] - P.s[y]) * M),
                    this.propType === 'multidimensional'
                      ? (h[y] = te)
                      : (h = te);
            }
            return (l.lastIndex = f), h;
          }
          function i(b, l, a) {
            var h = [],
              f = b[0],
              y = b[1],
              k = b[2],
              w = b[3],
              P = l[0],
              F = l[1],
              D = l[2],
              T = l[3],
              z,
              M,
              V,
              R,
              C;
            return (
              (M = f * P + y * F + k * D + w * T),
              M < 0 && ((M = -M), (P = -P), (F = -F), (D = -D), (T = -T)),
              1 - M > 1e-6
                ? ((z = Math.acos(M)),
                  (V = Math.sin(z)),
                  (R = Math.sin((1 - a) * z) / V),
                  (C = Math.sin(a * z) / V))
                : ((R = 1 - a), (C = a)),
              (h[0] = R * f + C * P),
              (h[1] = R * y + C * F),
              (h[2] = R * k + C * D),
              (h[3] = R * w + C * T),
              h
            );
          }
          function s(b, l) {
            var a = l[0],
              h = l[1],
              f = l[2],
              y = l[3],
              k = Math.atan2(2 * h * y - 2 * a * f, 1 - 2 * h * h - 2 * f * f),
              w = Math.asin(2 * a * h + 2 * f * y),
              P = Math.atan2(2 * a * y - 2 * h * f, 1 - 2 * a * a - 2 * f * f);
            (b[0] = k / degToRads),
              (b[1] = w / degToRads),
              (b[2] = P / degToRads);
          }
          function n(b) {
            var l = b[0] * degToRads,
              a = b[1] * degToRads,
              h = b[2] * degToRads,
              f = Math.cos(l / 2),
              y = Math.cos(a / 2),
              k = Math.cos(h / 2),
              w = Math.sin(l / 2),
              P = Math.sin(a / 2),
              F = Math.sin(h / 2),
              D = f * y * k - w * P * F,
              T = w * P * k + f * y * F,
              z = w * y * k + f * P * F,
              M = f * P * k - w * y * F;
            return [T, z, M, D];
          }
          function o() {
            var b = this.comp.renderedFrame - this.offsetTime,
              l = this.keyframes[0].t - this.offsetTime,
              a = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (
              !(
                b === this._caching.lastFrame ||
                (this._caching.lastFrame !== e &&
                  ((this._caching.lastFrame >= a && b >= a) ||
                    (this._caching.lastFrame < l && b < l)))
              )
            ) {
              this._caching.lastFrame >= b &&
                ((this._caching._lastKeyframeIndex = -1),
                (this._caching.lastIndex = 0));
              var h = this.interpolateValue(b, this._caching);
              this.pv = h;
            }
            return (this._caching.lastFrame = b), this.pv;
          }
          function c(b) {
            var l;
            if (this.propType === 'unidimensional')
              (l = b * this.mult),
                t(this.v - l) > 1e-5 && ((this.v = l), (this._mdf = !0));
            else
              for (var a = 0, h = this.v.length; a < h; )
                (l = b[a] * this.mult),
                  t(this.v[a] - l) > 1e-5 &&
                    ((this.v[a] = l), (this._mdf = !0)),
                  (a += 1);
          }
          function u() {
            if (
              !(
                this.elem.globalData.frameId === this.frameId ||
                !this.effectsSequence.length
              )
            ) {
              if (this.lock) {
                this.setVValue(this.pv);
                return;
              }
              (this.lock = !0), (this._mdf = this._isFirstFrame);
              var b,
                l = this.effectsSequence.length,
                a = this.kf ? this.pv : this.data.k;
              for (b = 0; b < l; b += 1) a = this.effectsSequence[b](a);
              this.setVValue(a),
                (this._isFirstFrame = !1),
                (this.lock = !1),
                (this.frameId = this.elem.globalData.frameId);
            }
          }
          function d(b) {
            this.effectsSequence.push(b),
              this.container.addDynamicProperty(this);
          }
          function x(b, l, a, h) {
            (this.propType = 'unidimensional'),
              (this.mult = a || 1),
              (this.data = l),
              (this.v = a ? l.k * a : l.k),
              (this.pv = l.k),
              (this._mdf = !1),
              (this.elem = b),
              (this.container = h),
              (this.comp = b.comp),
              (this.k = !1),
              (this.kf = !1),
              (this.vel = 0),
              (this.effectsSequence = []),
              (this._isFirstFrame = !0),
              (this.getValue = u),
              (this.setVValue = c),
              (this.addEffect = d);
          }
          function _(b, l, a, h) {
            (this.propType = 'multidimensional'),
              (this.mult = a || 1),
              (this.data = l),
              (this._mdf = !1),
              (this.elem = b),
              (this.container = h),
              (this.comp = b.comp),
              (this.k = !1),
              (this.kf = !1),
              (this.frameId = -1);
            var f,
              y = l.k.length;
            for (
              this.v = createTypedArray('float32', y),
                this.pv = createTypedArray('float32', y),
                this.vel = createTypedArray('float32', y),
                f = 0;
              f < y;
              f += 1
            )
              (this.v[f] = l.k[f] * this.mult), (this.pv[f] = l.k[f]);
            (this._isFirstFrame = !0),
              (this.effectsSequence = []),
              (this.getValue = u),
              (this.setVValue = c),
              (this.addEffect = d);
          }
          function m(b, l, a, h) {
            (this.propType = 'unidimensional'),
              (this.keyframes = l.k),
              (this.keyframesMetadata = []),
              (this.offsetTime = b.data.st),
              (this.frameId = -1),
              (this._caching = {
                lastFrame: e,
                lastIndex: 0,
                value: 0,
                _lastKeyframeIndex: -1,
              }),
              (this.k = !0),
              (this.kf = !0),
              (this.data = l),
              (this.mult = a || 1),
              (this.elem = b),
              (this.container = h),
              (this.comp = b.comp),
              (this.v = e),
              (this.pv = e),
              (this._isFirstFrame = !0),
              (this.getValue = u),
              (this.setVValue = c),
              (this.interpolateValue = r),
              (this.effectsSequence = [o.bind(this)]),
              (this.addEffect = d);
          }
          function v(b, l, a, h) {
            this.propType = 'multidimensional';
            var f,
              y = l.k.length,
              k,
              w,
              P,
              F;
            for (f = 0; f < y - 1; f += 1)
              l.k[f].to &&
                l.k[f].s &&
                l.k[f + 1] &&
                l.k[f + 1].s &&
                ((k = l.k[f].s),
                (w = l.k[f + 1].s),
                (P = l.k[f].to),
                (F = l.k[f].ti),
                ((k.length === 2 &&
                  !(k[0] === w[0] && k[1] === w[1]) &&
                  bez.pointOnLine2D(
                    k[0],
                    k[1],
                    w[0],
                    w[1],
                    k[0] + P[0],
                    k[1] + P[1]
                  ) &&
                  bez.pointOnLine2D(
                    k[0],
                    k[1],
                    w[0],
                    w[1],
                    w[0] + F[0],
                    w[1] + F[1]
                  )) ||
                  (k.length === 3 &&
                    !(k[0] === w[0] && k[1] === w[1] && k[2] === w[2]) &&
                    bez.pointOnLine3D(
                      k[0],
                      k[1],
                      k[2],
                      w[0],
                      w[1],
                      w[2],
                      k[0] + P[0],
                      k[1] + P[1],
                      k[2] + P[2]
                    ) &&
                    bez.pointOnLine3D(
                      k[0],
                      k[1],
                      k[2],
                      w[0],
                      w[1],
                      w[2],
                      w[0] + F[0],
                      w[1] + F[1],
                      w[2] + F[2]
                    ))) &&
                  ((l.k[f].to = null), (l.k[f].ti = null)),
                k[0] === w[0] &&
                  k[1] === w[1] &&
                  P[0] === 0 &&
                  P[1] === 0 &&
                  F[0] === 0 &&
                  F[1] === 0 &&
                  (k.length === 2 ||
                    (k[2] === w[2] && P[2] === 0 && F[2] === 0)) &&
                  ((l.k[f].to = null), (l.k[f].ti = null)));
            (this.effectsSequence = [o.bind(this)]),
              (this.data = l),
              (this.keyframes = l.k),
              (this.keyframesMetadata = []),
              (this.offsetTime = b.data.st),
              (this.k = !0),
              (this.kf = !0),
              (this._isFirstFrame = !0),
              (this.mult = a || 1),
              (this.elem = b),
              (this.container = h),
              (this.comp = b.comp),
              (this.getValue = u),
              (this.setVValue = c),
              (this.interpolateValue = r),
              (this.frameId = -1);
            var D = l.k[0].s.length;
            for (
              this.v = createTypedArray('float32', D),
                this.pv = createTypedArray('float32', D),
                f = 0;
              f < D;
              f += 1
            )
              (this.v[f] = e), (this.pv[f] = e);
            (this._caching = {
              lastFrame: e,
              lastIndex: 0,
              value: createTypedArray('float32', D),
            }),
              (this.addEffect = d);
          }
          function p(b, l, a, h, f) {
            var y;
            if (!l.k.length) y = new x(b, l, h, f);
            else if (typeof l.k[0] == 'number') y = new _(b, l, h, f);
            else
              switch (a) {
                case 0:
                  y = new m(b, l, h, f);
                  break;
                case 1:
                  y = new v(b, l, h, f);
                  break;
              }
            return y.effectsSequence.length && f.addDynamicProperty(y), y;
          }
          var g = { getProp: p };
          return g;
        })(),
        TransformPropertyFactory = (function () {
          var e = [0, 0];
          function t(u) {
            var d = this._mdf;
            this.iterateDynamicProperties(),
              (this._mdf = this._mdf || d),
              this.a && u.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
              this.s && u.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
              this.sk && u.skewFromAxis(-this.sk.v, this.sa.v),
              this.r
                ? u.rotate(-this.r.v)
                : u
                    .rotateZ(-this.rz.v)
                    .rotateY(this.ry.v)
                    .rotateX(this.rx.v)
                    .rotateZ(-this.or.v[2])
                    .rotateY(this.or.v[1])
                    .rotateX(this.or.v[0]),
              this.data.p.s
                ? this.data.p.z
                  ? u.translate(this.px.v, this.py.v, -this.pz.v)
                  : u.translate(this.px.v, this.py.v, 0)
                : u.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
          }
          function r(u) {
            if (this.elem.globalData.frameId !== this.frameId) {
              if (
                (this._isDirty &&
                  (this.precalculateMatrix(), (this._isDirty = !1)),
                this.iterateDynamicProperties(),
                this._mdf || u)
              ) {
                var d;
                if (
                  (this.v.cloneFromProps(this.pre.props),
                  this.appliedTransformations < 1 &&
                    this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
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
                  var x, _;
                  if (
                    ((d = this.elem.globalData.frameRate),
                    this.p && this.p.keyframes && this.p.getValueAtTime)
                  )
                    this.p._caching.lastFrame + this.p.offsetTime <=
                    this.p.keyframes[0].t
                      ? ((x = this.p.getValueAtTime(
                          (this.p.keyframes[0].t + 0.01) / d,
                          0
                        )),
                        (_ = this.p.getValueAtTime(
                          this.p.keyframes[0].t / d,
                          0
                        )))
                      : this.p._caching.lastFrame + this.p.offsetTime >=
                        this.p.keyframes[this.p.keyframes.length - 1].t
                      ? ((x = this.p.getValueAtTime(
                          this.p.keyframes[this.p.keyframes.length - 1].t / d,
                          0
                        )),
                        (_ = this.p.getValueAtTime(
                          (this.p.keyframes[this.p.keyframes.length - 1].t -
                            0.05) /
                            d,
                          0
                        )))
                      : ((x = this.p.pv),
                        (_ = this.p.getValueAtTime(
                          (this.p._caching.lastFrame +
                            this.p.offsetTime -
                            0.01) /
                            d,
                          this.p.offsetTime
                        )));
                  else if (
                    this.px &&
                    this.px.keyframes &&
                    this.py.keyframes &&
                    this.px.getValueAtTime &&
                    this.py.getValueAtTime
                  ) {
                    (x = []), (_ = []);
                    var m = this.px,
                      v = this.py;
                    m._caching.lastFrame + m.offsetTime <= m.keyframes[0].t
                      ? ((x[0] = m.getValueAtTime(
                          (m.keyframes[0].t + 0.01) / d,
                          0
                        )),
                        (x[1] = v.getValueAtTime(
                          (v.keyframes[0].t + 0.01) / d,
                          0
                        )),
                        (_[0] = m.getValueAtTime(m.keyframes[0].t / d, 0)),
                        (_[1] = v.getValueAtTime(v.keyframes[0].t / d, 0)))
                      : m._caching.lastFrame + m.offsetTime >=
                        m.keyframes[m.keyframes.length - 1].t
                      ? ((x[0] = m.getValueAtTime(
                          m.keyframes[m.keyframes.length - 1].t / d,
                          0
                        )),
                        (x[1] = v.getValueAtTime(
                          v.keyframes[v.keyframes.length - 1].t / d,
                          0
                        )),
                        (_[0] = m.getValueAtTime(
                          (m.keyframes[m.keyframes.length - 1].t - 0.01) / d,
                          0
                        )),
                        (_[1] = v.getValueAtTime(
                          (v.keyframes[v.keyframes.length - 1].t - 0.01) / d,
                          0
                        )))
                      : ((x = [m.pv, v.pv]),
                        (_[0] = m.getValueAtTime(
                          (m._caching.lastFrame + m.offsetTime - 0.01) / d,
                          m.offsetTime
                        )),
                        (_[1] = v.getValueAtTime(
                          (v._caching.lastFrame + v.offsetTime - 0.01) / d,
                          v.offsetTime
                        )));
                  } else (_ = e), (x = _);
                  this.v.rotate(-Math.atan2(x[1] - _[1], x[0] - _[0]));
                }
                this.data.p && this.data.p.s
                  ? this.data.p.z
                    ? this.v.translate(this.px.v, this.py.v, -this.pz.v)
                    : this.v.translate(this.px.v, this.py.v, 0)
                  : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
              }
              this.frameId = this.elem.globalData.frameId;
            }
          }
          function i() {
            if (!this.a.k)
              this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                (this.appliedTransformations = 1);
            else return;
            if (!this.s.effectsSequence.length)
              this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                (this.appliedTransformations = 2);
            else return;
            if (this.sk)
              if (
                !this.sk.effectsSequence.length &&
                !this.sa.effectsSequence.length
              )
                this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                  (this.appliedTransformations = 3);
              else return;
            this.r
              ? this.r.effectsSequence.length ||
                (this.pre.rotate(-this.r.v), (this.appliedTransformations = 4))
              : !this.rz.effectsSequence.length &&
                !this.ry.effectsSequence.length &&
                !this.rx.effectsSequence.length &&
                !this.or.effectsSequence.length &&
                (this.pre
                  .rotateZ(-this.rz.v)
                  .rotateY(this.ry.v)
                  .rotateX(this.rx.v)
                  .rotateZ(-this.or.v[2])
                  .rotateY(this.or.v[1])
                  .rotateX(this.or.v[0]),
                (this.appliedTransformations = 4));
          }
          function s() {}
          function n(u) {
            this._addDynamicProperty(u),
              this.elem.addDynamicProperty(u),
              (this._isDirty = !0);
          }
          function o(u, d, x) {
            if (
              ((this.elem = u),
              (this.frameId = -1),
              (this.propType = 'transform'),
              (this.data = d),
              (this.v = new Matrix()),
              (this.pre = new Matrix()),
              (this.appliedTransformations = 0),
              this.initDynamicPropertyContainer(x || u),
              d.p && d.p.s
                ? ((this.px = PropertyFactory.getProp(u, d.p.x, 0, 0, this)),
                  (this.py = PropertyFactory.getProp(u, d.p.y, 0, 0, this)),
                  d.p.z &&
                    (this.pz = PropertyFactory.getProp(u, d.p.z, 0, 0, this)))
                : (this.p = PropertyFactory.getProp(
                    u,
                    d.p || { k: [0, 0, 0] },
                    1,
                    0,
                    this
                  )),
              d.rx)
            ) {
              if (
                ((this.rx = PropertyFactory.getProp(
                  u,
                  d.rx,
                  0,
                  degToRads,
                  this
                )),
                (this.ry = PropertyFactory.getProp(
                  u,
                  d.ry,
                  0,
                  degToRads,
                  this
                )),
                (this.rz = PropertyFactory.getProp(
                  u,
                  d.rz,
                  0,
                  degToRads,
                  this
                )),
                d.or.k[0].ti)
              ) {
                var _,
                  m = d.or.k.length;
                for (_ = 0; _ < m; _ += 1)
                  (d.or.k[_].to = null), (d.or.k[_].ti = null);
              }
              (this.or = PropertyFactory.getProp(u, d.or, 1, degToRads, this)),
                (this.or.sh = !0);
            } else
              this.r = PropertyFactory.getProp(
                u,
                d.r || { k: 0 },
                0,
                degToRads,
                this
              );
            d.sk &&
              ((this.sk = PropertyFactory.getProp(u, d.sk, 0, degToRads, this)),
              (this.sa = PropertyFactory.getProp(u, d.sa, 0, degToRads, this))),
              (this.a = PropertyFactory.getProp(
                u,
                d.a || { k: [0, 0, 0] },
                1,
                0,
                this
              )),
              (this.s = PropertyFactory.getProp(
                u,
                d.s || { k: [100, 100, 100] },
                1,
                0.01,
                this
              )),
              d.o
                ? (this.o = PropertyFactory.getProp(u, d.o, 0, 0.01, u))
                : (this.o = { _mdf: !1, v: 1 }),
              (this._isDirty = !0),
              this.dynamicProperties.length || this.getValue(!0);
          }
          (o.prototype = {
            applyToMatrix: t,
            getValue: r,
            precalculateMatrix: i,
            autoOrient: s,
          }),
            extendPrototype([DynamicPropertyContainer], o),
            (o.prototype.addDynamicProperty = n),
            (o.prototype._addDynamicProperty =
              DynamicPropertyContainer.prototype.addDynamicProperty);
          function c(u, d, x) {
            return new o(u, d, x);
          }
          return { getTransformProperty: c };
        })();
      function ShapePath() {
        (this.c = !1),
          (this._length = 0),
          (this._maxLength = 8),
          (this.v = createSizedArray(this._maxLength)),
          (this.o = createSizedArray(this._maxLength)),
          (this.i = createSizedArray(this._maxLength));
      }
      (ShapePath.prototype.setPathData = function (e, t) {
        (this.c = e), this.setLength(t);
        for (var r = 0; r < t; )
          (this.v[r] = pointPool.newElement()),
            (this.o[r] = pointPool.newElement()),
            (this.i[r] = pointPool.newElement()),
            (r += 1);
      }),
        (ShapePath.prototype.setLength = function (e) {
          for (; this._maxLength < e; ) this.doubleArrayLength();
          this._length = e;
        }),
        (ShapePath.prototype.doubleArrayLength = function () {
          (this.v = this.v.concat(createSizedArray(this._maxLength))),
            (this.i = this.i.concat(createSizedArray(this._maxLength))),
            (this.o = this.o.concat(createSizedArray(this._maxLength))),
            (this._maxLength *= 2);
        }),
        (ShapePath.prototype.setXYAt = function (e, t, r, i, s) {
          var n;
          switch (
            ((this._length = Math.max(this._length, i + 1)),
            this._length >= this._maxLength && this.doubleArrayLength(),
            r)
          ) {
            case 'v':
              n = this.v;
              break;
            case 'i':
              n = this.i;
              break;
            case 'o':
              n = this.o;
              break;
            default:
              n = [];
              break;
          }
          (!n[i] || (n[i] && !s)) && (n[i] = pointPool.newElement()),
            (n[i][0] = e),
            (n[i][1] = t);
        }),
        (ShapePath.prototype.setTripleAt = function (e, t, r, i, s, n, o, c) {
          this.setXYAt(e, t, 'v', o, c),
            this.setXYAt(r, i, 'o', o, c),
            this.setXYAt(s, n, 'i', o, c);
        }),
        (ShapePath.prototype.reverse = function () {
          var e = new ShapePath();
          e.setPathData(this.c, this._length);
          var t = this.v,
            r = this.o,
            i = this.i,
            s = 0;
          this.c &&
            (e.setTripleAt(
              t[0][0],
              t[0][1],
              i[0][0],
              i[0][1],
              r[0][0],
              r[0][1],
              0,
              !1
            ),
            (s = 1));
          var n = this._length - 1,
            o = this._length,
            c;
          for (c = s; c < o; c += 1)
            e.setTripleAt(
              t[n][0],
              t[n][1],
              i[n][0],
              i[n][1],
              r[n][0],
              r[n][1],
              c,
              !1
            ),
              (n -= 1);
          return e;
        });
      var ShapePropertyFactory = (function () {
          var e = -999999;
          function t(l, a, h) {
            var f = h.lastIndex,
              y,
              k,
              w,
              P,
              F,
              D,
              T,
              z,
              M,
              V = this.keyframes;
            if (l < V[0].t - this.offsetTime)
              (y = V[0].s[0]), (w = !0), (f = 0);
            else if (l >= V[V.length - 1].t - this.offsetTime)
              (y = V[V.length - 1].s
                ? V[V.length - 1].s[0]
                : V[V.length - 2].e[0]),
                (w = !0);
            else {
              for (
                var R = f, C = V.length - 1, S = !0, E, A, L;
                S && ((E = V[R]), (A = V[R + 1]), !(A.t - this.offsetTime > l));

              )
                R < C - 1 ? (R += 1) : (S = !1);
              if (
                ((L = this.keyframesMetadata[R] || {}),
                (w = E.h === 1),
                (f = R),
                !w)
              ) {
                if (l >= A.t - this.offsetTime) z = 1;
                else if (l < E.t - this.offsetTime) z = 0;
                else {
                  var I;
                  L.__fnct
                    ? (I = L.__fnct)
                    : ((I = BezierFactory.getBezierEasing(
                        E.o.x,
                        E.o.y,
                        E.i.x,
                        E.i.y
                      ).get),
                      (L.__fnct = I)),
                    (z = I(
                      (l - (E.t - this.offsetTime)) /
                        (A.t - this.offsetTime - (E.t - this.offsetTime))
                    ));
                }
                k = A.s ? A.s[0] : E.e[0];
              }
              y = E.s[0];
            }
            for (
              D = a._length, T = y.i[0].length, h.lastIndex = f, P = 0;
              P < D;
              P += 1
            )
              for (F = 0; F < T; F += 1)
                (M = w ? y.i[P][F] : y.i[P][F] + (k.i[P][F] - y.i[P][F]) * z),
                  (a.i[P][F] = M),
                  (M = w ? y.o[P][F] : y.o[P][F] + (k.o[P][F] - y.o[P][F]) * z),
                  (a.o[P][F] = M),
                  (M = w ? y.v[P][F] : y.v[P][F] + (k.v[P][F] - y.v[P][F]) * z),
                  (a.v[P][F] = M);
          }
          function r() {
            var l = this.comp.renderedFrame - this.offsetTime,
              a = this.keyframes[0].t - this.offsetTime,
              h = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
              f = this._caching.lastFrame;
            return (
              (f !== e && ((f < a && l < a) || (f > h && l > h))) ||
                ((this._caching.lastIndex =
                  f < l ? this._caching.lastIndex : 0),
                this.interpolateShape(l, this.pv, this._caching)),
              (this._caching.lastFrame = l),
              this.pv
            );
          }
          function i() {
            this.paths = this.localShapeCollection;
          }
          function s(l, a) {
            if (l._length !== a._length || l.c !== a.c) return !1;
            var h,
              f = l._length;
            for (h = 0; h < f; h += 1)
              if (
                l.v[h][0] !== a.v[h][0] ||
                l.v[h][1] !== a.v[h][1] ||
                l.o[h][0] !== a.o[h][0] ||
                l.o[h][1] !== a.o[h][1] ||
                l.i[h][0] !== a.i[h][0] ||
                l.i[h][1] !== a.i[h][1]
              )
                return !1;
            return !0;
          }
          function n(l) {
            s(this.v, l) ||
              ((this.v = shapePool.clone(l)),
              this.localShapeCollection.releaseShapes(),
              this.localShapeCollection.addShape(this.v),
              (this._mdf = !0),
              (this.paths = this.localShapeCollection));
          }
          function o() {
            if (this.elem.globalData.frameId !== this.frameId) {
              if (!this.effectsSequence.length) {
                this._mdf = !1;
                return;
              }
              if (this.lock) {
                this.setVValue(this.pv);
                return;
              }
              (this.lock = !0), (this._mdf = !1);
              var l;
              this.kf
                ? (l = this.pv)
                : this.data.ks
                ? (l = this.data.ks.k)
                : (l = this.data.pt.k);
              var a,
                h = this.effectsSequence.length;
              for (a = 0; a < h; a += 1) l = this.effectsSequence[a](l);
              this.setVValue(l),
                (this.lock = !1),
                (this.frameId = this.elem.globalData.frameId);
            }
          }
          function c(l, a, h) {
            (this.propType = 'shape'),
              (this.comp = l.comp),
              (this.container = l),
              (this.elem = l),
              (this.data = a),
              (this.k = !1),
              (this.kf = !1),
              (this._mdf = !1);
            var f = h === 3 ? a.pt.k : a.ks.k;
            (this.v = shapePool.clone(f)),
              (this.pv = shapePool.clone(this.v)),
              (this.localShapeCollection =
                shapeCollectionPool.newShapeCollection()),
              (this.paths = this.localShapeCollection),
              this.paths.addShape(this.v),
              (this.reset = i),
              (this.effectsSequence = []);
          }
          function u(l) {
            this.effectsSequence.push(l),
              this.container.addDynamicProperty(this);
          }
          (c.prototype.interpolateShape = t),
            (c.prototype.getValue = o),
            (c.prototype.setVValue = n),
            (c.prototype.addEffect = u);
          function d(l, a, h) {
            (this.propType = 'shape'),
              (this.comp = l.comp),
              (this.elem = l),
              (this.container = l),
              (this.offsetTime = l.data.st),
              (this.keyframes = h === 3 ? a.pt.k : a.ks.k),
              (this.keyframesMetadata = []),
              (this.k = !0),
              (this.kf = !0);
            var f = this.keyframes[0].s[0].i.length;
            (this.v = shapePool.newElement()),
              this.v.setPathData(this.keyframes[0].s[0].c, f),
              (this.pv = shapePool.clone(this.v)),
              (this.localShapeCollection =
                shapeCollectionPool.newShapeCollection()),
              (this.paths = this.localShapeCollection),
              this.paths.addShape(this.v),
              (this.lastFrame = e),
              (this.reset = i),
              (this._caching = { lastFrame: e, lastIndex: 0 }),
              (this.effectsSequence = [r.bind(this)]);
          }
          (d.prototype.getValue = o),
            (d.prototype.interpolateShape = t),
            (d.prototype.setVValue = n),
            (d.prototype.addEffect = u);
          var x = (function () {
              var l = roundCorner;
              function a(h, f) {
                (this.v = shapePool.newElement()),
                  this.v.setPathData(!0, 4),
                  (this.localShapeCollection =
                    shapeCollectionPool.newShapeCollection()),
                  (this.paths = this.localShapeCollection),
                  this.localShapeCollection.addShape(this.v),
                  (this.d = f.d),
                  (this.elem = h),
                  (this.comp = h.comp),
                  (this.frameId = -1),
                  this.initDynamicPropertyContainer(h),
                  (this.p = PropertyFactory.getProp(h, f.p, 1, 0, this)),
                  (this.s = PropertyFactory.getProp(h, f.s, 1, 0, this)),
                  this.dynamicProperties.length
                    ? (this.k = !0)
                    : ((this.k = !1), this.convertEllToPath());
              }
              return (
                (a.prototype = {
                  reset: i,
                  getValue: function () {
                    this.elem.globalData.frameId !== this.frameId &&
                      ((this.frameId = this.elem.globalData.frameId),
                      this.iterateDynamicProperties(),
                      this._mdf && this.convertEllToPath());
                  },
                  convertEllToPath: function () {
                    var h = this.p.v[0],
                      f = this.p.v[1],
                      y = this.s.v[0] / 2,
                      k = this.s.v[1] / 2,
                      w = this.d !== 3,
                      P = this.v;
                    (P.v[0][0] = h),
                      (P.v[0][1] = f - k),
                      (P.v[1][0] = w ? h + y : h - y),
                      (P.v[1][1] = f),
                      (P.v[2][0] = h),
                      (P.v[2][1] = f + k),
                      (P.v[3][0] = w ? h - y : h + y),
                      (P.v[3][1] = f),
                      (P.i[0][0] = w ? h - y * l : h + y * l),
                      (P.i[0][1] = f - k),
                      (P.i[1][0] = w ? h + y : h - y),
                      (P.i[1][1] = f - k * l),
                      (P.i[2][0] = w ? h + y * l : h - y * l),
                      (P.i[2][1] = f + k),
                      (P.i[3][0] = w ? h - y : h + y),
                      (P.i[3][1] = f + k * l),
                      (P.o[0][0] = w ? h + y * l : h - y * l),
                      (P.o[0][1] = f - k),
                      (P.o[1][0] = w ? h + y : h - y),
                      (P.o[1][1] = f + k * l),
                      (P.o[2][0] = w ? h - y * l : h + y * l),
                      (P.o[2][1] = f + k),
                      (P.o[3][0] = w ? h - y : h + y),
                      (P.o[3][1] = f - k * l);
                  },
                }),
                extendPrototype([DynamicPropertyContainer], a),
                a
              );
            })(),
            _ = (function () {
              function l(a, h) {
                (this.v = shapePool.newElement()),
                  this.v.setPathData(!0, 0),
                  (this.elem = a),
                  (this.comp = a.comp),
                  (this.data = h),
                  (this.frameId = -1),
                  (this.d = h.d),
                  this.initDynamicPropertyContainer(a),
                  h.sy === 1
                    ? ((this.ir = PropertyFactory.getProp(a, h.ir, 0, 0, this)),
                      (this.is = PropertyFactory.getProp(
                        a,
                        h.is,
                        0,
                        0.01,
                        this
                      )),
                      (this.convertToPath = this.convertStarToPath))
                    : (this.convertToPath = this.convertPolygonToPath),
                  (this.pt = PropertyFactory.getProp(a, h.pt, 0, 0, this)),
                  (this.p = PropertyFactory.getProp(a, h.p, 1, 0, this)),
                  (this.r = PropertyFactory.getProp(
                    a,
                    h.r,
                    0,
                    degToRads,
                    this
                  )),
                  (this.or = PropertyFactory.getProp(a, h.or, 0, 0, this)),
                  (this.os = PropertyFactory.getProp(a, h.os, 0, 0.01, this)),
                  (this.localShapeCollection =
                    shapeCollectionPool.newShapeCollection()),
                  this.localShapeCollection.addShape(this.v),
                  (this.paths = this.localShapeCollection),
                  this.dynamicProperties.length
                    ? (this.k = !0)
                    : ((this.k = !1), this.convertToPath());
              }
              return (
                (l.prototype = {
                  reset: i,
                  getValue: function () {
                    this.elem.globalData.frameId !== this.frameId &&
                      ((this.frameId = this.elem.globalData.frameId),
                      this.iterateDynamicProperties(),
                      this._mdf && this.convertToPath());
                  },
                  convertStarToPath: function () {
                    var a = Math.floor(this.pt.v) * 2,
                      h = (Math.PI * 2) / a,
                      f = !0,
                      y = this.or.v,
                      k = this.ir.v,
                      w = this.os.v,
                      P = this.is.v,
                      F = (2 * Math.PI * y) / (a * 2),
                      D = (2 * Math.PI * k) / (a * 2),
                      T,
                      z,
                      M,
                      V,
                      R = -Math.PI / 2;
                    R += this.r.v;
                    var C = this.data.d === 3 ? -1 : 1;
                    for (this.v._length = 0, T = 0; T < a; T += 1) {
                      (z = f ? y : k), (M = f ? w : P), (V = f ? F : D);
                      var S = z * Math.cos(R),
                        E = z * Math.sin(R),
                        A =
                          S === 0 && E === 0 ? 0 : E / Math.sqrt(S * S + E * E),
                        L =
                          S === 0 && E === 0
                            ? 0
                            : -S / Math.sqrt(S * S + E * E);
                      (S += +this.p.v[0]),
                        (E += +this.p.v[1]),
                        this.v.setTripleAt(
                          S,
                          E,
                          S - A * V * M * C,
                          E - L * V * M * C,
                          S + A * V * M * C,
                          E + L * V * M * C,
                          T,
                          !0
                        ),
                        (f = !f),
                        (R += h * C);
                    }
                  },
                  convertPolygonToPath: function () {
                    var a = Math.floor(this.pt.v),
                      h = (Math.PI * 2) / a,
                      f = this.or.v,
                      y = this.os.v,
                      k = (2 * Math.PI * f) / (a * 4),
                      w,
                      P = -Math.PI * 0.5,
                      F = this.data.d === 3 ? -1 : 1;
                    for (
                      P += this.r.v, this.v._length = 0, w = 0;
                      w < a;
                      w += 1
                    ) {
                      var D = f * Math.cos(P),
                        T = f * Math.sin(P),
                        z =
                          D === 0 && T === 0 ? 0 : T / Math.sqrt(D * D + T * T),
                        M =
                          D === 0 && T === 0
                            ? 0
                            : -D / Math.sqrt(D * D + T * T);
                      (D += +this.p.v[0]),
                        (T += +this.p.v[1]),
                        this.v.setTripleAt(
                          D,
                          T,
                          D - z * k * y * F,
                          T - M * k * y * F,
                          D + z * k * y * F,
                          T + M * k * y * F,
                          w,
                          !0
                        ),
                        (P += h * F);
                    }
                    (this.paths.length = 0), (this.paths[0] = this.v);
                  },
                }),
                extendPrototype([DynamicPropertyContainer], l),
                l
              );
            })(),
            m = (function () {
              function l(a, h) {
                (this.v = shapePool.newElement()),
                  (this.v.c = !0),
                  (this.localShapeCollection =
                    shapeCollectionPool.newShapeCollection()),
                  this.localShapeCollection.addShape(this.v),
                  (this.paths = this.localShapeCollection),
                  (this.elem = a),
                  (this.comp = a.comp),
                  (this.frameId = -1),
                  (this.d = h.d),
                  this.initDynamicPropertyContainer(a),
                  (this.p = PropertyFactory.getProp(a, h.p, 1, 0, this)),
                  (this.s = PropertyFactory.getProp(a, h.s, 1, 0, this)),
                  (this.r = PropertyFactory.getProp(a, h.r, 0, 0, this)),
                  this.dynamicProperties.length
                    ? (this.k = !0)
                    : ((this.k = !1), this.convertRectToPath());
              }
              return (
                (l.prototype = {
                  convertRectToPath: function () {
                    var a = this.p.v[0],
                      h = this.p.v[1],
                      f = this.s.v[0] / 2,
                      y = this.s.v[1] / 2,
                      k = bmMin(f, y, this.r.v),
                      w = k * (1 - roundCorner);
                    (this.v._length = 0),
                      this.d === 2 || this.d === 1
                        ? (this.v.setTripleAt(
                            a + f,
                            h - y + k,
                            a + f,
                            h - y + k,
                            a + f,
                            h - y + w,
                            0,
                            !0
                          ),
                          this.v.setTripleAt(
                            a + f,
                            h + y - k,
                            a + f,
                            h + y - w,
                            a + f,
                            h + y - k,
                            1,
                            !0
                          ),
                          k !== 0
                            ? (this.v.setTripleAt(
                                a + f - k,
                                h + y,
                                a + f - k,
                                h + y,
                                a + f - w,
                                h + y,
                                2,
                                !0
                              ),
                              this.v.setTripleAt(
                                a - f + k,
                                h + y,
                                a - f + w,
                                h + y,
                                a - f + k,
                                h + y,
                                3,
                                !0
                              ),
                              this.v.setTripleAt(
                                a - f,
                                h + y - k,
                                a - f,
                                h + y - k,
                                a - f,
                                h + y - w,
                                4,
                                !0
                              ),
                              this.v.setTripleAt(
                                a - f,
                                h - y + k,
                                a - f,
                                h - y + w,
                                a - f,
                                h - y + k,
                                5,
                                !0
                              ),
                              this.v.setTripleAt(
                                a - f + k,
                                h - y,
                                a - f + k,
                                h - y,
                                a - f + w,
                                h - y,
                                6,
                                !0
                              ),
                              this.v.setTripleAt(
                                a + f - k,
                                h - y,
                                a + f - w,
                                h - y,
                                a + f - k,
                                h - y,
                                7,
                                !0
                              ))
                            : (this.v.setTripleAt(
                                a - f,
                                h + y,
                                a - f + w,
                                h + y,
                                a - f,
                                h + y,
                                2
                              ),
                              this.v.setTripleAt(
                                a - f,
                                h - y,
                                a - f,
                                h - y + w,
                                a - f,
                                h - y,
                                3
                              )))
                        : (this.v.setTripleAt(
                            a + f,
                            h - y + k,
                            a + f,
                            h - y + w,
                            a + f,
                            h - y + k,
                            0,
                            !0
                          ),
                          k !== 0
                            ? (this.v.setTripleAt(
                                a + f - k,
                                h - y,
                                a + f - k,
                                h - y,
                                a + f - w,
                                h - y,
                                1,
                                !0
                              ),
                              this.v.setTripleAt(
                                a - f + k,
                                h - y,
                                a - f + w,
                                h - y,
                                a - f + k,
                                h - y,
                                2,
                                !0
                              ),
                              this.v.setTripleAt(
                                a - f,
                                h - y + k,
                                a - f,
                                h - y + k,
                                a - f,
                                h - y + w,
                                3,
                                !0
                              ),
                              this.v.setTripleAt(
                                a - f,
                                h + y - k,
                                a - f,
                                h + y - w,
                                a - f,
                                h + y - k,
                                4,
                                !0
                              ),
                              this.v.setTripleAt(
                                a - f + k,
                                h + y,
                                a - f + k,
                                h + y,
                                a - f + w,
                                h + y,
                                5,
                                !0
                              ),
                              this.v.setTripleAt(
                                a + f - k,
                                h + y,
                                a + f - w,
                                h + y,
                                a + f - k,
                                h + y,
                                6,
                                !0
                              ),
                              this.v.setTripleAt(
                                a + f,
                                h + y - k,
                                a + f,
                                h + y - k,
                                a + f,
                                h + y - w,
                                7,
                                !0
                              ))
                            : (this.v.setTripleAt(
                                a - f,
                                h - y,
                                a - f + w,
                                h - y,
                                a - f,
                                h - y,
                                1,
                                !0
                              ),
                              this.v.setTripleAt(
                                a - f,
                                h + y,
                                a - f,
                                h + y - w,
                                a - f,
                                h + y,
                                2,
                                !0
                              ),
                              this.v.setTripleAt(
                                a + f,
                                h + y,
                                a + f - w,
                                h + y,
                                a + f,
                                h + y,
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
                extendPrototype([DynamicPropertyContainer], l),
                l
              );
            })();
          function v(l, a, h) {
            var f;
            if (h === 3 || h === 4) {
              var y = h === 3 ? a.pt : a.ks,
                k = y.k;
              k.length ? (f = new d(l, a, h)) : (f = new c(l, a, h));
            } else
              h === 5
                ? (f = new m(l, a))
                : h === 6
                ? (f = new x(l, a))
                : h === 7 && (f = new _(l, a));
            return f.k && l.addDynamicProperty(f), f;
          }
          function p() {
            return c;
          }
          function g() {
            return d;
          }
          var b = {};
          return (
            (b.getShapeProp = v),
            (b.getConstructorFunction = p),
            (b.getKeyframedConstructorFunction = g),
            b
          );
        })(),
        ShapeModifiers = (function () {
          var e = {},
            t = {};
          (e.registerModifier = r), (e.getModifier = i);
          function r(s, n) {
            t[s] || (t[s] = n);
          }
          function i(s, n, o) {
            return new t[s](n, o);
          }
          return e;
        })();
      function ShapeModifier() {}
      (ShapeModifier.prototype.initModifierProperties = function () {}),
        (ShapeModifier.prototype.addShapeToModifier = function () {}),
        (ShapeModifier.prototype.addShape = function (e) {
          if (!this.closed) {
            e.sh.container.addDynamicProperty(e.sh);
            var t = {
              shape: e.sh,
              data: e,
              localShapeCollection: shapeCollectionPool.newShapeCollection(),
            };
            this.shapes.push(t),
              this.addShapeToModifier(t),
              this._isAnimated && e.setAsAnimated();
          }
        }),
        (ShapeModifier.prototype.init = function (e, t) {
          (this.shapes = []),
            (this.elem = e),
            this.initDynamicPropertyContainer(e),
            this.initModifierProperties(e, t),
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
        extendPrototype([DynamicPropertyContainer], ShapeModifier);
      function TrimModifier() {}
      extendPrototype([ShapeModifier], TrimModifier),
        (TrimModifier.prototype.initModifierProperties = function (e, t) {
          (this.s = PropertyFactory.getProp(e, t.s, 0, 0.01, this)),
            (this.e = PropertyFactory.getProp(e, t.e, 0, 0.01, this)),
            (this.o = PropertyFactory.getProp(e, t.o, 0, 0, this)),
            (this.sValue = 0),
            (this.eValue = 0),
            (this.getValue = this.processKeys),
            (this.m = t.m),
            (this._isAnimated =
              !!this.s.effectsSequence.length ||
              !!this.e.effectsSequence.length ||
              !!this.o.effectsSequence.length);
        }),
        (TrimModifier.prototype.addShapeToModifier = function (e) {
          e.pathsData = [];
        }),
        (TrimModifier.prototype.calculateShapeEdges = function (e, t, r, i, s) {
          var n = [];
          t <= 1
            ? n.push({ s: e, e: t })
            : e >= 1
            ? n.push({ s: e - 1, e: t - 1 })
            : (n.push({ s: e, e: 1 }), n.push({ s: 0, e: t - 1 }));
          var o = [],
            c,
            u = n.length,
            d;
          for (c = 0; c < u; c += 1)
            if (((d = n[c]), !(d.e * s < i || d.s * s > i + r))) {
              var x, _;
              d.s * s <= i ? (x = 0) : (x = (d.s * s - i) / r),
                d.e * s >= i + r ? (_ = 1) : (_ = (d.e * s - i) / r),
                o.push([x, _]);
            }
          return o.length || o.push([0, 0]), o;
        }),
        (TrimModifier.prototype.releasePathsData = function (e) {
          var t,
            r = e.length;
          for (t = 0; t < r; t += 1) segmentsLengthPool.release(e[t]);
          return (e.length = 0), e;
        }),
        (TrimModifier.prototype.processShapes = function (e) {
          var t, r;
          if (this._mdf || e) {
            var i = (this.o.v % 360) / 360;
            if (
              (i < 0 && (i += 1),
              this.s.v > 1
                ? (t = 1 + i)
                : this.s.v < 0
                ? (t = 0 + i)
                : (t = this.s.v + i),
              this.e.v > 1
                ? (r = 1 + i)
                : this.e.v < 0
                ? (r = 0 + i)
                : (r = this.e.v + i),
              t > r)
            ) {
              var s = t;
              (t = r), (r = s);
            }
            (t = Math.round(t * 1e4) * 1e-4),
              (r = Math.round(r * 1e4) * 1e-4),
              (this.sValue = t),
              (this.eValue = r);
          } else (t = this.sValue), (r = this.eValue);
          var n,
            o,
            c = this.shapes.length,
            u,
            d,
            x,
            _,
            m,
            v = 0;
          if (r === t)
            for (o = 0; o < c; o += 1)
              this.shapes[o].localShapeCollection.releaseShapes(),
                (this.shapes[o].shape._mdf = !0),
                (this.shapes[o].shape.paths =
                  this.shapes[o].localShapeCollection),
                this._mdf && (this.shapes[o].pathsData.length = 0);
          else if ((r === 1 && t === 0) || (r === 0 && t === 1)) {
            if (this._mdf)
              for (o = 0; o < c; o += 1)
                (this.shapes[o].pathsData.length = 0),
                  (this.shapes[o].shape._mdf = !0);
          } else {
            var p = [],
              g,
              b;
            for (o = 0; o < c; o += 1)
              if (
                ((g = this.shapes[o]),
                !g.shape._mdf && !this._mdf && !e && this.m !== 2)
              )
                g.shape.paths = g.localShapeCollection;
              else {
                if (
                  ((n = g.shape.paths),
                  (d = n._length),
                  (m = 0),
                  !g.shape._mdf && g.pathsData.length)
                )
                  m = g.totalShapeLength;
                else {
                  for (
                    x = this.releasePathsData(g.pathsData), u = 0;
                    u < d;
                    u += 1
                  )
                    (_ = bez.getSegmentsLength(n.shapes[u])),
                      x.push(_),
                      (m += _.totalLength);
                  (g.totalShapeLength = m), (g.pathsData = x);
                }
                (v += m), (g.shape._mdf = !0);
              }
            var l = t,
              a = r,
              h = 0,
              f;
            for (o = c - 1; o >= 0; o -= 1)
              if (((g = this.shapes[o]), g.shape._mdf)) {
                for (
                  b = g.localShapeCollection,
                    b.releaseShapes(),
                    this.m === 2 && c > 1
                      ? ((f = this.calculateShapeEdges(
                          t,
                          r,
                          g.totalShapeLength,
                          h,
                          v
                        )),
                        (h += g.totalShapeLength))
                      : (f = [[l, a]]),
                    d = f.length,
                    u = 0;
                  u < d;
                  u += 1
                ) {
                  (l = f[u][0]),
                    (a = f[u][1]),
                    (p.length = 0),
                    a <= 1
                      ? p.push({
                          s: g.totalShapeLength * l,
                          e: g.totalShapeLength * a,
                        })
                      : l >= 1
                      ? p.push({
                          s: g.totalShapeLength * (l - 1),
                          e: g.totalShapeLength * (a - 1),
                        })
                      : (p.push({
                          s: g.totalShapeLength * l,
                          e: g.totalShapeLength,
                        }),
                        p.push({ s: 0, e: g.totalShapeLength * (a - 1) }));
                  var y = this.addShapes(g, p[0]);
                  if (p[0].s !== p[0].e) {
                    if (p.length > 1) {
                      var k = g.shape.paths.shapes[g.shape.paths._length - 1];
                      if (k.c) {
                        var w = y.pop();
                        this.addPaths(y, b), (y = this.addShapes(g, p[1], w));
                      } else this.addPaths(y, b), (y = this.addShapes(g, p[1]));
                    }
                    this.addPaths(y, b);
                  }
                }
                g.shape.paths = b;
              }
          }
        }),
        (TrimModifier.prototype.addPaths = function (e, t) {
          var r,
            i = e.length;
          for (r = 0; r < i; r += 1) t.addShape(e[r]);
        }),
        (TrimModifier.prototype.addSegment = function (e, t, r, i, s, n, o) {
          s.setXYAt(t[0], t[1], 'o', n),
            s.setXYAt(r[0], r[1], 'i', n + 1),
            o && s.setXYAt(e[0], e[1], 'v', n),
            s.setXYAt(i[0], i[1], 'v', n + 1);
        }),
        (TrimModifier.prototype.addSegmentFromArray = function (e, t, r, i) {
          t.setXYAt(e[1], e[5], 'o', r),
            t.setXYAt(e[2], e[6], 'i', r + 1),
            i && t.setXYAt(e[0], e[4], 'v', r),
            t.setXYAt(e[3], e[7], 'v', r + 1);
        }),
        (TrimModifier.prototype.addShapes = function (e, t, r) {
          var i = e.pathsData,
            s = e.shape.paths.shapes,
            n,
            o = e.shape.paths._length,
            c,
            u,
            d = 0,
            x,
            _,
            m,
            v,
            p = [],
            g,
            b = !0;
          for (
            r
              ? ((_ = r._length), (g = r._length))
              : ((r = shapePool.newElement()), (_ = 0), (g = 0)),
              p.push(r),
              n = 0;
            n < o;
            n += 1
          ) {
            for (
              m = i[n].lengths,
                r.c = s[n].c,
                u = s[n].c ? m.length : m.length + 1,
                c = 1;
              c < u;
              c += 1
            )
              if (((x = m[c - 1]), d + x.addedLength < t.s))
                (d += x.addedLength), (r.c = !1);
              else if (d > t.e) {
                r.c = !1;
                break;
              } else
                t.s <= d && t.e >= d + x.addedLength
                  ? (this.addSegment(
                      s[n].v[c - 1],
                      s[n].o[c - 1],
                      s[n].i[c],
                      s[n].v[c],
                      r,
                      _,
                      b
                    ),
                    (b = !1))
                  : ((v = bez.getNewSegment(
                      s[n].v[c - 1],
                      s[n].v[c],
                      s[n].o[c - 1],
                      s[n].i[c],
                      (t.s - d) / x.addedLength,
                      (t.e - d) / x.addedLength,
                      m[c - 1]
                    )),
                    this.addSegmentFromArray(v, r, _, b),
                    (b = !1),
                    (r.c = !1)),
                  (d += x.addedLength),
                  (_ += 1);
            if (s[n].c && m.length) {
              if (((x = m[c - 1]), d <= t.e)) {
                var l = m[c - 1].addedLength;
                t.s <= d && t.e >= d + l
                  ? (this.addSegment(
                      s[n].v[c - 1],
                      s[n].o[c - 1],
                      s[n].i[0],
                      s[n].v[0],
                      r,
                      _,
                      b
                    ),
                    (b = !1))
                  : ((v = bez.getNewSegment(
                      s[n].v[c - 1],
                      s[n].v[0],
                      s[n].o[c - 1],
                      s[n].i[0],
                      (t.s - d) / l,
                      (t.e - d) / l,
                      m[c - 1]
                    )),
                    this.addSegmentFromArray(v, r, _, b),
                    (b = !1),
                    (r.c = !1));
              } else r.c = !1;
              (d += x.addedLength), (_ += 1);
            }
            if (
              (r._length &&
                (r.setXYAt(r.v[g][0], r.v[g][1], 'i', g),
                r.setXYAt(
                  r.v[r._length - 1][0],
                  r.v[r._length - 1][1],
                  'o',
                  r._length - 1
                )),
              d > t.e)
            )
              break;
            n < o - 1 &&
              ((r = shapePool.newElement()), (b = !0), p.push(r), (_ = 0));
          }
          return p;
        }),
        ShapeModifiers.registerModifier('tm', TrimModifier);
      function RoundCornersModifier() {}
      extendPrototype([ShapeModifier], RoundCornersModifier),
        (RoundCornersModifier.prototype.initModifierProperties = function (
          e,
          t
        ) {
          (this.getValue = this.processKeys),
            (this.rd = PropertyFactory.getProp(e, t.r, 0, null, this)),
            (this._isAnimated = !!this.rd.effectsSequence.length);
        }),
        (RoundCornersModifier.prototype.processPath = function (e, t) {
          var r = shapePool.newElement();
          r.c = e.c;
          var i,
            s = e._length,
            n,
            o,
            c,
            u,
            d,
            x,
            _ = 0,
            m,
            v,
            p,
            g,
            b,
            l;
          for (i = 0; i < s; i += 1)
            (n = e.v[i]),
              (c = e.o[i]),
              (o = e.i[i]),
              n[0] === c[0] && n[1] === c[1] && n[0] === o[0] && n[1] === o[1]
                ? (i === 0 || i === s - 1) && !e.c
                  ? (r.setTripleAt(n[0], n[1], c[0], c[1], o[0], o[1], _),
                    (_ += 1))
                  : (i === 0 ? (u = e.v[s - 1]) : (u = e.v[i - 1]),
                    (d = Math.sqrt(
                      Math.pow(n[0] - u[0], 2) + Math.pow(n[1] - u[1], 2)
                    )),
                    (x = d ? Math.min(d / 2, t) / d : 0),
                    (b = n[0] + (u[0] - n[0]) * x),
                    (m = b),
                    (l = n[1] - (n[1] - u[1]) * x),
                    (v = l),
                    (p = m - (m - n[0]) * roundCorner),
                    (g = v - (v - n[1]) * roundCorner),
                    r.setTripleAt(m, v, p, g, b, l, _),
                    (_ += 1),
                    i === s - 1 ? (u = e.v[0]) : (u = e.v[i + 1]),
                    (d = Math.sqrt(
                      Math.pow(n[0] - u[0], 2) + Math.pow(n[1] - u[1], 2)
                    )),
                    (x = d ? Math.min(d / 2, t) / d : 0),
                    (p = n[0] + (u[0] - n[0]) * x),
                    (m = p),
                    (g = n[1] + (u[1] - n[1]) * x),
                    (v = g),
                    (b = m - (m - n[0]) * roundCorner),
                    (l = v - (v - n[1]) * roundCorner),
                    r.setTripleAt(m, v, p, g, b, l, _),
                    (_ += 1))
                : (r.setTripleAt(
                    e.v[i][0],
                    e.v[i][1],
                    e.o[i][0],
                    e.o[i][1],
                    e.i[i][0],
                    e.i[i][1],
                    _
                  ),
                  (_ += 1));
          return r;
        }),
        (RoundCornersModifier.prototype.processShapes = function (e) {
          var t,
            r,
            i = this.shapes.length,
            s,
            n,
            o = this.rd.v;
          if (o !== 0) {
            var c, u;
            for (r = 0; r < i; r += 1) {
              if (
                ((c = this.shapes[r]),
                (u = c.localShapeCollection),
                !(!c.shape._mdf && !this._mdf && !e))
              )
                for (
                  u.releaseShapes(),
                    c.shape._mdf = !0,
                    t = c.shape.paths.shapes,
                    n = c.shape.paths._length,
                    s = 0;
                  s < n;
                  s += 1
                )
                  u.addShape(this.processPath(t[s], o));
              c.shape.paths = c.localShapeCollection;
            }
          }
          this.dynamicProperties.length || (this._mdf = !1);
        }),
        ShapeModifiers.registerModifier('rd', RoundCornersModifier);
      function PuckerAndBloatModifier() {}
      extendPrototype([ShapeModifier], PuckerAndBloatModifier),
        (PuckerAndBloatModifier.prototype.initModifierProperties = function (
          e,
          t
        ) {
          (this.getValue = this.processKeys),
            (this.amount = PropertyFactory.getProp(e, t.a, 0, null, this)),
            (this._isAnimated = !!this.amount.effectsSequence.length);
        }),
        (PuckerAndBloatModifier.prototype.processPath = function (e, t) {
          var r = t / 100,
            i = [0, 0],
            s = e._length,
            n = 0;
          for (n = 0; n < s; n += 1) (i[0] += e.v[n][0]), (i[1] += e.v[n][1]);
          (i[0] /= s), (i[1] /= s);
          var o = shapePool.newElement();
          o.c = e.c;
          var c, u, d, x, _, m;
          for (n = 0; n < s; n += 1)
            (c = e.v[n][0] + (i[0] - e.v[n][0]) * r),
              (u = e.v[n][1] + (i[1] - e.v[n][1]) * r),
              (d = e.o[n][0] + (i[0] - e.o[n][0]) * -r),
              (x = e.o[n][1] + (i[1] - e.o[n][1]) * -r),
              (_ = e.i[n][0] + (i[0] - e.i[n][0]) * -r),
              (m = e.i[n][1] + (i[1] - e.i[n][1]) * -r),
              o.setTripleAt(c, u, d, x, _, m, n);
          return o;
        }),
        (PuckerAndBloatModifier.prototype.processShapes = function (e) {
          var t,
            r,
            i = this.shapes.length,
            s,
            n,
            o = this.amount.v;
          if (o !== 0) {
            var c, u;
            for (r = 0; r < i; r += 1) {
              if (
                ((c = this.shapes[r]),
                (u = c.localShapeCollection),
                !(!c.shape._mdf && !this._mdf && !e))
              )
                for (
                  u.releaseShapes(),
                    c.shape._mdf = !0,
                    t = c.shape.paths.shapes,
                    n = c.shape.paths._length,
                    s = 0;
                  s < n;
                  s += 1
                )
                  u.addShape(this.processPath(t[s], o));
              c.shape.paths = c.localShapeCollection;
            }
          }
          this.dynamicProperties.length || (this._mdf = !1);
        }),
        ShapeModifiers.registerModifier('pb', PuckerAndBloatModifier);
      function RepeaterModifier() {}
      extendPrototype([ShapeModifier], RepeaterModifier),
        (RepeaterModifier.prototype.initModifierProperties = function (e, t) {
          (this.getValue = this.processKeys),
            (this.c = PropertyFactory.getProp(e, t.c, 0, null, this)),
            (this.o = PropertyFactory.getProp(e, t.o, 0, null, this)),
            (this.tr = TransformPropertyFactory.getTransformProperty(
              e,
              t.tr,
              this
            )),
            (this.so = PropertyFactory.getProp(e, t.tr.so, 0, 0.01, this)),
            (this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, 0.01, this)),
            (this.data = t),
            this.dynamicProperties.length || this.getValue(!0),
            (this._isAnimated = !!this.dynamicProperties.length),
            (this.pMatrix = new Matrix()),
            (this.rMatrix = new Matrix()),
            (this.sMatrix = new Matrix()),
            (this.tMatrix = new Matrix()),
            (this.matrix = new Matrix());
        }),
        (RepeaterModifier.prototype.applyTransforms = function (
          e,
          t,
          r,
          i,
          s,
          n
        ) {
          var o = n ? -1 : 1,
            c = i.s.v[0] + (1 - i.s.v[0]) * (1 - s),
            u = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
          e.translate(i.p.v[0] * o * s, i.p.v[1] * o * s, i.p.v[2]),
            t.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
            t.rotate(-i.r.v * o * s),
            t.translate(i.a.v[0], i.a.v[1], i.a.v[2]),
            r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
            r.scale(n ? 1 / c : c, n ? 1 / u : u),
            r.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
        }),
        (RepeaterModifier.prototype.init = function (e, t, r, i) {
          for (
            this.elem = e,
              this.arr = t,
              this.pos = r,
              this.elemsData = i,
              this._currentCopies = 0,
              this._elements = [],
              this._groups = [],
              this.frameId = -1,
              this.initDynamicPropertyContainer(e),
              this.initModifierProperties(e, t[r]);
            r > 0;

          )
            (r -= 1), this._elements.unshift(t[r]);
          this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
        }),
        (RepeaterModifier.prototype.resetElements = function (e) {
          var t,
            r = e.length;
          for (t = 0; t < r; t += 1)
            (e[t]._processed = !1),
              e[t].ty === 'gr' && this.resetElements(e[t].it);
        }),
        (RepeaterModifier.prototype.cloneElements = function (e) {
          var t = JSON.parse(JSON.stringify(e));
          return this.resetElements(t), t;
        }),
        (RepeaterModifier.prototype.changeGroupRender = function (e, t) {
          var r,
            i = e.length;
          for (r = 0; r < i; r += 1)
            (e[r]._render = t),
              e[r].ty === 'gr' && this.changeGroupRender(e[r].it, t);
        }),
        (RepeaterModifier.prototype.processShapes = function (e) {
          var t,
            r,
            i,
            s,
            n,
            o = !1;
          if (this._mdf || e) {
            var c = Math.ceil(this.c.v);
            if (this._groups.length < c) {
              for (; this._groups.length < c; ) {
                var u = { it: this.cloneElements(this._elements), ty: 'gr' };
                u.it.push({
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
                  this.arr.splice(0, 0, u),
                  this._groups.splice(0, 0, u),
                  (this._currentCopies += 1);
              }
              this.elem.reloadShapes(), (o = !0);
            }
            n = 0;
            var d;
            for (i = 0; i <= this._groups.length - 1; i += 1) {
              if (
                ((d = n < c),
                (this._groups[i]._render = d),
                this.changeGroupRender(this._groups[i].it, d),
                !d)
              ) {
                var x = this.elemsData[i].it,
                  _ = x[x.length - 1];
                _.transform.op.v !== 0
                  ? ((_.transform.op._mdf = !0), (_.transform.op.v = 0))
                  : (_.transform.op._mdf = !1);
              }
              n += 1;
            }
            this._currentCopies = c;
            var m = this.o.v,
              v = m % 1,
              p = m > 0 ? Math.floor(m) : Math.ceil(m),
              g = this.pMatrix.props,
              b = this.rMatrix.props,
              l = this.sMatrix.props;
            this.pMatrix.reset(),
              this.rMatrix.reset(),
              this.sMatrix.reset(),
              this.tMatrix.reset(),
              this.matrix.reset();
            var a = 0;
            if (m > 0) {
              for (; a < p; )
                this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  1,
                  !1
                ),
                  (a += 1);
              v &&
                (this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  v,
                  !1
                ),
                (a += v));
            } else if (m < 0) {
              for (; a > p; )
                this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  1,
                  !0
                ),
                  (a -= 1);
              v &&
                (this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  -v,
                  !0
                ),
                (a -= v));
            }
            (i = this.data.m === 1 ? 0 : this._currentCopies - 1),
              (s = this.data.m === 1 ? 1 : -1),
              (n = this._currentCopies);
            for (var h, f; n; ) {
              if (
                ((t = this.elemsData[i].it),
                (r = t[t.length - 1].transform.mProps.v.props),
                (f = r.length),
                (t[t.length - 1].transform.mProps._mdf = !0),
                (t[t.length - 1].transform.op._mdf = !0),
                (t[t.length - 1].transform.op.v =
                  this._currentCopies === 1
                    ? this.so.v
                    : this.so.v +
                      (this.eo.v - this.so.v) *
                        (i / (this._currentCopies - 1))),
                a !== 0)
              ) {
                for (
                  ((i !== 0 && s === 1) ||
                    (i !== this._currentCopies - 1 && s === -1)) &&
                    this.applyTransforms(
                      this.pMatrix,
                      this.rMatrix,
                      this.sMatrix,
                      this.tr,
                      1,
                      !1
                    ),
                    this.matrix.transform(
                      b[0],
                      b[1],
                      b[2],
                      b[3],
                      b[4],
                      b[5],
                      b[6],
                      b[7],
                      b[8],
                      b[9],
                      b[10],
                      b[11],
                      b[12],
                      b[13],
                      b[14],
                      b[15]
                    ),
                    this.matrix.transform(
                      l[0],
                      l[1],
                      l[2],
                      l[3],
                      l[4],
                      l[5],
                      l[6],
                      l[7],
                      l[8],
                      l[9],
                      l[10],
                      l[11],
                      l[12],
                      l[13],
                      l[14],
                      l[15]
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
                    h = 0;
                  h < f;
                  h += 1
                )
                  r[h] = this.matrix.props[h];
                this.matrix.reset();
              } else
                for (this.matrix.reset(), h = 0; h < f; h += 1)
                  r[h] = this.matrix.props[h];
              (a += 1), (n -= 1), (i += s);
            }
          } else
            for (n = this._currentCopies, i = 0, s = 1; n; )
              (t = this.elemsData[i].it),
                (r = t[t.length - 1].transform.mProps.v.props),
                (t[t.length - 1].transform.mProps._mdf = !1),
                (t[t.length - 1].transform.op._mdf = !1),
                (n -= 1),
                (i += s);
          return o;
        }),
        (RepeaterModifier.prototype.addShape = function () {}),
        ShapeModifiers.registerModifier('rp', RepeaterModifier);
      function ShapeCollection() {
        (this._length = 0),
          (this._maxLength = 4),
          (this.shapes = createSizedArray(this._maxLength));
      }
      (ShapeCollection.prototype.addShape = function (e) {
        this._length === this._maxLength &&
          ((this.shapes = this.shapes.concat(
            createSizedArray(this._maxLength)
          )),
          (this._maxLength *= 2)),
          (this.shapes[this._length] = e),
          (this._length += 1);
      }),
        (ShapeCollection.prototype.releaseShapes = function () {
          var e;
          for (e = 0; e < this._length; e += 1)
            shapePool.release(this.shapes[e]);
          this._length = 0;
        });
      function DashProperty(e, t, r, i) {
        (this.elem = e),
          (this.frameId = -1),
          (this.dataProps = createSizedArray(t.length)),
          (this.renderer = r),
          (this.k = !1),
          (this.dashStr = ''),
          (this.dashArray = createTypedArray(
            'float32',
            t.length ? t.length - 1 : 0
          )),
          (this.dashoffset = createTypedArray('float32', 1)),
          this.initDynamicPropertyContainer(i);
        var s,
          n = t.length || 0,
          o;
        for (s = 0; s < n; s += 1)
          (o = PropertyFactory.getProp(e, t[s].v, 0, 0, this)),
            (this.k = o.k || this.k),
            (this.dataProps[s] = { n: t[s].n, p: o });
        this.k || this.getValue(!0), (this._isAnimated = this.k);
      }
      (DashProperty.prototype.getValue = function (e) {
        if (
          !(this.elem.globalData.frameId === this.frameId && !e) &&
          ((this.frameId = this.elem.globalData.frameId),
          this.iterateDynamicProperties(),
          (this._mdf = this._mdf || e),
          this._mdf)
        ) {
          var t = 0,
            r = this.dataProps.length;
          for (
            this.renderer === 'svg' && (this.dashStr = ''), t = 0;
            t < r;
            t += 1
          )
            this.dataProps[t].n !== 'o'
              ? this.renderer === 'svg'
                ? (this.dashStr += ' ' + this.dataProps[t].p.v)
                : (this.dashArray[t] = this.dataProps[t].p.v)
              : (this.dashoffset[0] = this.dataProps[t].p.v);
        }
      }),
        extendPrototype([DynamicPropertyContainer], DashProperty);
      function GradientProperty(e, t, r) {
        (this.data = t), (this.c = createTypedArray('uint8c', t.p * 4));
        var i = t.k.k[0].s
          ? t.k.k[0].s.length - t.p * 4
          : t.k.k.length - t.p * 4;
        (this.o = createTypedArray('float32', i)),
          (this._cmdf = !1),
          (this._omdf = !1),
          (this._collapsable = this.checkCollapsable()),
          (this._hasOpacity = i),
          this.initDynamicPropertyContainer(r),
          (this.prop = PropertyFactory.getProp(e, t.k, 1, null, this)),
          (this.k = this.prop.k),
          this.getValue(!0);
      }
      (GradientProperty.prototype.comparePoints = function (e, t) {
        for (var r = 0, i = this.o.length / 2, s; r < i; ) {
          if (((s = Math.abs(e[r * 4] - e[t * 4 + r * 2])), s > 0.01))
            return !1;
          r += 1;
        }
        return !0;
      }),
        (GradientProperty.prototype.checkCollapsable = function () {
          if (this.o.length / 2 != this.c.length / 4) return !1;
          if (this.data.k.k[0].s)
            for (var e = 0, t = this.data.k.k.length; e < t; ) {
              if (!this.comparePoints(this.data.k.k[e].s, this.data.p))
                return !1;
              e += 1;
            }
          else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
          return !0;
        }),
        (GradientProperty.prototype.getValue = function (e) {
          if (
            (this.prop.getValue(),
            (this._mdf = !1),
            (this._cmdf = !1),
            (this._omdf = !1),
            this.prop._mdf || e)
          ) {
            var t,
              r = this.data.p * 4,
              i,
              s;
            for (t = 0; t < r; t += 1)
              (i = t % 4 == 0 ? 100 : 255),
                (s = Math.round(this.prop.v[t] * i)),
                this.c[t] !== s && ((this.c[t] = s), (this._cmdf = !e));
            if (this.o.length)
              for (r = this.prop.v.length, t = this.data.p * 4; t < r; t += 1)
                (i = t % 2 == 0 ? 100 : 1),
                  (s =
                    t % 2 == 0
                      ? Math.round(this.prop.v[t] * 100)
                      : this.prop.v[t]),
                  this.o[t - this.data.p * 4] !== s &&
                    ((this.o[t - this.data.p * 4] = s), (this._omdf = !e));
            this._mdf = !e;
          }
        }),
        extendPrototype([DynamicPropertyContainer], GradientProperty);
      var buildShapeString = function (e, t, r, i) {
          if (t === 0) return '';
          var s = e.o,
            n = e.i,
            o = e.v,
            c,
            u = ' M' + i.applyToPointStringified(o[0][0], o[0][1]);
          for (c = 1; c < t; c += 1)
            u +=
              ' C' +
              i.applyToPointStringified(s[c - 1][0], s[c - 1][1]) +
              ' ' +
              i.applyToPointStringified(n[c][0], n[c][1]) +
              ' ' +
              i.applyToPointStringified(o[c][0], o[c][1]);
          return (
            r &&
              t &&
              ((u +=
                ' C' +
                i.applyToPointStringified(s[c - 1][0], s[c - 1][1]) +
                ' ' +
                i.applyToPointStringified(n[0][0], n[0][1]) +
                ' ' +
                i.applyToPointStringified(o[0][0], o[0][1])),
              (u += 'z')),
            u
          );
        },
        audioControllerFactory = (function () {
          function e(t) {
            (this.audios = []),
              (this.audioFactory = t),
              (this._volume = 1),
              (this._isMuted = !1);
          }
          return (
            (e.prototype = {
              addAudio: function (t) {
                this.audios.push(t);
              },
              pause: function () {
                var t,
                  r = this.audios.length;
                for (t = 0; t < r; t += 1) this.audios[t].pause();
              },
              resume: function () {
                var t,
                  r = this.audios.length;
                for (t = 0; t < r; t += 1) this.audios[t].resume();
              },
              setRate: function (t) {
                var r,
                  i = this.audios.length;
                for (r = 0; r < i; r += 1) this.audios[r].setRate(t);
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
                  r = this.audios.length;
                for (t = 0; t < r; t += 1)
                  this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1));
              },
            }),
            function () {
              return new e();
            }
          );
        })(),
        ImagePreloader = (function () {
          var e = (function () {
            var l = createTag('canvas');
            (l.width = 1), (l.height = 1);
            var a = l.getContext('2d');
            return (a.fillStyle = 'rgba(0,0,0,0)'), a.fillRect(0, 0, 1, 1), l;
          })();
          function t() {
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
          function i(l, a, h) {
            var f = '';
            if (l.e) f = l.p;
            else if (a) {
              var y = l.p;
              y.indexOf('images/') !== -1 && (y = y.split('/')[1]), (f = a + y);
            } else (f = h), (f += l.u ? l.u : ''), (f += l.p);
            return f;
          }
          function s(l) {
            var a = 0,
              h = setInterval(
                function () {
                  var f = l.getBBox();
                  (f.width || a > 500) &&
                    (this._imageLoaded(), clearInterval(h)),
                    (a += 1);
                }.bind(this),
                50
              );
          }
          function n(l) {
            var a = i(l, this.assetsPath, this.path),
              h = createNS('image');
            isSafari
              ? this.testImageLoaded(h)
              : h.addEventListener('load', this._imageLoaded, !1),
              h.addEventListener(
                'error',
                function () {
                  (f.img = e), this._imageLoaded();
                }.bind(this),
                !1
              ),
              h.setAttributeNS('http://www.w3.org/1999/xlink', 'href', a),
              this._elementHelper.append
                ? this._elementHelper.append(h)
                : this._elementHelper.appendChild(h);
            var f = { img: h, assetData: l };
            return f;
          }
          function o(l) {
            var a = i(l, this.assetsPath, this.path),
              h = createTag('img');
            (h.crossOrigin = 'anonymous'),
              h.addEventListener('load', this._imageLoaded, !1),
              h.addEventListener(
                'error',
                function () {
                  (f.img = e), this._imageLoaded();
                }.bind(this),
                !1
              ),
              (h.src = a);
            var f = { img: h, assetData: l };
            return f;
          }
          function c(l) {
            var a = { assetData: l },
              h = i(l, this.assetsPath, this.path);
            return (
              dataManager.loadData(
                h,
                function (f) {
                  (a.img = f), this._footageLoaded();
                }.bind(this),
                function () {
                  (a.img = {}), this._footageLoaded();
                }.bind(this)
              ),
              a
            );
          }
          function u(l, a) {
            this.imagesLoadedCb = a;
            var h,
              f = l.length;
            for (h = 0; h < f; h += 1)
              l[h].layers ||
                (!l[h].t || l[h].t === 'seq'
                  ? ((this.totalImages += 1),
                    this.images.push(this._createImageData(l[h])))
                  : l[h].t === 3 &&
                    ((this.totalFootages += 1),
                    this.images.push(this.createFootageData(l[h]))));
          }
          function d(l) {
            this.path = l || '';
          }
          function x(l) {
            this.assetsPath = l || '';
          }
          function _(l) {
            for (var a = 0, h = this.images.length; a < h; ) {
              if (this.images[a].assetData === l) return this.images[a].img;
              a += 1;
            }
            return null;
          }
          function m() {
            (this.imagesLoadedCb = null), (this.images.length = 0);
          }
          function v() {
            return this.totalImages === this.loadedAssets;
          }
          function p() {
            return this.totalFootages === this.loadedFootagesCount;
          }
          function g(l, a) {
            l === 'svg'
              ? ((this._elementHelper = a),
                (this._createImageData = this.createImageData.bind(this)))
              : (this._createImageData = this.createImgData.bind(this));
          }
          function b() {
            (this._imageLoaded = t.bind(this)),
              (this._footageLoaded = r.bind(this)),
              (this.testImageLoaded = s.bind(this)),
              (this.createFootageData = c.bind(this)),
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
            (b.prototype = {
              loadAssets: u,
              setAssetsPath: x,
              setPath: d,
              loadedImages: v,
              loadedFootages: p,
              destroy: m,
              getAsset: _,
              createImgData: o,
              createImageData: n,
              imageLoaded: t,
              footageLoaded: r,
              setCacheType: g,
            }),
            b
          );
        })(),
        featureSupport = (function () {
          var e = { maskType: !0 };
          return (
            (/MSIE 10/i.test(navigator.userAgent) ||
              /MSIE 9/i.test(navigator.userAgent) ||
              /rv:11.0/i.test(navigator.userAgent) ||
              /Edge\/\d./i.test(navigator.userAgent)) &&
              (e.maskType = !1),
            e
          );
        })(),
        filtersFactory = (function () {
          var e = {};
          (e.createFilter = t), (e.createAlphaToLuminanceFilter = r);
          function t(i, s) {
            var n = createNS('filter');
            return (
              n.setAttribute('id', i),
              s !== !0 &&
                (n.setAttribute('filterUnits', 'objectBoundingBox'),
                n.setAttribute('x', '0%'),
                n.setAttribute('y', '0%'),
                n.setAttribute('width', '100%'),
                n.setAttribute('height', '100%')),
              n
            );
          }
          function r() {
            var i = createNS('feColorMatrix');
            return (
              i.setAttribute('type', 'matrix'),
              i.setAttribute('color-interpolation-filters', 'sRGB'),
              i.setAttribute(
                'values',
                '0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1'
              ),
              i
            );
          }
          return e;
        })();
      function TextAnimatorProperty(e, t, r) {
        (this._isFirstFrame = !0),
          (this._hasMaskedPath = !1),
          (this._frameId = -1),
          (this._textData = e),
          (this._renderType = t),
          (this._elem = r),
          (this._animatorsData = createSizedArray(this._textData.a.length)),
          (this._pathData = {}),
          (this._moreOptions = { alignment: {} }),
          (this.renderedLetters = []),
          (this.lettersChangedFlag = !1),
          this.initDynamicPropertyContainer(r);
      }
      (TextAnimatorProperty.prototype.searchProperties = function () {
        var e,
          t = this._textData.a.length,
          r,
          i = PropertyFactory.getProp;
        for (e = 0; e < t; e += 1)
          (r = this._textData.a[e]),
            (this._animatorsData[e] = new TextAnimatorDataProperty(
              this._elem,
              r,
              this
            ));
        this._textData.p && 'm' in this._textData.p
          ? ((this._pathData = {
              a: i(this._elem, this._textData.p.a, 0, 0, this),
              f: i(this._elem, this._textData.p.f, 0, 0, this),
              l: i(this._elem, this._textData.p.l, 0, 0, this),
              r: i(this._elem, this._textData.p.r, 0, 0, this),
              p: i(this._elem, this._textData.p.p, 0, 0, this),
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
        (TextAnimatorProperty.prototype.getMeasures = function (e, t) {
          if (
            ((this.lettersChangedFlag = t),
            !(
              !this._mdf &&
              !this._isFirstFrame &&
              !t &&
              (!this._hasMaskedPath || !this._pathData.m._mdf)
            ))
          ) {
            this._isFirstFrame = !1;
            var r = this._moreOptions.alignment.v,
              i = this._animatorsData,
              s = this._textData,
              n = this.mHelper,
              o = this._renderType,
              c = this.renderedLetters.length,
              u,
              d,
              x,
              _,
              m = e.l,
              v,
              p,
              g,
              b,
              l,
              a,
              h,
              f,
              y,
              k,
              w,
              P,
              F,
              D,
              T;
            if (this._hasMaskedPath) {
              if (
                ((T = this._pathData.m),
                !this._pathData.n || this._pathData._mdf)
              ) {
                var z = T.v;
                this._pathData.r.v && (z = z.reverse()),
                  (v = { tLength: 0, segments: [] }),
                  (_ = z._length - 1);
                var M;
                for (P = 0, x = 0; x < _; x += 1)
                  (M = bez.buildBezierData(
                    z.v[x],
                    z.v[x + 1],
                    [z.o[x][0] - z.v[x][0], z.o[x][1] - z.v[x][1]],
                    [
                      z.i[x + 1][0] - z.v[x + 1][0],
                      z.i[x + 1][1] - z.v[x + 1][1],
                    ]
                  )),
                    (v.tLength += M.segmentLength),
                    v.segments.push(M),
                    (P += M.segmentLength);
                (x = _),
                  T.v.c &&
                    ((M = bez.buildBezierData(
                      z.v[x],
                      z.v[0],
                      [z.o[x][0] - z.v[x][0], z.o[x][1] - z.v[x][1]],
                      [z.i[0][0] - z.v[0][0], z.i[0][1] - z.v[0][1]]
                    )),
                    (v.tLength += M.segmentLength),
                    v.segments.push(M),
                    (P += M.segmentLength)),
                  (this._pathData.pi = v);
              }
              if (
                ((v = this._pathData.pi),
                (p = this._pathData.f.v),
                (h = 0),
                (a = 1),
                (b = 0),
                (l = !0),
                (k = v.segments),
                p < 0 && T.v.c)
              )
                for (
                  v.tLength < Math.abs(p) && (p = -Math.abs(p) % v.tLength),
                    h = k.length - 1,
                    y = k[h].points,
                    a = y.length - 1;
                  p < 0;

                )
                  (p += y[a].partialLength),
                    (a -= 1),
                    a < 0 && ((h -= 1), (y = k[h].points), (a = y.length - 1));
              (y = k[h].points),
                (f = y[a - 1]),
                (g = y[a]),
                (w = g.partialLength);
            }
            (_ = m.length), (u = 0), (d = 0);
            var V = e.finalSize * 1.2 * 0.714,
              R = !0,
              C,
              S,
              E,
              A,
              L;
            A = i.length;
            var I,
              B = -1,
              H,
              G,
              J,
              Z = p,
              Q = h,
              ee = a,
              te = -1,
              re,
              K,
              se,
              O,
              X,
              ae,
              fe,
              le,
              oe = '',
              $ = this.defaultPropsArray,
              ne;
            if (e.j === 2 || e.j === 1) {
              var ie = 0,
                q = 0,
                W = e.j === 2 ? -0.5 : -1,
                N = 0,
                U = !0;
              for (x = 0; x < _; x += 1)
                if (m[x].n) {
                  for (ie && (ie += q); N < x; )
                    (m[N].animatorJustifyOffset = ie), (N += 1);
                  (ie = 0), (U = !0);
                } else {
                  for (E = 0; E < A; E += 1)
                    (C = i[E].a),
                      C.t.propType &&
                        (U && e.j === 2 && (q += C.t.v * W),
                        (S = i[E].s),
                        (I = S.getMult(m[x].anIndexes[E], s.a[E].s.totalChars)),
                        I.length
                          ? (ie += C.t.v * I[0] * W)
                          : (ie += C.t.v * I * W));
                  U = !1;
                }
              for (ie && (ie += q); N < x; )
                (m[N].animatorJustifyOffset = ie), (N += 1);
            }
            for (x = 0; x < _; x += 1) {
              if ((n.reset(), (re = 1), m[x].n))
                (u = 0),
                  (d += e.yOffset),
                  (d += R ? 1 : 0),
                  (p = Z),
                  (R = !1),
                  this._hasMaskedPath &&
                    ((h = Q),
                    (a = ee),
                    (y = k[h].points),
                    (f = y[a - 1]),
                    (g = y[a]),
                    (w = g.partialLength),
                    (b = 0)),
                  (oe = ''),
                  (le = ''),
                  (ae = ''),
                  (ne = ''),
                  ($ = this.defaultPropsArray);
              else {
                if (this._hasMaskedPath) {
                  if (te !== m[x].line) {
                    switch (e.j) {
                      case 1:
                        p += P - e.lineWidths[m[x].line];
                        break;
                      case 2:
                        p += (P - e.lineWidths[m[x].line]) / 2;
                        break;
                    }
                    te = m[x].line;
                  }
                  B !== m[x].ind &&
                    (m[B] && (p += m[B].extra),
                    (p += m[x].an / 2),
                    (B = m[x].ind)),
                    (p += r[0] * m[x].an * 0.005);
                  var j = 0;
                  for (E = 0; E < A; E += 1)
                    (C = i[E].a),
                      C.p.propType &&
                        ((S = i[E].s),
                        (I = S.getMult(m[x].anIndexes[E], s.a[E].s.totalChars)),
                        I.length
                          ? (j += C.p.v[0] * I[0])
                          : (j += C.p.v[0] * I)),
                      C.a.propType &&
                        ((S = i[E].s),
                        (I = S.getMult(m[x].anIndexes[E], s.a[E].s.totalChars)),
                        I.length
                          ? (j += C.a.v[0] * I[0])
                          : (j += C.a.v[0] * I));
                  for (
                    l = !0,
                      this._pathData.a.v &&
                        ((p =
                          m[0].an * 0.5 +
                          ((P -
                            this._pathData.f.v -
                            m[0].an * 0.5 -
                            m[m.length - 1].an * 0.5) *
                            B) /
                            (_ - 1)),
                        (p += this._pathData.f.v));
                    l;

                  )
                    b + w >= p + j || !y
                      ? ((F = (p + j - b) / g.partialLength),
                        (G = f.point[0] + (g.point[0] - f.point[0]) * F),
                        (J = f.point[1] + (g.point[1] - f.point[1]) * F),
                        n.translate(
                          -r[0] * m[x].an * 0.005,
                          -(r[1] * V) * 0.01
                        ),
                        (l = !1))
                      : y &&
                        ((b += g.partialLength),
                        (a += 1),
                        a >= y.length &&
                          ((a = 0),
                          (h += 1),
                          k[h]
                            ? (y = k[h].points)
                            : T.v.c
                            ? ((a = 0), (h = 0), (y = k[h].points))
                            : ((b -= g.partialLength), (y = null))),
                        y && ((f = g), (g = y[a]), (w = g.partialLength)));
                  (H = m[x].an / 2 - m[x].add), n.translate(-H, 0, 0);
                } else
                  (H = m[x].an / 2 - m[x].add),
                    n.translate(-H, 0, 0),
                    n.translate(-r[0] * m[x].an * 0.005, -r[1] * V * 0.01, 0);
                for (E = 0; E < A; E += 1)
                  (C = i[E].a),
                    C.t.propType &&
                      ((S = i[E].s),
                      (I = S.getMult(m[x].anIndexes[E], s.a[E].s.totalChars)),
                      (u !== 0 || e.j !== 0) &&
                        (this._hasMaskedPath
                          ? I.length
                            ? (p += C.t.v * I[0])
                            : (p += C.t.v * I)
                          : I.length
                          ? (u += C.t.v * I[0])
                          : (u += C.t.v * I)));
                for (
                  e.strokeWidthAnim && (se = e.sw || 0),
                    e.strokeColorAnim &&
                      (e.sc
                        ? (K = [e.sc[0], e.sc[1], e.sc[2]])
                        : (K = [0, 0, 0])),
                    e.fillColorAnim &&
                      e.fc &&
                      (O = [e.fc[0], e.fc[1], e.fc[2]]),
                    E = 0;
                  E < A;
                  E += 1
                )
                  (C = i[E].a),
                    C.a.propType &&
                      ((S = i[E].s),
                      (I = S.getMult(m[x].anIndexes[E], s.a[E].s.totalChars)),
                      I.length
                        ? n.translate(
                            -C.a.v[0] * I[0],
                            -C.a.v[1] * I[1],
                            C.a.v[2] * I[2]
                          )
                        : n.translate(
                            -C.a.v[0] * I,
                            -C.a.v[1] * I,
                            C.a.v[2] * I
                          ));
                for (E = 0; E < A; E += 1)
                  (C = i[E].a),
                    C.s.propType &&
                      ((S = i[E].s),
                      (I = S.getMult(m[x].anIndexes[E], s.a[E].s.totalChars)),
                      I.length
                        ? n.scale(
                            1 + (C.s.v[0] - 1) * I[0],
                            1 + (C.s.v[1] - 1) * I[1],
                            1
                          )
                        : n.scale(
                            1 + (C.s.v[0] - 1) * I,
                            1 + (C.s.v[1] - 1) * I,
                            1
                          ));
                for (E = 0; E < A; E += 1) {
                  if (
                    ((C = i[E].a),
                    (S = i[E].s),
                    (I = S.getMult(m[x].anIndexes[E], s.a[E].s.totalChars)),
                    C.sk.propType &&
                      (I.length
                        ? n.skewFromAxis(-C.sk.v * I[0], C.sa.v * I[1])
                        : n.skewFromAxis(-C.sk.v * I, C.sa.v * I)),
                    C.r.propType &&
                      (I.length
                        ? n.rotateZ(-C.r.v * I[2])
                        : n.rotateZ(-C.r.v * I)),
                    C.ry.propType &&
                      (I.length
                        ? n.rotateY(C.ry.v * I[1])
                        : n.rotateY(C.ry.v * I)),
                    C.rx.propType &&
                      (I.length
                        ? n.rotateX(C.rx.v * I[0])
                        : n.rotateX(C.rx.v * I)),
                    C.o.propType &&
                      (I.length
                        ? (re += (C.o.v * I[0] - re) * I[0])
                        : (re += (C.o.v * I - re) * I)),
                    e.strokeWidthAnim &&
                      C.sw.propType &&
                      (I.length ? (se += C.sw.v * I[0]) : (se += C.sw.v * I)),
                    e.strokeColorAnim && C.sc.propType)
                  )
                    for (X = 0; X < 3; X += 1)
                      I.length
                        ? (K[X] += (C.sc.v[X] - K[X]) * I[0])
                        : (K[X] += (C.sc.v[X] - K[X]) * I);
                  if (e.fillColorAnim && e.fc) {
                    if (C.fc.propType)
                      for (X = 0; X < 3; X += 1)
                        I.length
                          ? (O[X] += (C.fc.v[X] - O[X]) * I[0])
                          : (O[X] += (C.fc.v[X] - O[X]) * I);
                    C.fh.propType &&
                      (I.length
                        ? (O = addHueToRGB(O, C.fh.v * I[0]))
                        : (O = addHueToRGB(O, C.fh.v * I))),
                      C.fs.propType &&
                        (I.length
                          ? (O = addSaturationToRGB(O, C.fs.v * I[0]))
                          : (O = addSaturationToRGB(O, C.fs.v * I))),
                      C.fb.propType &&
                        (I.length
                          ? (O = addBrightnessToRGB(O, C.fb.v * I[0]))
                          : (O = addBrightnessToRGB(O, C.fb.v * I)));
                  }
                }
                for (E = 0; E < A; E += 1)
                  (C = i[E].a),
                    C.p.propType &&
                      ((S = i[E].s),
                      (I = S.getMult(m[x].anIndexes[E], s.a[E].s.totalChars)),
                      this._hasMaskedPath
                        ? I.length
                          ? n.translate(0, C.p.v[1] * I[0], -C.p.v[2] * I[1])
                          : n.translate(0, C.p.v[1] * I, -C.p.v[2] * I)
                        : I.length
                        ? n.translate(
                            C.p.v[0] * I[0],
                            C.p.v[1] * I[1],
                            -C.p.v[2] * I[2]
                          )
                        : n.translate(
                            C.p.v[0] * I,
                            C.p.v[1] * I,
                            -C.p.v[2] * I
                          ));
                if (
                  (e.strokeWidthAnim && (ae = se < 0 ? 0 : se),
                  e.strokeColorAnim &&
                    (fe =
                      'rgb(' +
                      Math.round(K[0] * 255) +
                      ',' +
                      Math.round(K[1] * 255) +
                      ',' +
                      Math.round(K[2] * 255) +
                      ')'),
                  e.fillColorAnim &&
                    e.fc &&
                    (le =
                      'rgb(' +
                      Math.round(O[0] * 255) +
                      ',' +
                      Math.round(O[1] * 255) +
                      ',' +
                      Math.round(O[2] * 255) +
                      ')'),
                  this._hasMaskedPath)
                ) {
                  if (
                    (n.translate(0, -e.ls),
                    n.translate(0, r[1] * V * 0.01 + d, 0),
                    this._pathData.p.v)
                  ) {
                    D = (g.point[1] - f.point[1]) / (g.point[0] - f.point[0]);
                    var he = (Math.atan(D) * 180) / Math.PI;
                    g.point[0] < f.point[0] && (he += 180),
                      n.rotate((-he * Math.PI) / 180);
                  }
                  n.translate(G, J, 0),
                    (p -= r[0] * m[x].an * 0.005),
                    m[x + 1] &&
                      B !== m[x + 1].ind &&
                      ((p += m[x].an / 2), (p += e.tr * 0.001 * e.finalSize));
                } else {
                  switch (
                    (n.translate(u, d, 0),
                    e.ps && n.translate(e.ps[0], e.ps[1] + e.ascent, 0),
                    e.j)
                  ) {
                    case 1:
                      n.translate(
                        m[x].animatorJustifyOffset +
                          e.justifyOffset +
                          (e.boxWidth - e.lineWidths[m[x].line]),
                        0,
                        0
                      );
                      break;
                    case 2:
                      n.translate(
                        m[x].animatorJustifyOffset +
                          e.justifyOffset +
                          (e.boxWidth - e.lineWidths[m[x].line]) / 2,
                        0,
                        0
                      );
                      break;
                  }
                  n.translate(0, -e.ls),
                    n.translate(H, 0, 0),
                    n.translate(r[0] * m[x].an * 0.005, r[1] * V * 0.01, 0),
                    (u += m[x].l + e.tr * 0.001 * e.finalSize);
                }
                o === 'html'
                  ? (oe = n.toCSS())
                  : o === 'svg'
                  ? (oe = n.to2dCSS())
                  : ($ = [
                      n.props[0],
                      n.props[1],
                      n.props[2],
                      n.props[3],
                      n.props[4],
                      n.props[5],
                      n.props[6],
                      n.props[7],
                      n.props[8],
                      n.props[9],
                      n.props[10],
                      n.props[11],
                      n.props[12],
                      n.props[13],
                      n.props[14],
                      n.props[15],
                    ]),
                  (ne = re);
              }
              c <= x
                ? ((L = new LetterProps(ne, ae, fe, le, oe, $)),
                  this.renderedLetters.push(L),
                  (c += 1),
                  (this.lettersChangedFlag = !0))
                : ((L = this.renderedLetters[x]),
                  (this.lettersChangedFlag =
                    L.update(ne, ae, fe, le, oe, $) ||
                    this.lettersChangedFlag));
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
        extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);
      function TextAnimatorDataProperty(e, t, r) {
        var i = { propType: !1 },
          s = PropertyFactory.getProp,
          n = t.a;
        (this.a = {
          r: n.r ? s(e, n.r, 0, degToRads, r) : i,
          rx: n.rx ? s(e, n.rx, 0, degToRads, r) : i,
          ry: n.ry ? s(e, n.ry, 0, degToRads, r) : i,
          sk: n.sk ? s(e, n.sk, 0, degToRads, r) : i,
          sa: n.sa ? s(e, n.sa, 0, degToRads, r) : i,
          s: n.s ? s(e, n.s, 1, 0.01, r) : i,
          a: n.a ? s(e, n.a, 1, 0, r) : i,
          o: n.o ? s(e, n.o, 0, 0.01, r) : i,
          p: n.p ? s(e, n.p, 1, 0, r) : i,
          sw: n.sw ? s(e, n.sw, 0, 0, r) : i,
          sc: n.sc ? s(e, n.sc, 1, 0, r) : i,
          fc: n.fc ? s(e, n.fc, 1, 0, r) : i,
          fh: n.fh ? s(e, n.fh, 0, 0, r) : i,
          fs: n.fs ? s(e, n.fs, 0, 0.01, r) : i,
          fb: n.fb ? s(e, n.fb, 0, 0.01, r) : i,
          t: n.t ? s(e, n.t, 0, 0, r) : i,
        }),
          (this.s = TextSelectorProp.getTextSelectorProp(e, t.s, r)),
          (this.s.t = t.s.t);
      }
      function LetterProps(e, t, r, i, s, n) {
        (this.o = e),
          (this.sw = t),
          (this.sc = r),
          (this.fc = i),
          (this.m = s),
          (this.p = n),
          (this._mdf = { o: !0, sw: !!t, sc: !!r, fc: !!i, m: !0, p: !0 });
      }
      LetterProps.prototype.update = function (e, t, r, i, s, n) {
        (this._mdf.o = !1),
          (this._mdf.sw = !1),
          (this._mdf.sc = !1),
          (this._mdf.fc = !1),
          (this._mdf.m = !1),
          (this._mdf.p = !1);
        var o = !1;
        return (
          this.o !== e && ((this.o = e), (this._mdf.o = !0), (o = !0)),
          this.sw !== t && ((this.sw = t), (this._mdf.sw = !0), (o = !0)),
          this.sc !== r && ((this.sc = r), (this._mdf.sc = !0), (o = !0)),
          this.fc !== i && ((this.fc = i), (this._mdf.fc = !0), (o = !0)),
          this.m !== s && ((this.m = s), (this._mdf.m = !0), (o = !0)),
          n.length &&
            (this.p[0] !== n[0] ||
              this.p[1] !== n[1] ||
              this.p[4] !== n[4] ||
              this.p[5] !== n[5] ||
              this.p[12] !== n[12] ||
              this.p[13] !== n[13]) &&
            ((this.p = n), (this._mdf.p = !0), (o = !0)),
          o
        );
      };
      function TextProperty(e, t) {
        (this._frameId = initialDefaultFrame),
          (this.pv = ''),
          (this.v = ''),
          (this.kf = !1),
          (this._isFirstFrame = !0),
          (this._mdf = !1),
          (this.data = t),
          (this.elem = e),
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
      (TextProperty.prototype.defaultBoxWidth = [0, 0]),
        (TextProperty.prototype.copyData = function (e, t) {
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e;
        }),
        (TextProperty.prototype.setCurrentData = function (e) {
          e.__complete || this.completeTextData(e),
            (this.currentData = e),
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
        (TextProperty.prototype.addEffect = function (e) {
          this.effectsSequence.push(e), this.elem.addDynamicProperty(this);
        }),
        (TextProperty.prototype.getValue = function (e) {
          if (
            !(
              (this.elem.globalData.frameId === this.frameId ||
                !this.effectsSequence.length) &&
              !e
            )
          ) {
            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
            var t = this.currentData,
              r = this.keysIndex;
            if (this.lock) {
              this.setCurrentData(this.currentData);
              return;
            }
            (this.lock = !0), (this._mdf = !1);
            var i,
              s = this.effectsSequence.length,
              n = e || this.data.d.k[this.keysIndex].s;
            for (i = 0; i < s; i += 1)
              r !== this.keysIndex
                ? (n = this.effectsSequence[i](n, n.t))
                : (n = this.effectsSequence[i](this.currentData, n.t));
            t !== n && this.setCurrentData(n),
              (this.v = this.currentData),
              (this.pv = this.v),
              (this.lock = !1),
              (this.frameId = this.elem.globalData.frameId);
          }
        }),
        (TextProperty.prototype.getKeyframeValue = function () {
          for (
            var e = this.data.d.k,
              t = this.elem.comp.renderedFrame,
              r = 0,
              i = e.length;
            r <= i - 1 && !(r === i - 1 || e[r + 1].t > t);

          )
            r += 1;
          return (
            this.keysIndex !== r && (this.keysIndex = r),
            this.data.d.k[this.keysIndex].s
          );
        }),
        (TextProperty.prototype.buildFinalText = function (e) {
          for (var t = [], r = 0, i = e.length, s, n, o = !1; r < i; )
            (s = e.charCodeAt(r)),
              FontManager.isCombinedCharacter(s)
                ? (t[t.length - 1] += e.charAt(r))
                : s >= 55296 && s <= 56319
                ? ((n = e.charCodeAt(r + 1)),
                  n >= 56320 && n <= 57343
                    ? (o || FontManager.isModifier(s, n)
                        ? ((t[t.length - 1] += e.substr(r, 2)), (o = !1))
                        : t.push(e.substr(r, 2)),
                      (r += 1))
                    : t.push(e.charAt(r)))
                : s > 56319
                ? ((n = e.charCodeAt(r + 1)),
                  FontManager.isZeroWidthJoiner(s, n)
                    ? ((o = !0), (t[t.length - 1] += e.substr(r, 2)), (r += 1))
                    : t.push(e.charAt(r)))
                : FontManager.isZeroWidthJoiner(s)
                ? ((t[t.length - 1] += e.charAt(r)), (o = !0))
                : t.push(e.charAt(r)),
              (r += 1);
          return t;
        }),
        (TextProperty.prototype.completeTextData = function (e) {
          e.__complete = !0;
          var t = this.elem.globalData.fontManager,
            r = this.data,
            i = [],
            s,
            n,
            o,
            c = 0,
            u,
            d = r.m.g,
            x = 0,
            _ = 0,
            m = 0,
            v = [],
            p = 0,
            g = 0,
            b,
            l,
            a = t.getFontByName(e.f),
            h,
            f = 0,
            y = getFontProperties(a);
          (e.fWeight = y.weight),
            (e.fStyle = y.style),
            (e.finalSize = e.s),
            (e.finalText = this.buildFinalText(e.t)),
            (n = e.finalText.length),
            (e.finalLineHeight = e.lh);
          var k = (e.tr / 1e3) * e.finalSize,
            w;
          if (e.sz)
            for (var P = !0, F = e.sz[0], D = e.sz[1], T, z; P; ) {
              (z = this.buildFinalText(e.t)),
                (T = 0),
                (p = 0),
                (n = z.length),
                (k = (e.tr / 1e3) * e.finalSize);
              var M = -1;
              for (s = 0; s < n; s += 1)
                (w = z[s].charCodeAt(0)),
                  (o = !1),
                  z[s] === ' '
                    ? (M = s)
                    : (w === 13 || w === 3) &&
                      ((p = 0),
                      (o = !0),
                      (T += e.finalLineHeight || e.finalSize * 1.2)),
                  t.chars
                    ? ((h = t.getCharData(z[s], a.fStyle, a.fFamily)),
                      (f = o ? 0 : (h.w * e.finalSize) / 100))
                    : (f = t.measureText(z[s], e.f, e.finalSize)),
                  p + f > F && z[s] !== ' '
                    ? (M === -1 ? (n += 1) : (s = M),
                      (T += e.finalLineHeight || e.finalSize * 1.2),
                      z.splice(s, M === s ? 1 : 0, '\r'),
                      (M = -1),
                      (p = 0))
                    : ((p += f), (p += k));
              (T += (a.ascent * e.finalSize) / 100),
                this.canResize && e.finalSize > this.minimumFontSize && D < T
                  ? ((e.finalSize -= 1),
                    (e.finalLineHeight = (e.finalSize * e.lh) / e.s))
                  : ((e.finalText = z), (n = e.finalText.length), (P = !1));
            }
          (p = -k), (f = 0);
          var V = 0,
            R;
          for (s = 0; s < n; s += 1)
            if (
              ((o = !1),
              (R = e.finalText[s]),
              (w = R.charCodeAt(0)),
              w === 13 || w === 3
                ? ((V = 0),
                  v.push(p),
                  (g = p > g ? p : g),
                  (p = -2 * k),
                  (u = ''),
                  (o = !0),
                  (m += 1))
                : (u = R),
              t.chars
                ? ((h = t.getCharData(
                    R,
                    a.fStyle,
                    t.getFontByName(e.f).fFamily
                  )),
                  (f = o ? 0 : (h.w * e.finalSize) / 100))
                : (f = t.measureText(u, e.f, e.finalSize)),
              R === ' ' ? (V += f + k) : ((p += f + k + V), (V = 0)),
              i.push({
                l: f,
                an: f,
                add: x,
                n: o,
                anIndexes: [],
                val: u,
                line: m,
                animatorJustifyOffset: 0,
              }),
              d == 2)
            ) {
              if (((x += f), u === '' || u === ' ' || s === n - 1)) {
                for ((u === '' || u === ' ') && (x -= f); _ <= s; )
                  (i[_].an = x), (i[_].ind = c), (i[_].extra = f), (_ += 1);
                (c += 1), (x = 0);
              }
            } else if (d == 3) {
              if (((x += f), u === '' || s === n - 1)) {
                for (u === '' && (x -= f); _ <= s; )
                  (i[_].an = x), (i[_].ind = c), (i[_].extra = f), (_ += 1);
                (x = 0), (c += 1);
              }
            } else (i[c].ind = c), (i[c].extra = 0), (c += 1);
          if (((e.l = i), (g = p > g ? p : g), v.push(p), e.sz))
            (e.boxWidth = e.sz[0]), (e.justifyOffset = 0);
          else
            switch (((e.boxWidth = g), e.j)) {
              case 1:
                e.justifyOffset = -e.boxWidth;
                break;
              case 2:
                e.justifyOffset = -e.boxWidth / 2;
                break;
              default:
                e.justifyOffset = 0;
            }
          e.lineWidths = v;
          var C = r.a,
            S,
            E;
          l = C.length;
          var A,
            L,
            I = [];
          for (b = 0; b < l; b += 1) {
            for (
              S = C[b],
                S.a.sc && (e.strokeColorAnim = !0),
                S.a.sw && (e.strokeWidthAnim = !0),
                (S.a.fc || S.a.fh || S.a.fs || S.a.fb) &&
                  (e.fillColorAnim = !0),
                L = 0,
                A = S.s.b,
                s = 0;
              s < n;
              s += 1
            )
              (E = i[s]),
                (E.anIndexes[b] = L),
                ((A == 1 && E.val !== '') ||
                  (A == 2 && E.val !== '' && E.val !== ' ') ||
                  (A == 3 && (E.n || E.val == ' ' || s == n - 1)) ||
                  (A == 4 && (E.n || s == n - 1))) &&
                  (S.s.rn === 1 && I.push(L), (L += 1));
            r.a[b].s.totalChars = L;
            var B = -1,
              H;
            if (S.s.rn === 1)
              for (s = 0; s < n; s += 1)
                (E = i[s]),
                  B != E.anIndexes[b] &&
                    ((B = E.anIndexes[b]),
                    (H = I.splice(Math.floor(Math.random() * I.length), 1)[0])),
                  (E.anIndexes[b] = H);
          }
          (e.yOffset = e.finalLineHeight || e.finalSize * 1.2),
            (e.ls = e.ls || 0),
            (e.ascent = (a.ascent * e.finalSize) / 100);
        }),
        (TextProperty.prototype.updateDocumentData = function (e, t) {
          t = t === void 0 ? this.keysIndex : t;
          var r = this.copyData({}, this.data.d.k[t].s);
          (r = this.copyData(r, e)),
            (this.data.d.k[t].s = r),
            this.recalculate(t),
            this.elem.addDynamicProperty(this);
        }),
        (TextProperty.prototype.recalculate = function (e) {
          var t = this.data.d.k[e].s;
          (t.__complete = !1),
            (this.keysIndex = 0),
            (this._isFirstFrame = !0),
            this.getValue(t);
        }),
        (TextProperty.prototype.canResizeFont = function (e) {
          (this.canResize = e),
            this.recalculate(this.keysIndex),
            this.elem.addDynamicProperty(this);
        }),
        (TextProperty.prototype.setMinimumFontSize = function (e) {
          (this.minimumFontSize = Math.floor(e) || 1),
            this.recalculate(this.keysIndex),
            this.elem.addDynamicProperty(this);
        });
      var TextSelectorProp = (function () {
          var e = Math.max,
            t = Math.min,
            r = Math.floor;
          function i(n, o) {
            (this._currentTextLength = -1),
              (this.k = !1),
              (this.data = o),
              (this.elem = n),
              (this.comp = n.comp),
              (this.finalS = 0),
              (this.finalE = 0),
              this.initDynamicPropertyContainer(n),
              (this.s = PropertyFactory.getProp(
                n,
                o.s || { k: 0 },
                0,
                0,
                this
              )),
              'e' in o
                ? (this.e = PropertyFactory.getProp(n, o.e, 0, 0, this))
                : (this.e = { v: 100 }),
              (this.o = PropertyFactory.getProp(
                n,
                o.o || { k: 0 },
                0,
                0,
                this
              )),
              (this.xe = PropertyFactory.getProp(
                n,
                o.xe || { k: 0 },
                0,
                0,
                this
              )),
              (this.ne = PropertyFactory.getProp(
                n,
                o.ne || { k: 0 },
                0,
                0,
                this
              )),
              (this.sm = PropertyFactory.getProp(
                n,
                o.sm || { k: 100 },
                0,
                0,
                this
              )),
              (this.a = PropertyFactory.getProp(n, o.a, 0, 0.01, this)),
              this.dynamicProperties.length || this.getValue();
          }
          (i.prototype = {
            getMult: function (n) {
              this._currentTextLength !==
                this.elem.textProperty.currentData.l.length && this.getValue();
              var o = 0,
                c = 0,
                u = 1,
                d = 1;
              this.ne.v > 0 ? (o = this.ne.v / 100) : (c = -this.ne.v / 100),
                this.xe.v > 0
                  ? (u = 1 - this.xe.v / 100)
                  : (d = 1 + this.xe.v / 100);
              var x = BezierFactory.getBezierEasing(o, c, u, d).get,
                _ = 0,
                m = this.finalS,
                v = this.finalE,
                p = this.data.sh;
              if (p === 2)
                v === m
                  ? (_ = n >= v ? 1 : 0)
                  : (_ = e(0, t(0.5 / (v - m) + (n - m) / (v - m), 1))),
                  (_ = x(_));
              else if (p === 3)
                v === m
                  ? (_ = n >= v ? 0 : 1)
                  : (_ = 1 - e(0, t(0.5 / (v - m) + (n - m) / (v - m), 1))),
                  (_ = x(_));
              else if (p === 4)
                v === m
                  ? (_ = 0)
                  : ((_ = e(0, t(0.5 / (v - m) + (n - m) / (v - m), 1))),
                    _ < 0.5 ? (_ *= 2) : (_ = 1 - 2 * (_ - 0.5))),
                  (_ = x(_));
              else if (p === 5) {
                if (v === m) _ = 0;
                else {
                  var g = v - m;
                  n = t(e(0, n + 0.5 - m), v - m);
                  var b = -g / 2 + n,
                    l = g / 2;
                  _ = Math.sqrt(1 - (b * b) / (l * l));
                }
                _ = x(_);
              } else
                p === 6
                  ? (v === m
                      ? (_ = 0)
                      : ((n = t(e(0, n + 0.5 - m), v - m)),
                        (_ =
                          (1 +
                            Math.cos(Math.PI + (Math.PI * 2 * n) / (v - m))) /
                          2)),
                    (_ = x(_)))
                  : (n >= r(m) &&
                      (n - m < 0
                        ? (_ = e(0, t(t(v, 1) - (m - n), 1)))
                        : (_ = e(0, t(v - n, 1)))),
                    (_ = x(_)));
              if (this.sm.v !== 100) {
                var a = this.sm.v * 0.01;
                a === 0 && (a = 1e-8);
                var h = 0.5 - a * 0.5;
                _ < h ? (_ = 0) : ((_ = (_ - h) / a), _ > 1 && (_ = 1));
              }
              return _ * this.a.v;
            },
            getValue: function (n) {
              this.iterateDynamicProperties(),
                (this._mdf = n || this._mdf),
                (this._currentTextLength =
                  this.elem.textProperty.currentData.l.length || 0),
                n && this.data.r === 2 && (this.e.v = this._currentTextLength);
              var o = this.data.r === 2 ? 1 : 100 / this.data.totalChars,
                c = this.o.v / o,
                u = this.s.v / o + c,
                d = this.e.v / o + c;
              if (u > d) {
                var x = u;
                (u = d), (d = x);
              }
              (this.finalS = u), (this.finalE = d);
            },
          }),
            extendPrototype([DynamicPropertyContainer], i);
          function s(n, o, c) {
            return new i(n, o, c);
          }
          return { getTextSelectorProp: s };
        })(),
        poolFactory = (function () {
          return function (e, t, r) {
            var i = 0,
              s = e,
              n = createSizedArray(s),
              o = { newElement: c, release: u };
            function c() {
              var d;
              return i ? ((i -= 1), (d = n[i])) : (d = t()), d;
            }
            function u(d) {
              i === s && ((n = pooling.double(n)), (s *= 2)),
                r && r(d),
                (n[i] = d),
                (i += 1);
            }
            return o;
          };
        })(),
        pooling = (function () {
          function e(t) {
            return t.concat(createSizedArray(t.length));
          }
          return { double: e };
        })(),
        pointPool = (function () {
          function e() {
            return createTypedArray('float32', 2);
          }
          return poolFactory(8, e);
        })(),
        shapePool = (function () {
          function e() {
            return new ShapePath();
          }
          function t(s) {
            var n = s._length,
              o;
            for (o = 0; o < n; o += 1)
              pointPool.release(s.v[o]),
                pointPool.release(s.i[o]),
                pointPool.release(s.o[o]),
                (s.v[o] = null),
                (s.i[o] = null),
                (s.o[o] = null);
            (s._length = 0), (s.c = !1);
          }
          function r(s) {
            var n = i.newElement(),
              o,
              c = s._length === void 0 ? s.v.length : s._length;
            for (n.setLength(c), n.c = s.c, o = 0; o < c; o += 1)
              n.setTripleAt(
                s.v[o][0],
                s.v[o][1],
                s.o[o][0],
                s.o[o][1],
                s.i[o][0],
                s.i[o][1],
                o
              );
            return n;
          }
          var i = poolFactory(4, e, t);
          return (i.clone = r), i;
        })(),
        shapeCollectionPool = (function () {
          var e = { newShapeCollection: s, release: n },
            t = 0,
            r = 4,
            i = createSizedArray(r);
          function s() {
            var o;
            return t ? ((t -= 1), (o = i[t])) : (o = new ShapeCollection()), o;
          }
          function n(o) {
            var c,
              u = o._length;
            for (c = 0; c < u; c += 1) shapePool.release(o.shapes[c]);
            (o._length = 0),
              t === r && ((i = pooling.double(i)), (r *= 2)),
              (i[t] = o),
              (t += 1);
          }
          return e;
        })(),
        segmentsLengthPool = (function () {
          function e() {
            return { lengths: [], totalLength: 0 };
          }
          function t(r) {
            var i,
              s = r.lengths.length;
            for (i = 0; i < s; i += 1) bezierLengthPool.release(r.lengths[i]);
            r.lengths.length = 0;
          }
          return poolFactory(8, e, t);
        })(),
        bezierLengthPool = (function () {
          function e() {
            return {
              addedLength: 0,
              percents: createTypedArray('float32', defaultCurveSegments),
              lengths: createTypedArray('float32', defaultCurveSegments),
            };
          }
          return poolFactory(8, e);
        })(),
        markerParser = (function () {
          function e(t) {
            for (
              var r = t.split(`\r
`),
                i = {},
                s,
                n = 0,
                o = 0;
              o < r.length;
              o += 1
            )
              (s = r[o].split(':')),
                s.length === 2 && ((i[s[0]] = s[1].trim()), (n += 1));
            if (n === 0) throw new Error();
            return i;
          }
          return function (t) {
            for (var r = [], i = 0; i < t.length; i += 1) {
              var s = t[i],
                n = { time: s.tm, duration: s.dr };
              try {
                n.payload = JSON.parse(t[i].cm);
              } catch {
                try {
                  n.payload = e(t[i].cm);
                } catch {
                  n.payload = { name: t[i] };
                }
              }
              r.push(n);
            }
            return r;
          };
        })();
      function BaseRenderer() {}
      (BaseRenderer.prototype.checkLayers = function (e) {
        var t,
          r = this.layers.length,
          i;
        for (this.completeLayers = !0, t = r - 1; t >= 0; t -= 1)
          this.elements[t] ||
            ((i = this.layers[t]),
            i.ip - i.st <= e - this.layers[t].st &&
              i.op - i.st > e - this.layers[t].st &&
              this.buildItem(t)),
            (this.completeLayers = this.elements[t] ? this.completeLayers : !1);
        this.checkPendingElements();
      }),
        (BaseRenderer.prototype.createItem = function (e) {
          switch (e.ty) {
            case 2:
              return this.createImage(e);
            case 0:
              return this.createComp(e);
            case 1:
              return this.createSolid(e);
            case 3:
              return this.createNull(e);
            case 4:
              return this.createShape(e);
            case 5:
              return this.createText(e);
            case 6:
              return this.createAudio(e);
            case 13:
              return this.createCamera(e);
            case 15:
              return this.createFootage(e);
            default:
              return this.createNull(e);
          }
        }),
        (BaseRenderer.prototype.createCamera = function () {
          throw new Error("You're using a 3d camera. Try the html renderer.");
        }),
        (BaseRenderer.prototype.createAudio = function (e) {
          return new AudioElement(e, this.globalData, this);
        }),
        (BaseRenderer.prototype.createFootage = function (e) {
          return new FootageElement(e, this.globalData, this);
        }),
        (BaseRenderer.prototype.buildAllItems = function () {
          var e,
            t = this.layers.length;
          for (e = 0; e < t; e += 1) this.buildItem(e);
          this.checkPendingElements();
        }),
        (BaseRenderer.prototype.includeLayers = function (e) {
          this.completeLayers = !1;
          var t,
            r = e.length,
            i,
            s = this.layers.length;
          for (t = 0; t < r; t += 1)
            for (i = 0; i < s; ) {
              if (this.layers[i].id === e[t].id) {
                this.layers[i] = e[t];
                break;
              }
              i += 1;
            }
        }),
        (BaseRenderer.prototype.setProjectInterface = function (e) {
          this.globalData.projectInterface = e;
        }),
        (BaseRenderer.prototype.initItems = function () {
          this.globalData.progressiveLoad || this.buildAllItems();
        }),
        (BaseRenderer.prototype.buildElementParenting = function (e, t, r) {
          for (
            var i = this.elements, s = this.layers, n = 0, o = s.length;
            n < o;

          )
            s[n].ind == t &&
              (!i[n] || i[n] === !0
                ? (this.buildItem(n), this.addPendingElement(e))
                : (r.push(i[n]),
                  i[n].setAsParent(),
                  s[n].parent !== void 0
                    ? this.buildElementParenting(e, s[n].parent, r)
                    : e.setHierarchy(r))),
              (n += 1);
        }),
        (BaseRenderer.prototype.addPendingElement = function (e) {
          this.pendingElements.push(e);
        }),
        (BaseRenderer.prototype.searchExtraCompositions = function (e) {
          var t,
            r = e.length;
          for (t = 0; t < r; t += 1)
            if (e[t].xt) {
              var i = this.createComp(e[t]);
              i.initExpressions(),
                this.globalData.projectInterface.registerComposition(i);
            }
        }),
        (BaseRenderer.prototype.setupGlobalData = function (e, t) {
          (this.globalData.fontManager = new FontManager()),
            this.globalData.fontManager.addChars(e.chars),
            this.globalData.fontManager.addFonts(e.fonts, t),
            (this.globalData.getAssetData =
              this.animationItem.getAssetData.bind(this.animationItem)),
            (this.globalData.getAssetsPath =
              this.animationItem.getAssetsPath.bind(this.animationItem)),
            (this.globalData.imageLoader = this.animationItem.imagePreloader),
            (this.globalData.audioController =
              this.animationItem.audioController),
            (this.globalData.frameId = 0),
            (this.globalData.frameRate = e.fr),
            (this.globalData.nm = e.nm),
            (this.globalData.compSize = { w: e.w, h: e.h });
        });
      function SVGRenderer(e, t) {
        (this.animationItem = e),
          (this.layers = null),
          (this.renderedFrame = -1),
          (this.svgElement = createNS('svg'));
        var r = '';
        if (t && t.title) {
          var i = createNS('title'),
            s = createElementID();
          i.setAttribute('id', s),
            (i.textContent = t.title),
            this.svgElement.appendChild(i),
            (r += s);
        }
        if (t && t.description) {
          var n = createNS('desc'),
            o = createElementID();
          n.setAttribute('id', o),
            (n.textContent = t.description),
            this.svgElement.appendChild(n),
            (r += ' ' + o);
        }
        r && this.svgElement.setAttribute('aria-labelledby', r);
        var c = createNS('defs');
        this.svgElement.appendChild(c);
        var u = createNS('g');
        this.svgElement.appendChild(u),
          (this.layerElement = u),
          (this.renderConfig = {
            preserveAspectRatio:
              (t && t.preserveAspectRatio) || 'xMidYMid meet',
            imagePreserveAspectRatio:
              (t && t.imagePreserveAspectRatio) || 'xMidYMid slice',
            contentVisibility: (t && t.contentVisibility) || 'visible',
            progressiveLoad: (t && t.progressiveLoad) || !1,
            hideOnTransparent: !(t && t.hideOnTransparent === !1),
            viewBoxOnly: (t && t.viewBoxOnly) || !1,
            viewBoxSize: (t && t.viewBoxSize) || !1,
            className: (t && t.className) || '',
            id: (t && t.id) || '',
            focusable: t && t.focusable,
            filterSize: {
              width: (t && t.filterSize && t.filterSize.width) || '100%',
              height: (t && t.filterSize && t.filterSize.height) || '100%',
              x: (t && t.filterSize && t.filterSize.x) || '0%',
              y: (t && t.filterSize && t.filterSize.y) || '0%',
            },
          }),
          (this.globalData = {
            _mdf: !1,
            frameNum: -1,
            defs: c,
            renderConfig: this.renderConfig,
          }),
          (this.elements = []),
          (this.pendingElements = []),
          (this.destroyed = !1),
          (this.rendererType = 'svg');
      }
      extendPrototype([BaseRenderer], SVGRenderer),
        (SVGRenderer.prototype.createNull = function (e) {
          return new NullElement(e, this.globalData, this);
        }),
        (SVGRenderer.prototype.createShape = function (e) {
          return new SVGShapeElement(e, this.globalData, this);
        }),
        (SVGRenderer.prototype.createText = function (e) {
          return new SVGTextLottieElement(e, this.globalData, this);
        }),
        (SVGRenderer.prototype.createImage = function (e) {
          return new IImageElement(e, this.globalData, this);
        }),
        (SVGRenderer.prototype.createComp = function (e) {
          return new SVGCompElement(e, this.globalData, this);
        }),
        (SVGRenderer.prototype.createSolid = function (e) {
          return new ISolidElement(e, this.globalData, this);
        }),
        (SVGRenderer.prototype.configAnimation = function (e) {
          this.svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg'),
            this.renderConfig.viewBoxSize
              ? this.svgElement.setAttribute(
                  'viewBox',
                  this.renderConfig.viewBoxSize
                )
              : this.svgElement.setAttribute(
                  'viewBox',
                  '0 0 ' + e.w + ' ' + e.h
                ),
            this.renderConfig.viewBoxOnly ||
              (this.svgElement.setAttribute('width', e.w),
              this.svgElement.setAttribute('height', e.h),
              (this.svgElement.style.width = '100%'),
              (this.svgElement.style.height = '100%'),
              (this.svgElement.style.transform = 'translate3d(0,0,0)'),
              (this.svgElement.style.contentVisibility =
                this.renderConfig.contentVisibility)),
            this.renderConfig.className &&
              this.svgElement.setAttribute(
                'class',
                this.renderConfig.className
              ),
            this.renderConfig.id &&
              this.svgElement.setAttribute('id', this.renderConfig.id),
            this.renderConfig.focusable !== void 0 &&
              this.svgElement.setAttribute(
                'focusable',
                this.renderConfig.focusable
              ),
            this.svgElement.setAttribute(
              'preserveAspectRatio',
              this.renderConfig.preserveAspectRatio
            ),
            this.animationItem.wrapper.appendChild(this.svgElement);
          var t = this.globalData.defs;
          this.setupGlobalData(e, t),
            (this.globalData.progressiveLoad =
              this.renderConfig.progressiveLoad),
            (this.data = e);
          var r = createNS('clipPath'),
            i = createNS('rect');
          i.setAttribute('width', e.w),
            i.setAttribute('height', e.h),
            i.setAttribute('x', 0),
            i.setAttribute('y', 0);
          var s = createElementID();
          r.setAttribute('id', s),
            r.appendChild(i),
            this.layerElement.setAttribute(
              'clip-path',
              'url(' + locationHref + '#' + s + ')'
            ),
            t.appendChild(r),
            (this.layers = e.layers),
            (this.elements = createSizedArray(e.layers.length));
        }),
        (SVGRenderer.prototype.destroy = function () {
          this.animationItem.wrapper &&
            (this.animationItem.wrapper.innerText = ''),
            (this.layerElement = null),
            (this.globalData.defs = null);
          var e,
            t = this.layers ? this.layers.length : 0;
          for (e = 0; e < t; e += 1)
            this.elements[e] && this.elements[e].destroy();
          (this.elements.length = 0),
            (this.destroyed = !0),
            (this.animationItem = null);
        }),
        (SVGRenderer.prototype.updateContainerSize = function () {}),
        (SVGRenderer.prototype.buildItem = function (e) {
          var t = this.elements;
          if (!(t[e] || this.layers[e].ty === 99)) {
            t[e] = !0;
            var r = this.createItem(this.layers[e]);
            (t[e] = r),
              expressionsPlugin &&
                (this.layers[e].ty === 0 &&
                  this.globalData.projectInterface.registerComposition(r),
                r.initExpressions()),
              this.appendElementInPos(r, e),
              this.layers[e].tt &&
                (!this.elements[e - 1] || this.elements[e - 1] === !0
                  ? (this.buildItem(e - 1), this.addPendingElement(r))
                  : r.setMatte(t[e - 1].layerId));
          }
        }),
        (SVGRenderer.prototype.checkPendingElements = function () {
          for (; this.pendingElements.length; ) {
            var e = this.pendingElements.pop();
            if ((e.checkParenting(), e.data.tt))
              for (var t = 0, r = this.elements.length; t < r; ) {
                if (this.elements[t] === e) {
                  e.setMatte(this.elements[t - 1].layerId);
                  break;
                }
                t += 1;
              }
          }
        }),
        (SVGRenderer.prototype.renderFrame = function (e) {
          if (!(this.renderedFrame === e || this.destroyed)) {
            e === null ? (e = this.renderedFrame) : (this.renderedFrame = e),
              (this.globalData.frameNum = e),
              (this.globalData.frameId += 1),
              (this.globalData.projectInterface.currentFrame = e),
              (this.globalData._mdf = !1);
            var t,
              r = this.layers.length;
            for (
              this.completeLayers || this.checkLayers(e), t = r - 1;
              t >= 0;
              t -= 1
            )
              (this.completeLayers || this.elements[t]) &&
                this.elements[t].prepareFrame(e - this.layers[t].st);
            if (this.globalData._mdf)
              for (t = 0; t < r; t += 1)
                (this.completeLayers || this.elements[t]) &&
                  this.elements[t].renderFrame();
          }
        }),
        (SVGRenderer.prototype.appendElementInPos = function (e, t) {
          var r = e.getBaseElement();
          if (!!r) {
            for (var i = 0, s; i < t; )
              this.elements[i] &&
                this.elements[i] !== !0 &&
                this.elements[i].getBaseElement() &&
                (s = this.elements[i].getBaseElement()),
                (i += 1);
            s
              ? this.layerElement.insertBefore(r, s)
              : this.layerElement.appendChild(r);
          }
        }),
        (SVGRenderer.prototype.hide = function () {
          this.layerElement.style.display = 'none';
        }),
        (SVGRenderer.prototype.show = function () {
          this.layerElement.style.display = 'block';
        });
      function CanvasRenderer(e, t) {
        (this.animationItem = e),
          (this.renderConfig = {
            clearCanvas: t && t.clearCanvas !== void 0 ? t.clearCanvas : !0,
            context: (t && t.context) || null,
            progressiveLoad: (t && t.progressiveLoad) || !1,
            preserveAspectRatio:
              (t && t.preserveAspectRatio) || 'xMidYMid meet',
            imagePreserveAspectRatio:
              (t && t.imagePreserveAspectRatio) || 'xMidYMid slice',
            contentVisibility: (t && t.contentVisibility) || 'visible',
            className: (t && t.className) || '',
            id: (t && t.id) || '',
          }),
          (this.renderConfig.dpr = (t && t.dpr) || 1),
          this.animationItem.wrapper &&
            (this.renderConfig.dpr =
              (t && t.dpr) || window.devicePixelRatio || 1),
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
      extendPrototype([BaseRenderer], CanvasRenderer),
        (CanvasRenderer.prototype.createShape = function (e) {
          return new CVShapeElement(e, this.globalData, this);
        }),
        (CanvasRenderer.prototype.createText = function (e) {
          return new CVTextElement(e, this.globalData, this);
        }),
        (CanvasRenderer.prototype.createImage = function (e) {
          return new CVImageElement(e, this.globalData, this);
        }),
        (CanvasRenderer.prototype.createComp = function (e) {
          return new CVCompElement(e, this.globalData, this);
        }),
        (CanvasRenderer.prototype.createSolid = function (e) {
          return new CVSolidElement(e, this.globalData, this);
        }),
        (CanvasRenderer.prototype.createNull =
          SVGRenderer.prototype.createNull),
        (CanvasRenderer.prototype.ctxTransform = function (e) {
          if (
            !(
              e[0] === 1 &&
              e[1] === 0 &&
              e[4] === 0 &&
              e[5] === 1 &&
              e[12] === 0 &&
              e[13] === 0
            )
          ) {
            if (!this.renderConfig.clearCanvas) {
              this.canvasContext.transform(
                e[0],
                e[1],
                e[4],
                e[5],
                e[12],
                e[13]
              );
              return;
            }
            this.transformMat.cloneFromProps(e);
            var t = this.contextData.cTr.props;
            this.transformMat.transform(
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
          }
        }),
        (CanvasRenderer.prototype.ctxOpacity = function (e) {
          if (!this.renderConfig.clearCanvas) {
            (this.canvasContext.globalAlpha *= e < 0 ? 0 : e),
              (this.globalData.currentGlobalAlpha = this.contextData.cO);
            return;
          }
          (this.contextData.cO *= e < 0 ? 0 : e),
            this.globalData.currentGlobalAlpha !== this.contextData.cO &&
              ((this.canvasContext.globalAlpha = this.contextData.cO),
              (this.globalData.currentGlobalAlpha = this.contextData.cO));
        }),
        (CanvasRenderer.prototype.reset = function () {
          if (!this.renderConfig.clearCanvas) {
            this.canvasContext.restore();
            return;
          }
          this.contextData.reset();
        }),
        (CanvasRenderer.prototype.save = function (e) {
          if (!this.renderConfig.clearCanvas) {
            this.canvasContext.save();
            return;
          }
          e && this.canvasContext.save();
          var t = this.contextData.cTr.props;
          this.contextData._length <= this.contextData.cArrPos &&
            this.contextData.duplicate();
          var r,
            i = this.contextData.saved[this.contextData.cArrPos];
          for (r = 0; r < 16; r += 1) i[r] = t[r];
          (this.contextData.savedOp[this.contextData.cArrPos] =
            this.contextData.cO),
            (this.contextData.cArrPos += 1);
        }),
        (CanvasRenderer.prototype.restore = function (e) {
          if (!this.renderConfig.clearCanvas) {
            this.canvasContext.restore();
            return;
          }
          e &&
            (this.canvasContext.restore(),
            (this.globalData.blendMode = 'source-over')),
            (this.contextData.cArrPos -= 1);
          var t = this.contextData.saved[this.contextData.cArrPos],
            r,
            i = this.contextData.cTr.props;
          for (r = 0; r < 16; r += 1) i[r] = t[r];
          this.canvasContext.setTransform(t[0], t[1], t[4], t[5], t[12], t[13]),
            (t = this.contextData.savedOp[this.contextData.cArrPos]),
            (this.contextData.cO = t),
            this.globalData.currentGlobalAlpha !== t &&
              ((this.canvasContext.globalAlpha = t),
              (this.globalData.currentGlobalAlpha = t));
        }),
        (CanvasRenderer.prototype.configAnimation = function (e) {
          if (this.animationItem.wrapper) {
            this.animationItem.container = createTag('canvas');
            var t = this.animationItem.container.style;
            (t.width = '100%'), (t.height = '100%');
            var r = '0px 0px 0px';
            (t.transformOrigin = r),
              (t.mozTransformOrigin = r),
              (t.webkitTransformOrigin = r),
              (t['-webkit-transform'] = r),
              (t.contentVisibility = this.renderConfig.contentVisibility),
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
          (this.data = e),
            (this.layers = e.layers),
            (this.transformCanvas = {
              w: e.w,
              h: e.h,
              sx: 0,
              sy: 0,
              tx: 0,
              ty: 0,
            }),
            this.setupGlobalData(e, document.body),
            (this.globalData.canvasContext = this.canvasContext),
            (this.globalData.renderer = this),
            (this.globalData.isDashed = !1),
            (this.globalData.progressiveLoad =
              this.renderConfig.progressiveLoad),
            (this.globalData.transformCanvas = this.transformCanvas),
            (this.elements = createSizedArray(e.layers.length)),
            this.updateContainerSize();
        }),
        (CanvasRenderer.prototype.updateContainerSize = function () {
          this.reset();
          var e, t;
          this.animationItem.wrapper && this.animationItem.container
            ? ((e = this.animationItem.wrapper.offsetWidth),
              (t = this.animationItem.wrapper.offsetHeight),
              this.animationItem.container.setAttribute(
                'width',
                e * this.renderConfig.dpr
              ),
              this.animationItem.container.setAttribute(
                'height',
                t * this.renderConfig.dpr
              ))
            : ((e = this.canvasContext.canvas.width * this.renderConfig.dpr),
              (t = this.canvasContext.canvas.height * this.renderConfig.dpr));
          var r, i;
          if (
            this.renderConfig.preserveAspectRatio.indexOf('meet') !== -1 ||
            this.renderConfig.preserveAspectRatio.indexOf('slice') !== -1
          ) {
            var s = this.renderConfig.preserveAspectRatio.split(' '),
              n = s[1] || 'meet',
              o = s[0] || 'xMidYMid',
              c = o.substr(0, 4),
              u = o.substr(4);
            (r = e / t),
              (i = this.transformCanvas.w / this.transformCanvas.h),
              (i > r && n === 'meet') || (i < r && n === 'slice')
                ? ((this.transformCanvas.sx =
                    e / (this.transformCanvas.w / this.renderConfig.dpr)),
                  (this.transformCanvas.sy =
                    e / (this.transformCanvas.w / this.renderConfig.dpr)))
                : ((this.transformCanvas.sx =
                    t / (this.transformCanvas.h / this.renderConfig.dpr)),
                  (this.transformCanvas.sy =
                    t / (this.transformCanvas.h / this.renderConfig.dpr))),
              c === 'xMid' &&
              ((i < r && n === 'meet') || (i > r && n === 'slice'))
                ? (this.transformCanvas.tx =
                    ((e -
                      this.transformCanvas.w * (t / this.transformCanvas.h)) /
                      2) *
                    this.renderConfig.dpr)
                : c === 'xMax' &&
                  ((i < r && n === 'meet') || (i > r && n === 'slice'))
                ? (this.transformCanvas.tx =
                    (e -
                      this.transformCanvas.w * (t / this.transformCanvas.h)) *
                    this.renderConfig.dpr)
                : (this.transformCanvas.tx = 0),
              u === 'YMid' &&
              ((i > r && n === 'meet') || (i < r && n === 'slice'))
                ? (this.transformCanvas.ty =
                    ((t -
                      this.transformCanvas.h * (e / this.transformCanvas.w)) /
                      2) *
                    this.renderConfig.dpr)
                : u === 'YMax' &&
                  ((i > r && n === 'meet') || (i < r && n === 'slice'))
                ? (this.transformCanvas.ty =
                    (t -
                      this.transformCanvas.h * (e / this.transformCanvas.w)) *
                    this.renderConfig.dpr)
                : (this.transformCanvas.ty = 0);
          } else
            this.renderConfig.preserveAspectRatio === 'none'
              ? ((this.transformCanvas.sx =
                  e / (this.transformCanvas.w / this.renderConfig.dpr)),
                (this.transformCanvas.sy =
                  t / (this.transformCanvas.h / this.renderConfig.dpr)),
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
          this.renderConfig.clearCanvas &&
            this.animationItem.wrapper &&
            (this.animationItem.wrapper.innerText = '');
          var e,
            t = this.layers ? this.layers.length : 0;
          for (e = t - 1; e >= 0; e -= 1)
            this.elements[e] && this.elements[e].destroy();
          (this.elements.length = 0),
            (this.globalData.canvasContext = null),
            (this.animationItem.container = null),
            (this.destroyed = !0);
        }),
        (CanvasRenderer.prototype.renderFrame = function (e, t) {
          if (
            !(
              (this.renderedFrame === e &&
                this.renderConfig.clearCanvas === !0 &&
                !t) ||
              this.destroyed ||
              e === -1
            )
          ) {
            (this.renderedFrame = e),
              (this.globalData.frameNum = e - this.animationItem._isFirstFrame),
              (this.globalData.frameId += 1),
              (this.globalData._mdf = !this.renderConfig.clearCanvas || t),
              (this.globalData.projectInterface.currentFrame = e);
            var r,
              i = this.layers.length;
            for (
              this.completeLayers || this.checkLayers(e), r = 0;
              r < i;
              r += 1
            )
              (this.completeLayers || this.elements[r]) &&
                this.elements[r].prepareFrame(e - this.layers[r].st);
            if (this.globalData._mdf) {
              for (
                this.renderConfig.clearCanvas === !0
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
              this.renderConfig.clearCanvas !== !0 && this.restore();
            }
          }
        }),
        (CanvasRenderer.prototype.buildItem = function (e) {
          var t = this.elements;
          if (!(t[e] || this.layers[e].ty === 99)) {
            var r = this.createItem(this.layers[e], this, this.globalData);
            (t[e] = r), r.initExpressions();
          }
        }),
        (CanvasRenderer.prototype.checkPendingElements = function () {
          for (; this.pendingElements.length; ) {
            var e = this.pendingElements.pop();
            e.checkParenting();
          }
        }),
        (CanvasRenderer.prototype.hide = function () {
          this.animationItem.container.style.display = 'none';
        }),
        (CanvasRenderer.prototype.show = function () {
          this.animationItem.container.style.display = 'block';
        });
      function HybridRenderer(e, t) {
        (this.animationItem = e),
          (this.layers = null),
          (this.renderedFrame = -1),
          (this.renderConfig = {
            className: (t && t.className) || '',
            imagePreserveAspectRatio:
              (t && t.imagePreserveAspectRatio) || 'xMidYMid slice',
            hideOnTransparent: !(t && t.hideOnTransparent === !1),
            filterSize: {
              width: (t && t.filterSize && t.filterSize.width) || '400%',
              height: (t && t.filterSize && t.filterSize.height) || '400%',
              x: (t && t.filterSize && t.filterSize.x) || '-100%',
              y: (t && t.filterSize && t.filterSize.y) || '-100%',
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
      extendPrototype([BaseRenderer], HybridRenderer),
        (HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem),
        (HybridRenderer.prototype.checkPendingElements = function () {
          for (; this.pendingElements.length; ) {
            var e = this.pendingElements.pop();
            e.checkParenting();
          }
        }),
        (HybridRenderer.prototype.appendElementInPos = function (e, t) {
          var r = e.getBaseElement();
          if (!!r) {
            var i = this.layers[t];
            if (!i.ddd || !this.supports3d)
              if (this.threeDElements) this.addTo3dContainer(r, t);
              else {
                for (var s = 0, n, o, c; s < t; )
                  this.elements[s] &&
                    this.elements[s] !== !0 &&
                    this.elements[s].getBaseElement &&
                    ((o = this.elements[s]),
                    (c = this.layers[s].ddd
                      ? this.getThreeDContainerByPos(s)
                      : o.getBaseElement()),
                    (n = c || n)),
                    (s += 1);
                n
                  ? (!i.ddd || !this.supports3d) &&
                    this.layerElement.insertBefore(r, n)
                  : (!i.ddd || !this.supports3d) &&
                    this.layerElement.appendChild(r);
              }
            else this.addTo3dContainer(r, t);
          }
        }),
        (HybridRenderer.prototype.createShape = function (e) {
          return this.supports3d
            ? new HShapeElement(e, this.globalData, this)
            : new SVGShapeElement(e, this.globalData, this);
        }),
        (HybridRenderer.prototype.createText = function (e) {
          return this.supports3d
            ? new HTextElement(e, this.globalData, this)
            : new SVGTextLottieElement(e, this.globalData, this);
        }),
        (HybridRenderer.prototype.createCamera = function (e) {
          return (
            (this.camera = new HCameraElement(e, this.globalData, this)),
            this.camera
          );
        }),
        (HybridRenderer.prototype.createImage = function (e) {
          return this.supports3d
            ? new HImageElement(e, this.globalData, this)
            : new IImageElement(e, this.globalData, this);
        }),
        (HybridRenderer.prototype.createComp = function (e) {
          return this.supports3d
            ? new HCompElement(e, this.globalData, this)
            : new SVGCompElement(e, this.globalData, this);
        }),
        (HybridRenderer.prototype.createSolid = function (e) {
          return this.supports3d
            ? new HSolidElement(e, this.globalData, this)
            : new ISolidElement(e, this.globalData, this);
        }),
        (HybridRenderer.prototype.createNull =
          SVGRenderer.prototype.createNull),
        (HybridRenderer.prototype.getThreeDContainerByPos = function (e) {
          for (var t = 0, r = this.threeDElements.length; t < r; ) {
            if (
              this.threeDElements[t].startPos <= e &&
              this.threeDElements[t].endPos >= e
            )
              return this.threeDElements[t].perspectiveElem;
            t += 1;
          }
          return null;
        }),
        (HybridRenderer.prototype.createThreeDContainer = function (e, t) {
          var r = createTag('div'),
            i,
            s;
          styleDiv(r);
          var n = createTag('div');
          if ((styleDiv(n), t === '3d')) {
            (i = r.style),
              (i.width = this.globalData.compSize.w + 'px'),
              (i.height = this.globalData.compSize.h + 'px');
            var o = '50% 50%';
            (i.webkitTransformOrigin = o),
              (i.mozTransformOrigin = o),
              (i.transformOrigin = o),
              (s = n.style);
            var c = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
            (s.transform = c), (s.webkitTransform = c);
          }
          r.appendChild(n);
          var u = {
            container: n,
            perspectiveElem: r,
            startPos: e,
            endPos: e,
            type: t,
          };
          return this.threeDElements.push(u), u;
        }),
        (HybridRenderer.prototype.build3dContainers = function () {
          var e,
            t = this.layers.length,
            r,
            i = '';
          for (e = 0; e < t; e += 1)
            this.layers[e].ddd && this.layers[e].ty !== 3
              ? (i !== '3d' &&
                  ((i = '3d'), (r = this.createThreeDContainer(e, '3d'))),
                (r.endPos = Math.max(r.endPos, e)))
              : (i !== '2d' &&
                  ((i = '2d'), (r = this.createThreeDContainer(e, '2d'))),
                (r.endPos = Math.max(r.endPos, e)));
          for (t = this.threeDElements.length, e = t - 1; e >= 0; e -= 1)
            this.resizerElem.appendChild(
              this.threeDElements[e].perspectiveElem
            );
        }),
        (HybridRenderer.prototype.addTo3dContainer = function (e, t) {
          for (var r = 0, i = this.threeDElements.length; r < i; ) {
            if (t <= this.threeDElements[r].endPos) {
              for (var s = this.threeDElements[r].startPos, n; s < t; )
                this.elements[s] &&
                  this.elements[s].getBaseElement &&
                  (n = this.elements[s].getBaseElement()),
                  (s += 1);
              n
                ? this.threeDElements[r].container.insertBefore(e, n)
                : this.threeDElements[r].container.appendChild(e);
              break;
            }
            r += 1;
          }
        }),
        (HybridRenderer.prototype.configAnimation = function (e) {
          var t = createTag('div'),
            r = this.animationItem.wrapper,
            i = t.style;
          (i.width = e.w + 'px'),
            (i.height = e.h + 'px'),
            (this.resizerElem = t),
            styleDiv(t),
            (i.transformStyle = 'flat'),
            (i.mozTransformStyle = 'flat'),
            (i.webkitTransformStyle = 'flat'),
            this.renderConfig.className &&
              t.setAttribute('class', this.renderConfig.className),
            r.appendChild(t),
            (i.overflow = 'hidden');
          var s = createNS('svg');
          s.setAttribute('width', '1'),
            s.setAttribute('height', '1'),
            styleDiv(s),
            this.resizerElem.appendChild(s);
          var n = createNS('defs');
          s.appendChild(n),
            (this.data = e),
            this.setupGlobalData(e, s),
            (this.globalData.defs = n),
            (this.layers = e.layers),
            (this.layerElement = this.resizerElem),
            this.build3dContainers(),
            this.updateContainerSize();
        }),
        (HybridRenderer.prototype.destroy = function () {
          this.animationItem.wrapper &&
            (this.animationItem.wrapper.innerText = ''),
            (this.animationItem.container = null),
            (this.globalData.defs = null);
          var e,
            t = this.layers ? this.layers.length : 0;
          for (e = 0; e < t; e += 1) this.elements[e].destroy();
          (this.elements.length = 0),
            (this.destroyed = !0),
            (this.animationItem = null);
        }),
        (HybridRenderer.prototype.updateContainerSize = function () {
          var e = this.animationItem.wrapper.offsetWidth,
            t = this.animationItem.wrapper.offsetHeight,
            r = e / t,
            i = this.globalData.compSize.w / this.globalData.compSize.h,
            s,
            n,
            o,
            c;
          i > r
            ? ((s = e / this.globalData.compSize.w),
              (n = e / this.globalData.compSize.w),
              (o = 0),
              (c =
                (t -
                  this.globalData.compSize.h *
                    (e / this.globalData.compSize.w)) /
                2))
            : ((s = t / this.globalData.compSize.h),
              (n = t / this.globalData.compSize.h),
              (o =
                (e -
                  this.globalData.compSize.w *
                    (t / this.globalData.compSize.h)) /
                2),
              (c = 0));
          var u = this.resizerElem.style;
          (u.webkitTransform =
            'matrix3d(' +
            s +
            ',0,0,0,0,' +
            n +
            ',0,0,0,0,1,0,' +
            o +
            ',' +
            c +
            ',0,1)'),
            (u.transform = u.webkitTransform);
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
            var e = this.globalData.compSize.w,
              t = this.globalData.compSize.h,
              r,
              i = this.threeDElements.length;
            for (r = 0; r < i; r += 1) {
              var s = this.threeDElements[r].perspectiveElem.style;
              (s.webkitPerspective =
                Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2)) + 'px'),
                (s.perspective = s.webkitPerspective);
            }
          }
        }),
        (HybridRenderer.prototype.searchExtraCompositions = function (e) {
          var t,
            r = e.length,
            i = createTag('div');
          for (t = 0; t < r; t += 1)
            if (e[t].xt) {
              var s = this.createComp(e[t], i, this.globalData.comp, null);
              s.initExpressions(),
                this.globalData.projectInterface.registerComposition(s);
            }
        });
      function MaskElement(e, t, r) {
        (this.data = e),
          (this.element = t),
          (this.globalData = r),
          (this.storedData = []),
          (this.masksProperties = this.data.masksProperties || []),
          (this.maskElement = null);
        var i = this.globalData.defs,
          s,
          n = this.masksProperties ? this.masksProperties.length : 0;
        (this.viewData = createSizedArray(n)), (this.solidPath = '');
        var o,
          c = this.masksProperties,
          u = 0,
          d = [],
          x,
          _,
          m = createElementID(),
          v,
          p,
          g,
          b,
          l = 'clipPath',
          a = 'clip-path';
        for (s = 0; s < n; s += 1)
          if (
            (((c[s].mode !== 'a' && c[s].mode !== 'n') ||
              c[s].inv ||
              c[s].o.k !== 100 ||
              c[s].o.x) &&
              ((l = 'mask'), (a = 'mask')),
            (c[s].mode === 's' || c[s].mode === 'i') && u === 0
              ? ((v = createNS('rect')),
                v.setAttribute('fill', '#ffffff'),
                v.setAttribute('width', this.element.comp.data.w || 0),
                v.setAttribute('height', this.element.comp.data.h || 0),
                d.push(v))
              : (v = null),
            (o = createNS('path')),
            c[s].mode === 'n')
          )
            (this.viewData[s] = {
              op: PropertyFactory.getProp(
                this.element,
                c[s].o,
                0,
                0.01,
                this.element
              ),
              prop: ShapePropertyFactory.getShapeProp(this.element, c[s], 3),
              elem: o,
              lastPath: '',
            }),
              i.appendChild(o);
          else {
            (u += 1),
              o.setAttribute('fill', c[s].mode === 's' ? '#000000' : '#ffffff'),
              o.setAttribute('clip-rule', 'nonzero');
            var h;
            if (
              (c[s].x.k !== 0
                ? ((l = 'mask'),
                  (a = 'mask'),
                  (b = PropertyFactory.getProp(
                    this.element,
                    c[s].x,
                    0,
                    null,
                    this.element
                  )),
                  (h = createElementID()),
                  (p = createNS('filter')),
                  p.setAttribute('id', h),
                  (g = createNS('feMorphology')),
                  g.setAttribute('operator', 'erode'),
                  g.setAttribute('in', 'SourceGraphic'),
                  g.setAttribute('radius', '0'),
                  p.appendChild(g),
                  i.appendChild(p),
                  o.setAttribute(
                    'stroke',
                    c[s].mode === 's' ? '#000000' : '#ffffff'
                  ))
                : ((g = null), (b = null)),
              (this.storedData[s] = {
                elem: o,
                x: b,
                expan: g,
                lastPath: '',
                lastOperator: '',
                filterId: h,
                lastRadius: 0,
              }),
              c[s].mode === 'i')
            ) {
              _ = d.length;
              var f = createNS('g');
              for (x = 0; x < _; x += 1) f.appendChild(d[x]);
              var y = createNS('mask');
              y.setAttribute('mask-type', 'alpha'),
                y.setAttribute('id', m + '_' + u),
                y.appendChild(o),
                i.appendChild(y),
                f.setAttribute(
                  'mask',
                  'url(' + locationHref + '#' + m + '_' + u + ')'
                ),
                (d.length = 0),
                d.push(f);
            } else d.push(o);
            c[s].inv &&
              !this.solidPath &&
              (this.solidPath = this.createLayerSolidPath()),
              (this.viewData[s] = {
                elem: o,
                lastPath: '',
                op: PropertyFactory.getProp(
                  this.element,
                  c[s].o,
                  0,
                  0.01,
                  this.element
                ),
                prop: ShapePropertyFactory.getShapeProp(this.element, c[s], 3),
                invRect: v,
              }),
              this.viewData[s].prop.k ||
                this.drawPath(c[s], this.viewData[s].prop.v, this.viewData[s]);
          }
        for (this.maskElement = createNS(l), n = d.length, s = 0; s < n; s += 1)
          this.maskElement.appendChild(d[s]);
        u > 0 &&
          (this.maskElement.setAttribute('id', m),
          this.element.maskedElement.setAttribute(
            a,
            'url(' + locationHref + '#' + m + ')'
          ),
          i.appendChild(this.maskElement)),
          this.viewData.length && this.element.addRenderableComponent(this);
      }
      (MaskElement.prototype.getMaskProperty = function (e) {
        return this.viewData[e].prop;
      }),
        (MaskElement.prototype.renderFrame = function (e) {
          var t = this.element.finalTransform.mat,
            r,
            i = this.masksProperties.length;
          for (r = 0; r < i; r += 1)
            if (
              ((this.viewData[r].prop._mdf || e) &&
                this.drawPath(
                  this.masksProperties[r],
                  this.viewData[r].prop.v,
                  this.viewData[r]
                ),
              (this.viewData[r].op._mdf || e) &&
                this.viewData[r].elem.setAttribute(
                  'fill-opacity',
                  this.viewData[r].op.v
                ),
              this.masksProperties[r].mode !== 'n' &&
                (this.viewData[r].invRect &&
                  (this.element.finalTransform.mProp._mdf || e) &&
                  this.viewData[r].invRect.setAttribute(
                    'transform',
                    t.getInverseMatrix().to2dCSS()
                  ),
                this.storedData[r].x && (this.storedData[r].x._mdf || e)))
            ) {
              var s = this.storedData[r].expan;
              this.storedData[r].x.v < 0
                ? (this.storedData[r].lastOperator !== 'erode' &&
                    ((this.storedData[r].lastOperator = 'erode'),
                    this.storedData[r].elem.setAttribute(
                      'filter',
                      'url(' +
                        locationHref +
                        '#' +
                        this.storedData[r].filterId +
                        ')'
                    )),
                  s.setAttribute('radius', -this.storedData[r].x.v))
                : (this.storedData[r].lastOperator !== 'dilate' &&
                    ((this.storedData[r].lastOperator = 'dilate'),
                    this.storedData[r].elem.setAttribute('filter', null)),
                  this.storedData[r].elem.setAttribute(
                    'stroke-width',
                    this.storedData[r].x.v * 2
                  ));
            }
        }),
        (MaskElement.prototype.getMaskelement = function () {
          return this.maskElement;
        }),
        (MaskElement.prototype.createLayerSolidPath = function () {
          var e = 'M0,0 ';
          return (
            (e += ' h' + this.globalData.compSize.w),
            (e += ' v' + this.globalData.compSize.h),
            (e += ' h-' + this.globalData.compSize.w),
            (e += ' v-' + this.globalData.compSize.h + ' '),
            e
          );
        }),
        (MaskElement.prototype.drawPath = function (e, t, r) {
          var i = ' M' + t.v[0][0] + ',' + t.v[0][1],
            s,
            n;
          for (n = t._length, s = 1; s < n; s += 1)
            i +=
              ' C' +
              t.o[s - 1][0] +
              ',' +
              t.o[s - 1][1] +
              ' ' +
              t.i[s][0] +
              ',' +
              t.i[s][1] +
              ' ' +
              t.v[s][0] +
              ',' +
              t.v[s][1];
          if (
            (t.c &&
              n > 1 &&
              (i +=
                ' C' +
                t.o[s - 1][0] +
                ',' +
                t.o[s - 1][1] +
                ' ' +
                t.i[0][0] +
                ',' +
                t.i[0][1] +
                ' ' +
                t.v[0][0] +
                ',' +
                t.v[0][1]),
            r.lastPath !== i)
          ) {
            var o = '';
            r.elem &&
              (t.c && (o = e.inv ? this.solidPath + i : i),
              r.elem.setAttribute('d', o)),
              (r.lastPath = i);
          }
        }),
        (MaskElement.prototype.destroy = function () {
          (this.element = null),
            (this.globalData = null),
            (this.maskElement = null),
            (this.data = null),
            (this.masksProperties = null);
        });
      function HierarchyElement() {}
      HierarchyElement.prototype = {
        initHierarchy: function () {
          (this.hierarchy = []), (this._isParent = !1), this.checkParenting();
        },
        setHierarchy: function (e) {
          this.hierarchy = e;
        },
        setAsParent: function () {
          this._isParent = !0;
        },
        checkParenting: function () {
          this.data.parent !== void 0 &&
            this.comp.buildElementParenting(this, this.data.parent, []);
        },
      };
      function FrameElement() {}
      FrameElement.prototype = {
        initFrame: function () {
          (this._isFirstFrame = !1),
            (this.dynamicProperties = []),
            (this._mdf = !1);
        },
        prepareProperties: function (e, t) {
          var r,
            i = this.dynamicProperties.length;
          for (r = 0; r < i; r += 1)
            (t ||
              (this._isParent &&
                this.dynamicProperties[r].propType === 'transform')) &&
              (this.dynamicProperties[r].getValue(),
              this.dynamicProperties[r]._mdf &&
                ((this.globalData._mdf = !0), (this._mdf = !0)));
        },
        addDynamicProperty: function (e) {
          this.dynamicProperties.indexOf(e) === -1 &&
            this.dynamicProperties.push(e);
        },
      };
      function TransformElement() {}
      TransformElement.prototype = {
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
            this.data.ty !== 11;
        },
        renderTransform: function () {
          if (
            ((this.finalTransform._opMdf =
              this.finalTransform.mProp.o._mdf || this._isFirstFrame),
            (this.finalTransform._matMdf =
              this.finalTransform.mProp._mdf || this._isFirstFrame),
            this.hierarchy)
          ) {
            var e,
              t = this.finalTransform.mat,
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
                e = this.finalTransform.mProp.v.props,
                  t.cloneFromProps(e),
                  r = 0;
                r < i;
                r += 1
              )
                (e = this.hierarchy[r].finalTransform.mProp.v.props),
                  t.transform(
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
                  );
          }
        },
        globalToLocal: function (e) {
          var t = [];
          t.push(this.finalTransform);
          for (var r = !0, i = this.comp; r; )
            i.finalTransform
              ? (i.data.hasMask && t.splice(0, 0, i.finalTransform),
                (i = i.comp))
              : (r = !1);
          var s,
            n = t.length,
            o;
          for (s = 0; s < n; s += 1)
            (o = t[s].mat.applyToPointArray(0, 0, 0)),
              (e = [e[0] - o[0], e[1] - o[1], 0]);
          return e;
        },
        mHelper: new Matrix(),
      };
      function RenderableElement() {}
      RenderableElement.prototype = {
        initRenderable: function () {
          (this.isInRange = !1),
            (this.hidden = !1),
            (this.isTransparent = !1),
            (this.renderableComponents = []);
        },
        addRenderableComponent: function (e) {
          this.renderableComponents.indexOf(e) === -1 &&
            this.renderableComponents.push(e);
        },
        removeRenderableComponent: function (e) {
          this.renderableComponents.indexOf(e) !== -1 &&
            this.renderableComponents.splice(
              this.renderableComponents.indexOf(e),
              1
            );
        },
        prepareRenderableFrame: function (e) {
          this.checkLayerLimits(e);
        },
        checkTransparency: function () {
          this.finalTransform.mProp.o.v <= 0
            ? !this.isTransparent &&
              this.globalData.renderConfig.hideOnTransparent &&
              ((this.isTransparent = !0), this.hide())
            : this.isTransparent && ((this.isTransparent = !1), this.show());
        },
        checkLayerLimits: function (e) {
          this.data.ip - this.data.st <= e && this.data.op - this.data.st > e
            ? this.isInRange !== !0 &&
              ((this.globalData._mdf = !0),
              (this._mdf = !0),
              (this.isInRange = !0),
              this.show())
            : this.isInRange !== !1 &&
              ((this.globalData._mdf = !0), (this.isInRange = !1), this.hide());
        },
        renderRenderable: function () {
          var e,
            t = this.renderableComponents.length;
          for (e = 0; e < t; e += 1)
            this.renderableComponents[e].renderFrame(this._isFirstFrame);
        },
        sourceRectAtTime: function () {
          return { top: 0, left: 0, width: 100, height: 100 };
        },
        getLayerSize: function () {
          return this.data.ty === 5
            ? { w: this.data.textData.width, h: this.data.textData.height }
            : { w: this.data.width, h: this.data.height };
        },
      };
      function RenderableDOMElement() {}
      (function () {
        var e = {
          initElement: function (t, r, i) {
            this.initFrame(),
              this.initBaseData(t, r, i),
              this.initTransform(t, r, i),
              this.initHierarchy(),
              this.initRenderable(),
              this.initRendererElement(),
              this.createContainerElements(),
              this.createRenderableComponents(),
              this.createContent(),
              this.hide();
          },
          hide: function () {
            if (!this.hidden && (!this.isInRange || this.isTransparent)) {
              var t = this.baseElement || this.layerElement;
              (t.style.display = 'none'), (this.hidden = !0);
            }
          },
          show: function () {
            if (this.isInRange && !this.isTransparent) {
              if (!this.data.hd) {
                var t = this.baseElement || this.layerElement;
                t.style.display = 'block';
              }
              (this.hidden = !1), (this._isFirstFrame = !0);
            }
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
        };
        extendPrototype(
          [RenderableElement, createProxyFunction(e)],
          RenderableDOMElement
        );
      })();
      function ProcessedElement(e, t) {
        (this.elem = e), (this.pos = t);
      }
      function SVGStyleData(e, t) {
        (this.data = e),
          (this.type = e.ty),
          (this.d = ''),
          (this.lvl = t),
          (this._mdf = !1),
          (this.closed = e.hd === !0),
          (this.pElem = createNS('path')),
          (this.msElem = null);
      }
      SVGStyleData.prototype.reset = function () {
        (this.d = ''), (this._mdf = !1);
      };
      function SVGShapeData(e, t, r) {
        (this.caches = []),
          (this.styles = []),
          (this.transformers = e),
          (this.lStr = ''),
          (this.sh = r),
          (this.lvl = t),
          (this._isAnimated = !!r.k);
        for (var i = 0, s = e.length; i < s; ) {
          if (e[i].mProps.dynamicProperties.length) {
            this._isAnimated = !0;
            break;
          }
          i += 1;
        }
      }
      SVGShapeData.prototype.setAsAnimated = function () {
        this._isAnimated = !0;
      };
      function SVGTransformData(e, t, r) {
        (this.transform = { mProps: e, op: t, container: r }),
          (this.elements = []),
          (this._isAnimated =
            this.transform.mProps.dynamicProperties.length ||
            this.transform.op.effectsSequence.length);
      }
      function SVGStrokeStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e),
          (this.getValue = this.iterateDynamicProperties),
          (this.o = PropertyFactory.getProp(e, t.o, 0, 0.01, this)),
          (this.w = PropertyFactory.getProp(e, t.w, 0, null, this)),
          (this.d = new DashProperty(e, t.d || {}, 'svg', this)),
          (this.c = PropertyFactory.getProp(e, t.c, 1, 255, this)),
          (this.style = r),
          (this._isAnimated = !!this._isAnimated);
      }
      extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);
      function SVGFillStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e),
          (this.getValue = this.iterateDynamicProperties),
          (this.o = PropertyFactory.getProp(e, t.o, 0, 0.01, this)),
          (this.c = PropertyFactory.getProp(e, t.c, 1, 255, this)),
          (this.style = r);
      }
      extendPrototype([DynamicPropertyContainer], SVGFillStyleData);
      function SVGGradientFillStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e),
          (this.getValue = this.iterateDynamicProperties),
          this.initGradientData(e, t, r);
      }
      (SVGGradientFillStyleData.prototype.initGradientData = function (
        e,
        t,
        r
      ) {
        (this.o = PropertyFactory.getProp(e, t.o, 0, 0.01, this)),
          (this.s = PropertyFactory.getProp(e, t.s, 1, null, this)),
          (this.e = PropertyFactory.getProp(e, t.e, 1, null, this)),
          (this.h = PropertyFactory.getProp(e, t.h || { k: 0 }, 0, 0.01, this)),
          (this.a = PropertyFactory.getProp(
            e,
            t.a || { k: 0 },
            0,
            degToRads,
            this
          )),
          (this.g = new GradientProperty(e, t.g, this)),
          (this.style = r),
          (this.stops = []),
          this.setGradientData(r.pElem, t),
          this.setGradientOpacity(t, r),
          (this._isAnimated = !!this._isAnimated);
      }),
        (SVGGradientFillStyleData.prototype.setGradientData = function (e, t) {
          var r = createElementID(),
            i = createNS(t.t === 1 ? 'linearGradient' : 'radialGradient');
          i.setAttribute('id', r),
            i.setAttribute('spreadMethod', 'pad'),
            i.setAttribute('gradientUnits', 'userSpaceOnUse');
          var s = [],
            n,
            o,
            c;
          for (c = t.g.p * 4, o = 0; o < c; o += 4)
            (n = createNS('stop')), i.appendChild(n), s.push(n);
          e.setAttribute(
            t.ty === 'gf' ? 'fill' : 'stroke',
            'url(' + locationHref + '#' + r + ')'
          ),
            (this.gf = i),
            (this.cst = s);
        }),
        (SVGGradientFillStyleData.prototype.setGradientOpacity = function (
          e,
          t
        ) {
          if (this.g._hasOpacity && !this.g._collapsable) {
            var r,
              i,
              s,
              n = createNS('mask'),
              o = createNS('path');
            n.appendChild(o);
            var c = createElementID(),
              u = createElementID();
            n.setAttribute('id', u);
            var d = createNS(e.t === 1 ? 'linearGradient' : 'radialGradient');
            d.setAttribute('id', c),
              d.setAttribute('spreadMethod', 'pad'),
              d.setAttribute('gradientUnits', 'userSpaceOnUse'),
              (s = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length);
            var x = this.stops;
            for (i = e.g.p * 4; i < s; i += 2)
              (r = createNS('stop')),
                r.setAttribute('stop-color', 'rgb(255,255,255)'),
                d.appendChild(r),
                x.push(r);
            o.setAttribute(
              e.ty === 'gf' ? 'fill' : 'stroke',
              'url(' + locationHref + '#' + c + ')'
            ),
              e.ty === 'gs' &&
                (o.setAttribute('stroke-linecap', lineCapEnum[e.lc || 2]),
                o.setAttribute('stroke-linejoin', lineJoinEnum[e.lj || 2]),
                e.lj === 1 && o.setAttribute('stroke-miterlimit', e.ml)),
              (this.of = d),
              (this.ms = n),
              (this.ost = x),
              (this.maskId = u),
              (t.msElem = o);
          }
        }),
        extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);
      function SVGGradientStrokeStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e),
          (this.getValue = this.iterateDynamicProperties),
          (this.w = PropertyFactory.getProp(e, t.w, 0, null, this)),
          (this.d = new DashProperty(e, t.d || {}, 'svg', this)),
          this.initGradientData(e, t, r),
          (this._isAnimated = !!this._isAnimated);
      }
      extendPrototype(
        [SVGGradientFillStyleData, DynamicPropertyContainer],
        SVGGradientStrokeStyleData
      );
      function ShapeGroupData() {
        (this.it = []), (this.prevViewData = []), (this.gr = createNS('g'));
      }
      var SVGElementsRenderer = (function () {
        var e = new Matrix(),
          t = new Matrix(),
          r = { createRenderFunction: i };
        function i(x) {
          switch (x.ty) {
            case 'fl':
              return o;
            case 'gf':
              return u;
            case 'gs':
              return c;
            case 'st':
              return d;
            case 'sh':
            case 'el':
            case 'rc':
            case 'sr':
              return n;
            case 'tr':
              return s;
            default:
              return null;
          }
        }
        function s(x, _, m) {
          (m || _.transform.op._mdf) &&
            _.transform.container.setAttribute('opacity', _.transform.op.v),
            (m || _.transform.mProps._mdf) &&
              _.transform.container.setAttribute(
                'transform',
                _.transform.mProps.v.to2dCSS()
              );
        }
        function n(x, _, m) {
          var v,
            p,
            g,
            b,
            l,
            a,
            h = _.styles.length,
            f = _.lvl,
            y,
            k,
            w,
            P,
            F;
          for (a = 0; a < h; a += 1) {
            if (((b = _.sh._mdf || m), _.styles[a].lvl < f)) {
              for (
                k = t.reset(),
                  P = f - _.styles[a].lvl,
                  F = _.transformers.length - 1;
                !b && P > 0;

              )
                (b = _.transformers[F].mProps._mdf || b), (P -= 1), (F -= 1);
              if (b)
                for (
                  P = f - _.styles[a].lvl, F = _.transformers.length - 1;
                  P > 0;

                )
                  (w = _.transformers[F].mProps.v.props),
                    k.transform(
                      w[0],
                      w[1],
                      w[2],
                      w[3],
                      w[4],
                      w[5],
                      w[6],
                      w[7],
                      w[8],
                      w[9],
                      w[10],
                      w[11],
                      w[12],
                      w[13],
                      w[14],
                      w[15]
                    ),
                    (P -= 1),
                    (F -= 1);
            } else k = e;
            if (((y = _.sh.paths), (p = y._length), b)) {
              for (g = '', v = 0; v < p; v += 1)
                (l = y.shapes[v]),
                  l &&
                    l._length &&
                    (g += buildShapeString(l, l._length, l.c, k));
              _.caches[a] = g;
            } else g = _.caches[a];
            (_.styles[a].d += x.hd === !0 ? '' : g),
              (_.styles[a]._mdf = b || _.styles[a]._mdf);
          }
        }
        function o(x, _, m) {
          var v = _.style;
          (_.c._mdf || m) &&
            v.pElem.setAttribute(
              'fill',
              'rgb(' +
                bmFloor(_.c.v[0]) +
                ',' +
                bmFloor(_.c.v[1]) +
                ',' +
                bmFloor(_.c.v[2]) +
                ')'
            ),
            (_.o._mdf || m) && v.pElem.setAttribute('fill-opacity', _.o.v);
        }
        function c(x, _, m) {
          u(x, _, m), d(x, _, m);
        }
        function u(x, _, m) {
          var v = _.gf,
            p = _.g._hasOpacity,
            g = _.s.v,
            b = _.e.v;
          if (_.o._mdf || m) {
            var l = x.ty === 'gf' ? 'fill-opacity' : 'stroke-opacity';
            _.style.pElem.setAttribute(l, _.o.v);
          }
          if (_.s._mdf || m) {
            var a = x.t === 1 ? 'x1' : 'cx',
              h = a === 'x1' ? 'y1' : 'cy';
            v.setAttribute(a, g[0]),
              v.setAttribute(h, g[1]),
              p &&
                !_.g._collapsable &&
                (_.of.setAttribute(a, g[0]), _.of.setAttribute(h, g[1]));
          }
          var f, y, k, w;
          if (_.g._cmdf || m) {
            f = _.cst;
            var P = _.g.c;
            for (k = f.length, y = 0; y < k; y += 1)
              (w = f[y]),
                w.setAttribute('offset', P[y * 4] + '%'),
                w.setAttribute(
                  'stop-color',
                  'rgb(' +
                    P[y * 4 + 1] +
                    ',' +
                    P[y * 4 + 2] +
                    ',' +
                    P[y * 4 + 3] +
                    ')'
                );
          }
          if (p && (_.g._omdf || m)) {
            var F = _.g.o;
            for (
              _.g._collapsable ? (f = _.cst) : (f = _.ost), k = f.length, y = 0;
              y < k;
              y += 1
            )
              (w = f[y]),
                _.g._collapsable || w.setAttribute('offset', F[y * 2] + '%'),
                w.setAttribute('stop-opacity', F[y * 2 + 1]);
          }
          if (x.t === 1)
            (_.e._mdf || m) &&
              (v.setAttribute('x2', b[0]),
              v.setAttribute('y2', b[1]),
              p &&
                !_.g._collapsable &&
                (_.of.setAttribute('x2', b[0]), _.of.setAttribute('y2', b[1])));
          else {
            var D;
            if (
              ((_.s._mdf || _.e._mdf || m) &&
                ((D = Math.sqrt(
                  Math.pow(g[0] - b[0], 2) + Math.pow(g[1] - b[1], 2)
                )),
                v.setAttribute('r', D),
                p && !_.g._collapsable && _.of.setAttribute('r', D)),
              _.e._mdf || _.h._mdf || _.a._mdf || m)
            ) {
              D ||
                (D = Math.sqrt(
                  Math.pow(g[0] - b[0], 2) + Math.pow(g[1] - b[1], 2)
                ));
              var T = Math.atan2(b[1] - g[1], b[0] - g[0]),
                z = _.h.v;
              z >= 1 ? (z = 0.99) : z <= -1 && (z = -0.99);
              var M = D * z,
                V = Math.cos(T + _.a.v) * M + g[0],
                R = Math.sin(T + _.a.v) * M + g[1];
              v.setAttribute('fx', V),
                v.setAttribute('fy', R),
                p &&
                  !_.g._collapsable &&
                  (_.of.setAttribute('fx', V), _.of.setAttribute('fy', R));
            }
          }
        }
        function d(x, _, m) {
          var v = _.style,
            p = _.d;
          p &&
            (p._mdf || m) &&
            p.dashStr &&
            (v.pElem.setAttribute('stroke-dasharray', p.dashStr),
            v.pElem.setAttribute('stroke-dashoffset', p.dashoffset[0])),
            _.c &&
              (_.c._mdf || m) &&
              v.pElem.setAttribute(
                'stroke',
                'rgb(' +
                  bmFloor(_.c.v[0]) +
                  ',' +
                  bmFloor(_.c.v[1]) +
                  ',' +
                  bmFloor(_.c.v[2]) +
                  ')'
              ),
            (_.o._mdf || m) && v.pElem.setAttribute('stroke-opacity', _.o.v),
            (_.w._mdf || m) &&
              (v.pElem.setAttribute('stroke-width', _.w.v),
              v.msElem && v.msElem.setAttribute('stroke-width', _.w.v));
        }
        return r;
      })();
      function ShapeTransformManager() {
        (this.sequences = {}),
          (this.sequenceList = []),
          (this.transform_key_count = 0);
      }
      ShapeTransformManager.prototype = {
        addTransformSequence: function (e) {
          var t,
            r = e.length,
            i = '_';
          for (t = 0; t < r; t += 1) i += e[t].transform.key + '_';
          var s = this.sequences[i];
          return (
            s ||
              ((s = {
                transforms: [].concat(e),
                finalTransform: new Matrix(),
                _mdf: !1,
              }),
              (this.sequences[i] = s),
              this.sequenceList.push(s)),
            s
          );
        },
        processSequence: function (e, t) {
          for (var r = 0, i = e.transforms.length, s = t; r < i && !t; ) {
            if (e.transforms[r].transform.mProps._mdf) {
              s = !0;
              break;
            }
            r += 1;
          }
          if (s) {
            var n;
            for (e.finalTransform.reset(), r = i - 1; r >= 0; r -= 1)
              (n = e.transforms[r].transform.mProps.v.props),
                e.finalTransform.transform(
                  n[0],
                  n[1],
                  n[2],
                  n[3],
                  n[4],
                  n[5],
                  n[6],
                  n[7],
                  n[8],
                  n[9],
                  n[10],
                  n[11],
                  n[12],
                  n[13],
                  n[14],
                  n[15]
                );
          }
          e._mdf = s;
        },
        processSequences: function (e) {
          var t,
            r = this.sequenceList.length;
          for (t = 0; t < r; t += 1)
            this.processSequence(this.sequenceList[t], e);
        },
        getNewKey: function () {
          return (
            (this.transform_key_count += 1), '_' + this.transform_key_count
          );
        },
      };
      function CVShapeData(e, t, r, i) {
        (this.styledShapes = []), (this.tr = [0, 0, 0, 0, 0, 0]);
        var s = 4;
        t.ty === 'rc'
          ? (s = 5)
          : t.ty === 'el'
          ? (s = 6)
          : t.ty === 'sr' && (s = 7),
          (this.sh = ShapePropertyFactory.getShapeProp(e, t, s, e));
        var n,
          o = r.length,
          c;
        for (n = 0; n < o; n += 1)
          r[n].closed ||
            ((c = {
              transforms: i.addTransformSequence(r[n].transforms),
              trNodes: [],
            }),
            this.styledShapes.push(c),
            r[n].elements.push(c));
      }
      CVShapeData.prototype.setAsAnimated =
        SVGShapeData.prototype.setAsAnimated;
      function BaseElement() {}
      BaseElement.prototype = {
        checkMasks: function () {
          if (!this.data.hasMask) return !1;
          for (var e = 0, t = this.data.masksProperties.length; e < t; ) {
            if (
              this.data.masksProperties[e].mode !== 'n' &&
              this.data.masksProperties[e].cl !== !1
            )
              return !0;
            e += 1;
          }
          return !1;
        },
        initExpressions: function () {
          (this.layerInterface = LayerExpressionInterface(this)),
            this.data.hasMask &&
              this.maskManager &&
              this.layerInterface.registerMaskInterface(this.maskManager);
          var e = EffectsExpressionInterface.createEffectsInterface(
            this,
            this.layerInterface
          );
          this.layerInterface.registerEffectsInterface(e),
            this.data.ty === 0 || this.data.xt
              ? (this.compInterface = CompExpressionInterface(this))
              : this.data.ty === 4
              ? ((this.layerInterface.shapeInterface = ShapeExpressionInterface(
                  this.shapesData,
                  this.itemsData,
                  this.layerInterface
                )),
                (this.layerInterface.content =
                  this.layerInterface.shapeInterface))
              : this.data.ty === 5 &&
                ((this.layerInterface.textInterface =
                  TextExpressionInterface(this)),
                (this.layerInterface.text = this.layerInterface.textInterface));
        },
        setBlendMode: function () {
          var e = getBlendMode(this.data.bm),
            t = this.baseElement || this.layerElement;
          t.style['mix-blend-mode'] = e;
        },
        initBaseData: function (e, t, r) {
          (this.globalData = t),
            (this.comp = r),
            (this.data = e),
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
      };
      function NullElement(e, t, r) {
        this.initFrame(),
          this.initBaseData(e, t, r),
          this.initFrame(),
          this.initTransform(e, t, r),
          this.initHierarchy();
      }
      (NullElement.prototype.prepareFrame = function (e) {
        this.prepareProperties(e, !0);
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
        );
      function SVGBaseElement() {}
      SVGBaseElement.prototype = {
        initRendererElement: function () {
          this.layerElement = createNS('g');
        },
        createContainerElements: function () {
          (this.matteElement = createNS('g')),
            (this.transformedElement = this.layerElement),
            (this.maskedElement = this.layerElement),
            (this._sizeChanged = !1);
          var e = null,
            t,
            r,
            i;
          if (this.data.td) {
            if (this.data.td == 3 || this.data.td == 1) {
              var s = createNS('mask');
              s.setAttribute('id', this.layerId),
                s.setAttribute(
                  'mask-type',
                  this.data.td == 3 ? 'luminance' : 'alpha'
                ),
                s.appendChild(this.layerElement),
                (e = s),
                this.globalData.defs.appendChild(s),
                !featureSupport.maskType &&
                  this.data.td == 1 &&
                  (s.setAttribute('mask-type', 'luminance'),
                  (t = createElementID()),
                  (r = filtersFactory.createFilter(t)),
                  this.globalData.defs.appendChild(r),
                  r.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                  (i = createNS('g')),
                  i.appendChild(this.layerElement),
                  (e = i),
                  s.appendChild(i),
                  i.setAttribute(
                    'filter',
                    'url(' + locationHref + '#' + t + ')'
                  ));
            } else if (this.data.td == 2) {
              var n = createNS('mask');
              n.setAttribute('id', this.layerId),
                n.setAttribute('mask-type', 'alpha');
              var o = createNS('g');
              n.appendChild(o),
                (t = createElementID()),
                (r = filtersFactory.createFilter(t));
              var c = createNS('feComponentTransfer');
              c.setAttribute('in', 'SourceGraphic'), r.appendChild(c);
              var u = createNS('feFuncA');
              u.setAttribute('type', 'table'),
                u.setAttribute('tableValues', '1.0 0.0'),
                c.appendChild(u),
                this.globalData.defs.appendChild(r);
              var d = createNS('rect');
              d.setAttribute('width', this.comp.data.w),
                d.setAttribute('height', this.comp.data.h),
                d.setAttribute('x', '0'),
                d.setAttribute('y', '0'),
                d.setAttribute('fill', '#ffffff'),
                d.setAttribute('opacity', '0'),
                o.setAttribute('filter', 'url(' + locationHref + '#' + t + ')'),
                o.appendChild(d),
                o.appendChild(this.layerElement),
                (e = o),
                featureSupport.maskType ||
                  (n.setAttribute('mask-type', 'luminance'),
                  r.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                  (i = createNS('g')),
                  o.appendChild(d),
                  i.appendChild(this.layerElement),
                  (e = i),
                  o.appendChild(i)),
                this.globalData.defs.appendChild(n);
            }
          } else
            this.data.tt
              ? (this.matteElement.appendChild(this.layerElement),
                (e = this.matteElement),
                (this.baseElement = this.matteElement))
              : (this.baseElement = this.layerElement);
          if (
            (this.data.ln && this.layerElement.setAttribute('id', this.data.ln),
            this.data.cl &&
              this.layerElement.setAttribute('class', this.data.cl),
            this.data.ty === 0 && !this.data.hd)
          ) {
            var x = createNS('clipPath'),
              _ = createNS('path');
            _.setAttribute(
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
            var m = createElementID();
            if (
              (x.setAttribute('id', m),
              x.appendChild(_),
              this.globalData.defs.appendChild(x),
              this.checkMasks())
            ) {
              var v = createNS('g');
              v.setAttribute(
                'clip-path',
                'url(' + locationHref + '#' + m + ')'
              ),
                v.appendChild(this.layerElement),
                (this.transformedElement = v),
                e
                  ? e.appendChild(this.transformedElement)
                  : (this.baseElement = this.transformedElement);
            } else
              this.layerElement.setAttribute(
                'clip-path',
                'url(' + locationHref + '#' + m + ')'
              );
          }
          this.data.bm !== 0 && this.setBlendMode();
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
        setMatte: function (e) {
          !this.matteElement ||
            this.matteElement.setAttribute(
              'mask',
              'url(' + locationHref + '#' + e + ')'
            );
        },
      };
      function IShapeElement() {}
      IShapeElement.prototype = {
        addShapeToModifiers: function (e) {
          var t,
            r = this.shapeModifiers.length;
          for (t = 0; t < r; t += 1) this.shapeModifiers[t].addShape(e);
        },
        isShapeInAnimatedModifiers: function (e) {
          for (var t = 0, r = this.shapeModifiers.length; t < r; )
            if (this.shapeModifiers[t].isAnimatedWithShape(e)) return !0;
          return !1;
        },
        renderModifiers: function () {
          if (!!this.shapeModifiers.length) {
            var e,
              t = this.shapes.length;
            for (e = 0; e < t; e += 1) this.shapes[e].sh.reset();
            t = this.shapeModifiers.length;
            var r;
            for (
              e = t - 1;
              e >= 0 &&
              ((r = this.shapeModifiers[e].processShapes(this._isFirstFrame)),
              !r);
              e -= 1
            );
          }
        },
        searchProcessedElement: function (e) {
          for (var t = this.processedElements, r = 0, i = t.length; r < i; ) {
            if (t[r].elem === e) return t[r].pos;
            r += 1;
          }
          return 0;
        },
        addProcessedElement: function (e, t) {
          for (var r = this.processedElements, i = r.length; i; )
            if (((i -= 1), r[i].elem === e)) {
              r[i].pos = t;
              return;
            }
          r.push(new ProcessedElement(e, t));
        },
        prepareFrame: function (e) {
          this.prepareRenderableFrame(e),
            this.prepareProperties(e, this.isInRange);
        },
      };
      function ITextElement() {}
      (ITextElement.prototype.initElement = function (e, t, r) {
        (this.lettersChangedFlag = !0),
          this.initFrame(),
          this.initBaseData(e, t, r),
          (this.textProperty = new TextProperty(
            this,
            e.t,
            this.dynamicProperties
          )),
          (this.textAnimator = new TextAnimatorProperty(
            e.t,
            this.renderType,
            this
          )),
          this.initTransform(e, t, r),
          this.initHierarchy(),
          this.initRenderable(),
          this.initRendererElement(),
          this.createContainerElements(),
          this.createRenderableComponents(),
          this.createContent(),
          this.hide(),
          this.textAnimator.searchProperties(this.dynamicProperties);
      }),
        (ITextElement.prototype.prepareFrame = function (e) {
          (this._mdf = !1),
            this.prepareRenderableFrame(e),
            this.prepareProperties(e, this.isInRange),
            (this.textProperty._mdf || this.textProperty._isFirstFrame) &&
              (this.buildNewText(),
              (this.textProperty._isFirstFrame = !1),
              (this.textProperty._mdf = !1));
        }),
        (ITextElement.prototype.createPathShape = function (e, t) {
          var r,
            i = t.length,
            s,
            n = '';
          for (r = 0; r < i; r += 1)
            (s = t[r].ks.k), (n += buildShapeString(s, s.i.length, !0, e));
          return n;
        }),
        (ITextElement.prototype.updateDocumentData = function (e, t) {
          this.textProperty.updateDocumentData(e, t);
        }),
        (ITextElement.prototype.canResizeFont = function (e) {
          this.textProperty.canResizeFont(e);
        }),
        (ITextElement.prototype.setMinimumFontSize = function (e) {
          this.textProperty.setMinimumFontSize(e);
        }),
        (ITextElement.prototype.applyTextPropertiesToMatrix = function (
          e,
          t,
          r,
          i,
          s
        ) {
          switch (
            (e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0),
            t.translate(0, -e.ls, 0),
            e.j)
          ) {
            case 1:
              t.translate(
                e.justifyOffset + (e.boxWidth - e.lineWidths[r]),
                0,
                0
              );
              break;
            case 2:
              t.translate(
                e.justifyOffset + (e.boxWidth - e.lineWidths[r]) / 2,
                0,
                0
              );
              break;
          }
          t.translate(i, s, 0);
        }),
        (ITextElement.prototype.buildColor = function (e) {
          return (
            'rgb(' +
            Math.round(e[0] * 255) +
            ',' +
            Math.round(e[1] * 255) +
            ',' +
            Math.round(e[2] * 255) +
            ')'
          );
        }),
        (ITextElement.prototype.emptyProp = new LetterProps()),
        (ITextElement.prototype.destroy = function () {});
      function ICompElement() {}
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
        (ICompElement.prototype.initElement = function (e, t, r) {
          this.initFrame(),
            this.initBaseData(e, t, r),
            this.initTransform(e, t, r),
            this.initRenderable(),
            this.initHierarchy(),
            this.initRendererElement(),
            this.createContainerElements(),
            this.createRenderableComponents(),
            (this.data.xt || !t.progressiveLoad) && this.buildAllItems(),
            this.hide();
        }),
        (ICompElement.prototype.prepareFrame = function (e) {
          if (
            ((this._mdf = !1),
            this.prepareRenderableFrame(e),
            this.prepareProperties(e, this.isInRange),
            !(!this.isInRange && !this.data.xt))
          ) {
            if (this.tm._placeholder) this.renderedFrame = e / this.data.sr;
            else {
              var t = this.tm.v;
              t === this.data.op && (t = this.data.op - 1),
                (this.renderedFrame = t);
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
          var e,
            t = this.layers.length;
          for (e = 0; e < t; e += 1)
            (this.completeLayers || this.elements[e]) &&
              this.elements[e].renderFrame();
        }),
        (ICompElement.prototype.setElements = function (e) {
          this.elements = e;
        }),
        (ICompElement.prototype.getElements = function () {
          return this.elements;
        }),
        (ICompElement.prototype.destroyElements = function () {
          var e,
            t = this.layers.length;
          for (e = 0; e < t; e += 1)
            this.elements[e] && this.elements[e].destroy();
        }),
        (ICompElement.prototype.destroy = function () {
          this.destroyElements(), this.destroyBaseElement();
        });
      function IImageElement(e, t, r) {
        (this.assetData = t.getAssetData(e.refId)),
          this.initElement(e, t, r),
          (this.sourceRect = {
            top: 0,
            left: 0,
            width: this.assetData.w,
            height: this.assetData.h,
          });
      }
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
          var e = this.globalData.getAssetsPath(this.assetData);
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
              e
            ),
            this.layerElement.appendChild(this.innerElem);
        }),
        (IImageElement.prototype.sourceRectAtTime = function () {
          return this.sourceRect;
        });
      function ISolidElement(e, t, r) {
        this.initElement(e, t, r);
      }
      extendPrototype([IImageElement], ISolidElement),
        (ISolidElement.prototype.createContent = function () {
          var e = createNS('rect');
          e.setAttribute('width', this.data.sw),
            e.setAttribute('height', this.data.sh),
            e.setAttribute('fill', this.data.sc),
            this.layerElement.appendChild(e);
        });
      function AudioElement(e, t, r) {
        this.initFrame(),
          this.initRenderable(),
          (this.assetData = t.getAssetData(e.refId)),
          this.initBaseData(e, t, r),
          (this._isPlaying = !1),
          (this._canPlay = !1);
        var i = this.globalData.getAssetsPath(this.assetData);
        (this.audio = this.globalData.audioController.createAudio(i)),
          (this._currentTime = 0),
          this.globalData.audioController.addAudio(this),
          (this.tm = e.tm
            ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this)
            : { _placeholder: !0 });
      }
      (AudioElement.prototype.prepareFrame = function (e) {
        if (
          (this.prepareRenderableFrame(e, !0),
          this.prepareProperties(e, !0),
          this.tm._placeholder)
        )
          this._currentTime = e / this.data.sr;
        else {
          var t = this.tm.v;
          this._currentTime = t;
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
        (AudioElement.prototype.setRate = function (e) {
          this.audio.rate(e);
        }),
        (AudioElement.prototype.volume = function (e) {
          this.audio.volume(e);
        }),
        (AudioElement.prototype.getBaseElement = function () {
          return null;
        }),
        (AudioElement.prototype.destroy = function () {}),
        (AudioElement.prototype.sourceRectAtTime = function () {}),
        (AudioElement.prototype.initExpressions = function () {});
      function FootageElement(e, t, r) {
        this.initFrame(),
          this.initRenderable(),
          (this.assetData = t.getAssetData(e.refId)),
          (this.footageData = t.imageLoader.getAsset(this.assetData)),
          this.initBaseData(e, t, r);
      }
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
        });
      function SVGCompElement(e, t, r) {
        (this.layers = e.layers),
          (this.supports3d = !0),
          (this.completeLayers = !1),
          (this.pendingElements = []),
          (this.elements = this.layers
            ? createSizedArray(this.layers.length)
            : []),
          this.initElement(e, t, r),
          (this.tm = e.tm
            ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this)
            : { _placeholder: !0 });
      }
      extendPrototype(
        [SVGRenderer, ICompElement, SVGBaseElement],
        SVGCompElement
      );
      function SVGTextLottieElement(e, t, r) {
        (this.textSpans = []),
          (this.renderType = 'svg'),
          this.initElement(e, t, r);
      }
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
        (SVGTextLottieElement.prototype.buildTextContents = function (e) {
          for (var t = 0, r = e.length, i = [], s = ''; t < r; )
            e[t] === String.fromCharCode(13) || e[t] === String.fromCharCode(3)
              ? (i.push(s), (s = ''))
              : (s += e[t]),
              (t += 1);
          return i.push(s), i;
        }),
        (SVGTextLottieElement.prototype.buildNewText = function () {
          var e,
            t,
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
              n = r.fStyle;
            this.layerElement.setAttribute('font-style', n),
              this.layerElement.setAttribute('font-weight', s);
          }
          this.layerElement.setAttribute('aria-label', r.t);
          var o = r.l || [],
            c = !!this.globalData.fontManager.chars;
          t = o.length;
          var u,
            d = this.mHelper,
            x,
            _ = '',
            m = this.data.singleShape,
            v = 0,
            p = 0,
            g = !0,
            b = r.tr * 0.001 * r.finalSize;
          if (m && !c && !r.sz) {
            var l = this.textContainer,
              a = 'start';
            switch (r.j) {
              case 1:
                a = 'end';
                break;
              case 2:
                a = 'middle';
                break;
              default:
                a = 'start';
                break;
            }
            l.setAttribute('text-anchor', a),
              l.setAttribute('letter-spacing', b);
            var h = this.buildTextContents(r.finalText);
            for (
              t = h.length, p = r.ps ? r.ps[1] + r.ascent : 0, e = 0;
              e < t;
              e += 1
            )
              (u = this.textSpans[e] || createNS('tspan')),
                (u.textContent = h[e]),
                u.setAttribute('x', 0),
                u.setAttribute('y', p),
                (u.style.display = 'inherit'),
                l.appendChild(u),
                (this.textSpans[e] = u),
                (p += r.finalLineHeight);
            this.layerElement.appendChild(l);
          } else {
            var f = this.textSpans.length,
              y,
              k;
            for (e = 0; e < t; e += 1)
              (!c || !m || e === 0) &&
                ((u =
                  f > e ? this.textSpans[e] : createNS(c ? 'path' : 'text')),
                f <= e &&
                  (u.setAttribute('stroke-linecap', 'butt'),
                  u.setAttribute('stroke-linejoin', 'round'),
                  u.setAttribute('stroke-miterlimit', '4'),
                  (this.textSpans[e] = u),
                  this.layerElement.appendChild(u)),
                (u.style.display = 'inherit')),
                d.reset(),
                d.scale(r.finalSize / 100, r.finalSize / 100),
                m &&
                  (o[e].n &&
                    ((v = -b), (p += r.yOffset), (p += g ? 1 : 0), (g = !1)),
                  this.applyTextPropertiesToMatrix(r, d, o[e].line, v, p),
                  (v += o[e].l || 0),
                  (v += b)),
                c
                  ? ((k = this.globalData.fontManager.getCharData(
                      r.finalText[e],
                      i.fStyle,
                      this.globalData.fontManager.getFontByName(r.f).fFamily
                    )),
                    (y = (k && k.data) || {}),
                    (x = y.shapes ? y.shapes[0].it : []),
                    m
                      ? (_ += this.createPathShape(d, x))
                      : u.setAttribute('d', this.createPathShape(d, x)))
                  : (m &&
                      u.setAttribute(
                        'transform',
                        'translate(' + d.props[12] + ',' + d.props[13] + ')'
                      ),
                    (u.textContent = o[e].val),
                    u.setAttributeNS(
                      'http://www.w3.org/XML/1998/namespace',
                      'xml:space',
                      'preserve'
                    ));
            m && u && u.setAttribute('d', _);
          }
          for (; e < this.textSpans.length; )
            (this.textSpans[e].style.display = 'none'), (e += 1);
          this._sizeChanged = !0;
        }),
        (SVGTextLottieElement.prototype.sourceRectAtTime = function () {
          if (
            (this.prepareFrame(this.comp.renderedFrame - this.data.st),
            this.renderInnerContent(),
            this._sizeChanged)
          ) {
            this._sizeChanged = !1;
            var e = this.layerElement.getBBox();
            this.bbox = {
              top: e.y,
              left: e.x,
              width: e.width,
              height: e.height,
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
            this._sizeChanged = !0;
            var e,
              t,
              r = this.textAnimator.renderedLetters,
              i = this.textProperty.currentData.l;
            t = i.length;
            var s, n;
            for (e = 0; e < t; e += 1)
              i[e].n ||
                ((s = r[e]),
                (n = this.textSpans[e]),
                s._mdf.m && n.setAttribute('transform', s.m),
                s._mdf.o && n.setAttribute('opacity', s.o),
                s._mdf.sw && n.setAttribute('stroke-width', s.sw),
                s._mdf.sc && n.setAttribute('stroke', s.sc),
                s._mdf.fc && n.setAttribute('fill', s.fc));
          }
        });
      function SVGShapeElement(e, t, r) {
        (this.shapes = []),
          (this.shapesData = e.shapes),
          (this.stylesList = []),
          (this.shapeModifiers = []),
          (this.itemsData = []),
          (this.processedElements = []),
          (this.animatedContents = []),
          this.initElement(e, t, r),
          (this.prevViewData = []);
      }
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
          var e,
            t = this.shapes.length,
            r,
            i,
            s = this.stylesList.length,
            n,
            o = [],
            c = !1;
          for (i = 0; i < s; i += 1) {
            for (
              n = this.stylesList[i], c = !1, o.length = 0, e = 0;
              e < t;
              e += 1
            )
              (r = this.shapes[e]),
                r.styles.indexOf(n) !== -1 &&
                  (o.push(r), (c = r._isAnimated || c));
            o.length > 1 && c && this.setShapesAsAnimated(o);
          }
        }),
        (SVGShapeElement.prototype.setShapesAsAnimated = function (e) {
          var t,
            r = e.length;
          for (t = 0; t < r; t += 1) e[t].setAsAnimated();
        }),
        (SVGShapeElement.prototype.createStyleElement = function (e, t) {
          var r,
            i = new SVGStyleData(e, t),
            s = i.pElem;
          if (e.ty === 'st') r = new SVGStrokeStyleData(this, e, i);
          else if (e.ty === 'fl') r = new SVGFillStyleData(this, e, i);
          else if (e.ty === 'gf' || e.ty === 'gs') {
            var n =
              e.ty === 'gf'
                ? SVGGradientFillStyleData
                : SVGGradientStrokeStyleData;
            (r = new n(this, e, i)),
              this.globalData.defs.appendChild(r.gf),
              r.maskId &&
                (this.globalData.defs.appendChild(r.ms),
                this.globalData.defs.appendChild(r.of),
                s.setAttribute(
                  'mask',
                  'url(' + locationHref + '#' + r.maskId + ')'
                ));
          }
          return (
            (e.ty === 'st' || e.ty === 'gs') &&
              (s.setAttribute('stroke-linecap', lineCapEnum[e.lc || 2]),
              s.setAttribute('stroke-linejoin', lineJoinEnum[e.lj || 2]),
              s.setAttribute('fill-opacity', '0'),
              e.lj === 1 && s.setAttribute('stroke-miterlimit', e.ml)),
            e.r === 2 && s.setAttribute('fill-rule', 'evenodd'),
            e.ln && s.setAttribute('id', e.ln),
            e.cl && s.setAttribute('class', e.cl),
            e.bm && (s.style['mix-blend-mode'] = getBlendMode(e.bm)),
            this.stylesList.push(i),
            this.addToAnimatedContents(e, r),
            r
          );
        }),
        (SVGShapeElement.prototype.createGroupElement = function (e) {
          var t = new ShapeGroupData();
          return (
            e.ln && t.gr.setAttribute('id', e.ln),
            e.cl && t.gr.setAttribute('class', e.cl),
            e.bm && (t.gr.style['mix-blend-mode'] = getBlendMode(e.bm)),
            t
          );
        }),
        (SVGShapeElement.prototype.createTransformElement = function (e, t) {
          var r = TransformPropertyFactory.getTransformProperty(this, e, this),
            i = new SVGTransformData(r, r.o, t);
          return this.addToAnimatedContents(e, i), i;
        }),
        (SVGShapeElement.prototype.createShapeElement = function (e, t, r) {
          var i = 4;
          e.ty === 'rc'
            ? (i = 5)
            : e.ty === 'el'
            ? (i = 6)
            : e.ty === 'sr' && (i = 7);
          var s = ShapePropertyFactory.getShapeProp(this, e, i, this),
            n = new SVGShapeData(t, r, s);
          return (
            this.shapes.push(n),
            this.addShapeToModifiers(n),
            this.addToAnimatedContents(e, n),
            n
          );
        }),
        (SVGShapeElement.prototype.addToAnimatedContents = function (e, t) {
          for (var r = 0, i = this.animatedContents.length; r < i; ) {
            if (this.animatedContents[r].element === t) return;
            r += 1;
          }
          this.animatedContents.push({
            fn: SVGElementsRenderer.createRenderFunction(e),
            element: t,
            data: e,
          });
        }),
        (SVGShapeElement.prototype.setElementStyles = function (e) {
          var t = e.styles,
            r,
            i = this.stylesList.length;
          for (r = 0; r < i; r += 1)
            this.stylesList[r].closed || t.push(this.stylesList[r]);
        }),
        (SVGShapeElement.prototype.reloadShapes = function () {
          this._isFirstFrame = !0;
          var e,
            t = this.itemsData.length;
          for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
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
              t = this.dynamicProperties.length,
              e = 0;
            e < t;
            e += 1
          )
            this.dynamicProperties[e].getValue();
          this.renderModifiers();
        }),
        (SVGShapeElement.prototype.searchShapes = function (
          e,
          t,
          r,
          i,
          s,
          n,
          o
        ) {
          var c = [].concat(n),
            u,
            d = e.length - 1,
            x,
            _,
            m = [],
            v = [],
            p,
            g,
            b;
          for (u = d; u >= 0; u -= 1) {
            if (
              ((b = this.searchProcessedElement(e[u])),
              b ? (t[u] = r[b - 1]) : (e[u]._render = o),
              e[u].ty === 'fl' ||
                e[u].ty === 'st' ||
                e[u].ty === 'gf' ||
                e[u].ty === 'gs')
            )
              b
                ? (t[u].style.closed = !1)
                : (t[u] = this.createStyleElement(e[u], s)),
                e[u]._render &&
                  t[u].style.pElem.parentNode !== i &&
                  i.appendChild(t[u].style.pElem),
                m.push(t[u].style);
            else if (e[u].ty === 'gr') {
              if (!b) t[u] = this.createGroupElement(e[u]);
              else
                for (_ = t[u].it.length, x = 0; x < _; x += 1)
                  t[u].prevViewData[x] = t[u].it[x];
              this.searchShapes(
                e[u].it,
                t[u].it,
                t[u].prevViewData,
                t[u].gr,
                s + 1,
                c,
                o
              ),
                e[u]._render &&
                  t[u].gr.parentNode !== i &&
                  i.appendChild(t[u].gr);
            } else
              e[u].ty === 'tr'
                ? (b || (t[u] = this.createTransformElement(e[u], i)),
                  (p = t[u].transform),
                  c.push(p))
                : e[u].ty === 'sh' ||
                  e[u].ty === 'rc' ||
                  e[u].ty === 'el' ||
                  e[u].ty === 'sr'
                ? (b || (t[u] = this.createShapeElement(e[u], c, s)),
                  this.setElementStyles(t[u]))
                : e[u].ty === 'tm' ||
                  e[u].ty === 'rd' ||
                  e[u].ty === 'ms' ||
                  e[u].ty === 'pb'
                ? (b
                    ? ((g = t[u]), (g.closed = !1))
                    : ((g = ShapeModifiers.getModifier(e[u].ty)),
                      g.init(this, e[u]),
                      (t[u] = g),
                      this.shapeModifiers.push(g)),
                  v.push(g))
                : e[u].ty === 'rp' &&
                  (b
                    ? ((g = t[u]), (g.closed = !0))
                    : ((g = ShapeModifiers.getModifier(e[u].ty)),
                      (t[u] = g),
                      g.init(this, e, u, t),
                      this.shapeModifiers.push(g),
                      (o = !1)),
                  v.push(g));
            this.addProcessedElement(e[u], u + 1);
          }
          for (d = m.length, u = 0; u < d; u += 1) m[u].closed = !0;
          for (d = v.length, u = 0; u < d; u += 1) v[u].closed = !0;
        }),
        (SVGShapeElement.prototype.renderInnerContent = function () {
          this.renderModifiers();
          var e,
            t = this.stylesList.length;
          for (e = 0; e < t; e += 1) this.stylesList[e].reset();
          for (this.renderShape(), e = 0; e < t; e += 1)
            (this.stylesList[e]._mdf || this._isFirstFrame) &&
              (this.stylesList[e].msElem &&
                (this.stylesList[e].msElem.setAttribute(
                  'd',
                  this.stylesList[e].d
                ),
                (this.stylesList[e].d = 'M0 0' + this.stylesList[e].d)),
              this.stylesList[e].pElem.setAttribute(
                'd',
                this.stylesList[e].d || 'M0 0'
              ));
        }),
        (SVGShapeElement.prototype.renderShape = function () {
          var e,
            t = this.animatedContents.length,
            r;
          for (e = 0; e < t; e += 1)
            (r = this.animatedContents[e]),
              (this._isFirstFrame || r.element._isAnimated) &&
                r.data !== !0 &&
                r.fn(r.data, r.element, this._isFirstFrame);
        }),
        (SVGShapeElement.prototype.destroy = function () {
          this.destroyBaseElement(),
            (this.shapesData = null),
            (this.itemsData = null);
        });
      function SVGTintFilter(e, t) {
        this.filterManager = t;
        var r = createNS('feColorMatrix');
        if (
          (r.setAttribute('type', 'matrix'),
          r.setAttribute('color-interpolation-filters', 'linearRGB'),
          r.setAttribute(
            'values',
            '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'
          ),
          r.setAttribute('result', 'f1'),
          e.appendChild(r),
          (r = createNS('feColorMatrix')),
          r.setAttribute('type', 'matrix'),
          r.setAttribute('color-interpolation-filters', 'sRGB'),
          r.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'),
          r.setAttribute('result', 'f2'),
          e.appendChild(r),
          (this.matrixFilter = r),
          t.effectElements[2].p.v !== 100 || t.effectElements[2].p.k)
        ) {
          var i = createNS('feMerge');
          e.appendChild(i);
          var s;
          (s = createNS('feMergeNode')),
            s.setAttribute('in', 'SourceGraphic'),
            i.appendChild(s),
            (s = createNS('feMergeNode')),
            s.setAttribute('in', 'f2'),
            i.appendChild(s);
        }
      }
      SVGTintFilter.prototype.renderFrame = function (e) {
        if (e || this.filterManager._mdf) {
          var t = this.filterManager.effectElements[0].p.v,
            r = this.filterManager.effectElements[1].p.v,
            i = this.filterManager.effectElements[2].p.v / 100;
          this.matrixFilter.setAttribute(
            'values',
            r[0] -
              t[0] +
              ' 0 0 0 ' +
              t[0] +
              ' ' +
              (r[1] - t[1]) +
              ' 0 0 0 ' +
              t[1] +
              ' ' +
              (r[2] - t[2]) +
              ' 0 0 0 ' +
              t[2] +
              ' 0 0 0 ' +
              i +
              ' 0'
          );
        }
      };
      function SVGFillFilter(e, t) {
        this.filterManager = t;
        var r = createNS('feColorMatrix');
        r.setAttribute('type', 'matrix'),
          r.setAttribute('color-interpolation-filters', 'sRGB'),
          r.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'),
          e.appendChild(r),
          (this.matrixFilter = r);
      }
      SVGFillFilter.prototype.renderFrame = function (e) {
        if (e || this.filterManager._mdf) {
          var t = this.filterManager.effectElements[2].p.v,
            r = this.filterManager.effectElements[6].p.v;
          this.matrixFilter.setAttribute(
            'values',
            '0 0 0 0 ' +
              t[0] +
              ' 0 0 0 0 ' +
              t[1] +
              ' 0 0 0 0 ' +
              t[2] +
              ' 0 0 0 ' +
              r +
              ' 0'
          );
        }
      };
      function SVGGaussianBlurEffect(e, t) {
        e.setAttribute('x', '-100%'),
          e.setAttribute('y', '-100%'),
          e.setAttribute('width', '300%'),
          e.setAttribute('height', '300%'),
          (this.filterManager = t);
        var r = createNS('feGaussianBlur');
        e.appendChild(r), (this.feGaussianBlur = r);
      }
      SVGGaussianBlurEffect.prototype.renderFrame = function (e) {
        if (e || this.filterManager._mdf) {
          var t = 0.3,
            r = this.filterManager.effectElements[0].p.v * t,
            i = this.filterManager.effectElements[1].p.v,
            s = i == 3 ? 0 : r,
            n = i == 2 ? 0 : r;
          this.feGaussianBlur.setAttribute('stdDeviation', s + ' ' + n);
          var o =
            this.filterManager.effectElements[2].p.v == 1
              ? 'wrap'
              : 'duplicate';
          this.feGaussianBlur.setAttribute('edgeMode', o);
        }
      };
      function SVGStrokeEffect(e, t) {
        (this.initialized = !1),
          (this.filterManager = t),
          (this.elem = e),
          (this.paths = []);
      }
      (SVGStrokeEffect.prototype.initialize = function () {
        var e =
            this.elem.layerElement.children ||
            this.elem.layerElement.childNodes,
          t,
          r,
          i,
          s;
        for (
          this.filterManager.effectElements[1].p.v === 1
            ? ((s = this.elem.maskManager.masksProperties.length), (i = 0))
            : ((i = this.filterManager.effectElements[0].p.v - 1), (s = i + 1)),
            r = createNS('g'),
            r.setAttribute('fill', 'none'),
            r.setAttribute('stroke-linecap', 'round'),
            r.setAttribute('stroke-dashoffset', 1),
            i;
          i < s;
          i += 1
        )
          (t = createNS('path')),
            r.appendChild(t),
            this.paths.push({ p: t, m: i });
        if (this.filterManager.effectElements[10].p.v === 3) {
          var n = createNS('mask'),
            o = createElementID();
          n.setAttribute('id', o),
            n.setAttribute('mask-type', 'alpha'),
            n.appendChild(r),
            this.elem.globalData.defs.appendChild(n);
          var c = createNS('g');
          for (
            c.setAttribute('mask', 'url(' + locationHref + '#' + o + ')');
            e[0];

          )
            c.appendChild(e[0]);
          this.elem.layerElement.appendChild(c),
            (this.masker = n),
            r.setAttribute('stroke', '#fff');
        } else if (
          this.filterManager.effectElements[10].p.v === 1 ||
          this.filterManager.effectElements[10].p.v === 2
        ) {
          if (this.filterManager.effectElements[10].p.v === 2)
            for (
              e =
                this.elem.layerElement.children ||
                this.elem.layerElement.childNodes;
              e.length;

            )
              this.elem.layerElement.removeChild(e[0]);
          this.elem.layerElement.appendChild(r),
            this.elem.layerElement.removeAttribute('mask'),
            r.setAttribute('stroke', '#fff');
        }
        (this.initialized = !0), (this.pathMasker = r);
      }),
        (SVGStrokeEffect.prototype.renderFrame = function (e) {
          this.initialized || this.initialize();
          var t,
            r = this.paths.length,
            i,
            s;
          for (t = 0; t < r; t += 1)
            if (
              this.paths[t].m !== -1 &&
              ((i = this.elem.maskManager.viewData[this.paths[t].m]),
              (s = this.paths[t].p),
              (e || this.filterManager._mdf || i.prop._mdf) &&
                s.setAttribute('d', i.lastPath),
              e ||
                this.filterManager.effectElements[9].p._mdf ||
                this.filterManager.effectElements[4].p._mdf ||
                this.filterManager.effectElements[7].p._mdf ||
                this.filterManager.effectElements[8].p._mdf ||
                i.prop._mdf)
            ) {
              var n;
              if (
                this.filterManager.effectElements[7].p.v !== 0 ||
                this.filterManager.effectElements[8].p.v !== 100
              ) {
                var o =
                    Math.min(
                      this.filterManager.effectElements[7].p.v,
                      this.filterManager.effectElements[8].p.v
                    ) * 0.01,
                  c =
                    Math.max(
                      this.filterManager.effectElements[7].p.v,
                      this.filterManager.effectElements[8].p.v
                    ) * 0.01,
                  u = s.getTotalLength();
                n = '0 0 0 ' + u * o + ' ';
                var d = u * (c - o),
                  x =
                    1 +
                    this.filterManager.effectElements[4].p.v *
                      2 *
                      this.filterManager.effectElements[9].p.v *
                      0.01,
                  _ = Math.floor(d / x),
                  m;
                for (m = 0; m < _; m += 1)
                  n +=
                    '1 ' +
                    this.filterManager.effectElements[4].p.v *
                      2 *
                      this.filterManager.effectElements[9].p.v *
                      0.01 +
                    ' ';
                n += '0 ' + u * 10 + ' 0 0';
              } else
                n =
                  '1 ' +
                  this.filterManager.effectElements[4].p.v *
                    2 *
                    this.filterManager.effectElements[9].p.v *
                    0.01;
              s.setAttribute('stroke-dasharray', n);
            }
          if (
            ((e || this.filterManager.effectElements[4].p._mdf) &&
              this.pathMasker.setAttribute(
                'stroke-width',
                this.filterManager.effectElements[4].p.v * 2
              ),
            (e || this.filterManager.effectElements[6].p._mdf) &&
              this.pathMasker.setAttribute(
                'opacity',
                this.filterManager.effectElements[6].p.v
              ),
            (this.filterManager.effectElements[10].p.v === 1 ||
              this.filterManager.effectElements[10].p.v === 2) &&
              (e || this.filterManager.effectElements[3].p._mdf))
          ) {
            var v = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute(
              'stroke',
              'rgb(' +
                bmFloor(v[0] * 255) +
                ',' +
                bmFloor(v[1] * 255) +
                ',' +
                bmFloor(v[2] * 255) +
                ')'
            );
          }
        });
      function SVGTritoneFilter(e, t) {
        this.filterManager = t;
        var r = createNS('feColorMatrix');
        r.setAttribute('type', 'matrix'),
          r.setAttribute('color-interpolation-filters', 'linearRGB'),
          r.setAttribute(
            'values',
            '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'
          ),
          r.setAttribute('result', 'f1'),
          e.appendChild(r);
        var i = createNS('feComponentTransfer');
        i.setAttribute('color-interpolation-filters', 'sRGB'),
          e.appendChild(i),
          (this.matrixFilter = i);
        var s = createNS('feFuncR');
        s.setAttribute('type', 'table'), i.appendChild(s), (this.feFuncR = s);
        var n = createNS('feFuncG');
        n.setAttribute('type', 'table'), i.appendChild(n), (this.feFuncG = n);
        var o = createNS('feFuncB');
        o.setAttribute('type', 'table'), i.appendChild(o), (this.feFuncB = o);
      }
      SVGTritoneFilter.prototype.renderFrame = function (e) {
        if (e || this.filterManager._mdf) {
          var t = this.filterManager.effectElements[0].p.v,
            r = this.filterManager.effectElements[1].p.v,
            i = this.filterManager.effectElements[2].p.v,
            s = i[0] + ' ' + r[0] + ' ' + t[0],
            n = i[1] + ' ' + r[1] + ' ' + t[1],
            o = i[2] + ' ' + r[2] + ' ' + t[2];
          this.feFuncR.setAttribute('tableValues', s),
            this.feFuncG.setAttribute('tableValues', n),
            this.feFuncB.setAttribute('tableValues', o);
        }
      };
      function SVGProLevelsFilter(e, t) {
        this.filterManager = t;
        var r = this.filterManager.effectElements,
          i = createNS('feComponentTransfer');
        (r[10].p.k ||
          r[10].p.v !== 0 ||
          r[11].p.k ||
          r[11].p.v !== 1 ||
          r[12].p.k ||
          r[12].p.v !== 1 ||
          r[13].p.k ||
          r[13].p.v !== 0 ||
          r[14].p.k ||
          r[14].p.v !== 1) &&
          (this.feFuncR = this.createFeFunc('feFuncR', i)),
          (r[17].p.k ||
            r[17].p.v !== 0 ||
            r[18].p.k ||
            r[18].p.v !== 1 ||
            r[19].p.k ||
            r[19].p.v !== 1 ||
            r[20].p.k ||
            r[20].p.v !== 0 ||
            r[21].p.k ||
            r[21].p.v !== 1) &&
            (this.feFuncG = this.createFeFunc('feFuncG', i)),
          (r[24].p.k ||
            r[24].p.v !== 0 ||
            r[25].p.k ||
            r[25].p.v !== 1 ||
            r[26].p.k ||
            r[26].p.v !== 1 ||
            r[27].p.k ||
            r[27].p.v !== 0 ||
            r[28].p.k ||
            r[28].p.v !== 1) &&
            (this.feFuncB = this.createFeFunc('feFuncB', i)),
          (r[31].p.k ||
            r[31].p.v !== 0 ||
            r[32].p.k ||
            r[32].p.v !== 1 ||
            r[33].p.k ||
            r[33].p.v !== 1 ||
            r[34].p.k ||
            r[34].p.v !== 0 ||
            r[35].p.k ||
            r[35].p.v !== 1) &&
            (this.feFuncA = this.createFeFunc('feFuncA', i)),
          (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) &&
            (i.setAttribute('color-interpolation-filters', 'sRGB'),
            e.appendChild(i),
            (i = createNS('feComponentTransfer'))),
          (r[3].p.k ||
            r[3].p.v !== 0 ||
            r[4].p.k ||
            r[4].p.v !== 1 ||
            r[5].p.k ||
            r[5].p.v !== 1 ||
            r[6].p.k ||
            r[6].p.v !== 0 ||
            r[7].p.k ||
            r[7].p.v !== 1) &&
            (i.setAttribute('color-interpolation-filters', 'sRGB'),
            e.appendChild(i),
            (this.feFuncRComposed = this.createFeFunc('feFuncR', i)),
            (this.feFuncGComposed = this.createFeFunc('feFuncG', i)),
            (this.feFuncBComposed = this.createFeFunc('feFuncB', i)));
      }
      (SVGProLevelsFilter.prototype.createFeFunc = function (e, t) {
        var r = createNS(e);
        return r.setAttribute('type', 'table'), t.appendChild(r), r;
      }),
        (SVGProLevelsFilter.prototype.getTableValue = function (e, t, r, i, s) {
          for (
            var n = 0,
              o = 256,
              c,
              u = Math.min(e, t),
              d = Math.max(e, t),
              x = Array.call(null, { length: o }),
              _,
              m = 0,
              v = s - i,
              p = t - e;
            n <= 256;

          )
            (c = n / 256),
              c <= u
                ? (_ = p < 0 ? s : i)
                : c >= d
                ? (_ = p < 0 ? i : s)
                : (_ = i + v * Math.pow((c - e) / p, 1 / r)),
              (x[m] = _),
              (m += 1),
              (n += 256 / (o - 1));
          return x.join(' ');
        }),
        (SVGProLevelsFilter.prototype.renderFrame = function (e) {
          if (e || this.filterManager._mdf) {
            var t,
              r = this.filterManager.effectElements;
            this.feFuncRComposed &&
              (e ||
                r[3].p._mdf ||
                r[4].p._mdf ||
                r[5].p._mdf ||
                r[6].p._mdf ||
                r[7].p._mdf) &&
              ((t = this.getTableValue(
                r[3].p.v,
                r[4].p.v,
                r[5].p.v,
                r[6].p.v,
                r[7].p.v
              )),
              this.feFuncRComposed.setAttribute('tableValues', t),
              this.feFuncGComposed.setAttribute('tableValues', t),
              this.feFuncBComposed.setAttribute('tableValues', t)),
              this.feFuncR &&
                (e ||
                  r[10].p._mdf ||
                  r[11].p._mdf ||
                  r[12].p._mdf ||
                  r[13].p._mdf ||
                  r[14].p._mdf) &&
                ((t = this.getTableValue(
                  r[10].p.v,
                  r[11].p.v,
                  r[12].p.v,
                  r[13].p.v,
                  r[14].p.v
                )),
                this.feFuncR.setAttribute('tableValues', t)),
              this.feFuncG &&
                (e ||
                  r[17].p._mdf ||
                  r[18].p._mdf ||
                  r[19].p._mdf ||
                  r[20].p._mdf ||
                  r[21].p._mdf) &&
                ((t = this.getTableValue(
                  r[17].p.v,
                  r[18].p.v,
                  r[19].p.v,
                  r[20].p.v,
                  r[21].p.v
                )),
                this.feFuncG.setAttribute('tableValues', t)),
              this.feFuncB &&
                (e ||
                  r[24].p._mdf ||
                  r[25].p._mdf ||
                  r[26].p._mdf ||
                  r[27].p._mdf ||
                  r[28].p._mdf) &&
                ((t = this.getTableValue(
                  r[24].p.v,
                  r[25].p.v,
                  r[26].p.v,
                  r[27].p.v,
                  r[28].p.v
                )),
                this.feFuncB.setAttribute('tableValues', t)),
              this.feFuncA &&
                (e ||
                  r[31].p._mdf ||
                  r[32].p._mdf ||
                  r[33].p._mdf ||
                  r[34].p._mdf ||
                  r[35].p._mdf) &&
                ((t = this.getTableValue(
                  r[31].p.v,
                  r[32].p.v,
                  r[33].p.v,
                  r[34].p.v,
                  r[35].p.v
                )),
                this.feFuncA.setAttribute('tableValues', t));
          }
        });
      function SVGDropShadowEffect(e, t) {
        var r = t.container.globalData.renderConfig.filterSize;
        e.setAttribute('x', r.x),
          e.setAttribute('y', r.y),
          e.setAttribute('width', r.width),
          e.setAttribute('height', r.height),
          (this.filterManager = t);
        var i = createNS('feGaussianBlur');
        i.setAttribute('in', 'SourceAlpha'),
          i.setAttribute('result', 'drop_shadow_1'),
          i.setAttribute('stdDeviation', '0'),
          (this.feGaussianBlur = i),
          e.appendChild(i);
        var s = createNS('feOffset');
        s.setAttribute('dx', '25'),
          s.setAttribute('dy', '0'),
          s.setAttribute('in', 'drop_shadow_1'),
          s.setAttribute('result', 'drop_shadow_2'),
          (this.feOffset = s),
          e.appendChild(s);
        var n = createNS('feFlood');
        n.setAttribute('flood-color', '#00ff00'),
          n.setAttribute('flood-opacity', '1'),
          n.setAttribute('result', 'drop_shadow_3'),
          (this.feFlood = n),
          e.appendChild(n);
        var o = createNS('feComposite');
        o.setAttribute('in', 'drop_shadow_3'),
          o.setAttribute('in2', 'drop_shadow_2'),
          o.setAttribute('operator', 'in'),
          o.setAttribute('result', 'drop_shadow_4'),
          e.appendChild(o);
        var c = createNS('feMerge');
        e.appendChild(c);
        var u;
        (u = createNS('feMergeNode')),
          c.appendChild(u),
          (u = createNS('feMergeNode')),
          u.setAttribute('in', 'SourceGraphic'),
          (this.feMergeNode = u),
          (this.feMerge = c),
          (this.originalNodeAdded = !1),
          c.appendChild(u);
      }
      SVGDropShadowEffect.prototype.renderFrame = function (e) {
        if (e || this.filterManager._mdf) {
          if (
            ((e || this.filterManager.effectElements[4].p._mdf) &&
              this.feGaussianBlur.setAttribute(
                'stdDeviation',
                this.filterManager.effectElements[4].p.v / 4
              ),
            e || this.filterManager.effectElements[0].p._mdf)
          ) {
            var t = this.filterManager.effectElements[0].p.v;
            this.feFlood.setAttribute(
              'flood-color',
              rgbToHex(
                Math.round(t[0] * 255),
                Math.round(t[1] * 255),
                Math.round(t[2] * 255)
              )
            );
          }
          if (
            ((e || this.filterManager.effectElements[1].p._mdf) &&
              this.feFlood.setAttribute(
                'flood-opacity',
                this.filterManager.effectElements[1].p.v / 255
              ),
            e ||
              this.filterManager.effectElements[2].p._mdf ||
              this.filterManager.effectElements[3].p._mdf)
          ) {
            var r = this.filterManager.effectElements[3].p.v,
              i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
              s = r * Math.cos(i),
              n = r * Math.sin(i);
            this.feOffset.setAttribute('dx', s),
              this.feOffset.setAttribute('dy', n);
          }
        }
      };
      var _svgMatteSymbols = [];
      function SVGMatte3Effect(e, t, r) {
        (this.initialized = !1),
          (this.filterManager = t),
          (this.filterElem = e),
          (this.elem = r),
          (r.matteElement = createNS('g')),
          r.matteElement.appendChild(r.layerElement),
          r.matteElement.appendChild(r.transformedElement),
          (r.baseElement = r.matteElement);
      }
      (SVGMatte3Effect.prototype.findSymbol = function (e) {
        for (var t = 0, r = _svgMatteSymbols.length; t < r; ) {
          if (_svgMatteSymbols[t] === e) return _svgMatteSymbols[t];
          t += 1;
        }
        return null;
      }),
        (SVGMatte3Effect.prototype.replaceInParent = function (e, t) {
          var r = e.layerElement.parentNode;
          if (!!r) {
            for (
              var i = r.children, s = 0, n = i.length;
              s < n && i[s] !== e.layerElement;

            )
              s += 1;
            var o;
            s <= n - 2 && (o = i[s + 1]);
            var c = createNS('use');
            c.setAttribute('href', '#' + t),
              o ? r.insertBefore(c, o) : r.appendChild(c);
          }
        }),
        (SVGMatte3Effect.prototype.setElementAsMask = function (e, t) {
          if (!this.findSymbol(t)) {
            var r = createElementID(),
              i = createNS('mask');
            i.setAttribute('id', t.layerId),
              i.setAttribute('mask-type', 'alpha'),
              _svgMatteSymbols.push(t);
            var s = e.globalData.defs;
            s.appendChild(i);
            var n = createNS('symbol');
            n.setAttribute('id', r),
              this.replaceInParent(t, r),
              n.appendChild(t.layerElement),
              s.appendChild(n);
            var o = createNS('use');
            o.setAttribute('href', '#' + r),
              i.appendChild(o),
              (t.data.hd = !1),
              t.show();
          }
          e.setMatte(t.layerId);
        }),
        (SVGMatte3Effect.prototype.initialize = function () {
          for (
            var e = this.filterManager.effectElements[0].p.v,
              t = this.elem.comp.elements,
              r = 0,
              i = t.length;
            r < i;

          )
            t[r] &&
              t[r].data.ind === e &&
              this.setElementAsMask(this.elem, t[r]),
              (r += 1);
          this.initialized = !0;
        }),
        (SVGMatte3Effect.prototype.renderFrame = function () {
          this.initialized || this.initialize();
        });
      function SVGEffects(e) {
        var t,
          r = e.data.ef ? e.data.ef.length : 0,
          i = createElementID(),
          s = filtersFactory.createFilter(i, !0),
          n = 0;
        this.filters = [];
        var o;
        for (t = 0; t < r; t += 1)
          (o = null),
            e.data.ef[t].ty === 20
              ? ((n += 1),
                (o = new SVGTintFilter(s, e.effectsManager.effectElements[t])))
              : e.data.ef[t].ty === 21
              ? ((n += 1),
                (o = new SVGFillFilter(s, e.effectsManager.effectElements[t])))
              : e.data.ef[t].ty === 22
              ? (o = new SVGStrokeEffect(e, e.effectsManager.effectElements[t]))
              : e.data.ef[t].ty === 23
              ? ((n += 1),
                (o = new SVGTritoneFilter(
                  s,
                  e.effectsManager.effectElements[t]
                )))
              : e.data.ef[t].ty === 24
              ? ((n += 1),
                (o = new SVGProLevelsFilter(
                  s,
                  e.effectsManager.effectElements[t]
                )))
              : e.data.ef[t].ty === 25
              ? ((n += 1),
                (o = new SVGDropShadowEffect(
                  s,
                  e.effectsManager.effectElements[t]
                )))
              : e.data.ef[t].ty === 28
              ? (o = new SVGMatte3Effect(
                  s,
                  e.effectsManager.effectElements[t],
                  e
                ))
              : e.data.ef[t].ty === 29 &&
                ((n += 1),
                (o = new SVGGaussianBlurEffect(
                  s,
                  e.effectsManager.effectElements[t]
                ))),
            o && this.filters.push(o);
        n &&
          (e.globalData.defs.appendChild(s),
          e.layerElement.setAttribute(
            'filter',
            'url(' + locationHref + '#' + i + ')'
          )),
          this.filters.length && e.addRenderableComponent(this);
      }
      SVGEffects.prototype.renderFrame = function (e) {
        var t,
          r = this.filters.length;
        for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e);
      };
      function CVContextData() {
        (this.saved = []),
          (this.cArrPos = 0),
          (this.cTr = new Matrix()),
          (this.cO = 1);
        var e,
          t = 15;
        for (
          this.savedOp = createTypedArray('float32', t), e = 0;
          e < t;
          e += 1
        )
          this.saved[e] = createTypedArray('float32', 16);
        this._length = t;
      }
      (CVContextData.prototype.duplicate = function () {
        var e = this._length * 2,
          t = this.savedOp;
        (this.savedOp = createTypedArray('float32', e)), this.savedOp.set(t);
        var r = 0;
        for (r = this._length; r < e; r += 1)
          this.saved[r] = createTypedArray('float32', 16);
        this._length = e;
      }),
        (CVContextData.prototype.reset = function () {
          (this.cArrPos = 0), this.cTr.reset(), (this.cO = 1);
        });
      function CVBaseElement() {}
      (CVBaseElement.prototype = {
        createElements: function () {},
        initRendererElement: function () {},
        createContainerElements: function () {
          (this.canvasContext = this.globalData.canvasContext),
            (this.renderableEffectsManager = new CVEffects(this));
        },
        createContent: function () {},
        setBlendMode: function () {
          var e = this.globalData;
          if (e.blendMode !== this.data.bm) {
            e.blendMode = this.data.bm;
            var t = getBlendMode(this.data.bm);
            e.canvasContext.globalCompositeOperation = t;
          }
        },
        createRenderableComponents: function () {
          this.maskManager = new CVMaskElement(this.data, this);
        },
        hideElement: function () {
          !this.hidden &&
            (!this.isInRange || this.isTransparent) &&
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
          if (!(this.hidden || this.data.hd)) {
            this.renderTransform(),
              this.renderRenderable(),
              this.setBlendMode();
            var e = this.data.ty === 0;
            this.globalData.renderer.save(e),
              this.globalData.renderer.ctxTransform(
                this.finalTransform.mat.props
              ),
              this.globalData.renderer.ctxOpacity(
                this.finalTransform.mProp.o.v
              ),
              this.renderInnerContent(),
              this.globalData.renderer.restore(e),
              this.maskManager.hasMasks && this.globalData.renderer.restore(!0),
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
        (CVBaseElement.prototype.show = CVBaseElement.prototype.showElement);
      function CVImageElement(e, t, r) {
        (this.assetData = t.getAssetData(e.refId)),
          (this.img = t.imageLoader.getAsset(this.assetData)),
          this.initElement(e, t, r);
      }
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
            var e = createTag('canvas');
            (e.width = this.assetData.w), (e.height = this.assetData.h);
            var t = e.getContext('2d'),
              r = this.img.width,
              i = this.img.height,
              s = r / i,
              n = this.assetData.w / this.assetData.h,
              o,
              c,
              u =
                this.assetData.pr ||
                this.globalData.renderConfig.imagePreserveAspectRatio;
            (s > n && u === 'xMidYMid slice') ||
            (s < n && u !== 'xMidYMid slice')
              ? ((c = i), (o = c * n))
              : ((o = r), (c = o / n)),
              t.drawImage(
                this.img,
                (r - o) / 2,
                (i - c) / 2,
                o,
                c,
                0,
                0,
                this.assetData.w,
                this.assetData.h
              ),
              (this.img = e);
          }
        }),
        (CVImageElement.prototype.renderInnerContent = function () {
          this.canvasContext.drawImage(this.img, 0, 0);
        }),
        (CVImageElement.prototype.destroy = function () {
          this.img = null;
        });
      function CVCompElement(e, t, r) {
        (this.completeLayers = !1),
          (this.layers = e.layers),
          (this.pendingElements = []),
          (this.elements = createSizedArray(this.layers.length)),
          this.initElement(e, t, r),
          (this.tm = e.tm
            ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this)
            : { _placeholder: !0 });
      }
      extendPrototype(
        [CanvasRenderer, ICompElement, CVBaseElement],
        CVCompElement
      ),
        (CVCompElement.prototype.renderInnerContent = function () {
          var e = this.canvasContext;
          e.beginPath(),
            e.moveTo(0, 0),
            e.lineTo(this.data.w, 0),
            e.lineTo(this.data.w, this.data.h),
            e.lineTo(0, this.data.h),
            e.lineTo(0, 0),
            e.clip();
          var t,
            r = this.layers.length;
          for (t = r - 1; t >= 0; t -= 1)
            (this.completeLayers || this.elements[t]) &&
              this.elements[t].renderFrame();
        }),
        (CVCompElement.prototype.destroy = function () {
          var e,
            t = this.layers.length;
          for (e = t - 1; e >= 0; e -= 1)
            this.elements[e] && this.elements[e].destroy();
          (this.layers = null), (this.elements = null);
        });
      function CVMaskElement(e, t) {
        (this.data = e),
          (this.element = t),
          (this.masksProperties = this.data.masksProperties || []),
          (this.viewData = createSizedArray(this.masksProperties.length));
        var r,
          i = this.masksProperties.length,
          s = !1;
        for (r = 0; r < i; r += 1)
          this.masksProperties[r].mode !== 'n' && (s = !0),
            (this.viewData[r] = ShapePropertyFactory.getShapeProp(
              this.element,
              this.masksProperties[r],
              3
            ));
        (this.hasMasks = s), s && this.element.addRenderableComponent(this);
      }
      (CVMaskElement.prototype.renderFrame = function () {
        if (!!this.hasMasks) {
          var e = this.element.finalTransform.mat,
            t = this.element.canvasContext,
            r,
            i = this.masksProperties.length,
            s,
            n,
            o;
          for (t.beginPath(), r = 0; r < i; r += 1)
            if (this.masksProperties[r].mode !== 'n') {
              this.masksProperties[r].inv &&
                (t.moveTo(0, 0),
                t.lineTo(this.element.globalData.compSize.w, 0),
                t.lineTo(
                  this.element.globalData.compSize.w,
                  this.element.globalData.compSize.h
                ),
                t.lineTo(0, this.element.globalData.compSize.h),
                t.lineTo(0, 0)),
                (o = this.viewData[r].v),
                (s = e.applyToPointArray(o.v[0][0], o.v[0][1], 0)),
                t.moveTo(s[0], s[1]);
              var c,
                u = o._length;
              for (c = 1; c < u; c += 1)
                (n = e.applyToTriplePoints(o.o[c - 1], o.i[c], o.v[c])),
                  t.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
              (n = e.applyToTriplePoints(o.o[c - 1], o.i[0], o.v[0])),
                t.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
            }
          this.element.globalData.renderer.save(!0), t.clip();
        }
      }),
        (CVMaskElement.prototype.getMaskProperty =
          MaskElement.prototype.getMaskProperty),
        (CVMaskElement.prototype.destroy = function () {
          this.element = null;
        });
      function CVShapeElement(e, t, r) {
        (this.shapes = []),
          (this.shapesData = e.shapes),
          (this.stylesList = []),
          (this.itemsData = []),
          (this.prevViewData = []),
          (this.shapeModifiers = []),
          (this.processedElements = []),
          (this.transformsManager = new ShapeTransformManager()),
          this.initElement(e, t, r);
      }
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
        (CVShapeElement.prototype.createStyleElement = function (e, t) {
          var r = {
              data: e,
              type: e.ty,
              preTransforms: this.transformsManager.addTransformSequence(t),
              transforms: [],
              elements: [],
              closed: e.hd === !0,
            },
            i = {};
          if (
            (e.ty === 'fl' || e.ty === 'st'
              ? ((i.c = PropertyFactory.getProp(this, e.c, 1, 255, this)),
                i.c.k ||
                  (r.co =
                    'rgb(' +
                    bmFloor(i.c.v[0]) +
                    ',' +
                    bmFloor(i.c.v[1]) +
                    ',' +
                    bmFloor(i.c.v[2]) +
                    ')'))
              : (e.ty === 'gf' || e.ty === 'gs') &&
                ((i.s = PropertyFactory.getProp(this, e.s, 1, null, this)),
                (i.e = PropertyFactory.getProp(this, e.e, 1, null, this)),
                (i.h = PropertyFactory.getProp(
                  this,
                  e.h || { k: 0 },
                  0,
                  0.01,
                  this
                )),
                (i.a = PropertyFactory.getProp(
                  this,
                  e.a || { k: 0 },
                  0,
                  degToRads,
                  this
                )),
                (i.g = new GradientProperty(this, e.g, this))),
            (i.o = PropertyFactory.getProp(this, e.o, 0, 0.01, this)),
            e.ty === 'st' || e.ty === 'gs')
          ) {
            if (
              ((r.lc = lineCapEnum[e.lc || 2]),
              (r.lj = lineJoinEnum[e.lj || 2]),
              e.lj == 1 && (r.ml = e.ml),
              (i.w = PropertyFactory.getProp(this, e.w, 0, null, this)),
              i.w.k || (r.wi = i.w.v),
              e.d)
            ) {
              var s = new DashProperty(this, e.d, 'canvas', this);
              (i.d = s),
                i.d.k || ((r.da = i.d.dashArray), (r.do = i.d.dashoffset[0]));
            }
          } else r.r = e.r === 2 ? 'evenodd' : 'nonzero';
          return this.stylesList.push(r), (i.style = r), i;
        }),
        (CVShapeElement.prototype.createGroupElement = function () {
          var e = { it: [], prevViewData: [] };
          return e;
        }),
        (CVShapeElement.prototype.createTransformElement = function (e) {
          var t = {
            transform: {
              opacity: 1,
              _opMdf: !1,
              key: this.transformsManager.getNewKey(),
              op: PropertyFactory.getProp(this, e.o, 0, 0.01, this),
              mProps: TransformPropertyFactory.getTransformProperty(
                this,
                e,
                this
              ),
            },
          };
          return t;
        }),
        (CVShapeElement.prototype.createShapeElement = function (e) {
          var t = new CVShapeData(
            this,
            e,
            this.stylesList,
            this.transformsManager
          );
          return this.shapes.push(t), this.addShapeToModifiers(t), t;
        }),
        (CVShapeElement.prototype.reloadShapes = function () {
          this._isFirstFrame = !0;
          var e,
            t = this.itemsData.length;
          for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
          for (
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              !0,
              []
            ),
              t = this.dynamicProperties.length,
              e = 0;
            e < t;
            e += 1
          )
            this.dynamicProperties[e].getValue();
          this.renderModifiers(),
            this.transformsManager.processSequences(this._isFirstFrame);
        }),
        (CVShapeElement.prototype.addTransformToStyleList = function (e) {
          var t,
            r = this.stylesList.length;
          for (t = 0; t < r; t += 1)
            this.stylesList[t].closed || this.stylesList[t].transforms.push(e);
        }),
        (CVShapeElement.prototype.removeTransformFromStyleList = function () {
          var e,
            t = this.stylesList.length;
          for (e = 0; e < t; e += 1)
            this.stylesList[e].closed || this.stylesList[e].transforms.pop();
        }),
        (CVShapeElement.prototype.closeStyles = function (e) {
          var t,
            r = e.length;
          for (t = 0; t < r; t += 1) e[t].closed = !0;
        }),
        (CVShapeElement.prototype.searchShapes = function (e, t, r, i, s) {
          var n,
            o = e.length - 1,
            c,
            u,
            d = [],
            x = [],
            _,
            m,
            v,
            p = [].concat(s);
          for (n = o; n >= 0; n -= 1) {
            if (
              ((_ = this.searchProcessedElement(e[n])),
              _ ? (t[n] = r[_ - 1]) : (e[n]._shouldRender = i),
              e[n].ty === 'fl' ||
                e[n].ty === 'st' ||
                e[n].ty === 'gf' ||
                e[n].ty === 'gs')
            )
              _
                ? (t[n].style.closed = !1)
                : (t[n] = this.createStyleElement(e[n], p)),
                d.push(t[n].style);
            else if (e[n].ty === 'gr') {
              if (!_) t[n] = this.createGroupElement(e[n]);
              else
                for (u = t[n].it.length, c = 0; c < u; c += 1)
                  t[n].prevViewData[c] = t[n].it[c];
              this.searchShapes(e[n].it, t[n].it, t[n].prevViewData, i, p);
            } else
              e[n].ty === 'tr'
                ? (_ || ((v = this.createTransformElement(e[n])), (t[n] = v)),
                  p.push(t[n]),
                  this.addTransformToStyleList(t[n]))
                : e[n].ty === 'sh' ||
                  e[n].ty === 'rc' ||
                  e[n].ty === 'el' ||
                  e[n].ty === 'sr'
                ? _ || (t[n] = this.createShapeElement(e[n]))
                : e[n].ty === 'tm' || e[n].ty === 'rd' || e[n].ty === 'pb'
                ? (_
                    ? ((m = t[n]), (m.closed = !1))
                    : ((m = ShapeModifiers.getModifier(e[n].ty)),
                      m.init(this, e[n]),
                      (t[n] = m),
                      this.shapeModifiers.push(m)),
                  x.push(m))
                : e[n].ty === 'rp' &&
                  (_
                    ? ((m = t[n]), (m.closed = !0))
                    : ((m = ShapeModifiers.getModifier(e[n].ty)),
                      (t[n] = m),
                      m.init(this, e, n, t),
                      this.shapeModifiers.push(m),
                      (i = !1)),
                  x.push(m));
            this.addProcessedElement(e[n], n + 1);
          }
          for (
            this.removeTransformFromStyleList(),
              this.closeStyles(d),
              o = x.length,
              n = 0;
            n < o;
            n += 1
          )
            x[n].closed = !0;
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
        (CVShapeElement.prototype.renderShapeTransform = function (e, t) {
          (e._opMdf || t.op._mdf || this._isFirstFrame) &&
            ((t.opacity = e.opacity), (t.opacity *= t.op.v), (t._opMdf = !0));
        }),
        (CVShapeElement.prototype.drawLayer = function () {
          var e,
            t = this.stylesList.length,
            r,
            i,
            s,
            n,
            o,
            c,
            u = this.globalData.renderer,
            d = this.globalData.canvasContext,
            x,
            _;
          for (e = 0; e < t; e += 1)
            if (
              ((_ = this.stylesList[e]),
              (x = _.type),
              !(
                ((x === 'st' || x === 'gs') && _.wi === 0) ||
                !_.data._shouldRender ||
                _.coOp === 0 ||
                this.globalData.currentGlobalAlpha === 0
              ))
            ) {
              for (
                u.save(),
                  o = _.elements,
                  x === 'st' || x === 'gs'
                    ? ((d.strokeStyle = x === 'st' ? _.co : _.grd),
                      (d.lineWidth = _.wi),
                      (d.lineCap = _.lc),
                      (d.lineJoin = _.lj),
                      (d.miterLimit = _.ml || 0))
                    : (d.fillStyle = x === 'fl' ? _.co : _.grd),
                  u.ctxOpacity(_.coOp),
                  x !== 'st' && x !== 'gs' && d.beginPath(),
                  u.ctxTransform(_.preTransforms.finalTransform.props),
                  i = o.length,
                  r = 0;
                r < i;
                r += 1
              ) {
                for (
                  (x === 'st' || x === 'gs') &&
                    (d.beginPath(),
                    _.da && (d.setLineDash(_.da), (d.lineDashOffset = _.do))),
                    c = o[r].trNodes,
                    n = c.length,
                    s = 0;
                  s < n;
                  s += 1
                )
                  c[s].t === 'm'
                    ? d.moveTo(c[s].p[0], c[s].p[1])
                    : c[s].t === 'c'
                    ? d.bezierCurveTo(
                        c[s].pts[0],
                        c[s].pts[1],
                        c[s].pts[2],
                        c[s].pts[3],
                        c[s].pts[4],
                        c[s].pts[5]
                      )
                    : d.closePath();
                (x === 'st' || x === 'gs') &&
                  (d.stroke(), _.da && d.setLineDash(this.dashResetter));
              }
              x !== 'st' && x !== 'gs' && d.fill(_.r), u.restore();
            }
        }),
        (CVShapeElement.prototype.renderShape = function (e, t, r, i) {
          var s,
            n = t.length - 1,
            o;
          for (o = e, s = n; s >= 0; s -= 1)
            t[s].ty === 'tr'
              ? ((o = r[s].transform), this.renderShapeTransform(e, o))
              : t[s].ty === 'sh' ||
                t[s].ty === 'el' ||
                t[s].ty === 'rc' ||
                t[s].ty === 'sr'
              ? this.renderPath(t[s], r[s])
              : t[s].ty === 'fl'
              ? this.renderFill(t[s], r[s], o)
              : t[s].ty === 'st'
              ? this.renderStroke(t[s], r[s], o)
              : t[s].ty === 'gf' || t[s].ty === 'gs'
              ? this.renderGradientFill(t[s], r[s], o)
              : t[s].ty === 'gr'
              ? this.renderShape(o, t[s].it, r[s].it)
              : t[s].ty === 'tm';
          i && this.drawLayer();
        }),
        (CVShapeElement.prototype.renderStyledShape = function (e, t) {
          if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
            var r = e.trNodes,
              i = t.paths,
              s,
              n,
              o,
              c = i._length;
            r.length = 0;
            var u = e.transforms.finalTransform;
            for (o = 0; o < c; o += 1) {
              var d = i.shapes[o];
              if (d && d.v) {
                for (n = d._length, s = 1; s < n; s += 1)
                  s === 1 &&
                    r.push({
                      t: 'm',
                      p: u.applyToPointArray(d.v[0][0], d.v[0][1], 0),
                    }),
                    r.push({
                      t: 'c',
                      pts: u.applyToTriplePoints(d.o[s - 1], d.i[s], d.v[s]),
                    });
                n === 1 &&
                  r.push({
                    t: 'm',
                    p: u.applyToPointArray(d.v[0][0], d.v[0][1], 0),
                  }),
                  d.c &&
                    n &&
                    (r.push({
                      t: 'c',
                      pts: u.applyToTriplePoints(d.o[s - 1], d.i[0], d.v[0]),
                    }),
                    r.push({ t: 'z' }));
              }
            }
            e.trNodes = r;
          }
        }),
        (CVShapeElement.prototype.renderPath = function (e, t) {
          if (e.hd !== !0 && e._shouldRender) {
            var r,
              i = t.styledShapes.length;
            for (r = 0; r < i; r += 1)
              this.renderStyledShape(t.styledShapes[r], t.sh);
          }
        }),
        (CVShapeElement.prototype.renderFill = function (e, t, r) {
          var i = t.style;
          (t.c._mdf || this._isFirstFrame) &&
            (i.co =
              'rgb(' +
              bmFloor(t.c.v[0]) +
              ',' +
              bmFloor(t.c.v[1]) +
              ',' +
              bmFloor(t.c.v[2]) +
              ')'),
            (t.o._mdf || r._opMdf || this._isFirstFrame) &&
              (i.coOp = t.o.v * r.opacity);
        }),
        (CVShapeElement.prototype.renderGradientFill = function (e, t, r) {
          var i = t.style,
            s;
          if (
            !i.grd ||
            t.g._mdf ||
            t.s._mdf ||
            t.e._mdf ||
            (e.t !== 1 && (t.h._mdf || t.a._mdf))
          ) {
            var n = this.globalData.canvasContext,
              o = t.s.v,
              c = t.e.v;
            if (e.t === 1) s = n.createLinearGradient(o[0], o[1], c[0], c[1]);
            else {
              var u = Math.sqrt(
                  Math.pow(o[0] - c[0], 2) + Math.pow(o[1] - c[1], 2)
                ),
                d = Math.atan2(c[1] - o[1], c[0] - o[0]),
                x = t.h.v;
              x >= 1 ? (x = 0.99) : x <= -1 && (x = -0.99);
              var _ = u * x,
                m = Math.cos(d + t.a.v) * _ + o[0],
                v = Math.sin(d + t.a.v) * _ + o[1];
              s = n.createRadialGradient(m, v, 0, o[0], o[1], u);
            }
            var p,
              g = e.g.p,
              b = t.g.c,
              l = 1;
            for (p = 0; p < g; p += 1)
              t.g._hasOpacity && t.g._collapsable && (l = t.g.o[p * 2 + 1]),
                s.addColorStop(
                  b[p * 4] / 100,
                  'rgba(' +
                    b[p * 4 + 1] +
                    ',' +
                    b[p * 4 + 2] +
                    ',' +
                    b[p * 4 + 3] +
                    ',' +
                    l +
                    ')'
                );
            i.grd = s;
          }
          i.coOp = t.o.v * r.opacity;
        }),
        (CVShapeElement.prototype.renderStroke = function (e, t, r) {
          var i = t.style,
            s = t.d;
          s &&
            (s._mdf || this._isFirstFrame) &&
            ((i.da = s.dashArray), (i.do = s.dashoffset[0])),
            (t.c._mdf || this._isFirstFrame) &&
              (i.co =
                'rgb(' +
                bmFloor(t.c.v[0]) +
                ',' +
                bmFloor(t.c.v[1]) +
                ',' +
                bmFloor(t.c.v[2]) +
                ')'),
            (t.o._mdf || r._opMdf || this._isFirstFrame) &&
              (i.coOp = t.o.v * r.opacity),
            (t.w._mdf || this._isFirstFrame) && (i.wi = t.w.v);
        }),
        (CVShapeElement.prototype.destroy = function () {
          (this.shapesData = null),
            (this.globalData = null),
            (this.canvasContext = null),
            (this.stylesList.length = 0),
            (this.itemsData.length = 0);
        });
      function CVSolidElement(e, t, r) {
        this.initElement(e, t, r);
      }
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
          var e = this.canvasContext;
          (e.fillStyle = this.data.sc),
            e.fillRect(0, 0, this.data.sw, this.data.sh);
        });
      function CVTextElement(e, t, r) {
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
          this.initElement(e, t, r);
      }
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
          var e = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
          var t = !1;
          e.fc
            ? ((t = !0), (this.values.fill = this.buildColor(e.fc)))
            : (this.values.fill = 'rgba(0,0,0,0)'),
            (this.fill = t);
          var r = !1;
          e.sc &&
            ((r = !0),
            (this.values.stroke = this.buildColor(e.sc)),
            (this.values.sWidth = e.sw));
          var i = this.globalData.fontManager.getFontByName(e.f),
            s,
            n,
            o = e.l,
            c = this.mHelper;
          (this.stroke = r),
            (this.values.fValue =
              e.finalSize +
              'px ' +
              this.globalData.fontManager.getFontByName(e.f).fFamily),
            (n = e.finalText.length);
          var u,
            d,
            x,
            _,
            m,
            v,
            p,
            g,
            b,
            l,
            a = this.data.singleShape,
            h = e.tr * 0.001 * e.finalSize,
            f = 0,
            y = 0,
            k = !0,
            w = 0;
          for (s = 0; s < n; s += 1) {
            for (
              u = this.globalData.fontManager.getCharData(
                e.finalText[s],
                i.fStyle,
                this.globalData.fontManager.getFontByName(e.f).fFamily
              ),
                d = (u && u.data) || {},
                c.reset(),
                a &&
                  o[s].n &&
                  ((f = -h), (y += e.yOffset), (y += k ? 1 : 0), (k = !1)),
                m = d.shapes ? d.shapes[0].it : [],
                p = m.length,
                c.scale(e.finalSize / 100, e.finalSize / 100),
                a && this.applyTextPropertiesToMatrix(e, c, o[s].line, f, y),
                b = createSizedArray(p),
                v = 0;
              v < p;
              v += 1
            ) {
              for (
                _ = m[v].ks.k.i.length, g = m[v].ks.k, l = [], x = 1;
                x < _;
                x += 1
              )
                x === 1 &&
                  l.push(
                    c.applyToX(g.v[0][0], g.v[0][1], 0),
                    c.applyToY(g.v[0][0], g.v[0][1], 0)
                  ),
                  l.push(
                    c.applyToX(g.o[x - 1][0], g.o[x - 1][1], 0),
                    c.applyToY(g.o[x - 1][0], g.o[x - 1][1], 0),
                    c.applyToX(g.i[x][0], g.i[x][1], 0),
                    c.applyToY(g.i[x][0], g.i[x][1], 0),
                    c.applyToX(g.v[x][0], g.v[x][1], 0),
                    c.applyToY(g.v[x][0], g.v[x][1], 0)
                  );
              l.push(
                c.applyToX(g.o[x - 1][0], g.o[x - 1][1], 0),
                c.applyToY(g.o[x - 1][0], g.o[x - 1][1], 0),
                c.applyToX(g.i[0][0], g.i[0][1], 0),
                c.applyToY(g.i[0][0], g.i[0][1], 0),
                c.applyToX(g.v[0][0], g.v[0][1], 0),
                c.applyToY(g.v[0][0], g.v[0][1], 0)
              ),
                (b[v] = l);
            }
            a && ((f += o[s].l), (f += h)),
              this.textSpans[w]
                ? (this.textSpans[w].elem = b)
                : (this.textSpans[w] = { elem: b }),
              (w += 1);
          }
        }),
        (CVTextElement.prototype.renderInnerContent = function () {
          var e = this.canvasContext;
          (e.font = this.values.fValue),
            (e.lineCap = 'butt'),
            (e.lineJoin = 'miter'),
            (e.miterLimit = 4),
            this.data.singleShape ||
              this.textAnimator.getMeasures(
                this.textProperty.currentData,
                this.lettersChangedFlag
              );
          var t,
            r,
            i,
            s,
            n,
            o,
            c = this.textAnimator.renderedLetters,
            u = this.textProperty.currentData.l;
          r = u.length;
          var d,
            x = null,
            _ = null,
            m = null,
            v,
            p;
          for (t = 0; t < r; t += 1)
            if (!u[t].n) {
              if (
                ((d = c[t]),
                d &&
                  (this.globalData.renderer.save(),
                  this.globalData.renderer.ctxTransform(d.p),
                  this.globalData.renderer.ctxOpacity(d.o)),
                this.fill)
              ) {
                for (
                  d && d.fc
                    ? x !== d.fc && ((x = d.fc), (e.fillStyle = d.fc))
                    : x !== this.values.fill &&
                      ((x = this.values.fill),
                      (e.fillStyle = this.values.fill)),
                    v = this.textSpans[t].elem,
                    s = v.length,
                    this.globalData.canvasContext.beginPath(),
                    i = 0;
                  i < s;
                  i += 1
                )
                  for (
                    p = v[i],
                      o = p.length,
                      this.globalData.canvasContext.moveTo(p[0], p[1]),
                      n = 2;
                    n < o;
                    n += 6
                  )
                    this.globalData.canvasContext.bezierCurveTo(
                      p[n],
                      p[n + 1],
                      p[n + 2],
                      p[n + 3],
                      p[n + 4],
                      p[n + 5]
                    );
                this.globalData.canvasContext.closePath(),
                  this.globalData.canvasContext.fill();
              }
              if (this.stroke) {
                for (
                  d && d.sw
                    ? m !== d.sw && ((m = d.sw), (e.lineWidth = d.sw))
                    : m !== this.values.sWidth &&
                      ((m = this.values.sWidth),
                      (e.lineWidth = this.values.sWidth)),
                    d && d.sc
                      ? _ !== d.sc && ((_ = d.sc), (e.strokeStyle = d.sc))
                      : _ !== this.values.stroke &&
                        ((_ = this.values.stroke),
                        (e.strokeStyle = this.values.stroke)),
                    v = this.textSpans[t].elem,
                    s = v.length,
                    this.globalData.canvasContext.beginPath(),
                    i = 0;
                  i < s;
                  i += 1
                )
                  for (
                    p = v[i],
                      o = p.length,
                      this.globalData.canvasContext.moveTo(p[0], p[1]),
                      n = 2;
                    n < o;
                    n += 6
                  )
                    this.globalData.canvasContext.bezierCurveTo(
                      p[n],
                      p[n + 1],
                      p[n + 2],
                      p[n + 3],
                      p[n + 4],
                      p[n + 5]
                    );
                this.globalData.canvasContext.closePath(),
                  this.globalData.canvasContext.stroke();
              }
              d && this.globalData.renderer.restore();
            }
        });
      function CVEffects() {}
      CVEffects.prototype.renderFrame = function () {};
      function HBaseElement() {}
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
            this.data.ln && this.layerElement.setAttribute('id', this.data.ln),
            this.data.cl &&
              this.layerElement.setAttribute('class', this.data.cl),
            this.data.bm !== 0 && this.setBlendMode();
        },
        renderElement: function () {
          var e = this.transformedElement ? this.transformedElement.style : {};
          if (this.finalTransform._matMdf) {
            var t = this.finalTransform.mat.toCSS();
            (e.transform = t), (e.webkitTransform = t);
          }
          this.finalTransform._opMdf &&
            (e.opacity = this.finalTransform.mProp.o.v);
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
          this.maskManager = new MaskElement(this.data, this, this.globalData);
        },
        addEffects: function () {},
        setMatte: function () {},
      }),
        (HBaseElement.prototype.getBaseElement =
          SVGBaseElement.prototype.getBaseElement),
        (HBaseElement.prototype.destroyBaseElement =
          HBaseElement.prototype.destroy),
        (HBaseElement.prototype.buildElementParenting =
          HybridRenderer.prototype.buildElementParenting);
      function HSolidElement(e, t, r) {
        this.initElement(e, t, r);
      }
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
          var e;
          this.data.hasMask
            ? ((e = createNS('rect')),
              e.setAttribute('width', this.data.sw),
              e.setAttribute('height', this.data.sh),
              e.setAttribute('fill', this.data.sc),
              this.svgElement.setAttribute('width', this.data.sw),
              this.svgElement.setAttribute('height', this.data.sh))
            : ((e = createTag('div')),
              (e.style.width = this.data.sw + 'px'),
              (e.style.height = this.data.sh + 'px'),
              (e.style.backgroundColor = this.data.sc)),
            this.layerElement.appendChild(e);
        });
      function HCompElement(e, t, r) {
        (this.layers = e.layers),
          (this.supports3d = !e.hasMask),
          (this.completeLayers = !1),
          (this.pendingElements = []),
          (this.elements = this.layers
            ? createSizedArray(this.layers.length)
            : []),
          this.initElement(e, t, r),
          (this.tm = e.tm
            ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this)
            : { _placeholder: !0 });
      }
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
        (HCompElement.prototype.addTo3dContainer = function (e, t) {
          for (var r = 0, i; r < t; )
            this.elements[r] &&
              this.elements[r].getBaseElement &&
              (i = this.elements[r].getBaseElement()),
              (r += 1);
          i
            ? this.layerElement.insertBefore(e, i)
            : this.layerElement.appendChild(e);
        });
      function HShapeElement(e, t, r) {
        (this.shapes = []),
          (this.shapesData = e.shapes),
          (this.stylesList = []),
          (this.shapeModifiers = []),
          (this.itemsData = []),
          (this.processedElements = []),
          (this.animatedContents = []),
          (this.shapesContainer = createNS('g')),
          this.initElement(e, t, r),
          (this.prevViewData = []),
          (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 });
      }
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
          var e;
          if (((this.baseElement.style.fontSize = 0), this.data.hasMask))
            this.layerElement.appendChild(this.shapesContainer),
              (e = this.svgElement);
          else {
            e = createNS('svg');
            var t = this.comp.data ? this.comp.data : this.globalData.compSize;
            e.setAttribute('width', t.w),
              e.setAttribute('height', t.h),
              e.appendChild(this.shapesContainer),
              this.layerElement.appendChild(e);
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
            (this.shapeCont = e);
        }),
        (HShapeElement.prototype.getTransformedPoint = function (e, t) {
          var r,
            i = e.length;
          for (r = 0; r < i; r += 1)
            t = e[r].mProps.v.applyToPointArray(t[0], t[1], 0);
          return t;
        }),
        (HShapeElement.prototype.calculateShapeBoundingBox = function (e, t) {
          var r = e.sh.v,
            i = e.transformers,
            s,
            n = r._length,
            o,
            c,
            u,
            d;
          if (!(n <= 1)) {
            for (s = 0; s < n - 1; s += 1)
              (o = this.getTransformedPoint(i, r.v[s])),
                (c = this.getTransformedPoint(i, r.o[s])),
                (u = this.getTransformedPoint(i, r.i[s + 1])),
                (d = this.getTransformedPoint(i, r.v[s + 1])),
                this.checkBounds(o, c, u, d, t);
            r.c &&
              ((o = this.getTransformedPoint(i, r.v[s])),
              (c = this.getTransformedPoint(i, r.o[s])),
              (u = this.getTransformedPoint(i, r.i[0])),
              (d = this.getTransformedPoint(i, r.v[0])),
              this.checkBounds(o, c, u, d, t));
          }
        }),
        (HShapeElement.prototype.checkBounds = function (e, t, r, i, s) {
          this.getBoundsOfCurve(e, t, r, i);
          var n = this.shapeBoundingBox;
          (s.x = bmMin(n.left, s.x)),
            (s.xMax = bmMax(n.right, s.xMax)),
            (s.y = bmMin(n.top, s.y)),
            (s.yMax = bmMax(n.bottom, s.yMax));
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
        (HShapeElement.prototype.getBoundsOfCurve = function (e, t, r, i) {
          for (
            var s = [
                [e[0], i[0]],
                [e[1], i[1]],
              ],
              n,
              o,
              c,
              u,
              d,
              x,
              _,
              m = 0;
            m < 2;
            ++m
          )
            (o = 6 * e[m] - 12 * t[m] + 6 * r[m]),
              (n = -3 * e[m] + 9 * t[m] - 9 * r[m] + 3 * i[m]),
              (c = 3 * t[m] - 3 * e[m]),
              (o |= 0),
              (n |= 0),
              (c |= 0),
              (n === 0 && o === 0) ||
                (n === 0
                  ? ((u = -c / o),
                    u > 0 &&
                      u < 1 &&
                      s[m].push(this.calculateF(u, e, t, r, i, m)))
                  : ((d = o * o - 4 * c * n),
                    d >= 0 &&
                      ((x = (-o + bmSqrt(d)) / (2 * n)),
                      x > 0 &&
                        x < 1 &&
                        s[m].push(this.calculateF(x, e, t, r, i, m)),
                      (_ = (-o - bmSqrt(d)) / (2 * n)),
                      _ > 0 &&
                        _ < 1 &&
                        s[m].push(this.calculateF(_, e, t, r, i, m)))));
          (this.shapeBoundingBox.left = bmMin.apply(null, s[0])),
            (this.shapeBoundingBox.top = bmMin.apply(null, s[1])),
            (this.shapeBoundingBox.right = bmMax.apply(null, s[0])),
            (this.shapeBoundingBox.bottom = bmMax.apply(null, s[1]));
        }),
        (HShapeElement.prototype.calculateF = function (e, t, r, i, s, n) {
          return (
            bmPow(1 - e, 3) * t[n] +
            3 * bmPow(1 - e, 2) * e * r[n] +
            3 * (1 - e) * bmPow(e, 2) * i[n] +
            bmPow(e, 3) * s[n]
          );
        }),
        (HShapeElement.prototype.calculateBoundingBox = function (e, t) {
          var r,
            i = e.length;
          for (r = 0; r < i; r += 1)
            e[r] && e[r].sh
              ? this.calculateShapeBoundingBox(e[r], t)
              : e[r] && e[r].it && this.calculateBoundingBox(e[r].it, t);
        }),
        (HShapeElement.prototype.currentBoxContains = function (e) {
          return (
            this.currentBBox.x <= e.x &&
            this.currentBBox.y <= e.y &&
            this.currentBBox.width + this.currentBBox.x >= e.x + e.width &&
            this.currentBBox.height + this.currentBBox.y >= e.y + e.height
          );
        }),
        (HShapeElement.prototype.renderInnerContent = function () {
          if (
            (this._renderShapeFrame(),
            !this.hidden && (this._isFirstFrame || this._mdf))
          ) {
            var e = this.tempBoundingBox,
              t = 999999;
            if (
              ((e.x = t),
              (e.xMax = -t),
              (e.y = t),
              (e.yMax = -t),
              this.calculateBoundingBox(this.itemsData, e),
              (e.width = e.xMax < e.x ? 0 : e.xMax - e.x),
              (e.height = e.yMax < e.y ? 0 : e.yMax - e.y),
              this.currentBoxContains(e))
            )
              return;
            var r = !1;
            if (
              (this.currentBBox.w !== e.width &&
                ((this.currentBBox.w = e.width),
                this.shapeCont.setAttribute('width', e.width),
                (r = !0)),
              this.currentBBox.h !== e.height &&
                ((this.currentBBox.h = e.height),
                this.shapeCont.setAttribute('height', e.height),
                (r = !0)),
              r || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y)
            ) {
              (this.currentBBox.w = e.width),
                (this.currentBBox.h = e.height),
                (this.currentBBox.x = e.x),
                (this.currentBBox.y = e.y),
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
        });
      function HTextElement(e, t, r) {
        (this.textSpans = []),
          (this.textPaths = []),
          (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }),
          (this.renderType = 'svg'),
          (this.isMasked = !1),
          this.initElement(e, t, r);
      }
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
            var e = createNS('g');
            this.maskedElement.appendChild(e), (this.innerElem = e);
          } else
            (this.renderType = 'html'), (this.innerElem = this.layerElement);
          this.checkParenting();
        }),
        (HTextElement.prototype.buildNewText = function () {
          var e = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
          var t = this.innerElem.style,
            r = e.fc ? this.buildColor(e.fc) : 'rgba(0,0,0,0)';
          (t.fill = r),
            (t.color = r),
            e.sc &&
              ((t.stroke = this.buildColor(e.sc)),
              (t.strokeWidth = e.sw + 'px'));
          var i = this.globalData.fontManager.getFontByName(e.f);
          if (!this.globalData.fontManager.chars)
            if (
              ((t.fontSize = e.finalSize + 'px'),
              (t.lineHeight = e.finalSize + 'px'),
              i.fClass)
            )
              this.innerElem.className = i.fClass;
            else {
              t.fontFamily = i.fFamily;
              var s = e.fWeight,
                n = e.fStyle;
              (t.fontStyle = n), (t.fontWeight = s);
            }
          var o,
            c,
            u = e.l;
          c = u.length;
          var d,
            x,
            _,
            m = this.mHelper,
            v,
            p = '',
            g = 0;
          for (o = 0; o < c; o += 1) {
            if (
              (this.globalData.fontManager.chars
                ? (this.textPaths[g]
                    ? (d = this.textPaths[g])
                    : ((d = createNS('path')),
                      d.setAttribute('stroke-linecap', lineCapEnum[1]),
                      d.setAttribute('stroke-linejoin', lineJoinEnum[2]),
                      d.setAttribute('stroke-miterlimit', '4')),
                  this.isMasked ||
                    (this.textSpans[g]
                      ? ((x = this.textSpans[g]), (_ = x.children[0]))
                      : ((x = createTag('div')),
                        (x.style.lineHeight = 0),
                        (_ = createNS('svg')),
                        _.appendChild(d),
                        styleDiv(x))))
                : this.isMasked
                ? (d = this.textPaths[g] ? this.textPaths[g] : createNS('text'))
                : this.textSpans[g]
                ? ((x = this.textSpans[g]), (d = this.textPaths[g]))
                : ((x = createTag('span')),
                  styleDiv(x),
                  (d = createTag('span')),
                  styleDiv(d),
                  x.appendChild(d)),
              this.globalData.fontManager.chars)
            ) {
              var b = this.globalData.fontManager.getCharData(
                  e.finalText[o],
                  i.fStyle,
                  this.globalData.fontManager.getFontByName(e.f).fFamily
                ),
                l;
              if (
                (b ? (l = b.data) : (l = null),
                m.reset(),
                l &&
                  l.shapes &&
                  ((v = l.shapes[0].it),
                  m.scale(e.finalSize / 100, e.finalSize / 100),
                  (p = this.createPathShape(m, v)),
                  d.setAttribute('d', p)),
                this.isMasked)
              )
                this.innerElem.appendChild(d);
              else {
                if ((this.innerElem.appendChild(x), l && l.shapes)) {
                  document.body.appendChild(_);
                  var a = _.getBBox();
                  _.setAttribute('width', a.width + 2),
                    _.setAttribute('height', a.height + 2),
                    _.setAttribute(
                      'viewBox',
                      a.x -
                        1 +
                        ' ' +
                        (a.y - 1) +
                        ' ' +
                        (a.width + 2) +
                        ' ' +
                        (a.height + 2)
                    );
                  var h = _.style,
                    f = 'translate(' + (a.x - 1) + 'px,' + (a.y - 1) + 'px)';
                  (h.transform = f),
                    (h.webkitTransform = f),
                    (u[o].yOffset = a.y - 1);
                } else _.setAttribute('width', 1), _.setAttribute('height', 1);
                x.appendChild(_);
              }
            } else if (
              ((d.textContent = u[o].val),
              d.setAttributeNS(
                'http://www.w3.org/XML/1998/namespace',
                'xml:space',
                'preserve'
              ),
              this.isMasked)
            )
              this.innerElem.appendChild(d);
            else {
              this.innerElem.appendChild(x);
              var y = d.style,
                k = 'translate3d(0,' + -e.finalSize / 1.2 + 'px,0)';
              (y.transform = k), (y.webkitTransform = k);
            }
            this.isMasked ? (this.textSpans[g] = d) : (this.textSpans[g] = x),
              (this.textSpans[g].style.display = 'block'),
              (this.textPaths[g] = d),
              (g += 1);
          }
          for (; g < this.textSpans.length; )
            (this.textSpans[g].style.display = 'none'), (g += 1);
        }),
        (HTextElement.prototype.renderInnerContent = function () {
          var e;
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
                (e = this.svgElement.style);
              var t =
                'translate(' +
                -this.finalTransform.mProp.p.v[0] +
                'px,' +
                -this.finalTransform.mProp.p.v[1] +
                'px)';
              (e.transform = t), (e.webkitTransform = t);
            }
          }
          if (
            (this.textAnimator.getMeasures(
              this.textProperty.currentData,
              this.lettersChangedFlag
            ),
            !(
              !this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag
            ))
          ) {
            var r,
              i,
              s = 0,
              n = this.textAnimator.renderedLetters,
              o = this.textProperty.currentData.l;
            i = o.length;
            var c, u, d;
            for (r = 0; r < i; r += 1)
              o[r].n
                ? (s += 1)
                : ((u = this.textSpans[r]),
                  (d = this.textPaths[r]),
                  (c = n[s]),
                  (s += 1),
                  c._mdf.m &&
                    (this.isMasked
                      ? u.setAttribute('transform', c.m)
                      : ((u.style.webkitTransform = c.m),
                        (u.style.transform = c.m))),
                  (u.style.opacity = c.o),
                  c.sw && c._mdf.sw && d.setAttribute('stroke-width', c.sw),
                  c.sc && c._mdf.sc && d.setAttribute('stroke', c.sc),
                  c.fc &&
                    c._mdf.fc &&
                    (d.setAttribute('fill', c.fc), (d.style.color = c.fc)));
            if (
              this.innerElem.getBBox &&
              !this.hidden &&
              (this._isFirstFrame || this._mdf)
            ) {
              var x = this.innerElem.getBBox();
              this.currentBBox.w !== x.width &&
                ((this.currentBBox.w = x.width),
                this.svgElement.setAttribute('width', x.width)),
                this.currentBBox.h !== x.height &&
                  ((this.currentBBox.h = x.height),
                  this.svgElement.setAttribute('height', x.height));
              var _ = 1;
              if (
                this.currentBBox.w !== x.width + _ * 2 ||
                this.currentBBox.h !== x.height + _ * 2 ||
                this.currentBBox.x !== x.x - _ ||
                this.currentBBox.y !== x.y - _
              ) {
                (this.currentBBox.w = x.width + _ * 2),
                  (this.currentBBox.h = x.height + _ * 2),
                  (this.currentBBox.x = x.x - _),
                  (this.currentBBox.y = x.y - _),
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
                  (e = this.svgElement.style);
                var m =
                  'translate(' +
                  this.currentBBox.x +
                  'px,' +
                  this.currentBBox.y +
                  'px)';
                (e.transform = m), (e.webkitTransform = m);
              }
            }
          }
        });
      function HImageElement(e, t, r) {
        (this.assetData = t.getAssetData(e.refId)), this.initElement(e, t, r);
      }
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
          var e = this.globalData.getAssetsPath(this.assetData),
            t = new Image();
          this.data.hasMask
            ? ((this.imageElem = createNS('image')),
              this.imageElem.setAttribute('width', this.assetData.w + 'px'),
              this.imageElem.setAttribute('height', this.assetData.h + 'px'),
              this.imageElem.setAttributeNS(
                'http://www.w3.org/1999/xlink',
                'href',
                e
              ),
              this.layerElement.appendChild(this.imageElem),
              this.baseElement.setAttribute('width', this.assetData.w),
              this.baseElement.setAttribute('height', this.assetData.h))
            : this.layerElement.appendChild(t),
            (t.crossOrigin = 'anonymous'),
            (t.src = e),
            this.data.ln && this.baseElement.setAttribute('id', this.data.ln);
        });
      function HCameraElement(e, t, r) {
        this.initFrame(), this.initBaseData(e, t, r), this.initHierarchy();
        var i = PropertyFactory.getProp;
        if (
          ((this.pe = i(this, e.pe, 0, 0, this)),
          e.ks.p.s
            ? ((this.px = i(this, e.ks.p.x, 1, 0, this)),
              (this.py = i(this, e.ks.p.y, 1, 0, this)),
              (this.pz = i(this, e.ks.p.z, 1, 0, this)))
            : (this.p = i(this, e.ks.p, 1, 0, this)),
          e.ks.a && (this.a = i(this, e.ks.a, 1, 0, this)),
          e.ks.or.k.length && e.ks.or.k[0].to)
        ) {
          var s,
            n = e.ks.or.k.length;
          for (s = 0; s < n; s += 1)
            (e.ks.or.k[s].to = null), (e.ks.or.k[s].ti = null);
        }
        (this.or = i(this, e.ks.or, 1, degToRads, this)),
          (this.or.sh = !0),
          (this.rx = i(this, e.ks.rx, 0, degToRads, this)),
          (this.ry = i(this, e.ks.ry, 0, degToRads, this)),
          (this.rz = i(this, e.ks.rz, 0, degToRads, this)),
          (this.mat = new Matrix()),
          (this._prevMat = new Matrix()),
          (this._isFirstFrame = !0),
          (this.finalTransform = { mProp: this });
      }
      extendPrototype(
        [BaseElement, FrameElement, HierarchyElement],
        HCameraElement
      ),
        (HCameraElement.prototype.setup = function () {
          var e,
            t = this.comp.threeDElements.length,
            r,
            i,
            s;
          for (e = 0; e < t; e += 1)
            if (((r = this.comp.threeDElements[e]), r.type === '3d')) {
              (i = r.perspectiveElem.style), (s = r.container.style);
              var n = this.pe.v + 'px',
                o = '0px 0px 0px',
                c = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
              (i.perspective = n),
                (i.webkitPerspective = n),
                (s.transformOrigin = o),
                (s.mozTransformOrigin = o),
                (s.webkitTransformOrigin = o),
                (i.transform = c),
                (i.webkitTransform = c);
            }
        }),
        (HCameraElement.prototype.createElements = function () {}),
        (HCameraElement.prototype.hide = function () {}),
        (HCameraElement.prototype.renderFrame = function () {
          var e = this._isFirstFrame,
            t,
            r;
          if (this.hierarchy)
            for (r = this.hierarchy.length, t = 0; t < r; t += 1)
              e = this.hierarchy[t].finalTransform.mProp._mdf || e;
          if (
            e ||
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
              for (r = this.hierarchy.length - 1, t = r; t >= 0; t -= 1) {
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
              this.p
                ? (s = [
                    this.p.v[0] - this.a.v[0],
                    this.p.v[1] - this.a.v[1],
                    this.p.v[2] - this.a.v[2],
                  ])
                : (s = [
                    this.px.v - this.a.v[0],
                    this.py.v - this.a.v[1],
                    this.pz.v - this.a.v[2],
                  ]);
              var n = Math.sqrt(
                  Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)
                ),
                o = [s[0] / n, s[1] / n, s[2] / n],
                c = Math.sqrt(o[2] * o[2] + o[0] * o[0]),
                u = Math.atan2(o[1], c),
                d = Math.atan2(o[0], -o[2]);
              this.mat.rotateY(d).rotateX(-u);
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
            var x = !this._prevMat.equals(this.mat);
            if ((x || this.pe._mdf) && this.comp.threeDElements) {
              r = this.comp.threeDElements.length;
              var _, m, v;
              for (t = 0; t < r; t += 1)
                if (((_ = this.comp.threeDElements[t]), _.type === '3d')) {
                  if (x) {
                    var p = this.mat.toCSS();
                    (v = _.container.style),
                      (v.transform = p),
                      (v.webkitTransform = p);
                  }
                  this.pe._mdf &&
                    ((m = _.perspectiveElem.style),
                    (m.perspective = this.pe.v + 'px'),
                    (m.webkitPerspective = this.pe.v + 'px'));
                }
              this.mat.clone(this._prevMat);
            }
          }
          this._isFirstFrame = !1;
        }),
        (HCameraElement.prototype.prepareFrame = function (e) {
          this.prepareProperties(e, !0);
        }),
        (HCameraElement.prototype.destroy = function () {}),
        (HCameraElement.prototype.getBaseElement = function () {
          return null;
        });
      var animationManager = (function () {
          var e = {},
            t = [],
            r = 0,
            i = 0,
            s = 0,
            n = !0,
            o = !1;
          function c(C) {
            for (var S = 0, E = C.target; S < i; )
              t[S].animation === E &&
                (t.splice(S, 1), (S -= 1), (i -= 1), E.isPaused || _()),
                (S += 1);
          }
          function u(C, S) {
            if (!C) return null;
            for (var E = 0; E < i; ) {
              if (t[E].elem === C && t[E].elem !== null) return t[E].animation;
              E += 1;
            }
            var A = new AnimationItem();
            return m(A, C), A.setData(C, S), A;
          }
          function d() {
            var C,
              S = t.length,
              E = [];
            for (C = 0; C < S; C += 1) E.push(t[C].animation);
            return E;
          }
          function x() {
            (s += 1), D();
          }
          function _() {
            s -= 1;
          }
          function m(C, S) {
            C.addEventListener('destroy', c),
              C.addEventListener('_active', x),
              C.addEventListener('_idle', _),
              t.push({ elem: S, animation: C }),
              (i += 1);
          }
          function v(C) {
            var S = new AnimationItem();
            return m(S, null), S.setParams(C), S;
          }
          function p(C, S) {
            var E;
            for (E = 0; E < i; E += 1) t[E].animation.setSpeed(C, S);
          }
          function g(C, S) {
            var E;
            for (E = 0; E < i; E += 1) t[E].animation.setDirection(C, S);
          }
          function b(C) {
            var S;
            for (S = 0; S < i; S += 1) t[S].animation.play(C);
          }
          function l(C) {
            var S = C - r,
              E;
            for (E = 0; E < i; E += 1) t[E].animation.advanceTime(S);
            (r = C), s && !o ? window.requestAnimationFrame(l) : (n = !0);
          }
          function a(C) {
            (r = C), window.requestAnimationFrame(l);
          }
          function h(C) {
            var S;
            for (S = 0; S < i; S += 1) t[S].animation.pause(C);
          }
          function f(C, S, E) {
            var A;
            for (A = 0; A < i; A += 1) t[A].animation.goToAndStop(C, S, E);
          }
          function y(C) {
            var S;
            for (S = 0; S < i; S += 1) t[S].animation.stop(C);
          }
          function k(C) {
            var S;
            for (S = 0; S < i; S += 1) t[S].animation.togglePause(C);
          }
          function w(C) {
            var S;
            for (S = i - 1; S >= 0; S -= 1) t[S].animation.destroy(C);
          }
          function P(C, S, E) {
            var A = [].concat(
                [].slice.call(document.getElementsByClassName('lottie')),
                [].slice.call(document.getElementsByClassName('bodymovin'))
              ),
              L,
              I = A.length;
            for (L = 0; L < I; L += 1)
              E && A[L].setAttribute('data-bm-type', E), u(A[L], C);
            if (S && I === 0) {
              E || (E = 'svg');
              var B = document.getElementsByTagName('body')[0];
              B.innerText = '';
              var H = createTag('div');
              (H.style.width = '100%'),
                (H.style.height = '100%'),
                H.setAttribute('data-bm-type', E),
                B.appendChild(H),
                u(H, C);
            }
          }
          function F() {
            var C;
            for (C = 0; C < i; C += 1) t[C].animation.resize();
          }
          function D() {
            !o && s && n && (window.requestAnimationFrame(a), (n = !1));
          }
          function T() {
            o = !0;
          }
          function z() {
            (o = !1), D();
          }
          function M(C, S) {
            var E;
            for (E = 0; E < i; E += 1) t[E].animation.setVolume(C, S);
          }
          function V(C) {
            var S;
            for (S = 0; S < i; S += 1) t[S].animation.mute(C);
          }
          function R(C) {
            var S;
            for (S = 0; S < i; S += 1) t[S].animation.unmute(C);
          }
          return (
            (e.registerAnimation = u),
            (e.loadAnimation = v),
            (e.setSpeed = p),
            (e.setDirection = g),
            (e.play = b),
            (e.pause = h),
            (e.stop = y),
            (e.togglePause = k),
            (e.searchAnimations = P),
            (e.resize = F),
            (e.goToAndStop = f),
            (e.destroy = w),
            (e.freeze = T),
            (e.unfreeze = z),
            (e.setVolume = M),
            (e.mute = V),
            (e.unmute = R),
            (e.getRegisteredAnimations = d),
            e
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
            (this.markers = []),
            (this.configAnimation = this.configAnimation.bind(this)),
            (this.onSetupError = this.onSetupError.bind(this)),
            (this.onSegmentComplete = this.onSegmentComplete.bind(this));
        };
      extendPrototype([BaseEvent], AnimationItem),
        (AnimationItem.prototype.setParams = function (e) {
          (e.wrapper || e.container) &&
            (this.wrapper = e.wrapper || e.container);
          var t = 'svg';
          switch (
            (e.animType ? (t = e.animType) : e.renderer && (t = e.renderer), t)
          ) {
            case 'canvas':
              this.renderer = new CanvasRenderer(this, e.rendererSettings);
              break;
            case 'svg':
              this.renderer = new SVGRenderer(this, e.rendererSettings);
              break;
            default:
              this.renderer = new HybridRenderer(this, e.rendererSettings);
              break;
          }
          this.imagePreloader.setCacheType(t, this.renderer.globalData.defs),
            this.renderer.setProjectInterface(this.projectInterface),
            (this.animType = t),
            e.loop === '' ||
            e.loop === null ||
            e.loop === void 0 ||
            e.loop === !0
              ? (this.loop = !0)
              : e.loop === !1
              ? (this.loop = !1)
              : (this.loop = parseInt(e.loop, 10)),
            (this.autoplay = 'autoplay' in e ? e.autoplay : !0),
            (this.name = e.name ? e.name : ''),
            (this.autoloadSegments = Object.prototype.hasOwnProperty.call(
              e,
              'autoloadSegments'
            )
              ? e.autoloadSegments
              : !0),
            (this.assetsPath = e.assetsPath),
            (this.initialSegment = e.initialSegment),
            e.audioFactory &&
              this.audioController.setAudioFactory(e.audioFactory),
            e.animationData
              ? this.setupAnimation(e.animationData)
              : e.path &&
                (e.path.lastIndexOf('\\') !== -1
                  ? (this.path = e.path.substr(0, e.path.lastIndexOf('\\') + 1))
                  : (this.path = e.path.substr(0, e.path.lastIndexOf('/') + 1)),
                (this.fileName = e.path.substr(e.path.lastIndexOf('/') + 1)),
                (this.fileName = this.fileName.substr(
                  0,
                  this.fileName.lastIndexOf('.json')
                )),
                dataManager.loadAnimation(
                  e.path,
                  this.configAnimation,
                  this.onSetupError
                ));
        }),
        (AnimationItem.prototype.onSetupError = function () {
          this.trigger('data_failed');
        }),
        (AnimationItem.prototype.setupAnimation = function (e) {
          dataManager.completeAnimation(e, this.configAnimation);
        }),
        (AnimationItem.prototype.setData = function (e, t) {
          t && typeof t != 'object' && (t = JSON.parse(t));
          var r = { wrapper: e, animationData: t },
            i = e.attributes;
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
          s === 'false'
            ? (r.loop = !1)
            : s === 'true'
            ? (r.loop = !0)
            : s !== '' && (r.loop = parseInt(s, 10));
          var n = i.getNamedItem('data-anim-autoplay')
            ? i.getNamedItem('data-anim-autoplay').value
            : i.getNamedItem('data-bm-autoplay')
            ? i.getNamedItem('data-bm-autoplay').value
            : i.getNamedItem('bm-autoplay')
            ? i.getNamedItem('bm-autoplay').value
            : !0;
          (r.autoplay = n !== 'false'),
            (r.name = i.getNamedItem('data-name')
              ? i.getNamedItem('data-name').value
              : i.getNamedItem('data-bm-name')
              ? i.getNamedItem('data-bm-name').value
              : i.getNamedItem('bm-name')
              ? i.getNamedItem('bm-name').value
              : '');
          var o = i.getNamedItem('data-anim-prerender')
            ? i.getNamedItem('data-anim-prerender').value
            : i.getNamedItem('data-bm-prerender')
            ? i.getNamedItem('data-bm-prerender').value
            : i.getNamedItem('bm-prerender')
            ? i.getNamedItem('bm-prerender').value
            : '';
          o === 'false' && (r.prerender = !1), this.setParams(r);
        }),
        (AnimationItem.prototype.includeLayers = function (e) {
          e.op > this.animationData.op &&
            ((this.animationData.op = e.op),
            (this.totalFrames = Math.floor(e.op - this.animationData.ip)));
          var t = this.animationData.layers,
            r,
            i = t.length,
            s = e.layers,
            n,
            o = s.length;
          for (n = 0; n < o; n += 1)
            for (r = 0; r < i; ) {
              if (t[r].id === s[n].id) {
                t[r] = s[n];
                break;
              }
              r += 1;
            }
          if (
            ((e.chars || e.fonts) &&
              (this.renderer.globalData.fontManager.addChars(e.chars),
              this.renderer.globalData.fontManager.addFonts(
                e.fonts,
                this.renderer.globalData.defs
              )),
            e.assets)
          )
            for (i = e.assets.length, r = 0; r < i; r += 1)
              this.animationData.assets.push(e.assets[r]);
          (this.animationData.__complete = !1),
            dataManager.completeAnimation(
              this.animationData,
              this.onSegmentComplete
            );
        }),
        (AnimationItem.prototype.onSegmentComplete = function (e) {
          (this.animationData = e),
            expressionsPlugin && expressionsPlugin.initExpressions(this),
            this.loadNextSegment();
        }),
        (AnimationItem.prototype.loadNextSegment = function () {
          var e = this.animationData.segments;
          if (!e || e.length === 0 || !this.autoloadSegments) {
            this.trigger('data_ready'), (this.timeCompleted = this.totalFrames);
            return;
          }
          var t = e.shift();
          this.timeCompleted = t.time * this.frameRate;
          var r = this.path + this.fileName + '_' + this.segmentPos + '.json';
          (this.segmentPos += 1),
            dataManager.loadData(
              r,
              this.includeLayers.bind(this),
              function () {
                this.trigger('data_failed');
              }.bind(this)
            );
        }),
        (AnimationItem.prototype.loadSegments = function () {
          var e = this.animationData.segments;
          e || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
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
        (AnimationItem.prototype.configAnimation = function (e) {
          if (!!this.renderer)
            try {
              (this.animationData = e),
                this.initialSegment
                  ? ((this.totalFrames = Math.floor(
                      this.initialSegment[1] - this.initialSegment[0]
                    )),
                    (this.firstFrame = Math.round(this.initialSegment[0])))
                  : ((this.totalFrames = Math.floor(
                      this.animationData.op - this.animationData.ip
                    )),
                    (this.firstFrame = Math.round(this.animationData.ip))),
                this.renderer.configAnimation(e),
                e.assets || (e.assets = []),
                (this.assets = this.animationData.assets),
                (this.frameRate = this.animationData.fr),
                (this.frameMult = this.animationData.fr / 1e3),
                this.renderer.searchExtraCompositions(e.assets),
                (this.markers = markerParser(e.markers || [])),
                this.trigger('config_ready'),
                this.preloadImages(),
                this.loadSegments(),
                this.updaFrameModifier(),
                this.waitForFontsLoaded(),
                this.isPaused && this.audioController.pause();
            } catch (t) {
              this.triggerConfigError(t);
            }
        }),
        (AnimationItem.prototype.waitForFontsLoaded = function () {
          !this.renderer ||
            (this.renderer.globalData.fontManager.isLoaded
              ? this.checkLoaded()
              : setTimeout(this.waitForFontsLoaded.bind(this), 20));
        }),
        (AnimationItem.prototype.checkLoaded = function () {
          !this.isLoaded &&
            this.renderer.globalData.fontManager.isLoaded &&
            (this.imagePreloader.loadedImages() ||
              this.renderer.rendererType !== 'canvas') &&
            this.imagePreloader.loadedFootages() &&
            ((this.isLoaded = !0),
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
        (AnimationItem.prototype.setSubframe = function (e) {
          this.isSubframeEnabled = !!e;
        }),
        (AnimationItem.prototype.gotoFrame = function () {
          (this.currentFrame = this.isSubframeEnabled
            ? this.currentRawFrame
            : ~~this.currentRawFrame),
            this.timeCompleted !== this.totalFrames &&
              this.currentFrame > this.timeCompleted &&
              (this.currentFrame = this.timeCompleted),
            this.trigger('enterFrame'),
            this.renderFrame(),
            this.trigger('drawnFrame');
        }),
        (AnimationItem.prototype.renderFrame = function () {
          if (!(this.isLoaded === !1 || !this.renderer))
            try {
              this.renderer.renderFrame(this.currentFrame + this.firstFrame);
            } catch (e) {
              this.triggerRenderFrameError(e);
            }
        }),
        (AnimationItem.prototype.play = function (e) {
          (e && this.name !== e) ||
            (this.isPaused === !0 &&
              ((this.isPaused = !1),
              this.audioController.resume(),
              this._idle && ((this._idle = !1), this.trigger('_active'))));
        }),
        (AnimationItem.prototype.pause = function (e) {
          (e && this.name !== e) ||
            (this.isPaused === !1 &&
              ((this.isPaused = !0),
              (this._idle = !0),
              this.trigger('_idle'),
              this.audioController.pause()));
        }),
        (AnimationItem.prototype.togglePause = function (e) {
          (e && this.name !== e) ||
            (this.isPaused === !0 ? this.play() : this.pause());
        }),
        (AnimationItem.prototype.stop = function (e) {
          (e && this.name !== e) ||
            (this.pause(),
            (this.playCount = 0),
            (this._completedLoop = !1),
            this.setCurrentRawFrameValue(0));
        }),
        (AnimationItem.prototype.getMarkerData = function (e) {
          for (var t, r = 0; r < this.markers.length; r += 1)
            if (((t = this.markers[r]), t.payload && t.payload.name === e))
              return t;
          return null;
        }),
        (AnimationItem.prototype.goToAndStop = function (e, t, r) {
          if (!(r && this.name !== r)) {
            var i = Number(e);
            if (isNaN(i)) {
              var s = this.getMarkerData(e);
              s && this.goToAndStop(s.time, !0);
            } else
              t
                ? this.setCurrentRawFrameValue(e)
                : this.setCurrentRawFrameValue(e * this.frameModifier);
            this.pause();
          }
        }),
        (AnimationItem.prototype.goToAndPlay = function (e, t, r) {
          if (!(r && this.name !== r)) {
            var i = Number(e);
            if (isNaN(i)) {
              var s = this.getMarkerData(e);
              s &&
                (s.duration
                  ? this.playSegments([s.time, s.time + s.duration], !0)
                  : this.goToAndStop(s.time, !0));
            } else this.goToAndStop(i, t, r);
            this.play();
          }
        }),
        (AnimationItem.prototype.advanceTime = function (e) {
          if (!(this.isPaused === !0 || this.isLoaded === !1)) {
            var t = this.currentRawFrame + e * this.frameModifier,
              r = !1;
            t >= this.totalFrames - 1 && this.frameModifier > 0
              ? !this.loop || this.playCount === this.loop
                ? this.checkSegments(
                    t > this.totalFrames ? t % this.totalFrames : 0
                  ) || ((r = !0), (t = this.totalFrames - 1))
                : t >= this.totalFrames
                ? ((this.playCount += 1),
                  this.checkSegments(t % this.totalFrames) ||
                    (this.setCurrentRawFrameValue(t % this.totalFrames),
                    (this._completedLoop = !0),
                    this.trigger('loopComplete')))
                : this.setCurrentRawFrameValue(t)
              : t < 0
              ? this.checkSegments(t % this.totalFrames) ||
                (this.loop && !(this.playCount-- <= 0 && this.loop !== !0)
                  ? (this.setCurrentRawFrameValue(
                      this.totalFrames + (t % this.totalFrames)
                    ),
                    this._completedLoop
                      ? this.trigger('loopComplete')
                      : (this._completedLoop = !0))
                  : ((r = !0), (t = 0)))
              : this.setCurrentRawFrameValue(t),
              r &&
                (this.setCurrentRawFrameValue(t),
                this.pause(),
                this.trigger('complete'));
          }
        }),
        (AnimationItem.prototype.adjustSegment = function (e, t) {
          (this.playCount = 0),
            e[1] < e[0]
              ? (this.frameModifier > 0 &&
                  (this.playSpeed < 0
                    ? this.setSpeed(-this.playSpeed)
                    : this.setDirection(-1)),
                (this.totalFrames = e[0] - e[1]),
                (this.timeCompleted = this.totalFrames),
                (this.firstFrame = e[1]),
                this.setCurrentRawFrameValue(this.totalFrames - 0.001 - t))
              : e[1] > e[0] &&
                (this.frameModifier < 0 &&
                  (this.playSpeed < 0
                    ? this.setSpeed(-this.playSpeed)
                    : this.setDirection(1)),
                (this.totalFrames = e[1] - e[0]),
                (this.timeCompleted = this.totalFrames),
                (this.firstFrame = e[0]),
                this.setCurrentRawFrameValue(0.001 + t)),
            this.trigger('segmentStart');
        }),
        (AnimationItem.prototype.setSegment = function (e, t) {
          var r = -1;
          this.isPaused &&
            (this.currentRawFrame + this.firstFrame < e
              ? (r = e)
              : this.currentRawFrame + this.firstFrame > t && (r = t - e)),
            (this.firstFrame = e),
            (this.totalFrames = t - e),
            (this.timeCompleted = this.totalFrames),
            r !== -1 && this.goToAndStop(r, !0);
        }),
        (AnimationItem.prototype.playSegments = function (e, t) {
          if ((t && (this.segments.length = 0), typeof e[0] == 'object')) {
            var r,
              i = e.length;
            for (r = 0; r < i; r += 1) this.segments.push(e[r]);
          } else this.segments.push(e);
          this.segments.length &&
            t &&
            this.adjustSegment(this.segments.shift(), 0),
            this.isPaused && this.play();
        }),
        (AnimationItem.prototype.resetSegments = function (e) {
          (this.segments.length = 0),
            this.segments.push([this.animationData.ip, this.animationData.op]),
            e && this.checkSegments(0);
        }),
        (AnimationItem.prototype.checkSegments = function (e) {
          return this.segments.length
            ? (this.adjustSegment(this.segments.shift(), e), !0)
            : !1;
        }),
        (AnimationItem.prototype.destroy = function (e) {
          (e && this.name !== e) ||
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
        (AnimationItem.prototype.setCurrentRawFrameValue = function (e) {
          (this.currentRawFrame = e), this.gotoFrame();
        }),
        (AnimationItem.prototype.setSpeed = function (e) {
          (this.playSpeed = e), this.updaFrameModifier();
        }),
        (AnimationItem.prototype.setDirection = function (e) {
          (this.playDirection = e < 0 ? -1 : 1), this.updaFrameModifier();
        }),
        (AnimationItem.prototype.setVolume = function (e, t) {
          (t && this.name !== t) || this.audioController.setVolume(e);
        }),
        (AnimationItem.prototype.getVolume = function () {
          return this.audioController.getVolume();
        }),
        (AnimationItem.prototype.mute = function (e) {
          (e && this.name !== e) || this.audioController.mute();
        }),
        (AnimationItem.prototype.unmute = function (e) {
          (e && this.name !== e) || this.audioController.unmute();
        }),
        (AnimationItem.prototype.updaFrameModifier = function () {
          (this.frameModifier =
            this.frameMult * this.playSpeed * this.playDirection),
            this.audioController.setRate(this.playSpeed * this.playDirection);
        }),
        (AnimationItem.prototype.getPath = function () {
          return this.path;
        }),
        (AnimationItem.prototype.getAssetsPath = function (e) {
          var t = '';
          if (e.e) t = e.p;
          else if (this.assetsPath) {
            var r = e.p;
            r.indexOf('images/') !== -1 && (r = r.split('/')[1]),
              (t = this.assetsPath + r);
          } else (t = this.path), (t += e.u ? e.u : ''), (t += e.p);
          return t;
        }),
        (AnimationItem.prototype.getAssetData = function (e) {
          for (var t = 0, r = this.assets.length; t < r; ) {
            if (e === this.assets[t].id) return this.assets[t];
            t += 1;
          }
          return null;
        }),
        (AnimationItem.prototype.hide = function () {
          this.renderer.hide();
        }),
        (AnimationItem.prototype.show = function () {
          this.renderer.show();
        }),
        (AnimationItem.prototype.getDuration = function (e) {
          return e ? this.totalFrames : this.totalFrames / this.frameRate;
        }),
        (AnimationItem.prototype.trigger = function (e) {
          if (this._cbs && this._cbs[e])
            switch (e) {
              case 'enterFrame':
              case 'drawnFrame':
                this.triggerEvent(
                  e,
                  new BMEnterFrameEvent(
                    e,
                    this.currentFrame,
                    this.totalFrames,
                    this.frameModifier
                  )
                );
                break;
              case 'loopComplete':
                this.triggerEvent(
                  e,
                  new BMCompleteLoopEvent(
                    e,
                    this.loop,
                    this.playCount,
                    this.frameMult
                  )
                );
                break;
              case 'complete':
                this.triggerEvent(e, new BMCompleteEvent(e, this.frameMult));
                break;
              case 'segmentStart':
                this.triggerEvent(
                  e,
                  new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)
                );
                break;
              case 'destroy':
                this.triggerEvent(e, new BMDestroyEvent(e, this));
                break;
              default:
                this.triggerEvent(e);
            }
          e === 'enterFrame' &&
            this.onEnterFrame &&
            this.onEnterFrame.call(
              this,
              new BMEnterFrameEvent(
                e,
                this.currentFrame,
                this.totalFrames,
                this.frameMult
              )
            ),
            e === 'loopComplete' &&
              this.onLoopComplete &&
              this.onLoopComplete.call(
                this,
                new BMCompleteLoopEvent(
                  e,
                  this.loop,
                  this.playCount,
                  this.frameMult
                )
              ),
            e === 'complete' &&
              this.onComplete &&
              this.onComplete.call(
                this,
                new BMCompleteEvent(e, this.frameMult)
              ),
            e === 'segmentStart' &&
              this.onSegmentStart &&
              this.onSegmentStart.call(
                this,
                new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)
              ),
            e === 'destroy' &&
              this.onDestroy &&
              this.onDestroy.call(this, new BMDestroyEvent(e, this));
        }),
        (AnimationItem.prototype.triggerRenderFrameError = function (e) {
          var t = new BMRenderFrameErrorEvent(e, this.currentFrame);
          this.triggerEvent('error', t),
            this.onError && this.onError.call(this, t);
        }),
        (AnimationItem.prototype.triggerConfigError = function (e) {
          var t = new BMConfigErrorEvent(e, this.currentFrame);
          this.triggerEvent('error', t),
            this.onError && this.onError.call(this, t);
        });
      var Expressions = (function () {
        var e = {};
        e.initExpressions = t;
        function t(r) {
          var i = 0,
            s = [];
          function n() {
            i += 1;
          }
          function o() {
            (i -= 1), i === 0 && u();
          }
          function c(d) {
            s.indexOf(d) === -1 && s.push(d);
          }
          function u() {
            var d,
              x = s.length;
            for (d = 0; d < x; d += 1) s[d].release();
            s.length = 0;
          }
          (r.renderer.compInterface = CompExpressionInterface(r.renderer)),
            r.renderer.globalData.projectInterface.registerComposition(
              r.renderer
            ),
            (r.renderer.globalData.pushExpression = n),
            (r.renderer.globalData.popExpression = o),
            (r.renderer.globalData.registerExpressionProperty = c);
        }
        return e;
      })();
      expressionsPlugin = Expressions;
      var ExpressionManager = (function () {
          var ob = {},
            Math = BMMath;
          BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, 'easeIn').get,
            BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, 'easeOut')
              .get,
            BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, 'easeInOut').get;
          function initiateExpression(elem, data, property) {
            var val = data.x,
              needsVelocity = /velocity(?![\w\d])/.test(val),
              _needsRandom = val.indexOf('random') !== -1,
              elemType = elem.data.ty,
              transform,
              content,
              effect,
              thisProperty = property;
            (thisProperty.valueAtTime = thisProperty.getValueAtTime),
              Object.defineProperty(thisProperty, 'value', {
                get: function () {
                  return thisProperty.v;
                },
              }),
              (elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate),
              (elem.comp.displayStartTime = 0),
              elem.data.ip / elem.comp.globalData.frameRate,
              elem.data.op / elem.comp.globalData.frameRate,
              elem.data.sw && elem.data.sw,
              elem.data.sh && elem.data.sh,
              elem.data.nm;
            var thisLayer,
              velocityAtTime,
              scoped_bm_rt,
              expression_function = eval(
                '[function _expression_function(){' +
                  val +
                  ';scoped_bm_rt=$bm_rt}]'
              )[0];
            property.kf && data.k.length,
              !this.data || this.data.hd,
              function e(t, r) {
                var i,
                  s,
                  n = this.pv.length ? this.pv.length : 1,
                  o = createTypedArray('float32', n);
                t = 5;
                var c = Math.floor(time * t);
                for (i = 0, s = 0; i < c; ) {
                  for (s = 0; s < n; s += 1)
                    o[s] += -r + r * 2 * BMMath.random();
                  i += 1;
                }
                var u = time * t,
                  d = u - Math.floor(u),
                  x = createTypedArray('float32', n);
                if (n > 1) {
                  for (s = 0; s < n; s += 1)
                    x[s] =
                      this.pv[s] + o[s] + (-r + r * 2 * BMMath.random()) * d;
                  return x;
                }
                return this.pv + o[0] + (-r + r * 2 * BMMath.random()) * d;
              }.bind(this),
              thisProperty.loopIn && thisProperty.loopIn.bind(thisProperty),
              thisProperty.loopOut && thisProperty.loopOut.bind(thisProperty),
              thisProperty.smooth && thisProperty.smooth.bind(thisProperty),
              this.getValueAtTime && this.getValueAtTime.bind(this),
              this.getVelocityAtTime &&
                (velocityAtTime = this.getVelocityAtTime.bind(this)),
              elem.comp.globalData.projectInterface.bind(
                elem.comp.globalData.projectInterface
              );
            function seedRandom(e) {
              BMMath.seedrandom(randSeed + e);
            }
            var time, value;
            elem.data.ind;
            var hasParent = !!(elem.hierarchy && elem.hierarchy.length),
              parent,
              randSeed = Math.floor(Math.random() * 1e6);
            elem.globalData;
            function executeExpression(e) {
              return (
                (value = e),
                this.frameExpressionId === elem.globalData.frameId &&
                this.propType !== 'textSelector'
                  ? value
                  : (this.propType === 'textSelector',
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
                    elemType === 4 &&
                      !content &&
                      (content = thisLayer('ADBE Root Vectors Group')),
                    effect || (effect = thisLayer(4)),
                    (hasParent = !!(elem.hierarchy && elem.hierarchy.length)),
                    hasParent &&
                      !parent &&
                      (parent = elem.hierarchy[0].layerInterface),
                    (time =
                      this.comp.renderedFrame / this.comp.globalData.frameRate),
                    _needsRandom && seedRandom(randSeed + time),
                    needsVelocity && velocityAtTime(time),
                    expression_function(),
                    (this.frameExpressionId = elem.globalData.frameId),
                    scoped_bm_rt.propType === 'shape',
                    scoped_bm_rt)
              );
            }
            return executeExpression;
          }
          return (ob.initiateExpression = initiateExpression), ob;
        })(),
        expressionHelpers = (function () {
          function e(o, c, u) {
            c.x &&
              ((u.k = !0),
              (u.x = !0),
              (u.initiateExpression = ExpressionManager.initiateExpression),
              u.effectsSequence.push(u.initiateExpression(o, c, u).bind(u)));
          }
          function t(o) {
            return (
              (o *= this.elem.globalData.frameRate),
              (o -= this.offsetTime),
              o !== this._cachingAtTime.lastFrame &&
                ((this._cachingAtTime.lastIndex =
                  this._cachingAtTime.lastFrame < o
                    ? this._cachingAtTime.lastIndex
                    : 0),
                (this._cachingAtTime.value = this.interpolateValue(
                  o,
                  this._cachingAtTime
                )),
                (this._cachingAtTime.lastFrame = o)),
              this._cachingAtTime.value
            );
          }
          function r(o) {
            var c = -0.01,
              u = this.getValueAtTime(o),
              d = this.getValueAtTime(o + c),
              x = 0;
            if (u.length) {
              var _;
              for (_ = 0; _ < u.length; _ += 1) x += Math.pow(d[_] - u[_], 2);
              x = Math.sqrt(x) * 100;
            } else x = 0;
            return x;
          }
          function i(o) {
            if (this.vel !== void 0) return this.vel;
            var c = -0.001,
              u = this.getValueAtTime(o),
              d = this.getValueAtTime(o + c),
              x;
            if (u.length) {
              x = createTypedArray('float32', u.length);
              var _;
              for (_ = 0; _ < u.length; _ += 1) x[_] = (d[_] - u[_]) / c;
            } else x = (d - u) / c;
            return x;
          }
          function s() {
            return this.pv;
          }
          function n(o) {
            this.propertyGroup = o;
          }
          return {
            searchExpressions: e,
            getSpeedAtTime: r,
            getVelocityAtTime: i,
            getValueAtTime: t,
            getStaticValueAtTime: s,
            setGroupProperty: n,
          };
        })();
      (function e() {
        function t(v, p, g) {
          if (!this.k || !this.keyframes) return this.pv;
          v = v ? v.toLowerCase() : '';
          var b = this.comp.renderedFrame,
            l = this.keyframes,
            a = l[l.length - 1].t;
          if (b <= a) return this.pv;
          var h, f;
          g
            ? (p
                ? (h = Math.abs(a - this.elem.comp.globalData.frameRate * p))
                : (h = Math.max(0, a - this.elem.data.ip)),
              (f = a - h))
            : ((!p || p > l.length - 1) && (p = l.length - 1),
              (f = l[l.length - 1 - p].t),
              (h = a - f));
          var y, k, w;
          if (v === 'pingpong') {
            var P = Math.floor((b - f) / h);
            if (P % 2 != 0)
              return this.getValueAtTime(
                (h - ((b - f) % h) + f) / this.comp.globalData.frameRate,
                0
              );
          } else if (v === 'offset') {
            var F = this.getValueAtTime(f / this.comp.globalData.frameRate, 0),
              D = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
              T = this.getValueAtTime(
                (((b - f) % h) + f) / this.comp.globalData.frameRate,
                0
              ),
              z = Math.floor((b - f) / h);
            if (this.pv.length) {
              for (w = new Array(F.length), k = w.length, y = 0; y < k; y += 1)
                w[y] = (D[y] - F[y]) * z + T[y];
              return w;
            }
            return (D - F) * z + T;
          } else if (v === 'continue') {
            var M = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
              V = this.getValueAtTime(
                (a - 0.001) / this.comp.globalData.frameRate,
                0
              );
            if (this.pv.length) {
              for (w = new Array(M.length), k = w.length, y = 0; y < k; y += 1)
                w[y] =
                  M[y] +
                  ((M[y] - V[y]) * ((b - a) / this.comp.globalData.frameRate)) /
                    5e-4;
              return w;
            }
            return M + (M - V) * ((b - a) / 0.001);
          }
          return this.getValueAtTime(
            (((b - f) % h) + f) / this.comp.globalData.frameRate,
            0
          );
        }
        function r(v, p, g) {
          if (!this.k) return this.pv;
          v = v ? v.toLowerCase() : '';
          var b = this.comp.renderedFrame,
            l = this.keyframes,
            a = l[0].t;
          if (b >= a) return this.pv;
          var h, f;
          g
            ? (p
                ? (h = Math.abs(this.elem.comp.globalData.frameRate * p))
                : (h = Math.max(0, this.elem.data.op - a)),
              (f = a + h))
            : ((!p || p > l.length - 1) && (p = l.length - 1),
              (f = l[p].t),
              (h = f - a));
          var y, k, w;
          if (v === 'pingpong') {
            var P = Math.floor((a - b) / h);
            if (P % 2 == 0)
              return this.getValueAtTime(
                (((a - b) % h) + a) / this.comp.globalData.frameRate,
                0
              );
          } else if (v === 'offset') {
            var F = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
              D = this.getValueAtTime(f / this.comp.globalData.frameRate, 0),
              T = this.getValueAtTime(
                (h - ((a - b) % h) + a) / this.comp.globalData.frameRate,
                0
              ),
              z = Math.floor((a - b) / h) + 1;
            if (this.pv.length) {
              for (w = new Array(F.length), k = w.length, y = 0; y < k; y += 1)
                w[y] = T[y] - (D[y] - F[y]) * z;
              return w;
            }
            return T - (D - F) * z;
          } else if (v === 'continue') {
            var M = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
              V = this.getValueAtTime(
                (a + 0.001) / this.comp.globalData.frameRate,
                0
              );
            if (this.pv.length) {
              for (w = new Array(M.length), k = w.length, y = 0; y < k; y += 1)
                w[y] = M[y] + ((M[y] - V[y]) * (a - b)) / 0.001;
              return w;
            }
            return M + ((M - V) * (a - b)) / 0.001;
          }
          return this.getValueAtTime(
            (h - (((a - b) % h) + a)) / this.comp.globalData.frameRate,
            0
          );
        }
        function i(v, p) {
          if (!this.k) return this.pv;
          if (((v = (v || 0.4) * 0.5), (p = Math.floor(p || 5)), p <= 1))
            return this.pv;
          var g = this.comp.renderedFrame / this.comp.globalData.frameRate,
            b = g - v,
            l = g + v,
            a = p > 1 ? (l - b) / (p - 1) : 1,
            h = 0,
            f = 0,
            y;
          this.pv.length
            ? (y = createTypedArray('float32', this.pv.length))
            : (y = 0);
          for (var k; h < p; ) {
            if (((k = this.getValueAtTime(b + h * a)), this.pv.length))
              for (f = 0; f < this.pv.length; f += 1) y[f] += k[f];
            else y += k;
            h += 1;
          }
          if (this.pv.length) for (f = 0; f < this.pv.length; f += 1) y[f] /= p;
          else y /= p;
          return y;
        }
        function s(v) {
          this._transformCachingAtTime ||
            (this._transformCachingAtTime = { v: new Matrix() });
          var p = this._transformCachingAtTime.v;
          if (
            (p.cloneFromProps(this.pre.props), this.appliedTransformations < 1)
          ) {
            var g = this.a.getValueAtTime(v);
            p.translate(
              -g[0] * this.a.mult,
              -g[1] * this.a.mult,
              g[2] * this.a.mult
            );
          }
          if (this.appliedTransformations < 2) {
            var b = this.s.getValueAtTime(v);
            p.scale(b[0] * this.s.mult, b[1] * this.s.mult, b[2] * this.s.mult);
          }
          if (this.sk && this.appliedTransformations < 3) {
            var l = this.sk.getValueAtTime(v),
              a = this.sa.getValueAtTime(v);
            p.skewFromAxis(-l * this.sk.mult, a * this.sa.mult);
          }
          if (this.r && this.appliedTransformations < 4) {
            var h = this.r.getValueAtTime(v);
            p.rotate(-h * this.r.mult);
          } else if (!this.r && this.appliedTransformations < 4) {
            var f = this.rz.getValueAtTime(v),
              y = this.ry.getValueAtTime(v),
              k = this.rx.getValueAtTime(v),
              w = this.or.getValueAtTime(v);
            p.rotateZ(-f * this.rz.mult)
              .rotateY(y * this.ry.mult)
              .rotateX(k * this.rx.mult)
              .rotateZ(-w[2] * this.or.mult)
              .rotateY(w[1] * this.or.mult)
              .rotateX(w[0] * this.or.mult);
          }
          if (this.data.p && this.data.p.s) {
            var P = this.px.getValueAtTime(v),
              F = this.py.getValueAtTime(v);
            if (this.data.p.z) {
              var D = this.pz.getValueAtTime(v);
              p.translate(
                P * this.px.mult,
                F * this.py.mult,
                -D * this.pz.mult
              );
            } else p.translate(P * this.px.mult, F * this.py.mult, 0);
          } else {
            var T = this.p.getValueAtTime(v);
            p.translate(
              T[0] * this.p.mult,
              T[1] * this.p.mult,
              -T[2] * this.p.mult
            );
          }
          return p;
        }
        function n() {
          return this.v.clone(new Matrix());
        }
        var o = TransformPropertyFactory.getTransformProperty;
        TransformPropertyFactory.getTransformProperty = function (v, p, g) {
          var b = o(v, p, g);
          return (
            b.dynamicProperties.length
              ? (b.getValueAtTime = s.bind(b))
              : (b.getValueAtTime = n.bind(b)),
            (b.setGroupProperty = expressionHelpers.setGroupProperty),
            b
          );
        };
        var c = PropertyFactory.getProp;
        PropertyFactory.getProp = function (v, p, g, b, l) {
          var a = c(v, p, g, b, l);
          a.kf
            ? (a.getValueAtTime = expressionHelpers.getValueAtTime.bind(a))
            : (a.getValueAtTime =
                expressionHelpers.getStaticValueAtTime.bind(a)),
            (a.setGroupProperty = expressionHelpers.setGroupProperty),
            (a.loopOut = t),
            (a.loopIn = r),
            (a.smooth = i),
            (a.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(a)),
            (a.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(a)),
            (a.numKeys = p.a === 1 ? p.k.length : 0),
            (a.propertyIndex = p.ix);
          var h = 0;
          return (
            g !== 0 &&
              (h = createTypedArray(
                'float32',
                p.a === 1 ? p.k[0].s.length : p.k.length
              )),
            (a._cachingAtTime = {
              lastFrame: initialDefaultFrame,
              lastIndex: 0,
              value: h,
            }),
            expressionHelpers.searchExpressions(v, p, a),
            a.k && l.addDynamicProperty(a),
            a
          );
        };
        function u(v) {
          return (
            this._cachingAtTime ||
              (this._cachingAtTime = {
                shapeValue: shapePool.clone(this.pv),
                lastIndex: 0,
                lastTime: initialDefaultFrame,
              }),
            (v *= this.elem.globalData.frameRate),
            (v -= this.offsetTime),
            v !== this._cachingAtTime.lastTime &&
              ((this._cachingAtTime.lastIndex =
                this._cachingAtTime.lastTime < v ? this._caching.lastIndex : 0),
              (this._cachingAtTime.lastTime = v),
              this.interpolateShape(
                v,
                this._cachingAtTime.shapeValue,
                this._cachingAtTime
              )),
            this._cachingAtTime.shapeValue
          );
        }
        var d = ShapePropertyFactory.getConstructorFunction(),
          x = ShapePropertyFactory.getKeyframedConstructorFunction();
        function _() {}
        (_.prototype = {
          vertices: function (v, p) {
            this.k && this.getValue();
            var g = this.v;
            p !== void 0 && (g = this.getValueAtTime(p, 0));
            var b,
              l = g._length,
              a = g[v],
              h = g.v,
              f = createSizedArray(l);
            for (b = 0; b < l; b += 1)
              v === 'i' || v === 'o'
                ? (f[b] = [a[b][0] - h[b][0], a[b][1] - h[b][1]])
                : (f[b] = [a[b][0], a[b][1]]);
            return f;
          },
          points: function (v) {
            return this.vertices('v', v);
          },
          inTangents: function (v) {
            return this.vertices('i', v);
          },
          outTangents: function (v) {
            return this.vertices('o', v);
          },
          isClosed: function () {
            return this.v.c;
          },
          pointOnPath: function (v, p) {
            var g = this.v;
            p !== void 0 && (g = this.getValueAtTime(p, 0)),
              this._segmentsLength ||
                (this._segmentsLength = bez.getSegmentsLength(g));
            for (
              var b = this._segmentsLength,
                l = b.lengths,
                a = b.totalLength * v,
                h = 0,
                f = l.length,
                y = 0,
                k;
              h < f;

            ) {
              if (y + l[h].addedLength > a) {
                var w = h,
                  P = g.c && h === f - 1 ? 0 : h + 1,
                  F = (a - y) / l[h].addedLength;
                k = bez.getPointInSegment(
                  g.v[w],
                  g.v[P],
                  g.o[w],
                  g.i[P],
                  F,
                  l[h]
                );
                break;
              } else y += l[h].addedLength;
              h += 1;
            }
            return (
              k ||
                (k = g.c
                  ? [g.v[0][0], g.v[0][1]]
                  : [g.v[g._length - 1][0], g.v[g._length - 1][1]]),
              k
            );
          },
          vectorOnPath: function (v, p, g) {
            v == 1 ? (v = this.v.c) : v == 0 && (v = 0.999);
            var b = this.pointOnPath(v, p),
              l = this.pointOnPath(v + 0.001, p),
              a = l[0] - b[0],
              h = l[1] - b[1],
              f = Math.sqrt(Math.pow(a, 2) + Math.pow(h, 2));
            if (f === 0) return [0, 0];
            var y = g === 'tangent' ? [a / f, h / f] : [-h / f, a / f];
            return y;
          },
          tangentOnPath: function (v, p) {
            return this.vectorOnPath(v, p, 'tangent');
          },
          normalOnPath: function (v, p) {
            return this.vectorOnPath(v, p, 'normal');
          },
          setGroupProperty: expressionHelpers.setGroupProperty,
          getValueAtTime: expressionHelpers.getStaticValueAtTime,
        }),
          extendPrototype([_], d),
          extendPrototype([_], x),
          (x.prototype.getValueAtTime = u),
          (x.prototype.initiateExpression =
            ExpressionManager.initiateExpression);
        var m = ShapePropertyFactory.getShapeProp;
        ShapePropertyFactory.getShapeProp = function (v, p, g, b, l) {
          var a = m(v, p, g, b, l);
          return (
            (a.propertyIndex = p.ix),
            (a.lock = !1),
            g === 3
              ? expressionHelpers.searchExpressions(v, p.pt, a)
              : g === 4 && expressionHelpers.searchExpressions(v, p.ks, a),
            a.k && v.addDynamicProperty(a),
            a
          );
        };
      })(),
        (function e() {
          function t() {
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
          }
          (TextProperty.prototype.getExpressionValue = function (r, i) {
            var s = this.calculateExpression(i);
            if (r.t !== s) {
              var n = {};
              return (
                this.copyData(n, r),
                (n.t = s.toString()),
                (n.__complete = !1),
                n
              );
            }
            return r;
          }),
            (TextProperty.prototype.searchProperty = function () {
              var r = this.searchKeyframes(),
                i = this.searchExpressions();
              return (this.kf = r || i), this.kf;
            }),
            (TextProperty.prototype.searchExpressions = t);
        })();
      var ShapePathInterface = (function () {
          return function (t, r, i) {
            var s = r.sh;
            function n(c) {
              return c === 'Shape' ||
                c === 'shape' ||
                c === 'Path' ||
                c === 'path' ||
                c === 'ADBE Vector Shape' ||
                c === 2
                ? n.path
                : null;
            }
            var o = propertyGroupFactory(n, i);
            return (
              s.setGroupProperty(PropertyInterface('Path', o)),
              Object.defineProperties(n, {
                path: {
                  get: function () {
                    return s.k && s.getValue(), s;
                  },
                },
                shape: {
                  get: function () {
                    return s.k && s.getValue(), s;
                  },
                },
                _name: { value: t.nm },
                ix: { value: t.ix },
                propertyIndex: { value: t.ix },
                mn: { value: t.mn },
                propertyGroup: { value: i },
              }),
              n
            );
          };
        })(),
        propertyGroupFactory = (function () {
          return function (e, t) {
            return function (r) {
              return (r = r === void 0 ? 1 : r), r <= 0 ? e : t(r - 1);
            };
          };
        })(),
        PropertyInterface = (function () {
          return function (e, t) {
            var r = { _name: e };
            function i(s) {
              return (s = s === void 0 ? 1 : s), s <= 0 ? r : t(s - 1);
            }
            return i;
          };
        })(),
        ShapeExpressionInterface = (function () {
          function e(p, g, b) {
            var l = [],
              a,
              h = p ? p.length : 0;
            for (a = 0; a < h; a += 1)
              p[a].ty === 'gr'
                ? l.push(r(p[a], g[a], b))
                : p[a].ty === 'fl'
                ? l.push(i(p[a], g[a], b))
                : p[a].ty === 'st'
                ? l.push(o(p[a], g[a], b))
                : p[a].ty === 'tm'
                ? l.push(c(p[a], g[a], b))
                : p[a].ty === 'tr' ||
                  (p[a].ty === 'el'
                    ? l.push(d(p[a], g[a], b))
                    : p[a].ty === 'sr'
                    ? l.push(x(p[a], g[a], b))
                    : p[a].ty === 'sh'
                    ? l.push(ShapePathInterface(p[a], g[a], b))
                    : p[a].ty === 'rc'
                    ? l.push(_(p[a], g[a], b))
                    : p[a].ty === 'rd'
                    ? l.push(m(p[a], g[a], b))
                    : p[a].ty === 'rp'
                    ? l.push(v(p[a], g[a], b))
                    : p[a].ty === 'gf'
                    ? l.push(s(p[a], g[a], b))
                    : l.push(n(p[a], g[a])));
            return l;
          }
          function t(p, g, b) {
            var l,
              a = function (y) {
                for (var k = 0, w = l.length; k < w; ) {
                  if (
                    l[k]._name === y ||
                    l[k].mn === y ||
                    l[k].propertyIndex === y ||
                    l[k].ix === y ||
                    l[k].ind === y
                  )
                    return l[k];
                  k += 1;
                }
                return typeof y == 'number' ? l[y - 1] : null;
              };
            (a.propertyGroup = propertyGroupFactory(a, b)),
              (l = e(p.it, g.it, a.propertyGroup)),
              (a.numProperties = l.length);
            var h = u(
              p.it[p.it.length - 1],
              g.it[g.it.length - 1],
              a.propertyGroup
            );
            return (
              (a.transform = h), (a.propertyIndex = p.cix), (a._name = p.nm), a
            );
          }
          function r(p, g, b) {
            var l = function (y) {
              switch (y) {
                case 'ADBE Vectors Group':
                case 'Contents':
                case 2:
                  return l.content;
                default:
                  return l.transform;
              }
            };
            l.propertyGroup = propertyGroupFactory(l, b);
            var a = t(p, g, l.propertyGroup),
              h = u(
                p.it[p.it.length - 1],
                g.it[g.it.length - 1],
                l.propertyGroup
              );
            return (
              (l.content = a),
              (l.transform = h),
              Object.defineProperty(l, '_name', {
                get: function () {
                  return p.nm;
                },
              }),
              (l.numProperties = p.np),
              (l.propertyIndex = p.ix),
              (l.nm = p.nm),
              (l.mn = p.mn),
              l
            );
          }
          function i(p, g, b) {
            function l(a) {
              return a === 'Color' || a === 'color'
                ? l.color
                : a === 'Opacity' || a === 'opacity'
                ? l.opacity
                : null;
            }
            return (
              Object.defineProperties(l, {
                color: { get: ExpressionPropertyInterface(g.c) },
                opacity: { get: ExpressionPropertyInterface(g.o) },
                _name: { value: p.nm },
                mn: { value: p.mn },
              }),
              g.c.setGroupProperty(PropertyInterface('Color', b)),
              g.o.setGroupProperty(PropertyInterface('Opacity', b)),
              l
            );
          }
          function s(p, g, b) {
            function l(a) {
              return a === 'Start Point' || a === 'start point'
                ? l.startPoint
                : a === 'End Point' || a === 'end point'
                ? l.endPoint
                : a === 'Opacity' || a === 'opacity'
                ? l.opacity
                : null;
            }
            return (
              Object.defineProperties(l, {
                startPoint: { get: ExpressionPropertyInterface(g.s) },
                endPoint: { get: ExpressionPropertyInterface(g.e) },
                opacity: { get: ExpressionPropertyInterface(g.o) },
                type: {
                  get: function () {
                    return 'a';
                  },
                },
                _name: { value: p.nm },
                mn: { value: p.mn },
              }),
              g.s.setGroupProperty(PropertyInterface('Start Point', b)),
              g.e.setGroupProperty(PropertyInterface('End Point', b)),
              g.o.setGroupProperty(PropertyInterface('Opacity', b)),
              l
            );
          }
          function n() {
            function p() {
              return null;
            }
            return p;
          }
          function o(p, g, b) {
            var l = propertyGroupFactory(w, b),
              a = propertyGroupFactory(k, l);
            function h(P) {
              Object.defineProperty(k, p.d[P].nm, {
                get: ExpressionPropertyInterface(g.d.dataProps[P].p),
              });
            }
            var f,
              y = p.d ? p.d.length : 0,
              k = {};
            for (f = 0; f < y; f += 1)
              h(f), g.d.dataProps[f].p.setGroupProperty(a);
            function w(P) {
              return P === 'Color' || P === 'color'
                ? w.color
                : P === 'Opacity' || P === 'opacity'
                ? w.opacity
                : P === 'Stroke Width' || P === 'stroke width'
                ? w.strokeWidth
                : null;
            }
            return (
              Object.defineProperties(w, {
                color: { get: ExpressionPropertyInterface(g.c) },
                opacity: { get: ExpressionPropertyInterface(g.o) },
                strokeWidth: { get: ExpressionPropertyInterface(g.w) },
                dash: {
                  get: function () {
                    return k;
                  },
                },
                _name: { value: p.nm },
                mn: { value: p.mn },
              }),
              g.c.setGroupProperty(PropertyInterface('Color', l)),
              g.o.setGroupProperty(PropertyInterface('Opacity', l)),
              g.w.setGroupProperty(PropertyInterface('Stroke Width', l)),
              w
            );
          }
          function c(p, g, b) {
            function l(h) {
              return h === p.e.ix || h === 'End' || h === 'end'
                ? l.end
                : h === p.s.ix
                ? l.start
                : h === p.o.ix
                ? l.offset
                : null;
            }
            var a = propertyGroupFactory(l, b);
            return (
              (l.propertyIndex = p.ix),
              g.s.setGroupProperty(PropertyInterface('Start', a)),
              g.e.setGroupProperty(PropertyInterface('End', a)),
              g.o.setGroupProperty(PropertyInterface('Offset', a)),
              (l.propertyIndex = p.ix),
              (l.propertyGroup = b),
              Object.defineProperties(l, {
                start: { get: ExpressionPropertyInterface(g.s) },
                end: { get: ExpressionPropertyInterface(g.e) },
                offset: { get: ExpressionPropertyInterface(g.o) },
                _name: { value: p.nm },
              }),
              (l.mn = p.mn),
              l
            );
          }
          function u(p, g, b) {
            function l(h) {
              return p.a.ix === h || h === 'Anchor Point'
                ? l.anchorPoint
                : p.o.ix === h || h === 'Opacity'
                ? l.opacity
                : p.p.ix === h || h === 'Position'
                ? l.position
                : p.r.ix === h ||
                  h === 'Rotation' ||
                  h === 'ADBE Vector Rotation'
                ? l.rotation
                : p.s.ix === h || h === 'Scale'
                ? l.scale
                : (p.sk && p.sk.ix === h) || h === 'Skew'
                ? l.skew
                : (p.sa && p.sa.ix === h) || h === 'Skew Axis'
                ? l.skewAxis
                : null;
            }
            var a = propertyGroupFactory(l, b);
            return (
              g.transform.mProps.o.setGroupProperty(
                PropertyInterface('Opacity', a)
              ),
              g.transform.mProps.p.setGroupProperty(
                PropertyInterface('Position', a)
              ),
              g.transform.mProps.a.setGroupProperty(
                PropertyInterface('Anchor Point', a)
              ),
              g.transform.mProps.s.setGroupProperty(
                PropertyInterface('Scale', a)
              ),
              g.transform.mProps.r.setGroupProperty(
                PropertyInterface('Rotation', a)
              ),
              g.transform.mProps.sk &&
                (g.transform.mProps.sk.setGroupProperty(
                  PropertyInterface('Skew', a)
                ),
                g.transform.mProps.sa.setGroupProperty(
                  PropertyInterface('Skew Angle', a)
                )),
              g.transform.op.setGroupProperty(PropertyInterface('Opacity', a)),
              Object.defineProperties(l, {
                opacity: {
                  get: ExpressionPropertyInterface(g.transform.mProps.o),
                },
                position: {
                  get: ExpressionPropertyInterface(g.transform.mProps.p),
                },
                anchorPoint: {
                  get: ExpressionPropertyInterface(g.transform.mProps.a),
                },
                scale: {
                  get: ExpressionPropertyInterface(g.transform.mProps.s),
                },
                rotation: {
                  get: ExpressionPropertyInterface(g.transform.mProps.r),
                },
                skew: {
                  get: ExpressionPropertyInterface(g.transform.mProps.sk),
                },
                skewAxis: {
                  get: ExpressionPropertyInterface(g.transform.mProps.sa),
                },
                _name: { value: p.nm },
              }),
              (l.ty = 'tr'),
              (l.mn = p.mn),
              (l.propertyGroup = b),
              l
            );
          }
          function d(p, g, b) {
            function l(f) {
              return p.p.ix === f ? l.position : p.s.ix === f ? l.size : null;
            }
            var a = propertyGroupFactory(l, b);
            l.propertyIndex = p.ix;
            var h = g.sh.ty === 'tm' ? g.sh.prop : g.sh;
            return (
              h.s.setGroupProperty(PropertyInterface('Size', a)),
              h.p.setGroupProperty(PropertyInterface('Position', a)),
              Object.defineProperties(l, {
                size: { get: ExpressionPropertyInterface(h.s) },
                position: { get: ExpressionPropertyInterface(h.p) },
                _name: { value: p.nm },
              }),
              (l.mn = p.mn),
              l
            );
          }
          function x(p, g, b) {
            function l(f) {
              return p.p.ix === f
                ? l.position
                : p.r.ix === f
                ? l.rotation
                : p.pt.ix === f
                ? l.points
                : p.or.ix === f || f === 'ADBE Vector Star Outer Radius'
                ? l.outerRadius
                : p.os.ix === f
                ? l.outerRoundness
                : p.ir &&
                  (p.ir.ix === f || f === 'ADBE Vector Star Inner Radius')
                ? l.innerRadius
                : p.is && p.is.ix === f
                ? l.innerRoundness
                : null;
            }
            var a = propertyGroupFactory(l, b),
              h = g.sh.ty === 'tm' ? g.sh.prop : g.sh;
            return (
              (l.propertyIndex = p.ix),
              h.or.setGroupProperty(PropertyInterface('Outer Radius', a)),
              h.os.setGroupProperty(PropertyInterface('Outer Roundness', a)),
              h.pt.setGroupProperty(PropertyInterface('Points', a)),
              h.p.setGroupProperty(PropertyInterface('Position', a)),
              h.r.setGroupProperty(PropertyInterface('Rotation', a)),
              p.ir &&
                (h.ir.setGroupProperty(PropertyInterface('Inner Radius', a)),
                h.is.setGroupProperty(PropertyInterface('Inner Roundness', a))),
              Object.defineProperties(l, {
                position: { get: ExpressionPropertyInterface(h.p) },
                rotation: { get: ExpressionPropertyInterface(h.r) },
                points: { get: ExpressionPropertyInterface(h.pt) },
                outerRadius: { get: ExpressionPropertyInterface(h.or) },
                outerRoundness: { get: ExpressionPropertyInterface(h.os) },
                innerRadius: { get: ExpressionPropertyInterface(h.ir) },
                innerRoundness: { get: ExpressionPropertyInterface(h.is) },
                _name: { value: p.nm },
              }),
              (l.mn = p.mn),
              l
            );
          }
          function _(p, g, b) {
            function l(f) {
              return p.p.ix === f
                ? l.position
                : p.r.ix === f
                ? l.roundness
                : p.s.ix === f || f === 'Size' || f === 'ADBE Vector Rect Size'
                ? l.size
                : null;
            }
            var a = propertyGroupFactory(l, b),
              h = g.sh.ty === 'tm' ? g.sh.prop : g.sh;
            return (
              (l.propertyIndex = p.ix),
              h.p.setGroupProperty(PropertyInterface('Position', a)),
              h.s.setGroupProperty(PropertyInterface('Size', a)),
              h.r.setGroupProperty(PropertyInterface('Rotation', a)),
              Object.defineProperties(l, {
                position: { get: ExpressionPropertyInterface(h.p) },
                roundness: { get: ExpressionPropertyInterface(h.r) },
                size: { get: ExpressionPropertyInterface(h.s) },
                _name: { value: p.nm },
              }),
              (l.mn = p.mn),
              l
            );
          }
          function m(p, g, b) {
            function l(f) {
              return p.r.ix === f || f === 'Round Corners 1' ? l.radius : null;
            }
            var a = propertyGroupFactory(l, b),
              h = g;
            return (
              (l.propertyIndex = p.ix),
              h.rd.setGroupProperty(PropertyInterface('Radius', a)),
              Object.defineProperties(l, {
                radius: { get: ExpressionPropertyInterface(h.rd) },
                _name: { value: p.nm },
              }),
              (l.mn = p.mn),
              l
            );
          }
          function v(p, g, b) {
            function l(f) {
              return p.c.ix === f || f === 'Copies'
                ? l.copies
                : p.o.ix === f || f === 'Offset'
                ? l.offset
                : null;
            }
            var a = propertyGroupFactory(l, b),
              h = g;
            return (
              (l.propertyIndex = p.ix),
              h.c.setGroupProperty(PropertyInterface('Copies', a)),
              h.o.setGroupProperty(PropertyInterface('Offset', a)),
              Object.defineProperties(l, {
                copies: { get: ExpressionPropertyInterface(h.c) },
                offset: { get: ExpressionPropertyInterface(h.o) },
                _name: { value: p.nm },
              }),
              (l.mn = p.mn),
              l
            );
          }
          return function (p, g, b) {
            var l;
            function a(f) {
              if (typeof f == 'number')
                return (f = f === void 0 ? 1 : f), f === 0 ? b : l[f - 1];
              for (var y = 0, k = l.length; y < k; ) {
                if (l[y]._name === f) return l[y];
                y += 1;
              }
              return null;
            }
            function h() {
              return b;
            }
            return (
              (a.propertyGroup = propertyGroupFactory(a, h)),
              (l = e(p, g, a.propertyGroup)),
              (a.numProperties = l.length),
              (a._name = 'Contents'),
              a
            );
          };
        })(),
        TextExpressionInterface = (function () {
          return function (e) {
            var t, r;
            function i(s) {
              switch (s) {
                case 'ADBE Text Document':
                  return i.sourceText;
                default:
                  return null;
              }
            }
            return (
              Object.defineProperty(i, 'sourceText', {
                get: function () {
                  e.textProperty.getValue();
                  var s = e.textProperty.currentData.t;
                  return (
                    s !== t &&
                      ((e.textProperty.currentData.t = t),
                      (r = new String(s)),
                      (r.value = s || new String(s))),
                    r
                  );
                },
              }),
              i
            );
          };
        })(),
        LayerExpressionInterface = (function () {
          function e(d) {
            var x = new Matrix();
            if (d !== void 0) {
              var _ = this._elem.finalTransform.mProp.getValueAtTime(d);
              _.clone(x);
            } else {
              var m = this._elem.finalTransform.mProp;
              m.applyToMatrix(x);
            }
            return x;
          }
          function t(d, x) {
            var _ = this.getMatrix(x);
            return (
              (_.props[12] = 0),
              (_.props[13] = 0),
              (_.props[14] = 0),
              this.applyPoint(_, d)
            );
          }
          function r(d, x) {
            var _ = this.getMatrix(x);
            return this.applyPoint(_, d);
          }
          function i(d, x) {
            var _ = this.getMatrix(x);
            return (
              (_.props[12] = 0),
              (_.props[13] = 0),
              (_.props[14] = 0),
              this.invertPoint(_, d)
            );
          }
          function s(d, x) {
            var _ = this.getMatrix(x);
            return this.invertPoint(_, d);
          }
          function n(d, x) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var _,
                m = this._elem.hierarchy.length;
              for (_ = 0; _ < m; _ += 1)
                this._elem.hierarchy[_].finalTransform.mProp.applyToMatrix(d);
            }
            return d.applyToPointArray(x[0], x[1], x[2] || 0);
          }
          function o(d, x) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var _,
                m = this._elem.hierarchy.length;
              for (_ = 0; _ < m; _ += 1)
                this._elem.hierarchy[_].finalTransform.mProp.applyToMatrix(d);
            }
            return d.inversePoint(x);
          }
          function c(d) {
            var x = new Matrix();
            if (
              (x.reset(),
              this._elem.finalTransform.mProp.applyToMatrix(x),
              this._elem.hierarchy && this._elem.hierarchy.length)
            ) {
              var _,
                m = this._elem.hierarchy.length;
              for (_ = 0; _ < m; _ += 1)
                this._elem.hierarchy[_].finalTransform.mProp.applyToMatrix(x);
              return x.inversePoint(d);
            }
            return x.inversePoint(d);
          }
          function u() {
            return [1, 1, 1, 1];
          }
          return function (d) {
            var x;
            function _(g) {
              v.mask = new MaskManagerInterface(g, d);
            }
            function m(g) {
              v.effect = g;
            }
            function v(g) {
              switch (g) {
                case 'ADBE Root Vectors Group':
                case 'Contents':
                case 2:
                  return v.shapeInterface;
                case 1:
                case 6:
                case 'Transform':
                case 'transform':
                case 'ADBE Transform Group':
                  return x;
                case 4:
                case 'ADBE Effect Parade':
                case 'effects':
                case 'Effects':
                  return v.effect;
                case 'ADBE Text Properties':
                  return v.textInterface;
                default:
                  return null;
              }
            }
            (v.getMatrix = e),
              (v.invertPoint = o),
              (v.applyPoint = n),
              (v.toWorld = r),
              (v.toWorldVec = t),
              (v.fromWorld = s),
              (v.fromWorldVec = i),
              (v.toComp = r),
              (v.fromComp = c),
              (v.sampleImage = u),
              (v.sourceRectAtTime = d.sourceRectAtTime.bind(d)),
              (v._elem = d),
              (x = TransformExpressionInterface(d.finalTransform.mProp));
            var p = getDescriptor(x, 'anchorPoint');
            return (
              Object.defineProperties(v, {
                hasParent: {
                  get: function () {
                    return d.hierarchy.length;
                  },
                },
                parent: {
                  get: function () {
                    return d.hierarchy[0].layerInterface;
                  },
                },
                rotation: getDescriptor(x, 'rotation'),
                scale: getDescriptor(x, 'scale'),
                position: getDescriptor(x, 'position'),
                opacity: getDescriptor(x, 'opacity'),
                anchorPoint: p,
                anchor_point: p,
                transform: {
                  get: function () {
                    return x;
                  },
                },
                active: {
                  get: function () {
                    return d.isInRange;
                  },
                },
              }),
              (v.startTime = d.data.st),
              (v.index = d.data.ind),
              (v.source = d.data.refId),
              (v.height = d.data.ty === 0 ? d.data.h : 100),
              (v.width = d.data.ty === 0 ? d.data.w : 100),
              (v.inPoint = d.data.ip / d.comp.globalData.frameRate),
              (v.outPoint = d.data.op / d.comp.globalData.frameRate),
              (v._name = d.data.nm),
              (v.registerMaskInterface = _),
              (v.registerEffectsInterface = m),
              v
            );
          };
        })(),
        FootageInterface = (function () {
          var e = function (r) {
              var i = '',
                s = r.getFootageData();
              function n() {
                return (i = ''), (s = r.getFootageData()), o;
              }
              function o(c) {
                if (s[c])
                  return (i = c), (s = s[c]), typeof s == 'object' ? o : s;
                var u = c.indexOf(i);
                if (u !== -1) {
                  var d = parseInt(c.substr(u + i.length), 10);
                  return (s = s[d]), typeof s == 'object' ? o : s;
                }
                return '';
              }
              return n;
            },
            t = function (r) {
              function i(s) {
                return s === 'Outline' ? i.outlineInterface() : null;
              }
              return (i._name = 'Outline'), (i.outlineInterface = e(r)), i;
            };
          return function (r) {
            function i(s) {
              return s === 'Data' ? i.dataInterface : null;
            }
            return (i._name = 'Data'), (i.dataInterface = t(r)), i;
          };
        })(),
        CompExpressionInterface = (function () {
          return function (e) {
            function t(r) {
              for (var i = 0, s = e.layers.length; i < s; ) {
                if (e.layers[i].nm === r || e.layers[i].ind === r)
                  return e.elements[i].layerInterface;
                i += 1;
              }
              return null;
            }
            return (
              Object.defineProperty(t, '_name', { value: e.data.nm }),
              (t.layer = t),
              (t.pixelAspect = 1),
              (t.height = e.data.h || e.globalData.compSize.h),
              (t.width = e.data.w || e.globalData.compSize.w),
              (t.pixelAspect = 1),
              (t.frameDuration = 1 / e.globalData.frameRate),
              (t.displayStartTime = 0),
              (t.numLayers = e.layers.length),
              t
            );
          };
        })(),
        TransformExpressionInterface = (function () {
          return function (e) {
            function t(o) {
              switch (o) {
                case 'scale':
                case 'Scale':
                case 'ADBE Scale':
                case 6:
                  return t.scale;
                case 'rotation':
                case 'Rotation':
                case 'ADBE Rotation':
                case 'ADBE Rotate Z':
                case 10:
                  return t.rotation;
                case 'ADBE Rotate X':
                  return t.xRotation;
                case 'ADBE Rotate Y':
                  return t.yRotation;
                case 'position':
                case 'Position':
                case 'ADBE Position':
                case 2:
                  return t.position;
                case 'ADBE Position_0':
                  return t.xPosition;
                case 'ADBE Position_1':
                  return t.yPosition;
                case 'ADBE Position_2':
                  return t.zPosition;
                case 'anchorPoint':
                case 'AnchorPoint':
                case 'Anchor Point':
                case 'ADBE AnchorPoint':
                case 1:
                  return t.anchorPoint;
                case 'opacity':
                case 'Opacity':
                case 11:
                  return t.opacity;
                default:
                  return null;
              }
            }
            Object.defineProperty(t, 'rotation', {
              get: ExpressionPropertyInterface(e.r || e.rz),
            }),
              Object.defineProperty(t, 'zRotation', {
                get: ExpressionPropertyInterface(e.rz || e.r),
              }),
              Object.defineProperty(t, 'xRotation', {
                get: ExpressionPropertyInterface(e.rx),
              }),
              Object.defineProperty(t, 'yRotation', {
                get: ExpressionPropertyInterface(e.ry),
              }),
              Object.defineProperty(t, 'scale', {
                get: ExpressionPropertyInterface(e.s),
              });
            var r, i, s, n;
            return (
              e.p
                ? (n = ExpressionPropertyInterface(e.p))
                : ((r = ExpressionPropertyInterface(e.px)),
                  (i = ExpressionPropertyInterface(e.py)),
                  e.pz && (s = ExpressionPropertyInterface(e.pz))),
              Object.defineProperty(t, 'position', {
                get: function () {
                  return e.p ? n() : [r(), i(), s ? s() : 0];
                },
              }),
              Object.defineProperty(t, 'xPosition', {
                get: ExpressionPropertyInterface(e.px),
              }),
              Object.defineProperty(t, 'yPosition', {
                get: ExpressionPropertyInterface(e.py),
              }),
              Object.defineProperty(t, 'zPosition', {
                get: ExpressionPropertyInterface(e.pz),
              }),
              Object.defineProperty(t, 'anchorPoint', {
                get: ExpressionPropertyInterface(e.a),
              }),
              Object.defineProperty(t, 'opacity', {
                get: ExpressionPropertyInterface(e.o),
              }),
              Object.defineProperty(t, 'skew', {
                get: ExpressionPropertyInterface(e.sk),
              }),
              Object.defineProperty(t, 'skewAxis', {
                get: ExpressionPropertyInterface(e.sa),
              }),
              Object.defineProperty(t, 'orientation', {
                get: ExpressionPropertyInterface(e.or),
              }),
              t
            );
          };
        })(),
        ProjectInterface = (function () {
          function e(t) {
            this.compositions.push(t);
          }
          return function () {
            function t(r) {
              for (var i = 0, s = this.compositions.length; i < s; ) {
                if (
                  this.compositions[i].data &&
                  this.compositions[i].data.nm === r
                )
                  return (
                    this.compositions[i].prepareFrame &&
                      this.compositions[i].data.xt &&
                      this.compositions[i].prepareFrame(this.currentFrame),
                    this.compositions[i].compInterface
                  );
                i += 1;
              }
              return null;
            }
            return (
              (t.compositions = []),
              (t.currentFrame = 0),
              (t.registerComposition = e),
              t
            );
          };
        })(),
        EffectsExpressionInterface = (function () {
          var e = { createEffectsInterface: t };
          function t(s, n) {
            if (s.effectsManager) {
              var o = [],
                c = s.data.ef,
                u,
                d = s.effectsManager.effectElements.length;
              for (u = 0; u < d; u += 1)
                o.push(r(c[u], s.effectsManager.effectElements[u], n, s));
              var x = s.data.ef || [],
                _ = function (m) {
                  for (u = 0, d = x.length; u < d; ) {
                    if (m === x[u].nm || m === x[u].mn || m === x[u].ix)
                      return o[u];
                    u += 1;
                  }
                  return null;
                };
              return (
                Object.defineProperty(_, 'numProperties', {
                  get: function () {
                    return x.length;
                  },
                }),
                _
              );
            }
            return null;
          }
          function r(s, n, o, c) {
            function u(v) {
              for (var p = s.ef, g = 0, b = p.length; g < b; ) {
                if (v === p[g].nm || v === p[g].mn || v === p[g].ix)
                  return p[g].ty === 5 ? x[g] : x[g]();
                g += 1;
              }
              throw new Error();
            }
            var d = propertyGroupFactory(u, o),
              x = [],
              _,
              m = s.ef.length;
            for (_ = 0; _ < m; _ += 1)
              s.ef[_].ty === 5
                ? x.push(
                    r(
                      s.ef[_],
                      n.effectElements[_],
                      n.effectElements[_].propertyGroup,
                      c
                    )
                  )
                : x.push(i(n.effectElements[_], s.ef[_].ty, c, d));
            return (
              s.mn === 'ADBE Color Control' &&
                Object.defineProperty(u, 'color', {
                  get: function () {
                    return x[0]();
                  },
                }),
              Object.defineProperties(u, {
                numProperties: {
                  get: function () {
                    return s.np;
                  },
                },
                _name: { value: s.nm },
                propertyGroup: { value: d },
              }),
              (u.enabled = s.en !== 0),
              (u.active = u.enabled),
              u
            );
          }
          function i(s, n, o, c) {
            var u = ExpressionPropertyInterface(s.p);
            function d() {
              return n === 10 ? o.comp.compInterface(s.p.v) : u();
            }
            return (
              s.p.setGroupProperty &&
                s.p.setGroupProperty(PropertyInterface('', c)),
              d
            );
          }
          return e;
        })(),
        MaskManagerInterface = (function () {
          function e(r, i) {
            (this._mask = r), (this._data = i);
          }
          Object.defineProperty(e.prototype, 'maskPath', {
            get: function () {
              return (
                this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
              );
            },
          }),
            Object.defineProperty(e.prototype, 'maskOpacity', {
              get: function () {
                return (
                  this._mask.op.k && this._mask.op.getValue(),
                  this._mask.op.v * 100
                );
              },
            });
          var t = function (r) {
            var i = createSizedArray(r.viewData.length),
              s,
              n = r.viewData.length;
            for (s = 0; s < n; s += 1)
              i[s] = new e(r.viewData[s], r.masksProperties[s]);
            var o = function (c) {
              for (s = 0; s < n; ) {
                if (r.masksProperties[s].nm === c) return i[s];
                s += 1;
              }
              return null;
            };
            return o;
          };
          return t;
        })(),
        ExpressionPropertyInterface = (function () {
          var e = { pv: 0, v: 0, mult: 1 },
            t = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
          function r(o, c, u) {
            Object.defineProperty(o, 'velocity', {
              get: function () {
                return c.getVelocityAtTime(c.comp.currentFrame);
              },
            }),
              (o.numKeys = c.keyframes ? c.keyframes.length : 0),
              (o.key = function (d) {
                if (!o.numKeys) return 0;
                var x = '';
                's' in c.keyframes[d - 1]
                  ? (x = c.keyframes[d - 1].s)
                  : 'e' in c.keyframes[d - 2]
                  ? (x = c.keyframes[d - 2].e)
                  : (x = c.keyframes[d - 2].s);
                var _ =
                  u === 'unidimensional' ? new Number(x) : Object.assign({}, x);
                return (
                  (_.time =
                    c.keyframes[d - 1].t / c.elem.comp.globalData.frameRate),
                  (_.value = u === 'unidimensional' ? x[0] : x),
                  _
                );
              }),
              (o.valueAtTime = c.getValueAtTime),
              (o.speedAtTime = c.getSpeedAtTime),
              (o.velocityAtTime = c.getVelocityAtTime),
              (o.propertyGroup = c.propertyGroup);
          }
          function i(o) {
            (!o || !('pv' in o)) && (o = e);
            var c = 1 / o.mult,
              u = o.pv * c,
              d = new Number(u);
            return (
              (d.value = u),
              r(d, o, 'unidimensional'),
              function () {
                return (
                  o.k && o.getValue(),
                  (u = o.v * c),
                  d.value !== u &&
                    ((d = new Number(u)),
                    (d.value = u),
                    r(d, o, 'unidimensional')),
                  d
                );
              }
            );
          }
          function s(o) {
            (!o || !('pv' in o)) && (o = t);
            var c = 1 / o.mult,
              u = (o.data && o.data.l) || o.pv.length,
              d = createTypedArray('float32', u),
              x = createTypedArray('float32', u);
            return (
              (d.value = x),
              r(d, o, 'multidimensional'),
              function () {
                o.k && o.getValue();
                for (var _ = 0; _ < u; _ += 1)
                  (x[_] = o.v[_] * c), (d[_] = x[_]);
                return d;
              }
            );
          }
          function n() {
            return e;
          }
          return function (o) {
            return o ? (o.propType === 'unidimensional' ? i(o) : s(o)) : n;
          };
        })(),
        TextExpressionSelectorPropFactory = (function () {
          function e(t, r) {
            return (
              (this.textIndex = t + 1),
              (this.textTotal = r),
              (this.v = this.getValue() * this.mult),
              this.v
            );
          }
          return function (t, r) {
            (this.pv = 1),
              (this.comp = t.comp),
              (this.elem = t),
              (this.mult = 0.01),
              (this.propType = 'textSelector'),
              (this.textTotal = r.totalChars),
              (this.selectorValue = 100),
              (this.lastValue = [1, 1, 1]),
              (this.k = !0),
              (this.x = !0),
              (this.getValue = ExpressionManager.initiateExpression.bind(this)(
                t,
                r,
                this
              )),
              (this.getMult = e),
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
      TextSelectorProp.getTextSelectorProp = function (e, t, r) {
        return t.t === 1
          ? new TextExpressionSelectorPropFactory(e, t, r)
          : propertyGetTextProp(e, t, r);
      };
      function SliderEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r);
      }
      function AngleEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r);
      }
      function ColorEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 1, 0, r);
      }
      function PointEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 1, 0, r);
      }
      function LayerIndexEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r);
      }
      function MaskIndexEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r);
      }
      function CheckboxEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r);
      }
      function NoValueEffect() {
        this.p = {};
      }
      function EffectsManager(e, t) {
        var r = e.ef || [];
        this.effectElements = [];
        var i,
          s = r.length,
          n;
        for (i = 0; i < s; i += 1)
          (n = new GroupEffect(r[i], t)), this.effectElements.push(n);
      }
      function GroupEffect(e, t) {
        this.init(e, t);
      }
      extendPrototype([DynamicPropertyContainer], GroupEffect),
        (GroupEffect.prototype.getValue =
          GroupEffect.prototype.iterateDynamicProperties),
        (GroupEffect.prototype.init = function (e, t) {
          (this.data = e),
            (this.effectElements = []),
            this.initDynamicPropertyContainer(t);
          var r,
            i = this.data.ef.length,
            s,
            n = this.data.ef;
          for (r = 0; r < i; r += 1) {
            switch (((s = null), n[r].ty)) {
              case 0:
                s = new SliderEffect(n[r], t, this);
                break;
              case 1:
                s = new AngleEffect(n[r], t, this);
                break;
              case 2:
                s = new ColorEffect(n[r], t, this);
                break;
              case 3:
                s = new PointEffect(n[r], t, this);
                break;
              case 4:
              case 7:
                s = new CheckboxEffect(n[r], t, this);
                break;
              case 10:
                s = new LayerIndexEffect(n[r], t, this);
                break;
              case 11:
                s = new MaskIndexEffect(n[r], t, this);
                break;
              case 5:
                s = new EffectsManager(n[r], t, this);
                break;
              default:
                s = new NoValueEffect(n[r], t, this);
                break;
            }
            s && this.effectElements.push(s);
          }
        });
      var lottie = {};
      function setLocationHref(e) {
        locationHref = e;
      }
      function searchAnimations() {
        animationManager.searchAnimations();
      }
      function setSubframeRendering(e) {
        subframeEnabled = e;
      }
      function setIDPrefix(e) {
        idPrefix = e;
      }
      function loadAnimation(e) {
        return animationManager.loadAnimation(e);
      }
      function setQuality(e) {
        if (typeof e == 'string')
          switch (e) {
            case 'high':
              defaultCurveSegments = 200;
              break;
            default:
            case 'medium':
              defaultCurveSegments = 50;
              break;
            case 'low':
              defaultCurveSegments = 10;
              break;
          }
        else !isNaN(e) && e > 1 && (defaultCurveSegments = e);
      }
      function inBrowser() {
        return typeof navigator != 'undefined';
      }
      function installPlugin(e, t) {
        e === 'expressions' && (expressionsPlugin = t);
      }
      function getFactory(e) {
        switch (e) {
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
        (lottie.useWebWorker = function (e) {
          _useWebWorker = e;
        }),
        (lottie.setIDPrefix = setIDPrefix),
        (lottie.__getFactory = getFactory),
        (lottie.version = '5.8.1');
      function checkReady() {
        document.readyState === 'complete' &&
          (clearInterval(readyStateCheckInterval), searchAnimations());
      }
      function getQueryVariable(e) {
        for (var t = queryString.split('&'), r = 0; r < t.length; r += 1) {
          var i = t[r].split('=');
          if (decodeURIComponent(i[0]) == e) return decodeURIComponent(i[1]);
        }
        return null;
      }
      var queryString;
      {
        var scripts = document.getElementsByTagName('script'),
          index = scripts.length - 1,
          myScript = scripts[index] || { src: '' };
        (queryString = myScript.src.replace(/^[^\?]+\??/, '')),
          getQueryVariable('renderer');
      }
      var readyStateCheckInterval = setInterval(checkReady, 100);
      return lottie;
    });
})(lottie);
var faCog = {};
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 });
  var t = 'fas',
    r = 'cog',
    i = 512,
    s = 512,
    n = [],
    o = 'f013',
    c =
      'M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z';
  (e.definition = { prefix: t, iconName: r, icon: [i, s, n, o, c] }),
    (e.faCog = e.definition),
    (e.prefix = t),
    (e.iconName = r),
    (e.width = i),
    (e.height = s),
    (e.ligatures = n),
    (e.unicode = o),
    (e.svgPathData = c);
})(faCog);
var faHome = {};
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 });
  var t = 'fas',
    r = 'home',
    i = 576,
    s = 512,
    n = [],
    o = 'f015',
    c =
      'M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z';
  (e.definition = { prefix: t, iconName: r, icon: [i, s, n, o, c] }),
    (e.faHome = e.definition),
    (e.prefix = t),
    (e.iconName = r),
    (e.width = i),
    (e.height = s),
    (e.ligatures = n),
    (e.unicode = o),
    (e.svgPathData = c);
})(faHome);
var faGithubAlt = {};
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 });
  var t = 'fab',
    r = 'github-alt',
    i = 480,
    s = 512,
    n = [],
    o = 'f113',
    c =
      'M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z';
  (e.definition = { prefix: t, iconName: r, icon: [i, s, n, o, c] }),
    (e.faGithubAlt = e.definition),
    (e.prefix = t),
    (e.iconName = r),
    (e.width = i),
    (e.height = s),
    (e.ligatures = n),
    (e.unicode = o),
    (e.svgPathData = c);
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
  Fa$1 as J,
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
  Scroller as a7,
  bind as a8,
  add_flush_callback as a9,
  lottie as aa,
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
