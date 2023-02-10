<template>
<div class="d-flex justify-content-center align-items-center" style="width: 80%; height: 100%;">
<div class="card" style="width: 60%; height: auto">
    <div class="col-8 p-2 justify-content-center" style="width: 100%; height: 100%;">
        <div class="bg-dark text-white d-flex align-items-center justify-content-center rounded" style="width: 100%;">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
            <h3 class="p-4">Listagem de Vendedores</h3>
        </div>
        <hr>
        <table class="table table-striped ">
          <thead class="table-dark">
            <tr>
              <th scope="col" style="width: 10%;">Id</th>
              <th scope="col" style="width: 40%;">Nome</th>
              <th scope="col" style="width: 20%;">Login</th>
              <th scope="col" style="width: 30%;">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(vendedor, index) in vendedores" :key="index">
                <td>{{ vendedor.id }}</td>
                <td>{{ vendedor.nome }}</td>
                <td>{{ vendedor.login }}</td>
                <td>
                    <button class="btn btn-success" @click="editarVendedor(vendedor.id)">Editar</button>
                    <button class="btn btn-danger" @click="excluirVendedor(vendedor)">Excluir</button>
                </td>
            </tr>
          </tbody>
        </table>
    </div>
</div>
</div>
</template>
<script>
import VendedorDataService from '../../services/VendedorDataService';

export default {
    data() {
        return {
            vendedores: []
        }
    },
    methods: {
        obterVendedores() {
            VendedorDataService.listar()
                .then(response => {
                    this.vendedores = response.data;
                });
        },
        editarVendedor(id) {
            this.$router.push('/vendedor/' + id);
        },
        async excluirVendedor(vendedor) {
            if(confirm(`Tem certeza que deseja excluir o vendedor ${vendedor.nome}?`))
            {
                await VendedorDataService.deletar(vendedor.id);
                this.obterVendedores();
            }
        }
    },
    mounted() {
        this.obterVendedores();
    }
}
</script>