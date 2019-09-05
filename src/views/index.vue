<template>
  <div class="index">
    <div class="aside" v-cloak>
      {{ name }}
      <router-link to="/inputModel">inputModel</router-link>
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
      <upload @getImgFileList="getImgFileList"/>
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
    upload: () => import('../components/upload')
  },
  async created () {
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
    getImgFileList (FileList) {
      console.log(FileList)
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
</style>
