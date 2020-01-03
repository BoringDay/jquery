export default {
  accepts: {}, // 内容类型发送请求头
  async: true, // 默认设置下，所有请求均为异步请求
  beforeSend: null, // 请求发送前的回调函数
  cache: false, // 如果设置为 false ，浏览器将不缓存此页面
  complete: null, // 请求完成后回调函数
  contents: null, // 一个以"{字符串/正则表达式}"配对的对象，根据给定的内容类型，解析请求的返回结果。
  contentType: '', // 发送信息至服务器时内容编码类型
  context: null, // 这个对象用于设置Ajax相关回调函数的上下文
  crossDomain: false, // 如果你想在同一域中强制跨域请求（如JSONP形式）
  data: null, // Object, String  发送到服务器的数据
  dataFilter: null, // 一个函数被用来处理XMLHttpRequest的原始响应数据
  dataType: '', // 预期服务器返回的数据类型 (默认: Intelligent Guess (xml, json, script, or html))
  error: function () {},
  global: true, // 无论怎么样这个请求将触发全局AJAX事件处理程序
  headers: {}, // 一个额外的"{键:值}"对映射到请求一起发送。
  ifModified: false, // 只有上次请求响应改变时，才允许请求成功
  isLocal: true, // 允许当前环境被认定为“本地”,默认：取决于当前的位置协议
  jsonp: false, // 在一个jsonp请求中重写回调函数的名字。
  jsonpCallback: null, // 为jsonp请求指定一个回调函数名。这个值将用来取代jQuery自动生成的随机函数名。
  mimeType: '', // 一个mime类型用来覆盖XHR的 MIME类型
  password: '', // 用于响应HTTP访问认证请求的密码
  /**
   * 默认情况下，通过data选项传递进来的数据，如果是一个对象(技术上讲只要不是字符串)，都会处理转化成一个查询字符串，以配合默认内容类型 "application/x-www-form-urlencoded"。如果要发送 DOM 树信息或其它不希望转换的信息，请设置为 false。
   */
  processData: true,
  scriptCharset: {}, // 仅适用于当"script"传输使用时（例如，跨域的"jsonp"或 dataType选项为"script" 和 "GET"类型）
  statusCode: {}, // 一组数值的HTTP代码和函数对象，当响应时调用了相应的代码。
  success: null, // 请求成功后的回调函数。这个函数传递3个参数：从服务器返回的数据，并根据dataType参数进行处理后的数据，一个描述状态的字符串;还有 jqXHR
  timeout: null, // 设置请求超时时间（毫秒）
  traditional: false, // 如果你想要用传统的方式来序列化数据，那么就设置为true
  type: 'GET', // 请求方式 ("POST" 或 "GET")， 默认为 "GET"。注意:其它 HTTP 请求方法，如 PUT 和 DELETE 也可以使用，但仅部分浏览器支持。
  url: window.location.href, // 发送请求的地址。
  username: '', // 响应HTTP访问认证请求的用户名
  xhr: '', // 回调创建XMLHttpRequest对象。当可用时默认为ActiveXObject（IE）中，否则为XMLHttpRequest。提供覆盖你自己的执行的XMLHttpRequest或增强工厂。
  xhrFields: null// 一对“文件名-文件值”组成的映射，用于设定原生的 XHR对象。例如，如果需要的话，在进行跨域请求时，你可以用它来设置withCredentials为true。
}
