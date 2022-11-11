<template>
  <h1>Chuỗi ban đầu: {{ message }}</h1>
  <p>Chuỗi viết thường: {{ chuoiThuong }}</p>
  <p>Chuỗi viết hoa: {{ chuoiHoa }}</p>
  <p>Thông điệp bị đảo ngược: {{ resveredMessage }}</p>
  <button class="btn btn-primary" v-on:click="sayHello">Click Me</button>
</template> 

<script>
export default {
  data() {
    return {
      message: "This is my first component using binding data",
      content: "Chuoi viet thuong",
    };
  },

  methods: {
    sayHello() {
      console.log("aBBa".toUpperCase);
      alert("Hello World Vue 2. My Name is Ngo Van Bon");
    },
  },

  computed: {
    resveredMessage() {
      return this.message.split("").reverse().join("");
    },

    chuoiThuong() {
      return this.message.toLowerCase();
    },

    chuoiHoa() {
      return this.message.toUpperCase();
    },
  },
};
</script>