<template>
    <div class="flex-shrink-0 bg-white" style="width: 20%;">
    <a href="/" class="d-flex align-items-center link-dark text-decoration-none border-bottom">
      <!-- <span class="fs-5 fw-semibold">Home</span> -->
      <h3 class="fw-semibold">Home</h3>
    </a>
    <ul class="list-unstyled ps-0">
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#vendedor-collapse" aria-expanded="false">
          Vendedor
        </button>
        <div class="collapse" id="vendedor-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="/vendedor/listar" class="link-dark rounded">Listar</a></li>
            <li><a href="/vendedor/cadastrar" class="link-dark rounded">Cadastrar</a></li>
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#cliente-collapse" aria-expanded="false">
          Cliente
        </button>
        <div class="collapse" id="cliente-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">Listar</a></li>
            <li><a href="#" class="link-dark rounded">Cadastrar</a></li>
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#pedido-collapse" aria-expanded="false">
          Pedidos
        </button>
        <div class="collapse" id="pedido-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">Listar</a></li>
            <li><a href="#" class="link-dark rounded">Novo</a></li>
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#servico-collapse" aria-expanded="false">
          Serviços
        </button>
        <div class="collapse" id="servico-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">Listar</a></li>
            <li><a href="#" class="link-dark rounded">Novo</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>