(function ($) {
    // 定义对象j，包含默认设置和初始化方法
    var j = {
        // 定义默认设置
        defaults: { click_to_close: true, stay_open: false },
        // 定义初始化方法
        init: function (h) {
            // 将传入的h赋值给o，作用不明
            var o = h,
            // 将这坨转换为jQuery对象并赋值给$this，作用不明
                $this = $(this);
            // 遍历每个元素，作用不明
            $this.each(function (i) {
                // 将这坨赋值给g
                var g = $(this),
                // 使用jQuery的extend方法将默认设置和传入的设置合并并赋值给settings
                    settings = $.extend({}, j.defaults, o),
                // 将具有特定类的元素转换为jQuery对象并赋值给$menu
                    $menu = $("." + settings.menu);
                // 绑定鼠标按下事件
                g.on("mousedown", function (e) {
                    // 判断：鼠标右键 和 点击菜单外部 和 点击即关闭(作用不明)
                    if (
                        e.which !== 3 &&
                        $(e.target).parents(".rightmenu").length < 1 &&
                        settings.click_to_close
                    ) {
                        // 执行关闭菜单的动画和动作
                        g.find(".rightlmenu")
                            .stop(true, false)
                            .animate(
                                { opacity: 0 },
                                {
                                    duration: 100,
                                    queue: false,
                                    complete: function () {
                                        $(this)
                                            .css("display", "none")
                                            .find(".active")
                                            .removeClass("active")
                                            .next()
                                            .stop(true, true)
                                            .slideUp("normal");
                                    },
                                }
                            );
                        $(".circle").removeClass("open");
                        $("#overlay").hide();
                        $(".rightmenu").delay(400).hide(0);
                        audio.pause();
                        audio.currentTime = 0;
                    }
                });
                // 绑定右键菜单事件
                g.on("contextmenu", function (e) {
                    // 阻止默认的右键菜单
                    e.preventDefault();
                    // 阻止事件冒泡，作用不明
                    e.stopPropagation();
                    // 获取鼠标点击的坐标
                    j.getCoords(e);
                    // 执行右键菜单的显示和动作
                    $(".GalMenu_close_me")
                        .stop(true, false)
                        .animate(
                            { opacity: 0 },
                            {
                                duration: 100,
                                queue: false,
                                complete: function () {
                                    $(this).css("display", "none");
                                },
                            }
                        );
                    var a = $("#audio")[0];
                    var b = 150;
                    var c = Coords.clientY - b,
                        left = $("body")[0] === e.target ? Coords.clickX - b : Coords.clientX - b;
                    var d = document.documentElement.clientHeight;
                    var f = document.documentElement.clientWidth;
                    if (c < 0) c = 0;
                    if (d - Coords.clientY < 150) c = d - 300;
                    if (left < 0) left = 0;
                    if ($("body")[0] === e.target) {
                        if (f - Coords.clickX < 150) left = f - 300;
                    } else {
                        if (f - Coords.clientX < 150) left = f - 300;
                    }
                    $menu
                        .css({
                            top: c + "px",
                            left: left + "px",
                            display: "block",
                        })
                        .stop(true, false)
                        .animate(
                            { opacity: 1 },
                            { duration: 100, queue: false }
                        );
                    if ($("#right").hasClass("open")) {
                        $(".circle").removeClass("open");
                        $("#overlay").hide();
                        $(".rightmenu").delay(400).hide(0);
                        a.pause();
                        a.currentTime = 0;
                    } else {
                        $(".circle").addClass("open");
                        $("#overlay,.rightmenu").show();
                        a.play();
                    }
                });
            });
        },
        // 获取鼠标点击的坐标
        getCoords: function (e) {
            var a = e ? e : window.event;
            var b = 0,
                clickY = 0;
            if (
                (a.clientX || a.clientY) &&
                document.body &&
                document.body.scrollLeft != null
            ) {
                b = a.clientX + document.body.scrollLeft;
                clickY = a.clientY + document.body.scrollTop;
            }
            if (
                (a.clientX || a.clientY) &&
                document.compatMode == "CSS1Compat" &&
                document.documentElement &&
                document.documentElement.scrollLeft != null
            ) {
                b = a.clientX + document.documentElement.scrollLeft;
                clickY = a.clientY + document.documentElement.scrollTop;
            }
            if (a.pageX || a.pageY) {
                b = a.pageX;
                clickY = a.pageY;
            }
            return (Coords = {
                clickX: b,
                clickY: clickY,
                clientX: a.clientX,
                clientY: a.clientY,
                screenX: a.screenX,
                screenY: a.screenY,
            });
        },
    };
    // 将方法添加到jQuery的fn对象上，作用不明
    $.fn.RightMenu = function (a, b) {
        if (j[a]) {
            return j[a].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof a === "object" || !a) {
            // 调用初始化方法
            return j.init.apply(this, arguments);
        } else {
            // 返回错误信息
            $.error("Method " + a + " does not exist");
        }
    };
})(jQuery);

// 页面加载完成时执行，启用右键菜单?
jQuery(window["document"])["ready"](
    function() {
        jQuery("body")["RightMenu"]({
            "menu": "MenuDropDown",
        });
    }
);

// 计算按钮布局
var BUBZ1 = window["document"]["querySelectorAll"](".ring-item");
for (var XD2 = 0, W3 = BUBZ1["length"]; XD2 < W3; XD2++) {
    BUBZ1[XD2]["style"]["left"] =
        (50 - 35 * window["Math"]["cos"](-0.5 * window["Math"]["PI"] - 2 * (1 / W3) * XD2 * window["Math"]["PI"]))["toFixed"](4) + "%";
    BUBZ1[XD2]["style"]["top"] =
        (50 + 35 * window["Math"]["sin"](-0.5 * window["Math"]["PI"] - 2 * (1 / W3) * XD2 * window["Math"]["PI"]))["toFixed"](4) + "%";
}