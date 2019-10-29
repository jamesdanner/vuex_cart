import Vue from 'vue'
import Router from 'vue-router'

import goodsList from '@/views/goodsList.vue'
import cart from '@/views/cart.vue'


Vue.use(Router)

const router = [
  {
    path: '/',
    name: 'goodsList',
    component: goodsList,
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart,
  }
]

export default new Router({
  routes: router,
})