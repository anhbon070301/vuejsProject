<template>
  <div class="container">
    <div class="row">
      <div style="margin-left:4%" class="col-md-12">
        <AddCategory @inputData="postData"></AddCategory>
        <UpdateCategory
          :categoryEdit="category"
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
      categories: []
    };
  },

  methods: {
    async showEditForm(id, name) {
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
      const dataPost = { name: name };
      category
        .postAll(dataPost, "categories/create")
        .then(res => {
          console.log(res);
          this.getCategory();
        })
        .catch(error => {
          console.log(error);
        });
    },

    dataUpdate(dataUpdate) {
      category
        .update(dataUpdate, "categories/update")
        .then(res => {
          console.log(res);
          this.getCategory();
        })
        .catch(error => {
          console.log(error);
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
</style>