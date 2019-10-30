(function (window, $) {
  const p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('aaa')
    }, 2000)
  }).then(function (res) {
    console.log('then1', res)
  }).then(function (res) {
    console.log('then2', res)
  })
})(window, window.$)
