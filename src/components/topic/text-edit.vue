<!-- 文本编辑 -->
<template>
   <map-drag :fixed="false" class="panel-position" v-show="isShow">
      <header class="title">
        文本编辑
        <span class="close" @click="hide()">x</span>
      </header>
      <div class="panel-content">
        <el-form>
          <el-form-item label="字体：">
            <el-select v-model="fontFamiliesValue" placeholder="Select">
              <el-option
                v-for="item in fontFamiliesOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="字号：">
            <el-select v-model="fontSizesValue" placeholder="Select">
              <el-option
                v-for="item in fontSizesOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="风格：">
            <el-select v-model="fontStyliesValue" placeholder="Select">
              <el-option
                v-for="item in fontStyliesOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="粗细：">
            <el-select v-model="fontWeightsValue" placeholder="Select">
              <el-option
                v-for="item in fontWeightsOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="颜色：">
            <el-color-picker v-model="color1"></el-color-picker>
          </el-form-item>
          <el-form-item label="内容：">
            <el-input v-model="input" class="el-input--suffix"></el-input>
          </el-form-item>
          <el-form-item label="预览：">
            <textarea v-model="textarea" :style="style" class="el-input--suffix el-input el-input--medium el-textarea__inner" disabled></textarea>
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
import Vue from 'vue'
import {
  Form,
  FormItem,
  Select,
  Option,
  Input
} from 'element-ui'
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
export default {
  components: {MapDrag},
  computed: {
    textarea () {
      return this.input
    },
    style () {
      return {
        'font-family': this.fontFamilies[this.fontFamiliesValue],
        'font-size': this.fontSizes[this.fontSizesValue] + 'px',
        'font-style': this.fontStylies[this.fontStyliesValue],
        'font-weight': this.fontWeights[this.fontWeightsValue],
        'color': this.color1
      }
    }
  },
  data () {
    return {
      isShow: false,
      fontFamilies: ['宋体', 'Arial', 'Courier New', 'Quattrocento Sans', 'Verdana'],
      fontSizes: [12, 14, 16, 18, 20],
      fontStylies: ['normal', 'italic', 'inherit', 'oblique'],
      fontWeights: ['normal', 'bolder', 'bold', 'inherit', 'lighter'],
      fontFamiliesOptions: [
        {
          value: '0',
          label: '宋体'
        }, {
          value: '1',
          label: 'Arial'
        }, {
          value: '2',
          label: 'Courier New'
        }, {
          value: '3',
          label: 'Quattrocento Sans'
        }, {
          value: '4',
          label: 'Verdana'
        }
      ],
      fontFamiliesValue: '0',
      fontSizesOptions: [
        {
          value: '0',
          label: '12'
        }, {
          value: '1',
          label: '14'
        }, {
          value: '2',
          label: '16'
        }, {
          value: '3',
          label: '18'
        }, {
          value: '4',
          label: '20'
        }
      ],
      fontSizesValue: '0',
      fontStyliesOptions: [
        {
          value: '0',
          label: 'normal'
        }, {
          value: '1',
          label: 'italic'
        }, {
          value: '2',
          label: 'inherit'
        }, {
          value: '3',
          label: 'oblique'
        }
      ],
      fontStyliesValue: '0',
      fontWeightsOptions: [
        {
          value: '0',
          label: 'normal'
        }, {
          value: '1',
          label: 'bolder'
        }, {
          value: '2',
          label: 'bold'
        }, {
          value: '3',
          label: 'inherit'
        }, {
          value: '4',
          label: 'lighter'
        }
      ],
      fontWeightsValue: '0',
      color1: '#409EFF',
      input: 'Text'
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
      this.$emit('input-result', this.input, this.style)
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
  height: 560px;
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
</style>
