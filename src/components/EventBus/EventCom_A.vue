<template>
  <div class=''>
    <button @click="sendEvent">event -A</button>
  </div>
</template>

<script>
import EventBus from '../../utils/EventBus'
console.log(EventBus)
export default {
  data () {
    return {
    }
  },
  methods: {
    sendEvent () {
      EventBus.$emit('eventA', '来自A页面的消息')
    }
  }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>
