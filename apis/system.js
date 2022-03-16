import {getRequest} from "@/util/request.js"
import store from "@/store/index.js"

export function login() {
  uni.setStorageSync('isLogin', true)
  store.commit('updateState', {
    key: 'isLogin',
    value: true
  })
}

export function logout() {
  uni.removeStorageSync('isLogin')
  store.commit('updateState', {
    key: 'isLogin',
    value: false
  })
}

export function getPlatformInfo(){
  return getRequest('/chronic/userPlatformConfig/getBaseInfo?platform=141010')
}
