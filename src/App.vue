<script setup lang="ts">
import Header from "./components/Header.vue";
import tinhToan from "./components/tinhToan.vue";
import HeaderVue from "./views/HeaderVue.vue";
import ActionVue from "./views/auth/ActionVue.vue";
</script>

<template>
  <div>
    <header>
      <HeaderVue></HeaderVue>
    </header>

    <main style="width: 90%;">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.button {
  display: flex;
  flex-direction: column;
  position: relative;
  left: 0px;
}
.navbar1 {
  border: 2px, black;
}
</style>

