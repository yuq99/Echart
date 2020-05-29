// 柱状图2
(function () {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie .chart"));

  var arr={}
  arr.fhId = ".pie .chart";//负荷的id
  arr.fhArr=[
    {"name":"客服处理部门","value":"19"},
    {"name":"区发改委","value":"6"},
    {"name":"区人力社保局","value":"6"},
    {"name":"海淀街道","value":"6"},
    {"name":"区教委局","value":"5"},
  ]

  var fhArr = arr.fhArr;
  var data1 = [];//可用数据
  var data2 = [];
  var data3 = [];//不可用数据
  var data4 = [];//配置项
  for(i in fhArr){
    data1.push(fhArr[i].value);
    data2.push(fhArr[i].name);
  }
  for(m in data1){
    data3.push(100-parseInt(data1[m]));
  }
  var nowNum = 0;
  for(n in data1){
    var nowA = {};
    nowA.value = data1[n]+'%';
    nowA.xAxis = nowNum;
    nowA.yAxis = 110;
    data4.push(nowA);
    nowNum++;
  }
 
  var option = {
    legend: {
      data: ['已办', '未办'],
      //padding:[0,70,0,0],  //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
      y:'bottom',//可设定图例在上、下、居中
      textStyle:{//图例文字的样式
        color:'#ccc',
        fontSize:12
    }
  },
    textStyle:{
      fontSize: 12,
      color: '#fff'//字体颜色
    },
    tooltip: {
      trigger: "axis", 
      textStyle:{
        fontSize: 10,
        color: '#fff'//字体颜色
      },
      formatter: function (params) {
        return params[0].name + ': ' + params[0].value;
      },
    },
    
    grid: {
      top: "10%",
      left: "18%",
      bottom: "30%"
      // containLabel: true
    },//直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。
    xAxis: {
      axisLabel: {
         interval:0,
         rotate:30,
        textStyle: {
          color: '#fff',
          fontSize: 10,
        }
      },
      data: data2,
      axisTick:{       //x轴刻度线
        show:false
      },
      splitLine: {     //网格线
        show: false
      },
      axisLine:{		//坐标轴线
        show:false
      }
      
    },
    yAxis: {
      show:true,
      max: 100,
      min:0,
      splitLine:{
        show:false
    }
    },
    series: [{
      name: '已办',
      type: 'bar',
      stack:'使用情况',
      data:data1,
      barWidth : 15,//柱图宽度
      itemStyle:{
        color: function(params) { 
                    var colorList = ['#C33531','#EFE42A','#64BD3D','#EE9201','#29AAE3', '#B74AE5','#0AAF9F','#E89589','#16A085','#4A235A','#C39BD3 ','#F9E79F','#BA4A00','#ECF0F1','#616A6B','#EAF2F8','#4A235A','#3498DB' ]; 
                    return colorList[params.dataIndex] 
                },
         barBorderRadius: [0, 0, 40, 40] // 统一设置四个角的圆角大小
      },
      markPoint : {
        symbol:'pin',//标记类型
        symbolSize: 1,//图形大小
        itemStyle: {
          normal: {
            borderColor: '#fff',
            borderWidth: 1,            // 标注边线线宽，单位px，默认为1
            label: {
              show: true,
              fontSize: 10
            }
             }
            },
          data :data4//配置项 
        }
    },{
      name: '未办',
      type: 'bar',
      stack:'使用情况',
      data: data3,
      itemStyle:{
        color:"rgba(255,255,255,.2)",
         barBorderRadius: [20, 20, 0, 0]// 统一设置四个角的圆角大小
      }
    }]
  };
  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})(); 




