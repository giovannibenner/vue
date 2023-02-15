<template>
    <div class="d-flex justify-content-center align-items-center" style="width: 80%; height: 100%;">
    <div class="card" style="width: 50%; height: auto; padding: 1%;">
        <div class="justify-content-center align-items-center">
            <div class="bg-dark text-white d-flex align-items-center justify-content-center rounded" style="width: 100%;">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <h3 class="p-4">Novo Item</h3>
            </div>
            <hr/>
            <div class="d-flex row align-items-center justify-content-center" style="width: 100%;">
            <div style="width: 60%;">
                <label class="form-label"  style="margin-top: 4%;">Id</label>
                <input type="text" disabled v-model="itemPedido.id" class="form-control">
            </div>
            <div style="width: 60%;">
                <label class="form-label" style="margin-top: 4%;">Id do Pedido</label>
                <input type="text" required v-model="itemPedido.pedidoId" class="form-control" placeholder="pedido id">
            </div>
            <div style="width: 60%;" class="row">
                <label class="form-label" style="margin-top: 4%;">Servico</label>
                <!-- <input type="text" required v-model="item.servicoId" class="form-control" placeholder="servicoId"> -->
                <select v-model="itemPedido.servicoId">
                    <option v-for="(servico, index) in servicos" :key="index" :value="servico.id"> {{ servico.id }} - {{ servico.nome }} </option>
                </select>
            </div>
            <div style="width: 60%;">
                <label class="form-label" style="margin-top: 4%;">Quantidade</label>
                <input type="number" required v-model="itemPedido.quantidade" class="form-control" placeholder="quantidade">
            </div>
            <div style="width: 60%;">
                <label class="form-label" style="margin-top: 4%;">Valor Unitário</label>
                <input type="text" required v-model="itemPedido.valor" class="form-control" placeholder="valor unitario">
            </div>
            <div style="width: 60%;">
                <button class="btn btn-success" @click="AtualizarItemPedido()" style="margin-top: 4%; width: 100%;">Atualizar</button>
            </div>
        </div>
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
            itemPedido: { },
            servicos: []
        }
    },
    methods: {
        ObterItensPedido(id) {
            ItemPedidoDataService.obterPorId(id)
                .then((response) => {
                    this.itemPedido = response.data;
                });
        },
        AtualizarItemPedido() {
            var data = {
                pedidoId: this.itemPedido.pedidoId,
                servicoId: this.itemPedido.servicoId,
                quantidade: this.itemPedido.quantidade,
                valor: this.itemPedido.valor,

            };

            if(this.$route.href.includes("pedido/item"))
            {
                if (data.pedidoId == '' || data.vendedorId == '' || data.quantidade == '' || data.valor == '')
                    alert("Campo vazio não permitido");
                else {
                    ItemPedidoDataService.atualizarPedido(this.itemPedido.id, this.itemPedido)
                        .then(() => {
                            this.$router.push({ name: 'pedidos', params: { id: `${this.itemPedido.pedidoId}` } });
                        });
                }
            }
            else
            {
                if (data.pedidoId == '' || data.vendedorId == '' || data.quantidade == '' || data.valor == '')
                    alert("Campo vazio não permitido");
                else {
                    ItemPedidoDataService.atualizar(this.itemPedido.id, this.itemPedido)
                        .then(() => {
                            this.$router.push('listar/');
                        });
                }
            }
        },
        ObterServicos()
        {
            ServicoDataService.listar()
                                .then(response => {
                                    this.servicos = response.data;
                                });
        }
    },
    mounted() {
        this.ObterItensPedido(this.$route.params.id);
        this.ObterServicos();
    }
}
</script>