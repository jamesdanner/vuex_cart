export default {
  hasGoods: state => goods => {
    return state.cart.find(item => item.id === goods.id)
  },
  cartNumber: state => {
    return state.cart.length;
  },
  totalPrice: state => {
    return state.cart.reduce((a, b) =>{
      return a + Number(b.money) * b.number
    }, 0)
  },
  goodsList: state => state.goodsList
}