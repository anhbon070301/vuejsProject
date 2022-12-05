<template>
  <div>
    <!-- Form -->
    <el-button type="primary" @click="show()">
      <i class="fas fa-plus"></i>
    </el-button>

    <el-dialog v-model="dialogFormVisible" title="Add Contact">
      <el-form>
        <el-form-item label="Name" :label-width="formLabelWidth">
          <el-input v-model="dataContact.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Phone" :label-width="formLabelWidth">
          <el-input v-model="dataContact.phone" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Email" :label-width="formLabelWidth">
          <el-input v-model="dataContact.email" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Subject" :label-width="formLabelWidth">
          <el-input v-model="dataContact.subject" autocomplete="off" />
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
import { ref } from "vue";
export default {
  name: "AddCategoryVue",
  data() {
    return {
      formLabelWidth: "120px",
      dialogFormVisible: false,
      dataContact: { name: "", phone: "", email: null, subject: "" },
      selectedFile: "",
      value: ref("")
    };
  },
  props: {
    category: [],
    msg: ""
  },
  methods: {
    onFileSelected(e) {
      this.dataNew.image = e.target.files[0];
    },
    show() {
      this.dialogFormVisible = true;
    },
    submit() {
      this.$emit("inputData", this.dataContact);

      this.dialogFormVisible = false;
    }
  }
};
</script>