<template>
<div class="d-flex justify-content-center align-items-center" style="width: 80%; height: 100%;">
<div class="card" style="width: 80%; height: auto">
    <div class="col-8 p-2 justify-content-center" style="width: 100%; height: 100%;">
        <div class="bg-dark text-white d-flex align-items-center justify-content-center rounded" style="width: 100%;">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
            <h3 class="p-4">Listagem de Itens</h3>
        </div>
        <hr>
        <div class="d-flex p-2 justify-content-center" style="width: 100%">
            <input type="text" class="form-control" v-model="param" placeholder="pesquise por id, servico id ou pedido id" style="width: 60%;">
            <button class="btn btn-success" @click="Pesquisar(this.param)" style="margin-left: 0.5rem; width: 20%;">Pesquisar</button>
        </div>
        <table class="table table-striped">
          <thead class="table-dark">
            <tr>
              <th scope="col" style="width: 5%;">Id</th>
              <th scope="col" style="width: 5%;">PedidoId</th>
              <th scope="col" style="width: 5%;">Pedido</th>
              <th scope="col" style="width: 5%;">ServicoId</th>
              <th scope="col" style="width: 20%;">Servico</th>
              <th scope="col" style="width: 5%;">Qtd</th>
              <th scope="col" style="width: 10%;">Valor</th>
              <th scope="col" style="width: 15%;">Sub Total</th>
              <th scope="col" style="width: 30%;">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in itensPedidos" :key="index">
                <td>{{ item.id }}</td>
                <td>
                    {{ item.pedidoId }}
                    <!-- <button class="btn btn-info" @click="visualizarPedido(item.pedidoId)">Visualizar</button> -->
                </td>
                <td>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16"
                    @click="visualizarPedido(item.pedidoId)">
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                    </svg>
                </td>
                <td>{{ item.servicoId }}</td>
                <td>{{ item.servico }}</td>
                <td>{{ item.quantidade }}</td>
                <td>R${{ item.valor }}</td>
                <td>R${{ item.subTotal }}</td>
                <td>
                    <button class="btn btn-success" @click="editarItemPedido(item.id)">Editar</button>
                    <button class="btn btn-danger" @click="excluirItemPedido(item)">Excluir</button>
                </td>
            </tr>
          </tbody>
        </table>
    </div>
</div>
</div>
</template>
<script>
import ItemPedidoDataService from '../../services/ItemPedidoDataService';
import ServicoDataService from '../../services/ServicoDataService';

export default {
    data() {
        return {
            itensPedidos: [],
            param: ''
        }
    },
    methods: {
        obterItens() {
            ItemPedidoDataService.listar()
                .then(response => {
                    this.itensPedidos = response.data;
                    for(let item in this.itensPedidos)
                                    {
                                        this.itensPedidos[item].subTotal = Number(Number(this.itensPedidos[item].quantidade)
                                                                             * Number(this.itensPedidos[item].valor));
                                    }
                    this.obterServico();
                });
        },
        editarItemPedido(id) {
            this.$router.push('/itempedido/' + id);
        },
        async excluirItemPedido(itempedido) {
            if(confirm(`Tem certeza que deseja excluir o Item ${itempedido.id}?`))
            {
                await ItemPedidoDataService.deletar(itempedido.id);
                this.obterItens();
            }
        },
        visualizarPedido(id) {
            this.$router.push('/visualizarpedido/' + id);
        },
        obterServico() {
            for(let item in this.itensPedidos)
            {
                ServicoDataService.obterPorId(this.itensPedidos[item].servicoId)
                .then(response => {
                    this.itensPedidos[item].servico = response.data.nome;
                });
            }
        },
        Pesquisar(param)
        {
            if(param == '')
                this.obterItens();
            else
            {
                ItemPedidoDataService.listar()
                    .then(response => {
                        this.itensPedidos = [];
                        for(let itemPedido of response.data)
                        {
                            if(itemPedido.id == param ||
                                itemPedido.pedidoId == param ||
                                itemPedido.servicoId == param )
                            {
                                itemPedido.subTotal = Number(Number(itemPedido.quantidade)*Number(itemPedido.valor));

                                ServicoDataService.obterPorId(itemPedido.servicoId)
                                    .then(response => {
                                        itemPedido.servico = response.data.nome;
                                        this.itensPedidos.push(itemPedido);
                                    });
                            }
                        }
                    });
            }
        }
    },
    mounted() {
        this.obterItens();
    }
}
</script>