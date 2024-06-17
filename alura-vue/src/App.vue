<script setup lang="ts">
import BarraLateral from "./components/BarraLateral.vue";
</script>

<template>
<main class="columns is-gapless is-multiline">
  <div class="column is-one-quarter">
    <BarraLateral/>
  </div>
  <div class="column is-three-quarter">
  </div>
</main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
