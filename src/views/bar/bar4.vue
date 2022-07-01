<template>
  <div style="padding:20px">
    <Title
      url="https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-waterfall.png?_v_=1655181358610">
      瀑布图（柱状图模拟）</Title>
    <!-- 先需要使用tabs -->
    <div style="margin-top:20px"></div>
  </div>
</template>

<script>
import Title from "@/components/title"
import * as echarts from 'echarts';
export default {
  name: "bar4",
  components: { Title },
};
</script>

<style scoped>
.box {
  margin-top: 20px;
  width: 90%;
}
</style>