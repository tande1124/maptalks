<!--标绘工具箱-->
<template>
  <map-drag :fixed="false" class="plotbox-position" v-show="isShow">
    <div class="plotbox">
      <div class="window-caption title">
        <span>标绘工具箱</span><span class="el-icon-close close" @click="close"></span>
      </div>
      <div class="content">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="点状标绘" class="content-title" name="1">
              <table class="table">
                  <tbody>
                      <tr>
                          <td>
                              <a class="menuButton" @click="plot('Point','police')">
                                  <span class="glyphicon_size icon-police"></span>
                                  <p class="zh">警察</p>
                              </a>
                          </td>
                          <td>
                              <a class="menuButton" @click="plot('Point','doctor')">
                                  <span class="glyphicon_size icon-user-md"></span>
                                  <p class="zh">医生</p>
                              </a>
                          </td>
                          <td>
                              <a class="menuButton" @click="plot('Point','fireman')">
                                  <span class="glyphicon_size icon-fireman"></span>
                                  <p class="zh">消防员</p>
                              </a>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <a class="menuButton" @click="plot('Point','ambulance')">
                                  <span class="glyphicon_size icon-ambulance"></span>
                                  <p class="zh">救护车</p>
                              </a>
                          </td>
                          <td>
                              <a class="menuButton" @click="plot('Point','truck')">
                                  <span class="glyphicon_size icon-local-shipping"></span>
                                  <p class="zh">卡车</p>
                              </a>
                          </td>
                          <td>
                              <a class="menuButton" @click="plot('Point','bus')">
                                  <span class="glyphicon_size icon-directions-bus"></span>
                                  <p class="zh">客车</p>
                              </a>
                          </td>
                      </tr>
                  </tbody>
              </table>
            </el-collapse-item>
            <el-collapse-item title="线状标绘" name="2">
              <table class="table">
                <tbody>
                    <tr>
                        <td>
                            <a class="menuButton" @click="plot('LineString')">
                                <span class="glyphicon_size6 icon-zx"></span>
                                <p class="zh">折线</p>
                            </a>
                        </td>
                        <td>
                            <a class="menuButton" @click="plot('Curveal')">
                                <span class="glyphicon_size icon-Curve"></span>
                                <p class="zh">曲线</p>
                            </a>
                        </td>
                        <td>
                            <a class="menuButton" @click="plot('Camberal')">
                                <span class="glyphicon_size6 icon-arc"></span>
                                <p class="zh">弧线</p>
                            </a>
                        </td>
                    </tr>
                </tbody>
              </table>

            </el-collapse-item>
            <el-collapse-item title="面状标绘" name="3">
              <table class="table">
                <tbody>
                    <tr>
                        <td>
                            <a class="menuButton" @click="plot('Polygon')">
                                <span class="glyphicon_size icon-FormPolygon"></span>
                                <p class="zh">多边形</p>
                            </a>
                        </td>
                        <td>
                            <a class="menuButton" @click="plot('Ring')">
                                <span class="glyphicon_size icon-brightness-1"></span>
                                <p class="zh">圆</p>
                            </a>
                        </td>
                        <td>
                            <a class="menuButton" @click="plot('Rect')">
                                <span class="glyphicon_size icon-Rectangular"></span>
                                <p class="zh">矩形</p>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="menuButton" @click="plot('Oval')">
                                <span class="glyphicon_size icon-point1"></span>
                                <p class="zh">椭圆</p>
                            </a>
                        </td>
                        <td>
                            <a class="menuButton" @click="plot('Fan')">
                                <span class="glyphicon_size icon-signal-wifi-4-bar"></span>
                                <p class="zh">扇形</p>
                            </a>
                        </td>
                        <td>
                            <a class="menuButton" @click="plot('Arcal')">
                                <span class="glyphicon_size6 icon-camber"></span>
                                <p class="zh">圆弧</p>
                            </a>
                        </td>
                    </tr>
                </tbody>
              </table>

            </el-collapse-item>
            <el-collapse-item title="箭头标绘" name="4">
             <table class="table">
                <tbody>
                    <tr>
                        <td>
                            <a class="menuButton" @click="plot('DoubleArrow')">
                                <span class="glyphicon_size icon-doublearrow"></span>
                                <p class="zh">双箭头</p>
                            </a>
                        </td>
                        <td>
                            <a class="menuButton" @click="plot('SwallowTailArrow')">
                                <span class="glyphicon_size icon-dovetailarrowplotting"></span>
                                <p class="zh">燕尾箭头</p>
                            </a>
                        </td>
                        <td>
                            <a class="menuButton" @click="plot('MultiArrow')">
                                <span class="glyphicon_size icon-morearrow"></span>
                                <p class="zh">多箭头</p>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="menuButton" @click="plot('BeelineArrow')">
                                <span class="glyphicon_size icon-finestraightarrow"></span>
                                <p class="zh">细直箭头</p>
                            </a>
                        </td>
                        <td>
                            <a class="menuButton" @click="plot('CurveArrow')">
                                <span class="glyphicon_size icon-CurveArrow-01"></span>
                                <p class="zh">单曲箭头</p>
                            </a>
                        </td>
                        <td>
                            <a class="menuButton" @click="plot('SimpleArrow')">
                                <span class="glyphicon_size icon-singlearrow"></span>
                                <p class="zh">单箭头</p>
                            </a>
                        </td>
                    </tr>
                </tbody>
              </table>

            </el-collapse-item>
            <el-collapse-item title="行进路线标绘" name="5">
              <table class="table">
                <tbody>
                    <tr>
                        <td>
                            <a class="menuButton" @click="plot('Arsenal')">
                                <span class="glyphicon_size7 icon-Armed"></span>
                                <p class="zh">武警</p>
                            </a>
                        </td>
                        <td>
                            <a class="menuButton" @click="plot('Expert')">
                                <span class="glyphicon_size7 icon-expert"></span>
                                <p class="zh">专家</p>
                            </a>
                        </td>
                        <td>
                            <a class="menuButton" @click="plot('Project')">
                                <span class="glyphicon_size7 icon-project"></span>
                                <p class="zh">工程</p>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="menuButton" @click="plot('Armyal')">
                                <span class="glyphicon_size7 icon-army1"></span>
                                <p class="zh">军队</p>
                            </a>
                        </td>
                        <td>
                            <a class="menuButton" @click="plot('FireProtect')">
                                <span class="glyphicon_size7 icon-fire2"></span>
                                <p class="zh">消防</p>
                            </a>
                        </td>
                        <td>
                            <a class="menuButton" @click="plot('Medical')">
                                <span class="glyphicon_size7 icon-medical"></span>
                                <p class="zh">医疗</p>
                            </a>
                        </td>
                    </tr>
                </tbody>
              </table>

            </el-collapse-item>
            <el-collapse-item title="复杂路线标绘" name="6">
              <table class="table">
                <tbody>
                    <tr>
                        <td>
                            <a class="menuButton" @click="plot('Airway')">
                                <span class="glyphicon_size6 icon-AirTransport"></span>
                                <p class="zh">空中运输</p>
                            </a>
                        </td>
                        <td>
                            <a class="menuButton" @click="plot('Cannon')">
                                <span class="glyphicon_size6 icon-ShellRoute"></span>
                                <p class="zh">炮弹路线</p>
                            </a>
                        </td>
                        <td>
                            <a class="menuButton" @click="plot('Airmobile')">
                                <span class="glyphicon_size6 icon-AirMotor"></span>
                                <p class="zh">空中机动</p>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="menuButton" @click="plot('ArtilleryManen')">
                                    <span class="glyphicon_size6 icon-AntiaircraftArtilleryCamp"></span>
                                    <p class="zh">高射炮兵营地</p>
                            </a>
                        </td>
                        <td>
                            <a class="menuButton" @click="plot('Motorbike')">
                                    <span class="glyphicon_size6 icon-MotorizedColumns"></span>
                                    <p class="zh">摩托化行军纵队</p>
                            </a>
                        </td>
                        <td>
                            <a class="menuButton" @click="plot('AntiAirCraft')">
                                    <span class="glyphicon_size6 icon-AirDefenseForcesMarchingColumn"></span>
                                    <p class="zh">防空兵行军纵队</p>
                            </a>
                        </td>
                    </tr>
                </tbody>
              </table>

            </el-collapse-item>
            <el-collapse-item title="文本标绘" name="7">
              <table class="table">
                <tbody>
                    <tr>
                        <td>
                            <a class="menuButton" @click="plot('Point','text')">
                                <span class="glyphicon_size icon-format-color-text"></span>
                                <p class="zh">文本</p>
                            </a>
                        </td>
                        <td>
                        </td>
                        <td>
                        </td>
                    </tr>
                </tbody>
              </table>

            </el-collapse-item>
            <el-collapse-item title="标绘管理" name="8">
              <table class="table">
                <tbody>
                    <tr>

                        <td>
                              <a class="menuButton" @click="edit()">
                                      <span class="glyphicon_size icon-create"></span>
                                      <p class="zh">编辑</p>
                              </a>
                        </td>
                        <td>
                              <a class="menuButton" @click="remove()">
                                      <span class="glyphicon_size icon-cancel5"></span>
                                      <p class="zh">删除</p>
                              </a>
                        </td>
                        <td>
                              <a class="menuButton" @click="clear()">
                                  <span class="glyphicon_size icon-delete"></span>
                                  <p class="zh">清除</p>
                              </a>
                      </td>
                    </tr>
                </tbody>
              </table>

            </el-collapse-item>
          </el-collapse>
      </div>
      <map-plot-core ref="plotHandler" :callback="editing"></map-plot-core>
    </div>
  </map-drag>
