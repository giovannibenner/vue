<template>
    <div class="d-flex justify-content-center align-items-center" style="width: 80%; height: 100%;">
    <div class="card" style="width: 90%; height: auto">
        <div class="col-8 p-2 justify-content-center" style="width: 100%; height: 100%;">
            <div class="bg-dark text-white d-flex align-items-center justify-content-center rounded" style="width: 100%;">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                </svg>
                <h3 class="p-4">Listagem de Pedido</h3>
            </div>
            <hr>
            <h3>Vendedor: {{ this.$route.params.id }}</h3>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col" style="width: 5%;">Id</th>
                  <th scope="col" style="width: 20%;">Data</th>
                  <th scope="col" style="width: 5%;">VendedorId</th>
                  <th scope="col" style="width: 20%;">Vendedor</th>
                  <th scope="col" style="width: 5%;">ClienteId</th>
                  <th scope="col" style="width: 20%;">Cliente</th>
                  <th scope="col" style="width: 25%;">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(pedido, index) in pedidos" :key="index">
                    <td>{{ pedido.id }}</td>
                    <td>{{ pedido.data }}</td>
                    <td>{{ pedido.vendedorId }}</td>
                    <td>{{ pedido.vendedor }}</td>
                    <td>{{ pedido.clienteId }}</td>
                    <td>{{ pedido.cliente }}</td>
                    <td>
                        <button class="btn btn-success" @click="editarPedido(pedido.id)">Editar</button>
                        <button class="btn btn-danger" @click="excluirPedido(pedido)">Excluir</button>
                        <button class="btn btn-info" @click="visualizarPedido(pedido.id)">Visualizar</button>
                    </td>
                </tr>
              </tbody>
            </table>
        </div>
    </div>
    </div>
    </template>
    <script>
    import PedidoDataService from '../../services/PedidoDataService';
    import VendedorDataService from '../../services/VendedorDataService';
    import ClienteDataService from  '../../services/ClienteDataService';
    
    export default {
        data() {
            return {
                pedidos: []
            }
        },
        methods: {
            obterPedidos() {
                PedidoDataService.listar()
                    .then(response => {
                        for(let pedido of response.data)
                        {
                            if(pedido.vendedorId == this.$route.params.id){
                                this.pedidos.push(pedido);
                            }
                        }
                        this.obterVendedor();
                        this.obterCliente();
                    });
                
            },
            editarPedido(id) {
                this.$router.push('/pedido/' + id);
            },
            async excluirPedido(pedido) {
                if(confirm(`Tem certeza que deseja excluir o pedido ${pedido.id}?`))
                {
                    await PedidoDataService.deletar(pedido.id);
                    this.obterPedidos();
                }
            },
            visualizarPedido(id) {
                this.$router.push('/visualizarpedido/' + id);
            },
            obterVendedor() {
                for(let pedido in this.pedidos)
                {
                    VendedorDataService.obterPorId(this.pedidos[pedido].vendedorId)
                    .then(response => {
                        this.pedidos[pedido].vendedor = response.data.nome;
                    });
                }
            },
            obterCliente() {
                for(let pedido in this.pedidos)
                {
                    ClienteDataService.obterPorId(this.pedidos[pedido].clienteId)
                    .then(response => {
                        this.pedidos[pedido].cliente = response.data.nome;
                    });
                }
            }
        },
        mounted() {
            this.obterPedidos();
        }
        
    }
    </script>