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
  props: {
    names: {
      // 基础类型的检查   多个可能的类型
      type: [String, Number],
      // 是否必填
      required: false,
      // 默认值
      default: 100
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
