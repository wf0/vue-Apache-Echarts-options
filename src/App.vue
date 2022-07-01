<template>
  <div id="app">
    <div class="header">
      <Header />
    </div>
    <div class="container">
      <div class="aside">
        <div></div>
        <el-scrollbar :class="{ 'affix': affix }">
          <Aside />
        </el-scrollbar>
      </div>
      <div class="main">
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
      affix: false,
    }
  },
  mounted() {
    window.onscroll = () => {
      if (window.scrollY >= 60) this.affix = true;
      else this.affix = false;
      console.log(window.scrollY);
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
  top: 0%;
}

.aside {
  /* flex: 2; */
  width: 20%;
}

.main {
  width: 80%;
  /* flex: 7; */
  border-left: solid #e7e7e7 1px;
}
</style>
