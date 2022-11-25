<template>
  <div class="container">
    <div class="row">
      <div style="margin-left:4%" class="col-md-12">
        <AddNewVue :category="categories" @inputData="postNew"></AddNewVue>
        <UpdateNewVue
          :newEdit="this.newUpdate"
          :category="categories"
          :dialogFormVisible="this.dialogFormVisible"
          @dataUpdate="dataUpdate"
        ></UpdateNewVue>
        <el-table :data="news.data.data" style="width: 100%">
          <el-table-column label="Title" prop="title" />
          <el-table-column label="Date" prop="created_at" />
          <el-table-column label="Image" width="200">
            <template #default="scope">
              <img style="width: 100%" :src="scope.row.image" />
            </template>
          </el-table-column>
          <el-table-column align="right">
            <template #header>
              <el-input v-model="search" size="small" placeholder="Type to search" />
            </template>
            <template #default="scope">
              <el-button
                size="small"
                @click="showUpdateForm(scope.row.id, scope.row.category_id, scope.row.content, scope.row.title, scope.row.image)"
              >Edit</el-button>
              <el-button size="small" type="danger" @click="deleteNew(scope.row.id)">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import news from "../../sevice/sevice";
import category from "../../sevice/sevice";

import AddNewVue from "./AddNewVue.vue";
import UpdateNewVue from "./UpdateNewVue.vue";

export default {
  data() {
    return {
      news: [],
      categories: [],
      dialogFormVisible: false,
      newUpdate: { id: "", category_id: "", content: "", title: "", image: "" }
    };
  },

  created() {
    this.getCategory();
    this.getNew();
  },

  methods: {
    getNew() {
      news
        .getAll("news/")
        .then(res => {
          this.news = res;
        })
        .catch(err => {
          console.log(err);
        });
    },

    getCategory() {
      category
        .getAll("categories/")
        .then(res => {
          this.categories = res;
          console.log("cate", this.categories);
        })
        .catch(err => {
          console.log(err);
        });
    },

    postNew(dataNew) {
      news
        .postAll(dataNew, "news/create")
        .then(res => {
          console.log(res);
          this.getNew();
        })
        .catch(error => {
          console.log(error);
        });
    },

    showUpdateForm(id, category_id, content, title, image) {
      this.dialogFormVisible = !this.dialogFormVisible;
      this.newUpdate.id = id;
      this.newUpdate.category_id = category_id;
      this.newUpdate.content = content;
      this.newUpdate.title = title;
      this.newUpdate.image = image;
    },

    dataUpdate(dataUpdate) {
      news
        .update(dataUpdate, "news/update")
        .then(res => {
          console.log(res);
          this.getNew();
        })
        .catch(err => {
          console.log(err);
        });
    },

    deleteNew(id) {
      if (confirm("Bạn muốn xóa dòng này?")) {
        news
          .deleteAll(id, "news/delete/")
          .then(res => {
            this.getNew();
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },

  components: {
    AddNewVue,
    UpdateNewVue
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