<template>
  <view class="page">
    <view class="header">
      <view v-if="isLogin" class="info">
        <image src="../../static/logo.png" mode=""></image>
        <text class="name">{{ userInfo.userName }}</text>
      </view>
      <view v-else><text class="name">当前未登陆</text></view>
      <text v-if="isLogin" class="logout" @click="logout">退出登陆</text>
    </view>
    
    <view class="body">
      <view class="list">
        <view v-for="item in menuList" :key="item.url" class="item" @click="goPage(item)">
          <text>{{ item.label }}</text>
          <view class="arrow"></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { mapState } from 'vuex'
import { logout } from '@/apis/system.js'

export default {
  data() {
    return {
      menuList: [{ url: '/pages/demo/request', label: '网络请求' }, { url: '../demo/vuex', label: 'vuex' }]
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo
    },
    isLogin() {
      return this.$store.state.isLogin
    }
  },
  methods: {
    logout,
    goPage({url}){
      this.$navigateTo({
        url
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: $uni-color-primary;
  padding: 80rpx 20rpx;
  .info {
    display: flex;
    align-items: center;
  }
  image {
    width: 150rpx;
    height: 150rpx;
    border-radius: 20rpx;
  }
  .name {
    color: #ffffff;
    font-size: 50rpx;
    margin-left: 20rpx;
  }
  .logout {
    color: #ffffff;
    font-size: 30rpx;
  }
}

.body {
  padding: 20rpx;
  .item {
    border-bottom: solid 1rpx $uni-border-color;
    padding: 20rpx 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .arrow {
    width: 30rpx;
    height: 30rpx;
    border: solid 1rpx #ffffff;
    border-color: $uni-border-color $uni-border-color #ffffff #ffffff;
    transform: rotate(45deg);
    margin-right: 10rpx;
  }
}
</style>
