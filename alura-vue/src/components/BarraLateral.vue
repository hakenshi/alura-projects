<script setup lang="ts">
import {defineComponent} from "vue";

defineComponent({name: "BarraLateral"})
</script>

<template>
  <header>
    <h1>
      <img src="../assets/vue.svg" alt="vue">
    </h1>
  </header>
</template>

<style scoped>
  header{
    background: #0d3b66;
    width: 100%;
    height: 100vh;
  }
  
  @media only screen and (max-width: 768px) {
      header{
        padding: 2.5rem;
        height: auto;
      }
  }
</style>