import { inject } from 'vue'
/**
 * 获取assets/images下面目录， vite
 *
 * @param {*} url 图片地址
 * @returns
 */
export const getAssetsFile = (url) => {
  return new URL(`../assets/images/${url}`, import.meta.url).href
}
export const px2vw = (num) => {
  return (num / 7.5).toFixed(6)
}

export const px2vwUnit = (num) => {
  return (num / 7.5).toFixed(6) + 'vw'
}

export const vw2px = (num) => {
  return document.documentElement.clientWidth * (num / 750)
}
export const vw2pxUnit = (num) => {
  return document.documentElement.clientWidth * (num / 750) + 'px'
}

/**
 * 获得追加statusBarHeight高度之后的值
 * @param {*} num 输入的值
 */
export const superadditionStatusBarHeight = (num) => {
  let statusBarHeight = (inject('statusBarHeight') as any) || Number
  let tmpStatusBarHeight = vw2px(statusBarHeight.value)
  if (typeof num === 'number') {
    //没带单位当转换前的px处理
    num = vw2px(num)
    return `${num + tmpStatusBarHeight}px`
  }
  if (num.includes('px')) {
    //转化后的px
    num = num.replace(/px/g, '')
    return +num + tmpStatusBarHeight + 'px'
  } else if (num.includes('vw')) {
    //转化后的vw
    num = num.replace(/vw/g, '')
    num = document.documentElement.clientWidth * (num / 100)
    return `${num + tmpStatusBarHeight}px`
  } else {
    //其他情况直接返回
    return num
  }
}
// 防抖
export const debounce = (fn, delay) => {
  let timerId
  return (...args) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
// 转换时间格式
export const timeFilter = (value) => {
  if (value) value = value.replace(/-/g, '/')
  // if (value) value = value.replace(/\-/g, '/');
  var v = value
  var date = new Date(v)
  var today = new Date()
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  var M = date.getMonth() + 1 + '月'
  var D = date.getDate() + '日'
  var Y = date.getFullYear() + '年'
  if (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  ) {
    return h + m
  }
  if (
    date.getDate() === today.getDate() - 1 &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  ) {
    return '昨天'
  }
  if (date.getFullYear() === today.getFullYear()) {
    return M + D
  }
  return Y + M + D
}
export const parseTime = (time, fm) => {
  // 解析时间  time: 时间戳或者实践对象 fm: 格式 默认是{y}-{m}-{d} {h}:{i}:{s}
  if (!time) {
    return null
  }
  const format = fm || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}
/**
 * 是否是手机号
 * @param {*} $poneInput
 * @returns
 */
export const isMobile = (val) => {
  if (!val) return false
  else return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(val)
}
/**
 * 深拷贝
 */
export const deepClone = (source) => {
  if (source === null || typeof source !== 'object') {
    // 基本类型或 null，直接返回
    return source
  }

  if (Array.isArray(source)) {
    // 处理数组
    const newArray = []
    for (let i = 0; i < source.length; i++) {
      newArray[i] = deepClone(source[i])
    }
    return newArray
  }

  // 处理对象
  const newObj = {}
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      newObj[key] = deepClone(source[key])
    }
  }

  return newObj
}
// px转为数字
export const pxToNum = (val) => {
  if (typeof val === 'string') {
    return parseFloat(val.replace('px', ''))
  }
  return val
}
//保留n位小数并格式化输出（不足的部分补0）
export const formatFloat = (value, n) => {
  var f = Math.round(value * Math.pow(10, n)) / Math.pow(10, n)
  var s = f.toString()
  var rs = s.indexOf('.')
  if (rs < 0) {
    s += '.'
  }
  for (var i = s.length - s.indexOf('.'); i <= n; i++) {
    s += '0'
  }
  return s
}
// 格式化成小数点后两位, 用于input格式化 :formatter="formatNumber"
export const formatNumber = (value) => {
  // 使用正则表达式保留两位小数
  const reg = /^(\d+(?:\.\d{0,2})?)?.*$/
  return String(value).replace(reg, '$1')
}
// 格式化成整数
export const formatNumber2 = (value) => {
  // 使用正则表达式保留整数部分
  const reg = /^(\d*)?.*$/
  return String(value).replace(reg, '$1')
}
// 格式化成小数点后四位, 用于input格式化 :formatter="formatNumber"
export const formatNumber3 = (value) => {
  // 使用正则表达式保留两位小数
  const reg = /^(\d+(?:\.\d{0,4})?)?.*$/
  return String(value).replace(reg, '$1')
}
/**
 * 是否为空
 * @param {*} data
 * @returns
 */
export const isEmpty = function (data) {
  if (
    data == undefined ||
    data == null ||
    data == '' ||
    (typeof data == 'string' && data.trim() == '')
  ) {
    return true
  } else {
    return false
  }
}
//金额格式化小数点后2位
export const moneyFormat = function (price) {
  return Math.round(price * 100) / 100
}
