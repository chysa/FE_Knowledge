module.exports = {
  base: '/doc/',
  title: 'FE Knowledge',
  description: '前端技术集锦',
  port: 8888,
  serviceWorker: true,
  themeConfig: {
    nav: [
      {
        text: 'JavaScript',
        items: [
          { text: 'ES6', link: '/ES6/' },
          { text: 'JavaScript专题', link: '/Special/' },
          { text: '深入JavaScript', link: '/Thorough/' }
        ]
      },
      {
        text: 'Vue',
        items: [
          { text: 'Vue源码解析', link: '/VueSourceAnalysis/'}
        ]
      }
    ],
    sidebar: {
      '/ES6/': [
        {
          title: 'ES6',
          children: [
            '',
            'let',
            'destructuring',
            'string',
            'regex',
            'number',
            'function',
            'array',
            'object',
            'symbol',
            'set-map',
            'proxy',
            'reflect',
            'promise',
            'iterator',
            'generator',
            'generator-async',
            'async',
            'class',
            'class-extends',
            'decorator',
            'module',
            'module-loader',
            'mixin',
            'simd',
            'fp',
            'style',
            'spec',
            'arraybuffer',
            'proposals',
            'reference'
          ]
        }
      ],
      '/Special/': [
        {
          title: 'JavaScript专题',
          children: [
            '',
            '跟着underscore学防抖',
            '跟着underscore学节流',
            '数组去重',
            '类型判断(上)',
            '类型判断(下)',
            '深浅拷贝',
            '从零实现jQuery的extend',
            '如何求数组的最大值和最小值',
            '数组扁平化',
            '在数组中查找指定元素',
            'jQuery通用遍历方法each的实现',
            '如何判断两个对象相等',
            '函数柯里化',
            '偏函数',
            '惰性函数',
            '函数组合',
            '函数记忆',
            '递归',
            '乱序',
            '解读v8排序源码'
          ]
        }
      ],
      '/Thorough/': [
        {
          title: '深入JavaScript',
          children: [
            '',
            '从原型到原型链',
            '词法作用域和动态作用域',
            '执行上下文栈',
            '变量对象',
            '作用域链',
            '从ECMAScript规范解读this',
            '执行上下文',
            '闭包',
            '参数按值传递',
            'call和apply的模拟实现',
            'bind的模拟实现',
            'new的模拟实现',
            '类数组对象与arguments',
            '创建对象的多种方式以及优缺点',
            '继承的多种方式和优缺点'
          ]
        }
      ],

      '/VueSourceAnalysis/': [
        {
          title: 'Vue源码解析',
          children: [
            '',
            '1start-learn',
            '2vue-constructor',
            '3vue-example',
            '4vue-normalize',
            '5vue-merge',
            '6vue-init-start',
            '7vue-reactive',
            '8vue-reactive-dep-watch',
            '9vue-state-init',
            '80vue-compiler-start',
            '81vue-lexical-analysis',
            '82vue-parsing',
            '83vue-parsing-2',
            '84vue-codegen',
            '85vue-vdom',
            '86vue-vdom-patch'
          ]
        },
        {
          title: '扩展',
          children: [
            'vue-hoc'
          ]
        },
        {
          title: '附录',
          children: [
            'vue-prototype',
            'vue-global-api',
            'vue-ins',
            'core-util',
            'web-util',
            'shared-util',
            'compiler-options',
            'ast'
          ]
        }
      ]

    }
  }
}
