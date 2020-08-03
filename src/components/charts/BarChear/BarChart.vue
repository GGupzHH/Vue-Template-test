<template>
  <div class='bar-chart'>
    <div class="config-charts">
      <div class="echarts-wrapper">
        <div class="echarts" id="echarts"></div>
        <div class="echarts echarts-config-outside">
          <div class="clearfix">
            <label for="title" class="left">图表名称：</label>
            <div name="title" class="left title">{{ echartsName }}</div>
            <span class="el-icon-edit-outline" @click="showDialogVisible('echartsName', '请输入图表名称', '图表名称')"></span>
          </div>
          <div class="clearfix">
            <label for="title" class="left">横坐标名称（单位）：</label>
            <div name="title" class="left title">{{ echartsxAxisName }}</div>
            <span class="el-icon-edit-outline" @click="showDialogVisible('echartsxAxisName', '请输入横坐标名称（单位）', '横坐标名称（单位）')"></span>
          </div>
          <div class="clearfix">
            <label for="title" class="left">纵坐标名称（单位）：</label>
            <div name="title" class="left title">{{ echartsyAxisName }}</div>
            <span class="el-icon-edit-outline" @click="showDialogVisible('echartsyAxisName', '请输入纵坐标名称（单位）', '纵坐标名称（单位）')"></span>
          </div>
          <div class="clearfix">
            <label for="title" class="left"></label>
            <div name="title" class="left title">{{ echartsyAxisName }}</div>
            <span class="el-icon-edit-outline" @click="showDialogVisible('echartsyAxisName', '请输入纵坐标名称（单位）', '纵坐标名称（单位）')"></span>
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
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      :append-to-body="true"
      width="30%">
      <el-input v-model="echartsData" :placeholder="placeholder"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editEchartsConfig">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getBarchartData } from '../../../utils/load_table_charts'
export default {
  data () {
    return {
      dialogVisible: false,
      echartsName: '这是一个图标嘛',
      echartsxAxisName: '这是横坐标',
      echartsyAxisName: '这事纵坐标',
      tableData: [
        {"legend": "图例", "x1": "Mon", "x2": "Tue", "x3": "Wed", "x4": "Thu", "x5": "Fri", "x6": "Sat", "x7": "Sun"},
        {"legend": "赵伟", "x1": "120", "x2": "121", "x3": "105", "x4": "112", "x5": "121", "x6": "105", "x7": "105"},
        // {"legend": "李伟", "x1": "102", "x2": "111", "x3": "111", "x4": "121", "x5": "141", "x6": "111", "x7": "111"},
        // {"legend": "孙伟", "x1": "130", "x2": "131", "x3": "123", "x4": "141", "x5": "151", "x6": "123", "x7": "123"},
        // {"legend": "周伟", "x1": "111", "x2": "141", "x3": "132", "x4": "131", "x5": "111", "x6": "132", "x7": "132"},
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
      ],
      echartsData: '',
      placeholder: '',
      dialogTitle: '',
      chartsType: '',
      options: null
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
    showDialogVisible(type, p_text, title) {
      this.dialogVisible = true
      this.chartsType = type
      this.placeholder = p_text
      this.dialogTitle = title
      this.echartsData = this[type]
    },
    chartsChangeTableData() {
      // console.log(Barchart)
      let options = getBarchartData(this.tableData, this.columns, this.echartsName, this.echartsxAxisName, this.echartsyAxisName)
      console.log(options)
      this.setEcharts(options)
    },
    cellEditDone(newValue, oldValue, rowIndex, rowData, field) {
      this.tableData[rowIndex][field] = newValue
      this.chartsChangeTableData()
    },
    editEchartsConfig() {
      this[this.chartsType] = this.echartsData
      this.chartsChangeTableData()
      this.dialogVisible = false
    },
    getCharts(item) {
      this.drawer = true
      this.chartsChangeTableData()
    },
    setEcharts(options) {
      this.$nextTick(() => {
        let echartsDom = document.querySelector('#echarts')
        let myEcharts = this.$echarts.init(echartsDom)
        this.options = options
        myEcharts.setOption(options)
      })
    },
    addRow() {

    },
    addCol() {

    },
    laodApiData() {
      let series_data = []
      for (let i = 0; i < this.options.series.length; i++) {
        series_data.push({
          name: this.options.series[i].name,
          data: this.options.series[i].data
        })
      }
      let grid_data = {
        'x': 0,
        'y': 0,
        'w': 10,
        'h': 12,
        'i': Math.random(),
        'type': 'xian',
        header: this.options.title.text,
        echarts: {
          title: this.options.title.text,
          xAxis_data: this.options.xAxis.data,
          legend_data: this.options.legend.data,
          series_data
        }
      }
      return grid_data
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.chartsChangeTableData()
    })
  }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.bar-chart {
  width: 100%;
  .config-charts {
    min-height: 500px;
    width: 100%;
    flex: 1;
    .echarts-wrapper {
      display: flex;
      height: 400px;
      .echarts#echarts {
        border: 1px solid #000;
        margin-right: 8px;
      }
      .echarts {
        flex: 1;
      }
      .echarts-config-outside {
        margin-left: 8px;
      }
      .echarts-config-outside > div {
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        label {
          padding-left: 16px;
          color: #ababab;
        }
        div.title {
          color: #676767;
        }
        span {
          float: right;
          font-size: 16px;
          line-height: 50px;
          padding-right: 16px;
          color: #6f6f6fcc;
          cursor: pointer;
        }
        span:hover {
          color: #000;
        }
      }
    }
    .echarts-inside {
      width: 100%;
      height: 400px;
      border: 1px solid #000;
    }
  }
}
/deep/ .v-table-header {
  display: none;
}
</style>
