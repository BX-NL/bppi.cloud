## 概述

---

**自己做的小网站，记录一下学习前端开发的过程。[点击跳转](https://www.ncgncg.top/)**

**前端部分用了HTML5、CSS、JavaScript，纯原生，Web框架不熟**

**主页没有后端，后续再考虑加点别的东西，文件快递柜部分使用Python3**

**服务端部分的详细内容可查看[All in BOOM.md](All%20in%20BOOM.md)**

---

**参考了不少大佬们的项目，**
**主要内容来自Beats0大佬的[Galgame网站](https://www.mmgal.com/)，各种页面元素和动画效果都是从这拿的。甚至连图床也是蹭的，~~Steam的资源不用白不用。~~[项目地址](https://github.com/Beats0/www.mygalgame.com)**

**网页小组件来自dsrkafuu的[sakana-widget](https://github.com/dsrkafuu/sakana-widget)**

**首先我不是小黑子，然后我花了2.5分钟截了一张打篮球的图放到这个小组件里。**

**然后是文件快递柜来自vastsa的[FileCodeBox](https://github.com/vastsa/FileCodeBox)，~~看见那帮人把几个破文件用微信传来传去就烦~~，正好也是学Python的，顺便借来参考学习。**



---

## Tree

    ncgncg.top
    ├─Aos : 不会用，先放着
    │   ├─aos-768.css : aos(动画库)的样式表-大于768px时
    │   ├─aos.css : aos(动画库)的默认样式表
    │   └─aos.js : aos(动画库)的js
    ├─Audio
    │   └─Ding.mp3 : 右键菜单音效
    ├─Css
    │   ├─background.css : 背景图片的样式
    │   ├─hint.css : 乱七八糟的东西，鼠标指向元素时的提示框
    │   ├─keyframes.css : 乱七八糟的东西，背景图轮播的样式
    │   ├─mian.css : 全局样式
    │   ├─miann.css : 总样式表
    │   ├─rightmenu.css : 右键菜单的样式
    │   └─switch.css : 开关的样式，但是一坨，有空再弄
    ├─Data
    │   └─images 存放各种乱七八糟的图片
    │       └─*.*
    ├─Fonts
    │   └─SimileySans-Oblique.ttf.woff2 : 字体-得意黑，文件有点大，等有空换一下
    ├─Highslide
    │   ├─graphics
    │   │   └─*.* : 各种乱七八糟的图标
    │   ├─highslide.css : highslide库的样式表
    │   └─highslide.js : highslide库的js
    ├─Images
    │   ├─menu : 存放右键菜单按钮图标
    │   │   ├─001.jpg
    │   │   ├─002.jpg
    │   │   ├─003.jpg
    │   │   ├─004.jpg
    │   │   ├─005.jpg
    │   │   └─006.jpg
    │   ├─mouse : 存放鼠标指针样式
    │   │   ├─mouse-1.cur : 鼠标样式1-指针
    │   │   ├─mouse-2.cur : 鼠标样式2-点击
    │   │   └─mouse-3.cur : 鼠标样式3-透明
    │   ├─background-error.jpg : 背景图没加载出来时显示的图片
    │   ├─bg.gif : 未适配设备的默认背景图，估计用不上了
    │   ├─ciallo.gif : 柚子厨真恶心
    │   ├─favicon.ico : 网站图标
    │   ├─logo.ico : 网站大图标(还没做好)
    │   └─transparent.png : 背景图下的透明遮罩
    ├─RecyleBin
    │   └─*.* 存放没用的垃圾
    ├─Sakana-Widget
    │   ├─images : 存放用于更换的图片
    │   │   └─kunkun.png : 你干嘛~哎呦~
    │   ├─sakana.min.css : sakana的样式表
    │   └─sakana.min.js : sakana的js
    ├─Scripts
    │   ├─jquery : 存放jquery库的js，太复杂，有空再搓几个轮子
    │   │   └─*.js
    │   ├─AntiTencent.js : 拦截腾讯系软件访问
    │   ├─aos-start.js : 启动aos库的js，不知道有什么用
    │   ├─background.js : 配置图床和背景图链接
    │   ├─inputstyle.js : 输入文字时的特效
    │   ├─placeholder.js : 输入框的动态占位词
    │   ├─powermode.js : 各种乱七八糟的功能的前置，包括下拉菜单、返回顶部按钮等
    │   ├─rightmenu.js : 设置右键菜单相关内容
    │   ├─sakana.js : sakana~
    │   ├─something.js : 奇思妙想的小功能：背景图片、主题切换、鉴赏模式、页面刷新、页面失焦切换标题
    │   ├─superplaceholder.js : 不知道是什么
    │   ├─winwinwin.js : 看看你的
    │   └─zan.js : 其它乱七八糟的功能：下拉菜单、返回顶部按钮、图片延迟加载，有空再拆
    ├─index-from.html : 二级页面，制作中
    ├─index-main.html : 主页，有空再研究
    ├─index.html : 实际上是三级页面
    ├─Readme.md : Readme
    └─test.jpg : 不可以涩涩

## Changelog

2024-01-01 项目启动

2024-01-03 改了一些乱七八糟的

2024-01-05 改了一些乱七八糟的

2024-01-14 修改部分样式表，

2024-01-16 重构样式表，将不同部分的

2024-01-17 调整一些乱七八糟的东西

2024-01-18 新增主题切换功能，增加鉴赏模式

2024-01-19 修复若干bug

2024-01-23 新增一些奇思妙想的想法(估计没机会实现了)

2024-01-24 实现一些有趣的功能

2024-02-25 新增Sakana Widget

2024-03-06 修改壁纸图床，实现主题切换功能，精简项目结构

2024-04-10 在阿里云零元购了一台VPS

2024-05-03 新增FileCodeBox

2024-05-16 配置部署服务器

2024-07-09 挂到Github，然后开摆