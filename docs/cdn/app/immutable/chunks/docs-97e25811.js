import {
  S as ys,
  i as _s,
  s as ws,
  e as p,
  t as l,
  k as r,
  c as e,
  a as o,
  h as i,
  d as a,
  m as g,
  b as I,
  g as c,
  J as n,
  E as ss,
} from './index-83a5d9f9.js';
function Es(ks) {
  let u,
    C,
    W,
    U,
    v,
    q,
    f,
    z,
    J,
    A,
    d,
    rs = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Visible <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Visible</span> <span class="token attr-name"><span class="token namespace">let:</span>visible</span><span class="token punctuation">></span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> visible<span class="token punctuation">&#125;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Visible!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span><span class="token keyword">else</span><span class="token punctuation">&#125;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Not yet visible.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Visible</span><span class="token punctuation">></span></span></code>`,
    T,
    _,
    m,
    B,
    V,
    F,
    G,
    N,
    h,
    gs = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Visible <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- Visible 600px before and after the content is on screen. --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Visible</span> <span class="token attr-name">top=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">600</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">bottom=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">600</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name"><span class="token namespace">let:</span>visible</span><span class="token punctuation">></span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> visible<span class="token punctuation">&#125;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Visible!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span><span class="token keyword">else</span><span class="token punctuation">&#125;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Not yet visible.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Visible</span><span class="token punctuation">></span></span></code>`,
    S,
    w,
    k,
    K,
    P,
    Q,
    X,
    O,
    Y,
    Z,
    M,
    b,
    vs = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Visible <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- Visible when a quarter of the content is on screen. --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Visible</span> <span class="token attr-name">threshold=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">0.25</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name"><span class="token namespace">let:</span>visible</span><span class="token punctuation">></span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> visible<span class="token punctuation">&#125;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Visible!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span><span class="token keyword">else</span><span class="token punctuation">&#125;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Not yet visible.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Visible</span><span class="token punctuation">></span></span></code>`,
    H,
    E,
    x,
    $,
    D,
    y,
    fs = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Visible <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Visible</span> <span class="token attr-name">once=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name"><span class="token namespace">let:</span>visible</span><span class="token punctuation">></span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> visible<span class="token punctuation">&#125;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://my.big/image.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span><span class="token keyword">else</span><span class="token punctuation">&#125;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>placeholder<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Visible</span><span class="token punctuation">></span></span></code>`;
  return {
    c() {
      (u = p('section')),
        (C = p('h2')),
        (W = l(us)),
        (U = r()),
        (v = p('p')),
        (q = l(
          'Wrap components or elements to determine if they are visible on the page using the '
        )),
        (f = p('a')),
        (z = l('Intersection Observer API')),
        (J = l('.')),
        (A = r()),
        (d = p('pre')),
        (T = r()),
        (_ = p('section')),
        (m = p('p')),
        (B = l(
          'Customise offset props to check if the content is visible a number of pixels outside the viewport. (Corresponds to the '
        )),
        (V = p('code')),
        (F = l('rootMargin')),
        (G = l(' option of the Intersection Observer API.)')),
        (N = r()),
        (h = p('pre')),
        (S = r()),
        (w = p('section')),
        (k = p('p')),
        (K = l('Customise the ')),
        (P = p('code')),
        (Q = l('threshold')),
        (X = l(
          ' prop to set visibility when a portion of the content is visible. (Corresponds to the '
        )),
        (O = p('code')),
        (Y = l('threshold')),
        (Z = l(' option of the Intersection Observer API.)')),
        (M = r()),
        (b = p('pre')),
        (H = r()),
        (E = p('section')),
        (x = p('p')),
        ($ = l(
          'Check for visibility only once. Useful for loading expensive images, video and other media that should only be loaded once.'
        )),
        (D = r()),
        (y = p('pre')),
        this.h();
    },
    l(s) {
      u = e(s, 'SECTION', {});
      var t = o(u);
      C = e(t, 'H2', {});
      var as = o(C);
      (W = i(as, us)), as.forEach(a), (U = g(t)), (v = e(t, 'P', {}));
      var L = o(v);
      (q = i(
        L,
        'Wrap components or elements to determine if they are visible on the page using the '
      )),
        (f = e(L, 'A', { href: !0, rel: !0 }));
      var ns = o(f);
      (z = i(ns, 'Intersection Observer API')),
        ns.forEach(a),
        (J = i(L, '.')),
        L.forEach(a),
        t.forEach(a),
        (A = g(s)),
        (d = e(s, 'PRE', { class: !0 }));
      var ds = o(d);
      ds.forEach(a), (T = g(s)), (_ = e(s, 'SECTION', {}));
      var ts = o(_);
      m = e(ts, 'P', {});
      var R = o(m);
      (B = i(
        R,
        'Customise offset props to check if the content is visible a number of pixels outside the viewport. (Corresponds to the '
      )),
        (V = e(R, 'CODE', {}));
      var ps = o(V);
      (F = i(ps, 'rootMargin')),
        ps.forEach(a),
        (G = i(R, ' option of the Intersection Observer API.)')),
        R.forEach(a),
        ts.forEach(a),
        (N = g(s)),
        (h = e(s, 'PRE', { class: !0 }));
      var ms = o(h);
      ms.forEach(a), (S = g(s)), (w = e(s, 'SECTION', {}));
      var es = o(w);
      k = e(es, 'P', {});
      var j = o(k);
      (K = i(j, 'Customise the ')), (P = e(j, 'CODE', {}));
      var os = o(P);
      (Q = i(os, 'threshold')),
        os.forEach(a),
        (X = i(
          j,
          ' prop to set visibility when a portion of the content is visible. (Corresponds to the '
        )),
        (O = e(j, 'CODE', {}));
      var cs = o(O);
      (Y = i(cs, 'threshold')),
        cs.forEach(a),
        (Z = i(j, ' option of the Intersection Observer API.)')),
        j.forEach(a),
        es.forEach(a),
        (M = g(s)),
        (b = e(s, 'PRE', { class: !0 }));
      var hs = o(b);
      hs.forEach(a), (H = g(s)), (E = e(s, 'SECTION', {}));
      var ls = o(E);
      x = e(ls, 'P', {});
      var is = o(x);
      ($ = i(
        is,
        'Check for visibility only once. Useful for loading expensive images, video and other media that should only be loaded once.'
      )),
        is.forEach(a),
        ls.forEach(a),
        (D = g(s)),
        (y = e(s, 'PRE', { class: !0 }));
      var bs = o(y);
      bs.forEach(a), this.h();
    },
    h() {
      I(
        f,
        'href',
        'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API'
      ),
        I(f, 'rel', 'nofollow'),
        I(d, 'class', 'language-svelte'),
        I(h, 'class', 'language-svelte'),
        I(b, 'class', 'language-svelte'),
        I(y, 'class', 'language-svelte');
    },
    m(s, t) {
      c(s, u, t),
        n(u, C),
        n(C, W),
        n(u, U),
        n(u, v),
        n(v, q),
        n(v, f),
        n(f, z),
        n(v, J),
        c(s, A, t),
        c(s, d, t),
        (d.innerHTML = rs),
        c(s, T, t),
        c(s, _, t),
        n(_, m),
        n(m, B),
        n(m, V),
        n(V, F),
        n(m, G),
        c(s, N, t),
        c(s, h, t),
        (h.innerHTML = gs),
        c(s, S, t),
        c(s, w, t),
        n(w, k),
        n(k, K),
        n(k, P),
        n(P, Q),
        n(k, X),
        n(k, O),
        n(O, Y),
        n(k, Z),
        c(s, M, t),
        c(s, b, t),
        (b.innerHTML = vs),
        c(s, H, t),
        c(s, E, t),
        n(E, x),
        n(x, $),
        c(s, D, t),
        c(s, y, t),
        (y.innerHTML = fs);
    },
    p: ss,
    i: ss,
    o: ss,
    d(s) {
      s && a(u),
        s && a(A),
        s && a(d),
        s && a(T),
        s && a(_),
        s && a(N),
        s && a(h),
        s && a(S),
        s && a(w),
        s && a(M),
        s && a(b),
        s && a(H),
        s && a(E),
        s && a(D),
        s && a(y);
    },
  };
}
const js = {
    title: 'Visible',
    description: 'Wrapper to determine if content is visible.',
    slug: 'visible',
  },
  { title: us, description: Cs, slug: Vs } = js;
class Ps extends ys {
  constructor(u) {
    super(), _s(this, u, null, Es, ws, {});
  }
}
export { Ps as default, js as metadata };
