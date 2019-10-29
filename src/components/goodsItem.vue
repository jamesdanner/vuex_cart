<template>
  <div class="item">
    <img :src="goods.thumb" alt="">
    <div class="goods-info">
      <div class="title">{{goods.title}}</div>
      <div class="footer">
        <div class="price">{{goods.money}}</div>
        <van-button class="btn" icon="plus" @click="addGoods" type="danger" size="small">添加到购物车</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations} from 'vuex'
export default {
  props: {
    goods: {
      type: Object,
    }
  },
  methods: {
    ...mapMutations({
      'createGoods': 'cart/CREATE_GOODS_TO_CART',
      'addGoodsCart': 'cart/ADD_GOODS_FROM_CART',
    }),
    addGoods() {
      const hasGoods = this.hasGoods(this.goods);
      if (hasGoods) {
        this.addGoodsCart(this.goods);
      } else {
        this.$toast('添加成功！');
        this.createGoods(this.goods);
      }
    }
  },
  computed: {
    ...mapGetters({
      hasGoods: 'cart/hasGoods',
      cartNumber: 'cart/cartNumber'
    })
  }
}
</script>

<style lang="scss" scope>
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