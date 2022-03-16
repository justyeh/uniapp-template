// 登陆白名单
export const loginWhiteList = ['pages/home/index', 'pages/login/index']

// 判断是否登陆
export function getIsLogin() {
  try {
    const res = uni.getStorageSync('isLogin')
    return !!res
  } catch (e) {
    return false
  }
}
