<template>
    <h3>Atualizar Servico</h3>
    <div class="form" style="padding: 1%;">
        <hr/>
        <div class="col-4">
            <div>
                <label class="form-label">Id</label>
                <input type="text" disabled v-model="servico.id" class="form-control" placeholder="id">
            </div>
            <div>
                <label class="form-label">Nome</label>
                <input type="text" required v-model="servico.nome" class="form-control" placeholder="nome">
            </div>
            <div>
                <label class="form-label">Descricao</label>
                <input type="text" required v-model="servico.descricao" class="form-control" placeholder="descricao">
            </div>
            <button class="btn btn-success" @click="AtualizarServico" style="margin-top: 4%">Atualizar</button>
        </div>
    </div>
</template>
<script>
import ServicoDataService from '../../services/ServicoDataService';

export default {
    data() {
        return {
            servico: { }
        }
    },
    methods: {
        ObterServico(id) {
            ServicoDataService.obterPorId(id)
                .then((response) => {
                    this.servico = response.data;
                });
        },
        AtualizarServico() {
            var data = {
                nome: this.servico.nome,
                descricao: this.servico.descricao
            };

            ServicoDataService.atualizar(this.servico.id, this.servico)
                .then(() => {
                    this.$router.push('listar');
                });
        }
    },
    mounted() {
        this.ObterServico(this.$route.params.id);
    }
}
</script>