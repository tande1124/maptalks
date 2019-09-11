/*
 * @Description: 变量操作
 * @version: 0.1.0
 * @Author: wsw
 * @LastEditors: wsw
 * @Date: 2019-04-24 15:30:54
 * @LastEditTime: 2019-04-26 13:43:06
 */
export default {
  setConfigLoaded (state, data) {
    state.configLoaded = data
  },
  setMapLoaded (state, data) {
    state.mapLoaded = data
  },
  setMap (state, data) {
    state.map = data
  },
  setMapConfig (state, data) {
    state.mapConfig = data
  },
  setLayerTreeConfig (state, data) {
    state.layerTreeConfig = data
  },
  setPanel (state, data) {
    state.panel = data
  },
  setBaseServiceUrl (state, data) {
    state.baseServiceUrl = data
  }
}
