<template>
  <div style="padding:20px">
    <Title>使用帮助</Title>
    <!-- 先需要使用tabs -->
    <div style="margin-top:20px">
      <h3>引言</h3>
      <div class="content">
        本工具致力于采用配置式解决用户使用Apache Echarts过程中遇到的想要的效果不知道配置，需要查询官方配置项手册的方式存在的问题。
        采取简单可视化、配置式的方式，使得用户可以实时观测到想要的统计图效果，并一键复制配置项，粘贴到自己的项目中，省去了中间查阅配置项的烦恼。</div>
      <h3>场景举例</h3>
      <div class="content">
        <li>某用户想使用 Apache Echarts 绘制一幅有 “标题”、“标题有超链接”、“hover能显示数据”的基础柱状图:</li>
        <li>
          <img src="../../assets/help_img1.png" alt="">
        </li>
        <li>如上图，根据Apache Echarts 默认的基础柱状图，是没有标题、超链接、数据选项，因此，用户需要查看Apache提供的配置项手册，如下：</li>
        <li>
          <img src="../../assets/help_img2.png" alt="" style="width:200px">
        </li>
        <li>
          用户需要根据配置项的说明，测试后，达到想要的效果。
        </li>
        <li><strong>但是！我们新增几个需求，要有工具栏、提示框、图例。</strong>用户还是通过查阅配置项手册，实现效果，那这个过程是比较痛苦的。</li>
        <li style="color:red">=====> </li>
        <li style="color:red"> <B>但是，使用我们的配置工具后，一切将变得超级简单：</B></li>
        <li>
          <img src="../../assets/help_img3.png" alt="" style="height:400px">
        </li>
        <li>
          统计图右侧给出了当前统计图常用的配置项，用户通过输入、点击、选择等方式，即可实时看到统计图效果；还可以通过一键复制实现配置项的复制功能，显示当前配置项功能。
        </li>
        <li>再将复制的配置项粘贴到项目中，即可达到用户想要的效果。</li>
        <li>此为当前项目测试用例，请<el-link type="primary" href="test">前往试试</el-link>。</li>
      </div>
      <h3>使用说明</h3>
      <div class="content">
        本工具使用说明：
        <p>1. 工具致力于<b>配置项</b>，而不是统计图本身，因而，需要用户具备基础的 Apache Echarts 使用技能;</p>
        <p>2. 工具基于 Apache Echarts 配置项手册，采用配置式书写统计图配置项，并不会脱离标准规范；</p>
        <p>3. 同时，并非所有的配置项均列出，原因诸多，仅为常见配置，详细的还可参见 Apache Echarts 配置项手册；</p>
        <p>4. 仅对统计图的配置项做修改，统计图的数据还需要用户自行处理，后期可能根据数据特性将数据也纳入配置项开发中；</p>
        <p>5. 如遇到不能正常显示统计图，可能原因是配置项被设为 String 字符串类型，使用 <code>JSON.parse()</code>转换即可；</p>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/title"
import * as echarts from 'echarts';
export default {
  name: "help",
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

img {
  height: 300px;
  width: 700px;
  margin: 10px;
}
</style>