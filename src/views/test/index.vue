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
                        </el-col>
                    </el-row>
                    <el-row>
                        <CopyOption :option="option" />
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
import CopyOption from '@/components/copy-option'
import * as echarts from 'echarts';
export default {
    name: 'test',
    components: { Title, CopyOption },
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
    },
    mounted() {
        this.reWrite();
    }

}
</script>

<style scoped>
.box {
  margin-top: 20px;
  width: 90%;
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
    right: 20px;
    bottom: 10px;
}

.showOption i {
    margin: 0 5px;
    padding: 5px;
    font-size: 20px;
    cursor: pointer;
}


</style>