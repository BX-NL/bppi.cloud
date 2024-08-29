# All in one ? All in BOOM !

## 安装配置基本环境

本地机器执行ssh-keygen -t rsa,进入用户目录下的.ssh文件夹，将内容复制到服务器的~/.ssh/authorized_keys内

Root用户登录需要修改/etc/ssh/sshd_config内的PermitRootLogin行取消注释并修改为yes，并重启ssh服务systemctl restart ssh

然后使用ssh终端连接服务器

(可选)修改/etc/apt/sources.list
更换为速度更快的下载源

执行命令更新下载源
    sudo apt-get update

安装基础套件
    sudo apt-get install vim wget curl gnupg2 ca-certificates lsb-release

### 安装GCC

应该不会有系统不带GCC吧

    sudo apt-get install gcc

### 安装JDK

下载所需的jdk包

解压并移动到所需路径

    tar -xvzf jdk-8u411-linux-x64.tar.gz
    mv ./jdk1.8.0_411 /usr/lib/java/

并修改环境变量：

    # 全局变量
    vim /etc/profile
    # 用户环境变量
    vim ~/.bashrc

在文件最后追加所安装的JDK的配置，JDK8需要添加JRE的变量，其它则不需要。示例：

	# JDK 8
	export JAVA_HOME=/usr/lib/java/jdk1.8.0_411
	export JRE_HOME=$JAVA_HOME/jre
	export CLASSPATH=$JAVA_HOME/lib:$JRE_HOME/lib
	export PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin

	# JDK 11
	export JAVA_HOME=/usr/lib/java/jdk-11.0.12
	export CLASSPATH=$JAVA_HOME/lib
	export PATH=$PATH:$JAVA_HOME/bin

### 安装Python

使用命令查看自带的Python版本

    python3 -V

不建议卸载自带的Python，容易出现各种奇奇怪怪的问题

    # 安装所需版本的Python
    sudo apt-get install python3.9

修改软连接，使python3命令指向所需的python版本

    sudo ln -sf /usr/bin/python3.9 /usr/bin/python3

### 安装宝塔面板

宝塔这坨东西又臭又硬，仅便于非图形化系统管理面板使用，非必要不建议安装。

访问https://www.bt.cn/new/download.html
复制对应的安装命令并切换到root用户下执行

等待几分钟后，安装完成时会提示面板地址及账户密码，有需要的可以保存

或者在终端输入bt
并输入所需选项前的数字，修改账户密码

### aria2

111

### Nginx


    sudo apt install nginx
    sudo systemctl start nginx
    sudo systemctl enable nginx


### 安装Trojan

一般情况可使用直接安装

    sudo apt-get install trojan

但我更推荐使用带管理面板的脚本进行安装(更新也是这行命令)，来源：https://github.com/Jrohy/trojan

    source <(curl -sL https://git.io/trojan-install)

证书申请可任选其一自动获取，或使用已有证书。

数据库建议使用docker版的mariadb, mysql过于大坨了，如果你执意安装，可参考下文的其它内容部分。

    # 启动管理面板
    trojan

web服务默认开在80端口，与nginx冲突，可以试试这个https://github.com/Jrohy/trojan/wiki/%E4%BF%AE%E6%94%B9web%E7%AB%AF%E5%8F%A3
反正我试了不行

    # 启动web服务
    systemctl stop nginx
    trojan-web

### frps

前往https://github.com/fatedier/frp/releases
下载对应架构的文件，解压并安装

修改frps.toml的内容

    bindPort = 7000 # 服务端监听端口
    auth.method = "token" # 服务端连接身份认证，默认token
    auth.token = "password" # 服务端token密码
    webServer.Addr = "0.0.0.0" # DashBoard服务监听地址
    webServer.port = 7001 # DashBoard服务监听端口
    webServer.user = "admin" # DashBoard账号
    webServer.password = "admin" # DashBoard密码
    allowPorts = [
        { start = 10000, end = 15000 },   # 指定端口范围设置为10000-15000可用
        { single = 25565 },   # 指定25565端口可用
    ]

配置为系统服务

    vim /lib/systemd/system/frps.service

    # frps.service
    [Unit]
    Description=frps service
    After=network.target syslog.target
    Wants=network.target
    [Service]
    Type=simple
    #Restart=always
    Restart=on-failure
    RestartSec=5s
    ExecStart=/usr/local/frp/frps -c /usr/local/frp/frps.toml
    [Install]
    WantedBy=multi-user.target

然后使用以下命令运行

    systemctl start frps

客户端上的frpc.toml如下

    serverAddr = "192.168.1.1" # 服务端的公网地址
    serverPort = 7000 # 服务端监听端口
    auth.method = "token" # 连接身份认证，与服务端保持一致
    auth.token = "password" # token密码，与服务端保持一致

    [[proxies]]
    name = "test-tcp" # 连接
    type = "tcp" # 连接类型，可选TCP、UDP等
    localIP = "127.0.0.1" # 需要转发的地址，一般为本机地址
    localPort = 5500 # 需要转发的端口
    remotePort = 25565 # 目标服务器的端口，需包含在服务端的allowPorts内

使用以下命令运行

    frpc.exe -c frpc.toml


### HTML项目

修改nginx配置

    vim /etc/nginx/nginx.conf

在http内添加

    server {
        # 监听80端口
		listen 80;
        # 修改为你自己的域名
		server_name example.com;
        # 重定向至443端口
		rewrite ^(.*)$ https://${server_name}$1 permanent;
	}

	server {
        # 监听443端口，启用ssl
		listen 443 ssl;
        # 修改为你自己的域名
		server_name  example.com;
		
        # 证书路径
		ssl_certificate /example.com/cert/example.com.pem;
		ssl_certificate_key /example.com/cert/example.com.key;
		
        # 证书相关配置
		ssl_session_timeout  5m;
		ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
		ssl_protocols TLSv1 TLSv1.1 TLSv1.2;    
		ssl_prefer_server_ciphers on;

        # 网站位置
		location / {
			root /example.com;
			index  index.html;
		}
	}

### python项目

安装依赖

    pip3 install -r requirements.txt

不间断执行，也可以手搓一个service

    nohup python3 /demo/main.py

## 其它内容

### 安装mysql

使用apt进行安装

    sudo apt-get install mysql-server

受益于阿里云这勾史的弱鸡服务器，装mysql时带着系统一起崩溃了。
强制重启后apt还炸了，使用以下命令修复，可参考：https://blog.csdn.net/weixin_36451874/article/details/78698558

    # 强制移除错误的软件包
    sudo dpkg --remove --force-remove-reinstreq mysql-server
    # 卸载并清理软件包
    sudo apt-get autoremove mysql* --purge
    # 删除卸载残留(非常重要)
    sudo rm /var/lib/mysql/ -R
    sudo rm /etc/mysql/ -R

执行一遍apt update然后重新安装

默认情况下执行

    sudo mysql -u root -p
    # 密码直接回车跳过