<template>
  <div style="padding:20px">
    <Title
      url="https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-basic.png?_v_=1655181358610">
      line-基础面积图</Title>
    <!-- 先需要使用tabs -->
    <div class="box">
      <el-tabs type="border-card">
        <el-tab-pane label="示例">
          <!-- 使用栅格布局 -->
          <el-row>
            <el-col :span="12">
              <div ref="demo" style="width:500px;height:450px;"></div>
            </el-col>
            <el-col class="border-left pos-re" :span="12">
              <!-- 表单配置项 -->
            </el-col>
          </el-row>
          <el-row>
            <CopyOption :option="option" />
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="API">
        </el-tab-pane>
        <el-tab-pane label="指南">角色管理</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Title from "@/components/title"
import CopyOption from '@/components/copy-option'
import * as echarts from 'echarts';
export default {
  name: "line3",
  components: { Title, CopyOption },

  data() {
    return {
      // 使用变量存储
      myChart: null,// 统计图对象
      option: "", // 配置项(这样会变成vue的对象)

    }
  },
  methods: {
    // 重绘
    reWrite() {
      // 获取统计图对象
      this.myChart = echarts.init(this.$refs["demo"]);

      // 重新计算配置项对象
      this.option = JSON.stringify({
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
          }
        ]
      })

      // 重新绘制统计图
      this.myChart.setOption(JSON.parse(this.option))
    },
  },
  mounted() {
    this.reWrite();
  },
};
</script>

<style scoped>
.box {
  margin-top: 20px;
  width: 90%;
}
</style>