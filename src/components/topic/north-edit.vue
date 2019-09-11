<!-- 指北针编辑 -->
<template>
   <map-drag :fixed="false" class="panel-position" v-show="isShow">
      <header class="title">
        指北针编辑
        <span class="close" @click="hide()">x</span>
      </header>
      <div class="panel-content">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-row :gutter="10">
              <el-col :span="12">
                <el-row>
                  <img :src='northarrow1' @click="change(northarrow1)"/>
                </el-row>
                <el-row>
                  <span>northarrow1</span>
                </el-row>
              </el-col>
              <el-col :span="12">
                <el-row>
                  <img :src='northarrow2' @click="change(northarrow2)"/>
                </el-row>
                <el-row>
                  <span>northarrow2</span>
                </el-row>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="12">
                <el-row>
                  <img :src='northarrow3' @click="change(northarrow3)"/>
                </el-row>
                <el-row>
                  <span>northarrow3</span>
                </el-row>
              </el-col>
              <el-col :span="12">
                <el-row >
                  <img :src='northarrow4' @click="change(northarrow4)"/>
                </el-row>
                <el-row>
                  <span>northarrow4</span>
                </el-row>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="12">
                <el-row>
                  <img :src='northarrow5'  @click="change(northarrow5)"/>
                </el-row>
                <el-row>
                  <span>northarrow5</span>
                </el-row>
              </el-col>
              <el-col :span="12">
                <el-row >
                  <img :src='northarrow6' @click="change(northarrow6)"/>
                </el-row>
                <el-row>
                  <span>northarrow6</span>
                </el-row>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="12">
                <el-row>
                  <img :src='northarrow7'  @click="change(northarrow7)"/>
                </el-row>
                <el-row>
                  <span>northarrow7</span>
                </el-row>
              </el-col>
              <el-col :span="12">
                <el-row >
                  <img :src='northarrow8' @click="change(northarrow8)"/>
                </el-row>
                <el-row>
                  <span>northarrow8</span>
                </el-row>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="12">
                <el-row >
                  <img :src='northarrow9' @click="change(northarrow9)"/>
                </el-row>
                <el-row>
                  <span>northarrow9</span>
                </el-row>
              </el-col>
              <el-col :span="12">
                <el-row >
                  <img :src='northarrow10' @click="change(northarrow10)"/>
                </el-row>
                <el-row>
                  <span>northarrow10</span>
                </el-row>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-form>
              <el-form-item label="高度：">
                <el-input v-model="input1" class="el-input--suffix"></el-input>
              </el-form-item>
              <el-form-item label="宽度：">
                <el-input v-model="input2" class="el-input--suffix"></el-input>
              </el-form-item>
               <el-form-item label="预览：">
                  <img v-if="fileStr" :src="fileStr" width="60" height="60"/>
                </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-form>
          <el-form-item label="" class="btns">
            <el-button type="success" @click="ok">确定</el-button>
            <el-button type="info" @click="hide">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </map-drag>
</template>

<script>
import MapDrag from '@/components/map/map-drag.vue'
import northarrow1 from '#/assets/images/thematic/northarrow1.png'
import northarrow2 from '#/assets/images/thematic/northarrow2.png'
import northarrow3 from '#/assets/images/thematic/northarrow3.png'
import northarrow4 from '#/assets/images/thematic/northarrow4.png'
import northarrow5 from '#/assets/images/thematic/northarrow5.png'
import northarrow6 from '#/assets/images/thematic/northarrow6.png'
import northarrow7 from '#/assets/images/thematic/northarrow7.png'
import northarrow8 from '#/assets/images/thematic/northarrow8.png'
import northarrow9 from '#/assets/images/thematic/northarrow9.png'
import northarrow10 from '#/assets/images/thematic/northarrow10.png'
import Vue from 'vue'
import {
  Col
} from 'element-ui'
Vue.use(Col)
export default {
  components: {MapDrag},
  props: ['textarea'],
  computed: {
    style () {
      return {
        'background-color': this.color1,
        'width': '200px',
        'text-align': 'center'
      }
    }
  },
  data () {
    return {
      isShow: false,
      input1: '60',
      input2: '60',
      fileStr: '',
      northarrow1: northarrow1,
      northarrow2: northarrow2,
      northarrow3: northarrow3,
      northarrow4: northarrow4,
      northarrow5: northarrow5,
      northarrow6: northarrow6,
      northarrow7: northarrow7,
      northarrow8: northarrow8,
      northarrow9: northarrow9,
      northarrow10: northarrow10
    }
  },
  methods: {
    show () {
      this.isShow = true
    },
    hide () {
      this.isShow = false
    },
    change (file) {
      this.fileStr = file
    },
    ok () {
      let c = document.createElement('canvas')
      c.width = this.input1
      c.height = this.input2
      let cxt = c.getContext('2d')
      let img = new Image()
      img.src = this.fileStr
      cxt.drawImage(img, 0, 0)
      let dd = c.toDataURL()
      this.$emit('input-result', dd, {
        w: this.input1,
        h: this.input2
      })
      this.hide()
    }
  }
}

</script>
<style scoped  lang='less'>
.panel-position{
  top: 80px;
  left: 80px;
  width: 450px;
  height: 500px;
  background: #fff;
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
  .panel-content{
    padding-left: 10px;
    .btns{
      text-align: center;
    }
  }
}
</style>
<style>
.el-input{
  width: auto;
}
.el-upload-list{
  display: none;
}
</style>
