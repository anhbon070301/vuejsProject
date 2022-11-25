<template>
  <div>
    <!-- Form -->
    <el-button class="btn btn-primary" text @click="show()">Add Category</el-button>

    <el-dialog v-model="dialogFormVisible" title="Add Category">
      <el-form>
        <el-form-item label="Category Name" :label-width="formLabelWidth">
          <el-input v-model="name" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="submit">Confirm</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import category from "/xampp/htdocs/vuejs-learn/src/store/module/category";
export default {
  name: "AddCategoryVue",
  data() {
    return {
      dialogFormVisible: false,
      name: ""
    };
  },
  methods: {
    show() {
      this.dialogFormVisible = true;
    },
    submit() {
      this.$emit("inputData", this.name);
      this.name = "";
      this.dialogFormVisible = false;
      console.log("submit dang chay");
    }
  }
};
</script>
<style scoped>
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>


