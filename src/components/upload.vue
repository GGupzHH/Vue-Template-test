<template>
  <div class='upload'>
    <div class="imgList">
      <div v-for="(item, index) in Imgpath" :key="index">
        <img :src="item" alt="">
        <span @click="removeFile($event, index)">+</span>
      </div>
    </div>
    <form id="formData">
       <div class="upload_box">
        <input type="file" @change="inputFile">
        <span @click="addFile">+</span>
      </div>
    </form>
    <button @click="upload_btn">保存</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      Imgpath: [],
      Imgfile: []
    }
  },
  created () {
  },
  methods: {
    upload_btn () {
      console.log(this.Imgfile)
      this.$emit('getImgFileList', this.Imgfile)
    },
    removeFile ($event, index) {
      this.Imgpath.splice(index, 1)
      this.Imgfile.splice(index, 1)
    },
    addFile ($event) {
      $event.path[0].previousSibling.dispatchEvent(new MouseEvent('click'))
    },
    inputFile ($enevt) {
      let that = this
      let file = $enevt.path[0].files[0]
      let imgSrc
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function() {
        imgSrc = this.result
        that.Imgpath.push(imgSrc)
        that.Imgfile.push($enevt.path[0].files[0])
        $enevt.path[0].value = null
      }
    }
  }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.imgList {
  height: 150px;
  div {
    width: 150px;
    float: left;
    height: 150px;
    border: 1px dotted #ccc;
    box-sizing: border-box;
    position: relative;
    img {
      width: 150px;
      height: 150px;
    }
    span {
      position: absolute;
      top: 0px;
      width: 100%;
      height: 100%;
      line-height: 150px;
      text-align: center;
      font-size: 80px;
      cursor: pointer;
      transform:rotate(45deg);
      display: none;
    }
  }
  div:hover {
    span {
      display: block;
    }
  }
}
.upload_box {
  width: 150px;
  height: 150px;
  border: 1px dotted #ccc;
  box-sizing: border-box;
  position: relative;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: .8;
  }
  input {
    display: none;
  }
  span {
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: 150px;
    text-align: center;
    font-size: 80px;
    cursor: pointer;
  }
}
</style>
