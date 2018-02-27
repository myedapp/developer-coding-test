<template>
  <div id="app">
    <header-wrap/>
    <router-view/>
  </div>
</template>

<script>
import HeaderWrap from '@/components/HeaderWrap'

export default {
  components: {
    HeaderWrap
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 64px;
}
</style>
