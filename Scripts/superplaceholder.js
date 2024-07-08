(function () {
    var e = document.createElement("input");
    var f = "placeholder" in e;
    function extend(a, b) {
        var c = {};
        for (var d in a) {
            c[d] = b[d] === undefined ? a[d] : b[d];
        }
        return c;
    }
    var g = {
        letterDelay: 100,
        sentenceDelay: 1000,
        loop: false,
        startOnFocus: true,
        shuffle: false,
        showCursor: true,
        cursor: "|",
    };
    function PlaceHolder(a, b, c) {
        this.el = a;
        this.texts = b;
        c = c || {};
        this.options = extend(g, c);
        this.timeouts = [];
        this.begin();
    }
    PlaceHolder.prototype.begin = function () {
        var a = this,
            temp,
            randomIndex;
        a.originalPlaceholder = a.el.getAttribute("placeholder");
        if (a.options.shuffle) {
            for (var i = a.texts.length; i--; ) {
                randomIndex = ~~(Math.random() * i);
                temp = a.texts[randomIndex];
                a.texts[randomIndex] = a.texts[i];
                a.texts[i] = temp;
            }
        }
        if (a.options.startOnFocus) {
            a.el.addEventListener("focus", function () {
                a.processText(0);
            });
            a.el.addEventListener("blur", function () {
                a.cleanUp();
            });
        } else {
            a.processText(0);
        }
    };
    PlaceHolder.prototype.cleanUp = function () {
        for (var i = this.timeouts.length; i--; ) {
            clearTimeout(this.timeouts[i]);
        }
        this.el.setAttribute("placeholder", this.originalPlaceholder);
        this.timeouts.length = 0;
    };
    PlaceHolder.prototype.typeString = function (b, c) {
        var d = this,
            timeout;
        if (!b) {
            return false;
        }
        function setTimeoutCallback(a) {
            d.el.setAttribute(
                "placeholder",
                b.substr(0, a + 1) +
                    (a === b.length - 1 || !d.options.showCursor
                        ? ""
                        : d.options.cursor)
            );
            if (a === b.length - 1) {
                c();
            }
        }
        for (var i = 0; i < b.length; i++) {
            timeout = setTimeout(
                setTimeoutCallback,
                i * d.options.letterDelay,
                i
            );
            d.timeouts.push(timeout);
        }
    };
    PlaceHolder.prototype.processText = function (a) {
        var b = this,
            timeout;
        b.typeString(b.texts[a], function () {
            timeout = setTimeout(function () {
                b.processText(
                    b.options.loop ? (a + 1) % b.texts.length : a + 1
                );
            }, b.options.sentenceDelay);
            b.timeouts.push(timeout);
        });
    };
    var h = function (a) {
        if (!f) {
            return;
        }
        new PlaceHolder(a.el, a.sentences, a.options);
    };
    if (typeof exports === "object") {
        module.exports = h;
    } else if (typeof define === "function" && define.amd) {
        define(function () {
            return h;
        });
    } else {
        window.superplaceholder = h;
    }
})();