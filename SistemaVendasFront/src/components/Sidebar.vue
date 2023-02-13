<template>
<div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark min-vh-100">
  <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    <span class="fs-4" style="font-weight: bold;">Sistema Vendas</span>
  </a>
  <hr>
  <ul class="nav nav-pills flex-column mb-auto">
    <li class="nav-item ">
      <button class="btn btn-toggle nav-link text-white" data-bs-toggle="collapse" data-bs-target="#vendedor-collapse" aria-expanded="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
        Vendedor
      </button>
      <div class="collapse " id="vendedor-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small" style=" width: 100%;">
            <li class="hover "><a href="/vendedor/listar" class="link-light rounded text-decoration-none">Listar</a></li>
            <li class="hover "><a href="/vendedor/cadastrar" class="link-light rounded text-decoration-none">Cadastrar</a></li>
          </ul>
      </div>
    </li>
    <hr>
    <li class="nav-item ">
      <button class="btn btn-toggle nav-link text-white" data-bs-toggle="collapse" data-bs-target="#cliente-collapse" aria-expanded="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
        Cliente
      </button>
      <div class="collapse " id="cliente-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small" style=" width: 100%;">
            <li class="hover "><a href="/cliente/listar" class="link-light rounded text-decoration-none">Listar</a></li>
            <li class="hover "><a href="/cliente/cadastrar" class="link-light rounded text-decoration-none">Cadastrar</a></li>
          </ul>
      </div>
    </li>
    <hr>
    <li class="nav-item ">
      <button class="btn btn-toggle nav-link text-white" data-bs-toggle="collapse" data-bs-target="#servico-collapse" aria-expanded="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
          <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"/>
          <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z"/>
        </svg>
        Serviços
      </button>
      <div class="collapse " id="servico-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small" style=" width: 100%;">
            <li class="hover "><a href="/servico/listar" class="link-light rounded text-decoration-none">Listar</a></li>
            <li class="hover "><a href="/servico/cadastrar" class="link-light rounded text-decoration-none">Cadastrar</a></li>
          </ul>
      </div>
    </li>
    <hr>
    <li class="nav-item ">
      <button class="btn btn-toggle nav-link text-white" data-bs-toggle="collapse" data-bs-target="#pedido-collapse" aria-expanded="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
        </svg>
        Pedidos
      </button>
      <div class="collapse " id="pedido-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small" style=" width: 100%;">
            <li class="hover "><a href="/pedido/listar" class="link-light rounded text-decoration-none">Listar</a></li>
            <li class="hover "><a href="/pedido/cadastrar" class="link-light rounded text-decoration-none">Novo</a></li>
          </ul>
      </div>
    </li>
    <hr>
    <li class="nav-item ">
      <button class="btn btn-toggle nav-link text-white" data-bs-toggle="collapse" data-bs-target="#itempedido-collapse" aria-expanded="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        Item Pedido
      </button>
      <div class="collapse" id="itempedido-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small" style=" width: 100%;">
            <li class="hover "><a href="/itempedido/listar" class="link-light rounded text-decoration-none">Listar</a></li>
            <li class="hover "><a href="/itempedido/cadastrar" class="link-light rounded text-decoration-none">Novo</a></li>
          </ul>
      </div>
    </li>
    <hr>
  </ul>
  <!-- <hr>
  <div class="dropdown">
    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
      <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
      <strong>mdo</strong>
    </a>
    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
      <li><a class="dropdown-item" href="#">New project...</a></li>
      <li><a class="dropdown-item" href="#">Settings</a></li>
      <li><a class="dropdown-item" href="#">Profile</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Sign out</a></li>
    </ul>
  </div> -->
</div>
</template>
<style scoped>
  .collapse {
    display: flex;
    justify-content: center;
  }

  .hover:hover {
    background-color: dimgray;
  }

  a {
    display: block;
    width: 100%;
    text-align: center;
  }

  hr {
    margin: 0.5rem;
  }

  button {
    width: 100%;
  }
</style>

<script>
export default {
    name: 'Sidebar'
}
</script>