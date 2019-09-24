<template>
  <div class="index">
    <div class="aside" v-cloak>
      <router-link to="/inputModel">inputModel</router-link>
      <br>
      <router-link to="/upload">upload</router-link>
      <br>
      <router-link to="/eventBus">EventBus</router-link>
    </div>
    <div class="content">
      <div v-cloak>
        <p>案发代码</p>
        <img src="../assets/微信截图_20190903183950.png" alt="">
        <p>
          当我们网速很慢的时候， 在页面的HTML中是可以看到模板语法的， 这样就显的你的网页很low
        </p>
        <p>解决方案</p>
        <p>HTML</p>
        <img src="../assets/微信截图_20190903184158.png" alt="">
        <p>CSS</p>
        <code>
          [v-cloak] {<br>
          &nbsp;&nbsp;display: none;<br>
          }
        </code>
      </div>
    </div>
    <div>
      <div class="button" @click="wavesEffect">
        <p>水波纹效果</p>
        <svg class="wavesbtn" ref="wavesbtn" version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
// import request from "../api/matches/index";
export default {
  data () {
    return {
      name: 'vueprojectcatalog'
    }
  },
  components: {
  },
  async created () {
    console.log(this.$type)
    console.log(this.$type.isNull(undefined))
    console.log(this.$type.isNull(null))
    console.log(this.$type.isArray([]))
    console.log(this.$type.isArray({}))
    console.log(this.$http)
    // get
    let getres = await this.$http.get.prototype.login(`/a`, {
      name: 'asd'
    })
    console.log(getres)

    // post
    let postres = await this.$http.post.prototype.login(`/a`, {
      name: 1111,
      str: [1, 2, 3]
    })
    console.log(postres)
  },
  methods: {
    btns () {
      console.log(1)
    },
    getImgFileList (FileList) {
      console.log(FileList)
    },
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
      // 创建一个circle  因为svg属于XML   使用HTML的添加方法是浏览器是不渲染的   所以要使用对应的API
      let c = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      // 创建的circle多久之后删除元素
      let dur = 7500;
      this.$refs.wavesbtn.appendChild(c)
      // scale 放大 20 倍
      // transition-duration  过渡效果持续的时间
      // transition-timing-function 定义过渡曲线
      c.setAttribute('cx', e.offsetX)
      c.setAttribute('cy', e.offsetY)
      c.setAttribute('r', 1)
      c.setAttribute('fill', 'rgba(255,255,255,1)')
      // let div = document.querySelector('.circle')
      // div.style = `
      //   transform:scale(20);
      //   transition-duration: 1s;
      //   transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);`;

      setTimeout(() => {
        c.style = `
        transition-duration: .4s;
        transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        opacity:0;`;
        c.setAttribute('r', 150)
        // this.$refs.wavesbtn.innerHTML = `<circle cx=${left} cy=${top} r="100" stroke="blue" stroke-width="2" fill="red"></circle>`
        setTimeout(() => {
          this.$refs.wavesbtn.removeChild(c);
        }, dur);
      }, 10);
    }
  }
}
</script>

<style lang="less" scoped>
.index {
  height: 100%;
  min-height: 400px;
  flex: 1;
  /* background-color: blue; */
  margin: 50px !important;
  display: flex;
  .aside {
    // width: 100px;
    height: 100%;
    background-color: brown;
  }
}
.button {
  width: 150px;
  height: 50px;
  border-radius: 10px;
  line-height: 50px;
  text-align: center;
  border: 1px solid red;
  position: relative;
  overflow: hidden;
  background-color: aquamarine;
}
p {
  width: 100%;
  line-height: 48px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}

// .wavesbtn {
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   left: 0;
//   top: 0;
// }
</style>
<style>
svg {
  width: 100%;
  height: 100%;
}
</style>
