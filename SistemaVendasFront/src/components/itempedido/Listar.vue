<template>
    <div class="col-8">
        <h3>Listagem de Itens</h3>
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
            <tr v-for="(item, index) in itensPedidos" :key="index">
                <td>{{ item.id }}</td>
                <td>
                    {{ item.pedidoId }}
                    <button class="btn btn-info" @click="visualizarPedido(item.pedidoId)">Visualizar</button>
                </td>
                <td>{{ item.servicoId }}</td>
                <td>{{ item.quantidade }}</td>
                <td>{{ item.valor }}</td>
                <td>
                    <button class="btn btn-success" @click="editarItemPedido(item.id)">Editar</button>
                    <button class="btn btn-danger" @click="excluirItemPedido(item)">Excluir</button>
                </td>
            </tr>
          </tbody>
        </table>
    </div>
</template>
<script>
import ItemPedidoDataService from '../../services/ItemPedidoDataService';
import PedidoDataService from '../../services/PedidoDataService';

export default {
    data() {
        return {
            itensPedidos: []
        }
    },
    methods: {
        obterItens() {
            ItemPedidoDataService.listar()
                .then(response => {
                    this.itensPedidos = response.data;
                });
        },
        editarItemPedido(id) {
            this.$router.push('/itempedido/' + id);
        },
        async excluirItemPedido(itempedido) {
            if(confirm(`Tem certeza que deseja excluir o Item ${itempedido.id}?`))
            {
                await ItemPedidoDataService.deletar(itempedido.id);
                this.obterItensPedido();
            }
        },
        visualizarPedido(id) {
            this.$router.push('/visualizarpedido/' + id);
        },
    },
    mounted() {
        this.obterItens();
    }
}
</script>