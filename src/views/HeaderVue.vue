<template>
  <nav style="background-color: #1be155;" class="navbar navbar-expand-lg">
    <router-link style="margin-left: 5%;" class="nav-link" to="/Home">
      <img
        style="width:100px"
        src="https://codluck.com/wp-content/uploads/2020/08/logo@2x.png"
        alt="CodLUCK Technology ., JSC"
      />
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
          <router-link
            :class="(this.$route.name == 'home' ? 'active' : '') + ' header'"
            to="/Home"
          >Home</router-link>
        </li>

        <li class="nav-item">
          <el-dropdown>
            <span
              :class="(this.$route.name == 'ShowCategoryVue' ? 'active' : '') + ' header dropdown'"
            >Category</span>
            <template #dropdown>
              <el-dropdown-menu v-for="item in categories" :key="item.id">
                <el-dropdown-item @click="showNew(item.id)">{{item.name}}</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </li>

        <li class="nav-item">
          <router-link
            :class="(this.$route.name == 'news' ? 'active' : '') + ' header'"
            :to="'/NewVue/'+0"
          >News</router-link>
        </li>

        <li class="nav-item">
          <router-link :class="'header'" to="/axiosTestVue">About</router-link>
        </li>

        <li class="nav-item">
          <router-link
            :class="(this.$route.name == 'contact' ? 'active' : '') + ' header'"
            to="/Contact"
          >Contact</router-link>
        </li>

        <li style="margin-left: 500px;">
          <ActionVue></ActionVue>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import ActionVue from "../views/auth/ActionVue.vue";
import category from "../sevice/sevice";
export default {
  components: {
    ActionVue
  },
  data() {
    return {
      categories: []
    };
  },
  created() {
    this.getCategory();
  },
  methods: {
    getCategory() {
      category
        .getAll("categories/")
        .then(res => {
          this.categories = res.data;
          console.log("category header", res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    showCategory() {
      this.$router.push("/ShowCategoryVue");
    },
    showNew(id) {
      // this.$router.push(`/NewVue/${id}`);
      this.$router.push("/NewVue/" + id);
    }
  }
};
</script>

<style>
.header {
  font-family: sans-serif;
  margin-left: 20px;
  margin-top: 15px;
  font-weight: bold;
  display: block;
  color: black;
  text-decoration: none;
}
.dropdown {
  margin-top: 18px;
  font-family: sans-serif;
  font-size: 16px;
  height: 80%;
}
.active {
  border-bottom: 5px solid rgb(9, 92, 49);
  height: 80%;
}
</style>