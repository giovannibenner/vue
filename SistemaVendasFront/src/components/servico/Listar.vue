<template>
<div class="d-flex justify-content-center align-items-center" style="width: 80%; height: 100%;">
<div class="card" style="width: 70%; height: auto">
    <div class="col-8 p-2 justify-content-center" style="width: 100%; height: 100%;">
        <div class="bg-dark text-white d-flex align-items-center justify-content-center rounded" style="width: 100%;">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
          <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"/>
          <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z"/>
        </svg>
            <h3 class="p-4">Listagem de Serviços</h3>
        </div>
        <hr>
        <div class="d-flex p-2 justify-content-center" style="width: 100%">
            <input type="text" class="form-control" v-model="param" placeholder="pesquise por id, nome ou descricao" style="width: 60%;">
            <button class="btn btn-success" @click="Pesquisar(this.param)" style="margin-left: 0.5rem; width: 20%;">Pesquisar</button>
        </div>
        <table class="table table-striped">
          <thead class="table-dark">
            <tr>
              <th scope="col" style="width: 10%;">Id</th>
              <th scope="col" style="width: 20%;">Nome</th>
              <th scope="col" style="width: 40%;">Descricao</th>
              <th scope="col" style="width: 30%;">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(servico, index) in servicos" :key="index">
                <td>{{ servico.id }}</td>
                <td>{{ servico.nome }}</td>
                <td>{{ servico.descricao }}</td>
                <td>
                    <button class="btn btn-success" @click="editarServico(servico.id)">Editar</button>
                    <button class="btn btn-danger" @click="excluirServico(servico)">Excluir</button>
                </td>
            </tr>
          </tbody>
        </table>
    </div>
</div>
</div>
</template>
<script>
import ServicoDataService from '../../services/ServicoDataService';

export default {
    data() {
        return {
            servicos: [],
            param: ''
        }
    },
    methods: {
        obterServicos() {
            ServicoDataService.listar()
                .then(response => {
                    this.servicos = response.data;
                });
        },
        editarServico(id) {
            this.$router.push('/servico/' + id);
        },
        async excluirServico(servico) {
            if(confirm(`Tem certeza que deseja excluir o servico ${servico.nome}?`))
            {
                await ServicoDataService.deletar(servico.id);
                this.obterServicos();
            }
        },
        Pesquisar(param)
        {
            if(param == '')
                this.obterServicos();
            else
            {
                ServicoDataService.listar()
                    .then(response => {
                        this.servicos = [];
                        for(let servico of response.data)
                        {
                            if(servico.id == param ||
                                servico.nome.toUpperCase().includes(param.toUpperCase()) ||
                                servico.descricao.toUpperCase().includes(param.toUpperCase()))
                            {
                                this.servicos.push(servico)
                            }
                        }
                    });
            }
        }
    },
    mounted() {
        this.obterServicos();
    }
}
</script>