<template>
  <div style="padding:20px">
    <Title
      url="https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-background.png?_v_=1655181358610">
      带背景色的柱状图</Title>
    <!-- 先需要使用tabs -->
    <div style="margin-top:20px"></div>
  </div>
</template>

<script>
import Title from "@/components/title"
import * as echarts from 'echarts';
export default {
  name: "bar2",
  components: { Title },
};
</script>

<style scoped>
.box {
  margin-top: 20px;
  width: 90%;
}
</style>