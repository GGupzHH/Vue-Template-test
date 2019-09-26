<template>
  <div class=''>
    <aside ref="aside" @click="getActive">
      <a href="#miao" class="active">miao</a>
      <a href="#miao1">miao1</a>
      <a href="#miao2">miao2</a>
      <a href="#miao3">miao3</a>
      <a href="#miao4">miao4</a>
      <a href="#miao5">miao5</a>
    </aside>
  <main>
    <div class="box">
      <div class="box-child" id="miao">miao</div>
      <div class="box-child" id="miao1">miao1</div>
      <div class="box-child" id="miao2">miao2</div>
      <div class="box-child" id="miao3">miao3</div>
      <div class="box-child" id="miao4">miao4</div>
      <div class="box-child" id="miao5">miao5</div>
    </div>
  </main>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  },
  methods: {
    getActive (e) {
      e = e || window.event
      if (e.target.nodeName === 'A') {
        document.querySelector('.active').className = ''
        e.target.className = 'active'
      }
      console.dir(e.target)
      console.log(document.querySelector('.active'))
      
    }
  },
  mounted() {
    console.log(this.$refs)
  },
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
aside {
  width: 300px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  box-sizing: border-box;
  padding-top: 50px;
  z-index: 1;
  background-color: #fff;
  color: rgb(253, 175, 175);
  overflow: auto;
  a {
    display: block;
    width: 100%;
    line-height: 40px;
    background-color: pink;
    padding-left: 20px;
    box-sizing: border-box;
  }
  a.active {
    color: aqua;
  }
}
main {
  box-sizing: border-box;
  padding-left: 300px;
  // padding-top: 50px;
  .box {
    margin-top: 50px;
    div.box-child {
      height: 400px;
      background-color: #6e78ff;
      margin-bottom: 25px;
    }
    div.box-child {
      padding-top: 50px;
      margin-top: -50px;
    }
  }
}
</style>