// 环形图1
/* (function () {
  var myChart = echarts.init(document.querySelector('.bar1 .chart'));
          // 基于准备好的dom，初始化echarts实例
         
          var v1=30.95//结算数
          var v2=69.05//未结算数
          var v3=v1+v2//总订单数
      option = {	
        title:{
          show:true,
          text:"匿名企业",
          x:"center",
          textStyle:{
              fontSize:"12",
              color:"LightSkyBlue",
              fontWeight:"bold",
          }
    
          
      },
      
          series: [{
              type: 'pie',
              radius: ['50%', '65%'],
              color:'LightSkyBlue',
              label: {
                  normal: {
                      position: 'center'
                  }
              },
              grid: {
                top: "10%",
                left: "18%",
                bottom: "20%"
                // containLabel: true
              },
              data: [{
                  value: v1,
                  
                  label: {
                      normal: {
                        formatter: function (params) {
                          return 30.95+'%';
                        },
                          textStyle: {
                              fontSize: 12,
                  color:'#fff',
                          }
                      }
                  }
              }, 
               {
                  value: v2,
                  label: {
                      normal: {
                       formatter : function (params){
                     
                  },
                          textStyle: {
                              color: '#aaa',
                              fontSize: 12
                          }
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: 'rgba(255,255,255,.2)'
                      },
                      emphasis: {
                          color: '#fff'
                      }
                  },
              }]
          }]
      };
 // 3. 把配置给实例对象
 myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})(); */



// 环形图1--企业
 (function () {
   var myChart = echarts.init(document.querySelector('.bar1 .chart'));
   var option = {

    series: [{
            type: "pie",                // 系列1类型: 饼图
            center: ["25%","30%"],      // 饼图的中心(圆心)坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
            radius: ["39%","40%"],      // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
                                        // 可以将内半径设大显示成圆环图（Donut chart）。
            clockWise: false,           // 饼图的扇区是否是顺时针排布。[ default: true ]
            startAngle: 90,             // 起始角度，支持范围[0, 360]。 [ default: 90 ]
            hoverAnimation: true,       // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
            itemStyle: {                // 图形样式
                normal: {
                    color: "#5886f0",       // 图形的颜色
                    borderColor: "#5886f0", // 图形的描边颜色
                    borderWidth: 10,        // 描边线宽。为 0 时无描边。[ default: 0 ]
                    borderType: 'solid',    // 柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'。
                    label: {                // 图形内部标签
                        show: true,                 // 是否显示标签
                        textStyle: {                // 标签文本样式
                            fontSize: 9,
                            fontWeight: "bold"      // 标签字体加粗,'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                        },
                        position: "center"          // 标签的位置,'outside'(饼图扇区外侧，通过视觉引导线连到相应的扇区)
                                                    // 'inside'(饼图扇区内部);  'inner' 同 'inside'。
                                                    // 'center'(在饼图中心位置。)
                    },
                    labelLine: {            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线。
                        show: false
                    }
                },
                emphasis: {                 // 高亮的扇区和标签样式(起强调作用)
                    color: "#5886f0",
                    borderColor: "#5886f0",
                    borderWidth: 10,
                    borderType: 'solid',
                    label: {
                        textStyle: {
                            fontSize: 9,
                            fontWeight: "bold"
                        }
                    }
                }
            },
            data: [{value: 52.38,name: "普通企业52.38%"},
                {name: " ",value: 47.3,
                    itemStyle: {
                        normal: {
                            color: "#5886f0",
                            borderColor: "#5886f0",
                            borderWidth: 0,
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        },
                        emphasis: {
                            color: "#5886f0",
                            borderColor: "#5886f0",
                            borderWidth: 0
                        }
                    }
                }
            ]
        }, {   
        
            type: "pie", // 系列2类型: 饼图
            center: [
                "75.0%",
                "30%"
            ],
            radius: [
                "39%",
                "40%"
            ],
            clockWise: false,
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            fontSize: 9,
                            fontWeight: "bold"
                        },
                        position: "center"
                    },
                    labelLine: {
                        show: false
                    },
                    color: "#ee3a3a",
                    borderColor: "#ee3a3a",
                    borderWidth: 10
                },
                emphasis: {
                    label: {
                        textStyle: {
                            fontSize: 9,
                            fontWeight: "bold"
                        }
                    },
                    color: "#ee3a3a",
                    borderColor: "#ee3a3a",
                    borderWidth: 10
                }
            },
            data: [{
                    value: 16.67,
                    name: "重点企业：16.67%"
                },
                {
                    name: " ",
                    value: 52.7,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: "#ee3a3a",
                            borderColor: "#ee3a3a",
                            borderWidth: 0
                        },
                        emphasis: {
                            color: "#ee3a3a",
                            borderColor: "#ee3a3a",
                            borderWidth: 0
                        }
                    }
                }
            ]
        }, {   
          type: "pie", // 系列2类型: 饼图
          center: [
              "50%",
              "70%"
          ],
          radius: [
              "39%",
              "40%"
          ],
          clockWise: false,
          hoverAnimation: true,
          itemStyle: {
              normal: {
                  label: {
                      show: true,
                      textStyle: {
                          fontSize: 9,
                          fontWeight: "bold"
                      },
                      position: "center"
                  },
                  labelLine: {
                      show: false
                  },
                  color: "#AFEEEE",
                  borderColor: "#AFEEEE",
                  borderWidth: 10
              },
              emphasis: {
                  label: {
                      textStyle: {
                          fontSize: 6,
                          fontWeight: "bold"
                      }
                  },
                  color: "#AFEEEE",
                  borderColor: "#AFEEEE",
                  borderWidth: 10
              }
          },
          data: [{
                  value: 30.95,
                  name: "匿名企业:30.95%"
              },
              {
                  name: " ",
                  value:78.05,
                  itemStyle: {
                      normal: {
                          label: {
                              show: false
                          },
                          labelLine: {
                              show: false
                          },
                          color: "#AFEEEE",
                          borderColor: "#AFEEEE",
                          borderWidth: 0
                      },
                      emphasis: {
                          color: "#AFEEEE",
                          borderColor: "#AFEEEE",
                          borderWidth: 0
                      }
                  }
              }
          ]
      }
    ]
};
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
     myChart.resize();
  });
 })();





