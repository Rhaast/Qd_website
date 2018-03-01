// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
Vue.prototype.$http = axios
import '@/assets/css/reset.css'
import '@/assets/css/style.css'
import {vueAccordion} from 'vue-accordion'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import '@/assets/js/jquery-3.1.0.min.js'
import $ from 'jquery'
Vue.use(iView);


Vue.use(ElementUI)
Vue.component('vue-accordion', vueAccordion)
Vue.config.productionTip = false
/* eslint-disable no-new */
// router.beforeEach((to, from, next) => {
//   if (to.path === '/detailsjob') {
//     alert(11)
//   } else {
//     next()
//   }
// })
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App } 
})
