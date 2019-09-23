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
    <div class="button" @click="wavesEffect">
      <p>水波纹效果</p>
      <div class="wavesbtn" ref="wavesbtn"></div>
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
    getImgFileList (FileList) {
      console.log(FileList)
    },
    wavesEffect(e) {
      e = e || window.event;
      let position = e.target.getBoundingClientRect();
      let doc = document.documentElement;
      let div = document.createElement("div");
      div.className = "effect";
      this.$refs.wavesbtn.appendChild(div);

      let top = e.pageY - (position.top + window.pageYOffset) - doc.clientTop;
      let left =
        e.pageX - (position.left + window.pageXOffset) - doc.clientLeft;
      let dur = 750;
      div.style = `
        left:${left}px;
        top:${top}px;
        transform:scale(20);
        transition-duration: 1s;
        transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);`;
      setTimeout(() => {
        div.style = `
        transition-duration: 1s;
        transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        opacity:0;
        left:${left}px;
        top:${top}px;
        transform:scale(20);`;
        setTimeout(() => {
          this.$refs.wavesbtn.removeChild(div);
        }, dur);
      }, 100);
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
}
p {
  width: 100%;
  line-height: 48px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}

.wavesbtn {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
<style>
.effect {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: all 0.7s ease-out;
  background: #ff83fa;
  transform: scale(0);
  transition-property: transform, opacity, -webkit-transform;
  opacity: 1;
  pointer-events: none;
}
</style>
