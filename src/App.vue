<template>
  <div id="app">
    <div class="header">
      <Header />
    </div>
    <div class="container">
      <div class="aside">
        <div class="empty"></div>
        <el-scrollbar class="affix" :style="{ top: top + 'px' }">
          <Aside />
        </el-scrollbar>
      </div>
      <div class="main" ref="main">
        <router-view></router-view>
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
  data() {
    return {
      affix: true,
      top: 60
    }
  },
  mounted() {
    window.onscroll = () => {
      // 当能往下滑动时，需要添加动画效果：top  => 0%

      //  scrollY从 0 到 60 的区间，top值需要从 60 => 0  px
      if (window.scrollY <= 60) {
        this.top = 60 - window.scrollY;
        console.log(this.top);
      }

    }
  },
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.header {
  height: 60px;
  border-bottom: solid #e6e6e6 1px;
}

.container {
  display: flex;
}

.affix {
  overflow: auto;
  height: 750px;
  position: fixed;
  width: 20%;
  /* top: 0%; */
  top: 60px;
}

.empty {
  overflow: auto;
  height: 780px;
  display: none;
  /* hiden */
}

.aside {
  /* flex: 2; */
  width: 20%;
  transition: 0.3s ease-in-out;

}

.main {
  width: 80%;
  min-height: 100px;
  /* flex: 7; */
  border-left: solid #e7e7e7 1px;
}
</style>
