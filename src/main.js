import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'  //使用库进行zrem适配



Vue.config.productionTip = false
import router from './router/index'
import * as API from './api/index'

import store from './store'


import { Search } from 'vant';

Vue.use(Search);

Vue.prototype.$API = API
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
