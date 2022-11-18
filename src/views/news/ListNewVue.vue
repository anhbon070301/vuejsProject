<template>
  <AddNewVue></AddNewVue>
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
            :src="news.image"
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
  async created() {
    //this.$store.dispatch("getNew", this.Authorization);
    const response = await News.getNew(this.Authorization);
    this.$store.dispatch('getNew', response.data.data);
    console.log(response.data.data)
  },

  data() {
    return {
      status: this.$store.state.news.status,
      Authorization: this.$store.state.token,
    };
  },

  methods: {
    async deleteNew(id) {
      try {
        console.log(this.Authorization);
        const response = await News.deleteNew(id,this.Authorization);
        this.msg = response.msg;
      } catch (error) {
        this.msg = error.response.data.message;
      }
    },
  },

  components: {
    AddNewVue
  },

  watch: {

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