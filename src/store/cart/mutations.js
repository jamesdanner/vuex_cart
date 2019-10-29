import * as types from './types'
import Vue from 'vue'

export default {
  // 创建一条新数据
  [types.CREATE_GOODS_TO_CART](state, goods) {
    state.cart.push({
      ...goods,
      number: 1
    })
  },
  // 
  [types.ADD_GOODS_FROM_CART](state, goods) {
    const index = state.cart.findIndex(item => item.id === goods.id);
    const item = {
      ...goods,
      number: state.cart[index].number + 1
    }
    Vue.set(state.cart, index, item);
  },
  [types.CUT_GOOGS_FROM_CART](state, goods) {
    const index = state.cart.findIndex(item => item.id === goods.id);
    const item = {
      ...goods,
      number: state.cart[index].number - 1
    }
    Vue.set(state.cart, index, item);
  },
  [types.DELETE_GOODS_FROM_CART](state, goods) {
    const index = state.cart.findIndex(item => item.id === goods.id);
    state.cart.splice(index, 1);
  },
  [types.GET_GOODS_LIST](state, goods) {
    state.goodsList = goods;
  }
}