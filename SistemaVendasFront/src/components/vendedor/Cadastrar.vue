<template>
    <h3>Novo vendedor</h3>
    <div class="form" style="padding: 1%;">
        <hr/>
        <div class="col-4">
            <div>
                <label class="form-label">Nome</label>
                <input type="text" required v-model="vendedor.nome" class="form-control" placeholder="nome">
            </div>
            <div>
                <label class="form-label">Login</label>
                <input type="text" required v-model="vendedor.login" class="form-control" placeholder="login">
            </div>
            <div>
                <label class="form-label">Senha</label>
                <input type="password" required v-model="vendedor.senha" class="form-control">
            </div>
            <button class="btn btn-success" @click="CadastrarVendedor" style="margin-top: 4%">Cadastrar</button>
        </div>
    </div>
</template>
<script>
import VendedorDataService from '../../services/VendedorDataService';

export default {
    data() {
        return {
            vendedor: { 
                nome: '',
                login: '',
                senha: ''
            }
        }
    },
    methods: {
        CadastrarVendedor() {
            var data = {
                nome: this.vendedor.nome,
                login: this.vendedor.login,
                senha: this.vendedor.senha
            };

            VendedorDataService.cadastrar(data)
                .then(() => {
                    this.$router.push('listar');
                });
        }
    }
}
</script>