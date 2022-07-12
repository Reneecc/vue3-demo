import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";
import Register from "@/views/Register.vue";

/**
 * 用数组来写Router指向的每一个分页面
 * path:路由分配的url
 * name:当路由指向此页面时显示的名字
 * component:路由调用这个页面时加载的组件名
 */
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    // (.*) 是一个正则表达式，如果用户输入的 URL 没有跟任何 Router 中的 path 匹配，那么就会与(.*) 匹配，Router 就会把用户带到 404 页
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    },
];

/**
 * Router主体，创建一个路由，使用了history模式
 * history是hash模式的升级版，主要区别在浏览器链接显示的不同
 * hash 模式：把前端路由路径用 # 号拼接在真实 URL 后面的模式。当 # 后面的路径发生变化时，浏览器不会重新发起请求，而是出发 hashchange 事件。hash 模式链接样式：http://localhost:8080/#/home
 * history 模式：history API 是 HTML5 的新特性，允许开发者直接更改前端路由。history 模式链接样式：http://localhost:8080/home
 */
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;