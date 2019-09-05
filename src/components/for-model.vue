<template>
  <div class='models'>
    <div v-for="(item, index) in list" :key="index">
      <span>item</span>
      <el-input v-model="inputModel[item]" placeholder="请输入内容"></el-input>
    </div>
    <el-button type="primary" @click="subMit">打印</el-button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      list: ['zs', 'ls', 'ww'],
      inputModel: {}
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
    subMit () {
      console.log(this.inputModel)
    }
  },
  mounted () {
  }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>
