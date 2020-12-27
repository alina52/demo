import echarts from 'echarts';
import 'echarts/map/js/world';
import React, { Component } from 'react';
import { dataArr, namemap } from 'src/map/constants';
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
        // echarts.registerMap('world', geoJson);
        const myChart = echarts.init(document.getElementById('mainMap'));
        window.addEventListener('resize', function () {
            myChart.resize()
          })
          myChart.setOption({
            // 图表主标题
            title: {
              text: '世界地图', // 主标题文本，支持使用 \n 换行
              top: 20, // 定位 值: 'top', 'middle', 'bottom' 也可以是具体的值或者百分比
              left: 'center', // 值: 'left', 'center', 'right' 同上
              textStyle: { // 文本样式
                fontSize: 24,
                fontWeight: 600,
                color: '#fff'
              }
            },
            // 提示框组件
            tooltip: {
              trigger: 'item', // 触发类型, 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用
              // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
              // 使用函数模板  传入的数据值 -> value: number | Array
              extraCssText:'width:fit-content;',
              formatter: function (val) {
                var tipHtml = [];
                if(val) {
                    tipHtml.push('<div style="box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.3);border-radius:4px;padding:10px 10px;"><div style="font-size: 16px;">'+val.data.name+': '+ val.data.value +'</div>')
                    for(var i in val.data.news){
                        tipHtml.push('<div style="padding:3px 0;"><i style="display: inline-block;margin-bottom: 3px;width:6px;margin-right:6px;height: 6px;background: #3472EE;border-radius: 50%;"></i>' + val.data.news[i].title + '</div>')
                        
                     }
                    tipHtml.push('</div>')
                }
                return tipHtml.join('');
              }
            },
            // 视觉映射组件
            visualMap: {
              type: 'continuous', // continuous 类型为连续型  piecewise 类型为分段型
              show: true, // 是否显示 visualMap-continuous 组件 如果设置为 false，不会显示，但是数据映射的功能还存在
              // 指定 visualMapContinuous 组件的允许的最小/大值。'min'/'max' 必须用户指定。
              // [visualMap.min, visualMax.max] 形成了视觉映射的『定义域』
              min: 0,
              max: 10,
              // 文本样式
              textStyle: {
                fontSize: 14,
                color: '#fff'
              },
              realtime: false, // 拖拽时，是否实时更新
              calculable: true, // 是否显示拖拽用的手柄
              // 定义 在选中范围中 的视觉元素
              inRange: {
                color: ['#9fb5ea', '#e6ac53', '#74e2ca', '#85daef', '#9feaa5', '#5475f5'] // 图元的颜色
            }
            },
            series: [
              {
                type: 'map', // 类型
                // 系列名称，用于tooltip的显示，legend 的图例筛选 在 setOption 更新数据和配置项时用于指定对应的系列
                name: '世界地图',
                mapType: 'world', // 地图类型
                // 是否开启鼠标缩放和平移漫游 默认不开启 如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move' 设置成 true 为都开启
                roam: true,
                // 图形上的文本标签
                label: {
                  show: false // 是否显示对应地名
                },
                // 地图区域的多边形 图形样式
                itemStyle: {
                  areaColor: '#7B68EE', // 地图区域的颜色 如果设置了visualMap，areaColor属性将不起作用
                  borderWidth: 0.5, // 描边线宽 为 0 时无描边
                  borderColor: '#000', // 图形的描边颜色 支持的颜色格式同 color，不支持回调函数
                  borderType: 'solid' // 描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'
                },
                // 高亮状态下的多边形和标签样式
                emphasis: {
                  label: {
                    show: true, // 是否显示标签
                    color: '#fff' // 文字的颜色 如果设置为 'auto'，则为视觉映射得到的颜色，如系列色
                  },
                  itemStyle: {
                    areaColor: '#FF6347' // 地图区域的颜色
                  }
                },
                // 自定义地区的名称映射
                nameMap: namemap,
                // // 地图系列中的数据内容数组 数组项可以为单个数值
                data: dataArr
              }
            ]
          })

        //鼠标放上颜色变红
        // myChart.on('mouseover', params => {
        //     params.color = '#d50000'
        //     params.event.target.style.fill = '#d50000'
        // });
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

