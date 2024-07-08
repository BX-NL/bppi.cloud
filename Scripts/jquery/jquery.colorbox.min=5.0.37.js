/*!
	jQuery Colorbox v1.4.21 - 2013-06-06
	(c) 2013 Jack Moore - jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function (t, e, i) {
  function o(i, o, n) {
    var r = e.createElement(i);
    return o && (r.id = te + o), n && (r.style.cssText = n), t(r);
  }
  function n() {
    return i.innerHeight ? i.innerHeight : t(i).height();
  }
  function r(t) {
    var e = E.length,
      i = (j + t) % e;
    return 0 > i ? e + i : i;
  }
  function h(t, e) {
    return Math.round(
      (/%/.test(t) ? ("x" === e ? H.width() : n()) / 100 : 1) * parseInt(t, 10)
    );
  }
  function l(t, e) {
    return t.photo || t.photoRegex.test(e);
  }
  function s(t, e) {
    return t.retinaUrl && i.devicePixelRatio > 1
      ? e.replace(t.photoRegex, t.retinaSuffix)
      : e;
  }
  function a(t) {
    "contains" in y[0] &&
      !y[0].contains(t.target) &&
      (t.stopPropagation(), y.focus());
  }
  function d() {
    var e,
      i = t.data(A, Z);
    null == i
      ? ((_ = t.extend({}, Y)),
        console &&
          console.log &&
          console.log("Error: cboxElement missing settings object"))
      : (_ = t.extend({}, i));
    for (e in _)
      t.isFunction(_[e]) && "on" !== e.slice(0, 2) && (_[e] = _[e].call(A));
    (_.rel = _.rel || A.rel || t(A).data("rel") || "nofollow"),
      (_.href = _.href || t(A).attr("href")),
      (_.title = _.title || A.title),
      "string" == typeof _.href && (_.href = t.trim(_.href));
  }
  function c(i, o) {
    t(e).trigger(i), se.trigger(i), t.isFunction(o) && o.call(A);
  }
  function u() {
    var t,
      e,
      i,
      o,
      n,
      r = te + "Slideshow_",
      h = "click." + te;
    _.slideshow && E[1]
      ? ((e = function () {
          clearTimeout(t);
        }),
        (i = function () {
          (_.loop || E[j + 1]) && (t = setTimeout(J.next, _.slideshowSpeed));
        }),
        (o = function () {
          R.html(_.slideshowStop).unbind(h).one(h, n),
            se.bind(ne, i).bind(oe, e).bind(re, n),
            y.removeClass(r + "off").addClass(r + "on");
        }),
        (n = function () {
          e(),
            se.unbind(ne, i).unbind(oe, e).unbind(re, n),
            R.html(_.slideshowStart)
              .unbind(h)
              .one(h, function () {
                J.next(), o();
              }),
            y.removeClass(r + "on").addClass(r + "off");
        }),
        _.slideshowAuto ? o() : n())
      : y.removeClass(r + "off " + r + "on");
  }
  function f(i) {
    G ||
      ((A = i),
      d(),
      (E = t(A)),
      (j = 0),
      "nofollow" !== _.rel &&
        ((E = t("." + ee).filter(function () {
          var e,
            i = t.data(this, Z);
          return (
            i && (e = t(this).data("rel") || i.rel || this.rel), e === _.rel
          );
        })),
        (j = E.index(A)),
        -1 === j && ((E = E.add(A)), (j = E.length - 1))),
      g
        .css({
          opacity: parseFloat(_.opacity),
          cursor: _.overlayClose ? "pointer" : "auto",
          visibility: "visible",
        })
        .show(),
      V && y.add(g).removeClass(V),
      _.className && y.add(g).addClass(_.className),
      (V = _.className),
      P.html(_.close).show(),
      $ ||
        (($ = q = !0),
        y.css({ visibility: "hidden", display: "block" }),
        (W = o(
          ae,
          "LoadedContent",
          "width:0; height:0; overflow:hidden"
        ).appendTo(v)),
        (D = b.height() + k.height() + v.outerHeight(!0) - v.height()),
        (B = T.width() + C.width() + v.outerWidth(!0) - v.width()),
        (N = W.outerHeight(!0)),
        (z = W.outerWidth(!0)),
        (_.w = h(_.initialWidth, "x")),
        (_.h = h(_.initialHeight, "y")),
        J.position(),
        u(),
        c(ie, _.onOpen),
        O.add(S).hide(),
        y.focus(),
        _.trapFocus &&
          e.addEventListener &&
          (e.addEventListener("focus", a, !0),
          se.one(he, function () {
            e.removeEventListener("focus", a, !0);
          })),
        _.returnFocus &&
          se.one(he, function () {
            t(A).focus();
          })),
      w());
  }
  function p() {
    !y &&
      e.body &&
      ((X = !1),
      (H = t(i)),
      (y = o(ae)
        .attr({
          id: Z,
          class: t.support.opacity === !1 ? te + "IE" : "",
          role: "dialog",
          tabindex: "-1",
        })
        .hide()),
      (g = o(ae, "Overlay").hide()),
      (L = o(ae, "LoadingOverlay").add(o(ae, "LoadingGraphic"))),
      (x = o(ae, "Wrapper")),
      (v = o(ae, "Content").append(
        (S = o(ae, "Title")),
        (M = o(ae, "Current")),
        (K = t('<button type="button"/>').attr({ id: te + "Previous" })),
        (I = t('<button type="button"/>').attr({ id: te + "Next" })),
        (R = o("button", "Slideshow")),
        L,
        (P = t('<button type="button"/>').attr({ id: te + "Close" }))
      )),
      x
        .append(
          o(ae).append(
            o(ae, "TopLeft"),
            (b = o(ae, "TopCenter")),
            o(ae, "TopRight")
          ),
          o(ae, !1, "clear:left").append(
            (T = o(ae, "MiddleLeft")),
            v,
            (C = o(ae, "MiddleRight"))
          ),
          o(ae, !1, "clear:left").append(
            o(ae, "BottomLeft"),
            (k = o(ae, "BottomCenter")),
            o(ae, "BottomRight")
          )
        )
        .find("div div")
        .css({ float: "left" }),
      (F = o(
        ae,
        !1,
        "position:absolute; width:9999px; visibility:hidden; display:none"
      )),
      (O = I.add(K).add(M).add(R)),
      t(e.body).append(g, y.append(x, F)));
  }
  function m() {
    function i(t) {
      t.which > 1 ||
        t.shiftKey ||
        t.altKey ||
        t.metaKey ||
        t.ctrlKey ||
        (t.preventDefault(), f(this));
    }
    return y
      ? (X ||
          ((X = !0),
          I.click(function () {
            J.next();
          }),
          K.click(function () {
            J.prev();
          }),
          P.click(function () {
            J.close();
          }),
          g.click(function () {
            _.overlayClose && J.close();
          }),
          t(e).bind("keydown." + te, function (t) {
            var e = t.keyCode;
            $ && _.escKey && 27 === e && (t.preventDefault(), J.close()),
              $ &&
                _.arrowKey &&
                E[1] &&
                !t.altKey &&
                (37 === e
                  ? (t.preventDefault(), K.click())
                  : 39 === e && (t.preventDefault(), I.click()));
          }),
          t.isFunction(t.fn.on)
            ? t(e).on("click." + te, "." + ee, i)
            : t("." + ee).live("click." + te, i)),
        !0)
      : !1;
  }
  function w() {
    var n,
      r,
      a,
      u = J.prep,
      f = ++de;
    (q = !0),
      (U = !1),
      (A = E[j]),
      d(),
      c(le),
      c(oe, _.onLoad),
      (_.h = _.height
        ? h(_.height, "y") - N - D
        : _.innerHeight && h(_.innerHeight, "y")),
      (_.w = _.width
        ? h(_.width, "x") - z - B
        : _.innerWidth && h(_.innerWidth, "x")),
      (_.mw = _.w),
      (_.mh = _.h),
      _.maxWidth &&
        ((_.mw = h(_.maxWidth, "x") - z - B),
        (_.mw = _.w && _.w < _.mw ? _.w : _.mw)),
      _.maxHeight &&
        ((_.mh = h(_.maxHeight, "y") - N - D),
        (_.mh = _.h && _.h < _.mh ? _.h : _.mh)),
      (n = _.href),
      (Q = setTimeout(function () {
        L.show();
      }, 100)),
      _.inline
        ? ((a = o(ae).hide().insertBefore(t(n)[0])),
          se.one(le, function () {
            a.replaceWith(W.children());
          }),
          u(t(n)))
        : _.iframe
        ? u(" ")
        : _.html
        ? u(_.html)
        : l(_, n)
        ? ((n = s(_, n)),
          (U = e.createElement("img")),
          t(U)
            .addClass(te + "Photo")
            .bind("error", function () {
              (_.title = !1), u(o(ae, "Error").html(_.imgError));
            })
            .one("load", function () {
              var e;
              f === de &&
                ((U.alt = t(A).attr("alt") || t(A).attr("data-alt") || ""),
                _.retinaImage &&
                  i.devicePixelRatio > 1 &&
                  ((U.height = U.height / i.devicePixelRatio),
                  (U.width = U.width / i.devicePixelRatio)),
                _.scalePhotos &&
                  ((r = function () {
                    (U.height -= U.height * e), (U.width -= U.width * e);
                  }),
                  _.mw &&
                    U.width > _.mw &&
                    ((e = (U.width - _.mw) / U.width), r()),
                  _.mh &&
                    U.height > _.mh &&
                    ((e = (U.height - _.mh) / U.height), r())),
                _.h &&
                  (U.style.marginTop = Math.max(_.mh - U.height, 0) / 2 + "px"),
                E[1] &&
                  (_.loop || E[j + 1]) &&
                  ((U.style.cursor = "pointer"),
                  (U.onclick = function () {
                    J.next();
                  })),
                (U.style.width = U.width + "px"),
                (U.style.height = U.height + "px"),
                setTimeout(function () {
                  u(U);
                }, 1));
            }),
          setTimeout(function () {
            U.src = n;
          }, 1))
        : n &&
          F.load(n, _.data, function (e, i) {
            f === de &&
              u(
                "error" === i
                  ? o(ae, "Error").html(_.xhrError)
                  : t(this).contents()
              );
          });
  }
  var g,
    y,
    x,
    v,
    b,
    T,
    C,
    k,
    E,
    H,
    W,
    F,
    L,
    S,
    M,
    R,
    I,
    K,
    P,
    O,
    _,
    D,
    B,
    N,
    z,
    A,
    j,
    U,
    $,
    q,
    G,
    Q,
    J,
    V,
    X,
    Y = {
      transition: "elastic",
      speed: 300,
      fadeOut: 300,
      width: !1,
      initialWidth: "600",
      innerWidth: !1,
      maxWidth: !1,
      height: !1,
      initialHeight: "450",
      innerHeight: !1,
      maxHeight: !1,
      scalePhotos: !0,
      scrolling: !0,
      inline: !1,
      html: !1,
      iframe: !1,
      fastIframe: !0,
      photo: !1,
      href: !1,
      title: !1,
      rel: !1,
      opacity: 0.9,
      preloading: !0,
      className: !1,
      retinaImage: !1,
      retinaUrl: !1,
      retinaSuffix: "@2x.$1",
      current: "image {current} of {total}",
      previous: "previous",
      next: "next",
      close: "close",
      xhrError: "This content failed to load.",
      imgError: "This image failed to load.",
      open: !1,
      returnFocus: !0,
      trapFocus: !0,
      reposition: !0,
      loop: !0,
      slideshow: !1,
      slideshowAuto: !0,
      slideshowSpeed: 2500,
      slideshowStart: "start slideshow",
      slideshowStop: "stop slideshow",
      photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,
      onOpen: !1,
      onLoad: !1,
      onComplete: !1,
      onCleanup: !1,
      onClosed: !1,
      overlayClose: !0,
      escKey: !0,
      arrowKey: !0,
      top: !1,
      bottom: !1,
      left: !1,
      right: !1,
      fixed: !1,
      data: void 0,
    },
    Z = "colorbox",
    te = "cbox",
    ee = te + "Element",
    ie = te + "_open",
    oe = te + "_load",
    ne = te + "_complete",
    re = te + "_cleanup",
    he = te + "_closed",
    le = te + "_purge",
    se = t("<a/>"),
    ae = "div",
    de = 0;
  t.colorbox ||
    (t(p),
    (J =
      t.fn[Z] =
      t[Z] =
        function (e, i) {
          var o = this;
          if (((e = e || {}), p(), m())) {
            if (t.isFunction(o)) (o = t("<a/>")), (e.open = !0);
            else if (!o[0]) return o;
            i && (e.onComplete = i),
              o
                .each(function () {
                  t.data(this, Z, t.extend({}, t.data(this, Z) || Y, e));
                })
                .addClass(ee),
              ((t.isFunction(e.open) && e.open.call(o)) || e.open) && f(o[0]);
          }
          return o;
        }),
    (J.position = function (t, e) {
      function i(t) {
        (b[0].style.width =
          k[0].style.width =
          v[0].style.width =
            parseInt(t.style.width, 10) - B + "px"),
          (v[0].style.height =
            T[0].style.height =
            C[0].style.height =
              parseInt(t.style.height, 10) - D + "px");
      }
      var o,
        r,
        l,
        s = 0,
        a = 0,
        d = y.offset();
      H.unbind("resize." + te),
        y.css({ top: -9e4, left: -9e4 }),
        (r = H.scrollTop()),
        (l = H.scrollLeft()),
        _.fixed
          ? ((d.top -= r), (d.left -= l), y.css({ position: "fixed" }))
          : ((s = r), (a = l), y.css({ position: "absolute" })),
        (a +=
          _.right !== !1
            ? Math.max(H.width() - _.w - z - B - h(_.right, "x"), 0)
            : _.left !== !1
            ? h(_.left, "x")
            : Math.round(Math.max(H.width() - _.w - z - B, 0) / 2)),
        (s +=
          _.bottom !== !1
            ? Math.max(n() - _.h - N - D - h(_.bottom, "y"), 0)
            : _.top !== !1
            ? h(_.top, "y")
            : Math.round(Math.max(n() - _.h - N - D, 0) / 2)),
        y.css({ top: d.top, left: d.left, visibility: "visible" }),
        (t = y.width() === _.w + z && y.height() === _.h + N ? 0 : t || 0),
        (x[0].style.width = x[0].style.height = "9999px"),
        (o = { width: _.w + z + B, height: _.h + N + D, top: s, left: a }),
        0 === t && y.css(o),
        y.dequeue().animate(o, {
          duration: t,
          complete: function () {
            i(this),
              (q = !1),
              (x[0].style.width = _.w + z + B + "px"),
              (x[0].style.height = _.h + N + D + "px"),
              _.reposition &&
                setTimeout(function () {
                  H.bind("resize." + te, J.position);
                }, 1),
              e && e();
          },
          step: function () {
            i(this);
          },
        });
    }),
    (J.resize = function (t) {
      var e;
      $ &&
        ((t = t || {}),
        t.width && (_.w = h(t.width, "x") - z - B),
        t.innerWidth && (_.w = h(t.innerWidth, "x")),
        W.css({ width: _.w }),
        t.height && (_.h = h(t.height, "y") - N - D),
        t.innerHeight && (_.h = h(t.innerHeight, "y")),
        t.innerHeight ||
          t.height ||
          ((e = W.scrollTop()), W.css({ height: "auto" }), (_.h = W.height())),
        W.css({ height: _.h }),
        e && W.scrollTop(e),
        J.position("none" === _.transition ? 0 : _.speed));
    }),
    (J.prep = function (i) {
      function n() {
        return (
          (_.w = _.w || W.width()), (_.w = _.mw && _.mw < _.w ? _.mw : _.w), _.w
        );
      }
      function h() {
        return (
          (_.h = _.h || W.height()),
          (_.h = _.mh && _.mh < _.h ? _.mh : _.h),
          _.h
        );
      }
      if ($) {
        var a,
          d = "none" === _.transition ? 0 : _.speed;
        W.empty().remove(),
          (W = o(ae, "LoadedContent").append(i)),
          W.hide()
            .appendTo(F.show())
            .css({ width: n(), overflow: _.scrolling ? "auto" : "hidden" })
            .css({ height: h() })
            .prependTo(v),
          F.hide(),
          t(U).css({ float: "none" }),
          (a = function () {
            function i() {
              t.support.opacity === !1 && y[0].style.removeAttribute("filter");
            }
            var n,
              h,
              a = E.length,
              u = "frameBorder",
              f = "allowTransparency";
            $ &&
              ((h = function () {
                clearTimeout(Q), L.hide(), c(ne, _.onComplete);
              }),
              S.html(_.title).add(W).show(),
              a > 1
                ? ("string" == typeof _.current &&
                    M.html(
                      _.current
                        .replace("{current}", j + 1)
                        .replace("{total}", a)
                    ).show(),
                  I[_.loop || a - 1 > j ? "show" : "hide"]().html(_.next),
                  K[_.loop || j ? "show" : "hide"]().html(_.previous),
                  _.slideshow && R.show(),
                  _.preloading &&
                    t.each([r(-1), r(1)], function () {
                      var i,
                        o,
                        n = E[this],
                        r = t.data(n, Z);
                      r && r.href
                        ? ((i = r.href), t.isFunction(i) && (i = i.call(n)))
                        : (i = t(n).attr("href")),
                        i &&
                          l(r, i) &&
                          ((i = s(r, i)),
                          (o = e.createElement("img")),
                          (o.src = i));
                    }))
                : O.hide(),
              _.iframe
                ? ((n = o("iframe")[0]),
                  u in n && (n[u] = 0),
                  f in n && (n[f] = "true"),
                  _.scrolling || (n.scrolling = "no"),
                  t(n)
                    .attr({
                      src: _.href,
                      name: new Date().getTime(),
                      class: te + "Iframe",
                      allowFullScreen: !0,
                      webkitAllowFullScreen: !0,
                      mozallowfullscreen: !0,
                    })
                    .one("load", h)
                    .appendTo(W),
                  se.one(le, function () {
                    n.src = "//about:blank";
                  }),
                  _.fastIframe && t(n).trigger("load"))
                : h(),
              "fade" === _.transition ? y.fadeTo(d, 1, i) : i());
          }),
          "fade" === _.transition
            ? y.fadeTo(d, 0, function () {
                J.position(0, a);
              })
            : J.position(d, a);
      }
    }),
    (J.next = function () {
      !q && E[1] && (_.loop || E[j + 1]) && ((j = r(1)), f(E[j]));
    }),
    (J.prev = function () {
      !q && E[1] && (_.loop || j) && ((j = r(-1)), f(E[j]));
    }),
    (J.close = function () {
      $ &&
        !G &&
        ((G = !0),
        ($ = !1),
        c(re, _.onCleanup),
        H.unbind("." + te),
        g.fadeTo(_.fadeOut || 0, 0),
        y.stop().fadeTo(_.fadeOut || 0, 0, function () {
          y.add(g).css({ opacity: 1, cursor: "auto" }).hide(),
            c(le),
            W.empty().remove(),
            setTimeout(function () {
              (G = !1), c(he, _.onClosed);
            }, 1);
        }));
    }),
    (J.remove = function () {
      y &&
        (y.stop(),
        t.colorbox.close(),
        y.stop().remove(),
        g.remove(),
        (G = !1),
        (y = null),
        t("." + ee)
          .removeData(Z)
          .removeClass(ee),
        t(e).unbind("click." + te));
    }),
    (J.element = function () {
      return t(A);
    }),
    (J.settings = Y));
})(jQuery, document, window);
