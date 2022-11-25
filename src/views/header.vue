<script setup lang="ts">
import ActionVue from "../views/auth/ActionVue.vue";
</script>
<template>
  <nav style="background-color: #1be155;" class="navbar navbar-expand-lg">
    <router-link style="margin-left: 5%;" class="nav-link" to="/Home">
      <img style="width: 50px;" src="../assets/logo1.png" alt="k tair ddc" />
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      v-if="this.$store.state.token"
      style="margin-left: 100px;"
      class="collapse navbar-collapse"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link header" style="font-weight: bold;" to="/Home">Home</router-link>
        </li>

        <li class="nav-item">
          <router-link
            class="nav-link header"
            style="font-weight: bold;"
            to="/ShowCategoryVue"
          >Category</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link header" style="font-weight: bold;" to="/NewVue">News</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link header" style="font-weight: bold;" to="/axiosTestVue">About</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link header" style="font-weight: bold;" to="/axiosTestVue">Contact</router-link>
        </li>

        <li style="margin-left: 600px;">
          <ActionVue></ActionVue>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
.header {
  font-family: sans-serif;
}
</style>