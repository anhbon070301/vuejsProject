<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <h5>{{news.title}}</h5>
      </div>
    </div>
    <br />

    <div class="row">
      <div class="col-sm-12">
        <img style="width: 30%; margin-left: 35%;" :src="news.image" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <p>{{news.content}}</p>
      </div>
      <div class="col-sm-12">
        <p>
          1. Tạo ra một môi trường làm việc chuyên nghiệp, năng động
          <br />Con người là trung tâm trong chính sách phát triển của CodLUCK. Chúng tôi hướng đến việc xây dựng một môi trường trẻ trung, cởi mở – nơi mà mọi thành viên đều có thể phát huy hết khả năng của mình, tô điểm cho công ty trở nên đa màu sắc nhưng vẫn giữ được tinh thần đoàn kết.
        </p>
      </div>
      <div class="col-sm-12">
        <p>
          2. Mang lại sự hài lòng tuyệt đối cho Khách Hàng
          <br />Khách hàng của CodLUCK sẽ được cung cấp những dịch vụ tốt nhất và sự tư vấn nhiệt tình, phù hợp nhất. Chúng tôi sẽ biến lựa chọn của Khách hàng thành lựa chọn đúng đắn hơn bao giờ hết.
        </p>
      </div>
      <div class="col-sm-12">
        <p>
          3. Đóng góp cho xã hội
          <br />Thế giới đang chuyển mình trong cuộc cách mạng công nghiệp 4.0. Chuyển đổi kĩ thuật số (DX) đang diễn ra nhanh chóng mặt trên nhiều lĩnh vực. Sứ mệnh của chúng tôi là đóng góp vào quá trình chuyển đổi kỹ thuật số của Việt Nam và của thế giới, bằng cách cung cấp các giải pháp DX phù hợp cho doanh nghiệp, cho chính phủ và xã hội.
        </p>
      </div>
      <label type="hidden" for>{{setIdNews}}</label>
    </div>
  </div>
</template>
<script>
import news from "../../sevice/sevice";
export default {
  data() {
    return {
      id: this.$route.params.id,
      idNew: 0,
      news: []
    };
  },
  created() {
    this.getNew();
  },
  computed: {
    setIdNews: function() {
      this.id = this.$route.params.id;
      return this.getNew();
    }
  },
  methods: {
    getNew() {
      news
        .showById(this.id, "/news/detail/")
        .then(res => {
          this.news = res.data;
          console.log("new by id", res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>