import React, { Component } from 'react'
import GraphicChart from './GraphicChart';
import PieChart from './PieChart';
import RadarChart from './RadarChart';
import GraphGLChart from './GraphGLChart';
import EChartsStatChart from './EChartsStatChart';
import EChartsWordCloudChart from './EChartsWordCloudChart';
import BarChart from './BarChart';
import PolarChart from './PolarChart'
export default class Charts extends Component {
  

  render() {
  
    return (
      <div>
        <GraphicChart />
        <RadarChart />
        <PieChart />
        <GraphGLChart />
        <EChartsStatChart />
        <EChartsWordCloudChart />
        <BarChart />
        <PolarChart />
      </div>
    )
  }
}
