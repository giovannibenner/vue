<template>
<div class="d-flex justify-content-center align-items-center" style="width: 80%; height: 100%;">
<div class="card" style="width: 50%; height: auto; padding: 1%;">
    <div class="justify-content-center align-items-center">
        <div class="bg-dark text-white d-flex align-items-center justify-content-center rounded" style="width: 100%;">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
            </svg>
            <h3 class="p-4">Novo Pedido</h3>
        </div>
        <hr/>
        <div class="d-flex row align-items-center justify-content-center" style="width: 100%;">
            <div style="width: 60%;">
                <label class="form-label" style="margin-top: 4%;">Data</label>
                <input type="datetime-local" required v-model="pedido.data" class="form-control" placeholder="data">
            </div>
            <div style="width: 60%;" class="row">
                <label class="form-label" style="margin-top: 4%;">Vendedor</label>
                <select v-model="pedido.vendedorId">
                    <option v-for="(vendedor, index) in vendedores" :key="index" :value="vendedor.id"> {{ vendedor.id }} - {{ vendedor.nome }} </option>
                </select>
            </div>
            <div style="width: 60%;" class="row">
                <label class="form-label" style="margin-top: 4%;">Cliente</label>
                <select v-model="pedido.clienteId">
                    <option v-for="(cliente, index) in clientes" :key="index" :value="cliente.id"> {{ cliente.id }} - {{ cliente.nome }} </option>
                </select>
            </div>
            <div style="width: 60%;">
                <button class="btn btn-success" @click="CadastrarPedido" style="margin-top: 4%; width: 100%;">Cadastrar</button>
            </div>
        </div>
    </div>
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
            var data = {
                data: this.pedido.data,
                vendedorId: this.pedido.vendedorId,
                clienteId: this.pedido.clienteId
            };

            if(data.data == '' || data.vendedorId == '' || data.clienteId == '')
                alert("Campo vazio não permitido");
            else
            {
            PedidoDataService.cadastrar(data)
                .then(() => {
                    this.$router.push('listar');
                });
            }
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
<style scoped>
label {
    padding: 0;
}
</style>