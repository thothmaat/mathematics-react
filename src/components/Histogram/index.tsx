import React, { Component } from 'react';
import ecStat from 'echarts-stat';
// import echarts from 'echarts';

import ReactECharts from 'echarts-for-react';


export default class Histogram extends Component {

    constructor(props:any){
        super(props)
    }
    componentDidMount(): void {
        let result = ecStat.regression('logarithmic',[],0);
        let expression = result.expression
        let points = result.points
        console.log(expression,points);
        // echarts.registerTransform(ecStat.transform.regression);
    
    }
    render() {
        const data: number[][] = [];

        for (let i = 0; i <= 100; i++) {
          let theta = (i / 100) * 360;
          let r = 5 * (1 + Math.sin((theta / 180) * Math.PI));
          data.push([r, theta]);
        }
        
        const option = {
          title: {
            text: 'Two Value-Axes in Polar'
          },
          legend: {
            data: ['line']
          },
          polar: {},
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          angleAxis: {
            type: 'value',
            startAngle: 0
          },
          radiusAxis: {},
          series: [
            {
              coordinateSystem: 'polar',
              name: 'line',
              type: 'line',
              data: data
            }
          ]
        };
        
        return (
        <ReactECharts option={option} style={{height:'800px',width:'800px'}}/>
        )
    }
}