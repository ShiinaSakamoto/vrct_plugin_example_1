import we from "react";
var Y = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function pr() {
  if (Ce) return $;
  Ce = 1;
  var f = we, h = Symbol.for("react.element"), R = Symbol.for("react.fragment"), P = Object.prototype.hasOwnProperty, _ = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(O, p, T) {
    var g, m = {}, E = null, j = null;
    T !== void 0 && (E = "" + T), p.key !== void 0 && (E = "" + p.key), p.ref !== void 0 && (j = p.ref);
    for (g in p) P.call(p, g) && !M.hasOwnProperty(g) && (m[g] = p[g]);
    if (O && O.defaultProps) for (g in p = O.defaultProps, p) m[g] === void 0 && (m[g] = p[g]);
    return { $$typeof: h, type: O, key: E, ref: j, props: m, _owner: _.current };
  }
  return $.Fragment = R, $.jsx = D, $.jsxs = D, $;
}
var W = {}, Pe;
function gr() {
  if (Pe) return W;
  Pe = 1;
  var f = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return f.NODE_ENV !== "production" && function() {
    "use strict";
    var h = we, R = Symbol.for("react.element"), P = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), p = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), xe = Symbol.for("react.offscreen"), re = Symbol.iterator, ke = "@@iterator";
    function De(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = re && e[re] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var w = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Fe("error", e, t);
      }
    }
    function Fe(e, r, t) {
      {
        var n = w.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Ae = !1, Ie = !1, $e = !1, We = !1, Ye = !1, te;
    te = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === D || Ye || e === M || e === g || e === m || We || e === xe || Ae || Ie || $e || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === E || e.$$typeof === O || e.$$typeof === p || e.$$typeof === T || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Ne(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function b(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _:
          return "Fragment";
        case P:
          return "Portal";
        case D:
          return "Profiler";
        case M:
          return "StrictMode";
        case g:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var r = e;
            return ne(r) + ".Consumer";
          case O:
            var t = e;
            return ne(t._context) + ".Provider";
          case T:
            return Ne(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : b(e.type) || "Memo";
          case j: {
            var i = e, u = i._payload, o = i._init;
            try {
              return b(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, F = 0, ae, oe, ie, ue, se, le, fe;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Le() {
      {
        if (F === 0) {
          ae = console.log, oe = console.info, ie = console.warn, ue = console.error, se = console.group, le = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Ve() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: ae
            }),
            info: S({}, e, {
              value: oe
            }),
            warn: S({}, e, {
              value: ie
            }),
            error: S({}, e, {
              value: ue
            }),
            group: S({}, e, {
              value: se
            }),
            groupCollapsed: S({}, e, {
              value: le
            }),
            groupEnd: S({}, e, {
              value: fe
            })
          });
        }
        F < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = w.ReactCurrentDispatcher, B;
    function N(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var K = !1, L;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Ue();
    }
    function de(e, r) {
      if (!e || K)
        return "";
      {
        var t = L.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      K = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = q.current, q.current = null, Le();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (v) {
              n = v;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (v) {
              n = v;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (v) {
            n = v;
          }
          e();
        }
      } catch (v) {
        if (v && n && typeof v.stack == "string") {
          for (var a = v.stack.split(`
`), d = n.stack.split(`
`), s = a.length - 1, l = d.length - 1; s >= 1 && l >= 0 && a[s] !== d[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== d[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== d[l]) {
                    var y = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, y), y;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        K = !1, q.current = u, Ve(), Error.prepareStackTrace = i;
      }
      var k = e ? e.displayName || e.name : "", C = k ? N(k) : "";
      return typeof e == "function" && L.set(e, C), C;
    }
    function Je(e, r, t) {
      return de(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, qe(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case g:
          return N("Suspense");
        case m:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            return Je(e.render);
          case E:
            return V(e.type, r, t);
          case j: {
            var n = e, i = n._payload, u = n._init;
            try {
              return V(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var A = Object.prototype.hasOwnProperty, ve = {}, pe = w.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var u = Function.call.bind(A);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (U(i), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), U(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, U(i), c("Failed %s type: %s", t, a.message), U(null));
          }
      }
    }
    var Ke = Array.isArray;
    function G(e) {
      return Ke(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function ye(e) {
      if (ze(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), ge(e);
    }
    var I = w.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, he, z;
    z = {};
    function Xe(e) {
      if (A.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (A.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = b(I.current.type);
        z[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b(I.current.type), e.ref), z[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          be || (be = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          he || (he = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: R,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, t, n, i) {
      {
        var u, o = {}, a = null, d = null;
        t !== void 0 && (ye(t), a = "" + t), Ze(r) && (ye(r.key), a = "" + r.key), Xe(r) && (d = r.ref, Qe(r, i));
        for (u in r)
          A.call(r, u) && !He.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || d) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && er(o, l), d && rr(o, l);
        }
        return tr(e, a, d, i, n, I.current, o);
      }
    }
    var H = w.ReactCurrentOwner, _e = w.ReactDebugCurrentFrame;
    function x(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === R;
    }
    function me() {
      {
        if (H.current) {
          var e = b(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ee = {};
    function or(e) {
      {
        var r = me();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + b(e._owner.type) + "."), x(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), x(null);
      }
    }
    function Oe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && Re(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = De(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              Z(o.value) && Re(o.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === T || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = b(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var i = b(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            x(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), x(null);
            break;
          }
        }
        e.ref !== null && (x(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), x(null));
      }
    }
    var Te = {};
    function Se(e, r, t, n, i, u) {
      {
        var o = Me(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = ar(i);
          d ? a += d : a += me();
          var s;
          e === null ? s = "null" : G(e) ? s = "array" : e !== void 0 && e.$$typeof === R ? (s = "<" + (b(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = nr(e, r, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var y = r.children;
          if (y !== void 0)
            if (n)
              if (G(y)) {
                for (var k = 0; k < y.length; k++)
                  Oe(y[k], e);
                Object.freeze && Object.freeze(y);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(y, e);
        }
        if (A.call(r, "key")) {
          var C = b(e), v = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), Q = v.length > 0 ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[C + Q]) {
            var dr = v.length > 0 ? "{" + v.join(": ..., ") + ": ...}" : "{}";
            c(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, C, dr, C), Te[C + Q] = !0;
          }
        }
        return e === _ ? ur(l) : ir(l), l;
      }
    }
    function sr(e, r, t) {
      return Se(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Se(e, r, t, !1);
    }
    var fr = lr, cr = sr;
    W.Fragment = _, W.jsx = fr, W.jsxs = cr;
  }(), W;
}
var Er = Y.exports, je;
function yr() {
  if (je) return Y.exports;
  je = 1;
  var f = {};
  return f.NODE_ENV === "production" ? Y.exports = pr() : Y.exports = gr(), Y.exports;
}
var J = yr();
const ee = {}, br = (f) => {
  Object.assign(ee, {
    useStore_CountPluginState: f(
      { count: 10 },
      "CountPluginState"
    ).useHook,
    useStore_AnotherState: f(
      { value: "initial" },
      "AnotherState"
    ).useHook
  });
}, hr = (f) => {
  if (!ee[f])
    throw new Error(`Hook ${f} is not initialized.`);
  return ee[f]();
}, _r = () => {
  var P;
  const { updateCountPluginState: f, currentCountPluginState: h } = hr("useStore_CountPluginState"), R = () => {
    f((_) => ({
      count: _.data.count + 1
    }));
  };
  return /* @__PURE__ */ J.jsxs("div", { children: [
    /* @__PURE__ */ J.jsxs("p", { children: [
      "1 Zipped Dev Plugin Count: ",
      (P = h == null ? void 0 : h.data) == null ? void 0 : P.count
    ] }),
    /* @__PURE__ */ J.jsx("button", { onClick: R, children: "Increment Plugin Count" })
  ] });
}, Rr = (f) => {
  br(f.createAtomWithHook);
  const h = () => /* @__PURE__ */ J.jsx(_r, {});
  f.registerComponent({
    plugin_id: "plugin_example_1_my_plugin",
    location: "main_section",
    component: h
  });
};
export {
  Rr as default,
  Rr as init
};
