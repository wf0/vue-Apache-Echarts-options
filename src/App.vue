<template>
  <div id="app">
    <!-- 头部 -->
    <div class="header" style="border-bottom:solid #E7E7E7 1px">
      <Header />
    </div>
    <!-- 下部主要内容 -->
    <div class="container">
      <!-- 左侧导航栏 -->
      <div class="aside">
        <el-scrollbar style="height:800px">
          <Aside />
        </el-scrollbar>
      </div>
      <!-- 右侧主题内容 -->
      <div class="mainandfooter">
        <!-- 上main -->
        <div class="main">
          <router-view></router-view>
        </div>
        <!-- 下footer -->
        <!-- <div class="footer"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header';
import Aside from "@/components/aside"

export default {
  name: 'App',
  components: { Header, Aside, },
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.header {
  /* background-color: aliceblue; */
  height: 60px;
}

.container {
  /* background-color: aqua; */
  display: flex;
  height: 800px;
}

.aside {
  background-color: antiquewhite;
  flex: 2;
  /* overflow: auto; */
}

.mainandfooter {
  flex: 7;
}

.main {
  /* background-color: #F3F3F3; */
  height: 800px;
  overflow: auto;
  /* padding: 20px; */
}

.footer {
  /* background-color: beige; */
  height: 20%;
}
</style>
