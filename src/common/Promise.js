import { isFunction } from '../util/index.js'

const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

// 第一版实现了单个then和reject函数的执行，对于多个then的时候并没有存储一个回调队列

function Promise (fn) {
  this._status = PENDING // 状态
  this._value = undefined // then的值
  this._fulfilledQuene = [] // resolved状态的回调函数队列
  this._rejectedQuene = [] // resolved状态的回调函数队列

  /**
   * @param {any} val 包括可能是Promise，增加判断
   */
  this.resolve = (val) => {
    if (this._status !== PENDING) return

    this._value = val

    const runFullfilled = (data) => {
      while (this._fulfilledQuene.length) {
        const callback = this._fulfilledQuene.shift()
        callback(data)
      }
    }

    const runRejected = (e) => {
      while (this._rejectedQuene.length) {
        const callback = this._rejectedQuene.shift()
        callback(e)
      }
    }

    /**
     * 如果resolve的参数为Promise对象，则必须等待该Promise对象状态改变后,
     * 当前Promsie的状态才会改变，且状态取决于参数Promsie对象的状态
     */
    if (val instanceof Promise) {
      val.then((data) => {
        this._status = FULFILLED
        this._value = data
        runFullfilled(data)
      }).catch((e) => {
        this._status = REJECTED
        this._value = e
        runRejected(e)
      })
    } else {
      this._status = FULFILLED
      this._value = val
      runFullfilled(this._value)
    }
  }

  this.reject = (e) => {
    if (this._status !== PENDING) return

    this._status = REJECTED
    this._value = e

    while (this._rejectedQuene.length) {
      this._rejectedQuene.shift()(e)
    }
  }

  /**
  * then 返回一个新的 Promise 对象，并且需要将回调函数加入到执行队列中
  * @param {function} onFulfilled resolved状态的回调函数
  * @param {function} onRejected rejected状态的回调函数
  */
  this.then = (onFulfilled, onRejected) => {
    // eslint-disable-next-line promise/param-names
    return new Promise((onFulfilledNext, onRejectedNext) => {
      /**
       * 注意：
       * 返回的新的 Promise 对象的状态依赖于  当前 then 方法  回调函数执行的情况以及返回值
       */
      const fulfilled = value => {
        try {
          if (!isFunction(onFulfilled)) {
            onFulfilledNext(value)
          } else {
            const res = onFulfilled(value)
            if (res instanceof Promise) {
              // 如果当前回调函数返回Promise对象，必须等待其状态改变后在执行下一个回调
              res.then(onFulfilledNext, onRejectedNext)
            } else {
              // 否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
              onFulfilledNext(res)
            }
          }
        } catch (e) {
          onRejectedNext(e)
        }
      }

      // 逻辑同上
      const rejected = error => {
        try {
          if (!isFunction(onRejected)) {
            onRejectedNext(error)
          } else {
            const res = onRejected(error)
            if (res instanceof Promise) {
              res.then(onFulfilledNext, onRejectedNext)
            } else {
              onFulfilledNext(res)
            }
          }
        } catch (e) {
          onRejectedNext(e)
        }
      }

      // 增加状态判断
      switch (this._status) {
        case PENDING:
          onFulfilled && this._fulfilledQuene.push(fulfilled)
          onRejected && this._rejectedQuene.push(rejected)
          break
        case FULFILLED:
          fulfilled(this._value)
          break
        case REJECTED:
          rejected(this._value)
          break
      }
    })
  }

  /**
   * @param {function} onRejected rejected状态的回调函数
   */
  this.catch = (onRejected) => {
    // onRejected && this._rejectedQuene.push(onRejected) =>可转换为下面写法
    return this.then(undefined, onRejected)
  }

  this.finally = (onFinally) => {
    return this.then(onFinally, onFinally)
  }

  // 初始化
  if (!isFunction(fn)) {
    throw new Error('Promise must accept a function as a parameter')
  }
  try {
    fn && fn(this.resolve.bind(this), this.reject.bind(this))
  } catch (e) {
    this.reject(e)
  }

  return this
}

export default Promise
