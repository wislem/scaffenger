/* Avoid `console` errors in browsers that lack a console */
(function () {
    var e;
    var t = function () {
    };
    var n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"];
    var r = n.length;
    var i = window.console = window.console || {};
    while (r--) {
        e = n[r];
        if (!i[e]) {
            i[e] = t
        }
    }
})();

//! moment.js
//! version : 2.8.3
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function (a) {
    function b(a, b, c) {
        switch (arguments.length) {
            case 2:
                return null != a ? a : b;
            case 3:
                return null != a ? a : null != b ? b : c;
            default:
                throw new Error("Implement me")
        }
    }

    function c(a, b) {
        return zb.call(a, b)
    }

    function d() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function e(a) {
        tb.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + a)
    }

    function f(a, b) {
        var c = !0;
        return m(function () {
            return c && (e(a), c = !1), b.apply(this, arguments)
        }, b)
    }

    function g(a, b) {
        qc[a] || (e(b), qc[a] = !0)
    }

    function h(a, b) {
        return function (c) {
            return p(a.call(this, c), b)
        }
    }

    function i(a, b) {
        return function (c) {
            return this.localeData().ordinal(a.call(this, c), b)
        }
    }

    function j() {
    }

    function k(a, b) {
        b !== !1 && F(a), n(this, a), this._d = new Date(+a._d)
    }

    function l(a) {
        var b = y(a), c = b.year || 0, d = b.quarter || 0, e = b.month || 0, f = b.week || 0, g = b.day || 0, h = b.hour || 0, i = b.minute || 0, j = b.second || 0, k = b.millisecond || 0;
        this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = tb.localeData(), this._bubble()
    }

    function m(a, b) {
        for (var d in b)c(b, d) && (a[d] = b[d]);
        return c(b, "toString") && (a.toString = b.toString), c(b, "valueOf") && (a.valueOf = b.valueOf), a
    }

    function n(a, b) {
        var c, d, e;
        if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = b._pf), "undefined" != typeof b._locale && (a._locale = b._locale), Ib.length > 0)for (c in Ib)d = Ib[c], e = b[d], "undefined" != typeof e && (a[d] = e);
        return a
    }

    function o(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }

    function p(a, b, c) {
        for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;)d = "0" + d;
        return (e ? c ? "+" : "" : "-") + d
    }

    function q(a, b) {
        var c = {milliseconds: 0, months: 0};
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
    }

    function r(a, b) {
        var c;
        return b = K(b, a), a.isBefore(b) ? c = q(a, b) : (c = q(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c
    }

    function s(a, b) {
        return function (c, d) {
            var e, f;
            return null === d || isNaN(+d) || (g(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = tb.duration(c, d), t(this, e, a), this
        }
    }

    function t(a, b, c, d) {
        var e = b._milliseconds, f = b._days, g = b._months;
        d = null == d ? !0 : d, e && a._d.setTime(+a._d + e * c), f && nb(a, "Date", mb(a, "Date") + f * c), g && lb(a, mb(a, "Month") + g * c), d && tb.updateOffset(a, f || g)
    }

    function u(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }

    function v(a) {
        return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
    }

    function w(a, b, c) {
        var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0;
        for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && A(a[d]) !== A(b[d])) && g++;
        return g + f
    }

    function x(a) {
        if (a) {
            var b = a.toLowerCase().replace(/(.)s$/, "$1");
            a = jc[a] || kc[b] || b
        }
        return a
    }

    function y(a) {
        var b, d, e = {};
        for (d in a)c(a, d) && (b = x(d), b && (e[b] = a[d]));
        return e
    }

    function z(b) {
        var c, d;
        if (0 === b.indexOf("week"))c = 7, d = "day"; else {
            if (0 !== b.indexOf("month"))return;
            c = 12, d = "month"
        }
        tb[b] = function (e, f) {
            var g, h, i = tb._locale[b], j = [];
            if ("number" == typeof e && (f = e, e = a), h = function (a) {
                    var b = tb().utc().set(d, a);
                    return i.call(tb._locale, b, e || "")
                }, null != f)return h(f);
            for (g = 0; c > g; g++)j.push(h(g));
            return j
        }
    }

    function A(a) {
        var b = +a, c = 0;
        return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
    }

    function B(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }

    function C(a, b, c) {
        return hb(tb([a, 11, 31 + b - c]), b, c).week
    }

    function D(a) {
        return E(a) ? 366 : 365
    }

    function E(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }

    function F(a) {
        var b;
        a._a && -2 === a._pf.overflow && (b = a._a[Bb] < 0 || a._a[Bb] > 11 ? Bb : a._a[Cb] < 1 || a._a[Cb] > B(a._a[Ab], a._a[Bb]) ? Cb : a._a[Db] < 0 || a._a[Db] > 23 ? Db : a._a[Eb] < 0 || a._a[Eb] > 59 ? Eb : a._a[Fb] < 0 || a._a[Fb] > 59 ? Fb : a._a[Gb] < 0 || a._a[Gb] > 999 ? Gb : -1, a._pf._overflowDayOfYear && (Ab > b || b > Cb) && (b = Cb), a._pf.overflow = b)
    }

    function G(a) {
        return null == a._isValid && (a._isValid = !isNaN(a._d.getTime()) && a._pf.overflow < 0 && !a._pf.empty && !a._pf.invalidMonth && !a._pf.nullInput && !a._pf.invalidFormat && !a._pf.userInvalidated, a._strict && (a._isValid = a._isValid && 0 === a._pf.charsLeftOver && 0 === a._pf.unusedTokens.length)), a._isValid
    }

    function H(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }

    function I(a) {
        for (var b, c, d, e, f = 0; f < a.length;) {
            for (e = H(a[f]).split("-"), b = e.length, c = H(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                if (d = J(e.slice(0, b).join("-")))return d;
                if (c && c.length >= b && w(e, c, !0) >= b - 1)break;
                b--
            }
            f++
        }
        return null
    }

    function J(a) {
        var b = null;
        if (!Hb[a] && Jb)try {
            b = tb.locale(), require("./locale/" + a), tb.locale(b)
        } catch (c) {
        }
        return Hb[a]
    }

    function K(a, b) {
        return b._isUTC ? tb(a).zone(b._offset || 0) : tb(a).local()
    }

    function L(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }

    function M(a) {
        var b, c, d = a.match(Nb);
        for (b = 0, c = d.length; c > b; b++)d[b] = pc[d[b]] ? pc[d[b]] : L(d[b]);
        return function (e) {
            var f = "";
            for (b = 0; c > b; b++)f += d[b]instanceof Function ? d[b].call(e, a) : d[b];
            return f
        }
    }

    function N(a, b) {
        return a.isValid() ? (b = O(b, a.localeData()), lc[b] || (lc[b] = M(b)), lc[b](a)) : a.localeData().invalidDate()
    }

    function O(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }

        var d = 5;
        for (Ob.lastIndex = 0; d >= 0 && Ob.test(a);)a = a.replace(Ob, c), Ob.lastIndex = 0, d -= 1;
        return a
    }

    function P(a, b) {
        var c, d = b._strict;
        switch (a) {
            case"Q":
                return Zb;
            case"DDDD":
                return _b;
            case"YYYY":
            case"GGGG":
            case"gggg":
                return d ? ac : Rb;
            case"Y":
            case"G":
            case"g":
                return cc;
            case"YYYYYY":
            case"YYYYY":
            case"GGGGG":
            case"ggggg":
                return d ? bc : Sb;
            case"S":
                if (d)return Zb;
            case"SS":
                if (d)return $b;
            case"SSS":
                if (d)return _b;
            case"DDD":
                return Qb;
            case"MMM":
            case"MMMM":
            case"dd":
            case"ddd":
            case"dddd":
                return Ub;
            case"a":
            case"A":
                return b._locale._meridiemParse;
            case"X":
                return Xb;
            case"Z":
            case"ZZ":
                return Vb;
            case"T":
                return Wb;
            case"SSSS":
                return Tb;
            case"MM":
            case"DD":
            case"YY":
            case"GG":
            case"gg":
            case"HH":
            case"hh":
            case"mm":
            case"ss":
            case"ww":
            case"WW":
                return d ? $b : Pb;
            case"M":
            case"D":
            case"d":
            case"H":
            case"h":
            case"m":
            case"s":
            case"w":
            case"W":
            case"e":
            case"E":
                return Pb;
            case"Do":
                return Yb;
            default:
                return c = new RegExp(Y(X(a.replace("\\", "")), "i"))
        }
    }

    function Q(a) {
        a = a || "";
        var b = a.match(Vb) || [], c = b[b.length - 1] || [], d = (c + "").match(hc) || ["-", 0, 0], e = +(60 * d[1]) + A(d[2]);
        return "+" === d[0] ? -e : e
    }

    function R(a, b, c) {
        var d, e = c._a;
        switch (a) {
            case"Q":
                null != b && (e[Bb] = 3 * (A(b) - 1));
                break;
            case"M":
            case"MM":
                null != b && (e[Bb] = A(b) - 1);
                break;
            case"MMM":
            case"MMMM":
                d = c._locale.monthsParse(b), null != d ? e[Bb] = d : c._pf.invalidMonth = b;
                break;
            case"D":
            case"DD":
                null != b && (e[Cb] = A(b));
                break;
            case"Do":
                null != b && (e[Cb] = A(parseInt(b, 10)));
                break;
            case"DDD":
            case"DDDD":
                null != b && (c._dayOfYear = A(b));
                break;
            case"YY":
                e[Ab] = tb.parseTwoDigitYear(b);
                break;
            case"YYYY":
            case"YYYYY":
            case"YYYYYY":
                e[Ab] = A(b);
                break;
            case"a":
            case"A":
                c._isPm = c._locale.isPM(b);
                break;
            case"H":
            case"HH":
            case"h":
            case"hh":
                e[Db] = A(b);
                break;
            case"m":
            case"mm":
                e[Eb] = A(b);
                break;
            case"s":
            case"ss":
                e[Fb] = A(b);
                break;
            case"S":
            case"SS":
            case"SSS":
            case"SSSS":
                e[Gb] = A(1e3 * ("0." + b));
                break;
            case"X":
                c._d = new Date(1e3 * parseFloat(b));
                break;
            case"Z":
            case"ZZ":
                c._useUTC = !0, c._tzm = Q(b);
                break;
            case"dd":
            case"ddd":
            case"dddd":
                d = c._locale.weekdaysParse(b), null != d ? (c._w = c._w || {}, c._w.d = d) : c._pf.invalidWeekday = b;
                break;
            case"w":
            case"ww":
            case"W":
            case"WW":
            case"d":
            case"e":
            case"E":
                a = a.substr(0, 1);
            case"gggg":
            case"GGGG":
            case"GGGGG":
                a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = A(b));
                break;
            case"gg":
            case"GG":
                c._w = c._w || {}, c._w[a] = tb.parseTwoDigitYear(b)
        }
    }

    function S(a) {
        var c, d, e, f, g, h, i;
        c = a._w, null != c.GG || null != c.W || null != c.E ? (g = 1, h = 4, d = b(c.GG, a._a[Ab], hb(tb(), 1, 4).year), e = b(c.W, 1), f = b(c.E, 1)) : (g = a._locale._week.dow, h = a._locale._week.doy, d = b(c.gg, a._a[Ab], hb(tb(), g, h).year), e = b(c.w, 1), null != c.d ? (f = c.d, g > f && ++e) : f = null != c.e ? c.e + g : g), i = ib(d, e, f, h, g), a._a[Ab] = i.year, a._dayOfYear = i.dayOfYear
    }

    function T(a) {
        var c, d, e, f, g = [];
        if (!a._d) {
            for (e = V(a), a._w && null == a._a[Cb] && null == a._a[Bb] && S(a), a._dayOfYear && (f = b(a._a[Ab], e[Ab]), a._dayOfYear > D(f) && (a._pf._overflowDayOfYear = !0), d = db(f, 0, a._dayOfYear), a._a[Bb] = d.getUTCMonth(), a._a[Cb] = d.getUTCDate()), c = 0; 3 > c && null == a._a[c]; ++c)a._a[c] = g[c] = e[c];
            for (; 7 > c; c++)a._a[c] = g[c] = null == a._a[c] ? 2 === c ? 1 : 0 : a._a[c];
            a._d = (a._useUTC ? db : cb).apply(null, g), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() + a._tzm)
        }
    }

    function U(a) {
        var b;
        a._d || (b = y(a._i), a._a = [b.year, b.month, b.day, b.hour, b.minute, b.second, b.millisecond], T(a))
    }

    function V(a) {
        var b = new Date;
        return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
    }

    function W(a) {
        if (a._f === tb.ISO_8601)return void $(a);
        a._a = [], a._pf.empty = !0;
        var b, c, d, e, f, g = "" + a._i, h = g.length, i = 0;
        for (d = O(a._f, a._locale).match(Nb) || [], b = 0; b < d.length; b++)e = d[b], c = (g.match(P(e, a)) || [])[0], c && (f = g.substr(0, g.indexOf(c)), f.length > 0 && a._pf.unusedInput.push(f), g = g.slice(g.indexOf(c) + c.length), i += c.length), pc[e] ? (c ? a._pf.empty = !1 : a._pf.unusedTokens.push(e), R(e, c, a)) : a._strict && !c && a._pf.unusedTokens.push(e);
        a._pf.charsLeftOver = h - i, g.length > 0 && a._pf.unusedInput.push(g), a._isPm && a._a[Db] < 12 && (a._a[Db] += 12), a._isPm === !1 && 12 === a._a[Db] && (a._a[Db] = 0), T(a), F(a)
    }

    function X(a) {
        return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
            return b || c || d || e
        })
    }

    function Y(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function Z(a) {
        var b, c, e, f, g;
        if (0 === a._f.length)return a._pf.invalidFormat = !0, void(a._d = new Date(0 / 0));
        for (f = 0; f < a._f.length; f++)g = 0, b = n({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._pf = d(), b._f = a._f[f], W(b), G(b) && (g += b._pf.charsLeftOver, g += 10 * b._pf.unusedTokens.length, b._pf.score = g, (null == e || e > g) && (e = g, c = b));
        m(a, c || b)
    }

    function $(a) {
        var b, c, d = a._i, e = dc.exec(d);
        if (e) {
            for (a._pf.iso = !0, b = 0, c = fc.length; c > b; b++)if (fc[b][1].exec(d)) {
                a._f = fc[b][0] + (e[6] || " ");
                break
            }
            for (b = 0, c = gc.length; c > b; b++)if (gc[b][1].exec(d)) {
                a._f += gc[b][0];
                break
            }
            d.match(Vb) && (a._f += "Z"), W(a)
        } else a._isValid = !1
    }

    function _(a) {
        $(a), a._isValid === !1 && (delete a._isValid, tb.createFromInputFallback(a))
    }

    function ab(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c)d.push(b(a[c], c));
        return d
    }

    function bb(b) {
        var c, d = b._i;
        d === a ? b._d = new Date : v(d) ? b._d = new Date(+d) : null !== (c = Kb.exec(d)) ? b._d = new Date(+c[1]) : "string" == typeof d ? _(b) : u(d) ? (b._a = ab(d.slice(0), function (a) {
            return parseInt(a, 10)
        }), T(b)) : "object" == typeof d ? U(b) : "number" == typeof d ? b._d = new Date(d) : tb.createFromInputFallback(b)
    }

    function cb(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 1970 > a && h.setFullYear(a), h
    }

    function db(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 1970 > a && b.setUTCFullYear(a), b
    }

    function eb(a, b) {
        if ("string" == typeof a)if (isNaN(a)) {
            if (a = b.weekdaysParse(a), "number" != typeof a)return null
        } else a = parseInt(a, 10);
        return a
    }

    function fb(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }

    function gb(a, b, c) {
        var d = tb.duration(a).abs(), e = yb(d.as("s")), f = yb(d.as("m")), g = yb(d.as("h")), h = yb(d.as("d")), i = yb(d.as("M")), j = yb(d.as("y")), k = e < mc.s && ["s", e] || 1 === f && ["m"] || f < mc.m && ["mm", f] || 1 === g && ["h"] || g < mc.h && ["hh", g] || 1 === h && ["d"] || h < mc.d && ["dd", h] || 1 === i && ["M"] || i < mc.M && ["MM", i] || 1 === j && ["y"] || ["yy", j];
        return k[2] = b, k[3] = +a > 0, k[4] = c, fb.apply({}, k)
    }

    function hb(a, b, c) {
        var d, e = c - b, f = c - a.day();
        return f > e && (f -= 7), e - 7 > f && (f += 7), d = tb(a).add(f, "d"), {
            week: Math.ceil(d.dayOfYear() / 7),
            year: d.year()
        }
    }

    function ib(a, b, c, d, e) {
        var f, g, h = db(a, 0, 1).getUTCDay();
        return h = 0 === h ? 7 : h, c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {
            year: g > 0 ? a : a - 1,
            dayOfYear: g > 0 ? g : D(a - 1) + g
        }
    }

    function jb(b) {
        var c = b._i, d = b._f;
        return b._locale = b._locale || tb.localeData(b._l), null === c || d === a && "" === c ? tb.invalid({nullInput: !0}) : ("string" == typeof c && (b._i = c = b._locale.preparse(c)), tb.isMoment(c) ? new k(c, !0) : (d ? u(d) ? Z(b) : W(b) : bb(b), new k(b)))
    }

    function kb(a, b) {
        var c, d;
        if (1 === b.length && u(b[0]) && (b = b[0]), !b.length)return tb();
        for (c = b[0], d = 1; d < b.length; ++d)b[d][a](c) && (c = b[d]);
        return c
    }

    function lb(a, b) {
        var c;
        return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), B(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
    }

    function mb(a, b) {
        return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
    }

    function nb(a, b, c) {
        return "Month" === b ? lb(a, c) : a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
    }

    function ob(a, b) {
        return function (c) {
            return null != c ? (nb(this, a, c), tb.updateOffset(this, b), this) : mb(this, a)
        }
    }

    function pb(a) {
        return 400 * a / 146097
    }

    function qb(a) {
        return 146097 * a / 400
    }

    function rb(a) {
        tb.duration.fn[a] = function () {
            return this._data[a]
        }
    }

    function sb(a) {
        "undefined" == typeof ender && (ub = xb.moment, xb.moment = a ? f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", tb) : tb)
    }

    for (var tb, ub, vb, wb = "2.8.3", xb = "undefined" != typeof global ? global : this, yb = Math.round, zb = Object.prototype.hasOwnProperty, Ab = 0, Bb = 1, Cb = 2, Db = 3, Eb = 4, Fb = 5, Gb = 6, Hb = {}, Ib = [], Jb = "undefined" != typeof module && module.exports, Kb = /^\/?Date\((\-?\d+)/i, Lb = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Mb = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Nb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, Ob = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, Pb = /\d\d?/, Qb = /\d{1,3}/, Rb = /\d{1,4}/, Sb = /[+\-]?\d{1,6}/, Tb = /\d+/, Ub = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Vb = /Z|[\+\-]\d\d:?\d\d/gi, Wb = /T/i, Xb = /[\+\-]?\d+(\.\d{1,3})?/, Yb = /\d{1,2}/, Zb = /\d/, $b = /\d\d/, _b = /\d{3}/, ac = /\d{4}/, bc = /[+-]?\d{6}/, cc = /[+-]?\d+/, dc = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ec = "YYYY-MM-DDTHH:mm:ssZ", fc = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], gc = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], hc = /([\+\-]|\d\d)/gi, ic = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
    }), jc = {
        ms: "millisecond",
        s: "second",
        m: "minute",
        h: "hour",
        d: "day",
        D: "date",
        w: "week",
        W: "isoWeek",
        M: "month",
        Q: "quarter",
        y: "year",
        DDD: "dayOfYear",
        e: "weekday",
        E: "isoWeekday",
        gg: "weekYear",
        GG: "isoWeekYear"
    }, kc = {
        dayofyear: "dayOfYear",
        isoweekday: "isoWeekday",
        isoweek: "isoWeek",
        weekyear: "weekYear",
        isoweekyear: "isoWeekYear"
    }, lc = {}, mc = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    }, nc = "DDD w W M D d".split(" "), oc = "M D H h m s w W".split(" "), pc = {
        M: function () {
            return this.month() + 1
        }, MMM: function (a) {
            return this.localeData().monthsShort(this, a)
        }, MMMM: function (a) {
            return this.localeData().months(this, a)
        }, D: function () {
            return this.date()
        }, DDD: function () {
            return this.dayOfYear()
        }, d: function () {
            return this.day()
        }, dd: function (a) {
            return this.localeData().weekdaysMin(this, a)
        }, ddd: function (a) {
            return this.localeData().weekdaysShort(this, a)
        }, dddd: function (a) {
            return this.localeData().weekdays(this, a)
        }, w: function () {
            return this.week()
        }, W: function () {
            return this.isoWeek()
        }, YY: function () {
            return p(this.year() % 100, 2)
        }, YYYY: function () {
            return p(this.year(), 4)
        }, YYYYY: function () {
            return p(this.year(), 5)
        }, YYYYYY: function () {
            var a = this.year(), b = a >= 0 ? "+" : "-";
            return b + p(Math.abs(a), 6)
        }, gg: function () {
            return p(this.weekYear() % 100, 2)
        }, gggg: function () {
            return p(this.weekYear(), 4)
        }, ggggg: function () {
            return p(this.weekYear(), 5)
        }, GG: function () {
            return p(this.isoWeekYear() % 100, 2)
        }, GGGG: function () {
            return p(this.isoWeekYear(), 4)
        }, GGGGG: function () {
            return p(this.isoWeekYear(), 5)
        }, e: function () {
            return this.weekday()
        }, E: function () {
            return this.isoWeekday()
        }, a: function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), !0)
        }, A: function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), !1)
        }, H: function () {
            return this.hours()
        }, h: function () {
            return this.hours() % 12 || 12
        }, m: function () {
            return this.minutes()
        }, s: function () {
            return this.seconds()
        }, S: function () {
            return A(this.milliseconds() / 100)
        }, SS: function () {
            return p(A(this.milliseconds() / 10), 2)
        }, SSS: function () {
            return p(this.milliseconds(), 3)
        }, SSSS: function () {
            return p(this.milliseconds(), 3)
        }, Z: function () {
            var a = -this.zone(), b = "+";
            return 0 > a && (a = -a, b = "-"), b + p(A(a / 60), 2) + ":" + p(A(a) % 60, 2)
        }, ZZ: function () {
            var a = -this.zone(), b = "+";
            return 0 > a && (a = -a, b = "-"), b + p(A(a / 60), 2) + p(A(a) % 60, 2)
        }, z: function () {
            return this.zoneAbbr()
        }, zz: function () {
            return this.zoneName()
        }, X: function () {
            return this.unix()
        }, Q: function () {
            return this.quarter()
        }
    }, qc = {}, rc = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; nc.length;)vb = nc.pop(), pc[vb + "o"] = i(pc[vb], vb);
    for (; oc.length;)vb = oc.pop(), pc[vb + vb] = h(pc[vb], 2);
    pc.DDDD = h(pc.DDD, 3), m(j.prototype, {
        set: function (a) {
            var b, c;
            for (c in a)b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function (a) {
            return this._months[a.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function (a) {
            return this._monthsShort[a.month()]
        },
        monthsParse: function (a) {
            var b, c, d;
            for (this._monthsParse || (this._monthsParse = []), b = 0; 12 > b; b++)if (this._monthsParse[b] || (c = tb.utc([2e3, b]), d = "^" + this.months(c, "") + "|^" + this.monthsShort(c, ""), this._monthsParse[b] = new RegExp(d.replace(".", ""), "i")), this._monthsParse[b].test(a))return b
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function (a) {
            return this._weekdays[a.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function (a) {
            return this._weekdaysShort[a.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function (a) {
            return this._weekdaysMin[a.day()]
        },
        weekdaysParse: function (a) {
            var b, c, d;
            for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)if (this._weekdaysParse[b] || (c = tb([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a))return b
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY LT",
            LLLL: "dddd, MMMM D, YYYY LT"
        },
        longDateFormat: function (a) {
            var b = this._longDateFormat[a];
            return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (a) {
                return a.slice(1)
            }), this._longDateFormat[a] = b), b
        },
        isPM: function (a) {
            return "p" === (a + "").toLowerCase().charAt(0)
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function (a, b, c) {
            return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function (a, b) {
            var c = this._calendar[a];
            return "function" == typeof c ? c.apply(b) : c
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function (a, b, c, d) {
            var e = this._relativeTime[c];
            return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
        },
        pastFuture: function (a, b) {
            var c = this._relativeTime[a > 0 ? "future" : "past"];
            return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
        },
        ordinal: function (a) {
            return this._ordinal.replace("%d", a)
        },
        _ordinal: "%d",
        preparse: function (a) {
            return a
        },
        postformat: function (a) {
            return a
        },
        week: function (a) {
            return hb(a, this._week.dow, this._week.doy).week
        },
        _week: {dow: 0, doy: 6},
        _invalidDate: "Invalid date",
        invalidDate: function () {
            return this._invalidDate
        }
    }), tb = function (b, c, e, f) {
        var g;
        return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._i = b, g._f = c, g._l = e, g._strict = f, g._isUTC = !1, g._pf = d(), jb(g)
    }, tb.suppressDeprecationWarnings = !1, tb.createFromInputFallback = f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (a) {
        a._d = new Date(a._i)
    }), tb.min = function () {
        var a = [].slice.call(arguments, 0);
        return kb("isBefore", a)
    }, tb.max = function () {
        var a = [].slice.call(arguments, 0);
        return kb("isAfter", a)
    }, tb.utc = function (b, c, e, f) {
        var g;
        return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._useUTC = !0, g._isUTC = !0, g._l = e, g._i = b, g._f = c, g._strict = f, g._pf = d(), jb(g).utc()
    }, tb.unix = function (a) {
        return tb(1e3 * a)
    }, tb.duration = function (a, b) {
        var d, e, f, g, h = a, i = null;
        return tb.isDuration(a) ? h = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : "number" == typeof a ? (h = {}, b ? h[b] = a : h.milliseconds = a) : (i = Lb.exec(a)) ? (d = "-" === i[1] ? -1 : 1, h = {
            y: 0,
            d: A(i[Cb]) * d,
            h: A(i[Db]) * d,
            m: A(i[Eb]) * d,
            s: A(i[Fb]) * d,
            ms: A(i[Gb]) * d
        }) : (i = Mb.exec(a)) ? (d = "-" === i[1] ? -1 : 1, f = function (a) {
            var b = a && parseFloat(a.replace(",", "."));
            return (isNaN(b) ? 0 : b) * d
        }, h = {
            y: f(i[2]),
            M: f(i[3]),
            d: f(i[4]),
            h: f(i[5]),
            m: f(i[6]),
            s: f(i[7]),
            w: f(i[8])
        }) : "object" == typeof h && ("from"in h || "to"in h) && (g = r(tb(h.from), tb(h.to)), h = {}, h.ms = g.milliseconds, h.M = g.months), e = new l(h), tb.isDuration(a) && c(a, "_locale") && (e._locale = a._locale), e
    }, tb.version = wb, tb.defaultFormat = ec, tb.ISO_8601 = function () {
    }, tb.momentProperties = Ib, tb.updateOffset = function () {
    }, tb.relativeTimeThreshold = function (b, c) {
        return mc[b] === a ? !1 : c === a ? mc[b] : (mc[b] = c, !0)
    }, tb.lang = f("moment.lang is deprecated. Use moment.locale instead.", function (a, b) {
        return tb.locale(a, b)
    }), tb.locale = function (a, b) {
        var c;
        return a && (c = "undefined" != typeof b ? tb.defineLocale(a, b) : tb.localeData(a), c && (tb.duration._locale = tb._locale = c)), tb._locale._abbr
    }, tb.defineLocale = function (a, b) {
        return null !== b ? (b.abbr = a, Hb[a] || (Hb[a] = new j), Hb[a].set(b), tb.locale(a), Hb[a]) : (delete Hb[a], null)
    }, tb.langData = f("moment.langData is deprecated. Use moment.localeData instead.", function (a) {
        return tb.localeData(a)
    }), tb.localeData = function (a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a)return tb._locale;
        if (!u(a)) {
            if (b = J(a))return b;
            a = [a]
        }
        return I(a)
    }, tb.isMoment = function (a) {
        return a instanceof k || null != a && c(a, "_isAMomentObject")
    }, tb.isDuration = function (a) {
        return a instanceof l
    };
    for (vb = rc.length - 1; vb >= 0; --vb)z(rc[vb]);
    tb.normalizeUnits = function (a) {
        return x(a)
    }, tb.invalid = function (a) {
        var b = tb.utc(0 / 0);
        return null != a ? m(b._pf, a) : b._pf.userInvalidated = !0, b
    }, tb.parseZone = function () {
        return tb.apply(null, arguments).parseZone()
    }, tb.parseTwoDigitYear = function (a) {
        return A(a) + (A(a) > 68 ? 1900 : 2e3)
    }, m(tb.fn = k.prototype, {
        clone: function () {
            return tb(this)
        },
        valueOf: function () {
            return +this._d + 6e4 * (this._offset || 0)
        },
        unix: function () {
            return Math.floor(+this / 1e3)
        },
        toString: function () {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function () {
            return this._offset ? new Date(+this) : this._d
        },
        toISOString: function () {
            var a = tb(this).utc();
            return 0 < a.year() && a.year() <= 9999 ? N(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : N(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function () {
            var a = this;
            return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
        },
        isValid: function () {
            return G(this)
        },
        isDSTShifted: function () {
            return this._a ? this.isValid() && w(this._a, (this._isUTC ? tb.utc(this._a) : tb(this._a)).toArray()) > 0 : !1
        },
        parsingFlags: function () {
            return m({}, this._pf)
        },
        invalidAt: function () {
            return this._pf.overflow
        },
        utc: function (a) {
            return this.zone(0, a)
        },
        local: function (a) {
            return this._isUTC && (this.zone(0, a), this._isUTC = !1, a && this.add(this._dateTzOffset(), "m")), this
        },
        format: function (a) {
            var b = N(this, a || tb.defaultFormat);
            return this.localeData().postformat(b)
        },
        add: s(1, "add"),
        subtract: s(-1, "subtract"),
        diff: function (a, b, c) {
            var d, e, f, g = K(a, this), h = 6e4 * (this.zone() - g.zone());
            return b = x(b), "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + g.daysInMonth()), e = 12 * (this.year() - g.year()) + (this.month() - g.month()), f = this - tb(this).startOf("month") - (g - tb(g).startOf("month")), f -= 6e4 * (this.zone() - tb(this).startOf("month").zone() - (g.zone() - tb(g).startOf("month").zone())), e += f / d, "year" === b && (e /= 12)) : (d = this - g, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - h) / 864e5 : "week" === b ? (d - h) / 6048e5 : d), c ? e : o(e)
        },
        from: function (a, b) {
            return tb.duration({to: this, from: a}).locale(this.locale()).humanize(!b)
        },
        fromNow: function (a) {
            return this.from(tb(), a)
        },
        calendar: function (a) {
            var b = a || tb(), c = K(b, this).startOf("day"), d = this.diff(c, "days", !0), e = -6 > d ? "sameElse" : -1 > d ? "lastWeek" : 0 > d ? "lastDay" : 1 > d ? "sameDay" : 2 > d ? "nextDay" : 7 > d ? "nextWeek" : "sameElse";
            return this.format(this.localeData().calendar(e, this))
        },
        isLeapYear: function () {
            return E(this.year())
        },
        isDST: function () {
            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
        },
        day: function (a) {
            var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != a ? (a = eb(a, this.localeData()), this.add(a - b, "d")) : b
        },
        month: ob("Month", !0),
        startOf: function (a) {
            switch (a = x(a)) {
                case"year":
                    this.month(0);
                case"quarter":
                case"month":
                    this.date(1);
                case"week":
                case"isoWeek":
                case"day":
                    this.hours(0);
                case"hour":
                    this.minutes(0);
                case"minute":
                    this.seconds(0);
                case"second":
                    this.milliseconds(0)
            }
            return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
        },
        endOf: function (a) {
            return a = x(a), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms")
        },
        isAfter: function (a, b) {
            return b = x("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = tb.isMoment(a) ? a : tb(a), +this > +a) : +this.clone().startOf(b) > +tb(a).startOf(b)
        },
        isBefore: function (a, b) {
            return b = x("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = tb.isMoment(a) ? a : tb(a), +a > +this) : +this.clone().startOf(b) < +tb(a).startOf(b)
        },
        isSame: function (a, b) {
            return b = x(b || "millisecond"), "millisecond" === b ? (a = tb.isMoment(a) ? a : tb(a), +this === +a) : +this.clone().startOf(b) === +K(a, this).startOf(b)
        },
        min: f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function (a) {
            return a = tb.apply(null, arguments), this > a ? this : a
        }),
        max: f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function (a) {
            return a = tb.apply(null, arguments), a > this ? this : a
        }),
        zone: function (a, b) {
            var c, d = this._offset || 0;
            return null == a ? this._isUTC ? d : this._dateTzOffset() : ("string" == typeof a && (a = Q(a)), Math.abs(a) < 16 && (a = 60 * a), !this._isUTC && b && (c = this._dateTzOffset()), this._offset = a, this._isUTC = !0, null != c && this.subtract(c, "m"), d !== a && (!b || this._changeInProgress ? t(this, tb.duration(d - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, tb.updateOffset(this, !0), this._changeInProgress = null)), this)
        },
        zoneAbbr: function () {
            return this._isUTC ? "UTC" : ""
        },
        zoneName: function () {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },
        parseZone: function () {
            return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
        },
        hasAlignedHourOffset: function (a) {
            return a = a ? tb(a).zone() : 0, (this.zone() - a) % 60 === 0
        },
        daysInMonth: function () {
            return B(this.year(), this.month())
        },
        dayOfYear: function (a) {
            var b = yb((tb(this).startOf("day") - tb(this).startOf("year")) / 864e5) + 1;
            return null == a ? b : this.add(a - b, "d")
        },
        quarter: function (a) {
            return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
        },
        weekYear: function (a) {
            var b = hb(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return null == a ? b : this.add(a - b, "y")
        },
        isoWeekYear: function (a) {
            var b = hb(this, 1, 4).year;
            return null == a ? b : this.add(a - b, "y")
        },
        week: function (a) {
            var b = this.localeData().week(this);
            return null == a ? b : this.add(7 * (a - b), "d")
        },
        isoWeek: function (a) {
            var b = hb(this, 1, 4).week;
            return null == a ? b : this.add(7 * (a - b), "d")
        },
        weekday: function (a) {
            var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == a ? b : this.add(a - b, "d")
        },
        isoWeekday: function (a) {
            return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
        },
        isoWeeksInYear: function () {
            return C(this.year(), 1, 4)
        },
        weeksInYear: function () {
            var a = this.localeData()._week;
            return C(this.year(), a.dow, a.doy)
        },
        get: function (a) {
            return a = x(a), this[a]()
        },
        set: function (a, b) {
            return a = x(a), "function" == typeof this[a] && this[a](b), this
        },
        locale: function (b) {
            var c;
            return b === a ? this._locale._abbr : (c = tb.localeData(b), null != c && (this._locale = c), this)
        },
        lang: f("moment().lang() is deprecated. Use moment().localeData() instead.", function (b) {
            return b === a ? this.localeData() : this.locale(b)
        }),
        localeData: function () {
            return this._locale
        },
        _dateTzOffset: function () {
            return 15 * Math.round(this._d.getTimezoneOffset() / 15)
        }
    }), tb.fn.millisecond = tb.fn.milliseconds = ob("Milliseconds", !1), tb.fn.second = tb.fn.seconds = ob("Seconds", !1), tb.fn.minute = tb.fn.minutes = ob("Minutes", !1), tb.fn.hour = tb.fn.hours = ob("Hours", !0), tb.fn.date = ob("Date", !0), tb.fn.dates = f("dates accessor is deprecated. Use date instead.", ob("Date", !0)), tb.fn.year = ob("FullYear", !0), tb.fn.years = f("years accessor is deprecated. Use year instead.", ob("FullYear", !0)), tb.fn.days = tb.fn.day, tb.fn.months = tb.fn.month, tb.fn.weeks = tb.fn.week, tb.fn.isoWeeks = tb.fn.isoWeek, tb.fn.quarters = tb.fn.quarter, tb.fn.toJSON = tb.fn.toISOString, m(tb.duration.fn = l.prototype, {
        _bubble: function () {
            var a, b, c, d = this._milliseconds, e = this._days, f = this._months, g = this._data, h = 0;
            g.milliseconds = d % 1e3, a = o(d / 1e3), g.seconds = a % 60, b = o(a / 60), g.minutes = b % 60, c = o(b / 60), g.hours = c % 24, e += o(c / 24), h = o(pb(e)), e -= o(qb(h)), f += o(e / 30), e %= 30, h += o(f / 12), f %= 12, g.days = e, g.months = f, g.years = h
        },
        abs: function () {
            return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
        },
        weeks: function () {
            return o(this.days() / 7)
        },
        valueOf: function () {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * A(this._months / 12)
        },
        humanize: function (a) {
            var b = gb(this, !a, this.localeData());
            return a && (b = this.localeData().pastFuture(+this, b)), this.localeData().postformat(b)
        },
        add: function (a, b) {
            var c = tb.duration(a, b);
            return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this
        },
        subtract: function (a, b) {
            var c = tb.duration(a, b);
            return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this
        },
        get: function (a) {
            return a = x(a), this[a.toLowerCase() + "s"]()
        },
        as: function (a) {
            var b, c;
            if (a = x(a), "month" === a || "year" === a)return b = this._days + this._milliseconds / 864e5, c = this._months + 12 * pb(b), "month" === a ? c : c / 12;
            switch (b = this._days + qb(this._months / 12), a) {
                case"week":
                    return b / 7 + this._milliseconds / 6048e5;
                case"day":
                    return b + this._milliseconds / 864e5;
                case"hour":
                    return 24 * b + this._milliseconds / 36e5;
                case"minute":
                    return 24 * b * 60 + this._milliseconds / 6e4;
                case"second":
                    return 24 * b * 60 * 60 + this._milliseconds / 1e3;
                case"millisecond":
                    return Math.floor(24 * b * 60 * 60 * 1e3) + this._milliseconds;
                default:
                    throw new Error("Unknown unit " + a)
            }
        },
        lang: tb.fn.lang,
        locale: tb.fn.locale,
        toIsoString: f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function () {
            return this.toISOString()
        }),
        toISOString: function () {
            var a = Math.abs(this.years()), b = Math.abs(this.months()), c = Math.abs(this.days()), d = Math.abs(this.hours()), e = Math.abs(this.minutes()), f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
        },
        localeData: function () {
            return this._locale
        }
    }), tb.duration.fn.toString = tb.duration.fn.toISOString;
    for (vb in ic)c(ic, vb) && rb(vb.toLowerCase());
    tb.duration.fn.asMilliseconds = function () {
        return this.as("ms")
    }, tb.duration.fn.asSeconds = function () {
        return this.as("s")
    }, tb.duration.fn.asMinutes = function () {
        return this.as("m")
    }, tb.duration.fn.asHours = function () {
        return this.as("h")
    }, tb.duration.fn.asDays = function () {
        return this.as("d")
    }, tb.duration.fn.asWeeks = function () {
        return this.as("weeks")
    }, tb.duration.fn.asMonths = function () {
        return this.as("M")
    }, tb.duration.fn.asYears = function () {
        return this.as("y")
    }, tb.locale("en", {
        ordinal: function (a) {
            var b = a % 10, c = 1 === A(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }
    }), Jb ? module.exports = tb : "function" == typeof define && define.amd ? (define("moment", function (a, b, c) {
        return c.config && c.config() && c.config().noGlobal === !0 && (xb.moment = ub), tb
    }), sb(!0)) : sb()
}).call(this);

/*!
 * FullCalendar v2.1.1 & Google Calendar Extension
 * Docs & License: http://arshaw.com/fullcalendar/
 * (c) 2013 Adam Shaw
 */
(function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], t) : t(jQuery, moment)
})(function (t, e) {
    function i(t, e) {
        return e.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "t")
    }

    function n(t, e) {
        var i = e.longDateFormat("L");
        return i = i.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, ""), t.isRTL ? i += " ddd" : i = "ddd " + i, i
    }

    function r(t) {
        o(De, t)
    }

    function o(e) {
        function i(i, n) {
            t.isPlainObject(n) && t.isPlainObject(e[i]) && !s(i) ? e[i] = o({}, e[i], n) : void 0 !== n && (e[i] = n)
        }

        for (var n = 1; arguments.length > n; n++)t.each(arguments[n], i);
        return e
    }

    function s(t) {
        return /(Time|Duration)$/.test(t)
    }

    function l(i, n) {
        function r(t) {
            var i = e.localeData || e.langData;
            return i.call(e, t) || i.call(e, "en")
        }

        function s(t) {
            ie ? h() && (p(), f(t)) : l()
        }

        function l() {
            ne = K.theme ? "ui" : "fc", i.addClass("fc"), K.isRTL ? i.addClass("fc-rtl") : i.addClass("fc-ltr"), K.theme ? i.addClass("ui-widget") : i.addClass("fc-unthemed"), ie = t("<div class='fc-view-container'/>").prependTo(i), te = new a(q, K), ee = te.render(), ee && i.prepend(ee), u(K.defaultView), K.handleWindowResize && (se = L(v, K.windowResizeDelay), t(window).resize(se))
        }

        function d() {
            re && re.destroy(), te.destroy(), ie.remove(), i.removeClass("fc fc-ltr fc-rtl fc-unthemed ui-widget"), t(window).unbind("resize", se)
        }

        function h() {
            return i.is(":visible")
        }

        function u(t) {
            f(0, t)
        }

        function f(e, i) {
            he++, re && i && re.name !== i && (te.deactivateButton(re.name), I(), re.start && re.destroy(), re.el.remove(), re = null), !re && i && (re = new xe[i](q), re.el = t("<div class='fc-view fc-" + i + "-view' />").appendTo(ie), te.activateButton(i)), re && (e && (le = re.incrementDate(le, e)), re.start && !e && le.isWithin(re.intervalStart, re.intervalEnd) || h() && (I(), re.start && re.destroy(), re.render(le), Z(), C(), x(), b())), Z(), he--
        }

        function g(t) {
            return h() ? (t && m(), he++, re.updateSize(!0), he--, !0) : void 0
        }

        function p() {
            h() && m()
        }

        function m() {
            oe = "number" == typeof K.contentHeight ? K.contentHeight : "number" == typeof K.height ? K.height - (ee ? ee.outerHeight(!0) : 0) : Math.round(ie.width() / Math.max(K.aspectRatio, .5))
        }

        function v(t) {
            !he && t.target === window && re.start && g(!0) && re.trigger("windowResize", de)
        }

        function y() {
            E(), S()
        }

        function w() {
            h() && (I(), re.destroyEvents(), re.renderEvents(ue), Z())
        }

        function E() {
            I(), re.destroyEvents(), Z()
        }

        function b() {
            !K.lazyFetching || ae(re.start, re.end) ? S() : w()
        }

        function S() {
            ce(re.start, re.end)
        }

        function D(t) {
            ue = t, w()
        }

        function T() {
            w()
        }

        function C() {
            te.updateTitle(re.title)
        }

        function x() {
            var t = q.getNow();
            t.isWithin(re.intervalStart, re.intervalEnd) ? te.disableButton("today") : te.enableButton("today")
        }

        function k(t, e) {
            t = q.moment(t), e = e ? q.moment(e) : t.hasTime() ? t.clone().add(q.defaultTimedEventDuration) : t.clone().add(q.defaultAllDayEventDuration), re.select(t, e)
        }

        function M() {
            re && re.unselect()
        }

        function R() {
            f(-1)
        }

        function P() {
            f(1)
        }

        function G() {
            le.add(-1, "years"), f()
        }

        function N() {
            le.add(1, "years"), f()
        }

        function Y() {
            le = q.getNow(), f()
        }

        function A(t) {
            le = q.moment(t), f()
        }

        function _(t) {
            le.add(e.duration(t)), f()
        }

        function O(t, e) {
            var i, n;
            e && void 0 !== xe[e] || (e = e || "day", i = te.getViewsWithButtons().join(" "), n = i.match(RegExp("\\w+" + z(e))), n || (n = i.match(/\w+Day/)), e = n ? n[0] : "agendaDay"), le = t, u(e)
        }

        function F() {
            return le.clone()
        }

        function I() {
            ie.css({width: "100%", height: ie.height(), overflow: "hidden"})
        }

        function Z() {
            ie.css({width: "", height: "", overflow: ""})
        }

        function B() {
            return q
        }

        function j() {
            return re
        }

        function X(t, e) {
            return void 0 === e ? K[t] : (("height" == t || "contentHeight" == t || "aspectRatio" == t) && (K[t] = e, g(!0)), void 0)
        }

        function $(t, e) {
            return K[t] ? K[t].apply(e || de, Array.prototype.slice.call(arguments, 2)) : void 0
        }

        var q = this;
        n = n || {};
        var U, K = o({}, De, n);
        U = K.lang in Te ? Te[K.lang] : Te[De.lang], U && (K = o({}, De, U, n)), K.isRTL && (K = o({}, De, Ce, U || {}, n)), q.options = K, q.render = s, q.destroy = d, q.refetchEvents = y, q.reportEvents = D, q.reportEventChange = T, q.rerenderEvents = w, q.changeView = u, q.select = k, q.unselect = M, q.prev = R, q.next = P, q.prevYear = G, q.nextYear = N, q.today = Y, q.gotoDate = A, q.incrementDate = _, q.zoomTo = O, q.getDate = F, q.getCalendar = B, q.getView = j, q.option = X, q.trigger = $;
        var Q = H(r(K.lang));
        if (K.monthNames && (Q._months = K.monthNames), K.monthNamesShort && (Q._monthsShort = K.monthNamesShort), K.dayNames && (Q._weekdays = K.dayNames), K.dayNamesShort && (Q._weekdaysShort = K.dayNamesShort), null != K.firstDay) {
            var J = H(Q._week);
            J.dow = K.firstDay, Q._week = J
        }
        q.defaultAllDayEventDuration = e.duration(K.defaultAllDayEventDuration), q.defaultTimedEventDuration = e.duration(K.defaultTimedEventDuration), q.moment = function () {
            var t;
            return "local" === K.timezone ? (t = He.moment.apply(null, arguments), t.hasTime() && t.local()) : t = "UTC" === K.timezone ? He.moment.utc.apply(null, arguments) : He.moment.parseZone.apply(null, arguments), "_locale"in t ? t._locale = Q : t._lang = Q, t
        }, q.getIsAmbigTimezone = function () {
            return "local" !== K.timezone && "UTC" !== K.timezone
        }, q.rezoneDate = function (t) {
            return q.moment(t.toArray())
        }, q.getNow = function () {
            var t = K.now;
            return "function" == typeof t && (t = t()), q.moment(t)
        }, q.calculateWeekNumber = function (t) {
            var e = K.weekNumberCalculation;
            return "function" == typeof e ? e(t) : "local" === e ? t.week() : "ISO" === e.toUpperCase() ? t.isoWeek() : void 0
        }, q.getEventEnd = function (t) {
            return t.end ? t.end.clone() : q.getDefaultEventEnd(t.allDay, t.start)
        }, q.getDefaultEventEnd = function (t, e) {
            var i = e.clone();
            return t ? i.stripTime().add(q.defaultAllDayEventDuration) : i.add(q.defaultTimedEventDuration), q.getIsAmbigTimezone() && i.stripZone(), i
        }, q.formatRange = function (t, e, i) {
            return "function" == typeof i && (i = i.call(q, K, Q)), W(t, e, i, null, K.isRTL)
        }, q.formatDate = function (t, e) {
            return "function" == typeof e && (e = e.call(q, K, Q)), V(t, e)
        }, c.call(q, K);
        var te, ee, ie, ne, re, oe, se, le, ae = q.isFetchNeeded, ce = q.fetchEvents, de = i[0], he = 0, ue = [];
        le = null != K.defaultDate ? q.moment(K.defaultDate) : q.getNow(), q.getSuggestedViewHeight = function () {
            return void 0 === oe && p(), oe
        }, q.isHeightAuto = function () {
            return "auto" === K.contentHeight || "auto" === K.height
        }
    }

    function a(e, i) {
        function n() {
            var e = i.header;
            return f = i.theme ? "ui" : "fc", e ? g = t("<div class='fc-toolbar'/>").append(o("left")).append(o("right")).append(o("center")).append('<div class="fc-clear"/>') : void 0
        }

        function r() {
            g.remove()
        }

        function o(n) {
            var r = t('<div class="fc-' + n + '"/>'), o = i.header[n];
            return o && t.each(o.split(" "), function () {
                var n, o = t(), s = !0;
                t.each(this.split(","), function (n, r) {
                    var l, a, c, d, h, u, g, m;
                    "title" == r ? (o = o.add(t("<h2>&nbsp;</h2>")), s = !1) : (e[r] ? l = function () {
                        e[r]()
                    } : xe[r] && (l = function () {
                        e.changeView(r)
                    }, p.push(r)), l && (a = S(i.themeButtonIcons, r), c = S(i.buttonIcons, r), d = S(i.defaultButtonText, r), h = S(i.buttonText, r), u = h ? R(h) : a && i.theme ? "<span class='ui-icon ui-icon-" + a + "'></span>" : c && !i.theme ? "<span class='fc-icon fc-icon-" + c + "'></span>" : R(d || r), g = ["fc-" + r + "-button", f + "-button", f + "-state-default"], m = t('<button type="button" class="' + g.join(" ") + '">' + u + "</button>").click(function () {
                        m.hasClass(f + "-state-disabled") || (l(), (m.hasClass(f + "-state-active") || m.hasClass(f + "-state-disabled")) && m.removeClass(f + "-state-hover"))
                    }).mousedown(function () {
                        m.not("." + f + "-state-active").not("." + f + "-state-disabled").addClass(f + "-state-down")
                    }).mouseup(function () {
                        m.removeClass(f + "-state-down")
                    }).hover(function () {
                        m.not("." + f + "-state-active").not("." + f + "-state-disabled").addClass(f + "-state-hover")
                    }, function () {
                        m.removeClass(f + "-state-hover").removeClass(f + "-state-down")
                    }), o = o.add(m)))
                }), s && o.first().addClass(f + "-corner-left").end().last().addClass(f + "-corner-right").end(), o.length > 1 ? (n = t("<div/>"), s && n.addClass("fc-button-group"), n.append(o), r.append(n)) : r.append(o)
            }), r
        }

        function s(t) {
            g.find("h2").text(t)
        }

        function l(t) {
            g.find(".fc-" + t + "-button").addClass(f + "-state-active")
        }

        function a(t) {
            g.find(".fc-" + t + "-button").removeClass(f + "-state-active")
        }

        function c(t) {
            g.find(".fc-" + t + "-button").attr("disabled", "disabled").addClass(f + "-state-disabled")
        }

        function d(t) {
            g.find(".fc-" + t + "-button").removeAttr("disabled").removeClass(f + "-state-disabled")
        }

        function h() {
            return p
        }

        var u = this;
        u.render = n, u.destroy = r, u.updateTitle = s, u.activateButton = l, u.deactivateButton = a, u.disableButton = c, u.enableButton = d, u.getViewsWithButtons = h;
        var f, g = t(), p = []
    }

    function c(e) {
        function i(t, e) {
            return !T || t.clone().stripZone() < T.clone().stripZone() || e.clone().stripZone() > C.clone().stripZone()
        }

        function n(t, e) {
            T = t, C = e, A = [];
            var i = ++G, n = L.length;
            N = n;
            for (var o = 0; n > o; o++)r(L[o], i)
        }

        function r(e, i) {
            o(e, function (n) {
                var r, o, s = t.isArray(e.events);
                if (i == G) {
                    if (n)for (r = 0; n.length > r; r++)o = n[r], s || (o = w(o, e)), o && A.push(o);
                    N--, N || R(A)
                }
            })
        }

        function o(i, n) {
            var r, s, l = He.sourceFetchers;
            for (r = 0; l.length > r; r++) {
                if (s = l[r].call(S, i, T.clone(), C.clone(), e.timezone, n), s === !0)return;
                if ("object" == typeof s)return o(s, n), void 0
            }
            var a = i.events;
            if (a)t.isFunction(a) ? (v(), a.call(S, T.clone(), C.clone(), e.timezone, function (t) {
                n(t), y()
            })) : t.isArray(a) ? n(a) : n(); else {
                var c = i.url;
                if (c) {
                    var d, h = i.success, u = i.error, f = i.complete;
                    d = t.isFunction(i.data) ? i.data() : i.data;
                    var g = t.extend({}, d || {}), p = M(i.startParam, e.startParam), m = M(i.endParam, e.endParam), w = M(i.timezoneParam, e.timezoneParam);
                    p && (g[p] = T.format()), m && (g[m] = C.format()), e.timezone && "local" != e.timezone && (g[w] = e.timezone), v(), t.ajax(t.extend({}, ke, i, {
                        data: g,
                        success: function (e) {
                            e = e || [];
                            var i = k(h, this, arguments);
                            t.isArray(i) && (e = i), n(e)
                        },
                        error: function () {
                            k(u, this, arguments), n()
                        },
                        complete: function () {
                            k(f, this, arguments), y()
                        }
                    }))
                } else n()
            }
        }

        function s(t) {
            var e = l(t);
            e && (L.push(e), N++, r(e, G))
        }

        function l(e) {
            var i, n, r = He.sourceNormalizers;
            if (t.isFunction(e) || t.isArray(e) ? i = {events: e} : "string" == typeof e ? i = {url: e} : "object" == typeof e && (i = t.extend({}, e)), i) {
                for (i.className ? "string" == typeof i.className && (i.className = i.className.split(/\s+/)) : i.className = [], t.isArray(i.events) && (i.origArray = i.events, i.events = t.map(i.events, function (t) {
                    return w(t, i)
                })), n = 0; r.length > n; n++)r[n].call(S, i);
                return i
            }
        }

        function a(e) {
            L = t.grep(L, function (t) {
                return !c(t, e)
            }), A = t.grep(A, function (t) {
                return !c(t.source, e)
            }), R(A)
        }

        function c(t, e) {
            return t && e && h(t) == h(e)
        }

        function h(t) {
            return ("object" == typeof t ? t.origArray || t.url || t.events : null) || t
        }

        function u(t) {
            t.start = S.moment(t.start), t.end && (t.end = S.moment(t.end)), E(t), f(t), R(A)
        }

        function f(t) {
            var e, i, n, r;
            for (e = 0; A.length > e; e++)if (i = A[e], i._id == t._id && i !== t)for (n = 0; V.length > n; n++)r = V[n], void 0 !== t[r] && (i[r] = t[r])
        }

        function g(t, e) {
            var i = w(t);
            i && (i.source || (e && (z.events.push(i), i.source = z), A.push(i)), R(A))
        }

        function p(e) {
            var i, n;
            for (null == e ? e = function () {
                return !0
            } : t.isFunction(e) || (i = e + "", e = function (t) {
                return t._id == i
            }), A = t.grep(A, e, !0), n = 0; L.length > n; n++)t.isArray(L[n].events) && (L[n].events = t.grep(L[n].events, e, !0));
            R(A)
        }

        function m(e) {
            return t.isFunction(e) ? t.grep(A, e) : null != e ? (e += "", t.grep(A, function (t) {
                return t._id == e
            })) : A
        }

        function v() {
            Y++ || H("loading", null, !0, x())
        }

        function y() {
            --Y || H("loading", null, !1, x())
        }

        function w(i, n) {
            var r, o, s, l, a = {};
            return e.eventDataTransform && (i = e.eventDataTransform(i)), n && n.eventDataTransform && (i = n.eventDataTransform(i)), r = S.moment(i.start || i.date), r.isValid() && (o = null, !i.end || (o = S.moment(i.end), o.isValid())) ? (s = i.allDay, void 0 === s && (l = M(n ? n.allDayDefault : void 0, e.allDayDefault), s = void 0 !== l ? l : !(r.hasTime() || o && o.hasTime())), s ? (r.hasTime() && r.stripTime(), o && o.hasTime() && o.stripTime()) : (r.hasTime() || (r = S.rezoneDate(r)), o && !o.hasTime() && (o = S.rezoneDate(o))), t.extend(a, i), n && (a.source = n), a._id = i._id || (void 0 === i.id ? "_fc" + Me++ : i.id + ""), a.className = i.className ? "string" == typeof i.className ? i.className.split(/\s+/) : i.className : [], a.allDay = s, a.start = r, a.end = o, e.forceEventDuration && !a.end && (a.end = P(a)), d(a), a) : void 0
        }

        function E(t, e, i) {
            var n, r, o, s, l = t._allDay, a = t._start, c = t._end, d = !1;
            return e || i || (e = t.start, i = t.end), n = t.allDay != l ? t.allDay : !(e || i).hasTime(), n && (e && (e = e.clone().stripTime()), i && (i = i.clone().stripTime())), e && (r = n ? D(e, a.clone().stripTime()) : D(e, a)), n != l ? d = !0 : i && (o = D(i || S.getDefaultEventEnd(n, e || a), e || a).subtract(D(c || S.getDefaultEventEnd(l, a), a))), s = b(m(t._id), d, n, r, o), {
                dateDelta: r,
                durationDelta: o,
                undo: s
            }
        }

        function b(i, n, r, o, s) {
            var l = S.getIsAmbigTimezone(), a = [];
            return t.each(i, function (t, i) {
                var c = i._allDay, h = i._start, u = i._end, f = null != r ? r : c, g = h.clone(), p = !n && u ? u.clone() : null;
                f ? (g.stripTime(), p && p.stripTime()) : (g.hasTime() || (g = S.rezoneDate(g)), p && !p.hasTime() && (p = S.rezoneDate(p))), p || !e.forceEventDuration && !+s || (p = S.getDefaultEventEnd(f, g)), g.add(o), p && p.add(o).add(s), l && (+o || +s) && (g.stripZone(), p && p.stripZone()), i.allDay = f, i.start = g, i.end = p, d(i), a.push(function () {
                    i.allDay = c, i.start = h, i.end = u, d(i)
                })
            }), function () {
                for (var t = 0; a.length > t; t++)a[t]()
            }
        }

        var S = this;
        S.isFetchNeeded = i, S.fetchEvents = n, S.addEventSource = s, S.removeEventSource = a, S.updateEvent = u, S.renderEvent = g, S.removeEvents = p, S.clientEvents = m, S.mutateEvent = E;
        var T, C, H = S.trigger, x = S.getView, R = S.reportEvents, P = S.getEventEnd, z = {events: []}, L = [z], G = 0, N = 0, Y = 0, A = [];
        t.each((e.events ? [e.events] : []).concat(e.eventSources || []), function (t, e) {
            var i = l(e);
            i && L.push(i)
        });
        var V = ["title", "url", "allDay", "className", "editable", "color", "backgroundColor", "borderColor", "textColor"]
    }

    function d(t) {
        t._allDay = t.allDay, t._start = t.start.clone(), t._end = t.end ? t.end.clone() : null
    }

    function h(t, e) {
        e.left && t.css({"border-left-width": 1, "margin-left": e.left - 1}), e.right && t.css({
            "border-right-width": 1,
            "margin-right": e.right - 1
        })
    }

    function u(t) {
        t.css({"margin-left": "", "margin-right": "", "border-left-width": "", "border-right-width": ""})
    }

    function f(e, i, n) {
        var r = Math.floor(i / e.length), o = Math.floor(i - r * (e.length - 1)), s = [], l = [], a = [], c = 0;
        g(e), e.each(function (i, n) {
            var d = i === e.length - 1 ? o : r, h = t(n).outerHeight(!0);
            d > h ? (s.push(n), l.push(h), a.push(t(n).height())) : c += h
        }), n && (i -= c, r = Math.floor(i / s.length), o = Math.floor(i - r * (s.length - 1))), t(s).each(function (e, i) {
            var n = e === s.length - 1 ? o : r, c = l[e], d = a[e], h = n - (c - d);
            n > c && t(i).height(h)
        })
    }

    function g(t) {
        t.height("")
    }

    function p(e) {
        var i = 0;
        return e.find("> *").each(function (e, n) {
            var r = t(n).outerWidth();
            r > i && (i = r)
        }), i++, e.width(i), i
    }

    function m(t, e) {
        return t.height(e).addClass("fc-scroller"), t[0].scrollHeight - 1 > t[0].clientHeight ? !0 : (v(t), !1)
    }

    function v(t) {
        t.height("").removeClass("fc-scroller")
    }

    function y(e) {
        var i = e.css("position"), n = e.parents().filter(function () {
            var e = t(this);
            return /(auto|scroll)/.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
        }).eq(0);
        return "fixed" !== i && n.length ? n : t(e[0].ownerDocument || document)
    }

    function w(t) {
        var e = t.offset().left, i = e + t.width(), n = t.children(), r = n.offset().left, o = r + n.outerWidth();
        return {left: r - e, right: i - o}
    }

    function E(t) {
        return 1 == t.which && !t.ctrlKey
    }

    function b(t, e, i, n) {
        var r, o, s, l;
        return e > i && n > t ? (t >= i ? (r = t.clone(), s = !0) : (r = i.clone(), s = !1), n >= e ? (o = e.clone(), l = !0) : (o = n.clone(), l = !1), {
            start: r,
            end: o,
            isStart: s,
            isEnd: l
        }) : void 0
    }

    function S(t, e) {
        if (t = t || {}, void 0 !== t[e])return t[e];
        for (var i, n = e.split(/(?=[A-Z])/), r = n.length - 1; r >= 0; r--)if (i = t[n[r].toLowerCase()], void 0 !== i)return i;
        return t["default"]
    }

    function D(t, i) {
        return e.duration({days: t.clone().stripTime().diff(i.clone().stripTime(), "days"), ms: t.time() - i.time()})
    }

    function T(t) {
        return "[object Date]" === Object.prototype.toString.call(t) || t instanceof Date
    }

    function C(t, e) {
        return t - e
    }

    function H(t) {
        var e = function () {
        };
        return e.prototype = t, new e
    }

    function x(t, e) {
        for (var i in e)e.hasOwnProperty(i) && (t[i] = e[i])
    }

    function k(e, i, n) {
        if (t.isFunction(e) && (e = [e]), e) {
            var r, o;
            for (r = 0; e.length > r; r++)o = e[r].apply(i, n) || o;
            return o
        }
    }

    function M() {
        for (var t = 0; arguments.length > t; t++)if (void 0 !== arguments[t])return arguments[t]
    }

    function R(t) {
        return (t + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
    }

    function P(t) {
        return t.replace(/&.*?;/g, "")
    }

    function z(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }

    function L(t, e) {
        var i, n, r, o, s = function () {
            var l = +new Date - o;
            e > l && l > 0 ? i = setTimeout(s, e - l) : (i = null, t.apply(r, n), i || (r = n = null))
        };
        return function () {
            r = this, n = arguments, o = +new Date, i || (i = setTimeout(s, e))
        }
    }

    function G(i, n, r) {
        var o, s, l, a, c = i[0], d = 1 == i.length && "string" == typeof c;
        return e.isMoment(c) ? (a = e.apply(null, i), c._ambigTime && (a._ambigTime = !0), c._ambigZone && (a._ambigZone = !0)) : T(c) || void 0 === c ? a = e.apply(null, i) : (o = !1, s = !1, d ? Pe.test(c) ? (c += "-01", i = [c], o = !0, s = !0) : (l = ze.exec(c)) && (o = !l[5], s = !0) : t.isArray(c) && (s = !0), a = n ? e.utc.apply(e, i) : e.apply(null, i), o ? (a._ambigTime = !0, a._ambigZone = !0) : r && (s ? a._ambigZone = !0 : d && a.zone(c))), new N(a)
    }

    function N(t) {
        x(this, t)
    }

    function Y(t, e) {
        var i, n = [], r = !1, o = !1;
        for (i = 0; t.length > i; i++)n.push(He.moment.parseZone(t[i])), r = r || n[i]._ambigTime, o = o || n[i]._ambigZone;
        for (i = 0; n.length > i; i++)r && !e ? n[i].stripTime() : o && n[i].stripZone();
        return n
    }

    function A(t, i) {
        return e.fn.format.call(t, i)
    }

    function V(t, e) {
        return _(t, Z(e))
    }

    function _(t, e) {
        var i, n = "";
        for (i = 0; e.length > i; i++)n += O(t, e[i]);
        return n
    }

    function O(t, e) {
        var i, n;
        return "string" == typeof e ? e : (i = e.token) ? Le[i] ? Le[i](t) : A(t, i) : e.maybe && (n = _(t, e.maybe), n.match(/[1-9]/)) ? n : ""
    }

    function W(t, e, i, n, r) {
        var o;
        return t = He.moment.parseZone(t), e = He.moment.parseZone(e), o = (t.localeData || t.lang).call(t), i = o.longDateFormat(i) || i, n = n || " - ", F(t, e, Z(i), n, r)
    }

    function F(t, e, i, n, r) {
        var o, s, l, a, c = "", d = "", h = "", u = "", f = "";
        for (s = 0; i.length > s && (o = I(t, e, i[s]), o !== !1); s++)c += o;
        for (l = i.length - 1; l > s && (o = I(t, e, i[l]), o !== !1); l--)d = o + d;
        for (a = s; l >= a; a++)h += O(t, i[a]), u += O(e, i[a]);
        return (h || u) && (f = r ? u + n + h : h + n + u), c + f + d
    }

    function I(t, e, i) {
        var n, r;
        return "string" == typeof i ? i : (n = i.token) && (r = Ge[n.charAt(0)], r && t.isSame(e, r)) ? A(t, n) : !1
    }

    function Z(t) {
        return t in Ne ? Ne[t] : Ne[t] = B(t)
    }

    function B(t) {
        for (var e, i = [], n = /\[([^\]]*)\]|\(([^\)]*)\)|(LT|(\w)\4*o?)|([^\w\[\(]+)/g; e = n.exec(t);)e[1] ? i.push(e[1]) : e[2] ? i.push({maybe: B(e[2])}) : e[3] ? i.push({token: e[3]}) : e[5] && i.push(e[5]);
        return i
    }

    function j(t) {
        this.options = t || {}
    }

    function X(t) {
        this.grid = t
    }

    function $(t) {
        this.coordMaps = t
    }

    function q(t, e) {
        this.coordMap = t, this.options = e || {}
    }

    function U(t, e) {
        return t || e ? t && e ? t.grid === e.grid && t.row === e.row && t.col === e.col : !1 : !0
    }

    function K(e, i) {
        this.options = i = i || {}, this.sourceEl = e, this.parentEl = i.parentEl ? t(i.parentEl) : e.parent()
    }

    function Q(t) {
        this.view = t
    }

    function J(t) {
        Q.call(this, t), this.coordMap = new X(this)
    }

    function te(t, e) {
        return t.eventStartMS - e.eventStartMS || e.eventDurationMS - t.eventDurationMS || e.event.allDay - t.event.allDay || (t.event.title || "").localeCompare(e.event.title)
    }

    function ee(t) {
        J.call(this, t)
    }

    function ie(t, e) {
        var i, n;
        for (i = 0; e.length > i; i++)if (n = e[i], n.leftCol <= t.rightCol && n.rightCol >= t.leftCol)return !0;
        return !1
    }

    function ne(t, e) {
        return t.leftCol - e.leftCol
    }

    function re(t) {
        J.call(this, t)
    }

    function oe(t) {
        var e, i, n;
        if (t.sort(te), e = se(t), le(e), i = e[0]) {
            for (n = 0; i.length > n; n++)ae(i[n]);
            for (n = 0; i.length > n; n++)ce(i[n], 0, 0)
        }
    }

    function se(t) {
        var e, i, n, r = [];
        for (e = 0; t.length > e; e++) {
            for (i = t[e], n = 0; r.length > n && de(i, r[n]).length; n++);
            i.level = n, (r[n] || (r[n] = [])).push(i)
        }
        return r
    }

    function le(t) {
        var e, i, n, r, o;
        for (e = 0; t.length > e; e++)for (i = t[e], n = 0; i.length > n; n++)for (r = i[n], r.forwardSegs = [], o = e + 1; t.length > o; o++)de(r, t[o], r.forwardSegs)
    }

    function ae(t) {
        var e, i, n = t.forwardSegs, r = 0;
        if (void 0 === t.forwardPressure) {
            for (e = 0; n.length > e; e++)i = n[e], ae(i), r = Math.max(r, 1 + i.forwardPressure);
            t.forwardPressure = r
        }
    }

    function ce(t, e, i) {
        var n, r = t.forwardSegs;
        if (void 0 === t.forwardCoord)for (r.length ? (r.sort(ue), ce(r[0], e + 1, i), t.forwardCoord = r[0].backwardCoord) : t.forwardCoord = 1, t.backwardCoord = t.forwardCoord - (t.forwardCoord - i) / (e + 1), n = 0; r.length > n; n++)ce(r[n], 0, t.forwardCoord)
    }

    function de(t, e, i) {
        i = i || [];
        for (var n = 0; e.length > n; n++)he(t, e[n]) && i.push(e[n]);
        return i
    }

    function he(t, e) {
        return t.bottom > e.top && t.top < e.bottom
    }

    function ue(t, e) {
        return e.forwardPressure - t.forwardPressure || (t.backwardCoord || 0) - (e.backwardCoord || 0) || te(t, e)
    }

    function fe(i) {
        function n(e) {
            var i = x[e];
            return t.isPlainObject(i) && !s(e) ? S(i, C.name) : i
        }

        function r(t, e) {
            return i.trigger.apply(i, [t, e || C].concat(Array.prototype.slice.call(arguments, 2), [C]))
        }

        function o(t) {
            var e = t.source || {};
            return M(t.startEditable, e.startEditable, n("eventStartEditable"), t.editable, e.editable, n("editable"))
        }

        function l(t) {
            var e = t.source || {};
            return M(t.durationEditable, e.durationEditable, n("eventDurationEditable"), t.editable, e.editable, n("editable"))
        }

        function a(t, e, n, o) {
            var s = i.mutateEvent(e, n, null);
            r("eventDrop", t, e, s.dateDelta, function () {
                s.undo(), H()
            }, o, {}), H()
        }

        function c(t, e, n, o) {
            var s = i.mutateEvent(e, null, n);
            r("eventResize", t, e, s.durationDelta, function () {
                s.undo(), H()
            }, o, {}), H()
        }

        function d(t) {
            return e.isMoment(t) && (t = t.day()), z[t]
        }

        function h() {
            return R
        }

        function u(t, e, i) {
            var n = t.clone();
            for (e = e || 1; z[(n.day() + (i ? e : 0) + 7) % 7];)n.add(e, "days");
            return n
        }

        function f() {
            var t = g.apply(null, arguments), e = p(t), i = m(e);
            return i
        }

        function g(t, e) {
            var i = C.colCnt, n = N ? -1 : 1, r = N ? i - 1 : 0;
            "object" == typeof t && (e = t.col, t = t.row);
            var o = t * i + (e * n + r);
            return o
        }

        function p(t) {
            var e = C.start.day();
            return t += L[e], 7 * Math.floor(t / R) + G[(t % R + R) % R] - e
        }

        function m(t) {
            return C.start.clone().add(t, "days")
        }

        function v(t) {
            var e = y(t), i = w(e), n = E(i);
            return n
        }

        function y(t) {
            return t.clone().stripTime().diff(C.start, "days")
        }

        function w(t) {
            var e = C.start.day();
            return t += e, Math.floor(t / 7) * R + L[(t % 7 + 7) % 7] - L[e]
        }

        function E(t) {
            var e = C.colCnt, i = N ? -1 : 1, n = N ? e - 1 : 0, r = Math.floor(t / e), o = (t % e + e) % e * i + n;
            return {row: r, col: o}
        }

        function b(t, e) {
            for (var i = C.rowCnt, n = C.colCnt, r = [], o = D(t, e), s = y(o.start), l = y(o.end), a = w(s), c = w(l) - 1, d = 0; i > d; d++) {
                var h = d * n, u = h + n - 1, f = Math.max(a, h), g = Math.min(c, u);
                if (g >= f) {
                    var m = E(f), v = E(g), b = [m.col, v.col].sort(), S = p(f) == s, T = p(g) + 1 == l;
                    r.push({row: d, leftCol: b[0], rightCol: b[1], isStart: S, isEnd: T})
                }
            }
            return r
        }

        function D(t, e) {
            var i, n, r = t.clone().stripTime();
            return e && (i = e.clone().stripTime(), n = +e.time(), n && n >= k && i.add(1, "days")), (!e || r >= i) && (i = r.clone().add(1, "days")), {
                start: r,
                end: i
            }
        }

        function T(t) {
            var e = D(t.start, t.end);
            return e.end.diff(e.start, "days") > 1
        }

        var C = this;
        C.calendar = i, C.opt = n, C.trigger = r, C.isEventDraggable = o, C.isEventResizable = l, C.eventDrop = a, C.eventResize = c;
        var H = i.reportEventChange, x = i.options, k = e.duration(x.nextDayThreshold);
        C.init(), C.getEventTimeText = function (t, e) {
            var r, o;
            return "object" == typeof t && "object" == typeof e ? (r = t, o = e, e = arguments[2]) : (r = t.start, o = t.end), e = e || n("timeFormat"), o && n("displayEventEnd") ? i.formatRange(r, o, e) : i.formatDate(r, e)
        }, C.isHiddenDay = d, C.skipHiddenDays = u, C.getCellsPerWeek = h, C.dateToCell = v, C.dateToDayOffset = y, C.dayOffsetToCellOffset = w, C.cellOffsetToCell = E, C.cellToDate = f, C.cellToCellOffset = g, C.cellOffsetToDayOffset = p, C.dayOffsetToDate = m, C.rangeToSegments = b, C.isMultiDayEvent = T;
        var R, P = n("hiddenDays") || [], z = [], L = [], G = [], N = n("isRTL");
        (function () {
            n("weekends") === !1 && P.push(0, 6);
            for (var e = 0, i = 0; 7 > e; e++)L[e] = i, z[e] = -1 != t.inArray(e, P), z[e] || (G[i] = e, i++);
            if (R = i, !R)throw"invalid hiddenDays"
        })()
    }

    function ge(t) {
        fe.call(this, t), this.dayGrid = new ee(this), this.coordMap = this.dayGrid.coordMap
    }

    function pe(t) {
        ge.call(this, t)
    }

    function me(t) {
        ge.call(this, t)
    }

    function ve(t) {
        ge.call(this, t)
    }

    function ye(t, e) {
        return e.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "a")
    }

    function we(t, e) {
        return e.longDateFormat("LT").replace(/\s*a$/i, "")
    }

    function Ee(t) {
        fe.call(this, t), this.timeGrid = new re(this), this.opt("allDaySlot") ? (this.dayGrid = new ee(this), this.coordMap = new $([this.dayGrid.coordMap, this.timeGrid.coordMap])) : this.coordMap = this.timeGrid.coordMap
    }

    function be(t) {
        Ee.call(this, t)
    }

    function Se(t) {
        Ee.call(this, t)
    }

    var De = {
        lang: "en",
        defaultTimedEventDuration: "02:00:00",
        defaultAllDayEventDuration: {days: 1},
        forceEventDuration: !1,
        nextDayThreshold: "09:00:00",
        defaultView: "month",
        aspectRatio: 1.35,
        header: {left: "title", center: "", right: "today prev,next"},
        weekends: !0,
        weekNumbers: !1,
        weekNumberTitle: "W",
        weekNumberCalculation: "local",
        lazyFetching: !0,
        startParam: "start",
        endParam: "end",
        timezoneParam: "timezone",
        timezone: !1,
        titleFormat: {month: "MMMM YYYY", week: "ll", day: "LL"},
        columnFormat: {month: "ddd", week: n, day: "dddd"},
        timeFormat: {"default": i},
        displayEventEnd: {month: !1, basicWeek: !1, "default": !0},
        isRTL: !1,
        defaultButtonText: {
            prev: "prev",
            next: "next",
            prevYear: "prev year",
            nextYear: "next year",
            today: "today",
            month: "month",
            week: "week",
            day: "day"
        },
        buttonIcons: {
            prev: "left-single-arrow",
            next: "right-single-arrow",
            prevYear: "left-double-arrow",
            nextYear: "right-double-arrow"
        },
        theme: !1,
        themeButtonIcons: {
            prev: "circle-triangle-w",
            next: "circle-triangle-e",
            prevYear: "seek-prev",
            nextYear: "seek-next"
        },
        dragOpacity: .75,
        dragRevertDuration: 500,
        dragScroll: !0,
        unselectAuto: !0,
        dropAccept: "*",
        eventLimit: !1,
        eventLimitText: "more",
        eventLimitClick: "popover",
        dayPopoverFormat: "LL",
        handleWindowResize: !0,
        windowResizeDelay: 200
    }, Te = {
        en: {
            columnFormat: {week: "ddd M/D"},
            dayPopoverFormat: "dddd, MMMM D"
        }
    }, Ce = {
        header: {left: "next,prev today", center: "", right: "title"},
        buttonIcons: {
            prev: "right-single-arrow",
            next: "left-single-arrow",
            prevYear: "right-double-arrow",
            nextYear: "left-double-arrow"
        },
        themeButtonIcons: {
            prev: "circle-triangle-e",
            next: "circle-triangle-w",
            nextYear: "seek-prev",
            prevYear: "seek-next"
        }
    }, He = t.fullCalendar = {version: "2.1.1"}, xe = He.views = {};
    t.fn.fullCalendar = function (e) {
        var i = Array.prototype.slice.call(arguments, 1), n = this;
        return this.each(function (r, o) {
            var s, a = t(o), c = a.data("fullCalendar");
            "string" == typeof e ? c && t.isFunction(c[e]) && (s = c[e].apply(c, i), r || (n = s), "destroy" === e && a.removeData("fullCalendar")) : c || (c = new l(a, e), a.data("fullCalendar", c), c.render())
        }), n
    }, He.langs = Te, He.datepickerLang = function (e, i, n) {
        var r = Te[e];
        r || (r = Te[e] = {}), o(r, {
            isRTL: n.isRTL,
            weekNumberTitle: n.weekHeader,
            titleFormat: {month: n.showMonthAfterYear ? "YYYY[" + n.yearSuffix + "] MMMM" : "MMMM YYYY[" + n.yearSuffix + "]"},
            defaultButtonText: {prev: P(n.prevText), next: P(n.nextText), today: P(n.currentText)}
        }), t.datepicker && (t.datepicker.regional[i] = t.datepicker.regional[e] = n, t.datepicker.regional.en = t.datepicker.regional[""], t.datepicker.setDefaults(n))
    }, He.lang = function (t, e) {
        var i;
        e && (i = Te[t], i || (i = Te[t] = {}), o(i, e || {})), De.lang = t
    }, He.sourceNormalizers = [], He.sourceFetchers = [];
    var ke = {dataType: "json", cache: !1}, Me = 1, Re = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    He.applyAll = k;
    var Pe = /^\s*\d{4}-\d\d$/, ze = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/;
    He.moment = function () {
        return G(arguments)
    }, He.moment.utc = function () {
        var t = G(arguments, !0);
        return t.hasTime() && t.utc(), t
    }, He.moment.parseZone = function () {
        return G(arguments, !0, !0)
    }, N.prototype = H(e.fn), N.prototype.clone = function () {
        return G([this])
    }, N.prototype.time = function (t) {
        if (null == t)return e.duration({
            hours: this.hours(),
            minutes: this.minutes(),
            seconds: this.seconds(),
            milliseconds: this.milliseconds()
        });
        delete this._ambigTime, e.isDuration(t) || e.isMoment(t) || (t = e.duration(t));
        var i = 0;
        return e.isDuration(t) && (i = 24 * Math.floor(t.asDays())), this.hours(i + t.hours()).minutes(t.minutes()).seconds(t.seconds()).milliseconds(t.milliseconds())
    }, N.prototype.stripTime = function () {
        var t = this.toArray();
        return e.fn.utc.call(this), this.year(t[0]).month(t[1]).date(t[2]).hours(0).minutes(0).seconds(0).milliseconds(0), this._ambigTime = !0, this._ambigZone = !0, this
    }, N.prototype.hasTime = function () {
        return !this._ambigTime
    }, N.prototype.stripZone = function () {
        var t = this.toArray(), i = this._ambigTime;
        return e.fn.utc.call(this), this.year(t[0]).month(t[1]).date(t[2]).hours(t[3]).minutes(t[4]).seconds(t[5]).milliseconds(t[6]), i && (this._ambigTime = !0), this._ambigZone = !0, this
    }, N.prototype.hasZone = function () {
        return !this._ambigZone
    }, N.prototype.zone = function (t) {
        return null != t && (delete this._ambigTime, delete this._ambigZone), e.fn.zone.apply(this, arguments)
    }, N.prototype.local = function () {
        var t = this.toArray(), i = this._ambigZone;
        return delete this._ambigTime, delete this._ambigZone, e.fn.local.apply(this, arguments), i && this.year(t[0]).month(t[1]).date(t[2]).hours(t[3]).minutes(t[4]).seconds(t[5]).milliseconds(t[6]), this
    }, N.prototype.utc = function () {
        return delete this._ambigTime, delete this._ambigZone, e.fn.utc.apply(this, arguments)
    }, N.prototype.format = function () {
        return arguments[0] ? V(this, arguments[0]) : this._ambigTime ? A(this, "YYYY-MM-DD") : this._ambigZone ? A(this, "YYYY-MM-DD[T]HH:mm:ss") : A(this)
    }, N.prototype.toISOString = function () {
        return this._ambigTime ? A(this, "YYYY-MM-DD") : this._ambigZone ? A(this, "YYYY-MM-DD[T]HH:mm:ss") : e.fn.toISOString.apply(this, arguments)
    }, N.prototype.isWithin = function (t, e) {
        var i = Y([this, t, e]);
        return i[0] >= i[1] && i[0] < i[2]
    }, N.prototype.isSame = function (t, i) {
        var n;
        return i ? (n = Y([this, t], !0), e.fn.isSame.call(n[0], n[1], i)) : (t = He.moment.parseZone(t), e.fn.isSame.call(this, t) && Boolean(this._ambigTime) === Boolean(t._ambigTime) && Boolean(this._ambigZone) === Boolean(t._ambigZone))
    }, t.each(["isBefore", "isAfter"], function (t, i) {
        N.prototype[i] = function (t, n) {
            var r = Y([this, t]);
            return e.fn[i].call(r[0], r[1], n)
        }
    });
    var Le = {
        t: function (t) {
            return A(t, "a").charAt(0)
        }, T: function (t) {
            return A(t, "A").charAt(0)
        }
    };
    He.formatRange = W;
    var Ge = {
        Y: "year",
        M: "month",
        D: "day",
        d: "day",
        A: "second",
        a: "second",
        T: "second",
        t: "second",
        H: "second",
        h: "second",
        m: "second",
        s: "second"
    }, Ne = {};
    j.prototype = {
        isHidden: !0, options: null, el: null, documentMousedownProxy: null, margin: 10, show: function () {
            this.isHidden && (this.el || this.render(), this.el.show(), this.position(), this.isHidden = !1, this.trigger("show"))
        }, hide: function () {
            this.isHidden || (this.el.hide(), this.isHidden = !0, this.trigger("hide"))
        }, render: function () {
            var e = this, i = this.options;
            this.el = t('<div class="fc-popover"/>').addClass(i.className || "").css({
                top: 0,
                left: 0
            }).append(i.content).appendTo(i.parentEl), this.el.on("click", ".fc-close", function () {
                e.hide()
            }), i.autoHide && t(document).on("mousedown", this.documentMousedownProxy = t.proxy(this, "documentMousedown"))
        }, documentMousedown: function (e) {
            this.el && !t(e.target).closest(this.el).length && this.hide()
        }, destroy: function () {
            this.hide(), this.el && (this.el.remove(), this.el = null), t(document).off("mousedown", this.documentMousedownProxy)
        }, position: function () {
            var e, i, n, r, o, s = this.options, l = this.el.offsetParent().offset(), a = this.el.outerWidth(), c = this.el.outerHeight(), d = t(window), h = y(this.el);
            r = s.top || 0, o = void 0 !== s.left ? s.left : void 0 !== s.right ? s.right - a : 0, h.is(window) || h.is(document) ? (h = d, e = 0, i = 0) : (n = h.offset(), e = n.top, i = n.left), e += d.scrollTop(), i += d.scrollLeft(), s.viewportConstrain !== !1 && (r = Math.min(r, e + h.outerHeight() - c - this.margin), r = Math.max(r, e + this.margin), o = Math.min(o, i + h.outerWidth() - a - this.margin), o = Math.max(o, i + this.margin)), this.el.css({
                top: r - l.top,
                left: o - l.left
            })
        }, trigger: function (t) {
            this.options[t] && this.options[t].apply(this, Array.prototype.slice.call(arguments, 1))
        }
    }, X.prototype = {
        grid: null,
        rows: null,
        cols: null,
        containerEl: null,
        minX: null,
        maxX: null,
        minY: null,
        maxY: null,
        build: function () {
            this.grid.buildCoords(this.rows = [], this.cols = []), this.computeBounds()
        },
        getCell: function (t, e) {
            var i, n = null, r = this.rows, o = this.cols, s = -1, l = -1;
            if (this.inBounds(t, e)) {
                for (i = 0; r.length > i; i++)if (e >= r[i][0] && r[i][1] > e) {
                    s = i;
                    break
                }
                for (i = 0; o.length > i; i++)if (t >= o[i][0] && o[i][1] > t) {
                    l = i;
                    break
                }
                s >= 0 && l >= 0 && (n = {row: s, col: l}, n.grid = this.grid, n.date = this.grid.getCellDate(n))
            }
            return n
        },
        computeBounds: function () {
            var t;
            this.containerEl && (t = this.containerEl.offset(), this.minX = t.left, this.maxX = t.left + this.containerEl.outerWidth(), this.minY = t.top, this.maxY = t.top + this.containerEl.outerHeight())
        },
        inBounds: function (t, e) {
            return this.containerEl ? t >= this.minX && this.maxX > t && e >= this.minY && this.maxY > e : !0
        }
    }, $.prototype = {
        coordMaps: null, build: function () {
            var t, e = this.coordMaps;
            for (t = 0; e.length > t; t++)e[t].build()
        }, getCell: function (t, e) {
            var i, n = this.coordMaps, r = null;
            for (i = 0; n.length > i && !r; i++)r = n[i].getCell(t, e);
            return r
        }
    }, q.prototype = {
        coordMap: null,
        options: null,
        isListening: !1,
        isDragging: !1,
        origCell: null,
        origDate: null,
        cell: null,
        date: null,
        mouseX0: null,
        mouseY0: null,
        mousemoveProxy: null,
        mouseupProxy: null,
        scrollEl: null,
        scrollBounds: null,
        scrollTopVel: null,
        scrollLeftVel: null,
        scrollIntervalId: null,
        scrollHandlerProxy: null,
        scrollSensitivity: 30,
        scrollSpeed: 200,
        scrollIntervalMs: 50,
        mousedown: function (t) {
            E(t) && (t.preventDefault(), this.startListening(t), this.options.distance || this.startDrag(t))
        },
        startListening: function (e) {
            var i, n;
            this.isListening || (e && this.options.scroll && (i = y(t(e.target)), i.is(window) || i.is(document) || (this.scrollEl = i, this.scrollHandlerProxy = L(t.proxy(this, "scrollHandler"), 100), this.scrollEl.on("scroll", this.scrollHandlerProxy))), this.computeCoords(), e && (n = this.getCell(e), this.origCell = n, this.origDate = n ? n.date : null, this.mouseX0 = e.pageX, this.mouseY0 = e.pageY), t(document).on("mousemove", this.mousemoveProxy = t.proxy(this, "mousemove")).on("mouseup", this.mouseupProxy = t.proxy(this, "mouseup")).on("selectstart", this.preventDefault), this.isListening = !0, this.trigger("listenStart", e))
        },
        computeCoords: function () {
            this.coordMap.build(), this.computeScrollBounds()
        },
        mousemove: function (t) {
            var e, i;
            this.isDragging || (e = this.options.distance || 1, i = Math.pow(t.pageX - this.mouseX0, 2) + Math.pow(t.pageY - this.mouseY0, 2), i >= e * e && this.startDrag(t)), this.isDragging && this.drag(t)
        },
        startDrag: function (t) {
            var e;
            this.isListening || this.startListening(), this.isDragging || (this.isDragging = !0, this.trigger("dragStart", t), e = this.getCell(t), e && this.cellOver(e, !0))
        },
        drag: function (t) {
            var e;
            this.isDragging && (e = this.getCell(t), U(e, this.cell) || (this.cell && this.cellOut(), e && this.cellOver(e)), this.dragScroll(t))
        },
        cellOver: function (t) {
            this.cell = t, this.date = t.date, this.trigger("cellOver", t, t.date)
        },
        cellOut: function () {
            this.cell && (this.trigger("cellOut", this.cell), this.cell = null, this.date = null)
        },
        mouseup: function (t) {
            this.stopDrag(t), this.stopListening(t)
        },
        stopDrag: function (t) {
            this.isDragging && (this.stopScrolling(), this.trigger("dragStop", t), this.isDragging = !1)
        },
        stopListening: function (e) {
            this.isListening && (this.scrollEl && (this.scrollEl.off("scroll", this.scrollHandlerProxy), this.scrollHandlerProxy = null), t(document).off("mousemove", this.mousemoveProxy).off("mouseup", this.mouseupProxy).off("selectstart", this.preventDefault), this.mousemoveProxy = null, this.mouseupProxy = null, this.isListening = !1, this.trigger("listenStop", e), this.origCell = this.cell = null, this.origDate = this.date = null)
        },
        getCell: function (t) {
            return this.coordMap.getCell(t.pageX, t.pageY)
        },
        trigger: function (t) {
            this.options[t] && this.options[t].apply(this, Array.prototype.slice.call(arguments, 1))
        },
        preventDefault: function (t) {
            t.preventDefault()
        },
        computeScrollBounds: function () {
            var t, e = this.scrollEl;
            e && (t = e.offset(), this.scrollBounds = {
                top: t.top,
                left: t.left,
                bottom: t.top + e.outerHeight(),
                right: t.left + e.outerWidth()
            })
        },
        dragScroll: function (t) {
            var e, i, n, r, o = this.scrollSensitivity, s = this.scrollBounds, l = 0, a = 0;
            s && (e = (o - (t.pageY - s.top)) / o, i = (o - (s.bottom - t.pageY)) / o, n = (o - (t.pageX - s.left)) / o, r = (o - (s.right - t.pageX)) / o, e >= 0 && 1 >= e ? l = -1 * e * this.scrollSpeed : i >= 0 && 1 >= i && (l = i * this.scrollSpeed), n >= 0 && 1 >= n ? a = -1 * n * this.scrollSpeed : r >= 0 && 1 >= r && (a = r * this.scrollSpeed)), this.setScrollVel(l, a)
        },
        setScrollVel: function (e, i) {
            this.scrollTopVel = e, this.scrollLeftVel = i, this.constrainScrollVel(), !this.scrollTopVel && !this.scrollLeftVel || this.scrollIntervalId || (this.scrollIntervalId = setInterval(t.proxy(this, "scrollIntervalFunc"), this.scrollIntervalMs))
        },
        constrainScrollVel: function () {
            var t = this.scrollEl;
            0 > this.scrollTopVel ? 0 >= t.scrollTop() && (this.scrollTopVel = 0) : this.scrollTopVel > 0 && t.scrollTop() + t[0].clientHeight >= t[0].scrollHeight && (this.scrollTopVel = 0), 0 > this.scrollLeftVel ? 0 >= t.scrollLeft() && (this.scrollLeftVel = 0) : this.scrollLeftVel > 0 && t.scrollLeft() + t[0].clientWidth >= t[0].scrollWidth && (this.scrollLeftVel = 0)
        },
        scrollIntervalFunc: function () {
            var t = this.scrollEl, e = this.scrollIntervalMs / 1e3;
            this.scrollTopVel && t.scrollTop(t.scrollTop() + this.scrollTopVel * e), this.scrollLeftVel && t.scrollLeft(t.scrollLeft() + this.scrollLeftVel * e), this.constrainScrollVel(), this.scrollTopVel || this.scrollLeftVel || this.stopScrolling()
        },
        stopScrolling: function () {
            this.scrollIntervalId && (clearInterval(this.scrollIntervalId), this.scrollIntervalId = null, this.computeCoords())
        },
        scrollHandler: function () {
            this.scrollIntervalId || this.computeCoords()
        }
    }, K.prototype = {
        options: null,
        sourceEl: null,
        el: null,
        parentEl: null,
        top0: null,
        left0: null,
        mouseY0: null,
        mouseX0: null,
        topDelta: null,
        leftDelta: null,
        mousemoveProxy: null,
        isFollowing: !1,
        isHidden: !1,
        isAnimating: !1,
        start: function (e) {
            this.isFollowing || (this.isFollowing = !0, this.mouseY0 = e.pageY, this.mouseX0 = e.pageX, this.topDelta = 0, this.leftDelta = 0, this.isHidden || this.updatePosition(), t(document).on("mousemove", this.mousemoveProxy = t.proxy(this, "mousemove")))
        },
        stop: function (e, i) {
            function n() {
                this.isAnimating = !1, r.destroyEl(), this.top0 = this.left0 = null, i && i()
            }

            var r = this, o = this.options.revertDuration;
            this.isFollowing && !this.isAnimating && (this.isFollowing = !1, t(document).off("mousemove", this.mousemoveProxy), e && o && !this.isHidden ? (this.isAnimating = !0, this.el.animate({
                top: this.top0,
                left: this.left0
            }, {duration: o, complete: n})) : n())
        },
        getEl: function () {
            var t = this.el;
            return t || (this.sourceEl.width(), t = this.el = this.sourceEl.clone().css({
                position: "absolute",
                visibility: "",
                display: this.isHidden ? "none" : "",
                margin: 0,
                right: "auto",
                bottom: "auto",
                width: this.sourceEl.width(),
                height: this.sourceEl.height(),
                opacity: this.options.opacity || "",
                zIndex: this.options.zIndex
            }).appendTo(this.parentEl)), t
        },
        destroyEl: function () {
            this.el && (this.el.remove(), this.el = null)
        },
        updatePosition: function () {
            var t, e;
            this.getEl(), null === this.top0 && (this.sourceEl.width(), t = this.sourceEl.offset(), e = this.el.offsetParent().offset(), this.top0 = t.top - e.top, this.left0 = t.left - e.left), this.el.css({
                top: this.top0 + this.topDelta,
                left: this.left0 + this.leftDelta
            })
        },
        mousemove: function (t) {
            this.topDelta = t.pageY - this.mouseY0, this.leftDelta = t.pageX - this.mouseX0, this.isHidden || this.updatePosition()
        },
        hide: function () {
            this.isHidden || (this.isHidden = !0, this.el && this.el.hide())
        },
        show: function () {
            this.isHidden && (this.isHidden = !1, this.updatePosition(), this.getEl().show())
        }
    }, Q.prototype = {
        view: null, cellHtml: "<td/>", rowHtml: function (t, e) {
            var i, n, r = this.view, o = this.getHtmlRenderer("cell", t), s = "";
            for (e = e || 0, i = 0; r.colCnt > i; i++)n = r.cellToDate(e, i), s += o(e, i, n);
            return s = this.bookendCells(s, t, e), "<tr>" + s + "</tr>"
        }, bookendCells: function (t, e, i) {
            var n = this.view, r = this.getHtmlRenderer("intro", e)(i || 0), o = this.getHtmlRenderer("outro", e)(i || 0), s = n.opt("isRTL"), l = s ? o : r, a = s ? r : o;
            return "string" == typeof t ? l + t + a : t.prepend(l).append(a)
        }, getHtmlRenderer: function (t, e) {
            var i, n, r, o, s = this.view;
            return i = t + "Html", e && (n = e + z(t) + "Html"), n && (o = s[n]) ? r = s : n && (o = this[n]) ? r = this : (o = s[i]) ? r = s : (o = this[i]) && (r = this), "function" == typeof o ? function () {
                return o.apply(r, arguments) || ""
            } : function () {
                return o || ""
            }
        }
    }, J.prototype = H(Q.prototype), t.extend(J.prototype, {
        el: null,
        coordMap: null,
        cellDuration: null,
        render: function () {
            this.bindHandlers()
        },
        destroy: function () {
        },
        buildCoords: function () {
        },
        getCellDate: function () {
        },
        getCellDayEl: function () {
        },
        rangeToSegs: function () {
        },
        bindHandlers: function () {
            var e = this;
            this.el.on("mousedown", function (i) {
                t(i.target).is(".fc-event-container *, .fc-more") || t(i.target).closest(".fc-popover").length || e.dayMousedown(i)
            }), this.bindSegHandlers()
        },
        dayMousedown: function (t) {
            var e, i, n, r = this, o = this.view, s = o.opt("selectable"), l = null, a = new q(this.coordMap, {
                scroll: o.opt("dragScroll"),
                dragStart: function () {
                    o.unselect()
                },
                cellOver: function (t, o) {
                    a.origDate && (n = r.getCellDayEl(t), l = [o, a.origDate].sort(C), e = l[0], i = l[1].clone().add(r.cellDuration), s && r.renderSelection(e, i))
                },
                cellOut: function () {
                    l = null, r.destroySelection()
                },
                listenStop: function (t) {
                    l && (l[0].isSame(l[1]) && o.trigger("dayClick", n[0], e, t), s && o.reportSelection(e, i, t))
                }
            });
            a.mousedown(t)
        },
        renderDrag: function () {
        },
        destroyDrag: function () {
        },
        renderResize: function () {
        },
        destroyResize: function () {
        },
        renderRangeHelper: function (t, e, i) {
            var n, r = this.view;
            !e && r.opt("forceEventDuration") && (e = r.calendar.getDefaultEventEnd(!t.hasTime(), t)), n = i ? H(i.event) : {}, n.start = t, n.end = e, n.allDay = !(t.hasTime() || e && e.hasTime()), n.className = (n.className || []).concat("fc-helper"), i || (n.editable = !1), this.renderHelper(n, i)
        },
        renderHelper: function () {
        },
        destroyHelper: function () {
        },
        renderSelection: function (t, e) {
            this.renderHighlight(t, e)
        },
        destroySelection: function () {
            this.destroyHighlight()
        },
        renderHighlight: function () {
        },
        destroyHighlight: function () {
        },
        headHtml: function () {
            return '<div class="fc-row ' + this.view.widgetHeaderClass + '">' + "<table>" + "<thead>" + this.rowHtml("head") + "</thead>" + "</table>" + "</div>"
        },
        headCellHtml: function (t, e, i) {
            var n = this.view, r = n.calendar, o = n.opt("columnFormat");
            return '<th class="fc-day-header ' + n.widgetHeaderClass + " fc-" + Re[i.day()] + '">' + R(r.formatDate(i, o)) + "</th>"
        },
        bgCellHtml: function (t, e, i) {
            var n = this.view, r = this.getDayClasses(i);
            return r.unshift("fc-day", n.widgetContentClass), '<td class="' + r.join(" ") + '" data-date="' + i.format() + '"></td>'
        },
        getDayClasses: function (t) {
            var e = this.view, i = e.calendar.getNow().stripTime(), n = ["fc-" + Re[t.day()]];
            return "month" === e.name && t.month() != e.intervalStart.month() && n.push("fc-other-month"), t.isSame(i, "day") ? n.push("fc-today", e.highlightStateClass) : i > t ? n.push("fc-past") : n.push("fc-future"), n
        }
    }), t.extend(J.prototype, {
        mousedOverSeg: null, isDraggingSeg: !1, isResizingSeg: !1, renderEvents: function () {
        }, getSegs: function () {
        }, destroyEvents: function () {
            this.triggerSegMouseout()
        }, renderSegs: function (e, i) {
            var n, r = this.view, o = "", s = [];
            for (n = 0; e.length > n; n++)o += this.renderSegHtml(e[n], i);
            return t(o).each(function (i, n) {
                var o = e[i], l = r.resolveEventEl(o.event, t(n));
                l && (l.data("fc-seg", o), o.el = l, s.push(o))
            }), s
        }, renderSegHtml: function () {
        }, eventsToSegs: function (e, i, n) {
            var r = this;
            return t.map(e, function (t) {
                return r.eventToSegs(t, i, n)
            })
        }, eventToSegs: function (t, e, i) {
            var n, r, o, s = t.start.clone().stripZone(), l = this.view.calendar.getEventEnd(t).stripZone();
            for (e && i ? (o = b(s, l, e, i), n = o ? [o] : []) : n = this.rangeToSegs(s, l), r = 0; n.length > r; r++)o = n[r], o.event = t, o.eventStartMS = +s, o.eventDurationMS = l - s;
            return n
        }, bindSegHandlers: function () {
            var e = this, i = this.view;
            t.each({
                mouseenter: function (t, i) {
                    e.triggerSegMouseover(t, i)
                }, mouseleave: function (t, i) {
                    e.triggerSegMouseout(t, i)
                }, click: function (t, e) {
                    return i.trigger("eventClick", this, t.event, e)
                }, mousedown: function (n, r) {
                    t(r.target).is(".fc-resizer") && i.isEventResizable(n.event) ? e.segResizeMousedown(n, r) : i.isEventDraggable(n.event) && e.segDragMousedown(n, r)
                }
            }, function (i, n) {
                e.el.on(i, ".fc-event-container > *", function (i) {
                    var r = t(this).data("fc-seg");
                    return !r || e.isDraggingSeg || e.isResizingSeg ? void 0 : n.call(this, r, i)
                })
            })
        }, triggerSegMouseover: function (t, e) {
            this.mousedOverSeg || (this.mousedOverSeg = t, this.view.trigger("eventMouseover", t.el[0], t.event, e))
        }, triggerSegMouseout: function (t, e) {
            e = e || {}, this.mousedOverSeg && (t = t || this.mousedOverSeg, this.mousedOverSeg = null, this.view.trigger("eventMouseout", t.el[0], t.event, e))
        }, segDragMousedown: function (t, e) {
            var i, n, r = this, o = this.view, s = t.el, l = t.event, a = new K(t.el, {
                parentEl: o.el,
                opacity: o.opt("dragOpacity"),
                revertDuration: o.opt("dragRevertDuration"),
                zIndex: 2
            }), c = new q(o.coordMap, {
                distance: 5, scroll: o.opt("dragScroll"), listenStart: function (t) {
                    a.hide(), a.start(t)
                }, dragStart: function (e) {
                    r.triggerSegMouseout(t, e), r.isDraggingSeg = !0, o.hideEvent(l), o.trigger("eventDragStart", s[0], l, e, {})
                }, cellOver: function (e, s) {
                    var l = t.cellDate || c.origDate, d = r.computeDraggedEventDates(t, l, s);
                    i = d.start, n = d.end, o.renderDrag(i, n, t) ? a.hide() : a.show()
                }, cellOut: function () {
                    i = null, o.destroyDrag(), a.show()
                }, dragStop: function (t) {
                    var e = i && !i.isSame(l.start);
                    a.stop(!e, function () {
                        r.isDraggingSeg = !1, o.destroyDrag(), o.showEvent(l), o.trigger("eventDragStop", s[0], l, t, {}), e && o.eventDrop(s[0], l, i, t)
                    })
                }, listenStop: function () {
                    a.stop()
                }
            });
            c.mousedown(e)
        }, computeDraggedEventDates: function (t, e, i) {
            var n, r, o, s = this.view, l = t.event, a = l.start, c = s.calendar.getEventEnd(l);
            return i.hasTime() === e.hasTime() ? (n = D(i, e), r = a.clone().add(n), o = null === l.end ? null : c.clone().add(n)) : (r = i, o = null), {
                start: r,
                end: o
            }
        }, segResizeMousedown: function (t, e) {
            function i() {
                r.destroyResize(), o.showEvent(l)
            }

            var n, r = this, o = this.view, s = t.el, l = t.event, a = l.start, c = o.calendar.getEventEnd(l), d = null;
            n = new q(this.coordMap, {
                distance: 5, scroll: o.opt("dragScroll"), dragStart: function (e) {
                    r.triggerSegMouseout(t, e), r.isResizingSeg = !0, o.trigger("eventResizeStart", s[0], l, e, {})
                }, cellOver: function (e, n) {
                    n.isBefore(a) && (n = a), d = n.clone().add(r.cellDuration), d.isSame(c) ? (d = null, i()) : (r.renderResize(a, d, t), o.hideEvent(l))
                }, cellOut: function () {
                    d = null, i()
                }, dragStop: function (t) {
                    r.isResizingSeg = !1, i(), o.trigger("eventResizeStop", s[0], l, t, {}), d && o.eventResize(s[0], l, d, t)
                }
            }), n.mousedown(e)
        }, getSegClasses: function (t, e, i) {
            var n = t.event, r = ["fc-event", t.isStart ? "fc-start" : "fc-not-start", t.isEnd ? "fc-end" : "fc-not-end"].concat(n.className, n.source ? n.source.className : []);
            return e && r.push("fc-draggable"), i && r.push("fc-resizable"), r
        }, getEventSkinCss: function (t) {
            var e = this.view, i = t.source || {}, n = t.color, r = i.color, o = e.opt("eventColor"), s = t.backgroundColor || n || i.backgroundColor || r || e.opt("eventBackgroundColor") || o, l = t.borderColor || n || i.borderColor || r || e.opt("eventBorderColor") || o, a = t.textColor || i.textColor || e.opt("eventTextColor"), c = [];
            return s && c.push("background-color:" + s), l && c.push("border-color:" + l), a && c.push("color:" + a), c.join(";")
        }
    }), ee.prototype = H(J.prototype), t.extend(ee.prototype, {
        numbersVisible: !1,
        cellDuration: e.duration({days: 1}),
        bottomCoordPadding: 0,
        rowEls: null,
        dayEls: null,
        helperEls: null,
        highlightEls: null,
        render: function (e) {
            var i, n = this.view, r = "";
            for (i = 0; n.rowCnt > i; i++)r += this.dayRowHtml(i, e);
            this.el.html(r), this.rowEls = this.el.find(".fc-row"), this.dayEls = this.el.find(".fc-day"), this.dayEls.each(function (e, i) {
                var r = n.cellToDate(Math.floor(e / n.colCnt), e % n.colCnt);
                n.trigger("dayRender", null, r, t(i))
            }), J.prototype.render.call(this)
        },
        destroy: function () {
            this.destroySegPopover()
        },
        dayRowHtml: function (t, e) {
            var i = this.view, n = ["fc-row", "fc-week", i.widgetContentClass];
            return e && n.push("fc-rigid"), '<div class="' + n.join(" ") + '">' + '<div class="fc-bg">' + "<table>" + this.rowHtml("day", t) + "</table>" + "</div>" + '<div class="fc-content-skeleton">' + "<table>" + (this.numbersVisible ? "<thead>" + this.rowHtml("number", t) + "</thead>" : "") + "</table>" + "</div>" + "</div>"
        },
        dayCellHtml: function (t, e, i) {
            return this.bgCellHtml(t, e, i)
        },
        buildCoords: function (e, i) {
            var n, r, o, s = this.view.colCnt;
            this.dayEls.slice(0, s).each(function (e, s) {
                n = t(s), r = n.offset().left, e && (o[1] = r), o = [r], i[e] = o
            }), o[1] = r + n.outerWidth(), this.rowEls.each(function (i, s) {
                n = t(s), r = n.offset().top, i && (o[1] = r), o = [r], e[i] = o
            }), o[1] = r + n.outerHeight() + this.bottomCoordPadding
        },
        getCellDate: function (t) {
            return this.view.cellToDate(t)
        },
        getCellDayEl: function (t) {
            return this.dayEls.eq(t.row * this.view.colCnt + t.col)
        },
        rangeToSegs: function (t, e) {
            return this.view.rangeToSegments(t, e)
        },
        renderDrag: function (t, e, i) {
            var n;
            return this.renderHighlight(t, e || this.view.calendar.getDefaultEventEnd(!0, t)), i && !i.el.closest(this.el).length ? (this.renderRangeHelper(t, e, i), n = this.view.opt("dragOpacity"), void 0 !== n && this.helperEls.css("opacity", n), !0) : void 0
        },
        destroyDrag: function () {
            this.destroyHighlight(), this.destroyHelper()
        },
        renderResize: function (t, e, i) {
            this.renderHighlight(t, e), this.renderRangeHelper(t, e, i)
        },
        destroyResize: function () {
            this.destroyHighlight(), this.destroyHelper()
        },
        renderHelper: function (e, i) {
            var n = [], r = this.renderEventRows([e]);
            this.rowEls.each(function (e, o) {
                var s, l = t(o), a = t('<div class="fc-helper-skeleton"><table/></div>');
                s = i && i.row === e ? i.el.position().top : l.find(".fc-content-skeleton tbody").position().top, a.css("top", s).find("table").append(r[e].tbodyEl), l.append(a), n.push(a[0])
            }), this.helperEls = t(n)
        },
        destroyHelper: function () {
            this.helperEls && (this.helperEls.remove(), this.helperEls = null)
        },
        renderHighlight: function (e, i) {
            var n, r, o, s = this.rangeToSegs(e, i), l = [];
            for (n = 0; s.length > n; n++)r = s[n], o = t(this.highlightSkeletonHtml(r.leftCol, r.rightCol + 1)), o.appendTo(this.rowEls[r.row]), l.push(o[0]);
            this.highlightEls = t(l)
        },
        destroyHighlight: function () {
            this.highlightEls && (this.highlightEls.remove(), this.highlightEls = null)
        },
        highlightSkeletonHtml: function (t, e) {
            var i = this.view.colCnt, n = "";
            return t > 0 && (n += '<td colspan="' + t + '"/>'), e > t && (n += '<td colspan="' + (e - t) + '" class="fc-highlight" />'), i > e && (n += '<td colspan="' + (i - e) + '"/>'), n = this.bookendCells(n, "highlight"), '<div class="fc-highlight-skeleton"><table><tr>' + n + "</tr>" + "</table>" + "</div>"
        }
    }), t.extend(ee.prototype, {
        segs: null, rowStructs: null, renderEvents: function (e) {
            var i = this.rowStructs = this.renderEventRows(e), n = [];
            this.rowEls.each(function (e, r) {
                t(r).find(".fc-content-skeleton > table").append(i[e].tbodyEl), n.push.apply(n, i[e].segs)
            }), this.segs = n
        }, getSegs: function () {
            return (this.segs || []).concat(this.popoverSegs || [])
        }, destroyEvents: function () {
            var t, e;
            for (J.prototype.destroyEvents.call(this), t = this.rowStructs || []; e = t.pop();)e.tbodyEl.remove();
            this.segs = null, this.destroySegPopover()
        }, renderEventRows: function (t) {
            var e, i, n = this.eventsToSegs(t), r = [];
            for (n = this.renderSegs(n), e = this.groupSegRows(n), i = 0; e.length > i; i++)r.push(this.renderEventRow(i, e[i]));
            return r
        }, renderSegHtml: function (t, e) {
            var i, n = this.view, r = n.opt("isRTL"), o = t.event, s = n.isEventDraggable(o), l = !e && o.allDay && t.isEnd && n.isEventResizable(o), a = this.getSegClasses(t, s, l), c = this.getEventSkinCss(o), d = "";
            return a.unshift("fc-day-grid-event"), !o.allDay && t.isStart && (d = '<span class="fc-time">' + R(n.getEventTimeText(o)) + "</span>"), i = '<span class="fc-title">' + (R(o.title || "") || "&nbsp;") + "</span>", '<a class="' + a.join(" ") + '"' + (o.url ? ' href="' + R(o.url) + '"' : "") + (c ? ' style="' + c + '"' : "") + ">" + '<div class="fc-content">' + (r ? i + " " + d : d + " " + i) + "</div>" + (l ? '<div class="fc-resizer"/>' : "") + "</a>"
        }, renderEventRow: function (e, i) {
            function n(e) {
                for (; e > s;)d = (y[r - 1] || [])[s], d ? d.attr("rowspan", parseInt(d.attr("rowspan") || 1, 10) + 1) : (d = t("<td/>"), l.append(d)), v[r][s] = d, y[r][s] = d, s++
            }

            var r, o, s, l, a, c, d, h = this.view, u = h.colCnt, f = this.buildSegLevels(i), g = Math.max(1, f.length), p = t("<tbody/>"), m = [], v = [], y = [];
            for (r = 0; g > r; r++) {
                if (o = f[r], s = 0, l = t("<tr/>"), m.push([]), v.push([]), y.push([]), o)for (a = 0; o.length > a; a++) {
                    for (c = o[a], n(c.leftCol), d = t('<td class="fc-event-container"/>').append(c.el), c.leftCol != c.rightCol ? d.attr("colspan", c.rightCol - c.leftCol + 1) : y[r][s] = d; c.rightCol >= s;)v[r][s] = d, m[r][s] = c, s++;
                    l.append(d)
                }
                n(u), this.bookendCells(l, "eventSkeleton"), p.append(l)
            }
            return {row: e, tbodyEl: p, cellMatrix: v, segMatrix: m, segLevels: f, segs: i}
        }, buildSegLevels: function (t) {
            var e, i, n, r = [];
            for (t.sort(te), e = 0; t.length > e; e++) {
                for (i = t[e], n = 0; r.length > n && ie(i, r[n]); n++);
                i.level = n, (r[n] || (r[n] = [])).push(i)
            }
            for (n = 0; r.length > n; n++)r[n].sort(ne);
            return r
        }, groupSegRows: function (t) {
            var e, i = this.view, n = [];
            for (e = 0; i.rowCnt > e; e++)n.push([]);
            for (e = 0; t.length > e; e++)n[t[e].row].push(t[e]);
            return n
        }
    }), t.extend(ee.prototype, {
        segPopover: null, popoverSegs: null, destroySegPopover: function () {
            this.segPopover && this.segPopover.hide()
        }, limitRows: function (t) {
            var e, i, n = this.rowStructs || [];
            for (e = 0; n.length > e; e++)this.unlimitRow(e), i = t ? "number" == typeof t ? t : this.computeRowLevelLimit(e) : !1, i !== !1 && this.limitRow(e, i)
        }, computeRowLevelLimit: function (t) {
            var e, i, n = this.rowEls.eq(t), r = n.height(), o = this.rowStructs[t].tbodyEl.children();
            for (e = 0; o.length > e; e++)if (i = o.eq(e).removeClass("fc-limited"), i.position().top + i.outerHeight() > r)return e;
            return !1
        }, limitRow: function (e, i) {
            function n(n) {
                for (; n > T;)r = {
                    row: e,
                    col: T
                }, d = E.getCellSegs(r, i), d.length && (f = s[i - 1][T], w = E.renderMoreLink(r, d), y = t("<div/>").append(w), f.append(y), D.push(y[0])), T++
            }

            var r, o, s, l, a, c, d, h, u, f, g, p, m, v, y, w, E = this, b = this.view, S = this.rowStructs[e], D = [], T = 0;
            if (i && S.segLevels.length > i) {
                for (o = S.segLevels[i - 1], s = S.cellMatrix, l = S.tbodyEl.children().slice(i).addClass("fc-limited").get(), a = 0; o.length > a; a++) {
                    for (c = o[a], n(c.leftCol), u = [], h = 0; c.rightCol >= T;)r = {
                        row: e,
                        col: T
                    }, d = this.getCellSegs(r, i), u.push(d), h += d.length, T++;
                    if (h) {
                        for (f = s[i - 1][c.leftCol], g = f.attr("rowspan") || 1, p = [], m = 0; u.length > m; m++)v = t('<td class="fc-more-cell"/>').attr("rowspan", g), d = u[m], r = {
                            row: e,
                            col: c.leftCol + m
                        }, w = this.renderMoreLink(r, [c].concat(d)), y = t("<div/>").append(w), v.append(y), p.push(v[0]), D.push(v[0]);
                        f.addClass("fc-limited").after(t(p)), l.push(f[0])
                    }
                }
                n(b.colCnt), S.moreEls = t(D), S.limitedEls = t(l)
            }
        }, unlimitRow: function (t) {
            var e = this.rowStructs[t];
            e.moreEls && (e.moreEls.remove(), e.moreEls = null), e.limitedEls && (e.limitedEls.removeClass("fc-limited"), e.limitedEls = null)
        }, renderMoreLink: function (e, i) {
            var n = this, r = this.view;
            return t('<a class="fc-more"/>').text(this.getMoreLinkText(i.length)).on("click", function (o) {
                var s = r.opt("eventLimitClick"), l = r.cellToDate(e), a = t(this), c = n.getCellDayEl(e), d = n.getCellSegs(e), h = n.resliceDaySegs(d, l), u = n.resliceDaySegs(i, l);
                "function" == typeof s && (s = r.trigger("eventLimitClick", null, {
                    date: l,
                    dayEl: c,
                    moreEl: a,
                    segs: h,
                    hiddenSegs: u
                }, o)), "popover" === s ? n.showSegPopover(l, e, a, h) : "string" == typeof s && r.calendar.zoomTo(l, s)
            })
        }, showSegPopover: function (t, e, i, n) {
            var r, o, s = this, l = this.view, a = i.parent();
            r = 1 == l.rowCnt ? this.view.el : this.rowEls.eq(e.row), o = {
                className: "fc-more-popover",
                content: this.renderSegPopoverContent(t, n),
                parentEl: this.el,
                top: r.offset().top,
                autoHide: !0,
                viewportConstrain: l.opt("popoverViewportConstrain"),
                hide: function () {
                    s.segPopover.destroy(), s.segPopover = null, s.popoverSegs = null
                }
            }, l.opt("isRTL") ? o.right = a.offset().left + a.outerWidth() + 1 : o.left = a.offset().left - 1, this.segPopover = new j(o), this.segPopover.show()
        }, renderSegPopoverContent: function (e, i) {
            var n, r = this.view, o = r.opt("theme"), s = e.format(r.opt("dayPopoverFormat")), l = t('<div class="fc-header ' + r.widgetHeaderClass + '">' + '<span class="fc-close ' + (o ? "ui-icon ui-icon-closethick" : "fc-icon fc-icon-x") + '"></span>' + '<span class="fc-title">' + R(s) + "</span>" + '<div class="fc-clear"/>' + "</div>" + '<div class="fc-body ' + r.widgetContentClass + '">' + '<div class="fc-event-container"></div>' + "</div>"), a = l.find(".fc-event-container");
            for (i = this.renderSegs(i, !0), this.popoverSegs = i, n = 0; i.length > n; n++)i[n].cellDate = e, a.append(i[n].el);
            return l
        }, resliceDaySegs: function (e, i) {
            var n = t.map(e, function (t) {
                return t.event
            }), r = i.clone().stripTime(), o = r.clone().add(1, "days");
            return this.eventsToSegs(n, r, o)
        }, getMoreLinkText: function (t) {
            var e = this.view, i = e.opt("eventLimitText");
            return "function" == typeof i ? i(t) : "+" + t + " " + i
        }, getCellSegs: function (t, e) {
            for (var i, n = this.rowStructs[t.row].segMatrix, r = e || 0, o = []; n.length > r;)i = n[r][t.col], i && o.push(i), r++;
            return o
        }
    }), re.prototype = H(J.prototype), t.extend(re.prototype, {
        slotDuration: null,
        snapDuration: null,
        minTime: null,
        maxTime: null,
        dayEls: null,
        slatEls: null,
        slatTops: null,
        highlightEl: null,
        helperEl: null,
        render: function () {
            this.processOptions(), this.el.html(this.renderHtml()), this.dayEls = this.el.find(".fc-day"), this.slatEls = this.el.find(".fc-slats tr"), this.computeSlatTops(), J.prototype.render.call(this)
        },
        renderHtml: function () {
            return '<div class="fc-bg"><table>' + this.rowHtml("slotBg") + "</table>" + "</div>" + '<div class="fc-slats">' + "<table>" + this.slatRowHtml() + "</table>" + "</div>"
        },
        slotBgCellHtml: function (t, e, i) {
            return this.bgCellHtml(t, e, i)
        },
        slatRowHtml: function () {
            for (var t, i, n, r = this.view, o = r.calendar, s = r.opt("isRTL"), l = "", a = 0 === this.slotDuration.asMinutes() % 15, c = e.duration(+this.minTime); this.maxTime > c;)t = r.start.clone().time(c), i = t.minutes(), n = '<td class="fc-axis fc-time ' + r.widgetContentClass + '" ' + r.axisStyleAttr() + ">" + (a && i ? "" : "<span>" + R(o.formatDate(t, r.opt("axisFormat"))) + "</span>") + "</td>", l += "<tr " + (i ? 'class="fc-minor"' : "") + ">" + (s ? "" : n) + '<td class="' + r.widgetContentClass + '"/>' + (s ? n : "") + "</tr>", c.add(this.slotDuration);
            return l
        },
        processOptions: function () {
            var t = this.view, i = t.opt("slotDuration"), n = t.opt("snapDuration");
            i = e.duration(i), n = n ? e.duration(n) : i, this.slotDuration = i, this.snapDuration = n, this.cellDuration = n, this.minTime = e.duration(t.opt("minTime")), this.maxTime = e.duration(t.opt("maxTime"))
        },
        rangeToSegs: function (t, e) {
            var i, n, r, o, s, l = this.view, a = [];
            for (t = t.clone().stripZone(), e = e.clone().stripZone(), n = 0; l.colCnt > n; n++)r = l.cellToDate(0, n), o = r.clone().time(this.minTime), s = r.clone().time(this.maxTime), i = b(t, e, o, s), i && (i.col = n, a.push(i));
            return a
        },
        resize: function () {
            this.computeSlatTops(), this.updateSegVerticals()
        },
        buildCoords: function (i, n) {
            var r, o, s = this.view.colCnt, l = this.el.offset().top, a = e.duration(+this.minTime), c = null;
            for (this.dayEls.slice(0, s).each(function (e, i) {
                r = t(i), o = r.offset().left, c && (c[1] = o), c = [o], n[e] = c
            }), c[1] = o + r.outerWidth(), c = null; this.maxTime > a;)o = l + this.computeTimeTop(a), c && (c[1] = o), c = [o], i.push(c), a.add(this.snapDuration);
            c[1] = l + this.computeTimeTop(a)
        },
        getCellDate: function (t) {
            var e = this.view, i = e.calendar;
            return i.rezoneDate(e.cellToDate(0, t.col).time(this.minTime + this.snapDuration * t.row))
        },
        getCellDayEl: function (t) {
            return this.dayEls.eq(t.col)
        },
        computeDateTop: function (t, i) {
            return this.computeTimeTop(e.duration(t.clone().stripZone() - i.clone().stripTime()))
        },
        computeTimeTop: function (t) {
            var e, i, n, r, o = (t - this.minTime) / this.slotDuration;
            return o = Math.max(0, o), o = Math.min(this.slatEls.length, o), e = Math.floor(o), i = o - e, n = this.slatTops[e], i ? (r = this.slatTops[e + 1], n + (r - n) * i) : n
        },
        computeSlatTops: function () {
            var e, i = [];
            this.slatEls.each(function (n, r) {
                e = t(r).position().top, i.push(e)
            }), i.push(e + this.slatEls.last().outerHeight()), this.slatTops = i
        },
        renderDrag: function (t, e, i) {
            var n;
            return i ? (this.renderRangeHelper(t, e, i), n = this.view.opt("dragOpacity"), void 0 !== n && this.helperEl.css("opacity", n), !0) : (this.renderHighlight(t, e || this.view.calendar.getDefaultEventEnd(!1, t)), void 0)
        },
        destroyDrag: function () {
            this.destroyHelper(), this.destroyHighlight()
        },
        renderResize: function (t, e, i) {
            this.renderRangeHelper(t, e, i)
        },
        destroyResize: function () {
            this.destroyHelper()
        },
        renderHelper: function (e, i) {
            var n, r, o, s = this.renderEventTable([e]), l = s.tableEl, a = s.segs;
            for (n = 0; a.length > n; n++)r = a[n], i && i.col === r.col && (o = i.el, r.el.css({
                left: o.css("left"),
                right: o.css("right"),
                "margin-left": o.css("margin-left"),
                "margin-right": o.css("margin-right")
            }));
            this.helperEl = t('<div class="fc-helper-skeleton"/>').append(l).appendTo(this.el)
        },
        destroyHelper: function () {
            this.helperEl && (this.helperEl.remove(), this.helperEl = null)
        },
        renderSelection: function (t, e) {
            this.view.opt("selectHelper") ? this.renderRangeHelper(t, e) : this.renderHighlight(t, e)
        },
        destroySelection: function () {
            this.destroyHelper(), this.destroyHighlight()
        },
        renderHighlight: function (e, i) {
            this.highlightEl = t(this.highlightSkeletonHtml(e, i)).appendTo(this.el)
        },
        destroyHighlight: function () {
            this.highlightEl && (this.highlightEl.remove(), this.highlightEl = null)
        },
        highlightSkeletonHtml: function (t, e) {
            var i, n, r, o, s, l = this.view, a = this.rangeToSegs(t, e), c = "", d = 0;
            for (i = 0; a.length > i; i++)n = a[i], n.col > d && (c += '<td colspan="' + (n.col - d) + '"/>', d = n.col), r = l.cellToDate(0, d), o = this.computeDateTop(n.start, r), s = this.computeDateTop(n.end, r), c += '<td><div class="fc-highlight-container"><div class="fc-highlight" style="top:' + o + "px;bottom:-" + s + 'px"/>' + "</div>" + "</td>", d++;
            return l.colCnt > d && (c += '<td colspan="' + (l.colCnt - d) + '"/>'), c = this.bookendCells(c, "highlight"), '<div class="fc-highlight-skeleton"><table><tr>' + c + "</tr>" + "</table>" + "</div>"
        }
    }), t.extend(re.prototype, {
        segs: null, eventSkeletonEl: null, renderEvents: function (e) {
            var i = this.renderEventTable(e);
            this.eventSkeletonEl = t('<div class="fc-content-skeleton"/>').append(i.tableEl), this.el.append(this.eventSkeletonEl), this.segs = i.segs
        }, getSegs: function () {
            return this.segs || []
        }, destroyEvents: function () {
            J.prototype.destroyEvents.call(this), this.eventSkeletonEl && (this.eventSkeletonEl.remove(), this.eventSkeletonEl = null), this.segs = null
        }, renderEventTable: function (e) {
            var i, n, r, o, s, l, a = t("<table><tr/></table>"), c = a.find("tr"), d = this.eventsToSegs(e);
            for (d = this.renderSegs(d), i = this.groupSegCols(d), this.computeSegVerticals(d), o = 0; i.length > o; o++) {
                for (s = i[o], oe(s), l = t('<div class="fc-event-container"/>'), n = 0; s.length > n; n++)r = s[n], r.el.css(this.generateSegPositionCss(r)), 30 > r.bottom - r.top && r.el.addClass("fc-short"), l.append(r.el);
                c.append(t("<td/>").append(l))
            }
            return this.bookendCells(c, "eventSkeleton"), {tableEl: a, segs: d}
        }, updateSegVerticals: function () {
            var t, e = this.segs;
            if (e)for (this.computeSegVerticals(e), t = 0; e.length > t; t++)e[t].el.css(this.generateSegVerticalCss(e[t]))
        }, computeSegVerticals: function (t) {
            var e, i;
            for (e = 0; t.length > e; e++)i = t[e], i.top = this.computeDateTop(i.start, i.start), i.bottom = this.computeDateTop(i.end, i.start)
        }, renderSegHtml: function (t, e) {
            var i, n, r, o = this.view, s = t.event, l = o.isEventDraggable(s), a = !e && t.isEnd && o.isEventResizable(s), c = this.getSegClasses(t, l, a), d = this.getEventSkinCss(s);
            return c.unshift("fc-time-grid-event"), o.isMultiDayEvent(s) ? (t.isStart || t.isEnd) && (i = o.getEventTimeText(t.start, t.end), n = o.getEventTimeText(t.start, t.end, "LT"), r = o.getEventTimeText(t.start, null)) : (i = o.getEventTimeText(s), n = o.getEventTimeText(s, "LT"), r = o.getEventTimeText(s.start, null)), '<a class="' + c.join(" ") + '"' + (s.url ? ' href="' + R(s.url) + '"' : "") + (d ? ' style="' + d + '"' : "") + ">" + '<div class="fc-content">' + (i ? '<div class="fc-time" data-start="' + R(r) + '"' + ' data-full="' + R(n) + '"' + ">" + "<span>" + R(i) + "</span>" + "</div>" : "") + (s.title ? '<div class="fc-title">' + R(s.title) + "</div>" : "") + "</div>" + '<div class="fc-bg"/>' + (a ? '<div class="fc-resizer"/>' : "") + "</a>"
        }, generateSegPositionCss: function (t) {
            var e, i, n = this.view, r = n.opt("isRTL"), o = n.opt("slotEventOverlap"), s = t.backwardCoord, l = t.forwardCoord, a = this.generateSegVerticalCss(t);
            return o && (l = Math.min(1, s + 2 * (l - s))), r ? (e = 1 - l, i = s) : (e = s, i = 1 - l), a.zIndex = t.level + 1, a.left = 100 * e + "%", a.right = 100 * i + "%", o && t.forwardPressure && (a[r ? "marginLeft" : "marginRight"] = 20), a
        }, generateSegVerticalCss: function (t) {
            return {top: t.top, bottom: -t.bottom}
        }, groupSegCols: function (t) {
            var e, i = this.view, n = [];
            for (e = 0; i.colCnt > e; e++)n.push([]);
            for (e = 0; t.length > e; e++)n[t[e].col].push(t[e]);
            return n
        }
    }), fe.prototype = {
        calendar: null,
        coordMap: null,
        el: null,
        start: null,
        end: null,
        intervalStart: null,
        intervalEnd: null,
        rowCnt: null,
        colCnt: null,
        isSelected: !1,
        scrollerEl: null,
        scrollTop: null,
        widgetHeaderClass: null,
        widgetContentClass: null,
        highlightStateClass: null,
        documentMousedownProxy: null,
        documentDragStartProxy: null,
        init: function () {
            var e = this.opt("theme") ? "ui" : "fc";
            this.widgetHeaderClass = e + "-widget-header", this.widgetContentClass = e + "-widget-content", this.highlightStateClass = e + "-state-highlight", this.documentMousedownProxy = t.proxy(this, "documentMousedown"), this.documentDragStartProxy = t.proxy(this, "documentDragStart")
        },
        render: function () {
            this.updateSize(), this.trigger("viewRender", this, this, this.el), t(document).on("mousedown", this.documentMousedownProxy).on("dragstart", this.documentDragStartProxy)
        },
        destroy: function () {
            this.unselect(), this.trigger("viewDestroy", this, this, this.el), this.destroyEvents(), this.el.empty(), t(document).off("mousedown", this.documentMousedownProxy).off("dragstart", this.documentDragStartProxy)
        },
        incrementDate: function () {
        },
        updateSize: function (t) {
            t && this.recordScroll(), this.updateHeight(), this.updateWidth()
        },
        updateWidth: function () {
        },
        updateHeight: function () {
            var t = this.calendar;
            this.setHeight(t.getSuggestedViewHeight(), t.isHeightAuto())
        },
        setHeight: function () {
        },
        computeScrollerHeight: function (t) {
            var e, i = this.el.add(this.scrollerEl);
            return i.css({
                position: "relative",
                left: -1
            }), e = this.el.outerHeight() - this.scrollerEl.height(), i.css({position: "", left: ""}), t - e
        },
        recordScroll: function () {
            this.scrollerEl && (this.scrollTop = this.scrollerEl.scrollTop())
        },
        restoreScroll: function () {
            null !== this.scrollTop && this.scrollerEl.scrollTop(this.scrollTop)
        },
        renderEvents: function () {
            this.segEach(function (t) {
                this.trigger("eventAfterRender", t.event, t.event, t.el)
            }), this.trigger("eventAfterAllRender")
        },
        destroyEvents: function () {
            this.segEach(function (t) {
                this.trigger("eventDestroy", t.event, t.event, t.el)
            })
        },
        resolveEventEl: function (e, i) {
            var n = this.trigger("eventRender", e, e, i);
            return n === !1 ? i = null : n && n !== !0 && (i = t(n)), i
        },
        showEvent: function (t) {
            this.segEach(function (t) {
                t.el.css("visibility", "")
            }, t)
        },
        hideEvent: function (t) {
            this.segEach(function (t) {
                t.el.css("visibility", "hidden")
            }, t)
        },
        segEach: function (t, e) {
            var i, n = this.getSegs();
            for (i = 0; n.length > i; i++)e && n[i].event._id !== e._id || t.call(this, n[i])
        },
        getSegs: function () {
        },
        renderDrag: function () {
        },
        destroyDrag: function () {
        },
        documentDragStart: function (e) {
            var i, n = this, r = null;
            this.opt("droppable") && (i = new q(this.coordMap, {
                cellOver: function (t, e) {
                    r = e, n.renderDrag(e)
                }, cellOut: function () {
                    r = null, n.destroyDrag()
                }
            }), t(document).one("dragstop", function (t, e) {
                n.destroyDrag(), r && n.trigger("drop", t.target, r, t, e)
            }), i.startDrag(e))
        },
        select: function (t, e, i) {
            this.unselect(i), this.renderSelection(t, e), this.reportSelection(t, e, i)
        },
        renderSelection: function () {
        },
        reportSelection: function (t, e, i) {
            this.isSelected = !0, this.trigger("select", null, t, e, i)
        },
        unselect: function (t) {
            this.isSelected && (this.isSelected = !1, this.destroySelection(), this.trigger("unselect", null, t))
        },
        destroySelection: function () {
        },
        documentMousedown: function (e) {
            var i;
            this.isSelected && this.opt("unselectAuto") && E(e) && (i = this.opt("unselectCancel"), i && t(e.target).closest(i).length || this.unselect(e))
        }
    }, ge.prototype = H(fe.prototype), t.extend(ge.prototype, {
        dayGrid: null,
        dayNumbersVisible: !1,
        weekNumbersVisible: !1,
        weekNumberWidth: null,
        headRowEl: null,
        render: function (t, e, i) {
            this.rowCnt = t, this.colCnt = e, this.dayNumbersVisible = i, this.weekNumbersVisible = this.opt("weekNumbers"), this.dayGrid.numbersVisible = this.dayNumbersVisible || this.weekNumbersVisible, this.el.addClass("fc-basic-view").html(this.renderHtml()), this.headRowEl = this.el.find("thead .fc-row"), this.scrollerEl = this.el.find(".fc-day-grid-container"), this.dayGrid.coordMap.containerEl = this.scrollerEl, this.dayGrid.el = this.el.find(".fc-day-grid"), this.dayGrid.render(this.hasRigidRows()), fe.prototype.render.call(this)
        },
        destroy: function () {
            this.dayGrid.destroy(), fe.prototype.destroy.call(this)
        },
        renderHtml: function () {
            return '<table><thead><tr><td class="' + this.widgetHeaderClass + '">' + this.dayGrid.headHtml() + "</td>" + "</tr>" + "</thead>" + "<tbody>" + "<tr>" + '<td class="' + this.widgetContentClass + '">' + '<div class="fc-day-grid-container">' + '<div class="fc-day-grid"/>' + "</div>" + "</td>" + "</tr>" + "</tbody>" + "</table>"
        },
        headIntroHtml: function () {
            return this.weekNumbersVisible ? '<th class="fc-week-number ' + this.widgetHeaderClass + '" ' + this.weekNumberStyleAttr() + ">" + "<span>" + R(this.opt("weekNumberTitle")) + "</span>" + "</th>" : void 0
        },
        numberIntroHtml: function (t) {
            return this.weekNumbersVisible ? '<td class="fc-week-number" ' + this.weekNumberStyleAttr() + ">" + "<span>" + this.calendar.calculateWeekNumber(this.cellToDate(t, 0)) + "</span>" + "</td>" : void 0
        },
        dayIntroHtml: function () {
            return this.weekNumbersVisible ? '<td class="fc-week-number ' + this.widgetContentClass + '" ' + this.weekNumberStyleAttr() + "></td>" : void 0
        },
        introHtml: function () {
            return this.weekNumbersVisible ? '<td class="fc-week-number" ' + this.weekNumberStyleAttr() + "></td>" : void 0
        },
        numberCellHtml: function (t, e, i) {
            var n;
            return this.dayNumbersVisible ? (n = this.dayGrid.getDayClasses(i), n.unshift("fc-day-number"), '<td class="' + n.join(" ") + '" data-date="' + i.format() + '">' + i.date() + "</td>") : "<td/>"
        },
        weekNumberStyleAttr: function () {
            return null !== this.weekNumberWidth ? 'style="width:' + this.weekNumberWidth + 'px"' : ""
        },
        hasRigidRows: function () {
            var t = this.opt("eventLimit");
            return t && "number" != typeof t
        },
        updateWidth: function () {
            this.weekNumbersVisible && (this.weekNumberWidth = p(this.el.find(".fc-week-number")))
        },
        setHeight: function (t, e) {
            var i, n = this.opt("eventLimit");
            v(this.scrollerEl), u(this.headRowEl), this.dayGrid.destroySegPopover(), n && "number" == typeof n && this.dayGrid.limitRows(n), i = this.computeScrollerHeight(t), this.setGridHeight(i, e), n && "number" != typeof n && this.dayGrid.limitRows(n), !e && m(this.scrollerEl, i) && (h(this.headRowEl, w(this.scrollerEl)), i = this.computeScrollerHeight(t), this.scrollerEl.height(i), this.restoreScroll())
        },
        setGridHeight: function (t, e) {
            e ? g(this.dayGrid.rowEls) : f(this.dayGrid.rowEls, t, !0)
        },
        renderEvents: function (t) {
            this.dayGrid.renderEvents(t), this.updateHeight(), fe.prototype.renderEvents.call(this, t)
        },
        getSegs: function () {
            return this.dayGrid.getSegs()
        },
        destroyEvents: function () {
            fe.prototype.destroyEvents.call(this), this.recordScroll(), this.dayGrid.destroyEvents()
        },
        renderDrag: function (t, e, i) {
            return this.dayGrid.renderDrag(t, e, i)
        },
        destroyDrag: function () {
            this.dayGrid.destroyDrag()
        },
        renderSelection: function (t, e) {
            this.dayGrid.renderSelection(t, e)
        },
        destroySelection: function () {
            this.dayGrid.destroySelection()
        }
    }), r({fixedWeekCount: !0}), xe.month = pe, pe.prototype = H(ge.prototype), t.extend(pe.prototype, {
        name: "month",
        incrementDate: function (t, e) {
            return t.clone().stripTime().add(e, "months").startOf("month")
        },
        render: function (t) {
            var e;
            this.intervalStart = t.clone().stripTime().startOf("month"), this.intervalEnd = this.intervalStart.clone().add(1, "months"), this.start = this.intervalStart.clone(), this.start = this.skipHiddenDays(this.start), this.start.startOf("week"), this.start = this.skipHiddenDays(this.start), this.end = this.intervalEnd.clone(), this.end = this.skipHiddenDays(this.end, -1, !0), this.end.add((7 - this.end.weekday()) % 7, "days"), this.end = this.skipHiddenDays(this.end, -1, !0), e = Math.ceil(this.end.diff(this.start, "weeks", !0)), this.isFixedWeeks() && (this.end.add(6 - e, "weeks"), e = 6), this.title = this.calendar.formatDate(this.intervalStart, this.opt("titleFormat")), ge.prototype.render.call(this, e, this.getCellsPerWeek(), !0)
        },
        setGridHeight: function (t, e) {
            e = e || "variable" === this.opt("weekMode"), e && (t *= this.rowCnt / 6), f(this.dayGrid.rowEls, t, !e)
        },
        isFixedWeeks: function () {
            var t = this.opt("weekMode");
            return t ? "fixed" === t : this.opt("fixedWeekCount")
        }
    }), xe.basicWeek = me, me.prototype = H(ge.prototype), t.extend(me.prototype, {
        name: "basicWeek",
        incrementDate: function (t, e) {
            return t.clone().stripTime().add(e, "weeks").startOf("week")
        },
        render: function (t) {
            this.intervalStart = t.clone().stripTime().startOf("week"), this.intervalEnd = this.intervalStart.clone().add(1, "weeks"), this.start = this.skipHiddenDays(this.intervalStart), this.end = this.skipHiddenDays(this.intervalEnd, -1, !0), this.title = this.calendar.formatRange(this.start, this.end.clone().subtract(1), this.opt("titleFormat"), " Ξ²β‚¬β€ "), ge.prototype.render.call(this, 1, this.getCellsPerWeek(), !1)
        }
    }), xe.basicDay = ve, ve.prototype = H(ge.prototype), t.extend(ve.prototype, {
        name: "basicDay",
        incrementDate: function (t, e) {
            var i = t.clone().stripTime().add(e, "days");
            return i = this.skipHiddenDays(i, 0 > e ? -1 : 1)
        },
        render: function (t) {
            this.start = this.intervalStart = t.clone().stripTime(), this.end = this.intervalEnd = this.start.clone().add(1, "days"), this.title = this.calendar.formatDate(this.start, this.opt("titleFormat")), ge.prototype.render.call(this, 1, 1, !1)
        }
    }), r({
        allDaySlot: !0,
        allDayText: "all-day",
        scrollTime: "06:00:00",
        slotDuration: "00:30:00",
        axisFormat: ye,
        timeFormat: {agenda: we},
        minTime: "00:00:00",
        maxTime: "24:00:00",
        slotEventOverlap: !0
    });
    var Ye = 5;
    Ee.prototype = H(fe.prototype), t.extend(Ee.prototype, {
        timeGrid: null,
        dayGrid: null,
        axisWidth: null,
        noScrollRowEls: null,
        bottomRuleEl: null,
        bottomRuleHeight: null,
        render: function (e) {
            this.rowCnt = 1, this.colCnt = e, this.el.addClass("fc-agenda-view").html(this.renderHtml()), this.scrollerEl = this.el.find(".fc-time-grid-container"), this.timeGrid.coordMap.containerEl = this.scrollerEl, this.timeGrid.el = this.el.find(".fc-time-grid"), this.timeGrid.render(), this.bottomRuleEl = t('<hr class="' + this.widgetHeaderClass + '"/>').appendTo(this.timeGrid.el), this.dayGrid && (this.dayGrid.el = this.el.find(".fc-day-grid"), this.dayGrid.render(), this.dayGrid.bottomCoordPadding = this.dayGrid.el.next("hr").outerHeight()), this.noScrollRowEls = this.el.find(".fc-row:not(.fc-scroller *)"), fe.prototype.render.call(this), this.resetScroll()
        },
        destroy: function () {
            this.timeGrid.destroy(), this.dayGrid && this.dayGrid.destroy(), fe.prototype.destroy.call(this)
        },
        renderHtml: function () {
            return '<table><thead><tr><td class="' + this.widgetHeaderClass + '">' + this.timeGrid.headHtml() + "</td>" + "</tr>" + "</thead>" + "<tbody>" + "<tr>" + '<td class="' + this.widgetContentClass + '">' + (this.dayGrid ? '<div class="fc-day-grid"/><hr class="' + this.widgetHeaderClass + '"/>' : "") + '<div class="fc-time-grid-container">' + '<div class="fc-time-grid"/>' + "</div>" + "</td>" + "</tr>" + "</tbody>" + "</table>"
        },
        headIntroHtml: function () {
            var t, e, i, n;
            return this.opt("weekNumbers") ? (t = this.cellToDate(0, 0), e = this.calendar.calculateWeekNumber(t), i = this.opt("weekNumberTitle"), n = this.opt("isRTL") ? e + i : i + e, '<th class="fc-axis fc-week-number ' + this.widgetHeaderClass + '" ' + this.axisStyleAttr() + ">" + "<span>" + R(n) + "</span>" + "</th>") : '<th class="fc-axis ' + this.widgetHeaderClass + '" ' + this.axisStyleAttr() + "></th>"
        },
        dayIntroHtml: function () {
            return '<td class="fc-axis ' + this.widgetContentClass + '" ' + this.axisStyleAttr() + ">" + "<span>" + (this.opt("allDayHtml") || R(this.opt("allDayText"))) + "</span>" + "</td>"
        },
        slotBgIntroHtml: function () {
            return '<td class="fc-axis ' + this.widgetContentClass + '" ' + this.axisStyleAttr() + "></td>"
        },
        introHtml: function () {
            return '<td class="fc-axis" ' + this.axisStyleAttr() + "></td>"
        },
        axisStyleAttr: function () {
            return null !== this.axisWidth ? 'style="width:' + this.axisWidth + 'px"' : ""
        },
        updateSize: function (t) {
            t && this.timeGrid.resize(), fe.prototype.updateSize.call(this, t)
        },
        updateWidth: function () {
            this.axisWidth = p(this.el.find(".fc-axis"))
        },
        setHeight: function (t, e) {
            var i, n;
            null === this.bottomRuleHeight && (this.bottomRuleHeight = this.bottomRuleEl.outerHeight()), this.bottomRuleEl.hide(), this.scrollerEl.css("overflow", ""), v(this.scrollerEl), u(this.noScrollRowEls), this.dayGrid && (this.dayGrid.destroySegPopover(), i = this.opt("eventLimit"), i && "number" != typeof i && (i = Ye), i && this.dayGrid.limitRows(i)), e || (n = this.computeScrollerHeight(t), m(this.scrollerEl, n) ? (h(this.noScrollRowEls, w(this.scrollerEl)), n = this.computeScrollerHeight(t), this.scrollerEl.height(n), this.restoreScroll()) : (this.scrollerEl.height(n).css("overflow", "hidden"), this.bottomRuleEl.show()))
        },
        resetScroll: function () {
            function t() {
                i.scrollerEl.scrollTop(r)
            }

            var i = this, n = e.duration(this.opt("scrollTime")), r = this.timeGrid.computeTimeTop(n);
            r = Math.ceil(r), r && r++, t(), setTimeout(t, 0)
        },
        renderEvents: function (t) {
            var e, i, n = [], r = [], o = [];
            for (i = 0; t.length > i; i++)t[i].allDay ? n.push(t[i]) : r.push(t[i]);
            e = this.timeGrid.renderEvents(r), this.dayGrid && (o = this.dayGrid.renderEvents(n)), this.updateHeight(), fe.prototype.renderEvents.call(this, t)
        },
        getSegs: function () {
            return this.timeGrid.getSegs().concat(this.dayGrid ? this.dayGrid.getSegs() : [])
        },
        destroyEvents: function () {
            fe.prototype.destroyEvents.call(this), this.recordScroll(), this.timeGrid.destroyEvents(), this.dayGrid && this.dayGrid.destroyEvents()
        },
        renderDrag: function (t, e, i) {
            return t.hasTime() ? this.timeGrid.renderDrag(t, e, i) : this.dayGrid ? this.dayGrid.renderDrag(t, e, i) : void 0
        },
        destroyDrag: function () {
            this.timeGrid.destroyDrag(), this.dayGrid && this.dayGrid.destroyDrag()
        },
        renderSelection: function (t, e) {
            t.hasTime() || e.hasTime() ? this.timeGrid.renderSelection(t, e) : this.dayGrid && this.dayGrid.renderSelection(t, e)
        },
        destroySelection: function () {
            this.timeGrid.destroySelection(), this.dayGrid && this.dayGrid.destroySelection()
        }
    }), xe.agendaWeek = be, be.prototype = H(Ee.prototype), t.extend(be.prototype, {
        name: "agendaWeek",
        incrementDate: function (t, e) {
            return t.clone().stripTime().add(e, "weeks").startOf("week")
        },
        render: function (t) {
            this.intervalStart = t.clone().stripTime().startOf("week"), this.intervalEnd = this.intervalStart.clone().add(1, "weeks"), this.start = this.skipHiddenDays(this.intervalStart), this.end = this.skipHiddenDays(this.intervalEnd, -1, !0), this.title = this.calendar.formatRange(this.start, this.end.clone().subtract(1), this.opt("titleFormat"), " Ξ²β‚¬β€ "), Ee.prototype.render.call(this, this.getCellsPerWeek())
        }
    }), xe.agendaDay = Se, Se.prototype = H(Ee.prototype), t.extend(Se.prototype, {
        name: "agendaDay",
        incrementDate: function (t, e) {
            var i = t.clone().stripTime().add(e, "days");
            return i = this.skipHiddenDays(i, 0 > e ? -1 : 1)
        },
        render: function (t) {
            this.start = this.intervalStart = t.clone().stripTime(), this.end = this.intervalEnd = this.start.clone().add(1, "days"), this.title = this.calendar.formatDate(this.start, this.opt("titleFormat")), Ee.prototype.render.call(this, 1)
        }
    })
});
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (e) {
    function t(t, a, r, c) {
        var l = t.success, i = e.extend({}, t.data || {}, {singleevents: !0, "max-results": 9999});
        return e.extend({}, t, {
            url: t.url.replace(/\/basic$/, "/full") + "?alt=json-in-script&callback=?",
            dataType: "jsonp",
            data: i,
            timezoneParam: "ctz",
            startParam: "start-min",
            endParam: "start-max",
            success: function (t) {
                var a = [];
                t.feed.entry && e.each(t.feed.entry, function (t, n) {
                    var r;
                    e.each(n.link, function (e, t) {
                        "text/html" == t.type && (r = t.href, c && "local" != c && (r += (-1 == r.indexOf("?") ? "?" : "&") + "ctz=" + encodeURIComponent(c)))
                    }), a.push({
                        id: n.gCal$uid.value,
                        title: n.title.$t,
                        start: n.gd$when[0].startTime,
                        end: n.gd$when[0].endTime,
                        url: r,
                        location: n.gd$where[0].valueString,
                        description: n.content.$t
                    })
                });
                var r = [a].concat(Array.prototype.slice.call(arguments, 1)), i = n(l, this, r);
                return e.isArray(i) ? i : a
            }
        })
    }

    var a = e.fullCalendar, n = a.applyAll;
    a.sourceNormalizers.push(function (e) {
        ("gcal" == e.dataType || void 0 === e.dataType && (e.url || "").match(/^(http|https):\/\/www.google.com\/calendar\/feeds\//)) && (e.dataType = "gcal", void 0 === e.editable && (e.editable = !1))
    }), a.sourceFetchers.push(function (e, a, n, r) {
        return "gcal" == e.dataType ? t(e, a, n, r) : void 0
    }), a.gcalFeed = function (t, a) {
        return e.extend({}, a, {url: t, dataType: "gcal"})
    }
});

/*!
 * Dropzone.js 3.10.2
 * http://www.dropzonejs.com/
 */
!function () {
    function a(b) {
        var c = a.modules[b];
        if (!c)throw new Error('failed to require "' + b + '"');
        return "exports"in c || "function" != typeof c.definition || (c.client = c.component = !0, c.definition.call(this, c.exports = {}, c), delete c.definition), c.exports
    }

    a.modules = {}, a.register = function (b, c) {
        a.modules[b] = {definition: c}
    }, a.define = function (b, c) {
        a.modules[b] = {exports: c}
    }, a.register("component~emitter@1.1.2", function (a, b) {
        function c(a) {
            return a ? d(a) : void 0
        }

        function d(a) {
            for (var b in c.prototype)a[b] = c.prototype[b];
            return a
        }

        b.exports = c, c.prototype.on = c.prototype.addEventListener = function (a, b) {
            return this._callbacks = this._callbacks || {}, (this._callbacks[a] = this._callbacks[a] || []).push(b), this
        }, c.prototype.once = function (a, b) {
            function c() {
                d.off(a, c), b.apply(this, arguments)
            }

            var d = this;
            return this._callbacks = this._callbacks || {}, c.fn = b, this.on(a, c), this
        }, c.prototype.off = c.prototype.removeListener = c.prototype.removeAllListeners = c.prototype.removeEventListener = function (a, b) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length)return this._callbacks = {}, this;
            var c = this._callbacks[a];
            if (!c)return this;
            if (1 == arguments.length)return delete this._callbacks[a], this;
            for (var d, e = 0; e < c.length; e++)if (d = c[e], d === b || d.fn === b) {
                c.splice(e, 1);
                break
            }
            return this
        }, c.prototype.emit = function (a) {
            this._callbacks = this._callbacks || {};
            var b = [].slice.call(arguments, 1), c = this._callbacks[a];
            if (c) {
                c = c.slice(0);
                for (var d = 0, e = c.length; e > d; ++d)c[d].apply(this, b)
            }
            return this
        }, c.prototype.listeners = function (a) {
            return this._callbacks = this._callbacks || {}, this._callbacks[a] || []
        }, c.prototype.hasListeners = function (a) {
            return !!this.listeners(a).length
        }
    }), a.register("dropzone", function (b, c) {
        c.exports = a("dropzone/lib/dropzone.js")
    }), a.register("dropzone/lib/dropzone.js", function (b, c) {
        (function () {
            var b, d, e, f, g, h, i, j, k = {}.hasOwnProperty, l = function (a, b) {
                function c() {
                    this.constructor = a
                }

                for (var d in b)k.call(b, d) && (a[d] = b[d]);
                return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
            }, m = [].slice;
            d = "undefined" != typeof Emitter && null !== Emitter ? Emitter : a("component~emitter@1.1.2"), i = function () {
            }, b = function (a) {
                function b(a, d) {
                    var e, f, g;
                    if (this.element = a, this.version = b.version, this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, ""), this.clickableElements = [], this.listeners = [], this.files = [], "string" == typeof this.element && (this.element = document.querySelector(this.element)), !this.element || null == this.element.nodeType)throw new Error("Invalid dropzone element.");
                    if (this.element.dropzone)throw new Error("Dropzone already attached.");
                    if (b.instances.push(this), this.element.dropzone = this, e = null != (g = b.optionsForElement(this.element)) ? g : {}, this.options = c({}, this.defaultOptions, e, null != d ? d : {}), this.options.forceFallback || !b.isBrowserSupported())return this.options.fallback.call(this);
                    if (null == this.options.url && (this.options.url = this.element.getAttribute("action")), !this.options.url)throw new Error("No URL provided.");
                    if (this.options.acceptedFiles && this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
                    this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, delete this.options.acceptedMimeTypes), this.options.method = this.options.method.toUpperCase(), (f = this.getExistingFallback()) && f.parentNode && f.parentNode.removeChild(f), this.options.previewsContainer !== !1 && (this.previewsContainer = this.options.previewsContainer ? b.getElement(this.options.previewsContainer, "previewsContainer") : this.element), this.options.clickable && (this.clickableElements = this.options.clickable === !0 ? [this.element] : b.getElements(this.options.clickable, "clickable")), this.init()
                }

                var c;
                return l(b, a), b.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached"], b.prototype.defaultOptions = {
                    url: null,
                    method: "post",
                    withCredentials: !1,
                    parallelUploads: 2,
                    uploadMultiple: !1,
                    maxFilesize: 256,
                    paramName: "file",
                    createImageThumbnails: !0,
                    maxThumbnailFilesize: 10,
                    thumbnailWidth: 100,
                    thumbnailHeight: 100,
                    maxFiles: null,
                    params: {},
                    clickable: !0,
                    ignoreHiddenFiles: !0,
                    acceptedFiles: null,
                    acceptedMimeTypes: null,
                    autoProcessQueue: !0,
                    autoQueue: !0,
                    addRemoveLinks: !1,
                    previewsContainer: null,
                    dictDefaultMessage: "Drop files here to upload",
                    dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
                    dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
                    dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                    dictInvalidFileType: "You can't upload files of this type.",
                    dictResponseError: "Server responded with {{statusCode}} code.",
                    dictCancelUpload: "Cancel upload",
                    dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
                    dictRemoveFile: "Remove file",
                    dictRemoveFileConfirmation: null,
                    dictMaxFilesExceeded: "You can not upload any more files.",
                    accept: function (a, b) {
                        return b()
                    },
                    init: function () {
                        return i
                    },
                    forceFallback: !1,
                    fallback: function () {
                        var a, c, d, e, f, g;
                        for (this.element.className = "" + this.element.className + " dz-browser-not-supported", g = this.element.getElementsByTagName("div"), e = 0, f = g.length; f > e; e++)a = g[e], /(^| )dz-message($| )/.test(a.className) && (c = a, a.className = "dz-message");
                        return c || (c = b.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(c)), d = c.getElementsByTagName("span")[0], d && (d.textContent = this.options.dictFallbackMessage), this.element.appendChild(this.getFallbackForm())
                    },
                    resize: function (a) {
                        var b, c, d;
                        return b = {
                            srcX: 0,
                            srcY: 0,
                            srcWidth: a.width,
                            srcHeight: a.height
                        }, c = a.width / a.height, b.optWidth = this.options.thumbnailWidth, b.optHeight = this.options.thumbnailHeight, null == b.optWidth && null == b.optHeight ? (b.optWidth = b.srcWidth, b.optHeight = b.srcHeight) : null == b.optWidth ? b.optWidth = c * b.optHeight : null == b.optHeight && (b.optHeight = 1 / c * b.optWidth), d = b.optWidth / b.optHeight, a.height < b.optHeight || a.width < b.optWidth ? (b.trgHeight = b.srcHeight, b.trgWidth = b.srcWidth) : c > d ? (b.srcHeight = a.height, b.srcWidth = b.srcHeight * d) : (b.srcWidth = a.width, b.srcHeight = b.srcWidth / d), b.srcX = (a.width - b.srcWidth) / 2, b.srcY = (a.height - b.srcHeight) / 2, b
                    },
                    drop: function () {
                        return this.element.classList.remove("dz-drag-hover")
                    },
                    dragstart: i,
                    dragend: function () {
                        return this.element.classList.remove("dz-drag-hover")
                    },
                    dragenter: function () {
                        return this.element.classList.add("dz-drag-hover")
                    },
                    dragover: function () {
                        return this.element.classList.add("dz-drag-hover")
                    },
                    dragleave: function () {
                        return this.element.classList.remove("dz-drag-hover")
                    },
                    paste: i,
                    reset: function () {
                        return this.element.classList.remove("dz-started")
                    },
                    addedfile: function (a) {
                        var c, d, e, f, g, h, i, j, k, l, m, n, o;
                        if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer) {
                            for (a.previewElement = b.createElement(this.options.previewTemplate.trim()), a.previewTemplate = a.previewElement, this.previewsContainer.appendChild(a.previewElement), l = a.previewElement.querySelectorAll("[data-dz-name]"), f = 0, i = l.length; i > f; f++)c = l[f], c.textContent = a.name;
                            for (m = a.previewElement.querySelectorAll("[data-dz-size]"), g = 0, j = m.length; j > g; g++)c = m[g], c.innerHTML = this.filesize(a.size);
                            for (this.options.addRemoveLinks && (a._removeLink = b.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), a.previewElement.appendChild(a._removeLink)), d = function (c) {
                                return function (d) {
                                    return d.preventDefault(), d.stopPropagation(), a.status === b.UPLOADING ? b.confirm(c.options.dictCancelUploadConfirmation, function () {
                                        return c.removeFile(a)
                                    }) : c.options.dictRemoveFileConfirmation ? b.confirm(c.options.dictRemoveFileConfirmation, function () {
                                        return c.removeFile(a)
                                    }) : c.removeFile(a)
                                }
                            }(this), n = a.previewElement.querySelectorAll("[data-dz-remove]"), o = [], h = 0, k = n.length; k > h; h++)e = n[h], o.push(e.addEventListener("click", d));
                            return o
                        }
                    },
                    removedfile: function (a) {
                        var b;
                        return a.previewElement && null != (b = a.previewElement) && b.parentNode.removeChild(a.previewElement), this._updateMaxFilesReachedClass()
                    },
                    thumbnail: function (a, b) {
                        var c, d, e, f, g;
                        if (a.previewElement) {
                            for (a.previewElement.classList.remove("dz-file-preview"), a.previewElement.classList.add("dz-image-preview"), f = a.previewElement.querySelectorAll("[data-dz-thumbnail]"), g = [], d = 0, e = f.length; e > d; d++)c = f[d], c.alt = a.name, g.push(c.src = b);
                            return g
                        }
                    },
                    error: function (a, b) {
                        var c, d, e, f, g;
                        if (a.previewElement) {
                            for (a.previewElement.classList.add("dz-error"), "String" != typeof b && b.error && (b = b.error), f = a.previewElement.querySelectorAll("[data-dz-errormessage]"), g = [], d = 0, e = f.length; e > d; d++)c = f[d], g.push(c.textContent = b);
                            return g
                        }
                    },
                    errormultiple: i,
                    processing: function (a) {
                        return a.previewElement && (a.previewElement.classList.add("dz-processing"), a._removeLink) ? a._removeLink.textContent = this.options.dictCancelUpload : void 0
                    },
                    processingmultiple: i,
                    uploadprogress: function (a, b) {
                        var c, d, e, f, g;
                        if (a.previewElement) {
                            for (f = a.previewElement.querySelectorAll("[data-dz-uploadprogress]"), g = [], d = 0, e = f.length; e > d; d++)c = f[d], g.push(c.style.width = "" + b + "%");
                            return g
                        }
                    },
                    totaluploadprogress: i,
                    sending: i,
                    sendingmultiple: i,
                    success: function (a) {
                        return a.previewElement ? a.previewElement.classList.add("dz-success") : void 0
                    },
                    successmultiple: i,
                    canceled: function (a) {
                        return this.emit("error", a, "Upload canceled.")
                    },
                    canceledmultiple: i,
                    complete: function (a) {
                        return a._removeLink ? a._removeLink.textContent = this.options.dictRemoveFile : void 0
                    },
                    completemultiple: i,
                    maxfilesexceeded: i,
                    maxfilesreached: i,
                    previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-details">\n    <div class="dz-filename"><span data-dz-name></span></div>\n    <div class="dz-size" data-dz-size></div>\n    <img data-dz-thumbnail />\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-success-mark"><span>✔</span></div>\n  <div class="dz-error-mark"><span>✘</span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n</div>'
                }, c = function () {
                    var a, b, c, d, e, f, g;
                    for (d = arguments[0], c = 2 <= arguments.length ? m.call(arguments, 1) : [], f = 0, g = c.length; g > f; f++) {
                        b = c[f];
                        for (a in b)e = b[a], d[a] = e
                    }
                    return d
                }, b.prototype.getAcceptedFiles = function () {
                    var a, b, c, d, e;
                    for (d = this.files, e = [], b = 0, c = d.length; c > b; b++)a = d[b], a.accepted && e.push(a);
                    return e
                }, b.prototype.getRejectedFiles = function () {
                    var a, b, c, d, e;
                    for (d = this.files, e = [], b = 0, c = d.length; c > b; b++)a = d[b], a.accepted || e.push(a);
                    return e
                }, b.prototype.getFilesWithStatus = function (a) {
                    var b, c, d, e, f;
                    for (e = this.files, f = [], c = 0, d = e.length; d > c; c++)b = e[c], b.status === a && f.push(b);
                    return f
                }, b.prototype.getQueuedFiles = function () {
                    return this.getFilesWithStatus(b.QUEUED)
                }, b.prototype.getUploadingFiles = function () {
                    return this.getFilesWithStatus(b.UPLOADING)
                }, b.prototype.getActiveFiles = function () {
                    var a, c, d, e, f;
                    for (e = this.files, f = [], c = 0, d = e.length; d > c; c++)a = e[c], (a.status === b.UPLOADING || a.status === b.QUEUED) && f.push(a);
                    return f
                }, b.prototype.init = function () {
                    var a, c, d, e, f, g, h;
                    for ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(b.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), this.clickableElements.length && (d = function (a) {
                        return function () {
                            return a.hiddenFileInput && document.body.removeChild(a.hiddenFileInput), a.hiddenFileInput = document.createElement("input"), a.hiddenFileInput.setAttribute("type", "file"), (null == a.options.maxFiles || a.options.maxFiles > 1) && a.hiddenFileInput.setAttribute("multiple", "multiple"), a.hiddenFileInput.className = "dz-hidden-input", null != a.options.acceptedFiles && a.hiddenFileInput.setAttribute("accept", a.options.acceptedFiles), a.hiddenFileInput.style.visibility = "hidden", a.hiddenFileInput.style.position = "absolute", a.hiddenFileInput.style.top = "0", a.hiddenFileInput.style.left = "0", a.hiddenFileInput.style.height = "0", a.hiddenFileInput.style.width = "0", document.body.appendChild(a.hiddenFileInput), a.hiddenFileInput.addEventListener("change", function () {
                                var b, c, e, f;
                                if (c = a.hiddenFileInput.files, c.length)for (e = 0, f = c.length; f > e; e++)b = c[e], a.addFile(b);
                                return d()
                            })
                        }
                    }(this))(), this.URL = null != (g = window.URL) ? g : window.webkitURL, h = this.events, e = 0, f = h.length; f > e; e++)a = h[e], this.on(a, this.options[a]);
                    return this.on("uploadprogress", function (a) {
                        return function () {
                            return a.updateTotalUploadProgress()
                        }
                    }(this)), this.on("removedfile", function (a) {
                        return function () {
                            return a.updateTotalUploadProgress()
                        }
                    }(this)), this.on("canceled", function (a) {
                        return function (b) {
                            return a.emit("complete", b)
                        }
                    }(this)), this.on("complete", function (a) {
                        return function () {
                            return 0 === a.getUploadingFiles().length && 0 === a.getQueuedFiles().length ? setTimeout(function () {
                                return a.emit("queuecomplete")
                            }, 0) : void 0
                        }
                    }(this)), c = function (a) {
                        return a.stopPropagation(), a.preventDefault ? a.preventDefault() : a.returnValue = !1
                    }, this.listeners = [{
                        element: this.element, events: {
                            dragstart: function (a) {
                                return function (b) {
                                    return a.emit("dragstart", b)
                                }
                            }(this), dragenter: function (a) {
                                return function (b) {
                                    return c(b), a.emit("dragenter", b)
                                }
                            }(this), dragover: function (a) {
                                return function (b) {
                                    var d;
                                    try {
                                        d = b.dataTransfer.effectAllowed
                                    } catch (e) {
                                    }
                                    return b.dataTransfer.dropEffect = "move" === d || "linkMove" === d ? "move" : "copy", c(b), a.emit("dragover", b)
                                }
                            }(this), dragleave: function (a) {
                                return function (b) {
                                    return a.emit("dragleave", b)
                                }
                            }(this), drop: function (a) {
                                return function (b) {
                                    return c(b), a.drop(b)
                                }
                            }(this), dragend: function (a) {
                                return function (b) {
                                    return a.emit("dragend", b)
                                }
                            }(this)
                        }
                    }], this.clickableElements.forEach(function (a) {
                        return function (c) {
                            return a.listeners.push({
                                element: c, events: {
                                    click: function (d) {
                                        return c !== a.element || d.target === a.element || b.elementInside(d.target, a.element.querySelector(".dz-message")) ? a.hiddenFileInput.click() : void 0
                                    }
                                }
                            })
                        }
                    }(this)), this.enable(), this.options.init.call(this)
                }, b.prototype.destroy = function () {
                    var a;
                    return this.disable(), this.removeAllFiles(!0), (null != (a = this.hiddenFileInput) ? a.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, b.instances.splice(b.instances.indexOf(this), 1)
                }, b.prototype.updateTotalUploadProgress = function () {
                    var a, b, c, d, e, f, g, h;
                    if (d = 0, c = 0, a = this.getActiveFiles(), a.length) {
                        for (h = this.getActiveFiles(), f = 0, g = h.length; g > f; f++)b = h[f], d += b.upload.bytesSent, c += b.upload.total;
                        e = 100 * d / c
                    } else e = 100;
                    return this.emit("totaluploadprogress", e, c, d)
                }, b.prototype._getParamName = function (a) {
                    return "function" == typeof this.options.paramName ? this.options.paramName(a) : "" + this.options.paramName + (this.options.uploadMultiple ? "[" + a + "]" : "")
                }, b.prototype.getFallbackForm = function () {
                    var a, c, d, e;
                    return (a = this.getExistingFallback()) ? a : (d = '<div class="dz-fallback">', this.options.dictFallbackText && (d += "<p>" + this.options.dictFallbackText + "</p>"), d += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>', c = b.createElement(d), "FORM" !== this.element.tagName ? (e = b.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>'), e.appendChild(c)) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != e ? e : c)
                }, b.prototype.getExistingFallback = function () {
                    var a, b, c, d, e, f;
                    for (b = function (a) {
                        var b, c, d;
                        for (c = 0, d = a.length; d > c; c++)if (b = a[c], /(^| )fallback($| )/.test(b.className))return b
                    }, f = ["div", "form"], d = 0, e = f.length; e > d; d++)if (c = f[d], a = b(this.element.getElementsByTagName(c)))return a
                }, b.prototype.setupEventListeners = function () {
                    var a, b, c, d, e, f, g;
                    for (f = this.listeners, g = [], d = 0, e = f.length; e > d; d++)a = f[d], g.push(function () {
                        var d, e;
                        d = a.events, e = [];
                        for (b in d)c = d[b], e.push(a.element.addEventListener(b, c, !1));
                        return e
                    }());
                    return g
                }, b.prototype.removeEventListeners = function () {
                    var a, b, c, d, e, f, g;
                    for (f = this.listeners, g = [], d = 0, e = f.length; e > d; d++)a = f[d], g.push(function () {
                        var d, e;
                        d = a.events, e = [];
                        for (b in d)c = d[b], e.push(a.element.removeEventListener(b, c, !1));
                        return e
                    }());
                    return g
                }, b.prototype.disable = function () {
                    var a, b, c, d, e;
                    for (this.clickableElements.forEach(function (a) {
                        return a.classList.remove("dz-clickable")
                    }), this.removeEventListeners(), d = this.files, e = [], b = 0, c = d.length; c > b; b++)a = d[b], e.push(this.cancelUpload(a));
                    return e
                }, b.prototype.enable = function () {
                    return this.clickableElements.forEach(function (a) {
                        return a.classList.add("dz-clickable")
                    }), this.setupEventListeners()
                }, b.prototype.filesize = function (a) {
                    var b;
                    return a >= 109951162777.6 ? (a /= 109951162777.6, b = "TiB") : a >= 107374182.4 ? (a /= 107374182.4, b = "GiB") : a >= 104857.6 ? (a /= 104857.6, b = "MiB") : a >= 102.4 ? (a /= 102.4, b = "KiB") : (a = 10 * a, b = "b"), "<strong>" + Math.round(a) / 10 + "</strong> " + b
                }, b.prototype._updateMaxFilesReachedClass = function () {
                    return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached")
                }, b.prototype.drop = function (a) {
                    var b, c;
                    a.dataTransfer && (this.emit("drop", a), b = a.dataTransfer.files, b.length && (c = a.dataTransfer.items, c && c.length && null != c[0].webkitGetAsEntry ? this._addFilesFromItems(c) : this.handleFiles(b)))
                }, b.prototype.paste = function (a) {
                    var b, c;
                    if (null != (null != a && null != (c = a.clipboardData) ? c.items : void 0))return this.emit("paste", a), b = a.clipboardData.items, b.length ? this._addFilesFromItems(b) : void 0
                }, b.prototype.handleFiles = function (a) {
                    var b, c, d, e;
                    for (e = [], c = 0, d = a.length; d > c; c++)b = a[c], e.push(this.addFile(b));
                    return e
                }, b.prototype._addFilesFromItems = function (a) {
                    var b, c, d, e, f;
                    for (f = [], d = 0, e = a.length; e > d; d++)c = a[d], f.push(null != c.webkitGetAsEntry && (b = c.webkitGetAsEntry()) ? b.isFile ? this.addFile(c.getAsFile()) : b.isDirectory ? this._addFilesFromDirectory(b, b.name) : void 0 : null != c.getAsFile ? null == c.kind || "file" === c.kind ? this.addFile(c.getAsFile()) : void 0 : void 0);
                    return f
                }, b.prototype._addFilesFromDirectory = function (a, b) {
                    var c, d;
                    return c = a.createReader(), d = function (a) {
                        return function (c) {
                            var d, e, f;
                            for (e = 0, f = c.length; f > e; e++)d = c[e], d.isFile ? d.file(function (c) {
                                return a.options.ignoreHiddenFiles && "." === c.name.substring(0, 1) ? void 0 : (c.fullPath = "" + b + "/" + c.name, a.addFile(c))
                            }) : d.isDirectory && a._addFilesFromDirectory(d, "" + b + "/" + d.name)
                        }
                    }(this), c.readEntries(d, function (a) {
                        return "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log(a) : void 0
                    })
                }, b.prototype.accept = function (a, c) {
                    return a.size > 1024 * this.options.maxFilesize * 1024 ? c(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(a.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : b.isValidFile(a, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (c(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", a)) : this.options.accept.call(this, a, c) : c(this.options.dictInvalidFileType)
                }, b.prototype.addFile = function (a) {
                    return a.upload = {
                        progress: 0,
                        total: a.size,
                        bytesSent: 0
                    }, this.files.push(a), a.status = b.ADDED, this.emit("addedfile", a), this._enqueueThumbnail(a), this.accept(a, function (b) {
                        return function (c) {
                            return c ? (a.accepted = !1, b._errorProcessing([a], c)) : (a.accepted = !0, b.options.autoQueue && b.enqueueFile(a)), b._updateMaxFilesReachedClass()
                        }
                    }(this))
                }, b.prototype.enqueueFiles = function (a) {
                    var b, c, d;
                    for (c = 0, d = a.length; d > c; c++)b = a[c], this.enqueueFile(b);
                    return null
                }, b.prototype.enqueueFile = function (a) {
                    if (a.status !== b.ADDED || a.accepted !== !0)throw new Error("This file can't be queued because it has already been processed or was rejected.");
                    return a.status = b.QUEUED, this.options.autoProcessQueue ? setTimeout(function (a) {
                        return function () {
                            return a.processQueue()
                        }
                    }(this), 0) : void 0
                }, b.prototype._thumbnailQueue = [], b.prototype._processingThumbnail = !1, b.prototype._enqueueThumbnail = function (a) {
                    return this.options.createImageThumbnails && a.type.match(/image.*/) && a.size <= 1024 * this.options.maxThumbnailFilesize * 1024 ? (this._thumbnailQueue.push(a), setTimeout(function (a) {
                        return function () {
                            return a._processThumbnailQueue()
                        }
                    }(this), 0)) : void 0
                }, b.prototype._processThumbnailQueue = function () {
                    return this._processingThumbnail || 0 === this._thumbnailQueue.length ? void 0 : (this._processingThumbnail = !0, this.createThumbnail(this._thumbnailQueue.shift(), function (a) {
                        return function () {
                            return a._processingThumbnail = !1, a._processThumbnailQueue()
                        }
                    }(this)))
                }, b.prototype.removeFile = function (a) {
                    return a.status === b.UPLOADING && this.cancelUpload(a), this.files = j(this.files, a), this.emit("removedfile", a), 0 === this.files.length ? this.emit("reset") : void 0
                }, b.prototype.removeAllFiles = function (a) {
                    var c, d, e, f;
                    for (null == a && (a = !1), f = this.files.slice(), d = 0, e = f.length; e > d; d++)c = f[d], (c.status !== b.UPLOADING || a) && this.removeFile(c);
                    return null
                }, b.prototype.createThumbnail = function (a, b) {
                    var c;
                    return c = new FileReader, c.onload = function (d) {
                        return function () {
                            var e;
                            return e = document.createElement("img"), e.onload = function () {
                                var c, f, g, i, j, k, l, m;
                                return a.width = e.width, a.height = e.height, g = d.options.resize.call(d, a), null == g.trgWidth && (g.trgWidth = g.optWidth), null == g.trgHeight && (g.trgHeight = g.optHeight), c = document.createElement("canvas"), f = c.getContext("2d"), c.width = g.trgWidth, c.height = g.trgHeight, h(f, e, null != (j = g.srcX) ? j : 0, null != (k = g.srcY) ? k : 0, g.srcWidth, g.srcHeight, null != (l = g.trgX) ? l : 0, null != (m = g.trgY) ? m : 0, g.trgWidth, g.trgHeight), i = c.toDataURL("image/png"), d.emit("thumbnail", a, i), null != b ? b() : void 0
                            }, e.src = c.result
                        }
                    }(this), c.readAsDataURL(a)
                }, b.prototype.processQueue = function () {
                    var a, b, c, d;
                    if (b = this.options.parallelUploads, c = this.getUploadingFiles().length, a = c, !(c >= b) && (d = this.getQueuedFiles(), d.length > 0)) {
                        if (this.options.uploadMultiple)return this.processFiles(d.slice(0, b - c));
                        for (; b > a;) {
                            if (!d.length)return;
                            this.processFile(d.shift()), a++
                        }
                    }
                }, b.prototype.processFile = function (a) {
                    return this.processFiles([a])
                }, b.prototype.processFiles = function (a) {
                    var c, d, e;
                    for (d = 0, e = a.length; e > d; d++)c = a[d], c.processing = !0, c.status = b.UPLOADING, this.emit("processing", c);
                    return this.options.uploadMultiple && this.emit("processingmultiple", a), this.uploadFiles(a)
                }, b.prototype._getFilesWithXhr = function (a) {
                    var b, c;
                    return c = function () {
                        var c, d, e, f;
                        for (e = this.files, f = [], c = 0, d = e.length; d > c; c++)b = e[c], b.xhr === a && f.push(b);
                        return f
                    }.call(this)
                }, b.prototype.cancelUpload = function (a) {
                    var c, d, e, f, g, h, i;
                    if (a.status === b.UPLOADING) {
                        for (d = this._getFilesWithXhr(a.xhr), e = 0, g = d.length; g > e; e++)c = d[e], c.status = b.CANCELED;
                        for (a.xhr.abort(), f = 0, h = d.length; h > f; f++)c = d[f], this.emit("canceled", c);
                        this.options.uploadMultiple && this.emit("canceledmultiple", d)
                    } else((i = a.status) === b.ADDED || i === b.QUEUED) && (a.status = b.CANCELED, this.emit("canceled", a), this.options.uploadMultiple && this.emit("canceledmultiple", [a]));
                    return this.options.autoProcessQueue ? this.processQueue() : void 0
                }, b.prototype.uploadFile = function (a) {
                    return this.uploadFiles([a])
                }, b.prototype.uploadFiles = function (a) {
                    var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I;
                    for (t = new XMLHttpRequest, u = 0, y = a.length; y > u; u++)d = a[u], d.xhr = t;
                    t.open(this.options.method, this.options.url, !0), t.withCredentials = !!this.options.withCredentials, q = null, f = function (b) {
                        return function () {
                            var c, e, f;
                            for (f = [], c = 0, e = a.length; e > c; c++)d = a[c], f.push(b._errorProcessing(a, q || b.options.dictResponseError.replace("{{statusCode}}", t.status), t));
                            return f
                        }
                    }(this), r = function (b) {
                        return function (c) {
                            var e, f, g, h, i, j, k, l, m;
                            if (null != c)for (f = 100 * c.loaded / c.total, g = 0, j = a.length; j > g; g++)d = a[g], d.upload = {
                                progress: f,
                                total: c.total,
                                bytesSent: c.loaded
                            }; else {
                                for (e = !0, f = 100, h = 0, k = a.length; k > h; h++)d = a[h], (100 !== d.upload.progress || d.upload.bytesSent !== d.upload.total) && (e = !1), d.upload.progress = f, d.upload.bytesSent = d.upload.total;
                                if (e)return
                            }
                            for (m = [], i = 0, l = a.length; l > i; i++)d = a[i], m.push(b.emit("uploadprogress", d, f, d.upload.bytesSent));
                            return m
                        }
                    }(this), t.onload = function (c) {
                        return function (d) {
                            var e;
                            if (a[0].status !== b.CANCELED && 4 === t.readyState) {
                                if (q = t.responseText, t.getResponseHeader("content-type") && ~t.getResponseHeader("content-type").indexOf("application/json"))try {
                                    q = JSON.parse(q)
                                } catch (g) {
                                    d = g, q = "Invalid JSON response from server."
                                }
                                return r(), 200 <= (e = t.status) && 300 > e ? c._finished(a, q, d) : f()
                            }
                        }
                    }(this), t.onerror = function () {
                        return function () {
                            return a[0].status !== b.CANCELED ? f() : void 0
                        }
                    }(this), p = null != (D = t.upload) ? D : t, p.onprogress = r, i = {
                        Accept: "application/json",
                        "Cache-Control": "no-cache",
                        "X-Requested-With": "XMLHttpRequest"
                    }, this.options.headers && c(i, this.options.headers);
                    for (g in i)h = i[g], t.setRequestHeader(g, h);
                    if (e = new FormData, this.options.params) {
                        E = this.options.params;
                        for (n in E)s = E[n], e.append(n, s)
                    }
                    for (v = 0, z = a.length; z > v; v++)d = a[v], this.emit("sending", d, t, e);
                    if (this.options.uploadMultiple && this.emit("sendingmultiple", a, t, e), "FORM" === this.element.tagName)for (F = this.element.querySelectorAll("input, textarea, select, button"), w = 0, A = F.length; A > w; w++)if (k = F[w], l = k.getAttribute("name"), m = k.getAttribute("type"), "SELECT" === k.tagName && k.hasAttribute("multiple"))for (G = k.options, x = 0, B = G.length; B > x; x++)o = G[x], o.selected && e.append(l, o.value); else(!m || "checkbox" !== (H = m.toLowerCase()) && "radio" !== H || k.checked) && e.append(l, k.value);
                    for (j = C = 0, I = a.length - 1; I >= 0 ? I >= C : C >= I; j = I >= 0 ? ++C : --C)e.append(this._getParamName(j), a[j], a[j].name);
                    return t.send(e)
                }, b.prototype._finished = function (a, c, d) {
                    var e, f, g;
                    for (f = 0, g = a.length; g > f; f++)e = a[f], e.status = b.SUCCESS, this.emit("success", e, c, d), this.emit("complete", e);
                    return this.options.uploadMultiple && (this.emit("successmultiple", a, c, d), this.emit("completemultiple", a)), this.options.autoProcessQueue ? this.processQueue() : void 0
                }, b.prototype._errorProcessing = function (a, c, d) {
                    var e, f, g;
                    for (f = 0, g = a.length; g > f; f++)e = a[f], e.status = b.ERROR, this.emit("error", e, c, d), this.emit("complete", e);
                    return this.options.uploadMultiple && (this.emit("errormultiple", a, c, d), this.emit("completemultiple", a)), this.options.autoProcessQueue ? this.processQueue() : void 0
                }, b
            }(d), b.version = "3.10.2", b.options = {}, b.optionsForElement = function (a) {
                return a.getAttribute("id") ? b.options[e(a.getAttribute("id"))] : void 0
            }, b.instances = [], b.forElement = function (a) {
                if ("string" == typeof a && (a = document.querySelector(a)), null == (null != a ? a.dropzone : void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
                return a.dropzone
            }, b.autoDiscover = !0, b.discover = function () {
                var a, c, d, e, f, g;
                for (document.querySelectorAll ? d = document.querySelectorAll(".dropzone") : (d = [], a = function (a) {
                    var b, c, e, f;
                    for (f = [], c = 0, e = a.length; e > c; c++)b = a[c], f.push(/(^| )dropzone($| )/.test(b.className) ? d.push(b) : void 0);
                    return f
                }, a(document.getElementsByTagName("div")), a(document.getElementsByTagName("form"))), g = [], e = 0, f = d.length; f > e; e++)c = d[e], g.push(b.optionsForElement(c) !== !1 ? new b(c) : void 0);
                return g
            }, b.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i], b.isBrowserSupported = function () {
                var a, c, d, e, f;
                if (a = !0, window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)if ("classList"in document.createElement("a"))for (f = b.blacklistedBrowsers, d = 0, e = f.length; e > d; d++)c = f[d], c.test(navigator.userAgent) && (a = !1); else a = !1; else a = !1;
                return a
            }, j = function (a, b) {
                var c, d, e, f;
                for (f = [], d = 0, e = a.length; e > d; d++)c = a[d], c !== b && f.push(c);
                return f
            }, e = function (a) {
                return a.replace(/[\-_](\w)/g, function (a) {
                    return a.charAt(1).toUpperCase()
                })
            }, b.createElement = function (a) {
                var b;
                return b = document.createElement("div"), b.innerHTML = a, b.childNodes[0]
            }, b.elementInside = function (a, b) {
                if (a === b)return !0;
                for (; a = a.parentNode;)if (a === b)return !0;
                return !1
            }, b.getElement = function (a, b) {
                var c;
                if ("string" == typeof a ? c = document.querySelector(a) : null != a.nodeType && (c = a), null == c)throw new Error("Invalid `" + b + "` option provided. Please provide a CSS selector or a plain HTML element.");
                return c
            }, b.getElements = function (a, b) {
                var c, d, e, f, g, h, i, j;
                if (a instanceof Array) {
                    e = [];
                    try {
                        for (f = 0, h = a.length; h > f; f++)d = a[f], e.push(this.getElement(d, b))
                    } catch (k) {
                        c = k, e = null
                    }
                } else if ("string" == typeof a)for (e = [], j = document.querySelectorAll(a), g = 0, i = j.length; i > g; g++)d = j[g], e.push(d); else null != a.nodeType && (e = [a]);
                if (null == e || !e.length)throw new Error("Invalid `" + b + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
                return e
            }, b.confirm = function (a, b, c) {
                return window.confirm(a) ? b() : null != c ? c() : void 0
            }, b.isValidFile = function (a, b) {
                var c, d, e, f, g;
                if (!b)return !0;
                for (b = b.split(","), d = a.type, c = d.replace(/\/.*$/, ""), f = 0, g = b.length; g > f; f++)if (e = b[f], e = e.trim(), "." === e.charAt(0)) {
                    if (-1 !== a.name.toLowerCase().indexOf(e.toLowerCase(), a.name.length - e.length))return !0
                } else if (/\/\*$/.test(e)) {
                    if (c === e.replace(/\/.*$/, ""))return !0
                } else if (d === e)return !0;
                return !1
            }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function (a) {
                return this.each(function () {
                    return new b(this, a)
                })
            }), "undefined" != typeof c && null !== c ? c.exports = b : window.Dropzone = b, b.ADDED = "added", b.QUEUED = "queued", b.ACCEPTED = b.QUEUED, b.UPLOADING = "uploading", b.PROCESSING = b.UPLOADING, b.CANCELED = "canceled", b.ERROR = "error", b.SUCCESS = "success", g = function (a) {
                var b, c, d, e, f, g, h, i, j, k;
                for (h = a.naturalWidth, g = a.naturalHeight, c = document.createElement("canvas"), c.width = 1, c.height = g, d = c.getContext("2d"), d.drawImage(a, 0, 0), e = d.getImageData(0, 0, 1, g).data, k = 0, f = g, i = g; i > k;)b = e[4 * (i - 1) + 3], 0 === b ? f = i : k = i, i = f + k >> 1;
                return j = i / g, 0 === j ? 1 : j
            }, h = function (a, b, c, d, e, f, h, i, j, k) {
                var l;
                return l = g(b), a.drawImage(b, c, d, e, f, h, i, j, k / l)
            }, f = function (a, b) {
                var c, d, e, f, g, h, i, j, k;
                if (e = !1, k = !0, d = a.document, j = d.documentElement, c = d.addEventListener ? "addEventListener" : "attachEvent", i = d.addEventListener ? "removeEventListener" : "detachEvent", h = d.addEventListener ? "" : "on", f = function (c) {
                        return "readystatechange" !== c.type || "complete" === d.readyState ? (("load" === c.type ? a : d)[i](h + c.type, f, !1), !e && (e = !0) ? b.call(a, c.type || c) : void 0) : void 0
                    }, g = function () {
                        var a;
                        try {
                            j.doScroll("left")
                        } catch (b) {
                            return a = b, void setTimeout(g, 50)
                        }
                        return f("poll")
                    }, "complete" !== d.readyState) {
                    if (d.createEventObject && j.doScroll) {
                        try {
                            k = !a.frameElement
                        } catch (l) {
                        }
                        k && g()
                    }
                    return d[c](h + "DOMContentLoaded", f, !1), d[c](h + "readystatechange", f, !1), a[c](h + "load", f, !1)
                }
            }, b._autoDiscoverFunction = function () {
                return b.autoDiscover ? b.discover() : void 0
            }, f(window, b._autoDiscoverFunction)
        }).call(this)
    }), "object" == typeof exports ? module.exports = a("dropzone") : "function" == typeof define && define.amd ? define([], function () {
        return a("dropzone")
    }) : this.Dropzone = a("dropzone")
}();

/*!
 *
 * Bootstrap datetimepicker
 * https://github.com/Eonasdan/bootstrap-datetimepicker/
 */
!function (a, b) {
    "use strict";
    if ("function" == typeof define && define.amd)define(["jquery", "moment"], b); else if ("object" == typeof exports)b(require("jquery"), require("moment")); else {
        if (!jQuery)throw new Error("bootstrap-datetimepicker requires jQuery to be loaded first");
        if (!moment)throw new Error("bootstrap-datetimepicker requires moment.js to be loaded first");
        b(a.jQuery, moment)
    }
}(this, function (a, b) {
    "use strict";
    if ("undefined" == typeof b)throw new Error("momentjs is required");
    var c = 0, d = function (d, e) {
        var f, g = a.fn.datetimepicker.defaults, h = {
            time: "glyphicon glyphicon-time",
            date: "glyphicon glyphicon-calendar",
            up: "glyphicon glyphicon-chevron-up",
            down: "glyphicon glyphicon-chevron-down"
        }, i = this, j = !1, k = function () {
            var f, j, k = !1;
            if (i.options = a.extend({}, g, e), i.options.icons = a.extend({}, h, i.options.icons), i.element = a(d), m(), !i.options.pickTime && !i.options.pickDate)throw new Error("Must choose at least one picker");
            if (i.id = c++, b.locale(i.options.language), i.date = b(), i.unset = !1, i.isInput = i.element.is("input"), i.component = !1, i.element.hasClass("input-group") && (i.component = i.element.find(0 === i.element.find(".datepickerbutton").size() ? '[class^="input-group-"]' : ".datepickerbutton")), i.format = i.options.format, f = b().localeData(), i.format || (i.format = i.options.pickDate ? f.longDateFormat("L") : "", i.options.pickDate && i.options.pickTime && (i.format += " "), i.format += i.options.pickTime ? f.longDateFormat("LT") : "", i.options.useSeconds && (-1 !== f.longDateFormat("LT").indexOf(" A") ? i.format = i.format.split(" A")[0] + ":ss A" : i.format += ":ss")), i.use24hours = i.format.toLowerCase().indexOf("a") < 0 && i.format.indexOf("h") < 0, i.component && (k = i.component.find("span")), i.options.pickTime && k && k.addClass(i.options.icons.time), i.options.pickDate && k && (k.removeClass(i.options.icons.time), k.addClass(i.options.icons.date)), i.options.widgetParent = "string" == typeof i.options.widgetParent && i.options.widgetParent || i.element.parents().filter(function () {
                    return "scroll" === a(this).css("overflow-y")
                }).get(0) || "body", i.widget = a(Q()).appendTo(i.options.widgetParent), i.minViewMode = i.options.minViewMode || 0, "string" == typeof i.minViewMode)switch (i.minViewMode) {
                case"months":
                    i.minViewMode = 1;
                    break;
                case"years":
                    i.minViewMode = 2;
                    break;
                default:
                    i.minViewMode = 0
            }
            if (i.viewMode = i.options.viewMode || 0, "string" == typeof i.viewMode)switch (i.viewMode) {
                case"months":
                    i.viewMode = 1;
                    break;
                case"years":
                    i.viewMode = 2;
                    break;
                default:
                    i.viewMode = 0
            }
            i.viewMode = Math.max(i.viewMode, i.minViewMode), i.options.disabledDates = O(i.options.disabledDates), i.options.enabledDates = O(i.options.enabledDates), i.startViewMode = i.viewMode, i.setMinDate(i.options.minDate), i.setMaxDate(i.options.maxDate), r(), s(), u(), v(), w(), q(), E(), l().prop("disabled") || F(), "" !== i.options.defaultDate && "" === l().val() && i.setValue(i.options.defaultDate), 1 !== i.options.minuteStepping && (j = i.options.minuteStepping, i.date.minutes(Math.round(i.date.minutes() / j) * j % 60).seconds(0))
        }, l = function () {
            var a;
            if (i.isInput)return i.element;
            if (a = i.element.find(".datepickerinput"), 0 === a.size())a = i.element.find("input"); else if (!a.is("input"))throw new Error('CSS class "datepickerinput" cannot be applied to non input element');
            return a
        }, m = function () {
            var a;
            a = i.element.is("input") ? i.element.data() : i.element.find("input").data(), void 0 !== a.dateFormat && (i.options.format = a.dateFormat), void 0 !== a.datePickdate && (i.options.pickDate = a.datePickdate), void 0 !== a.datePicktime && (i.options.pickTime = a.datePicktime), void 0 !== a.dateUseminutes && (i.options.useMinutes = a.dateUseminutes), void 0 !== a.dateUseseconds && (i.options.useSeconds = a.dateUseseconds), void 0 !== a.dateUsecurrent && (i.options.useCurrent = a.dateUsecurrent), void 0 !== a.calendarWeeks && (i.options.calendarWeeks = a.calendarWeeks), void 0 !== a.dateMinutestepping && (i.options.minuteStepping = a.dateMinutestepping), void 0 !== a.dateMindate && (i.options.minDate = a.dateMindate), void 0 !== a.dateMaxdate && (i.options.maxDate = a.dateMaxdate), void 0 !== a.dateShowtoday && (i.options.showToday = a.dateShowtoday), void 0 !== a.dateCollapse && (i.options.collapse = a.dateCollapse), void 0 !== a.dateLanguage && (i.options.language = a.dateLanguage), void 0 !== a.dateDefaultdate && (i.options.defaultDate = a.dateDefaultdate), void 0 !== a.dateDisableddates && (i.options.disabledDates = a.dateDisableddates), void 0 !== a.dateEnableddates && (i.options.enabledDates = a.dateEnableddates), void 0 !== a.dateIcons && (i.options.icons = a.dateIcons), void 0 !== a.dateUsestrict && (i.options.useStrict = a.dateUsestrict), void 0 !== a.dateDirection && (i.options.direction = a.dateDirection), void 0 !== a.dateSidebyside && (i.options.sideBySide = a.dateSidebyside), void 0 !== a.dateDaysofweekdisabled && (i.options.daysOfWeekDisabled = a.dateDaysofweekdisabled)
        }, n = function () {
            var b, c = "absolute", d = i.component ? i.component.offset() : i.element.offset(), e = a(window);
            i.width = i.component ? i.component.outerWidth() : i.element.outerWidth(), d.top = d.top + i.element.outerHeight(), "up" === i.options.direction ? b = "top" : "bottom" === i.options.direction ? b = "bottom" : "auto" === i.options.direction && (b = d.top + i.widget.height() > e.height() + e.scrollTop() && i.widget.height() + i.element.outerHeight() < d.top ? "top" : "bottom"), "top" === b ? (d.bottom = e.height() - d.top + i.element.outerHeight() + 3, i.widget.addClass("top").removeClass("bottom")) : (d.top += 1, i.widget.addClass("bottom").removeClass("top")), void 0 !== i.options.width && i.widget.width(i.options.width), "left" === i.options.orientation && (i.widget.addClass("left-oriented"), d.left = d.left - i.widget.width() + 20), J() && (c = "fixed", d.top -= e.scrollTop(), d.left -= e.scrollLeft()), e.width() < d.left + i.widget.outerWidth() ? (d.right = e.width() - d.left - i.width, d.left = "auto", i.widget.addClass("pull-right")) : (d.right = "auto", i.widget.removeClass("pull-right")), i.widget.css("top" === b ? {
                position: c,
                bottom: d.bottom,
                top: "auto",
                left: d.left,
                right: d.right
            } : {position: c, top: d.top, bottom: "auto", left: d.left, right: d.right})
        }, o = function (a, c) {
            (!b(i.date).isSame(b(a)) || j) && (j = !1, i.element.trigger({
                type: "dp.change",
                date: b(i.date),
                oldDate: b(a)
            }), "change" !== c && i.element.change())
        }, p = function (a) {
            j = !0, i.element.trigger({type: "dp.error", date: b(a, i.format, i.options.useStrict)})
        }, q = function (a) {
            b.locale(i.options.language);
            var c = a;
            c || (c = l().val(), c && (i.date = b(c, i.format, i.options.useStrict)), i.date || (i.date = b())), i.viewDate = b(i.date).startOf("month"), t(), x()
        }, r = function () {
            b.locale(i.options.language);
            var c, d = a("<tr>"), e = b.weekdaysMin();
            if (i.options.calendarWeeks === !0 && d.append('<th class="cw">#</th>'), 0 === b().localeData()._week.dow)for (c = 0; 7 > c; c++)d.append('<th class="dow">' + e[c] + "</th>"); else for (c = 1; 8 > c; c++)d.append(7 === c ? '<th class="dow">' + e[0] + "</th>" : '<th class="dow">' + e[c] + "</th>");
            i.widget.find(".datepicker-days thead").append(d)
        }, s = function () {
            b.locale(i.options.language);
            var a, c = "", d = b.monthsShort();
            for (a = 0; 12 > a; a++)c += '<span class="month">' + d[a] + "</span>";
            i.widget.find(".datepicker-months td").append(c)
        }, t = function () {
            if (i.options.pickDate) {
                b.locale(i.options.language);
                var c, d, e, f, g, h, j, k, l, m = i.viewDate.year(), n = i.viewDate.month(), o = i.options.minDate.year(), p = i.options.minDate.month(), q = i.options.maxDate.year(), r = i.options.maxDate.month(), s = [], t = b.months();
                for (i.widget.find(".datepicker-days").find(".disabled").removeClass("disabled"), i.widget.find(".datepicker-months").find(".disabled").removeClass("disabled"), i.widget.find(".datepicker-years").find(".disabled").removeClass("disabled"), i.widget.find(".datepicker-days th:eq(1)").text(t[n] + " " + m), d = b(i.viewDate, i.format, i.options.useStrict).subtract(1, "months"), j = d.daysInMonth(), d.date(j).startOf("week"), (m === o && p >= n || o > m) && i.widget.find(".datepicker-days th:eq(0)").addClass("disabled"), (m === q && n >= r || m > q) && i.widget.find(".datepicker-days th:eq(2)").addClass("disabled"), e = b(d).add(42, "d"); d.isBefore(e);) {
                    if (d.weekday() === b().startOf("week").weekday() && (f = a("<tr>"), s.push(f), i.options.calendarWeeks === !0 && f.append('<td class="cw">' + d.week() + "</td>")), g = "", d.year() < m || d.year() === m && d.month() < n ? g += " old" : (d.year() > m || d.year() === m && d.month() > n) && (g += " new"), d.isSame(b({
                            y: i.date.year(),
                            M: i.date.month(),
                            d: i.date.date()
                        })) && (g += " active"), (M(d, "day") || !N(d)) && (g += " disabled"), i.options.showToday === !0 && d.isSame(b(), "day") && (g += " today"), i.options.daysOfWeekDisabled)for (h = 0; h < i.options.daysOfWeekDisabled.length; h++)if (d.day() === i.options.daysOfWeekDisabled[h]) {
                        g += " disabled";
                        break
                    }
                    f.append('<td class="day' + g + '">' + d.date() + "</td>"), c = d.date(), d.add(1, "d"), c === d.date() && d.add(1, "d")
                }
                for (i.widget.find(".datepicker-days tbody").empty().append(s), l = i.date.year(), t = i.widget.find(".datepicker-months").find("th:eq(1)").text(m).end().find("span").removeClass("active"), l === m && t.eq(i.date.month()).addClass("active"), o > m - 1 && i.widget.find(".datepicker-months th:eq(0)").addClass("disabled"), m + 1 > q && i.widget.find(".datepicker-months th:eq(2)").addClass("disabled"), h = 0; 12 > h; h++)m === o && p > h || o > m ? a(t[h]).addClass("disabled") : (m === q && h > r || m > q) && a(t[h]).addClass("disabled");
                for (s = "", m = 10 * parseInt(m / 10, 10), k = i.widget.find(".datepicker-years").find("th:eq(1)").text(m + "-" + (m + 9)).parents("table").find("td"), i.widget.find(".datepicker-years").find("th").removeClass("disabled"), o > m && i.widget.find(".datepicker-years").find("th:eq(0)").addClass("disabled"), m + 9 > q && i.widget.find(".datepicker-years").find("th:eq(2)").addClass("disabled"), m -= 1, h = -1; 11 > h; h++)s += '<span class="year' + (-1 === h || 10 === h ? " old" : "") + (l === m ? " active" : "") + (o > m || m > q ? " disabled" : "") + '">' + m + "</span>", m += 1;
                k.html(s)
            }
        }, u = function () {
            b.locale(i.options.language);
            var a, c, d, e = i.widget.find(".timepicker .timepicker-hours table"), f = "";
            if (e.parent().hide(), i.use24hours)for (a = 0, c = 0; 6 > c; c += 1) {
                for (f += "<tr>", d = 0; 4 > d; d += 1)f += '<td class="hour">' + P(a.toString()) + "</td>", a++;
                f += "</tr>"
            } else for (a = 1, c = 0; 3 > c; c += 1) {
                for (f += "<tr>", d = 0; 4 > d; d += 1)f += '<td class="hour">' + P(a.toString()) + "</td>", a++;
                f += "</tr>"
            }
            e.html(f)
        }, v = function () {
            var a, b, c = i.widget.find(".timepicker .timepicker-minutes table"), d = "", e = 0, f = i.options.minuteStepping;
            for (c.parent().hide(), 1 === f && (f = 5), a = 0; a < Math.ceil(60 / f / 4); a++) {
                for (d += "<tr>", b = 0; 4 > b; b += 1)60 > e ? (d += '<td class="minute">' + P(e.toString()) + "</td>", e += f) : d += "<td></td>";
                d += "</tr>"
            }
            c.html(d)
        }, w = function () {
            var a, b, c = i.widget.find(".timepicker .timepicker-seconds table"), d = "", e = 0;
            for (c.parent().hide(), a = 0; 3 > a; a++) {
                for (d += "<tr>", b = 0; 4 > b; b += 1)d += '<td class="second">' + P(e.toString()) + "</td>", e += 5;
                d += "</tr>"
            }
            c.html(d)
        }, x = function () {
            if (i.date) {
                var a = i.widget.find(".timepicker span[data-time-component]"), b = i.date.hours(), c = i.date.format("A");
                i.use24hours || (0 === b ? b = 12 : 12 !== b && (b %= 12), i.widget.find(".timepicker [data-action=togglePeriod]").text(c)), a.filter("[data-time-component=hours]").text(P(b)), a.filter("[data-time-component=minutes]").text(P(i.date.minutes())), a.filter("[data-time-component=seconds]").text(P(i.date.second()))
            }
        }, y = function (c) {
            c.stopPropagation(), c.preventDefault(), i.unset = !1;
            var d, e, f, g, h = a(c.target).closest("span, td, th"), j = b(i.date);
            if (1 === h.length && !h.is(".disabled"))switch (h[0].nodeName.toLowerCase()) {
                case"th":
                    switch (h[0].className) {
                        case"picker-switch":
                            E(1);
                            break;
                        case"prev":
                        case"next":
                            f = R.modes[i.viewMode].navStep, "prev" === h[0].className && (f = -1 * f), i.viewDate.add(f, R.modes[i.viewMode].navFnc), t()
                    }
                    break;
                case"span":
                    h.is(".month") ? (d = h.parent().find("span").index(h), i.viewDate.month(d)) : (e = parseInt(h.text(), 10) || 0, i.viewDate.year(e)), i.viewMode === i.minViewMode && (i.date = b({
                        y: i.viewDate.year(),
                        M: i.viewDate.month(),
                        d: i.viewDate.date(),
                        h: i.date.hours(),
                        m: i.date.minutes(),
                        s: i.date.seconds()
                    }), K(), o(j, c.type)), E(-1), t();
                    break;
                case"td":
                    h.is(".day") && (g = parseInt(h.text(), 10) || 1, d = i.viewDate.month(), e = i.viewDate.year(), h.is(".old") ? 0 === d ? (d = 11, e -= 1) : d -= 1 : h.is(".new") && (11 === d ? (d = 0, e += 1) : d += 1), i.date = b({
                        y: e,
                        M: d,
                        d: g,
                        h: i.date.hours(),
                        m: i.date.minutes(),
                        s: i.date.seconds()
                    }), i.viewDate = b({y: e, M: d, d: Math.min(28, g)}), t(), K(), o(j, c.type))
            }
        }, z = {
            incrementHours: function () {
                L("add", "hours", 1)
            }, incrementMinutes: function () {
                L("add", "minutes", i.options.minuteStepping)
            }, incrementSeconds: function () {
                L("add", "seconds", 1)
            }, decrementHours: function () {
                L("subtract", "hours", 1)
            }, decrementMinutes: function () {
                L("subtract", "minutes", i.options.minuteStepping)
            }, decrementSeconds: function () {
                L("subtract", "seconds", 1)
            }, togglePeriod: function () {
                var a = i.date.hours();
                a >= 12 ? a -= 12 : a += 12, i.date.hours(a)
            }, showPicker: function () {
                i.widget.find(".timepicker > div:not(.timepicker-picker)").hide(), i.widget.find(".timepicker .timepicker-picker").show()
            }, showHours: function () {
                i.widget.find(".timepicker .timepicker-picker").hide(), i.widget.find(".timepicker .timepicker-hours").show()
            }, showMinutes: function () {
                i.widget.find(".timepicker .timepicker-picker").hide(), i.widget.find(".timepicker .timepicker-minutes").show()
            }, showSeconds: function () {
                i.widget.find(".timepicker .timepicker-picker").hide(), i.widget.find(".timepicker .timepicker-seconds").show()
            }, selectHour: function (b) {
                var c = parseInt(a(b.target).text(), 10);
                i.use24hours || (i.date.hours() >= 12 ? 12 !== c && (c += 12) : 12 === c && (c = 0)), i.date.hours(c), z.showPicker.call(i)
            }, selectMinute: function (b) {
                i.date.minutes(parseInt(a(b.target).text(), 10)), z.showPicker.call(i)
            }, selectSecond: function (b) {
                i.date.seconds(parseInt(a(b.target).text(), 10)), z.showPicker.call(i)
            }
        }, A = function (c) {
            var d = b(i.date), e = a(c.currentTarget).data("action"), f = z[e].apply(i, arguments);
            return B(c), i.date || (i.date = b({y: 1970})), K(), x(), o(d, c.type), f
        }, B = function (a) {
            a.stopPropagation(), a.preventDefault()
        }, C = function (a) {
            27 === a.keyCode && i.hide()
        }, D = function (c) {
            b.locale(i.options.language);
            var d = a(c.target), e = b(i.date), f = b(d.val(), i.format, i.options.useStrict);
            f.isValid() && !M(f) && N(f) ? (q(), i.setValue(f), o(e, c.type), K()) : (i.viewDate = e, i.unset = !0, o(e, c.type), p(f))
        }, E = function (a) {
            a && (i.viewMode = Math.max(i.minViewMode, Math.min(2, i.viewMode + a))), i.widget.find(".datepicker > div").hide().filter(".datepicker-" + R.modes[i.viewMode].clsName).show()
        }, F = function () {
            var b, c, d, e, f;
            i.widget.on("click", ".datepicker *", a.proxy(y, this)), i.widget.on("click", "[data-action]", a.proxy(A, this)), i.widget.on("mousedown", a.proxy(B, this)), i.element.on("keydown", a.proxy(C, this)), i.options.pickDate && i.options.pickTime && i.widget.on("click.togglePicker", ".accordion-toggle", function (g) {
                if (g.stopPropagation(), b = a(this), c = b.closest("ul"), d = c.find(".in"), e = c.find(".collapse:not(.in)"), d && d.length) {
                    if (f = d.data("collapse"), f && f.transitioning)return;
                    d.collapse("hide"), e.collapse("show"), b.find("span").toggleClass(i.options.icons.time + " " + i.options.icons.date), i.component && i.component.find("span").toggleClass(i.options.icons.time + " " + i.options.icons.date)
                }
            }), i.isInput ? i.element.on({
                click: a.proxy(i.show, this),
                focus: a.proxy(i.show, this),
                change: a.proxy(D, this),
                blur: a.proxy(i.hide, this)
            }) : (i.element.on({change: a.proxy(D, this)}, "input"), i.component ? (i.component.on("click", a.proxy(i.show, this)), i.component.on("mousedown", a.proxy(B, this))) : i.element.on("click", a.proxy(i.show, this)))
        }, G = function () {
            a(window).on("resize.datetimepicker" + i.id, a.proxy(n, this)), i.isInput || a(document).on("mousedown.datetimepicker" + i.id, a.proxy(i.hide, this))
        }, H = function () {
            i.widget.off("click", ".datepicker *", i.click), i.widget.off("click", "[data-action]"), i.widget.off("mousedown", i.stopEvent), i.options.pickDate && i.options.pickTime && i.widget.off("click.togglePicker"), i.isInput ? i.element.off({
                focus: i.show,
                change: D,
                click: i.show,
                blur: i.hide
            }) : (i.element.off({change: D}, "input"), i.component ? (i.component.off("click", i.show), i.component.off("mousedown", i.stopEvent)) : i.element.off("click", i.show))
        }, I = function () {
            a(window).off("resize.datetimepicker" + i.id), i.isInput || a(document).off("mousedown.datetimepicker" + i.id)
        }, J = function () {
            if (i.element) {
                var b, c = i.element.parents(), d = !1;
                for (b = 0; b < c.length; b++)if ("fixed" === a(c[b]).css("position")) {
                    d = !0;
                    break
                }
                return d
            }
            return !1
        }, K = function () {
            b.locale(i.options.language);
            var a = "";
            i.unset || (a = b(i.date).format(i.format)), l().val(a), i.element.data("date", a), i.options.pickTime || i.hide()
        }, L = function (a, c, d) {
            b.locale(i.options.language);
            var e;
            return "add" === a ? (e = b(i.date), 23 === e.hours() && e.add(d, c), e.add(d, c)) : e = b(i.date).subtract(d, c), M(b(e.subtract(d, c))) || M(e) ? void p(e.format(i.format)) : ("add" === a ? i.date.add(d, c) : i.date.subtract(d, c), void(i.unset = !1))
        }, M = function (a, c) {
            b.locale(i.options.language);
            var d = b(i.options.maxDate, i.format, i.options.useStrict), e = b(i.options.minDate, i.format, i.options.useStrict);
            return c && (d = d.endOf(c), e = e.startOf(c)), a.isAfter(d) || a.isBefore(e) ? !0 : i.options.disabledDates === !1 ? !1 : i.options.disabledDates[a.format("YYYY-MM-DD")] === !0
        }, N = function (a) {
            return b.locale(i.options.language), i.options.enabledDates === !1 ? !0 : i.options.enabledDates[a.format("YYYY-MM-DD")] === !0
        }, O = function (a) {
            var c, d = {}, e = 0;
            for (c = 0; c < a.length; c++)f = b.isMoment(a[c]) || a[c]instanceof Date ? b(a[c]) : b(a[c], i.format, i.options.useStrict), f.isValid() && (d[f.format("YYYY-MM-DD")] = !0, e++);
            return e > 0 ? d : !1
        }, P = function (a) {
            return a = a.toString(), a.length >= 2 ? a : "0" + a
        }, Q = function () {
            var a = '<thead><tr><th class="prev">&lsaquo;</th><th colspan="' + (i.options.calendarWeeks ? "6" : "5") + '" class="picker-switch"></th><th class="next">&rsaquo;</th></tr></thead>', b = '<tbody><tr><td colspan="' + (i.options.calendarWeeks ? "8" : "7") + '"></td></tr></tbody>', c = '<div class="datepicker-days"><table class="table-condensed">' + a + '<tbody></tbody></table></div><div class="datepicker-months"><table class="table-condensed">' + a + b + '</table></div><div class="datepicker-years"><table class="table-condensed">' + a + b + "</table></div>", d = "";
            return i.options.pickDate && i.options.pickTime ? (d = '<div class="bootstrap-datetimepicker-widget' + (i.options.sideBySide ? " timepicker-sbs" : "") + (i.use24hours ? " usetwentyfour" : "") + ' dropdown-menu" style="z-index:9999 !important;">', d += i.options.sideBySide ? '<div class="row"><div class="col-sm-6 datepicker">' + c + '</div><div class="col-sm-6 timepicker">' + S.getTemplate() + "</div></div>" : '<ul class="list-unstyled"><li' + (i.options.collapse ? ' class="collapse in"' : "") + '><div class="datepicker">' + c + '</div></li><li class="picker-switch accordion-toggle"><a class="btn" style="width:100%"><span class="' + i.options.icons.time + '"></span></a></li><li' + (i.options.collapse ? ' class="collapse"' : "") + '><div class="timepicker">' + S.getTemplate() + "</div></li></ul>", d += "</div>") : i.options.pickTime ? '<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="timepicker">' + S.getTemplate() + "</div></div>" : '<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="datepicker">' + c + "</div></div>"
        }, R = {
            modes: [{clsName: "days", navFnc: "month", navStep: 1}, {
                clsName: "months",
                navFnc: "year",
                navStep: 1
            }, {clsName: "years", navFnc: "year", navStep: 10}]
        }, S = {
            hourTemplate: '<span data-action="showHours"   data-time-component="hours"   class="timepicker-hour"></span>',
            minuteTemplate: '<span data-action="showMinutes" data-time-component="minutes" class="timepicker-minute"></span>',
            secondTemplate: '<span data-action="showSeconds"  data-time-component="seconds" class="timepicker-second"></span>'
        };
        S.getTemplate = function () {
            return '<div class="timepicker-picker"><table class="table-condensed"><tr><td><a href="#" class="btn" data-action="incrementHours"><span class="' + i.options.icons.up + '"></span></a></td><td class="separator"></td><td>' + (i.options.useMinutes ? '<a href="#" class="btn" data-action="incrementMinutes"><span class="' + i.options.icons.up + '"></span></a>' : "") + "</td>" + (i.options.useSeconds ? '<td class="separator"></td><td><a href="#" class="btn" data-action="incrementSeconds"><span class="' + i.options.icons.up + '"></span></a></td>' : "") + (i.use24hours ? "" : '<td class="separator"></td>') + "</tr><tr><td>" + S.hourTemplate + '</td> <td class="separator">:</td><td>' + (i.options.useMinutes ? S.minuteTemplate : '<span class="timepicker-minute">00</span>') + "</td> " + (i.options.useSeconds ? '<td class="separator">:</td><td>' + S.secondTemplate + "</td>" : "") + (i.use24hours ? "" : '<td class="separator"></td><td><button type="button" class="btn btn-primary" data-action="togglePeriod"></button></td>') + '</tr><tr><td><a href="#" class="btn" data-action="decrementHours"><span class="' + i.options.icons.down + '"></span></a></td><td class="separator"></td><td>' + (i.options.useMinutes ? '<a href="#" class="btn" data-action="decrementMinutes"><span class="' + i.options.icons.down + '"></span></a>' : "") + "</td>" + (i.options.useSeconds ? '<td class="separator"></td><td><a href="#" class="btn" data-action="decrementSeconds"><span class="' + i.options.icons.down + '"></span></a></td>' : "") + (i.use24hours ? "" : '<td class="separator"></td>') + '</tr></table></div><div class="timepicker-hours" data-action="selectHour"><table class="table-condensed"></table></div><div class="timepicker-minutes" data-action="selectMinute"><table class="table-condensed"></table></div>' + (i.options.useSeconds ? '<div class="timepicker-seconds" data-action="selectSecond"><table class="table-condensed"></table></div>' : "")
        }, i.destroy = function () {
            H(), I(), i.widget.remove(), i.element.removeData("DateTimePicker"), i.component && i.component.removeData("DateTimePicker")
        }, i.show = function (a) {
            if (!l().prop("disabled")) {
                if (i.options.useCurrent && "" === l().val()) {
                    if (1 !== i.options.minuteStepping) {
                        var c = b(), d = i.options.minuteStepping;
                        c.minutes(Math.round(c.minutes() / d) * d % 60).seconds(0), i.setValue(c.format(i.format))
                    } else i.setValue(b().format(i.format));
                    o("", a.type)
                }
                a && "click" === a.type && i.isInput && i.widget.hasClass("picker-open") || (i.widget.hasClass("picker-open") ? (i.widget.hide(), i.widget.removeClass("picker-open")) : (i.widget.show(), i.widget.addClass("picker-open")), i.height = i.component ? i.component.outerHeight() : i.element.outerHeight(), n(), i.element.trigger({
                    type: "dp.show",
                    date: b(i.date)
                }), G(), a && B(a))
            }
        }, i.disable = function () {
            var a = l();
            a.prop("disabled") || (a.prop("disabled", !0), H())
        }, i.enable = function () {
            var a = l();
            a.prop("disabled") && (a.prop("disabled", !1), F())
        }, i.hide = function () {
            var a, c, d = i.widget.find(".collapse");
            for (a = 0; a < d.length; a++)if (c = d.eq(a).data("collapse"), c && c.transitioning)return;
            i.widget.hide(), i.widget.removeClass("picker-open"), i.viewMode = i.startViewMode, E(), i.element.trigger({
                type: "dp.hide",
                date: b(i.date)
            }), I()
        }, i.setValue = function (a) {
            b.locale(i.options.language), a ? i.unset = !1 : (i.unset = !0, K()), a = b.isMoment(a) ? a.locale(i.options.language) : a instanceof Date ? b(a) : b(a, i.format, i.options.useStrict), a.isValid() ? (i.date = a, K(), i.viewDate = b({
                y: i.date.year(),
                M: i.date.month()
            }), t(), x()) : p(a)
        }, i.getDate = function () {
            return i.unset ? null : b(i.date)
        }, i.setDate = function (a) {
            var c = b(i.date);
            i.setValue(a ? a : null), o(c, "function")
        }, i.setDisabledDates = function (a) {
            i.options.disabledDates = O(a), i.viewDate && q()
        }, i.setEnabledDates = function (a) {
            i.options.enabledDates = O(a), i.viewDate && q()
        }, i.setMaxDate = function (a) {
            void 0 !== a && (i.options.maxDate = b.isMoment(a) || a instanceof Date ? b(a) : b(a, i.format, i.options.useStrict), i.viewDate && q())
        }, i.setMinDate = function (a) {
            void 0 !== a && (i.options.minDate = b.isMoment(a) || a instanceof Date ? b(a) : b(a, i.format, i.options.useStrict), i.viewDate && q())
        }, k()
    };
    a.fn.datetimepicker = function (b) {
        return this.each(function () {
            var c = a(this), e = c.data("DateTimePicker");
            e || c.data("DateTimePicker", new d(this, b))
        })
    }, a.fn.datetimepicker.defaults = {
        format: !1,
        pickDate: !0,
        pickTime: !0,
        useMinutes: !0,
        useSeconds: !1,
        useCurrent: !0,
        calendarWeeks: !1,
        minuteStepping: 1,
        minDate: b({y: 1900}),
        maxDate: b().add(100, "y"),
        showToday: !0,
        collapse: !0,
        language: b.locale(),
        defaultDate: "",
        disabledDates: !1,
        enabledDates: !1,
        icons: {},
        useStrict: !1,
        direction: "auto",
        sideBySide: !1,
        daysOfWeekDisabled: [],
        widgetParent: !1
    }
});

/* Chosen v1.4.1 | (c) 2011-2015 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */
(function () {
    var a, AbstractChosen, Chosen, SelectParser, b, c = {}.hasOwnProperty, d = function (a, b) {
        function d() {
            this.constructor = a
        }

        for (var e in b)c.call(b, e) && (a[e] = b[e]);
        return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
    };
    SelectParser = function () {
        function SelectParser() {
            this.options_index = 0, this.parsed = []
        }

        return SelectParser.prototype.add_node = function (a) {
            return "OPTGROUP" === a.nodeName.toUpperCase() ? this.add_group(a) : this.add_option(a)
        }, SelectParser.prototype.add_group = function (a) {
            var b, c, d, e, f, g;
            for (b = this.parsed.length, this.parsed.push({
                array_index: b,
                group: !0,
                label: this.escapeExpression(a.label),
                title: a.title ? a.title : void 0,
                children: 0,
                disabled: a.disabled,
                classes: a.className
            }), f = a.childNodes, g = [], d = 0, e = f.length; e > d; d++)c = f[d], g.push(this.add_option(c, b, a.disabled));
            return g
        }, SelectParser.prototype.add_option = function (a, b, c) {
            return "OPTION" === a.nodeName.toUpperCase() ? ("" !== a.text ? (null != b && (this.parsed[b].children += 1), this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                value: a.value,
                text: a.text,
                html: a.innerHTML,
                title: a.title ? a.title : void 0,
                selected: a.selected,
                disabled: c === !0 ? c : a.disabled,
                group_array_index: b,
                group_label: null != b ? this.parsed[b].label : null,
                classes: a.className,
                style: a.style.cssText
            })) : this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                empty: !0
            }), this.options_index += 1) : void 0
        }, SelectParser.prototype.escapeExpression = function (a) {
            var b, c;
            return null == a || a === !1 ? "" : /[\&\<\>\"\'\`]/.test(a) ? (b = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, c = /&(?!\w+;)|[\<\>\"\'\`]/g, a.replace(c, function (a) {
                return b[a] || "&amp;"
            })) : a
        }, SelectParser
    }(), SelectParser.select_to_array = function (a) {
        var b, c, d, e, f;
        for (c = new SelectParser, f = a.childNodes, d = 0, e = f.length; e > d; d++)b = f[d], c.add_node(b);
        return c.parsed
    }, AbstractChosen = function () {
        function AbstractChosen(a, b) {
            this.form_field = a, this.options = null != b ? b : {}, AbstractChosen.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready())
        }

        return AbstractChosen.prototype.set_default_values = function () {
            var a = this;
            return this.click_test_action = function (b) {
                return a.test_active_click(b)
            }, this.activate_action = function (b) {
                return a.activate_field(b)
            }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1
        }, AbstractChosen.prototype.set_default_text = function () {
            return this.default_text = this.form_field.getAttribute("data-placeholder") ? this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text : this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text
        }, AbstractChosen.prototype.choice_label = function (a) {
            return this.include_group_label_in_selected && null != a.group_label ? "<b class='group-name'>" + a.group_label + "</b>" + a.html : a.html
        }, AbstractChosen.prototype.mouse_enter = function () {
            return this.mouse_on_container = !0
        }, AbstractChosen.prototype.mouse_leave = function () {
            return this.mouse_on_container = !1
        }, AbstractChosen.prototype.input_focus = function () {
            var a = this;
            if (this.is_multiple) {
                if (!this.active_field)return setTimeout(function () {
                    return a.container_mousedown()
                }, 50)
            } else if (!this.active_field)return this.activate_field()
        }, AbstractChosen.prototype.input_blur = function () {
            var a = this;
            return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function () {
                return a.blur_test()
            }, 100))
        }, AbstractChosen.prototype.results_option_build = function (a) {
            var b, c, d, e, f;
            for (b = "", f = this.results_data, d = 0, e = f.length; e > d; d++)c = f[d], b += c.group ? this.result_add_group(c) : this.result_add_option(c), (null != a ? a.first : void 0) && (c.selected && this.is_multiple ? this.choice_build(c) : c.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(c)));
            return b
        }, AbstractChosen.prototype.result_add_option = function (a) {
            var b, c;
            return a.search_match ? this.include_option_in_results(a) ? (b = [], a.disabled || a.selected && this.is_multiple || b.push("active-result"), !a.disabled || a.selected && this.is_multiple || b.push("disabled-result"), a.selected && b.push("result-selected"), null != a.group_array_index && b.push("group-option"), "" !== a.classes && b.push(a.classes), c = document.createElement("li"), c.className = b.join(" "), c.style.cssText = a.style, c.setAttribute("data-option-array-index", a.array_index), c.innerHTML = a.search_text, a.title && (c.title = a.title), this.outerHTML(c)) : "" : ""
        }, AbstractChosen.prototype.result_add_group = function (a) {
            var b, c;
            return a.search_match || a.group_match ? a.active_options > 0 ? (b = [], b.push("group-result"), a.classes && b.push(a.classes), c = document.createElement("li"), c.className = b.join(" "), c.innerHTML = a.search_text, a.title && (c.title = a.title), this.outerHTML(c)) : "" : ""
        }, AbstractChosen.prototype.results_update_field = function () {
            return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0
        }, AbstractChosen.prototype.reset_single_select_options = function () {
            var a, b, c, d, e;
            for (d = this.results_data, e = [], b = 0, c = d.length; c > b; b++)a = d[b], a.selected ? e.push(a.selected = !1) : e.push(void 0);
            return e
        }, AbstractChosen.prototype.results_toggle = function () {
            return this.results_showing ? this.results_hide() : this.results_show()
        }, AbstractChosen.prototype.results_search = function () {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }, AbstractChosen.prototype.winnow_results = function () {
            var a, b, c, d, e, f, g, h, i, j, k, l;
            for (this.no_results_clear(), d = 0, f = this.get_search_text(), a = f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), i = new RegExp(a, "i"), c = this.get_search_regex(a), l = this.results_data, j = 0, k = l.length; k > j; j++)b = l[j], b.search_match = !1, e = null, this.include_option_in_results(b) && (b.group && (b.group_match = !1, b.active_options = 0), null != b.group_array_index && this.results_data[b.group_array_index] && (e = this.results_data[b.group_array_index], 0 === e.active_options && e.search_match && (d += 1), e.active_options += 1), b.search_text = b.group ? b.label : b.html, (!b.group || this.group_search) && (b.search_match = this.search_string_match(b.search_text, c), b.search_match && !b.group && (d += 1), b.search_match ? (f.length && (g = b.search_text.search(i), h = b.search_text.substr(0, g + f.length) + "</em>" + b.search_text.substr(g + f.length), b.search_text = h.substr(0, g) + "<em>" + h.substr(g)), null != e && (e.group_match = !0)) : null != b.group_array_index && this.results_data[b.group_array_index].search_match && (b.search_match = !0)));
            return this.result_clear_highlight(), 1 > d && f.length ? (this.update_results_content(""), this.no_results(f)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
        }, AbstractChosen.prototype.get_search_regex = function (a) {
            var b;
            return b = this.search_contains ? "" : "^", new RegExp(b + a, "i")
        }, AbstractChosen.prototype.search_string_match = function (a, b) {
            var c, d, e, f;
            if (b.test(a))return !0;
            if (this.enable_split_word_search && (a.indexOf(" ") >= 0 || 0 === a.indexOf("[")) && (d = a.replace(/\[|\]/g, "").split(" "), d.length))for (e = 0, f = d.length; f > e; e++)if (c = d[e], b.test(c))return !0
        }, AbstractChosen.prototype.choices_count = function () {
            var a, b, c, d;
            if (null != this.selected_option_count)return this.selected_option_count;
            for (this.selected_option_count = 0, d = this.form_field.options, b = 0, c = d.length; c > b; b++)a = d[b], a.selected && (this.selected_option_count += 1);
            return this.selected_option_count
        }, AbstractChosen.prototype.choices_click = function (a) {
            return a.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
        }, AbstractChosen.prototype.keyup_checker = function (a) {
            var b, c;
            switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), b) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0)return this.keydown_backstroke();
                    if (!this.pending_backstroke)return this.result_clear_highlight(), this.results_search();
                    break;
                case 13:
                    if (a.preventDefault(), this.results_showing)return this.result_select(a);
                    break;
                case 27:
                    return this.results_showing && this.results_hide(), !0;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search()
            }
        }, AbstractChosen.prototype.clipboard_event_checker = function () {
            var a = this;
            return setTimeout(function () {
                return a.results_search()
            }, 50)
        }, AbstractChosen.prototype.container_width = function () {
            return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
        }, AbstractChosen.prototype.include_option_in_results = function (a) {
            return this.is_multiple && !this.display_selected_options && a.selected ? !1 : !this.display_disabled_options && a.disabled ? !1 : a.empty ? !1 : !0
        }, AbstractChosen.prototype.search_results_touchstart = function (a) {
            return this.touch_started = !0, this.search_results_mouseover(a)
        }, AbstractChosen.prototype.search_results_touchmove = function (a) {
            return this.touch_started = !1, this.search_results_mouseout(a)
        }, AbstractChosen.prototype.search_results_touchend = function (a) {
            return this.touch_started ? this.search_results_mouseup(a) : void 0
        }, AbstractChosen.prototype.outerHTML = function (a) {
            var b;
            return a.outerHTML ? a.outerHTML : (b = document.createElement("div"), b.appendChild(a), b.innerHTML)
        }, AbstractChosen.browser_is_supported = function () {
            return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : !0
        }, AbstractChosen.default_multiple_text = "Select Some Options", AbstractChosen.default_single_text = "Select an Option", AbstractChosen.default_no_result_text = "No results match", AbstractChosen
    }(), a = jQuery, a.fn.extend({
        chosen: function (b) {
            return AbstractChosen.browser_is_supported() ? this.each(function () {
                var c, d;
                c = a(this), d = c.data("chosen"), "destroy" === b && d instanceof Chosen ? d.destroy() : d instanceof Chosen || c.data("chosen", new Chosen(this, b))
            }) : this
        }
    }), Chosen = function (c) {
        function Chosen() {
            return b = Chosen.__super__.constructor.apply(this, arguments)
        }

        return d(Chosen, c), Chosen.prototype.setup = function () {
            return this.form_field_jq = a(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
        }, Chosen.prototype.set_up_html = function () {
            var b, c;
            return b = ["chosen-container"], b.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && b.push(this.form_field.className), this.is_rtl && b.push("chosen-rtl"), c = {
                "class": b.join(" "),
                style: "width: " + this.container_width() + ";",
                title: this.form_field.title
            }, this.form_field.id.length && (c.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = a("<div />", c), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior()
        }, Chosen.prototype.on_ready = function () {
            return this.form_field_jq.trigger("chosen:ready", {chosen: this})
        }, Chosen.prototype.register_observers = function () {
            var a = this;
            return this.container.bind("touchstart.chosen", function (b) {
                return a.container_mousedown(b), b.preventDefault()
            }), this.container.bind("touchend.chosen", function (b) {
                return a.container_mouseup(b), b.preventDefault()
            }), this.container.bind("mousedown.chosen", function (b) {
                a.container_mousedown(b)
            }), this.container.bind("mouseup.chosen", function (b) {
                a.container_mouseup(b)
            }), this.container.bind("mouseenter.chosen", function (b) {
                a.mouse_enter(b)
            }), this.container.bind("mouseleave.chosen", function (b) {
                a.mouse_leave(b)
            }), this.search_results.bind("mouseup.chosen", function (b) {
                a.search_results_mouseup(b)
            }), this.search_results.bind("mouseover.chosen", function (b) {
                a.search_results_mouseover(b)
            }), this.search_results.bind("mouseout.chosen", function (b) {
                a.search_results_mouseout(b)
            }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function (b) {
                a.search_results_mousewheel(b)
            }), this.search_results.bind("touchstart.chosen", function (b) {
                a.search_results_touchstart(b)
            }), this.search_results.bind("touchmove.chosen", function (b) {
                a.search_results_touchmove(b)
            }), this.search_results.bind("touchend.chosen", function (b) {
                a.search_results_touchend(b)
            }), this.form_field_jq.bind("chosen:updated.chosen", function (b) {
                a.results_update_field(b)
            }), this.form_field_jq.bind("chosen:activate.chosen", function (b) {
                a.activate_field(b)
            }), this.form_field_jq.bind("chosen:open.chosen", function (b) {
                a.container_mousedown(b)
            }), this.form_field_jq.bind("chosen:close.chosen", function (b) {
                a.input_blur(b)
            }), this.search_field.bind("blur.chosen", function (b) {
                a.input_blur(b)
            }), this.search_field.bind("keyup.chosen", function (b) {
                a.keyup_checker(b)
            }), this.search_field.bind("keydown.chosen", function (b) {
                a.keydown_checker(b)
            }), this.search_field.bind("focus.chosen", function (b) {
                a.input_focus(b)
            }), this.search_field.bind("cut.chosen", function (b) {
                a.clipboard_event_checker(b)
            }), this.search_field.bind("paste.chosen", function (b) {
                a.clipboard_event_checker(b)
            }), this.is_multiple ? this.search_choices.bind("click.chosen", function (b) {
                a.choices_click(b)
            }) : this.container.bind("click.chosen", function (a) {
                a.preventDefault()
            })
        }, Chosen.prototype.destroy = function () {
            return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
        }, Chosen.prototype.search_field_disabled = function () {
            return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
        }, Chosen.prototype.container_mousedown = function (b) {
            return this.is_disabled || (b && "mousedown" === b.type && !this.results_showing && b.preventDefault(), null != b && a(b.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !b || a(b.target)[0] !== this.selected_item[0] && !a(b.target).parents("a.chosen-single").length || (b.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), a(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
        }, Chosen.prototype.container_mouseup = function (a) {
            return "ABBR" !== a.target.nodeName || this.is_disabled ? void 0 : this.results_reset(a)
        }, Chosen.prototype.search_results_mousewheel = function (a) {
            var b;
            return a.originalEvent && (b = a.originalEvent.deltaY || -a.originalEvent.wheelDelta || a.originalEvent.detail), null != b ? (a.preventDefault(), "DOMMouseScroll" === a.type && (b = 40 * b), this.search_results.scrollTop(b + this.search_results.scrollTop())) : void 0
        }, Chosen.prototype.blur_test = function () {
            return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
        }, Chosen.prototype.close_field = function () {
            return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
        }, Chosen.prototype.activate_field = function () {
            return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
        }, Chosen.prototype.test_active_click = function (b) {
            var c;
            return c = a(b.target).closest(".chosen-container"), c.length && this.container[0] === c[0] ? this.active_field = !0 : this.close_field()
        }, Chosen.prototype.results_build = function () {
            return this.parsing = !0, this.selected_option_count = null, this.results_data = SelectParser.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({first: !0})), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
        }, Chosen.prototype.result_do_highlight = function (a) {
            var b, c, d, e, f;
            if (a.length) {
                if (this.result_clear_highlight(), this.result_highlight = a, this.result_highlight.addClass("highlighted"), d = parseInt(this.search_results.css("maxHeight"), 10), f = this.search_results.scrollTop(), e = d + f, c = this.result_highlight.position().top + this.search_results.scrollTop(), b = c + this.result_highlight.outerHeight(), b >= e)return this.search_results.scrollTop(b - d > 0 ? b - d : 0);
                if (f > c)return this.search_results.scrollTop(c)
            }
        }, Chosen.prototype.result_clear_highlight = function () {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
        }, Chosen.prototype.results_show = function () {
            return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {chosen: this}), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {chosen: this}))
        }, Chosen.prototype.update_results_content = function (a) {
            return this.search_results.html(a)
        }, Chosen.prototype.results_hide = function () {
            return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {chosen: this})), this.results_showing = !1
        }, Chosen.prototype.set_tab_index = function () {
            var a;
            return this.form_field.tabIndex ? (a = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = a) : void 0
        }, Chosen.prototype.set_label_behavior = function () {
            var b = this;
            return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = a("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function (a) {
                return b.is_multiple ? b.container_mousedown(a) : b.activate_field()
            }) : void 0
        }, Chosen.prototype.show_search_field_default = function () {
            return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
        }, Chosen.prototype.search_results_mouseup = function (b) {
            var c;
            return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c.length ? (this.result_highlight = c, this.result_select(b), this.search_field.focus()) : void 0
        }, Chosen.prototype.search_results_mouseover = function (b) {
            var c;
            return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c ? this.result_do_highlight(c) : void 0
        }, Chosen.prototype.search_results_mouseout = function (b) {
            return a(b.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
        }, Chosen.prototype.choice_build = function (b) {
            var c, d, e = this;
            return c = a("<li />", {"class": "search-choice"}).html("<span>" + this.choice_label(b) + "</span>"), b.disabled ? c.addClass("search-choice-disabled") : (d = a("<a />", {
                "class": "search-choice-close",
                "data-option-array-index": b.array_index
            }), d.bind("click.chosen", function (a) {
                return e.choice_destroy_link_click(a)
            }), c.append(d)), this.search_container.before(c)
        }, Chosen.prototype.choice_destroy_link_click = function (b) {
            return b.preventDefault(), b.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(a(b.target))
        }, Chosen.prototype.choice_destroy = function (a) {
            return this.result_deselect(a[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), a.parents("li").first().remove(), this.search_field_scale()) : void 0
        }, Chosen.prototype.results_reset = function () {
            return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
        }, Chosen.prototype.results_reset_cleanup = function () {
            return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
        }, Chosen.prototype.result_select = function (a) {
            var b, c;
            return this.result_highlight ? (b = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {chosen: this}), !1) : (this.is_multiple ? b.removeClass("active-result") : this.reset_single_select_options(), c = this.results_data[b[0].getAttribute("data-option-array-index")], c.selected = !0, this.form_field.options[c.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(c) : this.single_set_selected_text(this.choice_label(c)), (a.metaKey || a.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {selected: this.form_field.options[c.options_index].value}), this.current_selectedIndex = this.form_field.selectedIndex, a.preventDefault(), this.search_field_scale())) : void 0
        }, Chosen.prototype.single_set_selected_text = function (a) {
            return null == a && (a = this.default_text), a === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(a)
        }, Chosen.prototype.result_deselect = function (a) {
            var b;
            return b = this.results_data[a], this.form_field.options[b.options_index].disabled ? !1 : (b.selected = !1, this.form_field.options[b.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {deselected: this.form_field.options[b.options_index].value}), this.search_field_scale(), !0)
        }, Chosen.prototype.single_deselect_control_build = function () {
            return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
        }, Chosen.prototype.get_search_text = function () {
            return a("<div/>").text(a.trim(this.search_field.val())).html()
        }, Chosen.prototype.winnow_results_set_highlight = function () {
            var a, b;
            return b = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), a = b.length ? b.first() : this.search_results.find(".active-result").first(), null != a ? this.result_do_highlight(a) : void 0
        }, Chosen.prototype.no_results = function (b) {
            var c;
            return c = a('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), c.find("span").first().html(b), this.search_results.append(c), this.form_field_jq.trigger("chosen:no_results", {chosen: this})
        }, Chosen.prototype.no_results_clear = function () {
            return this.search_results.find(".no-results").remove()
        }, Chosen.prototype.keydown_arrow = function () {
            var a;
            return this.results_showing && this.result_highlight ? (a = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(a) : void 0 : this.results_show()
        }, Chosen.prototype.keyup_arrow = function () {
            var a;
            return this.results_showing || this.is_multiple ? this.result_highlight ? (a = this.result_highlight.prevAll("li.active-result"), a.length ? this.result_do_highlight(a.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
        }, Chosen.prototype.keydown_backstroke = function () {
            var a;
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (a = this.search_container.siblings("li.search-choice").last(), a.length && !a.hasClass("search-choice-disabled") ? (this.pending_backstroke = a, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
        }, Chosen.prototype.clear_backstroke = function () {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
        }, Chosen.prototype.keydown_checker = function (a) {
            var b, c;
            switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), 8 !== b && this.pending_backstroke && this.clear_backstroke(), b) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    this.results_showing && !this.is_multiple && this.result_select(a), this.mouse_on_container = !1;
                    break;
                case 13:
                    this.results_showing && a.preventDefault();
                    break;
                case 32:
                    this.disable_search && a.preventDefault();
                    break;
                case 38:
                    a.preventDefault(), this.keyup_arrow();
                    break;
                case 40:
                    a.preventDefault(), this.keydown_arrow()
            }
        }, Chosen.prototype.search_field_scale = function () {
            var b, c, d, e, f, g, h, i, j;
            if (this.is_multiple) {
                for (d = 0, h = 0, f = "position:absolute; left: -1000px; top: -1000px; display:none;", g = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], i = 0, j = g.length; j > i; i++)e = g[i], f += e + ":" + this.search_field.css(e) + ";";
                return b = a("<div />", {style: f}), b.text(this.search_field.val()), a("body").append(b), h = b.width() + 25, b.remove(), c = this.container.outerWidth(), h > c - 10 && (h = c - 10), this.search_field.css({width: h + "px"})
            }
        }, Chosen
    }(AbstractChosen)
}).call(this);

/*!
 * Magnific Popup v0.9.9 by Dmitry Semenov
 *
 * http://bit.ly/magnific-popup#build=inline+image+ajax+iframe+gallery+retina+imagezoom+fastclick
 */
(function (a) {
    var b = "Close", c = "BeforeClose", d = "AfterClose", e = "BeforeAppend", f = "MarkupParse", g = "Open", h = "Change", i = "mfp", j = "." + i, k = "mfp-ready", l = "mfp-removing", m = "mfp-prevent-close", n, o = function () {
    }, p = !!window.jQuery, q, r = a(window), s, t, u, v, w, x = function (a, b) {
        n.ev.on(i + a + j, b)
    }, y = function (b, c, d, e) {
        var f = document.createElement("div");
        return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
    }, z = function (b, c) {
        n.ev.triggerHandler(i + b, c), n.st.callbacks && (b = b.charAt(0).toLowerCase() + b.slice(1), n.st.callbacks[b] && n.st.callbacks[b].apply(n, a.isArray(c) ? c : [c]))
    }, A = function (b) {
        if (b !== w || !n.currTemplate.closeBtn)n.currTemplate.closeBtn = a(n.st.closeMarkup.replace("%title%", n.st.tClose)), w = b;
        return n.currTemplate.closeBtn
    }, B = function () {
        a.magnificPopup.instance || (n = new o, n.init(), a.magnificPopup.instance = n)
    }, C = function () {
        var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"];
        if (a.transition !== undefined)return !0;
        while (b.length)if (b.pop() + "Transition"in a)return !0;
        return !1
    };
    o.prototype = {
        constructor: o, init: function () {
            var b = navigator.appVersion;
            n.isIE7 = b.indexOf("MSIE 7.") !== -1, n.isIE8 = b.indexOf("MSIE 8.") !== -1, n.isLowIE = n.isIE7 || n.isIE8, n.isAndroid = /android/gi.test(b), n.isIOS = /iphone|ipad|ipod/gi.test(b), n.supportsTransition = C(), n.probablyMobile = n.isAndroid || n.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), t = a(document), n.popupsCache = {}
        }, open: function (b) {
            s || (s = a(document.body));
            var c;
            if (b.isObj === !1) {
                n.items = b.items.toArray(), n.index = 0;
                var d = b.items, e;
                for (c = 0; c < d.length; c++) {
                    e = d[c], e.parsed && (e = e.el[0]);
                    if (e === b.el[0]) {
                        n.index = c;
                        break
                    }
                }
            } else n.items = a.isArray(b.items) ? b.items : [b.items], n.index = b.index || 0;
            if (n.isOpen) {
                n.updateItemHTML();
                return
            }
            n.types = [], v = "", b.mainEl && b.mainEl.length ? n.ev = b.mainEl.eq(0) : n.ev = t, b.key ? (n.popupsCache[b.key] || (n.popupsCache[b.key] = {}), n.currTemplate = n.popupsCache[b.key]) : n.currTemplate = {}, n.st = a.extend(!0, {}, a.magnificPopup.defaults, b), n.fixedContentPos = n.st.fixedContentPos === "auto" ? !n.probablyMobile : n.st.fixedContentPos, n.st.modal && (n.st.closeOnContentClick = !1, n.st.closeOnBgClick = !1, n.st.showCloseBtn = !1, n.st.enableEscapeKey = !1), n.bgOverlay || (n.bgOverlay = y("bg").on("click" + j, function () {
                n.close()
            }), n.wrap = y("wrap").attr("tabindex", -1).on("click" + j, function (a) {
                n._checkIfClose(a.target) && n.close()
            }), n.container = y("container", n.wrap)), n.contentContainer = y("content"), n.st.preloader && (n.preloader = y("preloader", n.container, n.st.tLoading));
            var h = a.magnificPopup.modules;
            for (c = 0; c < h.length; c++) {
                var i = h[c];
                i = i.charAt(0).toUpperCase() + i.slice(1), n["init" + i].call(n)
            }
            z("BeforeOpen"), n.st.showCloseBtn && (n.st.closeBtnInside ? (x(f, function (a, b, c, d) {
                c.close_replaceWith = A(d.type)
            }), v += " mfp-close-btn-in") : n.wrap.append(A())), n.st.alignTop && (v += " mfp-align-top"), n.fixedContentPos ? n.wrap.css({
                overflow: n.st.overflowY,
                overflowX: "hidden",
                overflowY: n.st.overflowY
            }) : n.wrap.css({
                top: r.scrollTop(),
                position: "absolute"
            }), (n.st.fixedBgPos === !1 || n.st.fixedBgPos === "auto" && !n.fixedContentPos) && n.bgOverlay.css({
                height: t.height(),
                position: "absolute"
            }), n.st.enableEscapeKey && t.on("keyup" + j, function (a) {
                a.keyCode === 27 && n.close()
            }), r.on("resize" + j, function () {
                n.updateSize()
            }), n.st.closeOnContentClick || (v += " mfp-auto-cursor"), v && n.wrap.addClass(v);
            var l = n.wH = r.height(), m = {};
            if (n.fixedContentPos && n._hasScrollBar(l)) {
                var o = n._getScrollbarSize();
                o && (m.marginRight = o)
            }
            n.fixedContentPos && (n.isIE7 ? a("body, html").css("overflow", "hidden") : m.overflow = "hidden");
            var p = n.st.mainClass;
            return n.isIE7 && (p += " mfp-ie7"), p && n._addClassToMFP(p), n.updateItemHTML(), z("BuildControls"), a("html").css(m), n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo || s), n._lastFocusedEl = document.activeElement, setTimeout(function () {
                n.content ? (n._addClassToMFP(k), n._setFocus()) : n.bgOverlay.addClass(k), t.on("focusin" + j, n._onFocusIn)
            }, 16), n.isOpen = !0, n.updateSize(l), z(g), b
        }, close: function () {
            if (!n.isOpen)return;
            z(c), n.isOpen = !1, n.st.removalDelay && !n.isLowIE && n.supportsTransition ? (n._addClassToMFP(l), setTimeout(function () {
                n._close()
            }, n.st.removalDelay)) : n._close()
        }, _close: function () {
            z(b);
            var c = l + " " + k + " ";
            n.bgOverlay.detach(), n.wrap.detach(), n.container.empty(), n.st.mainClass && (c += n.st.mainClass + " "), n._removeClassFromMFP(c);
            if (n.fixedContentPos) {
                var e = {marginRight: ""};
                n.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            t.off("keyup" + j + " focusin" + j), n.ev.off(j), n.wrap.attr("class", "mfp-wrap").removeAttr("style"), n.bgOverlay.attr("class", "mfp-bg"), n.container.attr("class", "mfp-container"), n.st.showCloseBtn && (!n.st.closeBtnInside || n.currTemplate[n.currItem.type] === !0) && n.currTemplate.closeBtn && n.currTemplate.closeBtn.detach(), n._lastFocusedEl && a(n._lastFocusedEl).focus(), n.currItem = null, n.content = null, n.currTemplate = null, n.prevHeight = 0, z(d)
        }, updateSize: function (a) {
            if (n.isIOS) {
                var b = document.documentElement.clientWidth / window.innerWidth, c = window.innerHeight * b;
                n.wrap.css("height", c), n.wH = c
            } else n.wH = a || r.height();
            n.fixedContentPos || n.wrap.css("height", n.wH), z("Resize")
        }, updateItemHTML: function () {
            var b = n.items[n.index];
            n.contentContainer.detach(), n.content && n.content.detach(), b.parsed || (b = n.parseEl(n.index));
            var c = b.type;
            z("BeforeChange", [n.currItem ? n.currItem.type : "", c]), n.currItem = b;
            if (!n.currTemplate[c]) {
                var d = n.st[c] ? n.st[c].markup : !1;
                z("FirstMarkupParse", d), d ? n.currTemplate[c] = a(d) : n.currTemplate[c] = !0
            }
            u && u !== b.type && n.container.removeClass("mfp-" + u + "-holder");
            var e = n["get" + c.charAt(0).toUpperCase() + c.slice(1)](b, n.currTemplate[c]);
            n.appendContent(e, c), b.preloaded = !0, z(h, b), u = b.type, n.container.prepend(n.contentContainer), z("AfterChange")
        }, appendContent: function (a, b) {
            n.content = a, a ? n.st.showCloseBtn && n.st.closeBtnInside && n.currTemplate[b] === !0 ? n.content.find(".mfp-close").length || n.content.append(A()) : n.content = a : n.content = "", z(e), n.container.addClass("mfp-" + b + "-holder"), n.contentContainer.append(n.content)
        }, parseEl: function (b) {
            var c = n.items[b], d;
            c.tagName ? c = {el: a(c)} : (d = c.type, c = {data: c, src: c.src});
            if (c.el) {
                var e = n.types;
                for (var f = 0; f < e.length; f++)if (c.el.hasClass("mfp-" + e[f])) {
                    d = e[f];
                    break
                }
                c.src = c.el.attr("data-mfp-src"), c.src || (c.src = c.el.attr("href"))
            }
            return c.type = d || n.st.type || "inline", c.index = b, c.parsed = !0, n.items[b] = c, z("ElementParse", c), n.items[b]
        }, addGroup: function (a, b) {
            var c = function (c) {
                c.mfpEl = this, n._openClick(c, a, b)
            };
            b || (b = {});
            var d = "click.magnificPopup";
            b.mainEl = a, b.items ? (b.isObj = !0, a.off(d).on(d, c)) : (b.isObj = !1, b.delegate ? a.off(d).on(d, b.delegate, c) : (b.items = a, a.off(d).on(d, c)))
        }, _openClick: function (b, c, d) {
            var e = d.midClick !== undefined ? d.midClick : a.magnificPopup.defaults.midClick;
            if (!e && (b.which === 2 || b.ctrlKey || b.metaKey))return;
            var f = d.disableOn !== undefined ? d.disableOn : a.magnificPopup.defaults.disableOn;
            if (f)if (a.isFunction(f)) {
                if (!f.call(n))return !0
            } else if (r.width() < f)return !0;
            b.type && (b.preventDefault(), n.isOpen && b.stopPropagation()), d.el = a(b.mfpEl), d.delegate && (d.items = c.find(d.delegate)), n.open(d)
        }, updateStatus: function (a, b) {
            if (n.preloader) {
                q !== a && n.container.removeClass("mfp-s-" + q), !b && a === "loading" && (b = n.st.tLoading);
                var c = {status: a, text: b};
                z("UpdateStatus", c), a = c.status, b = c.text, n.preloader.html(b), n.preloader.find("a").on("click", function (a) {
                    a.stopImmediatePropagation()
                }), n.container.addClass("mfp-s-" + a), q = a
            }
        }, _checkIfClose: function (b) {
            if (a(b).hasClass(m))return;
            var c = n.st.closeOnContentClick, d = n.st.closeOnBgClick;
            if (c && d)return !0;
            if (!n.content || a(b).hasClass("mfp-close") || n.preloader && b === n.preloader[0])return !0;
            if (b !== n.content[0] && !a.contains(n.content[0], b)) {
                if (d && a.contains(document, b))return !0
            } else if (c)return !0;
            return !1
        }, _addClassToMFP: function (a) {
            n.bgOverlay.addClass(a), n.wrap.addClass(a)
        }, _removeClassFromMFP: function (a) {
            this.bgOverlay.removeClass(a), n.wrap.removeClass(a)
        }, _hasScrollBar: function (a) {
            return (n.isIE7 ? t.height() : document.body.scrollHeight) > (a || r.height())
        }, _setFocus: function () {
            (n.st.focus ? n.content.find(n.st.focus).eq(0) : n.wrap).focus()
        }, _onFocusIn: function (b) {
            if (b.target !== n.wrap[0] && !a.contains(n.wrap[0], b.target))return n._setFocus(), !1
        }, _parseMarkup: function (b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), z(f, [b, c, d]), a.each(c, function (a, c) {
                if (c === undefined || c === !1)return !0;
                e = a.split("_");
                if (e.length > 1) {
                    var d = b.find(j + "-" + e[0]);
                    if (d.length > 0) {
                        var f = e[1];
                        f === "replaceWith" ? d[0] !== c[0] && d.replaceWith(c) : f === "img" ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
                    }
                } else b.find(j + "-" + a).html(c)
            })
        }, _getScrollbarSize: function () {
            if (n.scrollbarSize === undefined) {
                var a = document.createElement("div");
                a.id = "mfp-sbm", a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), n.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return n.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: o.prototype,
        modules: [],
        open: function (b, c) {
            return B(), b ? b = a.extend(!0, {}, b) : b = {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function () {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function (b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, a.fn.magnificPopup = function (b) {
        B();
        var c = a(this);
        if (typeof b == "string")if (b === "open") {
            var d, e = p ? c.data("magnificPopup") : c[0].magnificPopup, f = parseInt(arguments[1], 10) || 0;
            e.items ? d = e.items[f] : (d = c, e.delegate && (d = d.find(e.delegate)), d = d.eq(f)), n._openClick({mfpEl: d}, c, e)
        } else n.isOpen && n[b].apply(n, Array.prototype.slice.call(arguments, 1)); else b = a.extend(!0, {}, b), p ? c.data("magnificPopup", b) : c[0].magnificPopup = b, n.addGroup(c, b);
        return c
    };
    var D = "inline", E, F, G, H = function () {
        G && (F.after(G.addClass(E)).detach(), G = null)
    };
    a.magnificPopup.registerModule(D, {
        options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"},
        proto: {
            initInline: function () {
                n.types.push(D), x(b + "." + D, function () {
                    H()
                })
            }, getInline: function (b, c) {
                H();
                if (b.src) {
                    var d = n.st.inline, e = a(b.src);
                    if (e.length) {
                        var f = e[0].parentNode;
                        f && f.tagName && (F || (E = d.hiddenClass, F = y(E), E = "mfp-" + E), G = e.after(F).detach().removeClass(E)), n.updateStatus("ready")
                    } else n.updateStatus("error", d.tNotFound), e = a("<div>");
                    return b.inlineElement = e, e
                }
                return n.updateStatus("ready"), n._parseMarkup(c, {}, b), c
            }
        }
    });
    var I = "ajax", J, K = function () {
        J && s.removeClass(J)
    }, L = function () {
        K(), n.req && n.req.abort()
    };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        }, proto: {
            initAjax: function () {
                n.types.push(I), J = n.st.ajax.cursor, x(b + "." + I, L), x("BeforeChange." + I, L)
            }, getAjax: function (b) {
                J && s.addClass(J), n.updateStatus("loading");
                var c = a.extend({
                    url: b.src, success: function (c, d, e) {
                        var f = {data: c, xhr: e};
                        z("ParseAjax", f), n.appendContent(a(f.data), I), b.finished = !0, K(), n._setFocus(), setTimeout(function () {
                            n.wrap.addClass(k)
                        }, 16), n.updateStatus("ready"), z("AjaxContentAdded")
                    }, error: function () {
                        K(), b.finished = b.loadError = !0, n.updateStatus("error", n.st.ajax.tError.replace("%url%", b.src))
                    }
                }, n.st.ajax.settings);
                return n.req = a.ajax(c), ""
            }
        }
    });
    var M, N = function (b) {
        if (b.data && b.data.title !== undefined)return b.data.title;
        var c = n.st.image.titleSrc;
        if (c) {
            if (a.isFunction(c))return c.call(n, b);
            if (b.el)return b.el.attr(c) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        }, proto: {
            initImage: function () {
                var a = n.st.image, c = ".image";
                n.types.push("image"), x(g + c, function () {
                    n.currItem.type === "image" && a.cursor && s.addClass(a.cursor)
                }), x(b + c, function () {
                    a.cursor && s.removeClass(a.cursor), r.off("resize" + j)
                }), x("Resize" + c, n.resizeImage), n.isLowIE && x("AfterChange", n.resizeImage)
            }, resizeImage: function () {
                var a = n.currItem;
                if (!a || !a.img)return;
                if (n.st.image.verticalFit) {
                    var b = 0;
                    n.isLowIE && (b = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", n.wH - b)
                }
            }, _onImageHasSize: function (a) {
                a.img && (a.hasSize = !0, M && clearInterval(M), a.isCheckingImgSize = !1, z("ImageHasSize", a), a.imgHidden && (n.content && n.content.removeClass("mfp-loading"), a.imgHidden = !1))
            }, findImageSize: function (a) {
                var b = 0, c = a.img[0], d = function (e) {
                    M && clearInterval(M), M = setInterval(function () {
                        if (c.naturalWidth > 0) {
                            n._onImageHasSize(a);
                            return
                        }
                        b > 200 && clearInterval(M), b++, b === 3 ? d(10) : b === 40 ? d(50) : b === 100 && d(500)
                    }, e)
                };
                d(1)
            }, getImage: function (b, c) {
                var d = 0, e = function () {
                    b && (b.img[0].complete ? (b.img.off(".mfploader"), b === n.currItem && (n._onImageHasSize(b), n.updateStatus("ready")), b.hasSize = !0, b.loaded = !0, z("ImageLoadComplete")) : (d++, d < 200 ? setTimeout(e, 100) : f()))
                }, f = function () {
                    b && (b.img.off(".mfploader"), b === n.currItem && (n._onImageHasSize(b), n.updateStatus("error", g.tError.replace("%url%", b.src))), b.hasSize = !0, b.loaded = !0, b.loadError = !0)
                }, g = n.st.image, h = c.find(".mfp-img");
                if (h.length) {
                    var i = document.createElement("img");
                    i.className = "mfp-img", b.img = a(i).on("load.mfploader", e).on("error.mfploader", f), i.src = b.src, h.is("img") && (b.img = b.img.clone()), i = b.img[0], i.naturalWidth > 0 ? b.hasSize = !0 : i.width || (b.hasSize = !1)
                }
                return n._parseMarkup(c, {
                    title: N(b),
                    img_replaceWith: b.img
                }, b), n.resizeImage(), b.hasSize ? (M && clearInterval(M), b.loadError ? (c.addClass("mfp-loading"), n.updateStatus("error", g.tError.replace("%url%", b.src))) : (c.removeClass("mfp-loading"), n.updateStatus("ready")), c) : (n.updateStatus("loading"), b.loading = !0, b.hasSize || (b.imgHidden = !0, c.addClass("mfp-loading"), n.findImageSize(b)), c)
            }
        }
    });
    var O, P = function () {
        return O === undefined && (O = document.createElement("p").style.MozTransform !== undefined), O
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (a) {
                return a.is("img") ? a : a.find("img")
            }
        }, proto: {
            initZoom: function () {
                var a = n.st.zoom, d = ".zoom", e;
                if (!a.enabled || !n.supportsTransition)return;
                var f = a.duration, g = function (b) {
                    var c = b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d = "all " + a.duration / 1e3 + "s " + a.easing, e = {
                        position: "fixed",
                        zIndex: 9999,
                        left: 0,
                        top: 0,
                        "-webkit-backface-visibility": "hidden"
                    }, f = "transition";
                    return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, c.css(e), c
                }, h = function () {
                    n.content.css("visibility", "visible")
                }, i, j;
                x("BuildControls" + d, function () {
                    if (n._allowZoom()) {
                        clearTimeout(i), n.content.css("visibility", "hidden"), e = n._getItemToZoom();
                        if (!e) {
                            h();
                            return
                        }
                        j = g(e), j.css(n._getOffset()), n.wrap.append(j), i = setTimeout(function () {
                            j.css(n._getOffset(!0)), i = setTimeout(function () {
                                h(), setTimeout(function () {
                                    j.remove(), e = j = null, z("ZoomAnimationEnded")
                                }, 16)
                            }, f)
                        }, 16)
                    }
                }), x(c + d, function () {
                    if (n._allowZoom()) {
                        clearTimeout(i), n.st.removalDelay = f;
                        if (!e) {
                            e = n._getItemToZoom();
                            if (!e)return;
                            j = g(e)
                        }
                        j.css(n._getOffset(!0)), n.wrap.append(j), n.content.css("visibility", "hidden"), setTimeout(function () {
                            j.css(n._getOffset())
                        }, 16)
                    }
                }), x(b + d, function () {
                    n._allowZoom() && (h(), j && j.remove(), e = null)
                })
            }, _allowZoom: function () {
                return n.currItem.type === "image"
            }, _getItemToZoom: function () {
                return n.currItem.hasSize ? n.currItem.img : !1
            }, _getOffset: function (b) {
                var c;
                b ? c = n.currItem.img : c = n.st.zoom.opener(n.currItem.el || n.currItem);
                var d = c.offset(), e = parseInt(c.css("padding-top"), 10), f = parseInt(c.css("padding-bottom"), 10);
                d.top -= a(window).scrollTop() - e;
                var g = {width: c.width(), height: (p ? c.innerHeight() : c[0].offsetHeight) - f - e};
                return P() ? g["-moz-transform"] = g.transform = "translate(" + d.left + "px," + d.top + "px)" : (g.left = d.left, g.top = d.top), g
            }
        }
    });
    var Q = "iframe", R = "//about:blank", S = function (a) {
        if (n.currTemplate[Q]) {
            var b = n.currTemplate[Q].find("iframe");
            b.length && (a || (b[0].src = R), n.isIE8 && b.css("display", a ? "block" : "none"))
        }
    };
    a.magnificPopup.registerModule(Q, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"},
                vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
                gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
            }
        }, proto: {
            initIframe: function () {
                n.types.push(Q), x("BeforeChange", function (a, b, c) {
                    b !== c && (b === Q ? S() : c === Q && S(!0))
                }), x(b + "." + Q, function () {
                    S()
                })
            }, getIframe: function (b, c) {
                var d = b.src, e = n.st.iframe;
                a.each(e.patterns, function () {
                    if (d.indexOf(this.index) > -1)return this.id && (typeof this.id == "string" ? d = d.substr(d.lastIndexOf(this.id) + this.id.length, d.length) : d = this.id.call(this, d)), d = this.src.replace("%id%", d), !1
                });
                var f = {};
                return e.srcAction && (f[e.srcAction] = d), n._parseMarkup(c, f, b), n.updateStatus("ready"), c
            }
        }
    });
    var T = function (a) {
        var b = n.items.length;
        return a > b - 1 ? a - b : a < 0 ? b + a : a
    }, U = function (a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        }, proto: {
            initGallery: function () {
                var c = n.st.gallery, d = ".mfp-gallery", e = Boolean(a.fn.mfpFastClick);
                n.direction = !0;
                if (!c || !c.enabled)return !1;
                v += " mfp-gallery", x(g + d, function () {
                    c.navigateByImgClick && n.wrap.on("click" + d, ".mfp-img", function () {
                        if (n.items.length > 1)return n.next(), !1
                    }), t.on("keydown" + d, function (a) {
                        a.keyCode === 37 ? n.prev() : a.keyCode === 39 && n.next()
                    })
                }), x("UpdateStatus" + d, function (a, b) {
                    b.text && (b.text = U(b.text, n.currItem.index, n.items.length))
                }), x(f + d, function (a, b, d, e) {
                    var f = n.items.length;
                    d.counter = f > 1 ? U(c.tCounter, e.index, f) : ""
                }), x("BuildControls" + d, function () {
                    if (n.items.length > 1 && c.arrows && !n.arrowLeft) {
                        var b = c.arrowMarkup, d = n.arrowLeft = a(b.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(m), f = n.arrowRight = a(b.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(m), g = e ? "mfpFastClick" : "click";
                        d[g](function () {
                            n.prev()
                        }), f[g](function () {
                            n.next()
                        }), n.isIE7 && (y("b", d[0], !1, !0), y("a", d[0], !1, !0), y("b", f[0], !1, !0), y("a", f[0], !1, !0)), n.container.append(d.add(f))
                    }
                }), x(h + d, function () {
                    n._preloadTimeout && clearTimeout(n._preloadTimeout), n._preloadTimeout = setTimeout(function () {
                        n.preloadNearbyImages(), n._preloadTimeout = null
                    }, 16)
                }), x(b + d, function () {
                    t.off(d), n.wrap.off("click" + d), n.arrowLeft && e && n.arrowLeft.add(n.arrowRight).destroyMfpFastClick(), n.arrowRight = n.arrowLeft = null
                })
            }, next: function () {
                n.direction = !0, n.index = T(n.index + 1), n.updateItemHTML()
            }, prev: function () {
                n.direction = !1, n.index = T(n.index - 1), n.updateItemHTML()
            }, goTo: function (a) {
                n.direction = a >= n.index, n.index = a, n.updateItemHTML()
            }, preloadNearbyImages: function () {
                var a = n.st.gallery.preload, b = Math.min(a[0], n.items.length), c = Math.min(a[1], n.items.length), d;
                for (d = 1; d <= (n.direction ? c : b); d++)n._preloadItem(n.index + d);
                for (d = 1; d <= (n.direction ? b : c); d++)n._preloadItem(n.index - d)
            }, _preloadItem: function (b) {
                b = T(b);
                if (n.items[b].preloaded)return;
                var c = n.items[b];
                c.parsed || (c = n.parseEl(b)), z("LazyLoad", c), c.type === "image" && (c.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
                    c.hasSize = !0
                }).on("error.mfploader", function () {
                    c.hasSize = !0, c.loadError = !0, z("LazyLoadError", c)
                }).attr("src", c.src)), c.preloaded = !0
            }
        }
    });
    var V = "retina";
    a.magnificPopup.registerModule(V, {
        options: {
            replaceSrc: function (a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return "@2x" + a
                })
            }, ratio: 1
        }, proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var a = n.st.retina, b = a.ratio;
                    b = isNaN(b) ? b() : b, b > 1 && (x("ImageHasSize." + V, function (a, c) {
                        c.img.css({"max-width": c.img[0].naturalWidth / b, width: "100%"})
                    }), x("ElementParse." + V, function (c, d) {
                        d.src = a.replaceSrc(d, b)
                    }))
                }
            }
        }
    }), function () {
        var b = 1e3, c = "ontouchstart"in window, d = function () {
            r.off("touchmove" + f + " touchend" + f)
        }, e = "mfpFastClick", f = "." + e;
        a.fn.mfpFastClick = function (e) {
            return a(this).each(function () {
                var g = a(this), h;
                if (c) {
                    var i, j, k, l, m, n;
                    g.on("touchstart" + f, function (a) {
                        l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, r.on("touchmove" + f, function (a) {
                            m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0];
                            if (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10)l = !0, d()
                        }).on("touchend" + f, function (a) {
                            d();
                            if (l || n > 1)return;
                            h = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function () {
                                h = !1
                            }, b), e()
                        })
                    })
                }
                g.on("click" + f, function () {
                    h || e()
                })
            })
        }, a.fn.destroyMfpFastClick = function () {
            a(this).off("touchstart" + f + " click" + f), c && r.off("touchmove" + f + " touchend" + f)
        }
    }(), B()
})(window.jQuery || window.Zepto);

/* =========================================================
 * bootstrap-slider.js v3.0.0
 * http://www.eyecon.ro/bootstrap-slider
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
!function (t) {
    function e(e, s) {
        if (n[e]) {
            var h = i(this), a = n[e].apply(h, s);
            return "undefined" == typeof a ? t(this) : a
        }
        throw new Error("method '" + e + "()' does not exist for slider.")
    }

    function i(e) {
        var i = t(e).data("slider");
        if (i && i instanceof a)return i;
        throw new Error(h.callingContextNotSliderInstance)
    }

    function s(e) {
        var i = t(this);
        return i.each(function () {
            var i = t(this), s = i.data("slider"), h = "object" == typeof e && e;
            s && !h && (h = {}, t.each(t.fn.slider.defaults, function (t) {
                h[t] = s[t]
            })), i.data("slider", new a(this, t.extend({}, t.fn.slider.defaults, h)))
        }), i
    }

    var h = {
        formatInvalidInputErrorMsg: function (t) {
            return "Invalid input value '" + t + "' passed in"
        },
        callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
    }, a = function (e, i) {
        var s = this.element = t(e).hide(), h = t(e)[0].style.width, a = !1, n = this.element.parent();
        n.hasClass("slider") === !0 ? (a = !0, this.picker = n) : this.picker = t('<div class="slider"><div class="slider-track"><div class="slider-selection"></div><div class="slider-handle"></div><div class="slider-handle"></div></div><div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div></div>').insertBefore(this.element).append(this.element), this.id = this.element.data("slider-id") || i.id, this.id && (this.picker[0].id = this.id), "undefined" != typeof Modernizr && Modernizr.touch && (this.touchCapable = !0);
        var o = this.element.data("slider-tooltip") || i.tooltip;
        switch (this.tooltip = this.picker.find(".tooltip"), this.tooltipInner = this.tooltip.find("div.tooltip-inner"), a === !0 && (this.picker.removeClass("slider-horizontal"), this.picker.removeClass("slider-vertical"), this.tooltip.removeClass("hide")), this.orientation = this.element.data("slider-orientation") || i.orientation, this.orientation) {
            case"vertical":
                this.picker.addClass("slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight", this.tooltip.addClass("right")[0].style.left = "100%";
                break;
            default:
                this.picker.addClass("slider-horizontal").css("width", h), this.orientation = "horizontal", this.stylePos = "left", this.mousePos = "pageX", this.sizePos = "offsetWidth", this.tooltip.addClass("top")[0].style.top = -this.tooltip.outerHeight() - 14 + "px"
        }
        var r = this;
        t.each(["min", "max", "step", "value"], function (t, e) {
            r[e] = "undefined" != typeof s.data("slider-" + e) ? s.data("slider-" + e) : "undefined" != typeof i[e] ? i[e] : "undefined" != typeof s.prop(e) ? s.prop(e) : 0
        }), this.value instanceof Array ? a && !this.range ? this.value = this.value[0] : this.range = !0 : this.range && (this.value = [this.value, this.max]), this.selection = this.element.data("slider-selection") || i.selection, this.selectionEl = this.picker.find(".slider-selection"), "none" === this.selection && this.selectionEl.addClass("hide"), this.selectionElStyle = this.selectionEl[0].style, this.handle1 = this.picker.find(".slider-handle:first"), this.handle1Stype = this.handle1[0].style, this.handle2 = this.picker.find(".slider-handle:last"), this.handle2Stype = this.handle2[0].style, a === !0 && (this.handle1.removeClass("round triangle"), this.handle2.removeClass("round triangle hide"));
        var l = this.element.data("slider-handle") || i.handle;
        switch (l) {
            case"round":
                this.handle1.addClass("round"), this.handle2.addClass("round");
                break;
            case"triangle":
                this.handle1.addClass("triangle"), this.handle2.addClass("triangle")
        }
        this.range ? (this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0])), this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]))) : (this.value = [Math.max(this.min, Math.min(this.max, this.value))], this.handle2.addClass("hide"), this.value[1] = "after" === this.selection ? this.max : this.min), this.diff = this.max - this.min, this.percentage = [100 * (this.value[0] - this.min) / this.diff, 100 * (this.value[1] - this.min) / this.diff, 100 * this.step / this.diff], this.offset = this.picker.offset(), this.size = this.picker[0][this.sizePos], this.formater = i.formater, this.reversed = this.element.data("slider-reversed") || i.reversed, this.layout(), this.handle1.on({keydown: t.proxy(this.keydown, this, 0)}), this.handle2.on({keydown: t.proxy(this.keydown, this, 1)}), this.picker.on(this.touchCapable ? {touchstart: t.proxy(this.mousedown, this)} : {mousedown: t.proxy(this.mousedown, this)}), "hide" === o ? this.tooltip.addClass("hide") : "always" === o ? (this.showTooltip(), this.alwaysShowTooltip = !0) : (this.picker.on({
            mouseenter: t.proxy(this.showTooltip, this),
            mouseleave: t.proxy(this.hideTooltip, this)
        }), this.handle1.on({
            focus: t.proxy(this.showTooltip, this),
            blur: t.proxy(this.hideTooltip, this)
        }), this.handle2.on({
            focus: t.proxy(this.showTooltip, this),
            blur: t.proxy(this.hideTooltip, this)
        })), this.enabled = i.enabled && (void 0 === this.element.data("slider-enabled") || this.element.data("slider-enabled") === !0), this.enabled ? this.enable() : this.disable()
    };
    a.prototype = {
        constructor: a, over: !1, inDrag: !1, showTooltip: function () {
            this.tooltip.addClass("in"), this.over = !0
        }, hideTooltip: function () {
            this.inDrag === !1 && this.alwaysShowTooltip !== !0 && this.tooltip.removeClass("in"), this.over = !1
        }, layout: function () {
            var t;
            t = this.reversed ? [100 - this.percentage[0], this.percentage[1]] : [this.percentage[0], this.percentage[1]], this.handle1Stype[this.stylePos] = t[0] + "%", this.handle2Stype[this.stylePos] = t[1] + "%", "vertical" === this.orientation ? (this.selectionElStyle.top = Math.min(t[0], t[1]) + "%", this.selectionElStyle.height = Math.abs(t[0] - t[1]) + "%") : (this.selectionElStyle.left = Math.min(t[0], t[1]) + "%", this.selectionElStyle.width = Math.abs(t[0] - t[1]) + "%"), this.range ? (this.tooltipInner.text(this.formater(this.value[0]) + " : " + this.formater(this.value[1])), this.tooltip[0].style[this.stylePos] = this.size * (t[0] + (t[1] - t[0]) / 2) / 100 - ("vertical" === this.orientation ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + "px") : (this.tooltipInner.text(this.formater(this.value[0])), this.tooltip[0].style[this.stylePos] = this.size * t[0] / 100 - ("vertical" === this.orientation ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + "px")
        }, mousedown: function (e) {
            if (!this.isEnabled())return !1;
            this.touchCapable && "touchstart" === e.type && (e = e.originalEvent), this.triggerFocusOnHandle(), this.offset = this.picker.offset(), this.size = this.picker[0][this.sizePos];
            var i = this.getPercentage(e);
            if (this.range) {
                var s = Math.abs(this.percentage[0] - i), h = Math.abs(this.percentage[1] - i);
                this.dragged = h > s ? 0 : 1
            } else this.dragged = 0;
            this.percentage[this.dragged] = this.reversed ? 100 - i : i, this.layout(), t(document).on(this.touchCapable ? {
                touchmove: t.proxy(this.mousemove, this),
                touchend: t.proxy(this.mouseup, this)
            } : {mousemove: t.proxy(this.mousemove, this), mouseup: t.proxy(this.mouseup, this)}), this.inDrag = !0;
            var a = this.calculateValue();
            return this.setValue(a), this.element.trigger({type: "slideStart", value: a}).trigger({
                type: "slide",
                value: a
            }), !0
        }, triggerFocusOnHandle: function (t) {
            0 === t && this.handle1.focus(), 1 === t && this.handle2.focus()
        }, keydown: function (t, e) {
            if (!this.isEnabled())return !1;
            var i;
            switch (e.which) {
                case 37:
                case 40:
                    i = "vertical" === this.orientation && "after" === this.selection ? 1 : -1;
                    break;
                case 39:
                case 38:
                    i = "vertical" === this.orientation && "after" === this.selection ? -1 : 1
            }
            if (i) {
                var s = i * this.percentage[2], h = this.percentage[t] + s;
                h > 100 ? h = 100 : 0 > h && (h = 0), this.dragged = t, this.adjustPercentageForRangeSliders(h), this.percentage[this.dragged] = h, this.layout();
                var a = this.calculateValue();
                return this.setValue(a), this.element.trigger({type: "slide", value: a}).trigger({
                    type: "slideStop",
                    value: a
                }).data("value", a).prop("value", a), !1
            }
        }, mousemove: function (t) {
            if (!this.isEnabled())return !1;
            this.touchCapable && "touchmove" === t.type && (t = t.originalEvent);
            var e = this.getPercentage(t);
            this.adjustPercentageForRangeSliders(e), this.percentage[this.dragged] = this.reversed ? 100 - e : e, this.layout();
            var i = this.calculateValue();
            return this.setValue(i), this.element.trigger({
                type: "slide",
                value: i
            }).data("value", i).prop("value", i), !1
        }, adjustPercentageForRangeSliders: function (t) {
            this.range && (0 === this.dragged && this.percentage[1] < t ? (this.percentage[0] = this.percentage[1], this.dragged = 1) : 1 === this.dragged && this.percentage[0] > t && (this.percentage[1] = this.percentage[0], this.dragged = 0))
        }, mouseup: function () {
            if (!this.isEnabled())return !1;
            t(document).off(this.touchCapable ? {
                touchmove: this.mousemove,
                touchend: this.mouseup
            } : {
                mousemove: this.mousemove,
                mouseup: this.mouseup
            }), this.inDrag = !1, this.over === !1 && this.hideTooltip();
            var e = this.calculateValue();
            return this.layout(), this.element.data("value", e).prop("value", e).trigger({
                type: "slideStop",
                value: e
            }), !1
        }, calculateValue: function () {
            var t;
            return this.range ? (t = [this.min, this.max], 0 !== this.percentage[0] && (t[0] = Math.max(this.min, this.min + Math.round(this.diff * this.percentage[0] / 100 / this.step) * this.step)), 100 !== this.percentage[1] && (t[1] = Math.min(this.max, this.min + Math.round(this.diff * this.percentage[1] / 100 / this.step) * this.step)), this.value = t) : (t = this.min + Math.round(this.diff * this.percentage[0] / 100 / this.step) * this.step, t < this.min ? t = this.min : t > this.max && (t = this.max), t = parseFloat(t), this.value = [t, this.value[1]]), t
        }, getPercentage: function (t) {
            this.touchCapable && (t = t.touches[0]);
            var e = 100 * (t[this.mousePos] - this.offset[this.stylePos]) / this.size;
            return e = Math.round(e / this.percentage[2]) * this.percentage[2], Math.max(0, Math.min(100, e))
        }, getValue: function () {
            return this.range ? this.value : this.value[0]
        }, setValue: function (t) {
            this.value = this.validateInputValue(t), this.range ? (this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0])), this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]))) : (this.value = [Math.max(this.min, Math.min(this.max, this.value))], this.handle2.addClass("hide"), this.value[1] = "after" === this.selection ? this.max : this.min), this.diff = this.max - this.min, this.percentage = [100 * (this.value[0] - this.min) / this.diff, 100 * (this.value[1] - this.min) / this.diff, 100 * this.step / this.diff], this.layout(), this.element.trigger({
                type: "slide",
                value: this.value
            }).data("value", this.value).prop("value", this.value)
        }, validateInputValue: function (e) {
            if ("number" == typeof e)return e;
            if (e instanceof Array)return t.each(e, function (t, e) {
                if ("number" != typeof e)throw new Error(h.formatInvalidInputErrorMsg(e))
            }), e;
            throw new Error(h.formatInvalidInputErrorMsg(e))
        }, destroy: function () {
            this.handle1.off(), this.handle2.off(), this.element.off().show().insertBefore(this.picker), this.picker.off().remove(), t(this.element).removeData("slider")
        }, disable: function () {
            this.enabled = !1, this.handle1.removeAttr("tabindex"), this.handle2.removeAttr("tabindex"), this.picker.addClass("slider-disabled"), this.element.trigger("slideDisabled")
        }, enable: function () {
            this.enabled = !0, this.handle1.attr("tabindex", 0), this.handle2.attr("tabindex", 0), this.picker.removeClass("slider-disabled"), this.element.trigger("slideEnabled")
        }, toggle: function () {
            this.enabled ? this.disable() : this.enable()
        }, isEnabled: function () {
            return this.enabled
        }, setAttribute: function (t, e) {
            this[t] = e
        }
    };
    var n = {
        getValue: a.prototype.getValue,
        setValue: a.prototype.setValue,
        setAttribute: a.prototype.setAttribute,
        destroy: a.prototype.destroy,
        disable: a.prototype.disable,
        enable: a.prototype.enable,
        toggle: a.prototype.toggle,
        isEnabled: a.prototype.isEnabled
    };
    t.fn.slider = function (t) {
        if ("string" == typeof t && "refresh" !== t) {
            var i = Array.prototype.slice.call(arguments, 1);
            return e.call(this, t, i)
        }
        return s.call(this, t)
    }, t.fn.slider.defaults = {
        min: 0,
        max: 10,
        step: 1,
        orientation: "horizontal",
        value: 5,
        range: !1,
        selection: "before",
        tooltip: "show",
        handle: "round",
        reversed: !1,
        enabled: !0,
        formater: function (t) {
            return t
        }
    }, t.fn.slider.Constructor = a
}(window.jQuery);

/*!
 * Retina.js v1.1.0
 *
 * Copyright 2013 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
!function () {
    function t() {
    }

    function e(t, e) {
        this.path = t, "undefined" != typeof e && null !== e ? (this.at_2x_path = e, this.perform_check = !1) : (this.at_2x_path = t.replace(/\.\w+$/, function (t) {
            return "@2x" + t
        }), this.perform_check = !0)
    }

    function i(t) {
        this.el = t, this.path = new e(this.el.getAttribute("src"), this.el.getAttribute("data-at2x"));
        var i = this;
        this.path.check_2x_variant(function (t) {
            t && i.swap()
        })
    }

    var n = "undefined" == typeof exports ? window : exports, a = {check_mime_type: !0};
    n.Retina = t, t.configure = function (t) {
        null == t && (t = {});
        for (var e in t)a[e] = t[e]
    }, t.init = function (t) {
        null == t && (t = n);
        var e = t.onload || new Function;
        t.onload = function () {
            var t, n, a = document.getElementsByTagName("img"), h = [];
            for (t = 0; t < a.length; t++)n = a[t], h.push(new i(n));
            e()
        }
    }, t.isRetina = function () {
        var t = "(-webkit-min-device-pixel-ratio: 1.5),                      (min--moz-device-pixel-ratio: 1.5),                      (-o-min-device-pixel-ratio: 3/2),                      (min-resolution: 1.5dppx)";
        return n.devicePixelRatio > 1 ? !0 : n.matchMedia && n.matchMedia(t).matches ? !0 : !1
    }, n.RetinaImagePath = e, e.confirmed_paths = [], e.prototype.is_external = function () {
        return !(!this.path.match(/^https?\:/i) || this.path.match("//" + document.domain))
    }, e.prototype.check_2x_variant = function (t) {
        var i, n = this;
        return this.is_external() ? t(!1) : this.perform_check || "undefined" == typeof this.at_2x_path || null === this.at_2x_path ? this.at_2x_path in e.confirmed_paths ? t(!0) : (i = new XMLHttpRequest, i.open("HEAD", this.at_2x_path), i.onreadystatechange = function () {
            if (4 != i.readyState)return t(!1);
            if (i.status >= 200 && i.status <= 399) {
                if (a.check_mime_type) {
                    var h = i.getResponseHeader("Content-Type");
                    if (null == h || !h.match(/^image/i))return t(!1)
                }
                return e.confirmed_paths.push(n.at_2x_path), t(!0)
            }
            return t(!1)
        }, i.send(), void 0) : t(!0)
    }, n.RetinaImage = i, i.prototype.swap = function (t) {
        function e() {
            i.el.complete ? $(i.el).is(":visible") && (i.el.setAttribute("width", i.el.offsetWidth), i.el.setAttribute("height", i.el.offsetHeight), i.el.setAttribute("src", t)) : setTimeout(e, 5)
        }

        "undefined" == typeof t && (t = this.path.at_2x_path);
        var i = this;
        e()
    }, t.isRetina() && t.init(n)
}();

/*!
 * Nestable jQuery Plugin - Copyright (c) 2012 David Bushell - http://dbushell.com/
 * Dual-licensed under the BSD or MIT licenses
 */
//!function(t,e,s,i){function a(e,i){this.w=t(s),this.el=t(e),this.options=t.extend({},n,i),this.init()}var o="ontouchstart"in s,l=function(){var t=s.createElement("div"),i=s.documentElement;if(!("pointerEvents"in t.style))return!1;t.style.pointerEvents="auto",t.style.pointerEvents="x",i.appendChild(t);var a=e.getComputedStyle&&"auto"===e.getComputedStyle(t,"").pointerEvents;return i.removeChild(t),!!a}(),n={listNodeName:"ol",itemNodeName:"li",rootClass:"dd",listClass:"dd-list",itemClass:"dd-item",dragClass:"dd-dragel",handleClass:"dd-handle",collapsedClass:"dd-collapsed",placeClass:"dd-placeholder",noDragClass:"dd-nodrag",emptyClass:"dd-empty",expandBtnHTML:'<button data-action="expand" type="button">Expand</button>',collapseBtnHTML:'<button data-action="collapse" type="button">Collapse</button>',group:0,maxDepth:5,threshold:20};a.prototype={init:function(){var s=this;s.reset(),s.el.data("nestable-group",this.options.group),s.placeEl=t('<div class="'+s.options.placeClass+'"/>'),t.each(this.el.find(s.options.itemNodeName),function(e,i){s.setParent(t(i))}),s.el.on("click","button",function(e){if(!s.dragEl){var i=t(e.currentTarget),a=i.data("action"),o=i.parent(s.options.itemNodeName);"collapse"===a&&s.collapseItem(o),"expand"===a&&s.expandItem(o)}});var i=function(e){var i=t(e.target);if(!i.hasClass(s.options.handleClass)){if(i.closest("."+s.options.noDragClass).length)return;i=i.closest("."+s.options.handleClass)}i.length&&!s.dragEl&&(s.isTouch=/^touch/.test(e.type),s.isTouch&&1!==e.touches.length||(e.preventDefault(),s.dragStart(e.touches?e.touches[0]:e)))},a=function(t){s.dragEl&&(t.preventDefault(),s.dragMove(t.touches?t.touches[0]:t))},l=function(t){s.dragEl&&(t.preventDefault(),s.dragStop(t.touches?t.touches[0]:t))};o&&(s.el[0].addEventListener("touchstart",i,!1),e.addEventListener("touchmove",a,!1),e.addEventListener("touchend",l,!1),e.addEventListener("touchcancel",l,!1)),s.el.on("mousedown",i),s.w.on("mousemove",a),s.w.on("mouseup",l)},serialize:function(){var e,s=0,i=this;return step=function(e,s){var a=[],o=e.children(i.options.itemNodeName);return o.each(function(){var e=t(this),o=t.extend({},e.data()),l=e.children(i.options.listNodeName);l.length&&(o.children=step(l,s+1)),a.push(o)}),a},e=step(i.el.find(i.options.listNodeName).first(),s)},serialise:function(){return this.serialize()},reset:function(){this.mouse={offsetX:0,offsetY:0,startX:0,startY:0,lastX:0,lastY:0,nowX:0,nowY:0,distX:0,distY:0,dirAx:0,dirX:0,dirY:0,lastDirX:0,lastDirY:0,distAxX:0,distAxY:0},this.isTouch=!1,this.moving=!1,this.dragEl=null,this.dragRootEl=null,this.dragDepth=0,this.hasNewRoot=!1,this.pointEl=null},expandItem:function(t){t.removeClass(this.options.collapsedClass),t.children('[data-action="expand"]').hide(),t.children('[data-action="collapse"]').show(),t.children(this.options.listNodeName).show()},collapseItem:function(t){var e=t.children(this.options.listNodeName);e.length&&(t.addClass(this.options.collapsedClass),t.children('[data-action="collapse"]').hide(),t.children('[data-action="expand"]').show(),t.children(this.options.listNodeName).hide())},expandAll:function(){var e=this;e.el.find(e.options.itemNodeName).each(function(){e.expandItem(t(this))})},collapseAll:function(){var e=this;e.el.find(e.options.itemNodeName).each(function(){e.collapseItem(t(this))})},setParent:function(e){e.children(this.options.listNodeName).length&&(e.prepend(t(this.options.expandBtnHTML)),e.prepend(t(this.options.collapseBtnHTML))),e.children('[data-action="expand"]').hide()},unsetParent:function(t){t.removeClass(this.options.collapsedClass),t.children("[data-action]").remove(),t.children(this.options.listNodeName).remove()},dragStart:function(e){var a=this.mouse,o=t(e.target),l=o.closest(this.options.itemNodeName);this.placeEl.css("height",l.height()),a.offsetX=e.offsetX!==i?e.offsetX:e.pageX-o.offset().left,a.offsetY=e.offsetY!==i?e.offsetY:e.pageY-o.offset().top,a.startX=a.lastX=e.pageX,a.startY=a.lastY=e.pageY,this.dragRootEl=this.el,this.dragEl=t(s.createElement(this.options.listNodeName)).addClass(this.options.listClass+" "+this.options.dragClass),this.dragEl.css("width",l.width()),l.after(this.placeEl),l[0].parentNode.removeChild(l[0]),l.appendTo(this.dragEl),t(s.body).append(this.dragEl),this.dragEl.css({left:e.pageX-a.offsetX,top:e.pageY-a.offsetY});var n,d,h=this.dragEl.find(this.options.itemNodeName);for(n=0;n<h.length;n++)d=t(h[n]).parents(this.options.listNodeName).length,d>this.dragDepth&&(this.dragDepth=d)},dragStop:function(){var t=this.dragEl.children(this.options.itemNodeName).first();t[0].parentNode.removeChild(t[0]),this.placeEl.replaceWith(t),this.dragEl.remove(),this.el.trigger("change"),this.hasNewRoot&&this.dragRootEl.trigger("change"),this.reset()},dragMove:function(i){var a,o,n,d,h,r=this.options,p=this.mouse;this.dragEl.css({left:i.pageX-p.offsetX,top:i.pageY-p.offsetY}),p.lastX=p.nowX,p.lastY=p.nowY,p.nowX=i.pageX,p.nowY=i.pageY,p.distX=p.nowX-p.lastX,p.distY=p.nowY-p.lastY,p.lastDirX=p.dirX,p.lastDirY=p.dirY,p.dirX=0===p.distX?0:p.distX>0?1:-1,p.dirY=0===p.distY?0:p.distY>0?1:-1;var c=Math.abs(p.distX)>Math.abs(p.distY)?1:0;if(!p.moving)return p.dirAx=c,void(p.moving=!0);p.dirAx!==c?(p.distAxX=0,p.distAxY=0):(p.distAxX+=Math.abs(p.distX),0!==p.dirX&&p.dirX!==p.lastDirX&&(p.distAxX=0),p.distAxY+=Math.abs(p.distY),0!==p.dirY&&p.dirY!==p.lastDirY&&(p.distAxY=0)),p.dirAx=c,p.dirAx&&p.distAxX>=r.threshold&&(p.distAxX=0,n=this.placeEl.prev(r.itemNodeName),p.distX>0&&n.length&&!n.hasClass(r.collapsedClass)&&(a=n.find(r.listNodeName).last(),h=this.placeEl.parents(r.listNodeName).length,h+this.dragDepth<=r.maxDepth&&(a.length?(a=n.children(r.listNodeName).last(),a.append(this.placeEl)):(a=t("<"+r.listNodeName+"/>").addClass(r.listClass),a.append(this.placeEl),n.append(a),this.setParent(n)))),p.distX<0&&(d=this.placeEl.next(r.itemNodeName),d.length||(o=this.placeEl.parent(),this.placeEl.closest(r.itemNodeName).after(this.placeEl),o.children().length||this.unsetParent(o.parent()))));var g=!1;if(l||(this.dragEl[0].style.visibility="hidden"),this.pointEl=t(s.elementFromPoint(i.pageX-s.body.scrollLeft,i.pageY-(e.pageYOffset||s.documentElement.scrollTop))),l||(this.dragEl[0].style.visibility="visible"),this.pointEl.hasClass(r.handleClass)&&(this.pointEl=this.pointEl.parent(r.itemNodeName)),this.pointEl.hasClass(r.emptyClass))g=!0;else if(!this.pointEl.length||!this.pointEl.hasClass(r.itemClass))return;var f=this.pointEl.closest("."+r.rootClass),u=this.dragRootEl.data("nestable-id")!==f.data("nestable-id");if(!p.dirAx||u||g){if(u&&r.group!==f.data("nestable-group"))return;if(h=this.dragDepth-1+this.pointEl.parents(r.listNodeName).length,h>r.maxDepth)return;var m=i.pageY<this.pointEl.offset().top+this.pointEl.height()/2;o=this.placeEl.parent(),g?(a=t(s.createElement(r.listNodeName)).addClass(r.listClass),a.append(this.placeEl),this.pointEl.replaceWith(a)):m?this.pointEl.before(this.placeEl):this.pointEl.after(this.placeEl),o.children().length||this.unsetParent(o.parent()),this.dragRootEl.find(r.itemNodeName).length||this.dragRootEl.html('<div class="'+r.emptyClass+'"/>'),u&&(this.dragRootEl=f,this.hasNewRoot=this.el[0]!==this.dragRootEl[0])}}},t.fn.nestable=function(e){var s=this,i=this;return s.each(function(){var s=t(this).data("nestable");s?"string"==typeof e&&"function"==typeof s[e]&&(i=s[e]()):(t(this).data("nestable",new a(this,e)),t(this).data("nestable-id",(new Date).getTime()))}),i||s}}(window.jQuery||window.Zepto,window,document);
(function (e, t, n, r) {
    function u(t, r) {
        this.w = e(n);
        this.el = e(t);
        this.options = e.extend({}, o, r);
        this.init()
    }

    var i = "ontouchstart"in n;
    var s = function () {
        var e = n.createElement("div"), r = n.documentElement;
        if (!("pointerEvents"in e.style)) {
            return false
        }
        e.style.pointerEvents = "auto";
        e.style.pointerEvents = "x";
        r.appendChild(e);
        var i = t.getComputedStyle && t.getComputedStyle(e, "").pointerEvents === "auto";
        r.removeChild(e);
        return !!i
    }();
    var o = {
        listNodeName: "ol",
        itemNodeName: "li",
        rootClass: "dd",
        listClass: "dd-list",
        itemClass: "dd-item",
        dragClass: "dd-dragel",
        handleClass: "dd-handle",
        collapsedClass: "dd-collapsed",
        placeClass: "dd-placeholder",
        noDragClass: "dd-nodrag",
        emptyClass: "dd-empty",
        expandBtnHTML: '<button data-action="expand" type="button">Expand</button>',
        collapseBtnHTML: '<button data-action="collapse" type="button">Collapse</button>',
        group: 0,
        maxDepth: 5,
        threshold: 20,
        keepSameDepth: false
    };
    u.prototype = {
        init: function () {
            var n = this;
            n.reset();
            n.el.data("nestable-group", this.options.group);
            n.placeEl = e('<div class="' + n.options.placeClass + '"/>');
            e.each(this.el.find(n.options.itemNodeName), function (t, r) {
                n.setParent(e(r))
            });
            n.el.on("click", "button", function (t) {
                if (n.dragEl) {
                    return
                }
                var r = e(t.currentTarget), i = r.data("action"), s = r.parent(n.options.itemNodeName);
                if (i === "collapse") {
                    n.collapseItem(s)
                }
                if (i === "expand") {
                    n.expandItem(s)
                }
            });
            var r = function (t) {
                var r = e(t.target);
                if (!r.hasClass(n.options.handleClass)) {
                    if (r.closest("." + n.options.noDragClass).length) {
                        return
                    }
                    r = r.closest("." + n.options.handleClass)
                }
                if (!r.length || n.dragEl) {
                    return
                }
                n.isTouch = /^touch/.test(t.type);
                if (n.isTouch && t.touches.length !== 1) {
                    return
                }
                t.preventDefault();
                n.dragStart(t.touches ? t.touches[0] : t)
            };
            var s = function (e) {
                if (n.dragEl) {
                    e.preventDefault();
                    n.dragMove(e.touches ? e.touches[0] : e)
                }
            };
            var o = function (e) {
                if (n.dragEl) {
                    e.preventDefault();
                    n.dragStop(e.touches ? e.touches[0] : e)
                }
            };
            if (i) {
                n.el[0].addEventListener("touchstart", r, false);
                t.addEventListener("touchmove", s, false);
                t.addEventListener("touchend", o, false);
                t.addEventListener("touchcancel", o, false)
            }
            n.el.on("mousedown", r);
            n.w.on("mousemove", s);
            n.w.on("mouseup", o)
        }, serialize: function () {
            var t, n = 0, r = this;
            step = function (t, n) {
                var i = [], s = t.children(r.options.itemNodeName);
                s.each(function () {
                    var t = e(this), s = e.extend({}, t.data()), o = t.children(r.options.listNodeName);
                    if (typeof t.data("id") !== "undefined") {
                        s.id = t.data("id")
                    }
                    if (o.length) {
                        s.children = step(o, n + 1)
                    }
                    i.push(s)
                });
                return i
            };
            t = step(r.el.find(r.options.listNodeName).first(), n);
            return t
        }, serialise: function () {
            return this.serialize()
        }, reset: function () {
            this.mouse = {
                offsetX: 0,
                offsetY: 0,
                startX: 0,
                startY: 0,
                lastX: 0,
                lastY: 0,
                nowX: 0,
                nowY: 0,
                distX: 0,
                distY: 0,
                dirAx: 0,
                dirX: 0,
                dirY: 0,
                lastDirX: 0,
                lastDirY: 0,
                distAxX: 0,
                distAxY: 0
            };
            this.isTouch = false;
            this.moving = false;
            this.dragEl = null;
            this.dragRootEl = null;
            this.dragDepth = 0;
            this.hasNewRoot = false;
            this.pointEl = null
        }, expandItem: function (e) {
            e.removeClass(this.options.collapsedClass);
            e.children('[data-action="expand"]').hide();
            e.children('[data-action="collapse"]').show();
            e.children(this.options.listNodeName).show()
        }, collapseItem: function (e) {
            var t = e.children(this.options.listNodeName);
            if (t.length) {
                e.addClass(this.options.collapsedClass);
                e.children('[data-action="collapse"]').hide();
                e.children('[data-action="expand"]').show();
                e.children(this.options.listNodeName).hide()
            }
        }, expandAll: function () {
            var t = this;
            t.el.find(t.options.itemNodeName).each(function () {
                t.expandItem(e(this))
            })
        }, collapseAll: function () {
            var t = this;
            t.el.find(t.options.itemNodeName).each(function () {
                t.collapseItem(e(this))
            })
        }, setParent: function (t) {
            if (t.children(this.options.listNodeName).length) {
                t.prepend(e(this.options.expandBtnHTML));
                t.prepend(e(this.options.collapseBtnHTML))
            }
            t.children('[data-action="expand"]').hide()
        }, unsetParent: function (e) {
            e.removeClass(this.options.collapsedClass);
            e.children("[data-action]").remove();
            e.children(this.options.listNodeName).remove()
        }, dragStart: function (t) {
            var i = this.mouse, s = e(t.target), o = s.closest(this.options.itemNodeName);
            this.placeEl.css("height", o.height());
            i.offsetX = t.offsetX !== r ? t.offsetX : t.pageX - s.offset().left;
            i.offsetY = t.offsetY !== r ? t.offsetY : t.pageY - s.offset().top;
            i.startX = i.lastX = t.pageX;
            i.startY = i.lastY = t.pageY;
            this.dragStartDepth = o.parents(this.options.listNodeName).length;
            this.dragRootEl = this.el;
            this.dragEl = e(n.createElement(this.options.listNodeName)).addClass(this.options.listClass + " " + this.options.dragClass);
            this.dragEl.css("width", o.width());
            o.after(this.placeEl);
            o[0].parentNode.removeChild(o[0]);
            o.appendTo(this.dragEl);
            e(n.body).append(this.dragEl);
            this.dragEl.css({left: t.pageX - i.offsetX, top: t.pageY - i.offsetY});
            var u, a, f = this.dragEl.find(this.options.itemNodeName);
            for (u = 0; u < f.length; u++) {
                a = e(f[u]).parents(this.options.listNodeName).length;
                if (a > this.dragDepth) {
                    this.dragDepth = a
                }
            }
        }, dragStop: function (e) {
            var t = this.dragEl.children(this.options.itemNodeName).first();
            t[0].parentNode.removeChild(t[0]);
            this.placeEl.replaceWith(t);
            this.dragEl.remove();
            this.el.trigger("change");
            if (this.hasNewRoot) {
                this.dragRootEl.trigger("change")
            }
            this.reset()
        }, dragMove: function (r) {
            var i, o, u, a, f, l = this.options, c = this.mouse;
            this.dragEl.css({left: r.pageX - c.offsetX, top: r.pageY - c.offsetY});
            c.lastX = c.nowX;
            c.lastY = c.nowY;
            c.nowX = r.pageX;
            c.nowY = r.pageY;
            c.distX = c.nowX - c.lastX;
            c.distY = c.nowY - c.lastY;
            c.lastDirX = c.dirX;
            c.lastDirY = c.dirY;
            c.dirX = c.distX === 0 ? 0 : c.distX > 0 ? 1 : -1;
            c.dirY = c.distY === 0 ? 0 : c.distY > 0 ? 1 : -1;
            var h = Math.abs(c.distX) > Math.abs(c.distY) ? 1 : 0;
            if (!c.moving) {
                c.dirAx = h;
                c.moving = true;
                return
            }
            if (c.dirAx !== h) {
                c.distAxX = 0;
                c.distAxY = 0
            } else {
                c.distAxX += Math.abs(c.distX);
                if (c.dirX !== 0 && c.dirX !== c.lastDirX) {
                    c.distAxX = 0
                }
                c.distAxY += Math.abs(c.distY);
                if (c.dirY !== 0 && c.dirY !== c.lastDirY) {
                    c.distAxY = 0
                }
            }
            c.dirAx = h;
            if (c.dirAx && c.distAxX >= l.threshold) {
                c.distAxX = 0;
                u = this.placeEl.prev(l.itemNodeName);
                if (l.keepSameDepth) {
                    return
                }
                if (c.distX > 0 && u.length && !u.hasClass(l.collapsedClass)) {
                    i = u.find(l.listNodeName).last();
                    f = this.placeEl.parents(l.listNodeName).length;
                    if (f + this.dragDepth <= l.maxDepth) {
                        if (!i.length) {
                            i = e("<" + l.listNodeName + "/>").addClass(l.listClass);
                            i.append(this.placeEl);
                            u.append(i);
                            this.setParent(u)
                        } else {
                            i = u.children(l.listNodeName).last();
                            i.append(this.placeEl)
                        }
                    }
                }
                if (c.distX < 0) {
                    a = this.placeEl.next(l.itemNodeName);
                    if (!a.length) {
                        o = this.placeEl.parent();
                        this.placeEl.closest(l.itemNodeName).after(this.placeEl);
                        if (!o.children().length) {
                            this.unsetParent(o.parent())
                        }
                    }
                }
            }
            var p = false;
            if (!s) {
                this.dragEl[0].style.visibility = "hidden"
            }
            this.pointEl = e(n.elementFromPoint(r.pageX - n.body.scrollLeft, r.pageY - (t.pageYOffset || n.documentElement.scrollTop)));
            if (!s) {
                this.dragEl[0].style.visibility = "visible"
            }
            if (this.pointEl.hasClass(l.handleClass)) {
                this.pointEl = this.pointEl.parent(l.itemNodeName)
            }
            if (this.pointEl.hasClass(l.emptyClass)) {
                p = true
            } else if (!this.pointEl.length || !this.pointEl.hasClass(l.itemClass)) {
                return
            }
            var d = this.pointEl.closest("." + l.rootClass), v = this.dragRootEl.data("nestable-id") !== d.data("nestable-id");
            if (!c.dirAx || v || p) {
                if (v && l.group !== d.data("nestable-group")) {
                    return
                }
                f = this.dragDepth - 1 + this.pointEl.parents(l.listNodeName).length;
                if (f > l.maxDepth) {
                    return
                }
                if (l.keepSameDepth && this.pointEl.parents(l.listNodeName).length != this.placeEl.parents(l.listNodeName).length) {
                    return
                }
                var m = r.pageY < this.pointEl.offset().top + this.pointEl.height() / 2;
                o = this.placeEl.parent();
                if (p) {
                    i = e(n.createElement(l.listNodeName)).addClass(l.listClass);
                    i.append(this.placeEl);
                    this.pointEl.replaceWith(i)
                } else if (m) {
                    this.pointEl.before(this.placeEl)
                } else {
                    this.pointEl.after(this.placeEl)
                }
                if (!o.children().length) {
                    this.unsetParent(o.parent())
                }
                if (!this.dragRootEl.find(l.itemNodeName).length) {
                    this.dragRootEl.html('<div class="' + l.emptyClass + '"/>')
                }
                if (v) {
                    this.dragRootEl = d;
                    this.hasNewRoot = this.el[0] !== this.dragRootEl[0]
                }
            }
        }
    };
    e.fn.nestable = function (t) {
        var n = this, r = this;
        n.each(function () {
            var n = e(this).data("nestable");
            if (!n) {
                e(this).data("nestable", new u(this, t));
                e(this).data("nestable-id", (new Date).getTime())
            } else {
                if (typeof t === "string" && typeof n[t] === "function") {
                    r = n[t]()
                }
            }
        });
        return r || n
    }
})(window.jQuery || window.Zepto, window, document);

/* HTML5 Sortable (http://farhadi.ir/projects/html5sortable)
 * Released under the MIT license.
 */
(function (a) {
    var b, c = a();
    a.fn.sortable = function (d) {
        var e = String(d);
        return d = a.extend({connectWith: !1}, d), this.each(function () {
            if (/^enable|disable|destroy$/.test(e)) {
                var f = a(this).children(a(this).data("items")).attr("draggable", e == "enable");
                e == "destroy" && f.add(this).removeData("connectWith items").off("dragstart.h5s dragend.h5s selectstart.h5s dragover.h5s dragenter.h5s drop.h5s");
                return
            }
            var g, h, f = a(this).children(d.items), i = a("<" + (/^ul|ol$/i.test(this.tagName) ? "li" : "div") + ' class="sortable-placeholder">');
            f.find(d.handle).mousedown(function () {
                g = !0
            }).mouseup(function () {
                g = !1
            }), a(this).data("items", d.items), c = c.add(i), d.connectWith && a(d.connectWith).add(this).data("connectWith", d.connectWith), f.attr("draggable", "true").on("dragstart.h5s", function (c) {
                if (d.handle && !g)return !1;
                g = !1;
                var e = c.originalEvent.dataTransfer;
                e.effectAllowed = "move", e.setData("Text", "dummy"), h = (b = a(this)).addClass("sortable-dragging").index()
            }).on("dragend.h5s", function () {
                b.removeClass("sortable-dragging").show(), c.detach(), h != b.index() && f.parent().trigger("sortupdate", {item: b}), b = null
            }).not("a[href], img").on("selectstart.h5s", function () {
                return this.dragDrop && this.dragDrop(), !1
            }).end().add([this, i]).on("dragover.h5s dragenter.h5s drop.h5s", function (e) {
                return !f.is(b) && d.connectWith !== a(b).parent().data("connectWith") ? !0 : e.type == "drop" ? (e.stopPropagation(), c.filter(":visible").after(b), !1) : (e.preventDefault(), e.originalEvent.dataTransfer.dropEffect = "move", f.is(this) ? (d.forcePlaceholderSize && i.height(b.outerHeight()), b.hide(), a(this)[i.index() < a(this).index() ? "after" : "before"](i), c.not(i).detach()) : !c.is(this) && !a(this).children(d.items).length && (c.detach(), a(this).append(i)), !1)
            })
        })
    }
})(jQuery);

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function (e) {
    function n(e) {
        return u.raw ? e : encodeURIComponent(e)
    }

    function o(e) {
        return u.raw ? e : decodeURIComponent(e)
    }

    function i(e) {
        return n(u.json ? JSON.stringify(e) : String(e))
    }

    function r(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(c, " ")), u.json ? JSON.parse(e) : e
        } catch (n) {
        }
    }

    function t(n, o) {
        var i = u.raw ? n : r(n);
        return e.isFunction(o) ? o(i) : i
    }

    var c = /\+/g, u = e.cookie = function (r, c, a) {
        if (arguments.length > 1 && !e.isFunction(c)) {
            if (a = e.extend({}, u.defaults, a), "number" == typeof a.expires) {
                var f = a.expires, s = a.expires = new Date;
                s.setTime(+s + 864e5 * f)
            }
            return document.cookie = [n(r), "=", i(c), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
        }
        for (var d = r ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], m = 0, x = p.length; x > m; m++) {
            var l = p[m].split("="), g = o(l.shift()), k = l.join("=");
            if (r && r === g) {
                d = t(k, c);
                break
            }
            r || void 0 === (k = t(k)) || (d[g] = k)
        }
        return d
    };
    u.defaults = {}, e.removeCookie = function (n, o) {
        return void 0 === e.cookie(n) ? !1 : (e.cookie(n, "", e.extend({}, o, {expires: -1})), !e.cookie(n))
    }
});

/**
 * bootbox.js v4.4.0
 *
 * http://bootboxjs.com/license.txt
 */
!function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : a.bootbox = b(a.jQuery)
}(this, function a(b, c) {
    "use strict";
    function d(a) {
        var b = q[o.locale];
        return b ? b[a] : q.en[a]
    }

    function e(a, c, d) {
        a.stopPropagation(), a.preventDefault();
        var e = b.isFunction(d) && d.call(c, a) === !1;
        e || c.modal("hide")
    }

    function f(a) {
        var b, c = 0;
        for (b in a)c++;
        return c
    }

    function g(a, c) {
        var d = 0;
        b.each(a, function (a, b) {
            c(a, b, d++)
        })
    }

    function h(a) {
        var c, d;
        if ("object" != typeof a)throw new Error("Please supply an object of options");
        if (!a.message)throw new Error("Please specify a message");
        return a = b.extend({}, o, a), a.buttons || (a.buttons = {}), c = a.buttons, d = f(c), g(c, function (a, e, f) {
            if (b.isFunction(e) && (e = c[a] = {callback: e}), "object" !== b.type(e))throw new Error("button with key " + a + " must be an object");
            e.label || (e.label = a), e.className || (e.className = 2 >= d && f === d - 1 ? "btn-primary" : "btn-default")
        }), a
    }

    function i(a, b) {
        var c = a.length, d = {};
        if (1 > c || c > 2)throw new Error("Invalid argument length");
        return 2 === c || "string" == typeof a[0] ? (d[b[0]] = a[0], d[b[1]] = a[1]) : d = a[0], d
    }

    function j(a, c, d) {
        return b.extend(!0, {}, a, i(c, d))
    }

    function k(a, b, c, d) {
        var e = {className: "bootbox-" + a, buttons: l.apply(null, b)};
        return m(j(e, d, c), b)
    }

    function l() {
        for (var a = {}, b = 0, c = arguments.length; c > b; b++) {
            var e = arguments[b], f = e.toLowerCase(), g = e.toUpperCase();
            a[f] = {label: d(g)}
        }
        return a
    }

    function m(a, b) {
        var d = {};
        return g(b, function (a, b) {
            d[b] = !0
        }), g(a.buttons, function (a) {
            if (d[a] === c)throw new Error("button key " + a + " is not allowed (options are " + b.join("\n") + ")")
        }), a
    }

    var n = {
        dialog: "<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",
        header: "<div class='modal-header'><h4 class='modal-title'></h4></div>",
        footer: "<div class='modal-footer'></div>",
        closeButton: "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",
        form: "<form class='bootbox-form'></form>",
        inputs: {
            text: "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",
            textarea: "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",
            email: "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",
            select: "<select class='bootbox-input bootbox-input-select form-control'></select>",
            checkbox: "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",
            date: "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",
            time: "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",
            number: "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",
            password: "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"
        }
    }, o = {
        locale: "en",
        backdrop: "static",
        animate: !0,
        className: null,
        closeButton: !0,
        show: !0,
        container: "body"
    }, p = {};
    p.alert = function () {
        var a;
        if (a = k("alert", ["ok"], ["message", "callback"], arguments), a.callback && !b.isFunction(a.callback))throw new Error("alert requires callback property to be a function when provided");
        return a.buttons.ok.callback = a.onEscape = function () {
            return b.isFunction(a.callback) ? a.callback.call(this) : !0
        }, p.dialog(a)
    }, p.confirm = function () {
        var a;
        if (a = k("confirm", ["cancel", "confirm"], ["message", "callback"], arguments), a.buttons.cancel.callback = a.onEscape = function () {
                return a.callback.call(this, !1)
            }, a.buttons.confirm.callback = function () {
                return a.callback.call(this, !0)
            }, !b.isFunction(a.callback))throw new Error("confirm requires a callback");
        return p.dialog(a)
    }, p.prompt = function () {
        var a, d, e, f, h, i, k;
        if (f = b(n.form), d = {
                className: "bootbox-prompt",
                buttons: l("cancel", "confirm"),
                value: "",
                inputType: "text"
            }, a = m(j(d, arguments, ["title", "callback"]), ["cancel", "confirm"]), i = a.show === c ? !0 : a.show, a.message = f, a.buttons.cancel.callback = a.onEscape = function () {
                return a.callback.call(this, null)
            }, a.buttons.confirm.callback = function () {
                var c;
                switch (a.inputType) {
                    case"text":
                    case"textarea":
                    case"email":
                    case"select":
                    case"date":
                    case"time":
                    case"number":
                    case"password":
                        c = h.val();
                        break;
                    case"checkbox":
                        var d = h.find("input:checked");
                        c = [], g(d, function (a, d) {
                            c.push(b(d).val())
                        })
                }
                return a.callback.call(this, c)
            }, a.show = !1, !a.title)throw new Error("prompt requires a title");
        if (!b.isFunction(a.callback))throw new Error("prompt requires a callback");
        if (!n.inputs[a.inputType])throw new Error("invalid prompt type");
        switch (h = b(n.inputs[a.inputType]), a.inputType) {
            case"text":
            case"textarea":
            case"email":
            case"date":
            case"time":
            case"number":
            case"password":
                h.val(a.value);
                break;
            case"select":
                var o = {};
                if (k = a.inputOptions || [], !b.isArray(k))throw new Error("Please pass an array of input options");
                if (!k.length)throw new Error("prompt with select requires options");
                g(k, function (a, d) {
                    var e = h;
                    if (d.value === c || d.text === c)throw new Error("given options in wrong format");
                    d.group && (o[d.group] || (o[d.group] = b("<optgroup/>").attr("label", d.group)), e = o[d.group]), e.append("<option value='" + d.value + "'>" + d.text + "</option>")
                }), g(o, function (a, b) {
                    h.append(b)
                }), h.val(a.value);
                break;
            case"checkbox":
                var q = b.isArray(a.value) ? a.value : [a.value];
                if (k = a.inputOptions || [], !k.length)throw new Error("prompt with checkbox requires options");
                if (!k[0].value || !k[0].text)throw new Error("given options in wrong format");
                h = b("<div/>"), g(k, function (c, d) {
                    var e = b(n.inputs[a.inputType]);
                    e.find("input").attr("value", d.value), e.find("label").append(d.text), g(q, function (a, b) {
                        b === d.value && e.find("input").prop("checked", !0)
                    }), h.append(e)
                })
        }
        return a.placeholder && h.attr("placeholder", a.placeholder), a.pattern && h.attr("pattern", a.pattern), a.maxlength && h.attr("maxlength", a.maxlength), f.append(h), f.on("submit", function (a) {
            a.preventDefault(), a.stopPropagation(), e.find(".btn-primary").click()
        }), e = p.dialog(a), e.off("shown.bs.modal"), e.on("shown.bs.modal", function () {
            h.focus()
        }), i === !0 && e.modal("show"), e
    }, p.dialog = function (a) {
        a = h(a);
        var d = b(n.dialog), f = d.find(".modal-dialog"), i = d.find(".modal-body"), j = a.buttons, k = "", l = {onEscape: a.onEscape};
        if (b.fn.modal === c)throw new Error("$.fn.modal is not defined; please double check you have included the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ for more details.");
        if (g(j, function (a, b) {
                k += "<button data-bb-handler='" + a + "' type='button' class='btn " + b.className + "'>" + b.label + "</button>", l[a] = b.callback
            }), i.find(".bootbox-body").html(a.message), a.animate === !0, a.className && d.addClass(a.className), "large" === a.size ? f.addClass("modal-lg") : "small" === a.size && f.addClass("modal-sm"), a.title && i.before(n.header), a.closeButton) {
            var m = b(n.closeButton);
            a.title ? d.find(".modal-header").prepend(m) : m.css("margin-top", "-10px").prependTo(i)
        }
        return a.title && d.find(".modal-title").html(a.title), k.length && (i.after(n.footer), d.find(".modal-footer").html(k)), d.on("hidden.bs.modal", function (a) {
            a.target === this && d.remove()
        }), d.on("shown.bs.modal", function () {
            d.find(".btn-primary:first").focus()
        }), "static" !== a.backdrop && d.on("click.dismiss.bs.modal", function (a) {
            d.children(".modal-backdrop").length && (a.currentTarget = d.children(".modal-backdrop").get(0)), a.target === a.currentTarget && d.trigger("escape.close.bb")
        }), d.on("escape.close.bb", function (a) {
            l.onEscape && e(a, d, l.onEscape)
        }), d.on("click", ".modal-footer button", function (a) {
            var c = b(this).data("bb-handler");
            e(a, d, l[c])
        }), d.on("click", ".bootbox-close-button", function (a) {
            e(a, d, l.onEscape)
        }), d.on("keyup", function (a) {
            27 === a.which && d.trigger("escape.close.bb")
        }), b(a.container).append(d), d.modal({
            backdrop: a.backdrop ? "static" : !1,
            keyboard: !1,
            show: !1
        }), a.show && d.modal("show"), d
    }, p.setDefaults = function () {
        var a = {};
        2 === arguments.length ? a[arguments[0]] = arguments[1] : a = arguments[0], b.extend(o, a)
    }, p.hideAll = function () {
        return b(".bootbox").modal("hide"), p
    };
    var q = {
        bg_BG: {OK: "Ок", CANCEL: "Отказ", CONFIRM: "Потвърждавам"},
        br: {OK: "OK", CANCEL: "Cancelar", CONFIRM: "Sim"},
        cs: {OK: "OK", CANCEL: "Zrušit", CONFIRM: "Potvrdit"},
        da: {OK: "OK", CANCEL: "Annuller", CONFIRM: "Accepter"},
        de: {OK: "OK", CANCEL: "Abbrechen", CONFIRM: "Akzeptieren"},
        el: {OK: "Εντάξει", CANCEL: "Ακύρωση", CONFIRM: "Επιβεβαίωση"},
        en: {OK: "OK", CANCEL: "Cancel", CONFIRM: "OK"},
        es: {OK: "OK", CANCEL: "Cancelar", CONFIRM: "Aceptar"},
        et: {OK: "OK", CANCEL: "Katkesta", CONFIRM: "OK"},
        fa: {OK: "قبول", CANCEL: "لغو", CONFIRM: "تایید"},
        fi: {OK: "OK", CANCEL: "Peruuta", CONFIRM: "OK"},
        fr: {OK: "OK", CANCEL: "Annuler", CONFIRM: "D'accord"},
        he: {OK: "אישור", CANCEL: "ביטול", CONFIRM: "אישור"},
        hu: {OK: "OK", CANCEL: "Mégsem", CONFIRM: "Megerősít"},
        hr: {OK: "OK", CANCEL: "Odustani", CONFIRM: "Potvrdi"},
        id: {OK: "OK", CANCEL: "Batal", CONFIRM: "OK"},
        it: {OK: "OK", CANCEL: "Annulla", CONFIRM: "Conferma"},
        ja: {OK: "OK", CANCEL: "キャンセル", CONFIRM: "確認"},
        lt: {OK: "Gerai", CANCEL: "Atšaukti", CONFIRM: "Patvirtinti"},
        lv: {OK: "Labi", CANCEL: "Atcelt", CONFIRM: "Apstiprināt"},
        nl: {OK: "OK", CANCEL: "Annuleren", CONFIRM: "Accepteren"},
        no: {OK: "OK", CANCEL: "Avbryt", CONFIRM: "OK"},
        pl: {OK: "OK", CANCEL: "Anuluj", CONFIRM: "Potwierdź"},
        pt: {OK: "OK", CANCEL: "Cancelar", CONFIRM: "Confirmar"},
        ru: {OK: "OK", CANCEL: "Отмена", CONFIRM: "Применить"},
        sq: {OK: "OK", CANCEL: "Anulo", CONFIRM: "Prano"},
        sv: {OK: "OK", CANCEL: "Avbryt", CONFIRM: "OK"},
        th: {OK: "ตกลง", CANCEL: "ยกเลิก", CONFIRM: "ยืนยัน"},
        tr: {OK: "Tamam", CANCEL: "İptal", CONFIRM: "Onayla"},
        zh_CN: {OK: "OK", CANCEL: "取消", CONFIRM: "确认"},
        zh_TW: {OK: "OK", CANCEL: "取消", CONFIRM: "確認"}
    };
    return p.addLocale = function (a, c) {
        return b.each(["OK", "CANCEL", "CONFIRM"], function (a, b) {
            if (!c[b])throw new Error("Please supply a translation for '" + b + "'")
        }), q[a] = {OK: c.OK, CANCEL: c.CANCEL, CONFIRM: c.CONFIRM}, p
    }, p.removeLocale = function (a) {
        return delete q[a], p
    }, p.setLocale = function (a) {
        return p.setDefaults("locale", a)
    }, p.init = function (c) {
        return a(c || b)
    }, p
});

/*!
 * Bootstrap Context Menu
 * Version: 0.2.0
 * Author: @sydcanem
 * https://github.com/sydcanem/bootstrap-contextmenu
 *
 * Inspired by Bootstrap's dropdown plugin.
 * Bootstrap (http://getbootstrap.com).
 *
 * Licensed under MIT
 * ========================================================= */
!function (t) {
    "use strict";
    var e = '[data-toggle="context"]', n = function (e, n) {
        this.$element = t(e), this.before = n.before || this.before, this.onItem = n.onItem || this.onItem, this.scopes = n.scopes || null, n.target && this.$element.data("target", n.target), this.listen()
    };
    n.prototype = {
        constructor: n, show: function (e) {
            var n, o, i, s, r = {relatedTarget: this};
            if (!this.isDisabled() && (this.closemenu(), this.before.call(this, e, t(e.currentTarget))))return n = this.getMenu(), n.trigger(o = t.Event("show.bs.context", r)), i = this.getPosition(e, n), s = "li:not(.divider)", n.attr("style", "").css(i).addClass("open").on("click.context.data-api", s, t.proxy(this.onItem, this, t(e.currentTarget))).trigger("shown.bs.context", r), t("html").on("click.context.data-api", n.selector, t.proxy(this.closemenu, this)), !1
        }, closemenu: function () {
            var e, n, o, i;
            return e = this.getMenu(), e.hasClass("open") ? (i = {relatedTarget: this}, e.trigger(n = t.Event("hide.bs.context", i)), o = "li:not(.divider)", e.removeClass("open").off("click.context.data-api", o).trigger("hidden.bs.context", i), t("html").off("click.context.data-api", e.selector), !1) : void 0
        }, before: function () {
            return !0
        }, onItem: function () {
            return !0
        }, listen: function () {
            this.$element.on("contextmenu.context.data-api", this.scopes, t.proxy(this.show, this)), t("html").on("click.context.data-api", t.proxy(this.closemenu, this))
        }, destroy: function () {
            this.$element.off(".context.data-api").removeData("context"), t("html").off(".context.data-api")
        }, isDisabled: function () {
            return this.$element.hasClass("disabled") || this.$element.attr("disabled")
        }, getMenu: function () {
            var e, n = this.$element.data("target");
            return n || (n = this.$element.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), e = t(n), e && e.length ? e : this.$element.find(n)
        }, getPosition: function (e, n) {
            var o, i, s, r = e.clientX, a = e.clientY, c = t(window).width(), l = t(window).height(), h = n.find(".dropdown-menu").outerWidth(), d = n.find(".dropdown-menu").outerHeight(), f = {
                position: "absolute",
                "z-index": 1039
            };
            return o = a + d > l ? {top: a - d + t(window).scrollTop()} : {top: a + t(window).scrollTop()}, i = r + h > c && r - h > 0 ? {left: r - h + t(window).scrollLeft()} : {left: r + t(window).scrollLeft()}, s = n.offsetParent().offset(), i.left = i.left - s.left, o.top = o.top - s.top, t.extend(f, o, i)
        }
    }, t.fn.contextmenu = function (e, o) {
        return this.each(function () {
            var i = t(this), s = i.data("context"), r = "object" == typeof e && e;
            s || i.data("context", s = new n(i, r)), "string" == typeof e && s[e].call(s, o)
        })
    }, t.fn.contextmenu.Constructor = n, t(document).on("contextmenu.context.data-api", e, function (e) {
        t(this).contextmenu("show", e), e.preventDefault()
    })
}(jQuery);