<template>
  <div class=''>
    <aside ref="aside">
      <ul>
        <li v-for="(item, index) in aside_list" :key="index" :class="item.active ? 'active' : ''" @click="getActive(index)">
          <a :href=" '#anchor-' + index">{{ item.name }}</a>
        </li>
      </ul>
    </aside>
  <main>
    <div class="box">
      <div class="box-child" id="anchor-0">按钮1
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <hr>
      </div>
      <div class="box-child" id="anchor-1">按钮2
        <br>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <br>
        <br>
      </div>
      <div class="box-child" id="anchor-2">按钮3
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br>
      </div>
      <div class="box-child" id="anchor-3">按钮4
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

      </div>
      <div class="box-child">按钮5
        <br><br><br><br><br>
      </div>
      <div class="box-child">按钮6</div>
      <div class="box-child">按钮6</div>
      <div class="box-child">
        <router-link to="/">sssssssssssssssss</router-link>
      </div>
    </div>
  </main>
  </div>
</template>

<script>

export default {
  data() {
    return {
      aside_list: [{
        name: '按钮1',
        active: 1
      }, {
        name: '按钮2',
        active: 0
      }, {
        name: '按钮3',
        active: 0
      }, {
        name: '按钮4',
        active: 0
      }, {
        name: '按钮5',
        active: 0
      }, {
        name: '按钮6',
        active: 0
      }]
    }
  },
  methods: {
    // getActive (e, index) {
    //   // e = e || window.event
    //   if (e.target.nodeName === 'LI') {
    //     document.querySelector('.active').className = ''
    //     e.target.className = 'active'
    //   }
    //   let boxChild = document.querySelectorAll('.box-child')
    //   let total = boxChild[index].offsetTop
    //   document.documentElement.scrollTop = total
    //   window.pageYOffset = total
    // },
    mapFn (v) {
      return {
        name: v.name,
        active: 0
      }
    },
    getActive (index) {
      let newAside_list = this.aside_list.map(this.mapFn)
      newAside_list[index].active = 1
      this.aside_list = newAside_list
    },
    //  需要改成防抖
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
    // 要一个负数一面最的
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
        if (boxChildAll[i].getBoundingClientRect().top <= 0) {
          activeItem = i
        }
        // console.log(boxChildAll[i].getBoundingClientRect().top)
        // if (boxChildAll[i].getBoundingClientRect().top < 0) {
        //   if (minTop > -boxChildAll[i].getBoundingClientRect().top) {
        //     activeItem = i
        //     minTop = minTop > -boxChildAll[i].getBoundingClientRect().top ? -boxChildAll[i].getBoundingClientRect().top : minTop
        //   }
        // } else if (boxChildAll[i].getBoundingClientRect().top === 0) {
        //   activeItem = i
        // } else {
        //   if (minTop > boxChildAll[i].getBoundingClientRect().top) {
        //     activeItem = i
        //     minTop = minTop > boxChildAll[i].getBoundingClientRect().top ? boxChildAll[i].getBoundingClientRect().top : minTop
        //   }
        // }
        // boxChildAll[i].hiegh
      }
      console.log(activeItem)
      this.getActive(activeItem)
    }
  },
  mounted() {
    this.$nextTick(() => {
      // window.addEventListener('scroll', this.throttle(this.onScroll))
      window.addEventListener('scroll', this.onScroll)
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
      a {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 20px 0 0 20px;
      }
    }
  }
  li.active > a{
    color: aqua;
    background-color: rgb(255, 154, 22);
        // border-radius: 50% 0 0 50%;
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
