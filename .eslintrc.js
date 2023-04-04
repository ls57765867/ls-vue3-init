module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'plugin:prettier/recommended', './.eslintrc-auto-import.json'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser', // 支持ts
    ecmaFeatures: {
      // 支持tsx
      jsx: true
    }
  },
  plugins: ['vue'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-deprecated-events-api': 'off', // vue3 events报错
    // 禁止重新设置函数
    'no-param-reassign': 'off',
    // 禁止未使用的变量 https://eslint.org/docs/rules/no-unused-vars#disallow-unused-variables-no-unused-vars
    'no-unused-vars': 'error',
    'linebreak-style': ['off', 'windows'],
    'no-const-assign': 2, // 禁止修改const声明的变量
    // quotes: ['error', 'single'], // 引号类型 `` "" ''
    semi: ['error', 'never'], // 尾部分号
    'no-irregular-whitespace': 2, // 不能有不规则的空格
    'no-mixed-spaces-and-tabs': [2, false], // 禁止混用tab和空格
    'arrow-parens': [2, 'as-needed'], // (a)=> 函数是否需要括号
    'no-multi-spaces': 2, // 禁止用多余的空格
    'no-multiple-empty-lines': [1, { max: 1 }], // 空行最多不能超过2行
    'no-redeclare': 2, // 禁止重复声明变量
    'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
    'no-sparse-arrays': 2, // 禁止稀疏数组， [1,,2]
    'no-trailing-spaces': 2, // 一行结束后面不要有空格
    'no-undef': 'off', // 不能有未定义的变量
    'no-use-before-define': 1, // 未定义前不能使用
    'no-useless-escape': 2, // 不允许在字符串和正则表达式中使用无意义的换行符
    'no-var': 2, // 禁用var，用let和const代替
    'array-bracket-spacing': [2, 'never'], // 是否允许非空数组里面有多余的空格
    'block-scoped-var': 2, // 块语句中使用var
    camelcase: 0, // 强制驼峰法命名
    'comma-dangle': [2, 'never'], // 对象字面量项尾不能有逗号
    'comma-spacing': 2, // 逗号前后的空格
    curly: [1, 'all'], // 必须使用 if(){} 中的{}
    eqeqeq: 2, // 必须使用全等
    // indent: ['error', 2, { SwitchCase: 1 }], // 缩进风格
    'key-spacing': [0, { beforeColon: false, afterColon: true }], // 对象字面量中冒号的前后空格
    'new-cap': 0, // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    'object-curly-spacing': ['error', 'always'], // 大括号内是否允许不必要的空格
    'prefer-const': 0, // 首选const
    strict: 0, // 使用严格模式
    'vars-on-top': 2, // var必须放在作用域顶部
    'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复 {a: 1,a:1}
    'no-dupe-args': 2, // 函数参数不能重复
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-new': ['off'],
    // camelcase: ['warn', {
    //     properties: 'never'
    // }],
    // 'brace-style': ['error', 'stroustrup'],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'spaced-comment': [
      'warn',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+']
        },
        block: {
          markers: ['!', '*!'],
          exceptions: ['*'],
          balanced: true
        }
      }
    ],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 4
      }
    ],
    'vue/max-attributes-per-line': 'off',
    'vue/attributes-order': 'off',
    'vue/no-unused-components': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
