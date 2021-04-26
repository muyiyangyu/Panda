module.exports = {
  root: true,
  // 此项指定环境的全局变量，
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-native"],
  env: {
    es6: true,
    node: true,
    "react-native/react-native": true
  },
  // 脚本在执行期间访问的额外的全局变量
  // 当访问未定义的变量时，no-undef 规则将发出警告。如果你想在一个文件里使用全局变量，推荐你定义这些全局变量，这样 ESLint 就不会发出警告了。你可以使用注释或在配置文件中定义全局变量。
  globals: {},
  extends: [
    "@react-native-community",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  // 设置解析器选项（必须设置这个属性）
  parserOptions: {
    // 想使用的额外的语言特性:
    ecmaFeatures: {
      // http://es6.ruanyifeng.com/#docs/object#对象的扩展运算符
      experimentalObjectRestSpread: true,
      // 启用 JSX
      jsx: true,
      tsx: true
    },
    //设置"script"（默认）或"module"如果你的代码是在ECMAScript中的模块
    sourceType: "module"
  },
  rules: {
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/no-empty-interface": ["off"],
    "@typescript-eslint/no-empty-function": ["off"]
  }
};
