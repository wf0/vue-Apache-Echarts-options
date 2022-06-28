<template>
    <div>
        <div class="title">
            <slot>统计图配置工具</slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.title {
    background-color: aliceblue;
    background-image: url("../../assets/BG-logo.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
    line-height: 200px;
    padding-left: 28px;
    font-weight: 900;
    font-size: 40px;
    color: #191919;
    font-family: "PingFang SC";
}
</style>