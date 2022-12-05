<template>
  <div>
    <!-- Form -->
    <el-button type="primary" @click="show()">
      <i class="fas fa-plus"></i>
    </el-button>

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
      <div>
        <span style="color:red">{{msg}}</span>
      </div>
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
  props: {
    msg: ""
  },
  methods: {
    show() {
      this.dialogFormVisible = true;
    },
    submit() {
      this.$emit("inputData", this.name);
      this.name = "";

      this.dialogFormVisible = false;
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


