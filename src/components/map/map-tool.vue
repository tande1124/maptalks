<!--
 * @Description: 地图工具栏
 * @version: 0.1.0
 * @Author: wsw
 * @LastEditors: tande
 * @Date: 2019-04-26 10:47:16
 * @LastEditTime: 2019-09-12 11:38:21
 -->

<template>
  <div class="tool-container">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">地图</template>
        <el-menu-item index="mapChange-1">矢量</el-menu-item>
        <el-menu-item index="mapChange-3">影像</el-menu-item>
        <el-menu-item index="mapChange-5">地形</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">工具</template>
        <el-menu-item index="change-1">测量距离</el-menu-item>
        <el-menu-item index="change-2">测量面积</el-menu-item>
        <el-menu-item index="change-5">标绘</el-menu-item>
        <el-menu-item index="change-6">专题制图</el-menu-item>
      </el-submenu>
      <el-menu-item index="change-3">清洁</el-menu-item>
      <el-menu-item index="change-4">全图</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import Vue from 'vue'
import { Menu, Submenu, MenuItem } from 'element-ui'
import { mapGetters } from 'vuex'
import maptalks from '#/assets/maptalks/maptalks-ext.es.js'
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)

let distanceTool, areaTool
export default {
  computed: {
    ...mapGetters(['map', 'panel'])
  },
  data () {
    return {
      activeIndex: '1',
      isInit: false
    }
  },
  methods: {
    handleSelect (key) {
      const [method, tag] = key.split('-')
      this[method](tag)
    },
    change (index) {
      !this.isInit && this.init()
      switch (index) {
        case '1':
          console.log('distanceTool: ')
          distanceTool.enable()
          break
        case '2':
          areaTool.enable()
          break
        case '3':
          this.map.clear()
          break
        case '4':
          this.map.getInstance().setView(this.map.getInstance().getViewHistory()[0])
          break
        case '5':
          this.panel.getPlotUi().open()
          break
        case '6':
          this.panel.getTopic().open()
      }
    },
    mapChange (tag) {
      var _layers = this.map.getBaseLayers()
      if (_layers instanceof Array && _layers.length === 6) {
        for (let index = 1; index < _layers.length; index = index + 2) {
          if (index === tag) {
            continue
          } else {
            _layers[index - 1].config('visible', false)
            _layers[index].config('visible', false)
          }
        }
        _layers[tag - 1].config('visible', true)
        _layers[tag].config('visible', true)
      }
    },
    init () {
      this.isInit = true
      let _map = this.map.getInstance()
      distanceTool = new maptalks.DistanceTool({
        symbol: {
          lineColor: '#34495e',
          lineWidth: 2
        },
        vertexSymbol: {
          markerType: 'ellipse',
          markerFill: '#1bbc9b',
          markerLineColor: '#000',
          markerLineWidth: 3,
          markerWidth: 10,
          markerHeight: 10
        },

        labelOptions: {
          textSymbol: {
            textFaceName: 'monospace',
            textFill: '#fff',
            textLineSpacing: 1,
            textHorizontalAlignment: 'right',
            textDx: 15,
            markerLineColor: '#b4b3b3',
            markerFill: '#000'
          },
          boxStyle: {
            padding: [6, 2],
            symbol: {
              markerType: 'square',
              markerFill: '#000',
              markerFillOpacity: 0.9,
              markerLineColor: '#b4b3b3'
            }
          }
        },
        clearButtonSymbol: [
          {
            markerType: 'square',
            markerFill: '#000',
            markerLineColor: '#b4b3b3',
            markerLineWidth: 2,
            markerWidth: 15,
            markerHeight: 15,
            markerDx: 20
          },
          {
            markerType: 'x',
            markerWidth: 10,
            markerHeight: 10,
            markerLineColor: '#fff',
            markerDx: 20
          }
        ],
        language: 'zh-CN'
      }).addTo(_map).disable()

      areaTool = new maptalks.AreaTool({
        symbol: {
          lineColor: '#1bbc9b',
          lineWidth: 2,
          polygonFill: '#fff',
          polygonOpacity: 0.3
        },
        vertexSymbol: {
          markerType: 'ellipse',
          markerFill: '#34495e',
          markerLineColor: '#1bbc9b',
          markerLineWidth: 3,
          markerWidth: 10,
          markerHeight: 10
        },
        labelOptions: {
          textSymbol: {
            textFaceName: 'monospace',
            textFill: '#fff',
            textLineSpacing: 1,
            textHorizontalAlignment: 'right',
            textDx: 15
          },
          boxStyle: {
            padding: [6, 2],
            symbol: {
              markerType: 'square',
              markerFill: '#000',
              markerFillOpacity: 0.9,
              markerLineColor: '#b4b3b3'
            }
          }
        },
        clearButtonSymbol: [
          {
            markerType: 'square',
            markerFill: '#000',
            markerLineColor: '#b4b3b3',
            markerLineWidth: 2,
            markerWidth: 15,
            markerHeight: 15,
            markerDx: 22
          },
          {
            markerType: 'x',
            markerWidth: 10,
            markerHeight: 10,
            markerLineColor: '#fff',
            markerDx: 22
          }
        ],
        language: 'zh-CN'
      }).addTo(_map).disable()
      distanceTool.on('drawend', _ => {
        distanceTool.disable()
      })
      areaTool.on('drawend', _ => {
        areaTool.disable()
      })
    }
  }
}
</script>
<style scoped>
.tool-container {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
