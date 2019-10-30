/**
 * sizzle引擎，根据传入选择器返回元素,根据传入选择器从右往左向dom属往上查询
 * https://github.com/jquery/sizzle
 */
import Sizzle from './library/sizzle.min.js'
import Promise from './common/Promise.js'
import { isString } from './util/index.js'

import * as dom from './dom/index.js'
import Callbacks from './callbacks/index.js'
import { holdReady, noConflict, ready, readyException, when } from './core/index.js'

// 获取目标元素
function _getTargetElement (el) {
  let element
  if (el instanceof window.HTMLElement) {
    element = [el]
  } else if (isString(el)) {
    element = Sizzle(el)
  }

  return Array.prototype.slice.call(element) // 数组转换或者[].slice.call(arr);
}

// 2019/10/12 之前根据传入内容不断返回全局的jQuery,并且函数用了柯里化去返回这样会导致每次调用这个方法的数据共享，改进这个情况故返回一个对象
function jquery (selector) {
  const elements = _getTargetElement(selector)

  return Object.assign({
    selector: selector,
    element: _getTargetElement(selector),
    length: elements.length
  }, dom)
}

jquery.Callbacks = Callbacks
jquery.holdReady = holdReady
jquery.noConflict = noConflict
jquery.ready = ready
jquery.readyException = readyException
jquery.when = when

window.$ = window.Jquery = window.jquery = jquery
window.Promise = Promise
