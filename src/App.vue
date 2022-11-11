<script setup lang="ts">
import Header from "./components/Header.vue";
import tinhToan from "./components/tinhToan.vue";
import headerVue from "./views/header.vue";
</script>

<template>
  <header>
    <headerVue></headerVue>
  </header>

  <main style="width: 90%;">
    <router-view></router-view>
  </main>
</template>

<style scoped>
.button {
  display: flex;
  flex-direction: column;
  position: relative;
  left: 0px;
}
</style>

