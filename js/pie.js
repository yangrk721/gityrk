let pie_obj = [
    {name:'门对门',number:55.3,dom:'pie_one'},
    {name:'干线',number:40,dom:'pie_two'},
    {name:'送货',number:30,dom:'pie_three'},
    {name:'签收',number:20,dom:'pie_four'},
    {name:'EPOO',number:80,dom:'pie_five'},
    {name:'回单',number:50,dom:'pie_six'},
    {name:'异常',number:35,dom:'pie_serve'}
] 
pie_obj.forEach(item=>{
    generate_pie_one(item)
})

function generate_pie_one(mydata){
    var map_container = echarts.init(document.getElementById(mydata.dom));
    window.addEventListener('resize', function () {
        map_container.resize();
    });
    let value = mydata.number;
    let myColor = '#1DE2A4'
    if(value<=35){
        myColor =  '#FF6583'
    }
    if(value > 35 && value < 50){
        myColor =  '#75FFED'
    }
    if(value>50){
        myColor =  '#FFEC75'
    }
    let myColorObj =  [
        [0, '#2CFAFC'],
        [52 / 100, myColor],
        [1, 'rgba(32,187,252,0.15)']
    ]
    // let title = ;
     // 基于准备好的dom，初始化echarts实例
    //  var myChart = echarts.init(document.getElementById('zb1'))
    var v1 = mydata.number//结算数
    var v2=100-mydata.number//未结算数
    var v3=100//总订单数
     option = {	
        series: [{
            type: 'pie',
            radius: ['60%', '70%'],
            color:myColor,
            label: {
                normal: {
                    formatter:'\n\n\n'+mydata.name,
                    position: 'center',
                    textStyle: {
                        fontSize: 14,
                        color:'#9c9d9f'
                    }
                }
            },
            data: [
                // +`\n\n${mydata.name}`
            {
                value: v1,
                name:mydata.name,
                label: {
                    normal: {
                        formatter:Math.round( v1/v3*100)+ '%'  ,
                        textStyle: {
                            fontSize: 17,
                            color:'#fff',
                        }
                    }
                }
            }, 
            {
                value: v2,
                // label: {
                //     // normal: {
                //     //     formatter : function (params){
                //     //         return mydata.name
                //     // },
                //         textStyle: {
                //             color: '#aaa',
                //             fontSize: 16
                //         }
                //     }
                // },
                itemStyle: {
                    normal: {
                        color: 'rgba(255,255,255,.2)'
                    },
                    emphasis: {
                        color: '#fff'
                    }
                },
            }
            ]
        }]
    };
  
    //初始化echarts实例

  //使用制定的配置项和数据显示图表
  map_container.setOption(option);
}