<template>
  <view class="page"><button type="default" @click="handleLogin">登陆</button></view>
</template>

<script>
import { login } from '@/apis/system.js'
export default {
  methods: {
    onLoad(e) {
      this.redirectUrl = e.redirectUrl || ''
    },
    handleLogin() {
      login()
      if (this.redirectUrl) {
        uni.redirectTo({ url: decodeURIComponent(this.redirectUrl) })
      } else {
        uni.navigateBack({})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  button {
    background: $uni-color-primary;
    color: #ffffff;
    width: 400rpx;
    line-height: 120rpx;
  }
}
</style>
