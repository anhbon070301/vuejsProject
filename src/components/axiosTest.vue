<template>
  <el-table :data="this.news">
    <el-table-column label="image" width="200">
      <template #default="scope">
        <img :src="'http://localhost:7882/shop/shop_laravel/public/images/'+scope.row.image" />
      </template>
    </el-table-column>
    <el-table-column prop="title" label="Name" width="180" />
    <el-table-column prop="content" label="Content" />
  </el-table>
</template>

<script>
import News from "../sevice/test";
import detail from "../components/detail.vue";
export default {
  data() {
    return {
      news: []
    };
  },
  created() {
    this.getNew();
  },
  methods: {
    async getNew() {
      const response = await News.getAll("indexNews");
      this.news = response;
      console.log(this.news);
    }
  }
};
</script>
