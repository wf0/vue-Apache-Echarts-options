import VueRouter from 'vue-router'

const routes = [{
        path: "/",
        redirect: "/test"
    },
    {
        path: '/test', //测试用例(对应左侧导航栏名字)
        name: 'test',
        component: () => import("../views/test/index.vue")
    },
    {
        path: '/help', //使用帮忙(对应左侧导航栏名字)
        name: 'help',
        component: () => import("../views/help/index.vue")
    },
    {
        path: "/start", //快速开始
        name: 'start',
        component: () => import("../views/start/index.vue")
    },
    {
        path: "/logs", //更新日志
        name: 'logs',
        component: () => import("../views/logs/index.vue")
    },
    {
        path: "/navigation", //功能导航
        name: 'navigation',
        component: () => import("../views/navigation/index.vue")
    },
    /**
     * 折线图
     */
    {
        path: '/line1', //基础折线图
        name: 'line1',
        component: () => import("../views/line/line1")
    },
    {
        path: '/line2', //平滑折线图
        name: 'line2',
        component: () => import("../views/line/line2")
    },
    {
        path: '/line3', //基础面积图
        name: 'line3',
        component: () => import("../views/line/line3")
    }, {
        path: '/line4', //堆叠面积图
        name: 'line4',
        component: () => import("../views/line/line4")
    }, {
        path: '/line5', //堆叠渐变面积图
        name: 'line5',
        component: () => import("../views/line/line5")
    },
    /**
     * 柱状图
     */
    {
        path: '/bar1', //基础柱状图
        name: 'bar1',
        component: () => import("../views/bar/bar1")
    },
    {
        path: '/bar2', //带背景色的柱状图
        name: 'bar2',
        component: () => import("../views/bar/bar2")
    },
    {
        path: '/bar3', //自定义单个柱子颜色
        name: 'bar3',
        component: () => import("../views/bar/bar3")
    },
    {
        path: '/bar4', //瀑布图（柱状图模拟）
        name: 'bar4',
        component: () => import("../views/bar/bar4")
    },
    {
        path: '/bar5', //折柱混合
        name: 'bar5',
        component: () => import("../views/bar/bar5")
    },
    /**
     * 饼图
     */
    {
        path: '/pie1', //基础饼图
        name: 'pie1',
        component: () => import("../views/pie/pie1")
    },
    {
        path: '/pie2', //环形图
        name: 'pie2',
        component: () => import("../views/pie/pie2")
    },
    {
        path: '/pie3', //圆角环形图
        name: 'pie3',
        component: () => import("../views/pie/pie3")
    },
    {
        path: '/pie4', //基础南丁格尔玫瑰图
        name: 'pie4',
        component: () => import("../views/pie/pie4")
    },
    /**
     * 散点图
     */
    {
        path: '/scatter1', //基础散点图
        name: 'scatter1',
        component: () => import("../views/scatter/scatter1")
    },
    {
        path: '/scatter2', //指数回归（使用统计插件）
        name: 'scatter2',
        component: () => import("../views/scatter/scatter2")
    },
    {
        path: '/scatter3', //线性回归（使用统计插件）
        name: 'scatter3',
        component: () => import("../views/scatter/scatter3")
    },
    /**
     * K线图
     */
    {
        path: '/k1', //基础 K 线图
        name: 'k1',
        component: () => import("../views/k/k1")
    },
    {
        path: '/k2', //上证指数
        name: 'k2',
        component: () => import("../views/k/k2")
    },
    /**
     * 雷达图
     */
    {
        path: '/Radar1', //Radar-基础雷达图
        name: 'Radar1',
        component: () => import("../views/Radar/Radar1")
    },
    {
        path: '/Radar2', //Radar-AQI - 雷达图
        name: 'Radar2',
        component: () => import("../views/Radar/Radar2")
    },
    {
        path: '/Radar3', //Radar-多雷达图
        name: 'Radar3',
        component: () => import("../views/Radar/Radar3")
    },
]

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;