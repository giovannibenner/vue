<template>
    <div class="col-8">
        <h3>Listagem de Pedidos</h3>
        <hr>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Data</th>
              <th scope="col">VendedorId</th>
              <th scope="col">Vendedor</th>
              <th scope="col">ClienteId</th>
              <th scope="col">Cliente</th>
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
</template>
<script>
import PedidoDataService from '../../services/PedidoDataService';
import VendedorDataService from '../../services/VendedorDataService';

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
                    this.pedidos = response.data;
                    this.obterVendedor();
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
            console.log(this.pedidos);
            for(let pedido in this.pedidos)
            {
                VendedorDataService.obterPorId(this.pedidos[pedido].vendedorId)
                .then(response => {
                    console.log(response.data.nome);
                    this.pedidos[pedido].vendedor = response.data.nome;
                });
            }
        },
    },
    mounted() {
        this.obterPedidos();
    }
    
}
</script>