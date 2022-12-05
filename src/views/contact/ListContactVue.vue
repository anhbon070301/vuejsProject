<template>
  <div class="container">
    <div class="row">
      <div style="margin-left:4%" class="col-md-12">
        <div class="title-parent">
          <h4 style="margin-right: 83%">Contact</h4>
          <AddContactVue :msg="this.msg" @inputData="postContact"></AddContactVue>
        </div>

        <UpdateContactVue
          :msg="this.msg"
          :contactEdit="this.contactUpdate"
          :dialogFormVisible="this.dialogFormVisible"
          @dataUpdate="dataUpdate"
        ></UpdateContactVue>
        <el-table :data="contact.data" style="width: 100%">
          <el-table-column label="Name" prop="name" />
          <el-table-column label="Email" prop="email" />
          <el-table-column label="Phone" prop="phone" />
          <el-table-column label="Subject" prop="subject" />
          <el-table-column align="right">
            <template #header>
              <el-input v-model="search" size="small" placeholder="Type to search" />
            </template>
            <template #default="scope">
              <el-button size="small" @click="showUpdateForm(scope.row.id)">Edit</el-button>
              <el-button size="small" type="danger" @click="deleteContact(scope.row.id)">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import contact from "../../sevice/sevice";
import AddContactVue from "../contact/AddContactVue.vue";
import UpdateContactVue from "../contact/UpdateContatcVue.vue";

export default {
  data() {
    return {
      contact: [],
      id: null,
      search: null,
      dialogFormVisible: false,
      contactUpdate: {},
      msg: ""
    };
  },

  created() {
    this.getContact();
  },

  methods: {
    getContact() {
      contact
        .getAll("contacts/")
        .then(res => {
          this.contact = res;
        })
        .catch(err => {
          console.log(err);
        });
    },

    postContact(dataContact) {
      contact
        .postAll(dataContact, "contacts/create")
        .then(res => {
          console.log(res);
          this.getContact();
        })
        .catch(error => {
          console.log(error);
          this.msg = error.response.data.message;
        });
    },

    showUpdateForm(id) {
      this.dialogFormVisible = !this.dialogFormVisible;
      contact
        .showById(id, "contacts/detail/")
        .then(res => {
          console.log(res);
          this.contactUpdate = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },

    dataUpdate(dataUpdate) {
      contact
        .update(dataUpdate, "contacts/update")
        .then(res => {
          console.log(res);
          this.getContact();
          this.dialogFormVisible = false;
        })
        .catch(err => {
          console.log(err.response.data.message);
          this.msg = err.response.data.message;
        });
    },

    deleteContact(id) {
      if (confirm("Bạn muốn xóa dòng này?")) {
        contact
          .deleteAll(id, "contacts/delete/")
          .then(res => {
            this.getContact();
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },

    searchList() {
      console.log(this.search);
      contact
        .showById(this.search, "searchContact")
        .then(res => {
          this.contact = res;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  components: {
    AddContactVue,
    UpdateContactVue
  },

  watch: {}
};
</script>

<style scoped>
.title-parent {
  display: flex;
  margin-left: 2%;
  margin-top: 10px;
}
</style>