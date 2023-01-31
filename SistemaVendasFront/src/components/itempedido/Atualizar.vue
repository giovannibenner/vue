<template>
    <div class="form" style="padding: 1%; width: 80%;">
        <h3>Atualizar Pedido</h3>
        <hr/>
        <div class="d-flex" style="width: 100%">
            <div style="width: 20%">
                <label class="form-label">Id</label>
                <input type="text" disabled v-model="itemPedido.id" class="form-control">
            </div>
            <div style="width: 20%">
                <label class="form-label">PedidoId</label>
                <input type="text" required v-model="itemPedido.pedidoId" class="form-control" placeholder="pedido id">
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
            <button class="btn btn-success" @click="AtualizarItemPedido" style="margin-top: 4%">Atualizar</button>
        </div>
    </div>
</template>
<script>
import ItemPedidoDataService from '../../services/ItemPedidoDataService';

export default {
    data() {
        return {
            itemPedido: { }
        }
    },
    methods: {
        ObterItensPedido(id) {
            ItemPedidoDataService.obterPorId(id)
                .then((response) => {
                    this.itemPedido = response.data;
                });
        },
        AtualizarItemPedido() {
            var data = {
                pedidoId: this.itemPedido.pedidoId,
                servicoId: this.itemPedido.servicoId,
                quantidade: this.itemPedido.quantidade,
                valor: this.itemPedido.valor,

            };

            ItemPedidoDataService.atualizar(this.itemPedido.id, this.itemPedido)
                .then(() => {
                    this.$router.push({name: 'pedidos', params: this.$route.params.id});
                });
        }
    },
    mounted() {
        this.ObterItensPedido(this.$route.params.id);
    }
}
</script>