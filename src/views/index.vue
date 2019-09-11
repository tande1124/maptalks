<!--
 * @Description: 首页
 * @version: 0.1.0
 * @Author: wsw
 * @LastEditors: wsw
 * @Date: 2019-04-26 10:04:38
 * @LastEditTime: 2019-04-26 15:31:46
 -->
<template>
  <div class="container">
    <map-main></map-main>
    <map-tool></map-tool>
    <map-plot-ui ref="plotUi"></map-plot-ui>
    <map-plot-edit ref="plotEdit"></map-plot-edit>
    <topic-map ref="topicMap"></topic-map>
  </div>
</template>

<script>
import MapMain from '@/components/map/map-main'
import MapTool from '@/components/map/map-tool'
import MapPlotUi from '@/components/plot/map-plot-ui'
import MapPlotEdit from '@/components/plot/map-plot-edit'
import TopicMap from '@/components/topic/topic-map'
export default {
  components: {
    MapMain,
    MapTool,
    MapPlotUi,
    MapPlotEdit,
    TopicMap
  },
  data () {
    return {

    }
  },
  mounted () {
    this.$store.commit('setPanel', {
      getPlotEditUi: _ => {
        return this.$refs.plotEdit
      },
      getPlotUi: _ => {
        return this.$refs.plotUi
      },
      getTopic: _ => {
        return this.$refs.topicMap
      }
    })
  }
}
</script>
<style scoped>
.container{
  height: 100%;
}
</style>
