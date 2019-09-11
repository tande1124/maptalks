<!-- 专题图制作 -->
<template>
  <map-drag :fixed="false" class="detail-position" v-show="isShow">
    <div class="detail-dialog">
      <header class="title">
        专题图
        <span class="close" @click="close">x</span>
      </header>
      <main class="detail-content">
        <div class="title">
          <el-row>
            <el-button type="primary" @click="addPattern('text')">添加文字</el-button>
            <el-button type="primary" @click="addPattern('picture')">添加图片</el-button>
            <el-button type="primary" @click="addPattern('scale')">添加比例尺</el-button>
            <el-button type="primary" @click="addPattern('northArrow')">添加指北针</el-button>
            <el-button type="primary" @click="manager()">内容管理</el-button>
            <el-button type="primary" @click="exportMap()">导出专题图</el-button>
            <el-button type="primary" @click="print()">打印专题</el-button>
          </el-row>
        </div>
        <div id="map-page">
          <span>军运村</span>
          <div id="map-wrapper">
            <div class="container">
              <div id="map-container"></div>
            </div>
          </div>
          <div class="explain">
            <div class="position-left">
              2019年 军运村<br>
            </div>
            <div class="position-right">
              <!-- <p>测量员：</p> -->
              <!-- <p>绘图员：地理信息委员会</p> -->
              <!-- <p>审核员：</p> -->
            </div>
          </div>
        </div>
      </main>
      <text-edit ref="textEdit" @input-result="textResult"></text-edit>
      <pic-edit ref="picEdit" @input-result="picResult"></pic-edit>
      <scale-edit ref="scaleEdit" @input-result="scaleResult" :textarea="scale"></scale-edit>
      <north-edit ref="northEdit" @input-result="northResult"></north-edit>
      <manager-edit ref="managerEdit" @input-result="managerResult" :textarea="material"></manager-edit>
    </div>
  </map-drag>
</template>

