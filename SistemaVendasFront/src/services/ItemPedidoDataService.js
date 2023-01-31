import http from "../http-common";

class ItemPedidoDataService {
    listar() {
        return http.get('/itempedido/listar');
    }

    obterPorId(id) {
        return http.get(`/itempedido/${id}`);
    }

    obterPorPedidoId(id) {
        return http.get(`/itempedido/obterpedidoid/${id}`);
    }

    cadastrar(itemPedido) {
        return http.post('/itempedido/', itemPedido)
    }

    atualizar(id, itemPedido) {
        return http.put(`/itempedido/${id}`, itemPedido);
    }
}

export default new ItemPedidoDataService();