(function () {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        // 用微信打开的重定向到百度
        alert("检测到正在使用 微信 访问\n\n请\n滚出去");
        window.location.replace("https://www.baidu.com/");
        return true;

    } else if (ua.match(/QQ/i) == "qq") {
        // 用QQ打开的自动下载垃圾
        // window.location.replace("https://ymzx.qq.com/zlkdatasys/mct/d/play.shtml?device=android");
        window.location.replace("https://mdnf.qq.com/zlkdatasys/mct/d/play.shtml?device=android");

        // 用QQ打开的跳到空白页
        // var opened = window.open("about:blank", "_self");
        // opened.opener = null;
        // opened.close();
    }
})();