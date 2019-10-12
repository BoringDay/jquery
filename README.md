# jquery

try to achieve some function like jquery

## rollup 参考安装

## 注意

- https://lengstorf.com/learn-rollup-js/ 用的版本太低了，导致配置文件和现在的对应不上。
  。

- 安装 rollup-plugin-babel@4.3.3
  Error transforming E:\mygithub\jquery\src\core\main.js with 'babel' plugin: Plugin/Preset files are not allowed to export objects, only functions. In E:\mygithub\jquery\node_modules\babel-preset-es2015\lib\index.js

  解决：降级回 "rollup-plugin-babel": "^2.7.1",
