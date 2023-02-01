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
                <label class="form-label">Vendedor</label>
                <select v-model="pedido.vendedorId">
                    <option v-for="(vendedor, index) in vendedores" :key="index" :value="vendedor.id"> {{ vendedor.id }} | {{ vendedor.nome }} </option>
                </select>
            </div>
            <div>
                <label class="form-label">Cliente</label>
                <select v-model="pedido.clienteId">
                    <option v-for="(cliente, index) in clientes" :key="index" :value="cliente.id"> {{ cliente.id }} | {{ cliente.nome }} </option>
                </select>
            </div>
            <button class="btn btn-success" @click="AtualizarPedido" style="margin-top: 4%">Atualizar</button>
        </div>
    </div>
</template>
<script>
import PedidoDataService from '../../services/PedidoDataService';
import VendedorDataService from '../../services/VendedorDataService';
import ClienteDataService from '../../services/ClienteDataService';

export default {
    data() {
        return {
            pedido: { },
            vendedores: [],
            clientes: []
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
        },
        ObterVendedores() {
            VendedorDataService.listar()
                .then(response => {
                    this.vendedores = response.data;
                });
        }
        ,
        ObterClientes() {
            ClienteDataService.listar()
                .then(response => {
                    this.clientes = response.data;
                });
        }
    },
    mounted() {
        this.ObterPedido(this.$route.params.id);
        this.ObterVendedores();
        this.ObterClientes();
    }
}
</script>