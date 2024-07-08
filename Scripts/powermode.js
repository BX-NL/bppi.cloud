(function webpackUniversalModuleDefinition(a, b) {
    if (typeof exports === "object" && typeof module === "object")
        module.exports = b();
    else if (typeof define === "function" && define.amd) define([], b);
    else if (typeof exports === "object") exports["POWERMODE"] = b();
    else a["POWERMODE"] = b();
})(this, function () {
    return (function (c) {
        var d = {};
        function __webpack_require__(a) {
            if (d[a]) return d[a].exports;
            var b = (d[a] = { exports: {}, id: a, loaded: false });
            c[a].call(b.exports, b, b.exports, __webpack_require__);
            b.loaded = true;
            return b.exports;
        }
        __webpack_require__.m = c;
        __webpack_require__.c = d;
        __webpack_require__.p = "";
        return __webpack_require__(0);
    })([
        function (g, h, j) {
            "use strict";
            var k = document.createElement("canvas");
            k.width = window.innerWidth;
            k.height = window.innerHeight;
            k.style.cssText =
                "position:fixed;top:0;left:0;pointer-events:none;z-index:888";
            window.addEventListener("resize", function () {
                k.width = window.innerWidth;
                k.height = window.innerHeight;
            });
            document.body.appendChild(k);
            var l = k.getContext("2d");
            var m = [];
            var n = 0;
            POWERMODE.shake = true;
            function getRandom(a, b) {
                return Math.random() * (b - a) + a;
            }
            function getColor(a) {
                if (POWERMODE.colorful) {
                    var u = getRandom(0, 360);
                    return (
                        "hsla(" +
                        getRandom(u - 10, u + 10) +
                        ", 100%, " +
                        getRandom(50, 80) +
                        "%, " +
                        1 +
                        ")"
                    );
                } else {
                    return window.getComputedStyle(a).color;
                }
            }
            function getCaret() {
                var a = document.activeElement;
                var b;
                if (
                    a.tagName === "TEXTAREA" ||
                    (a.tagName === "INPUT" && a.getAttribute("type") === "text")
                ) {
                    var c = j(1)(a, a.selectionStart);
                    b = a.getBoundingClientRect();
                    return {
                        x: c.left + b.left,
                        y: c.top + b.top,
                        color: getColor(a),
                    };
                }
                var d = window.getSelection();
                if (d.rangeCount) {
                    var e = d.getRangeAt(0);
                    var f = e.startContainer;
                    if (f.nodeType === document.TEXT_NODE) {
                        f = f.parentNode;
                    }
                    b = e.getBoundingClientRect();
                    return { x: b.left, y: b.top, color: getColor(f) };
                }
                return { x: 0, y: 0, color: "transparent" };
            }
            function createParticle(x, y, a) {
                return {
                    x: x,
                    y: y,
                    alpha: 1,
                    color: a,
                    velocity: {
                        x: -1 + Math.random() * 2,
                        y: -3.5 + Math.random() * 2,
                    },
                };
            }
            function POWERMODE() {
                {
                    var a = getCaret();
                    var b = 5 + Math.round(Math.random() * 10);
                    while (b--) {
                        m[n] = createParticle(a.x, a.y, a.color);
                        n = (n + 1) % 500;
                    }
                }
                {
                    if (POWERMODE.shake) {
                        var c = 1 + 2 * Math.random();
                        var x = c * (Math.random() > 0.5 ? -1 : 1);
                        var y = c * (Math.random() > 0.5 ? -1 : 1);
                        document.body.style.marginLeft = x + "px";
                        document.body.style.marginTop = y + "px";
                        setTimeout(function () {
                            document.body.style.marginLeft = "";
                            document.body.style.marginTop = "";
                        }, 75);
                    }
                }
            }
            POWERMODE.colorful = false;
            function loop() {
                requestAnimationFrame(loop);
                l.clearRect(0, 0, k.width, k.height);
                for (var i = 0; i < m.length; ++i) {
                    var a = m[i];
                    if (a.alpha <= 0.1) continue;
                    a.velocity.y += 0.075;
                    a.x += a.velocity.x;
                    a.y += a.velocity.y;
                    a.alpha *= 0.96;
                    l.globalAlpha = a.alpha;
                    l.fillStyle = a.color;
                    l.fillRect(
                        Math.round(a.x - 1.5),
                        Math.round(a.y - 1.5),
                        3,
                        3
                    );
                }
            }
            requestAnimationFrame(loop);
            g.exports = POWERMODE;
        },
        function (n, o) {
            (function () {
                var l = [
                    "direction",
                    "boxSizing",
                    "width",
                    "height",
                    "overflowX",
                    "overflowY",
                    "borderTopWidth",
                    "borderRightWidth",
                    "borderBottomWidth",
                    "borderLeftWidth",
                    "borderStyle",
                    "paddingTop",
                    "paddingRight",
                    "paddingBottom",
                    "paddingLeft",
                    "fontStyle",
                    "fontVariant",
                    "fontWeight",
                    "fontStretch",
                    "fontSize",
                    "fontSizeAdjust",
                    "lineHeight",
                    "fontFamily",
                    "textAlign",
                    "textTransform",
                    "textIndent",
                    "textDecoration",
                    "letterSpacing",
                    "wordSpacing",
                    "tabSize",
                    "MozTabSize",
                ];
                var m = window.mozInnerScreenX != null;
                function getCaretCoordinates(b, c, d) {
                    var e = (d && d.debug) || false;
                    if (e) {
                        var f = document.querySelector(
                            "#input-textarea-caret-position-mirror-div"
                        );
                        if (f) {
                            f.parentNode.removeChild(f);
                        }
                    }
                    var g = document.createElement("div");
                    g.id = "input-textarea-caret-position-mirror-div";
                    document.body.appendChild(g);
                    var h = g.style;
                    var i = window.getComputedStyle
                        ? getComputedStyle(b)
                        : b.currentStyle;
                    h.whiteSpace = "pre-wrap";
                    if (b.nodeName !== "INPUT") h.wordWrap = "break-word";
                    h.position = "absolute";
                    if (!e) h.visibility = "hidden";
                    l.forEach(function (a) {
                        h[a] = i[a];
                    });
                    if (m) {
                        if (b.scrollHeight > parseInt(i.height))
                            h.overflowY = "scroll";
                    } else {
                        h.overflow = "hidden";
                    }
                    g.textContent = b.value.substring(0, c);
                    if (b.nodeName === "INPUT")
                        g.textContent = g.textContent.replace(/\s/g, " ");
                    var j = document.createElement("span");
                    j.textContent = b.value.substring(c) || ".";
                    g.appendChild(j);
                    var k = {
                        top: j.offsetTop + parseInt(i["borderTopWidth"]),
                        left: j.offsetLeft + parseInt(i["borderLeftWidth"]),
                    };
                    if (e) {
                        j.style.backgroundColor = "#aaa";
                    } else {
                        document.body.removeChild(g);
                    }
                    return k;
                }
                if (
                    typeof n != "undefined" &&
                    typeof n.exports != "undefined"
                ) {
                    n.exports = getCaretCoordinates;
                } else {
                    window.getCaretCoordinates = getCaretCoordinates;
                }
            })();
        },
    ]);
});