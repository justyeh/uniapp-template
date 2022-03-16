<template>
  <view class="page">
    <view class="form"><input type="text" v-model="userName" /></view>
    <view class="submit"><button type="default" :disabled="isSaveDisabled" @click="handleSave">保存</button></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userName: this.$store.state.userInfo.userName
    }
  },

  computed: {
    isSaveDisabled() {
      return !this.userName
    }
  },
  methods: {
    handleSave() {
      this.$store.commit('updateState', { key: 'userInfo', value: { userName: this.userName } })
      uni.navigateBack()
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.form {
  flex: 1;
  padding: 20rpx;
  input {
    background: #eee;
    padding: 10rpx;
  }
}

.submit {
  padding: 20rpx;
  button {
    background-color: $uni-color-primary;
    color: #ffffff;
  }
}
</style>
