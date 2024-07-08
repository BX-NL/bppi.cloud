jQuery(function () {
    zan.init();
});
var zan = {
    init: function () {
        this.gotop();
        this.lazyload();
        this.dropdown();
    },
    gotop: function () {
        // 检测滚动条是否有下拉
        jQuery(window).scroll(function () {
            jQuery(this).scrollTop() > 200
                ? jQuery(".gotop").css({ bottom: "20px" })
                : jQuery(".gotop").css({ bottom: "-40px" });
        });
        // 监听按钮：返回顶部
        jQuery(".gotop").click(function () {
            return jQuery("body,html").animate({ scrollTop: 0 }, 500), !1;
        });
    },
    dropdown: function () {
        var a = jQuery(".menu.menu-three li");
        a.mouseover(function () {
            jQuery(this).addClass("open");
        }).mouseout(function () {
            jQuery(this).removeClass("open");
        });
    },
    lazyload: function () {
        jQuery("#sidebar img.lazy").lazyload({ threshold: 800 });
        jQuery("img.lazy").lazyload({
            effect: "fadeIn",
            threshold: 800,
            skip_invisible: false,
        });
    },
};