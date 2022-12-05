<template>
  <div>
    <el-dialog v-model="this.dialogFormVisible" title="Update Category">
      <el-form>
        <el-form-item label="Name" :label-width="formLabelWidth">
          <el-input v-model="contactEdit.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Phone" :label-width="formLabelWidth">
          <el-input v-model="contactEdit.phone" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Email" :label-width="formLabelWidth">
          <el-input v-model="contactEdit.email" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Subject" :label-width="formLabelWidth">
          <el-input v-model="contactEdit.subject" autocomplete="off" />
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
export default {
  data() {
    return {
      formLabelWidth: "120px",
      dataUpdate: { id: "", name: "", phone: "", email: "", subject: "" }
    };
  },
  props: {
    dialogFormVisible: { type: Boolean, default: false },
    contactEdit: { type: Object, default: null },
    msg: ""
  },
  methods: {
    show() {
      this.dialogFormVisible = true;
    },
    submit() {
      this.dataUpdate.id = this.contactEdit.id;
      this.dataUpdate.name = this.contactEdit.name;
      this.dataUpdate.phone = this.contactEdit.phone;
      this.dataUpdate.email = this.contactEdit.email;
      this.dataUpdate.subject = this.contactEdit.subject;
      this.$emit("dataUpdate", this.dataUpdate);
      this.dialogFormVisible = false;
    }
  }
};
</script>
<style scoped>
</style>


