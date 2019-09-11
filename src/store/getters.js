/*
 * @Description: 公有变量
 * @version: 0.1.0
 * @Author: wsw
 * @LastEditors: wsw
 * @Date: 2019-04-24 15:30:54
 * @LastEditTime: 2019-04-26 13:42:47
 */

export default {
  mapLoaded: state => state.mapLoaded,
  configLoaded: state => state.configLoaded,
  map: state => state.map,
  mapConfig: state => state.mapConfig,
  symbols: state => state.mapConfig.symbols,
  panel: state => state.panel,
  layerTreeConfig: state => state.layerTreeConfig,
  baseServiceUrl: state => state.baseServiceUrl
}
