<template>
  <div id="app">
    <headers></headers>
    <router-view/>
  </div>
</template>

<script>
import headers from './components/header'
export default {
  data () {
    return {}
  },
  components: {
    headers
  }
}
</script>
<style>
html,
body {
  background-color: whitesmoke !important;
  display: flex;
  flex-direction: column;
}
#app {
  flex: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
