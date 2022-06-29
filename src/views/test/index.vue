<template>
    <div style="padding:20px">
        <Title>测试用例</Title>
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
                            <el-form label-width=" 80px">
                                <el-form-item label="标题">
                                    <el-input v-model="title"></el-input>
                                </el-form-item>
                                <el-form-item label="显示数据">
                                    <el-switch v-model="showData" active-color="#13ce66" inactive-color="#ff4949">
                                    </el-switch>
                                </el-form-item>
                            </el-form>
                            <div class="showOption">
                                <i @click="copyCode" class="el-icon-document-copy"></i>
                                <i @click="showCOde = !showCOde" class="el-icon-connection"
                                    :class="{ 'activeI': showCOde }"></i>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row v-if="showCOde">
                        <el-col class="code" :span="24">
                            <code>{{ option }}</code>
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="API">
                </el-tab-pane>
                <el-tab-pane label="指南">角色管理</el-tab-pane>
            </el-tabs>
        </div>

        <!-- 
         -->
    </div>
</template>

<script>
import Title from "@/components/title"
import * as echarts from 'echarts';
export default {
    name: 'test',
    components: { Title },
    data() {
        return {
            // 使用变量存储
            myChart: null,// 统计图对象
            option: "", // 配置项(这样会变成vue的对象)
            title: '',
            showData: false,
            getOption: false,
            showCOde: false,
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
    },
    methods: {
        // 重绘
        reWrite() {
            // 销毁统计图对象
            // if (this.myChart) this.myChart.dispose();

            // 获取统计图对象
            this.myChart = echarts.init(this.$refs["demo"]);

            // 重新计算配置项对象
            this.option = JSON.stringify({
                title: {
                    text: this.title == "" ? 'ECharts 入门示例' : this.title
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [
                    {
                        label: {
                            show: this.showData,
                            position: 'inside'
                        },
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            })
            // 重新绘制统计图
            this.myChart.setOption(JSON.parse(this.option))
        },

        // f复制代码：
        copyCode() {
            // window.clipboardData.setData("Text","copyCode");
            let input = document.createElement('input') // 新增一个input
            input.style.position = 'relative' // 将它隐藏（注意不能使用display或者visibility，否则粘贴不上）
            input.style.marginLeft="-9999px"
            input.style.zIndex = '-9'
            document.body.appendChild(input) // 追加
            input.value = this.option; // 设置文本框的内容
            input.select() // 选中文本
            document.execCommand("copy") // 执行浏览器复制命令
            console.log("复制完成");
            this.$message.success("复制完成");
        },

    },
    mounted() {
        this.reWrite();
    }

}
</script>

<style scoped>
.box {
    margin-top: 20px;
}

.border-left {
    border-left: solid #e6e6e6 1px;
}

.el-row {
    border-bottom: solid #e6e6e6 1px;
}

.code {
    background-color: #f3f3f3;
    padding: 10px;
}

/* 相对定位 */
.pos-re {
    position: relative;
    height: 500px;
    overflow: auto;
}

.showOption {
    position: absolute;
    right: 0;
    bottom: 0;
}

.showOption i {
    margin: 0 5px;
    padding: 5px;
    font-size: 20px;
    cursor: pointer;
}

/* 被激活 */
.activeI {
    background-color: #f3f3f3;
}
</style>