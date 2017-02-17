// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import resource from 'vue-resource';
import store from './vuexText/startValus'
Vue.use(resource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store
})
