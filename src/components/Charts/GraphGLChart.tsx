import React, { Component } from 'react'
import 'echarts-gl'
import EChartsReact from 'echarts-for-react'

export default class GraphGLChart extends Component {
    createNodes(widthCount: number, heightCount: number) {
        var nodes = [];
        for (var i = 0; i < widthCount; i++) {
          for (var j = 0; j < heightCount; j++) {
            nodes.push({
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              value: 1
            });
          }
        }
        return nodes;
    }
    createEdges(widthCount: number, heightCount: number) {
        var edges = [];
        for (var i = 0; i < widthCount; i++) {
            for (var j = 0; j < heightCount; j++) {
            if (i < widthCount - 1) {
                edges.push({
                source: i + j * widthCount,
                target: i + 1 + j * widthCount,
                value: 1
                });
            }
            if (j < heightCount - 1) {
                edges.push({
                source: i + j * widthCount,
                target: i + (j + 1) * widthCount,
                value: 1
                });
            }
            }
        }
        return edges;
    }

  render() {
    
      var nodes = this.createNodes(50, 50);
      var edges = this.createEdges(50, 50);
      const option = {
        series: [
          {
            type: 'graphGL',
            nodes: nodes,
            edges: edges,
            itemStyle: {
              color: 'rgba(255,255,255,0.8)'
            },
            lineStyle: {
              color: 'rgba(255,255,255,0.8)',
              width: 3
            },
            forceAtlas2: {
              steps: 5,
              jitterTolerence: 10,
              edgeWeightInfluence: 4
            }
          }
        ]
      };
    return (
        <EChartsReact theme = {'dark'} option={option} style={{height: 800,width: '100%'}}/>
    )
  }
}
