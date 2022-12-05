<template>
  <el-row :gutter="20">
    <el-col :span="8" :offset="8">
      <div>
        <h1>{{ title }}</h1>
        <el-form-item label="User Id :">
          <span>{{ this.user.id }}</span>
        </el-form-item>
        <el-form-item label="User Name :">
          <span>{{ this.user.name }}</span>
        </el-form-item>
        <el-form-item label="User Email :">
          <span>{{ this.user.email }}</span>
        </el-form-item>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      user: this.$store.state.user.user
    };
  },
  computed: {
    title: function() {
      return "Hello " + this.user.name;
    }
  }
};
</script>