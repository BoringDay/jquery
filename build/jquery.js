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
  // 删除字符串多余空格
  function removeExtraSpace(val) {
    return val.replace(/[' ']+/g, ' ').split(/\s/);
  }

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
        var classes = removeExtraSpace(className);
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
        classes = removeExtraSpace(className);
        nodes.forEach(function (node, nodeIndex) {
          classes.map(function (item) {
            node.classList.contains(item) ? node.classList.remove(item) : node.classList.add(item);
          });
        });
        break;
      // .toggleClass( className, switch )
      case isString(className) && isDef(switchFlag):
        classes = removeExtraSpace(className);
        nodes.forEach(function (node, nodeIndex) {
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

  var dom = /*#__PURE__*/Object.freeze({
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

  // 2019/10/12 之前根据传入内容不断返回全局的jQuery,并且函数用了柯里化去返回这样会导致每次调用这个方法的数据共享，改进这个情况故返回一个对象
  function jquery(selector) {
    var elements = _getTargetElement(selector);

    return Object.assign({
      selector: selector,
      element: _getTargetElement(selector),
      length: elements.length
    }, dom);
  }

  window.$ = window.Jquery = window.jquery = jquery;

}());
