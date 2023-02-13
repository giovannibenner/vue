<template>
<div style="width: 80%; height: 100vh">
    <h1 style="width: 100%; text-align: center; margin-top: 1rem; font-weight: bold;">
      Seja Bem Vindo ao Sistema Vendas
    </h1>
    <div class="d-flex row justify-content-center align-items-center" style="height: 90%;">
      <div class="card text-white bg-dark">
        <div class="card-body d-flex row justify-content-between">
          <h3>Vendedor</h3>
          <span>Os vendedores no sistema contam com cadastro, atualização, atualização de senha e exclusão.</span>
          <hr>
          <div clas="d-flex justify-content-between" style="display: flex; justify-content: space-between;">
            <a href="/vendedor/listar" class="link-light text-decoration-none">Listar Todos</a>
            <a href="/vendedor/cadastrar" class="link-light text-decoration-none">Novo</a>
          </div>
        </div>
      </div>
      <div class="card text-white bg-dark">
        <div class="card-body d-flex row justify-content-between">
          <h3>Cliente</h3>
          <span>Os clientes no sistema contam com cadastro, atualização, atualização de senha e exclusão.</span>
          <hr>
          <div clas="d-flex justify-content-between" style="display: flex; justify-content: space-between;">
            <a href="/cliente/listar" class="link-light text-decoration-none">Listar Todos</a>
            <a href="/cliente/cadastrar" class="link-light text-decoration-none">Novo</a>
          </div>
        </div>
      </div>
      <div class="card text-white bg-dark">
        <div class="card-body d-flex row justify-content-between">
          <h3>Servico</h3>
          <span>Os servicos podem ser cadastrados, atualizados e excluídos.</span>
          <hr>
          <div clas="d-flex justify-content-between" style="display: flex; justify-content: space-between;">
            <a href="/servico/listar" class="link-light text-decoration-none">Listar Todos</a>
            <a href="/servico/cadastrar" class="link-light text-decoration-none">Novo</a>
          </div>
        </div>
      </div>
      <div class="card text-white bg-dark">
        <div class="card-body d-flex row justify-content-between">
          <h3>Pedido</h3>
          <span>Os pedidos podem ser cadastrados, atualizados, excluídos e vistos.
             A visualização conta com todos itens do pedido, também é possível adicionar e excluir itens.</span>
          <hr>
          <div clas="d-flex justify-content-between" style="display: flex; justify-content: space-between;">
            <a href="/pedido/listar" class="link-light text-decoration-none">Listar Todos</a>
            <a href="/pedido/cadastrar" class="link-light text-decoration-none">Novo</a>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<style scoped>
.card {
  width: 30%;
  height: 30%;
  margin-left: 3rem;
}

.row {
  margin-left: 0;
}
</style>