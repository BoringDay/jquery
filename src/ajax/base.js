/**
 * Ajax 底层接口
 */

import _initData from './setting.js'
import { isString, isPlainObject } from '../util/index.js'
import { scriptAjax, jsonpAjax, xhrRequestAjax, fetchRequestAjax } from './request.js'

let initData = _initData

/**
 * 执行一个异步的HTTP（Ajax）的请求。
 * @param {String} url 一个用来包含发送请求的URL字符串。
 * @param {Object} settings 一个以"{键:值}"组成的AJAX 请求设置。所有选项都是可选的
*/
export const ajax = (settings) => {
  let st

  if (isString(settings)) {
    st = Object.assign(initData, { url: settings }) // 合并传入参数
  } else if (isPlainObject(settings)) {
    st = Object.assign(initData, settings || {}) // 合并传入参数
  } else {
    throw new Error('参数错误')
  }

  if (st.jsonp) {
    return jsonpAjax(st)
  } else {
    return (window.fetch ? fetchRequestAjax(st) : xhrRequestAjax(st))
  }
}

// 在每个请求之前被发送和$.ajax()处理它们前处理，设置自定义Ajax选项或修改现有选项。
export const ajaxPrefilter = () => {

}

// 为以后要用到的Ajax请求设置默认的值
export const ajaxSetup = (options) => {
  if (!isPlainObject(options)) {
    throw new Error('参数错误')
  }
  initData = Object.assign(initData, options)
}

// 创建一个对象，用于处理Ajax数据的实际传输。
export const ajaxTransport = () => {

}

// 使用一个HTTP GET请求从服务器加载数据。
export const get = (settings) => {
  return ajax(settings)
}

// 使用一个HTTP GET请求从服务器加载JSON编码的数据
export const post = (settings) => {
  let st = settings

  if (isString(settings)) {
    st = {
      url: settings
    }
  }
  st.type = 'POST'

  return ajax(st)
}

// 使用一个HTTP GET请求从服务器加载并执行一个 JavaScript 文件
export const getScript = (url, success) => {
  return scriptAjax(url, success)
}

// 使用一个HTTP POST 请求从服务器加载数据。
export const getJSON = () => {

}

// 从服务器载入数据并且将返回的 HTML 代码并插入至 匹配的元素 中。
export const load = () => {

}

/**
 *  -----------------知识点补充------------------------
 * XMLHttpRequest
 * request.setRequestHeader是在request.open 和send之间调用的
 * Content-type
 * https://www.jianshu.com/p/ba40da728806
 */
