<template>
  <div class='charts-tab-pane'>
    <el-tabs type="border-card">
      <el-tab-pane label="柱状图">
        <div class="charts-wrapper">
          <div class="charts-item" @click="getBaseBar('barChart')">
            <p>简易柱状图</p>
            <img src="https://echarts-www.cdn.bcebos.com/examples/data/thumb/bar-background.jpg?_v_=20200710_1" alt="">
          </div>
          <div class="charts-item">
            <p>柱状堆叠图</p>
            <img src="https://echarts-www.cdn.bcebos.com/examples/data/thumb/bar-y-category-stack.jpg?_v_=20200710_1" alt="">
          </div>
          <div class="charts-item" @click="getBaseBar('barOrChart')">
            <p>多条目柱状图</p>
            <img src="https://echarts-www.cdn.bcebos.com/examples/data/thumb/dataset-simple0.jpg?_v_=20200710_1" alt="">
          </div>
          <div class="charts-item">
            <p>柱状折线图</p>
            <img src="https://echarts-www.cdn.bcebos.com/examples/data/thumb/dynamic-data.jpg?_v_=20200710_1" alt="">
          </div>
          <div class="charts-item">
            <p>简易柱状图</p>
            <img src="https://echarts-www.cdn.bcebos.com/examples/data/thumb/dynamic-data.jpg?_v_=20200710_1" alt="">
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="折线图">
        <div class="charts-wrapper">
          <div class="charts-item">
            <p>简易柱状图</p>
            <img src="https://echarts-www.cdn.bcebos.com/examples/data/thumb/line-simple.jpg?_v_=20200710_1" alt="">
          </div>
          <div class="charts-item">
            <p>简易柱状图</p>
            <img src="https://echarts-www.cdn.bcebos.com/examples/data/thumb/line-stack.jpg?_v_=20200710_1" alt="">
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="饼图">
        <div class="charts-wrapper">
          <div class="charts-item">
            <p>简易柱状图</p>
            <img src="https://echarts-www.cdn.bcebos.com/examples/data/thumb/pie-legend.jpg?_v_=20200710_1" alt="">
          </div>
          <div class="charts-item">
            <p>简易柱状图</p>
            <img src="https://echarts-www.cdn.bcebos.com/examples/data/thumb/pie-doughnut.jpg?_v_=20200710_1" alt="">
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="雷达图">
        <div class="charts-wrapper">
          <div class="charts-item">
            <p>简易柱状图</p>
            <img src="https://echarts-www.cdn.bcebos.com/examples/data/thumb/radar.jpg?_v_=20200710_1" alt="">
          </div>
          <div class="charts-item">
            <p>简易柱状图</p>
            <img src="https://echarts-www.cdn.bcebos.com/examples/data/thumb/radar-aqi.jpg?_v_=20200710_1" alt="">
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="散点图">
        <div class="charts-wrapper">
          <div class="charts-item">
            <p>简易柱状图</p>
            <img src="https://echarts-www.cdn.bcebos.com/examples/data/thumb/scatter-clustering-process.jpg?_v_=20200710_1" alt="">
          </div>
          <div class="charts-item">
            <p>简易柱状图</p>
            <img src="https://echarts-www.cdn.bcebos.com/examples/data/thumb/scatter-effect.jpg?_v_=20200710_1" alt="">
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="仪表盘">
        <div class="charts-wrapper">
          <div class="charts-item">
            <p>简易柱状图</p>
            <img src="https://echarts-www.cdn.bcebos.com/examples/data/thumb/gauge.jpg?_v_=20200710_1" alt="">
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

export default {
  data () {
    return {

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
    getBaseBar (type) {
      this.$emit('getBaseBar', type)
    }
  },
  mounted () {
  }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>
