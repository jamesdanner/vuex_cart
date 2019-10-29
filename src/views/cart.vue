<template>
  <div class="goods-list">
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"  
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    >
      <div slot="footer">
        <van-button size="mini">+</van-button>
        <van-button size="mini">-</van-button>
      </div>
    </van-card>

  </div>
</template>

<script>

export default {
  data() {
    return {
      goodsData: this.goodsData,
    };
  }
}
</script>

<style>

</style>