<template>
  <div style="padding:20px">
    <Title>快速开始</Title>
    <!-- 先需要使用tabs -->
    <div style="margin-top:20px">
      <h3>引言</h3>
      <div class="content">
         <!-- <pre>json.parse('
                sadas,显示代码片段
              ')
        </pre> -->
      </div>
    </div>
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
</style>
