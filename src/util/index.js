const _toString = Object.prototype.toString

export function isString (val) {
  return typeof val === 'string'
}

export function isFunction (val) {
  return typeof val === 'function'
}

export function isUndef (val) {
  return val === undefined || val === null
}

export function isDef (val) {
  return val !== undefined && val !== null
}

export function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

export function isBoolean (obj) {
  return _toString.call(obj) === '[object Boolean]'
}

export function isArray (obj) {
  return _toString.call(obj) === '[object Array]'
}

// 删除字符串多余空格
export function removeExtraSpace (val) {
  return isString(val) ? val.replace(/[' ']+/g, ' ') : ''
}
