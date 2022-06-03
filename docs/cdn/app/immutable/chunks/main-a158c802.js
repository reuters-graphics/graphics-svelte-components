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
import {
  S as SvelteComponent,
  i as init,
  s as safe_not_equal,
  K as svg_element,
  L as claim_svg_element,
  a as children,
  d as detach,
  b as attr,
  M as null_to_empty,
  g as insert_hydration,
  J as append_hydration,
  l as empty,
  E as noop,
  N as getContext,
  e as element,
  O as HtmlTagHydration,
  P as query_selector_all,
  c as claim_element,
  Q as claim_html_tag,
  R as component_subscribe,
  T as add_render_callback,
  F as create_slot,
  k as space,
  m as claim_space,
  U as set_custom_element_data,
  V as listen,
  G as update_slot_base,
  H as get_all_dirty_from_scope,
  I as get_slot_changes,
  q as transition_in,
  o as transition_out,
  v as onMount,
  W as globals,
  X as binding_callbacks,
  Y as src_url_equal,
  t as text,
  h as claim_text,
  j as set_data,
  w as create_component,
  x as claim_component,
  Z as toggle_class,
  y as mount_component,
  B as destroy_component,
  _ as destroy_each,
} from './index-044d379f.js';
import { a as assets, b as base } from './paths-396f020f.js';
var components = [
  {
    title: 'Ai2svelte',
    description: 'A shortcut for ai2svelte graphics.',
    slug: 'ai2svelte',
    path: 'Ai2svelte',
  },
  {
    title: 'BeforeAfter',
    description: 'A before and after image comparison component.',
    slug: 'before-after',
    path: 'BeforeAfter',
  },
  {
    title: 'BodyText',
    description: 'Parse mardown-formatted text.',
    slug: 'body-text',
    path: 'BodyText',
  },
  {
    title: 'DatawrapperChart',
    description: 'Easily add a responsive Datawrapper embed on your page.',
    slug: 'datawrapper-chart',
    path: 'DatawrapperChart',
  },
  {
    title: 'EmbedPreviewerLink',
    description: 'An embed tool for development in graphics-kit.',
    slug: 'embed-previewer-link',
    path: 'EmbedPreviewerLink',
  },
  {
    title: 'EndNotes',
    description: 'End notes section.',
    slug: 'end-notes',
    path: 'EndNotes',
  },
  {
    title: 'Footer',
    description: 'Add a bottom footer bar to the page.',
    slug: 'footer',
    path: 'Footer',
  },
  {
    title: 'Framer',
    description: 'An embed tool for development in the graphics kit.',
    slug: 'framer',
    path: 'Framer',
  },
  {
    title: 'Headline',
    description: 'Titles & bylines & datelines, oh my!',
    slug: 'headline',
    path: 'Headline',
  },
  {
    title: 'Hero',
    description: 'A headline over a hero image',
    slug: 'hero',
    path: 'Hero',
  },
  {
    title: 'Image',
    description: 'A full-width image inside the text well.',
    slug: 'image',
    path: 'Image',
  },
  {
    title: 'LottieScroller',
    description: 'Easy scrolly-telling with lottie',
    slug: 'lottie-scroller',
    path: 'LottieScroller',
  },
  {
    title: 'Nav',
    description: 'Add a top-level nav bar to the page.',
    slug: 'nav',
    path: 'Nav',
  },
  {
    title: 'PymChild',
    description: 'A Pym.js child instance for embeddables.',
    slug: 'pym-child',
    path: 'PymChild',
  },
  {
    title: 'Referrals',
    description: 'Add a referrals bar with recent graphics stories.',
    slug: 'referrals',
    path: 'Referrals',
  },
  {
    title: 'Scroller',
    description: 'Easy scrollytelling with layout options.',
    slug: 'scroller',
    path: 'Scroller',
  },
  {
    title: 'SEO',
    description: 'Add SEO to the page.',
    slug: 'seo',
    path: 'SEO',
  },
  {
    title: 'Sharer',
    description: 'Add share tools to a page.',
    slug: 'sharer',
    path: 'Sharer',
  },
];
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
    } catch (s) {
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
  } catch (i) {
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
      let g = !1,
        _ = o;
      for (; --_ >= 0 && c[_] === '\\'; ) g = !g;
      return g ? '|' : ' |';
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
    if (r && r[0].length > 0) return { type: 'space', raw: r[0] };
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
        g,
        _,
        w,
        y,
        d,
        m,
        p,
        u = r[1].trim();
      const b = u.length > 1,
        l = {
          type: 'list',
          raw: '',
          ordered: b,
          start: b ? +u.slice(0, -1) : '',
          loose: !1,
          items: [],
        };
      (u = b ? `\\d{1,9}\\${u.slice(-1)}` : `\\${u}`),
        this.options.pedantic && (u = b ? u : '[*+-]');
      const a = new RegExp(`^( {0,3}${u})((?: [^\\n]*)?(?:\\n|$))`);
      for (
        ;
        t && ((p = !1), !(!(r = a.exec(t)) || this.rules.block.hr.test(t)));

      ) {
        if (
          ((i = r[0]),
          (t = t.substring(i.length)),
          (w = r[2].split(
            `
`,
            1
          )[0]),
          (y = t.split(
            `
`,
            1
          )[0]),
          this.options.pedantic
            ? ((o = 2), (m = w.trimLeft()))
            : ((o = r[2].search(/[^ ]/)),
              (o = o > 4 ? 1 : o),
              (m = w.slice(o)),
              (o += r[1].length)),
          (g = !1),
          !w &&
            /^ *$/.test(y) &&
            ((i +=
              y +
              `
`),
            (t = t.substring(y.length + 1)),
            (p = !0)),
          !p)
        ) {
          const f = new RegExp(
            `^ {0,${Math.min(3, o - 1)}}(?:[*+-]|\\d{1,9}[.)])`
          );
          for (
            ;
            t &&
            ((d = t.split(
              `
`,
              1
            )[0]),
            (w = d),
            this.options.pedantic &&
              (w = w.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ')),
            !f.test(w));

          ) {
            if (w.search(/[^ ]/) >= o || !w.trim())
              m +=
                `
` + w.slice(o);
            else if (!g)
              m +=
                `
` + w;
            else break;
            !g && !w.trim() && (g = !0),
              (i +=
                d +
                `
`),
              (t = t.substring(d.length + 1));
          }
        }
        l.loose || (_ ? (l.loose = !0) : /\n *\n *$/.test(i) && (_ = !0)),
          this.options.gfm &&
            ((s = /^\[[ xX]\] /.exec(m)),
            s && ((n = s[0] !== '[ ] '), (m = m.replace(/^\[[ xX]\] +/, '')))),
          l.items.push({
            type: 'list_item',
            raw: i,
            task: !!s,
            checked: n,
            loose: !1,
            text: m,
          }),
          (l.raw += i);
      }
      (l.items[l.items.length - 1].raw = i.trimRight()),
        (l.items[l.items.length - 1].text = m.trimRight()),
        (l.raw = l.raw.trimRight());
      const h = l.items.length;
      for (c = 0; c < h; c++) {
        (this.lexer.state.top = !1),
          (l.items[c].tokens = this.lexer.blockTokens(l.items[c].text, []));
        const f = l.items[c].tokens.filter((k) => k.type === 'space'),
          v = f.every((k) => {
            const x = k.raw.split('');
            let P = 0;
            for (const M of x)
              if (
                (M ===
                  `
` && (P += 1),
                P > 1)
              )
                return !0;
            return !1;
          });
        !l.loose && f.length && v && ((l.loose = !0), (l.items[c].loose = !0));
      }
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
          g;
        for (n = 0; n < s; n++)
          /^ *-+: *$/.test(i.align[n])
            ? (i.align[n] = 'right')
            : /^ *:-+: *$/.test(i.align[n])
            ? (i.align[n] = 'center')
            : /^ *:-+ *$/.test(i.align[n])
            ? (i.align[n] = 'left')
            : (i.align[n] = null);
        for (s = i.rows.length, n = 0; n < s; n++)
          i.rows[n] = splitCells(i.rows[n], i.header.length).map((_) => ({
            text: _,
          }));
        for (s = i.header.length, o = 0; o < s; o++)
          (i.header[o].tokens = []),
            this.lexer.inlineTokens(i.header[o].text, i.header[o].tokens);
        for (s = i.rows.length, o = 0; o < s; o++)
          for (g = i.rows[o], c = 0; c < g.length; c++)
            (g[c].tokens = []), this.lexer.inlineTokens(g[c].text, g[c].tokens);
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
        if ((i.length - o.length) % 2 === 0) return;
      } else {
        const o = findClosingBracket(r[2], '()');
        if (o > -1) {
          const g = (r[0].indexOf('!') === 0 ? 5 : 4) + r[1].length + o;
          (r[2] = r[2].substring(0, o)),
            (r[0] = r[0].substring(0, g).trim()),
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
        g,
        _ = o,
        w = 0;
      const y =
        s[0][0] === '*'
          ? this.rules.inline.emStrong.rDelimAst
          : this.rules.inline.emStrong.rDelimUnd;
      for (
        y.lastIndex = 0, r = r.slice(-1 * t.length + o);
        (s = y.exec(r)) != null;

      ) {
        if (((c = s[1] || s[2] || s[3] || s[4] || s[5] || s[6]), !c)) continue;
        if (((g = c.length), s[3] || s[4])) {
          _ += g;
          continue;
        } else if ((s[5] || s[6]) && o % 3 && !((o + g) % 3)) {
          w += g;
          continue;
        }
        if (((_ -= g), _ > 0)) continue;
        if (((g = Math.min(g, g + _ + w)), Math.min(o, g) % 2)) {
          const m = t.slice(1, o + s.index + g);
          return {
            type: 'em',
            raw: t.slice(0, o + s.index + g + 1),
            text: m,
            tokens: this.lexer.inlineTokens(m, []),
          };
        }
        const d = t.slice(2, o + s.index + g - 1);
        return {
          type: 'strong',
          raw: t.slice(0, o + s.index + g + 1),
          text: d,
          tokens: this.lexer.inlineTokens(d, []),
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
  def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph:
    /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/,
};
block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
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
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
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
  .replace('ref', block._label)
  .getRegex();
inline.nolink = edit(inline.nolink).replace('ref', block._label).getRegex();
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
          (t = t.substring(i.raw.length)),
            i.raw.length === 1 && r.length > 0
              ? (r[r.length - 1].raw += `
`)
              : r.push(i);
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
          const g = t.slice(1);
          let _;
          this.options.extensions.startBlock.forEach(function (w) {
            (_ = w.call({ lexer: this }, g)),
              typeof _ == 'number' && _ >= 0 && (c = Math.min(c, _));
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
      g,
      _;
    if (this.tokens.links) {
      const w = Object.keys(this.tokens.links);
      if (w.length > 0)
        for (
          ;
          (c = this.tokenizer.rules.inline.reflinkSearch.exec(o)) != null;

        )
          w.includes(c[0].slice(c[0].lastIndexOf('[') + 1, -1)) &&
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
        (g || (_ = ''),
        (g = !1),
        !(
          this.options.extensions &&
          this.options.extensions.inline &&
          this.options.extensions.inline.some((w) =>
            (i = w.call({ lexer: this }, t, r))
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
        if ((i = this.tokenizer.emStrong(t, o, _))) {
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
          let w = 1 / 0;
          const y = t.slice(1);
          let d;
          this.options.extensions.startInline.forEach(function (m) {
            (d = m.call({ lexer: this }, y)),
              typeof d == 'number' && d >= 0 && (w = Math.min(w, d));
          }),
            w < 1 / 0 && w >= 0 && (n = t.substring(0, w + 1));
        }
        if ((i = this.tokenizer.inlineText(n, smartypants))) {
          (t = t.substring(i.raw.length)),
            i.raw.slice(-1) !== '_' && (_ = i.raw.slice(-1)),
            (g = !0),
            (s = r[r.length - 1]),
            s && s.type === 'text'
              ? ((s.raw += i.raw), (s.text += i.text))
              : r.push(i);
          continue;
        }
        if (t) {
          const w = 'Infinite loop on byte: ' + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(w);
            break;
          } else throw new Error(w);
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
      g,
      _,
      w,
      y,
      d,
      m,
      p,
      u,
      b,
      l,
      a,
      h,
      f,
      v,
      k;
    const x = t.length;
    for (s = 0; s < x; s++) {
      if (
        ((m = t[s]),
        this.options.extensions &&
          this.options.extensions.renderers &&
          this.options.extensions.renderers[m.type] &&
          ((k = this.options.extensions.renderers[m.type].call(
            { parser: this },
            m
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
            ].includes(m.type)))
      ) {
        i += k || '';
        continue;
      }
      switch (m.type) {
        case 'space':
          continue;
        case 'hr': {
          i += this.renderer.hr();
          continue;
        }
        case 'heading': {
          i += this.renderer.heading(
            this.parseInline(m.tokens),
            m.depth,
            unescape(this.parseInline(m.tokens, this.textRenderer)),
            this.slugger
          );
          continue;
        }
        case 'code': {
          i += this.renderer.code(m.text, m.lang, m.escaped);
          continue;
        }
        case 'table': {
          for (y = '', w = '', c = m.header.length, n = 0; n < c; n++)
            w += this.renderer.tablecell(this.parseInline(m.header[n].tokens), {
              header: !0,
              align: m.align[n],
            });
          for (
            y += this.renderer.tablerow(w), d = '', c = m.rows.length, n = 0;
            n < c;
            n++
          ) {
            for (_ = m.rows[n], w = '', g = _.length, o = 0; o < g; o++)
              w += this.renderer.tablecell(this.parseInline(_[o].tokens), {
                header: !1,
                align: m.align[o],
              });
            d += this.renderer.tablerow(w);
          }
          i += this.renderer.table(y, d);
          continue;
        }
        case 'blockquote': {
          (d = this.parse(m.tokens)), (i += this.renderer.blockquote(d));
          continue;
        }
        case 'list': {
          for (
            p = m.ordered,
              u = m.start,
              b = m.loose,
              c = m.items.length,
              d = '',
              n = 0;
            n < c;
            n++
          )
            (a = m.items[n]),
              (h = a.checked),
              (f = a.task),
              (l = ''),
              a.task &&
                ((v = this.renderer.checkbox(h)),
                b
                  ? a.tokens.length > 0 && a.tokens[0].type === 'paragraph'
                    ? ((a.tokens[0].text = v + ' ' + a.tokens[0].text),
                      a.tokens[0].tokens &&
                        a.tokens[0].tokens.length > 0 &&
                        a.tokens[0].tokens[0].type === 'text' &&
                        (a.tokens[0].tokens[0].text =
                          v + ' ' + a.tokens[0].tokens[0].text))
                    : a.tokens.unshift({ type: 'text', text: v })
                  : (l += v)),
              (l += this.parse(a.tokens, b)),
              (d += this.renderer.listitem(l, f, h));
          i += this.renderer.list(d, p, u);
          continue;
        }
        case 'html': {
          i += this.renderer.html(m.text);
          continue;
        }
        case 'paragraph': {
          i += this.renderer.paragraph(this.parseInline(m.tokens));
          continue;
        }
        case 'text': {
          for (
            d = m.tokens ? this.parseInline(m.tokens) : m.text;
            s + 1 < x && t[s + 1].type === 'text';

          )
            (m = t[++s]),
              (d +=
                `
` + (m.tokens ? this.parseInline(m.tokens) : m.text));
          i += r ? this.renderer.paragraph(d) : d;
          continue;
        }
        default: {
          const P = 'Token with "' + m.type + '" type was not found.';
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
          const g = 'Token with "' + n.type + '" type was not found.';
          if (this.options.silent) {
            console.error(g);
            return;
          } else throw new Error(g);
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
      let g;
      if (!c)
        try {
          t.walkTokens && marked.walkTokens(s, t.walkTokens),
            (g = Parser.parse(s, t));
        } catch (_) {
          c = _;
        }
      return (t.highlight = i), c ? r(c) : r(null, g);
    };
    if (!i || i.length < 3 || (delete t.highlight, !s.length)) return n();
    let o = 0;
    marked.walkTokens(s, function (c) {
      c.type === 'code' &&
        (o++,
        setTimeout(() => {
          i(c.text, c.lang, function (g, _) {
            if (g) return n(g);
            _ != null && _ !== c.text && ((c.text = _), (c.escaped = !0)),
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
                  let g = n.renderer.apply(this, c);
                  return g === !1 && (g = o.apply(this, c)), g;
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
        n[o] = (...g) => {
          let _ = s.renderer[o].apply(n, g);
          return _ === !1 && (_ = c.apply(n, g)), _;
        };
      }
      t.renderer = n;
    }
    if (s.tokenizer) {
      const n = marked.defaults.tokenizer || new Tokenizer();
      for (const o in s.tokenizer) {
        const c = n[o];
        n[o] = (...g) => {
          let _ = s.tokenizer[o].apply(n, g);
          return _ === !1 && (_ = c.apply(n, g)), _;
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
    g,
    _,
    w = '-.125em';
  const y = 'visible';
  return (
    i && ((_ = 'center'), (n = '1.25em')),
    r && (s = r),
    t &&
      (t == 'lg'
        ? ((g = '1.33333em'), (c = '.75em'), (w = '-.225em'))
        : t == 'xs'
        ? (g = '.75em')
        : t == 'sm'
        ? (g = '.875em')
        : (g = t.replace('x', 'em'))),
    joinCss([
      joinCss({
        float: s,
        width: n,
        height: o,
        'line-height': c,
        'font-size': g,
        'text-align': _,
        'vertical-align': w,
        'transform-origin': 'center',
        overflow: y,
      }),
      e,
    ])
  );
}
function getTransform(e, t, r, i, s, n = 1, o = '', c = '') {
  let g = 1,
    _ = 1;
  return (
    s &&
      (s == 'horizontal'
        ? (g = -1)
        : s == 'vertical'
        ? (_ = -1)
        : (g = _ = -1)),
    joinCss(
      [
        `translate(${parseNumber(t) * n}${o},${parseNumber(r) * n}${o})`,
        `scale(${g * parseNumber(e)},${_ * parseNumber(e)})`,
        i && `rotate(${i}${c})`,
      ],
      ' '
    )
  );
}
var fa_svelte_svelte_type_style_lang = '';
function create_if_block$1(e) {
  let t, r, i, s, n, o, c;
  function g(y, d) {
    return typeof y[7][4] == 'string' ? create_if_block_1$1 : create_else_block;
  }
  let _ = g(e),
    w = _(e);
  return {
    c() {
      (t = svg_element('svg')),
        (r = svg_element('g')),
        (i = svg_element('g')),
        w.c(),
        this.h();
    },
    l(y) {
      t = claim_svg_element(y, 'svg', {
        id: !0,
        class: !0,
        style: !0,
        viewBox: !0,
        'aria-hidden': !0,
        role: !0,
        xmlns: !0,
      });
      var d = children(t);
      r = claim_svg_element(d, 'g', { transform: !0, 'transform-origin': !0 });
      var m = children(r);
      i = claim_svg_element(m, 'g', { transform: !0 });
      var p = children(i);
      w.l(p), p.forEach(detach), m.forEach(detach), d.forEach(detach), this.h();
    },
    h() {
      attr(i, 'transform', e[10]),
        attr(r, 'transform', (s = `translate(${e[7][0] / 2} ${e[7][1] / 2})`)),
        attr(r, 'transform-origin', (n = `${e[7][0] / 4} 0`)),
        attr(t, 'id', e[0]),
        attr(t, 'class', (o = null_to_empty(e[8]) + ' svelte-1w3t65e')),
        attr(t, 'style', e[9]),
        attr(t, 'viewBox', (c = `0 0 ${e[7][0]} ${e[7][1]}`)),
        attr(t, 'aria-hidden', 'true'),
        attr(t, 'role', 'img'),
        attr(t, 'xmlns', 'http://www.w3.org/2000/svg');
    },
    m(y, d) {
      insert_hydration(y, t, d),
        append_hydration(t, r),
        append_hydration(r, i),
        w.m(i, null);
    },
    p(y, d) {
      _ === (_ = g(y)) && w
        ? w.p(y, d)
        : (w.d(1), (w = _(y)), w && (w.c(), w.m(i, null))),
        d & 1024 && attr(i, 'transform', y[10]),
        d & 128 &&
          s !== (s = `translate(${y[7][0] / 2} ${y[7][1] / 2})`) &&
          attr(r, 'transform', s),
        d & 128 &&
          n !== (n = `${y[7][0] / 4} 0`) &&
          attr(r, 'transform-origin', n),
        d & 1 && attr(t, 'id', y[0]),
        d & 256 &&
          o !== (o = null_to_empty(y[8]) + ' svelte-1w3t65e') &&
          attr(t, 'class', o),
        d & 512 && attr(t, 'style', y[9]),
        d & 128 &&
          c !== (c = `0 0 ${y[7][0]} ${y[7][1]}`) &&
          attr(t, 'viewBox', c);
    },
    d(y) {
      y && detach(t), w.d();
    },
  };
}
function create_else_block(e) {
  let t, r, i, s, n, o, c, g, _, w;
  return {
    c() {
      (t = svg_element('path')), (o = svg_element('path')), this.h();
    },
    l(y) {
      (t = claim_svg_element(y, 'path', {
        d: !0,
        fill: !0,
        'fill-opacity': !0,
        transform: !0,
      })),
        children(t).forEach(detach),
        (o = claim_svg_element(y, 'path', {
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
        attr(o, 'fill', (g = e[2] || e[1] || 'currentColor')),
        attr(o, 'fill-opacity', (_ = e[6] != !1 ? e[5] : e[4])),
        attr(
          o,
          'transform',
          (w = `translate(${e[7][0] / -2} ${e[7][1] / -2})`)
        );
    },
    m(y, d) {
      insert_hydration(y, t, d), insert_hydration(y, o, d);
    },
    p(y, d) {
      d & 128 && r !== (r = y[7][4][0]) && attr(t, 'd', r),
        d & 10 &&
          i !== (i = y[3] || y[1] || 'currentColor') &&
          attr(t, 'fill', i),
        d & 112 &&
          s !== (s = y[6] != !1 ? y[4] : y[5]) &&
          attr(t, 'fill-opacity', s),
        d & 128 &&
          n !== (n = `translate(${y[7][0] / -2} ${y[7][1] / -2})`) &&
          attr(t, 'transform', n),
        d & 128 && c !== (c = y[7][4][1]) && attr(o, 'd', c),
        d & 6 &&
          g !== (g = y[2] || y[1] || 'currentColor') &&
          attr(o, 'fill', g),
        d & 112 &&
          _ !== (_ = y[6] != !1 ? y[5] : y[4]) &&
          attr(o, 'fill-opacity', _),
        d & 128 &&
          w !== (w = `translate(${y[7][0] / -2} ${y[7][1] / -2})`) &&
          attr(o, 'transform', w);
    },
    d(y) {
      y && detach(t), y && detach(o);
    },
  };
}
function create_if_block_1$1(e) {
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
function create_fragment$4(e) {
  let t,
    r = e[7][4] && create_if_block$1(e);
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
          : ((r = create_if_block$1(i)), r.c(), r.m(t.parentNode, t))
        : r && (r.d(1), (r = null));
    },
    i: noop,
    o: noop,
    d(i) {
      r && r.d(i), i && detach(t);
    },
  };
}
function instance$4(e, t, r) {
  let { class: i = '' } = t,
    { id: s = '' } = t,
    { style: n = '' } = t,
    { icon: o } = t,
    { size: c = '' } = t,
    { color: g = '' } = t,
    { fw: _ = !1 } = t,
    { pull: w = '' } = t,
    { scale: y = 1 } = t,
    { translateX: d = 0 } = t,
    { translateY: m = 0 } = t,
    { rotate: p = '' } = t,
    { flip: u = !1 } = t,
    { spin: b = !1 } = t,
    { pulse: l = !1 } = t,
    { primaryColor: a = '' } = t,
    { secondaryColor: h = '' } = t,
    { primaryOpacity: f = 1 } = t,
    { secondaryOpacity: v = 0.4 } = t,
    { swapOpacity: k = !1 } = t,
    x,
    P,
    M,
    I;
  return (
    (e.$$set = (A) => {
      'class' in A && r(11, (i = A.class)),
        'id' in A && r(0, (s = A.id)),
        'style' in A && r(12, (n = A.style)),
        'icon' in A && r(13, (o = A.icon)),
        'size' in A && r(14, (c = A.size)),
        'color' in A && r(1, (g = A.color)),
        'fw' in A && r(15, (_ = A.fw)),
        'pull' in A && r(16, (w = A.pull)),
        'scale' in A && r(17, (y = A.scale)),
        'translateX' in A && r(18, (d = A.translateX)),
        'translateY' in A && r(19, (m = A.translateY)),
        'rotate' in A && r(20, (p = A.rotate)),
        'flip' in A && r(21, (u = A.flip)),
        'spin' in A && r(22, (b = A.spin)),
        'pulse' in A && r(23, (l = A.pulse)),
        'primaryColor' in A && r(2, (a = A.primaryColor)),
        'secondaryColor' in A && r(3, (h = A.secondaryColor)),
        'primaryOpacity' in A && r(4, (f = A.primaryOpacity)),
        'secondaryOpacity' in A && r(5, (v = A.secondaryOpacity)),
        'swapOpacity' in A && r(6, (k = A.swapOpacity));
    }),
    (e.$$.update = () => {
      e.$$.dirty & 8192 && r(7, (x = (o && o.icon) || [0, 0, '', [], ''])),
        e.$$.dirty & 12584960 &&
          r(8, (P = joinCss([i, 'svelte-fa', b && 'spin', l && 'pulse'], ' '))),
        e.$$.dirty & 118784 && r(9, (M = getStyles(n, c, w, _))),
        e.$$.dirty & 4063232 && r(10, (I = getTransform(y, d, m, p, u, 512)));
    }),
    [s, g, a, h, f, v, k, x, P, M, I, i, n, o, c, _, w, y, d, m, p, u, b, l]
  );
}
class Fa extends SvelteComponent {
  constructor(t) {
    super(),
      init(this, t, instance$4, create_fragment$4, safe_not_equal, {
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
  index_svelte_svelte_type_style_lang$c = '',
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
      i = function (d) {
        var m = document.createEvent('Event');
        m.initEvent('pym:' + d, !0, !0), document.dispatchEvent(m);
      },
      s = function (d) {
        var m = new RegExp(
            '[\\?&]' +
              d.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]') +
              '=([^&#]*)'
          ),
          p = m.exec(location.search);
        return p === null ? '' : decodeURIComponent(p[1].replace(/\+/g, ' '));
      },
      n = function (d, m) {
        if (
          !(
            m.xdomain !== '*' && !d.origin.match(new RegExp(m.xdomain + '$'))
          ) &&
          typeof d.data == 'string'
        )
          return !0;
      },
      o = function (d) {
        var m = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/gi;
        if (!!d.match(m)) return !0;
      },
      c = function (d, m, p) {
        var u = ['pym', d, m, p];
        return u.join(t);
      },
      g = function (d) {
        var m = ['pym', d, '(\\S+)', '(.*)'];
        return new RegExp('^' + m.join(t) + '$');
      },
      _ =
        Date.now ||
        function () {
          return new Date().getTime();
        },
      w = function (d, m, p) {
        var u,
          b,
          l,
          a = null,
          h = 0;
        p || (p = {});
        var f = function () {
          (h = p.leading === !1 ? 0 : _()),
            (a = null),
            (l = d.apply(u, b)),
            a || (u = b = null);
        };
        return function () {
          var v = _();
          !h && p.leading === !1 && (h = v);
          var k = m - (v - h);
          return (
            (u = this),
            (b = arguments),
            k <= 0 || k > m
              ? (a && (clearTimeout(a), (a = null)),
                (h = v),
                (l = d.apply(u, b)),
                a || (u = b = null))
              : !a && p.trailing !== !1 && (a = setTimeout(f, k)),
            l
          );
        };
      },
      y = function () {
        for (var d = r.autoInitInstances.length, m = d - 1; m >= 0; m--) {
          var p = r.autoInitInstances[m];
          (p.el.getElementsByTagName('iframe').length &&
            p.el.getElementsByTagName('iframe')[0].contentWindow) ||
            r.autoInitInstances.splice(m, 1);
        }
      };
    return (
      (r.autoInitInstances = []),
      (r.autoInit = function (d) {
        var m = document.querySelectorAll(
            '[data-pym-src]:not([data-pym-auto-initialized])'
          ),
          p = m.length;
        y();
        for (var u = 0; u < p; ++u) {
          var b = m[u];
          b.setAttribute('data-pym-auto-initialized', ''),
            b.id === '' &&
              (b.id =
                'pym-' + u + '-' + Math.random().toString(36).substr(2, 5));
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
                  var v = Number(b.getAttribute('data-pym-' + f));
                  isNaN(v) || (h[f] = v);
                  break;
                default:
                  console.err('unrecognized attribute type');
              }
          var k = new r.Parent(b.id, l, h);
          r.autoInitInstances.push(k);
        }
        return d || i('pym-initialized'), r.autoInitInstances;
      }),
      (r.Parent = function (d, m, p) {
        (this.id = d),
          (this.url = m),
          (this.el = document.getElementById(d)),
          (this.iframe = null),
          (this.settings = {
            xdomain: '*',
            optionalparams: !0,
            parenturlparam: 'parentUrl',
            parenturlvalue: window.location.href,
            trackscroll: !1,
            scrollwait: 100,
          }),
          (this.messageRegex = g(this.id)),
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
              y();
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
        for (var u in p) this.settings[u] = p[u];
        return (
          (this._throttleOnScroll = w(
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
      (r.Child = function (d) {
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
          (d = d || {}),
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
        var m = function (b) {
          var l = document.getElementsByTagName('html')[0],
            a,
            h = l.className;
          try {
            window.self !== window.top
              ? (a = 'embedded')
              : (a = 'not-embedded');
          } catch (f) {
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
        for (var p in d) this.settings[p] = d[p];
        (this.id = s('childId') || d.id),
          (this.messageRegex = new RegExp(
            '^pym' + t + this.id + t + '(\\S+)' + t + '(.*)$'
          ));
        var u = parseInt(s('initialWidth'));
        return (
          (this.parentUrl = s(this.settings.parenturlparam)),
          (this.parentTitle = s('parentTitle')),
          this.onMessage('width', this._onWidthMessage),
          window.addEventListener('message', this._processMessage, !1),
          this.settings.renderCallback && this.settings.renderCallback(u),
          this.sendHeight(),
          this.settings.polling &&
            (this.timerId = window.setInterval(
              this.sendHeight,
              this.settings.polling
            )),
          m(d.onMarkedEmbeddedStatus),
          this
        );
      }),
      typeof document != 'undefined' && r.autoInit(!0),
      r
    );
  });
})(pym_v1);
var pym = pym_v1.exports,
  queryString = {},
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
  } catch (s) {}
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
  } catch (i) {
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
    } catch (c) {
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
    } catch (t) {
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
          const v = h.length;
          return f === void 0 ||
            (l.skipNull && f === null) ||
            (l.skipEmptyString && f === '')
            ? h
            : f === null
            ? [...h, [_(a, l), '[', v, ']'].join('')]
            : [...h, [_(a, l), '[', _(v, l), ']=', _(f, l)].join('')];
        };
      case 'bracket':
        return (a) => (h, f) =>
          f === void 0 ||
          (l.skipNull && f === null) ||
          (l.skipEmptyString && f === '')
            ? h
            : f === null
            ? [...h, [_(a, l), '[]'].join('')]
            : [...h, [_(a, l), '[]=', _(f, l)].join('')];
      case 'comma':
      case 'separator':
        return (a) => (h, f) =>
          f == null || f.length === 0
            ? h
            : h.length === 0
            ? [[_(a, l), '=', _(f, l)].join('')]
            : [[h, _(f, l)].join(l.arrayFormatSeparator)];
      default:
        return (a) => (h, f) =>
          f === void 0 ||
          (l.skipNull && f === null) ||
          (l.skipEmptyString && f === '')
            ? h
            : f === null
            ? [...h, _(a, l)]
            : [...h, [_(a, l), '=', _(f, l)].join('')];
    }
  }
  function c(l) {
    let a;
    switch (l.arrayFormat) {
      case 'index':
        return (h, f, v) => {
          if (
            ((a = /\[(\d*)\]$/.exec(h)), (h = h.replace(/\[\d*\]$/, '')), !a)
          ) {
            v[h] = f;
            return;
          }
          v[h] === void 0 && (v[h] = {}), (v[h][a[1]] = f);
        };
      case 'bracket':
        return (h, f, v) => {
          if (((a = /(\[\])$/.exec(h)), (h = h.replace(/\[\]$/, '')), !a)) {
            v[h] = f;
            return;
          }
          if (v[h] === void 0) {
            v[h] = [f];
            return;
          }
          v[h] = [].concat(v[h], f);
        };
      case 'comma':
      case 'separator':
        return (h, f, v) => {
          const k = typeof f == 'string' && f.includes(l.arrayFormatSeparator),
            x =
              typeof f == 'string' &&
              !k &&
              w(f, l).includes(l.arrayFormatSeparator);
          f = x ? w(f, l) : f;
          const P =
            k || x
              ? f.split(l.arrayFormatSeparator).map((M) => w(M, l))
              : f === null
              ? f
              : w(f, l);
          v[h] = P;
        };
      default:
        return (h, f, v) => {
          if (v[h] === void 0) {
            v[h] = f;
            return;
          }
          v[h] = [].concat(v[h], f);
        };
    }
  }
  function g(l) {
    if (typeof l != 'string' || l.length !== 1)
      throw new TypeError(
        'arrayFormatSeparator must be single character string'
      );
  }
  function _(l, a) {
    return a.encode ? (a.strict ? t(l) : encodeURIComponent(l)) : l;
  }
  function w(l, a) {
    return a.decode ? r(l) : l;
  }
  function y(l) {
    return Array.isArray(l)
      ? l.sort()
      : typeof l == 'object'
      ? y(Object.keys(l))
          .sort((a, h) => Number(a) - Number(h))
          .map((a) => l[a])
      : l;
  }
  function d(l) {
    const a = l.indexOf('#');
    return a !== -1 && (l = l.slice(0, a)), l;
  }
  function m(l) {
    let a = '';
    const h = l.indexOf('#');
    return h !== -1 && (a = l.slice(h)), a;
  }
  function p(l) {
    l = d(l);
    const a = l.indexOf('?');
    return a === -1 ? '' : l.slice(a + 1);
  }
  function u(l, a) {
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
      g(a.arrayFormatSeparator);
    const h = c(a),
      f = Object.create(null);
    if (typeof l != 'string' || ((l = l.trim().replace(/^[?#&]/, '')), !l))
      return f;
    for (const v of l.split('&')) {
      if (v === '') continue;
      let [k, x] = i(a.decode ? v.replace(/\+/g, ' ') : v, '=');
      (x =
        x === void 0
          ? null
          : ['comma', 'separator'].includes(a.arrayFormat)
          ? x
          : w(x, a)),
        h(w(k, a), x, f);
    }
    for (const v of Object.keys(f)) {
      const k = f[v];
      if (typeof k == 'object' && k !== null)
        for (const x of Object.keys(k)) k[x] = u(k[x], a);
      else f[v] = u(k, a);
    }
    return a.sort === !1
      ? f
      : (a.sort === !0
          ? Object.keys(f).sort()
          : Object.keys(f).sort(a.sort)
        ).reduce((v, k) => {
          const x = f[k];
          return (
            Boolean(x) && typeof x == 'object' && !Array.isArray(x)
              ? (v[k] = y(x))
              : (v[k] = x),
            v
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
        g(a.arrayFormatSeparator);
      const h = (x) =>
          (a.skipNull && n(l[x])) || (a.skipEmptyString && l[x] === ''),
        f = o(a),
        v = {};
      for (const x of Object.keys(l)) h(x) || (v[x] = l[x]);
      const k = Object.keys(v);
      return (
        a.sort !== !1 && k.sort(a.sort),
        k
          .map((x) => {
            const P = l[x];
            return P === void 0
              ? ''
              : P === null
              ? _(x, a)
              : Array.isArray(P)
              ? P.reduce(f(x), []).join('&')
              : _(x, a) + '=' + _(P, a);
          })
          .filter((x) => x.length > 0)
          .join('&')
      );
    }),
    (e.parseUrl = (l, a) => {
      a = Object.assign({ decode: !0 }, a);
      const [h, f] = i(l, '#');
      return Object.assign(
        { url: h.split('?')[0] || '', query: b(p(l), a) },
        a && a.parseFragmentIdentifier && f
          ? { fragmentIdentifier: w(f, a) }
          : {}
      );
    }),
    (e.stringifyUrl = (l, a) => {
      a = Object.assign({ encode: !0, strict: !0 }, a);
      const h = d(l.url).split('?')[0] || '',
        f = e.extract(l.url),
        v = e.parse(f, { sort: !1 }),
        k = Object.assign(v, l.query);
      let x = e.stringify(k, a);
      x && (x = `?${x}`);
      let P = m(l.url);
      return (
        l.fragmentIdentifier && (P = `#${_(l.fragmentIdentifier, a)}`),
        `${h}${x}${P}`
      );
    }),
    (e.pick = (l, a, h) => {
      h = Object.assign({ parseFragmentIdentifier: !0 }, h);
      const { url: f, query: v, fragmentIdentifier: k } = e.parseUrl(l, h);
      return e.stringifyUrl(
        { url: f, query: s(v, a), fragmentIdentifier: k },
        h
      );
    }),
    (e.exclude = (l, a, h) => {
      const f = Array.isArray(a) ? (v) => !a.includes(v) : (v, k) => !a(v, k);
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
        parts: o.split('/').filter((g) => g !== ''),
        hasLeading: c ? /^\/\/+/.test(o) : /^\/+/.test(o),
        hasTrailing: c ? /\/\/+$/.test(o) : /\/+$/.test(o),
      },
      suffix: c,
    };
  },
  buildUrl = (e, t) => {
    const { prefix: r, pathname: i, suffix: s } = e,
      { parts: n, hasLeading: o, hasTrailing: c } = i,
      { leadingSlash: g, trailingSlash: _ } = t,
      w = g === !0 || (g === 'keep' && o),
      y = _ === !0 || (_ === 'keep' && c);
    let d = r;
    n.length > 0 && ((d || w) && (d += '/'), (d += n.join('/'))),
      y && (d += '/'),
      !d && w && (d += '/');
    const m = ue(ue({}, queryString.parse(s, t.queryOptions)), t.query),
      p = queryString.stringify(m, t.queryOptions);
    return p && (d += `?${p}`), d;
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
var index_svelte_svelte_type_style_lang$b = '',
  index_svelte_svelte_type_style_lang$a = '',
  classnames$1 = { exports: {} };
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
              for (var g in n) t.call(n, g) && n[g] && i.push(g);
            else i.push(n.toString());
        }
      }
      return i.join(' ');
    }
    e.exports ? ((r.default = r), (e.exports = r)) : (window.classNames = r);
  })();
})(classnames$1);
var classnames = classnames$1.exports,
  index_svelte_svelte_type_style_lang$9 = '',
  Link_svelte_svelte_type_style_lang = '',
  index_svelte_svelte_type_style_lang$8 = '';
const name = '@reuters-graphics/graphics-svelte-components',
  version = '0.3.9',
  type = 'module',
  homepage = 'https://reuters-graphics.github.io/graphics-svelte-components',
  repository = 'https://github.com/reuters-graphics/graphics-svelte-components',
  scripts = {
    start: 'svelte-kit dev --open',
    package: 'svelte-kit package && npm run build:commit',
    'build:docs': 'svelte-kit build && touch docs/.nojekyll',
    'build:commit':
      'npm run build:docs && git add . && git commit -m build && git push origin master',
    postinstall: 'husky install',
    release: 'npm run package && npm publish dist',
    postversion:
      'git push origin master && git push origin master --tags && npm run release',
    prepublishOnly: `echo "Did you mean to run 'yarn release'?" && exit 1`,
  },
  devDependencies = {
    '@reuters-graphics/eslint-config': '^0.0.2',
    '@rollup/plugin-dsv': '^2.0.1',
    '@sveltejs/adapter-static': '1.0.0-next.34',
    '@sveltejs/kit': '1.0.0-next.348',
    autoprefixer: '^10.2.5',
    eslint: '^8.16.0',
    'eslint-plugin-mocha': '^10.0.5',
    'eslint-plugin-svelte3': '^4.0.0',
    'front-matter': '^4.0.2',
    'fs-extra': '^10.0.0',
    glob: '^7.1.6',
    husky: '>=6',
    'lint-staged': '>=10',
    mdsvex: '^0.9.8',
    micromatch: '^4.0.4',
    'npm-run-all': '^4.1.5',
    prettier: '^2.3.2',
    'prettier-plugin-svelte': '^2.4.0',
    sass: '^1.52.2',
    svelte: '^3.48.0',
    'svelte-preprocess': '^4.10.6',
    svelte2tsx: '^0.5.10',
    typescript: '^4.7.2',
  },
  engines = { node: '>=16.7' },
  dependencies = {
    '@fortawesome/free-brands-svg-icons': '^5.15.4',
    '@fortawesome/free-regular-svg-icons': '^5.15.3',
    '@fortawesome/free-solid-svg-icons': '^5.15.3',
    '@reuters-graphics/style-theme-eisbaer': '^0.3.5',
    '@sveltejs/svelte-scroller': '^2.0.7',
    classnames: '^2.3.1',
    'lodash-es': '^4.17.21',
    'lottie-web': '^5.7.13',
    marked: '^4.0.8',
    'proper-url-join': '^2.1.1',
    'pym.js': '^1.3.2',
    'svelte-fa': '^2.2.0',
    'ua-parser-js': '^0.7.27',
  };
var pkg = {
  name,
  version,
  type,
  private: !1,
  homepage,
  repository,
  scripts,
  'lint-staged': {
    '*.js': 'eslint --cache --fix',
    '*.{js,css,md,svelte}': 'prettier --write',
  },
  devDependencies,
  engines,
  dependencies,
};
const getStores = () => {
    const e = getContext('__svelte__');
    return {
      page: { subscribe: e.page.subscribe },
      navigating: { subscribe: e.navigating.subscribe },
      get preloading() {
        return (
          console.error(
            'stores.preloading is deprecated; use stores.navigating instead'
          ),
          { subscribe: e.navigating.subscribe }
        );
      },
      session: e.session,
      updated: e.updated,
    };
  },
  page = {
    subscribe(e) {
      return getStores().page.subscribe(e);
    },
  };
var freeGlobal =
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
  } catch (n) {}
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
    } catch (t) {}
    try {
      return e + '';
    } catch (t) {}
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
const attachScript = function (e, t, r, i, s, n, o) {
  (e.GoogleAnalyticsObject = s),
    (e[s] =
      e[s] ||
      function () {
        (e[s].q = e[s].q || []).push(arguments);
      }),
    (e[s].l = 1 * new Date()),
    (n = t.createElement(r)),
    (o = t.getElementsByTagName(r)[0]),
    (n.async = 1),
    (n.src = i),
    o.parentNode.insertBefore(n, o);
};
var analytics = (e, t) => {
  attachScript(
    window,
    document,
    'script',
    'https://www.google-analytics.com/analytics.js',
    'ga'
  ),
    window.ga('create', 'UA-41619329-3', { cookieDomain: 'auto' }),
    window.ga('require', 'linkid', 'linkid.js'),
    window.ga('send', 'pageview', { page: e, title: t }),
    inIframe() || riveted.init({ reportInterval: 30 });
};
function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return !0;
  }
}
var riveted = (function () {
    var e = !1,
      t = !1,
      r = !1,
      i = 0,
      s = new Date(),
      n = null,
      o = null,
      c,
      g,
      _,
      w,
      y,
      d,
      m,
      p;
    function u(A) {
      typeof ga == 'function' && (d = !0),
        typeof _gaq != 'undefined' &&
          typeof _gaq.push == 'function' &&
          (m = !0),
        typeof dataLayer != 'undefined' &&
          typeof dataLayer.push == 'function' &&
          (p = !0),
        (A = A || {}),
        (_ = parseInt(A.reportInterval, 10) || 5),
        (w = parseInt(A.idleTimeout, 10) || 30),
        typeof A.eventHandler == 'function' && (c = A.eventHandler),
        typeof A.userTimingHandler == 'function' && (g = A.userTimingHandler),
        'nonInteraction' in A &&
        (A.nonInteraction === !1 || A.nonInteraction === 'false')
          ? (y = !1)
          : (y = !0),
        l(document, 'keydown', I),
        l(document, 'click', I),
        l(window, 'mousemove', b(I, 500)),
        l(window, 'scroll', b(I, 500)),
        l(document, 'visibilitychange', h),
        l(document, 'webkitvisibilitychange', h),
        c(0);
    }
    function b(A, V) {
      var F,
        L,
        D,
        C = null,
        S = 0,
        E = function () {
          (S = new Date()), (C = null), (D = A.apply(F, L));
        };
      return function () {
        var T = new Date();
        S || (S = T);
        var R = V - (T - S);
        return (
          (F = this),
          (L = arguments),
          R <= 0
            ? (clearTimeout(C), (C = null), (S = T), (D = A.apply(F, L)))
            : C || (C = setTimeout(E, R)),
          D
        );
      };
    }
    function l(A, V, F) {
      A.addEventListener
        ? A.addEventListener(V, F, !1)
        : A.attachEvent
        ? A.attachEvent('on' + V, F)
        : (A['on' + V] = F);
    }
    (g = function (A) {
      p
        ? dataLayer.push({
            event: 'RivetedTiming',
            eventCategory: 'Riveted',
            timingVar: 'First Interaction',
            timingValue: A,
          })
        : (d && ga('send', 'timing', 'Riveted', 'First Interaction', A),
          m &&
            _gaq.push([
              '_trackTiming',
              'Riveted',
              'First Interaction',
              A,
              null,
              100,
            ]));
    }),
      (c = function (A) {
        p
          ? dataLayer.push({
              event: 'Riveted',
              eventCategory: 'Riveted',
              eventAction: 'Time Spent',
              eventLabel: A,
              eventValue: _,
              eventNonInteraction: y,
            })
          : (d &&
              ga('send', 'event', 'Riveted', 'Time Spent', A.toString(), _, {
                nonInteraction: y,
              }),
            m &&
              _gaq.push([
                '_trackEvent',
                'Riveted',
                'Time Spent',
                A.toString(),
                _,
                y,
              ]));
      });
    function a() {
      clearTimeout(o), v();
    }
    function h() {
      (document.hidden || document.webkitHidden) && a();
    }
    function f() {
      (i += 1), i > 0 && i % _ === 0 && c(i);
    }
    function v() {
      (t = !0), clearTimeout(n);
    }
    function k() {
      a(), (r = !0);
    }
    function x() {
      r = !1;
    }
    function P() {
      (t = !1), clearTimeout(n), (n = setInterval(f, 1e3));
    }
    function M() {
      var A = new Date(),
        V = A - s;
      (e = !0), g(V), (n = setInterval(f, 1e3));
    }
    function I() {
      r ||
        (e || M(),
        t && P(),
        clearTimeout(o),
        (o = setTimeout(a, w * 1e3 + 100)));
    }
    return { init: u, trigger: I, setIdle: a, on: x, off: k };
  })(),
  publisherTags = () => {
    const e = window.googletag || {};
    (e.cmd = e.cmd || []),
      (function () {
        const t = document.createElement('script');
        (t.async = !0), (t.type = 'text/javascript');
        const r = document.location.protocol === 'https:';
        t.src =
          (r ? 'https:' : 'http:') +
          '//www.googletagservices.com/tag/js/gpt.js';
        const i = document.getElementsByTagName('script')[0];
        i.parentNode.insertBefore(t, i);
      })(),
      e.cmd.push(function () {
        e
          .defineSlot(
            '/4735792/reuters_investigates',
            [[300, 250]],
            'div-gpt-ad-1441822201033-0'
          )
          .addService(e.pubads()),
          e.pubads().enableSingleRequest(),
          e.enableServices();
      });
  };
function create_fragment$3(e) {
  let t,
    r,
    i,
    s,
    n,
    o,
    c,
    g,
    _,
    w,
    y,
    d,
    m,
    p,
    u,
    b,
    l,
    a,
    h,
    f,
    v,
    k,
    x,
    P,
    M,
    I,
    A,
    V,
    F,
    L = `<script type="application/ld+json">${JSON.stringify(e[8])}<\/script>`,
    D,
    C,
    S = `<script type="application/ld+json">${JSON.stringify(e[9])}<\/script>`,
    E;
  return (
    (document.title = r = e[0]),
    {
      c() {
        (t = element('html')),
          (i = element('meta')),
          (s = element('link')),
          (n = element('link')),
          (o = element('link')),
          (c = element('link')),
          (g = element('link')),
          (_ = element('meta')),
          (w = element('meta')),
          (y = element('meta')),
          (d = element('meta')),
          (m = element('meta')),
          (u = element('meta')),
          (b = element('meta')),
          (l = element('meta')),
          (a = element('meta')),
          (h = element('meta')),
          (v = element('meta')),
          (k = element('meta')),
          (x = element('meta')),
          (M = element('meta')),
          (I = element('meta')),
          (A = element('meta')),
          (V = element('meta')),
          (F = new HtmlTagHydration(!1)),
          (D = empty()),
          (C = new HtmlTagHydration(!1)),
          (E = empty()),
          this.h();
      },
      l(T) {
        const R = query_selector_all(
          '[data-svelte="svelte-16p2lmp"]',
          document.head
        );
        (t = claim_element(R, 'HTML', { lang: !0 })),
          children(t).forEach(detach),
          (i = claim_element(R, 'META', { name: !0, content: !0 })),
          (s = claim_element(R, 'LINK', { rel: !0, href: !0 })),
          (n = claim_element(R, 'LINK', { rel: !0, type: !0, href: !0 })),
          (o = claim_element(R, 'LINK', {
            rel: !0,
            type: !0,
            href: !0,
            sizes: !0,
          })),
          (c = claim_element(R, 'LINK', {
            rel: !0,
            type: !0,
            href: !0,
            sizes: !0,
          })),
          (g = claim_element(R, 'LINK', {
            rel: !0,
            type: !0,
            href: !0,
            sizes: !0,
          })),
          (_ = claim_element(R, 'META', { property: !0, content: !0 })),
          (w = claim_element(R, 'META', { property: !0, content: !0 })),
          (y = claim_element(R, 'META', {
            property: !0,
            content: !0,
            itemprop: !0,
          })),
          (d = claim_element(R, 'META', {
            property: !0,
            content: !0,
            itemprop: !0,
          })),
          (m = claim_element(R, 'META', {
            property: !0,
            content: !0,
            itemprop: !0,
          })),
          (u = claim_element(R, 'META', { property: !0, content: !0 })),
          (b = claim_element(R, 'META', { name: !0, content: !0 })),
          (l = claim_element(R, 'META', { name: !0, content: !0 })),
          (a = claim_element(R, 'META', { name: !0, content: !0 })),
          (h = claim_element(R, 'META', { name: !0, content: !0 })),
          (v = claim_element(R, 'META', { name: !0, content: !0 })),
          (k = claim_element(R, 'META', { name: !0, content: !0 })),
          (x = claim_element(R, 'META', { name: !0, content: !0 })),
          (M = claim_element(R, 'META', { property: !0, content: !0 })),
          (I = claim_element(R, 'META', { property: !0, content: !0 })),
          (A = claim_element(R, 'META', { property: !0, content: !0 })),
          (V = claim_element(R, 'META', { property: !0, content: !0 })),
          (F = claim_html_tag(R, !1)),
          (D = empty()),
          (C = claim_html_tag(R, !1)),
          (E = empty()),
          R.forEach(detach),
          this.h();
      },
      h() {
        attr(t, 'lang', e[5]),
          attr(i, 'name', 'description'),
          attr(i, 'content', e[1]),
          attr(s, 'rel', 'canonical'),
          attr(s, 'href', e[7]),
          attr(n, 'rel', 'shortcut icon'),
          attr(n, 'type', 'image/x-icon'),
          attr(
            n,
            'href',
            'https://s3.reutersmedia.net/resources_v2/images/favicon/favicon.ico'
          ),
          attr(o, 'rel', 'icon'),
          attr(o, 'type', 'image/png'),
          attr(
            o,
            'href',
            'https://s3.reutersmedia.net/resources_v2/images/favicon/favicon-16x16.png'
          ),
          attr(o, 'sizes', '16x16'),
          attr(c, 'rel', 'icon'),
          attr(c, 'type', 'image/png'),
          attr(
            c,
            'href',
            'https://s1.reutersmedia.net/resources_v2/images/favicon/favicon-32x32.png'
          ),
          attr(c, 'sizes', '32x32'),
          attr(g, 'rel', 'icon'),
          attr(g, 'type', 'image/png'),
          attr(
            g,
            'href',
            'https://s3.reutersmedia.net/resources_v2/images/favicon/favicon-96x96.png'
          ),
          attr(g, 'sizes', '96x96'),
          attr(_, 'property', 'og:url'),
          attr(_, 'content', e[7]),
          attr(w, 'property', 'og:type'),
          attr(w, 'content', 'article'),
          attr(y, 'property', 'og:title'),
          attr(y, 'content', e[2]),
          attr(y, 'itemprop', 'name'),
          attr(d, 'property', 'og:description'),
          attr(d, 'content', e[3]),
          attr(d, 'itemprop', 'description'),
          attr(m, 'property', 'og:image'),
          attr(m, 'content', (p = urlJoin(assets, e[4]))),
          attr(m, 'itemprop', 'image'),
          attr(u, 'property', 'og:site_name'),
          attr(u, 'content', 'Reuters'),
          attr(b, 'name', 'twitter:card'),
          attr(b, 'content', 'summary_large_image'),
          attr(l, 'name', 'twitter:site'),
          attr(l, 'content', '@ReutersGraphics'),
          attr(a, 'name', 'twitter:creator'),
          attr(a, 'content', '@ReutersGraphics'),
          attr(h, 'name', 'twitter:domain'),
          attr(h, 'content', (f = `https://${e[6]}`)),
          attr(v, 'name', 'twitter:title'),
          attr(v, 'content', e[2]),
          attr(k, 'name', 'twitter:description'),
          attr(k, 'content', e[3]),
          attr(x, 'name', 'twitter:image:src'),
          attr(x, 'content', (P = urlJoin(assets, e[4]))),
          attr(M, 'property', 'fb:app_id'),
          attr(M, 'content', '319194411438328'),
          attr(I, 'property', 'fb:admins'),
          attr(I, 'content', '616167736'),
          attr(A, 'property', 'fb:admins'),
          attr(A, 'content', '625796953'),
          attr(V, 'property', 'fb:admins'),
          attr(V, 'content', '571759798'),
          (F.a = D),
          (C.a = E);
      },
      m(T, R) {
        append_hydration(document.head, t),
          append_hydration(document.head, i),
          append_hydration(document.head, s),
          append_hydration(document.head, n),
          append_hydration(document.head, o),
          append_hydration(document.head, c),
          append_hydration(document.head, g),
          append_hydration(document.head, _),
          append_hydration(document.head, w),
          append_hydration(document.head, y),
          append_hydration(document.head, d),
          append_hydration(document.head, m),
          append_hydration(document.head, u),
          append_hydration(document.head, b),
          append_hydration(document.head, l),
          append_hydration(document.head, a),
          append_hydration(document.head, h),
          append_hydration(document.head, v),
          append_hydration(document.head, k),
          append_hydration(document.head, x),
          append_hydration(document.head, M),
          append_hydration(document.head, I),
          append_hydration(document.head, A),
          append_hydration(document.head, V),
          F.m(L, document.head),
          append_hydration(document.head, D),
          C.m(S, document.head),
          append_hydration(document.head, E);
      },
      p(T, [R]) {
        R & 32 && attr(t, 'lang', T[5]),
          R & 1 && r !== (r = T[0]) && (document.title = r),
          R & 2 && attr(i, 'content', T[1]),
          R & 4 && attr(y, 'content', T[2]),
          R & 8 && attr(d, 'content', T[3]),
          R & 16 && p !== (p = urlJoin(assets, T[4])) && attr(m, 'content', p),
          R & 64 && f !== (f = `https://${T[6]}`) && attr(h, 'content', f),
          R & 4 && attr(v, 'content', T[2]),
          R & 8 && attr(k, 'content', T[3]),
          R & 16 && P !== (P = urlJoin(assets, T[4])) && attr(x, 'content', P);
      },
      i: noop,
      o: noop,
      d(T) {
        detach(t),
          detach(i),
          detach(s),
          detach(n),
          detach(o),
          detach(c),
          detach(g),
          detach(_),
          detach(w),
          detach(y),
          detach(d),
          detach(m),
          detach(u),
          detach(b),
          detach(l),
          detach(a),
          detach(h),
          detach(v),
          detach(k),
          detach(x),
          detach(M),
          detach(I),
          detach(A),
          detach(V),
          detach(D),
          T && F.d(),
          detach(E),
          T && C.d();
      },
    }
  );
}
function instance$3(e, t, r) {
  let i;
  component_subscribe(e, page, (u) => r(10, (i = u)));
  let { seoTitle: s } = t,
    { seoDescription: n } = t,
    { shareTitle: o } = t,
    { shareDescription: c } = t,
    { shareImgPath: g } = t,
    { lang: _ = 'en' } = t,
    { hostname: w = 'graphics.reuters.com' } = t;
  const y = (u) => {
      try {
        return new URL(u);
      } catch (b) {
        return {};
      }
    },
    d = get(pkg, 'homepage')
      ? urlJoin(y(pkg.homepage).origin, i.url.pathname, { trailingSlash: !0 })
      : get(pkg, 'reuters.preview')
      ? urlJoin(y(pkg.reuters.preview).origin, i.url.pathname, {
          trailingSlash: !0,
        })
      : i.host
      ? urlJoin('https://' + i.host, i.url.pathname, { trailingSlash: !0 })
      : `https://${w}`;
  window.location.host === 'graphics.reuters.com' &&
    (analytics(d, s), publisherTags());
  const m = {
      '@context': 'http://schema.org',
      '@type': 'NewsMediaOrganization',
      '@id': 'https://www.reuters.com/#publisher',
      name: 'Reuters',
      logo: {
        '@type': 'ImageObject',
        url: 'https://s3.reutersmedia.net/resources_v2/images/reuters_social_logo.png',
        width: '200',
        height: '200',
      },
      url: 'https://www.reuters.com/',
    },
    p = {
      '@context': 'http://schema.org',
      '@type': 'NewsArticle',
      headline: s,
      url: d,
      mainEntityOfPage: { '@type': 'WebPage', '@id': d },
      thumbnailUrl: urlJoin(assets, g),
      image: [
        {
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
          url: urlJoin(assets, g),
        },
      ],
      publisher: { '@id': 'https://www.reuters.com/#publisher' },
      copyrightHolder: { '@id': 'https://www.reuters.com/#publisher' },
      sourceOrganization: { '@id': 'https://www.reuters.com/#publisher' },
      copyrightYear: new Date().getFullYear(),
      dateCreated: get(pkg, 'reuters.graphic.published'),
      datePublished: get(pkg, 'reuters.graphic.published'),
      dateModified: get(pkg, 'reuters.graphic.updated'),
      author: get(pkg, 'reuters.graphic.authors', []).map(
        ({ name: u, url: b }) => ({ '@type': 'Person', name: u, url: b })
      ),
      articleSection: 'Graphics',
      isAccessibleForFree: !0,
      creator: ['Reuters Graphics'],
      keywords: ['Reuters graphics', 'Reuters', 'graphics', 'Interactives'],
    };
  return (
    (e.$$set = (u) => {
      'seoTitle' in u && r(0, (s = u.seoTitle)),
        'seoDescription' in u && r(1, (n = u.seoDescription)),
        'shareTitle' in u && r(2, (o = u.shareTitle)),
        'shareDescription' in u && r(3, (c = u.shareDescription)),
        'shareImgPath' in u && r(4, (g = u.shareImgPath)),
        'lang' in u && r(5, (_ = u.lang)),
        'hostname' in u && r(6, (w = u.hostname));
    }),
    [s, n, o, c, g, _, w, d, m, p]
  );
}
class SEO extends SvelteComponent {
  constructor(t) {
    super(),
      init(this, t, instance$3, create_fragment$3, safe_not_equal, {
        seoTitle: 0,
        seoDescription: 1,
        shareTitle: 2,
        shareDescription: 3,
        shareImgPath: 4,
        lang: 5,
        hostname: 6,
      });
  }
}
var uaParser = { exports: {} };
(function (e, t) {
  (function (r, i) {
    var s = '0.7.31',
      n = '',
      o = '?',
      c = 'function',
      g = 'undefined',
      _ = 'object',
      w = 'string',
      y = 'major',
      d = 'model',
      m = 'name',
      p = 'type',
      u = 'vendor',
      b = 'version',
      l = 'architecture',
      a = 'console',
      h = 'mobile',
      f = 'tablet',
      v = 'smarttv',
      k = 'wearable',
      x = 'embedded',
      P = 255,
      M = 'Amazon',
      I = 'Apple',
      A = 'ASUS',
      V = 'BlackBerry',
      F = 'Browser',
      L = 'Chrome',
      D = 'Edge',
      C = 'Firefox',
      S = 'Google',
      E = 'Huawei',
      T = 'LG',
      R = 'Microsoft',
      z = 'Motorola',
      B = 'Opera',
      H = 'Samsung',
      G = 'Sony',
      J = 'Xiaomi',
      Z = 'Zebra',
      Q = 'Facebook',
      ee = function (q, W) {
        var N = {};
        for (var U in q)
          W[U] && W[U].length % 2 === 0
            ? (N[U] = W[U].concat(q[U]))
            : (N[U] = q[U]);
        return N;
      },
      te = function (q) {
        for (var W = {}, N = 0; N < q.length; N++) W[q[N].toUpperCase()] = q[N];
        return W;
      },
      re = function (q, W) {
        return typeof q === w ? K(W).indexOf(K(q)) !== -1 : !1;
      },
      K = function (q) {
        return q.toLowerCase();
      },
      se = function (q) {
        return typeof q === w ? q.replace(/[^\d\.]/g, n).split('.')[0] : i;
      },
      O = function (q, W) {
        if (typeof q === w)
          return (
            (q = q.replace(/^\s\s*/, n).replace(/\s\s*$/, n)),
            typeof W === g ? q : q.substring(0, P)
          );
      },
      X = function (q, W) {
        for (var N = 0, U, j, he, Y, pe, ce; N < W.length && !pe; ) {
          var de = W[N],
            me = W[N + 1];
          for (U = j = 0; U < de.length && !pe; )
            if (((pe = de[U++].exec(q)), pe))
              for (he = 0; he < me.length; he++)
                (ce = pe[++j]),
                  (Y = me[he]),
                  typeof Y === _ && Y.length > 0
                    ? Y.length === 2
                      ? typeof Y[1] == c
                        ? (this[Y[0]] = Y[1].call(this, ce))
                        : (this[Y[0]] = Y[1])
                      : Y.length === 3
                      ? typeof Y[1] === c && !(Y[1].exec && Y[1].test)
                        ? (this[Y[0]] = ce ? Y[1].call(this, ce, Y[2]) : i)
                        : (this[Y[0]] = ce ? ce.replace(Y[1], Y[2]) : i)
                      : Y.length === 4 &&
                        (this[Y[0]] = ce
                          ? Y[3].call(this, ce.replace(Y[1], Y[2]))
                          : i)
                    : (this[Y] = ce || i);
          N += 2;
        }
      },
      ae = function (q, W) {
        for (var N in W)
          if (typeof W[N] === _ && W[N].length > 0) {
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
        2e3: 'NT 5.0',
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
          [b, [m, 'Chrome']],
          [/edg(?:e|ios|a)?\/([\w\.]+)/i],
          [b, [m, 'Edge']],
          [
            /(opera mini)\/([-\w\.]+)/i,
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
          ],
          [m, b],
          [/opios[\/ ]+([\w\.]+)/i],
          [b, [m, B + ' Mini']],
          [/\bopr\/([\w\.]+)/i],
          [b, [m, B]],
          [
            /(kindle)\/([\w\.]+)/i,
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
            /(?:ms|\()(ie) ([\w\.]+)/i,
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
            /(weibo)__([\d\.]+)/i,
          ],
          [m, b],
          [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
          [b, [m, 'UC' + F]],
          [/\bqbcore\/([\w\.]+)/i],
          [b, [m, 'WeChat(Win) Desktop']],
          [/micromessenger\/([\w\.]+)/i],
          [b, [m, 'WeChat']],
          [/konqueror\/([\w\.]+)/i],
          [b, [m, 'Konqueror']],
          [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
          [b, [m, 'IE']],
          [/yabrowser\/([\w\.]+)/i],
          [b, [m, 'Yandex']],
          [/(avast|avg)\/([\w\.]+)/i],
          [[m, /(.+)/, '$1 Secure ' + F], b],
          [/\bfocus\/([\w\.]+)/i],
          [b, [m, C + ' Focus']],
          [/\bopt\/([\w\.]+)/i],
          [b, [m, B + ' Touch']],
          [/coc_coc\w+\/([\w\.]+)/i],
          [b, [m, 'Coc Coc']],
          [/dolfin\/([\w\.]+)/i],
          [b, [m, 'Dolphin']],
          [/coast\/([\w\.]+)/i],
          [b, [m, B + ' Coast']],
          [/miuibrowser\/([\w\.]+)/i],
          [b, [m, 'MIUI ' + F]],
          [/fxios\/([-\w\.]+)/i],
          [b, [m, C]],
          [/\bqihu|(qi?ho?o?|360)browser/i],
          [[m, '360 ' + F]],
          [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
          [[m, /(.+)/, '$1 ' + F], b],
          [/(comodo_dragon)\/([\w\.]+)/i],
          [[m, /_/g, ' '], b],
          [
            /(electron)\/([\w\.]+) safari/i,
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
          ],
          [m, b],
          [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
          [m],
          [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
          [[m, Q], b],
          [
            /safari (line)\/([\w\.]+)/i,
            /\b(line)\/([\w\.]+)\/iab/i,
            /(chromium|instagram)[\/ ]([-\w\.]+)/i,
          ],
          [m, b],
          [/\bgsa\/([\w\.]+) .*safari\//i],
          [b, [m, 'GSA']],
          [/headlesschrome(?:\/([\w\.]+)| )/i],
          [b, [m, L + ' Headless']],
          [/ wv\).+(chrome)\/([\w\.]+)/i],
          [[m, L + ' WebView'], b],
          [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
          [b, [m, 'Android ' + F]],
          [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
          [m, b],
          [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
          [b, [m, 'Mobile Safari']],
          [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
          [b, m],
          [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
          [m, [b, ae, fe]],
          [/(webkit|khtml)\/([\w\.]+)/i],
          [m, b],
          [/(navigator|netscape\d?)\/([-\w\.]+)/i],
          [[m, 'Netscape'], b],
          [/mobile vr; rv:([\w\.]+)\).+firefox/i],
          [b, [m, C + ' Reality']],
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
          [m, b],
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
          [d, [u, H], [p, f]],
          [
            /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
            /samsung[- ]([-\w]+)/i,
            /sec-(sgh\w+)/i,
          ],
          [d, [u, H], [p, h]],
          [/\((ip(?:hone|od)[\w ]*);/i],
          [d, [u, I], [p, h]],
          [
            /\((ipad);[-\w\),; ]+apple/i,
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
          ],
          [d, [u, I], [p, f]],
          [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
          [d, [u, E], [p, f]],
          [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i,
          ],
          [d, [u, E], [p, h]],
          [
            /\b(poco[\w ]+)(?: bui|\))/i,
            /\b; (\w+) build\/hm\1/i,
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
          ],
          [
            [d, /_/g, ' '],
            [u, J],
            [p, h],
          ],
          [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
          [
            [d, /_/g, ' '],
            [u, J],
            [p, f],
          ],
          [
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
          ],
          [d, [u, 'OPPO'], [p, h]],
          [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
          [d, [u, 'Vivo'], [p, h]],
          [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
          [d, [u, 'Realme'], [p, h]],
          [
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
          ],
          [d, [u, z], [p, h]],
          [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
          [d, [u, z], [p, f]],
          [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
          [d, [u, T], [p, f]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i,
          ],
          [d, [u, T], [p, h]],
          [
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
          ],
          [d, [u, 'Lenovo'], [p, f]],
          [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
          [
            [d, /_/g, ' '],
            [u, 'Nokia'],
            [p, h],
          ],
          [/(pixel c)\b/i],
          [d, [u, S], [p, f]],
          [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
          [d, [u, S], [p, h]],
          [
            /droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
          ],
          [d, [u, G], [p, h]],
          [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
          [
            [d, 'Xperia Tablet'],
            [u, G],
            [p, f],
          ],
          [
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
          ],
          [d, [u, 'OnePlus'], [p, h]],
          [
            /(alexa)webm/i,
            /(kf[a-z]{2}wi)( bui|\))/i,
            /(kf[a-z]+)( bui|\)).+silk\//i,
          ],
          [d, [u, M], [p, f]],
          [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
          [
            [d, /(.+)/g, 'Fire Phone $1'],
            [u, M],
            [p, h],
          ],
          [/(playbook);[-\w\),; ]+(rim)/i],
          [d, u, [p, f]],
          [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
          [d, [u, V], [p, h]],
          [
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
          ],
          [d, [u, A], [p, f]],
          [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
          [d, [u, A], [p, h]],
          [/(nexus 9)/i],
          [d, [u, 'HTC'], [p, f]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i,
          ],
          [u, [d, /_/g, ' '], [p, h]],
          [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
          [d, [u, 'Acer'], [p, f]],
          [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
          [d, [u, 'Meizu'], [p, h]],
          [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
          [d, [u, 'Sharp'], [p, h]],
          [
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
            /(hp) ([\w ]+\w)/i,
            /(asus)-?(\w+)/i,
            /(microsoft); (lumia[\w ]+)/i,
            /(lenovo)[-_ ]?([-\w]+)/i,
            /(jolla)/i,
            /(oppo) ?([\w ]+) bui/i,
          ],
          [u, d, [p, h]],
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
          [u, d, [p, f]],
          [/(surface duo)/i],
          [d, [u, R], [p, f]],
          [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
          [d, [u, 'Fairphone'], [p, h]],
          [/(u304aa)/i],
          [d, [u, 'AT&T'], [p, h]],
          [/\bsie-(\w*)/i],
          [d, [u, 'Siemens'], [p, h]],
          [/\b(rct\w+) b/i],
          [d, [u, 'RCA'], [p, f]],
          [/\b(venue[\d ]{2,7}) b/i],
          [d, [u, 'Dell'], [p, f]],
          [/\b(q(?:mv|ta)\w+) b/i],
          [d, [u, 'Verizon'], [p, f]],
          [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
          [d, [u, 'Barnes & Noble'], [p, f]],
          [/\b(tm\d{3}\w+) b/i],
          [d, [u, 'NuVision'], [p, f]],
          [/\b(k88) b/i],
          [d, [u, 'ZTE'], [p, f]],
          [/\b(nx\d{3}j) b/i],
          [d, [u, 'ZTE'], [p, h]],
          [/\b(gen\d{3}) b.+49h/i],
          [d, [u, 'Swiss'], [p, h]],
          [/\b(zur\d{3}) b/i],
          [d, [u, 'Swiss'], [p, f]],
          [/\b((zeki)?tb.*\b) b/i],
          [d, [u, 'Zeki'], [p, f]],
          [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
          [[u, 'Dragon Touch'], d, [p, f]],
          [/\b(ns-?\w{0,9}) b/i],
          [d, [u, 'Insignia'], [p, f]],
          [/\b((nxa|next)-?\w{0,9}) b/i],
          [d, [u, 'NextBook'], [p, f]],
          [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
          [[u, 'Voice'], d, [p, h]],
          [/\b(lvtel\-)?(v1[12]) b/i],
          [[u, 'LvTel'], d, [p, h]],
          [/\b(ph-1) /i],
          [d, [u, 'Essential'], [p, h]],
          [/\b(v(100md|700na|7011|917g).*\b) b/i],
          [d, [u, 'Envizen'], [p, f]],
          [/\b(trio[-\w\. ]+) b/i],
          [d, [u, 'MachSpeed'], [p, f]],
          [/\btu_(1491) b/i],
          [d, [u, 'Rotor'], [p, f]],
          [/(shield[\w ]+) b/i],
          [d, [u, 'Nvidia'], [p, f]],
          [/(sprint) (\w+)/i],
          [u, d, [p, h]],
          [/(kin\.[onetw]{3})/i],
          [
            [d, /\./g, ' '],
            [u, R],
            [p, h],
          ],
          [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
          [d, [u, Z], [p, f]],
          [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
          [d, [u, Z], [p, h]],
          [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
          [u, d, [p, a]],
          [/droid.+; (shield) bui/i],
          [d, [u, 'Nvidia'], [p, a]],
          [/(playstation [345portablevi]+)/i],
          [d, [u, G], [p, a]],
          [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
          [d, [u, R], [p, a]],
          [/smart-tv.+(samsung)/i],
          [u, [p, v]],
          [/hbbtv.+maple;(\d+)/i],
          [
            [d, /^/, 'SmartTV'],
            [u, H],
            [p, v],
          ],
          [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
          [
            [u, T],
            [p, v],
          ],
          [/(apple) ?tv/i],
          [u, [d, I + ' TV'], [p, v]],
          [/crkey/i],
          [
            [d, L + 'cast'],
            [u, S],
            [p, v],
          ],
          [/droid.+aft(\w)( bui|\))/i],
          [d, [u, M], [p, v]],
          [/\(dtv[\);].+(aquos)/i],
          [d, [u, 'Sharp'], [p, v]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i,
          ],
          [
            [u, O],
            [d, O],
            [p, v],
          ],
          [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
          [[p, v]],
          [/((pebble))app/i],
          [u, d, [p, k]],
          [/droid.+; (glass) \d/i],
          [d, [u, S], [p, k]],
          [/droid.+; (wt63?0{2,3})\)/i],
          [d, [u, Z], [p, k]],
          [/(quest( 2)?)/i],
          [d, [u, Q], [p, k]],
          [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
          [u, [p, x]],
          [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
          [d, [p, h]],
          [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
          [d, [p, f]],
          [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
          [[p, f]],
          [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
          [[p, h]],
          [/(android[-\w\. ]{0,9});.+buil/i],
          [d, [u, 'Generic']],
        ],
        engine: [
          [/windows.+ edge\/([\w\.]+)/i],
          [b, [m, D + 'HTML']],
          [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
          [b, [m, 'Blink']],
          [
            /(presto)\/([\w\.]+)/i,
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
            /ekioh(flow)\/([\w\.]+)/i,
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
          ],
          [m, b],
          [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
          [b, m],
        ],
        os: [
          [/microsoft (windows) (vista|xp)/i],
          [m, b],
          [
            /(windows) nt 6\.2; (arm)/i,
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
          ],
          [m, [b, ae, le]],
          [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
          [
            [m, 'Windows'],
            [b, ae, le],
          ],
          [
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
            /cfnetwork\/.+darwin/i,
          ],
          [
            [b, /_/g, '.'],
            [m, 'iOS'],
          ],
          [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
          [
            [m, 'Mac OS'],
            [b, /_/g, '.'],
          ],
          [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
          [b, m],
          [
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,
            /(tizen|kaios)[\/ ]([\w\.]+)/i,
            /\((series40);/i,
          ],
          [m, b],
          [/\(bb(10);/i],
          [b, [m, V]],
          [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
          [b, [m, 'Symbian']],
          [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
          ],
          [b, [m, C + ' OS']],
          [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
          [b, [m, 'webOS']],
          [/crkey\/([\d\.]+)/i],
          [b, [m, L + 'cast']],
          [/(cros) [\w]+ ([\w\.]+\w)/i],
          [[m, 'Chromium OS'], b],
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
          [m, b],
          [/(sunos) ?([\w\.\d]*)/i],
          [[m, 'Solaris'], b],
          [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
            /(unix) ?([\w\.]*)/i,
          ],
          [m, b],
        ],
      },
      $ = function (q, W) {
        if ((typeof q === _ && ((W = q), (q = i)), !(this instanceof $)))
          return new $(q, W).getResult();
        var N =
            q ||
            (typeof r !== g && r.navigator && r.navigator.userAgent
              ? r.navigator.userAgent
              : n),
          U = W ? ee(oe, W) : oe;
        return (
          (this.getBrowser = function () {
            var j = {};
            return (
              (j[m] = i),
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
              (j[u] = i), (j[d] = i), (j[p] = i), X.call(j, N, U.device), j
            );
          }),
          (this.getEngine = function () {
            var j = {};
            return (j[m] = i), (j[b] = i), X.call(j, N, U.engine), j;
          }),
          (this.getOS = function () {
            var j = {};
            return (j[m] = i), (j[b] = i), X.call(j, N, U.os), j;
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
            return (N = typeof j === w && j.length > P ? O(j, P) : j), this;
          }),
          this.setUA(N),
          this
        );
      };
    ($.VERSION = s),
      ($.BROWSER = te([m, b, y])),
      ($.CPU = te([l])),
      ($.DEVICE = te([d, u, p, a, h, v, f, k, x])),
      ($.ENGINE = $.OS = te([m, b])),
      e.exports && (t = e.exports = $),
      (t.UAParser = $);
    var ne = typeof r !== g && (r.jQuery || r.Zepto);
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
var index_svelte_svelte_type_style_lang$7 = '',
  index_svelte_svelte_type_style_lang$6 = '',
  Scroller_svelte_svelte_type_style_lang = '';
const { window: window_1 } = globals,
  get_foreground_slot_changes = (e) => ({}),
  get_foreground_slot_context = (e) => ({}),
  get_background_slot_changes = (e) => ({}),
  get_background_slot_context = (e) => ({});
function create_fragment$2(e) {
  let t, r, i, s, n, o, c, g, _;
  add_render_callback(e[21]);
  const w = e[20].background,
    y = create_slot(w, e, e[19], get_background_slot_context),
    d = e[20].foreground,
    m = create_slot(d, e, e[19], get_foreground_slot_context);
  return {
    c() {
      (t = element('svelte-scroller-outer')),
        (r = element('svelte-scroller-background-container')),
        (i = element('svelte-scroller-background')),
        y && y.c(),
        (n = space()),
        (o = element('svelte-scroller-foreground')),
        m && m.c(),
        this.h();
    },
    l(p) {
      t = claim_element(p, 'SVELTE-SCROLLER-OUTER', { class: !0 });
      var u = children(t);
      r = claim_element(u, 'SVELTE-SCROLLER-BACKGROUND-CONTAINER', {
        class: !0,
        style: !0,
      });
      var b = children(r);
      i = claim_element(b, 'SVELTE-SCROLLER-BACKGROUND', { class: !0 });
      var l = children(i);
      y && y.l(l),
        l.forEach(detach),
        b.forEach(detach),
        (n = claim_space(u)),
        (o = claim_element(u, 'SVELTE-SCROLLER-FOREGROUND', { class: !0 }));
      var a = children(o);
      m && m.l(a), a.forEach(detach), u.forEach(detach), this.h();
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
    m(p, u) {
      insert_hydration(p, t, u),
        append_hydration(t, r),
        append_hydration(r, i),
        y && y.m(i, null),
        e[22](i),
        append_hydration(t, n),
        append_hydration(t, o),
        m && m.m(o, null),
        e[23](o),
        e[24](t),
        (c = !0),
        g || ((_ = listen(window_1, 'resize', e[21])), (g = !0));
    },
    p(p, u) {
      y &&
        y.p &&
        (!c || u[0] & 524288) &&
        update_slot_base(
          y,
          w,
          p,
          p[19],
          c
            ? get_slot_changes(w, p[19], u, get_background_slot_changes)
            : get_all_dirty_from_scope(p[19]),
          get_background_slot_context
        ),
        (!c || (u[0] & 48 && s !== (s = '' + (p[5] + p[4])))) &&
          set_custom_element_data(r, 'style', s),
        m &&
          m.p &&
          (!c || u[0] & 524288) &&
          update_slot_base(
            m,
            d,
            p,
            p[19],
            c
              ? get_slot_changes(d, p[19], u, get_foreground_slot_changes)
              : get_all_dirty_from_scope(p[19]),
            get_foreground_slot_context
          );
    },
    i(p) {
      c || (transition_in(y, p), transition_in(m, p), (c = !0));
    },
    o(p) {
      transition_out(y, p), transition_out(m, p), (c = !1);
    },
    d(p) {
      p && detach(t),
        y && y.d(p),
        e[22](null),
        m && m.d(p),
        e[23](null),
        e[24](null),
        (g = !1),
        _();
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
function instance$2(e, t, r) {
  let i,
    s,
    n,
    o,
    c,
    { $$slots: g = {}, $$scope: _ } = t,
    { top: w = 0 } = t,
    { bottom: y = 1 } = t,
    { threshold: d = 0.5 } = t,
    { query: m = 'section' } = t,
    { parallax: p = !1 } = t,
    { index: u = 0 } = t,
    { count: b = 0 } = t,
    { offset: l = 0 } = t,
    { progress: a = 0 } = t,
    { visible: h = !1 } = t,
    f,
    v,
    k,
    x,
    P,
    M = 0,
    I,
    A = 0,
    V = 1;
  onMount(() => {
    (P = v.querySelectorAll(m)), r(7, (b = P.length)), F();
    const E = { outer: f, update: F };
    return manager.add(E), () => manager.remove(E);
  });
  function F() {
    if (!v) return;
    const E = f.getBoundingClientRect();
    (x = E.left), r(18, (V = E.right - x));
    const T = v.getBoundingClientRect(),
      R = k.getBoundingClientRect();
    r(10, (h = T.top < M && T.bottom > 0));
    const z = T.bottom - T.top,
      B = R.bottom - R.top,
      H = s - i;
    r(9, (a = (i - T.top) / (z - H))),
      a <= 0
        ? (r(17, (A = 0)), r(16, (I = !1)))
        : a >= 1
        ? (r(17, (A = p ? z - B : z - H)), r(16, (I = !1)))
        : (r(17, (A = p ? Math.round(i - a * (B - H)) : i)), r(16, (I = !0)));
    for (let G = 0; G < P.length; G++) {
      const J = P[G],
        { top: Z } = J.getBoundingClientRect(),
        Q = P[G + 1],
        ee = Q ? Q.getBoundingClientRect().top : T.bottom;
      if ((r(8, (l = (n - Z) / (ee - Z))), ee >= n)) {
        r(6, (u = G));
        break;
      }
    }
  }
  function L() {
    r(0, (M = window_1.innerHeight));
  }
  function D(E) {
    binding_callbacks[E ? 'unshift' : 'push'](() => {
      (k = E), r(3, k);
    });
  }
  function C(E) {
    binding_callbacks[E ? 'unshift' : 'push'](() => {
      (v = E), r(2, v);
    });
  }
  function S(E) {
    binding_callbacks[E ? 'unshift' : 'push'](() => {
      (f = E), r(1, f);
    });
  }
  return (
    (e.$$set = (E) => {
      'top' in E && r(11, (w = E.top)),
        'bottom' in E && r(12, (y = E.bottom)),
        'threshold' in E && r(13, (d = E.threshold)),
        'query' in E && r(14, (m = E.query)),
        'parallax' in E && r(15, (p = E.parallax)),
        'index' in E && r(6, (u = E.index)),
        'count' in E && r(7, (b = E.count)),
        'offset' in E && r(8, (l = E.offset)),
        'progress' in E && r(9, (a = E.progress)),
        'visible' in E && r(10, (h = E.visible)),
        '$$scope' in E && r(19, (_ = E.$$scope));
    }),
    (e.$$.update = () => {
      e.$$.dirty[0] & 2049 && (i = Math.round(w * M)),
        e.$$.dirty[0] & 4097 && (s = Math.round(y * M)),
        e.$$.dirty[0] & 8193 && (n = Math.round(d * M)),
        e.$$.dirty[0] & 47104 && F(),
        e.$$.dirty[0] & 196608 &&
          r(
            5,
            (o = `
		position: ${I ? 'fixed' : 'absolute'};
		top: 0;
		transform: translate(0, ${A}px);
		z-index: ${1};
	`)
          ),
        e.$$.dirty[0] & 327680 && r(4, (c = I ? `width:${V}px;` : ''));
    }),
    [M, f, v, k, c, o, u, b, l, a, h, w, y, d, m, p, I, A, V, _, g, L, D, C, S]
  );
}
class Scroller extends SvelteComponent {
  constructor(t) {
    super(),
      init(
        this,
        t,
        instance$2,
        create_fragment$2,
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
var Background_svelte_svelte_type_style_lang = '',
  Foreground_svelte_svelte_type_style_lang$1 = '',
  Foreground_svelte_svelte_type_style_lang = '',
  index_svelte_svelte_type_style_lang$5 = '',
  lottie = { exports: {} };
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
        var i, s, n, o, c, g, _, w;
        switch (
          ((o = Math.floor(e * 6)),
          (c = e * 6 - o),
          (g = r * (1 - t)),
          (_ = r * (1 - c * t)),
          (w = r * (1 - (1 - c) * t)),
          o % 6)
        ) {
          case 0:
            (i = r), (s = w), (n = g);
            break;
          case 1:
            (i = _), (s = r), (n = g);
            break;
          case 2:
            (i = g), (s = r), (n = w);
            break;
          case 3:
            (i = g), (s = _), (n = r);
            break;
          case 4:
            (i = w), (s = g), (n = r);
            break;
          case 5:
            (i = r), (s = g), (n = _);
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
          g = i / 255;
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
        return [o, c, g];
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
            T = t(S);
          return this._t(E, -T, 0, 0, T, E, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function o(S) {
          if (S === 0) return this;
          var E = e(S),
            T = t(S);
          return this._t(1, 0, 0, 0, 0, E, -T, 0, 0, T, E, 0, 0, 0, 0, 1);
        }
        function c(S) {
          if (S === 0) return this;
          var E = e(S),
            T = t(S);
          return this._t(E, 0, T, 0, 0, 1, 0, 0, -T, 0, E, 0, 0, 0, 0, 1);
        }
        function g(S) {
          if (S === 0) return this;
          var E = e(S),
            T = t(S);
          return this._t(E, -T, 0, 0, T, E, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function _(S, E) {
          return this._t(1, E, S, 1, 0, 0);
        }
        function w(S, E) {
          return this.shear(r(S), r(E));
        }
        function y(S, E) {
          var T = e(E),
            R = t(E);
          return this._t(T, R, 0, 0, -R, T, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            ._t(1, 0, 0, 0, r(S), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            ._t(T, -R, 0, 0, R, T, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function d(S, E, T) {
          return (
            !T && T !== 0 && (T = 1),
            S === 1 && E === 1 && T === 1
              ? this
              : this._t(S, 0, 0, 0, 0, E, 0, 0, 0, 0, T, 0, 0, 0, 0, 1)
          );
        }
        function m(S, E, T, R, z, B, H, G, J, Z, Q, ee, te, re, K, se) {
          return (
            (this.props[0] = S),
            (this.props[1] = E),
            (this.props[2] = T),
            (this.props[3] = R),
            (this.props[4] = z),
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
        function p(S, E, T) {
          return (
            (T = T || 0),
            S !== 0 || E !== 0 || T !== 0
              ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, S, E, T, 1)
              : this
          );
        }
        function u(S, E, T, R, z, B, H, G, J, Z, Q, ee, te, re, K, se) {
          var O = this.props;
          if (
            S === 1 &&
            E === 0 &&
            T === 0 &&
            R === 0 &&
            z === 0 &&
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
            pe = O[15];
          return (
            (O[0] = X * S + ae * z + fe * J + le * te),
            (O[1] = X * E + ae * B + fe * Z + le * re),
            (O[2] = X * T + ae * H + fe * Q + le * K),
            (O[3] = X * R + ae * G + fe * ee + le * se),
            (O[4] = oe * S + $ * z + ne * J + ie * te),
            (O[5] = oe * E + $ * B + ne * Z + ie * re),
            (O[6] = oe * T + $ * H + ne * Q + ie * K),
            (O[7] = oe * R + $ * G + ne * ee + ie * se),
            (O[8] = q * S + W * z + N * J + U * te),
            (O[9] = q * E + W * B + N * Z + U * re),
            (O[10] = q * T + W * H + N * Q + U * K),
            (O[11] = q * R + W * G + N * ee + U * se),
            (O[12] = j * S + he * z + Y * J + pe * te),
            (O[13] = j * E + he * B + Y * Z + pe * re),
            (O[14] = j * T + he * H + Y * Q + pe * K),
            (O[15] = j * R + he * G + Y * ee + pe * se),
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
        function f(S, E, T) {
          return {
            x:
              S * this.props[0] +
              E * this.props[4] +
              T * this.props[8] +
              this.props[12],
            y:
              S * this.props[1] +
              E * this.props[5] +
              T * this.props[9] +
              this.props[13],
            z:
              S * this.props[2] +
              E * this.props[6] +
              T * this.props[10] +
              this.props[14],
          };
        }
        function v(S, E, T) {
          return (
            S * this.props[0] +
            E * this.props[4] +
            T * this.props[8] +
            this.props[12]
          );
        }
        function k(S, E, T) {
          return (
            S * this.props[1] +
            E * this.props[5] +
            T * this.props[9] +
            this.props[13]
          );
        }
        function x(S, E, T) {
          return (
            S * this.props[2] +
            E * this.props[6] +
            T * this.props[10] +
            this.props[14]
          );
        }
        function P() {
          var S = this.props[0] * this.props[5] - this.props[1] * this.props[4],
            E = this.props[5] / S,
            T = -this.props[1] / S,
            R = -this.props[4] / S,
            z = this.props[0] / S,
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
            (G.props[1] = T),
            (G.props[4] = R),
            (G.props[5] = z),
            (G.props[12] = B),
            (G.props[13] = H),
            G
          );
        }
        function M(S) {
          var E = this.getInverseMatrix();
          return E.applyToPointArray(S[0], S[1], S[2] || 0);
        }
        function I(S) {
          var E,
            T = S.length,
            R = [];
          for (E = 0; E < T; E += 1) R[E] = M(S[E]);
          return R;
        }
        function A(S, E, T) {
          var R = createTypedArray('float32', 6);
          if (this.isIdentity())
            (R[0] = S[0]),
              (R[1] = S[1]),
              (R[2] = E[0]),
              (R[3] = E[1]),
              (R[4] = T[0]),
              (R[5] = T[1]);
          else {
            var z = this.props[0],
              B = this.props[1],
              H = this.props[4],
              G = this.props[5],
              J = this.props[12],
              Z = this.props[13];
            (R[0] = S[0] * z + S[1] * H + J),
              (R[1] = S[0] * B + S[1] * G + Z),
              (R[2] = E[0] * z + E[1] * H + J),
              (R[3] = E[0] * B + E[1] * G + Z),
              (R[4] = T[0] * z + T[1] * H + J),
              (R[5] = T[0] * B + T[1] * G + Z);
          }
          return R;
        }
        function V(S, E, T) {
          var R;
          return (
            this.isIdentity()
              ? (R = [S, E, T])
              : (R = [
                  S * this.props[0] +
                    E * this.props[4] +
                    T * this.props[8] +
                    this.props[12],
                  S * this.props[1] +
                    E * this.props[5] +
                    T * this.props[9] +
                    this.props[13],
                  S * this.props[2] +
                    E * this.props[6] +
                    T * this.props[10] +
                    this.props[14],
                ]),
            R
          );
        }
        function F(S, E) {
          if (this.isIdentity()) return S + ',' + E;
          var T = this.props;
          return (
            Math.round((S * T[0] + E * T[4] + T[12]) * 100) / 100 +
            ',' +
            Math.round((S * T[1] + E * T[5] + T[13]) * 100) / 100
          );
        }
        function L() {
          for (var S = 0, E = this.props, T = 'matrix3d(', R = 1e4; S < 16; )
            (T += i(E[S] * R) / R), (T += S === 15 ? ')' : ','), (S += 1);
          return T;
        }
        function D(S) {
          var E = 1e4;
          return (S < 1e-6 && S > 0) || (S > -1e-6 && S < 0) ? i(S * E) / E : S;
        }
        function C() {
          var S = this.props,
            E = D(S[0]),
            T = D(S[1]),
            R = D(S[4]),
            z = D(S[5]),
            B = D(S[12]),
            H = D(S[13]);
          return (
            'matrix(' +
            E +
            ',' +
            T +
            ',' +
            R +
            ',' +
            z +
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
            (this.rotateZ = g),
            (this.skew = w),
            (this.skewFromAxis = y),
            (this.shear = _),
            (this.scale = d),
            (this.setTransform = m),
            (this.translate = p),
            (this.transform = u),
            (this.applyToPoint = f),
            (this.applyToX = v),
            (this.applyToY = k),
            (this.applyToZ = x),
            (this.applyToPointArray = V),
            (this.applyToTriplePoints = A),
            (this.applyToPointStringified = F),
            (this.toCSS = L),
            (this.to2dCSS = C),
            (this.clone = a),
            (this.cloneFromProps = h),
            (this.equals = l),
            (this.inversePoints = I),
            (this.inversePoint = M),
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
          g = t.pow(2, n),
          _ = g * 2,
          w = i - 1,
          y;
        function d(h, f, v) {
          var k = [];
          f = f === !0 ? { entropy: !0 } : f || {};
          var x = b(u(f.entropy ? [h, a(e)] : h === null ? l() : h, 3), k),
            P = new m(k),
            M = function () {
              for (var I = P.g(s), A = c, V = 0; I < g; )
                (I = (I + V) * i), (A *= i), (V = P.g(1));
              for (; I >= _; ) (I /= 2), (A /= 2), (V >>>= 1);
              return (I + V) / A;
            };
          return (
            (M.int32 = function () {
              return P.g(4) | 0;
            }),
            (M.quick = function () {
              return P.g(4) / 4294967296;
            }),
            (M.double = M),
            b(a(P.S), e),
            (
              f.pass ||
              v ||
              function (I, A, V, F) {
                return (
                  F &&
                    (F.S && p(F, P),
                    (I.state = function () {
                      return p(P, {});
                    })),
                  V ? ((t[o] = I), A) : I
                );
              }
            )(M, x, 'global' in f ? f.global : this == t, f.state)
          );
        }
        t['seed' + o] = d;
        function m(h) {
          var f,
            v = h.length,
            k = this,
            x = 0,
            P = (k.i = k.j = 0),
            M = (k.S = []);
          for (v || (h = [v++]); x < i; ) M[x] = x++;
          for (x = 0; x < i; x++)
            (M[x] = M[(P = w & (P + h[x % v] + (f = M[x])))]), (M[P] = f);
          k.g = function (I) {
            for (var A, V = 0, F = k.i, L = k.j, D = k.S; I--; )
              (A = D[(F = w & (F + 1))]),
                (V =
                  V * i + D[w & ((D[F] = D[(L = w & (L + A))]) + (D[L] = A))]);
            return (k.i = F), (k.j = L), V;
          };
        }
        function p(h, f) {
          return (f.i = h.i), (f.j = h.j), (f.S = h.S.slice()), f;
        }
        function u(h, f) {
          var v = [],
            k = typeof h,
            x;
          if (f && k == 'object')
            for (x in h)
              try {
                v.push(u(h[x], f - 1));
              } catch (P) {}
          return v.length ? v : k == 'string' ? h : h + '\0';
        }
        function b(h, f) {
          for (var v = h + '', k, x = 0; x < v.length; )
            f[w & x] = w & ((k ^= f[w & x] * 19) + v.charCodeAt(x++));
          return a(f);
        }
        function l() {
          try {
            var h = new Uint8Array(i);
            return (r.crypto || r.msCrypto).getRandomValues(h), a(h);
          } catch (k) {
            var f = r.navigator,
              v = f && f.plugins;
            return [+new Date(), r, v, r.screen, a(e)];
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
        function r(a, h, f, v, k) {
          var x =
            k || ('bez_' + a + '_' + h + '_' + f + '_' + v).replace(/\./g, 'p');
          if (t[x]) return t[x];
          var P = new l([a, h, f, v]);
          return (t[x] = P), P;
        }
        var i = 4,
          s = 0.001,
          n = 1e-7,
          o = 10,
          c = 11,
          g = 1 / (c - 1),
          _ = typeof Float32Array == 'function';
        function w(a, h) {
          return 1 - 3 * h + 3 * a;
        }
        function y(a, h) {
          return 3 * h - 6 * a;
        }
        function d(a) {
          return 3 * a;
        }
        function m(a, h, f) {
          return ((w(h, f) * a + y(h, f)) * a + d(h)) * a;
        }
        function p(a, h, f) {
          return 3 * w(h, f) * a * a + 2 * y(h, f) * a + d(h);
        }
        function u(a, h, f, v, k) {
          var x,
            P,
            M = 0;
          do
            (P = h + (f - h) / 2),
              (x = m(P, v, k) - a),
              x > 0 ? (f = P) : (h = P);
          while (Math.abs(x) > n && ++M < o);
          return P;
        }
        function b(a, h, f, v) {
          for (var k = 0; k < i; ++k) {
            var x = p(h, f, v);
            if (x === 0) return h;
            var P = m(h, f, v) - a;
            h -= P / x;
          }
          return h;
        }
        function l(a) {
          (this._p = a),
            (this._mSampleValues = _ ? new Float32Array(c) : new Array(c)),
            (this._precomputed = !1),
            (this.get = this.get.bind(this));
        }
        return (
          (l.prototype = {
            get: function (a) {
              var h = this._p[0],
                f = this._p[1],
                v = this._p[2],
                k = this._p[3];
              return (
                this._precomputed || this._precompute(),
                h === f && v === k
                  ? a
                  : a === 0
                  ? 0
                  : a === 1
                  ? 1
                  : m(this._getTForX(a), f, k)
              );
            },
            _precompute: function () {
              var a = this._p[0],
                h = this._p[1],
                f = this._p[2],
                v = this._p[3];
              (this._precomputed = !0),
                (a !== h || f !== v) && this._calcSampleValues();
            },
            _calcSampleValues: function () {
              for (var a = this._p[0], h = this._p[2], f = 0; f < c; ++f)
                this._mSampleValues[f] = m(f * g, a, h);
            },
            _getTForX: function (a) {
              for (
                var h = this._p[0],
                  f = this._p[2],
                  v = this._mSampleValues,
                  k = 0,
                  x = 1,
                  P = c - 1;
                x !== P && v[x] <= a;
                ++x
              )
                k += g;
              --x;
              var M = (a - v[x]) / (v[x + 1] - v[x]),
                I = k + M * g,
                A = p(I, h, f);
              return A >= s
                ? b(a, I, h, f)
                : A === 0
                ? I
                : u(a, k, k + g, h, f);
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
        function t(d, m, p, u, b, l) {
          var a = d * u + m * b + p * l - b * u - l * d - p * m;
          return a > -0.001 && a < 0.001;
        }
        function r(d, m, p, u, b, l, a, h, f) {
          if (p === 0 && l === 0 && f === 0) return t(d, m, u, b, a, h);
          var v = e.sqrt(e.pow(u - d, 2) + e.pow(b - m, 2) + e.pow(l - p, 2)),
            k = e.sqrt(e.pow(a - d, 2) + e.pow(h - m, 2) + e.pow(f - p, 2)),
            x = e.sqrt(e.pow(a - u, 2) + e.pow(h - b, 2) + e.pow(f - l, 2)),
            P;
          return (
            v > k
              ? v > x
                ? (P = v - k - x)
                : (P = x - k - v)
              : x > k
              ? (P = x - k - v)
              : (P = k - v - x),
            P > -1e-4 && P < 1e-4
          );
        }
        var i = (function () {
          return function (d, m, p, u) {
            var b = defaultCurveSegments,
              l,
              a,
              h,
              f,
              v,
              k = 0,
              x,
              P = [],
              M = [],
              I = bezierLengthPool.newElement();
            for (h = p.length, l = 0; l < b; l += 1) {
              for (v = l / (b - 1), x = 0, a = 0; a < h; a += 1)
                (f =
                  bmPow(1 - v, 3) * d[a] +
                  3 * bmPow(1 - v, 2) * v * p[a] +
                  3 * (1 - v) * bmPow(v, 2) * u[a] +
                  bmPow(v, 3) * m[a]),
                  (P[a] = f),
                  M[a] !== null && (x += bmPow(P[a] - M[a], 2)),
                  (M[a] = P[a]);
              x && ((x = bmSqrt(x)), (k += x)),
                (I.percents[l] = v),
                (I.lengths[l] = k);
            }
            return (I.addedLength = k), I;
          };
        })();
        function s(d) {
          var m = segmentsLengthPool.newElement(),
            p = d.c,
            u = d.v,
            b = d.o,
            l = d.i,
            a,
            h = d._length,
            f = m.lengths,
            v = 0;
          for (a = 0; a < h - 1; a += 1)
            (f[a] = i(u[a], u[a + 1], b[a], l[a + 1])), (v += f[a].addedLength);
          return (
            p &&
              h &&
              ((f[a] = i(u[a], u[0], b[a], l[0])), (v += f[a].addedLength)),
            (m.totalLength = v),
            m
          );
        }
        function n(d) {
          (this.segmentLength = 0), (this.points = new Array(d));
        }
        function o(d, m) {
          (this.partialLength = d), (this.point = m);
        }
        var c = (function () {
          var d = {};
          return function (m, p, u, b) {
            var l = (
              m[0] +
              '_' +
              m[1] +
              '_' +
              p[0] +
              '_' +
              p[1] +
              '_' +
              u[0] +
              '_' +
              u[1] +
              '_' +
              b[0] +
              '_' +
              b[1]
            ).replace(/\./g, 'p');
            if (!d[l]) {
              var a = defaultCurveSegments,
                h,
                f,
                v,
                k,
                x,
                P = 0,
                M,
                I,
                A = null;
              m.length === 2 &&
                (m[0] !== p[0] || m[1] !== p[1]) &&
                t(m[0], m[1], p[0], p[1], m[0] + u[0], m[1] + u[1]) &&
                t(m[0], m[1], p[0], p[1], p[0] + b[0], p[1] + b[1]) &&
                (a = 2);
              var V = new n(a);
              for (v = u.length, h = 0; h < a; h += 1) {
                for (
                  I = createSizedArray(v), x = h / (a - 1), M = 0, f = 0;
                  f < v;
                  f += 1
                )
                  (k =
                    bmPow(1 - x, 3) * m[f] +
                    3 * bmPow(1 - x, 2) * x * (m[f] + u[f]) +
                    3 * (1 - x) * bmPow(x, 2) * (p[f] + b[f]) +
                    bmPow(x, 3) * p[f]),
                    (I[f] = k),
                    A !== null && (M += bmPow(I[f] - A[f], 2));
                (M = bmSqrt(M)), (P += M), (V.points[h] = new o(M, I)), (A = I);
              }
              (V.segmentLength = P), (d[l] = V);
            }
            return d[l];
          };
        })();
        function g(d, m) {
          var p = m.percents,
            u = m.lengths,
            b = p.length,
            l = bmFloor((b - 1) * d),
            a = d * m.addedLength,
            h = 0;
          if (l === b - 1 || l === 0 || a === u[l]) return p[l];
          for (var f = u[l] > a ? -1 : 1, v = !0; v; )
            if (
              (u[l] <= a && u[l + 1] > a
                ? ((h = (a - u[l]) / (u[l + 1] - u[l])), (v = !1))
                : (l += f),
              l < 0 || l >= b - 1)
            ) {
              if (l === b - 1) return p[l];
              v = !1;
            }
          return p[l] + (p[l + 1] - p[l]) * h;
        }
        function _(d, m, p, u, b, l) {
          var a = g(b, l),
            h = 1 - a,
            f =
              e.round(
                (h * h * h * d[0] +
                  (a * h * h + h * a * h + h * h * a) * p[0] +
                  (a * a * h + h * a * a + a * h * a) * u[0] +
                  a * a * a * m[0]) *
                  1e3
              ) / 1e3,
            v =
              e.round(
                (h * h * h * d[1] +
                  (a * h * h + h * a * h + h * h * a) * p[1] +
                  (a * a * h + h * a * a + a * h * a) * u[1] +
                  a * a * a * m[1]) *
                  1e3
              ) / 1e3;
          return [f, v];
        }
        var w = createTypedArray('float32', 8);
        function y(d, m, p, u, b, l, a) {
          b < 0 ? (b = 0) : b > 1 && (b = 1);
          var h = g(b, a);
          l = l > 1 ? 1 : l;
          var f = g(l, a),
            v,
            k = d.length,
            x = 1 - h,
            P = 1 - f,
            M = x * x * x,
            I = h * x * x * 3,
            A = h * h * x * 3,
            V = h * h * h,
            F = x * x * P,
            L = h * x * P + x * h * P + x * x * f,
            D = h * h * P + x * h * f + h * x * f,
            C = h * h * f,
            S = x * P * P,
            E = h * P * P + x * f * P + x * P * f,
            T = h * f * P + x * f * f + h * P * f,
            R = h * f * f,
            z = P * P * P,
            B = f * P * P + P * f * P + P * P * f,
            H = f * f * P + P * f * f + f * P * f,
            G = f * f * f;
          for (v = 0; v < k; v += 1)
            (w[v * 4] =
              e.round((M * d[v] + I * p[v] + A * u[v] + V * m[v]) * 1e3) / 1e3),
              (w[v * 4 + 1] =
                e.round((F * d[v] + L * p[v] + D * u[v] + C * m[v]) * 1e3) /
                1e3),
              (w[v * 4 + 2] =
                e.round((S * d[v] + E * p[v] + T * u[v] + R * m[v]) * 1e3) /
                1e3),
              (w[v * 4 + 3] =
                e.round((z * d[v] + B * p[v] + H * u[v] + G * m[v]) * 1e3) /
                1e3);
          return w;
        }
        return {
          getSegmentsLength: s,
          getNewSegment: y,
          getPointInSegment: _,
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
              postMessage: function (d) {
                r({ data: d });
              },
            },
            n = {
              postMessage: function (d) {
                s.onmessage({ data: d });
              },
            };
          function o(d) {
            if (window.Worker && window.Blob && _useWebWorker) {
              var m = new Blob(
                  ['var _workerSelf = self; self.onmessage = ', d.toString()],
                  { type: 'text/javascript' }
                ),
                p = URL.createObjectURL(m);
              return new Worker(p);
            }
            return (r = d), s;
          }
          function c() {
            i ||
              ((i = o(function (m) {
                function p() {
                  function b(F, L) {
                    var D,
                      C,
                      S = F.length,
                      E,
                      T,
                      R,
                      z;
                    for (C = 0; C < S; C += 1)
                      if (((D = F[C]), 'ks' in D && !D.completed)) {
                        if (
                          ((D.completed = !0),
                          D.tt && (F[C - 1].td = D.tt),
                          D.hasMask)
                        ) {
                          var B = D.masksProperties;
                          for (T = B.length, E = 0; E < T; E += 1)
                            if (B[E].pt.k.i) h(B[E].pt.k);
                            else
                              for (z = B[E].pt.k.length, R = 0; R < z; R += 1)
                                B[E].pt.k[R].s && h(B[E].pt.k[R].s[0]),
                                  B[E].pt.k[R].e && h(B[E].pt.k[R].e[0]);
                        }
                        D.ty === 0
                          ? ((D.layers = l(D.refId, L)), b(D.layers, L))
                          : D.ty === 4
                          ? a(D.shapes)
                          : D.ty === 5 && A(D);
                      }
                  }
                  function l(F, L) {
                    for (var D = 0, C = L.length; D < C; ) {
                      if (L[D].id === F)
                        return L[D].layers.__used
                          ? JSON.parse(JSON.stringify(L[D].layers))
                          : ((L[D].layers.__used = !0), L[D].layers);
                      D += 1;
                    }
                    return null;
                  }
                  function a(F) {
                    var L,
                      D = F.length,
                      C,
                      S;
                    for (L = D - 1; L >= 0; L -= 1)
                      if (F[L].ty === 'sh')
                        if (F[L].ks.k.i) h(F[L].ks.k);
                        else
                          for (S = F[L].ks.k.length, C = 0; C < S; C += 1)
                            F[L].ks.k[C].s && h(F[L].ks.k[C].s[0]),
                              F[L].ks.k[C].e && h(F[L].ks.k[C].e[0]);
                      else F[L].ty === 'gr' && a(F[L].it);
                  }
                  function h(F) {
                    var L,
                      D = F.i.length;
                    for (L = 0; L < D; L += 1)
                      (F.i[L][0] += F.v[L][0]),
                        (F.i[L][1] += F.v[L][1]),
                        (F.o[L][0] += F.v[L][0]),
                        (F.o[L][1] += F.v[L][1]);
                  }
                  function f(F, L) {
                    var D = L ? L.split('.') : [100, 100, 100];
                    return F[0] > D[0]
                      ? !0
                      : D[0] > F[0]
                      ? !1
                      : F[1] > D[1]
                      ? !0
                      : D[1] > F[1]
                      ? !1
                      : F[2] > D[2]
                      ? !0
                      : D[2] > F[2]
                      ? !1
                      : null;
                  }
                  var v = (function () {
                      var F = [4, 4, 14];
                      function L(C) {
                        var S = C.t.d;
                        C.t.d = { k: [{ s: S, t: 0 }] };
                      }
                      function D(C) {
                        var S,
                          E = C.length;
                        for (S = 0; S < E; S += 1) C[S].ty === 5 && L(C[S]);
                      }
                      return function (C) {
                        if (f(F, C.v) && (D(C.layers), C.assets)) {
                          var S,
                            E = C.assets.length;
                          for (S = 0; S < E; S += 1)
                            C.assets[S].layers && D(C.assets[S].layers);
                        }
                      };
                    })(),
                    k = (function () {
                      var F = [4, 7, 99];
                      return function (L) {
                        if (L.chars && !f(F, L.v)) {
                          var D,
                            C = L.chars.length,
                            S,
                            E,
                            T,
                            R;
                          for (D = 0; D < C; D += 1)
                            if (L.chars[D].data && L.chars[D].data.shapes)
                              for (
                                R = L.chars[D].data.shapes[0].it,
                                  E = R.length,
                                  S = 0;
                                S < E;
                                S += 1
                              )
                                (T = R[S].ks.k),
                                  T.__converted ||
                                    (h(R[S].ks.k), (T.__converted = !0));
                        }
                      };
                    })(),
                    x = (function () {
                      var F = [5, 7, 15];
                      function L(C) {
                        var S = C.t.p;
                        typeof S.a == 'number' && (S.a = { a: 0, k: S.a }),
                          typeof S.p == 'number' && (S.p = { a: 0, k: S.p }),
                          typeof S.r == 'number' && (S.r = { a: 0, k: S.r });
                      }
                      function D(C) {
                        var S,
                          E = C.length;
                        for (S = 0; S < E; S += 1) C[S].ty === 5 && L(C[S]);
                      }
                      return function (C) {
                        if (f(F, C.v) && (D(C.layers), C.assets)) {
                          var S,
                            E = C.assets.length;
                          for (S = 0; S < E; S += 1)
                            C.assets[S].layers && D(C.assets[S].layers);
                        }
                      };
                    })(),
                    P = (function () {
                      var F = [4, 1, 9];
                      function L(C) {
                        var S,
                          E = C.length,
                          T,
                          R;
                        for (S = 0; S < E; S += 1)
                          if (C[S].ty === 'gr') L(C[S].it);
                          else if (C[S].ty === 'fl' || C[S].ty === 'st')
                            if (C[S].c.k && C[S].c.k[0].i)
                              for (R = C[S].c.k.length, T = 0; T < R; T += 1)
                                C[S].c.k[T].s &&
                                  ((C[S].c.k[T].s[0] /= 255),
                                  (C[S].c.k[T].s[1] /= 255),
                                  (C[S].c.k[T].s[2] /= 255),
                                  (C[S].c.k[T].s[3] /= 255)),
                                  C[S].c.k[T].e &&
                                    ((C[S].c.k[T].e[0] /= 255),
                                    (C[S].c.k[T].e[1] /= 255),
                                    (C[S].c.k[T].e[2] /= 255),
                                    (C[S].c.k[T].e[3] /= 255));
                            else
                              (C[S].c.k[0] /= 255),
                                (C[S].c.k[1] /= 255),
                                (C[S].c.k[2] /= 255),
                                (C[S].c.k[3] /= 255);
                      }
                      function D(C) {
                        var S,
                          E = C.length;
                        for (S = 0; S < E; S += 1)
                          C[S].ty === 4 && L(C[S].shapes);
                      }
                      return function (C) {
                        if (f(F, C.v) && (D(C.layers), C.assets)) {
                          var S,
                            E = C.assets.length;
                          for (S = 0; S < E; S += 1)
                            C.assets[S].layers && D(C.assets[S].layers);
                        }
                      };
                    })(),
                    M = (function () {
                      var F = [4, 4, 18];
                      function L(C) {
                        var S,
                          E = C.length,
                          T,
                          R;
                        for (S = E - 1; S >= 0; S -= 1)
                          if (C[S].ty === 'sh')
                            if (C[S].ks.k.i) C[S].ks.k.c = C[S].closed;
                            else
                              for (R = C[S].ks.k.length, T = 0; T < R; T += 1)
                                C[S].ks.k[T].s &&
                                  (C[S].ks.k[T].s[0].c = C[S].closed),
                                  C[S].ks.k[T].e &&
                                    (C[S].ks.k[T].e[0].c = C[S].closed);
                          else C[S].ty === 'gr' && L(C[S].it);
                      }
                      function D(C) {
                        var S,
                          E,
                          T = C.length,
                          R,
                          z,
                          B,
                          H;
                        for (E = 0; E < T; E += 1) {
                          if (((S = C[E]), S.hasMask)) {
                            var G = S.masksProperties;
                            for (z = G.length, R = 0; R < z; R += 1)
                              if (G[R].pt.k.i) G[R].pt.k.c = G[R].cl;
                              else
                                for (H = G[R].pt.k.length, B = 0; B < H; B += 1)
                                  G[R].pt.k[B].s &&
                                    (G[R].pt.k[B].s[0].c = G[R].cl),
                                    G[R].pt.k[B].e &&
                                      (G[R].pt.k[B].e[0].c = G[R].cl);
                          }
                          S.ty === 4 && L(S.shapes);
                        }
                      }
                      return function (C) {
                        if (f(F, C.v) && (D(C.layers), C.assets)) {
                          var S,
                            E = C.assets.length;
                          for (S = 0; S < E; S += 1)
                            C.assets[S].layers && D(C.assets[S].layers);
                        }
                      };
                    })();
                  function I(F) {
                    F.__complete ||
                      (P(F),
                      v(F),
                      k(F),
                      x(F),
                      M(F),
                      b(F.layers, F.assets),
                      (F.__complete = !0));
                  }
                  function A(F) {
                    F.t.a.length === 0 &&
                      !('m' in F.t.p) &&
                      (F.singleShape = !0);
                  }
                  var V = {};
                  return (
                    (V.completeData = I),
                    (V.checkColors = P),
                    (V.checkChars = k),
                    (V.checkPathProperties = x),
                    (V.checkShapes = M),
                    (V.completeLayers = b),
                    V
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
                      function l(a, h, f, v) {
                        var k,
                          x = new XMLHttpRequest();
                        try {
                          x.responseType = 'json';
                        } catch (P) {}
                        x.onreadystatechange = function () {
                          if (x.readyState === 4)
                            if (x.status === 200) (k = b(x)), f(k);
                            else
                              try {
                                (k = b(x)), f(k);
                              } catch (P) {
                                v && v(P);
                              }
                        };
                        try {
                          x.open('GET', a, !0);
                        } catch (P) {
                          x.open('GET', h + '/' + a, !0);
                        }
                        x.send();
                      }
                      return { load: l };
                    })()),
                  m.data.type === 'loadAnimation')
                )
                  n.assetLoader.load(
                    m.data.path,
                    m.data.fullPath,
                    function (b) {
                      n.dataManager.completeData(b),
                        n.postMessage({
                          id: m.data.id,
                          payload: b,
                          status: 'success',
                        });
                    },
                    function () {
                      n.postMessage({ id: m.data.id, status: 'error' });
                    }
                  );
                else if (m.data.type === 'complete') {
                  var u = m.data.animation;
                  n.dataManager.completeData(u),
                    n.postMessage({
                      id: m.data.id,
                      payload: u,
                      status: 'success',
                    });
                } else
                  m.data.type === 'loadData' &&
                    n.assetLoader.load(
                      m.data.path,
                      m.data.fullPath,
                      function (b) {
                        n.postMessage({
                          id: m.data.id,
                          payload: b,
                          status: 'success',
                        });
                      },
                      function () {
                        n.postMessage({ id: m.data.id, status: 'error' });
                      }
                    );
              })),
              (i.onmessage = function (d) {
                var m = d.data,
                  p = m.id,
                  u = t[p];
                (t[p] = null),
                  m.status === 'success'
                    ? u.onComplete(m.payload)
                    : u.onError && u.onError();
              }));
          }
          function g(d, m) {
            e += 1;
            var p = 'processId_' + e;
            return (t[p] = { onComplete: d, onError: m }), p;
          }
          function _(d, m, p) {
            c();
            var u = g(m, p);
            i.postMessage({
              type: 'loadAnimation',
              path: d,
              fullPath: window.location.origin + window.location.pathname,
              id: u,
            });
          }
          function w(d, m, p) {
            c();
            var u = g(m, p);
            i.postMessage({
              type: 'loadData',
              path: d,
              fullPath: window.location.origin + window.location.pathname,
              id: u,
            });
          }
          function y(d, m, p) {
            c();
            var u = g(m, p);
            i.postMessage({ type: 'complete', animation: d, id: u });
          }
          return { loadAnimation: _, loadData: w, completeAnimation: y };
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
            var v = f.split(','),
              k,
              x = v.length,
              P = [];
            for (k = 0; k < x; k += 1)
              v[k] !== 'sans-serif' && v[k] !== 'monospace' && P.push(v[k]);
            return P.join(',');
          }
          function o(f, v) {
            var k = createTag('span');
            k.setAttribute('aria-hidden', !0), (k.style.fontFamily = v);
            var x = createTag('span');
            (x.innerText = 'giItT1WQy@!-/#'),
              (k.style.position = 'absolute'),
              (k.style.left = '-10000px'),
              (k.style.top = '-10000px'),
              (k.style.fontSize = '300px'),
              (k.style.fontVariant = 'normal'),
              (k.style.fontStyle = 'normal'),
              (k.style.fontWeight = 'normal'),
              (k.style.letterSpacing = '0'),
              k.appendChild(x),
              document.body.appendChild(k);
            var P = x.offsetWidth;
            return (
              (x.style.fontFamily = n(f) + ', ' + v),
              { node: x, w: P, parent: k }
            );
          }
          function c() {
            var f,
              v = this.fonts.length,
              k,
              x,
              P = v;
            for (f = 0; f < v; f += 1)
              this.fonts[f].loaded
                ? (P -= 1)
                : this.fonts[f].fOrigin === 'n' || this.fonts[f].origin === 0
                ? (this.fonts[f].loaded = !0)
                : ((k = this.fonts[f].monoCase.node),
                  (x = this.fonts[f].monoCase.w),
                  k.offsetWidth !== x
                    ? ((P -= 1), (this.fonts[f].loaded = !0))
                    : ((k = this.fonts[f].sansCase.node),
                      (x = this.fonts[f].sansCase.w),
                      k.offsetWidth !== x &&
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
          function g(f, v) {
            var k = createNS('text');
            k.style.fontSize = '100px';
            var x = getFontProperties(v);
            k.setAttribute('font-family', v.fFamily),
              k.setAttribute('font-style', x.style),
              k.setAttribute('font-weight', x.weight),
              (k.textContent = '1'),
              v.fClass
                ? ((k.style.fontFamily = 'inherit'),
                  k.setAttribute('class', v.fClass))
                : (k.style.fontFamily = v.fFamily),
              f.appendChild(k);
            var P = createTag('canvas').getContext('2d');
            return (
              (P.font = v.fWeight + ' ' + v.fStyle + ' 100px ' + v.fFamily), k
            );
          }
          function _(f, v) {
            if (!f) {
              this.isLoaded = !0;
              return;
            }
            if (this.chars) {
              (this.isLoaded = !0), (this.fonts = f.list);
              return;
            }
            var k = f.list,
              x,
              P = k.length,
              M = P;
            for (x = 0; x < P; x += 1) {
              var I = !0,
                A,
                V;
              if (
                ((k[x].loaded = !1),
                (k[x].monoCase = o(k[x].fFamily, 'monospace')),
                (k[x].sansCase = o(k[x].fFamily, 'sans-serif')),
                !k[x].fPath)
              )
                (k[x].loaded = !0), (M -= 1);
              else if (k[x].fOrigin === 'p' || k[x].origin === 3) {
                if (
                  ((A = document.querySelectorAll(
                    'style[f-forigin="p"][f-family="' +
                      k[x].fFamily +
                      '"], style[f-origin="3"][f-family="' +
                      k[x].fFamily +
                      '"]'
                  )),
                  A.length > 0 && (I = !1),
                  I)
                ) {
                  var F = createTag('style');
                  F.setAttribute('f-forigin', k[x].fOrigin),
                    F.setAttribute('f-origin', k[x].origin),
                    F.setAttribute('f-family', k[x].fFamily),
                    (F.type = 'text/css'),
                    (F.innerText =
                      '@font-face {font-family: ' +
                      k[x].fFamily +
                      "; font-style: normal; src: url('" +
                      k[x].fPath +
                      "');}"),
                    v.appendChild(F);
                }
              } else if (k[x].fOrigin === 'g' || k[x].origin === 1) {
                for (
                  A = document.querySelectorAll(
                    'link[f-forigin="g"], link[f-origin="1"]'
                  ),
                    V = 0;
                  V < A.length;
                  V += 1
                )
                  A[V].href.indexOf(k[x].fPath) !== -1 && (I = !1);
                if (I) {
                  var L = createTag('link');
                  L.setAttribute('f-forigin', k[x].fOrigin),
                    L.setAttribute('f-origin', k[x].origin),
                    (L.type = 'text/css'),
                    (L.rel = 'stylesheet'),
                    (L.href = k[x].fPath),
                    document.body.appendChild(L);
                }
              } else if (k[x].fOrigin === 't' || k[x].origin === 2) {
                for (
                  A = document.querySelectorAll(
                    'script[f-forigin="t"], script[f-origin="2"]'
                  ),
                    V = 0;
                  V < A.length;
                  V += 1
                )
                  k[x].fPath === A[V].src && (I = !1);
                if (I) {
                  var D = createTag('link');
                  D.setAttribute('f-forigin', k[x].fOrigin),
                    D.setAttribute('f-origin', k[x].origin),
                    D.setAttribute('rel', 'stylesheet'),
                    D.setAttribute('href', k[x].fPath),
                    v.appendChild(D);
                }
              }
              (k[x].helper = g(v, k[x])),
                (k[x].cache = {}),
                this.fonts.push(k[x]);
            }
            M === 0
              ? (this.isLoaded = !0)
              : setTimeout(this.checkLoadedFonts.bind(this), 100);
          }
          function w(f) {
            if (!!f) {
              this.chars || (this.chars = []);
              var v,
                k = f.length,
                x,
                P = this.chars.length,
                M;
              for (v = 0; v < k; v += 1) {
                for (x = 0, M = !1; x < P; )
                  this.chars[x].style === f[v].style &&
                    this.chars[x].fFamily === f[v].fFamily &&
                    this.chars[x].ch === f[v].ch &&
                    (M = !0),
                    (x += 1);
                M || (this.chars.push(f[v]), (P += 1));
              }
            }
          }
          function y(f, v, k) {
            for (var x = 0, P = this.chars.length; x < P; ) {
              if (
                this.chars[x].ch === f &&
                this.chars[x].style === v &&
                this.chars[x].fFamily === k
              )
                return this.chars[x];
              x += 1;
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
                  v,
                  k
                )),
              t
            );
          }
          function d(f, v, k) {
            var x = this.getFontByName(v),
              P = f.charCodeAt(0);
            if (!x.cache[P + 1]) {
              var M = x.helper;
              if (f === ' ') {
                M.textContent = '|' + f + '|';
                var I = M.getComputedTextLength();
                M.textContent = '||';
                var A = M.getComputedTextLength();
                x.cache[P + 1] = (I - A) / 100;
              } else
                (M.textContent = f),
                  (x.cache[P + 1] = M.getComputedTextLength() / 100);
            }
            return x.cache[P + 1] * k;
          }
          function m(f) {
            for (var v = 0, k = this.fonts.length; v < k; ) {
              if (this.fonts[v].fName === f) return this.fonts[v];
              v += 1;
            }
            return this.fonts[0];
          }
          function p(f, v) {
            var k = f.toString(16) + v.toString(16);
            return i.indexOf(k) !== -1;
          }
          function u(f, v) {
            return v ? f === s[0] && v === s[1] : f === s[1];
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
            (a.isZeroWidthJoiner = u),
            (a.isCombinedCharacter = b);
          var h = {
            addChars: w,
            addFonts: _,
            getCharData: y,
            getFontByName: m,
            measureText: d,
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
                v = f,
                k = this.keyframes.length - 1,
                x = !0,
                P,
                M,
                I;
              x;

            ) {
              if (
                ((P = this.keyframes[v]),
                (M = this.keyframes[v + 1]),
                v === k - 1 && b >= M.t - a)
              ) {
                P.h && (P = M), (f = 0);
                break;
              }
              if (M.t - a > b) {
                f = v;
                break;
              }
              v < k - 1 ? (v += 1) : ((f = 0), (x = !1));
            }
            I = this.keyframesMetadata[v] || {};
            var A,
              V,
              F,
              L,
              D,
              C,
              S = M.t - a,
              E = P.t - a,
              T;
            if (P.to) {
              I.bezierData ||
                (I.bezierData = bez.buildBezierData(
                  P.s,
                  M.s || P.e,
                  P.to,
                  P.ti
                ));
              var R = I.bezierData;
              if (b >= S || b < E) {
                var z = b >= S ? R.points.length - 1 : 0;
                for (V = R.points[z].point.length, A = 0; A < V; A += 1)
                  h[A] = R.points[z].point[A];
              } else {
                I.__fnct
                  ? (C = I.__fnct)
                  : ((C = BezierFactory.getBezierEasing(
                      P.o.x,
                      P.o.y,
                      P.i.x,
                      P.i.y,
                      P.n
                    ).get),
                    (I.__fnct = C)),
                  (F = C((b - E) / (S - E)));
                var B = R.segmentLength * F,
                  H,
                  G =
                    l.lastFrame < b && l._lastKeyframeIndex === v
                      ? l._lastAddedLength
                      : 0;
                for (
                  D =
                    l.lastFrame < b && l._lastKeyframeIndex === v
                      ? l._lastPoint
                      : 0,
                    x = !0,
                    L = R.points.length;
                  x;

                ) {
                  if (
                    ((G += R.points[D].partialLength),
                    B === 0 || F === 0 || D === R.points.length - 1)
                  ) {
                    for (V = R.points[D].point.length, A = 0; A < V; A += 1)
                      h[A] = R.points[D].point[A];
                    break;
                  } else if (B >= G && B < G + R.points[D + 1].partialLength) {
                    for (
                      H = (B - G) / R.points[D + 1].partialLength,
                        V = R.points[D].point.length,
                        A = 0;
                      A < V;
                      A += 1
                    )
                      h[A] =
                        R.points[D].point[A] +
                        (R.points[D + 1].point[A] - R.points[D].point[A]) * H;
                    break;
                  }
                  D < L - 1 ? (D += 1) : (x = !1);
                }
                (l._lastPoint = D),
                  (l._lastAddedLength = G - R.points[D].partialLength),
                  (l._lastKeyframeIndex = v);
              }
            } else {
              var J, Z, Q, ee, te;
              if (((k = P.s.length), (T = M.s || P.e), this.sh && P.h !== 1))
                if (b >= S) (h[0] = T[0]), (h[1] = T[1]), (h[2] = T[2]);
                else if (b <= E)
                  (h[0] = P.s[0]), (h[1] = P.s[1]), (h[2] = P.s[2]);
                else {
                  var re = n(P.s),
                    K = n(T),
                    se = (b - E) / (S - E);
                  s(h, i(re, K, se));
                }
              else
                for (v = 0; v < k; v += 1)
                  P.h !== 1 &&
                    (b >= S
                      ? (F = 1)
                      : b < E
                      ? (F = 0)
                      : (P.o.x.constructor === Array
                          ? (I.__fnct || (I.__fnct = []),
                            I.__fnct[v]
                              ? (C = I.__fnct[v])
                              : ((J =
                                  P.o.x[v] === void 0 ? P.o.x[0] : P.o.x[v]),
                                (Z = P.o.y[v] === void 0 ? P.o.y[0] : P.o.y[v]),
                                (Q = P.i.x[v] === void 0 ? P.i.x[0] : P.i.x[v]),
                                (ee =
                                  P.i.y[v] === void 0 ? P.i.y[0] : P.i.y[v]),
                                (C = BezierFactory.getBezierEasing(
                                  J,
                                  Z,
                                  Q,
                                  ee
                                ).get),
                                (I.__fnct[v] = C)))
                          : I.__fnct
                          ? (C = I.__fnct)
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
                        (F = C((b - E) / (S - E))))),
                    (T = M.s || P.e),
                    (te = P.h === 1 ? P.s[v] : P.s[v] + (T[v] - P.s[v]) * F),
                    this.propType === 'multidimensional'
                      ? (h[v] = te)
                      : (h = te);
            }
            return (l.lastIndex = f), h;
          }
          function i(b, l, a) {
            var h = [],
              f = b[0],
              v = b[1],
              k = b[2],
              x = b[3],
              P = l[0],
              M = l[1],
              I = l[2],
              A = l[3],
              V,
              F,
              L,
              D,
              C;
            return (
              (F = f * P + v * M + k * I + x * A),
              F < 0 && ((F = -F), (P = -P), (M = -M), (I = -I), (A = -A)),
              1 - F > 1e-6
                ? ((V = Math.acos(F)),
                  (L = Math.sin(V)),
                  (D = Math.sin((1 - a) * V) / L),
                  (C = Math.sin(a * V) / L))
                : ((D = 1 - a), (C = a)),
              (h[0] = D * f + C * P),
              (h[1] = D * v + C * M),
              (h[2] = D * k + C * I),
              (h[3] = D * x + C * A),
              h
            );
          }
          function s(b, l) {
            var a = l[0],
              h = l[1],
              f = l[2],
              v = l[3],
              k = Math.atan2(2 * h * v - 2 * a * f, 1 - 2 * h * h - 2 * f * f),
              x = Math.asin(2 * a * h + 2 * f * v),
              P = Math.atan2(2 * a * v - 2 * h * f, 1 - 2 * a * a - 2 * f * f);
            (b[0] = k / degToRads),
              (b[1] = x / degToRads),
              (b[2] = P / degToRads);
          }
          function n(b) {
            var l = b[0] * degToRads,
              a = b[1] * degToRads,
              h = b[2] * degToRads,
              f = Math.cos(l / 2),
              v = Math.cos(a / 2),
              k = Math.cos(h / 2),
              x = Math.sin(l / 2),
              P = Math.sin(a / 2),
              M = Math.sin(h / 2),
              I = f * v * k - x * P * M,
              A = x * P * k + f * v * M,
              V = x * v * k + f * P * M,
              F = f * P * k - x * v * M;
            return [A, V, F, I];
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
          function g() {
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
          function _(b) {
            this.effectsSequence.push(b),
              this.container.addDynamicProperty(this);
          }
          function w(b, l, a, h) {
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
              (this.getValue = g),
              (this.setVValue = c),
              (this.addEffect = _);
          }
          function y(b, l, a, h) {
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
              v = l.k.length;
            for (
              this.v = createTypedArray('float32', v),
                this.pv = createTypedArray('float32', v),
                this.vel = createTypedArray('float32', v),
                f = 0;
              f < v;
              f += 1
            )
              (this.v[f] = l.k[f] * this.mult), (this.pv[f] = l.k[f]);
            (this._isFirstFrame = !0),
              (this.effectsSequence = []),
              (this.getValue = g),
              (this.setVValue = c),
              (this.addEffect = _);
          }
          function d(b, l, a, h) {
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
              (this.getValue = g),
              (this.setVValue = c),
              (this.interpolateValue = r),
              (this.effectsSequence = [o.bind(this)]),
              (this.addEffect = _);
          }
          function m(b, l, a, h) {
            this.propType = 'multidimensional';
            var f,
              v = l.k.length,
              k,
              x,
              P,
              M;
            for (f = 0; f < v - 1; f += 1)
              l.k[f].to &&
                l.k[f].s &&
                l.k[f + 1] &&
                l.k[f + 1].s &&
                ((k = l.k[f].s),
                (x = l.k[f + 1].s),
                (P = l.k[f].to),
                (M = l.k[f].ti),
                ((k.length === 2 &&
                  !(k[0] === x[0] && k[1] === x[1]) &&
                  bez.pointOnLine2D(
                    k[0],
                    k[1],
                    x[0],
                    x[1],
                    k[0] + P[0],
                    k[1] + P[1]
                  ) &&
                  bez.pointOnLine2D(
                    k[0],
                    k[1],
                    x[0],
                    x[1],
                    x[0] + M[0],
                    x[1] + M[1]
                  )) ||
                  (k.length === 3 &&
                    !(k[0] === x[0] && k[1] === x[1] && k[2] === x[2]) &&
                    bez.pointOnLine3D(
                      k[0],
                      k[1],
                      k[2],
                      x[0],
                      x[1],
                      x[2],
                      k[0] + P[0],
                      k[1] + P[1],
                      k[2] + P[2]
                    ) &&
                    bez.pointOnLine3D(
                      k[0],
                      k[1],
                      k[2],
                      x[0],
                      x[1],
                      x[2],
                      x[0] + M[0],
                      x[1] + M[1],
                      x[2] + M[2]
                    ))) &&
                  ((l.k[f].to = null), (l.k[f].ti = null)),
                k[0] === x[0] &&
                  k[1] === x[1] &&
                  P[0] === 0 &&
                  P[1] === 0 &&
                  M[0] === 0 &&
                  M[1] === 0 &&
                  (k.length === 2 ||
                    (k[2] === x[2] && P[2] === 0 && M[2] === 0)) &&
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
              (this.getValue = g),
              (this.setVValue = c),
              (this.interpolateValue = r),
              (this.frameId = -1);
            var I = l.k[0].s.length;
            for (
              this.v = createTypedArray('float32', I),
                this.pv = createTypedArray('float32', I),
                f = 0;
              f < I;
              f += 1
            )
              (this.v[f] = e), (this.pv[f] = e);
            (this._caching = {
              lastFrame: e,
              lastIndex: 0,
              value: createTypedArray('float32', I),
            }),
              (this.addEffect = _);
          }
          function p(b, l, a, h, f) {
            var v;
            if (!l.k.length) v = new w(b, l, h, f);
            else if (typeof l.k[0] == 'number') v = new y(b, l, h, f);
            else
              switch (a) {
                case 0:
                  v = new d(b, l, h, f);
                  break;
                case 1:
                  v = new m(b, l, h, f);
                  break;
              }
            return v.effectsSequence.length && f.addDynamicProperty(v), v;
          }
          var u = { getProp: p };
          return u;
        })(),
        TransformPropertyFactory = (function () {
          var e = [0, 0];
          function t(g) {
            var _ = this._mdf;
            this.iterateDynamicProperties(),
              (this._mdf = this._mdf || _),
              this.a && g.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
              this.s && g.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
              this.sk && g.skewFromAxis(-this.sk.v, this.sa.v),
              this.r
                ? g.rotate(-this.r.v)
                : g
                    .rotateZ(-this.rz.v)
                    .rotateY(this.ry.v)
                    .rotateX(this.rx.v)
                    .rotateZ(-this.or.v[2])
                    .rotateY(this.or.v[1])
                    .rotateX(this.or.v[0]),
              this.data.p.s
                ? this.data.p.z
                  ? g.translate(this.px.v, this.py.v, -this.pz.v)
                  : g.translate(this.px.v, this.py.v, 0)
                : g.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
          }
          function r(g) {
            if (this.elem.globalData.frameId !== this.frameId) {
              if (
                (this._isDirty &&
                  (this.precalculateMatrix(), (this._isDirty = !1)),
                this.iterateDynamicProperties(),
                this._mdf || g)
              ) {
                var _;
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
                  var w, y;
                  if (
                    ((_ = this.elem.globalData.frameRate),
                    this.p && this.p.keyframes && this.p.getValueAtTime)
                  )
                    this.p._caching.lastFrame + this.p.offsetTime <=
                    this.p.keyframes[0].t
                      ? ((w = this.p.getValueAtTime(
                          (this.p.keyframes[0].t + 0.01) / _,
                          0
                        )),
                        (y = this.p.getValueAtTime(
                          this.p.keyframes[0].t / _,
                          0
                        )))
                      : this.p._caching.lastFrame + this.p.offsetTime >=
                        this.p.keyframes[this.p.keyframes.length - 1].t
                      ? ((w = this.p.getValueAtTime(
                          this.p.keyframes[this.p.keyframes.length - 1].t / _,
                          0
                        )),
                        (y = this.p.getValueAtTime(
                          (this.p.keyframes[this.p.keyframes.length - 1].t -
                            0.05) /
                            _,
                          0
                        )))
                      : ((w = this.p.pv),
                        (y = this.p.getValueAtTime(
                          (this.p._caching.lastFrame +
                            this.p.offsetTime -
                            0.01) /
                            _,
                          this.p.offsetTime
                        )));
                  else if (
                    this.px &&
                    this.px.keyframes &&
                    this.py.keyframes &&
                    this.px.getValueAtTime &&
                    this.py.getValueAtTime
                  ) {
                    (w = []), (y = []);
                    var d = this.px,
                      m = this.py;
                    d._caching.lastFrame + d.offsetTime <= d.keyframes[0].t
                      ? ((w[0] = d.getValueAtTime(
                          (d.keyframes[0].t + 0.01) / _,
                          0
                        )),
                        (w[1] = m.getValueAtTime(
                          (m.keyframes[0].t + 0.01) / _,
                          0
                        )),
                        (y[0] = d.getValueAtTime(d.keyframes[0].t / _, 0)),
                        (y[1] = m.getValueAtTime(m.keyframes[0].t / _, 0)))
                      : d._caching.lastFrame + d.offsetTime >=
                        d.keyframes[d.keyframes.length - 1].t
                      ? ((w[0] = d.getValueAtTime(
                          d.keyframes[d.keyframes.length - 1].t / _,
                          0
                        )),
                        (w[1] = m.getValueAtTime(
                          m.keyframes[m.keyframes.length - 1].t / _,
                          0
                        )),
                        (y[0] = d.getValueAtTime(
                          (d.keyframes[d.keyframes.length - 1].t - 0.01) / _,
                          0
                        )),
                        (y[1] = m.getValueAtTime(
                          (m.keyframes[m.keyframes.length - 1].t - 0.01) / _,
                          0
                        )))
                      : ((w = [d.pv, m.pv]),
                        (y[0] = d.getValueAtTime(
                          (d._caching.lastFrame + d.offsetTime - 0.01) / _,
                          d.offsetTime
                        )),
                        (y[1] = m.getValueAtTime(
                          (m._caching.lastFrame + m.offsetTime - 0.01) / _,
                          m.offsetTime
                        )));
                  } else (y = e), (w = y);
                  this.v.rotate(-Math.atan2(w[1] - y[1], w[0] - y[0]));
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
          function n(g) {
            this._addDynamicProperty(g),
              this.elem.addDynamicProperty(g),
              (this._isDirty = !0);
          }
          function o(g, _, w) {
            if (
              ((this.elem = g),
              (this.frameId = -1),
              (this.propType = 'transform'),
              (this.data = _),
              (this.v = new Matrix()),
              (this.pre = new Matrix()),
              (this.appliedTransformations = 0),
              this.initDynamicPropertyContainer(w || g),
              _.p && _.p.s
                ? ((this.px = PropertyFactory.getProp(g, _.p.x, 0, 0, this)),
                  (this.py = PropertyFactory.getProp(g, _.p.y, 0, 0, this)),
                  _.p.z &&
                    (this.pz = PropertyFactory.getProp(g, _.p.z, 0, 0, this)))
                : (this.p = PropertyFactory.getProp(
                    g,
                    _.p || { k: [0, 0, 0] },
                    1,
                    0,
                    this
                  )),
              _.rx)
            ) {
              if (
                ((this.rx = PropertyFactory.getProp(
                  g,
                  _.rx,
                  0,
                  degToRads,
                  this
                )),
                (this.ry = PropertyFactory.getProp(
                  g,
                  _.ry,
                  0,
                  degToRads,
                  this
                )),
                (this.rz = PropertyFactory.getProp(
                  g,
                  _.rz,
                  0,
                  degToRads,
                  this
                )),
                _.or.k[0].ti)
              ) {
                var y,
                  d = _.or.k.length;
                for (y = 0; y < d; y += 1)
                  (_.or.k[y].to = null), (_.or.k[y].ti = null);
              }
              (this.or = PropertyFactory.getProp(g, _.or, 1, degToRads, this)),
                (this.or.sh = !0);
            } else
              this.r = PropertyFactory.getProp(
                g,
                _.r || { k: 0 },
                0,
                degToRads,
                this
              );
            _.sk &&
              ((this.sk = PropertyFactory.getProp(g, _.sk, 0, degToRads, this)),
              (this.sa = PropertyFactory.getProp(g, _.sa, 0, degToRads, this))),
              (this.a = PropertyFactory.getProp(
                g,
                _.a || { k: [0, 0, 0] },
                1,
                0,
                this
              )),
              (this.s = PropertyFactory.getProp(
                g,
                _.s || { k: [100, 100, 100] },
                1,
                0.01,
                this
              )),
              _.o
                ? (this.o = PropertyFactory.getProp(g, _.o, 0, 0.01, g))
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
          function c(g, _, w) {
            return new o(g, _, w);
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
              v,
              k,
              x,
              P,
              M,
              I,
              A,
              V,
              F,
              L = this.keyframes;
            if (l < L[0].t - this.offsetTime)
              (v = L[0].s[0]), (x = !0), (f = 0);
            else if (l >= L[L.length - 1].t - this.offsetTime)
              (v = L[L.length - 1].s
                ? L[L.length - 1].s[0]
                : L[L.length - 2].e[0]),
                (x = !0);
            else {
              for (
                var D = f, C = L.length - 1, S = !0, E, T, R;
                S && ((E = L[D]), (T = L[D + 1]), !(T.t - this.offsetTime > l));

              )
                D < C - 1 ? (D += 1) : (S = !1);
              if (
                ((R = this.keyframesMetadata[D] || {}),
                (x = E.h === 1),
                (f = D),
                !x)
              ) {
                if (l >= T.t - this.offsetTime) V = 1;
                else if (l < E.t - this.offsetTime) V = 0;
                else {
                  var z;
                  R.__fnct
                    ? (z = R.__fnct)
                    : ((z = BezierFactory.getBezierEasing(
                        E.o.x,
                        E.o.y,
                        E.i.x,
                        E.i.y
                      ).get),
                      (R.__fnct = z)),
                    (V = z(
                      (l - (E.t - this.offsetTime)) /
                        (T.t - this.offsetTime - (E.t - this.offsetTime))
                    ));
                }
                k = T.s ? T.s[0] : E.e[0];
              }
              v = E.s[0];
            }
            for (
              I = a._length, A = v.i[0].length, h.lastIndex = f, P = 0;
              P < I;
              P += 1
            )
              for (M = 0; M < A; M += 1)
                (F = x ? v.i[P][M] : v.i[P][M] + (k.i[P][M] - v.i[P][M]) * V),
                  (a.i[P][M] = F),
                  (F = x ? v.o[P][M] : v.o[P][M] + (k.o[P][M] - v.o[P][M]) * V),
                  (a.o[P][M] = F),
                  (F = x ? v.v[P][M] : v.v[P][M] + (k.v[P][M] - v.v[P][M]) * V),
                  (a.v[P][M] = F);
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
          function g(l) {
            this.effectsSequence.push(l),
              this.container.addDynamicProperty(this);
          }
          (c.prototype.interpolateShape = t),
            (c.prototype.getValue = o),
            (c.prototype.setVValue = n),
            (c.prototype.addEffect = g);
          function _(l, a, h) {
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
          (_.prototype.getValue = o),
            (_.prototype.interpolateShape = t),
            (_.prototype.setVValue = n),
            (_.prototype.addEffect = g);
          var w = (function () {
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
                      v = this.s.v[0] / 2,
                      k = this.s.v[1] / 2,
                      x = this.d !== 3,
                      P = this.v;
                    (P.v[0][0] = h),
                      (P.v[0][1] = f - k),
                      (P.v[1][0] = x ? h + v : h - v),
                      (P.v[1][1] = f),
                      (P.v[2][0] = h),
                      (P.v[2][1] = f + k),
                      (P.v[3][0] = x ? h - v : h + v),
                      (P.v[3][1] = f),
                      (P.i[0][0] = x ? h - v * l : h + v * l),
                      (P.i[0][1] = f - k),
                      (P.i[1][0] = x ? h + v : h - v),
                      (P.i[1][1] = f - k * l),
                      (P.i[2][0] = x ? h + v * l : h - v * l),
                      (P.i[2][1] = f + k),
                      (P.i[3][0] = x ? h - v : h + v),
                      (P.i[3][1] = f + k * l),
                      (P.o[0][0] = x ? h + v * l : h - v * l),
                      (P.o[0][1] = f - k),
                      (P.o[1][0] = x ? h + v : h - v),
                      (P.o[1][1] = f + k * l),
                      (P.o[2][0] = x ? h - v * l : h + v * l),
                      (P.o[2][1] = f + k),
                      (P.o[3][0] = x ? h - v : h + v),
                      (P.o[3][1] = f - k * l);
                  },
                }),
                extendPrototype([DynamicPropertyContainer], a),
                a
              );
            })(),
            y = (function () {
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
                      v = this.or.v,
                      k = this.ir.v,
                      x = this.os.v,
                      P = this.is.v,
                      M = (2 * Math.PI * v) / (a * 2),
                      I = (2 * Math.PI * k) / (a * 2),
                      A,
                      V,
                      F,
                      L,
                      D = -Math.PI / 2;
                    D += this.r.v;
                    var C = this.data.d === 3 ? -1 : 1;
                    for (this.v._length = 0, A = 0; A < a; A += 1) {
                      (V = f ? v : k), (F = f ? x : P), (L = f ? M : I);
                      var S = V * Math.cos(D),
                        E = V * Math.sin(D),
                        T =
                          S === 0 && E === 0 ? 0 : E / Math.sqrt(S * S + E * E),
                        R =
                          S === 0 && E === 0
                            ? 0
                            : -S / Math.sqrt(S * S + E * E);
                      (S += +this.p.v[0]),
                        (E += +this.p.v[1]),
                        this.v.setTripleAt(
                          S,
                          E,
                          S - T * L * F * C,
                          E - R * L * F * C,
                          S + T * L * F * C,
                          E + R * L * F * C,
                          A,
                          !0
                        ),
                        (f = !f),
                        (D += h * C);
                    }
                  },
                  convertPolygonToPath: function () {
                    var a = Math.floor(this.pt.v),
                      h = (Math.PI * 2) / a,
                      f = this.or.v,
                      v = this.os.v,
                      k = (2 * Math.PI * f) / (a * 4),
                      x,
                      P = -Math.PI * 0.5,
                      M = this.data.d === 3 ? -1 : 1;
                    for (
                      P += this.r.v, this.v._length = 0, x = 0;
                      x < a;
                      x += 1
                    ) {
                      var I = f * Math.cos(P),
                        A = f * Math.sin(P),
                        V =
                          I === 0 && A === 0 ? 0 : A / Math.sqrt(I * I + A * A),
                        F =
                          I === 0 && A === 0
                            ? 0
                            : -I / Math.sqrt(I * I + A * A);
                      (I += +this.p.v[0]),
                        (A += +this.p.v[1]),
                        this.v.setTripleAt(
                          I,
                          A,
                          I - V * k * v * M,
                          A - F * k * v * M,
                          I + V * k * v * M,
                          A + F * k * v * M,
                          x,
                          !0
                        ),
                        (P += h * M);
                    }
                    (this.paths.length = 0), (this.paths[0] = this.v);
                  },
                }),
                extendPrototype([DynamicPropertyContainer], l),
                l
              );
            })(),
            d = (function () {
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
                      v = this.s.v[1] / 2,
                      k = bmMin(f, v, this.r.v),
                      x = k * (1 - roundCorner);
                    (this.v._length = 0),
                      this.d === 2 || this.d === 1
                        ? (this.v.setTripleAt(
                            a + f,
                            h - v + k,
                            a + f,
                            h - v + k,
                            a + f,
                            h - v + x,
                            0,
                            !0
                          ),
                          this.v.setTripleAt(
                            a + f,
                            h + v - k,
                            a + f,
                            h + v - x,
                            a + f,
                            h + v - k,
                            1,
                            !0
                          ),
                          k !== 0
                            ? (this.v.setTripleAt(
                                a + f - k,
                                h + v,
                                a + f - k,
                                h + v,
                                a + f - x,
                                h + v,
                                2,
                                !0
                              ),
                              this.v.setTripleAt(
                                a - f + k,
                                h + v,
                                a - f + x,
                                h + v,
                                a - f + k,
                                h + v,
                                3,
                                !0
                              ),
                              this.v.setTripleAt(
                                a - f,
                                h + v - k,
                                a - f,
                                h + v - k,
                                a - f,
                                h + v - x,
                                4,
                                !0
                              ),
                              this.v.setTripleAt(
                                a - f,
                                h - v + k,
                                a - f,
                                h - v + x,
                                a - f,
                                h - v + k,
                                5,
                                !0
                              ),
                              this.v.setTripleAt(
                                a - f + k,
                                h - v,
                                a - f + k,
                                h - v,
                                a - f + x,
                                h - v,
                                6,
                                !0
                              ),
                              this.v.setTripleAt(
                                a + f - k,
                                h - v,
                                a + f - x,
                                h - v,
                                a + f - k,
                                h - v,
                                7,
                                !0
                              ))
                            : (this.v.setTripleAt(
                                a - f,
                                h + v,
                                a - f + x,
                                h + v,
                                a - f,
                                h + v,
                                2
                              ),
                              this.v.setTripleAt(
                                a - f,
                                h - v,
                                a - f,
                                h - v + x,
                                a - f,
                                h - v,
                                3
                              )))
                        : (this.v.setTripleAt(
                            a + f,
                            h - v + k,
                            a + f,
                            h - v + x,
                            a + f,
                            h - v + k,
                            0,
                            !0
                          ),
                          k !== 0
                            ? (this.v.setTripleAt(
                                a + f - k,
                                h - v,
                                a + f - k,
                                h - v,
                                a + f - x,
                                h - v,
                                1,
                                !0
                              ),
                              this.v.setTripleAt(
                                a - f + k,
                                h - v,
                                a - f + x,
                                h - v,
                                a - f + k,
                                h - v,
                                2,
                                !0
                              ),
                              this.v.setTripleAt(
                                a - f,
                                h - v + k,
                                a - f,
                                h - v + k,
                                a - f,
                                h - v + x,
                                3,
                                !0
                              ),
                              this.v.setTripleAt(
                                a - f,
                                h + v - k,
                                a - f,
                                h + v - x,
                                a - f,
                                h + v - k,
                                4,
                                !0
                              ),
                              this.v.setTripleAt(
                                a - f + k,
                                h + v,
                                a - f + k,
                                h + v,
                                a - f + x,
                                h + v,
                                5,
                                !0
                              ),
                              this.v.setTripleAt(
                                a + f - k,
                                h + v,
                                a + f - x,
                                h + v,
                                a + f - k,
                                h + v,
                                6,
                                !0
                              ),
                              this.v.setTripleAt(
                                a + f,
                                h + v - k,
                                a + f,
                                h + v - k,
                                a + f,
                                h + v - x,
                                7,
                                !0
                              ))
                            : (this.v.setTripleAt(
                                a - f,
                                h - v,
                                a - f + x,
                                h - v,
                                a - f,
                                h - v,
                                1,
                                !0
                              ),
                              this.v.setTripleAt(
                                a - f,
                                h + v,
                                a - f,
                                h + v - x,
                                a - f,
                                h + v,
                                2,
                                !0
                              ),
                              this.v.setTripleAt(
                                a + f,
                                h + v,
                                a + f - x,
                                h + v,
                                a + f,
                                h + v,
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
          function m(l, a, h) {
            var f;
            if (h === 3 || h === 4) {
              var v = h === 3 ? a.pt : a.ks,
                k = v.k;
              k.length ? (f = new _(l, a, h)) : (f = new c(l, a, h));
            } else
              h === 5
                ? (f = new d(l, a))
                : h === 6
                ? (f = new w(l, a))
                : h === 7 && (f = new y(l, a));
            return f.k && l.addDynamicProperty(f), f;
          }
          function p() {
            return c;
          }
          function u() {
            return _;
          }
          var b = {};
          return (
            (b.getShapeProp = m),
            (b.getConstructorFunction = p),
            (b.getKeyframedConstructorFunction = u),
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
            g = n.length,
            _;
          for (c = 0; c < g; c += 1)
            if (((_ = n[c]), !(_.e * s < i || _.s * s > i + r))) {
              var w, y;
              _.s * s <= i ? (w = 0) : (w = (_.s * s - i) / r),
                _.e * s >= i + r ? (y = 1) : (y = (_.e * s - i) / r),
                o.push([w, y]);
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
            g,
            _,
            w,
            y,
            d,
            m = 0;
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
              u,
              b;
            for (o = 0; o < c; o += 1)
              if (
                ((u = this.shapes[o]),
                !u.shape._mdf && !this._mdf && !e && this.m !== 2)
              )
                u.shape.paths = u.localShapeCollection;
              else {
                if (
                  ((n = u.shape.paths),
                  (_ = n._length),
                  (d = 0),
                  !u.shape._mdf && u.pathsData.length)
                )
                  d = u.totalShapeLength;
                else {
                  for (
                    w = this.releasePathsData(u.pathsData), g = 0;
                    g < _;
                    g += 1
                  )
                    (y = bez.getSegmentsLength(n.shapes[g])),
                      w.push(y),
                      (d += y.totalLength);
                  (u.totalShapeLength = d), (u.pathsData = w);
                }
                (m += d), (u.shape._mdf = !0);
              }
            var l = t,
              a = r,
              h = 0,
              f;
            for (o = c - 1; o >= 0; o -= 1)
              if (((u = this.shapes[o]), u.shape._mdf)) {
                for (
                  b = u.localShapeCollection,
                    b.releaseShapes(),
                    this.m === 2 && c > 1
                      ? ((f = this.calculateShapeEdges(
                          t,
                          r,
                          u.totalShapeLength,
                          h,
                          m
                        )),
                        (h += u.totalShapeLength))
                      : (f = [[l, a]]),
                    _ = f.length,
                    g = 0;
                  g < _;
                  g += 1
                ) {
                  (l = f[g][0]),
                    (a = f[g][1]),
                    (p.length = 0),
                    a <= 1
                      ? p.push({
                          s: u.totalShapeLength * l,
                          e: u.totalShapeLength * a,
                        })
                      : l >= 1
                      ? p.push({
                          s: u.totalShapeLength * (l - 1),
                          e: u.totalShapeLength * (a - 1),
                        })
                      : (p.push({
                          s: u.totalShapeLength * l,
                          e: u.totalShapeLength,
                        }),
                        p.push({ s: 0, e: u.totalShapeLength * (a - 1) }));
                  var v = this.addShapes(u, p[0]);
                  if (p[0].s !== p[0].e) {
                    if (p.length > 1) {
                      var k = u.shape.paths.shapes[u.shape.paths._length - 1];
                      if (k.c) {
                        var x = v.pop();
                        this.addPaths(v, b), (v = this.addShapes(u, p[1], x));
                      } else this.addPaths(v, b), (v = this.addShapes(u, p[1]));
                    }
                    this.addPaths(v, b);
                  }
                }
                u.shape.paths = b;
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
            g,
            _ = 0,
            w,
            y,
            d,
            m,
            p = [],
            u,
            b = !0;
          for (
            r
              ? ((y = r._length), (u = r._length))
              : ((r = shapePool.newElement()), (y = 0), (u = 0)),
              p.push(r),
              n = 0;
            n < o;
            n += 1
          ) {
            for (
              d = i[n].lengths,
                r.c = s[n].c,
                g = s[n].c ? d.length : d.length + 1,
                c = 1;
              c < g;
              c += 1
            )
              if (((w = d[c - 1]), _ + w.addedLength < t.s))
                (_ += w.addedLength), (r.c = !1);
              else if (_ > t.e) {
                r.c = !1;
                break;
              } else
                t.s <= _ && t.e >= _ + w.addedLength
                  ? (this.addSegment(
                      s[n].v[c - 1],
                      s[n].o[c - 1],
                      s[n].i[c],
                      s[n].v[c],
                      r,
                      y,
                      b
                    ),
                    (b = !1))
                  : ((m = bez.getNewSegment(
                      s[n].v[c - 1],
                      s[n].v[c],
                      s[n].o[c - 1],
                      s[n].i[c],
                      (t.s - _) / w.addedLength,
                      (t.e - _) / w.addedLength,
                      d[c - 1]
                    )),
                    this.addSegmentFromArray(m, r, y, b),
                    (b = !1),
                    (r.c = !1)),
                  (_ += w.addedLength),
                  (y += 1);
            if (s[n].c && d.length) {
              if (((w = d[c - 1]), _ <= t.e)) {
                var l = d[c - 1].addedLength;
                t.s <= _ && t.e >= _ + l
                  ? (this.addSegment(
                      s[n].v[c - 1],
                      s[n].o[c - 1],
                      s[n].i[0],
                      s[n].v[0],
                      r,
                      y,
                      b
                    ),
                    (b = !1))
                  : ((m = bez.getNewSegment(
                      s[n].v[c - 1],
                      s[n].v[0],
                      s[n].o[c - 1],
                      s[n].i[0],
                      (t.s - _) / l,
                      (t.e - _) / l,
                      d[c - 1]
                    )),
                    this.addSegmentFromArray(m, r, y, b),
                    (b = !1),
                    (r.c = !1));
              } else r.c = !1;
              (_ += w.addedLength), (y += 1);
            }
            if (
              (r._length &&
                (r.setXYAt(r.v[u][0], r.v[u][1], 'i', u),
                r.setXYAt(
                  r.v[r._length - 1][0],
                  r.v[r._length - 1][1],
                  'o',
                  r._length - 1
                )),
              _ > t.e)
            )
              break;
            n < o - 1 &&
              ((r = shapePool.newElement()), (b = !0), p.push(r), (y = 0));
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
            g,
            _,
            w,
            y = 0,
            d,
            m,
            p,
            u,
            b,
            l;
          for (i = 0; i < s; i += 1)
            (n = e.v[i]),
              (c = e.o[i]),
              (o = e.i[i]),
              n[0] === c[0] && n[1] === c[1] && n[0] === o[0] && n[1] === o[1]
                ? (i === 0 || i === s - 1) && !e.c
                  ? (r.setTripleAt(n[0], n[1], c[0], c[1], o[0], o[1], y),
                    (y += 1))
                  : (i === 0 ? (g = e.v[s - 1]) : (g = e.v[i - 1]),
                    (_ = Math.sqrt(
                      Math.pow(n[0] - g[0], 2) + Math.pow(n[1] - g[1], 2)
                    )),
                    (w = _ ? Math.min(_ / 2, t) / _ : 0),
                    (b = n[0] + (g[0] - n[0]) * w),
                    (d = b),
                    (l = n[1] - (n[1] - g[1]) * w),
                    (m = l),
                    (p = d - (d - n[0]) * roundCorner),
                    (u = m - (m - n[1]) * roundCorner),
                    r.setTripleAt(d, m, p, u, b, l, y),
                    (y += 1),
                    i === s - 1 ? (g = e.v[0]) : (g = e.v[i + 1]),
                    (_ = Math.sqrt(
                      Math.pow(n[0] - g[0], 2) + Math.pow(n[1] - g[1], 2)
                    )),
                    (w = _ ? Math.min(_ / 2, t) / _ : 0),
                    (p = n[0] + (g[0] - n[0]) * w),
                    (d = p),
                    (u = n[1] + (g[1] - n[1]) * w),
                    (m = u),
                    (b = d - (d - n[0]) * roundCorner),
                    (l = m - (m - n[1]) * roundCorner),
                    r.setTripleAt(d, m, p, u, b, l, y),
                    (y += 1))
                : (r.setTripleAt(
                    e.v[i][0],
                    e.v[i][1],
                    e.o[i][0],
                    e.o[i][1],
                    e.i[i][0],
                    e.i[i][1],
                    y
                  ),
                  (y += 1));
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
            var c, g;
            for (r = 0; r < i; r += 1) {
              if (
                ((c = this.shapes[r]),
                (g = c.localShapeCollection),
                !(!c.shape._mdf && !this._mdf && !e))
              )
                for (
                  g.releaseShapes(),
                    c.shape._mdf = !0,
                    t = c.shape.paths.shapes,
                    n = c.shape.paths._length,
                    s = 0;
                  s < n;
                  s += 1
                )
                  g.addShape(this.processPath(t[s], o));
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
          var c, g, _, w, y, d;
          for (n = 0; n < s; n += 1)
            (c = e.v[n][0] + (i[0] - e.v[n][0]) * r),
              (g = e.v[n][1] + (i[1] - e.v[n][1]) * r),
              (_ = e.o[n][0] + (i[0] - e.o[n][0]) * -r),
              (w = e.o[n][1] + (i[1] - e.o[n][1]) * -r),
              (y = e.i[n][0] + (i[0] - e.i[n][0]) * -r),
              (d = e.i[n][1] + (i[1] - e.i[n][1]) * -r),
              o.setTripleAt(c, g, _, w, y, d, n);
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
            var c, g;
            for (r = 0; r < i; r += 1) {
              if (
                ((c = this.shapes[r]),
                (g = c.localShapeCollection),
                !(!c.shape._mdf && !this._mdf && !e))
              )
                for (
                  g.releaseShapes(),
                    c.shape._mdf = !0,
                    t = c.shape.paths.shapes,
                    n = c.shape.paths._length,
                    s = 0;
                  s < n;
                  s += 1
                )
                  g.addShape(this.processPath(t[s], o));
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
            g = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
          e.translate(i.p.v[0] * o * s, i.p.v[1] * o * s, i.p.v[2]),
            t.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
            t.rotate(-i.r.v * o * s),
            t.translate(i.a.v[0], i.a.v[1], i.a.v[2]),
            r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
            r.scale(n ? 1 / c : c, n ? 1 / g : g),
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
                var g = { it: this.cloneElements(this._elements), ty: 'gr' };
                g.it.push({
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
                  this.arr.splice(0, 0, g),
                  this._groups.splice(0, 0, g),
                  (this._currentCopies += 1);
              }
              this.elem.reloadShapes(), (o = !0);
            }
            n = 0;
            var _;
            for (i = 0; i <= this._groups.length - 1; i += 1) {
              if (
                ((_ = n < c),
                (this._groups[i]._render = _),
                this.changeGroupRender(this._groups[i].it, _),
                !_)
              ) {
                var w = this.elemsData[i].it,
                  y = w[w.length - 1];
                y.transform.op.v !== 0
                  ? ((y.transform.op._mdf = !0), (y.transform.op.v = 0))
                  : (y.transform.op._mdf = !1);
              }
              n += 1;
            }
            this._currentCopies = c;
            var d = this.o.v,
              m = d % 1,
              p = d > 0 ? Math.floor(d) : Math.ceil(d),
              u = this.pMatrix.props,
              b = this.rMatrix.props,
              l = this.sMatrix.props;
            this.pMatrix.reset(),
              this.rMatrix.reset(),
              this.sMatrix.reset(),
              this.tMatrix.reset(),
              this.matrix.reset();
            var a = 0;
            if (d > 0) {
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
              m &&
                (this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  m,
                  !1
                ),
                (a += m));
            } else if (d < 0) {
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
              m &&
                (this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  -m,
                  !0
                ),
                (a -= m));
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
                      u[0],
                      u[1],
                      u[2],
                      u[3],
                      u[4],
                      u[5],
                      u[6],
                      u[7],
                      u[8],
                      u[9],
                      u[10],
                      u[11],
                      u[12],
                      u[13],
                      u[14],
                      u[15]
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
          if (this.o.length / 2 !== this.c.length / 4) return !1;
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
              (i = t % 4 === 0 ? 100 : 255),
                (s = Math.round(this.prop.v[t] * i)),
                this.c[t] !== s && ((this.c[t] = s), (this._cmdf = !e));
            if (this.o.length)
              for (r = this.prop.v.length, t = this.data.p * 4; t < r; t += 1)
                (i = t % 2 === 0 ? 100 : 1),
                  (s =
                    t % 2 === 0
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
            g = ' M' + i.applyToPointStringified(o[0][0], o[0][1]);
          for (c = 1; c < t; c += 1)
            g +=
              ' C' +
              i.applyToPointStringified(s[c - 1][0], s[c - 1][1]) +
              ' ' +
              i.applyToPointStringified(n[c][0], n[c][1]) +
              ' ' +
              i.applyToPointStringified(o[c][0], o[c][1]);
          return (
            r &&
              t &&
              ((g +=
                ' C' +
                i.applyToPointStringified(s[c - 1][0], s[c - 1][1]) +
                ' ' +
                i.applyToPointStringified(n[0][0], n[0][1]) +
                ' ' +
                i.applyToPointStringified(o[0][0], o[0][1])),
              (g += 'z')),
            g
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
              var v = l.p;
              v.indexOf('images/') !== -1 && (v = v.split('/')[1]), (f = a + v);
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
          function g(l, a) {
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
          function _(l) {
            this.path = l || '';
          }
          function w(l) {
            this.assetsPath = l || '';
          }
          function y(l) {
            for (var a = 0, h = this.images.length; a < h; ) {
              if (this.images[a].assetData === l) return this.images[a].img;
              a += 1;
            }
            return null;
          }
          function d() {
            (this.imagesLoadedCb = null), (this.images.length = 0);
          }
          function m() {
            return this.totalImages === this.loadedAssets;
          }
          function p() {
            return this.totalFootages === this.loadedFootagesCount;
          }
          function u(l, a) {
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
              loadAssets: g,
              setAssetsPath: w,
              setPath: _,
              loadedImages: m,
              loadedFootages: p,
              destroy: d,
              getAsset: y,
              createImgData: o,
              createImageData: n,
              imageLoaded: t,
              footageLoaded: r,
              setCacheType: u,
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
              g,
              _,
              w,
              y,
              d = e.l,
              m,
              p,
              u,
              b,
              l,
              a,
              h,
              f,
              v,
              k,
              x,
              P,
              M,
              I,
              A;
            if (this._hasMaskedPath) {
              if (
                ((A = this._pathData.m),
                !this._pathData.n || this._pathData._mdf)
              ) {
                var V = A.v;
                this._pathData.r.v && (V = V.reverse()),
                  (m = { tLength: 0, segments: [] }),
                  (y = V._length - 1);
                var F;
                for (P = 0, w = 0; w < y; w += 1)
                  (F = bez.buildBezierData(
                    V.v[w],
                    V.v[w + 1],
                    [V.o[w][0] - V.v[w][0], V.o[w][1] - V.v[w][1]],
                    [
                      V.i[w + 1][0] - V.v[w + 1][0],
                      V.i[w + 1][1] - V.v[w + 1][1],
                    ]
                  )),
                    (m.tLength += F.segmentLength),
                    m.segments.push(F),
                    (P += F.segmentLength);
                (w = y),
                  A.v.c &&
                    ((F = bez.buildBezierData(
                      V.v[w],
                      V.v[0],
                      [V.o[w][0] - V.v[w][0], V.o[w][1] - V.v[w][1]],
                      [V.i[0][0] - V.v[0][0], V.i[0][1] - V.v[0][1]]
                    )),
                    (m.tLength += F.segmentLength),
                    m.segments.push(F),
                    (P += F.segmentLength)),
                  (this._pathData.pi = m);
              }
              if (
                ((m = this._pathData.pi),
                (p = this._pathData.f.v),
                (h = 0),
                (a = 1),
                (b = 0),
                (l = !0),
                (k = m.segments),
                p < 0 && A.v.c)
              )
                for (
                  m.tLength < Math.abs(p) && (p = -Math.abs(p) % m.tLength),
                    h = k.length - 1,
                    v = k[h].points,
                    a = v.length - 1;
                  p < 0;

                )
                  (p += v[a].partialLength),
                    (a -= 1),
                    a < 0 && ((h -= 1), (v = k[h].points), (a = v.length - 1));
              (v = k[h].points),
                (f = v[a - 1]),
                (u = v[a]),
                (x = u.partialLength);
            }
            (y = d.length), (g = 0), (_ = 0);
            var L = e.finalSize * 1.2 * 0.714,
              D = !0,
              C,
              S,
              E,
              T,
              R;
            T = i.length;
            var z,
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
              for (w = 0; w < y; w += 1)
                if (d[w].n) {
                  for (ie && (ie += q); N < w; )
                    (d[N].animatorJustifyOffset = ie), (N += 1);
                  (ie = 0), (U = !0);
                } else {
                  for (E = 0; E < T; E += 1)
                    (C = i[E].a),
                      C.t.propType &&
                        (U && e.j === 2 && (q += C.t.v * W),
                        (S = i[E].s),
                        (z = S.getMult(d[w].anIndexes[E], s.a[E].s.totalChars)),
                        z.length
                          ? (ie += C.t.v * z[0] * W)
                          : (ie += C.t.v * z * W));
                  U = !1;
                }
              for (ie && (ie += q); N < w; )
                (d[N].animatorJustifyOffset = ie), (N += 1);
            }
            for (w = 0; w < y; w += 1) {
              if ((n.reset(), (re = 1), d[w].n))
                (g = 0),
                  (_ += e.yOffset),
                  (_ += D ? 1 : 0),
                  (p = Z),
                  (D = !1),
                  this._hasMaskedPath &&
                    ((h = Q),
                    (a = ee),
                    (v = k[h].points),
                    (f = v[a - 1]),
                    (u = v[a]),
                    (x = u.partialLength),
                    (b = 0)),
                  (oe = ''),
                  (le = ''),
                  (ae = ''),
                  (ne = ''),
                  ($ = this.defaultPropsArray);
              else {
                if (this._hasMaskedPath) {
                  if (te !== d[w].line) {
                    switch (e.j) {
                      case 1:
                        p += P - e.lineWidths[d[w].line];
                        break;
                      case 2:
                        p += (P - e.lineWidths[d[w].line]) / 2;
                        break;
                    }
                    te = d[w].line;
                  }
                  B !== d[w].ind &&
                    (d[B] && (p += d[B].extra),
                    (p += d[w].an / 2),
                    (B = d[w].ind)),
                    (p += r[0] * d[w].an * 0.005);
                  var j = 0;
                  for (E = 0; E < T; E += 1)
                    (C = i[E].a),
                      C.p.propType &&
                        ((S = i[E].s),
                        (z = S.getMult(d[w].anIndexes[E], s.a[E].s.totalChars)),
                        z.length
                          ? (j += C.p.v[0] * z[0])
                          : (j += C.p.v[0] * z)),
                      C.a.propType &&
                        ((S = i[E].s),
                        (z = S.getMult(d[w].anIndexes[E], s.a[E].s.totalChars)),
                        z.length
                          ? (j += C.a.v[0] * z[0])
                          : (j += C.a.v[0] * z));
                  for (
                    l = !0,
                      this._pathData.a.v &&
                        ((p =
                          d[0].an * 0.5 +
                          ((P -
                            this._pathData.f.v -
                            d[0].an * 0.5 -
                            d[d.length - 1].an * 0.5) *
                            B) /
                            (y - 1)),
                        (p += this._pathData.f.v));
                    l;

                  )
                    b + x >= p + j || !v
                      ? ((M = (p + j - b) / u.partialLength),
                        (G = f.point[0] + (u.point[0] - f.point[0]) * M),
                        (J = f.point[1] + (u.point[1] - f.point[1]) * M),
                        n.translate(
                          -r[0] * d[w].an * 0.005,
                          -(r[1] * L) * 0.01
                        ),
                        (l = !1))
                      : v &&
                        ((b += u.partialLength),
                        (a += 1),
                        a >= v.length &&
                          ((a = 0),
                          (h += 1),
                          k[h]
                            ? (v = k[h].points)
                            : A.v.c
                            ? ((a = 0), (h = 0), (v = k[h].points))
                            : ((b -= u.partialLength), (v = null))),
                        v && ((f = u), (u = v[a]), (x = u.partialLength)));
                  (H = d[w].an / 2 - d[w].add), n.translate(-H, 0, 0);
                } else
                  (H = d[w].an / 2 - d[w].add),
                    n.translate(-H, 0, 0),
                    n.translate(-r[0] * d[w].an * 0.005, -r[1] * L * 0.01, 0);
                for (E = 0; E < T; E += 1)
                  (C = i[E].a),
                    C.t.propType &&
                      ((S = i[E].s),
                      (z = S.getMult(d[w].anIndexes[E], s.a[E].s.totalChars)),
                      (g !== 0 || e.j !== 0) &&
                        (this._hasMaskedPath
                          ? z.length
                            ? (p += C.t.v * z[0])
                            : (p += C.t.v * z)
                          : z.length
                          ? (g += C.t.v * z[0])
                          : (g += C.t.v * z)));
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
                  E < T;
                  E += 1
                )
                  (C = i[E].a),
                    C.a.propType &&
                      ((S = i[E].s),
                      (z = S.getMult(d[w].anIndexes[E], s.a[E].s.totalChars)),
                      z.length
                        ? n.translate(
                            -C.a.v[0] * z[0],
                            -C.a.v[1] * z[1],
                            C.a.v[2] * z[2]
                          )
                        : n.translate(
                            -C.a.v[0] * z,
                            -C.a.v[1] * z,
                            C.a.v[2] * z
                          ));
                for (E = 0; E < T; E += 1)
                  (C = i[E].a),
                    C.s.propType &&
                      ((S = i[E].s),
                      (z = S.getMult(d[w].anIndexes[E], s.a[E].s.totalChars)),
                      z.length
                        ? n.scale(
                            1 + (C.s.v[0] - 1) * z[0],
                            1 + (C.s.v[1] - 1) * z[1],
                            1
                          )
                        : n.scale(
                            1 + (C.s.v[0] - 1) * z,
                            1 + (C.s.v[1] - 1) * z,
                            1
                          ));
                for (E = 0; E < T; E += 1) {
                  if (
                    ((C = i[E].a),
                    (S = i[E].s),
                    (z = S.getMult(d[w].anIndexes[E], s.a[E].s.totalChars)),
                    C.sk.propType &&
                      (z.length
                        ? n.skewFromAxis(-C.sk.v * z[0], C.sa.v * z[1])
                        : n.skewFromAxis(-C.sk.v * z, C.sa.v * z)),
                    C.r.propType &&
                      (z.length
                        ? n.rotateZ(-C.r.v * z[2])
                        : n.rotateZ(-C.r.v * z)),
                    C.ry.propType &&
                      (z.length
                        ? n.rotateY(C.ry.v * z[1])
                        : n.rotateY(C.ry.v * z)),
                    C.rx.propType &&
                      (z.length
                        ? n.rotateX(C.rx.v * z[0])
                        : n.rotateX(C.rx.v * z)),
                    C.o.propType &&
                      (z.length
                        ? (re += (C.o.v * z[0] - re) * z[0])
                        : (re += (C.o.v * z - re) * z)),
                    e.strokeWidthAnim &&
                      C.sw.propType &&
                      (z.length ? (se += C.sw.v * z[0]) : (se += C.sw.v * z)),
                    e.strokeColorAnim && C.sc.propType)
                  )
                    for (X = 0; X < 3; X += 1)
                      z.length
                        ? (K[X] += (C.sc.v[X] - K[X]) * z[0])
                        : (K[X] += (C.sc.v[X] - K[X]) * z);
                  if (e.fillColorAnim && e.fc) {
                    if (C.fc.propType)
                      for (X = 0; X < 3; X += 1)
                        z.length
                          ? (O[X] += (C.fc.v[X] - O[X]) * z[0])
                          : (O[X] += (C.fc.v[X] - O[X]) * z);
                    C.fh.propType &&
                      (z.length
                        ? (O = addHueToRGB(O, C.fh.v * z[0]))
                        : (O = addHueToRGB(O, C.fh.v * z))),
                      C.fs.propType &&
                        (z.length
                          ? (O = addSaturationToRGB(O, C.fs.v * z[0]))
                          : (O = addSaturationToRGB(O, C.fs.v * z))),
                      C.fb.propType &&
                        (z.length
                          ? (O = addBrightnessToRGB(O, C.fb.v * z[0]))
                          : (O = addBrightnessToRGB(O, C.fb.v * z)));
                  }
                }
                for (E = 0; E < T; E += 1)
                  (C = i[E].a),
                    C.p.propType &&
                      ((S = i[E].s),
                      (z = S.getMult(d[w].anIndexes[E], s.a[E].s.totalChars)),
                      this._hasMaskedPath
                        ? z.length
                          ? n.translate(0, C.p.v[1] * z[0], -C.p.v[2] * z[1])
                          : n.translate(0, C.p.v[1] * z, -C.p.v[2] * z)
                        : z.length
                        ? n.translate(
                            C.p.v[0] * z[0],
                            C.p.v[1] * z[1],
                            -C.p.v[2] * z[2]
                          )
                        : n.translate(
                            C.p.v[0] * z,
                            C.p.v[1] * z,
                            -C.p.v[2] * z
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
                    n.translate(0, r[1] * L * 0.01 + _, 0),
                    this._pathData.p.v)
                  ) {
                    I = (u.point[1] - f.point[1]) / (u.point[0] - f.point[0]);
                    var he = (Math.atan(I) * 180) / Math.PI;
                    u.point[0] < f.point[0] && (he += 180),
                      n.rotate((-he * Math.PI) / 180);
                  }
                  n.translate(G, J, 0),
                    (p -= r[0] * d[w].an * 0.005),
                    d[w + 1] &&
                      B !== d[w + 1].ind &&
                      ((p += d[w].an / 2), (p += e.tr * 0.001 * e.finalSize));
                } else {
                  switch (
                    (n.translate(g, _, 0),
                    e.ps && n.translate(e.ps[0], e.ps[1] + e.ascent, 0),
                    e.j)
                  ) {
                    case 1:
                      n.translate(
                        d[w].animatorJustifyOffset +
                          e.justifyOffset +
                          (e.boxWidth - e.lineWidths[d[w].line]),
                        0,
                        0
                      );
                      break;
                    case 2:
                      n.translate(
                        d[w].animatorJustifyOffset +
                          e.justifyOffset +
                          (e.boxWidth - e.lineWidths[d[w].line]) / 2,
                        0,
                        0
                      );
                      break;
                  }
                  n.translate(0, -e.ls),
                    n.translate(H, 0, 0),
                    n.translate(r[0] * d[w].an * 0.005, r[1] * L * 0.01, 0),
                    (g += d[w].l + e.tr * 0.001 * e.finalSize);
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
              c <= w
                ? ((R = new LetterProps(ne, ae, fe, le, oe, $)),
                  this.renderedLetters.push(R),
                  (c += 1),
                  (this.lettersChangedFlag = !0))
                : ((R = this.renderedLetters[w]),
                  (this.lettersChangedFlag =
                    R.update(ne, ae, fe, le, oe, $) ||
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
            g,
            _ = r.m.g,
            w = 0,
            y = 0,
            d = 0,
            m = [],
            p = 0,
            u = 0,
            b,
            l,
            a = t.getFontByName(e.f),
            h,
            f = 0,
            v = getFontProperties(a);
          (e.fWeight = v.weight),
            (e.fStyle = v.style),
            (e.finalSize = e.s),
            (e.finalText = this.buildFinalText(e.t)),
            (n = e.finalText.length),
            (e.finalLineHeight = e.lh);
          var k = (e.tr / 1e3) * e.finalSize,
            x;
          if (e.sz)
            for (var P = !0, M = e.sz[0], I = e.sz[1], A, V; P; ) {
              (V = this.buildFinalText(e.t)),
                (A = 0),
                (p = 0),
                (n = V.length),
                (k = (e.tr / 1e3) * e.finalSize);
              var F = -1;
              for (s = 0; s < n; s += 1)
                (x = V[s].charCodeAt(0)),
                  (o = !1),
                  V[s] === ' '
                    ? (F = s)
                    : (x === 13 || x === 3) &&
                      ((p = 0),
                      (o = !0),
                      (A += e.finalLineHeight || e.finalSize * 1.2)),
                  t.chars
                    ? ((h = t.getCharData(V[s], a.fStyle, a.fFamily)),
                      (f = o ? 0 : (h.w * e.finalSize) / 100))
                    : (f = t.measureText(V[s], e.f, e.finalSize)),
                  p + f > M && V[s] !== ' '
                    ? (F === -1 ? (n += 1) : (s = F),
                      (A += e.finalLineHeight || e.finalSize * 1.2),
                      V.splice(s, F === s ? 1 : 0, '\r'),
                      (F = -1),
                      (p = 0))
                    : ((p += f), (p += k));
              (A += (a.ascent * e.finalSize) / 100),
                this.canResize && e.finalSize > this.minimumFontSize && I < A
                  ? ((e.finalSize -= 1),
                    (e.finalLineHeight = (e.finalSize * e.lh) / e.s))
                  : ((e.finalText = V), (n = e.finalText.length), (P = !1));
            }
          (p = -k), (f = 0);
          var L = 0,
            D;
          for (s = 0; s < n; s += 1)
            if (
              ((o = !1),
              (D = e.finalText[s]),
              (x = D.charCodeAt(0)),
              x === 13 || x === 3
                ? ((L = 0),
                  m.push(p),
                  (u = p > u ? p : u),
                  (p = -2 * k),
                  (g = ''),
                  (o = !0),
                  (d += 1))
                : (g = D),
              t.chars
                ? ((h = t.getCharData(
                    D,
                    a.fStyle,
                    t.getFontByName(e.f).fFamily
                  )),
                  (f = o ? 0 : (h.w * e.finalSize) / 100))
                : (f = t.measureText(g, e.f, e.finalSize)),
              D === ' ' ? (L += f + k) : ((p += f + k + L), (L = 0)),
              i.push({
                l: f,
                an: f,
                add: w,
                n: o,
                anIndexes: [],
                val: g,
                line: d,
                animatorJustifyOffset: 0,
              }),
              _ == 2)
            ) {
              if (((w += f), g === '' || g === ' ' || s === n - 1)) {
                for ((g === '' || g === ' ') && (w -= f); y <= s; )
                  (i[y].an = w), (i[y].ind = c), (i[y].extra = f), (y += 1);
                (c += 1), (w = 0);
              }
            } else if (_ == 3) {
              if (((w += f), g === '' || s === n - 1)) {
                for (g === '' && (w -= f); y <= s; )
                  (i[y].an = w), (i[y].ind = c), (i[y].extra = f), (y += 1);
                (w = 0), (c += 1);
              }
            } else (i[c].ind = c), (i[c].extra = 0), (c += 1);
          if (((e.l = i), (u = p > u ? p : u), m.push(p), e.sz))
            (e.boxWidth = e.sz[0]), (e.justifyOffset = 0);
          else
            switch (((e.boxWidth = u), e.j)) {
              case 1:
                e.justifyOffset = -e.boxWidth;
                break;
              case 2:
                e.justifyOffset = -e.boxWidth / 2;
                break;
              default:
                e.justifyOffset = 0;
            }
          e.lineWidths = m;
          var C = r.a,
            S,
            E;
          l = C.length;
          var T,
            R,
            z = [];
          for (b = 0; b < l; b += 1) {
            for (
              S = C[b],
                S.a.sc && (e.strokeColorAnim = !0),
                S.a.sw && (e.strokeWidthAnim = !0),
                (S.a.fc || S.a.fh || S.a.fs || S.a.fb) &&
                  (e.fillColorAnim = !0),
                R = 0,
                T = S.s.b,
                s = 0;
              s < n;
              s += 1
            )
              (E = i[s]),
                (E.anIndexes[b] = R),
                ((T == 1 && E.val !== '') ||
                  (T == 2 && E.val !== '' && E.val !== ' ') ||
                  (T == 3 && (E.n || E.val == ' ' || s == n - 1)) ||
                  (T == 4 && (E.n || s == n - 1))) &&
                  (S.s.rn === 1 && z.push(R), (R += 1));
            r.a[b].s.totalChars = R;
            var B = -1,
              H;
            if (S.s.rn === 1)
              for (s = 0; s < n; s += 1)
                (E = i[s]),
                  B != E.anIndexes[b] &&
                    ((B = E.anIndexes[b]),
                    (H = z.splice(Math.floor(Math.random() * z.length), 1)[0])),
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
                g = 1,
                _ = 1;
              this.ne.v > 0 ? (o = this.ne.v / 100) : (c = -this.ne.v / 100),
                this.xe.v > 0
                  ? (g = 1 - this.xe.v / 100)
                  : (_ = 1 + this.xe.v / 100);
              var w = BezierFactory.getBezierEasing(o, c, g, _).get,
                y = 0,
                d = this.finalS,
                m = this.finalE,
                p = this.data.sh;
              if (p === 2)
                m === d
                  ? (y = n >= m ? 1 : 0)
                  : (y = e(0, t(0.5 / (m - d) + (n - d) / (m - d), 1))),
                  (y = w(y));
              else if (p === 3)
                m === d
                  ? (y = n >= m ? 0 : 1)
                  : (y = 1 - e(0, t(0.5 / (m - d) + (n - d) / (m - d), 1))),
                  (y = w(y));
              else if (p === 4)
                m === d
                  ? (y = 0)
                  : ((y = e(0, t(0.5 / (m - d) + (n - d) / (m - d), 1))),
                    y < 0.5 ? (y *= 2) : (y = 1 - 2 * (y - 0.5))),
                  (y = w(y));
              else if (p === 5) {
                if (m === d) y = 0;
                else {
                  var u = m - d;
                  n = t(e(0, n + 0.5 - d), m - d);
                  var b = -u / 2 + n,
                    l = u / 2;
                  y = Math.sqrt(1 - (b * b) / (l * l));
                }
                y = w(y);
              } else
                p === 6
                  ? (m === d
                      ? (y = 0)
                      : ((n = t(e(0, n + 0.5 - d), m - d)),
                        (y =
                          (1 +
                            Math.cos(Math.PI + (Math.PI * 2 * n) / (m - d))) /
                          2)),
                    (y = w(y)))
                  : (n >= r(d) &&
                      (n - d < 0
                        ? (y = e(0, t(t(m, 1) - (d - n), 1)))
                        : (y = e(0, t(m - n, 1)))),
                    (y = w(y)));
              if (this.sm.v !== 100) {
                var a = this.sm.v * 0.01;
                a === 0 && (a = 1e-8);
                var h = 0.5 - a * 0.5;
                y < h ? (y = 0) : ((y = (y - h) / a), y > 1 && (y = 1));
              }
              return y * this.a.v;
            },
            getValue: function (n) {
              this.iterateDynamicProperties(),
                (this._mdf = n || this._mdf),
                (this._currentTextLength =
                  this.elem.textProperty.currentData.l.length || 0),
                n && this.data.r === 2 && (this.e.v = this._currentTextLength);
              var o = this.data.r === 2 ? 1 : 100 / this.data.totalChars,
                c = this.o.v / o,
                g = this.s.v / o + c,
                _ = this.e.v / o + c;
              if (g > _) {
                var w = g;
                (g = _), (_ = w);
              }
              (this.finalS = g), (this.finalE = _);
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
              o = { newElement: c, release: g };
            function c() {
              var _;
              return i ? ((i -= 1), (_ = n[i])) : (_ = t()), _;
            }
            function g(_) {
              i === s && ((n = pooling.double(n)), (s *= 2)),
                r && r(_),
                (n[i] = _),
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
              g = o._length;
            for (c = 0; c < g; c += 1) shapePool.release(o.shapes[c]);
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
              } catch (o) {
                try {
                  n.payload = e(t[i].cm);
                } catch (c) {
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
        var g = createNS('g');
        this.svgElement.appendChild(g),
          (this.layerElement = g),
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
              g = o.substr(4);
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
              g === 'YMid' &&
              ((i > r && n === 'meet') || (i < r && n === 'slice'))
                ? (this.transformCanvas.ty =
                    ((t -
                      this.transformCanvas.h * (e / this.transformCanvas.w)) /
                      2) *
                    this.renderConfig.dpr)
                : g === 'YMax' &&
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
          var g = {
            container: n,
            perspectiveElem: r,
            startPos: e,
            endPos: e,
            type: t,
          };
          return this.threeDElements.push(g), g;
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
          var g = this.resizerElem.style;
          (g.webkitTransform =
            'matrix3d(' +
            s +
            ',0,0,0,0,' +
            n +
            ',0,0,0,0,1,0,' +
            o +
            ',' +
            c +
            ',0,1)'),
            (g.transform = g.webkitTransform);
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
          g = 0,
          _ = [],
          w,
          y,
          d = createElementID(),
          m,
          p,
          u,
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
            (c[s].mode === 's' || c[s].mode === 'i') && g === 0
              ? ((m = createNS('rect')),
                m.setAttribute('fill', '#ffffff'),
                m.setAttribute('width', this.element.comp.data.w || 0),
                m.setAttribute('height', this.element.comp.data.h || 0),
                _.push(m))
              : (m = null),
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
            (g += 1),
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
                  (u = createNS('feMorphology')),
                  u.setAttribute('operator', 'erode'),
                  u.setAttribute('in', 'SourceGraphic'),
                  u.setAttribute('radius', '0'),
                  p.appendChild(u),
                  i.appendChild(p),
                  o.setAttribute(
                    'stroke',
                    c[s].mode === 's' ? '#000000' : '#ffffff'
                  ))
                : ((u = null), (b = null)),
              (this.storedData[s] = {
                elem: o,
                x: b,
                expan: u,
                lastPath: '',
                lastOperator: '',
                filterId: h,
                lastRadius: 0,
              }),
              c[s].mode === 'i')
            ) {
              y = _.length;
              var f = createNS('g');
              for (w = 0; w < y; w += 1) f.appendChild(_[w]);
              var v = createNS('mask');
              v.setAttribute('mask-type', 'alpha'),
                v.setAttribute('id', d + '_' + g),
                v.appendChild(o),
                i.appendChild(v),
                f.setAttribute(
                  'mask',
                  'url(' + locationHref + '#' + d + '_' + g + ')'
                ),
                (_.length = 0),
                _.push(f);
            } else _.push(o);
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
                invRect: m,
              }),
              this.viewData[s].prop.k ||
                this.drawPath(c[s], this.viewData[s].prop.v, this.viewData[s]);
          }
        for (this.maskElement = createNS(l), n = _.length, s = 0; s < n; s += 1)
          this.maskElement.appendChild(_[s]);
        g > 0 &&
          (this.maskElement.setAttribute('id', d),
          this.element.maskedElement.setAttribute(
            a,
            'url(' + locationHref + '#' + d + ')'
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
              g = createElementID();
            n.setAttribute('id', g);
            var _ = createNS(e.t === 1 ? 'linearGradient' : 'radialGradient');
            _.setAttribute('id', c),
              _.setAttribute('spreadMethod', 'pad'),
              _.setAttribute('gradientUnits', 'userSpaceOnUse'),
              (s = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length);
            var w = this.stops;
            for (i = e.g.p * 4; i < s; i += 2)
              (r = createNS('stop')),
                r.setAttribute('stop-color', 'rgb(255,255,255)'),
                _.appendChild(r),
                w.push(r);
            o.setAttribute(
              e.ty === 'gf' ? 'fill' : 'stroke',
              'url(' + locationHref + '#' + c + ')'
            ),
              e.ty === 'gs' &&
                (o.setAttribute('stroke-linecap', lineCapEnum[e.lc || 2]),
                o.setAttribute('stroke-linejoin', lineJoinEnum[e.lj || 2]),
                e.lj === 1 && o.setAttribute('stroke-miterlimit', e.ml)),
              (this.of = _),
              (this.ms = n),
              (this.ost = w),
              (this.maskId = g),
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
        function i(w) {
          switch (w.ty) {
            case 'fl':
              return o;
            case 'gf':
              return g;
            case 'gs':
              return c;
            case 'st':
              return _;
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
        function s(w, y, d) {
          (d || y.transform.op._mdf) &&
            y.transform.container.setAttribute('opacity', y.transform.op.v),
            (d || y.transform.mProps._mdf) &&
              y.transform.container.setAttribute(
                'transform',
                y.transform.mProps.v.to2dCSS()
              );
        }
        function n(w, y, d) {
          var m,
            p,
            u,
            b,
            l,
            a,
            h = y.styles.length,
            f = y.lvl,
            v,
            k,
            x,
            P,
            M;
          for (a = 0; a < h; a += 1) {
            if (((b = y.sh._mdf || d), y.styles[a].lvl < f)) {
              for (
                k = t.reset(),
                  P = f - y.styles[a].lvl,
                  M = y.transformers.length - 1;
                !b && P > 0;

              )
                (b = y.transformers[M].mProps._mdf || b), (P -= 1), (M -= 1);
              if (b)
                for (
                  P = f - y.styles[a].lvl, M = y.transformers.length - 1;
                  P > 0;

                )
                  (x = y.transformers[M].mProps.v.props),
                    k.transform(
                      x[0],
                      x[1],
                      x[2],
                      x[3],
                      x[4],
                      x[5],
                      x[6],
                      x[7],
                      x[8],
                      x[9],
                      x[10],
                      x[11],
                      x[12],
                      x[13],
                      x[14],
                      x[15]
                    ),
                    (P -= 1),
                    (M -= 1);
            } else k = e;
            if (((v = y.sh.paths), (p = v._length), b)) {
              for (u = '', m = 0; m < p; m += 1)
                (l = v.shapes[m]),
                  l &&
                    l._length &&
                    (u += buildShapeString(l, l._length, l.c, k));
              y.caches[a] = u;
            } else u = y.caches[a];
            (y.styles[a].d += w.hd === !0 ? '' : u),
              (y.styles[a]._mdf = b || y.styles[a]._mdf);
          }
        }
        function o(w, y, d) {
          var m = y.style;
          (y.c._mdf || d) &&
            m.pElem.setAttribute(
              'fill',
              'rgb(' +
                bmFloor(y.c.v[0]) +
                ',' +
                bmFloor(y.c.v[1]) +
                ',' +
                bmFloor(y.c.v[2]) +
                ')'
            ),
            (y.o._mdf || d) && m.pElem.setAttribute('fill-opacity', y.o.v);
        }
        function c(w, y, d) {
          g(w, y, d), _(w, y, d);
        }
        function g(w, y, d) {
          var m = y.gf,
            p = y.g._hasOpacity,
            u = y.s.v,
            b = y.e.v;
          if (y.o._mdf || d) {
            var l = w.ty === 'gf' ? 'fill-opacity' : 'stroke-opacity';
            y.style.pElem.setAttribute(l, y.o.v);
          }
          if (y.s._mdf || d) {
            var a = w.t === 1 ? 'x1' : 'cx',
              h = a === 'x1' ? 'y1' : 'cy';
            m.setAttribute(a, u[0]),
              m.setAttribute(h, u[1]),
              p &&
                !y.g._collapsable &&
                (y.of.setAttribute(a, u[0]), y.of.setAttribute(h, u[1]));
          }
          var f, v, k, x;
          if (y.g._cmdf || d) {
            f = y.cst;
            var P = y.g.c;
            for (k = f.length, v = 0; v < k; v += 1)
              (x = f[v]),
                x.setAttribute('offset', P[v * 4] + '%'),
                x.setAttribute(
                  'stop-color',
                  'rgb(' +
                    P[v * 4 + 1] +
                    ',' +
                    P[v * 4 + 2] +
                    ',' +
                    P[v * 4 + 3] +
                    ')'
                );
          }
          if (p && (y.g._omdf || d)) {
            var M = y.g.o;
            for (
              y.g._collapsable ? (f = y.cst) : (f = y.ost), k = f.length, v = 0;
              v < k;
              v += 1
            )
              (x = f[v]),
                y.g._collapsable || x.setAttribute('offset', M[v * 2] + '%'),
                x.setAttribute('stop-opacity', M[v * 2 + 1]);
          }
          if (w.t === 1)
            (y.e._mdf || d) &&
              (m.setAttribute('x2', b[0]),
              m.setAttribute('y2', b[1]),
              p &&
                !y.g._collapsable &&
                (y.of.setAttribute('x2', b[0]), y.of.setAttribute('y2', b[1])));
          else {
            var I;
            if (
              ((y.s._mdf || y.e._mdf || d) &&
                ((I = Math.sqrt(
                  Math.pow(u[0] - b[0], 2) + Math.pow(u[1] - b[1], 2)
                )),
                m.setAttribute('r', I),
                p && !y.g._collapsable && y.of.setAttribute('r', I)),
              y.e._mdf || y.h._mdf || y.a._mdf || d)
            ) {
              I ||
                (I = Math.sqrt(
                  Math.pow(u[0] - b[0], 2) + Math.pow(u[1] - b[1], 2)
                ));
              var A = Math.atan2(b[1] - u[1], b[0] - u[0]),
                V = y.h.v;
              V >= 1 ? (V = 0.99) : V <= -1 && (V = -0.99);
              var F = I * V,
                L = Math.cos(A + y.a.v) * F + u[0],
                D = Math.sin(A + y.a.v) * F + u[1];
              m.setAttribute('fx', L),
                m.setAttribute('fy', D),
                p &&
                  !y.g._collapsable &&
                  (y.of.setAttribute('fx', L), y.of.setAttribute('fy', D));
            }
          }
        }
        function _(w, y, d) {
          var m = y.style,
            p = y.d;
          p &&
            (p._mdf || d) &&
            p.dashStr &&
            (m.pElem.setAttribute('stroke-dasharray', p.dashStr),
            m.pElem.setAttribute('stroke-dashoffset', p.dashoffset[0])),
            y.c &&
              (y.c._mdf || d) &&
              m.pElem.setAttribute(
                'stroke',
                'rgb(' +
                  bmFloor(y.c.v[0]) +
                  ',' +
                  bmFloor(y.c.v[1]) +
                  ',' +
                  bmFloor(y.c.v[2]) +
                  ')'
              ),
            (y.o._mdf || d) && m.pElem.setAttribute('stroke-opacity', y.o.v),
            (y.w._mdf || d) &&
              (m.pElem.setAttribute('stroke-width', y.w.v),
              m.msElem && m.msElem.setAttribute('stroke-width', y.w.v));
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
              var g = createNS('feFuncA');
              g.setAttribute('type', 'table'),
                g.setAttribute('tableValues', '1.0 0.0'),
                c.appendChild(g),
                this.globalData.defs.appendChild(r);
              var _ = createNS('rect');
              _.setAttribute('width', this.comp.data.w),
                _.setAttribute('height', this.comp.data.h),
                _.setAttribute('x', '0'),
                _.setAttribute('y', '0'),
                _.setAttribute('fill', '#ffffff'),
                _.setAttribute('opacity', '0'),
                o.setAttribute('filter', 'url(' + locationHref + '#' + t + ')'),
                o.appendChild(_),
                o.appendChild(this.layerElement),
                (e = o),
                featureSupport.maskType ||
                  (n.setAttribute('mask-type', 'luminance'),
                  r.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                  (i = createNS('g')),
                  o.appendChild(_),
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
            var w = createNS('clipPath'),
              y = createNS('path');
            y.setAttribute(
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
            var d = createElementID();
            if (
              (w.setAttribute('id', d),
              w.appendChild(y),
              this.globalData.defs.appendChild(w),
              this.checkMasks())
            ) {
              var m = createNS('g');
              m.setAttribute(
                'clip-path',
                'url(' + locationHref + '#' + d + ')'
              ),
                m.appendChild(this.layerElement),
                (this.transformedElement = m),
                e
                  ? e.appendChild(this.transformedElement)
                  : (this.baseElement = this.transformedElement);
            } else
              this.layerElement.setAttribute(
                'clip-path',
                'url(' + locationHref + '#' + d + ')'
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
          var g,
            _ = this.mHelper,
            w,
            y = '',
            d = this.data.singleShape,
            m = 0,
            p = 0,
            u = !0,
            b = r.tr * 0.001 * r.finalSize;
          if (d && !c && !r.sz) {
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
              (g = this.textSpans[e] || createNS('tspan')),
                (g.textContent = h[e]),
                g.setAttribute('x', 0),
                g.setAttribute('y', p),
                (g.style.display = 'inherit'),
                l.appendChild(g),
                (this.textSpans[e] = g),
                (p += r.finalLineHeight);
            this.layerElement.appendChild(l);
          } else {
            var f = this.textSpans.length,
              v,
              k;
            for (e = 0; e < t; e += 1)
              (!c || !d || e === 0) &&
                ((g =
                  f > e ? this.textSpans[e] : createNS(c ? 'path' : 'text')),
                f <= e &&
                  (g.setAttribute('stroke-linecap', 'butt'),
                  g.setAttribute('stroke-linejoin', 'round'),
                  g.setAttribute('stroke-miterlimit', '4'),
                  (this.textSpans[e] = g),
                  this.layerElement.appendChild(g)),
                (g.style.display = 'inherit')),
                _.reset(),
                _.scale(r.finalSize / 100, r.finalSize / 100),
                d &&
                  (o[e].n &&
                    ((m = -b), (p += r.yOffset), (p += u ? 1 : 0), (u = !1)),
                  this.applyTextPropertiesToMatrix(r, _, o[e].line, m, p),
                  (m += o[e].l || 0),
                  (m += b)),
                c
                  ? ((k = this.globalData.fontManager.getCharData(
                      r.finalText[e],
                      i.fStyle,
                      this.globalData.fontManager.getFontByName(r.f).fFamily
                    )),
                    (v = (k && k.data) || {}),
                    (w = v.shapes ? v.shapes[0].it : []),
                    d
                      ? (y += this.createPathShape(_, w))
                      : g.setAttribute('d', this.createPathShape(_, w)))
                  : (d &&
                      g.setAttribute(
                        'transform',
                        'translate(' + _.props[12] + ',' + _.props[13] + ')'
                      ),
                    (g.textContent = o[e].val),
                    g.setAttributeNS(
                      'http://www.w3.org/XML/1998/namespace',
                      'xml:space',
                      'preserve'
                    ));
            d && g && g.setAttribute('d', y);
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
            g,
            _ = e.length - 1,
            w,
            y,
            d = [],
            m = [],
            p,
            u,
            b;
          for (g = _; g >= 0; g -= 1) {
            if (
              ((b = this.searchProcessedElement(e[g])),
              b ? (t[g] = r[b - 1]) : (e[g]._render = o),
              e[g].ty === 'fl' ||
                e[g].ty === 'st' ||
                e[g].ty === 'gf' ||
                e[g].ty === 'gs')
            )
              b
                ? (t[g].style.closed = !1)
                : (t[g] = this.createStyleElement(e[g], s)),
                e[g]._render &&
                  t[g].style.pElem.parentNode !== i &&
                  i.appendChild(t[g].style.pElem),
                d.push(t[g].style);
            else if (e[g].ty === 'gr') {
              if (!b) t[g] = this.createGroupElement(e[g]);
              else
                for (y = t[g].it.length, w = 0; w < y; w += 1)
                  t[g].prevViewData[w] = t[g].it[w];
              this.searchShapes(
                e[g].it,
                t[g].it,
                t[g].prevViewData,
                t[g].gr,
                s + 1,
                c,
                o
              ),
                e[g]._render &&
                  t[g].gr.parentNode !== i &&
                  i.appendChild(t[g].gr);
            } else
              e[g].ty === 'tr'
                ? (b || (t[g] = this.createTransformElement(e[g], i)),
                  (p = t[g].transform),
                  c.push(p))
                : e[g].ty === 'sh' ||
                  e[g].ty === 'rc' ||
                  e[g].ty === 'el' ||
                  e[g].ty === 'sr'
                ? (b || (t[g] = this.createShapeElement(e[g], c, s)),
                  this.setElementStyles(t[g]))
                : e[g].ty === 'tm' ||
                  e[g].ty === 'rd' ||
                  e[g].ty === 'ms' ||
                  e[g].ty === 'pb'
                ? (b
                    ? ((u = t[g]), (u.closed = !1))
                    : ((u = ShapeModifiers.getModifier(e[g].ty)),
                      u.init(this, e[g]),
                      (t[g] = u),
                      this.shapeModifiers.push(u)),
                  m.push(u))
                : e[g].ty === 'rp' &&
                  (b
                    ? ((u = t[g]), (u.closed = !0))
                    : ((u = ShapeModifiers.getModifier(e[g].ty)),
                      (t[g] = u),
                      u.init(this, e, g, t),
                      this.shapeModifiers.push(u),
                      (o = !1)),
                  m.push(u));
            this.addProcessedElement(e[g], g + 1);
          }
          for (_ = d.length, g = 0; g < _; g += 1) d[g].closed = !0;
          for (_ = m.length, g = 0; g < _; g += 1) m[g].closed = !0;
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
                  g = s.getTotalLength();
                n = '0 0 0 ' + g * o + ' ';
                var _ = g * (c - o),
                  w =
                    1 +
                    this.filterManager.effectElements[4].p.v *
                      2 *
                      this.filterManager.effectElements[9].p.v *
                      0.01,
                  y = Math.floor(_ / w),
                  d;
                for (d = 0; d < y; d += 1)
                  n +=
                    '1 ' +
                    this.filterManager.effectElements[4].p.v *
                      2 *
                      this.filterManager.effectElements[9].p.v *
                      0.01 +
                    ' ';
                n += '0 ' + g * 10 + ' 0 0';
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
            var m = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute(
              'stroke',
              'rgb(' +
                bmFloor(m[0] * 255) +
                ',' +
                bmFloor(m[1] * 255) +
                ',' +
                bmFloor(m[2] * 255) +
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
              g = Math.min(e, t),
              _ = Math.max(e, t),
              w = Array.call(null, { length: o }),
              y,
              d = 0,
              m = s - i,
              p = t - e;
            n <= 256;

          )
            (c = n / 256),
              c <= g
                ? (y = p < 0 ? s : i)
                : c >= _
                ? (y = p < 0 ? i : s)
                : (y = i + m * Math.pow((c - e) / p, 1 / r)),
              (w[d] = y),
              (d += 1),
              (n += 256 / (o - 1));
          return w.join(' ');
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
        var g;
        (g = createNS('feMergeNode')),
          c.appendChild(g),
          (g = createNS('feMergeNode')),
          g.setAttribute('in', 'SourceGraphic'),
          (this.feMergeNode = g),
          (this.feMerge = c),
          (this.originalNodeAdded = !1),
          c.appendChild(g);
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
              g =
                this.assetData.pr ||
                this.globalData.renderConfig.imagePreserveAspectRatio;
            (s > n && g === 'xMidYMid slice') ||
            (s < n && g !== 'xMidYMid slice')
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
                g = o._length;
              for (c = 1; c < g; c += 1)
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
            g,
            _ = [],
            w = [],
            y,
            d,
            m,
            p = [].concat(s);
          for (n = o; n >= 0; n -= 1) {
            if (
              ((y = this.searchProcessedElement(e[n])),
              y ? (t[n] = r[y - 1]) : (e[n]._shouldRender = i),
              e[n].ty === 'fl' ||
                e[n].ty === 'st' ||
                e[n].ty === 'gf' ||
                e[n].ty === 'gs')
            )
              y
                ? (t[n].style.closed = !1)
                : (t[n] = this.createStyleElement(e[n], p)),
                _.push(t[n].style);
            else if (e[n].ty === 'gr') {
              if (!y) t[n] = this.createGroupElement(e[n]);
              else
                for (g = t[n].it.length, c = 0; c < g; c += 1)
                  t[n].prevViewData[c] = t[n].it[c];
              this.searchShapes(e[n].it, t[n].it, t[n].prevViewData, i, p);
            } else
              e[n].ty === 'tr'
                ? (y || ((m = this.createTransformElement(e[n])), (t[n] = m)),
                  p.push(t[n]),
                  this.addTransformToStyleList(t[n]))
                : e[n].ty === 'sh' ||
                  e[n].ty === 'rc' ||
                  e[n].ty === 'el' ||
                  e[n].ty === 'sr'
                ? y || (t[n] = this.createShapeElement(e[n]))
                : e[n].ty === 'tm' || e[n].ty === 'rd' || e[n].ty === 'pb'
                ? (y
                    ? ((d = t[n]), (d.closed = !1))
                    : ((d = ShapeModifiers.getModifier(e[n].ty)),
                      d.init(this, e[n]),
                      (t[n] = d),
                      this.shapeModifiers.push(d)),
                  w.push(d))
                : e[n].ty === 'rp' &&
                  (y
                    ? ((d = t[n]), (d.closed = !0))
                    : ((d = ShapeModifiers.getModifier(e[n].ty)),
                      (t[n] = d),
                      d.init(this, e, n, t),
                      this.shapeModifiers.push(d),
                      (i = !1)),
                  w.push(d));
            this.addProcessedElement(e[n], n + 1);
          }
          for (
            this.removeTransformFromStyleList(),
              this.closeStyles(_),
              o = w.length,
              n = 0;
            n < o;
            n += 1
          )
            w[n].closed = !0;
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
            g = this.globalData.renderer,
            _ = this.globalData.canvasContext,
            w,
            y;
          for (e = 0; e < t; e += 1)
            if (
              ((y = this.stylesList[e]),
              (w = y.type),
              !(
                ((w === 'st' || w === 'gs') && y.wi === 0) ||
                !y.data._shouldRender ||
                y.coOp === 0 ||
                this.globalData.currentGlobalAlpha === 0
              ))
            ) {
              for (
                g.save(),
                  o = y.elements,
                  w === 'st' || w === 'gs'
                    ? ((_.strokeStyle = w === 'st' ? y.co : y.grd),
                      (_.lineWidth = y.wi),
                      (_.lineCap = y.lc),
                      (_.lineJoin = y.lj),
                      (_.miterLimit = y.ml || 0))
                    : (_.fillStyle = w === 'fl' ? y.co : y.grd),
                  g.ctxOpacity(y.coOp),
                  w !== 'st' && w !== 'gs' && _.beginPath(),
                  g.ctxTransform(y.preTransforms.finalTransform.props),
                  i = o.length,
                  r = 0;
                r < i;
                r += 1
              ) {
                for (
                  (w === 'st' || w === 'gs') &&
                    (_.beginPath(),
                    y.da && (_.setLineDash(y.da), (_.lineDashOffset = y.do))),
                    c = o[r].trNodes,
                    n = c.length,
                    s = 0;
                  s < n;
                  s += 1
                )
                  c[s].t === 'm'
                    ? _.moveTo(c[s].p[0], c[s].p[1])
                    : c[s].t === 'c'
                    ? _.bezierCurveTo(
                        c[s].pts[0],
                        c[s].pts[1],
                        c[s].pts[2],
                        c[s].pts[3],
                        c[s].pts[4],
                        c[s].pts[5]
                      )
                    : _.closePath();
                (w === 'st' || w === 'gs') &&
                  (_.stroke(), y.da && _.setLineDash(this.dashResetter));
              }
              w !== 'st' && w !== 'gs' && _.fill(y.r), g.restore();
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
              : t[s].ty;
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
            var g = e.transforms.finalTransform;
            for (o = 0; o < c; o += 1) {
              var _ = i.shapes[o];
              if (_ && _.v) {
                for (n = _._length, s = 1; s < n; s += 1)
                  s === 1 &&
                    r.push({
                      t: 'm',
                      p: g.applyToPointArray(_.v[0][0], _.v[0][1], 0),
                    }),
                    r.push({
                      t: 'c',
                      pts: g.applyToTriplePoints(_.o[s - 1], _.i[s], _.v[s]),
                    });
                n === 1 &&
                  r.push({
                    t: 'm',
                    p: g.applyToPointArray(_.v[0][0], _.v[0][1], 0),
                  }),
                  _.c &&
                    n &&
                    (r.push({
                      t: 'c',
                      pts: g.applyToTriplePoints(_.o[s - 1], _.i[0], _.v[0]),
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
              var g = Math.sqrt(
                  Math.pow(o[0] - c[0], 2) + Math.pow(o[1] - c[1], 2)
                ),
                _ = Math.atan2(c[1] - o[1], c[0] - o[0]),
                w = t.h.v;
              w >= 1 ? (w = 0.99) : w <= -1 && (w = -0.99);
              var y = g * w,
                d = Math.cos(_ + t.a.v) * y + o[0],
                m = Math.sin(_ + t.a.v) * y + o[1];
              s = n.createRadialGradient(d, m, 0, o[0], o[1], g);
            }
            var p,
              u = e.g.p,
              b = t.g.c,
              l = 1;
            for (p = 0; p < u; p += 1)
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
          var g,
            _,
            w,
            y,
            d,
            m,
            p,
            u,
            b,
            l,
            a = this.data.singleShape,
            h = e.tr * 0.001 * e.finalSize,
            f = 0,
            v = 0,
            k = !0,
            x = 0;
          for (s = 0; s < n; s += 1) {
            for (
              g = this.globalData.fontManager.getCharData(
                e.finalText[s],
                i.fStyle,
                this.globalData.fontManager.getFontByName(e.f).fFamily
              ),
                _ = (g && g.data) || {},
                c.reset(),
                a &&
                  o[s].n &&
                  ((f = -h), (v += e.yOffset), (v += k ? 1 : 0), (k = !1)),
                d = _.shapes ? _.shapes[0].it : [],
                p = d.length,
                c.scale(e.finalSize / 100, e.finalSize / 100),
                a && this.applyTextPropertiesToMatrix(e, c, o[s].line, f, v),
                b = createSizedArray(p),
                m = 0;
              m < p;
              m += 1
            ) {
              for (
                y = d[m].ks.k.i.length, u = d[m].ks.k, l = [], w = 1;
                w < y;
                w += 1
              )
                w === 1 &&
                  l.push(
                    c.applyToX(u.v[0][0], u.v[0][1], 0),
                    c.applyToY(u.v[0][0], u.v[0][1], 0)
                  ),
                  l.push(
                    c.applyToX(u.o[w - 1][0], u.o[w - 1][1], 0),
                    c.applyToY(u.o[w - 1][0], u.o[w - 1][1], 0),
                    c.applyToX(u.i[w][0], u.i[w][1], 0),
                    c.applyToY(u.i[w][0], u.i[w][1], 0),
                    c.applyToX(u.v[w][0], u.v[w][1], 0),
                    c.applyToY(u.v[w][0], u.v[w][1], 0)
                  );
              l.push(
                c.applyToX(u.o[w - 1][0], u.o[w - 1][1], 0),
                c.applyToY(u.o[w - 1][0], u.o[w - 1][1], 0),
                c.applyToX(u.i[0][0], u.i[0][1], 0),
                c.applyToY(u.i[0][0], u.i[0][1], 0),
                c.applyToX(u.v[0][0], u.v[0][1], 0),
                c.applyToY(u.v[0][0], u.v[0][1], 0)
              ),
                (b[m] = l);
            }
            a && ((f += o[s].l), (f += h)),
              this.textSpans[x]
                ? (this.textSpans[x].elem = b)
                : (this.textSpans[x] = { elem: b }),
              (x += 1);
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
            g = this.textProperty.currentData.l;
          r = g.length;
          var _,
            w = null,
            y = null,
            d = null,
            m,
            p;
          for (t = 0; t < r; t += 1)
            if (!g[t].n) {
              if (
                ((_ = c[t]),
                _ &&
                  (this.globalData.renderer.save(),
                  this.globalData.renderer.ctxTransform(_.p),
                  this.globalData.renderer.ctxOpacity(_.o)),
                this.fill)
              ) {
                for (
                  _ && _.fc
                    ? w !== _.fc && ((w = _.fc), (e.fillStyle = _.fc))
                    : w !== this.values.fill &&
                      ((w = this.values.fill),
                      (e.fillStyle = this.values.fill)),
                    m = this.textSpans[t].elem,
                    s = m.length,
                    this.globalData.canvasContext.beginPath(),
                    i = 0;
                  i < s;
                  i += 1
                )
                  for (
                    p = m[i],
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
                  _ && _.sw
                    ? d !== _.sw && ((d = _.sw), (e.lineWidth = _.sw))
                    : d !== this.values.sWidth &&
                      ((d = this.values.sWidth),
                      (e.lineWidth = this.values.sWidth)),
                    _ && _.sc
                      ? y !== _.sc && ((y = _.sc), (e.strokeStyle = _.sc))
                      : y !== this.values.stroke &&
                        ((y = this.values.stroke),
                        (e.strokeStyle = this.values.stroke)),
                    m = this.textSpans[t].elem,
                    s = m.length,
                    this.globalData.canvasContext.beginPath(),
                    i = 0;
                  i < s;
                  i += 1
                )
                  for (
                    p = m[i],
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
              _ && this.globalData.renderer.restore();
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
            g,
            _;
          if (!(n <= 1)) {
            for (s = 0; s < n - 1; s += 1)
              (o = this.getTransformedPoint(i, r.v[s])),
                (c = this.getTransformedPoint(i, r.o[s])),
                (g = this.getTransformedPoint(i, r.i[s + 1])),
                (_ = this.getTransformedPoint(i, r.v[s + 1])),
                this.checkBounds(o, c, g, _, t);
            r.c &&
              ((o = this.getTransformedPoint(i, r.v[s])),
              (c = this.getTransformedPoint(i, r.o[s])),
              (g = this.getTransformedPoint(i, r.i[0])),
              (_ = this.getTransformedPoint(i, r.v[0])),
              this.checkBounds(o, c, g, _, t));
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
              g,
              _,
              w,
              y,
              d = 0;
            d < 2;
            ++d
          )
            (o = 6 * e[d] - 12 * t[d] + 6 * r[d]),
              (n = -3 * e[d] + 9 * t[d] - 9 * r[d] + 3 * i[d]),
              (c = 3 * t[d] - 3 * e[d]),
              (o |= 0),
              (n |= 0),
              (c |= 0),
              (n === 0 && o === 0) ||
                (n === 0
                  ? ((g = -c / o),
                    g > 0 &&
                      g < 1 &&
                      s[d].push(this.calculateF(g, e, t, r, i, d)))
                  : ((_ = o * o - 4 * c * n),
                    _ >= 0 &&
                      ((w = (-o + bmSqrt(_)) / (2 * n)),
                      w > 0 &&
                        w < 1 &&
                        s[d].push(this.calculateF(w, e, t, r, i, d)),
                      (y = (-o - bmSqrt(_)) / (2 * n)),
                      y > 0 &&
                        y < 1 &&
                        s[d].push(this.calculateF(y, e, t, r, i, d)))));
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
            g = e.l;
          c = g.length;
          var _,
            w,
            y,
            d = this.mHelper,
            m,
            p = '',
            u = 0;
          for (o = 0; o < c; o += 1) {
            if (
              (this.globalData.fontManager.chars
                ? (this.textPaths[u]
                    ? (_ = this.textPaths[u])
                    : ((_ = createNS('path')),
                      _.setAttribute('stroke-linecap', lineCapEnum[1]),
                      _.setAttribute('stroke-linejoin', lineJoinEnum[2]),
                      _.setAttribute('stroke-miterlimit', '4')),
                  this.isMasked ||
                    (this.textSpans[u]
                      ? ((w = this.textSpans[u]), (y = w.children[0]))
                      : ((w = createTag('div')),
                        (w.style.lineHeight = 0),
                        (y = createNS('svg')),
                        y.appendChild(_),
                        styleDiv(w))))
                : this.isMasked
                ? (_ = this.textPaths[u] ? this.textPaths[u] : createNS('text'))
                : this.textSpans[u]
                ? ((w = this.textSpans[u]), (_ = this.textPaths[u]))
                : ((w = createTag('span')),
                  styleDiv(w),
                  (_ = createTag('span')),
                  styleDiv(_),
                  w.appendChild(_)),
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
                d.reset(),
                l &&
                  l.shapes &&
                  ((m = l.shapes[0].it),
                  d.scale(e.finalSize / 100, e.finalSize / 100),
                  (p = this.createPathShape(d, m)),
                  _.setAttribute('d', p)),
                this.isMasked)
              )
                this.innerElem.appendChild(_);
              else {
                if ((this.innerElem.appendChild(w), l && l.shapes)) {
                  document.body.appendChild(y);
                  var a = y.getBBox();
                  y.setAttribute('width', a.width + 2),
                    y.setAttribute('height', a.height + 2),
                    y.setAttribute(
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
                  var h = y.style,
                    f = 'translate(' + (a.x - 1) + 'px,' + (a.y - 1) + 'px)';
                  (h.transform = f),
                    (h.webkitTransform = f),
                    (g[o].yOffset = a.y - 1);
                } else y.setAttribute('width', 1), y.setAttribute('height', 1);
                w.appendChild(y);
              }
            } else if (
              ((_.textContent = g[o].val),
              _.setAttributeNS(
                'http://www.w3.org/XML/1998/namespace',
                'xml:space',
                'preserve'
              ),
              this.isMasked)
            )
              this.innerElem.appendChild(_);
            else {
              this.innerElem.appendChild(w);
              var v = _.style,
                k = 'translate3d(0,' + -e.finalSize / 1.2 + 'px,0)';
              (v.transform = k), (v.webkitTransform = k);
            }
            this.isMasked ? (this.textSpans[u] = _) : (this.textSpans[u] = w),
              (this.textSpans[u].style.display = 'block'),
              (this.textPaths[u] = _),
              (u += 1);
          }
          for (; u < this.textSpans.length; )
            (this.textSpans[u].style.display = 'none'), (u += 1);
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
            var c, g, _;
            for (r = 0; r < i; r += 1)
              o[r].n
                ? (s += 1)
                : ((g = this.textSpans[r]),
                  (_ = this.textPaths[r]),
                  (c = n[s]),
                  (s += 1),
                  c._mdf.m &&
                    (this.isMasked
                      ? g.setAttribute('transform', c.m)
                      : ((g.style.webkitTransform = c.m),
                        (g.style.transform = c.m))),
                  (g.style.opacity = c.o),
                  c.sw && c._mdf.sw && _.setAttribute('stroke-width', c.sw),
                  c.sc && c._mdf.sc && _.setAttribute('stroke', c.sc),
                  c.fc &&
                    c._mdf.fc &&
                    (_.setAttribute('fill', c.fc), (_.style.color = c.fc)));
            if (
              this.innerElem.getBBox &&
              !this.hidden &&
              (this._isFirstFrame || this._mdf)
            ) {
              var w = this.innerElem.getBBox();
              this.currentBBox.w !== w.width &&
                ((this.currentBBox.w = w.width),
                this.svgElement.setAttribute('width', w.width)),
                this.currentBBox.h !== w.height &&
                  ((this.currentBBox.h = w.height),
                  this.svgElement.setAttribute('height', w.height));
              var y = 1;
              if (
                this.currentBBox.w !== w.width + y * 2 ||
                this.currentBBox.h !== w.height + y * 2 ||
                this.currentBBox.x !== w.x - y ||
                this.currentBBox.y !== w.y - y
              ) {
                (this.currentBBox.w = w.width + y * 2),
                  (this.currentBBox.h = w.height + y * 2),
                  (this.currentBBox.x = w.x - y),
                  (this.currentBBox.y = w.y - y),
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
                var d =
                  'translate(' +
                  this.currentBBox.x +
                  'px,' +
                  this.currentBBox.y +
                  'px)';
                (e.transform = d), (e.webkitTransform = d);
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
                g = Math.atan2(o[1], c),
                _ = Math.atan2(o[0], -o[2]);
              this.mat.rotateY(_).rotateX(-g);
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
            var w = !this._prevMat.equals(this.mat);
            if ((w || this.pe._mdf) && this.comp.threeDElements) {
              r = this.comp.threeDElements.length;
              var y, d, m;
              for (t = 0; t < r; t += 1)
                if (((y = this.comp.threeDElements[t]), y.type === '3d')) {
                  if (w) {
                    var p = this.mat.toCSS();
                    (m = y.container.style),
                      (m.transform = p),
                      (m.webkitTransform = p);
                  }
                  this.pe._mdf &&
                    ((d = y.perspectiveElem.style),
                    (d.perspective = this.pe.v + 'px'),
                    (d.webkitPerspective = this.pe.v + 'px'));
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
                (t.splice(S, 1), (S -= 1), (i -= 1), E.isPaused || y()),
                (S += 1);
          }
          function g(C, S) {
            if (!C) return null;
            for (var E = 0; E < i; ) {
              if (t[E].elem === C && t[E].elem !== null) return t[E].animation;
              E += 1;
            }
            var T = new AnimationItem();
            return d(T, C), T.setData(C, S), T;
          }
          function _() {
            var C,
              S = t.length,
              E = [];
            for (C = 0; C < S; C += 1) E.push(t[C].animation);
            return E;
          }
          function w() {
            (s += 1), I();
          }
          function y() {
            s -= 1;
          }
          function d(C, S) {
            C.addEventListener('destroy', c),
              C.addEventListener('_active', w),
              C.addEventListener('_idle', y),
              t.push({ elem: S, animation: C }),
              (i += 1);
          }
          function m(C) {
            var S = new AnimationItem();
            return d(S, null), S.setParams(C), S;
          }
          function p(C, S) {
            var E;
            for (E = 0; E < i; E += 1) t[E].animation.setSpeed(C, S);
          }
          function u(C, S) {
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
            var T;
            for (T = 0; T < i; T += 1) t[T].animation.goToAndStop(C, S, E);
          }
          function v(C) {
            var S;
            for (S = 0; S < i; S += 1) t[S].animation.stop(C);
          }
          function k(C) {
            var S;
            for (S = 0; S < i; S += 1) t[S].animation.togglePause(C);
          }
          function x(C) {
            var S;
            for (S = i - 1; S >= 0; S -= 1) t[S].animation.destroy(C);
          }
          function P(C, S, E) {
            var T = [].concat(
                [].slice.call(document.getElementsByClassName('lottie')),
                [].slice.call(document.getElementsByClassName('bodymovin'))
              ),
              R,
              z = T.length;
            for (R = 0; R < z; R += 1)
              E && T[R].setAttribute('data-bm-type', E), g(T[R], C);
            if (S && z === 0) {
              E || (E = 'svg');
              var B = document.getElementsByTagName('body')[0];
              B.innerText = '';
              var H = createTag('div');
              (H.style.width = '100%'),
                (H.style.height = '100%'),
                H.setAttribute('data-bm-type', E),
                B.appendChild(H),
                g(H, C);
            }
          }
          function M() {
            var C;
            for (C = 0; C < i; C += 1) t[C].animation.resize();
          }
          function I() {
            !o && s && n && (window.requestAnimationFrame(a), (n = !1));
          }
          function A() {
            o = !0;
          }
          function V() {
            (o = !1), I();
          }
          function F(C, S) {
            var E;
            for (E = 0; E < i; E += 1) t[E].animation.setVolume(C, S);
          }
          function L(C) {
            var S;
            for (S = 0; S < i; S += 1) t[S].animation.mute(C);
          }
          function D(C) {
            var S;
            for (S = 0; S < i; S += 1) t[S].animation.unmute(C);
          }
          return (
            (e.registerAnimation = g),
            (e.loadAnimation = m),
            (e.setSpeed = p),
            (e.setDirection = u),
            (e.play = b),
            (e.pause = h),
            (e.stop = v),
            (e.togglePause = k),
            (e.searchAnimations = P),
            (e.resize = M),
            (e.goToAndStop = f),
            (e.destroy = x),
            (e.freeze = A),
            (e.unfreeze = V),
            (e.setVolume = F),
            (e.mute = L),
            (e.unmute = D),
            (e.getRegisteredAnimations = _),
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
            (i -= 1), i === 0 && g();
          }
          function c(_) {
            s.indexOf(_) === -1 && s.push(_);
          }
          function g() {
            var _,
              w = s.length;
            for (_ = 0; _ < w; _ += 1) s[_].release();
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
                var g = time * t,
                  _ = g - Math.floor(g),
                  w = createTypedArray('float32', n);
                if (n > 1) {
                  for (s = 0; s < n; s += 1)
                    w[s] =
                      this.pv[s] + o[s] + (-r + r * 2 * BMMath.random()) * _;
                  return w;
                }
                return this.pv + o[0] + (-r + r * 2 * BMMath.random()) * _;
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
                    scoped_bm_rt.propType,
                    scoped_bm_rt)
              );
            }
            return executeExpression;
          }
          return (ob.initiateExpression = initiateExpression), ob;
        })(),
        expressionHelpers = (function () {
          function e(o, c, g) {
            c.x &&
              ((g.k = !0),
              (g.x = !0),
              (g.initiateExpression = ExpressionManager.initiateExpression),
              g.effectsSequence.push(g.initiateExpression(o, c, g).bind(g)));
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
              g = this.getValueAtTime(o),
              _ = this.getValueAtTime(o + c),
              w = 0;
            if (g.length) {
              var y;
              for (y = 0; y < g.length; y += 1) w += Math.pow(_[y] - g[y], 2);
              w = Math.sqrt(w) * 100;
            } else w = 0;
            return w;
          }
          function i(o) {
            if (this.vel !== void 0) return this.vel;
            var c = -0.001,
              g = this.getValueAtTime(o),
              _ = this.getValueAtTime(o + c),
              w;
            if (g.length) {
              w = createTypedArray('float32', g.length);
              var y;
              for (y = 0; y < g.length; y += 1) w[y] = (_[y] - g[y]) / c;
            } else w = (_ - g) / c;
            return w;
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
        function t(m, p, u) {
          if (!this.k || !this.keyframes) return this.pv;
          m = m ? m.toLowerCase() : '';
          var b = this.comp.renderedFrame,
            l = this.keyframes,
            a = l[l.length - 1].t;
          if (b <= a) return this.pv;
          var h, f;
          u
            ? (p
                ? (h = Math.abs(a - this.elem.comp.globalData.frameRate * p))
                : (h = Math.max(0, a - this.elem.data.ip)),
              (f = a - h))
            : ((!p || p > l.length - 1) && (p = l.length - 1),
              (f = l[l.length - 1 - p].t),
              (h = a - f));
          var v, k, x;
          if (m === 'pingpong') {
            var P = Math.floor((b - f) / h);
            if (P % 2 !== 0)
              return this.getValueAtTime(
                (h - ((b - f) % h) + f) / this.comp.globalData.frameRate,
                0
              );
          } else if (m === 'offset') {
            var M = this.getValueAtTime(f / this.comp.globalData.frameRate, 0),
              I = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
              A = this.getValueAtTime(
                (((b - f) % h) + f) / this.comp.globalData.frameRate,
                0
              ),
              V = Math.floor((b - f) / h);
            if (this.pv.length) {
              for (x = new Array(M.length), k = x.length, v = 0; v < k; v += 1)
                x[v] = (I[v] - M[v]) * V + A[v];
              return x;
            }
            return (I - M) * V + A;
          } else if (m === 'continue') {
            var F = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
              L = this.getValueAtTime(
                (a - 0.001) / this.comp.globalData.frameRate,
                0
              );
            if (this.pv.length) {
              for (x = new Array(F.length), k = x.length, v = 0; v < k; v += 1)
                x[v] =
                  F[v] +
                  ((F[v] - L[v]) * ((b - a) / this.comp.globalData.frameRate)) /
                    5e-4;
              return x;
            }
            return F + (F - L) * ((b - a) / 0.001);
          }
          return this.getValueAtTime(
            (((b - f) % h) + f) / this.comp.globalData.frameRate,
            0
          );
        }
        function r(m, p, u) {
          if (!this.k) return this.pv;
          m = m ? m.toLowerCase() : '';
          var b = this.comp.renderedFrame,
            l = this.keyframes,
            a = l[0].t;
          if (b >= a) return this.pv;
          var h, f;
          u
            ? (p
                ? (h = Math.abs(this.elem.comp.globalData.frameRate * p))
                : (h = Math.max(0, this.elem.data.op - a)),
              (f = a + h))
            : ((!p || p > l.length - 1) && (p = l.length - 1),
              (f = l[p].t),
              (h = f - a));
          var v, k, x;
          if (m === 'pingpong') {
            var P = Math.floor((a - b) / h);
            if (P % 2 === 0)
              return this.getValueAtTime(
                (((a - b) % h) + a) / this.comp.globalData.frameRate,
                0
              );
          } else if (m === 'offset') {
            var M = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
              I = this.getValueAtTime(f / this.comp.globalData.frameRate, 0),
              A = this.getValueAtTime(
                (h - ((a - b) % h) + a) / this.comp.globalData.frameRate,
                0
              ),
              V = Math.floor((a - b) / h) + 1;
            if (this.pv.length) {
              for (x = new Array(M.length), k = x.length, v = 0; v < k; v += 1)
                x[v] = A[v] - (I[v] - M[v]) * V;
              return x;
            }
            return A - (I - M) * V;
          } else if (m === 'continue') {
            var F = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
              L = this.getValueAtTime(
                (a + 0.001) / this.comp.globalData.frameRate,
                0
              );
            if (this.pv.length) {
              for (x = new Array(F.length), k = x.length, v = 0; v < k; v += 1)
                x[v] = F[v] + ((F[v] - L[v]) * (a - b)) / 0.001;
              return x;
            }
            return F + ((F - L) * (a - b)) / 0.001;
          }
          return this.getValueAtTime(
            (h - (((a - b) % h) + a)) / this.comp.globalData.frameRate,
            0
          );
        }
        function i(m, p) {
          if (!this.k) return this.pv;
          if (((m = (m || 0.4) * 0.5), (p = Math.floor(p || 5)), p <= 1))
            return this.pv;
          var u = this.comp.renderedFrame / this.comp.globalData.frameRate,
            b = u - m,
            l = u + m,
            a = p > 1 ? (l - b) / (p - 1) : 1,
            h = 0,
            f = 0,
            v;
          this.pv.length
            ? (v = createTypedArray('float32', this.pv.length))
            : (v = 0);
          for (var k; h < p; ) {
            if (((k = this.getValueAtTime(b + h * a)), this.pv.length))
              for (f = 0; f < this.pv.length; f += 1) v[f] += k[f];
            else v += k;
            h += 1;
          }
          if (this.pv.length) for (f = 0; f < this.pv.length; f += 1) v[f] /= p;
          else v /= p;
          return v;
        }
        function s(m) {
          this._transformCachingAtTime ||
            (this._transformCachingAtTime = { v: new Matrix() });
          var p = this._transformCachingAtTime.v;
          if (
            (p.cloneFromProps(this.pre.props), this.appliedTransformations < 1)
          ) {
            var u = this.a.getValueAtTime(m);
            p.translate(
              -u[0] * this.a.mult,
              -u[1] * this.a.mult,
              u[2] * this.a.mult
            );
          }
          if (this.appliedTransformations < 2) {
            var b = this.s.getValueAtTime(m);
            p.scale(b[0] * this.s.mult, b[1] * this.s.mult, b[2] * this.s.mult);
          }
          if (this.sk && this.appliedTransformations < 3) {
            var l = this.sk.getValueAtTime(m),
              a = this.sa.getValueAtTime(m);
            p.skewFromAxis(-l * this.sk.mult, a * this.sa.mult);
          }
          if (this.r && this.appliedTransformations < 4) {
            var h = this.r.getValueAtTime(m);
            p.rotate(-h * this.r.mult);
          } else if (!this.r && this.appliedTransformations < 4) {
            var f = this.rz.getValueAtTime(m),
              v = this.ry.getValueAtTime(m),
              k = this.rx.getValueAtTime(m),
              x = this.or.getValueAtTime(m);
            p.rotateZ(-f * this.rz.mult)
              .rotateY(v * this.ry.mult)
              .rotateX(k * this.rx.mult)
              .rotateZ(-x[2] * this.or.mult)
              .rotateY(x[1] * this.or.mult)
              .rotateX(x[0] * this.or.mult);
          }
          if (this.data.p && this.data.p.s) {
            var P = this.px.getValueAtTime(m),
              M = this.py.getValueAtTime(m);
            if (this.data.p.z) {
              var I = this.pz.getValueAtTime(m);
              p.translate(
                P * this.px.mult,
                M * this.py.mult,
                -I * this.pz.mult
              );
            } else p.translate(P * this.px.mult, M * this.py.mult, 0);
          } else {
            var A = this.p.getValueAtTime(m);
            p.translate(
              A[0] * this.p.mult,
              A[1] * this.p.mult,
              -A[2] * this.p.mult
            );
          }
          return p;
        }
        function n() {
          return this.v.clone(new Matrix());
        }
        var o = TransformPropertyFactory.getTransformProperty;
        TransformPropertyFactory.getTransformProperty = function (m, p, u) {
          var b = o(m, p, u);
          return (
            b.dynamicProperties.length
              ? (b.getValueAtTime = s.bind(b))
              : (b.getValueAtTime = n.bind(b)),
            (b.setGroupProperty = expressionHelpers.setGroupProperty),
            b
          );
        };
        var c = PropertyFactory.getProp;
        PropertyFactory.getProp = function (m, p, u, b, l) {
          var a = c(m, p, u, b, l);
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
            u !== 0 &&
              (h = createTypedArray(
                'float32',
                p.a === 1 ? p.k[0].s.length : p.k.length
              )),
            (a._cachingAtTime = {
              lastFrame: initialDefaultFrame,
              lastIndex: 0,
              value: h,
            }),
            expressionHelpers.searchExpressions(m, p, a),
            a.k && l.addDynamicProperty(a),
            a
          );
        };
        function g(m) {
          return (
            this._cachingAtTime ||
              (this._cachingAtTime = {
                shapeValue: shapePool.clone(this.pv),
                lastIndex: 0,
                lastTime: initialDefaultFrame,
              }),
            (m *= this.elem.globalData.frameRate),
            (m -= this.offsetTime),
            m !== this._cachingAtTime.lastTime &&
              ((this._cachingAtTime.lastIndex =
                this._cachingAtTime.lastTime < m ? this._caching.lastIndex : 0),
              (this._cachingAtTime.lastTime = m),
              this.interpolateShape(
                m,
                this._cachingAtTime.shapeValue,
                this._cachingAtTime
              )),
            this._cachingAtTime.shapeValue
          );
        }
        var _ = ShapePropertyFactory.getConstructorFunction(),
          w = ShapePropertyFactory.getKeyframedConstructorFunction();
        function y() {}
        (y.prototype = {
          vertices: function (m, p) {
            this.k && this.getValue();
            var u = this.v;
            p !== void 0 && (u = this.getValueAtTime(p, 0));
            var b,
              l = u._length,
              a = u[m],
              h = u.v,
              f = createSizedArray(l);
            for (b = 0; b < l; b += 1)
              m === 'i' || m === 'o'
                ? (f[b] = [a[b][0] - h[b][0], a[b][1] - h[b][1]])
                : (f[b] = [a[b][0], a[b][1]]);
            return f;
          },
          points: function (m) {
            return this.vertices('v', m);
          },
          inTangents: function (m) {
            return this.vertices('i', m);
          },
          outTangents: function (m) {
            return this.vertices('o', m);
          },
          isClosed: function () {
            return this.v.c;
          },
          pointOnPath: function (m, p) {
            var u = this.v;
            p !== void 0 && (u = this.getValueAtTime(p, 0)),
              this._segmentsLength ||
                (this._segmentsLength = bez.getSegmentsLength(u));
            for (
              var b = this._segmentsLength,
                l = b.lengths,
                a = b.totalLength * m,
                h = 0,
                f = l.length,
                v = 0,
                k;
              h < f;

            ) {
              if (v + l[h].addedLength > a) {
                var x = h,
                  P = u.c && h === f - 1 ? 0 : h + 1,
                  M = (a - v) / l[h].addedLength;
                k = bez.getPointInSegment(
                  u.v[x],
                  u.v[P],
                  u.o[x],
                  u.i[P],
                  M,
                  l[h]
                );
                break;
              } else v += l[h].addedLength;
              h += 1;
            }
            return (
              k ||
                (k = u.c
                  ? [u.v[0][0], u.v[0][1]]
                  : [u.v[u._length - 1][0], u.v[u._length - 1][1]]),
              k
            );
          },
          vectorOnPath: function (m, p, u) {
            m == 1 ? (m = this.v.c) : m == 0 && (m = 0.999);
            var b = this.pointOnPath(m, p),
              l = this.pointOnPath(m + 0.001, p),
              a = l[0] - b[0],
              h = l[1] - b[1],
              f = Math.sqrt(Math.pow(a, 2) + Math.pow(h, 2));
            if (f === 0) return [0, 0];
            var v = u === 'tangent' ? [a / f, h / f] : [-h / f, a / f];
            return v;
          },
          tangentOnPath: function (m, p) {
            return this.vectorOnPath(m, p, 'tangent');
          },
          normalOnPath: function (m, p) {
            return this.vectorOnPath(m, p, 'normal');
          },
          setGroupProperty: expressionHelpers.setGroupProperty,
          getValueAtTime: expressionHelpers.getStaticValueAtTime,
        }),
          extendPrototype([y], _),
          extendPrototype([y], w),
          (w.prototype.getValueAtTime = g),
          (w.prototype.initiateExpression =
            ExpressionManager.initiateExpression);
        var d = ShapePropertyFactory.getShapeProp;
        ShapePropertyFactory.getShapeProp = function (m, p, u, b, l) {
          var a = d(m, p, u, b, l);
          return (
            (a.propertyIndex = p.ix),
            (a.lock = !1),
            u === 3
              ? expressionHelpers.searchExpressions(m, p.pt, a)
              : u === 4 && expressionHelpers.searchExpressions(m, p.ks, a),
            a.k && m.addDynamicProperty(a),
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
          function e(p, u, b) {
            var l = [],
              a,
              h = p ? p.length : 0;
            for (a = 0; a < h; a += 1)
              p[a].ty === 'gr'
                ? l.push(r(p[a], u[a], b))
                : p[a].ty === 'fl'
                ? l.push(i(p[a], u[a], b))
                : p[a].ty === 'st'
                ? l.push(o(p[a], u[a], b))
                : p[a].ty === 'tm'
                ? l.push(c(p[a], u[a], b))
                : p[a].ty === 'tr' ||
                  (p[a].ty === 'el'
                    ? l.push(_(p[a], u[a], b))
                    : p[a].ty === 'sr'
                    ? l.push(w(p[a], u[a], b))
                    : p[a].ty === 'sh'
                    ? l.push(ShapePathInterface(p[a], u[a], b))
                    : p[a].ty === 'rc'
                    ? l.push(y(p[a], u[a], b))
                    : p[a].ty === 'rd'
                    ? l.push(d(p[a], u[a], b))
                    : p[a].ty === 'rp'
                    ? l.push(m(p[a], u[a], b))
                    : p[a].ty === 'gf'
                    ? l.push(s(p[a], u[a], b))
                    : l.push(n(p[a], u[a])));
            return l;
          }
          function t(p, u, b) {
            var l,
              a = function (v) {
                for (var k = 0, x = l.length; k < x; ) {
                  if (
                    l[k]._name === v ||
                    l[k].mn === v ||
                    l[k].propertyIndex === v ||
                    l[k].ix === v ||
                    l[k].ind === v
                  )
                    return l[k];
                  k += 1;
                }
                return typeof v == 'number' ? l[v - 1] : null;
              };
            (a.propertyGroup = propertyGroupFactory(a, b)),
              (l = e(p.it, u.it, a.propertyGroup)),
              (a.numProperties = l.length);
            var h = g(
              p.it[p.it.length - 1],
              u.it[u.it.length - 1],
              a.propertyGroup
            );
            return (
              (a.transform = h), (a.propertyIndex = p.cix), (a._name = p.nm), a
            );
          }
          function r(p, u, b) {
            var l = function (v) {
              switch (v) {
                case 'ADBE Vectors Group':
                case 'Contents':
                case 2:
                  return l.content;
                default:
                  return l.transform;
              }
            };
            l.propertyGroup = propertyGroupFactory(l, b);
            var a = t(p, u, l.propertyGroup),
              h = g(
                p.it[p.it.length - 1],
                u.it[u.it.length - 1],
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
          function i(p, u, b) {
            function l(a) {
              return a === 'Color' || a === 'color'
                ? l.color
                : a === 'Opacity' || a === 'opacity'
                ? l.opacity
                : null;
            }
            return (
              Object.defineProperties(l, {
                color: { get: ExpressionPropertyInterface(u.c) },
                opacity: { get: ExpressionPropertyInterface(u.o) },
                _name: { value: p.nm },
                mn: { value: p.mn },
              }),
              u.c.setGroupProperty(PropertyInterface('Color', b)),
              u.o.setGroupProperty(PropertyInterface('Opacity', b)),
              l
            );
          }
          function s(p, u, b) {
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
                startPoint: { get: ExpressionPropertyInterface(u.s) },
                endPoint: { get: ExpressionPropertyInterface(u.e) },
                opacity: { get: ExpressionPropertyInterface(u.o) },
                type: {
                  get: function () {
                    return 'a';
                  },
                },
                _name: { value: p.nm },
                mn: { value: p.mn },
              }),
              u.s.setGroupProperty(PropertyInterface('Start Point', b)),
              u.e.setGroupProperty(PropertyInterface('End Point', b)),
              u.o.setGroupProperty(PropertyInterface('Opacity', b)),
              l
            );
          }
          function n() {
            function p() {
              return null;
            }
            return p;
          }
          function o(p, u, b) {
            var l = propertyGroupFactory(x, b),
              a = propertyGroupFactory(k, l);
            function h(P) {
              Object.defineProperty(k, p.d[P].nm, {
                get: ExpressionPropertyInterface(u.d.dataProps[P].p),
              });
            }
            var f,
              v = p.d ? p.d.length : 0,
              k = {};
            for (f = 0; f < v; f += 1)
              h(f), u.d.dataProps[f].p.setGroupProperty(a);
            function x(P) {
              return P === 'Color' || P === 'color'
                ? x.color
                : P === 'Opacity' || P === 'opacity'
                ? x.opacity
                : P === 'Stroke Width' || P === 'stroke width'
                ? x.strokeWidth
                : null;
            }
            return (
              Object.defineProperties(x, {
                color: { get: ExpressionPropertyInterface(u.c) },
                opacity: { get: ExpressionPropertyInterface(u.o) },
                strokeWidth: { get: ExpressionPropertyInterface(u.w) },
                dash: {
                  get: function () {
                    return k;
                  },
                },
                _name: { value: p.nm },
                mn: { value: p.mn },
              }),
              u.c.setGroupProperty(PropertyInterface('Color', l)),
              u.o.setGroupProperty(PropertyInterface('Opacity', l)),
              u.w.setGroupProperty(PropertyInterface('Stroke Width', l)),
              x
            );
          }
          function c(p, u, b) {
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
              u.s.setGroupProperty(PropertyInterface('Start', a)),
              u.e.setGroupProperty(PropertyInterface('End', a)),
              u.o.setGroupProperty(PropertyInterface('Offset', a)),
              (l.propertyIndex = p.ix),
              (l.propertyGroup = b),
              Object.defineProperties(l, {
                start: { get: ExpressionPropertyInterface(u.s) },
                end: { get: ExpressionPropertyInterface(u.e) },
                offset: { get: ExpressionPropertyInterface(u.o) },
                _name: { value: p.nm },
              }),
              (l.mn = p.mn),
              l
            );
          }
          function g(p, u, b) {
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
              u.transform.mProps.o.setGroupProperty(
                PropertyInterface('Opacity', a)
              ),
              u.transform.mProps.p.setGroupProperty(
                PropertyInterface('Position', a)
              ),
              u.transform.mProps.a.setGroupProperty(
                PropertyInterface('Anchor Point', a)
              ),
              u.transform.mProps.s.setGroupProperty(
                PropertyInterface('Scale', a)
              ),
              u.transform.mProps.r.setGroupProperty(
                PropertyInterface('Rotation', a)
              ),
              u.transform.mProps.sk &&
                (u.transform.mProps.sk.setGroupProperty(
                  PropertyInterface('Skew', a)
                ),
                u.transform.mProps.sa.setGroupProperty(
                  PropertyInterface('Skew Angle', a)
                )),
              u.transform.op.setGroupProperty(PropertyInterface('Opacity', a)),
              Object.defineProperties(l, {
                opacity: {
                  get: ExpressionPropertyInterface(u.transform.mProps.o),
                },
                position: {
                  get: ExpressionPropertyInterface(u.transform.mProps.p),
                },
                anchorPoint: {
                  get: ExpressionPropertyInterface(u.transform.mProps.a),
                },
                scale: {
                  get: ExpressionPropertyInterface(u.transform.mProps.s),
                },
                rotation: {
                  get: ExpressionPropertyInterface(u.transform.mProps.r),
                },
                skew: {
                  get: ExpressionPropertyInterface(u.transform.mProps.sk),
                },
                skewAxis: {
                  get: ExpressionPropertyInterface(u.transform.mProps.sa),
                },
                _name: { value: p.nm },
              }),
              (l.ty = 'tr'),
              (l.mn = p.mn),
              (l.propertyGroup = b),
              l
            );
          }
          function _(p, u, b) {
            function l(f) {
              return p.p.ix === f ? l.position : p.s.ix === f ? l.size : null;
            }
            var a = propertyGroupFactory(l, b);
            l.propertyIndex = p.ix;
            var h = u.sh.ty === 'tm' ? u.sh.prop : u.sh;
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
          function w(p, u, b) {
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
              h = u.sh.ty === 'tm' ? u.sh.prop : u.sh;
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
          function y(p, u, b) {
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
              h = u.sh.ty === 'tm' ? u.sh.prop : u.sh;
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
          function d(p, u, b) {
            function l(f) {
              return p.r.ix === f || f === 'Round Corners 1' ? l.radius : null;
            }
            var a = propertyGroupFactory(l, b),
              h = u;
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
          function m(p, u, b) {
            function l(f) {
              return p.c.ix === f || f === 'Copies'
                ? l.copies
                : p.o.ix === f || f === 'Offset'
                ? l.offset
                : null;
            }
            var a = propertyGroupFactory(l, b),
              h = u;
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
          return function (p, u, b) {
            var l;
            function a(f) {
              if (typeof f == 'number')
                return (f = f === void 0 ? 1 : f), f === 0 ? b : l[f - 1];
              for (var v = 0, k = l.length; v < k; ) {
                if (l[v]._name === f) return l[v];
                v += 1;
              }
              return null;
            }
            function h() {
              return b;
            }
            return (
              (a.propertyGroup = propertyGroupFactory(a, h)),
              (l = e(p, u, a.propertyGroup)),
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
          function e(_) {
            var w = new Matrix();
            if (_ !== void 0) {
              var y = this._elem.finalTransform.mProp.getValueAtTime(_);
              y.clone(w);
            } else {
              var d = this._elem.finalTransform.mProp;
              d.applyToMatrix(w);
            }
            return w;
          }
          function t(_, w) {
            var y = this.getMatrix(w);
            return (
              (y.props[12] = 0),
              (y.props[13] = 0),
              (y.props[14] = 0),
              this.applyPoint(y, _)
            );
          }
          function r(_, w) {
            var y = this.getMatrix(w);
            return this.applyPoint(y, _);
          }
          function i(_, w) {
            var y = this.getMatrix(w);
            return (
              (y.props[12] = 0),
              (y.props[13] = 0),
              (y.props[14] = 0),
              this.invertPoint(y, _)
            );
          }
          function s(_, w) {
            var y = this.getMatrix(w);
            return this.invertPoint(y, _);
          }
          function n(_, w) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var y,
                d = this._elem.hierarchy.length;
              for (y = 0; y < d; y += 1)
                this._elem.hierarchy[y].finalTransform.mProp.applyToMatrix(_);
            }
            return _.applyToPointArray(w[0], w[1], w[2] || 0);
          }
          function o(_, w) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var y,
                d = this._elem.hierarchy.length;
              for (y = 0; y < d; y += 1)
                this._elem.hierarchy[y].finalTransform.mProp.applyToMatrix(_);
            }
            return _.inversePoint(w);
          }
          function c(_) {
            var w = new Matrix();
            if (
              (w.reset(),
              this._elem.finalTransform.mProp.applyToMatrix(w),
              this._elem.hierarchy && this._elem.hierarchy.length)
            ) {
              var y,
                d = this._elem.hierarchy.length;
              for (y = 0; y < d; y += 1)
                this._elem.hierarchy[y].finalTransform.mProp.applyToMatrix(w);
              return w.inversePoint(_);
            }
            return w.inversePoint(_);
          }
          function g() {
            return [1, 1, 1, 1];
          }
          return function (_) {
            var w;
            function y(u) {
              m.mask = new MaskManagerInterface(u, _);
            }
            function d(u) {
              m.effect = u;
            }
            function m(u) {
              switch (u) {
                case 'ADBE Root Vectors Group':
                case 'Contents':
                case 2:
                  return m.shapeInterface;
                case 1:
                case 6:
                case 'Transform':
                case 'transform':
                case 'ADBE Transform Group':
                  return w;
                case 4:
                case 'ADBE Effect Parade':
                case 'effects':
                case 'Effects':
                  return m.effect;
                case 'ADBE Text Properties':
                  return m.textInterface;
                default:
                  return null;
              }
            }
            (m.getMatrix = e),
              (m.invertPoint = o),
              (m.applyPoint = n),
              (m.toWorld = r),
              (m.toWorldVec = t),
              (m.fromWorld = s),
              (m.fromWorldVec = i),
              (m.toComp = r),
              (m.fromComp = c),
              (m.sampleImage = g),
              (m.sourceRectAtTime = _.sourceRectAtTime.bind(_)),
              (m._elem = _),
              (w = TransformExpressionInterface(_.finalTransform.mProp));
            var p = getDescriptor(w, 'anchorPoint');
            return (
              Object.defineProperties(m, {
                hasParent: {
                  get: function () {
                    return _.hierarchy.length;
                  },
                },
                parent: {
                  get: function () {
                    return _.hierarchy[0].layerInterface;
                  },
                },
                rotation: getDescriptor(w, 'rotation'),
                scale: getDescriptor(w, 'scale'),
                position: getDescriptor(w, 'position'),
                opacity: getDescriptor(w, 'opacity'),
                anchorPoint: p,
                anchor_point: p,
                transform: {
                  get: function () {
                    return w;
                  },
                },
                active: {
                  get: function () {
                    return _.isInRange;
                  },
                },
              }),
              (m.startTime = _.data.st),
              (m.index = _.data.ind),
              (m.source = _.data.refId),
              (m.height = _.data.ty === 0 ? _.data.h : 100),
              (m.width = _.data.ty === 0 ? _.data.w : 100),
              (m.inPoint = _.data.ip / _.comp.globalData.frameRate),
              (m.outPoint = _.data.op / _.comp.globalData.frameRate),
              (m._name = _.data.nm),
              (m.registerMaskInterface = y),
              (m.registerEffectsInterface = d),
              m
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
                var g = c.indexOf(i);
                if (g !== -1) {
                  var _ = parseInt(c.substr(g + i.length), 10);
                  return (s = s[_]), typeof s == 'object' ? o : s;
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
                g,
                _ = s.effectsManager.effectElements.length;
              for (g = 0; g < _; g += 1)
                o.push(r(c[g], s.effectsManager.effectElements[g], n, s));
              var w = s.data.ef || [],
                y = function (d) {
                  for (g = 0, _ = w.length; g < _; ) {
                    if (d === w[g].nm || d === w[g].mn || d === w[g].ix)
                      return o[g];
                    g += 1;
                  }
                  return null;
                };
              return (
                Object.defineProperty(y, 'numProperties', {
                  get: function () {
                    return w.length;
                  },
                }),
                y
              );
            }
            return null;
          }
          function r(s, n, o, c) {
            function g(m) {
              for (var p = s.ef, u = 0, b = p.length; u < b; ) {
                if (m === p[u].nm || m === p[u].mn || m === p[u].ix)
                  return p[u].ty === 5 ? w[u] : w[u]();
                u += 1;
              }
              throw new Error();
            }
            var _ = propertyGroupFactory(g, o),
              w = [],
              y,
              d = s.ef.length;
            for (y = 0; y < d; y += 1)
              s.ef[y].ty === 5
                ? w.push(
                    r(
                      s.ef[y],
                      n.effectElements[y],
                      n.effectElements[y].propertyGroup,
                      c
                    )
                  )
                : w.push(i(n.effectElements[y], s.ef[y].ty, c, _));
            return (
              s.mn === 'ADBE Color Control' &&
                Object.defineProperty(g, 'color', {
                  get: function () {
                    return w[0]();
                  },
                }),
              Object.defineProperties(g, {
                numProperties: {
                  get: function () {
                    return s.np;
                  },
                },
                _name: { value: s.nm },
                propertyGroup: { value: _ },
              }),
              (g.enabled = s.en !== 0),
              (g.active = g.enabled),
              g
            );
          }
          function i(s, n, o, c) {
            var g = ExpressionPropertyInterface(s.p);
            function _() {
              return n === 10 ? o.comp.compInterface(s.p.v) : g();
            }
            return (
              s.p.setGroupProperty &&
                s.p.setGroupProperty(PropertyInterface('', c)),
              _
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
          function r(o, c, g) {
            Object.defineProperty(o, 'velocity', {
              get: function () {
                return c.getVelocityAtTime(c.comp.currentFrame);
              },
            }),
              (o.numKeys = c.keyframes ? c.keyframes.length : 0),
              (o.key = function (_) {
                if (!o.numKeys) return 0;
                var w = '';
                's' in c.keyframes[_ - 1]
                  ? (w = c.keyframes[_ - 1].s)
                  : 'e' in c.keyframes[_ - 2]
                  ? (w = c.keyframes[_ - 2].e)
                  : (w = c.keyframes[_ - 2].s);
                var y =
                  g === 'unidimensional' ? new Number(w) : Object.assign({}, w);
                return (
                  (y.time =
                    c.keyframes[_ - 1].t / c.elem.comp.globalData.frameRate),
                  (y.value = g === 'unidimensional' ? w[0] : w),
                  y
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
              g = o.pv * c,
              _ = new Number(g);
            return (
              (_.value = g),
              r(_, o, 'unidimensional'),
              function () {
                return (
                  o.k && o.getValue(),
                  (g = o.v * c),
                  _.value !== g &&
                    ((_ = new Number(g)),
                    (_.value = g),
                    r(_, o, 'unidimensional')),
                  _
                );
              }
            );
          }
          function s(o) {
            (!o || !('pv' in o)) && (o = t);
            var c = 1 / o.mult,
              g = (o.data && o.data.l) || o.pv.length,
              _ = createTypedArray('float32', g),
              w = createTypedArray('float32', g);
            return (
              (_.value = w),
              r(_, o, 'multidimensional'),
              function () {
                o.k && o.getValue();
                for (var y = 0; y < g; y += 1)
                  (w[y] = o.v[y] * c), (_[y] = w[y]);
                return _;
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
var index_svelte_svelte_type_style_lang$4 = '',
  index_svelte_svelte_type_style_lang$3 = '',
  index_svelte_svelte_type_style_lang$2 = '',
  index_svelte_svelte_type_style_lang$1 = '';
function create_fragment$1(e) {
  let t, r, i, s, n, o, c, g;
  const _ = e[1].default,
    w = create_slot(_, e, e[0], null);
  return {
    c() {
      (t = element('nav')),
        (r = element('div')),
        (i = element('a')),
        (s = element('figure')),
        (n = element('img')),
        (c = space()),
        w && w.c(),
        this.h();
    },
    l(y) {
      t = claim_element(y, 'NAV', { class: !0 });
      var d = children(t);
      r = claim_element(d, 'DIV', { class: !0 });
      var m = children(r);
      i = claim_element(m, 'A', { href: !0 });
      var p = children(i);
      s = claim_element(p, 'FIGURE', { class: !0 });
      var u = children(s);
      (n = claim_element(u, 'IMG', { class: !0, src: !0, alt: !0 })),
        u.forEach(detach),
        p.forEach(detach),
        m.forEach(detach),
        (c = claim_space(d)),
        w && w.l(d),
        d.forEach(detach),
        this.h();
    },
    h() {
      attr(n, 'class', 'logo reuters-graphics'),
        src_url_equal(
          n.src,
          (o =
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-dark.svg')
        ) || attr(n, 'src', o),
        attr(n, 'alt', 'Reuters graphics logo'),
        attr(s, 'class', 'navbar-brand'),
        attr(i, 'href', `${base}/`),
        attr(r, 'class', 'logo-container'),
        attr(t, 'class', 'nav svelte-ca3v86');
    },
    m(y, d) {
      insert_hydration(y, t, d),
        append_hydration(t, r),
        append_hydration(r, i),
        append_hydration(i, s),
        append_hydration(s, n),
        append_hydration(t, c),
        w && w.m(t, null),
        (g = !0);
    },
    p(y, [d]) {
      w &&
        w.p &&
        (!g || d & 1) &&
        update_slot_base(
          w,
          _,
          y,
          y[0],
          g
            ? get_slot_changes(_, y[0], d, null)
            : get_all_dirty_from_scope(y[0]),
          null
        );
    },
    i(y) {
      g || (transition_in(w, y), (g = !0));
    },
    o(y) {
      transition_out(w, y), (g = !1);
    },
    d(y) {
      y && detach(t), w && w.d(y);
    },
  };
}
function instance$1(e, t, r) {
  let { $$slots: i = {}, $$scope: s } = t;
  return (
    (e.$$set = (n) => {
      '$$scope' in n && r(0, (s = n.$$scope));
    }),
    [s, i]
  );
}
class Nav extends SvelteComponent {
  constructor(t) {
    super(), init(this, t, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
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
var index_svelte_svelte_type_style_lang = '';
function get_each_context(e, t, r) {
  const i = e.slice();
  return (i[4] = t[r]), i;
}
function create_if_block_1(e) {
  let t, r, i;
  return {
    c() {
      (t = element('div')), this.h();
    },
    l(s) {
      t = claim_element(s, 'DIV', { id: !0, class: !0 });
      var n = children(t);
      n.forEach(detach), this.h();
    },
    h() {
      attr(t, 'id', 'overlay'), attr(t, 'class', 'svelte-253v2x');
    },
    m(s, n) {
      insert_hydration(s, t, n),
        r || ((i = listen(t, 'click', e[2])), (r = !0));
    },
    p: noop,
    d(s) {
      s && detach(t), (r = !1), i();
    },
  };
}
function create_if_block(e) {
  let t,
    r,
    i = e[4].title + '',
    s,
    n;
  return {
    c() {
      (t = element('a')), (r = element('li')), (s = text(i)), this.h();
    },
    l(o) {
      t = claim_element(o, 'A', { href: !0, class: !0 });
      var c = children(t);
      r = claim_element(c, 'LI', { class: !0 });
      var g = children(r);
      (s = claim_text(g, i)), g.forEach(detach), c.forEach(detach), this.h();
    },
    h() {
      attr(r, 'class', 'svelte-253v2x'),
        attr(t, 'href', (n = `${base}/components/${e[4].slug}/`)),
        attr(t, 'class', 'svelte-253v2x');
    },
    m(o, c) {
      insert_hydration(o, t, c), append_hydration(t, r), append_hydration(r, s);
    },
    p(o, c) {
      c & 1 && i !== (i = o[4].title + '') && set_data(s, i),
        c & 1 &&
          n !== (n = `${base}/components/${o[4].slug}/`) &&
          attr(t, 'href', n);
    },
    d(o) {
      o && detach(t);
    },
  };
}
function create_each_block(e) {
  let t,
    r = e[4].title && e[4].slug && create_if_block(e);
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
    p(i, s) {
      i[4].title && i[4].slug
        ? r
          ? r.p(i, s)
          : ((r = create_if_block(i)), r.c(), r.m(t.parentNode, t))
        : r && (r.d(1), (r = null));
    },
    d(i) {
      r && r.d(i), i && detach(t);
    },
  };
}
function create_fragment(e) {
  let t,
    r,
    i,
    s,
    n,
    o,
    c,
    g,
    _,
    w,
    y,
    d,
    m,
    p,
    u,
    b,
    l,
    a,
    h,
    f,
    v,
    k,
    x = e[1] && create_if_block_1(e);
  (n = new Fa$1({ props: { fw: !0, size: 'md', icon: faCog.faCog } })),
    (w = new Fa$1({ props: { fw: !0, icon: faHome.faHome } })),
    (u = new Fa$1({ props: { fw: !0, icon: faGithubAlt.faGithubAlt } }));
  let P = e[0],
    M = [];
  for (let I = 0; I < P.length; I += 1)
    M[I] = create_each_block(get_each_context(e, P, I));
  return {
    c() {
      x && x.c(),
        (t = space()),
        (r = element('nav')),
        (i = element('div')),
        (s = element('button')),
        create_component(n.$$.fragment),
        (o = space()),
        (c = element('ul')),
        (g = element('li')),
        (_ = element('a')),
        create_component(w.$$.fragment),
        (y = text(' Home')),
        (d = space()),
        (m = element('li')),
        (p = element('a')),
        create_component(u.$$.fragment),
        (b = text(' Repo')),
        (l = space()),
        (a = element('hr')),
        (h = space());
      for (let I = 0; I < M.length; I += 1) M[I].c();
      this.h();
    },
    l(I) {
      x && x.l(I),
        (t = claim_space(I)),
        (r = claim_element(I, 'NAV', { class: !0 }));
      var A = children(r);
      i = claim_element(A, 'DIV', { class: !0 });
      var V = children(i);
      s = claim_element(V, 'BUTTON', { class: !0 });
      var F = children(s);
      claim_component(n.$$.fragment, F),
        F.forEach(detach),
        (o = claim_space(V)),
        (c = claim_element(V, 'UL', { class: !0 }));
      var L = children(c);
      g = claim_element(L, 'LI', { class: !0 });
      var D = children(g);
      _ = claim_element(D, 'A', { href: !0, rel: !0, class: !0 });
      var C = children(_);
      claim_component(w.$$.fragment, C),
        (y = claim_text(C, ' Home')),
        C.forEach(detach),
        D.forEach(detach),
        (d = claim_space(L)),
        (m = claim_element(L, 'LI', { class: !0 }));
      var S = children(m);
      p = claim_element(S, 'A', { href: !0, rel: !0, class: !0 });
      var E = children(p);
      claim_component(u.$$.fragment, E),
        (b = claim_text(E, ' Repo')),
        E.forEach(detach),
        S.forEach(detach),
        (l = claim_space(L)),
        (a = claim_element(L, 'HR', { class: !0 })),
        (h = claim_space(L));
      for (let T = 0; T < M.length; T += 1) M[T].l(L);
      L.forEach(detach), V.forEach(detach), A.forEach(detach), this.h();
    },
    h() {
      attr(s, 'class', 'svelte-253v2x'),
        attr(_, 'href', `${base}/`),
        attr(_, 'rel', 'external'),
        attr(_, 'class', 'svelte-253v2x'),
        attr(g, 'class', 'stationary svelte-253v2x'),
        attr(
          p,
          'href',
          'https://github.com/reuters-graphics/graphics-svelte-components'
        ),
        attr(p, 'rel', 'external'),
        attr(p, 'class', 'svelte-253v2x'),
        attr(m, 'class', 'stationary svelte-253v2x'),
        attr(a, 'class', 'svelte-253v2x'),
        attr(c, 'class', 'svelte-253v2x'),
        attr(i, 'class', 'nav-container svelte-253v2x'),
        attr(r, 'class', 'svelte-253v2x'),
        toggle_class(r, 'open', e[1]);
    },
    m(I, A) {
      x && x.m(I, A),
        insert_hydration(I, t, A),
        insert_hydration(I, r, A),
        append_hydration(r, i),
        append_hydration(i, s),
        mount_component(n, s, null),
        append_hydration(i, o),
        append_hydration(i, c),
        append_hydration(c, g),
        append_hydration(g, _),
        mount_component(w, _, null),
        append_hydration(_, y),
        append_hydration(c, d),
        append_hydration(c, m),
        append_hydration(m, p),
        mount_component(u, p, null),
        append_hydration(p, b),
        append_hydration(c, l),
        append_hydration(c, a),
        append_hydration(c, h);
      for (let V = 0; V < M.length; V += 1) M[V].m(c, null);
      (f = !0), v || ((k = listen(s, 'click', e[3])), (v = !0));
    },
    p(I, [A]) {
      if (
        (I[1]
          ? x
            ? x.p(I, A)
            : ((x = create_if_block_1(I)), x.c(), x.m(t.parentNode, t))
          : x && (x.d(1), (x = null)),
        A & 1)
      ) {
        P = I[0];
        let V;
        for (V = 0; V < P.length; V += 1) {
          const F = get_each_context(I, P, V);
          M[V]
            ? M[V].p(F, A)
            : ((M[V] = create_each_block(F)), M[V].c(), M[V].m(c, null));
        }
        for (; V < M.length; V += 1) M[V].d(1);
        M.length = P.length;
      }
      A & 2 && toggle_class(r, 'open', I[1]);
    },
    i(I) {
      f ||
        (transition_in(n.$$.fragment, I),
        transition_in(w.$$.fragment, I),
        transition_in(u.$$.fragment, I),
        (f = !0));
    },
    o(I) {
      transition_out(n.$$.fragment, I),
        transition_out(w.$$.fragment, I),
        transition_out(u.$$.fragment, I),
        (f = !1);
    },
    d(I) {
      x && x.d(I),
        I && detach(t),
        I && detach(r),
        destroy_component(n),
        destroy_component(w),
        destroy_component(u),
        destroy_each(M, I),
        (v = !1),
        k();
    },
  };
}
function instance(e, t, r) {
  let { components: i = [] } = t,
    s = !1;
  const n = () => {
      r(1, (s = !1));
    },
    o = () => {
      r(1, (s = !s));
    };
  return (
    (e.$$set = (c) => {
      'components' in c && r(0, (i = c.components));
    }),
    [i, s, n, o]
  );
}
class Menu extends SvelteComponent {
  constructor(t) {
    super(),
      init(this, t, instance, create_fragment, safe_not_equal, {
        components: 0,
      });
  }
}
var main = '';
export {
  Fa$1 as F,
  Menu as M,
  Nav as N,
  SEO as S,
  isObject as a,
  classnames as b,
  components as c,
  Scroller as d,
  faCog as f,
  isSymbol as i,
  lottie as l,
  marked as m,
  pym as p,
  root$1 as r,
  urlJoin as u,
};
