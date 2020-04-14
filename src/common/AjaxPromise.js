import Promise from './Promise.js'

class AjaxPromise extends Promise {
  done (onFulfilled, onRejected) {
    return this.then(onFulfilled, onRejected)
  }

  fail (onRejected) {
    return this.catch(onRejected)
  }

  always (onFinally) {
    return this.finally(onFinally)
  }
}

export default AjaxPromise
