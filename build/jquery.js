(function () {
  'use strict';

  /*! Sizzle v2.3.5-pre | (c) JS Foundation and other contributors | js.foundation */
  !function (e) {
    var t,
        n,
        r,
        i,
        o,
        u,
        l,
        a,
        c,
        s,
        f,
        d,
        p,
        h,
        g,
        m,
        y,
        v,
        w,
        b = "sizzle" + 1 * new Date(),
        N = e.document,
        x = 0,
        C = 0,
        E = ae(),
        A = ae(),
        D = ae(),
        S = ae(),
        T = function T(e, t) {
      return e === t && (f = !0), 0;
    },
        L = {}.hasOwnProperty,
        I = [],
        q = I.pop,
        B = I.push,
        R = I.push,
        $ = I.slice,
        k = function k(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }return -1;
    },
        H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        P = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        z = "\\[" + M + "*(" + P + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + M + "*\\]",
        F = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
        O = new RegExp(M + "+", "g"),
        j = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        G = new RegExp("^" + M + "*," + M + "*"),
        U = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        V = new RegExp(M + "|>"),
        X = new RegExp(F),
        J = new RegExp("^" + P + "$"),
        K = { ID: new RegExp("^#(" + P + ")"), CLASS: new RegExp("^\\.(" + P + ")"), TAG: new RegExp("^(" + P + "|[*])"), ATTR: new RegExp("^" + z), PSEUDO: new RegExp("^" + F), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + H + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
        Q = /HTML$/i,
        W = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Z = /^[^{]+\{\s*\[native \w/,
        _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
        ne = function ne(e, t) {
      var n = "0x" + e.slice(1) - 65536;return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function ie(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function oe() {
      d();
    },
        ue = ve(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, { dir: "parentNode", next: "legend" });try {
      R.apply(I = $.call(N.childNodes), N.childNodes), I[N.childNodes.length].nodeType;
    } catch (e) {
      R = { apply: I.length ? function (e, t) {
          B.apply(e, $.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;while (e[n++] = t[r++]) {}e.length = n - 1;
        } };
    }function le(e, t, r, i) {
      var o,
          l,
          c,
          s,
          f,
          h,
          y,
          v = t && t.ownerDocument,
          N = t ? t.nodeType : 9;if (r = r || [], "string" != typeof e || !e || 1 !== N && 9 !== N && 11 !== N) return r;if (!i && (d(t), t = t || p, g)) {
        if (11 !== N && (f = _.exec(e))) if (o = f[1]) {
          if (9 === N) {
            if (!(c = t.getElementById(o))) return r;if (c.id === o) return r.push(c), r;
          } else if (v && (c = v.getElementById(o)) && w(t, c) && c.id === o) return r.push(c), r;
        } else {
          if (f[2]) return R.apply(r, t.getElementsByTagName(e)), r;if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return R.apply(r, t.getElementsByClassName(o)), r;
        }if (n.qsa && !S[e + " "] && (!m || !m.test(e)) && (1 !== N || "object" !== t.nodeName.toLowerCase())) {
          if (y = e, v = t, 1 === N && V.test(e)) {
            (s = t.getAttribute("id")) ? s = s.replace(re, ie) : t.setAttribute("id", s = b), l = (h = u(e)).length;while (l--) {
              h[l] = "#" + s + " " + ye(h[l]);
            }y = h.join(","), v = ee.test(e) && ge(t.parentNode) || t;
          }try {
            return R.apply(r, v.querySelectorAll(y)), r;
          } catch (t) {
            S(e, !0);
          } finally {
            s === b && t.removeAttribute("id");
          }
        }
      }return a(e.replace(j, "$1"), t, r, i);
    }function ae() {
      var e = [];function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
      }return t;
    }function ce(e) {
      return e[b] = !0, e;
    }function se(e) {
      var t = p.createElement("fieldset");try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function fe(e, t) {
      var n = e.split("|"),
          i = n.length;while (i--) {
        r.attrHandle[n[i]] = t;
      }
    }function de(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (r) return r;if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function pe(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ue(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }function he(e) {
      return ce(function (t) {
        return t = +t, ce(function (n, r) {
          var i,
              o = e([], n.length, t),
              u = o.length;while (u--) {
            n[i = o[u]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }function ge(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }n = le.support = {}, o = le.isXML = function (e) {
      var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;return !Q.test(t || n && n.nodeName || "HTML");
    }, d = le.setDocument = function (e) {
      var t,
          i,
          u = e ? e.ownerDocument || e : N;return u != p && 9 === u.nodeType && u.documentElement ? (p = u, h = p.documentElement, g = !o(p), N != p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.attributes = se(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = se(function (e) {
        return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = Z.test(p.getElementsByClassName), n.getById = se(function (e) {
        return h.appendChild(e).id = b, !p.getElementsByName || !p.getElementsByName(b).length;
      }), n.getById ? (r.filter.ID = function (e) {
        var t = e.replace(te, ne);return function (e) {
          return e.getAttribute("id") === t;
        };
      }, r.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && g) {
          var n = t.getElementById(e);return n ? [n] : [];
        }
      }) : (r.filter.ID = function (e) {
        var t = e.replace(te, ne);return function (e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
        };
      }, r.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && g) {
          var n,
              r,
              i,
              o = t.getElementById(e);if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];i = t.getElementsByName(e), r = 0;while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }return [];
        }
      }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }return r;
        }return o;
      }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
      }, y = [], m = [], (n.qsa = Z.test(p.querySelectorAll)) && (se(function (e) {
        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]");
      }), se(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = p.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]"), e.querySelectorAll("*,:x"), m.push(",.*:");
      })), (n.matchesSelector = Z.test(v = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && se(function (e) {
        n.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), y.push("!=", F);
      }), m = m.length && new RegExp(m.join("|")), y = y.length && new RegExp(y.join("|")), t = Z.test(h.compareDocumentPosition), w = t || Z.test(h.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }return !1;
      }, T = t ? function (e, t) {
        if (e === t) return f = !0, 0;var r = !e.compareDocumentPosition - !t.compareDocumentPosition;return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == p || e.ownerDocument == N && w(N, e) ? -1 : t == p || t.ownerDocument == N && w(N, t) ? 1 : s ? k(s, e) - k(s, t) : 0 : 4 & r ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            u = [e],
            l = [t];if (!i || !o) return e == p ? -1 : t == p ? 1 : i ? -1 : o ? 1 : s ? k(s, e) - k(s, t) : 0;if (i === o) return de(e, t);n = e;while (n = n.parentNode) {
          u.unshift(n);
        }n = t;while (n = n.parentNode) {
          l.unshift(n);
        }while (u[r] === l[r]) {
          r++;
        }return r ? de(u[r], l[r]) : u[r] == N ? -1 : l[r] == N ? 1 : 0;
      }, p) : p;
    }, le.matches = function (e, t) {
      return le(e, null, null, t);
    }, le.matchesSelector = function (e, t) {
      if (d(e), n.matchesSelector && g && !S[t + " "] && (!y || !y.test(t)) && (!m || !m.test(t))) try {
        var r = v.call(e, t);if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (e) {
        S(t, !0);
      }return le(t, p, null, [e]).length > 0;
    }, le.contains = function (e, t) {
      return (e.ownerDocument || e) != p && d(e), w(e, t);
    }, le.attr = function (e, t) {
      (e.ownerDocument || e) != p && d(e);var i = r.attrHandle[t.toLowerCase()],
          o = i && L.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, le.escape = function (e) {
      return (e + "").replace(re, ie);
    }, le.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, le.uniqueSort = function (e) {
      var t,
          r = [],
          i = 0,
          o = 0;if (f = !n.detectDuplicates, s = !n.sortStable && e.slice(0), e.sort(T), f) {
        while (t = e[o++]) {
          t === e[o] && (i = r.push(o));
        }while (i--) {
          e.splice(r[i], 1);
        }
      }return s = null, e;
    }, i = le.getText = function (e) {
      var t,
          n = "",
          r = 0,
          o = e.nodeType;if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            n += i(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else while (t = e[r++]) {
        n += i(t);
      }return n;
    }, (r = le.selectors = { cacheLength: 50, createPseudo: ce, match: K, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || le.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && le.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = u(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = E[e + " "];return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = le.attr(r, e);return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(O, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
          };
        }, CHILD: function CHILD(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              u = "last" !== e.slice(-4),
              l = "of-type" === t;return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, a) {
            var c,
                s,
                f,
                d,
                p,
                h,
                g = o !== u ? "nextSibling" : "previousSibling",
                m = t.parentNode,
                y = l && t.nodeName.toLowerCase(),
                v = !a && !l,
                w = !1;if (m) {
              if (o) {
                while (g) {
                  d = t;while (d = d[g]) {
                    if (l ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                  }h = g = "only" === e && !h && "nextSibling";
                }return !0;
              }if (h = [u ? m.firstChild : m.lastChild], u && v) {
                w = (p = (c = (s = (f = (d = m)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2], d = p && m.childNodes[p];while (d = ++p && d && d[g] || (w = p = 0) || h.pop()) {
                  if (1 === d.nodeType && ++w && d === t) {
                    s[e] = [x, p, w];break;
                  }
                }
              } else if (v && (w = p = (c = (s = (f = (d = t)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === x && c[1]), !1 === w) while (d = ++p && d && d[g] || (w = p = 0) || h.pop()) {
                if ((l ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) && ++w && (v && ((s = (f = d[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [x, w]), d === t)) break;
              }return (w -= i) === r || w % r == 0 && w / r >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, t) {
          var n,
              i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || le.error("unsupported pseudo: " + e);return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function (e, n) {
            var r,
                o = i(e, t),
                u = o.length;while (u--) {
              e[r = k(e, o[u])] = !(n[r] = o[u]);
            }
          }) : function (e) {
            return i(e, 0, n);
          }) : i;
        } }, pseudos: { not: ce(function (e) {
          var t = [],
              n = [],
              r = l(e.replace(j, "$1"));return r[b] ? ce(function (e, t, n, i) {
            var o,
                u = r(e, null, i, []),
                l = e.length;while (l--) {
              (o = u[l]) && (e[l] = !(t[l] = o));
            }
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
          };
        }), has: ce(function (e) {
          return function (t) {
            return le(e, t).length > 0;
          };
        }), contains: ce(function (e) {
          return e = e.replace(te, ne), function (t) {
            return (t.textContent || i(t)).indexOf(e) > -1;
          };
        }), lang: ce(function (e) {
          return J.test(e || "") || le.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
            var n;do {
              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === h;
        }, focus: function focus(e) {
          return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: pe(!1), disabled: pe(!0), checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !r.pseudos.empty(e);
        }, header: function header(e) {
          return Y.test(e.nodeName);
        }, input: function input(e) {
          return W.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        }, first: he(function () {
          return [0];
        }), last: he(function (e, t) {
          return [t - 1];
        }), eq: he(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }), even: he(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }return e;
        }), odd: he(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }return e;
        }), lt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) {
            e.push(r);
          }return e;
        }), gt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }return e;
        }) } }).pseudos.nth = r.pseudos.eq;for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      r.pseudos[t] = function (e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }(t);
    }for (t in { submit: !0, reset: !0 }) {
      r.pseudos[t] = function (e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
        };
      }(t);
    }function me() {}me.prototype = r.filters = r.pseudos, r.setFilters = new me(), u = le.tokenize = function (e, t) {
      var n,
          i,
          o,
          u,
          l,
          a,
          c,
          s = A[e + " "];if (s) return t ? 0 : s.slice(0);l = e, a = [], c = r.preFilter;while (l) {
        n && !(i = G.exec(l)) || (i && (l = l.slice(i[0].length) || l), a.push(o = [])), n = !1, (i = U.exec(l)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(j, " ") }), l = l.slice(n.length));for (u in r.filter) {
          !(i = K[u].exec(l)) || c[u] && !(i = c[u](i)) || (n = i.shift(), o.push({ value: n, type: u, matches: i }), l = l.slice(n.length));
        }if (!n) break;
      }return t ? l.length : l ? le.error(e) : A(e, a).slice(0);
    };function ye(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }return r;
    }function ve(e, t, n) {
      var r = t.dir,
          i = t.next,
          o = i || r,
          u = n && "parentNode" === o,
          l = C++;return t.first ? function (t, n, i) {
        while (t = t[r]) {
          if (1 === t.nodeType || u) return e(t, n, i);
        }return !1;
      } : function (t, n, a) {
        var c,
            s,
            f,
            d = [x, l];if (a) {
          while (t = t[r]) {
            if ((1 === t.nodeType || u) && e(t, n, a)) return !0;
          }
        } else while (t = t[r]) {
          if (1 === t.nodeType || u) if (f = t[b] || (t[b] = {}), s = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
            if ((c = s[o]) && c[0] === x && c[1] === l) return d[2] = c[2];if (s[o] = d, d[2] = e(t, n, a)) return !0;
          }
        }return !1;
      };
    }function we(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;while (i--) {
          if (!e[i](t, n, r)) return !1;
        }return !0;
      } : e[0];
    }function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) {
        le(e, t[r], n);
      }return n;
    }function Ne(e, t, n, r, i) {
      for (var o, u = [], l = 0, a = e.length, c = null != t; l < a; l++) {
        (o = e[l]) && (n && !n(o, r, i) || (u.push(o), c && t.push(l)));
      }return u;
    }function xe(e, t, n, r, i, o) {
      return r && !r[b] && (r = xe(r)), i && !i[b] && (i = xe(i, o)), ce(function (o, u, l, a) {
        var c,
            s,
            f,
            d = [],
            p = [],
            h = u.length,
            g = o || be(t || "*", l.nodeType ? [l] : l, []),
            m = !e || !o && t ? g : Ne(g, d, e, l, a),
            y = n ? i || (o ? e : h || r) ? [] : u : m;if (n && n(m, y, l, a), r) {
          c = Ne(y, p), r(c, [], l, a), s = c.length;while (s--) {
            (f = c[s]) && (y[p[s]] = !(m[p[s]] = f));
          }
        }if (o) {
          if (i || e) {
            if (i) {
              c = [], s = y.length;while (s--) {
                (f = y[s]) && c.push(m[s] = f);
              }i(null, y = [], c, a);
            }s = y.length;while (s--) {
              (f = y[s]) && (c = i ? k(o, f) : d[s]) > -1 && (o[c] = !(u[c] = f));
            }
          }
        } else y = Ne(y === u ? y.splice(h, y.length) : y), i ? i(null, u, y, a) : R.apply(u, y);
      });
    }function Ce(e) {
      for (var t, n, i, o = e.length, u = r.relative[e[0].type], l = u || r.relative[" "], a = u ? 1 : 0, s = ve(function (e) {
        return e === t;
      }, l, !0), f = ve(function (e) {
        return k(t, e) > -1;
      }, l, !0), d = [function (e, n, r) {
        var i = !u && (r || n !== c) || ((t = n).nodeType ? s(e, n, r) : f(e, n, r));return t = null, i;
      }]; a < o; a++) {
        if (n = r.relative[e[a].type]) d = [ve(we(d), n)];else {
          if ((n = r.filter[e[a].type].apply(null, e[a].matches))[b]) {
            for (i = ++a; i < o; i++) {
              if (r.relative[e[i].type]) break;
            }return xe(a > 1 && we(d), a > 1 && ye(e.slice(0, a - 1).concat({ value: " " === e[a - 2].type ? "*" : "" })).replace(j, "$1"), n, a < i && Ce(e.slice(a, i)), i < o && Ce(e = e.slice(i)), i < o && ye(e));
          }d.push(n);
        }
      }return we(d);
    }function Ee(e, t) {
      var n = t.length > 0,
          i = e.length > 0,
          o = function o(_o, u, l, a, s) {
        var f,
            h,
            m,
            y = 0,
            v = "0",
            w = _o && [],
            b = [],
            N = c,
            C = _o || i && r.find.TAG("*", s),
            E = x += null == N ? 1 : Math.random() || .1,
            A = C.length;for (s && (c = u == p || u || s); v !== A && null != (f = C[v]); v++) {
          if (i && f) {
            h = 0, u || f.ownerDocument == p || (d(f), l = !g);while (m = e[h++]) {
              if (m(f, u || p, l)) {
                a.push(f);break;
              }
            }s && (x = E);
          }n && ((f = !m && f) && y--, _o && w.push(f));
        }if (y += v, n && v !== y) {
          h = 0;while (m = t[h++]) {
            m(w, b, u, l);
          }if (_o) {
            if (y > 0) while (v--) {
              w[v] || b[v] || (b[v] = q.call(a));
            }b = Ne(b);
          }R.apply(a, b), s && !_o && b.length > 0 && y + t.length > 1 && le.uniqueSort(a);
        }return s && (x = E, c = N), w;
      };return n ? ce(o) : o;
    }l = le.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = D[e + " "];if (!o) {
        t || (t = u(e)), n = t.length;while (n--) {
          (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
        }(o = D(e, Ee(i, r))).selector = e;
      }return o;
    }, a = le.select = function (e, t, n, i) {
      var o,
          a,
          c,
          s,
          f,
          d = "function" == typeof e && e,
          p = !i && u(e = d.selector || e);if (n = n || [], 1 === p.length) {
        if ((a = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = a[0]).type && 9 === t.nodeType && g && r.relative[a[1].type]) {
          if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;d && (t = t.parentNode), e = e.slice(a.shift().value.length);
        }o = K.needsContext.test(e) ? 0 : a.length;while (o--) {
          if (c = a[o], r.relative[s = c.type]) break;if ((f = r.find[s]) && (i = f(c.matches[0].replace(te, ne), ee.test(a[0].type) && ge(t.parentNode) || t))) {
            if (a.splice(o, 1), !(e = i.length && ye(a))) return R.apply(n, i), n;break;
          }
        }
      }return (d || l(e, p))(i, t, !g, n, !t || ee.test(e) && ge(t.parentNode) || t), n;
    }, n.sortStable = b.split("").sort(T).join("") === b, n.detectDuplicates = !!f, d(), n.sortDetached = se(function (e) {
      return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
    }), se(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && se(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), se(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(H, function (e, t, n) {
      var r;if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    });var Ae = e.Sizzle;le.noConflict = function () {
      return e.Sizzle === le && (e.Sizzle = Ae), le;
    }, "function" == typeof define && define.amd ? define(function () {
      return le;
    }) : "undefined" != typeof module && module.exports ? module.exports = le : e.Sizzle = le;
  }(window);

  var _toString = Object.prototype.toString;

  function isString(val) {
    return typeof val === 'string';
  }

  function isFunction(val) {
    return typeof val === 'function';
  }

  function isUndef(val) {
    return val === undefined || val === null;
  }

  function isDef(val) {
    return val !== undefined && val !== null;
  }

  function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]';
  }

  function isBoolean(obj) {
    return _toString.call(obj) === '[object Boolean]';
  }

  function isArray(obj) {
    return _toString.call(obj) === '[object Array]';
  }

  // 删除字符串多余空格
  function removeExtraSpace(val) {
    return isString(val) ? val.replace(/[' ']+/g, ' ') : '';
  }

  function formatQueryString(data) {
    return Object.keys(data).reduce(function (prev, cur) {
      return '' + (prev ? prev + '&' : '') + cur + '=' + data[cur];
    }, '');
  }

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var PENDING = 'PENDING';
  var FULFILLED = 'FULFILLED';
  var REJECTED = 'REJECTED';

  // 第一版实现了单个then和reject函数的执行，对于多个then的时候并没有存储一个回调队列

  var Promise$1 = function () {
    function Promise(fn) {
      classCallCheck(this, Promise);

      this._status = PENDING; // 状态
      this._value = undefined; // then的值
      this._fulfilledQuene = []; // resolved状态的回调函数队列
      this._rejectedQuene = []; // resolved状态的回调函数队列

      // 初始化
      if (!isFunction(fn)) {
        throw new Error('Promise must accept a function as a parameter');
      }
      try {
        fn && fn(this.resolve.bind(this), this.reject.bind(this));
      } catch (e) {
        this.reject(e);
      }
    }

    /**
     * @param {any} val 包括可能是Promise，增加判断
     */


    createClass(Promise, [{
      key: 'resolve',
      value: function resolve(val) {
        var _this = this;

        if (this._status !== PENDING) return;

        this._value = val;

        var runFullfilled = function runFullfilled(data) {
          while (_this._fulfilledQuene.length) {
            var callback = _this._fulfilledQuene.shift();
            callback(data);
          }
        };

        var runRejected = function runRejected(e) {
          while (_this._rejectedQuene.length) {
            var callback = _this._rejectedQuene.shift();
            callback(e);
          }
        };

        /**
         * 如果resolve的参数为Promise对象，则必须等待该Promise对象状态改变后,
         * 当前Promsie的状态才会改变，且状态取决于参数Promsie对象的状态
         */
        if (val instanceof Promise) {
          val.then(function (data) {
            _this._status = FULFILLED;
            _this._value = data;
            runFullfilled(data);
          }).catch(function (e) {
            _this._status = REJECTED;
            _this._value = e;
            runRejected(e);
          });
        } else {
          this._status = FULFILLED;
          this._value = val;
          runFullfilled(this._value);
        }
      }
    }, {
      key: 'reject',
      value: function reject(e) {
        if (this._status !== PENDING) return;

        this._status = REJECTED;
        this._value = e;

        while (this._rejectedQuene.length) {
          this._rejectedQuene.shift()(e);
        }
      }

      /**
      * then 返回一个新的 Promise 对象，并且需要将回调函数加入到执行队列中
      * @param {function} onFulfilled resolved状态的回调函数
      * @param {function} onRejected rejected状态的回调函数
      */

    }, {
      key: 'then',
      value: function then(onFulfilled, onRejected) {
        var _this2 = this;

        // eslint-disable-next-line promise/param-names
        return new Promise(function (onFulfilledNext, onRejectedNext) {
          /**
           * 注意：
           * 返回的新的 Promise 对象的状态依赖于  当前 then 方法  回调函数执行的情况以及返回值
           */
          var fulfilled = function fulfilled(value) {
            try {
              if (!isFunction(onFulfilled)) {
                onFulfilledNext(value);
              } else {
                var res = onFulfilled(value);
                if (res instanceof Promise) {
                  // 如果当前回调函数返回Promise对象，必须等待其状态改变后在执行下一个回调
                  res.then(onFulfilledNext, onRejectedNext);
                } else {
                  // 否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
                  onFulfilledNext(res);
                }
              }
            } catch (e) {
              onRejectedNext(e);
            }
          };

          // 逻辑同上
          var rejected = function rejected(error) {
            try {
              if (!isFunction(onRejected)) {
                onRejectedNext(error);
              } else {
                var res = onRejected(error);
                if (res instanceof Promise) {
                  res.then(onFulfilledNext, onRejectedNext);
                } else {
                  onFulfilledNext(res);
                }
              }
            } catch (e) {
              onRejectedNext(e);
            }
          };

          // 增加状态判断
          switch (_this2._status) {
            case PENDING:
              onFulfilled && _this2._fulfilledQuene.push(fulfilled);
              onRejected && _this2._rejectedQuene.push(rejected);
              break;
            case FULFILLED:
              fulfilled(_this2._value);
              break;
            case REJECTED:
              rejected(_this2._value);
              break;
          }
        });
      }

      /**
       * @param {function} onRejected rejected状态的回调函数
       */

    }, {
      key: 'catch',
      value: function _catch(onRejected) {
        // onRejected && this._rejectedQuene.push(onRejected) =>可转换为下面写法
        return this.then(undefined, onRejected);
      }
    }, {
      key: 'finally',
      value: function _finally(onFinally) {
        return this.then(onFinally, onFinally);
      }
    }]);
    return Promise;
  }();

  /**
   * DOM 属性
   * 获取和设置页面元素的 DOM 属性。
   **/

  /**
   * 增加or删除类名
   * @param {string} type {add:增加,remove:删除}
   * @param {string|function} className 为每个匹配元素所要增加/删除的一个或多个样式名。
   */
  function _addOrRemoveClass(type, className) {
    var nodes = this.element;
    switch (true) {
      case isString(className):
        // eslint-disable-next-line no-case-declarations
        var classes = removeExtraSpace(className).split(' ');
        nodes.forEach(function (node) {
          classes.map(function (item) {
            node.classList[type](item);
          });
        });
        break;
      case isFunction(className):
        nodes.forEach(function (node, nodeIndex) {
          node.classList[type](className(nodeIndex));
        });
        break;
    }

    return this;
  }

  // 获取匹配的元素集合中的第一个元素的属性的值。设置每一个匹配元素的一个或多个属性。
  function attr(attributeName, value) {
    var nodes = this.element;

    switch (true) {
      // .attr( attributeName )
      case isString(attributeName) && isUndef(value):
        nodes[0] && nodes[0].getAttribute(attributeName);
        break;
      // .attr( attributeName, value )
      case isString(attributeName) && isDef(value):
        nodes.forEach(function (node) {
          node.setAttribute(attributeName, value);
        });
        break;
      // .attr( attributes )
      case isPlainObject(attributeName) && isUndef(value):
        nodes.forEach(function (node) {
          Object.keys(attributeName).forEach(function (item, i) {
            node.setAttribute(item, attributeName[item]);
          });
        });
        break;
      // .attr( attributeName, function(index, attr) )
      case isString(attributeName) && isFunction(value):
        nodes.forEach(function (node, nodeIndex) {
          node.setAttribute(attributeName, value(nodeIndex, attributeName));
        });

        break;
    }

    return this;
  }

  // 确定任何一个匹配元素是否有被分配给定的（样式）类。
  function hasClass(className) {
    var nodes = this.element;
    return nodes.every(function (node) {
      return node.classList.contains(className);
    });
  }

  /**
   * 获取集合中第一个匹配元素的HTML内容 或 设置每一个匹配元素的html内容。
   * @param {undefined|string|function} htmlString
   */
  function html(htmlString) {
    var nodes = this.element;

    switch (true) {
      // .html( htmlString )
      case isString(htmlString):
        nodes.forEach(function (node) {
          node.innerHTML = htmlString;
        });
        break;
      // .html( function(index, oldhtml) )
      case isFunction(htmlString):
        nodes.forEach(function (node, nodeIndex) {
          htmlString.call(node, nodeIndex, node.innerHTML);
        });
        break;
      // .html()
      case isUndef(htmlString):
        return nodes[0] ? nodes[0].innerHTML : this;
      default:
        break;
    }

    return this;
  }

  // 获取匹配的元素集中第一个元素的属性（property）值为匹配的元素设置一个或多个属性
  function prop(propertyName, value) {
    var nodes = this.element;

    switch (true) {
      // .prop( propertyName )
      case isString(propertyName) && isUndef(value):
        return nodes[0] && nodes[0][propertyName];
      // .prop( propertyName, value )
      case isString(propertyName) && isDef(value):
        nodes.forEach(function (node) {
          node[propertyName](value);
        });
        break;
      // .prop( attributes )
      case isPlainObject(propertyName) && isUndef(value):
        nodes.forEach(function (node) {
          Object.keys(propertyName).forEach(function (item, i) {
            node[item] = propertyName[item];
          });
        });
        break;
      // .prop( propertyName, function(index, attr) )
      case isString(propertyName) && isFunction(value):
        nodes.forEach(function (node, nodeIndex) {
          var flag = value(nodeIndex, node[propertyName]);
          flag && (node[propertyName] = flag);
        });

        break;
    }

    return this;
  }

  // 为匹配的元素集合中的每个元素中移除一个属性（attribute）。
  function removeAttr(attributeName) {
    var nodes = this.element;

    isString(attributeName) && nodes.forEach(function (node) {
      node.removeAttribute(attributeName);
    });

    return this;
  }

  // 为每个匹配的元素添加指定的样式类名
  function addClass(className) {
    return _addOrRemoveClass.call(this, 'add', className);
  }

  // 移除集合中每个匹配元素上一个，多个或全部样式。
  function removeClass(className) {
    return _addOrRemoveClass.call(this, 'remove', className);
  }

  // 为集合中匹配的元素删除一个属性（property）。
  function removeProp(propertyName) {
    var nodes = this.element;
    nodes.forEach(function (node) {
      delete node[propertyName];
    });

    return this;
  }

  // 在匹配的元素集合中的每个元素上添加或删除一个或多个样式类,取决于这个样式类是否存在或值切换属性。即：如果存在（不存在）就删除（添加）一个类。
  function toggleClass(className, switchFlag) {
    var nodes = this.element;
    var classes = void 0;

    switch (true) {
      // .toggleClass( className )
      case isString(className) && isUndef(switchFlag):
        classes = removeExtraSpace(className).split(' ');
        nodes.forEach(function (node, nodeIndex) {
          classes.map(function (item) {
            node.classList.contains(item) ? node.classList.remove(item) : node.classList.add(item);
          });
        });
        break;
      // .toggleClass( className, switch )
      case isString(className) && isDef(switchFlag):
        classes = removeExtraSpace(className).split(' ');
        nodes.forEach(function (node) {
          classes.map(function (item) {
            switchFlag ? node.classList.remove(item) : node.classList.add(item);
          });
        });
        break;
      // .toggleClass( function(index, class, switch) [, switch ] )
      case isFunction(className) && isUndef(switchFlag):
        nodes.forEach(function (node, nodeIndex) {
          classes.map(function (item) {
            switchFlag = className(nodeIndex);
            switchFlag ? node.classList.remove(item) : node.classList.add(item);
          });
        });
        break;
      // .toggleClass( [switch ] )
      case (isBoolean(className) || isUndef(className)) && isUndef(switchFlag):
        nodes.forEach(function (node, nodeIndex) {
          if (isBoolean(className)) {
            switchFlag = className;
          }
        });
        break;
    }
    return this;
  }

  // 获取匹配的元素集合中第一个元素的当前值。设置匹配的元素集合中每个元素的值。
  function val(value) {
    var nodes = this.element;

    switch (true) {
      case isUndef(value):
        return nodes[0] && nodes[0].value;
      case isFunction(value):
        nodes.forEach(function (node, nodeIndex) {
          node.value = value(nodeIndex, node.value);
        });
        break;
      default:
        nodes.forEach(function (node) {
          node.value = value;
        });
        break;
    }
    return this;
  }

  // call,apply 传入执行this的时候是用在函数  执行 时候的
  // bind 是传一个类似回调函数是bind的

  var Dom = /*#__PURE__*/Object.freeze({
    attr: attr,
    hasClass: hasClass,
    html: html,
    prop: prop,
    removeAttr: removeAttr,
    addClass: addClass,
    removeClass: removeClass,
    removeProp: removeProp,
    toggleClass: toggleClass,
    val: val
  });

  /**
   * CSS
   * 设置和获取元素的 CSS 相关的属性。
   */

  function getStyles(element) {
    return element && window.getComputedStyle(element, null);
  }

  // 获取某css属性
  function getPropertyValue(element, propertyName) {
    return getStyles(element).getPropertyValue(propertyName);
  }

  function getPropertyNum(element, propertyName) {
    return getPropertyValue(element, propertyName).replace(/px/, '') * 1;
  }

  // 获取匹配元素集合中的第一个元素的样式属性的值设置每个匹配元素的一个或多个CSS属性。
  function css(propertyName, value) {
    var nodes = this.element;
    var firstNode = nodes[0];

    switch (true) {
      // .css( propertyNames )
      case isArray(propertyName) && isUndef(value):
        if (firstNode) {
          var obj = {};
          propertyName.map(function (name) {
            obj[name] = getPropertyValue(firstNode, name);
          });
          return obj;
        }
        break;

      // .css( propertyName )
      case isString(propertyName) && isUndef(value):
        return firstNode && getPropertyValue(firstNode, propertyName) || this;

      // .css( propertyName, function(index, value) )
      case isString(propertyName) && isFunction(value):
        nodes.map(function (node, index) {
          var callback = value;
          callback(index, getPropertyValue(node, propertyName));
        });
        break;

      // .css( propertyName, value )
      case isString(propertyName) && isDef(value):
        nodes.map(function (node, index) {
          node.style[propertyName] = value;
        });
        break;

      // .css( properties )
      case isPlainObject(propertyName) && isUndef(value):
        nodes.map(function (node) {
          for (var i in propertyName) {
            node.style[i] = propertyName[i];
          }
        });
        break;
    }

    return this;
  }

  /**
   * 设置元素width/height
   * @param {string} type width|height
   * @param {Boolean} isPadding 是否计算padding
   * @param {Boolean} isBorder 是否计算border
   */
  function _widthOrHeight() {
    var isPadding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var isBorder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var isContentBox = css.call(this, 'box-sizing') === 'content-box';
    var originValue = css.call(this, 'height').replace(/px/, '') * 1;
    var nodes = this.element;
    var firstNode = nodes[0];
    var val = originValue; // 最终返回结果
    if (isContentBox) {
      if (isPadding) {
        val += getPropertyNum(firstNode, 'padding-top') + getPropertyNum(firstNode, 'padding-bottom');
      }
      if (isBorder) {
        val += getPropertyNum(firstNode, 'border-top-width') + getPropertyNum(firstNode, 'border-bottom-width');
      }
    } else {
      if (isPadding && !isBorder) {
        val -= getPropertyNum(firstNode, 'border-top-width') + getPropertyNum(firstNode, 'border-bottom-width');
      } else if (!isPadding && !isBorder) {
        val -= getPropertyNum(firstNode, 'padding-top') + getPropertyNum(firstNode, 'padding-bottom');

        val -= getPropertyNum(firstNode, 'border-top-width') + getPropertyNum(firstNode, 'border-bottom-width');
      }
    }

    return val;
    // if (isUndef(value)) {
    //   return css.call(this, type)
    // } else {
    //   return css.call(this, type, value)
    // }
  }

  // 获取匹配元素集合中的第一个元素的当前计算高度值(返回内容高度数值)。设置每一个匹配元素的高度值。
  function height() {
    return _widthOrHeight.call(this, false, false);
  }

  // 为匹配的元素集合中获取第一个元素的当前计算高度值,包括padding，但是不包括border。
  function innerHeight() {
    return _widthOrHeight.call(this, true, false);
  }

  // 为匹配的元素集合中获取第一个元素的当前计算宽度值,包括padding，但是不包括border。
  function innerWidth() {}

  // 在匹配的元素集合中，获取的第一个元素的当前坐标，坐标相对于文档。 设置匹配的元素集合中每一个元素的坐标， 坐标相对于文档。
  function offset() {}

  /**
   * 获取元素集合中第一个元素的当前计算高度值,包括padding，border和选择性的margin。返回一个整数（不包含“px”）表示的值  ，或如果在一个空集合上调用该方法，则会返回 null。
   * @param {Boolean} includeMargin
   */
  function outerHeight(includeMargin) {
    return _widthOrHeight.call(this, true, true);
  }

  // 获取元素集合中第一个元素的当前计算宽度值,包括padding，border和选择性的margin。（注：返回一个整数（不包含“px”）表示的值，或如果在一个空集合上调用该方法，则会返回 null。）
  function outerWidth() {}

  // 获取匹配元素中第一个元素的当前坐标，相对于offset parent的坐标。( 译者注：offset parent指离该元素最近的而且被定位过的祖先元素 )
  function position() {}

  // 获取匹配的元素集合中第一个元素的当前水平滚动条的位置。设置每个匹配元素的水平滚动条位置。
  function scrollLeft() {}

  // 获取匹配的元素集合中第一个元素的当前垂直滚动条的位置或设置每个匹配元素的垂直滚动条位置。设置每个匹配元素的垂直滚动条位置
  function scrollTop() {}

  // 为匹配的元素集合中获取第一个元素的当前计算宽度值。给每个匹配的元素设置CSS宽度。
  function width(value) {}

  /**
   *  -----------------知识点补充------------------------
   * 获取元素的css方法，getComputedStyle以及getPropertyValue
   * 元素css.style.xx方法若样式没写获取无效
   * getComputedStyle是一个可以获取当前元素所有最终使用的CSS属性值。返回的是一个CSS样式声明对象([object CSSStyleDeclaration])，只读。
   */

  var Css = /*#__PURE__*/Object.freeze({
    css: css,
    height: height,
    innerHeight: innerHeight,
    innerWidth: innerWidth,
    offset: offset,
    outerHeight: outerHeight,
    outerWidth: outerWidth,
    position: position,
    scrollLeft: scrollLeft,
    scrollTop: scrollTop,
    width: width
  });

  /**
   * 回调对象
   * jQuery.Callbacks() 函数返回一个全能的对象，此对象对管理回调列表提供了强大的方式。它能够增加、删除、触发、禁用回调函数。
   */

  // 回调列表中添加一个回调或回调的集合。
  function add(callbacks) {
    var _this2 = this;

    if (!(isArray(callbacks) || isFunction(callbacks))) return this;

    // 判断回调列表是否已被锁定
    if (this.isLocked) return this;

    callbacks = isFunction(callbacks) ? [callbacks] : callbacks;
    callbacks.map(function (item) {
      // flags:unique: 确保一次只能添加一个回调(所以在列表中没有重复的回调)
      if (!_this2.flags.has('unique') || _this2.flags.has('unique') && !_this2.has(item)) {
        _this2.callbackList.push(item);
      }
    });

    return this;
  }

  // 禁用回调列表中的回调
  function disable() {
    this.isDisabled = true;
    return this;
  }

  // 确定回调列表是否已被禁用。
  function disabled() {
    return this.isDisabled;
  }

  function empty() {
    // 判断回调列表是否已被锁定
    if (this.isLocked) return this;

    this.callbackList = [];
    return this;
  }

  // 传入指定的参数调用所有的回调
  function fire() {
    return fireWith(this, arguments);
  }

  /**
   * 访问给定的上下文和参数列表中的所有回调。
   * @param {Object} context 该列表中的回调被触发的上下文引用
   * @param {Array} args 一个参数或参数列表传回给回调列表。
   */
  function fireWith(context, args) {
    var _this = context;
    if (_this.isDisabled) return _this;

    // flags:once-确保这个回调列表只执行（ .fire() ）一次
    if (_this.flags.has('once') && _this.fireCount >= 1) {
      return _this;
    }

    ++_this.fireCount;

    var callbackListLength = _this.callbackList.length;
    for (var i = 0; i < callbackListLength; i++) {
      var fn = _this.callbackList[i];
      var flag = fn.apply(_this, args);

      // flags:stopOnFalse-当一个回调返回false 时中断调用
      if (_this.flags.has('stopOnFalse') && flag === false) {
        return _this;
      }
    }
    return _this;
  }

  // 确定回调是否至少已经调用一次。
  function fired() {
    return this.fireCount > 0;
  }

  // 确定列表中是否提供一个回调
  function has(callback) {
    // return this.callbackList.includes(callback) 改为new Set()判断
    return new Set(this.callbackList).has(callback);
  }

  // 锁定回调列表的当前状态
  function lock() {
    this.isLocked = true;
    return this;
  }

  // 确定回调列表是否已被锁定。
  function locked() {
    return this.isLocked;
  }

  // 从回调列表中的删除一个回调或回调集合。
  function remove(callbacks) {
    if (!(isArray(callbacks) || isFunction(callbacks))) return this;

    // 判断回调列表是否已被锁定
    if (this.isLocked) return this;

    callbacks = new Set(isFunction(callbacks) ? [callbacks] : callbacks);

    var newCallbackList = [];
    this.callbackList.map(function (fn) {
      if (!callbacks.has(fn)) newCallbackList.push(fn);
    });

    this.callbackList = newCallbackList;

    return this;
  }
  /**
   * 一个多用途的回调列表对象，提供了强大的的方式来管理回调函数列表。
   * @param {String} flags [可选] 一个用空格标记分隔的标志可选列表,用来改变回调列表中的行为。
   * flags可选：
   * - once: 确保这个回调列表只执行（ .fire() ）一次(像一个递延 Deferred).
     - memory: 保持以前的值，将添加到这个列表的后面的最新的值立即执行调用任何回调 (像一个递延 Deferred).
     - unique: 确保一次只能添加一个回调(所以在列表中没有重复的回调).
     - stopOnFalse: 当一个回调返回false 时中断调用
   */
  function Callbacks() {
    var flags = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();

    if (isString(flags)) {
      var arr = removeExtraSpace(flags).split(' ');
      flags = new Set(arr);
    }
    return {
      flags: flags,
      store: [], // 存储列表
      isDisabled: false, // 是否禁止掉
      isLocked: false, // 是否锁住
      fireCount: 0, // 调用次数
      callbackList: [],
      add: add,
      disable: disable,
      disabled: disabled,
      empty: empty,
      fire: fire,
      fired: fired,
      has: has,
      lock: lock,
      locked: locked,
      remove: remove
    };
  }

  /**
   * 提供一种方法来执行一个或多个对象的回调函数， Deferred(延迟)对象通常表示异步事件。
   * @param {Object} deferreds 一个或多个延迟对象，或者普通的JavaScript对象。
   */

  function when(deferreds) {
    return '';
  }

  /**
   * 核心 API
   */
  var holdReadyCount = 0; // 延迟Ready数
  var isDOMContentLoaded = false; // dom是否load完
  var readyCallbacks = []; // ready回调队列

  // 执行ready队列里面的函数
  function _executeReadyCallback(jq, callback) {
    callback && readyCallbacks.push(callback);
    if (holdReadyCount <= 0) {
      try {
        for (var i = 0; i < readyCallbacks.length; i++) {
          var fn = readyCallbacks[i];
          fn && fn();
        }
      } catch (e) {
        jq.readyException(e);
      }
    }
  }

  /**
   * 暂停或恢复.ready() 事件的执行
   * @param {Boolean} hold 指示是否暂停或恢复被请求的ready事件
   */
  function holdReady(hold) {
    hold ? ++holdReadyCount : --holdReadyCount;

    if (holdReadyCount <= 0) {
      holdReadyCount = 0;
      _executeReadyCallback(this);
    }

    return this;
  }

  /**
   * 放弃jQuery控制$ 变量。
   * @param {Boolean} removeAll 判断是否从全局作用域中内去除所有jQuery变量(包括jQuery本身)
   */

  function noConflict(removeAll) {
    return this;
  }

  // A Promise-like object (or "thenable") that resolves when the document is ready.
  function ready(callback) {
    var _this = this;

    if (isDOMContentLoaded) {
      _executeReadyCallback(this, callback);
    } else {
      document.addEventListener('DOMContentLoaded', function () {
        isDOMContentLoaded = true;
        _executeReadyCallback(_this, callback);
      });
    }
    return this;
  }

  /**
   * 等效的函数中的函数同步抛出错误的时候，这个方法就会被触发。默认情况下，在一个超时，它重新抛出错误，因此它被记录在控制台中，并传递给window.onerror，而不是被静悄悄的吞噬。如果你想以不同的方式处理这种错误，可以覆盖此方法
   * @param {error} error An error thrown in the function wrapped in jQuery().
   */
  function readyException(error) {
    throw error;
  }

  /**
   * 提供一种方法来执行一个或多个对象的回调函数， Deferred(延迟)对象通常表示异步事件。
   */
  var when$1 = when;

  var Core = /*#__PURE__*/Object.freeze({
    holdReady: holdReady,
    noConflict: noConflict,
    ready: ready,
    readyException: readyException,
    when: when$1
  });

  /*
   * ajax请求默认参数
  */

  var _initData = {
    accepts: {}, // 内容类型发送请求头
    async: true, // 默认设置下，所有请求均为异步请求
    beforeSend: null, // 请求发送前的回调函数
    cache: false, // 如果设置为 false ，浏览器将不缓存此页面
    complete: null, // 请求完成后回调函数
    contents: null, // 一个以"{字符串/正则表达式}"配对的对象，根据给定的内容类型，解析请求的返回结果。
    contentType: '', // 发送信息至服务器时内容编码类型
    context: null, // 这个对象用于设置Ajax相关回调函数的上下文
    crossDomain: false, // 如果你想在同一域中强制跨域请求（如JSONP形式）
    data: {}, // Object, String  发送到服务器的数据
    dataFilter: null, // 一个函数被用来处理XMLHttpRequest的原始响应数据
    dataType: '', // 预期服务器返回的数据类型 (默认: Intelligent Guess (xml, json, script, or html))
    error: function error() {},
    global: true, // 无论怎么样这个请求将触发全局AJAX事件处理程序
    headers: {}, // 一个额外的"{键:值}"对映射到请求一起发送。
    ifModified: false, // 只有上次请求响应改变时，才允许请求成功
    isLocal: true, // 允许当前环境被认定为“本地”,默认：取决于当前的位置协议
    jsonp: false, // 在一个jsonp请求中重写回调函数的名字。
    jsonpCallback: undefined, // 为jsonp请求指定一个回调函数名。这个值将用来取代jQuery自动生成的随机函数名。
    mimeType: '', // 一个mime类型用来覆盖XHR的 MIME类型
    password: '', // 用于响应HTTP访问认证请求的密码
    /**
     * 默认情况下，通过data选项传递进来的数据，如果是一个对象(技术上讲只要不是字符串)，都会处理转化成一个查询字符串，以配合默认内容类型 "application/x-www-form-urlencoded"。如果要发送 DOM 树信息或其它不希望转换的信息，请设置为 false。
     */
    processData: true,
    scriptCharset: {}, // 仅适用于当"script"传输使用时（例如，跨域的"jsonp"或 dataType选项为"script" 和 "GET"类型）
    statusCode: {}, // 一组数值的HTTP代码和函数对象，当响应时调用了相应的代码。
    success: null, // 请求成功后的回调函数。这个函数传递3个参数：从服务器返回的数据，并根据dataType参数进行处理后的数据，一个描述状态的字符串;还有 jqXHR
    timeout: null, // 设置请求超时时间（毫秒）
    traditional: false, // 如果你想要用传统的方式来序列化数据，那么就设置为true
    type: 'GET', // 请求方式 ("POST" 或 "GET")， 默认为 "GET"。注意:其它 HTTP 请求方法，如 PUT 和 DELETE 也可以使用，但仅部分浏览器支持。
    url: window.location.href, // 发送请求的地址。
    username: '', // 响应HTTP访问认证请求的用户名
    xhr: '', // 回调创建XMLHttpRequest对象。当可用时默认为ActiveXObject（IE）中，否则为XMLHttpRequest。提供覆盖你自己的执行的XMLHttpRequest或增强工厂。
    xhrFields: {} // 一对“文件名-文件值”组成的映射，用于设定原生的 XHR对象。例如，如果需要的话，在进行跨域请求时，你可以用它来设置withCredentials为true。
  };

  var AjaxPromise = function (_Promise) {
    inherits(AjaxPromise, _Promise);

    function AjaxPromise() {
      classCallCheck(this, AjaxPromise);
      return possibleConstructorReturn(this, (AjaxPromise.__proto__ || Object.getPrototypeOf(AjaxPromise)).apply(this, arguments));
    }

    createClass(AjaxPromise, [{
      key: 'done',
      value: function done(onFulfilled, onRejected) {
        return this.then(onFulfilled, onRejected);
      }
    }, {
      key: 'fail',
      value: function fail(onRejected) {
        return this.catch(onRejected);
      }
    }, {
      key: 'always',
      value: function always(onFinally) {
        return this.finally(onFinally);
      }
    }]);
    return AjaxPromise;
  }(Promise$1);

  var count = 10000;
  var head = document.getElementsByTagName('head');
  var headEl = head && head[0];

  // 插入或删除script
  var insertOrRemoveScript = function insertOrRemoveScript(type, script) {
    if (!headEl) return;

    if (type === 'insert') headEl.appendChild(script);else headEl.removeChild(script);
  };

  var scriptAjax = function scriptAjax(url, success) {
    return new AjaxPromise(function (resolve, reject) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;

      // 只有把script当做dom节点插进去时，里面的代码才可以正常执行
      insertOrRemoveScript('insert', script);

      script.onload = function (e) {
        success && success();
        reject(e);
      };

      return script;
    });
  };

  // jsonp请求
  var jsonpAjax = function jsonpAjax(settings) {
    var st = settings;
    var jsonpMethod = st.jsonpCallback || 'jsonp_' + +new Date() + '_' + ++count;
    var url = st.url + ((st.url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + jsonpMethod + '&' + formatQueryString(st.data));
    var script = scriptAjax(url);

    return new AjaxPromise(function (resolve, reject) {
      window[jsonpMethod] = function (data) {
        st.success && st.success(data);
        resolve(data);

        // 删除script
        insertOrRemoveScript('remove', script);
      };

      script.onerror = function (e) {
        st.error && st.error(e);
        reject(e);
      };
    });
  };

  // XMLHttpRequest请求
  var xhrRequestAjax = function xhrRequestAjax(settings) {
    var st = settings;
    var xhr = new window.XMLHttpRequest(); // 新建XMLHttpRequest对象

    st.type = ['GET', 'POST', 'PUT', 'DELETE'].includes(st.type) ? st.type : 'GET';

    // 处理请求参数
    if (st.type === 'GET') {
      var url = st.url + ('' + (st.url.indexOf('?') >= 0 ? '&' : '?') + formatQueryString(st.data));
      st.url = url;
    }

    // xhrFields:设定原生的 XHR对象
    Object.keys(st.xhrFields).forEach(function (i) {
      xhr[i] = st.xhrFields[i];
    });

    st.beforeSend && st.beforeSend(xhr);

    st.timeout && (xhr.timeout = st.timeout);
    return new AjaxPromise(function (resolve, reject) {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          // 判断响应结果:
          if (xhr.status === 200) {
            st.success && st.success(xhr.response);
            resolve(xhr.response);
          } else {
            st.error && st.error(xhr);
            reject(xhr);
          }

          // 触发传入statusCode回调
          Object.keys(st.statusCode).forEach(function (i) {
            if (xhr.status === i) {
              st.statusCode[i]();
            }
          });

          st.complete && st.complete(xhr);
        }
      };

      xhr.ontimeout = function (e) {
        st.error && st.error(xhr);
        reject(xhr);
      };

      // 发送请求:
      xhr.open(st.type, st.url, st.async);

      Object.keys(st.accepts).forEach(function (i) {
        xhr.setRequestHeader(i, st.accepts[i]);
      });

      xhr.send();
    });
  };

  /**
   * fetch 请求
   * Fetch API 提供了一个 JavaScript接口，用于访问和操纵HTTP管道的部分，例如请求和响应。它还提供了一个全局 fetch()方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源。这种功能以前是使用  XMLHttpRequest实现的。
   */
  var fetchRequestAjax = function fetchRequestAjax(settings) {
    var st = settings;
    st.type = ['GET', 'POST', 'PUT', 'DELETE'].includes(st.type) ? st.type : 'GET';

    var option = {
      method: st.type,
      cache: st.cache ? 'force-cache' : 'no-cache',
      mode: 'same-origin'

      // 处理请求参数
    };if (st.type === 'GET') {
      var url = st.url + ('' + (st.url.indexOf('?') >= 0 ? '&' : '?') + formatQueryString(st.data));
      st.url = url;
    } else {
      option.body = JSON.stringify(st.data);
    }

    // 处理header
    Object.keys(st.accepts).forEach(function (i) {
      st.headers[i] = st.accepts[i];
    });

    option.headers = st.headers;

    return new AjaxPromise(function (resolve, reject) {
      window.fetch(st.url, option).then(function (response) {
        st.success && st.success(response);
        resolve(response.json());
      }).catch(function (e) {
        st.error && st.error(e);
        reject(e);
      });
    });
  };

  /**
   * Ajax 底层接口
   */

  var initData = _initData;

  /**
   * 执行一个异步的HTTP（Ajax）的请求。
   * @param {String} url 一个用来包含发送请求的URL字符串。
   * @param {Object} settings 一个以"{键:值}"组成的AJAX 请求设置。所有选项都是可选的
  */
  var ajax = function ajax(settings) {
    var st = void 0;

    if (isString(settings)) {
      st = Object.assign(initData, { url: settings }); // 合并传入参数
    } else if (isPlainObject(settings)) {
      st = Object.assign(initData, settings || {}); // 合并传入参数
    } else {
      throw new Error('参数错误');
    }

    if (st.jsonp) {
      return jsonpAjax(st);
    } else {
      return window.fetch ? fetchRequestAjax(st) : xhrRequestAjax(st);
    }
  };

  // 在每个请求之前被发送和$.ajax()处理它们前处理，设置自定义Ajax选项或修改现有选项。
  var ajaxPrefilter = function ajaxPrefilter() {};

  // 为以后要用到的Ajax请求设置默认的值
  var ajaxSetup = function ajaxSetup(options) {
    if (!isPlainObject(options)) {
      throw new Error('参数错误');
    }
    initData = Object.assign(initData, options);
  };

  // 创建一个对象，用于处理Ajax数据的实际传输。
  var ajaxTransport = function ajaxTransport() {};

  /**
   *  -----------------知识点补充------------------------
   * XMLHttpRequest
   * request.setRequestHeader是在request.open 和send之间调用的
   * Content-type
   * https://www.jianshu.com/p/ba40da728806
   */

  var index = {
    ajax: ajax,
    ajaxPrefilter: ajaxPrefilter,
    ajaxSetup: ajaxSetup,
    ajaxTransport: ajaxTransport
  };

  /**
   * sizzle引擎，根据传入选择器返回元素,根据传入选择器从右往左向dom属往上查询
   * https://github.com/jquery/sizzle
   */

  // 获取目标元素
  function _getTargetElement(el) {
    var element = void 0;
    if (el instanceof window.HTMLElement) {
      element = [el];
    } else if (isString(el)) {
      element = Sizzle(el);
    }

    return Array.prototype.slice.call(element); // 数组转换或者[].slice.call(arr);
  }

  // 2019/10/12 之前根据传入内容不断返回全局的jQuery,并且函数用了柯里化去返回这样会导致每次调用这个方法的数据共享，改进这个情况故返回一个新的对象
  function jquery(selector) {
    var elements = _getTargetElement(selector);

    return Object.assign({
      selector: selector,
      element: elements,
      length: elements.length
    }, Dom, Css);
  }

  // 合并方法到jquery上去
  var mergeMethods = Object.assign({}, Core, index);
  for (var i in mergeMethods) {
    jquery[i] = mergeMethods[i];
  }
  jquery.Callbacks = Callbacks;

  window.$ = window.Jquery = window.jquery = jquery;
  window.Promise = Promise$1;

}());
