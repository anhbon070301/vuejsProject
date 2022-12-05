<template>
  <div class="container">
    <div class="row">
      <div style="margin-left:4%" class="col-md-12">
        <div class="title-parent">
          <h4 style="margin-right: 82%">Categories</h4>
          <AddCategory :msg="this.msg" @inputData="postData"></AddCategory>
        </div>
        <UpdateCategory
          :categoryEdit="category"
          :msg="this.msg"
          :dialogFormVisible="this.dialogFormVisible"
          @dataUpdate="dataUpdate"
        ></UpdateCategory>
        <el-table :data="categories.data" style="width: 100%">
          <el-table-column label="Date" prop="created_at" />
          <el-table-column label="Name" prop="name" />
          <el-table-column align="right">
            <template #header>
              <el-input v-model="search" size="small" placeholder="Type to search" />
            </template>
            <template #default="scope">
              <el-button size="small" @click="showEditForm(scope.row.id, scope.row.name)">Edit</el-button>
              <el-button size="small" type="danger" @click="deleteCategory(scope.row.id)">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import category from "/xampp/htdocs/vuejs-learn/src/sevice/sevice";
import AddCategory from "./AddCategoryVue.vue";
import UpdateCategory from "./UpdateCategoryVue.vue";

export default {
  created() {
    this.getCategory();
  },

  data() {
    return {
      Authorization: this.$store.state.token,
      dialogFormVisible: false,
      category: { id: "", name: "" },
      categories: [],
      msg: ""
    };
  },

  methods: {
    async showEditForm(id, name) {
      this.msg = "";
      this.dialogFormVisible = !this.dialogFormVisible;
      this.category.id = id;
      this.category.name = name;
    },

    async getCategory() {
      const response = await category.getAll("categories/");
      this.categories = response;

      console.log("cate", this.categories);
      return this.categories;
    },

    postData(name) {
      this.msg = "";
      const dataPost = { name: name };
      category
        .postAll(dataPost, "categories/create")
        .then(res => {
          console.log(res);
          this.getCategory();
        })
        .catch(error => {
          console.log(error.response.data.message);
          this.msg = error.response.data.message;
        });
    },

    dataUpdate(dataUpdate) {
      category
        .update(dataUpdate, "categories/update")
        .then(res => {
          console.log(res);
          this.getCategory();
          this.dialogFormVisible = false;
        })
        .catch(error => {
          console.log(error);
          this.msg = error.response.data.message;
        });
    },

    async deleteCategory(id) {
      if (confirm("Bạn muốn xóa dòng này?")) {
        try {
          const response = await category.deleteAll(id, "categories/delete/");
          this.msg = response.msg;
          this.getCategory();
        } catch (error) {
          console.log(error);
        }
      }
    }
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
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
.title-parent {
  display: flex;
  margin-left: 2%;
  margin-top: 10px;
}
</style>