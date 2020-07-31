export const getBarchartData = (tableData, columns, title, xAxisName, yAxisName) => {
  let xAxisData = loadxAxisData(tableData, columns)
  let { legend, series } = loadSeriesData(tableData, columns)
  let options = {
    title: {
      text: title,
      textStyle: {
        color: '#ccc'
      }
    },
    legend: {
      data: legend,
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
    series: series
  }
  return options
}

function loadSeriesData(tableData, columns) {
  let series = [], legend = [], keyCol = columns[0].field
  for (let i = 1; i < tableData.length; i++) {
    let data = []
    for (let xKey = 1; xKey < columns.length; xKey++) {
      data.push(tableData[i][columns[xKey].field])
    }
    legend.push(tableData[i][keyCol])
    series.push({
      type: 'line',
      name: tableData[i][keyCol],
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(220, 220, 220, 0.8)'
      },
      data
    })
  }
  return { legend, series }
}

function loadxAxisData(tableData, columns) {
  let xAxis = []
  for (let xKey = 1; xKey < columns.length; xKey++) {
    xAxis.push(tableData[0][columns[xKey].field])
  }
  return xAxis
}
