import React from 'react'
import ReactECharts from 'echarts-for-react';
export const chart1 = () => {

  // chart 2
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  };

  return (
     <ReactECharts option={option} />
  )
}
