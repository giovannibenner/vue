<template>
    <h3>Atualizar Cliente</h3>
    <div class="form" style="padding: 1%;">
        <hr/>
        <div class="col-4">
            <div>
                <label class="form-label">Id</label>
                <input type="text" disabled v-model="cliente.id" class="form-control" placeholder="login">
            </div>
            <div>
                <label class="form-label">Nome</label>
                <input type="text" required v-model="cliente.nome" class="form-control" placeholder="nome">
            </div>
            <div>
                <label class="form-label">Login</label>
                <input type="text" disabled v-model="cliente.login" class="form-control" placeholder="login">
            </div>
            <div>
                <label class="form-label">Senha</label>
                <input type="password" required v-model="cliente.senha" class="form-control">
            </div>
            <button class="btn btn-success" @click="AtualizarCliente" style="margin-top: 4%">Atualizar</button>
        </div>
    </div>
</template>
<script>
import ClienteDataService from '../../services/ClienteDataService';

export default {
    data() {
        return {
            cliente: { }
        }
    },
    methods: {
        ObterCliente(id) {
            ClienteDataService.obterPorId(id)
                .then((response) => {
                    this.cliente = response.data;
                });
        },
        AtualizarCliente() {
            var data = {
                nome: this.cliente.nome,
                login: this.cliente.login,
                senha: this.cliente.senha
            };

            ClienteDataService.atualizar(this.cliente.id, this.cliente)
                .then(() => {
                    this.$router.push('listar');
                });
        }
    },
    mounted() {
        this.ObterCliente(this.$route.params.id);
    }
}
</script>