(function() {
  var myChart = echarts.init(document.querySelector(".bar3 .chart"));
  var option = {
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f"
    ],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      bottom: "0%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      top: "10%",
      left: "18%",
      bottom: "15%"
      // containLabel: true
    },
    series: [
      {
        name: "统计",
        type: "pie",
        radius: ["10%", "70%"],
        center: ["50%", "50%"],
        roseType: "radius",
        // 图形的文字标签
        label: {
          fontSize: 10,
          formatter: '{b}:{c}\n({d}%)'
        },
        // 链接图形和文字的线条
        labelLine: {
          // length 链接图形的线条
          length: 4,
          // length2 链接文字的线条
          length2: 4
        },
        data: [
          { value: 53, name: "咨询" },
          { value: 26, name: "诉求" },
          { value: 24, name: "举报"},
          { value: 25, name: "其他" }
         
        ]
      }
    ]
  };
  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();





// 柱状图横向4.30
(function () {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448"];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  // 2. 指定配置和数据
  var option = {
    grid: {
      top: "10%",
      left: "16%",
      bottom: "10%"
      // containLabel: true
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false,
      axisLabel: {
        show: true,
         textStyle: {
           
           fontSize : 6     //更改坐标轴文字大小
         }
      },
 
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["受理", "分派", "办理", "回访"],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        axisLabel: {
          show: true,
           textStyle: {
             fontSize : 3      //更改坐标轴文字大小
           }
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      },
      {
        data: [],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        data: [70, 34, 60, 78],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          
          barBorderRadius: 10,
          // 此时的color 可以修改柱子的颜色
          color: function (params) {
            // params 传进来的是柱子对象
            // console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: "inside",
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: "{c}个"
        }
      },
      {
        name: "框",
        type: "bar",
        barCategoryGap: 50,
        barWidth: 15,
        yAxisIndex: 1,
        data: [100, 100, 100, 100],
        itemStyle: {
         
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        }
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();




// 柱状图模块1
(function() {
  // 1实例化对象
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  // 2. 指定配置项和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图表的大小
    grid: {
      left: "0%",
      top: "20px",
      right: "0%",
      bottom: "0%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "催办",
          "督办"        
        ],
        axisTick: {
          alignWithLabel: true
        },
        // 修改刻度标签 相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6) ",
          fontSize: "10"
        },
        // 不显示x坐标轴的样式
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        // 修改刻度标签 相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6) ",
          fontSize: 12
        },
        // y轴的线条改为了 2像素
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            
          }
        },
        // y轴分割线的颜色
        splitLine: {          
          
          lineStyle: {
            color: "rgba(255,255,255,.1)"
            
          }
        }
      }
    ],
    series: [
      {
        name: "数量",
        type: "bar",
        barWidth: "18%",
        data: [3, 4],
        itemStyle: {
          normal:{
            // 修改柱子圆角
          barBorderRadius: 9,
           color:function(params){
             var colorList=['#cca272','#8A2BE2']
             return colorList[params.dataIndex]
             
           },
           label: {
            show: true,		//开启显示
            position: 'insideRight',	//在中间显示
            textStyle: {	    //数值样式
                color: '#fff',
                fontSize: 12
            }
           }
          }
          
        }
      }
    ]
  };

  // 3. 把配置项给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();



