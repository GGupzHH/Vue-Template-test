<template>
  <div class='addCharts'>
    <tab-pane
      @getBaseBar="getCharts"
    >
    </tab-pane>
    <el-drawer
      title="定制一个新的图表"
      :visible.sync="drawer"
      :direction="direction"
      size="100%"
      :before-close="handleClose">
      <div class="demo-drawer__content">
        <Bar-chart ref="barChart" v-if="chartsID === 'barChart'"></Bar-chart>
        <Bar-or-chart ref="barOrChart" v-if="chartsID === 'barOrChart'"></Bar-or-chart>
      </div>
      <div class="demo-drawer__footer">
        <el-button @click="cancelForm">取 消</el-button>
        <el-button type="primary" @click="successForm">确定</el-button>
      </div>
    </el-drawer>
  </div>
</template>

<script>
// import { getBarchartData } from '../../utils/load_table_charts'
import BarChart from '../charts/BarChear/BarChart.vue'
import BarOrChart from '../charts/BarChear/BarOrChart.vue'
import tabPane from './tab-pane.vue'
export default {
  data () {
    return {
      direction: 'btt',
      drawer: false,
      chartsID: ''
    }
  },
  components: {
    tabPane,
    BarChart,
    BarOrChart
  },
  beforeCreate () {
  },
  created () {

  },
  methods: {
    getCharts (item) {
      this.chartsID = item
      this.drawer = true
    },
    handleClose () {
      this.drawer = false
    },
    cancelForm () {
      this.drawer = false
    },
    successForm () {
      this.$router.push({
        name: 'gridLayout',
        params: {
          data: this.$refs[this.chartsID].laodApiData()
        }
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
  padding: 16px;
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
/deep/ .v-table-header {
  display: none;
}
</style>
