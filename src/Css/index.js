/**
 * CSS
 * 设置和获取元素的 CSS 相关的属性。
 */

import {
  isUndef,
  isDef,
  isString,
  isArray,
  isPlainObject,
  isFunction
  // isBoolean,
  // removeExtraSpace
} from '../util/index.js'

function getStyles (element) {
  return element && window.getComputedStyle(element, null)
}

// 获取某css属性
function getPropertyValue (element, propertyName) {
  return getStyles(element).getPropertyValue(propertyName)
}

function getPropertyNum (element, propertyName) {
  return getPropertyValue(element, propertyName).replace(/px/, '') * 1
}

// 获取匹配元素集合中的第一个元素的样式属性的值设置每个匹配元素的一个或多个CSS属性。
export function css (propertyName, value) {
  const nodes = this.element
  const firstNode = nodes[0]

  switch (true) {
    // .css( propertyNames )
    case isArray(propertyName) && isUndef(value):
      if (firstNode) {
        const obj = {}
        propertyName.map(name => {
          obj[name] = getPropertyValue(firstNode, name)
        })
        return obj
      }
      break

    // .css( propertyName )
    case isString(propertyName) && isUndef(value):
      return (firstNode && getPropertyValue(firstNode, propertyName)) || this

    // .css( propertyName, function(index, value) )
    case isString(propertyName) && isFunction(value):
      nodes.map((node, index) => {
        const callback = value
        callback(index, getPropertyValue(node, propertyName))
      })
      break

    // .css( propertyName, value )
    case isString(propertyName) && isDef(value):
      nodes.map((node, index) => {
        node.style[propertyName] = value
      })
      break

    // .css( properties )
    case isPlainObject(propertyName) && isUndef(value):
      nodes.map(node => {
        for (const i in propertyName) {
          node.style[i] = propertyName[i]
        }
      })
      break
  }

  return this
}

/**
 * 设置元素width/height
 * @param {string} type width|height
 * @param {Boolean} isPadding 是否计算padding
 * @param {Boolean} isBorder 是否计算border
 */
function _widthOrHeight (isPadding = false, isBorder = false) {
  const isContentBox = css.call(this, 'box-sizing') === 'content-box'
  const originValue = css.call(this, 'height').replace(/px/, '') * 1
  const nodes = this.element
  const firstNode = nodes[0]
  let val = originValue // 最终返回结果
  if (isContentBox) {
    if (isPadding) {
      val += getPropertyNum(firstNode, 'padding-top') + getPropertyNum(firstNode, 'padding-bottom')
    }
    if (isBorder) {
      val += getPropertyNum(firstNode, 'border-top-width') + getPropertyNum(firstNode, 'border-bottom-width')
    }
  } else {
    if (isPadding && !isBorder) {
      val -= getPropertyNum(firstNode, 'border-top-width') + getPropertyNum(firstNode, 'border-bottom-width')
    } else if (!isPadding && !isBorder) {
      val -= getPropertyNum(firstNode, 'padding-top') + getPropertyNum(firstNode, 'padding-bottom')

      val -= getPropertyNum(firstNode, 'border-top-width') + getPropertyNum(firstNode, 'border-bottom-width')
    }
  }

  return val
  // if (isUndef(value)) {
  //   return css.call(this, type)
  // } else {
  //   return css.call(this, type, value)
  // }
}

// 获取匹配元素集合中的第一个元素的当前计算高度值(返回内容高度数值)。设置每一个匹配元素的高度值。
export function height () {
  return _widthOrHeight.call(this, false, false)
}

// 为匹配的元素集合中获取第一个元素的当前计算高度值,包括padding，但是不包括border。
export function innerHeight () {
  return _widthOrHeight.call(this, true, false)
}

// 为匹配的元素集合中获取第一个元素的当前计算宽度值,包括padding，但是不包括border。
export function innerWidth () {}

// 在匹配的元素集合中，获取的第一个元素的当前坐标，坐标相对于文档。 设置匹配的元素集合中每一个元素的坐标， 坐标相对于文档。
export function offset () {}

/**
 * 获取元素集合中第一个元素的当前计算高度值,包括padding，border和选择性的margin。返回一个整数（不包含“px”）表示的值  ，或如果在一个空集合上调用该方法，则会返回 null。
 * @param {Boolean} includeMargin
 */
export function outerHeight (includeMargin) {
  return _widthOrHeight.call(this, true, true)
}

// 获取元素集合中第一个元素的当前计算宽度值,包括padding，border和选择性的margin。（注：返回一个整数（不包含“px”）表示的值，或如果在一个空集合上调用该方法，则会返回 null。）
export function outerWidth () {}

// 获取匹配元素中第一个元素的当前坐标，相对于offset parent的坐标。( 译者注：offset parent指离该元素最近的而且被定位过的祖先元素 )
export function position () {}

// 获取匹配的元素集合中第一个元素的当前水平滚动条的位置。设置每个匹配元素的水平滚动条位置。
export function scrollLeft () {}

// 获取匹配的元素集合中第一个元素的当前垂直滚动条的位置或设置每个匹配元素的垂直滚动条位置。设置每个匹配元素的垂直滚动条位置
export function scrollTop () {}

// 为匹配的元素集合中获取第一个元素的当前计算宽度值。给每个匹配的元素设置CSS宽度。
export function width (value) {}

/**
 *  -----------------知识点补充------------------------
 * 获取元素的css方法，getComputedStyle以及getPropertyValue
 * 元素css.style.xx方法若样式没写获取无效
 * getComputedStyle是一个可以获取当前元素所有最终使用的CSS属性值。返回的是一个CSS样式声明对象([object CSSStyleDeclaration])，只读。
 */
