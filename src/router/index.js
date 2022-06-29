import VueRouter from 'vue-router'

const routes = [
    {
        path: '/test',  //使用帮忙(对应左侧导航栏名字)
        name: 'test',
        component: () => import("../views/test/index.vue")
    },
    {
        path: '/help',  //使用帮忙(对应左侧导航栏名字)
        name: 'help',
        component: () => import("../views/help.vue")
    },
    {
        path: "/start", //快速开始
        name: 'start',
        component: () => import("../views/start.vue")
    },
    {
        path: "/logs",  //更新日志
        name: 'logs',
        component: () => import("../views/logs.vue")
    },
    {
        path: "/menu", //功能导航
        name: 'menu',
        component: () => import("../views/menu.vue")
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
        path:'/line2', //平滑折线图
        name:'line2',
        component:()=>import("../views/line/line2")
    },
    {
        path:'/line3', //基础面积图
        name:'line3',
        component:()=>import("../views/line/line3")
    },{
        path:'/line4', //堆叠面积图
        name:'line4',
        component:()=>import("../views/line/line4")
    },{
        path:'/line5', //堆叠渐变面积图
        name:'line5',
        component:()=>import("../views/line/line5")
    },
]

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;