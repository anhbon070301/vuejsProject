<template>
  <nav style="background-color: #1be155;" class="navbar navbar-expand-lg">
    <router-link style="margin-left: 5%;" class="nav-link" to="/Home">
      <img style="width: 150px;" src="../assets/img3.jpg" alt="k tair ddc" />
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

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/Login">Login</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/registerVue">Register</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/axiosTestVue">List</router-link>
        </li>

        <li>
          <div class="dropdown">
            <button
              class="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-user"></i>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">Action</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Another action</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Logout</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      routeName: { list: "list", home: "home" }
    };
  },

  computed: {
    getRouteName() {
      // return this.$route.name;
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  }
};
</script>

<style>
</style>