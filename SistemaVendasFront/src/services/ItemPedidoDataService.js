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
}

export default new ItemPedidoDataService();