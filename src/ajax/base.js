import initData from './setting.js'
import Promise from '../common/Promise.js'
import { formatQueryString } from '../util/index.js'

/**
 * Ajax 底层接口
 */

/**
 * 执行一个异步的HTTP（Ajax）的请求。
 * @param {String} url 一个用来包含发送请求的URL字符串。
 * @param {Object} settings 一个以"{键:值}"组成的AJAX 请求设置。所有选项都是可选的
*/
export const ajax = (url, settings) => {
  const xhr = new window.XMLHttpRequest() // 新建XMLHttpRequest对象
  const st = Object.assign(initData, settings || {}) // 合并传入参数

  st.type = !['GET', 'POST', 'PUT', 'DELETE'].includes(st.type) || 'GET'
  st.beforeSend && st.beforeSend(xhr)

  //
  Object.keys(st.xhrFields).forEach(i => {
    if (xhr.status === i) {
      st.statusCode[i]()
    }
  })

  st.timeout && (xhr.timeout = st.timeout)
  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        // 判断响应结果:
        if (xhr.status === 200) {
          st.success && st.success(xhr.response)
          resolve()
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

    xhr.ontimeout = function (e) {
      console.log('超时了')
      st.error && st.error(xhr)
      reject(xhr)
    }

    // 发送请求:
    xhr.open(st.type, url || st.url, st.async)

    Object.keys(st.accepts).forEach(i => {
      xhr.setRequestHeader(i, st.accepts)
    })

    xhr.send()
  })
}

// 在每个请求之前被发送和$.ajax()处理它们前处理，设置自定义Ajax选项或修改现有选项。
export const ajaxPrefilter = () => {

}

// 为以后要用到的Ajax请求设置默认的值
export const ajaxSetup = () => {

}

// 创建一个对象，用于处理Ajax数据的实际传输。
export const ajaxTransport = () => {

}

ajax('', {
  data: {
    appId: 'Xh',
    yyuid: 50043243
  },
  xhrFields: {
    withCredentials: true
  },
  accepts: {
    'Content-Type': 'application/javascript'
  },
  success: function (res) {
    console.log('成功返回内容', res)
  },
  error: function (e) {
    console.log('错误', e)
  }
}).then(() => {
  console.log('then')
})

/**
 *  -----------------知识点补充------------------------
 * XMLHttpRequest
 * request.setRequestHeader是在request.open 和send之间调用的
 */
