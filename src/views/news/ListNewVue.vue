<template>
  <!-- <div class="container">
    <div class="row">
      <div style="margin-left:4%" class="col-md-12">
        <div class="title-parent">
          <h4 style="margin-right: 85%">News</h4>
          <AddNewVue :msg="this.msg" :category="categories" @inputData="postNew"></AddNewVue>
        </div>
        <UpdateNewVue
          :msg="this.msg"
          :newEdit="this.newUpdate"
          :category="categories"
          :dialogFormVisible="this.dialogFormVisible"
          @dataUpdate="dataUpdate"
        ></UpdateNewVue>
        <el-table :data="news.data.data" style="width: 100%">
          <el-table-column class="text-break" label="Title" prop="title" />
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
              <el-button size="small" @click="showUpdateForm(scope.row.id)">Edit</el-button>
              <el-button size="small" type="danger" @click="deleteNew(scope.row.id)">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          small
          background
          @current-change="handleCurrentchange"
          layout="prev, pager, next"
          :total="news.data.total"
          class="mt-4"
        />
      </div>
    </div>
  </div>-->

  <div>
    <div style="margin-left: 5%; margin-top: 20px;">
      <span>
        <b>{{setCategory}}</b>
      </span>
    </div>
    <div class="page">
      <el-card class="box-card" style="margin-left:5%; width:70%; margin-top:20px;">
        <div v-for="item in news.data" :key="item">
          <div @click="showNew(item.id)" class="col-sm-24 new-parent">
            <div class="new-child">
              <span>
                <b>{{item.title}}</b>
              </span>
              <p>{{item.content}}</p>
            </div>
            <div class="new-child-image">
              <img :src="item.image" style="width:150px;" alt />
            </div>
          </div>
          <br />
        </div>
      </el-card>
      <div style="width:30%; margin-top:20px; margin-left:2%;">
        <img
          style="width:100%;"
          src="https://tse4.mm.bing.net/th?id=OIP.2xvSj_JUFBFDeUzlUlG3xQAAAA&pid=Api&P=0"
        />
        &emsp;
        <img
          style="width:100%;"
          src="https://tse4.mm.bing.net/th?id=OIP.2xvSj_JUFBFDeUzlUlG3xQAAAA&pid=Api&P=0"
        />
        &emsp;
        <img
          style="width:100%;"
          src="https://tse4.mm.bing.net/th?id=OIP.2xvSj_JUFBFDeUzlUlG3xQAAAA&pid=Api&P=0"
        />
        &emsp;
        <img
          style="width:100%;"
          src="https://tse4.mm.bing.net/th?id=OIP.2xvSj_JUFBFDeUzlUlG3xQAAAA&pid=Api&P=0"
        />
        &emsp;
        <label type="hidden" for>{{setIdCategory}}</label>
      </div>
    </div>
    <div style="margin-left: 50%">
      <el-pagination
        small
        background
        @current-change="handleCurrentchange"
        layout="prev, pager, next"
        :total="news.total"
        class="mt-4"
      />
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
      idCategory: 0,
      news: [],
      categories: [],
      dialogFormVisible: false,
      newUpdate: {},
      msg: "",
      category: ""
    };
  },

  created() {
    this.getCategory();

    if (this.$route.params.id == "null") {
      this.getNew();
    } else {
      return this.getNewByCategory(this.$route.params.id);
    }
  },

  watch: {
    // idCategorySet: function() {
    //   // this.getNewByCategory(this.idCategory);
    //   console.log("ddang chay 111111");
    // },
    idCategory: function() {
      console.log("đang chạy");
      //this.getNewByCategory(this.idCategory);
    }
  },

  computed: {
    setIdCategory: function() {
      this.idCategory = this.$route.params.id;

      if (this.idCategory == 0) {
        return this.getNew();
      } else {
        this.getCategoryById();
        return this.getNewByCategory(this.idCategory);
      }
    },
    idCategorySet() {
      return this.$route.params.id;
    },
    setCategory() {
      if (this.category != null) {
        return this.category;
      } else {
        return "All";
      }
    }
  },

  methods: {
    getNew() {
      news
        .getAll("news/")
        .then(res => {
          this.news = res.data;
          console.log("data", res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },

    getNewByCategory(category_id) {
      news
        .getbyParams("news/list-news-category", { category_id })
        .then(res => {
          this.news = res.data;
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

    getCategoryById() {
      category
        .showById(this.$route.params.id, "/categories/detail/")
        .then(res => {
          this.category = res.data.name;
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
          console.log(error.response.data);
          this.msg = error.response.data.message;
        });
    },

    showUpdateForm(id) {
      this.msg = "";
      this.dialogFormVisible = !this.dialogFormVisible;
      news
        .showById(id, "news/detail/")
        .then(res => {
          console.log(res);
          this.newUpdate = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },

    dataUpdate(dataUpdate) {
      news
        .update(dataUpdate, "news/update")
        .then(res => {
          console.log(res);
          this.getNew();
          this.dialogFormVisible = false;
        })
        .catch(err => {
          console.log(err);
          this.msg = err.response.data.message;
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
    },

    showNew(id) {
      this.$router.push("/detailVue/" + id);
    },

    handleCurrentchange(val) {
      news.nextpage(val).then(response => {
        this.news = response.data;
      });
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
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
.new-parent {
  display: flex;
  cursor: pointer;
}
.new-child {
  width: 90%;
}
.new-child-image {
  width: 30%;
}
.page {
  display: flex;
}
</style>