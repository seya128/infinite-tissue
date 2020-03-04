<template>
  <div id="app">
    <TissuePlayer msg="無限ティッシュ" />
  </div>
</template>

<script>
import TissuePlayer from './components/TissuePlayer.vue'

export default {
  name: 'App',
  components: {
    TissuePlayer
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
</style>