</template>
<script>
import '@/assets/css/plot.css'
import { mapGetters } from 'vuex'
import MapDrag from '@/components/map/map-drag.vue'
import MapPlotCore from './map-plot-core.vue'
import Vue from 'vue'
import {
  Collapse,
  CollapseItem
} from 'element-ui'
Vue.use(Collapse)
Vue.use(CollapseItem)
export default {
  components: {
    MapDrag, MapPlotCore
  },
  computed: {
    ...mapGetters(['mapLoaded', 'panel'])
  },
  watch: {
    mapLoaded () {
      this.$refs.plotHandler.init()
    }
  },
  mounted () {
    if (this.mapLoaded) {
      this.$refs.plotHandler.init()
    }
  },
  data () {
    return {
      activeName: '0',
      geo: null,
      isShow: false
    }
  },
  methods: {
    plot (type, tag) {
      this.$refs.plotHandler.plot(type, tag)
    },
    edit () {
      this.$refs.plotHandler.edit()
    },
    remove () {
      this.$refs.plotHandler.remove()
    },
    clear () {
      this.$refs.plotHandler.clear()
    },
    open () {
      this.isShow = true
    },
    close () {
      this.isShow = false
      //   this.$refs.plotHandler && this.$refs.plotHandler.clear()
      this.$refs.plotHandler && this.$refs.plotHandler.editEnd()
      this.panel.getPlotEditUi().close()
    },
    editing (tag, obj, xy) {
      if (tag === 'edit-on') {
        this.editOn(obj, xy)
      } else if (tag === 'edit-end') {
        this.editEnd()
      }
    },
    editEnd () {
      this.panel.getPlotEditUi().close()
    },
    editOn (obj, xy) {
    //   this.geo = Object.freeze(obj.geo)
      this.panel.getPlotEditUi().open({
        type: obj.type, xy, geo: obj.geo
      })
    }
  }
}
</script>
