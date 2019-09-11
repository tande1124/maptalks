/*
 * @Description: vuex 方法
 * @version: 0.1.0
 * @Author: wsw
 * @LastEditors: wsw
 * @Date: 2019-04-24 15:30:54
 * @LastEditTime: 2019-04-24 15:54:36
 */

import request from './request'
import common from '../utils/common.es'

export default {
  // 获取配置文件
  async loadConfig ({ state }) {
    let urls = [
      './static/config/map.config.js',
      './static/config/symbol.config.js',
      './static/config/layer.tree.config.js'
    ]
    let res = await request.requestAll(urls)
    let arr = []
    res.forEach(element => {
      arr.push(element.data)
    })
    return arr
  },
  // 获取显示模板
  async getTemplate ({ state }, templateName) {
    let url = `./popwindow/${templateName}.html`
    let data = await request.request(url)
    return data
  },
  // 通用数据获取方法
  async queryParamTable ({ state }, { tag, param }) {
    let methodName = tag // 'QueryTable'
    let url = `${state.config.services.baseServiceUrl}/DataService.svc/` + methodName
    // 拼接URL
    let data = await request.request(url, {
      data: param,
      method: 'post',
      withCredentials: false
    })
    let res = common.convertTable2objects(data[methodName + 'Result'])
    return res || []
  }
}
