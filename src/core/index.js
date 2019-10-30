/**
 * 核心 API
 */
import _when from './when'
let holdReadyCount = 0// 延迟Ready数
let isDOMContentLoaded = false // dom是否load完
const readyCallbacks = []// ready回调队列

// 执行ready队列里面的函数
function _executeReadyCallback (jq, callback) {
  callback && readyCallbacks.push(callback)
  if (holdReadyCount <= 0) {
    try {
      for (let i = 0; i < readyCallbacks.length; i++) {
        const fn = readyCallbacks[i]
        fn && fn()
      }
    } catch (e) {
      jq.readyException(e)
    }
  }
}

/**
 * 暂停或恢复.ready() 事件的执行
 * @param {Boolean} hold 指示是否暂停或恢复被请求的ready事件
 */
export function holdReady (hold) {
  hold ? ++holdReadyCount : --holdReadyCount

  if (holdReadyCount <= 0) {
    holdReadyCount = 0
    _executeReadyCallback(this)
  }

  return this
}

/**
 * 放弃jQuery控制$ 变量。
 * @param {Boolean} removeAll 判断是否从全局作用域中内去除所有jQuery变量(包括jQuery本身)
 */

export function noConflict (removeAll) {
  return this
}

// A Promise-like object (or "thenable") that resolves when the document is ready.
export function ready (callback) {
  if (isDOMContentLoaded) {
    _executeReadyCallback(this, callback)
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      isDOMContentLoaded = true
      _executeReadyCallback(this, callback)
    })
  }
  return this
}

/**
 * 等效的函数中的函数同步抛出错误的时候，这个方法就会被触发。默认情况下，在一个超时，它重新抛出错误，因此它被记录在控制台中，并传递给window.onerror，而不是被静悄悄的吞噬。如果你想以不同的方式处理这种错误，可以覆盖此方法
 * @param {error} error An error thrown in the function wrapped in jQuery().
 */
export function readyException (error) {
  throw error
}

/**
 * 提供一种方法来执行一个或多个对象的回调函数， Deferred(延迟)对象通常表示异步事件。
 */
export const when = _when
