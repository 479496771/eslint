// https://eslint.org/docs/user-guide/configuring

module.exports = {
  //此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  //此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
  parserOptions: {
    parser: 'babel-eslint'
  },
  //此项指定环境的全局变量，下面的配置指定为浏览器环境
  env: {
    browser: true,
  },
   // 此项是用来配置标准的js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
      //大括号两侧必须带有空格
    'object-curly-spacing': ["error", "always", { "arraysInObjects": true }],
    //允许无箭头箭头功能
      'arrow-parens': 0,
    'no-extra-semi': "off",
    // 'semi-style': ["error", "last"],
    //js每行后面加；   不加分号'semi': ["error", "always"],
    'semi': ["error", "never"],
    // allow async-await
    'generator-star-spacing': 'off',
    // 禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eol-last': 0,//这句话表示在文件末尾可以不加回车，贴个链接  https://eslint.org/docs/rules/eol-last
    'space-before-function-paren': 0, //这句话表示在函数后可以不加空格,
    // 三等号
    'eqeqeq': 0,
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': 0,
    // 关键字后面使用一致的空格
    'keyword-spacing': 0,

    // 引号类型
     "quotes": [2, "single"],
    // 禁止出现未使用过的变量
    // 'no-unused-vars': 0,
    // 要求或禁止末尾逗号
    'comma-dangle': 0,
    "eqeqeq": 2,//必须使用全等
	"brace-style": [2, "1tbs"], //大括号风格

	"default-case": 2,//switch语句最后必须有default
	"block-scoped-var": 0, /// 在块级作用域外访问块内定义的变量是否报错提示
	"comma-dangle": [2, "never"], // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号
	"comma-style": [2, "last"], // 控制逗号在行尾出现还是在行首出现
	"space-infix-ops": 2,//中缀左右必须空格
	// "space-before-function-paren": [2, "never"],//函数定义时括号前面不要有空格
	"space-before-blocks": [2, "always"],//不以新行开始的块{前面要不要有空格
	"comma-spacing": [2, {"before": false, "after": true}],  // 控制逗号前后的空格
	"key-spacing": [2, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
	"space-after-keywords": "off",
    "keyword-spacing": [2, {"before": true, "after": true}]//关键字后面是否要空一格

  }
};
