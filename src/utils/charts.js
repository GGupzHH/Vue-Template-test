export const getBarchartData = (tableData, columns, title, xAxisName, yAxisName) => {
  console.log(tableData)
  let xAxisData = loadxAxisData(columns)
  let options = {
    title: {
      text: title,
      textStyle: {
        color: '#fff'
      }
    },
    legend: {
      data: ['月份'],
      textStyle: {
        color: '#ccc'
      }
    },
    xAxis: {
      type: 'category',
      name: xAxisName,
      data: xAxisData,
      axisLine: {
        lineStyle: {
          color: '#d8d9da',
          width: 1
        }
      }
    },
    yAxis: {
      type: 'value',
      name: yAxisName,
      axisLine: {
        lineStyle: {
          color: '#d8d9da',
          width: 1
        }
      }
    },
    series: [{
      type: 'bar',
      name: '月份',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(220, 220, 220, 0.8)'
      },
      data: [120, 52, 150, 80, 70, 110, 130]
    }]
  }
  return options
}

function loadSeriesData(tableData) {
  let series
  let legend
  for (let val in tableData) {

  }
  return { legend, series }
}

function loadxAxisData(columns) {
  let xAxis = []
  for (let i = 1; i < columns.length; i++) {
    xAxis.push(columns[i].title)
  }
  return xAxis
}
