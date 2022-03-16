<template>
  <view class="page"><button type="default" @click="sendRequest">发送请求</button></view>
</template>

<script>
import { getPlatformInfo } from '@/apis/system.js'
export default {
  methods: {
    async sendRequest() {
      try {
        const res = await getPlatformInfo()
        console.log(res.body)
      } catch (e) {}
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
