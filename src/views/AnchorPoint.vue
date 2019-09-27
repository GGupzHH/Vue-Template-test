<template>
  <div class=''>
    <aside ref="aside">
      <ul>
        <li v-for="(item, index) in aside_list" :key="index" :class="!index ? 'active' : ''" @click="getActive($event, index)">{{ item }}</li>
      </ul>
    </aside>
  <main>
    <div class="box">
      <div class="box-child">按钮1
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <hr>
      </div>
      <div class="box-child">按钮2
        <br>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <br>
        <br>
      </div>
      <div class="box-child">按钮3
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br>
      </div>
      <div class="box-child">按钮4
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

      </div>
      <div class="box-child">按钮5
        <br><br><br><br><br>
      </div>
      <div class="box-child">按钮6</div>
      <div class="box-child">按钮6</div>
      <div class="box-child">按钮6</div>
    </div>
  </main>
  </div>
</template>

<script>

export default {
  data() {
    return {
      aside_list: ['按钮1', '按钮2','按钮3', '按钮4','按钮5', '按钮6','按钮7', '按钮8']
    }
  },
  methods: {
    getActive (e, index) {
      // e = e || window.event
      if (e.target.nodeName === 'LI') {
        document.querySelector('.active').className = ''
        e.target.className = 'active'
      }
      let boxChild = document.querySelectorAll('.box-child')
      let total = boxChild[index].offsetTop
      document.documentElement.scrollTop = total
      window.pageYOffset = total
    },
    // 防抖
    throttle (fn) {
      let on_off = true
      let that = this
      return function () {
        if (!on_off) return
        on_off = false
        setTimeout(() => {
          that.onScroll()
          on_off = true
        }, 500)
      }
    },
    onScroll () {
      // let scrolled = document.documentElement.scrollTop
      // console.log(scrolled)
      // console.log(e)
      let boxChildAll = document.querySelectorAll('.box-child')
      // console.log(boxChildAll)
      let minTop = boxChildAll[boxChildAll.length - 1].getBoundingClientRect().top
      let activeItem = 0
      // console.log(minTop)
      for (let i = 0; i < boxChildAll.length; i++) {
        // console.log(boxChildAll[i].getBoundingClientRect().top)
        if (boxChildAll[i].getBoundingClientRect().top < 0) {
          if (minTop > -boxChildAll[i].getBoundingClientRect().top) {
            activeItem = i
            minTop = minTop > -boxChildAll[i].getBoundingClientRect().top ? -boxChildAll[i].getBoundingClientRect().top : minTop
          }
        } else if (boxChildAll[i].getBoundingClientRect().top === 0) {
          activeItem = i
        } else {
          if (minTop > boxChildAll[i].getBoundingClientRect().top) {
            activeItem = i
            minTop = minTop > boxChildAll[i].getBoundingClientRect().top ? boxChildAll[i].getBoundingClientRect().top : minTop
          }
        }
        // boxChildAll[i].hiegh
      }
      console.log(activeItem)
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.throttle(this.onScroll))
    })
  }
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
  ul {
    li {
      display: block;
      width: 100%;
      line-height: 40px;
      background-color: pink;
      padding-left: 20px;
      box-sizing: border-box;
      color: #000;
    }
  }
  li.active {
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
