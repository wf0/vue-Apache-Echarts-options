<template>
    <div class="title">
        <slot>统计图配置工具</slot>
        <img :src="url===undefined?src:url" alt="">
    </div>
</template>

<script>
import src from '../../assets/BG-logo.png'
export default {
    name: 'myTitle',
    props: ['url'],
    data() {
        return {
            src,
        }
    },
}
</script>

<style lang="less" scoped>
.title {
    height: 200px;
    line-height: 200px;
    padding-left: 28px;
    font-weight: 900;
    font-size: 40px;
    color: #191919;
    font-family: "PingFang SC";
    border-bottom: solid #e6e6e6 1px;
}

img {
    width: 250px;
    height: 100%;
    float: right;
    transition: 0.3s ease-in-out;
}
img:hover{
    transform: scale(1.2);
    
}
</style>