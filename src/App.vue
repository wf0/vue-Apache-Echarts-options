<template>
  <div id="app">
    <!-- 回到顶部 -->
    <div class="back" v-if="showBack" @click="backTop"><i class="el-icon-caret-top"></i></div>
    <div class="header">
      <Header />
    </div>
    <div class="container">
      <div class="aside">
        <div class="empty"></div>
        <el-scrollbar class="affix" :style="{ top: top + 'px', height: height + 'px' }">
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
      top: 60,
      showBack: false,
      height: 665
    }
  },
  methods: {
    backTop() {
      //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
      window.scrollBy(0, -100);
      //延时递归调用，模拟滚动向上效果
      let scrolldelay = setTimeout(() => { this.backTop() }, 8);
      //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
      if (window.scrollY == 0) clearTimeout(scrolldelay);
    },
  },
  mounted() {
    window.onscroll = () => {
      // 当能往下滑动时，需要添加动画效果：top  => 0%
      //  scrollY从 0 到 60 的区间，top值需要从 60 => 0  px
      if (window.scrollY <= 60) {
        this.top = 60 - window.scrollY;
        this.height = 665
      }
      if (window.scrollY > 60) {
        this.height = 725
      }

      // 当页面小于某个值时，需要显示 返回顶部 按钮
      if (window.scrollY > 100) this.showBack = true;
      if (window.scrollY <= 100) this.showBack = false;

    }
  },
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

/*  返回顶部 */
.back {
  cursor: pointer;
  position: fixed;
  right: 30px;
  bottom: 30px;
  border-radius: 35px;
  z-index: 999;
}

.back i {
  color: #409EFF;
  font-size: 35px;
  border: solid #e7e7e7 1px;
  border-radius: 35px;
}

.back:hover {
  border: #409EFF solid 1.5px;
  border-radius: 35px;
  background-color: #F2F6FC;
}


.header {
  height: 60px;
  border-bottom: solid #e6e6e6 1px;
}

.container {
  display: flex;
}

.affix {
  height: 650px;
  position: fixed;
  width: 20%;
  top: 60px;
}

.empty {
  overflow: auto;
  height: 650px;
  display: none;
}

.aside {
  width: 20%;
  height: 650px;
  transition: 0.3s ease-in-out;
}

.main {
  width: 80%;
  min-height: 740px;
  border-left: solid #e7e7e7 1px;
}
</style>
