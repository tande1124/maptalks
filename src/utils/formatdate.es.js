/*
 * @Description: 时间格式化
 * @version: 0.1.0
 * @Author: wsw
 * @Date: 2018-12-25 22:12:22
 * @LastEditors: wsw
 * @LastEditTime: 2019-03-18 15:54:19
 */

function formatDate (date, fmt) {
  // author: meizz
  var zArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds(), // 毫秒
    'z': zArr[date.getDay()] // 周
  }
  if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length)) }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) { fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
  }
  return fmt
}
function toDotNetString (date) {
  var str = `/Date(${date.getTime()}+0800)/`
  return str
}
function convertDotNetString2Date (dateStr) {
  var T, tz, off
  var dobj = dateStr.match(/(\d+)|([+-])|(\d{4})/g)
  T = parseInt(dobj[0])
  tz = dobj[1]
  off = dobj[2]
  if (off) {
    off = parseInt(off.substring(0, 2), 10) * 3600000 + parseInt(off.substring(2), 10) * 600000
    if (tz === '-') off *= -1
  } else {
    off = 0
  }
  return new Date(T)
}
function convertDbDate (date, fmt) {
  if (!date) return ''
  if (typeof date === 'string') {
    date = date.replace(new RegExp(/-/gm), '/')
  }
  let time = new Date(date)
  return formatDate(time, fmt)
}
function convertCurrentDate (fmt) {
  if (!fmt) return ''
  let time = new Date()
  return formatDate(time, fmt)
}
function AddDays (date, value) {
  date.setDate(date.getDate() + value)
  return date
}
function AddMonths (date, value) {
  date.setMonth(date.getMonth() + value)
  return date
}
function AddYears (date, value) {
  date.setFullYear(date.getFullYear() + value)
  return date
}
export default { formatDate, convertDbDate, toDotNetString, convertDotNetString2Date, convertCurrentDate, AddDays, AddMonths, AddYears }
