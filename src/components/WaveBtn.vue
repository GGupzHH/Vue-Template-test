<template>
  <div>
    <div class="button" @click="wavesEffect">
      <p>{{ btn_text }}</p>
      <svg class="wavesbtn" ref="wavesbtn" version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
      </svg>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      btn_text: '按钮'
    }
  },
  methods: {
    wavesEffect(e) {
      e = e || window.event;
      // getBoundingClientRect 获取当期元素在页面中的 上下左右的位置
      // rectObject.top：      元素上边到视窗上边的距离;
      // rectObject.right：    元素右边到视窗左边的距离;
      // rectObject.bottom：   元素下边到视窗上边的距离;
      // rectObject.left：     元素左边到视窗左边的距离;
      // rectObject.width：    是元素自身的宽
      // rectObject.height     是元素自身的高
      let position = e.target.getBoundingClientRect();
      //  获取<html></html>标签
      let doc = document.documentElement;
      // 创建一个circle  
      let c = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      let top = e.pageY - (position.top + window.pageYOffset) - doc.clientTop;
      let left = e.pageX - (position.left + window.pageXOffset) - doc.clientLeft;
      let dur = 7050;
      console.log(left)
      console.log(top)
      console.dir(this.$refs.wavesbtn)
      this.$refs.wavesbtn.appendChild(c)
      c.setAttribute('cx', left)
      c.setAttribute('cy', top)
      c.setAttribute('r', 1)
      c.setAttribute('fill', 'red')
      setTimeout(() => {
        c.style = `
        transition-duration: 10s;
        transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        opacity:0;`;
        c.setAttribute('r', 150)
        // this.$refs.wavesbtn.innerHTML = `<circle cx=${left} cy=${top} r="100" stroke="blue" stroke-width="2" fill="red"></circle>`
        setTimeout(() => {
          this.$refs.wavesbtn.removeChild(c);
          console.log('删除', c)
        }, dur);
      }, 10);
    }
  }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
svg {
  width: 100%;
  height: 100%;
}
</style>
