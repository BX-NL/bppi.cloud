// 彩色粒子，窗口抖动
POWERMODE["colorful"] = true;
POWERMODE["shake"] = true;

// 页面-body抖-添加监听-监听输入-触发上面的效果
window["document"]["body"]["addEventListener"]("input", function (event) {
    // 判断输入框，避免其它地方的框也跟着有特效
    if (event.target.matches('input.inputbox')) {
        POWERMODE(event);
    }
});
