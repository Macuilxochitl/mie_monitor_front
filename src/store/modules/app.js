import Cookies from 'js-cookie'
import { get_img } from '@/api/api'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    device: 'desktop',
    img_url: '',
    face_detect_result: '',
    body_detect_result: ''
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
    }
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
    }
  }
}

export default app
