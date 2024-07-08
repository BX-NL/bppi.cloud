// 从background.js导入背景图片链接
var background_A_link_temp = background_A();
var background_H_link_temp = background_H();
var background_N_link = background_N();

// 来自Steam图床的背景图片
function background_A_show() {
    $(".image-1").css('backgroundImage','url(' + background_A_link_temp[0] + ')');
    $(".image-2").css('backgroundImage','url(' + background_A_link_temp[1] + ')');
    $(".image-3").css('backgroundImage','url(' + background_A_link_temp[2] + ')');
    $(".image-4").css('backgroundImage','url(' + background_A_link_temp[3] + ')');
    $(".image-5").css('backgroundImage','url(' + background_A_link_temp[4] + ')');
    $(".image-6").css('backgroundImage','url(' + background_A_link_temp[5] + ')');
}

// 来自Steam图床的涩涩图片
function background_H_show () {
    $(".image-H").css('background','url(' + background_H_link_temp + ')');
}

// 来自不同图床的背景图片
function background_N_show() {
    $(".image-1").css('backgroundImage','url(' + background_N_link[0] + ')');
    $(".image-2").css('backgroundImage','url(' + background_N_link[1] + ')');
    $(".image-3").css('backgroundImage','url(' + background_N_link[2] + ')');
    $(".image-4").css('backgroundImage','url(' + background_N_link[3] + ')');
    $(".image-5").css('backgroundImage','url(' + background_N_link[4] + ')');
    $(".image-6").css('backgroundImage','url(' + background_N_link[5] + ')');
};

// 页面加载完成时加载背景图片
$(document).ready(function(){
    background_A_show();
    background_H_show();
});

// 以下为主题切换功能
var Himage = document.querySelector("body > div.magnify"); // 定位涩涩图位置
var themeswitch = document.querySelector("input[name='themeswitch']"); // 定位拨动开关，name不能修改，不知道这鬼东西是怎么跑起来的

themeswitch.addEventListener('change', function() { // 监听开关
    if (themeswitch.checked) { // 判断开关状态
        // console.log("开关打开");
        Himage.id = 'overlay'; // 添加涩涩图
        background_A_show();
    } else { // 关闭开关时
        // console.log("开关关闭");
        Himage.removeAttribute("id"); // 移除涩涩图
        // ! 这里可能有bug，没图但有框，不局部刷新就不出现，暂时先不管
        background_N_show();
    }
});


// todo 页面加载完成时将开关关掉


// 以下为离开页面时修改标题
// 监听页面焦点变化
document.addEventListener('visibilitychange', function() {
    // 判断页面是否被扔到后台
    if (document.hidden) {
        // 修改标题
        document.title = '你要走了么(＞︿＜)';
    } else {
        // 修改标题
        document.title = '你回来了呀(=^ω^=)';
        // 这延时函数一坨，有需要再改
        setTimeout("document.title = '凝落的小房间☆~';", 2000);
    }
});

// 右键菜单-鉴赏功能
var backgrounds = document.querySelectorAll('.background'); // 定位背景图片位置
var appreciation = 0; // 设置鉴赏模式的默认状态
function appreciationmode() { // 构造函数给右键菜单调用
    if (appreciation == 0) { // 判断鉴赏模式是否开启
        backgrounds.forEach(function(background) { // 遍历每张背景图片
            background.style.zIndex = "100"; // 将背景图片堆叠次序提到最上层
        });
        $(".circle").removeClass("open"); // 关闭右键菜单
        $("#overlay").hide(); // 关闭涩涩图
        $("div[class='container']").hide(); // 隐藏其它元素，不然图片过渡时会冒出来
        $("footer").hide(); // 隐藏页脚
        appreciation = 1; // 设置鉴赏模式的状态为开启
        // console.log("鉴赏模式开启");
    } else { // 鉴赏模式关闭时再次点击按钮恢复默认模式
        backgrounds.forEach(function(background) { // 遍历每张背景图片
            background.style.zIndex = "-2"; // 将背景图片堆叠次序降到负数
        });
        $(".circle").removeClass("open"); // 关闭右键菜单
        $("#overlay").hide(); // 关闭涩涩图(如果开启)
        $("div[class='container']").show(); // 显示其它元素
        $("footer").show(); // 显示页脚
        appreciation = 0; // 设置鉴赏模式的状态为关闭
        // console.log("鉴赏模式关闭");
    };
};

// 右键菜单-强制刷新
function forcereload() { // 构造函数给右键菜单调用
    location.reload(true); // 强制刷新页面，重新请求所有资源
};
