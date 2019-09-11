<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.$store.dispatch('loadConfig').then(data => {
      let mapConfig = {}
      let layerTreeConfig = {}
      try {
        data.forEach((config, index) => {
          /* eslint-disable*/
          let res = eval(config)
          /* eslint-enable */
          switch (index) {
            case 0:
              mapConfig = res
              break
            case 1:
              mapConfig.symbols = res
              break
            case 2:
              layerTreeConfig = res
              break
          }
        })
        this.$store.commit('setBaseServiceUrl', mapConfig.services.baseServiceUrl)
        this.$store.commit('setMapConfig', mapConfig)
        this.$store.commit('setLayerTreeConfig', layerTreeConfig)
        this.$store.commit('setConfigLoaded', true)
      } catch (error) {
        alert('加载配置文件失败', error)
      }
    })
  }
}
</script>

<style>
html,body,#app {
  padding: 0;
  margin: 0;
  height: 100%;
}
</style>
