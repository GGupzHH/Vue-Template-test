<template>
  <div class="index">
    <div class="aside" v-cloak>
      <router-link to="/inputModel">inputModel</router-link>
      <br>
      <router-link to="/upload">upload</router-link>
      <br>
      <router-link to="/eventBus">EventBus</router-link>
      <br>
      <router-link to="/anchorPoint">AnchorPoint</router-link>
      <br>
      <router-link to="/AnchorPoint-2">AnchorPoint-2</router-link>
      <br>
      <router-link to="/testChart">testChart</router-link>
      <br>
      <router-link to="/dragAnddrop">dragAnddrop</router-link>
      <br>
      <router-link to="/gridLayout">gridLayout</router-link>
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
      <div class="wave-btn">
        <WaveBtn
          class="wavesbtn"
          btn_text = "按钮asasdasdasdasdaasdasdsdasd"
          duration = '.4'
          wave_bg = '#1395fd'
          wave_r = '200px'
        ></WaveBtn>
      </div>
      <div>
        <p>Vuex</p>
        <span>{{ $store.state.count }}</span>
        <span>{{ count }}</span>
        <span>{{ names }}</span>
        <span @click="addCount(10)">+</span>
        <span @click="reduceCount(1)">-</span>
        <span @click="actionsAddCount('异步')">异步</span>
        <p>getters</p>
        <!-- getters 相当于计算属性  对state的数据进行二次处理 -->
        <span>{{ $store.getters.devCount }}</span><br>
        <!-- getters 二次接收 -->
        <span>{{ $store.getters.devCount_ }}</span><br>
        <!-- getters 通过方法访问 -->
        <span>{{ $store.getters.devCount_fn(2) }}</span><br>
      </div>
      <div class="newWaveBtn">
      </div>
    </div>
  </div>
</template>

<script>
// 接收vuex 中的所有对象 解构到mapState   mapState中是vuex中state中保存的数据
import { mapState } from 'vuex'
// mapState 相当于局部的去使用vuex中state的数据
export default {
  data () {
    return {
      name: 'vueprojectcatalog'
    }
  },
  computed: {
    // 展开运算符将mapState函数返回的vuex中state保存的数据放到局部的计算属性中 这样就可以局部的使用vuex中定义的state
    // 好处： 减少vuex state中定义数据太多
    ...mapState({
      'count': strat => {
        console.log(strat)
        return strat.count + '~'
      }
    }),
    // -----计算属性对应的函数不能使用箭头函数  箭头函数没有this 就拿不到vm实例
    names: function () {
      console.log(this.name)

      return this.name + '---------'
    }
  },
  components: {
    // wavesbtn: () => import('../components/WaveBtn')
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
    actionsAddCount (n) {
      this.$store.dispatch('actionsAddCount', n)
    },
    reduceCount (n) {
      this.$store.commit('reduceCount', n)
    },
    addCount (n) {
      this.$store.commit('addCount', n)
    },
    btns () {
      console.log(1)
    },
    getImgFileList (FileList) {
      console.log(FileList)
    }
  }
}
</script>

<style lang="less" scoped>
.index {
  height: 100%;
  padding-top: 50px;
  box-sizing: border-box;
  min-height: 400px;
  flex: 1;
  display: flex;
  .aside {
    // width: 100px;
    height: 100%;
    background-color: brown;
  }
}
.wave-btn {
  width: 150px;
  height: 100px;
  background-color: pink;
  border-radius: 30px;
  overflow: hidden;
  transition: all .2s;
}
.wave-btn:hover {
  background-color: red;
}
</style>
