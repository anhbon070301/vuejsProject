<template>
  <ModalVue> </ModalVue>
  <div>{{test}}</div>
  <table>
    <thead>
      <tr>
        <th>Tên sản phẩm</th>
        <th>Giá</th>
        <th>Hình ảnh</th>
        <td>
          <input type="text" style="width: 200px;" class="form-control" v-model="iptName" />
        </td>
        <td>
          <input type="pass" style="width: 200px;" class="form-control" v-model="iptPass" />
        </td>
        <td>
          <button
            class="btn btn-primary"
            v-on:click="postName"
          >Submit</button>
                    <button
            class="btn btn-primary"
            v-on:click="testButton"
          >Submit</button>
        </td>

      </tr>
    </thead>
    <tbody>
      <tr v-for="product in this.$store.state.product">
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.image }}</td>
        <td>
          <img
            :src="'http://localhost:7882/phone/public/images/'+product.image"
            style="width: 150px"
            alt="k load đc"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import Auth from '../sevice/auth'
import ModalVue from '../views/ModalVue.vue'
import tinhToan from '../components/tinhToan.vue'

export default {
  data() {
    return {
      info: [],
      iptName: "",
      iptPass: "",
    };
  },
  computed: {
    ...mapGetters(['test']),
    //  ...mapMutations('SET_ACCOUNT'),
  },
  created() {
    this.$store.dispatch("getProduct");
  },
  methods: {
    ...mapActions(["login", "testButton"]),
    postName() {
        const credentials = {
          postName: this.iptName,
          name: this.iptPass
        };
        Auth.postName(credentials);
    }
  },

  components: {
    ModalVue,
    tinhToan
  }
};
</script>
