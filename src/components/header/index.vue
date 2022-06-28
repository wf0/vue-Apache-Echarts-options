<template>
  <div class="box">
    <div class="logo">
      <img class="logo" width="136"
        src="https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/zh/images/logo.png?_v_=20200710_1"
        alt="logo">
    </div>
    <div class="menu">
      <el-button size="mini" icon="el-icon-tickets">文档</el-button>
      <el-button size="mini" icon="el-icon-search">帮助</el-button>
      <el-button size="mini" icon="el-icon-search">Github</el-button>
      <el-dropdown>
        <span class="el-dropdown-link">
          <!-- <i class="el-icon-s-operation"></i> -->
          <el-avatar icon="el-icon-user-solid" :size="30"></el-avatar>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item >API</el-dropdown-item>
          <el-dropdown-item >示例</el-dropdown-item>
          <el-dropdown-item >配置项</el-dropdown-item>
          <el-dropdown-item >表格工具</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [{
        content: '',
        value: 'https://echarts.apache.org/zh/api.html#echarts',
      }, {
        content: '',
        value: 'https://echarts.apache.org/examples/zh/index.html',
      }, {
        content: '',
        value: 'https://echarts.apache.org/zh/option.html#title',
      }, {
        content: '',
        value: 'https://echarts.apache.org/zh/spreadsheet.html',
      }],
    }
  },
  methods: {
    clickHandler(option) {
      console.log(option);
      // location.href=option.path;
      window.open(`${option.value}`)
    },
  },

}
</script>
<style scoped>
.el-dropdown{
  margin: 0 0 0 10px;
}
.box {
  position: relative;
}

.logo {
  margin-left: 20px;
  line-height: 60px;
  vertical-align: middle;
}

.menu {
  position: absolute;
  right: 20px;
  top: 50%;
  /* 使用定位+ 偏移实现居中定位 */
  transform: translate(0, -50%);
}
.el-avatar{
  vertical-align: middle;
}

</style>