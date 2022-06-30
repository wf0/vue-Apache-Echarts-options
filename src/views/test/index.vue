<template>
    <div style="padding:20px">
        <Title>测试用例</Title>
        <!-- 先需要使用tabs -->
        <div style="margin-top:20px">
            <el-tabs type="border-card">
                <el-tab-pane label="示例">
                    <!-- 使用栅格布局 -->
                    <el-row>
                        <el-col :span="12">
                            <div ref="demo" style="width:500px;height:450px;"></div>
                        </el-col>
                        <el-col class="border-left pos-re" :span="12">
                            <el-form label-width=" 120px">
                                <el-form-item label="主标题">
                                    <el-input v-model="title"></el-input>
                                </el-form-item>
                                <el-form-item v-if="title" label="主标题链接">
                                    <el-input v-model="titleLink"></el-input>
                                </el-form-item>
                                <el-form-item v-if="title && titleLink" label="主链接打开方式">
                                    <el-select v-model="target" placeholder="请选择">
                                        <el-option value="blank">blank</el-option>
                                        <el-option value="self">self</el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="副标题">
                                    <el-input v-model="subtext"></el-input>
                                </el-form-item>
                                <el-form-item v-if="subtext" label="副标题链接">
                                    <el-input v-model="sublink"></el-input>
                                </el-form-item>
                                <el-form-item v-if="subtext && sublink" label="副链接打开方式">
                                    <el-select v-model="subtarget" placeholder="请选择">
                                        <el-option value="blank">blank</el-option>
                                        <el-option value="self">self</el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item v-if="title || subtext" label="标题距左距离">
                                    <el-input v-model.number="left"></el-input>
                                </el-form-item>
                                <el-form-item label="提示框">
                                    <el-switch v-model="tooltip" active-color="#13ce66" inactive-color="#DCDFE6">
                                    </el-switch>
                                </el-form-item>
                                <el-form-item label="显示数据">
                                    <el-switch v-model="showData" active-color="#13ce66" inactive-color="#DCDFE6">
                                    </el-switch>
                                </el-form-item>
                                <el-form-item v-if="showData" label="数据显示方式">
                                    <el-select v-model="dataPosition" placeholder="请选择">
                                        <el-option value="inside">inside</el-option>
                                        <el-option value="top">top</el-option>
                                        <el-option value="insideTop">insideTop</el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="工具栏">
                                </el-form-item>
                                <el-form-item label="数据视图">
                                    <el-switch v-model="dataView" active-color="#13ce66" inactive-color="#DCDFE6">
                                    </el-switch>
                                </el-form-item>
                                <el-form-item label="重置数据">
                                    <el-switch v-model="restore" active-color="#13ce66" inactive-color="#DCDFE6">
                                    </el-switch>
                                </el-form-item>
                                <el-form-item label="保存图片">
                                    <el-switch v-model="saveAsImage" active-color="#13ce66" inactive-color="#DCDFE6">
                                    </el-switch>
                                </el-form-item>
                            </el-form>
                            <div class="showOption">
                                <i @click="copyCode" class="el-icon-document-copy"></i>
                                <i @click="showCode = !showCode" class="el-icon-connection"
                                    :class="{ 'activeI': showCode }"></i>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row v-if="showCode">
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

            title: '',// 标题
            titleLink: '',// 标题链接
            target: 'blank',// 主标题链接打开方式
            subtext: "", // 副标题
            sublink: '',// 副标题链接
            subtarget: 'blank',//副标题链接打开方式
            left: 0,// 距左边的距离
            tooltip: false,
            showData: false,// 是否显示数据
            dataPosition: 'inside', //数据显示方式
            dataView: false,
            restore: false,
            saveAsImage: false,
            // 这个是是否显示代码的
            showCode: false,
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
        titleLink() {
            // 重绘
            this.reWrite();
        },
        subtext() {
            // 重绘
            this.reWrite();
        },
        left() {
            // 重绘
            this.reWrite();
        },
        dataPosition() {
            // 重绘
            this.reWrite();
        },
        dataView() {
            // 重绘
            this.reWrite();
        },
        restore() {
            // 重绘
            this.reWrite();
        },
        saveAsImage() {
            // 重绘
            this.reWrite();
        },
        target() {
            // 重绘
            this.reWrite();
        },
        sublink() {
            // 重绘
            this.reWrite();
        },
        subtarget() {
            // 重绘
            this.reWrite();
        },
        tooltip() {
            // 重绘
            this.reWrite();
        },
    },
    methods: {
        // 重绘
        reWrite() {
            // 获取统计图对象
            this.myChart = echarts.init(this.$refs["demo"]);

            // 重新计算配置项对象
            this.option = JSON.stringify({
                // 提示框
                tooltip: {
                    show: this.tooltip,
                },
                // 工具栏
                toolbox: {
                    show: true,
                    feature: {
                        dataView: { show: this.dataView, readOnly: false },
                        restore: { show: this.restore },
                        saveAsImage: { show: this.saveAsImage }
                    }
                },
                // 标题
                title: {
                    text: this.title == "" ? 'ECharts 入门示例' : this.title,
                    link: this.titleLink,
                    target: this.target,
                    subtext: this.subtext,
                    sublink: this.sublink,
                    suntarget: this.subtarget,
                    left: this.left,
                },
                // X轴
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                // Y轴
                yAxis: {},
                series: [
                    {
                        label: {
                            show: this.showData,
                            position: this.dataPosition,
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
            input.style.marginLeft = "-9999px"
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
    right: 0%;
    bottom: 0%;
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