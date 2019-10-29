<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item icon="bag-o">商品列表</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      active: 0,
    };
  },
  watch: {
    active(newValue) {
      switch (newValue) {
        case 0:
          this.$router.push({
            path: '/'
          });
          break;
        case 1:
          this.$router.push({
            path: '/cart'
          });
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style>
#app {
}
</style>
