// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/store'
import axios from 'axios'
import { post,get,patch,put } from './common/http'
import apiConfig from '../config/api.config'
import 'lib-flexible/flexible'
Vue.use(Vuex,axios);
axios.defaults.baseURL= apiConfig.baseUrl;
Vue.config.productionTip = false;
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$get=get;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.prototype.$http=axios;
Vue.prototype.$url = '/v2/';
// Vue.prototype.$url = 'https://api.douban.com/v2/';  //打包部署上线时
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
