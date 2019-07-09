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
  created () {
    // get 
    this.$http.get.prototype.login({
      name: 'asd'
    })
    this.$http.get.prototype.search({
      asdasd: 'sadasdasdasd'
    })

    // post
    // this.$http.post.prototype.get1({
    //   name: 1111,
    //   str: [1, 2, 3]
    // })
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
