<template>
  <div class='copy-wrapper'>
    <div class="copy-cen">
      <div class="url" ref="url">https://www.jianshu.com/p/30795df87bac</div>
      <button @click="onCopy">点我复制</button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {

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
    onCopy () {
      let val = this.$refs.url.textContent
      let input = document.createElement('input')
      input.value = val
      console.log(input.value)
      document.body.appendChild(input)
      // 获取焦点
      input.focus()
      // 选中指定内容
      input.setSelectionRange(0, val.length)
      if (document.execCommand('copy')) {
        document.execCommand('copy')
        console.log('复制成功')
      }
      document.body.removeChild(input)
    }
  },
  mounted () {
  }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.copy-wrapper {
  margin-top: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .copy-cen {
    width: 350px;
    div.url {
      text-align: center;
      line-height: 40px;
      font-size: 14px;
      font-weight: 600;
    }
    button {
      display: block;
      // display: inline-block;
      margin: 20px auto;
      width: 85px;
      height: 32px;
      line-height: 32px;
      outline: none;
      background-color: rgb(113, 88, 255);
      border: 1px solid rgb(113, 88, 255);
      cursor: pointer;
      color: #fff;
      letter-spacing: 2px;
      font-weight: 600;
      border-radius: 4px;
      transition: all .4s;
      // text-align: center;
    }
    button:hover {
      background-color: #fff;
      color: rgb(113, 88, 255);
    }
  }
}
</style>
