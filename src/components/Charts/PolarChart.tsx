import React, { Component } from 'react'
import EChartsReact, { EChartsOption } from 'echarts-for-react'

export default class PolarChart extends Component {
    timer: any;
    option: EChartsOption;
    coefficient: number;
    constructor(props: any) {
        super(props);
        const option: EChartsOption = {
            title: {
                text: 'r=8∗sin(n*θ),(1⩽n⩽180,0⩽θ⩽2π)'
            },
            legend: {
                data: ['Polar']
            },
            polar: {
                center: ['50%', '52%']
            },
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
            radiusAxis: {
                min: 0
            },
            series: [
                {
                    coordinateSystem: 'polar',
                    name: 'Polar',
                    type: 'line',
                    showSymbol: false,
                    data: this.buildData(1),
                }
            ],
            animationDuration: 2000
        };
        this.coefficient = 1;
        this.state = { option }
        this.option = option;
        this.buildData = this.buildData.bind(this);
    }

    componentDidMount() {
        const colors = [
            '#ff531a', 
            '#ff8c1a',
            '#ffc61a',
            '#ffff1a',
            '#c6ff1a',
            '#8cff1a',
            '#53ff1a',
            '#1aff1a',
            '#1aff53',
            '#1aff8c',
            '#1affc6',
            '#1affff',
            '#1ac6ff',
            '#1a8cff',
            '#1a53ff',
            '#1a1aff',
            '#531aff',
            '#8c1aff',
            '#c61aff',
            '#ff1aff',
            '#ff1ac6',
            '#ff1a8c',
            '#ff1a53',
            '#ff1a1a',
            '#ff1a1a',
            '#f92020',
            '#f42525',
            '#ee2b2b',
            '#e83131'];
        this.timer = setInterval(() => {
            if (this.coefficient >= 360) {
                this.coefficient = 0;
            }
            const data: number[][] = this.buildData(this.coefficient);
            const option: EChartsOption = {
                title: {
                    text: 'r = 8 ∗ sin(' + this.coefficient + ' ∗ θ),(1⩽n⩽360,0⩽θ⩽2π)'
                },
                legend: {
                    data: ['Polar']
                },
                polar: {
                    center: ['50%', '52%']
                },
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
                radiusAxis: {
                    min: 0
                },
                series: [
                    {
                        color: colors[this.coefficient % 29],
                        universalTransition: true,
                        coordinateSystem: 'polar',
                        name: 'Polar',
                        type: 'line',
                        showSymbol: false,
                        data: data,
                    }
                ],
                animationDuration: 2000,
                animationDurationUpdate: 1000
            };
            this.coefficient++;
            this.setState({ option });
            this.option = option;
        }, 1500);

    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    buildData(coefficient: number) {
        const data: number[][] = [];
        for (let i = 0; i <= 360; i++) {
            let t = (i / 180) * Math.PI;
            let r = Math.sin(coefficient * t);
            data.push([r, i]);
        }
        return data;
    }
    render() {
        return (
            <EChartsReact option={this.option} style={{ height: 1000, width: '100%' }} />
        )
    }
}
