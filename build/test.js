(function (window, $) {
  console.log($('.test')
    .html('aaaa')
    .html(function (index, oldhtml) {
      console.log($(this))
      console.log(index, oldhtml)
    })
    .addClass("addClass").
    .addClass(index => {
      return 'addClassDiyItem' + index
    })
    .attr({
      'data-aa': 1,
      bb: 2
    }).html())

  $('.input').val(function (index, value) {
    return value + ' ' + 2
  })
})(window, window.$)
