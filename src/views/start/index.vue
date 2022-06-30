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
