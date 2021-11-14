import { createRouter, createWebHashHistory } from "vue-router";

const routes = [{
        path: "/",
        name: "login",

        component: () =>
            import ("../views/acount/Login.vue"),
    },
    {
        path: "/about",
        name: "About",

        component: () =>
            import ("../views/About.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;