// 折线图 模块制作
(function() {
  var yearData = [
    {
      year: "2018", // 年份
      data: [
        // 两个数组是因为有两条线
        [0, 0, 0, 79, 2, 0, 0, 0, 0, 0,0, 0],
        [0, 0, 0, 6, 0, 0, 0, 0, 0, 0,0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0,0, 0],
      ]
    },
    {
      year: "2019", // 年份
      data: [
        // 两个数组是因为有两条线
        [0, 0, 0, 79, 2, 0, 0, 0, 0, 0,0, 0],
        [0, 0, 0, 6, 0, 0, 0, 0, 0, 0,0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0,0, 0],
      ]
    }
    ,
    {
      year: "2020", // 年份
      data: [
        // 两个数组是因为有两条线
        [0, 0, 0, 79, 0, 0, 0, 0, 0, 0,0, 0],
        [0, 0, 0, 6, 0, 0, 0, 0, 0, 0,0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0,0, 0],
      ]
    }
  ];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".line3 .chart"));
  // 2.指定配置
  var option = {
    // 通过这个color修改两条线的颜色
    color: ["#00f2f1", "#ed3f35","#00B2EE"],
    tooltip: {
      trigger: "axis"
    },
    legend: {
      // 如果series 对象有name 值，则 legend可以不用写data
      // 修改图例组件 文字颜色
      textStyle: {
        color: "#4c9bfd"
      },
      // 这个10% 必须加引号
      right: "10%"
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true, // 显示边框
      borderColor: "#012f4a", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a" // 分割线颜色
        }
      }
    },
    series: [
      {
        name: "咨询",
        type: "line",
        // true 可以让我们的折线显示带有弧度
        smooth: true,
        data: yearData[0].data[0]
      },
      {
        name: "诉求",
        type: "line",
        smooth: true,
        data: yearData[0].data[1]
      }
      ,
      {
        name: "投诉",
        type: "line",
        smooth: true,
        data: yearData[0].data[2]
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();



// --------------------------------方法---------------------------------------
//方法【承办单位】
function cbdw() {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".chart22"));

  var arr={}
  arr.fhId = ".chart22";//负荷的id
  arr.fhArr=[
    {"name":"客服处理部门","value":"19"},
    {"name":"区发改委","value":"6"},
    {"name":"区人力社保局","value":"6"},
    {"name":"海淀街道","value":"6"},
    {"name":"区教委局","value":"5"},
  ]

  var fhArr = arr.fhArr;
  var data1 = [];//可用数据
  var data2 = [];
  var data3 = [];//不可用数据
  var data4 = [];//配置项
  for(i in fhArr){
    data1.push(fhArr[i].value);
    data2.push(fhArr[i].name);
  }
  for(m in data1){
    data3.push(100-parseInt(data1[m]));
  }
  var nowNum = 0;
  for(n in data1){
    var nowA = {};
    nowA.value = data1[n]+'%';
    nowA.xAxis = nowNum;
    nowA.yAxis = 110;
    data4.push(nowA);
    nowNum++;
  }
 
  var option = {
    textStyle:{
      fontSize: 20,
      color: '#fff'//字体颜色
    },
    legend: {
      data: ['已办', '未办'],

      y:'bottom',     //可设定图例在上、下、居中
      textStyle:{//图例文字的样式
        color:'#ccc',
        fontSize:20
    }
  },
    tooltip: {
      trigger: "axis", 
      textStyle:{
        fontSize: 20,
        color: '#fff'//字体颜色
      },
      formatter: function (params) {
        return params[0].name + ': ' + params[0].value;
      },
    },
    
    grid: {
      top: "10%",
      left: "18%",
      bottom: "20%"
      // containLabel: true
    },//直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。
    xAxis: {
      axisLabel: {
         interval:0,
         rotate:35,
        textStyle: {
          color: '#fff',
          fontSize: 16,
        }
      },
      data: data2,
      axisTick:{       //x轴刻度线
        show:true
      },
      splitLine: {     //网格线
        show: false
      },
      axisLine:{		//坐标轴线
        show:true
      }
      
    },
    yAxis: {
      show:true,
      max: 100,
      min:0,
      splitLine:{
        show:false
    }
    },
    series: [{
      name: '已办',
      type: 'bar',
      stack:'使用情况',
      data:data1,
      barWidth : 30,//柱图宽度
      itemStyle:{
        color: function(params) { 
                    var colorList = ['#C33531','#EFE42A','#64BD3D','#EE9201','#29AAE3', '#B74AE5','#0AAF9F','#E89589','#16A085','#4A235A','#C39BD3 ','#F9E79F','#BA4A00','#ECF0F1','#616A6B','#EAF2F8','#4A235A','#3498DB' ]; 
                    return colorList[params.dataIndex] 
                },
         barBorderRadius: [0, 0, 40, 40] // 统一设置四个角的圆角大小
      },
      markPoint : {
        symbol:'pin',//标记类型
        symbolSize: 1,//图形大小
        itemStyle: {
          normal: {
            borderColor: '#fff',
            borderWidth: 1,            // 标注边线线宽，单位px，默认为1
            label: {
              show: true,
              fontSize: 20
            }
             }
            },
          data :data4//配置项 
        }
    },{
      name: '未办',
      type: 'bar',
      stack:'使用情况',
      data: data3,
      itemStyle:{
        color:"rgba(255,255,255,.2)",
         barBorderRadius: [50, 50, 0, 0]// 统一设置四个角的圆角大小
      }
    }]
  };
  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
};


