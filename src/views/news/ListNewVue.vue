<template>
  <AddNewVue></AddNewVue>
  <button class="btn btn-danger" v-on:click="this.$store.dispatch('getNew')">Reset</button>

  <table>
    <thead>
      <th>Title</th>
      <th>Image</th>
      <th>Content</th>
      <th>Action</th>
    </thead>
    <tbody>
      <tr v-for="news in this.$store.state.news.news">
        <td>{{ news.title }}</td>
        <td>
          <img
            :src="'http://localhost:7882/phone/public/images/'+news.image"
            style="width: 150px"
            alt="k load đc"
          />
        </td>
        <td>{{ news.content }}</td>
        <td>
          <button class="btn btn-danger" v-on:click="deleteNew(news.id)">Xóa</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import News from "/xampp/htdocs/vuejs-learn/src/sevice/new";

import AddNewVue from "./AddNewVue.vue";

export default {
  created() {
    this.$store.dispatch("getNew");
  },

  data() {
    return {
      // Note `isActive` is left out and will not appear in the rendered table
      fields: ["title", "image", "content", "Action"],
      status: this.$store.state.news.status,
    };
  },

  methods: {
    deleteNew(id) {
      console.log(id);
    }
  },

  components: {
    AddNewVue
  },

  watch: {
    status: function() {
      console.log("có thay đổi");
      this.$store.dispatch("getNew");
    }
  }
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