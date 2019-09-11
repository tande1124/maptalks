<!--绘图模块-->
<template>
  <div></div>
</template>
<script>
import maptalks from '#/assets/maptalks/maptalks-ext.es.js'
import common from '@/utils/common.es'
import { mapGetters } from 'vuex'

export default {
  props: {
    callback: Function
  },
  computed: {
    ...mapGetters(['map', 'symbols'])
  },
  methods: {
    // 绘图
    plot (type, tag) {
      currentAction = {
        type: null,
        start: false,
        screenXY: null
      }
      drawOn(type)
      currentPointType = tag
    },
    // 编辑
    edit () {
      currentAction = {
        type: 'edit',
        start: false,
        screenXY: null
      }
    },
    editEnd () {
      endEdit()
    },
    remove () {
      currentAction.type = 'delete'
    },
    // 清除
    clear () {
      clear()
    },
    init () {
      initPlot(this)
    },
    // 通知外界绘图完成
    brocast (tag, geometry, opts) {
      if (typeof this.callback === 'function') {
        this.callback(tag, geometry, opts)
      } else {
        this.$emit(tag, geometry, opts)
      }
    },
    // 更新symbol
    setSymbol (geo, symbol) {
      let oldSymbol = geo.getSymbol()
      let newSymbol = { ...oldSymbol, ...symbol }
      geo.setSymbol(newSymbol)
    }
  }
}
var that = null
var _map = null
var currentPointType = null
var currentAction = {
  type: null,
  start: false,
  screenXY: null
}
var symbols = null
var layer = null
var drawTool = null
// 事件通知
function emit (tag, geometry) {
  that.brocast(tag, geometry, currentAction.screenXY)
}
// 绘图开始
function drawOn (value) {
  drawTool.setMode(value).enable()
}
// 绘图结束
function drawOff (param) {
  drawTool.disable()
  emit('draw-end', param.geometry)
}
// 增加文字
function addText (xy) {
  var xyArr = [xy.x, xy.y]
  var text = xyArr.join(' ')
  new maptalks.Label(text, xyArr, {
    draggable: true,
    textSymbol: {
      textFaceName: 'sans-serif',
      textFill: '#fff',
      textSize: 18
    },
    boxStyle: {
      padding: [12, 8],
      symbol: {
        markerType: 'square',
        markerFillOpacity: 0.9,
        markerLineColor: '#34495e',
        markerFill: '#34495e',
        markerLineWidth: 1
      }
    }
  }).addTo(layer)
}
// 清除
function clear () {
  layer && layer.clear()
}
// 开始编辑
function startEdit (value) {
  if (value instanceof maptalks.Label) {
    value.startEditText()
  } else if (value instanceof maptalks.Marker) {
    value.config('draggable', true)
  } else {
    value.startEdit()
  }
  editSymbol(value)
}
function editSymbol (value) {
  if (value instanceof maptalks.Label) {
    emit('edit-on', { type: 'label', geo: value })
  } else if (value instanceof maptalks.Marker) {
  } else if ((value instanceof maptalks.LineString && !value.fixPointCount) || value instanceof maptalks.Curveal || value instanceof maptalks.Camberal) {
    emit('edit-on', { type: 'line', geo: value })
  } else {
    emit('edit-on', { type: 'polygon', geo: value })
  }
}
// 结果编辑
function endEdit () {
  layer.getGeometries().map(function (value) {
    if (value instanceof maptalks.Label) {
      value.endEditText()
    } else if (value instanceof maptalks.Marker) {
      value.config('draggable', false)
    } else {
      value.endEdit()
    }
  })
  emit('edit-end')
}
// 计算边界
function calcExtent (value) {
  var coordinates = value.getCoordinates()
  var extent = {
    xmin: 180,
    ymin: 90,
    xmax: -180,
    ymax: -90
  }
  for (var index = 0; index < coordinates.length; index++) {
    const element = coordinates[index]
    if (element.x < extent.xmin) {
      extent.xmin = element.x
    }
    if (element.y < extent.ymin) {
      extent.ymin = element.y
    }
    if (element.x > extent.xmax) {
      extent.xmax = element.x
    }
    if (element.y > extent.ymax) {
      extent.ymax = element.y
    }
  }
  if (value.getJSONType() === 'Ring') {
    var radius = value.getRadius()
    if (radius === 0) {
      let points = value.getCoordinates()
      let len = this.map.getInstance().computeLength(points[0], points[1])
      radius = common.meter2degree(len)
    }
    extent.xmin = extent.xmin - radius
    extent.xmax = extent.xmax + radius
    extent.ymin = extent.ymin - radius
    extent.ymax = extent.ymax + radius
  }
  return extent
}
function contains (array) {
  var x = array.coordinate.x
  var y = array.coordinate.y
  var arr = []
  for (var index = 0; index < array.layers.length; index++) {
    var layer = array.layers[index]
    layer.getGeometries().map(function (value) {
      var extent = calcExtent(value)
      if (
        x > extent.xmin &&
        x < extent.xmax &&
        y > extent.ymin &&
        y < extent.ymax
      ) {
        arr.push(value)
      }
    })
  }
  return arr
}
// 点击元素识别
function identify (data, callback) {
  _map.identify(data, function (geos) {
    var falg = false
    if (geos.length === 0) {
      geos = contains(data)
      if (geos.length === 0) {
        if (currentAction.start) {
          endEdit()
          currentAction.start = false
          currentAction.type = null
        }
      } else {
        falg = true
      }
    } else {
      falg = true
    }
    falg &&
      geos.forEach(function (value) {
        if (currentAction.type === 'edit' && !currentAction.start) {
          startEdit(value)
          currentAction.start = true
        } else if (currentAction.type === 'delete') {
          value.remove()
          currentAction.type = null
          emit('edit-end')
        }
      })
  })
}
// 初始化绘图环境
function initPlot (self) {
  if (_map) return
  that = self
  _map = self.map.getInstance()
  symbols = self.symbols.plotSymbols
  layer = _map.getLayer('plot_layer')
  if (!layer) { layer = new maptalks.VectorLayer('plot_layer').addTo(_map) }
  drawTool = new maptalks.DrawTool({
    mode: 'Point'
  })
  drawTool.on('drawend', function (param) {
    if (
      param.geometry instanceof maptalks.Marker &&
    currentPointType === 'text'
    ) {
      addText(param.geometry.getCoordinates())
    } else {
      if (param.geometry instanceof maptalks.Marker) {
        param.geometry.setSymbol(symbols[currentPointType])
      }
      layer.addGeometry(param.geometry)
    }
    drawOff(param)
  })
  drawTool.addTo(_map).disable()
  _map.on('click', function (e) {
    currentAction.screenXY = e.containerPoint || e.viewPoint
    currentAction.type &&
      identify({
        coordinate: e.coordinate,
        layers: [layer]
      })
  })
}
</script>
