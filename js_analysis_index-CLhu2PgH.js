import { A, a as _, C as W, l as $ } from "./web2Chunk-BeqhZvlo.js";
function N(e) {
  const t = e.getRootNode();
  return (t instanceof ShadowRoot ? t.host : e).closest("form");
}
const l = () => {
  Array.from(
    document.getElementsByName(A.procaptchaResponse)
  ).map((t) => t.remove());
}, u = (e) => {
  const t = window[e.replace("window.", "")];
  if (typeof t != "function")
    throw new Error(
      `Callback ${e} is not defined on the window object`
    );
  return t;
}, M = (e) => ({
  onHuman: (t) => I(t, e),
  onChallengeExpired: () => {
    l();
  },
  onExtensionNotFound: () => {
    console.error("Extension not found");
  },
  onExpired: () => {
    l();
  },
  onError: (t) => {
    l(), console.error(t);
  },
  onClose: () => {
  },
  onOpen: () => {
  },
  onFailed: () => {
    alert("Captcha challenge failed. Please try again");
  },
  onReset: () => {
    l();
  },
  onReload: () => {
  }
}), s = (e, t, o) => {
  const a = t.getAttribute(`data-${e}`);
  if (a) {
    const n = u(a);
    if (n)
      return n;
  }
  if (typeof o == "function")
    return o;
  if (typeof o == "string")
    return u(o);
};
function H(e, t, o) {
  const a = s(
    "callback",
    o,
    e == null ? void 0 : e.callback
  );
  a && (t.onHuman = (f) => {
    I(f, o), a(f);
  });
  const n = s(
    "chalexpired-callback",
    o,
    e == null ? void 0 : e["chalexpired-callback"]
  );
  n && (t.onChallengeExpired = () => {
    l(), n();
  });
  const c = s(
    "expired-callback",
    o,
    e == null ? void 0 : e["expired-callback"]
  );
  c && (t.onExpired = () => {
    l(), c();
  });
  const i = s(
    "error-callback",
    o,
    e == null ? void 0 : e["error-callback"]
  );
  i && (t.onError = (f) => {
    l(), i(f);
  });
  const r = s(
    "close-callback",
    o,
    e == null ? void 0 : e["close-callback"]
  );
  r && (t.onClose = () => {
    r();
  });
  const y = s(
    "open-callback",
    o,
    e == null ? void 0 : e["open-callback"]
  );
  y && (t.onOpen = () => {
    y();
  });
  const w = s(
    "failed-callback",
    o,
    e == null ? void 0 : e["failed-callback"]
  );
  w && (t.onFailed = () => {
    w();
  });
  const h = s(
    "reset-callback",
    o,
    e == null ? void 0 : e["reset-callback"]
  );
  h && (t.onReset = () => {
    l(), h();
  });
}
const I = (e, t) => {
  if (l(), t) {
    const o = N(t);
    if (!o) {
      console.error("Parent form not found for the element:", t);
      return;
    }
    const a = document.createElement("input");
    a.type = "hidden", a.name = A.procaptchaResponse, a.value = e, o.appendChild(a);
  }
}, P = "https://prosopo.io", T = "Visit prosopo.io to learn more about the service and its accessibility options.", U = 74, x = 80, F = "80px", v = "302px", G = "8px", j = "2px", z = "1px solid", E = "checkbox__loading-spinner";
function B(e) {
  const t = document.createElement("div");
  return t.className = "checkbox", t.innerHTML = X(e) + q, t;
}
const K = (e) => (e.shadowRoot || e).querySelector(".checkbox__content"), q = `
    <div class="checkbox__outer">
        <div class="checkbox__wrapper">
            <div class="checkbox__inner">
                <div class="checkbox__content">
                    <div class="${E}" aria-label="Loading spinner"></div>
                </div>
            </div>
        </div>
    </div>
`, X = (e) => `
<style>
.checkbox {
    display: flex;
    flex-direction: column;
}

.checkbox__outer {
    align-items: center;
    flex: 1;
}

.checkbox__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    vertical-align: middle;
}

.checkbox__inner {
    display: flex;
}

.checkbox__content {
    display: inline-flex;
}

.${E} {
    margin-top: 0;
    margin-left: 15px;
    margin-right: 15px;
    width: 2em;
    height: 2em;
    border: 4px solid ${e.palette.background.contrastText};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inherit;
    box-sizing: border-box;
    animation: checkbox__loading-spinner-rotation 1s linear infinite;
    will-change: transform;
}

@keyframes ${E}-rotation {
  0% {
	transform: rotate(0deg);
  }
  100% {
	transform: rotate(360deg);
  }
}
</style>
`;
function V(e) {
  const t = document.createElement("div");
  return t.className = "logo", t.innerHTML = Y + Z(e), t;
}
const Y = `
<style>
.logo {
    display: inline-flex;
    flex-direction: column;
}

.prosopo-logo {
    display: inline-flex;
    flex-direction: column;    /* ✅ Stack vertically */
    align-items: center;       /* ✅ Center horizontally */
    justify-content: center;   /* ✅ Optional: center vertically if needed */
    padding: 8px;
    height: auto;
    min-width: max-content;
    gap: 2px;                  /* ✅ Space between SVG and text */
}

.prosopo-logo-text {
    all: unset;
    font-size: 9px !important;
    font-weight: bold !important;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif !important;
    line-height: 1 !important;
    text-align: center;
}

#logo {
    width: 28px;
    height: 28px;
}

</style>
`;
function Z(e) {
  return `
			<a href="${P}?utm_campaign=widget" tabindex="0" target="_blank" role="button"
			   aria-label="${T}"
			   style="text-decoration: none;">
				<div class="prosopo-logo">
					<svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.010001 49.009997" style="fill: ${e.palette.logoFill};"
						 aria-label="Prosopo Logo With Text">
						<title>${T}</title>
						<g transform="matrix(0.11319331,0,0,0.11319331,6.504999,-2.2052113e-4)">
							<g>
								<path d="m 119.79,50.5 a 147.75,147.75 0 0 1 147.75,147.75 h 50.5 C 318.04,88.76 229.28,0 119.79,0 Z"></path>
								<path d="m 53.6,116.7 a 147.74,147.74 0 0 1 147.74,147.74 h 50.5 C 251.84,154.95 163.09,66.2 53.6,66.2 Z"></path>
								<path d="M 198.24,382.48 A 147.75,147.75 0 0 1 50.5,234.74 H 0 c 0,109.49 88.75,198.24 198.24,198.24 z"></path>
								<path d="M 264.41,316.31 A 147.74,147.74 0 0 1 116.67,168.56 H 66.16 c 0,109.49 88.76,198.25 198.25,198.25 z"></path>
							</g>
						</g>
					</svg>
					<span class="prosopo-logo-text" id="logo-text" style="color: ${e.palette.logoFill};">
					Prosopo
					</span>
				</div>
			</a>
`;
}
function J(e) {
  var n, c;
  const t = document.createElement("div");
  t.className = "widget";
  const o = B(e), a = V(e);
  return t.innerHTML = O(e) + Q(te()), (n = t.querySelector(".widget__checkbox")) == null || n.replaceWith(o), (c = t.querySelector(".widget__logo")) == null || c.replaceWith(a), t;
}
function Q(e) {
  return `
<div class="widget__outer">
	<div class="widget__wrapper">
		<div class="widget__inner">
			<div class="widget__dimensions" ${e ? 'data-cy="captcha-checkbox"' : ""}>
				<div class="widget__content">
					<div class="widget__checkbox"></div>
					<div class="widget__logo"></div>
				</div>
			</div>
		</div>
	</div>
</div>
`;
}
function O(e) {
  return `
<style>
.widget {
    width: 100%;
    min-height: ${F}
}

.widget__outer {
    max-width: ${v};
    min-height: 100%;
    overflow-x: auto;
    width: 100%;
    font-family: ${e.font.fontFamily};
    color: ${e.font.color};
}

.widget__wrapper {
    container-type: size;
    container-name: widget;
    display: flex;
    flex-direction: column;
    height: ${x}px;
    min-width: 220px;
}

.widget__inner {
    max-height: 100%;
    min-width: 100%;
    overflow: hidden;
    height: ${x}px;
    width: 100%;
    display: grid;
}

.widget__dimensions {
    max-width: ${v};
    min-height: ${x}px;
}

.widget__content {
    padding: ${j};
    border: ${z};
    background-color: ${e.palette.background.default};
    border-color: ${e.palette.grey[300]};
    border-radius: ${G};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: ${U}px;
    overflow: hidden;
}
</style>
`;
}
function ee() {
  var t;
  return typeof process < "u" ? "production" : (t = import.meta.env) == null ? void 0 : t.MODE;
}
const te = () => ee() !== "production", oe = 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
function ae(e, t = "") {
  const o = document.createElement(e);
  ce(o);
  const a = o.attachShadow({ mode: "open" });
  return a.innerHTML = ne(t), o;
}
const ne = (e) => `
<style>
	*{font-family: ${oe};}
</style>

<style>
	${e}
</style>
`, ce = (e) => {
  e.style.display = "flex", e.style.flexDirection = "column", e.style.width = "100%", e.style.maxWidth = v;
};
function ie(e, t, o) {
  const a = J(t), n = ae(o);
  le(n).appendChild(a), e.innerHTML = "", e.appendChild(n);
  const i = K(n);
  if (!(i instanceof HTMLElement))
    throw new Error("Fail to initialize widget: interactive area is not found");
  return i;
}
const le = (e) => e.shadowRoot || e, g = {
  0: "#fff",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121"
}, m = 10, re = {
  palette: {
    mode: "light",
    primary: {
      main: "#487DFA",
      contrastText: "#fff"
    },
    background: {
      default: "#fff",
      contrastText: "#000"
    },
    border: g[400],
    error: {
      main: "#f44336"
    },
    logoFill: "#1d1d1b",
    grey: g
  },
  spacing: {
    unit: m,
    half: Math.floor(m / 2)
  },
  font: {
    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    color: "#000"
  }
}, se = {
  palette: {
    mode: "dark",
    primary: {
      main: "#487DFA",
      contrastText: "#fff"
    },
    background: {
      default: "#303030",
      contrastText: "#fff"
    },
    border: g[300],
    error: {
      main: "#f44336"
    },
    logoFill: "#fff",
    grey: g
  },
  spacing: {
    unit: m,
    half: Math.floor(m / 2)
  },
  font: {
    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    color: "#fff"
  }
};
function R(e) {
  return Object.values(W).find((a) => a === _(e, 0).getAttribute("data-captcha-type")) || "frictionless";
}
const k = (e) => document.querySelector('script[src*="'.concat(e, '"]')), de = (e) => {
  const t = k(e);
  if (t && t.src.indexOf("".concat(e)) !== -1) {
    const o = new URLSearchParams(t.src.split("?")[1]);
    return {
      onloadUrlCallback: o.get("onload") || void 0,
      renderExplicit: o.get("render") || void 0
    };
  }
  return { onloadUrlCallback: void 0, renderExplicit: void 0 };
};
class he {
  constructor(t) {
    this.widgetThemeResolver = t, this.captchaRenderer = null, this._i18n = null;
  }
  get i18n() {
    if (this._i18n === null)
      throw new Error("I18n is not initialized");
    return this._i18n;
  }
  async createWidgets(t, o, a = !0, n = !1) {
    return Promise.all(t.map((c) => {
      const i = M(c);
      return H(o, i, c), this.createWidget(c, o, i, a, n);
    }));
  }
  async createWidget(t, o, a, n = !0, c = !1) {
    o.theme = this.widgetThemeResolver.resolveWidgetTheme(t, o);
    const i = o.theme === "light" ? re : se;
    let r;
    if (c) {
      const h = document.createElement("div");
      t.appendChild(h), r = h;
    } else
      r = ie(t, i, "prosopo-procaptcha");
    return (await this.getCaptchaRenderer()).renderCaptcha({
      identifierPrefix: "procaptcha-",
      emotionCacheKey: "procaptcha",
      webComponentTag: "prosopo-procaptcha",
      defaultCaptchaType: W.frictionless
    }, r, o, a, n, this.i18n, c);
  }
  async getCaptchaRenderer() {
    return this._i18n === null && (this._i18n = await $()), this.captchaRenderer === null && (this.captchaRenderer = await this.createCaptchaRenderer()), this.captchaRenderer;
  }
  async createCaptchaRenderer() {
    const t = (await import("./captchaRenderer-DB19zGnf.js")).CaptchaRenderer, o = (await import("./captchaComponentProvider-C8XvEN7V.js").then((a) => a.d)).CaptchaComponentProvider;
    return new t(new o());
  }
}
class pe {
  constructor() {
    this.themesSet = /* @__PURE__ */ new Set(["light", "dark"]), this.defaultTheme = "light";
  }
  resolveWidgetTheme(t, o) {
    const a = o.theme || t.getAttribute("data-theme") || this.defaultTheme;
    return this.validateTheme(a);
  }
  validateTheme(t) {
    return this.themesSet.has(t) ? t : this.defaultTheme;
  }
}
const C = "procaptcha.bundle.js";
let d = [];
const b = new he(new pe()), fe = "procaptcha:execute", S = async () => {
  const e = Array.from(document.getElementsByClassName("procaptcha")).filter((o) => o.tagName.toLowerCase() !== "button");
  if (e.length) {
    const o = _(e, 0).getAttribute("data-sitekey"), a = _(e, 0).getAttribute("data-web3");
    if (!o) {
      console.error("No siteKey found");
      return;
    }
    const n = R(e), c = await b.createWidgets(e, {
      captchaType: n,
      siteKey: o
    }, a !== "true");
    d.push(...c);
  }
  const t = Array.from(document.getElementsByClassName("procaptcha")).filter((o) => o.tagName.toLowerCase() === "button");
  if (t.length)
    for (const o of t) {
      const a = o.getAttribute("data-sitekey") || "", n = o.getAttribute("data-callback") || "", c = R([o]), i = await b.createWidgets([o], {
        captchaType: c,
        siteKey: a,
        callback: n
      }, !0, !0);
      d.push(...i), o.addEventListener("click", async (r) => {
        r.preventDefault(), D();
      });
    }
}, ue = async (e, t) => {
  const o = Object.prototype.hasOwnProperty.call(t, "size") && t.size === "invisible", a = !t.web3;
  if (o || e.tagName.toLowerCase() === "button") {
    const c = await b.createWidgets([e], t, a, !0);
    d.push(...c);
    return;
  }
  const n = await b.createWidgets([e], t, a, !1);
  d.push(...n);
};
function p(e) {
  document && document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", () => {
    e();
  });
}
const D = () => {
  var e;
  const t = ge();
  if (t.length === 0) {
    console.error("No Procaptcha containers found for execution");
    return;
  }
  const o = new CustomEvent(fe, {
    detail: {
      containerId: ((e = t[0]) == null ? void 0 : e.id) || "procaptcha-container",
      containerCount: t.length,
      timestamp: Date.now()
    },
    bubbles: !0,
    cancelable: !0
  });
  document.dispatchEvent(o);
};
function ge() {
  const e = [], t = Array.from(document.querySelectorAll('[data-size="invisible"]'));
  e.push(...t);
  const o = Array.from(document.querySelectorAll('#procaptcha-container, [id$="-procaptcha-container"]')), a = Array.from(document.getElementsByClassName("p-procaptcha"));
  e.push(...a);
  for (const n of o)
    e.includes(n) || e.push(n);
  return e;
}
const L = () => {
  var e, t;
  const { onloadUrlCallback: o, renderExplicit: a } = de(C);
  let n = !1;
  if (a !== "explicit" && ((e = k(C)) == null || e.addEventListener("load", () => {
    p(S), n = !0;
  }), document.readyState === "complete" && !n && p(S)), o && ((t = k(C)) == null || t.addEventListener("load", () => {
    const c = u(o);
    p(c);
  }), document.readyState === "complete" && !n)) {
    const c = u(o);
    p(c);
  }
}, me = () => {
  for (const e of d)
    e.unmount();
  d = [], L();
};
window.procaptcha = { ready: p, render: ue, reset: me, execute: D };
L();
export {
  E as W,
  p as a,
  me as b,
  se as d,
  D as e,
  M as g,
  re as l,
  ue as r
};
