!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Nebula = e() : t.Nebula = e();
}(this, function() {
    return (()=>{
        var t = {
            705: (t, e, i)=>{
                var s = i(639).Symbol;
                t.exports = s;
            },
            636: (t, e, i)=>{
                var s = i(545), r = i(694), n = i(469), o = i(144), a = i(776), h = i(719), c = Object.prototype.hasOwnProperty;
                t.exports = function(t, e) {
                    var i = n(t), u = !i && r(t), l = !i && !u && o(t), d = !i && !u && !l && h(t), p = i || u || l || d, y = p ? s(t.length, String) : [], f = y.length;
                    for(var m in t)!e && !c.call(t, m) || p && ("length" == m || l && ("offset" == m || "parent" == m) || d && ("buffer" == m || "byteLength" == m || "byteOffset" == m) || a(m, f)) || y.push(m);
                    return y;
                };
            },
            932: (t)=>{
                t.exports = function(t, e) {
                    for(var i = -1, s = null == t ? 0 : t.length, r = Array(s); ++i < s;)r[i] = e(t[i], i, t);
                    return r;
                };
            },
            311: (t, e, i)=>{
                var s = i(877);
                t.exports = function(t) {
                    var e = t.length;
                    return e ? t[s(0, e - 1)] : void 0;
                };
            },
            239: (t, e, i)=>{
                var s = i(705), r = i(607), n = i(333), o = s ? s.toStringTag : void 0;
                t.exports = function(t) {
                    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : o && o in Object(t) ? r(t) : n(t);
                };
            },
            454: (t, e, i)=>{
                var s = i(239), r = i(5);
                t.exports = function(t) {
                    return r(t) && "[object Arguments]" == s(t);
                };
            },
            749: (t, e, i)=>{
                var s = i(239), r = i(780), n = i(5), o = {};
                o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0, o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object DataView]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1, t.exports = function(t) {
                    return n(t) && r(t.length) && !!o[s(t)];
                };
            },
            280: (t, e, i)=>{
                var s = i(726), r = i(916), n = Object.prototype.hasOwnProperty;
                t.exports = function(t) {
                    if (!s(t)) return r(t);
                    var e = [];
                    for(var i in Object(t))n.call(t, i) && "constructor" != i && e.push(i);
                    return e;
                };
            },
            877: (t)=>{
                var e = Math.floor, i = Math.random;
                t.exports = function(t, s) {
                    return t + e(i() * (s - t + 1));
                };
            },
            992: (t, e, i)=>{
                var s = i(311), r = i(628);
                t.exports = function(t) {
                    return s(r(t));
                };
            },
            545: (t)=>{
                t.exports = function(t, e) {
                    for(var i = -1, s = Array(t); ++i < t;)s[i] = e(i);
                    return s;
                };
            },
            518: (t)=>{
                t.exports = function(t) {
                    return function(e) {
                        return t(e);
                    };
                };
            },
            415: (t, e, i)=>{
                var s = i(932);
                t.exports = function(t, e) {
                    return s(e, function(e) {
                        return t[e];
                    });
                };
            },
            957: (t, e, i)=>{
                var s = "object" == typeof i.g && i.g && i.g.Object === Object && i.g;
                t.exports = s;
            },
            607: (t, e, i)=>{
                var s = i(705), r = Object.prototype, n = r.hasOwnProperty, o = r.toString, a = s ? s.toStringTag : void 0;
                t.exports = function(t) {
                    var e = n.call(t, a), i = t[a];
                    try {
                        t[a] = void 0;
                        var s = !0;
                    } catch (t) {}
                    var r = o.call(t);
                    return s && (e ? t[a] = i : delete t[a]), r;
                };
            },
            776: (t)=>{
                var e = /^(?:0|[1-9]\d*)$/;
                t.exports = function(t, i) {
                    var s = typeof t;
                    return !!(i = null == i ? 9007199254740991 : i) && ("number" == s || "symbol" != s && e.test(t)) && t > -1 && t % 1 == 0 && t < i;
                };
            },
            726: (t)=>{
                var e = Object.prototype;
                t.exports = function(t) {
                    var i = t && t.constructor;
                    return t === ("function" == typeof i && i.prototype || e);
                };
            },
            916: (t, e, i)=>{
                var s = i(569)(Object.keys, Object);
                t.exports = s;
            },
            167: (t, e, i)=>{
                t = i.nmd(t);
                var s = i(957), r = e && !e.nodeType && e, n = r && t && !t.nodeType && t, o = n && n.exports === r && s.process, a = function() {
                    try {
                        return n && n.require && n.require("util").types || o && o.binding && o.binding("util");
                    } catch (t) {}
                }();
                t.exports = a;
            },
            333: (t)=>{
                var e = Object.prototype.toString;
                t.exports = function(t) {
                    return e.call(t);
                };
            },
            569: (t)=>{
                t.exports = function(t, e) {
                    return function(i) {
                        return t(e(i));
                    };
                };
            },
            639: (t, e, i)=>{
                var s = i(957), r = "object" == typeof self && self && self.Object === Object && self, n = s || r || Function("return this")();
                t.exports = n;
            },
            694: (t, e, i)=>{
                var s = i(454), r = i(5), n = Object.prototype, o = n.hasOwnProperty, a = n.propertyIsEnumerable, h = s(function() {
                    return arguments;
                }()) ? s : function(t) {
                    return r(t) && o.call(t, "callee") && !a.call(t, "callee");
                };
                t.exports = h;
            },
            469: (t)=>{
                var e = Array.isArray;
                t.exports = e;
            },
            612: (t, e, i)=>{
                var s = i(560), r = i(780);
                t.exports = function(t) {
                    return null != t && r(t.length) && !s(t);
                };
            },
            144: (t, e, i)=>{
                t = i.nmd(t);
                var s = i(639), r = i(62), n = e && !e.nodeType && e, o = n && t && !t.nodeType && t, a = o && o.exports === n ? s.Buffer : void 0, h = (a ? a.isBuffer : void 0) || r;
                t.exports = h;
            },
            560: (t, e, i)=>{
                var s = i(239), r = i(218);
                t.exports = function(t) {
                    if (!r(t)) return !1;
                    var e = s(t);
                    return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e;
                };
            },
            780: (t)=>{
                t.exports = function(t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991;
                };
            },
            763: (t, e, i)=>{
                var s = i(239), r = i(5);
                t.exports = function(t) {
                    return "number" == typeof t || r(t) && "[object Number]" == s(t);
                };
            },
            218: (t)=>{
                t.exports = function(t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e);
                };
            },
            5: (t)=>{
                t.exports = function(t) {
                    return null != t && "object" == typeof t;
                };
            },
            719: (t, e, i)=>{
                var s = i(749), r = i(518), n = i(167), o = n && n.isTypedArray, a = o ? r(o) : s;
                t.exports = a;
            },
            674: (t, e, i)=>{
                var s = i(636), r = i(280), n = i(612);
                t.exports = function(t) {
                    return n(t) ? s(t) : r(t);
                };
            },
            534: (t, e, i)=>{
                var s = i(311), r = i(992), n = i(469);
                t.exports = function(t) {
                    return (n(t) ? s : r)(t);
                };
            },
            62: (t)=>{
                t.exports = function() {
                    return !1;
                };
            },
            628: (t, e, i)=>{
                var s = i(415), r = i(674);
                t.exports = function(t) {
                    return null == t ? [] : s(t, r(t));
                };
            },
            327: (t)=>{
                for(var e = [], i = 0; i < 256; ++i)e[i] = (i + 256).toString(16).substr(1);
                t.exports = function(t, i) {
                    var s = i || 0, r = e;
                    return [
                        r[t[s++]],
                        r[t[s++]],
                        r[t[s++]],
                        r[t[s++]],
                        "-",
                        r[t[s++]],
                        r[t[s++]],
                        "-",
                        r[t[s++]],
                        r[t[s++]],
                        "-",
                        r[t[s++]],
                        r[t[s++]],
                        "-",
                        r[t[s++]],
                        r[t[s++]],
                        r[t[s++]],
                        r[t[s++]],
                        r[t[s++]],
                        r[t[s++]]
                    ].join("");
                };
            },
            217: (t)=>{
                var e = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
                if (e) {
                    var i = new Uint8Array(16);
                    t.exports = function() {
                        return e(i), i;
                    };
                } else {
                    var s = new Array(16);
                    t.exports = function() {
                        for(var t, e = 0; e < 16; e++)0 == (3 & e) && (t = 4294967296 * Math.random()), s[e] = t >>> ((3 & e) << 3) & 255;
                        return s;
                    };
                }
            },
            570: (t, e, i)=>{
                var s, r, n = i(217), o = i(327), a = 0, h = 0;
                t.exports = function(t, e, i) {
                    var c = e && i || 0, u = e || [], l = (t = t || {}).node || s, d = void 0 !== t.clockseq ? t.clockseq : r;
                    if (null == l || null == d) {
                        var p = n();
                        null == l && (l = s = [
                            1 | p[0],
                            p[1],
                            p[2],
                            p[3],
                            p[4],
                            p[5]
                        ]), null == d && (d = r = 16383 & (p[6] << 8 | p[7]));
                    }
                    var y = void 0 !== t.msecs ? t.msecs : (new Date).getTime(), f = void 0 !== t.nsecs ? t.nsecs : h + 1, m = y - a + (f - h) / 1e4;
                    if (m < 0 && void 0 === t.clockseq && (d = d + 1 & 16383), (m < 0 || y > a) && void 0 === t.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                    a = y, h = f, r = d;
                    var g = (1e4 * (268435455 & (y += 122192928e5)) + f) % 4294967296;
                    u[c++] = g >>> 24 & 255, u[c++] = g >>> 16 & 255, u[c++] = g >>> 8 & 255, u[c++] = 255 & g;
                    var x = y / 4294967296 * 1e4 & 268435455;
                    u[c++] = x >>> 8 & 255, u[c++] = 255 & x, u[c++] = x >>> 24 & 15 | 16, u[c++] = x >>> 16 & 255, u[c++] = d >>> 8 | 128, u[c++] = 255 & d;
                    for(var v = 0; v < 6; ++v)u[c + v] = l[v];
                    return e || o(u);
                };
            }
        }, e = {};
        function i(s) {
            var r = e[s];
            if (void 0 !== r) return r.exports;
            var n = e[s] = {
                id: s,
                loaded: !1,
                exports: {}
            };
            return t[s](n, n.exports, i), n.loaded = !0, n.exports;
        }
        i.n = (t)=>{
            var e = t && t.__esModule ? ()=>t.default : ()=>t;
            return i.d(e, {
                a: e
            }), e;
        }, i.d = (t, e)=>{
            for(var s in e)i.o(e, s) && !i.o(t, s) && Object.defineProperty(t, s, {
                enumerable: !0,
                get: e[s]
            });
        }, i.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (t) {
                if ("object" == typeof window) return window;
            }
        }(), i.o = (t, e)=>Object.prototype.hasOwnProperty.call(t, e), i.r = (t)=>{
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        }, i.nmd = (t)=>(t.paths = [], t.children || (t.children = []), t);
        var s = {};
        return (()=>{
            "use strict";
            i.r(s), i.d(s, {
                Alpha: ()=>ii,
                ArraySpan: ()=>Yt,
                Attraction: ()=>si,
                Behaviour: ()=>ei,
                Body: ()=>le,
                BodySprite: ()=>ve,
                Box: ()=>Qt,
                BoxZone: ()=>Pe,
                Collision: ()=>ri,
                Color: ()=>ni,
                ColorSpan: ()=>Xt,
                ColorUtil: ()=>gt,
                CrossZone: ()=>oi,
                CustomRenderer: ()=>Oi,
                Debug: ()=>wi,
                Emitter: ()=>Ke,
                FollowEmitter: ()=>Mi,
                Force: ()=>ai,
                GPURenderer: ()=>Hi,
                Gravity: ()=>hi,
                INTEGRATION_TYPE_EULER: ()=>Ht,
                INTEGRATION_TYPE_RK2: ()=>$t,
                INTEGRATION_TYPE_RK4: ()=>Wt,
                INTEGRATION_TYPE_VERLET: ()=>Kt,
                InitializerUtil: ()=>_e,
                Life: ()=>we,
                LineZone: ()=>Oe,
                Mass: ()=>ze,
                MathUtils: ()=>Zt,
                MeshRenderer: ()=>Ei,
                MeshZone: ()=>Ee,
                PUID: ()=>xt,
                Particle: ()=>se,
                PointZone: ()=>Te,
                Polar3D: ()=>ie,
                PolarVelocity: ()=>Xe,
                Pool: ()=>re,
                Position: ()=>Ze,
                RadialVelocity: ()=>Je,
                Radius: ()=>Ue,
                RandomDrift: ()=>ci,
                Rate: ()=>Ne,
                Repulsion: ()=>ui,
                Rotate: ()=>li,
                Scale: ()=>di,
                ScreenZone: ()=>Se,
                Span: ()=>Ut,
                SphereZone: ()=>Fe,
                Spring: ()=>pi,
                SpriteRenderer: ()=>Ti,
                System: ()=>vi,
                THREEUtil: ()=>It,
                Texture: ()=>Ye,
                Util: ()=>Rt,
                Vector3D: ()=>ee,
                VectorVelocity: ()=>Qe,
                createArraySpan: ()=>Gt,
                createColorSpan: ()=>Jt,
                createSpan: ()=>Nt,
                default: ()=>$i,
                ease: ()=>k,
                easeInBack: ()=>nt,
                easeInCirc: ()=>it,
                easeInCubic: ()=>q,
                easeInExpo: ()=>K,
                easeInOutBack: ()=>at,
                easeInOutCirc: ()=>rt,
                easeInOutCubic: ()=>G,
                easeInOutExpo: ()=>et,
                easeInOutQuad: ()=>L,
                easeInOutQuart: ()=>Q,
                easeInOutSine: ()=>W,
                easeInQuad: ()=>U,
                easeInQuart: ()=>X,
                easeInSine: ()=>H,
                easeLinear: ()=>Z,
                easeOutBack: ()=>ot,
                easeOutCirc: ()=>st,
                easeOutCubic: ()=>Y,
                easeOutExpo: ()=>tt,
                easeOutQuad: ()=>N,
                easeOutQuart: ()=>J,
                easeOutSine: ()=>$,
                getEasingByName: ()=>ct,
                integrate: ()=>te,
                log: ()=>zi,
                setEasingByName: ()=>ht,
                uid: ()=>Dt,
                withDefaults: ()=>kt
            });
            var t = {};
            i.r(t), i.d(t, {
                BoxZone: ()=>Pe,
                LineZone: ()=>Oe,
                MeshZone: ()=>Ee,
                PointZone: ()=>Te,
                ScreenZone: ()=>Se,
                SphereZone: ()=>Fe
            });
            var e = {};
            i.r(e), i.d(e, {
                Body: ()=>le,
                BodySprite: ()=>ve,
                InitializerUtil: ()=>_e,
                Life: ()=>we,
                Mass: ()=>ze,
                PolarVelocity: ()=>Xe,
                Position: ()=>Ze,
                RadialVelocity: ()=>Je,
                Radius: ()=>Ue,
                Rate: ()=>Ne,
                Texture: ()=>Ye,
                VectorVelocity: ()=>Qe
            });
            var r = {};
            i.r(r), i.d(r, {
                Alpha: ()=>ii,
                Attraction: ()=>si,
                Behaviour: ()=>ei,
                Collision: ()=>ri,
                Color: ()=>ni,
                CrossZone: ()=>oi,
                Force: ()=>ai,
                Gravity: ()=>hi,
                RandomDrift: ()=>ci,
                Repulsion: ()=>ui,
                Rotate: ()=>li,
                Scale: ()=>di,
                Spring: ()=>pi
            });
            const n = "Alpha", o = "Attraction", a = "Color", h = "CrossZone", c = "Force", u = "Gravity", l = "RandomDrift", d = "Repulsion", p = "Rotate", y = "Scale", f = "Spring", m = "Body", g = "BodySprite", x = "Texture", v = "Life", b = "Mass", _ = "Position", w = "Radius", z = "VectorVelocity", M = "PolarVelocity", P = "RadialVelocity", O = [
                g,
                x
            ], E = "BoxZone", T = "LineZone", S = "MeshZone", C = "PointZone", A = "SphereZone", j = "MobileGPURenderer", I = "DesktopGPURenderer", R = 3.142, B = 500, D = R / 180, V = "euler", F = ()=>!!process && (process.env, !1), k = {
                easeLinear: function(t) {
                    return t;
                },
                easeInQuad: function(t) {
                    return Math.pow(t, 2);
                },
                easeOutQuad: function(t) {
                    return -(Math.pow(t - 1, 2) - 1);
                },
                easeInOutQuad: function(t) {
                    return (t /= .5) < 1 ? .5 * Math.pow(t, 2) : -0.5 * ((t -= 2) * t - 2);
                },
                easeInCubic: function(t) {
                    return Math.pow(t, 3);
                },
                easeOutCubic: function(t) {
                    return Math.pow(t - 1, 3) + 1;
                },
                easeInOutCubic: function(t) {
                    return (t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2);
                },
                easeInQuart: function(t) {
                    return Math.pow(t, 4);
                },
                easeOutQuart: function(t) {
                    return -(Math.pow(t - 1, 4) - 1);
                },
                easeInOutQuart: function(t) {
                    return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -0.5 * ((t -= 2) * Math.pow(t, 3) - 2);
                },
                easeInSine: function(t) {
                    return 1 - Math.cos(t * (R / 2));
                },
                easeOutSine: function(t) {
                    return Math.sin(t * (R / 2));
                },
                easeInOutSine: function(t) {
                    return -0.5 * (Math.cos(R * t) - 1);
                },
                easeInExpo: function(t) {
                    return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
                },
                easeOutExpo: function(t) {
                    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
                },
                easeInOutExpo: function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t));
                },
                easeInCirc: function(t) {
                    return -(Math.sqrt(1 - t * t) - 1);
                },
                easeOutCirc: function(t) {
                    return Math.sqrt(1 - Math.pow(t - 1, 2));
                },
                easeInOutCirc: function(t) {
                    return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
                },
                easeInBack: function(t) {
                    var e = 1.70158;
                    return t * t * ((e + 1) * t - e);
                },
                easeOutBack: function(t) {
                    var e = 1.70158;
                    return (t -= 1) * t * ((e + 1) * t + e) + 1;
                },
                easeInOutBack: function(t) {
                    var e = 1.70158;
                    return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
                }
            }, { easeLinear: Z, easeInQuad: U, easeOutQuad: N, easeInOutQuad: L, easeInCubic: q, easeOutCubic: Y, easeInOutCubic: G, easeInQuart: X, easeOutQuart: J, easeInOutQuart: Q, easeInSine: H, easeOutSine: $, easeInOutSine: W, easeInExpo: K, easeOutExpo: tt, easeInOutExpo: et, easeInCirc: it, easeOutCirc: st, easeInOutCirc: rt, easeInBack: nt, easeOutBack: ot, easeInOutBack: at } = k, ht = (t)=>k[t] ? k[t] : k.easeLinear, ct = (t)=>k[t] ? k[t] : k.easeLinear, ut = 1 / 0, lt = Z, dt = .0167, pt = [
                _,
                v,
                w,
                b,
                m,
                g,
                x,
                M,
                P,
                z
            ], yt = [
                n,
                o,
                a,
                h,
                c,
                u,
                l,
                d,
                p,
                y,
                f
            ], ft = [
                E,
                T,
                S,
                C,
                A
            ];
            function mt(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t;
            }
            const gt = {
                getRGB: function(t) {
                    var e = {};
                    if ("number" == typeof t) s = Math.floor(t), e.r = (t >> 16 & 255) / 255, e.g = (t >> 8 & 255) / 255, e.b = (255 & t) / 255;
                    else if ("string" == typeof t) {
                        var i;
                        if (i = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(t)) e.r = Math.min(255, parseInt(i[1], 10)) / 255, e.g = Math.min(255, parseInt(i[2], 10)) / 255, e.b = Math.min(255, parseInt(i[3], 10)) / 255;
                        else if (i = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
                            var s = i[1];
                            e.r = parseInt(s.charAt(0) + s.charAt(1), 16) / 255, e.g = parseInt(s.charAt(2) + s.charAt(3), 16) / 255, e.b = parseInt(s.charAt(4) + s.charAt(5), 16) / 255;
                        }
                    } else e.r = t.r, e.g = t.g, e.b = t.b;
                    return e;
                }
            }, xt = {
                _id: 0,
                _uids: new Map,
                getNewId: function() {
                    return "PUID_" + ++this._id;
                },
                id: function(t) {
                    if (this._uids.has(t)) return this._uids.get(t);
                    const e = this.getNewId();
                    return this._uids.set(t, e), e;
                }
            };
            var vt, bt, _t, wt, zt, Mt, Pt, Ot, Et, Tt = {
                DEG2RAD: Math.PI / 180,
                RAD2DEG: 180 / Math.PI,
                generateUUID: function() {
                    for(var t = [], e = 0; e < 256; e++)t[e] = (e < 16 ? "0" : "") + e.toString(16);
                    return function() {
                        var e = 4294967295 * Math.random() | 0, i = 4294967295 * Math.random() | 0, s = 4294967295 * Math.random() | 0, r = 4294967295 * Math.random() | 0;
                        return (t[255 & e] + t[e >> 8 & 255] + t[e >> 16 & 255] + t[e >> 24 & 255] + "-" + t[255 & i] + t[i >> 8 & 255] + "-" + t[i >> 16 & 15 | 64] + t[i >> 24 & 255] + "-" + t[63 & s | 128] + t[s >> 8 & 255] + "-" + t[s >> 16 & 255] + t[s >> 24 & 255] + t[255 & r] + t[r >> 8 & 255] + t[r >> 16 & 255] + t[r >> 24 & 255]).toUpperCase();
                    };
                }(),
                clamp: function(t, e, i) {
                    return Math.max(e, Math.min(i, t));
                },
                euclideanModulo: function(t, e) {
                    return (t % e + e) % e;
                },
                mapLinear: function(t, e, i, s, r) {
                    return s + (t - e) * (r - s) / (i - e);
                },
                lerp: function(t, e, i) {
                    return (1 - i) * t + i * e;
                },
                smoothstep: function(t, e, i) {
                    return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * (3 - 2 * t);
                },
                smootherstep: function(t, e, i) {
                    return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * t * (t * (6 * t - 15) + 10);
                },
                randInt: function(t, e) {
                    return t + Math.floor(Math.random() * (e - t + 1));
                },
                randFloat: function(t, e) {
                    return t + Math.random() * (e - t);
                },
                randFloatSpread: function(t) {
                    return t * (.5 - Math.random());
                },
                degToRad: function(t) {
                    return t * Tt.DEG2RAD;
                },
                radToDeg: function(t) {
                    return t * Tt.RAD2DEG;
                },
                isPowerOfTwo: function(t) {
                    return 0 == (t & t - 1) && 0 !== t;
                },
                ceilPowerOfTwo: function(t) {
                    return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
                },
                floorPowerOfTwo: function(t) {
                    return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
                }
            };
            function St(t, e, i, s) {
                this._x = t || 0, this._y = e || 0, this._z = i || 0, this._w = void 0 !== s ? s : 1;
            }
            function Ct(t, e, i) {
                this.x = t || 0, this.y = e || 0, this.z = i || 0;
            }
            function At() {
                this.elements = [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
            }
            function jt(t, e, i, s) {
                this._x = t || 0, this._y = e || 0, this._z = i || 0, this._order = s || jt.DefaultOrder;
            }
            Object.assign(St, {
                slerp: function(t, e, i, s) {
                    return i.copy(t).slerp(e, s);
                },
                slerpFlat: function(t, e, i, s, r, n, o) {
                    var a = i[s + 0], h = i[s + 1], c = i[s + 2], u = i[s + 3], l = r[n + 0], d = r[n + 1], p = r[n + 2], y = r[n + 3];
                    if (u !== y || a !== l || h !== d || c !== p) {
                        var f = 1 - o, m = a * l + h * d + c * p + u * y, g = m >= 0 ? 1 : -1, x = 1 - m * m;
                        if (x > Number.EPSILON) {
                            var v = Math.sqrt(x), b = Math.atan2(v, m * g);
                            f = Math.sin(f * b) / v, o = Math.sin(o * b) / v;
                        }
                        var _ = o * g;
                        if (a = a * f + l * _, h = h * f + d * _, c = c * f + p * _, u = u * f + y * _, f === 1 - o) {
                            var w = 1 / Math.sqrt(a * a + h * h + c * c + u * u);
                            a *= w, h *= w, c *= w, u *= w;
                        }
                    }
                    t[e] = a, t[e + 1] = h, t[e + 2] = c, t[e + 3] = u;
                }
            }), Object.defineProperties(St.prototype, {
                x: {
                    get: function() {
                        return this._x;
                    },
                    set: function(t) {
                        this._x = t, this._onChangeCallback();
                    }
                },
                y: {
                    get: function() {
                        return this._y;
                    },
                    set: function(t) {
                        this._y = t, this._onChangeCallback();
                    }
                },
                z: {
                    get: function() {
                        return this._z;
                    },
                    set: function(t) {
                        this._z = t, this._onChangeCallback();
                    }
                },
                w: {
                    get: function() {
                        return this._w;
                    },
                    set: function(t) {
                        this._w = t, this._onChangeCallback();
                    }
                }
            }), Object.assign(St.prototype, {
                isQuaternion: !0,
                set: function(t, e, i, s) {
                    return this._x = t, this._y = e, this._z = i, this._w = s, this._onChangeCallback(), this;
                },
                clone: function() {
                    return new this.constructor(this._x, this._y, this._z, this._w);
                },
                copy: function(t) {
                    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
                },
                setFromEuler: function(t, e) {
                    if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
                    var i = t._x, s = t._y, r = t._z, n = t.order, o = Math.cos, a = Math.sin, h = o(i / 2), c = o(s / 2), u = o(r / 2), l = a(i / 2), d = a(s / 2), p = a(r / 2);
                    return "XYZ" === n ? (this._x = l * c * u + h * d * p, this._y = h * d * u - l * c * p, this._z = h * c * p + l * d * u, this._w = h * c * u - l * d * p) : "YXZ" === n ? (this._x = l * c * u + h * d * p, this._y = h * d * u - l * c * p, this._z = h * c * p - l * d * u, this._w = h * c * u + l * d * p) : "ZXY" === n ? (this._x = l * c * u - h * d * p, this._y = h * d * u + l * c * p, this._z = h * c * p + l * d * u, this._w = h * c * u - l * d * p) : "ZYX" === n ? (this._x = l * c * u - h * d * p, this._y = h * d * u + l * c * p, this._z = h * c * p - l * d * u, this._w = h * c * u + l * d * p) : "YZX" === n ? (this._x = l * c * u + h * d * p, this._y = h * d * u + l * c * p, this._z = h * c * p - l * d * u, this._w = h * c * u - l * d * p) : "XZY" === n && (this._x = l * c * u - h * d * p, this._y = h * d * u - l * c * p, this._z = h * c * p + l * d * u, this._w = h * c * u + l * d * p), !1 !== e && this._onChangeCallback(), this;
                },
                setFromAxisAngle: function(t, e) {
                    var i = e / 2, s = Math.sin(i);
                    return this._x = t.x * s, this._y = t.y * s, this._z = t.z * s, this._w = Math.cos(i), this._onChangeCallback(), this;
                },
                setFromRotationMatrix: function(t) {
                    var e, i = t.elements, s = i[0], r = i[4], n = i[8], o = i[1], a = i[5], h = i[9], c = i[2], u = i[6], l = i[10], d = s + a + l;
                    return d > 0 ? (e = .5 / Math.sqrt(d + 1), this._w = .25 / e, this._x = (u - h) * e, this._y = (n - c) * e, this._z = (o - r) * e) : s > a && s > l ? (e = 2 * Math.sqrt(1 + s - a - l), this._w = (u - h) / e, this._x = .25 * e, this._y = (r + o) / e, this._z = (n + c) / e) : a > l ? (e = 2 * Math.sqrt(1 + a - s - l), this._w = (n - c) / e, this._x = (r + o) / e, this._y = .25 * e, this._z = (h + u) / e) : (e = 2 * Math.sqrt(1 + l - s - a), this._w = (o - r) / e, this._x = (n + c) / e, this._y = (h + u) / e, this._z = .25 * e), this._onChangeCallback(), this;
                },
                setFromUnitVectors: function(t, e) {
                    var i = t.dot(e) + 1;
                    return i < 1e-6 ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = i)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = i), this.normalize();
                },
                angleTo: function(t) {
                    return 2 * Math.acos(Math.abs(Tt.clamp(this.dot(t), -1, 1)));
                },
                rotateTowards: function(t, e) {
                    var i = this.angleTo(t);
                    if (0 === i) return this;
                    var s = Math.min(1, e / i);
                    return this.slerp(t, s), this;
                },
                inverse: function() {
                    return this.conjugate();
                },
                conjugate: function() {
                    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
                },
                dot: function(t) {
                    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
                },
                lengthSq: function() {
                    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
                },
                length: function() {
                    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
                },
                normalize: function() {
                    var t = this.length();
                    return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
                },
                multiply: function(t, e) {
                    return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t);
                },
                premultiply: function(t) {
                    return this.multiplyQuaternions(t, this);
                },
                multiplyQuaternions: function(t, e) {
                    var i = t._x, s = t._y, r = t._z, n = t._w, o = e._x, a = e._y, h = e._z, c = e._w;
                    return this._x = i * c + n * o + s * h - r * a, this._y = s * c + n * a + r * o - i * h, this._z = r * c + n * h + i * a - s * o, this._w = n * c - i * o - s * a - r * h, this._onChangeCallback(), this;
                },
                slerp: function(t, e) {
                    if (0 === e) return this;
                    if (1 === e) return this.copy(t);
                    var i = this._x, s = this._y, r = this._z, n = this._w, o = n * t._w + i * t._x + s * t._y + r * t._z;
                    if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1) return this._w = n, this._x = i, this._y = s, this._z = r, this;
                    var a = 1 - o * o;
                    if (a <= Number.EPSILON) {
                        var h = 1 - e;
                        return this._w = h * n + e * this._w, this._x = h * i + e * this._x, this._y = h * s + e * this._y, this._z = h * r + e * this._z, this.normalize(), this._onChangeCallback(), this;
                    }
                    var c = Math.sqrt(a), u = Math.atan2(c, o), l = Math.sin((1 - e) * u) / c, d = Math.sin(e * u) / c;
                    return this._w = n * l + this._w * d, this._x = i * l + this._x * d, this._y = s * l + this._y * d, this._z = r * l + this._z * d, this._onChangeCallback(), this;
                },
                equals: function(t) {
                    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
                },
                fromArray: function(t, e) {
                    return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
                },
                toArray: function(t, e) {
                    return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
                },
                _onChange: function(t) {
                    return this._onChangeCallback = t, this;
                },
                _onChangeCallback: function() {}
            }), Object.assign(Ct.prototype, {
                isVector3: !0,
                set: function(t, e, i) {
                    return this.x = t, this.y = e, this.z = i, this;
                },
                setScalar: function(t) {
                    return this.x = t, this.y = t, this.z = t, this;
                },
                setX: function(t) {
                    return this.x = t, this;
                },
                setY: function(t) {
                    return this.y = t, this;
                },
                setZ: function(t) {
                    return this.z = t, this;
                },
                setComponent: function(t, e) {
                    switch(t){
                        case 0:
                            this.x = e;
                            break;
                        case 1:
                            this.y = e;
                            break;
                        case 2:
                            this.z = e;
                            break;
                        default:
                            throw new Error("index is out of range: " + t);
                    }
                    return this;
                },
                getComponent: function(t) {
                    switch(t){
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        case 2:
                            return this.z;
                        default:
                            throw new Error("index is out of range: " + t);
                    }
                },
                clone: function() {
                    return new this.constructor(this.x, this.y, this.z);
                },
                copy: function(t) {
                    return this.x = t.x, this.y = t.y, this.z = t.z, this;
                },
                add: function(t, e) {
                    return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this);
                },
                addScalar: function(t) {
                    return this.x += t, this.y += t, this.z += t, this;
                },
                addVectors: function(t, e) {
                    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
                },
                addScaledVector: function(t, e) {
                    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
                },
                sub: function(t, e) {
                    return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this);
                },
                subScalar: function(t) {
                    return this.x -= t, this.y -= t, this.z -= t, this;
                },
                subVectors: function(t, e) {
                    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
                },
                multiply: function(t, e) {
                    return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this);
                },
                multiplyScalar: function(t) {
                    return this.x *= t, this.y *= t, this.z *= t, this;
                },
                multiplyVectors: function(t, e) {
                    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
                },
                applyEuler: (vt = new St, function(t) {
                    return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(vt.setFromEuler(t));
                }),
                applyAxisAngle: function() {
                    var t = new St;
                    return function(e, i) {
                        return this.applyQuaternion(t.setFromAxisAngle(e, i));
                    };
                }(),
                applyMatrix3: function(t) {
                    var e = this.x, i = this.y, s = this.z, r = t.elements;
                    return this.x = r[0] * e + r[3] * i + r[6] * s, this.y = r[1] * e + r[4] * i + r[7] * s, this.z = r[2] * e + r[5] * i + r[8] * s, this;
                },
                applyMatrix4: function(t) {
                    var e = this.x, i = this.y, s = this.z, r = t.elements, n = 1 / (r[3] * e + r[7] * i + r[11] * s + r[15]);
                    return this.x = (r[0] * e + r[4] * i + r[8] * s + r[12]) * n, this.y = (r[1] * e + r[5] * i + r[9] * s + r[13]) * n, this.z = (r[2] * e + r[6] * i + r[10] * s + r[14]) * n, this;
                },
                applyQuaternion: function(t) {
                    var e = this.x, i = this.y, s = this.z, r = t.x, n = t.y, o = t.z, a = t.w, h = a * e + n * s - o * i, c = a * i + o * e - r * s, u = a * s + r * i - n * e, l = -r * e - n * i - o * s;
                    return this.x = h * a + l * -r + c * -o - u * -n, this.y = c * a + l * -n + u * -r - h * -o, this.z = u * a + l * -o + h * -n - c * -r, this;
                },
                project: function(t) {
                    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
                },
                unproject: function(t) {
                    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
                },
                transformDirection: function(t) {
                    var e = this.x, i = this.y, s = this.z, r = t.elements;
                    return this.x = r[0] * e + r[4] * i + r[8] * s, this.y = r[1] * e + r[5] * i + r[9] * s, this.z = r[2] * e + r[6] * i + r[10] * s, this.normalize();
                },
                divide: function(t) {
                    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
                },
                divideScalar: function(t) {
                    return this.multiplyScalar(1 / t);
                },
                min: function(t) {
                    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
                },
                max: function(t) {
                    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
                },
                clamp: function(t, e) {
                    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this;
                },
                clampScalar: function(t, e) {
                    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this;
                },
                clampLength: function(t, e) {
                    var i = this.length();
                    return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)));
                },
                floor: function() {
                    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
                },
                ceil: function() {
                    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
                },
                round: function() {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
                },
                roundToZero: function() {
                    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
                },
                negate: function() {
                    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
                },
                dot: function(t) {
                    return this.x * t.x + this.y * t.y + this.z * t.z;
                },
                lengthSq: function() {
                    return this.x * this.x + this.y * this.y + this.z * this.z;
                },
                length: function() {
                    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
                },
                manhattanLength: function() {
                    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
                },
                normalize: function() {
                    return this.divideScalar(this.length() || 1);
                },
                setLength: function(t) {
                    return this.normalize().multiplyScalar(t);
                },
                lerp: function(t, e) {
                    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
                },
                lerpVectors: function(t, e, i) {
                    return this.subVectors(e, t).multiplyScalar(i).add(t);
                },
                cross: function(t, e) {
                    return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t);
                },
                crossVectors: function(t, e) {
                    var i = t.x, s = t.y, r = t.z, n = e.x, o = e.y, a = e.z;
                    return this.x = s * a - r * o, this.y = r * n - i * a, this.z = i * o - s * n, this;
                },
                projectOnVector: function(t) {
                    var e = t.dot(this) / t.lengthSq();
                    return this.copy(t).multiplyScalar(e);
                },
                projectOnPlane: function() {
                    var t = new Ct;
                    return function(e) {
                        return t.copy(this).projectOnVector(e), this.sub(t);
                    };
                }(),
                reflect: function() {
                    var t = new Ct;
                    return function(e) {
                        return this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)));
                    };
                }(),
                angleTo: function(t) {
                    var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq());
                    return Math.acos(Tt.clamp(e, -1, 1));
                },
                distanceTo: function(t) {
                    return Math.sqrt(this.distanceToSquared(t));
                },
                distanceToSquared: function(t) {
                    var e = this.x - t.x, i = this.y - t.y, s = this.z - t.z;
                    return e * e + i * i + s * s;
                },
                manhattanDistanceTo: function(t) {
                    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
                },
                setFromSpherical: function(t) {
                    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
                },
                setFromSphericalCoords: function(t, e, i) {
                    var s = Math.sin(e) * t;
                    return this.x = s * Math.sin(i), this.y = Math.cos(e) * t, this.z = s * Math.cos(i), this;
                },
                setFromCylindrical: function(t) {
                    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
                },
                setFromCylindricalCoords: function(t, e, i) {
                    return this.x = t * Math.sin(e), this.y = i, this.z = t * Math.cos(e), this;
                },
                setFromMatrixPosition: function(t) {
                    var e = t.elements;
                    return this.x = e[12], this.y = e[13], this.z = e[14], this;
                },
                setFromMatrixScale: function(t) {
                    var e = this.setFromMatrixColumn(t, 0).length(), i = this.setFromMatrixColumn(t, 1).length(), s = this.setFromMatrixColumn(t, 2).length();
                    return this.x = e, this.y = i, this.z = s, this;
                },
                setFromMatrixColumn: function(t, e) {
                    return this.fromArray(t.elements, 4 * e);
                },
                equals: function(t) {
                    return t.x === this.x && t.y === this.y && t.z === this.z;
                },
                fromArray: function(t, e) {
                    return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
                },
                toArray: function(t, e) {
                    return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
                },
                fromBufferAttribute: function(t, e, i) {
                    return void 0 !== i && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
                }
            }), Object.assign(At.prototype, {
                isMatrix4: !0,
                set: function(t, e, i, s, r, n, o, a, h, c, u, l, d, p, y, f) {
                    var m = this.elements;
                    return m[0] = t, m[4] = e, m[8] = i, m[12] = s, m[1] = r, m[5] = n, m[9] = o, m[13] = a, m[2] = h, m[6] = c, m[10] = u, m[14] = l, m[3] = d, m[7] = p, m[11] = y, m[15] = f, this;
                },
                identity: function() {
                    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
                },
                clone: function() {
                    return (new At).fromArray(this.elements);
                },
                copy: function(t) {
                    var e = this.elements, i = t.elements;
                    return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this;
                },
                copyPosition: function(t) {
                    var e = this.elements, i = t.elements;
                    return e[12] = i[12], e[13] = i[13], e[14] = i[14], this;
                },
                extractBasis: function(t, e, i) {
                    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this;
                },
                makeBasis: function(t, e, i) {
                    return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this;
                },
                extractRotation: function() {
                    var t = new Ct;
                    return function(e) {
                        var i = this.elements, s = e.elements, r = 1 / t.setFromMatrixColumn(e, 0).length(), n = 1 / t.setFromMatrixColumn(e, 1).length(), o = 1 / t.setFromMatrixColumn(e, 2).length();
                        return i[0] = s[0] * r, i[1] = s[1] * r, i[2] = s[2] * r, i[3] = 0, i[4] = s[4] * n, i[5] = s[5] * n, i[6] = s[6] * n, i[7] = 0, i[8] = s[8] * o, i[9] = s[9] * o, i[10] = s[10] * o, i[11] = 0, i[12] = 0, i[13] = 0, i[14] = 0, i[15] = 1, this;
                    };
                }(),
                makeRotationFromEuler: function(t) {
                    t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
                    var e = this.elements, i = t.x, s = t.y, r = t.z, n = Math.cos(i), o = Math.sin(i), a = Math.cos(s), h = Math.sin(s), c = Math.cos(r), u = Math.sin(r);
                    if ("XYZ" === t.order) {
                        var l = n * c, d = n * u, p = o * c, y = o * u;
                        e[0] = a * c, e[4] = -a * u, e[8] = h, e[1] = d + p * h, e[5] = l - y * h, e[9] = -o * a, e[2] = y - l * h, e[6] = p + d * h, e[10] = n * a;
                    } else if ("YXZ" === t.order) {
                        var f = a * c, m = a * u, g = h * c, x = h * u;
                        e[0] = f + x * o, e[4] = g * o - m, e[8] = n * h, e[1] = n * u, e[5] = n * c, e[9] = -o, e[2] = m * o - g, e[6] = x + f * o, e[10] = n * a;
                    } else if ("ZXY" === t.order) f = a * c, m = a * u, g = h * c, x = h * u, e[0] = f - x * o, e[4] = -n * u, e[8] = g + m * o, e[1] = m + g * o, e[5] = n * c, e[9] = x - f * o, e[2] = -n * h, e[6] = o, e[10] = n * a;
                    else if ("ZYX" === t.order) l = n * c, d = n * u, p = o * c, y = o * u, e[0] = a * c, e[4] = p * h - d, e[8] = l * h + y, e[1] = a * u, e[5] = y * h + l, e[9] = d * h - p, e[2] = -h, e[6] = o * a, e[10] = n * a;
                    else if ("YZX" === t.order) {
                        var v = n * a, b = n * h, _ = o * a, w = o * h;
                        e[0] = a * c, e[4] = w - v * u, e[8] = _ * u + b, e[1] = u, e[5] = n * c, e[9] = -o * c, e[2] = -h * c, e[6] = b * u + _, e[10] = v - w * u;
                    } else "XZY" === t.order && (v = n * a, b = n * h, _ = o * a, w = o * h, e[0] = a * c, e[4] = -u, e[8] = h * c, e[1] = v * u + w, e[5] = n * c, e[9] = b * u - _, e[2] = _ * u - b, e[6] = o * c, e[10] = w * u + v);
                    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
                },
                makeRotationFromQuaternion: (Pt = new Ct(0, 0, 0), Ot = new Ct(1, 1, 1), function(t) {
                    return this.compose(Pt, t, Ot);
                }),
                lookAt: (wt = new Ct, zt = new Ct, Mt = new Ct, function(t, e, i) {
                    var s = this.elements;
                    return Mt.subVectors(t, e), 0 === Mt.lengthSq() && (Mt.z = 1), Mt.normalize(), wt.crossVectors(i, Mt), 0 === wt.lengthSq() && (1 === Math.abs(i.z) ? Mt.x += 1e-4 : Mt.z += 1e-4, Mt.normalize(), wt.crossVectors(i, Mt)), wt.normalize(), zt.crossVectors(Mt, wt), s[0] = wt.x, s[4] = zt.x, s[8] = Mt.x, s[1] = wt.y, s[5] = zt.y, s[9] = Mt.y, s[2] = wt.z, s[6] = zt.z, s[10] = Mt.z, this;
                }),
                multiply: function(t, e) {
                    return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t);
                },
                premultiply: function(t) {
                    return this.multiplyMatrices(t, this);
                },
                multiplyMatrices: function(t, e) {
                    var i = t.elements, s = e.elements, r = this.elements, n = i[0], o = i[4], a = i[8], h = i[12], c = i[1], u = i[5], l = i[9], d = i[13], p = i[2], y = i[6], f = i[10], m = i[14], g = i[3], x = i[7], v = i[11], b = i[15], _ = s[0], w = s[4], z = s[8], M = s[12], P = s[1], O = s[5], E = s[9], T = s[13], S = s[2], C = s[6], A = s[10], j = s[14], I = s[3], R = s[7], B = s[11], D = s[15];
                    return r[0] = n * _ + o * P + a * S + h * I, r[4] = n * w + o * O + a * C + h * R, r[8] = n * z + o * E + a * A + h * B, r[12] = n * M + o * T + a * j + h * D, r[1] = c * _ + u * P + l * S + d * I, r[5] = c * w + u * O + l * C + d * R, r[9] = c * z + u * E + l * A + d * B, r[13] = c * M + u * T + l * j + d * D, r[2] = p * _ + y * P + f * S + m * I, r[6] = p * w + y * O + f * C + m * R, r[10] = p * z + y * E + f * A + m * B, r[14] = p * M + y * T + f * j + m * D, r[3] = g * _ + x * P + v * S + b * I, r[7] = g * w + x * O + v * C + b * R, r[11] = g * z + x * E + v * A + b * B, r[15] = g * M + x * T + v * j + b * D, this;
                },
                multiplyScalar: function(t) {
                    var e = this.elements;
                    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
                },
                applyToBufferAttribute: function() {
                    var t = new Ct;
                    return function(e) {
                        for(var i = 0, s = e.count; i < s; i++)t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.applyMatrix4(this), e.setXYZ(i, t.x, t.y, t.z);
                        return e;
                    };
                }(),
                determinant: function() {
                    var t = this.elements, e = t[0], i = t[4], s = t[8], r = t[12], n = t[1], o = t[5], a = t[9], h = t[13], c = t[2], u = t[6], l = t[10], d = t[14];
                    return t[3] * (+r * a * u - s * h * u - r * o * l + i * h * l + s * o * d - i * a * d) + t[7] * (+e * a * d - e * h * l + r * n * l - s * n * d + s * h * c - r * a * c) + t[11] * (+e * h * u - e * o * d - r * n * u + i * n * d + r * o * c - i * h * c) + t[15] * (-s * o * c - e * a * u + e * o * l + s * n * u - i * n * l + i * a * c);
                },
                transpose: function() {
                    var t, e = this.elements;
                    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
                },
                setPosition: function(t, e, i) {
                    var s = this.elements;
                    return t.isVector3 ? (s[12] = t.x, s[13] = t.y, s[14] = t.z) : (s[12] = t, s[13] = e, s[14] = i), this;
                },
                getInverse: function(t, e) {
                    var i = this.elements, s = t.elements, r = s[0], n = s[1], o = s[2], a = s[3], h = s[4], c = s[5], u = s[6], l = s[7], d = s[8], p = s[9], y = s[10], f = s[11], m = s[12], g = s[13], x = s[14], v = s[15], b = p * x * l - g * y * l + g * u * f - c * x * f - p * u * v + c * y * v, _ = m * y * l - d * x * l - m * u * f + h * x * f + d * u * v - h * y * v, w = d * g * l - m * p * l + m * c * f - h * g * f - d * c * v + h * p * v, z = m * p * u - d * g * u - m * c * y + h * g * y + d * c * x - h * p * x, M = r * b + n * _ + o * w + a * z;
                    if (0 === M) {
                        var P = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
                        if (!0 === e) throw new Error(P);
                        return console.warn(P), this.identity();
                    }
                    var O = 1 / M;
                    return i[0] = b * O, i[1] = (g * y * a - p * x * a - g * o * f + n * x * f + p * o * v - n * y * v) * O, i[2] = (c * x * a - g * u * a + g * o * l - n * x * l - c * o * v + n * u * v) * O, i[3] = (p * u * a - c * y * a - p * o * l + n * y * l + c * o * f - n * u * f) * O, i[4] = _ * O, i[5] = (d * x * a - m * y * a + m * o * f - r * x * f - d * o * v + r * y * v) * O, i[6] = (m * u * a - h * x * a - m * o * l + r * x * l + h * o * v - r * u * v) * O, i[7] = (h * y * a - d * u * a + d * o * l - r * y * l - h * o * f + r * u * f) * O, i[8] = w * O, i[9] = (m * p * a - d * g * a - m * n * f + r * g * f + d * n * v - r * p * v) * O, i[10] = (h * g * a - m * c * a + m * n * l - r * g * l - h * n * v + r * c * v) * O, i[11] = (d * c * a - h * p * a - d * n * l + r * p * l + h * n * f - r * c * f) * O, i[12] = z * O, i[13] = (d * g * o - m * p * o + m * n * y - r * g * y - d * n * x + r * p * x) * O, i[14] = (m * c * o - h * g * o - m * n * u + r * g * u + h * n * x - r * c * x) * O, i[15] = (h * p * o - d * c * o + d * n * u - r * p * u - h * n * y + r * c * y) * O, this;
                },
                scale: function(t) {
                    var e = this.elements, i = t.x, s = t.y, r = t.z;
                    return e[0] *= i, e[4] *= s, e[8] *= r, e[1] *= i, e[5] *= s, e[9] *= r, e[2] *= i, e[6] *= s, e[10] *= r, e[3] *= i, e[7] *= s, e[11] *= r, this;
                },
                getMaxScaleOnAxis: function() {
                    var t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], s = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
                    return Math.sqrt(Math.max(e, i, s));
                },
                makeTranslation: function(t, e, i) {
                    return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this;
                },
                makeRotationX: function(t) {
                    var e = Math.cos(t), i = Math.sin(t);
                    return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this;
                },
                makeRotationY: function(t) {
                    var e = Math.cos(t), i = Math.sin(t);
                    return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this;
                },
                makeRotationZ: function(t) {
                    var e = Math.cos(t), i = Math.sin(t);
                    return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
                },
                makeRotationAxis: function(t, e) {
                    var i = Math.cos(e), s = Math.sin(e), r = 1 - i, n = t.x, o = t.y, a = t.z, h = r * n, c = r * o;
                    return this.set(h * n + i, h * o - s * a, h * a + s * o, 0, h * o + s * a, c * o + i, c * a - s * n, 0, h * a - s * o, c * a + s * n, r * a * a + i, 0, 0, 0, 0, 1), this;
                },
                makeScale: function(t, e, i) {
                    return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
                },
                makeShear: function(t, e, i) {
                    return this.set(1, e, i, 0, t, 1, i, 0, t, e, 1, 0, 0, 0, 0, 1), this;
                },
                compose: function(t, e, i) {
                    var s = this.elements, r = e._x, n = e._y, o = e._z, a = e._w, h = r + r, c = n + n, u = o + o, l = r * h, d = r * c, p = r * u, y = n * c, f = n * u, m = o * u, g = a * h, x = a * c, v = a * u, b = i.x, _ = i.y, w = i.z;
                    return s[0] = (1 - (y + m)) * b, s[1] = (d + v) * b, s[2] = (p - x) * b, s[3] = 0, s[4] = (d - v) * _, s[5] = (1 - (l + m)) * _, s[6] = (f + g) * _, s[7] = 0, s[8] = (p + x) * w, s[9] = (f - g) * w, s[10] = (1 - (l + y)) * w, s[11] = 0, s[12] = t.x, s[13] = t.y, s[14] = t.z, s[15] = 1, this;
                },
                decompose: (bt = new Ct, _t = new At, function(t, e, i) {
                    var s = this.elements, r = bt.set(s[0], s[1], s[2]).length(), n = bt.set(s[4], s[5], s[6]).length(), o = bt.set(s[8], s[9], s[10]).length();
                    this.determinant() < 0 && (r = -r), t.x = s[12], t.y = s[13], t.z = s[14], _t.copy(this);
                    var a = 1 / r, h = 1 / n, c = 1 / o;
                    return _t.elements[0] *= a, _t.elements[1] *= a, _t.elements[2] *= a, _t.elements[4] *= h, _t.elements[5] *= h, _t.elements[6] *= h, _t.elements[8] *= c, _t.elements[9] *= c, _t.elements[10] *= c, e.setFromRotationMatrix(_t), i.x = r, i.y = n, i.z = o, this;
                }),
                makePerspective: function(t, e, i, s, r, n) {
                    void 0 === n && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
                    var o = this.elements, a = 2 * r / (e - t), h = 2 * r / (i - s), c = (e + t) / (e - t), u = (i + s) / (i - s), l = -(n + r) / (n - r), d = -2 * n * r / (n - r);
                    return o[0] = a, o[4] = 0, o[8] = c, o[12] = 0, o[1] = 0, o[5] = h, o[9] = u, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = l, o[14] = d, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this;
                },
                makeOrthographic: function(t, e, i, s, r, n) {
                    var o = this.elements, a = 1 / (e - t), h = 1 / (i - s), c = 1 / (n - r), u = (e + t) * a, l = (i + s) * h, d = (n + r) * c;
                    return o[0] = 2 * a, o[4] = 0, o[8] = 0, o[12] = -u, o[1] = 0, o[5] = 2 * h, o[9] = 0, o[13] = -l, o[2] = 0, o[6] = 0, o[10] = -2 * c, o[14] = -d, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this;
                },
                equals: function(t) {
                    for(var e = this.elements, i = t.elements, s = 0; s < 16; s++)if (e[s] !== i[s]) return !1;
                    return !0;
                },
                fromArray: function(t, e) {
                    void 0 === e && (e = 0);
                    for(var i = 0; i < 16; i++)this.elements[i] = t[i + e];
                    return this;
                },
                toArray: function(t, e) {
                    void 0 === t && (t = []), void 0 === e && (e = 0);
                    var i = this.elements;
                    return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t;
                }
            }), jt.RotationOrders = [
                "XYZ",
                "YZX",
                "ZXY",
                "XZY",
                "YXZ",
                "ZYX"
            ], jt.DefaultOrder = "XYZ", Object.defineProperties(jt.prototype, {
                x: {
                    get: function() {
                        return this._x;
                    },
                    set: function(t) {
                        this._x = t, this._onChangeCallback();
                    }
                },
                y: {
                    get: function() {
                        return this._y;
                    },
                    set: function(t) {
                        this._y = t, this._onChangeCallback();
                    }
                },
                z: {
                    get: function() {
                        return this._z;
                    },
                    set: function(t) {
                        this._z = t, this._onChangeCallback();
                    }
                },
                order: {
                    get: function() {
                        return this._order;
                    },
                    set: function(t) {
                        this._order = t, this._onChangeCallback();
                    }
                }
            }), Object.assign(jt.prototype, {
                isEuler: !0,
                set: function(t, e, i, s) {
                    return this._x = t, this._y = e, this._z = i, this._order = s || this._order, this._onChangeCallback(), this;
                },
                clone: function() {
                    return new this.constructor(this._x, this._y, this._z, this._order);
                },
                copy: function(t) {
                    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
                },
                setFromRotationMatrix: function(t, e, i) {
                    var s = Tt.clamp, r = t.elements, n = r[0], o = r[4], a = r[8], h = r[1], c = r[5], u = r[9], l = r[2], d = r[6], p = r[10];
                    return "XYZ" === (e = e || this._order) ? (this._y = Math.asin(s(a, -1, 1)), Math.abs(a) < .99999 ? (this._x = Math.atan2(-u, p), this._z = Math.atan2(-o, n)) : (this._x = Math.atan2(d, c), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-s(u, -1, 1)), Math.abs(u) < .99999 ? (this._y = Math.atan2(a, p), this._z = Math.atan2(h, c)) : (this._y = Math.atan2(-l, n), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(s(d, -1, 1)), Math.abs(d) < .99999 ? (this._y = Math.atan2(-l, p), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(h, n))) : "ZYX" === e ? (this._y = Math.asin(-s(l, -1, 1)), Math.abs(l) < .99999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(h, n)) : (this._x = 0, this._z = Math.atan2(-o, c))) : "YZX" === e ? (this._z = Math.asin(s(h, -1, 1)), Math.abs(h) < .99999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-l, n)) : (this._x = 0, this._y = Math.atan2(a, p))) : "XZY" === e ? (this._z = Math.asin(-s(o, -1, 1)), Math.abs(o) < .99999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(a, n)) : (this._x = Math.atan2(-u, p), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e), this._order = e, !1 !== i && this._onChangeCallback(), this;
                },
                setFromQuaternion: function() {
                    var t = new At;
                    return function(e, i, s) {
                        return t.makeRotationFromQuaternion(e), this.setFromRotationMatrix(t, i, s);
                    };
                }(),
                setFromVector3: function(t, e) {
                    return this.set(t.x, t.y, t.z, e || this._order);
                },
                reorder: (Et = new St, function(t) {
                    return Et.setFromEuler(this), this.setFromQuaternion(Et, t);
                }),
                equals: function(t) {
                    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
                },
                fromArray: function(t) {
                    return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this;
                },
                toArray: function(t, e) {
                    return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
                },
                toVector3: function(t) {
                    return t ? t.set(this._x, this._y, this._z) : new Ct(this._x, this._y, this._z);
                },
                _onChange: function(t) {
                    return this._onChangeCallback = t, this;
                },
                _onChangeCallback: function() {}
            });
            const It = {
                toScreenPos: function() {
                    var t = new Ct;
                    return function(e, i, s) {
                        return t.copy(e), t.project(i), t.x = Math.round((t.x + 1) * s.width / 2), t.y = Math.round((1 - t.y) * s.height / 2), t.z = 0, t;
                    };
                }(),
                toSpacePos: function() {
                    var t, e = new Ct, i = new Ct;
                    return function(s, r, n) {
                        return e.set(s.x / n.width * 2 - 1, -s.y / n.height * 2 + 1, .5), e.unproject(r), i.copy(e.sub(r.position).normalize()), t = -r.position.z / i.z, e.copy(r.position), e.add(i.multiplyScalar(t)), e;
                    };
                }()
            }, Rt = {
                initValue: function(t, e) {
                    return null != t && null != t ? t : e;
                },
                isArray: function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t);
                },
                destroyArray: function(t) {
                    t.length = 0;
                },
                destroyObject: function(t) {
                    for(var e in t)delete t[e];
                },
                isUndefined: function() {
                    for(var t in arguments){
                        var e = arguments[t];
                        if (void 0 !== e) return !1;
                    }
                    return !0;
                },
                setVectorByObj: function(t, e) {
                    void 0 !== e.x && (t.position.x = e.x), void 0 !== e.y && (t.position.y = e.y), void 0 !== e.z && (t.position.z = e.z), void 0 !== e.vx && (t.velocity.x = e.vx), void 0 !== e.vy && (t.velocity.y = e.vy), void 0 !== e.vz && (t.velocity.z = e.vz), void 0 !== e.ax && (t.acceleration.x = e.ax), void 0 !== e.ay && (t.acceleration.y = e.ay), void 0 !== e.az && (t.acceleration.z = e.az), void 0 !== e.p && t.position.copy(e.p), void 0 !== e.v && t.velocity.copy(e.v), void 0 !== e.a && t.acceleration.copy(e.a), void 0 !== e.position && t.position.copy(e.position), void 0 !== e.velocity && t.velocity.copy(e.velocity), void 0 !== e.accelerate && t.acceleration.copy(e.accelerate);
                },
                setPrototypeByObj: function(t, e, i) {
                    for(var s in e)t.hasOwnProperty(s) && (i ? i.indexOf(s) < 0 && (t[s] = this._getValue(e[s])) : t[s] = this._getValue(e[s]));
                    return t;
                },
                _getValue: function(t) {
                    return "Span" === t.constructor.type ? t.getValue() : t;
                }
            };
            var Bt = i(570);
            const Dt = i.n(Bt)();
            function Vt(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), i.push.apply(i, s);
                }
                return i;
            }
            function Ft(t) {
                for(var e = 1; e < arguments.length; e++){
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Vt(Object(i), !0).forEach(function(e) {
                        mt(t, e, i[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Vt(Object(i)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                    });
                }
                return t;
            }
            const kt = (t, e)=>Ft(Ft({}, t), e), Zt = {
                randomAToB: function(t, e, i) {
                    return i ? (Math.random() * (e - t) >> 0) + t : t + Math.random() * (e - t);
                },
                randomFloating: function(t, e, i) {
                    return this.randomAToB(t - e, t + e, i);
                },
                randomZone: function(t) {},
                degreeTransform: function(t) {
                    return t * R / 180;
                },
                toColor16: function(t) {
                    return "#" + t.toString(16);
                },
                randomColor: function() {
                    return "#" + ("00000" + (16777216 * Math.random() << 0).toString(16)).slice(-6);
                },
                lerp: function(t, e, i) {
                    return e + (t - e) * i;
                },
                getNormal: function(t, e) {
                    return 0 == t.x && 0 == t.y ? 0 == t.z ? e.set(1, 0, 1) : e.set(1, 1, -t.y / t.z) : 0 == t.x ? e.set(1, 0, 1) : e.set(-t.y / t.x, 1, 1), e.normalize();
                },
                axisRotate: function(t, e, i, s) {
                    var r = Math.cos(s), n = Math.sin(s), o = i.dot(e) * (1 - r);
                    t.copy(i), t.cross(e).scalar(n), t.addValue(e.x * r, e.y * r, e.z * r), t.addValue(i.x * o, i.y * o, i.z * o);
                }
            };
            class Ut {
                constructor(t, e, i){
                    this._isArray = !1, this.type = "Span", Rt.isArray(t) ? (this._isArray = !0, this.a = t) : (this.a = Rt.initValue(t, 1), this.b = Rt.initValue(e, this.a), this._center = Rt.initValue(i, !1));
                }
                getValue(t) {
                    return this._isArray ? this.a[this.a.length * Math.random() >> 0] : this._center ? Zt.randomFloating(this.a, this.b, t) : Zt.randomAToB(this.a, this.b, t);
                }
            }
            const Nt = (t, e, i)=>t instanceof Ut ? t : void 0 === e ? new Ut(t) : void 0 === i ? new Ut(t, e) : new Ut(t, e, i);
            var Lt = i(534), qt = i.n(Lt);
            class Yt extends Ut {
                constructor(t){
                    super(), this.type = "ArraySpan", this.items = Array.isArray(t) ? t : [
                        t
                    ];
                }
                getValue() {
                    return qt()(this.items);
                }
            }
            const Gt = (t)=>t ? t instanceof Yt ? t : new Yt(t) : null;
            class Xt extends Ut {
                constructor(t){
                    super(), this.type = "ColorSpan", this.shouldRandomize = "random" === t, this.colors = Array.isArray(t) ? t : [
                        t
                    ];
                }
                getValue() {
                    return this.shouldRandomize ? Zt.randomColor() : qt()(this.colors);
                }
            }
            const Jt = (t)=>(t || (console.warn(`Invalid colors argument ${t} passed to createColorSpan. Defaulting to 'random'.`), t = "random"), t instanceof Xt ? t : new Xt(t));
            class Qt {
                constructor(t, e, i, s, r, n){
                    this.type = "Box", this.x = t, this.y = e, this.z = i, this.width = s, this.height = r, this.depth = n, this.bottom = this.y + this.height, this.right = this.x + this.width, this.right = this.x + this.width;
                }
                contains(t, e, i) {
                    return t <= this.right && t >= this.x && e <= this.bottom && e >= this.y && i <= this.depth && i >= this.z;
                }
            }
            const Ht = "EULER", $t = "RUNGE_KUTTA_2", Wt = "RUNGE_KUTTA_4", Kt = "VERLET", te = (t, e, i, s = Ht)=>{
                ((t, e, i)=>{
                    t.sleep || (t.old.position.copy(t.position), t.old.velocity.copy(t.velocity), t.acceleration.scalar(1 / t.mass), t.velocity.add(t.acceleration.scalar(e)), t.position.add(t.old.velocity.scalar(e)), i && t.velocity.scalar(Math.pow(i, e / dt)), t.acceleration.clear());
                })(t, e, i);
            };
            class ee extends Ct {
                clear() {
                    return this.x = 0, this.y = 0, this.z = 0, this;
                }
                scalar(t) {
                    return this.x *= t, this.y *= t, this.z *= t, this;
                }
                addValue(t, e, i) {
                    return this.x += t, this.y += e, this.z += i, this;
                }
                toString() {
                    return "x:" + this.x + "y:" + this.y + "z:" + this.z;
                }
                eulerFromDir(t) {
                    return (new jt).setFromVector3(t);
                }
            }
            class ie {
                constructor(t, e, i){
                    this.type = "Polar3D", this.radius = t || 1, this.phi = i || 0, this.theta = e || 0;
                }
                set(t, e, i) {
                    return this.radius = t || 1, this.phi = i || 0, this.theta = e || 0, this;
                }
                setRadius(t) {
                    return this.radius = t, this;
                }
                setPhi(t) {
                    return this.phi = t, this;
                }
                setTheta(t) {
                    return this.theta = t, this;
                }
                copy(t) {
                    return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
                }
                toVector3D() {
                    return new ee(this.getX(), this.getY(), this.getZ());
                }
                getX() {
                    return this.radius * Math.sin(this.theta) * Math.cos(this.phi);
                }
                getY() {
                    return -this.radius * Math.sin(this.theta) * Math.sin(this.phi);
                }
                getZ() {
                    return this.radius * Math.cos(this.theta);
                }
                normalize() {
                    return this.radius = 1, this;
                }
                equals(t) {
                    return t.radius === this.radius && t.phi === this.phi && t.theta === this.theta;
                }
                clear() {
                    return this.radius = 0, this.phi = 0, this.theta = 0, this;
                }
                clone() {
                    return new ie(this.radius, this.phi, this.theta);
                }
            }
            class se {
                constructor(t){
                    this.id = `particle-${Dt()}`, this.type = "Particle", this.life = ut, this.age = 0, this.energy = 1, this.dead = !1, this.sleep = !1, this.body = null, this.parent = null, this.mass = 1, this.radius = 10, this.alpha = 1, this.scale = 1, this.useColor = !1, this.useAlpha = !1, this.easing = lt, this.position = new ee, this.velocity = new ee, this.acceleration = new ee, this.old = {}, this.old.position = this.position.clone(), this.old.velocity = this.velocity.clone(), this.old.acceleration = this.acceleration.clone(), this.behaviours = [], this.transform = {}, this.color = {
                        r: 0,
                        g: 0,
                        b: 0
                    }, this.rotation = new ee, this.distanceToCamera = 0, Rt.setPrototypeByObj(this, t);
                }
                getDirection() {
                    return Math.atan2(this.velocity.x, -this.velocity.y) * (180 / R);
                }
                reset() {
                    return this.life = ut, this.age = 0, this.energy = 1, this.dead = !1, this.sleep = !1, this.body = null, this.parent = null, this.mass = 1, this.radius = 10, this.alpha = 1, this.scale = 1, this.useColor = !1, this.useAlpha = !1, this.easing = lt, this.position.set(0, 0, 0), this.velocity.set(0, 0, 0), this.acceleration.set(0, 0, 0), this.old.position.set(0, 0, 0), this.old.velocity.set(0, 0, 0), this.old.acceleration.set(0, 0, 0), this.color.r = 0, this.color.g = 0, this.color.b = 0, this.rotation.clear(), Rt.destroyObject(this.transform), this.removeAllBehaviours(), this;
                }
                update(t, e) {
                    if (!this.sleep) {
                        this.age += t;
                        let i = this.behaviours.length;
                        for(; i--;)this.behaviours[i].applyBehaviour(this, t, e);
                    }
                    if (this.age >= this.life) this.destroy();
                    else {
                        const t = this.easing(this.age / this.life);
                        this.energy = Math.max(1 - t, 0);
                    }
                }
                addBehaviour(t) {
                    this.behaviours.push(t), t.initialize(this);
                }
                addBehaviours(t) {
                    let e = t.length;
                    for(; e--;)this.addBehaviour(t[e]);
                }
                removeBehaviour(t) {
                    const e = this.behaviours.indexOf(t);
                    e > -1 && this.behaviours.splice(e, 1);
                }
                removeAllBehaviours() {
                    Rt.destroyArray(this.behaviours);
                }
                destroy() {
                    this.removeAllBehaviours(), this.energy = 0, this.dead = !0, this.parent = null;
                }
            }
            class re {
                constructor(){
                    this.type = "Pool", this.cID = 0, this.list = {};
                }
                create(t, ...e) {
                    if (!this.canCreateNewObject(t)) throw new Error("The pool is unable to create or clone the object supplied");
                    return this.cID++, this.canInstantiateObject(t) ? new t(...e) : this.canCloneObject(t) ? t.clone() : void 0;
                }
                canInstantiateObject(t) {
                    return "function" == typeof t;
                }
                canCloneObject(t) {
                    return t.clone && "function" == typeof t.clone;
                }
                canCreateNewObject(t) {
                    return !(!this.canInstantiateObject(t) && !this.canCloneObject(t));
                }
                getCount() {
                    var t = 0;
                    for(var e in this.list)t += this.list[e].length;
                    return t++;
                }
                get(t, ...e) {
                    var i, s = t.__puid || xt.id(t);
                    return (i = this.list[s] && this.list[s].length > 0 ? this.list[s].pop() : this.create(t, ...e)).__puid = t.__puid || s, i;
                }
                expire(t) {
                    return this._getList(t.__puid).push(t);
                }
                destroy() {
                    for(var t in this.list)this.list[t].length = 0, delete this.list[t];
                }
                _getList(t) {
                    return t = t || "default", this.list[t] || (this.list[t] = []), this.list[t];
                }
            }
            const ne = class {
                constructor(){
                    this.listeners = null;
                }
                set listeners(t) {
                    this._listeners = t;
                }
                get listeners() {
                    return this._listeners;
                }
                addEventListener(t, e) {
                    return this.listeners ? this.removeEventListener(t, e) : this.listeners = {}, this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(e), e;
                }
                removeEventListener(t, e) {
                    if (this.listeners && this.listeners[t]) {
                        for(var i = this.listeners[t], s = 0, r = i.length; s < r; s++)if (i[s] == e) {
                            1 == r ? delete this.listeners[t] : i.splice(s, 1);
                            break;
                        }
                    }
                }
                removeAllEventListeners(t) {
                    t ? this.listeners && delete this.listeners[t] : this.listeners = null;
                }
                dispatchEvent(t, e) {
                    var i = !1, s = this.listeners;
                    if (t && s) {
                        var r = s[t];
                        if (!r) return i;
                        for(var n, o = (r = r.slice()).length; o--;)n = r[o], i = i || n(e);
                    }
                    return !!i;
                }
                hasEventListener(t) {
                    var e = this.listeners;
                    return !(!e || !e[t]);
                }
            }, oe = "SYSTEM_UPDATE", ae = "PARTICLE_CREATED", he = "PARTICLE_UPDATE", ce = "PARTICLE_DEAD";
            class ue {
                constructor(t = "Initializer", e = !0){
                    this.type = t, this.isEnabled = e;
                }
                init(t, e) {
                    this.isEnabled && (e ? (this.initialize(e), e.hasBeenInitialized = !0) : (this.initialize(t), t.hasBeenInitialized = !0));
                }
                reset() {}
                initialize(t) {}
                static requiresWebGlApi() {
                    return !1;
                }
                static fromJSON(t) {}
            }
            class le extends ue {
                constructor(t, e, i, s = !0){
                    super(m, s), this.body = Gt(t), this.w = e, this.h = i || e;
                }
                initialize(t) {
                    var e = this.body.getValue();
                    this.w ? t.body = {
                        width: this.w,
                        height: this.h,
                        body: e
                    } : t.body = e;
                }
                static fromJSON(t) {
                    const { body: e, width: i, height: s, isEnabled: r = !0 } = t;
                    return new le(e, i, s, r);
                }
            }
            function de(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), i.push.apply(i, s);
                }
                return i;
            }
            function pe(t) {
                for(var e = 1; e < arguments.length; e++){
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? de(Object(i), !0).forEach(function(e) {
                        mt(t, e, i[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : de(Object(i)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                    });
                }
                return t;
            }
            const ye = {
                AdditiveBlending: 2,
                CustomBlending: 5,
                MultiplyBlending: 4,
                NoBlending: 0,
                NormalBlending: 1,
                SubtractiveBlending: 3
            }, fe = {
                color: 16711680,
                blending: 2,
                fog: !0
            }, me = pe(pe({}, fe), {}, {
                blending: "AdditiveBlending"
            });
            function ge(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), i.push.apply(i, s);
                }
                return i;
            }
            function xe(t) {
                for(var e = 1; e < arguments.length; e++){
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ge(Object(i), !0).forEach(function(e) {
                        mt(t, e, i[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ge(Object(i)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                    });
                }
                return t;
            }
            class ve extends ue {
                constructor(t, e, i = fe, s = !0){
                    super(g, s);
                    const { Sprite: r, SpriteMaterial: n, TextureLoader: o } = t;
                    this.materialProperties = kt(fe, i), (new o).load(e, (t)=>{
                        this.texture = t, this.material = new n(xe(xe({}, {
                            map: t
                        }), this.materialProperties)), this.sprite = new r(this.material);
                    }, void 0, (t)=>{
                        throw new Error(t);
                    });
                }
                initialize(t) {
                    t.body = this.sprite;
                }
                static fromJSON(t, e) {
                    const { texture: i, materialProperties: s = me, isEnabled: r = !0 } = t;
                    return new ve(e, i, kt(me, ((t)=>{
                        const { blending: e } = t;
                        return xe(xe({}, t), {}, {
                            blending: e ? ye[e] : ye[me.blending]
                        });
                    })(s)), r);
                }
            }
            const be = new jt, _e = {
                particleEuler: null,
                initialize: function(t, e, i) {
                    let s = i.length;
                    for(; s--;)i[s].init(t, e);
                    t.bindEmitter && this.bindEmitter(t, e);
                },
                bindEmitter: function(t, e) {
                    const { rotation: { x: i, y: s, z: r } } = t;
                    e.position.add(t.position), e.velocity.add(t.velocity), e.acceleration.add(t.acceleration), e.velocity.applyEuler(be.set(i, s, r));
                }
            };
            class we extends ue {
                constructor(t, e, i, s = !0){
                    super(v, s), this.lifePan = Nt(t, e, i);
                }
                initialize(t) {
                    this.lifePan.a == 1 / 0 || "infi" == this.lifePan.a ? t.life = 1 / 0 : t.life = this.lifePan.getValue();
                }
                static fromJSON(t) {
                    const { min: e, max: i, center: s = !1, isEnabled: r = !0 } = t;
                    return new we(e, i, s, r);
                }
            }
            class ze extends ue {
                constructor(t, e, i = !1, s = !0){
                    super(b, s), this.massPan = Nt(t, e, i);
                }
                initialize(t) {
                    t.mass = this.massPan.getValue();
                }
                static fromJSON(t) {
                    const { min: e, max: i, center: s = !1, isEnabled: r = !0 } = t;
                    return new ze(e, i, s, r);
                }
            }
            class Me {
                constructor(t = "Zone"){
                    this.type = t, this.vector = new ee(0, 0, 0), this.random = 0, this.crossType = "dead", this.log = !0, this.supportsCrossing = !0;
                }
                getPosition() {
                    return null;
                }
                crossing(t) {
                    if (!this.supportsCrossing) return console.warn(`${this.constructor.name} does not support the crossing method`);
                    switch(this.crossType){
                        case "bound":
                            this._bound(t);
                            break;
                        case "cross":
                            this._cross(t);
                            break;
                        case "dead":
                            this._dead(t);
                    }
                }
                isBoxZone() {
                    return !1;
                }
                isLineZone() {
                    return !1;
                }
                isMeshZone() {
                    return !1;
                }
                isPointZone() {
                    return !1;
                }
                isScreenZone() {
                    return !1;
                }
                isSphereZone() {
                    return !1;
                }
                _dead(t) {}
                _bound(t) {}
                _cross(t) {}
            }
            class Pe extends Me {
                constructor(t, e, i, s, r, n){
                    var o, a, h, c, u;
                    super(E), Rt.isUndefined(e, i, s, r, n) ? (o = a = h = 0, c = u = s = t || 100) : Rt.isUndefined(s, r, n) ? (o = a = h = 0, c = t, u = e, s = i) : (o = t, a = e, h = i, c = s, u = r, s = n), this.x = o, this.y = a, this.z = h, this.width = c, this.height = u, this.depth = s, this.friction = .85, this.max = 6;
                }
                isBoxZone() {
                    return !0;
                }
                getPosition() {
                    return this.vector.x = this.x + Zt.randomAToB(-0.5, .5) * this.width, this.vector.y = this.y + Zt.randomAToB(-0.5, .5) * this.height, this.vector.z = this.z + Zt.randomAToB(-0.5, .5) * this.depth, this.vector;
                }
                _dead(t) {
                    (t.position.x + t.radius < this.x - this.width / 2 || t.position.x - t.radius > this.x + this.width / 2) && (t.dead = !0), (t.position.y + t.radius < this.y - this.height / 2 || t.position.y - t.radius > this.y + this.height / 2) && (t.dead = !0), (t.position.z + t.radius < this.z - this.depth / 2 || t.position.z - t.radius > this.z + this.depth / 2) && (t.dead = !0);
                }
                _bound(t) {
                    t.position.x - t.radius < this.x - this.width / 2 ? (t.position.x = this.x - this.width / 2 + t.radius, t.velocity.x *= -this.friction, this._static(t, "x")) : t.position.x + t.radius > this.x + this.width / 2 && (t.position.x = this.x + this.width / 2 - t.radius, t.velocity.x *= -this.friction, this._static(t, "x")), t.position.y - t.radius < this.y - this.height / 2 ? (t.position.y = this.y - this.height / 2 + t.radius, t.velocity.y *= -this.friction, this._static(t, "y")) : t.position.y + t.radius > this.y + this.height / 2 && (t.position.y = this.y + this.height / 2 - t.radius, t.velocity.y *= -this.friction, this._static(t, "y")), t.position.z - t.radius < this.z - this.depth / 2 ? (t.position.z = this.z - this.depth / 2 + t.radius, t.velocity.z *= -this.friction, this._static(t, "z")) : t.position.z + t.radius > this.z + this.depth / 2 && (t.position.z = this.z + this.depth / 2 - t.radius, t.velocity.z *= -this.friction, this._static(t, "z"));
                }
                _static(t, e) {
                    t.velocity[e] * t.acceleration[e] > 0 || Math.abs(t.velocity[e]) < .0167 * Math.abs(t.acceleration[e]) * this.max && (t.velocity[e] = 0, t.acceleration[e] = 0);
                }
                _cross(t) {
                    t.position.x + t.radius < this.x - this.width / 2 && t.velocity.x <= 0 ? t.position.x = this.x + this.width / 2 + t.radius : t.position.x - t.radius > this.x + this.width / 2 && t.velocity.x >= 0 && (t.position.x = this.x - this.width / 2 - t.radius), t.position.y + t.radius < this.y - this.height / 2 && t.velocity.y <= 0 ? t.position.y = this.y + this.height / 2 + t.radius : t.position.y - t.radius > this.y + this.height / 2 && t.velocity.y >= 0 && (t.position.y = this.y - this.height / 2 - t.radius), t.position.z + t.radius < this.z - this.depth / 2 && t.velocity.z <= 0 ? t.position.z = this.z + this.depth / 2 + t.radius : t.position.z - t.radius > this.z + this.depth / 2 && t.velocity.z >= 0 && (t.position.z = this.z - this.depth / 2 - t.radius);
                }
            }
            class Oe extends Me {
                constructor(t, e, i, s, r, n){
                    super(T), t instanceof ee ? (this.x1 = t.x, this.y1 = t.y, this.z1 = t.z, this.x2 = s.x, this.y2 = s.y, this.z2 = s.z) : (this.x1 = t, this.y1 = e, this.z1 = i, this.x2 = s, this.y2 = r, this.z2 = n), this.supportsCrossing = !1;
                }
                isLineZone() {
                    return !0;
                }
                getPosition() {
                    return this.random = Math.random(), this.vector.x = this.x1 + this.random * (this.x2 - this.x1), this.vector.y = this.y1 + this.random * (this.y2 - this.y1), this.vector.z = this.z1 + this.random * (this.z2 - this.z1), this.vector;
                }
            }
            class Ee extends Me {
                constructor(t, e = 1, i){
                    if (super(S), this.geometry = null, this.scale = e, this.supportsCrossing = !1, t.type && "Geometry" === t.type && (this.geometry = t), t.geometry && (this.geometry = t.geometry), !this.geometry) throw new Error("MeshZone unable to set geometry from the supplied bounds");
                    this.geometry.isBufferGeometry && (this.geometry = (new i).fromBufferGeometry(this.geometry));
                }
                isMeshZone() {
                    return !0;
                }
                getPosition() {
                    const t = this.geometry.vertices, e = t[t.length * Math.random() >> 0];
                    return this.vector.x = e.x * this.scale, this.vector.y = e.y * this.scale, this.vector.z = e.z * this.scale, this.vector;
                }
            }
            class Te extends Me {
                constructor(t, e, i){
                    var s;
                    super(C), s = Rt.isUndefined(t, e, i) ? 0 : t, this.x = s, this.y = s, this.z = s, this.supportsCrossing = !1;
                }
                isPointZone() {
                    return !0;
                }
                getPosition() {
                    return this.vector.x = this.x, this.vector.y = this.y, this.vector.z = this.z, this.vector;
                }
            }
            class Se extends Me {
                constructor(t, e, i, s){
                    super("ScreenZone"), this.camera = t, this.renderer = e, this.dis = i || 20, s = s || "1234";
                    for(var r = 1; r < 5; r++)this["d" + r] = s.indexOf(r + "") >= 0;
                }
                isScreenZone() {
                    return !0;
                }
                _dead(t) {
                    var e = It.toScreenPos(t.position, this.camera, this.renderer.domElement), i = this.renderer.domElement;
                    (e.y + t.radius < -this.dis && this.d1 || e.y - t.radius > i.height + this.dis && this.d3) && (t.dead = !0), (e.x + t.radius < -this.dis && this.d4 || e.x - t.radius > i.width + this.dis && this.d2) && (t.dead = !0);
                }
                _bound(t) {
                    var e = It.toScreenPos(t.position, this.camera, this.renderer.domElement), i = this.renderer.domElement;
                    (e.y + t.radius < -this.dis || e.y - t.radius > i.height + this.dis) && (t.velocity.y *= -1), (e.x + t.radius < -this.dis || e.x - t.radius > i.width + this.dis) && (t.velocity.y *= -1);
                }
            }
            var Ce, Ae, je, Ie, Re, Be, De, Ve;
            Se.prototype.getPosition = (Ae = new ee, function() {
                return Ce = this.renderer.domElement, Ae.x = Math.random() * Ce.width, Ae.y = Math.random() * Ce.height, this.vector.copy(It.toSpacePos(Ae, this.camera, Ce)), this.vector;
            }), Se.prototype._cross = function() {
                var t = new ee;
                return function(e) {
                    var i = It.toScreenPos(e.position, this.camera, this.renderer.domElement), s = this.renderer.domElement;
                    i.y + e.radius < -this.dis ? (t.x = i.x, t.y = s.height + this.dis + e.radius, e.position.y = It.toSpacePos(t, this.camera, s).y) : i.y - e.radius > s.height + this.dis && (t.x = i.x, t.y = -this.dis - e.radius, e.position.y = It.toSpacePos(t, this.camera, s).y), i.x + e.radius < -this.dis ? (t.y = i.y, t.x = s.width + this.dis + e.radius, e.position.x = It.toSpacePos(t, this.camera, s).x) : i.x - e.radius > s.width + this.dis && (t.y = i.y, t.x = -this.dis - e.radius, e.position.x = It.toSpacePos(t, this.camera, s).x);
                };
            }();
            class Fe extends Me {
                constructor(t, e, i, s){
                    let r, n, o, a;
                    super(A), Rt.isUndefined(e, i, s) ? (r = n = o = 0, a = t || 100) : (r = t, n = e, o = i, a = s), this.x = r, this.y = r, this.z = r, this.radius = a, this.the = this.phi = 0;
                }
                isSphereZone() {
                    return !0;
                }
                _dead(t) {
                    t.position.distanceTo(this) - t.radius > this.radius && (t.dead = !0);
                }
                _cross() {
                    console.warn(`${this.constructor.name} does not support the _cross method`);
                }
            }
            Fe.prototype.getPosition = function() {
                return this.random = Math.random(), Re = this.random * this.radius, je = R * Math.random(), Ie = 2 * R * Math.random(), this.vector.x = this.x + Re * Math.sin(je) * Math.cos(Ie), this.vector.y = this.y + Re * Math.sin(Ie) * Math.sin(je), this.vector.z = this.z + Re * Math.cos(je), this.vector;
            }, Fe.prototype._bound = (De = new ee, Ve = new ee, function(t) {
                t.position.distanceTo(this) + t.radius >= this.radius && (De.copy(t.position).sub(this).normalize(), Ve.copy(t.velocity), Be = 2 * Ve.dot(De), t.velocity.sub(De.scalar(Be)));
            });
            const ke = [
                "zoneType"
            ];
            class Ze extends ue {
                constructor(){
                    super(_), this.reset.apply(this, arguments);
                }
                reset() {
                    this.zones ? this.zones.length = 0 : this.zones = [], this.zones = this.zones.concat(Array.prototype.slice.call(arguments));
                }
                addZone() {
                    this.zones = this.zones.concat(Array.prototype.slice.call(arguments));
                }
                static fromJSON(e) {
                    const { zoneType: i } = e, s = function(t, e) {
                        if (null == t) return {};
                        var i, s, r = function(t, e) {
                            if (null == t) return {};
                            var i, s, r = {}, n = Object.keys(t);
                            for(s = 0; s < n.length; s++)i = n[s], e.indexOf(i) >= 0 || (r[i] = t[i]);
                            return r;
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(t);
                            for(s = 0; s < n.length; s++)i = n[s], e.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(t, i) && (r[i] = t[i]);
                        }
                        return r;
                    }(e, ke);
                    if (!ft.includes(i)) throw new Error(`The zone type ${i} is invalid or not yet supported`);
                    return new Ze(new t[i](...Object.values(s)));
                }
            }
            Ze.prototype.initialize = function() {
                let t;
                return function(e) {
                    t = this.zones[Math.random() * this.zones.length >> 0], t.getPosition(), e.position.x = t.vector.x, e.position.y = t.vector.y, e.position.z = t.vector.z;
                };
            }();
            class Ue extends ue {
                constructor(t, e, i = !1, s = !0){
                    super(w, s), this.radius = Nt(t, e, i);
                }
                reset(t, e, i = !1) {
                    this.radius = Nt(t, e, i);
                }
                initialize(t) {
                    t.radius = this.radius.getValue(), t.transform.oldRadius = t.radius;
                }
                static fromJSON(t) {
                    const { width: e, height: i, center: s = !1, isEnabled: r = !0 } = t;
                    return new Ue(e, i, s, r);
                }
            }
            class Ne extends ue {
                constructor(t = 1, e = 1){
                    super("Rate"), this.numPan = Nt(t), this.timePan = Nt(e), this.startTime = 0, this.nextTime = 0, this.init();
                }
                init() {
                    this.startTime = 0, this.nextTime = this.timePan.getValue();
                }
                getValue(t) {
                    return this.startTime += t, this.startTime >= this.nextTime ? (this.init(), 1 == this.numPan.b ? this.numPan.getValue("Float") > .5 ? 1 : 0 : this.numPan.getValue("Int")) : 0;
                }
                static fromJSON(t) {
                    const { particlesMin: e, particlesMax: i, perSecondMin: s, perSecondMax: r } = t;
                    return new Ne(new Ut(e, i), new Ut(s, r));
                }
            }
            function Le(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), i.push.apply(i, s);
                }
                return i;
            }
            function qe(t) {
                for(var e = 1; e < arguments.length; e++){
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Le(Object(i), !0).forEach(function(e) {
                        mt(t, e, i[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Le(Object(i)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                    });
                }
                return t;
            }
            class Ye extends ue {
                constructor(t, e, i = fe, s = !0){
                    super(x, s);
                    const { Sprite: r, SpriteMaterial: n } = t;
                    this.materialProperties = kt(fe, i), this.texture = e, this.material = new n(qe(qe({}, {
                        map: e
                    }), this.materialProperties)), this.sprite = new r(this.material);
                }
                initialize(t) {
                    t.body = this.sprite;
                }
                static fromJSON(t, e) {
                    const { loadedTexture: i, materialProperties: s = me, isEnabled: r = !0 } = t;
                    return new Ye(e, i, kt(me, ((t)=>{
                        const { blending: e } = t;
                        return qe(qe({}, t), {}, {
                            blending: e ? ye[e] : ye[me.blending]
                        });
                    })(s)), r);
                }
            }
            class Ge extends ue {
                constructor(t, e = !0){
                    super(t, e), this.dirVec = new ee(0, 0, 0);
                }
                normalize(t) {
                    return 100 * t;
                }
            }
            Ge.prototype.initialize = function() {
                var t, e = new ee(0, 0, 1), i = new ee(0, 0, 0);
                return function(s) {
                    return t = this.tha * Math.random(), this._useV && this.dirVec.copy(this.dir).scalar(this.radiusPan.getValue()), Zt.getNormal(this.dirVec, e), i.copy(this.dirVec).applyAxisAngle(e, t), i.applyAxisAngle(this.dirVec.normalize(), Math.random() * R * 2), s.velocity.copy(i), this;
                };
            }();
            class Xe extends Ge {
                constructor(t, e, i = !0){
                    super(M, i), this.tha = e * D, this.dirVec = t.toVector3D(), this._useV = !1;
                }
                static fromJSON(t) {
                    const { polarRadius: e, polarTheta: i, polarPhi: s, velocityTheta: r, isEnabled: n = !0 } = t;
                    return new Xe(new ie(e, i, s), r, n);
                }
            }
            class Je extends Ge {
                constructor(t, e, i, s = !0){
                    super(P, s), this.radiusPan = Nt(t), this.dir = e.clone().normalize(), this.tha = i * D, this._useV = !0;
                }
                static fromJSON(t) {
                    const { radius: e, x: i, y: s, z: r, theta: n, isEnabled: o = !0 } = t;
                    return new Je(e, new ee(i, s, r), n, o);
                }
            }
            class Qe extends Ge {
                constructor(t, e, i = !0){
                    super(z, i), this.radiusPan = Nt(1), this.dir = t.clone(), this.tha = e * D, this._useV = !0;
                }
                static fromJSON(t) {
                    const { x: e, y: i, z: s, theta: r, isEnabled: n = !0 } = t;
                    return new Qe(new ee(e, i, s), r, n);
                }
            }
            const He = new Ne(1, .1);
            var $e = i(763), We = i.n($e);
            class Ke extends se {
                constructor(t){
                    super(t), this.type = "Emitter", this.particles = [], this.initializers = [], this.behaviours = [], this.emitterBehaviours = [], this.currentEmitTime = 0, this.totalEmitTimes = -1, this.damping = .006, this.bindEmitter = !0, this.bindEmitterEvent = !1, this.rate = He, this.isEmitting = !1, this.id = `emitter-${Dt()}`, this.cID = 0, this.name = "Emitter", this.index = void 0, this.eventDispatcher = new ne;
                }
                dispatch(t, e = this) {
                    this.eventDispatcher.dispatchEvent(t, e);
                }
                setRate(t) {
                    return this.rate = t, this;
                }
                setPosition(t = {}) {
                    const { position: e } = this, { x: i = e.x, y: s = e.y, z: r = e.z } = t;
                    return this.position.set(i, s, r), this;
                }
                setRotation(t = {}) {
                    const { rotation: e } = this, { x: i = e.x, y: s = e.y, z: r = e.z } = t;
                    return this.rotation.set(i, s, r), this;
                }
                emit(t = 1 / 0, e = 1 / 0) {
                    return this.currentEmitTime = 0, this.totalEmitTimes = We()(t) ? t : 1 / 0, this.life = 1 === t ? t : We()(e) ? e : 1 / 0, this.rate.init(), this.isEmitting = !0, this;
                }
                experimental_emit() {
                    const { isEmitting: t, totalEmitTimes: e, life: i } = this;
                    return t || (this.currentEmitTime = 0, e || this.setTotalEmitTimes(1 / 0), i || this.setLife(1 / 0), this.rate.init(), this.isEmitting = !0), this;
                }
                setTotalEmitTimes(t = 1 / 0) {
                    return this.totalEmitTimes = We()(t) ? t : 1 / 0, this;
                }
                setLife(t = 1 / 0) {
                    return 1 === this.totalEmitTimes ? this.life = this.totalEmitTimes : this.life = We()(t) ? t : 1 / 0, this;
                }
                stopEmit() {
                    this.totalEmitTimes = -1, this.currentEmitTime = 0, this.isEmitting = !1;
                }
                removeAllParticles() {
                    let t = this.particles.length;
                    for(; t--;)this.particles[t].dead = !0;
                }
                addInitializer(t) {
                    return this.initializers.push(t), this;
                }
                addInitializers(t) {
                    let e = t.length;
                    for(; e--;)this.addInitializer(t[e]);
                    return this;
                }
                setInitializers(t) {
                    return this.initializers = t, this;
                }
                removeInitializer(t) {
                    const e = this.initializers.indexOf(t);
                    return e > -1 && this.initializers.splice(e, 1), this;
                }
                removeAllInitializers() {
                    return Rt.destroyArray(this.initializers), this;
                }
                addBehaviour(t) {
                    return this.behaviours.push(t), this;
                }
                addBehaviours(t) {
                    let e = t.length;
                    for(; e--;)this.addBehaviour(t[e]);
                    return this;
                }
                setBehaviours(t) {
                    return this.behaviours = t, this;
                }
                removeBehaviour(t) {
                    const e = this.behaviours.indexOf(t);
                    return e > -1 && this.behaviours.splice(e, 1), this;
                }
                removeAllBehaviours() {
                    return Rt.destroyArray(this.behaviours), this;
                }
                addEmitterBehaviour(t) {
                    return this.emitterBehaviours.push(t), t.initialize(this), this;
                }
                addEmitterBehaviours(t) {
                    let e = t.length;
                    for(; e--;)this.addEmitterBehaviour(t[e]);
                    return this;
                }
                setEmitterBehaviours(t) {
                    const e = t.length;
                    this.emitterBehaviours = t;
                    for(let t = 0; t < e; t++)this.emitterBehaviours[t].initialize(this);
                    return this;
                }
                removeEmitterBehaviour(t) {
                    const e = this.emitterBehaviours.indexOf(t);
                    return e > -1 && this.emitterBehaviours.splice(e, 1), this;
                }
                removeAllEmitterBehaviours() {
                    return Rt.destroyArray(this.emitterBehaviours), this;
                }
                addOnEmitterDeadEventListener(t) {
                    return this.eventDispatcher.addEventListener(`${this.id}_EMITTER_DEAD`, ()=>t()), this;
                }
                createParticle() {
                    const t = this.parent.pool.get(se), e = this.particles.length;
                    return this.setupParticle(t, e), this.parent && this.parent.dispatch(ae, t), this.bindEmitterEvent && this.dispatch(ae, t), t;
                }
                setupParticle(t, e) {
                    const { initializers: i, behaviours: s } = this;
                    _e.initialize(this, t, i), t.addBehaviours(s), t.parent = this, t.index = e, this.particles.push(t);
                }
                update(t) {
                    if (!this.isEmitting) return;
                    this.age += t, (this.dead || this.age >= this.life) && this.destroy(), this.generate(t), this.integrate(t);
                    let e = this.particles.length;
                    for(; e--;){
                        const t = this.particles[e];
                        t.dead && (this.parent && this.parent.dispatch(ce, t), this.bindEmitterEvent && this.dispatch(ce, t), this.parent.pool.expire(t.reset()), this.particles.splice(e, 1));
                    }
                    this.updateEmitterBehaviours(t);
                }
                updateEmitterBehaviours(t) {
                    if (this.sleep) return;
                    const e = this.emitterBehaviours.length;
                    for(let i = 0; i < e; i++)this.emitterBehaviours[i].applyBehaviour(this, t, i);
                }
                integrate(t) {
                    const e = this.parent ? this.parent.integrationType : Ht, i = 1 - this.damping;
                    te(this, t, i, e);
                    let s = this.particles.length;
                    for(; s--;){
                        const r = this.particles[s];
                        r.update(t, s), te(r, t, i, e), this.parent && this.parent.dispatch(he, r), this.bindEmitterEvent && this.dispatch(he, r);
                    }
                }
                generate(t) {
                    if (1 !== this.totalEmitTimes) {
                        if (this.currentEmitTime += t, this.currentEmitTime < this.totalEmitTimes) {
                            let e = this.rate.getValue(t);
                            for(e > 0 && (this.cID = e); e--;)this.createParticle();
                        }
                    } else {
                        let t = this.rate.getValue(99999);
                        for(t > 0 && (this.cID = t); t--;)this.createParticle();
                        this.totalEmitTimes = 0;
                    }
                }
                destroy() {
                    this.dead = !0, this.energy = 0, this.totalEmitTimes = -1, 0 == this.particles.length && (this.isEmitting = !1, this.removeAllInitializers(), this.removeAllBehaviours(), this.dispatch(`${this.id}_EMITTER_DEAD`), this.parent && this.parent.removeEmitter(this));
                }
            }
            const ti = Z;
            class ei {
                constructor(t = 1 / 0, e = ti, i = "Behaviour", s = !0){
                    this.type = i, this.isEnabled = s, this.id = `behaviour-${Dt()}`, this.life = t, this.easing = e, this.age = 0, this.energy = 1, this.dead = !1;
                }
                reset(t = 1 / 0, e = ti) {
                    this.life = t, this.easing = e || ti;
                }
                set life(t) {
                    this._life = We()(t) ? t : Infinity;
                }
                get life() {
                    return this._life;
                }
                normalizeForce(t) {
                    return t.scalar(100);
                }
                normalizeValue(t) {
                    return 100 * t;
                }
                initialize(t) {}
                applyBehaviour(t, e, i) {
                    this.isEnabled && this.mutate(t, e, i);
                }
                mutate(t, e, i) {}
                energize(t, e) {
                    if (this.dead) return;
                    if (this.age += e, this.age >= this.life) return this.energy = 0, void (this.dead = !0);
                    const i = this.easing(t.age / t.life);
                    this.energy = Math.max(1 - i, 0);
                }
                destroy() {}
                fromJSON(t) {}
            }
            class ii extends ei {
                constructor(t = 1, e = null, i, s, r = !0){
                    super(i, s, n, r), this.alphaA = t, this.alphaB = e, this.reset(t, e);
                }
                get same() {
                    return this._same;
                }
                set same(t) {
                    this._same = t;
                }
                reset(t = 1, e = null, i, s) {
                    this.same = null == e, this.alphaA = Nt(t), this.alphaB = Nt(e), i && super.reset(i, s);
                }
                initialize(t) {
                    t.useAlpha = !0, t.transform.alphaA = this.alphaA.getValue(), t.transform.alphaB = this.same ? t.transform.alphaA : this.alphaB.getValue();
                }
                mutate(t, e, i) {
                    this.energize(t, e, i), t.alpha = Zt.lerp(t.transform.alphaA, t.transform.alphaB, this.energy), t.alpha < .002 && (t.alpha = 0);
                }
                static fromJSON(t) {
                    const { alphaA: e, alphaB: i, life: s, easing: r, isEnabled: n = !0 } = t;
                    return new ii(e, i, s, ct(r), n);
                }
            }
            class si extends ei {
                constructor(t = new ee, e = 100, i = 1e3, s = 1 / 0, r = ti, n = !0){
                    super(s, r, o, n), this.targetPosition = t, this.radius = i, this.force = this.normalizeValue(e), this.radiusSq = this.radius * this.radius, this.attractionForce = new ee, this.lengthSq = 0;
                }
                reset(t = new ee, e = 100, i = 1e3, s, r) {
                    this.targetPosition = t, this.radius = i, this.force = this.normalizeValue(e), this.radiusSq = this.radius * this.radius, this.attractionForce = new ee, this.lengthSq = 0, s && super.reset(s, r);
                }
                mutate(t, e, i) {
                    this.energize(t, e, i), this.attractionForce.copy(this.targetPosition), this.attractionForce.sub(t.position), this.lengthSq = this.attractionForce.lengthSq(), this.lengthSq > 4e-6 && this.lengthSq < this.radiusSq && (this.attractionForce.normalize(), this.attractionForce.scalar(1 - this.lengthSq / this.radiusSq), this.attractionForce.scalar(this.force), t.acceleration.add(this.attractionForce));
                }
                static fromJSON(t) {
                    const { x: e, y: i, z: s, force: r, radius: n, life: o, easing: a, isEnabled: h = !0 } = t;
                    return new si(new ee(e, i, s), r, n, o, ct(a), h);
                }
            }
            class ri extends ei {
                constructor(t, e, i, s, r, n = !0){
                    super(s, r, "Collision", n), this.reset(t, e, i);
                }
                reset(t, e, i, s, r) {
                    this.emitter = t, this.useMass = e, this.onCollide = i, this.particles = [], this.delta = new ee, s && super.reset(s, r);
                }
                mutate(t, e, i) {
                    const s = this.emitter ? this.emitter.particles.slice(i) : this.particles.slice(i);
                    let r, n, o, a, h, c, u = s.length;
                    for(; u--;)r = s[u], r != t && (this.delta.copy(r.position).sub(t.position), n = this.delta.lengthSq(), a = t.radius + r.radius, n <= a * a && (o = a - Math.sqrt(n), o += .5, h = this._getAverageMass(t, r), c = this._getAverageMass(r, t), t.position.add(this.delta.clone().normalize().scalar(o * -h)), r.position.add(this.delta.normalize().scalar(o * c)), this.onCollide && this.onCollide(t, r)));
                }
                _getAverageMass(t, e) {
                    return this.useMass ? e.mass / (t.mass + e.mass) : .5;
                }
                fromJSON(t) {}
            }
            class ni extends ei {
                constructor(t, e, i, s, r = !0){
                    super(i, s, a, r), this.reset(t, e);
                }
                get same() {
                    return this._same;
                }
                set same(t) {
                    this._same = t;
                }
                reset(t, e, i, s) {
                    this.same = null == e, this.colorA = Jt(t), this.colorB = Jt(e), i && super.reset(i, s);
                }
                initialize(t) {
                    t.transform.colorA = gt.getRGB(this.colorA.getValue()), t.useColor = !0, t.transform.colorB = this.same ? t.transform.colorA : gt.getRGB(this.colorB.getValue());
                }
                mutate(t, e, i) {
                    this.energize(t, e, i), this._same ? (t.color.r = t.transform.colorA.r, t.color.g = t.transform.colorA.g, t.color.b = t.transform.colorA.b) : (t.color.r = Zt.lerp(t.transform.colorA.r, t.transform.colorB.r, this.energy), t.color.g = Zt.lerp(t.transform.colorA.g, t.transform.colorB.g, this.energy), t.color.b = Zt.lerp(t.transform.colorA.b, t.transform.colorB.b, this.energy));
                }
                static fromJSON(t) {
                    const { colorA: e, colorB: i, life: s, easing: r, isEnabled: n = !0 } = t;
                    return new ni(e, i, s, ct(r), n);
                }
            }
            class oi extends ei {
                constructor(t, e, i, s, r){
                    super(i, s, h, r), this.reset(t, e);
                }
                reset(t, e = "dead", i, s) {
                    this.zone = t, this.zone.crossType = e, i && super.reset(i, s);
                }
                mutate(t, e, i) {
                    this.energize(t, e, i), this.zone.crossing.call(this.zone, t);
                }
                static fromJSON(e) {
                    const { zoneType: i, zoneParams: s, crossType: r, life: n, easing: o, isEnabled: a = !0 } = e, h = new t[i](...Object.values(s));
                    return new oi(h, r, n, ct(o), a);
                }
            }
            class ai extends ei {
                constructor(t, e, i, s, r, n = !0){
                    super(s, r, c, n), this.reset(t, e, i);
                }
                reset(t, e, i) {
                    this.force = this.normalizeForce(new ee(t, e, i)), this.force.id = Math.random();
                }
                mutate(t, e, i) {
                    this.energize(t, e, i), t.acceleration.add(this.force);
                }
                static fromJSON(t) {
                    const { fx: e, fy: i, fz: s, life: r, easing: n, isEnabled: o = !0 } = t;
                    return new ai(e, i, s, r, ct(n), o);
                }
            }
            class hi extends ai {
                constructor(t, e, i, s = !0){
                    super(0, -t, 0, e, i, s), this.type = u;
                }
                static fromJSON(t) {
                    const { gravity: e, life: i, easing: s, isEnabled: r = !0 } = t;
                    return new hi(e, i, ct(s), r);
                }
            }
            class ci extends ei {
                constructor(t, e, i, s = .03, r, n, o = !0){
                    super(r, n, l, o), this.reset(t, e, i, s), this.time = 0;
                }
                reset(t, e, i, s = .03, r, n) {
                    this.randomForce = this.normalizeForce(new ee(t, e, i)), this.delayPan = Nt(s), this.time = 0, r && super.reset(r, n);
                }
                mutate(t, e, i) {
                    if (this.energize(t, e, i), this.time += e, this.time >= this.delayPan.getValue()) {
                        const e = Zt.randomAToB(-this.randomForce.x, this.randomForce.x), i = Zt.randomAToB(-this.randomForce.y, this.randomForce.y), s = Zt.randomAToB(-this.randomForce.z, this.randomForce.z);
                        t.acceleration.addValue(e, i, s), this.time = 0;
                    }
                }
                static fromJSON(t) {
                    const { x: e, y: i, z: s, delay: r, life: n, easing: o, isEnabled: a = !0 } = t;
                    return new ci(e, i, s, r, n, ct(o), a);
                }
            }
            class ui extends si {
                constructor(t, e, i, s, r, n = !0){
                    super(t, e, i, s, r, n), this.force *= -1, this.type = d;
                }
                reset(t, e, i, s, r) {
                    super.reset(t, e, i, s, r), this.force *= -1;
                }
                static fromJSON(t) {
                    const { x: e, y: i, z: s, force: r, radius: n, life: o, easing: a, isEnabled: h = !0 } = t;
                    return new ui(new ee(e, i, s), r, n, o, ct(a), h);
                }
            }
            class li extends ei {
                constructor(t, e, i, s, r, n = !0){
                    super(s, r, p, n), this.reset(t, e, i);
                }
                get rotationType() {
                    return this._rotationType;
                }
                set rotationType(t) {
                    this._rotationType = t;
                }
                reset(t, e, i, s, r) {
                    this.x = t || 0, this.y = e || 0, this.z = i || 0, void 0 === t || "same" == t ? this.rotationType = "same" : null == e ? this.rotationType = "set" : void 0 === i ? this.rotationType = "to" : (this.rotationType = "add", this.x = Nt(this.x * D), this.y = Nt(this.y * D), this.z = Nt(this.z * D)), s && super.reset(s, r);
                }
                initialize(t) {
                    switch(this.rotationType){
                        case "same":
                            break;
                        case "set":
                            this._setRotation(t.rotation, this.x);
                            break;
                        case "to":
                            t.transform.fR = t.transform.fR || new ee, t.transform.tR = t.transform.tR || new ee, this._setRotation(t.transform.fR, this.x), this._setRotation(t.transform.tR, this.y);
                            break;
                        case "add":
                            t.transform.addR = new ee(this.x.getValue(), this.y.getValue(), this.z.getValue());
                    }
                }
                _setRotation(t, e) {
                    if (t = t || new ee, "random" == e) {
                        var i = Zt.randomAToB(-R, R), s = Zt.randomAToB(-R, R), r = Zt.randomAToB(-R, R);
                        t.set(i, s, r);
                    } else e instanceof ee && t.copy(e);
                }
                mutate(t, e, i) {
                    switch(this.energize(t, e, i), this.rotationType){
                        case "same":
                            t.rotation || (t.rotation = new ee), t.rotation.eulerFromDir(t.velocity);
                            break;
                        case "set":
                            break;
                        case "to":
                            t.rotation.x = Zt.lerp(t.transform.fR.x, t.transform.tR.x, this.energy), t.rotation.y = Zt.lerp(t.transform.fR.y, t.transform.tR.y, this.energy), t.rotation.z = Zt.lerp(t.transform.fR.z, t.transform.tR.z, this.energy);
                            break;
                        case "add":
                            t.rotation.add(t.transform.addR);
                    }
                }
                static fromJSON(t) {
                    const { x: e, y: i, z: s, life: r, easing: n, isEnabled: o = !0 } = t;
                    return new li(e, i, s, r, ct(n), o);
                }
            }
            class di extends ei {
                constructor(t, e, i, s, r = !0){
                    super(i, s, y, r), this.reset(t, e);
                }
                get same() {
                    return this._same;
                }
                set same(t) {
                    this._same = t;
                }
                reset(t, e, i, s) {
                    this.same = null == e, this.scaleA = Nt(t || 1), this.scaleB = Nt(e), i && super.reset(i, s);
                }
                initialize(t) {
                    t.transform.scaleA = this.scaleA.getValue(), t.transform.oldRadius = t.radius, t.transform.scaleB = this.same ? t.transform.scaleA : this.scaleB.getValue();
                }
                mutate(t, e, i) {
                    this.energize(t, e, i), t.scale = Zt.lerp(t.transform.scaleA, t.transform.scaleB, this.energy), t.scale < 5e-4 && (t.scale = 0), t.radius = t.transform.oldRadius * t.scale;
                }
                static fromJSON(t) {
                    const { scaleA: e, scaleB: i, life: s, easing: r, isEnabled: n = !0 } = t;
                    return new di(e, i, s, ct(r), n);
                }
            }
            class pi extends ei {
                constructor(t, e, i, s, r, n, o, a = !0){
                    super(n, o, f, a), this.reset(t, e, i, s, r);
                }
                reset(t, e, i, s, r) {
                    this.pos ? this.pos.set(t, e, i) : this.pos = new ee(t, e, i), this.spring = s || .1, this.friction = r || .98;
                }
                mutate(t, e, i) {
                    this.energize(t, e, i), t.velocity.x += (this.pos.x - t.position.x) * this.spring, t.velocity.y += (this.pos.y - t.position.y) * this.spring, t.velocity.z += (this.pos.z - t.position.z) * this.spring;
                }
                static fromJSON(t) {
                    const { x: e, y: i, z: s, spring: r, friction: n, life: o, easing: a, isEnabled: h = !0 } = t;
                    return new pi(e, i, s, r, n, o, ct(a), h);
                }
            }
            const yi = (t)=>{
                const e = [];
                return t.forEach((t)=>{
                    const { type: i, properties: s } = t;
                    if (!yt.includes(i)) throw new Error(`The behaviour type ${i} is invalid or not yet supported`);
                    e.push(r[i].fromJSON(s));
                }), e;
            };
            function fi(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), i.push.apply(i, s);
                }
                return i;
            }
            function mi(t) {
                for(var e = 1; e < arguments.length; e++){
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? fi(Object(i), !0).forEach(function(e) {
                        mt(t, e, i[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : fi(Object(i)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                    });
                }
                return t;
            }
            const gi = {
                shouldAutoEmit: !0
            }, xi = (t)=>new Promise((e, i)=>{
                    if (!t.length) return e([]);
                    const s = t.length, n = [];
                    t.forEach((t)=>{
                        const { type: o, properties: a } = t;
                        return yt.includes(o) ? (n.push(r[o].fromJSON(a)), n.length === s ? e(n) : void 0) : i(`The behaviour type ${o} is invalid or not yet supported`);
                    });
                });
            class vi {
                constructor(t = B, e = Ht){
                    this.type = "System", this.canUpdate = !0, this.preParticles = t, this.integrationType = e, this.emitters = [], this.renderers = [], this.pool = new re, this.eventDispatcher = new ne;
                }
                static fromJSON(t, i) {
                    return ((t, i, s, r)=>{
                        const { preParticles: n = B, integrationType: o = V, emitters: a = [] } = t, h = new s(i, n, o);
                        return a.forEach((t)=>{
                            const s = new r, { rate: n, rotation: o, initializers: a, behaviours: c, emitterBehaviours: u = [], position: l, totalEmitTimes: d = 1 / 0, life: p = 1 / 0 } = t;
                            s.setRate(((t)=>Ne.fromJSON(t))(n)).setRotation(o).setInitializers(((t, i)=>{
                                const s = [];
                                return t.forEach((t)=>{
                                    const { type: r, properties: n } = t;
                                    if (!pt.includes(r)) throw new Error(`The initializer type ${r} is invalid or not yet supported`);
                                    O.includes(r) ? s.push(e[r].fromJSON(n, i)) : s.push(e[r].fromJSON(n));
                                }), s;
                            })(a, i)).setBehaviours(yi(c)).setEmitterBehaviours(yi(u)).setPosition(l).emit(d, p), h.addEmitter(s);
                        }), h;
                    })(t, i, vi, Ke);
                }
                static fromJSONAsync(t, i, s) {
                    return ((t, i, s, r, n = {})=>new Promise((o, a)=>{
                            const { preParticles: h = B, integrationType: c = V, emitters: u = [] } = t, l = new s(h, c), { shouldAutoEmit: d } = mi(mi({}, gi), n);
                            ((t, i, s, r)=>new Promise((n, o)=>{
                                    if (!t.length) return n([]);
                                    const a = [], h = t.length;
                                    if (!h) return n(a);
                                    t.forEach((t)=>{
                                        const c = new i, { rate: u, rotation: l, initializers: d, behaviours: p, emitterBehaviours: y = [], position: f, totalEmitTimes: m = 1 / 0, life: g = 1 / 0 } = t;
                                        var x;
                                        c.setRate((x = u, Ne.fromJSON(x))).setRotation(l).setPosition(f), ((t, i)=>new Promise((s, r)=>{
                                                if (!t.length) return s([]);
                                                const n = t.length, o = [], a = t.filter(({ properties: t })=>!t.texture), h = t.filter(({ properties: t })=>t.texture);
                                                a.forEach((t)=>{
                                                    const { type: a, properties: h } = t;
                                                    return pt.includes(a) ? (O.includes(a) ? o.push(e[a].fromJSON(h, i)) : o.push(e[a].fromJSON(h)), o.length === n ? s(o) : void 0) : r(`The initializer type ${a} is invalid or not yet supported`);
                                                }), h.forEach((t)=>{
                                                    const { type: e, properties: a, properties: { texture: h } } = t, c = new i.TextureLoader;
                                                    if (!pt.includes(e)) return r(`The initializer type ${e} is invalid or not yet supported`);
                                                    c.load(h, (t)=>{
                                                        if (o.push(Ye.fromJSON(mi(mi({}, a), {}, {
                                                            loadedTexture: t
                                                        }), i)), o.length === n) return s(o);
                                                    }, void 0, r);
                                                });
                                            }))(d, s).then((t)=>(c.setInitializers(t), xi(p))).then((t)=>(c.setBehaviours(t), xi(y))).then((t)=>(c.setEmitterBehaviours(t), Promise.resolve(c))).then((t)=>{
                                            if (a.push(r ? t.emit(m, g) : t.setTotalEmitTimes(m).setLife(g)), a.length === h) return n(a);
                                        }).catch(o);
                                    });
                                }))(u, r, i, d).then((t)=>{
                                const e = t.length;
                                if (!e) return o(l);
                                t.forEach((t)=>{
                                    l.addEmitter(t), l.emitters.length === e && o(l);
                                });
                            }).catch(a);
                        }))(t, i, vi, Ke, s);
                }
                dispatch(t, e = this) {
                    this.eventDispatcher.dispatchEvent(t, e);
                }
                addRenderer(t) {
                    return this.renderers.push(t), t.init(this), this;
                }
                removeRenderer(t) {
                    return this.renderers.splice(this.renderers.indexOf(t), 1), t.remove(this), this;
                }
                addEmitter(t) {
                    const e = this.emitters.length;
                    return t.parent = this, t.index = e, this.emitters.push(t), this.dispatch("EMITTER_ADDED", t), this;
                }
                removeEmitter(t) {
                    return t.parent !== this || (t.parent = null, t.index = void 0, this.emitters.splice(this.emitters.indexOf(t), 1), this.dispatch("EMITTER_REMOVED", t)), this;
                }
                emit({ onStart: t, onUpdate: e, onEnd: i }) {
                    t && t(), e && this.eventDispatcher.addEventListener(oe, e);
                    const s = this.emitters.map((t)=>{
                        const { life: e } = t;
                        return e === 1 / 0 ? (i && i(), t.experimental_emit(), Promise.resolve()) : new Promise((e)=>{
                            t.addOnEmitterDeadEventListener(()=>{
                                i && i(), e();
                            }), t.experimental_emit();
                        });
                    });
                    try {
                        return Promise.all(s);
                    } catch (t) {
                        console.warn(t);
                    }
                }
                update(t = .0167) {
                    const e = t || dt;
                    if (this.canUpdate) {
                        if (e > 0) {
                            let t = this.emitters.length;
                            for(; t--;){
                                const i = this.emitters[t];
                                i.update(e), i.isEmitting && this.dispatch(oe);
                            }
                        }
                        this.dispatch("SYSTEM_UPDATE_AFTER");
                    }
                    return Promise.resolve();
                }
                getCount() {
                    const t = this.emitters.length;
                    let e, i = 0;
                    for(e = 0; e < t; e++)i += this.emitters[e].particles.length;
                    return i;
                }
                destroy() {
                    const t = this.emitters.length;
                    this.canUpdate = !1;
                    for(let e = 0; e < t; e++)this.emitters[e] && this.emitters[e].destroy(), delete this.emitters[e];
                    for(let e = 0; e < t; e++)this.renderers[e] && this.renderers[e].destroy && (this.renderers[e].destroy(), delete this.renderers[e]);
                    this.emitters.length = 0, this.pool.destroy(), this.canUpdate = !0;
                }
            }
            const bi = 15, _i = 0, wi = {
                addEventListener: function(t, e) {
                    return t.eventDispatcher.addEventListener("SYSTEM_UPDATE", e), this;
                },
                drawZone: function(t, e, i, s = {}) {
                    const { width: r = bi, height: n = bi, depth: o = bi, radius: a = bi, x: h = _i, y: c = _i, z: u = _i } = s;
                    let l;
                    s.isPointZone() && (l = new t.SphereGeometry(15)), s.isLineZone(), s.isBoxZone() && (l = new t.BoxGeometry(r, n, o)), s.isSphereZone() && (l = new t.SphereGeometry(a, bi, bi)), s.isMeshZone() && (l = s.geometry.geometry ? s.geometry.geometry.clone() : s.geometry.clone()), l || (l = new t.BoxGeometry(r, n, o));
                    const d = new t.MeshBasicMaterial({
                        color: "#2194ce",
                        wireframe: !0
                    }), p = new t.Mesh(l.clone(), d);
                    i.add(p), this.addEventListener(e, function() {
                        p.position.set(h, c, u);
                    });
                },
                drawEmitter: function(t, e, i, s, r) {
                    const n = new t.OctahedronGeometry(bi), o = new t.MeshBasicMaterial({
                        color: r || "#aaa",
                        wireframe: !0
                    }), a = new t.Mesh(n.clone(), o);
                    i.add(a), this.addEventListener(e, function() {
                        a.position.copy(s.position), a.rotation.set(s.rotation.x, s.rotation.y, s.rotation.z);
                    });
                },
                renderInfo: function() {
                    function t(t, e) {
                        var i = "material" == t ? "_materialPool" : "_targetPool";
                        return e.renderers[0][i].cID;
                    }
                    return function(e, i) {
                        this.addInfo(i);
                        var s = "";
                        switch(this._infoType){
                            case 2:
                                s += "emitter:" + e.emitters.length + "<br>", s += "em speed:" + e.emitters[0].cID + "<br>", s += "pos:" + function(t) {
                                    var e = t.emitters[0];
                                    return Math.round(e.p.x) + "," + Math.round(e.p.y) + "," + Math.round(e.p.z);
                                }(e);
                                break;
                            case 3:
                                s += e.renderers[0].name + "<br>", s += "target:" + t("target") + "<br>", s += "material:" + t("material");
                                break;
                            default:
                                s += "particles:" + e.getCount() + "<br>", s += "pool:" + e.pool.getCount() + "<br>", s += "total:" + (e.getCount() + e.pool.getCount());
                        }
                        this._infoCon.innerHTML = s;
                    };
                }(),
                addInfo: function(t) {
                    var e = this;
                    if (!this._infoCon) {
                        var i, s;
                        switch(this._infoCon = document.createElement("div"), this._infoCon.style.cssText = [
                            "position:fixed;bottom:0px;left:0;cursor:pointer;",
                            "opacity:0.9;z-index:10000;padding:10px;font-size:12px;",
                            "width:120px;height:50px;background-color:#002;color:#0ff;"
                        ].join(""), this._infoType = 1, this._infoCon.addEventListener("click", function() {
                            e._infoType++, e._infoType > 3 && (e._infoType = 1);
                        }, !1), t){
                            case 2:
                                i = "#201", s = "#f08";
                                break;
                            case 3:
                                i = "#020", s = "#0f0";
                                break;
                            default:
                                i = "#002", s = "#0ff";
                        }
                        this._infoCon.style["background-color"] = i, this._infoCon.style.color = s;
                    }
                    this._infoCon.parentNode || document.body.appendChild(this._infoCon);
                }
            };
            function zi() {
                let t = 0;
                if (window.console && window.console.trace) {
                    var e = Array.prototype.slice.call(arguments), i = arguments[0] + "";
                    if (0 == i.indexOf("+")) {
                        var s = parseInt(arguments[0]);
                        t < s && (e.shift(), console.trace.apply(console, e), t++);
                    } else e.unshift("+15"), this.apply(console, e);
                }
            }
            class Mi extends Ke {
                constructor(t, e, i){
                    super(i), this.type = "FollowEmitter", this.mouseTarget = Rt.initValue(t, window), this.ease = Rt.initValue(e, .7), this._allowEmitting = !1, this.initEventHandler();
                }
                initEventHandler() {
                    var t = this;
                    this.mousemoveHandler = function(e) {
                        t.mousemove.call(t, e);
                    }, this.mousedownHandler = function(e) {
                        t.mousedown.call(t, e);
                    }, this.mouseupHandler = function(e) {
                        t.mouseup.call(t, e);
                    }, this.mouseTarget.addEventListener("mousemove", this.mousemoveHandler, !1);
                }
                emit() {
                    this._allowEmitting = !0;
                }
                stopEmit() {
                    this._allowEmitting = !1;
                }
                setCameraAndCanvas(t, e) {
                    this.camera = t, this.canvas = e;
                }
                mousemove(t) {
                    t.layerX || 0 == t.layerX ? (this.position.x += (t.layerX - this.position.x) * this.ease, this.position.y += (t.layerY - this.position.y) * this.ease) : (t.offsetX || 0 == t.offsetX) && (this.position.x += (t.offsetX - this.position.x) * this.ease, this.position.y += (t.offsetY - this.position.y) * this.ease), this.position.copy(It.toSpacePos(this.position, this.camera, this.canvas)), this._allowEmitting && super.emit("once");
                }
                destroy() {
                    super.destroy(), this.mouseTarget.removeEventListener("mousemove", this.mousemoveHandler, !1);
                }
            }
            class Pi {
                constructor(t = "BaseRenderer"){
                    this.type = t;
                }
                init(t) {
                    var e = this;
                    this.system = t, this.system.eventDispatcher.addEventListener(oe, function(t) {
                        e.onSystemUpdate.call(e, t);
                    }), this.system.eventDispatcher.addEventListener(ae, function(t) {
                        e.onParticleCreated.call(e, t);
                    }), this.system.eventDispatcher.addEventListener(he, function(t) {
                        e.onParticleUpdate.call(e, t);
                    }), this.system.eventDispatcher.addEventListener(ce, function(t) {
                        e.onParticleDead.call(e, t);
                    }), this.logRendererType();
                }
                remove() {
                    this.system = null;
                }
                onParticleCreated(t) {}
                onParticleUpdate(t) {}
                onParticleDead(t) {}
                onSystemUpdate(t) {}
                logRendererType() {
                    F && console.log(`${this.type}`);
                }
            }
            class Oi extends Pi {
                constructor(){
                    super("CustomRenderer"), this.targetPool = new re, this.materialPool = new re;
                }
                onSystemUpdate() {}
                onParticleCreated(t) {}
                onParticleUpdate(t) {}
                onParticleDead(t) {}
            }
            class Ei extends Pi {
                constructor(t, e){
                    super("MeshRenderer"), this.container = t, this._targetPool = new re, this._materialPool = new re, this._body = new e.Mesh(new e.BoxGeometry(50, 50, 50), new e.MeshLambertMaterial({
                        color: "#ff0000"
                    }));
                }
                isThreeSprite(t) {
                    return t.target.isSprite;
                }
                onSystemUpdate() {}
                onParticleCreated(t) {
                    t.target || (t.body || (t.body = this._body), t.target = this._targetPool.get(t.body), (t.useAlpha || t.useColor) && (t.target.material.__puid = xt.id(t.body.material), t.target.material = this._materialPool.get(t.target.material))), t.target && (t.target.position.copy(t.position), this.container.add(t.target));
                }
                onParticleUpdate(t) {
                    const { target: e, useAlpha: i, useColor: s, rotation: r } = t;
                    e && (e.position.copy(t.position), this.isThreeSprite(t) || e.rotation.set(r.x, r.y, r.z), this.scale(t), i && (e.material.opacity = t.alpha, e.material.transparent = !0), s && e.material.color.copy(t.color));
                }
                scale(t) {
                    t.target.scale.set(t.scale, t.scale, t.scale);
                }
                onParticleDead(t) {
                    t.target && ((t.useAlpha || t.useColor) && this._materialPool.expire(t.target.material), this._targetPool.expire(t.target), this.container.remove(t.target), t.target = null);
                }
            }
            class Ti extends Ei {
                constructor(t, e){
                    super(t, e), this.type = "SpriteRenderer", this._body = new e.Sprite(new e.SpriteMaterial({
                        color: 16777215
                    }));
                }
                scale(t) {
                    t.target.scale.set(t.scale * t.radius, t.scale * t.radius, 1);
                }
            }
            const Si = 3, Ci = 4, Ai = [
                4 * Si,
                4,
                4 * Ci
            ].reduce((t, e)=>t + e), ji = 1, Ii = 1, Ri = 2, Bi = {
                position: Si,
                size: ji,
                color: Ci,
                alpha: Ii,
                texID: Ri
            }, Di = ([
                Si,
                ji,
                Ci,
                Ii,
                Ri
            ].reduce((t, e)=>t + e), {
                blending: "AdditiveBlending",
                baseColor: 16777215,
                depthTest: !0,
                depthWrite: !1,
                transparent: !0,
                maxParticles: 1e4,
                shouldDebugTextureAtlas: !1,
                shouldForceDesktopRenderer: !1,
                shouldForceMobileRenderer: !1
            });
            class Vi {
                constructor(t){
                    this.position = new t.Vector3, this.size = 0, this.color = new t.Color, this.alpha = 0, this.texture = null, this.index = 0;
                }
                reset() {
                    this.position.set(0, 0, 0), this.size = 0, this.color.setRGB(0, 0, 0), this.alpha = 0, this.texture = null;
                }
            }
            class Fi {
                constructor(t = 1 / 0){
                    this.max = t, this.count = 0, this._items = {};
                }
                add(t) {
                    void 0 === this._items[t] && (this._items[t] = this.count++);
                }
                find(t) {
                    return this._items[t];
                }
                destroy() {
                    this._items = {}, this.count = 0;
                }
            }
            let ki;
            class Zi {
                constructor(t = 1e4, e){
                    ki = e, this.maxParticles = t, this.createInterleavedBuffer().createBufferGeometry();
                }
                createInterleavedBuffer() {
                    const t = new ArrayBuffer(this.maxParticles * Ai);
                    return this.interleavedBuffer = new ki.InterleavedBuffer(new Float32Array(t), Ai), this;
                }
                createBufferGeometry() {
                    this.geometry = new ki.BufferGeometry;
                    const { interleavedBuffer: t, geometry: e } = this;
                    return Object.keys(Bi).reduce((i, s)=>{
                        const r = Bi[s];
                        return e.setAttribute(s, new ki.InterleavedBufferAttribute(t, r, i)), i + r;
                    }, 0), this;
                }
                get buffer() {
                    return this.interleavedBuffer;
                }
                get stride() {
                    return Ai;
                }
            }
            class Ui {
                constructor(t, e){
                    const { three: i, type: s } = t, r = new Float32Array(1024), n = this.ctx = document.createElement("canvas").getContext("2d"), { canvas: o } = n;
                    this.shouldDebug = e, this.rendererType = s, this.indexData = r, this.canvas = o, this.entries = [], s === I && (this.atlasIndex = new i.DataTexture(r, 256, 1, i.RGBAFormat, i.FloatType)), o.width = o.height = 256, e && this.debug(o, n), this.atlasTexture = new i.CanvasTexture(o), this.atlasTexture.flipY = !1, t.material.uniforms.uTexture.value = this.atlasTexture, s === I && (t.material.uniforms.atlasIndex.value = this.atlasIndex), t.material.uniformsNeedUpdate = !0;
                }
                log(...t) {
                    F && console.log(...t);
                }
                debug() {
                    const { canvas: t, ctx: e } = this, i = t.width;
                    e.fillStyle = "purple", e.fillRect(0, 0, i, i), e.fillStyle = "green", e.fillRect(0, i, i, i), e.fillStyle = "blue", e.fillRect(i, 0, i, i), e.fillStyle = "orange", e.fillRect(i, i, i, i), e.fillStyle = "yellow", e.font = t.width + "px Verdana", e.fillText("top row", 100, 500), e.fillStyle = "pink", e.fillText("bottom row", 100, 1500), t.style.position = "absolute", t.style.width = t.style.height = "300px", t.style.left = t.style.top = "0px", t.style.zIndex = 100, document.body.appendChild(t);
                }
                addTexture(t) {
                    this.log("Adding texture to atlas:", t.uuid), t.textureIndex = this.entries.length, this.entries.push({
                        texture: t
                    }), this.needsUpdate = !0;
                }
                update() {
                    if (!this.needsUpdate) return;
                    const { entries: t, canvas: e, indexData: i, ctx: s, atlasIndex: r, atlasTexture: n, rendererType: o } = this;
                    for(let e = 0; e < t.length; e++)if (!t[e].texture.image) return;
                    this.needsUpdate = !1;
                    for(let e = 0; e < t.length; e++){
                        const i = t[e], { texture: s } = i, { width: r, height: n } = s.image;
                        i.w = r, i.h = n;
                    }
                    const a = function(t) {
                        let e = 0, i = 0;
                        for (const s of t)e += s.w * s.h, i = Math.max(i, s.w);
                        t.sort((t, e)=>e.h - t.h);
                        const s = [
                            {
                                x: 0,
                                y: 0,
                                w: Math.max(Math.ceil(Math.sqrt(e / .95)), i),
                                h: 1 / 0
                            }
                        ];
                        let r = 0, n = 0;
                        for (const e of t)for(let t = s.length - 1; t >= 0; t--){
                            const i = s[t];
                            if (!(e.w > i.w || e.h > i.h)) {
                                if (e.x = i.x, e.y = i.y, n = Math.max(n, e.y + e.h), r = Math.max(r, e.x + e.w), e.w === i.w && e.h === i.h) {
                                    const e = s.pop();
                                    t < s.length && (s[t] = e);
                                } else e.h === i.h ? (i.x += e.w, i.w -= e.w) : e.w === i.w ? (i.y += e.h, i.h -= e.h) : (s.push({
                                    x: i.x + e.w,
                                    y: i.y,
                                    w: i.w - e.w,
                                    h: e.h
                                }), i.y += e.h, i.h -= e.h);
                                break;
                            }
                        }
                        return {
                            w: r,
                            h: n,
                            fill: e / (r * n) || 0
                        };
                    }(t);
                    this.log("Rebuilt atlas:", a), e.width == a.w && e.height == a.h || (e.width = a.w, e.height = a.h);
                    for(let r = 0; r < t.length; r++){
                        const t = this.entries[r], n = 4 * t.texture.textureIndex;
                        o === I && (i[n + 0] = t.x / e.width, i[n + 1] = t.y / e.height, i[n + 2] = (t.x + t.w) / e.width, i[n + 3] = (t.y + t.h) / e.height), o === j && (i[n + 0] = t.x / (e.width + 1), i[n + 1] = t.y / (e.height + 1), i[n + 2] = (t.x + t.w) / (e.width + 1), i[n + 3] = (t.y + t.h) / (e.height + 1)), s.drawImage(t.texture.image, t.x, t.y, t.w, t.h);
                    }
                    o === I && (r.needsUpdate = !0), n.needsUpdate = !0;
                }
                destroy() {
                    const { atlasIndex: t, atlasTexture: e, canvas: i } = this;
                    e.dispose(), t && t.dispose(), this.shouldDebug && i.remove(), this.entries = [];
                }
            }
            function Ni(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), i.push.apply(i, s);
                }
                return i;
            }
            function Li(t) {
                for(var e = 1; e < arguments.length; e++){
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ni(Object(i), !0).forEach(function(e) {
                        mt(t, e, i[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ni(Object(i)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                    });
                }
                return t;
            }
            let qi, Yi;
            class Gi extends Pi {
                constructor(t, e, i = Di){
                    super(I), qi = this.three = e;
                    const s = Li(Li({}, Di), i), { camera: r, maxParticles: n, baseColor: o, blending: a, depthTest: h, depthWrite: c, transparent: u, shouldDebugTextureAtlas: l } = s, d = new Zi(n, qi), p = new qi.ShaderMaterial({
                        uniforms: {
                            baseColor: {
                                value: new qi.Color(o)
                            },
                            uTexture: {
                                value: null
                            },
                            atlasIndex: {
                                value: null
                            }
                        },
                        vertexShader: "\n    uniform sampler2D uTexture;\n    //atlasIndex is a 256x1 float texture of tile rectangles as r=minx g=miny b=maxx a=maxy\n    uniform sampler2D atlasIndex;\n\n    attribute float size;\n    attribute vec3 color;\n    attribute float alpha;\n    attribute float texID;\n\n    varying vec3 targetColor;\n    varying float targetAlpha;\n    varying vec4 tileRect;\n    varying float tileID;\n\n    void main() {\n      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n      targetColor = color;\n      targetAlpha = alpha;\n\n      tileID = texID;\n      //get the tile rectangle from the atlasIndex texture..\n      tileRect = texture2D(atlasIndex, vec2((tileID + 0.5) / 256.0, 0.5));\n\n      gl_PointSize = ((size * 600.0) / -mvPosition.z);\n      gl_Position = projectionMatrix * mvPosition;\n    }\n",
                        fragmentShader: "\n    uniform vec3 baseColor;\n    uniform sampler2D uTexture;\n    uniform sampler2D atlasIndex;\n\n    varying vec3 targetColor;\n    varying float targetAlpha;\n    varying vec4 tileRect;\n    varying float tileID;\n\n    void main() {\n      gl_FragColor = vec4(baseColor * targetColor, targetAlpha);\n\n      vec2 uv = gl_PointCoord;\n      uv = mix(tileRect.xy, tileRect.zw, gl_PointCoord);\n\n      gl_FragColor = gl_FragColor * texture2D(uTexture, uv);\n\n    }\n",
                        blending: qi[a],
                        depthTest: h,
                        depthWrite: c,
                        transparent: u
                    });
                    this.container = t, this.camera = r, this.targetPool = new re, this.uniqueList = new Fi(n), this.particleBuffer = d, this.buffer = d.buffer, this.stride = d.stride, this.geometry = d.geometry, this.material = p, this.points = new qi.Points(this.geometry, this.material), this.points.frustumCulled = !1, this.shouldDebugTextureAtlas = l, this.container.add(this.points);
                }
                onSystemUpdate(t) {
                    super.onSystemUpdate(t), this.buffer.needsUpdate = !0, this.textureAtlas && this.textureAtlas.update();
                }
                onParticleCreated(t) {
                    t.target || (t.target = this.targetPool.get(Vi, qi), this.uniqueList.add(t.id)), this.updateTarget(t).mapParticleTargetPropsToPoint(t);
                }
                onParticleUpdate(t) {
                    t.target && this.updateTarget(t).mapParticleTargetPropsToPoint(t);
                }
                onParticleDead(t) {
                    t.target && (t.target.reset(), this.mapParticleTargetPropsToPoint(t), t.target = null);
                }
                updateTarget(t) {
                    const { position: e, scale: i, radius: s, color: r, alpha: n, body: o, id: a } = t, { r: h, g: c, b: u } = r;
                    if (t.target.position.copy(e), t.target.size = i * s, t.target.color.setRGB(h, c, u), t.target.alpha = n, t.target.index = this.uniqueList.find(a), o && o instanceof qi.Sprite) {
                        const { map: e } = o.material;
                        t.target.texture = e, t.target.textureIndex = this.getTextureID(e, this.shouldDebugTextureAtlas);
                    }
                    return this;
                }
                mapParticleTargetPropsToPoint(t) {
                    return this.updatePointPosition(t).updatePointSize(t).updatePointColor(t).updatePointAlpha(t).updatePointTextureIndex(t), this;
                }
                updatePointPosition(t) {
                    const { geometry: e, stride: i, buffer: s } = this, { target: r } = t, { offset: n } = e.attributes.position;
                    return s.array[r.index * i + n + 0] = r.position.x, s.array[r.index * i + n + 1] = r.position.y, s.array[r.index * i + n + 2] = r.position.z, this;
                }
                updatePointSize(t) {
                    const { geometry: e, stride: i, buffer: s } = this, { target: r } = t, { offset: n } = e.attributes.size;
                    return s.array[r.index * i + n + 0] = r.size, this;
                }
                updatePointColor(t) {
                    const { geometry: e, stride: i, buffer: s } = this, { target: r } = t, { offset: n } = e.attributes.color;
                    return s.array[r.index * i + n + 0] = r.color.r, s.array[r.index * i + n + 1] = r.color.g, s.array[r.index * i + n + 2] = r.color.b, this;
                }
                updatePointAlpha(t) {
                    const { geometry: e, stride: i, buffer: s } = this, { target: r } = t, { offset: n } = e.attributes.alpha;
                    return s.array[r.index * i + n + 0] = r.alpha, this;
                }
                updatePointTextureIndex(t) {
                    const { geometry: e, stride: i, buffer: s } = this, { target: r } = t, { offset: n } = e.attributes.texID;
                    return s.array[r.index * i + n + 0] = r.textureIndex, this;
                }
                getTextureID(t, e) {
                    return void 0 === t.textureIndex && (this.textureAtlas || (this.textureAtlas = new Ui(this, e)), this.textureAtlas.addTexture(t)), t.textureIndex;
                }
                destroy() {
                    const { container: t, points: e, textureAtlas: i, uniqueList: s } = this;
                    t.remove(e), s.destroy(), i && i.destroy();
                }
            }
            function Xi(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), i.push.apply(i, s);
                }
                return i;
            }
            function Ji(t) {
                for(var e = 1; e < arguments.length; e++){
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Xi(Object(i), !0).forEach(function(e) {
                        mt(t, e, i[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Xi(Object(i)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                    });
                }
                return t;
            }
            class Qi extends Pi {
                constructor(t, e, i = Di){
                    super(j), Yi = this.three = e;
                    const s = Ji(Ji({}, Di), i), { camera: r, maxParticles: n, baseColor: o, blending: a, depthTest: h, depthWrite: c, transparent: u, shouldDebugTextureAtlas: l } = s, d = new Zi(n, Yi), p = new Yi.ShaderMaterial({
                        uniforms: {
                            baseColor: {
                                value: new Yi.Color(o)
                            },
                            uTexture: {
                                value: null
                            },
                            FFatlasIndex: {
                                value: null
                            },
                            atlasDim: {
                                value: new Yi.Vector2
                            }
                        },
                        vertexShader: "\n    uniform sampler2D uTexture;\n    uniform vec2 atlasDim;\n\n    attribute float size;\n    attribute vec3 color;\n    attribute float alpha;\n    attribute vec2 texID;\n\n    varying vec3 targetColor;\n    varying float targetAlpha;\n    varying vec4 tileRect;\n\n    void main() {\n      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n      targetColor = color;\n      targetAlpha = alpha;\n\n      vec2 tmin = floor(texID) / atlasDim;\n      vec2 tmax = fract(texID);\n      tileRect = vec4(tmin,tmax);\n\n      gl_PointSize = ((size * 600.0) / -mvPosition.z);\n      gl_Position = projectionMatrix * mvPosition;\n    }\n",
                        fragmentShader: "\n    uniform vec3 baseColor;\n    uniform sampler2D uTexture;\n\n    varying vec3 targetColor;\n    varying float targetAlpha;\n    varying vec4 tileRect;\n\n    void main() {\n      gl_FragColor = vec4(baseColor * targetColor, targetAlpha);\n\n      vec2 uv = gl_PointCoord;\n      uv = mix(tileRect.xy, tileRect.zw, gl_PointCoord);\n\n      gl_FragColor = gl_FragColor * texture2D(uTexture, uv);\n    }\n",
                        blending: Yi[a],
                        depthTest: h,
                        depthWrite: c,
                        transparent: u
                    });
                    this.camera = r, this.targetPool = new re, this.uniqueList = new Fi(n), this.particleBuffer = d, this.buffer = d.buffer, this.stride = d.stride, this.geometry = d.geometry, this.material = p, this.points = new Yi.Points(this.geometry, this.material), this.points.frustumCulled = !1, this.shouldDebugTextureAtlas = l, t.add(this.points);
                }
                onSystemUpdate(t) {
                    super.onSystemUpdate(t), this.buffer.needsUpdate = !0;
                    const { textureAtlas: e } = this;
                    e && (e.update(), this.material.uniforms.atlasDim.value.set(e.atlasTexture.image.width, e.atlasTexture.image.height));
                }
                onParticleCreated(t) {
                    t.target || (t.target = this.targetPool.get(Vi, Yi), this.uniqueList.add(t.id)), this.updateTarget(t).mapParticleTargetPropsToPoint(t);
                }
                onParticleUpdate(t) {
                    t.target && this.updateTarget(t).mapParticleTargetPropsToPoint(t);
                }
                onParticleDead(t) {
                    t.target && (t.target.reset(), this.mapParticleTargetPropsToPoint(t), t.target = null);
                }
                updateTarget(t) {
                    const { position: e, scale: i, radius: s, color: r, alpha: n, body: o, id: a } = t, { r: h, g: c, b: u } = r;
                    if (t.target.position.copy(e), t.target.size = i * s, t.target.color.setRGB(h, c, u), t.target.alpha = n, t.target.index = this.uniqueList.find(a), o && o instanceof Yi.Sprite) {
                        const { map: e } = o.material;
                        t.target.texture = e, t.target.textureIndex = this.getTextureID(e, this.shouldDebugTextureAtlas);
                    }
                    return this;
                }
                mapParticleTargetPropsToPoint(t) {
                    return this.updatePointPosition(t).updatePointSize(t).updatePointColor(t).updatePointAlpha(t).updatePointTextureIndex(t), this;
                }
                updatePointPosition(t) {
                    const { geometry: e, stride: i, buffer: s } = this, { target: r } = t, { offset: n } = e.attributes.position;
                    return s.array[r.index * i + n + 0] = r.position.x, s.array[r.index * i + n + 1] = r.position.y, s.array[r.index * i + n + 2] = r.position.z, this;
                }
                updatePointSize(t) {
                    const { geometry: e, stride: i, buffer: s } = this, { target: r } = t, { offset: n } = e.attributes.size;
                    return s.array[r.index * i + n + 0] = r.size, this;
                }
                updatePointColor(t) {
                    const { geometry: e, stride: i, buffer: s } = this, { target: r } = t, { offset: n } = e.attributes.color;
                    return s.array[r.index * i + n + 0] = r.color.r, s.array[r.index * i + n + 1] = r.color.g, s.array[r.index * i + n + 2] = r.color.b, this;
                }
                updatePointAlpha(t) {
                    const { geometry: e, stride: i, buffer: s } = this, { target: r } = t, { offset: n } = e.attributes.alpha;
                    return s.array[r.index * i + n + 0] = r.alpha, this;
                }
                updatePointTextureIndex(t) {
                    const { geometry: e, stride: i, buffer: s } = this, { target: r } = t, { offset: n } = e.attributes.texID, o = r.index * i + n + 0;
                    {
                        let t = 4 * r.textureIndex;
                        const e = this.textureAtlas, i = e.indexData, n = i[t++], a = i[t++], h = i[t++], c = i[t++];
                        s.array[o] = (n * e.atlasTexture.image.width | 0) + h, s.array[o + 1] = (a * e.atlasTexture.image.height | 0) + c;
                    }
                    return this;
                }
                getTextureID(t, e) {
                    return void 0 === t.textureIndex && (this.textureAtlas || (this.textureAtlas = new Ui(this, e)), this.textureAtlas.addTexture(t)), t.textureIndex;
                }
                destroy() {
                    const { container: t, points: e, textureAtlas: i, uniqueList: s } = this;
                    t.remove(e), s.destroy(), i && i.destroy();
                }
            }
            class Hi extends Pi {
                constructor(t, e, i = Di){
                    super("GPURenderer");
                    const { shouldForceDesktopRenderer: s, shouldForceMobileRenderer: r } = i, n = [
                        t,
                        e,
                        i
                    ];
                    return s ? new Gi(...n) : r ? new Qi(...n) : this.isFloatingPointTextureSupported() ? new Gi(...n) : new Qi(...n);
                }
                isFloatingPointTextureSupported() {
                    const t = document.createElement("canvas");
                    if (window.WebGL2RenderingContext && t.getContext("webgl2")) return !0;
                    const e = !!t.getContext("webgl").getExtension("OES_texture_float");
                    return t.remove(), e;
                }
            }
            const $i = vi;
        })(), s;
    })();
});

//# sourceMappingURL=index.880a998c.js.map
