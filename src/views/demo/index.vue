<template>
  <div>
    <div ref="demo" style="width:500px;height:400px"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(this.$refs["demo"]);

    // 准备配置对象
    var option = { "tooltip": { "show": false }, "toolbox": { "show": true, "feature": { "dataView": { "show": true, "readOnly": false }, "restore": { "show": true }, "saveAsImage": { "show": true } } }, "title": { "text": "ECharts 入门示例", "link": "", "target": "blank", "subtext": "", "sublink": "", "suntarget": "blank", "left": 0 }, "xAxis": { "data": ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"] }, "yAxis": {}, "series": [{ "label": { "show": true, "position": "inside" }, "name": "销量", "type": "bar", "data": [5, 20, 36, 10, 10, 20] }] };

    // 绘制统计图
    myChart.setOption(option);
  },

}
</script>

<style scoped>
.box {
  margin-top: 20px;
  width: 90%;
}
</style>