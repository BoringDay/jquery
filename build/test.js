(function (window, $) {
  console.log($('.test')
    .html('aaaa')
    .html(function (index, oldhtml) {
      console.log($(this))
      console.log(index, oldhtml)
    })
    .addClass('addClass addClass2')
    .addClass(function (index) {
      return 'addClassDiyItem' + index
    })
    .attr({
      'data-aa': 1,
      bb: 2
    }).html())

  $('.input').val(function (index, value) {
    return value + ' ' + 2
  })

  function a () {
    console.log('a')
  }
  function b (arg1, arg2, arg3) {
    console.log('b', arg1, arg2, arg3)
    return false
  }
  function c () {
    console.log('c')
  }

  console.log('---------test callbacks------------')
  var callbacks = $.Callbacks()
  callbacks.add(a)
  callbacks.add(a)
  callbacks.fire(1, 2, 3)
  console.log('=============')
  callbacks.add(b)
  callbacks.add(c)
  callbacks.remove([a, b])
  callbacks.fire(1, 2, 3)
})(window, window.$)
