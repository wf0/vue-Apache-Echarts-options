<template>
  <div style="padding:20px">
    <Title>Radar-多雷达图</Title>
    <!-- 先需要使用tabs -->
    <div style="margin-top:20px">
    </div>
  </div>
</template>

<script>
import Title from "@/components/title"
import * as echarts from 'echarts';
export default {
  name: "Radar3",
  components: { Title },
};
</script>

<style scoped>
.box {
  margin-top: 20px;
  width: 90%;
}
</style>