<template>
  <AddCategory></AddCategory>
  <table style="width: 100%">
    <thead>
      <tr style="width: 100%">
        <th style="width: 10%">Id</th>
        <th style="width: 70%">Name</th>
        <th style="width: 20%">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="category in this.$store.state.category.category.data">
        <td>{{ category.id }}</td>
        <td>{{ category.name }}</td>
        <td>
          <button class="btn btn-success" @click="showEditForm(category.id, category.name)">
            <i class="fa fa-edit"></i>
          </button> &emsp;
          <button class="btn btn-danger" v-on:click="deleteCategory(category.id)">
            <i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <UpdateCategory :categoryEdit="this.category" :active.sync="show">
    <button class="btn btn-warning" type="button" @click="show = !show">Close</button> &emsp;
  </UpdateCategory>
</template>

<script>
import category from "/xampp/htdocs/vuejs-learn/src/sevice/sevice";
import AddCategory from "./AddCategoryVue.vue";
import UpdateCategory from "./UpdateCategoryVue.vue";

export default {
  async created() {
    this.$store.dispatch('getCategory', {token: this.Authorization})
  },

  data() {
    return {
      Authorization: this.$store.state.token,
      show: false,
      category: { id: "", name: "" }
    };
  },

  methods: {

    async showEditForm(id, name) {
      this.show = !this.show;
      this.category.id = id;
      this.category.name = name;
    },

    deleteCategory(id) {
      this.$store.dispatch('deleteCategory', {id:id, token: this.Authorization})
    },

  },

  components: {
    AddCategory,
    UpdateCategory
  },

  watch: {}
};
</script>

<style scoped>
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 5%;
}
</style>