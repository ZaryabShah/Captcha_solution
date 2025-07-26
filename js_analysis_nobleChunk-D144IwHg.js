const Zt = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
function re(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function tt(t) {
  if (!Number.isSafeInteger(t) || t < 0)
    throw new Error("positive integer expected, got " + t);
}
function Q(t, ...e) {
  if (!re(t))
    throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function pe(t) {
  if (typeof t != "function" || typeof t.create != "function")
    throw new Error("Hash should be wrapped by utils.createHasher");
  tt(t.outputLen), tt(t.blockLen);
}
function Vt(t, e = !0) {
  if (t.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && t.finished)
    throw new Error("Hash#digest() has already been called");
}
function Fe(t, e) {
  Q(t);
  const n = e.outputLen;
  if (t.length < n)
    throw new Error("digestInto() expects output buffer of length at least " + n);
}
function Nt(t) {
  return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function st(...t) {
  for (let e = 0; e < t.length; e++)
    t[e].fill(0);
}
function ne(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
function ct(t, e) {
  return t << 32 - e | t >>> e;
}
function C(t, e) {
  return t << e | t >>> 32 - e >>> 0;
}
const tn = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function en(t) {
  return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
}
const lt = tn ? (t) => t : (t) => en(t);
function Tn(t) {
  for (let e = 0; e < t.length; e++)
    t[e] = en(t[e]);
  return t;
}
const Bt = tn ? (t) => t : Tn, nn = /* @ts-ignore */ typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", Zn = /* @__PURE__ */ Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function St(t) {
  if (Q(t), nn)
    return t.toHex();
  let e = "";
  for (let n = 0; n < t.length; n++)
    e += Zn[t[n]];
  return e;
}
const at = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function Ue(t) {
  if (t >= at._0 && t <= at._9)
    return t - at._0;
  if (t >= at.A && t <= at.F)
    return t - (at.A - 10);
  if (t >= at.a && t <= at.f)
    return t - (at.a - 10);
}
function se(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  if (nn)
    return Uint8Array.fromHex(t);
  const e = t.length, n = e / 2;
  if (e % 2)
    throw new Error("hex string expected, got unpadded hex of length " + e);
  const r = new Uint8Array(n);
  for (let o = 0, c = 0; o < n; o++, c += 2) {
    const s = Ue(t.charCodeAt(c)), i = Ue(t.charCodeAt(c + 1));
    if (s === void 0 || i === void 0) {
      const f = t[c] + t[c + 1];
      throw new Error('hex string expected, got non-hex character "' + f + '" at index ' + c);
    }
    r[o] = s * 16 + i;
  }
  return r;
}
function Ee(t) {
  if (typeof t != "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t));
}
function It(t) {
  return typeof t == "string" && (t = Ee(t)), Q(t), t;
}
function Ne(t) {
  return typeof t == "string" && (t = Ee(t)), Q(t), t;
}
function ht(...t) {
  let e = 0;
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    Q(o), e += o.length;
  }
  const n = new Uint8Array(e);
  for (let r = 0, o = 0; r < t.length; r++) {
    const c = t[r];
    n.set(c, o), o += c.length;
  }
  return n;
}
function rn(t, e) {
  if (e !== void 0 && {}.toString.call(e) !== "[object Object]")
    throw new Error("options should be object or undefined");
  return Object.assign(t, e);
}
class Be {
}
function sn(t) {
  const e = (r) => t().update(It(r)).digest(), n = t();
  return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = () => t(), e;
}
function Dn(t) {
  const e = (r, o) => t(o).update(It(r)).digest(), n = t({});
  return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = (r) => t(r), e;
}
function on(t = 32) {
  if (Zt && typeof Zt.getRandomValues == "function")
    return Zt.getRandomValues(new Uint8Array(t));
  if (Zt && typeof Zt.randomBytes == "function")
    return Uint8Array.from(Zt.randomBytes(t));
  throw new Error("crypto.getRandomValues must be defined");
}
const Mn = /* @__PURE__ */ Uint8Array.from([
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  14,
  10,
  4,
  8,
  9,
  15,
  13,
  6,
  1,
  12,
  0,
  2,
  11,
  7,
  5,
  3,
  11,
  8,
  12,
  0,
  5,
  2,
  15,
  13,
  10,
  14,
  3,
  6,
  7,
  1,
  9,
  4,
  7,
  9,
  3,
  1,
  13,
  12,
  11,
  14,
  2,
  6,
  5,
  10,
  4,
  0,
  15,
  8,
  9,
  0,
  5,
  7,
  2,
  4,
  10,
  15,
  14,
  1,
  11,
  12,
  6,
  8,
  3,
  13,
  2,
  12,
  6,
  10,
  0,
  11,
  8,
  3,
  4,
  13,
  7,
  5,
  15,
  14,
  1,
  9,
  12,
  5,
  1,
  15,
  14,
  13,
  4,
  10,
  0,
  7,
  6,
  3,
  9,
  2,
  8,
  11,
  13,
  11,
  7,
  14,
  12,
  1,
  3,
  9,
  5,
  0,
  15,
  4,
  8,
  6,
  2,
  10,
  6,
  15,
  14,
  9,
  11,
  3,
  0,
  8,
  12,
  2,
  13,
  7,
  1,
  4,
  10,
  5,
  10,
  2,
  8,
  4,
  7,
  6,
  1,
  5,
  15,
  11,
  9,
  14,
  3,
  12,
  13,
  0,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  14,
  10,
  4,
  8,
  9,
  15,
  13,
  6,
  1,
  12,
  0,
  2,
  11,
  7,
  5,
  3,
  // Blake1, unused in others
  11,
  8,
  12,
  0,
  5,
  2,
  15,
  13,
  10,
  14,
  3,
  6,
  7,
  1,
  9,
  4,
  7,
  9,
  3,
  1,
  13,
  12,
  11,
  14,
  2,
  6,
  5,
  10,
  4,
  0,
  15,
  8,
  9,
  0,
  5,
  7,
  2,
  4,
  10,
  15,
  14,
  1,
  11,
  12,
  6,
  8,
  3,
  13,
  2,
  12,
  6,
  10,
  0,
  11,
  8,
  3,
  4,
  13,
  7,
  5,
  15,
  14,
  1,
  9
]);
function Cn(t, e, n, r) {
  if (typeof t.setBigUint64 == "function")
    return t.setBigUint64(e, n, r);
  const o = BigInt(32), c = BigInt(4294967295), s = Number(n >> o & c), i = Number(n & c), f = r ? 4 : 0, l = r ? 0 : 4;
  t.setUint32(e + f, s, r), t.setUint32(e + l, i, r);
}
function Vn(t, e, n) {
  return t & e ^ ~t & n;
}
function Xn(t, e, n) {
  return t & e ^ t & n ^ e & n;
}
class cn extends Be {
  constructor(e, n, r, o) {
    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = e, this.outputLen = n, this.padOffset = r, this.isLE = o, this.buffer = new Uint8Array(e), this.view = ne(this.buffer);
  }
  update(e) {
    Vt(this), e = It(e), Q(e);
    const { view: n, buffer: r, blockLen: o } = this, c = e.length;
    for (let s = 0; s < c; ) {
      const i = Math.min(o - this.pos, c - s);
      if (i === o) {
        const f = ne(e);
        for (; o <= c - s; s += o)
          this.process(f, s);
        continue;
      }
      r.set(e.subarray(s, s + i), this.pos), this.pos += i, s += i, this.pos === o && (this.process(n, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    Vt(this), Fe(e, this), this.finished = !0;
    const { buffer: n, view: r, blockLen: o, isLE: c } = this;
    let { pos: s } = this;
    n[s++] = 128, st(this.buffer.subarray(s)), this.padOffset > o - s && (this.process(r, 0), s = 0);
    for (let h = s; h < o; h++)
      n[h] = 0;
    Cn(r, o - 8, BigInt(this.length * 8), c), this.process(r, 0);
    const i = ne(e), f = this.outputLen;
    if (f % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const l = f / 4, d = this.get();
    if (l > d.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let h = 0; h < l; h++)
      i.setUint32(4 * h, d[h], c);
  }
  digest() {
    const { buffer: e, outputLen: n } = this;
    this.digestInto(e);
    const r = e.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: n, buffer: r, length: o, finished: c, destroyed: s, pos: i } = this;
    return e.destroyed = s, e.finished = c, e.length = o, e.pos = i, o % n && e.buffer.set(r), e;
  }
  clone() {
    return this._cloneInto();
  }
}
const xt = /* @__PURE__ */ Uint32Array.from([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
const J = /* @__PURE__ */ Uint32Array.from([
  1779033703,
  4089235720,
  3144134277,
  2227873595,
  1013904242,
  4271175723,
  2773480762,
  1595750129,
  1359893119,
  2917565137,
  2600822924,
  725511199,
  528734635,
  4215389547,
  1541459225,
  327033209
]), Ft = /* @__PURE__ */ BigInt(2 ** 32 - 1), Te = /* @__PURE__ */ BigInt(32);
function fn(t, e = !1) {
  return e ? { h: Number(t & Ft), l: Number(t >> Te & Ft) } : { h: Number(t >> Te & Ft) | 0, l: Number(t & Ft) | 0 };
}
function an(t, e = !1) {
  const n = t.length;
  let r = new Uint32Array(n), o = new Uint32Array(n);
  for (let c = 0; c < n; c++) {
    const { h: s, l: i } = fn(t[c], e);
    [r[c], o[c]] = [s, i];
  }
  return [r, o];
}
const Ze = (t, e, n) => t >>> n, De = (t, e, n) => t << 32 - n | e >>> n, _t = (t, e, n) => t >>> n | e << 32 - n, At = (t, e, n) => t << 32 - n | e >>> n, Kt = (t, e, n) => t << 64 - n | e >>> n - 32, Wt = (t, e, n) => t >>> n - 32 | e << 64 - n, Yn = (t, e) => e, Gn = (t, e) => t, jn = (t, e, n) => t << n | e >>> 32 - n, $n = (t, e, n) => e << n | t >>> 32 - n, zn = (t, e, n) => e << n - 32 | t >>> 64 - n, Kn = (t, e, n) => t << n - 32 | e >>> 64 - n;
function ot(t, e, n, r) {
  const o = (e >>> 0) + (r >>> 0);
  return { h: t + n + (o / 2 ** 32 | 0) | 0, l: o | 0 };
}
const _e = (t, e, n) => (t >>> 0) + (e >>> 0) + (n >>> 0), Ae = (t, e, n, r) => e + n + r + (t / 2 ** 32 | 0) | 0, Wn = (t, e, n, r) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0), Pn = (t, e, n, r, o) => e + n + r + o + (t / 2 ** 32 | 0) | 0, Qn = (t, e, n, r, o) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0) + (o >>> 0), Jn = (t, e, n, r, o, c) => e + n + r + o + c + (t / 2 ** 32 | 0) | 0, K = /* @__PURE__ */ Uint32Array.from([
  4089235720,
  1779033703,
  2227873595,
  3144134277,
  4271175723,
  1013904242,
  1595750129,
  2773480762,
  2917565137,
  1359893119,
  725511199,
  2600822924,
  4215389547,
  528734635,
  327033209,
  1541459225
]), v = /* @__PURE__ */ new Uint32Array(32);
function mt(t, e, n, r, o, c) {
  const s = o[c], i = o[c + 1];
  let f = v[2 * t], l = v[2 * t + 1], d = v[2 * e], h = v[2 * e + 1], a = v[2 * n], u = v[2 * n + 1], g = v[2 * r], b = v[2 * r + 1], m = _e(f, d, s);
  l = Ae(m, l, h, i), f = m | 0, { Dh: b, Dl: g } = { Dh: b ^ l, Dl: g ^ f }, { Dh: b, Dl: g } = { Dh: Yn(b, g), Dl: Gn(b) }, { h: u, l: a } = ot(u, a, b, g), { Bh: h, Bl: d } = { Bh: h ^ u, Bl: d ^ a }, { Bh: h, Bl: d } = { Bh: _t(h, d, 24), Bl: At(h, d, 24) }, v[2 * t] = f, v[2 * t + 1] = l, v[2 * e] = d, v[2 * e + 1] = h, v[2 * n] = a, v[2 * n + 1] = u, v[2 * r] = g, v[2 * r + 1] = b;
}
function yt(t, e, n, r, o, c) {
  const s = o[c], i = o[c + 1];
  let f = v[2 * t], l = v[2 * t + 1], d = v[2 * e], h = v[2 * e + 1], a = v[2 * n], u = v[2 * n + 1], g = v[2 * r], b = v[2 * r + 1], m = _e(f, d, s);
  l = Ae(m, l, h, i), f = m | 0, { Dh: b, Dl: g } = { Dh: b ^ l, Dl: g ^ f }, { Dh: b, Dl: g } = { Dh: _t(b, g, 16), Dl: At(b, g, 16) }, { h: u, l: a } = ot(u, a, b, g), { Bh: h, Bl: d } = { Bh: h ^ u, Bl: d ^ a }, { Bh: h, Bl: d } = { Bh: Kt(h, d, 63), Bl: Wt(h, d, 63) }, v[2 * t] = f, v[2 * t + 1] = l, v[2 * e] = d, v[2 * e + 1] = h, v[2 * n] = a, v[2 * n + 1] = u, v[2 * r] = g, v[2 * r + 1] = b;
}
function Fn(t, e = {}, n, r, o) {
  if (tt(n), t < 0 || t > n)
    throw new Error("outputLen bigger than keyLen");
  const { key: c, salt: s, personalization: i } = e;
  if (c !== void 0 && (c.length < 1 || c.length > n))
    throw new Error("key length must be undefined or 1.." + n);
  if (s !== void 0 && s.length !== r)
    throw new Error("salt must be undefined or " + r);
  if (i !== void 0 && i.length !== o)
    throw new Error("personalization must be undefined or " + o);
}
class tr extends Be {
  constructor(e, n) {
    super(), this.finished = !1, this.destroyed = !1, this.length = 0, this.pos = 0, tt(e), tt(n), this.blockLen = e, this.outputLen = n, this.buffer = new Uint8Array(e), this.buffer32 = Nt(this.buffer);
  }
  update(e) {
    Vt(this), e = It(e), Q(e);
    const { blockLen: n, buffer: r, buffer32: o } = this, c = e.length, s = e.byteOffset, i = e.buffer;
    for (let f = 0; f < c; ) {
      this.pos === n && (Bt(o), this.compress(o, 0, !1), Bt(o), this.pos = 0);
      const l = Math.min(n - this.pos, c - f), d = s + f;
      if (l === n && !(d % 4) && f + l < c) {
        const h = new Uint32Array(i, d, Math.floor((c - f) / 4));
        Bt(h);
        for (let a = 0; f + n < c; a += o.length, f += n)
          this.length += n, this.compress(h, a, !1);
        Bt(h);
        continue;
      }
      r.set(e.subarray(f, f + l), this.pos), this.pos += l, this.length += l, f += l;
    }
    return this;
  }
  digestInto(e) {
    Vt(this), Fe(e, this);
    const { pos: n, buffer32: r } = this;
    this.finished = !0, st(this.buffer.subarray(n)), Bt(r), this.compress(r, 0, !0), Bt(r);
    const o = Nt(e);
    this.get().forEach((c, s) => o[s] = lt(c));
  }
  digest() {
    const { buffer: e, outputLen: n } = this;
    this.digestInto(e);
    const r = e.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    const { buffer: n, length: r, finished: o, destroyed: c, outputLen: s, pos: i } = this;
    return e || (e = new this.constructor({ dkLen: s })), e.set(...this.get()), e.buffer.set(n), e.destroyed = c, e.finished = o, e.length = r, e.pos = i, e.outputLen = s, e;
  }
  clone() {
    return this._cloneInto();
  }
}
class er extends tr {
  constructor(e = {}) {
    const n = e.dkLen === void 0 ? 64 : e.dkLen;
    super(128, n), this.v0l = K[0] | 0, this.v0h = K[1] | 0, this.v1l = K[2] | 0, this.v1h = K[3] | 0, this.v2l = K[4] | 0, this.v2h = K[5] | 0, this.v3l = K[6] | 0, this.v3h = K[7] | 0, this.v4l = K[8] | 0, this.v4h = K[9] | 0, this.v5l = K[10] | 0, this.v5h = K[11] | 0, this.v6l = K[12] | 0, this.v6h = K[13] | 0, this.v7l = K[14] | 0, this.v7h = K[15] | 0, Fn(n, e, 64, 16, 16);
    let { key: r, personalization: o, salt: c } = e, s = 0;
    if (r !== void 0 && (r = It(r), s = r.length), this.v0l ^= this.outputLen | s << 8 | 65536 | 1 << 24, c !== void 0) {
      c = It(c);
      const i = Nt(c);
      this.v4l ^= lt(i[0]), this.v4h ^= lt(i[1]), this.v5l ^= lt(i[2]), this.v5h ^= lt(i[3]);
    }
    if (o !== void 0) {
      o = It(o);
      const i = Nt(o);
      this.v6l ^= lt(i[0]), this.v6h ^= lt(i[1]), this.v7l ^= lt(i[2]), this.v7h ^= lt(i[3]);
    }
    if (r !== void 0) {
      const i = new Uint8Array(this.blockLen);
      i.set(r), this.update(i);
    }
  }
  // prettier-ignore
  get() {
    let { v0l: e, v0h: n, v1l: r, v1h: o, v2l: c, v2h: s, v3l: i, v3h: f, v4l: l, v4h: d, v5l: h, v5h: a, v6l: u, v6h: g, v7l: b, v7h: m } = this;
    return [e, n, r, o, c, s, i, f, l, d, h, a, u, g, b, m];
  }
  // prettier-ignore
  set(e, n, r, o, c, s, i, f, l, d, h, a, u, g, b, m) {
    this.v0l = e | 0, this.v0h = n | 0, this.v1l = r | 0, this.v1h = o | 0, this.v2l = c | 0, this.v2h = s | 0, this.v3l = i | 0, this.v3h = f | 0, this.v4l = l | 0, this.v4h = d | 0, this.v5l = h | 0, this.v5h = a | 0, this.v6l = u | 0, this.v6h = g | 0, this.v7l = b | 0, this.v7h = m | 0;
  }
  compress(e, n, r) {
    this.get().forEach((f, l) => v[l] = f), v.set(K, 16);
    let { h: o, l: c } = fn(BigInt(this.length));
    v[24] = K[8] ^ c, v[25] = K[9] ^ o, r && (v[28] = ~v[28], v[29] = ~v[29]);
    let s = 0;
    const i = Mn;
    for (let f = 0; f < 12; f++)
      mt(0, 4, 8, 12, e, n + 2 * i[s++]), yt(0, 4, 8, 12, e, n + 2 * i[s++]), mt(1, 5, 9, 13, e, n + 2 * i[s++]), yt(1, 5, 9, 13, e, n + 2 * i[s++]), mt(2, 6, 10, 14, e, n + 2 * i[s++]), yt(2, 6, 10, 14, e, n + 2 * i[s++]), mt(3, 7, 11, 15, e, n + 2 * i[s++]), yt(3, 7, 11, 15, e, n + 2 * i[s++]), mt(0, 5, 10, 15, e, n + 2 * i[s++]), yt(0, 5, 10, 15, e, n + 2 * i[s++]), mt(1, 6, 11, 12, e, n + 2 * i[s++]), yt(1, 6, 11, 12, e, n + 2 * i[s++]), mt(2, 7, 8, 13, e, n + 2 * i[s++]), yt(2, 7, 8, 13, e, n + 2 * i[s++]), mt(3, 4, 9, 14, e, n + 2 * i[s++]), yt(3, 4, 9, 14, e, n + 2 * i[s++]);
    this.v0l ^= v[0] ^ v[16], this.v0h ^= v[1] ^ v[17], this.v1l ^= v[2] ^ v[18], this.v1h ^= v[3] ^ v[19], this.v2l ^= v[4] ^ v[20], this.v2h ^= v[5] ^ v[21], this.v3l ^= v[6] ^ v[22], this.v3h ^= v[7] ^ v[23], this.v4l ^= v[8] ^ v[24], this.v4h ^= v[9] ^ v[25], this.v5l ^= v[10] ^ v[26], this.v5h ^= v[11] ^ v[27], this.v6l ^= v[12] ^ v[28], this.v6h ^= v[13] ^ v[29], this.v7l ^= v[14] ^ v[30], this.v7h ^= v[15] ^ v[31], st(v);
  }
  destroy() {
    this.destroyed = !0, st(this.buffer32), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const nr = /* @__PURE__ */ Dn((t) => new er(t));
const ws = nr;
class ln extends Be {
  constructor(e, n) {
    super(), this.finished = !1, this.destroyed = !1, pe(e);
    const r = It(n);
    if (this.iHash = e.create(), typeof this.iHash.update != "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const o = this.blockLen, c = new Uint8Array(o);
    c.set(r.length > o ? e.create().update(r).digest() : r);
    for (let s = 0; s < c.length; s++)
      c[s] ^= 54;
    this.iHash.update(c), this.oHash = e.create();
    for (let s = 0; s < c.length; s++)
      c[s] ^= 106;
    this.oHash.update(c), st(c);
  }
  update(e) {
    return Vt(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    Vt(this), Q(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: n, iHash: r, finished: o, destroyed: c, blockLen: s, outputLen: i } = this;
    return e = e, e.finished = o, e.destroyed = c, e.blockLen = s, e.outputLen = i, e.oHash = n._cloneInto(e.oHash), e.iHash = r._cloneInto(e.iHash), e;
  }
  clone() {
    return this._cloneInto();
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const ve = (t, e, n) => new ln(t, e).update(n).digest();
ve.create = (t, e) => new ln(t, e);
function rr(t, e, n, r) {
  pe(t);
  const o = rn({ dkLen: 32, asyncTick: 10 }, r), { c, dkLen: s, asyncTick: i } = o;
  if (tt(c), tt(s), tt(i), c < 1)
    throw new Error("iterations (c) should be >= 1");
  const f = Ne(e), l = Ne(n), d = new Uint8Array(s), h = ve.create(t, f), a = h._cloneInto().update(l);
  return { c, dkLen: s, asyncTick: i, DK: d, PRF: h, PRFSalt: a };
}
function sr(t, e, n, r, o) {
  return t.destroy(), e.destroy(), r && r.destroy(), st(o), n;
}
function un(t, e, n, r) {
  const { c: o, dkLen: c, DK: s, PRF: i, PRFSalt: f } = rr(t, e, n, r);
  let l;
  const d = new Uint8Array(4), h = ne(d), a = new Uint8Array(i.outputLen);
  for (let u = 1, g = 0; g < c; u++, g += i.outputLen) {
    const b = s.subarray(g, g + i.outputLen);
    h.setInt32(0, u, !1), (l = f._cloneInto(l)).update(d).digestInto(a), b.set(a.subarray(0, b.length));
    for (let m = 1; m < o; m++) {
      i._cloneInto(l).update(a).digestInto(a);
      for (let B = 0; B < b.length; B++)
        b[B] ^= a[B];
    }
  }
  return sr(i, f, s, l, a);
}
const or = /* @__PURE__ */ Uint32Array.from([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), gt = /* @__PURE__ */ new Uint32Array(64);
class ir extends cn {
  constructor(e = 32) {
    super(64, e, 8, !1), this.A = xt[0] | 0, this.B = xt[1] | 0, this.C = xt[2] | 0, this.D = xt[3] | 0, this.E = xt[4] | 0, this.F = xt[5] | 0, this.G = xt[6] | 0, this.H = xt[7] | 0;
  }
  get() {
    const { A: e, B: n, C: r, D: o, E: c, F: s, G: i, H: f } = this;
    return [e, n, r, o, c, s, i, f];
  }
  // prettier-ignore
  set(e, n, r, o, c, s, i, f) {
    this.A = e | 0, this.B = n | 0, this.C = r | 0, this.D = o | 0, this.E = c | 0, this.F = s | 0, this.G = i | 0, this.H = f | 0;
  }
  process(e, n) {
    for (let h = 0; h < 16; h++, n += 4)
      gt[h] = e.getUint32(n, !1);
    for (let h = 16; h < 64; h++) {
      const a = gt[h - 15], u = gt[h - 2], g = ct(a, 7) ^ ct(a, 18) ^ a >>> 3, b = ct(u, 17) ^ ct(u, 19) ^ u >>> 10;
      gt[h] = b + gt[h - 7] + g + gt[h - 16] | 0;
    }
    let { A: r, B: o, C: c, D: s, E: i, F: f, G: l, H: d } = this;
    for (let h = 0; h < 64; h++) {
      const a = ct(i, 6) ^ ct(i, 11) ^ ct(i, 25), u = d + a + Vn(i, f, l) + or[h] + gt[h] | 0, b = (ct(r, 2) ^ ct(r, 13) ^ ct(r, 22)) + Xn(r, o, c) | 0;
      d = l, l = f, f = i, i = s + u | 0, s = c, c = o, o = r, r = u + b | 0;
    }
    r = r + this.A | 0, o = o + this.B | 0, c = c + this.C | 0, s = s + this.D | 0, i = i + this.E | 0, f = f + this.F | 0, l = l + this.G | 0, d = d + this.H | 0, this.set(r, o, c, s, i, f, l, d);
  }
  roundClean() {
    st(gt);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), st(this.buffer);
  }
}
const hn = an([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((t) => BigInt(t))), cr = hn[0], fr = hn[1], pt = /* @__PURE__ */ new Uint32Array(80), Et = /* @__PURE__ */ new Uint32Array(80);
class ar extends cn {
  constructor(e = 64) {
    super(128, e, 16, !1), this.Ah = J[0] | 0, this.Al = J[1] | 0, this.Bh = J[2] | 0, this.Bl = J[3] | 0, this.Ch = J[4] | 0, this.Cl = J[5] | 0, this.Dh = J[6] | 0, this.Dl = J[7] | 0, this.Eh = J[8] | 0, this.El = J[9] | 0, this.Fh = J[10] | 0, this.Fl = J[11] | 0, this.Gh = J[12] | 0, this.Gl = J[13] | 0, this.Hh = J[14] | 0, this.Hl = J[15] | 0;
  }
  // prettier-ignore
  get() {
    const { Ah: e, Al: n, Bh: r, Bl: o, Ch: c, Cl: s, Dh: i, Dl: f, Eh: l, El: d, Fh: h, Fl: a, Gh: u, Gl: g, Hh: b, Hl: m } = this;
    return [e, n, r, o, c, s, i, f, l, d, h, a, u, g, b, m];
  }
  // prettier-ignore
  set(e, n, r, o, c, s, i, f, l, d, h, a, u, g, b, m) {
    this.Ah = e | 0, this.Al = n | 0, this.Bh = r | 0, this.Bl = o | 0, this.Ch = c | 0, this.Cl = s | 0, this.Dh = i | 0, this.Dl = f | 0, this.Eh = l | 0, this.El = d | 0, this.Fh = h | 0, this.Fl = a | 0, this.Gh = u | 0, this.Gl = g | 0, this.Hh = b | 0, this.Hl = m | 0;
  }
  process(e, n) {
    for (let O = 0; O < 16; O++, n += 4)
      pt[O] = e.getUint32(n), Et[O] = e.getUint32(n += 4);
    for (let O = 16; O < 80; O++) {
      const U = pt[O - 15] | 0, M = Et[O - 15] | 0, S = _t(U, M, 1) ^ _t(U, M, 8) ^ Ze(U, M, 7), D = At(U, M, 1) ^ At(U, M, 8) ^ De(U, M, 7), Z = pt[O - 2] | 0, R = Et[O - 2] | 0, x = _t(Z, R, 19) ^ Kt(Z, R, 61) ^ Ze(Z, R, 6), w = At(Z, R, 19) ^ Wt(Z, R, 61) ^ De(Z, R, 6), E = Wn(D, w, Et[O - 7], Et[O - 16]), _ = Pn(E, S, x, pt[O - 7], pt[O - 16]);
      pt[O] = _ | 0, Et[O] = E | 0;
    }
    let { Ah: r, Al: o, Bh: c, Bl: s, Ch: i, Cl: f, Dh: l, Dl: d, Eh: h, El: a, Fh: u, Fl: g, Gh: b, Gl: m, Hh: B, Hl: H } = this;
    for (let O = 0; O < 80; O++) {
      const U = _t(h, a, 14) ^ _t(h, a, 18) ^ Kt(h, a, 41), M = At(h, a, 14) ^ At(h, a, 18) ^ Wt(h, a, 41), S = h & u ^ ~h & b, D = a & g ^ ~a & m, Z = Qn(H, M, D, fr[O], Et[O]), R = Jn(Z, B, U, S, cr[O], pt[O]), x = Z | 0, w = _t(r, o, 28) ^ Kt(r, o, 34) ^ Kt(r, o, 39), E = At(r, o, 28) ^ Wt(r, o, 34) ^ Wt(r, o, 39), _ = r & c ^ r & i ^ c & i, L = o & s ^ o & f ^ s & f;
      B = b | 0, H = m | 0, b = u | 0, m = g | 0, u = h | 0, g = a | 0, { h, l: a } = ot(l | 0, d | 0, R | 0, x | 0), l = i | 0, d = f | 0, i = c | 0, f = s | 0, c = r | 0, s = o | 0;
      const k = _e(x, E, L);
      r = Ae(k, R, w, _), o = k | 0;
    }
    ({ h: r, l: o } = ot(this.Ah | 0, this.Al | 0, r | 0, o | 0)), { h: c, l: s } = ot(this.Bh | 0, this.Bl | 0, c | 0, s | 0), { h: i, l: f } = ot(this.Ch | 0, this.Cl | 0, i | 0, f | 0), { h: l, l: d } = ot(this.Dh | 0, this.Dl | 0, l | 0, d | 0), { h, l: a } = ot(this.Eh | 0, this.El | 0, h | 0, a | 0), { h: u, l: g } = ot(this.Fh | 0, this.Fl | 0, u | 0, g | 0), { h: b, l: m } = ot(this.Gh | 0, this.Gl | 0, b | 0, m | 0), { h: B, l: H } = ot(this.Hh | 0, this.Hl | 0, B | 0, H | 0), this.set(r, o, c, s, i, f, l, d, h, a, u, g, b, m, B, H);
  }
  roundClean() {
    st(pt, Et);
  }
  destroy() {
    st(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const ce = /* @__PURE__ */ sn(() => new ir()), dn = /* @__PURE__ */ sn(() => new ar());
function Me(t, e, n, r, o, c) {
  let s = t[e++] ^ n[r++], i = t[e++] ^ n[r++], f = t[e++] ^ n[r++], l = t[e++] ^ n[r++], d = t[e++] ^ n[r++], h = t[e++] ^ n[r++], a = t[e++] ^ n[r++], u = t[e++] ^ n[r++], g = t[e++] ^ n[r++], b = t[e++] ^ n[r++], m = t[e++] ^ n[r++], B = t[e++] ^ n[r++], H = t[e++] ^ n[r++], O = t[e++] ^ n[r++], U = t[e++] ^ n[r++], M = t[e++] ^ n[r++], S = s, D = i, Z = f, R = l, x = d, w = h, E = a, _ = u, L = g, k = b, p = m, y = B, A = H, I = O, q = U, N = M;
  for (let T = 0; T < 8; T += 2)
    x ^= C(S + A | 0, 7), L ^= C(x + S | 0, 9), A ^= C(L + x | 0, 13), S ^= C(A + L | 0, 18), k ^= C(w + D | 0, 7), I ^= C(k + w | 0, 9), D ^= C(I + k | 0, 13), w ^= C(D + I | 0, 18), q ^= C(p + E | 0, 7), Z ^= C(q + p | 0, 9), E ^= C(Z + q | 0, 13), p ^= C(E + Z | 0, 18), R ^= C(N + y | 0, 7), _ ^= C(R + N | 0, 9), y ^= C(_ + R | 0, 13), N ^= C(y + _ | 0, 18), D ^= C(S + R | 0, 7), Z ^= C(D + S | 0, 9), R ^= C(Z + D | 0, 13), S ^= C(R + Z | 0, 18), E ^= C(w + x | 0, 7), _ ^= C(E + w | 0, 9), x ^= C(_ + E | 0, 13), w ^= C(x + _ | 0, 18), y ^= C(p + k | 0, 7), L ^= C(y + p | 0, 9), k ^= C(L + y | 0, 13), p ^= C(k + L | 0, 18), A ^= C(N + q | 0, 7), I ^= C(A + N | 0, 9), q ^= C(I + A | 0, 13), N ^= C(q + I | 0, 18);
  o[c++] = s + S | 0, o[c++] = i + D | 0, o[c++] = f + Z | 0, o[c++] = l + R | 0, o[c++] = d + x | 0, o[c++] = h + w | 0, o[c++] = a + E | 0, o[c++] = u + _ | 0, o[c++] = g + L | 0, o[c++] = b + k | 0, o[c++] = m + p | 0, o[c++] = B + y | 0, o[c++] = H + A | 0, o[c++] = O + I | 0, o[c++] = U + q | 0, o[c++] = M + N | 0;
}
function ae(t, e, n, r, o) {
  let c = r + 0, s = r + 16 * o;
  for (let i = 0; i < 16; i++)
    n[s + i] = t[e + (2 * o - 1) * 16 + i];
  for (let i = 0; i < o; i++, c += 16, e += 16)
    Me(n, s, t, e, n, c), i > 0 && (s += 16), Me(n, c, t, e += 16, n, s);
}
function lr(t, e, n) {
  const r = rn({
    dkLen: 32,
    asyncTick: 10,
    maxmem: 1073742848
  }, n), { N: o, r: c, p: s, dkLen: i, asyncTick: f, maxmem: l, onProgress: d } = r;
  if (tt(o), tt(c), tt(s), tt(i), tt(f), tt(l), d !== void 0 && typeof d != "function")
    throw new Error("progressCb should be function");
  const h = 128 * c, a = h / 4, u = Math.pow(2, 32);
  if (o <= 1 || (o & o - 1) !== 0 || o > u)
    throw new Error("Scrypt: N must be larger than 1, a power of 2, and less than 2^32");
  if (s < 0 || s > (u - 1) * 32 / h)
    throw new Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");
  if (i < 0 || i > (u - 1) * 32)
    throw new Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");
  if (h * (o + s) > l)
    throw new Error("Scrypt: memused is bigger than maxMem. Expected 128 * r * (N + p) > maxmem of " + l);
  const b = un(ce, t, e, { c: 1, dkLen: h * s }), m = Nt(b), B = Nt(new Uint8Array(h * o)), H = Nt(new Uint8Array(h));
  let O = () => {
  };
  if (d) {
    const U = 2 * o * s, M = Math.max(Math.floor(U / 1e4), 1);
    let S = 0;
    O = () => {
      S++, d && (!(S % M) || S === U) && d(S / U);
    };
  }
  return { N: o, r: c, p: s, dkLen: i, blockSize32: a, V: B, B32: m, B: b, tmp: H, blockMixCb: O, asyncTick: f };
}
function ur(t, e, n, r, o) {
  const c = un(ce, t, n, { c: 1, dkLen: e });
  return st(n, r, o), c;
}
function xs(t, e, n) {
  const { N: r, r: o, p: c, dkLen: s, blockSize32: i, V: f, B32: l, B: d, tmp: h, blockMixCb: a } = lr(t, e, n);
  Bt(l);
  for (let u = 0; u < c; u++) {
    const g = i * u;
    for (let b = 0; b < i; b++)
      f[b] = l[g + b];
    for (let b = 0, m = 0; b < r - 1; b++)
      ae(f, m, f, m += i, o), a();
    ae(f, (r - 1) * i, l, g, o), a();
    for (let b = 0; b < r; b++) {
      const m = l[g + i - 16] % r;
      for (let B = 0; B < i; B++)
        h[B] = l[g + B] ^ f[m * i + B];
      ae(h, 0, l, g, o), a();
    }
  }
  return Bt(l), ur(t, s, d, f, h);
}
const Se = /* @__PURE__ */ BigInt(0), we = /* @__PURE__ */ BigInt(1);
function Tt(t, e) {
  if (typeof e != "boolean")
    throw new Error(t + " boolean expected, got " + e);
}
function te(t) {
  const e = t.toString(16);
  return e.length & 1 ? "0" + e : e;
}
function bn(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  return t === "" ? Se : BigInt("0x" + t);
}
function fe(t) {
  return bn(St(t));
}
function Xt(t) {
  return Q(t), bn(St(Uint8Array.from(t).reverse()));
}
function Ie(t, e) {
  return se(t.toString(16).padStart(e * 2, "0"));
}
function Yt(t, e) {
  return Ie(t, e).reverse();
}
function G(t, e, n) {
  let r;
  if (typeof e == "string")
    try {
      r = se(e);
    } catch (c) {
      throw new Error(t + " must be hex string or Uint8Array, cause: " + c);
    }
  else if (re(e))
    r = Uint8Array.from(e);
  else
    throw new Error(t + " must be hex string or Uint8Array");
  const o = r.length;
  if (typeof n == "number" && o !== n)
    throw new Error(t + " of length " + n + " expected, got " + o);
  return r;
}
function hr(t, e) {
  if (t.length !== e.length)
    return !1;
  let n = 0;
  for (let r = 0; r < t.length; r++)
    n |= t[r] ^ e[r];
  return n === 0;
}
const le = (t) => typeof t == "bigint" && Se <= t;
function dr(t, e, n) {
  return le(t) && le(e) && le(n) && e <= t && t < n;
}
function Mt(t, e, n, r) {
  if (!dr(e, n, r))
    throw new Error("expected valid " + t + ": " + n + " <= n < " + r + ", got " + e);
}
function wn(t) {
  let e;
  for (e = 0; t > Se; t >>= we, e += 1)
    ;
  return e;
}
const Pt = (t) => (we << BigInt(t)) - we;
function br(t, e, n) {
  if (typeof t != "number" || t < 2)
    throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2)
    throw new Error("qByteLen must be a number");
  if (typeof n != "function")
    throw new Error("hmacFn must be a function");
  const r = (u) => new Uint8Array(u), o = (u) => Uint8Array.of(u);
  let c = r(t), s = r(t), i = 0;
  const f = () => {
    c.fill(1), s.fill(0), i = 0;
  }, l = (...u) => n(s, c, ...u), d = (u = r(0)) => {
    s = l(o(0), u), c = l(), u.length !== 0 && (s = l(o(1), u), c = l());
  }, h = () => {
    if (i++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let u = 0;
    const g = [];
    for (; u < e; ) {
      c = l();
      const b = c.slice();
      g.push(b), u += c.length;
    }
    return ht(...g);
  };
  return (u, g) => {
    f(), d(u);
    let b;
    for (; !(b = g(h())); )
      d();
    return f(), b;
  };
}
function Qt(t, e, n = {}) {
  if (!t || typeof t != "object")
    throw new Error("expected valid options object");
  function r(o, c, s) {
    const i = t[o];
    if (s && i === void 0)
      return;
    const f = typeof i;
    if (f !== c || i === null)
      throw new Error(`param "${o}" is invalid: expected ${c}, got ${f}`);
  }
  Object.entries(e).forEach(([o, c]) => r(o, c, !1)), Object.entries(n).forEach(([o, c]) => r(o, c, !0));
}
function oe(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return (n, ...r) => {
    const o = e.get(n);
    if (o !== void 0)
      return o;
    const c = t(n, ...r);
    return e.set(n, c), c;
  };
}
const et = BigInt(0), P = BigInt(1), kt = /* @__PURE__ */ BigInt(2), xn = /* @__PURE__ */ BigInt(3), mn = /* @__PURE__ */ BigInt(4), yn = /* @__PURE__ */ BigInt(5), wr = /* @__PURE__ */ BigInt(7), gn = /* @__PURE__ */ BigInt(8), xr = /* @__PURE__ */ BigInt(9), pn = /* @__PURE__ */ BigInt(16);
function $(t, e) {
  const n = t % e;
  return n >= et ? n : e + n;
}
function j(t, e, n) {
  let r = t;
  for (; e-- > et; )
    r *= r, r %= n;
  return r;
}
function Ce(t, e) {
  if (t === et)
    throw new Error("invert: expected non-zero number");
  if (e <= et)
    throw new Error("invert: expected positive modulus, got " + e);
  let n = $(t, e), r = e, o = et, c = P;
  for (; n !== et; ) {
    const i = r / n, f = r % n, l = o - c * i;
    r = n, n = f, o = c, c = l;
  }
  if (r !== P)
    throw new Error("invert: does not exist");
  return $(o, e);
}
function Oe(t, e, n) {
  if (!t.eql(t.sqr(e), n))
    throw new Error("Cannot find square root");
}
function En(t, e) {
  const n = (t.ORDER + P) / mn, r = t.pow(e, n);
  return Oe(t, r, e), r;
}
function mr(t, e) {
  const n = (t.ORDER - yn) / gn, r = t.mul(e, kt), o = t.pow(r, n), c = t.mul(e, o), s = t.mul(t.mul(c, kt), o), i = t.mul(c, t.sub(s, t.ONE));
  return Oe(t, i, e), i;
}
function yr(t) {
  const e = Ot(t), n = Bn(t), r = n(e, e.neg(e.ONE)), o = n(e, r), c = n(e, e.neg(r)), s = (t + wr) / pn;
  return (i, f) => {
    let l = i.pow(f, s), d = i.mul(l, r);
    const h = i.mul(l, o), a = i.mul(l, c), u = i.eql(i.sqr(d), f), g = i.eql(i.sqr(h), f);
    l = i.cmov(l, d, u), d = i.cmov(a, h, g);
    const b = i.eql(i.sqr(d), f), m = i.cmov(l, d, b);
    return Oe(i, m, f), m;
  };
}
function Bn(t) {
  if (t < xn)
    throw new Error("sqrt is not defined for small field");
  let e = t - P, n = 0;
  for (; e % kt === et; )
    e /= kt, n++;
  let r = kt;
  const o = Ot(t);
  for (; Ve(o, r) === 1; )
    if (r++ > 1e3)
      throw new Error("Cannot find square root: probably non-prime P");
  if (n === 1)
    return En;
  let c = o.pow(r, e);
  const s = (e + P) / kt;
  return function(f, l) {
    if (f.is0(l))
      return l;
    if (Ve(f, l) !== 1)
      throw new Error("Cannot find square root");
    let d = n, h = f.mul(f.ONE, c), a = f.pow(l, e), u = f.pow(l, s);
    for (; !f.eql(a, f.ONE); ) {
      if (f.is0(a))
        return f.ZERO;
      let g = 1, b = f.sqr(a);
      for (; !f.eql(b, f.ONE); )
        if (g++, b = f.sqr(b), g === d)
          throw new Error("Cannot find square root");
      const m = P << BigInt(d - g - 1), B = f.pow(h, m);
      d = g, h = f.sqr(B), a = f.mul(a, h), u = f.mul(u, B);
    }
    return u;
  };
}
function gr(t) {
  return t % mn === xn ? En : t % gn === yn ? mr : t % pn === xr ? yr(t) : Bn(t);
}
const vt = (t, e) => ($(t, e) & P) === P, pr = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function Er(t) {
  const e = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "number",
    BITS: "number"
  }, n = pr.reduce((r, o) => (r[o] = "function", r), e);
  return Qt(t, n), t;
}
function Br(t, e, n) {
  if (n < et)
    throw new Error("invalid exponent, negatives unsupported");
  if (n === et)
    return t.ONE;
  if (n === P)
    return e;
  let r = t.ONE, o = e;
  for (; n > et; )
    n & P && (r = t.mul(r, o)), o = t.sqr(o), n >>= P;
  return r;
}
function _n(t, e, n = !1) {
  const r = new Array(e.length).fill(n ? t.ZERO : void 0), o = e.reduce((s, i, f) => t.is0(i) ? s : (r[f] = s, t.mul(s, i)), t.ONE), c = t.inv(o);
  return e.reduceRight((s, i, f) => t.is0(i) ? s : (r[f] = t.mul(s, r[f]), t.mul(s, i)), c), r;
}
function Ve(t, e) {
  const n = (t.ORDER - P) / kt, r = t.pow(e, n), o = t.eql(r, t.ONE), c = t.eql(r, t.ZERO), s = t.eql(r, t.neg(t.ONE));
  if (!o && !c && !s)
    throw new Error("invalid Legendre symbol result");
  return o ? 1 : c ? 0 : -1;
}
function _r(t, e) {
  e !== void 0 && tt(e);
  const n = e !== void 0 ? e : t.toString(2).length, r = Math.ceil(n / 8);
  return { nBitLength: n, nByteLength: r };
}
function Ot(t, e, n = !1, r = {}) {
  if (t <= et)
    throw new Error("invalid field: expected ORDER > 0, got " + t);
  let o, c, s = !1, i;
  if (typeof e == "object" && e != null) {
    if (r.sqrt || n)
      throw new Error("cannot specify opts in two arguments");
    const a = e;
    a.BITS && (o = a.BITS), a.sqrt && (c = a.sqrt), typeof a.isLE == "boolean" && (n = a.isLE), typeof a.modOnDecode == "boolean" && (s = a.modOnDecode), i = a.allowedLengths;
  } else
    typeof e == "number" && (o = e), r.sqrt && (c = r.sqrt);
  const { nBitLength: f, nByteLength: l } = _r(t, o);
  if (l > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let d;
  const h = Object.freeze({
    ORDER: t,
    isLE: n,
    BITS: f,
    BYTES: l,
    MASK: Pt(f),
    ZERO: et,
    ONE: P,
    allowedLengths: i,
    create: (a) => $(a, t),
    isValid: (a) => {
      if (typeof a != "bigint")
        throw new Error("invalid field element: expected bigint, got " + typeof a);
      return et <= a && a < t;
    },
    is0: (a) => a === et,
    // is valid and invertible
    isValidNot0: (a) => !h.is0(a) && h.isValid(a),
    isOdd: (a) => (a & P) === P,
    neg: (a) => $(-a, t),
    eql: (a, u) => a === u,
    sqr: (a) => $(a * a, t),
    add: (a, u) => $(a + u, t),
    sub: (a, u) => $(a - u, t),
    mul: (a, u) => $(a * u, t),
    pow: (a, u) => Br(h, a, u),
    div: (a, u) => $(a * Ce(u, t), t),
    // Same as above, but doesn't normalize
    sqrN: (a) => a * a,
    addN: (a, u) => a + u,
    subN: (a, u) => a - u,
    mulN: (a, u) => a * u,
    inv: (a) => Ce(a, t),
    sqrt: c || ((a) => (d || (d = gr(t)), d(h, a))),
    toBytes: (a) => n ? Yt(a, l) : Ie(a, l),
    fromBytes: (a, u = !0) => {
      if (i) {
        if (!i.includes(a.length) || a.length > l)
          throw new Error("Field.fromBytes: expected " + i + " bytes, got " + a.length);
        const b = new Uint8Array(l);
        b.set(a, n ? 0 : b.length - a.length), a = b;
      }
      if (a.length !== l)
        throw new Error("Field.fromBytes: expected " + l + " bytes, got " + a.length);
      let g = n ? Xt(a) : fe(a);
      if (s && (g = $(g, t)), !u && !h.isValid(g))
        throw new Error("invalid field element: outside of range 0..ORDER");
      return g;
    },
    // TODO: we don't need it here, move out to separate fn
    invertBatch: (a) => _n(h, a),
    // We can't move this out because Fp6, Fp12 implement it
    // and it's unclear what to return in there.
    cmov: (a, u, g) => g ? u : a
  });
  return Object.freeze(h);
}
function An(t) {
  if (typeof t != "bigint")
    throw new Error("field order must be bigint");
  const e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function vn(t) {
  const e = An(t);
  return e + Math.ceil(e / 2);
}
function Ar(t, e, n = !1) {
  const r = t.length, o = An(e), c = vn(e);
  if (r < 16 || r < c || r > 1024)
    throw new Error("expected " + c + "-1024 bytes of input, got " + r);
  const s = n ? Xt(t) : fe(t), i = $(s, e - P) + P;
  return n ? Yt(i, o) : Ie(i, o);
}
const Gt = BigInt(0), qt = BigInt(1);
function ie(t, e) {
  const n = e.negate();
  return t ? n : e;
}
function Ut(t, e) {
  const n = _n(t.Fp, e.map((r) => r.Z));
  return e.map((r, o) => t.fromAffine(r.toAffine(n[o])));
}
function Sn(t, e) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > e)
    throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
}
function ue(t, e) {
  Sn(t, e);
  const n = Math.ceil(e / t) + 1, r = 2 ** (t - 1), o = 2 ** t, c = Pt(t), s = BigInt(t);
  return { windows: n, windowSize: r, mask: c, maxNumber: o, shiftBy: s };
}
function Xe(t, e, n) {
  const { windowSize: r, mask: o, maxNumber: c, shiftBy: s } = n;
  let i = Number(t & o), f = t >> s;
  i > r && (i -= c, f += qt);
  const l = e * r, d = l + Math.abs(i) - 1, h = i === 0, a = i < 0, u = e % 2 !== 0;
  return { nextN: f, offset: d, isZero: h, isNeg: a, isNegF: u, offsetF: l };
}
function vr(t, e) {
  if (!Array.isArray(t))
    throw new Error("array expected");
  t.forEach((n, r) => {
    if (!(n instanceof e))
      throw new Error("invalid point at index " + r);
  });
}
function Sr(t, e) {
  if (!Array.isArray(t))
    throw new Error("array of scalars expected");
  t.forEach((n, r) => {
    if (!e.isValid(n))
      throw new Error("invalid scalar at index " + r);
  });
}
const he = /* @__PURE__ */ new WeakMap(), In = /* @__PURE__ */ new WeakMap();
function de(t) {
  return In.get(t) || 1;
}
function Ye(t) {
  if (t !== Gt)
    throw new Error("invalid wNAF");
}
class On {
  // Parametrized with a given Point class (not individual point)
  constructor(e, n) {
    this.BASE = e.BASE, this.ZERO = e.ZERO, this.Fn = e.Fn, this.bits = n;
  }
  // non-const time multiplication ladder
  _unsafeLadder(e, n, r = this.ZERO) {
    let o = e;
    for (; n > Gt; )
      n & qt && (r = r.add(o)), o = o.double(), n >>= qt;
    return r;
  }
  /**
   * Creates a wNAF precomputation window. Used for caching.
   * Default window size is set by `utils.precompute()` and is equal to 8.
   * Number of precomputed points depends on the curve size:
   * 2^(ùëä‚àí1) * (Math.ceil(ùëõ / ùëä) + 1), where:
   * - ùëä is the window size
   * - ùëõ is the bitlength of the curve order.
   * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
   * @param point Point instance
   * @param W window size
   * @returns precomputed point tables flattened to a single array
   */
  precomputeWindow(e, n) {
    const { windows: r, windowSize: o } = ue(n, this.bits), c = [];
    let s = e, i = s;
    for (let f = 0; f < r; f++) {
      i = s, c.push(i);
      for (let l = 1; l < o; l++)
        i = i.add(s), c.push(i);
      s = i.double();
    }
    return c;
  }
  /**
   * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
   * More compact implementation:
   * https://github.com/paulmillr/noble-secp256k1/blob/47cb1669b6e506ad66b35fe7d76132ae97465da2/index.ts#L502-L541
   * @returns real and fake (for const-time) points
   */
  wNAF(e, n, r) {
    if (!this.Fn.isValid(r))
      throw new Error("invalid scalar");
    let o = this.ZERO, c = this.BASE;
    const s = ue(e, this.bits);
    for (let i = 0; i < s.windows; i++) {
      const { nextN: f, offset: l, isZero: d, isNeg: h, isNegF: a, offsetF: u } = Xe(r, i, s);
      r = f, d ? c = c.add(ie(a, n[u])) : o = o.add(ie(h, n[l]));
    }
    return Ye(r), { p: o, f: c };
  }
  /**
   * Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
   * @param acc accumulator point to add result of multiplication
   * @returns point
   */
  wNAFUnsafe(e, n, r, o = this.ZERO) {
    const c = ue(e, this.bits);
    for (let s = 0; s < c.windows && r !== Gt; s++) {
      const { nextN: i, offset: f, isZero: l, isNeg: d } = Xe(r, s, c);
      if (r = i, !l) {
        const h = n[f];
        o = o.add(d ? h.negate() : h);
      }
    }
    return Ye(r), o;
  }
  getPrecomputes(e, n, r) {
    let o = he.get(n);
    return o || (o = this.precomputeWindow(n, e), e !== 1 && (typeof r == "function" && (o = r(o)), he.set(n, o))), o;
  }
  cached(e, n, r) {
    const o = de(e);
    return this.wNAF(o, this.getPrecomputes(o, e, r), n);
  }
  unsafe(e, n, r, o) {
    const c = de(e);
    return c === 1 ? this._unsafeLadder(e, n, o) : this.wNAFUnsafe(c, this.getPrecomputes(c, e, r), n, o);
  }
  // We calculate precomputes for elliptic curve point multiplication
  // using windowed method. This specifies window size and
  // stores precomputed values. Usually only base point would be precomputed.
  createCache(e, n) {
    Sn(n, this.bits), In.set(e, n), he.delete(e);
  }
  hasCache(e) {
    return de(e) !== 1;
  }
}
function Ir(t, e, n, r) {
  let o = e, c = t.ZERO, s = t.ZERO;
  for (; n > Gt || r > Gt; )
    n & qt && (c = c.add(o)), r & qt && (s = s.add(o)), o = o.double(), n >>= qt, r >>= qt;
  return { p1: c, p2: s };
}
function Le(t, e, n, r) {
  vr(n, t), Sr(r, e);
  const o = n.length, c = r.length;
  if (o !== c)
    throw new Error("arrays of points and scalars must have equal length");
  const s = t.ZERO, i = wn(BigInt(o));
  let f = 1;
  i > 12 ? f = i - 3 : i > 4 ? f = i - 2 : i > 0 && (f = 2);
  const l = Pt(f), d = new Array(Number(l) + 1).fill(s), h = Math.floor((e.BITS - 1) / f) * f;
  let a = s;
  for (let u = h; u >= 0; u -= f) {
    d.fill(s);
    for (let b = 0; b < c; b++) {
      const m = r[b], B = Number(m >> BigInt(u) & l);
      d[B] = d[B].add(n[b]);
    }
    let g = s;
    for (let b = d.length - 1, m = s; b > 0; b--)
      m = m.add(d[b]), g = g.add(m);
    if (a = a.add(g), u !== 0)
      for (let b = 0; b < f; b++)
        a = a.double();
  }
  return a;
}
function Ge(t, e) {
  if (e) {
    if (e.ORDER !== t)
      throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
    return Er(e), e;
  } else
    return Ot(t);
}
function Ln(t, e, n = {}) {
  if (!e || typeof e != "object")
    throw new Error(`expected valid ${t} CURVE object`);
  for (const i of ["p", "n", "h"]) {
    const f = e[i];
    if (!(typeof f == "bigint" && f > Gt))
      throw new Error(`CURVE.${i} must be positive bigint`);
  }
  const r = Ge(e.p, n.Fp), o = Ge(e.n, n.Fn), s = ["Gx", "Gy", "a", t === "weierstrass" ? "b" : "d"];
  for (const i of s)
    if (!r.isValid(e[i]))
      throw new Error(`CURVE.${i} must be valid field element of CURVE.Fp`);
  return { Fp: r, Fn: o };
}
const ft = BigInt(0), W = BigInt(1), be = BigInt(2), Or = BigInt(8);
function Lr(t, e, n, r) {
  const o = t.sqr(n), c = t.sqr(r), s = t.add(t.mul(e.a, o), c), i = t.add(t.ONE, t.mul(e.d, t.mul(o, c)));
  return t.eql(s, i);
}
function Hr(t, e = {}) {
  const { Fp: n, Fn: r } = Ln("edwards", t, e), { h: o, n: c } = t;
  Qt(e, {}, { uvRatio: "function" });
  const s = be << BigInt(r.BYTES * 8) - W, i = (b) => n.create(b), f = e.uvRatio || ((b, m) => {
    try {
      return { isValid: !0, value: n.sqrt(n.div(b, m)) };
    } catch {
      return { isValid: !1, value: ft };
    }
  });
  if (!Lr(n, t, t.Gx, t.Gy))
    throw new Error("bad curve params: generator point");
  function l(b, m, B = !1) {
    const H = B ? W : ft;
    return Mt("coordinate " + b, m, H, s), m;
  }
  function d(b) {
    if (!(b instanceof u))
      throw new Error("ExtendedPoint expected");
  }
  const h = oe((b, m) => {
    const { X: B, Y: H, Z: O } = b, U = b.is0();
    m == null && (m = U ? Or : n.inv(O));
    const M = i(B * m), S = i(H * m), D = n.mul(O, m);
    if (U)
      return { x: ft, y: W };
    if (D !== W)
      throw new Error("invZ was invalid");
    return { x: M, y: S };
  }), a = oe((b) => {
    const { a: m, d: B } = t;
    if (b.is0())
      throw new Error("bad point: ZERO");
    const { X: H, Y: O, Z: U, T: M } = b, S = i(H * H), D = i(O * O), Z = i(U * U), R = i(Z * Z), x = i(S * m), w = i(Z * i(x + D)), E = i(R + i(B * i(S * D)));
    if (w !== E)
      throw new Error("bad point: equation left != right (1)");
    const _ = i(H * O), L = i(U * M);
    if (_ !== L)
      throw new Error("bad point: equation left != right (2)");
    return !0;
  });
  class u {
    constructor(m, B, H, O) {
      this.X = l("x", m), this.Y = l("y", B), this.Z = l("z", H, !0), this.T = l("t", O), Object.freeze(this);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    // TODO: remove
    get ex() {
      return this.X;
    }
    get ey() {
      return this.Y;
    }
    get ez() {
      return this.Z;
    }
    get et() {
      return this.T;
    }
    static normalizeZ(m) {
      return Ut(u, m);
    }
    static msm(m, B) {
      return Le(u, r, m, B);
    }
    _setWindowSize(m) {
      this.precompute(m);
    }
    static fromAffine(m) {
      if (m instanceof u)
        throw new Error("extended point not allowed");
      const { x: B, y: H } = m || {};
      return l("x", B), l("y", H), new u(B, H, W, i(B * H));
    }
    precompute(m = 8, B = !0) {
      return g.createCache(this, m), B || this.multiply(be), this;
    }
    // Useful in fromAffine() - not for fromBytes(), which always created valid points.
    assertValidity() {
      a(this);
    }
    // Compare one point to another.
    equals(m) {
      d(m);
      const { X: B, Y: H, Z: O } = this, { X: U, Y: M, Z: S } = m, D = i(B * S), Z = i(U * O), R = i(H * S), x = i(M * O);
      return D === Z && R === x;
    }
    is0() {
      return this.equals(u.ZERO);
    }
    negate() {
      return new u(i(-this.X), this.Y, this.Z, i(-this.T));
    }
    // Fast algo for doubling Extended Point.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#doubling-dbl-2008-hwcd
    // Cost: 4M + 4S + 1*a + 6add + 1*2.
    double() {
      const { a: m } = t, { X: B, Y: H, Z: O } = this, U = i(B * B), M = i(H * H), S = i(be * i(O * O)), D = i(m * U), Z = B + H, R = i(i(Z * Z) - U - M), x = D + M, w = x - S, E = D - M, _ = i(R * w), L = i(x * E), k = i(R * E), p = i(w * x);
      return new u(_, L, p, k);
    }
    // Fast algo for adding 2 Extended Points.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
    // Cost: 9M + 1*a + 1*d + 7add.
    add(m) {
      d(m);
      const { a: B, d: H } = t, { X: O, Y: U, Z: M, T: S } = this, { X: D, Y: Z, Z: R, T: x } = m, w = i(O * D), E = i(U * Z), _ = i(S * H * x), L = i(M * R), k = i((O + U) * (D + Z) - w - E), p = L - _, y = L + _, A = i(E - B * w), I = i(k * p), q = i(y * A), N = i(k * A), T = i(p * y);
      return new u(I, q, T, N);
    }
    subtract(m) {
      return this.add(m.negate());
    }
    // Constant-time multiplication.
    multiply(m) {
      const B = m;
      Mt("scalar", B, W, c);
      const { p: H, f: O } = g.cached(this, B, (U) => Ut(u, U));
      return Ut(u, [H, O])[0];
    }
    // Non-constant-time multiplication. Uses double-and-add algorithm.
    // It's faster, but should only be used when you don't care about
    // an exposed private key e.g. sig verification.
    // Does NOT allow scalars higher than CURVE.n.
    // Accepts optional accumulator to merge with multiply (important for sparse scalars)
    multiplyUnsafe(m, B = u.ZERO) {
      const H = m;
      return Mt("scalar", H, ft, c), H === ft ? u.ZERO : this.is0() || H === W ? this : g.unsafe(this, H, (O) => Ut(u, O), B);
    }
    // Checks if point is of small order.
    // If you add something to small order point, you will have "dirty"
    // point with torsion component.
    // Multiplies point by cofactor and checks if the result is 0.
    isSmallOrder() {
      return this.multiplyUnsafe(o).is0();
    }
    // Multiplies point by curve order and checks if the result is 0.
    // Returns `false` is the point is dirty.
    isTorsionFree() {
      return g.unsafe(this, c).is0();
    }
    // Converts Extended point to default (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    toAffine(m) {
      return h(this, m);
    }
    clearCofactor() {
      return o === W ? this : this.multiplyUnsafe(o);
    }
    static fromBytes(m, B = !1) {
      return Q(m), u.fromHex(m, B);
    }
    // Converts hash string or Uint8Array to Point.
    // Uses algo from RFC8032 5.1.3.
    static fromHex(m, B = !1) {
      const { d: H, a: O } = t, U = n.BYTES;
      m = G("pointHex", m, U), Tt("zip215", B);
      const M = m.slice(), S = m[U - 1];
      M[U - 1] = S & -129;
      const D = Xt(M), Z = B ? s : n.ORDER;
      Mt("pointHex.y", D, ft, Z);
      const R = i(D * D), x = i(R - W), w = i(H * R - O);
      let { isValid: E, value: _ } = f(x, w);
      if (!E)
        throw new Error("Point.fromHex: invalid y coordinate");
      const L = (_ & W) === W, k = (S & 128) !== 0;
      if (!B && _ === ft && k)
        throw new Error("Point.fromHex: x=0 and x_0=1");
      return k !== L && (_ = i(-_)), u.fromAffine({ x: _, y: D });
    }
    toBytes() {
      const { x: m, y: B } = this.toAffine(), H = Yt(B, n.BYTES);
      return H[H.length - 1] |= m & W ? 128 : 0, H;
    }
    /** @deprecated use `toBytes` */
    toRawBytes() {
      return this.toBytes();
    }
    toHex() {
      return St(this.toBytes());
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
  }
  u.BASE = new u(t.Gx, t.Gy, W, i(t.Gx * t.Gy)), u.ZERO = new u(ft, W, W, ft), u.Fp = n, u.Fn = r;
  const g = new On(u, r.BYTES * 8);
  return u;
}
class Rr {
  constructor(e) {
    this.ep = e;
  }
  // Static methods that must be implemented by subclasses
  static fromBytes(e) {
    throw new Error("fromBytes must be implemented by subclass");
  }
  static fromHex(e) {
    throw new Error("fromHex must be implemented by subclass");
  }
  get x() {
    return this.toAffine().x;
  }
  get y() {
    return this.toAffine().y;
  }
  // Common implementations
  clearCofactor() {
    return this;
  }
  assertValidity() {
    this.ep.assertValidity();
  }
  toAffine(e) {
    return this.ep.toAffine(e);
  }
  /** @deprecated use `toBytes` */
  toRawBytes() {
    return this.toBytes();
  }
  toHex() {
    return St(this.toBytes());
  }
  toString() {
    return this.toHex();
  }
  isTorsionFree() {
    return !0;
  }
  isSmallOrder() {
    return !1;
  }
  add(e) {
    return this.assertSame(e), this.init(this.ep.add(e.ep));
  }
  subtract(e) {
    return this.assertSame(e), this.init(this.ep.subtract(e.ep));
  }
  multiply(e) {
    return this.init(this.ep.multiply(e));
  }
  multiplyUnsafe(e) {
    return this.init(this.ep.multiplyUnsafe(e));
  }
  double() {
    return this.init(this.ep.double());
  }
  negate() {
    return this.init(this.ep.negate());
  }
  precompute(e, n) {
    return this.init(this.ep.precompute(e, n));
  }
}
function kr(t, e, n) {
  if (typeof e != "function")
    throw new Error('"hash" function param is required');
  Qt(n, {}, {
    adjustScalarBytes: "function",
    randomBytes: "function",
    domain: "function",
    prehash: "function",
    mapToCurve: "function"
  });
  const { prehash: r } = n, { BASE: o, Fp: c, Fn: s } = t, i = s.ORDER, f = n.randomBytes || on, l = n.adjustScalarBytes || ((w) => w), d = n.domain || ((w, E, _) => {
    if (Tt("phflag", _), E.length || _)
      throw new Error("Contexts/pre-hash are not supported");
    return w;
  });
  function h(w) {
    return s.create(w);
  }
  function a(w) {
    return h(Xt(w));
  }
  function u(w) {
    const E = c.BYTES;
    w = G("private key", w, E);
    const _ = G("hashed private key", e(w), 2 * E), L = l(_.slice(0, E)), k = _.slice(E, 2 * E), p = a(L);
    return { head: L, prefix: k, scalar: p };
  }
  function g(w) {
    const { head: E, prefix: _, scalar: L } = u(w), k = o.multiply(L), p = k.toBytes();
    return { head: E, prefix: _, scalar: L, point: k, pointBytes: p };
  }
  function b(w) {
    return g(w).pointBytes;
  }
  function m(w = Uint8Array.of(), ...E) {
    const _ = ht(...E);
    return a(e(d(_, G("context", w), !!r)));
  }
  function B(w, E, _ = {}) {
    w = G("message", w), r && (w = r(w));
    const { prefix: L, scalar: k, pointBytes: p } = g(E), y = m(_.context, L, w), A = o.multiply(y).toBytes(), I = m(_.context, A, p, w), q = h(y + I * k);
    Mt("signature.s", q, ft, i);
    const N = c.BYTES, T = ht(A, Yt(q, N));
    return G("result", T, N * 2);
  }
  const H = { zip215: !0 };
  function O(w, E, _, L = H) {
    const { context: k, zip215: p } = L, y = c.BYTES;
    w = G("signature", w, 2 * y), E = G("message", E), _ = G("publicKey", _, y), p !== void 0 && Tt("zip215", p), r && (E = r(E));
    const A = Xt(w.slice(y, 2 * y));
    let I, q, N;
    try {
      I = t.fromHex(_, p), q = t.fromHex(w.slice(0, y), p), N = o.multiplyUnsafe(A);
    } catch {
      return !1;
    }
    if (!p && I.isSmallOrder())
      return !1;
    const T = m(k, q.toBytes(), I.toBytes(), E);
    return q.add(I.multiplyUnsafe(T)).subtract(N).clearCofactor().is0();
  }
  o.precompute(8);
  const U = c.BYTES, M = {
    secret: U,
    public: U,
    signature: 2 * U,
    seed: U
  };
  function S(w = f(M.seed)) {
    return w;
  }
  const D = {
    getExtendedPublicKey: g,
    /** ed25519 priv keys are uniform 32b. No need to check for modulo bias, like in secp256k1. */
    randomSecretKey: S,
    isValidSecretKey: R,
    isValidPublicKey: x,
    randomPrivateKey: S,
    /**
     * Converts ed public key to x public key. Uses formula:
     * - ed25519:
     *   - `(u, v) = ((1+y)/(1-y), sqrt(-486664)*u/x)`
     *   - `(x, y) = (sqrt(-486664)*u/v, (u-1)/(u+1))`
     * - ed448:
     *   - `(u, v) = ((y-1)/(y+1), sqrt(156324)*u/x)`
     *   - `(x, y) = (sqrt(156324)*u/v, (1+u)/(1-u))`
     *
     * There is NO `fromMontgomery`:
     * - There are 2 valid ed25519 points for every x25519, with flipped coordinate
     * - Sometimes there are 0 valid ed25519 points, because x25519 *additionally*
     *   accepts inputs on the quadratic twist, which can't be moved to ed25519
     */
    toMontgomery(w) {
      const { y: E } = t.fromBytes(w), _ = U === 32;
      if (!_ && U !== 57)
        throw new Error("only defined for 25519 and 448");
      const L = _ ? c.div(W + E, W - E) : c.div(E - W, E + W);
      return c.toBytes(L);
    },
    toMontgomeryPriv(w) {
      Q(w, U);
      const E = e(w.subarray(0, U));
      return l(E).subarray(0, U);
    },
    /**
     * We're doing scalar multiplication (used in getPublicKey etc) with precomputed BASE_POINT
     * values. This slows down first getPublicKey() by milliseconds (see Speed section),
     * but allows to speed-up subsequent getPublicKey() calls up to 20x.
     * @param windowSize 2, 4, 8, 16
     */
    precompute(w = 8, E = t.BASE) {
      return E.precompute(w, !1);
    }
  };
  function Z(w) {
    const E = D.randomSecretKey(w);
    return { secretKey: E, publicKey: b(E) };
  }
  function R(w) {
    try {
      return !!s.fromBytes(w, !1);
    } catch {
      return !1;
    }
  }
  function x(w, E) {
    try {
      return !!t.fromBytes(w, E);
    } catch {
      return !1;
    }
  }
  return Object.freeze({
    keygen: Z,
    getPublicKey: b,
    sign: B,
    verify: O,
    utils: D,
    Point: t,
    info: { type: "edwards", lengths: M }
  });
}
function qr(t) {
  const e = {
    a: t.a,
    d: t.d,
    p: t.Fp.ORDER,
    n: t.n,
    h: t.h,
    Gx: t.Gx,
    Gy: t.Gy
  }, n = t.Fp, r = Ot(e.n, t.nBitLength, !0), o = { Fp: n, Fn: r, uvRatio: t.uvRatio }, c = {
    randomBytes: t.randomBytes,
    adjustScalarBytes: t.adjustScalarBytes,
    domain: t.domain,
    prehash: t.prehash,
    mapToCurve: t.mapToCurve
  };
  return { CURVE: e, curveOpts: o, hash: t.hash, eddsaOpts: c };
}
function Ur(t, e) {
  return Object.assign({}, e, { ExtendedPoint: e.Point, CURVE: t });
}
function Nr(t) {
  const { CURVE: e, curveOpts: n, hash: r, eddsaOpts: o } = qr(t), c = Hr(e, n), s = kr(c, r, o);
  return Ur(t, s);
}
const ms = Ee("HashToScalar-");
const ys = BigInt(0), gs = BigInt(1), ps = BigInt(2);
const Tr = BigInt(0), dt = BigInt(1), je = BigInt(2), Es = BigInt(3), Zr = BigInt(5), Dr = BigInt(8), Jt = {
  p: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"),
  n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),
  h: Dr,
  a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),
  d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),
  Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),
  Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")
};
function Mr(t) {
  const e = BigInt(10), n = BigInt(20), r = BigInt(40), o = BigInt(80), c = Jt.p, i = t * t % c * t % c, f = j(i, je, c) * i % c, l = j(f, dt, c) * t % c, d = j(l, Zr, c) * l % c, h = j(d, e, c) * d % c, a = j(h, n, c) * h % c, u = j(a, r, c) * a % c, g = j(u, o, c) * u % c, b = j(g, o, c) * u % c, m = j(b, e, c) * d % c;
  return { pow_p_5_8: j(m, je, c) * t % c, b2: i };
}
function Cr(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
const xe = /* @__PURE__ */ BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
function He(t, e) {
  const n = Jt.p, r = $(e * e * e, n), o = $(r * r * e, n), c = Mr(t * o).pow_p_5_8;
  let s = $(t * r * c, n);
  const i = $(e * s * s, n), f = s, l = $(s * xe, n), d = i === t, h = i === $(-t, n), a = i === $(-t * xe, n);
  return d && (s = f), (h || a) && (s = l), vt(s, n) && (s = $(-s, n)), { isValid: d || h, value: s };
}
const Rt = Ot(Jt.p, { isLE: !0 }), Vr = Ot(Jt.n, { isLE: !0 }), Xr = {
  ...Jt,
  Fp: Rt,
  hash: dn,
  adjustScalarBytes: Cr,
  // dom2
  // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
  // Constant-time, u/‚àöv
  uvRatio: He
}, it = Nr(Xr);
const me = xe, Yr = /* @__PURE__ */ BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235"), Gr = /* @__PURE__ */ BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578"), jr = /* @__PURE__ */ BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838"), $r = /* @__PURE__ */ BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952"), $e = (t) => He(dt, t), zr = /* @__PURE__ */ BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), ye = (t) => it.CURVE.Fp.create(Xt(t) & zr);
function ze(t) {
  const { d: e } = it.CURVE, n = it.CURVE.Fp.ORDER, r = it.CURVE.Fp.create, o = r(me * t * t), c = r((o + dt) * jr);
  let s = BigInt(-1);
  const i = r((s - e * o) * r(o + e));
  let { isValid: f, value: l } = He(c, i), d = r(l * t);
  vt(d, n) || (d = r(-d)), f || (l = d), f || (s = o);
  const h = r(s * (o - dt) * $r - i), a = l * l, u = r((l + l) * i), g = r(h * Yr), b = r(dt - a), m = r(dt + a);
  return new it.Point(r(u * m), r(b * g), r(g * m), r(u * b));
}
function Kr(t) {
  Q(t, 64);
  const e = ye(t.subarray(0, 32)), n = ze(e), r = ye(t.subarray(32, 64)), o = ze(r);
  return new F(n.add(o));
}
class F extends Rr {
  constructor(e) {
    super(e);
  }
  static fromAffine(e) {
    return new F(it.Point.fromAffine(e));
  }
  assertSame(e) {
    if (!(e instanceof F))
      throw new Error("RistrettoPoint expected");
  }
  init(e) {
    return new F(e);
  }
  /** @deprecated use `import { ristretto255_hasher } from '@noble/curves/ed25519.js';` */
  static hashToCurve(e) {
    return Kr(G("ristrettoHash", e, 64));
  }
  static fromBytes(e) {
    Q(e, 32);
    const { a: n, d: r } = it.CURVE, o = Rt.ORDER, c = Rt.create, s = ye(e);
    if (!hr(Yt(s, 32), e) || vt(s, o))
      throw new Error("invalid ristretto255 encoding 1");
    const i = c(s * s), f = c(dt + n * i), l = c(dt - n * i), d = c(f * f), h = c(l * l), a = c(n * r * d - h), { isValid: u, value: g } = $e(c(a * h)), b = c(g * l), m = c(g * b * a);
    let B = c((s + s) * b);
    vt(B, o) && (B = c(-B));
    const H = c(f * m), O = c(B * H);
    if (!u || vt(O, o) || H === Tr)
      throw new Error("invalid ristretto255 encoding 2");
    return new F(new it.Point(B, H, dt, O));
  }
  /**
   * Converts ristretto-encoded string to ristretto point.
   * Described in [RFC9496](https://www.rfc-editor.org/rfc/rfc9496#name-decode).
   * @param hex Ristretto-encoded 32 bytes. Not every 32-byte string is valid ristretto encoding
   */
  static fromHex(e) {
    return F.fromBytes(G("ristrettoHex", e, 32));
  }
  static msm(e, n) {
    return Le(F, it.Point.Fn, e, n);
  }
  /**
   * Encodes ristretto point to Uint8Array.
   * Described in [RFC9496](https://www.rfc-editor.org/rfc/rfc9496#name-encode).
   */
  toBytes() {
    let { X: e, Y: n, Z: r, T: o } = this.ep;
    const c = Rt.ORDER, s = Rt.create, i = s(s(r + n) * s(r - n)), f = s(e * n), l = s(f * f), { value: d } = $e(s(i * l)), h = s(d * i), a = s(d * f), u = s(h * a * o);
    let g;
    if (vt(o * u, c)) {
      let m = s(n * me), B = s(e * me);
      e = m, n = B, g = s(h * Gr);
    } else
      g = a;
    vt(e * u, c) && (n = s(-n));
    let b = s((r - n) * g);
    return vt(b, c) && (b = s(-b)), Yt(b, 32);
  }
  /**
   * Compares two Ristretto points.
   * Described in [RFC9496](https://www.rfc-editor.org/rfc/rfc9496#name-equals).
   */
  equals(e) {
    this.assertSame(e);
    const { X: n, Y: r } = this.ep, { X: o, Y: c } = e.ep, s = Rt.create, i = s(n * c) === s(r * o), f = s(r * c) === s(n * o);
    return i || f;
  }
  is0() {
    return this.equals(F.ZERO);
  }
}
F.BASE = new F(it.Point.BASE);
F.ZERO = new F(it.Point.ZERO);
F.Fp = Rt;
F.Fn = Vr;
const Bs = F, Wr = BigInt(0), zt = BigInt(1), Pr = BigInt(2), Qr = BigInt(7), Jr = BigInt(256), Fr = BigInt(113), Hn = [], Rn = [], kn = [];
for (let t = 0, e = zt, n = 1, r = 0; t < 24; t++) {
  [n, r] = [r, (2 * n + 3 * r) % 5], Hn.push(2 * (5 * r + n)), Rn.push((t + 1) * (t + 2) / 2 % 64);
  let o = Wr;
  for (let c = 0; c < 7; c++)
    e = (e << zt ^ (e >> Qr) * Fr) % Jr, e & Pr && (o ^= zt << (zt << /* @__PURE__ */ BigInt(c)) - zt);
  kn.push(o);
}
const qn = an(kn, !0), ts = qn[0], es = qn[1], Ke = (t, e, n) => n > 32 ? zn(t, e, n) : jn(t, e, n), We = (t, e, n) => n > 32 ? Kn(t, e, n) : $n(t, e, n);
function _s(t, e = 24) {
  const n = new Uint32Array(10);
  for (let r = 24 - e; r < 24; r++) {
    for (let s = 0; s < 10; s++)
      n[s] = t[s] ^ t[s + 10] ^ t[s + 20] ^ t[s + 30] ^ t[s + 40];
    for (let s = 0; s < 10; s += 2) {
      const i = (s + 8) % 10, f = (s + 2) % 10, l = n[f], d = n[f + 1], h = Ke(l, d, 1) ^ n[i], a = We(l, d, 1) ^ n[i + 1];
      for (let u = 0; u < 50; u += 10)
        t[s + u] ^= h, t[s + u + 1] ^= a;
    }
    let o = t[2], c = t[3];
    for (let s = 0; s < 24; s++) {
      const i = Rn[s], f = Ke(o, c, i), l = We(o, c, i), d = Hn[s];
      o = t[d], c = t[d + 1], t[d] = f, t[d + 1] = l;
    }
    for (let s = 0; s < 50; s += 10) {
      for (let i = 0; i < 10; i++)
        n[i] = t[s + i];
      for (let i = 0; i < 10; i++)
        t[s + i] ^= ~n[(i + 2) % 10] & n[(i + 4) % 10];
    }
    t[0] ^= ts[r], t[1] ^= es[r];
  }
  st(n);
}
const As = dn, vs = ce;
const Pe = (t, e) => (t + (t >= 0 ? e : -e) / Un) / e;
function ns(t, e, n) {
  const [[r, o], [c, s]] = e, i = Pe(s * t, n), f = Pe(-o * t, n);
  let l = t - i * r - f * c, d = -i * o - f * s;
  const h = l < bt, a = d < bt;
  h && (l = -l), a && (d = -d);
  const u = Pt(Math.ceil(wn(n) / 2)) + Ct;
  if (l < bt || l >= u || d < bt || d >= u)
    throw new Error("splitScalar (endomorphism): failed, k=" + t);
  return { k1neg: h, k1: l, k2neg: a, k2: d };
}
function Qe(t) {
  t.lowS !== void 0 && Tt("lowS", t.lowS), t.prehash !== void 0 && Tt("prehash", t.prehash);
}
class rs extends Error {
  constructor(e = "") {
    super(e);
  }
}
const ut = {
  // asn.1 DER encoding utils
  Err: rs,
  // Basic building block is TLV (Tag-Length-Value)
  _tlv: {
    encode: (t, e) => {
      const { Err: n } = ut;
      if (t < 0 || t > 256)
        throw new n("tlv.encode: wrong tag");
      if (e.length & 1)
        throw new n("tlv.encode: unpadded data");
      const r = e.length / 2, o = te(r);
      if (o.length / 2 & 128)
        throw new n("tlv.encode: long form length too big");
      const c = r > 127 ? te(o.length / 2 | 128) : "";
      return te(t) + c + o + e;
    },
    // v - value, l - left bytes (unparsed)
    decode(t, e) {
      const { Err: n } = ut;
      let r = 0;
      if (t < 0 || t > 256)
        throw new n("tlv.encode: wrong tag");
      if (e.length < 2 || e[r++] !== t)
        throw new n("tlv.decode: wrong tlv");
      const o = e[r++], c = !!(o & 128);
      let s = 0;
      if (!c)
        s = o;
      else {
        const f = o & 127;
        if (!f)
          throw new n("tlv.decode(long): indefinite length not supported");
        if (f > 4)
          throw new n("tlv.decode(long): byte length is too big");
        const l = e.subarray(r, r + f);
        if (l.length !== f)
          throw new n("tlv.decode: length bytes not complete");
        if (l[0] === 0)
          throw new n("tlv.decode(long): zero leftmost byte");
        for (const d of l)
          s = s << 8 | d;
        if (r += f, s < 128)
          throw new n("tlv.decode(long): not minimal encoding");
      }
      const i = e.subarray(r, r + s);
      if (i.length !== s)
        throw new n("tlv.decode: wrong value length");
      return { v: i, l: e.subarray(r + s) };
    }
  },
  // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
  // since we always use positive integers here. It must always be empty:
  // - add zero byte if exists
  // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
  _int: {
    encode(t) {
      const { Err: e } = ut;
      if (t < bt)
        throw new e("integer: negative integers are not allowed");
      let n = te(t);
      if (Number.parseInt(n[0], 16) & 8 && (n = "00" + n), n.length & 1)
        throw new e("unexpected DER parsing assertion: unpadded hex");
      return n;
    },
    decode(t) {
      const { Err: e } = ut;
      if (t[0] & 128)
        throw new e("invalid signature integer: negative");
      if (t[0] === 0 && !(t[1] & 128))
        throw new e("invalid signature integer: unnecessary leading zero");
      return fe(t);
    }
  },
  toSig(t) {
    const { Err: e, _int: n, _tlv: r } = ut, o = G("signature", t), { v: c, l: s } = r.decode(48, o);
    if (s.length)
      throw new e("invalid signature: left bytes after parsing");
    const { v: i, l: f } = r.decode(2, c), { v: l, l: d } = r.decode(2, f);
    if (d.length)
      throw new e("invalid signature: left bytes after parsing");
    return { r: n.decode(i), s: n.decode(l) };
  },
  hexFromSig(t) {
    const { _tlv: e, _int: n } = ut, r = e.encode(2, n.encode(t.r)), o = e.encode(2, n.encode(t.s)), c = r + o;
    return e.encode(48, c);
  }
}, bt = BigInt(0), Ct = BigInt(1), Un = BigInt(2), ee = BigInt(3), ss = BigInt(4);
function os(t, e, n) {
  function r(o) {
    const c = t.sqr(o), s = t.mul(c, o);
    return t.add(t.add(s, t.mul(o, e)), n);
  }
  return r;
}
function Dt(t, e) {
  const { BYTES: n } = t;
  let r;
  if (typeof e == "bigint")
    r = e;
  else {
    let o = G("private key", e);
    try {
      r = t.fromBytes(o);
    } catch {
      throw new Error(`invalid private key: expected ui8a of size ${n}, got ${typeof e}`);
    }
  }
  if (!t.isValidNot0(r))
    throw new Error("invalid private key: out of range [1..N-1]");
  return r;
}
function is(t, e = {}) {
  const { Fp: n, Fn: r } = Ln("weierstrass", t, e), { h: o, n: c } = t;
  Qt(e, {}, {
    allowInfinityPoint: "boolean",
    clearCofactor: "function",
    isTorsionFree: "function",
    fromBytes: "function",
    toBytes: "function",
    endo: "object",
    wrapPrivateKey: "boolean"
  });
  const { endo: s } = e;
  if (s && (!n.is0(t.a) || typeof s.beta != "bigint" || !Array.isArray(s.basises)))
    throw new Error('invalid endo: expected "beta": bigint and "basises": array');
  function i() {
    if (!n.isOdd)
      throw new Error("compression is not supported: Field does not have .isOdd()");
  }
  function f(R, x, w) {
    const { x: E, y: _ } = x.toAffine(), L = n.toBytes(E);
    if (Tt("isCompressed", w), w) {
      i();
      const k = !n.isOdd(_);
      return ht(Nn(k), L);
    } else
      return ht(Uint8Array.of(4), L, n.toBytes(_));
  }
  function l(R) {
    Q(R);
    const x = n.BYTES, w = x + 1, E = 2 * x + 1, _ = R.length, L = R[0], k = R.subarray(1);
    if (_ === w && (L === 2 || L === 3)) {
      const p = n.fromBytes(k);
      if (!n.isValid(p))
        throw new Error("bad point: is not on curve, wrong x");
      const y = a(p);
      let A;
      try {
        A = n.sqrt(y);
      } catch (N) {
        const T = N instanceof Error ? ": " + N.message : "";
        throw new Error("bad point: is not on curve, sqrt error" + T);
      }
      i();
      const I = n.isOdd(A);
      return (L & 1) === 1 !== I && (A = n.neg(A)), { x: p, y: A };
    } else if (_ === E && L === 4) {
      const p = n.fromBytes(k.subarray(x * 0, x * 1)), y = n.fromBytes(k.subarray(x * 1, x * 2));
      if (!u(p, y))
        throw new Error("bad point: is not on curve");
      return { x: p, y };
    } else
      throw new Error(`bad point: got length ${_}, expected compressed=${w} or uncompressed=${E}`);
  }
  const d = e.toBytes || f, h = e.fromBytes || l, a = os(n, t.a, t.b);
  function u(R, x) {
    const w = n.sqr(x), E = a(R);
    return n.eql(w, E);
  }
  if (!u(t.Gx, t.Gy))
    throw new Error("bad curve params: generator point");
  const g = n.mul(n.pow(t.a, ee), ss), b = n.mul(n.sqr(t.b), BigInt(27));
  if (n.is0(n.add(g, b)))
    throw new Error("bad curve params: a or b");
  function m(R, x, w = !1) {
    if (!n.isValid(x) || w && n.is0(x))
      throw new Error(`bad point coordinate ${R}`);
    return x;
  }
  function B(R) {
    if (!(R instanceof S))
      throw new Error("ProjectivePoint expected");
  }
  function H(R) {
    if (!s || !s.basises)
      throw new Error("no endo");
    return ns(R, s.basises, r.ORDER);
  }
  const O = oe((R, x) => {
    const { X: w, Y: E, Z: _ } = R;
    if (n.eql(_, n.ONE))
      return { x: w, y: E };
    const L = R.is0();
    x == null && (x = L ? n.ONE : n.inv(_));
    const k = n.mul(w, x), p = n.mul(E, x), y = n.mul(_, x);
    if (L)
      return { x: n.ZERO, y: n.ZERO };
    if (!n.eql(y, n.ONE))
      throw new Error("invZ was invalid");
    return { x: k, y: p };
  }), U = oe((R) => {
    if (R.is0()) {
      if (e.allowInfinityPoint && !n.is0(R.Y))
        return;
      throw new Error("bad point: ZERO");
    }
    const { x, y: w } = R.toAffine();
    if (!n.isValid(x) || !n.isValid(w))
      throw new Error("bad point: x or y not field elements");
    if (!u(x, w))
      throw new Error("bad point: equation left != right");
    if (!R.isTorsionFree())
      throw new Error("bad point: not in prime-order subgroup");
    return !0;
  });
  function M(R, x, w, E, _) {
    return w = new S(n.mul(w.X, R), w.Y, w.Z), x = ie(E, x), w = ie(_, w), x.add(w);
  }
  class S {
    /** Does NOT validate if the point is valid. Use `.assertValidity()`. */
    constructor(x, w, E) {
      this.X = m("x", x), this.Y = m("y", w, !0), this.Z = m("z", E), Object.freeze(this);
    }
    /** Does NOT validate if the point is valid. Use `.assertValidity()`. */
    static fromAffine(x) {
      const { x: w, y: E } = x || {};
      if (!x || !n.isValid(w) || !n.isValid(E))
        throw new Error("invalid affine point");
      if (x instanceof S)
        throw new Error("projective point not allowed");
      return n.is0(w) && n.is0(E) ? S.ZERO : new S(w, E, n.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    // TODO: remove
    get px() {
      return this.X;
    }
    get py() {
      return this.X;
    }
    get pz() {
      return this.Z;
    }
    static normalizeZ(x) {
      return Ut(S, x);
    }
    static fromBytes(x) {
      return Q(x), S.fromHex(x);
    }
    /** Converts hash string or Uint8Array to Point. */
    static fromHex(x) {
      const w = S.fromAffine(h(G("pointHex", x)));
      return w.assertValidity(), w;
    }
    /** Multiplies generator point by privateKey. */
    static fromPrivateKey(x) {
      return S.BASE.multiply(Dt(r, x));
    }
    // TODO: remove
    static msm(x, w) {
      return Le(S, r, x, w);
    }
    _setWindowSize(x) {
      this.precompute(x);
    }
    /**
     *
     * @param windowSize
     * @param isLazy true will defer table computation until the first multiplication
     * @returns
     */
    precompute(x = 8, w = !0) {
      return Z.createCache(this, x), w || this.multiply(ee), this;
    }
    // TODO: return `this`
    /** A point on curve is valid if it conforms to equation. */
    assertValidity() {
      U(this);
    }
    hasEvenY() {
      const { y: x } = this.toAffine();
      if (!n.isOdd)
        throw new Error("Field doesn't support isOdd");
      return !n.isOdd(x);
    }
    /** Compare one point to another. */
    equals(x) {
      B(x);
      const { X: w, Y: E, Z: _ } = this, { X: L, Y: k, Z: p } = x, y = n.eql(n.mul(w, p), n.mul(L, _)), A = n.eql(n.mul(E, p), n.mul(k, _));
      return y && A;
    }
    /** Flips point to one corresponding to (x, -y) in Affine coordinates. */
    negate() {
      return new S(this.X, n.neg(this.Y), this.Z);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: x, b: w } = t, E = n.mul(w, ee), { X: _, Y: L, Z: k } = this;
      let p = n.ZERO, y = n.ZERO, A = n.ZERO, I = n.mul(_, _), q = n.mul(L, L), N = n.mul(k, k), T = n.mul(_, L);
      return T = n.add(T, T), A = n.mul(_, k), A = n.add(A, A), p = n.mul(x, A), y = n.mul(E, N), y = n.add(p, y), p = n.sub(q, y), y = n.add(q, y), y = n.mul(p, y), p = n.mul(T, p), A = n.mul(E, A), N = n.mul(x, N), T = n.sub(I, N), T = n.mul(x, T), T = n.add(T, A), A = n.add(I, I), I = n.add(A, I), I = n.add(I, N), I = n.mul(I, T), y = n.add(y, I), N = n.mul(L, k), N = n.add(N, N), I = n.mul(N, T), p = n.sub(p, I), A = n.mul(N, q), A = n.add(A, A), A = n.add(A, A), new S(p, y, A);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(x) {
      B(x);
      const { X: w, Y: E, Z: _ } = this, { X: L, Y: k, Z: p } = x;
      let y = n.ZERO, A = n.ZERO, I = n.ZERO;
      const q = t.a, N = n.mul(t.b, ee);
      let T = n.mul(w, L), Y = n.mul(E, k), X = n.mul(_, p), nt = n.add(w, E), V = n.add(L, k);
      nt = n.mul(nt, V), V = n.add(T, Y), nt = n.sub(nt, V), V = n.add(w, _);
      let z = n.add(L, p);
      return V = n.mul(V, z), z = n.add(T, X), V = n.sub(V, z), z = n.add(E, _), y = n.add(k, p), z = n.mul(z, y), y = n.add(Y, X), z = n.sub(z, y), I = n.mul(q, V), y = n.mul(N, X), I = n.add(y, I), y = n.sub(Y, I), I = n.add(Y, I), A = n.mul(y, I), Y = n.add(T, T), Y = n.add(Y, T), X = n.mul(q, X), V = n.mul(N, V), Y = n.add(Y, X), X = n.sub(T, X), X = n.mul(q, X), V = n.add(V, X), T = n.mul(Y, V), A = n.add(A, T), T = n.mul(z, V), y = n.mul(nt, y), y = n.sub(y, T), T = n.mul(nt, Y), I = n.mul(z, I), I = n.add(I, T), new S(y, A, I);
    }
    subtract(x) {
      return this.add(x.negate());
    }
    is0() {
      return this.equals(S.ZERO);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(x) {
      const { endo: w } = e;
      if (!r.isValidNot0(x))
        throw new Error("invalid scalar: out of range");
      let E, _;
      const L = (k) => Z.cached(this, k, (p) => Ut(S, p));
      if (w) {
        const { k1neg: k, k1: p, k2neg: y, k2: A } = H(x), { p: I, f: q } = L(p), { p: N, f: T } = L(A);
        _ = q.add(T), E = M(w.beta, I, N, k, y);
      } else {
        const { p: k, f: p } = L(x);
        E = k, _ = p;
      }
      return Ut(S, [E, _])[0];
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed secret key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(x) {
      const { endo: w } = e, E = this;
      if (!r.isValid(x))
        throw new Error("invalid scalar: out of range");
      if (x === bt || E.is0())
        return S.ZERO;
      if (x === Ct)
        return E;
      if (Z.hasCache(this))
        return this.multiply(x);
      if (w) {
        const { k1neg: _, k1: L, k2neg: k, k2: p } = H(x), { p1: y, p2: A } = Ir(S, E, L, p);
        return M(w.beta, y, A, _, k);
      } else
        return Z.unsafe(E, x);
    }
    multiplyAndAddUnsafe(x, w, E) {
      const _ = this.multiplyUnsafe(w).add(x.multiplyUnsafe(E));
      return _.is0() ? void 0 : _;
    }
    /**
     * Converts Projective point to affine (x, y) coordinates.
     * @param invertedZ Z^-1 (inverted zero) - optional, precomputation is useful for invertBatch
     */
    toAffine(x) {
      return O(this, x);
    }
    /**
     * Checks whether Point is free of torsion elements (is in prime subgroup).
     * Always torsion-free for cofactor=1 curves.
     */
    isTorsionFree() {
      const { isTorsionFree: x } = e;
      return o === Ct ? !0 : x ? x(S, this) : Z.unsafe(this, c).is0();
    }
    clearCofactor() {
      const { clearCofactor: x } = e;
      return o === Ct ? this : x ? x(S, this) : this.multiplyUnsafe(o);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(o).is0();
    }
    toBytes(x = !0) {
      return Tt("isCompressed", x), this.assertValidity(), d(S, this, x);
    }
    /** @deprecated use `toBytes` */
    toRawBytes(x = !0) {
      return this.toBytes(x);
    }
    toHex(x = !0) {
      return St(this.toBytes(x));
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
  }
  S.BASE = new S(t.Gx, t.Gy, n.ONE), S.ZERO = new S(n.ZERO, n.ONE, n.ZERO), S.Fp = n, S.Fn = r;
  const D = r.BITS, Z = new On(S, e.endo ? Math.ceil(D / 2) : D);
  return S;
}
function Nn(t) {
  return Uint8Array.of(t ? 2 : 3);
}
function cs(t, e, n = {}) {
  pe(e), Qt(n, {}, {
    hmac: "function",
    lowS: "boolean",
    randomBytes: "function",
    bits2int: "function",
    bits2int_modN: "function"
  });
  const r = n.randomBytes || on, o = n.hmac || ((p, ...y) => ve(e, p, ht(...y))), { Fp: c, Fn: s } = t, { ORDER: i, BITS: f } = s, l = vn(i), d = {
    secret: s.BYTES,
    public: 1 + c.BYTES,
    publicUncompressed: 1 + 2 * c.BYTES,
    signature: 2 * s.BYTES,
    seed: l
  };
  function h(p) {
    const y = i >> Ct;
    return p > y;
  }
  function a(p) {
    return h(p) ? s.neg(p) : p;
  }
  function u(p, y) {
    if (!s.isValidNot0(y))
      throw new Error(`invalid signature ${p}: out of range 1..CURVE.n`);
  }
  class g {
    constructor(y, A, I) {
      u("r", y), u("s", A), this.r = y, this.s = A, I != null && (this.recovery = I), Object.freeze(this);
    }
    static fromBytes(y, A = "compact") {
      if (A === "compact") {
        const I = s.BYTES;
        Q(y, I * 2);
        const q = y.subarray(0, I), N = y.subarray(I, I * 2);
        return new g(s.fromBytes(q), s.fromBytes(N));
      }
      if (A === "der") {
        Q(y);
        const { r: I, s: q } = ut.toSig(y);
        return new g(I, q);
      }
      throw new Error("invalid format");
    }
    static fromHex(y, A) {
      return this.fromBytes(se(y), A);
    }
    addRecoveryBit(y) {
      return new g(this.r, this.s, y);
    }
    // ProjPointType<bigint>
    recoverPublicKey(y) {
      const A = c.ORDER, { r: I, s: q, recovery: N } = this;
      if (N == null || ![0, 1, 2, 3].includes(N))
        throw new Error("recovery id invalid");
      if (i * Un < A && N > 1)
        throw new Error("recovery id is ambiguous for h>1 curve");
      const Y = N === 2 || N === 3 ? I + i : I;
      if (!c.isValid(Y))
        throw new Error("recovery id 2 or 3 invalid");
      const X = c.toBytes(Y), nt = t.fromHex(ht(Nn((N & 1) === 0), X)), V = s.inv(Y), z = D(G("msgHash", y)), rt = s.create(-z * V), wt = s.create(q * V), Lt = t.BASE.multiplyUnsafe(rt).add(nt.multiplyUnsafe(wt));
      if (Lt.is0())
        throw new Error("point at infinify");
      return Lt.assertValidity(), Lt;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return h(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new g(this.r, s.neg(this.s), this.recovery) : this;
    }
    toBytes(y = "compact") {
      if (y === "compact")
        return ht(s.toBytes(this.r), s.toBytes(this.s));
      if (y === "der")
        return se(ut.hexFromSig(this));
      throw new Error("invalid format");
    }
    toHex(y) {
      return St(this.toBytes(y));
    }
    // TODO: remove
    assertValidity() {
    }
    static fromCompact(y) {
      return g.fromBytes(G("sig", y), "compact");
    }
    static fromDER(y) {
      return g.fromBytes(G("sig", y), "der");
    }
    toDERRawBytes() {
      return this.toBytes("der");
    }
    toDERHex() {
      return St(this.toBytes("der"));
    }
    toCompactRawBytes() {
      return this.toBytes("compact");
    }
    toCompactHex() {
      return St(this.toBytes("compact"));
    }
  }
  function b(p) {
    try {
      return !!Dt(s, p);
    } catch {
      return !1;
    }
  }
  function m(p, y) {
    try {
      const A = p.length;
      return y === !0 && A !== d.public || y === !1 && A !== d.publicUncompressed ? !1 : !!t.fromBytes(p);
    } catch {
      return !1;
    }
  }
  function B(p = r(l)) {
    return Ar(p, i);
  }
  const H = {
    isValidSecretKey: b,
    isValidPublicKey: m,
    randomSecretKey: B,
    // TODO: remove
    isValidPrivateKey: b,
    randomPrivateKey: B,
    normPrivateKeyToScalar: (p) => Dt(s, p),
    precompute(p = 8, y = t.BASE) {
      return y.precompute(p, !1);
    }
  };
  function O(p, y = !0) {
    return t.BASE.multiply(Dt(s, p)).toBytes(y);
  }
  function U(p) {
    if (typeof p == "bigint")
      return !1;
    if (p instanceof t)
      return !0;
    if (s.allowedLengths || d.secret === d.public)
      return;
    const y = G("key", p).length;
    return y === d.public || y === d.publicUncompressed;
  }
  function M(p, y, A = !0) {
    if (U(p) === !0)
      throw new Error("first arg must be private key");
    if (U(y) === !1)
      throw new Error("second arg must be public key");
    const I = Dt(s, p);
    return t.fromHex(y).multiply(I).toBytes(A);
  }
  const S = n.bits2int || function(p) {
    if (p.length > 8192)
      throw new Error("input is too large");
    const y = fe(p), A = p.length * 8 - f;
    return A > 0 ? y >> BigInt(A) : y;
  }, D = n.bits2int_modN || function(p) {
    return s.create(S(p));
  }, Z = Pt(f);
  function R(p) {
    return Mt("num < 2^" + f, p, bt, Z), s.toBytes(p);
  }
  function x(p, y, A = w) {
    if (["recovered", "canonical"].some((rt) => rt in A))
      throw new Error("sign() legacy options not supported");
    let { lowS: I, prehash: q, extraEntropy: N } = A;
    I == null && (I = !0), p = G("msgHash", p), Qe(A), q && (p = G("prehashed msgHash", e(p)));
    const T = D(p), Y = Dt(s, y), X = [R(Y), R(T)];
    if (N != null && N !== !1) {
      const rt = N === !0 ? r(d.secret) : N;
      X.push(G("extraEntropy", rt));
    }
    const nt = ht(...X), V = T;
    function z(rt) {
      const wt = S(rt);
      if (!s.isValidNot0(wt))
        return;
      const Lt = s.inv(wt), jt = t.BASE.multiply(wt).toAffine(), Ht = s.create(jt.x);
      if (Ht === bt)
        return;
      const $t = s.create(Lt * s.create(V + Ht * Y));
      if ($t === bt)
        return;
      let ke = (jt.x === Ht ? 0 : 2) | Number(jt.y & Ct), qe = $t;
      return I && h($t) && (qe = a($t), ke ^= 1), new g(Ht, qe, ke);
    }
    return { seed: nt, k2sig: z };
  }
  const w = { lowS: n.lowS, prehash: !1 }, E = { lowS: n.lowS, prehash: !1 };
  function _(p, y, A = w) {
    const { seed: I, k2sig: q } = x(p, y, A);
    return br(e.outputLen, s.BYTES, o)(I, q);
  }
  t.BASE.precompute(8);
  function L(p, y, A, I = E) {
    const q = p;
    y = G("msgHash", y), A = G("publicKey", A), Qe(I);
    const { lowS: N, prehash: T, format: Y } = I;
    if ("strict" in I)
      throw new Error("options.strict was renamed to lowS");
    let X, nt;
    if (Y === void 0) {
      const V = typeof q == "string" || re(q), z = !V && q !== null && typeof q == "object" && typeof q.r == "bigint" && typeof q.s == "bigint";
      if (!V && !z)
        throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
      if (z)
        X = new g(q.r, q.s);
      else if (V) {
        try {
          X = g.fromDER(q);
        } catch (rt) {
          if (!(rt instanceof ut.Err))
            throw rt;
        }
        if (!X)
          try {
            X = g.fromCompact(q);
          } catch {
            return !1;
          }
      }
    } else if (Y === "compact" || Y === "der") {
      if (typeof q != "string" && !re(q))
        throw new Error('"der" / "compact" format expects Uint8Array signature');
      X = g.fromBytes(G("sig", q), Y);
    } else if (Y === "js") {
      if (!(q instanceof g))
        throw new Error('"js" format expects Signature instance');
      X = q;
    } else
      throw new Error('format must be "compact", "der" or "js"');
    if (!X)
      return !1;
    try {
      if (nt = t.fromHex(A), N && X.hasHighS())
        return !1;
      T && (y = e(y));
      const { r: V, s: z } = X, rt = D(y), wt = s.inv(z), Lt = s.create(rt * wt), jt = s.create(V * wt), Ht = t.BASE.multiplyUnsafe(Lt).add(nt.multiplyUnsafe(jt));
      return Ht.is0() ? !1 : s.create(Ht.x) === V;
    } catch {
      return !1;
    }
  }
  function k(p) {
    const y = H.randomSecretKey(p);
    return { secretKey: y, publicKey: O(y) };
  }
  return Object.freeze({
    keygen: k,
    getPublicKey: O,
    sign: _,
    verify: L,
    getSharedSecret: M,
    utils: H,
    Point: t,
    Signature: g,
    info: { type: "weierstrass", lengths: d, publicKeyHasPrefix: !0 }
  });
}
function fs(t) {
  const e = {
    a: t.a,
    b: t.b,
    p: t.Fp.ORDER,
    n: t.n,
    h: t.h,
    Gx: t.Gx,
    Gy: t.Gy
  }, n = t.Fp;
  let r = t.allowedPrivateKeyLengths ? Array.from(new Set(t.allowedPrivateKeyLengths.map((s) => Math.ceil(s / 2)))) : void 0;
  const o = Ot(e.n, {
    BITS: t.nBitLength,
    allowedLengths: r,
    modOnDecode: t.wrapPrivateKey
  }), c = {
    Fp: n,
    Fn: o,
    allowInfinityPoint: t.allowInfinityPoint,
    endo: t.endo,
    isTorsionFree: t.isTorsionFree,
    clearCofactor: t.clearCofactor,
    fromBytes: t.fromBytes,
    toBytes: t.toBytes
  };
  return { CURVE: e, curveOpts: c };
}
function as(t) {
  const { CURVE: e, curveOpts: n } = fs(t), r = {
    hmac: t.hmac,
    randomBytes: t.randomBytes,
    lowS: t.lowS,
    bits2int: t.bits2int,
    bits2int_modN: t.bits2int_modN
  };
  return { CURVE: e, curveOpts: n, hash: t.hash, ecdsaOpts: r };
}
function ls(t, e) {
  return Object.assign({}, e, {
    ProjectivePoint: e.Point,
    CURVE: t
  });
}
function us(t) {
  const { CURVE: e, curveOpts: n, hash: r, ecdsaOpts: o } = as(t), c = is(e, n), s = cs(c, r, o);
  return ls(t, s);
}
function hs(t, e) {
  const n = (r) => us({ ...t, hash: r });
  return { ...n(e), create: n };
}
const Re = {
  p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
  n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
  h: BigInt(1),
  a: BigInt(0),
  b: BigInt(7),
  Gx: BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),
  Gy: BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")
}, ds = {
  beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
  basises: [
    [BigInt("0x3086d221a7d46bcde86c90e49284eb15"), -BigInt("0xe4437ed6010e88286f547fa90abfe4c3")],
    [BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), BigInt("0x3086d221a7d46bcde86c90e49284eb15")]
  ]
}, Je = /* @__PURE__ */ BigInt(2);
function bs(t) {
  const e = Re.p, n = BigInt(3), r = BigInt(6), o = BigInt(11), c = BigInt(22), s = BigInt(23), i = BigInt(44), f = BigInt(88), l = t * t * t % e, d = l * l * t % e, h = j(d, n, e) * d % e, a = j(h, n, e) * d % e, u = j(a, Je, e) * l % e, g = j(u, o, e) * u % e, b = j(g, c, e) * g % e, m = j(b, i, e) * b % e, B = j(m, f, e) * m % e, H = j(B, i, e) * b % e, O = j(H, n, e) * d % e, U = j(O, s, e) * g % e, M = j(U, r, e) * l % e, S = j(M, Je, e);
  if (!ge.eql(ge.sqr(S), t))
    throw new Error("Cannot find square root");
  return S;
}
const ge = Ot(Re.p, void 0, void 0, { sqrt: bs }), Ss = hs({ ...Re, Fp: ge, lowS: !0, endo: ds }, ce);
export {
  Bs as R,
  As as a,
  ws as b,
  ht as c,
  Xt as d,
  Mt as e,
  it as f,
  Nt as g,
  Pt as h,
  re as i,
  vs as j,
  _s as k,
  Ss as l,
  $ as m,
  Yt as n,
  un as p,
  on as r,
  xs as s,
  Ee as u
};
