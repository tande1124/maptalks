/*
 * @Description: 工具类
 * @version: 0.1.0
 * @Author: wsw
 * @Date: 2018-12-25 22:12:22
 * @LastEditors: wsw
 * @LastEditTime: 2019-03-18 15:46:36
 */

export default {
  assert (condition, msg) {
    if (!condition) {
      throw new Error(`[GIS] ${msg}`)
    }
  },
  mixin (source, target) {
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        target[prop] = source[prop]
      }
    }
  },
  uuid (len = 32, radix = 16) {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
      ''
    )
    let uuid = []
    let i
    radix = radix || chars.length
    if (len) {
      for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)]
    } else {
      let r
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
      uuid[14] = '4'
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | (Math.random() * 16)
          uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r]
        }
      }
    }
    return uuid.join('')
  },
  meter2degree (meter) {
    return meter * 0.001 * 0.0089932202929999989
  },
  degree2meter (degree) {
    return degree * 1000 / 0.0089932202929999989
  },
  convertTableArr2objects (table) {
    if (!table) {
      return null
    }
    var ret = []
    for (let i = 0; i < table.length; i++) {
      let r = this.convertTable2objects(table[i])
      ret = ret.concat(r || [])
    }
    return ret
  },
  convertTable2objects (table) {
    if (!table) {
      return null
    }
    var ret = []
    for (let i = 0; i < table.Values.length; i++) {
      var item = this.convertRow2object(table, i)
      ret.push(item)
    }
    return ret
  },
  convertRow2object (table, i) {
    var property = {}
    for (var j = 0; j < table.Columns.length; j++) {
      var val = table.Values[i][j]
      if (table.ColumnsType[j] === 'number' || table.ColumnsType[j] === 'double') {
        if (val === '') {
          val = 0
        } else {
          val = parseFloat(val)
        }
      }
      property[table.Columns[j]] = val
    }
    return property
  },
  extendTable (tab) {
    /*
    * 将WCFtable转换为object
    */
    tab.objects = []
    for (var i = 0; i < tab.Values.length; i++) {
      var vals = tab.Values[i]
      var row = {}
      for (var j = 0; j < tab.Columns.length; j++) {
        var col = tab.Columns[j]
        row[col] = vals[j]
      }
      tab.objects.push(row)
    }
    return tab
  },
  trim (str) {
    return ('' + str).replace(/(^[\s\n\t]+|[\s\n\t]+$)/g, '')
  },
  renderTemplate (template, context) {
    // 被转义的的分隔符 { 和 } 不被渲染
    // 分隔符与变量之间允许有空白字符
    /* eslint-disable*/
    let tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g
     /* eslint-enable */
    return template.replace(tokenReg, function (word, slash1, token, slash2) {
      // 如果有转义的\{或\}替换转义字符
      if (slash1 || slash2) {
        return word.replace('\\', '')
      }
      // 切割 token ,实现级联的变量也可以展开
      let variables = token.replace(/\s/g, '').split('.')
      let currentObject = context
      let i, length, variable

      for (i = 0, length = variables.length; i < length; ++i) {
        variable = variables[i]
        currentObject = currentObject[variable]
        // 如果当前索引的对象不存在，则直接返回空字符串。
        if (currentObject === undefined || currentObject === null) return ''
      }
      return currentObject
    })
  },
  isType (obj, name) {
    // name: 'String', 'Object', 'Number', 'Array','Undefined', 'Function', 'Null', 'Symbol'
    return Object.prototype.toString.call(obj) === '[object ' + name + ']'
  }
}
