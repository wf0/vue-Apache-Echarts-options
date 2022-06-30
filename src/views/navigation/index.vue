<template>
  <div style="padding:20px">
    <Title>功能导航</Title>
    <!-- 先需要使用tabs -->
    <div style="margin-top:20px">
      <h3>折线图</h3>
      <div class="content">

        <a href="line1">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-simple.png?_v_=1655181358610"
              class="image">
            <div style="padding: 14px;">
              <span>line-基础折线图</span>
            </div>
          </el-card>
        </a>

        <a href="line2">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-smooth.png?_v_=1655181358610"
              class="image">
            <div style="padding: 14px;">
              <span>line-平滑折线图</span>
            </div>
          </el-card>
        </a>

        <a href="line3">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-basic.png?_v_=1655181358610"
              class="image">
            <div style="padding: 14px;">
              <span>line-基础面积图</span>
            </div>
          </el-card>
        </a>

        <a href="line4">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-stack.png?_v_=1655181358610"
              class="image">
            <div style="padding: 14px;">
              <span>line-堆叠面积图</span>
            </div>
          </el-card>
        </a>

        <a href="line5">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-stack-gradient.png?_v_=1655181358610"
              class="image">
            <div style="padding: 14px;">
              <span>line-堆叠渐变面积图</span>
            </div>
          </el-card>
        </a>

      </div>
       <el-divider></el-divider>

    </div>
  </div>
</template>

<script>
import Title from "@/components/title"
import * as echarts from 'echarts';
export default {
  name: "navigation",
  components: { Title },
};
</script>

<style scoped>
a {
  color: #409EFF;
  text-decoration: none;
}

.el-card span {
  color: #409EFF;
}

.content {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-wrap:wrap;
  margin: 20px 0;
}

.content .el-card {
  margin: 10px;
}

img {
  width: 235px;
  height: 235px;
  transition: 0.3s ease-in-out;
}

a:hover img {
  transform: scale(1.2);
}
</style>