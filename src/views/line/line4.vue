<template>
  <div style="padding:20px">
    <Title
      url="https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-stack.png?_v_=1655181358610">
      line-堆叠面积图</Title>
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
              <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="主标题">
                  <el-input v-model="title"></el-input>
                </el-form-item>
                <el-form-item v-if="title" label="主标题链接">
                  <el-input v-model="titleLink"></el-input>
                </el-form-item>
                <el-form-item v-if="title && titleLink" label="主链接打开方式">
                  <el-select v-model="target" placeholder="请选择">
                    <el-option value="blank">blank</el-option>
                    <el-option value="self">self</el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="副标题">
                  <el-input v-model="subtext"></el-input>
                </el-form-item>
                <el-form-item v-if="subtext" label="副标题链接">
                  <el-input v-model="sublink"></el-input>
                </el-form-item>
                <el-form-item v-if="subtext && sublink" label="副链接打开方式">
                  <el-select v-model="subtarget" placeholder="请选择">
                    <el-option value="blank">blank</el-option>
                    <el-option value="self">self</el-option>
                  </el-select>
                </el-form-item>
                <el-form-item v-if="title || subtext" label="标题距左距离">
                  <el-input v-model.number="left"></el-input>
                </el-form-item>
                <el-form-item label="提示框">
                  <el-switch v-model="tooltip" active-color="#13ce66" inactive-color="#DCDFE6">
                  </el-switch>
                </el-form-item>
                <el-form-item label="显示数据">
                  <el-switch v-model="showData" active-color="#13ce66" inactive-color="#DCDFE6">
                  </el-switch>
                </el-form-item>
                <el-form-item v-if="showData" label="数据显示方式">
                  <el-select v-model="dataPosition" placeholder="请选择">
                    <el-option value="inside">inside</el-option>
                    <el-option value="top">top</el-option>
                    <el-option value="insideTop">insideTop</el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="工具栏">
                </el-form-item>
                <el-form-item label="数据视图">
                  <el-switch v-model="dataView" active-color="#13ce66" inactive-color="#DCDFE6">
                  </el-switch>
                </el-form-item>
                <el-form-item label="重置数据">
                  <el-switch v-model="restore" active-color="#13ce66" inactive-color="#DCDFE6">
                  </el-switch>
                </el-form-item>
                <el-form-item label="保存图片">
                  <el-switch v-model="saveAsImage" active-color="#13ce66" inactive-color="#DCDFE6">
                  </el-switch>
                </el-form-item>
              </el-form>
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
  name: "line4",
  components: { Title, CopyOption },
  data() {
    return {
      // 使用变量存储
      myChart: null,// 统计图对象
      option: "", // 配置项(这样会变成vue的对象)

      // 表单配置项:
      title: '',// 标题
      titleLink: '',// 标题链接
      target: 'blank',// 主标题链接打开方式
      subtext: "", // 副标题
      sublink: '',// 副标题链接
      subtarget: 'blank',//副标题链接打开方式
      left: 0,// 距左边的距离
      tooltip: false,
      showData: false,// 是否显示数据
      dataPosition: 'inside', //数据显示方式
      dataView: false,
      restore: false,
      saveAsImage: false,

    }
  },

  watch: {
    title() {
      // 重绘
      this.reWrite();
    },
    showData() {
      // 重绘
      this.reWrite();
    },
    titleLink() {
      // 重绘
      this.reWrite();
    },
    subtext() {
      // 重绘
      this.reWrite();
    },
    left() {
      // 重绘
      this.reWrite();
    },
    dataPosition() {
      // 重绘
      this.reWrite();
    },
    dataView() {
      // 重绘
      this.reWrite();
    },
    restore() {
      // 重绘
      this.reWrite();
    },
    saveAsImage() {
      // 重绘
      this.reWrite();
    },
    target() {
      // 重绘
      this.reWrite();
    },
    sublink() {
      // 重绘
      this.reWrite();
    },
    subtarget() {
      // 重绘
      this.reWrite();
    },
    tooltip() {
      // 重绘
      this.reWrite();
    },
  },
  methods: {
    // 重绘
    reWrite() {
      // 获取统计图对象
      this.myChart = echarts.init(this.$refs["demo"]);

      // 重新计算配置项对象
      this.option = JSON.stringify({
        // 标题
        title: {
          text: this.title == "" ? 'Stacked Area Chart' : this.title,
          link: this.titleLink,
          target: this.target,
          subtext: this.subtext,
          sublink: this.sublink,
          suntarget: this.subtarget,
          left: this.left,
        },
        tooltip: {
          show: this.showData,
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        toolbox: {
          feature: {
            dataView: { show: this.dataView, readOnly: false },
            restore: { show: this.restore },
            saveAsImage: { show: this.saveAsImage }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
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

.el-form {
  height: 500px;
  overflow: auto;
}
</style>