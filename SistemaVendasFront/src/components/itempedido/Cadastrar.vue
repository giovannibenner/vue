<template>
    <div class="form" style="padding: 1%;">
        <h3>Novo Item</h3>
        <hr/>
        <div class="col-4">
            <div>
                <label class="form-label">PedidoId</label>
                <input type="text" required v-model="item.pedidoId" class="form-control" placeholder="pedidoId">
            </div>
            <div>
                <label class="form-label">ServicoId</label>
                <input type="text" required v-model="item.servicoId" class="form-control" placeholder="servicoId">
            </div>
            <div>
                <label class="form-label">Quantidade</label>
                <input type="text" required v-model="item.quantidade" class="form-control" placeholder="quantidade">
            </div>
            <div>
                <label class="form-label">Valor</label>
                <input type="text" required v-model="item.valor" class="form-control" placeholder="valor">
            </div>
            <button class="btn btn-success" @click="CadastrarItem" style="margin-top: 4%">Cadastrar</button>
        </div>
    </div>
</template>
<script>
import ItemPedidoDataService from '../../services/ItemPedidoDataService';

export default {
    data() {
        return {
            item: { 
                pedidoId: '',
                servicoId: '',
                quantidade: '',
                valor: ''
            }
        }
    },
    methods: {
        CadastrarItem() {
            var data = {
                pedidoId: this.item.pedidoId,
                servicoId: this.item.servicoId,
                quantidade: this.item.quantidade,
                valor: this.item.valor
            };

            ItemPedidoDataService.cadastrar(data)
                .then(() => {
                    this.$router.push('listar');
                });
        }
    }
}
</script>