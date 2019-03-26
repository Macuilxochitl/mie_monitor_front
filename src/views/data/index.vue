<template>
  <div class="app-container">
    <el-row>
      <el-col style="text-align: center;">平均人数：{{ mon_data.avg }}</el-col>
    </el-row>
    <el-row>
      <el-col style="text-align: center;">最高人数：{{ mon_data.max }}</el-col>
    </el-row>
    <el-row>
      <el-col style="text-align: center;">出现总人数：{{ mon_data.count }}</el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  data() {
    return {
      mon: {
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
  computed: {
    mon_data: {
      get() {
        return this.$store.state.app.mon_data
      }
    }
  },
  created() {
    this.$store.dispatch('GetMonData')
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>
