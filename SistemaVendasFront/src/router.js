import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/",
        component: () => import("./components/Home.vue")
    },
    {
        name: "vendedores",
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
        path: "/vendedor/atualizarsenha/:id",
        component: () => import("./components/Vendedor/AtualizarSenha.vue")
    },
    {
        path: "/vendedor/pedidos/:id",
        component: () => import("./components/Vendedor/Pedidos.vue")
    },
    {
        name: "clientes",
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
    ,
    {
        path: "/cliente/atualizarsenha/:id",
        component: () => import("./components/Cliente/AtualizarSenha.vue")
    },
    {
        path: "/cliente/pedidos/:id",
        component: () => import("./components/Cliente/Pedidos.vue")
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
        name: 'pedidos',
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
        path: "/itempedido/listar",
        component: () => import("./components/ItemPedido/Listar.vue")
    },
    {
        path: "/itempedido/cadastrar",
        component: () => import("./components/ItemPedido/Cadastrar.vue")
    },
    {
        path: "/itempedido/:id",
        component: () => import("./components/ItemPedido/Atualizar.vue")
    },
    {
        name: 'editaritem',
        path: "/pedido/itempedido/:id",
        component: () => import("./components/ItemPedido/Atualizar.vue")
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;