<template>
  <div style="padding:20px">
    <Title
      url="https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-simple.png?_v_=1655181358610">
      line-基础折线图
    </Title>
    <!-- 先需要使用tabs -->
    <div style="margin-top:20px"></div>
  </div>
</template>

<script>
import Title from "@/components/title"
import * as echarts from 'echarts';
export default {
  name: "line1",
  components: { Title, },
};
</script>

<style scoped>
</style>