//方法【工单状态】
function gdzt() {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448"];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".chart33"));
  // 2. 指定配置和数据
  var option = {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
      // containLabel: true
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["待受理工单数", "待分派工单数", "待办理工单数", "待回访工单数"],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      },
      {
        data: [],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        data: [70, 34, 60, 78],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 20,
          // 此时的color 可以修改柱子的颜色
          color: function (params) {
            // params 传进来的是柱子对象
            // console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 30,
        // 显示柱子内的文字
        label: {
          show: true,
          position: "inside",
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: "{c}个"
        }
      },
      {
        name: "框",
        type: "bar",
        barCategoryGap: 50,
        barWidth: 30,
        yAxisIndex: 1,
        data: [100, 100, 100, 100],
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 20
        }
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
};


//方法【需求类型】
function xqlx() {
  var myChart = echarts.init(document.querySelector(".chart44"));
  var option = {
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f"
    ],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      bottom: "0%",
      itemWidth: 15,
      itemHeight: 15,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "20"
      }
    },
    series: [
      {
        name: "统计",
        type: "pie",
        radius: ["10%", "70%"],
        center: ["50%", "50%"],
        roseType: "radius",
        // 图形的文字标签
        label: {
          fontSize: 20,
          formatter: '{b}: {c} \n ({d}%)'
        },
        // 链接图形和文字的线条
        labelLine: {
          // length 链接图形的线条
          length: 3,
          // length2 链接文字的线条
          length2: 4
        },
        data: [
          { value: 53, name: "咨询" },
          { value: 26, name: "诉求" },
          { value: 24, name: "举报"},
          { value: 25, name: "其他" }
         
        ]
      }
    ]
  };
  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
};


