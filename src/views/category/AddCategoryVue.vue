
<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing>Add Category</b-button>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Add Category"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="Name" label-for="name-input" :state="titleState">
          <b-form-input id="name-input" v-model="name" :state="nameState" required></b-form-input>
        </b-form-group>

        <b-form-group>
          <p style="color: red" v-if="msg">{{ msg }}</p>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import category from "/xampp/htdocs/vuejs-learn/src/sevice/sevice";

export default {
  data() {
    return {
      Authorization: this.$store.state.token,
      msg: ""
    };
  },

  methods: {
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk() {
      this.handleSubmit();
    },

    // async postCategory() {
    //   try {
    //     const credentials = {
    //       name: this.name
    //     };

    //     const response = await category.postAll(
    //       credentials,
    //       this.Authorization,
    //       "categories/create"
    //     );

    //     const dataPost = {
    //         id: response.data.id,
    //       name: response.data.name
    //     };

    //     this.$store.dispatch("addCategory", dataPost);
    //     console.log('a'+dataPost)
    //   } catch (error) {
    //     this.msg = error.response
    //   }
    // },

    handleSubmit() {
      // this.postCategory();
       this.$store.dispatch('postCategory', {name: this.name,token: this.Authorization})
    }
  },

};
</script>