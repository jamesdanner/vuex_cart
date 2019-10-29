<template>
  <div class="item">
    <img :src="goods.thumb" alt="">
    <div class="goods-info">
      <div class="title">{{goods.title}}</div>
      <div class="footer">
        <div class="price">{{goods.money}}</div>
        <van-button class="btn" icon="plus" type="danger" size="small">添加到购物车</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
    }
  }
}
</script>

<style lang="scss">
  .item {
    width: 98%;
    background: white;
    border-radius: 4px;
    margin: 10px auto;
    display: flex;
    img {
      width: 100px;
      height: 100px;
    }
    .goods-info {
      margin-left: 10px;
    }
    .title {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      color: #666666;
    }
    .footer {
      .price {
        font-size: 20px;
        color: red;
      }
      .btn {
        margin-right: 10px;
      }
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
    }
  }
</style>