//方法【业务类型趋势变化】
function ywlxqs() {
  var yearData = [
    {
      year: "2018", // 年份
      data: [
        // 两个数组是因为有两条线
        [0, 0, 0, 79, 2, 0, 0, 0, 0, 0,0, 0],
        [0, 0, 0, 6, 0, 0, 0, 0, 0, 0,0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0,0, 0],
      ]
    },
    {
      year: "2019", // 年份
      data: [
        // 两个数组是因为有两条线
        [0, 0, 0, 79, 2, 0, 0, 0, 0, 0,0, 0],
        [0, 0, 0, 6, 0, 0, 0, 0, 0, 0,0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0,0, 0],
      ]
    }
    ,
    {
      year: "2020", // 年份
      data: [
        // 两个数组是因为有两条线
        [0, 0, 0, 79, 0, 0, 0, 0, 0, 0,0, 0],
        [0, 0, 0, 6, 0, 0, 0, 0, 0, 0,0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0,0, 0],
      ]
    }
  ];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".chart55"));
  // 2.指定配置
  var option = {
    // 通过这个color修改两条线的颜色
    color: ["#00f2f1", "#ed3f35","#00B2EE"],
    tooltip: {
      trigger: "axis"
    },
    legend: {
      // 如果series 对象有name 值，则 legend可以不用写data
      // 修改图例组件 文字颜色
      textStyle: {
        color: "#4c9bfd"
      },
      // 这个10% 必须加引号
      right: "10%"
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true, // 显示边框
      borderColor: "#012f4a", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a" // 分割线颜色
        }
      }
    },
    series: [
      {
        name: "咨询",
        type: "line",
        // true 可以让我们的折线显示带有弧度
        smooth: true,
        data: yearData[0].data[0]
      },
      {
        name: "诉求",
        type: "line",
        smooth: true,
        data: yearData[0].data[1]
      }
      ,
      {
        name: "投诉",
        type: "line",
        smooth: true,
        data: yearData[0].data[2]
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
};




//企业类型方法
function qylx() {
  var myChart = echarts.init(document.querySelector('.chartqylx'));
  var option = {

   series: [{
           type: "pie",                // 系列1类型: 饼图
           center: ["25%","30%"],      // 饼图的中心(圆心)坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
           radius: ["39%","40%"],      // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
                                       // 可以将内半径设大显示成圆环图（Donut chart）。
           clockWise: false,           // 饼图的扇区是否是顺时针排布。[ default: true ]
           startAngle: 90,             // 起始角度，支持范围[0, 360]。 [ default: 90 ]
           hoverAnimation: true,       // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
           itemStyle: {                // 图形样式
               normal: {
                   color: "#5886f0",       // 图形的颜色
                   borderColor: "#5886f0", // 图形的描边颜色
                   borderWidth: 10,        // 描边线宽。为 0 时无描边。[ default: 0 ]
                   borderType: 'solid',    // 柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'。
                   label: {                // 图形内部标签
                       show: true,                 // 是否显示标签
                       textStyle: {                // 标签文本样式
                           fontSize: 20,
                           fontWeight: "bold"      // 标签字体加粗,'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                       },
                       position: "center"          // 标签的位置,'outside'(饼图扇区外侧，通过视觉引导线连到相应的扇区)
                                                   // 'inside'(饼图扇区内部);  'inner' 同 'inside'。
                                                   // 'center'(在饼图中心位置。)
                   },
                   labelLine: {            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线。
                       show: false
                   }
               },
               emphasis: {                 // 高亮的扇区和标签样式(起强调作用)
                   color: "#5886f0",
                   borderColor: "#5886f0",
                   borderWidth: 10,
                   borderType: 'solid',
                   label: {
                       textStyle: {
                           fontSize: 20,
                           fontWeight: "bold"
                       }
                   }
               }
           },
           data: [{value: 52.38,name: "普通企业52.38%"},
               {name: " ",value: 47.3,
                   itemStyle: {
                       normal: {
                           color: "#5886f0",
                           borderColor: "#5886f0",
                           borderWidth: 0,
                           label: {
                               show: false
                           },
                           labelLine: {
                               show: false
                           }
                       },
                       emphasis: {
                           color: "#5886f0",
                           borderColor: "#5886f0",
                           borderWidth: 0
                       }
                   }
               }
           ]
       }, {   
       
           type: "pie", // 系列2类型: 饼图
           center: [
               "75.0%",
               "30%"
           ],
           radius: [
               "39%",
               "40%"
           ],
           clockWise: false,
           hoverAnimation: true,
           itemStyle: {
               normal: {
                   label: {
                       show: true,
                       textStyle: {
                           fontSize: 20,
                           fontWeight: "bold"
                       },
                       position: "center"
                   },
                   labelLine: {
                       show: false
                   },
                   color: "#ee3a3a",
                   borderColor: "#ee3a3a",
                   borderWidth: 10
               },
               emphasis: {
                   label: {
                       textStyle: {
                           fontSize: 20,
                           fontWeight: "bold"
                       }
                   },
                   color: "#ee3a3a",
                   borderColor: "#ee3a3a",
                   borderWidth: 10
               }
           },
           data: [{
                   value: 16.67,
                   name: "重点企业：16.67%"
               },
               {
                   name: " ",
                   value: 52.7,
                   itemStyle: {
                       normal: {
                           label: {
                               show: false
                           },
                           labelLine: {
                               show: false
                           },
                           color: "#ee3a3a",
                           borderColor: "#ee3a3a",
                           borderWidth: 0
                       },
                       emphasis: {
                           color: "#ee3a3a",
                           borderColor: "#ee3a3a",
                           borderWidth: 0
                       }
                   }
               }
           ]
       }, {   
         type: "pie", // 系列2类型: 饼图
         center: [
             "50%",
             "70%"
         ],
         radius: [
             "39%",
             "40%"
         ],
         clockWise: false,
         hoverAnimation: true,
         itemStyle: {
             normal: {
                 label: {
                     show: true,
                     textStyle: {
                         fontSize: 20,
                         fontWeight: "bold"
                     },
                     position: "center"
                 },
                 labelLine: {
                     show: false
                 },
                 color: "#AFEEEE",
                 borderColor: "#AFEEEE",
                 borderWidth: 10
             },
             emphasis: {
                 label: {
                     textStyle: {
                         fontSize: 20,
                         fontWeight: "bold"
                     }
                 },
                 color: "#AFEEEE",
                 borderColor: "#AFEEEE",
                 borderWidth: 10
             }
         },
         data: [{
                 value: 30.95,
                 name: "匿名企业:30.95%"
             },
             {
                 name: " ",
                 value:78.05,
                 itemStyle: {
                     normal: {
                         label: {
                             show: false
                         },
                         labelLine: {
                             show: false
                         },
                         color: "#AFEEEE",
                         borderColor: "#AFEEEE",
                         borderWidth: 0
                     },
                     emphasis: {
                         color: "#AFEEEE",
                         borderColor: "#AFEEEE",
                         borderWidth: 0
                     }
                 }
             }
         ]
     }
   ]
};
 myChart.setOption(option);
 // 4. 让图表跟随屏幕自动的去适应
 window.addEventListener("resize", function () {
    myChart.resize();
 });
};



//热点问题方法
function  rdwt(){

  var myChart = echarts.init(document.querySelector(".chartrdwt"));
  var plantCap = [{
 name: '综合协调',
 value: '35'
 }, {
 name: '疫情管控协调',
 value: '33'
 }, {
 name: '返岗用工',
 value: '8'
 }, {
 name: '政策法律服务',
 value: '4'
 }, {
 name: '重大项目建设',
 value: '1'
 }];
 var datalist = [{
 offset: [56, 48],
 symbolSize: 120,
 // opacity: .95,
 color: '#FFA07A',
 
 }, {
 
 offset: [30, 70],
 symbolSize: 110,
 color: '#F5DEB3'
 }, {
 offset: [5, 43],
 symbolSize: 80,
 color: '#AFEEEE'
 
 }, {
 offset: [93, 30],
 symbolSize: 60,
 color: '#FFB5C5'
 }, {
 offset: [26, 19],
 symbolSize: 50,
 color: '#F0F8FF'
 }];
 
 var datas = [];
 for (var i = 0; i < plantCap.length; i++) {
 var item = plantCap[i];
 var itemToStyle = datalist[i];
 datas.push({
   name: item.value + '\n' + item.name,
   value: itemToStyle.offset,
   symbolSize: itemToStyle.symbolSize,
   label: {
       normal: {
           textStyle: {
               fontSize: 16
           }
       }
   },
 
   itemStyle: {
       normal: {
          color: itemToStyle.color,
           opacity: itemToStyle.opacity
      }
   },
 })
 }
 option = {
 grid: {
   show: false,
   top: 10,
   bottom: 10
 },
 
 xAxis: [{
   gridIndex: 0,
   type: 'value',
   show: false,
   min: 0,
   max: 100,
   nameLocation: 'middle',
   nameGap: 5
 }],
 
 yAxis: [{
   gridIndex: 0,
   min: 0,
   show: false,
   max: 100,
   nameLocation: 'middle',
   nameGap: 30
 }],
 series: [{
   type: 'scatter',
   symbol: 'circle',
   symbolSize: 120,
   label: {
       normal: {
           show: true,
           formatter: '{b}',
           color: '#FFF',
           textStyle: {
               fontSize: '16'
           }
       },
   },
   itemStyle: {
       normal: {
           color: '#F30'
       }
   },
   data: datas
 }]
 
 };
 myChart.setOption(option);
 $(document).ready(function(){
 　　myChart.resize();  
 
 })
 window.addEventListener("resize", function () {
 　　myChart.resize();  
 });


}

