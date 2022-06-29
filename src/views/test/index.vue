<template>
    <div class="box" style="padding:20px">
        <div ref="demo" style="width:500px;height:450px"></div>
        <div>
            <el-form label-width="80px">
                <el-form-item label="标题">
                    <el-input v-model="title"></el-input>
                </el-form-item>
                <el-form-item label="显示数据">
                    <el-switch v-model="showData" active-color="#13ce66" inactive-color="#ff4949">
                    </el-switch>
                </el-form-item>
            </el-form>
            <el-button @click="getOption=!getOption">显示配置项</el-button>
            <div v-if="getOption">{{option}}</div>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    data() {
        return {
            // 使用变量存储
            myChart: null,// 统计图对象
            option: "", // 配置项(这样会变成vue的对象)
            title: '',
            showData: false,
            getOption:false,
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

        // 获取配置项：
        getOption() {
            console.log(this.option);
        },

    },
    mounted() {
        this.reWrite();
    }

}
</script>

<style scoped>
.box {
    display: flex;
}
</style>