<template>
  <div>
    <div class="row">
      <div class="col-sm-12" style="text-align: center; margin-top: 3%;">
        <h2>
          <strong>Danh sách tin tức</strong>
        </h2>
      </div>
    </div>
    <br />

    <div class="row">
      <div class="col-sm-12" style="text-align: center;">
        <div class="row">
          <div class="col-sm-10" style="margin-left:10%">
            <el-carousel :interval="4000" type="card" height="400px">
              <el-carousel-item v-for="item in news" :key="item">
                <div @click="showNew(item.id)">
                  <img
                    style="width: 30%; height:300px; object-fit: scale-down;"
                    :src="item.image"
                    alt
                  />
                  <div>
                    <span>
                      <b>{{item.title}}</b>
                    </span>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
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
      news: []
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
          this.news = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    showNew(id) {
      this.$router.push("/detailVue/" + id);
    }
  }
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  /* line-height: 200px; */
  margin: 0;
  text-align: center;
}
.el-carousel__item:nth-child(2n) {
}

.el-carousel__item:nth-child(2n + 1) {
}
</style>