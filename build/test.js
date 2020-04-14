;(function (window, $) {
  $.ajax({
    data: {
      a: 1,
      b: 2
    },
    accepts: {
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
    },
    success: function (res) {
      console.log('成功返回内容', res)
    },
    error: function (e) {
      console.log('错误', e)
    }
  }).done(data => {
  })
})(window, window.$)
