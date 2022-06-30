<template>
  <div class="box">
    <div class="logo">
      <img class="logo" width="136"
        src="https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/zh/images/logo.png?_v_=20200710_1"
        alt="logo">
    </div>
    <div class="menu">
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2" size="mini" />
      <el-button size="mini" @click="toApache('document')" icon="el-icon-tickets">文档</el-button>
      <el-button size="mini" @click="toApache('help')" icon="el-icon-search">帮助</el-button>
      <el-button size="mini" @click="toApache('github')" icon="el-icon-search">Github</el-button>
      <el-dropdown @command="dropdown">
        <span class="el-dropdown-link">
          <el-avatar icon="el-icon-user-solid" :size="30"></el-avatar>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="API">API</el-dropdown-item>
          <el-dropdown-item command="example">示例</el-dropdown-item>
          <el-dropdown-item command="options">配置项</el-dropdown-item>
          <el-dropdown-item command="table">表格工具</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

  </div>
</template>

<script>
export default {
  name: "Myheader",
  methods: {
    toApache(type) {
      switch (type) {
        case 'document':
          window.open("https://echarts.apache.org/handbook/zh/get-started/");
          break;
        case 'help':
          window.open("https://echarts.apache.org/zh/faq.html");
          break;
        case 'github':
          window.open("https://github.com/wf0/vue-Apache-Echarts-options");
          break;

        default:
          break;
      }
    },
    // 下拉菜单跳转功能
    dropdown(command) {
      switch (command) {
        case "API":
          window.open("https://echarts.apache.org/zh/api.html#echarts");
          break;
        case "example":
          window.open("https://echarts.apache.org/examples/zh/index.html");
          break;
        case "options":
          window.open("https://echarts.apache.org/zh/option.html#title");
          break;
        case "table":
          window.open("https://echarts.apache.org/zh/spreadsheet.html");
          break;

        default:
          break;
      }
    },
  },

}
</script>
<style scoped>
.el-input{
  display: inline-block;
  width: 150px;
  margin: 0 10px 0 0 ;

}
.el-dropdown {
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

.el-avatar {
  vertical-align: middle;
}
</style>