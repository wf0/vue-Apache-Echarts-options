<template>
  <div style="padding:20px">
    <Title>更新日志</Title>
    <!-- 先需要使用tabs -->
    <div style="margin-top:20px">
      <el-timeline>
        <el-timeline-item timestamp="2022-6-30" placement="top" color="green" size="large">
          <el-card>
            <h4>项目开发</h4>
            <ul>
              <li>总结Apache Echarts常用配置项，并提交Github</li>
              <li>完善Header Search搜索框功能</li>
              <li>完善标题title插槽，并配置插槽内容</li>
              <li>完成帮助页面开发、修复menu命名冲突问题、完善测试用例</li>
              <li>完成开始页开发工作</li>
              <li>完成logs开发日志页开发</li>
            </ul>

          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2022-6-29" placement="top" color="green" size="large">
          <el-card>
            <h4>项目开发</h4>
            <ul>
              <li>zengming 完善左侧导航栏对应的路由和组件创建</li>
              <li>zengming 添加路由组件、配置路由信息 </li>
            </ul>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2022-6-28" placement="top" color="green" size="large">
          <el-card>
            <h4>项目创建</h4>
            <ul>
              <li>项目提交Github</li>
              <li>第一次上传项目文件</li>
            </ul>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
import Title from "@/components/title"
import * as echarts from 'echarts';
export default {
  name: "logs",
  components: { Title },
};
</script>

<style scoped>
h4 {
  margin: 10px 0;
}

li {
  margin: 10px;
}
</style>