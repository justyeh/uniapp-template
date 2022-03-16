import store from "@/store/index.js"
import {
  getIsLogin,
  loginWhiteList
} from "@/util/index.js"



function checkLogin() {
  const pages = getCurrentPages()
  if (pages.length > 0) {
    const currentRoute = pages[pages.length - 1].route
    if (!loginWhiteList.includes(currentRoute) && !getIsLogin()) {
      uni.redirectTo({
        url: '/pages/login/index'
      })
    }
  }
}

export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          isLoginOriginal: getIsLogin() //onLoad时的登陆状态，避免checkLogin二次触发
        }
      },
      onLoad() {
        checkLogin()
      },
      onShow() {
        this.isLoginOriginal && checkLogin()
      }
    })
  }
}
