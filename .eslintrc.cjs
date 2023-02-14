module.exports = {
  env : {
    browser : true ,
    es2021 : true ,
    node : true
  } ,
  extends : [
    'plugin:vue/vue3-essential' ,
    'standard-with-typescript' ,
    '.eslintrc-auto-import.json'
  ] ,
  overrides : [] ,
  parserOptions : {
    project : ['tsconfig.json' , 'tsconfig.node.json'] ,
    ecmaVersion : 'latest' ,
    sourceType : 'module'
  } ,
  plugins : [
    'vue'
  ] ,
  rules : {
    'no-var' : 'error' ,// 禁止使用 var
    'quotes' : [2 , 'single'] ,//引号类型 `` "" ''
    'semi' : ['error' , 'never'] ,// 语句强制分号结尾
    'indent' : ['error' , 2] , // 强制使用一致的缩进
    'default-case' : 2 , // 强制switch要有default分支
    'camelcase' : 2 , // 强制使用骆驼拼写法命名约定
    'eol-last' : 0 ,//代码结尾不需要空行
    'space-before-function-paren' : [0 , 'always'] , //函数定义时括号前面要不要有空格
    // 优先使用 interface 而不是 type
    '@typescript-eslint/consistent-type-definitions' : ['error' , 'interface'] ,
    'no-multiple-empty-lines' : ['error' , { 'max' : 2 , 'maxEOF' : 1 }] ,
    '@typescript-eslint/no-explicit-any' : 'off' ,
    '@typescript-eslint/triple-slash-reference' : 'off' ,
    '@typescript-eslint/explicit-module-boundary-types' : 'off' ,
    '@typescript-eslint/ban-types' : 'off' ,
    '@typescript-eslint/strict-boolean-expressions' : 'off' ,
    '@typescript-eslint/prefer-optional-chain' : 'off' ,
    '@typescript-eslint/no-unused-vars' : 'off' ,
    '@typescript-eslint/space-before-function-paren' : 'off' ,//关闭方法名后跟空格验证
    // '@typescript-eslint/quotes' : 'off' ,
    // '@typescript-eslint/semi' : 'off' ,
    '@typescript-eslint/no-extraneous-class' : 'off'
  }
}
