<template>
  <div class="index">
    <div class="aside" v-cloak>{{ name }}</div>
    <div class="content">
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

<style>
.index {
  height: 100%;
  min-height: 400px;
  flex: 1;
  /* background-color: blue; */
  margin: 50px !important;
  display: flex;
}
.index .aside {
  width: 100px;
  height: 100%;
  background-color: brown;
}
.index .content {
  height: 100%;
  flex: 1;
  /* background-color: aquamarine; */
}
</style>
