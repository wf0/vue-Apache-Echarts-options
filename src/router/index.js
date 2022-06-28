import VueRouter from 'vue-router'

const routes = [{
    path: "/a",
    name: 'a',
    // component: () => import("../views/A.vue")
}]

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;