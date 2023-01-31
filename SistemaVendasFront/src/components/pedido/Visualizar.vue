<template>
<div class="flex" style="width: 80%;">
    <h1>Pedido: {{ pedido.id }}</h1>
    <div class="form" style="padding: 1%; width: 80%;">
        <h3>Adicionar Item</h3>
        <hr/>
        <div class="d-flex" style="width: 100%">
            <div style="width: 20%">
                <label class="form-label">PedidoId</label>
                <input type="text" disabled v-model="pedido.id" class="form-control">
            </div>
            <div style="width: 20%">
                <label class="form-label">ServicoId</label>
                <input type="text" required v-model="itemPedido.servicoId" class="form-control" placeholder="servico id">
            </div>
            <div style="width: 20%">
                <label class="form-label">Quantidade</label>
                <input type="number" required v-model="itemPedido.quantidade" class="form-control" placeholder="quantidade">
            </div>
            <div style="width: 20%">
                <label class="form-label">Valor</label>
                <input type="text" required v-model="itemPedido.valor" class="form-control" placeholder="valor unitario">
            </div>
            <button class="btn btn-success" @click="cadastrarItemPedido" style="margin-top: 4%">Adicionar</button>
        </div>
    </div>
    <div class="col-8" style="padding: 1%;">
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
                <td>
                    <button class="btn btn-success" @click="editarItemPedido(itempedido.id)">Editar</button>
                    <button class="btn btn-danger" @click="excluirItemPedido(itempedido)">Excluir</button>
                </td>
            </tr>
          </tbody>
        </table>
    </div>
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
            },
            itemPedido: { 
                pedidoId: '',
                servicoId: '',
                quantidade: '',
                valor: ''
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
        },
        cadastrarItemPedido() {
            var data = {
                pedidoId: this.pedido.id,
                servicoId: this.itemPedido.servicoId,
                quantidade: this.itemPedido.quantidade,
                valor: this.itemPedido.valor
            };

            ItemPedidoDataService.cadastrar(data)
                .then(() => {
                    this.obterItensPedido()
                });
        },
        editarItemPedido(id) {
            this.$router.push({name: 'editaritem', params: id});
        },
        async excluirItemPedido(itempedido) {
            if(confirm(`Tem certeza que deseja excluir o Item ${itempedido.id}?`))
            {
                await ItemPedidoDataService.deletar(itempedido.id);
                this.obterItensPedido();
            }
        },
    },
    mounted() {
        this.obterItensPedido(),
        this.obterPedidoInfo()
    }
}
</script>