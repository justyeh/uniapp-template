<template>
  <view class="page">
    <text>counter组件</text>
    <counter />
    <view>counter is {{ counter }}</view>
  </view>
</template>

<script>
import counter from './components/counter.vue'
export default {
  components: {
    counter
  },
  data() {
    return {}
  },
  computed: {
    counter() {
      return this.$store.state.counter
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  padding: 20rpx;
}
</style>
