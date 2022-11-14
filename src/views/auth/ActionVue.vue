<template>
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
        <router-link class="dropdown-item" to="/axiosTestVue">List</router-link>
      </li>
      <li>
        <a class="dropdown-item" href="#">Another action</a>
      </li>
      <li v-if="this.$store.state.token === ''">
        <router-link class="dropdown-item" to="/registerVue">Register</router-link>
      </li>
      <li v-if="this.$store.state.token === ''">
        <router-link class="dropdown-item" to="/">Login</router-link>
      </li>
      <li>
        <a
          class="dropdown-item"
          v-if="this.$store.state.token !== ''"
          href="#"
          v-on:click="logout"
        >Logout</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Auth from "/xampp/htdocs/vuejs-learn/src/sevice/auth";

export default {
  data() {
    return {
      routeName: { list: "list", home: "home" },
      token: this.$store.state.token,
      msg: ""
    };
  },

  computed: {},

  methods: {
    ...mapActions(["checkAuthen"]),
    logout() {
      try {
        const credentials = {
          token: this.$store.state.token
        };
        Auth.logout(credentials);
        this.$store.dispatch("logout");
        this.$router.push("/login");
        console.log("Đăng xuất thành công");
      } catch (error) {
        this.msg = error;
        console.log(error);
      }
    }
  }
};
</script>