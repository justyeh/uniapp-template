<template>
  <view class="page">
    <button type="default" @click="reduce">-</button>
    <input type="text" v-model="counter" />
    <button type="default" @click="increment">+</button>
  </view>
</template>

<script scoped>
export default {
  data() {
    return {
      counter: this.$store.state.counter
    }
  },
  watch: {
    counter(newVal) {
      this.$store.commit('updateState', { key: 'counter', value: newVal })
    }
  },
  methods: {
    reduce() {
      this.counter--
    },
    increment() {
      this.counter++
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  align-items: center;
  button {
    flex-shrink: 0;
    background-color: $uni-color-primary;
    color: #ffffff;
    height: 100rpx;
    line-height: 100rpx;
    width: 120rpx;
    text-align: center;
  }
  input {
    flex: 1;
    height: 100rpx;
    margin: 20rpx;
    background: $uni-bg-color-grey;
    border: solid 1rpx $uni-border-color;
    border-radius: 10rpx;
    text-align: center;
  }
}
</style>
