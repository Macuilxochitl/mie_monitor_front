<template>
  <div class="app-container">
    <el-row>
      <el-col :offset="3" :span="18"><img style="max-width:100%;" :src="img_url"></el-col>
    </el-row>
    <h1 v-if="faces.length">识别结果：</h1>
    <h1 v-else>暂未识别到人脸！</h1>
    <el-col v-for="face in faces" :span="8" :key="face.id">
      <img :src="face.face_img_url" height="100" width="100">
      年龄：{{ face.attributes.age.value }}
    </el-col>
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
        return this.$store.state.app.img_url
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
    },
    faces: {
      get() {
        return this.$store.state.app.faces
      }
    }
  },
  created() {
    setInterval(this.fn, 2000)
  },
  methods: {
    fn() {
      this.$store.dispatch('GetLatestFaceDetectImg')
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

