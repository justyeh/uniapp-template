import App from './App'
import Vue from 'vue'
import store from '@/store/index.js'
import mixin from '@/mixin/index.js'
import '@/util/interceptor' // 拦截器
import '@/util/wrapRoute' // 包装uniapp原始路由方法

Vue.use(mixin)

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})

app.$mount();
