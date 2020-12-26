import React, { Component } from 'react';
// import './index.css';
import echarts from 'echarts';
import 'echarts/map/js/world';
import geoJson from 'echarts/map/json/world.json';

export default class WorldMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.initalECharts();
    }

    initalECharts() {
        echarts.registerMap('china', geoJson);
        const myChart = echarts.init(document.getElementById('mainMap'));
        myChart.setOption({
            tooltip: {
                show: false, // 不显示提示标签
                // formatter: '{b}', // 提示标签格式
                //鼠标放地图的某一块，显示的提示框
                formatter(params, ticket, callback) {
                    console.log(params)
                    return `'批复投资额（亿元）'<br />${params.name}：${params.data.InValue}`
                },
                backgroundColor: '#ff7f50', // 提示标签背景颜色
                textStyle: { color: '#fff' } // 提示标签字体颜色
            },
            grid: {
                left: '10%',
                right: '10%',
                top: '10%',
                bottom: '10%',
                containLabel: true
            },
            geo: {
                map: 'china',
                roam: false,
                zoom: 1.1,
                tooltip: {
                    show: false, // 不显示提示标签
                },
                label: {
                    normal: {
                        show: false, // 显示省份标签
                        textStyle: { color: '#c71585' }// 省份标签字体颜色
                    },
                    emphasis: {// 对应的鼠标悬浮效果
                        show: false,
                        textStyle: { color: '#800080' }
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: 0.5, // 区域边框宽度
                        borderColor: '#000', // 区域边框颜色
                        areaColor: '#ffefd5', // 区域颜色
                        label: { show: false }
                    },
                    emphasis: {
                        show: false,
                        borderWidth: 0.5,
                        borderColor: '#4b0082',
                        areaColor: '#ffdead',
                    }
                },
            },
        })

        // 鼠标放上颜色变红
        // myChart.on('mouseover', params => {
        //     params.color = '#d50000'
        //     params.event.target.style.fill = '#d50000'
        // });
    }

    // convertData(data) {
    //     const res = [];
    //     for (let i = 0; i < data.length; i++) {
    //         const geoCoord = geoCoordMap[data[i].name];
    //         if (geoCoord) {
    //             res.push({
    //                 name: data[i].name,
    //                 value: geoCoord.concat(data[i].area),
    //                 area: data[i].area,
    //                 type: data[i].type,
    //                 InValue: data[i].InValue
    //             });
    //         }
    //     }
    //     return res;
    // }

    convert() {
        return '1';
    }

    render() {
        return (
            <div>
                <div className="App">
                    <div id="mainMap" style={{ width: '100vm', height: '100vh' }}></div>
                </div>
            </div>

        );
    }
}

