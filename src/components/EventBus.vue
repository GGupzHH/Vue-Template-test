<template>
  <div class=''>
    <eventa/>
    <eventb/>
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
