import http from "../http-common";

class VendedorDataService {
    listar() {
        return http.get('/vendedor/listar');
    }

    cadastrar(vendedor) {
        return http.post('/vendedor', vendedor)
    }

    atualizar(id, vendedor) {
        return http.put(`/vendedor/${id}`, vendedor);
    }

    obterPorId(id) {
        return http.get(`/vendedor/${id}`);
    }

    atualizarSenha(id, senha) {
        return http.patch(`/vendedor/atualizarsenha/${id}`, senha);
    }

    async deletar(id) {
        return await http.delete(`/vendedor/${id}`);
    }
}

export default new VendedorDataService();