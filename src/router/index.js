import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    //登录
    {
        path: "/",
        name: "login",

        component: () =>
            import ("../views/acount/Login.vue"),
    },
    //注册
    {
        path: "/register",
        name: "register",

        component: () =>
            import ("../views/acount/Register.vue"),
    },
    //忘记密码
    {
        path: "/forget",
        name: "Forget",

        component: () =>
            import ("../views/acount/forget.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;