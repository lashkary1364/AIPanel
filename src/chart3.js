import React from 'react'
import ReactECharts from 'echarts-for-react';

export const echart3 = () => {
  //chart 1
  // const option = {
  //   xAxis: {
  //     type: 'category',
  //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  //   },
  //   yAxis: {
  //     type: 'value'
  //   },
  //   series: [
  //     {
  //       data: [120, 200, 150, 80, 70, 110, 130],
  //       type: 'bar'
  //     }
  //   ]
  // }; 

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
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }
    ]
  };



  // chart 3
// const data = [["2000-06-05", 116], ["2000-06-06", 129], ["2000-06-07", 135], ["2000-06-08", 86], ["2000-06-09", 73], ["2000-06-10", 85], ["2000-06-11", 73], ["2000-06-12", 68], ["2000-06-13", 92], ["2000-06-14", 130], ["2000-06-15", 245], ["2000-06-16", 139], ["2000-06-17", 115], ["2000-06-18", 111], ["2000-06-19", 309], ["2000-06-20", 206], ["2000-06-21", 137], ["2000-06-22", 128], ["2000-06-23", 85], ["2000-06-24", 94], ["2000-06-25", 71], ["2000-06-26", 106], ["2000-06-27", 84], ["2000-06-28", 93], ["2000-06-29", 85], ["2000-06-30", 73], ["2000-07-01", 83], ["2000-07-02", 125], ["2000-07-03", 107], ["2000-07-04", 82], ["2000-07-05", 44], ["2000-07-06", 72], ["2000-07-07", 106], ["2000-07-08", 107], ["2000-07-09", 66], ["2000-07-10", 91], ["2000-07-11", 92], ["2000-07-12", 113], ["2000-07-13", 107], ["2000-07-14", 131], ["2000-07-15", 111], ["2000-07-16", 64], ["2000-07-17", 69], ["2000-07-18", 88], ["2000-07-19", 77], ["2000-07-20", 83], ["2000-07-21", 111], ["2000-07-22", 57], ["2000-07-23", 55], ["2000-07-24", 60]];
// const dateList = data.map(function (item) {
//   return item[0];
// });
// const valueList = data.map(function (item) {
//   return item[1];
// });
// const option = {
//   // Make gradient line here
//   visualMap: [
//     {
//       show: false,
//       type: 'continuous',
//       seriesIndex: 0,
//       min: 0,
//       max: 400
//     },
//     {
//       show: false,
//       type: 'continuous',
//       seriesIndex: 1,
//       dimension: 0,
//       min: 0,
//       max: dateList.length - 1
//     }
//   ],
//   title: [
//     {
//       left: 'center',
//       text: 'Gradient along the y axis'
//     },
//     {
//       top: '55%',
//       left: 'center',
//       text: 'Gradient along the x axis'
//     }
//   ],
//   tooltip: {
//     trigger: 'axis'
//   },
//   xAxis: [
//     {
//       data: dateList
//     },
//     {
//       data: dateList,
//       gridIndex: 1
//     }
//   ],
//   yAxis: [
//     {},
//     {
//       gridIndex: 1
//     }
//   ],
//   grid: [
//     {
//       bottom: '60%'
//     },
//     {
//       top: '60%'
//     }
//   ],
//   series: [
//     {
//       type: 'line',
//       showSymbol: false,
//       data: valueList
//     },
//     {
//       type: 'line',
//       showSymbol: false,
//       data: valueList,
//       xAxisIndex: 1,
//       yAxisIndex: 1
//     }
//   ]
// };

//chart 4
// const colors = ['#5470C6', '#91CC75', '#EE6666'];
// const option = {
//   color: colors,
//   tooltip: {
//     trigger: 'axis',
//     axisPointer: {
//       type: 'cross'
//     }
//   },
//   grid: {
//     right: '20%'
//   },
//   toolbox: {
//     feature: {
//       dataView: { show: true, readOnly: false },
//       restore: { show: true },
//       saveAsImage: { show: true }
//     }
//   },
//   legend: {
//     data: ['Evaporation', 'Precipitation', 'Temperature']
//   },
//   xAxis: [
//     {
//       type: 'category',
//       axisTick: {
//         alignWithLabel: true
//       },
//       // prettier-ignore
//       data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//     }
//   ],
//   yAxis: [
//     {
//       type: 'value',
//       name: 'Evaporation',
//       position: 'right',
//       alignTicks: true,
//       axisLine: {
//         show: true,
//         lineStyle: {
//           color: colors[0]
//         }
//       },
//       axisLabel: {
//         formatter: '{value} ml'
//       }
//     },
//     {
//       type: 'value',
//       name: 'Precipitation',
//       position: 'right',
//       alignTicks: true,
//       offset: 80,
//       axisLine: {
//         show: true,
//         lineStyle: {
//           color: colors[1]
//         }
//       },
//       axisLabel: {
//         formatter: '{value} ml'
//       }
//     },
//     {
//       type: 'value',
//       name: '温度',
//       position: 'left',
//       alignTicks: true,
//       axisLine: {
//         show: true,
//         lineStyle: {
//           color: colors[2]
//         }
//       },
//       axisLabel: {
//         formatter: '{value} °C'
//       }
//     }
//   ],
//   series: [
//     {
//       name: 'Evaporation',
//       type: 'bar',
//       data: [
//         2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
//       ]
//     },
//     {
//       name: 'Precipitation',
//       type: 'bar',
//       yAxisIndex: 1,
//       data: [
//         2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
//       ]
//     },
//     {
//       name: 'Temperature',
//       type: 'line',
//       yAxisIndex: 2,
//       data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
//     }
//   ]
// };
  return (
    <ReactECharts option={option} />
  )
}
