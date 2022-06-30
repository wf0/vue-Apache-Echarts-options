<template>
  <div style="padding:20px">
    <Title
      url="https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-smooth.png?_v_=1655181358610">
      line-平滑统计图</Title>
    <!-- 先需要使用tabs -->
    <div style="margin-top:20px"></div>
  </div>
</template>

<script>
import Title from "@/components/title"
import * as echarts from 'echarts';
export default {
  name: "line2",
  components: { Title },
};
</script>

<style scoped>
</style>