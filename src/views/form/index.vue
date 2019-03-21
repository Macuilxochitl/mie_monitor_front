<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">

      <el-form-item label="启用报警">
        <el-switch v-model="form.delivery"/>
      </el-form-item>
      <el-form-item label="报警人数阈值">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="报警方式">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="邮件" name="type"/>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('SetAlert', this.form)
      this.$message('设置完成!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

