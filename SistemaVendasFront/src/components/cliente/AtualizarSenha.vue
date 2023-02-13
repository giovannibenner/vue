<template>
    <div class="d-flex justify-content-center align-items-center" style="width: 80%; height: 100%;">
        <div class="card" style="width: 50%; height: auto; padding: 1%;">
            <div class="justify-content-center align-items-center">
                <div class="bg-dark text-white d-flex align-items-center justify-content-center rounded"
                    style="width: 100%;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
                        class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                    <h3 class="p-4">Atualizar Senha Cliente</h3>
                </div>
                <hr />
                <div class="d-flex row align-items-center justify-content-center" style="width: 100%;">
                    <div style="width: 60%;">
                        <label class="form-label" style="margin-top: 4%;">Id</label>
                        <input type="text" disabled v-model="cliente.id" class="form-control" placeholder="login">
                    </div>
                    <div style="width: 60%;">
                        <label class="form-label" style="margin-top: 4%;">Nome</label>
                        <input type="text" disabled v-model="cliente.nome" class="form-control" placeholder="nome">
                    </div>
                    <div style="width: 60%;">
                        <label class="form-label" style="margin-top: 4%;">Login</label>
                        <input type="text" disabled v-model="cliente.login" class="form-control" placeholder="login">
                    </div>
                    <div style="width: 60%;">
                        <label class="form-label" style="margin-top: 4%;">Senha Atual</label>
                        <input type="password" required v-model="aux.senha" class="form-control">
                    </div>
                    <div style="width: 60%;">
                        <label class="form-label" style="margin-top: 4%;">Nova Senha</label>
                        <input type="password" required v-model="aux.novasenha" class="form-control">
                    </div>
                    <div style="width: 60%;">
                        <label class="form-label" style="margin-top: 4%;">Confirme a Nova Senha</label>
                        <input type="password" required v-model="aux.confnovasenha" class="form-control">
                    </div>
                    <div style="width: 60%;">
                        <button class="btn btn-success" @click="AtualizarSenhaCliente" style="margin-top: 4%; width: 100%;">Atualizar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ClienteDataService from '../../services/ClienteDataService';
export default {
    data() {
        return {
            cliente: {},
            aux: {
                senha: '',
                novasenha: '',
                confnovasenha: ''
            }
        }
    },
    methods: {
        ObterCliente(id) {
            ClienteDataService.obterPorId(id)
                .then((response) => {
                    this.cliente = response.data;
                });
        },
        AtualizarSenhaCliente() {
            var data = {
                senha: this.aux.novasenha
            };
            if(!(this.aux.senha == this.cliente.senha))
            {
                alert("Senha atual incorreta.");
                return;
            }
            
            if(this.aux.novasenha != this.aux.confnovasenha)
            {
                alert("Nova Senha incorreta.");
                return;
            }
            ClienteDataService.atualizarSenha(this.cliente.id, data)
                .then(() => {
                    alert("Senha Atualizada com sucesso!")
                    this.$router.push({name: 'clientes', params: {}});
                });
        }
    },
    mounted() {
        this.ObterCliente(this.$route.params.id);
    }
}
</script>