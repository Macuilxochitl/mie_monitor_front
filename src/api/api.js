import request from '@/utils/request'

export function get_img() {
  return request({
    url: '/mon/get_latest_img/',
    method: 'get'
  })
}

export function get_body_detect_img() {
  return request({
    url: '/mon/get_latest_body_detect_img/',
    method: 'get'
  })
}

export function get_face_detect_img() {
  return request({
    url: '/mon/get_latest_face_detect_img/',
    method: 'get'
  })
}

export function set_alert(enable, num) {
  console.log(enable)
  console.log(num)
  return request({
    url: '/mon/set_alert/',
    method: 'post',
    data: {
      enable: enable,
      num: num
    }
  })
}
