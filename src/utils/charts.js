export const Barchart = {
  title: {
    text: '折线图堆叠',
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
    name: '月份',
    showBackground: true,
    backgroundStyle: {
      color: 'rgba(220, 220, 220, 0.8)'
    },
    data: [120, 52, 150, 80, 70, 110, 130]
  }]
}