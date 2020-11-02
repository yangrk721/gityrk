 
  let positionData = [
    [114.271522, 22.753644, "深圳互通至重庆互通S门架"],
    [106.54213123, 29.123123, "重庆互通S门架一座营互通门架"],
    [120.192222, 30.123, "重庆互通S门架至浙江互通门架"],
];
// let len = positionData.length - 1;
let coorData = []
positionData.forEach(item => {
  let cooritem = [item[0], item[1]]
  coorData.push(cooritem)
});
var required_order_lins =   [{ //地图线的动画效果
                  type: "lines",
                  zlevel: 2,
                  effect: {
                      show: true,
                      period: 8, //箭头指向速度，值越小速度越快
                      trailLength: 0.1, //特效尾迹长度[0,1]值越大，尾迹越长重
                      symbol: 'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z',
                      symbolSize: 17, //图标大小
                  },
                  lineStyle: {
                      normal: {
                          color: "#1DE9B6",
                          width: 3, //线条宽度
                          opacity: 1, //尾迹线条透明度
                          curveness: 0.3, //尾迹线条曲直度
                      },
                  },
                  polyline: true,
                  label: {},
                  data: [{
                      coords: coorData,
                      lineStyle: {
                          color: "#4ab2e5",
                      },
                  }, ],
              },
              { //气泡点
                  type: "scatter",
                  symbol: "pin",
                  symbolSize: 24,
                  zlevel: 3,
                  label: {
                      show: true,
                      formatter: (param) => {
                          return param.value[2];
                      },
                      fontSize: 12,
                      position: [15, 15],
                      borderWidth: 1,
                      borderColor: "#1c7baf",
                      borderRadius: 4,
                      color: "#fff",
                      padding: [5, 10],
                  },
                  emphasis: {
                      label: {
                          backgroundColor: "#0c4fff",
                      },
                  },
                  itemStyle: {
                      color: "#1DE9B6",
                  },
                  coordinateSystem: "geo",
                  data: positionData,
            },                                                              ]
            var dataTemp = [
                {
                    lng: "86.61",
                    num: 1,
                    lat: "40.79"
                },
                {
                    lng: "114.17",
                    num: 2,
                    lat: "40.79"
                },
                {
                    lng: "89.13",
                    num: 3,
                    lat: "30.66"
                },
                {
                    lng: "97.07",
                    num: 4,
                    lat: "35.62"
                },
                {
                    lng: "126.07",
                    num: 5,
                    lat: "45.57"
                },
        ];
                                          
        function addImage(url, params, api, realData){
            return  {
                type: 'image',
        
                style: {
                    image: url,
                    x: api.coord([
                        realData[params.dataIndex].lng, realData[params.dataIndex]
                            .lat
                    ])[0],
                    y: api.coord([
                        realData[params.dataIndex].lng, realData[params.dataIndex].lat
                    ])[1],
                    width: 20,
                    height: 19,
                }
            }
        }
 function city_Route(){ 
  
         var map_container = echarts.init(document.getElementById('map_container'));
            
            window.addEventListener('resize', function () {
                map_container.resize();
            });
            option = {
                // backgroundColor: '#404a59', // 地图背景颜色
                title: {
                    // text: '迁徙图', // 地图标题设置
                    // subtext:"123321", // 地图小标题设置
                    sublink:"http://www.baidu.com", //小标题链接
                    target:"blank", //'self' 当前窗口打开，'blank' 新窗口打开
                    padding:5, // 标题内边距 5  [5, 10]  [5,10,5,10]
                    left:"center", // 组件离容器左侧的距离,'left', 'center', 'right','20%'
                    top:"5%", // 组件离容器上侧的距离,'top', 'middle', 'bottom','20%'
                    right:"auto", // 组件离容器右侧的距离,'20%'
                    bottom:"auto", // 组件离容器下侧的距离,'20%'
                    textStyle: {
                      color:"#fff", //文字颜色
                      fontStyle:"normal", // italic斜体  oblique倾斜
                      fontWeight:"normal", // 文字粗细bold   bolder   lighter  100 | 200 | 300 | 400...
                      fontFamily:"sans-serif", // 字体系列
                      fontSize:18, // 字体大小
                    }
                },
                legend: { // 右下角图例
                    show: false, // 是否显示
                    orient: 'vertical', // 图例排列方向
                    top: 'bottom', // 位置
                    left: 'right', // 位置
                    data: ['地点', '线路'], // 数据
                    textStyle: { // 文字设置
                        color: '#fff'
                    }
                },
                geo: {
                    show:true, // 是否显示
                    roam: false,
                    map: 'china', // 地图类型。world世界地图，china中国地图
                    // center:[115.97, 29.71], //当前视角的中心点，用经纬度表示
                    zoom: 1.3, //地图大小
                    label: {
                      normal:{ //普通状态下的标签文本样式。(省份名称)
                        show: false, //是否在普通状态下显示标签。
                        textStyle: { // 文字设置
                          color: '#fff'
                        },
                      },
                      emphasis: { // 是否在高亮状态下显示标签。(省份名称)
                        show: false,
                        textStyle: { // 文字设置
                          color: '#fff'
                        },
                      }
                    },
                    roam: false, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
                    // itemStyle: { // 地图板块区域的多边形 图形样式
                    //     normal: { // 默认板块信息
                    //         areaColor: '#070857',
                    //         borderColor: 'red'
                    //     },
                    //     emphasis: { // 高亮版板块信息
                    //         // areaColor: '#070857'
                    //     }
                    // },
                    itemStyle: {
                        normal: {
                            areaColor: '#070857',
                            borderColor: '#0e94eb',
                            shadowBlur: 10,
                            shadowColor: '#0e94ea'
                        }
                    },
                },
                series:change_series,
            };
  //初始化echarts实例

  //使用制定的配置项和数据显示图表
  map_container.clear();
    map_container.setOption(option,true);
}
// layui.use(['layer', 'form','element'], function(){
//     form.on('select(required_cor)', function(data){
//         if(data.value == 1){
//            change_series =  [{
//                           name: '地图',
//                           type: 'custom',
//                           coordinateSystem: 'geo',
//                           renderItem: function (params,api) {//具体实现自定义图标的方法
//                               if (dataTemp[params.dataIndex].num > 0  &&  dataTemp[params.dataIndex].num <= 50) {
//                                   return addImage("./images/truck.png", params, api, dataTemp);
//                               } 
//                           },
//                           data:dataTemp
//                       }]
//         }
//         city_Route()
//     });
// })
