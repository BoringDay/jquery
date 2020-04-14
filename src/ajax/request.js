import AjaxPromise from '../common/AjaxPromise.js'
import { formatQueryString } from '../util/index.js'

let count = 10000
const head = document.getElementsByTagName('head')
const headEl = head && head[0]

// 插入或删除script
const insertOrRemoveScript = (type, script) => {
  if (!headEl) return

  if (type === 'insert') headEl.appendChild(script)
  else headEl.removeChild(script)
}

export const scriptAjax = (url, success) => {
  return new AjaxPromise((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url

    // 只有把script当做dom节点插进去时，里面的代码才可以正常执行
    insertOrRemoveScript('insert', script)

    script.onload = (e) => {
      success && success()
      reject(e)
    }

    return script
  })
}

// jsonp请求
export const jsonpAjax = (settings) => {
  const st = settings
  const jsonpMethod = st.jsonpCallback || `jsonp_${+new Date()}_${++count}`
  const url = st.url + `${st.url.indexOf('?') >= 0 ? '&' : '?'}callback=${jsonpMethod}&${formatQueryString(st.data)}`
  const script = scriptAjax(url)

  return new AjaxPromise((resolve, reject) => {
    window[jsonpMethod] = function (data) {
      st.success && st.success(data)
      resolve(data)

      // 删除script
      insertOrRemoveScript('remove', script)
    }

    script.onerror = (e) => {
      st.error && st.error(e)
      reject(e)
    }
  })
}

// XMLHttpRequest请求
export const xhrRequestAjax = (settings) => {
  const st = settings
  const xhr = new window.XMLHttpRequest() // 新建XMLHttpRequest对象

  st.type = ['GET', 'POST', 'PUT', 'DELETE'].includes(st.type) ? st.type : 'GET'

  // 处理请求参数
  if (st.type === 'GET') {
    const url = st.url + `${st.url.indexOf('?') >= 0 ? '&' : '?'}${formatQueryString(st.data)}`
    st.url = url
  }

  // xhrFields:设定原生的 XHR对象
  Object.keys(st.xhrFields).forEach(i => {
    xhr[i] = st.xhrFields[i]
  })

  st.beforeSend && st.beforeSend(xhr)

  st.timeout && (xhr.timeout = st.timeout)
  return new AjaxPromise((resolve, reject) => {
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        // 判断响应结果:
        if (xhr.status === 200) {
          st.success && st.success(xhr.response)
          resolve(xhr.response)
        } else {
          st.error && st.error(xhr)
          reject(xhr)
        }

        // 触发传入statusCode回调
        Object.keys(st.statusCode).forEach(i => {
          if (xhr.status === i) {
            st.statusCode[i]()
          }
        })

        st.complete && st.complete(xhr)
      }
    }

    xhr.ontimeout = (e) => {
      st.error && st.error(xhr)
      reject(xhr)
    }

    // 发送请求:
    xhr.open(st.type, st.url, st.async)

    Object.keys(st.accepts).forEach(i => {
      xhr.setRequestHeader(i, st.accepts[i])
    })

    xhr.send()
  })
}

/**
 * fetch 请求
 * Fetch API 提供了一个 JavaScript接口，用于访问和操纵HTTP管道的部分，例如请求和响应。它还提供了一个全局 fetch()方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源。这种功能以前是使用  XMLHttpRequest实现的。
 */
export const fetchRequestAjax = (settings) => {
  const st = settings
  st.type = ['GET', 'POST', 'PUT', 'DELETE'].includes(st.type) ? st.type : 'GET'

  const option = {
    method: st.type,
    cache: st.cache ? 'force-cache' : 'no-cache',
    mode: 'same-origin'
  }

  // 处理请求参数
  if (st.type === 'GET') {
    const url = st.url + `${st.url.indexOf('?') >= 0 ? '&' : '?'}${formatQueryString(st.data)}`
    st.url = url
  } else {
    option.body = JSON.stringify(st.data)
  }

  // 处理header
  Object.keys(st.accepts).forEach(i => {
    st.headers[i] = st.accepts[i]
  })

  option.headers = st.headers

  return new AjaxPromise((resolve, reject) => {
    window.fetch(st.url, option)
      .then((response) => {
        st.success && st.success(response)
        resolve(response.json())
      })
      .catch((e) => {
        st.error && st.error(e)
        reject(e)
      })
  })
}
