/**
 * DOM 属性
 * 获取和设置页面元素的 DOM 属性。
 **/

import { isUndef, isDef, isString, isPlainObject, isFunction, isBoolean, removeExtraSpace } from '../util/index.js'

/**
 * 增加or删除类名
 * @param {string} type {add:增加,remove:删除}
 * @param {string|function} className 为每个匹配元素所要增加/删除的一个或多个样式名。
 */
function _addOrRemoveClass (type, className) {
  const nodes = this.element
  switch (true) {
    case isString(className):
      // eslint-disable-next-line no-case-declarations
      const classes = removeExtraSpace(className).split(' ')
      nodes.forEach(node => {
        classes.map(item => {
          node.classList[type](item)
        })
      })
      break
    case isFunction(className):
      nodes.forEach((node, nodeIndex) => {
        node.classList[type](className(nodeIndex))
      })
      break
  }

  return this
}

// 获取匹配的元素集合中的第一个元素的属性的值。设置每一个匹配元素的一个或多个属性。
export function attr (attributeName, value) {
  const nodes = this.element

  switch (true) {
    // .attr( attributeName )
    case isString(attributeName) && isUndef(value):
      nodes[0] && nodes[0].getAttribute(attributeName)
      break
      // .attr( attributeName, value )
    case isString(attributeName) && isDef(value):
      nodes.forEach(node => {
        node.setAttribute(attributeName, value)
      })
      break
      // .attr( attributes )
    case isPlainObject(attributeName) && isUndef(value):
      nodes.forEach(node => {
        Object.keys(attributeName).forEach((item, i) => {
          node.setAttribute(item, attributeName[item])
        })
      })
      break
      // .attr( attributeName, function(index, attr) )
    case isString(attributeName) && isFunction(value):
      nodes.forEach((node, nodeIndex) => {
        node.setAttribute(attributeName, value(nodeIndex, attributeName))
      })

      break
  }

  return this
}

// 确定任何一个匹配元素是否有被分配给定的（样式）类。
export function hasClass (className) {
  const nodes = this.element
  return nodes.every(node => {
    return node.classList.contains(className)
  })
}

/**
 * 获取集合中第一个匹配元素的HTML内容 或 设置每一个匹配元素的html内容。
 * @param {undefined|string|function} htmlString
 */
export function html (htmlString) {
  const nodes = this.element

  switch (true) {
    // .html( htmlString )
    case isString(htmlString):
      nodes.forEach(node => {
        node.innerHTML = htmlString
      })
      break
      // .html( function(index, oldhtml) )
    case isFunction(htmlString):
      nodes.forEach((node, nodeIndex) => {
        htmlString.call(node, nodeIndex, node.innerHTML)
      })
      break
      // .html()
    case isUndef(htmlString):
      return nodes[0] ? nodes[0].innerHTML : this
    default:
      break
  }

  return this
}

// 获取匹配的元素集中第一个元素的属性（property）值为匹配的元素设置一个或多个属性
export function prop (propertyName, value) {
  const nodes = this.element

  switch (true) {
    // .prop( propertyName )
    case isString(propertyName) && isUndef(value):
      return nodes[0] && nodes[0][propertyName]
      // .prop( propertyName, value )
    case isString(propertyName) && isDef(value):
      nodes.forEach(node => {
        node[propertyName](value)
      })
      break
      // .prop( attributes )
    case isPlainObject(propertyName) && isUndef(value):
      nodes.forEach(node => {
        Object.keys(propertyName).forEach((item, i) => {
          node[item] = propertyName[item]
        })
      })
      break
      // .prop( propertyName, function(index, attr) )
    case isString(propertyName) && isFunction(value):
      nodes.forEach((node, nodeIndex) => {
        const flag = value(nodeIndex, node[propertyName])
        flag && (node[propertyName] = flag)
      })

      break
  }

  return this
}

// 为匹配的元素集合中的每个元素中移除一个属性（attribute）。
export function removeAttr (attributeName) {
  const nodes = this.element

  isString(attributeName) &&
      nodes.forEach(node => {
        node.removeAttribute(attributeName)
      })

  return this
}

// 为每个匹配的元素添加指定的样式类名
export function addClass (className) {
  return _addOrRemoveClass.call(this, 'add', className)
}

// 移除集合中每个匹配元素上一个，多个或全部样式。
export function removeClass (className) {
  return _addOrRemoveClass.call(this, 'remove', className)
}

// 为集合中匹配的元素删除一个属性（property）。
export function removeProp (propertyName) {
  const nodes = this.element
  nodes.forEach(node => {
    delete node[propertyName]
  })

  return this
}

// 在匹配的元素集合中的每个元素上添加或删除一个或多个样式类,取决于这个样式类是否存在或值切换属性。即：如果存在（不存在）就删除（添加）一个类。
export function toggleClass (className, switchFlag) {
  const nodes = this.element
  let classes

  switch (true) {
    // .toggleClass( className )
    case isString(className) && isUndef(switchFlag):
      classes = removeExtraSpace(className).split(' ')
      nodes.forEach((node, nodeIndex) => {
        classes.map(item => {
          node.classList.contains(item) ? node.classList.remove(item) : node.classList.add(item)
        })
      })
      break
      // .toggleClass( className, switch )
    case isString(className) && isDef(switchFlag):
      classes = removeExtraSpace(className).split(' ')
      nodes.forEach((node) => {
        classes.map(item => {
          switchFlag ? node.classList.remove(item) : node.classList.add(item)
        })
      })
      break
      // .toggleClass( function(index, class, switch) [, switch ] )
    case isFunction(className) && isUndef(switchFlag):
      nodes.forEach((node, nodeIndex) => {
        classes.map(item => {
          switchFlag = className(nodeIndex)
          switchFlag ? node.classList.remove(item) : node.classList.add(item)
        })
      })
      break
      // .toggleClass( [switch ] )
    case (isBoolean(className) || isUndef(className)) && isUndef(switchFlag):
      nodes.forEach((node, nodeIndex) => {
        if (isBoolean(className)) {
          switchFlag = className
        }
      })
      break
  }
  return this
}

// 获取匹配的元素集合中第一个元素的当前值。设置匹配的元素集合中每个元素的值。
export function val (value) {
  const nodes = this.element

  switch (true) {
    case isUndef(value):
      return nodes[0] && nodes[0].value
    case isFunction(value):
      nodes.forEach((node, nodeIndex) => {
        node.value = value(nodeIndex, node.value)
      })
      break
    default:
      nodes.forEach(node => {
        node.value = value
      })
      break
  }
  return this
}

// call,apply 传入执行this的时候是用在函数  执行 时候的
// bind 是传一个类似回调函数是bind的
