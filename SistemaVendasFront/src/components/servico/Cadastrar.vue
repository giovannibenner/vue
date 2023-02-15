<template>
<div class="d-flex justify-content-center align-items-center" style="width: 80%; height: 100%;">
<div class="card" style="width: 50%; height: auto; padding: 1%;">
    <div class="justify-content-center align-items-center">
        <div class="bg-dark text-white d-flex align-items-center justify-content-center rounded" style="width: 100%;">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
              <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"/>
              <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z"/>
            </svg>
            <h3 class="p-4">Novo Serviço</h3>
        </div>
        <hr/>
        <div class="d-flex row align-items-center justify-content-center" style="width: 100%;">
            <div style="width: 60%;">
                <label class="form-label" style="margin-top: 4%;">Nome</label>
                <input type="text" required v-model="servico.nome" class="form-control" placeholder="nome">
            </div>
            <div style="width: 60%;">
                <label class="form-label" style="margin-top: 4%;">Descricao</label>
                <textarea rows="5" required v-model="servico.descricao" class="form-control" placeholder="descricao"></textarea>
            </div>
            <div style="width: 60%;">
                <button class="btn btn-success" @click="CadastrarServico" style="margin-top: 4%; width: 100%;">Novo</button>
            </div>
        </div>
    </div>
</div>
</div>
</template>
<script>
import ServicoDataService from '../../services/ServicoDataService';

export default {
    data() {
        return {
            servico: { 
                nome: '',
                descricao: ''
            }
        }
    },
    methods: {
        CadastrarServico() {
            var data = {
                nome: this.servico.nome,
                descricao: this.servico.descricao
            };

            if(data.nome == '' || data.descricao == '')
                alert("Campo vazio não permitido");
            else
            {
                ServicoDataService.cadastrar(data)
                    .then(() => {
                        this.$router.push('listar');
                    });
            }
        }
    }
}
</script>
<style scoped>
textarea {
    resize: none;
}
</style>