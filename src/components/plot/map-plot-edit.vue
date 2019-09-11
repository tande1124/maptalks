<!-- 标绘编辑面板 -->
<template>
  <map-drag :fixed="false" class="detail-position" :style="styleP" v-show="isShow">
    <div class="detail-dialog">
      <header class="title clip">
        编辑面板
        <span class="close" @click="close">x</span>
      </header>
      <main>
        <div class="l-h" v-show="item.type!=='label'">
          <label>线宽：</label>
          <el-input-number v-model="numSize" @change="handleSizeChange" :min="1" :max="10" size="small"></el-input-number>
        </div>
        <div class="l-h" v-show="item.type!=='label'">
          <label>线颜色：</label>
          <el-color-picker v-model="colorLine" @change="handleColorLineChange"></el-color-picker>
        </div>
        <div class="l-h" v-show="item.type==='label'">
          <label>字体大小：</label>
          <el-input-number v-model="fontSize" @change="handleFontSizeChange" :min="12" :max="30" size="small"></el-input-number>
        </div>
        <div class="l-h" v-show="item.type==='label'">
          <label>字体颜色：</label>
          <el-color-picker v-model="fontColor" @change="handleFontColorChange"></el-color-picker>
        </div>
        <div class="l-h" v-show="item.type==='label'">
          <label>字体背景：</label>
          <el-color-picker v-model="fontFrameColor" @change="handleFontFrameColorChange"></el-color-picker>
        </div>
        <div class="l-h" v-show="item.type==='polygon'">
          <label>填充颜色：</label>
          <el-color-picker v-model="colorPolygon" @change="handleColorPolygonChange"></el-color-picker>
        </div>
        <div class="l-h" v-show="item.type==='polygon'">
          <label>填充透明度：</label>
          <el-input-number v-model="alphaSize" @change="handleAlphaChange" :min="0.1" :max="1.0"  :precision="1" :step="0.1" size="small"></el-input-number>
        </div>
      </main>
    </div>
  </map-drag>
</template>

<script>
import MapDrag from '@/components/map/map-drag.vue'
import Vue from 'vue'
import {
  InputNumber,
  ColorPicker,
  Button
} from 'element-ui'
Vue.use(InputNumber)
Vue.use(ColorPicker)
Vue.use(Button)

let _item = null
export default {
  components: {
    MapDrag
  },
  methods: {
    open (item) {
      _item = item
      this.isShow = true
      let xy = item.xy
      this.styleP = {
        top: `${xy.y}px`,
        left: `${xy.x}px`
      }
      console.log('it:22222 ')
    },
    close () {
      this.isShow = false
    },
    setSymbol (geo, symbol) {
      let oldSymbol = geo.getSymbol()
      let newSymbol = { ...oldSymbol, ...symbol }
      geo.setSymbol(newSymbol)
    },
    callback (type, value) {
      let symbol = {}
      switch (type) {
        case 'lineSize':
          symbol = {
            lineWidth: value
          }
          break
        case 'lineColor':
          symbol = {
            lineColor: value
          }
          break
        case 'polygonAlpha':
          symbol = {
            polygonOpacity: value
          }
          break
        case 'polygonColor':
          symbol = {
            polygonFill: value
          }
          break
        case 'fontColor':
          symbol = {
            textFill: value
          }
          break
        case 'fontFrameColor':
          symbol = {
            markerFill: value
          }
          break
        case 'fontSize':
          symbol = {
            textSize: value
          }
          break
      }
      this.setSymbol(_item.geo, symbol)
    },
    // 线宽
    handleSizeChange (value) {
      this.callback('lineSize', value)
    },
    // 线颜色：
    handleColorLineChange (value) {
      this.callback('lineColor', value)
    },
    // 透明度
    handleAlphaChange (value) {
      this.callback('polygonAlpha', value)
    },
    // 填充颜色
    handleColorPolygonChange (value) {
      this.callback('polygonColor', value)
    },
    // 字体颜色
    handleFontColorChange (value) {
      this.callback('fontColor', value)
    },
    // 字体大小
    handleFontSizeChange (value) {
      this.callback('fontSize', value)
    },
    // 字体框颜色
    handleFontFrameColorChange (value) {
      this.callback('fontFrameColor', value)
    }
  },
  data () {
    return {
      numSize: 1,
      fontSize: 12,
      alphaSize: 0.1,
      item: {},
      isShow: false,
      colorLine: '#409EFF',
      colorPolygon: '#409EFF',
      fontColor: '#409EFF',
      fontFrameColor: '#409EFF',
      styleP: {
        top: '130px',
        left: '450px'
      }
    }
  }
}
</script>
<style scoped>
.detail-position {
  z-index: 8;
}
.detail-dialog{
  width: 300px;
  height: 300px;
  color: #000;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgba(173, 113, 113, 0.4);
  border: 1px solid #d7d9de;
  border-radius: 0 0 4px 4px;
}
.title{
  height: 32px;
  line-height: 32px;
  border-bottom: 1px solid #d6d5d5;
  padding: 0 7px 0 12px;
  font-weight: bold;
  background: #1d7bdb;
  color: #fff;
  padding-right: 40px;
  position: relative;
}
.close{
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 0 12px;
}
main{
  padding: 10px;
}
.l-h{
  height: 50px;
  line-height: 50px;
}
.l-h > label,.l-h > div{
  vertical-align: middle;
}
.btn{
  margin-top: 5px;
  text-align: center;
}
</style>
