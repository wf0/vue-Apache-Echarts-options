<template>
  <div style="padding:20px">
    <Title>快速开始</Title>
    <!-- 先需要使用tabs -->
    <!-- <pre>json.parse('
                sadas,显示代码片段
              ')
        </pre> -->
    <div style="margin-top:20px">
      <h3>安装</h3>
      <h6>NPM</h6>
      <div class="content">
        <p>你可以使用如下命令通过 npm 安装 ECharts：</p>
        <div class="code"><code>npm install echarts --save</code></div>
        <p>引入方式：</p>
        <div class="code"><code>import * as echarts from 'echarts';</code></div>
      </div>
      <el-divider></el-divider>

      <h6>CDN</h6>
      <div class="content">
        <p>推荐从 jsDelivr 引用 echarts：</p>
        <div class="code">
          <code><el-link type="primary" href="https://www.jsdelivr.com/package/npm/echarts" target="_blank">echarts</el-link></code>
        </div>
      </div>
      <el-divider></el-divider>
    </div>

    <h6>Github</h6>
    <div class="content">
      <p>apache/echarts 项目的 release 页面可以找到各个版本的链接。点击下载页面下方 Assets 中的 Source code，解压后 dist 目录下的 echarts.js 即为包含完整 ECharts
        功能的文件：</p>
      <div class="code">
        <code><el-link type="primary" href="https://github.com/apache/echarts/releases" target="_blank">Apache Echarts Release Assets</el-link></code>
      </div>
    </div>
    <el-divider></el-divider>
    <h3>基础使用</h3>
    <div class="content">
      <p>下面演示在vue项目中如何使用本配置工具：</p>
      <p>1. 下载安装完成后，在需要 Apache Echarts 的页面引入 Echarts：</p>
      <div class="code">
        <code>import * as echarts from 'echarts';</code>
      </div>
      <p>2. 页面准备DOM给统计图，需要内联设置宽高(使用vue ref标记页面DOM)：</p>
      <div class="code">
        <code><pre>&lt;div ref="demo" style="width:500px;height:400px"&gt;&lt;/div&gt;</pre></code>
      </div>
      <p>3. 基于准备好的dom，初始化echarts实例(vue获取DOM是在mounted之后，因此统计图绘制方法也常写在mounted中):</p>
      <div class="code">
        <code>
          <pre>
      mounted() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(this.$refs["demo"]);
            
            // 准备配置对象
            var option = {};

            // 绘制统计图
            myChart.setOption(option);
          },
        </pre>
          </code>
      </div>
      <p>4. 使用本工具，配置出想要的效果，复制配置项：</p>
      <div class="code">
        <img src="../../assets/start_img1.png" alt="">
      </div>
      <p>5. 粘贴到之前空缺的配置项中：</p>
      <div class="code">
        <code>
          <pre>
      mounted() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(this.$refs["demo"]);
            
            // 准备配置对象
            var option = { "tooltip": { "show": false }, "toolbox": { "show": true, "feature": { "dataView": { ..... };

            // 绘制统计图
            myChart.setOption(option);
          },
        </pre>
          </code>
      </div>
      <p>6. 即可看到统计图效果：</p>
      <div class="code">
        <img src="../../assets/start_img2.png" alt="">
      </div>
    </div>
    <el-divider></el-divider>
    <h3>进阶教程</h3>
    <div class="content">
      <p style="color:red"><b>***注：本工具仅是对配置项做修改，数据信息需要用户自行处理，具体处理过程参考如下：</b></p>
      <p>1. 一般的统计图数据是来之后端查询数据库的，因此需要将后端数据处理为统计图数据格式；</p>
      <p>2. 分析数据配置项：</p>
      <div class="code">
        <code>
          <pre>
             // X轴
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                // Y轴
                yAxis: {},
                series: [
                    {
                        label: {
                            show: this.showData,
                            position: this.dataPosition,
                        },
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
          </pre>
        </code>
      </div>
      <p> 不难看出，X轴的数据配置在xAxis data中，Y轴的数据配置在series
        data中；（其他的统计图类似，就是看它需要的数据格式是什么，就将后端返回的数据处理为其需要的即可，这个也可以很明显看出什么数据该放在哪的。）</p>
      <p>3. 后端返回数据格式（一般都是请求的SQL，故而常见数据格式如下）：</p>
      <div class="code">
        <code>
          <pre>
             [{name:'xxx',num;'xxx',...},{name:'xxx',num;'xxx',...},{},{},{},{},{},{},{},{},{},{}]
          </pre>
        </code>
      </div>
      <p>4. 接下来就是js数组处理能力了，分离为两个数组：nameArr与numArr，直接在配置项中引用就可以使用后端数据了，并且是动态数据。</p>
      <div class="code">
        <code>
          <pre>
          // 处理数据：
              let nameArr = [];
              let numArr = [];
              res.data.forEach(item => {
                  nameArr.push(item.name);
                  numArr.push(item.num)
              });

              // 应用数据：将分离的数据放在该放的位置即可
              xAxis: {
                  data: nameArr
              },
              // Y轴
              yAxis: {},
              series: [
                      name: '销量',
                      type: 'bar',
                      data: numArr
                  }
              ]
          </pre>
        </code>
      </div>
      <p>5. 较难的是三维数据的处理，如<el-link type="primary" href="https://echarts.apache.org/examples/zh/editor.html?c=mix-line-bar" target="blank">折柱混合</el-link> 。</p>
      <div class="code">
        <code>
          <pre>
          // 举例说明：【制作师傅的已完成、在维修、评分折柱混合统计图】 => 需要师傅名称、已完成、在维修、评分：
              // 后端返回的数据： [{ workername: '魏师傅', step: 3, num: 8, score: 7.8 },
              { workername: '韦师傅', step: 3, num: 8, score: 8.2 },
              { workername: '魏师傅', step: 4, num: 8, score: 7.8 },
              { workername: '韦师傅', step: 4, num: 8, score: 8.2 }]
              
              // 如何分离数据？
              // 1. 初始化数据：
              let workername = [res.data[0].workername];
              let score = [res.data[0].averagescore];
              // 获取在维修和已完成的订单数(这个需要根据师傅名检索)
              let waitorder = [];
              let finishorder = [];

              // 2. 获取所有师傅名称
              res.data.forEach(res => {
                if (workername.indexOf(res.workername) == -1) {
                  workername.push(res.workername);
                  score.push(res.averagescore);
                }
              });

              // 3. 获取在维修和已完成的订单数
              workername.forEach(name => {
              let nameArr = []; // 从原始数据中找到该师傅的所有记录

              res.data.forEach(res => {
                  if (res.workername == name) nameArr.push(res);
                });

                /* 临时记录是否存在 */
                let step3 = 0;
                let step5 = 0;
                nameArr.forEach(item => {
                  /* 判断有没有step=3,或者step=5的单子 */
                  if (item.step == 3) step3 = item.num;
                  if (item.step == 5) step5 = item.num;
                });
                if (step3) {
                  waitorder.push(step3);
                } else {
                  waitorder.push(0);
                }
                if (step5) {
                  finishorder.push(step5);
                } else {
                  finishorder.push(0);
                }
              });

              // 4. 这样就能分离出  name、score、finishOrder、waitOrder 需要的四组数据，放在相应的位置即可；
              // 5. 同时这个过程，也可以交给后端处理，直接返回前端需要的数据格式，但是，你懂的！
          </pre>
        </code>
      </div>
      <p>以上两个常用的数据处理过程，便是如何将后端请求数据应用到统计图中的示例，可以好好理解下。</p>

    </div>
    <el-divider></el-divider>
  </div>
</template>

<script>
import Title from "@/components/title"
import * as echarts from 'echarts';
export default {
  name: "start",
  components: { Title },
};
</script>

<style scoped>
h6 {
  margin: 20px 10px 0;
}

.content {
  font-size: 16px;
  font-weight: 500;
  text-indent: 2rem;
  margin: 30px 0;
}

.content li {
  margin: 5px 0;
}

.content p {
  margin: 5px 0;
}

.code {
  background-color: #f3f3f3;
  padding: 10px;
  margin: 30px;
  border-radius: 5px;
}

img {
  height: 300px;
  width: 500px;
}
</style>
