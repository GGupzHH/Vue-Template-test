export const getBarChartData = (data) => {
  return {
    title: {
      text: data.title,
      textStyle: {
        color: '#fff'
      }
    },
    xAxis: {
      type: 'category',
      data: data.xAxis_data,
      axisLine: {
        lineStyle: {
          color: '#d8d9da',
          width: 1
        }
      }
    },
    legend: {
      data: data.legend_data,
      textStyle: {
        color: '#ccc'
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
    series: loadSeriesData(data.series_data, 'bar')
  }
}

export const getLineChartData = (data) => {
  return {
    title: {
      text: data.title,
      textStyle: {
        color: '#fff'
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: data.legend_data,
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
      data: data.xAxis_data,
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
    series: loadSeriesData(data.series_data, 'line')
  }
}

export const getCircularChartData = (data) => {
  return {
    title: {
      text: data.title,
      // subtext: '纯属虚构',
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
      data: data.legend_data,
      textStyle: {
        color: '#ccc'
      }
    },
    series: [{
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: data.series_data,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  }
}

function loadSeriesData (seriesData, type) {
  let series = []
  for (let i = 0; i < seriesData.length; i++) {
    series.push({
      type: type,
      name: seriesData[i].name,
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(220, 220, 220, 0.8)'
      },
      data: seriesData[i].data
    })
  }
  return series
}
