<template>
  <div class='addCharts'>
    <el-tabs type="border-card">
      <el-tab-pane label="柱状图">
        <div class="charts-wrapper">
          <div class="charts-item" @click="getCharts">
            <p>简易柱状图</p>
            <img src="https://echarts-www.cdn.bcebos.com/examples/data/thumb/bar-background.jpg?_v_=20200710_1" alt="">
          </div>
          <div class="charts-item">
            <p>简易柱状图</p>
            <img src="https://echarts-www.cdn.bcebos.com/examples/data/thumb/bar-y-category-stack.jpg?_v_=20200710_1" alt="">
          </div>
          <div class="charts-item">
            <p>简易柱状图</p>
            <img src="https://echarts-www.cdn.bcebos.com/examples/data/thumb/dataset-simple0.jpg?_v_=20200710_1" alt="">
          </div>
          <div class="charts-item">
            <p>简易柱状图</p>
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
    <el-drawer
      title="定制一个新的图表"
      :visible.sync="drawer"
      :direction="direction"
      size="100%"
      :before-close="handleClose">
      <div class="demo-drawer__content">
        <div class="config-charts">
          <div class="echarts-wrapper">
            <div class="echarts" id="echarts"></div>
            <div class="echarts echarts-config-outside">
              <el-input v-model="echartsName" placeholder="请输入图表名字"></el-input>
              <el-input v-model="echartsxAxisName" placeholder="请输入横坐标名字"></el-input>
              <el-input v-model="echartsyAxisName" placeholder="请输入纵坐标名字"></el-input>
            </div>
          </div>
          <div class="echarts-inside">
            <v-table
              :columns="columns"
              :table-data="tableData"
              even-bg-color="#f4f4f4"
              row-hover-color="#eee"
              row-click-color="#edf7ff"
            ></v-table>
          </div>
        </div>
      </div>
      <div class="demo-drawer__footer">
        <el-button @click="cancelForm">取 消</el-button>
        <el-button type="primary" @click="successForm">确定</el-button>
      </div>
    </el-drawer>
  </div>
</template>

<script>

export default {
  data () {
    return {
      form: {},
      direction: 'btt',
      drawer: false,
      echartsName: '',
      echartsxAxisName: '',
      echartsyAxisName: '',
      tableData: [
        {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
        {"name":"李伟","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
        {"name":"孙伟","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
        {"name":"周伟","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
        {"name":"吴伟","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}
      ],
      columns: [
        {field: 'name', title:'图例', width: 150, titleAlign: 'center',columnAlign:'center', isFrozen: true},
        {field: 'tel', title: '一月', width: 280, titleAlign: 'center',columnAlign:'center'},
        {field: 'hobby', title: '二月', width: 380, titleAlign: 'center',columnAlign:'center'},
        {field: 'address', title: '三月', width: 430, titleAlign: 'center',columnAlign:'left'}
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
    getCharts(item) {
      console.log()
      this.drawer = true

    },
    handleClose() {
      this.drawer = false
    },
    cancelForm() {
      this.drawer = false
    },
    successForm() {

    }
  },
  mounted () {
  }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.addCharts {
  margin-top: 50px;
  height: calc(100% - 50px);
  background-color: #fff;
  /deep/ .el-tabs {
    width: 80%;
    height: calc(100% - 60px);
    margin: 30px auto;
    .el-tabs__content {
      height: calc(100% - 39px);
      overflow: auto;
      .charts-wrapper {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .charts-item {
          // flex: 1;
          width: calc((100% - 45px) / 4);
          border: 1px solid #ededed;
          text-align: center;
          border-radius: 5px;
          transition: all .2s;
          margin-right: 15px;
          margin-bottom: 15px;
          p {
            width: 100%;
            height: 36px;
            line-height: 36px;
            text-align: center;
            color: #a1a1a1;
            font-size: 14px;
            transition: all .2s;
            background-color: #f9f9f9;
            border-radius: 5px 5px 0px 0px;
          }
          img {
            width: 92%;
            padding: 8px;
            text-align: center;
          }
        }
        .charts-item:nth-child(4n) {
          margin-right: 0px;
        }
        .charts-item:hover {
          border: 1px solid #b3b3b3;
          cursor: pointer;
          p {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
/deep/ .demo-drawer__content {
  padding: 10px;
  height: calc(100% - 60px);
  display: flex;
  overflow: auto;
  .config-charts {
    min-height: 500px;
    width: 100%;
    flex: 1;
    .echarts-wrapper {
      display: flex;
      height: 400px;
      .echarts#echarts {
        border: 1px solid #000;
      }
      .echarts {
        flex: 1;
      }
    }
    .echarts-inside {
      width: 100%;
      height: 400px;
      border: 1px solid #000;
    }
  }
}
/deep/ .el-drawer__body {
  height: calc(100% - 75px);
}
/deep/ .demo-drawer__footer {
  // margin-top: 32px;
  width: 50%;
  margin: 0 auto;
  display: flex;
  padding: 10px;
  button {
    flex: 1;
  }
}
/deep/ .el-dialog__wrapper {
  overflow: hidden;
  height: 100%;
}
</style>
