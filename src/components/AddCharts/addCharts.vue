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
              <div>
                <label for="title">图标名称: </label>
                <div name="title">这是一个图标嘛</div>
                <span class="el-icon-edit-outline" @click="showDialogVisible('echartsName')"></span>
              </div>
              <div>
                <label for="title">横坐标名称: </label>
                <div name="title">这是横坐标</div>
                <span class="el-icon-edit-outline" @click="showDialogVisible('echartsxAxisName')"></span>
              </div>
              <div>
                <label for="title">纵坐标名称: </label>
                <div name="title">这事纵坐标</div>
                <span class="el-icon-edit-outline" @click="showDialogVisible('echartsyAxisName')"></span>
              </div>
            </div>
          </div>
          <div class="echarts-inside">
            <v-table
              is-horizontal-resize
              style="width:100%; height: 100%;"
              :columns="columns"
              :height="400"
              :table-data="tableData"
              even-bg-color="#f4f4f4"
              row-hover-color="#eee"
              row-click-color="#edf7ff"
              :cell-edit-done="cellEditDone"
            ></v-table>
          </div>
        </div>
      </div>
      <div class="demo-drawer__footer">
        <el-button @click="cancelForm">取 消</el-button>
        <el-button type="primary" @click="successForm">确定</el-button>
      </div>
    </el-drawer>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <el-input v-model="echartsName" placeholder="请输入图表名字"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getBarchartData } from '../../utils/charts'
export default {
  data () {
    return {
      dialogVisible: false,
      form: {},
      direction: 'btt',
      drawer: false,
      echartsName: '',
      echartsxAxisName: '',
      echartsyAxisName: '',
      tableData: [
        {"legend": "赵伟", "x1": "110", "x2": "111", "x3": "105", "x4": "110", "x5": "111", "x6": "105", "x7": "105"},
        {"legend": "李伟", "x1": "110", "x2": "111", "x3": "111", "x4": "110", "x5": "111", "x6": "111", "x7": "111"},
        {"legend": "孙伟", "x1": "110", "x2": "111", "x3": "123", "x4": "110", "x5": "111", "x6": "123", "x7": "123"},
        {"legend": "周伟", "x1": "110", "x2": "111", "x3": "132", "x4": "110", "x5": "111", "x6": "132", "x7": "132"},
      ],
      columns: [
        {field: 'legend', title:'图例', width: 150, titleAlign: 'center',columnAlign:'center', isFrozen: true, isEdit: true, isResize: true},
        {field: 'x1', title: 'Mon', width: 120, titleAlign: 'center',columnAlign:'center', isEdit: true, isResize: true},
        {field: 'x2', title: 'Tue', width: 120, titleAlign: 'center',columnAlign:'center', isEdit: true, isResize: true},
        {field: 'x3', title: 'Wed', width: 120, titleAlign: 'center',columnAlign:'center', isEdit: true, isResize: true},
        {field: 'x4', title: 'Thu', width: 120, titleAlign: 'center',columnAlign:'center', isEdit: true, isResize: true},
        {field: 'x5', title: 'Fri', width: 120, titleAlign: 'center',columnAlign:'center', isEdit: true, isResize: true},
        {field: 'x6', title: 'Sat', width: 120, titleAlign: 'center',columnAlign:'center', isEdit: true, isResize: true},
        {field: 'x7', title: 'Sun', width: 120, titleAlign: 'center',columnAlign:'center', isEdit: true, isResize: true}
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
    showDialogVisible() {
      this.dialogVisible = true
    },
    chartsChangeTableData() {
      // console.log(Barchart)
      let options = getBarchartData(this.tableData, this.columns, this.echartsName, this.echartsxAxisName, this.echartsyAxisName)
      this.setEcharts(options)
    },
    cellEditDone(newValue, oldValue, rowIndex, rowData, field) {
      this.tableData[rowIndex][field] = newValue
      this.chartsChangeTableData()
    },
    getCharts(item) {
      this.drawer = true
      this.chartsChangeTableData()
    },
    handleClose() {
      this.drawer = false
    },
    cancelForm() {
      this.drawer = false
    },
    successForm() {

    },
    setEcharts(options) {
      this.$nextTick(() => {

        let echartsDom = document.querySelector('#echarts')
        let myEcharts = this.$echarts.init(echartsDom)
        myEcharts.setOption(options)
      })
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
/deep/ .el-drawer__header {
  margin-bottom: 16px;
}
</style>
