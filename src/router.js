import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
    history: createWebHistory(),  
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("./views/template.vue")
        }, 
        {
            path: "/analytics",
            name: "analytics",
            component: () => import("./views/Analytics.vue")
        }, 
        {
            path: "/settings",
            name: "settings",
            component: () => import("./views/template.vue")
        },
        {
            path: "/time-management",
            name: "time-management",
            component: () => import("./views/template.vue")
        },
        {
            path: "/inbox",
            name: "inbox",
            component: () => import("./views/template.vue")
        },
        {
            path: "/calendar",
            name: "calendar",
            component: () => import("./views/template.vue")
        },
    ]
});