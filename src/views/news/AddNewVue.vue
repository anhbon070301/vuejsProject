
<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Name"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="Title" label-for="title-input" :state="titleState">
          <b-form-input id="title-input" v-model="title" :state="titleState" required></b-form-input>
        </b-form-group>

        <b-form-group label="Content" label-for="content-input" :state="contentState">
          <b-form-input id="content-input" v-model="content" :state="contentState" required></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import News from "/xampp/htdocs/vuejs-learn/src/sevice/new";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {};
  },

  methods: {
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk() {
      // Prevent modal from closing
      //bvModalEvent.preventDefault()
      // Trigger submit handler
      this.handleSubmit();
    },

    async postNew() {
      try {
        const credentials = {
          title: this.title,
          content: this.content
        };
        const response = await News.postNew(credentials);

        const data = {
          id: response.id,
          title: response.title,
          content: response.content,
          image: response.image,
          category_id: response.category_id
        };
        this.$store.dispatch("addNew", data);
      } catch (error) {
        console.log(error);
      }
    },

    handleSubmit() {
      this.postNew();
    }
  }
};
</script>