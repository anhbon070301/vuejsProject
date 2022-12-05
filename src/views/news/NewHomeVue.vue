<template>
  <div>
    <div class="row">
      <div class="col-sm-12" style="text-align: center; margin-top: 3%;">
        <h2>
          <strong>Tin tức mới nhất</strong>
        </h2>
      </div>
    </div>
    <br />

    <div class="row">
      <div class="col-sm-6">
        <div class="row">
          <img style="width: 70%; height:250px" :src="dataNew.image" alt="k tải đc" />
        </div>
      </div>

      <div class="col-sm-6">
        <div class="row">
          <h4>{{dataNew.title}}</h4>
        </div>
        <div class="row">
          <p>{{dataNew.content}}</p>
          <router-link
            :to="'detailVue/'+dataNew.id"
            class="btn btn-success"
            style="text-decoration: none; color: white; width: 20%;"
          >Đọc tiếp</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import news from "../../sevice/sevice";
export default {
  data() {
    return {
      dataNew: []
    };
  },
  created() {
    this.getNew();
  },
  methods: {
    getNew() {
      news
        .getAll("news/")
        .then(res => {
          this.dataNew = res.data.data.at(0);
          console.log("data New", this.dataNew);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>