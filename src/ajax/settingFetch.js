/*
 * fetch请求默认参数
*/

export default {
  method: '', // 请求使用的方法，如 GET、POST。
  headers: '', // 请求的头信息，形式为 Headers 的对象或包含 ByteString 值的对象字面量。
  body: '', // 请求的 body 信息：可能是一个 Blob、BufferSource、FormData、URLSearchParams 或者 USVString 对象。注意 GET 或 HEAD 方法的请求不能包含 body 信息。
  mode: '', // 请求的模式，如 cors、 no-cors 或者 same-origin。
  credentials: '', // 请求的 credentials，如 omit、same-origin 或者 include。为了在当前域名内自动发送 cookie ， 必须提供这个选项， 从 Chrome 50 开始， 这个属性也可以接受 FederatedCredential 实例或是一个 PasswordCredential 实例。
  cache: '', // 请求的 cache 模式: default 、 no-store 、 reload 、 no-cache 、 force-cache 或者 only-if-cached 。
  redirect: '', // 可用的 redirect 模式: follow (自动重定向), error (如果产生重定向将自动终止并且抛出一个错误), 或者 manual (手动处理重定向). 在Chrome中，Chrome 47之前的默认值是 follow，从 Chrome 47开始是 manual。
  referrer: '', // 一个 USVString 可以是 no-referrer、client或一个 URL。默认是 client。
  referrerPolicy: '', // 指定了HTTP头部referer字段的值。可能为以下值之一： no-referrer、 no-referrer-when-downgrade、 origin、 origin-when-cross-origin、 unsafe-url 。
  integrity: '' // 包括请求的  subresource integrity 值 （ 例如： sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=）。
}
