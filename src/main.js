import Vue from 'vue'
import router from './router'
import resource from 'vue-resource';
import store from './vuexText/startValus'
Vue.use(resource)
new Vue({
  el: '#app',
  router,
  store
})