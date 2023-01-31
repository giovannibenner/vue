import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/",
        component: () => import("./components/Home.vue")
    },
    {
        path: "/vendedor/listar",
        component: () => import("./components/Vendedor/Listar.vue")
    },
    {
        path: "/vendedor/cadastrar",
        component: () => import("./components/Vendedor/Cadastrar.vue")
    },
    {
        path: "/vendedor/:id",
        component: () => import("./components/Vendedor/Atualizar.vue")
    },
    {
        path: "/cliente/listar",
        component: () => import("./components/Cliente/Listar.vue")
    },
    {
        path: "/cliente/cadastrar",
        component: () => import("./components/Cliente/Cadastrar.vue")
    },
    {
        path: "/cliente/:id",
        component: () => import("./components/Cliente/Atualizar.vue")
    },
    {
        path: "/pedido/listar",
        component: () => import("./components/Pedido/Listar.vue")
    },
    {
        path: "/pedido/cadastrar",
        component: () => import("./components/Pedido/Cadastrar.vue")
    },
    {
        path: "/pedido/:id",
        component: () => import("./components/Pedido/Atualizar.vue")
    },
    {
        path: "/visualizarpedido/:id",
        component: () => import("./components/Pedido/Visualizar.vue")
    },
    {
        path: "/servico/listar",
        component: () => import("./components/Servico/Listar.vue")
    },
    {
        path: "/servico/cadastrar",
        component: () => import("./components/Servico/Cadastrar.vue")
    },
    {
        path: "/servico/:id",
        component: () => import("./components/Servico/Atualizar.vue")
    },
    {
        path: "/itempedido/:id",
        component: () => import("./components/ItemPedido/Atualizar.vue")
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;