var Rt = (n) => {
  throw TypeError(n);
};
var $t = (n, e, t) => e.has(n) || Rt("Cannot " + t);
var j = (n, e, t) => ($t(n, e, "read from private field"), t ? t.call(n) : e.get(n)), pe = (n, e, t) => e.has(n) ? Rt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), he = (n, e, t, r) => ($t(n, e, "write to private field"), r ? r.call(n, t) : e.set(n, t), t);
import { j as Ur } from "./nobleChunk-D144IwHg.js";
import { g as Dr } from "./bnChunk-DRlDxTFg.js";
import { z as R, n as Le, o as y, a as S, b as K, s as p, c as Fr, u as Ue, d as At, e as De, f as Nt, g as ze, r as Sn, l as jt } from "./zodChunk-wTu9ZHzV.js";
import { h as _r } from "./commonChunk-BaULkPXL.js";
import { j as Mr, s as Hr, n as Vr, a as Br, c as Kr, d as qr, e as zr, f as Wr, g as Jr, h as Xr, k as Gr, i as xn, l as On, m as $e, o as Yr, p as Qr, q as Zr, r as ei } from "./utilCryptoChunk-BXKHAqcg.js";
import { r as et, b as lt, o as En, u as ct, a as Ut, t as ti, i as ni, c as Ae, k as tt, s as Tn } from "./utilChunk-DPr6oTOj.js";
function ri(n, e) {
  for (var t = 0; t < e.length; t++) {
    const r = e[t];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in n)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o && Object.defineProperty(n, i, o.get ? o : {
            enumerable: !0,
            get: () => r[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
const ga = (n) => new Promise((e) => setTimeout(e, n)), ma = (n, e) => {
  let t = 0;
  const r = "0".repeat(e);
  for (; ; ) {
    const i = new TextEncoder().encode(t + n);
    if (ii(Ur(i)).startsWith(r))
      return t;
    t += 1;
  }
}, ii = (n) => Array.from(n).map((e) => e.toString(16).padStart(2, "0")).join("");
function ya(n, e, t) {
  if (n.length === 0)
    throw new Error("Array is empty");
  if (!Number.isFinite(e))
    throw new Error(`Index ${e} is not a finite number`);
  if (e > 0 ? e = e % n.length : e = Math.ceil(Math.abs(e) / n.length) * n.length + e, e >= n.length)
    throw new Error(`Index ${e} larger than array length ${n.length}`);
  if (e < 0)
    throw new Error(`Index ${e} smaller than 0`);
  return n[e];
}
const oi = (n) => Array.isArray(n) && n !== null, si = "dev", Fe = new Array(256), Ln = new Array(256 * 256);
for (let n = 0; n < 256; n++)
  Fe[n] = n.toString(16).padStart(2, "0");
for (let n = 0; n < 256; n++) {
  const e = n << 8;
  for (let t = 0; t < 256; t++)
    Ln[e | t] = Fe[n] + Fe[t];
}
function nt(n, e) {
  const t = n.length % 2 | 0, r = n.length - t | 0;
  for (let i = 0; i < r; i += 2)
    e += Ln[n[i] << 8 | n[i + 1]];
  return t && (e += Fe[n[r] | 0]), e;
}
function We(n, e = -1, t = !0) {
  const r = t ? "0x" : "";
  if (!(n != null && n.length))
    return r;
  if (e > 0) {
    const i = Math.ceil(e / 8);
    if (n.length > i)
      return `${nt(n.subarray(0, i / 2), r)}…${nt(n.subarray(n.length - i / 2), "")}`;
  }
  return nt(n, r);
}
const va = (n) => oi(n) ? We(new Uint8Array(n)) : n.toString();
var h = /* @__PURE__ */ ((n) => (n.datasetId = "datasetId", n.user = "user", n.dapp = "dapp", n.provider = "provider", n.blockNumber = "blockNumber", n.requestHash = "requestHash", n.captchas = "captchas", n.commitmentId = "commitmentId", n.proof = "proof", n.dappSignature = "dappSignature", n.dappUserSignature = "dappUserSignature", n.providerUrl = "providerUrl", n.procaptchaResponse = "procaptcha-response", n.verifiedTimeout = "verifiedTimeout", n.maxVerifiedTime = "maxVerifiedTime", n.verified = "verified", n.status = "status", n.challenge = "challenge", n.difficulty = "difficulty", n.nonce = "nonce", n.timeouts = "timeouts", n.token = "token", n.secret = "secret", n.timestamp = "timestamp", n.signature = "signature", n.error = "error", n.siteKey = "siteKey", n.captchaType = "captchaType", n.sessionId = "sessionId", n.settings = "settings", n.domains = "domains", n.frictionlessThreshold = "frictionlessThreshold", n.powDifficulty = "powDifficulty", n.score = "score", n.tier = "tier", n.detectorKey = "detectorKey", n.ip = "ip", n))(h || {}), wt = /* @__PURE__ */ ((n) => (n.Free = "free", n.Professional = "professional", n.Enterprise = "enterprise", n))(wt || {});
R.nativeEnum(wt);
var Je = /* @__PURE__ */ ((n) => (n.image = "image", n.pow = "pow", n.frictionless = "frictionless", n.invisible = "invisible", n))(Je || {});
R.nativeEnum(Je);
const ai = Le(Je), ui = Je.frictionless, li = [], ci = 0.5, fi = 4, di = 0.8, pi = y({
  captchaType: ai.optional().default(ui),
  domains: K(p()).optional().default([...li]),
  frictionlessThreshold: S().optional().default(ci),
  powDifficulty: S().optional().default(fi),
  imageThreshold: S().optional().default(di)
});
let rt;
async function wa(n) {
  return new Promise((e, t) => {
    try {
      Promise.resolve().then(() => Yo).then(({ default: r }) => {
        rt ? e(rt) : rt = r(e);
      });
    } catch (r) {
      t(r);
    }
  });
}
const Cn = {
  arabic: "ar",
  azerbaijani: "az",
  czech: "cs",
  german: "de",
  greek: "el",
  english: "en",
  spanish: "es",
  finnish: "fi",
  french: "fr",
  hindi: "hi",
  hungarian: "hu",
  indonesian: "id",
  italian: "it",
  japanese: "ja",
  javanese: "jv",
  korean: "ko",
  malayalam: "ml",
  malay: "ms",
  dutch: "nl",
  norwegian: "no",
  polish: "pl",
  portugeseBrazil: "pt-BR",
  portuguese: "pt",
  romanian: "ro",
  russian: "ru",
  serbian: "sr",
  swedish: "sv",
  thai: "th",
  turkish: "tr",
  ukrainian: "uk",
  vietnamese: "vi",
  chinese: "zh-CN"
}, kn = R.enum(
  Object.values(Cn)
);
var Pn = { exports: {} }, x = {};
var Ce = Symbol.for("react.element"), hi = Symbol.for("react.portal"), gi = Symbol.for("react.fragment"), mi = Symbol.for("react.strict_mode"), yi = Symbol.for("react.profiler"), vi = Symbol.for("react.provider"), wi = Symbol.for("react.context"), bi = Symbol.for("react.forward_ref"), Si = Symbol.for("react.suspense"), xi = Symbol.for("react.memo"), Oi = Symbol.for("react.lazy"), Dt = Symbol.iterator;
function Ei(n) {
  return n === null || typeof n != "object" ? null : (n = Dt && n[Dt] || n["@@iterator"], typeof n == "function" ? n : null);
}
var In = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Rn = Object.assign, $n = {};
function ce(n, e, t) {
  this.props = n, this.context = e, this.refs = $n, this.updater = t || In;
}
ce.prototype.isReactComponent = {};
ce.prototype.setState = function(n, e) {
  if (typeof n != "object" && typeof n != "function" && n != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, n, e, "setState");
};
ce.prototype.forceUpdate = function(n) {
  this.updater.enqueueForceUpdate(this, n, "forceUpdate");
};
function An() {
}
An.prototype = ce.prototype;
function bt(n, e, t) {
  this.props = n, this.context = e, this.refs = $n, this.updater = t || In;
}
var St = bt.prototype = new An();
St.constructor = bt;
Rn(St, ce.prototype);
St.isPureReactComponent = !0;
var Ft = Array.isArray, Nn = Object.prototype.hasOwnProperty, xt = { current: null }, jn = { key: !0, ref: !0, __self: !0, __source: !0 };
function Un(n, e, t) {
  var r, i = {}, o = null, s = null;
  if (e != null) for (r in e.ref !== void 0 && (s = e.ref), e.key !== void 0 && (o = "" + e.key), e) Nn.call(e, r) && !jn.hasOwnProperty(r) && (i[r] = e[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = t;
  else if (1 < a) {
    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
    i.children = u;
  }
  if (n && n.defaultProps) for (r in a = n.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
  return { $$typeof: Ce, type: n, key: o, ref: s, props: i, _owner: xt.current };
}
function Ti(n, e) {
  return { $$typeof: Ce, type: n.type, key: e, ref: n.ref, props: n.props, _owner: n._owner };
}
function Ot(n) {
  return typeof n == "object" && n !== null && n.$$typeof === Ce;
}
function Li(n) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + n.replace(/[=:]/g, function(t) {
    return e[t];
  });
}
var _t = /\/+/g;
function it(n, e) {
  return typeof n == "object" && n !== null && n.key != null ? Li("" + n.key) : e.toString(36);
}
function Ne(n, e, t, r, i) {
  var o = typeof n;
  (o === "undefined" || o === "boolean") && (n = null);
  var s = !1;
  if (n === null) s = !0;
  else switch (o) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (n.$$typeof) {
        case Ce:
        case hi:
          s = !0;
      }
  }
  if (s) return s = n, i = i(s), n = r === "" ? "." + it(s, 0) : r, Ft(i) ? (t = "", n != null && (t = n.replace(_t, "$&/") + "/"), Ne(i, e, t, "", function(c) {
    return c;
  })) : i != null && (Ot(i) && (i = Ti(i, t + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(_t, "$&/") + "/") + n)), e.push(i)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Ft(n)) for (var a = 0; a < n.length; a++) {
    o = n[a];
    var u = r + it(o, a);
    s += Ne(o, e, t, u, i);
  }
  else if (u = Ei(n), typeof u == "function") for (n = u.call(n), a = 0; !(o = n.next()).done; ) o = o.value, u = r + it(o, a++), s += Ne(o, e, t, u, i);
  else if (o === "object") throw e = String(n), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Ie(n, e, t) {
  if (n == null) return n;
  var r = [], i = 0;
  return Ne(n, r, "", "", function(o) {
    return e.call(t, o, i++);
  }), r;
}
function Ci(n) {
  if (n._status === -1) {
    var e = n._result;
    e = e(), e.then(function(t) {
      (n._status === 0 || n._status === -1) && (n._status = 1, n._result = t);
    }, function(t) {
      (n._status === 0 || n._status === -1) && (n._status = 2, n._result = t);
    }), n._status === -1 && (n._status = 0, n._result = e);
  }
  if (n._status === 1) return n._result.default;
  throw n._result;
}
var $ = { current: null }, je = { transition: null }, ki = { ReactCurrentDispatcher: $, ReactCurrentBatchConfig: je, ReactCurrentOwner: xt };
function Dn() {
  throw Error("act(...) is not supported in production builds of React.");
}
x.Children = { map: Ie, forEach: function(n, e, t) {
  Ie(n, function() {
    e.apply(this, arguments);
  }, t);
}, count: function(n) {
  var e = 0;
  return Ie(n, function() {
    e++;
  }), e;
}, toArray: function(n) {
  return Ie(n, function(e) {
    return e;
  }) || [];
}, only: function(n) {
  if (!Ot(n)) throw Error("React.Children.only expected to receive a single React element child.");
  return n;
} };
x.Component = ce;
x.Fragment = gi;
x.Profiler = yi;
x.PureComponent = bt;
x.StrictMode = mi;
x.Suspense = Si;
x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ki;
x.act = Dn;
x.cloneElement = function(n, e, t) {
  if (n == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
  var r = Rn({}, n.props), i = n.key, o = n.ref, s = n._owner;
  if (e != null) {
    if (e.ref !== void 0 && (o = e.ref, s = xt.current), e.key !== void 0 && (i = "" + e.key), n.type && n.type.defaultProps) var a = n.type.defaultProps;
    for (u in e) Nn.call(e, u) && !jn.hasOwnProperty(u) && (r[u] = e[u] === void 0 && a !== void 0 ? a[u] : e[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = t;
  else if (1 < u) {
    a = Array(u);
    for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Ce, type: n.type, key: i, ref: o, props: r, _owner: s };
};
x.createContext = function(n) {
  return n = { $$typeof: wi, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: vi, _context: n }, n.Consumer = n;
};
x.createElement = Un;
x.createFactory = function(n) {
  var e = Un.bind(null, n);
  return e.type = n, e;
};
x.createRef = function() {
  return { current: null };
};
x.forwardRef = function(n) {
  return { $$typeof: bi, render: n };
};
x.isValidElement = Ot;
x.lazy = function(n) {
  return { $$typeof: Oi, _payload: { _status: -1, _result: n }, _init: Ci };
};
x.memo = function(n, e) {
  return { $$typeof: xi, type: n, compare: e === void 0 ? null : e };
};
x.startTransition = function(n) {
  var e = je.transition;
  je.transition = {};
  try {
    n();
  } finally {
    je.transition = e;
  }
};
x.unstable_act = Dn;
x.useCallback = function(n, e) {
  return $.current.useCallback(n, e);
};
x.useContext = function(n) {
  return $.current.useContext(n);
};
x.useDebugValue = function() {
};
x.useDeferredValue = function(n) {
  return $.current.useDeferredValue(n);
};
x.useEffect = function(n, e) {
  return $.current.useEffect(n, e);
};
x.useId = function() {
  return $.current.useId();
};
x.useImperativeHandle = function(n, e, t) {
  return $.current.useImperativeHandle(n, e, t);
};
x.useInsertionEffect = function(n, e) {
  return $.current.useInsertionEffect(n, e);
};
x.useLayoutEffect = function(n, e) {
  return $.current.useLayoutEffect(n, e);
};
x.useMemo = function(n, e) {
  return $.current.useMemo(n, e);
};
x.useReducer = function(n, e, t) {
  return $.current.useReducer(n, e, t);
};
x.useRef = function(n) {
  return $.current.useRef(n);
};
x.useState = function(n) {
  return $.current.useState(n);
};
x.useSyncExternalStore = function(n, e, t) {
  return $.current.useSyncExternalStore(n, e, t);
};
x.useTransition = function() {
  return $.current.useTransition();
};
x.version = "18.3.1";
Pn.exports = x;
var F = Pn.exports;
const Pi = /* @__PURE__ */ Dr(F), ba = /* @__PURE__ */ ri({
  __proto__: null,
  default: Pi
}, [F]), Ii = (n, e, t, r) => {
  var o, s, a, u;
  const i = [t, {
    code: e,
    ...r || {}
  }];
  if ((s = (o = n == null ? void 0 : n.services) == null ? void 0 : o.logger) != null && s.forward)
    return n.services.logger.forward(i, "warn", "react-i18next::", !0);
  Q(i[0]) && (i[0] = `react-i18next:: ${i[0]}`), (u = (a = n == null ? void 0 : n.services) == null ? void 0 : a.logger) != null && u.warn ? n.services.logger.warn(...i) : console != null && console.warn && [...i];
}, Mt = {}, ft = (n, e, t, r) => {
  Q(t) && Mt[t] || (Q(t) && (Mt[t] = /* @__PURE__ */ new Date()), Ii(n, e, t, r));
}, Fn = (n, e) => () => {
  if (n.isInitialized)
    e();
  else {
    const t = () => {
      setTimeout(() => {
        n.off("initialized", t);
      }, 0), e();
    };
    n.on("initialized", t);
  }
}, dt = (n, e, t) => {
  n.loadNamespaces(e, Fn(n, t));
}, Ht = (n, e, t, r) => {
  if (Q(t) && (t = [t]), n.options.preload && n.options.preload.indexOf(e) > -1) return dt(n, t, r);
  t.forEach((i) => {
    n.options.ns.indexOf(i) < 0 && n.options.ns.push(i);
  }), n.loadLanguages(e, Fn(n, r));
}, Ri = (n, e, t = {}) => !e.languages || !e.languages.length ? (ft(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: e.languages
}), !0) : e.hasLoadedNamespace(n, {
  lng: t.lng,
  precheck: (r, i) => {
    var o;
    if (((o = t.bindI18n) == null ? void 0 : o.indexOf("languageChanging")) > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !i(r.isLanguageChangingTo, n)) return !1;
  }
}), Q = (n) => typeof n == "string", $i = (n) => typeof n == "object" && n !== null, Ai = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Ni = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, ji = (n) => Ni[n], Ui = (n) => n.replace(Ai, ji);
let pt = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Ui
};
const Di = (n = {}) => {
  pt = {
    ...pt,
    ...n
  };
}, Fi = () => pt;
let _n;
const _i = (n) => {
  _n = n;
}, Mi = () => _n, Hi = {
  type: "3rdParty",
  init(n) {
    Di(n.options.react), _i(n);
  }
}, Vi = F.createContext();
class Bi {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach((t) => {
      this.usedNamespaces[t] || (this.usedNamespaces[t] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const Ki = (n, e) => {
  const t = F.useRef();
  return F.useEffect(() => {
    t.current = n;
  }, [n, e]), t.current;
}, Mn = (n, e, t, r) => n.getFixedT(e, t, r), qi = (n, e, t, r) => F.useCallback(Mn(n, e, t, r), [n, e, t, r]), zi = (n, e = {}) => {
  var A, z, W, k;
  const {
    i18n: t
  } = e, {
    i18n: r,
    defaultNS: i
  } = F.useContext(Vi) || {}, o = t || r || Mi();
  if (o && !o.reportNamespaces && (o.reportNamespaces = new Bi()), !o) {
    ft(o, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const O = (I, T) => Q(T) ? T : $i(T) && Q(T.defaultValue) ? T.defaultValue : Array.isArray(I) ? I[I.length - 1] : I, P = [O, {}, !1];
    return P.t = O, P.i18n = {}, P.ready = !1, P;
  }
  (A = o.options.react) != null && A.wait && ft(o, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = {
    ...Fi(),
    ...o.options.react,
    ...e
  }, {
    useSuspense: a,
    keyPrefix: u
  } = s;
  let c = n || i || ((z = o.options) == null ? void 0 : z.defaultNS);
  c = Q(c) ? [c] : c || ["translation"], (k = (W = o.reportNamespaces).addUsedNamespaces) == null || k.call(W, c);
  const l = (o.isInitialized || o.initializedStoreOnce) && c.every((O) => Ri(O, o, s)), f = qi(o, e.lng || null, s.nsMode === "fallback" ? c : c[0], u), d = () => f, g = () => Mn(o, e.lng || null, s.nsMode === "fallback" ? c : c[0], u), [m, v] = F.useState(d);
  let w = c.join();
  e.lng && (w = `${e.lng}${w}`);
  const C = Ki(w), E = F.useRef(!0);
  F.useEffect(() => {
    const {
      bindI18n: O,
      bindI18nStore: P
    } = s;
    E.current = !0, !l && !a && (e.lng ? Ht(o, e.lng, c, () => {
      E.current && v(g);
    }) : dt(o, c, () => {
      E.current && v(g);
    })), l && C && C !== w && E.current && v(g);
    const I = () => {
      E.current && v(g);
    };
    return O && (o == null || o.on(O, I)), P && (o == null || o.store.on(P, I)), () => {
      E.current = !1, o && (O == null || O.split(" ").forEach((T) => o.off(T, I))), P && o && P.split(" ").forEach((T) => o.store.off(T, I));
    };
  }, [o, w]), F.useEffect(() => {
    E.current && l && v(d);
  }, [o, u, l]);
  const L = [m, o, l];
  if (L.t = m, L.i18n = o, L.ready = l, l || !l && !a) return L;
  throw new Promise((O) => {
    e.lng ? Ht(o, e.lng, c, () => O()) : dt(o, c, () => O());
  });
}, b = (n) => typeof n == "string", ge = () => {
  let n, e;
  const t = new Promise((r, i) => {
    n = r, e = i;
  });
  return t.resolve = n, t.reject = e, t;
}, Vt = (n) => n == null ? "" : "" + n, Wi = (n, e, t) => {
  n.forEach((r) => {
    e[r] && (t[r] = e[r]);
  });
}, Ji = /###/g, Bt = (n) => n && n.indexOf("###") > -1 ? n.replace(Ji, ".") : n, Kt = (n) => !n || b(n), be = (n, e, t) => {
  const r = b(e) ? e.split(".") : e;
  let i = 0;
  for (; i < r.length - 1; ) {
    if (Kt(n)) return {};
    const o = Bt(r[i]);
    !n[o] && t && (n[o] = new t()), Object.prototype.hasOwnProperty.call(n, o) ? n = n[o] : n = {}, ++i;
  }
  return Kt(n) ? {} : {
    obj: n,
    k: Bt(r[i])
  };
}, qt = (n, e, t) => {
  const {
    obj: r,
    k: i
  } = be(n, e, Object);
  if (r !== void 0 || e.length === 1) {
    r[i] = t;
    return;
  }
  let o = e[e.length - 1], s = e.slice(0, e.length - 1), a = be(n, s, Object);
  for (; a.obj === void 0 && s.length; )
    o = `${s[s.length - 1]}.${o}`, s = s.slice(0, s.length - 1), a = be(n, s, Object), a != null && a.obj && typeof a.obj[`${a.k}.${o}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${o}`] = t;
}, Xi = (n, e, t, r) => {
  const {
    obj: i,
    k: o
  } = be(n, e, Object);
  i[o] = i[o] || [], i[o].push(t);
}, _e = (n, e) => {
  const {
    obj: t,
    k: r
  } = be(n, e);
  if (t && Object.prototype.hasOwnProperty.call(t, r))
    return t[r];
}, Gi = (n, e, t) => {
  const r = _e(n, t);
  return r !== void 0 ? r : _e(e, t);
}, Hn = (n, e, t) => {
  for (const r in e)
    r !== "__proto__" && r !== "constructor" && (r in n ? b(n[r]) || n[r] instanceof String || b(e[r]) || e[r] instanceof String ? t && (n[r] = e[r]) : Hn(n[r], e[r], t) : n[r] = e[r]);
  return n;
}, te = (n) => n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Yi = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Qi = (n) => b(n) ? n.replace(/[&<>"'\/]/g, (e) => Yi[e]) : n;
class Zi {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const r = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, r), this.regExpQueue.push(e), r;
  }
}
const eo = [" ", ",", "?", "!", ";"], to = new Zi(20), no = (n, e, t) => {
  e = e || "", t = t || "";
  const r = eo.filter((s) => e.indexOf(s) < 0 && t.indexOf(s) < 0);
  if (r.length === 0) return !0;
  const i = to.getRegExp(`(${r.map((s) => s === "?" ? "\\?" : s).join("|")})`);
  let o = !i.test(n);
  if (!o) {
    const s = n.indexOf(t);
    s > 0 && !i.test(n.substring(0, s)) && (o = !0);
  }
  return o;
}, ht = function(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!n) return;
  if (n[e])
    return Object.prototype.hasOwnProperty.call(n, e) ? n[e] : void 0;
  const r = e.split(t);
  let i = n;
  for (let o = 0; o < r.length; ) {
    if (!i || typeof i != "object")
      return;
    let s, a = "";
    for (let u = o; u < r.length; ++u)
      if (u !== o && (a += t), a += r[u], s = i[a], s !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof s) > -1 && u < r.length - 1)
          continue;
        o += u - o + 1;
        break;
      }
    i = s;
  }
  return i;
}, Me = (n) => n == null ? void 0 : n.replace("_", "-"), ro = {
  type: "logger",
  log(n) {
    this.output("log", n);
  },
  warn(n) {
    this.output("warn", n);
  },
  error(n) {
    this.output("error", n);
  },
  output(n, e) {
    var t, r;
    (r = (t = console == null ? void 0 : console[n]) == null ? void 0 : t.apply) == null || r.call(t, console, e);
  }
};
class He {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || ro, this.options = t, this.debug = t.debug;
  }
  log() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return this.forward(t, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return this.forward(t, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return this.forward(t, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, r, i) {
    return i && !this.debug ? null : (b(e[0]) && (e[0] = `${r}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new He(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new He(this.logger, e);
  }
}
var B = new He();
class Xe {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((r) => {
      this.observers[r] || (this.observers[r] = /* @__PURE__ */ new Map());
      const i = this.observers[r].get(t) || 0;
      this.observers[r].set(t, i + 1);
    }), this;
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e) {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
      r[i - 1] = arguments[i];
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((s) => {
      let [a, u] = s;
      for (let c = 0; c < u; c++)
        a(...r);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((s) => {
      let [a, u] = s;
      for (let c = 0; c < u; c++)
        a.apply(a, [e, ...r]);
    });
  }
}
class zt extends Xe {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, r) {
    var c, l;
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, s = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a;
    e.indexOf(".") > -1 ? a = e.split(".") : (a = [e, t], r && (Array.isArray(r) ? a.push(...r) : b(r) && o ? a.push(...r.split(o)) : a.push(r)));
    const u = _e(this.data, a);
    return !u && !t && !r && e.indexOf(".") > -1 && (e = a[0], t = a[1], r = a.slice(2).join(".")), u || !s || !b(r) ? u : ht((l = (c = this.data) == null ? void 0 : c[e]) == null ? void 0 : l[t], r, o);
  }
  addResource(e, t, r, i) {
    let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const s = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let a = [e, t];
    r && (a = a.concat(s ? r.split(s) : r)), e.indexOf(".") > -1 && (a = e.split("."), i = t, t = a[1]), this.addNamespaces(t), qt(this.data, a, i), o.silent || this.emit("added", e, t, r, i);
  }
  addResources(e, t, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const o in r)
      (b(r[o]) || Array.isArray(r[o])) && this.addResource(e, t, o, r[o], {
        silent: !0
      });
    i.silent || this.emit("added", e, t, r);
  }
  addResourceBundle(e, t, r, i, o) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, a = [e, t];
    e.indexOf(".") > -1 && (a = e.split("."), i = r, r = t, t = a[1]), this.addNamespaces(t);
    let u = _e(this.data, a) || {};
    s.skipCopy || (r = JSON.parse(JSON.stringify(r))), i ? Hn(u, r, o) : u = {
      ...u,
      ...r
    }, qt(this.data, a, u), s.silent || this.emit("added", e, t, r);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return t || (t = this.options.defaultNS), this.getResource(e, t);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!(t && Object.keys(t) || []).find((i) => t[i] && Object.keys(t[i]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Vn = {
  processors: {},
  addPostProcessor(n) {
    this.processors[n.name] = n;
  },
  handle(n, e, t, r, i) {
    return n.forEach((o) => {
      var s;
      e = ((s = this.processors[o]) == null ? void 0 : s.process(e, t, r, i)) ?? e;
    }), e;
  }
};
const Wt = {}, Jt = (n) => !b(n) && typeof n != "boolean" && typeof n != "number";
class Ve extends Xe {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Wi(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = B.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (e == null)
      return !1;
    const r = this.resolve(e, t);
    return (r == null ? void 0 : r.res) !== void 0;
  }
  extractFromKey(e, t) {
    let r = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const i = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let o = t.ns || this.options.defaultNS || [];
    const s = r && e.indexOf(r) > -1, a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !no(e, r, i);
    if (s && !a) {
      const u = e.match(this.interpolator.nestingRegexp);
      if (u && u.length > 0)
        return {
          key: e,
          namespaces: b(o) ? [o] : o
        };
      const c = e.split(r);
      (r !== i || r === i && this.options.ns.indexOf(c[0]) > -1) && (o = c.shift()), e = c.join(i);
    }
    return {
      key: e,
      namespaces: b(o) ? [o] : o
    };
  }
  translate(e, t, r) {
    if (typeof t != "object" && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), typeof t == "object" && (t = {
      ...t
    }), t || (t = {}), e == null) return "";
    Array.isArray(e) || (e = [String(e)]);
    const i = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails, o = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator, {
      key: s,
      namespaces: a
    } = this.extractFromKey(e[e.length - 1], t), u = a[a.length - 1], c = t.lng || this.language, l = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((c == null ? void 0 : c.toLowerCase()) === "cimode") {
      if (l) {
        const T = t.nsSeparator || this.options.nsSeparator;
        return i ? {
          res: `${u}${T}${s}`,
          usedKey: s,
          exactUsedKey: s,
          usedLng: c,
          usedNS: u,
          usedParams: this.getUsedParamsDetails(t)
        } : `${u}${T}${s}`;
      }
      return i ? {
        res: s,
        usedKey: s,
        exactUsedKey: s,
        usedLng: c,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(t)
      } : s;
    }
    const f = this.resolve(e, t);
    let d = f == null ? void 0 : f.res;
    const g = (f == null ? void 0 : f.usedKey) || s, m = (f == null ? void 0 : f.exactUsedKey) || s, v = ["[object Number]", "[object Function]", "[object RegExp]"], w = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, C = !this.i18nFormat || this.i18nFormat.handleAsObject, E = t.count !== void 0 && !b(t.count), L = Ve.hasDefaultValue(t), A = E ? this.pluralResolver.getSuffix(c, t.count, t) : "", z = t.ordinal && E ? this.pluralResolver.getSuffix(c, t.count, {
      ordinal: !1
    }) : "", W = E && !t.ordinal && t.count === 0, k = W && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${A}`] || t[`defaultValue${z}`] || t.defaultValue;
    let O = d;
    C && !d && L && (O = k);
    const P = Jt(O), I = Object.prototype.toString.apply(O);
    if (C && O && P && v.indexOf(I) < 0 && !(b(w) && Array.isArray(O))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const T = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(g, O, {
          ...t,
          ns: a
        }) : `key '${s} (${this.language})' returned an object instead of string.`;
        return i ? (f.res = T, f.usedParams = this.getUsedParamsDetails(t), f) : T;
      }
      if (o) {
        const T = Array.isArray(O), D = T ? [] : {}, Ct = T ? m : g;
        for (const _ in O)
          if (Object.prototype.hasOwnProperty.call(O, _)) {
            const q = `${Ct}${o}${_}`;
            L && !d ? D[_] = this.translate(q, {
              ...t,
              defaultValue: Jt(k) ? k[_] : void 0,
              joinArrays: !1,
              ns: a
            }) : D[_] = this.translate(q, {
              ...t,
              joinArrays: !1,
              ns: a
            }), D[_] === q && (D[_] = O[_]);
          }
        d = D;
      }
    } else if (C && b(w) && Array.isArray(d))
      d = d.join(w), d && (d = this.extendTranslation(d, e, t, r));
    else {
      let T = !1, D = !1;
      !this.isValidLookup(d) && L && (T = !0, d = k), this.isValidLookup(d) || (D = !0, d = s);
      const _ = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && D ? void 0 : d, q = L && k !== d && this.options.updateMissing;
      if (D || T || q) {
        if (this.logger.log(q ? "updateKey" : "missingKey", c, u, s, q ? k : d), o) {
          const N = this.resolve(s, {
            ...t,
            keySeparator: !1
          });
          N && N.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let fe = [];
        const Pe = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && Pe && Pe[0])
          for (let N = 0; N < Pe.length; N++)
            fe.push(Pe[N]);
        else this.options.saveMissingTo === "all" ? fe = this.languageUtils.toResolveHierarchy(t.lng || this.language) : fe.push(t.lng || this.language);
        const kt = (N, G, de) => {
          var It;
          const Pt = L && de !== d ? de : _;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(N, u, G, Pt, q, t) : (It = this.backendConnector) != null && It.saveMissing && this.backendConnector.saveMissing(N, u, G, Pt, q, t), this.emit("missingKey", N, u, G, d);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && E ? fe.forEach((N) => {
          const G = this.pluralResolver.getSuffixes(N, t);
          W && t[`defaultValue${this.options.pluralSeparator}zero`] && G.indexOf(`${this.options.pluralSeparator}zero`) < 0 && G.push(`${this.options.pluralSeparator}zero`), G.forEach((de) => {
            kt([N], s + de, t[`defaultValue${de}`] || k);
          });
        }) : kt(fe, s, k));
      }
      d = this.extendTranslation(d, e, t, f, r), D && d === s && this.options.appendNamespaceToMissingKey && (d = `${u}:${s}`), (D || T) && this.options.parseMissingKeyHandler && (d = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}:${s}` : s, T ? d : void 0));
    }
    return i ? (f.res = d, f.usedParams = this.getUsedParamsDetails(t), f) : d;
  }
  extendTranslation(e, t, r, i, o) {
    var c, l;
    var s = this;
    if ((c = this.i18nFormat) != null && c.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...r
      }, r.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
        resolved: i
      });
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({
        ...r,
        interpolation: {
          ...this.options.interpolation,
          ...r.interpolation
        }
      });
      const f = b(e) && (((l = r == null ? void 0 : r.interpolation) == null ? void 0 : l.skipOnVariables) !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let d;
      if (f) {
        const m = e.match(this.interpolator.nestingRegexp);
        d = m && m.length;
      }
      let g = r.replace && !b(r.replace) ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (g = {
        ...this.options.interpolation.defaultVariables,
        ...g
      }), e = this.interpolator.interpolate(e, g, r.lng || this.language || i.usedLng, r), f) {
        const m = e.match(this.interpolator.nestingRegexp), v = m && m.length;
        d < v && (r.nest = !1);
      }
      !r.lng && i && i.res && (r.lng = this.language || i.usedLng), r.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var m = arguments.length, v = new Array(m), w = 0; w < m; w++)
          v[w] = arguments[w];
        return (o == null ? void 0 : o[0]) === v[0] && !r.context ? (s.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${t[0]}`), null) : s.translate(...v, t);
      }, r)), r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess, u = b(a) ? [a] : a;
    return e != null && (u != null && u.length) && r.applyPostProcessor !== !1 && (e = Vn.handle(u, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...i,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, i, o, s, a;
    return b(e) && (e = [e]), e.forEach((u) => {
      if (this.isValidLookup(r)) return;
      const c = this.extractFromKey(u, t), l = c.key;
      i = l;
      let f = c.namespaces;
      this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
      const d = t.count !== void 0 && !b(t.count), g = d && !t.ordinal && t.count === 0, m = t.context !== void 0 && (b(t.context) || typeof t.context == "number") && t.context !== "", v = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      f.forEach((w) => {
        var C, E;
        this.isValidLookup(r) || (a = w, !Wt[`${v[0]}-${w}`] && ((C = this.utils) != null && C.hasLoadedNamespace) && !((E = this.utils) != null && E.hasLoadedNamespace(a)) && (Wt[`${v[0]}-${w}`] = !0, this.logger.warn(`key "${i}" for languages "${v.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), v.forEach((L) => {
          var W;
          if (this.isValidLookup(r)) return;
          s = L;
          const A = [l];
          if ((W = this.i18nFormat) != null && W.addLookupKeys)
            this.i18nFormat.addLookupKeys(A, l, L, w, t);
          else {
            let k;
            d && (k = this.pluralResolver.getSuffix(L, t.count, t));
            const O = `${this.options.pluralSeparator}zero`, P = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (d && (A.push(l + k), t.ordinal && k.indexOf(P) === 0 && A.push(l + k.replace(P, this.options.pluralSeparator)), g && A.push(l + O)), m) {
              const I = `${l}${this.options.contextSeparator}${t.context}`;
              A.push(I), d && (A.push(I + k), t.ordinal && k.indexOf(P) === 0 && A.push(I + k.replace(P, this.options.pluralSeparator)), g && A.push(I + O));
            }
          }
          let z;
          for (; z = A.pop(); )
            this.isValidLookup(r) || (o = z, r = this.getResource(L, w, z, t));
        }));
      });
    }), {
      res: r,
      usedKey: i,
      exactUsedKey: o,
      usedLng: s,
      usedNS: a
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, r) {
    var o;
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (o = this.i18nFormat) != null && o.getResource ? this.i18nFormat.getResource(e, t, r, i) : this.resourceStore.getResource(e, t, r, i);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = e.replace && !b(e.replace);
    let i = r ? e.replace : e;
    if (r && typeof e.count < "u" && (i.count = e.count), this.options.interpolation.defaultVariables && (i = {
      ...this.options.interpolation.defaultVariables,
      ...i
    }), !r) {
      i = {
        ...i
      };
      for (const o of t)
        delete i[o];
    }
    return i;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const r in e)
      if (Object.prototype.hasOwnProperty.call(e, r) && t === r.substring(0, t.length) && e[r] !== void 0)
        return !0;
    return !1;
  }
}
class Xt {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = B.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = Me(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = Me(e), !e || e.indexOf("-") < 0) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (b(e) && e.indexOf("-") > -1) {
      let t;
      try {
        t = Intl.getCanonicalLocales(e)[0];
      } catch {
      }
      return t && this.options.lowerCaseLng && (t = t.toLowerCase()), t || (this.options.lowerCaseLng ? e.toLowerCase() : e);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return e.forEach((r) => {
      if (t) return;
      const i = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(i)) && (t = i);
    }), !t && this.options.supportedLngs && e.forEach((r) => {
      if (t) return;
      const i = this.getLanguagePartFromCode(r);
      if (this.isSupportedCode(i)) return t = i;
      t = this.options.supportedLngs.find((o) => {
        if (o === i) return o;
        if (!(o.indexOf("-") < 0 && i.indexOf("-") < 0) && (o.indexOf("-") > 0 && i.indexOf("-") < 0 && o.substring(0, o.indexOf("-")) === i || o.indexOf(i) === 0 && i.length > 1))
          return o;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(t)), b(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let r = e[t];
    return r || (r = e[this.getScriptPartFromCode(t)]), r || (r = e[this.formatLanguageCode(t)]), r || (r = e[this.getLanguagePartFromCode(t)]), r || (r = e.default), r || [];
  }
  toResolveHierarchy(e, t) {
    const r = this.getFallbackCodes(t || this.options.fallbackLng || [], e), i = [], o = (s) => {
      s && (this.isSupportedCode(s) ? i.push(s) : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`));
    };
    return b(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(e))) : b(e) && o(this.formatLanguageCode(e)), r.forEach((s) => {
      i.indexOf(s) < 0 && o(this.formatLanguageCode(s));
    }), i;
  }
}
const Gt = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Yt = {
  select: (n) => n === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class io {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = B.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = Me(e === "dev" ? "en" : e), i = t.ordinal ? "ordinal" : "cardinal", o = JSON.stringify({
      cleanedCode: r,
      type: i
    });
    if (o in this.pluralRulesCache)
      return this.pluralRulesCache[o];
    let s;
    try {
      s = new Intl.PluralRules(r, {
        type: i
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), Yt;
      if (!e.match(/-|_/)) return Yt;
      const u = this.languageUtils.getLanguagePartFromCode(e);
      s = this.getRule(u, t);
    }
    return this.pluralRulesCache[o] = s, s;
  }
  needsPlural(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = this.getRule(e, t);
    return r || (r = this.getRule("dev", t)), (r == null ? void 0 : r.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, r).map((i) => `${t}${i}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = this.getRule(e, t);
    return r || (r = this.getRule("dev", t)), r ? r.resolvedOptions().pluralCategories.sort((i, o) => Gt[i] - Gt[o]).map((i) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : [];
  }
  getSuffix(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const i = this.getRule(e, r);
    return i ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, r));
  }
}
const Qt = function(n, e, t) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, o = Gi(n, e, t);
  return !o && i && b(t) && (o = ht(n, t, r), o === void 0 && (o = ht(e, t, r))), o;
}, ot = (n) => n.replace(/\$/g, "$$$$");
class oo {
  constructor() {
    var t;
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = B.create("interpolator"), this.options = e, this.format = ((t = e == null ? void 0 : e.interpolation) == null ? void 0 : t.format) || ((r) => r), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: r,
      useRawValueToEscape: i,
      prefix: o,
      prefixEscaped: s,
      suffix: a,
      suffixEscaped: u,
      formatSeparator: c,
      unescapeSuffix: l,
      unescapePrefix: f,
      nestingPrefix: d,
      nestingPrefixEscaped: g,
      nestingSuffix: m,
      nestingSuffixEscaped: v,
      nestingOptionsSeparator: w,
      maxReplaces: C,
      alwaysFormat: E
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Qi, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = i !== void 0 ? i : !1, this.prefix = o ? te(o) : s || "{{", this.suffix = a ? te(a) : u || "}}", this.formatSeparator = c || ",", this.unescapePrefix = l ? "" : f || "-", this.unescapeSuffix = this.unescapePrefix ? "" : l || "", this.nestingPrefix = d ? te(d) : g || te("$t("), this.nestingSuffix = m ? te(m) : v || te(")"), this.nestingOptionsSeparator = w || ",", this.maxReplaces = C || 1e3, this.alwaysFormat = E !== void 0 ? E : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, r) => (t == null ? void 0 : t.source) === r ? (t.lastIndex = 0, t) : new RegExp(r, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, r, i) {
    var g;
    let o, s, a;
    const u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, c = (m) => {
      if (m.indexOf(this.formatSeparator) < 0) {
        const E = Qt(t, u, m, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(E, void 0, r, {
          ...i,
          ...t,
          interpolationkey: m
        }) : E;
      }
      const v = m.split(this.formatSeparator), w = v.shift().trim(), C = v.join(this.formatSeparator).trim();
      return this.format(Qt(t, u, w, this.options.keySeparator, this.options.ignoreJSONStructure), C, r, {
        ...i,
        ...t,
        interpolationkey: w
      });
    };
    this.resetRegExp();
    const l = (i == null ? void 0 : i.missingInterpolationHandler) || this.options.missingInterpolationHandler, f = ((g = i == null ? void 0 : i.interpolation) == null ? void 0 : g.skipOnVariables) !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (m) => ot(m)
    }, {
      regex: this.regexp,
      safeValue: (m) => this.escapeValue ? ot(this.escape(m)) : ot(m)
    }].forEach((m) => {
      for (a = 0; o = m.regex.exec(e); ) {
        const v = o[1].trim();
        if (s = c(v), s === void 0)
          if (typeof l == "function") {
            const C = l(e, o, i);
            s = b(C) ? C : "";
          } else if (i && Object.prototype.hasOwnProperty.call(i, v))
            s = "";
          else if (f) {
            s = o[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${v} for interpolating ${e}`), s = "";
        else !b(s) && !this.useRawValueToEscape && (s = Vt(s));
        const w = m.safeValue(s);
        if (e = e.replace(o[0], w), f ? (m.regex.lastIndex += s.length, m.regex.lastIndex -= o[0].length) : m.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i, o, s;
    const a = (u, c) => {
      const l = this.nestingOptionsSeparator;
      if (u.indexOf(l) < 0) return u;
      const f = u.split(new RegExp(`${l}[ ]*{`));
      let d = `{${f[1]}`;
      u = f[0], d = this.interpolate(d, s);
      const g = d.match(/'/g), m = d.match(/"/g);
      (((g == null ? void 0 : g.length) ?? 0) % 2 === 0 && !m || m.length % 2 !== 0) && (d = d.replace(/'/g, '"'));
      try {
        s = JSON.parse(d), c && (s = {
          ...c,
          ...s
        });
      } catch (v) {
        return this.logger.warn(`failed parsing options string in nesting for key ${u}`, v), `${u}${l}${d}`;
      }
      return s.defaultValue && s.defaultValue.indexOf(this.prefix) > -1 && delete s.defaultValue, u;
    };
    for (; i = this.nestingRegexp.exec(e); ) {
      let u = [];
      s = {
        ...r
      }, s = s.replace && !b(s.replace) ? s.replace : s, s.applyPostProcessor = !1, delete s.defaultValue;
      let c = !1;
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const l = i[1].split(this.formatSeparator).map((f) => f.trim());
        i[1] = l.shift(), u = l, c = !0;
      }
      if (o = t(a.call(this, i[1].trim(), s), s), o && i[0] === e && !b(o)) return o;
      b(o) || (o = Vt(o)), o || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`), o = ""), c && (o = u.reduce((l, f) => this.format(l, f, r.lng, {
        ...r,
        interpolationkey: i[1].trim()
      }), o.trim())), e = e.replace(i[0], o), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const so = (n) => {
  let e = n.toLowerCase().trim();
  const t = {};
  if (n.indexOf("(") > -1) {
    const r = n.split("(");
    e = r[0].toLowerCase().trim();
    const i = r[1].substring(0, r[1].length - 1);
    e === "currency" && i.indexOf(":") < 0 ? t.currency || (t.currency = i.trim()) : e === "relativetime" && i.indexOf(":") < 0 ? t.range || (t.range = i.trim()) : i.split(";").forEach((s) => {
      if (s) {
        const [a, ...u] = s.split(":"), c = u.join(":").trim().replace(/^'+|'+$/g, ""), l = a.trim();
        t[l] || (t[l] = c), c === "false" && (t[l] = !1), c === "true" && (t[l] = !0), isNaN(c) || (t[l] = parseInt(c, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, ne = (n) => {
  const e = {};
  return (t, r, i) => {
    let o = i;
    i && i.interpolationkey && i.formatParams && i.formatParams[i.interpolationkey] && i[i.interpolationkey] && (o = {
      ...o,
      [i.interpolationkey]: void 0
    });
    const s = r + JSON.stringify(o);
    let a = e[s];
    return a || (a = n(Me(r), i), e[s] = a), a(t);
  };
};
class ao {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = B.create("formatter"), this.options = e, this.formats = {
      number: ne((t, r) => {
        const i = new Intl.NumberFormat(t, {
          ...r
        });
        return (o) => i.format(o);
      }),
      currency: ne((t, r) => {
        const i = new Intl.NumberFormat(t, {
          ...r,
          style: "currency"
        });
        return (o) => i.format(o);
      }),
      datetime: ne((t, r) => {
        const i = new Intl.DateTimeFormat(t, {
          ...r
        });
        return (o) => i.format(o);
      }),
      relativetime: ne((t, r) => {
        const i = new Intl.RelativeTimeFormat(t, {
          ...r
        });
        return (o) => i.format(o, r.range || "day");
      }),
      list: ne((t, r) => {
        const i = new Intl.ListFormat(t, {
          ...r
        });
        return (o) => i.format(o);
      })
    }, this.init(e);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = t.interpolation.formatSeparator || ",";
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = ne(t);
  }
  format(e, t, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o = t.split(this.formatSeparator);
    if (o.length > 1 && o[0].indexOf("(") > 1 && o[0].indexOf(")") < 0 && o.find((a) => a.indexOf(")") > -1)) {
      const a = o.findIndex((u) => u.indexOf(")") > -1);
      o[0] = [o[0], ...o.splice(1, a)].join(this.formatSeparator);
    }
    return o.reduce((a, u) => {
      var f;
      const {
        formatName: c,
        formatOptions: l
      } = so(u);
      if (this.formats[c]) {
        let d = a;
        try {
          const g = ((f = i == null ? void 0 : i.formatParams) == null ? void 0 : f[i.interpolationkey]) || {}, m = g.locale || g.lng || i.locale || i.lng || r;
          d = this.formats[c](a, m, {
            ...l,
            ...i,
            ...g
          });
        } catch (g) {
          this.logger.warn(g);
        }
        return d;
      } else
        this.logger.warn(`there was no format function for ${c}`);
      return a;
    }, e);
  }
}
const uo = (n, e) => {
  n.pending[e] !== void 0 && (delete n.pending[e], n.pendingCount--);
};
class lo extends Xe {
  constructor(e, t, r) {
    var o, s;
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = r, this.languageUtils = r.languageUtils, this.options = i, this.logger = B.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], (s = (o = this.backend) == null ? void 0 : o.init) == null || s.call(o, r, i.backend, i);
  }
  queueLoad(e, t, r, i) {
    const o = {}, s = {}, a = {}, u = {};
    return e.forEach((c) => {
      let l = !0;
      t.forEach((f) => {
        const d = `${c}|${f}`;
        !r.reload && this.store.hasResourceBundle(c, f) ? this.state[d] = 2 : this.state[d] < 0 || (this.state[d] === 1 ? s[d] === void 0 && (s[d] = !0) : (this.state[d] = 1, l = !1, s[d] === void 0 && (s[d] = !0), o[d] === void 0 && (o[d] = !0), u[f] === void 0 && (u[f] = !0)));
      }), l || (a[c] = !0);
    }), (Object.keys(o).length || Object.keys(s).length) && this.queue.push({
      pending: s,
      pendingCount: Object.keys(s).length,
      loaded: {},
      errors: [],
      callback: i
    }), {
      toLoad: Object.keys(o),
      pending: Object.keys(s),
      toLoadLanguages: Object.keys(a),
      toLoadNamespaces: Object.keys(u)
    };
  }
  loaded(e, t, r) {
    const i = e.split("|"), o = i[0], s = i[1];
    t && this.emit("failedLoading", o, s, t), !t && r && this.store.addResourceBundle(o, s, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && r && (this.state[e] = 0);
    const a = {};
    this.queue.forEach((u) => {
      Xi(u.loaded, [o], s), uo(u, e), t && u.errors.push(t), u.pendingCount === 0 && !u.done && (Object.keys(u.loaded).forEach((c) => {
        a[c] || (a[c] = {});
        const l = u.loaded[c];
        l.length && l.forEach((f) => {
          a[c][f] === void 0 && (a[c][f] = !0);
        });
      }), u.done = !0, u.errors.length ? u.callback(u.errors) : u.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter((u) => !u.done);
  }
  read(e, t, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, s = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length) return s(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: r,
        tried: i,
        wait: o,
        callback: s
      });
      return;
    }
    this.readingCalls++;
    const a = (c, l) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const f = this.waitingReads.shift();
        this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
      }
      if (c && l && i < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, r, i + 1, o * 2, s);
        }, o);
        return;
      }
      s(c, l);
    }, u = this.backend[r].bind(this.backend);
    if (u.length === 2) {
      try {
        const c = u(e, t);
        c && typeof c.then == "function" ? c.then((l) => a(null, l)).catch(a) : a(null, c);
      } catch (c) {
        a(c);
      }
      return;
    }
    return u(e, t, a);
  }
  prepareLoading(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
    b(e) && (e = this.languageUtils.toResolveHierarchy(e)), b(t) && (t = [t]);
    const o = this.queueLoad(e, t, r, i);
    if (!o.toLoad.length)
      return o.pending.length || i(), null;
    o.toLoad.forEach((s) => {
      this.loadOne(s);
    });
  }
  load(e, t, r) {
    this.prepareLoading(e, t, {}, r);
  }
  reload(e, t, r) {
    this.prepareLoading(e, t, {
      reload: !0
    }, r);
  }
  loadOne(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = e.split("|"), i = r[0], o = r[1];
    this.read(i, o, "read", void 0, void 0, (s, a) => {
      s && this.logger.warn(`${t}loading namespace ${o} for language ${i} failed`, s), !s && a && this.logger.log(`${t}loaded namespace ${o} for language ${i}`, a), this.loaded(e, s, a);
    });
  }
  saveMissing(e, t, r, i, o) {
    var u, c, l, f, d;
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if ((c = (u = this.services) == null ? void 0 : u.utils) != null && c.hasLoadedNamespace && !((f = (l = this.services) == null ? void 0 : l.utils) != null && f.hasLoadedNamespace(t))) {
      this.logger.warn(`did not save key "${r}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if ((d = this.backend) != null && d.create) {
        const g = {
          ...s,
          isUpdate: o
        }, m = this.backend.create.bind(this.backend);
        if (m.length < 6)
          try {
            let v;
            m.length === 5 ? v = m(e, t, r, i, g) : v = m(e, t, r, i), v && typeof v.then == "function" ? v.then((w) => a(null, w)).catch(a) : a(null, v);
          } catch (v) {
            a(v);
          }
        else
          m(e, t, r, i, a, g);
      }
      !e || !e[0] || this.store.addResource(e[0], t, r, i);
    }
  }
}
const Zt = () => ({
  debug: !1,
  initAsync: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (n) => {
    let e = {};
    if (typeof n[1] == "object" && (e = n[1]), b(n[1]) && (e.defaultValue = n[1]), b(n[2]) && (e.tDescription = n[2]), typeof n[2] == "object" || typeof n[3] == "object") {
      const t = n[3] || n[2];
      Object.keys(t).forEach((r) => {
        e[r] = t[r];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (n) => n,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  }
}), en = (n) => {
  var e, t;
  return b(n.ns) && (n.ns = [n.ns]), b(n.fallbackLng) && (n.fallbackLng = [n.fallbackLng]), b(n.fallbackNS) && (n.fallbackNS = [n.fallbackNS]), ((t = (e = n.supportedLngs) == null ? void 0 : e.indexOf) == null ? void 0 : t.call(e, "cimode")) < 0 && (n.supportedLngs = n.supportedLngs.concat(["cimode"])), typeof n.initImmediate == "boolean" && (n.initAsync = n.initImmediate), n;
}, Re = () => {
}, co = (n) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((t) => {
    typeof n[t] == "function" && (n[t] = n[t].bind(n));
  });
};
class Se extends Xe {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = en(e), this.services = {}, this.logger = B, this.modules = {
      external: []
    }, co(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof t == "function" && (r = t, t = {}), t.defaultNS == null && t.ns && (b(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const i = Zt();
    this.options = {
      ...i,
      ...this.options,
      ...en(t)
    }, this.options.interpolation = {
      ...i.interpolation,
      ...this.options.interpolation
    }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const o = (l) => l ? typeof l == "function" ? new l() : l : null;
    if (!this.options.isClone) {
      this.modules.logger ? B.init(o(this.modules.logger), this.options) : B.init(null, this.options);
      let l;
      this.modules.formatter ? l = this.modules.formatter : l = ao;
      const f = new Xt(this.options);
      this.store = new zt(this.options.resources, this.options);
      const d = this.services;
      d.logger = B, d.resourceStore = this.store, d.languageUtils = f, d.pluralResolver = new io(f, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), l && (!this.options.interpolation.format || this.options.interpolation.format === i.interpolation.format) && (d.formatter = o(l), d.formatter.init(d, this.options), this.options.interpolation.format = d.formatter.format.bind(d.formatter)), d.interpolator = new oo(this.options), d.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, d.backendConnector = new lo(o(this.modules.backend), d.resourceStore, d, this.options), d.backendConnector.on("*", function(g) {
        for (var m = arguments.length, v = new Array(m > 1 ? m - 1 : 0), w = 1; w < m; w++)
          v[w - 1] = arguments[w];
        e.emit(g, ...v);
      }), this.modules.languageDetector && (d.languageDetector = o(this.modules.languageDetector), d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)), this.modules.i18nFormat && (d.i18nFormat = o(this.modules.i18nFormat), d.i18nFormat.init && d.i18nFormat.init(this)), this.translator = new Ve(this.services, this.options), this.translator.on("*", function(g) {
        for (var m = arguments.length, v = new Array(m > 1 ? m - 1 : 0), w = 1; w < m; w++)
          v[w - 1] = arguments[w];
        e.emit(g, ...v);
      }), this.modules.external.forEach((g) => {
        g.init && g.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = Re), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const l = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      l.length > 0 && l[0] !== "dev" && (this.options.lng = l[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((l) => {
      this[l] = function() {
        return e.store[l](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((l) => {
      this[l] = function() {
        return e.store[l](...arguments), e;
      };
    });
    const u = ge(), c = () => {
      const l = (f, d) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), u.resolve(d), r(f, d);
      };
      if (this.languages && !this.isInitialized) return l(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, l);
    };
    return this.options.resources || !this.options.initAsync ? c() : setTimeout(c, 0), u;
  }
  loadResources(e) {
    var o, s;
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Re;
    const i = b(e) ? e : this.language;
    if (typeof e == "function" && (r = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((i == null ? void 0 : i.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return r();
      const a = [], u = (c) => {
        if (!c || c === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(c).forEach((f) => {
          f !== "cimode" && a.indexOf(f) < 0 && a.push(f);
        });
      };
      i ? u(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => u(l)), (s = (o = this.options.preload) == null ? void 0 : o.forEach) == null || s.call(o, (c) => u(c)), this.services.backendConnector.load(a, this.options.ns, (c) => {
        !c && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(c);
      });
    } else
      r(null);
  }
  reloadResources(e, t, r) {
    const i = ge();
    return typeof e == "function" && (r = e, e = void 0), typeof t == "function" && (r = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), r || (r = Re), this.services.backendConnector.reload(e, t, (o) => {
      i.resolve(), r(o);
    }), i;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Vn.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
      for (let t = 0; t < this.languages.length; t++) {
        const r = this.languages[t];
        if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(e, t) {
    var r = this;
    this.isLanguageChangingTo = e;
    const i = ge();
    this.emit("languageChanging", e);
    const o = (u) => {
      this.language = u, this.languages = this.services.languageUtils.toResolveHierarchy(u), this.resolvedLanguage = void 0, this.setResolvedLanguage(u);
    }, s = (u, c) => {
      c ? (o(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, i.resolve(function() {
        return r.t(...arguments);
      }), t && t(u, function() {
        return r.t(...arguments);
      });
    }, a = (u) => {
      var l, f;
      !e && !u && this.services.languageDetector && (u = []);
      const c = b(u) ? u : this.services.languageUtils.getBestMatchFromCodes(u);
      c && (this.language || o(c), this.translator.language || this.translator.changeLanguage(c), (f = (l = this.services.languageDetector) == null ? void 0 : l.cacheUserLanguage) == null || f.call(l, c)), this.loadResources(c, (d) => {
        s(d, c);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e), i;
  }
  getFixedT(e, t, r) {
    var i = this;
    const o = function(s, a) {
      let u;
      if (typeof a != "object") {
        for (var c = arguments.length, l = new Array(c > 2 ? c - 2 : 0), f = 2; f < c; f++)
          l[f - 2] = arguments[f];
        u = i.options.overloadTranslationOptionHandler([s, a].concat(l));
      } else
        u = {
          ...a
        };
      u.lng = u.lng || o.lng, u.lngs = u.lngs || o.lngs, u.ns = u.ns || o.ns, u.keyPrefix !== "" && (u.keyPrefix = u.keyPrefix || r || o.keyPrefix);
      const d = i.options.keySeparator || ".";
      let g;
      return u.keyPrefix && Array.isArray(s) ? g = s.map((m) => `${u.keyPrefix}${d}${m}`) : g = u.keyPrefix ? `${u.keyPrefix}${d}${s}` : s, i.t(g, u);
    };
    return b(e) ? o.lng = e : o.lngs = e, o.ns = t, o.keyPrefix = r, o;
  }
  t() {
    var i;
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return (i = this.translator) == null ? void 0 : i.translate(...t);
  }
  exists() {
    var i;
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return (i = this.translator) == null ? void 0 : i.exists(...t);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const r = t.lng || this.resolvedLanguage || this.languages[0], i = this.options ? this.options.fallbackLng : !1, o = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const s = (a, u) => {
      const c = this.services.backendConnector.state[`${a}|${u}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (t.precheck) {
      const a = t.precheck(this, s);
      if (a !== void 0) return a;
    }
    return !!(this.hasResourceBundle(r, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(r, e) && (!i || s(o, e)));
  }
  loadNamespaces(e, t) {
    const r = ge();
    return this.options.ns ? (b(e) && (e = [e]), e.forEach((i) => {
      this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
    }), this.loadResources((i) => {
      r.resolve(), t && t(i);
    }), r) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const r = ge();
    b(e) && (e = [e]);
    const i = this.options.preload || [], o = e.filter((s) => i.indexOf(s) < 0 && this.services.languageUtils.isSupportedCode(s));
    return o.length ? (this.options.preload = i.concat(o), this.loadResources((s) => {
      r.resolve(), t && t(s);
    }), r) : (t && t(), Promise.resolve());
  }
  dir(e) {
    var i, o;
    if (e || (e = this.resolvedLanguage || (((i = this.languages) == null ? void 0 : i.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = ((o = this.services) == null ? void 0 : o.languageUtils) || new Xt(Zt());
    return t.indexOf(r.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new Se(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Re;
    const r = e.forkResourceStore;
    r && delete e.forkResourceStore;
    const i = {
      ...this.options,
      ...e,
      isClone: !0
    }, o = new Se(i);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (o.logger = o.logger.clone(e)), ["store", "services", "language"].forEach((a) => {
      o[a] = this[a];
    }), o.services = {
      ...this.services
    }, o.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, r) {
      const a = Object.keys(this.store.data).reduce((u, c) => (u[c] = {
        ...this.store.data[c]
      }, Object.keys(u[c]).reduce((l, f) => (l[f] = {
        ...u[c][f]
      }, l), {})), {});
      o.store = new zt(a, i), o.services.resourceStore = o.store;
    }
    return o.translator = new Ve(o.services, i), o.translator.on("*", function(a) {
      for (var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), l = 1; l < u; l++)
        c[l - 1] = arguments[l];
      o.emit(a, ...c);
    }), o.init(i, t), o.translator.options = i, o.translator.backendConnector.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, o;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const re = Se.createInstance();
re.createInstance = Se.createInstance;
const {
  slice: fo,
  forEach: po
} = [];
function ho(n) {
  return po.call(fo.call(arguments, 1), (e) => {
    if (e)
      for (const t in e)
        n[t] === void 0 && (n[t] = e[t]);
  }), n;
}
const tn = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, go = function(n, e) {
  const r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    path: "/"
  }, i = encodeURIComponent(e);
  let o = `${n}=${i}`;
  if (r.maxAge > 0) {
    const s = r.maxAge - 0;
    if (Number.isNaN(s)) throw new Error("maxAge should be a Number");
    o += `; Max-Age=${Math.floor(s)}`;
  }
  if (r.domain) {
    if (!tn.test(r.domain))
      throw new TypeError("option domain is invalid");
    o += `; Domain=${r.domain}`;
  }
  if (r.path) {
    if (!tn.test(r.path))
      throw new TypeError("option path is invalid");
    o += `; Path=${r.path}`;
  }
  if (r.expires) {
    if (typeof r.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    o += `; Expires=${r.expires.toUTCString()}`;
  }
  if (r.httpOnly && (o += "; HttpOnly"), r.secure && (o += "; Secure"), r.sameSite)
    switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
      case !0:
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "strict":
        o += "; SameSite=Strict";
        break;
      case "none":
        o += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return o;
}, nn = {
  create(n, e, t, r) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    t && (i.expires = /* @__PURE__ */ new Date(), i.expires.setTime(i.expires.getTime() + t * 60 * 1e3)), r && (i.domain = r), document.cookie = go(n, encodeURIComponent(e), i);
  },
  read(n) {
    const e = `${n}=`, t = document.cookie.split(";");
    for (let r = 0; r < t.length; r++) {
      let i = t[r];
      for (; i.charAt(0) === " "; ) i = i.substring(1, i.length);
      if (i.indexOf(e) === 0) return i.substring(e.length, i.length);
    }
    return null;
  },
  remove(n) {
    this.create(n, "", -1);
  }
};
var mo = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(n) {
    let {
      lookupCookie: e
    } = n;
    if (e && typeof document < "u")
      return nn.read(e) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(n, e) {
    let {
      lookupCookie: t,
      cookieMinutes: r,
      cookieDomain: i,
      cookieOptions: o
    } = e;
    t && typeof document < "u" && nn.create(t, n, r, i, o);
  }
}, yo = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(n) {
    var r;
    let {
      lookupQuerystring: e
    } = n, t;
    if (typeof window < "u") {
      let {
        search: i
      } = window.location;
      !window.location.search && ((r = window.location.hash) == null ? void 0 : r.indexOf("?")) > -1 && (i = window.location.hash.substring(window.location.hash.indexOf("?")));
      const s = i.substring(1).split("&");
      for (let a = 0; a < s.length; a++) {
        const u = s[a].indexOf("=");
        u > 0 && s[a].substring(0, u) === e && (t = s[a].substring(u + 1));
      }
    }
    return t;
  }
};
let me = null;
const rn = () => {
  if (me !== null) return me;
  try {
    me = window !== "undefined" && window.localStorage !== null;
    const n = "i18next.translate.boo";
    window.localStorage.setItem(n, "foo"), window.localStorage.removeItem(n);
  } catch {
    me = !1;
  }
  return me;
};
var vo = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(n) {
    let {
      lookupLocalStorage: e
    } = n;
    if (e && rn())
      return window.localStorage.getItem(e) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(n, e) {
    let {
      lookupLocalStorage: t
    } = e;
    t && rn() && window.localStorage.setItem(t, n);
  }
};
let ye = null;
const on = () => {
  if (ye !== null) return ye;
  try {
    ye = window !== "undefined" && window.sessionStorage !== null;
    const n = "i18next.translate.boo";
    window.sessionStorage.setItem(n, "foo"), window.sessionStorage.removeItem(n);
  } catch {
    ye = !1;
  }
  return ye;
};
var wo = {
  name: "sessionStorage",
  lookup(n) {
    let {
      lookupSessionStorage: e
    } = n;
    if (e && on())
      return window.sessionStorage.getItem(e) || void 0;
  },
  cacheUserLanguage(n, e) {
    let {
      lookupSessionStorage: t
    } = e;
    t && on() && window.sessionStorage.setItem(t, n);
  }
}, bo = {
  name: "navigator",
  lookup(n) {
    const e = [];
    if (typeof navigator < "u") {
      const {
        languages: t,
        userLanguage: r,
        language: i
      } = navigator;
      if (t)
        for (let o = 0; o < t.length; o++)
          e.push(t[o]);
      r && e.push(r), i && e.push(i);
    }
    return e.length > 0 ? e : void 0;
  }
}, So = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(n) {
    let {
      htmlTag: e
    } = n, t;
    const r = e || (typeof document < "u" ? document.documentElement : null);
    return r && typeof r.getAttribute == "function" && (t = r.getAttribute("lang")), t;
  }
}, xo = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(n) {
    var i;
    let {
      lookupFromPathIndex: e
    } = n;
    if (typeof window > "u") return;
    const t = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    return Array.isArray(t) ? (i = t[typeof e == "number" ? e : 0]) == null ? void 0 : i.replace("/", "") : void 0;
  }
}, Oo = {
  name: "subdomain",
  lookup(n) {
    var i, o;
    let {
      lookupFromSubdomainIndex: e
    } = n;
    const t = typeof e == "number" ? e + 1 : 1, r = typeof window < "u" && ((o = (i = window.location) == null ? void 0 : i.hostname) == null ? void 0 : o.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
    if (r)
      return r[t];
  }
};
let Bn = !1;
try {
  Bn = !0;
} catch {
}
const Kn = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
Bn || Kn.splice(1, 1);
const Eo = () => ({
  order: Kn,
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  // cache user language
  caches: ["localStorage"],
  excludeCacheFor: ["cimode"],
  // cookieMinutes: 10,
  // cookieDomain: 'myDomain'
  convertDetectedLanguage: (n) => n
});
class qn {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(e, t);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      languageUtils: {}
    }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = e, this.options = ho(t, this.options || {}, Eo()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (i) => i.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = r, this.addDetector(mo), this.addDetector(yo), this.addDetector(vo), this.addDetector(wo), this.addDetector(bo), this.addDetector(So), this.addDetector(xo), this.addDetector(Oo);
  }
  addDetector(e) {
    return this.detectors[e.name] = e, this;
  }
  detect() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order, t = [];
    return e.forEach((r) => {
      if (this.detectors[r]) {
        let i = this.detectors[r].lookup(this.options);
        i && typeof i == "string" && (i = [i]), i && (t = t.concat(i));
      }
    }), t = t.map((r) => this.options.convertDetectedLanguage(r)), this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes ? t : t.length > 0 ? t[0] : null;
  }
  cacheUserLanguage(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
    t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach((r) => {
      this.detectors[r] && this.detectors[r].cacheUserLanguage(e, this.options);
    }));
  }
}
qn.type = "languageDetector";
function To(n, e) {
  if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function xe(n) {
  "@babel/helpers - typeof";
  return xe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, xe(n);
}
function Lo(n, e) {
  if (xe(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e);
    if (xe(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
function Co(n) {
  var e = Lo(n, "string");
  return xe(e) == "symbol" ? e : e + "";
}
function ko(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, Co(r.key), r);
  }
}
function Po(n, e, t) {
  return e && ko(n.prototype, e), Object.defineProperty(n, "prototype", {
    writable: !1
  }), n;
}
var zn = [], Io = zn.forEach, Ro = zn.slice;
function $o(n) {
  return Io.call(Ro.call(arguments, 1), function(e) {
    if (e)
      for (var t in e)
        n[t] === void 0 && (n[t] = e[t]);
  }), n;
}
function Ao(n) {
  return n ? typeof n == "function" ? new n() : n : null;
}
function No() {
  return {
    handleEmptyResourcesAsFailed: !0,
    cacheHitMode: "none"
    // reloadInterval: typeof window !== 'undefined' ? false : 60 * 60 * 1000
    // refreshExpirationTime: 60 * 60 * 1000
  };
}
function sn(n, e, t, r) {
  var i = n.read.bind(n);
  if (i.length === 2) {
    try {
      var o = i(e, t);
      o && typeof o.then == "function" ? o.then(function(s) {
        return r(null, s);
      }).catch(r) : r(null, o);
    } catch (s) {
      r(s);
    }
    return;
  }
  i(e, t, r);
}
var Wn = /* @__PURE__ */ function() {
  function n(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    To(this, n), this.backends = [], this.type = "backend", this.allOptions = r, this.init(e, t);
  }
  return Po(n, [{
    key: "init",
    value: function(t) {
      var r = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = t, this.options = $o(i, this.options || {}, No()), this.allOptions = o, this.options.backends && this.options.backends.forEach(function(s, a) {
        r.backends[a] = r.backends[a] || Ao(s), r.backends[a].init(t, r.options.backendOptions && r.options.backendOptions[a] || {}, o);
      }), this.services && this.options.reloadInterval && setInterval(function() {
        return r.reload();
      }, this.options.reloadInterval);
    }
  }, {
    key: "read",
    value: function(t, r, i) {
      var o = this, s = this.backends.length, a = function c(l) {
        if (l >= s) return i(new Error("non of the backend loaded data", !0));
        var f = l === s - 1, d = o.options.handleEmptyResourcesAsFailed && !f ? 0 : -1, g = o.backends[l];
        g.read ? sn(g, t, r, function(m, v, w) {
          if (!m && v && Object.keys(v).length > d) {
            if (i(null, v, l), u(l - 1, v), g.save && o.options.cacheHitMode && ["refresh", "refreshAndUpdateStore"].indexOf(o.options.cacheHitMode) > -1) {
              if (w && o.options.refreshExpirationTime && w + o.options.refreshExpirationTime > Date.now()) return;
              var C = o.backends[l + 1];
              C && C.read && sn(C, t, r, function(E, L) {
                E || L && (Object.keys(L).length <= d || (u(l, L), o.options.cacheHitMode === "refreshAndUpdateStore" && o.services && o.services.resourceStore && o.services.resourceStore.addResourceBundle(t, r, L)));
              });
            }
          } else
            c(l + 1);
        }) : c(l + 1);
      }, u = function c(l, f) {
        if (!(l < 0)) {
          var d = o.backends[l];
          d.save && d.save(t, r, f), c(l - 1, f);
        }
      };
      a(0);
    }
  }, {
    key: "create",
    value: function(t, r, i, o) {
      var s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : function() {
      }, a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
      this.backends.forEach(function(u) {
        if (u.create) {
          var c = u.create.bind(u);
          if (c.length < 6) {
            try {
              var l;
              c.length === 5 ? l = c(t, r, i, o, a) : l = c(t, r, i, o), l && typeof l.then == "function" ? l.then(function(f) {
                return s(null, f);
              }).catch(s) : s(null, l);
            } catch (f) {
              s(f);
            }
            return;
          }
          c(t, r, i, o, s, a);
        }
      });
    }
  }, {
    key: "reload",
    value: function() {
      var t = this, r = this.services, i = r.backendConnector, o = r.languageUtils, s = r.logger, a = i.language;
      if (!(a && a.toLowerCase() === "cimode")) {
        var u = [], c = function(f) {
          var d = o.toResolveHierarchy(f);
          d.forEach(function(g) {
            u.indexOf(g) < 0 && u.push(g);
          });
        };
        c(a), this.allOptions.preload && this.allOptions.preload.forEach(function(l) {
          return c(l);
        }), u.forEach(function(l) {
          t.allOptions.ns.forEach(function(f) {
            i.read(l, f, "read", null, null, function(d, g) {
              d && s.warn("loading namespace ".concat(f, " for language ").concat(l, " failed"), d), !d && g && s.log("loaded namespace ".concat(f, " for language ").concat(l), g), i.loaded("".concat(l, "|").concat(f), d, g);
            });
          });
        });
      }
    }
  }]), n;
}();
Wn.type = "backend";
function gt(n) {
  "@babel/helpers - typeof";
  return gt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, gt(n);
}
function Jn() {
  return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : gt(XMLHttpRequest)) === "object";
}
function jo(n) {
  return !!n && typeof n.then == "function";
}
function Uo(n) {
  return jo(n) ? n : Promise.resolve(n);
}
function an(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function un(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? an(Object(t), !0).forEach(function(r) {
      Do(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : an(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Do(n, e, t) {
  return (e = Fo(e)) in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function Fo(n) {
  var e = _o(n, "string");
  return Z(e) == "symbol" ? e : e + "";
}
function _o(n, e) {
  if (Z(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e);
    if (Z(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function Z(n) {
  "@babel/helpers - typeof";
  return Z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Z(n);
}
var J = typeof fetch == "function" ? fetch : void 0;
typeof global < "u" && global.fetch ? J = global.fetch : typeof window < "u" && window.fetch && (J = window.fetch);
var Oe;
Jn() && (typeof global < "u" && global.XMLHttpRequest ? Oe = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (Oe = window.XMLHttpRequest));
var Be;
typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? Be = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (Be = window.ActiveXObject));
typeof J != "function" && (J = void 0);
if (!J && !Oe && !Be)
  try {
    import("./browser-ponyfill-CvzSbL_o.js").then((n) => n.b).then(function(n) {
      J = n.default;
    }).catch(function() {
    });
  } catch {
  }
var mt = function(e, t) {
  if (t && Z(t) === "object") {
    var r = "";
    for (var i in t)
      r += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(t[i]);
    if (!r) return e;
    e = e + (e.indexOf("?") !== -1 ? "&" : "?") + r.slice(1);
  }
  return e;
}, ln = function(e, t, r, i) {
  var o = function(u) {
    if (!u.ok) return r(u.statusText || "Error", {
      status: u.status
    });
    u.text().then(function(c) {
      r(null, {
        status: u.status,
        data: c
      });
    }).catch(r);
  };
  if (i) {
    var s = i(e, t);
    if (s instanceof Promise) {
      s.then(o).catch(r);
      return;
    }
  }
  typeof fetch == "function" ? fetch(e, t).then(o).catch(r) : J(e, t).then(o).catch(r);
}, cn = !1, Mo = function(e, t, r, i) {
  e.queryStringParams && (t = mt(t, e.queryStringParams));
  var o = un({}, typeof e.customHeaders == "function" ? e.customHeaders() : e.customHeaders);
  typeof window > "u" && typeof global < "u" && typeof global.process < "u" && global.process.versions && global.process.versions.node && (o["User-Agent"] = "i18next-http-backend (node/".concat(global.process.version, "; ").concat(global.process.platform, " ").concat(global.process.arch, ")")), r && (o["Content-Type"] = "application/json");
  var s = typeof e.requestOptions == "function" ? e.requestOptions(r) : e.requestOptions, a = un({
    method: r ? "POST" : "GET",
    body: r ? e.stringify(r) : void 0,
    headers: o
  }, cn ? {} : s), u = typeof e.alternateFetch == "function" && e.alternateFetch.length >= 1 ? e.alternateFetch : void 0;
  try {
    ln(t, a, i, u);
  } catch (c) {
    if (!s || Object.keys(s).length === 0 || !c.message || c.message.indexOf("not implemented") < 0)
      return i(c);
    try {
      Object.keys(s).forEach(function(l) {
        delete a[l];
      }), ln(t, a, i, u), cn = !0;
    } catch (l) {
      i(l);
    }
  }
}, Ho = function(e, t, r, i) {
  r && Z(r) === "object" && (r = mt("", r).slice(1)), e.queryStringParams && (t = mt(t, e.queryStringParams));
  try {
    var o = Oe ? new Oe() : new Be("MSXML2.XMLHTTP.3.0");
    o.open(r ? "POST" : "GET", t, 1), e.crossDomain || o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.withCredentials = !!e.withCredentials, r && o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.overrideMimeType && o.overrideMimeType("application/json");
    var s = e.customHeaders;
    if (s = typeof s == "function" ? s() : s, s)
      for (var a in s)
        o.setRequestHeader(a, s[a]);
    o.onreadystatechange = function() {
      o.readyState > 3 && i(o.status >= 400 ? o.statusText : null, {
        status: o.status,
        data: o.responseText
      });
    }, o.send(r);
  } catch (u) {
  }
}, Vo = function(e, t, r, i) {
  if (typeof r == "function" && (i = r, r = void 0), i = i || function() {
  }, J && t.indexOf("file:") !== 0)
    return Mo(e, t, r, i);
  if (Jn() || typeof ActiveXObject == "function")
    return Ho(e, t, r, i);
  i(new Error("No fetch and no xhr implementation found!"));
};
function ue(n) {
  "@babel/helpers - typeof";
  return ue = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ue(n);
}
function fn(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function st(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? fn(Object(t), !0).forEach(function(r) {
      Xn(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : fn(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Bo(n, e) {
  if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Ko(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, Gn(r.key), r);
  }
}
function qo(n, e, t) {
  return e && Ko(n.prototype, e), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function Xn(n, e, t) {
  return (e = Gn(e)) in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function Gn(n) {
  var e = zo(n, "string");
  return ue(e) == "symbol" ? e : e + "";
}
function zo(n, e) {
  if (ue(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e);
    if (ue(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
var Wo = function() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    parse: function(t) {
      return JSON.parse(t);
    },
    stringify: JSON.stringify,
    parsePayload: function(t, r, i) {
      return Xn({}, r, i || "");
    },
    parseLoadPayload: function(t, r) {
    },
    request: Vo,
    reloadInterval: typeof window < "u" ? !1 : 60 * 60 * 1e3,
    customHeaders: {},
    queryStringParams: {},
    crossDomain: !1,
    withCredentials: !1,
    overrideMimeType: !1,
    requestOptions: {
      mode: "cors",
      credentials: "same-origin",
      cache: "default"
    }
  };
}, Yn = function() {
  function n(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Bo(this, n), this.services = e, this.options = t, this.allOptions = r, this.type = "backend", this.init(e, t, r);
  }
  return qo(n, [{
    key: "init",
    value: function(t) {
      var r = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (this.services = t, this.options = st(st(st({}, Wo()), this.options || {}), i), this.allOptions = o, this.services && this.options.reloadInterval) {
        var s = setInterval(function() {
          return r.reload();
        }, this.options.reloadInterval);
        ue(s) === "object" && typeof s.unref == "function" && s.unref();
      }
    }
  }, {
    key: "readMulti",
    value: function(t, r, i) {
      this._readAny(t, t, r, r, i);
    }
  }, {
    key: "read",
    value: function(t, r, i) {
      this._readAny([t], t, [r], r, i);
    }
  }, {
    key: "_readAny",
    value: function(t, r, i, o, s) {
      var a = this, u = this.options.loadPath;
      typeof this.options.loadPath == "function" && (u = this.options.loadPath(t, i)), u = Uo(u), u.then(function(c) {
        if (!c) return s(null, {});
        var l = a.services.interpolator.interpolate(c, {
          lng: t.join("+"),
          ns: i.join("+")
        });
        a.loadUrl(l, s, r, o);
      });
    }
  }, {
    key: "loadUrl",
    value: function(t, r, i, o) {
      var s = this, a = typeof i == "string" ? [i] : i, u = typeof o == "string" ? [o] : o, c = this.options.parseLoadPayload(a, u);
      this.options.request(this.options, t, c, function(l, f) {
        if (f && (f.status >= 500 && f.status < 600 || !f.status)) return r("failed loading " + t + "; status code: " + f.status, !0);
        if (f && f.status >= 400 && f.status < 500) return r("failed loading " + t + "; status code: " + f.status, !1);
        if (!f && l && l.message) {
          var d = l.message.toLowerCase(), g = ["failed", "fetch", "network", "load"].find(function(w) {
            return d.indexOf(w) > -1;
          });
          if (g)
            return r("failed loading " + t + ": " + l.message, !0);
        }
        if (l) return r(l, !1);
        var m, v;
        try {
          typeof f.data == "string" ? m = s.options.parse(f.data, i, o) : m = f.data;
        } catch {
          v = "failed parsing " + t + " to json";
        }
        if (v) return r(v, !1);
        r(null, m);
      });
    }
  }, {
    key: "create",
    value: function(t, r, i, o, s) {
      var a = this;
      if (this.options.addPath) {
        typeof t == "string" && (t = [t]);
        var u = this.options.parsePayload(r, i, o), c = 0, l = [], f = [];
        t.forEach(function(d) {
          var g = a.options.addPath;
          typeof a.options.addPath == "function" && (g = a.options.addPath(d, r));
          var m = a.services.interpolator.interpolate(g, {
            lng: d,
            ns: r
          });
          a.options.request(a.options, m, u, function(v, w) {
            c += 1, l.push(v), f.push(w), c === t.length && typeof s == "function" && s(l, f);
          });
        });
      }
    }
  }, {
    key: "reload",
    value: function() {
      var t = this, r = this.services, i = r.backendConnector, o = r.languageUtils, s = r.logger, a = i.language;
      if (!(a && a.toLowerCase() === "cimode")) {
        var u = [], c = function(f) {
          var d = o.toResolveHierarchy(f);
          d.forEach(function(g) {
            u.indexOf(g) < 0 && u.push(g);
          });
        };
        c(a), this.allOptions.preload && this.allOptions.preload.forEach(function(l) {
          return c(l);
        }), u.forEach(function(l) {
          t.allOptions.ns.forEach(function(f) {
            i.read(l, f, "read", null, null, function(d, g) {
              d && s.warn("loading namespace ".concat(f, " for language ").concat(l, " failed"), d), !d && g && s.log("loaded namespace ".concat(f, " for language ").concat(l), g), i.loaded("".concat(l, "|").concat(f), d, g);
            });
          });
        });
      }
    }
  }]);
}();
Yn.type = "backend";
var Jo = function(e) {
  return {
    type: "backend",
    init: function(r, i, o) {
    },
    read: function(r, i, o) {
      if (typeof e == "function") {
        if (e.length < 3) {
          try {
            var s = e(r, i);
            s && typeof s.then == "function" ? s.then(function(a) {
              return o(null, a && a.default || a);
            }).catch(o) : o(null, s);
          } catch (a) {
            o(a);
          }
          return;
        }
        e(r, i, o);
        return;
      }
      o(null, e && e[r] && e[r][i]);
    }
  };
};
const Xo = {
  debug: !0,
  fallbackLng: kn.enum.en,
  namespace: "translation",
  supportedLngs: Object.values(Cn),
  nonExplicitSupportedLngs: !1
}, Go = {
  react: {
    useSuspense: !0
  },
  detection: {
    order: ["navigator", "htmlTag", "path", "subdomain"],
    caches: ["localStorage", "cookie"]
  }
}, dn = (n, e) => {
  const t = import.meta.url.split("/").pop();
  return `${import.meta.url.replace(`/${t}`, "")}/locales/${n}/${e}.json`;
};
function yt(n) {
  return re.isInitialized || (re.use(Wn).use(
    new qn(null, {
      order: ["cookie", "localStorage", "navigator"],
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage", "cookie"]
    })
  ).use(Hi).init({
    ...Xo,
    backend: {
      backends: [
        Yn,
        // if a namespace can't be loaded via normal http-backend loadPath, then the inMemoryLocalBackend will try to return the correct resources
        // with dynamic import, you have to use the "default" key of the module ( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#importing_defaults )
        Jo(
          (e, t) => import(dn(e, t))
        )
      ],
      backendOptions: [
        {
          loadPath: dn("{{lng}}", "{{ns}}")
        }
      ]
    },
    ...Go
  }), re.on("loaded", () => {
    n == null || n(re);
  })), re;
}
const Yo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yt,
  initializeI18n: yt
}, Symbol.toStringTag, { value: "Module" }));
function Sa(n) {
  const e = yt();
  return zi("translation", { i18n: e, ...n });
}
const Et = 60 * 1e3, ke = Et, Qn = ke * 2, Zn = ke * 3, Tt = ke * 15, Ge = Et, Ye = Ge * 2, er = Ge * 3, tr = Et * 15;
var nr = /* @__PURE__ */ ((n) => (n.SelectAll = "SelectAll", n))(nr || {}), rr = /* @__PURE__ */ ((n) => (n.Text = "text", n.Image = "image", n))(rr || {});
S();
const Qo = "___", Zo = Fr((n) => {
  const e = n.split(Qo);
  try {
    return e.length === 4;
  } catch {
    return !1;
  }
}), es = y({
  captchaId: Ue([p(), At()]),
  captchaContentId: Ue([p(), At()]),
  salt: p().min(34),
  solution: S().array().optional(),
  unlabelled: S().array().optional(),
  timeLimit: S().optional()
}), ir = y({
  hash: p(),
  data: p(),
  type: Le(rr)
}), or = ir.extend({
  hash: p()
}), ts = or.extend({
  label: p()
}), ns = or.extend({
  label: p().optional()
}), sr = es.extend({
  items: K(ir),
  target: p()
}), rs = sr.extend({
  solution: p().array().optional(),
  unlabelled: p().array().optional()
}), is = rs.extend({
  solution: S().array().optional(),
  unlabelled: S().array().optional()
}), os = K(sr);
K(
  is
);
const ar = y({
  captchaId: p(),
  captchaContentId: p(),
  solution: p().array(),
  salt: p().min(34)
});
K(ar);
y({
  items: K(ns)
});
y({
  items: K(ts)
});
y({
  captchas: os,
  format: Le(nr)
});
y({
  labels: K(p())
});
var ss = Object.defineProperty, as = (n, e, t) => e in n ? ss(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, pn = (n, e, t) => (as(n, typeof e != "symbol" ? e + "" : e, t), t), at = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
};
function us(n) {
  const e = n.length % 2, t = (n[1] === "x" ? 2 : 0) + e, r = (n.length - t) / 2 + e, i = new Uint8Array(r);
  e && (i[0] = 0 | at[n[2]]);
  for (let o = 0; o < r; ) {
    const s = t + o * 2, a = at[n[s]], u = at[n[s + 1]];
    i[e + o++] = a << 4 | u;
  }
  return i;
}
var hn = class extends Uint8Array {
  constructor(n) {
    super(n), pn(this, "i", 0), pn(this, "v"), this.v = new DataView(n);
  }
}, ee = (n) => (e) => n(e instanceof hn ? e : new hn(e instanceof Uint8Array ? e.buffer : typeof e == "string" ? us(e).buffer : e)), Qe = (n) => {
  const e = n.length;
  let t = 0;
  for (let i = 0; i < e; i++)
    t += n[i].length;
  const r = new Uint8Array(t);
  for (let i = 0, o = 0; i < e; i++) {
    const s = n[i];
    r.set(s, o), o += s.byteLength;
  }
  return r;
};
function gn(n, e) {
  const t = Object.keys(n), r = t.length, i = {};
  for (let o = 0; o < r; o++) {
    const s = t[o];
    i[s] = e(n[s], s);
  }
  return i;
}
var U = (n, e) => {
  const t = [n, e];
  return t.enc = n, t.dec = e, t;
}, ur = (n, e) => (t) => n(e(t)), lr = (n, e) => (t) => e(n(t)), ls = ([n, e], t, r) => U(ur(n, t), lr(e, r));
function cs(n, e) {
  return ee((t) => {
    const r = t.v[e](t.i, !0);
    return t.i += n, r;
  });
}
function fs(n, e) {
  return (t) => {
    const r = new Uint8Array(n);
    return new DataView(r.buffer)[e](0, t, !0), r;
  };
}
function X(n, e, t) {
  return U(fs(n, t), cs(n, e));
}
var le = X(1, "getUint8", "setUint8"), Ke = X(2, "getUint16", "setUint16"), Ee = X(4, "getUint32", "setUint32"), cr = X(8, "getBigUint64", "setBigUint64");
X(1, "getInt8", "setInt8");
X(2, "getInt16", "setInt16");
X(4, "getInt32", "setInt32");
X(8, "getBigInt64", "setBigInt64");
var fr = (n) => {
  const e = new Uint8Array(16), t = new DataView(e.buffer);
  return t.setBigInt64(0, n, !0), t.setBigInt64(8, n >> 64n, !0), e;
}, dr = (n) => ee((e) => {
  const { v: t, i: r } = e, i = t.getBigUint64(r, !0), o = t[n](r + 8, !0);
  return e.i += 16, o << 64n | i;
});
U(fr, dr("getBigUint64"));
U(fr, dr("getBigInt64"));
var pr = (n) => {
  const e = new Uint8Array(32), t = new DataView(e.buffer);
  return t.setBigInt64(0, n, !0), t.setBigInt64(8, n >> 64n, !0), t.setBigInt64(16, n >> 128n, !0), t.setBigInt64(24, n >> 192n, !0), e;
}, hr = (n) => ee((e) => {
  let t = e.v.getBigUint64(e.i, !0);
  return e.i += 8, t |= e.v.getBigUint64(e.i, !0) << 64n, e.i += 8, t |= e.v.getBigUint64(e.i, !0) << 128n, e.i += 8, t |= e.v[n](e.i, !0) << 192n, e.i += 8, t;
});
U(pr, hr("getBigUint64"));
U(pr, hr("getBigInt64"));
ls(le, (n) => n ? 1 : 0, Boolean);
var ds = [le[1], Ke[1], Ee[1]], ps = ee((n) => {
  const e = n[n.i], t = e & 3;
  if (t < 3)
    return ds[t](n) >>> 2;
  const r = (e >>> 2) + 4;
  n.i++;
  let i = 0n;
  const o = r / 8 | 0;
  let s = 0n;
  for (let u = 0; u < o; u++)
    i = cr[1](n) << s | i, s += 64n;
  let a = r % 8;
  return a > 3 && (i = BigInt(Ee[1](n)) << s | i, s += 32n, a -= 4), a > 1 && (i = BigInt(Ke[1](n)) << s | i, s += 16n, a -= 2), a && (i = BigInt(le[1](n)) << s | i), i;
}), hs = 1n << 56n, gs = 1 << 24, ms = 256, ys = 4294967295n, vs = 64, ws = 16384, bs = 1 << 30, Ss = (n) => {
  if (n < 0)
    throw new Error(`Wrong compact input (${n})`);
  const e = Number(n) << 2;
  if (n < vs)
    return le[0](e);
  if (n < ws)
    return Ke[0](e | 1);
  if (n < bs)
    return Ee[0](e | 2);
  let t = [new Uint8Array(1)], r = BigInt(n);
  for (; r >= hs; )
    t.push(cr[0](r)), r >>= 64n;
  r >= gs && (t.push(Ee[0](Number(r & ys))), r >>= 32n);
  let i = Number(r);
  i >= ms && (t.push(Ke[0](i)), i >>= 16), i && t.push(le[0](i));
  const o = Qe(t);
  return o[0] = o.length - 5 << 2 | 3, o;
}, gr = U(Ss, ps), xs = new TextEncoder(), Os = (n) => {
  const e = xs.encode(n);
  return Qe([gr.enc(e.length), e]);
}, Es = new TextDecoder(), Ts = ee((n) => {
  let e = gr.dec(n);
  const t = new DataView(n.buffer, n.i, e);
  return n.i += e, Es.decode(t);
}), M = U(Os, Ts), Ls = () => {
}, Cs = new Uint8Array(0);
U(() => Cs, Ls);
var mr = (n) => ee((e) => le[1](e) > 0 ? n(e) : void 0), yr = (n) => (e) => {
  const t = new Uint8Array(1);
  return e === void 0 ? t : (t[0] = 1, Qe([t, n(e)]));
}, H = (n) => U(yr(n[0]), mr(n[1]));
H.enc = yr;
H.dec = mr;
var vr = (...n) => ee((e) => n.map((t) => t(e))), wr = (...n) => (e) => Qe(n.map((t, r) => t(e[r]))), Ze = (...n) => U(wr(...n.map(([e]) => e)), vr(...n.map(([, e]) => e)));
Ze.enc = wr;
Ze.dec = vr;
var br = (n) => {
  const e = Object.keys(n);
  return ur(Ze.enc(...Object.values(n)), (t) => e.map((r) => t[r]));
}, Sr = (n) => {
  const e = Object.keys(n);
  return lr(Ze.dec(...Object.values(n)), (t) => Object.fromEntries(t.map((r, i) => [e[i], r])));
}, se = (n) => U(br(gn(n, (e) => e[0])), Sr(gn(n, (e) => e[1])));
se.enc = br;
se.dec = Sr;
const ks = y({
  [h.requestHash]: p()
});
y({
  [h.challenge]: p()
});
const Ps = y({
  [h.timestamp]: p()
}), mn = y({
  [h.challenge]: p().optional(),
  [h.requestHash]: p().optional(),
  [h.timestamp]: p().optional()
});
y({
  [h.commitmentId]: p().optional(),
  [h.providerUrl]: p().optional(),
  [h.dapp]: p(),
  [h.user]: p(),
  [h.challenge]: p().optional(),
  [h.nonce]: S().optional(),
  [h.timestamp]: p(),
  [h.signature]: y({
    [h.provider]: mn,
    [h.user]: mn
  })
});
const Is = se({
  [h.commitmentId]: H(M),
  [h.providerUrl]: H(M),
  [h.dapp]: M,
  [h.user]: M,
  [h.challenge]: H(M),
  [h.nonce]: H(Ee),
  [h.timestamp]: M,
  [h.signature]: se({
    [h.provider]: se({
      [h.challenge]: H(M),
      [h.requestHash]: H(M)
    }),
    [h.user]: se({
      [h.timestamp]: H(M),
      [h.requestHash]: H(M)
    })
  })
}), xr = p().startsWith("0x"), xa = (n) => {
  var e, t, r, i;
  return We(
    Is.enc({
      [h.commitmentId]: void 0,
      [h.providerUrl]: void 0,
      [h.challenge]: void 0,
      [h.nonce]: void 0,
      // override any optional fields by spreading the procaptchaOutput
      ...n,
      signature: {
        provider: {
          challenge: ((e = n.signature.provider) == null ? void 0 : e.challenge) || void 0,
          requestHash: ((t = n.signature.provider) == null ? void 0 : t.requestHash) || void 0
        },
        user: {
          timestamp: ((r = n.signature.user) == null ? void 0 : r.timestamp) || void 0,
          requestHash: ((i = n.signature.user) == null ? void 0 : i.requestHash) || void 0
        }
      }
    })
  );
}, Or = 2, Er = 0;
var Rs = /* @__PURE__ */ ((n) => (n.GetImageCaptchaChallenge = "/v1/prosopo/provider/client/captcha/image", n.GetPowCaptchaChallenge = "/v1/prosopo/provider/client/captcha/pow", n.GetFrictionlessCaptchaChallenge = "/v1/prosopo/provider/client/captcha/frictionless", n.SubmitImageCaptchaSolution = "/v1/prosopo/provider/client/solution", n.SubmitPowCaptchaSolution = "/v1/prosopo/provider/client/pow/solution", n.VerifyPowCaptchaSolution = "/v1/prosopo/provider/client/pow/verify", n.VerifyImageCaptchaSolutionDapp = "/v1/prosopo/provider/client/image/dapp/verify", n.GetProviderStatus = "/v1/prosopo/provider/client/status", n.SubmitUserEvents = "/v1/prosopo/provider/client/events", n))(Rs || {}), $s = /* @__PURE__ */ ((n) => (n.Healthz = "/healthz", n.GetProviderDetails = "/v1/prosopo/provider/public/details", n))($s || {}), As = /* @__PURE__ */ ((n) => (n.SiteKeyRegister = "/v1/prosopo/provider/admin/sitekey/register", n.UpdateDetectorKey = "/v1/prosopo/provider/admin/detector/update", n.RemoveDetectorKey = "/v1/prosopo/provider/admin/detector/remove", n))(As || {});
const Tr = {
  "/v1/prosopo/provider/client/captcha/image": { windowMs: 6e4, limit: 30 },
  "/v1/prosopo/provider/client/captcha/pow": { windowMs: 6e4, limit: 60 },
  "/v1/prosopo/provider/client/solution": { windowMs: 6e4, limit: 60 },
  "/v1/prosopo/provider/client/captcha/frictionless": {
    windowMs: 6e4,
    limit: 60
  },
  "/v1/prosopo/provider/client/pow/solution": { windowMs: 6e4, limit: 60 },
  "/v1/prosopo/provider/client/pow/verify": { windowMs: 6e4, limit: 60 },
  "/v1/prosopo/provider/client/image/dapp/verify": {
    windowMs: 6e4,
    limit: 60
  },
  "/v1/prosopo/provider/client/status": { windowMs: 6e4, limit: 60 },
  "/v1/prosopo/provider/public/details": { windowMs: 6e4, limit: 60 },
  "/v1/prosopo/provider/client/events": { windowMs: 6e4, limit: 60 },
  "/v1/prosopo/provider/admin/sitekey/register": { windowMs: 6e4, limit: 5 },
  "/v1/prosopo/provider/admin/detector/update": { windowMs: 6e4, limit: 5 },
  "/v1/prosopo/provider/admin/detector/remove": { windowMs: 6e4, limit: 5 }
}, Ns = (n) => y(
  Object.entries(n).reduce(
    (e, [t, r]) => {
      const i = t;
      return e[i] = y({
        windowMs: Nt.number().optional().default(r.windowMs),
        limit: Nt.number().optional().default(r.limit)
      }), e;
    },
    {}
  )
), js = Ns(
  Tr
);
y({
  [h.user]: p(),
  [h.dapp]: p(),
  [h.datasetId]: Ue([p(), K(S())]),
  [h.sessionId]: p().optional()
});
y({
  [h.user]: p(),
  [h.dapp]: p(),
  [h.captchas]: K(ar),
  [h.requestHash]: p(),
  [h.timestamp]: p(),
  [h.signature]: y({
    [h.user]: Ps,
    [h.provider]: ks
  })
});
y({
  [h.token]: xr,
  [h.dappSignature]: p(),
  [h.maxVerifiedTime]: S().optional().default(Tt),
  [h.ip]: p().optional()
});
y({
  [h.token]: xr,
  [h.dappSignature]: p(),
  [h.verifiedTimeout]: S().optional().default(Ye),
  [h.ip]: p().optional()
});
y({
  [h.user]: p(),
  [h.dapp]: p(),
  [h.sessionId]: p().optional()
});
const Oa = y({
  [h.challenge]: Zo,
  [h.difficulty]: S(),
  [h.signature]: y({
    [h.user]: y({
      [h.timestamp]: p()
    }),
    [h.provider]: y({
      [h.challenge]: p()
    })
  }),
  [h.user]: p(),
  [h.dapp]: p(),
  [h.nonce]: S(),
  [h.verifiedTimeout]: S().optional().default(Ye)
});
y({
  [h.dapp]: p(),
  [h.token]: p(),
  [h.user]: p()
});
y({
  [h.siteKey]: p()
});
y({
  [h.siteKey]: p(),
  [h.tier]: Le(wt),
  [h.settings]: pi.optional()
});
const Ea = y({
  [h.detectorKey]: p()
}), Lr = y({
  solved: y({
    count: S().positive()
  }).optional().default({ count: Or }),
  unsolved: y({
    count: S().nonnegative()
  }).optional().default({ count: Er })
});
var Cr = /* @__PURE__ */ ((n) => (n.ipAddress = "ipAddress", n.userAccount = "userAccount", n))(Cr || {});
const Us = Le(Cr);
y({
  global: De(),
  hardBlock: De(),
  type: Us,
  dappAccount: p().optional(),
  captchaConfig: Lr.optional()
});
y({
  [h.dapp]: p()
});
const kr = 0.2, Pr = 0.5, Ds = y({
  PENALTY_OLD_TIMESTAMP: S().positive().optional().default(kr),
  PENALTY_ACCESS_RULE: S().positive().optional().default(Pr)
}), yn = ze([
  "trace",
  "debug",
  "info",
  "warn",
  "error",
  "fatal",
  "log"
]);
ze([
  "mongo",
  "mongoMemory",
  "provider",
  "client",
  "captcha"
]);
const vt = ze([
  "development",
  "staging",
  "production"
]), Fs = Sn(
  vt,
  y({
    type: p(),
    endpoint: p(),
    dbname: p().default("prosopo"),
    authSource: p().default("admin")
  })
), _s = y({
  logLevel: yn.optional().default(yn.enum.info),
  defaultEnvironment: vt.default(
    vt.Values.production
  ),
  // The account with which to query the contract.merge sign transactions
  account: y({
    address: p().optional(),
    secret: p().optional(),
    password: p().optional()
  })
});
R.object({
  encoded: R.string(),
  encoding: R.object({
    content: R.array(R.string()),
    type: R.array(R.string()),
    version: R.string()
  }),
  address: R.string(),
  meta: R.object({
    genesisHash: R.string(),
    name: R.string(),
    whenCreated: R.number()
  })
});
const Ir = _s.merge(
  y({
    database: Fs.optional(),
    devOnlyWatchEvents: De().optional()
  })
), Ms = y({
  baseURL: p().url(),
  port: S().optional().default(9229)
}).default({
  baseURL: "http://localhost",
  port: 9229
});
y({
  requiredNumberOfSolutions: S().positive().min(2),
  solutionWinningPercentage: S().positive().max(100),
  captchaBlockRecency: S().positive().min(2)
});
const Rr = Ir.merge(
  y({
    userAccountAddress: p().optional(),
    web2: De().optional().default(!0),
    solutionThreshold: S().positive().max(100).optional().default(80),
    dappName: p().optional().default("ProsopoClientDapp"),
    serverUrl: p().optional()
  })
), $r = {
  challengeTimeout: ke,
  solutionTimeout: Qn,
  verifiedTimeout: Zn,
  cachedTimeout: Tt
}, Ar = {
  challengeTimeout: Ye,
  solutionTimeout: Ge,
  cachedTimeout: er
}, Nr = {
  maxVerifiedTime: tr
}, Lt = {
  image: $r,
  pow: Ar,
  contract: Nr
}, jr = y({
  image: y({
    // Set this to a default value for the frontend
    challengeTimeout: S().positive().optional().default(ke),
    // Set this to a default value for the frontend
    solutionTimeout: S().positive().optional().default(Qn),
    verifiedTimeout: S().positive().optional().default(Zn),
    cachedTimeout: S().positive().optional().default(Tt)
  }).default($r),
  pow: y({
    verifiedTimeout: S().positive().optional().default(Ye),
    solutionTimeout: S().positive().optional().default(Ge),
    cachedTimeout: S().positive().optional().default(er)
  }).default(Ar),
  contract: y({
    maxVerifiedTime: S().positive().optional().default(tr)
  }).default(Nr)
}).default(Lt);
Rr.merge(
  y({
    serverUrl: p().url().optional(),
    timeouts: jr.optional().default(Lt)
  })
);
y({
  area: y({
    width: S().positive(),
    height: S().positive()
  }),
  offsetParameter: S().positive(),
  multiplier: S().positive(),
  fontSizeFactor: S().positive(),
  maxShadowBlur: S().positive(),
  numberOfRounds: S().positive(),
  seed: S().positive()
});
const Hs = Ue([jt("light"), jt("dark")]);
var Vs = /* @__PURE__ */ ((n) => (n.visible = "visible", n.invisible = "invisible", n))(Vs || {});
const Bs = ze([
  "visible",
  "invisible"
  /* invisible */
]).optional(), Ta = Rr.and(
  y({
    theme: Hs.optional().default("light"),
    captchas: jr.optional().default(Lt),
    language: kn.optional(),
    mode: Bs.optional().default(
      "visible"
      /* visible */
    )
  })
);
Ir.merge(
  y({
    captchas: Lr.optional().default({
      solved: { count: Or },
      unsolved: { count: Er }
    }),
    penalties: Ds.optional().default({
      PENALTY_OLD_TIMESTAMP: kr,
      PENALTY_ACCESS_RULE: Pr
    }),
    scheduledTasks: y({
      captchaScheduler: y({
        schedule: p().optional()
      }).optional(),
      clientListScheduler: y({
        schedule: p().optional()
      }).optional()
    }).optional(),
    server: Ms.optional(),
    mongoEventsUri: p().optional(),
    mongoCaptchaUri: p().optional(),
    mongoClientUri: p().optional(),
    redisConnection: y({
      url: p(),
      password: p(),
      indexName: p().optional()
    }).default({
      url: "redis://localhost:6379",
      password: "root"
    }),
    rateLimits: js.default(Tr),
    proxyCount: S().optional().default(0),
    lRules: Sn(p(), S()).optional(),
    authAccount: y({
      address: p().optional(),
      secret: p().optional(),
      password: p().optional()
    })
  })
);
const Ks = async () => (await import("./fp.esm-DYWeNGcH.js")).default, qs = async () => (await (await (await Ks()).load()).get()).visitorId, ie = new Uint8Array([161, 35, 3, 33, 0]), qe = new Uint8Array([
  48,
  83,
  2,
  1,
  1,
  48,
  5,
  6,
  3,
  43,
  101,
  112,
  4,
  34,
  4,
  32
]), zs = 32, vn = 64, Ws = 32, ve = qe.length;
function Js(n, e, t) {
  const r = Array.isArray(t) || t === void 0 ? t : [t], i = Mr(e, n, r), o = i.subarray(0, qe.length);
  if (!et(o, qe))
    throw new Error("Invalid encoding header found in body");
  let s = i.subarray(ve, ve + vn), a = ve + vn, u = i.subarray(a, a + ie.length);
  if (!et(u, ie) && (a = ve + Ws, s = i.subarray(ve, a), u = i.subarray(a, a + ie.length), !et(u, ie)))
    throw new Error("Invalid encoding divider found in body");
  const c = a + ie.length;
  return {
    publicKey: i.subarray(c, c + zs),
    secretKey: s
  };
}
function Xs({ publicKey: n, secretKey: e }, t) {
  if (!e)
    throw new Error("Expected a valid secretKey to be passed to encode");
  const r = lt(qe, e, ie, n);
  if (!t)
    return r;
  const { params: i, password: o, salt: s } = Hr(t), { encrypted: a, nonce: u } = Vr(r, o.subarray(0, 32));
  return lt(Br(s, i), u, a);
}
function Gs(n, { address: e, meta: t }, r, i) {
  return En(
    Kr(r, ["pkcs8", n], i),
    {
      address: e,
      meta: t
    }
  );
}
const Ys = new Uint8Array([]), Qs = {
  sr25519: On,
  ed25519: () => {
    throw new Error("Not Implemented");
  },
  ecdsa: () => {
    throw new Error("Not Implemented");
  },
  ethereum: () => {
    throw new Error("Not Implemented");
  }
}, Zs = {
  ecdsa: new Uint8Array([2]),
  ed25519: new Uint8Array([0]),
  ethereum: new Uint8Array([2]),
  sr25519: new Uint8Array([1])
}, ea = {
  sr25519: Xr,
  ed25519: () => {
    throw new Error("Not Implemented");
  },
  ecdsa: () => {
    throw new Error("Not Implemented");
  },
  ethereum: () => {
    throw new Error("Not Implemented");
  }
}, ut = {
  sr25519: (n) => n,
  ed25519: () => {
    throw new Error("Not Implemented");
  },
  ecdsa: () => {
    throw new Error("Not Implemented");
  },
  ethereum: () => {
    throw new Error("Not Implemented");
  }
};
function we(n) {
  return !n || ti(n);
}
function oe({ toSS58: n, type: e }, { publicKey: t, secretKey: r }, i = {}, o = null, s) {
  const a = (l, f) => {
    const d = Js(l, f || o, s);
    if (d.secretKey.length === 64)
      t = d.publicKey, r = d.secretKey;
    else {
      const g = Qs[e](d.secretKey);
      t = g.publicKey, r = g.secretKey;
    }
  }, u = (l) => (we(r) && o && a(l, o), o = Xs({ publicKey: t, secretKey: r }, l), s = void 0, o), c = () => {
    const l = ut[e](t);
    return n(l);
  };
  return {
    get address() {
      return c();
    },
    get addressRaw() {
      return ut[e](t);
    },
    get isLocked() {
      return we(r);
    },
    get meta() {
      return i;
    },
    get publicKey() {
      return t;
    },
    get type() {
      return e;
    },
    // eslint-disable-next-line sort-keys
    decodePkcs8: a,
    derive: (l, f) => {
      if (we(r))
        throw new Error("Cannot derive on a locked keypair");
      const { path: d } = Gr(l), g = xn({ publicKey: t, secretKey: r }, d, e);
      return oe({ toSS58: n, type: e }, g, f, null);
    },
    encodePkcs8: (l) => u(l),
    lock: () => {
      r = new Uint8Array([]);
    },
    setMeta: (l) => {
      i = En({}, i, l);
    },
    sign: (l, f = {}) => {
      if (we(r))
        throw new Error("Cannot sign with a locked key pair");
      return lt(
        f.withType ? Zs[e] : Ys,
        ea[e](ct(l), { publicKey: t, secretKey: r })
      );
    },
    toJson: (l) => {
      const f = ["ecdsa", "ethereum"].includes(e) ? t.length === 20 ? Ut(t) : Ut(Jr(t)) : c();
      return Gs(
        e,
        { address: f, meta: i },
        u(l),
        !!l
      );
    },
    unlock: (l) => {
      a(l);
    },
    verify: (l, f, d) => Wr(
      l,
      f,
      ut[e](ct(d))
    ).isValid,
    vrfSign: (l, f, d) => {
      if (we(r))
        throw new Error("Cannot sign with a locked key pair");
      return zr(l, { secretKey: r }, f, d);
    },
    vrfVerify: (l, f, d, g, m) => qr(l, f, t, g, m)
  };
}
var Y;
class ta {
  constructor() {
    pe(this, Y, {});
  }
  add(e) {
    return j(this, Y)[$e(e.address).toString()] = e, e;
  }
  all() {
    return Object.values(j(this, Y));
  }
  get(e) {
    const t = j(this, Y)[$e(e).toString()];
    if (!t)
      throw new Error(
        `Unable to retrieve keypair '${ni(e) || Ae(e) ? We(ct(e)) : e}'`
      );
    return t;
  }
  remove(e) {
    delete j(this, Y)[$e(e).toString()];
  }
}
Y = new WeakMap();
const na = "bottom drive obey lake curtain smoke basket hold race lonely fit walk", wn = {
  sr25519: (n) => On(n),
  ed25519: () => {
    throw new Error("Not Implemented");
  },
  ecdsa: () => {
    throw new Error("Not Implemented");
  },
  ethereum: () => {
    throw new Error("Not Implemented");
  }
};
function ra({ publicKey: n }) {
  return n;
}
var V, Te, ae;
class ia {
  constructor(e = {}) {
    pe(this, V);
    pe(this, Te);
    pe(this, ae);
    if (this.decodeAddress = $e, this.encodeAddress = (t, r) => Yr(t, r ?? j(this, ae)), e.type = e.type || "sr25519", !["sr25519"].includes(e.type || "undefined"))
      throw new Error(
        `Expected a keyring type of either 'sr25519', found '${e.type || "unknown"}`
      );
    he(this, V, new ta()), he(this, ae, e.ss58Format), he(this, Te, e.type);
  }
  /**
   * @description retrieve the pairs (alias for getPairs)
   */
  get pairs() {
    return this.getPairs();
  }
  /**
   * @description retrieve the publicKeys (alias for getPublicKeys)
   */
  get publicKeys() {
    return this.getPublicKeys();
  }
  /**
   * @description Returns the type of the keyring, ed25519, sr25519 or ecdsa
   */
  get type() {
    return j(this, Te);
  }
  /**
   * @name addPair
   * @summary Stores an account, given a keyring pair, as a Key/Value (public key, pair) in Keyring Pair Dictionary
   */
  addPair(e) {
    return j(this, V).add(e);
  }
  /**
   * @name addFromAddress
   * @summary Stores an account, given an account address, as a Key/Value (public key, pair) in Keyring Pair Dictionary
   * @description Allows user to explicitly provide separate inputs including account address or public key, and optionally
   * the associated account metadata, and the default encoded value as arguments (that may be obtained from the json file
   * of an account backup), and then generates a keyring pair from them that it passes to
   * `addPair` to stores in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.
   */
  addFromAddress(e, t = {}, r = null, i = this.type, o, s) {
    const a = this.decodeAddress(e, o);
    return this.addPair(
      oe(
        { toSS58: this.encodeAddress, type: i },
        { publicKey: a, secretKey: new Uint8Array() },
        t,
        r,
        s
      )
    );
  }
  /**
   * @name addFromJson
   * @summary Stores an account, given JSON data, as a Key/Value (public key, pair) in Keyring Pair Dictionary
   * @description Allows user to provide a json object argument that contains account information (that may be obtained from the json file
   * of an account backup), and then generates a keyring pair from it that it passes to
   * `addPair` to stores in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.
   */
  addFromJson(e, t) {
    return this.addPair(this.createFromJson(e, t));
  }
  /**
   * @name addFromMnemonic
   * @summary Stores an account, given a mnemonic, as a Key/Value (public key, pair) in Keyring Pair Dictionary
   * @description Allows user to provide a mnemonic (seed phrase that is provided when account is originally created)
   * argument and a metadata argument that contains account information (that may be obtained from the json file
   * of an account backup), and then generates a keyring pair from it that it passes to
   * `addPair` to stores in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.
   */
  addFromMnemonic(e, t = {}, r = this.type) {
    return this.addFromUri(e, t, r);
  }
  /**
   * @name addFromPair
   * @summary Stores an account created from an explicit publicKey/secreteKey combination
   */
  addFromPair(e, t = {}, r = this.type) {
    return this.addPair(this.createFromPair(e, t, r));
  }
  /**
   * @name addFromSeed
   * @summary Stores an account, given seed data, as a Key/Value (public key, pair) in Keyring Pair Dictionary
   * @description Stores in a keyring pair dictionary the public key of the pair as a key and the pair as the associated value.
   * Allows user to provide the account seed as an argument, and then generates a keyring pair from it that it passes to
   * `addPair` to store in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.
   */
  addFromSeed(e, t = {}, r = this.type) {
    return this.addPair(
      oe(
        { toSS58: this.encodeAddress, type: r },
        wn[r](e),
        t,
        null
      )
    );
  }
  /**
   * @name addFromUri
   * @summary Creates an account via an suri
   * @description Extracts the phrase, path and password from a SURI format for specifying secret keys `<secret>/<soft-key>//<hard-key>///<password>` (the `///password` may be omitted, and `/<soft-key>` and `//<hard-key>` maybe repeated and mixed). The secret can be a hex string, mnemonic phrase or a string (to be padded)
   */
  addFromUri(e, t = {}, r = this.type) {
    return this.addPair(this.createFromUri(e, t, r));
  }
  /**
   * @name createFromJson
   * @description Creates a pair from a JSON keyfile
   */
  createFromJson({
    address: e,
    encoded: t,
    encoding: { content: r, type: i, version: o },
    meta: s
  }, a) {
    if (o === "3" && r[0] !== "pkcs8")
      throw new Error(
        `Unable to decode non-pkcs8 type, [${r.join(",")}] found}`
      );
    const u = o === "0" || !Array.isArray(r) ? this.type : r[1];
    if (!u)
      throw new Error("cryptoType is undefined");
    const c = Array.isArray(i) ? i : [i];
    if (!["sr25519"].includes(u))
      throw new Error(`Unknown crypto type ${u}`);
    const l = Ae(e) ? tt(e) : this.decodeAddress(e, a), f = Ae(t) ? tt(t) : Qr(t);
    return oe(
      { toSS58: this.encodeAddress, type: u },
      { publicKey: l, secretKey: new Uint8Array() },
      s,
      f,
      c
    );
  }
  /**
   * @name createFromPair
   * @summary Creates a pair from an explicit publicKey/secreteKey combination
   */
  createFromPair(e, t = {}, r = this.type) {
    return oe({ toSS58: this.encodeAddress, type: r }, e, t, null);
  }
  /**
   * @name createFromUri
   * @summary Creates a Keypair from an suri
   * @description This creates a pair from the suri, but does not add it to the keyring
   */
  createFromUri(e, t = {}, r = this.type) {
    const i = e.startsWith("//") ? `${na}${e}` : e, { password: o, path: s, phrase: a } = Zr(i);
    let u;
    if (Ae(a, 256))
      u = tt(a);
    else {
      const f = a.split(" ");
      if ([12, 15, 18, 21, 24].includes(f.length))
        u = r === "ethereum" ? (() => {
          throw new Error(
            "Not implemented - Prosopo Keyring supports sr25519 only"
          );
        })() : ei(a, o);
      else {
        if (a.length > 32)
          throw new Error(
            "specified phrase is not a valid mnemonic and is invalid as a raw seed at > 32 bytes"
          );
        u = Tn(a.padEnd(32));
      }
    }
    const l = xn(wn[r](u), s, r);
    return oe(
      { toSS58: this.encodeAddress, type: r },
      l,
      t,
      null
    );
  }
  /**
   * @name getPair
   * @summary Retrieves an account keyring pair from the Keyring Pair Dictionary, given an account address
   * @description Returns a keyring pair value from the keyring pair dictionary by performing
   * a key lookup using the provided account address or public key (after decoding it).
   */
  getPair(e) {
    return j(this, V).get(e);
  }
  /**
   * @name getPairs
   * @summary Retrieves all account keyring pairs from the Keyring Pair Dictionary
   * @description Returns an array list of all the keyring pair values that are stored in the keyring pair dictionary.
   */
  getPairs() {
    return j(this, V).all();
  }
  /**
   * @name getPublicKeys
   * @summary Retrieves Public Keys of all Keyring Pairs stored in the Keyring Pair Dictionary
   * @description Returns an array list of all the public keys associated with each of the keyring pair values that are stored in the keyring pair dictionary.
   */
  getPublicKeys() {
    return j(this, V).all().map(ra);
  }
  /**
   * @name removePair
   * @description Deletes the provided input address or public key from the stored Keyring Pair Dictionary.
   */
  removePair(e) {
    j(this, V).remove(e);
  }
  /**
   * @name setSS58Format;
   * @description Sets the ss58 format for the keyring
   */
  setSS58Format(e) {
    he(this, ae, e);
  }
  /**
   * @name toJson
   * @summary Returns a JSON object associated with the input argument that contains metadata assocated with an account
   * @description Returns a JSON object containing the metadata associated with an account
   * when valid address or public key and when the account passphrase is provided if the account secret
   * is not already unlocked and available in memory. Note that in [Polkadot-JS Apps](https://github.com/polkadot-js/apps) the user
   * may backup their account to a JSON file that contains this information.
   */
  toJson(e, t) {
    return j(this, V).get(e).toJson(t);
  }
}
V = new WeakMap(), Te = new WeakMap(), ae = new WeakMap();
class oa {
}
const sa = async () => (await import("./Signer-DP9drQ55.js")).default, aa = async () => (await import("./utilCryptoChunk-BXKHAqcg.js").then((n) => n.v)).entropyToMnemonic;
class bn extends oa {
  async getAccount(e) {
    const t = await this.createAccount(e), r = await this.createExtension(t);
    return {
      account: t,
      extension: r
    };
  }
  async createExtension(e) {
    const t = await sa(), r = new t(async () => {
    });
    return r.signRaw = async (i) => {
      const o = e.keypair.sign(i.data);
      return {
        id: 1,
        // the id of the request to sign. This should be incremented each time and adjust the signature, but we're hacking around this. Hence the signature will always be the same given the same payload.
        signature: We(o)
      };
    }, {
      accounts: {
        get: async () => [e],
        subscribe: () => () => {
        }
      },
      name: "procaptcha-web2",
      version: si,
      signer: r
    };
  }
  async createAccount(e) {
    const t = await qs(), r = _r(t, 128).slice(2), i = Tn(r), s = (await aa())(i), a = "sr25519", c = new ia({
      type: a
    }).addFromMnemonic(s), l = c.address;
    return {
      address: l,
      name: l,
      keypair: c
    };
  }
}
const La = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ExtensionWeb2: bn,
  default: bn
}, Symbol.toStringTag, { value: "Module" }));
export {
  h as A,
  Je as C,
  oa as E,
  kn as L,
  Vs as M,
  Ta as P,
  ba as R,
  Oa as S,
  Ea as U,
  ya as a,
  vt as b,
  Rs as c,
  $s as d,
  As as e,
  xa as f,
  Pi as g,
  va as h,
  ma as i,
  La as j,
  wa as l,
  F as r,
  ga as s,
  Sa as u
};
