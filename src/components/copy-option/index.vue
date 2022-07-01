<template>
    <div>
        <el-row class="pos-re">
            <el-col class="code" :span="24">
                <div class="showOption">
                    <i v-if="!isCopy" @click="copyCode" class="el-icon-document-copy"></i>
                    <el-tooltip v-else class="item" effect="dark" content="复制成功" placement="top">
                        <i class="el-icon-circle-check" style="color:#67C23A"></i>
                    </el-tooltip>
                    <i @click="showCode = !showCode" class="el-icon-connection" :class="{ 'activeI': showCode }"></i>
                </div>
            </el-col>
        </el-row>
        <el-row v-if="showCode">
            <el-col class="code" :span="24">
                <code>
                    {{ option }}
                </code>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'CopyOption',
    props: ["option"],
    data() {
        return {
            // 这个是是否显示代码的
            showCode: false,
            isCopy: false,
        }
    },
    methods: {
        // f复制代码：
        copyCode() {
            // window.clipboardData.setData("Text","copyCode");
            let input = document.createElement('input') // 新增一个input
            input.style.position = 'relative' // 将它隐藏（注意不能使用display或者visibility，否则粘贴不上）
            input.style.marginLeft = "-9999px"
            input.style.zIndex = '-9'
            document.body.appendChild(input) // 追加
            input.value = this.option; // 设置文本框的内容
            input.select() // 选中文本
            document.execCommand("copy") // 执行浏览器复制命令
            console.log("复制完成");
            this.$message.success("复制完成");
            this.isCopy = true;
            setTimeout(() => {
                this.isCopy = false;
                console.log("fals");
            }, 700);
        },
    },

}
</script>

<style scoped>
.code {
    background-color: #f3f3f3;
    padding: 10px;
}

.showOption {
    float: right;
}

.showOption i {
    cursor: pointer;
    padding: 10px;
    margin: 0 5px;
    transition: 0.3s ease-in-out;

}

/* 被激活 */
.activeI {
    border-bottom: #409EFF solid 5px;
    /* background-color: #fff; */
}
</style>