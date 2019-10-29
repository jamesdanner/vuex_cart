import Axios from 'axios'

export default {
  async fetchGoods({ commit }) {
    const response = await Axios.get('https://www.fastmock.site/mock/9e87721dd12ab3d9f81deb14e4c67212/cart/goods');
    commit('GET_GOODS_LIST', response.data);
  }
}