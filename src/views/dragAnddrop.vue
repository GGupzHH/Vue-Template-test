<template>
  <div class='dragAnddrop'>
    <div class="cen-wrapper">
      <div class="sidebar-wrapper">
        <ul>
          <li v-for="(item, index) in sideList" :key="index">{{ item }}</li>
        </ul>
      </div>
      <div class="list-wrapper">
        <ul class="ul-header clearfix">
          <li class="drop"></li>
          <li class="left" v-for="(item, index) in ul_header_list" :key="index">{{ item }}</li>
        </ul>
        <ul class="ul-cen">
          <li v-for="(item, index) in list" :key="index" class="clearfix">
            <div class="drop">
              <p class="dropBtn" @mousedown="onMousedown($event, item)"></p>
            </div>
            <div class="left" v-for="(key, indexs) in Object.keys(item)" :key="indexs">{{ item[key] }}</div>
          </li>
        </ul>
      </div>
      <div class="drop-wrapper clearfix" ref="drops" @mouseup="onMouseup">
        <p class="left">{{ itemUser.name }}</p>
        <p class="left">{{ itemUser.age }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sideList: [
        '全部',
        'test',
        '信永中和'
      ],
      list: [
        {
          name: '张三',
          age: 12
        },
        {
          name: '李四',
          age: 18
        },
        {
          name: '王五',
          age: 22
        },
        {
          name: '赵六',
          age: 30
        }
      ],
      ul_header_list: [
        '姓名',
        '年龄'
      ],
      itemUser: {
        name: '',
        age: ''
      }
    }
  },
  components: {},
  computed: {},
  watch: {},
  beforeCreate () {
  },
  created () {
  },
  methods: {
    onMousedown (e, item) {
      console.log(e)
      console.log(item)
      this.itemUser = item
      let odiv = e.target
      let disX = e.clientX - odiv.offsetLeft
      let disY = e.clientY - odiv.offsetTop
      document.onmousemove = e => {
        // 鼠标按下并移动的事件
        // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX
        let top = e.clientY - disY
        // 绑定元素位置到positionX和positionY上面
        this.positionX = top
        this.positionY = left
        // 移动当前元素
        this.$refs.drops.style.display = 'flex'
        this.$refs.drops.style.left = left - 55 + 'px'
        this.$refs.drops.style.top = top - 18 + 'px'
        odiv.style.left = left + 'px'
        odiv.style.top = top + 'px'
      }
      document.onmouseup = (e) => {
        document.onmousemove = null
        document.onmouseup = null
      }
    },
    onMouseup () {
      this.$refs.drops.style.display = 'none'
      console.log(123)
    }
  },
  mounted () {
  }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.dragAnddrop {
  overflow: hidden;
  .cen-wrapper {
    width: 60%;
    height: 600px;
    background-color: #fff;
    border-radius: 5px;
    margin: 100px auto 0px;
    display: flex;
    box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.1);
    .sidebar-wrapper {
      width: 300px;
      margin: 50px 0px;
      border-right: 1px solid #e2e2e2;
      ul {
        margin: 20px 20px;
        border-top: 1px solid #e2e2e2;
        li {
          height: 40px;
          line-height: 40px;
          padding-left: 20px;
          box-sizing: border-box;
          background-color: #fff;
          transition: all .2s;
          color: rgba(0, 0, 0, 0.87);
          font-size: 14px;
          cursor: pointer;
        }
        li:hover {
          background-color: rgba(237, 239, 243, 0.5);
        }
      }
    }
    .list-wrapper {
      flex: 1;
      margin: 50px 0px;
      .ul-header {
        display: flex;
        height: 40px;
        line-height: 40px;
        .drop {
          flex: 1;
        }
        li {
          flex: 6;
          padding-left: 20px;
          font-size: 14px;
          font-weight: 600;
        }
      }
      .ul-cen {
        height: 40px;
        line-height: 40px;
        li {
          display: flex;
          background-color: #fff;
          transition: all .2s;
          div.drop {
            flex: 1;
            padding-top: 10px;
            .dropBtn {
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background-color: #ccc;
              cursor: pointer;
              display: none;
            }
          }
          div {
            flex: 6;
            padding-left: 20px;
          }
        }
        li:hover {
          background-color: rgba(237, 239, 243, 0.5);
          div.drop {
            .dropBtn {
              display: block;
            }
          }
        }
      }
    }
  }
  .drop-wrapper {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 120px;
    height: 40px;
    background-color: #fff;
    display: none;
    box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    cursor: grabbing;
    p {
      flex: 1;
      line-height: 40px;
      font-size: 14px;
      text-align: center;
    }
    p:first-child {
      font-weight: 600;
      margin-left: 12px;
    }
    p:last-child {
      margin-right: 12px;
    }
  }
}
</style>
