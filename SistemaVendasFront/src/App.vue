<script setup>
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

<template>
  <div class="tela">
    <Sidebar/>
    <router-view/>
  </div>
</template>
<script>
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    Sidebar
  }
}
</script>
<style scoped>
.tela {
  width: 100vw;
  height: 100vh;
  display: flex;
}

body {
  font-family: Arial, Helvetica, sans-serif;

}
</style>
