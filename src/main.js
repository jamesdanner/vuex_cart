import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

Vue.config.productionTip = false
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
