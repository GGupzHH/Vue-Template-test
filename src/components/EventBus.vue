<template>
  <div class=''>
    <div>
      <h1>移除事件监听者</h1>
      <div>
        <img src="../assets/微信截图_20190905182055.png" alt="">
      </div>
    </div>
    <div>
      <h1>eventBus 通信</h1>
      <eventa/>
      <eventb/>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  components: {
    eventa: () => import('../components/EventBus/EventCom_A'),
    eventb: () => import('../components/EventBus/EventCom_B')
  },
  computed: {},
  watch: {},
  beforeCreate () {
  },
  created () {
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>
