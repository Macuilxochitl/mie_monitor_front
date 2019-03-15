import request from '@/utils/request'

export function get_img() {
  return request({
    url: '/mon/get_latest_img/',
    method: 'get'
  })
}
