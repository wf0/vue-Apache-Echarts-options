<template>
  <div>
    <el-menu default-active="test" class="el-menu-vertical-demo" router>
      <el-menu-item-group>
        <span slot="title">开始</span>
        <el-menu-item index="test" style="color:red;font-weight:900">测试用例</el-menu-item>
        <el-menu-item index="help">使用帮助</el-menu-item>
        <el-menu-item index="start">快速开始</el-menu-item>
        <el-menu-item index="logs">更新日志</el-menu-item>
        <el-menu-item index="navigation">功能导航</el-menu-item>
      </el-menu-item-group>

      <el-menu-item-group title="折线图">
        <el-menu-item index="line1">line-基础折线图</el-menu-item>
        <el-menu-item index="line2">line-平滑折线图</el-menu-item>
        <el-menu-item index="line3">line-基础面积图</el-menu-item>
        <el-menu-item index="line4">line-堆叠面积图</el-menu-item>
        <el-menu-item index="line5">line-堆叠渐变面积图</el-menu-item>
      </el-menu-item-group>

      <el-menu-item-group title="柱状图">
        <el-menu-item index="bar1">bar-基础柱状图</el-menu-item>
        <el-menu-item index="bar2">bar-带背景色的柱状图</el-menu-item>
        <el-menu-item index="bar3">bar-自定义单个柱子颜色</el-menu-item>
        <el-menu-item index="bar4">bar-瀑布图（柱状图模拟）</el-menu-item>
        <el-menu-item index="bar5">bar-折柱混合</el-menu-item>
      </el-menu-item-group>

      <el-menu-item-group title="饼图">
        <el-menu-item index="pie1">pie-基础饼图</el-menu-item>
        <el-menu-item index="pie2">pie-环形图</el-menu-item>
        <el-menu-item index="pie3">pie-圆角环形图</el-menu-item>
        <el-menu-item index="pie4">pie-基础南丁格尔玫瑰图</el-menu-item>
      </el-menu-item-group>

      <!-- <el-menu-item-group title="散点图">
        <el-menu-item index="scatter1">scatter-基础散点图</el-menu-item>
        <el-menu-item index="scatter2">scatter-指数回归（使用统计插件）</el-menu-item>
        <el-menu-item index="scatter3">scatter-线性回归（使用统计插件）</el-menu-item>
      </el-menu-item-group>

      <el-menu-item-group title="K线图">
        <el-menu-item index="k1">K-基础 K 线图</el-menu-item>
        <el-menu-item index="k2">K-上证指数</el-menu-item>
      </el-menu-item-group>

      <el-menu-item-group title="雷达图">
        <el-menu-item index="Radar1">Radar-基础雷达图</el-menu-item>
        <el-menu-item index="Radar2">Radar-AQI - 雷达图</el-menu-item>
        <el-menu-item index="Radar3">Radar-多雷达图</el-menu-item>
      </el-menu-item-group> -->
      <el-menu-item-group title="更多功能，敬请期待.">
      </el-menu-item-group>
      <!-- 
      <el-menu-item-group title="树图">
      </el-menu-item-group>
      <el-menu-item-group title="旭日图">
      </el-menu-item-group>
      <el-menu-item-group title="平行坐标系">
      </el-menu-item-group>
      <el-menu-item-group title="漏斗图">
      </el-menu-item-group>
      <el-menu-item-group title="仪表盘">
      </el-menu-item-group>
      <el-menu-item-group title="象形柱图">
      </el-menu-item-group>
      <el-menu-item-group title="数据集">
      </el-menu-item-group> -->
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
  },

}
</script>
<style scoped>
</style>