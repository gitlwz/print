/**
 * jQuery Hiprint 2.0.1
 * 
 * Copyright (c) 2016-2019 www.hinnn.com. All rights reserved.
 *
 * Licensed under the GPL or commercial licenses
 * To use it on other terms please contact us: hinnn.com@gmail.com
 *
 */
"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var hiprint = function (t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var o = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        });
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var o in t) {
            n.d(i, o, function (e) {
                return t[e];
            }.bind(null, o));
        }
        return i;
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default;
        } : function () {
            return t;
        };
        return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "/", n(n.s = 0);
}([function (t, e, n) {
    t.exports = n(11);
}, function (t, e) {
    !function (t) {
        function e(e) {
            var n = t.data(e.data.target, "hidraggable"),
                i = n.options,
                o = n.proxy,
                r = e.data,
                a = r.startLeft + e.pageX - r.startX,
                p = r.startTop + e.pageY - r.startY;
            o && (o.parent()[0] == document.body ? (a = null != i.deltaX && null != i.deltaX ? e.pageX + i.deltaX : e.pageX - e.data.offsetWidth, p = null != i.deltaY && null != i.deltaY ? e.pageY + i.deltaY : e.pageY - e.data.offsetHeight) : (null != i.deltaX && null != i.deltaX && (a += e.data.offsetWidth + i.deltaX), null != i.deltaY && null != i.deltaY && (p += e.data.offsetHeight + i.deltaY))), e.data.parent != document.body && (a += t(e.data.parent).scrollLeft(), p += t(e.data.parent).scrollTop()), "h" == i.axis ? r.left = a : "v" == i.axis ? r.top = p : (r.left = a, r.top = p);
        }

        function n(e) {
            var n = t.data(e.data.target, "hidraggable"),
                i = n.options,
                o = n.proxy;
            o || (o = t(e.data.target)), o.css({
                left: t.fn.dragLengthC(e.data.left, i),
                top: t.fn.dragLengthC(e.data.top, i)
            }), t("body").css("cursor", i.cursor);
        }

        function i(i) {
            t.fn.hidraggable.isDragging = !0;
            var o = t.data(i.data.target, "hidraggable"),
                r = o.options,
                a = t(".hidroppable").filter(function () {
                    return i.data.target != this;
                }).filter(function () {
                    var e = t.data(this, "hidroppable").options.accept;
                    return !e || t(e).filter(function () {
                        return this == i.data.target;
                    }).length > 0;
                });
            o.hidroppables = a;
            var p = o.proxy;
            return p || (r.proxy ? (p = "clone" == r.proxy ? t(i.data.target).clone().insertAfter(i.data.target) : r.proxy.call(i.data.target, i.data.target), o.proxy = p) : p = t(i.data.target)), p.css("position", "absolute"), e(i), n(i), r.onStartDrag.call(i.data.target, i), !1;
        }

        function o(i) {
            var o = t.data(i.data.target, "hidraggable");
            e(i), 0 != o.options.onDrag.call(i.data.target, i, t.fn.dragLengthCNum(i.data.left, o.options), t.fn.dragLengthCNum(i.data.top, o.options)) && n(i);
            var r = i.data.target;
            return o.hidroppables.each(function () {
                var e = t(this);

                if (!e.hidroppable("options").disabled) {
                    var n = e.offset();
                    i.pageX > n.left && i.pageX < n.left + e.outerWidth() && i.pageY > n.top && i.pageY < n.top + e.outerHeight() ? (this.entered || (t(this).trigger("_dragenter", [r]), this.entered = !0), t(this).trigger("_dragover", [r])) : this.entered && (t(this).trigger("_dragleave", [r]), this.entered = !1);
                }
            }), !1;
        }

        function r(e) {
            t.fn.hidraggable.isDragging = !1, o(e);
            var n,
                i,
                r = t.data(e.data.target, "hidraggable"),
                a = r.proxy,
                p = r.options;
            p.revert ? 1 == l() ? t(e.data.target).css({
                position: e.data.startPosition,
                left: e.data.startLeft,
                top: e.data.startTop
            }) : a ? (a.parent()[0] == document.body ? (n = e.data.startX - e.data.offsetWidth, i = e.data.startY - e.data.offsetHeight) : (n = e.data.startLeft, i = e.data.startTop), a.animate({
                left: n,
                top: i
            }, function () {
                s();
            })) : t(e.data.target).animate({
                left: e.data.startLeft,
                top: e.data.startTop
            }, function () {
                t(e.data.target).css("position", e.data.startPosition);
            }) : (t(e.data.target).css({
                position: "absolute",
                left: t.fn.dragLengthC(e.data.left, p),
                top: t.fn.dragLengthC(e.data.top, p)
            }), l());

            function s() {
                a && a.remove(), r.proxy = null;
            }

            function l() {
                var n = !1;
                return r.hidroppables.each(function () {
                    var i = t(this);

                    if (!i.hidroppable("options").disabled) {
                        var o = i.offset();
                        return e.pageX > o.left && e.pageX < o.left + i.outerWidth() && e.pageY > o.top && e.pageY < o.top + i.outerHeight() ? (p.revert && t(e.data.target).css({
                            position: e.data.startPosition,
                            left: e.data.startLeft,
                            top: e.data.startTop
                        }), t(this).trigger("_drop", [e.data.target]), s(), n = !0, this.entered = !1, !1) : void 0;
                    }
                }), n || p.revert || s(), n;
            }

            return p.onStopDrag.call(e.data.target, e), t(document).unbind(".hidraggable"), setTimeout(function () {
                t("body").css("cursor", "");
            }, 100), !1;
        }

        t.fn.hidraggable = function (e, n) {
            return "string" == typeof e ? t.fn.hidraggable.methods[e](this, n) : this.each(function () {
                var n,
                    a = t.data(this, "hidraggable");
                a ? (a.handle.unbind(".hidraggable"), n = t.extend(a.options, e)) : n = t.extend({}, t.fn.hidraggable.defaults, t.fn.hidraggable.parseOptions(this), e || {});
                var p = n.handle ? "string" == typeof n.handle ? t(n.handle, this) : n.handle : t(this);

                function s(e) {
                    var n = t.data(e.data.target, "hidraggable"),
                        i = n.handle,
                        o = t(i).offset(),
                        r = t(i).outerWidth(),
                        a = t(i).outerHeight(),
                        p = e.pageY - o.top,
                        s = o.left + r - e.pageX,
                        l = o.top + a - e.pageY,
                        u = e.pageX - o.left;
                    return Math.min(p, s, l, u) > n.options.edge;
                }

                t.data(this, "hidraggable", {
                    options: n,
                    handle: p
                }), n.disabled ? t(this).css("cursor", "") : p.unbind(".hidraggable").bind("mousemove.hidraggable", {
                    target: this
                }, function (e) {
                    if (!t.fn.hidraggable.isDragging) {
                        var n = t.data(e.data.target, "hidraggable").options;
                        s(e) ? t(this).css("cursor", n.cursor) : t(this).css("cursor", "");
                    }
                }).bind("mouseleave.hidraggable", {
                    target: this
                }, function (e) {
                    t(this).css("cursor", "");
                }).bind("mousedown.hidraggable", {
                    target: this
                }, function (e) {
                    if (0 != s(e)) {
                        t(this).css("cursor", "");
                        var n = t(e.data.target).position(),
                            a = t(e.data.target).offset(),
                            p = {
                                startPosition: t(e.data.target).css("position"),
                                startLeft: n.left,
                                startTop: n.top,
                                left: n.left,
                                top: n.top,
                                startX: e.pageX,
                                startY: e.pageY,
                                offsetWidth: e.pageX - a.left,
                                offsetHeight: e.pageY - a.top,
                                target: e.data.target,
                                parent: t(e.data.target).parent()[0]
                            };
                        t.extend(e.data, p), 0 != t.data(e.data.target, "hidraggable").options.onBeforeDrag.call(e.data.target, e) && (t(document).bind("mousedown.hidraggable", e.data, i), t(document).bind("mousemove.hidraggable", e.data, o), t(document).bind("mouseup.hidraggable", e.data, r));
                    }
                });
            });
        }, t.fn.hidraggable.methods = {
            options: function options(e) {
                return t.data(e[0], "hidraggable").options;
            },
            proxy: function proxy(e) {
                return t.data(e[0], "hidraggable").proxy;
            },
            enable: function enable(e) {
                return e.each(function () {
                    t(this).hidraggable({
                        disabled: !1
                    });
                });
            },
            disable: function disable(e) {
                return e.each(function () {
                    t(this).hidraggable({
                        disabled: !0
                    });
                });
            }
        }, t.fn.hidraggable.parseOptions = function (e) {
            var n = t(e);
            return t.extend({}, t.hiprintparser.parseOptions(e, ["cursor", "handle", "axis", {
                revert: "boolean",
                deltaX: "number",
                deltaY: "number",
                edge: "number"
            }]), {
                    disabled: !!n.attr("disabled") || void 0
                });
        }, t.fn.hidraggable.defaults = {
            proxy: null,
            revert: !1,
            cursor: "move",
            deltaX: null,
            deltaY: null,
            handle: null,
            disabled: !1,
            edge: 0,
            axis: null,
            onBeforeDrag: function onBeforeDrag(t) { },
            onStartDrag: function onStartDrag(t) { },
            onDrag: function onDrag(t) { },
            onStopDrag: function onStopDrag(t) { }
        }, t.fn.hidraggable.isDragging = !1;
    }(jQuery);
}, function (t, e) {
    !function (t) {
        t.fn.hidroppable = function (e, n) {
            return "string" == typeof e ? t.fn.hidroppable.methods[e](this, n) : (e = e || {}, this.each(function () {
                var n,
                    i = t.data(this, "hidroppable");
                i ? t.extend(i.options, e) : (t(n = this).addClass("hidroppable"), t(n).bind("_dragenter", function (e, i) {
                    t.data(n, "hidroppable").options.onDragEnter.apply(n, [e, i]);
                }), t(n).bind("_dragleave", function (e, i) {
                    t.data(n, "hidroppable").options.onDragLeave.apply(n, [e, i]);
                }), t(n).bind("_dragover", function (e, i) {
                    t.data(n, "hidroppable").options.onDragOver.apply(n, [e, i]);
                }), t(n).bind("_drop", function (e, i) {
                    t.data(n, "hidroppable").options.onDrop.apply(n, [e, i]);
                }), t.data(this, "hidroppable", {
                    options: t.extend({}, t.fn.hidroppable.defaults, t.fn.hidroppable.parseOptions(this), e)
                }));
            }));
        }, t.fn.hidroppable.methods = {
            options: function options(e) {
                return t.data(e[0], "hidroppable").options;
            },
            enable: function enable(e) {
                return e.each(function () {
                    t(this).hidroppable({
                        disabled: !1
                    });
                });
            },
            disable: function disable(e) {
                return e.each(function () {
                    t(this).hidroppable({
                        disabled: !0
                    });
                });
            }
        }, t.fn.hidroppable.parseOptions = function (e) {
            var n = t(e);
            return t.extend({}, t.hiprintparser.parseOptions(e, ["accept"]), {
                disabled: !!n.attr("disabled") || void 0
            });
        }, t.fn.hidroppable.defaults = {
            accept: null,
            disabled: !1,
            onDragEnter: function onDragEnter(t, e) { },
            onDragOver: function onDragOver(t, e) { },
            onDragLeave: function onDragLeave(t, e) { },
            onDrop: function onDrop(t, e) { }
        };
    }(jQuery);
}, function (t, e) {
    var n;
    (n = jQuery).hiprintparser = {
        parseOptions: function parseOptions(t, e) {
            var i = n(t),
                o = {},
                r = n.trim(i.attr("data-options"));

            if (r && ("{" != r.substring(0, 1) && (r = "{" + r + "}"), o = new Function("return " + r)()), e) {
                for (var a = {}, p = 0; p < e.length; p++) {
                    var s = e[p];
                    if ("string" == typeof s) a[s] = "width" == s || "height" == s || "left" == s || "top" == s ? parseInt(t.style[s]) || void 0 : i.attr(s); else for (var l in s) {
                        var u = s[l];
                        "boolean" == u ? a[l] = i.attr(l) ? "true" == i.attr(l) : void 0 : "number" == u && (a[l] = "0" == i.attr(l) ? 0 : parseFloat(i.attr(l)) || void 0);
                    }
                }

                n.extend(o, a);
            }

            return o;
        }
    }, n.fn.dragLengthC = function (t, e) {
        return "pt" == e.moveUnit ? n.fn.dragLengthCNum(t, e) + "pt" : n.fn.dragLengthCNum(t, e);
    }, n.fn.dragLengthCNum = function (t, e) {
        var n = 3;

        if ("pt" == e.moveUnit) {
            var i = .75 * t;
            return e.minMove && (n = e.minMove), Math.round(i / n) * n;
        }

        return Math.round(i / n) * n;
    };
}, function (t, e) {
    var n, i, o;
    n = jQuery, i = {
        maxPanelIndex: 0
    }, (o = function o(t) {
        this.options = n.data(t.target, "hireizeable").options, this.init(t.target);
    }).prototype = {
            numHandlerText: function numHandlerText(t) {
                return this.numHandler(t) + "pt";
            },
            numHandler: function numHandler(t) {
                var e = 1.5,
                    n = .75 * t;
                return this.options.minResize && (e = this.options.minResize), Math.round(n / e) * e;
            },
            init: function init(t) {
                this.initResizeBox(t);
            },
            initResizeBox: function initResizeBox(t) {
                var e = this;
                n(t).each(function () {
                    var o;
                    i.maxPanelIndex += 1, e.options.noContainer ? o = n(t) : (o = n("<div panelIndex=" + i.maxPanelIndex + ' class="resize-panel"></div>')).css({
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        position: "absolute",
                        "background-color": "rgba(0,0,0,0.5)",
                        cursor: "move",
                        display: "none"
                    }), e.appendHandler(o, n(this));

                    var r = {
                        name: "n",
                        target: n('<div class="n resizebtn" style="cursor: n-resize;top: -12px;margin-left: -4px;left: 50%;"></div>')
                    },
                        a = {
                            name: "s",
                            target: n('<div class="s resizebtn" style="cursor: s-resize;bottom: -12px;margin-left: -4px;left: 50%;"></div>')
                        },
                        p = {
                            name: "w",
                            target: n('<div class="w resizebtn" style="cursor: w-resize;left: -12px;margin-top: -4px;top: 50%;"></div>')
                        },
                        s = {
                            name: "e",
                            target: n('<div class="e resizebtn" style="cursor: e-resize; top: 50%; margin-top:-4px;right: -12px;"></div>')
                        },
                        l = {
                            name: "ne",
                            target: n('<div class="ne resizebtn" style="cursor: ne-resize;top: -12px;right: -12px;"></div>')
                        },
                        u = {
                            name: "nw",
                            target: n('<div class="nw resizebtn" style=" cursor: nw-resize;top: -12px;left:-12px;"></div>')
                        },
                        h = {
                            name: "se",
                            target: n('<div class="se resizebtn" style="cursor: se-resize;bottom:-12px;right: -12px;"></div>')
                        },
                        c = {
                            name: "sw",
                            target: n('<div class="sw resizebtn" style="cursor: sw-resize;bottom: -12px;left: -12px;"></div>')
                        },
                        d = function d() {
                            var t = [],
                                i = e.options.showPoints;
                            return n.each([r, a, p, s, l, u, h, c], function (e, o) {
                                n.inArray(o.name, i) > -1 && t.push(o.target);
                            }), t;
                        };

                    e.addHandlerCss(d()), e.appendHandler(d(), o), e.bindResizeEvent(o, n(this));
                    var f = n(this);
                    n(o).on("mousedown", ".resizebtn", function () {
                        f.addClass("resizeing");
                    }), n(".easyui-droppable").on("mouseup", function () {
                        f.removeClass("resizeing");
                    }), e.bindTrigger(n(this));
                }), e.bindHidePanel();
            },
            addHandlerCss: function addHandlerCss(t) {
                for (var e = 0; e < t.length; e++) {
                    t[e].css({
                        position: "absolute",
                        width: "8px",
                        height: "8px",
                        background: "#ff6600",
                        "border-radius": "50%"
                    });
                }
            },
            appendHandler: function appendHandler(t, e) {
                for (var n = 0; n < t.length; n++) {
                    e.append(t[n]);
                }
            },
            triggerResize: function triggerResize(t) {
                t.siblings().children("div[panelindex]").css({
                    display: "none"
                }), t.children("div[panelindex]").css({
                    display: "block"
                });
            },
            bindResizeEvent: function bindResizeEvent(t, e) {
                var i = this,
                    o = 0,
                    r = 0,
                    a = t.width(),
                    p = t.height(),
                    s = t.offset().left,
                    l = t.offset().top,
                    u = i.options.noContainer ? n(e) : t.parent(),
                    h = !1;
                t.on("mousedown", ".e", function (e) {
                    o = e.pageX, a = t.width(), h = !0;
                });
                var c = !1;
                t.on("mousedown", ".s", function (e) {
                    r = e.pageY, p = t.height(), c = !0;
                });
                var d = !1;
                t.on("mousedown", ".w", function (e) {
                    o = e.pageX, a = t.width(), d = !0, s = u.offset().left;
                });
                var f = !1;
                t.on("mousedown", ".n", function (e) {
                    r = e.pageY, p = t.height(), f = !0, l = u.offset().top;
                });
                var g = !1;
                t.on("mousedown", ".ne", function (e) {
                    o = e.pageX, r = e.pageY, a = t.width(), p = t.height(), g = !0, l = u.offset().top;
                });
                var m = !1;
                t.on("mousedown", ".nw", function (e) {
                    o = e.pageX, r = e.pageY, a = t.width(), p = t.height(), l = u.offset().top, s = u.offset().left, m = !0;
                });
                var v = !1;
                t.on("mousedown", ".se", function (e) {
                    o = e.pageX, r = e.pageY, a = t.width(), p = t.height(), v = !0;
                });
                var y = !1;
                t.on("mousedown", ".sw", function (e) {
                    o = e.pageX, r = e.pageY, a = t.width(), p = t.height(), y = !0, s = u.offset().left;
                });
                var b = !1;
                t.on("mousedown", function (t) {
                    o = t.pageX, r = t.pageY, l = u.offset().top, s = u.offset().left, b = !1;
                }), n(i.options.stage).on("mousemove", function (e) {
                    if (h) {
                        var n = e.pageX - o;
                        t.css({
                            width: "100%"
                        }), u.css({
                            width: i.numHandlerText(a + n)
                        }), i.options.onResize(e, void 0, i.numHandler(a + n), void 0, void 0);
                    } else if (c) {
                        var w = e.pageY - r;
                        t.css({
                            height: "100%"
                        }), u.css({
                            height: i.numHandlerText(p + w)
                        }), i.options.onResize(e, i.numHandler(p + w), void 0, void 0, void 0);
                    } else d ? (n = e.pageX - o, t.css({
                        width: "100%"
                    }), u.css({
                        width: i.numHandlerText(a - n),
                        left: i.numHandlerText(i.options.noDrag ? void 0 : i.numHandler(s + n))
                    }), i.options.onResize(e, void 0, i.numHandler(a - n), void 0, i.options.noDrag ? void 0 : i.numHandler(s + n))) : f ? (w = e.pageY - r, t.css({
                        height: "100%"
                    }), u.css({
                        height: i.numHandlerText(p - w),
                        top: i.numHandlerText(i.options.noDrag ? void 0 : l + w)
                    }), i.options.onResize(e, i.numHandler(p - w), void 0, i.options.noDrag ? void 0 : i.numHandler(l + w), void 0)) : g ? (n = e.pageX - o, w = e.pageY - r, t.css({
                        height: "100%",
                        width: "100%"
                    }), u.css({
                        height: i.numHandlerText(p - w),
                        top: i.numHandlerText(i.options.noDrag ? void 0 : l + w),
                        width: i.numHandlerText(a + n)
                    }), i.options.onResize(e, i.numHandler(p - w), i.numHandler(a + n), i.options.noDrag ? void 0 : i.numHandler(l + w), void 0)) : m ? (n = e.pageX - o, w = e.pageY - r, t.css({
                        height: "100%",
                        width: "100%"
                    }), u.css({
                        height: i.numHandlerText(p - w),
                        top: i.numHandlerText(i.options.noDrag ? void 0 : l + w),
                        width: i.numHandlerText(a - n),
                        left: i.numHandlerText(i.options.noDrag ? void 0 : s + n)
                    }), i.options.onResize(e, i.numHandler(p - w), i.numHandler(a - n), i.options.noDrag ? void 0 : i.numHandler(l + w), i.options.noDrag ? void 0 : i.numHandler(s + n))) : v ? (n = e.pageX - o, w = e.pageY - r, t.css({
                        width: "100%",
                        height: "100%"
                    }), u.css({
                        width: i.numHandlerText(a + n),
                        height: i.numHandlerText(p + w)
                    }), i.options.onResize(e, i.numHandler(p + w), i.numHandler(a + n), void 0, void 0)) : y ? (n = e.pageX - o, w = e.pageY - r, t.css({
                        width: "100%",
                        height: "100%"
                    }), u.css({
                        width: i.numHandlerText(a - n),
                        left: i.numHandlerText(i.options.noDrag ? void 0 : s + n),
                        height: i.numHandlerText(p + w)
                    }), i.options.onResize(e, i.numHandler(p + w), i.numHandler(a - n), i.numHandler(otundefinedop), i.options.noDrag ? void 0 : i.numHandler(s + n))) : b && (n = e.pageX - o, w = e.pageY - r, u.css({
                        left: i.numHandlerText(i.options.noDrag ? void 0 : s + n),
                        top: i.numHandlerText(i.options.noDrag ? void 0 : l + w)
                    }), i.options.onResize(e, void 0, void 0, i.options.noDrag ? void 0 : i.numHandler(l + w), i.options.noDrag ? void 0 : i.numHandler(s + n)));
                }).on("mouseup", function (t) {
                    h = !1, c = !1, d = !1, f = !1, g = !1, m = !1, y = !1, v = !1, b = !1;
                });
            },
            bindTrigger: function bindTrigger(t) {
                var e = this;
                t.on("click", function (n) {
                    n.stopPropagation(), e.triggerResize(t);
                });
            },
            bindHidePanel: function bindHidePanel(t) {
                if (i.maxPanelIndex < 2) {
                    var e = this.options.stage;
                    n(e).bind("click", function (t) {
                        t.stopPropagation(), n("div[panelindex]").css({
                            display: "none"
                        });
                    });
                }
            }
        }, n.fn.extend({
            hireizeable: function hireizeable(t) {
                return this.each(function () {
                    var e,
                        i = n.data(this, "hireizeable");
                    e = i ? n.extend(i.options, _1f) : n.extend({}, n.fn.hireizeable.defaults, t || {}), n.data(this, "hireizeable", {
                        options: e
                    }), new o({
                        target: this,
                        onResize: function onResize(t, e, n, i, o) { }
                    });
                });
            }
        }), n.fn.hireizeable.defaults = {
            stage: document,
            reizeUnit: "pt",
            minResize: 1.5,
            showPoints: ["s", "e"],
            noContainer: !1,
            onResize: function onResize(t, e, n, i, o) { },
            noDrag: !1
        };
}, function (t, e, n) {
    var i = n(6);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(8)(i, o);
    i.locals && (t.exports = i.locals);
}, function (t, e, n) {
    (t.exports = n(7)(!1)).push([t.i, ".hicontextmenu {\r\n\tposition: absolute;\r\n\tdisplay: inline-block;\r\n\twidth: 215px;\r\n\tpadding: 0 0;\r\n\tmargin: 0;\r\n\tfont-family: inherit;\r\n\tfont-size: inherit;\r\n\tlist-style-type: none;\r\n\tlist-style: none;\r\n\tbackground: #fff;\r\n\tborder: 1px solid #bebebe;\r\n\tborder-radius: 2px;\r\n\tfont-size: 13px;\r\n}\r\n\r\n.hicontextmenuroot .hicontextmenuitem {\r\n\tposition: relative;\r\n\t-webkit-box-sizing: content-box;\r\n\t-moz-box-sizing: content-box;\r\n\tbox-sizing: content-box;\r\n\tpadding: .2em 12px;\r\n\tcolor: #2f2f2f;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\ttext-decoration: none;\r\n\r\n\tuser-select: none;\r\n\tbackground-color: #fff;\r\n\r\n}\r\n\r\n.hicontextmenuroot>.hicontextmenuitem:hover,\r\n.hicontextmenuroot .hicontextmenuitem > a:hover {\r\n\tbackground-color: #f3f3f3;\r\n}\r\n\r\n.hicontextmenuroot .hicontextmenuitem>a {\r\n\ttext-decoration: none;\r\n\tcolor: #363636;\r\n\tline-height: 22px;\r\n\r\n}\r\n\r\n.hicontextmenuroot .hicontextsubmenu>ul {\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\r\n}\r\n\r\n.hicontextmenuroot .hicontextsubmenu:hover>ul {\r\n\tdisplay: block;\r\n\tleft: 100%;\r\n\ttop: -1px;\r\n\tmargin-left: 0px;\r\n}\r\n\r\n.hicontextmenuroot .borderBottom {\r\n\tborder-bottom: 1px solid #efe6e6;\r\n}\r\n\r\n.hicontextmenuroot .disable> a {\r\n  \r\n    color: #ccc;\r\n   \r\n}\r\n.hicontextmenuroot>.disable:hover,\r\n.hicontextmenuroot .disable> a:hover {\r\n\tbackground-color:#fff;\r\n}", ""]);
}, function (t, e, n) {
    "use strict";

    t.exports = function (t) {
        var e = [];
        return e.toString = function () {
            return this.map(function (e) {
                var n = function (t, e) {
                    var n = t[1] || "",
                        i = t[3];
                    if (!i) return n;

                    if (e && "function" == typeof btoa) {
                        var o = (a = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                            r = i.sources.map(function (t) {
                                return "/*# sourceURL=" + i.sourceRoot + t + " */";
                            });
                        return [n].concat(r).concat([o]).join("\n");
                    }

                    var a;
                    return [n].join("\n");
                }(e, t);

                return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
            }).join("");
        }, e.i = function (t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);

            for (var i = {}, o = 0; o < this.length; o++) {
                var r = this[o][0];
                null != r && (i[r] = !0);
            }

            for (o = 0; o < t.length; o++) {
                var a = t[o];
                null != a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
            }
        }, e;
    };
}, function (t, e, n) {
    var i,
        o,
        r = {},
        a = (i = function i() {
            return window && document && document.all && !window.atob;
        }, function () {
            return void 0 === o && (o = i.apply(this, arguments)), o;
        }),
        p = function (t) {
            var e = {};
            return function (t, n) {
                if ("function" == typeof t) return t();

                if (void 0 === e[t]) {
                    var i = function (t, e) {
                        return e ? e.querySelector(t) : document.querySelector(t);
                    }.call(this, t, n);

                    if (window.HTMLIFrameElement && _instanceof(i, window.HTMLIFrameElement)) try {
                        i = i.contentDocument.head;
                    } catch (t) {
                        i = null;
                    }
                    e[t] = i;
                }

                return e[t];
            };
        }(),
        s = null,
        l = 0,
        u = [],
        h = n(9);

    function c(t, e) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n],
                o = r[i.id];

            if (o) {
                o.refs++;

                for (var a = 0; a < o.parts.length; a++) {
                    o.parts[a](i.parts[a]);
                }

                for (; a < i.parts.length; a++) {
                    o.parts.push(y(i.parts[a], e));
                }
            } else {
                var p = [];

                for (a = 0; a < i.parts.length; a++) {
                    p.push(y(i.parts[a], e));
                }

                r[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: p
                };
            }
        }
    }

    function d(t, e) {
        for (var n = [], i = {}, o = 0; o < t.length; o++) {
            var r = t[o],
                a = e.base ? r[0] + e.base : r[0],
                p = {
                    css: r[1],
                    media: r[2],
                    sourceMap: r[3]
                };
            i[a] ? i[a].parts.push(p) : n.push(i[a] = {
                id: a,
                parts: [p]
            });
        }

        return n;
    }

    function f(t, e) {
        var n = p(t.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var i = u[u.length - 1];
        if ("top" === t.insertAt) i ? i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), u.push(e); else if ("bottom" === t.insertAt) n.appendChild(e); else {
            if ("object" != _typeof(t.insertAt) || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = p(t.insertAt.before, n);
            n.insertBefore(e, o);
        }
    }

    function g(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = u.indexOf(t);
        e >= 0 && u.splice(e, 1);
    }

    function m(t) {
        var e = document.createElement("style");

        if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
            var i = function () {
                0;
                return n.nc;
            }();

            i && (t.attrs.nonce = i);
        }

        return v(e, t.attrs), f(t, e), e;
    }

    function v(t, e) {
        Object.keys(e).forEach(function (n) {
            t.setAttribute(n, e[n]);
        });
    }

    function y(t, e) {
        var n, i, o, r;

        if (e.transform && t.css) {
            if (!(r = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function () { };
            t.css = r;
        }

        if (e.singleton) {
            var a = l++;
            n = s || (s = m(e)), i = T.bind(null, n, a, !1), o = T.bind(null, n, a, !0);
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
            var e = document.createElement("link");
            return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", v(e, t.attrs), f(t, e), e;
        }(e), i = function (t, e, n) {
            var i = n.css,
                o = n.sourceMap,
                r = void 0 === e.convertToAbsoluteUrls && o;
            (e.convertToAbsoluteUrls || r) && (i = h(i));
            o && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var a = new Blob([i], {
                type: "text/css"
            }),
                p = t.href;
            t.href = URL.createObjectURL(a), p && URL.revokeObjectURL(p);
        }.bind(null, n, e), o = function o() {
            g(n), n.href && URL.revokeObjectURL(n.href);
        }) : (n = m(e), i = function (t, e) {
            var n = e.css,
                i = e.media;
            i && t.setAttribute("media", i);
            if (t.styleSheet) t.styleSheet.cssText = n; else {
                for (; t.firstChild;) {
                    t.removeChild(t.firstChild);
                }

                t.appendChild(document.createTextNode(n));
            }
        }.bind(null, n), o = function o() {
            g(n);
        });

        return i(t), function (e) {
            if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                i(t = e);
            } else o();
        };
    }

    t.exports = function (t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == _typeof(e.attrs) ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var n = d(t, e);
        return c(n, e), function (t) {
            for (var i = [], o = 0; o < n.length; o++) {
                var a = n[o];
                (p = r[a.id]).refs-- , i.push(p);
            }

            t && c(d(t, e), e);

            for (o = 0; o < i.length; o++) {
                var p;

                if (0 === (p = i[o]).refs) {
                    for (var s = 0; s < p.parts.length; s++) {
                        p.parts[s]();
                    }

                    delete r[p.id];
                }
            }
        };
    };

    var b,
        w = (b = [], function (t, e) {
            return b[t] = e, b.filter(Boolean).join("\n");
        });

    function T(t, e, n, i) {
        var o = n ? "" : i.css;
        if (t.styleSheet) t.styleSheet.cssText = w(e, o); else {
            var r = document.createTextNode(o),
                a = t.childNodes;
            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(r, a[e]) : t.appendChild(r);
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var n = e.protocol + "//" + e.host,
            i = n + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
            var o,
                r = e.trim().replace(/^"(.*)"$/, function (t, e) {
                    return e;
                }).replace(/^'(.*)'$/, function (t, e) {
                    return e;
                });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? t : (o = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : i + r.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")");
        });
    };
}, function (t, e) {
    var n, i;
    window, document, n = jQuery, (i = function i(t, e) {
        this.init(t, e);
    }).prototype = {
            init: function init(t, e) {
                this.ele = t, this.defaults = {
                    menu: [{
                        text: "text",
                        menus: [{}, {}],
                        callback: function callback() { }
                    }],
                    target: function target(t) { },
                    width: 100,
                    itemHeight: 28,
                    bgColor: "#fff",
                    color: "#333",
                    fontSize: 14,
                    hoverBgColor: "#f5f5f5"
                }, this.opts = n.extend(!0, {}, this.defaults, e), this.random = new Date().getTime() + parseInt(1e3 * Math.random()), this.eventBind();
            },
            renderMenu: function renderMenu(t, e) {
                var n = this,
                    i = e;

                if (t && t.length) {
                    var o = $('<ul class="hicontextmenu" ></ul>');
                    i || (i = o).addClass("hicontextmenuroot"), $.each(t, function (t, e) {
                        var i = !!e.disable && e.disable(),
                            r = $('<li class="hicontextmenuitem"><a href="javascript:void(0);"><span>' + (e.text || "") + "</span></a></li>");
                        i && r.addClass("disable"), e.borderBottom && r.addClass("borderBottom"), e.menus && (r.addClass("hicontextsubmenu"), n.renderMenu(e.menus, r)), e.callback && r.click(function (t) {
                            $(this).hasClass("disable") ? t.stopPropagation() : ($(".hicontextmenuroot").remove(), e.callback(), t.stopPropagation());
                        }), o.append(r);
                    }), e && e.append(o);
                }

                e || $("body").append(i).find(".hicontextmenuroot").hide();
            },
            setPosition: function setPosition(t) {
                $(".hicontextmenuroot").css({
                    left: t.pageX + 2,
                    top: t.pageY + 2
                }).show();
            },
            eventBind: function eventBind() {
                var t = this;
                this.ele.on("contextmenu", function (e) {
                    $(".hicontextmenuroot").remove(), e.preventDefault(), t.renderMenu(t.opts.menus), t.setPosition(e), t.opts.target && "function" == typeof t.opts.target && t.opts.target(n(this));
                }), n("body").on("click", function () {
                    n(".hicontextmenuroot").remove();
                });
            }
        }, n.fn.hicontextMenu = function (t) {
            return new i(this, t), this;
        };
}, function (t, e, n) {
    "use strict";

    n.r(e);
    n(1), n(2), n(3), n(4);
    var i = {};
    var o;
    i.event = (o = {}, {
        on: function on(t, e) {
            o[t] || (o[t] = []), o[t].push(e);
        },
        id: 0,
        off: function off(t, e) {
            var n = o[t];

            if (n) {
                for (var i = -1, r = 0; r < n.length; r++) {
                    if (n[r] === e) {
                        i = r;
                        break;
                    }
                }

                i < 0 || o[t].splice(i, 1);
            }
        },
        trigger: function trigger(t) {
            var e = o[t];
            if (e && e.length) for (var n = Array.prototype.slice.call(arguments, 1), i = 0; i < e.length; i++) {
                e[i].apply(this, n);
            }
        },
        clear: function clear(t) {
            o[t] = [];
        },
        getId: function getId() {
            return this.id += 1, this.id;
        },
        getNameWithId: function getNameWithId(t) {
            return t + "-" + this.getId();
        }
    }), i.form = {
        serialize: function serialize(t) {
            var e = $(t).serializeArray(),
                n = {};
            return $.each(e, function () {
                n[this.name] ? "[object Array]" == Object.prototype.toString.call(n[this.name]) ? n[this.name].push(this.value) : n[this.name] = [n[this.name], this.value] : n[this.name] = this.value;
            }), n;
        }
    }, i.pt = {
        toPx: function toPx(t) {
            return t * (this.getDpi() / 72);
        },
        dpi: 0,
        getDpi: function getDpi() {
            if (!this.dpi) {
                var _t2 = document.createElement("DIV");

                _t2.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden", document.body.appendChild(_t2), this.dpi = _t2.offsetHeight;
            }

            return this.dpi;
        }
    }, i.px = {
        toPt: function toPt(t) {
            return t * (72 / this.getDpi());
        },
        dpi: 0,
        getDpi: function getDpi() {
            if (!this.dpi) {
                var _t3 = document.createElement("DIV");

                _t3.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden", document.body.appendChild(_t3), this.dpi = _t3.offsetHeight;
            }

            return this.dpi;
        }
    }, i.mm = {
        toPt: function toPt(t) {
            return 72 / 25.4 * t;
        }
    }, i.throttle = function (t, e, n) {
        var i,
            o,
            r,
            a = null,
            p = 0;
        n || (n = {});

        var s = function s() {
            p = !1 === n.leading ? 0 : _.now(), a = null, r = t.apply(i, o), a || (i = o = null);
        };

        return function () {
            var l = _.now();

            p || !1 !== n.leading || (p = l);
            var u = e - (l - p);
            return i = this, o = arguments, u <= 0 || u > e ? (a && (clearTimeout(a), a = null), p = l, r = t.apply(i, o), a || (i = o = null)) : a || !1 === n.trailing || (a = setTimeout(s, u)), r;
        };
    }, i.debounce = function (t, e, n) {
        var i,
            o,
            r,
            a,
            p,
            s = function s() {
                var l = _.now() - a;
                l < e && l >= 0 ? i = setTimeout(s, e - l) : (i = null, n || (p = t.apply(r, o), i || (r = o = null)));
            };

        return function () {
            r = this, o = arguments, a = _.now();
            var l = n && !i;
            return i || (i = setTimeout(s, e)), l && (p = t.apply(r, o), r = o = null), p;
        };
    }, i.toUtf8 = function (t) {
        var e, n, i, o;

        for (e = "", i = t.length, n = 0; n < i; n++) {
            (o = t.charCodeAt(n)) >= 1 && o <= 127 ? e += t.charAt(n) : o > 2047 ? (e += String.fromCharCode(224 | o >> 12 & 15), e += String.fromCharCode(128 | o >> 6 & 63), e += String.fromCharCode(128 | o >> 0 & 63)) : (e += String.fromCharCode(192 | o >> 6 & 31), e += String.fromCharCode(128 | o >> 0 & 63));
        }

        return e;
    }, i.groupBy = function (t, e, n) {
        var i = {};
        return t.forEach(function (t) {
            var o = JSON.stringify(n(t));
            i[o] || (i[o] = {
                rows: []
            }, e.forEach(function (e) {
                i[o][e] = t[e];
            })), i[o].rows.push(t);
        }), Object.keys(i).map(function (t) {
            return i[t];
        });
    }, i.orderBy = function (t, e) {
        if (t.length <= 1) return t;
        var n = Math.floor(t.length / 2),
            i = t.splice(n, 1)[0],
            o = [],
            r = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _n = _step.value;
                e(_n) < e(i) ? o.push(_n) : r.push(_n);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return this.orderBy(o, e).concat([i], this.orderBy(r, e));
    };
    n(5), n(10);

    var _r,
        a = function () {
            function t() {
                this.allElementTypes = [];
            }

            return Object.defineProperty(t, "instance", {
                get: function get() {
                    return t._instance || (t._instance = new t()), t._instance;
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.addPrintElementTypes = function (t, e) {
                var n = this;
                this[t] ? this[t] = this[t].concat(e) : this[t] = e, e.forEach(function (t) {
                    n.allElementTypes = n.allElementTypes.concat(t.printElementTypes);
                });
            }, t.prototype.getElementTypeGroups = function (t) {
                return this[this.formatterModule(t)] || [];
            }, t.prototype.getElementType = function (t) {
                var e = this.allElementTypes.filter(function (e) {
                    return e.tid == t;
                });
                if (e.length > 0) return e[0];
            }, t.prototype.formatterModule = function (t) {
                return t || "_default";
            }, t;
        }(),
        p = function () {
            function t() {
                this.providers = [], this.movingDistance = 1.5, this.text = {
                    supportOptions: [{
                        name: "title",
                        hidden: !1
                    }, {
                        name: "field",
                        hidden: !1
                    }, {
                        name: "testData",
                        hidden: !1
                    }, {
                        name: "fontFamily",
                        hidden: !1
                    }, {
                        name: "fontSize",
                        hidden: !1
                    }, {
                        name: "fontWeight",
                        hidden: !1
                    }, {
                        name: "letterSpacing",
                        hidden: !1
                    }, {
                        name: "color",
                        hidden: !1
                    }, {
                        name: "textDecoration",
                        hidden: !1
                    }, {
                        name: "textAlign",
                        hidden: !1
                    }, {
                        name: "lineHeight",
                        hidden: !1
                    }, {
                        name: "textType",
                        hidden: !1
                    }, {
                        name: "barcodeMode",
                        hidden: !1
                    }, {
                        name: "hideTitle",
                        hidden: !1
                    }],
                    default: {
                        fontFamily: void 0,
                        fontSize: void 0,
                        fontWeight: "",
                        letterSpacing: void 0,
                        textAlign: void 0,
                        textType: "text",
                        hideTitle: !1,
                        height: 9.75,
                        lineHeight: void 0,
                        width: 120
                    }
                }, this.image = {
                    supportOptions: [{
                        name: "field",
                        hidden: !1
                    }, {
                        name: "src",
                        hidden: !1
                    }],
                    default: {}
                }, this.longText = {
                    supportOptions: [{
                        name: "title",
                        hidden: !1
                    }, {
                        name: "field",
                        hidden: !1
                    }, {
                        name: "fontFamily",
                        hidden: !1
                    }, {
                        name: "fontSize",
                        hidden: !1
                    }, {
                        name: "fontWeight",
                        hidden: !1
                    }, {
                        name: "letterSpacing",
                        hidden: !1
                    }, {
                        name: "textAlign",
                        hidden: !1
                    }, {
                        name: "lineHeight",
                        hidden: !1
                    }, {
                        name: "hideTitle",
                        hidden: !1
                    }, {
                        name: "color",
                        hidden: !1
                    }],
                    default: {
                        fontFamily: void 0,
                        fontSize: void 0,
                        fontWeight: "",
                        letterSpacing: void 0,
                        textAlign: void 0,
                        hideTitle: !1,
                        height: 42,
                        lineHeight: void 0,
                        width: 550
                    }
                }, this.table = {
                    supportOptions: [{
                        name: "field",
                        hidden: !1
                    }, {
                        name: "fontFamily",
                        hidden: !1
                    }, {
                        name: "fontSize",
                        hidden: !1
                    }, {
                        name: "lineHeight",
                        hidden: !1
                    }, {
                        name: "textAlign",
                        hidden: !1
                    }, {
                        name: "tableBorder",
                        hidden: !1
                    }, {
                        name: "tableHeaderBorder",
                        hidden: !1
                    }, {
                        name: "tableHeaderCellBorder",
                        hidden: !1
                    }, {
                        name: "tableHeaderRowHeight",
                        hidden: !1
                    }, {
                        name: "tableHeaderBackground",
                        hidden: !1
                    }, {
                        name: "tableHeaderFontSize",
                        hidden: !1
                    }, {
                        name: "tableHeaderFontWeight",
                        hidden: !1
                    }, {
                        name: "tableBodyCellBorder",
                        hidden: !1
                    }, {
                        name: "tableBodyRowHeight",
                        hidden: !1
                    }],
                    default: {
                        fontFamily: void 0,
                        fontSize: void 0,
                        fontWeight: "",
                        textAlign: void 0,
                        tableBorder: void 0,
                        tableHeaderBorder: void 0,
                        tableHeaderCellBorder: void 0,
                        tableHeaderBackground: void 0,
                        tableHeaderRowHeight: void 0,
                        tableHeaderFontWeight: void 0,
                        tableBodyCellBorder: void 0,
                        tableBodyRowHeight: void 0,
                        letterSpacing: "",
                        lineHeight: void 0,
                        width: 550
                    }
                }, this.tableCustom = {
                    supportOptions: [{
                        name: "field",
                        hidden: !1
                    }, {
                        name: "fontFamily",
                        hidden: !1
                    }, {
                        name: "fontSize",
                        hidden: !1
                    }, {
                        name: "textAlign",
                        hidden: !1
                    }, {
                        name: "tableBorder",
                        hidden: !1
                    }, {
                        name: "tableHeaderBorder",
                        hidden: !1
                    }, {
                        name: "tableHeaderCellBorder",
                        hidden: !1
                    }, {
                        name: "tableHeaderRowHeight",
                        hidden: !1
                    }, {
                        name: "tableHeaderFontSize",
                        hidden: !1
                    }, {
                        name: "tableHeaderFontWeight",
                        hidden: !1
                    }, {
                        name: "tableHeaderBackground",
                        hidden: !1
                    }, {
                        name: "tableBodyCellBorder",
                        hidden: !1
                    }, {
                        name: "tableBodyRowHeight",
                        hidden: !1
                    }],
                    default: {
                        fontFamily: void 0,
                        fontSize: void 0,
                        fontWeight: "",
                        textAlign: void 0,
                        tableBorder: void 0,
                        tableHeaderBorder: void 0,
                        tableHeaderCellBorder: void 0,
                        tableHeaderBackground: void 0,
                        tableHeaderRowHeight: void 0,
                        tableHeaderFontWeight: void 0,
                        tableBodyCellBorder: void 0,
                        tableBodyRowHeight: void 0,
                        letterSpacing: "",
                        lineHeight: void 0,
                        width: 550
                    }
                }, this.hline = {
                    supportOptions: [{
                        name: "borderColor",
                        hidden: !1
                    }, {
                        name: "borderWidth",
                        hidden: !1
                    }],
                    default: {
                        borderWidth: .75,
                        height: 9,
                        width: 90
                    }
                }, this.vline = {
                    supportOptions: [{
                        name: "borderColor",
                        hidden: !1
                    }, {
                        name: "borderWidth",
                        hidden: !1
                    }],
                    default: {
                        borderWidth: void 0,
                        height: 90,
                        width: 9
                    }
                }, this.rect = {
                    supportOptions: [{
                        name: "borderColor",
                        hidden: !1
                    }, {
                        name: "borderWidth",
                        hidden: !1
                    }],
                    default: {
                        borderWidth: void 0,
                        height: 90,
                        width: 90
                    }
                }, this.oval = {
                    supportOptions: [{
                        name: "borderColor",
                        hidden: !1
                    }, {
                        name: "borderWidth",
                        hidden: !1
                    }],
                    default: {
                        borderWidth: void 0,
                        height: 90,
                        width: 90
                    }
                };
            }

            return t.prototype.init = function (t) {
                t && $.extend(this, t);
            }, Object.defineProperty(t, "instance", {
                get: function get() {
                    return t._instance || (t._instance = new t()), t._instance;
                },
                enumerable: !0,
                configurable: !0
            }), t;
        }(),
        s = function () {
            function t(t) {
                this.printElement = t;
            }

            return t.prototype.updatePosition = function (t, e) {
                this.left = t, this.top = e;
            }, t;
        }(),
        l = function () {
            function t() {
                this.A1 = {
                    width: 841,
                    height: 594
                }, this.A2 = {
                    width: 420,
                    height: 594
                }, this.A3 = {
                    width: 420,
                    height: 297
                }, this.A4 = {
                    width: 210,
                    height: 297
                }, this.A5 = {
                    width: 210,
                    height: 148
                }, this.A6 = {
                    width: 105,
                    height: 148
                }, this.A7 = {
                    width: 105,
                    height: 74
                }, this.A8 = {
                    width: 52,
                    height: 74
                }, this.B1 = {
                    width: 1e3,
                    height: 707
                }, this.B2 = {
                    width: 500,
                    height: 707
                }, this.B3 = {
                    width: 500,
                    height: 353
                }, this.B4 = {
                    width: 250,
                    height: 353
                }, this.B5 = {
                    width: 250,
                    height: 176
                }, this.B6 = {
                    width: 125,
                    height: 176
                }, this.B7 = {
                    width: 125,
                    height: 88
                }, this.B8 = {
                    width: 62,
                    height: 88
                };
            }

            return Object.defineProperty(t, "instance", {
                get: function get() {
                    return this._instance || (this._instance = new t()), this._instance;
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getDragingPrintElement = function () {
                return t.instance.dragingPrintElement;
            }, t.prototype.setDragingPrintElement = function (e) {
                t.instance.dragingPrintElement = new s(e);
            }, t.prototype.guid = function () {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
                    var e = 16 * Math.random() | 0;
                    return ("x" == t ? e : 3 & e | 8).toString(16);
                });
            }, t;
        }(),
        u = function () {
            function t() { }

            return t.prototype.createPrintElementTypeHtml = function (t, e) {
                var n = $('<ul class="hiprint-printElement-type"></ul>');
                return e.forEach(function (t) {
                    var e = $("<li></li>");
                    e.append('<span class="title">' + t.name + "</span>");
                    var i = $("<ul></ul>");
                    e.append(i), t.printElementTypes.forEach(function (t) {
                        i.append('<li><a class="ep-draggable-item" tid="' + t.tid + '">  ' + t.title + " </a></li>");
                    }), n.append(e);
                }), $(t).append(n), n.find(".ep-draggable-item");
            }, t;
        }(),
        h = function () {
            function t() { }

            return t.prototype.init = function (t) {
                this.target = $('<input type="text" class="hitable-editor-text" value="" />'), t.getTarget().append(this.target), this.target.focus();
            }, t.prototype.getValue = function () {
                return this.target.val();
            }, t.prototype.setValue = function (t) {
                this.target.val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        c = function () {
            function t() {
                this.text = new h();
            }

            return Object.defineProperty(t, "Instance", {
                get: function get() {
                    return t._instance || (t._instance = new t()), t._instance;
                },
                enumerable: !0,
                configurable: !0
            }), t;
        }(),
        d = function () {
            function t() { }

            return Object.defineProperty(t, "Instance", {
                get: function get() {
                    return c._instance || (t._instance = new t()), t._instance;
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.createEditor = function (t) {
                return $.extend({}, c.Instance[t]);
            }, t;
        }(),
        f = function () {
            function t() { }

            return t.mergeRect = function (t, e) {
                var n = Math.min(t.x, e.x),
                    i = Math.min(t.y, e.y);
                return new m({
                    x: n,
                    y: i,
                    height: Math.max(t.y + t.height, e.y + e.height) - i,
                    width: Math.max(t.x + t.width, e.x + e.width) - n
                });
            }, t;
        }(),
        g = function () {
            function t(t, e) {
                this.selectedCells = [], this.rows = t, this.tableTatget = e;
            }

            return t.prototype.clear = function () {
                this.tableTatget.find("td").removeClass("selected");
            }, t.prototype.setSingleSelect = function (t) {
                this.startCell = t, this.selectedCells = [];
            }, t.prototype.getSingleSelect = function () {
                if (this.selectedCells.length) {
                    if (1 == this.selectedCells.length) return 1 == this.selectedCells[0].length ? this.selectedCells[0][0] : void 0;
                    if (this.selectedCells.length > 1) return;
                }

                return this.startCell;
            }, t.prototype.singleSelectByXY = function (t, e) {
                var n = this.getCellByXY(t, e);
                n && (this.clear(), n && (n.cell.select(), this.startCell = n, this.selectedCells = []));
            }, t.prototype.multipleSelectByXY = function (t, e) {
                this.clear();
                var n = [];

                if (this.startCell) {
                    var i = this.getCellByXY(t, e);

                    if (i) {
                        var o = f.mergeRect(this.startCell.cell.getTableRect(), i.cell.getTableRect());
                        this.selectByRect(new v(o), n);
                    }
                }

                this.selectedCells = n;
            }, t.prototype.selectByRect = function (t, e) {
                this.rows.forEach(function (n, i) {
                    var o = [];
                    n.columns.forEach(function (e) {
                        e.isInRect(t) && (o.push(new y(i, e)), e.select());
                    }), o.length && e.push(o);
                }), t.changed && (t.changed = !1, e.splice(0, e.length), this.selectByRect(t, e));
            }, t.prototype.getSelectedCells = function () {
                return this.selectedCells;
            }, t.prototype.getCellByXY = function (t, e) {
                var n;
                return this.rows.forEach(function (i, o) {
                    var r = i.columns.filter(function (n) {
                        return n.isXYinCell(t, e);
                    });
                    r.length && (n = new y(o, r[0]));
                }), n;
            }, t;
        }(),
        m = function () {
            return function (t) {
                this.x = t.x, this.y = t.y, this.height = t.height, this.width = t.width;
            };
        }(),
        v = function () {
            return function (t) {
                this.rect = t;
            };
        }(),
        y = function () {
            return function (t, e) {
                this.rowIndex = t, this.cell = e;
            };
        }(),
        b = function () {
            function t() { }

            return t.createId = function () {
                return this.id += 1, this.id;
            }, t.id = 1, t;
        }(),
        w = function () {
            function t() { }

            return t.prototype.init = function (t, e) {
                var n = this;
                this.tableOptions = e, this.title = t.title, this.field = t.field, t.getTarget().unbind("dblclick.hitable").bind("dblclick.hitable", function () {
                    t.isEditing = !0, n.beginEdit(t);
                });
            }, t.prototype.getDisplayHtml = function () {
                return this.title;
            }, t.prototype.beginEdit = function (t) {
                var e = this;
                this.editor = d.Instance.createEditor("text"), t.getTarget().html(""), this.editor.init(t), (this.title || this.field) && this.editor.setValue((this.title || "") + "#" + (this.field || "")), $(this.editor.target).keydown(function (n) {
                    13 == n.keyCode && e.endEdit(t);
                }), $(this.editor.target).blur(function (n) {
                    e.endEdit(t);
                }), this.tableOptions.editingCell && this.tableOptions.editingCell.id != t.id && this.tableOptions.editingCell.innerElement.endEdit(this.tableOptions.editingCell), this.tableOptions.editingCell = t;
            }, t.prototype.endEdit = function (t) {
                var e = this.editor.getValue();

                if (e) {
                    var n = e.split("#");
                    t.title = this.title = n[0], n.length > 0 && (t.field = this.field = n[1]);
                }

                this.editor.destroy(), t.getTarget().html(this.title);
            }, t;
        }(),
        T = function () {
            return function (t) {
                this.title = t.title, this.field = t.field, this.width = t.width, this.align = t.align, this.vAlign = t.vAlign, this.colspan = t.colspan, this.rowspan = t.rowspan;
            };
        }(),
        E = function () {
            function t() {
                this.id = b.createId();
            }

            return t.prototype.init = function (t, e, n) {
                this.rowId = n, this.isEditing = !1;
                var i = /^[0-9]*$/;
                this.target = t, this.tableOptions = e;
                var o = this.target.attr("colspan");
                this.colspan = i.test(o) ? parseInt(o) : 1;
                var r = this.target.attr("rowspan");
                this.rowspan = i.test(r) ? parseInt(r) : 1, this.initEvent(), this.initInnerEelement();
            }, t.prototype.beginEdit = function () {
                if (!this.isEditing && this.tableOptions.isEnableEdit && this.tableOptions.onBeforEdit(this)) {
                    var t = this.getValue();
                    this.editor = d.Instance.createEditor("text"), this.isEditing = !0, this.tableOptions.editingCell = this, this.target.html(""), this.editor.init(this), this.editor.setValue(t);
                }
            }, t.prototype.endEdit = function () {
                this.isEditing = !1;
                var t = this.editor.getValue();
                this.editor.destroy(), this.target.html(t);
            }, t.prototype.getTarget = function () {
                return this.target;
            }, t.prototype.getValue = function () {
                return this.target.html();
            }, t.prototype.setValue = function (t) { }, t.prototype.initInnerEelement = function () {
                this.innerElement = new w(), this.innerElement.init(this, this.tableOptions);
            }, t.prototype.initEvent = function () { }, t.prototype.isXYinCell = function (t, e) {
                var n = new m({
                    x: t,
                    y: e,
                    height: 0,
                    width: 0
                });
                return this.isOverlap(n);
            }, t.prototype.getTableRect = function () {
                return new m({
                    x: this.target.offset().left,
                    y: this.target.offset().top,
                    height: this.target[0].offsetHeight,
                    width: this.target[0].offsetWidth
                });
            }, t.prototype.isOverlap = function (t) {
                var e = this.getTableRect();
                return t.x + t.width > e.x && e.x + e.width > t.x && t.y + t.height > e.y && e.y + e.height > t.y;
            }, t.prototype.isInRect = function (t) {
                var e = t.rect,
                    n = this.getTableRect();

                if (e.x + e.width > n.x && n.x + n.width > e.x && e.y + e.height > n.y && n.y + n.height > e.y) {
                    var i = f.mergeRect(e, n);
                    return JSON.stringify(e) == JSON.stringify(i) || (t.changed = !0, t.rect = i, !0);
                }

                return !1;
            }, t.prototype.isSelected = function () {
                return this.target.hasClass("selected");
            }, t.prototype.select = function () {
                this.target.addClass("selected");
            }, t.prototype.isHeader = function () {
                return !1;
            }, t.prototype.setAlign = function (t) {
                this.align = t, t ? this.target.css("text-align", t) : this.target[0].style.textAlign = "";
            }, t.prototype.setVAlign = function (t) {
                this.vAlign = t, t ? this.target.css("vertical-align", t) : this.target[0].style.verticalAlign = "";
            }, t.prototype.getEntity = function () {
                return new T(this);
            }, t;
        }(),
        x = (_r = function r(t, e) {
            return (_r = Object.setPrototypeOf || _instanceof({
                __proto__: []
            }, Array) && function (t, e) {
                t.__proto__ = e;
            } || function (t, e) {
                for (var n in e) {
                    e.hasOwnProperty(n) && (t[n] = e[n]);
                }
            })(t, e);
        }, function (t, e) {
            function n() {
                this.constructor = t;
            }

            _r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
        }),
        P = function (t) {
            function e(e) {
                var n = this;
                return e = e || {}, (n = t.call(this) || this).width = e.width ? parseFloat(e.width.toString()) : 100, n.title = e.title, n.field = e.field, n.fixed = e.fixed, n.rowspan = e.rowspan ? parseInt(e.rowspan) : 1, n.colspan = e.colspan ? parseInt(e.colspan) : 1, n.align = e.align, n.vAlign = e.vAlign, n.formatter = e.formatter, n.styler = e.styler, n.checkbox = e.checkbox, n;
            }

            return x(e, t), e;
        }(E),
        C = function () {
            return function (t, e, n) {
                this.tid = t, this.options = e, this.printElementType = n;
            };
        }(),
        O = function () {
            function t() {
                this.name = "lineHeight";
            }

            return t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("line-height", e + "pt"), "line-height:" + e + "pt";
                    t[0].style.lineHeight = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        字体行高\n        </div>\n        <div class="hiprint-option-item-field">\n        <select>\n        <option value="" >默认</option>\n        <option value="6" >6pt</option>\n        <option value="6.75" >6.75pt</option>\n        <option value="7.5" >7.5pt</option>\n        <option value="8.25" >8.25pt</option>\n        <option value="9" >9pt</option>\n        <option value="9.75" >9.75pt</option>\n        <option value="10.5" >10.5pt</option>\n        <option value="11.25" >11.25pt</option>\n        <option value="12" >12pt</option>\n        <option value="12.75" >12.75pt</option>\n        <option value="13.5" >13pt</option>\n        <option value="14.25" >14.25pt</option>\n        <option value="15" >15pt</option>\n        <option value="15.75" >15.75pt</option>\n        <option value="16.5" >16.5pt</option>\n        <option value="17.25" >17.25pt</option>\n        <option value="18" >18pt</option>\n        <option value="18.75" >18.75pt</option>\n        <option value="19.5" >19.5pt</option>\n        <option value="20.25" >20.25pt</option>\n        <option value="21" >21pt</option>\n        <option value="21.75" >21.75pt</option>\n        <option value="22.5" >22.5pt</option>\n        <option value="23.25" >23.25pt</option>\n        <option value="24" >24pt</option>\n        <option value="24.75" >24.75pt</option>\n        <option value="25.5" >25.5pt</option>\n        <option value="26.25" >26.25pt</option>\n        <option value="27" >27pt</option>\n        <option value="27.75" >27.75pt</option>\n        <option value="28.5" >28.5pt</option>\n        <option value="29.25" >29.25pt</option>\n        <option value="30" >30pt</option>\n        <option value="30.75" >30.75pt</option>\n        <option value="31.5" >31.5pt</option>\n        <option value="32.25" >32.25pt</option>\n        <option value="33" >33pt</option>\n        <option value="33.75" >33.75pt</option>\n        <option value="34.5" >34.5pt</option>\n        <option value="35.25" >35.25pt</option>\n        <option value="36" >36pt</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return parseInt(t.toString());
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        H = function () {
            function t() {
                this.name = "fontFamily";
            }

            return t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        字体\n        </div>\n        <div class="hiprint-option-item-field">\n        <select>\n        <option value="" >默认</option>\n            <option value="SimSun" >宋体</option>\n            <option value="Microsoft YaHei" >微软雅黑</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("font-family", e), "font-family:" + e;
                    t[0].style.fontFamily = "";
                }

                return null;
            }, t.prototype.getValue = function () {
                return this.target.find("select").val();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        S = function () {
            function t() {
                this.name = "fontSize";
            }

            return t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("font-size", e + "pt"), "font-size:" + e + "pt";
                    t[0].style.fontSize = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        字体大小\n        </div>\n        <div class="hiprint-option-item-field">\n        <select>\n        <option value="" >默认</option>\n        <option value="6" >6pt</option>\n        <option value="6.75" >6.75pt</option>\n        <option value="7.5" >7.5pt</option>\n        <option value="8.25" >8.25pt</option>\n        <option value="9" >9pt</option>\n        <option value="9.75" >9.75pt</option>\n        <option value="10.5" >10.5pt</option>\n        <option value="11.25" >11.25pt</option>\n        <option value="12" >12pt</option>\n        <option value="12.75" >12.75pt</option>\n        <option value="13.5" >13.5pt</option>\n        <option value="14.25" >14.25pt</option>\n        <option value="15" >15pt</option>\n        <option value="15.75" >15.75pt</option>\n        <option value="16.5" >16.5pt</option>\n        <option value="17.25" >17.25pt</option>\n        <option value="18" >18pt</option>\n        <option value="18.75" >18.75pt</option>\n        <option value="19.5" >19.5pt</option>\n        <option value="20.25" >20.25pt</option>\n        <option value="21" >21pt</option>\n        <option value="21.75" >21.75pt</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return parseInt(t.toString());
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        D = function () {
            function t() {
                this.name = "fontWeight";
            }

            return t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("font-weight", e), "font-weight:" + e;
                    t[0].style.fontWeight = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        字体粗细\n        </div>\n        <div class="hiprint-option-item-field">\n        <select>\n        <option value="" >默认</option>\n            <option value="100" >100</option>\n            <option value="200" >200</option>\n            <option value="300" >300</option>\n            <option value="400" >400</option>\n            <option value="500" >500</option>\n            <option value="600" >600</option>\n            <option value="700" >700</option>\n            <option value="800" >800</option>\n            <option value="900" >900</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                return $(this.target.find("select")).val();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        I = function () {
            function t() {
                this.name = "letterSpacing";
            }

            return t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("letter-spacing", e + "pt"), "letter-spacing:" + e + "pt";
                    t[0].style.letterSpacing = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        字间距\n        </div>\n        <div class="hiprint-option-item-field">\n        <select>\n        <option value="" >默认</option>\n        <option value="0.75" >0.75pt</option>\n        <option value="1.5" >1.5pt</option>\n        <option value="2.25" >2.25pt</option>\n        <option value="3" >3pt</option>\n        <option value="3.75" >3.75pt</option>\n        <option value="4.5" >4.5pt</option>\n        <option value="5.25" >5.25pt</option>\n        <option value="6" >6pt</option>\n        <option value="6.75" >6.75pt</option>\n        <option value="7.5" >7.5pt</option>\n        <option value="8.25" >8.25pt</option>\n        <option value="9" >9pt</option>\n        <option value="9.75" >9.75pt</option>\n        <option value="10.5" >10.5pt</option>\n        <option value="11.25" >11.25pt</option>\n        <option value="12" >12pt</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return parseFloat(t.toString());
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        z = function () {
            function t() {
                this.name = "textAlign";
            }

            return t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("text-align", e), "text-align:" + e;
                    t[0].style.textAlign = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        对齐\n        </div>\n        <div class="hiprint-option-item-field">\n        <select>\n        <option value="" >默认</option>\n        <option value="" >居左</option>\n        <option value="center" >居中</option>\n        <option value="right" >居右</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                return this.target.find("select").val();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        R = function () {
            function t() {
                this.name = "hideTitle";
            }

            return t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        标题显示隐藏\n        </div>\n        <div class="hiprint-option-item-field">\n        <select >\n        <option value="" >默认</option>\n            <option value="false" >显示</option>\n            <option value="true" >隐藏</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                if ("true" == this.target.find("select").val()) return !0;
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        B = function () {
            function t() {
                this.name = "textType";
            }

            return t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        打印类型\n        </div>\n        <div class="hiprint-option-item-field">\n        <select>\n        <option value="" >默认</option>\n        <option value="" >文本</option>\n        <option value="barcode" >条形码</option>\n        <option value="qrcode" >二维码</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                return this.target.find("select").val();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        L = function () {
            function t() {
                this.name = "tableBorder";
            }

            return t.prototype.css = function (t, e) {
                if (t.find("table").length) {
                    if ("border" == e) return t.find("table").css("border", "1px solid"), "border:1px solid";
                    "noBorder" == e ? t.find("table").css("border", "0px solid") : t.find("table")[0].style.border = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        表格边框\n        </div>\n        <div class="hiprint-option-item-field">\n            <select>\n            <option value="" >默认</option>\n            <option value="border" >有边框</option>\n            <option value="noBorder" >无边框</option>\n            </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        F = function () {
            function t() {
                this.name = "tableHeaderBorder";
            }

            return t.prototype.css = function (t, e) {
                if (t.find("thead tr").length) {
                    if ("border" == e) return t.find("thead tr").css("border", "1px solid"), "border:1pt solid";
                    "noBorder" == e ? t.find("thead tr").css("border", "0px solid") : t.find("thead tr").map(function (t, e) {
                        e.style.border = "";
                    });
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        表头边框\n        </div>\n        <div class="hiprint-option-item-field">\n        <select >\n        <option value="" >默认</option>    \n        <option value="border" >有边框</option>\n            <option value="noBorder" >无边框</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        A = function () {
            function t() {
                this.name = "tableHeaderCellBorder";
            }

            return t.prototype.css = function (t, e) {
                if (t.find("thead tr td").length) {
                    if ("border" == e) return t.find("thead tr td").css("border", "1px solid"), "border:1px solid";
                    "noBorder" == e ? t.find("thead tr td").css("border", "0px solid") : t.find("thead tr td").map(function (t, e) {
                        e.style.border = "";
                    });
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        表头单元格边框\n        </div>\n        <div class="hiprint-option-item-field">\n        <select >\n        <option value="" >默认</option>    \n        <option value="border" >有边框</option>\n            <option value="noBorder" >无边框</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        k = function () {
            function t() {
                this.name = "tableHeaderRowHeight";
            }

            return t.prototype.css = function (t, e) {
                if (t.find("thead tr td").length) {
                    if (e) return t.find("thead tr td:not([rowspan])").css("height", e + "pt"), "height:" + e + "pt";
                    t.find("thead tr td").map(function (t, e) {
                        e.style.height = "";
                    });
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        表头行高\n        </div>\n        <div class="hiprint-option-item-field">\n        <select>\n        <option value="" >默认</option>\n        <option value="13.5" >13pt</option>\n        <option value="14.25" >14.25pt</option>\n        <option value="15" >15pt</option>\n        <option value="15.75" >15.75pt</option>\n        <option value="16.5" >16.5pt</option>\n        <option value="17.25" >17.25pt</option>\n        <option value="18" >18pt</option>\n        <option value="18.75" >18.75pt</option>\n        <option value="19.5" >19.5pt</option>\n        <option value="20.25" >20.25pt</option>\n        <option value="21" >21pt</option>\n        <option value="21.75" >21.75pt</option>\n        <option value="22.5" >22.5pt</option>\n        <option value="23.25" >23.25pt</option>\n        <option value="24" >24pt</option>\n        <option value="24.75" >24.75pt</option>\n        <option value="25.5" >25.5pt</option>\n        <option value="26.25" >26.25pt</option>\n        <option value="27" >27pt</option>\n        <option value="27.75" >27.75pt</option>\n        <option value="28.5" >28.5pt</option>\n        <option value="29.25" >29.25pt</option>\n        <option value="30" >30pt</option>\n        <option value="30.75" >30.75pt</option>\n        <option value="31.5" >31.5pt</option>\n        <option value="32.25" >32.25pt</option>\n        <option value="33" >33pt</option>\n        <option value="33.75" >33.75pt</option>\n        <option value="34.5" >34.5pt</option>\n        <option value="35.25" >35.25pt</option>\n        <option value="36" >36pt</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return parseInt(t.toString());
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        N = function () {
            function t() {
                this.name = "tableHeaderFontSize";
            }

            return t.prototype.css = function (t, e) {
                if (t.find("thead").length) {
                    if (e) return t.find("thead").css("font-size", e + "pt"), "font-size:" + e + "pt";
                    t.find("thead").map(function (t, e) {
                        e.style.fontSize = "";
                    });
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        表头字体大小\n        </div>\n        <div class="hiprint-option-item-field">\n        <select>\n        <option value="" >默认</option>\n        <option value="6" >6pt</option>\n        <option value="6.75" >6.75pt</option>\n        <option value="7.5" >7.5pt</option>\n        <option value="8.25" >8.25pt</option>\n        <option value="9" >9pt</option>\n        <option value="9.75" >9.75pt</option>\n        <option value="10.5" >10.5pt</option>\n        <option value="11.25" >11.25pt</option>\n        <option value="12" >12pt</option>\n        <option value="12.75" >12.75pt</option>\n        <option value="13.5" >13.5pt</option>\n        <option value="14.25" >14.25pt</option>\n        <option value="15" >15pt</option>\n        <option value="15.75" >15.75pt</option>\n        <option value="16.5" >16.5pt</option>\n        <option value="17.25" >17.25pt</option>\n        <option value="18" >18pt</option>\n        <option value="18.75" >18.75pt</option>\n        <option value="19.5" >19.5pt</option>\n        <option value="20.25" >20.25pt</option>\n        <option value="21" >21pt</option>\n        <option value="21.75" >21.75pt</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return parseInt(t.toString());
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        V = function () {
            function t() {
                this.name = "tableHeaderFontWeight";
            }

            return t.prototype.css = function (t, e) {
                if (t.find("thead").length) {
                    if (e) return t.find("thead tr td").css("font-weight", e), "font-weight:" + e;
                    t.find("thead tr td").map(function (t, e) {
                        e.style.fontWeight = "";
                    });
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        表头字体粗细\n        </div>\n        <div class="hiprint-option-item-field">\n        <select>\n        <option value="" >默认</option>\n        <option value="100" >100</option>\n        <option value="200" >200</option>\n        <option value="300" >300</option>\n        <option value="400" >400</option>\n        <option value="500" >500</option>\n        <option value="600" >600</option>\n        <option value="700" >700</option>\n        <option value="800" >800</option>\n        <option value="900" >900</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return parseInt(t.toString());
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        W = function () {
            function t() {
                this.name = "tableBodyCellBorder";
            }

            return t.prototype.css = function (t, e) {
                if (t.find("tbody tr td").length) {
                    if ("border" == e) return t.find("tbody tr td").css("border", "1px solid"), "border:1px solid";
                    "noBorder" == e ? t.find("tbody tr td").css("border", "0px solid") : t.find("tbody tr td").map(function (t, e) {
                        e.style.border = "";
                    });
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n            表体单元格\n        </div>\n        <div class="hiprint-option-item-field">\n            <select>\n            <option value="" >默认</option>\n            <option value="border" >有边框</option>\n            <option value="noBorder" >无边框</option>\n            </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        j = function () {
            function t() {
                this.name = "tableBodyRowHeight";
            }

            return t.prototype.css = function (t, e) {
                if (t.find("tbody tr td").length) {
                    if (e) return t.find("tbody tr td:not([rowspan])").css("height", e + "pt"), "height:" + e + "pt";
                    t.find("tbody tr td").map(function (t, e) {
                        e.style.height = "";
                    });
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n            表体行高\n        </div>\n        <div class="hiprint-option-item-field">\n            <select>\n            <option value="" >默认</option>\n            <option value="13" >13pt</option>\n            <option value="14" >14pt</option>\n            <option value="15" >15pt</option>\n            <option value="16" >16pt</option>\n            <option value="17" >17pt</option>\n            <option value="18" >18pt</option>\n            <option value="19" >19pt</option>\n            <option value="20" >20pt</option>\n            <option value="21" >21pt</option>\n            <option value="22" >22pt</option>\n            <option value="23" >23pt</option>\n            <option value="24" >24pt</option>\n            <option value="25" >25pt</option>\n            <option value="26" >26pt</option>\n            <option value="27" >27pt</option>\n            <option value="28" >28pt</option>\n            <option value="29" >29pt</option>\n            <option value="30" >30pt</option>\n            <option value="31" >31pt</option>\n            <option value="32" >32pt</option>\n            <option value="33" >33pt</option>\n            <option value="34" >34pt</option>\n            <option value="35" >35pt</option>\n            <option value="36" >36pt</option>\n            <option value="37" >37pt</option>\n            <option value="38" >38pt</option>\n            <option value="39" >39pt</option>\n            </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("select").val();
                if (t) return parseInt(t.toString());
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        M = function () {
            function t() {
                this.name = "tableHeaderBackground";
            }

            return t.prototype.css = function (t, e) {
                if (t.find("thead").length) {
                    if (e) return t.find("thead").css("background", e), "background:" + e;
                    t.find("thead").map(function (t, e) {
                        e.style.background = "";
                    });
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        表头背景\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="text" />\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("input").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("input").minicolors({
                    defaultValue: t || "",
                    theme: "bootstrap"
                }), this.target.find("input").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        G = function () {
            function t() {
                this.name = "borderWidth";
            }

            return t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        边框大小\n        </div>\n        <div class="hiprint-option-item-field">\n        <select>\n        <option value="" >默认</option>\n        <option value="0.75" >0.75pt</option>\n        <option value="1.5" >1.5pt</option>\n        <option value="2.25" >2.25pt</option>\n        <option value="3" >3pt</option>\n        <option value="3.75" >3.75pt</option>\n        <option value="4.5" >4.5pt</option>\n        <option value="5.25" >5.25pt</option>\n        <option value="6" >6pt</option>\n        <option value="6.75" >6.75pt</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("border-width", e + "pt"), "border-width:" + e + "pt";
                    t[0].style.borderWidth = "";
                }

                return null;
            }, t.prototype.getValue = function () {
                return this.target.find("select").val();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        Y = function () {
            function t() {
                this.name = "barcodeMode";
            }

            return t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        条形码格式\n        </div>\n        <div class="hiprint-option-item-field">\n        <select>\n        <option value="" >默认</option>\n        <option value="CODE128A" >CODE128A</option>\n        <option value="CODE128B" >CODE128B</option>\n        <option value="CODE128C" >CODE128C</option>\n        <option value="CODE39" >CODE39</option>\n        <option value="EAN-13" >EAN-13</option>\n        <option value="EAN-8" >EAN-8</option>\n        <option value="EAN-5" >EAN-5</option>\n        <option value="EAN-2" >EAN-2</option>\n        <option value="UPC（A）" >UPC（A）</option>\n        <option value="ITF" >ITF</option>\n        <option value="ITF-14" >ITF-14</option>\n        <option value="MSI" >MSI</option>\n            <option value="MSI10" >MSI10</option>\n            <option value="MSI11" >MSI11</option>\n            <option value="MSI1010" >MSI1010</option>\n            <option value="MSI1110" >MSI1110</option>\n            <option value="Pharmacode" >Pharmacode</option>\n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                return this.target.find("select").val();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        X = function () {
            function t() {
                this.name = "color";
            }

            return t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("color", e), "color:" + e;
                    t[0].style.color = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        字体颜色\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="text" />\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("input").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("input").minicolors({
                    defaultValue: t || "",
                    theme: "bootstrap"
                }), this.target.find("input").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        U = function () {
            function t() {
                this.name = "textDecoration";
            }

            return t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        文本修饰\n        </div>\n        <div class="hiprint-option-item-field">\n        <select>\n        <option value="" >默认</option>\n            <option value="underline" >下划线。</option>\n            <option value="overline" >上划线</option>\n            <option value="line-through" >穿梭线</option>\n           \n        </select>\n        </div>\n    </div>'), this.target;
            }, t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("text-decoration", e), "text-decoration:" + e;
                    t[0].style.textDecoration = "";
                }

                return null;
            }, t.prototype.getValue = function () {
                return this.target.find("select").val();
            }, t.prototype.setValue = function (t) {
                this.target.find("select").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        J = function () {
            function t() {
                this.name = "field";
            }

            return t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item hiprint-option-item-row">\n        <div class="hiprint-option-item-label">\n        字段名\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="text" placeholder="请输入字段名">\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                return this.target.find("input").val();
            }, t.prototype.setValue = function (t) {
                this.target.find("input").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        q = function () {
            function t() {
                this.name = "title";
            }

            return t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item hiprint-option-item-row">\n        <div class="hiprint-option-item-label">\n        标题\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="text" placeholder="请输入标题">\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                return this.target.find("input").val();
            }, t.prototype.setValue = function (t) {
                this.target.find("input").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        K = function () {
            function t() {
                this.name = "testData";
            }

            return t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item hiprint-option-item-row">\n        <div class="hiprint-option-item-label">\n        测试数据\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="text" placeholder="仅字段名称存在时有效">\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                return this.target.find("input").val();
            }, t.prototype.setValue = function (t) {
                this.target.find("input").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        Q = function () {
            function t() {
                this.name = "src";
            }

            return t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item hiprint-option-item-row">\n        <div class="hiprint-option-item-label">\n        图片地址\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="text" placeholder="请输入图片地址">\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                return this.target.find("input").val();
            }, t.prototype.setValue = function (t) {
                this.target.find("input").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        Z = function () {
            function t() {
                this.name = "borderColor";
            }

            return t.prototype.css = function (t, e) {
                if (t && t.length) {
                    if (e) return t.css("border-color", e), "border-color:" + e;
                    t[0].style.borderColor = "";
                }

                return null;
            }, t.prototype.createTarget = function () {
                return this.target = $(' <div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        边框颜色\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="text" />\n        </div>\n    </div>'), this.target;
            }, t.prototype.getValue = function () {
                var t = this.target.find("input").val();
                if (t) return t.toString();
            }, t.prototype.setValue = function (t) {
                this.target.find("input").minicolors({
                    defaultValue: t || "",
                    theme: "bootstrap"
                }), this.target.find("input").val(t);
            }, t.prototype.destroy = function () {
                this.target.remove();
            }, t;
        }(),
        tt = function () {
            function t() { }

            return t.registerItem = function (e) {
                if (e.name) throw new Error("styleItem must have name");
                if (t.printElementOptionItems.filter(function (t) {
                    return t.name == e.name;
                }).length) throw new Error("Duplicate registration item [" + e.name + "] item name must be unique " + e.name);
                t.printElementOptionItems.push(e);
            }, t.getItem = function (e) {
                var n = t.printElementOptionItems.filter(function (t) {
                    return t.name == e;
                });
                return n.length ? n[0] : null;
            }, t.printElementOptionItems = [new H(), new S(), new D(), new I(), new O(), new z(), new R(), new B(), new L(), new F(), new A(), new k(), new N(), new V(), new W(), new j(), new M(), new G(), new Y(), new X(), new U(), new J(), new q(), new K(), new Q(), new Z()], t;
        }(),
        et = function () {
            return function (t) {
                this.printLine = t.printLine, this.target = t.target, this.referenceElement = t.referenceElement;
            };
        }(),
        nt = function () {
            function t(t) {
                this.printElementType = t, this.id = l.instance.guid();
            }

            return t.prototype.getProxyTarget = function () {
                var t = this.getData(),
                    e = this.createTarget(this.getTitle(), t);
                return this.updateTargetSize(e), this.css(e, t), e;
            }, t.prototype.setTemplateId = function (t) {
                this.templateId = t;
            }, t.prototype.getField = function () {
                return this.options.field || this.printElementType.field;
            }, t.prototype.getTitle = function () {
                return this.printElementType.title;
            }, t.prototype.updateSizeAndPositionOptions = function (t, e, n, i) {
                this.options.setLeft(t), this.options.setTop(e), this.options.setWidth(n), this.options.setHeight(i);
            }, t.prototype.initSizeByHtml = function (t) {
                if (t && t.length) {
                    this.createTempContainer();
                    var e = t.clone();
                    this.getTempContainer().append(e), this.options.initSizeByHtml(parseInt(i.px.toPt(e.width()).toString()), parseInt(i.px.toPt(e.height()).toString())), this.removeTempContainer();
                }
            }, t.prototype.updateTargetSize = function (t) {
                t.css("width", this.options.displayWidth()), t.css("height", this.options.displayHeight());
            }, t.prototype.updateTargetWidth = function (t) {
                t.css("width", this.options.displayWidth());
            }, t.prototype.getDesignTarget = function (t) {
                var e = this;
                return this.designTarget = this.getHtml(t)[0].target, this.designPaper = t, this.designTarget.click(function () {
                    i.event.trigger(e.getPrintElementSelectEventKey(), e);
                }), this.designTarget;
            }, t.prototype.getPrintElementSelectEventKey = function () {
                return "PrintElementSelectEventKey_" + this.templateId;
            }, t.prototype.design = function () {
                var t = this;
                this.designTarget.hidraggable({
                    onDrag: function onDrag(e, n, i) {
                        t.updateSizeAndPositionOptions(n, i);
                    },
                    moveUnit: "pt",
                    minMove: p.instance.movingDistance,
                    onBeforeDrag: function onBeforeDrag(t) { },
                    onStopDrag: function onStopDrag(t) { }
                }), this.designTarget.hireizeable({
                    showPoints: t.getReizeableShowPoints(),
                    onResize: function onResize(e, n, i, o, r) {
                        t.onResize(e, n, i, o, r);
                    }
                });
            }, t.prototype.getPrintElementEntity = function (t) {
                return t ? new C(void 0, this.options.getPrintElementOptionEntity(), this.printElementType.getPrintElementTypeEntity()) : new C(this.printElementType.tid, this.options.getPrintElementOptionEntity());
            }, t.prototype.submitOption = function () {
                var t = this;
                this.getPrintElementOptionItems().forEach(function (e) {
                    var n = e.getValue();
                    t.options[e.name] = n || void 0;
                }), this.updateDesignViewFromOptions();
            }, t.prototype.getReizeableShowPoints = function () {
                return ["s", "e"];
            }, t.prototype.onResize = function (t, e, n, i, o) {
                this.updateSizeAndPositionOptions(o, i, n, e);
            }, t.prototype.getOrderIndex = function () {
                return this.options.getTop();
            }, t.prototype.getHtml = function (t, e) {
                var n = [],
                    i = this.getBeginPrintTopInPaperByReferenceElement(t);
                this.isHeaderOrFooter(t) || i > t.paperFooter && (n.push(new et({
                    target: void 0,
                    printLine: void 0
                })), i = i - t.paperFooter + t.paperHeader);
                var o = this.getData(e),
                    r = this.createTarget(this.getTitle(), o);
                return this.updateTargetSize(r), this.css(r, o), this.stylerCss(r, this.getData(e)), r.css("position", "absolute"), r.css("left", this.options.displayLeft()), r.css("top", i + "pt"), n.push(new et({
                    target: r,
                    printLine: i + this.options.getHeight()
                })), n;
            }, t.prototype.getBeginPrintTopInPaperByReferenceElement = function (t) {
                var e = this.options.getTop();
                return this.isHeaderOrFooter(t) ? e : t.referenceElement.isPositionLeftOrRight(e) ? t.referenceElement.printTopInPaper + (e - t.referenceElement.top) : t.referenceElement.bottomInLastPaper + (e - (t.referenceElement.top + t.referenceElement.height));
            }, t.prototype.css = function (t, e) {
                var n = this,
                    i = [],
                    o = this.getConfigOptions();

                if (o) {
                    var r = o.supportOptions;
                    r && r.forEach(function (e) {
                        var o = tt.getItem(e.name);

                        if (o && o.css) {
                            var r = o.css(t, n.options.getValueFromOptionsOrDefault(e.name));
                            r && i.push(r);
                        }
                    });
                }

                this.stylerCss(t, e);
            }, t.prototype.stylerCss = function (t, e) {
                if (this.printElementType.styler) {
                    var n = this.printElementType.styler(e[this.getField()], this.options, t);
                    if (n) Object.keys(n).forEach(function (e) {
                        t.css(e, n[e]);
                    });
                }
            }, t.prototype.getData = function (t) {
                return t ? t[this.getField()] || "" : this.printElementType.getData();
            }, t.prototype.getPrintElementOptionItems = function () {
                if (this._printElementOptionItems) return this._printElementOptionItems;
                var t = [],
                    e = this.getConfigOptions();

                if (e) {
                    var n = e.supportOptions;
                    n && n.filter(function (t) {
                        return !t.hidden;
                    }).forEach(function (e) {
                        var n = tt.getItem(e.name);
                        t.push(n);
                    });
                }

                return this._printElementOptionItems = this.filterOptionItems(t.concat()), this._printElementOptionItems;
            }, t.prototype.filterOptionItems = function (t) {
                return this.printElementType.field ? t.filter(function (t) {
                    return "field" != t.name;
                }) : t;
            }, t.prototype.createTempContainer = function () {
                this.removeTempContainer(), $("body").append($('<div class="hiprint_temp_Container hiprint-printPaper" style="overflow:hidden;height: 0px;box-sizing: border-box;"></div>'));
            }, t.prototype.removeTempContainer = function () {
                $(".hiprint_temp_Container").remove();
            }, t.prototype.getTempContainer = function () {
                return $(".hiprint_temp_Container");
            }, t.prototype.isHeaderOrFooter = function (t) {
                return this.options.getTop() < t.paperHeader || this.options.getTop() >= t.paperFooter;
            }, t.prototype.delete = function () {
                this.designTarget && this.designTarget.remove();
            }, t;
        }(),
        it = function () {
            return function () {
                this.rowColumns = [];
            };
        }(),
        ot = function () {
            function t() { }

            return t.createTableHead = function (e, n) {
                for (var i = t.reconsitutionTableColumnTree(e), o = $("<thead></thead>"), r = t.getColumnsWidth(i, n), a = function a(t) {
                    var e = $("<tr></tr>");
                    i[t].forEach(function (t) {
                        var n = $("<td></td>");
                        t.field && n.attr("field", t.field), t.align && n.css("text-align", t.halign || t.align), t.vAlign && n.css("vertical-align", t.vAlign), t.colspan > 1 && n.attr("colspan", t.colspan), t.rowspan > 1 && n.attr("rowspan", t.rowspan), n.html(t.title), r[t.field] ? (n.attr("haswidth", "haswidth"), t.hasWidth = !0, n.css("width", r[t.field] + "pt")) : t.hasWidth = !1, e.append(n);
                    }), o.append(e);
                }, p = 0; p < i.totalLayer; p++) {
                    a(p);
                }

                return o;
            }, t.createTableRow = function (e, n, o, r) {
                var a = t.reconsitutionTableColumnTree(e),
                    p = $("<tbody></tbody>");
                (n || (n = []), r.groupFields.length) ? i.groupBy(n, r.groupFields, function (t) {
                    var e = {};
                    return r.groupFields.forEach(function (n) {
                        return e[n] = t[n];
                    }), e;
                }).forEach(function (e) {
                    var n = $("<tr><td colspan=" + a.colspan + "></td></tr>");

                    if (r.groupFormatter ? n.find("td").append(r.groupFormatter(e, o)) : 1 == r.groupFields.length && n.find("td").append(e[r.groupFields[0]] || ""), p.append(n), e.rows.forEach(function (e) {
                        var n = t.createRowTarget(a, e, r, o);
                        p.append(n);
                    }), r.groupFooterFormatter) {
                        var i = $("<tr><td colspan=" + a.colspan + "></td></tr>");
                        i.find("td").append(r.groupFooterFormatter(e, o)), p.append(i);
                    }
                }) : n.forEach(function (e) {
                    var n = t.createRowTarget(a, e, r, o);
                    p.append(n);
                });
                return p;
            }, t.createRowTarget = function (t, e, n, i) {
                var o = $("<tr></tr>");

                if (t.rowColumns.forEach(function (t, i) {
                    var r = $("<td></td>");
                    t.field && r.attr("field", t.field), t.align && r.css("text-align", t.align), t.vAlign && r.css("vertical-align", t.vAlign);
                    var a = t.formatter ? t.formatter(e[t.field], e, i, n) : e[t.field];

                    if (r.html(a), t.styler) {
                        var p = t.styler(e[t.field], e, i, n);
                        if (p) Object.keys(p).forEach(function (t) {
                            r.css(t, p[t]);
                        });
                    }

                    o.append(r);
                }), i.rowStyler) {
                    var r = i.rowStyler(e, n);
                    if (r) Object.keys(r).forEach(function (t) {
                        o.css(t, r[t]);
                    });
                }

                return o;
            }, t.getColumnsWidth = function (e, n) {
                var i = {},
                    o = t.allAutoWidth(e),
                    r = t.allFixedWidth(e);
                return e.rowColumns.forEach(function (t) {
                    if (t.fixed) i[t.field] = t.width; else {
                        var e = n - r,
                            a = t.width / o * (e > 0 ? e : 0);
                        i[t.field] = a;
                    }
                }), i;
            }, t.resizeTableCellWeight = function (e, n, i) {
                var o = t.reconsitutionTableColumnTree(n),
                    r = t.getColumnsWidth(o, i);
                e.find("thead tr td[haswidth]").map(function (t, e) {
                    var n = $(e).attr("field"),
                        i = r[n];
                    $(e).css("width", i + "pt");
                });
            }, t.allAutoWidth = function (t) {
                var e = 0;
                return t.rowColumns.forEach(function (t) {
                    e += t.fixed ? 0 : t.width;
                }), e;
            }, t.allFixedWidth = function (t) {
                var e = 0;
                return t.rowColumns.forEach(function (t) {
                    e += t.fixed ? t.width : 0;
                }), e;
            }, t.reconsitutionTableColumnTree = function (t, e, n) {
                var i = e || new it();
                i.colspan = 0;

                for (var o = function o(e) {
                    i.totalLayer = e + 1, i[e] = t[e], 0 == e && t[e].forEach(function (t) {
                        i.colspan += t.colspan;
                    }), i.rowColumns = i.rowColumns.concat(i[e].filter(function (n) {
                        return n.rowspan == t.length - e;
                    }));
                }, r = 0; r < t.length; r++) {
                    o(r);
                }

                return i;
            }, t;
        }(),
        rt = function () {
            function t(t) {
                this.top = t.top, this.left = t.left, this.height = t.height, this.width = t.width, this.bottomInLastPaper = t.bottomInLastPaper, this.beginPrintPaperIndex = t.beginPrintPaperIndex, this.printTopInPaper = t.printTopInPaper, this.endPrintPaperIndex = t.endPrintPaperIndex;
            }

            return t.prototype.isPositionLeftOrRight = function (t) {
                return this.top <= t && this.top + this.height > t;
            }, t;
        }(),
        at = function () {
            return function () { };
        }(),
        pt = function () {
            function t(t) {
                t = t || {}, this.left = t.left, this.top = t.top, this.height = t.height, this.width = t.width, this.init(t);
            }

            return t.prototype.setDefault = function (t) {
                this.defaultOptions = t, this.initSize();
            }, t.prototype.initSize = function () {
                this.width || this.setWidth(this.defaultOptions.width), this.height || this.setHeight(this.defaultOptions.height);
            }, t.prototype.initSizeByHtml = function (t, e) {
                this.width || this.setWidth(t), this.height || this.setHeight(e);
            }, t.prototype.getLeft = function () {
                return this.left;
            }, t.prototype.displayLeft = function () {
                return this.left + "pt";
            }, t.prototype.setLeft = function (t) {
                null != t && (this.left = t);
            }, t.prototype.getTop = function () {
                return this.top;
            }, t.prototype.displayTop = function () {
                return this.top + "pt";
            }, t.prototype.setTop = function (t) {
                null != t && (this.top = t);
            }, t.prototype.getHeight = function () {
                return this.height;
            }, t.prototype.displayHeight = function () {
                return this.height + "pt";
            }, t.prototype.setHeight = function (t) {
                null != t && (this.height = t);
            }, t.prototype.getWidth = function () {
                return this.width;
            }, t.prototype.displayWidth = function () {
                return this.width + "pt";
            }, t.prototype.setWidth = function (t) {
                null != t && (this.width = t);
            }, t.prototype.getValueFromOptionsOrDefault = function (t) {
                return null == this[t] ? this.defaultOptions[t] : this[t];
            }, t.prototype.getPrintElementOptionEntity = function () {
                var t = new at(),
                    e = this;
                return Object.keys(this).forEach(function (n) {
                    if ("number" != typeof e[n] && "string" != typeof e[n] && _typeof(e[n]) != _typeof(!0) || (t[n] = e[n]), "style" == n) {
                        t.style = {};
                        var i = e[n];
                        if (i) Object.keys(i).forEach(function (e) {
                            "number" != typeof i[e] && "string" != typeof i[e] || (t.style[e] = i[e]);
                        });
                    }
                }), t;
            }, t.prototype.init = function (t) {
                var e = this;
                t && Object.keys(t).forEach(function (n) {
                    e[n] = t[n];
                });
            }, t;
        }(),
        st = function () {
            var _t4 = function t(e, n) {
                return (_t4 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t4(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        lt = function (t) {
            function e(e) {
                return t.call(this, e) || this;
            }

            return st(e, t), e;
        }(pt),
        ut = function () {
            var _t5 = function t(e, n) {
                return (_t5 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t5(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        ht = function (t) {
            function e(e, n) {
                var i = t.call(this, e) || this;
                return i.options = new lt(n), i.options.setDefault(new lt(p.instance.table.default).getPrintElementOptionEntity()), i;
            }

            return ut(e, t), e.prototype.updateDesignViewFromOptions = function () {
                if (this.designTarget) {
                    this.css(this.designTarget, this.getData());
                    var t = this.designTarget.find(".hiprint-printElement-table-content"),
                        e = this.getHtml(this.designPaper);
                    t.html(""), t.append(e[0].target.find(".hiprint-printElement-tableTarget"));
                }
            }, e.prototype.css = function (e, n) {
                if ((this.getField() || !this.options.content) && !this.printElementType.formatter) return t.prototype.css.call(this, e, n);
            }, e.prototype.getDesignTarget = function (t) {
                var e = this;
                return this.designTarget = this.getHtml(t)[0].target, this.designPaper = t, this.designTarget.click(function () {
                    i.event.trigger(e.getPrintElementSelectEventKey(), e);
                }), this.designTarget.find("td").hidroppable({
                    accept: ".rn-draggable-item",
                    onDrop: function onDrop(t, e) { },
                    onDragEnter: function onDragEnter(t, e) {
                        $(e).removeClass("rn-draggable-item");
                    },
                    onDragLeave: function onDragLeave(t, e) {
                        $(e).addClass("rn-draggable-item");
                    }
                }), this.designTarget;
            }, e.prototype.getConfigOptions = function () {
                return p.instance.table;
            }, e.prototype.createTarget = function (t, e) {
                var n = $('<div class="hiprint-printElement hiprint-printElement-table" style="position: absolute;"><div class="hiprint-printElement-table-content" style="height:100%;width:100%"></span></div>');
                return n.find(".hiprint-printElement-table-content").append(this.getTableHtml(e)), n;
            }, e.prototype.createtempEmptyRowsTargetStructure = function () {
                if (this.getField()) return this.createTarget(this.printElementType.title, []);
                var t = this.createTarget(this.printElementType.title, []).clone();
                return t.find("tbody tr").remove(), t;
            }, e.prototype.getTableHtml = function (t) {
                var e, n;
                if (!this.getField() && this.options.content) return (e = $("<div></div>")).append(this.options.content), (n = e.find("table")).addClass("hiprint-printElement-tableTarget"), n;
                if (this.printElementType.formatter) return (e = $("<div></div>")).append(this.printElementType.formatter(t)), (n = e.find("table")).addClass("hiprint-printElement-tableTarget"), n;
                var i = $('<table class="hiprint-printElement-tableTarget" style="border-collapse: collapse;"></table>');
                return i.append(ot.createTableHead(this.printElementType.columns, this.options.getWidth())), i.append(ot.createTableRow(this.printElementType.columns, t, this.options, this.printElementType)), i;
            }, e.prototype.getHtml = function (t, e) {
                this.createTempContainer();
                var n = this.getPaperHtmlResult(t, e);
                return this.removeTempContainer(), n;
            }, e.prototype.getPaperHtmlResult = function (t, e) {
                var n = [],
                    i = this.getData(e),
                    o = this.getTableHtml(i),
                    r = this.createtempEmptyRowsTargetStructure();
                e ? this.updateTargetWidth(r) : this.updateTargetSize(r), this.css(r, i), this.css(o, i), this.getTempContainer().html(""), this.getTempContainer().append(r);

                for (var a, p = this.getBeginPrintTopInPaperByReferenceElement(t), s = 0, l = !1; !l;) {
                    var u = 0;
                    0 == s && p > t.paperFooter && (p = p - t.paperFooter + t.paperHeader, n.push(new et({
                        target: void 0,
                        printLine: void 0
                    })), u = t.contentHeight - (p - t.paperHeader), s++);
                    var h = n.length > 0 ? n[n.length - 1].target : void 0,
                        c = this.getRowsInSpecificHeight(u > 0 ? u : 0 == s ? t.paperFooter - p : t.contentHeight, r, o, s, h);
                    l = c.isEnd;
                    var d = void 0;
                    c.target && (c.target.css("left", this.options.displayLeft()), c.target[0].height = ""), 0 == s || u > 0 ? (c.target && (a = p, c.target.css("top", p + "pt")), d = l ? p + (c.height > this.options.getHeight() ? c.height : this.options.getHeight()) : p + c.height) : (c.target && (a = t.paperHeader, c.target.css("top", t.paperHeader + "pt")), d = t.paperHeader + c.height), n.push(new et({
                        target: c.target,
                        printLine: d,
                        referenceElement: new rt({
                            top: this.options.getTop(),
                            left: this.options.getLeft(),
                            height: this.options.getHeight(),
                            width: this.options.getWidth(),
                            beginPrintPaperIndex: t.index,
                            bottomInLastPaper: d,
                            printTopInPaper: a
                        })
                    })), s++;
                }

                return n;
            }, e.prototype.getRowsInSpecificHeight = function (t, e, n, o, r) {
                var a = void 0,
                    p = n.find("tbody"),
                    s = e.outerHeight(),
                    l = i.pt.toPx(t);

                for (e.find("tbody").html(""); ;) {
                    if (s <= l) {
                        if (0 == p.find("tr").length) {
                            a = {
                                target: e.clone(),
                                length: e.find("tbody tr").length,
                                height: i.px.toPt(s),
                                isEnd: !0
                            }, 0 == e.find("tbody tr").length && r && (a = {
                                target: void 0,
                                length: 0,
                                height: 0,
                                isEnd: !0
                            });
                        } else {
                            var u = p.find("tr:lt(1)");
                            e.find("tbody").append(u), (s = e.outerHeight()) > l && (p.prepend(u), s = e.outerHeight(), a = {
                                target: e.clone(),
                                length: e.find("tbody tr").length,
                                height: i.px.toPt(s),
                                isEnd: !1
                            });
                        }
                    } else a = {
                        target: void 0,
                        length: 0,
                        height: 0,
                        isEnd: !1
                    };
                    if (a) break;
                }

                return a;
            }, e.prototype.getData = function (t) {
                if (!t) return [{}];
                var e = t[this.getField()];
                return e ? JSON.parse(JSON.stringify(e)) : [];
            }, e.prototype.onResize = function (e, n, i, o, r) {
                t.prototype.updateSizeAndPositionOptions.call(this, r, o, i, n), ot.resizeTableCellWeight(this.designTarget, this.printElementType.columns, this.options.getWidth());
            }, e.prototype.getReizeableShowPoints = function () {
                return ["s", "e"];
            }, e;
        }(nt),
        ct = function () {
            return function (t) {
                this.field = t.field, this.title = t.title, this.type = t.type, this.columns = t.columns;
            };
        }(),
        dt = function () {
            function t(t) {
                var e = this;
                this.field = t.field, this.title = t.title, this.tid = t.tid, this.data = t.data, this.styler = t.styler, this.formatter = t.formatter, this.type = t.type, this.options = t.options, this.columns = [], (t.columns || []).forEach(function (t, n) {
                    e.columns.push(e.createTableColumnArray(t));
                }), this.rowStyler = t.rowStyler, this.striped = t.striped, this.groupFields = t.groupFields || [], this.groupFormatter = t.groupFormatter, this.groupFooterFormatter = t.groupFooterFormatter;
            }

            return t.prototype.createPrintElement = function (t) {
                return new ht(this, t);
            }, t.prototype.getData = function () {
                return [{}];
            }, t.prototype.createTableColumnArray = function (t) {
                var e = [];
                return t.forEach(function (t, n) {
                    e.push(new P(t));
                }), e;
            }, t.prototype.getPrintElementTypeEntity = function () {
                return new ct({
                    title: this.title,
                    type: this.type
                });
            }, t;
        }(),
        ft = function () {
            var _t6 = function t(e, n) {
                return (_t6 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t6(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        gt = function (t) {
            function e(e, n) {
                var i = t.call(this, e) || this;
                return i.options = new pt(n), i.options.setDefault(new pt(p.instance.image.default).getPrintElementOptionEntity()), i;
            }

            return ft(e, t), e.prototype.getReizeableShowPoints = function () {
                return ["se"];
            }, e.prototype.getData = function (t) {
                return t && this.getField() ? t[this.getField()] || "" : this.options.src || this.printElementType.getData();
            }, e.prototype.createTarget = function (t, e) {
                var n = $('<div class="hiprint-printElement hiprint-printElement-image" style="position: absolute;"><div class="hiprint-printElement-image-content" style="height:100%;width:100%"></div></div>');
                return this.updateTargetImage(n, t, e), n;
            }, e.prototype.initSizeByHtml = function (e) {
                t.prototype.initSizeByHtml.call(this, e), this.css(e, this.getData());
            }, e.prototype.getConfigOptions = function () {
                return p.instance.image;
            }, e.prototype.updateDesignViewFromOptions = function () {
                this.designTarget && (this.css(this.designTarget, this.getData()), this.updateTargetImage(this.designTarget, this.getTitle(), this.getData()));
            }, e.prototype.updateTargetImage = function (t, e, n) {
                var i = t.find(".hiprint-printElement-image-content");
                i.find("img").length ? i.find("img").attr("src", n) : i.html('<img style="width:100%;height:100%;" src="' + n + '">');
            }, e;
        }(nt),
        mt = function () {
            var _t7 = function t(e, n) {
                return (_t7 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t7(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        vt = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this;
            }

            return mt(e, t), e.prototype.getHideTitle = function () {
                return null == this.hideTitle ? this.defaultOptions.hideTitle : this.hideTitle;
            }, e;
        }(pt),
        yt = function () {
            var _t8 = function t(e, n) {
                return (_t8 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t8(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        bt = function (t) {
            function e(e, n) {
                var i = t.call(this, e) || this;
                return i.options = new vt(n), i.options.setDefault(new vt(p.instance.longText.default).getPrintElementOptionEntity()), i;
            }

            return yt(e, t), e.prototype.getDesignTarget = function (e) {
                var n = t.prototype.getDesignTarget.call(this, e);
                return n.find(".hiprint-printElement-longText-content").css("border", "1px dashed #cebcbc"), n;
            }, e.prototype.updateDesignViewFromOptions = function () {
                if (this.designTarget) {
                    var t = this.getData();
                    this.updateTargetText(this.designTarget, this.getTitle(), t), this.css(this.designTarget, t);
                }
            }, e.prototype.getConfigOptions = function () {
                return p.instance.longText;
            }, e.prototype.getTitle = function () {
                return this.options.title || this.printElementType.title;
            }, e.prototype.getData = function (t) {
                return t ? t[this.getField()] || "" : this.printElementType.getData() || "";
            }, e.prototype.updateTargetText = function (t, e, n) {
                var i = t.find(".hiprint-printElement-longText-content"),
                    o = this.getText(e, n);
                i.html(o);
            }, e.prototype.createTarget = function (t, e) {
                var n = $('<div class="hiprint-printElement hiprint-printElement-longText" style="position: absolute;"><div class="hiprint-printElement-longText-content" style="height:100%;width:100%"></div></div>');
                return this.updateTargetText(n, t, e), n;
            }, e.prototype.getText = function (t, e) {
                return this.getField() ? this.printElementType.formatter ? this.printElementType.formatter(t, e, this.options) : (this.options.getHideTitle() ? "" : t + "：") + e : t;
            }, e.prototype.getHtml = function (t, e) {
                this.createTempContainer();
                var n = this.getPaperHtmlResult(t, e);
                return this.removeTempContainer(), n;
            }, e.prototype.getPaperHtmlResult = function (t, e) {
                var n = [],
                    i = 0,
                    o = this.getData(e),
                    r = this.getText(this.getTitle(), o),
                    a = this.createTarget(this.getTitle(), "");
                this.css(a, o), e ? this.updateTargetWidth(a) : this.updateTargetSize(a), this.getTempContainer().html(""), this.getTempContainer().append(a);
                var p = [];
                r.split("\r\n").forEach(function (t, e) {
                    (p = p.concat(t.split(""))).push("<br/>");
                });

                for (var s = this.getBeginPrintTopInPaperByReferenceElement(t); p.length > 0;) {
                    var l = 0;
                    s > t.paperFooter && (s = s - t.paperFooter + t.paperHeader, n.push(new et({
                        target: void 0,
                        printLine: void 0
                    })), l = t.contentHeight - (s - t.paperHeader), i++);
                    var u = this.getStringBySpecificHeight(p, l > 0 ? l : 0 == i ? t.paperFooter - s : t.contentHeight, a);
                    p.splice(0, u.length);
                    var h = void 0,
                        c = void 0;
                    u.target.css("left", this.options.displayLeft()), u.target[0].height = "", 0 == i || l > 0 ? (c = s, u.target.css("top", c + "pt"), h = p.length > 0 ? s + u.height : s + (u.height > this.options.getHeight() ? u.height : this.options.getHeight())) : (c = t.paperHeader, u.target.css("top", c + "pt"), h = c + u.height), n.push(new et({
                        target: u.target,
                        printLine: h,
                        referenceElement: new rt({
                            top: this.options.getTop(),
                            left: this.options.getLeft(),
                            height: this.options.getHeight(),
                            width: this.options.getWidth(),
                            beginPrintPaperIndex: t.index,
                            bottomInLastPaper: h,
                            printTopInPaper: c
                        })
                    })), i++;
                }

                return n;
            }, e.prototype.getStringBySpecificHeight = function (t, e, n) {
                var o = i.pt.toPx(e),
                    r = this.IsPaginationIndex(t, t.length - 1, o, n);
                return r.IsPagination ? r : this.BinarySearch(t, 0, t.length - 1, o, n);
            }, e.prototype.BinarySearch = function (t, e, n, i, o) {
                var r = Math.floor((e + n) / 2);
                if (e > n) return o.find(".hiprint-printElement-longText-content").html(""), {
                    IsPagination: !0,
                    height: 0,
                    length: 0,
                    target: o.clone()
                };
                var a = this.IsPaginationIndex(t, r, i, o);
                return a.IsPagination ? a : "l" == a.move ? this.BinarySearch(t, e, r - 1, i, o) : this.BinarySearch(t, r + 1, n, i, o);
            }, e.prototype.IsPaginationIndex = function (t, e, n, o) {
                o.find(".hiprint-printElement-longText-content").html(t.slice(0, e + 2).join(""));
                var r = o.height();
                o.find(".hiprint-printElement-longText-content").html(t.slice(0, e + 1).join(""));
                var a = o.height();
                return e >= t.length - 1 && a < n ? {
                    IsPagination: !0,
                    height: i.px.toPt(a),
                    length: t.length,
                    target: o.clone()
                } : a <= n && r >= n ? {
                    IsPagination: !0,
                    height: a,
                    length: e + 1,
                    target: o.clone()
                } : a >= n ? {
                    IsPagination: !1,
                    move: "l"
                } : r <= n ? {
                    IsPagination: !1,
                    move: "r"
                } : {
                                    IsPagination: !0,
                                    result: 1
                                };
            }, e;
        }(nt),
        wt = function () {
            var _t9 = function t(e, n) {
                return (_t9 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t9(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        Tt = function (t) {
            function e(e) {
                return t.call(this, e) || this;
            }

            return wt(e, t), e.prototype.getHideTitle = function () {
                return null == this.hideTitle ? this.defaultOptions.hideTitle : this.hideTitle;
            }, e.prototype.getTextType = function () {
                return (null == this.textType ? this.defaultOptions.textType : this.textType) || "text";
            }, e.prototype.getFontSize = function () {
                return (null == this.fontSize ? this.defaultOptions.fontSize : this.fontSize) || 9;
            }, e.prototype.getbarcodeMode = function () {
                return (null == this.barcodeMode ? this.defaultOptions.barcodeMode : this.barcodeMode) || "CODE128";
            }, e;
        }(pt),
        Et = function () {
            var _t10 = function t(e, n) {
                return (_t10 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t10(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        xt = function (t) {
            function e(e, n) {
                var i = t.call(this, e) || this;
                return i.options = new Tt(n), i.options.setDefault(new Tt(p.instance.text.default).getPrintElementOptionEntity()), i;
            }

            return Et(e, t), e.prototype.getDesignTarget = function (e) {
                return t.prototype.getDesignTarget.call(this, e);
            }, e.prototype.updateDesignViewFromOptions = function () {
                if (this.designTarget) {
                    var t = this.getData();
                    this.css(this.designTarget, t), this.updateTargetText(this.designTarget, this.getTitle(), t);
                }
            }, e.prototype.getConfigOptions = function () {
                return p.instance.text;
            }, e.prototype.getTitle = function () {
                return this.options.title || this.printElementType.title;
            }, e.prototype.getData = function (t) {
                return t ? t[this.getField()] || "" : this.options.testData || this.printElementType.getData() || "";
            }, e.prototype.updateTargetText = function (t, e, n) {
                var o = t.find(".hiprint-printElement-text-content"),
                    r = "";
                r = this.getField() ? this.printElementType.formatter ? this.printElementType.formatter(e, n, this.options) : (this.options.getHideTitle() ? "" : e + "：") + n : n = e;
                var a = this.options.getTextType();
                if ("text" == a) o.html(r); else {
                    if ("barcode" == a) {
                        o.html('<svg width="100%" display="block" height="100%" class="hibarcode_imgcode" preserveAspectRatio="none slice"></svg ><div class="hibarcode_displayValue"></div>');

                        try {
                            n ? (JsBarcode(o.find(".hibarcode_imgcode")[0], n, {
                                format: this.options.getbarcodeMode(),
                                width: .1,
                                textMargin: -1,
                                lineColor: this.options.color || "#000000",
                                margin: 0,
                                height: parseInt(i.pt.toPx(this.options.getHeight() || 10).toString()),
                                displayValue: !1
                            }), o.find(".hibarcode_imgcode").attr("height", "100%"), o.find(".hibarcode_imgcode").attr("width", "100%"), o.find(".hibarcode_displayValue").html(n)) : o.html("");
                        } catch (t) {
                            console.log(t), o.html("此格式不支持该文本");
                        }
                    }

                    if ("qrcode" == a) {
                        o.html("");

                        try {
                            if (n) {
                                var p = parseInt(i.pt.toPx(this.options.getWidth() || 20)),
                                    s = parseInt(i.pt.toPx(this.options.getHeight() || 20));
                                new QRCode(o[0], {
                                    width: p,
                                    height: s,
                                    colorDark: this.options.color || "#000000",
                                    useSVG: !0
                                }).makeCode(n);
                            }
                        } catch (t) {
                            console.log(t), o.html("二维码生成失败");
                        }
                    }
                }
            }, e.prototype.onResize = function (e, n, i, o, r) {
                t.prototype.onResize.call(this, e, n, i, o, r);
                "barcode" != this.options.getTextType() && "qrcode" != this.options.getTextType() || this.updateTargetText(this.designTarget, this.getTitle(), this.getData());
            }, e.prototype.createTarget = function (t, e) {
                var n = $('<div class="hiprint-printElement hiprint-printElement-text" style="position: absolute;"><div class="hiprint-printElement-text-content" style="height:100%;width:100%"></div></div>');
                return this.updateTargetText(n, t, e), n;
            }, e;
        }(nt),
        Pt = function () {
            var _t11 = function t(e, n) {
                return (_t11 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t11(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        Ct = function (t) {
            function e(e) {
                return t.call(this, e) || this;
            }

            return Pt(e, t), e;
        }(pt),
        Ot = function () {
            var _t12 = function t(e, n) {
                return (_t12 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t12(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        Ht = function (t) {
            function e(e, n) {
                var i = t.call(this, e) || this;
                return i.options = new Ct(n), i.options.setDefault(new Ct({}).getPrintElementOptionEntity()), i;
            }

            return Ot(e, t), e.prototype.updateDesignViewFromOptions = function () {
                if (this.designTarget) {
                    var t = this.getData();
                    this.css(this.designTarget, t);
                }
            }, e.prototype.getConfigOptions = function () {
                return {};
            }, e.prototype.createTarget = function (t, e) {
                var n = $('<div class="hiprint-printElement hiprint-printElement-html" style="position: absolute;"><div class="hiprint-printElement-html-content" style="height:100%;width:100%"></div></div>');
                if (this.options.content) n.find(".hiprint-printElement-html-content").append(this.options.content); else if (this.printElementType.formatter) {
                    var i = this.printElementType.formatter(this.getData(), this.options);
                    n.find(".hiprint-printElement-html-content").append(i);
                }
                return n;
            }, e;
        }(nt),
        St = function () {
            var _t13 = function t(e, n) {
                return (_t13 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t13(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        _t = function (t) {
            function e(e, n) {
                var i = t.call(this, e) || this;
                return i.options = new pt(n), i.options.setDefault(new pt(p.instance.vline.default).getPrintElementOptionEntity()), i;
            }

            return St(e, t), e.prototype.updateDesignViewFromOptions = function () {
                if (this.designTarget) {
                    var t = this.getData();
                    this.css(this.designTarget, t);
                }
            }, e.prototype.getConfigOptions = function () {
                return p.instance.hline;
            }, e.prototype.createTarget = function (t, e) {
                return $('<div class="hiprint-printElement hiprint-printElement-vline" style="border-left:1px solid;position: absolute;"></div>');
            }, e.prototype.getReizeableShowPoints = function () {
                return ["s"];
            }, e;
        }(nt),
        Dt = function () {
            var _t14 = function t(e, n) {
                return (_t14 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t14(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        It = function (t) {
            function e(e, n) {
                var i = t.call(this, e) || this;
                return i.options = new pt(n), i.options.setDefault(new pt(p.instance.hline.default).getPrintElementOptionEntity()), i;
            }

            return Dt(e, t), e.prototype.updateDesignViewFromOptions = function () {
                if (this.designTarget) {
                    var t = this.getData();
                    this.css(this.designTarget, t);
                }
            }, e.prototype.getConfigOptions = function () {
                return p.instance.hline;
            }, e.prototype.createTarget = function (t, e) {
                return $('<div class="hiprint-printElement hiprint-printElement-hline" style="border-top:1px solid;position: absolute;"></div>');
            }, e.prototype.getReizeableShowPoints = function () {
                return ["e"];
            }, e;
        }(nt),
        zt = function () {
            var _t15 = function t(e, n) {
                return (_t15 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t15(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        Rt = function (t) {
            function e(e, n) {
                var i = t.call(this, e) || this;
                return i.options = new pt(n), i.options.setDefault(new pt(p.instance.rect.default).getPrintElementOptionEntity()), i;
            }

            return zt(e, t), e.prototype.updateDesignViewFromOptions = function () {
                if (this.designTarget) {
                    var t = this.getData();
                    this.css(this.designTarget, t);
                }
            }, e.prototype.getConfigOptions = function () {
                return p.instance.hline;
            }, e.prototype.createTarget = function (t, e) {
                return $('<div class="hiprint-printElement hiprint-printElement-rect" style="border:1px solid;position: absolute;"></div>');
            }, e;
        }(nt),
        Bt = function () {
            var _t16 = function t(e, n) {
                return (_t16 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t16(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        Lt = function (t) {
            function e(e, n) {
                var i = t.call(this, e) || this;
                return i.options = new pt(n), i.options.setDefault(new pt(p.instance.oval.default).getPrintElementOptionEntity()), i;
            }

            return Bt(e, t), e.prototype.updateDesignViewFromOptions = function () {
                if (this.designTarget) {
                    var t = this.getData();
                    this.css(this.designTarget, t);
                }
            }, e.prototype.getConfigOptions = function () {
                return p.instance.hline;
            }, e.prototype.createTarget = function (t, e) {
                return $('<div class="hiprint-printElement hiprint-printElement-oval" style="border:1px solid;position: absolute;border-radius: 50%;"></div>');
            }, e;
        }(nt),
        Ft = function () {
            function t() { }

            return t.createPrintElement = function (t, e) {
                return "text" == t.type ? new xt(t, e) : "image" == t.type ? new gt(t, e) : "longText" == t.type ? new bt(t, e) : "table" == t.type ? new ht(t, e) : "html" == t.type ? new Ht(t, e) : "vline" == t.type ? new _t(t, e) : "hline" == t.type ? new It(t, e) : "rect" == t.type ? new Rt(t, e) : "oval" == t.type ? new Lt(t, e) : void 0;
            }, t;
        }(),
        $t = function () {
            function t(t) {
                this.field = t.field, this.title = t.title, this.tid = t.tid, this.data = t.data, this.styler = t.styler, this.formatter = t.formatter, this.type = t.type, this.options = t.options;
            }

            return t.prototype.getData = function () {
                return this.data;
            }, t.prototype.createPrintElement = function (t) {
                var e = {};
                return $.extend(e, t || {}), Ft.createPrintElement(this, e);
            }, t.prototype.getPrintElementTypeEntity = function () {
                return new ct({
                    title: this.title,
                    type: this.type
                });
            }, t;
        }(),
        At = function () {
            return function (t) {
                this.table = t.table, this.isEnableEdit = t.isEnableEdit, this.trs = t.trs, this.resizeRow = t.resizeRow, this.resizeColumn = t.resizeColumn;
            };
        }(),
        kt = function () {
            function t(t) {
                this.options = new At(t);
            }

            return t.prototype.enableEidt = function () {
                this.options.isEnableEdit;
            }, t.prototype.disableEdit = function () {
                this.options.isEnableEdit;
            }, t.prototype.isEnableEdit = function () {
                return this.options.isEnableEdit;
            }, t;
        }(),
        Nt = function () {
            return function (t) {
                this.cell = t.cell, this.link = t.link, this.linkType = t.linkType, this.bottom = t.bottom, this.rightMost = t.rightMost, this.rowLevel = t.rowLevel, this.columnLevel = t.columnLevel, this.indexInTableGridRow = t.indexInTableGridRow, this.indexInTableGridColumn = t.indexInTableGridColumn;
            };
        }(),
        Vt = function () {
            function t() { }

            return t.getLeftTableCell = function (t, e) {
                var n;
                return t.forEach(function (t, i) {
                    t.cell && i < e && (n = t.cell);
                }), n;
            }, t.getIndex = function (t, e) {
                var n;
                return t.forEach(function (t, i) {
                    t.cell && t.cell.id == e && (n = i);
                }), n;
            }, t;
        }(),
        Wt = function () {
            return function (t, e) {
                this.target = t, this.grips = e;
            };
        }(),
        jt = function () {
            return function (t) {
                this.target = t;
            };
        }(),
        Mt = function () {
            return function () {
                this.rowColumns = [];
            };
        }(),
        Gt = function () {
            function t() { }

            return t.getColumnsWidth = function (e, n) {
                var i = {},
                    o = t.allAutoWidth(e);
                return e.rowColumns.forEach(function (t) {
                    var e = n - 0,
                        r = t.width / o * (e > 0 ? e : 0);
                    i[t.id] = r;
                }), i;
            }, t.resizeTableCellWeight = function (t) {
                t.forEach(function (t) {
                    t.columns.forEach(function (t) {
                        t.hasWidth && $(t.getTarget()).css("width", t.width + "pt");
                    });
                });
            }, t.allAutoWidth = function (t) {
                var e = 0;
                return t.rowColumns.forEach(function (t) {
                    e += t.width;
                }), e;
            }, t.reconsitutionTableColumnTree = function (t, e, n) {
                for (var i = e || new Mt(), o = function o(e) {
                    i.totalLayer = e + 1, i[e] = t[e].columns, i.rowColumns = i.rowColumns.concat(i[e].filter(function (n) {
                        return n.rowspan == t.length - e;
                    }));
                }, r = 0; r < t.length; r++) {
                    o(r);
                }

                return i;
            }, t;
        }(),
        Yt = function () {
            function t(t) {
                this.signature = "HiTresizer", this.hitable = t, this.rows = t.rows, this.target = t.target;
            }

            return t.prototype.init = function () {
                this.addResizeRowAndColumn(), this.hitable.optionsCoat.options.resizeColumn && this.createColumnGrips(), this.hitable.optionsCoat.options.resizeRow && this.createRowGrips();
            }, t.prototype.resizeTableCellWidth = function () {
                Gt.resizeTableCellWeight(this.rows);
            }, t.prototype.addResizeRowAndColumn = function () { }, t.prototype.createColumnGrips = function () {
                var t = this,
                    e = this,
                    n = [],
                    o = $('<div class="columngrips"/>');
                o.width(this.target.width()), this.rows.forEach(function (r) {
                    r.columns.forEach(function (r, a) {
                        if (r.getTarget().attr("haswidth")) {
                            var p = $('<div class="columngrip"><div class="gripResizer"></div></div>');
                            o.append(p);
                            var s = new jt(p);
                            n.length > 0 && (n[n.length - 1].nextGrip = s), n.push(s), t.syncGrips(r, s), $(p).hidraggable({
                                axis: "h",
                                onDrag: function onDrag(t, e, n) { },
                                moveUnit: "pt",
                                minMove: 1,
                                onBeforeDrag: function onBeforeDrag(t) {
                                    if (!s.nextGrip) return !1;
                                    e.dragingGrip = s, e.dragingGrip.left = parseFloat(e.dragingGrip.target.css("left").replace("px", "")), s.target.addClass("columngripDraging");
                                },
                                onStopDrag: function onStopDrag(n) {
                                    var o = parseFloat(e.dragingGrip.target.css("left").replace("px", "")),
                                        r = i.px.toPt(o - e.dragingGrip.left);
                                    s.cell.width = s.cell.width + r, s.nextGrip.cell.width = s.nextGrip.cell.width - r, t.resizeTableCellWidth(), s.target.removeClass("columngripDraging"), e.updateColumnGrips();
                                }
                            });
                        }
                    });
                }), this.target.before(o), this.cgripContariner = new Wt(o, n);
            }, t.prototype.updateColumnGrips = function () {
                this.cgripContariner && (this.cgripContariner.target.remove(), this.createColumnGrips());
            }, t.prototype.updateRowGrips = function () {
                this.rgripContariner && (this.rgripContariner.target.remove(), this.createRowGrips());
            }, t.prototype.createRowGrips = function () {
                var t = this,
                    e = this,
                    n = [],
                    o = $('<div class="rowgrips"/>');
                this.rows.forEach(function (r, a) {
                    var p = $('<div class="rowgrip"><div class="gripResizer"></div></div>');
                    o.append(p);
                    var s = new jt(p);
                    n.push(s), a > 0 && a < t.rows.length && $(p).hidraggable({
                        axis: "v",
                        onDrag: function onDrag(t, e, n) { },
                        moveUnit: "pt",
                        minMove: 1,
                        onBeforeDrag: function onBeforeDrag(t) {
                            e.dragingGrip = s, e.dragingGrip.top = parseFloat(e.dragingGrip.target.css("top").replace("px", "")), s.target.addClass("rowgripDraging");
                        },
                        onStopDrag: function onStopDrag(t) {
                            var n = parseFloat(e.dragingGrip.target.css("top").replace("px", "")),
                                o = i.px.toPt(n - e.dragingGrip.top + e.rows[a].columns[0].getTarget().height());
                            e.rows[a].columns[0].getTarget().css("height", o + "pt"), e.syncRowGrips(), s.target.removeClass("rowgripDraging");
                        }
                    });
                }), this.target.before(o), this.rgripContariner = new Wt(o, n), this.syncRowGrips();
            }, t.prototype.syncGrips = function (t, e) {
                var n = t.getTarget();
                e.cell = t, e.target.css({
                    left: n.offset().left - this.target.offset().left + n.outerWidth(!1),
                    height: 30
                });
            }, t.prototype.syncRowGrips = function () {
                var t = this;
                this.rgripContariner.target.height(this.target.height()), this.rows.forEach(function (e, n) {
                    var i = e.columns[0].getTarget();
                    t.rgripContariner.grips[n].target.css({
                        top: i.offset().top - t.target.offset().top + i.outerHeight(!1),
                        width: 30
                    });
                });
            }, t.prototype.addResizerHeadRow = function () {
                this.target.find("thead").prepend();
            }, t;
        }(),
        Xt = function () {
            function t() {
                this.id = b.createId();
            }

            return t.prototype.init = function (t, e) {
                this.target = e || $("<tr></tr>"), this.tableOptions = t, this.initCells(this.columns);
            }, t.prototype.getTarget = function () {
                return this.target;
            }, t.prototype.initCells = function (t) {
                var e = this;
                t ? t.forEach(function (t, n) {
                    t.init(e.target.find("td:eq(" + n + ")"), e.tableOptions, e.id);
                }) : (this.columns = [], this.target.find("td").map(function (t, n) {
                    var i = new P();
                    i.init($(n), e.tableOptions, e.id), e.columns.push(i);
                }));
            }, t.prototype.removeCell = function (t) {
                var e = this.columns.indexOf(t);
                this.columns[e].getTarget().remove(), this.columns.splice(e, 1);
            }, t.prototype.createTableCell = function (t, e) {
                var n = new P();
                return n.init($("<td></td>"), this.tableOptions, this.id), t > 1 && (n.getTarget().attr("rowspan", t), n.rowspan = t), e > 1 && (n.getTarget().attr("colspan", e), n.colspan = e), n;
            }, t.prototype.insertToTargetCellLeft = function (t, e) {
                var n = this.columns.indexOf(t);
                t.getTarget().before(e.getTarget()), this.columns.splice(n, 0, e);
            }, t.prototype.insertToTargetCellRight = function (t, e) {
                var n = this.columns.indexOf(t);
                this.columns[n].getTarget().after(e.getTarget()), this.columns.splice(n + 1, 0, e);
            }, t.prototype.insertCellToFirst = function (t) {
                this.target.prepend(t.getTarget()), this.columns.splice(0, 0, t);
            }, t.prototype.insertCellToLast = function (t) {
                this.columns.push(t), this.target.append(t.getTarget());
            }, t;
        }(),
        Ut = function () {
            function t(t) {
                this.id = b.createId(), this.optionsCoat = new kt(t), this.handle = t.handle, this.target = t.table, this.initRows(t.rows), this.init(t), this.tableCellSelector = new g(this.rows, this.target), this.resizer = new Yt(this), this.resizer.init();
            }

            return t.prototype.insertRow = function (t, e, n) {
                var o = e || this.tableCellSelector.getSingleSelect(),
                    r = o.cell,
                    a = this.rows[o.rowIndex],
                    p = o.rowIndex,
                    s = this.getCellGrid(),
                    l = new Xt();
                if (l.init(this.optionsCoat), n && l.getTarget().addClass(n), "above" == t) s[p].forEach(function (t) {
                    var e = t.link ? t.link : t.cell,
                        n = e.width / e.colspan;

                    if (0 == t.columnLevel) {
                        var i = l.createTableCell();
                        i.width = n, l.insertCellToLast(i);
                    } else {
                        if ("column" == t.linkType) {
                            var o = t.link.getTarget();
                            t.link.rowspan += 1, o.attr("rowspan", t.link.rowspan);
                        }

                        t.linkType;
                    }
                }), this.rows.splice(p, 0, l), a.getTarget().before(l.getTarget()), i.event.trigger("newRow" + this.id, l); else {
                    var u = p + r.rowspan - 1;
                    s[u].forEach(function (t) {
                        var e = t.link ? t.link : t.cell,
                            n = e.width / e.colspan;

                        if (t.bottom) {
                            var i = l.createTableCell();
                            i.width = n, l.insertCellToLast(i);
                        } else {
                            if (t.cell) {
                                var o = t.cell.getTarget();
                                t.cell.rowspan += 1, o.attr("rowspan", t.cell.rowspan);
                            }

                            if ("column" == t.linkType) {
                                o = t.link.getTarget();
                                t.link.rowspan += 1, o.attr("rowspan", t.link.rowspan);
                            }
                        }
                    }), this.rows.splice(u + 1, 0, l), this.rows[u].getTarget().after(l.getTarget()), i.event.trigger("newRow" + this.id, l);
                }
            }, t.prototype.insertColumn = function (t, e, n, o) {
                var r = this,
                    a = this.rows.concat(this.trRows),
                    p = e || this.tableCellSelector.getSingleSelect(),
                    s = p.cell,
                    l = p.rowIndex,
                    u = this.getCellGrid(a),
                    h = u[l].filter(function (t) {
                        return t.cell && t.cell.id == s.id || t.link && t.link.id == s.id;
                    });

                if ("left" == t) {
                    var c = h[0].indexInTableGridRow;
                    u.forEach(function (t, e) {
                        var p = t[c],
                            s = t.filter(function (t, e) {
                                return e >= c && t.cell;
                            });

                        if (0 == p.rowLevel) {
                            var l = a[e],
                                u = a[e].createTableCell();
                            n && u.getTarget().addClass(n), null != o && (u.width = o), s.length ? l.insertToTargetCellLeft(s[0].cell, u) : l.insertCellToLast(u), i.event.trigger("newCell" + r.id, u);
                        } else if ("row" == p.linkType) {
                            var h = p.link.getTarget();
                            p.link.colspan += 1, h.attr("colspan", p.link.colspan);
                        }
                    });
                } else {
                    var d = h[h.length - 1].indexInTableGridRow;
                    u.forEach(function (t, e) {
                        var p = t[d],
                            s = t.filter(function (t, e) {
                                return e <= d && t.cell;
                            });

                        if (p.rightMost) {
                            var l = a[e],
                                u = l.createTableCell();
                            n && u.getTarget().addClass(n), null != o && (u.width = o), s.length ? l.insertToTargetCellRight(s[s.length - 1].cell, u) : l.insertCellToFirst(u), i.event.trigger("newCell" + r.id, u);
                        } else {
                            var h = p.link || p.cell;

                            if ("row" == p.linkType) {
                                var c = h.getTarget();
                                h.colspan += 1, c.attr("colspan", h.colspan);
                            }

                            if (p.cell) {
                                c = h.getTarget();
                                h.colspan += 1, c.attr("colspan", h.colspan);
                            }
                        }
                    });
                }
            }, t.prototype.deleteRow = function () {
                var t = this,
                    e = this.tableCellSelector.getSingleSelect(),
                    n = (e.cell, this.rows[e.rowIndex], e.rowIndex),
                    i = this.getCellGrid(),
                    o = this.rows[n];
                i[n].forEach(function (e, r) {
                    if (e.cell) {
                        if (1 == e.cell.rowspan) o.removeCell(e.cell); else {
                            o.removeCell(e.cell);
                            var a = i[n + 1].filter(function (t, e) {
                                return t.cell && e > r;
                            }),
                                p = t.rows[n + 1],
                                s = p.createTableCell(e.cell.rowspan - 1, e.cell.colspan);
                            a.length ? p.insertToTargetCellLeft(a[0].cell, s) : p.insertCellToLast(s);
                        }
                    } else if ("column" == e.linkType) {
                        var l = e.link;
                        l.rowspan -= 1, l.getTarget().attr("rowspan", l.rowspan);
                    }
                }), o.getTarget().remove(), this.rows.splice(n, 1);
            }, t.prototype.deleteColums = function () {
                var t = this.rows.concat(this.trRows),
                    e = this.tableCellSelector.getSingleSelect(),
                    n = e.cell,
                    i = e.rowIndex,
                    o = this.getCellGrid(t),
                    r = o[i].filter(function (t) {
                        return t.cell && t.cell.id == n.id || t.link && t.link.id == n.id;
                    })[0].indexInTableGridRow;
                o.forEach(function (e, n) {
                    var i = e[r];
                    i.cell ? 1 == i.cell.colspan ? t[n].removeCell(i.cell) : (i.cell.colspan -= 1, i.cell.getTarget().attr("colspan", i.cell.colspan)) : "row" == i.linkType && (i.link.colspan -= 1, i.link.getTarget().attr("colspan", i.link.colspan));
                });
            }, t.prototype.mergeCell = function () {
                var t = this,
                    e = this.tableCellSelector.getSelectedCells();

                if (0 != e.length) {
                    var n = e[0][0].cell;
                    e.forEach(function (i, o) {
                        i.forEach(function (i, r) {
                            0 == o ? 0 != r && (n.colspan += i.cell.colspan, t.rows[i.rowIndex].removeCell(i.cell)) : t.rows[i.rowIndex].removeCell(i.cell), 0 == r && e[0][0].rowIndex + n.rowspan - 1 < i.rowIndex && (n.rowspan += i.cell.rowspan);
                        });
                    }), n.getTarget().attr("colspan", n.colspan), n.getTarget().attr("rowspan", n.rowspan), this.tableCellSelector.setSingleSelect(e[0][0]);
                }
            }, t.prototype.splitCell = function () {
                var t = this.tableCellSelector.getSingleSelect(),
                    e = this.getCellGrid(),
                    n = Vt.getIndex(e[t.rowIndex], t.cell.id);

                if (t) {
                    for (var i = t.rowIndex; i < t.rowIndex + t.cell.rowspan; i++) {
                        for (var o = this.rows[i], r = i == t.rowIndex ? t.cell : Vt.getLeftTableCell(e[i], n), a = 0; a < t.cell.colspan; a++) {
                            i == t.rowIndex && 0 == a || (r ? o.insertToTargetCellRight(r, o.createTableCell()) : o.insertCellToFirst(o.createTableCell()));
                        }
                    }

                    t.cell.rowspan = 1, t.cell.colspan = 1, t.cell.getTarget().attr("colspan", t.cell.colspan), t.cell.getTarget().attr("rowspan", t.cell.rowspan);
                }
            }, t.prototype.init = function (t) {
                var e = this;
                $(this.target).addClass("hitable"), this.optionsCoat.onBeforEdit = function (n) {
                    if (e.optionsCoat.options.onBeforEdit && !1 === t.onBeforEdit(n)) return !1;
                    return e.optionsCoat.editingCell && e.optionsCoat.editingCell.endEdit(), !0;
                }, $(this.target).mousedown(function (t) {
                    e.optionsCoat.isLeftMouseButtonDown = !0;
                }), $(this.target).mouseup(function (t) {
                    e.optionsCoat.isLeftMouseButtonDown = !1;
                }), this.initContext(), this.target.on("mousemove", function (t) {
                    1 === t.buttons && e.tableCellSelector.multipleSelectByXY(t.pageX, t.pageY);
                }).on("mousedown", function (t) {
                    1 === t.buttons && e.tableCellSelector.singleSelectByXY(t.pageX, t.pageY);
                });
            }, t.prototype.initRows = function (t) {
                var e = this;

                if (this.trRows = [], t) {
                    this.rows = t, t.forEach(function (t, n) {
                        t.init(e.optionsCoat, e.target.find("tr:eq(" + n + ")"));
                    });
                    var n = this.optionsCoat.options.trs;
                    n && this.initRowsByTrs(n).forEach(function (t) {
                        e.trRows.push(t);
                    });
                } else this.rows = this.initRowsByTrs(this.target.find("tr"));
            }, t.prototype.initRowsByTrs = function (t) {
                var e = this;
                return t.map(function (t, n) {
                    var i = new Xt();
                    return i.init(e.optionsCoat, $(n)), i;
                }).get();
            }, t.prototype.enableEidt = function () {
                this.optionsCoat.enableEidt();
            }, t.prototype.disableEdit = function () {
                this.optionsCoat.disableEdit();
            }, t.prototype.getCellGrid = function (t) {
                var e = t || this.rows,
                    n = this.getColumnStep(),
                    i = new Array();
                return e.forEach(function (t, e) {
                    t.columns.forEach(function (t, o) {
                        for (var r = 0; r < t.colspan; r++) {
                            for (var a = 0, p = !1; a < n && !p;) {
                                if (i[e] = i[e] || [], i[e][a]); else {
                                    i[e][a] = new Nt({
                                        cell: 0 == r ? t : void 0,
                                        link: 0 != r ? t : void 0,
                                        linkType: r > 0 ? "row" : void 0,
                                        rightMost: r == t.colspan - 1 || void 0,
                                        bottom: 0 == t.rowspan - 1,
                                        rowLevel: r,
                                        columnLevel: 0,
                                        indexInTableGridRow: a,
                                        indexInTableGridColumn: e
                                    });

                                    for (var s = e + 1, l = 1; l < t.rowspan; l++) {
                                        i[s] = i[s] || [], i[s][a] = new Nt({
                                            cell: void 0,
                                            link: t,
                                            linkType: r > 0 ? "rowColumn" : "column",
                                            rightMost: r == t.colspan - 1 || void 0,
                                            bottom: l == t.rowspan - 1,
                                            rowLevel: r,
                                            columnLevel: l,
                                            indexInTableGridRow: a,
                                            indexInTableGridColumn: s
                                        }), s += 1;
                                    }

                                    p = !0;
                                }
                                a++;
                            }
                        }
                    });
                }), i;
            }, t.prototype.setAlign = function (t) {
                var e = this.tableCellSelector.getSelectedCells();
                e && e.forEach(function (e) {
                    e.forEach(function (e) {
                        e.cell.setAlign(t);
                    });
                });
            }, t.prototype.setVAlign = function (t) {
                var e = this.tableCellSelector.getSelectedCells();
                e && e.forEach(function (e) {
                    e.forEach(function (e) {
                        e.cell.setVAlign(t);
                    });
                });
            }, t.prototype.getColumnStep = function (t) {
                var e = 0;
                return this.rows.length && this.rows[t || 0].columns.forEach(function (t) {
                    e += t.colspan;
                }), e;
            }, t.prototype.initContext = function () {
                var t = this;
                $(this.handle).hicontextMenu({
                    menus: [{
                        text: "在上方插入行",
                        disable: function disable() {
                            return !t.tableCellSelector.getSingleSelect();
                        },
                        callback: function callback() {
                            t.insertRow("above"), t.resizer.updateRowGrips(), i.event.trigger("updateTable" + t.id);
                        }
                    }, {
                        text: "在下方插入行",
                        borderBottom: !0,
                        disable: function disable() {
                            return !t.tableCellSelector.getSingleSelect();
                        },
                        callback: function callback() {
                            t.insertRow("below"), t.resizer.updateRowGrips(), i.event.trigger("updateTable" + t.id);
                        }
                    }, {
                        text: "向左方插入列",
                        disable: function disable() {
                            return !t.tableCellSelector.getSingleSelect();
                        },
                        callback: function callback() {
                            t.insertColumn("left"), t.resizer.updateColumnGrips(), i.event.trigger("updateTable" + t.id);
                        }
                    }, {
                        text: "向右方插入列",
                        disable: function disable() {
                            return !t.tableCellSelector.getSingleSelect();
                        },
                        borderBottom: !0,
                        callback: function callback() {
                            t.insertColumn("right"), t.resizer.updateColumnGrips(), i.event.trigger("updateTable" + t.id);
                        }
                    }, {
                        text: "删除行",
                        disable: function disable() {
                            return !t.tableCellSelector.getSingleSelect();
                        },
                        callback: function callback() {
                            t.deleteRow(), t.resizer.updateRowGrips(), i.event.trigger("updateTable" + t.id);
                        }
                    }, {
                        text: "删除列",
                        borderBottom: !0,
                        disable: function disable() {
                            return !t.tableCellSelector.getSingleSelect();
                        },
                        callback: function callback() {
                            t.deleteColums(), t.resizer.updateColumnGrips(), i.event.trigger("updateTable" + t.id);
                        }
                    }, {
                        text: "对齐",
                        borderBottom: !0,
                        menus: [{
                            text: "左",
                            callback: function callback() {
                                t.setAlign("left");
                            }
                        }, {
                            text: "左右居中",
                            callback: function callback() {
                                t.setAlign("center");
                            }
                        }, {
                            text: "右",
                            callback: function callback() {
                                t.setAlign("right");
                            }
                        }, {
                            text: "默认",
                            borderBottom: !0,
                            callback: function callback() {
                                t.setAlign("");
                            }
                        }, {
                            text: "上",
                            callback: function callback() {
                                t.setVAlign("top");
                            }
                        }, {
                            text: "垂直居中",
                            callback: function callback() {
                                t.setVAlign("middle");
                            }
                        }, {
                            text: "下",
                            callback: function callback() {
                                t.setVAlign("bottom");
                            }
                        }, {
                            text: "默认",
                            callback: function callback() {
                                t.setVAlign("");
                            }
                        }]
                    }, {
                        text: "合并单元格",
                        disable: function disable() {
                            return t.tableCellSelector.getSingleSelect();
                        },
                        callback: function callback() {
                            t.mergeCell(), i.event.trigger("updateTable" + t.id);
                        }
                    }, {
                        text: "解开单元格",
                        disable: function disable() {
                            var e = t.tableCellSelector.getSingleSelect();
                            return !e || 1 == e.cell.rowspan && 1 == e.cell.colspan;
                        },
                        callback: function callback() {
                            t.splitCell(), i.event.trigger("updateTable" + t.id);
                        }
                    }]
                });
            }, t.prototype.getTableWidth = function () {
                return i.px.toPt(this.target.outerWidth(!1));
            }, t.prototype.updateColumnGrips = function () {
                this.resizer.updateColumnGrips();
            }, t.prototype.updateRowGrips = function () {
                this.resizer.updateRowGrips();
            }, t;
        }(),
        Jt = function () {
            var _t17 = function t(e, n) {
                return (_t17 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t17(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        qt = function (t) {
            function e(e) {
                var n = t.call(this) || this;
                (n.columns = [], e.columns) && (e.columns || []).forEach(function (t) {
                    n.columns.push(new P(t));
                });
                return n;
            }

            return Jt(e, t), e.prototype.getPrintElementOptionEntity = function () {
                var t = {
                    columns: []
                };
                return this.columns.forEach(function (e) {
                    t.columns.push(e.getEntity());
                }), t;
            }, e;
        }(Xt),
        Kt = function () {
            var _t18 = function t(e, n) {
                return (_t18 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t18(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        Qt = function (t) {
            function e(e) {
                var n = t.call(this, e) || this;
                (e = e || {}).columns ? (n.columns = [], e.columns.forEach(function (t) {
                    n.columns.push(new qt(t));
                })) : n.columns = [new qt({
                    columns: [new P({
                        width: 100
                    }), new P({
                        width: 100
                    })]
                })];
                return n;
            }

            return Kt(e, t), e.prototype.getPrintElementOptionEntity = function () {
                var e = t.prototype.getPrintElementOptionEntity.call(this);
                return e.columns = [], this.columns.forEach(function (t) {
                    e.columns.push(t.getPrintElementOptionEntity());
                }), e;
            }, e;
        }(pt),
        Zt = function () {
            function t() { }

            return t.createTableHead = function (e, n) {
                for (var i = t.reconsitutionTableColumnTree(e), o = $("<thead></thead>"), r = t.getColumnsWidth(i, n), a = function a(t) {
                    var e = $("<tr></tr>");
                    i[t].forEach(function (t) {
                        var n = $("<td></td>");
                        t.id && n.attr("id", t.id), t.align && n.css("text-align", t.halign || t.align), t.vAlign && n.css("vertical-align", t.vAlign), t.colspan > 1 && n.attr("colspan", t.colspan), t.rowspan > 1 && n.attr("rowspan", t.rowspan), n.html(t.title), r[t.id] ? (t.hasWidth = !0, t.targetWidth = r[t.id], n.attr("haswidth", "haswidth"), n.css("width", r[t.id] + "pt")) : t.hasWidth = !1, e.append(n);
                    }), o.append(e);
                }, p = 0; p < i.totalLayer; p++) {
                    a(p);
                }

                return t.syncTargetWidthToOption(e), o;
            }, t.createTableRow = function (e, n, o, r) {
                var a = t.reconsitutionTableColumnTree(e),
                    p = $("<tbody></tbody>");
                (n || (n = []), r.groupFields.length) ? i.groupBy(n, r.groupFields, function (t) {
                    var e = {};
                    return r.groupFields.forEach(function (n) {
                        return e[n] = t[n];
                    }), e;
                }).forEach(function (e) {
                    var n = $("<tr><td colspan=" + a.colspan + "></td></tr>");

                    if (r.groupFormatter ? n.find("td").append(r.groupFormatter(e, o)) : 1 == r.groupFields.length && n.find("td").append(e[r.groupFields[0]] || ""), p.append(n), e.rows.forEach(function (e) {
                        var n = t.createRowTarget(a, e, r, o);
                        p.append(n);
                    }), r.groupFooterFormatter) {
                        var i = $("<tr><td colspan=" + a.colspan + "></td></tr>");
                        i.find("td").append(r.groupFooterFormatter(e, o)), p.append(i);
                    }
                }) : n.forEach(function (e) {
                    var n = t.createRowTarget(a, e, r, o);
                    p.append(n);
                });
                return p;
            }, t.createRowTarget = function (t, e, n, i) {
                var o = $("<tr></tr>");

                if (t.rowColumns.forEach(function (t, i) {
                    var r = $("<td></td>");
                    t.field && r.attr("field", t.field), t.align && r.css("text-align", t.align), t.vAlign && r.css("vertical-align", t.vAlign);
                    var a = t.formatter ? t.formatter(e[t.field], e, i, n) : e[t.field];

                    if (r.html(a), t.styler) {
                        var p = t.styler(e[t.field], e, i, n);
                        if (p) Object.keys(p).forEach(function (t) {
                            r.css(t, p[t]);
                        });
                    }

                    o.append(r);
                }), i.rowStyler) {
                    var r = i.rowStyler(e, n);
                    if (r) Object.keys(r).forEach(function (t) {
                        o.css(t, r[t]);
                    });
                }

                return o;
            }, t.getColumnsWidth = function (e, n) {
                var i = {},
                    o = t.allAutoWidth(e),
                    r = t.allFixedWidth(e);
                return e.rowColumns.forEach(function (t) {
                    if (t.fixed) i[t.id] = t.width; else {
                        var e = n - r,
                            a = t.width / o * (e > 0 ? e : 0);
                        i[t.id] = a;
                    }
                }), i;
            }, t.resizeTableCellWidth = function (e, n, i) {
                var o = t.reconsitutionTableColumnTree(n),
                    r = t.getColumnsWidth(o, i);
                e.find("thead tr td[haswidth]").map(function (t, e) {
                    var n = $(e).attr("id"),
                        i = r[n];
                    $(e).css("width", i + "pt");
                });
            }, t.allAutoWidth = function (t) {
                var e = 0;
                return t.rowColumns.forEach(function (t) {
                    e += t.fixed ? 0 : t.width;
                }), e;
            }, t.allFixedWidth = function (t) {
                var e = 0;
                return t.rowColumns.forEach(function (t) {
                    e += t.fixed ? t.width : 0;
                }), e;
            }, t.reconsitutionTableColumnTree = function (t, e, n) {
                var i = e || new it();
                i.colspan = 0;

                for (var o = function o(e) {
                    i.totalLayer = e + 1, i[e] = t[e].columns, 0 == e && t[e].columns.forEach(function (t) {
                        i.colspan += t.colspan;
                    }), i.rowColumns = i.rowColumns.concat(i[e].filter(function (n) {
                        return n.rowspan == t.length - e;
                    }));
                }, r = 0; r < t.length; r++) {
                    o(r);
                }

                return i;
            }, t.syncTargetWidthToOption = function (t) {
                t.forEach(function (t) {
                    t.columns.forEach(function (t) {
                        t.hasWidth && (t.width = t.targetWidth);
                    });
                });
            }, t;
        }(),
        te = function () {
            var _t19 = function t(e, n) {
                return (_t19 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t19(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        ee = function (t) {
            function e(e, n) {
                var i = t.call(this, e) || this;
                return i.options = new Qt(n), i.options.setDefault(new Qt(p.instance.tableCustom.default).getPrintElementOptionEntity()), i.columns = i.options.columns, i;
            }

            return te(e, t), e.prototype.updateDesignViewFromOptions = function () {
                if (this.designTarget) {
                    this.css(this.designTarget, this.getData());
                    var t = this.designTarget.find(".hiprint-printElement-table-content"),
                        e = this.getHtml(this.designPaper);
                    t.html(""), t.append(e[0].target.find(".hiprint-printElement-tableTarget")), this.setHireizeable();
                }
            }, e.prototype.getDesignTarget = function (t) {
                var e = this;
                return this.designTarget = this.getHtml(t)[0].target, this.designPaper = t, this.designTarget.click(function () {
                    i.event.trigger(e.getPrintElementSelectEventKey(), e);
                }), this.designTarget.find("td").hidroppable({
                    accept: ".rn-draggable-item",
                    onDrop: function onDrop(t, e) { },
                    onDragEnter: function onDragEnter(t, e) {
                        $(e).removeClass("rn-draggable-item");
                    },
                    onDragLeave: function onDragLeave(t, e) {
                        $(e).addClass("rn-draggable-item");
                    }
                }), this.designTarget;
            }, e.prototype.getConfigOptions = function () {
                return p.instance.table;
            }, e.prototype.createTarget = function (t, e) {
                var n = $('<div class="hiprint-printElement hiprint-printElement-table" style="position: absolute;"><div class="hiprint-printElement-table-handle"></div><div class="hiprint-printElement-table-content" style="height:100%;width:100%"></span></div>');
                return n.find(".hiprint-printElement-table-content").append(this.getTableHtml(e)), n;
            }, e.prototype.getTableHtml = function (t) {
                var e = $('<table class="hiprint-printElement-tableTarget" style="border-collapse: collapse;width:100%;"></table>');
                return e.append(Zt.createTableHead(this.columns, this.options.getWidth())), e.append(Zt.createTableRow(this.columns, t, this.options, this.printElementType)), e;
            }, e.prototype.getHtml = function (t, e) {
                this.createTempContainer();
                var n = this.getPaperHtmlResult(t, e);
                return this.removeTempContainer(), n;
            }, e.prototype.getPaperHtmlResult = function (t, e) {
                var n = [],
                    i = this.getData(e),
                    o = this.getTableHtml(i),
                    r = this.createTarget(this.printElementType.title, []);
                e ? this.updateTargetWidth(r) : this.updateTargetSize(r), this.css(r, i), this.css(o, i), this.getTempContainer().html(""), this.getTempContainer().append(r);

                for (var a, p = this.getBeginPrintTopInPaperByReferenceElement(t), s = 0, l = !1; !l;) {
                    var u = 0;
                    0 == s && p > t.paperFooter && (p = p - t.paperFooter + t.paperHeader, n.push(new et({
                        target: void 0,
                        printLine: void 0
                    })), u = t.contentHeight - (p - t.paperHeader), s++);
                    var h = n.length > 0 ? n[n.length - 1].target : void 0,
                        c = this.getRowsInSpecificHeight(u > 0 ? u : 0 == s ? t.paperFooter - p : t.contentHeight, r, o, s, h);
                    l = c.isEnd;
                    var d = void 0;
                    c.target && (c.target.css("left", this.options.displayLeft()), c.target[0].height = ""), 0 == s || u > 0 ? (c.target && (a = p, c.target.css("top", p + "pt")), d = l ? p + (c.height > this.options.getHeight() ? c.height : this.options.getHeight()) : p + c.height) : (c.target && (a = t.paperHeader, c.target.css("top", t.paperHeader + "pt")), d = t.paperHeader + c.height), n.push(new et({
                        target: c.target,
                        printLine: d,
                        referenceElement: new rt({
                            top: this.options.getTop(),
                            left: this.options.getLeft(),
                            height: this.options.getHeight(),
                            width: this.options.getWidth(),
                            beginPrintPaperIndex: t.index,
                            bottomInLastPaper: d,
                            printTopInPaper: a
                        })
                    })), s++;
                }

                return n;
            }, e.prototype.getRowsInSpecificHeight = function (t, e, n, o, r) {
                var a = void 0,
                    p = n.find("tbody"),
                    s = e.outerHeight(),
                    l = i.pt.toPx(t);

                for (e.find("tbody").html(""); ;) {
                    if (s <= l) {
                        if (0 == p.find("tr").length) {
                            a = {
                                target: e.clone(),
                                length: e.find("tbody tr").length,
                                height: i.px.toPt(s),
                                isEnd: !0
                            }, 0 == e.find("tbody tr").length && r && (a = {
                                target: void 0,
                                length: 0,
                                height: 0,
                                isEnd: !0
                            });
                        } else {
                            var u = p.find("tr:lt(1)");
                            e.find("tbody").append(u), (s = e.outerHeight()) > l && (p.prepend(u), s = e.outerHeight(), a = {
                                target: e.clone(),
                                length: e.find("tbody tr").length,
                                height: i.px.toPt(s),
                                isEnd: !1
                            });
                        }
                    } else a = {
                        target: void 0,
                        length: 0,
                        height: 0,
                        isEnd: !1
                    };
                    if (a) break;
                }

                return a;
            }, e.prototype.getData = function (t) {
                if (!t) return [{}];
                var e = t[this.getField()];
                return e ? JSON.parse(JSON.stringify(e)) : [];
            }, e.prototype.onResize = function (e, n, i, o, r) {
                t.prototype.updateSizeAndPositionOptions.call(this, r, o, i, n), Zt.resizeTableCellWidth(this.designTarget, this.columns, this.options.getWidth());
            }, e.prototype.getReizeableShowPoints = function () {
                return ["s", "e"];
            }, e.prototype.design = function () {
                var t = this;
                this.designTarget.hidraggable({
                    handle: this.designTarget.find(".hiprint-printElement-table-handle"),
                    onDrag: function onDrag(e, n, i) {
                        t.updateSizeAndPositionOptions(n, i);
                    },
                    moveUnit: "pt",
                    minMove: p.instance.movingDistance,
                    onBeforeDrag: function onBeforeDrag(t) { },
                    onStopDrag: function onStopDrag(t) { }
                }), this.setHireizeable(), this.designTarget.hireizeable({
                    showPoints: t.getReizeableShowPoints(),
                    noContainer: !0,
                    onResize: function onResize(e, n, i, o, r) {
                        t.onResize(e, n, i, o, r), t.hitable.updateColumnGrips();
                    }
                });
            }, e.prototype.setHireizeable = function () {
                var t = this;
                this.hitable = new Ut({
                    table: this.designTarget.find("table"),
                    rows: this.columns,
                    resizeRow: !1,
                    resizeColumn: !0,
                    trs: $(this.designTarget).find("tbody tr"),
                    handle: this.designTarget.find("table thead"),
                    isEnableEdit: !0
                }), i.event.on("updateTable" + this.hitable.id, function () {
                    t.updateDesignViewFromOptions();
                });
            }, e;
        }(nt),
        ne = function () {
            var _t20 = function t(e, n) {
                return (_t20 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t20(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        ie = function (t) {
            function e(e) {
                return t.call(this, e) || this;
            }

            return ne(e, t), e.prototype.createPrintElement = function (t) {
                return new ee(this, t);
            }, e;
        }(dt),
        oe = function () {
            var _t21 = function t(e, n) {
                return (_t21 = Object.setPrototypeOf || _instanceof({
                    __proto__: []
                }, Array) && function (t, e) {
                    t.__proto__ = e;
                } || function (t, e) {
                    for (var n in e) {
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    }
                })(e, n);
            };

            return function (e, n) {
                function i() {
                    this.constructor = e;
                }

                _t21(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
            };
        }(),
        re = function (t) {
            function e(e) {
                return t.call(this, e) || this;
            }

            return oe(e, t), e.prototype.createPrintElement = function (t) {
                var e = {};
                return $.extend(e, t || {}), Ft.createPrintElement(this, e);
            }, e.prototype.getPrintElementTypeEntity = function () {
                return new ct({
                    title: this.title,
                    type: this.type
                });
            }, e;
        }($t),
        ae = function () {
            function t() { }

            return t.createPrintElementType = function (t) {
                return t.type = t.type || "text", "text" == t.type ? new re(t) : "table" == t.type ? new dt(t) : "tableCustom" == t.type ? new ie(t) : new $t(t);
            }, t;
        }(),
        pe = function () {
            function t() { }

            return t.getElementTypeGroups = function (e) {
                var n = t.formatterModule(e);
                return a.instance[n] || [];
            }, t.getElementType = function (t, e) {
                if (t) return a.instance.getElementType(t);
                ae.createPrintElementType({
                    type: e
                });
            }, t.build = function (e, n) {
                var i = t.formatterModule(n),
                    o = new u().createPrintElementTypeHtml(e, this.getElementTypeGroups(i));
                this.enableDrag(o);
            }, t.buildByHtml = function (t) {
                this.enableDrag(t);
            }, t.enableDrag = function (e) {
                e.hidraggable({
                    revert: !0,
                    proxy: function proxy(t) {
                        var e = l.instance.getDragingPrintElement().printElement.getProxyTarget();
                        return e.appendTo("body"), e;
                    },
                    moveUnit: "pt",
                    minMove: 4,
                    onBeforeDrag: function onBeforeDrag(e) {
                        var n = t.getElementType($(e.data.target).attr("tid"), $(e.data.target).attr("ptype"));
                        return l.instance.setDragingPrintElement(n.createPrintElement()), !0;
                    },
                    onDrag: function onDrag(t, e, n) {
                        l.instance.getDragingPrintElement().updatePosition(e, n);
                    },
                    onStopDrag: function onStopDrag(t) { }
                });
            }, t.formatterModule = function (t) {
                return t || "_default";
            }, t;
        }(),
        se = function () {
            return function (t, e) {
                var n = this;
                this.name = t, this.printElementTypes = [], e.forEach(function (t) {
                    n.printElementTypes.push(ae.createPrintElementType(t));
                });
            };
        }(),
        le = function () {
            return function (t) {
                if (this.index = t.index, this.paperType = t.paperType, this.paperType) {
                    var e = l.instance[this.paperType];
                    this.height = e.height, this.width = e.width;
                } else this.height = t.height, this.width = t.width;

                this.paperHeader = t.paperHeader || 0, this.paperFooter = t.paperFooter || i.mm.toPt(this.height), this.printElements = t.printElements || [], this.paperNumberLeft = t.paperNumberLeft, this.paperNumberTop = t.paperNumberTop, this.paperNumberDisabled = t.paperNumberDisabled, this.rotate = t.rotate || void 0;
            };
        }(),
        ue = function () {
            function t(t, e, n, o, r, a, p, s, l) {
                this.width = i.mm.toPt(t), this.height = i.mm.toPt(e), this.mmwidth = t, this.mmheight = e, this.paperHeader = n, this.paperFooter = o, this.contentHeight = o - n, this.createTarget(), this.index = s, this.paperNumberLeft = r || parseInt((this.width - 30).toString()), this.paperNumberTop = a || parseInt((this.height - 22).toString()), this.paperNumberDisabled = p, this.referenceElement = l ? $.extend({}, l) : new rt({
                    top: 0,
                    left: 0,
                    height: 0,
                    width: 0,
                    bottomInLastPaper: 0,
                    beginPrintPaperIndex: 0,
                    printTopInPaper: 0,
                    endPrintPaperIndex: 0
                });
            }

            return t.prototype.subscribePaperBaseInfoChanged = function (t) {
                this.onPaperBaseInfoChanged = t;
            }, t.prototype.triggerOnPaperBaseInfoChanged = function () {
                this.onPaperBaseInfoChanged && this.onPaperBaseInfoChanged({
                    paperHeader: this.paperHeader,
                    paperFooter: this.paperFooter,
                    paperNumberLeft: this.paperNumberLeft,
                    paperNumberTop: this.paperNumberTop,
                    paperNumberDisabled: this.paperNumberDisabled
                });
            }, t.prototype.createTarget = function () {
                this.target = $('<div class="hiprint-printPaper"></div>'), this.target.css("width", this.mmwidth + "mm"), this.target.css("height", this.mmheight - .4 + "mm"), this.target.attr("original-height", this.mmheight);
            }, t.prototype.createHeaderLine = function () {
                var t = this;
                this.headerLinetarget = $('<div class="hiprint-headerLine"  style="position: absolute;width: 100%;border-top: 1px dashed #c9bebe;height: 7pt;"></div>'), this.headerLinetarget.css("top", (this.paperHeader || -1) + "pt"), 0 == this.paperHeader && this.headerLinetarget.addClass("hideheaderLinetarget"), this.target.append(this.headerLinetarget), this.dragHeadLineOrFootLine(this.headerLinetarget, function (e, n) {
                    t.paperHeader = n, t.triggerOnPaperBaseInfoChanged();
                });
            }, t.prototype.createFooterLine = function () {
                var t = this;
                this.footerLinetarget = $('<div class="hiprint-footerLine"  style="position: absolute;width: 100%;border-top: 1px dashed #c9bebe;height: 7pt;"></div>'), this.footerLinetarget.css("top", parseInt(this.paperFooter.toString()) + "pt"), this.paperFooter == this.height && (this.footerLinetarget.css("top", this.mmheight - .4 + "mm"), this.footerLinetarget.addClass("hidefooterLinetarget")), this.target.append(this.footerLinetarget), this.dragHeadLineOrFootLine(this.footerLinetarget, function (e, n) {
                    t.paperFooter = n, t.triggerOnPaperBaseInfoChanged();
                });
            }, t.prototype.createPaperNumber = function (t) {
                var e = this,
                    n = $('<span class="hiprint-paperNumber"  style="position: absolute">' + t + "</span>");
                return n.css("top", this.paperNumberTop + "pt"), n.css("left", this.paperNumberLeft + "pt"), this.target.append(n), this.dragHeadLineOrFootLine(n, function (t, n) {
                    e.paperNumberTop = n, e.paperNumberLeft = t, e.triggerOnPaperBaseInfoChanged();
                }), n;
            }, t.prototype.getTarget = function () {
                return this.target;
            }, t.prototype.append = function (t) {
                this.target.append(t);
            }, t.prototype.updateReferenceElement = function (t) {
                t && (this.referenceElement = t);
            }, t.prototype.updatePrintLine = function (t) {
                t >= this.printLine && (this.printLine = t);
            }, t.prototype.design = function () {
                var t = this;
                this.createHeaderLine(), this.createFooterLine(), this.target.addClass("design"), this.paperNumberTarget = this.createPaperNumber("1-1"), this.resetPaperNumber(this.paperNumberTarget), $(this.paperNumberTarget).bind("dblclick.hiprint", function () {
                    null == t.paperNumberDisabled && (t.paperNumberDisabled = !1), t.paperNumberDisabled = !t.paperNumberDisabled, t.resetPaperNumber(t.paperNumberTarget), t.triggerOnPaperBaseInfoChanged();
                });
            }, t.prototype.resetPaperNumber = function (t) {
                this.paperNumberDisabled ? t.addClass("hiprint-paperNumber-disabled") : t.removeClass("hiprint-paperNumber-disabled");
            }, t.prototype.updatePaperNumber = function (t, e) {
                var n = this.createPaperNumber(t + "-" + e);
                this.paperNumberDisabled && n.hide();
            }, t.prototype.dragHeadLineOrFootLine = function (t, e) {
                var n = this;
                t.hidraggable({
                    axis: "v",
                    onDrag: function onDrag(t, n, i) {
                        e(n, i);
                    },
                    moveUnit: "pt",
                    minMove: p.instance.movingDistance,
                    onBeforeDrag: function onBeforeDrag(t) { },
                    onStopDrag: function onStopDrag(t) {
                        n.footerLinetarget.removeClass("hidefooterLinetarget"), n.headerLinetarget.removeClass("hideheaderLinetarget");
                    }
                });
            }, t.prototype.resize = function (t, e) {
                this.width = i.mm.toPt(t), this.height = i.mm.toPt(e), this.mmwidth = t, this.mmheight = e, this.target.css("width", t + "mm"), this.target.css("height", e - .4 + "mm"), this.target.attr("original-height", this.mmheight), this.paperFooter = this.height, this.footerLinetarget.css("top", this.height + "pt"), this.contentHeight = this.paperFooter - this.paperHeader, this.paperNumberLeft = parseInt((this.width - 30).toString()), this.paperNumberTop = parseInt((this.height - 22).toString()), this.paperNumberTarget.css("top", this.paperNumberTop + "pt"), this.paperNumberTarget.css("left", this.paperNumberLeft + "pt"), this.triggerOnPaperBaseInfoChanged();
            }, t;
        }(),
        he = function () {
            function t(t, e) {
                this.templateId = e, this.index = t.index, this.width = t.width, this.height = t.height, this.paperType = t.paperType, this.paperHeader = t.paperHeader, this.paperFooter = t.paperFooter, this.initPrintElements(t.printElements), this.paperNumberLeft = t.paperNumberLeft, this.paperNumberTop = t.paperNumberTop, this.paperNumberDisabled = t.paperNumberDisabled, this.target = this.createTarget(), this.rotate = t.rotate;
            }

            return t.prototype.design = function () {
                var t = this;
                this.orderPrintElements(), this.designPaper = this.createNewPage(0), this.target.append(this.designPaper.getTarget()), this.droppablePaper(this.designPaper), this.designPaper.design(), this.designPaper.subscribePaperBaseInfoChanged(function (e) {
                    t.paperHeader = e.paperHeader, t.paperFooter = e.paperFooter, t.paperNumberLeft = e.paperNumberLeft, t.paperNumberTop = e.paperNumberTop, t.paperNumberDisabled = e.paperNumberDisabled;
                }), this.printElements.forEach(function (e) {
                    t.appendDesignPrintElement(t.designPaper, e), e.design();
                });
            }, t.prototype.getHtml = function (t, e) {
                var n = this;
                this.orderPrintElements();
                var i = [],
                    o = this.createTarget(),
                    r = this.createNewPage(i.length);
                return this.fillPaperHeaderAndFooter(r, t), i.push(r), o.append(r.getTarget()), this.printElements.filter(function (t) {
                    return t.options.getTop() > r.paperHeader && t.options.getTop() < n.paperFooter;
                }).forEach(function (e) {
                    var a = [],
                        p = i[i.length - 1];
                    p.referenceElement.isPositionLeftOrRight(e.options.getTop()) ? (r = i[p.referenceElement.beginPrintPaperIndex], a = e.getHtml(r, t)) : (r = i[p.referenceElement.endPrintPaperIndex], a = e.getHtml(r, t)), a.forEach(function (e, p) {
                        e.referenceElement && (e.referenceElement.endPrintPaperIndex = e.referenceElement.beginPrintPaperIndex + a.length - 1), p > 0 && (r.index < i.length - 1 ? r = i[r.index + 1] : (r = n.createNewPage(i.length, r.referenceElement), i.push(r), n.fillPaperHeaderAndFooter(r, t)), o.append(r.getTarget())), e.target && (r.append(e.target), r.updatePrintLine(e.printLine)), p == a.length - 1 && e.referenceElement && r.updateReferenceElement(e.referenceElement);
                    });
                }), i.forEach(function (t) {
                    t.updatePaperNumber(t.index + 1, i.length);
                }), o.prepend(this.getPrintStyle()), o;
            }, t.prototype.resize = function (t, e, n, i) {
                this.width = e, this.height = n, this.paperType = t, this.rotate = i, this.designPaper.resize(e, n);
            }, t.prototype.rotatePaper = function () {
                null == this.rotate && (this.rotate = !1), this.rotate = !this.rotate, this.resize(this.paperType, this.height, this.width, this.rotate);
            }, t.prototype.getTarget = function () {
                return this.target;
            }, t.prototype.enable = function () {
                this.target.show(), this.target.removeClass("hipanel-disable");
            }, t.prototype.disable = function () {
                this.target.hide(), this.target.addClass("hipanel-disable");
            }, t.prototype.getPanelEntity = function (t) {
                var e = [];
                return this.printElements.forEach(function (n) {
                    e.push(n.getPrintElementEntity(t));
                }), new le({
                    index: this.index,
                    width: this.width,
                    height: this.height,
                    paperType: this.paperType,
                    paperHeader: this.paperHeader,
                    paperFooter: this.paperFooter,
                    paperNumberDisabled: !!this.paperNumberDisabled || void 0,
                    paperNumberLeft: this.paperNumberLeft,
                    paperNumberTop: this.paperNumberTop,
                    printElements: e,
                    rotate: this.rotate
                });
            }, t.prototype.createTarget = function () {
                return $('<div class="hiprint-printPanel panel-index-' + this.index + '"></div>');
            }, t.prototype.droppablePaper = function (t) {
                var e = this;
                t.getTarget().hidroppable({
                    accept: ".ep-draggable-item",
                    onDrop: function onDrop(t, n) {
                        var o = l.instance.getDragingPrintElement(),
                            r = o.printElement;
                        r.updateSizeAndPositionOptions(e.mathroundToporleft(o.left - i.px.toPt(e.target.offset().left)), e.mathroundToporleft(o.top - i.px.toPt(e.target.offset().top))), e.appendDesignPrintElement(e.designPaper, r, !0), r.setTemplateId(e.templateId), e.printElements.push(r), r.design();
                    }
                });
            }, t.prototype.initPrintElements = function (t) {
                var e = this;
                this.printElements = [], t && t.forEach(function (n) {
                    var i;

                    if (i = n.printElementType ? ae.createPrintElementType(n.printElementType) : a.instance.getElementType(n.tid)) {
                        var o = i.createPrintElement(n.options);
                        o.setTemplateId(e.templateId), e.printElements.push(o);
                    } else console.log("miss " + JSON.stringify(t));
                });
            }, t.prototype.mathroundToporleft = function (t) {
                var e = p.instance.movingDistance;
                return Math.round(t / e) * e;
            }, t.prototype.appendDesignPrintElement = function (t, e, n) {
                var i = e.getDesignTarget(t);
                i.addClass("design"), n && e.initSizeByHtml(i), t.append(i);
            }, t.prototype.createNewPage = function (t, e) {
                return new ue(this.width, this.height, this.paperHeader, this.paperFooter, this.paperNumberLeft, this.paperNumberTop, this.paperNumberDisabled, t, e);
            }, t.prototype.orderPrintElements = function () {
                this.printElements = i.orderBy(this.printElements, function (t) {
                    return t.options.getLeft();
                }), this.printElements = i.orderBy(this.printElements, function (t) {
                    return t.options.getTop();
                });
            }, t.prototype.fillPaperHeaderAndFooter = function (t, e) {
                var n = this;
                this.printElements.filter(function (e) {
                    return e.options.getTop() < t.paperHeader || e.options.getTop() >= n.paperFooter;
                }).forEach(function (n) {
                    var i = n.getHtml(t, e);
                    i.length && t.append(i[0].target);
                });
            }, t.prototype.clear = function () {
                this.printElements.forEach(function (t) {
                    t.designTarget && t.designTarget.length && t.designTarget.remove();
                }), this.printElements = [];
            }, t.prototype.insertPrintElementToPanel = function (t) {
                var e = this.getPrintElementTypeByEntity(t);

                if (e) {
                    var n = e.createPrintElement(t.options);
                    n.setTemplateId(this.templateId), this.printElements.push(n);
                }
            }, t.prototype.addPrintText = function (t) {
                t.printElementType = t.printElementType || {}, t.printElementType.type = "text", this.insertPrintElementToPanel(t);
            }, t.prototype.addPrintHtml = function (t) {
                t.printElementType = t.printElementType || {}, t.printElementType.type = "html", this.insertPrintElementToPanel(t);
            }, t.prototype.addPrintTable = function (t) {
                t.printElementType = t.printElementType || {}, t.printElementType.type = "table", this.insertPrintElementToPanel(t);
            }, t.prototype.addPrintImage = function (t) {
                t.printElementType = t.printElementType || {}, t.printElementType.type = "image", this.insertPrintElementToPanel(t);
            }, t.prototype.addPrintLongText = function (t) {
                t.printElementType = t.printElementType || {}, t.printElementType.type = "longText", this.insertPrintElementToPanel(t);
            }, t.prototype.addPrintVline = function (t) {
                t.printElementType = t.printElementType || {}, t.printElementType.type = "vline", this.insertPrintElementToPanel(t);
            }, t.prototype.addPrintHline = function (t) {
                t.printElementType = t.printElementType || {}, t.printElementType.type = "hline", this.insertPrintElementToPanel(t);
            }, t.prototype.addPrintRect = function (t) {
                t.printElementType = t.printElementType || {}, t.printElementType.type = "rect", this.insertPrintElementToPanel(t);
            }, t.prototype.addPrintOval = function (t) {
                t.printElementType = t.printElementType || {}, t.printElementType.type = "oval", this.insertPrintElementToPanel(t);
            }, t.prototype.getPrintElementTypeByEntity = function (t) {
                var e;
                return (e = t.tid ? a.instance.getElementType(t.tid) : ae.createPrintElementType(t.printElementType)) || console.log("miss " + JSON.stringify(t)), e;
            }, t.prototype.getPrintStyle = function () {
                return " <style printStyle>\n        @page\n        {\n             border:0;\n             padding:0cm;\n             margin:0cm;\n             " + this.getPrintSizeStyle() + "\n        }\n        </style>\n        ";
            }, t.prototype.getPrintSizeStyle = function () {
                return this.paperType ? "size:" + this.paperType + " " + (this.height > this.width ? "portrait" : "landscape") + ";" : "size:" + this.width + "mm " + this.height + "mm;";
            }, t.prototype.deletePrintElement = function (t) {
                var e = this;
                this.printElements.filter(function (n, i) {
                    n.id == t.id && (t.delete(), e.printElements.splice(i, 1));
                });
            }, t;
        }(),
        ce = function () {
            return function (t) {
                if (t) if (t.panels) {
                    this.panels = [];

                    for (var e = 0; e < t.panels.length; e++) {
                        this.panels.push(new le(t.panels[e]));
                    }
                } else this.panels = [];
            };
        }(),
        de = function () {
            function t(t, e) {
                var n = this;
                this.printTemplate = t, this.settingContainer = $(e), i.event.on(t.getPrintElementSelectEventKey(), function (t) {
                    n.buildSetting(t);
                });
            }

            return t.prototype.init = function () { }, t.prototype.buildSetting = function (t) {
                var e = this;
                this.lastPrintElement && this.lastPrintElement.getPrintElementOptionItems().forEach(function (t) {
                    t.destroy();
                });
                this.lastPrintElement = t, this.settingContainer.html("");
                var n = $('<div class="hiprint-option-items"></div>');
                t.getPrintElementOptionItems().forEach(function (e) {
                    n.append(e.createTarget()), e.setValue(t.options[e.name]);
                });
                var i = $('<button class="hiprint-option-item-settingBtn hiprint-option-item-submitBtn"\n        type="button">确定</button>'),
                    o = $('<button class="hiprint-option-item-settingBtn hiprint-option-item-deleteBtn"\n        type="button">删除</button>');
                n.append(i), n.append(o), i.bind("click.submitOption", function () {
                    t.submitOption();
                }), o.bind("click.deleteBtn", function () {
                    e.printTemplate.deletePrintElement(t);
                }), n.find(".hiprint-option-item .hiprint-option-item-field select").change(function (e) {
                    t.submitOption();
                }), n.find(".hiprint-option-item .hiprint-option-item-field input").bind("keydown.submitOption", function (e) {
                    13 == e.keyCode && t.submitOption();
                }), this.settingContainer.append(n);
            }, t;
        }(),
        fe = function () {
            function t(t, e) {
                this.paginationContainer = t, this.jqPaginationContainer = $(this.paginationContainer), this.template = e;
            }

            return t.prototype.buildPagination = function () {
                var t = this.template.getPaneltotal(),
                    e = this;
                this.jqPaginationContainer.html("");

                for (var n = $('<ul class="hiprint-pagination"></ul>'), i = function i() {
                    var t = o,
                        i = $('<li><a href="javascript:void(0);">' + (t + 1) + "</a></li>");
                    i.click(function () {
                        e.template.selectPanel(t);
                    }), n.append(i);
                }, o = 0; o < t; o++) {
                    i();
                }

                var r = $('<li><a href="javascript:void(0);">+</a></li>');
                n.append(r), this.jqPaginationContainer.append(n), r.click(function () {
                    e.template.addPrintPanel(void 0, !0), e.buildPagination();
                });
            }, t;
        }(),
        ge = function () {
            function t(t) {
                var e = this;
                this.id = l.instance.guid();
                var n = t || {};
                this.printPanels = [];
                var i = new ce(n.template || []);
                n.template && i.panels.forEach(function (t) {
                    e.printPanels.push(new he(t, e.id));
                }), n.settingContainer && new de(this, n.settingContainer), n.paginationContainer && (this.printPaginationCreator = new fe(n.paginationContainer, this), this.printPaginationCreator.buildPagination());
            }

            return t.prototype.design = function (t) {
                var e = this;

                if (0 == this.printPanels.length) {
                    var n = this.createDefaultPanel();
                    this.printPanels.push(n);
                }

                if (!t) throw new Error("options.container can not be empty");
                this.createContainer(t), this.printPanels.forEach(function (t, n) {
                    e.container.append(t.getTarget()), n > 0 && t.disable(), t.design();
                }), this.selectPanel(0);
            }, t.prototype.getSimpleHtml = function (t, e) {
                var n = this,
                    i = $('<div class="hiprint-printTemplate"></div>');
                t && t.constructor === Array ? t.forEach(function (t) {
                    t && n.printPanels.forEach(function (n, o) {
                        i.append(n.getHtml(t, e));
                    });
                }) : this.printPanels.forEach(function (n, o) {
                    i.append(n.getHtml(t, e));
                });
                return i;
            }, t.prototype.getHtml = function (t, e) {
                return this.getSimpleHtml(t, e);
            }, t.prototype.setPaper = function (t, e) {
                if (/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/.test(t)) this.editingPanel.resize(void 0, parseFloat(t), parseFloat(e), !1); else {
                    var n = l.instance[t];
                    if (!n) throw new Error("not found pagetype:" + (t || ""));
                    this.editingPanel.resize(t, n.width, n.height, !1);
                }
            }, t.prototype.rotatePaper = function () {
                this.editingPanel.rotatePaper();
            }, t.prototype.addPrintPanel = function (t, e) {
                var n = t ? new he(new le(t), this.id) : this.createDefaultPanel();
                return t && (t.index = this.printPanels.length), e && (this.container.append(n.getTarget()), n.design()), this.printPanels.push(n), e && this.selectPanel(n.index), n;
            }, t.prototype.selectPanel = function (t) {
                var e = this;
                this.printPanels.forEach(function (n, i) {
                    t == i ? (n.enable(), e.editingPanel = n) : n.disable();
                });
            }, t.prototype.getPaneltotal = function () {
                return this.printPanels.length;
            }, t.prototype.createDefaultPanel = function () {
                return new he(new le({
                    index: this.printPanels.length,
                    paperType: "A4"
                }), this.id);
            }, t.prototype.createContainer = function (t) {
                t ? (this.container = $(t), this.container.addClass("hiprint-printTemplate")) : this.container = $('<div class="hiprint-printTemplate"></div>');
            }, t.prototype.getJsonTid = function () {
                var t = [];
                return this.printPanels.forEach(function (e) {
                    e.getPanelEntity().printElements.length && t.push(e.getPanelEntity());
                }), new ce({
                    panels: t
                });
            }, t.prototype.getJson = function () {
                var t = [];
                return this.printPanels.forEach(function (e) {
                    t.push(e.getPanelEntity(!0));
                }), new ce({
                    panels: t
                });
            }, t.prototype.getPrintElementSelectEventKey = function () {
                return "PrintElementSelectEventKey_" + this.id;
            }, t.prototype.clear = function () {
                this.printPanels.forEach(function (t) {
                    if (t.clear(), t.index > 0) {
                        var e = t.getTarget();
                        e && e.length && e.remove();
                    }
                }), this.printPanels = [this.printPanels[0]], this.printPaginationCreator && this.printPaginationCreator.buildPagination();
            }, t.prototype.getPaperType = function (t) {
                return null == t && (t = 0), this.printPanels[0].paperType;
            }, t.prototype.getOrient = function (t) {
                return null == t && (t = 0), this.printPanels[t].height > this.printPanels[t].width ? 1 : 2;
            }, t.prototype.getPrintStyle = function (t) {
                return this.printPanels[t].getPrintStyle();
            }, t.prototype.print = function (t) {
                this.getHtml(t).hiwprint();
            }, t.prototype.printByHtml = function (t) {
                $(t).hiwprint();
            }, t.prototype.deletePrintElement = function (t) {
                this.printPanels.forEach(function (e) {
                    e.deletePrintElement(t);
                });
            }, t;
        }();

    function me(t) {
        p.instance.init(t), p.instance.providers.forEach(function (t) {
            t.addElementTypes(a.instance);
        });
    }

    n.d(e, "init", function () {
        return me;
    }), n.d(e, "PrintElementTypeManager", function () {
        return pe;
    }), n.d(e, "PrintElementTypeGroup", function () {
        return se;
    }), n.d(e, "PrintTemplate", function () {
        return ge;
    });
}]);