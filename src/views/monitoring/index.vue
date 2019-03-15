<template>
  <div class="app-container">
    {{ img_url }}
    <br>
    {{ face_detect_result }}
    <br>
    {{ body_detect_result }}
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
    }
  },
  created() {
    setInterval(this.fn, 2000)
  },
  methods: {
    fn() {
      this.$store.dispatch('GetLatestImg')
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