<script>
import { down, toCanvas } from 'map-export-image'
import MapDrag from '@/components/map/map-drag.vue'
import maptalks from '#/assets/maptalks/maptalks-ext.es'
import { mapGetters } from 'vuex'
import textEdit from './text-edit'
import picEdit from './pic-edit'
import scaleEdit from './scale-edit'
import northEdit from './north-edit'
import managerEdit from './manager-edit'
import Vue from 'vue'
import {
  Row
} from 'element-ui'
Vue.use(Row)
export default {
  components: { MapDrag, textEdit, picEdit, scaleEdit, northEdit, managerEdit },
  computed: {
    ...mapGetters(['map', 'panel'])
  },
  data () {
    return {
      current: null,
      layerId: 'map-export-layer',
      methodList: {
        text: this.addText,
        picture: this.addPicture,
        scale: this.addScaleBar,
        northArrow: this.addNorthArrow
      },
      scale: '1:1',
      material: [],
      /* eslint-disable*/
      _newMap: null,
      _layer: null,
      _evt: null,
      _material: null,
      /* eslint-enable */
      isShow: false,
      isInit: false
    }
  },
  methods: {
    open () {
      if (!this.isInit) {
        this.isInit = true
        this.init()
      }
      this.isShow = true
    },
    close () {
      this.isShow = false
    },
    init () {
      if (!this.map) return
      this._newMap = maptalks.Map.fromJSON('map-container', this.map.getInstance().toJSON())
      this._layer = new maptalks.VectorLayer(this.layerId).addTo(this._newMap)
      this._material = []
      this.scale = '1:' + this._newMap.getScale()
      this.setMapListener()
    },
    setMapListener () {
      this._newMap.on('click', (evt) => {
        if (this.current) {
          this._evt = evt
          this.methodList[this.current] && this.methodList[this.current](evt)
          this.defaultCurrentType()
        }
      })
    },
    defaultCurrentType () {
      this.current = null
      this._newMap.setCursor('default')
    },
    addText (evt) {
      this.$refs.textEdit.show()
    },
    addPicture (evt) {
      this.$refs.picEdit.show()
    },
    addScaleBar (evt) {
      this.$refs.scaleEdit.show()
    },
    addNorthArrow (evt) {
      this.$refs.northEdit.show()
    },
    addPattern (type) {
      this.setCurrentType(type)
    },
    manager () {
      this.$refs.managerEdit.show()
    },
    setCurrentType (type) {
      this.current = type
      this._newMap.setCursor('crosshair')
    },
    textResult (label, style) {
      var text = new maptalks.Marker(
        this._evt.coordinate,
        {
          'properties': {
            'name': label
          },
          'draggable': true,
          'symbol': {
            'textFaceName': style['font-family'],
            'textName': '{name}',
            'textWeight': style['font-weight'],
            'textStyle': style['font-style'],
            'textSize': style['font-size'].replace('px', ''),
            'textFont': null,
            'textFill': style['color'],
            'textWrapWidth': null,
            'textDx': 0,
            'textDy': 0,
            'textHorizontalAlignment': 'middle',
            'textVerticalAlignment': 'middle',
            'textAlign': 'center'
          }
        }
      ).addTo(this._layer)
      this.material.push({
        name: label
      })
      this._material.push({
        name: label,
        data: text
      })
    },
    picResult (label, style) {
      var marker = new maptalks.Marker(
        this._evt.coordinate,
        {
          'draggable': true,
          'symbol': {
            'markerFile': label,
            'markerWidth': style.w,
            'markerHeight': style.h,
            'markerDx': 0,
            'markerDy': 0,
            'markerOpacity': 1
          }
        }
      ).addTo(this._layer)
      let _name = '图片_' + new Date().getTime()
      this.material.push({
        name: _name
      })
      this._material.push({
        name: _name,
        data: marker
      })
    },
    scaleResult (label, style) {
      var labelBox = new maptalks.Label(label + '米',
        this._evt.coordinate,
        {
          'draggable': true,
          'boxStyle': {
            'padding': [12, 8],
            'verticalAlignment': 'middle',
            'horizontalAlignment': 'middle',
            'minWidth': style.w - 0,
            'minHeight': style.h - 0,
            'symbol': {
              'markerType': 'square',
              'markerFill': style.color,
              'markerFillOpacity': 0.9,
              'markerLineColor': style.color,
              'markerLineWidth': 1
            }
          },
          'textSymbol': {
            'textSize': 18,
            'textAlign': 'center',
            'textVerticalAlignment': 'middle'
          }
        }).addTo(this._layer)
      let _name = '比例尺_' + new Date().getTime()
      this.material.push({
        name: _name
      })
      this._material.push({
        name: _name,
        data: labelBox
      })
    },
    northResult (label, style) {
      let marker = new maptalks.Marker(
        this._evt.coordinate,
        {
          'draggable': true,
          'symbol': {
            'markerFile': label,
            'markerWidth': style.w - 0,
            'markerHeight': style.h - 0,
            'markerDx': 0,
            'markerDy': 0,
            'markerOpacity': 1
          }
        }
      ).addTo(this._layer)
      let _name = '指北针_' + new Date().getTime()
      this.material.push({
        name: _name
      })
      this._material.push({
        name: _name,
        data: marker
      })
    },
    managerResult (item) {
      let index = this._material.findIndex((element, index, array) => {
        return element.name === item.name
      })
      this._material[index].data.remove()
      this.material.splice(index, 1)
      this._material.splice(index, 1)
    },
    exportMap () {
      down('map-wrapper')
    },
    print () {
      this.defaultCurrentType()
      toCanvas('map-wrapper').then(canvas => {
        var div = document.createElement('div')
        div.appendChild(canvas)
        var iframe = document.createElement('iframe')
        document.body.appendChild(iframe)
        iframe.contentWindow.document.body.appendChild(div)
        iframe.focus()
        iframe.contentWindow.document.execCommand('print', false, null)
        document.body.removeChild(iframe)
      })
    }
  }
}

</script>
<style lang='less' scoped>
.detail-position {
  top: 30px;
  left: 30px;
  width: 900px;
  height: 600px;
  .detail-dialog {
    width: 900px;
    height: 600px;
    display: flex;
    flex-direction: column;
    color: #000;
    background: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.4);
    .title {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #d6d5d5;
      padding: 0 7px 0 12px;
      font-size: 19px;
      font-weight: bold;
      background: #2c65b2;
      color: #fff;
      padding-right: 40px;
      position: relative;
      .close {
        position: absolute;
        top: -2px;
        right: 0;
        cursor: pointer;
        padding: 0 10px;
      }
    }
    .detail-content {
      // width: 100%;
      // height: 468px;
      flex: 1;
      display: flex;
      flex-direction: column;
      .title {
        height: 50px;
        line-height: 50px;
        background: none;
        display: flex;
        justify-content: space-between;
        button {
          padding: 0 10px;
          border-radius: 10px;
          height: 40px;
          margin: 5px 0;
          font-weight: 500;
          font-size: 17px;
        }
      }
    }
  }
}
#map-page {
  flex: 1;
  padding: 10px 20px 20px;
  box-sizing: border-box;
  border: 2px solid #000;
  span:nth-child(1) {
    font-size: 24px;
    font-weight: bold;
    display: inline-block;
    width: 100%;
    text-align: center;
  }
  .explain {
    .position-left {
      float: left;
      text-align: center;
    }
    .position-right {
      float: right;
    }
  }
}
#map-wrapper {
  box-sizing: border-box;
  border: 1px solid #00fffc;
  width: 100%;
  height: 82%;
  .container {
    width: 100%;
    height: 100%;
    border: 20px solid rgba(165, 179, 199, 0.4);
    box-sizing: border-box;
  }
}
#map-container {
  width: 100%;
  height: 100%;
  border: 1px solid #acff00;
}
</style>
