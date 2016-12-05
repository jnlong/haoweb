# yog2，协助nodejs做全栈开发

yog2，是百度fis团队开发的，针对后端语言是node的工程化解决方案；后端使用express框架；

## 功能
包含了fis3的大部分功能，并且引入了自动路由、app 拆分以及后端服务管理模块；
fis3的文章，可以移步到 [FIS3，大而全的前端工程化工具](https://github.com/jnlong/fe-cli/blob/master/FIS3%EF%BC%8C%E5%A4%A7%E8%80%8C%E5%85%A8%E7%9A%84%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96%E5%B7%A5%E5%85%B7.md)

## 使用的工具

* [swig](https://github.com/paularmstrong/swig) nodejs模板

* [fis3](http://fis.baidu.com/fis3/index.html) 大而全的前端工程化工具(yog2集成了fis3全部功能)
* [express](http://www.expressjs.com.cn/) 基于nodejs的web开发框架

## 安装
yog包含基础框架project模块和应用的业务代码app模块

	npm install -g yog2

### 创建project
通过使用 YOG2 提供的脚手架，可以快速创建一个基础的 yog2 project

	yog2 init project
	# prompt: Enter your project name:  (yog)
安装project依赖

	# 进入 yog project 目录
	cd yog
	npm install
启动project

	yog2 run

### 创建app
	yog2 init app
	# prompt: Enter your app name:  (home)
部署app：由于启动 yog2 project 后会一直占用控制台，因此我们需要另外开启一个控制台去部署 app。

	# 进入home目录
	cd home
	yog2 release debug -w

## 使用fis3
YOG2 命令行工具同时支持 fis 与 fis3 编译核心，建议使用fis3.下面三种几种方法都可以切换到fis3

	1. yog2 release prod --fis3 # --fis3 建议跟在所有参数的最后
	2. 设置环境变量
		linux: export YOG_MODE=fis3
		windows: windows 用户可以直接在环境变量中设置

## 目录结构
YOG2 将传统的一站式开发分解为了 yog2 project 与 yog2 app

* yog2 project 是基础的运行框架，负责中间件初始化和建立基础环境；可以存放后端公共组件model、log、中间件plugin、公共配置conf
* yog2 app 是应用的业务代码，每一个 app 都是一个独立的子项目，包含了这个子项目中所有的前后端代码。当项目的业务较简单时，也可以只使用一个 app 来管理代码。

