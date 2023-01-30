<template>
    <div class="col-8">
        <h1>Pedido: {{ pedido.id }}</h1>
        <h3>Itens do Pedido</h3>
        <hr>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">PedidoId</th>
              <th scope="col">ServicoId</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(itempedido, index) in itensPedidos" :key="index">
                <td>{{ itempedido.id }}</td>
                <td>{{ itempedido.pedidoId }}</td>
                <td>{{ itempedido.servicoId }}</td>
                <td>{{ itempedido.quantidade }}</td>
                <td>{{ itempedido.valor }}</td>
            </tr>
          </tbody>
        </table>
    </div>
</template>
<script>
import PedidoDataService from '../../services/PedidoDataService';
import ItemPedidoDataService from '../../services/ItemPedidoDataService';

export default {
    data() {
        return {
            itensPedidos: [],
            pedido: { 
                data: '',
                vendedorId: '',
                clienteId: ''
            }
        }
    },
    methods: {
        obterItensPedido() {
            ItemPedidoDataService.obterPorPedidoId(this.$route.params.id)
                                 .then(response => {
                                    this.itensPedidos = response.data;
                                 });
        },
        obterPedidoInfo() {
            PedidoDataService.obterPorId(this.$route.params.id)
                            .then(response => {
                                this.pedido = response.data;
                            });
        }
    },
    mounted() {
        this.obterItensPedido(),
        this.obterPedidoInfo()
    }
}
</script>