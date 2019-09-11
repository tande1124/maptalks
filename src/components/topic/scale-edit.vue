<!-- 比例尺编辑 -->
<template>
   <map-drag :fixed="false" class="panel-position" v-show="isShow">
      <header class="title">
        比例尺编辑
        <span class="close" @click="hide()">x</span>
      </header>
      <div class="panel-content">
        <el-form>
          <el-form-item label="高度：">
            <el-input v-model="input1" class="el-input--suffix"></el-input>
          </el-form-item>
          <el-form-item label="宽度：">
            <el-input v-model="input2" class="el-input--suffix"></el-input>
          </el-form-item>
          <el-form-item label="颜色：">
            <el-color-picker v-model="color1"></el-color-picker>
          </el-form-item>
          <el-form-item label="预览：">
            <label :style="style" class="el-input--suffix el-input el-input--medium el-textarea__inner">
              {{textarea}}
            </label>
          </el-form-item>
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
      input1: '200',
      input2: '30',
      color1: '#409EFF'
    }
  },
  methods: {
    show () {
      this.isShow = true
    },
    hide () {
      this.isShow = false
    },
    ok () {
      this.$emit('input-result', this.textarea, {
        w: this.input1,
        h: this.input2,
        color: this.color1
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
  width: 310px;
  height: 360px;
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
