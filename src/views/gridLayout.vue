<template>
  <div class="gridLayout">
    <div class="gridLayout-wrapper">
      <!-- https://www.cnblogs.com/whoani/p/11377793.html 具体参数设置 -->
      <grid-layout
        :layout="testLayout"
        :col-num="50"
        :row-height="30"
        :is-draggable="true"
        :is-resizable="true"
        :vertical-compact="true"
        :margin="[10, 10]"
        :use-css-transforms="true"
        @layout-ready="layoutReadyEvent"
      >
        <grid-item
          v-for="(item, index) in testLayout"
          :key="index"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          @resize="resizeEvent"
          @resized="resizedEvent"
        >
          <div class="echarts-wrapper">
            <div class="header-wrapper">
              <span class="header-cen">{{ item.header }}</span>
            </div>
            <div class="echarts" :id="item.type"></div>
          </div>
        </grid-item>
      </grid-layout>
    </div>
  </div>
</template>
<script>
import VueGridLayout from 'vue-grid-layout'
import echarts from 'echarts'
var GridLayout = VueGridLayout.GridLayout
var GridItem = VueGridLayout.GridItem
export default {
  data () {
    return {
      // {
      //   i: "0", // 索引值 必填 唯一标识 不能重复
      //   h: 4,   // 高度   必填
      //   w: 7,   // 宽度   必填
      //   x: 2,   // x 轴距离 必填
      //   y: 0,   // y轴距离 必填
      //   minW:5 // 最小宽度 当 w的值小于minW时 采用minW的值
      //   minH:3 // 同上
      //   maxW:8 // 的最大宽度。如果w大于maxW，那么w将被设置为maxW。
      //   maxH:6 // 同上
      //   isDraggable:true // 单独控制这一个盒子是否可以拖动 未填写 继承父元素的 非必填
      //   isResizable:true // 单独控制这一个盒子是否可以调整大小 未填写 继承父元素的 非必填
      //   static:false // 这个盒子是静态的  不能被其他元素改变位置 会被覆盖在底部
      // }
      testLayout: [
        {
          'x': 0,
          'y': 0,
          'w': 10,
          'h': 10,
          'i': '1',
          'type': 'zhu',
          header: '这是一个柱状图'
        },
        {
          'x': 10,
          'y': 0,
          'w': 12,
          'h': 10,
          'i': '2',
          'type': 'xian',
          header: '这是一个折线图'
        },
        {
          'x': 22,
          'y': 0,
          'w': 8,
          'h': 8,
          'i': '3',
          'type': 'yuan',
          header: '这是一个饼图'
        },
        {
          'x': 30,
          'y': 0,
          'w': 10,
          'h': 12,
          'i': '4',
          'type': 'zhu',
          header: '这是一个zhuzhuangtu !!!!!!!1'
        }
      ],
      zhu: {
        title: {
          text: '折线图堆叠',
          textStyle: {
            color: '#fff'
          }
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLine: {
            lineStyle: {
              color: '#d8d9da',
              width: 1
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#d8d9da',
              width: 1
            }
          }
        },
        series: [{
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
          },
          data: [120, {
        value:52,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: '#FF9891'
              }, {
                offset: 1,
                color: '#FF3A31'
              }
            ])
          },
        }
      }, 150, 80, 70, 110, 130]
        }]
      },
      xian: {
        title: {
          text: '折线图堆叠',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
          textStyle: {
            color: '#ccc'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          axisLine: {
            lineStyle: {
              color: '#d8d9da',
              width: 1
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#d8d9da',
              width: 1
            }
          }
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      },
      yuan: {
        title: {
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },
      echartsMember: []
    }
  },
  components: {
    GridLayout,
    GridItem
  },
  computed: {},
  watch: {},
  beforeCreate () {},
  created () {},
  methods: {
    // 正在改变大小的时候适配
    resizeEvent (id, newH, newW, newHPx, newWPx) {
      this.resizeEcharts(id)
    },
    // 改变大小结束之后适配
    resizedEvent (id, newH, newW, newHPx, newWPx) {
      this.resizeEcharts(id)
    },
    resizeEcharts (id) {
      this.$nextTick(() => {
        // let echartsDom = document.querySelectorAll('.echarts')
        for (let i = 0; i < this.testLayout.length; i++) {
          if (this.testLayout[i].i === id) {
            this.echartsMember[i].resize()
          }
        }
      })
    },
    layoutReadyEvent () {
      // this.$nextTick(() => {
      //   for (let i = 0; i < this.echartsMember.length; i++) {
      //     this.echartsMember[i].resize()
      //   }
      // })
    }
  },
  mounted () {
    setTimeout(() => {
      this.$nextTick(() => {
        let echartsDom = document.querySelectorAll('.echarts')
        for (let i = 0; i < echartsDom.length; i++) {
          let myechart = this.$echarts.init(echartsDom[i])
          myechart.setOption(this[echartsDom[i].id])
          this.echartsMember.push(myechart)
        }
      })
    }, 0)
  }
}
</script>
<style lang='less' scoped>
.gridLayout {
  margin-top: 50px;
  background-color: #161719;
  height: calc(100% - 50px);
  .gridLayout-wrapper {
    background-color: #161719;
  }
  /deep/ .vue-grid-item {
    border: 1px solid #141414;
    background-color: #212124;
    .echarts-wrapper {
      .size(100%, 100%);
      .header-wrapper {
        .size(100%, 28px);
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        background-color: #212124;
        transition: all .2s;
        .header-cen {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          max-width: calc(100% - 38px);
          cursor: pointer;
          font-weight: 500;
          font-size: 14px;
          line-height: 1;
          color: #d8d9da;
        }
      }
      .header-wrapper:hover {
        background-color: #343436;
      }
      .echarts {
        width: calc(100% - 16px);
        height: calc(100% - 36px);
        margin: 0px 8px 8px;
      }
    }
  }
  /deep/ .vue-grid-item.vue-grid-placeholder {
    // background-color: ;
    opacity: 1;
    box-sizing: border-box;
    box-shadow: 0px 0px 8px 0px #1084ff;
    border: 1px solid #57a3f378;
    background-color: #1084ff42;
  }

  /deep/ .vue-resizable-handle::after {
    content: "";
    position: absolute;
    right: 3px;
    bottom: 3px;
    width: 5px;
    height: 5px;
    border-right: 2px solid rgba(0,0,0,.4);
    border-bottom: 2px solid rgba(0,0,0,.4);
    transition: all .2s;
  }
  /deep/ .vue-grid-item.cssTransforms:hover {
    .vue-resizable-handle::after {
      border-right: 2px solid #555;
      border-bottom: 2px solid #555;
    }
  }
}
//@import url(); 引入公共css类
</style>
