module.exports = {
	base: '/',
	title: 'FE Knowledge',
	description: '前端技术集锦',
	port: 8888,
	serviceWorker: true,
	themeConfig: {
		nav: [
			{
				text: '计算机',
				items: [{ text: '计算机基础', link: '/Base/Cpu/network' }, { text: 'Browser', link: '/Base/Browser/browser' }, { text: '性能', link: '/Base/Performance/performance' }, { text: '安全', link: '/Base/Safety/safety' }, { text: '小程序', link: '/Base/Mp/mp' }, { text: '框架通识', link: '/Base/Framework/framework' }]
			},
			{
				text: 'JavaScript',
				items: [{ text: 'JavaScript基础', link: '/JavaScript/Base/js' }, { text: 'ES6', link: '/JavaScript/ES6/' }, { text: 'JavaScript专题', link: '/JavaScript/Special/' }, { text: '深入JavaScript', link: '/JavaScript/Thorough/' }]
			},
			{
				text: 'Vue',
				items: [{ text: 'Vue基础', link: '/Vue/Base/vue' }, { text: 'Vue源码解析', link: '/Vue/VueSourceAnalysis/' }, { text: 'Vue源码浅析', link: '/Vue/VueSourceAnalysis2/' }]
			},
			{
				text: 'Music',
				items: [{ text: '网易云音乐API', link: '/Music/' }]
			},
			{
				text: '前端基础',
				items: [{ text: '前端基础', link: '/FontKnowledge/' }]
			}
		],
		sidebar: {
			'/Base/Cpu/': [
				{
					title: '网络',
					children: ['network']
				},
				{
					title: '数据结构',
					children: ['dataStruct']
				},
				{
					title: '算法',
					children: ['algorithm']
				}
			],
			'/Base/Browser/': [
				{
					title: 'Browser',
					children: ['browser']
				}
			],
			'/Base/Performance/': [
				{
					title: '性能',
					children: ['performance']
				}
			],
			'/Base/Safety/': [
				{
					title: '安全',
					children: ['safety']
				}
			],
			'/Base/Mp/': [
				{
					title: '小程序',
					children: ['mp']
				}
			],
			'/Base/Framework/': [
				{
					title: '框架通识',
					children: ['framework']
				}
			],
			'/JavaScript/Base/': [
				{
					title: 'JavaScript基础',
					children: ['js']
				}
			],
			'/JavaScript/ES6/': [
				{
					title: 'ES6',
					children: ['', 'let', 'destructuring', 'string', 'regex', 'number', 'function', 'array', 'object', 'symbol', 'set-map', 'proxy', 'reflect', 'promise', 'iterator', 'generator', 'generator-async', 'async', 'class', 'class-extends', 'decorator', 'module', 'module-loader', 'mixin', 'simd', 'fp', 'style', 'spec', 'arraybuffer', 'proposals', 'reference']
				}
			],
			'/JavaScript/Special/': [
				{
					title: 'JavaScript专题',
					children: ['', '跟着underscore学防抖', '跟着underscore学节流', '数组去重', '类型判断上', '类型判断下', '深浅拷贝', '从零实现jQuery的extend', '如何求数组的最大值和最小值', '数组扁平化', '在数组中查找指定元素', 'jQuery通用遍历方法each的实现', '如何判断两个对象相等', '函数柯里化', '偏函数', '惰性函数', '函数组合', '函数记忆', '递归', '乱序', '解读v8排序源码']
				}
			],
			'/JavaScript/Thorough/': [
				{
					title: '深入JavaScript',
					children: ['', '从原型到原型链', '词法作用域和动态作用域', '执行上下文栈', '变量对象', '作用域链', '从ECMAScript规范解读this', '执行上下文', '闭包', '参数按值传递', 'call和apply的模拟实现', 'bind的模拟实现', 'new的模拟实现', '类数组对象与arguments', '创建对象的多种方式以及优缺点', '继承的多种方式和优缺点']
				}
			],
			'/Vue/Base/': [
				{
					title: 'Vue基础',
					children: ['vue']
				}
			],
			'/Vue/VueSourceAnalysis/': [
				{
					title: 'Vue源码解析',
					children: ['', '1start-learn', '2vue-constructor', '3vue-example', '4vue-normalize', '5vue-merge', '6vue-init-start', '7vue-reactive', '8vue-reactive-dep-watch', '9vue-state-init', '80vue-compiler-start', '81vue-lexical-analysis', '82vue-parsing', '83vue-parsing-2', '84vue-codegen', '85vue-vdom', '86vue-vdom-patch']
				},
				{
					title: '扩展',
					children: ['vue-hoc']
				},
				{
					title: '附录',
					children: ['vue-prototype', 'vue-global-api', 'vue-ins', 'core-util', 'web-util', 'shared-util', 'compiler-options', 'ast']
				}
			],
			'/Vue/VueSourceAnalysis2/': [
				{
					title: 'Vue源码解析',
					children: ['', '1造物创世', '2initMixin(上)', '3initMixin(下)', '4template的编译parse', '5template的编译optimize', '6template的编译generate', '7render到VNode的生成', '8依赖收集与监听', '9VirtualDOM与path']
				}
			],
			'/Music/': [
				{
					title: '网易云音乐API',
					children: ['']
				}
			],
			'/FontKnowledge/':[
				{
					title:'0、前端工具',
					children:[
						'00/01-Git的使用',
						'00/02-第一次使用VS Code时你应该知道的一切配置',
						'00/03-VS Code的使用积累',
						'00/04-Sublime Text在前端中的使用',
						'00/04-WebStorm的使用',
						'00/05-Atom在前端的使用',
						'00/chrome浏览器',
						'00/iconMoon',
						'00/iTerm2、OhMyZsh、agnoster 搭建',
						'00/whistle网络抓包'
					]
				},
				{
					title:'1、Html',
					children:[
						'01/01-html标签图文详解（一）',
						'01/02-html标签图文详解（二）'
					]
				},
				{
					title:'2、Css',
					children:[
						'02/01-CSS属性：字体属性和文本属性',
						'02/02-CSS属性：背景属性',
						'02/03-CSS样式表和选择器',
						'02/04-CSS选择器：伪类',
						'02/05-CSS样式表的继承性和层叠性',
						'02/06-CSS盒模型详解',
						'02/07-浮动',
						'02/08-CSS属性：定位属性',
						'02/09-CSS案例讲解：博雅互动',
						'02/10-CSS的一些小知识',
						'02/11-Sass入门',
						'02/12',
						'02/浏览器的兼容性问题'
					]
				},
				{
					title:'3、Javascript基础',
					children:[
						'03/01-JS简介',
						'03/02-变量',
						'03/03-变量的强制类型转换',
						'03/04-运算符',
						'03/05-流程控制语句：选择结构（if和switch）',
						'03/06-流程控制语句：循环结构（for和while）',
						'03/07-对象简介',
						'03/08-基本数据类型vs引用数据类型',
						'03/09-函数',
						'03/10-作用域',
						'03/11-this',
						'03/12-对象的创建、构造函数和原型',
						'03/13-数组',
						'03/14-内置对象',
						'03/15-DOM操作',
						'03/16-事件对象Event和冒泡',
						'03/17-事件委托',
						'03/18-BOM的常见内置方法和内置对象',
						'03/19-原型链',
						'03/20-常见代码解读',
					]
				},
				{
					title:'4、Javascript进阶',
					children:[
						'04/01-作用域和闭包',
						'04/02-call、apply、bind的区别',
						'04/03-this',
						'04/04-创建对象和继承',
						'04/05-浅拷贝和深拷贝'
					]
				},
				{
					title:'5、基本功：Css和DOM练习',
					children:[
						'05/01-CSS基础练习：JD首页的制作（顶部和底部）',
						'05/02-CSS基础练习：JD首页的制作（快捷导航部分）',
						'05/03-DOM操作练习：基础练习',
						'05/04-DOM操作练习：Tab栏切换（通过className设置样式）',
						'05/05-DOM操作练习：访问关系的封装',
						'05/06-DOM操作练习：通过style对象设置样式',
						'05/07-DOM操作练习：innerHTML的方式创建元素',
						'05/08-JavaScript基础：定时器'
					]
				},
				{
					title:'6、基本功：Javascript特效',
					children:[
						'06/01-offset家族和匀速动画-含轮播图的实现',
						'06/02-scroll家族和缓动动画',
						'06/03-client家族(可视区)',
						'06/04-JS的小知识'
					]
				},
				{
					title:'7、Jquery',
					children:[
						'07/01-jQuery的介绍和选择器',
						'07/02-jQuery动画详解',
						'07/03-jQuery操作DOM',
						'07/04-jQuery的事件机制和其他知识',
						'07/05-Zepto入门',
					]
				},
				{
					title:'8、HTML5和CSS3',
					children:[
						'08/01-HTML5详解',
						'08/02-CSS3的常见边框汇总',
						'08/03-CSS3选择器详解',
						'08/04-CSS3属性详解（一）',
						'08/05-CSS3属性详解：动画详解',
						'08/06-CSS3属性详解：flex布局',
						'08/07-CSS3属性详解：Web字体',
						'08/08-HTML5举例：简单的视频播放器',
						'08/09-HTML5详解（二）',
						'08/10-HTML5详解（三）',
					]
				},
				{
					title:'9、移动WEB开发',
					children:[
						'09/01-Bootstrap入门',
						'09/02-Bootstrap使用',
						'09/03-Less详解',
					]
				},
				{
					title:'10、Ajax',
					children:[
						'10/01-服务器分类及PHP入门',
						'10/02-Ajax入门和发送http请求',
						'10/03-函数封装-Ajax发送http请求',
						'10/04-同源和跨域',
						'10/05-模板引擎',
					]
				},
				{
					title:'11、Node.js和模块化',
					children:[
						'11/00-事件驱动和非阻塞机制',
						'11/01-Node.js入门',
						'11/02-JavaScript模块化01：CommonJS',
						'11/02-JavaScript模块化02：AMD',
						'11/02-JavaScript模块化03：CMD',
						'11/02-JavaScript模块化04：ES6',
						'11/CommonJS',
						'11/ES6',
						'11/Node.js代码举例',
						'11/WebSocket'
					]
				},
				{
					title:'12、ES6',
					children:[
						'12/01-ES5中的严格模式',
						'12/02-ES5中的一些扩展',
						'12/03-ES6的介绍和环境配置',
						'12/04-ES6：变量、函数扩展',
						'12/05-ES6：promise、async等',
						'12/06-ES6：字符串、数组、对象的扩展',
					]
				},
				{
					title:'13、前端基础',
					children:[
						'13/ajax相关',
						'13/css开发相关',
						'13/html相关',
						'13/json字符串的解析和遍历',
						'13/json相关',
						'13/UserAgent',
					]
				},
				{
					title:'14、前端进阶',
					children:[
						'14/01-前端的几道题目',
						'14/02-前端监控技术',
						'14/03-lazyload、防抖动和节流阀'
					]
				},
				{
					title:'15、前端面试',
					children:[
						'15/00-准备',
						'15/01-页面布局',
						'15/02-CSS盒模型及BFC',
						'15/03-DOM事件的总结',
						'15/04-HTTP协议',
						'15/05-01.创建对象和原型链',
						'15/05-02.面向对象：类的定义和继承的几种方式',
						'15/06-跨域通信类',
						'15/07-安全问题：CSRF和XSS',
						'15/08-算法问题',
						'15/09-01.浏览器渲染机制',
						'15/09-02.js运行机制：异步和单线程',
						'15/10-01.页面性能优化',
						'15/10-02.前端错误监控',
						'15/11-00.JavaScript高级面试：前言',
						'15/11-01.ES6：模块化的使用和编译环境',
						'15/11-02.ES6',
						'15/12-虚拟DOM',
						'15/13-MVVM',
						'15/14-面试题整理 by smyhvae',
						'15/15-网友面经',
						'15/16-面试技巧 by smyhvae',
						'15/z-web安全',
						'15/z-其他',
						'15/z-推荐文章',
						'15/z-计算机网络'
					]
				},
				{
					title:'16、面试题积累',
					children:[
						'16/01-我的面试经历 by smyhvae',
						'16/02-HTML和CSS相关',
						'16/03-http',
						'16/03-JS相关',
						'16/04-变量提升的题目',
						'16/05-BAT爱考的JS面试题',
						'16/20180116-博客园：一年经验初探阿里巴巴前端社招',
						'16/函数',
						'16/异步',
						'16/清单',
						'16/面经链接推荐'
					]
				},
				{
					title:'17、前端综合',
					children:[
						'17/2018年-前端日记',
						'17/2019年Web前端自学路线',
						'17/前端中的一些概念',
						'17/前端开发积累',
						'17/微信群好友分享整理',
						'17/网友对本项目提的建议'
					]
				},
				{
					title:'18、Vue基础',
					children:[
						'18/00-Vue的介绍和vue-cli',
						'18/01-01.Vue的系统指令',
						'18/01-02.v-on的事件修饰符',
						'18/01-03.Vue的系统指令(二)',
						'18/01-04.Vue的举例：列表功能',
						'18/01-05.自定义过滤器：时间格式化举例',
						'18/01-06.自定义按键修饰符、自定义指令',
						'18/02-Vue实例的生命周期函数',
						'18/03-Vue中的Ajax请求',
						'18/04-Vue动画',
						'18/05-Vue组件的定义和注册',
						'18/06-Vue组件之间的传值',
						'18/07-Vue-router路由',
						'18/Vue-router路由',
						'18/Vue开发积累',
						'18/Vue组件',
					]
				},
				{
					title:'19、前端工程化',
					children:[
						'19/01-Webpack',
						'19/01-项目介绍',
						'19/02-项目设计与原理分析',
						'19/03-京东金融的首页',
						'19/08-上线指导',
						'19/09-构建工具',
						'19/11-面试技巧',
						'19/Vue-router',
						'19/Vue基础知识',
						'19/z商城系统'
					]
				},
				{
					title:'20、推荐链接',
					children:[
						'20/01-推荐网站',
						'20/02-推荐文章',
						'20/推荐链接-互联网相关'
					]
				}
			]
		}
	}
};
