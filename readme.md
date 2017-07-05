# Express-quickstart-emp

**Express-quieckstart-emp** 是一个基于 Node.js [Express](http://expressjs.com/ "Express - Node.js web application framework") Web 框架和 [EasyTemplateJS](https://github.com/ushelp/EasyTemplateJS "EasyTemplateJS")  模板引擎的快速开发骨架，集成了一个简易的员工管理系统，包含：登录，服务组件，Session 安全访问过滤等功能。

Express-quieckstart is a fast development skeleton based on Node.js [Express](http://expressjs.com/ "Express - Node.js web application framework") Web appliation framework and  [EasyTemplateJS](https://github.com/ushelp/EasyTemplateJS "EasyTemplateJS")  template engine, Integrated a simple staff management system, including: login, service component, Session security access and other functions.


## Express-quicker 快速生成工具/Generator tool

[Express-quicker](https://github.com/ushelp/Express-quicker "an application generator tool for Express-quicker")  是一个针对 `express-quickstart` 应用程序快速生成命令行工具。

`express-quicker`  is an application generator tool,  to quickly create an application skeleton use `express-quickstart` .

- 安装命令行工具 / Installs command-line tool:
	```
	npm install express-quicker -g
	```

- 创建 Express-quickstart 项目 / Creates an Express-quickstart app:
	```
	equicker -t emp [app-name]
	```

- 安装依赖 / Then install dependencies:
	```
	npm install
	```
	
- 启动 / Startup:
	```
	npm start
	```

- 访问 / Load:

 `http://localhost:3000/`


##  基础集成组件 / Basic integration components

- CORS

- Cookie

- Session(Cookie/Redis)

- Logging(Morgan&Winston)

- Body-parse

- Multer

- Method-override

- Serve-favicon

- Compression

- Exception Handler

## 目录结构 / directory structure
 
```sh
.
├── app.js
├── package.json
├── entiy
│   ├── Dept.js
│   ├── Emp.js
│   └── User.js
├── filter
│   └── user-filter.js
├── public
│   ├── img
│   ├── js
│   └── css
│       └── style.css
│   └── favicon.ico
│   └── upload.html
├── routes
│   ├── depts.js
│   ├── emps.js
│   ├── index.js
│   └── users.js
├── service
│   ├── dept-service.js
│   ├── emp-service.js
│   └── users-service.js
├── uploads
└── views
	├── admin
	│   └── admin.etj
	├── dept
	│   └── list.etj	
	├── emp
	│   └── list.etj
    ├── error.etj
    └── index.etj
```

  
## 模板引擎缓存控制 / Template engine cache control

缓存有利于渲染性能，但在开发或调试模式时，可以将 `cache` 设置为 false，以便无需重启，刷新即可观察修改.

Caching is useful for rendering performance, but in development or debug mode, you can set `cache` to false so that you can refreshing toobserve changes without restarting.

- **app.js**

```JS
...
/**
 * Template Engine (EasyTemplatJS)
 */
var fs = require('fs')
var Et = require('easytemplatejs');
//var cache = true;  // Use Cache?
var cache = process.env.NODE_ENV == 'production'; // Use Cache?
...
```



## 为何选择 EasyTemplateJS? / Why choose EasyTemplateJS?

Pug 等模板引擎带有自定义语言，需要高昂的学习成本，并且引擎内部需要对模板进行转换。

而 [EasyTemplateJS](https://github.com/ushelp/EasyTemplateJS "EasyTemplateJS") 直接基于原生 HTML 和 JavaScript 进行模板编译和渲染，并支持内嵌 JavaScript 脚本(`<etj-script>...</etj-script>`)和 CSS 样式脚本(`<etj-script>...</etj-script>`)。能更大限度发挥 EasyTemplateJS 高性能，小巧并简单易用的优势。

Pug and other template engine with a custom language, the need for high learning costs, and the need for internal transformation of the template template.

[EasyTemplateJS](https://github.com/ushelp/EasyTemplateJS "EasyTemplateJS") is based on native HTML and JavaScript for template compilation and rendering, support embedded JavaScript (`<etj-script>...</etj-script>`) and CSS(`<etj-script>...</etj-script>`). To maximize the advantages of EasyTemplateJS high performance, compact and easy to use.



## End

Email：<inthinkcolor@gmail.com>

[http://www.easyproject.cn](http://www.easyproject.cn "EasyProject Home")


**支付宝钱包扫一扫捐助：**

我们相信，每个人的点滴贡献，都将是推动产生更多、更好免费开源产品的一大步。

**感谢慷慨捐助，以支持服务器运行和鼓励更多社区成员。**

<img alt="支付宝钱包扫一扫捐助" src="http://www.easyproject.cn/images/s.png"  title="支付宝钱包扫一扫捐助"  height="256" width="256"></img>



We believe that the contribution of each bit by bit, will be driven to produce more and better free and open source products a big step.

**Thank you donation to support the server running and encourage more community members.**

[![PayPal](http://www.easyproject.cn/images/paypaldonation5.jpg)](https://www.paypal.me/easyproject/10 "Make payments with PayPal - it's fast, free and secure!")

