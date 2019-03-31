module.exports = {
  root: true,
  env: {
    node: true,

    //browser: true,
    //es6: true,
    //jquery: true,
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended' //'@vue/standard'
  ],
  rules: {
    //'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off', //禁止console报错检查
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-irregular-whitespace': 'off' //禁止空格报错检查
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
