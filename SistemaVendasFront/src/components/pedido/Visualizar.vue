<template>
<div class="d-flex justify-content-center align-items-center" style="width: 80%; height: 100%;">
<div class="card" style="width: 80%; height: auto">
    <div class="col-8 p-2 justify-content-center" style="width: 100%; height: 100%;">
        <div class="p-4 bg-dark text-white d-flex align-items-center rounded" style="width: 100%;">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
            </svg>
            <div style="margin-left: 0.5rem;">
                <h3>Pedido: {{ pedido.id }}</h3>
                <h4>Valor Total: R${{ this.valorTotal.toFixed(2) }}</h4>
            </div>
        </div>
        <hr>
    <div class="form" style="padding: 1%; width: 80%;">
        <h3>Adicionar Item</h3>
        <div class="d-flex" style="width: 100%">
            <div style="width: 20%">
                <label class="form-label">PedidoId</label>
                <input type="text" disabled v-model="pedido.id" class="form-control">
            </div>
            <div style="width: 20%">
                <label class="form-label">ServicoId</label>
                <input type="text" required v-model="itemPedido.servicoId" class="form-control" placeholder="servico id">
            </div>
            <div style="width: 20%">
                <label class="form-label">Quantidade</label>
                <input type="number" required v-model="itemPedido.quantidade" class="form-control" placeholder="quantidade">
            </div>
            <div style="width: 20%">
                <label class="form-label">Valor</label>
                <input type="text" required v-model="itemPedido.valor" class="form-control" placeholder="valor unitario">
            </div>
            <button class="btn btn-success" @click="cadastrarItemPedido" style="margin-top: 4%">Adicionar</button>
        </div>
    </div>
    <hr>
    <div class="col-8" style="width: 100%;">
        <h3>Itens do Pedido</h3>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">PedidoId</th>
              <th scope="col">ServicoId</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Valor</th>
              <th scope="col">Sub Total</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(itempedido, index) in itensPedidos" :key="index">
                <td>{{ itempedido.id }}</td>
                <td>{{ itempedido.pedidoId }}</td>
                <td>{{ itempedido.servicoId }}</td>
                <td>{{ itempedido.quantidade }}</td>
                <td>R${{ itempedido.valor }}</td>
                <td>R${{ itempedido.subTotal.toFixed(2) }}</td>
                <td>
                    <button class="btn btn-success" @click="editarItemPedido(itempedido.id)">Editar</button>
                    <button class="btn btn-danger" @click="excluirItemPedido(itempedido)">Excluir</button>
                </td>
            </tr>
          </tbody>
        </table>
    </div>
</div>
</div>
</div>
</template>
<script>
import PedidoDataService from '../../services/PedidoDataService';
import ItemPedidoDataService from '../../services/ItemPedidoDataService';

export default {
    data() {
        return {
            itensPedidos: [],
            pedido: { 
                data: '',
                vendedorId: '',
                clienteId: ''
            },
            itemPedido: {
                pedidoId: '',
                servicoId: '',
                quantidade: '',
                valor: ''
            },
            valorTotal: 0
        }
    },
    methods: {
        obterItensPedido() {
            ItemPedidoDataService.obterPorPedidoId(this.$route.params.id)
                                 .then(response => {
                                    this.itensPedidos = response.data;
                                    for(let item in this.itensPedidos)
                                    {
                                        this.itensPedidos[item].subTotal = Number(Number(this.itensPedidos[item].quantidade)
                                                                             * Number(this.itensPedidos[item].valor));

                                        this.valorTotal += Number(this.itensPedidos[item].subTotal);
                                    }
                                 });
        },
        obterPedidoInfo() {
            PedidoDataService.obterPorId(this.$route.params.id)
                            .then(response => {
                                this.pedido = response.data;
                            });
        },
        cadastrarItemPedido() {
            var data = {
                pedidoId: this.pedido.id,
                servicoId: this.itemPedido.servicoId,
                quantidade: this.itemPedido.quantidade,
                valor: this.itemPedido.valor,
                subTotal: Number(Number(this.itemPedido.quantidade) * Number(this.itemPedido.valor))
            };

            if (data.pedidoId == '' || data.vendedorId == '' || data.quantidade == '' || data.valor == '')
                alert("Campo vazio não permitido");
            else {
                ItemPedidoDataService.cadastrar(data)
                    .then(() => {
                        this.obterItensPedido()
                    });
            }
        },
        editarItemPedido(id) {
            this.$router.push({name: 'editaritem', params: {id : `${id}`}});
        },
        async excluirItemPedido(itempedido) {
            if(confirm(`Tem certeza que deseja excluir o Item ${itempedido.id}?`))
            {
                await ItemPedidoDataService.deletar(itempedido.id);
                this.obterItensPedido();
            }
        },
    },
    mounted() {
        this.obterItensPedido(),
        this.obterPedidoInfo()
    }
}
</script>