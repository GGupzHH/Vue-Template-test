<template>
  <div class='echarts'>
    <div v-for="(item, index) in dataList" :key="index" :id="'echarts-' + index" style="margin-bottom: 50px;" class="echarts-div"></div>
    <div :key="index" id="echartsAdaptation" style="margin-bottom: 50px;" class="echarts-div"></div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      dataList: [
        {
          title: {
            text: '折线图堆叠'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
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
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
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
        }
      ]
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
    getEcharts () {
      this.dataList.forEach((item, index) => {
        console.log(item)
        let myechart = this.$echarts.init(document.querySelector(`#echarts-${index}`))
        myechart.setOption(item)
      })
    },
    AdaptationEcharts () {
      let myechart = this.$echarts.init(document.querySelector(`#echartsAdaptation`))
      myechart.setOption(this.dataList[0])
      window.addEventListener('resize', () => myechart.resize())
    }
  },
  mounted () {
    this.getEcharts()
    this.AdaptationEcharts()
  }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.echarts {
  box-sizing: border-box;
  padding-top: 50px;
}
.echarts-div {
  width: 100%;
  height: 400px;
}
</style>
