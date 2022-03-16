import Vue from "vue"
import {
  getIsLogin,
  loginWhiteList
} from "@/util/index.js"

function getAbsoluteUrl(relativeUrl) {
  if (relativeUrl.startsWith('/pages/')) {
    return relativeUrl
  }
  const pages = getCurrentPages()
  const currentPathArr = pages[pages.length - 1].route.split('/')

  const pathArr = relativeUrl.split('/').map((item, index) => {
    if (item === '..') {
      item = currentPathArr[index]
    }
    return item
  })
  return '/' + pathArr.join('/')
}

function wrapOption(option = {}) {
  option.url = getAbsoluteUrl(option.url)
  if (!loginWhiteList.includes(option.url.slice(1)) && !getIsLogin()) {
    option.url = '/pages/login/index?redirectUrl=' + encodeURIComponent(option.url)
  }
  return option
}

export function navigateTo(option = {}) {
  uni.navigateTo(wrapOption(option))
}
Vue.prototype.$navigateTo = navigateTo

export function redirectTo(option = {}) {
  uni.redirectTo(wrapOption(option))
}
Vue.prototype.$redirectTo = redirectTo
