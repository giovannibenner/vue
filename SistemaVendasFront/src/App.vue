<script setup>
</script>
<template>
  <div class="d-flex column">
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


body {
  font-family: Arial, Helvetica, sans-serif;

}
</style>
