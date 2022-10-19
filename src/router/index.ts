import { createRouter, createWebHistory } from "vue-router";
// import CommonLayout from '../layouts/CommonLayout.vue';
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css";
import Home from '../views/home/index.vue';
NProgress.configure({ showSpinner: false }); // NProgress Configuration

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "home",
        },
        {
            path: "/home",
            name: "home",
            component: Home,
            meta: {
                requiresAuth: false,
            },
        },
    ],
    scrollBehavior() {
        return { top: 0 };
    },
});