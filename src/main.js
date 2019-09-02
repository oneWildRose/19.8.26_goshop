import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/store'

import './mock/mockServer' // 加载mockServer即可
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
});
