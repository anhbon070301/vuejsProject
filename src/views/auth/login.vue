<template>
  <div class="container">
    <div class="row">
      <div
        class="col-sm-4"
        style="margin-left: 38%; margin-top: 10%;"
        v-if="this.$store.state.token === ''"
      >
        <h3 style="text-align: center;">Sign in</h3>

        <input
          type="email"
          name="email"
          class="form-control"
          placeholder="Email"
          v-model="username"
        />
        <br />

        <input
          type="password"
          name="password"
          class="form-control"
          placeholder="Password"
          v-model="password"
        />
        <br />

        <p style="color: red" v-if="msg">{{ msg }}</p>
        <br />

        <div style="margin-left: 25%;">
          <router-link to="/registerVue" class="btn btn-success">Register</router-link>&emsp;
          <button v-on:click="login" class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Auth from "/xampp/htdocs/vuejs-learn/src/sevice/auth";
import Auth from "../../sevice/auth";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
      status: "",
      msg: ""
    };
  },

  methods: {
    ...mapActions(["checkAuthen"]),
    async login() {
      try {
        const credentials = {
          email: this.username,
          password: this.password
        };
        const response = await Auth.login(credentials);
        this.msg = response.msg;
        const token = response.data.token;
        const user = response.data;
        this.$store.dispatch("login", { token, user });
        this.$router.push("/Home");
      } catch (error) {
        this.msg = error.response.data.message;
      }
    }
  }
};
</script>

<script setup>
</script>

<style scoped>
</style>