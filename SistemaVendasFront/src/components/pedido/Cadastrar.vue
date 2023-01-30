<template>
    <h3>Novo Pedido</h3>
    <div class="form" style="padding: 1%;">
        <hr/>
        <div class="col-4">
            <div>
                <label class="form-label">Data</label>
                <input type="datetime-local" required v-model="pedido.data" class="form-control" placeholder="data">
            </div>
            <div>
                <label class="form-label">VendedorId</label>
                <input type="text" required v-model="pedido.vendedorId" class="form-control" placeholder="vendedor id">
            </div>
            <div>
                <label class="form-label">ClienteId</label>
                <input type="text" required v-model="pedido.clienteId" class="form-control" placeholder="cliente id">
            </div>
            <button class="btn btn-success" @click="CadastrarPedido" style="margin-top: 4%">Cadastrar</button>
        </div>
    </div>
</template>
<script>
import PedidoDataService from '../../services/PedidoDataService';

export default {
    data() {
        return {
            pedido: { 
                data: '',
                vendedorId: '',
                clienteId: ''
            }
        }
    },
    methods: {
        CadastrarPedido() {
            var data = {
                data: this.pedido.data,
                vendedorId: this.pedido.vendedorId,
                clienteId: this.pedido.clienteId
            };

            PedidoDataService.cadastrar(data)
                .then(() => {
                    this.$router.push('listar');
                });
        }
    }
}
</script>