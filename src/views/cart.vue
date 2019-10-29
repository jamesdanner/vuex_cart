<template>
  <div class="goods-list">
    <van-card
      v-for="item in cart"
      :key="item.id"
      :num="item.number"
      :price="item.money"
      :title="item.title"
      :thumb="item.thumb"
    >
      <div slot="footer">
        <van-button @click="add(item)" size="mini">+</van-button>
        <van-button @click="cut(item)" size="mini">-</van-button>
        <van-button @click="del(item)" size="mini" type="danger">删除</van-button>
      </div>
    </van-card>
    <div class="empty" v-if="cart.length === 0">
      <img src="../assets/pic_blank@3x.png" alt="">
      <p>购物车为空</p>
    </div>
    <div class="submit-bar">
      <div class="price">
        合计： {{totalPrice}}
      </div>
      <van-button type="danger">结算</van-button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      cart: this.$store.state.cart.cart,
    };
  },
  methods: {
    ...mapMutations({
      cutGoods: 'cart/CUT_GOOGS_FROM_CART',
      addGoodsCart: 'cart/ADD_GOODS_FROM_CART',
      delGoods: 'cart/DELETE_GOODS_FROM_CART'
    }),
    cut(goods) {
      if (goods.number > 1) {
        this.cutGoods(goods);
      }
    },
    add(goods) {
      this.addGoodsCart(goods);
    },
    del(goods) {
      this.$dialog.confirm({
        title: '标题',
        message: '确认删除这个商品吗？'
      }).then(() => {
        this.delGoods(goods);
      }).catch(() => {
        // on cancel
      });
    },
    onSubmit() {

    }
  },
  computed: mapGetters({
    totalPrice: 'cart/totalPrice'
  })
}
</script>

<style lang="scss">
.submit-bar {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0px;
  bottom: 50px;
  line-height: 44px;
  background: #cccccc;
  color: white;
  .price {
    padding-left: 10px;
  }
}
.empty {
  text-align: center;
  margin-top: 100px;
  img {
    width: 200px;
  }
  p {
    color: #777777;
  }
}
</style>