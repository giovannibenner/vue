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
            <button class="btn btn-success" @click="CadastrarPedido" style="margin-top: 4%">Cadastrar</button>
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
            pedido: { 
                data: '',
                vendedorId: '',
                clienteId: ''
            },
            vendedores: [],
            clientes: []
        }
    },
    methods: {
        CadastrarPedido() {
            console.log(this.pedido.vendedorId)
            var data = {
                data: this.pedido.data,
                vendedorId: this.pedido.vendedorId,
                clienteId: this.pedido.clienteId
            };

            PedidoDataService.cadastrar(data)
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
        this.ObterVendedores();
        this.ObterClientes();
    }
}
</script>