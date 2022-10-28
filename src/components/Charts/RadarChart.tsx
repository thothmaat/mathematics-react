import React, { Component } from 'react'
import EChartsReact from 'echarts-for-react';
export default class RadarChart extends Component {
  render() {
    const option = {
        title: {
          text: 'Proportion of Browsers',
          subtext: 'Fake Data',
          top: 10,
          left: 10
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          type: 'scroll',
          bottom: 10,
          data: (function () {
            var list = [];
            for (var i = 1; i <= 28; i++) {
              list.push(i + 2000 + '');
            }
            return list;
          })()
        },
        visualMap: {
          top: 'middle',
          right: 10,
          color: ['red', 'yellow'],
          calculable: true
        },
        radar: {
          indicator: [
            { name: 'IE8-',min:0, max: 500 },
            { name: 'IE9+',min:0, max: 500 },
            { name: 'Safari',min:0, max: 500 },
            { name: 'Firefox',min:0, max: 500 },
            { name: 'Chrome',min:0, max: 500 }
          ]
        },
        series: (function () {
          var series = [];
          for (var i = 1; i <= 28; i++) {
            series.push({
              type: 'radar',
              symbol: 'none',
              lineStyle: {
                width: 1
              },
              emphasis: {
                areaStyle: {
                  color: 'rgba(0,250,0,0.3)'
                }
              },
              data: [
                {
                  value: [
                    (40 - i) * 10,
                    (38 - i) * 4 + 60,
                    i * 5 + 10,
                    i * 9,
                    (i * i) / 2
                  ],
                  name: i + 2000 + ''
                }
              ]
            });
          }
          return series;
        })()
      };
    return (
      <EChartsReact option={option} style={{height: 800}}/>
    )
  }
}
