<template>
  <div class="app-container">
    <el-row>
      <el-col :offset="3" :span="18"><img style="max-width:100%;" :src="img_url"></el-col>
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
    img_url: {
      get() {
        return this.$store.state.app.body_detect_img_url
      }
    },
    face_detect_result: {
      get() {
        return this.$store.state.app.face_detect_result
      }
    },
    body_detect_result: {
      get() {
        return this.$store.state.app.body_detect_result
      }
    }
  },
  created() {
    setInterval(this.fn, 2000)
  },
  methods: {
    fn() {
      this.$store.dispatch('GetLatestBodyDetectImg')
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

