import Vuex from "vuex"
import Vue from 'vue'
import {
  getIsLogin
} from '@/util/index.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: getIsLogin(),
    counter: 0,
    userInfo: {
      userName: "test"
    }
  },
  mutations: {
    updateState(state, payload) {
      if (state.hasOwnProperty(payload.key)) {
        state[payload.key] = payload.value
      }
    }
  }
})

export default store
