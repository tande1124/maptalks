<!-- 内容管理 -->
<template>
   <map-drag :fixed="false" class="panel-position" v-show="isShow">
      <header class="title">
        内容管理
        <span class="close" @click="hide()">x</span>
      </header>
      <div class="panel-content">
        <el-row :gutter="20" align="middle" v-for="(item,index) in textarea" :key="index">
          <el-col :span="18">
            <label style="width:100%" class="el-input--suffix el-input el-input--medium el-textarea__inner">
              {{item.name}}
            </label>
          </el-col>
          <el-col :span="6"><el-button type="warning" @click="del(item)">删除</el-button></el-col>
        </el-row>
      </div>
    </map-drag>
</template>

<script>
import MapDrag from '@/components/map/map-drag.vue'
export default {
  components: {MapDrag},
  props: ['textarea'],
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    show () {
      this.isShow = true
    },
    hide () {
      this.isShow = false
    },
    del (item) {
      this.$emit('input-result', item)
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
