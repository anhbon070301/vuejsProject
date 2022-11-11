<template>
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
            v-on:click="login({name: this.iptName ,pass: this.iptPass})"
          >Submit</button>
        </td>
        <td>{{ this.iptName }}</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in $store.state.product">
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
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  created() {
    this.$store.dispatch("getProduct");
  },
  data() {
    return {
      iptName: "",
      iptPass: ""
    };
  },
  computed: {
    // ...mapGetters('counter'),
     ...mapMutations('SET_ACCOUNT'),
  },
  methods: {
    ...mapActions(["login"])
  }
};
</script>
