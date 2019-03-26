import Cookies from 'js-cookie'
import { get_img, get_body_detect_img, get_face_detect_img, set_alert, get_mon_data, get_setting_data } from '@/api/api'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    device: 'desktop',
    img_url: '',
    body_detect_img_url: '',
    face_detect_result: '',
    body_detect_result: '',
    faces: [],
    mon_data: '',
    setting_data: ''
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 1)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
    IMG_URL: (state, img_url) => {
      state.img_url = img_url
    },
    FACE_DETECT_RESULT: (state, face_detect_result) => {
      state.face_detect_result = face_detect_result
    },
    BODY_DETECT_RESULT: (state, body_detect_result) => {
      state.body_detect_result = body_detect_result
    },
    BODY_DETECT_IMG_URL: (state, body_detect_img_url) => {
      state.body_detect_img_url = body_detect_img_url
    },
    FACES: (state, faces) => {
      state.faces = faces
    },
    MON_DATA: (state, data) => {
      state.mon_data = data
    },
    SETTING_DATA: (state, data) => {
      state.setting_data = data
    },
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    CloseSideBar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    ToggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },
    GetLatestImg({ commit }) {
      return new Promise((resolve, reject) => {
        console.log('GetLatestImg')
        get_img().then(response => {
          console.log(response.data)
          commit('IMG_URL', response.data.img_url)
          commit('FACE_DETECT_RESULT', response.data.face_detect_result)
          commit('BODY_DETECT_RESULT', response.data.body_detect_result)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetLatestBodyDetectImg({ commit }) {
      return new Promise((resolve, reject) => {
        console.log('GetLatestBodyDetectImg')
        get_body_detect_img().then(response => {
          console.log(response.data)
          commit('BODY_DETECT_IMG_URL', response.data.img_url)
          commit('FACE_DETECT_RESULT', response.data.face_detect_result)
          commit('BODY_DETECT_RESULT', response.data.body_detect_result)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetLatestFaceDetectImg({ commit }) {
      return new Promise((resolve, reject) => {
        console.log('GetLatestFaceDetectImg')
        get_face_detect_img().then(response => {
          console.log(response.data)
          commit('IMG_URL', response.data.img_url)
          commit('FACES', response.data.faces)
          commit('FACE_DETECT_RESULT', response.data.face_detect_result)
          commit('BODY_DETECT_RESULT', response.data.body_detect_result)
        }).catch(error => {
          reject(error)
        })
      })
    },
    SetAlert({ commit }, form) {
      console.log(form)
      return new Promise((resolve, reject) => {
        console.log('SetAlert')
        set_alert(form.delivery, form.name).then(response => {
          console.log(response.data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetMonData({ commit }) {
      return new Promise((resolve, reject) => {
        console.log('GetMonData')
        get_mon_data().then(response => {
          console.log(response.data)
          commit('MON_DATA', response.data.mon_data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetSetting({ commit }) {
      return new Promise((resolve, reject) => {
        console.log('GetSetting')
        get_setting_data().then(response => {
          console.log(response.data)
          commit('SETTING_DATA', response.data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default app
