!function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (t.document)
            return e(t);
        throw new Error("jQuery requires a window with a document")
    }
    : e(t)
}("undefined" != typeof window ? window : this, function(b, L) {
    "use strict";
    function g(t) {
        return null != t && t === t.window
    }
    function D(t) {
        return "function" == typeof t && "number" != typeof t.nodeType
    }
    var t = []
      , w = b.document
      , R = Object.getPrototypeOf
      , a = t.slice
      , j = t.concat
      , q = t.push
      , H = t.indexOf
      , I = {}
      , z = I.toString
      , W = I.hasOwnProperty
      , X = W.toString
      , Y = X.call(Object)
      , m = {}
      , U = {
        type: !0,
        src: !0,
        noModule: !0
    };
    function V(t, e, n) {
        var r, i = (e = e || w).createElement("script");
        if (i.text = t,
        n)
            for (r in U)
                n[r] && (i[r] = n[r]);
        e.head.appendChild(i).parentNode.removeChild(i)
    }
    function p(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? I[z.call(t)] || "object" : typeof t
    }
    var C = function(t, e) {
        return new C.fn.init(t,e)
    }
      , $ = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function G(t) {
        var e = !!t && "length"in t && t.length
          , n = p(t);
        return !D(t) && !g(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    C.fn = C.prototype = {
        jquery: "3.3.1",
        constructor: C,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(t) {
            return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            return (t = C.merge(this.constructor(), t)).prevObject = this,
            t
        },
        each: function(t) {
            return C.each(this, t)
        },
        map: function(n) {
            return this.pushStack(C.map(this, function(t, e) {
                return n.call(t, e, t)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length
              , t = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= t && t < e ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: q,
        sort: t.sort,
        splice: t.splice
    },
    C.extend = C.fn.extend = function() {
        var t, e, n, r, i, o = arguments[0] || {}, s = 1, a = arguments.length, u = !1;
        for ("boolean" == typeof o && (u = o,
        o = arguments[s] || {},
        s++),
        "object" == typeof o || D(o) || (o = {}),
        s === a && (o = this,
        s--); s < a; s++)
            if (null != (t = arguments[s]))
                for (e in t)
                    i = o[e],
                    o !== (n = t[e]) && (u && n && (C.isPlainObject(n) || (r = Array.isArray(n))) ? (i = r ? (r = !1,
                    i && Array.isArray(i) ? i : []) : i && C.isPlainObject(i) ? i : {},
                    o[e] = C.extend(u, i, n)) : void 0 !== n && (o[e] = n));
        return o
    }
    ,
    C.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isPlainObject: function(t) {
            return !(!t || "[object Object]" !== z.call(t) || (t = R(t)) && ("function" != typeof (t = W.call(t, "constructor") && t.constructor) || X.call(t) !== Y))
        },
        isEmptyObject: function(t) {
            for (var e in t)
                return !1;
            return !0
        },
        globalEval: function(t) {
            V(t)
        },
        each: function(t, e) {
            var n, r = 0;
            if (G(t))
                for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++)
                    ;
            else
                for (r in t)
                    if (!1 === e.call(t[r], r, t[r]))
                        break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace($, "")
        },
        makeArray: function(t, e) {
            return e = e || [],
            null != t && (G(Object(t)) ? C.merge(e, "string" == typeof t ? [t] : t) : q.call(e, t)),
            e
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : H.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, r = 0, i = t.length; r < n; r++)
                t[i++] = e[r];
            return t.length = i,
            t
        },
        grep: function(t, e, n) {
            for (var r = [], i = 0, o = t.length, s = !n; i < o; i++)
                !e(t[i], i) != s && r.push(t[i]);
            return r
        },
        map: function(t, e, n) {
            var r, i, o = 0, s = [];
            if (G(t))
                for (r = t.length; o < r; o++)
                    null != (i = e(t[o], o, n)) && s.push(i);
            else
                for (o in t)
                    null != (i = e(t[o], o, n)) && s.push(i);
            return j.apply([], s)
        },
        guid: 1,
        support: m
    }),
    "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]),
    C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        I["[object " + e + "]"] = e.toLowerCase()
    });
    var e = function(n) {
        function f(t, e, n) {
            var r = "0x" + e - 65536;
            return r != r || n ? e : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }
        function L() {
            w()
        }
        function x(t, e) {
            for (var n = 0, r = t.length; n < r; n++)
                if (t[n] === e)
                    return n;
            return -1
        }
        function R(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        }
        var t, h, _, o, j, p, q, H, b, u, l, w, C, r, E, g, i, s, m, T = "sizzle" + +new Date, v = n.document, F = 0, I = 0, z = ct(), W = ct(), S = ct(), X = function(t, e) {
            return t === e && (l = !0),
            0
        }, Y = {}.hasOwnProperty, e = [], U = e.pop, V = e.push, A = e.push, $ = e.slice, G = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", a = "[\\x20\\t\\r\\n\\f]", c = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", K = "\\[" + a + "*(" + c + ")(?:" + a + "*([*^$|!~]?=)" + a + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + c + "))|)" + a + "*\\]", Q = ":(" + c + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + K + ")*)|.*)\\)|)", Z = new RegExp(a + "+","g"), k = new RegExp("^" + a + "+|((?:^|[^\\\\])(?:\\\\.)*)" + a + "+$","g"), J = new RegExp("^" + a + "*," + a + "*"), tt = new RegExp("^" + a + "*([>+~]|" + a + ")" + a + "*"), et = new RegExp("=" + a + "*([^\\]'\"]*?)" + a + "*\\]","g"), nt = new RegExp(Q), rt = new RegExp("^" + c + "$"), d = {
            ID: new RegExp("^#(" + c + ")"),
            CLASS: new RegExp("^\\.(" + c + ")"),
            TAG: new RegExp("^(" + c + "|[*])"),
            ATTR: new RegExp("^" + K),
            PSEUDO: new RegExp("^" + Q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + a + "*(even|odd|(([+-]|)(\\d*)n|)" + a + "*(?:([+-]|)" + a + "*(\\d+)|))" + a + "*\\)|)","i"),
            bool: new RegExp("^(?:" + G + ")$","i"),
            needsContext: new RegExp("^" + a + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + a + "*((?:-\\d)?\\d*)" + a + "*\\)|)(?=[^-]|$)","i")
        }, it = /^(?:input|select|textarea|button)$/i, ot = /^h\d$/i, D = /^[^{]+\{\s*\[native \w/, st = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, at = /[+~]/, y = new RegExp("\\\\([\\da-f]{1,6}" + a + "?|(" + a + ")|.)","ig"), ut = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, lt = mt(function(t) {
            return !0 === t.disabled && ("form"in t || "label"in t)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            A.apply(e = $.call(v.childNodes), v.childNodes),
            e[v.childNodes.length].nodeType
        } catch (n) {
            A = {
                apply: e.length ? function(t, e) {
                    V.apply(t, $.call(e))
                }
                : function(t, e) {
                    for (var n = t.length, r = 0; t[n++] = e[r++]; )
                        ;
                    t.length = n - 1
                }
            }
        }
        function P(t, e, n, r) {
            var i, o, s, a, u, l, c, f = e && e.ownerDocument, d = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d)
                return n;
            if (!r && ((e ? e.ownerDocument || e : v) !== C && w(e),
            e = e || C,
            E)) {
                if (11 !== d && (u = st.exec(t)))
                    if (i = u[1]) {
                        if (9 === d) {
                            if (!(s = e.getElementById(i)))
                                return n;
                            if (s.id === i)
                                return n.push(s),
                                n
                        } else if (f && (s = f.getElementById(i)) && m(e, s) && s.id === i)
                            return n.push(s),
                            n
                    } else {
                        if (u[2])
                            return A.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && h.getElementsByClassName && e.getElementsByClassName)
                            return A.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (h.qsa && !S[t + " "] && (!g || !g.test(t))) {
                    if (1 !== d)
                        f = e,
                        c = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(ut, R) : e.setAttribute("id", a = T),
                        o = (l = p(t)).length; o--; )
                            l[o] = "#" + a + " " + N(l[o]);
                        c = l.join(","),
                        f = at.test(t) && pt(e.parentNode) || e
                    }
                    if (c)
                        try {
                            return A.apply(n, f.querySelectorAll(c)),
                            n
                        } catch (t) {} finally {
                            a === T && e.removeAttribute("id")
                        }
                }
            }
            return H(t.replace(k, "$1"), e, n, r)
        }
        function ct() {
            var n = [];
            function r(t, e) {
                return n.push(t + " ") > _.cacheLength && delete r[n.shift()],
                r[t + " "] = e
            }
            return r
        }
        function M(t) {
            return t[T] = !0,
            t
        }
        function O(t) {
            var e = C.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e)
            }
        }
        function ft(t, e) {
            for (var n = t.split("|"), r = n.length; r--; )
                _.attrHandle[n[r]] = e
        }
        function dt(t, e) {
            var n = e && t
              , r = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === e)
                        return -1;
            return t ? 1 : -1
        }
        function ht(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && lt(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function B(s) {
            return M(function(o) {
                return o = +o,
                M(function(t, e) {
                    for (var n, r = s([], t.length, o), i = r.length; i--; )
                        t[n = r[i]] && (t[n] = !(e[n] = t[n]))
                })
            })
        }
        function pt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (t in h = P.support = {},
        j = P.isXML = function(t) {
            return !!(t = t && (t.ownerDocument || t).documentElement) && "HTML" !== t.nodeName
        }
        ,
        w = P.setDocument = function(t) {
            var e;
            return (t = t ? t.ownerDocument || t : v) !== C && 9 === t.nodeType && t.documentElement && (r = (C = t).documentElement,
            E = !j(C),
            v !== C && (e = C.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", L, !1) : e.attachEvent && e.attachEvent("onunload", L)),
            h.attributes = O(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }),
            h.getElementsByTagName = O(function(t) {
                return t.appendChild(C.createComment("")),
                !t.getElementsByTagName("*").length
            }),
            h.getElementsByClassName = D.test(C.getElementsByClassName),
            h.getById = O(function(t) {
                return r.appendChild(t).id = T,
                !C.getElementsByName || !C.getElementsByName(T).length
            }),
            h.getById ? (_.filter.ID = function(t) {
                var e = t.replace(y, f);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }
            ,
            _.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && E)
                    return (t = e.getElementById(t)) ? [t] : []
            }
            ) : (_.filter.ID = function(t) {
                var e = t.replace(y, f);
                return function(t) {
                    return (t = void 0 !== t.getAttributeNode && t.getAttributeNode("id")) && t.value === e
                }
            }
            ,
            _.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && E) {
                    var n, r, i, o = e.getElementById(t);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === t)
                            return [o];
                        for (i = e.getElementsByName(t),
                        r = 0; o = i[r++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === t)
                                return [o]
                    }
                    return []
                }
            }
            ),
            _.find.TAG = h.getElementsByTagName ? function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : h.qsa ? e.querySelectorAll(t) : void 0
            }
            : function(t, e) {
                var n, r = [], i = 0, o = e.getElementsByTagName(t);
                if ("*" !== t)
                    return o;
                for (; n = o[i++]; )
                    1 === n.nodeType && r.push(n);
                return r
            }
            ,
            _.find.CLASS = h.getElementsByClassName && function(t, e) {
                if (void 0 !== e.getElementsByClassName && E)
                    return e.getElementsByClassName(t)
            }
            ,
            i = [],
            g = [],
            (h.qsa = D.test(C.querySelectorAll)) && (O(function(t) {
                r.appendChild(t).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + a + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || g.push("\\[" + a + "*(?:value|" + G + ")"),
                t.querySelectorAll("[id~=" + T + "-]").length || g.push("~="),
                t.querySelectorAll(":checked").length || g.push(":checked"),
                t.querySelectorAll("a#" + T + "+*").length || g.push(".#.+[+~]")
            }),
            O(function(t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = C.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && g.push("name" + a + "*[*^$|!~]?="),
                2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                r.appendChild(t).disabled = !0,
                2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                g.push(",.*:")
            })),
            (h.matchesSelector = D.test(s = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.oMatchesSelector || r.msMatchesSelector)) && O(function(t) {
                h.disconnectedMatch = s.call(t, "*"),
                s.call(t, "[s!='']:x"),
                i.push("!=", Q)
            }),
            g = g.length && new RegExp(g.join("|")),
            i = i.length && new RegExp(i.join("|")),
            e = D.test(r.compareDocumentPosition),
            m = e || D.test(r.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t;
                return t === (e = e && e.parentNode) || !(!e || 1 !== e.nodeType || !(n.contains ? n.contains(e) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(e)))
            }
            : function(t, e) {
                if (e)
                    for (; e = e.parentNode; )
                        if (e === t)
                            return !0;
                return !1
            }
            ,
            X = e ? function(t, e) {
                var n;
                return t === e ? (l = !0,
                0) : !t.compareDocumentPosition - !e.compareDocumentPosition || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !h.sortDetached && e.compareDocumentPosition(t) === n ? t === C || t.ownerDocument === v && m(v, t) ? -1 : e === C || e.ownerDocument === v && m(v, e) ? 1 : u ? x(u, t) - x(u, e) : 0 : 4 & n ? -1 : 1)
            }
            : function(t, e) {
                if (t === e)
                    return l = !0,
                    0;
                var n, r = 0, i = t.parentNode, o = e.parentNode, s = [t], a = [e];
                if (!i || !o)
                    return t === C ? -1 : e === C ? 1 : i ? -1 : o ? 1 : u ? x(u, t) - x(u, e) : 0;
                if (i === o)
                    return dt(t, e);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (; s[r] === a[r]; )
                    r++;
                return r ? dt(s[r], a[r]) : s[r] === v ? -1 : a[r] === v ? 1 : 0
            }
            ),
            C
        }
        ,
        P.matches = function(t, e) {
            return P(t, null, null, e)
        }
        ,
        P.matchesSelector = function(t, e) {
            if ((t.ownerDocument || t) !== C && w(t),
            e = e.replace(et, "='$1']"),
            h.matchesSelector && E && !S[e + " "] && (!i || !i.test(e)) && (!g || !g.test(e)))
                try {
                    var n = s.call(t, e);
                    if (n || h.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return n
                } catch (t) {}
            return 0 < P(e, C, null, [t]).length
        }
        ,
        P.contains = function(t, e) {
            return (t.ownerDocument || t) !== C && w(t),
            m(t, e)
        }
        ,
        P.attr = function(t, e) {
            (t.ownerDocument || t) !== C && w(t);
            var n = _.attrHandle[e.toLowerCase()];
            return void 0 !== (n = n && Y.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !E) : void 0) ? n : h.attributes || !E ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }
        ,
        P.escape = function(t) {
            return (t + "").replace(ut, R)
        }
        ,
        P.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }
        ,
        P.uniqueSort = function(t) {
            var e, n = [], r = 0, i = 0;
            if (l = !h.detectDuplicates,
            u = !h.sortStable && t.slice(0),
            t.sort(X),
            l) {
                for (; e = t[i++]; )
                    e === t[i] && (r = n.push(i));
                for (; r--; )
                    t.splice(n[r], 1)
            }
            return u = null,
            t
        }
        ,
        o = P.getText = function(t) {
            var e, n = "", r = 0, i = t.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += o(t)
                } else if (3 === i || 4 === i)
                    return t.nodeValue
            } else
                for (; e = t[r++]; )
                    n += o(e);
            return n
        }
        ,
        (_ = P.selectors = {
            cacheLength: 50,
            createPseudo: M,
            match: d,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(y, f),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(y, f),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || P.error(t[0]),
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && P.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return d.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && nt.test(n) && (e = (e = p(n, !0)) && n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                    t[2] = n.slice(0, e)),
                    t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(y, f).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    }
                    : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = z[t + " "];
                    return e || (e = new RegExp("(^|" + a + ")" + t + "(" + a + "|$)")) && z(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(t) {
                        return null == (t = P.attr(t, e)) ? "!=" === n : !n || (t += "",
                        "=" === n ? t === r : "!=" === n ? t !== r : "^=" === n ? r && 0 === t.indexOf(r) : "*=" === n ? r && -1 < t.indexOf(r) : "$=" === n ? r && t.slice(-r.length) === r : "~=" === n ? -1 < (" " + t.replace(Z, " ") + " ").indexOf(r) : "|=" === n && (t === r || t.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(p, t, e, g, m) {
                    var v = "nth" !== p.slice(0, 3)
                      , D = "last" !== p.slice(-4)
                      , y = "of-type" === t;
                    return 1 === g && 0 === m ? function(t) {
                        return !!t.parentNode
                    }
                    : function(t, e, n) {
                        var r, i, o, s, a, u, l = v != D ? "nextSibling" : "previousSibling", c = t.parentNode, f = y && t.nodeName.toLowerCase(), d = !n && !y, h = !1;
                        if (c) {
                            if (v) {
                                for (; l; ) {
                                    for (s = t; s = s[l]; )
                                        if (y ? s.nodeName.toLowerCase() === f : 1 === s.nodeType)
                                            return !1;
                                    u = l = "only" === p && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [D ? c.firstChild : c.lastChild],
                            D && d) {
                                for (h = (a = (r = (i = (o = (s = c)[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === F && r[1]) && r[2],
                                s = a && c.childNodes[a]; s = ++a && s && s[l] || (h = a = 0,
                                u.pop()); )
                                    if (1 === s.nodeType && ++h && s === t) {
                                        i[p] = [F, a, h];
                                        break
                                    }
                            } else if (!1 === (h = d ? a = (r = (i = (o = (s = t)[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === F && r[1] : h))
                                for (; (s = ++a && s && s[l] || (h = a = 0,
                                u.pop())) && ((y ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++h || (d && ((i = (o = s[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] = [F, h]),
                                s !== t)); )
                                    ;
                            return (h -= m) === g || h % g == 0 && 0 <= h / g
                        }
                    }
                },
                PSEUDO: function(t, o) {
                    var e, s = _.pseudos[t] || _.setFilters[t.toLowerCase()] || P.error("unsupported pseudo: " + t);
                    return s[T] ? s(o) : 1 < s.length ? (e = [t, t, "", o],
                    _.setFilters.hasOwnProperty(t.toLowerCase()) ? M(function(t, e) {
                        for (var n, r = s(t, o), i = r.length; i--; )
                            t[n = x(t, r[i])] = !(e[n] = r[i])
                    }) : function(t) {
                        return s(t, 0, e)
                    }
                    ) : s
                }
            },
            pseudos: {
                not: M(function(t) {
                    var r = []
                      , i = []
                      , a = q(t.replace(k, "$1"));
                    return a[T] ? M(function(t, e, n, r) {
                        for (var i, o = a(t, null, r, []), s = t.length; s--; )
                            (i = o[s]) && (t[s] = !(e[s] = i))
                    }) : function(t, e, n) {
                        return r[0] = t,
                        a(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: M(function(e) {
                    return function(t) {
                        return 0 < P(e, t).length
                    }
                }),
                contains: M(function(e) {
                    return e = e.replace(y, f),
                    function(t) {
                        return -1 < (t.textContent || t.innerText || o(t)).indexOf(e)
                    }
                }),
                lang: M(function(n) {
                    return rt.test(n || "") || P.error("unsupported lang: " + n),
                    n = n.replace(y, f).toLowerCase(),
                    function(t) {
                        var e;
                        do {
                            if (e = E ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var e = n.location && n.location.hash;
                    return e && e.slice(1) === t.id
                },
                root: function(t) {
                    return t === r
                },
                focus: function(t) {
                    return t === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: ht(!1),
                disabled: ht(!0),
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !_.pseudos.empty(t)
                },
                header: function(t) {
                    return ot.test(t.nodeName)
                },
                input: function(t) {
                    return it.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (t = t.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: B(function() {
                    return [0]
                }),
                last: B(function(t, e) {
                    return [e - 1]
                }),
                eq: B(function(t, e, n) {
                    return [n < 0 ? n + e : n]
                }),
                even: B(function(t, e) {
                    for (var n = 0; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                odd: B(function(t, e) {
                    for (var n = 1; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                lt: B(function(t, e, n) {
                    for (var r = n < 0 ? n + e : n; 0 <= --r; )
                        t.push(r);
                    return t
                }),
                gt: B(function(t, e, n) {
                    for (var r = n < 0 ? n + e : n; ++r < e; )
                        t.push(r);
                    return t
                })
            }
        }).pseudos.nth = _.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            _.pseudos[t] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            _.pseudos[t] = function(n) {
                return function(t) {
                    var e = t.nodeName.toLowerCase();
                    return ("input" === e || "button" === e) && t.type === n
                }
            }(t);
        function gt() {}
        function N(t) {
            for (var e = 0, n = t.length, r = ""; e < n; e++)
                r += t[e].value;
            return r
        }
        function mt(s, t, e) {
            var a = t.dir
              , u = t.next
              , l = u || a
              , c = e && "parentNode" === l
              , f = I++;
            return t.first ? function(t, e, n) {
                for (; t = t[a]; )
                    if (1 === t.nodeType || c)
                        return s(t, e, n);
                return !1
            }
            : function(t, e, n) {
                var r, i, o = [F, f];
                if (n) {
                    for (; t = t[a]; )
                        if ((1 === t.nodeType || c) && s(t, e, n))
                            return !0
                } else
                    for (; t = t[a]; )
                        if (1 === t.nodeType || c)
                            if (r = (i = t[T] || (t[T] = {}))[t.uniqueID] || (i[t.uniqueID] = {}),
                            u && u === t.nodeName.toLowerCase())
                                t = t[a] || t;
                            else {
                                if ((i = r[l]) && i[0] === F && i[1] === f)
                                    return o[2] = i[2];
                                if ((r[l] = o)[2] = s(t, e, n))
                                    return !0
                            }
                return !1
            }
        }
        function vt(i) {
            return 1 < i.length ? function(t, e, n) {
                for (var r = i.length; r--; )
                    if (!i[r](t, e, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function Dt(t, e, n, r, i) {
            for (var o, s = [], a = 0, u = t.length, l = null != e; a < u; a++)
                !(o = t[a]) || n && !n(o, r, i) || (s.push(o),
                l && e.push(a));
            return s
        }
        return gt.prototype = _.filters = _.pseudos,
        _.setFilters = new gt,
        p = P.tokenize = function(t, e) {
            var n, r, i, o, s, a, u, l = W[t + " "];
            if (l)
                return e ? 0 : l.slice(0);
            for (s = t,
            a = [],
            u = _.preFilter; s; ) {
                for (o in n && !(r = J.exec(s)) || (r && (s = s.slice(r[0].length) || s),
                a.push(i = [])),
                n = !1,
                (r = tt.exec(s)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(k, " ")
                }),
                s = s.slice(n.length)),
                _.filter)
                    !(r = d[o].exec(s)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return e ? s.length : s ? P.error(t) : W(t, a).slice(0)
        }
        ,
        q = P.compile = function(t, e) {
            var n, m, v, D, y, r = [], i = [], o = S[t + " "];
            if (!o) {
                for (n = (e = e || p(t)).length; n--; )
                    ((o = function t(e) {
                        for (var r, n, i, o = e.length, s = _.relative[e[0].type], a = s || _.relative[" "], u = s ? 1 : 0, l = mt(function(t) {
                            return t === r
                        }, a, !0), c = mt(function(t) {
                            return -1 < x(r, t)
                        }, a, !0), f = [function(t, e, n) {
                            return n = !s && (n || e !== b) || ((r = e).nodeType ? l : c)(t, e, n),
                            r = null,
                            n
                        }
                        ]; u < o; u++)
                            if (n = _.relative[e[u].type])
                                f = [mt(vt(f), n)];
                            else {
                                if ((n = _.filter[e[u].type].apply(null, e[u].matches))[T]) {
                                    for (i = ++u; i < o && !_.relative[e[i].type]; i++)
                                        ;
                                    return function t(h, p, g, m, v, e) {
                                        return m && !m[T] && (m = t(m)),
                                        v && !v[T] && (v = t(v, e)),
                                        M(function(t, e, n, r) {
                                            var i, o, s, a = [], u = [], l = e.length, c = t || function(t, e, n) {
                                                for (var r = 0, i = e.length; r < i; r++)
                                                    P(t, e[r], n);
                                                return n
                                            }(p || "*", n.nodeType ? [n] : n, []), f = !h || !t && p ? c : Dt(c, a, h, n, r), d = g ? v || (t ? h : l || m) ? [] : e : f;
                                            if (g && g(f, d, n, r),
                                            m)
                                                for (i = Dt(d, u),
                                                m(i, [], n, r),
                                                o = i.length; o--; )
                                                    (s = i[o]) && (d[u[o]] = !(f[u[o]] = s));
                                            if (t) {
                                                if (v || h) {
                                                    if (v) {
                                                        for (i = [],
                                                        o = d.length; o--; )
                                                            (s = d[o]) && i.push(f[o] = s);
                                                        v(null, d = [], i, r)
                                                    }
                                                    for (o = d.length; o--; )
                                                        (s = d[o]) && -1 < (i = v ? x(t, s) : a[o]) && (t[i] = !(e[i] = s))
                                                }
                                            } else
                                                d = Dt(d === e ? d.splice(l, d.length) : d),
                                                v ? v(null, e, d, r) : A.apply(e, d)
                                        })
                                    }(1 < u && vt(f), 1 < u && N(e.slice(0, u - 1).concat({
                                        value: " " === e[u - 2].type ? "*" : ""
                                    })).replace(k, "$1"), n, u < i && t(e.slice(u, i)), i < o && t(e = e.slice(i)), i < o && N(e))
                                }
                                f.push(n)
                            }
                        return vt(f)
                    }(e[n]))[T] ? r : i).push(o);
                (o = S(t, (m = i,
                D = 0 < (v = r).length,
                y = 0 < m.length,
                D ? M(s) : s))).selector = t
            }
            function s(t, e, n, r, i) {
                var o, s, a, u = 0, l = "0", c = t && [], f = [], d = b, h = t || y && _.find.TAG("*", i), p = F += null == d ? 1 : Math.random() || .1, g = h.length;
                for (i && (b = e === C || e || i); l !== g && null != (o = h[l]); l++) {
                    if (y && o) {
                        for (s = 0,
                        e || o.ownerDocument === C || (w(o),
                        n = !E); a = m[s++]; )
                            if (a(o, e || C, n)) {
                                r.push(o);
                                break
                            }
                        i && (F = p)
                    }
                    D && ((o = !a && o) && u--,
                    t) && c.push(o)
                }
                if (u += l,
                D && l !== u) {
                    for (s = 0; a = v[s++]; )
                        a(c, f, e, n);
                    if (t) {
                        if (0 < u)
                            for (; l--; )
                                c[l] || f[l] || (f[l] = U.call(r));
                        f = Dt(f)
                    }
                    A.apply(r, f),
                    i && !t && 0 < f.length && 1 < u + v.length && P.uniqueSort(r)
                }
                return i && (F = p,
                b = d),
                c
            }
            return o
        }
        ,
        H = P.select = function(t, e, n, r) {
            var i, o, s, a, u, l = "function" == typeof t && t, c = !r && p(t = l.selector || t);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === e.nodeType && E && _.relative[o[1].type]) {
                    if (!(e = (_.find.ID(s.matches[0].replace(y, f), e) || [])[0]))
                        return n;
                    l && (e = e.parentNode),
                    t = t.slice(o.shift().value.length)
                }
                for (i = d.needsContext.test(t) ? 0 : o.length; i-- && (s = o[i],
                !_.relative[a = s.type]); )
                    if ((u = _.find[a]) && (r = u(s.matches[0].replace(y, f), at.test(o[0].type) && pt(e.parentNode) || e))) {
                        if (o.splice(i, 1),
                        t = r.length && N(o))
                            break;
                        return A.apply(n, r),
                        n
                    }
            }
            return (l || q(t, c))(r, e, !E, n, !e || at.test(t) && pt(e.parentNode) || e),
            n
        }
        ,
        h.sortStable = T.split("").sort(X).join("") === T,
        h.detectDuplicates = !!l,
        w(),
        h.sortDetached = O(function(t) {
            return 1 & t.compareDocumentPosition(C.createElement("fieldset"))
        }),
        O(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || ft("type|href|height|width", function(t, e, n) {
            if (!n)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        h.attributes && O(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || ft("value", function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase())
                return t.defaultValue
        }),
        O(function(t) {
            return null == t.getAttribute("disabled")
        }) || ft(G, function(t, e, n) {
            if (!n)
                return !0 === t[e] ? e.toLowerCase() : (e = t.getAttributeNode(e)) && e.specified ? e.value : null
        }),
        P
    }(b);
    function r(t, e, n) {
        for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
                if (i && C(t).is(n))
                    break;
                r.push(t)
            }
        return r
    }
    function K(t, e) {
        for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
        return n
    }
    C.find = e,
    C.expr = e.selectors,
    C.expr[":"] = C.expr.pseudos,
    C.uniqueSort = C.unique = e.uniqueSort,
    C.text = e.getText,
    C.isXMLDoc = e.isXML,
    C.contains = e.contains,
    C.escapeSelector = e.escape;
    var Q = C.expr.match.needsContext;
    function u(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var Z = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function J(t, n, r) {
        return D(n) ? C.grep(t, function(t, e) {
            return !!n.call(t, e, t) !== r
        }) : n.nodeType ? C.grep(t, function(t) {
            return t === n !== r
        }) : "string" != typeof n ? C.grep(t, function(t) {
            return -1 < H.call(n, t) !== r
        }) : C.filter(n, t, r)
    }
    C.filter = function(t, e, n) {
        var r = e[0];
        return n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === r.nodeType ? C.find.matchesSelector(r, t) ? [r] : [] : C.find.matches(t, C.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }
    ,
    C.fn.extend({
        find: function(t) {
            var e, n, r = this.length, i = this;
            if ("string" != typeof t)
                return this.pushStack(C(t).filter(function() {
                    for (e = 0; e < r; e++)
                        if (C.contains(i[e], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            e = 0; e < r; e++)
                C.find(t, i[e], n);
            return 1 < r ? C.uniqueSort(n) : n
        },
        filter: function(t) {
            return this.pushStack(J(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(J(this, t || [], !0))
        },
        is: function(t) {
            return !!J(this, "string" == typeof t && Q.test(t) ? C(t) : t || [], !1).length
        }
    });
    var tt, et = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, nt = ((C.fn.init = function(t, e, n) {
        if (t) {
            if (n = n || tt,
            "string" != typeof t)
                return t.nodeType ? (this[0] = t,
                this.length = 1,
                this) : D(t) ? void 0 !== n.ready ? n.ready(t) : t(C) : C.makeArray(t, this);
            if (!(r = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : et.exec(t)) || !r[1] && e)
                return (!e || e.jquery ? e || n : this.constructor(e)).find(t);
            if (r[1]) {
                if (e = e instanceof C ? e[0] : e,
                C.merge(this, C.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : w, !0)),
                Z.test(r[1]) && C.isPlainObject(e))
                    for (var r in e)
                        D(this[r]) ? this[r](e[r]) : this.attr(r, e[r])
            } else
                (t = w.getElementById(r[2])) && (this[0] = t,
                this.length = 1)
        }
        return this
    }
    ).prototype = C.fn,
    tt = C(w),
    /^(?:parents|prev(?:Until|All))/), rt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function it(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; )
            ;
        return t
    }
    C.fn.extend({
        has: function(t) {
            var e = C(t, this)
              , n = e.length;
            return this.filter(function() {
                for (var t = 0; t < n; t++)
                    if (C.contains(this, e[t]))
                        return !0
            })
        },
        closest: function(t, e) {
            var n, r = 0, i = this.length, o = [], s = "string" != typeof t && C(t);
            if (!Q.test(t))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, t))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? C.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? H.call(C(t), this[0]) : H.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    C.each({
        parent: function(t) {
            return (t = t.parentNode) && 11 !== t.nodeType ? t : null
        },
        parents: function(t) {
            return r(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return r(t, "parentNode", n)
        },
        next: function(t) {
            return it(t, "nextSibling")
        },
        prev: function(t) {
            return it(t, "previousSibling")
        },
        nextAll: function(t) {
            return r(t, "nextSibling")
        },
        prevAll: function(t) {
            return r(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return r(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return r(t, "previousSibling", n)
        },
        siblings: function(t) {
            return K((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return K(t.firstChild)
        },
        contents: function(t) {
            return u(t, "iframe") ? t.contentDocument : (u(t, "template") && (t = t.content || t),
            C.merge([], t.childNodes))
        }
    }, function(r, i) {
        C.fn[r] = function(t, e) {
            var n = C.map(this, i, t);
            return (e = "Until" !== r.slice(-5) ? t : e) && "string" == typeof e && (n = C.filter(e, n)),
            1 < this.length && (rt[r] || C.uniqueSort(n),
            nt.test(r)) && n.reverse(),
            this.pushStack(n)
        }
    });
    var E = /[^\x20\t\r\n\f]+/g;
    function c(t) {
        return t
    }
    function ot(t) {
        throw t
    }
    function st(t, e, n, r) {
        var i;
        try {
            t && D(i = t.promise) ? i.call(t).done(e).fail(n) : t && D(i = t.then) ? i.call(t, e, n) : e.apply(void 0, [t].slice(r))
        } catch (t) {
            n.apply(void 0, [t])
        }
    }
    C.Callbacks = function(r) {
        var t, n;
        function i() {
            for (a = a || r.once,
            s = o = !0; l.length; c = -1)
                for (e = l.shift(); ++c < u.length; )
                    !1 === u[c].apply(e[0], e[1]) && r.stopOnFalse && (c = u.length,
                    e = !1);
            r.memory || (e = !1),
            o = !1,
            a && (u = e ? [] : "")
        }
        r = "string" == typeof r ? (t = r,
        n = {},
        C.each(t.match(E) || [], function(t, e) {
            n[e] = !0
        }),
        n) : C.extend({}, r);
        var o, e, s, a, u = [], l = [], c = -1, f = {
            add: function() {
                return u && (e && !o && (c = u.length - 1,
                l.push(e)),
                function n(t) {
                    C.each(t, function(t, e) {
                        D(e) ? r.unique && f.has(e) || u.push(e) : e && e.length && "string" !== p(e) && n(e)
                    })
                }(arguments),
                e) && !o && i(),
                this
            },
            remove: function() {
                return C.each(arguments, function(t, e) {
                    for (var n; -1 < (n = C.inArray(e, u, n)); )
                        u.splice(n, 1),
                        n <= c && c--
                }),
                this
            },
            has: function(t) {
                return t ? -1 < C.inArray(t, u) : 0 < u.length
            },
            empty: function() {
                return u = u && [],
                this
            },
            disable: function() {
                return a = l = [],
                u = e = "",
                this
            },
            disabled: function() {
                return !u
            },
            lock: function() {
                return a = l = [],
                e || o || (u = e = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(t, e) {
                return a || (e = [t, (e = e || []).slice ? e.slice() : e],
                l.push(e),
                o) || i(),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!s
            }
        };
        return f
    }
    ,
    C.extend({
        Deferred: function(t) {
            var o = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , s = {
                state: function() {
                    return i
                },
                always: function() {
                    return a.done(arguments).fail(arguments),
                    this
                },
                catch: function(t) {
                    return s.then(null, t)
                },
                pipe: function() {
                    var i = arguments;
                    return C.Deferred(function(r) {
                        C.each(o, function(t, e) {
                            var n = D(i[e[4]]) && i[e[4]];
                            a[e[1]](function() {
                                var t = n && n.apply(this, arguments);
                                t && D(t.promise) ? t.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[e[0] + "With"](this, n ? [t] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(e, n, r) {
                    var u = 0;
                    function l(i, o, s, a) {
                        return function() {
                            function t() {
                                var t, e;
                                if (!(i < u)) {
                                    if ((t = s.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    e = t && ("object" == typeof t || "function" == typeof t) && t.then,
                                    D(e) ? a ? e.call(t, l(u, o, c, a), l(u, o, ot, a)) : (u++,
                                    e.call(t, l(u, o, c, a), l(u, o, ot, a), l(u, o, c, o.notifyWith))) : (s !== c && (n = void 0,
                                    r = [t]),
                                    (a || o.resolveWith)(n, r))
                                }
                            }
                            var n = this
                              , r = arguments
                              , e = a ? t : function() {
                                try {
                                    t()
                                } catch (t) {
                                    C.Deferred.exceptionHook && C.Deferred.exceptionHook(t, e.stackTrace),
                                    u <= i + 1 && (s !== ot && (n = void 0,
                                    r = [t]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? e() : (C.Deferred.getStackHook && (e.stackTrace = C.Deferred.getStackHook()),
                            b.setTimeout(e))
                        }
                    }
                    return C.Deferred(function(t) {
                        o[0][3].add(l(0, t, D(r) ? r : c, t.notifyWith)),
                        o[1][3].add(l(0, t, D(e) ? e : c)),
                        o[2][3].add(l(0, t, D(n) ? n : ot))
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? C.extend(t, s) : s
                }
            }
              , a = {};
            return C.each(o, function(t, e) {
                var n = e[2]
                  , r = e[5];
                s[e[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - t][2].disable, o[3 - t][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(e[3].fire),
                a[e[0]] = function() {
                    return a[e[0] + "With"](this === a ? void 0 : this, arguments),
                    this
                }
                ,
                a[e[0] + "With"] = n.fireWith
            }),
            s.promise(a),
            t && t.call(a, a),
            a
        },
        when: function(t) {
            function e(e) {
                return function(t) {
                    i[e] = this,
                    o[e] = 1 < arguments.length ? a.call(arguments) : t,
                    --n || s.resolveWith(i, o)
                }
            }
            var n = arguments.length
              , r = n
              , i = Array(r)
              , o = a.call(arguments)
              , s = C.Deferred();
            if (n <= 1 && (st(t, s.done(e(r)).resolve, s.reject, !n),
            "pending" === s.state() || D(o[r] && o[r].then)))
                return s.then();
            for (; r--; )
                st(o[r], e(r), s.reject);
            return s.promise()
        }
    });
    var at = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
      , ut = (C.Deferred.exceptionHook = function(t, e) {
        b.console && b.console.warn && t && at.test(t.name) && b.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
    }
    ,
    C.readyException = function(t) {
        b.setTimeout(function() {
            throw t
        })
    }
    ,
    C.Deferred());
    function lt() {
        w.removeEventListener("DOMContentLoaded", lt),
        b.removeEventListener("load", lt),
        C.ready()
    }
    C.fn.ready = function(t) {
        return ut.then(t).catch(function(t) {
            C.readyException(t)
        }),
        this
    }
    ,
    C.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(t) {
            (!0 === t ? --C.readyWait : C.isReady) || (C.isReady = !0) !== t && 0 < --C.readyWait || ut.resolveWith(w, [C])
        }
    }),
    C.ready.then = ut.then,
    "complete" === w.readyState || "loading" !== w.readyState && !w.documentElement.doScroll ? b.setTimeout(C.ready) : (w.addEventListener("DOMContentLoaded", lt),
    b.addEventListener("load", lt));
    function f(t, e, n, r, i, o, s) {
        var a = 0
          , u = t.length
          , l = null == n;
        if ("object" === p(n))
            for (a in i = !0,
            n)
                f(t, e, a, n[a], !0, o, s);
        else if (void 0 !== r && (i = !0,
        D(r) || (s = !0),
        e = l ? s ? (e.call(t, r),
        null) : (l = e,
        function(t, e, n) {
            return l.call(C(t), n)
        }
        ) : e))
            for (; a < u; a++)
                e(t[a], n, s ? r : r.call(t[a], a, e(t[a], n)));
        return i ? t : l ? e.call(t) : u ? e(t[0], n) : o
    }
    var ct = /^-ms-/
      , ft = /-([a-z])/g;
    function dt(t, e) {
        return e.toUpperCase()
    }
    function y(t) {
        return t.replace(ct, "ms-").replace(ft, dt)
    }
    function ht(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }
    function n() {
        this.expando = C.expando + n.uid++
    }
    n.uid = 1,
    n.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {},
            ht(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))),
            e
        },
        set: function(t, e, n) {
            var r, i = this.cache(t);
            if ("string" == typeof e)
                i[y(e)] = n;
            else
                for (r in e)
                    i[y(r)] = e[r];
            return i
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][y(e)]
        },
        access: function(t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n),
            void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, r = t[this.expando];
            if (void 0 !== r) {
                if (void 0 !== e) {
                    n = (e = Array.isArray(e) ? e.map(y) : (e = y(e))in r ? [e] : e.match(E) || []).length;
                    for (; n--; )
                        delete r[e[n]]
                }
                void 0 !== e && !C.isEmptyObject(r) || (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            return void 0 !== (t = t[this.expando]) && !C.isEmptyObject(t)
        }
    };
    var v = new n
      , l = new n
      , pt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , gt = /[A-Z]/g;
    function mt(t, e, n) {
        var r, i;
        if (void 0 === n && 1 === t.nodeType)
            if (r = "data-" + e.replace(gt, "-$&").toLowerCase(),
            "string" == typeof (n = t.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : pt.test(i) ? JSON.parse(i) : i)
                } catch (t) {}
                l.set(t, e, n)
            } else
                n = void 0;
        return n
    }
    function vt(t, e, n, r) {
        var i, o = {};
        for (i in e)
            o[i] = t.style[i],
            t.style[i] = e[i];
        for (i in r = n.apply(t, r || []),
        e)
            t.style[i] = o[i];
        return r
    }
    C.extend({
        hasData: function(t) {
            return l.hasData(t) || v.hasData(t)
        },
        data: function(t, e, n) {
            return l.access(t, e, n)
        },
        removeData: function(t, e) {
            l.remove(t, e)
        },
        _data: function(t, e, n) {
            return v.access(t, e, n)
        },
        _removeData: function(t, e) {
            v.remove(t, e)
        }
    }),
    C.fn.extend({
        data: function(n, t) {
            var e, r, i, o = this[0], s = o && o.attributes;
            if (void 0 !== n)
                return "object" == typeof n ? this.each(function() {
                    l.set(this, n)
                }) : f(this, function(t) {
                    var e;
                    return o && void 0 === t ? void 0 !== (e = l.get(o, n)) || void 0 !== (e = mt(o, n)) ? e : void 0 : void this.each(function() {
                        l.set(this, n, t)
                    })
                }, null, t, 1 < arguments.length, null, !0);
            if (this.length && (i = l.get(o),
            1 === o.nodeType) && !v.get(o, "hasDataAttrs")) {
                for (e = s.length; e--; )
                    s[e] && 0 === (r = s[e].name).indexOf("data-") && (r = y(r.slice(5)),
                    mt(o, r, i[r]));
                v.set(o, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(t) {
            return this.each(function() {
                l.remove(this, t)
            })
        }
    }),
    C.extend({
        queue: function(t, e, n) {
            var r;
            if (t)
                return r = v.get(t, e = (e || "fx") + "queue"),
                n && (!r || Array.isArray(n) ? r = v.access(t, e, C.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = C.queue(t, e)
              , r = n.length
              , i = n.shift()
              , o = C._queueHooks(t, e);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === e && n.unshift("inprogress"),
            delete o.stop,
            i.call(t, function() {
                C.dequeue(t, e)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return v.get(t, n) || v.access(t, n, {
                empty: C.Callbacks("once memory").add(function() {
                    v.remove(t, [e + "queue", n])
                })
            })
        }
    }),
    C.fn.extend({
        queue: function(e, n) {
            var t = 2;
            return "string" != typeof e && (n = e,
            e = "fx",
            t--),
            arguments.length < t ? C.queue(this[0], e) : void 0 === n ? this : this.each(function() {
                var t = C.queue(this, e, n);
                C._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && C.dequeue(this, e)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                C.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            function n() {
                --i || o.resolveWith(s, [s])
            }
            var r, i = 1, o = C.Deferred(), s = this, a = this.length;
            for ("string" != typeof t && (e = t,
            t = void 0),
            t = t || "fx"; a--; )
                (r = v.get(s[a], t + "queueHooks")) && r.empty && (i++,
                r.empty.add(n));
            return n(),
            o.promise(e)
        }
    });
    function Dt(t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && C.contains(t.ownerDocument, t) && "none" === C.css(t, "display")
    }
    var yt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , d = new RegExp("^(?:([+-])=|)(" + yt + ")([a-z%]*)$","i")
      , h = ["Top", "Right", "Bottom", "Left"];
    function xt(t, e, n, r) {
        var i, o, s = 20, a = r ? function() {
            return r.cur()
        }
        : function() {
            return C.css(t, e, "")
        }
        , u = a(), l = n && n[3] || (C.cssNumber[e] ? "" : "px"), c = (C.cssNumber[e] || "px" !== l && +u) && d.exec(C.css(t, e));
        if (c && c[3] !== l) {
            for (l = l || c[3],
            c = +(u /= 2) || 1; s--; )
                C.style(t, e, c + l),
                (1 - o) * (1 - (o = a() / u || .5)) <= 0 && (s = 0),
                c /= o;
            C.style(t, e, (c *= 2) + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r) && (r.unit = l,
        r.start = c,
        r.end = i),
        i
    }
    var _t = {};
    function x(t, e) {
        for (var n, r, i, o, s, a = [], u = 0, l = t.length; u < l; u++)
            (r = t[u]).style && (n = r.style.display,
            e ? ("none" === n && (a[u] = v.get(r, "display") || null,
            a[u] || (r.style.display = "")),
            "" === r.style.display && Dt(r) && (a[u] = (o = void 0,
            o = (i = r).ownerDocument,
            s = i.nodeName,
            (i = _t[s]) || (o = o.body.appendChild(o.createElement(s)),
            i = C.css(o, "display"),
            o.parentNode.removeChild(o),
            _t[s] = i = "none" === i ? "block" : i)))) : "none" !== n && (a[u] = "none",
            v.set(r, "display", n)));
        for (u = 0; u < l; u++)
            null != a[u] && (t[u].style.display = a[u]);
        return t
    }
    C.fn.extend({
        show: function() {
            return x(this, !0)
        },
        hide: function() {
            return x(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Dt(this) ? C(this).show() : C(this).hide()
            })
        }
    });
    var bt = /^(?:checkbox|radio)$/i
      , wt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , Ct = /^$|^module$|\/(?:java|ecma)script/i
      , _ = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function T(t, e) {
        var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && u(t, e) ? C.merge([t], n) : n
    }
    function Et(t, e) {
        for (var n = 0, r = t.length; n < r; n++)
            v.set(t[n], "globalEval", !e || v.get(e[n], "globalEval"))
    }
    _.optgroup = _.option,
    _.tbody = _.tfoot = _.colgroup = _.caption = _.thead,
    _.th = _.td;
    var Tt = /<|&#?\w+;/;
    function Ft(t, e, n, r, i) {
        for (var o, s, a, u, l, c = e.createDocumentFragment(), f = [], d = 0, h = t.length; d < h; d++)
            if ((o = t[d]) || 0 === o)
                if ("object" === p(o))
                    C.merge(f, o.nodeType ? [o] : o);
                else if (Tt.test(o)) {
                    for (s = s || c.appendChild(e.createElement("div")),
                    a = (wt.exec(o) || ["", ""])[1].toLowerCase(),
                    a = _[a] || _._default,
                    s.innerHTML = a[1] + C.htmlPrefilter(o) + a[2],
                    l = a[0]; l--; )
                        s = s.lastChild;
                    C.merge(f, s.childNodes),
                    (s = c.firstChild).textContent = ""
                } else
                    f.push(e.createTextNode(o));
        for (c.textContent = "",
        d = 0; o = f[d++]; )
            if (r && -1 < C.inArray(o, r))
                i && i.push(o);
            else if (u = C.contains(o.ownerDocument, o),
            s = T(c.appendChild(o), "script"),
            u && Et(s),
            n)
                for (l = 0; o = s[l++]; )
                    Ct.test(o.type || "") && n.push(o);
        return c
    }
    t = w.createDocumentFragment().appendChild(w.createElement("div")),
    (e = w.createElement("input")).setAttribute("type", "radio"),
    e.setAttribute("checked", "checked"),
    e.setAttribute("name", "t"),
    t.appendChild(e),
    m.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
    t.innerHTML = "<textarea>x</textarea>",
    m.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
    var St = w.documentElement
      , At = /^key/
      , kt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Pt = /^([^.]*)(?:\.(.+)|)/;
    function Mt() {
        return !0
    }
    function F() {
        return !1
    }
    function Ot() {
        try {
            return w.activeElement
        } catch (t) {}
    }
    function Bt(t, e, n, r, i, o) {
        var s, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (r = r || n,
            n = void 0),
            e)
                Bt(t, a, n, r, e[a], o);
            return t
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = F;
        else if (!i)
            return t;
        return 1 === o && (s = i,
        (i = function(t) {
            return C().off(t),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = C.guid++)),
        t.each(function() {
            C.event.add(this, e, i, r, n)
        })
    }
    C.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, d, h, p = v.get(e);
            if (p)
                for (n.handler && (n = (o = n).handler,
                i = o.selector),
                i && C.find.matchesSelector(St, i),
                n.guid || (n.guid = C.guid++),
                a = (a = p.events) || (p.events = {}),
                s = (s = p.handle) || (p.handle = function(t) {
                    return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                u = (t = (t || "").match(E) || [""]).length; u--; )
                    f = h = (l = Pt.exec(t[u]) || [])[1],
                    d = (l[2] || "").split(".").sort(),
                    f && (c = C.event.special[f] || {},
                    f = (i ? c.delegateType : c.bindType) || f,
                    c = C.event.special[f] || {},
                    l = C.extend({
                        type: f,
                        origType: h,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && C.expr.match.needsContext.test(i),
                        namespace: d.join(".")
                    }, o),
                    (h = a[f]) || ((h = a[f] = []).delegateCount = 0,
                    c.setup && !1 !== c.setup.call(e, r, d, s)) || e.addEventListener && e.addEventListener(f, s),
                    c.add && (c.add.call(e, l),
                    l.handler.guid || (l.handler.guid = n.guid)),
                    i ? h.splice(h.delegateCount++, 0, l) : h.push(l),
                    C.event.global[f] = !0)
        },
        remove: function(t, e, n, r, i) {
            var o, s, a, u, l, c, f, d, h, p, g, m = v.hasData(t) && v.get(t);
            if (m && (u = m.events)) {
                for (l = (e = (e || "").match(E) || [""]).length; l--; )
                    if (h = g = (a = Pt.exec(e[l]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    h) {
                        for (f = C.event.special[h] || {},
                        d = u[h = (r ? f.delegateType : f.bindType) || h] || [],
                        a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = d.length; o--; )
                            c = d[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1),
                            c.selector && d.delegateCount--,
                            f.remove && f.remove.call(t, c));
                        s && !d.length && (f.teardown && !1 !== f.teardown.call(t, p, m.handle) || C.removeEvent(t, h, m.handle),
                        delete u[h])
                    } else
                        for (h in u)
                            C.event.remove(t, h + e[l], n, r, !0);
                C.isEmptyObject(u) && v.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, n, r, i, o, s = C.event.fix(t), a = new Array(arguments.length), u = (v.get(this, "events") || {})[s.type] || [], t = C.event.special[s.type] || {};
            for (a[0] = s,
            e = 1; e < arguments.length; e++)
                a[e] = arguments[e];
            if (s.delegateTarget = this,
            !t.preDispatch || !1 !== t.preDispatch.call(this, s)) {
                for (o = C.event.handlers.call(this, s, u),
                e = 0; (r = o[e++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = r.elem,
                    n = 0; (i = r.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                        s.rnamespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i,
                        s.data = i.data,
                        void 0 !== (i = ((C.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a)) && !1 === (s.result = i) && (s.preventDefault(),
                        s.stopPropagation()));
                return t.postDispatch && t.postDispatch.call(this, s),
                s.result
            }
        },
        handlers: function(t, e) {
            var n, r, i, o, s, a = [], u = e.delegateCount, l = t.target;
            if (u && l.nodeType && !("click" === t.type && 1 <= t.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== t.type || !0 !== l.disabled)) {
                        for (o = [],
                        s = {},
                        n = 0; n < u; n++)
                            void 0 === s[i = (r = e[n]).selector + " "] && (s[i] = r.needsContext ? -1 < C(i, this).index(l) : C.find(i, this, null, [l]).length),
                            s[i] && o.push(r);
                        o.length && a.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < e.length && a.push({
                elem: l,
                handlers: e.slice(u)
            }),
            a
        },
        addProp: function(e, t) {
            Object.defineProperty(C.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: D(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(t) {
            return t[C.expando] ? t : new C.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Ot() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Ot() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && u(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(t) {
                    return u(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    },
    C.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }
    ,
    C.Event = function(t, e) {
        if (!(this instanceof C.Event))
            return new C.Event(t,e);
        t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Mt : F,
        this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target,
        this.currentTarget = t.currentTarget,
        this.relatedTarget = t.relatedTarget) : this.type = t,
        e && C.extend(this, e),
        this.timeStamp = t && t.timeStamp || Date.now(),
        this[C.expando] = !0
    }
    ,
    C.Event.prototype = {
        constructor: C.Event,
        isDefaultPrevented: F,
        isPropagationStopped: F,
        isImmediatePropagationStopped: F,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = Mt,
            t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = Mt,
            t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = Mt,
            t && !this.isSimulated && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    C.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(t) {
            var e = t.button;
            return null == t.which && At.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && kt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, C.event.addProp),
    C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, i) {
        C.event.special[t] = {
            delegateType: i,
            bindType: i,
            handle: function(t) {
                var e, n = t.relatedTarget, r = t.handleObj;
                return n && (n === this || C.contains(this, n)) || (t.type = r.origType,
                e = r.handler.apply(this, arguments),
                t.type = i),
                e
            }
        }
    }),
    C.fn.extend({
        on: function(t, e, n, r) {
            return Bt(this, t, e, n, r)
        },
        one: function(t, e, n, r) {
            return Bt(this, t, e, n, r, 1)
        },
        off: function(t, e, n) {
            var r, i;
            if (t && t.preventDefault && t.handleObj)
                r = t.handleObj,
                C(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
            else {
                if ("object" != typeof t)
                    return !1 !== e && "function" != typeof e || (n = e,
                    e = void 0),
                    !1 === n && (n = F),
                    this.each(function() {
                        C.event.remove(this, t, n, e)
                    });
                for (i in t)
                    this.off(i, e, t[i])
            }
            return this
        }
    });
    var Nt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Lt = /<script|<style|<link/i
      , Rt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , jt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function qt(t, e) {
        return u(t, "table") && u(11 !== e.nodeType ? e : e.firstChild, "tr") && C(t).children("tbody")[0] || t
    }
    function Ht(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
        t
    }
    function It(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"),
        t
    }
    function zt(t, e) {
        var n, r, i, o, s, a;
        if (1 === e.nodeType) {
            if (v.hasData(t) && (o = v.access(t),
            s = v.set(e, o),
            a = o.events))
                for (i in delete s.handle,
                s.events = {},
                a)
                    for (n = 0,
                    r = a[i].length; n < r; n++)
                        C.event.add(e, i, a[i][n]);
            l.hasData(t) && (t = l.access(t),
            t = C.extend({}, t),
            l.set(e, t))
        }
    }
    function S(n, r, i, o) {
        r = j.apply([], r);
        var t, e, s, a, u, l, c = 0, f = n.length, d = f - 1, h = r[0], p = D(h);
        if (p || 1 < f && "string" == typeof h && !m.checkClone && Rt.test(h))
            return n.each(function(t) {
                var e = n.eq(t);
                p && (r[0] = h.call(this, t, e.html())),
                S(e, r, i, o)
            });
        if (f && (e = (t = Ft(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === t.childNodes.length && (t = e),
        e || o)) {
            for (a = (s = C.map(T(t, "script"), Ht)).length; c < f; c++)
                u = t,
                c !== d && (u = C.clone(u, !0, !0),
                a) && C.merge(s, T(u, "script")),
                i.call(n[c], u, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument,
                C.map(s, It),
                c = 0; c < a; c++)
                    u = s[c],
                    Ct.test(u.type || "") && !v.access(u, "globalEval") && C.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(u.src) : V(u.textContent.replace(jt, ""), l, u))
        }
        return n
    }
    function Wt(t, e, n) {
        for (var r, i = e ? C.filter(e, t) : t, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || C.cleanData(T(r)),
            r.parentNode && (n && C.contains(r.ownerDocument, r) && Et(T(r, "script")),
            r.parentNode.removeChild(r));
        return t
    }
    C.extend({
        htmlPrefilter: function(t) {
            return t.replace(Nt, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var r, i, o, s, a, u, l, c = t.cloneNode(!0), f = C.contains(t.ownerDocument, t);
            if (!(m.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || C.isXMLDoc(t)))
                for (s = T(c),
                r = 0,
                i = (o = T(t)).length; r < i; r++)
                    a = o[r],
                    "input" === (l = (u = s[r]).nodeName.toLowerCase()) && bt.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
            if (e)
                if (n)
                    for (o = o || T(t),
                    s = s || T(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        zt(o[r], s[r]);
                else
                    zt(t, c);
            return 0 < (s = T(c, "script")).length && Et(s, !f && T(t, "script")),
            c
        },
        cleanData: function(t) {
            for (var e, n, r, i = C.event.special, o = 0; void 0 !== (n = t[o]); o++)
                if (ht(n)) {
                    if (e = n[v.expando]) {
                        if (e.events)
                            for (r in e.events)
                                i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, e.handle);
                        n[v.expando] = void 0
                    }
                    n[l.expando] && (n[l.expando] = void 0)
                }
        }
    }),
    C.fn.extend({
        detach: function(t) {
            return Wt(this, t, !0)
        },
        remove: function(t) {
            return Wt(this, t)
        },
        text: function(t) {
            return f(this, function(t) {
                return void 0 === t ? C.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return S(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qt(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return S(this, arguments, function(t) {
                var e;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (e = qt(this, t)).insertBefore(t, e.firstChild)
            })
        },
        before: function() {
            return S(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return S(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++)
                1 === t.nodeType && (C.cleanData(T(t, !1)),
                t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t,
            e = null == e ? t : e,
            this.map(function() {
                return C.clone(this, t, e)
            })
        },
        html: function(t) {
            return f(this, function(t) {
                var e = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === t && 1 === e.nodeType)
                    return e.innerHTML;
                if ("string" == typeof t && !Lt.test(t) && !_[(wt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = C.htmlPrefilter(t);
                    try {
                        for (; n < r; n++)
                            1 === (e = this[n] || {}).nodeType && (C.cleanData(T(e, !1)),
                            e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return S(this, arguments, function(t) {
                var e = this.parentNode;
                C.inArray(this, n) < 0 && (C.cleanData(T(this)),
                e) && e.replaceChild(t, this)
            }, n)
        }
    }),
    C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, s) {
        C.fn[t] = function(t) {
            for (var e, n = [], r = C(t), i = r.length - 1, o = 0; o <= i; o++)
                e = o === i ? this : this.clone(!0),
                C(r[o])[s](e),
                q.apply(n, e.get());
            return this.pushStack(n)
        }
    });
    function Xt(t) {
        var e = t.ownerDocument.defaultView;
        return (e = e && e.opener ? e : b).getComputedStyle(t)
    }
    var Yt, Ut, Vt, $t, Gt, Kt, i, Qt = new RegExp("^(" + yt + ")(?!px)[a-z%]+$","i"), Zt = new RegExp(h.join("|"),"i");
    function o() {
        var t;
        i && (Kt.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
        i.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
        St.appendChild(Kt).appendChild(i),
        t = b.getComputedStyle(i),
        Yt = "1%" !== t.top,
        Gt = 12 === Jt(t.marginLeft),
        i.style.right = "60%",
        $t = 36 === Jt(t.right),
        Ut = 36 === Jt(t.width),
        i.style.position = "absolute",
        Vt = 36 === i.offsetWidth || "absolute",
        St.removeChild(Kt),
        i = null)
    }
    function Jt(t) {
        return Math.round(parseFloat(t))
    }
    function A(t, e, n) {
        var r, i, o = t.style;
        return (n = n || Xt(t)) && ("" !== (i = n.getPropertyValue(e) || n[e]) || C.contains(t.ownerDocument, t) || (i = C.style(t, e)),
        !m.pixelBoxStyles()) && Qt.test(i) && Zt.test(e) && (r = o.width,
        t = o.minWidth,
        e = o.maxWidth,
        o.minWidth = o.maxWidth = o.width = i,
        i = n.width,
        o.width = r,
        o.minWidth = t,
        o.maxWidth = e),
        void 0 !== i ? i + "" : i
    }
    function te(t, e) {
        return {
            get: function() {
                if (!t())
                    return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }
    Kt = w.createElement("div"),
    (i = w.createElement("div")).style && (i.style.backgroundClip = "content-box",
    i.cloneNode(!0).style.backgroundClip = "",
    m.clearCloneStyle = "content-box" === i.style.backgroundClip,
    C.extend(m, {
        boxSizingReliable: function() {
            return o(),
            Ut
        },
        pixelBoxStyles: function() {
            return o(),
            $t
        },
        pixelPosition: function() {
            return o(),
            Yt
        },
        reliableMarginLeft: function() {
            return o(),
            Gt
        },
        scrollboxSize: function() {
            return o(),
            Vt
        }
    }));
    var ee = /^(none|table(?!-c[ea]).+)/
      , ne = /^--/
      , re = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , ie = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , oe = ["Webkit", "Moz", "ms"]
      , se = w.createElement("div").style;
    function ae(t) {
        return C.cssProps[t] || (C.cssProps[t] = function(t) {
            if (t in se)
                return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = oe.length; n--; )
                if ((t = oe[n] + e)in se)
                    return t
        }(t) || t)
    }
    function ue(t, e, n) {
        var r = d.exec(e);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e
    }
    function le(t, e, n, r, i, o) {
        var s = "width" === e ? 1 : 0
          , a = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (u += C.css(t, n + h[s], !0, i)),
            r ? ("content" === n && (u -= C.css(t, "padding" + h[s], !0, i)),
            "margin" !== n && (u -= C.css(t, "border" + h[s] + "Width", !0, i))) : (u += C.css(t, "padding" + h[s], !0, i),
            "padding" !== n ? u += C.css(t, "border" + h[s] + "Width", !0, i) : a += C.css(t, "border" + h[s] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - u - a - .5))),
        u
    }
    function ce(t, e, n) {
        var r = Xt(t)
          , i = A(t, e, r)
          , o = "border-box" === C.css(t, "boxSizing", !1, r)
          , s = o;
        if (Qt.test(i)) {
            if (!n)
                return i;
            i = "auto"
        }
        return s = s && (m.boxSizingReliable() || i === t.style[e]),
        "auto" !== i && (parseFloat(i) || "inline" !== C.css(t, "display", !1, r)) || (i = t["offset" + e[0].toUpperCase() + e.slice(1)],
        s = !0),
        (i = parseFloat(i) || 0) + le(t, e, n || (o ? "border" : "content"), s, r, i) + "px"
    }
    function s(t, e, n, r, i) {
        return new s.prototype.init(t,e,n,r,i)
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e)
                        return "" === (t = A(t, "opacity")) ? "1" : t
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(t, e, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var i, o, s, a = y(e), u = ne.test(e), l = t.style;
                if (u || (e = ae(a)),
                s = C.cssHooks[e] || C.cssHooks[a],
                void 0 === n)
                    return s && "get"in s && void 0 !== (i = s.get(t, !1, r)) ? i : l[e];
                "string" == (o = typeof n) && (i = d.exec(n)) && i[1] && (n = xt(t, e, i),
                o = "number"),
                null != n && n == n && ("number" === o && (n += i && i[3] || (C.cssNumber[a] ? "" : "px")),
                m.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(t, n, r)) || (u ? l.setProperty(e, n) : l[e] = n))
            }
        },
        css: function(t, e, n, r) {
            var i, o = y(e);
            return ne.test(e) || (e = ae(o)),
            "normal" === (i = void 0 === (i = (o = C.cssHooks[e] || C.cssHooks[o]) && "get"in o ? o.get(t, !0, n) : i) ? A(t, e, r) : i) && e in ie && (i = ie[e]),
            ("" === n || n) && (e = parseFloat(i),
            !0 === n || isFinite(e)) ? e || 0 : i
        }
    }),
    C.each(["height", "width"], function(t, o) {
        C.cssHooks[o] = {
            get: function(t, e, n) {
                if (e)
                    return !ee.test(C.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ce(t, o, n) : vt(t, re, function() {
                        return ce(t, o, n)
                    })
            },
            set: function(t, e, n) {
                var r = Xt(t)
                  , i = "border-box" === C.css(t, "boxSizing", !1, r)
                  , n = n && le(t, o, n, i, r);
                return i && m.scrollboxSize() === r.position && (n -= Math.ceil(t["offset" + o[0].toUpperCase() + o.slice(1)] - parseFloat(r[o]) - le(t, o, "border", !1, r) - .5)),
                n && (i = d.exec(e)) && "px" !== (i[3] || "px") && (t.style[o] = e,
                e = C.css(t, o)),
                ue(0, e, n)
            }
        }
    }),
    C.cssHooks.marginLeft = te(m.reliableMarginLeft, function(t, e) {
        if (e)
            return (parseFloat(A(t, "marginLeft")) || t.getBoundingClientRect().left - vt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
    }),
    C.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        C.cssHooks[i + o] = {
            expand: function(t) {
                for (var e = 0, n = {}, r = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++)
                    n[i + h[e] + o] = r[e] || r[e - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (C.cssHooks[i + o].set = ue)
    }),
    C.fn.extend({
        css: function(t, e) {
            return f(this, function(t, e, n) {
                var r, i, o = {}, s = 0;
                if (Array.isArray(e)) {
                    for (r = Xt(t),
                    i = e.length; s < i; s++)
                        o[e[s]] = C.css(t, e[s], !1, r);
                    return o
                }
                return void 0 !== n ? C.style(t, e, n) : C.css(t, e)
            }, t, e, 1 < arguments.length)
        }
    }),
    (C.Tween = s).prototype = {
        constructor: s,
        init: function(t, e, n, r, i, o) {
            this.elem = t,
            this.prop = n,
            this.easing = i || C.easing._default,
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (C.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = s.propHooks[this.prop];
            return (t && t.get ? t : s.propHooks._default).get(this)
        },
        run: function(t) {
            var e, n = s.propHooks[this.prop];
            return this.options.duration ? this.pos = e = C.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (n && n.set ? n : s.propHooks._default).set(this),
            this
        }
    },
    s.prototype.init.prototype = s.prototype,
    (s.propHooks = {
        _default: {
            get: function(t) {
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (t = C.css(t.elem, t.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(t) {
                C.fx.step[t.prop] ? C.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[C.cssProps[t.prop]] && !C.cssHooks[t.prop] ? t.elem[t.prop] = t.now : C.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = s.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    C.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    },
    C.fx = s.prototype.init,
    C.fx.step = {};
    var k, fe, de = /^(?:toggle|show|hide)$/, he = /queueHooks$/;
    function pe() {
        fe && (!1 === w.hidden && b.requestAnimationFrame ? b.requestAnimationFrame(pe) : b.setTimeout(pe, C.fx.interval),
        C.fx.tick())
    }
    function ge() {
        return b.setTimeout(function() {
            k = void 0
        }),
        k = Date.now()
    }
    function me(t, e) {
        var n, r = 0, i = {
            height: t
        };
        for (e = e ? 1 : 0; r < 4; r += 2 - e)
            i["margin" + (n = h[r])] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t),
        i
    }
    function ve(t, e, n) {
        for (var r, i = (P.tweeners[e] || []).concat(P.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, e, t))
                return r
    }
    function P(i, t, e) {
        var n, o, r, s, a, u, l, c = 0, f = P.prefilters.length, d = C.Deferred().always(function() {
            delete h.elem
        }), h = function() {
            if (o)
                return !1;
            for (var t = k || ge(), e = 1 - ((t = Math.max(0, p.startTime + p.duration - t)) / p.duration || 0), n = 0, r = p.tweens.length; n < r; n++)
                p.tweens[n].run(e);
            return d.notifyWith(i, [p, e, t]),
            e < 1 && r ? t : (r || d.notifyWith(i, [p, 1, 0]),
            d.resolveWith(i, [p]),
            !1)
        }, p = d.promise({
            elem: i,
            props: C.extend({}, t),
            opts: C.extend(!0, {
                specialEasing: {},
                easing: C.easing._default
            }, e),
            originalProperties: t,
            originalOptions: e,
            startTime: k || ge(),
            duration: e.duration,
            tweens: [],
            createTween: function(t, e) {
                return t = C.Tween(i, p.opts, t, e, p.opts.specialEasing[t] || p.opts.easing),
                p.tweens.push(t),
                t
            },
            stop: function(t) {
                var e = 0
                  , n = t ? p.tweens.length : 0;
                if (!o) {
                    for (o = !0; e < n; e++)
                        p.tweens[e].run(1);
                    t ? (d.notifyWith(i, [p, 1, 0]),
                    d.resolveWith(i, [p, t])) : d.rejectWith(i, [p, t])
                }
                return this
            }
        }), g = p.props, m = g, v = p.opts.specialEasing;
        for (r in m)
            if (s = y(r),
            a = v[s],
            u = m[r],
            Array.isArray(u) && (a = u[1],
            u = m[r] = u[0]),
            r !== s && (m[s] = u,
            delete m[r]),
            (l = C.cssHooks[s]) && "expand"in l)
                for (r in u = l.expand(u),
                delete m[s],
                u)
                    r in m || (m[r] = u[r],
                    v[r] = a);
            else
                v[s] = a;
        for (; c < f; c++)
            if (n = P.prefilters[c].call(p, i, g, p.opts))
                return D(n.stop) && (C._queueHooks(p.elem, p.opts.queue).stop = n.stop.bind(n)),
                n;
        return C.map(g, ve, p),
        D(p.opts.start) && p.opts.start.call(i, p),
        p.progress(p.opts.progress).done(p.opts.done, p.opts.complete).fail(p.opts.fail).always(p.opts.always),
        C.fx.timer(C.extend(h, {
            elem: i,
            anim: p,
            queue: p.opts.queue
        })),
        p
    }
    C.Animation = C.extend(P, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return xt(n.elem, t, d.exec(e), n),
                n
            }
            ]
        },
        tweener: function(t, e) {
            for (var n, r = 0, i = (t = D(t) ? (e = t,
            ["*"]) : t.match(E)).length; r < i; r++)
                n = t[r],
                P.tweeners[n] = P.tweeners[n] || [],
                P.tweeners[n].unshift(e)
        },
        prefilters: [function(t, e, n) {
            var r, i, o, s, a, u, l, c = "width"in e || "height"in e, f = this, d = {}, h = t.style, p = t.nodeType && Dt(t), g = v.get(t, "fxshow");
            for (r in n.queue || (null == (s = C._queueHooks(t, "fx")).unqueued && (s.unqueued = 0,
            a = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || a()
            }
            ),
            s.unqueued++,
            f.always(function() {
                f.always(function() {
                    s.unqueued--,
                    C.queue(t, "fx").length || s.empty.fire()
                })
            })),
            e)
                if (i = e[r],
                de.test(i)) {
                    if (delete e[r],
                    o = o || "toggle" === i,
                    i === (p ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[r])
                            continue;
                        p = !0
                    }
                    d[r] = g && g[r] || C.style(t, r)
                }
            if ((u = !C.isEmptyObject(e)) || !C.isEmptyObject(d))
                for (r in c && 1 === t.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = g && g.display) && (l = v.get(t, "display")),
                "none" === (c = C.css(t, "display")) && (l ? c = l : (x([t], !0),
                l = t.style.display || l,
                c = C.css(t, "display"),
                x([t]))),
                "inline" === c || "inline-block" === c && null != l) && "none" === C.css(t, "float") && (u || (f.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block"),
                n.overflow && (h.overflow = "hidden",
                f.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (g ? "hidden"in g && (p = g.hidden) : g = v.access(t, "fxshow", {
                        display: l
                    }),
                    o && (g.hidden = !p),
                    p && x([t], !0),
                    f.done(function() {
                        for (r in p || x([t]),
                        v.remove(t, "fxshow"),
                        d)
                            C.style(t, r, d[r])
                    })),
                    u = ve(p ? g[r] : 0, r, f),
                    r in g || (g[r] = u.start,
                    p && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(t, e) {
            e ? P.prefilters.unshift(t) : P.prefilters.push(t)
        }
    }),
    C.speed = function(t, e, n) {
        var r = t && "object" == typeof t ? C.extend({}, t) : {
            complete: n || !n && e || D(t) && t,
            duration: t,
            easing: n && e || e && !D(e) && e
        };
        return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            D(r.old) && r.old.call(this),
            r.queue && C.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    C.fn.extend({
        fadeTo: function(t, e, n, r) {
            return this.filter(Dt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, r)
        },
        animate: function(e, t, n, r) {
            var i = C.isEmptyObject(e)
              , o = C.speed(t, n, r);
            return (r = function() {
                var t = P(this, C.extend({}, e), o);
                (i || v.get(this, "finish")) && t.stop(!0)
            }
            ).finish = r,
            i || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        },
        stop: function(i, t, o) {
            function s(t) {
                var e = t.stop;
                delete t.stop,
                e(o)
            }
            return "string" != typeof i && (o = t,
            t = i,
            i = void 0),
            t && !1 !== i && this.queue(i || "fx", []),
            this.each(function() {
                var t = !0
                  , e = null != i && i + "queueHooks"
                  , n = C.timers
                  , r = v.get(this);
                if (e)
                    r[e] && r[e].stop && s(r[e]);
                else
                    for (e in r)
                        r[e] && r[e].stop && he.test(e) && s(r[e]);
                for (e = n.length; e--; )
                    n[e].elem !== this || null != i && n[e].queue !== i || (n[e].anim.stop(o),
                    t = !1,
                    n.splice(e, 1));
                !t && o || C.dequeue(this, i)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"),
            this.each(function() {
                var t, e = v.get(this), n = e[s + "queue"], r = e[s + "queueHooks"], i = C.timers, o = n ? n.length : 0;
                for (e.finish = !0,
                C.queue(this, s, []),
                r && r.stop && r.stop.call(this, !0),
                t = i.length; t--; )
                    i[t].elem === this && i[t].queue === s && (i[t].anim.stop(!0),
                    i.splice(t, 1));
                for (t = 0; t < o; t++)
                    n[t] && n[t].finish && n[t].finish.call(this);
                delete e.finish
            })
        }
    }),
    C.each(["toggle", "show", "hide"], function(t, r) {
        var i = C.fn[r];
        C.fn[r] = function(t, e, n) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(me(r, !0), t, e, n)
        }
    }),
    C.each({
        slideDown: me("show"),
        slideUp: me("hide"),
        slideToggle: me("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, r) {
        C.fn[t] = function(t, e, n) {
            return this.animate(r, t, e, n)
        }
    }),
    C.timers = [],
    C.fx.tick = function() {
        var t, e = 0, n = C.timers;
        for (k = Date.now(); e < n.length; e++)
            (t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || C.fx.stop(),
        k = void 0
    }
    ,
    C.fx.timer = function(t) {
        C.timers.push(t),
        C.fx.start()
    }
    ,
    C.fx.interval = 13,
    C.fx.start = function() {
        fe || (fe = !0,
        pe())
    }
    ,
    C.fx.stop = function() {
        fe = null
    }
    ,
    C.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    C.fn.delay = function(r, t) {
        return r = C.fx && C.fx.speeds[r] || r,
        this.queue(t = t || "fx", function(t, e) {
            var n = b.setTimeout(t, r);
            e.stop = function() {
                b.clearTimeout(n)
            }
        })
    }
    ,
    t = w.createElement("input"),
    yt = w.createElement("select").appendChild(w.createElement("option")),
    t.type = "checkbox",
    m.checkOn = "" !== t.value,
    m.optSelected = yt.selected,
    (t = w.createElement("input")).value = "t",
    t.type = "radio",
    m.radioValue = "t" === t.value;
    var De, M = C.expr.attrHandle, ye = (C.fn.extend({
        attr: function(t, e) {
            return f(this, C.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function(t) {
            return this.each(function() {
                C.removeAttr(this, t)
            })
        }
    }),
    C.extend({
        attr: function(t, e, n) {
            var r, i, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === t.getAttribute ? C.prop(t, e, n) : (1 === o && C.isXMLDoc(t) || (i = C.attrHooks[e.toLowerCase()] || (C.expr.match.bool.test(e) ? De : void 0)),
                void 0 !== n ? null === n ? void C.removeAttr(t, e) : i && "set"in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""),
                n) : i && "get"in i && null !== (r = i.get(t, e)) || null != (r = C.find.attr(t, e)) ? r : void 0)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    var n;
                    if (!m.radioValue && "radio" === e && u(t, "input"))
                        return n = t.value,
                        t.setAttribute("type", e),
                        n && (t.value = n),
                        e
                }
            }
        },
        removeAttr: function(t, e) {
            var n, r = 0, i = e && e.match(E);
            if (i && 1 === t.nodeType)
                for (; n = i[r++]; )
                    t.removeAttribute(n)
        }
    }),
    De = {
        set: function(t, e, n) {
            return !1 === e ? C.removeAttr(t, n) : t.setAttribute(n, n),
            n
        }
    },
    C.each(C.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var s = M[e] || C.find.attr;
        M[e] = function(t, e, n) {
            var r, i, o = e.toLowerCase();
            return n || (i = M[o],
            M[o] = r,
            r = null != s(t, e, n) ? o : null,
            M[o] = i),
            r
        }
    }),
    /^(?:input|select|textarea|button)$/i), xe = /^(?:a|area)$/i;
    function O(t) {
        return (t.match(E) || []).join(" ")
    }
    function B(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    function _e(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(E) || []
    }
    C.fn.extend({
        prop: function(t, e) {
            return f(this, C.prop, t, e, 1 < arguments.length)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[C.propFix[t] || t]
            })
        }
    }),
    C.extend({
        prop: function(t, e, n) {
            var r, i, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && C.isXMLDoc(t) || (e = C.propFix[e] || e,
                i = C.propHooks[e]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get"in i && null !== (r = i.get(t, e)) ? r : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = C.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ye.test(t.nodeName) || xe.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    m.optSelected || (C.propHooks.selected = {
        get: function(t) {
            return (t = t.parentNode) && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(t) {
            (t = t.parentNode) && (t.selectedIndex,
            t.parentNode) && t.parentNode.selectedIndex
        }
    }),
    C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        C.propFix[this.toLowerCase()] = this
    }),
    C.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a = 0;
            if (D(e))
                return this.each(function(t) {
                    C(this).addClass(e.call(this, t, B(this)))
                });
            if ((t = _e(e)).length)
                for (; n = this[a++]; )
                    if (s = B(n),
                    r = 1 === n.nodeType && " " + O(s) + " ") {
                        for (o = 0; i = t[o++]; )
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s !== (s = O(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a = 0;
            if (D(e))
                return this.each(function(t) {
                    C(this).removeClass(e.call(this, t, B(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = _e(e)).length)
                for (; n = this[a++]; )
                    if (s = B(n),
                    r = 1 === n.nodeType && " " + O(s) + " ") {
                        for (o = 0; i = t[o++]; )
                            for (; -1 < r.indexOf(" " + i + " "); )
                                r = r.replace(" " + i + " ", " ");
                        s !== (s = O(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, e) {
            var o = typeof i
              , s = "string" == o || Array.isArray(i);
            return "boolean" == typeof e && s ? e ? this.addClass(i) : this.removeClass(i) : D(i) ? this.each(function(t) {
                C(this).toggleClass(i.call(this, t, B(this), e), e)
            }) : this.each(function() {
                var t, e, n, r;
                if (s)
                    for (e = 0,
                    n = C(this),
                    r = _e(i); t = r[e++]; )
                        n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                else
                    void 0 !== i && "boolean" != o || ((t = B(this)) && v.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", !t && !1 !== i && v.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            for (var e, n = 0, r = " " + t + " "; e = this[n++]; )
                if (1 === e.nodeType && -1 < (" " + O(B(e)) + " ").indexOf(r))
                    return !0;
            return !1
        }
    });
    var be = /\r/g;
    function we(t) {
        t.stopPropagation()
    }
    C.fn.extend({
        val: function(e) {
            var n, t, r, i = this[0];
            return arguments.length ? (r = D(e),
            this.each(function(t) {
                1 === this.nodeType && (null == (t = r ? e.call(this, t, C(this).val()) : e) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = C.map(t, function(t) {
                    return null == t ? "" : t + ""
                })),
                (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set"in n && void 0 !== n.set(this, t, "value") || (this.value = t))
            })) : i ? (n = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get"in n && void 0 !== (t = n.get(i, "value")) ? t : "string" == typeof (t = i.value) ? t.replace(be, "") : null == t ? "" : t : void 0
        }
    }),
    C.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = C.find.attr(t, "value");
                    return null != e ? e : O(C.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n = t.options, r = t.selectedIndex, i = "select-one" === t.type, o = i ? null : [], s = i ? r + 1 : n.length, a = r < 0 ? s : i ? r : 0; a < s; a++)
                        if (((e = n[a]).selected || a === r) && !e.disabled && (!e.parentNode.disabled || !u(e.parentNode, "optgroup"))) {
                            if (e = C(e).val(),
                            i)
                                return e;
                            o.push(e)
                        }
                    return o
                },
                set: function(t, e) {
                    for (var n, r, i = t.options, o = C.makeArray(e), s = i.length; s--; )
                        ((r = i[s]).selected = -1 < C.inArray(C.valHooks.option.get(r), o)) && (n = !0);
                    return n || (t.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    C.each(["radio", "checkbox"], function() {
        C.valHooks[this] = {
            set: function(t, e) {
                if (Array.isArray(e))
                    return t.checked = -1 < C.inArray(C(t).val(), e)
            }
        },
        m.checkOn || (C.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        }
        )
    }),
    m.focusin = "onfocusin"in b;
    var Ce = /^(?:focusinfocus|focusoutblur)$/
      , N = (C.extend(C.event, {
        trigger: function(t, e, n, r) {
            var i, o, s, a, u, l, c, f = [n || w], d = W.call(t, "type") ? t.type : t, h = W.call(t, "namespace") ? t.namespace.split(".") : [], p = c = o = n = n || w;
            if (3 !== n.nodeType && 8 !== n.nodeType && !Ce.test(d + C.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
            h.sort()),
            a = d.indexOf(":") < 0 && "on" + d,
            (t = t[C.expando] ? t : new C.Event(d,"object" == typeof t && t)).isTrigger = r ? 2 : 3,
            t.namespace = h.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = n),
            e = null == e ? [t] : C.makeArray(e, [t]),
            l = C.event.special[d] || {},
            r || !l.trigger || !1 !== l.trigger.apply(n, e))) {
                if (!r && !l.noBubble && !g(n)) {
                    for (s = l.delegateType || d,
                    Ce.test(s + d) || (p = p.parentNode); p; p = p.parentNode)
                        f.push(p),
                        o = p;
                    o === (n.ownerDocument || w) && f.push(o.defaultView || o.parentWindow || b)
                }
                for (i = 0; (p = f[i++]) && !t.isPropagationStopped(); )
                    c = p,
                    t.type = 1 < i ? s : l.bindType || d,
                    (u = (v.get(p, "events") || {})[t.type] && v.get(p, "handle")) && u.apply(p, e),
                    (u = a && p[a]) && u.apply && ht(p) && (t.result = u.apply(p, e),
                    !1 === t.result) && t.preventDefault();
                return t.type = d,
                r || t.isDefaultPrevented() || l._default && !1 !== l._default.apply(f.pop(), e) || !ht(n) || a && D(n[d]) && !g(n) && ((o = n[a]) && (n[a] = null),
                C.event.triggered = d,
                t.isPropagationStopped() && c.addEventListener(d, we),
                n[d](),
                t.isPropagationStopped() && c.removeEventListener(d, we),
                C.event.triggered = void 0,
                o) && (n[a] = o),
                t.result
            }
        },
        simulate: function(t, e, n) {
            t = C.extend(new C.Event, n, {
                type: t,
                isSimulated: !0
            }),
            C.event.trigger(t, null, e)
        }
    }),
    C.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                C.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n)
                return C.event.trigger(t, e, n, !0)
        }
    }),
    m.focusin || C.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        function i(t) {
            C.event.simulate(r, t.target, C.event.fix(t))
        }
        C.event.special[r] = {
            setup: function() {
                var t = this.ownerDocument || this
                  , e = v.access(t, r);
                e || t.addEventListener(n, i, !0),
                v.access(t, r, (e || 0) + 1)
            },
            teardown: function() {
                var t = this.ownerDocument || this
                  , e = v.access(t, r) - 1;
                e ? v.access(t, r, e) : (t.removeEventListener(n, i, !0),
                v.remove(t, r))
            }
        }
    }),
    b.location)
      , Ee = Date.now()
      , Te = /\?/
      , Fe = (C.parseXML = function(t) {
        var e;
        if (!t || "string" != typeof t)
            return null;
        try {
            e = (new b.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            e = void 0
        }
        return e && !e.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + t),
        e
    }
    ,
    /\[\]$/)
      , Se = /\r?\n/g
      , Ae = /^(?:submit|button|image|reset|file)$/i
      , ke = /^(?:input|select|textarea|keygen)/i
      , Pe = (C.param = function(t, e) {
        function n(t, e) {
            e = D(e) ? e() : e,
            i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == e ? "" : e)
        }
        var r, i = [];
        if (Array.isArray(t) || t.jquery && !C.isPlainObject(t))
            C.each(t, function() {
                n(this.name, this.value)
            });
        else
            for (r in t)
                !function n(r, t, i, o) {
                    if (Array.isArray(t))
                        C.each(t, function(t, e) {
                            i || Fe.test(r) ? o(r, e) : n(r + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, i, o)
                        });
                    else if (i || "object" !== p(t))
                        o(r, t);
                    else
                        for (var e in t)
                            n(r + "[" + e + "]", t[e], i, o)
                }(r, t[r], e, n);
        return i.join("&")
    }
    ,
    C.fn.extend({
        serialize: function() {
            return C.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = C.prop(this, "elements");
                return t ? C.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !C(this).is(":disabled") && ke.test(this.nodeName) && !Ae.test(t) && (this.checked || !bt.test(t))
            }).map(function(t, e) {
                var n = C(this).val();
                return null == n ? null : Array.isArray(n) ? C.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Se, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Se, "\r\n")
                }
            }).get()
        }
    }),
    /%20/g)
      , Me = /#.*$/
      , Oe = /([?&])_=[^&]*/
      , Be = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ne = /^(?:GET|HEAD)$/
      , Le = /^\/\//
      , Re = {}
      , je = {}
      , qe = "*/".concat("*")
      , He = w.createElement("a");
    function Ie(o) {
        return function(t, e) {
            "string" != typeof t && (e = t,
            t = "*");
            var n, r = 0, i = t.toLowerCase().match(E) || [];
            if (D(e))
                for (; n = i[r++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(e)) : (o[n] = o[n] || []).push(e)
        }
    }
    function ze(e, r, i, o) {
        var s = {}
          , a = e === je;
        function u(t) {
            var n;
            return s[t] = !0,
            C.each(e[t] || [], function(t, e) {
                return "string" != typeof (e = e(r, i, o)) || a || s[e] ? a ? !(n = e) : void 0 : (r.dataTypes.unshift(e),
                u(e),
                !1)
            }),
            n
        }
        return u(r.dataTypes[0]) || !s["*"] && u("*")
    }
    function We(t, e) {
        var n, r, i = C.ajaxSettings.flatOptions || {};
        for (n in e)
            void 0 !== e[n] && ((i[n] ? t : r = r || {})[n] = e[n]);
        return r && C.extend(!0, t, r),
        t
    }
    He.href = N.href,
    C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: N.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(N.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": qe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": C.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? We(We(t, C.ajaxSettings), e) : We(C.ajaxSettings, t)
        },
        ajaxPrefilter: Ie(Re),
        ajaxTransport: Ie(je),
        ajax: function(t, e) {
            "object" == typeof t && (e = t,
            t = void 0);
            var u, l, c, n, f, r, d, h, i, p = C.ajaxSetup({}, e = e || {}), g = p.context || p, m = p.context && (g.nodeType || g.jquery) ? C(g) : C.event, v = C.Deferred(), D = C.Callbacks("once memory"), y = p.statusCode || {}, o = {}, s = {}, a = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (d) {
                        if (!n)
                            for (n = {}; e = Be.exec(c); )
                                n[e[1].toLowerCase()] = e[2];
                        e = n[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function() {
                    return d ? c : null
                },
                setRequestHeader: function(t, e) {
                    return null == d && (t = s[t.toLowerCase()] = s[t.toLowerCase()] || t,
                    o[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return null == d && (p.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    if (t)
                        if (d)
                            x.always(t[x.status]);
                        else
                            for (var e in t)
                                y[e] = [y[e], t[e]];
                    return this
                },
                abort: function(t) {
                    return t = t || a,
                    u && u.abort(t),
                    _(0, t),
                    this
                }
            };
            if (v.promise(x),
            p.url = ((t || p.url || N.href) + "").replace(Le, N.protocol + "//"),
            p.type = e.method || e.type || p.method || p.type,
            p.dataTypes = (p.dataType || "*").toLowerCase().match(E) || [""],
            null == p.crossDomain) {
                r = w.createElement("a");
                try {
                    r.href = p.url,
                    r.href = r.href,
                    p.crossDomain = He.protocol + "//" + He.host != r.protocol + "//" + r.host
                } catch (t) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = C.param(p.data, p.traditional)),
            ze(Re, p, e, x),
            !d) {
                for (i in (h = C.event && p.global) && 0 == C.active++ && C.event.trigger("ajaxStart"),
                p.type = p.type.toUpperCase(),
                p.hasContent = !Ne.test(p.type),
                l = p.url.replace(Me, ""),
                p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Pe, "+")) : (t = p.url.slice(l.length),
                p.data && (p.processData || "string" == typeof p.data) && (l += (Te.test(l) ? "&" : "?") + p.data,
                delete p.data),
                !1 === p.cache && (l = l.replace(Oe, "$1"),
                t = (Te.test(l) ? "&" : "?") + "_=" + Ee++ + t),
                p.url = l + t),
                p.ifModified && (C.lastModified[l] && x.setRequestHeader("If-Modified-Since", C.lastModified[l]),
                C.etag[l]) && x.setRequestHeader("If-None-Match", C.etag[l]),
                (p.data && p.hasContent && !1 !== p.contentType || e.contentType) && x.setRequestHeader("Content-Type", p.contentType),
                x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + qe + "; q=0.01" : "") : p.accepts["*"]),
                p.headers)
                    x.setRequestHeader(i, p.headers[i]);
                if (p.beforeSend && (!1 === p.beforeSend.call(g, x, p) || d))
                    return x.abort();
                if (a = "abort",
                D.add(p.complete),
                x.done(p.success),
                x.fail(p.error),
                u = ze(je, p, e, x)) {
                    if (x.readyState = 1,
                    h && m.trigger("ajaxSend", [x, p]),
                    d)
                        return x;
                    p.async && 0 < p.timeout && (f = b.setTimeout(function() {
                        x.abort("timeout")
                    }, p.timeout));
                    try {
                        d = !1,
                        u.send(o, _)
                    } catch (t) {
                        if (d)
                            throw t;
                        _(-1, t)
                    }
                } else
                    _(-1, "No Transport")
            }
            return x;
            function _(t, e, n, r) {
                var i, o, s, a = e;
                d || (d = !0,
                f && b.clearTimeout(f),
                u = void 0,
                c = r || "",
                x.readyState = 0 < t ? 4 : 0,
                r = 200 <= t && t < 300 || 304 === t,
                n && (s = function(t, e, n) {
                    for (var r, i, o, s, a = t.contents, u = t.dataTypes; "*" === u[0]; )
                        u.shift(),
                        void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in a)
                            if (a[i] && a[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || t.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            s = s || i
                        }
                        o = o || s
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(p, x, n)),
                s = function(t, e, n, r) {
                    var i, o, s, a, u, l = {}, c = t.dataTypes.slice();
                    if (c[1])
                        for (s in t.converters)
                            l[s.toLowerCase()] = t.converters[s];
                    for (o = c.shift(); o; )
                        if (t.responseFields[o] && (n[t.responseFields[o]] = e),
                        !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(s = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                            !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0],
                                            c.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && t.throws)
                                        e = s(e);
                                    else
                                        try {
                                            e = s(e)
                                        } catch (t) {
                                            return {
                                                state: "parsererror",
                                                error: s ? t : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: e
                    }
                }(p, s, x, r),
                r ? (p.ifModified && ((n = x.getResponseHeader("Last-Modified")) && (C.lastModified[l] = n),
                n = x.getResponseHeader("etag")) && (C.etag[l] = n),
                204 === t || "HEAD" === p.type ? a = "nocontent" : 304 === t ? a = "notmodified" : (a = s.state,
                i = s.data,
                r = !(o = s.error))) : (o = a,
                !t && a || (a = "error",
                t < 0 && (t = 0))),
                x.status = t,
                x.statusText = (e || a) + "",
                r ? v.resolveWith(g, [i, a, x]) : v.rejectWith(g, [x, a, o]),
                x.statusCode(y),
                y = void 0,
                h && m.trigger(r ? "ajaxSuccess" : "ajaxError", [x, p, r ? i : o]),
                D.fireWith(g, [x, a]),
                h && (m.trigger("ajaxComplete", [x, p]),
                --C.active || C.event.trigger("ajaxStop")))
            }
        },
        getJSON: function(t, e, n) {
            return C.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return C.get(t, void 0, e, "script")
        }
    }),
    C.each(["get", "post"], function(t, i) {
        C[i] = function(t, e, n, r) {
            return D(e) && (r = r || n,
            n = e,
            e = void 0),
            C.ajax(C.extend({
                url: t,
                type: i,
                dataType: r,
                data: e,
                success: n
            }, C.isPlainObject(t) && t))
        }
    }),
    C._evalUrl = function(t) {
        return C.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    C.fn.extend({
        wrapAll: function(t) {
            return this[0] && (D(t) && (t = t.call(this[0])),
            t = C(t, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var t = this; t.firstElementChild; )
                    t = t.firstElementChild;
                return t
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return D(n) ? this.each(function(t) {
                C(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = C(this)
                  , e = t.contents();
                e.length ? e.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(e) {
            var n = D(e);
            return this.each(function(t) {
                C(this).wrapAll(n ? e.call(this, t) : e)
            })
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                C(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    C.expr.pseudos.hidden = function(t) {
        return !C.expr.pseudos.visible(t)
    }
    ,
    C.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }
    ,
    C.ajaxSettings.xhr = function() {
        try {
            return new b.XMLHttpRequest
        } catch (t) {}
    }
    ;
    var Xe = {
        0: 200,
        1223: 204
    }
      , Ye = C.ajaxSettings.xhr()
      , Ue = (m.cors = !!Ye && "withCredentials"in Ye,
    m.ajax = Ye = !!Ye,
    C.ajaxTransport(function(i) {
        var o, s;
        if (m.cors || Ye && !i.crossDomain)
            return {
                send: function(t, e) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"),
                    t)
                        r.setRequestHeader(n, t[n]);
                    o = function(t) {
                        return function() {
                            o && (o = s = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === t ? r.abort() : "error" === t ? "number" != typeof r.status ? e(0, "error") : e(r.status, r.statusText) : e(Xe[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    s = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function() {
                        4 === r.readyState && b.setTimeout(function() {
                            o && s()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (t) {
                        if (o)
                            throw t
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    C.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }),
    C.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return C.globalEval(t),
                t
            }
        }
    }),
    C.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET")
    }),
    C.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain)
            return {
                send: function(t, e) {
                    r = C("<script>").prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(t) {
                        r.remove(),
                        i = null,
                        t && e("error" === t.type ? 404 : 200, t.type)
                    }
                    ),
                    w.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    }),
    [])
      , Ve = /(=)\?(?=&|$)|\?\?/
      , $e = (C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ue.pop() || C.expando + "_" + Ee++;
            return this[t] = !0,
            t
        }
    }),
    C.ajaxPrefilter("json jsonp", function(t, e, n) {
        var r, i, o, s = !1 !== t.jsonp && (Ve.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ve.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return r = t.jsonpCallback = D(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(Ve, "$1" + r) : !1 !== t.jsonp && (t.url += (Te.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
            t.converters["script json"] = function() {
                return o || C.error(r + " was not called"),
                o[0]
            }
            ,
            t.dataTypes[0] = "json",
            i = b[r],
            b[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? C(b).removeProp(r) : b[r] = i,
                t[r] && (t.jsonpCallback = e.jsonpCallback,
                Ue.push(r)),
                o && D(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    m.createHTMLDocument = ((t = w.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === t.childNodes.length),
    C.parseHTML = function(t, e, n) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e,
        e = !1),
        e || (m.createHTMLDocument ? ((r = (e = w.implementation.createHTMLDocument("")).createElement("base")).href = w.location.href,
        e.head.appendChild(r)) : e = w),
        r = !n && [],
        (n = Z.exec(t)) ? [e.createElement(n[1])] : (n = Ft([t], e, r),
        r && r.length && C(r).remove(),
        C.merge([], n.childNodes)));
        var r
    }
    ,
    C.fn.load = function(t, e, n) {
        var r, i, o, s = this, a = t.indexOf(" ");
        return -1 < a && (r = O(t.slice(a)),
        t = t.slice(0, a)),
        D(e) ? (n = e,
        e = void 0) : e && "object" == typeof e && (i = "POST"),
        0 < s.length && C.ajax({
            url: t,
            type: i || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments,
            s.html(r ? C("<div>").append(C.parseHTML(t)).find(r) : t)
        }).always(n && function(t, e) {
            s.each(function() {
                n.apply(this, o || [t.responseText, e, t])
            })
        }
        ),
        this
    }
    ,
    C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        C.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    C.expr.pseudos.animated = function(e) {
        return C.grep(C.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    C.offset = {
        setOffset: function(t, e, n) {
            var r, i, o, s, a = C.css(t, "position"), u = C(t), l = {};
            "static" === a && (t.style.position = "relative"),
            o = u.offset(),
            r = C.css(t, "top"),
            s = C.css(t, "left"),
            s = ("absolute" === a || "fixed" === a) && -1 < (r + s).indexOf("auto") ? (i = (a = u.position()).top,
            a.left) : (i = parseFloat(r) || 0,
            parseFloat(s) || 0),
            null != (e = D(e) ? e.call(t, n, C.extend({}, o)) : e).top && (l.top = e.top - o.top + i),
            null != e.left && (l.left = e.left - o.left + s),
            "using"in e ? e.using.call(t, l) : u.css(l)
        }
    },
    C.fn.extend({
        offset: function(e) {
            var t, n;
            return arguments.length ? void 0 === e ? this : this.each(function(t) {
                C.offset.setOffset(this, e, t)
            }) : (n = this[0]) ? n.getClientRects().length ? (t = n.getBoundingClientRect(),
            n = n.ownerDocument.defaultView,
            {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === C.css(r, "position"))
                    e = r.getBoundingClientRect();
                else {
                    for (e = this.offset(),
                    n = r.ownerDocument,
                    t = r.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === C.css(t, "position"); )
                        t = t.parentNode;
                    t && t !== r && 1 === t.nodeType && ((i = C(t).offset()).top += C.css(t, "borderTopWidth", !0),
                    i.left += C.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - i.top - C.css(r, "marginTop", !0),
                    left: e.left - i.left - C.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === C.css(t, "position"); )
                    t = t.offsetParent;
                return t || St
            })
        }
    }),
    C.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, i) {
        var o = "pageYOffset" === i;
        C.fn[e] = function(t) {
            return f(this, function(t, e, n) {
                var r;
                return g(t) ? r = t : 9 === t.nodeType && (r = t.defaultView),
                void 0 === n ? r ? r[i] : t[e] : void (r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : t[e] = n)
            }, e, t, arguments.length)
        }
    }),
    C.each(["top", "left"], function(t, n) {
        C.cssHooks[n] = te(m.pixelPosition, function(t, e) {
            if (e)
                return e = A(t, n),
                Qt.test(e) ? C(t).position()[n] + "px" : e
        })
    }),
    C.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        C.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(r, o) {
            C.fn[o] = function(t, e) {
                var n = arguments.length && (r || "boolean" != typeof t)
                  , i = r || (!0 === t || !0 === e ? "margin" : "border");
                return f(this, function(t, e, n) {
                    var r;
                    return g(t) ? 0 === o.indexOf("outer") ? t["inner" + s] : t.document.documentElement["client" + s] : 9 === t.nodeType ? (r = t.documentElement,
                    Math.max(t.body["scroll" + s], r["scroll" + s], t.body["offset" + s], r["offset" + s], r["client" + s])) : void 0 === n ? C.css(t, e, i) : C.style(t, e, n, i)
                }, a, n ? t : void 0, n)
            }
        })
    }),
    C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, n) {
        C.fn[n] = function(t, e) {
            return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
        }
    }),
    C.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }),
    C.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, r) {
            return this.on(e, t, n, r)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }),
    C.proxy = function(t, e) {
        var n, r;
        if ("string" == typeof e && (r = t[e],
        e = t,
        t = r),
        D(t))
            return n = a.call(arguments, 2),
            (r = function() {
                return t.apply(e || this, n.concat(a.call(arguments)))
            }
            ).guid = t.guid = t.guid || C.guid++,
            r
    }
    ,
    C.holdReady = function(t) {
        t ? C.readyWait++ : C.ready(!0)
    }
    ,
    C.isArray = Array.isArray,
    C.parseJSON = JSON.parse,
    C.nodeName = u,
    C.isFunction = D,
    C.isWindow = g,
    C.camelCase = y,
    C.type = p,
    C.now = Date.now,
    C.isNumeric = function(t) {
        var e = C.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return C
    }),
    b.jQuery)
      , Ge = b.$;
    return C.noConflict = function(t) {
        return b.$ === C && (b.$ = Ge),
        t && b.jQuery === C && (b.jQuery = $e),
        C
    }
    ,
    L || (b.jQuery = b.$ = C),
    C
}),
function(t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? t(require("jquery"), window, document) : t(jQuery, window, document)
}(function(D, y, x, _) {
    "use strict";
    if (!y.history.pushState)
        return D.fn.smoothState = function() {
            return this
        }
        ,
        D.fn.smoothState.options = {};
    var b, w, C, n;
    D.fn.smoothState || (b = D("html, body"),
    w = y.console,
    C = {
        isExternal: function(t) {
            return "string" == typeof (t = t.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/))[1] && 0 < t[1].length && t[1].toLowerCase() !== y.location.protocol || "string" == typeof t[2] && 0 < t[2].length && t[2].replace(new RegExp(":(" + {
                "http:": 80,
                "https:": 443
            }[y.location.protocol] + ")?$"), "") !== y.location.host
        },
        stripHash: function(t) {
            return t.replace(/#.*/, "")
        },
        isHash: function(t, e) {
            e = e || y.location.href;
            var n = -1 < t.indexOf("#")
              , e = C.stripHash(t) === C.stripHash(e);
            return n && e
        },
        translate: function(t) {
            var e = {
                dataType: "html",
                type: "GET"
            };
            return "string" == typeof t ? D.extend({}, e, {
                url: t
            }) : D.extend({}, e, t)
        },
        shouldLoadAnchor: function(t, e, n) {
            var r = t.prop("href");
            return !(C.isExternal(r) || C.isHash(r) || t.is(e) || t.prop("target") || typeof n !== _ && "" !== n && -1 === t.prop("href").search(n))
        },
        clearIfOverCapacity: function(t, e) {
            return Object.keys || (Object.keys = function(t) {
                var e, n = [];
                for (e in t)
                    Object.prototype.hasOwnProperty.call(t, e) && n.push(e);
                return n
            }
            ),
            t = Object.keys(t).length > e ? {} : t
        },
        storePageIn: function(t, e, n, r, i, o) {
            var s = D("<html></html>").append(D(n));
            return void 0 === i && (i = {}),
            void 0 === o && (o = e),
            t[e] = {
                status: "loaded",
                title: s.find("title").first().text(),
                html: s.find("#" + r),
                doc: n,
                state: i,
                destUrl: o
            },
            t
        },
        triggerAllAnimationEndEvent: function(e, t) {
            t = " " + t || "";
            var n = 0;
            e.on("animationstart webkitAnimationStart oanimationstart MSAnimationStart", function(t) {
                D(t.delegateTarget).is(e) && (t.stopPropagation(),
                n++)
            }),
            e.on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", function(t) {
                D(t.delegateTarget).is(e) && (t.stopPropagation(),
                0 == --n) && e.trigger("allanimationend")
            }),
            e.on("allanimationend" + t, function() {
                n = 0,
                C.redraw(e)
            })
        },
        redraw: function(t) {
            t.height()
        }
    },
    n = function(t, a) {
        function u(t) {
            (t = t || !1) && g.hasOwnProperty(t) ? delete g[t] : g = {},
            f.data("smoothState").cache = g
        }
        function l(t, e) {
            e = e || D.noop;
            var r = C.translate(t);
            (g = C.clearIfOverCapacity(g, a.cacheLength)).hasOwnProperty(r.url) && void 0 === r.data || (g[r.url] = {
                status: "fetching"
            },
            (t = D.ajax(r)).done(function(t) {
                C.storePageIn(g, r.url, t, d),
                f.data("smoothState").cache = g
            }),
            t.fail(function() {
                g[r.url].status = "error"
            }),
            a.locationHeader && t.always(function(t, e, n) {
                (n = (t.statusCode ? t : n).getResponseHeader(a.locationHeader)) && (g[r.url].destUrl = n)
            }),
            e && t.always(e))
        }
        function c(t) {
            var e = "#" + d
              , n = g[t] ? D(g[t].html.html()) : null;
            n.length ? (x.title = g[t].title,
            f.data("smoothState").href = t,
            a.loadingClass && b.removeClass(a.loadingClass),
            a.onReady.render(f, n),
            f.one("ss.onReadyEnd", function() {
                var t;
                p = !1,
                a.onAfter(f, n),
                a.scroll && h && ((t = D(h, f)).length && (t = t.offset().top,
                b.scrollTop(t)),
                h = null),
                o(f)
            }),
            y.setTimeout(function() {
                f.trigger("ss.onReadyEnd")
            }, a.onReady.duration)) : !n && a.debug && w ? w.warn("No element with an id of " + e + " in response from " + t + " in " + g) : y.location = t
        }
        function n(t, e, n) {
            var r = C.translate(t)
              , i = (void 0 === e && (e = !0),
            void 0 === n && (n = !0),
            !1)
              , o = !1
              , s = {
                loaded: function() {
                    var t = i ? "ss.onProgressEnd" : "ss.onStartEnd";
                    o && i ? o && c(r.url) : f.one(t, function() {
                        c(r.url),
                        n || u(r.url)
                    }),
                    e && (t = g[r.url].destUrl,
                    m = a.alterChangeState({
                        id: d
                    }, g[r.url].title, t),
                    g[r.url].state = m,
                    y.history.pushState(m, g[r.url].title, t)),
                    o && !n && u(r.url)
                },
                fetching: function() {
                    i || (i = !0,
                    f.one("ss.onStartEnd", function() {
                        a.loadingClass && b.addClass(a.loadingClass),
                        a.onProgress.render(f),
                        y.setTimeout(function() {
                            f.trigger("ss.onProgressEnd"),
                            o = !0
                        }, a.onProgress.duration)
                    })),
                    y.setTimeout(function() {
                        g.hasOwnProperty(r.url) && s[g[r.url].status]()
                    }, 10)
                },
                error: function() {
                    a.debug && w ? w.log("There was an error loading: " + r.url) : y.location = r.url
                }
            };
            g.hasOwnProperty(r.url) || l(r),
            a.onStart.render(f),
            y.setTimeout(function() {
                a.scroll && b.scrollTop(0),
                f.trigger("ss.onStartEnd")
            }, a.onStart.duration),
            s[g[r.url].status]()
        }
        function e(t) {
            var e = D(t.currentTarget);
            C.shouldLoadAnchor(e, a.blacklist, a.hrefRegex) && !p && (t.stopPropagation(),
            e = C.translate(e.prop("href")),
            l(e = a.alterRequest(e)))
        }
        function r() {
            var t = null === a.repeatDelay
              , e = parseInt(Date.now()) > v;
            return !(t || e)
        }
        function i() {
            v = parseInt(Date.now()) + parseInt(a.repeatDelay)
        }
        function o(t) {
            a.anchors && a.prefetch && t.find(a.anchors).not(a.prefetchBlacklist).on(a.prefetchOn, null, e)
        }
        var s, f = D(t), d = f.prop("id"), h = null, p = !1, g = {}, m = {}, t = y.location.href, v = 0;
        return a = D.extend({}, D.fn.smoothState.options, a),
        null === y.history.state ? (m = a.alterChangeState({
            id: d
        }, x.title, t),
        y.history.replaceState(m, x.title, t)) : m = {},
        C.storePageIn(g, t, x.documentElement.outerHTML, d, m),
        C.triggerAllAnimationEndEvent(f, "ss.onStartEnd ss.onProgressEnd ss.onEndEnd"),
        s = f,
        a.anchors && (s.on("click", a.anchors, function(t) {
            var e = D(t.currentTarget);
            t.metaKey || t.ctrlKey || !C.shouldLoadAnchor(e, a.blacklist, a.hrefRegex) || (t.stopPropagation(),
            t.preventDefault(),
            r()) || (i(),
            t = C.translate(e.prop("href")),
            p = !0,
            h = e.prop("hash"),
            t = a.alterRequest(t),
            a.onBefore(e, f),
            n(t))
        }),
        o(s)),
        a.forms && s.on("submit", a.forms, function(t) {
            var e = D(t.currentTarget);
            e.is(a.blacklist) || (t.preventDefault(),
            t.stopPropagation(),
            r()) || (i(),
            t = {
                url: e.prop("action"),
                data: e.serialize(),
                type: e.prop("method")
            },
            p = !0,
            "get" === (t = a.alterRequest(t)).type.toLowerCase() && (t.url = t.url + "?" + t.data),
            a.onBefore(e, f),
            n(t, _, a.allowFormCaching))
        }),
        {
            href: t,
            cache: g,
            clear: u,
            load: n,
            fetch: l,
            restartCSSAnimations: function() {
                var t = f.prop("class");
                f.removeClass(t),
                C.redraw(f),
                f.addClass(t)
            }
        }
    }
    ,
    y.onpopstate = function(t) {
        var e, n, r;
        null !== t.state && (e = y.location.href,
        r = (n = D("#" + t.state.id).data("smoothState")).href !== e && !C.isHash(e, n.href),
        t = t.state !== n.cache[n.href].state,
        r || t) && (t && n.clear(n.href),
        n.load(e, !1))
    }
    ,
    D.smoothStateUtility = C,
    D.fn.smoothState = function(e) {
        return this.each(function() {
            var t = this.tagName.toLowerCase();
            this.id && "body" !== t && "html" !== t && !D.data(this, "smoothState") ? D.data(this, "smoothState", new n(this,e)) : !this.id && w ? w.warn("Every smoothState container needs an id but the following one does not have one:", this) : "body" !== t && "html" !== t || !w || w.warn("The smoothstate container cannot be the " + this.tagName + " tag")
        })
    }
    ,
    D.fn.smoothState.options = {
        debug: !1,
        anchors: "a",
        hrefRegex: "",
        forms: "form",
        allowFormCaching: !1,
        repeatDelay: 500,
        blacklist: ".no-smoothState",
        prefetch: !1,
        prefetchOn: "mouseover touchstart",
        prefetchBlacklist: ".no-prefetch",
        locationHeader: "X-SmoothState-Location",
        cacheLength: 0,
        loadingClass: "is-loading",
        scroll: !0,
        alterRequest: function(t) {
            return t
        },
        alterChangeState: function(t, e, n) {
            return t
        },
        onBefore: function(t, e) {},
        onStart: {
            duration: 0,
            render: function(t) {}
        },
        onProgress: {
            duration: 0,
            render: function(t) {}
        },
        onReady: {
            duration: 0,
            render: function(t, e) {
                t.html(e)
            }
        },
        onAfter: function(t, e) {}
    })
}),
function() {
    "use strict";
    var t = [];
    function e() {
        for (; t.length; )
            t[0](),
            t.shift()
    }
    function s(t) {
        this.a = o,
        this.b = void 0,
        this.f = [];
        var e = this;
        try {
            t(function(t) {
                !function e(n, t) {
                    if (n.a == o) {
                        if (t == n)
                            throw new TypeError;
                        var r = !1;
                        try {
                            var i = t && t.then;
                            if (null != t && "object" == typeof t && "function" == typeof i)
                                return i.call(t, function(t) {
                                    r || e(n, t),
                                    r = !0
                                }, function(t) {
                                    r || u(n, t),
                                    r = !0
                                }),
                                0
                        } catch (t) {
                            return r || u(n, t),
                            0
                        }
                        n.a = 0,
                        n.b = t,
                        l(n)
                    }
                }(e, t)
            }, function(t) {
                u(e, t)
            })
        } catch (t) {
            u(e, t)
        }
    }
    var n = function() {
        setTimeout(e)
    }
      , o = 2;
    function a(e) {
        return new s(function(t) {
            t(e)
        }
        )
    }
    function u(t, e) {
        if (t.a == o) {
            if (e == t)
                throw new TypeError;
            t.a = 1,
            t.b = e,
            l(t)
        }
    }
    function l(i) {
        t.push(function() {
            if (i.a != o)
                for (; i.f.length; ) {
                    var t = (r = i.f.shift())[0]
                      , e = r[1]
                      , n = r[2]
                      , r = r[3];
                    try {
                        0 == i.a ? n("function" == typeof t ? t.call(void 0, i.b) : i.b) : 1 == i.a && ("function" == typeof e ? n(e.call(void 0, i.b)) : r(i.b))
                    } catch (t) {
                        r(t)
                    }
                }
        }),
        1 == t.length && n()
    }
    s.prototype.g = function(t) {
        return this.c(void 0, t)
    }
    ,
    s.prototype.c = function(n, r) {
        var i = this;
        return new s(function(t, e) {
            i.f.push([n, r, t, e]),
            l(i)
        }
        )
    }
    ,
    window.Promise || (window.Promise = s,
    window.Promise.resolve = a,
    window.Promise.reject = function(n) {
        return new s(function(t, e) {
            e(n)
        }
        )
    }
    ,
    window.Promise.race = function(r) {
        return new s(function(t, e) {
            for (var n = 0; n < r.length; n += 1)
                a(r[n]).c(t, e)
        }
        )
    }
    ,
    window.Promise.all = function(o) {
        return new s(function(n, t) {
            var r = 0
              , i = [];
            0 == o.length && n(i);
            for (var e = 0; e < o.length; e += 1)
                a(o[e]).c(function(e) {
                    return function(t) {
                        i[e] = t,
                        (r += 1) == o.length && n(i)
                    }
                }(e), t)
        }
        )
    }
    ,
    window.Promise.prototype.then = s.prototype.c,
    window.Promise.prototype.catch = s.prototype.g)
}(),
function() {
    function i(t, e) {
        document.addEventListener ? t.addEventListener("scroll", e, !1) : t.attachEvent("scroll", e)
    }
    function y(t) {
        this.a = document.createElement("div"),
        this.a.setAttribute("aria-hidden", "true"),
        this.a.appendChild(document.createTextNode(t)),
        this.b = document.createElement("span"),
        this.c = document.createElement("span"),
        this.h = document.createElement("span"),
        this.f = document.createElement("span"),
        this.g = -1,
        this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",
        this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",
        this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",
        this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",
        this.b.appendChild(this.h),
        this.c.appendChild(this.f),
        this.a.appendChild(this.b),
        this.a.appendChild(this.c)
    }
    function x(t, e) {
        t.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + e + ";"
    }
    function o(t) {
        var e = t.a.offsetWidth
          , n = e + 100;
        return t.f.style.width = n + "px",
        t.c.scrollLeft = n,
        t.b.scrollLeft = t.b.scrollWidth + 100,
        t.g !== e && (t.g = e,
        1)
    }
    function _(t, e) {
        function n() {
            var t = r;
            o(t) && t.a.parentNode && e(t.g)
        }
        var r = t;
        i(t.b, n),
        i(t.c, n),
        o(t)
    }
    function t(t, e) {
        e = e || {},
        this.family = t,
        this.style = e.style || "normal",
        this.weight = e.weight || "normal",
        this.stretch = e.stretch || "normal"
    }
    var b = null
      , r = null
      , n = null
      , e = null;
    function s() {
        return e = null === e ? !!document.fonts : e
    }
    function w(t, e) {
        return [t.style, t.weight, function() {
            if (null === n) {
                var t = document.createElement("div");
                try {
                    t.style.font = "condensed 100px sans-serif"
                } catch (t) {}
                n = "" !== t.style.font
            }
            return n
        }() ? t.stretch : "", "100px", e].join(" ")
    }
    t.prototype.load = function(t, e) {
        var p = this
          , g = t || "BESbswy"
          , m = 0
          , v = e || 3e3
          , D = (new Date).getTime();
        return new Promise(function(d, h) {
            var t, e, n;
            s() && !(r = null === r ? !(!s() || !/Apple/.test(window.navigator.vendor)) && !!(n = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent)) && parseInt(n[1], 10) < 603 : r) ? (t = new Promise(function(n, t) {
                !function e() {
                    (new Date).getTime() - D >= v ? t(Error(v + "ms timeout exceeded")) : document.fonts.load(w(p, '"' + p.family + '"'), g).then(function(t) {
                        1 <= t.length ? n() : setTimeout(e, 25)
                    }, t)
                }()
            }
            ),
            n = new Promise(function(t, e) {
                m = setTimeout(function() {
                    e(Error(v + "ms timeout exceeded"))
                }, v)
            }
            ),
            Promise.race([n, t]).then(function() {
                clearTimeout(m),
                d(p)
            }, h)) : (e = function() {
                function n() {
                    var t;
                    (t = -1 != u && -1 != l || -1 != u && -1 != c || -1 != l && -1 != c) && ((t = u != l && u != c && l != c) || (null === b && (t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),
                    b = !!t && (parseInt(t[1], 10) < 536 || 536 === parseInt(t[1], 10) && parseInt(t[2], 10) <= 11)),
                    t = b && (u == e && l == e && c == e || u == r && l == r && c == r || u == i && l == i && c == i)),
                    t = !t),
                    t && (f.parentNode && f.parentNode.removeChild(f),
                    clearTimeout(m),
                    d(p))
                }
                var e, r, i, o = new y(g), s = new y(g), a = new y(g), u = -1, l = -1, c = -1, f = document.createElement("div");
                f.dir = "ltr",
                x(o, w(p, "sans-serif")),
                x(s, w(p, "serif")),
                x(a, w(p, "monospace")),
                f.appendChild(o.a),
                f.appendChild(s.a),
                f.appendChild(a.a),
                document.body.appendChild(f),
                e = o.a.offsetWidth,
                r = s.a.offsetWidth,
                i = a.a.offsetWidth,
                function t() {
                    var e;
                    (new Date).getTime() - D >= v ? (f.parentNode && f.parentNode.removeChild(f),
                    h(Error(v + "ms timeout exceeded"))) : (!0 !== (e = document.hidden) && void 0 !== e || (u = o.a.offsetWidth,
                    l = s.a.offsetWidth,
                    c = a.a.offsetWidth,
                    n()),
                    m = setTimeout(t, 50))
                }(),
                _(o, function(t) {
                    u = t,
                    n()
                }),
                x(o, w(p, '"' + p.family + '",sans-serif')),
                _(s, function(t) {
                    l = t,
                    n()
                }),
                x(s, w(p, '"' + p.family + '",serif')),
                _(a, function(t) {
                    c = t,
                    n()
                }),
                x(a, w(p, '"' + p.family + '",monospace'))
            }
            ,
            document.body ? e() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function t() {
                document.removeEventListener("DOMContentLoaded", t),
                e()
            }) : document.attachEvent("onreadystatechange", function t() {
                "interactive" != document.readyState && "complete" != document.readyState || (document.detachEvent("onreadystatechange", t),
                e())
            }))
        }
        )
    }
    ,
    "object" == typeof module ? module.exports = t : (window.FontFaceObserver = t,
    window.FontFaceObserver.prototype.load = t.prototype.load)
}(),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";
    function r(t, e) {
        t.prototype = Object.create(e.prototype),
        (t.prototype.constructor = t).__proto__ = e
    }
    function O(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function j(t) {
        return "string" == typeof t
    }
    function f(t) {
        return "function" == typeof t
    }
    function K(t) {
        return "number" == typeof t
    }
    function o(t) {
        return void 0 === t
    }
    function F(t) {
        return "object" == typeof t
    }
    function N(t) {
        return !1 !== t
    }
    function g() {
        return "undefined" != typeof window
    }
    function Q(t) {
        return f(t) || j(t)
    }
    function m(t) {
        return (Qt = Wt(t, s)) && c
    }
    function Z(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }
    function J(t, e) {
        return !e && console.warn(t)
    }
    function v(t, e) {
        return t && (s[t] = e) && Qt && (Qt[t] = e) || s
    }
    function D() {
        return 0
    }
    function tt(t) {
        var e, n, r = t[0];
        if (F(r) || f(r) || (t = [t]),
        !(e = (r._gsap || {}).harness)) {
            for (n = qe.length; n-- && !qe[n].targetTest(r); )
                ;
            e = qe[n]
        }
        for (n = t.length; n--; )
            t[n] && (t[n]._gsap || (t[n]._gsap = new tn(t[n],e))) || t.splice(n, 1);
        return t
    }
    function et(t) {
        return t._gsap || tt(k(t))[0]._gsap
    }
    function y(t, e, n) {
        return (n = t[e]) && f(n) ? t[e]() : o(n) && t.getAttribute && t.getAttribute(e) || n
    }
    function h(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }
    function B(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }
    function S(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }
    function nt(t, e) {
        var n = e.charAt(0)
          , e = parseFloat(e.substr(2));
        return t = parseFloat(t),
        "+" === n ? t + e : "-" === n ? t - e : "*" === n ? t * e : t / e
    }
    function rt() {
        var t, e, n = Ne.length, r = Ne.slice(0);
        for (Le = {},
        t = Ne.length = 0; t < n; t++)
            (e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }
    function x(t, e, n, r) {
        Ne.length && !R && rt(),
        t.render(e, n, r || R && e < 0 && (t._initted || t._startAt)),
        Ne.length && !R && rt()
    }
    function b(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(Ae).length < 2 ? e : j(t) ? t.trim() : t
    }
    function w(t) {
        return t
    }
    function L(t, e) {
        for (var n in e)
            n in t || (t[n] = e[n]);
        return t
    }
    function C(t, e) {
        for (var n in e)
            "__proto__" !== n && "constructor" !== n && "prototype" !== n && (t[n] = F(e[n]) ? C(t[n] || (t[n] = {}), e[n]) : e[n]);
        return t
    }
    function it(t, e) {
        var n, r = {};
        for (n in t)
            n in e || (r[n] = t[n]);
        return r
    }
    function ot(t) {
        var r, e = t.parent || H, n = t.keyframes ? (r = A(t.keyframes),
        function(t, e) {
            for (var n in e)
                n in t || "duration" === n && r || "ease" === n || (t[n] = e[n])
        }
        ) : L;
        if (N(t.inherit))
            for (; e; )
                n(t, e.vars.defaults),
                e = e.parent || e._dp;
        return t
    }
    function E(t, e, n, r, i) {
        void 0 === n && (n = "_first");
        var o, s = t[r = void 0 === r ? "_last" : r];
        if (i)
            for (o = e[i]; s && s[i] > o; )
                s = s._prev;
        s ? (e._next = s._next,
        s._next = e) : (e._next = t[n],
        t[n] = e),
        e._next ? e._next._prev = e : t[r] = e,
        e._prev = s,
        e.parent = e._dp = t
    }
    function T(t, e, n, r) {
        void 0 === n && (n = "_first"),
        void 0 === r && (r = "_last");
        var i = e._prev
          , o = e._next;
        i ? i._next = o : t[n] === e && (t[n] = o),
        o ? o._prev = i : t[r] === e && (t[r] = i),
        e._next = e._prev = e.parent = null
    }
    function st(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t),
        t._act = 0
    }
    function at(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var n = t; n; )
                n._dirty = 1,
                n = n.parent;
        return t
    }
    function ut(t, e, n, r) {
        t._startAt && (R ? t._startAt.revert(Me) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r))
    }
    function lt(t) {
        return t._repeat ? Xt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }
    function ct(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }
    function ft(t) {
        t._end = S(t._start + (t._tDur / Math.abs(t._ts || t._rts || W) || 0))
    }
    function dt(t, e) {
        var n = t._dp;
        n && n.smoothChildTiming && t._ts && (t._start = S(n._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
        ft(t),
        n._dirty || at(n, t))
    }
    function ht(t, e) {
        var n;
        if ((e._time || e._initted && !e._dur) && (n = ct(t.rawTime(), e),
        !e._dur || Vt(0, e.totalDuration(), n) - e._tTime > W) && e.render(n, !0),
        at(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (n = t; n._dp; )
                    0 <= n.rawTime() && n.totalTime(n._tTime),
                    n = n._dp;
            t._zTime = -W
        }
    }
    function pt(t, e, n, r) {
        return e.parent && st(e),
        e._start = S((K(n) ? n : n || t !== H ? l(t, n, e) : t._time) + e._delay),
        e._end = S(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
        E(t, e, "_first", "_last", t._sort ? "_start" : 0),
        Ut(e) || (t._recent = e),
        r || ht(t, e),
        t._ts < 0 && dt(t, t._tTime),
        t
    }
    function gt(t, e) {
        (s.ScrollTrigger || Z("scrollTrigger", e)) && s.ScrollTrigger.create(e, t)
    }
    function mt(t, e, n, r, i) {
        return an(t, e, i),
        !t._initted || !n && t._pt && !R && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && Jt !== p.frame && (Ne.push(t),
        t._lazy = [i, r])
    }
    function vt(t, e, n, r) {
        var i = t._repeat
          , o = S(e) || 0;
        return (e = t._tTime / t._tDur) && !r && (t._time *= o / t._dur),
        t._dur = o,
        t._tDur = i ? i < 0 ? 1e10 : S(o * (i + 1) + t._rDelay * i) : o,
        0 < e && !r && dt(t, t._tTime = t._tDur * e),
        t.parent && ft(t),
        n || at(t.parent, t),
        t
    }
    function Dt(t) {
        return t instanceof M ? at(t) : vt(t, t._dur)
    }
    function yt(t, e, n) {
        var r, i, o = K(e[1]), s = (o ? 2 : 1) + (t < 2 ? 0 : 1), a = e[s];
        if (o && (a.duration = e[1]),
        a.parent = n,
        t) {
            for (r = a,
            i = n; i && !("immediateRender"in r); )
                r = i.vars.defaults || {},
                i = N(i.vars.inherit) && i.parent;
            a.immediateRender = N(r.immediateRender),
            t < 2 ? a.runBackwards = 1 : a.startAt = e[s - 1]
        }
        return new Y(e[0],a,e[1 + s])
    }
    function xt(t, e) {
        return t || 0 === t ? e(t) : e
    }
    function q(t, e) {
        return j(t) && (e = ke.exec(t)) ? e[1] : ""
    }
    function _t(t, e) {
        return t && F(t) && "length"in t && (!e && !t.length || t.length - 1 in t && F(t[0])) && !t.nodeType && t !== u
    }
    function bt(n) {
        return n = k(n)[0] || J("Invalid scope") || {},
        function(t) {
            var e = n.current || n.nativeElement || n;
            return k(t, e.querySelectorAll ? e : e === n ? J("Invalid scope") || Kt.createElement("div") : n)
        }
    }
    function wt(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }
    function Ct(t) {
        var h, p, g, m, v, D, y, x, _;
        return f(t) ? t : (h = F(t) ? t : {
            each: t
        },
        p = Qe(h.ease),
        g = h.from || 0,
        m = parseFloat(h.base) || 0,
        v = {},
        t = 0 < g && g < 1,
        D = isNaN(g) || t,
        y = h.axis,
        j(_ = x = g) ? x = _ = {
            center: .5,
            edges: .5,
            end: 1
        }[g] || 0 : !t && D && (x = g[0],
        _ = g[1]),
        function(t, e, n) {
            var r, i, o, s, a, u, l, c, f = (n || h).length, d = v[f];
            if (!d) {
                if (!(c = "auto" === h.grid ? 0 : (h.grid || [1, z])[1])) {
                    for (u = -z; u < (u = n[c++].getBoundingClientRect().left) && c < f; )
                        ;
                    c--
                }
                for (d = v[f] = [],
                r = D ? Math.min(c, f) * x - .5 : g % c,
                i = c === z ? 0 : D ? f * _ / c - .5 : g / c | 0,
                l = z,
                a = u = 0; a < f; a++)
                    o = a % c - r,
                    s = i - (a / c | 0),
                    d[a] = s = y ? Math.abs("y" === y ? s : o) : xe(o * o + s * s),
                    u < s && (u = s),
                    s < l && (l = s);
                "random" === g && wt(d),
                d.max = u - l,
                d.min = l,
                d.v = f = (parseFloat(h.amount) || parseFloat(h.each) * (f < c ? f - 1 : y ? "y" === y ? f / c : c : Math.max(c, f / c)) || 0) * ("edges" === g ? -1 : 1),
                d.b = f < 0 ? m - f : m,
                d.u = q(h.amount || h.each) || 0,
                p = p && f < 0 ? Ke(p) : p
            }
            return f = (d[t] - d.min) / d.max || 0,
            S(d.b + (p ? p(f) : f) * d.v) + d.u
        }
        )
    }
    function Et(n) {
        var r = Math.pow(10, ((n + "").split(".")[1] || "").length);
        return function(t) {
            var e = S(Math.round(parseFloat(t) / n) * n * r);
            return (e - e % 1) / r + (K(t) ? 0 : q(t))
        }
    }
    function Tt(u, t) {
        var l, c, e = A(u);
        return !e && F(u) && (l = e = u.radius || z,
        u.values ? (u = k(u.values),
        (c = !K(u[0])) && (l *= l)) : u = Et(u.increment)),
        xt(t, e ? f(u) ? function(t) {
            return c = u(t),
            Math.abs(c - t) <= l ? c : t
        }
        : function(t) {
            for (var e, n, r = parseFloat(c ? t.x : t), i = parseFloat(c ? t.y : 0), o = z, s = 0, a = u.length; a--; )
                (e = c ? (e = u[a].x - r) * e + (n = u[a].y - i) * n : Math.abs(u[a] - r)) < o && (o = e,
                s = a);
            return s = !l || o <= l ? u[s] : t,
            c || s === t || K(t) ? s : s + q(t)
        }
        : Et(u))
    }
    function Ft(t, e, n, r) {
        return xt(A(t) ? !e : !0 === n ? !!(n = 0) : !r, function() {
            return A(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + .99 * n)) / n) * n * r) / r
        })
    }
    function St(e, n, t) {
        return xt(t, function(t) {
            return e[~~n(t)]
        })
    }
    function At(t) {
        for (var e, n, r, i, o = 0, s = ""; ~(e = t.indexOf("random(", o)); )
            r = t.indexOf(")", e),
            i = "[" === t.charAt(e + 7),
            n = t.substr(e + 7, r - e - 7).match(i ? Ae : Ce),
            s += t.substr(o, e - o) + Ft(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5),
            o = r + 1;
        return s + t.substr(o, t.length - o)
    }
    function kt(t, e, n) {
        var r, i, o, s = t.labels, a = z;
        for (r in s)
            (i = s[r] - e) < 0 == !!n && i && a > (i = Math.abs(i)) && (o = r,
            a = i);
        return o
    }
    function Pt(t) {
        return st(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!R),
        t.progress() < 1 && _(t, "onInterrupt"),
        t
    }
    function Mt(t) {
        if (g()) {
            var e = (t = !t.name && t.default || t).name
              , n = f(t)
              , r = e && !n && t.init ? function() {
                this._props = []
            }
            : t
              , i = {
                init: D,
                render: Cn,
                add: dn,
                kill: Tn,
                modifier: En,
                rawVars: 0
            }
              , n = {
                targetTest: 0,
                get: 0,
                getSetter: xn,
                aliases: {},
                register: 0
            };
            if (Ve(),
            t !== r) {
                if (X[e])
                    return;
                L(r, L(it(t, i), n)),
                Wt(r.prototype, Wt(i, it(t, n))),
                X[r.prop = e] = r,
                t.targetTest && (qe.push(r),
                Be[e] = 1),
                e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            v(e, r),
            t.register && t.register(c, r, U)
        } else
            We.push(t)
    }
    function Ot(t, e, n) {
        return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * d + .5 | 0
    }
    function Bt(t, e, n) {
        var r, i, o, s, a, u, l, c = t ? K(t) ? [t >> 16, t >> 8 & d, t & d] : 0 : Xe.black;
        if (!c) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
            Xe[t])
                c = Xe[t];
            else if ("#" === t.charAt(0)) {
                if (9 === (t = t.length < 6 ? "#" + (r = t.charAt(1)) + r + (i = t.charAt(2)) + i + (o = t.charAt(3)) + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : "") : t).length)
                    return [(c = parseInt(t.substr(1, 6), 16)) >> 16, c >> 8 & d, c & d, parseInt(t.substr(7), 16) / 255];
                c = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & d, t & d]
            } else if ("hsl" === t.substr(0, 3))
                if (c = l = t.match(Ce),
                e) {
                    if (~t.indexOf("="))
                        return c = t.match(Ee),
                        n && c.length < 4 && (c[3] = 1),
                        c
                } else
                    s = +c[0] % 360 / 360,
                    a = c[1] / 100,
                    r = 2 * (u = c[2] / 100) - (i = u <= .5 ? u * (a + 1) : u + a - u * a),
                    3 < c.length && (c[3] *= 1),
                    c[0] = Ot(s + 1 / 3, r, i),
                    c[1] = Ot(s, r, i),
                    c[2] = Ot(s - 1 / 3, r, i);
            else
                c = t.match(Ce) || Xe.transparent;
            c = c.map(Number)
        }
        return e && !l && (r = c[0] / d,
        i = c[1] / d,
        o = c[2] / d,
        u = ((t = Math.max(r, i, o)) + (e = Math.min(r, i, o))) / 2,
        t === e ? s = a = 0 : (l = t - e,
        a = .5 < u ? l / (2 - t - e) : l / (t + e),
        s = t === r ? (i - o) / l + (i < o ? 6 : 0) : t === i ? (o - r) / l + 2 : (r - i) / l + 4,
        s *= 60),
        c[0] = ~~(s + .5),
        c[1] = ~~(100 * a + .5),
        c[2] = ~~(100 * u + .5)),
        n && c.length < 4 && (c[3] = 1),
        c
    }
    function Nt(t) {
        var e = []
          , n = []
          , r = -1;
        return t.split(Ye).forEach(function(t) {
            t = t.match(Te) || [],
            e.push.apply(e, t),
            n.push(r += t.length + 1)
        }),
        e.c = n,
        e
    }
    function Lt(t, e, n) {
        var r, i, o, s, a = "", u = (t + a).match(Ye), l = e ? "hsla(" : "rgba(", c = 0;
        if (!u)
            return t;
        if (u = u.map(function(t) {
            return (t = Bt(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        }),
        n && (o = Nt(t),
        (r = n.c).join(a) !== o.c.join(a)))
            for (s = (i = t.replace(Ye, "1").split(Te)).length - 1; c < s; c++)
                a += i[c] + (~r.indexOf(c) ? u.shift() || l + "0,0,0,0)" : (o.length ? o : u.length ? u : n).shift());
        if (!i)
            for (s = (i = t.split(Ye)).length - 1; c < s; c++)
                a += i[c] + u[c];
        return a + i[s]
    }
    function Rt(t) {
        var e = t.join(" ");
        if (Ye.lastIndex = 0,
        Ye.test(e))
            return e = Ue.test(e),
            t[1] = Lt(t[1], e),
            t[0] = Lt(t[0], e, Nt(t[1])),
            !0
    }
    function jt(t, e) {
        for (var n, r = t._first; r; )
            r instanceof M ? jt(r, e) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === e || (r.timeline ? jt(r.timeline, e) : (n = r._ease,
            r._ease = r._yEase,
            r._yEase = n,
            r._yoyo = e)),
            r = r._next
    }
    function qt(t, e, n, r) {
        var i, o = {
            easeIn: e,
            easeOut: n = void 0 === n ? function(t) {
                return 1 - e(1 - t)
            }
            : n,
            easeInOut: r = void 0 === r ? function(t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            }
            : r
        };
        h(t, function(t) {
            for (var e in P[t] = s[t] = o,
            P[i = t.toLowerCase()] = n,
            o)
                P[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = P[t + "." + e] = o[e]
        })
    }
    function Ht(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }
    function It(n, t, e) {
        function r(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * be((t - o) * s) + 1
        }
        var i = 1 <= t ? t : 1
          , o = (s = (e || (n ? .3 : .45)) / (t < 1 ? t : 1)) / ve * (Math.asin(1 / i) || 0)
          , t = "out" === n ? r : "in" === n ? function(t) {
            return 1 - r(1 - t)
        }
        : Ht(r)
          , s = ve / s;
        return t.config = function(t, e) {
            return It(n, t, e)
        }
        ,
        t
    }
    function zt(e, n) {
        function r(t) {
            return t ? --t * t * ((n + 1) * t + n) + 1 : 0
        }
        void 0 === n && (n = 1.70158);
        var t = "out" === e ? r : "in" === e ? function(t) {
            return 1 - r(1 - t)
        }
        : Ht(r);
        return t.config = function(t) {
            return zt(e, t)
        }
        ,
        t
    }
    function Wt(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    function Xt(t, e) {
        return e = Math.floor(t /= e),
        t && e === t ? e - 1 : e
    }
    function Yt(e, t, n, r, i) {
        var o = t - e
          , s = r - n;
        return xt(i, function(t) {
            return n + ((t - e) / o * s || 0)
        })
    }
    function _(t, e, n) {
        var r = t.vars
          , i = r[e]
          , o = a
          , s = t._ctx;
        i && (e = r[e + "Params"],
        t = r.callbackScope || t,
        n && Ne.length && rt(),
        s && (a = s),
        t = e ? i.apply(t, e) : i.call(t),
        a = o)
    }
    function Ut(t) {
        return "isFromStart" === (t = t.data) || "isStart" === t
    }
    function l(t, e, n) {
        var r, i, o, s = t.labels, a = t._recent || Ie, u = t.duration() >= z ? a.endTime(!1) : t._dur;
        return j(e) && (isNaN(e) || e in s) ? (i = e.charAt(0),
        o = "%" === e.substr(-1),
        r = e.indexOf("="),
        "<" === i || ">" === i ? (0 <= r && (e = e.replace(/=/, "")),
        ("<" === i ? a._start : a.endTime(0 <= a._repeat)) + (parseFloat(e.substr(1)) || 0) * (o ? (r < 0 ? a : n).totalDuration() / 100 : 1)) : r < 0 ? (e in s || (s[e] = u),
        s[e]) : (i = parseFloat(e.charAt(r - 1) + e.substr(r + 1)),
        o && n && (i = i / 100 * (A(n) ? n[0] : n).totalDuration()),
        1 < r ? l(t, e.substr(0, r - 1), n) + i : u + i)) : null == e ? u : +e
    }
    function Vt(t, e, n) {
        return n < t ? t : e < n ? e : n
    }
    var $t, R, a, H, u, Gt, Kt, Qt, Zt, Jt, te, ee, ne, re, ie, oe, se, ae, ue, le, ce, fe, de, he, pe, ge, I = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, me = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, z = 1e8, W = 1 / z, ve = 2 * Math.PI, De = ve / 4, ye = 0, xe = Math.sqrt, _e = Math.cos, be = Math.sin, we = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
    , A = Array.isArray, Ce = /(?:-?\.?\d|\.)+/gi, Ee = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Te = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Fe = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Se = /[+-]=-?[.\d]+/, Ae = /[^,'"\[\]\s]+/gi, ke = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, s = {}, Pe = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    }, Me = {
        suppressEvents: !0,
        kill: !1
    }, Oe = {
        suppressEvents: !0
    }, Be = {}, Ne = [], Le = {}, X = {}, Re = {}, je = 30, qe = [], He = "", Ie = {
        _start: 0,
        endTime: D,
        totalDuration: D
    }, ze = [].slice, k = function(t, e, n) {
        return a && !e && a.selector ? a.selector(t) : !j(t) || n || !Gt && Ve() ? A(t) ? (r = n,
        void 0 === i && (i = []),
        t.forEach(function(t) {
            return j(t) && !r || _t(t, 1) ? i.push.apply(i, k(t)) : i.push(t)
        }) || i) : _t(t) ? ze.call(t, 0) : t ? [t] : [] : ze.call((e || Kt).querySelectorAll(t), 0);
        var r, i
    }, We = [], d = 255, Xe = {
        aqua: [0, d, d],
        lime: [0, d, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, d],
        navy: [0, 0, 128],
        white: [d, d, d],
        olive: [128, 128, 0],
        yellow: [d, d, 0],
        orange: [d, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [d, 0, 0],
        pink: [d, 192, 203],
        cyan: [0, d, d],
        transparent: [d, d, d, 0]
    }, Ye = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in Xe)
            e += "|" + t + "\\b";
        return new RegExp(e + ")","gi")
    }(), Ue = /hsl[a]?\(/, p = (ae = Date.now,
    ue = 500,
    le = 33,
    ce = ae(),
    fe = ce,
    he = de = 1e3 / 240,
    ie = {
        time: 0,
        frame: 0,
        tick: function() {
            Ze(!0)
        },
        deltaRatio: function(t) {
            return oe / (1e3 / (t || 60))
        },
        wake: function() {
            Zt && (!Gt && g() && (u = Gt = window,
            Kt = u.document || {},
            s.gsap = c,
            (u.gsapVersions || (u.gsapVersions = [])).push(c.version),
            m(Qt || u.GreenSockGlobals || !u.gsap && u || {}),
            re = u.requestAnimationFrame,
            We.forEach(Mt)),
            ee && ie.sleep(),
            ne = re || function(t) {
                return setTimeout(t, he - 1e3 * ie.time + 1 | 0)
            }
            ,
            te = 1,
            Ze(2))
        },
        sleep: function() {
            (re ? u.cancelAnimationFrame : clearTimeout)(ee),
            te = 0,
            ne = D
        },
        lagSmoothing: function(t, e) {
            ue = t || 1 / 0,
            le = Math.min(e || 33, ue)
        },
        fps: function(t) {
            de = 1e3 / (t || 240),
            he = 1e3 * ie.time + de
        },
        add: function(i, t, e) {
            var o = t ? function(t, e, n, r) {
                i(t, e, n, r),
                ie.remove(o)
            }
            : i;
            return ie.remove(i),
            pe[e ? "unshift" : "push"](o),
            Ve(),
            o
        },
        remove: function(t, e) {
            ~(e = pe.indexOf(t)) && pe.splice(e, 1) && e <= se && se--
        },
        _listeners: pe = []
    }), Ve = function() {
        return !te && p.wake()
    }, P = {}, $e = /^[\d.\-M][\d.\-,\s]/, Ge = /["']/g, Ke = function(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }, Qe = function(t, e) {
        return t && (f(t) ? t : P[t] || (o = ((n = t) + "").split("("),
        (s = P[o[0]]) && 1 < o.length && s.config ? s.config.apply(null, ~n.indexOf("{") ? [function(t) {
            for (var e, n, r, i = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, u = o.length; a < u; a++)
                n = o[a],
                e = a !== u - 1 ? n.lastIndexOf(",") : n.length,
                r = n.substr(0, e),
                i[s] = isNaN(r) ? r.replace(Ge, "").trim() : +r,
                s = n.substr(e + 1).trim();
            return i
        }(o[1])] : (i = (r = n).indexOf("(") + 1,
        t = r.indexOf(")"),
        o = r.indexOf("(", i),
        r.substring(i, ~o && o < t ? r.indexOf(")", t + 1) : t).split(",").map(b))) : P._CE && $e.test(n) ? P._CE("", n) : s)) || e;
        var n, r, i, o, s
    };
    function Ze(t) {
        var e, n, r, i = ae() - fe, o = !0 === t;
        if (ue < i && (ce += i - le),
        (0 < (i = (n = (fe += i) - ce) - he) || o) && (r = ++ie.frame,
        oe = n - 1e3 * ie.time,
        ie.time = n /= 1e3,
        he += i + (de <= i ? 4 : de - i),
        e = 1),
        o || (ee = ne(Ze)),
        e)
            for (se = 0; se < pe.length; se++)
                pe[se](n, oe, r, t)
    }
    function Je(t) {
        return t < 1 / 2.75 ? ge * t * t : t < .7272727272727273 ? ge * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? ge * (t -= 2.25 / 2.75) * t + .9375 : ge * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    h("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var n = e < 5 ? e + 1 : e;
        qt(t + ",Power" + (n - 1), e ? function(t) {
            return Math.pow(t, n)
        }
        : function(t) {
            return t
        }
        , function(t) {
            return 1 - Math.pow(1 - t, n)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
        })
    }),
    P.Linear.easeNone = P.none = P.Linear.easeIn,
    qt("Elastic", It("in"), It("out"), It()),
    ge = 7.5625,
    qt("Bounce", function(t) {
        return 1 - Je(1 - t)
    }, Je),
    qt("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }),
    qt("Circ", function(t) {
        return -(xe(1 - t * t) - 1)
    }),
    qt("Sine", function(t) {
        return 1 === t ? 1 : 1 - _e(t * De)
    }),
    qt("Back", zt("in"), zt("out"), zt()),
    P.SteppedEase = P.steps = s.SteppedEase = {
        config: function(t, e) {
            var n = 1 / (t = void 0 === t ? 1 : t)
              , r = t + (e ? 0 : 1)
              , i = e ? 1 : 0;
            return function(t) {
                return ((r * Vt(0, .99999999, t) | 0) + i) * n
            }
        }
    },
    me.ease = P["quad.out"],
    h("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return He += t + "," + t + "Params,"
    });
    var tn = function(t, e) {
        this.id = ye++,
        (t._gsap = this).target = t,
        this.harness = e,
        this.get = e ? e.get : y,
        this.set = e ? e.getSetter : xn
    }
      , en = ((e = nn.prototype).delay = function(t) {
        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
        this._delay = t,
        this) : this._delay
    }
    ,
    e.duration = function(t) {
        return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
    }
    ,
    e.totalDuration = function(t) {
        return arguments.length ? (this._dirty = 0,
        vt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    e.totalTime = function(t, e) {
        if (Ve(),
        !arguments.length)
            return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
            for (dt(this, t),
            n._dp && !n.parent && ht(n, this); n && n.parent; )
                n.parent._time !== n._start + (0 <= n._ts ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                n = n.parent;
            !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && pt(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === W || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
        x(this, t, e)),
        this
    }
    ,
    e.time = function(t, e) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + lt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
    }
    ,
    e.totalProgress = function(t, e) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }
    ,
    e.progress = function(t, e) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + lt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }
    ,
    e.iteration = function(t, e) {
        var n = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? Xt(this._tTime, n) + 1 : 1
    }
    ,
    e.timeScale = function(t) {
        if (!arguments.length)
            return this._rts === -W ? 0 : this._rts;
        if (this._rts === t)
            return this;
        for (var e = this.parent && this._ts ? ct(this.parent._time, this) : this._tTime, t = (this._rts = +t || 0,
        this._ts = this._ps || t === -W ? 0 : this._rts,
        this.totalTime(Vt(-Math.abs(this._delay), this._tDur, e), !0),
        ft(this),
        this), n = t.parent; n && n.parent; )
            n._dirty = 1,
            n.totalDuration(),
            n = n.parent;
        return t
    }
    ,
    e.paused = function(t) {
        return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Ve(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== W && (this._tTime -= W)))),
        this) : this._ps
    }
    ,
    e.startTime = function(t) {
        var e;
        return arguments.length ? (this._start = t,
        !(e = this.parent || this._dp) || !e._sort && this.parent || pt(e, this, t - this._delay),
        this) : this._start
    }
    ,
    e.endTime = function(t) {
        return this._start + (N(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    e.rawTime = function(t) {
        var e = this.parent || this._dp;
        return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ct(e.rawTime(t), this) : this._tTime : this._tTime
    }
    ,
    e.revert = function(t) {
        var e = R;
        return R = t = void 0 === t ? Oe : t,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t),
        this.totalTime(-.01, t.suppressEvents)),
        "nested" !== this.data && !1 !== t.kill && this.kill(),
        R = e,
        this
    }
    ,
    e.globalTime = function(t) {
        for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
            n = e._start + n / (e._ts || 1),
            e = e._dp;
        return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(t) : n
    }
    ,
    e.repeat = function(t) {
        return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
        Dt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
    }
    ,
    e.repeatDelay = function(t) {
        var e;
        return arguments.length ? (e = this._time,
        this._rDelay = t,
        Dt(this),
        e ? this.time(e) : this) : this._rDelay
    }
    ,
    e.yoyo = function(t) {
        return arguments.length ? (this._yoyo = t,
        this) : this._yoyo
    }
    ,
    e.seek = function(t, e) {
        return this.totalTime(l(this, t), N(e))
    }
    ,
    e.restart = function(t, e) {
        return this.play().totalTime(t ? -this._delay : 0, N(e))
    }
    ,
    e.play = function(t, e) {
        return null != t && this.seek(t, e),
        this.reversed(!1).paused(!1)
    }
    ,
    e.reverse = function(t, e) {
        return null != t && this.seek(t || this.totalDuration(), e),
        this.reversed(!0).paused(!1)
    }
    ,
    e.pause = function(t, e) {
        return null != t && this.seek(t, e),
        this.paused(!0)
    }
    ,
    e.resume = function() {
        return this.paused(!1)
    }
    ,
    e.reversed = function(t) {
        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -W : 0)),
        this) : this._rts < 0
    }
    ,
    e.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -W,
        this
    }
    ,
    e.isActive = function() {
        var t = this.parent || this._dp
          , e = this._start;
        return !(t && !(this._ts && this._initted && t.isActive() && (t = t.rawTime(!0)) >= e && t < this.endTime(!0) - W))
    }
    ,
    e.eventCallback = function(t, e, n) {
        var r = this.vars;
        return 1 < arguments.length ? (e ? (r[t] = e,
        n && (r[t + "Params"] = n),
        "onUpdate" === t && (this._onUpdate = e)) : delete r[t],
        this) : r[t]
    }
    ,
    e.then = function(r) {
        var i = this;
        return new Promise(function(e) {
            function t() {
                var t = i.then;
                i.then = null,
                f(n) && (n = n(i)) && (n.then || n === i) && (i.then = t),
                e(n),
                i.then = t
            }
            var n = f(r) ? r : w;
            i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? t() : i._prom = t
        }
        )
    }
    ,
    e.kill = function() {
        Pt(this)
    }
    ,
    nn);
    function nn(t) {
        this.vars = t,
        this._delay = +t.delay || 0,
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
        this._yoyo = !!t.yoyo || !!t.yoyoEase),
        this._ts = 1,
        vt(this, +t.duration, 1, 1),
        this.data = t.data,
        a && (this._ctx = a).data.push(this),
        te || p.wake()
    }
    L(en.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -W,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    r(on, rn = en),
    (n = on.prototype).to = function(t, e, n) {
        return yt(0, arguments, this),
        this
    }
    ,
    n.from = function(t, e, n) {
        return yt(1, arguments, this),
        this
    }
    ,
    n.fromTo = function(t, e, n, r) {
        return yt(2, arguments, this),
        this
    }
    ,
    n.set = function(t, e, n) {
        return e.duration = 0,
        e.parent = this,
        ot(e).repeatDelay || (e.repeat = 0),
        e.immediateRender = !!e.immediateRender,
        new Y(t,e,l(this, n),1),
        this
    }
    ,
    n.call = function(t, e, n) {
        return pt(this, Y.delayedCall(0, t, e), n)
    }
    ,
    n.staggerTo = function(t, e, n, r, i, o, s) {
        return n.duration = e,
        n.stagger = n.stagger || r,
        n.onComplete = o,
        n.onCompleteParams = s,
        n.parent = this,
        new Y(t,n,l(this, i)),
        this
    }
    ,
    n.staggerFrom = function(t, e, n, r, i, o, s) {
        return n.runBackwards = 1,
        ot(n).immediateRender = N(n.immediateRender),
        this.staggerTo(t, e, n, r, i, o, s)
    }
    ,
    n.staggerFromTo = function(t, e, n, r, i, o, s, a) {
        return r.startAt = n,
        ot(r).immediateRender = N(r.immediateRender),
        this.staggerTo(t, e, r, i, o, s, a)
    }
    ,
    n.render = function(t, e, n) {
        var r, i, o, s, a, u, l, c, f, d, h = this._time, p = this._dirty ? this.totalDuration() : this._tDur, g = this._dur, m = t <= 0 ? 0 : S(t), v = this._zTime < 0 != t < 0 && (this._initted || !g);
        if ((m = this !== H && p < m && 0 <= t ? p : m) !== this._tTime || n || v) {
            if (h !== this._time && g && (m += this._time - h,
            t += this._time - h),
            r = m,
            c = this._start,
            a = !(l = this._ts),
            v && (g || (h = this._zTime),
            !t && e || (this._zTime = t)),
            this._repeat) {
                if (D = this._yoyo,
                s = g + this._rDelay,
                this._repeat < -1 && t < 0)
                    return this.totalTime(100 * s + t, e, n);
                if (r = S(m % s),
                m === p ? (o = this._repeat,
                r = g) : ((o = ~~(m / s)) && o === m / s && (r = g,
                o--),
                g < r && (r = g)),
                f = Xt(this._tTime, s),
                D && 1 & o && (r = g - r,
                d = 1),
                o !== (f = !h && this._tTime && f !== o && this._tTime - f * s - this._dur <= 0 ? o : f) && !this._lock) {
                    var D = (v = D && 1 & f) === (D && 1 & o)
                      , h = (v = o < f ? !v : v) ? 0 : g;
                    if (this._lock = 1,
                    this.render(h || (d ? 0 : S(o * s)), e, !g)._lock = 0,
                    this._tTime = m,
                    !e && this.parent && _(this, "onRepeat"),
                    this.vars.repeatRefresh && !d && (this.invalidate()._lock = 1),
                    h && h !== this._time || a != !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (g = this._dur,
                    p = this._tDur,
                    D && (this._lock = 2,
                    this.render(h = v ? g : -1e-4, !0),
                    this.vars.repeatRefresh) && !d && this.invalidate(),
                    this._lock = 0,
                    !this._ts && !a)
                        return this;
                    jt(this, d)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (u = function(t, e, n) {
                var r;
                if (e < n)
                    for (r = t._first; r && r._start <= n; ) {
                        if ("isPause" === r.data && r._start > e)
                            return r;
                        r = r._next
                    }
                else
                    for (r = t._last; r && r._start >= n; ) {
                        if ("isPause" === r.data && r._start < e)
                            return r;
                        r = r._prev
                    }
            }(this, S(h), S(r))) && (m -= r - (r = u._start)),
            this._tTime = m,
            this._time = r,
            this._act = !l,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = t,
            h = 0),
            !h && r && !e && !o && (_(this, "onStart"),
            this._tTime !== m))
                return this;
            if (h <= r && 0 <= t)
                for (y = this._first; y; ) {
                    if (i = y._next,
                    (y._act || r >= y._start) && y._ts && u !== y) {
                        if (y.parent !== this)
                            return this.render(t, e, n);
                        if (y.render(0 < y._ts ? (r - y._start) * y._ts : (y._dirty ? y.totalDuration() : y._tDur) + (r - y._start) * y._ts, e, n),
                        r !== this._time || !this._ts && !a) {
                            u = 0,
                            i && (m += this._zTime = -W);
                            break
                        }
                    }
                    y = i
                }
            else
                for (var y = this._last, x = t < 0 ? t : r; y; ) {
                    if (i = y._prev,
                    (y._act || x <= y._end) && y._ts && u !== y) {
                        if (y.parent !== this)
                            return this.render(t, e, n);
                        if (y.render(0 < y._ts ? (x - y._start) * y._ts : (y._dirty ? y.totalDuration() : y._tDur) + (x - y._start) * y._ts, e, n || R && (y._initted || y._startAt)),
                        r !== this._time || !this._ts && !a) {
                            u = 0,
                            i && (m += this._zTime = x ? -W : W);
                            break
                        }
                    }
                    y = i
                }
            if (u && !e && (this.pause(),
            u.render(h <= r ? 0 : -W)._zTime = h <= r ? 1 : -1,
            this._ts))
                return this._start = c,
                ft(this),
                this.render(t, e, n);
            this._onUpdate && !e && _(this, "onUpdate", !0),
            !(m === p && this._tTime >= this.totalDuration() || !m && h) || c !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(m === p && 0 < this._ts || !m && this._ts < 0) || st(this, 1),
            e) || t < 0 && !h || !m && !h && p || (_(this, m === p && 0 <= t ? "onComplete" : "onReverseComplete", !0),
            !this._prom) || m < p && 0 < this.timeScale() || this._prom()
        }
        return this
    }
    ,
    n.add = function(t, e) {
        var n = this;
        if (K(e) || (e = l(this, e, t)),
        !(t instanceof en)) {
            if (A(t))
                return t.forEach(function(t) {
                    return n.add(t, e)
                }),
                this;
            if (j(t))
                return this.addLabel(t, e);
            if (!f(t))
                return this;
            t = Y.delayedCall(0, t)
        }
        return this !== t ? pt(this, t, e) : this
    }
    ,
    n.getChildren = function(t, e, n, r) {
        void 0 === t && (t = !0),
        void 0 === e && (e = !0),
        void 0 === n && (n = !0),
        void 0 === r && (r = -z);
        for (var i = [], o = this._first; o; )
            o._start >= r && (o instanceof Y ? e && i.push(o) : (n && i.push(o),
            t && i.push.apply(i, o.getChildren(!0, e, n)))),
            o = o._next;
        return i
    }
    ,
    n.getById = function(t) {
        for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
            if (e[n].vars.id === t)
                return e[n]
    }
    ,
    n.remove = function(t) {
        return j(t) ? this.removeLabel(t) : f(t) ? this.killTweensOf(t) : (T(this, t),
        t === this._recent && (this._recent = this._last),
        at(this))
    }
    ,
    n.totalTime = function(t, e) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = S(p.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))),
        rn.prototype.totalTime.call(this, t, e),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    n.addLabel = function(t, e) {
        return this.labels[t] = l(this, e),
        this
    }
    ,
    n.removeLabel = function(t) {
        return delete this.labels[t],
        this
    }
    ,
    n.addPause = function(t, e, n) {
        return (n = Y.delayedCall(0, e || D, n)).data = "isPause",
        this._hasPause = 1,
        pt(this, n, l(this, t))
    }
    ,
    n.removePause = function(t) {
        var e = this._first;
        for (t = l(this, t); e; )
            e._start === t && "isPause" === e.data && st(e),
            e = e._next
    }
    ,
    n.killTweensOf = function(t, e, n) {
        for (var r = this.getTweensOf(t, n), i = r.length; i--; )
            ln !== r[i] && r[i].kill(t, e);
        return this
    }
    ,
    n.getTweensOf = function(t, e) {
        for (var n, r = [], i = k(t), o = this._first, s = K(e); o; )
            o instanceof Y ? function(t, e) {
                for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n; )
                    ;
                return r < n
            }(o._targets, i) && (s ? (!ln || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && r.push(o) : (n = o.getTweensOf(i, e)).length && r.push.apply(r, n),
            o = o._next;
        return r
    }
    ,
    n.tweenTo = function(t, e) {
        e = e || {};
        var n, r = this, i = l(r, t), o = e.startAt, s = e.onStart, a = e.onStartParams, t = e.immediateRender, u = Y.to(r, L({
            ease: e.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: i,
            overwrite: "auto",
            duration: e.duration || Math.abs((i - (o && "time"in o ? o.time : r._time)) / r.timeScale()) || W,
            onStart: function() {
                var t;
                r.pause(),
                n || (t = e.duration || Math.abs((i - (o && "time"in o ? o.time : r._time)) / r.timeScale()),
                u._dur !== t && vt(u, t, 0, 1).render(u._time, !0, !0),
                n = 1),
                s && s.apply(u, a || [])
            }
        }, e));
        return t ? u.render(0) : u
    }
    ,
    n.tweenFromTo = function(t, e, n) {
        return this.tweenTo(e, L({
            startAt: {
                time: l(this, t)
            }
        }, n))
    }
    ,
    n.recent = function() {
        return this._recent
    }
    ,
    n.nextLabel = function(t) {
        return void 0 === t && (t = this._time),
        kt(this, l(this, t))
    }
    ,
    n.previousLabel = function(t) {
        return void 0 === t && (t = this._time),
        kt(this, l(this, t), 1)
    }
    ,
    n.currentLabel = function(t) {
        return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + W)
    }
    ,
    n.shiftChildren = function(t, e, n) {
        void 0 === n && (n = 0);
        for (var r, i = this._first, o = this.labels; i; )
            i._start >= n && (i._start += t,
            i._end += t),
            i = i._next;
        if (e)
            for (r in o)
                o[r] >= n && (o[r] += t);
        return at(this)
    }
    ,
    n.invalidate = function(t) {
        var e = this._first;
        for (this._lock = 0; e; )
            e.invalidate(t),
            e = e._next;
        return rn.prototype.invalidate.call(this, t)
    }
    ,
    n.clear = function(t) {
        void 0 === t && (t = !0);
        for (var e, n = this._first; n; )
            e = n._next,
            this.remove(n),
            n = e;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        t && (this.labels = {}),
        at(this)
    }
    ,
    n.totalDuration = function(t) {
        var e, n, r, i = 0, o = this, s = o._last, a = z;
        if (arguments.length)
            return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
        if (o._dirty) {
            for (r = o.parent; s; )
                e = s._prev,
                s._dirty && s.totalDuration(),
                a < (n = s._start) && o._sort && s._ts && !o._lock ? (o._lock = 1,
                pt(o, s, n - s._delay, 1)._lock = 0) : a = n,
                n < 0 && s._ts && (i -= n,
                (!r && !o._dp || r && r.smoothChildTiming) && (o._start += n / o._ts,
                o._time -= n,
                o._tTime -= n),
                o.shiftChildren(-n, !1, -1 / 0),
                a = 0),
                s._end > i && s._ts && (i = s._end),
                s = e;
            vt(o, o === H && o._time > i ? o._time : i, 1, 1),
            o._dirty = 0
        }
        return o._tDur
    }
    ,
    on.updateRoot = function(t) {
        if (H._ts && (x(H, ct(t, H)),
        Jt = p.frame),
        p.frame >= je) {
            je += I.autoSleep || 120;
            var e = H._first;
            if ((!e || !e._ts) && I.autoSleep && p._listeners.length < 2) {
                for (; e && !e._ts; )
                    e = e._next;
                e || p.sleep()
            }
        }
    }
    ;
    var rn, M = on;
    function on(t, e) {
        var n;
        return (n = rn.call(this, t = void 0 === t ? {} : t) || this).labels = {},
        n.smoothChildTiming = !!t.smoothChildTiming,
        n.autoRemoveChildren = !!t.autoRemoveChildren,
        n._sort = N(t.sortChildren),
        H && pt(t.parent || H, O(n), e),
        t.reversed && n.reverse(),
        t.paused && n.paused(!0),
        t.scrollTrigger && gt(O(n), t.scrollTrigger),
        n
    }
    function sn(t, e, n, r, i, o) {
        var s, a, u, l;
        if (X[t] && !1 !== (s = new X[t]).init(i, s.rawVars ? e[t] : function(t, e, n, r, i) {
            if (!F(t = f(t) ? un(t, i, e, n, r) : t) || t.style && t.nodeType || A(t) || we(t))
                return j(t) ? un(t, i, e, n, r) : t;
            var o, s = {};
            for (o in t)
                s[o] = un(t[o], i, e, n, r);
            return s
        }(e[t], r, i, o, n), n, r, o) && (n._pt = a = new U(n._pt,i,t,0,1,s.render,s,0,s.priority),
        n !== In))
            for (u = n._ptLookup[n._targets.indexOf(i)],
            l = s._props.length; l--; )
                u[s._props[l]] = a;
        return s
    }
    function an(t, e, n) {
        var r, i, o, s, a, u, l, c, f, d, h, p, g, m = t.vars, v = m.ease, D = m.startAt, y = m.immediateRender, x = m.lazy, _ = m.onUpdate, b = m.onUpdateParams, w = m.callbackScope, C = m.runBackwards, E = m.yoyoEase, T = m.keyframes, F = m.autoRevert, S = t._dur, A = t._startAt, k = t._targets, P = t.parent, M = P && "nested" === P.data ? P.vars.targets : k, O = "auto" === t._overwrite && !$t, B = t.timeline;
        if (t._ease = Qe(v = !B || T && v ? v : "none", me.ease),
        t._yEase = E ? Ke(Qe(!0 === E ? v : E, me.ease)) : 0,
        E && t._yoyo && !t._repeat && (E = t._yEase,
        t._yEase = t._ease,
        t._ease = E),
        t._from = !B && !!m.runBackwards,
        !B || T && !m.stagger) {
            if (p = (c = k[0] ? et(k[0]).harness : 0) && m[c.prop],
            r = it(m, Be),
            A && (A._zTime < 0 && A.progress(1),
            e < 0 && C && y && !F ? A.render(-1, !0) : A.revert(C && S ? Me : Pe),
            A._lazy = 0),
            D) {
                if (st(t._startAt = Y.set(k, L({
                    data: "isStart",
                    overwrite: !1,
                    parent: P,
                    immediateRender: !0,
                    lazy: !A && N(x),
                    startAt: null,
                    delay: 0,
                    onUpdate: _,
                    onUpdateParams: b,
                    callbackScope: w,
                    stagger: 0
                }, D))),
                t._startAt._dp = 0,
                t._startAt._sat = t,
                e < 0 && (R || !y && !F) && t._startAt.revert(Me),
                y && S && e <= 0 && n <= 0)
                    return e && (t._zTime = e)
            } else if (C && S && !A)
                if (o = L({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: (y = e ? !1 : y) && !A && N(x),
                    immediateRender: y,
                    stagger: 0,
                    parent: P
                }, r),
                p && (o[c.prop] = p),
                st(t._startAt = Y.set(k, o)),
                t._startAt._dp = 0,
                t._startAt._sat = t,
                e < 0 && (R ? t._startAt.revert(Me) : t._startAt.render(-1, !0)),
                t._zTime = e,
                y) {
                    if (!e)
                        return
                } else
                    an(t._startAt, W, W);
            for (t._pt = t._ptCache = 0,
            x = S && N(x) || x && !S,
            i = 0; i < k.length; i++) {
                if (l = (a = k[i])._gsap || tt(k)[i]._gsap,
                t._ptLookup[i] = d = {},
                Le[l.id] && Ne.length && rt(),
                h = M === k ? i : M.indexOf(a),
                c && !1 !== (f = new c).init(a, p || r, t, h, M) && (t._pt = s = new U(t._pt,a,f.name,0,1,f.render,f,0,f.priority),
                f._props.forEach(function(t) {
                    d[t] = s
                }),
                f.priority) && (u = 1),
                !c || p)
                    for (o in r)
                        X[o] && (f = sn(o, r, t, h, a, M)) ? f.priority && (u = 1) : d[o] = s = dn.call(t, a, o, "get", r[o], h, M, 0, m.stringFilter);
                t._op && t._op[i] && t.kill(a, t._op[i]),
                O && t._pt && (ln = t,
                H.killTweensOf(a, d, t.globalTime(e)),
                g = !t.parent,
                ln = 0),
                t._pt && x && (Le[l.id] = 1)
            }
            u && Fn(t),
            t._onInit && t._onInit(t)
        }
        t._onUpdate = _,
        t._initted = (!t._op || t._pt) && !g,
        T && e <= 0 && B.render(z, !0, !0)
    }
    L(M.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    function un(t, e, n, r, i) {
        return f(t) ? t.call(e, n, r, i) : j(t) && ~t.indexOf("random(") ? At(t) : t
    }
    var ln, cn, fn, dn = function(t, e, n, r, i, o, s, a, u, l) {
        f(r) && (r = r(i || 0, t, o));
        var c, i = t[e], o = "get" !== n ? n : f(i) ? u ? t[e.indexOf("set") || !f(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : i, n = f(i) ? u ? yn : Dn : vn;
        if (!j(r) || "=" !== (r = ~r.indexOf("random(") ? At(r) : r).charAt(1) || !(c = nt(o, r) + (q(o) || 0)) && 0 !== c || (r = c),
        !l || o !== r || cn)
            return isNaN(o * r) || "" === r ? (i || e in t || Z(e, r),
            function(t, e, n, r, i, o, s) {
                var a, u, l, c, f, d = new U(this._pt,t,e,0,1,wn,null,i), h = 0, p = 0;
                for (d.b = n,
                d.e = r,
                n += "",
                (i = ~(r += "").indexOf("random(")) && (r = At(r)),
                o && (o(o = [n, r], t, e),
                n = o[0],
                r = o[1]),
                a = n.match(Fe) || []; f = Fe.exec(r); )
                    l = f[0],
                    c = r.substring(h, f.index),
                    u ? u = (u + 1) % 5 : "rgba(" === c.substr(-5) && (u = 1),
                    l !== a[p++] && (f = parseFloat(a[p - 1]) || 0,
                    d._pt = {
                        _next: d._pt,
                        p: c || 1 === p ? c : ",",
                        s: f,
                        c: "=" === l.charAt(1) ? nt(f, l) - f : parseFloat(l) - f,
                        m: u && u < 4 ? Math.round : 0
                    },
                    h = Fe.lastIndex);
                return d.c = h < r.length ? r.substring(h, r.length) : "",
                d.fp = s,
                (Se.test(r) || i) && (d.e = 0),
                this._pt = d
            }
            .call(this, t, e, o, r, n, a || I.stringFilter, u)) : (c = new U(this._pt,t,e,+o || 0,r - (o || 0),"boolean" == typeof i ? bn : _n,0,n),
            u && (c.fp = u),
            s && c.modifier(s, this, t),
            this._pt = c)
    }, hn = He + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", pn = {}, Y = (h(hn + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return pn[t] = 1
    }),
    r(i, fn = en),
    (n = i.prototype).render = function(t, e, n) {
        var r, i, o, s = this._time, a = this._tDur, u = this._dur, l = t < 0, c = a - W < t && !l ? a : t < W ? 0 : t;
        if (u) {
            if (c !== this._tTime || !t || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 != l) {
                if (p = c,
                h = this.timeline,
                this._repeat) {
                    if (f = u + this._rDelay,
                    this._repeat < -1 && l)
                        return this.totalTime(100 * f + t, e, n);
                    if (p = S(c % f),
                    c === a ? (m = this._repeat,
                    p = u) : ((m = ~~(c / f)) && m === c / f && (p = u,
                    m--),
                    u < p && (p = u)),
                    (i = this._yoyo && 1 & m) && (d = this._yEase,
                    p = u - p),
                    D = Xt(this._tTime, f),
                    p === s && !n && this._initted)
                        return this._tTime = c,
                        this;
                    m !== D && (h && this._yEase && jt(h, i),
                    !this.vars.repeatRefresh || i || this._lock || (this._lock = n = 1,
                    this.render(S(f * m), !0).invalidate()._lock = 0))
                }
                if (!this._initted) {
                    if (mt(this, l ? t : p, n, e, c))
                        return this._tTime = 0,
                        this;
                    if (s !== this._time)
                        return this;
                    if (u !== this._dur)
                        return this.render(t, e, n)
                }
                if (this._tTime = c,
                this._time = p,
                !this._act && this._ts && (this._act = 1,
                this._lazy = 0),
                this.ratio = o = (d || this._ease)(p / u),
                this._from && (this.ratio = o = 1 - o),
                p && !s && !e && !m && (_(this, "onStart"),
                this._tTime !== c))
                    return this;
                for (r = this._pt; r; )
                    r.r(o, r.d),
                    r = r._next;
                h && h.render(t < 0 ? t : !p && i ? -W : h._dur * h._ease(p / this._dur), e, n) || this._startAt && (this._zTime = t),
                this._onUpdate && !e && (l && ut(this, t, 0, n),
                _(this, "onUpdate")),
                this._repeat && m !== D && this.vars.onRepeat && !e && this.parent && _(this, "onRepeat"),
                c !== this._tDur && c || this._tTime !== c || (l && !this._onUpdate && ut(this, t, 0, !0),
                !t && u || !(c === this._tDur && 0 < this._ts || !c && this._ts < 0) || st(this, 1),
                e) || l && !s || !(c || s || i) || (_(this, c === a ? "onComplete" : "onReverseComplete", !0),
                !this._prom) || c < a && 0 < this.timeScale() || this._prom()
            }
        } else {
            var f = this;
            var d = t;
            var h = e;
            var p = n;
            var g, m = f.ratio, v = d < 0 || !d && (!f._start && function t(e) {
                return (e = e.parent) && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || t(e))
            }(f) && (f._initted || !Ut(f)) || (f._ts < 0 || f._dp._ts < 0) && !Ut(f)) ? 0 : 1, D = f._rDelay, u = 0;
            if (D && f._repeat && (l = Xt(u = Vt(0, f._tDur, d), D),
            f._yoyo && 1 & l && (v = 1 - v),
            l !== Xt(f._tTime, D)) && (m = 1 - v,
            f.vars.repeatRefresh) && f._initted && f.invalidate(),
            v !== m || R || p || f._zTime === W || !d && f._zTime) {
                if (f._initted || !mt(f, d, p, h, u)) {
                    for (p = f._zTime,
                    f._zTime = d || (h ? W : 0),
                    h = h || d && !p,
                    f.ratio = v,
                    f._from && (v = 1 - v),
                    f._time = 0,
                    f._tTime = u,
                    g = f._pt; g; )
                        g.r(v, g.d),
                        g = g._next;
                    d < 0 && ut(f, d, 0, !0),
                    f._onUpdate && !h && _(f, "onUpdate"),
                    u && f._repeat && !h && f.parent && _(f, "onRepeat"),
                    (d >= f._tDur || d < 0) && f.ratio === v && (v && st(f, 1),
                    h || R || (_(f, v ? "onComplete" : "onReverseComplete", !0),
                    f._prom && f._prom()))
                }
            } else
                f._zTime || (f._zTime = d)
        }
        return this
    }
    ,
    n.targets = function() {
        return this._targets
    }
    ,
    n.invalidate = function(t) {
        return t && this.vars.runBackwards || (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(t),
        fn.prototype.invalidate.call(this, t)
    }
    ,
    n.resetTo = function(t, e, n, r) {
        te || p.wake(),
        this._ts || this.play();
        var i, o = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return this._initted || an(this, o),
        i = this._ease(o / this._dur),
        function(t, e, n, r, i, o, s) {
            var a, u, l, c, f = (t._pt && t._ptCache || (t._ptCache = {}))[e];
            if (!f)
                for (f = t._ptCache[e] = [],
                l = t._ptLookup,
                c = t._targets.length; c--; ) {
                    if ((a = l[c][e]) && a.d && a.d._pt)
                        for (a = a.d._pt; a && a.p !== e && a.fp !== e; )
                            a = a._next;
                    if (!a)
                        return cn = 1,
                        t.vars[e] = "+=0",
                        an(t, s),
                        cn = 0,
                        1;
                    f.push(a)
                }
            for (c = f.length; c--; )
                (a = (u = f[c])._pt || u).s = !r && 0 !== r || i ? a.s + (r || 0) + o * a.c : r,
                a.c = n - a.s,
                u.e && (u.e = B(n) + q(u.e)),
                u.b && (u.b = a.s + q(u.b))
        }(this, t, e, n, r, i, o) ? this.resetTo(t, e, n, r) : (dt(this, 0),
        this.parent || E(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    n.kill = function(t, e) {
        if (void 0 === e && (e = "all"),
        !(t || e && "all" !== e))
            return this._lazy = this._pt = 0,
            this.parent ? Pt(this) : this;
        var n;
        if (this.timeline)
            n = this.timeline.totalDuration(),
            this.timeline.killTweensOf(t, e, ln && !0 !== ln.vars.overwrite)._first || Pt(this),
            this.parent && n !== this.timeline.totalDuration() && vt(this, this._dur * this.timeline._tDur / n, 0, 1);
        else {
            var r, i, o, s, a, u, l, c = this._targets, f = t ? k(t) : c, d = this._ptLookup, t = this._pt;
            if ((!e || "all" === e) && function(t, e) {
                for (var n = t.length, r = n === e.length; r && n-- && t[n] === e[n]; )
                    ;
                return n < 0
            }(c, f))
                return "all" === e && (this._pt = 0),
                Pt(this);
            for (r = this._op = this._op || [],
            "all" !== e && (j(e) && (a = {},
            h(e, function(t) {
                return a[t] = 1
            }),
            e = a),
            e = function(t, e) {
                var n, r, i, o, s = (t = c[0] ? et(c[0]).harness : 0) && t.aliases;
                if (!s)
                    return e;
                for (r in n = Wt({}, e),
                s)
                    if (r in n)
                        for (i = (o = s[r].split(",")).length; i--; )
                            n[o[i]] = n[r];
                return n
            }(0, e)),
            l = c.length; l--; )
                if (~f.indexOf(c[l]))
                    for (a in i = d[l],
                    "all" === e ? (r[l] = e,
                    s = i,
                    o = {}) : (o = r[l] = r[l] || {},
                    s = e),
                    s)
                        (u = i && i[a]) && ("kill"in u.d && !0 !== u.d.kill(a) || T(this, u, "_pt"),
                        delete i[a]),
                        "all" !== o && (o[a] = 1);
            this._initted && !this._pt && t && Pt(this)
        }
        return this
    }
    ,
    i.to = function(t, e, n) {
        return new i(t,e,n)
    }
    ,
    i.from = function(t, e) {
        return yt(1, arguments)
    }
    ,
    i.delayedCall = function(t, e, n, r) {
        return new i(e,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: e,
            onReverseComplete: e,
            onCompleteParams: n,
            onReverseCompleteParams: n,
            callbackScope: r
        })
    }
    ,
    i.fromTo = function(t, e, n) {
        return yt(2, arguments)
    }
    ,
    i.set = function(t, e) {
        return e.duration = 0,
        e.repeatDelay || (e.repeat = 0),
        new i(t,e)
    }
    ,
    i.killTweensOf = function(t, e, n) {
        return H.killTweensOf(t, e, n)
    }
    ,
    i);
    function i(t, e, n, r) {
        var i;
        "number" == typeof e && (n.duration = e,
        e = n,
        n = null);
        var o, s, a, u, l, c, f, d, h = (_ = (i = fn.call(this, r ? e : ot(e)) || this).vars).duration, p = _.delay, g = _.immediateRender, m = _.stagger, v = _.overwrite, D = _.keyframes, y = _.defaults, r = _.scrollTrigger, x = _.yoyoEase, _ = e.parent || H, b = (A(t) || we(t) ? K(t[0]) : "length"in e) ? [t] : k(t);
        if (i._targets = b.length ? tt(b) : J("GSAP target " + t + " not found. https://greensock.com", !I.nullTargetWarn) || [],
        i._ptLookup = [],
        i._overwrite = v,
        D || m || Q(h) || Q(p)) {
            if (e = i.vars,
            (o = i.timeline = new M({
                data: "nested",
                defaults: y || {},
                targets: _ && "nested" === _.data ? _.vars.targets : b
            })).kill(),
            o.parent = o._dp = O(i),
            o._start = 0,
            m || Q(h) || Q(p)) {
                if (u = b.length,
                f = m && Ct(m),
                F(m))
                    for (l in m)
                        ~hn.indexOf(l) && ((d = d || {})[l] = m[l]);
                for (s = 0; s < u; s++)
                    (a = it(e, pn)).stagger = 0,
                    x && (a.yoyoEase = x),
                    d && Wt(a, d),
                    c = b[s],
                    a.duration = +un(h, O(i), s, c, b),
                    a.delay = (+un(p, O(i), s, c, b) || 0) - i._delay,
                    !m && 1 === u && a.delay && (i._delay = p = a.delay,
                    i._start += p,
                    a.delay = 0),
                    o.to(c, a, f ? f(s, c, b) : 0),
                    o._ease = P.none;
                o.duration() ? h = p = 0 : i.timeline = 0
            } else if (D) {
                ot(L(o.vars.defaults, {
                    ease: "none"
                })),
                o._ease = Qe(D.ease || e.ease || "none");
                var w, C, E, T = 0;
                if (A(D))
                    D.forEach(function(t) {
                        return o.to(b, t, ">")
                    }),
                    o.duration();
                else {
                    for (l in a = {},
                    D)
                        "ease" !== l && "easeEach" !== l && function(t, n, e, r) {
                            var i, o, s = n.ease || r || "power1.inOut";
                            if (A(n))
                                o = e[t] || (e[t] = []),
                                n.forEach(function(t, e) {
                                    return o.push({
                                        t: e / (n.length - 1) * 100,
                                        v: t,
                                        e: s
                                    })
                                });
                            else
                                for (i in n)
                                    o = e[i] || (e[i] = []),
                                    "ease" !== i && o.push({
                                        t: parseFloat(t),
                                        v: n[i],
                                        e: s
                                    })
                        }(l, D[l], a, D.easeEach);
                    for (l in a)
                        for (w = a[l].sort(function(t, e) {
                            return t.t - e.t
                        }),
                        s = T = 0; s < w.length; s++)
                            (E = {
                                ease: (C = w[s]).e,
                                duration: (C.t - (s ? w[s - 1].t : 0)) / 100 * h
                            })[l] = C.v,
                            o.to(b, E, T),
                            T += E.duration;
                    o.duration() < h && o.to({}, {
                        duration: h - o.duration()
                    })
                }
            }
            h || i.duration(h = o.duration())
        } else
            i.timeline = 0;
        return !0 !== v || $t || (ln = O(i),
        H.killTweensOf(b),
        ln = 0),
        pt(_, O(i), n),
        e.reversed && i.reverse(),
        e.paused && i.paused(!0),
        (g || !h && !D && i._start === S(_._time) && N(g) && function t(e) {
            return !e || e._ts && t(e.parent)
        }(O(i)) && "nested" !== _.data) && (i._tTime = -W,
        i.render(Math.max(0, -p) || 0)),
        r && gt(O(i), r),
        i
    }
    function gn(t, e, n) {
        return t.setAttribute(e, n)
    }
    function mn(t, e, n, r) {
        r.mSet(t, e, r.m.call(r.tween, n, r.mt), r)
    }
    L(Y.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    h("staggerTo,staggerFrom,staggerFromTo", function(n) {
        Y[n] = function() {
            var t = new M
              , e = ze.call(arguments, 0);
            return e.splice("staggerFromTo" === n ? 5 : 4, 0, 0),
            t[n].apply(t, e)
        }
    });
    var vn = function(t, e, n) {
        return t[e] = n
    }
      , Dn = function(t, e, n) {
        return t[e](n)
    }
      , yn = function(t, e, n, r) {
        return t[e](r.fp, n)
    }
      , xn = function(t, e) {
        return f(t[e]) ? Dn : o(t[e]) && t.setAttribute ? gn : vn
    }
      , _n = function(t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
    }
      , bn = function(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }
      , wn = function(t, e) {
        var n = e._pt
          , r = "";
        if (!t && e.b)
            r = e.b;
        else if (1 === t && e.e)
            r = e.e;
        else {
            for (; n; )
                r = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + r,
                n = n._next;
            r += e.c
        }
        e.set(e.t, e.p, r, e)
    }
      , Cn = function(t, e) {
        for (var n = e._pt; n; )
            n.r(t, n.d),
            n = n._next
    }
      , En = function(t, e, n, r) {
        for (var i, o = this._pt; o; )
            i = o._next,
            o.p === r && o.modifier(t, e, n),
            o = i
    }
      , Tn = function(t) {
        for (var e, n, r = this._pt; r; )
            n = r._next,
            r.p === t && !r.op || r.op === t ? T(this, r, "_pt") : r.dep || (e = 1),
            r = n;
        return !e
    }
      , Fn = function(t) {
        for (var e, n, r, i, o = t._pt; o; ) {
            for (e = o._next,
            n = r; n && n.pr > o.pr; )
                n = n._next;
            (o._prev = n ? n._prev : i) ? o._prev._next = o : r = o,
            (o._next = n) ? n._prev = o : i = o,
            o = e
        }
        t._pt = r
    }
      , U = (Sn.prototype.modifier = function(t, e, n) {
        this.mSet = this.mSet || this.set,
        this.set = mn,
        this.m = t,
        this.mt = n,
        this.tween = e
    }
    ,
    Sn);
    function Sn(t, e, n, r, i, o, s, a, u) {
        this.t = e,
        this.s = r,
        this.c = i,
        this.p = n,
        this.r = o || _n,
        this.d = s || this,
        this.set = a || vn,
        this.pr = u || 0,
        (this._next = t) && (t._prev = this)
    }
    function An(t) {
        (Mn[t] || On).map(function(t) {
            return t()
        })
    }
    function kn() {
        var t = Date.now()
          , a = [];
        2 < t - Bn && (An("matchMediaInit"),
        Pn.forEach(function(t) {
            var e, n, r, i, o = t.queries, s = t.conditions;
            for (n in o)
                (e = u.matchMedia(o[n]).matches) && (r = 1),
                e !== s[n] && (s[n] = e,
                i = 1);
            i && (t.revert(),
            r) && a.push(t)
        }),
        An("matchMediaRevert"),
        a.forEach(function(t) {
            return t.onMatch(t)
        }),
        Bn = t,
        An("matchMedia"))
    }
    h(He + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return Be[t] = 1
    }),
    s.TweenMax = s.TweenLite = Y,
    s.TimelineLite = s.TimelineMax = M,
    H = new M({
        sortChildren: !1,
        defaults: me,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    I.stringFilter = Rt;
    var Pn = []
      , Mn = {}
      , On = []
      , Bn = 0
      , Nn = ((n = Ln.prototype).add = function(t, r, i) {
        function e() {
            var t, e = a, n = o.selector;
            return e && e !== o && e.data.push(o),
            i && (o.selector = bt(i)),
            a = o,
            f(t = r.apply(o, arguments)) && o._r.push(t),
            a = e,
            o.selector = n,
            o.isReverted = !1,
            t
        }
        f(t) && (i = r,
        r = t,
        t = f);
        var o = this;
        return o.last = e,
        t === f ? e(o) : t ? o[t] = e : e
    }
    ,
    n.ignore = function(t) {
        var e = a;
        a = null,
        t(this),
        a = e
    }
    ,
    n.getTweens = function() {
        var e = [];
        return this.data.forEach(function(t) {
            return t instanceof Ln ? e.push.apply(e, t.getTweens()) : t instanceof Y && !(t.parent && "nested" === t.parent.data) && e.push(t)
        }),
        e
    }
    ,
    n.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    n.kill = function(e, t) {
        var n, r = this;
        e ? (n = this.getTweens(),
        this.data.forEach(function(t) {
            "isFlip" === t.data && (t.revert(),
            t.getChildren(!0, !0, !1).forEach(function(t) {
                return n.splice(n.indexOf(t), 1)
            }))
        }),
        n.map(function(t) {
            return {
                g: t.globalTime(0),
                t: t
            }
        }).sort(function(t, e) {
            return e.g - t.g || -1
        }).forEach(function(t) {
            return t.t.revert(e)
        }),
        this.data.forEach(function(t) {
            return !(t instanceof en) && t.revert && t.revert(e)
        }),
        this._r.forEach(function(t) {
            return t(e, r)
        }),
        this.isReverted = !0) : this.data.forEach(function(t) {
            return t.kill && t.kill()
        }),
        this.clear(),
        t && ~(t = Pn.indexOf(this)) && Pn.splice(t, 1)
    }
    ,
    n.revert = function(t) {
        this.kill(t || {})
    }
    ,
    Ln);
    function Ln(t, e) {
        this.selector = e && bt(e),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        t && this.add(t)
    }
    (Di = jn.prototype).add = function(t, e, n) {
        F(t) || (t = {
            matches: t
        });
        var r, i, o, s = new Nn(0,n || this.scope), a = s.conditions = {};
        for (i in this.contexts.push(s),
        e = s.add("onMatch", e),
        s.queries = t)
            "all" === i ? o = 1 : (r = u.matchMedia(t[i])) && (Pn.indexOf(s) < 0 && Pn.push(s),
            (a[i] = r.matches) && (o = 1),
            r.addListener ? r.addListener(kn) : r.addEventListener("change", kn));
        return o && e(s),
        this
    }
    ,
    Di.revert = function(t) {
        this.kill(t || {})
    }
    ,
    Di.kill = function(e) {
        this.contexts.forEach(function(t) {
            return t.kill(e, !0)
        })
    }
    ;
    var Rn = jn;
    function jn(t) {
        this.contexts = [],
        this.scope = t
    }
    var qn = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            e.forEach(Mt)
        },
        timeline: function(t) {
            return new M(t)
        },
        getTweensOf: function(t, e) {
            return H.getTweensOf(t, e)
        },
        getProperty: function(r, t, e, n) {
            var i = et((r = j(r) ? k(r)[0] : r) || {}).get
              , o = e ? w : b;
            return "native" === e && (e = ""),
            r && (t ? o((X[t] && X[t].get || i)(r, t, e, n)) : function(t, e, n) {
                return o((X[t] && X[t].get || i)(r, t, e, n))
            }
            )
        },
        quickSetter: function(n, e, r) {
            var i, o;
            if (1 < (n = k(n)).length)
                return i = n.map(function(t) {
                    return c.quickSetter(t, e, r)
                }),
                o = i.length,
                function(t) {
                    for (var e = o; e--; )
                        i[e](t)
                }
                ;
            n = n[0] || {};
            var s = X[e]
              , a = et(n)
              , u = a.harness && (a.harness.aliases || {})[e] || e
              , l = s ? function(t) {
                var e = new s;
                In._pt = 0,
                e.init(n, r ? t + r : t, In, 0, [n]),
                e.render(1, e),
                In._pt && Cn(1, In)
            }
            : a.set(n, u);
            return s ? l : function(t) {
                return l(n, u, r ? t + r : t, a, 1)
            }
        },
        quickTo: function(t, r, e) {
            function n(t, e, n) {
                return i.resetTo(r, t, e, n)
            }
            var i = c.to(t, Wt(((t = {})[r] = "+=0.1",
            t.paused = !0,
            t), e || {}));
            return n.tween = i,
            n
        },
        isTweening: function(t) {
            return 0 < H.getTweensOf(t, !0).length
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = Qe(t.ease, me.ease)),
            C(me, t || {})
        },
        config: function(t) {
            return C(I, t || {})
        },
        registerEffect: function(t) {
            var r = t.name
              , i = t.effect
              , e = t.plugins
              , o = t.defaults
              , t = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !X[t] && !s[t] && J(r + " effect requires " + t + " plugin.")
            }),
            Re[r] = function(t, e, n) {
                return i(k(t), L(e || {}, o), n)
            }
            ,
            t && (M.prototype[r] = function(t, e, n) {
                return this.add(Re[r](t, F(e) ? e : (n = e) && {}, this), n)
            }
            )
        },
        registerEase: function(t, e) {
            P[t] = Qe(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? Qe(t, e) : P
        },
        getById: function(t) {
            return H.getById(t)
        },
        exportRoot: function(t, e) {
            var n, r, i = new M(t = void 0 === t ? {} : t);
            for (i.smoothChildTiming = N(t.smoothChildTiming),
            H.remove(i),
            i._dp = 0,
            i._time = i._tTime = H._time,
            n = H._first; n; )
                r = n._next,
                !e && !n._dur && n instanceof Y && n.vars.onComplete === n._targets[0] || pt(i, n, n._start - n._delay),
                n = r;
            return pt(H, i, 0),
            i
        },
        context: function(t, e) {
            return t ? new Nn(t,e) : a
        },
        matchMedia: function(t) {
            return new Rn(t)
        },
        matchMediaRefresh: function() {
            return Pn.forEach(function(t) {
                var e, n, r = t.conditions;
                for (n in r)
                    r[n] && (r[n] = !1,
                    e = 1);
                e && t.revert()
            }) || kn()
        },
        addEventListener: function(t, e) {
            ~(t = Mn[t] || (Mn[t] = [])).indexOf(e) || t.push(e)
        },
        removeEventListener: function(t, e) {
            0 <= (e = (t = Mn[t]) && t.indexOf(e)) && t.splice(e, 1)
        },
        utils: {
            wrap: function t(e, n, r) {
                var i = n - e;
                return A(e) ? St(e, t(0, e.length), n) : xt(r, function(t) {
                    return (i + (t - e) % i) % i + e
                })
            },
            wrapYoyo: function t(e, n, r) {
                var i = n - e
                  , o = 2 * i;
                return A(e) ? St(e, t(0, e.length - 1), n) : xt(r, function(t) {
                    return e + (i < (t = (o + (t - e) % o) % o || 0) ? o - t : t)
                })
            },
            distribute: Ct,
            random: Ft,
            snap: Tt,
            normalize: function(t, e, n) {
                return Yt(t, e, 0, 1, n)
            },
            getUnit: q,
            clamp: function(e, n, t) {
                return xt(t, function(t) {
                    return Vt(e, n, t)
                })
            },
            splitColor: Bt,
            toArray: k,
            selector: bt,
            mapRange: Yt,
            pipe: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function(e, n) {
                return function(t) {
                    return e(parseFloat(t)) + (n || q(t))
                }
            },
            interpolate: function t(e, n, r, i) {
                var o = isNaN(e + n) ? 0 : function(t) {
                    return (1 - t) * e + t * n
                }
                ;
                if (!o) {
                    var s, a, u, l, c, f = j(e), d = {};
                    if (!0 === r && (i = 1,
                    r = null),
                    f)
                        e = {
                            p: e
                        },
                        n = {
                            p: n
                        };
                    else if (A(e) && !A(n)) {
                        for (u = [],
                        l = e.length,
                        c = l - 2,
                        a = 1; a < l; a++)
                            u.push(t(e[a - 1], e[a]));
                        l--,
                        o = function(t) {
                            t *= l;
                            var e = Math.min(c, ~~t);
                            return u[e](t - e)
                        }
                        ,
                        r = n
                    } else
                        i || (e = Wt(A(e) ? [] : {}, e));
                    if (!u) {
                        for (s in n)
                            dn.call(d, e, s, "get", n[s]);
                        o = function(t) {
                            return Cn(t, d) || (f ? e.p : e)
                        }
                    }
                }
                return xt(r, o)
            },
            shuffle: wt
        },
        install: m,
        effects: Re,
        ticker: p,
        updateRoot: M.updateRoot,
        plugins: X,
        globalTimeline: H,
        core: {
            PropTween: U,
            globals: v,
            Tween: Y,
            Timeline: M,
            Animation: en,
            getCache: et,
            _removeLinkedListItem: T,
            reverting: function() {
                return R
            },
            context: function(t) {
                return t && a && (a.data.push(t),
                t._ctx = a),
                a
            },
            suppressOverwrites: function(t) {
                return $t = t
            }
        }
    };
    function Hn(t, c) {
        return {
            name: t,
            rawVars: 1,
            init: function(t, l, e) {
                e._onInit = function(t) {
                    var e, n;
                    if (j(l) && (e = {},
                    h(l, function(t) {
                        return e[t] = 1
                    }),
                    l = e),
                    c) {
                        for (n in e = {},
                        l)
                            e[n] = c(l[n]);
                        l = e
                    }
                    var r, i, o, s = t, a = l, u = s._targets;
                    for (r in a)
                        for (i = u.length; i--; )
                            (o = (o = s._ptLookup[i][r]) && o.d) && (o._pt && (o = function(t) {
                                for (var e = o._pt; e && e.p !== t && e.op !== t && e.fp !== t; )
                                    e = e._next;
                                return e
                            }(r)),
                            o) && o.modifier && o.modifier(a[r], s, u[i], r)
                }
            }
        }
    }
    h("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return qn[t] = Y[t]
    }),
    p.add(M.updateRoot);
    var In = qn.to({}, {
        duration: 0
    })
      , c = qn.registerPlugin({
        name: "attr",
        init: function(t, e, n, r, i) {
            var o, s, a;
            for (o in this.tween = n,
            e)
                a = t.getAttribute(o) || "",
                (s = this.add(t, "setAttribute", (a || 0) + "", e[o], r, i, 0, 0, o)).op = o,
                s.b = a,
                this._props.push(o)
        },
        render: function(t, e) {
            for (var n = e._pt; n; )
                R ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d),
                n = n._next
        }
    }, {
        name: "endArray",
        init: function(t, e) {
            for (var n = e.length; n--; )
                this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1)
        }
    }, Hn("roundProps", Et), Hn("modifiers"), Hn("snap", Tt)) || qn;
    function zn(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }
    function Wn(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }
    function Xn(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }
    function Yn(t, e) {
        t = e.s + e.c * t,
        e.set(e.t, e.p, ~~(t + (t < 0 ? -.5 : .5)) + e.u, e)
    }
    function Un(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }
    function Vn(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }
    function $n(t, e, n) {
        return t.style[e] = n
    }
    function Gn(t, e, n) {
        return t.style.setProperty(e, n)
    }
    function Kn(t, e, n) {
        return t._gsap[e] = n
    }
    function Qn(t, e, n) {
        return t._gsap.scaleX = t._gsap.scaleY = n
    }
    function Zn(t, e, n, r, i) {
        (t = t._gsap).scaleX = t.scaleY = n,
        t.renderTransform(i, t)
    }
    function Jn(t, e, n, r, i) {
        (t = t._gsap)[e] = n,
        t.renderTransform(i, t)
    }
    function tr(t, e) {
        var n = this
          , r = this.target
          , i = r.style;
        if (t in Ur) {
            if (this.tfm = this.tfm || {},
            "transform" === t)
                return Jr.transform.split(",").forEach(function(t) {
                    return tr.call(n, t, e)
                });
            if (~(t = Jr[t] || t).indexOf(",") ? t.split(",").forEach(function(t) {
                return n.tfm[t] = ii(r, t)
            }) : this.tfm[t] = r._gsap.x ? r._gsap[t] : ii(r, t),
            0 <= this.props.indexOf($))
                return;
            r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"),
            this.props.push(G, e, "")),
            t = $
        }
        (i || e) && this.props.push(t, e, i[t])
    }
    function er(t) {
        t.translate && (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"))
    }
    function nr() {
        for (var t, e = this.props, n = this.target, r = n.style, i = n._gsap, o = 0; o < e.length; o += 3)
            e[o + 1] ? n[e[o]] = e[o + 2] : e[o + 2] ? r[e[o]] = e[o + 2] : r.removeProperty("--" === e[o].substr(0, 2) ? e[o] : e[o].replace(Kr, "-$1").toLowerCase());
        if (this.tfm) {
            for (t in this.tfm)
                i[t] = this.tfm[t];
            i.svg && (i.renderTransform(),
            n.setAttribute("data-svg-origin", this.svgo || "")),
            (o = Tr()) && o.isStart || r[$] || (er(r),
            i.uncache = 1)
        }
    }
    function rr(t, e) {
        var n = {
            target: t,
            props: [],
            revert: nr,
            save: tr
        };
        return t._gsap || c.core.getCache(t),
        e && e.split(",").forEach(function(t) {
            return n.save(t)
        }),
        n
    }
    function ir(t, e) {
        return (e = _r.createElementNS ? _r.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : _r.createElement(t)).style ? e : _r.createElement(t)
    }
    function V(t, e, n) {
        var r = getComputedStyle(t);
        return r[e] || r.getPropertyValue(e.replace(Kr, "-$1").toLowerCase()) || r.getPropertyValue(e) || !n && V(t, ei(e) || e, 1) || ""
    }
    function or() {
        "undefined" != typeof window && window.document && (br = (_r = window.document).documentElement,
        Cr = ir("div") || {
            style: {}
        },
        ir("div"),
        $ = ei($),
        G = $ + "Origin",
        Cr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        Fr = !!ei("perspective"),
        Tr = c.core.reverting,
        wr = 1)
    }
    function sr(t) {
        var e, n = ir("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, o = this.style.cssText;
        if (br.appendChild(n),
        n.appendChild(this),
        this.style.display = "block",
        t)
            try {
                e = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = sr
            } catch (t) {}
        else
            this._gsapBBox && (e = this._gsapBBox());
        return r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
        br.removeChild(n),
        this.style.cssText = o,
        e
    }
    function ar(t, e) {
        for (var n = e.length; n--; )
            if (t.hasAttribute(e[n]))
                return t.getAttribute(e[n])
    }
    function ur(e) {
        var n;
        try {
            n = e.getBBox()
        } catch (t) {
            n = sr.call(e, !0)
        }
        return !(n = n && (n.width || n.height) || e.getBBox === sr ? n : sr.call(e, !0)) || n.width || n.x || n.y ? n : {
            x: +ar(e, ["x", "cx", "x1"]) || 0,
            y: +ar(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }
    function lr(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !ur(t))
    }
    function cr(t, e) {
        e && (t = t.style,
        e in Ur && e !== G && (e = $),
        t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
        t.removeProperty(e.replace(Kr, "-$1").toLowerCase())) : t.removeAttribute(e))
    }
    function fr(t, e, n, r, i, o) {
        o = new U(t._pt,e,n,0,1,o ? Vn : Un),
        (t._pt = o).b = r,
        o.e = i,
        t._props.push(n)
    }
    function dr(t, e, n, r) {
        var i, o = parseFloat(n) || 0, s = (n + "").trim().substr((o + "").length) || "px", a = Cr.style, u = Qr.test(e), l = "svg" === t.tagName.toLowerCase(), c = (l ? "client" : "offset") + (u ? "Width" : "Height"), f = "px" === r, d = "%" === r;
        return r === s || !o || ni[r] || ni[s] ? o : ("px" === s || f || (o = dr(t, e, n, "px")),
        n = t.getCTM && lr(t),
        !d && "%" !== s || !Ur[e] && !~e.indexOf("adius") ? (a[u ? "width" : "height"] = 100 + (f ? s : r),
        r = ~e.indexOf("adius") || "em" === r && t.appendChild && !l ? t : t.parentNode,
        (l = (r = (r = n ? (t.ownerSVGElement || {}).parentNode : r) && r !== _r && r.appendChild ? r : _r.body)._gsap) && d && l.width && u && l.time === p.time && !l.uncache ? B(o / l.width * 100) : (!d && "%" !== s || ri[V(r, "display")] || (a.position = V(t, "position")),
        r === t && (a.position = "static"),
        r.appendChild(Cr),
        i = Cr[c],
        r.removeChild(Cr),
        a.position = "absolute",
        u && d && ((l = et(r)).time = p.time,
        l.width = r[c]),
        B(f ? i * o / 100 : i && o ? 100 / i * o : 0))) : (i = n ? t.getBBox()[u ? "width" : "height"] : t[c],
        B(d ? o / i * 100 : o / 100 * i)))
    }
    function hr(t, e, n, r) {
        var i;
        n && "none" !== n || ((o = (i = ei(e, t, 1)) && V(t, i, 1)) && o !== n ? (e = i,
        n = o) : "borderColor" === e && (n = V(t, "borderTopColor")));
        var o, s, a, u, l, c, f, d, h, p = new U(this._pt,t.style,e,0,1,wn), g = 0, m = 0;
        if (p.b = n,
        p.e = r,
        n += "",
        "auto" == (r += "") && (t.style[e] = r,
        r = V(t, e) || r,
        t.style[e] = n),
        Rt(o = [n, r]),
        r = o[1],
        s = (n = o[0]).match(Te) || [],
        (r.match(Te) || []).length) {
            for (; c = Te.exec(r); )
                d = c[0],
                f = r.substring(g, c.index),
                u ? u = (u + 1) % 5 : "rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5) || (u = 1),
                d !== (l = s[m++] || "") && (a = parseFloat(l) || 0,
                h = l.substr((a + "").length),
                "=" === d.charAt(1) && (d = nt(a, d) + h),
                c = parseFloat(d),
                d = d.substr((c + "").length),
                g = Te.lastIndex - d.length,
                d || (d = d || I.units[e] || h,
                g === r.length && (r += d,
                p.e += d)),
                h !== d && (a = dr(t, e, l, d) || 0),
                p._pt = {
                    _next: p._pt,
                    p: f || 1 === m ? f : ",",
                    s: a,
                    c: c - a,
                    m: u && u < 4 || "zIndex" === e ? Math.round : 0
                });
            p.c = g < r.length ? r.substring(g, r.length) : ""
        } else
            p.r = "display" === e && "none" === r ? Vn : Un;
        return Se.test(r) && (p.e = 0),
        this._pt = p
    }
    function pr(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var n, r, i, o = e.t, s = o.style, a = e.u, e = o._gsap;
            if ("all" === a || !0 === a)
                s.cssText = "",
                r = 1;
            else
                for (i = (a = a.split(",")).length; -1 < --i; )
                    n = a[i],
                    Ur[n] && (r = 1,
                    n = "transformOrigin" === n ? G : $),
                    cr(o, n);
            r && (cr(o, $),
            e) && (e.svg && o.removeAttribute("transform"),
            li(o, 1),
            e.uncache = 1,
            er(s))
        }
    }
    function gr(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }
    function mr(t) {
        return gr(t = V(t, $)) ? ai : t.substr(7).match(Ee).map(B)
    }
    function vr(t, e) {
        var n, r, i, o = t._gsap || et(t), s = t.style, a = mr(t);
        return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (a = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? ai : a : (a !== ai || t.offsetParent || t === br || o.svg || (r = s.display,
        s.display = "block",
        (o = t.parentNode) && t.offsetParent || (i = 1,
        n = t.nextElementSibling,
        br.appendChild(t)),
        a = mr(t),
        r ? s.display = r : cr(t, "display"),
        i && (n ? o.insertBefore(t, n) : o ? o.appendChild(t) : br.removeChild(t))),
        e && 6 < a.length ? [a[0], a[1], a[4], a[5], a[12], a[13]] : a)
    }
    function Dr(t, e, n, r, i, o) {
        var s, a = t._gsap, u = i || vr(t, !0), l = a.xOrigin || 0, c = a.yOrigin || 0, f = a.xOffset || 0, d = a.yOffset || 0, h = u[0], p = u[1], g = u[2], m = u[3], v = u[4], D = u[5], y = e.split(" "), x = parseFloat(y[0]) || 0, i = parseFloat(y[1]) || 0;
        n ? u !== ai && (u = h * m - p * g) && (s = x * (-p / u) + i * (h / u) - (h * D - p * v) / u,
        x = x * (m / u) + i * (-g / u) + (g * D - m * v) / u,
        i = s) : (x = (s = ur(t)).x + (~y[0].indexOf("%") ? x / 100 * s.width : x),
        i = s.y + (~(y[1] || y[0]).indexOf("%") ? i / 100 * s.height : i)),
        r || !1 !== r && a.smooth ? (a.xOffset = f + ((v = x - l) * h + (D = i - c) * g) - v,
        a.yOffset = d + (v * p + D * m) - D) : a.xOffset = a.yOffset = 0,
        a.xOrigin = x,
        a.yOrigin = i,
        a.smooth = !!r,
        a.origin = e,
        a.originIsAbsolute = !!n,
        t.style[G] = "0px 0px",
        o && (fr(o, a, "xOrigin", l, x),
        fr(o, a, "yOrigin", c, i),
        fr(o, a, "xOffset", f, a.xOffset),
        fr(o, a, "yOffset", d, a.yOffset)),
        t.setAttribute("data-svg-origin", x + " " + i)
    }
    function yr(t, e, n) {
        var r = q(e);
        return B(parseFloat(e) + parseFloat(dr(t, "x", n + "px", r))) + r
    }
    function xr(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    Y.version = M.version = c.version = "3.11.5",
    Zt = 1,
    g() && Ve();
    var _r, br, wr, Cr, Er, Tr, Fr, Sr = P.Power0, Ar = P.Power1, kr = P.Power2, Pr = P.Power3, Mr = P.Power4, Or = P.Linear, Br = P.Quad, Nr = P.Cubic, Lr = P.Quart, Rr = P.Quint, jr = P.Strong, qr = P.Elastic, Hr = P.Back, Ir = P.SteppedEase, zr = P.Bounce, Wr = P.Sine, Xr = P.Expo, Yr = P.Circ, Ur = {}, Vr = 180 / Math.PI, $r = Math.PI / 180, Gr = Math.atan2, Kr = /([A-Z])/g, Qr = /(left|right|width|margin|padding|x)/i, Zr = /[\s,\(]\S/, Jr = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, $ = "transform", G = $ + "Origin", ti = "O,Moz,ms,Ms,Webkit".split(","), ei = function(t, e, n) {
        var r = (e || Cr).style
          , i = 5;
        if (t in r && !n)
            return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(ti[i] + t in r); )
            ;
        return i < 0 ? null : (3 === i ? "ms" : 0 <= i ? ti[i] : "") + t
    }, ni = {
        deg: 1,
        rad: 1,
        turn: 1
    }, ri = {
        grid: 1,
        flex: 1
    }, ii = function(t, e, n, r) {
        var i;
        return wr || or(),
        e in Jr && "transform" !== e && ~(e = Jr[e]).indexOf(",") && (e = e.split(",")[0]),
        Ur[e] && "transform" !== e ? (i = li(t, r),
        i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : ci(V(t, G)) + " " + i.zOrigin + "px") : (i = t.style[e]) && "auto" !== i && !r && !~(i + "").indexOf("calc(") || (i = si[e] && si[e](t, e, n) || V(t, e) || y(t, e) || ("opacity" === e ? 1 : 0)),
        n && !~(i + "").trim().indexOf(" ") ? dr(t, e, i, n) + n : i
    }, oi = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, si = {
        clearProps: function(t, e, n, r, i) {
            if ("isFromStart" !== i.data)
                return (e = t._pt = new U(t._pt,e,n,0,0,pr)).u = r,
                e.pr = -10,
                e.tween = i,
                t._props.push(n),
                1
        }
    }, ai = [1, 0, 0, 1, 0, 0], ui = {}, li = function(t, e) {
        var n, r, i, o, s, a, u, l, c, f, d, h, p, g, m, v, D, y, x, _, b, w, C, E, T, F, S, A, k, P, M, O = t._gsap || new tn(t);
        return "x"in O && !e && !O.uncache || (F = t.style,
        S = O.scaleX < 0,
        A = getComputedStyle(t),
        k = V(t, G) || "0",
        P = n = r = o = s = a = u = l = 0,
        M = i = 1,
        O.svg = !(!t.getCTM || !lr(t)),
        A.translate && ("none" === A.translate && "none" === A.scale && "none" === A.rotate || (F[$] = ("none" !== A.translate ? "translate3d(" + (A.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== A.rotate ? "rotate(" + A.rotate + ") " : "") + ("none" !== A.scale ? "scale(" + A.scale.split(" ").join(",") + ") " : "") + ("none" !== A[$] ? A[$] : "")),
        F.scale = F.rotate = F.translate = "none"),
        c = vr(t, O.svg),
        O.svg && (y = O.uncache ? (x = t.getBBox(),
        k = O.xOrigin - x.x + "px " + (O.yOrigin - x.y) + "px",
        "") : !e && t.getAttribute("data-svg-origin"),
        Dr(t, y || k, !!y || O.originIsAbsolute, !1 !== O.smooth, c)),
        w = O.xOrigin || 0,
        E = O.yOrigin || 0,
        c !== ai && (h = c[0],
        p = c[1],
        g = c[2],
        m = c[3],
        P = v = c[4],
        n = D = c[5],
        6 === c.length ? (M = Math.sqrt(h * h + p * p),
        i = Math.sqrt(m * m + g * g),
        o = h || p ? Gr(p, h) * Vr : 0,
        (u = g || m ? Gr(g, m) * Vr + o : 0) && (i *= Math.abs(Math.cos(u * $r))),
        O.svg && (P -= w - (w * h + E * g),
        n -= E - (w * p + E * m))) : (T = c[6],
        C = c[7],
        b = c[8],
        A = c[9],
        w = c[10],
        E = c[11],
        P = c[12],
        n = c[13],
        r = c[14],
        s = (c = Gr(T, w)) * Vr,
        c && (y = v * (f = Math.cos(-c)) + b * (d = Math.sin(-c)),
        x = D * f + A * d,
        _ = T * f + w * d,
        b = v * -d + b * f,
        A = D * -d + A * f,
        w = T * -d + w * f,
        E = C * -d + E * f,
        v = y,
        D = x,
        T = _),
        a = (c = Gr(-g, w)) * Vr,
        c && (f = Math.cos(-c),
        E = m * (d = Math.sin(-c)) + E * f,
        h = y = h * f - b * d,
        p = x = p * f - A * d,
        g = _ = g * f - w * d),
        o = (c = Gr(p, h)) * Vr,
        c && (y = h * (f = Math.cos(c)) + p * (d = Math.sin(c)),
        x = v * f + D * d,
        p = p * f - h * d,
        D = D * f - v * d,
        h = y,
        v = x),
        s && 359.9 < Math.abs(s) + Math.abs(o) && (s = o = 0,
        a = 180 - a),
        M = B(Math.sqrt(h * h + p * p + g * g)),
        i = B(Math.sqrt(D * D + T * T)),
        c = Gr(v, D),
        u = 2e-4 < Math.abs(c) ? c * Vr : 0,
        l = E ? 1 / (E < 0 ? -E : E) : 0),
        O.svg) && (y = t.getAttribute("transform"),
        O.forceCSS = t.setAttribute("transform", "") || !gr(V(t, $)),
        y) && t.setAttribute("transform", y),
        90 < Math.abs(u) && Math.abs(u) < 270 && (S ? (M *= -1,
        u += o <= 0 ? 180 : -180,
        o += o <= 0 ? 180 : -180) : (i *= -1,
        u += u <= 0 ? 180 : -180)),
        e = e || O.uncache,
        O.x = P - ((O.xPercent = P && (!e && O.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-P) ? -50 : 0))) ? t.offsetWidth * O.xPercent / 100 : 0) + "px",
        O.y = n - ((O.yPercent = n && (!e && O.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * O.yPercent / 100 : 0) + "px",
        O.z = r + "px",
        O.scaleX = B(M),
        O.scaleY = B(i),
        O.rotation = B(o) + "deg",
        O.rotationX = B(s) + "deg",
        O.rotationY = B(a) + "deg",
        O.skewX = u + "deg",
        O.skewY = "0deg",
        O.transformPerspective = l + "px",
        (O.zOrigin = parseFloat(k.split(" ")[2]) || 0) && (F[G] = ci(k)),
        O.xOffset = O.yOffset = 0,
        O.force3D = I.force3D,
        O.renderTransform = O.svg ? mi : Fr ? gi : fi,
        O.uncache = 0),
        O
    }, ci = function(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    }, fi = function(t, e) {
        e.z = "0px",
        e.rotationY = e.rotationX = "0deg",
        e.force3D = 0,
        gi(t, e)
    }, di = "0deg", hi = "0px", pi = ") ", gi = function(t, e) {
        var n = e || this
          , r = n.xPercent
          , i = n.yPercent
          , o = n.x
          , s = n.y
          , a = n.z
          , u = n.rotation
          , l = n.rotationY
          , c = n.rotationX
          , f = n.skewX
          , d = n.skewY
          , h = n.scaleX
          , p = n.scaleY
          , g = n.transformPerspective
          , m = n.force3D
          , v = n.target
          , D = n.zOrigin
          , y = ""
          , e = "auto" === m && t && 1 !== t || !0 === m;
        !D || c === di && l === di || (n = parseFloat(l) * $r,
        t = Math.sin(n),
        m = Math.cos(n),
        n = parseFloat(c) * $r,
        o = yr(v, o, t * (t = Math.cos(n)) * -D),
        s = yr(v, s, -Math.sin(n) * -D),
        a = yr(v, a, m * t * -D + D)),
        g !== hi && (y += "perspective(" + g + pi),
        (r || i) && (y += "translate(" + r + "%, " + i + "%) "),
        !e && o === hi && s === hi && a === hi || (y += a !== hi || e ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + pi),
        u !== di && (y += "rotate(" + u + pi),
        l !== di && (y += "rotateY(" + l + pi),
        c !== di && (y += "rotateX(" + c + pi),
        f === di && d === di || (y += "skew(" + f + ", " + d + pi),
        1 === h && 1 === p || (y += "scale(" + h + ", " + p + pi),
        v.style[$] = y || "translate(0, 0)"
    }, mi = function(t, e) {
        var n, r, i, o, s, a = (b = e || this).xPercent, u = b.yPercent, l = b.x, c = b.y, f = b.rotation, d = b.skewX, h = b.skewY, p = b.scaleX, g = b.scaleY, m = b.target, v = b.xOrigin, D = b.yOrigin, y = b.xOffset, x = b.yOffset, _ = b.forceCSS, e = parseFloat(l), b = parseFloat(c), f = parseFloat(f), d = parseFloat(d);
        (h = parseFloat(h)) && (d += h = parseFloat(h),
        f += h),
        f || d ? (f *= $r,
        d *= $r,
        n = Math.cos(f) * p,
        r = Math.sin(f) * p,
        i = Math.sin(f - d) * -g,
        o = Math.cos(f - d) * g,
        d && (h *= $r,
        s = Math.tan(d - h),
        i *= s = Math.sqrt(1 + s * s),
        o *= s,
        h) && (s = Math.tan(h),
        n *= s = Math.sqrt(1 + s * s),
        r *= s),
        n = B(n),
        r = B(r),
        i = B(i),
        o = B(o)) : (n = p,
        o = g,
        r = i = 0),
        (e && !~(l + "").indexOf("px") || b && !~(c + "").indexOf("px")) && (e = dr(m, "x", l, "px"),
        b = dr(m, "y", c, "px")),
        (v || D || y || x) && (e = B(e + v - (v * n + D * i) + y),
        b = B(b + D - (v * r + D * o) + x)),
        (a || u) && (e = B(e + a / 100 * (s = m.getBBox()).width),
        b = B(b + u / 100 * s.height)),
        m.setAttribute("transform", s = "matrix(" + n + "," + r + "," + i + "," + o + "," + e + "," + b + ")"),
        _ && (m.style[$] = s)
    };
    h("padding,margin,Width,Radius", function(e, n) {
        var t = "Bottom"
          , a = (n < 3 ? ["Top", "Right", t, "Left"] : ["TopLeft", "TopRight", t + "Right", t + "Left"]).map(function(t) {
            return n < 2 ? e + t : "border" + t + e
        });
        si[1 < n ? "border" + e : e] = function(e, t, n, r, i) {
            var o, s;
            if (arguments.length < 4)
                return o = a.map(function(t) {
                    return ii(e, t, n)
                }),
                5 === (s = o.join(" ")).split(o[0]).length ? o[0] : s;
            o = (r + "").split(" "),
            s = {},
            a.forEach(function(t, e) {
                return s[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
            }),
            e.init(t, s, i)
        }
    });
    var vi, e = {
        name: "css",
        register: or,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, n, r, i) {
            var o, s, a, u, l, c, f, d, h, L, p, g, R, m, v, D, y, x, _, b = this._props, w = t.style, C = n.vars.startAt;
            for (l in wr || or(),
            this.styles = this.styles || rr(t),
            m = this.styles.props,
            this.tween = n,
            e)
                if ("autoRound" !== l && (s = e[l],
                !X[l] || !sn(l, e, n, r, t, i)))
                    if (M = typeof s,
                    v = si[l],
                    "function" === M && (M = typeof (s = s.call(n, r, t, i))),
                    "string" === M && ~s.indexOf("random(") && (s = At(s)),
                    v)
                        v(this, t, l, s, n) && (R = 1);
                    else if ("--" === l.substr(0, 2))
                        o = (getComputedStyle(t).getPropertyValue(l) + "").trim(),
                        s += "",
                        Ye.lastIndex = 0,
                        Ye.test(o) || (c = q(o),
                        f = q(s)),
                        f ? c !== f && (o = dr(t, l, o, f) + f) : c && (s += c),
                        this.add(w, "setProperty", o, s, r, i, 0, 0, l),
                        b.push(l),
                        m.push(l, 0, w[l]);
                    else if ("undefined" !== M) {
                        if (C && l in C && (q((o = j(o = "function" == typeof C[l] ? C[l].call(n, r, t, i) : C[l]) && ~o.indexOf("random(") ? At(o) : o) + "") || (o += I.units[l] || q(ii(t, l)) || ""),
                        "=" !== (o + "").charAt(1)) || (o = ii(t, l)),
                        u = parseFloat(o),
                        (d = "string" === M && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)),
                        a = parseFloat(s),
                        h = (l = l in Jr && ("autoAlpha" === l && (1 === u && "hidden" === ii(t, "visibility") && a && (u = 0),
                        m.push("visibility", 0, w.visibility),
                        fr(this, w, "visibility", u ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)),
                        "scale" !== l) && "transform" !== l && ~(l = Jr[l]).indexOf(",") ? l.split(",")[0] : l)in Ur)
                            if (this.styles.save(l),
                            L || ((p = t._gsap).renderTransform && !e.parseTransform || li(t, e.parseTransform),
                            g = !1 !== e.smoothOrigin && p.smooth,
                            (L = this._pt = new U(this._pt,w,$,0,1,p.renderTransform,p,0,-1)).dep = 1),
                            "scale" === l)
                                this._pt = new U(this._pt,p,"scaleY",p.scaleY,(d ? nt(p.scaleY, d + a) : a) - p.scaleY || 0,zn),
                                this._pt.u = 0,
                                b.push("scaleY", l),
                                l += "X";
                            else {
                                if ("transformOrigin" === l) {
                                    m.push(G, 0, w[G]),
                                    _ = x = y = void 0,
                                    x = (y = (D = s).split(" "))[0],
                                    _ = y[1] || "50%",
                                    "top" !== x && "bottom" !== x && "left" !== _ && "right" !== _ || (D = x,
                                    x = _,
                                    _ = D),
                                    y[0] = oi[x] || x,
                                    y[1] = oi[_] || _,
                                    s = y.join(" "),
                                    p.svg ? Dr(t, s, 0, g, 0, this) : ((f = parseFloat(s.split(" ")[2]) || 0) !== p.zOrigin && fr(this, p, "zOrigin", p.zOrigin, f),
                                    fr(this, w, l, ci(o), ci(s)));
                                    continue
                                }
                                if ("svgOrigin" === l) {
                                    Dr(t, s, 1, g, 0, this);
                                    continue
                                }
                                if (l in ui) {
                                    N = p,
                                    v = l,
                                    M = u,
                                    y = _ = x = void 0,
                                    x = j(D = d ? nt(u, d + s) : s),
                                    y = M + (_ = parseFloat(D) * (x && ~D.indexOf("rad") ? Vr : 1) - M) + "deg",
                                    x && ("short" === (D = D.split("_")[1]) && (_ %= 360) != _ % 180 && (_ += _ < 0 ? 360 : -360),
                                    "cw" === D && _ < 0 ? _ = (_ + 36e9) % 360 - 360 * ~~(_ / 360) : "ccw" === D && 0 < _ && (_ = (_ - 36e9) % 360 - 360 * ~~(_ / 360))),
                                    this._pt = _ = new U(this._pt,N,v,M,_,Wn),
                                    _.e = y,
                                    _.u = "deg",
                                    this._props.push(v);
                                    continue
                                }
                                if ("smoothOrigin" === l) {
                                    fr(this, p, "smooth", p.smooth, s);
                                    continue
                                }
                                if ("force3D" === l) {
                                    p[l] = s;
                                    continue
                                }
                                if ("transform" === l) {
                                    N = B = k = A = S = F = T = E = void 0;
                                    var E, T, F, S, A, k, P = this, M = s, O = t, B = xr({}, O._gsap), N = O.style;
                                    for (T in B.svg ? (F = O.getAttribute("transform"),
                                    O.setAttribute("transform", ""),
                                    N[$] = M,
                                    E = li(O, 1),
                                    cr(O, $),
                                    O.setAttribute("transform", F)) : (F = getComputedStyle(O)[$],
                                    N[$] = M,
                                    E = li(O, 1),
                                    N[$] = F),
                                    Ur)
                                        (F = B[T]) !== (A = E[T]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(T) < 0 && (S = q(F) !== (k = q(A)) ? dr(O, T, F, k) : parseFloat(F),
                                        A = parseFloat(A),
                                        P._pt = new U(P._pt,E,T,S,A - S,zn),
                                        P._pt.u = k || 0,
                                        P._props.push(T));
                                    xr(E, B);
                                    continue
                                }
                            }
                        else
                            l in w || (l = ei(l) || l);
                        if (h || (a || 0 === a) && (u || 0 === u) && !Zr.test(s) && l in w)
                            a = a || 0,
                            (c = (o + "").substr((u + "").length)) !== (f = q(s) || (l in I.units ? I.units[l] : c)) && (u = dr(t, l, o, f)),
                            this._pt = new U(this._pt,h ? p : w,l,u,(d ? nt(u, d + a) : a) - u,h || "px" !== f && "zIndex" !== l || !1 === e.autoRound ? zn : Yn),
                            this._pt.u = f || 0,
                            c !== f && "%" !== f && (this._pt.b = o,
                            this._pt.r = Xn);
                        else if (l in w)
                            hr.call(this, t, l, o, d ? d + s : s);
                        else if (l in t)
                            this.add(t, l, o || t[l], d ? d + s : s, r, i);
                        else if ("parseTransform" !== l) {
                            Z(l, s);
                            continue
                        }
                        h || (l in w ? m.push(l, 0, w[l]) : m.push(l, 1, o || t[l])),
                        b.push(l)
                    }
            R && Fn(this)
        },
        render: function(t, e) {
            if (e.tween._time || !Tr())
                for (var n = e._pt; n; )
                    n.r(t, n.d),
                    n = n._next;
            else
                e.styles.revert()
        },
        get: ii,
        aliases: Jr,
        getSetter: function(t, e, n) {
            var r = Jr[e];
            return (e = r && r.indexOf(",") < 0 ? r : e)in Ur && e !== G && (t._gsap.x || ii(t, "x")) ? n && Er === n ? "scale" === e ? Qn : Kn : (Er = n || {}) && ("scale" === e ? Zn : Jn) : t.style && !o(t.style[e]) ? $n : ~e.indexOf("-") ? Gn : xn(t, e)
        },
        core: {
            _removeProperty: cr,
            _getMatrix: vr
        }
    }, Di = (c.utils.checkPrefix = ei,
    c.core.getStyleSaver = rr,
    vi = h("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (n = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        Ur[t] = 1
    }),
    h(n, function(t) {
        I.units[t] = "deg",
        ui[t] = 1
    }),
    Jr[vi[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + n,
    h("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        t = t.split(":"),
        Jr[t[1]] = vi[t[0]]
    }),
    h("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        I.units[t] = "px"
    }),
    c.registerPlugin(e),
    c.registerPlugin(e) || c), n = Di.core.Tween;
    t.Back = Hr,
    t.Bounce = zr,
    t.CSSPlugin = e,
    t.Circ = Yr,
    t.Cubic = Nr,
    t.Elastic = qr,
    t.Expo = Xr,
    t.Linear = Or,
    t.Power0 = Sr,
    t.Power1 = Ar,
    t.Power2 = kr,
    t.Power3 = Pr,
    t.Power4 = Mr,
    t.Quad = Br,
    t.Quart = Lr,
    t.Quint = Rr,
    t.Sine = Wr,
    t.SteppedEase = Ir,
    t.Strong = jr,
    t.TimelineLite = M,
    t.TimelineMax = M,
    t.TweenLite = Y,
    t.TweenMax = n,
    t.default = Di,
    t.gsap = Di,
    "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";
    function v(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }
    var C = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
      , E = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi
      , O = Math.PI / 180
      , B = Math.sin
      , N = Math.cos
      , L = Math.abs
      , R = Math.sqrt;
    function e() {
        return T || "undefined" != typeof window && (T = window.gsap) && T.registerPlugin && T
    }
    function r() {
        (T = e()) ? (T.registerEase("_CE", o.create),
        i = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
    }
    function D(t) {
        return ~~(1e3 * t + (t < 0 ? -.5 : .5)) / 1e3
    }
    var T, i, n, F = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi, S = /[cLlsSaAhHvVtTqQ]/g, o = ((n = y.prototype).setData = function(t, e) {
        e = e || {};
        var n, r, i, o, s, a, u, l, c, f = (t = t || "0,0,1,1").match(F), d = 1, h = [], p = [], g = e.precision || 1, m = g <= 1;
        if (this.data = t,
        (S.test(t) || ~t.indexOf("M") && t.indexOf("C") < 0) && (f = function(t) {
            function e(t, e, n, r) {
                l = (n - t) / 3,
                c = (r - e) / 3,
                s.push(t + l, e + c, n - l, r - c, n, r)
            }
            var n, r, i, o, s, a, u, l, c, f, d, h, p, g = (t + "").replace(E, function(t) {
                return (t = +t) < 1e-4 && -1e-4 < t ? 0 : t
            }).match(C) || [], m = [], v = 0, D = 0, y = g.length, x = 0, _ = "ERROR: malformed path: " + t;
            if (t && isNaN(g[0]) && !isNaN(g[1])) {
                for (n = 0; n < y; n++)
                    if (d = i,
                    isNaN(g[n]) ? o = (i = g[n].toUpperCase()) !== g[n] : n--,
                    h = +g[n + 1],
                    p = +g[n + 2],
                    o && (h += v,
                    p += D),
                    n || (a = h,
                    u = p),
                    "M" === i)
                        s && (s.length < 8 ? --m.length : x += s.length),
                        v = a = h,
                        D = u = p,
                        s = [h, p],
                        m.push(s),
                        n += 2,
                        i = "L";
                    else if ("C" === i)
                        o || (v = D = 0),
                        (s = s || [0, 0]).push(h, p, v + +g[n + 3], D + +g[n + 4], v += +g[n + 5], D += +g[n + 6]),
                        n += 6;
                    else if ("S" === i)
                        l = v,
                        c = D,
                        "C" !== d && "S" !== d || (l += v - s[s.length - 4],
                        c += D - s[s.length - 3]),
                        o || (v = D = 0),
                        s.push(l, c, h, p, v += +g[n + 3], D += +g[n + 4]),
                        n += 4;
                    else if ("Q" === i)
                        l = v + 2 / 3 * (h - v),
                        c = D + 2 / 3 * (p - D),
                        o || (v = D = 0),
                        v += +g[n + 3],
                        D += +g[n + 4],
                        s.push(l, c, v + 2 / 3 * (h - v), D + 2 / 3 * (p - D), v, D),
                        n += 4;
                    else if ("T" === i)
                        l = v - s[s.length - 4],
                        c = D - s[s.length - 3],
                        s.push(v + l, D + c, h + 2 / 3 * (v + 1.5 * l - h), p + 2 / 3 * (D + 1.5 * c - p), v = h, D = p),
                        n += 2;
                    else if ("H" === i)
                        e(v, D, v = h, D),
                        n += 1;
                    else if ("V" === i)
                        e(v, D, v, D = h + (o ? D - v : 0)),
                        n += 1;
                    else if ("L" === i || "Z" === i)
                        "Z" === i && (h = a,
                        p = u,
                        s.closed = !0),
                        ("L" === i || .5 < L(v - h) || .5 < L(D - p)) && (e(v, D, h, p),
                        "L" === i) && (n += 2),
                        v = h,
                        D = p;
                    else if ("A" === i) {
                        if (h = g[n + 4],
                        p = g[n + 5],
                        l = g[n + 6],
                        c = g[n + 7],
                        r = 7,
                        1 < h.length && (h.length < 3 ? (c = l,
                        l = p,
                        r--) : (c = p,
                        l = h.substr(2),
                        r -= 2),
                        p = h.charAt(1),
                        h = h.charAt(0)),
                        f = function(t, e, n, r, i, o, s, a, u) {
                            if (t !== a || e !== u) {
                                n = L(n),
                                r = L(r);
                                var l = i % 360 * O
                                  , c = N(l)
                                  , f = B(l)
                                  , d = Math.PI
                                  , h = 2 * d
                                  , p = (t - a) / 2
                                  , g = (e - u) / 2
                                  , m = c * p + f * g
                                  , v = -f * p + c * g
                                  , o = (1 < (p = (b = m * m) / (n * n) + (l = v * v) / (r * r)) && (n = R(p) * n,
                                r = R(p) * r),
                                (o == s ? -1 : 1) * R(b = (b = ((g = n * n) * (p = r * r) - g * l - p * b) / (g * l + p * b)) < 0 ? 0 : b))
                                  , D = c * (b = n * v / r * o) - f * (o = -r * m / n * o) + (t + a) / 2
                                  , y = f * b + c * o + (e + u) / 2
                                  , x = (m - b) / n
                                  , _ = (v - o) / r
                                  , e = (-m - b) / n
                                  , b = (-v - o) / r
                                  , o = x * x + _ * _
                                  , w = (_ < 0 ? -1 : 1) * Math.acos(x / R(o))
                                  , b = (x * b - _ * e < 0 ? -1 : 1) * Math.acos((x * e + _ * b) / R(o * (e * e + b * b)));
                                isNaN(b) && (b = d),
                                !s && 0 < b ? b -= h : s && b < 0 && (b += h),
                                w %= h,
                                b %= h;
                                for (var C = Math.ceil(L(b) / (h / 4)), E = [], T = b / C, F = 4 / 3 * B(T / 2) / (1 + N(T / 2)), S = c * n, A = f * n, k = f * -r, P = c * r, M = 0; M < C; M++)
                                    m = N(i = w + M * T),
                                    v = B(i),
                                    x = N(i += T),
                                    _ = B(i),
                                    E.push(m - F * v, v + F * m, x + F * _, _ - F * x, x, _);
                                for (M = 0; M < E.length; M += 2)
                                    E[M] = (m = E[M]) * S + (v = E[M + 1]) * k + D,
                                    E[M + 1] = m * A + v * P + y;
                                return E[M - 2] = a,
                                E[M - 1] = u,
                                E
                            }
                        }(v, D, +g[n + 1], +g[n + 2], +g[n + 3], +h, +p, (o ? v : 0) + +l, (o ? D : 0) + +c),
                        n += r,
                        f)
                            for (r = 0; r < f.length; r++)
                                s.push(f[r]);
                        v = s[s.length - 2],
                        D = s[s.length - 1]
                    } else
                        console.log(_);
                (n = s.length) < 6 ? (m.pop(),
                n = 0) : s[0] === s[n - 2] && s[1] === s[n - 1] && (s.closed = !0),
                m.totalPoints = x + n
            } else
                console.log(_);
            return m
        }(t)[0]),
        4 === (n = f.length))
            f.unshift(0, 0),
            f.push(1, 1),
            n = 8;
        else if ((n - 2) % 6)
            throw "Invalid CustomEase";
        if (0 != +f[0] || 1 != +f[n - 2]) {
            var v = f;
            t = e.height,
            (e = e.originY) || 0 === e || (e = Math.max(+v[v.length - 1], +v[1]));
            for (var D = -1 * v[0], y = -e, x = v.length, _ = 1 / (+v[x - 2] + D), b = (b = -t || (Math.abs(v[x - 1] - v[1]) < .01 * (v[x - 2] - v[0]) ? function(t) {
                for (var e = t.length, n = 1e20, r = 1; r < e; r += 6)
                    +t[r] < n && (n = +t[r]);
                return n
            }(v) + y : +v[x - 1] + y)) ? 1 / b : -_, w = 0; w < x; w += 2)
                v[w] = (+v[w] + D) * _,
                v[w + 1] = (+v[w + 1] + y) * b
        }
        for (this.segment = f,
        o = 2; o < n; o += 6)
            r = {
                x: +f[o - 2],
                y: +f[o - 1]
            },
            i = {
                x: +f[o + 4],
                y: +f[o + 5]
            },
            h.push(r, i),
            function t(e, n, r, i, o, s, a, u, l, c, f) {
                var d = (e + r) / 2
                  , h = (n + i) / 2
                  , p = (o + a) / 2
                  , g = (s + u) / 2
                  , m = (d + (b = (r + o) / 2)) / 2
                  , v = (h + (w = (i + s) / 2)) / 2
                  , D = (b + p) / 2
                  , y = (w + g) / 2
                  , x = (m + D) / 2
                  , _ = (v + y) / 2
                  , b = a - e
                  , w = u - n
                  , i = Math.abs((r - a) * w - (i - u) * b)
                  , s = Math.abs((o - a) * w - (s - u) * b);
                c || (c = [{
                    x: e,
                    y: n
                }, {
                    x: a,
                    y: u
                }],
                f = 1),
                c.splice(f || c.length - 1, 0, {
                    x: x,
                    y: _
                }),
                l * (b * b + w * w) < (i + s) * (i + s) && (s = c.length,
                t(e, n, d, h, m, v, x, _, l, c, f),
                t(x, _, D, y, p, g, a, u, l, c, f + 1 + (c.length - s)))
            }(r.x, r.y, +f[o], +f[o + 1], +f[o + 2], +f[o + 3], i.x, i.y, 1 / (2e5 * g), h, h.length - 1);
        for (n = h.length,
        o = 0; o < n; o++)
            ((u = h[o]).x > (l = h[o - 1] || u).x || l.y !== u.y && l.x === u.x || u === l) && u.x <= 1 ? (l.cx = u.x - l.x,
            l.cy = u.y - l.y,
            l.n = u,
            l.nx = u.x,
            m && 1 < o && 2 < Math.abs(l.cy / l.cx - h[o - 2].cy / h[o - 2].cx) && (m = 0),
            l.cx < d && (l.cx ? d = l.cx : (l.cx = .001,
            o === n - 1 && (l.x -= .001,
            d = Math.min(d, .001),
            m = 0)))) : (h.splice(o--, 1),
            n--);
        if (s = 1 / (n = 1 / d + 1 | 0),
        u = h[a = 0],
        m) {
            for (o = 0; o < n; o++)
                r = (u = u.nx < (c = o * s) ? h[++a] : u).y + (c - u.x) / u.cx * u.cy,
                p[o] = {
                    x: c,
                    cx: s,
                    y: r,
                    cy: 0,
                    nx: 9
                },
                o && (p[o - 1].cy = r - p[o - 1].y);
            p[n - 1].cy = h[h.length - 1].y - r
        } else {
            for (o = 0; o < n; o++)
                u.nx < o * s && (u = h[++a]),
                p[o] = u;
            a < h.length - 1 && (p[o - 1] = h[h.length - 2])
        }
        return this.ease = function(t) {
            var e = p[t * n | 0] || p[n - 1];
            return (e = e.nx < t ? e.n : e).y + (t - e.x) / e.cx * e.cy
        }
        ,
        (this.ease.custom = this).id && T && T.registerEase(this.id, this.ease),
        this
    }
    ,
    n.getSVGData = function(t) {
        return y.getSVGData(this, t)
    }
    ,
    y.create = function(t, e, n) {
        return new y(t,e,n).ease
    }
    ,
    y.register = function(t) {
        T = t,
        r()
    }
    ,
    y.get = function(t) {
        return T.parseEase(t)
    }
    ,
    y.getSVGData = function(t, e) {
        var n, r, i, o, s, a, u, l, c, f, d = (e = e || {}).width || 100, h = e.height || 100, p = e.x || 0, g = (e.y || 0) + h, m = T.utils.toArray(e.path)[0];
        if (e.invert && (h = -h,
        g = 0),
        (t = (t = "string" == typeof t ? T.parseEase(t) : t).custom ? t.custom : t)instanceof y)
            n = function(t) {
                for (var e, n, r, i = "", o = (t = "number" == typeof t[0] ? [t] : t).length, s = 0; s < o; s++) {
                    for (i += "M" + v((r = t[s])[0]) + "," + v(r[1]) + " C",
                    e = r.length,
                    n = 2; n < e; n++)
                        i += v(r[n++]) + "," + v(r[n++]) + " " + v(r[n++]) + "," + v(r[n++]) + " " + v(r[n++]) + "," + v(r[n]) + " ";
                    r.closed && (i += "z")
                }
                return i
            }(function(t, e, n, r, i) {
                for (var o, s, a, u, l, c = t.length; -1 < --c; )
                    for (s = (o = t[c]).length,
                    a = 0; a < s; a += 2)
                        u = o[a],
                        l = o[a + 1],
                        o[a] = u * e + 0 * l + r,
                        o[a + 1] = 0 * u + l * n + i;
                return t._dirty = 1,
                t
            }([t.segment], d, -h, p, g));
        else {
            for (n = [p, g],
            o = 1 / (u = Math.max(5, 200 * (e.precision || 1))),
            l = 5 / (u += 2),
            c = D(p + o * d),
            r = ((f = D(g + t(o) * -h)) - g) / (c - p),
            i = 2; i < u; i++)
                s = D(p + i * o * d),
                a = D(g + t(i * o) * -h),
                (Math.abs((a - f) / (s - c) - r) > l || i === u - 1) && (n.push(c, f),
                r = (a - f) / (s - c)),
                c = s,
                f = a;
            n = "M" + n.join(",")
        }
        return m && m.setAttribute("d", n),
        n
    }
    ,
    y);
    function y(t, e, n) {
        i || r(),
        this.id = t,
        this.setData(e, n)
    }
    e() && T.registerPlugin(o),
    o.version = "3.10.4",
    t.CustomEase = o,
    t.default = o,
    "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";
    function e(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    function r() {
        return Ft || "undefined" != typeof window && (Ft = window.gsap) && Ft.registerPlugin && Ft
    }
    function ie(t, e) {
        return ~Bt.indexOf(t) && Bt[Bt.indexOf(t) + 1][e]
    }
    function Pt(t) {
        return !!~i.indexOf(t)
    }
    function Et(t, e, n, r, i) {
        t.addEventListener(e, n, {
            passive: !r,
            capture: !!i
        })
    }
    function Tt(t, e, n, r) {
        t.removeEventListener(e, n, !!r)
    }
    function oe() {
        return At && At.isPressed || Ot.cache++
    }
    function s(n, r) {
        function i(t) {
            var e;
            return t || 0 === t ? (o && (St.history.scrollRestoration = "manual"),
            e = At && At.isPressed,
            t = i.v = Math.round(t) || (At && At.iOS ? 1 : 0),
            n(t),
            i.cacheID = Ot.cache,
            e && a("ss", t)) : (r || Ot.cache !== i.cacheID || a("ref")) && (i.cacheID = Ot.cache,
            i.v = n()),
            i.v + i.offset
        }
        return i.offset = 0,
        n && i
    }
    function Mt(t) {
        return Ft.utils.toArray(t)[0] || ("string" == typeof t && !1 !== Ft.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
    }
    function se(e, t) {
        var n = t.s
          , r = t.sc
          , i = (Pt(e) && (e = he.scrollingElement || pe),
        Ot.indexOf(e))
          , o = r === Lt.sc ? 1 : 2;
        return ~i || (i = Ot.push(e) - 1),
        Ot[i + o] || e.addEventListener("scroll", oe),
        (r = (t = Ot[i + o]) || (Ot[i + o] = s(ie(e, n), !0) || (Pt(e) ? r : s(function(t) {
            return arguments.length ? e[n] = t : e[n]
        })))).target = e,
        t || (r.smooth = "smooth" === Ft.getProperty(e, "scrollBehavior")),
        r
    }
    function ae(t, e, i) {
        function o(t, e) {
            var n = _e();
            e || r < n - u ? (a = s,
            s = t,
            l = u,
            u = n) : i ? s += t : s = a + (t - a) / (n - l) * (u - l)
        }
        var s = t
          , a = t
          , u = _e()
          , l = u
          , r = e || 50
          , c = Math.max(500, 3 * r);
        return {
            update: o,
            reset: function() {
                a = s = i ? 0 : s,
                l = u = 0
            },
            getVelocity: function(t) {
                var e = l
                  , n = a
                  , r = _e();
                return !t && 0 !== t || t === s || o(t),
                u === l || c < r - l ? 0 : (s + (i ? n : -n)) / ((i ? r : u) - e) * 1e3
            }
        }
    }
    function ue(t, e) {
        return e && !t._gsapAllow && t.preventDefault(),
        t.changedTouches ? t.changedTouches[0] : t
    }
    function le(t) {
        var e = Math.max.apply(Math, t)
          , t = Math.min.apply(Math, t);
        return Math.abs(e) >= Math.abs(t) ? e : t
    }
    function ce() {
        var t, n, e;
        (De = Ft.core.globals().ScrollTrigger) && De.core && (t = De.core,
        n = t.bridge || {},
        e = t._scrollers,
        t = t._proxies,
        e.push.apply(e, Ot),
        t.push.apply(t, Bt),
        Ot = e,
        Bt = t,
        a = function(t, e) {
            return n[t](e)
        }
        )
    }
    function fe(t) {
        return (Ft = t || r()) && "undefined" != typeof document && document.body && (St = window,
        pe = (he = document).documentElement,
        ge = he.body,
        i = [St, he, pe, ge],
        Ft.utils.clamp,
        ye = Ft.core.context || function() {}
        ,
        ve = "onpointerenter"in ge ? "pointer" : "mouse",
        me = k.isTouch = St.matchMedia && St.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in St || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0,
        kt = k.eventTypes = ("ontouchstart"in pe ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in pe ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
        setTimeout(function() {
            return o = 0
        }, 500),
        ce(),
        de = 1),
        de
    }
    var Ft, de, St, he, pe, ge, me, ve, De, i, At, kt, ye, o = 1, xe = [], Ot = [], Bt = [], _e = Date.now, a = function(t, e) {
        return e
    }, u = "scrollLeft", l = "scrollTop", Nt = {
        s: u,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: s(function(t) {
            return arguments.length ? St.scrollTo(t, Lt.sc()) : St.pageXOffset || he[u] || pe[u] || ge[u] || 0
        })
    }, Lt = {
        s: l,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: Nt,
        sc: s(function(t) {
            return arguments.length ? St.scrollTo(Nt.sc(), t) : St.pageYOffset || he[l] || pe[l] || ge[l] || 0
        })
    };
    Nt.op = Lt,
    Ot.cache = 0;
    c.prototype.init = function(t) {
        de || fe(Ft) || console.warn("Please gsap.registerPlugin(Observer)"),
        De || ce();
        var i = t.tolerance
          , o = t.dragMinimum
          , e = t.type
          , s = t.target
          , n = t.lineHeight
          , r = t.debounce
          , a = t.preventDefault
          , u = t.onStop
          , L = t.onStopDelay
          , l = t.ignore
          , c = t.wheelSpeed
          , R = t.event
          , j = t.onDragStart
          , q = t.onDragEnd
          , H = t.onDrag
          , I = t.onPress
          , z = t.onRelease
          , W = t.onRight
          , X = t.onLeft
          , Y = t.onUp
          , U = t.onDown
          , V = t.onChangeX
          , $ = t.onChangeY
          , G = t.onChange
          , K = t.onToggleX
          , Q = t.onToggleY
          , Z = t.onHover
          , J = t.onHoverEnd
          , f = t.onMove
          , tt = t.ignoreCheck
          , d = t.isNormalizer
          , et = t.onGestureStart
          , nt = t.onGestureEnd
          , rt = t.onWheel
          , it = t.onEnable
          , ot = t.onDisable
          , st = t.onClick
          , h = t.scrollSpeed
          , p = t.capture
          , at = t.allowClicks
          , ut = t.lockAxis
          , lt = t.onLockAxis;
        function ct() {
            return Ct = _e()
        }
        function g(t, e) {
            return (C.event = t) && l && ~l.indexOf(t.target) || e && wt && "touch" !== t.pointerType || tt && tt(t, e)
        }
        function m() {
            var t = C.deltaX = le(P)
              , e = C.deltaY = le(M)
              , n = Math.abs(t) >= i
              , r = Math.abs(e) >= i;
            G && (n || r) && G(C, t, e, P, M),
            n && (W && 0 < C.deltaX && W(C),
            X && C.deltaX < 0 && X(C),
            V && V(C),
            K && C.deltaX < 0 != E < 0 && K(C),
            E = C.deltaX,
            P[0] = P[1] = P[2] = 0),
            r && (U && 0 < C.deltaY && U(C),
            Y && C.deltaY < 0 && Y(C),
            $ && $(C),
            Q && C.deltaY < 0 != T < 0 && Q(C),
            T = C.deltaY,
            M[0] = M[1] = M[2] = 0),
            (x || y) && (f && f(C),
            y && (H(C),
            y = !1),
            x = !1),
            b && (b = !1,
            lt) && lt(C),
            _ && (rt(C),
            _ = !1),
            D = 0
        }
        function ft(t, e, n) {
            P[n] += t,
            M[n] += e,
            C._vx.update(t),
            C._vy.update(e),
            r ? D = D || requestAnimationFrame(m) : m()
        }
        function dt(t, e) {
            ut && !w && (C.axis = w = Math.abs(t) > Math.abs(e) ? "x" : "y",
            b = !0),
            "y" !== w && (P[2] += t,
            C._vx.update(t, !0)),
            "x" !== w && (M[2] += e,
            C._vy.update(e, !0)),
            r ? D = D || requestAnimationFrame(m) : m()
        }
        function v(t) {
            var e, n, r, i;
            !g(t, 1) && (e = (t = ue(t, a)).clientX,
            n = t.clientY,
            r = e - C.x,
            i = n - C.y,
            t = C.isDragging,
            C.x = e,
            C.y = n,
            t || Math.abs(C.startX - e) >= o || Math.abs(C.startY - n) >= o) && (H && (y = !0),
            t || (C.isDragging = !0),
            dt(r, i),
            t || j && j(C))
        }
        function ht(t) {
            return t.touches && 1 < t.touches.length && (C.isGesturing = !0,
            et(t, C.isDragging))
        }
        function pt() {
            return C.isGesturing = !1,
            nt(C)
        }
        function gt(t) {
            var e;
            g(t) || (e = F(),
            t = S(),
            ft((e - _t) * h, (t - bt) * h, 1),
            _t = e,
            bt = t,
            u && N.restart(!0))
        }
        function mt(t) {
            var e;
            g(t) || (t = ue(t, a),
            rt && (_ = !0),
            e = (1 === t.deltaMode ? n : 2 === t.deltaMode ? St.innerHeight : 1) * c,
            ft(t.deltaX * e, t.deltaY * e, 0),
            u && !d && N.restart(!0))
        }
        function vt(t) {
            var e, n, r;
            !g(t) && (e = t.clientX,
            n = t.clientY,
            r = e - C.x,
            t = n - C.y,
            C.x = e,
            C.y = n,
            x = !0,
            r || t) && dt(r, t)
        }
        function Dt(t) {
            C.event = t,
            Z(C)
        }
        function yt(t) {
            C.event = t,
            J(C)
        }
        function xt(t) {
            return g(t) || ue(t, a) && st(C)
        }
        this.target = s = Mt(s) || pe,
        this.vars = t;
        var D, y, x, _, b, w, l = l && Ft.utils.toArray(l), i = i || 1e-9, o = o || 0, c = c || 1, h = h || 1, e = e || "wheel,touch,pointer", r = !1 !== r, n = n || parseFloat(St.getComputedStyle(ge).lineHeight) || 22, C = this, E = 0, T = 0, F = se(s, Nt), S = se(s, Lt), _t = F(), bt = S(), wt = ~e.indexOf("touch") && !~e.indexOf("pointer") && "pointerdown" === kt[0], A = Pt(s), k = s.ownerDocument || he, P = [0, 0, 0], M = [0, 0, 0], Ct = 0, O = C.onPress = function(t) {
            g(t, 1) || t && t.button || (C.axis = w = null,
            N.pause(),
            C.isPressed = !0,
            t = ue(t),
            E = T = 0,
            C.startX = C.x = t.clientX,
            C.startY = C.y = t.clientY,
            C._vx.reset(),
            C._vy.reset(),
            Et(d ? s : k, kt[1], v, a, !0),
            C.deltaX = C.deltaY = 0,
            I && I(C))
        }
        , B = C.onRelease = function(e) {
            var t, n, r;
            g(e, 1) || (Tt(d ? s : k, kt[1], v, !0),
            t = !isNaN(C.y - C.startY),
            n = C.isDragging && (3 < Math.abs(C.x - C.startX) || 3 < Math.abs(C.y - C.startY)),
            r = ue(e),
            !n && t && (C._vx.reset(),
            C._vy.reset(),
            a) && at && Ft.delayedCall(.08, function() {
                var t;
                300 < _e() - Ct && !e.defaultPrevented && (e.target.click ? e.target.click() : k.createEvent && ((t = k.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, St, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null),
                e.target.dispatchEvent(t)))
            }),
            C.isDragging = C.isGesturing = C.isPressed = !1,
            u && !d && N.restart(!0),
            q && n && q(C),
            z && z(C, n))
        }
        , N = C._dc = Ft.delayedCall(L || .25, function() {
            C._vx.reset(),
            C._vy.reset(),
            N.pause(),
            u && u(C)
        }).pause();
        C.deltaX = C.deltaY = 0,
        C._vx = ae(0, 50, !0),
        C._vy = ae(0, 50, !0),
        C.scrollX = F,
        C.scrollY = S,
        C.isDragging = C.isGesturing = C.isPressed = !1,
        ye(this),
        C.enable = function(t) {
            return C.isEnabled || (Et(A ? k : s, "scroll", oe),
            0 <= e.indexOf("scroll") && Et(A ? k : s, "scroll", gt, a, p),
            0 <= e.indexOf("wheel") && Et(s, "wheel", mt, a, p),
            (0 <= e.indexOf("touch") && me || 0 <= e.indexOf("pointer")) && (Et(s, kt[0], O, a, p),
            Et(k, kt[2], B),
            Et(k, kt[3], B),
            at && Et(s, "click", ct, !1, !0),
            st && Et(s, "click", xt),
            et && Et(k, "gesturestart", ht),
            nt && Et(k, "gestureend", pt),
            Z && Et(s, ve + "enter", Dt),
            J && Et(s, ve + "leave", yt),
            f) && Et(s, ve + "move", vt),
            C.isEnabled = !0,
            t && t.type && O(t),
            it && it(C)),
            C
        }
        ,
        C.disable = function() {
            C.isEnabled && (xe.filter(function(t) {
                return t !== C && Pt(t.target)
            }).length || Tt(A ? k : s, "scroll", oe),
            C.isPressed && (C._vx.reset(),
            C._vy.reset(),
            Tt(d ? s : k, kt[1], v, !0)),
            Tt(A ? k : s, "scroll", gt, p),
            Tt(s, "wheel", mt, p),
            Tt(s, kt[0], O, p),
            Tt(k, kt[2], B),
            Tt(k, kt[3], B),
            Tt(s, "click", ct, !0),
            Tt(s, "click", xt),
            Tt(k, "gesturestart", ht),
            Tt(k, "gestureend", pt),
            Tt(s, ve + "enter", Dt),
            Tt(s, ve + "leave", yt),
            Tt(s, ve + "move", vt),
            C.isEnabled = C.isPressed = C.isDragging = !1,
            ot) && ot(C)
        }
        ,
        C.kill = C.revert = function() {
            C.disable();
            var t = xe.indexOf(C);
            0 <= t && xe.splice(t, 1),
            At === C && (At = 0)
        }
        ,
        xe.push(C),
        d && Pt(s) && (At = C),
        C.enable(R)
    }
    ,
    e(c.prototype, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]);
    var k = c;
    function c(t) {
        this.init(t)
    }
    function f() {
        return Ke = 1
    }
    function d() {
        return Ke = 0
    }
    function Rt(t) {
        return t
    }
    function be(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }
    function h() {
        return "undefined" != typeof window
    }
    function p() {
        return Wt || h() && (Wt = window.gsap) && Wt.registerPlugin && Wt
    }
    function we(t) {
        return !!~T.indexOf(t)
    }
    function Ce(t) {
        return ie(t, "getBoundingClientRect") || (we(t) ? function() {
            return Dn.width = Xt.innerWidth,
            Dn.height = Xt.innerHeight,
            Dn
        }
        : function() {
            return Ye(t)
        }
        )
    }
    function Ee(t, e) {
        e.s;
        var n, r = e.d2, i = e.d, e = e.a;
        return Math.max(0, (n = "scroll" + r) && (e = ie(t, n)) ? e() - Ce(t)()[i] : we(t) ? (Ut[n] || Vt[n]) - (Xt["inner" + r] || Ut["client" + r] || Vt["client" + r]) : t[n] - t["offset" + r])
    }
    function g(t, e) {
        for (var n = 0; n < L.length; n += 3)
            e && !~e.indexOf(L[n + 1]) || t(L[n], L[n + 1], L[n + 2])
    }
    function jt(t) {
        return "string" == typeof t
    }
    function qt(t) {
        return "function" == typeof t
    }
    function Te(t) {
        return "number" == typeof t
    }
    function Fe(t) {
        return "object" == typeof t
    }
    function Se(t, e, n) {
        t && t.progress(e ? 0 : 1) && n && t.pause()
    }
    function Ae(t, e) {
        t.enabled && (e = e(t)) && e.totalTime && (t.callbackAnimation = e)
    }
    function Ht(t) {
        return Xt.getComputedStyle(t)
    }
    function ke(t, e) {
        for (var n in e)
            n in t || (t[n] = e[n]);
        return t
    }
    function Pe(t, e) {
        return t["offset" + (e = e.d2)] || t["client" + e] || 0
    }
    function Me(t) {
        var e, n = [], r = t.labels, i = t.duration();
        for (e in r)
            n.push(r[e] / i);
        return n
    }
    function Oe(i) {
        var o = Wt.utils.snap(i)
          , s = Array.isArray(i) && i.slice(0).sort(function(t, e) {
            return t - e
        });
        return s ? function(t, e, n) {
            var r;
            if (void 0 === n && (n = .001),
            !e)
                return o(t);
            if (0 < e) {
                for (t -= n,
                r = 0; r < s.length; r++)
                    if (s[r] >= t)
                        return s[r];
                return s[r - 1]
            }
            for (r = s.length,
            t += n; r--; )
                if (s[r] <= t)
                    return s[r];
            return s[0]
        }
        : function(t, e, n) {
            void 0 === n && (n = .001);
            var r = o(t);
            return !e || Math.abs(r - t) < n || r - t < 0 == e < 0 ? r : o(e < 0 ? t - i : t + i)
        }
    }
    function m(e, n, t, r) {
        t.split(",").forEach(function(t) {
            return e(n, t, r)
        })
    }
    function It(t, e, n, r, i) {
        return t.addEventListener(e, n, {
            passive: !r,
            capture: !!i
        })
    }
    function zt(t, e, n, r) {
        return t.removeEventListener(e, n, !!r)
    }
    function v(t, e, n) {
        (n = n && n.wheelHandler) && (t(e, "wheel", n),
        t(e, "touchmove", n))
    }
    function Be(t, e) {
        var n, r;
        return jt(t) && (r = ~(n = t.indexOf("=")) ? (t.charAt(n - 1) + 1) * parseFloat(t.substr(n + 1)) : 0,
        ~n && (t.indexOf("%") > n && (r *= e / 100),
        t = t.substr(0, n - 1)),
        t = r + (t in U ? U[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)),
        t
    }
    function Ne(t, e, n, r, i, o, s, a) {
        var u = i.startColor
          , l = i.endColor
          , c = i.fontSize
          , f = i.indent
          , d = i.fontWeight
          , h = Yt.createElement("div")
          , p = we(n) || "fixed" === ie(n, "pinType")
          , g = -1 !== t.indexOf("scroller")
          , i = p ? Vt : n
          , d = "border-color:" + (l = (n = -1 !== t.indexOf("start")) ? u : l) + ";font-size:" + c + ";color:" + l + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return d += "position:" + ((g || a) && p ? "fixed;" : "absolute;"),
        !g && !a && p || (d += (r === Lt ? "right" : Y) + ":" + (o + parseFloat(f)) + "px;"),
        s && (d += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"),
        h._isStart = n,
        h.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
        h.style.cssText = d,
        h.innerText = e || 0 === e ? t + "-" + e : t,
        i.children[0] ? i.insertBefore(h, i.children[0]) : i.appendChild(h),
        h._offset = h["offset" + r.op.d2],
        w(h, 0, r, n),
        h
    }
    function D() {
        return 34 < Qt() - Zt && (W = W || requestAnimationFrame(K))
    }
    function Le() {
        P && P.isPressed && !(P.startX > Vt.clientWidth) || (Ot.cache++,
        P ? W = W || requestAnimationFrame(K) : K(),
        Zt || C("scrollStart"),
        Zt = Qt())
    }
    function y() {
        H = Xt.innerWidth,
        q = Xt.innerHeight
    }
    function Re() {
        Ot.cache++,
        $t || R || Yt.fullscreenElement || Yt.webkitFullscreenElement || j && H === Xt.innerWidth && !(Math.abs(Xt.innerHeight - q) > .25 * Xt.innerHeight) || F.restart(!0)
    }
    function je() {
        return zt(M, "scrollEnd", je) || Ue(!0)
    }
    function x(t) {
        for (var e = 0; e < n.length; e += 5)
            (!t || n[e + 4] && n[e + 4].query === t) && (n[e].style.cssText = n[e + 1],
            n[e].getBBox && n[e].setAttribute("transform", n[e + 2] || ""),
            n[e + 3].uncache = 1)
    }
    function _(t, e) {
        var n;
        for (Gt = 0; Gt < ne.length; Gt++)
            !(n = ne[Gt]) || e && n._ctx !== e || (t ? n.kill(1) : n.revert(!0, !0));
        e && x(e),
        e || C("revert")
    }
    function b(t, e) {
        Ot.cache++,
        !e && Kt || Ot.forEach(function(t) {
            return qt(t) && t.cacheID++ && (t.rec = 0)
        }),
        jt(t) && (Xt.history.scrollRestoration = z = t)
    }
    function qe(t, e, n, r) {
        if (!t._gsap.swappedIn) {
            for (var i, o = Q.length, s = e.style, a = t.style; o--; )
                s[i = Q[o]] = n[i];
            s.position = "absolute" === n.position ? "absolute" : "relative",
            "inline" === n.display && (s.display = "inline-block"),
            a[Y] = a.right = "auto",
            s.flexBasis = n.flexBasis || "auto",
            s.overflow = "visible",
            s.boxSizing = "border-box",
            s[an] = Pe(t, Nt) + ee,
            s[un] = Pe(t, Lt) + ee,
            s[Jt] = a[te] = a.top = a.left = "0",
            Xe(r),
            a[an] = a.maxWidth = n[an],
            a[un] = a.maxHeight = n[un],
            a[Jt] = n[Jt],
            t.parentNode !== e && (t.parentNode.insertBefore(e, t),
            e.appendChild(t)),
            t._gsap.swappedIn = !0
        }
    }
    function He(t) {
        for (var e = Z.length, n = t.style, r = [], i = 0; i < e; i++)
            r.push(Z[i], n[Z[i]]);
        return r.t = t,
        r
    }
    function Ie(t, e, n, r, i, o, s, a, u, l, c, f, d) {
        jt(t = qt(t) ? t(a) : t) && "max" === t.substr(0, 3) && (t = f + ("=" === t.charAt(4) ? Be("0" + t.substr(3), n) : 0));
        var h, p, g, m, v = d ? d.time() : 0;
        return d && d.seek(0),
        Te(t) ? (d && (t = Wt.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, f, t)),
        s && w(s, n, r, !0)) : (qt(e) && (e = e(a)),
        g = (t || "0").split(" "),
        p = Mt(e) || Vt,
        (e = Ye(p) || {}) && (e.left || e.top) || "none" !== Ht(p).display || (h = p.style.display,
        p.style.display = "block",
        e = Ye(p),
        h ? p.style.display = h : p.style.removeProperty("display")),
        h = Be(g[0], e[r.d]),
        g = Be(g[1] || "0", n),
        t = e[r.p] - u[r.p] - l + h + i - g,
        s && w(s, g, r, n - g < 20 || s._isStart && 20 < g),
        n -= n - g),
        o && (g = t + n,
        n = o._isStart,
        m = "scroll" + r.d2,
        w(o, g, r, n && 20 < g || !n && (c ? Math.max(Vt[m], Ut[m]) : o.parentNode[m]) <= g + 1),
        c) && (u = Ye(s),
        c) && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + ee),
        d && p && (m = Ye(p),
        d.seek(f),
        p = Ye(p),
        d._caScrollDist = m[r.p] - p[r.p],
        t = t / d._caScrollDist * f),
        d && d.seek(v),
        d ? t : Math.round(t)
    }
    function ze(t, e, n, r) {
        if (t.parentNode !== e) {
            var i, o, s = t.style;
            if (e === Vt) {
                for (i in t._stOrig = s.cssText,
                o = Ht(t))
                    +i || tt.test(i) || !o[i] || "string" != typeof s[i] || "0" === i || (s[i] = o[i]);
                s.top = n,
                s.left = r
            } else
                s.cssText = t._stOrig;
            Wt.core.getCache(t).uncache = 1,
            e.appendChild(t)
        }
    }
    function O(n, t, r) {
        var i = t
          , o = i;
        return function(t) {
            var e = Math.round(n());
            return e !== i && e !== o && 3 < Math.abs(e - i) && 3 < Math.abs(e - o) && (t = e,
            r) && r(),
            o = i,
            i = t
        }
    }
    function We(u, t) {
        function l(t, e, n, r, i) {
            var o = l.tween
              , s = e.onComplete
              , a = (n = n || c(),
            O(c, n, function() {
                o.kill(),
                l.tween = 0
            }));
            return i = r && i || 0,
            r = r || t - n,
            o && o.kill(),
            e[f] = t,
            (e.modifiers = {})[f] = function() {
                return a(n + r * o.ratio + i * o.ratio * o.ratio)
            }
            ,
            e.onUpdate = function() {
                Ot.cache++,
                K()
            }
            ,
            e.onComplete = function() {
                l.tween = 0,
                s && s.call(o)
            }
            ,
            o = l.tween = Wt.to(u, e)
        }
        var c = se(u, t)
          , f = "_scroll" + t.p2;
        return (u[f] = c).wheelHandler = function() {
            return l.tween && l.tween.kill() && (l.tween = 0)
        }
        ,
        It(u, "wheel", c.wheelHandler),
        M.isTouch && It(u, "touchmove", c.wheelHandler),
        l
    }
    function w(t, e, n, r) {
        var i = {
            display: "block"
        }
          , o = n[r ? "os2" : "p2"]
          , s = n[r ? "p2" : "os2"];
        t._isFlipped = r,
        i[n.a + "Percent"] = r ? -100 : 0,
        i[n.a] = r ? "1px" : 0,
        i["border" + o + dn] = 1,
        i["border" + s + dn] = 0,
        i[n.p] = e + "px",
        Wt.set(t, i)
    }
    function C(t) {
        return V[t] && V[t].map(function(t) {
            return t()
        }) || $
    }
    function Xe(t) {
        if (t) {
            var e, n, r = t.t.style, i = t.length, o = 0;
            for ((t.t._gsap || Wt.core.getCache(t.t)).uncache = 1; o < i; o += 2)
                n = t[o + 1],
                e = t[o],
                n ? r[e] = n : r[e] && r.removeProperty(e.replace(J, "-$1").toLowerCase())
        }
    }
    k.version = "3.11.5",
    k.create = function(t) {
        return new k(t)
    }
    ,
    k.register = fe,
    k.getAll = function() {
        return xe.slice()
    }
    ,
    k.getById = function(e) {
        return xe.filter(function(t) {
            return t.vars.id === e
        })[0]
    }
    ,
    r() && Ft.registerPlugin(k);
    function Ye(t, e) {
        return e = e && "matrix(1, 0, 0, 1, 0, 0)" !== Ht(t)[A] && Wt.to(t, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1),
        t = t.getBoundingClientRect(),
        e && e.progress(0).kill(),
        t
    }
    function Ue(t, e) {
        !Zt || t ? (Kt = M.isRefreshing = !0,
        Ot.forEach(function(t) {
            return qt(t) && t.cacheID++ && (t.rec = t())
        }),
        t = C("refreshInit"),
        Qe && M.sort(),
        e || _(),
        Ot.forEach(function(t) {
            qt(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"),
            t(0))
        }),
        ne.slice(0).forEach(function(t) {
            return t.refresh()
        }),
        ne.forEach(function(t, e) {
            var n, r;
            t._subPinOffset && t.pin && (n = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
            r = t.pin[n],
            t.revert(!0, 1),
            t.adjustPinSpacing(t.pin[n] - r),
            t.refresh())
        }),
        ne.forEach(function(t) {
            return "max" === t.vars.end && t.setPositions(t.start, Math.max(t.start + 1, Ee(t.scroller, t._dir)))
        }),
        t.forEach(function(t) {
            return t && t.render && t.render(-1)
        }),
        Ot.forEach(function(t) {
            qt(t) && (t.smooth && requestAnimationFrame(function() {
                return t.target.style.scrollBehavior = "smooth"
            }),
            t.rec) && t(t.rec)
        }),
        b(z, 1),
        F.pause(),
        mn++,
        K(Kt = 2),
        ne.forEach(function(t) {
            return qt(t.vars.onRefresh) && t.vars.onRefresh(t)
        }),
        Kt = M.isRefreshing = !1,
        C("refresh")) : It(M, "scrollEnd", je)
    }
    var Wt, E, Xt, Yt, Ut, Vt, T, F, Ve, $e, Ge, S, $t, Ke, A, Gt, B, N, L, Qe, Ze, R, P, j, q, H, I, Je, z, tn, W, Kt, en, nn, rn = 1, Qt = Date.now, X = Qt(), Zt = 0, on = 0, sn = Math.abs, Y = "bottom", an = "width", un = "height", ln = "Right", cn = "Left", fn = "Bottom", Jt = "padding", te = "margin", dn = "Width", ee = "px", hn = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, pn = {
        toggleActions: "play",
        anticipatePin: 0
    }, U = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    }, ne = [], gn = {}, V = {}, $ = [], n = [], mn = 0, G = 0, vn = 1, K = function(t) {
        if (!Kt || 2 === t) {
            M.isUpdating = !0,
            nn && nn.update(0);
            var e = ne.length
              , n = Qt()
              , r = 50 <= n - X
              , t = e && ne[0].scroll();
            if (vn = t < G ? -1 : 1,
            Kt || (G = t),
            r && (Zt && !Ke && 200 < n - Zt && (Zt = 0,
            C("scrollEnd")),
            Ge = X,
            X = n),
            vn < 0) {
                for (Gt = e; 0 < Gt--; )
                    ne[Gt] && ne[Gt].update(0, r);
                vn = 1
            } else
                for (Gt = 0; Gt < e; Gt++)
                    ne[Gt] && ne[Gt].update(0, r);
            M.isUpdating = !1
        }
        W = 0
    }, Q = ["left", "top", Y, "right", te + fn, te + ln, te + "Top", te + cn, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Z = Q.concat([an, un, "boxSizing", "max" + dn, "maxHeight", "position", te, Jt, Jt + "Top", Jt + ln, Jt + fn, Jt + cn]), J = /([A-Z])/g, Dn = {
        left: 0,
        top: 0
    }, tt = /(webkit|moz|length|cssText|inset)/i, M = (re.prototype.init = function(y, x) {
        var _, r, m, b, U, w, C, E, V, T, $, G, K, F, Q, v, Z, S, D, A, J, tt, et, nt, rt, k, o, d, P, M, O, it, ot, h, p, i, st, at, ut, B, N, L, lt, ct, s, ft, dt, g, ht, R, pt, gt, j, q, H, t, I, z, mt, vt, Dt, W, yt, xt, _t, bt, wt, X, a, Y, Ct, u, l, c, e, n, f, Et, Tt, Ft, St, At, kt, Pt;
        this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        on ? (h = (y = ke(jt(y) || Te(y) || y.nodeType ? {
            trigger: y
        } : y, pn)).onUpdate,
        p = y.toggleClass,
        i = y.id,
        st = y.onToggle,
        at = y.onRefresh,
        ut = y.scrub,
        B = y.trigger,
        N = y.pin,
        L = y.pinSpacing,
        lt = y.invalidateOnRefresh,
        ct = y.anticipatePin,
        s = y.onScrubComplete,
        ft = y.onSnapComplete,
        dt = y.once,
        g = y.snap,
        ht = y.pinReparent,
        e = y.pinSpacer,
        R = y.containerAnimation,
        pt = y.fastScrollEnd,
        gt = y.preventOverlaps,
        j = y.horizontal || y.containerAnimation && !1 !== y.horizontal ? Nt : Lt,
        q = !ut && 0 !== ut,
        H = Mt(y.scroller || Xt),
        t = Wt.core.getCache(H),
        I = we(H),
        z = "fixed" === ("pinType"in y ? y.pinType : ie(H, "pinType") || I && "fixed"),
        mt = [y.onEnter, y.onLeave, y.onEnterBack, y.onLeaveBack],
        vt = q && y.toggleActions.split(" "),
        a = ("markers"in y ? y : pn).markers,
        Dt = !I && parseFloat(Ht(H)["border" + j.p2 + dn]) || 0,
        W = this,
        yt = y.onRefreshInit && function() {
            return y.onRefreshInit(W)
        }
        ,
        Tt = H,
        Ft = I,
        At = (St = j).d,
        kt = St.d2,
        Pt = St.a,
        xt = (Pt = ie(Tt, "getBoundingClientRect")) ? function() {
            return Pt()[At]
        }
        : function() {
            return (Ft ? Xt["inner" + kt] : Tt["client" + kt]) || 0
        }
        ,
        St = H,
        _t = !I || ~Bt.indexOf(St) ? Ce(St) : function() {
            return Dn
        }
        ,
        wt = bt = 0,
        X = se(H, j),
        Je(W),
        W._dir = j,
        ct *= 45,
        W.scroller = H,
        W.scroll = R ? R.time.bind(R) : X,
        b = X(),
        W.vars = y,
        x = x || y.animation,
        "refreshPriority"in y && (Qe = 1,
        -9999 === y.refreshPriority) && (nn = W),
        t.tweenScroll = t.tweenScroll || {
            top: We(H, Lt),
            left: We(H, Nt)
        },
        W.tweenTo = _ = t.tweenScroll[j.p],
        W.scrubDuration = function(t) {
            (o = Te(t) && t) ? k ? k.duration(t) : k = Wt.to(x, {
                ease: "expo",
                totalProgress: "+=0.001",
                duration: o,
                paused: !0,
                onComplete: function() {
                    return s && s(W)
                }
            }) : (k && k.progress(1).kill(),
            k = 0)
        }
        ,
        x && (x.vars.lazy = !1,
        x._initted || !1 !== x.vars.immediateRender && !1 !== y.immediateRender && x.duration() && x.render(0, !0, !0),
        W.animation = x.pause(),
        (x.scrollTrigger = W).scrubDuration(ut),
        k && k.resetTo && k.resetTo("totalProgress", 0),
        nt = 0,
        i = i || x.vars.id),
        ne.push(W),
        g && (Fe(g) && !g.push || (g = {
            snapTo: g
        }),
        "scrollBehavior"in Vt.style && Wt.set(I ? [Vt, Ut] : H, {
            scrollBehavior: "auto"
        }),
        Ot.forEach(function(t) {
            return qt(t) && t.target === (I ? Yt.scrollingElement || Ut : H) && (t.smooth = !1)
        }),
        m = qt(g.snapTo) ? g.snapTo : "labels" === g.snapTo ? (Et = x,
        function(t) {
            return Wt.utils.snap(Me(Et), t)
        }
        ) : "labelsDirectional" === g.snapTo ? (f = x,
        function(t, e) {
            return Oe(Me(f))(t, e.direction)
        }
        ) : !1 !== g.directional ? function(t, e) {
            return Oe(g.snapTo)(t, Qt() - wt < 500 ? 0 : e.direction)
        }
        : Wt.utils.snap(g.snapTo),
        d = Fe(d = g.duration || {
            min: .1,
            max: 2
        }) ? $e(d.min, d.max) : $e(d, d),
        P = Wt.delayedCall(g.delay || o / 2 || .1, function() {
            var t, e, n, r, i, o, s, a, u, l = X(), c = Qt() - wt < 500, f = _.tween;
            !(c || Math.abs(W.getVelocity()) < 10) || f || Ke || bt === l ? W.isActive && bt !== l && P.restart(!0) : (t = (l - w) / T,
            e = x && !q ? x.totalProgress() : t,
            n = !c && (e - rt) / (Qt() - Ge) * 1e3 || 0,
            r = Wt.utils.clamp(-t, 1 - t, sn(n / 2) * n / .185),
            i = t + (!1 === g.inertia ? 0 : r),
            o = $e(0, 1, m(i, W)),
            s = Math.round(w + o * T),
            c = g.onStart,
            a = g.onInterrupt,
            u = g.onComplete,
            l <= C && w <= l && s !== l && (f && !f._initted && f.data <= sn(s - l) || (!1 === g.inertia && (r = o - t),
            _(s, {
                duration: d(sn(.185 * Math.max(sn(i - e), sn(o - e)) / n / .05 || 0)),
                ease: g.ease || "power3",
                data: sn(s - l),
                onInterrupt: function() {
                    return P.restart(!0) && a && a(W)
                },
                onComplete: function() {
                    W.update(),
                    bt = X(),
                    nt = rt = x && !q ? x.totalProgress() : W.progress,
                    ft && ft(W),
                    u && u(W)
                }
            }, l, r * T, s - l - r * T),
            c && c(W, _.tween))))
        }).pause()),
        i && (gn[i] = W),
        t = (t = (B = W.trigger = Mt(B || N)) && B._gsap && B._gsap.stRevert) && t(W),
        N = !0 === N ? B : Mt(N),
        jt(p) && (p = {
            targets: B,
            className: p
        }),
        N && (!1 !== L && L !== te && (L = !(!L && N.parentNode && N.parentNode.style && "flex" === Ht(N.parentNode).display) && Jt),
        W.pin = N,
        (r = Wt.core.getCache(N)).spacer ? $ = r.pinState : (e && ((e = Mt(e)) && !e.nodeType && (e = e.current || e.nativeElement),
        r.spacerIsNative = !!e,
        e) && (r.spacerState = He(e)),
        r.spacer = F = e || Yt.createElement("div"),
        F.classList.add("pin-spacer"),
        i && F.classList.add("pin-spacer-" + i),
        r.pinState = $ = He(N)),
        !1 !== y.force3D && Wt.set(N, {
            force3D: !0
        }),
        W.spacer = F = r.spacer,
        n = Ht(N),
        D = n[L + j.os2],
        Q = Wt.getProperty(N),
        v = Wt.quickSetter(N, j.a, ee),
        qe(N, F, n),
        K = He(N)),
        a && (e = Fe(a) ? ke(a, hn) : hn,
        E = Ne("scroller-start", i, H, j, e, 0),
        V = Ne("scroller-end", i, H, j, e, 0, E),
        n = E["offset" + j.op.d2],
        a = Mt(ie(H, "content") || H),
        Y = this.markerStart = Ne("start", i, a, j, e, n, 0, R),
        Ct = this.markerEnd = Ne("end", i, a, j, e, n, 0, R),
        R && (ot = Wt.quickSetter([Y, Ct], j.a, ee)),
        z || Bt.length && !0 === ie(H, "fixedMarkers") || (n = Ht(e = I ? Vt : H).position,
        e.style.position = "absolute" === n || "fixed" === n ? n : "relative",
        Wt.set([E, V], {
            force3D: !0
        }),
        J = Wt.quickSetter(E, j.a, ee),
        et = Wt.quickSetter(V, j.a, ee))),
        R && (u = R.vars.onUpdate,
        l = R.vars.onUpdateParams,
        R.eventCallback("onUpdate", function() {
            W.update(0, 0, 1),
            u && u.apply(R, l || [])
        })),
        W.previous = function() {
            return ne[ne.indexOf(W) - 1]
        }
        ,
        W.next = function() {
            return ne[ne.indexOf(W) + 1]
        }
        ,
        W.revert = function(t, e) {
            if (!e)
                return W.kill(!0);
            var n, r = !1 !== t || !W.enabled, i = $t;
            r !== W.isReverted && (r && (O = Math.max(X(), W.scroll.rec || 0),
            M = W.progress,
            it = x && x.progress()),
            Y && [Y, Ct, E, V].forEach(function(t) {
                return t.style.display = r ? "none" : "block"
            }),
            r && ($t = W).update(r),
            !N || ht && W.isActive || (r ? (n = N,
            e = F,
            Xe(t = $),
            (t = n._gsap).spacerIsNative ? Xe(t.spacerState) : n._gsap.swappedIn && (t = e.parentNode) && (t.insertBefore(n, e),
            t.removeChild(e)),
            n._gsap.swappedIn = !1) : qe(N, F, Ht(N), A)),
            r || W.update(r),
            $t = i,
            W.isReverted = r)
        }
        ,
        W.refresh = function(t, e) {
            if (!$t && W.enabled || e)
                if (N && t && Zt)
                    It(re, "scrollEnd", je);
                else {
                    !Kt && yt && yt(W),
                    $t = W,
                    wt = Qt(),
                    _.tween && (_.tween.kill(),
                    _.tween = 0),
                    k && k.pause(),
                    lt && x && x.revert({
                        kill: !1
                    }).invalidate(),
                    W.isReverted || W.revert(!0, !0),
                    W._subPinOffset = !1;
                    for (var n, r, i, o, s, a, u, l = xt(), c = _t(), f = R ? R.duration() : Ee(H, j), d = T <= .01, h = 0, p = 0, e = y.end, t = y.endTrigger || B, g = y.start || (0 !== y.start && B ? N ? "0 0" : "0 100%" : 0), m = W.pinnedContainer = y.pinnedContainer && Mt(y.pinnedContainer), v = B && Math.max(0, ne.indexOf(W)) || 0, D = v; D--; )
                        (i = ne[D]).end || i.refresh(0, 1) || ($t = W),
                        !(o = i.pin) || o !== B && o !== N && o !== m || i.isReverted || ((a = a || []).unshift(i),
                        i.revert(!0, !0)),
                        i !== ne[D] && (v--,
                        D--);
                    for (qt(g) && (g = g(W)),
                    w = Ie(g, B, l, j, X(), Y, E, W, c, Dt, z, f, R) || (N ? -.001 : 0),
                    jt(e = qt(e) ? e(W) : e) && !e.indexOf("+=") && (~e.indexOf(" ") ? e = (jt(g) ? g.split(" ")[0] : "") + e : (h = Be(e.substr(2), l),
                    e = jt(g) ? g : (R ? Wt.utils.mapRange(0, R.duration(), R.scrollTrigger.start, R.scrollTrigger.end, w) : w) + h,
                    t = B)),
                    C = Math.max(w, Ie(e || (t ? "100% 0" : f), t, l, j, X() + h, Ct, V, W, c, Dt, z, f, R)) || -.001,
                    T = C - w || (w -= .01) && .001,
                    h = 0,
                    D = v; D--; )
                        (o = (i = ne[D]).pin) && i.start - i._pinPush <= w && !R && 0 < i.end && (n = i.end - i.start,
                        (o === B && i.start - i._pinPush < w || o === m) && !Te(g) && (h += n * (1 - i.progress)),
                        o === N) && (p += n);
                    if (w += h,
                    C += h,
                    d && (M = Wt.utils.clamp(0, 1, Wt.utils.normalize(w, C, O))),
                    W._pinPush = p,
                    Y && h && ((n = {})[j.a] = "+=" + h,
                    m && (n[j.p] = "-=" + X()),
                    Wt.set([Y, Ct], n)),
                    N)
                        n = Ht(N),
                        l = j === Lt,
                        c = X(),
                        Z = parseFloat(Q(j.a)) + p,
                        !f && 1 < C && ((u = {
                            style: u = (I ? Yt.scrollingElement || Ut : H).style,
                            value: u["overflow" + j.a.toUpperCase()]
                        }).style["overflow" + j.a.toUpperCase()] = "scroll"),
                        qe(N, F, n),
                        K = He(N),
                        r = Ye(N, !0),
                        f = z && se(H, l ? Nt : Lt)(),
                        L && ((A = [L + j.os2, T + p + ee]).t = F,
                        (D = L === Jt ? Pe(N, j) + T + p : 0) && A.push(j.d, D + ee),
                        Xe(A),
                        m && ne.forEach(function(t) {
                            t.pin === m && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0)
                        }),
                        z) && X(O),
                        z && ((s = {
                            top: r.top + (l ? c - w : f) + ee,
                            left: r.left + (l ? f : c - w) + ee,
                            boxSizing: "border-box",
                            position: "fixed"
                        })[an] = s.maxWidth = Math.ceil(r.width) + ee,
                        s[un] = s.maxHeight = Math.ceil(r.height) + ee,
                        s[te] = s.marginTop = s[te + ln] = s[te + fn] = s[te + cn] = "0",
                        s[Jt] = n[Jt],
                        s.paddingTop = n.paddingTop,
                        s[Jt + ln] = n[Jt + ln],
                        s[Jt + fn] = n[Jt + fn],
                        s[Jt + cn] = n[Jt + cn],
                        G = function(t, e) {
                            for (var n, r = [], i = t.length, o = ht ? 8 : 0; o < i; o += 2)
                                n = t[o],
                                r.push(n, n in e ? e[n] : t[o + 1]);
                            return r.t = t.t,
                            r
                        }($, s),
                        Kt) && X(0),
                        x ? (s = x._initted,
                        Ze(1),
                        x.render(x.duration(), !0, !0),
                        S = Q(j.a) - Z + T + p,
                        tt = 1 < Math.abs(T - S),
                        z && tt && G.splice(G.length - 2, 2),
                        x.render(0, !0, !0),
                        s || x.invalidate(!0),
                        x.parent || x.totalTime(x.totalTime()),
                        Ze(0)) : S = T,
                        u && (u.value ? u.style["overflow" + j.a.toUpperCase()] = u.value : u.style.removeProperty("overflow-" + j.a));
                    else if (B && X() && !R)
                        for (r = B.parentNode; r && r !== Vt; )
                            r._pinOffset && (w -= r._pinOffset,
                            C -= r._pinOffset),
                            r = r.parentNode;
                    a && a.forEach(function(t) {
                        return t.revert(!1, !0)
                    }),
                    W.start = w,
                    W.end = C,
                    b = U = Kt ? O : X(),
                    R || Kt || (b < O && X(O),
                    W.scroll.rec = 0),
                    W.revert(!1, !0),
                    P && (bt = -1,
                    W.isActive && X(w + T * M),
                    P.restart(!0)),
                    $t = 0,
                    x && q && (x._initted || it) && x.progress() !== it && x.progress(it, !0).render(x.time(), !0, !0),
                    (d || M !== W.progress || R) && (x && !q && x.totalProgress(R && w < -.001 && !M ? Wt.utils.normalize(w, C, 0) : M, !0),
                    W.progress = (b - w) / T === M ? 0 : M),
                    N && L && (F._pinOffset = Math.round(W.progress * S)),
                    k && k.invalidate(),
                    at && !Kt && at(W)
                }
        }
        ,
        W.getVelocity = function() {
            return (X() - U) / (Qt() - Ge) * 1e3 || 0
        }
        ,
        W.endAnimation = function() {
            Se(W.callbackAnimation),
            x && (k ? k.progress(1) : x.paused() ? q || Se(x, W.direction < 0, 1) : Se(x, x.reversed()))
        }
        ,
        W.labelToScroll = function(t) {
            return x && x.labels && (w || W.refresh() || w) + x.labels[t] / x.duration() * T || 0
        }
        ,
        W.getTrailing = function(e) {
            var t = ne.indexOf(W)
              , t = 0 < W.direction ? ne.slice(0, t).reverse() : ne.slice(t + 1);
            return (jt(e) ? t.filter(function(t) {
                return t.vars.preventOverlaps === e
            }) : t).filter(function(t) {
                return 0 < W.direction ? t.end <= w : t.start >= C
            })
        }
        ,
        W.update = function(t, e, n) {
            var r, i, o, s, a, u, l, c, f;
            R && !n && !t || (u = !0 === Kt ? O : W.scroll(),
            f = (c = t ? 0 : (u - w) / T) < 0 ? 0 : 1 < c ? 1 : c || 0,
            l = W.progress,
            e && (U = b,
            b = R ? X() : u,
            g) && (rt = nt,
            nt = x && !q ? x.totalProgress() : f),
            (f = ct && !f && N && !$t && !rn && Zt && w < u + (u - U) / (Qt() - Ge) * ct ? 1e-4 : f) !== l && W.enabled && (n = (s = (r = W.isActive = !!f && f < 1) != (!!l && l < 1)) || !!f != !!l,
            W.direction = l < f ? 1 : -1,
            W.progress = f,
            n && !$t && (i = f && !l ? 0 : 1 === f ? 1 : 1 === l ? 2 : 3,
            q) && (o = !s && "none" !== vt[i + 1] && vt[i + 1] || vt[i],
            a = x && ("complete" === o || "reset" === o || o in x)),
            gt && (s || a) && (a || ut || !x) && (qt(gt) ? gt(W) : W.getTrailing(gt).forEach(function(t) {
                return t.endAnimation()
            })),
            q || (!k || $t || rn ? x && x.totalProgress(f, !!$t) : (k._dp._time - k._start !== k._time && k.render(k._dp._time - k._start),
            k.resetTo ? k.resetTo("totalProgress", f, x._tTime / x._tDur) : (k.vars.totalProgress = f,
            k.invalidate().restart()))),
            N && (t && L && (F.style[L + j.os2] = D),
            z ? n && (c = !t && l < f && u < C + 1 && u + 1 >= Ee(H, j),
            ht && (t || !r && !c ? ze(N, F) : (e = Ye(N, !0),
            l = u - w,
            ze(N, Vt, e.top + (j === Lt ? l : 0) + ee, e.left + (j === Lt ? 0 : l) + ee))),
            Xe(r || c ? G : K),
            tt && f < 1 && r || v(Z + (1 !== f || c ? 0 : S))) : v(be(Z + S * f))),
            !g || _.tween || $t || rn || P.restart(!0),
            p && (s || dt && f && (f < 1 || !tn)) && Ve(p.targets).forEach(function(t) {
                return t.classList[r || dt ? "add" : "remove"](p.className)
            }),
            !h || q || t || h(W),
            n && !$t ? (q && (a && ("complete" === o ? x.pause().totalProgress(1) : "reset" === o ? x.restart(!0).pause() : "restart" === o ? x.restart(!0) : x[o]()),
            h) && h(W),
            !s && tn || (st && s && Ae(W, st),
            mt[i] && Ae(W, mt[i]),
            dt && (1 === f ? W.kill(!1, 1) : mt[i] = 0),
            s) || mt[i = 1 === f ? 1 : 3] && Ae(W, mt[i]),
            pt && !r && Math.abs(W.getVelocity()) > (Te(pt) ? pt : 2500) && (Se(W.callbackAnimation),
            k ? k.progress(1) : Se(x, "reverse" === o ? 1 : !f, 1))) : q && h && !$t && h(W)),
            et && (f = R ? u / R.duration() * (R._caScrollDist || 0) : u,
            J(f + (E._isFlipped ? 1 : 0)),
            et(f)),
            ot && ot(-u / R.duration() * (R._caScrollDist || 0)))
        }
        ,
        W.enable = function(t, e) {
            W.enabled || (W.enabled = !0,
            It(H, "resize", Re),
            It(I ? Yt : H, "scroll", Le),
            yt && It(re, "refreshInit", yt),
            !1 !== t && (W.progress = M = 0,
            b = U = bt = X()),
            !1 !== e && W.refresh())
        }
        ,
        W.getTween = function(t) {
            return t && _ ? _.tween : k
        }
        ,
        W.setPositions = function(t, e) {
            N && (Z += t - w,
            S += e - t - T,
            L === Jt) && W.adjustPinSpacing(e - t - T),
            W.start = w = t,
            W.end = C = e,
            T = e - t,
            W.update()
        }
        ,
        W.adjustPinSpacing = function(t) {
            var e;
            A && t && (e = A.indexOf(j.d) + 1,
            A[e] = parseFloat(A[e]) + t + ee,
            A[1] = parseFloat(A[1]) + t + ee,
            Xe(A))
        }
        ,
        W.disable = function(t, e) {
            if (W.enabled && (!1 !== t && W.revert(!0, !0),
            W.enabled = W.isActive = !1,
            e || k && k.pause(),
            O = 0,
            r && (r.uncache = 1),
            yt && zt(re, "refreshInit", yt),
            P && (P.pause(),
            _.tween) && _.tween.kill() && (_.tween = 0),
            !I)) {
                for (var n = ne.length; n--; )
                    if (ne[n].scroller === H && ne[n] !== W)
                        return;
                zt(H, "resize", Re),
                zt(H, "scroll", Le)
            }
        }
        ,
        W.kill = function(t, e) {
            W.disable(t, e),
            k && !e && k.kill(),
            i && delete gn[i];
            var n = ne.indexOf(W);
            0 <= n && ne.splice(n, 1),
            n === Gt && 0 < vn && Gt--,
            n = 0,
            ne.forEach(function(t) {
                return t.scroller === W.scroller && (n = 1)
            }),
            n || Kt || (W.scroll.rec = 0),
            x && (x.scrollTrigger = null,
            t && x.revert({
                kill: !1
            }),
            e || x.kill()),
            Y && [Y, Ct, E, V].forEach(function(t) {
                return t.parentNode && t.parentNode.removeChild(t)
            }),
            nn === W && (nn = 0),
            N && (r && (r.uncache = 1),
            n = 0,
            ne.forEach(function(t) {
                return t.pin === N && n++
            }),
            n || (r.spacer = 0)),
            y.onKill && y.onKill(W)
        }
        ,
        W.enable(!1, !1),
        t && t(W),
        x && x.add && !T ? Wt.delayedCall(.01, function() {
            return w || C || W.refresh()
        }) && (T = .01,
        w = C = 0) : W.refresh(),
        N && en !== mn && (c = en = mn,
        requestAnimationFrame(function() {
            return c === mn && Ue(!0)
        }))) : this.update = this.refresh = this.kill = Rt
    }
    ,
    re.register = function(t) {
        return E || (Wt = t || p(),
        h() && window.document && re.enable(),
        E = on),
        E
    }
    ,
    re.defaults = function(t) {
        if (t)
            for (var e in t)
                pn[e] = t[e];
        return pn
    }
    ,
    re.disable = function(e, n) {
        on = 0,
        ne.forEach(function(t) {
            return t[n ? "kill" : "disable"](e)
        }),
        zt(Xt, "wheel", Le),
        zt(Yt, "scroll", Le),
        clearInterval(S),
        zt(Yt, "touchcancel", Rt),
        zt(Vt, "touchstart", Rt),
        m(zt, Yt, "pointerdown,touchstart,mousedown", f),
        m(zt, Yt, "pointerup,touchend,mouseup", d),
        F.kill(),
        g(zt);
        for (var t = 0; t < Ot.length; t += 3)
            v(zt, Ot[t], Ot[t + 1]),
            v(zt, Ot[t], Ot[t + 2])
    }
    ,
    re.enable = function() {
        if (Xt = window,
        Yt = document,
        Ut = Yt.documentElement,
        Vt = Yt.body,
        Wt && (Ve = Wt.utils.toArray,
        $e = Wt.utils.clamp,
        Je = Wt.core.context || Rt,
        Ze = Wt.core.suppressOverwrites || Rt,
        z = Xt.history.scrollRestoration || "auto",
        G = Xt.pageYOffset,
        Wt.core.globals("ScrollTrigger", re),
        Vt)) {
            on = 1,
            function t() {
                return on && requestAnimationFrame(t)
            }(),
            k.register(Wt),
            re.isTouch = k.isTouch,
            I = k.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
            It(Xt, "wheel", Le),
            T = [Xt, Yt, Ut, Vt],
            Wt.matchMedia ? (re.matchMedia = function(t) {
                var e, n = Wt.matchMedia();
                for (e in t)
                    n.add(e, t[e]);
                return n
            }
            ,
            Wt.addEventListener("matchMediaInit", function() {
                return _()
            }),
            Wt.addEventListener("matchMediaRevert", function() {
                return x()
            }),
            Wt.addEventListener("matchMedia", function() {
                Ue(0, 1),
                C("matchMedia")
            }),
            Wt.matchMedia("(orientation: portrait)", function() {
                return y(),
                y
            })) : console.warn("Requires GSAP 3.11.0 or later"),
            y(),
            It(Yt, "scroll", Le);
            var t, e = Vt.style, n = e.borderTopStyle, r = Wt.core.Animation.prototype;
            for (r.revert || Object.defineProperty(r, "revert", {
                value: function() {
                    return this.time(-.01, !0)
                }
            }),
            e.borderTopStyle = "solid",
            r = Ye(Vt),
            Lt.m = Math.round(r.top + Lt.sc()) || 0,
            Nt.m = Math.round(r.left + Nt.sc()) || 0,
            n ? e.borderTopStyle = n : e.removeProperty("border-top-style"),
            S = setInterval(D, 250),
            Wt.delayedCall(.5, function() {
                return rn = 0
            }),
            It(Yt, "touchcancel", Rt),
            It(Vt, "touchstart", Rt),
            m(It, Yt, "pointerdown,touchstart,mousedown", f),
            m(It, Yt, "pointerup,touchend,mouseup", d),
            A = Wt.utils.checkPrefix("transform"),
            Z.push(A),
            E = Qt(),
            F = Wt.delayedCall(.2, Ue).pause(),
            L = [Yt, "visibilitychange", function() {
                var t = Xt.innerWidth
                  , e = Xt.innerHeight;
                Yt.hidden ? (B = t,
                N = e) : B === t && N === e || Re()
            }
            , Yt, "DOMContentLoaded", Ue, Xt, "load", Ue, Xt, "resize", Re],
            g(It),
            ne.forEach(function(t) {
                return t.enable(0, 1)
            }),
            t = 0; t < Ot.length; t += 3)
                v(zt, Ot[t], Ot[t + 1]),
                v(zt, Ot[t], Ot[t + 2])
        }
    }
    ,
    re.config = function(t) {
        "limitCallbacks"in t && (tn = !!t.limitCallbacks);
        var e = t.syncInterval;
        e && clearInterval(S) || (S = e) && setInterval(D, e),
        "ignoreMobileResize"in t && (j = 1 === re.isTouch && t.ignoreMobileResize),
        "autoRefreshEvents"in t && (g(zt),
        g(It, t.autoRefreshEvents || "none"),
        R = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
    }
    ,
    re.scrollerProxy = function(t, e) {
        var n = Mt(t)
          , r = Ot.indexOf(n)
          , t = we(n);
        ~r && Ot.splice(r, t ? 6 : 2),
        e && (t ? Bt.unshift(Xt, e, Vt, e, Ut, e) : Bt.unshift(n, e))
    }
    ,
    re.clearMatchMedia = function(e) {
        ne.forEach(function(t) {
            return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)
        })
    }
    ,
    re.isInViewport = function(t, e, n) {
        return e = (t = (jt(t) ? Mt(t) : t).getBoundingClientRect())[n ? an : un] * e || 0,
        n ? 0 < t.right - e && t.left + e < Xt.innerWidth : 0 < t.bottom - e && t.top + e < Xt.innerHeight
    }
    ,
    re.positionInViewport = function(t, e, n) {
        var r = (t = jt(t) ? Mt(t) : t).getBoundingClientRect()
          , t = r[n ? an : un]
          , e = null == e ? t / 2 : e in U ? U[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0;
        return n ? (r.left + e) / Xt.innerWidth : (r.top + e) / Xt.innerHeight
    }
    ,
    re.killAll = function(t) {
        ne.slice(0).forEach(function(t) {
            return "ScrollSmoother" !== t.vars.id && t.kill()
        }),
        !0 !== t && (t = V.killAll || [],
        V = {},
        t.forEach(function(t) {
            return t()
        }))
    }
    ,
    re);
    function re(t, e) {
        E || re.register(Wt) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        this.init(t, e)
    }
    function et(t, e, n, r) {
        return r < e ? t(r) : e < 0 && t(0),
        r < n ? (r - e) / (n - e) : n < 0 ? e / (e - n) : 1
    }
    function nt(t, e) {
        !0 === e ? t.style.removeProperty("touch-action") : t.style.touchAction = !0 === e ? "auto" : e ? "pan-" + e + (k.isTouch ? " pinch-zoom" : "") : "none",
        t === Ut && nt(Vt, e)
    }
    function rt(t) {
        var e, n = t.event, r = t.target, i = t.axis, o = (n.changedTouches ? n.changedTouches[0] : n).target, s = o._gsap || Wt.core.getCache(o), t = Qt();
        if (!s._isScrollT || 2e3 < t - s._isScrollT) {
            for (; o && o !== Vt && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !at[(e = Ht(o)).overflowY] && !at[e.overflowX]); )
                o = o.parentNode;
            s._isScroll = o && o !== r && !we(o) && (at[(e = Ht(o)).overflowY] || at[e.overflowX]),
            s._isScrollT = t
        }
        !s._isScroll && "x" !== i || (n.stopPropagation(),
        n._gsapAllow = !0)
    }
    function it(t, e, n, r) {
        return k.create({
            target: t,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: e,
            onWheel: r = r && rt,
            onPress: r,
            onDrag: r,
            onScroll: r,
            onEnable: function() {
                return n && It(Yt, k.eventTypes[0], ot, !1, !0)
            },
            onDisable: function() {
                return zt(Yt, k.eventTypes[0], ot, !0)
            }
        })
    }
    M.version = "3.11.5",
    M.saveStyles = function(t) {
        return t ? Ve(t).forEach(function(t) {
            var e;
            t && t.style && (0 <= (e = n.indexOf(t)) && n.splice(e, 5),
            n.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), Wt.core.getCache(t), Je()))
        }) : n
    }
    ,
    M.revert = function(t, e) {
        return _(!t, e)
    }
    ,
    M.create = function(t, e) {
        return new M(t,e)
    }
    ,
    M.refresh = function(t) {
        return t ? Re() : (E || M.register()) && Ue(!0)
    }
    ,
    M.update = function(t) {
        return ++Ot.cache && K(!0 === t ? 2 : 0)
    }
    ,
    M.clearScrollMemory = b,
    M.maxScroll = function(t, e) {
        return Ee(t, e ? Nt : Lt)
    }
    ,
    M.getScrollFunc = function(t, e) {
        return se(Mt(t), e ? Nt : Lt)
    }
    ,
    M.getById = function(t) {
        return gn[t]
    }
    ,
    M.getAll = function() {
        return ne.filter(function(t) {
            return "ScrollSmoother" !== t.vars.id
        })
    }
    ,
    M.isScrolling = function() {
        return !!Zt
    }
    ,
    M.snapDirectional = Oe,
    M.addEventListener = function(t, e) {
        ~(t = V[t] || (V[t] = [])).indexOf(e) || t.push(e)
    }
    ,
    M.removeEventListener = function(t, e) {
        0 <= (e = (t = V[t]) && t.indexOf(e)) && t.splice(e, 1)
    }
    ,
    M.batch = function(t, e) {
        var n, r = [], i = {}, o = e.interval || .016, s = e.batchMax || 1e9;
        for (n in e)
            i[n] = "on" === n.substr(0, 2) && qt(e[n]) && "onRefreshInit" !== n ? function(t) {
                var e = []
                  , n = []
                  , r = Wt.delayedCall(o, function() {
                    t(e, n),
                    e = [],
                    n = []
                }).pause();
                return function(t) {
                    e.length || r.restart(!0),
                    e.push(t.trigger),
                    n.push(t),
                    s <= e.length && r.progress(1)
                }
            }(e[n]) : e[n];
        return qt(s) && (s = s(),
        It(M, "refresh", function() {
            return s = e.batchMax()
        })),
        Ve(t).forEach(function(t) {
            var e = {};
            for (n in i)
                e[n] = i[n];
            e.trigger = t,
            r.push(M.create(e))
        }),
        r
    }
    ;
    function ot(t) {
        var e = ut.test(t.target.tagName);
        (e || st) && (t._gsapAllow = !0,
        st = e)
    }
    var st, at = {
        auto: 1,
        scroll: 1
    }, ut = /(input|label|select|textarea)/i;
    M.sort = function(t) {
        return ne.sort(t || function(t, e) {
            return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
        }
        )
    }
    ,
    M.observe = function(t) {
        return new k(t)
    }
    ,
    M.normalizeScroll = function(t) {
        var e, n, i, o, r, s, a, u, l, c, f, d, h, p, g, m, v, D, y, x, _, b, w, C, E;
        return void 0 === t ? P : !0 === t && P ? P.enable() : !1 === t ? P && P.kill() : (t = t instanceof k ? t : ((e = Fe(e = t) ? e : {}).preventDefault = e.isNormalizer = e.allowClicks = !0,
        e.type || (e.type = "wheel,touch"),
        e.debounce = !!e.debounce,
        e.id = e.id || "normalizer",
        c = e.normalizeScrollX,
        f = e.momentum,
        d = e.allowNestedScroll,
        h = e.onRelease,
        p = Mt(e.target) || Ut,
        g = (g = Wt.core.globals().ScrollSmoother) && g.get(),
        m = I && (e.content && Mt(e.content) || g && !1 !== e.content && !g.smooth() && g.content()),
        v = se(p, Lt),
        D = se(p, Nt),
        y = 1,
        x = (k.isTouch && Xt.visualViewport ? Xt.visualViewport.scale * Xt.visualViewport.width : Xt.outerWidth) / Xt.innerWidth,
        _ = 0,
        b = qt(f) ? function() {
            return f(n)
        }
        : function() {
            return f || 2.8
        }
        ,
        w = it(p, e.type, !0, d),
        E = C = Rt,
        m && Wt.set(m, {
            y: "+=0"
        }),
        e.ignoreCheck = function(t) {
            return I && "touchmove" === t.type && (r ? (requestAnimationFrame(T),
            e = be(n.deltaY / 2),
            e = E(v.v - e),
            m && e !== v.v + v.offset && (v.offset = e - v.v,
            e = be((parseFloat(m && m._gsap.y) || 0) - v.offset),
            m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)",
            m._gsap.y = e + "px",
            v.cacheID = Ot.cache,
            K()),
            !0) : (v.offset && S(),
            void (r = !0))) || 1.05 < y && "touchstart" !== t.type || n.isGesturing || t.touches && 1 < t.touches.length;
            var e
        }
        ,
        e.onPress = function() {
            r = !1;
            var t = y;
            y = be((Xt.visualViewport && Xt.visualViewport.scale || 1) / x),
            s.pause(),
            t !== y && nt(p, 1.01 < y || !c && "x"),
            a = D(),
            u = v(),
            F(),
            o = mn
        }
        ,
        e.onRelease = e.onGestureStart = function(t, e) {
            var n, r;
            v.offset && S(),
            e ? (Ot.cache++,
            e = b(),
            c && (r = (n = D()) + .05 * e * -t.velocityX / .227,
            e *= et(D, n, r, Ee(p, Nt)),
            s.vars.scrollX = C(r)),
            r = (n = v()) + .05 * e * -t.velocityY / .227,
            e *= et(v, n, r, Ee(p, Lt)),
            s.vars.scrollY = E(r),
            s.invalidate().duration(e).play(.01),
            (I && s.vars.scrollY >= i || i - 1 <= n) && Wt.to({}, {
                onUpdate: A,
                duration: e
            })) : l.restart(!0),
            h && h(t)
        }
        ,
        e.onWheel = function() {
            s._ts && s.pause(),
            1e3 < Qt() - _ && (o = 0,
            _ = Qt())
        }
        ,
        e.onChange = function(t, e, n, r, i) {
            mn !== o && F(),
            e && c && D(C(r[2] === e ? a + (t.startX - t.x) : D() + e - r[1])),
            n && (v.offset && S(),
            t = (r = i[2] === n) ? u + t.startY - t.y : v() + n - i[1],
            i = E(t),
            r && t !== i && (u += i - t),
            v(i)),
            (n || e) && K()
        }
        ,
        e.onEnable = function() {
            nt(p, !c && "x"),
            M.addEventListener("refresh", A),
            It(Xt, "resize", A),
            v.smooth && (v.target.style.scrollBehavior = "auto",
            v.smooth = D.smooth = !1),
            w.enable()
        }
        ,
        e.onDisable = function() {
            nt(p, !0),
            zt(Xt, "resize", A),
            M.removeEventListener("refresh", A),
            w.kill()
        }
        ,
        e.lockAxis = !1 !== e.lockAxis,
        ((n = new k(e)).iOS = I) && !v() && v(1),
        I && Wt.ticker.add(Rt),
        l = n._dc,
        s = Wt.to(n, {
            ease: "power4",
            paused: !0,
            scrollX: c ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: O(v, v(), function() {
                    return s.pause()
                })
            },
            onUpdate: K,
            onComplete: l.vars.onComplete
        }),
        n),
        P && P.target === t.target && P.kill(),
        we(t.target) && (P = t),
        t);
        function T() {
            return r = !1
        }
        function F() {
            i = Ee(p, Lt),
            E = $e(I ? 1 : 0, i),
            c && (C = $e(0, Ee(p, Nt))),
            o = mn
        }
        function S() {
            m._gsap.y = be(parseFloat(m._gsap.y) + v.offset) + "px",
            m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(m._gsap.y) + ", 0, 1)",
            v.offset = v.cacheID = 0
        }
        function A() {
            F(),
            s.isActive() && s.vars.scrollY > i && (v() > i ? s.progress(1) && v(i) : s.resetTo("scrollY", i))
        }
    }
    ,
    M.core = {
        _getVelocityProp: ae,
        _inputObserver: it,
        _scrollers: Ot,
        _proxies: Bt,
        bridge: {
            ss: function() {
                Zt || C("scrollStart"),
                Zt = Qt()
            },
            ref: function() {
                return $t
            }
        }
    },
    p() && Wt.registerPlugin(M),
    t.ScrollTrigger = M,
    t.default = M,
    "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";
    function e(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    function n() {
        return "undefined" != typeof window
    }
    function r() {
        return $ || n() && ($ = window.gsap) && $.registerPlugin && $
    }
    lt.register = function(t) {
        return G || ($ = t || r(),
        n() && window.document && (K = window,
        Q = document,
        Z = Q.documentElement,
        J = Q.body),
        $ && (tt = $.utils.toArray,
        et = $.utils.clamp,
        it = $.parseEase("expo"),
        at = $.core.context || function() {}
        ,
        ut = $.delayedCall(.2, function() {
            return nt.isRefreshing || rt && rt.refresh()
        }).pause(),
        nt = $.core.globals().ScrollTrigger,
        $.core.globals("ScrollSmoother", lt),
        J) && nt && (ot = nt.core._getVelocityProp,
        st = nt.core._inputObserver,
        lt.refresh = nt.refresh,
        G = 1)),
        G
    }
    ,
    e(lt.prototype, [{
        key: "progress",
        get: function() {
            return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
    }]);
    var $, G, K, Q, Z, J, tt, et, nt, rt, it, ot, st, at, ut, i = lt;
    function lt(e) {
        var r = this;
        function n() {
            return M.update(-A)
        }
        function t() {
            return f.style.overflow = "visible"
        }
        function i(t) {
            t.update();
            var e = t.getTween();
            e && (e.pause(),
            e._time = e._dur,
            e._tTime = e._tDur),
            y = !1,
            t.animation.progress(t.progress, !0)
        }
        function o(t, e) {
            (t !== A && !m || e) && (U && (t = Math.round(t)),
            F && (f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + t + ", 0, 1)",
            f._gsap.y = t + "px"),
            k = t - A,
            A = t,
            nt.isUpdating || lt.isRefreshing || nt.update())
        }
        function s(t) {
            return arguments.length ? (O.y = -(t = t < 0 ? 0 : t),
            y = !0,
            m ? A = -t : o(-t),
            nt.isRefreshing ? h.update() : T(t / S),
            this) : -A
        }
        function a(t) {
            b.scrollTop = 0,
            t.target.contains && t.target.contains(b) || Y && !1 === Y(r, t) || (nt.isInViewport(t.target) || t.target === I || r.scrollTo(t.target, !1, "center center"),
            I = t.target)
        }
        function u(t) {
            var n, r, i, o;
            w.forEach(function(e) {
                n = e.pins,
                o = e.markers,
                t.forEach(function(t) {
                    e.trigger && t.trigger && e !== t && (t.trigger === e.trigger || t.pinnedContainer === e.trigger || e.trigger.contains(t.trigger)) && (r = t.start,
                    i = (r - e.start - e.offset) / e.ratio - (r - e.start),
                    n.forEach(function(t) {
                        return i -= t.distance / e.ratio - t.distance
                    }),
                    t.setPositions(r + i, t.end + i),
                    t.markerStart && o.push($.quickSetter([t.markerStart, t.markerEnd], "y", "px")),
                    t.pin) && 0 < t.end && (i = t.end - t.start,
                    n.push({
                        start: t.start,
                        end: t.end,
                        distance: i,
                        trig: t
                    }),
                    e.setPositions(e.start, e.end + i),
                    e.vars.onRefresh(e))
                })
            })
        }
        function l() {
            t(),
            requestAnimationFrame(t),
            w && (w.forEach(function(t) {
                var e = t.start
                  , n = t.auto ? Math.min(nt.maxScroll(t.scroller), t.end) : e + (t.end - e) / t.ratio
                  , r = (n - t.end) / 2;
                e -= r,
                n -= r,
                t.offset = r || 1e-4,
                t.pins.length = 0,
                t.setPositions(Math.min(e, n), Math.max(e, n)),
                t.vars.onRefresh(t)
            }),
            u(nt.sort())),
            M.reset()
        }
        function c() {
            return nt.addEventListener("refresh", l)
        }
        function L() {
            return w && w.forEach(function(t) {
                return t.vars.onRefresh(t)
            })
        }
        function R() {
            return w && w.forEach(function(t) {
                return t.vars.onRefreshInit(t)
            }),
            L
        }
        function _(e, n, r, i) {
            return function() {
                var t = "function" == typeof n ? n(r, i) : n;
                return t || 0 === t || (t = i.getAttribute("data-" + E + e) || ("speed" === e ? 1 : 0)),
                i.setAttribute("data-" + E + e, t),
                "auto" === t ? t : parseFloat(t)
            }
        }
        G || lt.register($) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
        e = this.vars = e || {},
        rt && rt.kill(),
        at(rt = this);
        var f, b, d, h, w, p, g, j, q, m, v, H, D, y, I, z = e.smoothTouch, W = e.onUpdate, X = e.onStop, x = e.smooth, Y = e.onFocusIn, C = e.normalizeScroll, U = e.wholePixels, V = this, E = e.effectsPrefix || "", T = nt.getScrollFunc(K), F = 1 === nt.isTouch ? !0 === z ? .8 : parseFloat(z) || 0 : 0 === x || !1 === x ? 0 : parseFloat(x) || .8, S = F && +e.speed || 1, A = 0, k = 0, P = 1, M = ot(0), O = {
            y: 0
        }, B = "undefined" != typeof ResizeObserver && !1 !== e.autoResize && new ResizeObserver(function() {
            var t;
            nt.isRefreshing || ((t = nt.maxScroll(b)) < -A && s(t),
            ut.restart(!0))
        }
        );
        function N() {
            return d = f.clientHeight,
            f.style.overflow = "visible",
            J.style.height = K.innerHeight + (d - K.innerHeight) / S + "px",
            d - K.innerHeight
        }
        c(),
        nt.addEventListener("killAll", c),
        $.delayedCall(.5, function() {
            return P = 0
        }),
        this.scrollTop = s,
        this.scrollTo = function(t, e, n) {
            t = $.utils.clamp(0, nt.maxScroll(K), isNaN(t) ? r.offset(t, n) : +t),
            e ? m ? $.to(r, {
                duration: F,
                scrollTop: t,
                overwrite: "auto",
                ease: it
            }) : T(t) : s(t)
        }
        ,
        this.offset = function(t, e) {
            var n = (t = tt(t)[0]).style.cssText
              , r = nt.create({
                trigger: t,
                start: e || "top top"
            });
            return w && u([r]),
            e = r.start / S,
            r.kill(!1),
            t.style.cssText = n,
            $.core.getCache(t).uncache = 1,
            e
        }
        ,
        this.content = function(t) {
            return arguments.length ? ((t = tt(t || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || J.children[0]) !== f && (q = (f = t).getAttribute("style") || "",
            B && B.observe(f),
            $.set(f, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0"
            }),
            F || $.set(f, {
                clearProps: "transform"
            })),
            this) : f
        }
        ,
        this.wrapper = function(t) {
            return arguments.length ? (b = tt(t || "#smooth-wrapper")[0] || (e = f,
            (t = Q.querySelector(".ScrollSmoother-wrapper")) || ((t = Q.createElement("div")).classList.add("ScrollSmoother-wrapper"),
            e.parentNode.insertBefore(t, e),
            t.appendChild(e)),
            t),
            j = b.getAttribute("style") || "",
            N(),
            $.set(b, F ? {
                overflow: "hidden",
                position: "fixed",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            } : {
                overflow: "visible",
                position: "relative",
                width: "100%",
                height: "auto",
                top: "auto",
                bottom: "auto",
                left: "auto",
                right: "auto"
            }),
            this) : b;
            var e
        }
        ,
        this.effects = function(t, e) {
            if (w = w || [],
            !t)
                return w.slice(0);
            (t = tt(t)).forEach(function(t) {
                for (var e = w.length; e--; )
                    w[e].trigger === t && w[e].kill()
            });
            for (var n, r = (e = e || {}).speed, i = e.lag, o = e.effectsPadding, s = [], a = 0; a < t.length; a++)
                (n = function(s, t, e, n, r) {
                    function i() {
                        t = p(),
                        e = g(),
                        u = parseFloat(t) || 1,
                        d = (c = "auto" === t) ? 0 : .5,
                        f && f.kill(),
                        f = e && $.to(s, {
                            ease: it,
                            overwrite: !1,
                            y: "+=0",
                            duration: e
                        }),
                        l && (l.ratio = u,
                        l.autoSpeed = c)
                    }
                    function a() {
                        v.y = m + "px",
                        v.renderTransform(1),
                        i()
                    }
                    function o(t) {
                        var e, n, r, i, o;
                        h = c ? (a(),
                        e = s,
                        n = et(0, 1, -t.start / (t.end - t.start)),
                        r = e.parentNode || Z,
                        i = e.getBoundingClientRect(),
                        e = (o = r.getBoundingClientRect()).top - i.top,
                        r = o.bottom - i.bottom,
                        e = -(i = (Math.abs(e) > Math.abs(r) ? e : r) / (1 - n)) * n,
                        0 < i && (r = .5 == (r = o.height / (K.innerHeight + o.height)) ? 2 * o.height : 2 * Math.min(o.height, -i * r / (2 * r - 1)) * (n || 1),
                        e += n ? -r * n : -r / 2,
                        i += r),
                        x = (e = {
                            change: i,
                            offset: e
                        }).change,
                        e.offset) : (x = (t.end - t.start) * (1 - u),
                        0),
                        D.forEach(function(t) {
                            return x -= t.distance * (1 - u)
                        }),
                        t.vars.onUpdate(t),
                        f && f.progress(1)
                    }
                    r = ("function" == typeof r ? r(n, s) : r) || 0;
                    var u, l, c, f, d, h, p = _("speed", t, n, s), g = _("lag", e, n, s), m = $.getProperty(s, "y"), v = s._gsap, D = [], y = [], x = 0;
                    return i(),
                    (1 !== u || c || f) && (o(l = nt.create({
                        trigger: c ? s.parentNode : s,
                        start: "top bottom+=" + r,
                        end: "bottom top-=" + r,
                        scroller: b,
                        scrub: !0,
                        refreshPriority: -999,
                        onRefreshInit: a,
                        onRefresh: o,
                        onKill: function(t) {
                            0 <= (t = w.indexOf(t)) && w.splice(t, 1),
                            a()
                        },
                        onUpdate: function(t) {
                            var e, n, r, i = m + x * (t.progress - d), o = D.length, s = 0;
                            if (t.offset) {
                                if (o) {
                                    for (n = -A,
                                    r = t.end; o--; ) {
                                        if ((e = D[o]).trig.isActive || n >= e.start && n <= e.end)
                                            return void (f && (e.trig.progress += e.trig.direction < 0 ? .001 : -.001,
                                            e.trig.update(0, 0, 1),
                                            f.resetTo("y", parseFloat(v.y), -k, !0),
                                            P) && f.progress(1));
                                        n > e.end && (s += e.distance),
                                        r -= e.distance
                                    }
                                    i = m + s + x * (($.utils.clamp(t.start, t.end, n) - t.start - s) / (r - t.start) - d)
                                }
                                t = i + h,
                                i = Math.round(1e5 * t) / 1e5 || 0,
                                y.length && !c && y.forEach(function(t) {
                                    return t(i - s)
                                }),
                                f ? (f.resetTo("y", i, -k, !0),
                                P && f.progress(1)) : (v.y = i + "px",
                                v.renderTransform(1))
                            }
                        }
                    })),
                    $.core.getCache(l.trigger).stRevert = R,
                    l.startY = m,
                    l.pins = D,
                    l.markers = y,
                    l.ratio = u,
                    l.autoSpeed = c,
                    s.style.willChange = "transform"),
                    l
                }(t[a], r, i, a, o)) && s.push(n);
            return w.push.apply(w, s),
            s
        }
        ,
        this.sections = function(t, e) {
            return p = p || [],
            t ? (t = tt(t).map(function(e) {
                return nt.create({
                    trigger: e,
                    start: "top 120%",
                    end: "bottom -20%",
                    onToggle: function(t) {
                        e.style.opacity = t.isActive ? "1" : "0",
                        e.style.pointerEvents = t.isActive ? "all" : "none"
                    }
                })
            }),
            e && e.add ? p.push.apply(p, t) : p = t.slice(0),
            t) : p.slice(0)
        }
        ,
        this.content(e.content),
        this.wrapper(e.wrapper),
        this.render = function(t) {
            return o(t || 0 === t ? t : A)
        }
        ,
        this.getVelocity = function() {
            return M.getVelocity(-A)
        }
        ,
        nt.scrollerProxy(b, {
            scrollTop: s,
            scrollHeight: function() {
                return N() && J.scrollHeight
            },
            fixedMarkers: !1 !== e.fixedMarkers && !!F,
            content: f,
            getBoundingClientRect: function() {
                return {
                    top: 0,
                    left: 0,
                    width: K.innerWidth,
                    height: K.innerHeight
                }
            }
        }),
        nt.defaults({
            scroller: b
        }),
        (x = nt.getAll().filter(function(t) {
            return t.scroller === K || t.scroller === b
        })).forEach(function(t) {
            return t.revert(!0, !0)
        }),
        h = nt.create({
            animation: $.fromTo(O, {
                y: 0
            }, {
                y: function() {
                    return -N()
                },
                immediateRender: !1,
                ease: "none",
                data: "ScrollSmoother",
                duration: 100,
                onUpdate: function() {
                    var t;
                    this._dur && ((t = y) && (i(h),
                    O.y = A),
                    o(O.y, t),
                    n(),
                    W) && !m && W(V)
                }
            }),
            onRefreshInit: function(t) {
                var e;
                lt.isRefreshing = !0,
                w && (e = nt.getAll().filter(function(t) {
                    return !!t.pin
                }),
                w.forEach(function(n) {
                    n.vars.pinnedContainer || e.forEach(function(t) {
                        var e;
                        t.pin.contains(n.trigger) && ((e = n.vars).pinnedContainer = t.pin,
                        n.vars = null,
                        n.init(e, n.animation))
                    })
                })),
                t = t.getTween(),
                D = t && t._end > t._dp._time,
                H = A,
                O.y = 0,
                F && (1 === nt.isTouch && (b.style.position = "absolute"),
                b.scrollTop = 0,
                1 === nt.isTouch) && (b.style.position = "fixed")
            },
            onRefresh: function(t) {
                t.animation.invalidate(),
                t.setPositions(t.start, N() / S),
                D || i(t),
                O.y = -T() * S,
                o(O.y),
                P || t.animation.progress($.utils.clamp(0, 1, H / S / -t.end)),
                D && (t.progress -= .001,
                t.update()),
                lt.isRefreshing = !1
            },
            id: "ScrollSmoother",
            scroller: K,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: function() {
                return N() / S
            },
            onScrubComplete: function() {
                M.reset(),
                X && X(r)
            },
            scrub: F || !0
        }),
        this.smooth = function(t) {
            return arguments.length && (S = (F = t || 0) && +e.speed || 1,
            h.scrubDuration(t)),
            h.getTween() ? h.getTween().duration() : 0
        }
        ,
        h.getTween() && (h.getTween().vars.ease = e.ease || it),
        this.scrollTrigger = h,
        e.effects && this.effects(!0 === e.effects ? "[data-" + E + "speed], [data-" + E + "lag]" : e.effects, {
            effectsPadding: e.effectsPadding
        }),
        e.sections && this.sections(!0 === e.sections ? "[data-section]" : e.sections),
        x.forEach(function(t) {
            t.vars.scroller = b,
            t.revert(!1, !0),
            t.init(t.vars, t.animation)
        }),
        this.paused = function(t, e) {
            return arguments.length ? (!!m !== t && (t ? (h.getTween() && h.getTween().pause(),
            T(-A / S),
            M.reset(),
            (v = nt.normalizeScroll()) && v.disable(),
            (m = nt.observe({
                preventDefault: !0,
                type: "wheel,touch,scroll",
                debounce: !1,
                allowClicks: !0,
                onChangeY: function() {
                    return s(-A)
                }
            })).nested = st(Z, "wheel,touch,scroll", !0, !1 !== e)) : (m.nested.kill(),
            m.kill(),
            m = 0,
            v && v.enable(),
            h.progress = (-A / S - h.start) / (h.end - h.start),
            i(h))),
            this) : !!m
        }
        ,
        this.kill = this.revert = function() {
            r.paused(!1),
            i(h),
            h.kill();
            for (var t = (w || []).concat(p || []), e = t.length; e--; )
                t[e].kill();
            nt.scrollerProxy(b),
            nt.removeEventListener("killAll", c),
            nt.removeEventListener("refresh", l),
            b.style.cssText = j,
            f.style.cssText = q;
            var n = nt.defaults({});
            n && n.scroller === b && nt.defaults({
                scroller: K
            }),
            r.normalizer && nt.normalizeScroll(!1),
            clearInterval(g),
            rt = null,
            B && B.disconnect(),
            J.style.removeProperty("height"),
            K.removeEventListener("focusin", a)
        }
        ,
        this.refresh = function(t, e) {
            return h.refresh(t, e)
        }
        ,
        C && (this.normalizer = nt.normalizeScroll(!0 === C ? {
            debounce: !0,
            content: !F && f
        } : C)),
        nt.config(e),
        "overscrollBehavior"in K.getComputedStyle(J) && $.set([J, Z], {
            overscrollBehavior: "none"
        }),
        "scrollBehavior"in K.getComputedStyle(J) && $.set([J, Z], {
            scrollBehavior: "auto"
        }),
        K.addEventListener("focusin", a),
        g = setInterval(n, 250),
        "loading" !== Q.readyState && requestAnimationFrame(function() {
            return nt.refresh()
        })
    }
    i.version = "3.11.5",
    i.create = function(t) {
        return rt && t && rt.content() === tt(t.content)[0] ? rt : new i(t)
    }
    ,
    i.get = function() {
        return rt
    }
    ,
    r() && $.registerPlugin(i),
    t.ScrollSmoother = i,
    t.default = i,
    "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";
    function e() {
        return "undefined" != typeof window
    }
    function n() {
        return d || e() && (d = window.gsap) && d.registerPlugin && d
    }
    function a(t) {
        return "string" == typeof t
    }
    function u(t) {
        return "function" == typeof t
    }
    function p(t, e) {
        var n = "x" === e ? "Width" : "Height"
          , r = "scroll" + n
          , e = "client" + n;
        return t === g || t === i || t === s ? Math.max(i[r], s[r]) - (g["inner" + n] || i[e] || s[e]) : t[r] - t["offset" + n]
    }
    function l(t, e) {
        var n = "scroll" + ("x" === e ? "Left" : "Top");
        return t === g && (null != t.pageXOffset ? n = "page" + e.toUpperCase() + "Offset" : t = null != i[n] ? i : s),
        function() {
            return t[n]
        }
    }
    function o(t, e) {
        var n, r;
        return (t = m(t)[0]) && t.getBoundingClientRect ? (n = t.getBoundingClientRect(),
        t = (r = !e || e === g || e === s) ? {
            top: i.clientTop - (g.pageYOffset || i.scrollTop || s.scrollTop || 0),
            left: i.clientLeft - (g.pageXOffset || i.scrollLeft || s.scrollLeft || 0)
        } : e.getBoundingClientRect(),
        t = {
            x: n.left - t.left,
            y: n.top - t.top
        },
        !r && e && (t.x += l(e, "x")(),
        t.y += l(e, "y")()),
        t) : console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
        }
    }
    function c(t, e, n, r, i) {
        return isNaN(t) || "object" == typeof t ? a(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + r - i : "max" === t ? p(e, n) - i : Math.min(p(e, n), o(t, e)[n] - i) : parseFloat(t) - i
    }
    function f() {
        d = n(),
        e() && d && "undefined" != typeof document && document.body && (g = window,
        s = document.body,
        i = document.documentElement,
        m = d.utils.toArray,
        d.config({
            autoKillThreshold: 7
        }),
        v = d.config(),
        h = 1)
    }
    var d, h, g, i, s, m, v, D, r = {
        version: "3.11.5",
        name: "scrollTo",
        rawVars: 1,
        register: function(t) {
            d = t,
            f()
        },
        init: function(t, e, n, r, i) {
            h || f();
            var o = this
              , s = d.getProperty(t, "scrollSnapType");
            o.isWin = t === g,
            o.target = t,
            o.tween = n,
            e = function(t, e, n, r) {
                if ("object" != typeof (t = u(t) ? t(e, n, r) : t))
                    return a(t) && "max" !== t && "=" !== t.charAt(1) ? {
                        x: t,
                        y: t
                    } : {
                        y: t
                    };
                if (t.nodeType)
                    return {
                        y: t,
                        x: t
                    };
                var i, o = {};
                for (i in t)
                    o[i] = "onAutoKill" !== i && u(t[i]) ? t[i](e, n, r) : t[i];
                return o
            }(e, r, t, i),
            o.vars = e,
            o.autoKill = !!e.autoKill,
            o.getX = l(t, "x"),
            o.getY = l(t, "y"),
            o.x = o.xPrev = o.getX(),
            o.y = o.yPrev = o.getY(),
            D = D || d.core.globals().ScrollTrigger,
            "smooth" === d.getProperty(t, "scrollBehavior") && d.set(t, {
                scrollBehavior: "auto"
            }),
            s && "none" !== s && (o.snap = 1,
            o.snapInline = t.style.scrollSnapType,
            t.style.scrollSnapType = "none"),
            null != e.x ? (o.add(o, "x", o.x, c(e.x, t, "x", o.x, e.offsetX || 0), r, i),
            o._props.push("scrollTo_x")) : o.skipX = 1,
            null != e.y ? (o.add(o, "y", o.y, c(e.y, t, "y", o.y, e.offsetY || 0), r, i),
            o._props.push("scrollTo_y")) : o.skipY = 1
        },
        render: function(t, e) {
            for (var n, r, i, o = e._pt, s = e.target, a = e.tween, u = e.autoKill, l = e.xPrev, c = e.yPrev, f = e.isWin, d = e.snap, h = e.snapInline; o; )
                o.r(t, o.d),
                o = o._next;
            n = f || !e.skipX ? e.getX() : l,
            i = (r = f || !e.skipY ? e.getY() : c) - c,
            c = n - l,
            l = v.autoKillThreshold,
            e.x < 0 && (e.x = 0),
            e.y < 0 && (e.y = 0),
            u && (!e.skipX && (l < c || c < -l) && n < p(s, "x") && (e.skipX = 1),
            !e.skipY && (l < i || i < -l) && r < p(s, "y") && (e.skipY = 1),
            e.skipX) && e.skipY && (a.kill(),
            e.vars.onAutoKill) && e.vars.onAutoKill.apply(a, e.vars.onAutoKillParams || []),
            f ? g.scrollTo(e.skipX ? n : e.x, e.skipY ? r : e.y) : (e.skipY || (s.scrollTop = e.y),
            e.skipX || (s.scrollLeft = e.x)),
            !d || 1 !== t && 0 !== t || (r = s.scrollTop,
            n = s.scrollLeft,
            h ? s.style.scrollSnapType = h : s.style.removeProperty("scroll-snap-type"),
            s.scrollTop = r + 1,
            s.scrollLeft = n + 1,
            s.scrollTop = r,
            s.scrollLeft = n),
            e.xPrev = e.x,
            e.yPrev = e.y,
            D && D.update()
        },
        kill: function(t) {
            var e = "scrollTo" === t;
            !e && "scrollTo_x" !== t || (this.skipX = 1),
            !e && "scrollTo_y" !== t || (this.skipY = 1)
        }
    };
    r.max = p,
    r.getOffset = o,
    r.buildGetter = l,
    n() && d.registerPlugin(r),
    t.ScrollToPlugin = r,
    t.default = r,
    "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";
    var $ = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
    function G(t) {
        return n.getComputedStyle(t)
    }
    function K(t, e) {
        var n;
        return i(t) ? t : "string" == (n = typeof t) && !e && t ? o.call(it.querySelectorAll(t), 0) : t && "object" == n && "length"in t ? o.call(t, 0) : t ? [t] : []
    }
    function Q(t) {
        return "absolute" === t.position || !0 === t.absolute
    }
    function Z(t, e) {
        for (var n, r = e.length; -1 < --r; )
            if (n = e[r],
            t.substr(0, n.length) === n)
                return n.length
    }
    function J(t, e) {
        var n = ~(t = void 0 === t ? "" : t).indexOf("++")
          , r = 1;
        return n && (t = t.split("++").join("")),
        function() {
            return "<" + e + " style='position:relative;display:inline-block;'" + (t ? " class='" + t + (n ? r++ : "") + "'>" : ">")
        }
    }
    function tt(t, e, n) {
        var r = t.nodeType;
        if (1 === r || 9 === r || 11 === r)
            for (t = t.firstChild; t; t = t.nextSibling)
                tt(t, e, n);
        else
            3 !== r && 4 !== r || (t.nodeValue = t.nodeValue.split(e).join(n))
    }
    function et(t, e) {
        for (var n = e.length; -1 < --n; )
            t.push(e[n])
    }
    function nt(t, e, n) {
        for (var r; t && t !== e; ) {
            if (r = t._next || t.nextSibling)
                return r.textContent.charAt(0) === n;
            t = t.parentNode || t._parent
        }
    }
    function rt(t, e) {
        return parseFloat(e[t]) || 0
    }
    var it, n, r, ot = /(?:\r|\n|\t\t)/g, st = /(?:\s\s+)/g, i = Array.isArray, o = [].slice, e = ((e = s.prototype).split = function(t) {
        this.isSplit && this.revert(),
        this.vars = t = t || this.vars,
        this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var e, L, n, r = this.elements.length, R = t.tag || (t.span ? "span" : "div"), j = J(t.wordsClass, R), q = J(t.charsClass, R); -1 < --r; ) {
            n = this.elements[r],
            this._originals[r] = n.innerHTML,
            e = n.clientHeight,
            L = n.clientWidth,
            function t(e, n, r, i) {
                var o, s, a = K(e.childNodes), u = a.length, l = Q(n);
                if (3 !== e.nodeType || 1 < u) {
                    for (n.absolute = !1,
                    o = 0; o < u; o++)
                        3 === (s = a[o]).nodeType && !/\S+/.test(s.nodeValue) || (l && 3 !== s.nodeType && "inline" === G(s).display && (s.style.display = "inline-block",
                        s.style.position = "relative"),
                        s._isSplit = !0,
                        t(s, n, r, i));
                    return n.absolute = l,
                    e._isSplit = !0
                }
                var c, f, d, h, p, g, m, v = n, D = r, y = i, x = v.tag || (v.span ? "span" : "div"), _ = ~(v.type || v.split || "chars,words,lines").indexOf("chars"), b = Q(v), w = v.wordDelimiter || " ", C = " " !== w ? "" : b ? "&#173; " : " ", E = "</" + x + ">", T = 1, F = v.specialChars ? "function" == typeof v.specialChars ? v.specialChars : Z : null, S = it.createElement("div");
                for ((b = e.parentNode).insertBefore(S, e),
                S.textContent = e.nodeValue,
                b.removeChild(e),
                S = -1 !== (c = function t(e) {
                    var n = e.nodeType
                      , r = "";
                    if (1 === n || 9 === n || 11 === n) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            r += t(e)
                    } else if (3 === n || 4 === n)
                        return e.nodeValue;
                    return r
                }(e = S)).indexOf("<"),
                !1 !== v.reduceWhiteSpace && (c = c.replace(st, " ").replace(ot, "")),
                p = (c = S ? c.split("<").join("{{LT}}") : c).length,
                f = (" " === c.charAt(0) ? C : "") + D(),
                d = 0; d < p; d++)
                    if (g = c.charAt(d),
                    F && (m = F(c.substr(d), v.specialChars)))
                        g = c.substr(d, m || 1),
                        f += _ && " " !== g ? y() + g + "</" + x + ">" : g,
                        d += m - 1;
                    else if (g === w && c.charAt(d - 1) !== w && d) {
                        for (f += T ? E : "",
                        T = 0; c.charAt(d + 1) === w; )
                            f += C,
                            d++;
                        d === p - 1 ? f += C : ")" !== c.charAt(d + 1) && (f += C + D(),
                        T = 1)
                    } else
                        "{" === g && "{{LT}}" === c.substr(d, 6) ? (f += _ ? y() + "{{LT}}</" + x + ">" : "{{LT}}",
                        d += 5) : 55296 <= g.charCodeAt(0) && g.charCodeAt(0) <= 56319 || 65024 <= c.charCodeAt(d + 1) && c.charCodeAt(d + 1) <= 65039 ? (h = ((c.substr(d, 12).split($) || [])[1] || "").length || 2,
                        f += _ && " " !== g ? y() + c.substr(d, h) + "</" + x + ">" : c.substr(d, h),
                        d += h - 1) : f += _ && " " !== g ? y() + g + "</" + x + ">" : g;
                e.outerHTML = f + (T ? E : ""),
                S && tt(b, "{{LT}}", "<")
            }(n, t, j, q);
            {
                i = void 0;
                o = void 0;
                H = void 0;
                I = void 0;
                s = void 0;
                a = void 0;
                u = void 0;
                l = void 0;
                c = void 0;
                f = void 0;
                d = void 0;
                h = void 0;
                p = void 0;
                g = void 0;
                m = void 0;
                v = void 0;
                D = void 0;
                y = void 0;
                x = void 0;
                S = void 0;
                _ = void 0;
                b = void 0;
                z = void 0;
                W = void 0;
                X = void 0;
                Y = void 0;
                U = void 0;
                V = void 0;
                w = void 0;
                C = void 0;
                E = void 0;
                T = void 0;
                F = void 0;
                A = void 0;
                k = void 0;
                P = void 0;
                M = void 0;
                O = void 0;
                B = void 0;
                N = void 0;
                var i = n;
                var o = t;
                var H = this.chars;
                var I = this.words;
                var s = this.lines;
                var a = L;
                var u = e;
                var l, c, f, d, h, p, g, m, v, D, y, x, _ = rt("paddingLeft", S = G(i)), b = -999, z = rt("borderBottomWidth", S) + rt("borderTopWidth", S), W = rt("borderLeftWidth", S) + rt("borderRightWidth", S), X = rt("paddingTop", S) + rt("paddingBottom", S), Y = rt("paddingLeft", S) + rt("paddingRight", S), U = .2 * rt("fontSize", S), V = S.textAlign, w = [], C = [], E = [], T = o.wordDelimiter || " ", F = o.tag || (o.span ? "span" : "div"), S = o.type || o.split || "chars,words,lines", A = s && ~S.indexOf("lines") ? [] : null, k = ~S.indexOf("words"), P = ~S.indexOf("chars"), M = Q(o), O = o.linesClass, B = ~(O || "").indexOf("++"), N = [];
                for (B && (O = O.split("++").join("")),
                f = (c = i.getElementsByTagName("*")).length,
                h = [],
                l = 0; l < f; l++)
                    h[l] = c[l];
                if (A || M)
                    for (l = 0; l < f; l++)
                        ((p = (d = h[l]).parentNode === i) || M || P && !k) && (x = d.offsetTop,
                        A && p && Math.abs(x - b) > U && ("BR" !== d.nodeName || 0 === l) && (A.push(g = []),
                        b = x),
                        M && (d._x = d.offsetLeft,
                        d._y = x,
                        d._w = d.offsetWidth,
                        d._h = d.offsetHeight),
                        A) && ((d._isSplit && p || !P && p || k && p || !k && d.parentNode.parentNode === i && !d.parentNode._isSplit) && (g.push(d),
                        d._x -= _,
                        nt(d, i, T)) && (d._wordEnd = !0),
                        "BR" === d.nodeName) && (d.nextSibling && "BR" === d.nextSibling.nodeName || 0 === l) && A.push([]);
                for (l = 0; l < f; l++)
                    p = (d = h[l]).parentNode === i,
                    "BR" !== d.nodeName ? (M && (v = d.style,
                    k || p || (d._x += d.parentNode._x,
                    d._y += d.parentNode._y),
                    v.left = d._x + "px",
                    v.top = d._y + "px",
                    v.position = "absolute",
                    v.display = "block",
                    v.width = d._w + 1 + "px",
                    v.height = d._h + "px"),
                    !k && P ? d._isSplit ? (d._next = d.nextSibling,
                    d.parentNode.appendChild(d)) : d.parentNode._isSplit ? (d._parent = d.parentNode,
                    !d.previousSibling && d.firstChild && (d.firstChild._isFirst = !0),
                    d.nextSibling && " " === d.nextSibling.textContent && !d.nextSibling.nextSibling && N.push(d.nextSibling),
                    d._next = d.nextSibling && d.nextSibling._isFirst ? null : d.nextSibling,
                    d.parentNode.removeChild(d),
                    h.splice(l--, 1),
                    f--) : p || (x = !d.nextSibling && nt(d.parentNode, i, T),
                    d.parentNode._parent && d.parentNode._parent.appendChild(d),
                    x && d.parentNode.appendChild(it.createTextNode(" ")),
                    "span" === F && (d.style.display = "inline"),
                    w.push(d)) : d.parentNode._isSplit && !d._isSplit && "" !== d.innerHTML ? C.push(d) : P && !d._isSplit && ("span" === F && (d.style.display = "inline"),
                    w.push(d))) : A || M ? (d.parentNode && d.parentNode.removeChild(d),
                    h.splice(l--, 1),
                    f--) : k || i.appendChild(d);
                for (l = N.length; -1 < --l; )
                    N[l].parentNode.removeChild(N[l]);
                if (A) {
                    for (M && (D = it.createElement(F),
                    i.appendChild(D),
                    y = D.offsetWidth + "px",
                    x = D.offsetParent === i ? 0 : i.offsetLeft,
                    i.removeChild(D)),
                    v = i.style.cssText,
                    i.style.cssText = "display:none;"; i.firstChild; )
                        i.removeChild(i.firstChild);
                    for (m = " " === T && (!M || !k && !P),
                    l = 0; l < A.length; l++) {
                        for (g = A[l],
                        (D = it.createElement(F)).style.cssText = "display:block;text-align:" + V + ";position:" + (M ? "absolute;" : "relative;"),
                        O && (D.className = O + (B ? l + 1 : "")),
                        E.push(D),
                        f = g.length,
                        c = 0; c < f; c++)
                            "BR" !== g[c].nodeName && (d = g[c],
                            D.appendChild(d),
                            m && d._wordEnd && D.appendChild(it.createTextNode(" ")),
                            M) && (0 === c && (D.style.top = d._y + "px",
                            D.style.left = _ + x + "px"),
                            d.style.top = "0px",
                            x) && (d.style.left = d._x - x + "px");
                        0 === f ? D.innerHTML = "&nbsp;" : k || P || (function t(e) {
                            for (var n, r = K(e.childNodes), i = r.length, o = 0; o < i; o++)
                                (n = r[o])._isSplit ? t(n) : (o && 3 === n.previousSibling.nodeType ? n.previousSibling.nodeValue += (3 === n.nodeType ? n : n.firstChild).nodeValue : 3 !== n.nodeType && e.insertBefore(n.firstChild, n),
                                e.removeChild(n))
                        }(D),
                        tt(D, String.fromCharCode(160), " ")),
                        M && (D.style.width = y,
                        D.style.height = d._h + "px"),
                        i.appendChild(D)
                    }
                    i.style.cssText = v
                }
                M && (u > i.clientHeight && (i.style.height = u - X + "px",
                i.clientHeight < u) && (i.style.height = u + z + "px"),
                a > i.clientWidth) && (i.style.width = a - Y + "px",
                i.clientWidth < a) && (i.style.width = a + W + "px"),
                et(H, w),
                k && et(I, C),
                et(s, E)
            }
        }
        return this.chars.reverse(),
        this.words.reverse(),
        this.lines.reverse(),
        this.isSplit = !0,
        this
    }
    ,
    e.revert = function() {
        var n = this._originals;
        if (n)
            return this.elements.forEach(function(t, e) {
                return t.innerHTML = n[e]
            }),
            this.chars = [],
            this.words = [],
            this.lines = [],
            this.isSplit = !1,
            this;
        throw "revert() call wasn't scoped properly."
    }
    ,
    s.create = function(t, e) {
        return new s(t,e)
    }
    ,
    s);
    function s(t, e) {
        r || (it = document,
        n = window,
        r = 1),
        this.elements = K(t),
        this.chars = [],
        this.words = [],
        this.lines = [],
        this._originals = [],
        this.vars = e || {},
        this.split(e)
    }
    e.version = "3.3.0",
    t.SplitText = e,
    t.default = e,
    "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
}),
gsap.registerPlugin(ScrollTrigger, ScrollSmoother),
gsap.config({
    nullTargetWarn: !1
});
const bodyTag = document.querySelector("body")
  , wrapperTag = document.querySelector("#smooth-wrapper")
  , contentTag = document.querySelector("#smooth-content");
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
let customVal = "M0,0 C0.25,0 0.288,-0.004 0.404,0.112 0.54,0.248 0.487,0.707 0.594,0.882 0.65,0.974 0.698,1 1,1 ", customEase = CustomEase.create("custom", customVal), smoother;
function smoothScroll() {
    if (!isMobile())
        return smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.2,
            effects: !0,
            normalizeScroll: !0
        }),
        gsap.utils.toArray(".scroll-to").forEach(t=>{
            var e = t.dataset.scroll;
            t.addEventListener("click", function() {
                smoother.scrollTo("#" + e, !0, "top 0%")
            })
        }
        ),
        smoother
}
