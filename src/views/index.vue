<template>
  <div class="index">
    <div class="aside">hahah</div>
    <div class="content">content</div>
  </div>
</template>

<script>
// import request from "../api/matches/index";
export default {
  data () {
    return {}
  },
  async created () {
    // get 
    let getres = await this.$http.get.prototype.login({
      name: 'asd'
    })
    console.log(getres)
    // this.$http.get.prototype.search({
    //   asdasd: 'sadasdasdasd'
    // })

    // post
    let postres = await this.$http.post.prototype.post1({
      name: 1111,
      str: [1, 2, 3]
    })
    console.log(postres)
    // request.matches();
    
    // console.log(this.$http.get.prototype)
    
    // this.$http.post.prototype.getitem({
    //   data: [1, 3, 4]
    // })
    // this.$http.post
  }
}
</script>

<style>
.index {
  height: 100%;
  min-height: 400px;
  flex: 1;
  background-color: blue;
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
  background-color: aquamarine;
}
</style>
