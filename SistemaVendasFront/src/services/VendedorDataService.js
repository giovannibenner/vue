import http from "../http-common";

class VendedorDataService {
    listar() {
        return http.get('/vendedor/listar');
    }
}

export default new VendedorDataService();