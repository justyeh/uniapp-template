**util/wrap.js**  
重新包装了一层uni的路由方法，实现以下功能：登陆了正常跳转，没登陆跳转到登陆页  

**hbuider 插件**
- eslint-js
- eslint-vue
- compile-node-sass
- prettier

**hbuider 配置**  
工具->设置->编辑器配置->启用.editorconfig 支持 打开

**微信开发者工具预览**  
设置->通用设置->安全->服务端口 打开

**prettier 配置**

```js
module.exports = {
  printWidth: 180, // 控制单行最大长度
  semi: false, //  控制每条语句是否加上分号
  tabWidth: 2, // 控制一个tab对应的空格数
  useTabs: false, // 控制缩进用tab还是space
  singleQuote: true, // 控制字符串是用单引号还是双引号
  trailingComma: 'none', // 是否去掉末尾的逗号
  bracketSpacing: true, // 控制json对象括号前后是否加上空格
  htmlWhitespaceSensitivity: 'ignore',
  parsers: {
    '.jsx': 'flow',
    '.scss': 'scss',
    '.ts': 'typescript',
    '.less': 'css',
    '.vue': 'vue',
    '.nvue': 'vue',
    '.ux': 'vue',
    '.yml': 'yaml'
  }
}
```
