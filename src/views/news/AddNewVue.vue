
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

        <b-form-group label="Image" label-for="image-input" :state="imageState">
          <img :src="previewImage" style="width: 50%px" class="uploading-image" />
          <input type="file" @change="onFileSelected" />
        </b-form-group>

        <b-form-group>
          <p style="color: red" v-if="msg">{{ msg }}</p>
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
    return {
      selectedFile: null,
      previewImage: null,
      Authorization: this.$store.state.token,
      image: "",
      msg: ""
    };
  },

  methods: {
    onFileSelected(e) {
      this.selectedFile = e.target.files[0];
      const reader = new FileReader();
      console.log(this.selectedFile);
      reader.readAsDataURL(this.selectedFile);
      reader.onload = e => {
        this.previewImage = e.target.result;
        console.log(this.previewImage);
      };
    },
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
        const fd = new FormData();
        fd.append("append", this.selectedFile);
        console.log(fd);


        const credentials = {
          category_id: 1,
          title: this.title,
          content: this.content,
          image: fd
        };

        const response = await News.postNew(credentials, this.Authorization);

        const dataPost = {
          id: response.data.id,
          title: response.data.title,
          content: response.data.content,
          image: response.data.image,
          category_id: response.data.category_id
        };
        this.$store.dispatch("addNew", dataPost);
      } catch (error) {
        this.msg = error.response.data.message;
      }
    },

    handleSubmit() {
      this.postNew();
    }
  }
};
</script>