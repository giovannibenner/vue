import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/",
        component: () => import("./components/TheWelcome.vue")
    },
    {
        path: "/vendedor/listar",
        component: () => import("./components/Vendedor/Listar.vue")
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;