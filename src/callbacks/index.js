/**
 * 回调对象
 * jQuery.Callbacks() 函数返回一个全能的对象，此对象对管理回调列表提供了强大的方式。它能够增加、删除、触发、禁用回调函数。
 */

import { isArray, isFunction, removeExtraSpace, isString } from '../util/index.js'

// 回调列表中添加一个回调或回调的集合。
function add (callbacks) {
  if (!(isArray(callbacks) || isFunction(callbacks))) return this

  // 判断回调列表是否已被锁定
  if (this.isLocked) return this

  callbacks = isFunction(callbacks) ? [callbacks] : callbacks
  callbacks.map(item => {
    // flags:unique: 确保一次只能添加一个回调(所以在列表中没有重复的回调)
    if (!this.flags.has('unique') || (this.flags.has('unique') && !this.has(item))) {
      this.callbackList.push(item)
    }
  })

  return this
}

// 禁用回调列表中的回调
function disable () {
  this.isDisabled = true
  return this
}

// 确定回调列表是否已被禁用。
function disabled () {
  return this.isDisabled
}

function empty () {
  // 判断回调列表是否已被锁定
  if (this.isLocked) return this

  this.callbackList = []
  return this
}

// 传入指定的参数调用所有的回调
function fire () {
  return fireWith(this, arguments)
}

/**
 * 访问给定的上下文和参数列表中的所有回调。
 * @param {Object} context 该列表中的回调被触发的上下文引用
 * @param {Array} args 一个参数或参数列表传回给回调列表。
 */
function fireWith (context, args) {
  const _this = context
  if (_this.isDisabled) return _this

  // flags:once-确保这个回调列表只执行（ .fire() ）一次
  if (_this.flags.has('once') && _this.fireCount >= 1) {
    return _this
  }

  ++_this.fireCount

  const callbackListLength = _this.callbackList.length
  for (let i = 0; i < callbackListLength; i++) {
    const fn = _this.callbackList[i]
    const flag = fn.apply(_this, args)

    // flags:stopOnFalse-当一个回调返回false 时中断调用
    if (_this.flags.has('stopOnFalse') && flag === false) {
      return _this
    }
  }
  return _this
}

// 确定回调是否至少已经调用一次。
function fired () {
  return this.fireCount > 0
}

// 确定列表中是否提供一个回调
function has (callback) {
  // return this.callbackList.includes(callback) 改为new Set()判断
  return (new Set(this.callbackList)).has(callback)
}

// 锁定回调列表的当前状态
function lock () {
  this.isLocked = true
  return this
}

// 确定回调列表是否已被锁定。
function locked () {
  return this.isLocked
}

// 从回调列表中的删除一个回调或回调集合。
function remove (callbacks) {
  if (!(isArray(callbacks) || isFunction(callbacks))) return this

  // 判断回调列表是否已被锁定
  if (this.isLocked) return this

  callbacks = new Set(isFunction(callbacks) ? [callbacks] : callbacks)

  const newCallbackList = []
  this.callbackList.map(fn => {
    if (!callbacks.has(fn)) newCallbackList.push(fn)
  })

  this.callbackList = newCallbackList

  return this
}
/**
 * 一个多用途的回调列表对象，提供了强大的的方式来管理回调函数列表。
 * @param {String} flags [可选] 一个用空格标记分隔的标志可选列表,用来改变回调列表中的行为。
 * flags可选：
 * - once: 确保这个回调列表只执行（ .fire() ）一次(像一个递延 Deferred).
   - memory: 保持以前的值，将添加到这个列表的后面的最新的值立即执行调用任何回调 (像一个递延 Deferred).
   - unique: 确保一次只能添加一个回调(所以在列表中没有重复的回调).
   - stopOnFalse: 当一个回调返回false 时中断调用
 */
function Callbacks (flags = new Set()) {
  if (isString(flags)) {
    const arr = removeExtraSpace(flags).split(' ')
    flags = new Set(arr)
  }
  return {
    flags,
    store: [], // 存储列表
    isDisabled: false, // 是否禁止掉
    isLocked: false, // 是否锁住
    fireCount: 0, // 调用次数
    callbackList: [],
    add,
    disable,
    disabled,
    empty,
    fire,
    fired,
    has,
    lock,
    locked,
    remove
  }
}

export default Callbacks
