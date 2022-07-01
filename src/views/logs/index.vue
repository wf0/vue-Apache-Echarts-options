<template>
  <div style="padding:20px">
    <Title>更新日志</Title>
    <!-- 先需要使用tabs -->
    <div class="box">
      <el-timeline>
        <!-- 添加新logs直接在此上添加 timeline item 即可 -->
        <el-timeline-item timestamp="2022-7-1" placement="top" color="green" size="large">
          <el-card>
            <h4>Features</h4>
            <ul>
              <li>新增 start 进阶教程，意在释义统计图数据处理过程，简单展示两种后端返回数据后，利用JS处理，并应用到统计图中</li>
              <li>将复制代码功能封装为公共组件，并完善了复制代码成功提示，使用 props 传递配置项到公共组件中</li>
              <li>开发 navigation 柱状图及饼图的设计及链接，使用 props 传递图片地址到 title 组件中</li>
              <li>新增 back Top 返回顶部功能</li>
              <li>重构 logs 页面</li>
            </ul>
          </el-card>
         
          <el-card>
            <h4>Host Fix</h4>
            <ul>
              <li>重构了 App 首页的布局方式，解决了scroll左右问题，实现固定钉效果：Affix</li>
              <li>修复 App 首页左侧Aside的布局，并实现动态 Affix</li>
              <li>修复页面无内容时，Aside异常问题</li>
              <li>修复页面主体内容的宽度设为 90% ，使得返回顶部按钮显示正常</li>
              <li>修复 Aside 刷新后的 default-active 失效问题</li>
            </ul>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2022-6-30" placement="top" color="green" size="large">
          <el-card>
            <h4>Host Fix</h4>
            <ul>
              <li>修复navigation Flex布局换行问题</li>
              <li>修复Title组件props传值，实现图片地址动态切换</li>
              <li>修复navigation card href链接失效</li>
              <li>修复测试用例一键复制、配置显示按钮样式</li>
              <li>修复若干小问题</li>
            </ul>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2022-6-30" placement="top" color="green" size="large">
          <el-card>
            <h4>Develop</h4>
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
            <h4>Develop</h4>
            <ul>
              <li>zengming 完善左侧导航栏对应的路由和组件创建</li>
              <li>zengming 添加路由组件、配置路由信息 </li>
            </ul>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2022-6-28" placement="top" color="green" size="large">
          <el-card>
            <h4>Create Project</h4>
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
.box {
  margin-top: 20px;
  width: 90%;
}

h4 {
  margin: 15px 0;
}

li {
  margin: 10px;
}

.el-card {
  margin: 10px 0;
}
</style>