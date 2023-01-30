<template>
    <h3>Atualizar Pedido</h3>
    <div class="form" style="padding: 1%;">
        <hr/>
        <div class="col-4">
            <div>
                <label class="form-label">Id</label>
                <input type="text" disabled v-model="pedido.id" class="form-control">
            </div>
            <div>
                <label class="form-label">Data</label>
                <input type="text" v-model="pedido.data" class="form-control" placeholder="data">
            </div>
            <div>
                <label class="form-label">VendedorId</label>
                <input type="text" v-model="pedido.vendedorId" class="form-control" placeholder="vendedor id">
            </div>
            <div>
                <label class="form-label">ClienteId</label>
                <input type="text" v-model="pedido.clienteId" class="form-control" placeholder="cliente id">
            </div>
            <button class="btn btn-success" @click="AtualizarPedido" style="margin-top: 4%">Atualizar</button>
        </div>
    </div>
</template>
<script>
import PedidoDataService from '../../services/PedidoDataService';

export default {
    data() {
        return {
            pedido: { }
        }
    },
    methods: {
        ObterPedido(id) {
            PedidoDataService.obterPorId(id)
                .then((response) => {
                    this.pedido = response.data;
                });
        },
        AtualizarPedido() {
            var data = {
                data: this.pedido.data,
                vendedorid: this.pedido.vendedorId,
                clienteid: this.pedido.clienteId
            };

            PedidoDataService.atualizar(this.pedido.id, this.pedido)
                .then(() => {
                    this.$router.push('listar');
                });
        }
    },
    mounted() {
        this.ObterPedido(this.$route.params.id);
    }
}
</script>