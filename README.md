# jquery

try to achieve some function like jquery

## 目录结构

├── Readme.md
├── src // 配置  
│ ├── core  
│ │ ├── ajax.js // ajax 相关函数：待完整  
│ │ ├── callbacks.js // 回调对象  
│ │ ├── dom.js // Dom 属性：获取和设置页面元素的 DOM 属性。  
│ │ |── index.js // 入口文件  
| |  
│ ├── library //外部库  
| |  
│ ├── util // 工具类

## rollup

- https://lengstorf.com/learn-rollup-js/ 根据这个用的版本太低了，导致配置文件和现在的对应不上。
  。

- 安装 rollup-plugin-babel@4.3.3
  Error transforming E:\mygithub\jquery\src\core\main.js with 'babel' plugin: Plugin/Preset files are not allowed to export objects, only functions. In E:\mygithub\jquery\node_modules\babel-preset-es2015\lib\index.js

  解决：降级回 "rollup-plugin-babel": "^2.7.1",
