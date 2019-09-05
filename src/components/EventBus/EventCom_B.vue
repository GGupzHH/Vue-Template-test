<template>
  <div class=''>
    event - B
    <div>
      {{ msg }}
    </div>
  </div>
</template>

<script>
import EventBus from '../../utils/EventBus'
export default {
  data () {
    return {
      msg: ''
    }
  },
  components: {},
  computed: {},
  watch: {},
  beforeCreate () {
  },
  created () {
  },
  methods: {
  },
  mounted () {
    EventBus.$on('eventA', (msg) => {
      console.log()
      this.msg = msg
    })
    // 移除某个事件监听  必须在事件接收之后移除！！！！！！！！！！！
    // EventBus.$off('eventA')
    // 移除所有事件监听
    EventBus.$off()
  }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>
